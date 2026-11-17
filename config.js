// Configuration du site.
// RESULTS_ENDPOINT : URL qui reçoit les résultats anonymes (POST JSON).
// Laisser vide pour désactiver l'enregistrement des résultats.
// La clé « publishable » Supabase est publique par nature : la table n'autorise
// que l'ajout de résultats (aucune lecture, modification ni suppression).
window.CONFIG = {
  RESULTS_ENDPOINT: "https://idesywtincrrppmbaapu.supabase.co/rest/v1/results",
  RESULTS_HEADERS: {
    apikey: "sb_publishable_z4-Cz4PYupZV5eMTgcs2mg_9BeHQMbh",
    Prefer: "return=minimal"
  }
};
