/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ec6552494b5a0f05a8b1f5ef16c4b6a7"],["/archives/2022/10/index.html","e750d7c9047937a136788569227bd789"],["/archives/2022/11/index.html","80cda10937f71e6253f8ff51d2896ac6"],["/archives/2022/12/index.html","699ad4271b6f0b25e2000275baf5391a"],["/archives/2022/index.html","12e2927607196c9d6ed41d87f3264683"],["/archives/2023/03/index.html","b927fba6f9b62a5e66b490a0a29396fb"],["/archives/2023/04/index.html","066103456a2bbdb321d193de24b07c68"],["/archives/2023/05/index.html","38cd7a6b47b96809aa78c8d521658550"],["/archives/2023/06/index.html","56f83c3252c8b7bb336139f338ba4853"],["/archives/2023/07/index.html","4838bfd9d5520761bb688fe07a0e9f66"],["/archives/2023/index.html","0997b82e92b01945327e49ddec07eb37"],["/archives/2023/page/2/index.html","340bdce85714438c80d5b99a20ee65c4"],["/archives/index.html","a50bde7b42ae220ffaf8cb90b24973a5"],["/archives/page/2/index.html","b8641fef06db7a788c6ef06bac6f0709"],["/categories/Flask学习之旅/index.html","30f862a42427a71788571d0b797da4f9"],["/categories/Flask的搭建之旅/index.html","9a6b1fab326bc9d7274bd9e7dadabcea"],["/categories/GAMES/Minecraft/index.html","e54ce97816c8c3c644b6c6106c48fcd5"],["/categories/GAMES/index.html","81f87f7ed1e7a0ceec5b6c81a1f757c7"],["/categories/Hexo的搭建之旅/index.html","080a37bd6d1aa6e44e951a91a16a10fd"],["/categories/index.html","e5d9c8e45def0043285c6e7a8e4c238c"],["/categories/原理探析/index.html","725f1c5e77178e731c628fcfd32df9b5"],["/categories/原理探析/电化学/index.html","f914c19bd17248903395f298663864b9"],["/categories/大学大不了自学/index.html","c8fdd4926e0c626064076dd17bf87ef3"],["/categories/氢电池研究小组/index.html","8a414eedac107d98f30276304deea458"],["/categories/氢电池研究小组/实验操作/index.html","832221e04644a8ee1f6d17d431abd780"],["/categories/氢电池研究小组/文献观察/index.html","0b662ca6c914b7d18a17ef8b54486c77"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a2379709982e96524c394fd42c9159dc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","ae7ac35fa5ed81358ef45ad871bbc84a"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","650cbddb1ec84568b649c6fc66b78f96"],["/page/2/index.html","c158d79f1bfee8c40078944368fdd0dd"],["/post/10d5b386.html","7e90f48ec6e427313008ef0cb0b89172"],["/post/13313.html","a2f3d4e9dd3502276bd33beed11cab9b"],["/post/19686.html","7c367a7705428d317a8ec4ca8b0ad8d3"],["/post/20ac2f54.html","5d4539ab61ac952966a98ef07c570484"],["/post/2197cb5b.html","05d7a9a01a77c2c178d01adfbef77bd2"],["/post/23f343f1.html","1f182aed35ee69e0c33177daef719ae3"],["/post/57ee7c1d.html","49dbddb37113fc386ca861319fad52e2"],["/post/6a7616d7.html","af3d3d737e642d313b1f781ba05c265c"],["/post/a05cdb7b.html","b6b3a477369d153735b95caf833ec020"],["/post/cbd4ddb9.html","48db08d173c22d8358689146bee3ddec"],["/post/d5fd331f.html","ec62462e6f8a5f790c5c3bca2e270ac3"],["/post/f1a6d443.html","84889e6c453c2d5837d0a46f872afe34"],["/post/f32487d0.html","09a689cf76a42ea2e1de37a35056ae98"],["/post/f7c24785.html","f92f5f570606061f14984e3a9ed28819"],["/post/fd77207e.html","e3315757c913b561e40152f5d11b3b1a"],["/share/index.html","2b79170ca55907d37a13c058c671b5d7"],["/sw-register.js","d5dbea7182a6871865f4d1e001746bad"],["/tags/Flask/index.html","3dc7e378510e43aeda553d602a7f4a4f"],["/tags/Hexo/index.html","180500e88c7b3e183c6ef1c382945833"],["/tags/Minecraft/index.html","0ff2f11d39678d2a010ca78180baf21c"],["/tags/PEMFC/index.html","2c2f7f700b54f7ccb5c164db839c0677"],["/tags/index.html","7e1084666ea558581a6e571a0d6edab4"],["/tags/大学/index.html","0712660afaedba56cdf87373d751bac9"],["/tags/文献汇报/index.html","6899428998935dc3b22ca799dd3c1d9e"],["/tags/电化学/index.html","781db85d2f8d239a18848caf1fe27f21"]];
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
