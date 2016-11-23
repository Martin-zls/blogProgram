window.Modernizr = function(e, t, i) {
    function s(e) {
        p.cssText = e
    }
    function n(e, t) {
        return typeof e === t
    }
    var o, r, a, l = "2.8.3",
    h = {},
    u = t.documentElement,
    c = "modernizr",
    d = t.createElement(c),
    p = d.style,
    f = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
    g = {},
    m = [],
    v = m.slice,
    y = function(e, i, s, n) {
        var o, r, a, l, h = t.createElement("div"),
        d = t.body,
        p = d || t.createElement("body");
        if (parseInt(s, 10)) for (; s--;) a = t.createElement("div"),
        a.id = n ? n[s] : c + (s + 1),
        h.appendChild(a);
        return o = ["&#173;", '<style id="s', c, '">', e, "</style>"].join(""),
        h.id = c,
        (d ? h: p).innerHTML += o,
        p.appendChild(h),
        d || (p.style.background = "", p.style.overflow = "hidden", l = u.style.overflow, u.style.overflow = "hidden", u.appendChild(p)),
        r = i(h, e),
        d ? h.parentNode.removeChild(h) : (p.parentNode.removeChild(p), u.style.overflow = l),
        !!r
    },
    _ = {}.hasOwnProperty;
    a = n(_, "undefined") || n(_.call, "undefined") ?
    function(e, t) {
        return t in e && n(e.constructor.prototype[t], "undefined")
    }: function(e, t) {
        return _.call(e, t)
    },
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var i = v.call(arguments, 1),
        s = function() {
            if (this instanceof s) {
                var n = function() {};
                n.prototype = t.prototype;
                var o = new n,
                r = t.apply(o, i.concat(v.call(arguments)));
                return Object(r) === r ? r: o
            }
            return t.apply(e, i.concat(v.call(arguments)))
        };
        return s
    }),
    g.touch = function() {
        var i;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : y(["@media (", f.join("touch-enabled),("), c, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(e) {
            i = 9 === e.offsetTop
        }),
        i
    },
    g.video = function() {
        var e = t.createElement("video"),
        i = !1;
        try { (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch(s) {}
        return i
    },
    g.audio = function() {
        var e = t.createElement("audio"),
        i = !1;
        try { (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch(s) {}
        return i
    };
    for (var w in g) a(g, w) && (r = w.toLowerCase(), h[r] = g[w](), m.push((h[r] ? "": "no-") + r));
    return h.addTest = function(e, t) {
        if ("object" == typeof e) for (var s in e) a(e, s) && h.addTest(s, e[s]);
        else {
            if (e = e.toLowerCase(), h[e] !== i) return h;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof enableClasses && enableClasses && (u.className += " " + (t ? "": "no-") + e),
            h[e] = t
        }
        return h
    },
    s(""),
    d = o = null,
    h._version = l,
    h._prefixes = f,
    h.testStyles = y,
    h
} (this, this.document),
define("modernizr",
function(e) {
    return function() {
        var t;
        return t || e.Modernizr
    }
} (this)),
function(e, t) {
    function i(t, i) {
        var n, o, r, a = t.nodeName.toLowerCase();
        return "area" === a ? (n = t.parentNode, o = n.name, t.href && o && "map" === n.nodeName.toLowerCase() ? (r = e("img[usemap=#" + o + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !t.disabled: "a" === a ? t.href || i: i) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var n = 0,
    o = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        s && s.call(t)
                    },
                    i)
                }) : t.apply(this, arguments)
            }
        } (e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var s, n, o = e(this[0]); o.length && o[0] !== document;) {
                if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                o = o.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !! e.data(i, t)
            }
        }) : function(t, i, s) {
            return !! e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
            n = isNaN(s);
            return (n || s >= 0) && i(t, !n)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"],
    function(i, s) {
        function n(t, i, s, n) {
            return e.each(o,
            function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
        r = s.toLowerCase(),
        a = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + s] = function(i) {
            return i === t ? a["inner" + s].call(this) : this.each(function() {
                e(this).css(r, n(this, i) + "px")
            })
        },
        e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? a["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, n(this, t, !0, i) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
    }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    } (e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart" in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var n, o = e.ui[t].prototype;
                for (n in s) o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([i, s[n]])
            },
            call: function(e, t, i) {
                var s, n = e.plugins[t];
                if (n && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (s = 0; s < n.length; s++) e.options[n[s][0]] && n[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return ! 1;
            var s = i && "left" === i ? "scrollLeft": "scrollTop",
            n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        }
    })
} (jQuery),
function(e, t) {
    var i = 0,
    s = Array.prototype.slice,
    n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch(o) {}
        n(t)
    },
    e.widget = function(t, i, s) {
        var n, o, r, a, l = {},
        h = t.split(".")[0];
        t = t.split(".")[1],
        n = h + "-" + t,
        s || (s = i, i = e.Widget),
        e.expr[":"][n.toLowerCase()] = function(t) {
            return !! e.data(t, n)
        },
        e[h] = e[h] || {},
        o = e[h][t],
        r = e[h][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
        },
        e.extend(r, o, {
            version: s.version,
            _proto: e.extend({},
            s),
            _childConstructors: []
        }),
        a = new i,
        a.options = e.widget.extend({},
        a.options),
        e.each(s,
        function(t, s) {
            return e.isFunction(s) ? void(l[t] = function() {
                var e = function() {
                    return i.prototype[t].apply(this, arguments)
                },
                n = function(e) {
                    return i.prototype[t].apply(this, e)
                };
                return function() {
                    var t, i = this._super,
                    o = this._superApply;
                    return this._super = e,
                    this._superApply = n,
                    t = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    t
                }
            } ()) : void(l[t] = s)
        }),
        r.prototype = e.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix: t
        },
        l, {
            constructor: r,
            namespace: h,
            widgetName: t,
            widgetFullName: n
        }),
        o ? (e.each(o._childConstructors,
        function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r),
        e.widget.bridge(t, r)
    },
    e.widget.extend = function(i) {
        for (var n, o, r = s.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (n in r[a]) o = r[a][n],
        r[a].hasOwnProperty(n) && o !== t && (e.isPlainObject(o) ? i[n] = e.isPlainObject(i[n]) ? e.widget.extend({},
        i[n], o) : e.widget.extend({},
        o) : i[n] = o);
        return i
    },
    e.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var a = "string" == typeof r,
            l = s.call(arguments, 1),
            h = this;
            return r = !a && l.length ? e.widget.extend.apply(null, [r].concat(l)) : r,
            a ? this.each(function() {
                var s, n = e.data(this, o);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, l), s !== n && s !== t ? (h = s && s.jquery ? h.pushStack(s.get()) : s, !1) : void 0) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, o);
                t ? t.option(r || {})._init() : e.data(this, o, new n(r, this))
            }),
            h
        }
    },
    e.Widget = function() {},
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0],
            this.element = e(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({},
            this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument: s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, r, a = i;
            if (0 === arguments.length) return e.widget.extend({},
            this.options);
            if ("string" == typeof i) if (a = {},
            n = i.split("."), i = n.shift(), n.length) {
                for (o = a[i] = e.widget.extend({},
                this.options[i]), r = 0; r < n.length - 1; r++) o[n[r]] = o[n[r]] || {},
                o = o[n[r]];
                if (i = n.pop(), s === t) return o[i] === t ? null: o[i];
                o[i] = s
            } else {
                if (s === t) return this.options[i] === t ? null: this.options[i];
                a[i] = s
            }
            return this._setOptions(a),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, i, s) {
            var n, o = this;
            "boolean" != typeof t && (s = i, i = t, t = !1),
            s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()),
            e.each(s,
            function(s, r) {
                function a() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                var l = s.match(/^(\w+)\s*(.*)$/),
                h = l[1] + o.eventNamespace,
                u = l[2];
                u ? n.delegate(u, h, a) : i.bind(h, a)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, o, r = this.options[t];
            if (s = s || {},
            i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, a = n ? n === !0 || "number" == typeof n ? i: n.effect || i: t;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            r = !e.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            r && e.effects && e.effects.effect[a] ? s[t](n) : a !== t && s[a] ? s[a](n.duration, n.easing, o) : s.queue(function(i) {
                e(this)[t](),
                o && o.call(s[0]),
                i()
            })
        }
    })
} (jQuery),
function(e, t) {
    var i = !1;
    e(document).mouseup(function() {
        i = !1
    }),
    e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName,
            function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName,
            function(i) {
                return ! 0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var s = this,
                n = 1 === t.which,
                o = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length: !1;
                return n && !o && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                },
                this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                },
                e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
} (jQuery),
function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe": i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}),
                !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = this,
            s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)),
            this.dropped && (s = this.dropped, this.dropped = !1),
            "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _createHelper: function(t) {
            var i = this.options,
            s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode: i.appendTo),
            s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
            s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], void(s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }),
            {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n, o, r = this.options,
            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            l = t.pageX,
            h = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n: n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o: o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o)),
            {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, s) {
            return s = s || this._uiHash(),
            e.ui.plugin.call(this, t, [i, s]),
            "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var s = e(this).data("ui-draggable"),
            n = s.options,
            o = e.extend({},
            i, {
                item: s.element
            });
            s.sortables = [],
            e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, o))
            })
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable"),
            n = e.extend({},
            i, {
                item: s.element
            });
            e.each(s.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        },
        drag: function(t, i) {
            var s = e(this).data("ui-draggable"),
            n = this;
            e.each(s.sortables,
            function() {
                var o = !1,
                r = this;
                this.instance.positionAbs = s.positionAbs,
                this.instance.helperProportions = s.helperProportions,
                this.instance.offset.click = s.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(s.sortables,
                function() {
                    return this.instance.positionAbs = s.positionAbs,
                    this.instance.helperProportions = s.helperProportions,
                    this.instance.offset.click = s.offset.click,
                    this !== r && this.instance._intersectsWith(this.instance.containerCache) && e.contains(r.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                },
                t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
            i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var s = e(i.helper),
            n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")),
            s.css("opacity", n.opacity)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("ui-draggable"),
            s = i.options,
            n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed: t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed: t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))),
            n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
            i = t.options;
            t.snapElements = [],
            e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)": i.snap).each(function() {
                var i = e(this),
                s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(t, i) {
            var s, n, o, r, a, l, h, u, c, d, p = e(this).data("ui-draggable"),
            f = p.options,
            g = f.snapTolerance,
            m = i.offset.left,
            v = m + p.helperProportions.width,
            y = i.offset.top,
            _ = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) a = p.snapElements[c].left,
            l = a + p.snapElements[c].width,
            h = p.snapElements[c].top,
            u = h + p.snapElements[c].height,
            a - g > v || m > l + g || h - g > _ || y > u + g || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(h - _) <= g, n = Math.abs(u - y) <= g, o = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, s && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a - p.helperProportions.width
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = s || n || o || r, "outer" !== f.snapMode && (s = Math.abs(h - y) <= g, n = Math.abs(u - _) <= g, o = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, s && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || o || r || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = s || n || o || r || d)
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, i = this.data("ui-draggable").options,
            s = e.makeArray(e(i.stack)).sort(function(t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var s = e(i.helper),
            n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")),
            s.css("zIndex", n.zIndex)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
} (jQuery),
function(e, t) {
    function i(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options,
            i = t.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = e.isFunction(i) ? i: function(e) {
                return e.is(i)
            },
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
            e.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0,
            i = e.ui.ddmanager.droppables[this.options.scope]; t < i.length; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i: function(e) {
                return e.is(i)
            }),
            e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current,
            n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }),
    e.ui.intersect = function(e, t, s) {
        if (!t.offset) return ! 1;
        var n, o, r = (e.positionAbs || e.position.absolute).left,
        a = r + e.helperProportions.width,
        l = (e.positionAbs || e.position.absolute).top,
        h = l + e.helperProportions.height,
        u = t.offset.left,
        c = u + t.proportions.width,
        d = t.offset.top,
        p = d + t.proportions.height;
        switch (s) {
        case "fit":
            return r >= u && c >= a && l >= d && p >= h;
        case "intersect":
            return u < r + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < c && d < l + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < p;
        case "pointer":
            return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
            o = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
            i(o, d, t.proportions.height) && i(n, u, t.proportions.width);
        case "touch":
            return (l >= d && p >= l || h >= d && p >= h || d > l && h > p) && (r >= u && c >= r || a >= u && c >= a || u > r && a > c);
        default:
            return ! 1
        }
    },
    e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var s, n, o = e.ui.ddmanager.droppables[t.options.scope] || [],
            r = i ? i.type: null,
            a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; s < o.length; s++) if (! (o[s].options.disabled || t && !o[s].accept.call(o[s].element[0], t.currentItem || t.element))) {
                for (n = 0; n < a.length; n++) if (a[n] === o[s].element[0]) {
                    o[s].proportions.height = 0;
                    continue e
                }
                o[s].visible = "none" !== o[s].element.css("display"),
                o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions = {
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight
                })
            }
        },
        drop: function(t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(),
            function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }),
            s
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(e.ui.ddmanager.droppables[t.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, r = e.ui.intersect(t, this, this.options.tolerance),
                    a = !r && this.isover ? "isout": r && !this.isover ? "isover": null;
                    a && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === n
                    }), o.length && (s = e.data(o[0], "ui-droppable"), s.greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover": "isout"] = !1, this["isover" === a ? "_over": "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
} (jQuery),
function(e, t) {
    function i(e) {
        return parseInt(e, 10) || 0
    }
    function s(e) {
        return ! isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, i, s, n, o, r = this,
            a = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = a.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {},
            i = 0; i < t.length; i++) s = e.trim(t[i]),
            o = "ui-resizable-" + s,
            n = e("<div class='ui-resizable-handle " + o + "'></div>"),
            n.css({
                zIndex: a.zIndex
            }),
            "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[s] = ".ui-resizable-" + s,
            this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, o;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top": /se|sw|s/.test(i) ? "Bottom": /^e$/.test(i) ? "Right": "Left"].join(""), t.css(n, o), this._proportionallyResize()),
                e(this.handles[i]).length
            },
            this._renderAxis(this.element),
            this._handles = e(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                r.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = n && n[1] ? n[1] : "se")
            }),
            a.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (e(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function() {
                a.disabled || r.resizing || (e(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles) s = e(this.handles[i])[0],
            (s === t.target || e.contains(s, t.target)) && (n = !0);
            return ! this.options.disabled && n
        },
        _mouseStart: function(t) {
            var s, n, o, r = this.options,
            a = this.element.position(),
            l = this.element;
            return this.resizing = !0,
            /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }),
            this._renderProxy(),
            s = i(this.helper.css("left")),
            n = i(this.helper.css("top")),
            r.containment && (s += e(r.containment).scrollLeft() || 0, n += e(r.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: s,
                top: n
            },
            this.size = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalPosition = {
                left: s,
                top: n
            },
            this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            o = e(".ui-resizable-" + this.axis).css("cursor"),
            e("body").css("cursor", "auto" === o ? this.axis + "-resize": o),
            l.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var i, s = this.helper,
            n = {},
            o = this.originalMousePosition,
            r = this.axis,
            a = this.position.top,
            l = this.position.left,
            h = this.size.width,
            u = this.size.height,
            c = t.pageX - o.left || 0,
            d = t.pageY - o.top || 0,
            p = this._change[r];
            return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== a && (n.top = this.position.top + "px"), this.position.left !== l && (n.left = this.position.left + "px"), this.size.width !== h && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, o, r, a, l, h = this.options,
            u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = s ? 0 : u.sizeDiff.width, r = {
                width: u.helper.width() - o,
                height: u.helper.height() - n
            },
            a = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, l = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(e.extend(r, {
                top: l,
                left: a
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()),
            e("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, i, n, o, r, a = this.options;
            r = {
                minWidth: s(a.minWidth) ? a.minWidth: 0,
                maxWidth: s(a.maxWidth) ? a.maxWidth: 1 / 0,
                minHeight: s(a.minHeight) ? a.minHeight: 0,
                maxHeight: s(a.maxHeight) ? a.maxHeight: 1 / 0
            },
            (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), o < r.maxHeight && (r.maxHeight = o)),
            this._vBoundaries = r
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(),
            s(e.left) && (this.position.left = e.left),
            s(e.top) && (this.position.top = e.top),
            s(e.height) && (this.size.height = e.height),
            s(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
            i = this.size,
            n = this.axis;
            return s(e.height) ? e.width = e.height * this.aspectRatio: s(e.width) && (e.height = e.width / this.aspectRatio),
            "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null),
            "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)),
            e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
            i = this.axis,
            n = s(e.width) && t.maxWidth && t.maxWidth < e.width,
            o = s(e.height) && t.maxHeight && t.maxHeight < e.height,
            r = s(e.width) && t.minWidth && t.minWidth > e.width,
            a = s(e.height) && t.minHeight && t.minHeight > e.height,
            l = this.originalPosition.left + this.originalSize.width,
            h = this.position.top + this.size.height,
            u = /sw|nw|w/.test(i),
            c = /nw|ne|n/.test(i);
            return r && (e.width = t.minWidth),
            a && (e.height = t.minHeight),
            n && (e.width = t.maxWidth),
            o && (e.height = t.maxHeight),
            r && u && (e.left = l - t.minWidth),
            n && u && (e.left = l - t.maxWidth),
            a && c && (e.top = h - t.minHeight),
            o && c && (e.top = h - t.maxHeight),
            e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
            e
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, o = this.helper || this.element;
                for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif) for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; t < i.length; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var t = this.element,
            i = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize,
                s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var s = this.originalSize,
                n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            },
            ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]),
            "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition,
                handle: this.axis
            }
        }
    }),
    e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).data("ui-resizable"),
            s = i.options,
            n = i._proportionallyResizeElements,
            o = n.length && /textarea/i.test(n[0].nodeName),
            r = o && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
            a = o ? 0 : i.sizeDiff.width,
            l = {
                width: i.size.width - a,
                height: i.size.height - r
            },
            h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, u && h ? {
                top: u,
                left: h
            }: {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", t)
                }
            })
        }
    }),
    e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, s, n, o, r, a, l, h = e(this).data("ui-resizable"),
            u = h.options,
            c = h.element,
            d = u.containment,
            p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (h.containerElement = e(p), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = i(t.css("padding" + n))
            }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                height: t.innerHeight() - s[3],
                width: t.innerWidth() - s[1]
            },
            n = h.containerOffset, o = h.containerSize.height, r = h.containerSize.width, a = e.ui.hasScroll(p, "left") ? p.scrollWidth: r, l = e.ui.hasScroll(p) ? p.scrollHeight: o, h.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: a,
                height: l
            }))
        },
        resize: function(t) {
            var i, s, n, o, r = e(this).data("ui-resizable"),
            a = r.options,
            l = r.containerOffset,
            h = r.position,
            u = r._aspectRatio || t.shiftKey,
            c = {
                top: 0,
                left: 0
            },
            d = r.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = l),
            h.left < (r._helper ? l.left: 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left: r.position.left - c.left), u && (r.size.height = r.size.width / r.aspectRatio), r.position.left = a.helper ? l.left: 0),
            h.top < (r._helper ? l.top: 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top: r.position.top), u && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? l.top: 0),
            r.offset.left = r.parentData.left + r.position.left,
            r.offset.top = r.parentData.top + r.position.top,
            i = Math.abs((r._helper ? r.offset.left - c.left: r.offset.left - c.left) + r.sizeDiff.width),
            s = Math.abs((r._helper ? r.offset.top - c.top: r.offset.top - l.top) + r.sizeDiff.height),
            n = r.containerElement.get(0) === r.element.parent().get(0),
            o = /relative|absolute/.test(r.containerElement.css("position")),
            n && o && (i -= r.parentData.left),
            i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio)),
            s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, u && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable"),
            i = t.options,
            s = t.containerOffset,
            n = t.containerPosition,
            o = t.containerElement,
            r = e(t.helper),
            a = r.offset(),
            l = r.outerWidth() - t.sizeDiff.width,
            h = r.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: h
            }),
            t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: h
            })
        }
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable"),
            i = t.options,
            s = function(t) {
                e(t).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize,
            function(e) {
                s(e)
            })
        },
        resize: function(t, i) {
            var s = e(this).data("ui-resizable"),
            n = s.options,
            o = s.originalSize,
            r = s.originalPosition,
            a = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - r.top || 0,
                left: s.position.left - r.left || 0
            },
            l = function(t, s) {
                e(t).each(function() {
                    var t = e(this),
                    n = e(this).data("ui-resizable-alsoresize"),
                    o = {},
                    r = s && s.length ? s: t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(r,
                    function(e, t) {
                        var i = (n[t] || 0) + (a[t] || 0);
                        i && i >= 0 && (o[t] = i || null)
                    }),
                    t.css(o)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : e.each(n.alsoResize,
            function(e, t) {
                l(e, t)
            })
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }),
    e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable"),
            i = t.options,
            s = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost: ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable"),
            i = t.options,
            s = t.size,
            n = t.originalSize,
            o = t.originalPosition,
            r = t.axis,
            a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
            l = a[0] || 1,
            h = a[1] || 1,
            u = Math.round((s.width - n.width) / l) * l,
            c = Math.round((s.height - n.height) / h) * h,
            d = n.width + u,
            p = n.height + c,
            f = i.maxWidth && i.maxWidth < d,
            g = i.maxHeight && i.maxHeight < p,
            m = i.minWidth && i.minWidth > d,
            v = i.minHeight && i.minHeight > p;
            i.grid = a,
            m && (d += l),
            v && (p += h),
            f && (d -= l),
            g && (p -= h),
            /^(se|s|e)$/.test(r) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(r) ? (t.size.width = d, t.size.height = p, t.position.top = o.top - c) : /^(sw)$/.test(r) ? (t.size.width = d, t.size.height = p, t.position.left = o.left - u) : (t.size.width = d, t.size.height = p, t.position.top = o.top - c, t.position.left = o.left - u)
        }
    })
} (jQuery),
function(e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = e(i.options.filter, i.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = e(this),
                    i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            },
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
            s = this.options;
            this.opos = [t.pageX, t.pageY],
            this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = e.data(this, "selectable-item");
                s.startselected = !0,
                t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: s.element
                }))
            }), e(t.target).parents().addBack().each(function() {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting": "ui-selected").addClass(s ? "ui-selecting": "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                    selecting: n.element
                }) : i._trigger("unselecting", t, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                n = this.options,
                o = this.opos[0],
                r = this.opos[1],
                a = t.pageX,
                l = t.pageY;
                return o > a && (i = a, a = o, o = i),
                r > l && (i = l, l = r, r = i),
                this.helper.css({
                    left: o,
                    top: r,
                    width: a - o,
                    height: l - r
                }),
                this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"),
                    h = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > a || i.right < o || i.top > l || i.bottom < r) : "fit" === n.tolerance && (h = i.left > o && i.right < a && i.top > r && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
                        unselecting: i.element
                    }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            e(".ui-unselecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: s.element
                })
            }),
            e(".ui-selecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", t, {
                    selected: s.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
} (jQuery),
function(e, t) {
    function i(e, t, i) {
        return e > t && t + i > e
    }
    function s(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === e.axis || s(this.items[0].item) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var s = null,
            n = !1,
            o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, o.widgetName + "-item") === o ? (s = e(this), !1) : void 0
            }), e.data(t.target, o.widgetName + "-item") === o && (s = e(t.target)), s && (!this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() {
                this === t.target && (n = !0)
            }), n)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(t, i, s) {
            var n, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, s, n, o, r = this.options,
            a = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed: t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed: t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - e(document).scrollTop() < r.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed)), t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))), a !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next": "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === o ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(t, s),
                this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this,
                    n = this.placeholder.offset(),
                    o = this.options.axis,
                    r = {};
                    o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500,
                    function() {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }),
            !s.length && t.key && s.push(t.key + "="),
            s.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            i.each(function() {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
            i = t + this.helperProportions.width,
            s = this.positionAbs.top,
            n = s + this.helperProportions.height,
            o = e.left,
            r = o + e.width,
            a = e.top,
            l = a + e.height,
            h = this.offset.click.top,
            u = this.offset.click.left,
            c = "x" === this.options.axis || s + h > a && l > s + h,
            d = "y" === this.options.axis || t + u > o && r > t + u,
            p = c && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > e[this.floating ? "width": "height"] ? p: o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var t = "x" === this.options.axis || i(this.positionAbs.top + this.offset.click.top, e.top, e.height),
            s = "y" === this.options.axis || i(this.positionAbs.left + this.offset.click.left, e.left, e.width),
            n = t && s,
            o = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var t = i(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
            s = i(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
            n = this._getDragVerticalDirection(),
            o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s: n && ("down" === n && t || "up" === n && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right": "left")
        },
        refresh: function(e) {
            return this._refreshItems(e),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var i, s, n, o, r = [],
            a = [],
            l = this._connectWith();
            if (l && t) for (i = l.length - 1; i >= 0; i--) for (n = e(l[i]), s = n.length - 1; s >= 0; s--) o = e.data(n[s], this.widgetFullName),
            o && o !== this && !o.options.disabled && a.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                r.push(this)
            });
            return e(r)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items,
            function(e) {
                for (var i = 0; i < t.length; i++) if (t[i] === e.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var i, s, n, o, r, a, l, h, u = this.items,
            c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]],
            d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = e(d[i]), s = n.length - 1; s >= 0; s--) o = e.data(n[s], this.widgetFullName),
            o && o !== this && !o.options.disabled && (c.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                item: this.currentItem
            }) : e(o.options.items, o.element), o]), this.containers.push(o));
            for (i = c.length - 1; i >= 0; i--) for (r = c[i][1], a = c[i][0], s = 0, h = a.length; h > s; s++) l = e(a[s]),
            l.data(this.widgetName + "-item", r),
            u.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i],
            s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(),
            this.containers[i].containerCache.left = o.left,
            this.containers[i].containerCache.top = o.top,
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                    n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", t.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(e, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            s.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            var n, o, r, a, l, h, u, c, d, p, f = null,
            g = null;
            for (n = this.containers.length - 1; n >= 0; n--) if (!e.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                if (f && e.contains(this.containers[n].element[0], f.element[0])) continue;
                f = this.containers[n],
                g = n
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f) if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", t, this._uiHash(this)), this.containers[g].containerCache.over = 1);
            else {
                for (r = 1e4, a = null, p = f.floating || s(this.currentItem), l = p ? "left": "top", h = p ? "width": "height", u = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) e.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || i(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (c = this.items[o].item.offset()[l], d = !1, Math.abs(c - u) > Math.abs(c + this.items[o][h] - u) && (d = !0, c += this.items[o][h]), Math.abs(c - u) < r && (r = Math.abs(c - u), a = this.items[o], this.direction = d ? "up": "down"));
                if (!a && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[g]) return;
                a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[g].element, !0),
                this._trigger("change", t, this._uiHash()),
                this.containers[g]._trigger("change", t, this._uiHash(this)),
                this.currentContainer = this.containers[g],
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[g]._trigger("over", t, this._uiHash(this)),
                this.containers[g].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var i = this.options,
            s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (e("document" === n.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n = this.options,
            o = t.pageX,
            r = t.pageY,
            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i: i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s: s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(e, t) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && s.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (s.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), s.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || s.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])),
            this.containers[i].containerCache.over && (s.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", e, this._uiHash()), i = 0; i < s.length; i++) s[i].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (i = 0; i < s.length; i++) s[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element: null
            }
        }
    })
} (jQuery),
function(e, t) {
    var i = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var t, i, s = this.options,
            n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
            r = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) r.push(o);
            this.handles = n.add(e(r.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
            i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range: ""))) : this.range = e([])
        },
        _setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e),
            this._on(e, this._handleEvents),
            this._hoverable(e),
            this._focusable(e)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, s, n, o, r, a, l, h, u = this,
            c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            },
            s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - u.values(t)); (n > i || n === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (n = i, o = e(this), r = t)
            }), a = this._start(t, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            }: {
                left: t.pageX - l.left - o.width() / 2,
                top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return ! 0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            },
            i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i),
            !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(e, this._handleIndex),
            this._change(e, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical": "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, s, n, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)),
            s = i / t,
            s > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            o = this._valueMin() + s * n,
            this._trimAlignValue(o)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
            this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, n, o;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), o !== !1 && this.values(t, i, !0))) : i !== this.value() && (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
            this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
                this._lastChangedValue = t,
                this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i),
            this._refreshValue(),
            void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]),
            this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e],
            t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step: 1,
            i = (e - this._valueMin()) % t,
            s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t: -t),
            parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, i, s, n, o, r = this.options.range,
            a = this.options,
            l = this,
            h = this._animateOff ? !1 : a.animate,
            u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                u["horizontal" === l.orientation ? "left": "bottom"] = i + "%",
                e(this).stop(1, 1)[h ? "animate": "css"](u, a.animate),
                l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate": "css"]({
                    left: i + "%"
                },
                a.animate), 1 === s && l.range[h ? "animate": "css"]({
                    width: i - t + "%"
                },
                {
                    queue: !1,
                    duration: a.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate": "css"]({
                    bottom: i + "%"
                },
                a.animate), 1 === s && l.range[h ? "animate": "css"]({
                    height: i - t + "%"
                },
                {
                    queue: !1,
                    duration: a.animate
                }))),
                t = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, u["horizontal" === this.orientation ? "left": "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate": "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
                width: i + "%"
            },
            a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate": "css"]({
                width: 100 - i + "%"
            },
            {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
                height: i + "%"
            },
            a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate": "css"]({
                height: 100 - i + "%"
            },
            {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var s, n, o, r, a = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), s = this._start(t, a), s === !1)) return
                }
                switch (r = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), t.keyCode) {
                case e.ui.keyCode.HOME:
                    o = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    o = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / i);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / i);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (n === this._valueMax()) return;
                    o = this._trimAlignValue(n + r);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (n === this._valueMin()) return;
                    o = this._trimAlignValue(n - r)
                }
                this._slide(t, a, o)
            },
            click: function(e) {
                e.preventDefault()
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
} (jQuery),
define("jquery-ui-custom", ["jquery"],
function(e) {
    return function() {
        var t;
        return t || e.$.fn.sortable
    }
} (this)),
function(e) {
    "use strict";
    function t(e, t) {
        if (! (e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var i = e.originalEvent.changedTouches[0],
            s = document.createEvent("MouseEvents");
            s.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(s)
        }
    }
    if (e.touchpunch = !0, e.support.touch = "ontouchend" in document, e.support.touch) {
        var i, s = e.ui.mouse.prototype,
        n = s._mouseInit,
        o = s._mouseDestroy;
        s._touchStart = function(e) {
            var s = this; ! i && s._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, s._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
        },
        s._touchMove = function(e) {
            i && (this._touchMoved = !0, t(e, "mousemove"))
        },
        s._touchEnd = function(e) {
            i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1)
        },
        s._mouseInit = function() {
            var t = this;
            t.element.bind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }),
            n.call(t)
        },
        s._mouseDestroy = function() {
            var t = this;
            t.element.unbind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }),
            o.call(t)
        }
    }
} (jQuery),
define("jquery-touch-punch", ["jquery-ui-custom"],
function(e) {
    return function() {
        var t;
        return t || e.$.touchpunch
    }
} (this));
var swfobject = function() {
    function e() {
        if (!H) {
            try {
                var e = D.getElementsByTagName("body")[0].appendChild(m("span"));
                e.parentNode.removeChild(e)
            } catch(t) {
                return
            }
            H = !0;
            for (var i = z.length,
            s = 0; i > s; s++) z[s]()
        }
    }
    function t(e) {
        H ? e() : z[z.length] = e
    }
    function i(e) {
        if (typeof O.addEventListener != T) O.addEventListener("load", e, !1);
        else if (typeof D.addEventListener != T) D.addEventListener("load", e, !1);
        else if (typeof O.attachEvent != T) v(O, "onload", e);
        else if ("function" == typeof O.onload) {
            var t = O.onload;
            O.onload = function() {
                t(),
                e()
            }
        } else O.onload = e
    }
    function s() {
        V ? n() : o()
    }
    function n() {
        var e = D.getElementsByTagName("body")[0],
        t = m(k);
        t.setAttribute("type", L);
        var i = e.appendChild(t);
        if (i) {
            var s = 0; !
            function() {
                if (typeof i.GetVariable != T) {
                    var n = i.GetVariable("$version");
                    n && (n = n.split(" ")[1].split(","), U.pv = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)])
                } else if (10 > s) return s++,
                void setTimeout(arguments.callee, 10);
                e.removeChild(t),
                i = null,
                o()
            } ()
        } else o()
    }
    function o() {
        var e = F.length;
        if (e > 0) for (var t = 0; e > t; t++) {
            var i = F[t].id,
            s = F[t].callbackFn,
            n = {
                success: !1,
                id: i
            };
            if (U.pv[0] > 0) {
                var o = g(i);
                if (o) if (!y(F[t].swfVersion) || U.wk && U.wk < 312) if (F[t].expressInstall && a()) {
                    var u = {};
                    u.data = F[t].expressInstall,
                    u.width = o.getAttribute("width") || "0",
                    u.height = o.getAttribute("height") || "0",
                    o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                    o.getAttribute("align") && (u.align = o.getAttribute("align"));
                    for (var c = {},
                    d = o.getElementsByTagName("param"), p = d.length, f = 0; p > f; f++)"movie" != d[f].getAttribute("name").toLowerCase() && (c[d[f].getAttribute("name")] = d[f].getAttribute("value"));
                    l(u, c, i, s)
                } else h(o),
                s && s(n);
                else w(i, !0),
                s && (n.success = !0, n.ref = r(i), s(n))
            } else if (w(i, !0), s) {
                var m = r(i);
                m && typeof m.SetVariable != T && (n.success = !0, n.ref = m),
                s(n)
            }
        }
    }
    function r(e) {
        var t = null,
        i = g(e);
        if (i && "OBJECT" == i.nodeName) if (typeof i.SetVariable != T) t = i;
        else {
            var s = i.getElementsByTagName(k)[0];
            s && (t = s)
        }
        return t
    }
    function a() {
        return ! $ && y("6.0.65") && (U.win || U.mac) && !(U.wk && U.wk < 312)
    }
    function l(e, t, i, s) {
        $ = !0,
        C = s || null,
        S = {
            success: !1,
            id: i
        };
        var n = g(i);
        if (n) {
            "OBJECT" == n.nodeName ? (P = u(n), E = null) : (P = n, E = i),
            e.id = R,
            (typeof e.width == T || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"),
            (typeof e.height == T || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"),
            D.title = D.title.slice(0, 47) + " - Flash Player Installation";
            var o = U.ie && U.win ? "ActiveX": "PlugIn",
            r = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + D.title;
            if (typeof t.flashvars != T ? t.flashvars += "&" + r: t.flashvars = r, U.ie && U.win && 4 != n.readyState) {
                var a = m("div");
                i += "SWFObjectNew",
                a.setAttribute("id", i),
                n.parentNode.insertBefore(a, n),
                n.style.display = "none",
                function() {
                    4 == n.readyState ? n.parentNode.removeChild(n) : setTimeout(arguments.callee, 10)
                } ()
            }
            c(e, t, i)
        }
    }
    function h(e) {
        if (U.ie && U.win && 4 != e.readyState) {
            var t = m("div");
            e.parentNode.insertBefore(t, e),
            t.parentNode.replaceChild(u(e), t),
            e.style.display = "none",
            function() {
                4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            } ()
        } else e.parentNode.replaceChild(u(e), e)
    }
    function u(e) {
        var t = m("div");
        if (U.win && U.ie) t.innerHTML = e.innerHTML;
        else {
            var i = e.getElementsByTagName(k)[0];
            if (i) {
                var s = i.childNodes;
                if (s) for (var n = s.length,
                o = 0; n > o; o++) 1 == s[o].nodeType && "PARAM" == s[o].nodeName || 8 == s[o].nodeType || t.appendChild(s[o].cloneNode(!0))
            }
        }
        return t
    }
    function c(e, t, i) {
        var s, n = g(i);
        if (U.wk && U.wk < 312) return s;
        if (n) if (typeof e.id == T && (e.id = i), U.ie && U.win) {
            var o = "";
            for (var r in e) e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? o += ' class="' + e[r] + '"': "classid" != r.toLowerCase() && (o += " " + r + '="' + e[r] + '"'));
            var a = "";
            for (var l in t) t[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + t[l] + '" />');
            n.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + a + "</object>",
            W[W.length] = e.id,
            s = g(e.id)
        } else {
            var h = m(k);
            h.setAttribute("type", L);
            for (var u in e) e[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? h.setAttribute("class", e[u]) : "classid" != u.toLowerCase() && h.setAttribute(u, e[u]));
            for (var c in t) t[c] != Object.prototype[c] && "movie" != c.toLowerCase() && d(h, c, t[c]);
            n.parentNode.replaceChild(h, n),
            s = h
        }
        return s
    }
    function d(e, t, i) {
        var s = m("param");
        s.setAttribute("name", t),
        s.setAttribute("value", i),
        e.appendChild(s)
    }
    function p(e) {
        var t = g(e);
        t && "OBJECT" == t.nodeName && (U.ie && U.win ? (t.style.display = "none",
        function() {
            4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
        } ()) : t.parentNode.removeChild(t))
    }
    function f(e) {
        var t = g(e);
        if (t) {
            for (var i in t)"function" == typeof t[i] && (t[i] = null);
            t.parentNode.removeChild(t)
        }
    }
    function g(e) {
        var t = null;
        try {
            t = D.getElementById(e)
        } catch(i) {}
        return t
    }
    function m(e) {
        return D.createElement(e)
    }
    function v(e, t, i) {
        e.attachEvent(t, i),
        B[B.length] = [e, t, i]
    }
    function y(e) {
        var t = U.pv,
        i = e.split(".");
        return i[0] = parseInt(i[0], 10),
        i[1] = parseInt(i[1], 10) || 0,
        i[2] = parseInt(i[2], 10) || 0,
        t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2] ? !0 : !1
    }
    function _(e, t, i, s) {
        if (!U.ie || !U.mac) {
            var n = D.getElementsByTagName("head")[0];
            if (n) {
                var o = i && "string" == typeof i ? i: "screen";
                if (s && (A = null, x = null), !A || x != o) {
                    var r = m("style");
                    r.setAttribute("type", "text/css"),
                    r.setAttribute("media", o),
                    A = n.appendChild(r),
                    U.ie && U.win && typeof D.styleSheets != T && D.styleSheets.length > 0 && (A = D.styleSheets[D.styleSheets.length - 1]),
                    x = o
                }
                U.ie && U.win ? A && typeof A.addRule == k && A.addRule(e, t) : A && typeof D.createTextNode != T && A.appendChild(D.createTextNode(e + " {" + t + "}"))
            }
        }
    }
    function w(e, t) {
        if (Y) {
            var i = t ? "visible": "hidden";
            H && g(e) ? g(e).style.visibility = i: _("#" + e, "visibility:" + i)
        }
    }
    function b(e) {
        var t = /[\\\"<>\.;]/,
        i = null != t.exec(e);
        return i && typeof encodeURIComponent != T ? encodeURIComponent(e) : e
    }
    var P, E, C, S, A, x, T = "undefined",
    k = "object",
    I = "Shockwave Flash",
    M = "ShockwaveFlash.ShockwaveFlash",
    L = "application/x-shockwave-flash",
    R = "SWFObjectExprInst",
    N = "onreadystatechange",
    O = window,
    D = document,
    j = navigator,
    V = !1,
    z = [s],
    F = [],
    W = [],
    B = [],
    H = !1,
    $ = !1,
    Y = !0,
    U = function() {
        var e = typeof D.getElementById != T && typeof D.getElementsByTagName != T && typeof D.createElement != T,
        t = j.userAgent.toLowerCase(),
        i = j.platform.toLowerCase(),
        s = i ? /win/.test(i) : /win/.test(t),
        n = i ? /mac/.test(i) : /mac/.test(t),
        o = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
        r = !1,
        a = [0, 0, 0],
        l = null;
        if (typeof j.plugins != T && typeof j.plugins[I] == k) l = j.plugins[I].description,
        !l || typeof j.mimeTypes != T && j.mimeTypes[L] && !j.mimeTypes[L].enabledPlugin || (V = !0, r = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof O.ActiveXObject != T) try {
            var h = new ActiveXObject(M);
            h && (l = h.GetVariable("$version"), l && (r = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
        } catch(u) {}
        return {
            w3: e,
            pv: a,
            wk: o,
            ie: r,
            win: s,
            mac: n
        }
    } (); (function() {
        U.w3 && ((typeof D.readyState != T && "complete" == D.readyState || typeof D.readyState == T && (D.getElementsByTagName("body")[0] || D.body)) && e(), H || (typeof D.addEventListener != T && D.addEventListener("DOMContentLoaded", e, !1), U.ie && U.win && (D.attachEvent(N,
        function() {
            "complete" == D.readyState && (D.detachEvent(N, arguments.callee), e())
        }), O == top && !
        function() {
            if (!H) {
                try {
                    D.documentElement.doScroll("left")
                } catch(t) {
                    return void setTimeout(arguments.callee, 0)
                }
                e()
            }
        } ()), U.wk && !
        function() {
            return H ? void 0 : /loaded|complete/.test(D.readyState) ? void e() : void setTimeout(arguments.callee, 0)
        } (), i(e)))
    })(),
    function() {
        U.ie && U.win && window.attachEvent("onunload",
        function() {
            for (var e = B.length,
            t = 0; e > t; t++) B[t][0].detachEvent(B[t][1], B[t][2]);
            for (var i = W.length,
            s = 0; i > s; s++) p(W[s]);
            for (var n in U) U[n] = null;
            U = null;
            for (var o in swfobject) swfobject[o] = null;
            swfobject = null
        })
    } ();
    return {
        registerObject: function(e, t, i, s) {
            if (U.w3 && e && t) {
                var n = {};
                n.id = e,
                n.swfVersion = t,
                n.expressInstall = i,
                n.callbackFn = s,
                F[F.length] = n,
                w(e, !1)
            } else s && s({
                success: !1,
                id: e
            })
        },
        getObjectById: function(e) {
            return U.w3 ? r(e) : void 0
        },
        embedSWF: function(e, i, s, n, o, r, h, u, d, p) {
            var f = {
                success: !1,
                id: i
            };
            U.w3 && !(U.wk && U.wk < 312) && e && i && s && n && o ? (w(i, !1), t(function() {
                s += "",
                n += "";
                var t = {};
                if (d && typeof d === k) for (var g in d) t[g] = d[g];
                t.data = e,
                t.width = s,
                t.height = n;
                var m = {};
                if (u && typeof u === k) for (var v in u) m[v] = u[v];
                if (h && typeof h === k) for (var _ in h) typeof m.flashvars != T ? m.flashvars += "&" + _ + "=" + h[_] : m.flashvars = _ + "=" + h[_];
                if (y(o)) {
                    var b = c(t, m, i);
                    t.id == i && w(i, !0),
                    f.success = !0,
                    f.ref = b
                } else {
                    if (r && a()) return t.data = r,
                    void l(t, m, i, p);
                    w(i, !0)
                }
                p && p(f)
            })) : p && p(f)
        },
        switchOffAutoHideShow: function() {
            Y = !1
        },
        ua: U,
        getFlashPlayerVersion: function() {
            return {
                major: U.pv[0],
                minor: U.pv[1],
                release: U.pv[2],
                build: U.pv[3]
            }
        },
        hasFlashPlayerVersion: y,
        createSWF: function(e, t, i) {
            return U.w3 ? c(e, t, i) : void 0
        },
        showExpressInstall: function(e, t, i, s) {
            U.w3 && a() && l(e, t, i, s)
        },
        removeSWF: function(e) {
            U.w3 && p(e)
        },
        createCSS: function(e, t, i, s) {
            U.w3 && _(e, t, i, s)
        },
        addDomLoadEvent: t,
        addLoadEvent: i,
        getQueryParamValue: function(e) {
            var t = D.location.search || D.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return b(t);
                for (var i = t.split("&"), s = 0; s < i.length; s++) if (i[s].substring(0, i[s].indexOf("=")) == e) return b(i[s].substring(i[s].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if ($) {
                var e = g(R);
                e && P && (e.parentNode.replaceChild(P, e), E && (w(E, !0), U.ie && U.win && (P.style.display = "block")), C && C(S)),
                $ = !1
            }
        }
    }
} ();
define("swfobject",
function(e) {
    return function() {
        var t;
        return t || e.swfobject
    }
} (this)),
define("lib/Util", ["require", "underscore", "backbone-vanilla"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("backbone-vanilla"),
    s = function(e) {
        this.options = e,
        this.initialize.apply(this, arguments)
    };
    return t.extend(s.prototype, i.Events, {
        initialize: function() {}
    }),
    s.extend = i.Model.extend,
    s
}),
define("text", ["module"],
function(e) {
    "use strict";
    var t, i, s, n, o, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
    a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
    l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
    h = "undefined" != typeof location && location.href,
    u = h && location.protocol && location.protocol.replace(/\:/, ""),
    c = h && location.hostname,
    d = h && (location.port || void 0),
    p = {},
    f = e.config && e.config() || {};
    return t = {
        version: "2.0.10",
        strip: function(e) {
            if (e) {
                e = e.replace(a, "");
                var t = e.match(l);
                t && (e = t[1])
            } else e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: f.createXhr ||
        function() {
            var e, t, i;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject) for (t = 0; 3 > t; t += 1) {
                i = r[t];
                try {
                    e = new ActiveXObject(i)
                } catch(s) {}
                if (e) {
                    r = [i];
                    break
                }
            }
            return e
        },
        parseName: function(e) {
            var t, i, s, n = !1,
            o = e.indexOf("."),
            r = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return - 1 !== o && (!r || o > 1) ? (t = e.substring(0, o), i = e.substring(o + 1, e.length)) : t = e,
            s = i || t,
            o = s.indexOf("!"),
            -1 !== o && (n = "strip" === s.substring(o + 1), s = s.substring(0, o), i ? i = s: t = s),
            {
                moduleName: t,
                ext: i,
                strip: n
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, i, s, n) {
            var o, r, a, l = t.xdRegExp.exec(e);
            return l ? (o = l[2], r = l[3], r = r.split(":"), a = r[1], r = r[0], !(o && o !== i || r && r.toLowerCase() !== s.toLowerCase() || (a || r) && a !== n)) : !0
        },
        finishLoad: function(e, i, s, n) {
            s = i ? t.strip(s) : s,
            f.isBuild && (p[e] = s),
            n(s)
        },
        load: function(e, i, s, n) {
            if (n.isBuild && !n.inlineText) return void s();
            f.isBuild = n.isBuild;
            var o = t.parseName(e),
            r = o.moduleName + (o.ext ? "." + o.ext: ""),
            a = i.toUrl(r),
            l = f.useXhr || t.useXhr;
            return 0 === a.indexOf("empty:") ? void s() : void(!h || l(a, u, c, d) ? t.get(a,
            function(i) {
                t.finishLoad(e, o.strip, i, s)
            },
            function(e) {
                s.error && s.error(e)
            }) : i([r],
            function(e) {
                t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, s)
            }))
        },
        write: function(e, i, s, n) {
            if (p.hasOwnProperty(i)) {
                var o = t.jsEscape(p[i]);
                s.asModule(e + "!" + i, "define(function () { return '" + o + "';});\n")
            }
        },
        writeFile: function(e, i, s, n, o) {
            var r = t.parseName(i),
            a = r.ext ? "." + r.ext: "",
            l = r.moduleName + a,
            h = s.toUrl(r.moduleName + a) + ".js";
            t.load(l, s,
            function(i) {
                var s = function(e) {
                    return n(h, e)
                };
                s.asModule = function(e, t) {
                    return n.asModule(e, h, t)
                },
                t.write(e, l, s, o)
            },
            o)
        }
    },
    "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (i = require.nodeRequire("fs"), t.get = function(e, t, s) {
        try {
            var n = i.readFileSync(e, "utf8");
            0 === n.indexOf("\ufeff") && (n = n.substring(1)),
            t(n)
        } catch(o) {
            s(o)
        }
    }) : "xhr" === f.env || !f.env && t.createXhr() ? t.get = function(e, i, s, n) {
        var o, r = t.createXhr();
        if (r.open("GET", e, !0), n) for (o in n) n.hasOwnProperty(o) && r.setRequestHeader(o.toLowerCase(), n[o]);
        f.onXhr && f.onXhr(r, e),
        r.onreadystatechange = function(t) {
            var n, o;
            4 === r.readyState && (n = r.status, n > 399 && 600 > n ? (o = new Error(e + " HTTP status: " + n), o.xhr = r, s(o)) : i(r.responseText), f.onXhrComplete && f.onXhrComplete(r, e))
        },
        r.send(null)
    }: "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function(e, t) {
        var i, s, n = "utf-8",
        o = new java.io.File(e),
        r = java.lang.System.getProperty("line.separator"),
        a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), n)),
        l = "";
        try {
            for (i = new java.lang.StringBuffer, s = a.readLine(), s && s.length() && 65279 === s.charAt(0) && (s = s.substring(1)), null !== s && i.append(s); null !== (s = a.readLine());) i.append(r),
            i.append(s);
            l = String(i.toString())
        } finally {
            a.close()
        }
        t(l)
    }: ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (s = Components.classes, n = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in s, t.get = function(e, t) {
        var i, r, a, l = {};
        o && (e = e.replace(/\//g, "\\")),
        a = new FileUtils.File(e);
        try {
            i = s["@mozilla.org/network/file-input-stream;1"].createInstance(n.nsIFileInputStream),
            i.init(a, 1, 0, !1),
            r = s["@mozilla.org/intl/converter-input-stream;1"].createInstance(n.nsIConverterInputStream),
            r.init(i, "utf-8", i.available(), n.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            r.readString(i.available(), l),
            r.close(),
            i.close(),
            t(l.value)
        } catch(h) {
            throw new Error((a && a.path || "") + ": " + h)
        }
    }),
    t
}),
define("tpl", ["module", "text", "underscore"],
function(module, text, _) {
    var settings = module.config() || {};
    return {
        load: function(e, t, i, s) {
            return s.isBuild ? void text.load.call(text, e, t, i, s) : void t(["text!" + e],
            function(e) {
                i(e ? _.template(e, void 0, settings) : function() {
                    return ""
                })
            })
        },
        write: function(pluginName, moduleName, write, config) {
            text.write.call(text, pluginName, moduleName, {
                asModule: function(name, contents) {
                    contents = contents.substr(contents.indexOf("return") + 7),
                    contents = contents.substr(0, contents.lastIndexOf(";") - 3);
                    try {
                        var template = _.template(eval(contents), void 0, settings);
                        write.asModule(pluginName + "!" + moduleName, "define(function() { return " + template.source + " });")
                    } catch(err) {
                        throw console.error("~~~~~"),
                        console.error("FAILED TO COMPILE " + pluginName + "!" + moduleName),
                        console.error("Error:		" + String(err)),
                        console.error("\n"),
                        err && err.source && (console.error("Error Source:\n"), console.error(err.source), console.error("\n\n")),
                        console.error("Original Contents:\n"),
                        console.error(contents),
                        console.error("\n\n"),
                        err
                    }
                }
            },
            config)
        }
    }
}),
define("tpl!audio-player/swf.tpl", [],
function() {
    return function(obj) {
        var __t, __p = "";
        Array.prototype.join;
        with(obj || {}) __p += '<div class="flash-wrapper">\n  <div id=' + (null == (__t = swfId) ? "": __t) + "></div> \n</div>\n";
        return __p
    }
}),
define("util/FlashFallback", ["require", "underscore", "backbone-vanilla", "swfobject", "tpl!audio-player/swf.tpl"],
function(e) {
    "use strict";
    var t, i = e("underscore"),
    s = e("backbone-vanilla"),
    n = e("swfobject"),
    o = e("tpl!audio-player/swf.tpl"),
    r = "11.1.0",
    a = 214,
    l = 137,
    h = 660,
    u = 500;
    try {
        t = e.toUrl("assets/flash/fallback.swf")
    } catch(c) {
        t = void 0
    }
    var d = "swf-element",
    p = "ExternalInterfaceChannel",
    f = {
        menu: "false",
        scale: "exactFit",
        quality: "best",
        hasPriority: "true",
        allowFullscreen: "false",
        allowscriptaccess: "always",
        wmode: "transparent"
    },
    g = window.swfError ||
    function(e, t) {
        if (!t) throw new Error(e);
        console.error(e)
    },
    m = s.View.extend({
        initialize: function(e) {
            e = e || {},
            this.debug = e.debug || !1,
            this.logging = e.logging || 0,
            this.ready = !1;
            var s = e.fallbackUrl || t;
            if (this.failedInit = !1, !n.hasFlashPlayerVersion(r)) return void(this.failedInit = !0);
            var c = a,
            g = l;
            this.debug && (c = h, g = u),
            this.swf = null,
            this.id = i.uniqueId(),
            this.swfId = d + this.id,
            this.channel = p + this.id,
            i.bindAll(this, "_fromSwf", "_onSwfEmbed"),
            this.template = o,
            this.$el.append(this.template({
                swfId: this.swfId
            })),
            window[this.channel] = this._fromSwf,
            n.embedSWF(s + "?" + (new Date).getTime(), this.swfId, c, g, r, null, {
                channel: this.channel,
                logging: this.logging,
                debug: this.debug
            },
            f, {},
            this._onSwfEmbed)
        },
        _onSwfEmbed: function(e) {
            var t = e.success,
            i = e.id,
            s = e.ref;
            t ? (this.swfId = i, this.swf = s) : (this.failedInit = !0, g("Failed to embed swf"))
        },
        showDebug: function() {
            this.$(".flash-wrapper").addClass("debug")
        },
        showPermission: function() {
            this.$(".flash-wrapper").addClass("open")
        },
        hide: function() {
            this.$(".flash-wrapper").removeClass("open debug")
        },
        toSwf: function(e, t, i) {
            return this.swf && this.ready ? this.swf.fromJs(e, t, i) : void g("Cannot send messages to swf - swf not ready")
        },
        _fromSwf: function(e, t) {
            try {
                switch (e) {
                case "INIT_COMPLETE":
                    this.ready = !0,
                    this.trigger("ready");
                    break;
                case "TAPE_DECK_MESSAGE":
                case "METRONOME_MESSAGE":
                case "TUNER_MESSAGE":
                case "GUITAR_PLAYER_MESSAGE":
                    this.trigger(e, t);
                    break;
                default:
                    g("Unhandled message from swf: " + e)
                }
            } catch(i) {
                window.onerror && window.onerror(i.stack, "_fromSwf", "_fromSwf"),
                g("Uncaught " + i.stack, !0)
            }
        }
    });
    return m
}),
define("audio-player/AudioPlayer_flash", ["require", "jquery", "underscore", "lib/Util", "util/FlashFallback"],
function(e) {
    "use strict";
    var t = e("jquery"),
    i = e("underscore"),
    s = e("lib/Util"),
    n = e("util/FlashFallback"),
    o = s.extend({
        initialize: function() {
            this.swf = new n({
                el: "body",
                logging: 2
            }),
            this.ready = !1,
            this._countingIn = !1,
            this._countingInDone = null,
            this._playing = !1,
            this.listenTo(this.swf, "ready", this._initComplete),
            this.listenTo(this.swf, "TAPE_DECK_MESSAGE", this._tapeDeckMessageHandler),
            this.listenTo(this.swf, "METRONOME_MESSAGE", this._metronomeMessageHandler)
        },
        _initComplete: function() {
            this.ready = !0,
            this.trigger("ready")
        },
        _tapeDeckMessageHandler: function(e) {
            var t = e.msg;
            switch (t) {
            case "loadProgress":
                this.trigger(t, e.track, e.percent);
                break;
            case "loadError":
            case "loadComplete":
                this.trigger(t, e.track);
                break;
            case "cuePoint":
                this.trigger(t, e.name, e.time);
                break;
            case "done":
            case "garble":
                this.trigger(t);
                break;
            default:
                throw new Error("Unhandled event from AudioPlayer: " + t)
            }
        },
        _metronomeMessageHandler: function(e) {
            var t = e.msg;
            "countInComplete" === t && this._countInDone && this._countInDone.resolve()
        },
        load: function(e, t, i) {
            return this.swf.toSwf("tape-deck", "load", {
                url: e,
                type: t,
                startTime: i
            })
        },
        addClickTrack: function(e, t, i) {
            return this.swf.toSwf("tape-deck", "addClickTrack", {
                measures: e,
                tempoChanges: t,
                meterChanges: i
            })
        },
        unmute: function(e) {
            this.swf.toSwf("tape-deck", "unmute", e)
        },
        mute: function(e) {
            this.swf.toSwf("tape-deck", "mute", e)
        },
        toggle: function(e) {
            this.swf.toSwf("tape-deck", "toggle", e)
        },
        rate: function(e) {
            return this.swf.toSwf("tape-deck", "rate", e)
        },
        play: function() {
            this._countInDone && (this._swf.toSwf("metronome", "off"), this._countInDone.reject()),
            this.swf.toSwf("tape-deck", "play"),
            this._playing = !0,
            this._countingIn = !1
        },
        countInPlay: function(e, s) {
            return this._playing || this._countingIn ? void 0 : (this._countingIn = !0, this._countInDone = t.Deferred(), this.swf.toSwf("metronome", "countIn", {
                numBeats: e,
                tempo: s
            }), this._countInDone.done(i.bind(function() {
                this.swf.toSwf("tape-deck", "play")
            },
            this)).fail(i.bind(function() {
                this._playing = !1
            },
            this)).always(i.bind(function() {
                this._countingIn = !1
            },
            this)), this._playing = !0, this._countInDone)
        },
        pause: function() {
            this.swf.toSwf("tape-deck", "pause"),
            this.swf.toSwf("metronome", "off"),
            this._playing = !1,
            this._countingIn = !1,
            this._countInDone && (this._countInDone.reject(), this._countInDone = null)
        },
        stop: function() {
            this.swf.toSwf("tape-deck", "stop"),
            this.swf.toSwf("metronome", "off"),
            this._playing = !1,
            this._countingIn = !1,
            this._countInDone && (this._countInDone.reject(), this._countInDone = null)
        },
        seek: function(e) {
            this.swf.toSwf("tape-deck", "seek", e)
        },
        position: function() {
            return this.swf.toSwf("tape-deck", "position")
        },
        length: function() {
            return this.swf.toSwf("tape-deck", "length")
        },
        loopOn: function(e, t) {
            return this.swf.toSwf("tape-deck", "loopOn", {
                start: e,
                end: t
            })
        },
        loopOff: function() {
            this.swf.toSwf("tape-deck", "loopOff")
        },
        addCue: function(e, t) {
            this.swf.toSwf("tape-deck", "addCue", {
                time: e,
                name: t
            })
        },
        removeCue: function(e) {
            return this.swf.toSwf("tape-deck", "removeCue", e)
        },
        clearCues: function() {
            this.swf.toSwf("tape-deck", "clearCues")
        }
    });
    return o
}),
define("lib/AccurateTimer", ["underscore"],
function(e) {
    "use strict";
    var t = function(t) {
        if (!t) throw new Error("Accurate Timer was not provided options!");
        this.interval = t.interval || 10,
        this.callback = t.callback ||
        function() {},
        this.complete = t.complete ||
        function() {},
        this.countdown = !1,
        this.running = !1,
        this.time = 0,
        this.finalTime = 0,
        this.startTime = 0,
        this.timeout = null,
        this.countdownDuration = 0,
        e.bindAll(this, "_tick")
    },
    i = {
        reset: function() {
            this.stop(),
            this.startTime = 0,
            this.time = 0
        },
        start: function(e) {
            e && (this.countdownDuration = e, this.countdown = !0),
            this.time = 0,
            this.startTime = Date.now(),
            this.running = !0,
            this.timeout = window.setTimeout(this._tick, this.interval)
        },
        stop: function() {
            this.running = !1,
            this.finalTime = Date.now() - this.startTime,
            window.clearTimeout(this.timeout)
        },
        lap: function() {
            if (this.running) {
                var e = Date.now() - this.startTime;
                return this.countdown ? this.countdownDuration - e: e
            }
            return this.finalTime
        },
        _tick: function() {
            this.time += this.interval;
            var e = Date.now() - this.startTime,
            t = e - this.time;
            this.countdown && this.countdownDuration - e < 0 && (this.finalTime = 0, this.running = !1, this.complete(this)),
            this.callback(this),
            this.running && (this.timeout = window.setTimeout(this._tick, this.interval - t))
        }
    };
    return t.prototype = e.extend(t.prototype, i),
    t
}),
define("lib/audiocontext-polyfill", ["require", "ua-parser"],
function(e) {
    "use strict";
    var t = e("ua-parser");
    window.AudioContext = window.AudioContext || window.webkitAudioContext,
    window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    var i = window.AudioContext.prototype;
    i.createGain = i.createGain || i.createGainNode,
    i.createDelay = i.createDelay || i.createDelaykode,
    i.createScriptProcessor = i.createScriptProcessor || i.createJavaScriptNode;
    var s = new window.AudioContext;
    if (s.createBufferSource) {
        var n = s.createBufferSource().constructor.prototype,
        o = function() {
            return arguments.length > 1 ? n.noteGrainOn.apply(this, arguments) : n.noteOn.apply(this, arguments)
        };
        n.start = n.start || o,
        n.stop = n.stop || n.noteOff
    }
    if (s.createOscillator) {
        var r = s.createOscillator().constructor.prototype,
        a = function() {
            return arguments.length > 1 ? r.noteGrainOn.apply(this, arguments) : r.noteOn.apply(this, arguments)
        };
        r.start = r.start || a,
        r.stop = r.stop || r.noteOff,
        r.setPeriodicWave = r.setPeriodicWave || r.setWaveTable
    }
    if (s.createGain) {
        var l = s.createGain().constructor.prototype;
        l.setTargetAtTime = l.setTargetAtTime || l.setTargetValueAtTime
    }
    s.close && (s.close(), s = null);
    var h = "iOS" === (new t).getOS().name;
    if (h) {
        var u = window.AudioContext;
        window.AudioContext = function() {
            var e = new u,
            t = e.createBufferSource(),
            i = e.createScriptProcessor(256, 1, 1),
            s = function() {
                t.start(0),
                t.connect(i),
                i.connect(e.destination)
            };
            return document.body.addEventListener("touchend", s, !1),
            i.onaudioprocess = function() {
                t.disconnect(),
                i.disconnect(),
                document.body.removeEventListener("touchend", s, !1),
                i.onaudioprocess = null
            },
            e
        }
    }
}),
define("audio-player/AudioPlayer_html5", ["require", "underscore", "lib/Util", "lib/AccurateTimer", "lib/audiocontext-polyfill"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("lib/Util"),
    s = e("lib/AccurateTimer");
    e("lib/audiocontext-polyfill");
    var n = "https://s3.amazonaws.com/halleonard.tunessence.com/metronome_click.mp3",
    o = 2,
    r = .25,
    a = .1,
    l = 1,
    h = 2;
    window.audioCtx = window.audioCtx || new window.AudioContext;
    var u = i.extend({
        initialize: function() {
            if (this._audioCtx = window.audioCtx, !this._audioCtx) throw new Error("WebAudio API AudioContext not supported.");
            this.ready = !1,
            this._playing = !1,
            this._playPosition = 0,
            this._playTime = 0,
            this._positionDelta = 0,
            this._loop = !1,
            this._loopStart = 0,
            this._loopEnd = 0,
            this._tracks = [],
            this._loadClick(),
            this._clickTrackTimer = new s({
                interval: 1e3 * r,
                callback: t.bind(this._scheduleClicks, this)
            }),
            this._cuePoints = [],
            this._cuePointTimer = new s({
                interval: 20,
                callback: t.bind(this._checkCues, this)
            }),
            this.noRateChange = !0,
            this.noCountIn = !0,
            this.noLooping = !0;
            var e = t.bind(function() {
                this.ready = !0,
                this.trigger("ready")
            },
            this);
            t.defer(e)
        },
        _loadClick: function() {
            var e = new XMLHttpRequest;
            e.open("GET", n, !0),
            e.responseType = "arraybuffer";
            var i = t.bind(function(e) {
                this._clickBuffer = e
            },
            this),
            s = function(e) {
                throw new Error("Error decoding click track audio data: " + e.err)
            };
            e.onload = t.bind(function() {
                var t = e.response;
                this._audioCtx.decodeAudioData(t, i, s)
            },
            this),
            e.send()
        },
        _scheduleClicks: function() {
            var e = this._audioCtx.currentTime,
            i = this.position() / 1e3;
            return 1e3 * i >= this.length() ? (this.trigger("done"), void this.stop()) : void t.each(this._tracks,
            function(s) {
                if (s.type === h) {
                    for (var n = s.clickPositions,
                    r = s.sources; r.length > 0 && r[0].stopTime < e;) r[0].source.stop(0),
                    r[0].source.disconnect(),
                    r.shift();
                    var a = t.sortedIndex(n, i);
                    for (this._loop && n[a] >= this._loopEnd && (a = t.sortedIndex(n, this._loopStart), i -= this._loopEnd - this._loopStart); a < n.length && !(r.length > 0 && r[r.length - 1].stopTime - e >= o);) {
                        var l = e + (n[a] - i);
                        if (!r[a]) {
                            var u = this._audioCtx.createBufferSource();
                            u.buffer = this._clickBuffer,
                            u.connect(s.gainNode),
                            u.start(l),
                            r.push({
                                startTime: l,
                                stopTime: l + this._clickBuffer.duration,
                                clickIndex: a,
                                source: u
                            })
                        }
                        a++,
                        this._loop && n[a] >= this._loopEnd && (a = t.sortedIndex(n, this._loopStart), i -= this._loopEnd - this._loopStart)
                    }
                }
            },
            this)
        },
        _clearScheduledClicks: function() {
            t.each(this._tracks,
            function(e) {
                e.type === h && (t.each(e.sources,
                function(e) {
                    e.source.stop(0),
                    e.source.disconnect()
                },
                this), e.sources = [])
            },
            this)
        },
        load: function(e, i, s) {
            s = s || 0;
            var n = new XMLHttpRequest;
            n.open("GET", e, !0),
            n.responseType = "arraybuffer";
            var o = this._tracks.length,
            r = this._audioCtx.createGain();
            r.channelCountMode = "explicit",
            r.channelCount = 1,
            r.gain.value = 0,
            r.connect(this._audioCtx.destination),
            this._tracks.push({
                type: l,
                gainNode: r,
                startTime: s
            });
            var a = t.bind(function(e) {
                this._tracks[o].buffer = e,
                this.trigger("loadComplete", o)
            },
            this),
            h = t.bind(function(t) {
                throw this.trigger("loadError", o),
                new Error("Error decoding audio data from " + e + ": " + t.err)
            },
            this);
            n.onload = t.bind(function() {
                var e = n.response;
                this._audioCtx.decodeAudioData(e, a, h)
            },
            this);
            var u = 0;
            return n.onprogress = t.bind(function(e) {
                var t = Math.floor(100 * e.loaded / e.total);
                t > u && (u = t, this.trigger("loadProgress", o, t))
            },
            this),
            n.send(),
            o
        },
        addClickTrack: function(e, t, i) {
            var s = this._tracks.length,
            n = this._audioCtx.createGain();
            if (n.channelCountMode = "explicit", n.channelCount = 1, n.gain.value = 0, n.connect(this._audioCtx.destination), t.sort(function(e, t) {
                return e.measure - t.measure
            }), i.sort(function(e, t) {
                return e.measure - t.measure
            }), t.length < 1 || 0 !== t[0].measure) throw new Error("ClickTrack: tempo change must be present for first measure");
            if (i.length < 1 || 0 !== i[0].measure) throw new Error("ClickTrack: meter change must be present for first measure");
            for (var o, r, a = [], l = 0, u = 0; e > u; u++) {
                t.length > 0 && t[0].measure === u && (o = t[0].tempo, t.shift()),
                i.length > 0 && i[0].measure === u && (r = i[0].meter, i.shift());
                for (var c = 60 / o,
                d = 0; d < r[0]; d++) a.push(l + d * c);
                l += r[0] * c
            }
            return this._tracks.push({
                type: h,
                gainNode: n,
                clickPositions: a,
                duration: l,
                sources: []
            }),
            s
        },
        unmute: function(e) {
            this._tracks[e].gainNode.gain.value = 1
        },
        mute: function(e) {
            this._tracks[e].gainNode.gain.value = 0
        },
        toggle: function(e) {
            var t = this._tracks[e].gainNode;
            t.gain.value = 1 - t.gain.value
        },
        rate: function(e) {
            return "undefined" == typeof e ? 1 : void 0
        },
        play: function() {
            this._playing || (this._playTime = this._audioCtx.currentTime, this._positionDelta = 0, this._playing = !0, t.each(this._tracks,
            function(e) {
                if (e.type === l) {
                    var t = this._audioCtx.createBufferSource();
                    t.buffer = e.buffer,
                    t.connect(e.gainNode);
                    var i = e.startTime;
                    t.start(this._playTime, this._playPosition + i),
                    e.source = t
                }
            },
            this), this._setLoopOnTracks(), this._scheduleClicks(), this._clickTrackTimer.start(), this._prevCheckedCuePosition = void 0, this._cuePointTimer.start())
        },
        countInPlay: function() {},
        pause: function() {
            this._playing && (this._playPosition = this.position() / 1e3, this._clickTrackTimer.reset(), this._cuePointTimer.reset(), this._stopAudioSources(), this._playing = !1)
        },
        stop: function() {
            this._playing && (this._clickTrackTimer.reset(), this._cuePointTimer.reset(), this._stopAudioSources()),
            this._playPosition = this._loop ? this._loopStart: 0,
            this._playing = !1
        },
        _stopAudioSources: function() {
            t.each(this._tracks,
            function(e) {
                e.type === l && (e.source.stop(0), delete e.source)
            },
            this),
            this._clearScheduledClicks()
        },
        seek: function(e) {
            var t = this._playing;
            this.stop(),
            this._playPosition = e / 1e3,
            t && this.play()
        },
        position: function() {
            var e = this._playPosition;
            if (!this._playing) return 1e3 * e;
            if (e += this._audioCtx.currentTime - this._playTime, e += this._positionDelta, this._loop) {
                var t = this._loopEnd - this._loopStart;
                e -= this._loopsCompleted() * t
            }
            return 1e3 * e
        },
        length: function() {
            var e = 0;
            return t.each(this._tracks,
            function(t) {
                t.type === l && t.buffer.duration > e ? e = t.buffer.duration: t.type === h && t.duration > e && (e = t.duration)
            }),
            1e3 * e
        },
        loopOn: function(e, t) {
            var i = e / 1e3,
            s = t / 1e3,
            n = s - i >= a && i >= 0;
            return this._loop && (this._positionDelta -= this._loopsCompleted() * (this._loopEnd - this._loopStart)),
            n ? (this._loop = !0, this._loopStart = i, this._loopEnd = s, this._setLoopOnTracks(), !0) : (console.warn("INVALID LOOP"), !1)
        },
        loopOff: function() {
            this._loop && (this._positionDelta -= this._loopsCompleted() * (this._loopEnd - this._loopStart)),
            this._loop = !1,
            this._setLoopOnTracks()
        },
        _setLoopOnTracks: function() {
            this._playing && t.each(this._tracks,
            function(e) {
                if (e.type === l) {
                    var t = e.startTime;
                    e.source.loopStart = this._loopStart + t,
                    e.source.loopEnd = this._loopEnd + t,
                    e.source.loop = this._loop
                }
            },
            this)
        },
        _loopRolledOffset: function(e, t, i, s) {
            return s >= e + t || e > s ? t: i - e + (t - (s - e)) % (s - i)
        },
        _loopsCompleted: function() {
            if (!this._loop || !this._playing) return 0;
            var e = this._loopEnd - this._loopStart,
            t = this._audioCtx.currentTime - this._playTime + this._positionDelta,
            i = this._loopStart - this._playPosition;
            return Math.floor((t - i) / e)
        },
        addCue: function(e, t) {
            this.removeCue(t),
            this._cuePoints.push({
                time: e,
                name: String(t)
            }),
            this._cuePoints.sort(function(e, t) {
                return e.time - t.time
            })
        },
        removeCue: function(e) {
            var t = this._cuePoints,
            i = null;
            e = String(e);
            for (var s = 0; s < t.length; s++) i && (t[s - 1] = t[s]),
            t[s].name === e && (i = t[s]);
            return i ? (t.pop(), i.time) : -1
        },
        clearCues: function() {
            this._cuePoints = []
        },
        _checkCues: function() {
            var e = this._cuePoints,
            i = this.position(),
            s = this._prevCheckedCuePosition,
            n = !1;
            if ("undefined" == typeof s && (s = this._playPosition, n = !0), 0 === e.length) return void(this._prevCheckedCuePosition = i);
            var o = [];
            this._loop && s > i ? (this._cueSubset(s, this._loopEnd, n, o), this._cueSubset(this._loopStart, i, !0, o)) : this._cueSubset(s, i, n, o),
            t.each(o,
            function(e) {
                this.trigger("cuePoint", e.name, e.time)
            },
            this),
            this._prevCheckedCuePosition = i
        },
        _cueSubset: function(e, i, s, n) {
            for (var o = this._cuePoints,
            r = t.sortedIndex(o, {
                time: e - 1
            },
            "time"); r < o.length && o[r].time <= i;) {
                var a = o[r].time;
                i >= a && (a > e || s && a === e) && n.push(o[r]),
                r++
            }
        }
    });
    return u
}),
define("audio-player/DSP/VLib", {
    copy: function(e, t, i, s, n) {
        "use strict";
        for (; n > 0; n--, t++, s++) i[s] = e[t]
    },
    zero: function(e, t, i) {
        "use strict";
        for (; i > 0; i--, t++) e[t] = 0
    },
    multiply: function(e, t, i, s, n, o, r) {
        "use strict";
        for (; r > 0; r--, t++, s++, o++) n[o] = e[t] * i[s]
    },
    add: function(e, t, i, s, n, o, r) {
        "use strict";
        for (; r > 0; r--, t++, s++, o++) n[o] = e[t] + i[s]
    },
    subtract: function(e, t, i, s, n, o, r) {
        "use strict";
        for (; r > 0; r--, t++, s++, o++) n[o] = e[t] - i[s]
    },
    magnitude: function(e, t, i, s, n, o) {
        "use strict";
        for (var r, a; o > 0; o--, i++, n++) r = e[i],
        a = t[i],
        s[n] = Math.sqrt(r * r + a * a)
    },
    angle: function(e, t, i, s, n, o) {
        "use strict";
        for (; o > 0; o--, i++, n++) s[n] = Math.atan2(t[i], e[i])
    },
    polarToCart: function(e, t, i, s, n, o, r) {
        "use strict";
        for (var a, l; r > 0; r--, i++, o++) a = e[i],
        l = t[i],
        s[o] = a * Math.cos(l),
        n[o] = a * Math.sin(l)
    },
    shift: function(e, t, i, s) {
        "use strict";
        if (t > i) for (; s > 0; s--, i++, t++) e[i] = e[t]
    },
    checkNaN: function(e, t, i) {
        "use strict";
        for (var s = 0; t > s; s++) if (isNaN(e[s])) return void console.warn("FOUND NaN: %s", i)
    }
}),
define("audio-player/DSP/FFT", [],
function() {
    "use strict";
    var e = function(e, t) {
        for (var i = 0; t > 0; t--) i <<= 1,
        i |= 1 & e,
        e >>= 1;
        return i
    },
    t = function(t) {
        this._logN = t,
        this._N = 1 << t,
        this._invN = 1 / this._N,
        this._X = new Array(this._N);
        for (var i = 0; i < this._N; i++) this._X[i] = {
            re: 0,
            im: 0,
            next: null,
            bitReverse: 0
        };
        for (i = 0; i < this._N - 1; i++) this._X[i].next = this._X[i + 1];
        for (i = 0; i < this._N; i++) this._X[i].bitReverse = e(i, t)
    };
    return t.prototype = {
        run: function(e, t, i) {
            i = "boolean" != typeof i ? !1 : i;
            for (var s = this._N >> 1,
            n = this._N >> 1,
            o = this._N,
            r = 1,
            a = this._X[0], l = 0, h = i ? this._invN: 1; a;) a.re = h * e[l],
            a.im = h * t[l],
            a = a.next,
            l++;
            for (var u = 0; u < this._logN; u++) {
                var c = 2 * r * Math.PI / this._N;
                i || (c *= -1);
                for (var d = Math.cos(c), p = Math.sin(c), f = 0; f < this._N; f += o) for (var g = this._X[f], m = this._X[f + n], v = 1, y = 0, _ = 0; s > _; _++) {
                    var w = g.re,
                    b = g.im,
                    P = m.re,
                    E = m.im;
                    g.re = w + P,
                    g.im = b + E,
                    P = w - P,
                    E = b - E,
                    m.re = P * v - E * y,
                    m.im = P * y + E * v,
                    g = g.next,
                    m = m.next;
                    var C = v;
                    v = v * d - y * p,
                    y = C * p + y * d
                }
                s >>= 1,
                n >>= 1,
                o >>= 1,
                r <<= 1
            }
            for (a = this._X[0]; a;) {
                var S = a.bitReverse;
                e[S] = a.re,
                t[S] = a.im,
                a = a.next
            }
        },
        _test: function() {
            for (var e = new Float32Array(this._N), t = new Float32Array(this._N), i = 0; i < this._N; i++) e[i] = Math.cos(Math.PI / 2 * i + Math.PI / 6) + .5 * Math.random(),
            t[i] = Math.sin(Math.PI * Math.random()) + .2 * Math.random();
            var s = "x=[";
            for (i = 0; i < this._N; i++) s += e[i] + "+1i*" + t[i] + ",";
            for (s += "];X=[", this.run(e, t, !1), i = 0; i < this._N; i++) s += e[i] + "+1i*" + t[i] + ",";
            s += "];",
            console.log(s)
        }
    },
    t
}),
define("audio-player/DSP/Vocoder", ["require", "audio-player/DSP/VLib", "audio-player/DSP/FFT"],
function(e) {
    "use strict";
    var t = e("audio-player/DSP/VLib"),
    i = e("audio-player/DSP/FFT"),
    s = function(e) {
        this._frameLength = 1 << e,
        this._synthesisHop = this._frameLength / 4,
        this._framesProcessed = 0;
        var t;
        this._window = new Float32Array(this._frameLength);
        var s = 0;
        for (t = 0; t < this._frameLength; t++) this._window[t] = .5 * (1 - Math.cos(2 * Math.PI * t / this._frameLength)),
        s += this._window[t] * this._window[t];
        for (this._resynthesisNormFactor = this._synthesisHop / s, this._binFrequency = new Float32Array(this._frameLength / 2), t = 0; t < this._frameLength / 2; t++) this._binFrequency[t] = 2 * Math.PI * t / this._frameLength;
        this._fft = new i(e),
        this.SYNTHESIS_RESCALING_FUDGE_FACTOR = 1.45,
        this._re = new Float32Array(this._frameLength),
        this._im = new Float32Array(this._frameLength),
        this._mag = new Float32Array(this._frameLength / 2),
        this._phase = new Float32Array(this._frameLength / 2),
        this._previousPhase = new Float32Array(this._frameLength / 2),
        this._phaseIncrement = new Float32Array(this._frameLength / 2),
        this._phaseAccumulator = new Float32Array(this._frameLength / 2),
        this._outputBuffer = new Float32Array(this._frameLength)
    };
    return s.prototype = {
        process: function(e, i, s, n) {
            var o, r;
            if (n) return void t.copy(e, 0, i, 0, this._frameLength);
            if (t.multiply(e, 0, this._window, 0, this._re, 0, this._frameLength), t.zero(this._im, 0, this._frameLength), this._fft.run(this._re, this._im), t.angle(this._re, this._im, 0, this._phase, 0, this._frameLength / 2), t.magnitude(this._re, this._im, 0, this._mag, 0, this._frameLength / 2), 0 === this._framesProcessed) t.copy(this._phase, 0, this._phaseAccumulator, 0, this._frameLength / 2);
            else for (o = 0; o < this._frameLength / 2; o++) r = this._phase[o] - this._previousPhase[o] - s * this._binFrequency[o],
            r -= 2 * Math.PI * Math.round(r / (2 * Math.PI)),
            this._phaseAccumulator[o] = this._phaseAccumulator[o] + this._synthesisHop * (this._binFrequency[o] + r / s);
            for (t.copy(this._phase, 0, this._previousPhase, 0, this._frameLength / 2), t.polarToCart(this._mag, this._phaseAccumulator, 0, this._re, this._im, 0, this._frameLength / 2), o = this._frameLength / 2 + 1; o < this._frameLength; o++) this._re[o] = this._re[this._frameLength - o],
            this._im[o] = -1 * this._im[this._frameLength - o];
            for (this._im[0] = 0, this._im[this._frameLength / 2] = 0, this._fft.run(this._re, this._im, !0), o = 0; o < this._frameLength; o++) this._re[o] = this._re[o] * this._window[o] * this._resynthesisNormFactor * this.SYNTHESIS_RESCALING_FUDGE_FACTOR;
            t.shift(this._outputBuffer, this._synthesisHop, 0, this._frameLength - this._synthesisHop),
            t.zero(this._outputBuffer, this._frameLength - this._synthesisHop, this._synthesisHop),
            t.add(this._outputBuffer, 0, this._re, 0, this._outputBuffer, 0, this._frameLength),
            t.copy(this._outputBuffer, 0, i, 0, this._frameLength),
            this._framesProcessed++
        }
    },
    s
}),
define("audio-player/LoopingVocodingMixerNode", ["require", "underscore", "audio-player/DSP/VLib", "audio-player/DSP/Vocoder"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("audio-player/DSP/VLib"),
    s = e("audio-player/DSP/Vocoder"),
    n = 2048,
    o = 11,
    r = 2,
    a = .1,
    l = .1,
    h = Math.pow(2, o),
    u = 4 * n / h,
    c = function() {
        this.samples = null,
        this.muted = !0
    };
    t.extend(c.prototype, {
        loadFromBuffer: function(e, t) {
            var s = e.getChannelData(0).subarray(t);
            this.samples = new Float32Array(s.length),
            this.samples.set(s),
            e.numberOfChannels > 1 && (s = e.getChannelData(1).subarray(t), i.add(s, 0, this.samples, 0, this.samples, 0, s.length))
        }
    });
    var d = function(e, t) {
        return e / t
    },
    p = function(e, t) {
        return Math.round(e * t)
    },
    f = 0,
    g = 1,
    m = 2,
    v = 3,
    y = function(e) {
        if (!e) throw new Error("Attemping to initialize instance of LoopingVocodingMixerNode with bad AudioContext reference");
        this._ctx = e,
        this._sampleRate = this._ctx.sampleRate,
        this._sources = [],
        this._state = f,
        this._when = 0,
        this._cueTime = 0,
        this._loop = !1,
        this._loopStartTime = 0,
        this._loopEndTime = 0,
        this._previousFrameSampleOffset = 0,
        this._samplesProcessed = 0,
        this._loopsCompleted = 0,
        this._positionDelta = 0,
        this._currentRateStartSample = 0,
        this._rate = 1,
        this.rate(1),
        this._scriptNode = this._ctx.createScriptProcessor(n, 1, 1),
        this._scriptNode.onaudioprocess = t.bind(this._onSampleRequest, this),
        this._vocoder = new s(o),
        this._vocoderInput = new Float32Array(h),
        this._vocoderOutput = new Float32Array(h);
        var i = Math.ceil(n + (u - 1) * r * h / 4);
        this._sampleBuffer = new Float32Array(i)
    };
    return t.extend(y.prototype, {
        connect: function() {
            var e = this._scriptNode;
            e.connect.apply(e, arguments)
        },
        createTrack: function() {
            var e = new c;
            return this._sources.push(e),
            this._sources.length - 1
        },
        loadBuffer: function(e, t, i) {
            var s = this._sources[e],
            n = Math.round(i * this._ctx.sampleRate);
            s.loadFromBuffer(t, n)
        },
        start: function(e, t) {
            if (this._state === m || this._state === g) throw new Error("Attempting to 'start' already started LoopingVocodingMixerNode");
            e = "number" == typeof e ? e: 0,
            t = "number" == typeof t ? t: 0;
            var i = this._ctx.currentTime;
            i > e && (e = i),
            this._when = e,
            this._cueTime = t,
            this._samplesProcessed = 0,
            this._loopsCompleted = 0,
            this._positionDelta = 0,
            this._currentRateStartSample = 0,
            this._state = g
        },
        stop: function() {
            this._state !== f && this._state !== v && (this._state = v)
        },
        loopOn: function(e, t) {
            var i = t >= e + l && e >= 0;
            return this._loop && (this._positionDelta -= this._loopsCompleted * (this._loopEndTime - this._loopStartTime)),
            this._loopsCompleted = 0,
            this._loop = !1,
            i && (this._loop = !0, this._loopStartTime = e, this._loopEndTime = t),
            this._loop
        },
        loopOff: function() {
            this._loop && (this._positionDelta -= this._loopsCompleted * (this._loopEndTime - this._loopStartTime)),
            this._loopsCompleted = 0,
            this._loop = !1
        },
        rate: function(e) {
            if ("number" == typeof e && e > a && r >= e) {
                var t = d(this._samplesProcessed - this._currentRateStartSample, this._sampleRate);
                this._positionDelta -= t * (1 - this._rate),
                this._currentRateStartSample = this._samplesProcessed,
                this._hop = Math.round(e * h / 4),
                this._rate = 4 * this._hop / h
            }
            return this._rate
        },
        position: function() {
            var e, t, i = this._ctx.currentTime - this._when,
            s = i + this._positionDelta;
            return this._state === f || 0 > i ? 0 : (e = i - d(this._currentRateStartSample, this._sampleRate), t = e > 0 ? s + (this._rate - 1) * e: s - e, this._loop ? this._cueTime + this._loopRolledOffset(this._cueTime, t, this._loopStartTime, this._loopEndTime) : this._cueTime + t)
        },
        muteTrack: function(e) {
            this._sources[e].muted = !0
        },
        unmuteTrack: function(e) {
            this._sources[e].muted = !1
        },
        toggleTrack: function(e) {
            this._sources[e].muted = !this._sources[e].muted
        },
        length: function() {
            var e = 0;
            return t.each(this._sources,
            function(t) {
                t.samples && (e = Math.max(e, t.samples.length / this._sampleRate))
            },
            this),
            e
        },
        _loopRolledOffset: function(e, t, i, s) {
            return s >= e + t || e > s ? t: i - e + (t - (s - e)) % (s - i)
        },
        _extractSamples: function(e, t, s) {
            for (var n = this._sampleBuffer.subarray(e), o = !0, r = 0; r < this._sources.length; r++) {
                var a = this._sources[r];
                if (!a.muted && a.samples) {
                    var l = a.samples.subarray(s, s + t);
                    o ? (n.set(l), o = !1) : i.add(l, 0, n, 0, n, 0, t)
                }
            }
            o && i.zero(n, 0, t)
        },
        _onSampleRequest: function(e) {
            var t = e.outputBuffer.getChannelData(0),
            s = p(this._cueTime, this._sampleRate),
            o = h + (u - 1) * this._hop,
            r = !0;
            switch (this._state) {
            case v:
                this._state = f;
            case f:
                return void i.zero(t, 0, n);
            case g:
                var a = this._when - e.playbackTime;
                if (! (a < d(n, this._sampleRate))) return void i.zero(t, 0, n);
                this._previousFrameSampleOffset = p( - a, this._sampleRate),
                this._firstSamplePlaybackTime = e.playbackTime,
                this._state = m;
                break;
            case m:
                r = !1
            }
            var l = s + this._previousFrameSampleOffset;
            if (r || (l += this._hop), this._loop) {
                var c = p(this._loopEndTime, this._sampleRate),
                y = p(this._loopStartTime, this._sampleRate),
                _ = c - y;
                if (0 > l) {
                    var w = c + l;
                    this._extractSamples(0, -l, w),
                    o += l,
                    this._extractSamples( - l, o, y)
                } else if (c > l && l + o >= c) {
                    var b = c - l;
                    o -= b,
                    l = y,
                    this._previousFrameSampleOffset -= _,
                    this._extractSamples(b, o, l),
                    this._loopsCompleted++
                } else this._extractSamples(0, o, l)
            } else this._extractSamples(0, o, l);
            for (var P = 0; u > P; P++) {
                var E = P * this._hop;
                i.copy(this._sampleBuffer, E, this._vocoderInput, 0, h),
                this._vocoder.process(this._vocoderInput, this._vocoderOutput, this._hop, 1 === this._rate),
                i.copy(this._vocoderOutput, 0, t, P * h / 4, h / 4)
            }
            r ? this._previousFrameSampleOffset += this._hop * (u - 1) : this._previousFrameSampleOffset += this._hop * u,
            this._samplesProcessed += h / 4 * u
        }
    }),
    y
}),
define("audio-player/AudioPlayerEx_html5", ["require", "underscore", "lib/Util", "lib/AccurateTimer", "lib/audiocontext-polyfill", "audio-player/LoopingVocodingMixerNode"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("lib/Util"),
    s = e("lib/AccurateTimer");
    e("lib/audiocontext-polyfill");
    var n = e("audio-player/LoopingVocodingMixerNode"),
    o = "https://s3.amazonaws.com/halleonard.tunessence.com/metronome_click.mp3",
    r = 2,
    a = .25,
    l = 1,
    h = 2;
    window.audioCtx = window.audioCtx || new window.AudioContext;
    var u = i.extend({
        initialize: function() {
            if (this._audioCtx = window.audioCtx, !this._audioCtx) throw new Error("WebAudio API AudioContext not supported.");
            this.ready = !1,
            this._mixer = new n(this._audioCtx),
            this._mixer.connect(this._audioCtx.destination),
            this._playing = !1,
            this._playPosition = 0,
            this._playTime = 0,
            this._loop = !1,
            this._loopStart = 0,
            this._loopEnd = 0,
            this._tracks = [],
            this._loadClick(),
            this._clickTrackTimer = new s({
                interval: 1e3 * a,
                callback: t.bind(this._scheduleClicks, this)
            }),
            this._rescheduleClicks = !1,
            this.noCountIn = !0,
            this._cuePoints = [],
            this._cuePointTimer = new s({
                interval: 20,
                callback: t.bind(this._checkCues, this)
            });
            var e = t.bind(function() {
                this.ready = !0,
                this.trigger("ready")
            },
            this);
            t.defer(e)
        },
        _loadClick: function() {
            var e = new XMLHttpRequest;
            e.open("GET", o, !0),
            e.responseType = "arraybuffer";
            var i = t.bind(function(e) {
                this._clickBuffer = e
            },
            this),
            s = function(e) {
                throw new Error("Error decoding click track audio data: " + e.err)
            };
            e.onload = t.bind(function() {
                var t = e.response;
                this._audioCtx.decodeAudioData(t, i, s)
            },
            this),
            e.send()
        },
        _scheduleClicks: function() {
            var e = this._audioCtx.currentTime,
            i = this._mixer.position(),
            s = this._mixer.rate();
            return 1e3 * i >= this.length() ? (this.trigger("done"), void this.stop()) : void t.each(this._tracks,
            function(n) {
                if (n.type === h && 0 !== n.gainNode.gain.value) {
                    for (var o = n.clickPositions,
                    a = n.sources; a.length > 0 && (a[0].stopTime < e || this._rescheduleClicks);) a[0].source.stop(),
                    a[0].source.disconnect(),
                    a.shift();
                    this._rescheduleClicks = !1;
                    var l = t.sortedIndex(o, i);
                    for (this._loop && o[l] >= this._loopEnd && (l = t.sortedIndex(o, this._loopStart), i -= this._loopEnd - this._loopStart); l < o.length && !(a.length > 0 && a[a.length - 1].stopTime - e >= r);) {
                        var u = e + (o[l] - i) / s;
                        if (a.length > 0 && a[a.length - 1].startTime >= u) l++;
                        else {
                            var c = this._audioCtx.createBufferSource();
                            c.buffer = this._clickBuffer,
                            c.connect(n.gainNode),
                            c.start(u),
                            a.push({
                                startTime: u,
                                stopTime: u + this._clickBuffer.duration,
                                source: c
                            }),
                            l++,
                            this._loop && o[l] >= this._loopEnd && (l = t.sortedIndex(o, this._loopStart), i -= this._loopEnd - this._loopStart)
                        }
                    }
                }
            },
            this)
        },
        _clearScheduledClicks: function() {
            t.each(this._tracks,
            function(e) {
                e.type === h && (t.each(e.sources,
                function(e) {
                    e.source.stop(0),
                    e.source.disconnect()
                },
                this), e.sources = [])
            },
            this)
        },
        load: function(e, i, s) {
            s = s || 0;
            var n = new XMLHttpRequest;
            n.open("GET", e, !0),
            n.responseType = "arraybuffer";
            var o = this._tracks.length,
            r = this._mixer.createTrack(),
            a = {
                type: l,
                mixerId: r
            };
            this._tracks.push(a);
            var h = t.bind(function(e) {
                this._mixer.loadBuffer(r, e, s),
                this.trigger("loadComplete", o)
            },
            this),
            u = t.bind(function(t) {
                throw this.trigger("loadError", o),
                new Error("Error decoding audio data from " + e + ": " + t.err)
            },
            this);
            n.onload = t.bind(function() {
                var e = n.response;
                this._audioCtx.decodeAudioData(e, h, u)
            },
            this);
            var c = 0;
            return n.onprogress = t.bind(function(e) {
                var t = Math.floor(100 * e.loaded / e.total);
                t > c && (c = t, this.trigger("loadProgress", o, t))
            },
            this),
            n.send(),
            o
        },
        addClickTrack: function(e, t, i) {
            var s = this._tracks.length,
            n = this._audioCtx.createGain();
            if (n.channelCountMode = "explicit", n.channelCount = 1, n.gain.value = 0, n.connect(this._audioCtx.destination), t.sort(function(e, t) {
                return e.measure - t.measure
            }), i.sort(function(e, t) {
                return e.measure - t.measure
            }), t.length < 1 || 0 !== t[0].measure) throw new Error("ClickTrack: tempo change must be present for first measure");
            if (i.length < 1 || 0 !== i[0].measure) throw new Error("ClickTrack: meter change must be present for first measure");
            for (var o, r, a = [], l = 0, u = 0; e > u; u++) {
                t.length > 0 && t[0].measure === u && (o = t[0].tempo, t.shift()),
                i.length > 0 && i[0].measure === u && (r = i[0].meter, i.shift());
                for (var c = 60 / o,
                d = 0; d < r[0]; d++) a.push(l + d * c);
                l += r[0] * c
            }
            return this._tracks.push({
                type: h,
                gainNode: n,
                clickPositions: a,
                duration: l,
                sources: []
            }),
            s
        },
        unmute: function(e) {
            var t = this._tracks[e];
            t.type === l ? this._mixer.unmuteTrack(t.mixerId) : (t.gainNode.gain.value = 1, this._playing && this._scheduleClicks())
        },
        mute: function(e) {
            var t = this._tracks[e];
            t.type === l ? this._mixer.muteTrack(t.mixerId) : t.gainNode.gain.value = 0
        },
        toggle: function(e) {
            var t = this._tracks[e];
            if (t.type === l) this._mixer.toggleTrack(t.mixerId);
            else {
                var i = t.gainNode;
                i.gain.value = 1 - i.gain.value,
                this._playing && 1 === i.gain.value && this._scheduleClicks()
            }
        },
        play: function() {
            this._playing || (this._playTime = this._audioCtx.currentTime, this._playing = !0, this._mixer.start(this._playTime, this._playPosition), this._rescheduleClicks = !1, this._scheduleClicks(), this._clickTrackTimer.start(), this._prevCheckedCuePosition = void 0, this._cuePointTimer.start())
        },
        countInPlay: function() {
            console.log("TODO: implement countInPlay")
        },
        pause: function() {
            this._playing && (this._playPosition = this._mixer.position(), this._stopAudioSources(), this._playing = !1)
        },
        stop: function() {
            this._playing && this._stopAudioSources(),
            this._playPosition = this._loop ? this._loopStart: 0,
            this._playing = !1
        },
        _stopAudioSources: function() {
            this._clickTrackTimer.reset(),
            this._cuePointTimer.reset(),
            this._mixer.stop(),
            this._clearScheduledClicks()
        },
        seek: function(e) {
            var t = this._playing;
            this.stop(),
            this._playPosition = e / 1e3,
            t && this.play()
        },
        position: function() {
            return this._playing ? 1e3 * this._mixer.position() : 1e3 * this._playPosition
        },
        length: function() {
            var e = 0;
            return t.each(this._tracks,
            function(t) {
                t.type === h && (e = Math.max(e, t.duration))
            }),
            1e3 * Math.max(e, this._mixer.length())
        },
        loopOn: function(e, t) {
            return this._loopStart = e / 1e3,
            this._loopEnd = t / 1e3,
            this._loop = this._mixer.loopOn(this._loopStart, this._loopEnd),
            this._playing && (this._rescheduleClicks = !0),
            this._loop
        },
        loopOff: function() {
            this._mixer.loopOff(),
            this._loop = !1,
            this._playing && (this._rescheduleClicks = !0)
        },
        rate: function(e) {
            return e = this._mixer.rate(e),
            this._playing && (this._rescheduleClicks = !0),
            e
        },
        addCue: function(e, t) {
            this.removeCue(t),
            this._cuePoints.push({
                time: e,
                name: String(t)
            }),
            this._cuePoints.sort(function(e, t) {
                return e.time - t.time
            })
        },
        removeCue: function(e) {
            var t = this._cuePoints,
            i = null;
            e = String(e);
            for (var s = 0; s < t.length; s++) i && (t[s - 1] = t[s]),
            t[s].name === e && (i = t[s]);
            return i ? (t.pop(), i.time) : -1
        },
        clearCues: function() {
            this._cuePoints = []
        },
        _checkCues: function() {
            var e = this._cuePoints,
            i = this.position(),
            s = this._prevCheckedCuePosition,
            n = !1;
            if ("undefined" == typeof s && (s = this._playPosition, n = !0), 0 === e.length) return void(this._prevCheckedCuePosition = i);
            var o = [];
            this._loop && s > i ? (this._cueSubset(s, this._loopEnd, n, o), this._cueSubset(this._loopStart, i, !0, o)) : this._cueSubset(s, i, n, o),
            t.each(o,
            function(e) {
                this.trigger("cuePoint", e.name, e.time)
            },
            this),
            this._prevCheckedCuePosition = i
        },
        _cueSubset: function(e, i, s, n) {
            for (var o = this._cuePoints,
            r = t.sortedIndex(o, {
                time: e - 1
            },
            "time"); r < o.length && o[r].time <= i;) {
                var a = o[r].time;
                i >= a && (a > e || s && a === e) && n.push(o[r]),
                r++
            }
        }
    });
    return u
}),
define("audio-player/AudioPlayer", ["require", "jquery", "swfobject", "ua-parser", "lib/Util", "audio-player/AudioPlayer_flash", "audio-player/AudioPlayer_html5", "audio-player/AudioPlayerEx_html5"],
function(e) {
    "use strict";
    function t() {
        try {
            return window.self !== window.top
        } catch(e) {
            return ! 0
        }
    }
    var i = e("jquery"),
    s = e("swfobject"),
    n = e("ua-parser"),
    o = e("lib/Util"),
    r = e("audio-player/AudioPlayer_flash"),
    a = e("audio-player/AudioPlayer_html5"),
    l = o.extend({
        noPlayback: !0,
        noMultiTrack: !0,
        noRateChange: !0,
        noCountIn: !0,
        noLooping: !0
    }),
    h = e("audio-player/AudioPlayerEx_html5"),
    u = (new n).getResult(),
    c = u.browser.name,
    d = u.os.name,
    p = "Windows" === d || "Mac OS" === d,
    f = t() && ("Chrome" === c || "Safari" === c),
    g = r;
    return (!s.hasFlashPlayerVersion("11.1.0") || f) && (g = window.AudioContext ? window.ScriptProcessorNode ? h: a: l, p && !f && i("#flash-install-banner").removeClass("hidden")),
    "/html5-audio-demo" === window.location.pathname && (g = h),
    g
}),
define("tab-page/constants/CursorConstants", {
    CURSOR_PADDING: 10
}),
define("tab-page/constants/CursorEvent", {
    CHANGE_Y: "changeY"
}),
function(e) {
    function t(e) {
        var t = e.length,
        s = i.type(e);
        return "function" === s || i.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === s || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e, t)
        };
        i.isWindow = function(e) {
            return null != e && e == e.window
        },
        i.type = function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object": typeof e
        },
        i.isArray = Array.isArray ||
        function(e) {
            return "array" === i.type(e)
        },
        i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(s) {
                return ! 1
            }
            for (t in e);
            return void 0 === t || o.call(e, t)
        },
        i.each = function(e, i, s) {
            var n, o = 0,
            r = e.length,
            a = t(e);
            if (s) {
                if (a) for (; r > o && (n = i.apply(e[o], s), n !== !1); o++);
                else for (o in e) if (n = i.apply(e[o], s), n === !1) break
            } else if (a) for (; r > o && (n = i.call(e[o], o, e[o]), n !== !1); o++);
            else for (o in e) if (n = i.call(e[o], o, e[o]), n === !1) break;
            return e
        },
        i.data = function(e, t, n) {
            if (void 0 === n) {
                var o = e[i.expando],
                r = o && s[o];
                if (void 0 === t) return r;
                if (r && t in r) return r[t]
            } else if (void 0 !== t) {
                var o = e[i.expando] || (e[i.expando] = ++i.uuid);
                return s[o] = s[o] || {},
                s[o][t] = n,
                n
            }
        },
        i.removeData = function(e, t) {
            var n = e[i.expando],
            o = n && s[n];
            o && i.each(t,
            function(e, t) {
                delete o[t]
            })
        },
        i.extend = function() {
            var e, t, s, n, o, r, a = arguments[0] || {},
            l = 1,
            h = arguments.length,
            u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[l] || {},
            l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === h && (a = this, l--); h > l; l++) if (null != (o = arguments[l])) for (n in o) e = a[n],
            s = o[n],
            a !== s && (u && s && (i.isPlainObject(s) || (t = i.isArray(s))) ? (t ? (t = !1, r = e && i.isArray(e) ? e: []) : r = e && i.isPlainObject(e) ? e: {},
            a[n] = i.extend(u, r, s)) : void 0 !== s && (a[n] = s));
            return a
        },
        i.queue = function(e, s, n) {
            function o(e, i) {
                var s = i || [];
                return null != e && (t(Object(e)) ? !
                function(e, t) {
                    for (var i = +t.length,
                    s = 0,
                    n = e.length; i > s;) e[n++] = t[s++];
                    if (i !== i) for (; void 0 !== t[s];) e[n++] = t[s++];
                    return e.length = n,
                    e
                } (s, "string" == typeof e ? [e] : e) : [].push.call(s, e)),
                s
            }
            if (e) {
                s = (s || "fx") + "queue";
                var r = i.data(e, s);
                return n ? (!r || i.isArray(n) ? r = i.data(e, s, o(n)) : r.push(n), r) : r || []
            }
        },
        i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e,
            function(e, s) {
                t = t || "fx";
                var n = i.queue(s, t),
                o = n.shift();
                "inprogress" === o && (o = n.shift()),
                o && ("fx" === t && n.unshift("inprogress"), o.call(s,
                function() {
                    i.dequeue(s, t)
                }))
            })
        },
        i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e,
                this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                e = e.apply(t),
                s = this.offset(),
                n = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                }: i(e).offset();
                return s.top -= parseFloat(t.style.marginTop) || 0,
                s.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: s.top - n.top,
                    left: s.left - n.left
                }
            }
        };
        var s = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var n = {},
        o = n.hasOwnProperty,
        r = n.toString,
        a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) n["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        e.Velocity = {
            Utilities: i
        }
    }
} (window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define("velocity", e) : e()
} (function() {
    return function(e, t, i, s) {
        function n(e) {
            for (var t = -1,
            i = e ? e.length: 0, s = []; ++t < i;) {
                var n = e[t];
                n && s.push(n)
            }
            return s
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]),
            e
        }
        function r(e) {
            var t = d.data(e, "velocity");
            return null === t ? s: t
        }
        function a(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, i, s, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function r(e, t) {
                return 3 * t - 6 * e
            }
            function a(e) {
                return 3 * e
            }
            function l(e, t, i) {
                return ((o(t, i) * e + r(t, i)) * e + a(t)) * e
            }
            function h(e, t, i) {
                return 3 * o(t, i) * e * e + 2 * r(t, i) * e + a(t)
            }
            function u(t, i) {
                for (var n = 0; g > n; ++n) {
                    var o = h(i, e, s);
                    if (0 === o) return i;
                    var r = l(i, e, s) - t;
                    i -= r / o
                }
                return i
            }
            function c() {
                for (var t = 0; _ > t; ++t) E[t] = l(t * w, e, s)
            }
            function d(t, i, n) {
                var o, r, a = 0;
                do r = i + (n - i) / 2,
                o = l(r, e, s) - t,
                o > 0 ? n = r: i = r;
                while (Math.abs(o) > v && ++a < y);
                return r
            }
            function p(t) {
                for (var i = 0,
                n = 1,
                o = _ - 1; n != o && E[n] <= t; ++n) i += w; --n;
                var r = (t - E[n]) / (E[n + 1] - E[n]),
                a = i + r * w,
                l = h(a, e, s);
                return l >= m ? u(t, a) : 0 == l ? a: d(t, i, i + w)
            }
            function f() {
                C = !0,
                (e != i || s != n) && c()
            }
            var g = 4,
            m = .001,
            v = 1e-7,
            y = 10,
            _ = 11,
            w = 1 / (_ - 1),
            b = "Float32Array" in t;
            if (4 !== arguments.length) return ! 1;
            for (var P = 0; 4 > P; ++P) if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return ! 1;
            e = Math.min(e, 1),
            s = Math.min(s, 1),
            e = Math.max(e, 0),
            s = Math.max(s, 0);
            var E = b ? new Float32Array(_) : new Array(_),
            C = !1,
            S = function(t) {
                return C || f(),
                e === i && s === n ? t: 0 === t ? 0 : 1 === t ? 1 : l(p(t), i, n)
            };
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                },
                {
                    x: s,
                    y: n
                }]
            };
            var A = "generateBezier(" + [e, i, s, n] + ")";
            return S.toString = function() {
                return A
            },
            S
        }
        function h(e, t) {
            var i = e;
            return g.isString(e) ? _.Easings[e] || (i = !1) : i = g.isArray(e) && 1 === e.length ? a.apply(null, e) : g.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1,
            i === !1 && (i = _.Easings[_.defaults.easing] ? _.defaults.easing: y),
            i
        }
        function u(e) {
            if (e) {
                var t = (new Date).getTime(),
                i = _.State.calls.length;
                i > 1e4 && (_.State.calls = n(_.State.calls));
                for (var o = 0; i > o; o++) if (_.State.calls[o]) {
                    var a = _.State.calls[o],
                    l = a[0],
                    h = a[2],
                    p = a[3],
                    f = !!p,
                    m = null;
                    p || (p = _.State.calls[o][3] = t - 16);
                    for (var v = Math.min((t - p) / h.duration, 1), y = 0, w = l.length; w > y; y++) {
                        var P = l[y],
                        C = P.element;
                        if (r(C)) {
                            var S = !1;
                            if (h.display !== s && null !== h.display && "none" !== h.display) {
                                if ("flex" === h.display) {
                                    var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    d.each(A,
                                    function(e, t) {
                                        b.setPropertyValue(C, "display", t)
                                    })
                                }
                                b.setPropertyValue(C, "display", h.display)
                            }
                            h.visibility !== s && "hidden" !== h.visibility && b.setPropertyValue(C, "visibility", h.visibility);
                            for (var x in P) if ("element" !== x) {
                                var T, k = P[x],
                                I = g.isString(k.easing) ? _.Easings[k.easing] : k.easing;
                                if (1 === v) T = k.endValue;
                                else {
                                    var M = k.endValue - k.startValue;
                                    if (T = k.startValue + M * I(v, h, M), !f && T === k.currentValue) continue
                                }
                                if (k.currentValue = T, "tween" === x) m = T;
                                else {
                                    if (b.Hooks.registered[x]) {
                                        var L = b.Hooks.getRoot(x),
                                        R = r(C).rootPropertyValueCache[L];
                                        R && (k.rootPropertyValue = R)
                                    }
                                    var N = b.setPropertyValue(C, x, k.currentValue + (0 === parseFloat(T) ? "": k.unitType), k.rootPropertyValue, k.scrollData);
                                    b.Hooks.registered[x] && (b.Normalizations.registered[L] ? r(C).rootPropertyValueCache[L] = b.Normalizations.registered[L]("extract", null, N[1]) : r(C).rootPropertyValueCache[L] = N[1]),
                                    "transform" === N[0] && (S = !0)
                                }
                            }
                            h.mobileHA && r(C).transformCache.translate3d === s && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", S = !0),
                            S && b.flushTransformCache(C)
                        }
                    }
                    h.display !== s && "none" !== h.display && (_.State.calls[o][2].display = !1),
                    h.visibility !== s && "hidden" !== h.visibility && (_.State.calls[o][2].visibility = !1),
                    h.progress && h.progress.call(a[1], a[1], v, Math.max(0, p + h.duration - t), p, m),
                    1 === v && c(o)
                }
            }
            _.State.isTicking && E(u)
        }
        function c(e, t) {
            if (!_.State.calls[e]) return ! 1;
            for (var i = _.State.calls[e][0], n = _.State.calls[e][1], o = _.State.calls[e][2], a = _.State.calls[e][4], l = !1, h = 0, u = i.length; u > h; h++) {
                var c = i[h].element;
                if (t || o.loop || ("none" === o.display && b.setPropertyValue(c, "display", o.display), "hidden" === o.visibility && b.setPropertyValue(c, "visibility", o.visibility)), o.loop !== !0 && (d.queue(c)[1] === s || !/\.velocityQueueEntryFlag/i.test(d.queue(c)[1])) && r(c)) {
                    r(c).isAnimating = !1,
                    r(c).rootPropertyValueCache = {};
                    var p = !1;
                    d.each(b.Lists.transforms3D,
                    function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0,
                        n = r(c).transformCache[t];
                        r(c).transformCache[t] !== s && new RegExp("^\\(" + i + "[^.]").test(n) && (p = !0, delete r(c).transformCache[t])
                    }),
                    o.mobileHA && (p = !0, delete r(c).transformCache.translate3d),
                    p && b.flushTransformCache(c),
                    b.Values.removeClass(c, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && h === u - 1) try {
                    o.complete.call(n, n)
                } catch(f) {
                    setTimeout(function() {
                        throw f
                    },
                    1)
                }
                a && o.loop !== !0 && a(n),
                r(c) && o.loop === !0 && !t && (d.each(r(c).tweensContainer,
                function(e, t) { / ^rotate / .test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), _(c, "reverse", {
                    loop: !0,
                    delay: o.delay
                })),
                o.queue !== !1 && d.dequeue(c, o.queue)
            }
            _.State.calls[e] = !1;
            for (var g = 0,
            m = _.State.calls.length; m > g; g++) if (_.State.calls[g] !== !1) {
                l = !0;
                break
            }
            l === !1 && (_.State.isTicking = !1, delete _.State.calls, _.State.calls = [])
        }
        var d, p = function() {
            if (i.documentMode) return i.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = i.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null,
                e
            }
            return s
        } (),
        f = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame ||
            function(t) {
                var i, s = (new Date).getTime();
                return i = Math.max(0, 16 - (s - e)),
                e = s + i,
                setTimeout(function() {
                    t(s + i)
                },
                i)
            }
        } (),
        g = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray ||
            function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== s && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e) return ! 1;
                return ! 0
            }
        },
        m = !1;
        if (e.fn && e.fn.jquery ? (d = e, m = !0) : d = t.Velocity.Utilities, 8 >= p && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400,
        y = "swing",
        _ = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: d,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: y,
                begin: s,
                complete: s,
                progress: s,
                display: s,
                visibility: s,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                d.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== s ? (_.State.scrollAnchor = t, _.State.scrollPropertyLeft = "pageXOffset", _.State.scrollPropertyTop = "pageYOffset") : (_.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, _.State.scrollPropertyLeft = "scrollLeft", _.State.scrollPropertyTop = "scrollTop");
        var w = function() {
            function e(e) {
                return - e.tension * e.x - e.friction * e.v
            }
            function t(t, i, s) {
                var n = {
                    x: t.x + s.dx * i,
                    v: t.v + s.dv * i,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }
            function i(i, s) {
                var n = {
                    dx: i.v,
                    dv: e(i)
                },
                o = t(i, .5 * s, n),
                r = t(i, .5 * s, o),
                a = t(i, s, r),
                l = 1 / 6 * (n.dx + 2 * (o.dx + r.dx) + a.dx),
                h = 1 / 6 * (n.dv + 2 * (o.dv + r.dv) + a.dv);
                return i.x = i.x + l * s,
                i.v = i.v + h * s,
                i
            }
            return function s(e, t, n) {
                var o, r, a, l = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                },
                h = [0],
                u = 0,
                c = 1e-4,
                d = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (u = s(e, t), r = u / n * d) : r = d;;) if (a = i(a || l, r), h.push(1 + a.x), u += 16, !(Math.abs(a.x) > c && Math.abs(a.v) > c)) break;
                return o ?
                function(e) {
                    return h[e * (h.length - 1) | 0]
                }: u
            }
        } ();
        _.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        },
        d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]],
        function(e, t) {
            _.Easings[t[0]] = l.apply(null, t[1])
        });
        var b = _.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < b.Lists.colors.length; e++) {
                        var t = "color" === b.Lists.colors[e] ? "0 0 0 1": "255 255 255 1";
                        b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var i, s, n;
                    if (p) for (i in b.Hooks.templates) {
                        s = b.Hooks.templates[i],
                        n = s[0].split(" ");
                        var o = s[1].match(b.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), b.Hooks.templates[i] = [n.join(" "), o.join(" ")])
                    }
                    for (i in b.Hooks.templates) {
                        s = b.Hooks.templates[i],
                        n = s[0].split(" ");
                        for (var e in n) {
                            var r = i + n[e],
                            a = e;
                            b.Hooks.registered[r] = [i, a]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = b.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]),
                    b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]),
                    t
                },
                extractValue: function(e, t) {
                    var i = b.Hooks.registered[e];
                    if (i) {
                        var s = i[0],
                        n = i[1];
                        return t = b.Hooks.cleanRootPropertyValue(s, t),
                        t.toString().match(b.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, i) {
                    var s = b.Hooks.registered[e];
                    if (s) {
                        var n, o, r = s[0],
                        a = s[1];
                        return i = b.Hooks.cleanRootPropertyValue(r, i),
                        n = i.toString().match(b.RegEx.valueSplit),
                        n[a] = t,
                        o = n.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var s;
                            return b.RegEx.wrappedValueAlreadyExtracted.test(i) ? s = i: (s = i.toString().match(b.RegEx.valueUnwrap), s = s ? s[1].replace(/,(\s+)?/g, " ") : i),
                            s;
                        case "inject":
                            return "rect(" + i + ")"
                        }
                    },
                    blur: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return _.State.isFirefox ? "filter": "-webkit-filter";
                        case "extract":
                            var s = parseFloat(i);
                            if (!s && 0 !== s) {
                                var n = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                s = n ? n[1] : 0
                            }
                            return s;
                        case "inject":
                            return parseFloat(i) ? "blur(" + i + ")": "none"
                        }
                    },
                    opacity: function(e, t, i) {
                        if (8 >= p) switch (e) {
                        case "name":
                            return "filter";
                        case "extract":
                            var s = i.toString().match(/alpha\(opacity=(.*)\)/i);
                            return i = s ? s[1] / 100 : 1;
                        case "inject":
                            return t.style.zoom = 1,
                            parseFloat(i) >= 1 ? "": "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (e) {
                        case "name":
                            return "opacity";
                        case "extract":
                            return i;
                        case "inject":
                            return i
                        }
                    }
                },
                register: function() {
                    9 >= p || _.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                    for (var e = 0; e < b.Lists.transformsBase.length; e++) !
                    function() {
                        var t = b.Lists.transformsBase[e];
                        b.Normalizations.registered[t] = function(e, i, n) {
                            switch (e) {
                            case "name":
                                return "transform";
                            case "extract":
                                return r(i) === s || r(i).transformCache[t] === s ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                            case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                    break;
                                case "scal":
                                case "scale":
                                    _.State.isAndroid && r(i).transformCache[t] === s && 1 > n && (n = 1),
                                    o = !/(\d)$/i.test(n);
                                    break;
                                case "skew":
                                    o = !/(deg|\d)$/i.test(n);
                                    break;
                                case "rotate":
                                    o = !/(deg|\d)$/i.test(n)
                                }
                                return o || (r(i).transformCache[t] = "(" + n + ")"),
                                r(i).transformCache[t]
                            }
                        }
                    } ();
                    for (var e = 0; e < b.Lists.colors.length; e++) !
                    function() {
                        var t = b.Lists.colors[e];
                        b.Normalizations.registered[t] = function(e, i, n) {
                            switch (e) {
                            case "name":
                                return t;
                            case "extract":
                                var o;
                                if (b.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                else {
                                    var r, a = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(n) ? r = a[n] !== s ? a[n] : a.black: b.RegEx.isHex.test(n) ? r = "rgb(" + b.Values.hexToRgb(n).join(" ") + ")": /^rgba?\(/i.test(n) || (r = a.black),
                                    o = (r || n).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                }
                                return 8 >= p || 3 !== o.split(" ").length || (o += " 1"),
                                o;
                            case "inject":
                                return 8 >= p ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"),
                                (8 >= p ? "rgb": "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    } ()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g,
                    function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || _.State.isAndroid && !_.State.isChrome) && (t += "|transform"),
                    new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (_.State.prefixMatches[e]) return [_.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, s = t.length; s > i; i++) {
                        var n;
                        if (n = 0 === i ? e: t[i] + e.replace(/^\w/,
                        function(e) {
                            return e.toUpperCase()
                        }), g.isString(_.State.prefixElement.style[n])) return _.State.prefixMatches[e] = n,
                        [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(i,
                    function(e, t, i, s) {
                        return t + t + i + i + s + s
                    }),
                    t = s.exec(e),
                    t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg": /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "": "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline": /^(li)$/i.test(t) ? "list-item": /^(tr)$/i.test(t) ? "table-row": /^(table)$/i.test(t) ? "table": /^(tbody)$/i.test(t) ? "table-row-group": "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " ": "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, i, n, o) {
                function a(e, i) {
                    function n() {
                        h && b.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= p) l = d.css(e, i);
                    else {
                        var h = !1;
                        if (/^(width|height)$/.test(i) && 0 === b.getPropertyValue(e, "display") && (h = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !o) {
                            if ("height" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(),
                                u
                            }
                            if ("width" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                return n(),
                                c
                            }
                        }
                        var f;
                        f = r(e) === s ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle: r(e).computedStyle = t.getComputedStyle(e, null),
                        "borderColor" === i && (i = "borderTopColor"),
                        l = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i],
                        ("" === l || null === l) && (l = e.style[i]),
                        n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var g = a(e, "position"); ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = d(e).position()[i] + "px")
                    }
                    return l
                }
                var l;
                if (b.Hooks.registered[i]) {
                    var h = i,
                    u = b.Hooks.getRoot(h);
                    n === s && (n = b.getPropertyValue(e, b.Names.prefixCheck(u)[0])),
                    b.Normalizations.registered[u] && (n = b.Normalizations.registered[u]("extract", e, n)),
                    l = b.Hooks.extractValue(h, n)
                } else if (b.Normalizations.registered[i]) {
                    var c, f;
                    c = b.Normalizations.registered[i]("name", e),
                    "transform" !== c && (f = a(e, b.Names.prefixCheck(c)[0]), b.Values.isCSSNullValue(f) && b.Hooks.templates[i] && (f = b.Hooks.templates[i][1])),
                    l = b.Normalizations.registered[i]("extract", e, f)
                }
                if (!/^[\d-]/.test(l)) if (r(e) && r(e).isSVG && b.Names.SVGAttribute(i)) if (/^(height|width)$/i.test(i)) try {
                    l = e.getBBox()[i]
                } catch(g) {
                    l = 0
                } else l = e.getAttribute(i);
                else l = a(e, b.Names.prefixCheck(i)[0]);
                return b.Values.isCSSNullValue(l) && (l = 0),
                _.debug >= 2 && console.log("Get " + i + ": " + l),
                l
            },
            setPropertyValue: function(e, i, s, n, o) {
                var a = i;
                if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = s: "Left" === o.direction ? t.scrollTo(s, o.alternateValue) : t.scrollTo(o.alternateValue, s);
                else if (b.Normalizations.registered[i] && "transform" === b.Normalizations.registered[i]("name", e)) b.Normalizations.registered[i]("inject", e, s),
                a = "transform",
                s = r(e).transformCache[i];
                else {
                    if (b.Hooks.registered[i]) {
                        var l = i,
                        h = b.Hooks.getRoot(i);
                        n = n || b.getPropertyValue(e, h),
                        s = b.Hooks.injectValue(l, s, n),
                        i = h
                    }
                    if (b.Normalizations.registered[i] && (s = b.Normalizations.registered[i]("inject", e, s), i = b.Normalizations.registered[i]("name", e)), a = b.Names.prefixCheck(i)[0], 8 >= p) {
                        var u = function(t, i) {
                            try {
                                e.style[t] = i
                            } catch(s) {
                                _.debug && console.log("Browser does not support [" + i + "] for [" + t + "]")
                            }
                        };
                        u(a, s)
                    } else r(e) && r(e).isSVG && b.Names.SVGAttribute(i) ? e.setAttribute(i, s) : e.style[a] = s;
                    _.debug >= 2 && console.log("Set " + i + " (" + a + "): " + s)
                }
                return [a, s]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(b.getPropertyValue(e, t))
                }
                var i = "";
                if ((p || _.State.isAndroid && !_.State.isChrome) && r(e).isSVG) {
                    var s = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    d.each(r(e).transformCache,
                    function(e) { / ^translate /i.test(e) ? e = "translate": /^scale/i.test(e) ? e = "scale": /^rotate/i.test(e) && (e = "rotate"),
                        s[e] && (i += e + "(" + s[e].join(" ") + ") ", delete s[e])
                    })
                } else {
                    var n, o;
                    d.each(r(e).transformCache,
                    function(t) {
                        return n = r(e).transformCache[t],
                        "transformPerspective" === t ? (o = n, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(i += t + n + " "))
                    }),
                    o && (i = "perspective" + o + " " + i)
                }
                b.setPropertyValue(e, "transform", i)
            }
        };
        b.Hooks.register(),
        b.Normalizations.register(),
        _.hook = function(e, t, i) {
            var n = s;
            return e = o(e),
            d.each(e,
            function(e, o) {
                if (r(o) === s && _.init(o), i === s) n === s && (n = _.CSS.getPropertyValue(o, t));
                else {
                    var a = _.CSS.setPropertyValue(o, t, i);
                    "transform" === a[0] && _.CSS.flushTransformCache(o),
                    n = a
                }
            }),
            n
        };
        var P = function() {
            function e() {
                return a ? x.promise || null: l
            }
            function n() {
                function e(e) {
                    function c(e, t) {
                        var i = s,
                        n = s,
                        r = s;
                        return g.isArray(e) ? (i = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? r = e[1] : (g.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : h(e[1], a.duration), e[2] !== s && (r = e[2]))) : i = e,
                        t || (n = n || a.easing),
                        g.isFunction(i) && (i = i.call(o, C, E)),
                        g.isFunction(r) && (r = r.call(o, C, E)),
                        [i || 0, n, r]
                    }
                    function p(e, t) {
                        var i, s;
                        return s = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/,
                        function(e) {
                            return i = e,
                            ""
                        }),
                        i || (i = b.Values.getUnitType(e)),
                        [s, i]
                    }
                    function v() {
                        var e = {
                            myParent: o.parentNode || i.body,
                            position: b.getPropertyValue(o, "position"),
                            fontSize: b.getPropertyValue(o, "fontSize")
                        },
                        s = e.position === N.lastPosition && e.myParent === N.lastParent,
                        n = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent,
                        N.lastPosition = e.position,
                        N.lastFontSize = e.fontSize;
                        var a = 100,
                        l = {};
                        if (n && s) l.emToPx = N.lastEmToPx,
                        l.percentToPxWidth = N.lastPercentToPxWidth,
                        l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var h = r(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            _.init(h),
                            e.myParent.appendChild(h),
                            d.each(["overflow", "overflowX", "overflowY"],
                            function(e, t) {
                                _.CSS.setPropertyValue(h, t, "hidden")
                            }),
                            _.CSS.setPropertyValue(h, "position", e.position),
                            _.CSS.setPropertyValue(h, "fontSize", e.fontSize),
                            _.CSS.setPropertyValue(h, "boxSizing", "content-box"),
                            d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"],
                            function(e, t) {
                                _.CSS.setPropertyValue(h, t, a + "%")
                            }),
                            _.CSS.setPropertyValue(h, "paddingLeft", a + "em"),
                            l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(h, "width", null, !0)) || 1) / a,
                            l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(h, "height", null, !0)) || 1) / a,
                            l.emToPx = N.lastEmToPx = (parseFloat(b.getPropertyValue(h, "paddingLeft")) || 1) / a,
                            e.myParent.removeChild(h)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(b.getPropertyValue(i.body, "fontSize")) || 16),
                        null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100),
                        l.remToPx = N.remToPx,
                        l.vwToPx = N.vwToPx,
                        l.vhToPx = N.vhToPx,
                        _.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o),
                        l
                    }
                    if (a.begin && 0 === C) try {
                        a.begin.call(f, f)
                    } catch(w) {
                        setTimeout(function() {
                            throw w
                        },
                        1)
                    }
                    if ("scroll" === T) {
                        var P, S, A, k = /^x$/i.test(a.axis) ? "Left": "Top",
                        I = parseFloat(a.offset) || 0;
                        a.container ? g.isWrapped(a.container) || g.isNode(a.container) ? (a.container = a.container[0] || a.container, P = a.container["scroll" + k], A = P + d(o).position()[k.toLowerCase()] + I) : a.container = null: (P = _.State.scrollAnchor[_.State["scrollProperty" + k]], S = _.State.scrollAnchor[_.State["scrollProperty" + ("Left" === k ? "Top": "Left")]], A = d(o).offset()[k.toLowerCase()] + I),
                        l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: P,
                                currentValue: P,
                                endValue: A,
                                unitType: "",
                                easing: a.easing,
                                scrollData: {
                                    container: a.container,
                                    direction: k,
                                    alternateValue: S
                                }
                            },
                            element: o
                        },
                        _.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === T) {
                        if (!r(o).tweensContainer) return void d.dequeue(o, a.queue);
                        "none" === r(o).opts.display && (r(o).opts.display = "auto"),
                        "hidden" === r(o).opts.visibility && (r(o).opts.visibility = "visible"),
                        r(o).opts.loop = !1,
                        r(o).opts.begin = null,
                        r(o).opts.complete = null,
                        y.easing || delete a.easing,
                        y.duration || delete a.duration,
                        a = d.extend({},
                        r(o).opts, a);
                        var M = d.extend(!0, {},
                        r(o).tweensContainer);
                        for (var L in M) if ("element" !== L) {
                            var R = M[L].startValue;
                            M[L].startValue = M[L].currentValue = M[L].endValue,
                            M[L].endValue = R,
                            g.isEmptyObject(y) || (M[L].easing = a.easing),
                            _.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(M[L]), o)
                        }
                        l = M
                    } else if ("start" === T) {
                        var M;
                        r(o).tweensContainer && r(o).isAnimating === !0 && (M = r(o).tweensContainer),
                        d.each(m,
                        function(e, t) {
                            if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                var i = c(t, !0),
                                n = i[0],
                                o = i[1],
                                r = i[2];
                                if (b.RegEx.isHex.test(n)) {
                                    for (var a = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(n), h = r ? b.Values.hexToRgb(r) : s, u = 0; u < a.length; u++) {
                                        var d = [l[u]];
                                        o && d.push(o),
                                        h !== s && d.push(h[u]),
                                        m[e + a[u]] = d
                                    }
                                    delete m[e]
                                }
                            }
                        });
                        for (var D in m) {
                            var j = c(m[D]),
                            V = j[0],
                            z = j[1],
                            F = j[2];
                            D = b.Names.camelCase(D);
                            var W = b.Hooks.getRoot(D),
                            B = !1;
                            if (r(o).isSVG || "tween" === W || b.Names.prefixCheck(W)[1] !== !1 || b.Normalizations.registered[W] !== s) { (a.display !== s && null !== a.display && "none" !== a.display || a.visibility !== s && "hidden" !== a.visibility) && /opacity|filter/.test(D) && !F && 0 !== V && (F = 0),
                                a._cacheValues && M && M[D] ? (F === s && (F = M[D].endValue + M[D].unitType), B = r(o).rootPropertyValueCache[W]) : b.Hooks.registered[D] ? F === s ? (B = b.getPropertyValue(o, W), F = b.getPropertyValue(o, D, B)) : B = b.Hooks.templates[W][1] : F === s && (F = b.getPropertyValue(o, D));
                                var H, $, Y, U = !1;
                                if (H = p(D, F), F = H[0], Y = H[1], H = p(D, V), V = H[0].replace(/^([+-\/*])=/,
                                function(e, t) {
                                    return U = t,
                                    ""
                                }), $ = H[1], F = parseFloat(F) || 0, V = parseFloat(V) || 0, "%" === $ && (/^(fontSize|lineHeight)$/.test(D) ? (V /= 100, $ = "em") : /^scale/.test(D) ? (V /= 100, $ = "") : /(Red|Green|Blue)$/i.test(D) && (V = V / 100 * 255, $ = "")), /[\]/.test(U)) $ = Y;
                                else if (Y !== $ && 0 !== F) if (0 === V) $ = Y;
                                else {
                                    n = n || v();
                                    var J = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x": "y";
                                    switch (Y) {
                                    case "%":
                                        F *= "x" === J ? n.percentToPxWidth: n.percentToPxHeight;
                                        break;
                                    case "px":
                                        break;
                                    default:
                                        F *= n[Y + "ToPx"]
                                    }
                                    switch ($) {
                                    case "%":
                                        F *= 1 / ("x" === J ? n.percentToPxWidth: n.percentToPxHeight);
                                        break;
                                    case "px":
                                        break;
                                    default:
                                        F *= 1 / n[$ + "ToPx"]
                                    }
                                }
                                switch (U) {
                                case "+":
                                    V = F + V;
                                    break;
                                case "-":
                                    V = F - V;
                                    break;
                                case "*":
                                    V = F * V;
                                    break;
                                case "/":
                                    V = F / V
                                }
                                l[D] = {
                                    rootPropertyValue: B,
                                    startValue: F,
                                    currentValue: F,
                                    endValue: V,
                                    unitType: $,
                                    easing: z
                                },
                                _.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), o)
                            } else _.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (b.Values.addClass(o, "velocity-animating"), O.push(l), "" === a.queue && (r(o).tweensContainer = l, r(o).opts = a), r(o).isAnimating = !0, C === E - 1 ? (_.State.calls.push([O, f, a, null, x.resolver]), _.State.isTicking === !1 && (_.State.isTicking = !0, u())) : C++)
                }
                var n, o = this,
                a = d.extend({},
                _.defaults, y),
                l = {};
                switch (r(o) === s && _.init(o), parseFloat(a.delay) && a.queue !== !1 && d.queue(o, a.queue,
                function(e) {
                    _.velocityQueueEntryFlag = !0,
                    r(o).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(a.delay)),
                        next: e
                    }
                }), a.duration.toString().toLowerCase()) {
                case "fast":
                    a.duration = 200;
                    break;
                case "normal":
                    a.duration = v;
                    break;
                case "slow":
                    a.duration = 600;
                    break;
                default:
                    a.duration = parseFloat(a.duration) || 1
                }
                _.mock !== !1 && (_.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(_.mock) || 1, a.delay *= parseFloat(_.mock) || 1)),
                a.easing = h(a.easing, a.duration),
                a.begin && !g.isFunction(a.begin) && (a.begin = null),
                a.progress && !g.isFunction(a.progress) && (a.progress = null),
                a.complete && !g.isFunction(a.complete) && (a.complete = null),
                a.display !== s && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = _.CSS.Values.getDisplayType(o))),
                a.visibility !== s && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()),
                a.mobileHA = a.mobileHA && _.State.isMobile && !_.State.isGingerbread,
                a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : d.queue(o, a.queue,
                function(t, i) {
                    return i === !0 ? (x.promise && x.resolver(f), !0) : (_.velocityQueueEntryFlag = !0, void e(t))
                }),
                "" !== a.queue && "fx" !== a.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
            }
            var a, l, p, f, m, y, w = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (a = !1, p = 0, f = this, l = this) : (a = !0, p = 1, f = w ? arguments[0].elements || arguments[0].e: arguments[0]), f = o(f)) {
                w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[p], y = arguments[p + 1]);
                var E = f.length,
                C = 0;
                if (!/^(stop|finish|finishAll)$/i.test(m) && !d.isPlainObject(y)) {
                    var S = p + 1;
                    y = {};
                    for (var A = S; A < arguments.length; A++) g.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? g.isString(arguments[A]) || g.isArray(arguments[A]) ? y.easing = arguments[A] : g.isFunction(arguments[A]) && (y.complete = arguments[A]) : y.duration = arguments[A]
                }
                var x = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                a && _.Promise && (x.promise = new _.Promise(function(e, t) {
                    x.resolver = e,
                    x.rejecter = t
                }));
                var T;
                switch (m) {
                case "scroll":
                    T = "scroll";
                    break;
                case "reverse":
                    T = "reverse";
                    break;
                case "finish":
                case "finishAll":
                case "stop":
                    d.each(f,
                    function(e, t) {
                        r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer),
                        "finishAll" !== m || y !== !0 && !g.isString(y) || (d.each(d.queue(t, g.isString(y) ? y: ""),
                        function(e, t) {
                            g.isFunction(t) && t()
                        }), d.queue(t, g.isString(y) ? y: "", []))
                    });
                    var k = [];
                    return d.each(_.State.calls,
                    function(e, t) {
                        t && d.each(t[1],
                        function(i, n) {
                            var o = y === s ? "": y;
                            return o === !0 || t[2].queue === o || y === s && t[2].queue === !1 ? void d.each(f,
                            function(i, s) {
                                s === n && ((y === !0 || g.isString(y)) && (d.each(d.queue(s, g.isString(y) ? y: ""),
                                function(e, t) {
                                    g.isFunction(t) && t(null, !0)
                                }), d.queue(s, g.isString(y) ? y: "", [])), "stop" === m ? (r(s) && r(s).tweensContainer && o !== !1 && d.each(r(s).tweensContainer,
                                function(e, t) {
                                    t.endValue = t.currentValue
                                }), k.push(e)) : ("finish" === m || "finishAll" === m) && (t[2].duration = 1))
                            }) : !0
                        })
                    }),
                    "stop" === m && (d.each(k,
                    function(e, t) {
                        c(t, !0)
                    }), x.promise && x.resolver(f)),
                    e();
                default:
                    if (!d.isPlainObject(m) || g.isEmptyObject(m)) {
                        if (g.isString(m) && _.Redirects[m]) {
                            var I = d.extend({},
                            y),
                            M = I.duration,
                            L = I.delay || 0;
                            return I.backwards === !0 && (f = d.extend(!0, [], f).reverse()),
                            d.each(f,
                            function(e, t) {
                                parseFloat(I.stagger) ? I.delay = L + parseFloat(I.stagger) * e: g.isFunction(I.stagger) && (I.delay = L + I.stagger.call(t, e, E)),
                                I.drag && (I.duration = parseFloat(M) || (/^(callout|transition)/.test(m) ? 1e3: v), I.duration = Math.max(I.duration * (I.backwards ? 1 - e / E: (e + 1) / E), .75 * I.duration, 200)),
                                _.Redirects[m].call(t, t, I || {},
                                e, E, f, x.promise ? x: s)
                            }),
                            e()
                        }
                        var R = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return x.promise ? x.rejecter(new Error(R)) : console.log(R),
                        e()
                    }
                    T = "start"
                }
                var N = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                },
                O = [];
                d.each(f,
                function(e, t) {
                    g.isNode(t) && n.call(t)
                });
                var D, I = d.extend({},
                _.defaults, y);
                if (I.loop = parseInt(I.loop), D = 2 * I.loop - 1, I.loop) for (var j = 0; D > j; j++) {
                    var V = {
                        delay: I.delay,
                        progress: I.progress
                    };
                    j === D - 1 && (V.display = I.display, V.visibility = I.visibility, V.complete = I.complete),
                    P(f, "reverse", V)
                }
                return e()
            }
        };
        _ = d.extend(P, _),
        _.animate = P;
        var E = t.requestAnimationFrame || f;
        return _.State.isMobile || i.hidden === s || i.addEventListener("visibilitychange",
        function() {
            i.hidden ? (E = function(e) {
                return setTimeout(function() {
                    e(!0)
                },
                16)
            },
            u()) : E = t.requestAnimationFrame || f
        }),
        e.Velocity = _,
        e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = _.defaults),
        d.each(["Down", "Up"],
        function(e, t) {
            _.Redirects["slide" + t] = function(e, i, n, o, r, a) {
                var l = d.extend({},
                i),
                h = l.begin,
                u = l.complete,
                c = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                },
                p = {};
                l.display === s && (l.display = "Down" === t ? "inline" === _.CSS.Values.getDisplayType(e) ? "inline-block": "block": "none"),
                l.begin = function() {
                    h && h.call(r, r);
                    for (var i in c) {
                        p[i] = e.style[i];
                        var s = _.CSS.getPropertyValue(e, i);
                        c[i] = "Down" === t ? [s, 0] : [0, s]
                    }
                    p.overflow = e.style.overflow,
                    e.style.overflow = "hidden"
                },
                l.complete = function() {
                    for (var t in p) e.style[t] = p[t];
                    u && u.call(r, r),
                    a && a.resolver(r)
                },
                _(e, c, l)
            }
        }),
        d.each(["In", "Out"],
        function(e, t) {
            _.Redirects["fade" + t] = function(e, i, n, o, r, a) {
                var l = d.extend({},
                i),
                h = {
                    opacity: "In" === t ? 1 : 0
                },
                u = l.complete;
                n !== o - 1 ? l.complete = l.begin = null: l.complete = function() {
                    u && u.call(r, r),
                    a && a.resolver(r)
                },
                l.display === s && (l.display = "In" === t ? "auto": "none"),
                _(this, h, l)
            }
        }),
        _
    } (window.jQuery || window.Zepto || window, window, document)
}),
define("tab-page/views/CursorView", ["require", "underscore", "backbone", "tab-page/constants/CursorConstants", "tab-page/constants/CursorEvent", "velocity"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("backbone"),
    s = e("tab-page/constants/CursorConstants"),
    n = e("tab-page/constants/CursorEvent");
    e("velocity");
    var o = i.View.extend({
        initialize: function(e) {
            this.$tabImg = e.$tabImg,
            this.tabHeight = e.tabHeight,
            this.tabWidth = e.tabWidth
        },
        animate: function(e, t, i, s) {
            if (t = t || 1, i = i || 0, s = s || 1, !(0 > i || i > s || s > 1)) {
                if (i === s) return void this.move(e, i);
                var n = s - i,
                o = e.duration * n / t,
                r = n * (e.visualMeasure.width / this.tabWidth * 100);
                this.move(e, i),
                this.$el.velocity({
                    left: "+=" + r + "%"
                },
                {
                    duration: o,
                    easing: "linear",
                    mobileHA: !1
                })
            }
        },
        move: function(e, i) {
            i = i || 0;
            var o = e.visualMeasure,
            r = !1,
            a = o.x + i * o.width,
            l = o.y - s.CURSOR_PADDING,
            h = a / this.tabWidth * 100,
            u = l / this.tabHeight * 100,
            c = (o.height + 2 * s.CURSOR_PADDING) / this.tabHeight * 100;
            this.$el.css("height", c + "%");
            var d = parseFloat(this.el.style.top.slice(0, -1)),
            p = .01;
            Math.abs(d - u) > p && (r = !0),
            this.$el.velocity("stop", !0).velocity({
                top: u + "%",
                left: h + "%"
            },
            {
                duration: 0,
                mobileHA: !1,
                complete: t.bind(function() {
                    r && this.trigger(n.CHANGE_Y, this.$el.offset().top)
                },
                this)
            })
        },
        show: function() {
            this.$el.removeClass("hidden")
        },
        hide: function() {
            this.$el.addClass("hidden")
        }
    });
    return o
}),
define("tab-page/constants/SelectionEvent", {
    SEEK: "seek",
    LOOP: "loop",
    SONG_CHANGE: "song-change"
}),
define("tab-page/views/TabSelectionView", ["require", "underscore", "backbone", "tab-page/constants/SelectionEvent"],
function(e) {
    "use strict";
    var t = e("underscore"),
    i = e("backbone"),
    s = e("tab-page/constants/SelectionEvent"),
    n = i.Model.extend({
        defaults: {
            loopStartMeasure: null,
            loopEndMeasure: null
        }
    }),
    o = i.View.extend({
        events: {
            "mousedown img": "_imgMouseDown",
            "mousedown .loop-bracket": "_bracketMouseDown",
            mouseup: "_mouseUp",
            touchstart: "_imgMouseDown",
            "touchstart .loop-bracket": "_bracketTouchStart",
            touchend: "_touchEnd",
            dblclick: "_dblClick",
            dragstart: "_preventImgDrag",
            contextmenu: "_preventContextMenu",
            "contextmenu .loop-bracket": "_preventContextMenu",
            "mousedown .audio-link": "_audioLinkClicked",
            "touchstart .audio-link": "_audioLinkClicked"
        },
        initialize: function(e) {
            this.state = new n,
            this.tab = e.tab,
            this.measures = this.tab.measures,
            this.tabWidth = this.tab.width,
            this.tabHeight = this.tab.height,
            this._parseMeasures(),
            this.$tabImg = this.$("img"),
            this.$loopStart = this.$("#loop-start"),
            this.$loopEnd = this.$("#loop-end"),
            this._mouseDownBracket = null,
            this._loopVisible = !1,
            t.bindAll(this, "_mousemove", "_touchmove", "_denyLoopUpdate")
        },
        hideLoop: function() {
            this.$loopStart.addClass("hidden"),
            this.$loopEnd.addClass("hidden"),
            this._loopVisible = !1
        },
        showLoop: function(e, t) {
            t = "undefined" == typeof t ? e: t,
            "undefined" != typeof e && this.state.set({
                loopStartMeasure: e,
                loopEndMeasure: t
            }),
            this.render(),
            this.$loopStart.removeClass("hidden"),
            this.$loopEnd.removeClass("hidden"),
            this._loopVisible = !0
        },
        _audioLinkClicked: function(e) {
            e.preventDefault();
            var t = this.$(e.target).data("song-index");
            this.trigger(s.SONG_CHANGE, t)
        },
        _imgMouseDown: function(e) {
            var t = "touchstart" === e.type;
            if (!t && this._touchstartHandled) return void(this._touchstartHandled = !1);
            t && (this._touchstartHandled = !0);
            var i = this._eventCoordinates(e),
            n = this._nearest(i.x, i.y);
            n.inline && this.trigger(s.SEEK, {
                measure: n.measure,
                measureIndex: n.measureIndex,
                position: n.position
            }),
            t && this._loopVisible && (this._touchstartNearest = n, this.$el.on("touchmove", this._touchmove))
        },
        _bracketMouseDown: function(e) {
            this._mouseDownBracket = e.currentTarget,
            this.$el.css("cursor", "ew-resize"),
            this.$el.on("mousemove", this._mousemove)
        },
        _bracketTouchStart: function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            this._mouseDownBracket = e.currentTarget,
            this.$el.on("touchmove", this._mousemove)
        },
        _mousemove: function(e) {
            var i = "touchmove" === e.type;
            if (i) e.preventDefault(),
            e.stopPropagation();
            else if (!this._mouseDownBracket || 0 === e.which) return void this._mouseUp();
            var n = this.state.toJSON(),
            o = this._eventCoordinates(e),
            r = this._nearest(o.x, o.y),
            a = r.measureIndex,
            l = t.indexOf(this.measures, n.loopStartMeasure),
            h = t.indexOf(this.measures, n.loopEndMeasure);
            this._cancelLoop = !1,
            this._mouseDownBracket === this.$loopStart[0] && h >= a ? r.measure !== n.loopStartMeasure && r.measure !== this._cancelledLoopMeasure && (this.trigger(s.LOOP, {
                measure: r.measure,
                position: r.position
            },
            {
                measure: n.loopEndMeasure,
                position: 1
            },
            this._denyLoopUpdate), this._cancelLoop ? this._cancelledLoopMeasure = r.measure: (this.state.set("loopStartMeasure", r.measure), this.render())) : this._mouseDownBracket === this.$loopEnd[0] && a >= l && r.measure !== n.loopEndMeasure && r.measure !== this._cancelledLoopMeasure && (this.trigger(s.LOOP, {
                measure: n.loopStartMeasure,
                position: 0
            },
            {
                measure: r.measure,
                position: r.position
            },
            this._denyLoopUpdate), this._cancelLoop ? this._cancelledLoopMeasure = r.measure: (this.state.set("loopEndMeasure", r.measure), this.render()))
        },
        _touchmove: function(e) {
            if (this._loopVisible) {
                e.preventDefault();
                var t = this._eventCoordinates(e),
                i = this._nearest(t.x, t.y);
                if (i.measure !== this._touchstartNearest.measure && i.measure !== this._cancelledLoopMeasure) {
                    var n = this.state.toJSON(),
                    o = i,
                    r = this._touchstartNearest;
                    o.measureIndex > r.measureIndex && (o = r, r = i),
                    (n.loopStartMeasure !== o.measure || n.loopEndMeasure !== r.measure) && (this.trigger(s.LOOP, {
                        measure: o.measure,
                        position: 0
                    },
                    {
                        measure: r.measure,
                        position: 1
                    },
                    this._denyLoopUpdate), this._cancelLoop ? this._cancelledLoopMeasure = i.measure: (this.state.set({
                        loopStartMeasure: o.measure,
                        loopEndMeasure: r.measure
                    }), this.render()), this._cancelLoop = !1)
                }
            }
        },
        _denyLoopUpdate: function() {
            this._cancelLoop = !0
        },
        _mouseUp: function() {
            this.$el.off("mousemove", this._mousemove),
            this.$el.css("cursor", "default"),
            this._mouseDownBracket = null
        },
        _touchEnd: function() {
            this.$el.off("touchmove", this._touchmove),
            this.$el.off("touchmove", this._mousemove),
            this._touchstartNearest = null
        },
        _dblClick: function(e) {
            e.preventDefault()
        },
        _preventImgDrag: function(e) {
            e.preventDefault()
        },
        _preventContextMenu: function(e) {
            return e.preventDefault(),
            !1
        },
        _eventCoordinates: function(e) {
            if ("touchstart" === e.type || "touchmove" === e.type) {
                var t = e.originalEvent.touches[0];
                e.pageX = t.pageX,
                e.pageY = t.pageY
            }
            var i = e.pageX - this.$el.offset().left - this.$tabImg.position().left,
            s = e.pageY - this.$el.offset().top - this.$tabImg.position().top;
            return {
                x: i,
                y: s
            }
        },
        _nearest: function(e, t) {
            var i, s, n, o, r, a, l, h, u;
            for (e = e * this.tabWidth / this.$tabImg.width(), t = t * this.tabHeight / this.$tabImg.height(), r = 1 / 0, i = 0; i < this.lines.length; i++) s = this.lines[i],
            o = Math.abs((s.top + s.bottom) / 2 - t),
            r > o && (r = o, h = i, a = s);
            var c = !0;
            for ((a.top > t || a.bottom < t) && (c = !1), r = 1 / 0, i = 0; i < a.measures.length; i++) n = a.measures[i],
            o = n.x < e && e < n.x + n.width ? 0 : e <= n.x ? n.x - e: e - n.x - n.width,
            r > o && (r = o, u = i, l = n);
            var d = u;
            for (i = 0; h > i; i++) s = this.lines[i],
            d += s.measures.length;
            var p = (e - l.x) / l.width;
            return p = Math.max(0, Math.min(1, p)),
            {
                measure: l,
                measureIndex: d,
                position: p,
                inline: c
            }
        },
        _parseMeasures: function() {
            this.lines = [],
            t.each(this.measures,
            function(e) {
                var i = t.find(this.lines,
                function(t) {
                    return t.top === e.y
                });
                i ? i.measures.push(e) : this.lines.push({
                    top: e.y,
                    bottom: e.y + e.height,
                    measures: [e]
                })
            },
            this)
        },
        render: function() {
            var e = this.state.toJSON(),
            t = e.loopStartMeasure,
            i = e.loopEndMeasure,
            s = this.$loopStart.outerWidth() / this.tabWidth * 100,
            n = 20,
            o = (t.y - n / 2) / this.tabHeight * 100,
            r = t.x / this.tabWidth * 100 - s,
            a = (i.y - n / 2) / this.tabHeight * 100,
            l = (i.x + i.width) / this.tabWidth * 100;
            this.$loopStart.css({
                top: o + "%",
                left: r + "%",
                height: (t.height + n) / this.tabHeight * 100 + "%"
            }),
            this.$loopEnd.css({
                top: a + "%",
                left: l + "%",
                height: (i.height + n) / this.tabHeight * 100 + "%"
            })
        }
    });
    return o
}),
define("tab-page/constants/TabAppConstants", {
    SCROLL_TOP_MARGIN: 60,
    SCROLL_TOP_ANIMATION_TIME: 400
}),
define("tab-page/constants/PlayMode", {
    GUITAR_MODE: "guitarMode",
    BAND_MODE: "bandMode",
    CLICK_MODE: "clickMode"
}),
define("tab-page/views/TabModeView", ["require", "jquery", "underscore", "backbone", "modernizr", "bootstrap", "jquery-ui-custom", "jquery-touch-punch", "audio-player/AudioPlayer", "tab-page/views/CursorView", "tab-page/views/TabSelectionView", "tab-page/constants/TabAppConstants", "tab-page/constants/CursorEvent", "tab-page/constants/SelectionEvent", "tab-page/constants/PlayMode"],
function(e) {
    "use strict";
    var t = e("jquery"),
    i = e("underscore"),
    s = e("backbone"),
    n = e("modernizr");
    e("bootstrap"),
    e("jquery-ui-custom"),
    e("jquery-touch-punch");
    var o = e("audio-player/AudioPlayer"),
    r = e("tab-page/views/CursorView"),
    a = e("tab-page/views/TabSelectionView"),
    l = e("tab-page/constants/TabAppConstants"),
    h = e("tab-page/constants/CursorEvent"),
    u = e("tab-page/constants/SelectionEvent"),
    c = e("tab-page/constants/PlayMode"),
    d = "playCue",
    p = "previewStopCue",
    f = s.Model.extend({
        defaults: {
            songIndex: 0,
            previewTrackEnabled: !1,
            bandTrackEnabled: !1,
            clickTrackEnabled: !1,
            countIn: !1,
            playing: !1,
            loop: !1
        }
    }),
    g = s.View.extend({
        events: {
            "click      #mode-group button": "_clickToggleTrack",
            "touchstart #mode-group button": "_clickToggleTrack",
            "click      #play": "_clickPlay",
            "touchend   #play": "_clickPlay",
            "click      #stop": "_stop",
            "touchstart #stop": "_stop",
            "click      #count-in": "_clickCountIn",
            "touchstart #count-in": "_clickCountIn",
            "click      #loop": "_clickLoop",
            "touchstart #loop": "_clickLoop"
        },
        keyboardEvents: {
            space: "_clickPlay"
        },
        initialize: function(e) {
            window.tab = this,
            this.state = new f,
            this.tab = e.tab,
            this.tabWidth = this.tab.width,
            this.$tabArea = e.$tabArea,
            this.$tabImg = this.$tabArea.find("img"),
            this.$loadingBar = e.$loadingBar,
            this.$controlBar = t("#control-bar-container"),
            this.$body = t("html,body");
            var s = this._parseTabData(this.tab);
            return this.visualMeasureToSongIndex = s.measureToSongIndex,
            this.unrolledMeasuresBySong = s.unrolledMeasuresBySong,
            this.visualMeasures = this.tab.measures,
            this.$("#rate-slider").slider({
                max: 1,
                min: .25,
                step: .01,
                value: 1,
                slide: i.bind(this._rateSliderChange, this),
                disabled: !0
            }),
            this.$tabArea.css("max-width", this.tab.width),
            this.$("button").mouseleave(function() {
                t(this).blur()
            }),
            n.touch || this.$('[data-toggle="tooltip"]').tooltip(),
            this._initAudioPlayers(),
            this._disableUnsupportedAudioFeatures(),
            this.audioPlayers[0].noPlayback ? void this.listenTo(this.state, "change", this.render) : (this.cursor = new r({
                el: this.$tabArea.find("#cursor"),
                $tabImg: this.$tabArea.find("img"),
                tabWidth: this.tab.width,
                tabHeight: this.tab.height
            }), this.cursor.move(this.unrolledMeasuresBySong[0][0]), this._changeSong(0), this.selectionView = new a({
                el: this.$tabArea,
                tab: this.tab
            }), this.listenTo(this.cursor, h.CHANGE_Y, this._onCursorChangeY), this.listenTo(this.selectionView, u.SEEK, this._tabClickSeekHandler), this.listenTo(this.selectionView, u.LOOP, this._tabClickLoopHandler), this.listenTo(this.selectionView, u.SONG_CHANGE, this._songChangeHandler), void this.listenTo(this.state, "change", this.render))
        },
        open: function() {
            this.cursor && this.cursor.show(),
            this.delegateEvents(),
            this.state.get("loop") && this.selectionView.showLoop()
        },
        close: function() {
            this.audioPlayers[0].noPlayback || this._pause(),
            this.cursor && this.cursor.hide(),
            this.selectionView && this.selectionView.hideLoop(),
            this.undelegateEvents()
        },
        isPlaying: function() {
            return this.state.get("playing")
        },
        _onCursorChangeY: function(e) {
            if (!this.state.get("loop")) {
                var t = this.$tabImg.width() / this.tabWidth,
                i = e - this.$controlBar.height() - l.SCROLL_TOP_MARGIN * t;
                this.$body.velocity("stop", !0).velocity("scroll", {
                    offset: i + "px",
                    duration: l.SCROLL_TOP_ANIMATION_TIME,
                    mobileHA: !1
                })
            }
        },
        _clickToggleTrack: function(e) {
            e.preventDefault();
            var t, s = e.currentTarget.name,
            n = this.state.get("songIndex"),
            o = i.isNumber(this.previewTrackIdBySong[n]),
            r = i.isNumber(this.bandTrackIdBySong[n]),
            a = i.isNumber(this.clickTrackIdBySong[n]);
            o && s === c.GUITAR_MODE ? (t = !this.state.get("previewTrackEnabled"), this.state.set("previewTrackEnabled", t), this.audioPlayer.toggle(this.previewTrackIdBySong[n])) : r && s === c.BAND_MODE ? (t = !this.state.get("bandTrackEnabled"), this.state.set("bandTrackEnabled", t), this.audioPlayer.toggle(this.bandTrackIdBySong[n])) : a && s === c.CLICK_MODE && (t = !this.state.get("clickTrackEnabled"), this.state.set("clickTrackEnabled", t), this.audioPlayer.toggle(this.clickTrackIdBySong[n]))
        },
        _clickPlay: function(e) {
            e.preventDefault();
            var t = this.state.get("songIndex"),
            s = i.isNumber(this.previewTrackIdBySong[t]),
            n = i.isNumber(this.bandTrackIdBySong[t]),
            o = this.previewTrackDownloadProgress[t],
            r = this.bandTrackDownloadProgress[t];
            s && 100 > o || n && 100 > r || (this.state.get("playing") ? this._pause() : this._play())
        },
        _stop: function(e) {
            e && e.preventDefault(),
            this.audioPlayer.stop(),
            this.state.set("playing", !1);
            var t = this._currentPosition();
            this.cursor.move(t.measure, t.positionInMeasure)
        },
        _clickCountIn: function(e) {
            e.preventDefault(),
            this.state.set("countIn", !t(e.currentTarget).hasClass("active"))
        },
        _clickLoop: function(e) {
            e.preventDefault();
            var i = !t(e.currentTarget).hasClass("active");
            if (i) {
                var s = this._currentPosition().visualMeasure;
                this.selectionView.showLoop(s),
                this._setLoop(s, s, !0)
            } else this.selectionView.hideLoop(),
            this._clearLoop()
        },
        _rateSliderChange: function(e, t) {
            var i = t.value,
            s = this._currentPosition();
            this.audioPlayer.rate(i),
            this.$("#rate span").text(Math.round(100 * i) + "%"),
            i = this.audioPlayer.rate(),
            this.state.get("playing") && this.cursor.animate(s.measure, i, s.positionInMeasure),
            this.trigger("change:rate", i)
        },
        _play: function() {
            var e = this._currentPosition();
            if (this.audioPlayer.addCue(Math.ceil(e.millis) + 1, d), this.state.get("countIn") && !this.state.get("playing")) {
                var t = e.millis - e.measure.duration * e.positionInMeasure,
                i = e.measure.meter,
                s = this.audioPlayer.rate() * e.measure.tempo;
                this._seek(t),
                this.audioPlayer.countInPlay(i[0], s)
            } else this.audioPlayer.play();
            this.state.set("playing", !0)
        },
        _pause: function() {
            if (!this.state.get("playing")) return ! 0;
            this.audioPlayer.pause(),
            this.state.set("playing", !1);
            var e = this._currentPosition();
            return this.cursor.move(e.measure, e.positionInMeasure),
            !0
        },
        _seek: function(e) {
            var t = this._position(e);
            this.cursor.move(t.measure, t.positionInMeasure),
            this.audioPlayer.addCue(Math.ceil(t.millis + 1), d),
            this.audioPlayer.seek(t.millis),
            this.state.get("countIn") && this.state.get("playing") && (this.audioPlayer.pause(), this.audioPlayer.play())
        },
        _tabClickSeekHandler: function(e) {
            var t = e.measure,
            s = e.measureIndex,
            n = e.position,
            o = this.visualMeasureToSongIndex[s];
            if (o !== this.state.get("songIndex") && this._changeSong(o), this.state.get("loop")) this.selectionView.showLoop(t),
            this._setLoop(t, t, !0);
            else {
                var r = i.find(this.unrolledMeasures,
                function(e) {
                    return e.visualMeasure === t
                });
                this._seek(r.onset + r.duration * n)
            }
        },
        _tabClickLoopHandler: function(e, t, i) {
            this.state.get("loop") && (this._setLoop(e.measure, t.measure) || i())
        },
        _songChangeHandler: function(e) {
            this._changeSong(e),
            this._stop(),
            this._play()
        },
        _setLoop: function(e, t, s) {
            var n = i.indexOf(this.visualMeasures, e),
            o = i.indexOf(this.visualMeasures, t, n),
            r = this.state.get("songIndex");
            if (this.visualMeasureToSongIndex[n] !== r || this.visualMeasureToSongIndex[o] !== r) return ! 1;
            var a, l, h = this.tab.songs[r].measureOrder,
            u = i.indexOf(h, n),
            c = -1,
            d = [];
            if (0 > u) return ! 1;
            for (a = u; a < h.length; a++) {
                if (l = h[a], l === o && (c = a), a === h.length - 1 && c >= u) {
                    d.push([u, c]);
                    break
                }
                if (n > l || l > o) {
                    if (c >= u && d.push([u, c]), u = i.indexOf(h, n, a), u > 0) {
                        a = u - 1;
                        continue
                    }
                    break
                }
            }
            if (0 === d.length) return ! 1;
            var p, f, g, m, v, y, _ = this._currentPosition(),
            w = 0;
            for (a = 0; a < d.length; a++) {
                if (v = d[a], y = v[1] - v[0] + 1, p = this.unrolledMeasures[v[0]], f = this.unrolledMeasures[v[1]], _.millis >= p.onset && _.millis < f.onset + f.duration) {
                    g = p,
                    m = f;
                    break
                }
                y > w && (w = y, g = p, m = f)
            }
            var b = g.onset,
            P = m.onset + m.duration;
            return (P < _.millis || b > _.millis || s) && this._seek(b),
            this.audioPlayer.loopOn(b, P),
            this.state.set("loop", !0),
            !0
        },
        _clearLoop: function() {
            this.audioPlayer.loopOff(),
            this.state.set("loop", !1)
        },
        _onAudioPlayerDone: function() {
            this._stop()
        },
        _onAudioPlayerCue: function(e, t) {
            switch (e) {
            case d:
                this.audioPlayer.removeCue(d);
                var i = this._position(t);
                this.cursor.animate(i.measure, this.audioPlayer.rate(), i.positionInMeasure);
                break;
            case p:
                this._stop();
                break;
            default:
                var s = e,
                n = this.unrolledMeasures[s];
                this.cursor.animate(n, this.audioPlayer.rate())
            }
        },
        _changeSong: function(e) {
            if (!this.audioPlayers[e].ready) return void this.listenToOnce(this.audioPlayers[e], "ready", i.partial(this._changeSong, e));
            this.state.get("playing") && this.audioPlayer.stop(),
            this.unrolledMeasures = this.unrolledMeasuresBySong[e],
            this.audioPlayer = this.audioPlayers[e];
            var t = this.previewTrackIdBySong[e],
            s = this.bandTrackIdBySong[e],
            n = i.isNumber(t),
            o = i.isNumber(s);
            n && this.audioPlayer.unmute(t),
            o && this.audioPlayer.unmute(s),
            this.state.set({
                songIndex: e,
                previewTrackEnabled: n,
                bandTrackEnabled: o,
                clickTrackEnabled: !1,
                playing: !1
            }),
            this.audioPlayer.rate(1),
            this.$("#rate-slider").slider("option", "value", 1),
            this.$("#rate span").text("100%");
            var r = this.tab.songs[e].trackNameOverrides || ["Guitar", "Band"];
            this.$('[name="guitarMode"]').text(r[0] || "Guitar"),
            this.$('[name="bandMode"]').text(r[1] || "Band"),
            this.$('[name="guitarMode"]').attr("data-original-title", (r[0] || "Guitar") + " Track"),
            this.$('[name="bandMode"]').attr("data-original-title", (r[1] || "Band") + " Track")
        },
        _disableUnsupportedAudioFeatures: function() {
            this.audioPlayers[0].noRateChange && this.$("#rate").hide(),
            this.audioPlayers[0].noCountIn && this.$("#count-in").hide(),
            this.audioPlayers[0].noLooping && this.$("#loop").hide(),
            this.audioPlayers[0].noMultiTrack && this.$("#mode-group").hide(),
            this.audioPlayers[0].noPlayback && (this.$("#play").hide(), this.$("#stop").hide(), this.$el.prepend('<h5 class="text-center">Audio playback disabled. This browser does not support Web Audio.</h5><h5 class="text-center"> Try a different browser or install flash to enable audio playback.</h5>'))
        },
        _initAudioPlayers: function() {
            this.previewTrackIdBySong = [],
            this.bandTrackIdBySong = [],
            this.clickTrackIdBySong = [],
            this.previewTrackDownloadProgress = [],
            this.bandTrackDownloadProgress = [],
            this.audioPlayers = [],
            i.each(this.tab.songs,
            function(e, t) {
                var s = new o;
                this.audioPlayers[t] = s,
                this.listenToOnce(s, "ready", i.partial(this._finishAudioPlayerInit, t)),
                window.ap = s
            },
            this)
        },
        _finishAudioPlayerInit: function(e) {
            var t = this.audioPlayers[e],
            s = this.tab.songs[e],
            n = s.previewTrackUrl,
            o = s.bandTrackUrl,
            r = function(e, t, i) {
                var s = this.state.get("songIndex"),
                n = this.previewTrackIdBySong[e],
                o = this.bandTrackIdBySong[e];
                t === n ? this.previewTrackDownloadProgress[e] = i: t === o && (this.bandTrackDownloadProgress[e] = i),
                e === s && this.render()
            },
            a = function(e, t) {
                throw new Error("Failed to load track " + t + " for song " + e)
            },
            l = function(t, i) {
                r.call(this, e, i, "complete")
            },
            h = function() {
                this.trigger("garble")
            };
            this.listenTo(t, "loadProgress", i.partial(r, e)),
            this.listenTo(t, "loadError", i.partial(a, e)),
            this.listenTo(t, "loadComplete", i.partial(l, e)),
            this.listenTo(t, "garble", h),
            this.listenTo(t, "done", this._onAudioPlayerDone),
            this.listenTo(t, "cuePoint", this._onAudioPlayerCue);
            var u;
            o && (u = t.load(s.bandTrackUrl, "mp3", s.startTime), this.bandTrackIdBySong[e] = u, t.unmute(u)),
            n && (u = t.load(s.previewTrackUrl, "mp3", s.startTime), this.previewTrackIdBySong[e] = u, t.unmute(u));
            var c = this.unrolledMeasuresBySong[e];
            if (s.clickTrackEnabled) {
                var d = s.measureOrder.length,
                f = c[0].meter,
                g = [{
                    measure: 0,
                    meter: f
                }];
                i.each(c,
                function(e, t) { (e.meter[0] !== f[0] || e.meter[1] !== f[1]) && (f = e.meter, g.push({
                        measure: t,
                        meter: f
                    }))
                }),
                u = t.addClickTrack(d, s.tempoChanges, g),
                this.clickTrackIdBySong[e] = u
            }
            i.each(c,
            function(e, i) {
                t.addCue(e.onset, i)
            },
            this),
            s.stopTime && t.addCue(1e3 * (s.stopTime - s.startTime), p)
        },
        _parseTabData: function(e) {
            var t = {},
            s = [];
            if (i.each(e.songs,
            function(e, s) {
                i.each(i.unique(e.measureOrder),
                function(e) {
                    if (i.isNumber(t[e])) throw new Error("Lesson malformed - visual measures correspond to mulitple songs");
                    t[e] = s
                })
            }), t.length < e.measures.length || i.contains(t, void 0)) throw new Error("Lesson malformed - not all visual measures in a song");
            i.each(e.meterChanges,
            function(t) {
                e.measures[t.measure].meter = t.meter
            });
            var n;
            return i.each(e.measures,
            function(e) {
                e.meter ? n = e.meter: e.meter = n
            }),
            i.each(e.songs,
            function(t) {
                var n = [];
                i.each(t.measureOrder,
                function(t) {
                    n.push({
                        visualMeasure: e.measures[t]
                    })
                }),
                i.each(t.tempoChanges,
                function(e) {
                    n[e.measure].tempo = e.tempo
                });
                var o, r = 0;
                i.each(n,
                function(e) {
                    e.meter = e.visualMeasure.meter,
                    i.isNumber(e.tempo) ? o = e.tempo: e.tempo = o,
                    e.onset = r,
                    e.duration = 1e3 * e.meter[0] / (o / 60),
                    r += e.duration
                }),
                s.push(n)
            },
            this),
            {
                measureToSongIndex: t,
                unrolledMeasuresBySong: s
            }
        },
        _currentPosition: function() {
            return this._position(this.audioPlayer.position())
        },
        _position: function(e) {
            var t, i = this.unrolledMeasures.length - 1,
            s = this.unrolledMeasures[i];
            if (e >= s.onset + s.duration) return {
                measure: s,
                visualMeasure: s.visualMeasure,
                index: i,
                positionInMeasure: 1,
                millis: e
            };
            for (var n = 0; n < this.unrolledMeasures.length; n++) if (t = this.unrolledMeasures[n], e >= t.onset && e < t.onset + t.duration) return {
                measure: t,
                visualMeasure: t.visualMeasure,
                index: n,
                positionInMeasure: (e - t.onset) / t.duration,
                millis: e
            }
        },
        renderToolbar: function() {
            var e = this.state.toJSON(),
            t = this.state.get("songIndex"),
            s = this.previewTrackIdBySong[t],
            n = this.bandTrackIdBySong[t];
            this._$previewTrackBtn = this._$previewTrackBtn || this.$('button[name="' + c.GUITAR_MODE + '"]'),
            this._$bandTrackBtn = this._$bandTrackBtn || this.$('button[name="' + c.BAND_MODE + '"]'),
            this._$clickTrackBtn = this._$clickTrackBtn || this.$('button[name="' + c.CLICK_MODE + '"]');
            var o, r = 0,
            a = 0,
            l = i.isNumber(s),
            h = i.isNumber(n),
            u = !1,
            d = !1;
            l && (o = this.previewTrackDownloadProgress[t], "complete" === o && (u = !0, o = 100), r += o, a++),
            h && (o = this.bandTrackDownloadProgress[t], "complete" === o && (d = !0, o = 100), r += o, a++),
            r /= a,
            l && !u || h && !d ? (this.$loadingBar.removeClass("complete"), this.$("button").not(".btn-lesson-mode").addClass("disabled"), this.$("#rate").addClass("disabled"), this.$("#rate-slider").slider("disable"), i.isFinite(r) ? this.$loadingBar.css("width", r + "%") : this.$loadingBar.css("width", "0%"), this._$previewTrackBtn.addClass("disabled"), this._$bandTrackBtn.addClass("disabled"), this._$clickTrackBtn.addClass("disabled")) : (this.$loadingBar.addClass("complete"), this.$("button").removeClass("disabled"), this.$("#rate").removeClass("disabled"), this.$("#rate-slider").slider("enable"), this._$previewTrackBtn.removeClass("disabled"), this._$bandTrackBtn.removeClass("disabled"), this._$clickTrackBtn.removeClass("disabled"));
            var p;
            return e.playing ? (this.$("#play").html("<i></i> Pause"), p = this.$("#play i"), p.removeClass("fa-play"), p.addClass("fa fa-pause")) : (this.$("#play").html("<i></i> Play"), p = this.$("#play i"), p.removeClass("fa-pause"), p.addClass("fa fa-play")),
            e.countIn ? this.$("#count-in").addClass("active") : this.$("#count-in").removeClass("active"),
            e.loop ? this.$("#loop").addClass("active") : this.$("#loop").removeClass("active"),
            this._$previewTrackBtn.detach(),
            this._$bandTrackBtn.detach(),
            this._$clickTrackBtn.detach(),
            l && this.$("#mode-group").append(this._$previewTrackBtn),
            h && this.$("#mode-group").append(this._$bandTrackBtn),
            this.tab.songs[t].clickTrackEnabled && this.$("#mode-group").append(this._$clickTrackBtn),
            this.$("#mode-group button").removeClass("active"),
            e.previewTrackEnabled && this.$('button[name="' + c.GUITAR_MODE + '"]').addClass("active"),
            e.bandTrackEnabled && this.$('button[name="' + c.BAND_MODE + '"]').addClass("active"),
            e.clickTrackEnabled && this.$('button[name="' + c.CLICK_MODE + '"]').addClass("active"),
            this
        },
        render: function() {
            return this.renderToolbar(),
            this
        }
    });
    return g
}),
"undefined" == typeof jwplayer && (jwplayer = function() {
    return jwplayer.api ? jwplayer.api.selectPlayer.apply(this, arguments) : void 0
},
jwplayer.version = "6.12.4950", jwplayer.vid = document.createElement("video"), jwplayer.audio = document.createElement("audio"), jwplayer.source = document.createElement("source"),
function() {
    var e = {},
    t = Array.prototype,
    i = Object.prototype,
    s = t.slice,
    n = t.concat,
    o = i.toString,
    r = i.hasOwnProperty,
    a = t.map,
    l = t.forEach,
    h = t.filter,
    u = t.every,
    c = t.some,
    d = t.indexOf,
    i = Array.isArray,
    p = Object.keys,
    f = function(e) {
        return e instanceof f ? e: this instanceof f ? void 0 : new f(e)
    },
    g = f.each = f.forEach = function(t, i, s) {
        if (null == t) return t;
        if (l && t.forEach === l) t.forEach(i, s);
        else if (t.length === +t.length) {
            for (var n = 0,
            o = t.length; o > n; n++) if (i.call(s, t[n], n, t) === e) return
        } else for (var r = f.keys(t), n = 0, o = r.length; o > n; n++) if (i.call(s, t[r[n]], r[n], t) === e) return;
        return t
    };
    f.map = f.collect = function(e, t, i) {
        var s = [];
        return null == e ? s: a && e.map === a ? e.map(t, i) : (g(e,
        function(e, n, o) {
            s.push(t.call(i, e, n, o))
        }), s)
    },
    f.find = f.detect = function(e, t, i) {
        var s;
        return m(e,
        function(e, n, o) {
            return t.call(i, e, n, o) ? (s = e, !0) : void 0
        }),
        s
    },
    f.filter = f.select = function(e, t, i) {
        var s = [];
        return null == e ? s: h && e.filter === h ? e.filter(t, i) : (g(e,
        function(e, n, o) {
            t.call(i, e, n, o) && s.push(e)
        }), s)
    },
    f.every = f.all = function(t, i, s) {
        i || (i = f.identity);
        var n = !0;
        return null == t ? n: u && t.every === u ? t.every(i, s) : (g(t,
        function(t, o, r) {
            return (n = n && i.call(s, t, o, r)) ? void 0 : e
        }), !!n)
    };
    var m = f.some = f.any = function(t, i, s) {
        i || (i = f.identity);
        var n = !1;
        return null == t ? n: c && t.some === c ? t.some(i, s) : (g(t,
        function(t, o, r) {
            return n || (n = i.call(s, t, o, r)) ? e: void 0
        }), !!n)
    };
    f.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length: f.keys(e).length
    },
    f.after = function(e, t) {
        return function() {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    },
    f.sortedIndex = function(e, t, i, s) {
        i = null == i ? f.identity: f.isFunction(i) ? i: f.property(i),
        t = i.call(s, t);
        for (var n = 0,
        o = e.length; o > n;) {
            var r = n + o >>> 1;
            i.call(s, e[r]) < t ? n = r + 1 : o = r
        }
        return n
    },
    f.find = f.detect = function(e, t, i) {
        var s;
        return m(e,
        function(e, n, o) {
            return t.call(i, e, n, o) ? (s = e, !0) : void 0
        }),
        s
    },
    m = f.some = f.any = function(t, i, s) {
        i || (i = f.identity);
        var n = !1;
        return null == t ? n: c && t.some === c ? t.some(i, s) : (g(t,
        function(t, o, r) {
            return n || (n = i.call(s, t, o, r)) ? e: void 0
        }), !!n)
    },
    f.contains = f.include = function(e, t) {
        return null == e ? !1 : (e.length !== +e.length && (e = f.values(e)), 0 <= f.indexOf(e, t))
    },
    f.where = function(e, t) {
        return f.filter(e, f.matches(t))
    },
    f.difference = function(e) {
        var i = n.apply(t, s.call(arguments, 1));
        return f.filter(e,
        function(e) {
            return ! f.contains(i, e)
        })
    },
    f.without = function(e) {
        return f.difference(e, s.call(arguments, 1))
    },
    f.indexOf = function(e, t, i) {
        if (null == e) return - 1;
        var s = 0,
        n = e.length;
        if (i) {
            if ("number" != typeof i) return s = f.sortedIndex(e, t),
            e[s] === t ? s: -1;
            s = 0 > i ? Math.max(0, n + i) : i
        }
        if (d && e.indexOf === d) return e.indexOf(t, i);
        for (; n > s; s++) if (e[s] === t) return s;
        return - 1
    },
    f.partial = function(e) {
        var t = s.call(arguments, 1);
        return function() {
            for (var i = 0,
            s = t.slice(), n = 0, o = s.length; o > n; n++) s[n] === f && (s[n] = arguments[i++]);
            for (; i < arguments.length;) s.push(arguments[i++]);
            return e.apply(this, s)
        }
    },
    f.memoize = function(e, t) {
        var i = {};
        return t || (t = f.identity),
        function() {
            var s = t.apply(this, arguments);
            return f.has(i, s) ? i[s] : i[s] = e.apply(this, arguments)
        }
    },
    f.delay = function(e, t) {
        var i = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        },
        t)
    },
    f.defer = function(e) {
        return f.delay.apply(f, [e, 1].concat(s.call(arguments, 1)))
    },
    f.keys = function(e) {
        if (!f.isObject(e)) return [];
        if (p) return p(e);
        var t, i = [];
        for (t in e) f.has(e, t) && i.push(t);
        return i
    },
    f.pick = function(e) {
        var i = {},
        o = n.apply(t, s.call(arguments, 1));
        return g(o,
        function(t) {
            t in e && (i[t] = e[t])
        }),
        i
    },
    f.isArray = i ||
    function(e) {
        return "[object Array]" == o.call(e)
    },
    f.isObject = function(e) {
        return e === Object(e)
    },
    g("Arguments Function String Number Date RegExp".split(" "),
    function(e) {
        f["is" + e] = function(t) {
            return o.call(t) == "[object " + e + "]"
        }
    }),
    f.isArguments(arguments) || (f.isArguments = function(e) {
        return ! (!e || !f.has(e, "callee"))
    }),
    "function" != typeof / . / &&(f.isFunction = function(e) {
        return "function" == typeof e
    }),
    f.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    },
    f.isNaN = function(e) {
        return f.isNumber(e) && e != +e
    },
    f.isBoolean = function(e) {
        return ! 0 === e || !1 === e || "[object Boolean]" == o.call(e)
    },
    f.isNull = function(e) {
        return null === e
    },
    f.isUndefined = function(e) {
        return void 0 === e
    },
    f.has = function(e, t) {
        return r.call(e, t)
    },
    f.identity = function(e) {
        return e
    },
    f.constant = function(e) {
        return function() {
            return e
        }
    },
    f.property = function(e) {
        return function(t) {
            return t[e]
        }
    },
    f.matches = function(e) {
        return function(t) {
            if (t === e) return ! 0;
            for (var i in e) if (e[i] !== t[i]) return ! 1;
            return ! 0
        }
    },
    f.result = function(e, t) {
        if (null != e) {
            var i = e[t];
            return f.isFunction(i) ? i.call(e) : i
        }
    },
    this._ = f
}.call(jwplayer),
function(e) {
    function t(e) {
        return function() {
            return r(e)
        }
    }
    function i(e, t, i, n, o) {
        return function() {
            var r, a;
            if (o) i(e);
            else {
                try {
                    if ((r = e.responseXML) && (a = r.firstChild, r.lastChild && "parsererror" === r.lastChild.nodeName)) return void(n && n("Invalid XML", t, e))
                } catch(l) {}
                if (r && a) return i(e); (r = s.parseXML(e.responseText)) && r.firstChild ? (e = s.extend({},
                e, {
                    responseXML: r
                }), i(e)) : n && n(e.responseText ? "Invalid XML": t, t, e)
            }
        }
    }
    var s = e.utils = {},
    n = e._;
    s.exists = function(e) {
        switch (typeof e) {
        case "string":
            return 0 < e.length;
        case "object":
            return null !== e;
        case "undefined":
            return ! 1
        }
        return ! 0
    },
    s.styleDimension = function(e) {
        return e + (0 < e.toString().indexOf("%") ? "": "px")
    },
    s.getAbsolutePath = function(e, t) {
        if (s.exists(t) || (t = document.location.href), s.exists(e)) {
            var i;
            if (s.exists(e)) {
                i = e.indexOf("://");
                var n = e.indexOf("?");
                i = i > 0 && (0 > n || n > i)
            } else i = void 0;
            if (i) return e;
            i = t.substring(0, t.indexOf("://") + 3);
            var o, n = t.substring(i.length, t.indexOf("/", i.length + 1));
            0 === e.indexOf("/") ? o = e.split("/") : (o = t.split("?")[0], o = o.substring(i.length + n.length + 1, o.lastIndexOf("/")), o = o.split("/").concat(e.split("/")));
            for (var r = [], a = 0; a < o.length; a++) o[a] && s.exists(o[a]) && "." !== o[a] && (".." === o[a] ? r.pop() : r.push(o[a]));
            return i + n + "/" + r.join("/")
        }
    },
    s.extend = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        if (1 < e.length) {
            for (var t = e[0], i = function(e, i) {
                void 0 !== i && null !== i && (t[e] = i)
            },
            n = 1; n < e.length; n++) s.foreach(e[n], i);
            return t
        }
        return null
    };
    var o = window.console = window.console || {
        log: function() {}
    };
    s.log = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        "object" == typeof o.log ? o.log(e) : o.log.apply(o, e)
    };
    var r = n.memoize(function(e) {
        return null !== navigator.userAgent.toLowerCase().match(e)
    });
    s.isFF = t(/firefox/i),
    s.isChrome = t(/chrome/i),
    s.isIPod = t(/iP(hone|od)/i),
    s.isIPad = t(/iPad/i),
    s.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),
    s.isIETrident = function(e) {
        return e ? (e = parseFloat(e).toFixed(1), r(RegExp("trident/.+rv:\\s*" + e, "i"))) : r(/trident/i)
    },
    s.isMSIE = function(e) {
        return e ? (e = parseFloat(e).toFixed(1), r(RegExp("msie\\s*" + e, "i"))) : r(/msie/i)
    },
    s.isIE = function(e) {
        return e ? (e = parseFloat(e).toFixed(1), e >= 11 ? s.isIETrident(e) : s.isMSIE(e)) : s.isMSIE() || s.isIETrident()
    },
    s.isSafari = function() {
        return r(/safari/i) && !r(/chrome/i) && !r(/chromium/i) && !r(/android/i)
    },
    s.isIOS = function(e) {
        return r(e ? RegExp("iP(hone|ad|od).+\\sOS\\s" + e, "i") : /iP(hone|ad|od)/i)
    },
    s.isAndroidNative = function(e) {
        return s.isAndroid(e, !0)
    },
    s.isAndroid = function(e, t) {
        return t && r(/chrome\/[123456789]/i) && !r(/chrome\/18/) ? !1 : e ? (s.isInt(e) && !/\./.test(e) && (e = "" + e + "."), r(RegExp("Android\\s*" + e, "i"))) : r(/Android/i)
    },
    s.isMobile = function() {
        return s.isIOS() || s.isAndroid()
    },
    s.isIframe = function() {
        return window.frameElement && "IFRAME" === window.frameElement.nodeName
    },
    s.saveCookie = function(e, t) {
        document.cookie = "jwplayer." + e + "=" + t + "; path=/"
    },
    s.getCookies = function() {
        for (var e = {},
        t = document.cookie.split("; "), i = 0; i < t.length; i++) {
            var s = t[i].split("=");
            0 === s[0].indexOf("jwplayer.") && (e[s[0].substring(9, s[0].length)] = s[1])
        }
        return e
    },
    s.isInt = function(e) {
        return 0 === parseFloat(e) % 1
    },
    s.typeOf = function(e) {
        if (null === e) return "null";
        var t = typeof e;
        return "object" === t && n.isArray(e) ? "array": t
    },
    s.translateEventResponse = function(t, i) {
        var n = s.extend({},
        i);
        if (t !== e.events.JWPLAYER_FULLSCREEN || n.fullscreen) if ("object" == typeof n.data) {
            var o = n.data;
            delete n.data,
            n = s.extend(n, o)
        } else "object" == typeof n.metadata && s.deepReplaceKeyName(n.metadata, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]);
        else n.fullscreen = "true" === n.message,
        delete n.message;
        return s.foreach(["position", "duration", "offset"],
        function(e, t) {
            n[t] && (n[t] = Math.round(1e3 * n[t]) / 1e3)
        }),
        n
    },
    s.flashVersion = function() {
        if (s.isAndroid()) return 0;
        var e, t = navigator.plugins;
        try {
            if ("undefined" !== t && (e = t["Shockwave Flash"])) return parseInt(e.description.replace(/\D+(\d+)\.., "$1"), 10)
        } catch(i) {}
        if ("undefined" != typeof window.ActiveXObject) try {
            if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseInt(e.GetVariable("$version").split(" ")[1].split(",")[0], 10)
        } catch(n) {}
        return 0
    },
    s.getScriptPath = function(e) {
        for (var t = document.getElementsByTagName("script"), i = 0; i < t.length; i++) {
            var s = t[i].src;
            if (s && 0 <= s.indexOf(e)) return s.substr(0, s.indexOf(e))
        }
        return ""
    },
    s.deepReplaceKeyName = function(t, i, n) {
        switch (e.utils.typeOf(t)) {
        case "array":
            for (var o = 0; o < t.length; o++) t[o] = e.utils.deepReplaceKeyName(t[o], i, n);
            break;
        case "object":
            s.foreach(t,
            function(s, o) {
                var r;
                if (i instanceof Array && n instanceof Array) {
                    if (i.length !== n.length) return;
                    r = i
                } else r = [i];
                for (var a = s,
                l = 0; l < r.length; l++) a = a.replace(RegExp(i[l], "g"), n[l]);
                t[a] = e.utils.deepReplaceKeyName(o, i, n),
                s !== a && delete t[s]
            })
        }
        return t
    };
    var a = s.pluginPathType = {
        ABSOLUTE: 0,
        RELATIVE: 1,
        CDN: 2
    };
    s.getPluginPathType = function(e) {
        if ("string" == typeof e) {
            e = e.split("?")[0];
            var t = e.indexOf("://");
            if (t > 0) return a.ABSOLUTE;
            var i = e.indexOf("/");
            return e = s.extension(e),
            !(0 > t && 0 > i) || e && isNaN(e) ? a.RELATIVE: a.CDN
        }
    },
    s.getPluginName = function(e) {
        return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
    },
    s.getPluginVersion = function(e) {
        return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
    },
    s.isYouTube = function(e, t) {
        return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
    },
    s.youTubeID = function(e) {
        try {
            return /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e).slice(1).join("").replace("?", "")
        } catch(t) {
            return ""
        }
    },
    s.isRtmp = function(e, t) {
        return 0 === e.indexOf("rtmp") || "rtmp" === t
    },
    s.foreach = function(e, t) {
        var i, n;
        for (i in e)"function" === s.typeOf(e.hasOwnProperty) ? e.hasOwnProperty(i) && (n = e[i], t(i, n)) : (n = e[i], t(i, n))
    },
    s.isHTTPS = function() {
        return 0 === window.location.href.indexOf("https")
    },
    s.repo = function() {
        var t = "http://p.jwpcdn.com/" + e.version.split(/\W/).splice(0, 2).join("/") + "/";
        try {
            s.isHTTPS() && (t = t.replace("http://", "https://ssl."))
        } catch(i) {}
        return t
    },
    s.versionCheck = function(t) {
        t = ("0" + t).split(/\W/);
        var i = e.version.split(/\W/),
        s = parseFloat(t[0]),
        n = parseFloat(i[0]);
        return s > n || s === n && parseFloat("0" + t[1]) > parseFloat(i[1]) ? !1 : !0
    },
    s.ajax = function(e, t, n, o) {
        var r, a = !1;
        if (0 < e.indexOf("#") && (e = e.replace(/#.*$/, "")), e && 0 <= e.indexOf("://") && e.split("/")[2] !== window.location.href.split("/")[2] && s.exists(window.XDomainRequest)) r = new window.XDomainRequest,
        r.onload = i(r, e, t, n, o),
        r.ontimeout = r.onprogress = function() {},
        r.timeout = 5e3;
        else {
            if (!s.exists(window.XMLHttpRequest)) return n && n("", e, r),
            r;
            var l = r = new window.XMLHttpRequest,
            h = e;
            r.onreadystatechange = function() {
                if (4 === l.readyState) switch (l.status) {
                case 200:
                    i(l, h, t, n, o)();
                    break;
                case 404:
                    n("File not found", h, l)
                }
            }
        }
        r.overrideMimeType && r.overrideMimeType("text/xml");
        var u = e,
        c = r;
        r.onerror = function() {
            n("Error loading file", u, c)
        };
        try {
            r.open("GET", e, !0)
        } catch(d) {
            a = !0
        }
        return setTimeout(function() {
            if (a) n && n(e, e, r);
            else try {
                r.send()
            } catch(t) {
                n && n(e, e, r)
            }
        },
        0),
        r
    },
    s.parseXML = function(e) {
        var t;
        try {
            if (window.DOMParser) {
                if (t = (new window.DOMParser).parseFromString(e, "text/xml"), t.childNodes && t.childNodes.length && "parsererror" === t.childNodes[0].firstChild.nodeName) return
            } else t = new window.ActiveXObject("Microsoft.XMLDOM"),
            t.async = "false",
            t.loadXML(e)
        } catch(i) {
            return
        }
        return t
    },
    s.between = function(e, t, i) {
        return Math.max(Math.min(e, i), t)
    },
    s.seconds = function(e) {
        if (n.isNumber(e)) return e;
        e = e.replace(",", ".");
        var t = e.split(":"),
        i = 0;
        return "s" === e.slice( - 1) ? i = parseFloat(e) : "m" === e.slice( - 1) ? i = 60 * parseFloat(e) : "h" === e.slice( - 1) ? i = 3600 * parseFloat(e) : 1 < t.length ? (i = parseFloat(t[t.length - 1]), i += 60 * parseFloat(t[t.length - 2]), 3 === t.length && (i += 3600 * parseFloat(t[t.length - 3]))) : i = parseFloat(e),
        i
    },
    s.serialize = function(e) {
        return null === e ? null: "true" === e.toString().toLowerCase() ? !0 : "false" === e.toString().toLowerCase() ? !1 : isNaN(Number(e)) || 5 < e.length || 0 === e.length ? e: Number(e)
    },
    s.addClass = function(e, t) {
        var i = n.isString(e.className) ? e.className.split(" ") : [],
        o = n.isArray(t) ? t: t.split(" ");
        n.each(o,
        function(e) {
            n.contains(i, e) || i.push(e)
        }),
        e.className = s.trim(i.join(" "))
    },
    s.removeClass = function(e, t) {
        var i = n.isString(e.className) ? e.className.split(" ") : [],
        o = n.isArray(t) ? t: t.split(" ");
        e.className = s.trim(n.difference(i, o).join(" "))
    },
    s.emptyElement = function(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    },
    s.indexOf = n.indexOf,
    s.noop = function() {},
    s.canCast = function() {
        var t = e.cast;
        return ! (!t || !n.isFunction(t.available) || !t.available())
    }
} (jwplayer),
function(e) {
    function t(e) {
        var t = document.createElement("style");
        return e && t.appendChild(document.createTextNode(e)),
        t.type = "text/css",
        document.getElementsByTagName("head")[0].appendChild(t),
        t
    }
    function i(e, t, i) {
        return r.exists(t) ? (i = i ? " !important": "", "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && 0 > t.indexOf("url") ? "url(" + t + ")": t + i: 0 === t || "z-index" === e || "opacity" === e ? "" + t + i: /color/i.test(e) ? "#" + r.pad(t.toString(16).replace(/^0x/i, ""), 6) + i: Math.ceil(t) + "px" + i) : ""
    }
    function s(e, t) {
        for (var i = 0; i < e.length; i++) {
            var s, n, o = e[i];
            if (void 0 !== o && null !== o) for (s in t) {
                n = s,
                n = n.split("-");
                for (var r = 1; r < n.length; r++) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
                n = n.join(""),
                o.style[n] !== t[s] && (o.style[n] = t[s])
            }
        }
    }
    function n(e) {
        var t, i, s, n = a[e].sheet;
        if (n) {
            t = n.cssRules,
            i = u[e],
            s = e;
            var o = l[s];
            s += " { ";
            for (var r in o) s += r + ": " + o[r] + "; ";
            if (s += "}", void 0 !== i && i < t.length && t[i].selectorText === e) {
                if (s === t[i].cssText) return;
                n.deleteRule(i)
            } else i = t.length,
            u[e] = i;
            try {
                n.insertRule(s, i)
            } catch(h) {}
        }
    }
    var o, r = e.utils,
    a = {},
    l = {},
    h = null,
    u = {};
    r.cssKeyframes = function(e, i) {
        var s = a.keyframes;
        s || (s = t(), a.keyframes = s);
        var s = s.sheet,
        n = "@keyframes " + e + " { " + i + " }";
        try {
            s.insertRule(n, s.cssRules.length)
        } catch(o) {}
        n = n.replace(/(keyframes|transform)/g, "-webkit-$1");
        try {
            s.insertRule(n, s.cssRules.length)
        } catch(r) {}
    };
    var c = r.css = function(e, s, r) {
        l[e] || (l[e] = {});
        var u = l[e];
        r = r || !1;
        var c, d, p = !1;
        for (c in s) d = i(c, s[c], r),
        "" !== d ? d !== u[c] && (u[c] = d, p = !0) : void 0 !== u[c] && (delete u[c], p = !0);
        p && (a[e] || (s = o && o.sheet && o.sheet.cssRules && o.sheet.cssRules.length || 0, (!o || s > 5e4) && (o = t()), a[e] = o), null !== h ? h.styleSheets[e] = l[e] : n(e))
    };
    c.style = function(t, n, o) {
        if (void 0 !== t && null !== t) {
            void 0 === t.length && (t = [t]);
            var r, a = {};
            for (r in n) a[r] = i(r, n[r]);
            if (null === h || o) s(t, a);
            else {
                n = (n = t.__cssRules) || {};
                for (var l in a) n[l] = a[l];
                t.__cssRules = n,
                0 > e._.indexOf(h.elements, t) && h.elements.push(t)
            }
        }
    },
    c.block = function(e) {
        null === h && (h = {
            id: e,
            styleSheets: {},
            elements: []
        })
    },
    c.unblock = function(e) {
        if (h && (!e || h.id === e)) {
            for (var t in h.styleSheets) n(t);
            for (e = 0; e < h.elements.length; e++) t = h.elements[e],
            s(t, t.__cssRules);
            h = null
        }
    },
    r.clearCss = function(e) {
        for (var t in l) 0 <= t.indexOf(e) && delete l[t];
        for (var i in a) 0 <= i.indexOf(e) && n(i)
    },
    r.transform = function(e, t) {
        var i = {};
        t = t || "",
        i.transform = t,
        i["-webkit-transform"] = t,
        i["-ms-transform"] = t,
        i["-moz-transform"] = t,
        i["-o-transform"] = t,
        "string" == typeof e ? c(e, i) : c.style(e, i)
    },
    r.dragStyle = function(e, t) {
        c(e, {
            "-webkit-user-select": t,
            "-moz-user-select": t,
            "-ms-user-select": t,
            "-webkit-user-drag": t,
            "user-select": t,
            "user-drag": t
        })
    },
    r.transitionStyle = function(e, t) {
        navigator.userAgent.match(/5\.\d(\.\d)? safari/i) || c(e, {
            "-webkit-transition": t,
            "-moz-transition": t,
            "-o-transition": t,
            transition: t
        })
    },
    r.rotate = function(e, t) {
        r.transform(e, "rotate(" + t + "deg)")
    },
    r.rgbHex = function(e) {
        return e = String(e).replace("#", ""),
        3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
        "#" + e.substr( - 6)
    },
    r.hexToRgba = function(e, t) {
        var i = "rgb",
        s = [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16)];
        return void 0 !== t && 100 !== t && (i += "a", s.push(t / 100)),
        i + "(" + s.join(",") + ")"
    }
} (jwplayer),
function(e) {
    var t = jwplayer._,
    i = e.foreach,
    s = {
        mp4: "video/mp4",
        ogg: "video/ogg",
        oga: "audio/ogg",
        vorbis: "audio/ogg",
        webm: "video/webm",
        aac: "audio/mp4",
        mp3: "audio/mpeg",
        hls: "application/vnd.apple.mpegurl"
    },
    n = {
        mp4: s.mp4,
        f4v: s.mp4,
        m4v: s.mp4,
        mov: s.mp4,
        m4a: s.aac,
        f4a: s.aac,
        aac: s.aac,
        mp3: s.mp3,
        ogv: s.ogg,
        ogg: s.ogg,
        oga: s.vorbis,
        vorbis: s.vorbis,
        webm: s.webm,
        m3u8: s.hls,
        m3u: s.hls,
        hls: s.hls
    },
    o = e.extensionmap = {};
    i(n,
    function(e, t) {
        o[e] = {
            html5: t
        }
    }),
    i({
        flv: "video",
        f4v: "video",
        mov: "video",
        m4a: "video",
        m4v: "video",
        mp4: "video",
        aac: "video",
        f4a: "video",
        mp3: "sound",
        smil: "rtmp",
        m3u8: "hls",
        hls: "hls"
    },
    function(e, t) {
        o[e] || (o[e] = {}),
        o[e].flash = t
    }),
    o.types = s,
    o.mimeType = function(e) {
        var i;
        return t.find(s,
        function(t, s) {
            return t === e ? (i = s, !0) : void 0
        }),
        i
    },
    o.extType = function(e) {
        return o.mimeType(n[e])
    }
} (jwplayer.utils),
function(e) {
    var t = e.loaderstatus = {
        NEW: 0,
        LOADING: 1,
        ERROR: 2,
        COMPLETE: 3
    };
    e.scriptloader = function(i) {
        function s(e) {
            a = t.ERROR,
            r.sendEvent(o.ERROR, e)
        }
        function n(e) {
            a = t.COMPLETE,
            r.sendEvent(o.COMPLETE, e)
        }
        var o = jwplayer.events,
        r = e.extend(this, new o.eventdispatcher),
        a = t.NEW;
        this.load = function() {
            if (a === t.NEW) {
                var r = e.scriptloader.loaders[i];
                if (r && (a = r.getStatus(), 2 > a)) return r.addEventListener(o.ERROR, s),
                void r.addEventListener(o.COMPLETE, n);
                var l = document.getElementsByTagName("head")[0] || document.documentElement,
                h = document.createElement("script"),
                u = !1;
                h.onload = h.onreadystatechange = function(e) {
                    u || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (u = !0, n(e), h.onload = h.onreadystatechange = null, l && h.parentNode && l.removeChild(h))
                },
                h.onerror = s,
                h.src = i,
                l.insertBefore(h, l.firstChild),
                a = t.LOADING,
                e.scriptloader.loaders[i] = this
            }
        },
        this.getStatus = function() {
            return a
        }
    },
    e.scriptloader.loaders = {}
} (jwplayer.utils),
function(e) {
    e.trim = function(e) {
        return e.replace(/^\s+|\s+$/g, "")
    },
    e.pad = function(e, t, i) {
        for (i || (i = "0"); e.length < t;) e = i + e;
        return e
    },
    e.xmlAttribute = function(e, t) {
        for (var i = 0; i < e.attributes.length; i++) if (e.attributes[i].name && e.attributes[i].name.toLowerCase() === t.toLowerCase()) return e.attributes[i].value.toString();
        return ""
    },
    e.extension = function(e) {
        if (!e || "rtmp" === e.substr(0, 4)) return "";
        var t;
        return (t = -1 < e.indexOf("(format=m3u8-") ? "m3u8": !1) ? t: (e = e.substring(e.lastIndexOf("/") + 1, e.length).split("?")[0].split("#")[0], -1 < e.lastIndexOf(".") ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
    },
    e.stringToColor = function(e) {
        return e = e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2"),
        3 === e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
        parseInt(e, 16)
    }
} (jwplayer.utils),
function(e) {
    var t = "touchmove",
    i = "touchstart";
    e.touch = function(s) {
        function n(e) {
            e.type === i ? (l = !0, u = r(d.DRAG_START, e)) : e.type === t ? l && (c || (o(d.DRAG_START, e, u), c = !0), o(d.DRAG, e)) : (l && (c ? o(d.DRAG_END, e) : (e.cancelBubble = !0, o(d.TAP, e))), l = c = !1, u = null)
        }
        function o(e, t, i) {
            h[e] && (t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault(), t = i ? i: r(e, t)) && h[e](t)
        }
        function r(e, t) {
            var i = null;
            if (t.touches && t.touches.length ? i = t.touches[0] : t.changedTouches && t.changedTouches.length && (i = t.changedTouches[0]), !i) return null;
            var s = a.getBoundingClientRect(),
            i = {
                type: e,
                target: a,
                x: i.pageX - window.pageXOffset - s.left,
                y: i.pageY,
                deltaX: 0,
                deltaY: 0
            };
            return e !== d.TAP && u && (i.deltaX = i.x - u.x, i.deltaY = i.y - u.y),
            i
        }
        var a = s,
        l = !1,
        h = {},
        u = null,
        c = !1,
        d = e.touchEvents;
        return document.addEventListener(t, n),
        document.addEventListener("touchend",
        function(e) {
            l && c && o(d.DRAG_END, e),
            l = c = !1,
            u = null
        }),
        document.addEventListener("touchcancel", n),
        s.addEventListener(i, n),
        s.addEventListener("touchend", n),
        this.addEventListener = function(e, t) {
            h[e] = t
        },
        this.removeEventListener = function(e) {
            delete h[e]
        },
        this
    }
} (jwplayer.utils),
function(e) {
    e.touchEvents = {
        DRAG: "jwplayerDrag",
        DRAG_START: "jwplayerDragStart",
        DRAG_END: "jwplayerDragEnd",
        TAP: "jwplayerTap"
    }
} (jwplayer.utils),
function(e) {
    e.key = function(t) {
        var i, s, n;
        this.edition = function() {
            return n && n.getTime() < (new Date).getTime() ? "invalid": i
        },
        this.token = function() {
            return s
        },
        e.exists(t) || (t = "");
        try {
            t = e.tea.decrypt(t, "36QXq4W@GSBV^teR");
            var o = t.split("/"); (i = o[0]) ? /^(free|pro|premium|enterprise|ads)$/i.test(i) ? (s = o[1], o[2] && 0 < parseInt(o[2]) && (n = new Date, n.setTime(String(o[2])))) : i = "invalid": i = "free"
        } catch(r) {
            i = "invalid"
        }
    }
} (jwplayer.utils),
function(e) {
    var t = e.tea = {};
    t.encrypt = function(e, n) {
        if (0 == e.length) return "";
        var o = t.strToLongs(s.encode(e));
        1 >= o.length && (o[1] = 0);
        for (var r, a = t.strToLongs(s.encode(n).slice(0, 16)), l = o.length, h = o[l - 1], u = o[0], c = Math.floor(6 + 52 / l), d = 0; 0 < c--;) {
            d += 2654435769,
            r = d >>> 2 & 3;
            for (var p = 0; l > p; p++) u = o[(p + 1) % l],
            h = (h >>> 5 ^ u << 2) + (u >>> 3 ^ h << 4) ^ (d ^ u) + (a[3 & p ^ r] ^ h),
            h = o[p] += h
        }
        return o = t.longsToStr(o),
        i.encode(o)
    },
    t.decrypt = function(e, n) {
        if (0 == e.length) return "";
        for (var o, r = t.strToLongs(i.decode(e)), a = t.strToLongs(s.encode(n).slice(0, 16)), l = r.length, h = r[l - 1], u = r[0], c = 2654435769 * Math.floor(6 + 52 / l); 0 != c;) {
            o = c >>> 2 & 3;
            for (var d = l - 1; d >= 0; d--) h = r[d > 0 ? d - 1 : l - 1],
            h = (h >>> 5 ^ u << 2) + (u >>> 3 ^ h << 4) ^ (c ^ u) + (a[3 & d ^ o] ^ h),
            u = r[d] -= h;
            c -= 2654435769
        }
        return r = t.longsToStr(r),
        r = r.replace(/\0+$/, ""),
        s.decode(r)
    },
    t.strToLongs = function(e) {
        for (var t = Array(Math.ceil(e.length / 4)), i = 0; i < t.length; i++) t[i] = e.charCodeAt(4 * i) + (e.charCodeAt(4 * i + 1) << 8) + (e.charCodeAt(4 * i + 2) << 16) + (e.charCodeAt(4 * i + 3) << 24);
        return t
    },
    t.longsToStr = function(e) {
        for (var t = Array(e.length), i = 0; i < e.length; i++) t[i] = String.fromCharCode(255 & e[i], e[i] >>> 8 & 255, e[i] >>> 16 & 255, e[i] >>> 24 & 255);
        return t.join("")
    };
    var i = {
        code: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e, t) {
            var n, o, r, a, l, h, u = [],
            c = "",
            d = i.code;
            if (h = ("undefined" == typeof t ? 0 : t) ? s.encode(e) : e, l = h.length % 3, l > 0) for (; 3 > l++;) c += "=",
            h += "\x00";
            for (l = 0; l < h.length; l += 3) n = h.charCodeAt(l),
            o = h.charCodeAt(l + 1),
            r = h.charCodeAt(l + 2),
            a = n << 16 | o << 8 | r,
            n = a >> 18 & 63,
            o = a >> 12 & 63,
            r = a >> 6 & 63,
            a &= 63,
            u[l / 3] = d.charAt(n) + d.charAt(o) + d.charAt(r) + d.charAt(a);
            return u = u.join(""),
            u = u.slice(0, u.length - c.length) + c
        },
        decode: function(e, t) {
            t = "undefined" == typeof t ? !1 : t;
            var n, o, r, a, l, h, u = [],
            c = i.code;
            h = t ? s.decode(e) : e;
            for (var d = 0; d < h.length; d += 4) n = c.indexOf(h.charAt(d)),
            o = c.indexOf(h.charAt(d + 1)),
            a = c.indexOf(h.charAt(d + 2)),
            l = c.indexOf(h.charAt(d + 3)),
            r = n << 18 | o << 12 | a << 6 | l,
            n = r >>> 16 & 255,
            o = r >>> 8 & 255,
            r &= 255,
            u[d / 4] = String.fromCharCode(n, o, r),
            64 == l && (u[d / 4] = String.fromCharCode(n, o)),
            64 == a && (u[d / 4] = String.fromCharCode(n));
            return a = u.join(""),
            t ? s.decode(a) : a
        }
    },
    s = {
        encode: function(e) {
            return e = e.replace(/[\u0080-\u07ff]/g,
            function(e) {
                return e = e.charCodeAt(0),
                String.fromCharCode(192 | e >> 6, 128 | 63 & e)
            }),
            e = e.replace(/[\u0800-\uffff]/g,
            function(e) {
                return e = e.charCodeAt(0),
                String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e)
            })
        },
        decode: function(e) {
            return e = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
            function(e) {
                return e = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2),
                String.fromCharCode(e)
            }),
            e = e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,
            function(e) {
                return e = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1),
                String.fromCharCode(e)
            })
        }
    }
} (jwplayer.utils),
function(e) {
    e.events = {
        COMPLETE: "COMPLETE",
        ERROR: "ERROR",
        API_READY: "jwplayerAPIReady",
        JWPLAYER_READY: "jwplayerReady",
        JWPLAYER_FULLSCREEN: "jwplayerFullscreen",
        JWPLAYER_RESIZE: "jwplayerResize",
        JWPLAYER_ERROR: "jwplayerError",
        JWPLAYER_SETUP_ERROR: "jwplayerSetupError",
        JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay",
        JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete",
        JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer",
        JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull",
        JWPLAYER_MEDIA_ERROR: "jwplayerMediaError",
        JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded",
        JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete",
        JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek",
        JWPLAYER_MEDIA_TIME: "jwplayerMediaTime",
        JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume",
        JWPLAYER_MEDIA_META: "jwplayerMediaMeta",
        JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute",
        JWPLAYER_AUDIO_TRACKS: "jwplayerAudioTracks",
        JWPLAYER_AUDIO_TRACK_CHANGED: "jwplayerAudioTrackChanged",
        JWPLAYER_MEDIA_LEVELS: "jwplayerMediaLevels",
        JWPLAYER_MEDIA_LEVEL_CHANGED: "jwplayerMediaLevelChanged",
        JWPLAYER_CAPTIONS_CHANGED: "jwplayerCaptionsChanged",
        JWPLAYER_CAPTIONS_LIST: "jwplayerCaptionsList",
        JWPLAYER_CAPTIONS_LOADED: "jwplayerCaptionsLoaded",
        JWPLAYER_PLAYER_STATE: "jwplayerPlayerState",
        state: {
            BUFFERING: "BUFFERING",
            IDLE: "IDLE",
            PAUSED: "PAUSED",
            PLAYING: "PLAYING"
        },
        JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded",
        JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem",
        JWPLAYER_PLAYLIST_COMPLETE: "jwplayerPlaylistComplete",
        JWPLAYER_DISPLAY_CLICK: "jwplayerViewClick",
        JWPLAYER_PROVIDER_CLICK: "jwplayerProviderClick",
        JWPLAYER_VIEW_TAB_FOCUS: "jwplayerViewTabFocus",
        JWPLAYER_CONTROLS: "jwplayerViewControls",
        JWPLAYER_USER_ACTION: "jwplayerUserAction",
        JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked",
        JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed",
        JWPLAYER_AD_TIME: "jwplayerAdTime",
        JWPLAYER_AD_ERROR: "jwplayerAdError",
        JWPLAYER_AD_CLICK: "jwplayerAdClicked",
        JWPLAYER_AD_COMPLETE: "jwplayerAdComplete",
        JWPLAYER_AD_IMPRESSION: "jwplayerAdImpression",
        JWPLAYER_AD_COMPANIONS: "jwplayerAdCompanions",
        JWPLAYER_AD_SKIPPED: "jwplayerAdSkipped",
        JWPLAYER_AD_PLAY: "jwplayerAdPlay",
        JWPLAYER_AD_PAUSE: "jwplayerAdPause",
        JWPLAYER_AD_META: "jwplayerAdMeta",
        JWPLAYER_CAST_AVAILABLE: "jwplayerCastAvailable",
        JWPLAYER_CAST_SESSION: "jwplayerCastSession",
        JWPLAYER_CAST_AD_CHANGED: "jwplayerCastAdChanged"
    }
} (jwplayer),
function(e) {
    var t = e.utils;
    e.events.eventdispatcher = function(i, s) {
        function n(e, i, s) {
            if (e) for (var n = 0; n < e.length; n++) {
                var o = e[n];
                if (o) {
                    null !== o.count && 0 === --o.count && delete e[n];
                    try {
                        o.listener(i)
                    } catch(r) {
                        t.log('Error handling "' + s + '" event listener [' + n + "]: " + r.toString(), o.listener, i)
                    }
                }
            }
        }
        var o, r;
        this.resetEventListeners = function() {
            o = {},
            r = []
        },
        this.resetEventListeners(),
        this.addEventListener = function(e, i, s) {
            try {
                t.exists(o[e]) || (o[e] = []),
                "string" === t.typeOf(i) && (i = new Function("return " + i)()),
                o[e].push({
                    listener: i,
                    count: s || null
                })
            } catch(n) {
                t.log("error", n)
            }
            return ! 1
        },
        this.removeEventListener = function(e, i) {
            var s;
            if (o[e]) {
                try {
                    if (void 0 === i) return void(o[e] = []);
                    for (s = 0; s < o[e].length; s++) if (o[e][s].listener.toString() === i.toString()) {
                        o[e].splice(s, 1);
                        break
                    }
                } catch(n) {
                    t.log("error", n)
                }
                return ! 1
            }
        },
        this.addGlobalListener = function(e, i) {
            try {
                "string" === t.typeOf(e) && (e = new Function("return " + e)()),
                r.push({
                    listener: e,
                    count: i || null
                })
            } catch(s) {
                t.log("error", s)
            }
            return ! 1
        },
        this.removeGlobalListener = function(e) {
            if (e) {
                try {
                    for (var i = r.length; i--;) r[i].listener.toString() === e.toString() && r.splice(i, 1)
                } catch(s) {
                    t.log("error", s)
                }
                return ! 1
            }
        },
        this.sendEvent = function(a, l) {
            t.exists(l) || (l = {}),
            t.extend(l, {
                id: i,
                version: e.version,
                type: a
            }),
            s && t.log(a, l),
            n(o[a], l, a),
            n(r, l, a)
        }
    }
} (window.jwplayer),
function(e) {
    var t = {},
    i = {};
    e.plugins = function() {},
    e.plugins.loadPlugins = function(s, n) {
        return i[s] = new e.plugins.pluginloader(new e.plugins.model(t), n),
        i[s]
    },
    e.plugins.registerPlugin = function(i, s, n, o) {
        var r = e.utils.getPluginName(i);
        t[r] || (t[r] = new e.plugins.plugin(i)),
        t[r].registerPlugin(i, s, n, o)
    }
} (jwplayer),
function(e) {
    e.plugins.model = function(t) {
        this.addPlugin = function(i) {
            var s = e.utils.getPluginName(i);
            return t[s] || (t[s] = new e.plugins.plugin(i)),
            t[s]
        },
        this.getPlugins = function() {
            return t
        }
    }
} (jwplayer),
function(e) {
    var t = jwplayer.utils,
    i = jwplayer.events;
    e.pluginmodes = {
        FLASH: 0,
        JAVASCRIPT: 1,
        HYBRID: 2
    },
    e.plugin = function(s) {
        function n() {
            switch (t.getPluginPathType(s)) {
            case t.pluginPathType.ABSOLUTE:
                return s;
            case t.pluginPathType.RELATIVE:
                return t.getAbsolutePath(s, window.location.href)
            }
        }
        function o() {
            u = setTimeout(function() {
                c = t.loaderstatus.COMPLETE,
                d.sendEvent(i.COMPLETE)
            },
            1e3)
        }
        function r() {
            c = t.loaderstatus.ERROR,
            d.sendEvent(i.ERROR, {
                url: s
            })
        }
        var a, l, h, u, c = t.loaderstatus.NEW,
        d = new i.eventdispatcher;
        t.extend(this, d),
        this.load = function() {
            if (c === t.loaderstatus.NEW) if (0 < s.lastIndexOf(".swf")) a = s,
            c = t.loaderstatus.COMPLETE,
            d.sendEvent(i.COMPLETE);
            else if (t.getPluginPathType(s) === t.pluginPathType.CDN) c = t.loaderstatus.COMPLETE,
            d.sendEvent(i.COMPLETE);
            else {
                c = t.loaderstatus.LOADING;
                var e = new t.scriptloader(n());
                e.addEventListener(i.COMPLETE, o),
                e.addEventListener(i.ERROR, r),
                e.load()
            }
        },
        this.registerPlugin = function(e, s, n, o) {
            u && (clearTimeout(u), u = void 0),
            h = s,
            n && o ? (a = o, l = n) : "string" == typeof n ? a = n: "function" == typeof n ? l = n: !n && !o && (a = e),
            c = t.loaderstatus.COMPLETE,
            d.sendEvent(i.COMPLETE)
        },
        this.getStatus = function() {
            return c
        },
        this.getPluginName = function() {
            return t.getPluginName(s)
        },
        this.getFlashPath = function() {
            if (a) switch (t.getPluginPathType(a)) {
            case t.pluginPathType.ABSOLUTE:
                return a;
            case t.pluginPathType.RELATIVE:
                return 0 < s.lastIndexOf(".swf") ? t.getAbsolutePath(a, window.location.href) : t.getAbsolutePath(a, n())
            }
            return null
        },
        this.getJS = function() {
            return l
        },
        this.getTarget = function() {
            return h
        },
        this.getPluginmode = function() {
            return "undefined" != typeof a && "undefined" != typeof l ? e.pluginmodes.HYBRID: "undefined" != typeof a ? e.pluginmodes.FLASH: "undefined" != typeof l ? e.pluginmodes.JAVASCRIPT: void 0
        },
        this.getNewInstance = function(e, t, i) {
            return new l(e, t, i)
        },
        this.getURL = function() {
            return s
        }
    }
} (jwplayer.plugins),
function(e) {
    var t = e.utils,
    i = e.events,
    s = e._,
    n = t.foreach;
    e.plugins.pluginloader = function(e, o) {
        function r() {
            c || (c = !0, u = t.loaderstatus.COMPLETE, g.sendEvent(i.COMPLETE))
        }
        function a() {
            if (!f && ((!d || 0 === s.keys(d).length) && r(), !c)) {
                var n = e.getPlugins();
                h = s.after(p, r),
                t.foreach(d,
                function(e) {
                    e = t.getPluginName(e);
                    var s = n[e];
                    e = s.getJS();
                    var o = s.getTarget(),
                    s = s.getStatus();
                    s === t.loaderstatus.LOADING || s === t.loaderstatus.NEW || (e && !t.versionCheck(o) && g.sendEvent(i.ERROR, {
                        message: "Incompatible player version"
                    }), h())
                })
            }
        }
        function l(e) {
            f || (g.sendEvent(i.ERROR, {
                message: "File not found"
            }), e.url && t.log("File not found", e.url), a())
        }
        var h, u = t.loaderstatus.NEW,
        c = !1,
        d = o,
        p = s.size(d),
        f = !1,
        g = new i.eventdispatcher;
        t.extend(this, g),
        this.setupPlugins = function(i, s, o) {
            var r = {
                length: 0,
                plugins: {}
            },
            a = 0,
            l = {},
            h = e.getPlugins();
            return n(s.plugins,
            function(e, n) {
                var u = t.getPluginName(e),
                c = h[u],
                d = c.getFlashPath(),
                p = c.getJS(),
                f = c.getURL();
                d && (r.plugins[d] = t.extend({},
                n), r.plugins[d].pluginmode = c.getPluginmode(), r.length++);
                try {
                    if (p && s.plugins && s.plugins[f]) {
                        var g = document.createElement("div");
                        g.id = i.id + "_" + u,
                        g.style.position = "absolute",
                        g.style.top = 0,
                        g.style.zIndex = a + 10,
                        l[u] = c.getNewInstance(i, t.extend({},
                        s.plugins[f]), g),
                        a++,
                        i.onReady(o(l[u], g, !0)),
                        i.onResize(o(l[u], g))
                    }
                } catch(m) {
                    t.log("ERROR: Failed to load " + u + ".")
                }
            }),
            i.plugins = l,
            r
        },
        this.load = function() {
            if (!t.exists(o) || "object" === t.typeOf(o)) {
                u = t.loaderstatus.LOADING,
                n(o,
                function(s) {
                    t.exists(s) && (s = e.addPlugin(s), s.addEventListener(i.COMPLETE, a), s.addEventListener(i.ERROR, l))
                });
                var s = e.getPlugins();
                n(s,
                function(e, t) {
                    t.load()
                })
            }
            a()
        },
        this.destroy = function() {
            f = !0,
            g && (g.resetEventListeners(), g = null)
        },
        this.pluginFailed = l,
        this.getStatus = function() {
            return u
        }
    }
} (jwplayer),
function(e) {
    e.parsers = {
        localName: function(e) {
            return e ? e.localName ? e.localName: e.baseName ? e.baseName: "": ""
        },
        textContent: function(t) {
            return t ? t.textContent ? e.utils.trim(t.textContent) : t.text ? e.utils.trim(t.text) : "": ""
        },
        getChildNode: function(e, t) {
            return e.childNodes[t]
        },
        numChildren: function(e) {
            return e.childNodes ? e.childNodes.length: 0
        }
    }
} (jwplayer),
function(e) {
    var t = e.parsers; (t.jwparser = function() {}).parseEntry = function(i, s) {
        for (var n = [], o = [], r = e.utils.xmlAttribute, a = 0; a < i.childNodes.length; a++) {
            var l = i.childNodes[a];
            if ("jwplayer" === l.prefix) {
                var h = t.localName(l);
                "source" === h ? (delete s.sources, n.push({
                    file: r(l, "file"),
                    "default": r(l, "default"),
                    label: r(l, "label"),
                    type: r(l, "type")
                })) : "track" === h ? (delete s.tracks, o.push({
                    file: r(l, "file"),
                    "default": r(l, "default"),
                    kind: r(l, "kind"),
                    label: r(l, "label")
                })) : (s[h] = e.utils.serialize(t.textContent(l)), "file" === h && s.sources && delete s.sources)
            }
            s.file || (s.file = s.link)
        }
        if (n.length) for (s.sources = [], a = 0; a < n.length; a++) 0 < n[a].file.length && (n[a]["default"] = "true" === n[a]["default"] ? !0 : !1, n[a].label.length || delete n[a].label, s.sources.push(n[a]));
        if (o.length) for (s.tracks = [], a = 0; a < o.length; a++) 0 < o[a].file.length && (o[a]["default"] = "true" === o[a]["default"] ? !0 : !1, o[a].kind = o[a].kind.length ? o[a].kind: "captions", o[a].label.length || delete o[a].label, s.tracks.push(o[a]));
        return s
    }
} (jwplayer),
function(e) {
    var t = jwplayer.utils,
    i = t.xmlAttribute,
    s = e.localName,
    n = e.textContent,
    o = e.numChildren,
    r = e.mediaparser = function() {};
    r.parseGroup = function(e, a) {
        var l, h, u = [];
        for (h = 0; h < o(e); h++) if (l = e.childNodes[h], "media" === l.prefix && s(l)) switch (s(l).toLowerCase()) {
        case "content":
            i(l, "duration") && (a.duration = t.seconds(i(l, "duration"))),
            0 < o(l) && (a = r.parseGroup(l, a)),
            i(l, "url") && (a.sources || (a.sources = []), a.sources.push({
                file: i(l, "url"),
                type: i(l, "type"),
                width: i(l, "width"),
                label: i(l, "label")
            }));
            break;
        case "title":
            a.title = n(l);
            break;
        case "description":
            a.description = n(l);
            break;
        case "guid":
            a.mediaid = n(l);
            break;
        case "thumbnail":
            a.image || (a.image = i(l, "url"));
            break;
        case "group":
            r.parseGroup(l, a);
            break;
        case "subtitle":
            var c = {};
            if (c.file = i(l, "url"), c.kind = "captions", 0 < i(l, "lang").length) {
                var d = c;
                l = i(l, "lang");
                var p = {
                    zh: "Chinese",
                    nl: "Dutch",
                    en: "English",
                    fr: "French",
                    de: "German",
                    it: "Italian",
                    ja: "Japanese",
                    pt: "Portuguese",
                    ru: "Russian",
                    es: "Spanish"
                };
                l = p[l] ? p[l] : l,
                d.label = l
            }
            u.push(c)
        }
        for (a.hasOwnProperty("tracks") || (a.tracks = []), h = 0; h < u.length; h++) a.tracks.push(u[h]);
        return a
    }
} (jwplayer.parsers),
function(e) {
    function t(t) {
        for (var n = {},
        o = 0; o < t.childNodes.length; o++) {
            var a = t.childNodes[o],
            l = r(a);
            if (l) switch (l.toLowerCase()) {
            case "enclosure":
                n.file = i.xmlAttribute(a, "url");
                break;
            case "title":
                n.title = s(a);
                break;
            case "guid":
                n.mediaid = s(a);
                break;
            case "pubdate":
                n.date = s(a);
                break;
            case "description":
                n.description = s(a);
                break;
            case "link":
                n.link = s(a);
                break;
            case "category":
                n.tags = n.tags ? n.tags + s(a) : s(a)
            }
        }
        return n = e.mediaparser.parseGroup(t, n),
        n = e.jwparser.parseEntry(t, n),
        new jwplayer.playlist.item(n)
    }
    var i = jwplayer.utils,
    s = e.textContent,
    n = e.getChildNode,
    o = e.numChildren,
    r = e.localName;
    e.rssparser = {},
    e.rssparser.parse = function(e) {
        for (var i = [], s = 0; s < o(e); s++) {
            var a = n(e, s);
            if ("channel" === r(a).toLowerCase()) for (var l = 0; l < o(a); l++) {
                var h = n(a, l);
                "item" === r(h).toLowerCase() && i.push(t(h))
            }
        }
        return i
    }
} (jwplayer.parsers),
function(e) {
    var t = e.utils,
    i = e._;
    e.playlist = function(t) {
        var s = [];
        return t = i.isArray(t) ? t: [t],
        i.each(t,
        function(t) {
            s.push(new e.playlist.item(t))
        }),
        s
    },
    e.playlist.filterPlaylist = function(e, n) {
        var o = [];
        return i.each(e,
        function(e) {
            if (e = t.extend({},
            e), e.sources = s(e.sources, !1, n), e.sources.length) {
                for (var i = 0; i < e.sources.length; i++) e.sources[i].label = e.sources[i].label || i.toString();
                o.push(e)
            }
        }),
        o
    };
    var s = e.playlist.filterSources = function(s, n, o) {
        var r, a = [],
        l = n ? e.embed.flashCanPlay: e.embed.html5CanPlay;
        return s ? (i.each(s,
        function(e) {
            if (e && e.file) {
                var i = t.trim("" + e.file),
                s = e.type;
                s || (s = t.extension(i), s = t.extensionmap.extType(s)),
                e = t.extend({},
                e, {
                    file: i,
                    type: s
                })
            } else e = void 0;
            e && l(e.file, e.type, o) && (r = r || e.type, e.type === r && a.push(e))
        }), a) : void 0
    }
} (jwplayer),
function(e) {
    var t = e.item = function(i) {
        var s, n, o = jwplayer.utils,
        r = o.extend({},
        t.defaults, i);
        for (r.tracks = i && o.exists(i.tracks) ? i.tracks: [], 0 === r.sources.length && (r.sources = [new e.source(r)]), s = 0; s < r.sources.length; s++) n = r.sources[s]["default"],
        r.sources[s]["default"] = n ? "true" === n.toString() : !1,
        r.sources[s] = new e.source(r.sources[s]);
        if (r.captions && !o.exists(i.tracks)) {
            for (i = 0; i < r.captions.length; i++) r.tracks.push(r.captions[i]);
            delete r.captions
        }
        for (s = 0; s < r.tracks.length; s++) r.tracks[s] = new e.track(r.tracks[s]);
        return r
    };
    t.defaults = {
        description: void 0,
        image: void 0,
        mediaid: void 0,
        title: void 0,
        sources: [],
        tracks: []
    }
} (jwplayer.playlist),
function(e) {
    var t = e.utils,
    i = e.events,
    s = e.parsers;
    e.playlist.loader = function() {
        function n(t) {
            try {
                var n = t.responseXML.childNodes;
                t = "";
                for (var o = 0; o < n.length && (t = n[o], !(8 !== t.nodeType)); o++);
                if ("xml" === s.localName(t) && (t = t.nextSibling), "rss" !== s.localName(t)) r("Not a valid RSS feed");
                else {
                    var l = new e.playlist(s.rssparser.parse(t));
                    a.sendEvent(i.JWPLAYER_PLAYLIST_LOADED, {
                        playlist: l
                    })
                }
            } catch(h) {
                r()
            }
        }
        function o(e) {
            r(e.match(/invalid/i) ? "Not a valid RSS feed": "")
        }
        function r(e) {
            a.sendEvent(i.JWPLAYER_ERROR, {
                message: e ? e: "Error loading file"
            })
        }
        var a = new i.eventdispatcher;
        t.extend(this, a),
        this.load = function(e) {
            t.ajax(e, n, o)
        }
    }
} (jwplayer),
function(e) {
    var t = jwplayer.utils,
    i = {
        file: void 0,
        label: void 0,
        type: void 0,
        "default": void 0
    };
    e.source = function(e) {
        var s = t.extend({},
        i);
        return t.foreach(i,
        function(i) {
            t.exists(e[i]) && (s[i] = e[i], delete e[i])
        }),
        s.type && 0 < s.type.indexOf("/") && (s.type = t.extensionmap.mimeType(s.type)),
        "m3u8" === s.type && (s.type = "hls"),
        "smil" === s.type && (s.type = "rtmp"),
        s
    }
} (jwplayer.playlist),
function(e) {
    var t = jwplayer.utils,
    i = {
        file: void 0,
        label: void 0,
        kind: "captions",
        "default": !1
    };
    e.track = function(e) {
        var s = t.extend({},
        i);
        return e || (e = {}),
        t.foreach(i,
        function(i) {
            t.exists(e[i]) && (s[i] = e[i], delete e[i])
        }),
        s
    }
} (jwplayer.playlist),
function(e) {
    function t(e, t, s) {
        var n = e.style;
        n.backgroundColor = "#000",
        n.color = "#FFF",
        n.width = i.styleDimension(s.width),
        n.height = i.styleDimension(s.height),
        n.display = "table",
        n.opacity = 1,
        s = document.createElement("p"),
        n = s.style,
        n.verticalAlign = "middle",
        n.textAlign = "center",
        n.display = "table-cell",
        n.font = "15px/20px Arial, Helvetica, sans-serif",
        s.innerHTML = t.replace(":", ":<br>"),
        e.innerHTML = "",
        e.appendChild(s)
    }
    var i = e.utils,
    s = e.events,
    n = e._,
    o = e.embed = function(r) {
        function a() {
            if (!b) {
                var t = f.playlist;
                if (n.isArray(t)) {
                    if (0 === t.length) return void u();
                    if (! (1 !== t.length || t[0].sources && 0 !== t[0].sources.length && t[0].sources[0].file)) return void u()
                }
                if (!w) if (n.isString(t)) p = new e.playlist.loader,
                p.addEventListener(s.JWPLAYER_PLAYLIST_LOADED,
                function(e) {
                    f.playlist = e.playlist,
                    w = !1,
                    a()
                }),
                p.addEventListener(s.JWPLAYER_ERROR,
                function(e) {
                    w = !1,
                    u(e)
                }),
                w = !0,
                p.load(f.playlist);
                else if (_.getStatus() === i.loaderstatus.COMPLETE) {
                    for (t = 0; t < f.modes.length; t++) {
                        var h = f.modes[t],
                        d = h.type;
                        if (d && o[d]) {
                            var g = i.extend({},
                            f);
                            if (P = new o[d](S, h, g, _, r), P.supportsConfig()) return P.addEventListener(s.ERROR, l),
                            P.embed(),
                            i.css("object.jwswf, .jwplayer:focus", {
                                outline: "none"
                            }),
                            i.css(".jw-tab-focus:focus", {
                                outline: "solid 2px #0B7EF4"
                            }),
                            r
                        }
                    }
                    f.fallback ? (t = "No suitable players found and fallback enabled", c(t, !0), i.log(t), new o.download(S, f, u)) : (t = "No suitable players found and fallback disabled", c(t, !1), i.log(t))
                }
            }
        }
        function l(e) {
            d(v + e.message)
        }
        function h(e) {
            r.dispatchEvent(s.JWPLAYER_ERROR, {
                message: "Could not load plugin: " + e.message
            })
        }
        function u(e) {
            d(e && e.message ? "Error loading playlist: " + e.message: v + "No playable sources found")
        }
        function c(e, t) {
            clearTimeout(E),
            E = setTimeout(function() {
                r.dispatchEvent(s.JWPLAYER_SETUP_ERROR, {
                    message: e,
                    fallback: t
                })
            },
            0)
        }
        function d(e) {
            b || (y.parentNode.replaceChild(S, y), f.fallback ? (b = !0, t(S, e, f), c(e, !0)) : c(e, !1))
        }
        var p, f = new o.config(r.config),
        g = f.width,
        m = f.height,
        v = "Error loading player: ",
        y = document.getElementById(r.id),
        _ = e.plugins.loadPlugins(r.id, f.plugins),
        w = !1,
        b = !1,
        P = null,
        E = -1;
        f.id = r.id,
        f.aspectratio ? r.config.aspectratio = f.aspectratio: delete r.config.aspectratio;
        var C = r;
        i.foreach(f.events,
        function(e, t) {
            var i = C[e];
            "function" == typeof i && i.call(C, t)
        });
        var S = document.createElement("div");
        return S.id = y.id,
        S.style.width = 0 < g.toString().indexOf("%") ? g: g + "px",
        S.style.height = 0 < m.toString().indexOf("%") ? m: m + "px",
        this.embed = function() {
            b || (_.addEventListener(s.COMPLETE, a), _.addEventListener(s.ERROR, h), _.load())
        },
        this.destroy = function() {
            P && (P.destroy(), P = null),
            _ && (_.destroy(), _ = null),
            p && (p.resetEventListeners(), p = null)
        },
        this.errorScreen = d,
        this
    };
    e.embed.errorScreen = t
} (jwplayer),
function(e) {
    function t(e) {
        if (e.playlist) for (var t = 0; t < e.playlist.length; t++) e.playlist[t] = new n(e.playlist[t]);
        else {
            var o = {};
            s.foreach(n.defaults,
            function(t) {
                i(e, o, t)
            }),
            o.sources || (e.levels ? (o.sources = e.levels, delete e.levels) : (t = {},
            i(e, t, "file"), i(e, t, "type"), o.sources = t.file ? [t] : [])),
            e.playlist = [new n(o)]
        }
    }
    function i(e, t, i) {
        s.exists(e[i]) && (t[i] = e[i], delete e[i])
    }
    var s = e.utils,
    n = e.playlist.item; (e.embed.config = function(i) {
        var n = {
            fallback: !0,
            height: 270,
            primary: "html5",
            width: 480,
            base: i.base ? i.base: s.getScriptPath("jwplayer.js"),
            aspectratio: ""
        };
        i = s.extend({},
        n, e.defaults, i);
        var n = {
            type: "html5",
            src: i.base + "jwplayer.html5.js"
        },
        o = {
            type: "flash",
            src: i.base + "jwplayer.flash.swf"
        };
        if (i.modes = "flash" === i.primary ? [o, n] : [n, o], i.listbar && (i.playlistsize = i.listbar.size, i.playlistposition = i.listbar.position, i.playlistlayout = i.listbar.layout), i.flashplayer && (o.src = i.flashplayer), i.html5player && (n.src = i.html5player), t(i), o = i.aspectratio, "string" == typeof o && s.exists(o)) {
            var r = o.indexOf(":"); - 1 === r ? n = 0 : (n = parseFloat(o.substr(0, r)), o = parseFloat(o.substr(r + 1)), n = 0 >= n || 0 >= o ? 0 : 100 * (o / n) + "%")
        } else n = 0;
        return - 1 === i.width.toString().indexOf("%") ? delete i.aspectratio: n ? i.aspectratio = n: delete i.aspectratio,
        i
    }).addConfig = function(e, i) {
        return t(i),
        s.extend(e, i)
    }
} (jwplayer),
function(e) {
    function t(e, t) {
        function s(e, t) {
            n[o].style[e] = t
        }
        for (var n = document.querySelectorAll(e), o = 0; o < n.length; o++) i.foreach(t, s)
    }
    var i = e.utils;
    e.embed.download = function(e, s, n) {
        function o(e, t, i) {
            return e = document.createElement(e),
            t && (e.className = "jwdownload" + t),
            i && i.appendChild(e),
            e
        }
        var r, a, l = i.extend({},
        s),
        h = l.width ? l.width: 480,
        u = l.height ? l.height: 320;
        s = s.logo ? s.logo: {
            prefix: i.repo(),
            file: "logo.png",
            margin: 10
        };
        var c, d, p, f, g, m;
        if (d = l.playlist, l = ["mp4", "aac", "mp3"], d && d.length) {
            for (p = d[0], f = p.sources, d = 0; d < f.length; d++) g = f[d],
            g.file && (m = g.type || i.extensionmap.extType(i.extension(g.file)), 0 <= i.indexOf(l, m) ? (r = g.file, a = p.image) : i.isYouTube(g.file, m) && (c = g.file));
            r ? (n = r, e && (r = o("a", "display", e), o("div", "icon", r), o("div", "logo", r), n && r.setAttribute("href", i.getAbsolutePath(n))), n = "#" + e.id + " .jwdownload", e.style.width = "", e.style.height = "", t(n + "display", {
                width: i.styleDimension(Math.max(320, h)),
                height: i.styleDimension(Math.max(180, u)),
                background: "black center no-repeat " + (a ? "url(" + a + ")": ""),
                backgroundSize: "contain",
                position: "relative",
                border: "none",
                display: "block"
            }), t(n + "display div", {
                position: "absolute",
                width: "100%",
                height: "100%"
            }), t(n + "logo", {
                top: s.margin + "px",
                right: s.margin + "px",
                background: "top right no-repeat url(" + s.prefix + s.file + ")"
            }), t(n + "icon", {
                background: "center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"
            })) : c ? (s = c, e = o("iframe", "", e), e.src = "http://www.youtube.com/embed/" + i.youTubeID(s), e.width = h, e.height = u, e.style.border = "none") : n()
        }
    }
} (jwplayer),
function(e) {
    var t = e.utils,
    i = e.events,
    s = {}; (e.embed.flash = function(o, r, a, l, h) {
        function u(e, t, i) {
            var s = document.createElement("param");
            s.setAttribute("name", t),
            s.setAttribute("value", i),
            e.appendChild(s)
        }
        function c(e, t, i) {
            return function() {
                try {
                    i && document.getElementById(h.id + "_wrapper").appendChild(t);
                    var s = document.getElementById(h.id).getPluginConfig("display");
                    "function" == typeof e.resize && e.resize(s.width, s.height),
                    t.style.left = s.x,
                    t.style.top = s.h
                } catch(n) {}
            }
        }
        function d(e) {
            if (!e) return {};
            var i = {},
            s = [];
            return t.foreach(e,
            function(e, n) {
                var o = t.getPluginName(e);
                s.push(e),
                t.foreach(n,
                function(e, t) {
                    i[o + "." + e] = t
                })
            }),
            i.plugins = s.join(","),
            i
        }
        var p = new e.events.eventdispatcher,
        f = t.flashVersion();
        t.extend(this, p),
        this.embed = function() {
            if (a.id = h.id, 10 > f) return p.sendEvent(i.ERROR, {
                message: "Flash version must be 10.0 or greater"
            }),
            !1;
            var e, n, g = o.id,
            m = h.config.listbar,
            v = t.extend({},
            a);
            if (e = document.getElementById(h.id), e.parentNode.replaceChild(o, e), g + "_wrapper" === o.parentNode.id) e = document.getElementById(g + "_wrapper");
            else {
                if (e = document.createElement("div"), n = document.createElement("div"), n.style.display = "none", n.id = g + "_aspect", e.id = g + "_wrapper", e.style.position = "relative", e.style.display = "block", e.style.width = t.styleDimension(v.width), e.style.height = t.styleDimension(v.height), h.config.aspectratio) {
                    var y = parseFloat(h.config.aspectratio);
                    n.style.display = "block",
                    n.style.marginTop = h.config.aspectratio,
                    e.style.height = "auto",
                    e.style.display = "inline-block",
                    m && ("bottom" === m.position ? n.style.paddingBottom = m.size + "px": "right" === m.position && (n.style.marginBottom = -1 * m.size * (y / 100) + "px"))
                }
                o.parentNode.replaceChild(e, o),
                e.appendChild(o),
                e.appendChild(n)
            }
            for (m = l.setupPlugins(h, v, c), 0 < m.length ? t.extend(v, d(m.plugins)) : delete v.plugins, "undefined" != typeof v["dock.position"] && "false" === v["dock.position"].toString().toLowerCase() && (v.dock = v["dock.position"], delete v["dock.position"]), m = v.wmode || (v.height && 40 >= v.height ? "transparent": "opaque"), n = "height width modes events primary base fallback volume".split(" "), y = 0; y < n.length; y++) delete v[n[y]];
            n = t.getCookies(),
            t.foreach(n,
            function(e, t) {
                "undefined" == typeof v[e] && (v[e] = t)
            }),
            n = window.location.href.split("/"),
            n.splice(n.length - 1, 1),
            n = n.join("/"),
            v.base = n + "/",
            s[g] = v,
            t.isMSIE() ? (o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + g + '" name="' + g + '" tabindex="0"><param name="movie" value="' + r.src + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="seamlesstabbing" value="true"><param name="wmode" value="' + m + '"><param name="bgcolor" value="#000000"></object>', e = e.getElementsByTagName("object")[0], e.style.outline = "none") : (e = document.createElement("object"), e.setAttribute("type", "application/x-shockwave-flash"), e.setAttribute("data", r.src), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("bgcolor", "#000000"), e.setAttribute("id", g), e.setAttribute("name", g), e.className = "jwswf", u(e, "allowfullscreen", "true"), u(e, "allowscriptaccess", "always"), u(e, "seamlesstabbing", "true"), u(e, "wmode", m), o.parentNode.replaceChild(e, o)),
            h.config.aspectratio && (e.style.position = "absolute", e.style.left = "0"),
            h.container = e,
            h.setPlayer(e, "flash")
        },
        this.supportsConfig = function() {
            if (f) {
                if (!a) return ! 0;
                if ("string" === t.typeOf(a.playlist)) return ! 0;
                try {
                    var e = a.playlist[0].sources;
                    if ("undefined" == typeof e) return ! 0;
                    for (var i = 0; i < e.length; i++) if (e[i].file && n(e[i].file, e[i].type)) return ! 0
                } catch(s) {}
            }
            return ! 1
        },
        this.destroy = function() {}
    }).getVars = function(e) {
        return s[e]
    };
    var n = e.embed.flashCanPlay = function(e, i) {
        if (t.isYouTube(e, i) || t.isRtmp(e, i) || "hls" === i) return ! 0;
        var s = t.extensionmap[i ? i: t.extension(e)];
        return s ? !!s.flash: !1
    }
} (jwplayer),
function(e) {
    var t, i = e.utils,
    s = i.extensionmap,
    n = e.events;
    e.embed.html5 = function(s, o, r, a, l) {
        function h(e, t, i) {
            return function() {
                try {
                    var n = document.querySelector("#" + s.id + " .jwmain");
                    i && n.appendChild(t),
                    "function" == typeof e.resize && (e.resize(n.clientWidth, n.clientHeight), setTimeout(function() {
                        e.resize(n.clientWidth, n.clientHeight)
                    },
                    400)),
                    t.left = n.style.left,
                    t.top = n.style.top
                } catch(o) {}
            }
        }
        var u = new n.eventdispatcher;
        i.extend(this, u),
        this.embed = function() {
            if (e.html5) {
                a.setupPlugins(l, r, h),
                i.emptyElement(s);
                var t = e.utils.extend({},
                r);
                delete t.volume,
                t = new e.html5.player(t),
                l.setPlayer(t, "html5")
            } else this.loadEmbedder()
        },
        this.loadEmbedder = function() {
            t = t || new i.scriptloader(o.src),
            t.addEventListener(n.ERROR, this.loadError),
            t.addEventListener(n.COMPLETE, this.embed),
            t.load()
        },
        this.loadError = function(e) {
            this.sendEvent(e.type, {
                message: "HTML5 player not found"
            })
        },
        this.supportsConfig = function() {
            if (e.vid.canPlayType) try {
                if ("string" === i.typeOf(r.playlist)) return ! 0;
                for (var t = r.playlist[0].sources, s = 0; s < t.length; s++) if (e.embed.html5CanPlay(t[s].file, t[s].type, r.androidhls)) return ! 0
            } catch(n) {}
            return ! 1
        },
        this.destroy = function() {
            t && (t.resetEventListeners(), t = null)
        }
    },
    e.embed.html5CanPlay = function(t, n, o) {
        if (null !== navigator.userAgent.match(/BlackBerry/i) || i.isIE(9)) return ! 1;
        if (i.isYouTube(t, n)) return ! 0;
        var r = i.extension(t);
        if (n = n || s.extType(r), "hls" === n) if (o) {
            if (o = i.isAndroidNative, o(2) || o(3) || o("4.0")) return ! 1;
            if (i.isAndroid()) return ! 0
        } else if (i.isAndroid()) return ! 1;
        if (i.isRtmp(t, n)) return ! 1;
        if (t = s[n] || s[r], !t || t.flash && !t.html5) return ! 1;
        var a;
        e: if (t = t.html5) {
            try {
                a = !!e.vid.canPlayType(t);
                break e
            } catch(l) {}
            a = !1
        } else a = !0;
        return a
    }
} (jwplayer),
function(e) {
    var t = e.embed,
    i = e.embed.html5CanPlay,
    s = e.utils,
    n = e._,
    o = /\.(js|swf)$/;
    e.cast = e.cast || {},
    e.embed = s.extend(function(i) {
        function n() {
            r = "Adobe SiteCatalyst Error: Could not find Media Module"
        }
        var r, a = s.repo(),
        l = s.extend({},
        e.defaults),
        h = s.extend({},
        l, i.config),
        u = i.config,
        c = h.plugins,
        d = h.analytics,
        p = a + "jwpsrv.js",
        f = a + "sharing.js",
        g = a + "related.js",
        m = a + "gapro.js",
        l = e.key ? e.key: l.key,
        v = new e.utils.key(l).edition(),
        c = c ? c: {};
        switch ("ads" == v && h.advertising && (o.test(h.advertising.client) ? c[h.advertising.client] = h.advertising: c[a + h.advertising.client + ".js"] = h.advertising), delete u.advertising, u.key = l, h.analytics && o.test(h.analytics.client) && (p = h.analytics.client), delete u.analytics, d && !("ads" === v || "enterprise" === v) && delete d.enabled, "free" != v && d && !1 === d.enabled || (c[p] = d ? d: {}), delete c.sharing, delete c.related, v) {
        case "ads":
        case "enterprise":
            if (u.sitecatalyst) try {
                window.s && window.s.hasOwnProperty("Media") ? new e.embed.sitecatalyst(i) : n()
            } catch(y) {
                n()
            }
        case "premium":
            h.related && (o.test(h.related.client) && (g = h.related.client), c[g] = h.related),
            h.ga && (o.test(h.ga.client) && (m = h.ga.client), c[m] = h.ga);
        case "pro":
            h.sharing && (o.test(h.sharing.client) && (f = h.sharing.client), c[f] = h.sharing),
            h.skin && (u.skin = h.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i, s.repo() + "skins/$1.xml"))
        }
        return u.plugins = c,
        i.config = u,
        i = new t(i),
        r && i.errorScreen(r),
        i
    },
    e.embed),
    e.embed.html5CanPlay = function(t, s) {
        var o, r = {
            file: t,
            type: s
        };
        return o = e.html5 && e.html5.chooseProvider ? e.html5.chooseProvider(r) !== e.html5.VideoProvider: n.any(e.unregisteredProviders,
        function(e) {
            return e.supports(r)
        }),
        o ? !0 : i.apply(this, arguments)
    }
} (jwplayer),
function(e) {
    var t = jwplayer.utils;
    e.sitecatalyst = function(e) {
        function i(e) {
            d.debug && t.log(e)
        }
        function n(e) {
            return e = e.split("/"),
            e = e[e.length - 1],
            e = e.split("?"),
            e[0]
        }
        function o() {
            if (!f) {
                f = !0;
                var e = c.getPosition();
                i("stop: " + a + " : " + e),
                s.Media.stop(a, e)
            }
        }
        function r() {
            g || (o(), g = !0, i("close: " + a), s.Media.close(a), u = !0, h = 0)
        }
        var a, l, h, u, c = e,
        d = t.extend({},
        c.config.sitecatalyst),
        p = {
            onPlay: function() {
                if (!u) {
                    var e = c.getPosition();
                    f = !1,
                    i("play: " + a + " : " + e),
                    s.Media.play(a, e)
                }
            },
            onPause: o,
            onBuffer: o,
            onIdle: r,
            onPlaylistItem: function(e) {
                try {
                    u = !0,
                    r(),
                    h = 0;
                    var i;
                    if (d.mediaName) i = d.mediaName;
                    else {
                        var s = c.getPlaylistItem(e.index);
                        i = s.title ? s.title: s.file ? n(s.file) : s.sources && s.sources.length ? n(s.sources[0].file) : ""
                    }
                    a = i,
                    l = d.playerName ? d.playerName: c.id
                } catch(o) {
                    t.log(o)
                }
            },
            onTime: function() {
                if (u) {
                    var e = c.getDuration();
                    if ( - 1 == e) return;
                    g = f = u = !1,
                    i("open: " + a + " : " + e + " : " + l),
                    s.Media.open(a, e, l),
                    i("play: " + a + " : 0"),
                    s.Media.play(a, 0)
                }
                if (e = c.getPosition(), 3 <= Math.abs(e - h)) {
                    var t = h;
                    i("seek: " + t + " to " + e),
                    i("stop: " + a + " : " + t),
                    s.Media.stop(a, t),
                    i("play: " + a + " : " + e),
                    s.Media.play(a, e)
                }
                h = e
            },
            onComplete: r
        },
        f = !0,
        g = !0;
        t.foreach(p,
        function(e) {
            c[e](p[e])
        })
    }
} (jwplayer.embed),
function(e) {
    function t(e, t) {
        e[t] && (e[t] = i.getAbsolutePath(e[t]))
    }
    var i = e.utils,
    s = e._,
    n = window.location.href;
    e.cast.setupCastConfig = function(s, o) {
        var r = i.extend({},
        s.config);
        r.cast = i.extend({
            pageUrl: n
        },
        o);
        for (var a = "base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar events".split(" "), l = a.length; l--;) delete r[a[l]];
        a = r.plugins,
        delete r.plugins;
        for (var h in a) if (a.hasOwnProperty(h)) {
            var u = a[h];
            if (u.client && (/[\.\/]/.test(u.client) && t(u, "client"), -1 < u.client.indexOf("vast"))) {
                if (l = r, u = i.extend({},
                u), u.client = "vast", delete u.companiondiv, u.schedule) {
                    var c = void 0;
                    for (c in u.schedule) u.schedule.hasOwnProperty(c) && t(u.schedule[c].ad || u.schedule[c], "tag")
                }
                t(u, "tag"),
                l.advertising = u
            }
        }
        return s.position && (r.position = s.position),
        0 < s.item && (r.item = s.item),
        r.captionLabel = i.getCookies().captionLabel,
        r.playerVersion = e.version,
        r
    },
    e.cast.setupFlashCastConfig = function(t) {
        var n = t.config;
        n.playlist = t.getPlaylist();
        var o;
        return (o = s.find(n.plugins,
        function(e, t) {
            return 0 < t.indexOf("vast.js")
        })) ? (o.client = "vast", o = {
            advertising: o
        }) : o = {},
        n = s.pick(n, "id captionLabel cast key playlist repeat".split(" ")),
        n.cast.pageUrl = window.location.href,
        i.extend(n, {
            playerVersion: e.version,
            captionLabel: i.getCookies().captionLabel,
            volume: t.getVolume(),
            mute: t.getMute(),
            id: t.id,
            position: t.getPosition(),
            item: t.getPlaylistIndex()
        },
        o),
        n
    }
} (window.jwplayer),
function(e, t) {
    function i(e, t) {
        e[t] && (e[t] = n.getAbsolutePath(e[t]))
    }
    var s = t.cast,
    n = t.utils,
    o = t.events,
    r = o.state,
    a = {};
    s.NS = "urn:x-cast:com.longtailvideo.jwplayer",
    s.debug = !1,
    s.availability = null,
    s.available = function(t) {
        t = t || s.availability;
        var i = e.chrome,
        n = "available";
        return i.cast && i.cast.ReceiverAvailability && (n = i.cast.ReceiverAvailability.AVAILABLE),
        t === n
    },
    s.controller = function(l, h) {
        function u(e, t) {
            s.log("send command", e, t);
            var i = {
                command: e
            };
            void 0 !== t && (i.args = t),
            N.sendMessage(s.NS, i, I,
            function(e) {
                s.log("error message", e),
                "Invalid namespace" === e.description && y()
            })
        }
        function c(e) {
            e = !!s.available(e.availability),
            O.available !== e && (O.available = e, g(o.JWPLAYER_CAST_AVAILABLE))
        }
        function d(e) {
            s.log("existing session", e),
            !N && !W && (W = e.session, W.addMessageListener(s.NS, p))
        }
        function p(e, i) {
            var n = JSON.parse(i);
            if (!n) throw "Message not proper JSON";
            if (n.reconcile) {
                W.removeMessageListener(s.NS, p);
                var r = n.diff,
                a = W;
                r.id && n.appid && n.pageUrl || (r.id = t().id, n.appid = R.appid, n.pageUrl = j, W = N = null),
                r.id === l.id && n.appid === R.appid && n.pageUrl === j && (N || (l.jwInstreamState() && l.jwInstreamDestroy(!0), w(a), h.sendEvent(o.JWPLAYER_PLAYER_STATE, {
                    oldstate: r.oldstate,
                    newstate: r.newstate
                })), S(n)),
                W = null
            }
        }
        function f(e) {
            O.active = !!e,
            e = O;
            var t;
            t = N && N.receiver ? N.receiver.friendlyName: "",
            e.deviceName = t,
            g(o.JWPLAYER_CAST_SESSION, {})
        }
        function g(e) {
            var t = n.extend({},
            O);
            h.sendEvent(e, t)
        }
        function m(t) {
            var i = e.chrome;
            t.code !== i.cast.ErrorCode.CANCEL && (s.log("Cast Session Error:", t, N), t.code === i.cast.ErrorCode.SESSION_ERROR && y());
        }
        function v(t) {
            var i = e.chrome;
            t.code !== i.cast.ErrorCode.CANCEL && (s.log("Cast Session Error:", t, N), t.code === i.cast.ErrorCode.SESSION_ERROR && y())
        }
        function y() {
            N ? (E(), N.stop(P, _), A({
                item: 0
            }), S({
                type: "state",
                diff: {
                    buffer: 0,
                    position: 0,
                    duration: 0
                }
            })) : P()
        }
        function _(e) {
            s.error("Cast Session Stop error:", e, N),
            P()
        }
        function w(i) {
            if (s.log("Session started:", i), N) y(),
            B = i;
            else {
                N = i,
                N.addMessageListener(s.NS, C),
                N.addUpdateListener(b),
                l.jwPause(!0),
                l.jwSetFullscreen(!1),
                F = h.getVideo(),
                M = h.volume,
                L = h.mute,
                V = new s.provider(u),
                V.init(),
                h.setVideoProvider(V),
                l.jwPlay = function(e) { ! 1 === e ? V.pause() : V.play()
                },
                l.jwPause = function(e) {
                    l.jwPlay( !! e)
                },
                l.jwLoad = function(e) {
                    "number" === n.typeOf(e) && h.setItem(e),
                    V.load(e)
                },
                l.jwPlaylistItem = function(e) {
                    "number" === n.typeOf(e) && h.setItem(e),
                    V.playlistItem(e)
                },
                l.jwPlaylistNext = function() {
                    l.jwPlaylistItem(h.item + 1)
                },
                l.jwPlaylistPrev = function() {
                    l.jwPlaylistItem(h.item - 1)
                },
                l.jwSetVolume = function(e) {
                    n.exists(e) && (e = 0 | Math.min(Math.max(0, e), 100), T(e) && (e = Math.max(0, Math.min(e / 100, 1)), N.setReceiverVolumeLevel(e, x,
                    function(e) {
                        s.error("set volume error", e),
                        x()
                    })))
                },
                l.jwSetMute = function(e) {
                    n.exists(e) || (e = !D.mute),
                    k(e) && N.setReceiverMuted( !! e, x,
                    function(e) {
                        s.error("set muted error", e),
                        x()
                    })
                },
                l.jwGetVolume = function() {
                    return 0 | D.volume
                },
                l.jwGetMute = function() {
                    return !! D.mute
                },
                l.jwIsBeforePlay = function() {
                    return ! 1
                };
                var a = l.jwSetCurrentCaptions;
                l.jwSetCurrentCaptions = function(e) {
                    a(e),
                    V.sendCommand("caption", e)
                },
                l.jwSkipAd = function(e) {
                    z && (z.skipAd(e), e = z.getAdModel(), e.complete = !0, h.sendEvent(o.JWPLAYER_CAST_AD_CHANGED, e))
                },
                l.jwClickAd = function(i) {
                    if (z && 300 < z.timeSinceClick() && (z.clickAd(i), h.state !== r.PAUSED)) {
                        var s = {
                            tag: i.tag
                        };
                        i.sequence && (s.sequence = i.sequence),
                        i.podcount && (s.podcount = i.podcount),
                        t(l.id).dispatchEvent(o.JWPLAYER_AD_CLICK, s),
                        e.open(i.clickthrough)
                    }
                },
                l.jwPlayAd = l.jwPauseAd = l.jwSetControls = l.jwForceState = l.jwReleaseState = l.jwSetFullscreen = l.jwDetachMedia = l.jwAttachMedia = I;
                var c = t(l.id).plugins;
                c.vast && c.vast.jwPauseAd !== I && (H = {
                    jwPlayAd: c.vast.jwPlayAd,
                    jwPauseAd: c.vast.jwPauseAd
                },
                c.vast.jwPlayAd = c.vast.jwPauseAd = I),
                x(),
                f(!0),
                i !== W && (V.setup(t.cast.setupCastConfig(h, R), h), t.cast.loader.sendDummyMedia(i))
            }
        }
        function b(e) {
            s.log("Cast Session status", e),
            e ? x() : (V.sendEvent(o.JWPLAYER_PLAYER_STATE, {
                oldstate: h.state,
                newstate: r.BUFFERING
            }), P())
        }
        function P() {
            if (s.log("_sessionStopped"), N && (E(), N = null), F) {
                delete l.jwSkipAd,
                delete l.jwClickAd,
                l.initializeAPI();
                var e = t(l.id).plugins;
                e.vast && n.extend(e.vast, H),
                h.volume = M,
                h.mute = L,
                h.setVideoProvider(F),
                h.duration = 0,
                V && (V.destroy(), V = null),
                z && (z.destroy(), z = null),
                h.state !== r.IDLE ? n.isIPad() || n.isIPod() ? (l.jwStop(!0), F.sendEvent(o.JWPLAYER_PLAYER_STATE, {
                    oldstate: r.BUFFERING,
                    newstate: r.IDLE
                })) : (h.state = r.IDLE, l.jwPlay(!0), l.jwSeek(h.position)) : F.sendEvent(o.JWPLAYER_PLAYER_STATE, {
                    oldstate: r.BUFFERING,
                    newstate: r.IDLE
                }),
                F = null
            }
            f(!1),
            null !== B && (w(B), B = null)
        }
        function E() {
            N.removeUpdateListener(b),
            N.removeMessageListener(s.NS, C)
        }
        function C(e, t) {
            var i = JSON.parse(t);
            if (!i) throw "Message not proper JSON";
            S(i)
        }
        function S(e) {
            if ("state" === e.type) z && (e.diff.newstate || e.diff.position) && (z.destroy(), z = null, h.setVideoProvider(V), h.sendEvent(o.JWPLAYER_CAST_AD_CHANGED, {
                done: !0
            })),
            V.updateModel(e.diff, e.type),
            A(e.diff);
            else if ("ad" === e.type) {
                null === z && (z = new s.adprovider(s.NS, N), z.init(), h.setVideoProvider(z)),
                z.updateModel(e.diff, e.type);
                var t = z.getAdModel();
                e.diff.clickthrough && (t.onClick = l.jwClickAd),
                e.diff.skipoffset && (t.onSkipAd = l.jwSkipAd),
                h.sendEvent(o.JWPLAYER_CAST_AD_CHANGED, t),
                e.diff.complete && z.resetAdModel()
            } else "connection" === e.type ? !0 === e.closed && y() : s.error("received unhandled message", e.type, e)
        }
        function A(e) {
            void 0 !== e.item && h.item !== e.item && (h.item = e.item, h.sendEvent(o.JWPLAYER_PLAYLIST_ITEM, {
                index: h.item
            }))
        }
        function x() {
            if (N && N.receiver) {
                var e = N.receiver.volume;
                if (e) {
                    var t = 100 * e.level | 0;
                    k( !! e.muted),
                    T(t)
                }
            }
        }
        function T(e) {
            var t = D.volume !== e;
            return t && (D.volume = e, V.sendEvent(o.JWPLAYER_MEDIA_VOLUME, {
                volume: e
            })),
            t
        }
        function k(e) {
            var t = D.mute !== e;
            return t && (D.mute = e, V.sendEvent(o.JWPLAYER_MEDIA_MUTE, {
                mute: e
            })),
            t
        }
        function I() {}
        var M, L, R, N = null,
        O = {
            available: !1,
            active: !1,
            deviceName: ""
        },
        D = {
            volume: null,
            mute: null
        },
        j = n.getAbsolutePath(e.location.href),
        V = null,
        z = null,
        F = null;
        M = h.volume,
        L = h.mute;
        var W = null,
        B = null,
        H = null;
        R = n.extend({},
        a, h.cast),
        i(R, "loadscreen"),
        i(R, "endscreen"),
        i(R, "logo"),
        !R.appid || e.cast && e.cast.receiver || (s.loader.addEventListener("availability", c), s.loader.addEventListener("session", d), s.loader.initialize(R.appid)),
        this.startCasting = function() {
            N || l.jwInstreamState() || e.chrome.cast.requestSession(w, m)
        },
        this.stopCasting = y,
        this.openExtension = function() {
            l.jwInstreamState() || e.chrome.cast.requestSession(w, v)
        }
    },
    s.log = function() {
        if (s.debug) {
            var e = Array.prototype.slice.call(arguments, 0);
            console.log.apply(console, e)
        }
    },
    s.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        console.error.apply(console, e)
    }
} (window, jwplayer),
function(e) {
    function t(e) {
        v.log("existing session", e),
        !m && !f && (f = e.session, f.addMessageListener(v.NS, i))
    }
    function i(t, s) {
        var n = JSON.parse(s),
        o = f;
        if (!n) throw "Message not proper JSON";
        n.reconcile && (f.removeMessageListener(v.NS, i), n.receiverFriendlyName = f.receiver.friendlyName, n.pageUrl && n.diff.id && n.appid || (n.pageUrl = E, n.diff.id = e().id, n.appid = p, f = m = null), b[n.diff.id] && p === n.appid && n.pageUrl === E && (d = n.diff.id, p = n.appid, u(d, "jwInstreamDestroy"), r(o), u(d, P.message, n), f = null))
    }
    function s() {
        m && (m.removeUpdateListener(h), m.removeMessageListener(v.NS, a), m.stop(n.bind(this), l.bind(this)), m = null),
        u(d, P.cleanup)
    }
    function n() {
        "undefined" != typeof g && null !== g && (r(g), g = null)
    }
    function o(e, t) {
        m.sendMessage(v.NS, {
            command: e,
            args: t
        },
        y.noop,
        function(e) {
            v.error("message send error", e)
        })
    }
    function r(t) {
        var i = e(d);
        m ? (s(), g = t) : (m = t, m.addMessageListener(v.NS, a), m.addUpdateListener(h), i = e.cast.setupFlashCastConfig(i), f !== m && (o("setup", i), e.cast.loader.sendDummyMedia(m)), u(d, P.connected, {
            receiverFriendlyName: t.receiver.friendlyName
        }))
    }
    function a(e, t) {
        if (t) {
            var i = JSON.parse(t);
            if (!i) throw "Message not proper JSON";
            u(d, P.message, i)
        }
    }
    function l(e) {
        u(d, P.error, e || {})
    }
    function h(e) {
        e ? c() : s()
    }
    function u(t, i, s) {
        s ? e(t).callInternal(i, s) : e(t).callInternal(i)
    }
    function c() {
        if (m && m.receiver) {
            var t = m.receiver.volume;
            if (t) {
                var i = 100 * t.level | 0,
                t = !!t.muted;
                e(d).setVolume(i).setMute(t)
            }
        }
    }
    var d, p, f, g, m, v = e.cast,
    y = e.utils,
    _ = e._,
    w = window.chrome || {},
    b = {},
    P = {},
    E = y.getAbsolutePath(window.location.href);
    v.NS = "urn:x-cast:com.longtailvideo.jwplayer",
    v.flash = {
        checkAvailability: function(e, i, s) {
            P = s,
            p = i,
            b[e] = !0,
            v.loader.addEventListener("availability",
            function(t) {
                "available" === t.availability && u(e, P.available, t)
            }),
            v.loader.addEventListener("session", t),
            v.loader.initialize(i)
        },
        startCasting: function(e) {
            d = e,
            w.cast.requestSession(r.bind(this), l.bind(this))
        },
        stopCasting: s,
        openExtension: function(e) {
            d = e,
            w.cast.requestSession(r.bind(this), l.bind(this))
        },
        mute: function(e) {
            m.setReceiverMuted(e, c,
            function(e) {
                v.error("set muted error", e)
            })
        },
        volume: function(e) {
            e = Math.max(0, Math.min(e / 100, 1)),
            m.setReceiverVolumeLevel(e, c,
            function(e) {
                v.error("set volume error", e)
            })
        },
        messageReceiver: o,
        canCastItem: function(t) {
            return _.any(t.levels,
            function(t) {
                return e.embed.html5CanPlay(t.file, t.type) || "hls" === t.type
            })
        }
    }
} (window.jwplayer),
function(e, t) {
    function i(e) {
        var i = new t.cast.media.MediaInfo("");
        i.contentType = "video/mp4",
        i = new t.cast.media.LoadRequest(i),
        i.autoplay = !1,
        e.loadMedia(i)
    }
    function s() {
        t && t.cast && t.cast.isAvailable && !u.apiConfig ? (u.apiConfig = new t.cast.ApiConfig(new t.cast.SessionRequest(f), a, l, t.cast.AutoJoinPolicy.ORIGIN_SCOPED), t.cast.initialize(u.apiConfig, r, o)) : 15 > p++&&setTimeout(s, 1e3)
    }
    function n() {
        h && (h.resetEventListeners(), h = null)
    }
    function o() {
        u.apiConfig = null
    }
    function r() {}
    function a(e) {
        g.sendEvent("session", {
            session: e
        }),
        e.sendMessage(u.NS, {
            whoami: 1
        }),
        0 === e.media.length && i(e)
    }
    function l(e) {
        u.availability = e,
        g.sendEvent("availability", {
            availability: e
        })
    }
    window.chrome = t;
    var h, u = e.cast,
    c = e.utils,
    d = e.events,
    p = 0,
    f = null,
    g = c.extend({
        initialize: function(e) {
            f = e,
            null !== u.availability ? g.sendEvent("availability", {
                availability: u.availability
            }) : t && t.cast ? s() : h || (h = new c.scriptloader("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"), h.addEventListener(d.ERROR, n), h.addEventListener(d.COMPLETE, s), h.load())
        }
    },
    new d.eventdispatcher("cast.loader"));
    e.cast.loader = g,
    e.cast.loader.sendDummyMedia = i
} (window.jwplayer, window.chrome || {}),
function(e, t) {
    var i = [],
    s = e.utils,
    n = e.events,
    o = e._,
    r = 0,
    a = n.state,
    l = "getBuffer getCaptionsList getControls getCurrentCaptions getCurrentQuality getCurrentAudioTrack getDuration getFullscreen getHeight getLockState getMute getPlaylistIndex getSafeRegion getPosition getQualityLevels getState getVolume getWidth isBeforeComplete isBeforePlay releaseState".split(" "),
    h = "playlistNext stop forceState playlistPrev seek setCurrentCaptions setControls setCurrentQuality setVolume setCurrentAudioTrack".split(" "),
    u = {
        onBufferChange: n.JWPLAYER_MEDIA_BUFFER,
        onBufferFull: n.JWPLAYER_MEDIA_BUFFER_FULL,
        onError: n.JWPLAYER_ERROR,
        onSetupError: n.JWPLAYER_SETUP_ERROR,
        onFullscreen: n.JWPLAYER_FULLSCREEN,
        onMeta: n.JWPLAYER_MEDIA_META,
        onMute: n.JWPLAYER_MEDIA_MUTE,
        onPlaylist: n.JWPLAYER_PLAYLIST_LOADED,
        onPlaylistItem: n.JWPLAYER_PLAYLIST_ITEM,
        onPlaylistComplete: n.JWPLAYER_PLAYLIST_COMPLETE,
        onReady: n.API_READY,
        onResize: n.JWPLAYER_RESIZE,
        onComplete: n.JWPLAYER_MEDIA_COMPLETE,
        onSeek: n.JWPLAYER_MEDIA_SEEK,
        onTime: n.JWPLAYER_MEDIA_TIME,
        onVolume: n.JWPLAYER_MEDIA_VOLUME,
        onBeforePlay: n.JWPLAYER_MEDIA_BEFOREPLAY,
        onBeforeComplete: n.JWPLAYER_MEDIA_BEFORECOMPLETE,
        onDisplayClick: n.JWPLAYER_DISPLAY_CLICK,
        onControls: n.JWPLAYER_CONTROLS,
        onQualityLevels: n.JWPLAYER_MEDIA_LEVELS,
        onQualityChange: n.JWPLAYER_MEDIA_LEVEL_CHANGED,
        onCaptionsList: n.JWPLAYER_CAPTIONS_LIST,
        onCaptionsChange: n.JWPLAYER_CAPTIONS_CHANGED,
        onAdError: n.JWPLAYER_AD_ERROR,
        onAdClick: n.JWPLAYER_AD_CLICK,
        onAdImpression: n.JWPLAYER_AD_IMPRESSION,
        onAdTime: n.JWPLAYER_AD_TIME,
        onAdComplete: n.JWPLAYER_AD_COMPLETE,
        onAdCompanions: n.JWPLAYER_AD_COMPANIONS,
        onAdSkipped: n.JWPLAYER_AD_SKIPPED,
        onAdPlay: n.JWPLAYER_AD_PLAY,
        onAdPause: n.JWPLAYER_AD_PAUSE,
        onAdMeta: n.JWPLAYER_AD_META,
        onCast: n.JWPLAYER_CAST_SESSION,
        onAudioTrackChange: n.JWPLAYER_AUDIO_TRACK_CHANGED,
        onAudioTracks: n.JWPLAYER_AUDIO_TRACKS
    },
    c = {
        onBuffer: a.BUFFERING,
        onPause: a.PAUSED,
        onPlay: a.PLAYING,
        onIdle: a.IDLE
    };
    e.api = function(r) {
        function d(e, t) {
            s.foreach(e,
            function(e, i) {
                _[e] = function(e) {
                    return t(i, e)
                }
            })
        }
        function p(e, t) {
            var i = "jw" + t.charAt(0).toUpperCase() + t.slice(1);
            _[t] = function() {
                var t = m.apply(this, [i].concat(Array.prototype.slice.call(arguments, 0)));
                return e ? _: t
            }
        }
        function f(e, t) {
            try {
                e.jwAddEventListener(t, 'function(dat) { jwplayer("' + _.id + '").dispatchEvent("' + t + '", dat); }')
            } catch(i) {
                if ("flash" === _.renderingMode) {
                    var n = document.createElement("a");
                    n.href = v.data,
                    n.protocol !== location.protocol && s.log("Warning: Your site [" + location.protocol + "] and JWPlayer [" + n.protocol + "] are hosted using different protocols")
                }
                s.log("Could not add internal listener")
            }
        }
        function g(e, t) {
            return w[e] || (w[e] = [], v && P && f(v, e)),
            w[e].push(t),
            _
        }
        function m() {
            if (P) {
                if (v) {
                    var e = Array.prototype.slice.call(arguments, 0),
                    t = e.shift();
                    if ("function" == typeof v[t]) {
                        switch (e.length) {
                        case 6:
                            return v[t](e[0], e[1], e[2], e[3], e[4], e[5]);
                        case 5:
                            return v[t](e[0], e[1], e[2], e[3], e[4]);
                        case 4:
                            return v[t](e[0], e[1], e[2], e[3]);
                        case 3:
                            return v[t](e[0], e[1], e[2]);
                        case 2:
                            return v[t](e[0], e[1]);
                        case 1:
                            return v[t](e[0])
                        }
                        return v[t]()
                    }
                }
                return null
            }
            E.push(arguments)
        }
        var v, y, _ = this,
        w = {},
        b = {},
        P = !1,
        E = [],
        C = {},
        S = {};
        return _.container = r,
        _.id = r.id,
        _.setup = function(t) {
            if (e.embed) {
                e.api.destroyPlayer(_.id);
                var i = new e.api(_.container);
                return e.api.addPlayer(i),
                i.config = t,
                i._embedder = new e.embed(i),
                i._embedder.embed(),
                i
            }
            return _
        },
        _.getContainer = function() {
            return _.container
        },
        _.addButton = function(e, t, i, n) {
            try {
                S[n] = i,
                m("jwDockAddButton", e, t, 'jwplayer("' + _.id + '").callback("' + n + '")', n)
            } catch(o) {
                s.log("Could not add dock button" + o.message)
            }
        },
        _.removeButton = function(e) {
            m("jwDockRemoveButton", e)
        },
        _.callback = function(e) {
            S[e] && S[e]()
        },
        _.getMeta = function() {
            return _.getItemMeta()
        },
        _.getPlaylist = function() {
            var e = m("jwGetPlaylist");
            return "flash" === _.renderingMode && s.deepReplaceKeyName(e, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]),
            e
        },
        _.getPlaylistItem = function(e) {
            return s.exists(e) || (e = _.getPlaylistIndex()),
            _.getPlaylist()[e]
        },
        _.getRenderingMode = function() {
            return _.renderingMode
        },
        _.setFullscreen = function(e) {
            return s.exists(e) ? m("jwSetFullscreen", e) : m("jwSetFullscreen", !m("jwGetFullscreen")),
            _
        },
        _.setMute = function(e) {
            return s.exists(e) ? m("jwSetMute", e) : m("jwSetMute", !m("jwGetMute")),
            _
        },
        _.lock = function() {
            return _
        },
        _.unlock = function() {
            return _
        },
        _.load = function(t) {
            return m("jwInstreamDestroy"),
            e(_.id).plugins.googima && m("jwDestroyGoogima"),
            m("jwLoad", t),
            _
        },
        _.playlistItem = function(e) {
            return m("jwPlaylistItem", parseInt(e, 10)),
            _
        },
        _.resize = function(e, t) {
            if ("flash" !== _.renderingMode) m("jwResize", e, t);
            else {
                var i = document.getElementById(_.id + "_wrapper"),
                n = document.getElementById(_.id + "_aspect");
                n && (n.style.display = "none"),
                i && (i.style.display = "block", i.style.width = s.styleDimension(e), i.style.height = s.styleDimension(t))
            }
            return _
        },
        _.play = function(e) {
            if (e !== t) return m("jwPlay", e),
            _;
            e = _.getState();
            var i = y && y.getState();
            return i && m(i === a.IDLE || i === a.PLAYING || i === a.BUFFERING ? "jwInstreamPause": "jwInstreamPlay"),
            m(e === a.PLAYING || e === a.BUFFERING ? "jwPause": "jwPlay"),
            _
        },
        _.pause = function(e) {
            return e === t ? (e = _.getState(), m(e === a.PLAYING || e === a.BUFFERING ? "jwPause": "jwPlay")) : m("jwPause", e),
            _
        },
        _.createInstream = function() {
            return new e.api.instream(this, v)
        },
        _.setInstream = function(e) {
            return y = e
        },
        _.loadInstream = function(e, t) {
            return y = _.setInstream(_.createInstream()).init(t),
            y.loadItem(e),
            y
        },
        _.destroyPlayer = function() {
            P = !0,
            m("jwPlayerDestroy")
        },
        _.playAd = function(t) {
            var i = e(_.id).plugins;
            i.vast ? i.vast.jwPlayAd(t) : m("jwPlayAd", t)
        },
        _.pauseAd = function() {
            var t = e(_.id).plugins;
            t.vast ? t.vast.jwPauseAd() : m("jwPauseAd")
        },
        d(c,
        function(e, t) {
            return b[e] || (b[e] = [], g(n.JWPLAYER_PLAYER_STATE,
            function(t) {
                var i = t.newstate;
                if (t = t.oldstate, i === e) {
                    var s = b[i];
                    if (s) for (var n = 0; n < s.length; n++) {
                        var o = s[n];
                        "function" == typeof o && o.call(this, {
                            oldstate: t,
                            newstate: i
                        })
                    }
                }
            })),
            b[e].push(t),
            _
        }),
        d(u, g),
        s.foreach(l,
        function(e, t) {
            p(!1, t)
        }),
        s.foreach(h,
        function(e, t) {
            p(!0, t)
        }),
        _.remove = function() {
            this._embedder && this._embedder.destroy && this._embedder.destroy(),
            E = [];
            var e = 1 < o.size(o.where(i, {
                id: _.id
            }));
            e || s.clearCss("#" + _.id);
            var t = document.getElementById(_.id + ("flash" === _.renderingMode ? "_wrapper": ""));
            if (t) {
                if ("html5" === _.renderingMode) _.destroyPlayer();
                else if (s.isMSIE(8)) {
                    var n = document.getElementById(_.id);
                    if (n && n.parentNode) {
                        n.style.display = "none";
                        for (var r in n)"function" == typeof n[r] && (n[r] = null);
                        n.parentNode.removeChild(n)
                    }
                }
                e || (e = document.createElement("div"), e.id = _.id, t.parentNode.replaceChild(e, t))
            }
            i = o.filter(i,
            function(e) {
                return e.uniqueId !== _.uniqueId
            })
        },
        _.registerPlugin = function(t, i, s, n) {
            e.plugins.registerPlugin(t, i, s, n)
        },
        _.setPlayer = function(e, t) {
            v = e,
            _.renderingMode = t
        },
        _.detachMedia = function() {
            return "html5" === _.renderingMode ? m("jwDetachMedia") : void 0
        },
        _.attachMedia = function(e) {
            return "html5" === _.renderingMode ? m("jwAttachMedia", e) : void 0
        },
        _.getAudioTracks = function() {
            return m("jwGetAudioTracks")
        },
        _.removeEventListener = function(e, t) {
            var i = w[e];
            if (i) for (var s = i.length; s--;) i[s] === t && i.splice(s, 1)
        },
        _.dispatchEvent = function(e, t) {
            var i = w[e];
            if (i) for (var i = i.slice(0), o = s.translateEventResponse(e, t), r = 0; r < i.length; r++) {
                var a = i[r];
                if ("function" == typeof a) try {
                    e === n.JWPLAYER_PLAYLIST_LOADED && s.deepReplaceKeyName(o.playlist, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]),
                    a.call(this, o)
                } catch(l) {
                    s.log("There was an error calling back an event handler", l)
                }
            }
        },
        _.dispatchInstreamEvent = function(e) {
            y && y.dispatchEvent(e, arguments)
        },
        _.callInternal = m,
        _.playerReady = function(e) {
            for (P = !0, v || _.setPlayer(document.getElementById(e.id)), _.container = document.getElementById(_.id), s.foreach(w,
            function(e) {
                f(v, e)
            }), g(n.JWPLAYER_PLAYLIST_ITEM,
            function() {
                C = {}
            }), g(n.JWPLAYER_MEDIA_META,
            function(e) {
                s.extend(C, e.metadata)
            }), g(n.JWPLAYER_VIEW_TAB_FOCUS,
            function(e) {
                var t = _.getContainer(); ! 0 === e.hasFocus ? s.addClass(t, "jw-tab-focus") : s.removeClass(t, "jw-tab-focus")
            }), _.dispatchEvent(n.API_READY); 0 < E.length;) m.apply(_, E.shift())
        },
        _.getItemMeta = function() {
            return C
        },
        _
    },
    e.playerReady = function(t) {
        var i = e.api.playerById(t.id);
        i || (i = e.api.selectPlayer(t.id)),
        i.playerReady(t)
    },
    e.api.selectPlayer = function(t) {
        var n;
        return s.exists(t) || (t = 0),
        t.nodeType ? n = t: "string" == typeof t && (n = document.getElementById(t)),
        n ? (t = e.api.playerById(n.id)) ? t: new e.api(n) : "number" == typeof t ? i[t] : null
    },
    e.api.playerById = function(e) {
        for (var t = 0; t < i.length; t++) if (i[t].id === e) return i[t];
        return null
    },
    e.api.addPlayer = function(e) {
        for (var t = 0; t < i.length; t++) if (i[t] === e) return e;
        return r++,
        e.uniqueId = r,
        i.push(e),
        e
    },
    e.api.destroyPlayer = function(e) {
        e = o.where(i, {
            id: e
        }),
        o.each(e, o.partial(o.result, o, "remove"))
    }
} (window.jwplayer),
function(e) {
    var t = e.events,
    i = e.utils,
    s = t.state;
    e.api.instream = function(e, n) {
        function o(t, i) {
            return h[t] || (h[t] = [], n.jwInstreamAddEventListener(t, 'function(dat) { jwplayer("' + e.id + '").dispatchInstreamEvent("' + t + '", dat); }')),
            h[t].push(i),
            this
        }
        function r(e, i) {
            return u[e] || (u[e] = [], o(t.JWPLAYER_PLAYER_STATE,
            function(t) {
                var i = t.newstate,
                s = t.oldstate;
                if (i === e) {
                    var n = u[i];
                    if (n) for (var o = 0; o < n.length; o++) {
                        var r = n[o];
                        "function" == typeof r && r.call(this, {
                            oldstate: s,
                            newstate: i,
                            type: t.type
                        })
                    }
                }
            })),
            u[e].push(i),
            this
        }
        var a, l, h = {},
        u = {},
        c = this;
        c.type = "instream",
        c.init = function() {
            return e.callInternal("jwInitInstream"),
            c
        },
        c.loadItem = function(t, s) {
            a = t,
            l = s || {},
            "array" === i.typeOf(t) ? e.callInternal("jwLoadArrayInstream", a, l) : e.callInternal("jwLoadItemInstream", a, l)
        },
        c.removeEvents = function() {
            h = u = {}
        },
        c.removeEventListener = function(e, t) {
            var i = h[e];
            if (i) for (var s = i.length; s--;) i[s] === t && i.splice(s, 1)
        },
        c.dispatchEvent = function(e, t) {
            var s = h[e];
            if (s) for (var s = s.slice(0), n = i.translateEventResponse(e, t[1]), o = 0; o < s.length; o++) {
                var r = s[o];
                "function" == typeof r && r.call(this, n)
            }
        },
        c.onError = function(e) {
            return o(t.JWPLAYER_ERROR, e)
        },
        c.onMediaError = function(e) {
            return o(t.JWPLAYER_MEDIA_ERROR, e)
        },
        c.onFullscreen = function(e) {
            return o(t.JWPLAYER_FULLSCREEN, e)
        },
        c.onMeta = function(e) {
            return o(t.JWPLAYER_MEDIA_META, e)
        },
        c.onMute = function(e) {
            return o(t.JWPLAYER_MEDIA_MUTE, e)
        },
        c.onComplete = function(e) {
            return o(t.JWPLAYER_MEDIA_COMPLETE, e)
        },
        c.onPlaylistComplete = function(e) {
            return o(t.JWPLAYER_PLAYLIST_COMPLETE, e)
        },
        c.onPlaylistItem = function(e) {
            return o(t.JWPLAYER_PLAYLIST_ITEM, e)
        },
        c.onTime = function(e) {
            return o(t.JWPLAYER_MEDIA_TIME, e)
        },
        c.onBuffer = function(e) {
            return r(s.BUFFERING, e)
        },
        c.onPause = function(e) {
            return r(s.PAUSED, e)
        },
        c.onPlay = function(e) {
            return r(s.PLAYING, e)
        },
        c.onIdle = function(e) {
            return r(s.IDLE, e)
        },
        c.onClick = function(e) {
            return o(t.JWPLAYER_INSTREAM_CLICK, e)
        },
        c.onInstreamDestroyed = function(e) {
            return o(t.JWPLAYER_INSTREAM_DESTROYED, e)
        },
        c.onAdSkipped = function(e) {
            return o(t.JWPLAYER_AD_SKIPPED, e)
        },
        c.play = function(e) {
            n.jwInstreamPlay(e)
        },
        c.pause = function(e) {
            n.jwInstreamPause(e)
        },
        c.hide = function() {
            e.callInternal("jwInstreamHide")
        },
        c.destroy = function() {
            c.removeEvents(),
            e.callInternal("jwInstreamDestroy")
        },
        c.setText = function(e) {
            n.jwInstreamSetText(e ? e: "")
        },
        c.getState = function() {
            return n.jwInstreamState()
        },
        c.setClick = function(e) {
            n.jwInstreamClick && n.jwInstreamClick(e)
        }
    }
} (jwplayer),
function(e) {
    var t = e.api,
    i = t.selectPlayer,
    s = e._;
    t.selectPlayer = function(t) {
        var s = i.apply(this, arguments);
        return s ? s: {
            registerPlugin: function(t, i, s) {
                "jwpsrv" !== t && e.plugins.registerPlugin(t, i, s)
            }
        }
    },
    e.unregisteredProviders = [],
    t.registerProvider = function(t) {
        e && e.html5 && s.isFunction(e.html5.registerProvider) ? e.html5.registerProvider(t) : e.unregisteredProviders.push(t)
    }
} (jwplayer)),
define("jwplayer",
function(e) {
    return function() {
        var t;
        return t || e.jwplayer
    }
} (this)),
define("video-player/VideoTypes", {
    JW_PLATFORM: "JW Platform"
}),
define("video-player/VideoPlayerEvent", {
    PLAYING: "PLAYING",
    PAUSED: "PAUSED",
    IDLE: "IDLE",
    BUFFERING: "BUFFERING",
    COMPLETE: "COMPLETE",
    TIME: "TIME",
    SEEK: "SEEK",
    BUFFER_CHANGE: "BUFFER_CHANGE",
    DISPLAY_CLICK: "DISPLAY_CLICK",
    RESIZE: "RESIZE",
    VOLUME: "VOLUME",
    MUTE: "MUTE",
    QUALITY_LEVELS: "QUALITY_LEVELS",
    QUALITY_CHANGE: "QUALITY_CHANGE",
    READY: "ready",
    VIDEO_READY: "videoReady",
    VIDEO_LOADED: "videoLoaded"
}),
define("video-player/VideoPlayerView", ["require", "jquery", "underscore", "backbone", "jwplayer", "video-player/VideoTypes", "video-player/VideoPlayerEvent"],
function(e) {
    "use strict";
    function t(e) {
        console.log(document.location.protocol + "//content.jwplatform.com/jw6/" + e + ".xml");
        return document.location.protocol + "//content.jwplatform.com/jw6/" + e + ".xml"
    }
    function i(e) {
        return document.location.protocol + "//www.youtube.com/watch?v=" + e
    }
    var s = e("jquery"),
    n = e("underscore"),
    o = e("backbone"),
    r = e("jwplayer"),
    a = e("video-player/VideoTypes"),
    l = e("video-player/VideoPlayerEvent");
    r.key = "jCe9pLBA3p5vW7p6dHu/Iy942z3lnoU98EEUcA==";
    var h = "hide-jwplayer",
    u = 660,
    c = 16 / 9,
    d = o.View.extend({
        tagName: "div",
        initialize: function(i) {
            this.ratio = i.ratio || c,
            !i.width && i.height ? (this.height = Math.ceil(i.height), this.width = Math.ceil(this.height * this.ratio)) : (this.width = Math.ceil(i.width || u), this.height = Math.ceil(this.width / this.ratio)),
            this.elSelector = i.elSelector || "#video-player",
            this.videoPlayerEl = s(this.elSelector)[0];
            console.log(t("fNMA7Wd1"));
            var o = {
                playlist: t("fNMA7Wd1"),
                analytics: {
                    enabled: !1,
                    cookies: !1
                },
                displaytitle: !1,
                controls: !0,
                //skin: e.toUrl("vendor/jwplayer-6.12/glow.xml"),
                width: this.width,
                height: this.height,
                autostart: !1,
                fallback: !1,
                mute: !1,
                abouttext: "Powered by Tunessence",
                aboutlink: "https://tunessence.com"
            },
            a = {
                primary: "html5",
                html5player: e.toUrl("vendor/jwplayer-6.12/jwplayer.html5.js")
            },
            l = {
                primary: "flash",
                rtmp: {
                    bufferlength: 3
                },
                flashplayer: e.toUrl("vendor/jwplayer-6.12/jwplayer.flash.swf")
            };
            i.html5 ? n.extend(o, a) : n.extend(o, l),
            this._jwplayer = r(this.videoPlayerEl).setup(o),
            this._loadedVideoCount = 1,
            this._delegateJwplayerSetupEvents(),
            this._unMute = !1,
            this._forceMute = !1,
            this._readyQueue = [],
            this._ready = !1;
            var h = ["load", "getState", "getPosition", "getDuration", "getVolume", "getMute", "getWidth", "getHeight", "getFullscreen", "getBuffer", "getRenderingMode", "getControls", "getQualityLevels", "getCurrentQuality", "play", "pause", "togglePlay", "seek", "seekForward", "seekBackward", "mute", "unMute", "toggleMute", "setVolume", "volumeUp", "volumeDown", "resize", "showControls", "hideControls", "show", "hide", "css", "remove"],
            d = n.bind(function(e) {
                var t = [].slice.call(arguments);
                return t.shift(),
                this._ready ? e.apply(this, t) : void this._readyQueue.push({
                    func: e,
                    args: t,
                    context: this
                })
            },
            this);
            n.forEach(h,
            function(e) {
                this[e] = n.wrap(this[e], d)
            },
            this);
            var p = ["play", "pause", "togglePlay", "seek"];
            this._videoReady = !1,
            this._videoReadyQueue = [];
            var f = n.bind(function(e) {
                var t = [].slice.call(arguments);
                return t.shift(),
                this._videoReady ? e.apply(this, t) : void this._videoReadyQueue.push({
                    func: e,
                    args: t,
                    context: this
                })
            },
            this);
            n.forEach(p,
            function(e) {
                this[e].methodName = e,
                this[e] = n.wrap(this[e], f)
            },
            this)
        },
        _delegateJwplayerSetupEvents: function() {
            this._jwplayer.onReady(n.bind(function() {
                this.$videoPlayerEl = s(this.elSelector),
                this.videoPlayerEl = this.$videoPlayerEl[0],
                this.$videoWrapper = this.$videoPlayerEl.parent(),
                this._delegateJwplayerEvents(),
                this._ready = !0,
                n.forEach(this._readyQueue,
                function(e) {
                    e.func.apply(e.context, e.args)
                }),
                this._readyQueue = [],
                this.trigger(l.READY)
            },
            this)),
            this._jwplayer.onSetupError(function(e) {
                this._throwError("Error in jwplayer setup\nFallback rendered: " + e.fallback + "\nMessage: " + e.message)
            })
        },
        _delegateJwplayerEvents: function() {
            this._jwplayer.onPlaylistItem(n.bind(function(e) {
                0 === e.index && (this._loadedVideoCount--, 0 === this._loadedVideoCount ? n.defer(n.bind(function() {
                    this.mute(),
                    this._playing = !0,
                    this._jwplayer.play(!0)
                },
                this)) : this._loadedVideoCount < 0 && this._throwError("this._loadedVideoCount is negative with value: " + this._loadedVideoCount))
            },
            this)),
            this._jwplayer.onComplete(n.bind(function() {
                this._triggerIfReady(l.COMPLETE)
            },
            this)),
            this._jwplayer.onPlay(n.bind(function() {
                this._videoReady || (this._setVideoReady(), this._unMute = !0),
                this._triggerIfReady(l.PLAYING)
            },
            this)),
            this._jwplayer.onPause(n.bind(function() {
                this._triggerIfReady(l.PAUSED)
            },
            this)),
            this._jwplayer.onIdle(n.bind(function() {
                this._triggerIfReady(l.IDLE)
            },
            this)),
            this._jwplayer.onBuffer(n.bind(function() {
                this._triggerIfReady(l.BUFFERING)
            },
            this)),
            this._jwplayer.onSeek(n.bind(function(e) {
                this._triggerIfReady(l.SEEK, e.offset)
            },
            this)),
            this._jwplayer.onTime(n.bind(function(e) {
                if (this._videoReady) {
                    if (this._unMute && !this._forceMute && (this.unMute(), this._unMute = !1), e.position < this.start) {
                        var t = this._playing;
                        this.seek(this.start),
                        this.pause(),
                        t && this.play()
                    } else this.stop && e.position > this.stop && (this.seek(this.start), this.pause(), this._triggerIfReady(l.COMPLETE));
                    this._triggerIfReady(l.TIME, e.position)
                }
            },
            this)),
            this._jwplayer.onBufferChange(n.bind(function(e) {
                this._triggerIfReady(l.BUFFER_CHANGE, e.bufferPercent)
            },
            this)),
            this._jwplayer.onDisplayClick(n.bind(function() {
                this._triggerIfReady(l.DISPLAY_CLICK)
            },
            this)),
            this._jwplayer.onResize(n.bind(function(e) {
                this._triggerIfReady(l.RESIZE, e.width, e.height)
            },
            this)),
            this._jwplayer.onVolume(n.bind(function(e) {
                this._triggerIfReady(l.VOLUME, e.volume)
            },
            this)),
            this._jwplayer.onMute(n.bind(function(e) {
                this._triggerIfReady(l.MUTE, e.mute)
            },
            this)),
            this._jwplayer.onQualityLevels(n.bind(function(e) {
                this._triggerIfReady(l.QUALITY_LEVELS, e.levels)
            },
            this)),
            this._jwplayer.onQualityChange(n.bind(function(e) {
                this._triggerIfReady(l.QUALITY_CHANGE, e.currentQuality)
            },
            this)),
            this._jwplayer.onError(n.bind(function(e) {
                this._throwError("Error in jwplayer: " + e.type + "\nMessage: " + e.message)
            },
            this))
        },
        _setVideoReady: function() {
            this._videoReady = !0;
            var e = !0,
            t = this.start;
            n.forEach(this._videoReadyQueue,
            function(i) {
                var s = i.func.methodName;
                "play" === s ? e = !0 : "pause" === s ? e = !1 : "togglePlay" === s ? e = !e: "seek" === s && (t = i.args[0])
            }),
            this.seek(t),
            e || this.pause(),
            this._videoReadyQueue = [],
            this._triggerIfReady(l.VIDEO_READY)
        },
        _triggerIfReady: function() {
            this._videoReady && this.trigger.apply(this, arguments)
        },
        _throwError: function(e) {
            try {
                throw new Error(e)
            } catch(t) {
                window.onerror && window.onerror(t.message, "fromVideoPlayer", "fromVideoPlayer", "fromVideoPlayer", t),
                console.error(t.message)
            }
        },
        load: function(e) {
            if (!this.video || this.video.type !== e.type || this.video.videoId !== e.videoId) {
                switch (this.start = e.start || 0, this.stop = e.stop || null, this._videoReady = !1, this.video = e, this._loadedVideoCount++, e.type) {
                case a.JW_PLATFORM:
                    this._jwplayer.load(t(e.videoId));
                    break;
                case a.YOU_TUBE:
                    this._jwplayer.load([{
                        file:
                        i(e.videoId)
                    }]);
                    break;
                default:
                    this._throwError("Invalid Video Type: " + e.type)
                }
                this.trigger(l.VIDEO_LOADED)
            }
        },
        getLoadedVideo: function() {
            return this.video ? this.video: null
        },
        getVideoReady: function() {
            return this._videoReady
        },
        getState: function() {
            return this._jwplayer.getState()
        },
        getPosition: function() {
            return this._jwplayer.getPosition()
        },
        getDuration: function() {
            return this._jwplayer.getDuration()
        },
        getVolume: function() {
            return this._jwplayer.getVolume()
        },
        getMute: function() {
            return this._jwplayer.getMute()
        },
        getHeight: function() {
            return this._jwplayer.getHeight()
        },
        getWidth: function() {
            return this._jwplayer.getWidth()
        },
        getFullscreen: function() {
            return this._jwplayer.getFullscreen()
        },
        getRenderingMode: function() {
            return this._jwplayer.getRenderingMode()
        },
        getBuffer: function() {
            return this._jwplayer.getBuffer()
        },
        getControls: function() {
            return this._jwplayer.getControls()
        },
        getQualityLevels: function() {
            return this._jwplayer.getQualityLevels()
        },
        getCurrentQuality: function() {
            return this._jwplayer.getCurrentQuality()
        },
        getRatio: function() {
            return this.ratio
        },
        play: function() {
            this._playing = !0,
            this._jwplayer.play(!0)
        },
        pause: function() {
            this._playing = !1,
            this._jwplayer.pause(!0)
        },
        togglePlay: function() {
            this._playing = !this._playing,
            this._jwplayer.play()
        },
        seek: function(e) {
            if (0 > e) throw new Error("Attempting to seek to a negative value.");
            this._playing = !0,
            this._jwplayer.seek(e)
        },
        seekBackward: function() {
            var e = Math.max(0, this.getPosition() - .1 * this.getDuration());
            this.seek(e)
        },
        seekForward: function() {
            var e = this.getDuration(),
            t = Math.min(e, this.getPosition() + .1 * e);
            this.seek(t)
        },
        mute: function() {
            this._jwplayer.setMute(!0)
        },
        unMute: function() {
            this._jwplayer.setMute(!1)
        },
        toggleMute: function() {
            this._jwplayer.setMute()
        },
        volumeUp: function() {
            this.setVolume(this.getVolume() + 10)
        },
        volumeDown: function() {
            this.setVolume(this.getVolume() - 10)
        },
        setVolume: function(e) {
            e = Math.min(100, Math.max(0, e)),
            this._jwplayer.setVolume(e)
        },
        forceMute: function() {
            this._forceMute = !0
        },
        unforceMute: function() {
            this._forceMute = !1
        },
        resizeHeight: function(e) {
            var t = this.ratio * e;
            this.resize(t, e)
        },
        resizeWidth: function(e) {
            var t = e / this.ratio;
            this.resize(e, t)
        },
        resize: function(e, t) {
            if (!e || !t) throw new Error("resize with bad parameters: " + e + ", " + t);
            this.width = e,
            this.height = t,
            this.ratio = this.width / this.height,
            this._jwplayer.resize(this.width, this.height)
        },
        showControls: function() {
            this._jwplayer.setControls(!0)
        },
        hideControls: function() {
            this._jwplayer.setControls(!1)
        },
        show: function() {
            this.$videoWrapper.removeClass(h)
        },
        hide: function() {
            this.$videoWrapper.addClass(h)
        },
        css: function() {
            return this.$videoWrapper.css.apply(this.$videoWrapper, arguments)
        },
        remove: function() {
            return this._jwplayer.remove(),
            o.View.prototype.remove.apply(this, arguments)
        }
    });
    return d
}),
define("tab-page/views/LessonModeView", ["require", "jquery", "underscore", "backbone", "modernizr", "video-player/VideoPlayerView", "video-player/VideoPlayerEvent"],
function(e) {
    "use strict";
    var t = e("jquery"),
    i = e("underscore"),
    s = e("backbone"),
    n = e("modernizr"),
    o = e("video-player/VideoPlayerView"),
    r = e("video-player/VideoPlayerEvent"),
    a = 220,
    l = s.Model.extend({
        defaults: {
            videoIndex: 0,
            highlightMeasures: !1,
            currentMeasure: -1
        }
    }),
    h = s.View.extend({
        events: {
            "click #prev-video": "_showPrevVideo",
            "touchstart #prev-video": "_showPrevVideo",
            "click #next-video": "_showNextVideo",
            "touchstart #next-video": "_showNextVideo",
            "click #highlight-measures": "_highlightMeasuresChanged",
            "touchstart #highlight-measures": "_highlightMeasuresChanged"
        },
        keyboardEvents: {
            space: "_keyboardTogglePlay",
            right: "_keyboardSeekForward",
            left: "_keyboardSeekBackward"
        },
        initialize: function(e) {
            this.tab = e.tab,
            this.$backdropBoxes = e.$backdropBoxes,
            this.$tabImg = e.$tabImg,
            this.videos = this.tab.get("videos"),
            this.measures = this.tab.get("measures"),
            this.videoLinks = this.tab.get("videoLinks");
            var t = i.max(this.measures,
            function(e) {
                return e.height + e.paddingTop + e.paddingBottom
            });
            this._tabLineMargin = Math.max(a, t.height + t.paddingTop + t.paddingBottom),
            this.state = new l,
            this.loadedVideo = null,
            this.videoMinHeight = 280,
            this.videoMaxHeight = 700,
            this.videoPlayer = new o({
                elSelector: "#video-box",
                height: this.videoMinHeight,
                html5: n.video
            }),
            i.bindAll(this, "_onScroll", "renderVideoSize", "renderMeasureHighlight", "render"),
            this.loadByIndex(0),
            this.videoPlayer.pause()
        },
        open: function(e) {
            if (this.listenTo(this.state, "change:currentMeasure", this.renderMeasureHighlight), this.listenTo(this.state, "change:videoIndex", this.renderButtons), this.listenTo(this.state, "change:highlightMeasures", this.renderBackdropBoxes), this.listenTo(this.state, "change:highlightMeasures", this.renderHighlightMeasureBtn), this.listenTo(this.videoPlayer, r.TIME, this._time), this.listenTo(this.videoPlayer, r.SEEK, this._time), this.listenTo(this.videoPlayer, r.RESIZE, this.renderMeasureHighlight), t(window).on("resize.lessonMode", this.renderVideoSize), "undefined" != typeof e) {
                var i = this.videoLinks[e];
                this.loadByIndex(i.videoIndex, i.startTime)
            } else this.videoPlayer.play();
            this.renderBackdropBoxes(),
            this.delegateEvents(),
            this.videoPlayer.getVideoReady() ? this.render() : (this.renderMeasureHighlight(), this.videoPlayer.once(r.VIDEO_READY, this.render)),
            this._isHighlightEnabled() || (this.$("#highlight-measures").hide(), this.state.set("highlightMeasures", !1), this.stopListening(this.state, "change:highlightMeasures", this.renderBackdropBoxes), this.stopListening(this.state, "change:highlightMeasures", this.renderHighlightMeasureBtn))
        },
        close: function() {
            this.stopListening(),
            t(window).off("resize.lessonMode"),
            this.videoPlayer.pause(),
            this.$backdropBoxes.addClass("hidden"),
            this.undelegateEvents()
        },
        _isHighlightEnabled: function() {
            var e = .25,
            t = 0,
            s = 0;
            i.each(this.tab.get("videos"),
            function(e) {
                s += e.stop - e.start,
                i.each(e.cues,
                function(e) {
                    t += e.endTime - e.startTime
                })
            });
            var n = t / s;
            return n > e
        },
        _keyboardTogglePlay: function(e) {
            e.preventDefault(),
            this.togglePlay()
        },
        _keyboardSeekForward: function(e) {
            e.preventDefault(),
            this.videoPlayer.seekForward()
        },
        _keyboardSeekBackward: function(e) {
            e.preventDefault(),
            this.videoPlayer.seekBackward()
        },
        loadByIndex: function(e, t) {
            this._loadVideo(this.videos[e], t)
        },
        togglePlay: function() {
            this.videoPlayer.togglePlay()
        },
        toggleMute: function() {
            this.videoPlayer.toggleMute()
        },
        _highlightMeasuresChanged: function(e) {
            e.preventDefault(),
            this.state.set("highlightMeasures", !this.state.get("highlightMeasures"))
        },
        _hasNoPrevVideo: function() {
            return 0 === this.state.get("videoIndex")
        },
        _hasNoNextVideo: function() {
            return this.state.get("videoIndex") + 1 === this.videos.length
        },
        _showPrevVideo: function(e) {
            e.preventDefault(),
            this._hasNoPrevVideo() || this.loadByIndex(this.state.get("videoIndex") - 1)
        },
        _showNextVideo: function(e) {
            e.preventDefault(),
            this._hasNoNextVideo() || this.loadByIndex(this.state.get("videoIndex") + 1)
        },
        _loadVideo: function(e, t) {
            this.loadedVideo !== e && (this.videoPlayer.load(e), this.loadedVideo = e, this.state.set("videoIndex", i.indexOf(this.videos, this.loadedVideo))),
            i.isUndefined(t) || (this.videoPlayer.seek(t), this.videoPlayer.play())
        },
        _time: function(e) {
            var t = i.find(this.loadedVideo.cues,
            function(t) {
                return e >= t.startTime && e < t.endTime
            }),
            s = -1;
            t && (s = t.measure),
            this.state.set("currentMeasure", s)
        },
        _lockScroll: function(e) {
            this._lockedScrollTop = Math.round(e),
            t(document).on("scroll", this._onScroll),
            this._onScroll()
        },
        _unlockScroll: function() {
            t(document).off("scroll", this._onScroll)
        },
        _onScroll: function() {
            t(window).scrollTop(this._lockedScrollTop),
            t(window).scrollLeft(0)
        },
        _scrollTo: function(e) {
            t(window).scrollTop(Math.round(e)),
            t(window).scrollLeft(0)
        },
        renderBackdropBoxes: function() {
            return this.state.get("highlightMeasures") ? this.$backdropBoxes.removeClass("hidden") : this.$backdropBoxes.addClass("hidden"),
            this
        },
        renderHighlightMeasureBtn: function() {
            var e = this.$("#highlight-measures");
            return e.removeClass("active"),
            this.state.get("highlightMeasures") && e.addClass("active"),
            this
        },
        renderMeasureHighlight: function() {
            var e = this.$backdropBoxes.filter("#north"),
            i = this.$backdropBoxes.filter("#south"),
            s = this.$backdropBoxes.filter("#east"),
            n = this.$backdropBoxes.filter("#west"),
            o = this.measures[this.state.get("currentMeasure")],
            r = t(window).height(),
            a = t(document).height(),
            l = t(document).width();
            if (e.css("height", a), i.removeAttr("style"), n.removeAttr("style"), s.removeAttr("style"), o) {
                var h = this.$tabImg.width() / this.tab.get("width"),
                u = (o.x - o.paddingLeft) * h,
                c = (o.y - o.paddingTop) * h,
                d = (o.width + o.paddingLeft + o.paddingRight) * h,
                p = (o.height + o.paddingTop + o.paddingBottom) * h,
                f = r - this.$el.outerHeight(),
                g = (f - p) / 2,
                m = r - g - p,
                v = -m,
                y = v + c + this.$tabImg.offset().top,
                _ = 0;
                0 > y && (_ = -y, y = 0),
                this._scrollTo(y);
                var w = this.$tabImg.offset().top + c,
                b = this.$tabImg.offset().left + u;
                e.css("height", w);
                var P = w + p;
                i.css({
                    top: P,
                    height: a - P
                }),
                n.css({
                    top: w,
                    height: p,
                    width: b
                }),
                s.css({
                    top: w,
                    height: p,
                    width: l - b - d
                })
            }
            return this
        },
        renderVideoSize: i.debounce(function() {
            var e = t(document).scrollTop();
            this._scrollTo(t(document).height()),
            this._scrollTo(e);
            var s = t(window).height(),
            n = this.$el.height() - this.videoPlayer.getHeight(),
            o = this.$tabImg.width() / this.tab.get("width"),
            r = this._tabLineMargin * o;
            if (!i.isNaN(n)) {
                var a = s - r - n;
                a = Math.max(this.videoMinHeight, Math.min(this.videoMaxHeight, a)),
                a = Math.min(a, this.$el.width() / this.videoPlayer.getRatio()),
                this.videoPlayer.resizeHeight(a)
            }
            return this.renderMeasureHighlight(),
            i.delay(this.renderMeasureHighlight, 250),
            this
        },
        100),
        renderButtons: function() {
            return this.$("#prev-video").removeClass("disabled"),
            this.$("#next-video").removeClass("disabled"),
            this._hasNoPrevVideo() && this.$("#prev-video").addClass("disabled"),
            this._hasNoNextVideo() && this.$("#next-video").addClass("disabled"),
            this
        },
        render: function() {
            return this.renderButtons(),
            this.renderVideoSize(),
            this.renderMeasureHighlight(),
            this
        }
    });
    return h
}),
define("tab-page/constants/AppMode", {
    TAB: "tab",
    LESSON: "lesson"
}),
define("tab-page/utils/TabAnalytics", ["require", "lib/Util", "underscore", "video-player/VideoPlayerEvent", "tab-page/constants/AppMode"],
function(e) {
    "use strict";
    var t, i = e("lib/Util"),
    s = e("underscore"),
    n = e("video-player/VideoPlayerEvent"),
    o = e("tab-page/constants/AppMode");
    t = {
        track: function() {}
    };
    var r = i.extend({
        initialize: function(e) {
            this._startTime = (new Date).getTime(),
            this.tabName = document.title,
            this.appState = e.appView.state,
            this.appState.has("appMode") || console.warn("missing app mode"),
            this.listenTo(this.appState, "change:appMode", this._appModeChanged)
        },
        setLessonModeView: function(e) {
            if (this.lessonModeView = e, this.lessonModeState = e.state, this.lessonModeState.has("videoIndex") || console.warn("missing lesson mode video index"), this.listenTo(this.lessonModeState, "change:videoIndex", this._videoIndexChanged), e.videoPlayer) {
                var t = this.lessonModeView.videoPlayer;
                this.listenTo(t, n.PLAYING, this._videoPlayed),
                this.listenTo(t, n.PAUSED, this._videoPaused)
            } else console.warn("analytics can't locate video player")
        },
        setTabModeView: function(e) {
            this.tabModeView = e,
            this.tabModeState = e.state,
            this.tabModeState.has("previewTrackEnabled") && this.tabModeState.has("bandTrackEnabled") && this.tabModeState.has("clickTrackEnabled") || console.warn("missing TabMode track enabled states"),
            this.listenTo(this.tabModeState, "change:bandTrackEnabled", this._tabTrackChanged),
            this.listenTo(this.tabModeState, "change:previewTrackEnabled", this._tabTrackChanged),
            this.listenTo(this.tabModeState, "change:clickTrackEnabled", this._tabTrackChanged),
            this.listenTo(this.tabModeView, "change:rate", this._tabRateChanged),
            this.listenTo(this.tabModeView, "garble", this._tabGarbled),
            this.tabModeState.has("playing") || console.warn("missing TabMode playing"),
            this.listenTo(this.tabModeState, "change:playing", this._tabPlayingChanged),
            this.tabModeState.has("countIn") || console.warn("missing TabMode count in"),
            this.listenTo(this.tabModeState, "change:countIn", this._tabCountInChanged),
            this.tabModeState.has("loop") || console.warn("missing TabMode loop"),
            this.listenTo(this.tabModeState, "change:loop", this._tabLoopChanged)
        },
        _appModeChanged: function() {
            var e = this.appState.get("appMode"),
            i = (new Date).getTime(),
            s = this._lastSwitchTime || this._startTime,
            n = (i - s) / 1e3;
            this._lastSwitchTime = i,
            t.track("Switched Mode", {
                Mode: e,
                Tab: this.tabName,
                "Time in previous mode": n
            }),
            window.logAnalytics && console.log("Switched to " + e + " mode on " + this.tabName + " after " + n + " seconds")
        },
        _videoIndexChanged: function() {
            var e = this.lessonModeState.get("videoIndex");
            t.track("Switched Video", {
                "Video Index": e,
                Tab: this.tabName
            }),
            window.logAnalytics && console.log("Switched to " + e + " for " + this.tabName)
        },
        _videoPlayed: function() {
            var e = (new Date).getTime(),
            i = e - this._lastVideoPauseTime || 0;
            this._lastVideoPlayTime = e,
            this.appState.get("appMode") === o.LESSON && (t.track("Play Video", {
                Tab: this.tabName,
                "Time Paused": i / 1e3
            }), window.logAnalytics && console.log("Video Played after being paused for " + i / 1e3 + " seconds"))
        },
        _videoPaused: function() {
            var e = (new Date).getTime(),
            i = e - this._lastVideoPlayTime || 0;
            this._lastVideoPauseTime = e,
            this.appState.get("appMode") === o.LESSON && (t.track("Pause Video", {
                Tab: this.tabName,
                "Time Played": i / 1e3
            }), window.logAnalytics && console.log("Video Paused after being played for " + i / 1e3 + " seconds"))
        },
        _tabTrackChanged: function() {
            var e = this.tabModeState.get("bandTrackEnabled"),
            i = this.tabModeState.get("previewTrackEnabled"),
            s = this.tabModeState.get("clickTrackEnabled");
            t.track("Enabled Tracks Changed", {
                guitar: i,
                band: e,
                click: s
            }),
            window.logAnalytics && console.log("Tracks Changed - band: %s, guitar: %s, click: %s", e, i, s)
        },
        _tabPlayingChanged: function() {
            var e = this.tabModeState.get("playing"),
            i = e ? "Play": "Pause or Stop",
            s = e ? "paused": "played",
            n = this.tabModeState.get("guitarTrackEnabled"),
            o = this.tabModeState.get("jamTrackEnabled"),
            r = this.tabModeState.get("clickTrackEnabled"),
            a = (new Date).getTime(),
            l = this._lastTogglePlayTime || this._startTime,
            h = (a - l) / 1e3;
            this._lastTogglePlayTime = a;
            var u = {
                Tab: this.tabName,
                "Click Track": r,
                "Jam Track": o,
                "Guitar Track": n
            };
            u["Time " + s] = h,
            t.track(i + " Button Pushed", u),
            window.logAnalytics && console.log(i + " Button Pushed for " + this.tabName + ", previous state lasted " + h + " secs")
        },
        _tabGarbled: function() {
            var e = ((new Date).getTime() - this._lastTogglePlayTime) / 1e3;
            t.track("Audio Garble", {
                "Time Since Play Pushed": e
            }),
            window.logAnalytics && console.log("Audio Garble " + e + " seconds after play")
        },
        _tabCountInChanged: function() {
            var e = this.tabModeState.get("countIn");
            t.track("Count In Changed", {
                enabled: e
            }),
            window.logAnalytics && console.log("Count In Changed, enabled = " + e)
        },
        _tabLoopChanged: function() {
            var e = this.tabModeState.get("loop");
            t.track("Loop Changed", {
                enabled: e
            }),
            window.logAnalytics && console.log("Loop Changed, enabled = " + e)
        },
        _tabRateChanged: s.throttle(function(e) {
            t.track("Speed Change", {
                rate: e
            }),
            window.logAnalytics && console.log("Speed Changed to " + e)
        },
        1e3, {
            leading: !1
        })
    });
    return r
}),
define("tpl!tab-page/templates/video-links.tpl", [],
function() {
    return function(obj) {
        var __t, __p = "";
        Array.prototype.join;
        with(obj || {}) __p += "",
        _.each(videoLinks,
        function(e, t) {
            __p += '\n<div class="section-label" style="top: ' + (null == (__t = e.y / height * 100) ? "": __t) + '%;">\n  <h4>' + (null == (__t = e.name) ? "": __t) + "</h4>\n  ",
            e.videoIndex >= 0 && (__p += '\n  <a class="btn btn-lesson-mode btn-section-lesson" data-index="' + (null == (__t = t) ? "": __t) + '">\n    <i class="fa fa-play"></i> \n    Video\n  </a>\n  '),
            __p += "\n</div>\n"
        }),
        __p += "\n";
        return __p
    }
}),
define("tpl!tab-page/templates/audio-links.tpl", [],
function() {
    return function(obj) {
        var __t, __p = "";
        Array.prototype.join;
        with(obj || {}) __p += "",
        _.each(audioLinks,
        function(e) {
            __p += '\n<div class="audio-link"\n  style="top: ' + (null == (__t = e.y / height * 100) ? "": __t) + "%; left: " + (null == (__t = e.x / width * 100) ? "": __t) + "%;\n  width: " + (null == (__t = e.width / width * 100) ? "": __t) + "%; height: " + (null == (__t = e.height / height * 100) ? "": __t) + '%;"\n  data-song-index=' + (null == (__t = e.songIndex) ? "": __t) + "></div>\n"
        }),
        __p += "\n";
        return __p
    }
}),
define("tab-page/views/AppView", ["require", "jquery", "underscore", "backbone", "tab-page/views/TabModeView", "tab-page/views/LessonModeView", "video-player/VideoPlayerEvent", "tab-page/constants/AppMode", "tab-page/utils/TabAnalytics", "tpl!tab-page/templates/video-links.tpl", "tpl!tab-page/templates/audio-links.tpl"],
function(e) {
    "use strict";
    var t = e("jquery"),
    i = e("underscore"),
    s = e("backbone"),
    n = e("tab-page/views/TabModeView"),
    o = e("tab-page/views/LessonModeView"),
    r = e("video-player/VideoPlayerEvent"),
    a = e("tab-page/constants/AppMode"),
    l = e("tab-page/utils/TabAnalytics"),
    h = e("tpl!tab-page/templates/video-links.tpl"),
    u = e("tpl!tab-page/templates/audio-links.tpl"),
    c = s.Model.extend({
        defaults: {
            appMode: a.TAB
        }
    }),
    d = s.View.extend({
        el: "body",
        events: {
            "click .btn-lesson-mode": "_clickLessonMode",
            "touchstart .btn-lesson-mode": "_clickLessonMode",
            "click .btn-tab-mode": "_clickTabMode",
            "touchstart .btn-tab-mode": "_clickTabMode",
            "click .audio-link": "_clickAudioLink",
            "touchstart .audio-link": "_clickAudioLink"
        },
        initialize: function(e) {
            this.model = e.model,
            this.state = new c,
            this.hasLesson = this.model.get("videos").length > 0,
            this.$tabMode = this.$("#tab-mode"),
            this.$lessonMode = this.$("#lesson-mode"),
            this.$loadingProgress = this.$(".loading-progress"),
            this.$tabArea = this.$(".tab-area"),
            this.renderVideoLinks(),
            this.renderAudioLinks(),
            this.hasLesson && (this.lessonModeView = new o({
                el: this.$lessonMode,
                $backdropBoxes: this.$(".backdrop-box"),
                $tabImg: this.$tabArea.find("img"),
                tab: this.model
            }), window.setInterval(i.bind(this._watchdog, this), 250)),
            this.tabModeView = new n({
                el: this.$tabMode,
                $tabArea: this.$tabArea,
                $loadingBar: this.$(".loading-bar"),
                tab: this.model.toJSON()
            }),
            this.analytics = new l({
                appView: this
            }),
            this.analytics.setTabModeView(this.tabModeView),
            this.hasLesson && this.analytics.setLessonModeView(this.lessonModeView),
            this._fixAffixHeight();
            var s = i.bind(this._fixAffixHeight, this);
            t(window).resize(s),
            t(document).scroll(s),
            this._updateAppMode(a.TAB),
            window.app = this
        },
        _watchdog: function() {
            var e = this.lessonModeView.videoPlayer,
            t = this.state.get("appMode");
            t !== a.LESSON && e.getState() === r.PLAYING && e.pause(),
            t !== a.TAB && this.tabModeView.isPlaying() && this.tabModeView._pause()
        },
        _clickTabMode: function(e) {
            e.preventDefault(),
            this._updateAppMode(a.TAB)
        },
        _clickLessonMode: function(e) {
            e.preventDefault();
            var i, s = t(e.currentTarget);
            s.hasClass("btn-section-lesson") && (i = s.data("index")),
            this._updateAppMode(a.LESSON, i)
        },
        _updateAppMode: function(e, t) {
            this.state.set("appMode", e),
            this.renderAppMode(),
            e === a.LESSON ? (this.tabModeView.close(), this.lessonModeView && this.lessonModeView.open(t)) : e === a.TAB && (this.lessonModeView && this.lessonModeView.close(), this.tabModeView.open()),
            this._fixAffixHeight()
        },
        _fixAffixHeight: function() {
            this.$("#control-bar-placeholder").height(this.$("#control-bar-container").outerHeight())
        },
        renderAppMode: function() {
            var e = this.state.get("appMode");
            return e === a.LESSON ? (this.$tabMode.addClass("hidden"), this.$lessonMode.removeClass("video-hidden"), this.$loadingProgress.addClass("hidden"), this.$(".section-label").addClass("hidden"), this.$(".audio-link").addClass("hidden")) : e === a.TAB && (this.$lessonMode.addClass("video-hidden"), this.$tabMode.removeClass("hidden"), this.$loadingProgress.removeClass("hidden"), this.$(".section-label").removeClass("hidden"), this.$(".audio-link").removeClass("hidden")),
            this
        },
        renderVideoLinks: function() {
            return t("#section-labels-container").html(h({
                videoLinks: this.model.get("videoLinks"),
                height: this.model.get("height")
            })),
            this
        },
        renderAudioLinks: function() {
            return this.$tabArea.append(u({
                audioLinks: this.model.get("audioLinks"),
                height: this.model.get("height"),
                width: this.model.get("width")
            })),
            this
        },
        render: function() {
            return this.renderVideoLinks(),
            this.renderAudioLinks(),
            this.renderAppMode()
        }
    });
    return d
}),
define("tab-page/models/Tab", ["require", "backbone"],
function(e) {
    "use strict";
    var t = e("backbone"),
    i = t.Model.extend({
        urlRoot: "/rest/tabs",
        defaults: function() {
            return {
                title: "untitled",
                artist: "unknown",
                tuning: "Standard",
                copyright: "",
                pdfUrl: "",
                uncroppedImgUrl: "",
                uncroppedRetinaImgUrl: "",
                imgUrl: "",
                retinaImgUrl: "",
                cropSections: [],
                videos: [],
                measures: [],
                videoLinks: [],
                songs: [{
                    previewTrackUrl: "",
                    bandTrackUrl: "",
                    startTime: 0,
                    trackNameOverrides: [!1, !1],
                    clickTrackEnabled: !0,
                    measureOrder: [],
                    measureOrderString: "",
                    meterChanges: [],
                    tempoChanges: []
                }],
                audioLinks: [],
                previewOptions: {
                    songs: [{
                        index: -1,
                        startMeasure: 0,
                        stopMeasure: 0
                    }],
                    video: {
                        index: -1,
                        start: 0,
                        stop: 0
                    },
                    header: {
                        top: 0,
                        bottom: 0
                    }
                },
                previewTab: {},
                previewHash: ""
            }
        },
        validateTab: function(e) {
            var t, i, s, n, o, r = 0,
            a = 0;
            if (!e.imgUrl || !e.previewTrackUrl) return "a tab image (pdf) and audio preview must be set before a lesson can go live";
            if (!e.title || !e.artist || !e.tuning) return "Title, Artist, and Tuning must all be set before a lesson can go live";
            if (0 === e.measures.length) return "You must use the 'Measures' tool to highlight this lesson's measures";
            if (0 === e.meterChanges.length) return "You must specify this song's meter(s)";
            if (0 === e.tempoChanges.length) return "You must specify this song's tempo(s)";
            var l = e.measures.length,
            h = e.videos.length;
            for (r = 0; h > r; r++) for (t = e.videos[r], a = 0; a < t.cues.length; a++) {
                var u = t.cues[a];
                if (u.measure > l - 1) return "Cue " + (a + 1) + "in video " + (r + 1) + " points to an out of range measure (" + u.measure + ")"
            }
            var c = -1;
            for (r = 0; r < e.sections.length; r++) {
                if (i = e.sections[r], 0 === i.name.length) return "Section " + (r + 1) + " needs a name";
                if (i.videoIndex > h - 1) return "Section '" + i.name + "' has an invalid video reference: " + i.videoIndex;
                if (i.startMeasure !== c + 1) return "Some measures aren't in a section";
                c = i.endMeasure
            }
            if (e.sections[e.sections.length - 1].endMeasure !== l - 1) return "Some measures aren't in a section";
            for (r = 0; r < e.repeats.length; r++) {
                if (s = e.repeats[r], s.startMeasure > s.endMeasure || s.startMeasure < 0) return "Repeat Error: repeat symbol mismatch";
                if (s.endMeasure > l - 1) return "Repeat Error: measure out of range";
                if (s.playthroughs < 2) return "Repeat has less than 2 playthroughs and should be deleted";
                var d = e.repeats[r + 1];
                if (d && s.endMeasure >= d.startMeasure) return "Repeats " + (r + 1) + " and " + (r + 2) + " have an overlap"
            }
            var p = !1;
            for (r = 0; r < e.tempoChanges.length; r++) {
                if (n = e.tempoChanges[r], n.measure < 0 || n.measure > l - 1) return "Tempo Error: measure out of range";
                if (n.tempo < 10 || n.tempo > 400) return "Tempo must always be between 10 and 400 bpm. If this is a valid exception, tell Matt";
                0 === n.measure && (p = !0)
            }
            if (!p) return "Tempo must be specified for the first measure";
            for (p = !1, r = 0; r < e.meterChanges.length; r++) {
                if (o = e.meterChanges[r], o.measure < 0 || o.measure > l - 1) return "Meter Error: measure out of range";
                var f = o.meter[0],
                g = o.meter[1];
                if (2 > f || 2 !== g && 4 !== g && 8 !== g && 16 !== g && 32 !== g) return f + "/" + g + " is an invalid meter. If this is a valid exception, tell Matt";
                0 === o.measure && (p = !0)
            }
            if (!p) return "Meter must be specified for the first measure";
            for (r = 0; r < e.repeats.length; r++) {
                var m, v, y, _, w = !1,
                b = !1;
                for (s = e.repeats[r], a = 0; a < e.tempoChanges.length; a++) n = e.tempoChanges[a],
                n.measure <= s.startMeasure && (m = n.tempo),
                n.measure <= s.endMeasure && (v = n.tempo),
                n.measure === s.startMeasure && (w = !0);
                for (a = 0; a < e.meterChanges.length; a++) o = e.meterChanges[a],
                o.measure <= s.startMeasure && (y = o.meter),
                o.measure <= s.endMeasure && (_ = o.meter),
                o.measure === s.startMeasure && (b = !0);
                if (m !== v && !w) return "Tempo change invalidates repeating section starting at measure " + (s.startMeasure + 1);
                if ((y[0] !== _[0] || y[1] !== _[1]) && !b) return "Meter change invalidates repeating section starting at measure " + (s.startMeasure + 1)
            }
        }
    });
    return i
}),
define("tab-page/app", ["require", "jquery", "tab-page/views/AppView", "tab-page/models/Tab"],
function(e) {
    "use strict";
    var t = e("jquery"),
    i = e("tab-page/views/AppView"),
    s = e("tab-page/models/Tab");
    return {
        init: function(e) {
            var n = new s(e, {
                parse: !0
            });
            console.log(t(".tab-area img").attr("src"));
            t("<img>").attr("src", t(".tab-area img").attr("src")).load(function() {
                n.set("width", this.width),
                n.set("height", this.height),
                new i({
                    model: n
                })
            })
        }
    }
});