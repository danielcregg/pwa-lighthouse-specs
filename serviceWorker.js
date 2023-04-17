const CACHE_NAME = 'pwa-app-cache';
const URLS_TO_CACHE = [
    '/index.*'
]

self.addEventListener('install', function(event) {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('[ServiceWorker] Caching app...');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("[Service Worker] Activate")
})

// This code shows add to home screen button in chrome
self.addEventListener('fetch', (event) => {
    console.log("[Service Worker] Fetch")
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request)),
    );
});
