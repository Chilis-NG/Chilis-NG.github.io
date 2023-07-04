/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","feaffaa1316089558c66fb134ab343dc"],["/about/index.html","fab44774866992b1f8eb23d35477d1e2"],["/archives/2022/10/index.html","b12c42e7e421f36ebc3a7acbfc511626"],["/archives/2022/11/index.html","c8b7a260c22cfd7ae22fc7158bdee26b"],["/archives/2022/index.html","43be1c3f53e1304472edc0b953ef1f0b"],["/archives/2023/03/index.html","d5bebc916851ebab842f02af68262298"],["/archives/2023/04/index.html","1f423d75468d58f2f68cf9780da1e693"],["/archives/2023/05/index.html","8411526c28a8ec55b612bcfaa895c5ee"],["/archives/2023/06/index.html","8e5e4152ce2bac4f0de58a71ea352f15"],["/archives/2023/07/index.html","9cec4f9ba0383b56d28f859d671df115"],["/archives/2023/index.html","e227948ca57e0310242806ed26ff4600"],["/archives/2023/page/2/index.html","0a39046c6bf76413d2d0bf5dc5532099"],["/archives/index.html","cfe367a750b383f4d274b36cd5b74ebb"],["/archives/page/2/index.html","61b80106483718cbd0ad68b47b314770"],["/categories/Flask的搭建之旅/index.html","ea7c311d45c5592de6237fa577cc68ed"],["/categories/GAMES/Minecraft/index.html","ca20a33f4abdd2a771a8745aee9674b3"],["/categories/GAMES/index.html","a07739a237c5cf67fa45a0f4530dcff1"],["/categories/Hexo的搭建之旅/index.html","b7cec281ed4353c07d4e154f6c4ce1f9"],["/categories/MySQL/index.html","9aeb6b5cc6be5a6f6c71e2f7e57fc6f1"],["/categories/Python-Study/index.html","009a0405ab787233afd98a44f06afc62"],["/categories/index.html","a7c6092f08f272607e10714aa5c27e68"],["/categories/大学大不了自学/PEMFC/index.html","c95ddfc78875806f6b20e1f295f72785"],["/categories/大学大不了自学/index.html","bfae116100402dcf7aa8f5204519ce27"],["/categories/虚幻4：从入门到入坟/index.html","23d65e2fc53b925587ef6de295ab95f7"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","d39b5b87fd011449210170d2217cb2d9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","33fe5a92c3dc05a92b043ccaa483bf01"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","616eec9f285a9dc2f3ae58d9950b606f"],["/page/2/index.html","9a48518e496a1d8a0f4da5bea1c987a4"],["/post/13313.html","f190d81479519941c369abf0f632e4d1"],["/post/19686.html","b10f048639c589b354ccdb93b25ecb82"],["/post/20ac2f54.html","c1bd2359f2e35727a3ba1fbff9cf962b"],["/post/23f343f1.html","cc5dd9490bab1c73ba2d8857f608fd82"],["/post/57ee7c1d.html","97156ce5aff7709d1c73e4309d0fbefb"],["/post/6a7616d7.html","b05c3a7be424f6229ba250212e499ad6"],["/post/750e0958.html","bcde4ddb600da51de596e34bd1d6f39f"],["/post/a05cdb7b.html","3cf7257cbddee09124d449c32d13a66b"],["/post/d5fd331f.html","e2f084d342a4dee6d08dd3b57480768e"],["/post/dce9aed1.html","b495d79bab889221ad3d5b80839e70d0"],["/post/f1a6d443.html","b22c035b29f37bc29c428430830195d5"],["/post/f32487d0.html","aea967d6512b50ba1c7cb23f3614c781"],["/post/f7c24785.html","50ecee1e3ff08c96fdcbc8ffecf26a78"],["/post/fd77207e.html","fab8065ff12410d82fb1c62cb5f2ac8b"],["/sw-register.js","5ec5a875997d1a70afbdd831efd9a7f8"],["/tags/Flask/index.html","2199587bd772683cee4c905c45862e4d"],["/tags/Hexo/index.html","aeacc4e8bb62fad935f966d8f2c5aa7b"],["/tags/Minecraft/index.html","876e41394bb7088ff2b1387af3fa6972"],["/tags/MySQL/index.html","b0401f5274d9bca2e40b1d9f7668b64b"],["/tags/PEMFC/index.html","8e1772404d2e8ce903f59ccf5a216cfb"],["/tags/index.html","c485cace790538425acdb6bb5d13fd60"],["/tags/python/index.html","27f62040e697344c60d1062450c4051e"],["/tags/喷涂/index.html","4a128d183a83b92d060f1c1c8e410286"],["/tags/大学/index.html","db91b56425857206f06565b864226872"],["/tags/爬虫/index.html","01675bfc7b810f59ec1afcbe26b1a182"],["/tags/虚幻4/index.html","4fd31425927a86829452b6f228412fce"]];
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
