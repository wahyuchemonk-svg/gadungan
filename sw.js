// Service worker minimal — cuma buat syarat "installable" PWA.
// Belum ada caching/offline sama sekali (sengaja, sesuai lingkup awal).
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Diteruskan langsung ke network, belum ada cache.
  // Kalau nanti mau dukungan offline, tambahkan logic cache di sini.
});
