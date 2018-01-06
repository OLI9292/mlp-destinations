"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","233a027628d5bbd81c16b5e8136e88bd"],["/static/css/main.b5a43d70.css","82202408131e20cc0cec696e73dcfc90"],["/static/js/main.b3d6516c.js","edf5ce8d3be3bf6efd9a4a03bde2c896"],["/static/media/ATSackersGothic-Medium.89ff4d90.ttf","89ff4d9025dac543eafc87d393c643f8"],["/static/media/Cardo-Italic.35e7a559.ttf","35e7a559be591708c7c914bf06fb5436"],["/static/media/EBGARAMOND12-REGULAR.a8006b37.TTF","a8006b37472df2e365d439d4ec1f48bf"],["/static/media/africa.e6bd29bd.jpg","e6bd29bdcf2b36ecdb83d0024800b4a0"],["/static/media/asia.57d9acf7.jpg","57d9acf72fa9d95cdc780b82032d36e3"],["/static/media/canada.63ae8257.jpg","63ae825728ace43717cd178d3c9a9d3c"],["/static/media/central-and-south-america-1.a6fdc72a.jpg","a6fdc72a3779a80a105bb21029035419"],["/static/media/central-and-south-america.49396fa2.jpg","49396fa27638b6b7a8adf2efa6929b70"],["/static/media/coffee.f7371dc3.jpg","f7371dc3e51ddf90d9489217323bb034"],["/static/media/contact.2cafbf23.jpg","2cafbf2313c651e0f4896854f4f8703d"],["/static/media/europe.fb8552b1.jpg","fb8552b1aa9efffd2dd0b63ce4e93095"],["/static/media/favourite-places-to-stay.c2477e30.jpg","c2477e3068317f8230ad888ff30815bb"],["/static/media/hamock.7bb3f87c.jpg","7bb3f87c73c9cf26fde07c3861820683"],["/static/media/kitchen-header.e5629dce.jpg","e5629dce8ece8345db14fea906b83695"],["/static/media/lantern.8647c06f.jpg","8647c06fe2b7db7cac8e0986e50c20a4"],["/static/media/leaf-header.c1df57a4.jpg","c1df57a4c80d7609361abeb091573a9c"],["/static/media/logo.7b20c1f4.svg","7b20c1f4ec785ad944f38b1ac62a827c"],["/static/media/luggage.9c4486b7.jpg","9c4486b7c818dceb13da5fa4a1bec3f5"],["/static/media/middle-east.ef48a03c.jpg","ef48a03ccbda06573dba4dc73010160c"],["/static/media/new-destination.8d53ae82.jpg","8d53ae827c06df5ffd5c961288e54829"],["/static/media/packing-philosophy.a0d703bc.jpg","a0d703bc83e641925c9551e38ee771a9"],["/static/media/sabbatical.405faee4.jpg","405faee454989696f124e5f537b820a1"],["/static/media/small-groups.68142659.jpg","68142659cf5b4198926c6c4cf31b2670"],["/static/media/traveling-with-teens.8a43836b.jpg","8a43836b6a1243993d2ad91e0c732c26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});