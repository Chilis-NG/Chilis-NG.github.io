/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ace0d9621113b2cb1275b30f048b7368"],["/archives/2022/10/index.html","27555e84b909029272ff7a4fa59ad54f"],["/archives/2022/11/index.html","85518652c4a87ab5c04f3e5da322c591"],["/archives/2022/12/index.html","b738999baa6cc1f3eb4597957421a94f"],["/archives/2022/index.html","eac6cd664fef960845a53ea64ad30e0b"],["/archives/2023/03/index.html","7acaf94d1d88a006534067a590683a3e"],["/archives/2023/04/index.html","667b6b7a9c6c6a4c1ca567a3a99d284d"],["/archives/2023/05/index.html","66fc973f90d11aaf3200dbdd327a3801"],["/archives/2023/06/index.html","4d1eb7ce9515989a665f077c5e8e7de4"],["/archives/2023/07/index.html","7cb31651832bbcb33c7fff3f54c82d23"],["/archives/2023/index.html","9496fe65d32a7ceb7a58d4ae742beff8"],["/archives/2023/page/2/index.html","2584dbdc33f0adb9f13586b9fa432621"],["/archives/index.html","7bdfd035ec10385e52bd02a12c6a2079"],["/archives/page/2/index.html","df263a6dc4869a9baeef1ac910cfcbf3"],["/categories/Flask学习之旅/index.html","e5e205f2bc8d7c16c0da8da855365253"],["/categories/Flask的搭建之旅/index.html","a4bf0c735d11b5c530e7fe9f291a08b3"],["/categories/GAMES/Minecraft/index.html","1f06cd6b7283c0279b60ebaf16565898"],["/categories/GAMES/index.html","deefa404e5ed6ccb5ac424f1d6d48606"],["/categories/Hexo的搭建之旅/index.html","3a289b06c56c5f2037573bd776ad12e9"],["/categories/index.html","9c722e1a4e690f2ebb458cc52d1d0174"],["/categories/原理探析/index.html","44764177264345d5fd3132a8caa5ddbd"],["/categories/原理探析/电化学/index.html","979bc4a488a53cffe1d6c69ba6ef7e5a"],["/categories/大学大不了自学/index.html","5b4d890bc87ddbcb2f89ebd7f50c87f9"],["/categories/氢电池研究小组/index.html","8f0c54c9eec3d06617d5ea3710eaab74"],["/categories/氢电池研究小组/实验操作/index.html","15476af84ce86aad5bdc6572cb1b0552"],["/categories/氢电池研究小组/文献观察/index.html","040226c2f31aab1543c8030504cef4d3"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","dfd2313a30c72badf5564886d6f4a820"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","6d557e58b4f22733e35ef932dfc94361"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","e78c0ee32062367d3ad9fd625a8705dc"],["/page/2/index.html","a23762933e818a1da31ef5bfc5276361"],["/post/10d5b386.html","2f145879b6cfaf897e47ebeabff06276"],["/post/13313.html","ab0fe0c56d42fd923ee684543deff1db"],["/post/19686.html","3e412203998df028b9948c34d214c05e"],["/post/20ac2f54.html","ce74959e3754cbc287d176935bf380fd"],["/post/2197cb5b.html","86b8afe16b4c7bfc0d189f25e046c8e5"],["/post/23f343f1.html","d3a195425316e5abadc776046d76112c"],["/post/57ee7c1d.html","8b331f1ee7ef392df0b188795277f3d5"],["/post/6a7616d7.html","d09a58e41a42181b6be16718aa5c71d5"],["/post/a05cdb7b.html","1e8b7df9390c723dd946d63767248cdf"],["/post/cbd4ddb9.html","5a0dcddee8116fae14fe56e56c9eccdc"],["/post/d5fd331f.html","2c7a53145875a3f3ed7592ec8e463226"],["/post/f1a6d443.html","1bb679af940cd7a46f1cbe3845fa54b0"],["/post/f32487d0.html","ece1b00cde9545dc04f7291d127be780"],["/post/f7c24785.html","10ba641e834e1453b1f1a762a21b6f70"],["/post/fd77207e.html","510ff47a4594e9f1fd88379e46e4bc68"],["/share/index.html","e58570e43de4cefc1a69e2a9186903b9"],["/sw-register.js","09281f227d1a2c4a530d03fc221381b3"],["/tags/Flask/index.html","e85f2acc940f28f70ef3eab03e2ac2af"],["/tags/Hexo/index.html","acfd3b847688c8dd0a7eee728e782410"],["/tags/Minecraft/index.html","1ee95e8767e097bd5e59746ae6e0b283"],["/tags/PEMFC/index.html","2ec1c759c4e01154e529cf63b5b2b08f"],["/tags/index.html","d4c94930f6bbcd1a75a8c0506c79bf7a"],["/tags/大学/index.html","21e6f95ca9d56d5bca1838cd2df10df2"],["/tags/文献汇报/index.html","52d3ada36dbd3f27860c1624a5191e2f"],["/tags/电化学/index.html","50d2ab51f0011c2d7b2635440ecc1d15"]];
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
