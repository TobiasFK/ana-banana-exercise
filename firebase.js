// Ana Banana exercise plan: connects the page to Firebase (email + password sign-in, Firestore).
// Each person's data lives under fitness/{uid}/docs/{key}, readable and writable only by them (see firestore.rules).
// Uses its own Firebase project; settings live in firebase-config.js.
(function () {
  if (window.FP_DEMO) return; // style preview (demo.js) is running instead
  const CONFIG = window.FIREBASE_CONFIG || {};
  if (!CONFIG.apiKey) {
    const msg = "This site isn't connected to its database yet. Check back soon.";
    const err = Object.assign(new Error("not configured"), { userMsg: msg });
    document.addEventListener("DOMContentLoaded", () => { const m = document.getElementById("signinMsg"); if (m) m.textContent = msg; });
    window.fp = { onUser(cb) { setTimeout(() => cb(null), 0); }, async signIn() { throw err; }, async resetPassword() { throw err; }, async getSharedKey() { return ""; }, async setSharedKey() { throw err; }, async signOut() {}, async watch() {}, async save() { throw err; } };
    return;
  }
  const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";

  const ready = (async () => {
    const [appMod, fs, au] = await Promise.all([
      import(SDK + "firebase-app.js"),
      import(SDK + "firebase-firestore.js"),
      import(SDK + "firebase-auth.js")
    ]);
    // A named app keeps this site's sign-in separate from other sites on the same domain.
    const app = appMod.initializeApp(CONFIG, "training-plan");
    const db = fs.initializeFirestore(app, { ignoreUndefinedProperties: true });
    const auth = au.getAuth(app);
    return { fs, au, db, auth };
  })();
  ready.catch(err => console.error("Firebase failed to start", err));

  const col = (F, uid) => F.fs.collection(F.db, "fitness", uid, "docs");

  window.fp = {
    // cb(user|null) whenever sign-in state settles or changes. Anonymous users count as signed out.
    async onUser(cb) {
      const F = await ready;
      F.au.onAuthStateChanged(F.auth, u => cb(u && !u.isAnonymous ? u : null));
    },
    async signIn(email, password) {
      const F = await ready;
      await F.au.signInWithEmailAndPassword(F.auth, email, password);
    },
    async resetPassword(email) {
      const F = await ready;
      await F.au.sendPasswordResetEmail(F.auth, email);
    },
    // The household Claude key: one doc both accounts can read, only the owner can change (see firestore.rules).
    async getSharedKey() {
      const F = await ready;
      try { const d = await F.fs.getDoc(F.fs.doc(F.db, "shared", "claude")); return (d.exists() && d.data().key) || ""; }
      catch (e) { console.error("Couldn't read the shared Claude key", e); return ""; }
    },
    async setSharedKey(key) {
      const F = await ready;
      await F.fs.setDoc(F.fs.doc(F.db, "shared", "claude"), { key: key || "", updated: new Date().toISOString() });
    },
    async signOut() { const F = await ready; await F.au.signOut(F.auth); },
    // cb({key: data}) with every document, now and on each change (other devices included).
    async watch(uid, cb) {
      const F = await ready;
      return F.fs.onSnapshot(col(F, uid), s => {
        if (s.metadata.hasPendingWrites) return;
        const out = {}; s.docs.forEach(d => { out[d.id] = d.data(); }); cb(out);
      }, e => console.error("Sync stopped", e));
    },
    async save(uid, key, data) {
      const F = await ready;
      await F.fs.setDoc(F.fs.doc(col(F, uid), key), data);
    }
  };
})();
