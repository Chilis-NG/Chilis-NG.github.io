/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ace0d9621113b2cb1275b30f048b7368"],["/archives/2022/10/index.html","d7e79f37bd2bd0cf9b130caa8f40fe37"],["/archives/2022/11/index.html","7b6ca74f7ae47b9f065903b44b588b72"],["/archives/2022/12/index.html","c494a92cb3c757b338867dcb835f7e38"],["/archives/2022/index.html","7e941548437b74d47d4a7466bfe39cdd"],["/archives/2023/03/index.html","b0ab81b97bfc91c2e742482618d3b875"],["/archives/2023/04/index.html","c634269a56ccf2910ba53406f4a6aaf7"],["/archives/2023/05/index.html","92bd764346be3885be99f0b36ed3dfae"],["/archives/2023/06/index.html","9cc18b222e599c896aa0bebef246b0f7"],["/archives/2023/07/index.html","6c2919e47b1db18ada75cf8bbc98c53d"],["/archives/2023/index.html","2e56ec4e33ef913010de4e21fd8b265c"],["/archives/2023/page/2/index.html","8f0e6b287153500c4bca319194f537d0"],["/archives/index.html","22b786a8daeeadbbeb164368b6953e51"],["/archives/page/2/index.html","d05667ee35dff508408c4e589660ef71"],["/categories/Flask学习之旅/index.html","9bf9470b33270f0358b060423cb07e53"],["/categories/Flask的搭建之旅/index.html","1e6db3236a01d94b31bcc49467be2589"],["/categories/GAMES/Minecraft/index.html","d9ae3db6f24c239ebd1e31a6a42c7d8f"],["/categories/GAMES/index.html","42d85bcff10bcd586661629434b6390a"],["/categories/Hexo的搭建之旅/index.html","a795fa080d12efe5ea4c14e77055d26f"],["/categories/index.html","9c722e1a4e690f2ebb458cc52d1d0174"],["/categories/原理探析/index.html","c62ca19e01c24c690c40df3a6d3df780"],["/categories/原理探析/电化学/index.html","2b73b69a96df2c106da57ce3eb61586d"],["/categories/大学大不了自学/index.html","2a966d0e29cb4435efc1c92f0fd28149"],["/categories/氢电池研究小组/index.html","c360287fd4fb08dbb03ba5e02f9281e5"],["/categories/氢电池研究小组/实验操作/index.html","5527020b471b93d42d65a7e598c21260"],["/categories/氢电池研究小组/文献观察/index.html","3c3a20f71d46a00a3a7e014af0b0861d"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","ade2cfdc7fb1217209b20b0b856de20c"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","9c652dcce97f8ec35a1f1de9ce0b308e"],["/page/2/index.html","3420baf4167614ea77605affa0c1fbd0"],["/post/10d5b386.html","a07a3acb9f2746c02750546a2a50c45c"],["/post/13313.html","761fcc6b2df8f958d93fb465d0a00f7f"],["/post/19686.html","8171412b3b5bfacce933e72b5f55777c"],["/post/20ac2f54.html","ce74959e3754cbc287d176935bf380fd"],["/post/2197cb5b.html","86b8afe16b4c7bfc0d189f25e046c8e5"],["/post/23f343f1.html","b9274cd0f2493d53ac54b228d0c4b49c"],["/post/57ee7c1d.html","8b331f1ee7ef392df0b188795277f3d5"],["/post/6a7616d7.html","f33ca9772c99c7b55cb976a3aa6c41d0"],["/post/a05cdb7b.html","1e8b7df9390c723dd946d63767248cdf"],["/post/cbd4ddb9.html","5a0dcddee8116fae14fe56e56c9eccdc"],["/post/d5fd331f.html","2c7a53145875a3f3ed7592ec8e463226"],["/post/f1a6d443.html","3e1d4f5c8498c6e3bfc19fcd7aa78c58"],["/post/f32487d0.html","27b05ee2f036fc2b817f27f5b1204704"],["/post/f7c24785.html","10ba641e834e1453b1f1a762a21b6f70"],["/post/fd77207e.html","56eae7e20e6ebcf9764d135e7ebc1801"],["/sw-register.js","bdfecce1ff617a421f4e155c544ad496"],["/tags/Flask/index.html","d3c6cd4c832b71f7166c32ac397872d9"],["/tags/Hexo/index.html","24910a3201c440ba884e55592edcc4c2"],["/tags/Minecraft/index.html","fb00665a2cf3a72ae5ec2ae0cf0ec8a0"],["/tags/PEMFC/index.html","d23abe81ffc46411e80befdb0d2167e7"],["/tags/index.html","7b37efc42a51d81b0bd05bfe29e76237"],["/tags/大学/index.html","667f38c6d020ca6433359b064cdf73d9"],["/tags/文献汇报/index.html","5d3ba1748181f5b438b0c5b2b9f01f7c"],["/tags/电化学/index.html","924e045b6042e6719827d4f5f507ca15"]];
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
