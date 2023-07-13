/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7e4a2ba4c16f9abeb62f01377e130e76"],["/archives/2022/10/index.html","9536939193cceba1550c629490788e62"],["/archives/2022/11/index.html","f50689f30ac7ff8152fb15068bd86c4d"],["/archives/2022/index.html","da54980558535fc0d6f57783784f74e2"],["/archives/2023/03/index.html","2d5ac7d33409f9df3b5df082e59c41b5"],["/archives/2023/04/index.html","49180ca70d5aab91cf751308b40d0ffc"],["/archives/2023/05/index.html","9f5e1314554cb1639808fa131cd77498"],["/archives/2023/06/index.html","1d6b5d51ec598cfb6c1167cf2839e89e"],["/archives/2023/07/index.html","6fcfbf2980f577ff0f7e3a1f506822d1"],["/archives/2023/index.html","b59f25f84fd325c2896aa3ffd3049376"],["/archives/2023/page/2/index.html","e92edfc31d1c2e85db6d40441402a581"],["/archives/index.html","42b1aad0f273d6f11004f3ba7db71c5c"],["/archives/page/2/index.html","ee27412e2787c83763225e6346e56205"],["/categories/Flask的搭建之旅/index.html","f90bc4e52e6b36f5cc10699742d5344d"],["/categories/GAMES/Minecraft/index.html","28a41427bf9307ee3908616c99e64c34"],["/categories/GAMES/index.html","ae5a15f8cdf398397809d86bd0ebe143"],["/categories/Hexo的搭建之旅/index.html","8c67db5f48e6ae2bcb4ad02678ea57df"],["/categories/index.html","b97be9a9cfea9d3cfc7d68a593dd137f"],["/categories/原理探析/index.html","9cce8cca5b6553dc965e41786df9c0fa"],["/categories/原理探析/电化学/index.html","5e25ce1ba51a47a208caff7358b95047"],["/categories/大学大不了自学/index.html","6ee5cbe8885f6a88e260fa98eeda31ba"],["/categories/氢电池研究小组/index.html","95c9fbba6a24f88ce7606a9802952f2c"],["/categories/氢电池研究小组/实验操作/index.html","58d8d570a33bb674a56a2a486e3b0ebb"],["/categories/氢电池研究小组/文献观察/index.html","dbf7f383f68c295d091bdd5644af7cf9"],["/categories/虚幻4：从入门到入坟/index.html","db305a8b331f153188fade3b85617aeb"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ec2fc2c9561148ab8b973a4c489093dc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","fcadcb884d401757329902485554b328"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","5ef9584a3a65dbbc4b52d88b9f157b50"],["/page/2/index.html","3f21f5bad37d0f297c119753a7e52132"],["/post/13313.html","b7deece6cf866937788e36322398f971"],["/post/19686.html","47cf54a8595eeb4733a084444db50d42"],["/post/20ac2f54.html","563f44033b43b0280a91645e1e5d7532"],["/post/2197cb5b.html","027ff7a7ad9a36c593040b1ea6efd954"],["/post/23f343f1.html","f54609258270604f2052ad4fe1f49709"],["/post/57ee7c1d.html","831b160e8845b5b139a7a248a4639067"],["/post/6a7616d7.html","ebeea082cea7c29fd9d5ba3ffa3a51e6"],["/post/a05cdb7b.html","5db89faa844cd414535cf426e09c2fec"],["/post/cbd4ddb9.html","73ed4a94a4566ab989396f34eae4a336"],["/post/d5fd331f.html","29475b411b0c2253732ceada88177c35"],["/post/dce9aed1.html","b09fb2dad318d1bcd733dcbbb7cb5b79"],["/post/f1a6d443.html","01e089da31afcf1ea290fe255629476c"],["/post/f32487d0.html","21645cebb5a013fd3d0b434167a97588"],["/post/f7c24785.html","b9ead51440d986f5224dbb9118188c59"],["/post/fd77207e.html","148bf27173a44478384cd1cc7c5c8fbf"],["/share/index.html","13f54d98ed499e08459d0d543d79f84b"],["/sw-register.js","bde72937d46d9c637db25950a317f948"],["/tags/Flask/index.html","dad1588a6433881363481b46e1f43d5b"],["/tags/Hexo/index.html","5440ab44fe06db39eb5f7de2c621a7b2"],["/tags/Minecraft/index.html","38b46889e8e79ab541238f07d5cfe6fc"],["/tags/PEMFC/index.html","28895e69d07c36153afc8f28fd656c8d"],["/tags/index.html","70ae1b27197a8e917663b3ab1eea91a1"],["/tags/大学/index.html","7748b93c6425c937a691cd6cb3cba536"],["/tags/文献汇报/index.html","ce8850885f55194b83b24c9d1b716421"],["/tags/电化学/index.html","8aa2e0c4562431867b4f6be1df7767e0"],["/tags/虚幻4/index.html","400ab153ea6b7b0a3d9616b41e1d6e5e"]];
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
