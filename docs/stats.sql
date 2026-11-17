-- Requêtes de statistiques à lancer dans Supabase → SQL Editor.

-- 1. Nombre de participations par jour
select day, count(*) from public.results group by day order by day;

-- 2. Fréquence de chaque candidat à la 1re place et dans le top 3
select c.cand,
       count(*) filter (where c.pos = 1) as premier,
       count(*) as dans_top3
from public.results r,
     jsonb_array_elements_text(r.top) with ordinality as c(cand, pos)
group by c.cand order by premier desc;

-- 3. Score moyen de concordance par candidat
select s.key as candidat, round(avg(s.value::numeric), 1) as score_moyen
from public.results r, jsonb_each_text(r.scores) s
group by s.key order by score_moyen desc;

-- 4. Répartition des réponses par question
--    (index de l'option dans data/quiz.js, en partant de 0 ; null = sans avis)
select a.key as question, a.value as option, count(*)
from public.results r, jsonb_each(r.answers) a
group by a.key, a.value order by a.key, count(*) desc;

-- 5. Thèmes le plus souvent marqués « Important pour moi »
select t as theme, count(*)
from public.results r, jsonb_array_elements_text(r.important) t
group by t order by count(*) desc;
