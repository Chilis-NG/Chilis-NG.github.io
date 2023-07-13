/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8481e054c4c74907c8ad5d718ca24fe9"],["/archives/2022/10/index.html","2662b2515afff704cef8b4df290820d4"],["/archives/2022/11/index.html","80e473db7b28345ee0da965c35742e61"],["/archives/2022/index.html","9668b25254cfad329cac306baf9e639e"],["/archives/2023/03/index.html","27597b3cd92a60cf8aeefda6aebe7199"],["/archives/2023/04/index.html","09bf1d04b05cdcacd36e140bbe2aa48c"],["/archives/2023/05/index.html","bdc052c54a7f37097f1974bd06b0ce52"],["/archives/2023/06/index.html","3f99bdf4b7e8aea4e9c86aaeb4a02910"],["/archives/2023/07/index.html","92ce60fcbd06c54fc9e7cb3b5a26a00e"],["/archives/2023/index.html","1acb8b0084d216c48ee8be3bdb8007c3"],["/archives/2023/page/2/index.html","36c00891a0691f921c02f214d5ab907c"],["/archives/index.html","236354d5f9e0aace1ffb60174e1bcc8a"],["/archives/page/2/index.html","58f797fd28498eda3672ab93eb15ea78"],["/categories/Flask的搭建之旅/index.html","28d35a64a9357ba5843550b82519cf63"],["/categories/GAMES/Minecraft/index.html","eabfc81d5b315ef4af888bad17212cf6"],["/categories/GAMES/index.html","38ac9c4d51ee65a4e818abb9104a0a19"],["/categories/Hexo的搭建之旅/index.html","99f9408bc45cf393d435e934cd4ca0ca"],["/categories/Python-Study/index.html","34bbcba06f9f57abe08e90104ef06dde"],["/categories/index.html","f82266e2bd104d0668350b484e8275f9"],["/categories/原理探析/index.html","4809b60a9aeb742db049000d67948b4b"],["/categories/原理探析/电化学/index.html","1716835998a676d8b4e3f6d587b8e900"],["/categories/大学大不了自学/index.html","291ffac316b7ebcec92f358016c88faa"],["/categories/氢电池研究小组/index.html","3585b5c1116023c60a12f84740aa0575"],["/categories/氢电池研究小组/实验操作/index.html","46ba12bb01e23173c89b6e82fc794f2f"],["/categories/氢电池研究小组/文献观察/index.html","259b73f3f838710e8685383651d896c7"],["/categories/虚幻4：从入门到入坟/index.html","ba55b531d2dc74515324aa2b283c2400"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","bc411d8adf84003edccb466222d95670"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","30f6f36986a800c0f3ac77259dd9b444"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","d126dbd3ebbc53156b0c8f26c54a9333"],["/page/2/index.html","7889ae406734cdd9df6ba04797b55383"],["/post/13313.html","128b6144cb3de6229e98c0583cddc086"],["/post/19686.html","b38b30dded43887f57cdd5575389458d"],["/post/20ac2f54.html","aa81100f3447cb69755eb8b507c68698"],["/post/2197cb5b.html","f75675898f58be8137344c8e57c70fd4"],["/post/23f343f1.html","117c219cfdfabfccc98d27baba43a1d8"],["/post/57ee7c1d.html","cf46e26711c0fad6cab65353fd4796b4"],["/post/6a7616d7.html","2fd5489fcf285c27965560250e521ba3"],["/post/a05cdb7b.html","b5fa8f28eac6e9345786fa2228d0cc81"],["/post/cbd4ddb9.html","9c7a6cf422b0ebc16c1bbef7a4e612ae"],["/post/d5fd331f.html","19246cdb0be91ca37e5d2218d748bee0"],["/post/dce9aed1.html","ae166b7b0d9f5544aab8f108879df607"],["/post/f1a6d443.html","cb98c7f5904df7e8bb49b2285215fda4"],["/post/f32487d0.html","8762fbeed81a250791a2e172dc9337d6"],["/post/f7c24785.html","204e1c471c454c7dd99e0a01a560e9aa"],["/post/fd77207e.html","5a3cc8e7e9898ec0573fac65083f89ca"],["/share/index.html","2b87da4cdb5ca19e0f6585b1e1a0fed6"],["/sw-register.js","099a1ded472969331afec28b1c144b90"],["/tags/Flask/index.html","ec992758b3fad5b5a3fe26ba2ca60dd9"],["/tags/Hexo/index.html","3a8565cff62338fcac8ff405999df433"],["/tags/Minecraft/index.html","3799f6363446241fd7bda4e9ba055771"],["/tags/PEMFC/index.html","792dd31b72d4a502673f858054f3554d"],["/tags/index.html","7cb7bcba86289ed192643b438a4a3b44"],["/tags/python/index.html","b92af72912fabc374f9cc3e43ba65b2a"],["/tags/大学/index.html","6af5290a5464d73979c63add4020bb94"],["/tags/文献汇报/index.html","177d8d350b9ef9c2f380234d0cbbff09"],["/tags/爬虫/index.html","c3a014028ab4b96dcaaa9fb7c1d4dac5"],["/tags/电化学/index.html","a17b689b59fb7673958d3a5785370a7f"],["/tags/虚幻4/index.html","622675a16330bf2db8fc363da9f2593a"]];
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
