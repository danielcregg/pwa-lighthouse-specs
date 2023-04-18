const CACHE_NAME = 'smakowity-v1';
const URLS_TO_CACHE = [
    '/offline.html',
    '/images/logo.png'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});
self.addEventListener('activate', (e) => {
    e.waitUntil(
        // Get all available caches
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                // Delete old caches
                if (CACHE_NAME.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
self.addEventListener('fetch', event => {
    // Handle requests only from the app domain and pass the rest
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cache => {
                // If the requested resource is in the cache
                if (cache) {
                    return cache;
                }
                return caches.open(CACHE_NAME).then(cache => {
                    // Return the offline.html page in the offline mode
                    if ( ! navigator.onLine) {
                        return caches.match('/offline.html');
                    }
                    return fetch(event.request).then(response => {
                        return response;
                    }).catch(error => {
                        console.warn(error);
                    })
                })
            })
        );
    }
});
