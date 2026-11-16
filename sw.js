// Permite instalar la app y recibir notificaciones. No guarda nada en memoria: siempre carga la versión más reciente.
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(){});
self.addEventListener("push",function(e){var d={};try{d=e.data.json()}catch(x){d={title:"Mi iglesia",body:e.data?e.data.text():""}}
e.waitUntil(self.registration.showNotification(d.title||"Mi iglesia",{body:d.body||"",icon:"icon-192.png",badge:"icon-192.png",data:{url:d.url||"./"}}))});
self.addEventListener("notificationclick",function(e){e.notification.close();
e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(c){for(var i=0;i<c.length;i++){if("focus" in c[i])return c[i].focus()}return self.clients.openWindow(e.notification.data.url||"./")}))});
