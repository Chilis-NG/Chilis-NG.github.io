/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","c544de10ad3303fe63cee374f61bd69f"],["/about/index.html","2feb43d6ccaa89641e175d5bece520b0"],["/archives/2022/10/index.html","e20724f78de7feaeff5c1c03501114c4"],["/archives/2022/11/index.html","82f0e1623adce7969fbc21d2f9ae9e2f"],["/archives/2022/index.html","92a5e9b3b3a45cd40bda08b664f5bdb8"],["/archives/2023/03/index.html","e1889474458f55f6ff23909a69a4e737"],["/archives/2023/04/index.html","f6f60eb05bf516a189a1cb15168f7375"],["/archives/2023/05/index.html","cd2b0659a32daddc158348fbd71e6e7d"],["/archives/2023/06/index.html","f6be6ca5daaf82f8c5b296b629c7fdd4"],["/archives/2023/07/index.html","009e1755d18ca806041fa67399d0bdaf"],["/archives/2023/index.html","0c4fcf7b249e7b5249487ff43ba93b8b"],["/archives/2023/page/2/index.html","20eb14a16e7baf857da41ab0bb0a4926"],["/archives/index.html","1d982212aef74e90a6e6f9abff94d9c8"],["/archives/page/2/index.html","b23cd3576ee65b9ae15084b863048a55"],["/categories/Flask的搭建之旅/index.html","98c5096d11750bc3a213408a6c1298f3"],["/categories/GAMES/Minecraft/index.html","5a453bde81e96f7f47b58b1abffd822c"],["/categories/GAMES/index.html","5259c74401d26b74f400f941c8bc02a4"],["/categories/Hexo的搭建之旅/index.html","e7cc328db020c8f9dd52e95fdeabe197"],["/categories/MySQL/index.html","804232045315cd05c0ed3b93555b00b4"],["/categories/Python-Study/index.html","7198420c3785dc009f6042e6332a7fed"],["/categories/index.html","c8cad620c5ae87b9d97f10bc901d4109"],["/categories/大学大不了自学/PEMFC/index.html","4a88f67725274e993b5b751cb1329023"],["/categories/大学大不了自学/index.html","ae71f05b41fbf0f154a2f0aeb5ec2214"],["/categories/虚幻4：从入门到入坟/index.html","efaea05f6f19068b80f590a3b01783d1"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","558c434f5276fc2d7b9b2571a11638a2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","eb5d7653f9d4f0a4856e978deced1651"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","771e79f130f24d636bae7cffd1f81d55"],["/page/2/index.html","4851d46ff869da5246ba3bcab808df07"],["/post/13313.html","10c00512c7b896887ae70eb06c68f0db"],["/post/19686.html","7248814437e531d84b2cec7e0f4ad95b"],["/post/20ac2f54.html","702ca3e4120d3ac12ba399f9cf719faf"],["/post/23f343f1.html","c659f2f894dc45e9d82eef94d07e1af3"],["/post/57ee7c1d.html","ad321eedce4332d8deadcdc717452c54"],["/post/6a7616d7.html","b8468dbf790c1cd419a6d0973618ef86"],["/post/750e0958.html","1386542fdd964aa7553397f7e9dc38b6"],["/post/a05cdb7b.html","f3bf50938ca22d28d531b730df22408e"],["/post/d5fd331f.html","a01bd6b9f5a0a6d702a6c524a6db5d6f"],["/post/dce9aed1.html","32d617d832b9b73ccbe3a426900d042a"],["/post/f1a6d443.html","0c157297e9cceec330e0d483ba5e7a83"],["/post/f32487d0.html","3a0241514464936983310502f16cefab"],["/post/f7c24785.html","4fb76911b66f8e06238755d16cb529c8"],["/post/fd77207e.html","3db3fef368ea398aade9ea49ada66255"],["/sw-register.js","85969ba34d6881d949358fa83a1bf4ab"],["/tags/Flask/index.html","ab95a4b9b72b32d8d91a2bd554241964"],["/tags/Hexo/index.html","2f4e8173c0f469c8a333b16f36c81e96"],["/tags/Minecraft/index.html","f183ac758b9391a465154aa742eda76b"],["/tags/MySQL/index.html","1bb2710b12bd806de7402d575089616f"],["/tags/PEMFC/index.html","c847368060570fbc2c399a89377dc76a"],["/tags/index.html","070013b8e9a35920516cd17881c55c06"],["/tags/python/index.html","f44c2abd51595e8b22c7bc4009ca5c9b"],["/tags/喷涂/index.html","bdbfd1f06c1c20ddf144074e06e334eb"],["/tags/大学/index.html","00c2faa3690024c2a351937603bd6bc4"],["/tags/爬虫/index.html","28dbcedd9eb9026156d204db20da82c5"],["/tags/虚幻4/index.html","0129547cf6091919dc4d0a332fdfa828"]];
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
