/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","c544de10ad3303fe63cee374f61bd69f"],["/about/index.html","2feb43d6ccaa89641e175d5bece520b0"],["/archives/2022/10/index.html","81b8a7e0e280b6c2fa28321e910ed76d"],["/archives/2022/11/index.html","9e891b8dbd9a45efce1ab02ceb980f74"],["/archives/2022/index.html","cd5180e47d3597ee05d2ea4c8dd8680f"],["/archives/2023/03/index.html","1aafb6ddaeb9cfa083a40b87c8bb9ce9"],["/archives/2023/04/index.html","e06457c4b7e764525bd7d7dd20770b7a"],["/archives/2023/05/index.html","873dbfcda09b72d47827e168d0bfcf26"],["/archives/2023/06/index.html","05b06bc9abf215d7ed2f9c6d824bac0b"],["/archives/2023/07/index.html","656a1808d841c0e0609dafc32aef791d"],["/archives/2023/index.html","2f8dcb1d2f5f8f7724f8de52fb1b695e"],["/archives/2023/page/2/index.html","35cfe46ff89531f3f98492e2ae0e1c0f"],["/archives/index.html","7986718fa3e50db7a66ad93780a73749"],["/archives/page/2/index.html","d86da36a4f8bcb89e1b85e575d439ab0"],["/categories/Flask的搭建之旅/index.html","9e045320c144e11908e096f69f295c81"],["/categories/GAMES/Minecraft/index.html","473a0c2a8156bc03528ca2ad088045d2"],["/categories/GAMES/index.html","cb37131c68e5d1e6c05d1b063c30cd49"],["/categories/Hexo的搭建之旅/index.html","5debd62ec9103857ef2b9d86ed858e24"],["/categories/MySQL/index.html","c022ce7df5f1a6be98565153c356c3d8"],["/categories/Python-Study/index.html","fe9f31ec97f98818d6061033b6e12f8b"],["/categories/index.html","c8cad620c5ae87b9d97f10bc901d4109"],["/categories/大学大不了自学/PEMFC/index.html","f01a547ae6d4853e1428e26d711edcde"],["/categories/大学大不了自学/index.html","7af92fe6d2fe961225d61aa38796816a"],["/categories/虚幻4：从入门到入坟/index.html","ebacfea76cf3ab56f358dc4e3dcc735c"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","558c434f5276fc2d7b9b2571a11638a2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","2fcee31c50964e6f76a64d411556fffb"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","78a1153630be35f626cf4a11b5d7d8d5"],["/page/2/index.html","d8f7f03cc05d4bc3e7e13b0f3bbbb912"],["/post/13313.html","10c00512c7b896887ae70eb06c68f0db"],["/post/19686.html","7248814437e531d84b2cec7e0f4ad95b"],["/post/20ac2f54.html","f27d0a83e3a2e21d9e61a078159d9cb0"],["/post/23f343f1.html","678fb28f5608efa925404bb0a2b2f2fe"],["/post/57ee7c1d.html","ad321eedce4332d8deadcdc717452c54"],["/post/6a7616d7.html","0d2957cb3dccfe463166fbdf4db08aa3"],["/post/750e0958.html","1386542fdd964aa7553397f7e9dc38b6"],["/post/a05cdb7b.html","f3bf50938ca22d28d531b730df22408e"],["/post/d5fd331f.html","a01bd6b9f5a0a6d702a6c524a6db5d6f"],["/post/dce9aed1.html","32d617d832b9b73ccbe3a426900d042a"],["/post/f1a6d443.html","59f3926bfe17244b76f5f7a71a42b1f4"],["/post/f32487d0.html","3a0241514464936983310502f16cefab"],["/post/f7c24785.html","4fb76911b66f8e06238755d16cb529c8"],["/post/fd77207e.html","f89563e6d4583a20b6dbc66c380e1908"],["/sw-register.js","8fa2b3995d4dc8bc5c616b75533b440f"],["/tags/Flask/index.html","c5ecc434fec761cbb97ed9c4ff0d2216"],["/tags/Hexo/index.html","fad0c1c1845eb482c27a680546147d15"],["/tags/Minecraft/index.html","17f706982a259eab8a73668312410efb"],["/tags/MySQL/index.html","4f5c5e6618e96366fa9efb05d4b9f980"],["/tags/PEMFC/index.html","cf04a64761273dbb8d4d42e3e82caf7f"],["/tags/index.html","2546eb4f36488287f2b88513506c899b"],["/tags/python/index.html","b3f663d40a96ab791acca1b0620410dd"],["/tags/喷涂/index.html","9ff02acddea42ee22be134aef7c32f5d"],["/tags/大学/index.html","1c6bd5cdd8e9d36f5fbb778b24bb66c5"],["/tags/爬虫/index.html","dd7b1d5135137bd8eb88387cf5a9534d"],["/tags/虚幻4/index.html","b2479113c9c4fade635949325c697af1"]];
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
