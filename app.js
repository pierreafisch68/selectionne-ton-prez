(function () {
  "use strict";

  const Q = window.QUIZ;
  const CONFIG = window.CONFIG || {};
  const app = document.getElementById("app");
  const STEP_LABELS = { principe: "Principe", objectif: "Objectif", solution: "Solution" };
  const STEP_HINTS = {
    principe: "Ce que vous croyez",
    objectif: "Ce que vous voulez atteindre",
    solution: "Comment y arriver"
  };

  // ---------- Préparation des données ----------
  const candById = Object.fromEntries(Q.candidates.map((c) => [c.id, c]));
  const flat = [];
  Q.topics.forEach((topic, ti) => {
    topic.questions.forEach((q, qi) => {
      // Position de chaque candidat : index d'option + étiquette éventuelle
      q.positions = {};
      q.options.forEach((opt, oi) => {
        opt.c.forEach((raw) => {
          const [id, tag] = raw.split(":");
          q.positions[id] = { idx: oi, tag: tag || null };
        });
      });
      flat.push({ topic, ti, q, qi });
    });
  });

  const state = {
    i: 0,
    answers: {},      // qid -> index d'option (ordre canonique) ou -1 pour « Sans avis »
    important: new Set(),
    order: {},        // qid -> ordre d'affichage aléatoire
    sent: false
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  flat.forEach(({ q }) => { state.order[q.id] = shuffle(q.options.map((_, i) => i)); });

  // ---------- Utilitaires ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (name) => name.split(/[\s-]+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const tagLabel = (tag) => ({ "2022": "programme 2022", inferred: "position déduite", paraphrase: "propos rapportés" }[tag] || "");

  function setProgress(visible, done, total, label) {
    const p = document.getElementById("progress");
    p.hidden = !visible;
    if (!visible) return;
    document.getElementById("progress-fill").style.width = Math.round((done / total) * 100) + "%";
    document.getElementById("progress-label").textContent = label;
  }

  function render(html) {
    app.innerHTML = html;
    app.firstElementChild && app.firstElementChild.classList.add("enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Écran d'accueil ----------
  function renderIntro() {
    setProgress(false);
    const total = flat.length;
    render(`
      <section class="hero">
        <p class="eyebrow">Présidentielle 2027</p>
        <h1>Quel candidat partage <em>vraiment</em> vos convictions ?</h1>
        <p class="lead">${Q.topics.length} grands thèmes, ${total} questions. Pour chaque thème : vos <b>principes</b>, vos <b>objectifs</b>, puis les <b>solutions</b> que vous préférez. À la fin, votre podium des ${Q.candidates.length} candidats, avec les citations et les sources de chaque position.</p>
        <div class="chips">
          ${Q.topics.map((t) => `<span class="chip">${t.icon} ${esc(t.title)}</span>`).join("")}
        </div>
        <div class="hero-actions">
          <button class="btn primary big" id="start">Commencer le quiz <span aria-hidden="true">→</span></button>
          <span class="muted">Environ 8 minutes · Anonyme · Aucune inscription</span>
        </div>
        <h2 class="cands-title">Les ${Q.candidates.length} candidats comparés</h2>
        <ul class="cands">
          ${Q.candidates.map((c) => `<li style="--col:${c.color}"><div class="photo mini" data-photo="${c.id}"><span class="ini">${initials(c.name)}</span></div><b>${esc(c.name)}</b><span>${esc(c.party)}</span></li>`).join("")}
        </ul>
        <p class="muted small cands-note">D'autres candidats seront ajoutés à mesure que leurs programmes seront publiés.</p>
        <div class="facts">
          <div><b>Neutre</b><span>Les réponses sont mélangées à chaque question, et les noms n'apparaissent qu'à la fin.</span></div>
          <div><b>Sourcé</b><span>Chaque position renvoie à une citation et à la page où elle a été trouvée.</span></div>
          <div><b>Anonyme</b><span>Ni compte, ni cookie, ni adresse IP conservée.</span></div>
        </div>
      </section>`);
    app.querySelectorAll("[data-photo]").forEach(loadPhoto);
    document.getElementById("start").onclick = () => { state.i = 0; renderQuestion(); };
  }

  // ---------- Question ----------
  function renderQuestion() {
    const { topic, ti, q, qi } = flat[state.i];
    const answered = Object.keys(state.answers).length;
    setProgress(true, state.i, flat.length, `Thème ${ti + 1}/${Q.topics.length} · Question ${state.i + 1}/${flat.length}`);
    const current = state.answers[q.id];
    const order = state.order[q.id];
    const isImportant = state.important.has(topic.id);

    render(`
      <section class="card question">
        <div class="q-head">
          <span class="topic-badge">${topic.icon} ${esc(topic.title)}</span>
          <button class="star ${isImportant ? "on" : ""}" id="star" aria-pressed="${isImportant}" title="Ce thème comptera double">
            <span aria-hidden="true">${isImportant ? "★" : "☆"}</span> Important pour moi
          </button>
        </div>
        <ol class="steps" aria-label="Étapes du thème">
          ${topic.questions.map((qq, k) => `<li class="${k < qi ? "done" : k === qi ? "now" : ""}"><span>${k + 1}</span>${STEP_LABELS[qq.step]}</li>`).join("")}
        </ol>
        <p class="step-hint">${STEP_LABELS[q.step]} · ${STEP_HINTS[q.step]}</p>
        <h2>${esc(q.text)}</h2>
        <div class="options" role="radiogroup" aria-label="${esc(q.text)}">
          ${order.map((oi, k) => `
            <button class="option ${current === oi ? "selected" : ""}" role="radio" aria-checked="${current === oi}" data-oi="${oi}" style="--d:${k * 45}ms">
              <span class="key">${String.fromCharCode(65 + k)}</span><span class="txt">${esc(q.options[oi].t)}</span>
            </button>`).join("")}
        </div>
        <div class="q-foot">
          <button class="btn ghost" id="back" ${state.i === 0 ? "disabled" : ""}>← Retour</button>
          <button class="btn ghost ${current === -1 ? "selected" : ""}" id="skip">Sans avis</button>
        </div>
      </section>`);

    app.querySelectorAll(".option").forEach((b) => {
      b.onclick = () => choose(q.id, Number(b.dataset.oi));
    });
    document.getElementById("skip").onclick = () => choose(q.id, -1);
    document.getElementById("back").onclick = () => { if (state.i > 0) { state.i--; renderQuestion(); } };
    document.getElementById("star").onclick = () => {
      state.important.has(topic.id) ? state.important.delete(topic.id) : state.important.add(topic.id);
      renderQuestion();
    };
    void answered;
  }

  function choose(qid, oi) {
    state.answers[qid] = oi;
    const btn = app.querySelector(oi === -1 ? "#skip" : `.option[data-oi="${oi}"]`);
    if (btn) btn.classList.add("selected");
    setTimeout(() => {
      if (state.i < flat.length - 1) { state.i++; renderQuestion(); }
      else renderResults();
    }, 220);
  }

  document.addEventListener("keydown", (e) => {
    if (!app.querySelector(".question")) return;
    const k = e.key.toUpperCase();
    if (k.length === 1 && k >= "A" && k <= "F") {
      const btn = app.querySelectorAll(".option")[k.charCodeAt(0) - 65];
      if (btn) btn.click();
    } else if (e.key === "Backspace" || e.key === "ArrowLeft") {
      document.getElementById("back").click();
    }
  });

  // ---------- Score ----------
  function adjacent(q, a, b) {
    if (q.adjacency) return q.adjacency.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
    return Math.abs(a - b) === 1;
  }

  function computeScores() {
    const res = {};
    Q.candidates.forEach((c) => { res[c.id] = { pts: 0, max: 0, topics: {} }; });
    flat.forEach(({ topic, q }) => {
      const ans = state.answers[q.id];
      if (ans === undefined || ans === -1) return;
      const w = state.important.has(topic.id) ? 2 : 1;
      Q.candidates.forEach((c) => {
        const pos = q.positions[c.id];
        if (!pos) return;
        const s = pos.idx === ans ? 1 : adjacent(q, pos.idx, ans) ? 0.5 : 0;
        const r = res[c.id];
        r.pts += s * w; r.max += w;
        const t = (r.topics[topic.id] = r.topics[topic.id] || { pts: 0, max: 0 });
        t.pts += s; t.max += 1;
      });
    });
    return Q.candidates
      .map((c) => ({ c, pct: res[c.id].max ? res[c.id].pts / res[c.id].max : null, ...res[c.id] }))
      .filter((r) => r.pct !== null)
      .sort((a, b) => b.pct - a.pct || b.max - a.max);
  }

  // ---------- Résultats ----------
  function renderResults() {
    setProgress(true, flat.length, flat.length, "Terminé !");
    const ranking = computeScores();
    if (!ranking.length) {
      render(`<section class="card"><h2>Pas assez de réponses</h2><p>Vous avez répondu « Sans avis » partout. Recommencez pour obtenir votre podium.</p><button class="btn primary" id="restart">Recommencer</button></section>`);
      document.getElementById("restart").onclick = restart;
      return;
    }
    const top = ranking.slice(0, 3);
    const podiumOrder = [top[1], top[0], top[2]].filter(Boolean);
    const place = (r) => top.indexOf(r) + 1;

    render(`
      <section class="results">
        <p class="eyebrow">Votre podium</p>
        <h1>Les candidats les plus proches de vous</h1>
        <div class="podium">
          ${podiumOrder.map((r) => podiumCard(r, place(r))).join("")}
        </div>

        <div class="card ranking">
          <h3>Classement complet</h3>
          ${ranking.map((r, k) => `
            <div class="rank-row">
              <span class="rank-n">${k + 1}</span>
              <span class="rank-name">${esc(r.c.name)}<small>${esc(r.c.party)}</small></span>
              <span class="rank-bar"><span style="--w:${Math.round(r.pct * 100)}%;--col:${r.c.color}"></span></span>
              <span class="rank-pct">${Math.round(r.pct * 100)} %</span>
            </div>`).join("")}
        </div>

        <div class="card detail">
          <h3>Thème par thème : vos choix et les positions des candidats</h3>
          <p class="muted">Pour chaque thème, la solution que vous avez choisie et celle de chaque candidat du podium, avec la citation et sa source.</p>
          ${Q.topics.map((t) => topicDetail(t, top)).join("")}
        </div>

        ${referencesHtml(ranking)}

        <div class="actions">
          <button class="btn primary" id="restart">Recommencer</button>
          <button class="btn ghost" id="method">Méthode et sources</button>
        </div>
      </section>`);

    document.getElementById("restart").onclick = restart;
    document.getElementById("method").onclick = renderMethod;
    app.querySelectorAll("[data-photo]").forEach(loadPhoto);
    requestAnimationFrame(() => app.querySelectorAll(".podium .step").forEach((el) => el.classList.add("up")));
    sendResults(ranking);
  }

  function podiumCard(r, place) {
    const best = Object.entries(r.topics)
      .filter(([, t]) => t.max)
      .map(([id, t]) => ({ id, v: t.pts / t.max }))
      .sort((a, b) => b.v - a.v)
      .slice(0, 3)
      .map((x) => Q.topics.find((t) => t.id === x.id));
    const medal = ["", "🥇", "🥈", "🥉"][place];
    return `
      <article class="pcard place-${place}" style="--col:${r.c.color}">
        <div class="photo" data-photo="${r.c.id}"><span class="ini">${initials(r.c.name)}</span></div>
        <div class="medal" aria-label="Place ${place}">${medal}</div>
        <h2>${esc(r.c.name)}</h2>
        <p class="party">${esc(r.c.party)}</p>
        <p class="pct"><span class="count" data-to="${Math.round(r.pct * 100)}">${Math.round(r.pct * 100)}</span> %</p>
        <p class="muted small">de concordance</p>
        ${best.length ? `<p class="agree">Le plus proche de vous sur :</p><div class="chips">${best.map((t) => `<span class="chip">${t.icon} ${esc(t.title)}</span>`).join("")}</div>` : ""}
        ${r.c.note ? `<p class="note">${esc(r.c.note)}</p>` : ""}
        <p class="credit" data-credit="${r.c.id}"></p>
        <div class="step"><span>${place}</span></div>
      </article>`;
  }

  // Références : toutes les sources, regroupées par candidat (ordre du classement)
  function referencesHtml(ranking) {
    const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
    const groups = ranking.map((r) => {
      const bySrc = new Map();
      Q.topics.forEach((t) => {
        const ev = t.evidence[r.c.id];
        if (!ev || !Q.sources[ev.s]) return;
        if (!bySrc.has(ev.s)) bySrc.set(ev.s, []);
        bySrc.get(ev.s).push(t.title);
      });
      if (!bySrc.size) return "";
      return `<div class="ref-group" style="--col:${r.c.color}">
          <h4>${esc(r.c.name)} <span class="muted">· ${esc(r.c.party)}</span></h4>
          <ol>${[...bySrc].map(([k, topics]) => `<li><a href="${esc(Q.sources[k])}" target="_blank" rel="noopener">${esc(Q.sourceLabels[k] || k)}</a> <span class="ref-host">${esc(host(Q.sources[k]))}</span><span class="ref-topics">${topics.map(esc).join(" · ")}</span></li>`).join("")}</ol>
        </div>`;
    }).join("");
    return `<div class="card references" id="references">
          <h3>Références</h3>
          <p class="muted">Toutes les sources des citations utilisées dans ce quiz, par candidat, avec les thèmes qu'elles documentent. Données du ${esc(Q.version)}.</p>
          <div class="ref-grid">${groups}</div>
        </div>`;
  }

  function evidenceHtml(topic, cid) {
    const ev = topic.evidence[cid];
    if (!ev) return `<p class="muted small">Pas encore de position sourcée sur ce thème.</p>`;
    const url = Q.sources[ev.s];
    const lab = Q.sourceLabels[ev.s] || "Source";
    return `<blockquote>« ${esc(ev.q)} »</blockquote>
      <p class="src"><a href="${esc(url)}" target="_blank" rel="noopener">${esc(lab)} ↗</a>${ev.tag ? ` <span class="tag">${tagLabel(ev.tag)}</span>` : ""}</p>`;
  }

  function topicDetail(topic, top) {
    const sol = topic.questions.find((q) => q.step === "solution") || topic.questions[topic.questions.length - 1];
    const ans = state.answers[sol.id];
    const yours = ans === undefined || ans === -1 ? "Sans avis" : sol.options[ans].t;
    const answered = ans !== undefined && ans !== -1;
    // Candidats qui défendent la solution choisie, y compris hors podium
    const holders = answered ? Q.candidates.filter((c) => sol.positions[c.id] && sol.positions[c.id].idx === ans) : [];
    const holdersLine = !answered ? "" : holders.length
      ? `<div class="holders">Défendue par : ${holders.map((c) => `<span class="chip" style="--col:${c.color}"><i></i>${esc(c.name)}${sol.positions[c.id].tag ? ` <small>(${tagLabel(sol.positions[c.id].tag)})</small>` : ""}</span>`).join("")}</div>`
      : `<div class="holders muted">Aucun des candidats ne défend cette solution.</div>`;
    const topIds = new Set(top.map((r) => r.c.id));
    const shown = top.concat(holders.filter((c) => !topIds.has(c.id)).map((c) => ({ c, extra: true })));
    return `
      <details class="topic">
        <summary><span>${topic.icon} ${esc(topic.title)}</span>${state.important.has(topic.id) ? `<span class="tag star-tag">★ important</span>` : ""}</summary>
        <div class="yours"><b>Votre solution :</b> ${esc(yours)}${holdersLine}</div>
        <div class="ev-grid">
          ${shown.map((r) => {
            const pos = sol.positions[r.c.id];
            return `<div class="ev${r.extra ? " extra" : ""}" style="--col:${r.c.color}">
              <h4>${esc(r.c.name)} ${pos && ans === pos.idx ? `<span class="tag ok">même choix</span>` : ""}${r.extra ? ` <span class="tag">hors podium</span>` : ""}</h4>
              <p>${pos ? esc(sol.options[pos.idx].t) : `<span class="muted">Pas de position connue.</span>`}${pos && pos.tag ? ` <span class="tag">${tagLabel(pos.tag)}</span>` : ""}</p>
              ${evidenceHtml(topic, r.c.id)}
            </div>`;
          }).join("")}
        </div>
      </details>`;
  }

  // ---------- Photos (Wikimedia Commons, chargées dans le navigateur) ----------
  const photoCache = {};
  function loadPhoto(el) {
    const c = candById[el.dataset.photo];
    if (!c || !c.wiki) return;
    const p = photoCache[c.id] || (photoCache[c.id] = fetchPhoto(c));
    p.then((info) => {
      if (!info) return;
      el.style.backgroundImage = `url("${info.src}")`;
      el.classList.add("has-img");
      if (info.credit) el.title = `Photo : ${info.credit} (${info.license || "Wikimedia Commons"})`;
      const cr = app.querySelector(`[data-credit="${c.id}"]`);
      if (cr && info.credit) cr.innerHTML = `Photo : ${esc(info.credit)} · <a href="${esc(info.page)}" target="_blank" rel="noopener">${esc(info.license || "Wikimedia Commons")}</a>`;
    }).catch(() => {});
  }

  async function fetchPhoto(c) {
    const r = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(c.wiki)}`);
    if (!r.ok) return null;
    const j = await r.json();
    const src = (j.thumbnail && j.thumbnail.source) || (j.originalimage && j.originalimage.source);
    if (!src) return null;
    const orig = (j.originalimage && j.originalimage.source) || src;
    const file = decodeURIComponent(orig.split("/").pop()).replace(/^\d+px-/, "");
    const info = { src, page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`, credit: "", license: "" };
    try {
      const m = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&format=json&origin=*&titles=File:${encodeURIComponent(file)}`);
      const mj = await m.json();
      const page = Object.values(mj.query.pages)[0];
      const meta = page.imageinfo[0].extmetadata;
      const strip = (h) => { const d = document.createElement("div"); d.innerHTML = h || ""; return d.textContent.trim(); };
      info.credit = strip(meta.Artist && meta.Artist.value);
      info.license = strip(meta.LicenseShortName && meta.LicenseShortName.value);
    } catch (e) { /* le crédit reste générique */ }
    return info;
  }

  // ---------- Enregistrement anonyme ----------
  function sendResults(ranking) {
    if (state.sent || !CONFIG.RESULTS_ENDPOINT) return;
    state.sent = true;
    const payload = {
      quiz_version: Q.version,
      day: new Date().toISOString().slice(0, 10),
      answers: Object.fromEntries(flat.map(({ q }) => [q.id, state.answers[q.id] === undefined ? null : state.answers[q.id]])),
      important: [...state.important],
      scores: Object.fromEntries(ranking.map((r) => [r.c.id, Math.round(r.pct * 1000) / 10])),
      top: ranking.slice(0, 3).map((r) => r.c.id)
    };
    fetch(CONFIG.RESULTS_ENDPOINT, {
      method: "POST",
      headers: Object.assign({ "Content-Type": "application/json" }, CONFIG.RESULTS_HEADERS || {}),
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: "omit"
    }).catch(() => {});
  }

  // ---------- Méthode ----------
  function renderMethod() {
    setProgress(false);
    const used = new Set();
    Q.topics.forEach((t) => Object.values(t.evidence).forEach((e) => used.add(e.s)));
    render(`
      <section class="card prose" id="methode">
        <h1>Méthode et sources</h1>
        <h3>Comment le quiz est construit</h3>
        <p>Pour chacun des ${Q.topics.length} thèmes, trois questions : vos principes, votre objectif, puis la solution que vous préférez. Chaque réponse correspond à la position d'un ou plusieurs candidats, établie à partir de leurs programmes et déclarations publiques.</p>
        <h3>Comment le score est calculé</h3>
        <ul>
          <li>Même réponse que le candidat : 1 point. Réponse voisine : ½ point. Sinon : 0.</li>
          <li>« Sans avis » retire la question de votre score.</li>
          <li>Un thème marqué « Important pour moi » compte double.</li>
          <li>Un candidat sans position connue sur une question n'est ni avantagé ni pénalisé : la question est retirée de son score.</li>
          <li>Les réponses sont présentées dans un ordre aléatoire, et les noms des candidats n'apparaissent qu'à la fin.</li>
        </ul>
        <h3>Étiquettes</h3>
        <ul>
          <li><span class="tag">programme 2022</span> : la position vient du programme de 2022, faute de programme 2027 publié.</li>
          <li><span class="tag">position déduite</span> : la position est déduite des mesures du candidat, sans déclaration explicite.</li>
          <li><span class="tag">propos rapportés</span> : la citation est une formulation du média, pas les mots du candidat.</li>
        </ul>
        <h3>Anonymat</h3>
        <p>Aucun compte, aucun cookie, aucune adresse IP conservée. ${CONFIG.RESULTS_ENDPOINT ? "Vos réponses sont enregistrées de façon anonyme, avec la seule date du jour, pour établir des statistiques." : "Aucune réponse n'est enregistrée pour le moment."}</p>
        <h3>Sources (version du ${esc(Q.version)})</h3>
        <ul class="sources">
          ${[...used].map((k) => `<li><a href="${esc(Q.sources[k])}" target="_blank" rel="noopener">${esc(Q.sourceLabels[k] || k)}</a></li>`).join("")}
        </ul>
        <p class="muted">Les programmes 2027 ne sont pas tous publiés : le quiz sera mis à jour au fil de la campagne.</p>
        <button class="btn primary" id="home">Retour</button>
      </section>`);
    document.getElementById("home").onclick = () => (Object.keys(state.answers).length === flat.length ? renderResults() : renderIntro());
  }

  function restart() {
    state.i = 0; state.answers = {}; state.important.clear(); state.sent = false;
    flat.forEach(({ q }) => { state.order[q.id] = shuffle(q.options.map((_, i) => i)); });
    renderIntro();
  }

  document.getElementById("link-method").onclick = (e) => { e.preventDefault(); renderMethod(); };

  // Points d'accès pour les tests
  window.__quiz = { state, flat, computeScores, renderResults };

  renderIntro();
})();
