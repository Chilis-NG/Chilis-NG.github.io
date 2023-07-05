/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","c544de10ad3303fe63cee374f61bd69f"],["/about/index.html","2feb43d6ccaa89641e175d5bece520b0"],["/archives/2022/10/index.html","f21485c7abb78a4830cd3289803e57b6"],["/archives/2022/11/index.html","117ab95b9a60b5f090a2c7134e306859"],["/archives/2022/index.html","4de9ff5ec2b2b507d59998b2d1331d29"],["/archives/2023/03/index.html","687ff1085480125cdb0bcd2859927550"],["/archives/2023/04/index.html","dfaaf86b3cf308afb8ab748b61c05996"],["/archives/2023/05/index.html","0e66b9f6110cda585a5f6c6a288341e9"],["/archives/2023/06/index.html","70003176acca54f3d8d5123bf9a8fdde"],["/archives/2023/07/index.html","d40d07e4d5c160916e7bba54fdd7edd3"],["/archives/2023/index.html","79df64f6ad8a4dc754ba49f557624db0"],["/archives/2023/page/2/index.html","39f544aa6f68f60112634b2f1c64049e"],["/archives/index.html","4f0d5c2d2513a283ca8c64d511fb570e"],["/archives/page/2/index.html","1edb62d3cdfbacbaea83f1f58674a16e"],["/categories/Flask的搭建之旅/index.html","76c72204b070e389120bdcca08e7568b"],["/categories/GAMES/Minecraft/index.html","f644afe230f20e5b05527bfa6029c580"],["/categories/GAMES/index.html","6e62cee99d10a929ec4a325f845f58fe"],["/categories/Hexo的搭建之旅/index.html","8f494ab123d94c4c0530702afb9e724e"],["/categories/MySQL/index.html","a11a66f73993801355242de412a0fab2"],["/categories/Python-Study/index.html","c51f9384d129eec11cd33e0309962ba0"],["/categories/index.html","c8cad620c5ae87b9d97f10bc901d4109"],["/categories/大学大不了自学/PEMFC/index.html","8e4626ece1737ab971f464d596563ae4"],["/categories/大学大不了自学/index.html","fb1b1c9a56591fcf903d401d3be56fc6"],["/categories/虚幻4：从入门到入坟/index.html","5747e05305a919042096ddd420354c6b"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","558c434f5276fc2d7b9b2571a11638a2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","64e4dd90e8eedab05940a7517570627a"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","a13a549e8a91e5f467d84f3d56ffe5c5"],["/page/2/index.html","0a1fe60ea2977a9d6b18e498c76d980e"],["/post/13313.html","6c5c8b33e832fc8d51db8e644bd522bd"],["/post/19686.html","d1cc418a404a744d65e2dc2a0cd78fc4"],["/post/20ac2f54.html","95c902d027f1b3b8ed5808f4403d770f"],["/post/23f343f1.html","c659f2f894dc45e9d82eef94d07e1af3"],["/post/57ee7c1d.html","ad321eedce4332d8deadcdc717452c54"],["/post/6a7616d7.html","636fac4de9a73eee8ea42b4e1dd74809"],["/post/750e0958.html","1386542fdd964aa7553397f7e9dc38b6"],["/post/a05cdb7b.html","f3bf50938ca22d28d531b730df22408e"],["/post/d5fd331f.html","a01bd6b9f5a0a6d702a6c524a6db5d6f"],["/post/dce9aed1.html","32d617d832b9b73ccbe3a426900d042a"],["/post/f1a6d443.html","b010bdc60ef8914057c22de00893e5d3"],["/post/f32487d0.html","0a2285d017ff0390b7b5389abe7b6d97"],["/post/f7c24785.html","4fb76911b66f8e06238755d16cb529c8"],["/post/fd77207e.html","a239eddc6a710319c186b1b4550d6839"],["/sw-register.js","29f1648b993327e1b74518762cb14e80"],["/tags/Flask/index.html","bc7679a05bf975c1fb41e61dd208f6c7"],["/tags/Hexo/index.html","ced770c28d51314ce4f4d268544ed078"],["/tags/Minecraft/index.html","6185d309cc5b538124ec3fe5551bab0b"],["/tags/MySQL/index.html","e27182d46b3449ce465f94e64c6db932"],["/tags/PEMFC/index.html","1cf4a96f9ae7d78c6fbe12c8effb0c16"],["/tags/index.html","b14d2e502a9d6fe9d2228b07f92307ef"],["/tags/python/index.html","9979037b21dd119e8f3dcae49772de08"],["/tags/喷涂/index.html","9f42fbf31ddb5827389c27ecae979695"],["/tags/大学/index.html","2f1f2214c12cced433398ec4c399a136"],["/tags/爬虫/index.html","95feaa38c43f80d5ebedc94e27f68681"],["/tags/虚幻4/index.html","be1ff5757ad2f46942d0561129ed680b"]];
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
