/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","35274419ba4f63d708fbb766dd678e5c"],["/about/index.html","57a753e4d61f12c9a1d20c1d197bad5e"],["/archives/2022/10/index.html","91ed36b66eb9adbeab59f0658573879b"],["/archives/2022/11/index.html","9e8e803d29f665bae346f9d1d8895475"],["/archives/2022/index.html","730387654aadf18db8913c2809e5b7b0"],["/archives/2023/03/index.html","6113fb7e57c205eefa894d9e166d8737"],["/archives/2023/04/index.html","92e22b6c09cb6cdc3daf7bb4303088fc"],["/archives/2023/05/index.html","6246b7deeee9aeed8f4f4981e7f05704"],["/archives/2023/index.html","0e6b319659c440466480f4c7c9e3869f"],["/archives/index.html","8823237d29b7d6a17dca9e74cc95c7e5"],["/archives/page/2/index.html","501abe8ff2691a9ba84d558f1ee364d9"],["/categories/Flask的搭建之旅/index.html","4f4900034fc7d1a3a64c2d8e45aa1506"],["/categories/Hexo的搭建之旅/index.html","733f71436242e0a2c1d5727bf5b2a760"],["/categories/MySQL/index.html","45da3f336d42ff0e959681fd12b85a23"],["/categories/Python-Study/index.html","38728a537f57457d10f70a44bd80fbf8"],["/categories/index.html","b4c11530dc0fce2de7095570dd80d905"],["/categories/大学大不了自学/PEMFC/index.html","54f9fd273f1cb48ffd0f9daf9b8aa500"],["/categories/大学大不了自学/index.html","7f3073cae3a52f5c72e1004df05f2c7c"],["/categories/科学研究方法/index.html","5769cdc827ee0d97d00e85860ddef1f0"],["/categories/虚幻4：从入门到入坟/index.html","b18b07150a394dec60e6e4f912efb18b"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","f7ba5323480209d4eb7779a106cfdce7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","2305a82c8ae2dd4b97f5f43e2533ce24"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","232f9e8310f872390c34c55a0aa67ec5"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","c4bc79a192794f056f4ad8f8f9165cd0"],["/page/2/index.html","d5e4a026edffb57833c009d058acf063"],["/post/13313.html","9f3bbd7df03d55c353a6c3d6d237c3b5"],["/post/19686.html","10e140313d791aed8b794bf300db42ce"],["/post/20ac2f54.html","c27216fb71d73571ebf515adf6ee1924"],["/post/2db5a85a.html","593de14bb75ecc778fddb7401835fe4d"],["/post/57ee7c1d.html","edb35f442684e9e42e7e793ce5979e27"],["/post/6a7616d7.html","c9485b9dfe0d8f276fd9936f8600ee5b"],["/post/750e0958.html","cd7b409bd5aa122f6711bf9f45caf71c"],["/post/d5fd331f.html","474a43a8bf425bb5285ba918e337f951"],["/post/dce9aed1.html","9756254fcf4a8761de983f4835f44814"],["/post/f1a6d443.html","de37266d42ceb8ce44e2ba3b82a1ce0c"],["/post/f32487d0.html","f54f3397625628343fbe0b5cda37dce3"],["/post/f7c24785.html","026a560a15c4019e75e3529fb8c36663"],["/sw-register.js","0a687d08fbbeece22e93360cecffe0f9"],["/tags/Flask/index.html","9af10f026daaebaebe2260e9d29c89e5"],["/tags/Hexo/index.html","d9dae41f2ccd0e32a5daa158749e303b"],["/tags/MySQL/index.html","219baae2a553952e8f60d23096980b2b"],["/tags/PEMFC/index.html","2c515f59c472011c61884b535562b89b"],["/tags/index.html","0b4dc5e3974ce08d5190ebf3a5fd5e36"],["/tags/python/index.html","4b9e79ef849a184e33a7882dc617e60a"],["/tags/喷涂/index.html","c0184e144dba18de01263bcc4d3517f4"],["/tags/大学/index.html","5572c2222249ae87306efca4c3141d1e"],["/tags/爬虫/index.html","9369d53434b291d3c6159f1a0bb3c8ad"],["/tags/研究方法与论文/index.html","1379b6b375c5959e6fdcb0d36630b4ab"],["/tags/虚幻4/index.html","1e01b6e28aa8a465e3424667b50ff3c6"]];
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
