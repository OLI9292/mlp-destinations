"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","533687d927d8844badc7a4497392da55"],["/static/css/main.b5a43d70.css","82202408131e20cc0cec696e73dcfc90"],["/static/js/main.1cdfdd72.js","bfd414fa50d397598b8d1cf54c283764"],["/static/media/ATSackersGothic-Medium.89ff4d90.ttf","89ff4d9025dac543eafc87d393c643f8"],["/static/media/Cardo-Italic.35e7a559.ttf","35e7a559be591708c7c914bf06fb5436"],["/static/media/EBGARAMOND12-REGULAR.a8006b37.TTF","a8006b37472df2e365d439d4ec1f48bf"],["/static/media/boats.d35d54ac.jpg","d35d54accb7d64f7a270249ac1e72dc9"],["/static/media/brush-stroke.60641093.svg","6064109326a035bb9949ca5caaad4def"],["/static/media/camel.a4f4279a.jpg","a4f4279a884b39d2d03308cd87a33677"],["/static/media/cheese.a6fdc72a.jpg","a6fdc72a3779a80a105bb21029035419"],["/static/media/contact.2cafbf23.jpg","2cafbf2313c651e0f4896854f4f8703d"],["/static/media/crab.44da640f.jpg","44da640f56ffff53876ea534e9c5ef98"],["/static/media/dancing-girl.e651efd3.png","e651efd3429f34f54dee3a3e4be64c52"],["/static/media/dock.bddbfee9.jpg","bddbfee9c62267e11c2f47466726f481"],["/static/media/doorways.3885be76.jpg","3885be7641fe8d10a425f7e0e4c94c28"],["/static/media/fogo.e02ef1e4.png","e02ef1e467dd85d28a964335ae21679d"],["/static/media/goat.920f81a0.jpg","920f81a029d7ff3d31c08298988392df"],["/static/media/headshot.341ec78e.jpg","341ec78e2d679529baeaaa40c09fe0e9"],["/static/media/lake.025afb83.jpg","025afb830969a0da9ecf1ee1d1d434d8"],["/static/media/lamp.64406e7a.jpg","64406e7a226499dccbcfee9afe787332"],["/static/media/lantern.8647c06f.jpg","8647c06fe2b7db7cac8e0986e50c20a4"],["/static/media/lions.5fec7cc5.jpg","5fec7cc5cdbbaa5fef7159aeaa6504b8"],["/static/media/logo.7b20c1f4.svg","7b20c1f4ec785ad944f38b1ac62a827c"],["/static/media/painting.7d03942d.jpg","7d03942d6dedb291989b8d25fe067e87"],["/static/media/soup.1feb7d16.png","1feb7d16a2781efd70cb195eca486174"],["/static/media/tea-leaf.8ac9284f.jpg","8ac9284fefe1f871a4e49e567cc9599d"],["/static/media/woman.222ae8af.jpg","222ae8af042b143e51164842f31c4bed"],["/static/media/woman.37397585.jpg","37397585e3532b18635ab65188af0d4c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});