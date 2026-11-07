// The plan is no longer password-protected; it lives in plan.js again. This file only exists for
// browsers still showing an older, cached copy of the site: it makes that page reload itself fresh (once).
(function () {
  try { if (sessionStorage.getItem("ab.refreshed2")) return; sessionStorage.setItem("ab.refreshed2", "1"); } catch (e) {}
  location.replace(location.pathname + "?v=" + Date.now());
})();
