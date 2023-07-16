/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ace0d9621113b2cb1275b30f048b7368"],["/archives/2022/10/index.html","58b2f7361b50d74939e7e5f359336ee9"],["/archives/2022/11/index.html","61cda015dc50a5be1ede1d6aeef41012"],["/archives/2022/12/index.html","8e02f0d7f0b0b7be4ce867f4218830a4"],["/archives/2022/index.html","11e8fc3d93e52003e8d3c40e41f252c9"],["/archives/2023/03/index.html","41c8310c951e5415ce2101f0da833f5b"],["/archives/2023/04/index.html","1a5a3f711f03e4707b6e2aa7bfda671a"],["/archives/2023/05/index.html","5a0985dc15c88790345f1c66553a5fe8"],["/archives/2023/06/index.html","46f5d740a46a7846233c027470d10d51"],["/archives/2023/07/index.html","f7078a6c8bdb39aa3329f5a22e39f82e"],["/archives/2023/index.html","34692e7ba392fe813f8c029ef5a2a60c"],["/archives/2023/page/2/index.html","3717618f338c247b7525a3c8c3a89d12"],["/archives/index.html","351bb6005aad4f4267c56cfbf7005366"],["/archives/page/2/index.html","61b2867e39e5a5bc585a04bffc3aea01"],["/categories/Flask学习之旅/index.html","f415bd0f483e28c7a3e9bdfc2b6b3dd3"],["/categories/Flask的搭建之旅/index.html","6a8620878f164bb832e15317d7e3bc9a"],["/categories/GAMES/Minecraft/index.html","99e4755e7c4327b984c36ca39ff627ce"],["/categories/GAMES/index.html","7a777a67aaccf97814e2d49755497dea"],["/categories/Hexo的搭建之旅/index.html","8f1194a6182b6388871e3510da02c90f"],["/categories/index.html","9c722e1a4e690f2ebb458cc52d1d0174"],["/categories/原理探析/index.html","54a17ca7c1881e7a1cea3138327c15ef"],["/categories/原理探析/电化学/index.html","6458bc9a2bb9e586c0f3e3fa3c6f6541"],["/categories/大学大不了自学/index.html","9f9be193a4f4b952de386d50f54648c2"],["/categories/氢电池研究小组/index.html","674b6e711d31df4052879444e9835aed"],["/categories/氢电池研究小组/实验操作/index.html","22cbb80d513e167655a4d28e8eeed709"],["/categories/氢电池研究小组/文献观察/index.html","4589a6a908eb344b9ca49a10273ff077"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","dfd2313a30c72badf5564886d6f4a820"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","4d36701de348c29897af0d117f42ff09"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","ec9df331154bd0029706aa7c1f130c6a"],["/page/2/index.html","d3fc3335fb1f3fdf2bfd14e55a6c3d99"],["/post/10d5b386.html","a07a3acb9f2746c02750546a2a50c45c"],["/post/13313.html","761fcc6b2df8f958d93fb465d0a00f7f"],["/post/19686.html","8171412b3b5bfacce933e72b5f55777c"],["/post/20ac2f54.html","ce74959e3754cbc287d176935bf380fd"],["/post/2197cb5b.html","86b8afe16b4c7bfc0d189f25e046c8e5"],["/post/23f343f1.html","d3a195425316e5abadc776046d76112c"],["/post/57ee7c1d.html","8b331f1ee7ef392df0b188795277f3d5"],["/post/6a7616d7.html","d09a58e41a42181b6be16718aa5c71d5"],["/post/a05cdb7b.html","1e8b7df9390c723dd946d63767248cdf"],["/post/cbd4ddb9.html","5a0dcddee8116fae14fe56e56c9eccdc"],["/post/d5fd331f.html","2c7a53145875a3f3ed7592ec8e463226"],["/post/f1a6d443.html","1bb679af940cd7a46f1cbe3845fa54b0"],["/post/f32487d0.html","ece1b00cde9545dc04f7291d127be780"],["/post/f7c24785.html","10ba641e834e1453b1f1a762a21b6f70"],["/post/fd77207e.html","b87bd369c1f516272ca7fc30c48417f9"],["/share/index.html","e58570e43de4cefc1a69e2a9186903b9"],["/sw-register.js","ee2c7771f0251b8396d375f83a01d43e"],["/tags/Flask/index.html","bb9d17185d1e1015df3a393f8f6b85f6"],["/tags/Hexo/index.html","ada22898f8b20b7cb13fe4cd7baae935"],["/tags/Minecraft/index.html","c6f62e9e715493809a556a2ea0ecbac1"],["/tags/PEMFC/index.html","e948df621f7dba060a24f87bb6f4b508"],["/tags/index.html","1349910628fd4d8c5868bb9a38f516c3"],["/tags/大学/index.html","3525bb35588f1187f4afda23f62d6d69"],["/tags/文献汇报/index.html","5eb45f97291aa67641f75220674b4a20"],["/tags/电化学/index.html","f0235a5840a5c12aa86253af6015970e"]];
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
