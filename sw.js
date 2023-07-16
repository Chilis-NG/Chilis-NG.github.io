/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","713e4bb1fc542b4150357079af2bdd92"],["/archives/2022/10/index.html","a04252cbae45b377fc84ce59fc271e0a"],["/archives/2022/11/index.html","e7a953394ceb356c68c1011b48433c18"],["/archives/2022/12/index.html","f78302828b014fe7f7ec1fe89b5c8bb8"],["/archives/2022/index.html","ee467f052f65799ecb4e05d95849200b"],["/archives/2023/03/index.html","06f8c940faea0c606a1566ecae5f6aa8"],["/archives/2023/04/index.html","1c7b0a9dd487e33f928aea4ba2cfe60c"],["/archives/2023/05/index.html","451ccfa6e9a6d6a0f6c39a270563cf6b"],["/archives/2023/06/index.html","6930e39b762112e4eca05157bd9a53c8"],["/archives/2023/07/index.html","4af31e4d45ad39f7ed76c879daa3576b"],["/archives/2023/index.html","11e3e9ecc603fffc281597cc0768d079"],["/archives/2023/page/2/index.html","b8f4a3124091219e00e0ca9b9b6e91d1"],["/archives/index.html","d8dffa898f581a5ed2a93c3a223268cb"],["/archives/page/2/index.html","78bec966ee8ad12236e9fde074a11c93"],["/categories/Flask学习之旅/index.html","8ed2eedb80c77b9881c37dbadd3c9374"],["/categories/Flask的搭建之旅/index.html","796fda6c247d68c31907a1337c30e53c"],["/categories/GAMES/Minecraft/index.html","683922a299bfbbd07b0f2cd0a1064b5d"],["/categories/GAMES/index.html","fca9d8279df0113d51285aa51c0b6019"],["/categories/Hexo的搭建之旅/index.html","58dd42aaba704c9486401bdfbd364417"],["/categories/index.html","5279ad651bd8a0b6898a5318b0d2fc67"],["/categories/原理探析/index.html","89bb9a5c022ddac1b6d73ae1680b74b3"],["/categories/原理探析/电化学/index.html","d2615beafc5fbf12d4fa5df7711f21ae"],["/categories/大学大不了自学/index.html","17b877206679f74398a3c91c64112969"],["/categories/氢电池研究小组/index.html","f783450e71a22e6267628d42bab32dc4"],["/categories/氢电池研究小组/实验操作/index.html","2d1e1f820be55a0a27ad41291befb4e6"],["/categories/氢电池研究小组/文献观察/index.html","ca475a0bda2107bb03a994600994f9e2"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0f2308d91feb811b54c38fbf25982ec5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","ec1acef70836fdfd69046d8d21bdb4c5"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","d882f7b7b51e402a16a216151845d7a9"],["/page/2/index.html","cf85c720e2b555e32f6da20e8c7c31d3"],["/post/10d5b386.html","0a5ac32dabf332d92356db13aa4215e2"],["/post/13313.html","25c137c7b22715b234c850fde0cfedfc"],["/post/19686.html","17ac35ce3b89ca069dfaf59e506d013f"],["/post/20ac2f54.html","72ad9c420d31b4bcaa171fd05c4c26f9"],["/post/2197cb5b.html","2125c277eaa6e253211b028866c8d330"],["/post/23f343f1.html","0c8d4ed05bf5ce5e9c095502e32fd271"],["/post/57ee7c1d.html","ac813dde5ab72c6fba0e069e32d21d1f"],["/post/6a7616d7.html","5a9a6fa7c2c184866bb484f8dfa3977c"],["/post/a05cdb7b.html","4be1ad0256bb3ff56a00ea1baceaea34"],["/post/cbd4ddb9.html","f97dddd938018838d963ba75869adf28"],["/post/d5fd331f.html","9d1676c4658015b32904cefe80fce66f"],["/post/f1a6d443.html","298012e946a536e27383a5468a4d9676"],["/post/f32487d0.html","220cf45bb480f99ab42ef6484a5d9a25"],["/post/f7c24785.html","edf970560ebf028b38267352e003195d"],["/post/fd77207e.html","70613aea81ca648fc5ceaa248b313f82"],["/share/index.html","12f9cbe3a44ef9a5f2395e6c3820c974"],["/sw-register.js","e6b96d4269eb69f54feb37f52dab7497"],["/tags/Flask/index.html","ac0209d7fdba7042c7ea99af914c2986"],["/tags/Hexo/index.html","4a0acc4e68188c109c5b75f416f06145"],["/tags/Minecraft/index.html","1e683ad93666f3ef7901803a88998ffa"],["/tags/PEMFC/index.html","f48945dd946bf79239d3b34fcbd7d599"],["/tags/index.html","e7c6d5fb63fea7536984efd8131defaa"],["/tags/大学/index.html","ae788d321181c5fb1e30bf6c17a3b408"],["/tags/文献汇报/index.html","61b2c5e0caa0892c10023bc262e2a369"],["/tags/电化学/index.html","898fb36683cb777eb50f1ea8ae0398be"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
