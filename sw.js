/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","9f0322c04ebf18d82acf129650e0fb11"],["/about/index.html","a67b0b3fd86cdc3d5cb4766703c8bfe8"],["/archives/2022/10/index.html","d3cee00611a8c7f831a8d1744f471caf"],["/archives/2022/11/index.html","e79a110bd13a3b88defcd443da5993fa"],["/archives/2022/index.html","c350ebaf078533ddcca1f5b91e96931c"],["/archives/2023/03/index.html","f467eef14726eecaef6a84c0499f4d28"],["/archives/2023/04/index.html","a4038466f2258b5f8862bbad00e684d1"],["/archives/2023/05/index.html","0a473cb26a2b660d44db52deb57fe9bf"],["/archives/2023/06/index.html","bba872ed8b0840c0daecee49874e5c98"],["/archives/2023/index.html","833442d27dcd53a3023972d079633a22"],["/archives/2023/page/2/index.html","a4edeb499c4a15fd317f908d1acbd0bb"],["/archives/index.html","515e5e90de4e15dda27db6a9cc8e6fe8"],["/archives/page/2/index.html","7f2ab3f3871a688f30173a4965841f9d"],["/categories/Flask的搭建之旅/index.html","ef1cc8ee7a8af451a94e0f249a581625"],["/categories/Hexo的搭建之旅/index.html","a92ba9725a2c27f37052090221115ece"],["/categories/MySQL/index.html","c36c4293b7ad16e30d108f29b84169fa"],["/categories/Python-Study/index.html","edab4bd2e038f144d2e4e2b292a40307"],["/categories/index.html","b289178db77182775c089cad937db362"],["/categories/大学大不了自学/PEMFC/index.html","edce060b8a0ba65c1398b8b85a60eae7"],["/categories/大学大不了自学/index.html","a3f099b546cdaceb4255cf101f18345d"],["/categories/科学研究方法/index.html","42c024969dcb506909b509f195072689"],["/categories/虚幻4：从入门到入坟/index.html","85a06b7088f1bb4ba2f47b6bb59a624c"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","9b55c0b1ae2fcfa7cc085e32076834f4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","07e01775ffe7d342e11c936be5b05c00"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","4538b6d7466494b5faeedadb730a4bab"],["/page/2/index.html","e72350b940aeb3a53b954d9b4e24a3b9"],["/post/13313.html","15716e6f94a988c6ace210a9bc16c7e6"],["/post/19686.html","0b32c731d6180e156778a845fdd599e0"],["/post/20ac2f54.html","02f221a3babe3fb7346c07e79b2c099b"],["/post/23f343f1.html","0f7e383645b55b9f8b25effe0bee1f5d"],["/post/2db5a85a.html","eb2a545b8c5268360e46eb0ea413638f"],["/post/57ee7c1d.html","4564003cf71a5b8530a97d6afaad210c"],["/post/6a7616d7.html","07aaafc9e1ad723f29525960d55740b9"],["/post/750e0958.html","6ffd6e782a484f53205dd158dcba29a0"],["/post/947cee61.html","98b493e3d619c642a77f58f74f5f03c8"],["/post/d5fd331f.html","830835c96f35d26aff121e1acc3725ba"],["/post/dce9aed1.html","9934f0e55e9a711896fd920a9ba12ac1"],["/post/f1a6d443.html","feb357b0535fa6e45c122a409b8eeae7"],["/post/f32487d0.html","f9639ebff865eb6e6daa8fb27e6c3377"],["/post/f7c24785.html","13d66ac169e1c55771e51ff7599fa85a"],["/post/fd77207e.html","d1e633c643d94b6c49a5616ab1044b2f"],["/sw-register.js","84b838a12bca8aeaa5ac4299db0976f8"],["/tags/Flask/index.html","778b5e4d24cb96f9f8efd505235d23ea"],["/tags/Hexo/index.html","0330a4d85609017f0f3b6ec2c97702ed"],["/tags/MySQL/index.html","25c3f4f1bee921c415f1058c058b1a3b"],["/tags/PEMFC/index.html","d310c35e4412e3fb6a0f9bafa342a3f5"],["/tags/index.html","34b125cb4c4918e563597499a753204d"],["/tags/python/index.html","fea1ce91d57d11c0b3ad1420af49fe36"],["/tags/喷涂/index.html","b9bc022fa66da6ddd1a0973e87456b16"],["/tags/大学/index.html","5f787fbacfea90a88fa49b471cc460fd"],["/tags/爬虫/index.html","bab3b4654ba938fc100be52098790c2e"],["/tags/研究方法与论文/index.html","fc00c2e09c7aa3e01d71ff2186ae3f8d"],["/tags/虚幻4/index.html","9d796cafdce881ada98caf60e511dea8"]];
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
