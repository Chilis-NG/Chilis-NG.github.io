/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","568a5e9bf6b208438cca34cd37a38c91"],["/about/index.html","ec1015bd7f5010381fdf4c0de877d09f"],["/archives/2022/10/index.html","fa8c5cca42c45fd48d39f62b376d9c32"],["/archives/2022/11/index.html","a238e4f2fc6e116147b02c486e8c05e2"],["/archives/2022/index.html","5d9d5bb7d61637ad88df075042e27558"],["/archives/2023/03/index.html","cf29a406306224625f0ef6c8c4fba33f"],["/archives/2023/04/index.html","19f2e14f4be9ff0d50b2bef929c0e3b5"],["/archives/2023/05/index.html","08b3f080f6b0e0e6025c385859a4e155"],["/archives/2023/06/index.html","8112a5fe3f35948cc19156d37b141051"],["/archives/2023/07/index.html","a69362c714be36674f531461dccbba61"],["/archives/2023/index.html","65e52207817a47c3168a17b3bcc0752b"],["/archives/2023/page/2/index.html","460be9bd3b62c3093c4f0d23aa3cdaef"],["/archives/index.html","84a358bb80ffeb9b6daf397eb63a864b"],["/archives/page/2/index.html","24b66a0ebe37cb2b888f01ae9bef62d1"],["/categories/Flask的搭建之旅/index.html","910767ffb6d4f577fd772ade2c9a05aa"],["/categories/GAMES/Minecraft/index.html","9f9461e52fa47490e9f621343382cf66"],["/categories/GAMES/index.html","a2c6a6c48b86073b973df1ec0d2e9252"],["/categories/Hexo的搭建之旅/index.html","e2c3501572b5a97c579d8e2fcf0c07f1"],["/categories/MySQL/index.html","487ea963a1270c663ad1bbd1940a7602"],["/categories/Python-Study/index.html","64c1a408efd4382d5672fe3cb954a852"],["/categories/index.html","34d43224e5027b71a720f3c40d008976"],["/categories/大学大不了自学/PEMFC/index.html","5fc8bc83f860ebbee8cb8ec88aa6dae1"],["/categories/大学大不了自学/index.html","f3ebcc1b5d93de619d71188e13249841"],["/categories/科学研究方法/index.html","ac49e1e1d99f9b3dfca60e23f07fa9f9"],["/categories/虚幻4：从入门到入坟/index.html","a9ddfee8515c40222957aabf7d14e0ca"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","e628879f50c4349ba01116e5985d9d6d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","91a77112f7eb342c6f3dc30d885e4ae6"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","1ba46c8a85cf712f3932fa7a406a5ae3"],["/page/2/index.html","e318ec84843643478865dc20ca86b94d"],["/post/13313.html","ba6cc29437cc4ac36a88e8969d8dee32"],["/post/19686.html","c007757fbb5fbf6d75ea53c260e016b5"],["/post/20ac2f54.html","e8f13d9449c1895fcee6c9af9131902c"],["/post/23f343f1.html","99080a98a9193a19144634f457d60f8d"],["/post/2db5a85a.html","d6aec1c1e6ac54198001ffc7b1dc8084"],["/post/57ee7c1d.html","f3fce1313141ff5b07be35ccd50fbdd3"],["/post/6a7616d7.html","23d427170bb17ddf875a5007a59a7abe"],["/post/750e0958.html","92969d3552a48ff638f0dc10ec9a88ed"],["/post/a05cdb7b.html","e663186bf75809f7f33f2addb6e6b505"],["/post/d5fd331f.html","b115b58951df2703d9e8ed068a80d715"],["/post/dce9aed1.html","fe533396d89af57fb79c3aefc046b9ea"],["/post/f1a6d443.html","8f61ef75c4a955046253051bb98c0b2c"],["/post/f32487d0.html","829fd4524b8d9eb81b9ed6d82f8cf402"],["/post/f7c24785.html","c497fa2dc69fce9347ae09e3d07a5468"],["/post/fd77207e.html","80bf8e9b1e52816014e26d74b787151d"],["/sw-register.js","0728cde4b73db1fa69b4a723260ac964"],["/tags/Flask/index.html","dc747a64c4ebf8f8f1fdae25d17cbbab"],["/tags/Hexo/index.html","843aaf616fd81d700c0853bffafeb843"],["/tags/Minecraft/index.html","5e1f0d5ea0072ca69900de1b1c0f7973"],["/tags/MySQL/index.html","b38130780403bdbf68a04f57cb7a9b75"],["/tags/PEMFC/index.html","62ff38b2017eb835fec72056b891711e"],["/tags/index.html","5be39fa95b45160cee8d1f52d29af571"],["/tags/python/index.html","89ea3fe31d2eb203ed5364934bf1a2d2"],["/tags/喷涂/index.html","619a195eb2d2103126bf117fb563738e"],["/tags/大学/index.html","3790fbcee11545f7ad1a6e604b5fc2dd"],["/tags/爬虫/index.html","4f6e100a0b66544522b73622957b6678"],["/tags/研究方法与论文/index.html","7dc5f03138f9bc27412498e8fe6df0cc"],["/tags/虚幻4/index.html","eba9f917e07138c43c1989ba15fac1f0"]];
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
