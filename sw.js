/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","aaea362b5e570af49b56990097b49a40"],["/archives/2022/10/index.html","c9e6711613d8a37b5524e95a21a8ee82"],["/archives/2022/11/index.html","04b0fefa5f2fbe718200bd9353d1bfc3"],["/archives/2022/index.html","565959e68d0265312813ebd146af094d"],["/archives/2023/03/index.html","6d0ac99d247204e29ba6f506278187c6"],["/archives/2023/04/index.html","15e124ed34f89a9f11ee17083b0e869f"],["/archives/2023/05/index.html","5e22a93bf46e4281110e8d6ad3ddf12c"],["/archives/2023/06/index.html","2dc01933edb5e1f26627505be7dab056"],["/archives/2023/07/index.html","a850333c75bbf9bb8f4ec874550f9ded"],["/archives/2023/index.html","f0e57e4c29721244bda8977ead4ef3b2"],["/archives/2023/page/2/index.html","cb09b32f76769719b4b3a9776e2723a9"],["/archives/index.html","ff0791ac6cd4930b577307c5d8e66edb"],["/archives/page/2/index.html","2626eafec2a220420cbda164da2e757a"],["/categories/Flask的搭建之旅/index.html","173f8b48ae7f9ec5aa59d19675f063c3"],["/categories/GAMES/Minecraft/index.html","5ad7da58accee4c5a5cf846fd4c3d925"],["/categories/GAMES/index.html","34addad13d5104e3ad2d2a15e200b1ee"],["/categories/Hexo的搭建之旅/index.html","8937b81c27825b436ca00b6acd7d82ec"],["/categories/Python-Study/index.html","169f2abdaf97a24568da7c27e92bf121"],["/categories/index.html","a5605072a3fc174a1620b356c71073ce"],["/categories/大学大不了自学/PEMFC/index.html","76e19dfa30136c004b613e15350330b8"],["/categories/大学大不了自学/index.html","49874ed6bf2c2e42c1c0fe900966c0bd"],["/categories/大学大不了自学/电化学研究方法/index.html","332bd85ab52ff97a198b6912f47cb675"],["/categories/虚幻4：从入门到入坟/index.html","080df3fa477f1cbe57517c85d23b9dd5"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","cab0ae187af078b1888a84ea8938c72b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","39da885fc984ddfdfe4bdd152776120b"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","35f318ca022509b4aa75fa25f3f2943c"],["/page/2/index.html","0fd2d2661d835d7eef16acda235cd2ee"],["/post/13313.html","a6320375529f6f3a1bfbb8feff69a939"],["/post/19686.html","6d3ce3e0ba3bb0ccf6a3f54818c18684"],["/post/20ac2f54.html","0cd223f85c6028ab07c8903417de9d46"],["/post/2197cb5b.html","89215c211cfd68e733032475d0f5534b"],["/post/23f343f1.html","2571e409ed544fdd4f6ce14c3d4b7096"],["/post/57ee7c1d.html","c3881643a38b72ca5ba7f7e998e4ecae"],["/post/6a7616d7.html","b8ea8307c7ea88ba6a35ba01325ed871"],["/post/a05cdb7b.html","78cffcd14eb9b42e84aef6b723ef5097"],["/post/cbd4ddb9.html","6cd27a35bf3981ec2bc8ba0236b04e5b"],["/post/d5fd331f.html","538769bc16c405ed7321d3f83f62081b"],["/post/dce9aed1.html","0ccf8d60ea707213687042c49a40a1fe"],["/post/f1a6d443.html","6175f6f3d01b86a96ecc0b294e619885"],["/post/f32487d0.html","75c65c575d972197982f0f7bb9fd9084"],["/post/f7c24785.html","b57b79f89545611ca13ee86ad13440a3"],["/post/fd77207e.html","6e58736732e5fc01d94f37675c096fc3"],["/share/index.html","e1d44e517f8742d31ac1318301ee5f87"],["/sw-register.js","0cf779d1181a2888c1d4ab360d379018"],["/tags/Flask/index.html","e72ddabb5340d8649879402aab0db129"],["/tags/Hexo/index.html","b759a68932730148ea42b7a8b66b9623"],["/tags/Minecraft/index.html","9765dbcb70f219854fe7b3c07dae3712"],["/tags/PEMFC/index.html","dd5a1bcae85ef3c2e824a9316ef78b59"],["/tags/index.html","d5c79cd64737fc8dec09886e1823886a"],["/tags/python/index.html","6cab306693fde3de16823a0351333992"],["/tags/喷涂/index.html","1972d69c82da7e57ba42c11d6757dda3"],["/tags/大学/index.html","574c1fce2dc50d00027fa7eace72b00d"],["/tags/文献汇报/index.html","83848158898d64673f4096476b53ed69"],["/tags/爬虫/index.html","2d9e43685df883fee0c7dad4aace5f31"],["/tags/研究方法/index.html","d621097fd4e76c130d82b4fe8dce267a"],["/tags/虚幻4/index.html","a20a5764e81ab5758b6b6352d1d0a0ee"]];
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
