/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2e2bb2e0dac4a4b0faa34e5b56f3fbf7"],["/archives/2022/10/index.html","032ea00061215eaba2bbd254b7d0bf8e"],["/archives/2022/11/index.html","d0cf0457ddf7c02937246cdd50c018e7"],["/archives/2022/index.html","08a56074753cc7b3431dd8b1283dbec8"],["/archives/2023/03/index.html","b4b8d1b2f4ea1f34a50a7bedf6d53bd3"],["/archives/2023/04/index.html","3ef59e4a1e0c1e32832457526669dec9"],["/archives/2023/05/index.html","24856cc8b4df777a53766b29c9645038"],["/archives/2023/06/index.html","afdbc8f2b2d84ce88c46cf5570605341"],["/archives/2023/07/index.html","f22988d9ab654f180c3f162ae721719d"],["/archives/2023/index.html","ba7d72d0082c8d1d1dd17729639ff696"],["/archives/2023/page/2/index.html","67efd332a085d04cd01c58c7fbea4911"],["/archives/index.html","b1aeb1c5f781863e0519c96f768f8d6a"],["/archives/page/2/index.html","16da1090fda58dfb2aca4ad411099aef"],["/categories/Flask的搭建之旅/index.html","83cce62dfbb316bcab280f5d2c5b7a5e"],["/categories/GAMES/Minecraft/index.html","ceb276fa6768ec3f3072a9f1eb698e8d"],["/categories/GAMES/index.html","10afb8ed797232c6bc58e89742edf946"],["/categories/Hexo的搭建之旅/index.html","d5920da0a7ceef3ae0a1e5cac432a730"],["/categories/index.html","5b96572a05e6c1042ba98440d730f4aa"],["/categories/原理探析/index.html","9f3f9d3d7d5fe8c16bfc6b6d4bb71b5c"],["/categories/原理探析/电化学/index.html","f7d3b1e2551ad4ee939136f6f866b438"],["/categories/大学大不了自学/index.html","f03f344caee1bdbb9c43d5e3166bd5eb"],["/categories/氢电池研究小组/index.html","9ac42ddb7fe6f9eb417b15a7f1dc673a"],["/categories/氢电池研究小组/实验操作/index.html","3f9612c79f71ab2e1e91ecd04122391c"],["/categories/氢电池研究小组/文献观察/index.html","09c03961fab3fbb8ea4ad8683b58161a"],["/categories/虚幻4：从入门到入坟/index.html","3cd1f807ae3f1aebdfbc47708a97c145"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","dd7272fadae20485b4dffb6e989610c8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","f48f1767cc9b535e6bc65626edc3d64d"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","f1c908703cf69e206d6da92a47fc8e0d"],["/page/2/index.html","796214fdfc6f4a025536c414b825d2bc"],["/post/13313.html","3b052dde3fb7782cd041de5bc4f26b2b"],["/post/19686.html","9194a49a02ae1fc9635f7c4992bc2280"],["/post/20ac2f54.html","58b4dc2e47d6fb16928e07e864bf4f39"],["/post/2197cb5b.html","1fc1f17b8eba11d3a97d501da4280ab8"],["/post/23f343f1.html","1a35a32fee08385ae09018b061a0817e"],["/post/57ee7c1d.html","1f3978fa895d874e7e7f52c7df4ea484"],["/post/6a7616d7.html","c41d1edbf7b86d4c54883d59144d3f3a"],["/post/a05cdb7b.html","5cfeb33934c86a98cd23627ffdb94643"],["/post/cbd4ddb9.html","e0faa0892bb9c48356085a93a6e8d37e"],["/post/d5fd331f.html","c9006c083444caf5ee17781522be8d8c"],["/post/dce9aed1.html","25ba229ab7aa5a3dec926fe63ac29630"],["/post/f1a6d443.html","83fe621a4e043435e6596f1fa503a8ba"],["/post/f32487d0.html","24303bbbab4976bd3b6d54c77c1172c0"],["/post/f7c24785.html","ed5c08f4a9b36992bcad08c86f13ff7e"],["/post/fd77207e.html","f10a0e9c4ae0233ec04903ead15c56e8"],["/share/index.html","44de12dcbabeebb2f566dbdd8007cc92"],["/sw-register.js","fccfa948f92eda3697b40aff093167d5"],["/tags/Flask/index.html","0f5c0edd82dce6d7d620ea8ff8db5df9"],["/tags/Hexo/index.html","3992822bcf73cad80c24b2bb01ccd534"],["/tags/Minecraft/index.html","65c312a49e4b2b66e606bc84911fea6e"],["/tags/PEMFC/index.html","50da83364baf9a50e0d0b8994131cddd"],["/tags/index.html","1fd021b8cd3e67cc056fd8cccf5447b2"],["/tags/大学/index.html","ec3fbf2bf9652945eacd5328dda9443b"],["/tags/文献汇报/index.html","fd07840d52a2c336ba3cd92bc35fd750"],["/tags/电化学/index.html","e1b1d970299d1ee9360c65cfe699ce1b"],["/tags/虚幻4/index.html","1838c9ab7174dab03f552e493d43bb32"]];
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
