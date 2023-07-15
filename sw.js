/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bfe1e34cd09df23299dacb0612b4697d"],["/archives/2022/10/index.html","2ffef8a73559157662571e22573ed4b7"],["/archives/2022/11/index.html","5d0e48c31c9e3ceba90d28c9c896091b"],["/archives/2022/12/index.html","2bf392be3e3ed58c8b5858b00189a54c"],["/archives/2022/index.html","46581552dac94e6f456f8bbc2c302b64"],["/archives/2023/03/index.html","960b22f605ce9491b3ff5b5f7e1ee042"],["/archives/2023/04/index.html","c6e0c649506b4a508a4d13563d86d4c5"],["/archives/2023/05/index.html","c72eea524314383b94bbad5bd4d47d01"],["/archives/2023/06/index.html","c3b69103550c7a01f04fec218eb4dc00"],["/archives/2023/07/index.html","6c569488026cec7370889f9ef9ac453a"],["/archives/2023/index.html","529f394f8b14c99399ed78034c0c6041"],["/archives/2023/page/2/index.html","3b32f6bd3186d8bf0c36c409cc059c40"],["/archives/index.html","37db8ebd6cad90568d526e7af79c1a87"],["/archives/page/2/index.html","a551d0889eb72ded34c4747ccdc1de06"],["/categories/Flask学习之旅/index.html","9cee30bf11ec734a2a8964caa3d0ef2d"],["/categories/Flask的搭建之旅/index.html","720f782f329fce60d41260ad90b53bf5"],["/categories/GAMES/Minecraft/index.html","b60922506ef840f7ce978ae083783752"],["/categories/GAMES/index.html","72c92ac2ed5ac117a0938162d8694d35"],["/categories/Hexo的搭建之旅/index.html","3c16cca0db272b0f6a02af4d8c485bae"],["/categories/index.html","7f1c3294be6af28284d23c79dfafb4ea"],["/categories/原理探析/index.html","ddbaab723721ba99f646485f82ce3d2f"],["/categories/原理探析/电化学/index.html","2f314b3cc41c8b90e9516be758cb15b6"],["/categories/大学大不了自学/index.html","8be20d7911987e35d72a769e76d59470"],["/categories/氢电池研究小组/index.html","b26232a7a9ca054a4d2becf5e05a39c5"],["/categories/氢电池研究小组/实验操作/index.html","43dcd7f4ceaca4a3bce78e19026f1cd4"],["/categories/氢电池研究小组/文献观察/index.html","4f99509a7e0e1fe37d993885619b0c12"],["/categories/虚幻4：从入门到入坟/index.html","f3b88c5bda634fbfe9be4a7aa3a42eaf"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","727ba62bab81a68b5d4b61e156cf4639"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","e6ff2e0d6c5fb97ab44c72b94ab1d309"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","17ed04134ee7930dfd43d860e0649f05"],["/page/2/index.html","cae2be729278c88fc76d70fc0ff04771"],["/post/10d5b386.html","cabac1bdcf779ad529c38eba573acff0"],["/post/13313.html","f604c741b89a07341c31ea0e14b20d70"],["/post/19686.html","734fffe2344f1420436f28ac2ee38e84"],["/post/20ac2f54.html","7014a97ab7c50147b660da15fa0be74f"],["/post/2197cb5b.html","90768eb85ea3218343e21d2adedbc089"],["/post/23f343f1.html","6213fa383617318bf1c535e484cb4e04"],["/post/57ee7c1d.html","5a9da83aadc58cd86c892328d6924e53"],["/post/6a7616d7.html","3881d72e6079420e096c5ac484c38a55"],["/post/a05cdb7b.html","d62faa4a094cc573728b1a6c8d6768dc"],["/post/cbd4ddb9.html","36fd72906dc59abf0282f38954927fa7"],["/post/d5fd331f.html","58e99a5bae91f01084f7640ace0ab10a"],["/post/f1a6d443.html","264af3460c05f29c30119d9c4a62c5bb"],["/post/f32487d0.html","67074366b8dbc8408b5a2625da43ab20"],["/post/f7c24785.html","3ddb0c9ca8734ea69744431bf43f4061"],["/post/fd77207e.html","8db1a4ff0c079a9cc041518342282521"],["/share/index.html","f866c9e97fc1b6659b85b8e4f62b4ab4"],["/sw-register.js","fdc5d9df840c1cd83e038102b1d2ee06"],["/tags/Flask/index.html","38818461013a31ade634e61f535c5dd6"],["/tags/Hexo/index.html","77fd3963997a9b26ae2f0b46507ac50b"],["/tags/Minecraft/index.html","ee242cd26fd7f83a2b7df3a7ccd1e934"],["/tags/PEMFC/index.html","5265444913eec93c8cc3b015135be61a"],["/tags/index.html","3bdee2ec7b884508d7251e88d44ae0e2"],["/tags/大学/index.html","8a0e4fbb04f71afc549c365a7be807c2"],["/tags/文献汇报/index.html","046d4e5ca56e75ed2d68dc67511afbc4"],["/tags/电化学/index.html","76e1ffa324aaf20eca082377c26128a7"],["/tags/虚幻4/index.html","c200f88331da569e76a82a19b101c74b"]];
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
