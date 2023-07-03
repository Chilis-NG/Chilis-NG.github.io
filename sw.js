/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","bee3497daec768dfdb777c02cac5ea20"],["/about/index.html","0db1864e6be5426234288a6f0b08a630"],["/archives/2022/10/index.html","4f9ee4149691f86acf63692939cb755e"],["/archives/2022/11/index.html","e867719ed441a643aea374b788025895"],["/archives/2022/index.html","85c85b89487f92651ea5463d6310fc17"],["/archives/2023/03/index.html","489e443c025cc84e78e457b0973aaeb3"],["/archives/2023/04/index.html","1b8e34741592032f217f12eb968d4897"],["/archives/2023/05/index.html","a435e4c89e0478d257a297bb2bae15e6"],["/archives/2023/06/index.html","b6cad36acc28041e7acb3dc43a9f8d62"],["/archives/2023/index.html","6a7423c8532b8205c0100d273aca76bf"],["/archives/2023/page/2/index.html","8fc7d28416bd85fc1c8f64cd6b2fa684"],["/archives/index.html","328eb96c51d3750ce92a79158ada0097"],["/archives/page/2/index.html","24771c1913846c1110205e673403b907"],["/categories/Flask的搭建之旅/index.html","2e4c767e5d8c82794e507c049e68ea03"],["/categories/Hexo的搭建之旅/index.html","0c37df6e1deb1ab8603b0c46d606351f"],["/categories/MySQL/index.html","7e92f7a1cb8c7f655b9cac9e6ae8fad8"],["/categories/Python-Study/index.html","3387ca7cb8a48783aafdce9f501137bf"],["/categories/index.html","df8e638d13a599426afd4e34c2bd3dc8"],["/categories/大学大不了自学/PEMFC/index.html","b566b31339305b8e53c1d0b8627e02df"],["/categories/大学大不了自学/index.html","8ad827024ea43e883513e2dc2894ad42"],["/categories/科学研究方法/index.html","6132049af366816d78a4b0c6dbbe6a64"],["/categories/虚幻4：从入门到入坟/index.html","315905e7056de8647c88a2327928a122"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","d0f4a2f11bdd3d1c4a55d200c1deb987"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","fec428d3034b763eb44d3ede8e2b9efd"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","d4ae1ab199a37773f03999daa8df2aab"],["/page/2/index.html","481013307105e229f51d4b48afb9d668"],["/post/13313.html","f88bbd9b41ba2a48753447fc5d703760"],["/post/19686.html","6da196dcedfc8226c681e57eff51102f"],["/post/20ac2f54.html","650ae7a25defd6682dfd89437971794b"],["/post/23f343f1.html","ab19d0cf3b867b6e055ba43e1c62d851"],["/post/2db5a85a.html","fdbd3258bae21c140b59c168f90012f4"],["/post/57ee7c1d.html","79cbb6e771134e561ce10451d92a6f1d"],["/post/6a7616d7.html","88357bd8d6542b6c2384d10122baa622"],["/post/750e0958.html","07597e93380d50fbea90bd64e00eb5ab"],["/post/947cee61.html","15144ceb884f2195ac5e065ee6442123"],["/post/d5fd331f.html","bd80baff17f250821005abc9751ae325"],["/post/dce9aed1.html","575c5468cbe772ed81905d0e9f63b277"],["/post/f1a6d443.html","bd5b4767d10cc81e8f1320f92b2fbdfa"],["/post/f32487d0.html","74ac86792ed5f7485dc2cb0d38090ca8"],["/post/f7c24785.html","2091bb10f66b43a786dc9d87b6e9a8c7"],["/post/fd77207e.html","2b8b2abe6dc1ef65c20ab52888434dd2"],["/sw-register.js","a47426ac2a47abca904fbc479d377977"],["/tags/Flask/index.html","85373da75f88da7b23ffd23d66b3a197"],["/tags/Hexo/index.html","ceb9b460407eee726285da50c346e77c"],["/tags/MySQL/index.html","1112e3d5c3aec88ced68f1971527d0ee"],["/tags/PEMFC/index.html","bff04ab87bb903380e4871bba694d08e"],["/tags/index.html","15b2d2a11f5a552e731bdd691332c10a"],["/tags/python/index.html","890d5b8a4c7a75472008abb9f158f5d1"],["/tags/喷涂/index.html","1a1092f6b8fb5fc6da8c63b8dcdffc26"],["/tags/大学/index.html","9bd1cd31020a99c5b9dca06bc2c29ddc"],["/tags/爬虫/index.html","c83297b5715f6b204e0670a7ff350acf"],["/tags/研究方法与论文/index.html","55d0a62754aa5fe099f5dd96f2066568"],["/tags/虚幻4/index.html","6fdd9fb3a494aee4a450f98eb7cad068"]];
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
