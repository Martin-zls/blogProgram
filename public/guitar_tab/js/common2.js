if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function n(t) {
        var e = "length" in t && t.length,
        n = rt.type(t);
        return "function" === n || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (rt.isFunction(e)) return rt.grep(t,
        function(t, i) {
            return !! e.call(t, i, t) !== n
        });
        if (e.nodeType) return rt.grep(t,
        function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (dt.test(e)) return rt.filter(e, t, n);
            e = rt.filter(e, t)
        }
        return rt.grep(t,
        function(t) {
            return rt.inArray(t, e) >= 0 !== n
        })
    }
    function r(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = wt[t] = {};
        return rt.each(t.match(bt) || [],
        function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ht.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (s(), rt.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Et, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: kt.test(n) ? rt.parseJSON(n) : n
                } catch(r) {}
                rt.data(t, e, n)
            } else n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function c(t, e, n, i) {
        if (rt.acceptData(t)) {
            var r, o, s = rt.expando,
            a = t.nodeType,
            l = a ? rt.cache: t,
            u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = K.pop() || rt.guid++:s),
            l[u] || (l[u] = a ? {}: {
                toJSON: rt.noop
            }),
            ("object" == typeof e || "function" == typeof e) && (i ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)),
            o = l[u],
            i || (o.data || (o.data = {}), o = o.data),
            void 0 !== n && (o[rt.camelCase(e)] = n),
            "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o,
            r
        }
    }
    function f(t, e, n) {
        if (rt.acceptData(t)) {
            var i, r, o = t.nodeType,
            s = o ? rt.cache: t,
            a = o ? t[rt.expando] : rt.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")),
                    r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !u(i) : !rt.isEmptyObject(i)) return
                } (n || (delete s[a].data, u(s[a]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    function d() {
        return ! 0
    }
    function p() {
        return ! 1
    }
    function h() {
        try {
            return ht.activeElement
        } catch(t) {}
    }
    function m(t) {
        var e = Mt.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement) for (; e.length;) n.createElement(e.pop());
        return n
    }
    function g(t, e) {
        var n, i, r = 0,
        o = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) ! e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, g(i, e));
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
    }
    function v(t) {
        _t.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function w(t) {
        var e = Vt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
    }
    function T(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var n, i, r, o = rt._data(t),
            s = rt._data(e, o),
            a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a) for (i = 0, r = a[n].length; r > i; i++) rt.event.add(e, n, a[n][i])
            }
            s.data && (s.data = rt.extend({},
            s.data))
        }
    }
    function C(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
                r = rt._data(e);
                for (i in r.events) rt.removeEvent(e, i, r.handle);
                e.removeAttribute(rt.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && _t.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function k(e, n) {
        var i, r = rt(n.createElement(e)).appendTo(n.body),
        o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display: rt.css(r[0], "display");
        return r.detach(),
        o
    }
    function E(t) {
        var e = ht,
        n = Zt[t];
        return n || (n = k(t, e), "none" !== n && n || (Yt = (Yt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Yt[0].contentWindow || Yt[0].contentDocument).document, e.write(), e.close(), n = k(t, e), Yt.detach()), Zt[t] = n),
        n
    }
    function S(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function N(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = de.length; r--;) if (e = de[r] + n, e in t) return e;
        return i
    }
    function A(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s],
        i.style && (o[s] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (o[s] = rt._data(i, "olddisplay", E(i.nodeName)))) : (r = At(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n: rt.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s],
        i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "": "none"));
        return t
    }
    function $(t, e, n) {
        var i = le.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function _(t, e, n, i, r) {
        for (var o = n === (i ? "border": "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += rt.css(t, n + Nt[o], !0, r)),
        i ? ("content" === n && (s -= rt.css(t, "padding" + Nt[o], !0, r)), "margin" !== n && (s -= rt.css(t, "border" + Nt[o] + "Width", !0, r))) : (s += rt.css(t, "padding" + Nt[o], !0, r), "padding" !== n && (s += rt.css(t, "border" + Nt[o] + "Width", !0, r)));
        return s
    }
    function j(t, e, n) {
        var i = !0,
        r = "width" === e ? t.offsetWidth: t.offsetHeight,
        o = te(t),
        s = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r)) return r;
            i = s && (nt.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + _(t, e, n || (s ? "border": "content"), i, o) + "px"
    }
    function D(t, e, n, i, r) {
        return new D.prototype.init(t, e, n, i, r)
    }
    function L() {
        return setTimeout(function() {
            pe = void 0
        }),
        pe = rt.now()
    }
    function O(t, e) {
        var n, i = {
            height: t
        },
        r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Nt[r],
        i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function H(t, e, n) {
        for (var i, r = (be[e] || []).concat(be["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i
    }
    function M(t, e, n) {
        var i, r, o, s, a, l, u, c, f = this,
        d = {},
        p = t.style,
        h = t.nodeType && At(t),
        m = rt._data(t, "fxshow");
        n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--,
                rt.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || E(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (i in e) if (r = e[i], me.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (h ? "hide": "show")) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                h = !0
            }
            d[i] = m && m[i] || rt.style(t, i)
        } else u = void 0;
        if (rt.isEmptyObject(d))"inline" === ("none" === u ? E(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = rt._data(t, "fxshow", {}),
            o && (m.hidden = !h),
            h ? rt(t).show() : f.done(function() {
                rt(t).hide()
            }),
            f.done(function() {
                var e;
                rt._removeData(t, "fxshow");
                for (e in d) rt.style(t, e, d[e])
            });
            for (i in d) s = H(h ? m[i] : 0, i, f),
            i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function q(t, e) {
        var n, i, r, o, s;
        for (n in t) if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = rt.cssHooks[i], s && "expand" in s) {
            o = s.expand(o),
            delete t[i];
            for (n in o) n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }
    function P(t, e, n) {
        var i, r, o = 0,
        s = ye.length,
        a = rt.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (r) return ! 1;
            for (var e = pe || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]),
            1 > o && l ? n: (a.resolveWith(t, [u]), !1)
        },
        u = a.promise({
            elem: t,
            props: rt.extend({},
            e),
            opts: rt.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: e,
            originalOptions: n,
            startTime: pe || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0,
                i = e ? u.tweens.length: 0;
                if (r) return this;
                for (r = !0; i > n; n++) u.tweens[n].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]),
                this
            }
        }),
        c = u.props;
        for (q(c, u.opts.specialEasing); s > o; o++) if (i = ye[o].call(u, t, c, u.opts)) return i;
        return rt.map(c, H, u),
        rt.isFunction(u.opts.start) && u.opts.start.call(t, u),
        rt.fx.timer(rt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
            o = e.toLowerCase().match(bt) || [];
            if (rt.isFunction(n)) for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function R(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            rt.each(t[a] || [],
            function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }),
            l
        }
        var o = {},
        s = t === ze;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function B(t, e) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t: n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n),
        t
    }
    function I(t, e, n) {
        for (var i, r, o, s, a = t.contents,
        l = t.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r) for (s in a) if (a[s] && a[s].test(r)) {
            l.unshift(s);
            break
        }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function z(t, e, n, i) {
        var r, o, s, a, l, u = {},
        c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s) for (r in u) if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e);
            else try {
                e = s(e)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: s ? f: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function W(t, e, n, i) {
        var r;
        if (rt.isArray(e)) rt.each(e,
        function(e, r) {
            n || Ve.test(t) ? i(t, r) : W(t + "[" + ("object" == typeof r ? e: "") + "]", r, n, i)
        });
        else if (n || "object" !== rt.type(e)) i(t, e);
        else for (r in e) W(t + "[" + r + "]", e[r], n, i)
    }
    function U() {
        try {
            return new t.XMLHttpRequest
        } catch(e) {}
    }
    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function V(t) {
        return rt.isWindow(t) ? t: 9 === t.nodeType ? t.defaultView || t.parentWindow: !1
    }
    var K = [],
    J = K.slice,
    Q = K.concat,
    G = K.push,
    Y = K.indexOf,
    Z = {},
    tt = Z.toString,
    et = Z.hasOwnProperty,
    nt = {},
    it = "1.11.3",
    rt = function(t, e) {
        return new rt.fn.init(t, e)
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    st = /^-ms-/,
    at = /-([\da-z])/gi,
    lt = function(t, e) {
        return e.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return rt.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(rt.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            n = +t + (0 > t ? e: 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: K.sort,
        splice: K.splice
    },
    rt.extend = rt.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {},
        a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (r = arguments[a])) for (i in r) t = s[i],
        n = r[i],
        s !== n && (u && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t: []) : o = t && rt.isPlainObject(t) ? t: {},
        s[i] = rt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    },
    rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === rt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! rt.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (nt.ownLast) for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && rt.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(st, "ms-").replace(at, lt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
            s = t.length,
            a = n(t);
            if (i) {
                if (a) for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                else for (o in t) if (r = e.apply(t[o], i), r === !1) break
            } else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Y) return Y.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in e && e[n] === t) return n
            }
            return - 1
        },
        merge: function(t, e) {
            for (var n = +e.length,
            i = 0,
            r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n) for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o),
            i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
            s = t.length,
            a = n(t),
            l = [];
            if (a) for (; s > o; o++) r = e(t[o], o, i),
            null != r && l.push(r);
            else for (o in t) r = e(t[o], o, i),
            null != r && l.push(r);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r),
            rt.isFunction(t) ? (n = J.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(J.call(arguments)))
            },
            i.guid = t.guid = t.guid || rt.guid++, i) : void 0
        },
        now: function() {
            return + new Date
        },
        support: nt
    }),
    rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, f, p, h, m;
            if ((e ? e.ownerDocument || e: R) !== D && j(e), e = e || D, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && O) {
                if (11 !== a && (r = yt.exec(t))) if (s = r[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o),
                        n
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && P(e, o) && o.id === s) return n.push(o),
                    n
                } else {
                    if (r[2]) return Y.apply(n, e.getElementsByTagName(t)),
                    n;
                    if ((s = r[3]) && x.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(s)),
                    n
                }
                if (x.qsa && (!H || !H.test(t))) {
                    if (p = f = F, h = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = E(t), (f = e.getAttribute("id")) ? p = f.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        h = bt.test(t) && c(e.parentNode) || e,
                        m = u.join(",")
                    }
                    if (m) try {
                        return Y.apply(n, h.querySelectorAll(m)),
                        n
                    } catch(g) {} finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return N(t.replace(lt, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[F] = !0,
            t
        }
        function r(t) {
            var e = D.createElement("div");
            try {
                return !! t(e)
            } catch(n) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t,
            i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function f() {}
        function d(t) {
            for (var e = 0,
            n = t.length,
            i = ""; n > e; e++) i += t[e].value;
            return i
        }
        function p(t, e, n) {
            var i = e.dir,
            r = n && "parentNode" === i,
            o = I++;
            return e.first ?
            function(e, n, o) {
                for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, o)
            }: function(e, n, s) {
                var a, l, u = [B, o];
                if (s) {
                    for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, s)) return ! 0
                } else for (; e = e[i];) if (1 === e.nodeType || r) {
                    if (l = e[F] || (e[F] = {}), (a = l[i]) && a[0] === B && a[1] === o) return u[2] = a[2];
                    if (l[i] = u, u[2] = t(e, n, s)) return ! 0
                }
            }
        }
        function h(t) {
            return t.length > 1 ?
            function(e, n, i) {
                for (var r = t.length; r--;) if (!t[r](e, n, i)) return ! 1;
                return ! 0
            }: t[0]
        }
        function m(t, n, i) {
            for (var r = 0,
            o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r && !r[F] && (r = v(r)),
            o && !o[F] && (o = v(o, s)),
            i(function(i, s, a, l) {
                var u, c, f, d = [],
                p = [],
                h = s.length,
                v = i || m(e || "*", a.nodeType ? [a] : a, []),
                y = !t || !i && e ? v: g(v, d, t, a, l),
                b = n ? o || (i ? t: h || r) ? [] : s: y;
                if (n && n(y, b, a, l), r) for (u = g(b, p), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (u = o ? tt(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f))
                    }
                } else b = g(b === s ? b.splice(h, b.length) : b),
                o ? o(null, s, b, l) : Y.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length,
            o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                return t === e
            },
            s, !0), u = p(function(t) {
                return tt(e, t) > -1
            },
            s, !0), c = [function(t, n, i) {
                var r = !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null,
                r
            }]; r > a; a++) if (n = T.relative[t[a].type]) c = [p(h(c), n)];
            else {
                if (n = T.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                    for (i = ++a; r > i && !T.relative[t[i].type]; i++);
                    return v(a > 1 && h(c), a > 1 && d(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*": ""
                    })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && d(t))
                }
                c.push(n)
            }
            return h(c)
        }
        function b(t, n) {
            var r = n.length > 0,
            o = t.length > 0,
            s = function(i, s, a, l, u) {
                var c, f, d, p = 0,
                h = "0",
                m = i && [],
                v = [],
                y = A,
                b = i || o && T.find.TAG("*", u),
                w = B += null == y ? 1 : Math.random() || .1,
                x = b.length;
                for (u && (A = s !== D && s); h !== x && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0; d = t[f++];) if (d(c, s, a)) {
                            l.push(c);
                            break
                        }
                        u && (B = w)
                    }
                    r && ((c = !d && c) && p--, i && m.push(c))
                }
                if (p += h, r && h !== p) {
                    for (f = 0; d = n[f++];) d(m, v, s, a);
                    if (i) {
                        if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                        v = g(v)
                    }
                    Y.apply(l, v),
                    u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (B = w, A = y),
                m
            };
            return r ? i(s) : s
        }
        var w, x, T, C, k, E, S, N, A, $, _, j, D, L, O, H, M, q, P, F = "sizzle" + 1 * new Date,
        R = t.document,
        B = 0,
        I = 0,
        z = n(),
        W = n(),
        U = n(),
        X = function(t, e) {
            return t === e && (_ = !0),
            0
        },
        V = 1 << 31,
        K = {}.hasOwnProperty,
        J = [],
        Q = J.pop,
        G = J.push,
        Y = J.push,
        Z = J.slice,
        tt = function(t, e) {
            for (var n = 0,
            i = t.length; i > n; n++) if (t[n] === e) return n;
            return - 1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        rt = it.replace("w", "w#"),
        ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
        st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        ut = new RegExp("^" + nt + "*," + nt + "*"),
        ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        dt = new RegExp(st),
        pt = new RegExp("^" + rt + "$"),
        ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        mt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        vt = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        wt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        Tt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        Ct = function() {
            j()
        };
        try {
            Y.apply(J = Z.call(R.childNodes), R.childNodes),
            J[R.childNodes.length].nodeType
        } catch(kt) {
            Y = {
                apply: J.length ?
                function(t, e) {
                    G.apply(t, Z.call(e))
                }: function(t, e) {
                    for (var n = t.length,
                    i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {},
        k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName: !1
        },
        j = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t: R;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, L = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), O = !k(i), x.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")),
                !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = r(function(t) {
                return L.appendChild(t).id = F,
                !i.getElementsByName || !i.getElementsByName(F).length
            }), x.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            },
            T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ?
            function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var n, i = [],
                r = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            },
            T.find.CLASS = x.getElementsByClassName &&
            function(t, e) {
                return O ? e.getElementsByClassName(t) : void 0
            },
            M = [], H = [], (x.qsa = vt.test(i.querySelectorAll)) && (r(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + F + "-]").length || H.push("~="),
                t.querySelectorAll(":checked").length || H.push(":checked"),
                t.querySelectorAll("a#" + F + "+*").length || H.push(".#.+[+~]")
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                H.push(",.*:")
            })), (x.matchesSelector = vt.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = q.call(t, "div"),
                q.call(t, "[s!='']:x"),
                M.push("!=", st)
            }), H = H.length && new RegExp(H.join("|")), M = M.length && new RegExp(M.join("|")), e = vt.test(L.compareDocumentPosition), P = e || vt.test(L.contains) ?
            function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t,
                i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            X = e ?
            function(t, e) {
                if (t === e) return _ = !0,
                0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n: (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && P(R, t) ? -1 : e === i || e.ownerDocument === R && P(R, e) ? 1 : $ ? tt($, t) - tt($, e) : 0 : 4 & n ? -1 : 1)
            }: function(t, e) {
                if (t === e) return _ = !0,
                0;
                var n, r = 0,
                o = t.parentNode,
                a = e.parentNode,
                l = [t],
                u = [e];
                if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : $ ? tt($, t) - tt($, e) : 0;
                if (o === a) return s(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? s(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            },
            i) : D
        },
        e.matches = function(t, n) {
            return e(t, null, null, n)
        },
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && j(t), n = n.replace(ft, "='$1']"), x.matchesSelector && O && (!M || !M.test(n)) && (!H || !H.test(n))) try {
                var i = q.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch(r) {}
            return e(n, D, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && j(t),
            P(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== D && j(t);
            var n = T.attrHandle[e.toLowerCase()],
            i = n && K.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
            return void 0 !== i ? i: x.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, n = [],
            i = 0,
            r = 0;
            if (_ = !x.detectDuplicates, $ = !x.sortStable && t.slice(0), t.sort(X), _) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return $ = null,
            t
        },
        C = e.getText = function(t) {
            var e, n = "",
            i = 0,
            r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[i++];) n += C(e);
            return n
        },
        T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, Tt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && dt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, Tt).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === i: "!=" === n ? o !== i: "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice( - i.length) === i: "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice( - 4),
                    a = "of-type" === e;
                    return 1 === i && 0 === r ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, n, l) {
                        var u, c, f, d, p, h, m = o !== s ? "nextSibling": "previousSibling",
                        g = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = e; f = f[m];) if (a ? f.nodeName.toLowerCase() === v: 1 === f.nodeType) return ! 1;
                                    h = m = "only" === t && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [s ? g.firstChild: g.lastChild], s && y) {
                                for (c = g[F] || (g[F] = {}), u = c[t] || [], p = u[0] === B && u[1], d = u[0] === B && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === e) {
                                    c[t] = [B, p, d];
                                    break
                                }
                            } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === B) d = u[1];
                            else for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v: 1 !== f.nodeType) || !++d || (y && ((f[F] || (f[F] = {}))[t] = [B, d]), f !== e)););
                            return d -= r,
                            d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]),
                        t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                    n = [],
                    r = S(t.replace(lt, "$1"));
                    return r[F] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t,
                        r(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xt, Tt),
                    function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(xt, Tt).toLowerCase(),
                    function(e) {
                        var n;
                        do
                        if (n = O ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(),
                        n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! T.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; ++i < e;) t.push(i);
                    return t
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) T.pseudos[w] = l(w);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        E = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, u, c = W[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) { (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])),
                i = !1,
                (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in T.filter) ! (r = ht[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length: a ? e.error(t) : W(t, l).slice(0)
        },
        S = e.compile = function(t, e) {
            var n, i = [],
            r = [],
            o = U[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;) o = y(e[n]),
                o[F] ? i.push(o) : r.push(o);
                o = U(t, b(r, i)),
                o.selector = t
            }
            return o
        },
        N = e.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t,
            f = !i && E(t = u.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && O && T.relative[o[1].type]) {
                    if (e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0], !e) return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(t) ? 0 : o.length; r--&&(s = o[r], !T.relative[a = s.type]);) if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, Tt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), t = i.length && d(o), !t) return Y.apply(n, i),
                    n;
                    break
                }
            }
            return (u || S(t, f))(i, e, !O, n, bt.test(t) && c(e.parentNode) || e),
            n
        },
        x.sortStable = F.split("").sort(X).join("") === F,
        x.detectDuplicates = !!_,
        j(),
        x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value",
        function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et,
        function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
        }),
        e
    } (t);
    rt.find = ut,
    rt.expr = ut.selectors,
    rt.expr[":"] = rt.expr.pseudos,
    rt.unique = ut.uniqueSort,
    rt.text = ut.getText,
    rt.isXMLDoc = ut.isXML,
    rt.contains = ut.contains;
    var ct = rt.expr.match.needsContext,
    ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    rt.fn.extend({
        find: function(t) {
            var e, n = [],
            i = this,
            r = i.length;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; r > e; e++) if (rt.contains(i[e], this)) return ! 0
            }));
            for (e = 0; r > e; e++) rt.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t: t,
            n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !! i(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var pt, ht = t.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = rt.fn.init = function(t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return ! e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e: ht, !0)), ft.test(n[1]) && rt.isPlainObject(e)) for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = ht.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2]) return pt.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = ht,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
    };
    gt.prototype = rt.fn,
    pt = rt(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
    yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r),
            r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }),
    rt.fn.extend({
        has: function(t) {
            var e, n = rt(t, this),
            i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++) if (rt.contains(this, n[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0,
            r = this.length,
            o = [], s = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return rt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return rt.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return rt.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return rt.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return rt.sibling(t.firstChild)
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: rt.merge([], t.childNodes)
        }
    },
    function(t, e) {
        rt.fn[t] = function(n, i) {
            var r = rt.map(this, e, n);
            return "Until" !== t.slice( - 5) && (i = n),
            i && "string" == typeof i && (r = rt.filter(i, r)),
            this.length > 1 && (yt[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var bt = /\S+/g,
    wt = {};
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? wt[t] || o(t) : rt.extend({},
        t);
        var e, n, i, r, s, a, l = [],
        u = !t.once && [],
        c = function(o) {
            for (n = t.memory && o, i = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++) if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                n = !1;
                break
            }
            e = !1,
            l && (u ? u.length && c(u.shift()) : n ? l = [] : f.disable())
        },
        f = {
            add: function() {
                if (l) {
                    var i = l.length; !
                    function o(e) {
                        rt.each(e,
                        function(e, n) {
                            var i = rt.type(n);
                            "function" === i ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    } (arguments),
                    e ? r = l.length: n && (a = i, c(n))
                }
                return this
            },
            remove: function() {
                return l && rt.each(arguments,
                function(t, n) {
                    for (var i; (i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1),
                    e && (r >= i && r--, s >= i && s--)
                }),
                this
            },
            has: function(t) {
                return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                r = 0,
                this
            },
            disable: function() {
                return l = u = n = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return u = void 0,
                n || f.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(t, n) {
                return ! l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return f
    },
    rt.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(e,
                        function(e, o) {
                            var s = rt.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? rt.extend(t, i) : i
                }
            },
            r = {};
            return i.pipe = i.then,
            rt.each(e,
            function(t, o) {
                var s = o[2],
                a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i: this, arguments),
                    this
                },
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, n, i, r = 0,
            o = J.call(arguments),
            s = o.length,
            a = 1 !== s || t && rt.isFunction(t.promise) ? s: 0,
            l = 1 === a ? t: rt.Deferred(),
            u = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? J.call(arguments) : r,
                    i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    });
    var xt;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t),
        this
    },
    rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++:rt.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--rt.readyWait: !rt.isReady) {
                if (!ht.body) return setTimeout(rt.ready);
                rt.isReady = !0,
                t !== !0 && --rt.readyWait > 0 || (xt.resolveWith(ht, [rt]), rt.fn.triggerHandler && (rt(ht).triggerHandler("ready"), rt(ht).off("ready")))
            }
        }
    }),
    rt.ready.promise = function(e) {
        if (!xt) if (xt = rt.Deferred(), "complete" === ht.readyState) setTimeout(rt.ready);
        else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", a, !1),
        t.addEventListener("load", a, !1);
        else {
            ht.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && ht.documentElement
            } catch(i) {}
            n && n.doScroll && !
            function r() {
                if (!rt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(t) {
                        return setTimeout(r, 50)
                    }
                    s(),
                    rt.ready()
                }
            } ()
        }
        return xt.promise(e)
    };
    var Tt, Ct = "undefined";
    for (Tt in rt(nt)) break;
    nt.ownLast = "0" !== Tt,
    nt.inlineBlockNeedsLayout = !1,
    rt(function() {
        var t, e, n, i;
        n = ht.getElementsByTagName("body")[0],
        n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
        var t = ht.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch(e) {
                nt.deleteExpando = !1
            }
        }
        t = null
    } (),
    rt.acceptData = function(t) {
        var e = rt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Et = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando],
            !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return f(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return f(t, e, !0)
        }
    }),
    rt.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
            s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                rt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, t, e)
            }) : o ? l(o, t, rt.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t)
            })
        }
    }),
    rt.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = rt.queue(t, e),
            i = n.length,
            r = n.shift(),
            o = rt._queueHooks(t, e),
            s = function() {
                rt.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--),
            r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return rt._data(t, n) || rt._data(t, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(t, e + "queue"),
                    rt._removeData(t, n)
                })
            })
        }
    }),
    rt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--),
            arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var n = rt.queue(this, t, e);
                rt._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
            r = rt.Deferred(),
            o = this,
            s = this.length,
            a = function() {--i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = rt._data(o[s], t + "queueHooks"),
            n && n.empty && (i++, n.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Nt = ["Top", "Right", "Bottom", "Left"],
    At = function(t, e) {
        return t = e || t,
        "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
    },
    $t = rt.access = function(t, e, n, i, r, o, s) {
        var a = 0,
        l = t.length,
        u = null == n;
        if ("object" === rt.type(n)) {
            r = !0;
            for (a in n) rt.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
            return u.call(rt(t), n)
        })), e)) for (; l > a; a++) e(t[a], n, s ? i: i.call(t[a], a, e(t[a], n)));
        return r ? t: u ? e.call(t) : l ? e(t[0], n) : o
    },
    _t = /^(?:checkbox|radio)$/i; !
    function() {
        var t = ht.createElement("input"),
        e = ht.createElement("div"),
        n = ht.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
        function() {
            nt.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch(i) {
                nt.deleteExpando = !1
            }
        }
    } (),
    function() {
        var e, n, i = ht.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e,
        (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    } ();
    var jt = /^(?:input|select|textarea)$/i,
    Dt = /^key/,
    Lt = /^(?:mouse|pointer|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    Ht = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, m, g = rt._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                    return typeof rt === Ct || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Ht.exec(e[a]) || [],
                p = m = o[1],
                h = (o[2] || "").split(".").sort(),
                p && (u = rt.event.special[p] || {},
                p = (r ? u.delegateType: u.bindType) || p, u = rt.event.special[p] || {},
                f = rt.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                },
                l), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, h, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), rt.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, m, g = rt.hasData(t) && rt._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;) if (a = Ht.exec(e[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = rt.event.special[p] || {},
                    p = (i ? f.delegateType: f.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o],
                    !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, f.remove && f.remove.call(t, s));
                    l && !d.length && (f.teardown && f.teardown.call(t, h, g.handle) !== !1 || rt.removeEvent(t, p, g.handle), delete c[p])
                } else for (p in c) rt.event.remove(t, p + e[u], n, i, !0);
                rt.isEmptyObject(c) && (delete g.handle, rt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, f, d = [i || ht],
            p = et.call(e, "type") ? e.type: e,
            h = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e: new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), u = rt.event.special[p] || {},
            r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !rt.isWindow(i)) {
                    for (l = u.delegateType || p, Ot.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                    c = a;
                    c === (i.ownerDocument || ht) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (f = 0; (a = d[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? l: u.bindType || p,
                o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"),
                o && o.apply(a, n),
                o = s && a[s],
                o && o.apply && rt.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && rt.acceptData(i) && s && i[p] && !rt.isWindow(i)) {
                    c = i[s],
                    c && (i[s] = null),
                    rt.event.triggered = p;
                    try {
                        i[p]()
                    } catch(m) {}
                    rt.event.triggered = void 0,
                    c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, n, i, r, o, s = [],
            a = J.call(arguments),
            l = (rt._data(this, "events") || {})[t.type] || [],
            u = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = rt.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
            a = e.delegateCount,
            l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (r = [], o = 0; a > o; o++) i = e[o],
                n = i.selector + " ",
                void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length),
                r[n] && r.push(i);
                r.length && s.push({
                    elem: l,
                    handlers: r
                })
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, n, i, r = t.type,
            o = t,
            s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks: Dt.test(r) ? this.keyHooks: {}), i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = i.length; e--;) n = i[e],
            t[n] = o[n];
            return t.target || (t.target = o.srcElement || ht),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ht, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement: s),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = rt.extend(new rt.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    rt.removeEvent = ht.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }: function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ct && (t[i] = null), t.detachEvent(i, n))
    },
    rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d: p) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
    },
    rt.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                r = t.relatedTarget,
                o = t.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e),
                n
            }
        }
    }),
    nt.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form: void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), rt._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }),
    nt.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                rt.event.simulate("change", this, t, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                jt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                }), rt._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"),
            !jt.test(this.nodeName)
        }
    }),
    nt.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var n = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0)
        };
        rt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                r = rt._data(i, e);
                r || i.addEventListener(t, n, !0),
                rt._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                r = rt._data(i, e) - 1;
                r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
            }
        }
    }),
    rt.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === r && (s = i, i = function(t) {
                return rt().off(t),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = rt.guid++)),
            this.each(function() {
                rt.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj,
            rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0),
            n === !1 && (n = p),
            this.each(function() {
                rt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? rt.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    qt = / jQuery\d+="(?:null|\d+)"/g,
    Pt = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
    Ft = /^\s+/,
    Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Bt = /<([\w:]+)/,
    It = /<tbody/i,
    zt = /<|&#?\w+;/,
    Wt = /<(?:script|style|link)/i,
    Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xt = /^$|\/(?:java|ecma)script/i,
    Vt = /^true\/(.*)/,
    Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Jt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Qt = m(ht),
    Gt = Qt.appendChild(ht.createElement("div"));
    Jt.optgroup = Jt.option,
    Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead,
    Jt.th = Jt.td,
    rt.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a, l = rt.contains(t.ownerDocument, t);
            if (nt.html5Clone || rt.isXMLDoc(t) || !Pt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t))) for (i = g(o), a = g(t), s = 0; null != (r = a[s]); ++s) i[s] && C(r, i[s]);
            if (e) if (n) for (a = a || g(t), i = i || g(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
            else T(t, o);
            return i = g(o, "script"),
            i.length > 0 && x(i, !l && g(t, "script")),
            i = a = r = null,
            o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, l, u, c, f = t.length,
            d = m(e), p = [], h = 0; f > h; h++) if (o = t[h], o || 0 === o) if ("object" === rt.type(o)) rt.merge(p, o.nodeType ? [o] : o);
            else if (zt.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c = Jt[l] || Jt._default, a.innerHTML = c[1] + o.replace(Rt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!nt.leadingWhitespace && Ft.test(o) && p.push(e.createTextNode(Ft.exec(o)[0])), !nt.tbody) for (o = "table" !== l || It.test(o) ? "<table>" !== c[1] || It.test(o) ? 0 : a: a.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (rt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(o));
            for (a && d.removeChild(a), nt.appendChecked || rt.grep(g(p, "input"), v), h = 0; o = p[h++];) if ((!i || -1 === rt.inArray(o, i)) && (s = rt.contains(o.ownerDocument, o), a = g(d.appendChild(o), "script"), s && x(a), n)) for (r = 0; o = a[r++];) Xt.test(o.type || "") && n.push(o);
            return a = null,
            d
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0,
            a = rt.expando,
            l = rt.cache,
            u = nt.deleteExpando,
            c = rt.event.special; null != (n = t[s]); s++) if ((e || rt.acceptData(n)) && (r = n[a], o = r && l[r])) {
                if (o.events) for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Ct ? n.removeAttribute(a) : n[a] = null, K.push(r))
            }
        }
    }),
    rt.fn.extend({
        text: function(t) {
            return $t(this,
            function(t) {
                return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || rt.cleanData(g(n)),
            n.parentNode && (e && rt.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && rt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t: e,
            this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return $t(this,
            function(t) {
                var e = this[0] || {},
                n = 0,
                i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(qt, "") : void 0;
                if ("string" == typeof t && !Wt.test(t) && (nt.htmlSerialize || !Pt.test(t)) && (nt.leadingWhitespace || !Ft.test(t)) && !Jt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Rt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {},
                        1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(r) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments,
            function(e) {
                t = this.parentNode,
                rt.cleanData(g(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var n, i, r, o, s, a, l = 0,
            u = this.length,
            c = this,
            f = u - 1,
            d = t[0],
            p = rt.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !nt.checkClone && Ut.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                p && (t[0] = d.call(this, n, i.html())),
                i.domManip(t, e)
            });
            if (u && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = rt.map(g(a, "script"), b), r = o.length; u > l; l++) i = a,
                l !== f && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))),
                e.call(this[l], i, l);
                if (r) for (s = o[o.length - 1].ownerDocument, rt.map(o, w), l = 0; r > l; l++) i = o[l],
                Xt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Kt, "")));
                a = n = null
            }
            return this
        }
    }),
    rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        rt.fn[t] = function(t) {
            for (var n, i = 0,
            r = [], o = rt(t), s = o.length - 1; s >= i; i++) n = i === s ? this: this.clone(!0),
            rt(o[i])[e](n),
            G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Yt, Zt = {}; !
    function() {
        var t;
        nt.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = ht.getElementsByTagName("body")[0],
            n && n.style ? (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ht.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    } ();
    var te, ee, ne = /^margin/,
    ie = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
    re = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    },
    ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t),
        s = n ? n.getPropertyValue(e) || n[e] : void 0,
        n && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)),
        void 0 === s ? s: s + ""
    }) : ht.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    },
    ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t),
        s = n ? n[e] : void 0,
        null == s && a && a[e] && (s = a[e]),
        ie.test(s) && !re.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)),
        void 0 === s ? s: s + "" || "auto"
    }),
    function() {
        function e() {
            var e, n, i, r;
            n = ht.getElementsByTagName("body")[0],
            n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, r = e.appendChild(ht.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, s, a, l;
        n = ht.createElement("div"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = n.getElementsByTagName("a")[0],
        i = r && r.style,
        i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == s && e(),
                s
            },
            pixelPosition: function() {
                return null == o && e(),
                o
            },
            reliableMarginRight: function() {
                return null == l && e(),
                l
            }
        }))
    } (),
    rt.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o],
        t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var oe = /alpha\([^)]*\)/i,
    se = /opacity\s*=\s*([^)]*)/,
    ae = /^(none|table(?!-c[ea]).+)/,
    le = new RegExp("^(" + St + ")(.*)$", "i"),
    ue = new RegExp("^([+-])=(" + St + ")", "i"),
    ce = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    fe = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    de = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = rt.camelCase(e),
                l = t.style;
                if (e = rt.cssProps[a] || (rt.cssProps[a] = N(l, a)), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r: l[e];
                if (o = typeof n, "string" === o && (r = ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    l[e] = n
                } catch(u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = N(t.style, a)),
            s = rt.cssHooks[e] || rt.cssHooks[a],
            s && "get" in s && (o = s.get(t, !0, n)),
            void 0 === o && (o = ee(t, e, i)),
            "normal" === o && e in fe && (o = fe[e]),
            "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    rt.each(["height", "width"],
    function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce,
                function() {
                    return j(t, e, i)
                }) : j(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && te(t);
                return $(t, n, i ? _(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    nt.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var n = t.style,
            i = t.currentStyle,
            r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
        }
    }),
    rt.cssHooks.marginRight = S(nt.reliableMarginRight,
    function(t, e) {
        return e ? rt.swap(t, {
            display: "inline-block"
        },
        ee, [t, "marginRight"]) : void 0
    }),
    rt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0,
                r = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Nt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        ne.test(t) || (rt.cssHooks[t + e].set = $)
    }),
    rt.fn.extend({
        css: function(t, e) {
            return $t(this,
            function(t, e, n) {
                var i, r, o = {},
                s = 0;
                if (rt.isArray(e)) {
                    for (i = te(t), r = e.length; r > s; s++) o[e[s]] = rt.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                At(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }),
    rt.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (rt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    rt.fx = D.prototype.init,
    rt.fx.step = {};
    var pe, he, me = /^(?:toggle|show|hide)$/,
    ge = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
    ve = /queueHooks$/,
    ye = [M],
    be = {
        "*": [function(t, e) {
            var n = this.createTween(t, e),
            i = n.cur(),
            r = ge.exec(e),
            o = r && r[3] || (rt.cssNumber[t] ? "": "px"),
            s = (rt.cssNumber[t] || "px" !== o && +i) && ge.exec(rt.css(n.elem, t)),
            a = 1,
            l = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +i || 1;
                do a = a || ".5",
                s /= a,
                rt.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            n
        }]
    };
    rt.Animation = rt.extend(P, {
        tweener: function(t, e) {
            rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0,
            r = t.length; r > i; i++) n = t[i],
            be[n] = be[n] || [],
            be[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ye.unshift(t) : ye.push(t)
        }
    }),
    rt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? rt.extend({},
        t) : {
            complete: n || !n && e || rt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !rt.isFunction(e) && e
        };
        return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            rt.isFunction(i.old) && i.old.call(this),
            i.queue && rt.dequeue(this, i.queue)
        },
        i
    },
    rt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = rt.isEmptyObject(t),
            o = rt.speed(e, n, i),
            s = function() {
                var e = P(this, rt.extend({},
                t), o); (r || rt._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                r = null != t && t + "queueHooks",
                o = rt.timers,
                s = rt._data(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ve.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1)); (e || !n) && rt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, n = rt._data(this),
                i = n[t + "queue"],
                r = n[t + "queueHooks"],
                o = rt.timers,
                s = i ? i.length: 0;
                for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    rt.each(["toggle", "show", "hide"],
    function(t, e) {
        var n = rt.fn[e];
        rt.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, r)
        }
    }),
    rt.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        rt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    rt.timers = [],
    rt.fx.tick = function() {
        var t, e = rt.timers,
        n = 0;
        for (pe = rt.now(); n < e.length; n++) t = e[n],
        t() || e[n] !== t || e.splice(n--, 1);
        e.length || rt.fx.stop(),
        pe = void 0
    },
    rt.fx.timer = function(t) {
        rt.timers.push(t),
        t() ? rt.fx.start() : rt.timers.pop()
    },
    rt.fx.interval = 13,
    rt.fx.start = function() {
        he || (he = setInterval(rt.fx.tick, rt.fx.interval))
    },
    rt.fx.stop = function() {
        clearInterval(he),
        he = null
    },
    rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    rt.fn.delay = function(t, e) {
        return t = rt.fx ? rt.fx.speeds[t] || t: t,
        e = e || "fx",
        this.queue(e,
        function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t, e, n, i, r;
        e = ht.createElement("div"),
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        i = e.getElementsByTagName("a")[0],
        n = ht.createElement("select"),
        r = n.appendChild(ht.createElement("option")),
        t = e.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px",
        nt.getSetAttribute = "t" !== e.className,
        nt.style = /top/.test(i.getAttribute("style")),
        nt.hrefNormalized = "/a" === i.getAttribute("href"),
        nt.checkOn = !!t.value,
        nt.optSelected = r.selected,
        nt.enctype = !!ht.createElement("form").enctype,
        n.disabled = !0,
        nt.optDisabled = !r.disabled,
        t = ht.createElement("input"),
        t.setAttribute("value", ""),
        nt.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        nt.radioValue = "t" === t.value
    } ();
    var we = /\r/g;
    rt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = rt.isFunction(t),
                this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "": "number" == typeof r ? r += "": rt.isArray(r) && (r = rt.map(r,
                    function(t) {
                        return null == t ? "": t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()],
                e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n: (n = r.value, "string" == typeof n ? n.replace(we, "") : null == n ? "": n)
            }
        }
    }),
    rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e: rt.trim(rt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options,
                    r = t.selectedIndex,
                    o = "select-one" === t.type || 0 > r,
                    s = o ? null: [], a = o ? r + 1 : i.length, l = 0 > r ? a: o ? r: 0; a > l; l++) if (n = i[l], (n.selected || l === r) && (nt.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !rt.nodeName(n.parentNode, "optgroup"))) {
                        if (e = rt(n).val(), o) return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options,
                    o = rt.makeArray(e), s = r.length; s--;) if (i = r[s], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
                        i.selected = n = !0
                    } catch(a) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    rt.each(["radio", "checkbox"],
    function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
            }
        },
        nt.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var xe, Te, Ce = rt.expr.attrHandle,
    ke = /^(?:checked|selected)$/i,
    Ee = nt.getSetAttribute,
    Se = nt.input;
    rt.fn.extend({
        attr: function(t, e) {
            return $t(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }),
    rt.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? Te: xe)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r: (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r: (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
            o = e && e.match(bt);
            if (o && 1 === t.nodeType) for (; n = o[r++];) i = rt.propFix[n] || n,
            rt.expr.match.bool.test(n) ? Se && Ee || !ke.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""),
            t.removeAttribute(Ee ? n: i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        }
    }),
    Te = {
        set: function(t, e, n) {
            return e === !1 ? rt.removeAttr(t, n) : Se && Ee || !ke.test(n) ? t.setAttribute(!Ee && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    rt.each(rt.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var n = Ce[e] || rt.find.attr;
        Ce[e] = Se && Ee || !ke.test(e) ?
        function(t, e, i) {
            var r, o;
            return i || (o = Ce[e], Ce[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Ce[e] = o),
            r
        }: function(t, e, n) {
            return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Se && Ee || (rt.attrHooks.value = {
        set: function(t, e, n) {
            return rt.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
        }
    }),
    Ee || (xe = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
            i.value = e += "",
            "value" === n || e === t.getAttribute(n) ? e: void 0
        }
    },
    Ce.id = Ce.name = Ce.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value: null
    },
    rt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value: void 0
        },
        set: xe.set
    },
    rt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            xe.set(t, "" === e ? !1 : e, n)
        }
    },
    rt.each(["width", "height"],
    function(t, e) {
        rt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })),
    nt.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ne = /^(?:input|select|textarea|button|object)$/i,
    Ae = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return $t(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(e) {}
            })
        }
    }),
    rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !rt.isXMLDoc(t),
            o && (e = rt.propFix[e] || e, r = rt.propHooks[e]),
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i: t[e] = n: r && "get" in r && null !== (i = r.get(t, e)) ? i: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ne.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    nt.hrefNormalized || rt.each(["href", "src"],
    function(t, e) {
        rt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    nt.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        rt.propFix[this.toLowerCase()] = this
    }),
    nt.enctype || (rt.propFix.enctype = "encoding");
    var $e = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0,
            l = this.length,
            u = "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, this.className))
            });
            if (u) for (e = (t || "").match(bt) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($e, " ") : " ")) {
                for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s = rt.trim(i),
                n.className !== s && (n.className = s)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0,
            l = this.length,
            u = 0 === arguments.length || "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, this.className))
            });
            if (u) for (e = (t || "").match(bt) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($e, " ") : "")) {
                for (o = 0; r = e[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                s = t ? rt.trim(i) : "",
                n.className !== s && (n.className = s)
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(n) {
                rt(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n) for (var e, i = 0,
                r = rt(this), o = t.match(bt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Ct || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($e, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        }
    }),
    rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        rt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var _e = rt.now(),
    je = /\?/,
    De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
        r = rt.trim(e + "");
        return r && !rt.trim(r.replace(De,
        function(t, e, r, o) {
            return n && e && (i = 0),
            0 === i ? t: (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
    },
    rt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch(r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e),
        n
    };
    var Le, Oe, He = /#.*$/,
    Me = /([?&])_=[^&]*/,
    qe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Fe = /^(?:GET|HEAD)$/,
    Re = /^\/\//,
    Be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ie = {},
    ze = {},
    We = "*/".concat("*");
    try {
        Oe = location.href
    } catch(Ue) {
        Oe = ht.createElement("a"),
        Oe.href = "",
        Oe = Oe.href
    }
    Le = Be.exec(Oe.toLowerCase()) || [],
    rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oe,
            type: "GET",
            isLocal: Pe.test(Le[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, rt.ajaxSettings), e) : B(rt.ajaxSettings, t)
        },
        ajaxPrefilter: F(Ie),
        ajaxTransport: F(ze),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, v, y, w, T = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = I(f, x, n)), y = z(f, y, x, r), r ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (rt.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (rt.etag[o] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent": 304 === t ? T = "notmodified": (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", r ? h.resolveWith(d, [c, T, x]) : h.rejectWith(d, [x, T, v]), x.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess": "ajaxError", [x, f, r ? c: v]), m.fireWith(d, [x, T]), l && (p.trigger("ajaxComplete", [x, f]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0),
            e = e || {};
            var i, r, o, s, a, l, u, c, f = rt.ajaxSetup({},
            e),
            d = f.context || f,
            p = f.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
            h = rt.Deferred(),
            m = rt.Callbacks("once memory"),
            g = f.statusCode || {},
            v = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c) for (c = {}; e = qe.exec(s);) c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (f.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) g[e] = [g[e], t[e]];
                    else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return u && u.abort(e),
                    n(0, e),
                    this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || Oe) + "").replace(He, "").replace(Re, Le[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = rt.trim(f.dataType || "*").toLowerCase().match(bt) || [""], null == f.crossDomain && (i = Be.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Le[1] && i[2] === Le[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Le[3] || ("http:" === Le[1] ? "80": "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = rt.param(f.data, f.traditional)), R(Ie, f, e, x), 2 === b) return x;
            l = rt.event && f.global,
            l && 0 === rt.active++&&rt.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Fe.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (je.test(o) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = Me.test(o) ? o.replace(Me, "$1_=" + _e++) : o + (je.test(o) ? "&": "?") + "_=" + _e++)),
            f.ifModified && (rt.lastModified[o] && x.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && x.setRequestHeader("If-None-Match", rt.etag[o])),
            (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", f.contentType),
            x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + We + "; q=0.01": "") : f.accepts["*"]);
            for (r in f.headers) x.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) x[r](f[r]);
            if (u = R(ze, f, e, x)) {
                x.readyState = 1,
                l && p.trigger("ajaxSend", [x, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                },
                f.timeout));
                try {
                    b = 1,
                    u.send(v, n)
                } catch(T) {
                    if (! (2 > b)) throw T;
                    n( - 1, T)
                }
            } else n( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return rt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }),
    rt.each(["get", "post"],
    function(t, e) {
        rt[e] = function(t, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0),
            rt.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    rt.fn.extend({
        wrapAll: function(t) {
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = rt(this),
                n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(n) {
                rt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    rt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
    },
    rt.expr.filters.visible = function(t) {
        return ! rt.expr.filters.hidden(t)
    };
    var Xe = /%20/g,
    Ve = /\[\]$/,
    Ke = /\r?\n/g,
    Je = /^(?:submit|button|image|reset|file)$/i,
    Qe = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var n, i = [],
        r = function(t, e) {
            e = rt.isFunction(e) ? e() : null == e ? "": e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t,
        function() {
            r(this.name, this.value)
        });
        else for (n in t) W(n, t[n], e, r);
        return i.join("&").replace(Xe, "+")
    },
    rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && Qe.test(this.nodeName) && !Je.test(t) && (this.checked || !_t.test(t))
            }).map(function(t, e) {
                var n = rt(this).val();
                return null == n ? null: rt.isArray(n) ? rt.map(n,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ke, "\r\n")
                }
            }).get()
        }
    }),
    rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
    }: U;
    var Ge = 0,
    Ye = {},
    Ze = rt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload",
    function() {
        for (var t in Ye) Ye[t](void 0, !0)
    }),
    nt.cors = !!Ze && "withCredentials" in Ze,
    Ze = nt.ajax = !!Ze,
    Ze && rt.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(),
                    s = ++Ge;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    //console.log(o);
                    //console.log(t)
                    o.send(t.hasContent && t.data || null),
                    e = function(n, r) {
                        var a, l, u;
                        if (e && (r || 4 === o.readyState)) if (delete Ye[s], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
                        else {
                            u = {},
                            a = o.status,
                            "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch(c) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                        }
                        u && i(a, l, u, o.getAllResponseHeaders())
                    },
                    t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ye[s] = e: e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t),
                t
            }
        }
    }),
    rt.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    rt.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, n = ht.head || rt("head")[0] || ht.documentElement;
            return {
                send: function(i, r) {
                    e = ht.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) { (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    },
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
    en = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || rt.expando + "_" + _e++;
            return this[t] = !0,
            t
        }
    }),
    rt.ajaxPrefilter("json jsonp",
    function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (je.test(e.url) ? "&": "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || rt.error(r + " was not called"),
            s[0]
        },
        e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        },
        i.always(function() {
            t[r] = o,
            e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)),
            s && rt.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    rt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || ht;
        var i = ft.exec(t),
        r = !n && [];
        return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var nn = rt.fn.load;
    rt.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var i, r, o, s = this,
        a = t.indexOf(" ");
        return a >= 0 && (i = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)),
        rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
        s.length > 0 && rt.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
        }).complete(n &&
        function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }),
        this
    },
    rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers,
        function(e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    rt.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = rt.css(t, "position"),
            f = rt(t),
            d = {};
            "static" === c && (t.style.position = "relative"),
            a = f.offset(),
            o = rt.css(t, "top"),
            l = rt.css(t, "left"),
            u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1,
            u ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0),
            rt.isFunction(e) && (e = e.call(t, n, a)),
            null != e.top && (d.top = e.top - a.top + s),
            null != e.left && (d.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, d) : f.css(d)
        }
    },
    rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
            if (o) return e = o.documentElement,
            rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Ct && (i = r.getBoundingClientRect()), n = V(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || rn; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                return t || rn
            })
        }
    }),
    rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var n = /Y/.test(e);
        rt.fn[t] = function(i) {
            return $t(this,
            function(t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r: rt(o).scrollTop()) : t[i] = r)
            },
            t, i, arguments.length, null)
        }
    }),
    rt.each(["top", "left"],
    function(t, e) {
        rt.cssHooks[e] = S(nt.pixelPosition,
        function(t, n) {
            return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px": n) : void 0
        })
    }),
    rt.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(n, i) {
            rt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                s = n || (i === !0 || r === !0 ? "margin": "border");
                return $t(this,
                function(e, n, i) {
                    var r;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s)
                },
                e, o ? i: void 0, o, null)
            }
        })
    }),
    rt.fn.size = function() {
        return this.length
    },
    rt.fn.andSelf = rt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return rt
    });
    var on = t.jQuery,
    sn = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = sn),
        e && t.jQuery === rt && (t.jQuery = on),
        rt
    },
    typeof e === Ct && (t.jQuery = t.$ = rt),
    rt
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e) if (void 0 !== t.style[n]) return {
            end: e[n]
        };
        return ! 1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
        i = this;
        t(this).one(t.support.transition.end,
        function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e),
        this
    },
    t(function() {
        t.support.transition = e()
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
    n = function(n) {
        t(n).on("click", e, this.close)
    };
    n.prototype.close = function(e) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var i = t(this),
        r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(r);
        e && e.preventDefault(),
        o.length || (o = i.hasClass("alert") ? i: i.parent()),
        o.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)),
            "string" == typeof e && r[e].call(i)
        })
    },
    t.fn.alert.Constructor = n,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = i,
        this
    },
    t(document).on("click.bs.alert.data-api", e, n.prototype.close)
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({},
        e.DEFAULTS, i),
        this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    },
    e.prototype.setState = function(e) {
        var n = "disabled",
        i = this.$element,
        r = i.is("input") ? "val": "html",
        o = i.data();
        e += "Text",
        o.resetText || i.data("resetText", i[r]()),
        i[r](o[e] || this.options[e]),
        setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        },
        this), 0)
    },
    e.prototype.toggle = function() {
        var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
            t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.button"),
            o = "object" == typeof n && n;
            r || i.data("bs.button", r = new e(this, o)),
            "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    },
    t.fn.button.Constructor = e,
    t.fn.button.noConflict = function() {
        return t.fn.button = n,
        this
    },
    t(document).on("click.bs.button.data-api", "[data-toggle^=button]",
    function(e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")),
        n.button("toggle"),
        e.preventDefault()
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    e.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    },
    e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    },
    e.prototype.to = function(e) {
        var n = this,
        i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next": "prev", t(this.$items[e]))
    },
    e.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    e.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
        r = n || i[e](),
        o = this.interval,
        s = "next" == e ? "left": "right",
        a = "next" == e ? "first": "last",
        l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = t.Event("slide.bs.carousel", {
            relatedTarget: r[0],
            direction: s
        });
        return this.$element.trigger(u),
        u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel",
        function() {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one(t.support.transition.end,
        function() {
            r.removeClass([e, s].join(" ")).addClass("active"),
            i.removeClass(["active", s].join(" ")),
            l.sliding = !1,
            setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            },
            0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = t.fn.carousel;
    t.fn.carousel = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.carousel"),
            o = t.extend({},
            e.DEFAULTS, i.data(), "object" == typeof n && n),
            s = "string" == typeof n ? n: o.slide;
            r || i.data("bs.carousel", r = new e(this, o)),
            "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    },
    t.fn.carousel.Constructor = e,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n,
        this
    },
    t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function(e) {
        var n, i = t(this),
        r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
        o = t.extend({},
        r.data(), i.data()),
        s = i.attr("data-slide-to");
        s && (o.interval = !1),
        r.carousel(o),
        (s = i.attr("data-slide-to")) && r.data("bs.carousel").to(s),
        e.preventDefault()
    }),
    t(window).on("load",
    function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({},
        e.DEFAULTS, i),
        this.transitioning = null,
        this.options.parent && (this.$parent = t(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    },
    e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width": "height"
    },
    e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning) return;
                    n.collapse("hide"),
                    i || n.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0),
                this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                var s = t.camelCase(["scroll", r].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
            }
        }
    },
    e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    },
    e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var n = t.fn.collapse;
    t.fn.collapse = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.collapse"),
            o = t.extend({},
            e.DEFAULTS, i.data(), "object" == typeof n && n); ! r && o.toggle && "show" == n && (n = !n),
            r || i.data("bs.collapse", r = new e(this, o)),
            "string" == typeof n && r[n]()
        })
    },
    t.fn.collapse.Constructor = e,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n,
        this
    },
    t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]",
    function(e) {
        var n, i = t(this),
        r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
        o = t(r),
        s = o.data("bs.collapse"),
        a = s ? "toggle": i.data(),
        l = i.attr("data-parent"),
        u = l && t(l);
        s && s.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        o.collapse(a)
    })
} (jQuery),
+
function(t) {
    "use strict";
    function e(e) {
        t(i).remove(),
        t(r).each(function() {
            var i = n(t(this)),
            r = {
                relatedTarget: this
            };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        })
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i: e.parent()
    }
    var i = ".dropdown-backdrop",
    r = "[data-toggle=dropdown]",
    o = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    o.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r),
            s = o.hasClass("open");
            if (e(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown", a),
                r.focus()
            }
            return ! 1
        }
    },
    o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                s = o.hasClass("open");
                if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(r).focus(),
                i.click();
                var a = " li:not(.divider):visible a",
                l = o.find("[role=menu]" + a + ", [role=listbox]" + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--,
                    40 == e.keyCode && u < l.length - 1 && u++,
                    ~u || (u = 0),
                    l.eq(u).focus()
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
            i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)),
            "string" == typeof e && i[e].call(n)
        })
    },
    t.fn.dropdown.Constructor = o,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s,
        this
    },
    t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form",
    function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu], [role=listbox]", o.prototype.keydown)
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n,
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide": "show"](t)
    },
    e.prototype.show = function(e) {
        var n = this,
        i = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body),
            n.$element.show().scrollTop(0),
            i && n.$element[0].offsetWidth,
            n.$element.addClass("in").attr("aria-hidden", !1),
            n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one(t.support.transition.end,
            function() {
                n.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
        }))
    },
    e.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        },
        this))
    },
    e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.removeBackdrop(),
            t.$element.trigger("hidden.bs.modal")
        })
    },
    e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    e.prototype.backdrop = function(e) {
        var n = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var n = t.fn.modal;
    t.fn.modal = function(n, i) {
        return this.each(function() {
            var r = t(this),
            o = r.data("bs.modal"),
            s = t.extend({},
            e.DEFAULTS, r.data(), "object" == typeof n && n);
            o || r.data("bs.modal", o = new e(this, s)),
            "string" == typeof n ? o[n](i) : s.show && o.show(i)
        })
    },
    t.fn.modal.Constructor = e,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = n,
        this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(e) {
        var n = t(this),
        i = n.attr("href"),
        r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
        o = r.data("bs.modal") ? "toggle": t.extend({
            remote: !/#/.test(i) && i
        },
        r.data(), n.data());
        n.is("a") && e.preventDefault(),
        r.modal(o, this).one("hide",
        function() {
            n.is(":visible") && n.focus()
        })
    }),
    t(document).on("show.bs.modal", ".modal",
    function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal",
    function() {
        t(document.body).removeClass("modal-open")
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    e.prototype.init = function(e, n, i) {
        this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(i);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter": "focusin",
                l = "hover" == s ? "mouseleave": "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    },
    e.prototype.getOptions = function(e) {
        return e = t.extend({},
        this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    },
    e.prototype.getDelegateOptions = function() {
        var e = {},
        n = this.getDefaults();
        return this._options && t.each(this._options,
        function(t, i) {
            n[t] != i && (e[t] = i)
        }),
        e
    },
    e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        },
        n.options.delay.show)) : n.show()
    },
    e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout),
        n.hoverState = "out",
        n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        },
        n.options.delay.hide)) : n.hide()
    },
    e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var n = this,
            i = this.tip();
            this.setContent(),
            this.options.animation && i.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
            o = /\s?auto?\s?/i,
            s = o.test(r);
            s && (r = r.replace(o, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r),
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var a = this.getPosition(),
            l = i[0].offsetWidth,
            u = i[0].offsetHeight;
            if (s) {
                var c = this.$element.parent(),
                f = r,
                d = document.documentElement.scrollTop || document.body.scrollTop,
                p = "body" == this.options.container ? window.innerWidth: c.outerWidth(),
                h = "body" == this.options.container ? window.innerHeight: c.outerHeight(),
                m = "body" == this.options.container ? 0 : c.offset().left;
                r = "bottom" == r && a.top + a.height + u - d > h ? "top": "top" == r && a.top - d - u < 0 ? "bottom": "right" == r && a.right + l > p ? "left": "left" == r && a.left - l < m ? "right": r,
                i.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, a, l, u);
            this.applyPlacement(g, r),
            this.hoverState = null;
            var v = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, v).emulateTransitionEnd(150) : v()
        }
    },
    e.prototype.applyPlacement = function(e, n) {
        var i, r = this.tip(),
        o = r[0].offsetWidth,
        s = r[0].offsetHeight,
        a = parseInt(r.css("margin-top"), 10),
        l = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0),
        isNaN(l) && (l = 0),
        e.top = e.top + a,
        e.left = e.left + l,
        t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        },
        e), 0),
        r.addClass("in");
        var u = r[0].offsetWidth,
        c = r[0].offsetHeight;
        if ("top" == n && c != s && (i = !0, e.top = e.top + s - c), /bottom|top/.test(n)) {
            var f = 0;
            e.left < 0 && (f = -2 * e.left, e.left = 0, r.offset(e), u = r[0].offsetWidth, c = r[0].offsetHeight),
            this.replaceArrow(f - o + u, u, "left")
        } else this.replaceArrow(c - s, c, "top");
        i && r.offset(e)
    },
    e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%": "")
    },
    e.prototype.setContent = function() {
        var t = this.tip(),
        e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
        t.removeClass("fade in top bottom left right")
    },
    e.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(),
            n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
        i = this.tip(),
        r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r),
        r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    },
    e.prototype.fixTitle = function() {
        var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    },
    e.prototype.hasContent = function() {
        return this.getTitle()
    },
    e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({},
        "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        },
        this.$element.offset())
    },
    e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        }: "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        }: "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        }: {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    },
    e.prototype.getTitle = function() {
        var t, e = this.$element,
        n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    },
    e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    },
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    e.prototype.enable = function() {
        this.enabled = !0
    },
    e.prototype.disable = function() {
        this.enabled = !1
    },
    e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    e.prototype.toggle = function(e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    },
    e.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.tooltip"),
            o = "object" == typeof n && n; (r || "destroy" != n) && (r || i.data("bs.tooltip", r = new e(this, o)), "string" == typeof n && r[n]())
        })
    },
    t.fn.tooltip.Constructor = e,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n,
        this
    }
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({},
    t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    e.prototype = t.extend({},
    t.fn.tooltip.Constructor.prototype),
    e.prototype.constructor = e,
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    },
    e.prototype.setContent = function() {
        var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html": "text"](e),
        t.find(".popover-content")[this.options.html ? "string" == typeof n ? "html": "append": "text"](n),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    },
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    e.prototype.getContent = function() {
        var t = this.$element,
        e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    },
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)),
        this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.popover"),
            o = "object" == typeof n && n; (r || "destroy" != n) && (r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]())
        })
    },
    t.fn.popover.Constructor = e,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = n,
        this
    }
} (jQuery),
+
function(t) {
    "use strict";
    function e(n, i) {
        var r, o = t.proxy(this.process, this);
        this.$element = t(t(n).is("body") ? window: n),
        this.$body = t("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o),
        this.options = t.extend({},
        e.DEFAULTS, i),
        this.selector = (this.options.target || (r = t(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = t([]),
        this.targets = t([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.refresh = function() {
        var e = this.$element[0] == window ? "offset": "position";
        this.offsets = t([]),
        this.targets = t([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
            r = i.data("target") || i.attr("href"),
            o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            n.offsets.push(this[0]),
            n.targets.push(this[1])
        })
    },
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        i = n - this.$scrollElement.height(),
        r = this.offsets,
        o = this.targets,
        s = this.activeTarget;
        if (e >= i) return s != (t = o.last()[0]) && this.activate(t);
        if (s && e <= r[0]) return s != (t = o[0]) && this.activate(t);
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
    },
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.scrollspy"),
            o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)),
            "string" == typeof n && r[n]()
        })
    },
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n,
        this
    },
    t(window).on("load",
    function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0],
            o = t.Event("show.bs.tab", {
                relatedTarget: r
            });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.parent("li"), n),
                this.activate(s, s.parent(),
                function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    },
    e.prototype.activate = function(e, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            e.addClass("active"),
            s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
            i && i()
        }
        var o = n.find("> .active"),
        s = i && t.support.transition && o.hasClass("fade");
        s ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(),
        o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.tab");
            r || i.data("bs.tab", r = new e(this)),
            "string" == typeof n && r[n]()
        })
    },
    t.fn.tab.Constructor = e,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = n,
        this
    },
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]',
    function(e) {
        e.preventDefault(),
        t(this).tab("show")
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(n, i) {
        this.options = t.extend({},
        e.DEFAULTS, i),
        this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(n),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom",
    e.DEFAULTS = {
        offset: 0
    },
    e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(),
        n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    },
    e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    },
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = t(document).height(),
            i = this.$window.scrollTop(),
            r = this.$element.offset(),
            o = this.options.offset,
            s = o.top,
            a = o.bottom;
            "top" == this.affixed && (r.top += i),
            "object" != typeof o && (a = s = o),
            "function" == typeof s && (s = o.top(this.$element)),
            "function" == typeof a && (a = o.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= n - a ? "bottom": null != s && s >= i ? "top": !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l: ""),
                c = t.Event(u + ".bs.affix");
                this.$element.trigger(c),
                c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: n - a - this.$element.height()
                }))
            }
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function(n) {
        return this.each(function() {
            var i = t(this),
            r = i.data("bs.affix"),
            o = "object" == typeof n && n;
            r || i.data("bs.affix", r = new e(this, o)),
            "string" == typeof n && r[n]()
        })
    },
    t.fn.affix.Constructor = e,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = n,
        this
    },
    t(window).on("load",
    function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
            n = e.data();
            n.offset = n.offset || {},
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            e.affix(n)
        })
    })
} (jQuery),
define("bootstrap", ["jquery"],
function(t) {
    return function() {
        var e;
        return e || t.$.fn.popover
    }
} (this)),
function(t, e, n) {
    function i(t) {
        var e = {},
        i = /^jQuery\d+$/;
        return n.each(t.attributes,
        function(t, n) {
            n.specified && !i.test(n.name) && (e[n.name] = n.value)
        }),
        e
    }
    function r(t, e) {
        var i = this,
        r = n(i);
        if (i.value == r.attr("placeholder") && r.hasClass("placeholder")) if (r.data("placeholder-password")) {
            if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), t === !0) return r[0].value = e;
            r.focus()
        } else i.value = "",
        r.removeClass("placeholder"),
        i == s() && i.select()
    }
    function o() {
        var t, e = this,
        o = n(e),
        s = this.id;
        if ("" == e.value) {
            if ("password" == e.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        t = o.clone().attr({
                            type: "text"
                        })
                    } catch(a) {
                        t = n("<input>").attr(n.extend(i(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": s
                    }).bind("focus.placeholder", r),
                    o.data({
                        "placeholder-textinput": t,
                        "placeholder-id": s
                    }).before(t)
                }
                o = o.removeAttr("id").hide().prev().attr("id", s).show()
            }
            o.addClass("placeholder"),
            o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    function s() {
        try {
            return e.activeElement
        } catch(t) {}
    }
    var a, l, u = "[object OperaMini]" == Object.prototype.toString.call(t.operamini),
    c = "placeholder" in e.createElement("input") && !u,
    f = "placeholder" in e.createElement("textarea") && !u,
    d = n.fn,
    p = n.valHooks,
    h = n.propHooks;
    c && f ? (l = d.placeholder = function() {
        return this
    },
    l.input = l.textarea = !0) : (l = d.placeholder = function() {
        var t = this;
        return t.filter((c ? "textarea": ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        t
    },
    l.input = c, l.textarea = f, a = {
        get: function(t) {
            var e = n(t),
            i = e.data("placeholder-password");
            return i ? i[0].value: e.data("placeholder-enabled") && e.hasClass("placeholder") ? "": t.value
        },
        set: function(t, e) {
            var i = n(t),
            a = i.data("placeholder-password");
            return a ? a[0].value = e: i.data("placeholder-enabled") ? ("" == e ? (t.value = e, t != s() && o.call(t)) : i.hasClass("placeholder") ? r.call(t, !0, e) || (t.value = e) : t.value = e, i) : t.value = e
        }
    },
    c || (p.input = a, h.value = a), f || (p.textarea = a, h.value = a), n(function() {
        n(e).delegate("form", "submit.placeholder",
        function() {
            var t = n(".placeholder", this).each(r);
            setTimeout(function() {
                t.each(o)
            },
            10)
        })
    }), n(t).bind("beforeunload.placeholder",
    function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
} (this, document, jQuery),
define("placeholder-text", ["jquery"],
function(t) {
    return function() {
        var e;
        return e || t.$.fn.placeholder;
    }
} (this)),
function() {
    function t(t) {
        function e(e, n, i, r, o, s) {
            for (; o >= 0 && s > o; o += t) {
                var a = r ? r[o] : o;
                i = n(i, e[a], a, e)
            }
            return i
        }
        return function(n, i, r, o) {
            i = b(i, o, 4);
            var s = !S(n) && y.keys(n),
            a = (s || n).length,
            l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = n[s ? s[l] : l], l += t),
            e(n, i, r, s, l, a)
        }
    }
    function e(t) {
        return function(e, n, i) {
            n = w(n, i);
            for (var r = E(e), o = t > 0 ? 0 : r - 1; o >= 0 && r > o; o += t) if (n(e[o], o, e)) return o;
            return - 1
        }
    }
    function n(t, e, n) {
        return function(i, r, o) {
            var s = 0,
            a = E(i);
            if ("number" == typeof o) t > 0 ? s = o >= 0 ? o: Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (n && o && a) return o = n(i, r),
            i[o] === r ? o: -1;
            if (r !== r) return o = e(c.call(i, s, a), y.isNaN),
            o >= 0 ? o + s: -1;
            for (o = t > 0 ? s: a - 1; o >= 0 && a > o; o += t) if (i[o] === r) return o;
            return - 1
        }
    }
    function i(t, e) {
        var n = j.length,
        i = t.constructor,
        r = y.isFunction(i) && i.prototype || a,
        o = "constructor";
        for (y.has(t, o) && !y.contains(e, o) && e.push(o); n--;) o = j[n],
        o in t && t[o] !== r[o] && !y.contains(e, o) && e.push(o)
    }
    var r = this,
    o = r._,
    s = Array.prototype,
    a = Object.prototype,
    l = Function.prototype,
    u = s.push,
    c = s.slice,
    f = a.toString,
    d = a.hasOwnProperty,
    p = Array.isArray,
    h = Object.keys,
    m = l.bind,
    g = Object.create,
    v = function() {},
    y = function(t) {
        return t instanceof y ? t: this instanceof y ? void(this._wrapped = t) : new y(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y,
    y.VERSION = "1.8.3";
    var b = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            };
        case 3:
            return function(n, i, r) {
                return t.call(e, n, i, r)
            };
        case 4:
            return function(n, i, r, o) {
                return t.call(e, n, i, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    },
    w = function(t, e, n) {
        return null == t ? y.identity: y.isFunction(t) ? b(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
    };
    y.iteratee = function(t, e) {
        return w(t, e, 1 / 0)
    };
    var x = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (2 > i || null == n) return n;
            for (var r = 1; i > r; r++) for (var o = arguments[r], s = t(o), a = s.length, l = 0; a > l; l++) {
                var u = s[l];
                e && void 0 !== n[u] || (n[u] = o[u])
            }
            return n
        }
    },
    T = function(t) {
        if (!y.isObject(t)) return {};
        if (g) return g(t);
        v.prototype = t;
        var e = new v;
        return v.prototype = null,
        e
    },
    C = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    },
    k = Math.pow(2, 53) - 1,
    E = C("length"),
    S = function(t) {
        var e = E(t);
        return "number" == typeof e && e >= 0 && k >= e
    };
    y.each = y.forEach = function(t, e, n) {
        e = b(e, n);
        var i, r;
        if (S(t)) for (i = 0, r = t.length; r > i; i++) e(t[i], i, t);
        else {
            var o = y.keys(t);
            for (i = 0, r = o.length; r > i; i++) e(t[o[i]], o[i], t)
        }
        return t
    },
    y.map = y.collect = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = Array(r), s = 0; r > s; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t)
        }
        return o
    },
    y.reduce = y.foldl = y.inject = t(1),
    y.reduceRight = y.foldr = t( - 1),
    y.find = y.detect = function(t, e, n) {
        var i;
        return i = S(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n),
        void 0 !== i && -1 !== i ? t[i] : void 0
    },
    y.filter = y.select = function(t, e, n) {
        var i = [];
        return e = w(e, n),
        y.each(t,
        function(t, n, r) {
            e(t, n, r) && i.push(t)
        }),
        i
    },
    y.reject = function(t, e, n) {
        return y.filter(t, y.negate(w(e)), n)
    },
    y.every = y.all = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = 0; r > o; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t)) return ! 1
        }
        return ! 0
    },
    y.some = y.any = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = 0; r > o; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t)) return ! 0
        }
        return ! 1
    },
    y.contains = y.includes = y.include = function(t, e, n, i) {
        return S(t) || (t = y.values(t)),
        ("number" != typeof n || i) && (n = 0),
        y.indexOf(t, e, n) >= 0
    },
    y.invoke = function(t, e) {
        var n = c.call(arguments, 2),
        i = y.isFunction(e);
        return y.map(t,
        function(t) {
            var r = i ? e: t[e];
            return null == r ? r: r.apply(t, n)
        })
    },
    y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    },
    y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    },
    y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    },
    y.max = function(t, e, n) {
        var i, r, o = -(1 / 0),
        s = -(1 / 0);
        if (null == e && null != t) {
            t = S(t) ? t: y.values(t);
            for (var a = 0,
            l = t.length; l > a; a++) i = t[a],
            i > o && (o = i)
        } else e = w(e, n),
        y.each(t,
        function(t, n, i) {
            r = e(t, n, i),
            (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = t, s = r)
        });
        return o
    },
    y.min = function(t, e, n) {
        var i, r, o = 1 / 0,
        s = 1 / 0;
        if (null == e && null != t) {
            t = S(t) ? t: y.values(t);
            for (var a = 0,
            l = t.length; l > a; a++) i = t[a],
            o > i && (o = i)
        } else e = w(e, n),
        y.each(t,
        function(t, n, i) {
            r = e(t, n, i),
            (s > r || r === 1 / 0 && o === 1 / 0) && (o = t, s = r)
        });
        return o
    },
    y.shuffle = function(t) {
        for (var e, n = S(t) ? t: y.values(t), i = n.length, r = Array(i), o = 0; i > o; o++) e = y.random(0, o),
        e !== o && (r[o] = r[e]),
        r[e] = n[o];
        return r
    },
    y.sample = function(t, e, n) {
        return null == e || n ? (S(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    },
    y.sortBy = function(t, e, n) {
        return e = w(e, n),
        y.pluck(y.map(t,
        function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
            i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return - 1
            }
            return t.index - e.index
        }), "value")
    };
    var N = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = w(n, i),
            y.each(e,
            function(i, o) {
                var s = n(i, o, e);
                t(r, i, s)
            }),
            r
        }
    };
    y.groupBy = N(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    y.indexBy = N(function(t, e, n) {
        t[n] = e
    }),
    y.countBy = N(function(t, e, n) {
        y.has(t, n) ? t[n]++:t[n] = 1
    }),
    y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : S(t) ? y.map(t, y.identity) : y.values(t) : []
    },
    y.size = function(t) {
        return null == t ? 0 : S(t) ? t.length: y.keys(t).length
    },
    y.partition = function(t, e, n) {
        e = w(e, n);
        var i = [],
        r = [];
        return y.each(t,
        function(t, n, o) { (e(t, n, o) ? i: r).push(t)
        }),
        [i, r]
    },
    y.first = y.head = y.take = function(t, e, n) {
        return null != t ? null == e || n ? t[0] : y.initial(t, t.length - e) : void 0
    },
    y.initial = function(t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    },
    y.last = function(t, e, n) {
        return null != t ? null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e)) : void 0
    },
    y.rest = y.tail = y.drop = function(t, e, n) {
        return c.call(t, null == e || n ? 1 : e)
    },
    y.compact = function(t) {
        return y.filter(t, y.identity)
    };
    var A = function(t, e, n, i) {
        for (var r = [], o = 0, s = i || 0, a = E(t); a > s; s++) {
            var l = t[s];
            if (S(l) && (y.isArray(l) || y.isArguments(l))) {
                e || (l = A(l, e, n));
                var u = 0,
                c = l.length;
                for (r.length += c; c > u;) r[o++] = l[u++]
            } else n || (r[o++] = l)
        }
        return r
    };
    y.flatten = function(t, e) {
        return A(t, e, !1)
    },
    y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    },
    y.uniq = y.unique = function(t, e, n, i) {
        y.isBoolean(e) || (i = n, n = e, e = !1),
        null != n && (n = w(n, i));
        for (var r = [], o = [], s = 0, a = E(t); a > s; s++) {
            var l = t[s],
            u = n ? n(l, s, t) : l;
            e ? (s && o === u || r.push(l), o = u) : n ? y.contains(o, u) || (o.push(u), r.push(l)) : y.contains(r, l) || r.push(l)
        }
        return r
    },
    y.union = function() {
        return y.uniq(A(arguments, !0, !0))
    },
    y.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, r = E(t); r > i; i++) {
            var o = t[i];
            if (!y.contains(e, o)) {
                for (var s = 1; n > s && y.contains(arguments[s], o); s++);
                s === n && e.push(o)
            }
        }
        return e
    },
    y.difference = function(t) {
        var e = A(arguments, !0, !0, 1);
        return y.filter(t,
        function(t) {
            return ! y.contains(e, t)
        })
    },
    y.zip = function() {
        return y.unzip(arguments)
    },
    y.unzip = function(t) {
        for (var e = t && y.max(t, E).length || 0, n = Array(e), i = 0; e > i; i++) n[i] = y.pluck(t, i);
        return n
    },
    y.object = function(t, e) {
        for (var n = {},
        i = 0,
        r = E(t); r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    },
    y.findIndex = e(1),
    y.findLastIndex = e( - 1),
    y.sortedIndex = function(t, e, n, i) {
        n = w(n, i, 1);
        for (var r = n(e), o = 0, s = E(t); s > o;) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? o = a + 1 : s = a
        }
        return o
    },
    y.indexOf = n(1, y.findIndex, y.sortedIndex),
    y.lastIndexOf = n( - 1, y.findLastIndex),
    y.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0),
        n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; i > o; o++, t += n) r[o] = t;
        return r
    };
    var $ = function(t, e, n, i, r) {
        if (! (i instanceof e)) return t.apply(n, r);
        var o = T(t.prototype),
        s = t.apply(o, r);
        return y.isObject(s) ? s: o
    };
    y.bind = function(t, e) {
        if (m && t.bind === m) return m.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2),
        i = function() {
            return $(t, i, e, this, n.concat(c.call(arguments)))
        };
        return i
    },
    y.partial = function(t) {
        var e = c.call(arguments, 1),
        n = function() {
            for (var i = 0,
            r = e.length,
            o = Array(r), s = 0; r > s; s++) o[s] = e[s] === y ? arguments[i++] : e[s];
            for (; i < arguments.length;) o.push(arguments[i++]);
            return $(t, n, this, this, o)
        };
        return n
    },
    y.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (1 >= i) throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++) n = arguments[e],
        t[n] = y.bind(t[n], t);
        return t
    },
    y.memoize = function(t, e) {
        var n = function(i) {
            var r = n.cache,
            o = "" + (e ? e.apply(this, arguments) : i);
            return y.has(r, o) || (r[o] = t.apply(this, arguments)),
            r[o]
        };
        return n.cache = {},
        n
    },
    y.delay = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        },
        e)
    },
    y.defer = y.partial(y.delay, y, 1),
    y.throttle = function(t, e, n) {
        var i, r, o, s = null,
        a = 0;
        n || (n = {});
        var l = function() {
            a = n.leading === !1 ? 0 : y.now(),
            s = null,
            o = t.apply(i, r),
            s || (i = r = null)
        };
        return function() {
            var u = y.now();
            a || n.leading !== !1 || (a = u);
            var c = e - (u - a);
            return i = this,
            r = arguments,
            0 >= c || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)),
            o
        }
    },
    y.debounce = function(t, e, n) {
        var i, r, o, s, a, l = function() {
            var u = y.now() - s;
            e > u && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
        };
        return function() {
            o = this,
            r = arguments,
            s = y.now();
            var u = n && !i;
            return i || (i = setTimeout(l, e)),
            u && (a = t.apply(o, r), o = r = null),
            a
        }
    },
    y.wrap = function(t, e) {
        return y.partial(e, t)
    },
    y.negate = function(t) {
        return function() {
            return ! t.apply(this, arguments)
        }
    },
    y.compose = function() {
        var t = arguments,
        e = t.length - 1;
        return function() {
            for (var n = e,
            i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
            return i
        }
    },
    y.after = function(t, e) {
        return function() {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    },
    y.before = function(t, e) {
        var n;
        return function() {
            return--t > 0 && (n = e.apply(this, arguments)),
            1 >= t && (e = null),
            n
        }
    },
    y.once = y.partial(y.before, 2);
    var _ = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    j = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (h) return h(t);
        var e = [];
        for (var n in t) y.has(t, n) && e.push(n);
        return _ && i(t, e),
        e
    },
    y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return _ && i(t, e),
        e
    },
    y.values = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
        return i
    },
    y.mapObject = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = r.length, s = {},
        a = 0; o > a; a++) i = r[a],
        s[i] = e(t[i], i, t);
        return s
    },
    y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
        return i
    },
    y.invert = function(t) {
        for (var e = {},
        n = y.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
        return e
    },
    y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t) y.isFunction(t[n]) && e.push(n);
        return e.sort()
    },
    y.extend = x(y.allKeys),
    y.extendOwn = y.assign = x(y.keys),
    y.findKey = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = 0, s = r.length; s > o; o++) if (i = r[o], e(t[i], i, t)) return i
    },
    y.pick = function(t, e, n) {
        var i, r, o = {},
        s = t;
        if (null == s) return o;
        y.isFunction(e) ? (r = y.allKeys(s), i = b(e, n)) : (r = A(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n
        },
        s = Object(s));
        for (var a = 0,
        l = r.length; l > a; a++) {
            var u = r[a],
            c = s[u];
            i(c, u, s) && (o[u] = c)
        }
        return o
    },
    y.omit = function(t, e, n) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
            var i = y.map(A(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return ! y.contains(i, e)
            }
        }
        return y.pick(t, e, n)
    },
    y.defaults = x(y.allKeys, !0),
    y.create = function(t, e) {
        var n = T(t);
        return e && y.extendOwn(n, e),
        n
    },
    y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({},
        t) : t
    },
    y.tap = function(t, e) {
        return e(t),
        t
    },
    y.isMatch = function(t, e) {
        var n = y.keys(e),
        i = n.length;
        if (null == t) return ! i;
        for (var r = Object(t), o = 0; i > o; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r)) return ! 1
        }
        return ! 0
    };
    var D = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof y && (t = t._wrapped),
        e instanceof y && (e = e._wrapped);
        var r = f.call(t);
        if (r !== f.call(e)) return ! 1;
        switch (r) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return + t !== +t ? +e !== +e: 0 === +t ? 1 / +t === 1 / e: +t === +e;
        case "[object Date]":
        case "[object Boolean]":
            return + t === +e
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e) return ! 1;
            var s = t.constructor,
            a = e.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return ! 1
        }
        n = n || [],
        i = i || [];
        for (var l = n.length; l--;) if (n[l] === t) return i[l] === e;
        if (n.push(t), i.push(e), o) {
            if (l = t.length, l !== e.length) return ! 1;
            for (; l--;) if (!D(t[l], e[l], n, i)) return ! 1
        } else {
            var u, c = y.keys(t);
            if (l = c.length, y.keys(e).length !== l) return ! 1;
            for (; l--;) if (u = c[l], !y.has(e, u) || !D(t[u], e[u], n, i)) return ! 1
        }
        return n.pop(),
        i.pop(),
        !0
    };
    y.isEqual = function(t, e) {
        return D(t, e)
    },
    y.isEmpty = function(t) {
        return null == t ? !0 : S(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length: 0 === y.keys(t).length
    },
    y.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    y.isArray = p ||
    function(t) {
        return "[object Array]" === f.call(t)
    },
    y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    },
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
    function(t) {
        y["is" + t] = function(e) {
            return f.call(e) === "[object " + t + "]"
        }
    }),
    y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }),
    "function" != typeof / . / &&"object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    },
    y.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
    },
    y.isNull = function(t) {
        return null === t
    },
    y.isUndefined = function(t) {
        return void 0 === t
    },
    y.has = function(t, e) {
        return null != t && d.call(t, e)
    },
    y.noConflict = function() {
        return r._ = o,
        this
    },
    y.identity = function(t) {
        return t
    },
    y.constant = function(t) {
        return function() {
            return t
        }
    },
    y.noop = function() {},
    y.property = C,
    y.propertyOf = function(t) {
        return null == t ?
        function() {}: function(e) {
            return t[e]
        }
    },
    y.matcher = y.matches = function(t) {
        return t = y.extendOwn({},
        t),
        function(e) {
            return y.isMatch(e, t)
        }
    },
    y.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = b(e, n, 1);
        for (var r = 0; t > r; r++) i[r] = e(r);
        return i
    },
    y.random = function(t, e) {
        return null == e && (e = t, t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    },
    y.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    O = y.invert(L),
    H = function(t) {
        var e = function(e) {
            return t[e]
        },
        n = "(?:" + y.keys(t).join("|") + ")",
        i = RegExp(n),
        r = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "": "" + t,
            i.test(t) ? t.replace(r, e) : t
        }
    };
    y.escape = H(L),
    y.unescape = H(O),
    y.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n),
        y.isFunction(i) ? i.call(t) : i
    };
    var M = 0;
    y.uniqueId = function(t) {
        var e = ++M + "";
        return t ? t + e: e
    },
    y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
    P = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    F = /\\|'|\r|\n|\u2028|\u2029/g,
    R = function(t) {
        return "\\" + P[t]
    };
    y.template = function(t, e, n) { ! e && n && (e = n),
        e = y.defaults({},
        e, y.templateSettings);
        var i = RegExp([(e.escape || q).source, (e.interpolate || q).source, (e.evaluate || q).source].join("|") + "|$", "g"),
        r = 0,
        o = "__p+='";
        t.replace(i,
        function(e, n, i, s, a) {
            return o += t.slice(r, a).replace(F, R),
            r = a + e.length,
            n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'": s && (o += "';\n" + s + "\n__p+='"),
            e
        }),
        o += "';\n",
        e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o)
        } catch(a) {
            throw a.source = o,
            a
        }
        var l = function(t) {
            return s.call(this, t, y)
        },
        u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + o + "}",
        l
    },
    y.chain = function(t) {
        var e = y(t);
        return e._chain = !0,
        e
    };
    var B = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t),
        function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return u.apply(t, arguments),
                B(this, n.apply(y, t))
            }
        })
    },
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            B(this, n)
        }
    }),
    y.each(["concat", "join", "slice"],
    function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return B(this, e.apply(this._wrapped, arguments))
        }
    }),
    y.prototype.value = function() {
        return this._wrapped
    },
    y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
    y.prototype.toString = function() {
        return "" + this._wrapped
    },
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return y
    })
}.call(this),
function(t, e) {
    if ("function" == typeof define && define.amd) define("backbone-vanilla", ["underscore", "jquery", "exports"],
    function(n, i, r) {
        t.Backbone = e(t, r, n, i)
    });
    else if ("undefined" != typeof exports) {
        var n = require("underscore");
        e(t, exports, n)
    } else t.Backbone = e(t, {},
    t._, t.jQuery || t.Zepto || t.ender || t.$)
} (this,
function(t, e, n, i) {
    var r = t.Backbone,
    o = [],
    s = (o.push, o.slice);
    o.splice;
    e.VERSION = "1.1.2",
    e.$ = i,
    e.noConflict = function() {
        return t.Backbone = r,
        this
    },
    e.emulateHTTP = !1,
    e.emulateJSON = !1;
    var a = e.Events = {
        on: function(t, e, n) {
            if (!u(this, "on", t, [e, n]) || !e) return this;
            this._events || (this._events = {});
            var i = this._events[t] || (this._events[t] = []);
            return i.push({
                callback: e,
                context: n,
                ctx: n || this
            }),
            this
        },
        once: function(t, e, i) {
            if (!u(this, "once", t, [e, i]) || !e) return this;
            var r = this,
            o = n.once(function() {
                r.off(t, o),
                e.apply(this, arguments)
            });
            return o._callback = e,
            this.on(t, o, i)
        },
        off: function(t, e, i) {
            var r, o, s, a, l, c, f, d;
            if (!this._events || !u(this, "off", t, [e, i])) return this;
            if (!t && !e && !i) return this._events = void 0,
            this;
            for (a = t ? [t] : n.keys(this._events), l = 0, c = a.length; c > l; l++) if (t = a[l], s = this._events[t]) {
                if (this._events[t] = r = [], e || i) for (f = 0, d = s.length; d > f; f++) o = s[f],
                (e && e !== o.callback && e !== o.callback._callback || i && i !== o.context) && r.push(o);
                r.length || delete this._events[t]
            }
            return this
        },
        trigger: function(t) {
            if (!this._events) return this;
            var e = s.call(arguments, 1);
            if (!u(this, "trigger", t, e)) return this;
            var n = this._events[t],
            i = this._events.all;
            return n && c(n, e),
            i && c(i, arguments),
            this
        },
        stopListening: function(t, e, i) {
            var r = this._listeningTo;
            if (!r) return this;
            var o = !e && !i;
            i || "object" != typeof e || (i = this),
            t && ((r = {})[t._listenId] = t);
            for (var s in r) t = r[s],
            t.off(e, i, this),
            (o || n.isEmpty(t._events)) && delete this._listeningTo[s];
            return this
        }
    },
    l = /\s+/,
    u = function(t, e, n, i) {
        if (!n) return ! 0;
        if ("object" == typeof n) {
            for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
            return ! 1
        }
        if (l.test(n)) {
            for (var o = n.split(l), s = 0, a = o.length; a > s; s++) t[e].apply(t, [o[s]].concat(i));
            return ! 1
        }
        return ! 0
    },
    c = function(t, e) {
        var n, i = -1,
        r = t.length,
        o = e[0],
        s = e[1],
        a = e[2];
        switch (e.length) {
        case 0:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s);
            return;
        case 3:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s, a);
            return;
        default:
            for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
            return
        }
    },
    f = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(f,
    function(t, e) {
        a[e] = function(e, i, r) {
            var o = this._listeningTo || (this._listeningTo = {}),
            s = e._listenId || (e._listenId = n.uniqueId("l"));
            return o[s] = e,
            r || "object" != typeof i || (r = this),
            e[t](i, r, this),
            this
        }
    }),
    a.bind = a.on,
    a.unbind = a.off,
    n.extend(e, a);
    var d = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}),
        this.cid = n.uniqueId("c"),
        this.attributes = {},
        e.collection && (this.collection = e.collection),
        e.parse && (i = this.parse(i, e) || {}),
        i = n.defaults({},
        i, n.result(this, "defaults")),
        this.set(i, e),
        this.changed = {},
        this.initialize.apply(this, arguments)
    };
    n.extend(d.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(t) {
            return n.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return n.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        set: function(t, e, i) {
            var r, o, s, a, l, u, c, f;
            if (null == t) return this;
            if ("object" == typeof t ? (o = t, i = e) : (o = {})[t] = e, i || (i = {}), !this._validate(o, i)) return ! 1;
            s = i.unset,
            l = i.silent,
            a = [],
            u = this._changing,
            this._changing = !0,
            u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}),
            f = this.attributes,
            c = this._previousAttributes,
            this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (r in o) e = o[r],
            n.isEqual(f[r], e) || a.push(r),
            n.isEqual(c[r], e) ? delete this.changed[r] : this.changed[r] = e,
            s ? delete f[r] : f[r] = e;
            if (!l) {
                a.length && (this._pending = i);
                for (var d = 0,
                p = a.length; p > d; d++) this.trigger("change:" + a[d], this, f[a[d]], i)
            }
            if (u) return this;
            if (!l) for (; this._pending;) i = this._pending,
            this._pending = !1,
            this.trigger("change", this, i);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(t, e) {
            return this.set(t, void 0, n.extend({},
            e, {
                unset: !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, n.extend({},
            t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
            var e, i = !1,
            r = this._changing ? this._previousAttributes: this.attributes;
            for (var o in t) n.isEqual(r[o], e = t[o]) || ((i || (i = {}))[o] = e);
            return i
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = this,
            i = t.success;
            return t.success = function(n) {
                return e.set(e.parse(n, t), t) ? (i && i(e, n, t), void e.trigger("sync", e, n, t)) : !1
            },
            q(this, t),
            this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var r, o, s, a = this.attributes;
            if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                validate: !0
            },
            i), r && !i.wait) {
                if (!this.set(r, i)) return ! 1
            } else if (!this._validate(r, i)) return ! 1;
            r && i.wait && (this.attributes = n.extend({},
            a, r)),
            void 0 === i.parse && (i.parse = !0);
            var l = this,
            u = i.success;
            return i.success = function(t) {
                l.attributes = a;
                var e = l.parse(t, i);
                return i.wait && (e = n.extend(r || {},
                e)),
                n.isObject(e) && !l.set(e, i) ? !1 : (u && u(l, t, i), void l.trigger("sync", l, t, i))
            },
            q(this, i),
            o = this.isNew() ? "create": i.patch ? "patch": "update",
            "patch" === o && (i.attrs = r),
            s = this.sync(o, this, i),
            r && i.wait && (this.attributes = a),
            s
        },
        destroy: function(t) {
            t = t ? n.clone(t) : {};
            var e = this,
            i = t.success,
            r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            if (t.success = function(n) { (t.wait || e.isNew()) && r(),
                i && i(e, n, t),
                e.isNew() || e.trigger("sync", e, n, t)
            },
            this.isNew()) return t.success(),
            !1;
            q(this, t);
            var o = this.sync("delete", this, t);
            return t.wait || r(),
            o
        },
        url: function() {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
            return this.isNew() ? t: t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return ! this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({},
            n.extend(t || {},
            {
                validate: !0
            }))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate) return ! 0;
            t = n.extend({},
            this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return i ? (this.trigger("invalid", this, i, n.extend(e, {
                validationError: i
            })), !1) : !0
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(p,
    function(t) {
        d.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.attributes),
            n[t].apply(n, e)
        }
    });
    var h = e.Collection = function(t, e) {
        e || (e = {}),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, n.extend({
            silent: !0
        },
        e))
    },
    m = {
        add: !0,
        remove: !0,
        merge: !0
    },
    g = {
        add: !0,
        remove: !1
    };
    n.extend(h.prototype, a, {
        model: d,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, n.extend({
                merge: !1
            },
            e, g))
        },
        remove: function(t, e) {
            var i = !n.isArray(t);
            t = i ? [t] : n.clone(t),
            e || (e = {});
            var r, o, s, a;
            for (r = 0, o = t.length; o > r; r++) a = t[r] = this.get(t[r]),
            a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, a.trigger("remove", a, this, e)), this._removeReference(a, e));
            return i ? t[0] : t
        },
        set: function(t, e) {
            e = n.defaults({},
            e, m),
            e.parse && (t = this.parse(t, e));
            var i = !n.isArray(t);
            t = i ? t ? [t] : [] : n.clone(t);
            var r, o, s, a, l, u, c, f = e.at,
            p = this.model,
            h = this.comparator && null == f && e.sort !== !1,
            g = n.isString(this.comparator) ? this.comparator: null,
            v = [],
            y = [],
            b = {},
            w = e.add,
            x = e.merge,
            T = e.remove,
            C = !h && w && T ? [] : !1;
            for (r = 0, o = t.length; o > r; r++) {
                if (l = t[r] || {},
                s = l instanceof d ? a = l: l[p.prototype.idAttribute || "id"], u = this.get(s)) T && (b[u.cid] = !0),
                x && (l = l === a ? a.attributes: l, e.parse && (l = u.parse(l, e)), u.set(l, e), h && !c && u.hasChanged(g) && (c = !0)),
                t[r] = u;
                else if (w) {
                    if (a = t[r] = this._prepareModel(l, e), !a) continue;
                    v.push(a),
                    this._addReference(a, e)
                }
                a = u || a,
                !C || !a.isNew() && b[a.id] || C.push(a),
                b[a.id] = !0
            }
            if (T) {
                for (r = 0, o = this.length; o > r; ++r) b[(a = this.models[r]).cid] || y.push(a);
                y.length && this.remove(y, e)
            }
            if (v.length || C && C.length) if (h && (c = !0), this.length += v.length, null != f) for (r = 0, o = v.length; o > r; r++) this.models.splice(f + r, 0, v[r]);
            else {
                C && (this.models.length = 0);
                var k = C || v;
                for (r = 0, o = k.length; o > r; r++) this.models.push(k[r])
            }
            if (c && this.sort({
                silent: !0
            }), !e.silent) {
                for (r = 0, o = v.length; o > r; r++)(a = v[r]).trigger("add", a, this, e); (c || C && C.length) && this.trigger("sort", this, e)
            }
            return i ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0,
            r = this.models.length; r > i; i++) this._removeReference(this.models[i], e);
            return e.previousModels = this.models,
            this._reset(),
            t = this.add(t, n.extend({
                silent: !0
            },
            e)),
            e.silent || this.trigger("reset", this, e),
            t
        },
        push: function(t, e) {
            return this.add(t, n.extend({
                at: this.length
            },
            e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t),
            e
        },
        unshift: function(t, e) {
            return this.add(t, n.extend({
                at: 0
            },
            e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t),
            e
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            return null != t ? this._byId[t] || this._byId[t.id] || this._byId[t.cid] : void 0
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find": "filter"](function(e) {
                for (var n in t) if (t[n] !== e.get(n)) return ! 1;
                return ! 0
            })
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}),
            n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
            t.silent || this.trigger("sort", this, t),
            this
        },
        pluck: function(t) {
            return n.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = t.success,
            i = this;
            return t.success = function(n) {
                var r = t.reset ? "reset": "set";
                i[r](n, t),
                e && e(i, n, t),
                i.trigger("sync", i, n, t)
            },
            q(this, t),
            this.sync("read", this, t)
        },
        create: function(t, e) {
            if (e = e ? n.clone(e) : {},
            !(t = this._prepareModel(t, e))) return ! 1;
            e.wait || this.add(t, e);
            var i = this,
            r = e.success;
            return e.success = function(t, n) {
                e.wait && i.add(t, e),
                r && r(t, n, e)
            },
            t.save(null, e),
            t
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof d) return t;
            e = e ? n.clone(e) : {},
            e.collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
        },
        _addReference: function(t, e) {
            this._byId[t.cid] = t,
            null != t.id && (this._byId[t.id] = t),
            t.collection || (t.collection = this),
            t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t, e) {
            this === t.collection && delete t.collection,
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, n, i) { ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
        }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(v,
    function(t) {
        h.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.models),
            n[t].apply(n, e)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y,
    function(t) {
        h.prototype[t] = function(e, i) {
            var r = n.isFunction(e) ? e: function(t) {
                return t.get(e)
            };
            return n[t](this.models, r, i)
        }
    });
    var b = e.View = function(t) {
        this.cid = n.uniqueId("view"),
        t || (t = {}),
        n.extend(this, n.pick(t, x)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    },
    w = /^(\S+)\s*(.*)$/,
    x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(b.prototype, a, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(),
            this.$el = t instanceof e.$ ? t: e.$(t),
            this.el = this.$el[0],
            n !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(t) {
            if (!t && !(t = n.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[t[e]]), i) {
                    var r = e.match(w),
                    o = r[1],
                    s = r[2];
                    i = n.bind(i, this),
                    o += ".delegateEvents" + this.cid,
                    "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el) this.setElement(n.result(this, "el"), !1);
            else {
                var t = n.extend({},
                n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")),
                this.className && (t["class"] = n.result(this, "className"));
                var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                this.setElement(i, !1)
            }
        }
    }),
    e.sync = function(t, i, r) {
        var o = C[t];
        n.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || M()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
            model: s.data
        }: {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST",
            r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", o),
                a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1),
        "PATCH" === s.type && T && (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var l = r.xhr = e.ajax(n.extend(s, r));
        return i.trigger("request", i, l, r),
        l
    };
    var T = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
    C = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    };
    var k = e.Router = function(t) {
        t || (t = {}),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    },
    E = /\((.*?)\)/g,
    S = /(\(\?)?:\w+/g,
    N = /\*\w+/g,
    A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(k.prototype, a, {
        initialize: function() {},
        route: function(t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)),
            n.isFunction(i) && (r = i, i = ""),
            r || (r = this[i]);
            var o = this;
            return e.history.route(t,
            function(n) {
                var s = o._extractParameters(t, n);
                o.execute(r, s),
                o.trigger.apply(o, ["route:" + i].concat(s)),
                o.trigger("route", i, s),
                e.history.trigger("route", o, i, s)
            }),
            this
        },
        execute: function(t, e) {
            t && t.apply(this, e)
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(A, "\\$&").replace(E, "(?:$1)?").replace(S,
            function(t, e) {
                return e ? t: "([^/?]+)"
            }).replace(N, "([^?]*?)"),
            new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i,
            function(t, e) {
                return e === i.length - 1 ? t || null: t ? decodeURIComponent(t) : null
            })
        }
    });
    var $ = e.History = function() {
        this.handlers = [],
        n.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
    _ = /^[#\/]|\s+$/g,
    j = /^\/+|\/+$/g,
    D = /msie [\w.]+/,
    L = /\/$/,
    O = /#.*$/;
    $.started = !1,
    n.extend($.prototype, a, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                t = decodeURI(this.location.pathname + this.location.search);
                var n = this.root.replace(L, "");
                t.indexOf(n) || (t = t.slice(n.length))
            } else t = this.getHash();
            return t.replace(_, "")
        },
        start: function(t) {
            if ($.started) throw new Error("Backbone.history has already been started");
            $.started = !0,
            this.options = n.extend({
                root: "/"
            },
            this.options, t),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var i = this.getFragment(),
            r = document.documentMode,
            o = D.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            if (this.root = ("/" + this.root + "/").replace(j, "/"), o && this._wantsHashChange) {
                var s = e.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = s.hide().appendTo("body")[0].contentWindow,
                this.navigate(i)
            }
            this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = i;
            var a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0),
                this.location.replace(this.root + "#" + this.fragment),
                !0;
                this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({},
                document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            $.started = !1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
            e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
        },
        loadUrl: function(t) {
            return t = this.fragment = this.getFragment(t),
            n.any(this.handlers,
            function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0
            })
        },
        navigate: function(t, e) {
            if (!$.started) return ! 1;
            e && e !== !0 || (e = {
                trigger: !!e
            });
            var n = this.root + (t = this.getFragment(t || ""));
            if (t = t.replace(O, ""), this.fragment !== t) {
                if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState": "pushState"]({},
                document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, t, e.replace),
                    this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e)
            } else t.hash = "#" + e
        }
    }),
    e.history = new $;
    var H = function(t, e) {
        var i, r = this;
        i = t && n.has(t, "constructor") ? t.constructor: function() {
            return r.apply(this, arguments)
        },
        n.extend(i, r, e);
        var o = function() {
            this.constructor = i
        };
        return o.prototype = r.prototype,
        i.prototype = new o,
        t && n.extend(i.prototype, t),
        i.__super__ = r.prototype,
        i
    };
    d.extend = h.extend = k.extend = b.extend = $.extend = H;
    var M = function() {
        throw new Error('A "url" property or function must be specified')
    },
    q = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n(t, i, e),
            t.trigger("error", t, i, e)
        }
    };
    return e
}),
function(t, e, n) {
    function i(t, e, n) {
        return t.addEventListener ? void t.addEventListener(e, n, !1) : void t.attachEvent("on" + e, n)
    }
    function r(t) {
        if ("keypress" == t.type) {
            var e = String.fromCharCode(t.which);
            return t.shiftKey || (e = e.toLowerCase()),
            e
        }
        return E[t.which] ? E[t.which] : S[t.which] ? S[t.which] : String.fromCharCode(t.which).toLowerCase()
    }
    function o(t, e) {
        return t.sort().join(",") === e.sort().join(",")
    }
    function s(t) {
        t = t || {};
        var e, n = !1;
        for (e in j) t[e] ? n = !0 : j[e] = 0;
        n || (O = !1)
    }
    function a(t, e, n, i, r, s) {
        var a, l, u = [],
        c = n.type;
        if (!$[t]) return [];
        for ("keyup" == c && h(t) && (e = [t]), a = 0; a < $[t].length; ++a) if (l = $[t][a], (i || !l.seq || j[l.seq] == l.level) && c == l.action && ("keypress" == c && !n.metaKey && !n.ctrlKey || o(e, l.modifiers))) {
            var f = !i && l.combo == r,
            d = i && l.seq == i && l.level == s; (f || d) && $[t].splice(a, 1),
            u.push(l)
        }
        return u
    }
    function l(t) {
        var e = [];
        return t.shiftKey && e.push("shift"),
        t.altKey && e.push("alt"),
        t.ctrlKey && e.push("ctrl"),
        t.metaKey && e.push("meta"),
        e
    }
    function u(t) {
        return t.preventDefault ? void t.preventDefault() : void(t.returnValue = !1)
    }
    function c(t) {
        return t.stopPropagation ? void t.stopPropagation() : void(t.cancelBubble = !0)
    }
    function f(t, e, n, i) {
        M.stopCallback(e, e.target || e.srcElement, n, i) || t(e, n) === !1 && (u(e), c(e))
    }
    function d(t, e, n) {
        var i, r = a(t, e, n),
        o = {},
        l = 0,
        u = !1;
        for (i = 0; i < r.length; ++i) r[i].seq && (l = Math.max(l, r[i].level));
        for (i = 0; i < r.length; ++i) if (r[i].seq) {
            if (r[i].level != l) continue;
            u = !0,
            o[r[i].seq] = 1,
            f(r[i].callback, n, r[i].combo, r[i].seq)
        } else u || f(r[i].callback, n, r[i].combo);
        var c = "keypress" == n.type && L;
        n.type != O || h(t) || c || s(o),
        L = u && "keydown" == n.type
    }
    function p(t) {
        "number" != typeof t.which && (t.which = t.keyCode);
        var e = r(t);
        if (e) return "keyup" == t.type && D === e ? void(D = !1) : void M.handleKey(e, l(t), t)
    }
    function h(t) {
        return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
    }
    function m() {
        clearTimeout(k),
        k = setTimeout(s, 1e3)
    }
    function g() {
        if (!C) {
            C = {};
            for (var t in E) t > 95 && 112 > t || E.hasOwnProperty(t) && (C[E[t]] = t)
        }
        return C
    }
    function v(t, e, n) {
        return n || (n = g()[t] ? "keydown": "keypress"),
        "keypress" == n && e.length && (n = "keydown"),
        n
    }
    function y(t, e, n, i) {
        function o(e) {
            return function() {
                O = e,
                ++j[t],
                m()
            }
        }
        function a(e) {
            f(n, e, t),
            "keyup" !== i && (D = r(e)),
            setTimeout(s, 10)
        }
        j[t] = 0;
        for (var l = 0; l < e.length; ++l) {
            var u = l + 1 === e.length,
            c = u ? a: o(i || w(e[l + 1]).action);
            x(e[l], c, i, t, l)
        }
    }
    function b(t) {
        return "+" === t ? ["+"] : t.split("+")
    }
    function w(t, e) {
        var n, i, r, o = [];
        for (n = b(t), r = 0; r < n.length; ++r) i = n[r],
        A[i] && (i = A[i]),
        e && "keypress" != e && N[i] && (i = N[i], o.push("shift")),
        h(i) && o.push(i);
        return e = v(i, o, e),
        {
            key: i,
            modifiers: o,
            action: e
        }
    }
    function x(t, e, n, i, r) {
        _[t + ":" + n] = e,
        t = t.replace(/\s+/g, " ");
        var o, s = t.split(" ");
        return s.length > 1 ? void y(t, s, e, n) : (o = w(t, n), $[o.key] = $[o.key] || [], a(o.key, o.modifiers, {
            type: o.action
        },
        i, t, r), void $[o.key][i ? "unshift": "push"]({
            callback: e,
            modifiers: o.modifiers,
            action: o.action,
            seq: i,
            level: r,
            combo: t
        }))
    }
    function T(t, e, n) {
        for (var i = 0; i < t.length; ++i) x(t[i], e, n)
    }
    for (var C, k, E = {
        8 : "backspace",
        9 : "tab",
        13 : "enter",
        16 : "shift",
        17 : "ctrl",
        18 : "alt",
        20 : "capslock",
        27 : "esc",
        32 : "space",
        33 : "pageup",
        34 : "pagedown",
        35 : "end",
        36 : "home",
        37 : "left",
        38 : "up",
        39 : "right",
        40 : "down",
        45 : "ins",
        46 : "del",
        91 : "meta",
        93 : "meta",
        224 : "meta"
    },
    S = {
        106 : "*",
        107 : "+",
        109 : "-",
        110 : ".",
        111 : "/",
        186 : ";",
        187 : "=",
        188 : ",",
        189 : "-",
        190 : ".",
        191 : "/",
        192 : "`",
        219 : "[",
        220 : "\\",
        221 : "]",
        222 : "'"
    },
    N = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    },
    A = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta": "ctrl"
    },
    $ = {},
    _ = {},
    j = {},
    D = !1, L = !1, O = !1, H = 1; 20 > H; ++H) E[111 + H] = "f" + H;
    for (H = 0; 9 >= H; ++H) E[H + 96] = H;
    i(e, "keypress", p),
    i(e, "keydown", p),
    i(e, "keyup", p);
    var M = {
        bind: function(t, e, n) {
            return t = t instanceof Array ? t: [t],
            T(t, e, n),
            this
        },
        unbind: function(t, e) {
            return M.bind(t,
            function() {},
            e)
        },
        trigger: function(t, e) {
            return _[t + ":" + e] && _[t + ":" + e]({},
            t),
            this
        },
        reset: function() {
            return $ = {},
            _ = {},
            this
        },
        stopCallback: function(t, e) {
            return (" " + e.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable
        },
        handleKey: d
    };
    t.Mousetrap = M,
    "function" == typeof define && define.amd && define("mousetrap", M)
} (window, document),
define("mousetrap-global", ["mousetrap"],
function(t) {
    "use strict";
    var e = {},
    n = t.stopCallback,
    i = t.unbind;
    return t.stopCallback = function(t, i, r, o) {
        return e[r] || e[o] ? !1 : n(t, i, r)
    },
    t.bindGlobal = function(n, i, r) {
        if (t.bind(n, i, r), n instanceof Array) for (var o = 0; o < n.length; o++) e[n[o]] = !0;
        else e[n] = !0
    },
    t.unbind = function(n, r) {
        return delete e[n],
        i.apply(t, [n, r])
    },
    t
}),
define("backbone", ["require", "underscore", "backbone-vanilla", "mousetrap-global"],
function(t) {
    "use strict";
    var e = t("underscore"),
    n = t("backbone-vanilla"),
    i = t("mousetrap-global"),
    r = n.View.prototype.delegateEvents,
    o = n.View.prototype.undelegateEvents,
    s = n.View.prototype.remove;
    return e.extend(n.View.prototype, {
        bindKeyboardEvents: function(t) {
            if (!t && !(t = e.result(this, "keyboardEvents"))) return this;
            for (var n in t) {
                var r = t[n];
                e.isFunction(r) || (r = this[t[n]]),
                r && (r = e.bind(r, this), !i.bindGlobal || -1 === n.indexOf("command") && -1 === n.indexOf("ctrl") && -1 === n.indexOf("mod") ? i.bind(n, r) : i.bindGlobal(n, r))
            }
            return this
        },
        unbindKeyboardEvents: function() {
            var t = e.result(this, "keyboardEvents");
            if (!t) return this;
            for (var n in t) i.unbind(n);
            return this
        },
        delegateEvents: function() {
            var t = r.apply(this, arguments);
            return this.bindKeyboardEvents(),
            t
        },
        undelegateEvents: function() {
            var t = o.apply(this, arguments);
            return this.unbindKeyboardEvents(),
            t
        },
        remove: function() {
            var t = s.apply(this, arguments);
            return this.unbindKeyboardEvents(),
            t
        }
    }),
    n
}),
function(t, e) {
    "use strict";
    var n = "0.7.10",
    i = "",
    r = "?",
    o = "function",
    s = "undefined",
    a = "object",
    l = "string",
    u = "major",
    c = "model",
    f = "name",
    d = "type",
    p = "vendor",
    h = "version",
    m = "architecture",
    g = "console",
    v = "mobile",
    y = "tablet",
    b = "smarttv",
    w = "wearable",
    x = "embedded",
    T = {
        extend: function(t, e) {
            for (var n in e) - 1 !== "browser cpu device engine os".indexOf(n) && e[n].length % 2 === 0 && (t[n] = e[n].concat(t[n]));
            return t
        },
        has: function(t, e) {
            return "string" == typeof t ? -1 !== e.toLowerCase().indexOf(t.toLowerCase()) : !1
        },
        lowerize: function(t) {
            return t.toLowerCase()
        },
        major: function(t) {
            return typeof t === l ? t.split(".")[0] : e
        }
    },
    C = {
        rgx: function() {
            for (var t, n, i, r, l, u, c, f = 0,
            d = arguments; f < d.length && !u;) {
                var p = d[f],
                h = d[f + 1];
                if (typeof t === s) {
                    t = {};
                    for (r in h) h.hasOwnProperty(r) && (l = h[r], typeof l === a ? t[l[0]] = e: t[l] = e)
                }
                for (n = i = 0; n < p.length && !u;) if (u = p[n++].exec(this.getUA())) for (r = 0; r < h.length; r++) c = u[++i],
                l = h[r],
                typeof l === a && l.length > 0 ? 2 == l.length ? typeof l[1] == o ? t[l[0]] = l[1].call(this, c) : t[l[0]] = l[1] : 3 == l.length ? typeof l[1] !== o || l[1].exec && l[1].test ? t[l[0]] = c ? c.replace(l[1], l[2]) : e: t[l[0]] = c ? l[1].call(this, c, l[2]) : e: 4 == l.length && (t[l[0]] = c ? l[3].call(this, c.replace(l[1], l[2])) : e) : t[l] = c ? c: e;
                f += 2
            }
            return t
        },
        str: function(t, n) {
            for (var i in n) if (typeof n[i] === a && n[i].length > 0) {
                for (var o = 0; o < n[i].length; o++) if (T.has(n[i][o], t)) return i === r ? e: i
            } else if (T.has(n[i], t)) return i === r ? e: i;
            return t
        }
    },
    k = {
        browser: {
            oldsafari: {
                version: {
                    "1.0": "/8",
                    1.2 : "/1",
                    1.3 : "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {
                model: {
                    "Fire Phone": ["SD", "KF"]
                }
            },
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000 : "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7 : "NT 6.1",
                    8 : "NT 6.2",
                    8.1 : "NT 6.3",
                    10 : ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
            }
        }
    },
    E = {
        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [f, h], [/\s(opr)\/([\w\.]+)/i], [[f, "Opera"], h], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [f, h], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[f, "IE"], h], [/(edge)\/((\d+)?[\w\.]+)/i], [f, h], [/(yabrowser)\/([\w\.]+)/i], [[f, "Yandex"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], h], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [f, h], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[f, "UCBrowser"], h], [/(dolfin)\/([\w\.]+)/i], [[f, "Dolphin"], h], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[f, "Chrome"], h], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [h, [f, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [h, [f, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [h, [f, "Facebook"]], [/fxios\/([\w\.-]+)/i], [h, [f, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [h, [f, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [h, f], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [f, [h, C.str, k.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [f, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[f, "Netscape"], h], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [f, h]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, T.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[m, /ower/, "", T.lowerize]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[m, T.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [c, p, [d, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [p, "Apple"], [d, y]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [p, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, c, [d, y]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [c, [p, "Amazon"], [d, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[c, C.str, k.device.amazon.model], [p, "Amazon"], [d, v]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, p, [d, v]], [/\((ip[honed|\s\w*]+);/i], [c, [p, "Apple"], [d, v]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, c, [d, v]], [/\(bb10;\s(\w+)/i], [c, [p, "BlackBerry"], [d, v]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [c, [p, "Asus"], [d, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[p, "Sony"], [c, "Xperia Tablet"], [d, y]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[p, "Sony"], [c, "Xperia Phone"], [d, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [p, c, [d, g]], [/android.+;\s(shield)\sbuild/i], [c, [p, "Nvidia"], [d, g]], [/(playstation\s[34portablevi]+)/i], [c, [p, "Sony"], [d, g]], [/(sprint\s(\w+))/i], [[p, C.str, k.device.sprint.vendor], [c, C.str, k.device.sprint.model], [d, v]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [p, c, [d, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [c, /_/g, " "], [d, v]], [/(nexus\s9)/i], [c, [p, "HTC"], [d, y]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [p, "Microsoft"], [d, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [p, "Microsoft"], [d, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [c, [p, "Motorola"], [d, v]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [p, "Motorola"], [d, y]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[p, "Samsung"], c, [d, y]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], c, [d, v]], [/(samsung);smarttv/i], [p, c, [d, b]], [/\(dtv[\);].+(aquos)/i], [c, [p, "Sharp"], [d, b]], [/sie-(\w+)*/i], [c, [p, "Siemens"], [d, v]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], c, [d, v]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [c, [p, "Acer"], [d, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], c, [d, y]], [/(lg) netcast\.tv/i], [p, c, [d, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [c, [p, "LG"], [d, v]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [p, "Lenovo"], [d, y]], [/linux;.+((jolla));/i], [p, c, [d, v]], [/((pebble))app\/[\d\.]+\s/i], [p, c, [d, w]], [/android.+;\s(glass)\s\d/i], [c, [p, "Google"], [d, w]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[c, /_/g, " "], [p, "Xiaomi"], [d, v]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[d, T.lowerize], p, c]],
        engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [f, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [f, h], [/rv\:([\w\.]+).*(gecko)/i], [h, f]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [f, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [f, [h, C.str, k.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[f, "Windows"], [h, C.str, k.os.windows.version]], [/\((bb)(10);/i], [[f, "BlackBerry"], h], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [f, h], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[f, "Symbian"], h], [/\((series40);/i], [f], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[f, "Firefox OS"], h], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [f, h], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[f, "Chromium OS"], h], [/(sunos)\s?([\w\.]+\d)*/i], [[f, "Solaris"], h], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [f, h], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[f, "iOS"], [h, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[f, "Mac OS"], [h, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [f, h]]
    },
    S = function(e, n) {
        if (! (this instanceof S)) return new S(e, n).getResult();
        var r = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent: i),
        o = n ? T.extend(E, n) : E;
        return this.getBrowser = function() {
            var t = C.rgx.apply(this, o.browser);
            return t.major = T.major(t.version),
            t
        },
        this.getCPU = function() {
            return C.rgx.apply(this, o.cpu)
        },
        this.getDevice = function() {
            return C.rgx.apply(this, o.device)
        },
        this.getEngine = function() {
            return C.rgx.apply(this, o.engine)
        },
        this.getOS = function() {
            return C.rgx.apply(this, o.os)
        },
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        },
        this.getUA = function() {
            return r
        },
        this.setUA = function(t) {
            return r = t,
            this
        },
        this.setUA(r),
        this
    };
    S.VERSION = n,
    S.BROWSER = {
        NAME: f,
        MAJOR: u,
        VERSION: h
    },
    S.CPU = {
        ARCHITECTURE: m
    },
    S.DEVICE = {
        MODEL: c,
        VENDOR: p,
        TYPE: d,
        CONSOLE: g,
        MOBILE: v,
        SMARTTV: b,
        TABLET: y,
        WEARABLE: w,
        EMBEDDED: x
    },
    S.ENGINE = {
        NAME: f,
        VERSION: h
    },
    S.OS = {
        NAME: f,
        VERSION: h
    },
    typeof exports !== s ? (typeof module !== s && module.exports && (exports = module.exports = S), exports.UAParser = S) : typeof define === o && define.amd ? define("ua-parser", [],
    function() {
        return S
    }) : t.UAParser = S;
    var N = t.jQuery || t.Zepto;
    if (typeof N !== s) {
        var A = new S;
        N.ua = A.getResult(),
        N.ua.get = function() {
            return A.getUA()
        },
        N.ua.set = function(t) {
            A.setUA(t);
            var e = A.getResult();
            for (var n in e) N.ua[n] = e[n]
        }
    }
} ("object" == typeof window ? window: this),
define("lib/ErrorHandler", ["require", "backbone", "ua-parser"],
function(t) {
    "use strict";
    var e = t("backbone"),
        n = t("ua-parser"),
        i = e.Model.extend({
            defaults: {
                message: "",
                type: "Javascript"
            }
        }),
        r = e.Collection.extend({
            url: "/rest/errors",
            model: i
        }),
        o = new r,
        s = function() {
            console.log(4,e);
            window.onerror = function(t, e, i, r, s) {
                s = s || {};
                var a = (new n).getResult(),
                l = "Error Message: " + t + "\nFile: " + e + "\nLine: " + i + "\nColumn: " + r + "\nError Message: " + s.message + "\nError Name: " + s.name + "\nError Description: " + s.description + "\nError Number: " + s.number + "\nError Stack: " + s.stack + "\nBrowser: " + a.browser.name + " " + a.browser.version + "\nEngine: " + a.engine.name + " " + a.engine.version + "\nOS: " + a.os.name + " " + a.os.version + "\nDevice: " + a.device.model + " " + a.device.type + " " + a.device.vendor + "\nCPU: " + a.cpu.architecture + "\nUser Agent: " + a.ua + "\nPage Title: " + document.title + "\nURL: " + window.location.href + "\nTime: " + (new Date).toUTCString();
                o.create({
                    message: l
                });
            }
        };
    return s
}),
define("common", ["require", "jquery", "bootstrap", "placeholder-text", "backbone", "lib/ErrorHandler"],
function(t) {
    "use strict";
    var e = t("jquery");
    t("bootstrap"),
    t("placeholder-text"),
    t("backbone"),
    e("input, textarea").placeholder();
    var n = t("lib/ErrorHandler");
    n()
});