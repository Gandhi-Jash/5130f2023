// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/~jgandhi/5130f2023/2023-11-27-lab%20(PWA)/index.html',
          '/~jgandhi/5130f2023/2023-11-27-lab%20(PWA)/signup.html',          
          '/~jgandhi/5130f2023/2023-11-27-lab%20(PWA)/index.js',
          '/~jgandhi/5130f2023/2023-11-27-lab%20(PWA)/signup.js',          
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  