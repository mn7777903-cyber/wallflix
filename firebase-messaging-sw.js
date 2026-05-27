const CACHE_NAME='wallflix-v51-clean-video-hub';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.mode==='navigate'){e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match('/index.html')));return}e.respondWith(fetch(r).catch(()=>caches.match(r)))});
