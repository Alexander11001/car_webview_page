'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18b21d2ea4cac568c06367abdf7e58f8",
"version.json": "aff1c4d17241bf94e922474312963d7c",
"index.html": "5096a1a8e006a1c656b4b1f729471117",
"/": "5096a1a8e006a1c656b4b1f729471117",
"main.dart.js": "63622573ed24159b2ab6c59776ccef42",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2f6baa6e4812a9b9c7a89788f5063077",
".git/config": "87a8757993a0fc50bb2546318eb88e97",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/7cfc6fbfc5997a32c5577ce24ccef857a23e1e": "9cce372805a05d672d0e9d44ed0b768b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/9af7c05a406c9f6c2cbea2ae23267b04ca5ce2": "4f9b5bc2d7c38ab706809403b8bba1e7",
".git/objects/69/fb928e2bb8cd2bdb4d6d6dcdde21bcc8f46508": "51bb54849b82ea4272a237304994488d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/05c644df268b0c4c2dbbd81024f7e9f74232fb": "bf8b5b5cafe81338cb9d6ac16179893b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/ad29243b0d805e1bf0f32d984b5ae8771df4ec": "67c9c7b9dd1bd114cf1283bbc1ddd8e8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/fa2c659eb62eda71acb9b7ed9cc138af496518": "1a5709e30dec3bbdf10dbba49c53f7ad",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/68543bc5f37f0efb86f24a20c319dce7c78f4f": "d238434b786076aa124f44a5af63604b",
".git/objects/fc/79267e43b3fd15d827ffe6a2850ba05f84f5ea": "73deb1c7f1dbd63d3bfdf9799e3f91d0",
".git/objects/fc/7bbef39274a81d511023b43cec22473142360f": "5151b0c9e31929d6b43fb6c921a46f0f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/d9479234802c599e6869047f69a0fcb504cc7c": "b3141dbabd93b70bae1901b1df4e64ab",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/e27117b77feae42ef56ce99599919af0c06831": "46aea25e0026cef8280ad2739cc3d1bb",
".git/objects/ca/2cafdf9ebf08fd97a4b28a3dbcea70eb439891": "bb0cfde5e25a02220b7a3a49f351c469",
".git/objects/18/6e90bcb6c96f638e66b1202bd92856e4c0e15f": "62e72b695b77f36e91d08b3557defad3",
".git/objects/29/553d1adbedef09b867ed7901e16f77854f7b4d": "2ce7b769e8dbbaad67d521e86eb7594a",
".git/objects/87/4ff7816da15eed0606207ee8d8843f835f680c": "199e5325b2d168994f2124ceb4261d0c",
".git/objects/80/47675763f35283877015c22301a02000ba7637": "fb23ebd3c99a2c05c856cb84312b4e85",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/75adfe0824db45918b37cd0ff4f7ec85e97af5": "f6d46b244a09db00813279c0ac98754b",
".git/objects/75/cb99121c04f1281f2b4f9fb6798bc407dc1e47": "74535d8882c3fcce17a9081622946621",
".git/objects/44/cdeddc65e89b60cf1fb0135a3943557b975162": "b23cb190d653dd17c44753a85bc9557d",
".git/objects/2a/5230f617070f737c5ef1f0cc5d091875f9e6b4": "269dfd18bfb3f1c77d175b0db457e9da",
".git/objects/43/9098ed0fd68dff58b88163d8a38ee6da6a11fc": "68cac7e133e14451428ee13872c68774",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/559e841171f3eed1119fbb6ea68f914592e3ab": "7f08c3d9830950be562883cea8dc0031",
".git/objects/09/bbd6abe361213329d309e4b9bca329ec0e7bf1": "df439ad494794a93f57384e0706b3325",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/4326c1f8f122bea17b210382db3f76c5181782": "989b2961a86c0fd17f8519ba0f48d87d",
".git/objects/96/a0594841ca4edfd0076ef0df56fe2a61cc2f78": "8bcd4067b6b9b8c6a6d2598a1eb118d8",
".git/objects/54/642267789465f8883a6e3e3b8108bcddff5d99": "f45ab702a4364d1c7f871007f3079967",
".git/objects/3f/eef120dd37a65f88d3205d149f377b47656adc": "6a696fd2d59a511b2f53758ed5b865e3",
".git/objects/39/7b5eff0a414437769fd5530977731dcf2b7d8c": "1d6be43dea2d1029a2a08dc66ff391b7",
".git/objects/55/bf05b0c2087bdd5475d4781c3df002b0213431": "95b9b3675b99c0468897ea855d1ba97a",
".git/objects/90/ff72710e0a61a9c9ad104d1bbd63ec577603cb": "e8f533699fac10c888afea5bca36eb16",
".git/objects/d3/009df4eccfcecb48948aa71862c6100db254df": "e21577538f6f39abd4e14ad98a0a8c5b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/2c91ba7097473ed8577b10e8fc9a201b4ecf48": "6e3489475235adafebfa01aa87848aaa",
".git/objects/b7/c6c025a3aa2a73af0e797d8c5d70e9368501f9": "42a0d7dc77e1d3bb4907672cb1ce6873",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/35950a22b84d58a04f51900af270465360ada4": "10be892ce8fa5923d285f3d47cac6fb2",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/54ebb5e78b074129f9da8bbe96597b8a33f842": "10869afa781d4b84fa9a7c820c03f8f2",
".git/objects/a1/06fdef0778e2b05c7e2133cb51f5e602269cd6": "2e086650627f09b176e434c7c3a97df2",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/6aba6472b250f389f023d6d68827069c71d084": "220916a27b729f9ba9845d778b24bc61",
".git/objects/e8/1904f0f1c6091235210b45f91f1e5c40813303": "dd6daa75add43a399eb95f68e36db410",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d87726ebcde1958efa8ebc12888c3f26fd5673": "0f54fe92c5fefb78b7e9e2db2f997fa9",
".git/objects/83/476c70d7b0432c71eac91b62eb62bd7f9134a7": "a435e57fe657600d12dbc22dcf69d2d5",
".git/objects/77/a66cbd97e9098dbb80b3b25e1b96546b6042f7": "af66e4141223956842a7934310796af3",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/7e21af4b61fa5ba830eb0b124d04d26dca3332": "fc7a98e91da314772bc90ec5c0fdb575",
".git/objects/8d/78266942f8711081694ad0db440f6a38a55f8e": "5086e5e755e8dda6e1e17ce5827126d7",
".git/objects/85/7f53174aa537c63879bfea717b406dba86309f": "07ff60d97718e9260059ac13d6e093ff",
".git/objects/82/13635c186fd73d9769bcba182dade9282b8826": "320150a0c130d37524cd3df60ad4eb9d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/7471257a4716c6fcd1e42395d9d393d3a5f560": "85e750d2141b488e9e03b7cb25b140fc",
".git/objects/78/1311afca0cdad1657859d3f2610082cf59c217": "eafce56b50602794107857e285e4da7a",
".git/objects/7f/2152a3553df149b83509ef5e49d64d9c797929": "eec70c7b3063df9ac1adc266a6e965ef",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5ccbf4b830ef3a7e703783a64b355d9",
".git/logs/refs/heads/gh-pages": "70563dbe20b26c0869850853a78fa829",
".git/logs/refs/remotes/origin/gh-pages": "7970840c338e056f149adf46ca3d5243",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "a8244c90ae57ed11b35f28e3f423f9df",
".git/refs/remotes/origin/gh-pages": "a8244c90ae57ed11b35f28e3f423f9df",
".git/index": "34d086fa36e1e43e83475ab8f468599e",
".git/COMMIT_EDITMSG": "bf5261ba28c692664cb967652373b8a2",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "e069d4ed3ae79047e619517719562b0f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "bed9349f8d72d9e7e128cb9e18ed2d2c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
