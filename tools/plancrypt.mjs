// Encrypts and decrypts the plan for the Ana Banana exercise plan site.
// The site only ships plan.enc.js; the readable plan never goes into this public repo.
//
//   Encrypt:  PLAN_PASSWORD=... node tools/plancrypt.mjs encrypt plan.json   -> writes plan.enc.js
//             (plan.json, or plan.js that sets window.PLAN)
//   Decrypt:  PLAN_PASSWORD=... node tools/plancrypt.mjs decrypt > plan.json  (reads plan.enc.js)
//
// Password is case-insensitive and trimmed (must match index.html). AES-GCM, key from PBKDF2-SHA256.
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const ITER = 150000;
const [mode, file] = process.argv.slice(2);
const pw = (process.env.PLAN_PASSWORD || "").trim().toLowerCase();
if (!pw) { console.error("Set PLAN_PASSWORD"); process.exit(1); }
const { subtle } = globalThis.crypto;
const b64 = u8 => Buffer.from(u8).toString("base64");
const unb64 = s => new Uint8Array(Buffer.from(s, "base64"));

async function key(salt) {
  const base = await subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}

if (mode === "encrypt") {
  const src = readFileSync(file, "utf8");
  let plan;
  if (file.endsWith(".json")) plan = JSON.parse(src);
  else { const ctx = { window: {} }; vm.runInNewContext(src, ctx); plan = ctx.window.PLAN; }
  if (!plan || !Array.isArray(plan.weeks)) throw new Error("No plan found in " + file);
  const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv }, await key(salt), new TextEncoder().encode(JSON.stringify(plan))));
  writeFileSync("plan.enc.js", "// Ana Banana exercise plan, encrypted. Made with tools/plancrypt.mjs; opened in the browser with the password.\n" +
    "window.PLAN_ENC = " + JSON.stringify({ v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) }) + ";\n");
  console.error("Wrote plan.enc.js (version " + plan.version + ")");
} else if (mode === "decrypt") {
  const ctx = { window: {} }; vm.runInNewContext(readFileSync("plan.enc.js", "utf8"), ctx);
  const e = ctx.window.PLAN_ENC;
  const out = await subtle.decrypt({ name: "AES-GCM", iv: unb64(e.iv) }, await key(unb64(e.salt)), unb64(e.data));
  process.stdout.write(JSON.stringify(JSON.parse(new TextDecoder().decode(out)), null, 2) + "\n");
} else { console.error("Usage: node tools/plancrypt.mjs encrypt <plan.js|plan.json> | decrypt"); process.exit(1); }
