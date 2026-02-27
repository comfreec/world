const CACHE_NAME = 'flag-game-v11';
const urlsToCache = [
  '/',
  '/index.html',
  '/quiz.html',
  '/stats.html',
  '/about.html',
  '/learn.html',
  '/settings.html',
  '/help.html',
  '/privacy.html',
  '/terms.html',
  '/memory-game/index.html',
  '/home.css',
  '/home.js',
  '/quiz.css',
  '/quiz.js',
  '/stats.css',
  '/stats.js',
  '/about.css',
  '/learn.css',
  '/learn.js',
  '/settings.js',
  '/achievements.css',
  '/achievements.js',
  '/country-data.js',
  '/memory-game/style.css',
  '/memory-game/style-mobile.css',
  '/memory-game/script.js',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png'
];

// 설치 이벤트
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('캐시 열기');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 활성화 이벤트
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch 이벤트 - 네트워크 우선, 캐시 폴백
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 응답이 유효하면 캐시에 저장
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // 네트워크 실패 시 캐시에서 가져오기
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // 국기 이미지는 오프라인 시 기본 응답
            if (event.request.url.includes('flagcdn.com')) {
              return new Response('🌍', {
                headers: { 'Content-Type': 'text/plain' }
              });
            }
          });
      })
  );
});
