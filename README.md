# Ana Banana exercise plan

A personal weekly exercise plan. Describe your goals once and Claude builds a plan; adjust any week (or the whole plan) by typing what changed.

- Live at https://tobiasfk.github.io/ana-banana-exercise
- Static site on GitHub Pages: `index.html` (everything), `firebase.js` (sign-in and storage), `firebase-config.js` (project settings). No build step.
- Data: its own Firebase project, collection `fitness/{uid}/docs/*`, private to each Google account.
- `firestore.rules`: paste into Firebase console → Firestore → Rules → Publish whenever it changes.
- Claude: each person adds their own Anthropic API key in Settings. It is stored only in that browser and sent straight to api.anthropic.com.
