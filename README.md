# Ana Banana exercise plan

A personal weekly exercise plan for Ana. No login, no setup: open the link and the plan is there.

- Live at https://tobiasfk.github.io/ana-banana-exercise
- Static site on GitHub Pages, no build step:
  - `index.html`: the whole app (week view, ticks, moving sessions, weights, benchmarks).
  - `plan.js`: the plan itself (`window.PLAN`), plus optional `swaps` (alternatives per exercise) and `extras` (sessions she can add to any day). Built with Claude; bump `version` whenever it changes.
- Ticks, moved sessions, weights and benchmarks are saved in the browser on her phone (localStorage). Nothing is sent anywhere.
- When `plan.js` gets a new version, rearranged weeks reset to the new plan; ticks, weights and benchmarks are kept.
- Changing things on the go: swap or edit any exercise (⇄), add an exercise, and per day "Change this day" to bring a session over from another day, add an extra (walk, run, yoga, stretch), or rest instead.
- Optional: a Claude key saved in Settings (on that phone only) adds "Ask Claude" to "Change this day".
