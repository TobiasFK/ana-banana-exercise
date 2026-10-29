// Ana Banana exercise plan: style preview. Loaded only with ?demo in the address.
// Fakes a signed-in account and fills the site with lorem ipsum, so the look can be tuned
// without signing in or building a real plan. Nothing is saved anywhere.
(function () {
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const monday = new Date(); monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7) - 7); // so "this week" is week 2

  const L = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const phases = ["Base", "Base", "Build", "Lighter", "Build", "Build", "Peak", "Peak"];
  const program = {
    active: true,
    name: "Lorem ipsum dolor",
    start: iso(monday),
    ambition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    success: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    summary: "Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor.",
    rules: "- Lorem ipsum dolor sit amet\n- Consectetur adipiscing elit\n- Sed do eiusmod tempor",
    profile: "Lorem ipsum (style preview).",
    benchmarks: ["Lorem ipsum · week 1 (s)", "Dolor sit amet · week 1", "Lorem ipsum · week 8 (s)", "Dolor sit amet · week 8"],
    notes: [],
    updated: new Date().toISOString(),
    weeks: phases.map((ph, i) => ({
      ph,
      focus: i === 1 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor, ut labore et dolore." : L,
      vars: { sets: i < 2 ? 2 : 3, walk: `${25 + i * 3} min` },
      notes: {}, titles: {}
    })),
    tpl: [
      { id: "a", tag: "str", kind: "Strength", title: "Lorem ipsum A", day: 0, sum: "{sets} rounds · lorem, ipsum, dolor",
        warmup: [["Lorem ipsum, easy", "3 min"], ["Dolor sit amet", "10"]],
        cue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
        items: [["Lorem goblet squat", "10", 20], ["Ipsum push-ups", "8"], ["Dolor sit amet", "12 / side"], ["Consectetur plank", "30 s"]],
        after: "Lorem ipsum dolor sit amet, consectetur.", mins: 35 },
      { id: "b", tag: "other", kind: "Cardio", title: "Dolor sit amet", day: 1, sum: "{walk} · lorem ipsum",
        warmup: [["Lorem ipsum", "3 min"]], cue: "Lorem ipsum dolor sit amet, consectetur.",
        items: [["Lorem incline walk", "{walk}"]], after: "", mins: 30 },
      { id: "c", tag: "other", kind: "Yoga", title: "Consectetur flow", day: 2, sum: "Lorem ipsum dolor · 30 min",
        warmup: [], cue: "Sed do eiusmod tempor incididunt ut labore.", items: [["Lorem ipsum flow", "30 min"]], after: "", mins: 30 },
      { id: "d", tag: "str", kind: "Strength", title: "Lorem ipsum B", day: 3, sum: "{sets} rounds · amet, elit, tempor",
        warmup: [["Ipsum, easy", "3 min"], ["Lorem bridges", "10"]],
        cue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        items: [["Lorem romanian deadlift", "10", 25], ["Ipsum curl", "12", 15], ["Dolor side plank", "6 breaths / side"]],
        after: "", mins: 35 },
      { id: "e", tag: "run", kind: "Run", title: "Ipsum jog", day: 5, sum: "Lorem ipsum · 25 min easy",
        warmup: [["Brisk walk", "2 min"]], cue: "Lorem ipsum dolor sit amet.", items: [["Lorem easy jog", "25 min"]], after: "", mins: 30 }
    ]
  };
  const docs = {
    program,
    settings: { unit: "lb" },
    w0: { plan: null, notes: [], done: { a: true, b: true, c: true, rest4: true, e: true } },
    w1: { plan: null, notes: [], done: { a: true } }
  };

  window.fp = {
    onUser(cb) { setTimeout(() => cb({ uid: "demo", email: "ana_carolina_amaral@hotmail.com" }), 0); },
    async signIn() {}, async resetPassword() {}, async signOut() {},
    async getSharedKey() { return ""; }, async setSharedKey() {},
    async watch(uid, cb) { setTimeout(() => cb(JSON.parse(JSON.stringify(docs))), 0); },
    async save(uid, key, data) { docs[key] = data; }
  };
  window.FP_DEMO = true;
})();
