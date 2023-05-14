/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","03c7b713d1d836c44e9480c100a66c8e"],["/about/index.html","23d9004bcd38d38face621794d6aa74a"],["/archives/2022/10/index.html","d42c930bc3f6f8318da542a449fe3ac4"],["/archives/2022/11/index.html","dece744089dc87b566d7c6c76e0f713e"],["/archives/2022/index.html","9f4a0940cfe6c74aa8e59289ca06c678"],["/archives/2023/03/index.html","d7f560957d065446b145b69680dfb4ba"],["/archives/2023/04/index.html","3d96c171907915a83834d627ffc8baae"],["/archives/2023/05/index.html","8f6f39e353cc986aa7e8fe6c85d05b1a"],["/archives/2023/index.html","82ec3229faa5e55b221d93457922ed8b"],["/archives/index.html","ec79a97ea176658f319b553e6c67eeeb"],["/archives/page/2/index.html","030a0e2e14837aff623bf20f2d6bd4b3"],["/categories/Flask的搭建之旅/index.html","e91cf26dd8df0d431645a19da97a0491"],["/categories/Hexo的搭建之旅/index.html","219b39a221155c4b3331014415b1f62a"],["/categories/MySQL/index.html","ed0215cca35d941077b794a354417292"],["/categories/Python-Study/index.html","29c4c73104628a3e88e1fdebcfb03550"],["/categories/index.html","8aba804d590ab45dc2add08ed9a99da2"],["/categories/大学大不了自学/PEMFC/index.html","83cea10338aed7c869a9887869649ddb"],["/categories/大学大不了自学/index.html","9498a4f5d03f1bae4e12724c7d156627"],["/categories/科学研究方法/index.html","7b40205cbed7a5d92b8b1d91d312d27c"],["/categories/虚幻4：从入门到入坟/index.html","1809624075a09f08bd3d874b3f2a94e0"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","f7ba5323480209d4eb7779a106cfdce7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","c20587bcefc1c5fd3070c5414d7d54a2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","a9942b90bf961c6454002804e8787848"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","4003d1bbd49593859b35946cada652a1"],["/page/2/index.html","74604137323de7e779917d21b1c8c75a"],["/post/13313.html","a75d9ba6bd5e8143214a82e269e98bb6"],["/post/19686.html","1636f847e7095bcac3cf2047f77efcae"],["/post/20ac2f54.html","91323e65c0994b5e7b185e8d4dbcd753"],["/post/2db5a85a.html","d54c076f55ba6107508296371ffb8b0a"],["/post/57ee7c1d.html","961b5f67aba09445e8550774076bb50f"],["/post/6a7616d7.html","70217209fdcde3a82ade899cc75dc67e"],["/post/750e0958.html","e1fe70d65954aa9a63dcad2b28f991ca"],["/post/d5fd331f.html","79af8598d62c23eb41315399b0ca81f7"],["/post/dce9aed1.html","05740abb8a66e5e03e2800544b9339ca"],["/post/f1a6d443.html","98e9bc0367cdba83f3584816bc766d97"],["/post/f32487d0.html","c13c731656bfce5e608b1e97c0c203cc"],["/post/f7c24785.html","32466240f63bc922368ac04597f46ac1"],["/sw-register.js","ee72e6de81375fed8d3a9ac5bfe39b21"],["/tags/Flask/index.html","8989d27e082f5e371769cf1d3195f93e"],["/tags/Hexo/index.html","68d529614651d76cf6c59a349863b74e"],["/tags/MySQL/index.html","c02cb309198629fc8e8d125da7dd060e"],["/tags/PEMFC/index.html","323219bec38945aaa2c389f5583b4d8b"],["/tags/index.html","07e59758443cecf9d1d0f17789ba35d5"],["/tags/python/index.html","9fb27990625a4ba96071fc02000cc1db"],["/tags/喷涂/index.html","67ff889ffbb35e0e77e05b0d35dd1a6c"],["/tags/大学/index.html","3f7c447dd6eba7b771ac086f14ee0ec3"],["/tags/爬虫/index.html","3ac231bedf499453eaa9e3fb5d28016d"],["/tags/研究方法与论文/index.html","5506139846e015803ea32a61e79a234f"],["/tags/虚幻4/index.html","ac59d28e47219cd13652fbd3c9968f80"]];
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
