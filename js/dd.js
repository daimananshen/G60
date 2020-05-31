(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.dd = t() : e.dd = t()
})(this, function () {
    return function (e) {
        function t(r) {
            if (n[r])return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 570)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(2), o = n(160), i = n(2);
        t.ENV_ENUM = i.ENV_ENUM;
        var a = n(3);
        n(166), t.ddSdk = new a.Sdk(r.getENV(), o.log)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.addWatchParamsDeal = function (e) {
            var t = Object.assign({}, e);
            return t.watch = !0, t
        }, t.addDefaultCorpIdParamsDeal = function (e) {
            var t = Object.assign({}, e);
            return t.corpId = "corpId", t
        }, t.genDefaultParamsDealFn = function (e) {
            var t = Object.assign({}, e);
            return function (e) {
                return Object.assign(t, e)
            }
        }, t.forceChangeParamsDealFn = function (e) {
            var t = Object.assign({}, e);
            return function (e) {
                return Object.assign(e, t)
            }
        }, t.genBoolResultDealFn = function (e) {
            return function (t) {
                var n = Object.assign({}, t);
                return e.forEach(function (e) {
                    void 0 !== n[e] && (n[e] = !!n[e])
                }), n
            }
        }, t.genBizStoreParamsDealFn = function (e) {
            var t = Object.assign({}, e);
            return "string" != typeof t.params ? (t.params = JSON.stringify(t), t) : t
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(3), o = n(3);
        t.ENV_ENUM = o.ENV_ENUM, t.APP_TYPE = o.APP_TYPE;
        var i = n(163);
        t.getUA = function () {
            var e = "";
            try {
                "undefined" != typeof navigator && (e = navigator && (navigator.userAgent || navigator.swuserAgent) || "")
            } catch (t) {
                e = ""
            }
            return e
        }, t.getENV = function () {
            var e = t.getUA(), n = /DingTalk/i.test(e) || i.default.isDingTalk,
                o = /iPhone|iPad|iPod|iOS/i.test(e) && n || i.default.isWeexiOS,
                a = /Android/i.test(e) && n || i.default.isWeexAndroid,
                s = /Nebula/i.test(e) && n || "object" == typeof dd && "function" == typeof dd.dtBridge,
                d = /dd-web/i.test(e), u = r.APP_TYPE.WEB;
            d ? u = r.APP_TYPE.WEBVIEW_IN_MINIAPP : s ? u = r.APP_TYPE.MINI_APP : (i.default.isWeexiOS || i.default.isWeexAndroid) && (u = r.APP_TYPE.WEEX);
            var c, l = "*", f = e.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);
            null === f && (f = e.match(/DingTalk\/([a-zA-Z0-9.-]+)/));
            var v;
            f && f[1] && (v = f[1]);
            var p = "";
            if ("undefined" != typeof name && (p = name), p)try {
                var _ = JSON.parse(p);
                _.hostVersion && (v = _.hostVersion), l = _.language || navigator.language || "*", c = _.containerId
            } catch (e) {
            }
            var E, N = !!c;
            return E = o ? r.ENV_ENUM.ios : a ? r.ENV_ENUM.android : N ? r.ENV_ENUM.pc : r.ENV_ENUM.notInDingTalk, {
                platform: E,
                version: v,
                appType: u,
                language: l
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(169);
        t.APP_TYPE = r.APP_TYPE, t.LogLevel = r.LogLevel, t.isFunction = r.isFunction, t.compareVersion = r.compareVersion, t.ENV_ENUM = r.ENV_ENUM;
        var o = function () {
            function e(e, t) {
                var n = this;
                this.configJsApiList = [], this.hadConfig = !1, this.p = {}, this.config$ = new Promise(function (e, t) {
                    n.p.reject = t, n.p.resolve = e
                }), this.logQueue = [], this.devConfig = {debug: !1}, this.platformConfigMap = {}, this.invokeAPIConfigMapByMethod = {}, this.isBridgeDrity = !0, this.getExportSdk = function () {
                    return n.exportSdk
                }, this.setAPI = function (e, t) {
                    n.invokeAPIConfigMapByMethod[e] = t
                }, this.setPlatform = function (e) {
                    n.isBridgeDrity = !0, n.platformConfigMap[e.platform] = e, e.platform === n.env.platform && e.bridgeInit().catch(function (e) {
                        n.customLog(r.LogLevel.WARNING, ["auto bridgeInit error", e || ""])
                    })
                }, this.getPlatformConfigMap = function () {
                    return n.platformConfigMap
                }, this.deleteApiConfig = function (e, t) {
                    var r = n.invokeAPIConfigMapByMethod[e];
                    r && delete r[t]
                }, this.invokeAPI = function (e, t, o) {
                    void 0 === t && (t = {}), void 0 === o && (o = !0), n.customLog(r.LogLevel.INFO, ['==> "' + e + '" params: ', t]);
                    var i = +new Date, a = i + "_" + Math.floor(1e3 * Math.random());
                    return n.devConfig.onBeforeInvokeAPI && n.devConfig.onBeforeInvokeAPI({
                        invokeId: a,
                        method: e,
                        params: t,
                        startTime: i
                    }), !1 === n.devConfig.isAuthApi && (o = !1), n.bridgeInitFn().then(function (s) {
                        var d = n.invokeAPIConfigMapByMethod[e],
                            u = !0 === n.devConfig.isDisableDeal || n.devConfig.disbaleDealApiWhiteList && -1 !== n.devConfig.disbaleDealApiWhiteList.indexOf(e);
                        if (d || !o) {
                            var c;
                            if (d && (c = d[n.env.platform]), c || !o) {
                                var l = {};
                                l = !u && c && c.paramsDeal && r.isFunction(c.paramsDeal) ? c.paramsDeal(t) : Object.assign({}, t);
                                var f = function (e) {
                                    return !u && c && c.resultDeal && r.isFunction(c.resultDeal) ? c.resultDeal(e) : e
                                };
                                if (r.isFunction(l.onSuccess)) {
                                    var v = l.onSuccess;
                                    l.onSuccess = function (e) {
                                        v(f(e))
                                    }
                                }
                                return s(e, l).then(f, function (t) {
                                    var i = n.hadConfig && void 0 === n.isReady && -1 !== n.configJsApiList.indexOf(e),
                                        a = "object" == typeof t && "string" == typeof t.errorCode && t.errorCode === r.ERROR_CODE.no_permission,
                                        d = "object" == typeof t && "string" == typeof t.errorCode && t.errorCode === r.ERROR_CODE.cancel,
                                        u = c && c.vs && n.env.version && r.compareVersion(n.env.version, c.vs),
                                        v = (n.env.platform === r.ENV_ENUM.ios || n.env.platform === r.ENV_ENUM.android) && i && a,
                                        p = n.env.platform === r.ENV_ENUM.pc && i && (u && !d && o || a);
                                    return v || p ? n.config$.then(function () {
                                        return s(e, l).then(f)
                                    }) : Promise.reject(t)
                                }).then(function (o) {
                                    return n.devConfig.onAfterInvokeAPI && n.devConfig.onAfterInvokeAPI({
                                        invokeId: a,
                                        method: e,
                                        params: t,
                                        payload: o,
                                        isSuccess: !0,
                                        startTime: i,
                                        duration: +new Date - i
                                    }), n.customLog(r.LogLevel.INFO, ['<== "' + e + '" success result: ', o]), o
                                }, function (o) {
                                    return n.devConfig.onAfterInvokeAPI && n.devConfig.onAfterInvokeAPI({
                                        invokeId: a,
                                        method: e,
                                        params: t,
                                        payload: o,
                                        startTime: i,
                                        duration: +new Date - i,
                                        isSuccess: !1
                                    }), n.customLog(r.LogLevel.WARNING, ['<== "' + e + '" fail result: ', o]), Promise.reject(o)
                                })
                            }
                            var p = '"' + e + '" do not support the current platform (' + n.env.platform + ")";
                            return n.customLog(r.LogLevel.ERROR, [p]), Promise.reject({
                                errorCode: r.ERROR_CODE.jsapi_internal_error,
                                errorMessage: p
                            })
                        }
                        var p = "This API method is not configured for the platform (" + n.env.platform + ")";
                        return n.customLog(r.LogLevel.ERROR, [p]), Promise.reject({
                            errorCode: r.ERROR_CODE.jsapi_internal_error,
                            errorMessage: p
                        })
                    })
                }, this.customLog = function (e, t) {
                    var r = {level: e, text: t, time: new Date};
                    !0 === n.devConfig.debug ? n.customLogInstance(r) : n.logQueue.push(r)
                }, this.clearLogQueue = function () {
                    n.logQueue.forEach(function (e) {
                        n.customLogInstance(e)
                    }), n.logQueue = []
                }, this.customLogInstance = t, this.env = e, this.bridgeInitFn = function () {
                    if (n.bridgeInitFnPromise && !n.isBridgeDrity)return n.bridgeInitFnPromise;
                    n.isBridgeDrity = !1;
                    var t = n.platformConfigMap[e.platform];
                    if (t) n.bridgeInitFnPromise = t.bridgeInit().catch(function (e) {
                        return n.customLog(r.LogLevel.ERROR, ["\b\b\b\b\bJsBridge initialization fails, jsapi will not work"]), Promise.reject(e)
                    }); else {
                        var o = "Do not support the current environment锛�" + e.platform;
                        n.customLog(r.LogLevel.WARNING, [o]), n.bridgeInitFnPromise = Promise.reject(new Error(o))
                    }
                    return n.bridgeInitFnPromise
                };
                var o = function (e) {
                    void 0 === e && (e = {}), n.devConfig = Object.assign(n.devConfig, e), !0 === e.debug && n.clearLogQueue(), e.extraPlatform && n.setPlatform(e.extraPlatform)
                };
                this.exportSdk = {
                    config: function (t) {
                        void 0 === t && (t = {});
                        var i = !0;
                        Object.keys(t).forEach(function (e) {
                            -1 === ["debug", "usePromise"].indexOf(e) && (i = !1)
                        }), i ? (n.customLog(r.LogLevel.WARNING, ["This is a deprecated feature, recommend use dd.devConfig"]), o(t)) : n.hadConfig ? n.customLog(r.LogLevel.WARNING, ["Config has been executed"]) : (t.jsApiList && (n.configJsApiList = t.jsApiList), n.hadConfig = !0, n.bridgeInitFn().then(function (r) {
                            var o = n.platformConfigMap[e.platform], i = t;
                            o.authParamsDeal && (i = o.authParamsDeal(i)), r(o.authMethod, i).then(function (e) {
                                n.isReady = !0, n.p.resolve(e)
                            }).catch(function (e) {
                                n.isReady = !1, n.p.reject(e)
                            })
                        }, function () {
                            n.customLog(r.LogLevel.ERROR, ['\b\b\b\b\bJsBridge initialization failed and "dd.config" failed to call'])
                        }))
                    }, devConfig: o, ready: function (e) {
                        !1 === n.hadConfig ? (n.customLog(r.LogLevel.WARNING, ["You don 't use a dd.config, so you don't need to wrap dd.ready, recommend remove dd.ready"]), n.bridgeInitFn().then(function () {
                            e()
                        })) : n.config$.then(function (t) {
                            e()
                        })
                    }, error: function (e) {
                        n.config$.catch(function (t) {
                            e(t)
                        })
                    }, on: function (t, r) {
                        n.bridgeInitFn().then(function () {
                            n.platformConfigMap[e.platform].event.on(t, r)
                        })
                    }, off: function (t, r) {
                        n.bridgeInitFn().then(function () {
                            n.platformConfigMap[e.platform].event.off(t, r)
                        })
                    }, env: e, checkJsApi: function (t) {
                        void 0 === t && (t = {});
                        var o = {};
                        return t.jsApiList && t.jsApiList.forEach(function (t) {
                            var i = n.invokeAPIConfigMapByMethod[t];
                            if (i) {
                                var a = i[e.platform];
                                a && a.vs && e.version && r.compareVersion(e.version, a.vs) && (o[t] = !0)
                            }
                            o[t] || (o[t] = !1)
                        }), Promise.resolve(o)
                    }, _invoke: function (e, t) {
                        return void 0 === t && (t = {}), n.invokeAPI(e, t, !1)
                    }
                }
            }

            return e
        }();
        t.Sdk = o
    }, function (e, t, n) {
        (function (t, n) {
            e.exports = n()
        })(0, function () {
            return function (e) {
                function t(r) {
                    if (n[r])return n[r].exports;
                    var o = n[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.i = function (e) {
                    return e
                }, t.d = function (e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 579)
            }({
                179: function (e, t, n) {
                    "use strict";
                    var r = n(181);
                    e.exports = r
                }, 181: function (e, t, n) {
                    "use strict";
                    var r = n(183), o = n(184), i = n(182), a = n(185), s = new i, d = !1, u = "", c = null, l = {},
                        f = /{.*}/;
                    try {
                        var v = window.name.match(f);
                        if (v && v[0])var l = JSON.parse(v[0])
                    } catch (e) {
                        l = {}
                    }
                    l.hostOrigin && ".dingtalk.com" === l.hostOrigin.split(":")[1].slice(0 - ".dingtalk.com".length) && l.containerId && (d = !0, u = l.hostOrigin, c = l.containerId);
                    var p = {}, _ = new Promise(function (e, t) {
                        p._resolve = e, p._reject = t
                    }), E = {}, N = null;
                    window.top !== window && (N = window.top, p._resolve()), E[a.SYS_INIT] = function (e) {
                        N = e.frameWindow, p._resolve(), e.respond({})
                    }, window.addEventListener("message", function (e) {
                        var t = e.data, n = e.origin;
                        if (n === u)if ("response" === t.type && t.msgId) {
                            var r = t.msgId, i = s.getMsyById(r);
                            i && i.receiveResponse(t.body, !t.success)
                        } else if ("event" === t.type && t.msgId) {
                            var r = t.msgId, i = s.getMsyById(r);
                            i && i.receiveEvent(t.eventName, t.body)
                        } else if ("request" === t.type && t.msgId) {
                            var i = new o(e.source, n, t);
                            E[i.methodName] && E[i.methodName](i)
                        }
                    }), t.invokeAPI = function (e, t) {
                        var n = new r(c, e, t);
                        return d && _.then(function () {
                            N && N.postMessage(n.getPayload(), u), s.addPending(n)
                        }), n
                    };
                    var P = null;
                    t.addEventListener = function (e, n) {
                        P || (P = t.invokeAPI(a.SYS_EVENT, {})), P.addEventListener(e, n)
                    }, t.removeEventListener = function (e, t) {
                        P && P.removeEventListener(e, t)
                    }
                }, 182: function (e, t, n) {
                    "use strict";
                    var r = function () {
                        this.pendingMsgs = {}
                    };
                    r.prototype.addPending = function (e) {
                        this.pendingMsgs[e.id] = e;
                        var t = function () {
                            delete this.pendingMsgs[e.id], e.removeEventListener("_finish", t)
                        }.bind(this);
                        e.addEventListener("_finish", t)
                    }, r.prototype.getMsyById = function (e) {
                        return this.pendingMsgs[e]
                    }, e.exports = r
                }, 183: function (e, t, n) {
                    "use strict";
                    var r = n(574), o = n(573), i = 0, a = Math.floor(1e3 * Math.random()), s = function () {
                            return 1e3 * (1e3 * a + Math.floor(1e3 * Math.random())) + ++i % 1e3
                        }, d = {code: 408, reason: "timeout"}, u = {TIMEOUT: "_timeout", FINISH: "_finish"},
                        c = {timeout: -1}, l = function (e, t, n, r) {
                            this.id = s(), this.methodName = t, this.containerId = e, this.option = o({}, c, r);
                            var n = n || {};
                            this._p = {}, this.result = new Promise(function (e, t) {
                                this._p._resolve = e, this._p._reject = t
                            }.bind(this)), this.callbacks = {}, this.plainMsg = this._handleMsg(n), this._eventsHandle = {}, this._timeoutTimer = null, this._initTimeout(), this.isFinish = !1
                        };
                    l.prototype._initTimeout = function () {
                        this._clearTimeout(), this.option.timeout > 0 && (this._timeoutTimer = setTimeout(function () {
                            this.receiveEvent(u.TIMEOUT), this.receiveResponse(d, !0)
                        }.bind(this), this.option.timeout))
                    }, l.prototype._clearTimeout = function () {
                        clearTimeout(this._timeoutTimer)
                    }, l.prototype._handleMsg = function (e) {
                        var t = {};
                        return Object.keys(e).forEach(function (n) {
                            var o = e[n];
                            "function" == typeof o && "on" === n.slice(0, 2) ? this.callbacks[n] = o : t[n] = r(o)
                        }.bind(this)), t
                    }, l.prototype.getPayload = function () {
                        return {
                            msgId: this.id,
                            containerId: this.containerId,
                            methodName: this.methodName,
                            body: this.plainMsg,
                            type: "request"
                        }
                    }, l.prototype.receiveEvent = function (e, t) {
                        if (this.isFinish && e !== u.FINISH)return !1;
                        e !== u.FINISH && e !== u.TIMEOUT && this._initTimeout(), Array.isArray(this._eventsHandle[e]) && this._eventsHandle[e].forEach(function (e) {
                            try {
                                e(t)
                            } catch (e) {
                                console.error(t)
                            }
                        });
                        var n = "on" + e.charAt(0).toUpperCase() + e.slice(1);
                        return this.callbacks[n] && this.callbacks[n](t), !0
                    }, l.prototype.addEventListener = function (e, t) {
                        if (!e || "function" != typeof t)throw"eventName is null or handle is not a function, addEventListener fail";
                        Array.isArray(this._eventsHandle[e]) || (this._eventsHandle[e] = []), this._eventsHandle[e].push(t)
                    }, l.prototype.removeEventListener = function (e, t) {
                        if (!e || !t)throw"eventName is null or handle is null, invoke removeEventListener fail";
                        if (Array.isArray(this._eventsHandle[e])) {
                            var n = this._eventsHandle[e].indexOf(t);
                            -1 !== n && this._eventsHandle[e].splice(n, 1)
                        }
                    }, l.prototype.receiveResponse = function (e, t) {
                        if (!0 === this.isFinish)return !1;
                        this._clearTimeout();
                        var t = !!t;
                        return t ? this._p._reject(e) : this._p._resolve(e), setTimeout(function () {
                            this.receiveEvent(u.FINISH)
                        }.bind(this), 0), this.isFinish = !0, !0
                    }, e.exports = l
                }, 184: function (e, t, n) {
                    "use strict";
                    var r = function (e, t, n) {
                        if (this._msgId = n.msgId, this.frameWindow = e, this.methodName = n.methodName, this.clientOrigin = t, this.containerId = n.containerId, this.params = n.body, !this._msgId)throw"msgId not exist";
                        if (!this.frameWindow)throw"frameWindow not exist";
                        if (!this.methodName)throw"methodName not exits";
                        if (!this.clientOrigin)throw"clientOrigin not exist";
                        this.hasResponded = !1
                    };
                    r.prototype.respond = function (e, t) {
                        var t = !!t;
                        if (!0 !== this.hasResponded) {
                            var n = {type: "response", success: !t, body: e, msgId: this._msgId};
                            this.frameWindow.postMessage(n, this.clientOrigin), this.hasResponded = !0
                        }
                    }, r.prototype.emit = function (e, t) {
                        var n = {type: "event", eventName: e, body: t, msgId: this._msgId};
                        this.frameWindow.postMessage(n, this.clientOrigin)
                    }, e.exports = r
                }, 185: function (e, t, n) {
                    "use strict";
                    e.exports = {SYS_EVENT: "SYS_openAPIContainerInitEvent", SYS_INIT: "SYS_openAPIContainerInit"}
                }, 4: function (e, t) {
                    var n;
                    n = function () {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch (e) {
                        "object" == typeof window && (n = window)
                    }
                    e.exports = n
                }, 572: function (e, t, n) {
                    (function (e, n) {
                        function r(e, t) {
                            return e.set(t[0], t[1]), e
                        }

                        function o(e, t) {
                            return e.add(t), e
                        }

                        function i(e, t) {
                            for (var n = -1, r = e.length; ++n < r && !1 !== t(e[n], n, e););
                            return e
                        }

                        function a(e, t) {
                            for (var n = -1, r = t.length, o = e.length; ++n < r;)e[o + n] = t[n];
                            return e
                        }

                        function s(e, t, n, r) {
                            var o = -1, i = e.length;
                            for (r && i && (n = e[++o]); ++o < i;)n = t(n, e[o], o, e);
                            return n
                        }

                        function d(e, t) {
                            for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
                            return r
                        }

                        function u(e) {
                            return e && e.Object === Object ? e : null
                        }

                        function c(e) {
                            var t = !1;
                            if (null != e && "function" != typeof e.toString)try {
                                t = !!(e + "")
                            } catch (e) {
                            }
                            return t
                        }

                        function l(e) {
                            var t = -1, n = Array(e.size);
                            return e.forEach(function (e, r) {
                                n[++t] = [r, e]
                            }), n
                        }

                        function f(e) {
                            var t = -1, n = Array(e.size);
                            return e.forEach(function (e) {
                                n[++t] = e
                            }), n
                        }

                        function v(e) {
                            var t = -1, n = e ? e.length : 0;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function p() {
                            this.__data__ = wt ? wt(null) : {}
                        }

                        function _(e) {
                            return this.has(e) && delete this.__data__[e]
                        }

                        function E(e) {
                            var t = this.__data__;
                            if (wt) {
                                var n = t[e];
                                return n === Se ? void 0 : n
                            }
                            return Et.call(t, e) ? t[e] : void 0
                        }

                        function N(e) {
                            var t = this.__data__;
                            return wt ? void 0 !== t[e] : Et.call(t, e)
                        }

                        function P(e, t) {
                            return this.__data__[e] = wt && void 0 === t ? Se : t, this
                        }

                        function h(e) {
                            var t = -1, n = e ? e.length : 0;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function m() {
                            this.__data__ = []
                        }

                        function M(e) {
                            var t = this.__data__, n = x(t, e);
                            return !(n < 0 || (n == t.length - 1 ? t.pop() : bt.call(t, n, 1), 0))
                        }

                        function y(e) {
                            var t = this.__data__, n = x(t, e);
                            return n < 0 ? void 0 : t[n][1]
                        }

                        function k(e) {
                            return x(this.__data__, e) > -1
                        }

                        function g(e, t) {
                            var n = this.__data__, r = x(n, e);
                            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
                        }

                        function b(e) {
                            var t = -1, n = e ? e.length : 0;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function I() {
                            this.__data__ = {hash: new v, map: new (Vt || h), string: new v}
                        }

                        function A(e) {
                            return re(this, e).delete(e)
                        }

                        function S(e) {
                            return re(this, e).get(e)
                        }

                        function V(e) {
                            return re(this, e).has(e)
                        }

                        function U(e, t) {
                            return re(this, e).set(e, t), this
                        }

                        function O(e) {
                            this.__data__ = new h(e)
                        }

                        function j() {
                            this.__data__ = new h
                        }

                        function w(e) {
                            return this.__data__.delete(e)
                        }

                        function $(e) {
                            return this.__data__.get(e)
                        }

                        function D(e) {
                            return this.__data__.has(e)
                        }

                        function C(e, t) {
                            var n = this.__data__;
                            return n instanceof h && n.__data__.length == Ae && (n = this.__data__ = new b(n.__data__)), n.set(e, t), this
                        }

                        function T(e, t, n) {
                            var r = e[t];
                            Et.call(e, t) && Ee(r, n) && (void 0 !== n || t in e) || (e[t] = n)
                        }

                        function x(e, t) {
                            for (var n = e.length; n--;)if (Ee(e[n][0], t))return n;
                            return -1
                        }

                        function F(e, t) {
                            return e && ee(t, Ie(t), e)
                        }

                        function W(e, t, n, r, o, a, s) {
                            var d;
                            if (r && (d = a ? r(e, o, a, s) : r(e)), void 0 !== d)return d;
                            if (!ye(e))return e;
                            var u = Lt(e);
                            if (u) {
                                if (d = de(e), !t)return Z(e, d)
                            } else {
                                var l = se(e), f = l == we || l == $e;
                                if (Bt(e))return q(e, t);
                                if (l == Te || l == Ue || f && !a) {
                                    if (c(e))return a ? e : {};
                                    if (d = ue(f ? {} : e), !t)return te(e, F(d, e))
                                } else {
                                    if (!rt[l])return a ? e : {};
                                    d = ce(e, l, W, t)
                                }
                            }
                            s || (s = new O);
                            var v = s.get(e);
                            if (v)return v;
                            if (s.set(e, d), !u)var p = n ? ne(e) : Ie(e);
                            return i(p || e, function (o, i) {
                                p && (i = o, o = e[i]), T(d, i, W(o, t, n, r, i, e, s))
                            }), d
                        }

                        function R(e) {
                            return ye(e) ? kt(e) : {}
                        }

                        function L(e, t, n) {
                            var r = t(e);
                            return Lt(e) ? r : a(r, n(e))
                        }

                        function B(e, t) {
                            return Et.call(e, t) || "object" == typeof e && t in e && null === ie(e)
                        }

                        function z(e) {
                            return At(Object(e))
                        }

                        function q(e, t) {
                            if (t)return e.slice();
                            var n = new e.constructor(e.length);
                            return e.copy(n), n
                        }

                        function Y(e) {
                            var t = new e.constructor(e.byteLength);
                            return new Mt(t).set(new Mt(e)), t
                        }

                        function J(e, t) {
                            var n = t ? Y(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }

                        function G(e, t, n) {
                            return s(t ? n(l(e), !0) : l(e), r, new e.constructor)
                        }

                        function H(e) {
                            var t = new e.constructor(e.source, et.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }

                        function K(e, t, n) {
                            return s(t ? n(f(e), !0) : f(e), o, new e.constructor)
                        }

                        function X(e) {
                            return Wt ? Object(Wt.call(e)) : {}
                        }

                        function Q(e, t) {
                            var n = t ? Y(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.length)
                        }

                        function Z(e, t) {
                            var n = -1, r = e.length;
                            for (t || (t = Array(r)); ++n < r;)t[n] = e[n];
                            return t
                        }

                        function ee(e, t, n, r) {
                            n || (n = {});
                            for (var o = -1, i = t.length; ++o < i;) {
                                var a = t[o];
                                T(n, a, r ? r(n[a], e[a], a, n, e) : e[a])
                            }
                            return n
                        }

                        function te(e, t) {
                            return ee(e, ae(e), t)
                        }

                        function ne(e) {
                            return L(e, Ie, ae)
                        }

                        function re(e, t) {
                            var n = e.__data__;
                            return ve(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                        }

                        function oe(e, t) {
                            var n = e[t];
                            return ge(n) ? n : void 0
                        }

                        function ie(e) {
                            return It(Object(e))
                        }

                        function ae(e) {
                            return yt(Object(e))
                        }

                        function se(e) {
                            return Nt.call(e)
                        }

                        function de(e) {
                            var t = e.length, n = e.constructor(t);
                            return t && "string" == typeof e[0] && Et.call(e, "index") && (n.index = e.index, n.input = e.input), n
                        }

                        function ue(e) {
                            return "function" != typeof e.constructor || pe(e) ? {} : R(ie(e))
                        }

                        function ce(e, t, n, r) {
                            var o = e.constructor;
                            switch (t) {
                                case Le:
                                    return Y(e);
                                case Oe:
                                case je:
                                    return new o(+e);
                                case Be:
                                    return J(e, r);
                                case ze:
                                case qe:
                                case Ye:
                                case Je:
                                case Ge:
                                case He:
                                case Ke:
                                case Xe:
                                case Qe:
                                    return Q(e, r);
                                case De:
                                    return G(e, r, n);
                                case Ce:
                                case We:
                                    return new o(e);
                                case xe:
                                    return H(e);
                                case Fe:
                                    return K(e, r, n);
                                case Re:
                                    return X(e)
                            }
                        }

                        function le(e) {
                            var t = e ? e.length : void 0;
                            return Me(t) && (Lt(e) || be(e) || Ne(e)) ? d(t, String) : null
                        }

                        function fe(e, t) {
                            return !!(t = null == t ? Ve : t) && ("number" == typeof e || nt.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function ve(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }

                        function pe(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || pt)
                        }

                        function _e(e) {
                            if (null != e) {
                                try {
                                    return _t.call(e)
                                } catch (e) {
                                }
                                try {
                                    return e + ""
                                } catch (e) {
                                }
                            }
                            return ""
                        }

                        function Ee(e, t) {
                            return e === t || e !== e && t !== t
                        }

                        function Ne(e) {
                            return he(e) && Et.call(e, "callee") && (!gt.call(e, "callee") || Nt.call(e) == Ue)
                        }

                        function Pe(e) {
                            return null != e && Me(Rt(e)) && !me(e)
                        }

                        function he(e) {
                            return ke(e) && Pe(e)
                        }

                        function me(e) {
                            var t = ye(e) ? Nt.call(e) : "";
                            return t == we || t == $e
                        }

                        function Me(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Ve
                        }

                        function ye(e) {
                            var t = typeof e;
                            return !!e && ("object" == t || "function" == t)
                        }

                        function ke(e) {
                            return !!e && "object" == typeof e
                        }

                        function ge(e) {
                            return !!ye(e) && (me(e) || c(e) ? Pt : tt).test(_e(e))
                        }

                        function be(e) {
                            return "string" == typeof e || !Lt(e) && ke(e) && Nt.call(e) == We
                        }

                        function Ie(e) {
                            var t = pe(e);
                            if (!t && !Pe(e))return z(e);
                            var n = le(e), r = !!n, o = n || [], i = o.length;
                            for (var a in e)!B(e, a) || r && ("length" == a || fe(a, i)) || t && "constructor" == a || o.push(a);
                            return o
                        }

                        var Ae = 200, Se = "__lodash_hash_undefined__", Ve = 9007199254740991,
                            Ue = "[object Arguments]", Oe = "[object Boolean]", je = "[object Date]",
                            we = "[object Function]", $e = "[object GeneratorFunction]", De = "[object Map]",
                            Ce = "[object Number]", Te = "[object Object]", xe = "[object RegExp]", Fe = "[object Set]",
                            We = "[object String]", Re = "[object Symbol]", Le = "[object ArrayBuffer]",
                            Be = "[object DataView]", ze = "[object Float32Array]", qe = "[object Float64Array]",
                            Ye = "[object Int8Array]", Je = "[object Int16Array]", Ge = "[object Int32Array]",
                            He = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", Xe = "[object Uint16Array]",
                            Qe = "[object Uint32Array]", Ze = /[\\^$.*+?()[\]{}|]/g, et = /\w*$/,
                            tt = /^\[object .+?Constructor\]$/, nt = /^(?:0|[1-9]\d*)$/, rt = {};
                        rt[Ue] = rt["[object Array]"] = rt[Le] = rt[Be] = rt[Oe] = rt[je] = rt[ze] = rt[qe] = rt[Ye] = rt[Je] = rt[Ge] = rt[De] = rt[Ce] = rt[Te] = rt[xe] = rt[Fe] = rt[We] = rt[Re] = rt[He] = rt[Ke] = rt[Xe] = rt[Qe] = !0, rt["[object Error]"] = rt[we] = rt["[object WeakMap]"] = !1;
                        var ot = {function: !0, object: !0}, it = ot[typeof t] && t && !t.nodeType ? t : void 0,
                            at = ot[typeof e] && e && !e.nodeType ? e : void 0,
                            st = at && at.exports === it ? it : void 0, dt = u(it && at && "object" == typeof n && n),
                            ut = u(ot[typeof self] && self), ct = u(ot[typeof window] && window),
                            lt = u(ot[typeof this] && this),
                            ft = dt || ct !== (lt && lt.window) && ct || ut || lt || Function("return this")(),
                            vt = Array.prototype, pt = Object.prototype, _t = Function.prototype.toString,
                            Et = pt.hasOwnProperty, Nt = pt.toString,
                            Pt = RegExp("^" + _t.call(Et).replace(Ze, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            ht = st ? ft.Buffer : void 0, mt = ft.Symbol, Mt = ft.Uint8Array,
                            yt = Object.getOwnPropertySymbols, kt = Object.create, gt = pt.propertyIsEnumerable,
                            bt = vt.splice, It = Object.getPrototypeOf, At = Object.keys, St = oe(ft, "DataView"),
                            Vt = oe(ft, "Map"), Ut = oe(ft, "Promise"), Ot = oe(ft, "Set"), jt = oe(ft, "WeakMap"),
                            wt = oe(Object, "create"), $t = _e(St), Dt = _e(Vt), Ct = _e(Ut), Tt = _e(Ot), xt = _e(jt),
                            Ft = mt ? mt.prototype : void 0, Wt = Ft ? Ft.valueOf : void 0;
                        v.prototype.clear = p, v.prototype.delete = _, v.prototype.get = E, v.prototype.has = N, v.prototype.set = P, h.prototype.clear = m, h.prototype.delete = M, h.prototype.get = y, h.prototype.has = k, h.prototype.set = g, b.prototype.clear = I, b.prototype.delete = A, b.prototype.get = S, b.prototype.has = V, b.prototype.set = U, O.prototype.clear = j, O.prototype.delete = w, O.prototype.get = $, O.prototype.has = D, O.prototype.set = C;
                        var Rt = function (e) {
                            return function (e) {
                                return null == e ? void 0 : e.length
                            }
                        }();
                        yt || (ae = function () {
                            return []
                        }), (St && se(new St(new ArrayBuffer(1))) != Be || Vt && se(new Vt) != De || Ut && "[object Promise]" != se(Ut.resolve()) || Ot && se(new Ot) != Fe || jt && "[object WeakMap]" != se(new jt)) && (se = function (e) {
                            var t = Nt.call(e), n = t == Te ? e.constructor : void 0, r = n ? _e(n) : void 0;
                            if (r)switch (r) {
                                case $t:
                                    return Be;
                                case Dt:
                                    return De;
                                case Ct:
                                    return "[object Promise]";
                                case Tt:
                                    return Fe;
                                case xt:
                                    return "[object WeakMap]"
                            }
                            return t
                        });
                        var Lt = Array.isArray, Bt = ht ? function (e) {
                            return e instanceof ht
                        } : function (e) {
                            return function () {
                                return !1
                            }
                        }();
                        e.exports = W
                    }).call(t, n(577)(e), n(4))
                }, 573: function (e, t, n) {
                    function r(e, t, n) {
                        var r = e[t];
                        m.call(e, t) && d(r, n) && (void 0 !== n || t in e) || (e[t] = n)
                    }

                    function o(e, t, n, o) {
                        n || (n = {});
                        for (var i = -1, a = t.length; ++i < a;) {
                            var s = t[i];
                            r(n, s, o ? o(n[s], e[s], s, n, e) : e[s])
                        }
                        return n
                    }

                    function i(e, t) {
                        return !!(t = null == t ? _ : t) && ("number" == typeof e || P.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }

                    function a(e, t, n) {
                        if (!f(n))return !1;
                        var r = typeof t;
                        return !!("number" == r ? u(n) && i(t, n.length) : "string" == r && t in n) && d(n[t], e)
                    }

                    function s(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || h)
                    }

                    function d(e, t) {
                        return e === t || e !== e && t !== t
                    }

                    function u(e) {
                        return null != e && l(g(e)) && !c(e)
                    }

                    function c(e) {
                        var t = f(e) ? M.call(e) : "";
                        return t == E || t == N
                    }

                    function l(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= _
                    }

                    function f(e) {
                        var t = typeof e;
                        return !!e && ("object" == t || "function" == t)
                    }

                    var v = n(575), p = n(576), _ = 9007199254740991, E = "[object Function]",
                        N = "[object GeneratorFunction]", P = /^(?:0|[1-9]\d*)$/, h = Object.prototype,
                        m = h.hasOwnProperty, M = h.toString, y = h.propertyIsEnumerable,
                        k = !y.call({valueOf: 1}, "valueOf"), g = function (e) {
                            return function (e) {
                                return null == e ? void 0 : e.length
                            }
                        }(), b = function (e) {
                            return p(function (t, n) {
                                var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
                                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && a(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                                    var d = n[r];
                                    d && e(t, d)
                                }
                                return t
                            })
                        }(function (e, t) {
                            if (k || s(t) || u(t))return void o(t, v(t), e);
                            for (var n in t)m.call(t, n) && r(e, n, t[n])
                        });
                    e.exports = b
                }, 574: function (e, t, n) {
                    function r(e) {
                        return o(e, !0, !0)
                    }

                    var o = n(572);
                    e.exports = r
                }, 575: function (e, t) {
                    function n(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
                        return r
                    }

                    function r(e, t) {
                        var r = b(e) || s(e) ? n(e.length, String) : [], o = r.length, a = !!o;
                        for (var d in e)!t && !M.call(e, d) || a && ("length" == d || i(d, o)) || r.push(d);
                        return r
                    }

                    function o(e) {
                        if (!a(e))return g(e);
                        var t = [];
                        for (var n in Object(e))M.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }

                    function i(e, t) {
                        return !!(t = null == t ? _ : t) && ("number" == typeof e || h.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }

                    function a(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || m)
                    }

                    function s(e) {
                        return u(e) && M.call(e, "callee") && (!k.call(e, "callee") || y.call(e) == E)
                    }

                    function d(e) {
                        return null != e && l(e.length) && !c(e)
                    }

                    function u(e) {
                        return v(e) && d(e)
                    }

                    function c(e) {
                        var t = f(e) ? y.call(e) : "";
                        return t == N || t == P
                    }

                    function l(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= _
                    }

                    function f(e) {
                        var t = typeof e;
                        return !!e && ("object" == t || "function" == t)
                    }

                    function v(e) {
                        return !!e && "object" == typeof e
                    }

                    function p(e) {
                        return d(e) ? r(e) : o(e)
                    }

                    var _ = 9007199254740991, E = "[object Arguments]", N = "[object Function]",
                        P = "[object GeneratorFunction]", h = /^(?:0|[1-9]\d*)$/, m = Object.prototype,
                        M = m.hasOwnProperty, y = m.toString, k = m.propertyIsEnumerable, g = function (e, t) {
                            return function (n) {
                                return e(t(n))
                            }
                        }(Object.keys, Object), b = Array.isArray;
                    e.exports = p
                }, 576: function (e, t) {
                    function n(e, t, n) {
                        switch (n.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, n[0]);
                            case 2:
                                return e.call(t, n[0], n[1]);
                            case 3:
                                return e.call(t, n[0], n[1], n[2])
                        }
                        return e.apply(t, n)
                    }

                    function r(e, t) {
                        return t = k(void 0 === t ? e.length - 1 : t, 0), function () {
                            for (var r = arguments, o = -1, i = k(r.length - t, 0), a = Array(i); ++o < i;)a[o] = r[t + o];
                            o = -1;
                            for (var s = Array(t + 1); ++o < t;)s[o] = r[o];
                            return s[t] = a, n(e, this, s)
                        }
                    }

                    function o(e, t) {
                        if ("function" != typeof e)throw new TypeError(l);
                        return t = void 0 === t ? t : u(t), r(e, t)
                    }

                    function i(e) {
                        var t = typeof e;
                        return !!e && ("object" == t || "function" == t)
                    }

                    function a(e) {
                        return !!e && "object" == typeof e
                    }

                    function s(e) {
                        return "symbol" == typeof e || a(e) && y.call(e) == _
                    }

                    function d(e) {
                        return e ? (e = c(e)) === f || e === -f ? (e < 0 ? -1 : 1) * v : e === e ? e : 0 : 0 === e ? e : 0
                    }

                    function u(e) {
                        var t = d(e), n = t % 1;
                        return t === t ? n ? t - n : t : 0
                    }

                    function c(e) {
                        if ("number" == typeof e)return e;
                        if (s(e))return p;
                        if (i(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = i(t) ? t + "" : t
                        }
                        if ("string" != typeof e)return 0 === e ? e : +e;
                        e = e.replace(E, "");
                        var n = P.test(e);
                        return n || h.test(e) ? m(e.slice(2), n ? 2 : 8) : N.test(e) ? p : +e
                    }

                    var l = "Expected a function", f = 1 / 0, v = 1.7976931348623157e308, p = NaN,
                        _ = "[object Symbol]", E = /^\s+|\s+$/g, N = /^[-+]0x[0-9a-f]+$/i, P = /^0b[01]+$/i,
                        h = /^0o[0-7]+$/i, m = parseInt, M = Object.prototype, y = M.toString, k = Math.max;
                    e.exports = o
                }, 577: function (e, t) {
                    e.exports = function (e) {
                        return e.webpackPolyfill || (e.deprecate = function () {
                        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return e.l
                            }
                        }), Object.defineProperty(e, "id", {
                            enumerable: !0, get: function () {
                                return e.i
                            }
                        }), e.webpackPolyfill = 1), e
                    }
                }, 579: function (e, t, n) {
                    e.exports = n(179)
                }
            })
        })
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t) {
            return new Promise(function (n, r) {
                dd.dtBridge({
                    m: e, args: t, onSuccess: function (e) {
                        "function" == typeof t.onSuccess && t.onSuccess(e), n(e)
                    }, onFail: function (e) {
                        "function" == typeof t.onFail && t.onFail(e), r(e)
                    }
                })
            })
        };
        t.default = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.requireModule = function (e) {
            return "undefined" != typeof __weex_require__ ? __weex_require__("@weex-module/" + e) : "undefined" != typeof weex ? weex.requireModule(e) : void 0
        }, t.iosWeexBridge = function () {
            return Promise.resolve(function (e, n) {
                return new Promise(function (r, o) {
                    var i = t.requireModule("nuvajs-exec"), a = e.split("."), s = a.pop(), d = a.join(".");
                    i.exec({plugin: d, action: s, args: n}, function (e) {
                        e && "0" === e.errorCode ? ("function" == typeof n.onSuccess && n.onSuccess(e.result), r(e.result)) : ("function" == typeof n.onFail && n.onFail(e.result), o(e.result))
                    })
                })
            })
        }, t.androidWeexBridge = function () {
            return Promise.resolve(function (e, n) {
                return new Promise(function (r, o) {
                    var i = t.requireModule("nuvajs-exec"), a = e.split("."), s = a.pop(), d = a.join(".");
                    i.exec({plugin: d, action: s, args: n}, function (e) {
                        var t = {};
                        try {
                            if (e && e.__message__)if ("object" == typeof e.__message__) t = e.__message__; else try {
                                t = JSON.parse(e.__message__)
                            } catch (n) {
                                "string" == typeof e.__message__ && (t = e.__message__)
                            }
                        } catch (e) {
                        }
                        e && 1 === parseInt(e.__status__ + "", 10) ? ("function" == typeof n.onSuccess && n.onSuccess(t), r(t)) : ("function" == typeof n.onFail && n.onFail(t), o(t))
                    })
                })
            })
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.on = function (e, t) {
            document.addEventListener(e, t)
        }, t.off = function (e, t) {
            document.removeEventListener(e, t)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
        }, o = function (e, t) {
            return new Promise(function (n, o) {
                var i = t.onSuccess || r, a = t.onFail || r;
                if (delete t.onSuccess, delete t.onFail, AlipayJSBridge) {
                    var s = e.split("."), d = s.pop() || "", u = s.join(".");
                    AlipayJSBridge.call.apply(null, ["webDdExec", {
                        serviceName: u,
                        actionName: d,
                        args: t
                    }, function (e) {
                        var t = {}, r = e.content;
                        if (r)try {
                            t = JSON.parse(r)
                        } catch (e) {
                            console.error("parse dt api result error", r, e)
                        }
                        e.success ? (i.apply(null, [t]), n(t)) : (a.apply(null, [t]), o(t))
                    }])
                } else {
                    var c = new Error("Fatal error, cannot find bridge ,current env is WebView in MiniApp");
                    a(c), o(c)
                }
            })
        };
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var r = this;
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(6);
        t.on = function (e, t) {
            o.requireModule("globalEvent").addEventListener(e, function (e) {
                var n = {
                    preventDefault: function () {
                        throw new Error("does not support preventDefault")
                    }, detail: e
                };
                t.call(r, n)
            })
        }, t.off = function (e, t) {
            o.requireModule("globalEvent").removeEventListener(e, t)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.RUNTIME = {
            WEB: "Web",
            WEEX: "Weex",
            UNKNOWN: "Unknown"
        }, t.PLATFORM = {
            MAC: "Mac",
            WINDOWS: "Windows",
            IOS: "iOS",
            ANDROID: "Android",
            IPAD: "iPad",
            BROWSER: "Browser",
            UNKNOWN: "Unknown"
        }, t.FRAMEWORK = {VUE: "Vue", RAX: "Rax", UNKNOWN: "Unknown"}
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.alipay.pay";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.pay$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.calendar.chooseDateTime";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o[i.ENV_ENUM.android] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o)), t.chooseDateTime$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.calendar.chooseHalfDay";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o[i.ENV_ENUM.android] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o)), t.chooseHalfDay$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.calendar.chooseInterval";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o[i.ENV_ENUM.android] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o)), t.chooseInterval$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.calendar.chooseOneDay";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o[i.ENV_ENUM.android] = {
            vs: "3.5.0",
            paramsDeal: a.addDefaultCorpIdParamsDeal
        }, o)), t.chooseOneDay$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.chat.chooseConversationByCorpId", d = a.genDefaultParamsDealFn({max: 50});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.6.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.6.0", paramsDeal: d}, o)), t.chooseConversationByCorpId$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.chat.locationChatMessage";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.7.6"}, o[i.ENV_ENUM.android] = {vs: "2.7.6"}, o)), t.locationChatMessage$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.chat.openSingleChat";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.4.10"}, o[i.ENV_ENUM.android] = {vs: "3.4.10"}, o)), t.openSingleChat$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.chat.pickConversation";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.2"}, o[i.ENV_ENUM.android] = {vs: "2.4.2"}, o)), t.pickConversation$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.chat.sendEmotion";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.6.12"}, o[i.ENV_ENUM.android] = {vs: "4.6.12"}, o)), t.sendEmotion$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.chat.toConversation";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.toConversation$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.clipboardData.setData";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.7.0"}, o[i.ENV_ENUM.android] = {vs: "2.7.0"}, o[i.ENV_ENUM.pc] = {vs: "4.6.1"}, o)), t.setData$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.contact.choose",
            d = a.genDefaultParamsDealFn({multiple: !0, startWithDepartmentId: 0, users: []});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.choose$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.chooseMobileContacts";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.1"}, o[i.ENV_ENUM.android] = {vs: "3.1"}, o)), t.chooseMobileContacts$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.complexPicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.9.0"}, o[i.ENV_ENUM.android] = {vs: "2.9.0"}, o[i.ENV_ENUM.pc] = {vs: "4.3.5"}, o)), t.complexPicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.createGroup";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o[i.ENV_ENUM.pc] = {vs: "4.6.1"}, o)), t.createGroup$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.departmentsPicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "4.2.5"}, o[i.ENV_ENUM.ios] = {vs: "3.0"}, o[i.ENV_ENUM.android] = {vs: "3.0"}, o)), t.departmentsPicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.externalComplexPicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "3.0"}, o[i.ENV_ENUM.android] = {vs: "3.0"}, o)), t.externalComplexPicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.externalEditForm";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.0"}, o[i.ENV_ENUM.android] = {vs: "3.0"}, o)), t.externalEditForm$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.contact.setRule";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.15"}, o[i.ENV_ENUM.android] = {vs: "2.15"}, o)), t.setRule$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.cspace.chooseSpaceDir";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.5.6"}, o[i.ENV_ENUM.android] = {vs: "3.5.6"}, o)), t.chooseSpaceDir$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.cspace.delete";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.21"}, o[i.ENV_ENUM.android] = {vs: "4.5.21"}, o[i.ENV_ENUM.pc] = {vs: "4.5.21"}, o)), t.delete$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.cspace.preview";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.7.0"}, o[i.ENV_ENUM.android] = {vs: "2.7.0"}, o)), t.preview$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.cspace.saveFile";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.7.6"}, o[i.ENV_ENUM.android] = {vs: "2.7.6"}, o)), t.saveFile$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.customContact.choose",
            d = a.genDefaultParamsDealFn({isShowCompanyName: !1, max: 50});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.5.2",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.5.2", paramsDeal: d}, o)), t.choose$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.customContact.multipleChoose",
            d = a.genDefaultParamsDealFn({isShowCompanyName: !1, max: 50});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.multipleChoose$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.ding.create";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "3.5.1", resultDeal: function (e) {
                return "" === e ? e = {dingCreateResult: !1} : "object" == typeof e && (e.dingCreateResult = !!e.dingCreateResult), e
            }
        }, o[i.ENV_ENUM.android] = {vs: "3.5.1"}, o[i.ENV_ENUM.pc] = {vs: "4.5.9"}, o)), t.create$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.ding.post";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.post$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.event.notifyWeex";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.0"}, o)), t.notifyWeex$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.intent.fetchData";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.7.6"}, o[i.ENV_ENUM.android] = {vs: "2.7.6"}, o)), t.fetchData$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.map.locate";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.locate$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.map.search", d = a.genDefaultParamsDealFn({scope: 500});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.search$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.map.view";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.view$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.microApp.openApp";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.6"}, o[i.ENV_ENUM.android] = {vs: "4.5.6"}, o)), t.openApp$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.close";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o[i.ENV_ENUM.pc] = {vs: "4.3.5"}, o)), t.close$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.goBack";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.goBack$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.hideBar";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.5.6"}, o[i.ENV_ENUM.android] = {vs: "3.5.6"}, o)), t.hideBar$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.quit";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.quit$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.replace";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.4.6"}, o[i.ENV_ENUM.android] = {vs: "3.4.6"}, o)), t.replace$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.navigation.setIcon",
            d = a.genDefaultParamsDealFn({watch: !0, showIcon: !0, iconIndex: 1});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.setIcon$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.navigation.setLeft",
            d = a.genDefaultParamsDealFn({watch: !0, show: !0, control: !1, showIcon: !0, text: ""});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.setLeft$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.navigation.setMenu";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.6.0",
            paramsDeal: a.addWatchParamsDeal
        }, o[i.ENV_ENUM.android] = {vs: "2.6.0", paramsDeal: a.addWatchParamsDeal}, o)), t.setMenu$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.navigation.setRight",
            d = a.genDefaultParamsDealFn({watch: !0, show: !0, control: !1, showIcon: !0, text: ""});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.setRight$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.navigation.setTitle";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.setTitle$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.store.closeUnpayOrder";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.android] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.pc] = {
            vs: "4.5.3",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o)), t.closeUnpayOrder$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.store.createOrder";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.android] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.pc] = {
            vs: "4.5.3",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o)), t.createOrder$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.store.getPayUrl";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.android] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.pc] = {vs: "4.5.3", paramsDeal: a.genBizStoreParamsDealFn}, o)), t.getPayUrl$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.store.inquiry";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.android] = {
            vs: "4.3.7",
            paramsDeal: a.genBizStoreParamsDealFn
        }, o[i.ENV_ENUM.pc] = {vs: "4.5.3", paramsDeal: a.genBizStoreParamsDealFn}, o)), t.inquiry$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.telephone.call";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.call$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.telephone.checkBizCall";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "4.0.0"}, o[i.ENV_ENUM.ios] = {vs: "3.5.6"}, o[i.ENV_ENUM.android] = {vs: "3.5.6"}, o)), t.checkBizCall$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.telephone.quickCallList";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.5.6"}, o[i.ENV_ENUM.ios] = {vs: "3.5.6"}, o[i.ENV_ENUM.android] = {vs: "3.5.6"}, o)), t.quickCallList$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.telephone.showCallMenu";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.showCallMenu$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.user.checkPassword";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.8"}, o[i.ENV_ENUM.android] = {vs: "4.5.8"}, o)), t.checkPassword$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.user.get";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.get$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.chosen";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.chosen$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.datepicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.datepicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.datetimepicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.datetimepicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.decrypt";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.9.1"}, o[i.ENV_ENUM.android] = {vs: "2.9.1"}, o)), t.decrypt$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.downloadFile";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.downloadFile$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.encrypt";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.9.1"}, o[i.ENV_ENUM.android] = {vs: "2.9.1"}, o)), t.encrypt$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.isLocalFileExist";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.isLocalFileExist$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.multiSelect";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.0.0"}, o[i.ENV_ENUM.android] = {vs: "3.0.0"}, o)), t.multiSelect$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.open";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.7.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.open$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.util.openLink",
            d = a.genDefaultParamsDealFn({credible: !0, showMenuBar: !0});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.7.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.openLink$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.openLocalFile";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.openLocalFile$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.openModal";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.openModal$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.openSlidePanel";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o)), t.openSlidePanel$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.presentWindow";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.presentWindow$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.previewImage";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.7.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.previewImage$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.previewVideo";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.3.7"}, o[i.ENV_ENUM.android] = {vs: "4.3.7"}, o)), t.previewVideo$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.util.scan", d = a.genDefaultParamsDealFn({type: "qrCode"});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.scan$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.scanCard";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.scanCard$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.setScreenBrightnessAndKeepOn";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.3.3"}, o[i.ENV_ENUM.android] = {vs: "4.3.3"}, o)), t.setScreenBrightnessAndKeepOn$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.util.share", d = a.genDefaultParamsDealFn({title: "", buttonName: "纭畾"});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.share$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.systemShare";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.11"}, o[i.ENV_ENUM.android] = {vs: "4.5.11"}, o)), t.systemShare$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.timepicker";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.timepicker$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.uploadAttachment";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.7.0"}, o[i.ENV_ENUM.android] = {vs: "2.7.0"}, o)), t.uploadAttachment$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "biz.util.uploadImage", d = a.genDefaultParamsDealFn({multiple: !1});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.uploadImage$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.uploadImageFromCamera";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.uploadImageFromCamera$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.util.ut", s = function (e) {
            var t = Object.assign({}, e), n = t.value, r = [];
            if (n && "object" == typeof n) {
                for (var o in n)n[o] && r.push(o + "=" + n[o]);
                n = r.join(",")
            }
            return t.value = n || "", t
        };
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.5.0", paramsDeal: s}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: function (e) {
                var t = Object.assign({}, e), n = t.value;
                return n && "object" == typeof n && (n = JSON.stringify(n)), t.value = n, t
            }
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: s}, o)), t.ut$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.verify.openBindIDCard";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.21"}, o[i.ENV_ENUM.android] = {vs: "4.5.21"}, o)), t.openBindIDCard$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "biz.verify.startAuth";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.5.21"}, o[i.ENV_ENUM.android] = {vs: "4.5.21"}, o)), t.startAuth$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "channel.permission.requestAuthCode";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.0.0"}, o[i.ENV_ENUM.android] = {vs: "3.0.0"}, o)), t.requestAuthCode$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.accelerometer.clearShake";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.clearShake$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.accelerometer.watchShake";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0", paramsDeal: function (e) {
                return a.forceChangeParamsDealFn({sensitivity: 3.2})(a.addWatchParamsDeal(e))
            }
        }, o[i.ENV_ENUM.android] = {
            vs: "2.4.0",
            paramsDeal: a.addWatchParamsDeal
        }, o)), t.watchShake$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.download";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.download$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.onPlayEnd";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.onPlayEnd$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.onRecordEnd";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.onRecordEnd$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.pause";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.pause$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.play";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.play$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.resume";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.resume$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.startRecord";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.startRecord$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.stop";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.stop$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.stopRecord";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.stopRecord$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.audio.translateVoice";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.8.0"}, o[i.ENV_ENUM.android] = {vs: "2.8.0"}, o)), t.translateVoice$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.base.getInterface";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.getInterface$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.base.getPhoneInfo";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.5.0"}, o[i.ENV_ENUM.android] = {vs: "3.5.0"}, o)), t.getPhoneInfo$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.base.getUUID";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.getUUID$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.base.getWifiStatus";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.11.0"}, o[i.ENV_ENUM.android] = {vs: "2.11.0"}, o)), t.getWifiStatus$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.connection.getNetworkType";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.getNetworkType$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.geolocation.get";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.get$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.geolocation.start";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.4.7"}, o[i.ENV_ENUM.android] = {vs: "3.4.7"}, o)), t.start$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.geolocation.status";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.4.8"}, o[i.ENV_ENUM.android] = {vs: "3.4.8"}, o)), t.status$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.geolocation.stop";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "3.4.7"}, o[i.ENV_ENUM.android] = {vs: "3.4.7"}, o)), t.stop$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.launcher.checkInstalledApps";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.checkInstalledApps$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.launcher.launchApp";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.launchApp$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.nfc.nfcRead";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.11.0"}, o[i.ENV_ENUM.android] = {vs: "2.11.0"}, o)), t.nfcRead$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.nfc.nfcStop";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.3.9"}, o[i.ENV_ENUM.android] = {vs: "4.3.9"}, o)), t.nfcStop$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.nfc.nfcWrite";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.11.0"}, o[i.ENV_ENUM.android] = {vs: "2.11.0"}, o)), t.nfcWrite$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.notification.actionSheet";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "3.0.0"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.actionSheet$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.alert",
            d = a.genDefaultParamsDealFn({title: "", buttonName: "纭畾"});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.alert$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.confirm",
            d = a.genDefaultParamsDealFn({title: "", buttonLabels: ["纭畾", "鍙栨秷"]});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.5.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.confirm$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.notification.extendModal";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.5.0"}, o[i.ENV_ENUM.android] = {vs: "2.5.0"}, o)), t.extendModal$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.notification.hidePreloader";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.hidePreloader$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.notification.modal";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {vs: "4.2.5"}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.modal$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.prompt",
            d = a.genDefaultParamsDealFn({title: "", buttonLabels: ["纭畾", "鍙栨秷"]});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {vs: "2.7.0"}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.prompt$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.showPreloader",
            d = a.genDefaultParamsDealFn({text: "鍔犺浇涓�...", showIcon: !0});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.showPreloader$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.toast",
            d = a.genDefaultParamsDealFn({text: "toast", duration: 3, delay: 0});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.pc] = {
            vs: "2.5.0", paramsDeal: function (e) {
                return e.icon && !e.type && ("success" === e.icon ? e.type = "success" : "error" === e.icon && (e.type = "error")), e
            }
        }, o[i.ENV_ENUM.ios] = {vs: "2.4.0", paramsDeal: d}, o[i.ENV_ENUM.android] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o)), t.toast$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "device.notification.vibrate", d = a.genDefaultParamsDealFn({duration: 300});
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: d
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: d}, o)), t.vibrate$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.screen.insetAdjust";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "4.6.18"}, o)), t.insetAdjust$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.screen.resetView";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.android] = {vs: "4.0.0"}, o[i.ENV_ENUM.ios] = {vs: "4.0.0"}, o)), t.resetView$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "device.screen.rotateView";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.android] = {vs: "4.0.0"}, o[i.ENV_ENUM.ios] = {vs: "4.0.0"}, o)), t.rotateView$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "net.bjGovApn.loginGovNet";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.android] = {vs: "4.5.16"}, o)), t.loginGovNet$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "runtime.message.fetch";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.fetch$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "runtime.message.post";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.post$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "runtime.permission.requestAuthCode", s = function (e) {
            return Object.assign(e, {url: location.href.split("#")[0]})
        };
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {
            vs: "3.0.0",
            paramsDeal: s
        }, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.requestAuthCode$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "runtime.permission.requestOperateAuthCode", s = function (e) {
            return Object.assign(e, {url: location.href.split("#")[0]})
        };
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.pc] = {
            vs: "3.3.0",
            paramsDeal: s
        }, o[i.ENV_ENUM.ios] = {vs: "3.3.0"}, o[i.ENV_ENUM.android] = {vs: "3.3.0"}, o)), t.requestOperateAuthCode$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.input.plain";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.plain$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.nav.close";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.close$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.nav.getCurrentId";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.getCurrentId$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.nav.go";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.go$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.nav.preload";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.preload$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.nav.recycle";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.6.0"}, o[i.ENV_ENUM.android] = {vs: "2.6.0"}, o)), t.recycle$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.progressBar.setColors";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.setColors$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.pullToRefresh.disable";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.disable$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(s, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = n(1), s = "ui.pullToRefresh.enable";
        i.ddSdk.setAPI(s, (o = {}, o[i.ENV_ENUM.ios] = {
            vs: "2.4.0",
            paramsDeal: a.addWatchParamsDeal
        }, o[i.ENV_ENUM.android] = {vs: "2.4.0", paramsDeal: a.addWatchParamsDeal}, o)), t.enable$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.pullToRefresh.stop";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.stop$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.webViewBounce.disable";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.disable$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "ui.webViewBounce.enable";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.4.0"}, o[i.ENV_ENUM.android] = {vs: "2.4.0"}, o)), t.enable$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "util.domainStorage.getItem";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.9.0"}, o[i.ENV_ENUM.android] = {vs: "2.9.0"}, o)), t.getItem$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "util.domainStorage.removeItem";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.9.0"}, o[i.ENV_ENUM.android] = {vs: "2.9.0"}, o)), t.removeItem$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return i.ddSdk.invokeAPI(a, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o, i = n(0), a = "util.domainStorage.setItem";
        i.ddSdk.setAPI(a, (o = {}, o[i.ENV_ENUM.ios] = {vs: "2.9.0"}, o[i.ENV_ENUM.android] = {vs: "2.9.0"}, o[i.ENV_ENUM.pc] = {vs: "4.6.9"}, o)), t.setItem$ = r, t.default = r
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = n(161), i = Object.assign({}, o, r.ddSdk.getExportSdk());
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(154);
        n(171), e.exports = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r;
        t.h5AndroidbridgeInit = function () {
            return r || (r = new Promise(function (e, t) {
                var n = function () {
                    try {
                        window.WebViewJavascriptBridgeAndroid = window.nuva && window.nuva.require(), e()
                    } catch (e) {
                        t(e)
                    }
                };
                window.nuva && (void 0 === window.nuva.isReady || window.nuva.isReady) ? n() : document.addEventListener("runtimeready", function () {
                    n()
                }, !1)
            })), r
        };
        var o = function (e, n) {
            return r || (r = t.h5AndroidbridgeInit()), r.then(function () {
                return new Promise(function (t, r) {
                    var o = e.split("."), i = o.pop() || "", a = o.join("."), s = function (e) {
                        "function" == typeof n.onSuccess && n.onSuccess(e), t(e)
                    }, d = function (e) {
                        "function" == typeof n.onFail && n.onFail(e), r(e)
                    };
                    "function" == typeof window.WebViewJavascriptBridgeAndroid && window.WebViewJavascriptBridgeAndroid(s, d, a, i, n)
                })
            })
        };
        t.default = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r;
        t.h5IosBridgeInit = function () {
            return r || (r = new Promise(function (e, t) {
                if ("undefined" != typeof WebViewJavascriptBridge) {
                    try {
                        WebViewJavascriptBridge.init(function (e, t) {
                        })
                    } catch (e) {
                        return t()
                    }
                    return e()
                }
                document.addEventListener("WebViewJavascriptBridgeReady", function () {
                    if ("undefined" == typeof WebViewJavascriptBridge)return t();
                    try {
                        WebViewJavascriptBridge.init(function (e, t) {
                        })
                    } catch (e) {
                        return t()
                    }
                    return e()
                }, !1)
            })), r
        };
        var o = function (e, n) {
            return r || (r = t.h5IosBridgeInit()), r.then(function () {
                var t = Object.assign({}, n);
                return new Promise(function (n, r) {
                    if (!0 === t.watch) {
                        var o = t.onSuccess;
                        delete t.onSuccess, "undefined" != typeof WebViewJavascriptBridge && WebViewJavascriptBridge.registerHandler(e, function (e, t) {
                            "function" == typeof o && o.call(null, e), t && t({errorCode: "0", errorMessage: "success"})
                        })
                    }
                    void 0 !== window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler(e, Object.assign({}, t), function (e) {
                        var o = e || {};
                        "0" === o.errorCode ? ("function" == typeof t.onSuccess && t.onSuccess.call(null, o.result), n(o.result)) : ("-1" === o.errorCode ? "function" == typeof t.onCancel && t.onCancel.call(null, o.result, o.errorCode) : "function" == typeof t.onFail && t.onFail.call(null, o.result, o.errorCode), r(o.result))
                    })
                })
            })
        };
        t.default = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.h5PcBridgeInit = function () {
            return Promise.resolve(n(4))
        };
        var r = function (e, t) {
            return new Promise(function (r, o) {
                return n(4).invokeAPI(e, t).result.then(function (e) {
                    return "function" == typeof t.onSuccess && t.onSuccess.call(null, e), r(e)
                }, function (e) {
                    return "function" == typeof t.onFail && t.onFail.call(null, e), o(e)
                })
            })
        };
        t.default = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.on = function (e, t) {
            n(4).addEventListener(e, t)
        }, t.off = function (e, t) {
            n(4).removeEventListener(e, t)
        }
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e = "00" + e, e.substring(e.length - 2, e.length)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.log = function (e) {
            console.log.apply(console, [r(e.time.getHours()) + ":" + r(e.time.getMinutes()) + ":" + r(e.time.getSeconds())].concat(e.text))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(2), o = r.getENV();
        t.ios = o.platform === r.ENV_ENUM.ios, t.android = o.platform === r.ENV_ENUM.android, t.pc = o.platform === r.ENV_ENUM.pc, t.other = o.platform === r.ENV_ENUM.notInDingTalk, t.compareVersion = function (e, t, n) {
            function r(e) {
                return parseInt(e, 10) || 0
            }

            if ("string" != typeof e || "string" != typeof t)return !1;
            for (var o, i, a = e.split("-")[0].split(".").map(r), s = t.split("-")[0].split(".").map(r); o === i && s.length > 0;)o = a.shift(), i = s.shift();
            return n ? (i || 0) >= (o || 0) : (i || 0) > (o || 0)
        }, t.language = o.language, t.version = o.version
    }, function (e, t, n) {
        "use strict";
        function r(e, t, n) {
            var r = "Web" === n.platform, i = "iOS" === n.platform, a = "android" === n.platform, s = a || i,
                d = function () {
                    return r ? window.navigator.userAgent.toLowerCase() : ""
                }(), u = function () {
                    var e = {};
                    if (r) {
                        var t = window.name;
                        try {
                            var n = JSON.parse(t);
                            e.containerId = n.containerId, e.version = n.hostVersion, e.language = n.language || "*"
                        } catch (e) {
                        }
                    }
                    return e
                }(), c = function () {
                    return s ? "DingTalk" === n.appName || "com.alibaba.android.rimet" === n.appName : d.indexOf("dingtalk") > -1 || !!u.containerId
                }(), l = function () {
                    if (r) {
                        if (u.version)return u.version;
                        var e = d.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);
                        null === e && (e = d.match(/dingtalk\/([a-zA-Z0-9.-]+)/));
                        return e && e[1] || "Unknown"
                    }
                    return n.appVersion
                }(), f = !!u.containerId, v = /iphone|ipod|ios/.test(d), p = /ipad/.test(d), _ = d.indexOf("android") > -1,
                E = d.indexOf("mac") > -1 && f, N = d.indexOf("win") > -1 && f, P = !E && !N && f, h = f, m = "";
            return m = c ? v || i ? o.PLATFORM.IOS : _ || a ? o.PLATFORM.ANDROID : p ? o.PLATFORM.IPAD : E ? o.PLATFORM.MAC : N ? o.PLATFORM.WINDOWS : P ? o.PLATFORM.BROWSER : o.PLATFORM.UNKNOWN : o.PLATFORM.UNKNOWN, {
                isDingTalk: c,
                isWebiOS: v,
                isWebAndroid: _,
                isWeexiOS: i,
                isWeexAndroid: a,
                isDingTalkPCMac: E,
                isDingTalkPCWeb: P,
                isDingTalkPCWindows: N,
                isDingTalkPC: h,
                runtime: e,
                framework: t,
                platform: m,
                version: l
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(11);
        t.default = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(164), o = n(162), i = n(11), a = r.default().split("."), s = a[0], d = a[1], u = function () {
            var e = {};
            switch (d) {
                case i.FRAMEWORK.VUE:
                    var t = weex.config, n = t.env;
                    e.platform = n.platform, i.RUNTIME.WEEX === s && (e.appVersion = n.appVersion, e.appName = n.appName);
                    break;
                case i.FRAMEWORK.RAX:
                    i.RUNTIME.WEEX === s && (e.platform = navigator.platform, e.appName = navigator.appName, e.appVersion = navigator.appVersion);
                    break;
                case i.FRAMEWORK.UNKNOWN:
                    i.RUNTIME.WEB === s && (e.platform = i.RUNTIME.WEB), i.RUNTIME.UNKNOWN === s && (e.platform = i.RUNTIME.UNKNOWN)
            }
            return e
        }(), c = o.default(s, d, u);
        t.default = c
    }, function (e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = e.length, r = 0, o = !0; r < n; r++)if (!t[e[r]]) {
                o = !1;
                break
            }
            return o
        }

        function o() {
            return i && a ? r(c, weex) ? "Web.Vue" : "Web.Unknown" : !i && a ? r(c, weex) ? "Weex.Vue" : "Weex.Unknown" : i && s && !a ? r(d, window) ? "Weex.Rax" : "Weex.Unknown" : i && r(u, window) ? "Web.Unknown" : "Unknown.Unknown"
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = "undefined" != typeof window, a = "undefined" != typeof weex, s = "undefined" != typeof callNative,
            d = ["__weex_config__", "__weex_options__", "__weex_require__"],
            u = ["localStorage", "location", "navigator", "XMLHttpRequest"],
            c = ["config", "requireModule", "document"];
        t.default = o
    }, function (e, t, n) {
        "function" != typeof Promise && n(175)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n(165), n(167), n(168)
    }, function (e, t) {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (e, t) {
                "use strict";
                if (null == e)throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(e), r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (null != o)for (var i in o)Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
                }
                return n
            }, writable: !0, configurable: !0
        })
    }, function (e, t) {
        Object.keys || (Object.keys = function (e) {
            if (e !== Object(e))throw new TypeError("Object.keys called on a non-object");
            var t, n = [];
            for (t in e)Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            return n
        })
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return "function" == typeof e
        }

        function o(e, t) {
            function n(e) {
                return parseInt(e, 10) || 0
            }

            for (var r = e.split(".").map(n), o = t.split(".").map(n), i = 0; i < r.length; i++) {
                if (void 0 === o[i])return !1;
                if (r[i] < o[i])return !1;
                if (r[i] > o[i])return !0
            }
            return !0
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.isFunction = r, t.compareVersion = o;
        (function (e) {
            e.cancel = "-1", e.not_exist = "1", e.no_permission = "7", e.jsapi_internal_error = "22"
        })(t.ERROR_CODE || (t.ERROR_CODE = {}));
        (function (e) {
            e.pc = "pc", e.android = "android", e.ios = "ios", e.notInDingTalk = "notInDingTalk"
        })(t.ENV_ENUM || (t.ENV_ENUM = {}));
        (function (e) {
            e.WEB = "WEB", e.MINI_APP = "MINI_APP", e.WEEX = "WEEX", e.WEBVIEW_IN_MINIAPP = "WEBVIEW_IN_MINIAPP"
        })(t.APP_TYPE || (t.APP_TYPE = {}));
        (function (e) {
            e[e.INFO = 1] = "INFO", e[e.WARNING = 2] = "WARNING", e[e.ERROR = 3] = "ERROR"
        })(t.LogLevel || (t.LogLevel = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), o = n(2), i = n(3), a = n(5), s = n(9), d = n(156), u = n(6), c = n(8), l = n(10);
        r.ddSdk.setPlatform({
            platform: o.ENV_ENUM.android, bridgeInit: function () {
                var e = o.getENV();
                return e.appType === i.APP_TYPE.MINI_APP ? Promise.resolve(a.default) : e.appType === i.APP_TYPE.WEBVIEW_IN_MINIAPP ? Promise.resolve(s.default) : e.appType === i.APP_TYPE.WEEX ? u.androidWeexBridge() : d.h5AndroidbridgeInit().then(function () {
                    return d.default
                })
            }, authMethod: "runtime.permission.requestJsApis", event: {
                on: function (e, t) {
                    var n = o.getENV();
                    switch (n.appType) {
                        case i.APP_TYPE.WEB:
                            c.on(e, t);
                            break;
                        case i.APP_TYPE.WEEX:
                            l.on(e, t);
                            break;
                        default:
                            throw new Error("Not support global event in the platfrom: " + n.appType)
                    }
                }, off: function (e, t) {
                    var n = o.getENV();
                    switch (n.appType) {
                        case i.APP_TYPE.WEB:
                            c.off(e, t);
                            break;
                        case i.APP_TYPE.WEEX:
                            l.off(e, t);
                            break;
                        default:
                            throw new Error("Not support global event in the platfrom: " + n.appType)
                    }
                }
            }
        })
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n(173), n(170), n(172)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), o = n(2), i = n(3), a = n(5), s = n(9), d = n(157), u = n(6), c = n(8), l = n(10);
        r.ddSdk.setPlatform({
            platform: o.ENV_ENUM.ios, bridgeInit: function () {
                var e = o.getENV();
                return e.appType === i.APP_TYPE.MINI_APP ? Promise.resolve(a.default) : e.appType === i.APP_TYPE.WEBVIEW_IN_MINIAPP ? Promise.resolve(s.default) : e.appType === i.APP_TYPE.WEEX ? u.iosWeexBridge() : d.h5IosBridgeInit().then(function () {
                    return d.default
                })
            }, authMethod: "runtime.permission.requestJsApis", event: {
                on: function (e, t) {
                    var n = o.getENV();
                    switch (n.appType) {
                        case i.APP_TYPE.WEB:
                            c.on(e, t);
                            break;
                        case i.APP_TYPE.WEEX:
                            l.on(e, t);
                            break;
                        default:
                            throw new Error("Not support global event in the platfrom: " + n.appType)
                    }
                }, off: function (e, t) {
                    var n = o.getENV();
                    switch (n.appType) {
                        case i.APP_TYPE.WEB:
                            c.off(e, t);
                            break;
                        case i.APP_TYPE.WEEX:
                            l.off(e, t);
                            break;
                        default:
                            throw new Error("Not support global event in the platfrom: " + n.appType)
                    }
                }
            }
        })
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), o = n(2), i = n(158), a = n(5), s = n(3), d = n(159);
        r.ddSdk.setPlatform({
            platform: o.ENV_ENUM.pc, bridgeInit: function () {
                switch (o.getENV().appType) {
                    case s.APP_TYPE.MINI_APP:
                        return Promise.resolve(a.default);
                    default:
                        return i.h5PcBridgeInit().then(function () {
                            return i.default
                        })
                }
            }, authMethod: "config", authParamsDeal: function (e) {
                var t = Object.assign({}, e);
                return t.url = window.location.href.split("#")[0], t
            }, event: {
                on: function (e, t) {
                    if (o.getENV().appType === s.APP_TYPE.WEB)return d.on(e, t)
                }, off: function (e, t) {
                    if (o.getENV().appType === s.APP_TYPE.WEB)return d.off(e, t)
                }
            }
        })
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (c === setTimeout)return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout)return c = setTimeout, setTimeout(e, 0);
            try {
                return c(e, 0)
            } catch (t) {
                try {
                    return c.call(null, e, 0)
                } catch (t) {
                    return c.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (l === clearTimeout)return clearTimeout(e);
            if ((l === r || !l) && clearTimeout)return l = clearTimeout, clearTimeout(e);
            try {
                return l(e)
            } catch (t) {
                try {
                    return l.call(null, e)
                } catch (t) {
                    return l.call(this, e)
                }
            }
        }

        function a() {
            _ && v && (_ = !1, v.length ? p = v.concat(p) : E = -1, p.length && s())
        }

        function s() {
            if (!_) {
                var e = o(a);
                _ = !0;
                for (var t = p.length; t;) {
                    for (v = p, p = []; ++E < t;)v && v[E].run();
                    E = -1, t = p.length
                }
                v = null, _ = !1, i(e)
            }
        }

        function d(e, t) {
            this.fun = e, this.array = t
        }

        function u() {
        }

        var c, l, f = e.exports = {};
        (function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                c = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                l = r
            }
        })();
        var v, p = [], _ = !1, E = -1;
        f.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            p.push(new d(e, t)), 1 !== p.length || _ || o(s)
        }, d.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (e) {
            return []
        }, f.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function () {
            return "/"
        }, f.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        (function (e, t) {
            (function (e, t) {
                t()
            })(0, function () {
                "use strict";
                function n() {
                }

                function r(e, t) {
                    return function () {
                        e.apply(t, arguments)
                    }
                }

                function o(e) {
                    if (!(this instanceof o))throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                }

                function i(e, t) {
                    for (; 3 === e._state;)e = e._value;
                    if (0 === e._state)return void e._deferreds.push(t);
                    e._handled = !0, o._immediateFn(function () {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null === n)return void(1 === e._state ? a : s)(t.promise, e._value);
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void s(t.promise, e)
                        }
                        a(t.promise, r)
                    })
                }

                function a(e, t) {
                    try {
                        if (t === e)throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof o)return e._state = 3, e._value = t, void d(e);
                            if ("function" == typeof n)return void c(r(n, t), e)
                        }
                        e._state = 1, e._value = t, d(e)
                    } catch (t) {
                        s(e, t)
                    }
                }

                function s(e, t) {
                    e._state = 2, e._value = t, d(e)
                }

                function d(e) {
                    2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
                        e._handled || o._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++)i(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function c(e, t) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, a(t, e))
                        }, function (e) {
                            n || (n = !0, s(t, e))
                        })
                    } catch (e) {
                        if (n)return;
                        n = !0, s(t, e)
                    }
                }

                var l = setTimeout;
                o.prototype.catch = function (e) {
                    return this.then(null, e)
                }, o.prototype.then = function (e, t) {
                    var r = new this.constructor(n);
                    return i(this, new u(e, t, r)), r
                }, o.prototype.finally = function (e) {
                    var t = this.constructor;
                    return this.then(function (n) {
                        return t.resolve(e()).then(function () {
                            return n
                        })
                    }, function (n) {
                        return t.resolve(e()).then(function () {
                            return t.reject(n)
                        })
                    })
                }, o.all = function (e) {
                    return new o(function (t, n) {
                        function r(e, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s)return void s.call(a, function (t) {
                                        r(e, t)
                                    }, n)
                                }
                                o[e] = a, 0 == --i && t(o)
                            } catch (e) {
                                n(e)
                            }
                        }

                        if (!e || void 0 === e.length)throw new TypeError("Promise.all accepts an array");
                        var o = Array.prototype.slice.call(e);
                        if (0 === o.length)return t([]);
                        for (var i = o.length, a = 0; a < o.length; a++)r(a, o[a])
                    })
                }, o.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) {
                        t(e)
                    })
                }, o.reject = function (e) {
                    return new o(function (t, n) {
                        n(e)
                    })
                }, o.race = function (e) {
                    return new o(function (t, n) {
                        for (var r = 0, o = e.length; r < o; r++)e[r].then(t, n)
                    })
                }, o._immediateFn = "function" == typeof e && function (t) {
                        e(t)
                    } || function (e) {
                        l(e, 0)
                    }, o._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                };
                var f = function () {
                    if ("undefined" != typeof self)return self;
                    if ("undefined" != typeof window)return window;
                    if (void 0 !== t)return t;
                    throw new Error("unable to locate global object")
                }();
                f.Promise || (f.Promise = o)
            })
        }).call(t, n(177).setImmediate, n(7))
    }, function (e, t, n) {
        (function (e, t) {
            (function (e, n) {
                "use strict";
                function r(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)t[n] = arguments[n + 1];
                    var r = {callback: e, args: t};
                    return u[d] = r, s(d), d++
                }

                function o(e) {
                    delete u[e]
                }

                function i(e) {
                    var t = e.callback, r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }

                function a(e) {
                    if (c) setTimeout(a, 0, e); else {
                        var t = u[e];
                        if (t) {
                            c = !0;
                            try {
                                i(t)
                            } finally {
                                o(e), c = !1
                            }
                        }
                    }
                }

                if (!e.setImmediate) {
                    var s, d = 1, u = {}, c = !1, l = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? function () {
                        s = function (e) {
                            t.nextTick(function () {
                                a(e)
                            })
                        }
                    }() : !function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0, n = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? e.MessageChannel ? function () {
                        var e = new MessageChannel;
                        e.port1.onmessage = function (e) {
                            a(e.data)
                        }, s = function (t) {
                            e.port2.postMessage(t)
                        }
                    }() : l && "onreadystatechange" in l.createElement("script") ? function () {
                        var e = l.documentElement;
                        s = function (t) {
                            var n = l.createElement("script");
                            n.onreadystatechange = function () {
                                a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }() : function () {
                        s = function (e) {
                            setTimeout(a, 0, e)
                        }
                    }() : function () {
                        var t = "setImmediate$" + Math.random() + "$", n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function (n) {
                            e.postMessage(t + n, "*")
                        }
                    }(), f.setImmediate = r, f.clearImmediate = o
                }
            })("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(t, n(7), n(174))
    }, function (e, t, n) {
        (function (e) {
            function r(e, t) {
                this._id = e, this._clearFn = t
            }

            var o = void 0 !== e && e || "undefined" != typeof self && self || window, i = Function.prototype.apply;
            t.setTimeout = function () {
                return new r(i.call(setTimeout, o, arguments), clearTimeout)
            }, t.setInterval = function () {
                return new r(i.call(setInterval, o, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function (e) {
                e && e.close()
            }, r.prototype.unref = r.prototype.ref = function () {
            }, r.prototype.close = function () {
                this._clearFn.call(o, this._id)
            }, t.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(176), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(t, n(7))
    }, , function (e, t, n) {
        "use strict";
        var r = n(155), o = n(528), i = Object.assign(r, o.apiObj);
        e.exports = i
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(12), o = n(13), i = n(14), a = n(15), s = n(16), d = n(17), u = n(18), c = n(19), l = n(20),
            f = n(21), v = n(22), p = n(23), _ = n(24), E = n(25), N = n(26), P = n(27), h = n(28), m = n(29),
            M = n(30), y = n(31), k = n(32), g = n(33), b = n(34), I = n(35), A = n(36), S = n(37), V = n(38),
            U = n(39), O = n(40), j = n(41), w = n(42), $ = n(43), D = n(44), C = n(45), T = n(46), x = n(47),
            F = n(48), W = n(49), R = n(50), L = n(51), B = n(52), z = n(53), q = n(54), Y = n(55), J = n(56),
            G = n(57), H = n(58), K = n(59), X = n(60), Q = n(61), Z = n(62), ee = n(63), te = n(64), ne = n(65),
            re = n(66), oe = n(67), ie = n(68), ae = n(69), se = n(70), de = n(71), ue = n(72), ce = n(73), le = n(74),
            fe = n(75), ve = n(76), pe = n(77), _e = n(78), Ee = n(79), Ne = n(80), Pe = n(81), he = n(82), me = n(83),
            Me = n(84), ye = n(85), ke = n(86), ge = n(87), be = n(88), Ie = n(89), Ae = n(90), Se = n(91), Ve = n(92),
            Ue = n(93), Oe = n(94), je = n(95), we = n(96), $e = n(97), De = n(98), Ce = n(99), Te = n(100),
            xe = n(101), Fe = n(102), We = n(103), Re = n(104), Le = n(105), Be = n(106), ze = n(107), qe = n(108),
            Ye = n(109), Je = n(110), Ge = n(111), He = n(112), Ke = n(113), Xe = n(114), Qe = n(115), Ze = n(116),
            et = n(117), tt = n(118), nt = n(119), rt = n(120), ot = n(121), it = n(122), at = n(123), st = n(124),
            dt = n(125), ut = n(126), ct = n(127), lt = n(128), ft = n(129), vt = n(130), pt = n(131), _t = n(132),
            Et = n(133), Nt = n(134), Pt = n(135), ht = n(136), mt = n(137), Mt = n(138), yt = n(139), kt = n(140),
            gt = n(141), bt = n(142), It = n(143), At = n(144), St = n(145), Vt = n(146), Ut = n(147), Ot = n(148),
            jt = n(149), wt = n(150), $t = n(151), Dt = n(152), Ct = n(153);
        t.apiObj = {
            biz: {
                alipay: {pay: r.pay$},
                calendar: {
                    chooseDateTime: o.chooseDateTime$,
                    chooseHalfDay: i.chooseHalfDay$,
                    chooseInterval: a.chooseInterval$,
                    chooseOneDay: s.chooseOneDay$
                },
                chat: {
                    chooseConversationByCorpId: d.chooseConversationByCorpId$,
                    locationChatMessage: u.locationChatMessage$,
                    openSingleChat: c.openSingleChat$,
                    pickConversation: l.pickConversation$,
                    sendEmotion: f.sendEmotion$,
                    toConversation: v.toConversation$
                },
                clipboardData: {setData: p.setData$},
                contact: {
                    choose: _.choose$,
                    chooseMobileContacts: E.chooseMobileContacts$,
                    complexPicker: N.complexPicker$,
                    createGroup: P.createGroup$,
                    departmentsPicker: h.departmentsPicker$,
                    externalComplexPicker: m.externalComplexPicker$,
                    externalEditForm: M.externalEditForm$,
                    setRule: y.setRule$
                },
                cspace: {
                    chooseSpaceDir: k.chooseSpaceDir$,
                    delete: g.delete$,
                    preview: b.preview$,
                    saveFile: I.saveFile$
                },
                customContact: {choose: A.choose$, multipleChoose: S.multipleChoose$},
                ding: {create: V.create$, post: U.post$},
                event: {notifyWeex: O.notifyWeex$},
                intent: {fetchData: j.fetchData$},
                map: {locate: w.locate$, search: $.search$, view: D.view$},
                microApp: {openApp: C.openApp$},
                navigation: {
                    close: T.close$,
                    goBack: x.goBack$,
                    hideBar: F.hideBar$,
                    quit: W.quit$,
                    replace: R.replace$,
                    setIcon: L.setIcon$,
                    setLeft: B.setLeft$,
                    setMenu: z.setMenu$,
                    setRight: q.setRight$,
                    setTitle: Y.setTitle$
                },
                store: {
                    closeUnpayOrder: J.closeUnpayOrder$,
                    createOrder: G.createOrder$,
                    getPayUrl: H.getPayUrl$,
                    inquiry: K.inquiry$
                },
                telephone: {
                    call: X.call$,
                    checkBizCall: Q.checkBizCall$,
                    quickCallList: Z.quickCallList$,
                    showCallMenu: ee.showCallMenu$
                },
                user: {checkPassword: te.checkPassword$, get: ne.get$},
                util: {
                    chosen: re.chosen$,
                    datepicker: oe.datepicker$,
                    datetimepicker: ie.datetimepicker$,
                    decrypt: ae.decrypt$,
                    downloadFile: se.downloadFile$,
                    encrypt: de.encrypt$,
                    isLocalFileExist: ue.isLocalFileExist$,
                    multiSelect: ce.multiSelect$,
                    open: le.open$,
                    openLink: fe.openLink$,
                    openLocalFile: ve.openLocalFile$,
                    openModal: pe.openModal$,
                    openSlidePanel: _e.openSlidePanel$,
                    presentWindow: Ee.presentWindow$,
                    previewImage: Ne.previewImage$,
                    previewVideo: Pe.previewVideo$,
                    scan: he.scan$,
                    scanCard: me.scanCard$,
                    setScreenBrightnessAndKeepOn: Me.setScreenBrightnessAndKeepOn$,
                    share: ye.share$,
                    systemShare: ke.systemShare$,
                    timepicker: ge.timepicker$,
                    uploadAttachment: be.uploadAttachment$,
                    uploadImage: Ie.uploadImage$,
                    uploadImageFromCamera: Ae.uploadImageFromCamera$,
                    ut: Se.ut$
                },
                verify: {openBindIDCard: Ve.openBindIDCard$, startAuth: Ue.startAuth$}
            },
            channel: {permission: {requestAuthCode: Oe.requestAuthCode$}},
            device: {
                accelerometer: {clearShake: je.clearShake$, watchShake: we.watchShake$},
                audio: {
                    download: $e.download$,
                    onPlayEnd: De.onPlayEnd$,
                    onRecordEnd: Ce.onRecordEnd$,
                    pause: Te.pause$,
                    play: xe.play$,
                    resume: Fe.resume$,
                    startRecord: We.startRecord$,
                    stop: Re.stop$,
                    stopRecord: Le.stopRecord$,
                    translateVoice: Be.translateVoice$
                },
                base: {
                    getInterface: ze.getInterface$,
                    getPhoneInfo: qe.getPhoneInfo$,
                    getUUID: Ye.getUUID$,
                    getWifiStatus: Je.getWifiStatus$
                },
                connection: {getNetworkType: Ge.getNetworkType$},
                geolocation: {get: He.get$, start: Ke.start$, status: Xe.status$, stop: Qe.stop$},
                launcher: {checkInstalledApps: Ze.checkInstalledApps$, launchApp: et.launchApp$},
                nfc: {nfcRead: tt.nfcRead$, nfcStop: nt.nfcStop$, nfcWrite: rt.nfcWrite$},
                notification: {
                    actionSheet: ot.actionSheet$,
                    alert: it.alert$,
                    confirm: at.confirm$,
                    extendModal: st.extendModal$,
                    hidePreloader: dt.hidePreloader$,
                    modal: ut.modal$,
                    prompt: ct.prompt$,
                    showPreloader: lt.showPreloader$,
                    toast: ft.toast$,
                    vibrate: vt.vibrate$
                },
                screen: {insetAdjust: pt.insetAdjust$, resetView: _t.resetView$, rotateView: Et.rotateView$}
            },
            net: {bjGovApn: {loginGovNet: Nt.loginGovNet$}},
            runtime: {
                message: {fetch: Pt.fetch$, post: ht.post$},
                permission: {requestAuthCode: mt.requestAuthCode$, requestOperateAuthCode: Mt.requestOperateAuthCode$}
            },
            ui: {
                input: {plain: yt.plain$},
                nav: {
                    close: kt.close$,
                    getCurrentId: gt.getCurrentId$,
                    go: bt.go$,
                    preload: It.preload$,
                    recycle: At.recycle$
                },
                progressBar: {setColors: St.setColors$},
                pullToRefresh: {disable: Vt.disable$, enable: Ut.enable$, stop: Ot.stop$},
                webViewBounce: {disable: jt.disable$, enable: wt.enable$}
            },
            util: {domainStorage: {getItem: $t.getItem$, removeItem: Dt.removeItem$, setItem: Ct.setItem$}}
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        e.exports = n(179)
    }])
});