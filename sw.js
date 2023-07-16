/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","16bf0d9a6435864ec061b2950cf7184a"],["/archives/2022/10/index.html","1d8f6fb8958eaf582fdb24f7e3754c0e"],["/archives/2022/11/index.html","c11bccce905dcd3a3d3c8b6353d38b45"],["/archives/2022/12/index.html","9177de652aaa23824628bf66348fd637"],["/archives/2022/index.html","1cbddf0f833137a3b8d556f858d7718b"],["/archives/2023/03/index.html","da5ee0cb05741f0b4ff38090d70b7fb6"],["/archives/2023/04/index.html","81ff250ceb10f55b592ffbe2811e8fdf"],["/archives/2023/05/index.html","dfbd533888dedf7acc1bc16ce986c2af"],["/archives/2023/06/index.html","bc01bef5f0b760fb0693c9e24cfc9810"],["/archives/2023/07/index.html","0db142941c89e5534f0c71a668ac044e"],["/archives/2023/index.html","66c7b1ce9817d09e8c4941fa734aa1b8"],["/archives/2023/page/2/index.html","938857f16c903b2f8331b8c8709367a3"],["/archives/index.html","3ddeb1fc1eed7849718d6635847fb6c1"],["/archives/page/2/index.html","5b215fbea2fb6efb010f46c005c1bf69"],["/categories/Flask学习之旅/index.html","dc0fc62f5fb23141b4bd29b3caf61f24"],["/categories/Flask的搭建之旅/index.html","bb7dfcac08794b97d04f201d3d2dd5ad"],["/categories/GAMES/Minecraft/index.html","b487f3ef2ca8f0ec83f9e2f9a90e72c7"],["/categories/GAMES/index.html","ebeb7085f166852ddeb8e16ae11d0067"],["/categories/Hexo的搭建之旅/index.html","a520879fde6d2bb14d3c88aea28f8ee6"],["/categories/index.html","90bdc7f9de4ba4ebef598bb06b01b351"],["/categories/原理探析/index.html","fa569ae98b73c32fc98768ed3320ba5e"],["/categories/原理探析/电化学/index.html","46d75cd6559000edb5f5192df182b868"],["/categories/大学大不了自学/index.html","bd7aa8a5a7a423659ad2ba76a0beed0c"],["/categories/氢电池研究小组/index.html","867c4fa8155d09f0310411a6d1454878"],["/categories/氢电池研究小组/实验操作/index.html","04c5985c6d2c02f4c5965e4607d2ad23"],["/categories/氢电池研究小组/文献观察/index.html","630fe47b570e371a31d184f0e34456cf"],["/categories/生活札记/index.html","8f865d16d945e113eca8d308737b87b7"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a44769cd2391c14d3cec0a6125bebaef"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","1ba28f9b1f1262fbb0ba8ccc5b4b3b3b"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","5b16d206d1915fea6570cdd17275e2ca"],["/page/2/index.html","3c52dd5ed9795651ba7a4918ec4d2a9b"],["/post/10d5b386.html","0eaa90a306d4731c770d823e0784c0fd"],["/post/13313.html","afbba385908783c212fdf1624e2a7d5d"],["/post/19686.html","fbae5f071cf480b1742c845c06bfeaee"],["/post/20ac2f54.html","96362006cf59061fc569577b9c62be89"],["/post/2197cb5b.html","943bbb4c8a121f631fc7db60e4233407"],["/post/23f343f1.html","162634730f030ae352a65d38515c4899"],["/post/57ee7c1d.html","2fee2e6ed43554fc34c0c422efc20f72"],["/post/6a7616d7.html","0833ca8396e92c993b866a79b2982bf3"],["/post/8af8cfb4.html","3fb21ad0f1375cc93abb3f2737255d59"],["/post/a05cdb7b.html","220c5fc6a2ced21eff85f814f9b67886"],["/post/cbd4ddb9.html","e66b9b58e228ad82c4abbd024e0ade6d"],["/post/d5fd331f.html","ce8b7b756e87c4115a3971c76392d69d"],["/post/f1a6d443.html","cea64a7bb86977762097f488071f7ff6"],["/post/f32487d0.html","b48e67631051a4a7ee72c60d6c4bbc5d"],["/post/f7c24785.html","fb6db634a81e3bc8a40f4d0f486cc599"],["/post/fd77207e.html","3f95e1915d188044f655b66b7b619976"],["/post/undefined.html","608bc3fb2b6426a82d570127f1fdd4bd"],["/share/index.html","73ff2db9405f07af1cb3a2c0a4e6103e"],["/sw-register.js","3297f76228b5ac10b967dd3ac3d75c74"],["/tags/Flask/index.html","1bd62a002f158fdd9cff37dd898a2e06"],["/tags/Hexo/index.html","522a8b5d9232b0cbead30f8c6ae4702b"],["/tags/Minecraft/index.html","fed4f4c56b2759a7225bfc27194d9d97"],["/tags/PEMFC/index.html","ae49bd8b868fec6e5dbfb737554c2541"],["/tags/index.html","6bcf73535d5ef45aece13b06203f21b4"],["/tags/大学/index.html","b07e13e9adb11ef166d00d016038e22b"],["/tags/文献汇报/index.html","c56f29582a15d26bc96f8ae932c85a0f"],["/tags/电化学/index.html","39c519b5b0684c647728b9b83f2a52f1"]];
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
