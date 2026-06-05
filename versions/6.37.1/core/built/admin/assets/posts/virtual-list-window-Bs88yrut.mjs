import { R as N, j as v, c as w, s as D, U as V, u as L, V as B, G as K, b as C, M as U, i as P } from "./index-BAF0YXsp.mjs";
import { j as $ } from "./createLucideIcon-DcUfTBt_.mjs";
import { I as M } from "./inline-C2YFQAdU.mjs";
import { B as q } from "./button-ufGBCcsV.mjs";
function Y({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    M,
    {
      align: "center",
      className: w("[grid-area:above]", n),
      "data-header": "header-above",
      gap: "sm",
      children: l
    }
  );
}
function G({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    $,
    {
      className: w(
        "text-2xl leading-[1.2em] lg:text-3xl [grid-area:title]",
        n
      ),
      "data-header": "header-title",
      children: l
    }
  );
}
function X({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    M,
    {
      align: "center",
      className: w("text-muted-foreground [grid-area:meta] pb-4 pt-1", n),
      "data-header": "header-meta",
      gap: "none",
      justify: "start",
      children: l
    }
  );
}
function Z({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    M,
    {
      align: "center",
      className: n,
      "data-header": "header-action-group",
      gap: "sm",
      children: l
    }
  );
}
function J({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    M,
    {
      align: "center",
      className: w("[grid-area:actions] sm:justify-self-end self-start", n),
      "data-header": "header-actions",
      gap: "lg",
      children: l
    }
  );
}
function Q({ className: n, children: l }) {
  return /* @__PURE__ */ v.jsx(
    M,
    {
      align: "center",
      className: w("[grid-area:nav] self-start mt-2 lg:mt-0.5", n),
      "data-header": "header-nav",
      gap: "sm",
      children: l
    }
  );
}
const ee = D("sticky top-0 z-50 -mb-4 grid gap-x-4 bg-gradient-to-b from-background via-background/70 to-background/70 p-4 backdrop-blur-md [grid-template-areas:'above''title''meta''actions''nav'] sm:[grid-template-areas:'above_above''title_actions''meta_actions''nav_nav'] lg:-mb-8 lg:p-8 dark:bg-black", {
  variants: {
    variant: {
      default: "lg:[grid-template-areas:'above_above''title_actions''meta_actions''nav_nav']",
      "inline-nav": "lg:[grid-template-columns:1fr_auto_auto] lg:[grid-template-areas:'above_above_above''title_nav_actions''meta_nav_actions']"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), we = Object.assign(
  N.forwardRef(function({ className: l, children: e, variant: t }, s) {
    return /* @__PURE__ */ v.jsx(
      "header",
      {
        ref: s,
        className: w(ee({ variant: t, className: l })),
        "data-header": "header",
        children: e
      }
    );
  }),
  {
    Above: Y,
    Title: G,
    Actions: J,
    ActionGroup: Z,
    Nav: Q,
    Meta: X
  }
), Ee = ({ isLoading: n, onClick: l }) => {
  const e = !!n;
  return /* @__PURE__ */ v.jsx("div", { className: "flex justify-center px-4 py-6", children: /* @__PURE__ */ v.jsx(
    q,
    {
      disabled: e,
      variant: "outline",
      onClick: l,
      children: e ? "Loading more..." : "Load more"
    }
  ) });
};
function W(n) {
  const e = n instanceof HTMLElement && window.getComputedStyle(n).overflowY, t = e !== "visible" && e !== "hidden";
  if (n) {
    if (t && n.scrollHeight >= n.clientHeight)
      return n;
  } else return null;
  return W(n.parentNode) || document.body;
}
function x(n, l, e) {
  let t = e.initialDeps ?? [], s, i = !0;
  function o() {
    var r, a, u;
    let c;
    e.key && ((r = e.debug) != null && r.call(e)) && (c = Date.now());
    const d = n();
    if (!(d.length !== t.length || d.some((m, g) => t[g] !== m)))
      return s;
    t = d;
    let f;
    if (e.key && ((a = e.debug) != null && a.call(e)) && (f = Date.now()), s = l(...d), e.key && ((u = e.debug) != null && u.call(e))) {
      const m = Math.round((Date.now() - c) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, S = g / 16, E = (p, I) => {
        for (p = String(p); p.length < I; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${E(g, 5)} /${E(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        e?.key
      );
    }
    return e?.onChange && !(i && e.skipInitialOnChange) && e.onChange(s), i = !1, s;
  }
  return o.updateDeps = (r) => {
    t = r;
  }, o;
}
function _(n, l) {
  if (n === void 0)
    throw new Error("Unexpected undefined");
  return n;
}
const te = (n, l) => Math.abs(n - l) < 1.01, se = (n, l, e) => {
  let t;
  return function(...s) {
    n.clearTimeout(t), t = n.setTimeout(() => l.apply(this, s), e);
  };
}, A = (n) => {
  const { offsetWidth: l, offsetHeight: e } = n;
  return { width: l, height: e };
}, ne = (n) => n, ie = (n) => {
  const l = Math.max(n.startIndex - n.overscan, 0), e = Math.min(n.endIndex + n.overscan, n.count - 1), t = [];
  for (let s = l; s <= e; s++)
    t.push(s);
  return t;
}, oe = (n, l) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const t = n.targetWindow;
  if (!t)
    return;
  const s = (o) => {
    const { width: r, height: a } = o;
    l({ width: Math.round(r), height: Math.round(a) });
  };
  if (s(A(e)), !t.ResizeObserver)
    return () => {
    };
  const i = new t.ResizeObserver((o) => {
    const r = () => {
      const a = o[0];
      if (a?.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          s({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      s(A(e));
    };
    n.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
  });
  return i.observe(e, { box: "border-box" }), () => {
    i.unobserve(e);
  };
}, R = {
  passive: !0
}, T = typeof window > "u" ? !0 : "onscrollend" in window, re = (n, l) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const t = n.targetWindow;
  if (!t)
    return;
  let s = 0;
  const i = n.options.useScrollendEvent && T ? () => {
  } : se(
    t,
    () => {
      l(s, !1);
    },
    n.options.isScrollingResetDelay
  ), o = (c) => () => {
    const { horizontal: d, isRtl: h } = n.options;
    s = d ? e.scrollLeft * (h && -1 || 1) : e.scrollTop, i(), l(s, c);
  }, r = o(!0), a = o(!1);
  e.addEventListener("scroll", r, R);
  const u = n.options.useScrollendEvent && T;
  return u && e.addEventListener("scrollend", a, R), () => {
    e.removeEventListener("scroll", r), u && e.removeEventListener("scrollend", a);
  };
}, le = (n, l, e) => {
  if (l?.borderBoxSize) {
    const t = l.borderBoxSize[0];
    if (t)
      return Math.round(
        t[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return n[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ae = (n, {
  adjustments: l = 0,
  behavior: e
}, t) => {
  var s, i;
  const o = n + l;
  (i = (s = t.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, {
    [t.options.horizontal ? "left" : "top"]: o,
    behavior: e
  });
};
class he {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e, t, s;
      return ((s = (t = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : t.now) == null ? void 0 : s.call(t)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const o = () => {
            const r = i.target, a = this.indexFromElement(r);
            if (!r.isConnected) {
              this.observer.unobserve(r);
              return;
            }
            this.shouldMeasureDuringScroll(a) && this.resizeItem(
              a,
              this.options.measureElement(r, i, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = t()) == null || s.disconnect(), e = null;
        },
        observe: (s) => {
          var i;
          return (i = t()) == null ? void 0 : i.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var i;
          return (i = t()) == null ? void 0 : i.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([t, s]) => {
        typeof s > "u" && delete e[t];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ne,
        rangeExtractor: ie,
        onChange: () => {
        },
        measureElement: le,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...e
      };
    }, this.notify = (e) => {
      var t, s;
      (s = (t = this.options).onChange) == null || s.call(t, this, e);
    }, this.maybeNotify = x(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const t = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== t) {
        if (this.cleanup(), !t) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = i, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
      const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = t - 1; o >= 0; o--) {
        const r = e[o];
        if (s.has(r.lane))
          continue;
        const a = i.get(
          r.lane
        );
        if (a == null || r.end > a.end ? i.set(r.lane, r) : r.end < a.end && s.set(r.lane, !0), s.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, r) => o.end === r.end ? o.index - r.index : o.end - r.end)[0] : void 0;
    }, this.getMeasurementOptions = x(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (e, t, s, i, o, r) => (this.prevLanes !== void 0 && this.prevLanes !== r && (this.lanesChangedFlag = !0), this.prevLanes = r, this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: t,
        scrollMargin: s,
        getItemKey: i,
        enabled: o,
        lanes: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = x(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: o, lanes: r }, a) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > e)
          for (const h of this.laneAssignments.keys())
            h >= e && this.laneAssignments.delete(h);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((h) => {
          this.itemSizeCache.set(h.key, h.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
        const c = this.measurementsCache.slice(0, u), d = new Array(r).fill(
          void 0
        );
        for (let h = 0; h < u; h++) {
          const f = c[h];
          f && (d[f.lane] = h);
        }
        for (let h = u; h < e; h++) {
          const f = i(h), m = this.laneAssignments.get(h);
          let g, S;
          if (m !== void 0 && this.options.lanes > 1) {
            g = m;
            const b = d[g], z = b !== void 0 ? c[b] : void 0;
            S = z ? z.end + this.options.gap : t + s;
          } else {
            const b = this.options.lanes === 1 ? c[h - 1] : this.getFurthestMeasurement(c, h);
            S = b ? b.end + this.options.gap : t + s, g = b ? b.lane : h % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(h, g);
          }
          const E = a.get(f), p = typeof E == "number" ? E : this.options.estimateSize(h), I = S + p;
          c[h] = {
            index: h,
            start: S,
            size: p,
            end: I,
            key: f,
            lane: g
          }, d[g] = h;
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = x(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, t, s, i) => this.range = e.length > 0 && t > 0 ? ce({
        measurements: e,
        outerSize: t,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = x(
      () => {
        let e = null, t = null;
        const s = this.calculateRange();
        return s && (e = s.startIndex, t = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, t]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          t
        ];
      },
      (e, t, s, i, o) => i === null || o === null ? [] : e({
        startIndex: i,
        endIndex: o,
        overscan: t,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const t = this.options.indexAttribute, s = e.getAttribute(t);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${t}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (e) => {
      var t;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((t = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : t.index);
      if (s !== void 0 && this.range) {
        const i = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), o = Math.max(0, s - i), r = Math.min(
          this.options.count - 1,
          s + i
        );
        return e >= o && e <= r;
      }
      return !0;
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((o, r) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(r));
        });
        return;
      }
      const t = this.indexFromElement(e), s = this.options.getItemKey(t), i = this.elementsCache.get(s);
      i !== e && (i && this.observer.unobserve(i), this.observer.observe(e), this.elementsCache.set(s, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this));
    }, this.resizeItem = (e, t) => {
      var s;
      const i = this.measurementsCache[e];
      if (!i) return;
      const o = this.itemSizeCache.get(i.key) ?? i.size, r = t - o;
      r !== 0 && (((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(i, r, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(i.index), this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t)), this.notify(!1));
    }, this.getVirtualItems = x(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, t) => {
        const s = [];
        for (let i = 0, o = e.length; i < o; i++) {
          const r = e[i], a = t[r];
          s.push(a);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const t = this.getMeasurements();
      if (t.length !== 0)
        return _(
          t[j(
            0,
            t.length - 1,
            (s) => _(t[s]).start,
            e
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const e = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (e, t, s = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), o = this.getScrollOffset();
      t === "auto" && (t = e >= o + i ? "end" : "start"), t === "center" ? e += (s - i) / 2 : t === "end" && (e -= i);
      const r = this.getMaxScrollOffset();
      return Math.max(Math.min(r, e), 0);
    }, this.getOffsetForIndex = (e, t = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const s = this.getSize(), i = this.getScrollOffset(), o = this.measurementsCache[e];
      if (!o) return;
      if (t === "auto")
        if (o.end >= i + s - this.options.scrollPaddingEnd)
          t = "end";
        else if (o.start <= i + this.options.scrollPaddingStart)
          t = "start";
        else
          return [i, t];
      if (t === "end" && e === this.options.count - 1)
        return [this.getMaxScrollOffset(), t];
      const r = t === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(r, t, o.size),
        t
      ];
    }, this.scrollToOffset = (e, { align: t = "start", behavior: s = "auto" } = {}) => {
      const i = this.getOffsetForAlignment(e, t), o = this.now();
      this.scrollState = {
        index: null,
        align: t,
        behavior: s,
        startedAt: o,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e, {
      align: t = "auto",
      behavior: s = "auto"
    } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const i = this.getOffsetForIndex(e, t);
      if (!i)
        return;
      const [o, r] = i, a = this.now();
      this.scrollState = {
        index: e,
        align: r,
        behavior: s,
        startedAt: a,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
      const s = this.getScrollOffset() + e, i = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: t,
        startedAt: i,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: t }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var e;
      const t = this.getMeasurements();
      let s;
      if (t.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((e = t[t.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let o = t.length - 1;
        for (; o >= 0 && i.some((r) => r === null); ) {
          const r = t[o];
          i[r.lane] === null && (i[r.lane] = r.end), o--;
        }
        s = Math.max(...i.filter((r) => r !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e, {
      adjustments: t,
      behavior: s
    }) => {
      this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(l);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const t = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = t ? t[0] : this.scrollState.lastTargetOffset, i = 1, o = s !== this.scrollState.lastTargetOffset;
    if (!o && te(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= i) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, o && (this.scrollState.lastTargetOffset = s, this.scrollState.behavior = "auto", this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const j = (n, l, e, t) => {
  for (; n <= l; ) {
    const s = (n + l) / 2 | 0, i = e(s);
    if (i < t)
      n = s + 1;
    else if (i > t)
      l = s - 1;
    else
      return s;
  }
  return n > 0 ? n - 1 : 0;
};
function ce({
  measurements: n,
  outerSize: l,
  scrollOffset: e,
  lanes: t
}) {
  const s = n.length - 1, i = (a) => n[a].start;
  if (n.length <= t)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = j(
    0,
    s,
    i,
    e
  ), r = o;
  if (t === 1)
    for (; r < s && n[r].end < e + l; )
      r++;
  else if (t > 1) {
    const a = Array(t).fill(0);
    for (; r < s && a.some((c) => c < e + l); ) {
      const c = n[r];
      a[c.lane] = c.end, r++;
    }
    const u = Array(t).fill(e + l);
    for (; o >= 0 && u.some((c) => c >= e); ) {
      const c = n[o];
      u[c.lane] = c.start, o--;
    }
    o = Math.max(0, o - o % t), r = Math.min(s, r + (t - 1 - r % t));
  }
  return { startIndex: o, endIndex: r };
}
const k = typeof document < "u" ? K : C;
function ue({
  useFlushSync: n = !0,
  ...l
}) {
  const e = V(() => ({}), {})[1], t = {
    ...l,
    onChange: (i, o) => {
      var r;
      n && o ? B(e) : e(), (r = l.onChange) == null || r.call(l, i, o);
    }
  }, [s] = L(
    () => new he(t)
  );
  return s.setOptions(t), k(() => s._didMount(), []), k(() => s._willUpdate()), s;
}
function de(n) {
  return ue({
    observeElementRect: oe,
    observeElementOffset: re,
    scrollToFn: ae,
    ...n
  });
}
function Me({
  items: n,
  totalItems: l,
  parentRef: e,
  hasNextPage: t,
  isFetchingNextPage: s,
  fetchNextPage: i,
  estimateSize: o = () => 100,
  overscan: r = 5
}) {
  const a = de({
    count: l,
    getScrollElement: () => W(e.current),
    estimateSize: o,
    overscan: r
  }), u = a.getVirtualItems(), c = u.length > 0 ? (u.at(0)?.start ?? 0) - a.options.scrollMargin : 0, d = u.length > 0 ? a.getTotalSize() - (u.at(-1)?.end ?? 0) : 0, h = u.map((m) => ({
    virtualItem: m,
    key: m.key,
    item: n[m.index],
    props: {
      ref: a.measureElement,
      "data-index": m.index
    }
  })), f = h.at(-1) && !h.at(-1)?.item;
  return C(() => {
    t && f && !s && i();
  }, [t, f, s, i]), {
    visibleItems: h,
    virtualizer: a,
    spaceBefore: c,
    spaceAfter: d
  };
}
const H = 1e3, O = "ghostVirtualListWindow";
function fe({
  totalItems: n,
  unlockedItemCount: l
}) {
  const e = Math.min(n, l);
  return {
    visibleItemCount: e,
    canLoadMore: n > e
  };
}
function me(n) {
  return n + H;
}
function ge(n, l) {
  return `${n}::${l}`;
}
function F(n, l, e = H) {
  const t = n?.[O];
  if (!t || typeof t != "object")
    return e;
  const s = t[l];
  return typeof s != "number" || !Number.isFinite(s) ? e : Math.max(1, Math.floor(s));
}
function pe(n, l, e) {
  if (typeof window > "u")
    return;
  const t = n?.[O], s = {
    ...n ?? {},
    [O]: {
      ...t && typeof t == "object" ? t : {},
      [l]: e
    }
  };
  window.history.replaceState(s, "");
}
function y() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function Ie(n, {
  resetKey: l
} = {}) {
  const { key: e, pathname: t, search: s } = U(), o = ge(t, l ?? s), [r, a] = L(() => F(y(), o)), u = P(o);
  C(() => {
    if (u.current !== o) {
      u.current = o, a(F(y(), o));
      return;
    }
    pe(y(), o, r);
  }, [o, e, r]);
  const { visibleItemCount: c, canLoadMore: d } = fe({
    totalItems: n,
    unlockedItemCount: r
  });
  return {
    visibleItemCount: c,
    canLoadMore: d,
    loadMore: () => a((h) => me(h))
  };
}
export {
  we as H,
  Ee as L,
  Me as a,
  W as g,
  Ie as u
};
//# sourceMappingURL=virtual-list-window-Bs88yrut.mjs.map
