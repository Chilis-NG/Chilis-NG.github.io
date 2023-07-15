/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","29e645d7f47902e12b870af62f6d1703"],["/archives/2022/10/index.html","127d28a49f92cfa64bb17401cbe92c51"],["/archives/2022/11/index.html","7b150504e2ffb9bc983419826c6de0df"],["/archives/2022/12/index.html","5f83a727fb8b8c257542391e296159c2"],["/archives/2022/index.html","375d6591aa30dc645a91c4434e21200d"],["/archives/2023/03/index.html","77bdf34b650a34312491b4a6a4df1a7f"],["/archives/2023/04/index.html","d9b89092c65d139a66d0ef5dcaddd90a"],["/archives/2023/05/index.html","84bf767793c20b25cdea92a9b310ed4f"],["/archives/2023/06/index.html","c625d4d1b46d6e6592e459377954ffc8"],["/archives/2023/07/index.html","a8f87a948d9550872d1c766b0e5d4da3"],["/archives/2023/index.html","418ab2c503db4661c0d3df394844bef9"],["/archives/2023/page/2/index.html","5dbaae58776ce2a162aa78a2456b08b2"],["/archives/index.html","246e95a57215f3d1a2289730ed35105f"],["/archives/page/2/index.html","e68af6e57822943cbad1ae4078b79f65"],["/categories/Flask学习之旅/index.html","bdd04f23ff83252d7ff7dc5a82c67723"],["/categories/Flask的搭建之旅/index.html","fe862474367bda6fb7bc4a29e4a44a9f"],["/categories/GAMES/Minecraft/index.html","f264257b75ca272921b3218fa6f400d5"],["/categories/GAMES/index.html","f291f27afeb1ebd1b7dc609f32e478be"],["/categories/Hexo的搭建之旅/index.html","fc8df2e70252a9aba8468aba760da88c"],["/categories/index.html","7f1c3294be6af28284d23c79dfafb4ea"],["/categories/原理探析/index.html","3b8bdcb7d491f113e07fe41cfc83927a"],["/categories/原理探析/电化学/index.html","bd98bad8ff303409d23690568a864e27"],["/categories/大学大不了自学/index.html","620567aa1a5a8543fe3c9bbbc49f857a"],["/categories/氢电池研究小组/index.html","883f088243c73d44711383d9a3608891"],["/categories/氢电池研究小组/实验操作/index.html","d8248e5ba19a83796eebda91e6687d11"],["/categories/氢电池研究小组/文献观察/index.html","dfd54f8016c4c69d5a69bf3e1ce390df"],["/categories/虚幻4：从入门到入坟/index.html","226e864ff359f01888f5d72118dd352f"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","12902416a89d1bde34f0e49cf190fc41"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","727ba62bab81a68b5d4b61e156cf4639"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","2f9ffcbd0bda4da291d6f510f696c7af"],["/js/main.js","1ce9ac6e071e6844aba7df4c0ab8906b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","7545d315da59d0424c90e35023da46d7"],["/page/2/index.html","000b2040b8566e27fd632287b7469a15"],["/post/10d5b386.html","cabac1bdcf779ad529c38eba573acff0"],["/post/13313.html","f604c741b89a07341c31ea0e14b20d70"],["/post/19686.html","734fffe2344f1420436f28ac2ee38e84"],["/post/20ac2f54.html","7014a97ab7c50147b660da15fa0be74f"],["/post/2197cb5b.html","90768eb85ea3218343e21d2adedbc089"],["/post/23f343f1.html","1706288d484d90cd141806b260b75225"],["/post/57ee7c1d.html","5a9da83aadc58cd86c892328d6924e53"],["/post/6a7616d7.html","5df570151ba6b7780341a8cb4220a3ae"],["/post/a05cdb7b.html","d62faa4a094cc573728b1a6c8d6768dc"],["/post/cbd4ddb9.html","36fd72906dc59abf0282f38954927fa7"],["/post/d5fd331f.html","58e99a5bae91f01084f7640ace0ab10a"],["/post/f1a6d443.html","b9907885c66a1fccbd4ef39da47826f9"],["/post/f32487d0.html","2e2fa83aa22e46866594820614bb8c9d"],["/post/f7c24785.html","3ddb0c9ca8734ea69744431bf43f4061"],["/post/fd77207e.html","d636bf9905dc7e6683171db5a810cf19"],["/share/index.html","f866c9e97fc1b6659b85b8e4f62b4ab4"],["/sw-register.js","740df92f9df1d2d3fb7934dc1de1616c"],["/tags/Flask/index.html","b2e312f5744d5a5a86e0c3428358aa3e"],["/tags/Hexo/index.html","a401f96c0e0fbf4a5a088954a12e11ad"],["/tags/Minecraft/index.html","8612cb3ba3172bbe5bdef1799838cba9"],["/tags/PEMFC/index.html","a1b6f66e3e75d35d97c5e0f2df254452"],["/tags/index.html","428e2f2dec548e5ab0886c73d54ac183"],["/tags/大学/index.html","533c1959fd5101c408a7e5239157a499"],["/tags/文献汇报/index.html","23504e43ef88e0aeb7195165d9f41c9b"],["/tags/电化学/index.html","513830609c51b9cbbc632cc48568e7e6"],["/tags/虚幻4/index.html","11756e63d2a96b0ae0dd12a85c0631bf"]];
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
