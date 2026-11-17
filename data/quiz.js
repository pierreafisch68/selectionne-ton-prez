// Données du quiz SelectionneTonPrez.
// Pour ajouter un candidat : l'ajouter dans `candidates`, puis ajouter son id
// dans les options (champ `c`) et sa citation dans `evidence` de chaque thème.
// Étiquettes possibles après l'id : ":2022" (programme 2022) ou ":inferred" (position déduite).
window.QUIZ = {
  version: "2026-11-17",
  sources: {
    RN22: "https://rassemblementnational.fr/22-mesures",
    PS_LP_RET: "https://www.publicsenat.fr/actualites/politique/presidentielle-2027-que-contient-la-reforme-des-retraites-presentee-par-marine-le-pen",
    MV: "https://www.moneyvox.fr/impot/actualites/110673/140-milliards-economies-ce-quil-faut-retenir-de-intervention-de-marine-le-pen",
    BAM_DET: "https://fr.businessam.be/le-pen-propose-un-echange-conditionnel-pour-la-dissuasion-nucleaire-francaise/",
    PM_UKR: "https://www.parismatch.be/actualites/monde/2026/10/15/presidentielle-francaise-si-elle-arrive-a-lelysee-marine-le-pen-promet-de-couper-laide-a-lukraine-je-ne-prends-personne-en-traitre-EKOIX7JLGZBBTPVJXNLDVDTVXY/",
    VOT_MEL: "https://votons-2027.fr/candidats/melenchon/programme",
    LCP_MEL: "https://lcp.fr/actualites/presidentielle-2027-ce-qui-change-dans-le-nouveau-programme-de-jean-luc-melenchon-444841",
    EP: "https://www.edouardphilippe.fr/programme",
    EP_TRAVAIL: "https://www.edouardphilippe.fr/programme/travail",
    EP_RETRAITES: "https://www.edouardphilippe.fr/programme/retraites",
    EP_DEFENSE: "https://www.edouardphilippe.fr/programme/defense",
    EP_COMPTES: "https://www.edouardphilippe.fr/programme/comptes-publics",
    EP_ENERGIE: "https://www.edouardphilippe.fr/programme/energie",
    PP: "https://place-publique.eu/pages/6mRSwq5tuSrSi68Cw1IADX/l-acte-i",
    LCP_GL: "https://lcp.fr/actualites/presidentielle-raphael-glucksmann-devoile-les-premieres-lignes-de-son-possible-programme",
    RFI_GL: "https://www.dakaractu.com/Presidentielle-en-France-Raphael-Glucksmann-presente-son-projet-de-revolution-ecologique_a278006.amp.html",
    NE_AMB: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/",
    NE_DEST: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/",
    NE_REN: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/",
    NE_SANTE: "https://www.unenouvelleenergie.fr/notre-programme/sante/",
    NE_FAQ: "https://www.unenouvelleenergie.fr/questions/quel-candidat-veut-renforcer-l-armee/",
    VOT_RET: "https://votons-2027.fr/candidats/retailleau/programme",
    PS_RET: "https://www.publicsenat.fr/actualites/economie/presidentielle-2027-bruno-retailleau-sengage-sur-un-plan-deconomies-de-pres-de-200-milliards-deuros-sil-est-elu",
    LCP_RET: "https://lcp.fr/actualites/face-a-une-france-quasiment-en-faillite-bruno-retailleau-presente-un-plan-d-economies-de",
    PS_RET22: "https://www.publicsenat.fr/actualites/non-classe/il-faut-que-la-france-s-affirme-aux-cotes-du-peuple-ukrainien-bruno-retailleau",
    D92_RET: "https://www.defense-92.fr/politique/presidentielle-2027-bruno-retailleau-presente-a-nanterre-son-plan-durgence-contre-les-trafics-87292"
  },
  sourceLabels: {
    RN22: "Rassemblement national, 22 mesures (2022)",
    PS_LP_RET: "Public Sénat, 17/11/2026",
    MV: "MoneyVox / AFP, 06/10/2026",
    BAM_DET: "Business AM, 04/03/2026",
    PM_UKR: "Paris Match, 15/10/2026",
    VOT_MEL: "L'Avenir en commun 2027 (via Votons-2027)",
    LCP_MEL: "LCP, 06/11/2026",
    EP: "Programme d'Édouard Philippe",
    EP_TRAVAIL: "Programme d'Édouard Philippe : travail",
    EP_RETRAITES: "Programme d'Édouard Philippe : retraites",
    EP_DEFENSE: "Programme d'Édouard Philippe : défense",
    EP_COMPTES: "Programme d'Édouard Philippe : comptes publics",
    EP_ENERGIE: "Programme d'Édouard Philippe : énergie",
    PP: "Place publique, « Acte I »",
    LCP_GL: "LCP, 26/05/2026",
    RFI_GL: "RFI (via Dakaractu), 09/11/2026",
    NE_AMB: "Nouvelle Énergie : une nouvelle ambition française",
    NE_DEST: "Nouvelle Énergie : être maître de notre destin",
    NE_REN: "Nouvelle Énergie : générer un renouveau civique",
    NE_SANTE: "Nouvelle Énergie : santé",
    NE_FAQ: "Nouvelle Énergie : FAQ défense",
    VOT_RET: "Les Républicains (via Votons-2027)",
    PS_RET: "Public Sénat, 12/10/2026",
    LCP_RET: "LCP, 12/10/2026",
    PS_RET22: "Public Sénat, 23/03/2022",
    D92_RET: "Défense-92, 24/04/2026"
  },

  candidates: [
    { id: "lepen", wiki: "Marine_Le_Pen", name: "Marine Le Pen", party: "Rassemblement national", color: "#1f3a93", note: "Programme 2027 non publié : plusieurs positions viennent du programme 2022." },
    { id: "melenchon", wiki: "Jean-Luc_Mélenchon", name: "Jean-Luc Mélenchon", party: "La France insoumise", color: "#c9302c" },
    { id: "philippe", wiki: "Édouard_Philippe", name: "Édouard Philippe", party: "Horizons", color: "#1e88e5" },
    { id: "glucksmann", wiki: "Raphaël_Glucksmann", name: "Raphaël Glucksmann", party: "Place publique – Parti socialiste", color: "#e91e63" },
    { id: "lisnard", wiki: "David_Lisnard", name: "David Lisnard", party: "Nouvelle Énergie", color: "#00897b" },
    { id: "retailleau", wiki: "Bruno_Retailleau", name: "Bruno Retailleau", party: "Les Républicains", color: "#3949ab" }
  ],

  topics: [
    {
      id: "emploi", title: "Emploi et travail", icon: "💼",
      evidence: {
        lepen: { q: "Permettre aux entreprises une hausse des salaires de 10% (jusqu'à 3 smic)", s: "RN22", tag: "2022" },
        melenchon: { q: "Rétablir immédiatement la durée légale hebdomadaire du temps de travail à 35 heures", s: "VOT_MEL" },
        philippe: { q: "Limiter à 12 mois l’indemnisation chômage des moins de 50 ans.", s: "EP_TRAVAIL" },
        glucksmann: { q: "Augmenter le SMIC à 1600 euros net dans les deux ans qui suivent notre accession au pouvoir.", s: "PP" },
        lisnard: { q: "un contrat de travail unique pour les nouveaux emplois, fusionnant CDI et CDD", s: "NE_AMB" },
        retailleau: { q: "supprimer toutes les cotisations sociales au-delà de 1 623 heures par an", s: "VOT_RET" }
      },
      questions: [
        { id: "q1", step: "principe", text: "Pour vous, le travail, c'est d'abord…", options: [
          { t: "Un droit, qu'il faut mieux partager et mieux protéger", c: ["melenchon"] },
          { t: "Un moyen d'émancipation, que l'État doit garantir à chacun", c: ["glucksmann"] },
          { t: "Un pouvoir d'achat à défendre en priorité", c: ["lepen:inferred"] },
          { t: "Ce qui doit toujours rapporter plus que l'inactivité", c: ["philippe", "lisnard", "retailleau"] }
        ]},
        { id: "q2", step: "objectif", text: "Que faut-il viser en priorité ?", options: [
          { t: "Travailler moins, et être mieux payé", c: ["melenchon"] },
          { t: "Le plein emploi, avec des salaires décents", c: ["glucksmann"] },
          { t: "Des salaires nets plus élevés", c: ["lepen:inferred"] },
          { t: "Que les Français travaillent plus, pour produire plus", c: ["philippe", "lisnard", "retailleau"] }
        ]},
        { id: "q3", step: "solution", text: "Quelle mesure vous convainc le plus ?", options: [
          { t: "Revenir strictement aux 35 heures et porter le SMIC à 1 700 € net", c: ["melenchon"] },
          { t: "Porter le SMIC à 1 600 € net en deux ans et garantir un emploi aux chômeurs de longue durée", c: ["glucksmann"] },
          { t: "Exonérer de charges les hausses de salaire de 10 %", c: ["lepen:2022"] },
          { t: "Laisser les entreprises fixer leur temps de travail et limiter l'indemnisation chômage à 12 mois avant 50 ans", c: ["philippe"] },
          { t: "Un contrat de travail unique, fusionnant CDI et CDD", c: ["lisnard"] },
          { t: "Supprimer les cotisations sociales au-delà de 1 623 heures travaillées par an", c: ["retailleau"] }
        ]}
      ]
    },
    {
      id: "retraites", title: "Retraites", icon: "🧓",
      evidence: {
        lepen: { q: "Il faudrait avoir cotisé 40 annuités pour ceux qui ont commencé à travailler avant 20 ans", s: "PS_LP_RET", tag: "paraphrase" },
        melenchon: { q: "Abroger la réforme Macron passant l'âge de départ à la retraite à 64 ans", s: "VOT_MEL" },
        philippe: { q: "Porter progressivement l’âge de départ à 65 ans et la durée de cotisation à 45 ans, en moins de dix ans.", s: "EP_RETRAITES" },
        glucksmann: { q: "L'équité exige que ceux qui ont les carrières les plus hachées et les métiers les plus difficiles puissent partir à la retraite plus tôt.", s: "LCP_GL" },
        lisnard: { q: "la norme de l’âge légal de 65 ans est un impératif national urgent", s: "NE_AMB" },
        retailleau: { q: "une décote en cas de départ entre 63 et 65 ans", s: "PS_RET", tag: "paraphrase" }
      },
      questions: [
        { id: "q4", step: "principe", text: "Sur les retraites, qu'est-ce qui est le plus juste ?", options: [
          { t: "La retraite est un droit acquis, financé par la solidarité entre générations", c: ["melenchon"] },
          { t: "Chacun doit pouvoir partir selon la pénibilité de son métier", c: ["glucksmann"] },
          { t: "Ceux qui ont commencé à travailler tôt doivent pouvoir partir tôt", c: ["lepen"] },
          { t: "Comme on vit plus longtemps, on doit travailler plus longtemps", c: ["philippe", "retailleau"] },
          { t: "Chacun doit davantage préparer sa propre retraite", c: ["lisnard"] }
        ]},
        { id: "q5", step: "objectif", text: "Que doit permettre une réforme des retraites ?", options: [
          { t: "Revenir à la retraite à 60 ans", c: ["melenchon"] },
          { t: "Un système plus juste selon les carrières et les métiers", c: ["glucksmann"] },
          { t: "Partir avant 62 ans après une longue carrière", c: ["lepen"] },
          { t: "Un système à l'équilibre sans baisser les pensions ni hausser les cotisations", c: ["philippe", "retailleau"] },
          { t: "Un socle garanti pour tous, complété par l'épargne de chacun", c: ["lisnard"] }
        ]},
        { id: "q6", step: "solution", text: "Quelle réforme préférez-vous ?", options: [
          { t: "Retour à 62 ans, puis retraite à taux plein à 60 ans après 40 annuités", c: ["melenchon"] },
          { t: "Un âge de départ tenant compte de l'espérance de vie en bonne santé", c: ["glucksmann"] },
          { t: "Départ entre 60 et 62 ans selon l'âge de début de carrière, plus un pilier d'épargne retraite obligatoire", c: ["lepen"] },
          { t: "65 ans et 45 annuités en moins de dix ans, plus une capitalisation collective", c: ["philippe"] },
          { t: "Une décote pour un départ entre 63 et 65 ans, et la fin des régimes spéciaux", c: ["retailleau"] },
          { t: "65 ans, une pension de base pour tous et une large part en capitalisation", c: ["lisnard"] }
        ]}
      ]
    },
    {
      id: "europe", title: "Europe", icon: "🇪🇺",
      evidence: {
        lepen: { q: "baisser significativement la contribution de la France à l'Union européenne (-8,9 milliards nets)", s: "MV", tag: "paraphrase" },
        melenchon: { q: "Avec nous, la France ne sortira ni de l'Union, ni de la zone euro", s: "VOT_MEL" },
        philippe: { q: "Créer un prix du carbone aux frontières européennes.", s: "EP_ENERGIE" },
        glucksmann: { q: "Oeuvrer à la mise en place rapide d'un fonds européen de défense de 500 milliards d'euros via un emprunt commun.", s: "PP" },
        lisnard: { q: "La négociation d’un Traité de démocratisation de l’Europe permettra de revoir la répartition des compétences", s: "NE_DEST" },
        retailleau: { q: "elle n'imposera jamais plus que ce que l'Europe exige", s: "VOT_RET" }
      },
      questions: [
        { id: "q7", step: "principe", text: "Quel rôle joue l'Union européenne dans la prospérité de la France ?", adjacency: [[0, 1], [1, 2], [2, 3]], options: [
          { t: "Elle est notre meilleure chance : il faut plus d'Europe", c: ["glucksmann"] },
          { t: "Son grand marché est un atout majeur pour nos entreprises", c: ["philippe"] },
          { t: "Elle est utile, mais ses normes freinent notre économie", c: ["lisnard", "retailleau"] },
          { t: "Elle nous coûte plus qu'elle ne nous rapporte", c: ["lepen"] },
          { t: "Ses règles de libre-échange et de concurrence nous appauvrissent", c: ["melenchon"] }
        ]},
        { id: "q8", step: "objectif", text: "Quelle Europe faut-il viser ?", adjacency: [[0, 1], [1, 2], [2, 3]], options: [
          { t: "Une Europe puissance, qui investit et se défend ensemble", c: ["glucksmann"] },
          { t: "Un marché unique achevé et compétitif", c: ["philippe"] },
          { t: "Une Europe des nations, qui respecte la souveraineté des États", c: ["lisnard", "retailleau"] },
          { t: "Une France qui paie moins pour l'Europe et reprend le contrôle", c: ["lepen"] },
          { t: "Une France libérée des règles européennes d'austérité et de libre-échange, sans quitter l'UE ni l'euro", c: ["melenchon"] }
        ]},
        { id: "q9", step: "solution", text: "Quelle mesure préférez-vous ?", adjacency: [[0, 1], [1, 2], [2, 3], [3, 4]], options: [
          { t: "Un nouveau traité d'ici 2030 avec vote à la majorité, et un fonds de défense de 500 Md€ financé par un emprunt commun", c: ["glucksmann"] },
          { t: "Achever le marché unique et créer un prix du carbone aux frontières de l'Europe", c: ["philippe"] },
          { t: "Négocier un traité qui rend des pouvoirs aux États, avec un référendum en cas de blocage", c: ["lisnard"] },
          { t: "Ne jamais imposer plus de normes que ce que l'Europe exige, et exiger la réciprocité dans les accords commerciaux", c: ["retailleau"] },
          { t: "Réduire de 8,9 Md€ la contribution nette de la France au budget européen", c: ["lepen"] },
          { t: "Un moratoire, voté par le Parlement, sur les règles européennes de libre-échange et de concurrence", c: ["melenchon"] }
        ]}
      ]
    },
    {
      id: "immigration", title: "Immigration", icon: "🧭",
      evidence: {
        lepen: { q: "Mettre fin à l’immigration de peuplement et au regroupement familial.", s: "RN22", tag: "2022" },
        melenchon: { q: "Refuser l'application du pacte européen sur la migration et l'asile", s: "VOT_MEL" },
        philippe: { q: "Division par deux de l’immigration légale", s: "EP" },
        glucksmann: { q: "Non, l'immigration zéro n'est ni souhaitable, ni possible.", s: "LCP_GL" },
        lisnard: { q: "supprimer toute possibilité d’être régularisé après être entré clandestinement sur le territoire", s: "NE_AMB" },
        retailleau: { q: "les ressortissants étrangers devront justifier de cinq années de résidence en France", s: "VOT_RET" }
      },
      questions: [
        { id: "q10", step: "principe", text: "Quelle est votre vision de l'immigration ?", options: [
          { t: "Accueillir dignement est un devoir, et une richesse pour le pays", c: ["melenchon"] },
          { t: "C'est une réalité à organiser : l'immigration zéro n'est ni possible ni souhaitable", c: ["glucksmann"] },
          { t: "Elle doit être choisie et limitée à nos capacités d'intégration", c: ["philippe", "lisnard", "retailleau"] },
          { t: "Elle doit cesser : priorité aux Français", c: ["lepen:2022"] }
        ]},
        { id: "q11", step: "objectif", text: "Que doit viser la politique migratoire ?", options: [
          { t: "Des droits égaux et stables pour les étrangers qui vivent en France", c: ["melenchon"] },
          { t: "Une politique humaine et efficace, décidée avec les citoyens", c: ["glucksmann"] },
          { t: "Diviser par deux l'immigration légale", c: ["philippe"] },
          { t: "Réduire fortement les entrées et reprendre la main sur le droit, face aux juges européens", c: ["lisnard", "retailleau"] },
          { t: "Mettre fin à « l'immigration de peuplement »", c: ["lepen:2022"] }
        ]},
        { id: "q12", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Régulariser les travailleurs, étudiants et parents d'élèves sans papiers, et fermer les centres de rétention", c: ["melenchon"] },
          { t: "Abroger la loi immigration de 2024, ouvrir des voies légales de travail et réunir une convention citoyenne", c: ["glucksmann"] },
          { t: "Un moratoire sur le regroupement familial et la dénonciation de l'accord de 1968 avec l'Algérie", c: ["philippe"] },
          { t: "Aucune régularisation après une entrée illégale, des quotas par métier, et un référendum", c: ["lisnard"] },
          { t: "Moins de regroupement familial et d'étudiants étrangers, 5 ans de résidence avant les aides, et l'asile examiné hors de France", c: ["retailleau"] },
          { t: "Supprimer le regroupement familial et expulser systématiquement les clandestins", c: ["lepen:2022"] }
        ]}
      ]
    },
    {
      id: "defense", title: "Défense et dissuasion", icon: "🛡️",
      evidence: {
        lepen: { q: "devraient en contrepartie acheter du matériel militaire français", s: "BAM_DET", tag: "paraphrase" },
        melenchon: { q: "rejeter le tribut, exigé par les Etats-Unis, de 5 % du PIB consacré aux dépenses de défense", s: "LCP_MEL" },
        philippe: { q: "Une dissuasion nucléaire modernisée.", s: "EP_DEFENSE" },
        glucksmann: { q: "Proposer à nos partenaires de l'UE d'étendre la dissuasion nucléaire française aux autres pays de l'Union européenne", s: "PP" },
        lisnard: { q: "cesser de disperser les forces françaises dans des projets communs déséquilibrés", s: "NE_FAQ", tag: "paraphrase" },
        retailleau: { q: "Nous multiplierons par cinq les moyens de l'IA de défense", s: "VOT_RET" }
      },
      questions: [
        { id: "q13", step: "principe", text: "D'où vient d'abord la sécurité de la France ?", options: [
          { t: "D'une Europe forte et unie face aux menaces", c: ["glucksmann"] },
          { t: "D'une France puissante militairement, au sein de ses alliances", c: ["philippe"] },
          { t: "De l'indépendance nationale, avant tout", c: ["lepen", "lisnard"] },
          { t: "Du non-alignement et de la diplomatie", c: ["melenchon"] }
        ]},
        { id: "q14", step: "objectif", text: "Que doit viser notre défense ?", options: [
          { t: "Une défense européenne commune", c: ["glucksmann"] },
          { t: "Des armées plus nombreuses et mieux équipées", c: ["philippe", "lisnard"] },
          { t: "Gagner la bataille technologique : IA, cyber, drones", c: ["retailleau"] },
          { t: "Une France souveraine, libre de ses choix militaires", c: ["lepen"] },
          { t: "Sortir de la course aux armements et des blocs militaires", c: ["melenchon"] }
        ]},
        { id: "q15", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Proposer d'étendre la dissuasion nucléaire française aux pays de l'UE, la France gardant la décision", c: ["glucksmann"] },
          { t: "Une loi de « massification » : 250 000 réservistes, 50 000 volontaires par an, et une dissuasion modernisée", c: ["philippe"] },
          { t: "Augmenter le budget de la défense et privilégier une stratégie nationale plutôt que des projets européens déséquilibrés", c: ["lisnard"] },
          { t: "Multiplier par cinq les moyens de l'IA de défense", c: ["retailleau"] },
          { t: "Quitter le commandement intégré de l'OTAN, et conditionner la protection nucléaire de nos alliés à l'achat de matériel français", c: ["lepen"] },
          { t: "Quitter le commandement intégré de l'OTAN et refuser l'objectif de 5 % du PIB pour la défense", c: ["melenchon"] }
        ]}
      ]
    },
    {
      id: "ukraine", title: "Guerre en Ukraine", icon: "🕊️",
      evidence: {
        lepen: { q: "Mais après nous cesserons l'aide financière à l'Ukraine car nous n'avons plus les moyens de le faire", s: "PM_UKR" },
        melenchon: { q: "agir pour créer un cadre diplomatique permettant d'obtenir un cessez-le-feu, le retrait des troupes russes", s: "LCP_MEL" },
        philippe: { q: "Soutien inébranlable à l’Ukraine", s: "EP" },
        glucksmann: { q: "Augmenter drastiquement l'aide militaire à l'Ukraine qui est notre première ligne de défense", s: "PP" },
        retailleau: { q: "Nous devons fournir une aide qui est une aide avec des armes", s: "PS_RET22", tag: "2022" }
      },
      questions: [
        { id: "q16", step: "principe", text: "Face à la guerre en Ukraine, qu'est-ce qui doit guider la France ?", options: [
          { t: "Défendre l'Ukraine, c'est défendre l'Europe : l'agression ne doit pas payer", c: ["glucksmann", "philippe", "retailleau"] },
          { t: "La France doit d'abord préserver ses propres intérêts et ses finances", c: ["lepen"] },
          { t: "La paix doit primer, par la négociation", c: ["melenchon"] }
        ]},
        { id: "q17", step: "objectif", text: "Quelle issue faut-il rechercher ?", options: [
          { t: "Que l'Ukraine puisse repousser l'agression russe", c: ["glucksmann"] },
          { t: "Un soutien durable à l'Ukraine, aux côtés de nos alliés", c: ["philippe"] },
          { t: "Un règlement diplomatique, par une grande conférence pour la paix", c: ["lepen"] },
          { t: "Un cessez-le-feu rapide et une paix durable, avec des garanties de sécurité pour tous", c: ["melenchon"] }
        ]},
        { id: "q18", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Augmenter drastiquement l'aide militaire à l'Ukraine, et soutenir aussi la Moldavie et l'Arménie", c: ["glucksmann"] },
          { t: "Un soutien plein à l'Ukraine, et le réarmement de la France", c: ["philippe"] },
          { t: "Continuer à former et équiper l'armée ukrainienne, mais arrêter l'aide financière et lever les sanctions contre la Russie", c: ["lepen"] },
          { t: "Un cadre diplomatique pour un cessez-le-feu et le retrait des troupes russes, toute modification de frontière étant soumise au vote des populations", c: ["melenchon"] }
        ]}
      ]
    },
    {
      id: "dette", title: "Dette et fiscalité", icon: "💶",
      evidence: {
        lepen: { q: "140 milliards d'euros nets", s: "MV", tag: "paraphrase" },
        melenchon: { q: "Introduire une garantie d'impôt de 2 % sur le patrimoine des centimillionaires, dite « taxe Zucman »", s: "VOT_MEL" },
        philippe: { q: "Ne créer aucun nouvel impôt pendant cinq ans.", s: "EP_COMPTES" },
        glucksmann: { q: "Les patrimoines, au-dessus de 100 millions d'euros, seront mis à contribution", s: "RFI_GL" },
        lisnard: { q: "Avec 3417 milliards d’euros la dette atteint désormais 120% du PIB.", s: "NE_DEST" },
        retailleau: { q: "Il n'y aura pas d'impôt nouveau", s: "LCP_RET" }
      },
      questions: [
        { id: "q19", step: "principe", text: "Quel est le vrai problème de nos finances publiques ?", options: [
          { t: "Ce n'est pas la dette, c'est l'injustice fiscale", c: ["melenchon"] },
          { t: "Il faut investir maintenant pour l'avenir, en faisant contribuer les plus riches", c: ["glucksmann"] },
          { t: "L'argent public est mal dépensé (immigration, contribution à l'UE)", c: ["lepen"] },
          { t: "L'État dépense trop, et la dette menace notre souveraineté", c: ["philippe", "retailleau", "lisnard"] }
        ]},
        { id: "q20", step: "objectif", text: "Que faut-il viser ?", options: [
          { t: "Plus de justice fiscale", c: ["melenchon"] },
          { t: "Financer la transition écologique", c: ["glucksmann"] },
          { t: "Un déficit sous 3 % d'ici 2030, tout en baissant les impôts", c: ["lepen"] },
          { t: "Un déficit ramené vers 2 % sans aucun nouvel impôt", c: ["philippe", "retailleau"] },
          { t: "Réduire la dette et baisser fortement les impôts", c: ["lisnard"] }
        ]},
        { id: "q21", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Rétablir l'ISF, créer 14 tranches d'impôt sur le revenu et taxer à 2 % les patrimoines de plus de 100 M€", c: ["melenchon"] },
          { t: "Taxer les patrimoines de plus de 100 M€ pour financer un fonds écologique", c: ["glucksmann"] },
          { t: "140 Md€ d'économies d'ici 2032, dont 30 Md€ rendus en baisses d'impôts", c: ["lepen"] },
          { t: "Une « règle d'or » dans la Constitution par référendum, et aucun nouvel impôt pendant cinq ans", c: ["philippe"] },
          { t: "197 Md€ d'économies sur cinq ans, dont 51 Md€ rendus aux ménages et aux entreprises", c: ["retailleau"] },
          { t: "Diviser par deux les impôts de production et supprimer l'impôt sur la fortune immobilière", c: ["lisnard"] }
        ]}
      ]
    },
    {
      id: "education", title: "Éducation", icon: "🎓",
      evidence: {
        lepen: { q: "Remettre au cœur des programmes l’enseignement du français, des mathématiques et de l’histoire.", s: "RN22", tag: "2022" },
        melenchon: { q: "Étendre la scolarité obligatoire à 18 ans", s: "VOT_MEL" },
        philippe: { q: "+20 % pour le salaire des professeurs", s: "EP" },
        glucksmann: { q: "Revaloriser le salaire de tous les enseignants de manière continue et planifiée sur 5 ans.", s: "PP" },
        lisnard: { q: "La carte scolaire sera assouplie progressivement puis supprimée", s: "NE_REN" },
        retailleau: { q: "135 euros nets de plus par mois en début de carrière", s: "VOT_RET" }
      },
      questions: [
        { id: "q22", step: "principe", text: "Quelle valeur doit guider l'école ?", options: [
          { t: "L'égalité : la même école publique, gratuite, pour tous", c: ["melenchon"] },
          { t: "La mixité : les mêmes règles pour le public et le privé", c: ["glucksmann"] },
          { t: "L'autonomie : faire confiance aux établissements", c: ["philippe"] },
          { t: "La liberté : laisser les familles choisir leur école", c: ["lisnard"] },
          { t: "L'exigence : l'autorité et les savoirs fondamentaux d'abord", c: ["lepen:2022", "retailleau"] }
        ]},
        { id: "q23", step: "objectif", text: "Que doit viser l'école en priorité ?", options: [
          { t: "Réduire les inégalités scolaires", c: ["melenchon", "glucksmann"] },
          { t: "Relever le niveau grâce à des établissements plus libres", c: ["philippe", "lisnard"] },
          { t: "Que tous les élèves maîtrisent lire, écrire et compter", c: ["lepen:2022", "retailleau"] }
        ]},
        { id: "q24", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Une école entièrement gratuite, obligatoire jusqu'à 18 ans, et la fin du financement public de l'école privée", c: ["melenchon"] },
          { t: "Moins d'élèves par classe, et le privé sous contrat intégré à la carte scolaire", c: ["glucksmann"] },
          { t: "Un statut d'école publique autonome, et +20 % pour le salaire des professeurs", c: ["philippe"] },
          { t: "Un « chèque-éducation » valable dans toute école, et la fin de la carte scolaire", c: ["lisnard"] },
          { t: "L'uniforme, et des programmes recentrés sur le français, les maths et l'histoire", c: ["lepen:2022"] },
          { t: "Une École normale par académie pour former les professeurs, et plus de temps pour lire, écrire et compter", c: ["retailleau"] }
        ]}
      ]
    },
    {
      id: "sante", title: "Santé", icon: "🩺",
      evidence: {
        lepen: { q: "Lancer un plan de soutien d’urgence pour la santé de 20 milliards d’euros.", s: "RN22", tag: "2022" },
        melenchon: { q: "Instaurer le « 100 % Sécu » en remboursant à 100 % les soins de santé prescrits", s: "VOT_MEL" },
        philippe: { q: "Édouard Philippe ne veut pas diminuer les dépenses de santé, mais mieux dépenser.", s: "EP_COMPTES" },
        glucksmann: { q: "Contrer la financiarisation du système de santé, en finir avec la tarification à l'acte à l'hôpital", s: "PP" },
        lisnard: { q: "Nous voulons supprimer les ARS, transférer les responsabilités aux préfets et aux élus", s: "NE_SANTE" },
        retailleau: { q: "hypothèse très conservatrice", s: "PS_RET" }
      },
      questions: [
        { id: "q25", step: "principe", text: "Comment voyez-vous notre système de santé ?", options: [
          { t: "La santé n'est pas une marchandise : il faut la sortir de la logique de rentabilité", c: ["melenchon", "glucksmann"] },
          { t: "Il faut mieux dépenser, pas dépenser plus", c: ["philippe", "retailleau"] },
          { t: "Il faut faire confiance aux acteurs locaux, avec moins de bureaucratie", c: ["lisnard"] },
          { t: "L'État doit réinvestir massivement dans la santé", c: ["lepen:2022"] }
        ]},
        { id: "q26", step: "objectif", text: "Que faut-il viser en priorité ?", options: [
          { t: "Des soins entièrement remboursés pour tous", c: ["melenchon"] },
          { t: "Un hôpital financé selon les besoins de son territoire", c: ["glucksmann"] },
          { t: "Maîtriser les dépenses grâce à la prévention et l'efficacité", c: ["philippe", "retailleau"] },
          { t: "En finir avec les déserts médicaux", c: ["lisnard", "lepen:2022"] }
        ]},
        { id: "q27", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Rembourser à 100 % les soins prescrits, et réguler l'installation des médecins", c: ["melenchon"] },
          { t: "Mettre fin à la tarification à l'activité à l'hôpital, pour un financement pluriannuel par territoire", c: ["glucksmann"] },
          { t: "Ne pas baisser les dépenses de santé, mais miser sur la prévention et la technologie", c: ["philippe"] },
          { t: "Mieux contrôler les arrêts maladie, avec un jour de carence obligatoire", c: ["retailleau"] },
          { t: "Supprimer les agences régionales de santé et doubler le nombre d'étudiants en médecine d'ici 2030", c: ["lisnard"] },
          { t: "Un plan d'urgence de 20 Md€ pour la santé, et des incitations financières contre les déserts médicaux", c: ["lepen:2022"] }
        ]}
      ]
    },
    {
      id: "social", title: "Protection sociale", icon: "🤝",
      evidence: {
        lepen: { q: "Réserver les aides sociales aux Français", s: "RN22", tag: "2022" },
        melenchon: { q: "Créer une garantie d'autonomie, qui permettra que nul ne soit privé de sa dignité pour vivre", s: "VOT_MEL" },
        philippe: { q: "limiter la durée du RSA pour inciter à la reprise du travail", s: "EP_COMPTES" },
        lisnard: { q: "Un système de charges patronales négatives pour les embauches de personnes au RSA depuis plus de 2 ans sera créé.", s: "NE_AMB" },
        retailleau: { q: "perçoit un « RIA Socle » de 300 euros par mois", s: "VOT_RET" }
      },
      questions: [
        { id: "q28", step: "principe", text: "Notre solidarité envers ceux qui n'ont pas de revenus doit être…", options: [
          { t: "Un droit : nul ne doit vivre sous le seuil de pauvreté", c: ["melenchon"] },
          { t: "Un contrat : une aide en échange d'efforts pour retrouver un emploi", c: ["philippe", "retailleau", "lisnard"] },
          { t: "Réservée d'abord aux Français", c: ["lepen:2022"] }
        ]},
        { id: "q29", step: "objectif", text: "Que faut-il viser ?", options: [
          { t: "Supprimer la pauvreté", c: ["melenchon"] },
          { t: "Que le travail paie toujours plus que les aides", c: ["philippe", "retailleau", "lisnard"] },
          { t: "Que les aides profitent à ceux qui ont contribué au pays", c: ["lepen:2022"] }
        ]},
        { id: "q30", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Une « garantie d'autonomie » qui porte chaque revenu au seuil de pauvreté (1 337 € par mois pour une personne seule)", c: ["melenchon"] },
          { t: "Limiter la durée du RSA, et une allocation familiale unique de 350 € dès le premier enfant", c: ["philippe"] },
          { t: "Une allocation de 300 €, plus 250 € en échange de 15 heures d'activité par semaine, et des aides plafonnées à 70 % du SMIC", c: ["retailleau"] },
          { t: "Des charges patronales négatives pour embaucher les personnes au RSA depuis plus de deux ans", c: ["lisnard"] },
          { t: "Réserver les aides sociales aux Français, et 5 ans de travail en France pour les prestations de solidarité", c: ["lepen:2022"] }
        ]}
      ]
    },
    {
      id: "energie", title: "Énergie et climat", icon: "⚡",
      evidence: {
        lepen: { q: "cesser les subventionnements à perte des énergies intermittentes", s: "MV" },
        melenchon: { q: "Planifier la fermeture progressive des centrales nucléaires existantes en ne prolongeant pas au-delà de 60 ans", s: "VOT_MEL" },
        philippe: { q: "lancement de 8 réacteurs EPR supplémentaires en plus des 6 déjà prévus", s: "EP_ENERGIE" },
        glucksmann: { q: "On doit pérenniser le nucléaire. Il faut un programme de nouveaux réacteurs", s: "RFI_GL" },
        lisnard: { q: "Favoriser la production d’énergie décarbonée en s’appuyant sur le nucléaire.", s: "NE_REN" },
        retailleau: { q: "Nous abrogerons immédiatement le volet électricité de la PPE 3", s: "VOT_RET" }
      },
      questions: [
        { id: "q31", step: "principe", text: "Face au changement climatique, quelle attitude adopter ?", options: [
          { t: "L'urgence impose de changer radicalement de modèle", c: ["melenchon", "glucksmann"] },
          { t: "On peut concilier climat, croissance et innovation", c: ["philippe"] },
          { t: "Il faut s'adapter plutôt que punir, et alléger les contraintes", c: ["lisnard", "retailleau"] },
          { t: "L'énergie doit d'abord être souveraine et bon marché", c: ["lepen:inferred"] }
        ]},
        { id: "q32", step: "objectif", text: "Quel mix énergétique viser ?", options: [
          { t: "100 % d'énergies renouvelables, et la sortie du nucléaire", c: ["melenchon"] },
          { t: "Sortir des énergies fossiles grâce aux renouvelables et au nucléaire", c: ["glucksmann"] },
          { t: "Une électricité décarbonée et abondante grâce au nucléaire, avec les renouvelables en complément", c: ["philippe"] },
          { t: "Le nucléaire d'abord, sans soutien public à l'éolien et au solaire", c: ["lisnard", "retailleau", "lepen"] }
        ]},
        { id: "q33", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Fermer progressivement les centrales nucléaires et arrêter le programme EPR2", c: ["melenchon"] },
          { t: "Un investissement massif dans les renouvelables et la rénovation, de nouveaux réacteurs, et des taxes sur les jets privés et les yachts", c: ["glucksmann"] },
          { t: "8 réacteurs EPR de plus que prévu, et un fonds d'adaptation climatique de 2 Md€ par an", c: ["philippe"] },
          { t: "Autoriser les centrales sur 80 ans, et plus aucun appel d'offres solaire ou éolien en mer", c: ["retailleau"] },
          { t: "Prolonger les centrales jusqu'à 60 ans, construire des petits réacteurs, et supprimer le diagnostic de performance énergétique (DPE)", c: ["lisnard"] },
          { t: "Arrêter de subventionner les énergies intermittentes, et baisser la TVA sur l'énergie à 5,5 %", c: ["lepen"] }
        ]}
      ]
    },
    {
      id: "securite", title: "Sécurité et justice", icon: "⚖️",
      evidence: {
        lepen: { q: "Atteindre 85 000 places de prison en 2027.", s: "RN22", tag: "2022" },
        melenchon: { q: "Interdire les pistolets à impulsion électrique (tasers)", s: "VOT_MEL" },
        philippe: { q: "Le rétablissement des peines planchers", s: "EP" },
        glucksmann: { q: "Faire renaître une police de proximité moderne, ancrée localement, centrée sur la prévention", s: "PP" },
        lisnard: { q: "un plan massif de remise à niveau de la police nationale", s: "NE_AMB" },
        retailleau: { q: "des peines courtes, systématiques et réellement exécutées", s: "D92_RET" }
      },
      questions: [
        { id: "q34", step: "principe", text: "Pour faire reculer la délinquance, qu'est-ce qui compte le plus ?", options: [
          { t: "La prévention, et une police mieux contrôlée", c: ["melenchon"] },
          { t: "Une police proche des habitants, qui prévient autant qu'elle réprime", c: ["glucksmann"] },
          { t: "La certitude de la sanction", c: ["philippe", "lisnard", "retailleau"] },
          { t: "La fermeté maximale, et un soutien total aux forces de l'ordre", c: ["lepen:2022"] }
        ]},
        { id: "q35", step: "objectif", text: "Que faut-il viser en priorité ?", options: [
          { t: "Une police qui respecte et protège tous les citoyens", c: ["melenchon"] },
          { t: "Démanteler le narcotrafic", c: ["glucksmann", "philippe", "retailleau"] },
          { t: "Une justice plus rapide et plus ferme", c: ["lisnard"] },
          { t: "Que les peines prononcées soient exécutées", c: ["lepen:2022"] }
        ]},
        { id: "q36", step: "solution", text: "Quelle mesure préférez-vous ?", options: [
          { t: "Interdire le Taser et le LBD, remplacer l'IGPN par une autorité indépendante, et dissoudre la BAC et la BRAV-M", c: ["melenchon"] },
          { t: "Une police de proximité, un service national de renseignement criminel, et une convention citoyenne sur les drogues", c: ["glucksmann"] },
          { t: "Le retour des peines planchers, la prison dès la première infraction, et un état d'urgence contre le narcotrafic", c: ["philippe"] },
          { t: "Un état d'urgence anti-trafics inscrit dans la Constitution, le bouclage des quartiers de trafic, et des peines courtes systématiques", c: ["retailleau"] },
          { t: "Un plan massif de remise à niveau de la police, et un budget de la justice porté à la moyenne européenne", c: ["lisnard"] },
          { t: "85 000 places de prison, et une présomption de légitime défense pour les policiers", c: ["lepen:2022"] }
        ]}
      ]
    }
  ]
};
