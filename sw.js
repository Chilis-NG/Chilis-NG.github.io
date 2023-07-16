/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","937dc9626c8fec94c4b72adeb23da29c"],["/archives/2022/10/index.html","450db16af63c71c6856da1cf2b43c652"],["/archives/2022/11/index.html","6c21d7b5c710fc6b951e8a29cfef4edc"],["/archives/2022/12/index.html","ff0789b0da1e87fe2edaf5a7a686552c"],["/archives/2022/index.html","e1f83f36f75744e6233a0c99c03e0dff"],["/archives/2023/03/index.html","a4f0e49c98229042ba13242bfeee5ddc"],["/archives/2023/04/index.html","d7a68942e7724df3b57384a69b8dbe86"],["/archives/2023/05/index.html","8662efa42964dafe5c79017babf5978d"],["/archives/2023/06/index.html","e218be5425e71207a27a14f08f68dfec"],["/archives/2023/07/index.html","1b5abfa4af12a03167cd62e9c30fb08a"],["/archives/2023/index.html","3748c340d2b33941e8b96d5cf7ffd0f9"],["/archives/2023/page/2/index.html","749e03f9a5aba22ea8e96897d7e43700"],["/archives/index.html","f990ad42f9a9057a15d6681fa299979f"],["/archives/page/2/index.html","dcf94cd804131733e7c6cd6854901452"],["/categories/Flask学习之旅/index.html","cbcd45e345d83e0f1a0d64a081a17e46"],["/categories/Flask的搭建之旅/index.html","9c18d6c145437e5560f592414a327534"],["/categories/GAMES/Minecraft/index.html","5eb498dca23ee10bb3a8fbe8835009dc"],["/categories/GAMES/index.html","649147bafcbb1cb4d9a51dfbdd129709"],["/categories/Hexo的搭建之旅/index.html","dc47cb52a84f9795c2dfb6327fa995a1"],["/categories/index.html","4bb7da6ba68623359296fa98cb931d32"],["/categories/原理探析/index.html","4a0accbd3cb867efed11cc4a1738e207"],["/categories/原理探析/电化学/index.html","09137ca6d3eb6ba84d78dd79a8e8e193"],["/categories/大学大不了自学/index.html","f95d2ed2d5a1b2c19972e1029a4c676d"],["/categories/氢电池研究小组/index.html","b364eb7360bebde622097f304fb7143d"],["/categories/氢电池研究小组/实验操作/index.html","cd8df5c19ff832c49cb643af76aeb595"],["/categories/氢电池研究小组/文献观察/index.html","027cc96f80fe4c9065b01156b042906c"],["/categories/生活札记/index.html","efa5687015214b191702090c3c8ecca8"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2d3273c21b6e662f104aec0cc788558e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","985c68522e968acaef7ef9ae93128134"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","fcc9f3660c0f084d9930e44500f19fa4"],["/page/2/index.html","f0db2621cd661a96f2b3de16470b628f"],["/post/10d5b386.html","2f6aa72807838e9a977e49e5ef310e5a"],["/post/13313.html","cfbdc799de57272aae6371d2dfe2c304"],["/post/19686.html","2d44f676ff95f57d8683c570fcdaada1"],["/post/20ac2f54.html","d4fe167ed61c105579dd798c7ab894e1"],["/post/2197cb5b.html","7e8136f9937ead0a0cb9ea2584dc44c3"],["/post/23f343f1.html","c0beb2ddc0c7c1f95647c3b0b2faba4c"],["/post/57ee7c1d.html","1529a0db67cd5bf17978862c4ecbcee4"],["/post/6a7616d7.html","be0eabe1ba691a4998af9862bc883ef5"],["/post/8af8cfb4.html","d8cc05770443cd42e9b808f2e2b74f0e"],["/post/a05cdb7b.html","fa9c783480019dc7728362c6dfc81597"],["/post/cbd4ddb9.html","d52f8b75f61349d28da5b4cecca7994d"],["/post/d5fd331f.html","dfcad82d31e821097c244fb594d41ce7"],["/post/f1a6d443.html","5e61cd668541832387abc27645931bef"],["/post/f32487d0.html","421d64694ec8bea13f1317239cdf22eb"],["/post/f7c24785.html","c3003197e393a8b086b475ab2c8a80fb"],["/post/fd77207e.html","ca452e8c1eed2ced1d964fc916e5be20"],["/post/undefined.html","df15e36463dbf41ce78da66a2f7d190e"],["/share/index.html","c102b50b95d2f44baf3808e333387835"],["/sw-register.js","941160b3858d5c3dad1740831e14d3db"],["/tags/Flask/index.html","fb1b5ae3bb37124a80733d1b1a257c45"],["/tags/Hexo/index.html","5180cbdc056211c7f3801c31240215df"],["/tags/Minecraft/index.html","327648dc71005fe5bbb9ade64b7bad1f"],["/tags/PEMFC/index.html","cfb5731044900fcd69405770e80f3726"],["/tags/index.html","ab64ef227bb0edc7f12fe901691e10b2"],["/tags/大学/index.html","a66ea4a08eb19985a6202b93da803a99"],["/tags/文献汇报/index.html","df5abe0c0abd5fdd917c6e0e8e2755df"],["/tags/电化学/index.html","9feb37a32ed1fceace65084d0bc50c13"]];
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
