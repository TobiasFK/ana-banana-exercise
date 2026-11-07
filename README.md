# Ana Banana exercise plan

A personal weekly exercise plan for Ana. No login, no setup: open the link and the plan is there.

- Live at https://tobiasfk.github.io/ana-banana-exercise
- Static site on GitHub Pages, no build step:
  - `index.html`: the whole app (week view, ticks, moving sessions, weights, benchmarks).
  - `plan.js`: the plan itself (`window.PLAN`). Built with Claude; bump `version` whenever it changes.
- Ticks, moved sessions, weights and benchmarks are saved in the browser on her phone (localStorage). Nothing is sent anywhere.
- When `plan.js` gets a new version, rearranged weeks reset to the new plan; ticks, weights and benchmarks are kept.
