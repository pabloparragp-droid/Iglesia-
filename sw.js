// Permite instalar la app. No guarda nada en memoria: siempre carga la versión más reciente.
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(){});
