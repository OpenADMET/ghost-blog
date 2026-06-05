import { P as z, a as te, u as oe, b as F, d as b, e as ne, i as re, h as d } from "./createLucideIcon-DcUfTBt_.mjs";
import { l as w, j as l, i as _, b as k, k as g, u as V, a as ae, S as se, c as ce } from "./index-BAF0YXsp.mjs";
import { a as q, P as ie, D as le } from "./check-IcEnuTpD.mjs";
import { R as de, A as pe, c as G, C as ue, a as he } from "./dropdown-menu-BSSmAory.mjs";
var ye = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), fe = "VisuallyHidden", U = w(
  (e, o) => /* @__PURE__ */ l.jsx(
    z.span,
    {
      ...e,
      ref: o,
      style: { ...ye, ...e.style }
    }
  )
);
U.displayName = fe;
var ve = U, [L] = ne("Tooltip", [
  G
]), R = G(), Y = "TooltipProvider", xe = 700, D = "tooltip.open", [me, H] = L(Y), B = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = xe,
    skipDelayDuration: n = 300,
    disableHoverableContent: r = !1,
    children: c
  } = e, s = _(!0), y = _(!1), a = _(0);
  return k(() => {
    const u = a.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ l.jsx(
    me,
    {
      scope: o,
      isOpenDelayedRef: s,
      delayDuration: t,
      onOpen: g(() => {
        window.clearTimeout(a.current), s.current = !1;
      }, []),
      onClose: g(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => s.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: y,
      onPointerInTransitChange: g((u) => {
        y.current = u;
      }, []),
      disableHoverableContent: r,
      children: c
    }
  );
};
B.displayName = Y;
var N = "Tooltip", [ge, j] = L(N), W = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: n,
    defaultOpen: r,
    onOpenChange: c,
    disableHoverableContent: s,
    delayDuration: y
  } = e, a = H(N, e.__scopeTooltip), u = R(o), [i, h] = V(null), f = te(), p = _(0), v = s ?? a.disableHoverableContent, m = y ?? a.delayDuration, x = _(!1), [C, T] = oe({
    prop: n,
    defaultProp: r ?? !1,
    onChange: (I) => {
      I ? (a.onOpen(), document.dispatchEvent(new CustomEvent(D))) : a.onClose(), c?.(I);
    },
    caller: N
  }), P = ae(() => C ? x.current ? "delayed-open" : "instant-open" : "closed", [C]), E = g(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, T(!0);
  }, [T]), A = g(() => {
    window.clearTimeout(p.current), p.current = 0, T(!1);
  }, [T]), $ = g(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, T(!0), p.current = 0;
    }, m);
  }, [m, T]);
  return k(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ l.jsx(de, { ...u, children: /* @__PURE__ */ l.jsx(
    ge,
    {
      scope: o,
      contentId: f,
      open: C,
      stateAttribute: P,
      trigger: i,
      onTriggerChange: h,
      onTriggerEnter: g(() => {
        a.isOpenDelayedRef.current ? $() : E();
      }, [a.isOpenDelayedRef, $, E]),
      onTriggerLeave: g(() => {
        v ? A() : (window.clearTimeout(p.current), p.current = 0);
      }, [A, v]),
      onOpen: E,
      onClose: A,
      disableHoverableContent: v,
      children: t
    }
  ) });
};
W.displayName = N;
var O = "TooltipTrigger", X = w(
  (e, o) => {
    const { __scopeTooltip: t, ...n } = e, r = j(O, t), c = H(O, t), s = R(t), y = _(null), a = F(o, y, r.onTriggerChange), u = _(!1), i = _(!1), h = g(() => u.current = !1, []);
    return k(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ l.jsx(pe, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      z.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...n,
        ref: a,
        onPointerMove: b(e.onPointerMove, (f) => {
          f.pointerType !== "touch" && !i.current && !c.isPointerInTransitRef.current && (r.onTriggerEnter(), i.current = !0);
        }),
        onPointerLeave: b(e.onPointerLeave, () => {
          r.onTriggerLeave(), i.current = !1;
        }),
        onPointerDown: b(e.onPointerDown, () => {
          r.open && r.onClose(), u.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: b(e.onFocus, () => {
          u.current || r.onOpen();
        }),
        onBlur: b(e.onBlur, r.onClose),
        onClick: b(e.onClick, r.onClose)
      }
    ) });
  }
);
X.displayName = O;
var S = "TooltipPortal", [Te, _e] = L(S, {
  forceMount: void 0
}), K = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: n, container: r } = e, c = j(S, o);
  return /* @__PURE__ */ l.jsx(Te, { scope: o, forceMount: t, children: /* @__PURE__ */ l.jsx(q, { present: t || c.open, children: /* @__PURE__ */ l.jsx(ie, { asChild: !0, container: r, children: n }) }) });
};
K.displayName = S;
var M = "TooltipContent", J = w(
  (e, o) => {
    const t = _e(M, e.__scopeTooltip), { forceMount: n = t.forceMount, side: r = "top", ...c } = e, s = j(M, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(q, { present: n || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ l.jsx(Q, { side: r, ...c, ref: o }) : /* @__PURE__ */ l.jsx(Ce, { side: r, ...c, ref: o }) });
  }
), Ce = w((e, o) => {
  const t = j(M, e.__scopeTooltip), n = H(M, e.__scopeTooltip), r = _(null), c = F(o, r), [s, y] = V(null), { trigger: a, onClose: u } = t, i = r.current, { onPointerInTransitChange: h } = n, f = g(() => {
    y(null), h(!1);
  }, [h]), p = g(
    (v, m) => {
      const x = v.currentTarget, C = { x: v.clientX, y: v.clientY }, T = Pe(C, x.getBoundingClientRect()), P = Ee(C, T), E = Ae(m.getBoundingClientRect()), A = je([...P, ...E]);
      y(A), h(!0);
    },
    [h]
  );
  return k(() => () => f(), [f]), k(() => {
    if (a && i) {
      const v = (x) => p(x, i), m = (x) => p(x, a);
      return a.addEventListener("pointerleave", v), i.addEventListener("pointerleave", m), () => {
        a.removeEventListener("pointerleave", v), i.removeEventListener("pointerleave", m);
      };
    }
  }, [a, i, p, f]), k(() => {
    if (s) {
      const v = (m) => {
        const x = m.target, C = { x: m.clientX, y: m.clientY }, T = a?.contains(x) || i?.contains(x), P = !Ne(C, s);
        T ? f() : P && (f(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [a, i, s, u, f]), /* @__PURE__ */ l.jsx(Q, { ...e, ref: c });
}), [ke, we] = L(N, { isInside: !1 }), be = re("TooltipContent"), Q = w(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: n,
      "aria-label": r,
      onEscapeKeyDown: c,
      onPointerDownOutside: s,
      ...y
    } = e, a = j(M, t), u = R(t), { onClose: i } = a;
    return k(() => (document.addEventListener(D, i), () => document.removeEventListener(D, i)), [i]), k(() => {
      if (a.trigger) {
        const h = (f) => {
          f.target?.contains(a.trigger) && i();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [a.trigger, i]), /* @__PURE__ */ l.jsx(
      le,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: s,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: i,
        children: /* @__PURE__ */ l.jsxs(
          ue,
          {
            "data-state": a.stateAttribute,
            ...u,
            ...y,
            ref: o,
            style: {
              ...y.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(be, { children: n }),
              /* @__PURE__ */ l.jsx(ke, { scope: t, isInside: !0, children: /* @__PURE__ */ l.jsx(ve, { id: a.contentId, role: "tooltip", children: r || n }) })
            ]
          }
        )
      }
    );
  }
);
J.displayName = M;
var Z = "TooltipArrow", Me = w(
  (e, o) => {
    const { __scopeTooltip: t, ...n } = e, r = R(t);
    return we(
      Z,
      t
    ).isInside ? null : /* @__PURE__ */ l.jsx(he, { ...r, ...n, ref: o });
  }
);
Me.displayName = Z;
function Pe(e, o) {
  const t = Math.abs(o.top - e.y), n = Math.abs(o.bottom - e.y), r = Math.abs(o.right - e.x), c = Math.abs(o.left - e.x);
  switch (Math.min(t, n, r, c)) {
    case c:
      return "left";
    case r:
      return "right";
    case t:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ee(e, o, t = 5) {
  const n = [];
  switch (o) {
    case "top":
      n.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      n.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      n.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return n;
}
function Ae(e) {
  const { top: o, right: t, bottom: n, left: r } = e;
  return [
    { x: r, y: o },
    { x: t, y: o },
    { x: t, y: n },
    { x: r, y: n }
  ];
}
function Ne(e, o) {
  const { x: t, y: n } = e;
  let r = !1;
  for (let c = 0, s = o.length - 1; c < o.length; s = c++) {
    const y = o[c], a = o[s], u = y.x, i = y.y, h = a.x, f = a.y;
    i > n != f > n && t < (h - u) * (n - i) / (f - i) + u && (r = !r);
  }
  return r;
}
function je(e) {
  const o = e.slice();
  return o.sort((t, n) => t.x < n.x ? -1 : t.x > n.x ? 1 : t.y < n.y ? -1 : t.y > n.y ? 1 : 0), Le(o);
}
function Le(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (; o.length >= 2; ) {
      const c = o[o.length - 1], s = o[o.length - 2];
      if ((c.x - s.x) * (r.y - s.y) >= (c.y - s.y) * (r.x - s.x)) o.pop();
      else break;
    }
    o.push(r);
  }
  o.pop();
  const t = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e[n];
    for (; t.length >= 2; ) {
      const c = t[t.length - 1], s = t[t.length - 2];
      if ((c.x - s.x) * (r.y - s.y) >= (c.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Re = B, De = W, Oe = X, He = K, ee = J;
const Se = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], it = d("calendar", Se);
const $e = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], lt = d("chevron-left", $e);
const Ie = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], dt = d("chevron-up", Ie);
const ze = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], pt = d("circle-alert", ze);
const Fe = [["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]], ut = d("dot", Fe);
const Ve = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], ht = d("eye-off", Ve);
const qe = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], yt = d("eye", qe);
const Ge = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ft = d("file-text", Ge);
const Ue = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], vt = d("flag", Ue);
const Ye = [
  [
    "path",
    {
      d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",
      key: "8mvsmf"
    }
  ],
  ["path", { d: "M16 6h6", key: "1dogtp" }],
  ["path", { d: "M19 3v6", key: "1ytpjt" }]
], xt = d("funnel-plus", Ye);
const Be = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], mt = d("funnel", Be);
const We = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], gt = d("heart", We);
const Xe = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Tt = d("loader-circle", Xe);
const Ke = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989",
      key: "7il5tn"
    }
  ],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }]
], _t = d("message-circle-off", Ke);
const Je = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Ct = d("message-circle", Je);
const Qe = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M7 11h10", key: "1twpyw" }],
  ["path", { d: "M7 15h6", key: "d9of3u" }],
  ["path", { d: "M7 7h8", key: "af5zfr" }]
], kt = d("message-square-text", Qe);
const Ze = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], wt = d("message-square", Ze);
const et = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], bt = d("plus", et);
const tt = [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
], Mt = d("reply", tt);
const ot = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Pt = d("search", ot), Et = Re, At = De, Nt = Oe, nt = w(({ className: e, sideOffset: o = 4, ...t }, n) => /* @__PURE__ */ l.jsx(He, { children: /* @__PURE__ */ l.jsx("div", { className: se, children: /* @__PURE__ */ l.jsx(
  ee,
  {
    ref: n,
    className: ce(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: o,
    ...t
  }
) }) }));
nt.displayName = ee.displayName;
export {
  dt as C,
  ut as D,
  yt as E,
  xt as F,
  gt as H,
  Tt as L,
  Ct as M,
  bt as P,
  Mt as R,
  Pt as S,
  Et as T,
  ye as V,
  it as a,
  vt as b,
  lt as c,
  pt as d,
  ht as e,
  ft as f,
  mt as g,
  _t as h,
  wt as i,
  kt as j,
  At as k,
  Nt as l,
  nt as m
};
//# sourceMappingURL=tooltip-CTcyINxz.mjs.map
