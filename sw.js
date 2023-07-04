/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","feaffaa1316089558c66fb134ab343dc"],["/about/index.html","fab44774866992b1f8eb23d35477d1e2"],["/archives/2022/10/index.html","0142764e3b5f3cae9e2e93b243e21401"],["/archives/2022/11/index.html","b80bdad2de02a4e5dc76e9cff62bd75c"],["/archives/2022/index.html","2cac37cc699717b6bbb365690b7073dc"],["/archives/2023/03/index.html","b5d4908812bbef677d3c20eff61f5458"],["/archives/2023/04/index.html","546c1339820db7b080666428d2d4282f"],["/archives/2023/05/index.html","65235d8c2a63b86c30df9d74a39e1cb9"],["/archives/2023/06/index.html","4d9a61f5fa49a3ae1b2dc20e7bc0ae94"],["/archives/2023/07/index.html","c827f1cf7a47b669dbf0d4a92fdc05cc"],["/archives/2023/index.html","ca0f8e24f542dafd5e94156defd8532e"],["/archives/2023/page/2/index.html","15af7b9122b0732af70eb3a7edb65120"],["/archives/index.html","90de7a7f910ea5521984cdff5fe9793f"],["/archives/page/2/index.html","6e7b45798952d4eb0faa10539caa7763"],["/categories/Flask的搭建之旅/index.html","9043aa19e220eca7355a6ad1f3749087"],["/categories/GAMES/Minecraft/index.html","c8203bf988730bf815a8594025e26f95"],["/categories/GAMES/index.html","eb8e1a580e7d506c7c886daa6efee625"],["/categories/Hexo的搭建之旅/index.html","d014952beb482041999419187e009f72"],["/categories/MySQL/index.html","0073eb51b5c0c0548a92f16a6cd5e806"],["/categories/Python-Study/index.html","aca5f88a19f49aa1622145ef2b1d006c"],["/categories/index.html","a7c6092f08f272607e10714aa5c27e68"],["/categories/大学大不了自学/PEMFC/index.html","4d7cbd6413003c7d6a840edaff45c3fe"],["/categories/大学大不了自学/index.html","c7a63eac3c3c6f322c82f0ce7816077f"],["/categories/虚幻4：从入门到入坟/index.html","c5e78bcaa05b89937a59978d2cc01e14"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","d39b5b87fd011449210170d2217cb2d9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","e207ea2c74fd9ce898a94257a6d0f7b8"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","f629f4ddd8a61b55f5e0af1a83ea09bc"],["/page/2/index.html","0d200f29da911e064619dd7bc37301f6"],["/post/13313.html","f190d81479519941c369abf0f632e4d1"],["/post/19686.html","b10f048639c589b354ccdb93b25ecb82"],["/post/20ac2f54.html","d71621c3d7eb1473c431e71304df50ae"],["/post/23f343f1.html","898608a9697b8305ecaa7cb45f710fb4"],["/post/57ee7c1d.html","97156ce5aff7709d1c73e4309d0fbefb"],["/post/6a7616d7.html","005035f3a17f9ad98b3599aaf9c0fd57"],["/post/750e0958.html","bcde4ddb600da51de596e34bd1d6f39f"],["/post/a05cdb7b.html","3cf7257cbddee09124d449c32d13a66b"],["/post/d5fd331f.html","e2f084d342a4dee6d08dd3b57480768e"],["/post/dce9aed1.html","b495d79bab889221ad3d5b80839e70d0"],["/post/f1a6d443.html","bdeb20397db847285560ceca6ba25aab"],["/post/f32487d0.html","e849befc1f4dd4cebad1d70396f2e3fb"],["/post/f7c24785.html","50ecee1e3ff08c96fdcbc8ffecf26a78"],["/post/fd77207e.html","b9da3040fc8afe22cc366c66656a4d53"],["/sw-register.js","17bd89105b7ea76911a3a9aab8f095f7"],["/tags/Flask/index.html","97466ecd1e5280e2c2f1ca0380bca918"],["/tags/Hexo/index.html","11ccaef51fb211f63f6fae6faa10ef34"],["/tags/Minecraft/index.html","9835a1e7c59cf027c8d7ad7074ba646c"],["/tags/MySQL/index.html","41f4058755df52ac0d051b78703b913e"],["/tags/PEMFC/index.html","8a4b697ffd0c3ec4ebf0b0944c53287e"],["/tags/index.html","abf89d3278da22c8ad1f596797f23424"],["/tags/python/index.html","790a7ca848e5ff9106ceb48f71e8fee1"],["/tags/喷涂/index.html","fab35aa1e785f38f3e7e72ccf2a1f81c"],["/tags/大学/index.html","ab955407346148e8a871273571ac7c55"],["/tags/爬虫/index.html","3608c34cd9ed46abe7f4b83679342502"],["/tags/虚幻4/index.html","a00e8c1d1ad4f0f3066b120f228fa19d"]];
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
