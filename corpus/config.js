/* Settings for the DE/DEI Corpus page.
   appClientId and authRelay switch on "Sign in with GitHub" for collaborators (see README, "One-time setup").
   Until they are filled in, collaborators can still sign in with a personal access token. */
window.DEDEI_CONFIG = {
  owner: 'm-bian',          // GitHub account that owns the corpus repository
  repo: 'de-dei-corpus',    // the private repository holding data/ and imports/
  branch: 'main',
  appClientId: 'Iv23live3oqfPOoSBKCJ',   // Client ID of the GitHub App
  authRelay: 'https://dedei-auth.bianmingyang1999.workers.dev',   // sign-in relay (relay/worker.js)
  bundle: 'corpus.json',    // published snapshot read by visitors, built by scripts/build.mjs
  pollSeconds: 60           // how often signed-in collaborators check GitHub for other people's changes
};
