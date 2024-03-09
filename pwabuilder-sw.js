const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  'assets/css/style.css',
  '/js/main.js',
  // Adicione outros recursos que você deseja que o Service Worker cacheie
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
