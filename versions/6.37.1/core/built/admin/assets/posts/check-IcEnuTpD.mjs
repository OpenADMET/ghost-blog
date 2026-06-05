import { B as Se, E as Ce, u as T, i as N, b as S, k as M, U as We, l as W, x as Ne, j as G, y as Be, Y as Ue, G as _e, q as A, X as Oe, a as je } from "./index-BAF0YXsp.mjs";
import { b as Z, c as ie, f as U, P as q, d as $, n as Ke, h as He } from "./createLucideIcon-DcUfTBt_.mjs";
var P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, P.apply(this, arguments);
};
function Pe(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function nn(e, t, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(u) {
      u(i);
    });
  }
  return new (n || (n = Promise))(function(i, u) {
    function o(l) {
      try {
        s(r.next(l));
      } catch (d) {
        u(d);
      }
    }
    function m(l) {
      try {
        s(r.throw(l));
      } catch (d) {
        u(d);
      }
    }
    function s(l) {
      l.done ? i(l.value) : a(l.value).then(o, m);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function Ve(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, i; r < a; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Xe(e, t) {
  return We((n, r) => t[n][r] ?? n, e);
}
var Ye = (e) => {
  const { present: t, children: n } = e, r = ze(t), a = typeof n == "function" ? n({ present: r.isPresent }) : Se.only(n), i = Z(r.ref, Ge(a));
  return typeof n == "function" || r.isPresent ? Ce(a, { ref: i }) : null;
};
Ye.displayName = "Presence";
function ze(e) {
  const [t, n] = T(), r = N(null), a = N(e), i = N("none"), u = e ? "mounted" : "unmounted", [o, m] = Xe(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return S(() => {
    const s = j(r.current);
    i.current = o === "mounted" ? s : "none";
  }, [o]), ie(() => {
    const s = r.current, l = a.current;
    if (l !== e) {
      const f = i.current, h = j(s);
      e ? m("MOUNT") : h === "none" || s?.display === "none" ? m("UNMOUNT") : m(l && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, m]), ie(() => {
    if (t) {
      let s;
      const l = t.ownerDocument.defaultView ?? window, d = (h) => {
        const c = j(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && c && (m("ANIMATION_END"), !a.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", s = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, f = (h) => {
        h.target === t && (i.current = j(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(s), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      m("ANIMATION_END");
  }, [t, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(o),
    ref: M((s) => {
      r.current = s ? getComputedStyle(s) : null, n(s);
    }, [])
  };
}
function j(e) {
  return e?.animationName || "none";
}
function Ge(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ze(e, t = globalThis?.document) {
  const n = U(e);
  S(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var qe = "DismissableLayer", ce = "dismissableLayer.update", Qe = "dismissableLayer.pointerDownOutside", $e = "dismissableLayer.focusOutside", le, Ae = Be({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Je = W(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: i,
      onInteractOutside: u,
      onDismiss: o,
      ...m
    } = e, s = Ne(Ae), [l, d] = T(null), f = l?.ownerDocument ?? globalThis?.document, [, h] = T({}), C = Z(t, (y) => d(y)), c = Array.from(s.layers), [v] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1), p = c.indexOf(v), g = l ? c.indexOf(l) : -1, E = s.layersWithOutsidePointerEventsDisabled.size > 0, b = g >= p, w = nt((y) => {
      const R = y.target, D = [...s.branches].some((B) => B.contains(R));
      !b || D || (a?.(y), u?.(y), y.defaultPrevented || o?.());
    }, f), O = rt((y) => {
      const R = y.target;
      [...s.branches].some((B) => B.contains(R)) || (i?.(y), u?.(y), y.defaultPrevented || o?.());
    }, f);
    return Ze((y) => {
      g === s.layers.size - 1 && (r?.(y), !y.defaultPrevented && o && (y.preventDefault(), o()));
    }, f), S(() => {
      if (l)
        return n && (s.layersWithOutsidePointerEventsDisabled.size === 0 && (le = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), s.layersWithOutsidePointerEventsDisabled.add(l)), s.layers.add(l), de(), () => {
          n && s.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = le);
        };
    }, [l, f, n, s]), S(() => () => {
      l && (s.layers.delete(l), s.layersWithOutsidePointerEventsDisabled.delete(l), de());
    }, [l, s]), S(() => {
      const y = () => h({});
      return document.addEventListener(ce, y), () => document.removeEventListener(ce, y);
    }, []), /* @__PURE__ */ G.jsx(
      q.div,
      {
        ...m,
        ref: C,
        style: {
          pointerEvents: E ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: $(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: $(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Je.displayName = qe;
var et = "DismissableLayerBranch", tt = W((e, t) => {
  const n = Ne(Ae), r = N(null), a = Z(t, r);
  return S(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ G.jsx(q.div, { ...e, ref: a });
});
tt.displayName = et;
function nt(e, t = globalThis?.document) {
  const n = U(e), r = N(!1), a = N(() => {
  });
  return S(() => {
    const i = (o) => {
      if (o.target && !r.current) {
        let m = function() {
          Te(
            Qe,
            n,
            s,
            { discrete: !0 }
          );
        };
        const s = { originalEvent: o };
        o.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = m, t.addEventListener("click", a.current, { once: !0 })) : m();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, u = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(u), t.removeEventListener("pointerdown", i), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function rt(e, t = globalThis?.document) {
  const n = U(e), r = N(!1);
  return S(() => {
    const a = (i) => {
      i.target && !r.current && Te($e, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function de() {
  const e = new CustomEvent(ce);
  document.dispatchEvent(e);
}
function Te(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? Ke(a, i) : a.dispatchEvent(i);
}
var at = "Portal", ot = W((e, t) => {
  const { container: n, ...r } = e, [a, i] = T(!1);
  ie(() => i(!0), []);
  const u = n || a && globalThis?.document?.body;
  return u ? Ue.createPortal(/* @__PURE__ */ G.jsx(q.div, { ...r, ref: t }), u) : null;
});
ot.displayName = at;
var J = 0;
function rn() {
  S(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? fe()), document.body.insertAdjacentElement("beforeend", e[1] ?? fe()), J++, () => {
      J === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), J--;
    };
  }, []);
}
function fe() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ee = "focusScope.autoFocusOnMount", te = "focusScope.autoFocusOnUnmount", ve = { bubbles: !1, cancelable: !0 }, it = "FocusScope", ct = W((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i,
    ...u
  } = e, [o, m] = T(null), s = U(a), l = U(i), d = N(null), f = Z(t, (c) => m(c)), h = N({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  S(() => {
    if (r) {
      let c = function(E) {
        if (h.paused || !o) return;
        const b = E.target;
        o.contains(b) ? d.current = b : L(d.current, { select: !0 });
      }, v = function(E) {
        if (h.paused || !o) return;
        const b = E.relatedTarget;
        b !== null && (o.contains(b) || L(d.current, { select: !0 }));
      }, p = function(E) {
        if (document.activeElement === document.body)
          for (const w of E)
            w.removedNodes.length > 0 && L(o);
      };
      document.addEventListener("focusin", c), document.addEventListener("focusout", v);
      const g = new MutationObserver(p);
      return o && g.observe(o, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", v), g.disconnect();
      };
    }
  }, [r, o, h.paused]), S(() => {
    if (o) {
      me.add(h);
      const c = document.activeElement;
      if (!o.contains(c)) {
        const p = new CustomEvent(ee, ve);
        o.addEventListener(ee, s), o.dispatchEvent(p), p.defaultPrevented || (st(vt(Le(o)), { select: !0 }), document.activeElement === c && L(o));
      }
      return () => {
        o.removeEventListener(ee, s), setTimeout(() => {
          const p = new CustomEvent(te, ve);
          o.addEventListener(te, l), o.dispatchEvent(p), p.defaultPrevented || L(c ?? document.body, { select: !0 }), o.removeEventListener(te, l), me.remove(h);
        }, 0);
      };
    }
  }, [o, s, l, h]);
  const C = M(
    (c) => {
      if (!n && !r || h.paused) return;
      const v = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = document.activeElement;
      if (v && p) {
        const g = c.currentTarget, [E, b] = ut(g);
        E && b ? !c.shiftKey && p === b ? (c.preventDefault(), n && L(E, { select: !0 })) : c.shiftKey && p === E && (c.preventDefault(), n && L(b, { select: !0 })) : p === g && c.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ G.jsx(q.div, { tabIndex: -1, ...u, ref: f, onKeyDown: C });
});
ct.displayName = it;
function st(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (L(r, { select: t }), document.activeElement !== n) return;
}
function ut(e) {
  const t = Le(e), n = he(t, e), r = he(t.reverse(), e);
  return [n, r];
}
function Le(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function he(e, t) {
  for (const n of e)
    if (!lt(n, { upTo: t })) return n;
}
function lt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function L(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dt(e) && t && e.select();
  }
}
var me = ft();
function ft() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = pe(e, t), e.unshift(t);
    },
    remove(t) {
      e = pe(e, t), e[0]?.resume();
    }
  };
}
function pe(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function vt(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ht = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, F = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), H = {}, ne = 0, Me = function(e) {
  return e && (e.host || Me(e.parentNode));
}, mt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Me(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, pt = function(e, t, n, r) {
  var a = mt(t, Array.isArray(e) ? e : [e]);
  H[n] || (H[n] = /* @__PURE__ */ new WeakMap());
  var i = H[n], u = [], o = /* @__PURE__ */ new Set(), m = new Set(a), s = function(d) {
    !d || o.has(d) || (o.add(d), s(d.parentNode));
  };
  a.forEach(s);
  var l = function(d) {
    !d || m.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (o.has(f))
        l(f);
      else
        try {
          var h = f.getAttribute(r), C = h !== null && h !== "false", c = (F.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
          F.set(f, c), i.set(f, v), u.push(f), c === 1 && C && K.set(f, !0), v === 1 && f.setAttribute(n, "true"), C || f.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", f, p);
        }
    });
  };
  return l(t), o.clear(), ne++, function() {
    u.forEach(function(d) {
      var f = F.get(d) - 1, h = i.get(d) - 1;
      F.set(d, f), i.set(d, h), f || (K.has(d) || d.removeAttribute(r), K.delete(d)), h || d.removeAttribute(n);
    }), ne--, ne || (F = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), H = {});
  };
}, an = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = ht(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), pt(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Y = "right-scroll-bar-position", z = "width-before-scroll-bar", yt = "with-scroll-bars-hidden", gt = "--removed-body-scroll-bar-size";
function re(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Et(e, t) {
  var n = T(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var bt = typeof window < "u" ? _e : S, ye = /* @__PURE__ */ new WeakMap();
function wt(e, t) {
  var n = Et(null, function(r) {
    return e.forEach(function(a) {
      return re(a, r);
    });
  });
  return bt(function() {
    var r = ye.get(n);
    if (r) {
      var a = new Set(r), i = new Set(e), u = n.current;
      a.forEach(function(o) {
        i.has(o) || re(o, null);
      }), i.forEach(function(o) {
        a.has(o) || re(o, u);
      });
    }
    ye.set(n, e);
  }, [e]), n;
}
function St(e) {
  return e;
}
function Ct(e, t) {
  t === void 0 && (t = St);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var u = t(i, r);
      return n.push(u), function() {
        n = n.filter(function(o) {
          return o !== u;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var u = n;
        n = [], u.forEach(i);
      }
      n = {
        push: function(o) {
          return i(o);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var u = [];
      if (n.length) {
        var o = n;
        n = [], o.forEach(i), u = n;
      }
      var m = function() {
        var l = u;
        u = [], l.forEach(i);
      }, s = function() {
        return Promise.resolve().then(m);
      };
      s(), n = {
        push: function(l) {
          u.push(l), s();
        },
        filter: function(l) {
          return u = u.filter(l), n;
        }
      };
    }
  };
  return a;
}
function Nt(e) {
  e === void 0 && (e = {});
  var t = Ct(null);
  return t.options = P({ async: !0, ssr: !1 }, e), t;
}
var Re = function(e) {
  var t = e.sideCar, n = Pe(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return A(r, P({}, n));
};
Re.isSideCarExport = !0;
function Ot(e, t) {
  return e.useMedium(t), Re;
}
var De = Nt(), ae = function() {
}, Q = W(function(e, t) {
  var n = N(null), r = T({
    onScrollCapture: ae,
    onWheelCapture: ae,
    onTouchMoveCapture: ae
  }), a = r[0], i = r[1], u = e.forwardProps, o = e.children, m = e.className, s = e.removeScrollBar, l = e.enabled, d = e.shards, f = e.sideCar, h = e.noRelative, C = e.noIsolation, c = e.inert, v = e.allowPinchZoom, p = e.as, g = p === void 0 ? "div" : p, E = e.gapMode, b = Pe(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, O = wt([n, t]), y = P(P({}, b), a);
  return A(
    Oe,
    null,
    l && A(w, { sideCar: De, removeScrollBar: s, shards: d, noRelative: h, noIsolation: C, inert: c, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: E }),
    u ? Ce(Se.only(o), P(P({}, y), { ref: O })) : A(g, P({}, y, { className: m, ref: O }), o)
  );
});
Q.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Q.classNames = {
  fullWidth: z,
  zeroRight: Y
};
var Pt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function At() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Pt();
  return t && e.setAttribute("nonce", t), e;
}
function Tt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lt(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Mt = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = At()) && (Tt(t, n), Lt(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Rt = function() {
  var e = Mt();
  return function(t, n) {
    S(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Fe = function() {
  var e = Rt(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Dt = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, oe = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ft = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [oe(n), oe(r), oe(a)];
}, It = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Dt;
  var t = Ft(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, kt = Fe(), x = "data-scroll-locked", xt = function(e, t, n, r) {
  var a = e.left, i = e.top, u = e.right, o = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(yt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(o, "px ").concat(r, `;
  }
  body[`).concat(x, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(o, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Y, ` {
    right: `).concat(o, "px ").concat(r, `;
  }
  
  .`).concat(z, ` {
    margin-right: `).concat(o, "px ").concat(r, `;
  }
  
  .`).concat(Y, " .").concat(Y, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(z, " .").concat(z, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(x, `] {
    `).concat(gt, ": ").concat(o, `px;
  }
`);
}, ge = function() {
  var e = parseInt(document.body.getAttribute(x) || "0", 10);
  return isFinite(e) ? e : 0;
}, Wt = function() {
  S(function() {
    return document.body.setAttribute(x, (ge() + 1).toString()), function() {
      var e = ge() - 1;
      e <= 0 ? document.body.removeAttribute(x) : document.body.setAttribute(x, e.toString());
    };
  }, []);
}, Bt = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  Wt();
  var i = je(function() {
    return It(a);
  }, [a]);
  return A(kt, { styles: xt(i, !t, a, n ? "" : "!important") });
}, se = !1;
if (typeof window < "u")
  try {
    var V = Object.defineProperty({}, "passive", {
      get: function() {
        return se = !0, !0;
      }
    });
    window.addEventListener("test", V, V), window.removeEventListener("test", V, V);
  } catch {
    se = !1;
  }
var I = se ? { passive: !1 } : !1, Ut = function(e) {
  return e.tagName === "TEXTAREA";
}, Ie = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ut(e) && n[t] === "visible")
  );
}, _t = function(e) {
  return Ie(e, "overflowY");
}, jt = function(e) {
  return Ie(e, "overflowX");
}, Ee = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = ke(e, r);
    if (a) {
      var i = xe(e, r), u = i[1], o = i[2];
      if (u > o)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Kt = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ht = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ke = function(e, t) {
  return e === "v" ? _t(t) : jt(t);
}, xe = function(e, t) {
  return e === "v" ? Kt(t) : Ht(t);
}, Vt = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Xt = function(e, t, n, r, a) {
  var i = Vt(e, window.getComputedStyle(t).direction), u = i * r, o = n.target, m = t.contains(o), s = !1, l = u > 0, d = 0, f = 0;
  do {
    if (!o)
      break;
    var h = xe(e, o), C = h[0], c = h[1], v = h[2], p = c - v - i * C;
    (C || p) && ke(e, o) && (d += p, f += C);
    var g = o.parentNode;
    o = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
  } while (
    // portaled content
    !m && o !== document.body || // self content
    m && (t.contains(o) || t === o)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(f) < 1) && (s = !0), s;
}, X = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, be = function(e) {
  return [e.deltaX, e.deltaY];
}, we = function(e) {
  return e && "current" in e ? e.current : e;
}, Yt = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, zt = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gt = 0, k = [];
function Zt(e) {
  var t = N([]), n = N([0, 0]), r = N(), a = T(Gt++)[0], i = T(Fe)[0], u = N(e);
  S(function() {
    u.current = e;
  }, [e]), S(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var c = Ve([e.lockRef.current], (e.shards || []).map(we), !0).filter(Boolean);
      return c.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), c.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var o = M(function(c, v) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey)
      return !u.current.allowPinchZoom;
    var p = X(c), g = n.current, E = "deltaX" in c ? c.deltaX : g[0] - p[0], b = "deltaY" in c ? c.deltaY : g[1] - p[1], w, O = c.target, y = Math.abs(E) > Math.abs(b) ? "h" : "v";
    if ("touches" in c && y === "h" && O.type === "range")
      return !1;
    var R = window.getSelection(), D = R && R.anchorNode, B = D ? D === O || D.contains(O) : !1;
    if (B)
      return !1;
    var _ = Ee(y, O);
    if (!_)
      return !0;
    if (_ ? w = y : (w = y === "v" ? "h" : "v", _ = Ee(y, O)), !_)
      return !1;
    if (!r.current && "changedTouches" in c && (E || b) && (r.current = w), !w)
      return !0;
    var ue = r.current || w;
    return Xt(ue, v, c, ue === "h" ? E : b);
  }, []), m = M(function(c) {
    var v = c;
    if (!(!k.length || k[k.length - 1] !== i)) {
      var p = "deltaY" in v ? be(v) : X(v), g = t.current.filter(function(w) {
        return w.name === v.type && (w.target === v.target || v.target === w.shadowParent) && Yt(w.delta, p);
      })[0];
      if (g && g.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!g) {
        var E = (u.current.shards || []).map(we).filter(Boolean).filter(function(w) {
          return w.contains(v.target);
        }), b = E.length > 0 ? o(v, E[0]) : !u.current.noIsolation;
        b && v.cancelable && v.preventDefault();
      }
    }
  }, []), s = M(function(c, v, p, g) {
    var E = { name: c, delta: v, target: p, should: g, shadowParent: qt(p) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== E;
      });
    }, 1);
  }, []), l = M(function(c) {
    n.current = X(c), r.current = void 0;
  }, []), d = M(function(c) {
    s(c.type, be(c), c.target, o(c, e.lockRef.current));
  }, []), f = M(function(c) {
    s(c.type, X(c), c.target, o(c, e.lockRef.current));
  }, []);
  S(function() {
    return k.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", m, I), document.addEventListener("touchmove", m, I), document.addEventListener("touchstart", l, I), function() {
      k = k.filter(function(c) {
        return c !== i;
      }), document.removeEventListener("wheel", m, I), document.removeEventListener("touchmove", m, I), document.removeEventListener("touchstart", l, I);
    };
  }, []);
  var h = e.removeScrollBar, C = e.inert;
  return A(
    Oe,
    null,
    C ? A(i, { styles: zt(a) }) : null,
    h ? A(Bt, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function qt(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qt = Ot(De, Zt);
var $t = W(function(e, t) {
  return A(Q, P({}, e, { ref: t, sideCar: Qt }));
});
$t.classNames = Q.classNames;
const Jt = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], on = He("check", Jt);
export {
  on as C,
  Je as D,
  ct as F,
  ot as P,
  $t as R,
  nn as _,
  Ye as a,
  Pe as b,
  an as h,
  rn as u
};
//# sourceMappingURL=check-IcEnuTpD.mjs.map
