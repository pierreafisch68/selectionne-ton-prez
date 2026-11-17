# selectionne-ton-prez
On s'y perd, beaucoup de candidats, pleins de sujets clés et des enjeux critiques pour les 5 ans a venir. Ce quizz est basé sur les programmes publiés de chaque candidat. Je l'ai créé pour m'y retrouver et si ca peut t'aider a mieux t'y retrouver et bien j'aurais fait un B.A. 

## Le quiz

36 questions sur 12 thèmes (principe → objectif → solution). Chaque réponse correspond à la position d'un ou plusieurs candidats, citée et sourcée. Le résultat affiche un podium des 3 candidats les plus proches, avec le détail thème par thème.

- `index.html`, `app.js`, `styles.css` : le site (statique, sans build).
- `data/quiz.js` : toutes les données (candidats, thèmes, questions, citations, sources).
- `config.js` : adresse d'enregistrement anonyme des résultats (vide = désactivé).

### Ajouter un candidat

1. Ajouter une entrée dans `candidates` de `data/quiz.js` (`id`, `wiki` = titre de la page Wikipédia FR pour la photo, `name`, `party`, `color`).
2. Ajouter son `id` dans le tableau `c` de l'option qui correspond à sa position pour chaque question (`id:2022` pour une position de 2022, `id:inferred` pour une position déduite).
3. Ajouter sa citation dans `evidence` de chaque thème, et la source dans `sources` / `sourceLabels`.

Aucune modification du code n'est nécessaire.

### Publier

Settings → Pages → « Deploy from a branch » → `main` / racine. Le site est alors disponible sur `https://<utilisateur>.github.io/selectionne-ton-prez/`.
