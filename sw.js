/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/index.html","35274419ba4f63d708fbb766dd678e5c"],["/about/index.html","57a753e4d61f12c9a1d20c1d197bad5e"],["/archives/2022/10/index.html","7aaca41013a327db26bf309c0f81a07a"],["/archives/2022/11/index.html","b217c092cdde767ed5c05f751e8aa9e3"],["/archives/2022/index.html","435b03f0bdbccf5c1d216f18def2f87d"],["/archives/2023/03/index.html","29326a393ea1e76a465ceb69b07cc0c9"],["/archives/2023/04/index.html","4f18ea8624141f7c3657b40b5e9f03f6"],["/archives/2023/05/index.html","5ade15ea3436dd80486726de8ddff77a"],["/archives/2023/index.html","96be27034267b1c59615537410cc4c00"],["/archives/index.html","d9d5a5f306581bdedd7c3c2cf1093a40"],["/archives/page/2/index.html","23ddfad87b23f1366b4b4e5113d26088"],["/categories/Flask的搭建之旅/index.html","fbda553aad56e426bb4dc4f14e502171"],["/categories/Hexo的搭建之旅/index.html","62228db8fd6d38971c99ed8c250081bd"],["/categories/MySQL/index.html","9656d7f65cbc8855a380921bda96939b"],["/categories/Python-Study/index.html","c8163fee22ab572e8dae2b95f5daa90c"],["/categories/index.html","b4c11530dc0fce2de7095570dd80d905"],["/categories/大学大不了自学/PEMFC/index.html","9542e3c67bac355aeeafdd485f4c80a0"],["/categories/大学大不了自学/index.html","457bed67841a425b9457b7fe67000ab4"],["/categories/科学研究方法/index.html","c616360191b48746d7ccdb616c7ba99d"],["/categories/虚幻4：从入门到入坟/index.html","199615a9ce7fadb5b85facc0eaf34cde"],["/css/custom.css","7d66c43c37a4b9f705b401447a9c83f8"],["/css/index.css","f7ba5323480209d4eb7779a106cfdce7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","2305a82c8ae2dd4b97f5f43e2533ce24"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/头像.jpg","d3a0eb348ad3c09bf590f6d0689829d3"],["/img/自风.png","5744b7e0a5c6fdbc87404b8166bcb11e"],["/img/风.png","e05cc669d18909e7ca77a6b55ea93833"],["/index.html","de699320fd27f4e0a546818045752dea"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","6f1876b7f40f45b89376bdfa3769b046"],["/page/2/index.html","9f9d5608c208ccd1d3fb21f1a7f2aff7"],["/post/13313.html","f143f76d3a72c793d34ccccb3a93afe1"],["/post/19686.html","aadbbaab63877dc8abf5070183a4a3ec"],["/post/20ac2f54.html","c27216fb71d73571ebf515adf6ee1924"],["/post/2db5a85a.html","593de14bb75ecc778fddb7401835fe4d"],["/post/57ee7c1d.html","981450214a711b8bf0c8da9782dd2085"],["/post/6a7616d7.html","64c2d7104b65bd61b7811bc531d0a07d"],["/post/750e0958.html","cd7b409bd5aa122f6711bf9f45caf71c"],["/post/d5fd331f.html","474a43a8bf425bb5285ba918e337f951"],["/post/dce9aed1.html","9756254fcf4a8761de983f4835f44814"],["/post/f1a6d443.html","3c179fc30d0e9fe1a3629e2b3de0c35f"],["/post/f32487d0.html","848b2cc428b64611261e632fa6657b87"],["/post/f7c24785.html","026a560a15c4019e75e3529fb8c36663"],["/sw-register.js","6f3ed345ce6553e8d5c974a7e746d809"],["/tags/Flask/index.html","5e7df55b0cdb6f4e06a55c09134d3b70"],["/tags/Hexo/index.html","4544299b70574408bcb1ec035209e3a1"],["/tags/MySQL/index.html","72cd64e5474989750b1610b7f2dadafa"],["/tags/PEMFC/index.html","925d84d4039343a90ebf0d297a368b8a"],["/tags/index.html","14d6c3d3277959241601014bec78c539"],["/tags/python/index.html","c924729533d17585cc828bddfee8ef38"],["/tags/喷涂/index.html","25830deeda5fa7e5891d86ece0552c60"],["/tags/大学/index.html","826dac6dcb3391e59c989721d70df72d"],["/tags/爬虫/index.html","35cce7457b98186334087cae2f2d8dd3"],["/tags/研究方法与论文/index.html","0ab8e9c852725931174f0c5896df3df9"],["/tags/虚幻4/index.html","a54abe05d7d827f00995ac5833eaa39f"]];
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
