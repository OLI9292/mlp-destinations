"use strict";var precacheConfig=[["/index.html","9e9799ba8452caa4cd95d462e03403a1"],["/static/css/main.b5a43d70.css","82202408131e20cc0cec696e73dcfc90"],["/static/js/main.038fa1e8.js","6731443dbfb2035c0c603b7d6ac7d275"],["/static/media/ATSackersGothic-Medium.89ff4d90.ttf","89ff4d9025dac543eafc87d393c643f8"],["/static/media/Cardo-Italic.35e7a559.ttf","35e7a559be591708c7c914bf06fb5436"],["/static/media/EBGARAMOND12-REGULAR.a8006b37.TTF","a8006b37472df2e365d439d4ec1f48bf"],["/static/media/alpine.7c4ba65f.jpg","7c4ba65f3688d6a0381c62944c957729"],["/static/media/boat.edf09667.jpg","edf09667d0226213e11cb62b8d6b434f"],["/static/media/boats.e7548754.jpg","e7548754e2251acf199482f28edd0bc6"],["/static/media/brush-stroke.60641093.svg","6064109326a035bb9949ca5caaad4def"],["/static/media/camel.a4f4279a.jpg","a4f4279a884b39d2d03308cd87a33677"],["/static/media/cheese.c60e48fc.jpg","c60e48fc42b7a8f1285361dc81ecdbfc"],["/static/media/clothes.01a5cc8d.png","01a5cc8d781c9d2ac59059f0ee423191"],["/static/media/colloseum.784b7877.png","784b7877fb577e32e451e93b4613ad58"],["/static/media/cowboy.bd38af74.png","bd38af74710aeabe86c97c5542af12e5"],["/static/media/crab.44da640f.jpg","44da640f56ffff53876ea534e9c5ef98"],["/static/media/dancing-girl.f9614f4b.png","f9614f4b6b6a4dda843f74428db113cd"],["/static/media/doorways.7e746973.jpg","7e746973fc19cc57e598f33c7e3febb6"],["/static/media/elephant.54559f77.png","54559f77e1a691874baae98c8018be77"],["/static/media/elephant.f775c3a7.jpg","f775c3a759aff3bb3fde451f2f7313bc"],["/static/media/farm.6dd4d436.jpg","6dd4d436b3c2820c8b1eb8a320593610"],["/static/media/fogo.8ac510f8.png","8ac510f8f2235d8967e570f64c5278ad"],["/static/media/fruit.7e21ebf7.jpg","7e21ebf76de7ba6dcf43851b07fb535f"],["/static/media/goat.920f81a0.jpg","920f81a029d7ff3d31c08298988392df"],["/static/media/horse.b0ea4e9a.jpg","b0ea4e9a987af112c086b46dce3f7db6"],["/static/media/jesus.1ba4601b.jpg","1ba4601b1024e50dcc914fb4437ad21f"],["/static/media/lake.26fd0ef8.png","26fd0ef83eefcd0eb43e216d6733c3ff"],["/static/media/lake.6db219a9.jpg","6db219a9dfdfb4822386135bcaf25782"],["/static/media/lamp.64406e7a.jpg","64406e7a226499dccbcfee9afe787332"],["/static/media/lantern.8647c06f.jpg","8647c06fe2b7db7cac8e0986e50c20a4"],["/static/media/lighthouse.0685ee8f.png","0685ee8f0d0ade24bc63bdd8a4cc09d1"],["/static/media/lions.3ced7c08.jpg","3ced7c08118822146f20cbdd525195eb"],["/static/media/logo.7b20c1f4.svg","7b20c1f4ec785ad944f38b1ac62a827c"],["/static/media/man.32989884.png","329898845ad56a1afb75f255480fe3c4"],["/static/media/miranda.413be452.jpg","413be4520e7cb4c7b82a5b8dd6744dbe"],["/static/media/mirror.e951c61d.jpg","e951c61d216fbf0242169a2a1c63c6c3"],["/static/media/monk.a46c8a70.jpg","a46c8a70dfc749b4951f8d4af2eb8a96"],["/static/media/mortar.8aa3b21d.png","8aa3b21d0411f6b160ed7c35486652d6"],["/static/media/painting.7d03942d.jpg","7d03942d6dedb291989b8d25fe067e87"],["/static/media/palace.61390c46.png","61390c46bd8762adac92372675e7dac8"],["/static/media/rocks.8ddb63b4.png","8ddb63b49407edab5176bac07ba6617f"],["/static/media/sandals.7c5a690e.jpg","7c5a690e4e5a56bebfeab9f5c2332a90"],["/static/media/soup.1feb7d16.png","1feb7d16a2781efd70cb195eca486174"],["/static/media/woman.37397585.jpg","37397585e3532b18635ab65188af0d4c"],["/static/media/woman.b1e4886e.jpg","b1e4886eadf6f16e916beb9ec4e9ef1e"],["/static/media/worker.89016de4.jpg","89016de46eb73ada0ea32ba32fee1ac7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});