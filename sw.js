/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","5e7eb290910ed3e779ef0214fcf17b7a"],["/about/index.html","284096bc1fd6b3050a2f6d0c1e3d8f3f"],["/archives/2022/10/index.html","7aa8bf7854f2604298fa7f2c03233124"],["/archives/2022/11/index.html","a27582c5078d4c2d49a5b9cd08c4a32f"],["/archives/2022/index.html","4baffa7fb1debc01dd68873b53479fbd"],["/archives/2023/03/index.html","7d00286c391f5d420ad049acbc498676"],["/archives/2023/04/index.html","ad40a1cbcda13122cafd8f01d20daea8"],["/archives/2023/05/index.html","4fa2cad5ff17da00692a09c0c5ba6d7f"],["/archives/2023/index.html","ca601bb0176180d591ae3626eefa5e03"],["/archives/index.html","1fb6501bc816707c6cf000b90c1f6375"],["/archives/page/2/index.html","e6f5a2b3a918f65f7c5fa088a0ef0c63"],["/categories/Flask的搭建之旅/index.html","3d93035a1cc845c853711fdb5ec1cad4"],["/categories/Hexo的搭建之旅/index.html","c29624a3d78e9f526b8655fe062f0da7"],["/categories/MySQL/index.html","8acde81f43b2b630ad65cc15aa383ffe"],["/categories/Python-Study/index.html","e714a4fca80b7c9a097b984dcb5002b1"],["/categories/index.html","9b44b584570d04e995f0d46cb4afaf7f"],["/categories/大学大不了自学/PEMFC/index.html","78bf99d1f73d2f4b05617f50c3a1290e"],["/categories/大学大不了自学/index.html","3c740c2f44479b60f63323ff889bab61"],["/categories/科学研究方法/index.html","9b0892e3f9950b902815ca3d372675ef"],["/categories/虚幻4：从入门到入坟/index.html","dd9bdc19e72fc7fcacfc56640a97cd74"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","f7ba5323480209d4eb7779a106cfdce7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","879bf53f3f82a1040d91651aff3ab82a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","e969d6233adfe55deb2deefe890e7f53"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","ba3fa5d1c90639494f1698ff7e847fbf"],["/page/2/index.html","ad9021890bbe9e515a20d6cbf2bf08f0"],["/post/13313.html","1b711309aba0e133fb2246f51048fe19"],["/post/19686.html","f5da5a6a78626b974f5aa363b9396bb1"],["/post/20ac2f54.html","17b17d2067f8b7e610dc31f418c619f1"],["/post/2db5a85a.html","97e04f806975359438554fedb7a303a6"],["/post/57ee7c1d.html","14bf63c72728cc5fdf3fb4083ee909ea"],["/post/6a7616d7.html","a7677ef4ffe0cf3d7b3e00d36c14fd05"],["/post/750e0958.html","8efed9f82f8c48a9fa110da045432699"],["/post/d5fd331f.html","f7e01cf9303a994bce6dbc0cfe2648a1"],["/post/dce9aed1.html","73be4a20f2a6c14ec0b6738b22b96fba"],["/post/f1a6d443.html","304e6bc565877043775f825b4bf427c2"],["/post/f32487d0.html","837e10ee76e0eef82df2ffa0dc0d3692"],["/post/f7c24785.html","9637e8ac554fea594e9de4c5e5bb05a2"],["/sw-register.js","2de1ab4d182fff3cf1cf06080dbd0935"],["/tags/Flask/index.html","a9f0c6d4ab15b4fc809955b1708e857f"],["/tags/Hexo/index.html","e04786f082fbaff6868c46eb47b5b7ce"],["/tags/MySQL/index.html","5ab5331ceeaca4413f3ca3480f059fbd"],["/tags/PEMFC/index.html","2e2dd7843b5c3b2bcfa5b934f05104f7"],["/tags/index.html","398c4d59cb876c9e924f22ed537bf537"],["/tags/python/index.html","26f5e908600fc0a8bb209658705f0886"],["/tags/喷涂/index.html","5a865bf08e2f3ace91c1748da7e18079"],["/tags/大学/index.html","b2c0c04cb138354db0d67359efbb8f8a"],["/tags/爬虫/index.html","3b249ce6ee445c2e1f52b19c5dd2aa15"],["/tags/研究方法与论文/index.html","7e0c11df7eeff33ff0ad7211751dc1d6"],["/tags/虚幻4/index.html","ff0f54204c3d90b94af15fcce5677431"]];
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
