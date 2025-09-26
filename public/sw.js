// Service Worker for Aiden Harrington Portfolio
// Provides caching and offline functionality for better SEO and performance

const CACHE_NAME = 'aiden-harrington-portfolio-v1';
const urlsToCache = [
  '/',
  '/static/css/main.1a3654d6.css',
  '/static/js/main.99b9cad2.js',
  '/static/media/profile_pic_resized.45c492aef29443b11573.jpg',
  '/static/media/stanley_sitting.6f1decb4d1b94af3587d.png',
  '/favicon.svg',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
