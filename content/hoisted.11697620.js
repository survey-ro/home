function gt(u) {
    if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u
}

function Ii(u, t) {
    u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var it = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Qt = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    ri, W, z, at = 1e8,
    D = 1 / at,
    qe = Math.PI * 2,
    Ir = qe / 4,
    Br = 0,
    Bi = Math.sqrt,
    Nr = Math.cos,
    Vr = Math.sin,
    Y = function(t) {
        return typeof t == "string"
    },
    L = function(t) {
        return typeof t == "function"
    },
    xt = function(t) {
        return typeof t == "number"
    },
    ni = function(t) {
        return typeof t > "u"
    },
    pt = function(t) {
        return typeof t == "object"
    },
    K = function(t) {
        return t !== !1
    },
    si = function() {
        return typeof window < "u"
    },
    ge = function(t) {
        return L(t) || Y(t)
    },
    Ni = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    H = Array.isArray,
    Ye = /(?:-?\.?\d|\.)+/gi,
    Vi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Xt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Re = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ui = /[+-]=-?[.\d]+/,
    qi = /[^,'"\[\]\s]+/gi,
    Ur = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    E, st, Xe, ai, rt = {},
    be = {},
    Yi, Xi = function(t) {
        return (be = Ut(t, rt)) && J
    },
    oi = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    we = function(t, e) {
        return !e && console.warn(t)
    },
    Gi = function(t, e) {
        return t && (rt[t] = e) && be && (be[t] = e) || rt
    },
    fe = function() {
        return 0
    },
    qr = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    xe = {
        suppressEvents: !0,
        kill: !1
    },
    Yr = {
        suppressEvents: !0
    },
    ui = {},
    Pt = [],
    Ge = {},
    Wi, tt = {},
    Fe = {},
    Ti = 30,
    ve = [],
    fi = "",
    hi = function(t) {
        var e = t[0],
            i, r;
        if (pt(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
            for (r = ve.length; r-- && !ve[r].targetTest(e););
            i = ve[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new mr(t[r], i))) || t.splice(r, 1);
        return t
    },
    It = function(t) {
        return t._gsap || hi(ot(t))[0]._gsap
    },
    Hi = function(t, e, i) {
        return (i = t[e]) && L(i) ? t[e]() : ni(i) && t.getAttribute && t.getAttribute(e) || i
    },
    Z = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    I = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    X = function(t) {
        return Math.round(t * 1e7) / 1e7 || 0
    },
    Wt = function(t, e) {
        var i = e.charAt(0),
            r = parseFloat(e.substr(2));
        return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    },
    Xr = function(t, e) {
        for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
        return r < i
    },
    Pe = function() {
        var t = Pt.length,
            e = Pt.slice(0),
            i, r;
        for (Ge = {}, Pt.length = 0, i = 0; i < t; i++) r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    $i = function(t, e, i, r) {
        Pt.length && !W && Pe(), t.render(e, i, r || W && e < 0 && (t._initted || t._startAt)), Pt.length && !W && Pe()
    },
    Qi = function(t) {
        var e = parseFloat(t);
        return (e || e === 0) && (t + "").match(qi).length < 2 ? e : Y(t) ? t.trim() : t
    },
    Ki = function(t) {
        return t
    },
    ft = function(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    },
    Gr = function(t) {
        return function(e, i) {
            for (var r in i) r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
        }
    },
    Ut = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    bi = function u(t, e) {
        for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = pt(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t
    },
    Se = function(t, e) {
        var i = {},
            r;
        for (r in t) r in e || (i[r] = t[r]);
        return i
    },
    ae = function(t) {
        var e = t.parent || E,
            i = t.keyframes ? Gr(H(t.keyframes)) : ft;
        if (K(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    },
    Wr = function(t, e) {
        for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
        return i < 0
    },
    Zi = function(t, e, i, r, n) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var s = t[r],
            a;
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
    },
    De = function(t, e, i, r) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
    },
    kt = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    },
    Bt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    },
    Hr = function(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    We = function(t, e, i, r) {
        return t._startAt && (W ? t._startAt.revert(xe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    },
    $r = function u(t) {
        return !t || t._ts && u(t.parent)
    },
    wi = function(t) {
        return t._repeat ? Kt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Kt = function(t, e) {
        var i = Math.floor(t /= e);
        return t && i === t ? i - 1 : i
    },
    ke = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Ae = function(t) {
        return t._end = X(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0))
    },
    Ee = function(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = X(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ae(t), i._dirty || Bt(i, t)), t
    },
    ji = function(t, e) {
        var i;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = ke(t.rawTime(), e), (!e._dur || me(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -D
        }
    },
    lt = function(t, e, i, r) {
        return e.parent && kt(e), e._start = X((xt(i) ? i : i || t !== E ? nt(t, i, e) : t._time) + e._delay), e._end = X(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Zi(t, e, "_first", "_last", t._sort ? "_start" : 0), He(e) || (t._recent = e), r || ji(t, e), t._ts < 0 && Ee(t, t._tTime), t
    },
    Ji = function(t, e) {
        return (rt.ScrollTrigger || oi("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t)
    },
    tr = function(t, e, i, r, n) {
        if (li(t, e, n), !t._initted) return 1;
        if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Wi !== et.frame) return Pt.push(t), t._lazy = [n, r], 1
    },
    Qr = function u(t) {
        var e = t.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e))
    },
    He = function(t) {
        var e = t.data;
        return e === "isFromStart" || e === "isStart"
    },
    Kr = function(t, e, i, r) {
        var n = t.ratio,
            s = e < 0 || !e && (!t._start && Qr(t) && !(!t._initted && He(t)) || (t._ts < 0 || t._dp._ts < 0) && !He(t)) ? 0 : 1,
            a = t._rDelay,
            o = 0,
            f, h, l;
        if (a && t._repeat && (o = me(0, t._tDur, e), h = Kt(o, a), t._yoyo && h & 1 && (s = 1 - s), h !== Kt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || W || r || t._zTime === D || !e && t._zTime) {
            if (!t._initted && tr(t, e, r, i, o)) return;
            for (l = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !l), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, f = t._pt; f;) f.r(s, f.d), f = f._next;
            e < 0 && We(t, e, i, !0), t._onUpdate && !i && ut(t, "onUpdate"), o && t._repeat && !i && t.parent && ut(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && kt(t, 1), !i && !W && (ut(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    },
    Zr = function(t, e, i) {
        var r;
        if (i > e)
            for (r = t._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > e) return r;
                r = r._next
            } else
                for (r = t._last; r && r._start >= i;) {
                    if (r.data === "isPause" && r._start < e) return r;
                    r = r._prev
                }
    },
    Zt = function(t, e, i, r) {
        var n = t._repeat,
            s = X(e) || 0,
            a = t._tTime / t._tDur;
        return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : X(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Ee(t, t._tTime = t._tDur * a), t.parent && Ae(t), i || Bt(t.parent, t), t
    },
    Pi = function(t) {
        return t instanceof Q ? Bt(t) : Zt(t, t._dur)
    },
    jr = {
        _start: 0,
        endTime: fe,
        totalDuration: fe
    },
    nt = function u(t, e, i) {
        var r = t.labels,
            n = t._recent || jr,
            s = t.duration() >= at ? n.endTime(!1) : t._dur,
            a, o, f;
        return Y(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && i && (o = o / 100 * (H(i) ? i[0] : i).totalDuration()), a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e
    },
    oe = function(t, e, i) {
        var r = xt(e[1]),
            n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[n],
            a, o;
        if (r && (s.duration = e[1]), s.parent = i, t) {
            for (a = s, o = i; o && !("immediateRender" in a);) a = o.vars.defaults || {}, o = K(o.vars.inherit) && o.parent;
            s.immediateRender = K(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
        }
        return new U(e[0], s, e[n + 1])
    },
    Ct = function(t, e) {
        return t || t === 0 ? e(t) : e
    },
    me = function(t, e, i) {
        return i < t ? t : i > e ? e : i
    },
    G = function(t, e) {
        return !Y(t) || !(e = Ur.exec(t)) ? "" : e[1]
    },
    Jr = function(t, e, i) {
        return Ct(i, function(r) {
            return me(t, e, r)
        })
    },
    $e = [].slice,
    er = function(t, e) {
        return t && pt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && pt(t[0])) && !t.nodeType && t !== st
    },
    tn = function(t, e, i) {
        return i === void 0 && (i = []), t.forEach(function(r) {
            var n;
            return Y(r) && !e || er(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r)
        }) || i
    },
    ot = function(t, e, i) {
        return z && !e && z.selector ? z.selector(t) : Y(t) && !i && (Xe || !jt()) ? $e.call((e || ai).querySelectorAll(t), 0) : H(t) ? tn(t, i) : er(t) ? $e.call(t, 0) : t ? [t] : []
    },
    Qe = function(t) {
        return t = ot(t)[0] || we("Invalid scope") || {},
            function(e) {
                var i = t.current || t.nativeElement || t;
                return ot(e, i.querySelectorAll ? i : i === t ? we("Invalid scope") || ai.createElement("div") : t)
            }
    },
    ir = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    rr = function(t) {
        if (L(t)) return t;
        var e = pt(t) ? t : {
                each: t
            },
            i = Nt(e.ease),
            r = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = r > 0 && r < 1,
            o = isNaN(r) || a,
            f = e.axis,
            h = r,
            l = r;
        return Y(r) ? h = l = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !a && o && (h = r[0], l = r[1]),
            function(c, d, p) {
                var _ = (p || e).length,
                    m = s[_],
                    g, y, v, T, x, S, P, w, b;
                if (!m) {
                    if (b = e.grid === "auto" ? 0 : (e.grid || [1, at])[1], !b) {
                        for (P = -at; P < (P = p[b++].getBoundingClientRect().left) && b < _;);
                        b--
                    }
                    for (m = s[_] = [], g = o ? Math.min(b, _) * h - .5 : r % b, y = b === at ? 0 : o ? _ * l / b - .5 : r / b | 0, P = 0, w = at, S = 0; S < _; S++) v = S % b - g, T = y - (S / b | 0), m[S] = x = f ? Math.abs(f === "y" ? T : v) : Bi(v * v + T * T), x > P && (P = x), x < w && (w = x);
                    r === "random" && ir(m), m.max = P - w, m.min = w, m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : f ? f === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (r === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = G(e.amount || e.each) || 0, i = i && _ < 0 ? cr(i) : i
                }
                return _ = (m[c] - m.min) / m.max || 0, X(m.b + (i ? i(_) : _) * m.v) + m.u
            }
    },
    Ke = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(i) {
            var r = X(Math.round(parseFloat(i) / t) * t * e);
            return (r - r % 1) / e + (xt(i) ? 0 : G(i))
        }
    },
    nr = function(t, e) {
        var i = H(t),
            r, n;
        return !i && pt(t) && (r = i = t.radius || at, t.values ? (t = ot(t.values), (n = !xt(t[0])) && (r *= r)) : t = Ke(t.increment)), Ct(e, i ? L(t) ? function(s) {
            return n = t(s), Math.abs(n - s) <= r ? n : s
        } : function(s) {
            for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), f = at, h = 0, l = t.length, c, d; l--;) n ? (c = t[l].x - a, d = t[l].y - o, c = c * c + d * d) : c = Math.abs(t[l] - a), c < f && (f = c, h = l);
            return h = !r || f <= r ? t[h] : s, n || h === s || xt(s) ? h : h + G(s)
        } : Ke(t))
    },
    sr = function(t, e, i, r) {
        return Ct(H(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
            return H(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
        })
    },
    en = function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return function(r) {
            return e.reduce(function(n, s) {
                return s(n)
            }, r)
        }
    },
    rn = function(t, e) {
        return function(i) {
            return t(parseFloat(i)) + (e || G(i))
        }
    },
    nn = function(t, e, i) {
        return or(t, e, 0, 1, i)
    },
    ar = function(t, e, i) {
        return Ct(i, function(r) {
            return t[~~e(r)]
        })
    },
    sn = function u(t, e, i) {
        var r = e - t;
        return H(t) ? ar(t, u(0, t.length), e) : Ct(i, function(n) {
            return (r + (n - t) % r) % r + t
        })
    },
    an = function u(t, e, i) {
        var r = e - t,
            n = r * 2;
        return H(t) ? ar(t, u(0, t.length - 1), e) : Ct(i, function(s) {
            return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s)
        })
    },
    he = function(t) {
        for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e));) s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? qi : Ye), i += t.substr(e, r - e) + sr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
        return i + t.substr(e, t.length - e)
    },
    or = function(t, e, i, r, n) {
        var s = e - t,
            a = r - i;
        return Ct(n, function(o) {
            return i + ((o - t) / s * a || 0)
        })
    },
    on = function u(t, e, i, r) {
        var n = isNaN(t + e) ? 0 : function(d) {
            return (1 - d) * t + d * e
        };
        if (!n) {
            var s = Y(t),
                a = {},
                o, f, h, l, c;
            if (i === !0 && (r = 1) && (i = null), s) t = {
                p: t
            }, e = {
                p: e
            };
            else if (H(t) && !H(e)) {
                for (h = [], l = t.length, c = l - 2, f = 1; f < l; f++) h.push(u(t[f - 1], t[f]));
                l--, n = function(p) {
                    p *= l;
                    var _ = Math.min(c, ~~p);
                    return h[_](p - _)
                }, i = e
            } else r || (t = Ut(H(t) ? [] : {}, t));
            if (!h) {
                for (o in e) _i.call(a, t, o, "get", e[o]);
                n = function(p) {
                    return pi(p, a) || (s ? t.p : t)
                }
            }
        }
        return Ct(i, n)
    },
    Si = function(t, e, i) {
        var r = t.labels,
            n = at,
            s, a, o;
        for (s in r) a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
        return o
    },
    ut = function(t, e, i) {
        var r = t.vars,
            n = r[e],
            s = z,
            a = t._ctx,
            o, f, h;
        if (n) return o = r[e + "Params"], f = r.callbackScope || t, i && Pt.length && Pe(), a && (z = a), h = o ? n.apply(f, o) : n.call(f), z = s, h
    },
    ne = function(t) {
        return kt(t), t.scrollTrigger && t.scrollTrigger.kill(!!W), t.progress() < 1 && ut(t, "onInterrupt"), t
    },
    Gt, ur = [],
    fr = function(t) {
        if (si() && t) {
            t = !t.name && t.default || t;
            var e = t.name,
                i = L(t),
                r = e && !i && t.init ? function() {
                    this._props = []
                } : t,
                n = {
                    init: fe,
                    render: pi,
                    add: _i,
                    kill: wn,
                    modifier: bn,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: di,
                    aliases: {},
                    register: 0
                };
            if (jt(), t !== r) {
                if (tt[e]) return;
                ft(r, ft(Se(t, n), s)), Ut(r.prototype, Ut(n, Se(t, s))), tt[r.prop = e] = r, t.targetTest && (ve.push(r), ui[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            Gi(e, r), t.register && t.register(J, r, j)
        } else t && ur.push(t)
    },
    M = 255,
    se = {
        aqua: [0, M, M],
        lime: [0, M, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, M],
        navy: [0, 0, 128],
        white: [M, M, M],
        olive: [128, 128, 0],
        yellow: [M, M, 0],
        orange: [M, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [M, 0, 0],
        pink: [M, 192, 203],
        cyan: [0, M, M],
        transparent: [M, M, M, 0]
    },
    ze = function(t, e, i) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + .5 | 0
    },
    hr = function(t, e, i) {
        var r = t ? xt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : se.black,
            n, s, a, o, f, h, l, c, d, p;
        if (!r) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), se[t]) r = se[t];
            else if (t.charAt(0) === "#") {
                if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & M, t & M]
            } else if (t.substr(0, 3) === "hsl") {
                if (r = p = t.match(Ye), !e) o = +r[0] % 360 / 360, f = +r[1] / 100, h = +r[2] / 100, s = h <= .5 ? h * (f + 1) : h + f - h * f, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = ze(o + 1 / 3, n, s), r[1] = ze(o, n, s), r[2] = ze(o - 1 / 3, n, s);
                else if (~t.indexOf("=")) return r = t.match(Vi), i && r.length < 4 && (r[3] = 1), r
            } else r = t.match(Ye) || se.transparent;
            r = r.map(Number)
        }
        return e && !p && (n = r[0] / M, s = r[1] / M, a = r[2] / M, l = Math.max(n, s, a), c = Math.min(n, s, a), h = (l + c) / 2, l === c ? o = f = 0 : (d = l - c, f = h > .5 ? d / (2 - l - c) : d / (l + c), o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + .5), r[1] = ~~(f * 100 + .5), r[2] = ~~(h * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
    },
    _r = function(t) {
        var e = [],
            i = [],
            r = -1;
        return t.split(St).forEach(function(n) {
            var s = n.match(Xt) || [];
            e.push.apply(e, s), i.push(r += s.length + 1)
        }), e.c = i, e
    },
    ki = function(t, e, i) {
        var r = "",
            n = (t + r).match(St),
            s = e ? "hsla(" : "rgba(",
            a = 0,
            o, f, h, l;
        if (!n) return t;
        if (n = n.map(function(c) {
                return (c = hr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
            }), i && (h = _r(t), o = i.c, o.join(r) !== h.c.join(r)))
            for (f = t.replace(St, "1").split(Xt), l = f.length - 1; a < l; a++) r += f[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
        if (!f)
            for (f = t.split(St), l = f.length - 1; a < l; a++) r += f[a] + n[a];
        return r + f[l]
    },
    St = function() {
        var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            t;
        for (t in se) u += "|" + t + "\\b";
        return new RegExp(u + ")", "gi")
    }(),
    un = /hsl[a]?\(/,
    lr = function(t) {
        var e = t.join(" "),
            i;
        if (St.lastIndex = 0, St.test(e)) return i = un.test(e), t[1] = ki(t[1], i), t[0] = ki(t[0], i, _r(t[1])), !0
    },
    _e, et = function() {
        var u = Date.now,
            t = 500,
            e = 33,
            i = u(),
            r = i,
            n = 1e3 / 240,
            s = n,
            a = [],
            o, f, h, l, c, d, p = function _(m) {
                var g = u() - r,
                    y = m === !0,
                    v, T, x, S;
                if (g > t && (i += g - e), r += g, x = r - i, v = x - s, (v > 0 || y) && (S = ++l.frame, c = x - l.time * 1e3, l.time = x = x / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), y || (o = f(_)), T)
                    for (d = 0; d < a.length; d++) a[d](x, c, S, m)
            };
        return l = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(m) {
                return c / (1e3 / (m || 60))
            },
            wake: function() {
                Yi && (!Xe && si() && (st = Xe = window, ai = st.document || {}, rt.gsap = J, (st.gsapVersions || (st.gsapVersions = [])).push(J.version), Xi(be || st.GreenSockGlobals || !st.gsap && st || {}), h = st.requestAnimationFrame, ur.forEach(fr)), o && l.sleep(), f = h || function(m) {
                    return setTimeout(m, s - l.time * 1e3 + 1 | 0)
                }, _e = 1, p(2))
            },
            sleep: function() {
                (h ? st.cancelAnimationFrame : clearTimeout)(o), _e = 0, f = fe
            },
            lagSmoothing: function(m, g) {
                t = m || 1 / 0, e = Math.min(g || 33, t)
            },
            fps: function(m) {
                n = 1e3 / (m || 240), s = l.time * 1e3 + n
            },
            add: function(m, g, y) {
                var v = g ? function(T, x, S, P) {
                    m(T, x, S, P), l.remove(v)
                } : m;
                return l.remove(m), a[y ? "unshift" : "push"](v), jt(), v
            },
            remove: function(m, g) {
                ~(g = a.indexOf(m)) && a.splice(g, 1) && d >= g && d--
            },
            _listeners: a
        }, l
    }(),
    jt = function() {
        return !_e && et.wake()
    },
    k = {},
    fn = /^[\d.\-M][\d.\-,\s]/,
    hn = /["']/g,
    _n = function(t) {
        for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, f; n < s; n++) o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, f = o.substr(0, a), e[r] = isNaN(f) ? f.replace(hn, "").trim() : +f, r = o.substr(a + 1).trim();
        return e
    },
    ln = function(t) {
        var e = t.indexOf("(") + 1,
            i = t.indexOf(")"),
            r = t.indexOf("(", e);
        return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
    },
    cn = function(t) {
        var e = (t + "").split("("),
            i = k[e[0]];
        return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [_n(e[1])] : ln(t).split(",").map(Qi)) : k._CE && fn.test(t) ? k._CE("", t) : i
    },
    cr = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    dr = function u(t, e) {
        for (var i = t._first, r; i;) i instanceof Q ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    },
    Nt = function(t, e) {
        return t && (L(t) ? t : k[t] || cn(t)) || e
    },
    qt = function(t, e, i, r) {
        i === void 0 && (i = function(o) {
            return 1 - e(1 - o)
        }), r === void 0 && (r = function(o) {
            return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
        });
        var n = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            },
            s;
        return Z(t, function(a) {
            k[a] = rt[a] = n, k[s = a.toLowerCase()] = i;
            for (var o in n) k[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = k[a + "." + o] = n[o]
        }), n
    },
    pr = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    },
    Le = function u(t, e, i) {
        var r = e >= 1 ? e : 1,
            n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
            s = n / qe * (Math.asin(1 / r) || 0),
            a = function(h) {
                return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Vr((h - s) * n) + 1
            },
            o = t === "out" ? a : t === "in" ? function(f) {
                return 1 - a(1 - f)
            } : pr(a);
        return n = qe / n, o.config = function(f, h) {
            return u(t, f, h)
        }, o
    },
    Ie = function u(t, e) {
        e === void 0 && (e = 1.70158);
        var i = function(s) {
                return s ? --s * s * ((e + 1) * s + e) + 1 : 0
            },
            r = t === "out" ? i : t === "in" ? function(n) {
                return 1 - i(1 - n)
            } : pr(i);
        return r.config = function(n) {
            return u(t, n)
        }, r
    };
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
    var e = t < 5 ? t + 1 : t;
    qt(u + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
qt("Elastic", Le("in"), Le("out"), Le());
(function(u, t) {
    var e = 1 / t,
        i = 2 * e,
        r = 2.5 * e,
        n = function(a) {
            return a < e ? u * a * a : a < i ? u * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? u * (a -= 2.25 / t) * a + .9375 : u * Math.pow(a - 2.625 / t, 2) + .984375
        };
    qt("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
qt("Expo", function(u) {
    return u ? Math.pow(2, 10 * (u - 1)) : 0
});
qt("Circ", function(u) {
    return -(Bi(1 - u * u) - 1)
});
qt("Sine", function(u) {
    return u === 1 ? 1 : -Nr(u * Ir) + 1
});
qt("Back", Ie("in"), Ie("out"), Ie());
k.SteppedEase = k.steps = rt.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            s = 1 - D;
        return function(a) {
            return ((r * me(0, s, a) | 0) + n) * i
        }
    }
};
Qt.ease = k["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
    return fi += u + "," + u + "Params,"
});
var mr = function(t, e) {
        this.id = Br++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Hi, this.set = e ? e.getSetter : di
    },
    le = function() {
        function u(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Zt(this, +e.duration, 1, 1), this.data = e.data, z && (this._ctx = z, z.data.push(this)), _e || et.wake()
        }
        var t = u.prototype;
        return t.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, t.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, t.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, Zt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(i, r) {
            if (jt(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Ee(this, i), !n._dp || n.parent || ji(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && lt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), $i(this, i, r)), this
        }, t.time = function(i, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + wi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
        }, t.totalProgress = function(i, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, t.progress = function(i, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + wi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, t.iteration = function(i, r) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Kt(this._tTime, n) + 1 : 1
        }, t.timeScale = function(i) {
            if (!arguments.length) return this._rts === -D ? 0 : this._rts;
            if (this._rts === i) return this;
            var r = this.parent && this._ts ? ke(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -D ? 0 : this._rts, this.totalTime(me(-Math.abs(this._delay), this._tDur, r), !0), Ae(this), Hr(this)
        }, t.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (jt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps
        }, t.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && lt(r, this, i - this._delay), this
            }
            return this._start
        }, t.endTime = function(i) {
            return this._start + (K(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(i) {
            var r = this.parent || this._dp;
            return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ke(r.rawTime(i), this) : this._tTime : this._tTime
        }, t.revert = function(i) {
            i === void 0 && (i = Yr);
            var r = W;
            return W = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), W = r, this
        }, t.globalTime = function(i) {
            for (var r = this, n = arguments.length ? i : r.rawTime(); r;) n = r._start + n / (r._ts || 1), r = r._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : n
        }, t.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Pi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(i) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = i, Pi(this), r ? this.time(r) : this
            }
            return this._rDelay
        }, t.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, t.seek = function(i, r) {
            return this.totalTime(nt(this, i), K(r))
        }, t.restart = function(i, r) {
            return this.play().totalTime(i ? -this._delay : 0, K(r))
        }, t.play = function(i, r) {
            return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
        }, t.reverse = function(i, r) {
            return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
        }, t.pause = function(i, r) {
            return i != null && this.seek(i, r), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -D, this
        }, t.isActive = function() {
            var i = this.parent || this._dp,
                r = this._start,
                n;
            return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D)
        }, t.eventCallback = function(i, r, n) {
            var s = this.vars;
            return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i]
        }, t.then = function(i) {
            var r = this;
            return new Promise(function(n) {
                var s = L(i) ? i : Ki,
                    a = function() {
                        var f = r.then;
                        r.then = null, L(s) && (s = s(r)) && (s.then || s === r) && (r.then = f), n(s), r.then = f
                    };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
            })
        }, t.kill = function() {
            ne(this)
        }, u
    }();
ft(le.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -D,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Q = function(u) {
    Ii(t, u);

    function t(i, r) {
        var n;
        return i === void 0 && (i = {}), n = u.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = K(i.sortChildren), E && lt(i.parent || E, gt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Ji(gt(n), i.scrollTrigger), n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return oe(0, arguments, this), this
    }, e.from = function(r, n, s) {
        return oe(1, arguments, this), this
    }, e.fromTo = function(r, n, s, a) {
        return oe(2, arguments, this), this
    }, e.set = function(r, n, s) {
        return n.duration = 0, n.parent = this, ae(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(r, n, nt(this, s), 1), this
    }, e.call = function(r, n, s) {
        return lt(this, U.delayedCall(0, r, n), s)
    }, e.staggerTo = function(r, n, s, a, o, f, h) {
        return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = h, s.parent = this, new U(r, s, nt(this, o)), this
    }, e.staggerFrom = function(r, n, s, a, o, f, h) {
        return s.runBackwards = 1, ae(s).immediateRender = K(s.immediateRender), this.staggerTo(r, n, s, a, o, f, h)
    }, e.staggerFromTo = function(r, n, s, a, o, f, h, l) {
        return a.startAt = s, ae(a).immediateRender = K(a.immediateRender), this.staggerTo(r, n, a, o, f, h, l)
    }, e.render = function(r, n, s) {
        var a = this._time,
            o = this._dirty ? this.totalDuration() : this._tDur,
            f = this._dur,
            h = r <= 0 ? 0 : X(r),
            l = this._zTime < 0 != r < 0 && (this._initted || !f),
            c, d, p, _, m, g, y, v, T, x, S, P;
        if (this !== E && h > o && r >= 0 && (h = o), h !== this._tTime || s || l) {
            if (a !== this._time && f && (h += this._time - a, r += this._time - a), c = h, T = this._start, v = this._ts, g = !v, l && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                if (S = this._yoyo, m = f + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(m * 100 + r, n, s);
                if (c = X(h % m), h === o ? (_ = this._repeat, c = f) : (_ = ~~(h / m), _ && _ === h / m && (c = f, _--), c > f && (c = f)), x = Kt(this._tTime, m), !a && this._tTime && x !== _ && this._tTime - x * m - this._dur <= 0 && (x = _), S && _ & 1 && (c = f - c, P = 1), _ !== x && !this._lock) {
                    var w = S && x & 1,
                        b = w === (S && _ & 1);
                    if (_ < x && (w = !w), a = w ? 0 : h % f ? f : h, this._lock = 1, this.render(a || (P ? 0 : X(_ * m)), n, !f)._lock = 0, this._tTime = h, !n && this.parent && ut(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (f = this._dur, o = this._tDur, b && (this._lock = 2, a = w ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !g) return this;
                    dr(this, P)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = Zr(this, X(a), X(c)), y && (h -= c - (c = y._start))), this._tTime = h, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !n && !_ && (ut(this, "onStart"), this._tTime !== h)) return this;
            if (c >= a && r >= 0)
                for (d = this._first; d;) {
                    if (p = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
                        if (d.parent !== this) return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !g) {
                            y = 0, p && (h += this._zTime = -D);
                            break
                        }
                    }
                    d = p
                } else {
                    d = this._last;
                    for (var O = r < 0 ? r : c; d;) {
                        if (p = d._prev, (d._act || O <= d._end) && d._ts && y !== d) {
                            if (d.parent !== this) return this.render(r, n, s);
                            if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || W && (d._initted || d._startAt)), c !== this._time || !this._ts && !g) {
                                y = 0, p && (h += this._zTime = O ? -D : D);
                                break
                            }
                        }
                        d = p
                    }
                }
            if (y && !n && (this.pause(), y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts)) return this._start = T, Ae(this), this.render(r, n, s);
            this._onUpdate && !n && ut(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === o && this._ts > 0 || !h && this._ts < 0) && kt(this, 1), !n && !(r < 0 && !a) && (h || a || !o) && (ut(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, e.add = function(r, n) {
        var s = this;
        if (xt(n) || (n = nt(this, n, r)), !(r instanceof le)) {
            if (H(r)) return r.forEach(function(a) {
                return s.add(a, n)
            }), this;
            if (Y(r)) return this.addLabel(r, n);
            if (L(r)) r = U.delayedCall(0, r);
            else return this
        }
        return this !== r ? lt(this, r, n) : this
    }, e.getChildren = function(r, n, s, a) {
        r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -at);
        for (var o = [], f = this._first; f;) f._start >= a && (f instanceof U ? n && o.push(f) : (s && o.push(f), r && o.push.apply(o, f.getChildren(!0, n, s)))), f = f._next;
        return o
    }, e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === r) return n[s]
    }, e.remove = function(r) {
        return Y(r) ? this.removeLabel(r) : L(r) ? this.killTweensOf(r) : (De(this, r), r === this._recent && (this._recent = this._last), Bt(this))
    }, e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = X(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), u.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function(r, n) {
        return this.labels[r] = nt(this, n), this
    }, e.removeLabel = function(r) {
        return delete this.labels[r], this
    }, e.addPause = function(r, n, s) {
        var a = U.delayedCall(0, n || fe, s);
        return a.data = "isPause", this._hasPause = 1, lt(this, a, nt(this, r))
    }, e.removePause = function(r) {
        var n = this._first;
        for (r = nt(this, r); n;) n._start === r && n.data === "isPause" && kt(n), n = n._next
    }, e.killTweensOf = function(r, n, s) {
        for (var a = this.getTweensOf(r, s), o = a.length; o--;) Tt !== a[o] && a[o].kill(r, n);
        return this
    }, e.getTweensOf = function(r, n) {
        for (var s = [], a = ot(r), o = this._first, f = xt(n), h; o;) o instanceof U ? Xr(o._targets, a) && (f ? (!Tt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h), o = o._next;
        return s
    }, e.tweenTo = function(r, n) {
        n = n || {};
        var s = this,
            a = nt(s, r),
            o = n,
            f = o.startAt,
            h = o.onStart,
            l = o.onStartParams,
            c = o.immediateRender,
            d, p = U.to(s, ft({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || D,
                onStart: function() {
                    if (s.pause(), !d) {
                        var m = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
                        p._dur !== m && Zt(p, m, 0, 1).render(p._time, !0, !0), d = 1
                    }
                    h && h.apply(p, l || [])
                }
            }, n));
        return c ? p.render(0) : p
    }, e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, ft({
            startAt: {
                time: nt(this, r)
            }
        }, s))
    }, e.recent = function() {
        return this._recent
    }, e.nextLabel = function(r) {
        return r === void 0 && (r = this._time), Si(this, nt(this, r))
    }, e.previousLabel = function(r) {
        return r === void 0 && (r = this._time), Si(this, nt(this, r), 1)
    }, e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D)
    }, e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, f; a;) a._start >= s && (a._start += r, a._end += r), a = a._next;
        if (n)
            for (f in o) o[f] >= s && (o[f] += r);
        return Bt(this)
    }, e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return u.prototype.invalidate.call(this, r)
    }, e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Bt(this)
    }, e.totalDuration = function(r) {
        var n = 0,
            s = this,
            a = s._last,
            o = at,
            f, h, l;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (l = s.parent; a;) f = a._prev, a._dirty && a.totalDuration(), h = a._start, h > o && s._sort && a._ts && !s._lock ? (s._lock = 1, lt(s, a, h - a._delay, 1)._lock = 0) : o = h, h < 0 && a._ts && (n -= h, (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = f;
            Zt(s, s === E && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, t.updateRoot = function(r) {
        if (E._ts && ($i(E, ke(r, E)), Wi = et.frame), et.frame >= Ti) {
            Ti += it.autoSleep || 120;
            var n = E._first;
            if ((!n || !n._ts) && it.autoSleep && et._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || et.sleep()
            }
        }
    }, t
}(le);
ft(Q.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var dn = function(t, e, i, r, n, s, a) {
        var o = new j(this._pt, t, e, 0, 1, br, null, n),
            f = 0,
            h = 0,
            l, c, d, p, _, m, g, y;
        for (o.b = i, o.e = r, i += "", r += "", (g = ~r.indexOf("random(")) && (r = he(r)), s && (y = [i, r], s(y, t, e), i = y[0], r = y[1]), c = i.match(Re) || []; l = Re.exec(r);) p = l[0], _ = r.substring(f, l.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), p !== c[h++] && (m = parseFloat(c[h - 1]) || 0, o._pt = {
            _next: o._pt,
            p: _ || h === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? Wt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0
        }, f = Re.lastIndex);
        return o.c = f < r.length ? r.substring(f, r.length) : "", o.fp = a, (Ui.test(r) || g) && (o.e = 0), this._pt = o, o
    },
    _i = function(t, e, i, r, n, s, a, o, f, h) {
        L(r) && (r = r(n || 0, t, s));
        var l = t[e],
            c = i !== "get" ? i : L(l) ? f ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : l,
            d = L(l) ? f ? xn : vr : ci,
            p;
        if (Y(r) && (~r.indexOf("random(") && (r = he(r)), r.charAt(1) === "=" && (p = Wt(c, r) + (G(c) || 0), (p || p === 0) && (r = p))), !h || c !== r || Ze) return !isNaN(c * r) && r !== "" ? (p = new j(this._pt, t, e, +c || 0, r - (c || 0), typeof l == "boolean" ? Tn : Tr, 0, d), f && (p.fp = f), a && p.modifier(a, this, t), this._pt = p) : (!l && !(e in t) && oi(e, r), dn.call(this, t, e, c, r, d, o || it.stringFilter, f))
    },
    pn = function(t, e, i, r, n) {
        if (L(t) && (t = ue(t, n, e, i, r)), !pt(t) || t.style && t.nodeType || H(t) || Ni(t)) return Y(t) ? ue(t, n, e, i, r) : t;
        var s = {},
            a;
        for (a in t) s[a] = ue(t[a], n, e, i, r);
        return s
    },
    gr = function(t, e, i, r, n, s) {
        var a, o, f, h;
        if (tt[t] && (a = new tt[t]).init(n, a.rawVars ? e[t] : pn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new j(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Gt))
            for (f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--;) f[a._props[h]] = o;
        return a
    },
    Tt, Ze, li = function u(t, e, i) {
        var r = t.vars,
            n = r.ease,
            s = r.startAt,
            a = r.immediateRender,
            o = r.lazy,
            f = r.onUpdate,
            h = r.onUpdateParams,
            l = r.callbackScope,
            c = r.runBackwards,
            d = r.yoyoEase,
            p = r.keyframes,
            _ = r.autoRevert,
            m = t._dur,
            g = t._startAt,
            y = t._targets,
            v = t.parent,
            T = v && v.data === "nested" ? v.vars.targets : y,
            x = t._overwrite === "auto" && !ri,
            S = t.timeline,
            P, w, b, O, C, F, B, N, A, q, V, $, Mt;
        if (S && (!p || !n) && (n = "none"), t._ease = Nt(n, Qt.ease), t._yEase = d ? cr(Nt(d === !0 ? n : d, Qt.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !S && !!r.runBackwards, !S || p && !r.stagger) {
            if (N = y[0] ? It(y[0]).harness : 0, $ = N && r[N.prop], P = Se(r, ui), g && (g._zTime < 0 && g.progress(1), e < 0 && c && a && !_ ? g.render(-1, !0) : g.revert(c && m ? xe : qr), g._lazy = 0), s) {
                if (kt(t._startAt = U.set(y, ft({
                        data: "isStart",
                        overwrite: !1,
                        parent: v,
                        immediateRender: !0,
                        lazy: !g && K(o),
                        startAt: null,
                        delay: 0,
                        onUpdate: f,
                        onUpdateParams: h,
                        callbackScope: l,
                        stagger: 0
                    }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W || !a && !_) && t._startAt.revert(xe), a && m && e <= 0 && i <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else if (c && m && !g) {
                if (e && (a = !1), b = ft({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !g && K(o),
                        immediateRender: a,
                        stagger: 0,
                        parent: v
                    }, P), $ && (b[N.prop] = $), kt(t._startAt = U.set(y, b)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W ? t._startAt.revert(xe) : t._startAt.render(-1, !0)), t._zTime = e, !a) u(t._startAt, D, D);
                else if (!e) return
            }
            for (t._pt = t._ptCache = 0, o = m && K(o) || o && !m, w = 0; w < y.length; w++) {
                if (C = y[w], B = C._gsap || hi(y)[w]._gsap, t._ptLookup[w] = q = {}, Ge[B.id] && Pt.length && Pe(), V = T === y ? w : T.indexOf(C), N && (A = new N).init(C, $ || P, t, V, T) !== !1 && (t._pt = O = new j(t._pt, C, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(Dt) {
                        q[Dt] = O
                    }), A.priority && (F = 1)), !N || $)
                    for (b in P) tt[b] && (A = gr(b, P, t, V, C, T)) ? A.priority && (F = 1) : q[b] = O = _i.call(t, C, b, "get", P[b], V, T, 0, r.stringFilter);
                t._op && t._op[w] && t.kill(C, t._op[w]), x && t._pt && (Tt = t, E.killTweensOf(C, q, t.globalTime(e)), Mt = !t.parent, Tt = 0), t._pt && o && (Ge[B.id] = 1)
            }
            F && wr(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = f, t._initted = (!t._op || t._pt) && !Mt, p && e <= 0 && S.render(at, !0, !0)
    },
    mn = function(t, e, i, r, n, s, a) {
        var o = (t._pt && t._ptCache || (t._ptCache = {}))[e],
            f, h, l, c;
        if (!o)
            for (o = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length; c--;) {
                if (f = l[c][e], f && f.d && f.d._pt)
                    for (f = f.d._pt; f && f.p !== e && f.fp !== e;) f = f._next;
                if (!f) return Ze = 1, t.vars[e] = "+=0", li(t, a), Ze = 0, 1;
                o.push(f)
            }
        for (c = o.length; c--;) h = o[c], f = h._pt || h, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c, f.c = i - f.s, h.e && (h.e = I(i) + G(h.e)), h.b && (h.b = f.s + G(h.b))
    },
    gn = function(t, e) {
        var i = t[0] ? It(t[0]).harness : 0,
            r = i && i.aliases,
            n, s, a, o;
        if (!r) return e;
        n = Ut({}, e);
        for (s in r)
            if (s in n)
                for (o = r[s].split(","), a = o.length; a--;) n[o[a]] = n[s];
        return n
    },
    yn = function(t, e, i, r) {
        var n = e.ease || r || "power1.inOut",
            s, a;
        if (H(e)) a = i[t] || (i[t] = []), e.forEach(function(o, f) {
            return a.push({
                t: f / (e.length - 1) * 100,
                v: o,
                e: n
            })
        });
        else
            for (s in e) a = i[s] || (i[s] = []), s === "ease" || a.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
    },
    ue = function(t, e, i, r, n) {
        return L(t) ? t.call(e, i, r, n) : Y(t) && ~t.indexOf("random(") ? he(t) : t
    },
    yr = fi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    xr = {};
Z(yr + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
    return xr[u] = 1
});
var U = function(u) {
    Ii(t, u);

    function t(i, r, n, s) {
        var a;
        typeof r == "number" && (n.duration = r, r = n, n = null), a = u.call(this, s ? r : ae(r)) || this;
        var o = a.vars,
            f = o.duration,
            h = o.delay,
            l = o.immediateRender,
            c = o.stagger,
            d = o.overwrite,
            p = o.keyframes,
            _ = o.defaults,
            m = o.scrollTrigger,
            g = o.yoyoEase,
            y = r.parent || E,
            v = (H(i) || Ni(i) ? xt(i[0]) : "length" in r) ? [i] : ot(i),
            T, x, S, P, w, b, O, C;
        if (a._targets = v.length ? hi(v) : we("GSAP target " + i + " not found. https://greensock.com", !it.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || ge(f) || ge(h)) {
            if (r = a.vars, T = a.timeline = new Q({
                    data: "nested",
                    defaults: _ || {},
                    targets: y && y.data === "nested" ? y.vars.targets : v
                }), T.kill(), T.parent = T._dp = gt(a), T._start = 0, c || ge(f) || ge(h)) {
                if (P = v.length, O = c && rr(c), pt(c))
                    for (w in c) ~yr.indexOf(w) && (C || (C = {}), C[w] = c[w]);
                for (x = 0; x < P; x++) S = Se(r, xr), S.stagger = 0, g && (S.yoyoEase = g), C && Ut(S, C), b = v[x], S.duration = +ue(f, gt(a), x, b, v), S.delay = (+ue(h, gt(a), x, b, v) || 0) - a._delay, !c && P === 1 && S.delay && (a._delay = h = S.delay, a._start += h, S.delay = 0), T.to(b, S, O ? O(x, b, v) : 0), T._ease = k.none;
                T.duration() ? f = h = 0 : a.timeline = 0
            } else if (p) {
                ae(ft(T.vars.defaults, {
                    ease: "none"
                })), T._ease = Nt(p.ease || r.ease || "none");
                var F = 0,
                    B, N, A;
                if (H(p)) p.forEach(function(q) {
                    return T.to(v, q, ">")
                }), T.duration();
                else {
                    S = {};
                    for (w in p) w === "ease" || w === "easeEach" || yn(w, p[w], S, p.easeEach);
                    for (w in S)
                        for (B = S[w].sort(function(q, V) {
                                return q.t - V.t
                            }), F = 0, x = 0; x < B.length; x++) N = B[x], A = {
                            ease: N.e,
                            duration: (N.t - (x ? B[x - 1].t : 0)) / 100 * f
                        }, A[w] = N.v, T.to(v, A, F), F += A.duration;
                    T.duration() < f && T.to({}, {
                        duration: f - T.duration()
                    })
                }
            }
            f || a.duration(f = T.duration())
        } else a.timeline = 0;
        return d === !0 && !ri && (Tt = gt(a), E.killTweensOf(v), Tt = 0), lt(y, gt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (l || !f && !p && a._start === X(y._time) && K(l) && $r(gt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -h) || 0)), m && Ji(gt(a), m), a
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var a = this._time,
            o = this._tDur,
            f = this._dur,
            h = r < 0,
            l = r > o - D && !h ? o : r < D ? 0 : r,
            c, d, p, _, m, g, y, v, T;
        if (!f) Kr(this, r, n, s);
        else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (c = l, v = this.timeline, this._repeat) {
                if (_ = f + this._rDelay, this._repeat < -1 && h) return this.totalTime(_ * 100 + r, n, s);
                if (c = X(l % _), l === o ? (p = this._repeat, c = f) : (p = ~~(l / _), p && p === l / _ && (c = f, p--), c > f && (c = f)), g = this._yoyo && p & 1, g && (T = this._yEase, c = f - c), m = Kt(this._tTime, _), c === a && !s && this._initted) return this._tTime = l, this;
                p !== m && (v && this._yEase && dr(v, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1, this.render(X(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (tr(this, h ? r : c, s, n, l)) return this._tTime = 0, this;
                if (a !== this._time) return this;
                if (f !== this._dur) return this.render(r, n, s)
            }
            if (this._tTime = l, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(c / f), this._from && (this.ratio = y = 1 - y), c && !a && !n && !p && (ut(this, "onStart"), this._tTime !== l)) return this;
            for (d = this._pt; d;) d.r(y, d.d), d = d._next;
            v && v.render(r < 0 ? r : !c && g ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && We(this, r, n, s), ut(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && We(this, r, !0, !0), (r || !f) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && kt(this, 1), !n && !(h && !a) && (l || a || g) && (ut(this, l === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, e.targets = function() {
        return this._targets
    }, e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), u.prototype.invalidate.call(this, r)
    }, e.resetTo = function(r, n, s, a) {
        _e || et.wake(), this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            f;
        return this._initted || li(this, o), f = this._ease(o / this._dur), mn(this, r, n, s, a, f, o) ? this.resetTo(r, n, s, a) : (Ee(this, 0), this.parent || Zi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function(r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? ne(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, Tt && Tt.vars.overwrite !== !0)._first || ne(this), this.parent && s !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets,
            o = r ? ot(r) : a,
            f = this._ptLookup,
            h = this._pt,
            l, c, d, p, _, m, g;
        if ((!n || n === "all") && Wr(a, o)) return n === "all" && (this._pt = 0), ne(this);
        for (l = this._op = this._op || [], n !== "all" && (Y(n) && (_ = {}, Z(n, function(y) {
                return _[y] = 1
            }), n = _), n = gn(a, n)), g = a.length; g--;)
            if (~o.indexOf(a[g])) {
                c = f[g], n === "all" ? (l[g] = n, p = c, d = {}) : (d = l[g] = l[g] || {}, p = n);
                for (_ in p) m = c && c[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && De(this, m, "_pt"), delete c[_]), d !== "all" && (d[_] = 1)
            }
        return this._initted && !this._pt && h && ne(this), this
    }, t.to = function(r, n) {
        return new t(r, n, arguments[2])
    }, t.from = function(r, n) {
        return oe(1, arguments)
    }, t.delayedCall = function(r, n, s, a) {
        return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }, t.fromTo = function(r, n, s) {
        return oe(2, arguments)
    }, t.set = function(r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n)
    }, t.killTweensOf = function(r, n, s) {
        return E.killTweensOf(r, n, s)
    }, t
}(le);
ft(U.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(u) {
    U[u] = function() {
        var t = new Q,
            e = $e.call(arguments, 0);
        return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e)
    }
});
var ci = function(t, e, i) {
        return t[e] = i
    },
    vr = function(t, e, i) {
        return t[e](i)
    },
    xn = function(t, e, i, r) {
        return t[e](r.fp, i)
    },
    vn = function(t, e, i) {
        return t.setAttribute(e, i)
    },
    di = function(t, e) {
        return L(t[e]) ? vr : ni(t[e]) && t.setAttribute ? vn : ci
    },
    Tr = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    },
    Tn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    br = function(t, e) {
        var i = e._pt,
            r = "";
        if (!t && e.b) r = e.b;
        else if (t === 1 && e.e) r = e.e;
        else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    },
    pi = function(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    },
    bn = function(t, e, i, r) {
        for (var n = this._pt, s; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
    },
    wn = function(t) {
        for (var e = this._pt, i, r; e;) r = e._next, e.p === t && !e.op || e.op === t ? De(this, e, "_pt") : e.dep || (i = 1), e = r;
        return !i
    },
    Pn = function(t, e, i, r) {
        r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    },
    wr = function(t) {
        for (var e = t._pt, i, r, n, s; e;) {
            for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
            (e._prev = r ? r._prev : s) ? e._prev._next = e: n = e, (e._next = r) ? r._prev = e : s = e, e = i
        }
        t._pt = n
    },
    j = function() {
        function u(e, i, r, n, s, a, o, f, h) {
            this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || Tr, this.d = o || this, this.set = f || ci, this.pr = h || 0, this._next = e, e && (e._prev = this)
        }
        var t = u.prototype;
        return t.modifier = function(i, r, n) {
            this.mSet = this.mSet || this.set, this.set = Pn, this.m = i, this.mt = n, this.tween = r
        }, u
    }();
Z(fi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
    return ui[u] = 1
});
rt.TweenMax = rt.TweenLite = U;
rt.TimelineLite = rt.TimelineMax = Q;
E = new Q({
    sortChildren: !1,
    defaults: Qt,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
it.stringFilter = lr;
var Vt = [],
    Te = {},
    Sn = [],
    Oi = 0,
    kn = 0,
    Be = function(t) {
        return (Te[t] || Sn).map(function(e) {
            return e()
        })
    },
    je = function() {
        var t = Date.now(),
            e = [];
        t - Oi > 2 && (Be("matchMediaInit"), Vt.forEach(function(i) {
            var r = i.queries,
                n = i.conditions,
                s, a, o, f;
            for (a in r) s = st.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, f = 1);
            f && (i.revert(), o && e.push(i))
        }), Be("matchMediaRevert"), e.forEach(function(i) {
            return i.onMatch(i)
        }), Oi = t, Be("matchMedia"))
    },
    Pr = function() {
        function u(e, i) {
            this.selector = i && Qe(i), this.data = [], this._r = [], this.isReverted = !1, this.id = kn++, e && this.add(e)
        }
        var t = u.prototype;
        return t.add = function(i, r, n) {
            L(i) && (n = r, r = i, i = L);
            var s = this,
                a = function() {
                    var f = z,
                        h = s.selector,
                        l;
                    return f && f !== s && f.data.push(s), n && (s.selector = Qe(n)), z = s, l = r.apply(s, arguments), L(l) && s._r.push(l), z = f, s.selector = h, s.isReverted = !1, l
                };
            return s.last = a, i === L ? a(s) : i ? s[i] = a : a
        }, t.ignore = function(i) {
            var r = z;
            z = null, i(this), z = r
        }, t.getTweens = function() {
            var i = [];
            return this.data.forEach(function(r) {
                return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r)
            }), i
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(i, r) {
            var n = this;
            if (i) {
                var s = this.getTweens();
                this.data.forEach(function(o) {
                    o.data === "isFlip" && (o.revert(), o.getChildren(!0, !0, !1).forEach(function(f) {
                        return s.splice(s.indexOf(f), 1)
                    }))
                }), s.map(function(o) {
                    return {
                        g: o.globalTime(0),
                        t: o
                    }
                }).sort(function(o, f) {
                    return f.g - o.g || -1 / 0
                }).forEach(function(o) {
                    return o.t.revert(i)
                }), this.data.forEach(function(o) {
                    return !(o instanceof U) && o.revert && o.revert(i)
                }), this._r.forEach(function(o) {
                    return o(i, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(o) {
                return o.kill && o.kill()
            });
            if (this.clear(), r)
                for (var a = Vt.length; a--;) Vt[a].id === this.id && Vt.splice(a, 1)
        }, t.revert = function(i) {
            this.kill(i || {})
        }, u
    }(),
    On = function() {
        function u(e) {
            this.contexts = [], this.scope = e
        }
        var t = u.prototype;
        return t.add = function(i, r, n) {
            pt(i) || (i = {
                matches: i
            });
            var s = new Pr(0, n || this.scope),
                a = s.conditions = {},
                o, f, h;
            z && !s.selector && (s.selector = z.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
            for (f in i) f === "all" ? h = 1 : (o = st.matchMedia(i[f]), o && (Vt.indexOf(s) < 0 && Vt.push(s), (a[f] = o.matches) && (h = 1), o.addListener ? o.addListener(je) : o.addEventListener("change", je)));
            return h && r(s), this
        }, t.revert = function(i) {
            this.kill(i || {})
        }, t.kill = function(i) {
            this.contexts.forEach(function(r) {
                return r.kill(i, !0)
            })
        }, u
    }(),
    Oe = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(r) {
                return fr(r)
            })
        },
        timeline: function(t) {
            return new Q(t)
        },
        getTweensOf: function(t, e) {
            return E.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, r) {
            Y(t) && (t = ot(t)[0]);
            var n = It(t || {}).get,
                s = i ? Ki : Qi;
            return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, o, f) {
                return s((tt[a] && tt[a].get || n)(t, a, o, f))
            })
        },
        quickSetter: function(t, e, i) {
            if (t = ot(t), t.length > 1) {
                var r = t.map(function(h) {
                        return J.quickSetter(h, e, i)
                    }),
                    n = r.length;
                return function(h) {
                    for (var l = n; l--;) r[l](h)
                }
            }
            t = t[0] || {};
            var s = tt[e],
                a = It(t),
                o = a.harness && (a.harness.aliases || {})[e] || e,
                f = s ? function(h) {
                    var l = new s;
                    Gt._pt = 0, l.init(t, i ? h + i : h, Gt, 0, [t]), l.render(1, l), Gt._pt && pi(1, Gt)
                } : a.set(t, o);
            return s ? f : function(h) {
                return f(t, o, i ? h + i : h, a, 1)
            }
        },
        quickTo: function(t, e, i) {
            var r, n = J.to(t, Ut((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})),
                s = function(o, f, h) {
                    return n.resetTo(e, o, f, h)
                };
            return s.tween = n, s
        },
        isTweening: function(t) {
            return E.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Nt(t.ease, Qt.ease)), bi(Qt, t || {})
        },
        config: function(t) {
            return bi(it, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                r = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (r || "").split(",").forEach(function(a) {
                return a && !tt[a] && !rt[a] && we(e + " effect requires " + a + " plugin.")
            }), Fe[e] = function(a, o, f) {
                return i(ot(a), ft(o || {}, n), f)
            }, s && (Q.prototype[e] = function(a, o, f) {
                return this.add(Fe[e](a, pt(o) ? o : (f = o) && {}, this), f)
            })
        },
        registerEase: function(t, e) {
            k[t] = Nt(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Nt(t, e) : k
        },
        getById: function(t) {
            return E.getById(t)
        },
        exportRoot: function(t, e) {
            t === void 0 && (t = {});
            var i = new Q(t),
                r, n;
            for (i.smoothChildTiming = K(t.smoothChildTiming), E.remove(i), i._dp = 0, i._time = i._tTime = E._time, r = E._first; r;) n = r._next, (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay), r = n;
            return lt(E, i, 0), i
        },
        context: function(t, e) {
            return t ? new Pr(t, e) : z
        },
        matchMedia: function(t) {
            return new On(t)
        },
        matchMediaRefresh: function() {
            return Vt.forEach(function(t) {
                var e = t.conditions,
                    i, r;
                for (r in e) e[r] && (e[r] = !1, i = 1);
                i && t.revert()
            }) || je()
        },
        addEventListener: function(t, e) {
            var i = Te[t] || (Te[t] = []);
            ~i.indexOf(e) || i.push(e)
        },
        removeEventListener: function(t, e) {
            var i = Te[t],
                r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: sn,
            wrapYoyo: an,
            distribute: rr,
            random: sr,
            snap: nr,
            normalize: nn,
            getUnit: G,
            clamp: Jr,
            splitColor: hr,
            toArray: ot,
            selector: Qe,
            mapRange: or,
            pipe: en,
            unitize: rn,
            interpolate: on,
            shuffle: ir
        },
        install: Xi,
        effects: Fe,
        ticker: et,
        updateRoot: Q.updateRoot,
        plugins: tt,
        globalTimeline: E,
        core: {
            PropTween: j,
            globals: Gi,
            Tween: U,
            Timeline: Q,
            Animation: le,
            getCache: It,
            _removeLinkedListItem: De,
            reverting: function() {
                return W
            },
            context: function(t) {
                return t && z && (z.data.push(t), t._ctx = z), z
            },
            suppressOverwrites: function(t) {
                return ri = t
            }
        }
    };
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
    return Oe[u] = U[u]
});
et.add(Q.updateRoot);
Gt = Oe.to({}, {
    duration: 0
});
var Cn = function(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    },
    Mn = function(t, e) {
        var i = t._targets,
            r, n, s;
        for (r in e)
            for (n = i.length; n--;) s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Cn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r))
    },
    Ne = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(r, n, s) {
                s._onInit = function(a) {
                    var o, f;
                    if (Y(n) && (o = {}, Z(n, function(h) {
                            return o[h] = 1
                        }), n = o), e) {
                        o = {};
                        for (f in n) o[f] = e(n[f]);
                        n = o
                    }
                    Mn(a, n)
                }
            }
        }
    },
    J = Oe.registerPlugin({
        name: "attr",
        init: function(t, e, i, r, n) {
            var s, a, o;
            this.tween = i;
            for (s in e) o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s)
        },
        render: function(t, e) {
            for (var i = e._pt; i;) W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
    }, Ne("roundProps", Ke), Ne("modifiers"), Ne("snap", nr)) || Oe;
U.version = Q.version = J.version = "3.12.2";
Yi = 1;
si() && jt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ci, bt, Ht, mi, Lt, Mi, gi, Dn = function() {
        return typeof window < "u"
    },
    vt = {},
    zt = 180 / Math.PI,
    $t = Math.PI / 180,
    Yt = Math.atan2,
    Di = 1e8,
    yi = /([A-Z])/g,
    An = /(left|right|width|margin|padding|x)/i,
    En = /[\s,\(]\S/,
    ct = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Je = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    Rn = function(t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    Fn = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    },
    zn = function(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    },
    Sr = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    kr = function(t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    },
    Ln = function(t, e, i) {
        return t.style[e] = i
    },
    In = function(t, e, i) {
        return t.style.setProperty(e, i)
    },
    Bn = function(t, e, i) {
        return t._gsap[e] = i
    },
    Nn = function(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    },
    Vn = function(t, e, i, r, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(n, s)
    },
    Un = function(t, e, i, r, n) {
        var s = t._gsap;
        s[e] = i, s.renderTransform(n, s)
    },
    R = "transform",
    ht = R + "Origin",
    qn = function u(t, e) {
        var i = this,
            r = this.target,
            n = r.style;
        if (t in vt && n) {
            if (this.tfm = this.tfm || {}, t !== "transform") t = ct[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
                return i.tfm[s] = yt(r, s)
            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : yt(r, t);
            else return ct.transform.split(",").forEach(function(s) {
                return u.call(i, s, e)
            });
            if (this.props.indexOf(R) >= 0) return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ht, e, "")), t = R
        }(n || e) && this.props.push(t, e, n[t])
    },
    Or = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    Yn = function() {
        var t = this.props,
            e = this.target,
            i = e.style,
            r = e._gsap,
            n, s;
        for (n = 0; n < t.length; n += 3) t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(yi, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) r[s] = this.tfm[s];
            r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = gi(), (!n || !n.isStart) && !i[R] && (Or(i), r.uncache = 1)
        }
    },
    Cr = function(t, e) {
        var i = {
            target: t,
            props: [],
            revert: Yn,
            save: qn
        };
        return t._gsap || J.core.getCache(t), e && e.split(",").forEach(function(r) {
            return i.save(r)
        }), i
    },
    Mr, ti = function(t, e) {
        var i = bt.createElementNS ? bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bt.createElement(t);
        return i.style ? i : bt.createElement(t)
    },
    dt = function u(t, e, i) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(yi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u(t, Jt(e) || e, 1) || ""
    },
    Ai = "O,Moz,ms,Ms,Webkit".split(","),
    Jt = function(t, e, i) {
        var r = e || Lt,
            n = r.style,
            s = 5;
        if (t in n && !i) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Ai[s] + t in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ai[s] : "") + t
    },
    ei = function() {
        Dn() && window.document && (Ci = window, bt = Ci.document, Ht = bt.documentElement, Lt = ti("div") || {
            style: {}
        }, ti("div"), R = Jt(R), ht = R + "Origin", Lt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Mr = !!Jt("perspective"), gi = J.core.reverting, mi = 1)
    },
    Ve = function u(t) {
        var e = ti("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Ht.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = u
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Ht.removeChild(e), this.style.cssText = n, s
    },
    Ei = function(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    },
    Dr = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch {
            e = Ve.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Ve || (e = Ve.call(t, !0)), e && !e.width && !e.x && !e.y ? {
            x: +Ei(t, ["x", "cx", "x1"]) || 0,
            y: +Ei(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
    },
    Ar = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Dr(t))
    },
    ce = function(t, e) {
        if (e) {
            var i = t.style;
            e in vt && e !== ht && (e = R), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(yi, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    },
    wt = function(t, e, i, r, n, s) {
        var a = new j(t._pt, e, i, 0, 1, s ? kr : Sr);
        return t._pt = a, a.b = r, a.e = n, t._props.push(i), a
    },
    Ri = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Xn = {
        grid: 1,
        flex: 1
    },
    Ot = function u(t, e, i, r) {
        var n = parseFloat(i) || 0,
            s = (i + "").trim().substr((n + "").length) || "px",
            a = Lt.style,
            o = An.test(e),
            f = t.tagName.toLowerCase() === "svg",
            h = (f ? "client" : "offset") + (o ? "Width" : "Height"),
            l = 100,
            c = r === "px",
            d = r === "%",
            p, _, m, g;
        return r === s || !n || Ri[r] || Ri[s] ? n : (s !== "px" && !c && (n = u(t, e, i, "px")), g = t.getCTM && Ar(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")) ? (p = g ? t.getBBox()[o ? "width" : "height"] : t[h], I(d ? n / p * l : n / 100 * p)) : (a[o ? "width" : "height"] = l + (c ? s : r), _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, g && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === bt || !_.appendChild) && (_ = bt.body), m = _._gsap, m && d && m.width && o && m.time === et.time && !m.uncache ? I(n / m.width * l) : ((d || s === "%") && !Xn[dt(_, "display")] && (a.position = dt(t, "position")), _ === t && (a.position = "static"), _.appendChild(Lt), p = Lt[h], _.removeChild(Lt), a.position = "absolute", o && d && (m = It(_), m.time = et.time, m.width = _[h]), I(c ? p * n / l : p && n ? l / p * n : 0))))
    },
    yt = function(t, e, i, r) {
        var n;
        return mi || ei(), e in ct && e !== "transform" && (e = ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = pe(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Me(dt(t, ht)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Ce[e] && Ce[e](t, e, i) || dt(t, e) || Hi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ot(t, e, n, i) + i : n
    },
    Gn = function(t, e, i, r) {
        if (!i || i === "none") {
            var n = Jt(e, t, 1),
                s = n && dt(t, n, 1);
            s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = dt(t, "borderTopColor"))
        }
        var a = new j(this._pt, t.style, e, 0, 1, br),
            o = 0,
            f = 0,
            h, l, c, d, p, _, m, g, y, v, T, x;
        if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (t.style[e] = r, r = dt(t, e) || r, t.style[e] = i), h = [i, r], lr(h), i = h[0], r = h[1], c = i.match(Xt) || [], x = r.match(Xt) || [], x.length) {
            for (; l = Xt.exec(r);) m = l[0], y = r.substring(o, l.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), m !== (_ = c[f++] || "") && (d = parseFloat(_) || 0, T = _.substr((d + "").length), m.charAt(1) === "=" && (m = Wt(d, m) + T), g = parseFloat(m), v = m.substr((g + "").length), o = Xt.lastIndex - v.length, v || (v = v || it.units[e] || T, o === r.length && (r += v, a.e += v)), T !== v && (d = Ot(t, e, _, v) || 0), a._pt = {
                _next: a._pt,
                p: y || f === 1 ? y : ",",
                s: d,
                c: g - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0
            });
            a.c = o < r.length ? r.substring(o, r.length) : ""
        } else a.r = e === "display" && r === "none" ? kr : Sr;
        return Ui.test(r) && (a.e = 0), this._pt = a, a
    },
    Fi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Wn = function(t) {
        var e = t.split(" "),
            i = e[0],
            r = e[1] || "50%";
        return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Fi[i] || i, e[1] = Fi[r] || r, e.join(" ")
    },
    Hn = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i = e.t,
                r = i.style,
                n = e.u,
                s = i._gsap,
                a, o, f;
            if (n === "all" || n === !0) r.cssText = "", o = 1;
            else
                for (n = n.split(","), f = n.length; --f > -1;) a = n[f], vt[a] && (o = 1, a = a === "transformOrigin" ? ht : R), ce(i, a);
            o && (ce(i, R), s && (s.svg && i.removeAttribute("transform"), pe(i, 1), s.uncache = 1, Or(r)))
        }
    },
    Ce = {
        clearProps: function(t, e, i, r, n) {
            if (n.data !== "isFromStart") {
                var s = t._pt = new j(t._pt, e, i, 0, 0, Hn);
                return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
            }
        }
    },
    de = [1, 0, 0, 1, 0, 0],
    Er = {},
    Rr = function(t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    },
    zi = function(t) {
        var e = dt(t, R);
        return Rr(e) ? de : e.substr(7).match(Vi).map(I)
    },
    xi = function(t, e) {
        var i = t._gsap || It(t),
            r = t.style,
            n = zi(t),
            s, a, o, f;
        return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? de : n) : (n === de && !t.offsetParent && t !== Ht && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (f = 1, a = t.nextElementSibling, Ht.appendChild(t)), n = zi(t), o ? r.display = o : ce(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Ht.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    ii = function(t, e, i, r, n, s) {
        var a = t._gsap,
            o = n || xi(t, !0),
            f = a.xOrigin || 0,
            h = a.yOrigin || 0,
            l = a.xOffset || 0,
            c = a.yOffset || 0,
            d = o[0],
            p = o[1],
            _ = o[2],
            m = o[3],
            g = o[4],
            y = o[5],
            v = e.split(" "),
            T = parseFloat(v[0]) || 0,
            x = parseFloat(v[1]) || 0,
            S, P, w, b;
        i ? o !== de && (P = d * m - p * _) && (w = T * (m / P) + x * (-_ / P) + (_ * y - m * g) / P, b = T * (-p / P) + x * (d / P) - (d * y - p * g) / P, T = w, x = b) : (S = Dr(t), T = S.x + (~v[0].indexOf("%") ? T / 100 * S.width : T), x = S.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * S.height : x)), r || r !== !1 && a.smooth ? (g = T - f, y = x - h, a.xOffset = l + (g * d + y * _) - g, a.yOffset = c + (g * p + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = x, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[ht] = "0px 0px", s && (wt(s, a, "xOrigin", f, T), wt(s, a, "yOrigin", h, x), wt(s, a, "xOffset", l, a.xOffset), wt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + x)
    },
    pe = function(t, e) {
        var i = t._gsap || new mr(t);
        if ("x" in i && !e && !i.uncache) return i;
        var r = t.style,
            n = i.scaleX < 0,
            s = "px",
            a = "deg",
            o = getComputedStyle(t),
            f = dt(t, ht) || "0",
            h, l, c, d, p, _, m, g, y, v, T, x, S, P, w, b, O, C, F, B, N, A, q, V, $, Mt, Dt, te, At, vi, mt, Et;
        return h = l = c = _ = m = g = y = v = T = 0, d = p = 1, i.svg = !!(t.getCTM && Ar(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[R] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[R] !== "none" ? o[R] : "")), r.scale = r.rotate = r.translate = "none"), P = xi(t, i.svg), i.svg && (i.uncache ? ($ = t.getBBox(), f = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px", V = "") : V = !e && t.getAttribute("data-svg-origin"), ii(t, V || f, !!V || i.originIsAbsolute, i.smooth !== !1, P)), x = i.xOrigin || 0, S = i.yOrigin || 0, P !== de && (C = P[0], F = P[1], B = P[2], N = P[3], h = A = P[4], l = q = P[5], P.length === 6 ? (d = Math.sqrt(C * C + F * F), p = Math.sqrt(N * N + B * B), _ = C || F ? Yt(F, C) * zt : 0, y = B || N ? Yt(B, N) * zt + _ : 0, y && (p *= Math.abs(Math.cos(y * $t))), i.svg && (h -= x - (x * C + S * B), l -= S - (x * F + S * N))) : (Et = P[6], vi = P[7], Dt = P[8], te = P[9], At = P[10], mt = P[11], h = P[12], l = P[13], c = P[14], w = Yt(Et, At), m = w * zt, w && (b = Math.cos(-w), O = Math.sin(-w), V = A * b + Dt * O, $ = q * b + te * O, Mt = Et * b + At * O, Dt = A * -O + Dt * b, te = q * -O + te * b, At = Et * -O + At * b, mt = vi * -O + mt * b, A = V, q = $, Et = Mt), w = Yt(-B, At), g = w * zt, w && (b = Math.cos(-w), O = Math.sin(-w), V = C * b - Dt * O, $ = F * b - te * O, Mt = B * b - At * O, mt = N * O + mt * b, C = V, F = $, B = Mt), w = Yt(F, C), _ = w * zt, w && (b = Math.cos(w), O = Math.sin(w), V = C * b + F * O, $ = A * b + q * O, F = F * b - C * O, q = q * b - A * O, C = V, A = $), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, g = 180 - g), d = I(Math.sqrt(C * C + F * F + B * B)), p = I(Math.sqrt(q * q + Et * Et)), w = Yt(A, q), y = Math.abs(w) > 2e-4 ? w * zt : 0, T = mt ? 1 / (mt < 0 ? -mt : mt) : 0), i.svg && (V = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Rr(dt(t, R)), V && t.setAttribute("transform", V))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = I(d), i.scaleY = I(p), i.rotation = I(_) + a, i.rotationX = I(m) + a, i.rotationY = I(g) + a, i.skewX = y + a, i.skewY = v + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (r[ht] = Me(f)), i.xOffset = i.yOffset = 0, i.force3D = it.force3D, i.renderTransform = i.svg ? Qn : Mr ? Fr : $n, i.uncache = 0, i
    },
    Me = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    Ue = function(t, e, i) {
        var r = G(e);
        return I(parseFloat(e) + parseFloat(Ot(t, "x", i + "px", r))) + r
    },
    $n = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fr(t, e)
    },
    Rt = "0deg",
    ee = "0px",
    Ft = ") ",
    Fr = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            o = i.z,
            f = i.rotation,
            h = i.rotationY,
            l = i.rotationX,
            c = i.skewX,
            d = i.skewY,
            p = i.scaleX,
            _ = i.scaleY,
            m = i.transformPerspective,
            g = i.force3D,
            y = i.target,
            v = i.zOrigin,
            T = "",
            x = g === "auto" && t && t !== 1 || g === !0;
        if (v && (l !== Rt || h !== Rt)) {
            var S = parseFloat(h) * $t,
                P = Math.sin(S),
                w = Math.cos(S),
                b;
            S = parseFloat(l) * $t, b = Math.cos(S), s = Ue(y, s, P * b * -v), a = Ue(y, a, -Math.sin(S) * -v), o = Ue(y, o, w * b * -v + v)
        }
        m !== ee && (T += "perspective(" + m + Ft), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (x || s !== ee || a !== ee || o !== ee) && (T += o !== ee || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ft), f !== Rt && (T += "rotate(" + f + Ft), h !== Rt && (T += "rotateY(" + h + Ft), l !== Rt && (T += "rotateX(" + l + Ft), (c !== Rt || d !== Rt) && (T += "skew(" + c + ", " + d + Ft), (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Ft), y.style[R] = T || "translate(0, 0)"
    },
    Qn = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            o = i.rotation,
            f = i.skewX,
            h = i.skewY,
            l = i.scaleX,
            c = i.scaleY,
            d = i.target,
            p = i.xOrigin,
            _ = i.yOrigin,
            m = i.xOffset,
            g = i.yOffset,
            y = i.forceCSS,
            v = parseFloat(s),
            T = parseFloat(a),
            x, S, P, w, b;
        o = parseFloat(o), f = parseFloat(f), h = parseFloat(h), h && (h = parseFloat(h), f += h, o += h), o || f ? (o *= $t, f *= $t, x = Math.cos(o) * l, S = Math.sin(o) * l, P = Math.sin(o - f) * -c, w = Math.cos(o - f) * c, f && (h *= $t, b = Math.tan(f - h), b = Math.sqrt(1 + b * b), P *= b, w *= b, h && (b = Math.tan(h), b = Math.sqrt(1 + b * b), x *= b, S *= b)), x = I(x), S = I(S), P = I(P), w = I(w)) : (x = l, w = c, S = P = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Ot(d, "x", s, "px"), T = Ot(d, "y", a, "px")), (p || _ || m || g) && (v = I(v + p - (p * x + _ * P) + m), T = I(T + _ - (p * S + _ * w) + g)), (r || n) && (b = d.getBBox(), v = I(v + r / 100 * b.width), T = I(T + n / 100 * b.height)), b = "matrix(" + x + "," + S + "," + P + "," + w + "," + v + "," + T + ")", d.setAttribute("transform", b), y && (d.style[R] = b)
    },
    Kn = function(t, e, i, r, n) {
        var s = 360,
            a = Y(n),
            o = parseFloat(n) * (a && ~n.indexOf("rad") ? zt : 1),
            f = o - r,
            h = r + f + "deg",
            l, c;
        return a && (l = n.split("_")[1], l === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), l === "cw" && f < 0 ? f = (f + s * Di) % s - ~~(f / s) * s : l === "ccw" && f > 0 && (f = (f - s * Di) % s - ~~(f / s) * s)), t._pt = c = new j(t._pt, e, i, r, f, Rn), c.e = h, c.u = "deg", t._props.push(i), c
    },
    Li = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    Zn = function(t, e, i) {
        var r = Li({}, i._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = i.style,
            a, o, f, h, l, c, d, p;
        r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[R] = e, a = pe(i, 1), ce(i, R), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[R], s[R] = e, a = pe(i, 1), s[R] = f);
        for (o in vt) f = r[o], h = a[o], f !== h && n.indexOf(o) < 0 && (d = G(f), p = G(h), l = d !== p ? Ot(i, o, f, p) : parseFloat(f), c = parseFloat(h), t._pt = new j(t._pt, a, o, l, c - l, Je), t._pt.u = p || 0, t._props.push(o));
        Li(a, r)
    };
Z("padding,margin,Width,Radius", function(u, t) {
    var e = "Top",
        i = "Right",
        r = "Bottom",
        n = "Left",
        s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
            return t < 2 ? u + a : "border" + a + u
        });
    Ce[t > 1 ? "border" + u : u] = function(a, o, f, h, l) {
        var c, d;
        if (arguments.length < 4) return c = s.map(function(p) {
            return yt(a, p, f)
        }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
        c = (h + "").split(" "), d = {}, s.forEach(function(p, _) {
            return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
        }), a.init(o, d, l)
    }
});
var zr = {
    name: "css",
    register: ei,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props,
            a = t.style,
            o = i.vars.startAt,
            f, h, l, c, d, p, _, m, g, y, v, T, x, S, P, w;
        mi || ei(), this.styles = this.styles || Cr(t), w = this.styles.props, this.tween = i;
        for (_ in e)
            if (_ !== "autoRound" && (h = e[_], !(tt[_] && gr(_, e, i, r, t, n)))) {
                if (d = typeof h, p = Ce[_], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = he(h)), p) p(this, t, _, h, i) && (P = 1);
                else if (_.substr(0, 2) === "--") f = (getComputedStyle(t).getPropertyValue(_) + "").trim(), h += "", St.lastIndex = 0, St.test(f) || (m = G(f), g = G(h)), g ? m !== g && (f = Ot(t, _, f, g) + g) : m && (h += m), this.add(a, "setProperty", f, h, r, n, 0, 0, _), s.push(_), w.push(_, 0, a[_]);
                else if (d !== "undefined") {
                    if (o && _ in o ? (f = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_], Y(f) && ~f.indexOf("random(") && (f = he(f)), G(f + "") || (f += it.units[_] || G(yt(t, _)) || ""), (f + "").charAt(1) === "=" && (f = yt(t, _))) : f = yt(t, _), c = parseFloat(f), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), l = parseFloat(h), _ in ct && (_ === "autoAlpha" && (c === 1 && yt(t, "visibility") === "hidden" && l && (c = 0), w.push("visibility", 0, a.visibility), wt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), _ !== "scale" && _ !== "transform" && (_ = ct[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), v = _ in vt, v) {
                        if (this.styles.save(_), T || (x = t._gsap, x.renderTransform && !e.parseTransform || pe(t, e.parseTransform), S = e.smoothOrigin !== !1 && x.smooth, T = this._pt = new j(this._pt, a, R, 0, 1, x.renderTransform, x, 0, -1), T.dep = 1), _ === "scale") this._pt = new j(this._pt, x, "scaleY", x.scaleY, (y ? Wt(x.scaleY, y + l) : l) - x.scaleY || 0, Je), this._pt.u = 0, s.push("scaleY", _), _ += "X";
                        else if (_ === "transformOrigin") {
                            w.push(ht, 0, a[ht]), h = Wn(h), x.svg ? ii(t, h, 0, S, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0, g !== x.zOrigin && wt(this, x, "zOrigin", x.zOrigin, g), wt(this, a, _, Me(f), Me(h)));
                            continue
                        } else if (_ === "svgOrigin") {
                            ii(t, h, 1, S, 0, this);
                            continue
                        } else if (_ in Er) {
                            Kn(this, x, _, c, y ? Wt(c, y + h) : h);
                            continue
                        } else if (_ === "smoothOrigin") {
                            wt(this, x, "smooth", x.smooth, h);
                            continue
                        } else if (_ === "force3D") {
                            x[_] = h;
                            continue
                        } else if (_ === "transform") {
                            Zn(this, h, t);
                            continue
                        }
                    } else _ in a || (_ = Jt(_) || _);
                    if (v || (l || l === 0) && (c || c === 0) && !En.test(h) && _ in a) m = (f + "").substr((c + "").length), l || (l = 0), g = G(h) || (_ in it.units ? it.units[_] : m), m !== g && (c = Ot(t, _, f, g)), this._pt = new j(this._pt, v ? x : a, _, c, (y ? Wt(c, y + l) : l) - c, !v && (g === "px" || _ === "zIndex") && e.autoRound !== !1 ? zn : Je), this._pt.u = g || 0, m !== g && g !== "%" && (this._pt.b = f, this._pt.r = Fn);
                    else if (_ in a) Gn.call(this, t, _, f, y ? y + h : h);
                    else if (_ in t) this.add(t, _, f || t[_], y ? y + h : h, r, n);
                    else if (_ !== "parseTransform") {
                        oi(_, h);
                        continue
                    }
                    v || (_ in a ? w.push(_, 0, a[_]) : w.push(_, 1, f || t[_])), s.push(_)
                }
            }
        P && wr(this)
    },
    render: function(t, e) {
        if (e.tween._time || !gi())
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
        else e.styles.revert()
    },
    get: yt,
    aliases: ct,
    getSetter: function(t, e, i) {
        var r = ct[e];
        return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== ht && (t._gsap.x || yt(t, "x")) ? i && Mi === i ? e === "scale" ? Nn : Bn : (Mi = i || {}) && (e === "scale" ? Vn : Un) : t.style && !ni(t.style[e]) ? Ln : ~e.indexOf("-") ? In : di(t, e)
    },
    core: {
        _removeProperty: ce,
        _getMatrix: xi
    }
};
J.utils.checkPrefix = Jt;
J.core.getStyleSaver = Cr;
(function(u, t, e, i) {
    var r = Z(u + "," + t + "," + e, function(n) {
        vt[n] = 1
    });
    Z(t, function(n) {
        it.units[n] = "deg", Er[n] = 1
    }), ct[r[13]] = u + "," + t, Z(i, function(n) {
        var s = n.split(":");
        ct[s[1]] = r[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
    it.units[u] = "px"
});
J.registerPlugin(zr);
var _t = J.registerPlugin(zr) || J;
_t.core.Tween;
const ie = [{
    q: "Vârsta dumneavoastră",
    a: ["sub 18", "18-25", "25-35", "35-45", "45 și peste"],
    color: "#7CDD59"
}, {
    q: "Sunteți dispus să alocați până la 30 de minute pe zi pentru completarea sondajelor?",
    a: ["Da", "Desigur", "Voi încerca"],
    color: "#EEDF57"
}, {
    q: "Sunteți dispus să influențați calitatea serviciilor și produselor consumate?",
    a: ["Da", "Desigur", "Nu sunt sigur"],
    color: "#67D1FF"
}, {
    q: "Sunteți dispus să transformați timpul liber în venit real?",
    a: ["Da", "Mai degrabă da decât nu"],
    color: "#F8BCBF"
}];

let re = -1,
    ye = !0;
const Lr = async() => {
    ye = !0;
    const u = document.querySelector(".question__text"),
        t = document.querySelector(".answers"),
        e = document.querySelector(".result");
    if (re === ie.length - 1) {
        _t.to(document.body, {
            backgroundColor: ie[0].color,
            duration: 1
        }), _t.to(t.childNodes, {
            yPercent: 50,
            autoAlpha: 0,
            duration: .1,
            stagger: -.1
        }), await _t.to(u, {
            yPercent: -50,
            autoAlpha: 0,
            duration: .25
        }), u.innerHTML = "Participați la sondaje, împărtășiți-vă opinia și primiți recompense prin orice sistem de plată convenabil - toate acestea sunt disponibile în robotul nostru Telegram.", _t.to(u, {
            yPercent: 0,
            autoAlpha: 1,
            duration: .25
        }), t.style.display = "none", e.style.display = "block";
        return
    }
    re++,
    _t.to(document.body, {
        backgroundColor: ie[re].color,
        duration: 1
    }),
    u.innerHTML && _t.to(u, {
        yPercent: -50,
        autoAlpha: 0,
        duration: .25
    }),
    t.innerHTML && await _t.to(t.childNodes, {
        yPercent: 50,
        autoAlpha: 0,
        duration: .1,
        stagger: -.1
    }),
    t.innerHTML = "",
    ie[re].a.forEach(i => {
        const r = document.createElement("div"),
            n = document.createElement("div");r.addEventListener("click", () => {
            ye || (ye = !0, Lr())
        }),
        r.className = "answers__answer",
        n.className = "answers__answer-text",
        n.innerHTML = i,
        r.appendChild(n),
        t.appendChild(r)
    }),
    u.innerHTML = ie[re].q,
    _t.to(u, {
        yPercent: 0,
        autoAlpha: 1,
        duration: .25
    }),
    await _t.from(t.childNodes, {
        yPercent: 50,
        autoAlpha: 0,
        duration: .1,
        stagger: .1
    }),
    ye = !1
};
document.addEventListener("DOMContentLoaded", function() {
    Lr()
});