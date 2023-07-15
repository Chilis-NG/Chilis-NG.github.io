/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3813b95692e02649ce24deebcb0a5ff9"],["/archives/2022/10/index.html","eda122c96aaba0fc2b0b115d1b1dd193"],["/archives/2022/11/index.html","2e8d3118bc168d8706dee7a9690705eb"],["/archives/2022/12/index.html","fc6a3f3d698c61083798e71a4b49c2be"],["/archives/2022/index.html","48411f6f3cfeddc453f46780d2ab3143"],["/archives/2023/03/index.html","c58a716f9acb193100df1ec66fdcdbcb"],["/archives/2023/04/index.html","550b5715c4ae51a4b2a5bc6886aa9b3a"],["/archives/2023/05/index.html","5e8ab2e8b5f80d2f23612589f7e5efc0"],["/archives/2023/06/index.html","ac4f32d4528492ce61c8b4f2291f37be"],["/archives/2023/07/index.html","88f8b892e72942c5bedfe2c64d53e99a"],["/archives/2023/index.html","9978eeee9de2b55c1d7e1c6f82609132"],["/archives/2023/page/2/index.html","99ba47a3bb0b863e1f552cc8fbb28180"],["/archives/index.html","e0109814b573f52b8770c001fe6b6de2"],["/archives/page/2/index.html","327e14517a9f3b3938a5988504e280c2"],["/categories/Flask学习之旅/index.html","1db57815bf7ac6843a4c27f2e1c24093"],["/categories/Flask的搭建之旅/index.html","31ae84fb3abf6842bc7c7c0947e25c1f"],["/categories/GAMES/Minecraft/index.html","d8bcf13083ac62b5bd8af0755426aec6"],["/categories/GAMES/index.html","1618245d87c9ff321ebc8c4b2f77ed50"],["/categories/Hexo的搭建之旅/index.html","c5873a497e9f0f5dd4bf28e5ef26027c"],["/categories/index.html","f38f7913868167aa4cbef8cfda70908d"],["/categories/原理探析/index.html","5be56904dd9ce72c72dc570256f38497"],["/categories/原理探析/电化学/index.html","c0ebb69e330b5af334eb279b12bea254"],["/categories/大学大不了自学/index.html","5e2d86eced5f41f7b4b5ddd68d9c2139"],["/categories/氢电池研究小组/index.html","7e2a641637de575aaa6aa6f3d794f6ef"],["/categories/氢电池研究小组/实验操作/index.html","482da3eaae98779262e68f84be78555a"],["/categories/氢电池研究小组/文献观察/index.html","099225c31911879fcaba5f5c9703cee7"],["/categories/虚幻4：从入门到入坟/index.html","b1ff581719f465c39e88bdfdadc6140c"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","da27bdf502f3e3c2dfa9bf4244675ca8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","1a91c6f7bf401f7676077e70cec1d2e0"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","3c449eab5eb6332cf2083b801620d26f"],["/page/2/index.html","88c430c861accd6b4db0cd179dfbd79f"],["/post/10d5b386.html","4967a258898b1c1a986d13fb4485b159"],["/post/13313.html","5205691a080bf1f037bc09ba2dd0d07a"],["/post/19686.html","622ff8a75f22176f0811351562d5932c"],["/post/20ac2f54.html","077a8983cc186a16036232e0cd74232f"],["/post/2197cb5b.html","349b83df090d2ba9bf43ce892de2884e"],["/post/23f343f1.html","ac0c5c7773e8956b4071034e31b95b6c"],["/post/57ee7c1d.html","3dc1430bc9d67671f0983a47bbd3b0db"],["/post/6a7616d7.html","6a961b412be5a28228f6b400bbd3d925"],["/post/a05cdb7b.html","30776668fdd5fa4c4d26b4473a5d3773"],["/post/cbd4ddb9.html","3d1627a735e189db93632eae57dcc006"],["/post/d5fd331f.html","a752f4d3db35925d1d919225004b1a4b"],["/post/f1a6d443.html","2005c5173c899cd85de34de8b89a1206"],["/post/f32487d0.html","dfa4298b84737ae66c4ab233a9dcbe5a"],["/post/f7c24785.html","23b3e40932a09675465d4fe936183b03"],["/post/fd77207e.html","a2ef80e2f45165e7775644a367d4f8dc"],["/share/index.html","ad955f922c988f2b383980b26cac64ee"],["/sw-register.js","84bf8335484afcaf3253d21f18f4441f"],["/tags/Flask/index.html","12a37c73704dad56b6a9ff23126d0caf"],["/tags/Hexo/index.html","60696d34fb8e2b57e3d3ba6b5bae5596"],["/tags/Minecraft/index.html","4c5b6ee4de2d0c3fd18729178a747976"],["/tags/PEMFC/index.html","c254b13fe32a3966bffa9e1e04b2b1c9"],["/tags/index.html","9e761e5aac823d07a1df0e46dd81fd54"],["/tags/大学/index.html","3ec8eb6e67ae1a718ebaf4a0911f3062"],["/tags/文献汇报/index.html","97bb5babafd756cb60182431a7ba3c31"],["/tags/电化学/index.html","e7a3ae572b0b4415d52978af0e9d4463"],["/tags/虚幻4/index.html","954a624ed3991bd6fb03ccc4f746975a"]];
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
