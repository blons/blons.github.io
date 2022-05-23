self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    '/style.css',
                    '/dark.js',
                    '/top.js',
                    '/404.html'
                ]
            );
        })
    );
});
  