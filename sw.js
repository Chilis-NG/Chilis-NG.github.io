/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","2a8177e6ec9c4e102bb3f834886d34d6"],["/about/index.html","0c76b7cd0069b749d99698c10ee30f7e"],["/archives/2022/10/index.html","fda0594729bb4225acf45e2bb731a39c"],["/archives/2022/11/index.html","243b09f81fe2d71675e19a18b1a030fa"],["/archives/2022/index.html","76e137f490508c47ecb4a4b630054669"],["/archives/2023/03/index.html","713761f203a67623696e977122a6e569"],["/archives/2023/04/index.html","6b66d65ec4e96ac5632010709c73aae7"],["/archives/2023/05/index.html","b31f3d4068ee010165ec3850d58e7a73"],["/archives/2023/index.html","80e6bcf735394f395b0789ac9fad252a"],["/archives/index.html","f9831ddf1380f0f3ac6a7e74454fc07d"],["/archives/page/2/index.html","b7c5c576178813bef58e2b308868e373"],["/categories/Flask的搭建之旅/index.html","baccb029a261841659d55161000b3830"],["/categories/Hexo的搭建之旅/index.html","2ad0aa395b64c1ebceae9e19c73928c0"],["/categories/MySQL/index.html","8ebdd87c7a6113f27ff77878f197fc64"],["/categories/Python-Study/index.html","b66577dec5e92860945ca944f9a204ef"],["/categories/index.html","c4e933612440d5324a5fde5594a3e2f8"],["/categories/大学大不了自学/PEMFC/index.html","0037c482820871c2c21fe85d3e8cf291"],["/categories/大学大不了自学/index.html","7468e3a46f35060460966e520f16e8be"],["/categories/科学研究方法/index.html","26c16d62bf55dcc261880cecbd2421e0"],["/categories/虚幻4：从入门到入坟/index.html","629fd41673c602eb4a13a55c9a1a6cbe"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","f7ba5323480209d4eb7779a106cfdce7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","3b8ada46b684b863391a64e9dd5fe5a9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","9c3cb6314d3ca2b6511974da0db78c8b"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","bf56ac3ce12be1bf94cd60d4a304a830"],["/page/2/index.html","091554713e61daf119cb0c9bda71cd3e"],["/post/13313.html","a2efd55b671a6e0ef2e14c787902d626"],["/post/19686.html","96f61a39bf0b3c6efdabf0175e9d775c"],["/post/20ac2f54.html","46cff6dbbca89b4365af113212b34b90"],["/post/2db5a85a.html","8e4ac1e653d8453f58d413405da4eec5"],["/post/57ee7c1d.html","870736f2d5eef305ced0cf33cfb54e8d"],["/post/6a7616d7.html","c5602b6b369600df7dd8c06f9c593221"],["/post/750e0958.html","bbe785352fc8ce8f35f92d8ec90eaf3e"],["/post/d5fd331f.html","6927c2f2e20fd1c45aa73484dd183c58"],["/post/dce9aed1.html","a1cc42e5c03987441dedda7b9673f5ea"],["/post/f1a6d443.html","83e8003ebdf7f3c48e52613f28fd0205"],["/post/f32487d0.html","772370a6975bcd00fd6d9cbc09883af5"],["/post/f7c24785.html","95b4686513dda8cb5ce3d18d9406be98"],["/sw-register.js","309dea31cad418e4e0f63447300c4d2f"],["/tags/Flask/index.html","90fa52e279872d1e46880af014b42c6a"],["/tags/Hexo/index.html","17da944f144a8999e7475baa829ef74e"],["/tags/MySQL/index.html","61e73388e36d887f26bdf226b5b60488"],["/tags/PEMFC/index.html","d08fb432d89675970ebeeca5f208680f"],["/tags/index.html","2db1cab5648a7d341989a93996a48251"],["/tags/python/index.html","ef6a189d3353f0f510382209ab02aa3a"],["/tags/喷涂/index.html","39fe9394f8ce257590034c4cfdc95ae6"],["/tags/大学/index.html","4fa98ff3abd42b5b3b25601dd8c18b1e"],["/tags/爬虫/index.html","82f6d6f7b034107e10f2945a2de7042f"],["/tags/研究方法与论文/index.html","2f7c2301d166c00996d7ea9af4a37c47"],["/tags/虚幻4/index.html","9a8dd64d9928a8332a3556e2b75b8078"]];
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
