// Ana Banana exercise plan: the plan itself. Built with Claude and updated by Tobias.
// Bump "version" whenever the plan changes, so the site shows the new version on her phone.
// Items named "Yoga With Adriene" show as a tap-to-play link to her videos on YouTube.
// This repo is public: keep personal details (age, weight, health, job) out of this file.
(function () {
  const yoga = mins => ["Yoga With Adriene", mins];

  window.PLAN = {
    version: "v2-2026-11-07",
    updated: "2026-11-07",
    start: "2026-11-09",
    name: "Energy Back by New Year",
    ambition: "Get your energy back and feel stronger by New Year's, without adding stress to long weeks. Two light gym days built on the bike, treadmill and light dumbbells, with Yoga With Adriene and stretching in between for posture and flexibility. A third gym day is a bonus, never a must.",
    success: "In the last week, three rounds feel easy, your plank is longer than in week 1, and you feel more awake.",
    rules: "- Two gym days a week; a third is optional\n- Really light: always finish feeling you could do more\n- Alternate gym days with stretching or Yoga With Adriene (keep yoga general)\n- Short sessions that fit around long, tiring work weeks\n- Focus on treadmill, bike, assault bike and free weights\n- Goals: strength, flexibility, posture, and burning a few more calories",
    profile: "Very long, exhausting work weeks; feeling tired and sedentary. Goals: more strength and flexibility, better posture, burn calories to lose about 2 lb. No injuries. Gym with treadmill, bike, assault bike and free weights. Max 2, at most 3 gym days a week, really light work, alternating with stretching and Yoga With Adriene (keep yoga general: no specific videos or instructions).",
    benchmarks: [
      "Forward fold · week 1 (knees, shins or toes?)",
      "Plank on knees · week 1 (seconds)",
      "Forward fold · last week",
      "Plank on knees · last week (seconds)"
    ],

    weeks: [
      { ph: "Base", focus: "Ease in. Everything should feel too easy this week. That's on purpose: the goal is to show up, not to be tired.",
        vars: { sets: 2, reps: 10, hold: "20 s", bike: "10 min", incline: "15 min", iv: 4, walk: "20 min", opt: "25 min" } },
      { ph: "Base", focus: "Same sessions, a touch longer on the bike and treadmill. Note your weights so next week starts there.",
        vars: { sets: 2, reps: 10, hold: "25 s", bike: "12 min", incline: "18 min", iv: 5, walk: "20 min", opt: "25 min" } },
      { ph: "Lighter", focus: "Thanksgiving week. Two gym days is a win. Enjoy the food and the people.",
        vars: { sets: 2, reps: 8, hold: "20 s", bike: "10 min", incline: "15 min", iv: 4, walk: "20 min", opt: "20 min" },
        notes: { gymB: "Thanksgiving! Do this on Wednesday or Friday instead, or swap it for a family walk." } },
      { ph: "Build", focus: "A little more. Third round on gym days, if it feels good. Add 2–5 lb where 10 reps felt easy.",
        vars: { sets: 3, reps: 10, hold: "25 s", bike: "12 min", incline: "20 min", iv: 5, walk: "25 min", opt: "30 min" } },
      { ph: "Build", focus: "Steady week. Stand tall, shoulders down and back, on the treadmill too.",
        vars: { sets: 3, reps: 12, hold: "30 s", bike: "15 min", incline: "20 min", iv: 6, walk: "25 min", opt: "30 min" } },
      { ph: "Build", focus: "The strongest week of the plan, and it's still light. Sleep comes first if the week is brutal.",
        vars: { sets: 3, reps: 12, hold: "30 s", bike: "15 min", incline: "22 min", iv: 6, walk: "30 min", opt: "30 min" } },
      { ph: "Lighter", focus: "Christmas week. Keep moving a little and let the rest go.",
        vars: { sets: 2, reps: 10, hold: "25 s", bike: "10 min", incline: "15 min", iv: 4, walk: "20 min", opt: "25 min" },
        notes: { fri: "Christmas Day. A short yoga, a walk with family, or nothing at all. All good." } },
      { ph: "Lighter", focus: "Last week of the year! Redo your check-ins and see how far you've come.",
        vars: { sets: 2, reps: 10, hold: "30 s", bike: "12 min", incline: "18 min", iv: 4, walk: "20 min", opt: "25 min" },
        notes: { gymB: "New Year's Day. Move it to Friday, or make it a fresh-air walk." } }
    ],

    tpl: [
      { id: "gymA", tag: "str", kind: "Gym", title: "Strength & posture", day: 0,
        sum: "{sets} rounds · legs, back, shoulders · {bike} easy bike",
        warmup: [["Bike or assault bike, easy", "5 min"], ["Arm circles", "10 each way"]],
        cue: "Light is the point: pick weights you could lift 5 more times. Go round {sets} times, resting until your breathing settles.",
        items: [["Goblet squat", "{reps}", 15], ["One-arm dumbbell row", "{reps} / side", 12], ["Dumbbell Romanian deadlift", "{reps}", 12],
                ["Dumbbell reverse fly", "{reps}", 5], ["Dead bug", "8 / side"]],
        after: "Finish with {bike} easy on the bike, at a pace where you could chat.", mins: 40 },

      { id: "tue", tag: "other", kind: "Yoga", title: "Yoga", day: 1,
        sum: "Yoga With Adriene",
        warmup: [], cue: "",
        items: [yoga("20–30 min")], after: "", mins: 25 },

      { id: "wed", tag: "run", kind: "Stretch", title: "Walk & stretch", day: 2,
        sum: "{walk} brisk walk · posture stretches",
        warmup: [],
        cue: "Walk outside or on the treadmill, brisk enough to feel warm. Then hold each stretch and breathe slowly.",
        items: [["Brisk walk", "{walk}"], ["Chest opener in a doorway", "30 s / side"], ["Hip flexor stretch, kneeling", "30 s / side"],
                ["Hamstring stretch", "30 s / side"], ["Cat-cow", "10 slow"], ["Child's pose", "1 min"]],
        after: "", mins: 35 },

      { id: "gymB", tag: "bike", kind: "Gym", title: "Cardio & posture", day: 3,
        sum: "{incline} incline walk · light strength · optional bike",
        warmup: [["Treadmill walk, easy", "5 min"]],
        cue: "On the incline, breathe a little harder but never gasp. Then one easy round of each strength move, {sets} times.",
        items: [["Incline treadmill walk", "{incline}"], ["Split squat, holding a rail", "8 / side"], ["Seated dumbbell shoulder press", "{reps}", 8],
                ["Farmer carry", "30 s", 15], ["Plank on knees", "{hold}"]],
        after: "Optional: {iv} rounds on the assault bike, 20 s brisk and 70 s easy. Skip it on tired days.", mins: 45 },

      { id: "fri", tag: "other", kind: "Yoga", title: "Yoga", day: 4,
        sum: "Yoga With Adriene",
        warmup: [], cue: "",
        items: [yoga("20–30 min")], after: "", mins: 25 },

      { id: "bonus", tag: "bike", kind: "Optional", title: "Easy cardio (bonus)", day: 5,
        sum: "{opt} easy bike or treadmill · or a walk outside",
        warmup: [],
        cue: "Only if you have the energy. A walk outside counts just as much. Tick it off either way.",
        items: [["Bike or treadmill, easy", "{opt}"], ["Hamstring and hip stretch", "5 min"]],
        after: "", mins: 35 }
    ],

    // Ready-made swaps, shown when she taps ⇄ next to an exercise.
    swaps: {
      "Goblet squat": [["Squat to a bench", "10"], ["Leg press, light", "10", 40]],
      "One-arm dumbbell row": [["Seated cable row", "10", 30], ["Chest-supported dumbbell row", "10", 10]],
      "Dumbbell Romanian deadlift": [["Glute bridge", "12"], ["Kettlebell deadlift", "10", 20]],
      "Dumbbell reverse fly": [["Band pull-apart", "15"], ["Wall angels", "10"]],
      "Dead bug": [["Bird dog", "8 / side"], ["Heel taps, lying down", "10 / side"]],
      "Incline treadmill walk": [["Bike, steady", "20 min"], ["Elliptical, steady", "20 min"]],
      "Split squat, holding a rail": [["Step-ups on a low box", "8 / side"], ["Squat to a bench", "10"]],
      "Seated dumbbell shoulder press": [["Wall angels", "10"], ["Lateral raise, light", "10", 5]],
      "Farmer carry": [["Suitcase carry, one side at a time", "20 s / side", 15], ["Dumbbell shrug", "12", 15]],
      "Plank on knees": [["Wall plank", "30 s"], ["Dead bug", "8 / side"]],
      "Brisk walk": [["Treadmill walk", "20 min"], ["Easy bike", "20 min"]],
      "Bike or treadmill, easy": [["Walk outside", "30 min"], ["Assault bike, very easy", "15 min"]],
      "Bike or assault bike, easy": [["Treadmill walk, easy", "5 min"]],
      "Chest opener in a doorway": [["Hands clasped behind back, lift gently", "30 s"]],
      "Hip flexor stretch, kneeling": [["Standing quad stretch", "30 s / side"]],
      "Hamstring stretch": [["Seated forward fold", "45 s"]]
    },

    // Extras she can add to any day under "Change this day".
    extras: [
      { id: "walk", tag: "run", kind: "Walk", title: "Feel-good walk", sum: "20–30 min brisk walk, outside if you can",
        warmup: [], cue: "A pace where you can still chat. Swing your arms, shoulders down.", items: [["Brisk walk", "25 min"]], after: "", mins: 25 },
      { id: "yoga", tag: "other", kind: "Yoga", title: "Yoga", sum: "Yoga With Adriene",
        warmup: [], cue: "", items: [yoga("10–30 min")], after: "", mins: 20 },
      { id: "bike", tag: "bike", kind: "Cardio", title: "Easy bike", sum: "20 min easy spin",
        warmup: [], cue: "Chatty pace, music on.", items: [["Bike, easy", "20 min"]], after: "", mins: 20 }
    ]
  };
})();
