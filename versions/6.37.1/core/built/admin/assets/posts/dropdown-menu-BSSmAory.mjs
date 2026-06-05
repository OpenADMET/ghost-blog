import { u as H, k as U, i as O, V as oo, a as Oe, G as ro, l as b, j as h, b as ue, X as io, S as Nt, c as se } from "./index-BAF0YXsp.mjs";
import { c as Ze, P as ne, b as fe, e as nt, f as ot, d as E, n as so, g as co, l as It, u as ao, a as vt, h as Tt } from "./createLucideIcon-DcUfTBt_.mjs";
import { u as lo, b as jt, c as uo, I as fo, R as po } from "./skeleton-S1k58YKa.mjs";
import { a as Be, P as mo, h as ho, u as go, R as xo, F as wo, D as vo, C as yo } from "./check-IcEnuTpD.mjs";
function bo(e) {
  const [t, n] = H(void 0);
  return Ze(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          s = d.inlineSize, c = d.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({ width: s, height: c });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
const Mo = ["top", "right", "bottom", "left"], re = Math.min, G = Math.max, Te = Math.round, Ne = Math.floor, J = (e) => ({
  x: e,
  y: e
}), Co = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Je(e, t, n) {
  return G(e, re(t, n));
}
function ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function te(e) {
  return e.split("-")[0];
}
function xe(e) {
  return e.split("-")[1];
}
function rt(e) {
  return e === "x" ? "y" : "x";
}
function it(e) {
  return e === "y" ? "height" : "width";
}
function Z(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function st(e) {
  return rt(Z(e));
}
function Ao(e, t, n) {
  n === void 0 && (n = !1);
  const o = xe(e), r = st(e), i = it(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = je(s)), [s, je(s)];
}
function Po(e) {
  const t = je(e);
  return [Qe(e), t, Qe(t)];
}
function Qe(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const yt = ["left", "right"], bt = ["right", "left"], So = ["top", "bottom"], Ro = ["bottom", "top"];
function _o(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? bt : yt : t ? yt : bt;
    case "left":
    case "right":
      return t ? So : Ro;
    default:
      return [];
  }
}
function Eo(e, t, n, o) {
  const r = xe(e);
  let i = _o(te(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Qe)))), i;
}
function je(e) {
  const t = te(e);
  return Co[t] + e.slice(t.length);
}
function Do(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lt(e) {
  return typeof e != "number" ? Do(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Le(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Mt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = Z(t), s = st(t), c = it(s), u = te(t), d = i === "y", l = o.x + o.width / 2 - r.width / 2, a = o.y + o.height / 2 - r.height / 2, f = o[c] / 2 - r[c] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: l,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: l,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: a
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: a
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (xe(t)) {
    case "start":
      p[s] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && d ? -1 : 1);
      break;
  }
  return p;
}
async function Oo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: a = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = ee(t, e), m = Lt(p), v = c[f ? a === "floating" ? "reference" : "floating" : a], w = Le(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: l,
    strategy: u
  })), A = a === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), y = await (i.isElement == null ? void 0 : i.isElement(M)) ? await (i.getScale == null ? void 0 : i.getScale(M)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Le(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: A,
    offsetParent: M,
    strategy: u
  }) : A);
  return {
    top: (w.top - S.top + m.top) / y.y,
    bottom: (S.bottom - w.bottom + m.bottom) / y.y,
    left: (w.left - S.left + m.left) / y.x,
    right: (S.right - w.right + m.right) / y.x
  };
}
const No = 50, Io = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Oo
  }, u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: l,
    y: a
  } = Mt(d, o, u), f = o, p = 0;
  const m = {};
  for (let g = 0; g < i.length; g++) {
    const v = i[g];
    if (!v)
      continue;
    const {
      name: w,
      fn: A
    } = v, {
      x: M,
      y,
      data: S,
      reset: P
    } = await A({
      x: l,
      y: a,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: d,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = M ?? l, a = y ?? a, m[w] = {
      ...m[w],
      ...S
    }, P && p < No && (p++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (d = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : P.rects), {
      x: l,
      y: a
    } = Mt(d, f, u)), g = -1);
  }
  return {
    x: l,
    y: a,
    placement: f,
    strategy: r,
    middlewareData: m
  };
}, To = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: u
    } = t, {
      element: d,
      padding: l = 0
    } = ee(e, t) || {};
    if (d == null)
      return {};
    const a = Lt(l), f = {
      x: n,
      y: o
    }, p = st(r), m = it(p), g = await s.getDimensions(d), v = p === "y", w = v ? "top" : "left", A = v ? "bottom" : "right", M = v ? "clientHeight" : "clientWidth", y = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let R = P ? P[M] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(P))) && (R = c.floating[M] || i.floating[m]);
    const j = y / 2 - S / 2, L = R / 2 - g[m] / 2 - 1, D = re(a[w], L), $ = re(a[A], L), k = D, N = R - g[m] - $, _ = R / 2 - g[m] / 2 + j, z = Je(k, _, N), I = !u.arrow && xe(r) != null && _ !== z && i.reference[m] / 2 - (_ < k ? D : $) - g[m] / 2 < 0, T = I ? _ < k ? _ - k : _ - N : 0;
    return {
      [p]: f[p] + T,
      data: {
        [p]: z,
        centerOffset: _ - z - T,
        ...I && {
          alignmentOffset: T
        }
      },
      reset: I
    };
  }
}), jo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: u,
        elements: d
      } = t, {
        mainAxis: l = !0,
        crossAxis: a = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...v
      } = ee(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = te(r), A = Z(c), M = te(c) === c, y = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = f || (M || !g ? [je(c)] : Po(c)), P = m !== "none";
      !f && P && S.push(...Eo(c, g, m, y));
      const R = [c, ...S], j = await u.detectOverflow(t, v), L = [];
      let D = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (l && L.push(j[w]), a) {
        const _ = Ao(r, s, y);
        L.push(j[_[0]], j[_[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: L
      }], !L.every((_) => _ <= 0)) {
        var $, k;
        const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, z = R[_];
        if (z && (!(a === "alignment" ? A !== Z(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((C) => Z(C.placement) === A ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: D
            },
            reset: {
              placement: z
            }
          };
        let I = (k = D.filter((T) => T.overflows[0] <= 0).sort((T, C) => T.overflows[1] - C.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var N;
              const T = (N = D.filter((C) => {
                if (P) {
                  const x = Z(C.placement);
                  return x === A || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((x) => x > 0).reduce((x, B) => x + B, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : N[0];
              T && (I = T);
              break;
            }
            case "initialPlacement":
              I = c;
              break;
          }
        if (r !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Ct(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function At(e) {
  return Mo.some((t) => e[t] >= 0);
}
const Lo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = ee(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), c = Ct(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: At(c)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), c = Ct(s, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: At(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, kt = /* @__PURE__ */ new Set(["left", "top"]);
async function ko(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = te(n), c = xe(n), u = Z(n) === "y", d = kt.has(s) ? -1 : 1, l = i && u ? -1 : 1, a = ee(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof a == "number" ? {
    mainAxis: a,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: a.mainAxis || 0,
    crossAxis: a.crossAxis || 0,
    alignmentAxis: a.alignmentAxis
  };
  return c && typeof m == "number" && (p = c === "end" ? m * -1 : m), u ? {
    x: p * l,
    y: f * d
  } : {
    x: f * d,
    y: p * l
  };
}
const Fo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = t, u = await ko(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, $o = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: u = {
          fn: (w) => {
            let {
              x: A,
              y: M
            } = w;
            return {
              x: A,
              y: M
            };
          }
        },
        ...d
      } = ee(e, t), l = {
        x: n,
        y: o
      }, a = await i.detectOverflow(t, d), f = Z(te(r)), p = rt(f);
      let m = l[p], g = l[f];
      if (s) {
        const w = p === "y" ? "top" : "left", A = p === "y" ? "bottom" : "right", M = m + a[w], y = m - a[A];
        m = Je(M, m, y);
      }
      if (c) {
        const w = f === "y" ? "top" : "left", A = f === "y" ? "bottom" : "right", M = g + a[w], y = g - a[A];
        g = Je(M, g, y);
      }
      const v = u.fn({
        ...t,
        [p]: m,
        [f]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [p]: s,
            [f]: c
          }
        }
      };
    }
  };
}, Bo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = ee(e, t), l = {
        x: n,
        y: o
      }, a = Z(r), f = rt(a);
      let p = l[f], m = l[a];
      const g = ee(c, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const M = f === "y" ? "height" : "width", y = i.reference[f] - i.floating[M] + v.mainAxis, S = i.reference[f] + i.reference[M] - v.mainAxis;
        p < y ? p = y : p > S && (p = S);
      }
      if (d) {
        var w, A;
        const M = f === "y" ? "width" : "height", y = kt.has(te(r)), S = i.reference[a] - i.floating[M] + (y && ((w = s.offset) == null ? void 0 : w[a]) || 0) + (y ? 0 : v.crossAxis), P = i.reference[a] + i.reference[M] + (y ? 0 : ((A = s.offset) == null ? void 0 : A[a]) || 0) - (y ? v.crossAxis : 0);
        m < S ? m = S : m > P && (m = P);
      }
      return {
        [f]: p,
        [a]: m
      };
    }
  };
}, zo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = t, {
        apply: u = () => {
        },
        ...d
      } = ee(e, t), l = await s.detectOverflow(t, d), a = te(r), f = xe(r), p = Z(r) === "y", {
        width: m,
        height: g
      } = i.floating;
      let v, w;
      a === "top" || a === "bottom" ? (v = a, w = f === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = a, v = f === "end" ? "top" : "bottom");
      const A = g - l.top - l.bottom, M = m - l.left - l.right, y = re(g - l[v], A), S = re(m - l[w], M), P = !t.middlewareData.shift;
      let R = y, j = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = M), (o = t.middlewareData.shift) != null && o.enabled.y && (R = A), P && !f) {
        const D = G(l.left, 0), $ = G(l.right, 0), k = G(l.top, 0), N = G(l.bottom, 0);
        p ? j = m - 2 * (D !== 0 || $ !== 0 ? D + $ : G(l.left, l.right)) : R = g - 2 * (k !== 0 || N !== 0 ? k + N : G(l.top, l.bottom));
      }
      await u({
        ...t,
        availableWidth: j,
        availableHeight: R
      });
      const L = await s.getDimensions(c.floating);
      return m !== L.width || g !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ze() {
  return typeof window < "u";
}
function we(e) {
  return Ft(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Q(e) {
  var t;
  return (t = (Ft(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ft(e) {
  return ze() ? e instanceof Node || e instanceof K(e).Node : !1;
}
function X(e) {
  return ze() ? e instanceof Element || e instanceof K(e).Element : !1;
}
function oe(e) {
  return ze() ? e instanceof HTMLElement || e instanceof K(e).HTMLElement : !1;
}
function Pt(e) {
  return !ze() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
function Se(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function Wo(e) {
  return /^(table|td|th)$/.test(we(e));
}
function We(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Go = /transform|translate|scale|rotate|perspective|filter/, Ho = /paint|layout|strict|content/, le = (e) => !!e && e !== "none";
let Xe;
function ct(e) {
  const t = X(e) ? Y(e) : e;
  return le(t.transform) || le(t.translate) || le(t.scale) || le(t.rotate) || le(t.perspective) || !at() && (le(t.backdropFilter) || le(t.filter)) || Go.test(t.willChange || "") || Ho.test(t.contain || "");
}
function Ko(e) {
  let t = ie(e);
  for (; oe(t) && !ge(t); ) {
    if (ct(t))
      return t;
    if (We(t))
      return null;
    t = ie(t);
  }
  return null;
}
function at() {
  return Xe == null && (Xe = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Xe;
}
function ge(e) {
  return /^(html|body|#document)$/.test(we(e));
}
function Y(e) {
  return K(e).getComputedStyle(e);
}
function Ge(e) {
  return X(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ie(e) {
  if (we(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pt(e) && e.host || // Fallback.
    Q(e)
  );
  return Pt(t) ? t.host : t;
}
function $t(e) {
  const t = ie(e);
  return ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oe(t) && Se(t) ? t : $t(t);
}
function Ce(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = $t(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = K(r);
  if (i) {
    const c = et(s);
    return t.concat(s, s.visualViewport || [], Se(r) ? r : [], c && n ? Ce(c) : []);
  } else
    return t.concat(r, Ce(r, [], n));
}
function et(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bt(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = oe(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, c = Te(n) !== i || Te(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function lt(e) {
  return X(e) ? e : e.contextElement;
}
function he(e) {
  const t = lt(e);
  if (!oe(t))
    return J(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Bt(t);
  let s = (i ? Te(n.width) : n.width) / o, c = (i ? Te(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Vo = /* @__PURE__ */ J(0);
function zt(e) {
  const t = K(e);
  return !at() || !t.visualViewport ? Vo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Uo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== K(e) ? !1 : t;
}
function de(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = lt(e);
  let s = J(1);
  t && (o ? X(o) && (s = he(o)) : s = he(e));
  const c = Uo(i, n, o) ? zt(i) : J(0);
  let u = (r.left + c.x) / s.x, d = (r.top + c.y) / s.y, l = r.width / s.x, a = r.height / s.y;
  if (i) {
    const f = K(i), p = o && X(o) ? K(o) : o;
    let m = f, g = et(m);
    for (; g && o && p !== m; ) {
      const v = he(g), w = g.getBoundingClientRect(), A = Y(g), M = w.left + (g.clientLeft + parseFloat(A.paddingLeft)) * v.x, y = w.top + (g.clientTop + parseFloat(A.paddingTop)) * v.y;
      u *= v.x, d *= v.y, l *= v.x, a *= v.y, u += M, d += y, m = K(g), g = et(m);
    }
  }
  return Le({
    width: l,
    height: a,
    x: u,
    y: d
  });
}
function He(e, t) {
  const n = Ge(e).scrollLeft;
  return t ? t.left + n : de(Q(e)).left + n;
}
function Wt(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - He(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Xo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = Q(o), c = t ? We(t.floating) : !1;
  if (o === s || c && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = J(1);
  const l = J(0), a = oe(o);
  if ((a || !a && !i) && ((we(o) !== "body" || Se(s)) && (u = Ge(o)), a)) {
    const p = de(o);
    d = he(o), l.x = p.x + o.clientLeft, l.y = p.y + o.clientTop;
  }
  const f = s && !a && !i ? Wt(s, u) : J(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + l.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + l.y + f.y
  };
}
function Yo(e) {
  return Array.from(e.getClientRects());
}
function qo(e) {
  const t = Q(e), n = Ge(e), o = e.ownerDocument.body, r = G(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = G(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + He(e);
  const c = -n.scrollTop;
  return Y(o).direction === "rtl" && (s += G(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
const St = 25;
function Zo(e, t) {
  const n = K(e), o = Q(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, u = 0;
  if (r) {
    i = r.width, s = r.height;
    const l = at();
    (!l || l && t === "fixed") && (c = r.offsetLeft, u = r.offsetTop);
  }
  const d = He(o);
  if (d <= 0) {
    const l = o.ownerDocument, a = l.body, f = getComputedStyle(a), p = l.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(o.clientWidth - a.clientWidth - p);
    m <= St && (i -= m);
  } else d <= St && (i += d);
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function Jo(e, t) {
  const n = de(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = oe(e) ? he(e) : J(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, u = r * i.x, d = o * i.y;
  return {
    width: s,
    height: c,
    x: u,
    y: d
  };
}
function Rt(e, t, n) {
  let o;
  if (t === "viewport")
    o = Zo(e, n);
  else if (t === "document")
    o = qo(Q(e));
  else if (X(t))
    o = Jo(t, n);
  else {
    const r = zt(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Le(o);
}
function Gt(e, t) {
  const n = ie(e);
  return n === t || !X(n) || ge(n) ? !1 : Y(n).position === "fixed" || Gt(n, t);
}
function Qo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ce(e, [], !1).filter((c) => X(c) && we(c) !== "body"), r = null;
  const i = Y(e).position === "fixed";
  let s = i ? ie(e) : e;
  for (; X(s) && !ge(s); ) {
    const c = Y(s), u = ct(s);
    !u && c.position === "fixed" && (r = null), (i ? !u && !r : !u && c.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || Se(s) && !u && Gt(e, s)) ? o = o.filter((l) => l !== s) : r = c, s = ie(s);
  }
  return t.set(e, o), o;
}
function er(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? We(t) ? [] : Qo(t, this._c) : [].concat(n), o], c = Rt(t, s[0], r);
  let u = c.top, d = c.right, l = c.bottom, a = c.left;
  for (let f = 1; f < s.length; f++) {
    const p = Rt(t, s[f], r);
    u = G(p.top, u), d = re(p.right, d), l = re(p.bottom, l), a = G(p.left, a);
  }
  return {
    width: d - a,
    height: l - u,
    x: a,
    y: u
  };
}
function tr(e) {
  const {
    width: t,
    height: n
  } = Bt(e);
  return {
    width: t,
    height: n
  };
}
function nr(e, t, n) {
  const o = oe(t), r = Q(t), i = n === "fixed", s = de(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = J(0);
  function d() {
    u.x = He(r);
  }
  if (o || !o && !i)
    if ((we(t) !== "body" || Se(r)) && (c = Ge(t)), o) {
      const p = de(t, !0, i, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else r && d();
  i && !o && r && d();
  const l = r && !o && !i ? Wt(r, c) : J(0), a = s.left + c.scrollLeft - u.x - l.x, f = s.top + c.scrollTop - u.y - l.y;
  return {
    x: a,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ye(e) {
  return Y(e).position === "static";
}
function _t(e, t) {
  if (!oe(e) || Y(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Q(e) === n && (n = n.ownerDocument.body), n;
}
function Ht(e, t) {
  const n = K(e);
  if (We(e))
    return n;
  if (!oe(e)) {
    let r = ie(e);
    for (; r && !ge(r); ) {
      if (X(r) && !Ye(r))
        return r;
      r = ie(r);
    }
    return n;
  }
  let o = _t(e, t);
  for (; o && Wo(o) && Ye(o); )
    o = _t(o, t);
  return o && ge(o) && Ye(o) && !ct(o) ? n : o || Ko(e) || n;
}
const or = async function(e) {
  const t = this.getOffsetParent || Ht, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: nr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function rr(e) {
  return Y(e).direction === "rtl";
}
const ir = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xo,
  getDocumentElement: Q,
  getClippingRect: er,
  getOffsetParent: Ht,
  getElementRects: or,
  getClientRects: Yo,
  getDimensions: tr,
  getScale: he,
  isElement: X,
  isRTL: rr
};
function Kt(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sr(e, t) {
  let n = null, o;
  const r = Q(e);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const d = e.getBoundingClientRect(), {
      left: l,
      top: a,
      width: f,
      height: p
    } = d;
    if (c || t(), !f || !p)
      return;
    const m = Ne(a), g = Ne(r.clientWidth - (l + f)), v = Ne(r.clientHeight - (a + p)), w = Ne(l), M = {
      rootMargin: -m + "px " + -g + "px " + -v + "px " + -w + "px",
      threshold: G(0, re(1, u)) || 1
    };
    let y = !0;
    function S(P) {
      const R = P[0].intersectionRatio;
      if (R !== u) {
        if (!y)
          return s();
        R ? s(!1, R) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Kt(d, e.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...M,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, M);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function cr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = lt(e), l = r || i ? [...d ? Ce(d) : [], ...t ? Ce(t) : []] : [];
  l.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const a = d && c ? sr(d, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [A] = w;
    A && A.target === d && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var M;
      (M = p) == null || M.observe(t);
    })), n();
  }), d && !u && p.observe(d), t && p.observe(t));
  let m, g = u ? de(e) : null;
  u && v();
  function v() {
    const w = de(e);
    g && !Kt(g, w) && n(), g = w, m = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    l.forEach((A) => {
      r && A.removeEventListener("scroll", n), i && A.removeEventListener("resize", n);
    }), a?.(), (w = p) == null || w.disconnect(), p = null, u && cancelAnimationFrame(m);
  };
}
const ar = Fo, lr = $o, ur = jo, dr = zo, fr = Lo, Et = To, pr = Bo, mr = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ir,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Io(e, t, {
    ...r,
    platform: i
  });
};
var hr = typeof document < "u", gr = function() {
}, Ie = hr ? ro : gr;
function ke(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!ke(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !ke(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dt(e, t) {
  const n = Vt(e);
  return Math.round(t * n) / n;
}
function qe(e) {
  const t = O(e);
  return Ie(() => {
    t.current = e;
  }), t;
}
function xr(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: d
  } = e, [l, a] = H({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = H(o);
  ke(f, o) || p(o);
  const [m, g] = H(null), [v, w] = H(null), A = U((C) => {
    C !== P.current && (P.current = C, g(C));
  }, []), M = U((C) => {
    C !== R.current && (R.current = C, w(C));
  }, []), y = i || m, S = s || v, P = O(null), R = O(null), j = O(l), L = u != null, D = qe(u), $ = qe(r), k = qe(d), N = U(() => {
    if (!P.current || !R.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (C.platform = $.current), mr(P.current, R.current, C).then((x) => {
      const B = {
        ...x,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      _.current && !ke(j.current, B) && (j.current = B, oo(() => {
        a(B);
      }));
    });
  }, [f, t, n, $, k]);
  Ie(() => {
    d === !1 && j.current.isPositioned && (j.current.isPositioned = !1, a((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [d]);
  const _ = O(!1);
  Ie(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Ie(() => {
    if (y && (P.current = y), S && (R.current = S), y && S) {
      if (D.current)
        return D.current(y, S, N);
      N();
    }
  }, [y, S, N, D, L]);
  const z = Oe(() => ({
    reference: P,
    floating: R,
    setReference: A,
    setFloating: M
  }), [A, M]), I = Oe(() => ({
    reference: y,
    floating: S
  }), [y, S]), T = Oe(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return C;
    const x = Dt(I.floating, l.x), B = Dt(I.floating, l.y);
    return c ? {
      ...C,
      transform: "translate(" + x + "px, " + B + "px)",
      ...Vt(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: x,
      top: B
    };
  }, [n, c, I.floating, l.x, l.y]);
  return Oe(() => ({
    ...l,
    update: N,
    refs: z,
    elements: I,
    floatingStyles: T
  }), [l, N, z, I, T]);
}
const wr = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Et({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Et({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, vr = (e, t) => {
  const n = ar(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, yr = (e, t) => {
  const n = lr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, br = (e, t) => ({
  fn: pr(e).fn,
  options: [e, t]
}), Mr = (e, t) => {
  const n = ur(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Cr = (e, t) => {
  const n = dr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ar = (e, t) => {
  const n = fr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Pr = (e, t) => {
  const n = wr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Sr = "Arrow", Ut = b((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ h.jsx(
    ne.svg,
    {
      ...i,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ut.displayName = Sr;
var Rr = Ut, ut = "Popper", [Xt, Yt] = nt(ut), [_r, qt] = Xt(ut), Zt = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = H(null);
  return /* @__PURE__ */ h.jsx(_r, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
Zt.displayName = ut;
var Jt = "PopperAnchor", Qt = b(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, i = qt(Jt, n), s = O(null), c = fe(t, s), u = O(null);
    return ue(() => {
      const d = u.current;
      u.current = o?.current || s.current, d !== u.current && i.onAnchorChange(u.current);
    }), o ? null : /* @__PURE__ */ h.jsx(ne.div, { ...r, ref: c });
  }
);
Qt.displayName = Jt;
var dt = "PopperContent", [Er, Dr] = Xt(dt), en = b(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: l = 0,
      sticky: a = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: m,
      ...g
    } = e, v = qt(dt, n), [w, A] = H(null), M = fe(t, (F) => A(F)), [y, S] = H(null), P = bo(y), R = P?.width ?? 0, j = P?.height ?? 0, L = o + (i !== "center" ? "-" + i : ""), D = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, $ = Array.isArray(d) ? d : [d], k = $.length > 0, N = {
      padding: D,
      boundary: $.filter(Nr),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: _, floatingStyles: z, placement: I, isPositioned: T, middlewareData: C } = xr({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...F) => cr(...F, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        vr({ mainAxis: r + j, alignmentAxis: s }),
        u && yr({
          mainAxis: !0,
          crossAxis: !1,
          limiter: a === "partial" ? br() : void 0,
          ...N
        }),
        u && Mr({ ...N }),
        Cr({
          ...N,
          apply: ({ elements: F, rects: be, availableWidth: Qn, availableHeight: eo }) => {
            const { width: to, height: no } = be.reference, De = F.floating.style;
            De.setProperty("--radix-popper-available-width", `${Qn}px`), De.setProperty("--radix-popper-available-height", `${eo}px`), De.setProperty("--radix-popper-anchor-width", `${to}px`), De.setProperty("--radix-popper-anchor-height", `${no}px`);
          }
        }),
        y && Pr({ element: y, padding: c }),
        Ir({ arrowWidth: R, arrowHeight: j }),
        f && Ar({ strategy: "referenceHidden", ...N })
      ]
    }), [x, B] = on(I), q = ot(m);
    Ze(() => {
      T && q?.();
    }, [T, q]);
    const ce = C.arrow?.x, ve = C.arrow?.y, ye = C.arrow?.centerOffset !== 0, [Ee, ae] = H();
    return Ze(() => {
      w && ae(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: T ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ee,
          "--radix-popper-transform-origin": [
            C.transformOrigin?.x,
            C.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...C.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          Er,
          {
            scope: n,
            placedSide: x,
            onArrowChange: S,
            arrowX: ce,
            arrowY: ve,
            shouldHideArrow: ye,
            children: /* @__PURE__ */ h.jsx(
              ne.div,
              {
                "data-side": x,
                "data-align": B,
                ...g,
                ref: M,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
en.displayName = dt;
var tn = "PopperArrow", Or = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nn = b(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = Dr(tn, o), s = Or[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ h.jsx(
          Rr,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
nn.displayName = tn;
function Nr(e) {
  return e !== null;
}
var Ir = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, s = r.arrow?.centerOffset !== 0, c = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, l] = on(n), a = { start: "0%", center: "50%", end: "100%" }[l], f = (r.arrow?.x ?? 0) + c / 2, p = (r.arrow?.y ?? 0) + u / 2;
    let m = "", g = "";
    return d === "bottom" ? (m = s ? a : `${f}px`, g = `${-u}px`) : d === "top" ? (m = s ? a : `${f}px`, g = `${o.floating.height + u}px`) : d === "right" ? (m = `${-u}px`, g = s ? a : `${p}px`) : d === "left" && (m = `${o.floating.width + u}px`, g = s ? a : `${p}px`), { data: { x: m, y: g } };
  }
});
function on(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Tr = Zt, jr = Qt, Lr = en, kr = nn, tt = ["Enter", " "], Fr = ["ArrowDown", "PageUp", "Home"], rn = ["ArrowUp", "PageDown", "End"], $r = [...Fr, ...rn], Br = {
  ltr: [...tt, "ArrowRight"],
  rtl: [...tt, "ArrowLeft"]
}, zr = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Re = "Menu", [Ae, Wr, Gr] = uo(Re), [pe, sn] = nt(Re, [
  Gr,
  Yt,
  jt
]), Ke = Yt(), cn = jt(), [Hr, me] = pe(Re), [Kr, _e] = pe(Re), an = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, c = Ke(t), [u, d] = H(null), l = O(!1), a = ot(i), f = lo(r);
  return ue(() => {
    const p = () => {
      l.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => l.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ h.jsx(Tr, { ...c, children: /* @__PURE__ */ h.jsx(
    Hr,
    {
      scope: t,
      open: n,
      onOpenChange: a,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ h.jsx(
        Kr,
        {
          scope: t,
          onClose: U(() => a(!1), [a]),
          isUsingKeyboardRef: l,
          dir: f,
          modal: s,
          children: o
        }
      )
    }
  ) });
};
an.displayName = Re;
var Vr = "MenuAnchor", ft = b(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Ke(n);
    return /* @__PURE__ */ h.jsx(jr, { ...r, ...o, ref: t });
  }
);
ft.displayName = Vr;
var pt = "MenuPortal", [Ur, ln] = pe(pt, {
  forceMount: void 0
}), un = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = me(pt, t);
  return /* @__PURE__ */ h.jsx(Ur, { scope: t, forceMount: n, children: /* @__PURE__ */ h.jsx(Be, { present: n || i.open, children: /* @__PURE__ */ h.jsx(mo, { asChild: !0, container: r, children: o }) }) });
};
un.displayName = pt;
var V = "MenuContent", [Xr, mt] = pe(V), dn = b(
  (e, t) => {
    const n = ln(V, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = me(V, e.__scopeMenu), s = _e(V, e.__scopeMenu);
    return /* @__PURE__ */ h.jsx(Ae.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(Be, { present: o || i.open, children: /* @__PURE__ */ h.jsx(Ae.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ h.jsx(Yr, { ...r, ref: t }) : /* @__PURE__ */ h.jsx(qr, { ...r, ref: t }) }) }) });
  }
), Yr = b(
  (e, t) => {
    const n = me(V, e.__scopeMenu), o = O(null), r = fe(t, o);
    return ue(() => {
      const i = o.current;
      if (i) return ho(i);
    }, []), /* @__PURE__ */ h.jsx(
      ht,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: E(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), qr = b((e, t) => {
  const n = me(V, e.__scopeMenu);
  return /* @__PURE__ */ h.jsx(
    ht,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Zr = co("MenuContent.ScrollLock"), ht = b(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEntryFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: l,
      onFocusOutside: a,
      onInteractOutside: f,
      onDismiss: p,
      disableOutsideScroll: m,
      ...g
    } = e, v = me(V, n), w = _e(V, n), A = Ke(n), M = cn(n), y = Wr(n), [S, P] = H(null), R = O(null), j = fe(t, R, v.onContentChange), L = O(0), D = O(""), $ = O(0), k = O(null), N = O("right"), _ = O(0), z = m ? xo : io, I = m ? { as: Zr, allowPinchZoom: !0 } : void 0, T = (x) => {
      const B = D.current + x, q = y().filter((F) => !F.disabled), ce = document.activeElement, ve = q.find((F) => F.ref.current === ce)?.textValue, ye = q.map((F) => F.textValue), Ee = li(ye, B, ve), ae = q.find((F) => F.textValue === Ee)?.ref.current;
      (function F(be) {
        D.current = be, window.clearTimeout(L.current), be !== "" && (L.current = window.setTimeout(() => F(""), 1e3));
      })(B), ae && setTimeout(() => ae.focus());
    };
    ue(() => () => window.clearTimeout(L.current), []), go();
    const C = U((x) => N.current === k.current?.side && di(x, k.current?.area), []);
    return /* @__PURE__ */ h.jsx(
      Xr,
      {
        scope: n,
        searchRef: D,
        onItemEnter: U(
          (x) => {
            C(x) && x.preventDefault();
          },
          [C]
        ),
        onItemLeave: U(
          (x) => {
            C(x) || (R.current?.focus(), P(null));
          },
          [C]
        ),
        onTriggerLeave: U(
          (x) => {
            C(x) && x.preventDefault();
          },
          [C]
        ),
        pointerGraceTimerRef: $,
        onPointerGraceIntentChange: U((x) => {
          k.current = x;
        }, []),
        children: /* @__PURE__ */ h.jsx(z, { ...I, children: /* @__PURE__ */ h.jsx(
          wo,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: E(i, (x) => {
              x.preventDefault(), R.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ h.jsx(
              vo,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: l,
                onFocusOutside: a,
                onInteractOutside: f,
                onDismiss: p,
                children: /* @__PURE__ */ h.jsx(
                  po,
                  {
                    asChild: !0,
                    ...M,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: E(u, (x) => {
                      w.isUsingKeyboardRef.current || x.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ h.jsx(
                      Lr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Rn(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...A,
                        ...g,
                        ref: j,
                        style: { outline: "none", ...g.style },
                        onKeyDown: E(g.onKeyDown, (x) => {
                          const q = x.target.closest("[data-radix-menu-content]") === x.currentTarget, ce = x.ctrlKey || x.altKey || x.metaKey, ve = x.key.length === 1;
                          q && (x.key === "Tab" && x.preventDefault(), !ce && ve && T(x.key));
                          const ye = R.current;
                          if (x.target !== ye || !$r.includes(x.key)) return;
                          x.preventDefault();
                          const ae = y().filter((F) => !F.disabled).map((F) => F.ref.current);
                          rn.includes(x.key) && ae.reverse(), ci(ae);
                        }),
                        onBlur: E(e.onBlur, (x) => {
                          x.currentTarget.contains(x.target) || (window.clearTimeout(L.current), D.current = "");
                        }),
                        onPointerMove: E(
                          e.onPointerMove,
                          Pe((x) => {
                            const B = x.target, q = _.current !== x.clientX;
                            if (x.currentTarget.contains(B) && q) {
                              const ce = x.clientX > _.current ? "right" : "left";
                              N.current = ce, _.current = x.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
dn.displayName = V;
var Jr = "MenuGroup", gt = b(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ h.jsx(ne.div, { role: "group", ...o, ref: t });
  }
);
gt.displayName = Jr;
var Qr = "MenuLabel", fn = b(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ h.jsx(ne.div, { ...o, ref: t });
  }
);
fn.displayName = Qr;
var Fe = "MenuItem", Ot = "menu.itemSelect", Ve = b(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, i = O(null), s = _e(Fe, e.__scopeMenu), c = mt(Fe, e.__scopeMenu), u = fe(t, i), d = O(!1), l = () => {
      const a = i.current;
      if (!n && a) {
        const f = new CustomEvent(Ot, { bubbles: !0, cancelable: !0 });
        a.addEventListener(Ot, (p) => o?.(p), { once: !0 }), so(a, f), f.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ h.jsx(
      pn,
      {
        ...r,
        ref: u,
        disabled: n,
        onClick: E(e.onClick, l),
        onPointerDown: (a) => {
          e.onPointerDown?.(a), d.current = !0;
        },
        onPointerUp: E(e.onPointerUp, (a) => {
          d.current || a.currentTarget?.click();
        }),
        onKeyDown: E(e.onKeyDown, (a) => {
          const f = c.searchRef.current !== "";
          n || f && a.key === " " || tt.includes(a.key) && (a.currentTarget.click(), a.preventDefault());
        })
      }
    );
  }
);
Ve.displayName = Fe;
var pn = b(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...i } = e, s = mt(Fe, n), c = cn(n), u = O(null), d = fe(t, u), [l, a] = H(!1), [f, p] = H("");
    return ue(() => {
      const m = u.current;
      m && p((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ h.jsx(
      Ae.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? f,
        children: /* @__PURE__ */ h.jsx(fo, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ h.jsx(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: d,
            onPointerMove: E(
              e.onPointerMove,
              Pe((m) => {
                o ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: E(
              e.onPointerLeave,
              Pe((m) => s.onItemLeave(m))
            ),
            onFocus: E(e.onFocus, () => a(!0)),
            onBlur: E(e.onBlur, () => a(!1))
          }
        ) })
      }
    );
  }
), ei = "MenuCheckboxItem", mn = b(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ h.jsx(vn, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ h.jsx(
      Ve,
      {
        role: "menuitemcheckbox",
        "aria-checked": $e(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": wt(n),
        onSelect: E(
          r.onSelect,
          () => o?.($e(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
mn.displayName = ei;
var hn = "MenuRadioGroup", [ti, ni] = pe(
  hn,
  { value: void 0, onValueChange: () => {
  } }
), gn = b(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, i = ot(o);
    return /* @__PURE__ */ h.jsx(ti, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ h.jsx(gt, { ...r, ref: t }) });
  }
);
gn.displayName = hn;
var xn = "MenuRadioItem", wn = b(
  (e, t) => {
    const { value: n, ...o } = e, r = ni(xn, e.__scopeMenu), i = n === r.value;
    return /* @__PURE__ */ h.jsx(vn, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ h.jsx(
      Ve,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...o,
        ref: t,
        "data-state": wt(i),
        onSelect: E(
          o.onSelect,
          () => r.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
wn.displayName = xn;
var xt = "MenuItemIndicator", [vn, oi] = pe(
  xt,
  { checked: !1 }
), yn = b(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, i = oi(xt, n);
    return /* @__PURE__ */ h.jsx(
      Be,
      {
        present: o || $e(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ h.jsx(
          ne.span,
          {
            ...r,
            ref: t,
            "data-state": wt(i.checked)
          }
        )
      }
    );
  }
);
yn.displayName = xt;
var ri = "MenuSeparator", bn = b(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ h.jsx(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
bn.displayName = ri;
var ii = "MenuArrow", Mn = b(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Ke(n);
    return /* @__PURE__ */ h.jsx(kr, { ...r, ...o, ref: t });
  }
);
Mn.displayName = ii;
var si = "MenuSub", [ls, Cn] = pe(si), Me = "MenuSubTrigger", An = b(
  (e, t) => {
    const n = me(Me, e.__scopeMenu), o = _e(Me, e.__scopeMenu), r = Cn(Me, e.__scopeMenu), i = mt(Me, e.__scopeMenu), s = O(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = i, d = { __scopeMenu: e.__scopeMenu }, l = U(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return ue(() => l, [l]), ue(() => {
      const a = c.current;
      return () => {
        window.clearTimeout(a), u(null);
      };
    }, [c, u]), /* @__PURE__ */ h.jsx(ft, { asChild: !0, ...d, children: /* @__PURE__ */ h.jsx(
      pn,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Rn(n.open),
        ...e,
        ref: It(t, r.onTriggerChange),
        onClick: (a) => {
          e.onClick?.(a), !(e.disabled || a.defaultPrevented) && (a.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: E(
          e.onPointerMove,
          Pe((a) => {
            i.onItemEnter(a), !a.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: E(
          e.onPointerLeave,
          Pe((a) => {
            l();
            const f = n.content?.getBoundingClientRect();
            if (f) {
              const p = n.content?.dataset.side, m = p === "right", g = m ? -5 : 5, v = f[m ? "left" : "right"], w = f[m ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: a.clientX + g, y: a.clientY },
                  { x: v, y: f.top },
                  { x: w, y: f.top },
                  { x: w, y: f.bottom },
                  { x: v, y: f.bottom }
                ],
                side: p
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(a), a.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: E(e.onKeyDown, (a) => {
          const f = i.searchRef.current !== "";
          e.disabled || f && a.key === " " || Br[o.dir].includes(a.key) && (n.onOpenChange(!0), n.content?.focus(), a.preventDefault());
        })
      }
    ) });
  }
);
An.displayName = Me;
var Pn = "MenuSubContent", Sn = b(
  (e, t) => {
    const n = ln(V, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = me(V, e.__scopeMenu), s = _e(V, e.__scopeMenu), c = Cn(Pn, e.__scopeMenu), u = O(null), d = fe(t, u);
    return /* @__PURE__ */ h.jsx(Ae.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(Be, { present: o || i.open, children: /* @__PURE__ */ h.jsx(Ae.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(
      ht,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...r,
        ref: d,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          s.isUsingKeyboardRef.current && u.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: E(e.onFocusOutside, (l) => {
          l.target !== c.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: E(e.onEscapeKeyDown, (l) => {
          s.onClose(), l.preventDefault();
        }),
        onKeyDown: E(e.onKeyDown, (l) => {
          const a = l.currentTarget.contains(l.target), f = zr[s.dir].includes(l.key);
          a && f && (i.onOpenChange(!1), c.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Sn.displayName = Pn;
function Rn(e) {
  return e ? "open" : "closed";
}
function $e(e) {
  return e === "indeterminate";
}
function wt(e) {
  return $e(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ci(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ai(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function li(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = ai(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find(
    (d) => d.toLowerCase().startsWith(r.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function ui(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const c = t[i], u = t[s], d = c.x, l = c.y, a = u.x, f = u.y;
    l > o != f > o && n < (a - d) * (o - l) / (f - l) + d && (r = !r);
  }
  return r;
}
function di(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ui(n, t);
}
function Pe(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var fi = an, pi = ft, mi = un, hi = dn, gi = gt, xi = fn, wi = Ve, vi = mn, yi = gn, bi = wn, Mi = yn, Ci = bn, Ai = Mn, Pi = An, Si = Sn, Ue = "DropdownMenu", [Ri] = nt(
  Ue,
  [sn]
), W = sn(), [_i, _n] = Ri(Ue), En = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: c = !0
  } = e, u = W(t), d = O(null), [l, a] = ao({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Ue
  });
  return /* @__PURE__ */ h.jsx(
    _i,
    {
      scope: t,
      triggerId: vt(),
      triggerRef: d,
      contentId: vt(),
      open: l,
      onOpenChange: a,
      onOpenToggle: U(() => a((f) => !f), [a]),
      modal: c,
      children: /* @__PURE__ */ h.jsx(fi, { ...u, open: l, onOpenChange: a, dir: o, modal: c, children: n })
    }
  );
};
En.displayName = Ue;
var Dn = "DropdownMenuTrigger", On = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, i = _n(Dn, n), s = W(n);
    return /* @__PURE__ */ h.jsx(pi, { asChild: !0, ...s, children: /* @__PURE__ */ h.jsx(
      ne.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: It(t, i.triggerRef),
        onPointerDown: E(e.onPointerDown, (c) => {
          !o && c.button === 0 && c.ctrlKey === !1 && (i.onOpenToggle(), i.open || c.preventDefault());
        }),
        onKeyDown: E(e.onKeyDown, (c) => {
          o || (["Enter", " "].includes(c.key) && i.onOpenToggle(), c.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
On.displayName = Dn;
var Ei = "DropdownMenuPortal", Nn = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = W(t);
  return /* @__PURE__ */ h.jsx(mi, { ...o, ...n });
};
Nn.displayName = Ei;
var In = "DropdownMenuContent", Tn = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = _n(In, n), i = W(n), s = O(!1);
    return /* @__PURE__ */ h.jsx(
      hi,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...i,
        ...o,
        ref: t,
        onCloseAutoFocus: E(e.onCloseAutoFocus, (c) => {
          s.current || r.triggerRef.current?.focus(), s.current = !1, c.preventDefault();
        }),
        onInteractOutside: E(e.onInteractOutside, (c) => {
          const u = c.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, l = u.button === 2 || d;
          (!r.modal || l) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Tn.displayName = In;
var Di = "DropdownMenuGroup", jn = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
    return /* @__PURE__ */ h.jsx(gi, { ...r, ...o, ref: t });
  }
);
jn.displayName = Di;
var Oi = "DropdownMenuLabel", Ln = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
    return /* @__PURE__ */ h.jsx(xi, { ...r, ...o, ref: t });
  }
);
Ln.displayName = Oi;
var Ni = "DropdownMenuItem", kn = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
    return /* @__PURE__ */ h.jsx(wi, { ...r, ...o, ref: t });
  }
);
kn.displayName = Ni;
var Ii = "DropdownMenuCheckboxItem", Fn = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(vi, { ...r, ...o, ref: t });
});
Fn.displayName = Ii;
var Ti = "DropdownMenuRadioGroup", ji = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(yi, { ...r, ...o, ref: t });
});
ji.displayName = Ti;
var Li = "DropdownMenuRadioItem", $n = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(bi, { ...r, ...o, ref: t });
});
$n.displayName = Li;
var ki = "DropdownMenuItemIndicator", Bn = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(Mi, { ...r, ...o, ref: t });
});
Bn.displayName = ki;
var Fi = "DropdownMenuSeparator", zn = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(Ci, { ...r, ...o, ref: t });
});
zn.displayName = Fi;
var $i = "DropdownMenuArrow", Bi = b(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
    return /* @__PURE__ */ h.jsx(Ai, { ...r, ...o, ref: t });
  }
);
Bi.displayName = $i;
var zi = "DropdownMenuSubTrigger", Wn = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(Pi, { ...r, ...o, ref: t });
});
Wn.displayName = zi;
var Wi = "DropdownMenuSubContent", Gn = b((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = W(n);
  return /* @__PURE__ */ h.jsx(
    Si,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Gn.displayName = Wi;
var Gi = En, Hi = On, Ki = Nn, Hn = Tn, Vi = jn, Kn = Ln, Vn = kn, Un = Fn, Xn = $n, Yn = Bn, qn = zn, Zn = Wn, Jn = Gn;
const Ui = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xi = Tt("chevron-right", Ui);
const Yi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], qi = Tt("circle", Yi), us = Gi, ds = Hi, fs = Vi, Zi = b(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ h.jsxs(
  Zn,
  {
    ref: r,
    className: se(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ h.jsx(Xi, { className: "ml-auto" })
    ]
  }
));
Zi.displayName = Zn.displayName;
const Ji = b(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("div", { className: Nt, children: /* @__PURE__ */ h.jsx(
  Jn,
  {
    ref: n,
    className: se(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Ji.displayName = Jn.displayName;
const Qi = b(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ h.jsx(Ki, { children: /* @__PURE__ */ h.jsx("div", { className: Nt, children: /* @__PURE__ */ h.jsx(
  Hn,
  {
    ref: o,
    className: se(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: t,
    ...n
  }
) }) }));
Qi.displayName = Hn.displayName;
const es = b(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ h.jsx(
  Vn,
  {
    ref: o,
    className: se(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
es.displayName = Vn.displayName;
const ts = b(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ h.jsxs(
  Un,
  {
    ref: r,
    checked: n,
    className: se(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ h.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ h.jsx(Yn, { children: /* @__PURE__ */ h.jsx(yo, { className: "size-4" }) }) }),
      t
    ]
  }
));
ts.displayName = Un.displayName;
const ns = b(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ h.jsxs(
  Xn,
  {
    ref: o,
    className: se(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ h.jsx(Yn, { children: /* @__PURE__ */ h.jsx(qi, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
ns.displayName = Xn.displayName;
const os = b(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ h.jsx(
  Kn,
  {
    ref: o,
    className: se(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
os.displayName = Kn.displayName;
const rs = b(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  qn,
  {
    ref: n,
    className: se("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
rs.displayName = qn.displayName;
export {
  jr as A,
  Lr as C,
  us as D,
  Tr as R,
  kr as a,
  Xi as b,
  Yt as c,
  qi as d,
  ds as e,
  Qi as f,
  es as g,
  fs as h,
  rs as i,
  bo as u
};
//# sourceMappingURL=dropdown-menu-BSSmAory.mjs.map
