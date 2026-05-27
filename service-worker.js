const CACHE_NAME='wallflix-v53-github-pages-stable';
self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{if(self.caches){const keys=await caches.keys();await Promise.all(keys.filter(k=>String(k).toLowerCase().includes('wallflix')).map(k=>caches.delete(k)))}await self.clients.claim()})())});
self.addEventListener('fetch',event=>{event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>fetch(event.request)))});
