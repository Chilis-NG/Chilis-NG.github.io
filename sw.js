/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bb2f2560fd93e78d5b30541fddffc95d"],["/archives/2022/10/index.html","77b86da207d021197c18a54b5fa60212"],["/archives/2022/11/index.html","66f23943b4d9fe31966ced20345e625f"],["/archives/2022/index.html","261f09337b517b89ef33fd208432bab4"],["/archives/2023/03/index.html","e37b5f70bd50804c306265b4ea3170e5"],["/archives/2023/04/index.html","a98863b28f8194ed2a6c203a482e2e6c"],["/archives/2023/05/index.html","ff0296a77a66255bcb56b1657783fa28"],["/archives/2023/06/index.html","f9cda8af1d52c0522bd2e08ee0648d3f"],["/archives/2023/07/index.html","18682889f668307312f124325bd85602"],["/archives/2023/index.html","385d063b1be08214324f300280949014"],["/archives/2023/page/2/index.html","c8fd2bfa95acddb81f536ca53c7b4b12"],["/archives/index.html","5035e2a4886c7e5cee8dd07c65a20426"],["/archives/page/2/index.html","aa9577bffa3524a40caff27ca80cd199"],["/categories/Flask的搭建之旅/index.html","85e97665ecc6c483c5e14b5e891ceb9a"],["/categories/GAMES/Minecraft/index.html","5d6550ecf5c53835e244e1d39cf1b391"],["/categories/GAMES/index.html","d3cb09f7511a8fa6a26a56bba3ec075d"],["/categories/Hexo的搭建之旅/index.html","f1abc7dc7900547ebb2199157bd1e7ae"],["/categories/index.html","753a811ec13e1f8e02339bba9064f013"],["/categories/原理探析/index.html","5233fbaa5a72d83e2cbcf54f368d69bc"],["/categories/原理探析/电化学/index.html","4c5138f56ad385e4d953f76718798f11"],["/categories/大学大不了自学/index.html","c4b450ebb0e3a1eb9096218f0c79a1b3"],["/categories/氢电池研究小组/index.html","5234852f3f015140cf1be7f02b5f444c"],["/categories/氢电池研究小组/实验操作/index.html","17682548f7b3aa24137c2a1b91b438f3"],["/categories/氢电池研究小组/文献观察/index.html","dc95cab3f267b665e02bc28547dd74e1"],["/categories/虚幻4：从入门到入坟/index.html","2dcd70fb6a2c942cd07aa9849244b74f"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b9465720ec096ff52ae0005362e9a327"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","ca6a1192c11980f5bbb82182f5601c1f"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","7dfa7c7dc1973345740d335b13a46174"],["/page/2/index.html","0244bc715f6bd71baeff34c128a8c775"],["/post/13313.html","db183bc8ce5ad0fc4517842aa2d16a9d"],["/post/19686.html","a7b352bd13c9b65f28251fc3d96e8996"],["/post/20ac2f54.html","1d1ff5f579191392031983432a05e33e"],["/post/2197cb5b.html","0aab3f95cbbdb03733430f89d8225eae"],["/post/23f343f1.html","4a868d599b8840d2328dfaa4cb38e0cb"],["/post/57ee7c1d.html","f4d266835337e9d662fff8e7a90130eb"],["/post/6a7616d7.html","e20718d851a119b10cde5a2821460eeb"],["/post/a05cdb7b.html","8f2c1cf03e32d806896ac9da2d6ddea9"],["/post/cbd4ddb9.html","2d6b619df54bd7c0ee14d6fb768e1638"],["/post/d5fd331f.html","a74686a684fe71ac4bcae4333c5659b5"],["/post/dce9aed1.html","0d8c63d731d4400d52bdf86b38465e33"],["/post/f1a6d443.html","91e536fd5745ee996607c2e5e94bd4ef"],["/post/f32487d0.html","c68627f41d313ac1dd419d18eb2f2a89"],["/post/f7c24785.html","ac51f093acf537ed545fb70764ad64ed"],["/post/fd77207e.html","20fff522afe9b1bda8fa1edc8ad107b5"],["/share/index.html","bae9be2577f2e5261783923a2474d5d5"],["/sw-register.js","64e24a11870034801a74f581866e9838"],["/tags/Flask/index.html","ea1e524326b705865c2870bf8f0d321b"],["/tags/Hexo/index.html","8ecc9abfc30349a6dd40b4eb4f1ebf6f"],["/tags/Minecraft/index.html","50f516426823d7fdec5ca0ee7c73630c"],["/tags/PEMFC/index.html","a3d1524ef724a108ad6464880c3a30ff"],["/tags/index.html","66cbc8c23ad542565b810380f0fa03a2"],["/tags/大学/index.html","0d37a82bec459755ab9516c4f45be78f"],["/tags/文献汇报/index.html","e98f119f2bfe40ef13f889621922baec"],["/tags/电化学/index.html","664c52a55dd230f403a23ab91674f68a"],["/tags/虚幻4/index.html","4f87a773e9257e8f43cc25c171e0313c"]];
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
