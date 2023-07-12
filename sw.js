/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4b40dc6f4893da21ae5f67432926fd70"],["/archives/2022/10/index.html","aa727d3049a1870d6715bda7c33f967a"],["/archives/2022/11/index.html","d8d65bb536f0bbdba80fe3adcb85dcfe"],["/archives/2022/index.html","7ba40426d783263372fe0a07f1ecdb1b"],["/archives/2023/03/index.html","8b41c36ca85d9b58260904dbb729742a"],["/archives/2023/04/index.html","ad4b68079644234891d69fb044f29b8b"],["/archives/2023/05/index.html","08fe9e22fd364a9ec472dee8c0b0da77"],["/archives/2023/06/index.html","31722687752b0c1bb3f66872c3b772a6"],["/archives/2023/07/index.html","15a5bc99f8d5ed8f895bae7af96c634b"],["/archives/2023/index.html","857ff70ebcd2bcd02f42cb65bc5e0910"],["/archives/2023/page/2/index.html","b50ef3b93916ed477ca0df0ad71fc169"],["/archives/index.html","368c947effad78c0881a26044286dd2d"],["/archives/page/2/index.html","a5f74786b0ebf667e63e51b282d4d103"],["/categories/Flask的搭建之旅/index.html","67f8bec52eb39d1336c527410bb744ac"],["/categories/GAMES/Minecraft/index.html","44c98c19f136b282dd7ad601e9b498ed"],["/categories/GAMES/index.html","795cce8cc666e68d7e09fdd7b27eb7fc"],["/categories/Hexo的搭建之旅/index.html","1c57a41dc95601181387fbab774e3688"],["/categories/Python-Study/index.html","671303257c233a429e0ff5a04d4862ca"],["/categories/index.html","4dfc3c9cd04de69d2e4ef5b31e0e5ed6"],["/categories/大学大不了自学/PEMFC/index.html","a8d795694a351d4fcf1931aafc25473a"],["/categories/大学大不了自学/index.html","53fc8ef9a8d9ca43b84bc6f9e205cee4"],["/categories/大学大不了自学/电化学研究方法/index.html","b665a732a86f8e6f5dc2e6ac07715294"],["/categories/虚幻4：从入门到入坟/index.html","186dd588af1735cfd22b68db281149af"],["/css/background.css","33f56fe6acc2b6478d90e9d0b3e0b3b6"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","63c39d514cdca2aa9c29f7aa19e0e17e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","adbabc64cbb684aad96c025c8046f746"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","4f03f7af47d84aa426ca7c00ad57079f"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","28d419cc39303e7b8d1b747875a6df86"],["/page/2/index.html","41bd3deadec2aa6866465bbe13c18e35"],["/post/13313.html","cf721c18e6554765171b5e2c45f033d7"],["/post/19686.html","b386469357ca0b700aec70a072f7be07"],["/post/20ac2f54.html","1fba4546c4809a8b52a46c708a35babc"],["/post/2197cb5b.html","e06240c29b23765158b6533eb75a1147"],["/post/23f343f1.html","19d041e157602cc5aadcf9b933102719"],["/post/57ee7c1d.html","402a5105a564d6c22c97dab3630eedc7"],["/post/6a7616d7.html","5d7c4d73df5b4c179a0417fea07b55f2"],["/post/a05cdb7b.html","1438800de40d2920a8cad6ae58fc2942"],["/post/cbd4ddb9.html","808c939f7330a1ba1bf3a13850a46d8e"],["/post/d5fd331f.html","2e21495298b2e9d1a935acfd74222de3"],["/post/dce9aed1.html","7e5482947ba35c47571e17d39eb85f35"],["/post/f1a6d443.html","63cff30391de3e2388814cf363c8c807"],["/post/f32487d0.html","9a49fb698bcc9493f7923057500023d2"],["/post/f7c24785.html","a0d4f101f6070037d3eed4f251a4b238"],["/post/fd77207e.html","24da3e67796cbfd7d0b09f92bef944d5"],["/share/index.html","d790ef0c0df23e10d80c18c5c9f68160"],["/sw-register.js","16749792ca565c2c3977e52db3a33524"],["/tags/Flask/index.html","e332c9b41a9cccae7ad8551f6fab7598"],["/tags/Hexo/index.html","9c041ab6720ad92ee339bfe777b8da90"],["/tags/Minecraft/index.html","782893747de89a11bc62352310d75c56"],["/tags/PEMFC/index.html","cbfe0d2c5b85592e92d2156288094912"],["/tags/index.html","616bb8aa0a0445af9f4369e51a0efd06"],["/tags/python/index.html","981011bba397508e6d4a7dd5740969cd"],["/tags/喷涂/index.html","845f796d00aa33f201f123fee3094e35"],["/tags/大学/index.html","1eb670f77afeb5894f45d3aaf02f4fb7"],["/tags/文献汇报/index.html","1306332509dc8e95c3dc6cbb354a9086"],["/tags/爬虫/index.html","cb80ddb14f44b03dd7c6e0145e218505"],["/tags/研究方法/index.html","a68f54109118e1f23d3e467dd0f76bfe"],["/tags/虚幻4/index.html","1ae4e611054f2ef131b6b849789e7988"]];
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
