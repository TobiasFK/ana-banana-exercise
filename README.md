# Ana Banana exercise plan

A personal weekly exercise plan for Ana. No login: open the link, type the password once on that phone, and the plan is there.

- Live at https://tobiasfk.github.io/ana-banana-exercise
- Static site on GitHub Pages, no build step:
  - `index.html`: the whole app (week view, ticks, moving sessions, weights, benchmarks).
  - `plan.enc.js`: the plan, encrypted with the site password (AES-GCM, PBKDF2). The readable plan is never committed.
  - `tools/plancrypt.mjs`: `PLAN_PASSWORD=… node tools/plancrypt.mjs decrypt > plan.json` to edit, then `… encrypt plan.json` to rebuild `plan.enc.js`. Bump `version` in the plan whenever it changes.
- Ticks, moved sessions, weights and benchmarks are saved in the browser on her phone (localStorage). Nothing is sent anywhere.
- When the plan gets a new version, rearranged weeks reset to the new plan; ticks, weights and benchmarks are kept.
- Changing things on the go: swap or edit any exercise (⇄), add an exercise, and per day "Change this day" to bring a session over from another day, add an extra (walk, run, yoga, stretch), or rest instead.
- Optional: a Claude key saved in Settings (on that phone only) adds "Ask Claude" to "Change this day".
- The password is case-insensitive and remembered on each phone; Settings → "Lock this phone" forgets it. Earlier commits contain older, unencrypted versions of the plan.
