// The plan now lives in plan.enc.js. This file only exists for phones still showing an older,
// cached copy of the site: it makes that page reload itself fresh (once), so the password screen appears.
(function () {
  try {
    if (window.PLAN_ENC || sessionStorage.getItem("ab.refreshed3")) return;
    sessionStorage.setItem("ab.refreshed3", "1");
  } catch (e) {}
  location.replace(location.pathname + "?v=" + Date.now());
})();
