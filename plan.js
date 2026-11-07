// Ana Banana exercise plan: the plan itself. Built with Claude and updated by Tobias.
// Bump "version" whenever the plan changes, so the site shows the new version on her phone.
// Items named "Yoga With Adriene: <video>" show as tap-to-play links (a YouTube search for that video).
(function () {
  const ywa = (video, mins) => [`Yoga With Adriene: ${video}`, mins];

  // Other videos she can swap any yoga session for.
  const yogaSwaps = [
    ywa("10 Minute Yoga For Beginners", "about 10 min"),
    ywa("Morning Yoga For Beginners", "about 15 min"),
    ywa("Yoga For Lower Back Pain", "about 20 min"),
    ywa("Bedtime Yoga", "about 20 min"),
    ywa("Yoga For Complete Beginners", "about 20 min")
  ];

  window.PLAN = {
    version: "trial-1",
    updated: "2026-11-07",
    start: "2026-11-09",
    name: "Four Weeks of Flow",
    ambition: "Four gentle weeks to make moving a daily habit. Every day has Yoga With Adriene, and most days add a few easy moves or a walk. No gym, no equipment, nothing scary.",
    success: "By week 4, daily yoga feels like a treat, and your check-ins show you're a little stronger and bendier.",
    rules: "- Yoga every day, everything else light\n- No gym or equipment needed\n- Walks rather than runs",
    profile: "Trial plan for Ana: daily Yoga With Adriene plus light bodyweight exercises and walks at home. No equipment. She rarely runs outside. Keep everything gentle, positive and short.",
    benchmarks: [
      "Forward fold · week 1 (knees, shins or toes?)",
      "Wall push-ups in a row · week 1",
      "Forward fold · week 4",
      "Wall push-ups in a row · week 4"
    ],

    weeks: [
      { ph: "Base", focus: "Find your rhythm. Short and gentle, every day. Showing up is the whole goal this week.",
        vars: { sets: 2, reps: 8, hold: "20 s", walk: "20 min", long: "30 min" } },
      { ph: "Base", focus: "Same flow, a touch more. Notice what already feels easier than last week.",
        vars: { sets: 2, reps: 10, hold: "25 s", walk: "25 min", long: "35 min" } },
      { ph: "Build", focus: "A little stronger. Add a third round on the strength days if you feel good.",
        vars: { sets: 3, reps: 10, hold: "30 s", walk: "25 min", long: "40 min" } },
      { ph: "Build", focus: "Last trial week! Redo your check-ins on Sunday and see how far you've come.",
        vars: { sets: 3, reps: 12, hold: "30 s", walk: "30 min", long: "45 min" } }
    ],

    tpl: [
      { id: "mon", tag: "str", kind: "Yoga + strength", title: "Fresh start flow", day: 0,
        sum: "Beginner yoga · {sets} rounds of easy strength",
        warmup: [],
        cue: "The yoga is your warm-up. Then go round the moves below {sets} times, resting until your breath is calm.",
        items: [ywa("Yoga For Complete Beginners", "about 20 min"), ["Chair squats", "{reps}"], ["Wall push-ups", "{reps}"], ["Glute bridges", "{reps}"]],
        after: "", mins: 35 },

      { id: "tue", tag: "run", kind: "Walk + yoga", title: "Walk & unwind", day: 1,
        sum: "{walk} brisk walk · neck and shoulder yoga",
        warmup: [],
        cue: "Walk at a pace where you can still chat. Then roll out the mat and let your shoulders drop.",
        items: [["Brisk walk", "{walk}"], ywa("Yoga For Neck And Shoulder Relief", "about 15 min")],
        after: "" },

      { id: "wed", tag: "str", kind: "Yoga + core", title: "Strong middle", day: 2,
        sum: "Core yoga · {sets} rounds of gentle core",
        warmup: [],
        cue: "Slow and controlled beats fast. Keep breathing the whole time, even in the plank.",
        items: [ywa("Yoga For Core", "about 20 min"), ["Bird dog", "{reps} / side"], ["Dead bug", "{reps} / side"], ["Forearm plank on knees", "{hold}"]],
        after: "", mins: 35 },

      { id: "thu", tag: "str", kind: "Yoga + legs", title: "Happy hips", day: 3,
        sum: "Hip yoga · {sets} rounds for legs and glutes",
        warmup: [],
        cue: "Feel the burn in your glutes, not your lower back. Small movements are fine.",
        items: [ywa("Yoga For Hips", "about 20 min"), ["Side-lying leg lifts", "{reps} / side"], ["Clamshells", "{reps} / side"], ["Calf raises", "{reps}"]],
        after: "", mins: 35 },

      { id: "fri", tag: "other", kind: "Yoga", title: "Feel-good Friday", day: 4,
        sum: "Total body stretch, nothing else",
        warmup: [],
        cue: "No extras today. Breathe, stretch, enjoy it.",
        items: [ywa("Total Body Yoga Deep Stretch", "about 25 min")],
        after: "", mins: 25 },

      { id: "sat", tag: "run", kind: "Walk + yoga", title: "Weekend walk", day: 5,
        sum: "{long} walk somewhere pretty · flexibility yoga",
        warmup: [],
        cue: "Pick a nice route and bring a friend or a podcast. Stretch with Adriene when you're home.",
        items: [["Long walk", "{long}"], ywa("Yoga For Flexibility", "about 15 min")],
        after: "" },

      { id: "sun", tag: "other", kind: "Yoga", title: "Sunday slow", day: 6,
        sum: "Gentle yoga for a calm week ahead",
        warmup: [],
        cue: "The easiest day of the week. Cosy clothes, candle optional.",
        items: [ywa("Yoga For Stress Relief", "about 20 min")],
        after: "", mins: 20 }
    ],

    // Ready-made swaps, shown when she taps ⇄ next to an exercise.
    swaps: {
      "Chair squats": [["Wall sit", "30 s"], ["Sumo squats", "10"], ["Step-ups on a low step", "8 / side"]],
      "Wall push-ups": [["Countertop push-ups", "10"], ["Knee push-ups", "8"], ["Arm circles", "30 s each way"]],
      "Glute bridges": [["Hip thrusts against the couch", "10"], ["Donkey kicks", "10 / side"]],
      "Bird dog": [["Cat-cow", "10 slow"], ["Superman hold", "20 s"]],
      "Dead bug": [["Lying toe taps", "10 / side"], ["Heel slides", "10 / side"]],
      "Forearm plank on knees": [["Wall plank", "30 s"], ["High plank on knees", "20 s"]],
      "Side-lying leg lifts": [["Standing side leg lifts", "10 / side"], ["Fire hydrants", "10 / side"]],
      "Clamshells": [["Fire hydrants", "10 / side"], ["Glute bridges", "10"]],
      "Calf raises": [["March in place", "1 min"], ["Single-leg balance", "30 s / side"]],
      "Brisk walk": [["Walking pad or treadmill", "25 min"], ["Dance it out at home", "20 min"], ["Easy bike ride", "25 min"]],
      "Long walk": [["Treadmill walk on an incline", "30 min"], ["Easy bike ride", "40 min"]],
      "Yoga With Adriene: Yoga For Complete Beginners": yogaSwaps,
      "Yoga With Adriene: Yoga For Neck And Shoulder Relief": yogaSwaps,
      "Yoga With Adriene: Yoga For Core": yogaSwaps,
      "Yoga With Adriene: Yoga For Hips": yogaSwaps,
      "Yoga With Adriene: Total Body Yoga Deep Stretch": yogaSwaps,
      "Yoga With Adriene: Yoga For Flexibility": yogaSwaps,
      "Yoga With Adriene: Yoga For Stress Relief": yogaSwaps
    },

    // Extras she can add to any day under "Change this day".
    extras: [
      { id: "walk", tag: "run", kind: "Walk", title: "Feel-good walk", sum: "30 min brisk walk, outside if you can",
        warmup: [], cue: "A pace where you can still chat. Swing your arms.", items: [["Brisk walk", "30 min"]], after: "", mins: 30 },
      { id: "quick", tag: "other", kind: "Yoga", title: "10-minute yoga", sum: "A quick reset with Adriene",
        warmup: [], cue: "Short and sweet. Perfect for busy days.", items: [ywa("10 Minute Yoga For Beginners", "about 10 min")], after: "", mins: 10 },
      { id: "back", tag: "other", kind: "Yoga", title: "Happy back yoga", sum: "Gentle yoga for a stiff back",
        warmup: [], cue: "Move slowly and skip anything that pinches.", items: [ywa("Yoga For Lower Back Pain", "about 20 min")], after: "", mins: 20 },
      { id: "bed", tag: "other", kind: "Yoga", title: "Bedtime yoga", sum: "Wind down before sleep",
        warmup: [], cue: "Lights low. Let it be easy.", items: [ywa("Bedtime Yoga", "about 20 min")], after: "", mins: 20 },
      { id: "run", tag: "run", kind: "Run", title: "Easy sunny run", sum: "20 min easy jog, walk breaks welcome",
        warmup: [["Brisk walk", "3 min"]], cue: "Easy enough to chat. Walk whenever you like.", items: [["Easy jog with walk breaks", "20 min"]], after: "", mins: 25 }
    ]
  };
})();
