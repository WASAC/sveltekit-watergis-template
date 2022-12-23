const m = [
  "/_app/immutable/assets/_page-1a725548.css",
  "/_app/immutable/chunks/index-95d721c5.js",
  "/_app/immutable/start-5e899ba0.js",
  "/_app/immutable/chunks/2-9d253024.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/0-016a1d45.js",
  "/_app/immutable/chunks/1-8d9436e2.js",
  "/_app/immutable/chunks/singletons-d7293337.js",
  "/_app/immutable/chunks/index-d23b2ecc.js",
  "/_app/immutable/chunks/index-71eac763.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/components/layout.svelte-99529342.js",
  "/_app/immutable/components/error.svelte-1d9f4709.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/purify.es-075a2866.js",
  "/_app/immutable/components/pages/_page.svelte-fc4bfef1.js",
  "/_app/immutable/chunks/index.es-0b4e413e.js",
  "/_app/immutable/chunks/html2canvas.esm-0a33ed42.js",
  "/_app/immutable/chunks/_page-6f2314ff.js"
], h = [
  "/.nojekyll",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-48x48.png",
  "/assets/icons/icon-512x512.png",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/assets/preview-1200x630.png",
  "/favicon.png",
  "/manifest.webmanifest",
  "/robots.txt"
], i = "1671793964271", a = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== o && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const n = await e.match(s);
    if (n)
      return n;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !c;
  t && !n && !l && s.respondWith(
    (async () => c && await caches.match(s.request) || r(s.request))()
  );
});
