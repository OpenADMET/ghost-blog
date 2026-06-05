import { h as Y, u as Z, a as y, b as h, P as D, d as m, e as J, g as Q, m as ee } from "./createLucideIcon-DcUfTBt_.mjs";
import { i as g, j as n, k as te, l as i, B as oe, b as _, S as ae, c as p } from "./index-BAF0YXsp.mjs";
import { a as P, P as ne, h as se, R as re, u as ie, F as le, D as ce } from "./check-IcEnuTpD.mjs";
const de = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Te = Y("x", de);
var v = "Dialog", [O, Me] = J(v), [ue, d] = O(v), R = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: s,
    defaultOpen: r,
    onOpenChange: a,
    modal: c = !0
  } = e, l = g(null), f = g(null), [N, C] = Z({
    prop: s,
    defaultProp: r ?? !1,
    onChange: a,
    caller: v
  });
  return /* @__PURE__ */ n.jsx(
    ue,
    {
      scope: t,
      triggerRef: l,
      contentRef: f,
      contentId: y(),
      titleId: y(),
      descriptionId: y(),
      open: N,
      onOpenChange: C,
      onOpenToggle: te(() => C((X) => !X), [C]),
      modal: c,
      children: o
    }
  );
};
R.displayName = v;
var I = "DialogTrigger", A = i(
  (e, t) => {
    const { __scopeDialog: o, ...s } = e, r = d(I, o), a = h(t, r.triggerRef);
    return /* @__PURE__ */ n.jsx(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": j(r.open),
        ...s,
        ref: a,
        onClick: m(e.onClick, r.onOpenToggle)
      }
    );
  }
);
A.displayName = I;
var b = "DialogPortal", [ge, T] = O(b, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: t, forceMount: o, children: s, container: r } = e, a = d(b, t);
  return /* @__PURE__ */ n.jsx(ge, { scope: t, forceMount: o, children: oe.map(s, (c) => /* @__PURE__ */ n.jsx(P, { present: o || a.open, children: /* @__PURE__ */ n.jsx(ne, { asChild: !0, container: r, children: c }) })) });
};
M.displayName = b;
var x = "DialogOverlay", S = i(
  (e, t) => {
    const o = T(x, e.__scopeDialog), { forceMount: s = o.forceMount, ...r } = e, a = d(x, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ n.jsx(P, { present: s || a.open, children: /* @__PURE__ */ n.jsx(fe, { ...r, ref: t }) }) : null;
  }
);
S.displayName = x;
var pe = Q("DialogOverlay.RemoveScroll"), fe = i(
  (e, t) => {
    const { __scopeDialog: o, ...s } = e, r = d(x, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ n.jsx(re, { as: pe, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ n.jsx(
        D.div,
        {
          "data-state": j(r.open),
          ...s,
          ref: t,
          style: { pointerEvents: "auto", ...s.style }
        }
      ) })
    );
  }
), u = "DialogContent", F = i(
  (e, t) => {
    const o = T(u, e.__scopeDialog), { forceMount: s = o.forceMount, ...r } = e, a = d(u, e.__scopeDialog);
    return /* @__PURE__ */ n.jsx(P, { present: s || a.open, children: a.modal ? /* @__PURE__ */ n.jsx(me, { ...r, ref: t }) : /* @__PURE__ */ n.jsx(De, { ...r, ref: t }) });
  }
);
F.displayName = u;
var me = i(
  (e, t) => {
    const o = d(u, e.__scopeDialog), s = g(null), r = h(t, o.contentRef, s);
    return _(() => {
      const a = s.current;
      if (a) return se(a);
    }, []), /* @__PURE__ */ n.jsx(
      k,
      {
        ...e,
        ref: r,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: m(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: m(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && a.preventDefault();
        }),
        onFocusOutside: m(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), De = i(
  (e, t) => {
    const o = d(u, e.__scopeDialog), s = g(!1), r = g(!1);
    return /* @__PURE__ */ n.jsx(
      k,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (s.current || o.triggerRef.current?.focus(), a.preventDefault()), s.current = !1, r.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (s.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const c = a.target;
          o.triggerRef.current?.contains(c) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
        }
      }
    );
  }
), k = i(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: s, onOpenAutoFocus: r, onCloseAutoFocus: a, ...c } = e, l = d(u, o), f = g(null), N = h(t, f);
    return ie(), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        le,
        {
          asChild: !0,
          loop: !0,
          trapped: s,
          onMountAutoFocus: r,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ n.jsx(
            ce,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": j(l.open),
              ...c,
              ref: N,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(xe, { titleId: l.titleId }),
        /* @__PURE__ */ n.jsx(Ne, { contentRef: f, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), E = "DialogTitle", w = i(
  (e, t) => {
    const { __scopeDialog: o, ...s } = e, r = d(E, o);
    return /* @__PURE__ */ n.jsx(D.h2, { id: r.titleId, ...s, ref: t });
  }
);
w.displayName = E;
var W = "DialogDescription", $ = i(
  (e, t) => {
    const { __scopeDialog: o, ...s } = e, r = d(W, o);
    return /* @__PURE__ */ n.jsx(D.p, { id: r.descriptionId, ...s, ref: t });
  }
);
$.displayName = W;
var L = "DialogClose", G = i(
  (e, t) => {
    const { __scopeDialog: o, ...s } = e, r = d(L, o);
    return /* @__PURE__ */ n.jsx(
      D.button,
      {
        type: "button",
        ...s,
        ref: t,
        onClick: m(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
G.displayName = L;
function j(e) {
  return e ? "open" : "closed";
}
var H = "DialogTitleWarning", [Se, z] = ee(H, {
  contentName: u,
  titleName: E,
  docsSlug: "dialog"
}), xe = ({ titleId: e }) => {
  const t = z(H), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return _(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, ve = "DialogDescriptionWarning", Ne = ({ contentRef: e, descriptionId: t }) => {
  const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z(ve).contentName}}.`;
  return _(() => {
    const r = e.current?.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(s));
  }, [s, e, t]), null;
}, Ce = R, ye = A, he = M, B = S, V = F, q = w, K = $, Fe = G;
const ke = Ce, we = ye, _e = he, U = i(({ className: e, ...t }, o) => /* @__PURE__ */ n.jsx(
  B,
  {
    ref: o,
    className: p(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t
  }
));
U.displayName = B.displayName;
const Pe = i(({ className: e, children: t, ...o }, s) => /* @__PURE__ */ n.jsx(_e, { children: /* @__PURE__ */ n.jsxs("div", { className: ae, children: [
  /* @__PURE__ */ n.jsx(U, {}),
  /* @__PURE__ */ n.jsx(
    V,
    {
      ref: s,
      className: p(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-surface-overlay p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        e
      ),
      ...o,
      children: t
    }
  )
] }) }));
Pe.displayName = V.displayName;
const be = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: p(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
be.displayName = "DialogHeader";
const Ee = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: p(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      e
    ),
    ...t
  }
);
Ee.displayName = "DialogFooter";
const je = i(({ className: e, ...t }, o) => /* @__PURE__ */ n.jsx(
  q,
  {
    ref: o,
    className: p(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
je.displayName = q.displayName;
const Oe = i(({ className: e, ...t }, o) => /* @__PURE__ */ n.jsx(
  K,
  {
    ref: o,
    className: p("text-sm text-muted-foreground", e),
    ...t
  }
));
Oe.displayName = K.displayName;
export {
  V as C,
  K as D,
  B as O,
  he as P,
  Ce as R,
  q as T,
  Se as W,
  Te as X,
  Fe as a,
  ye as b,
  Me as c,
  ke as d,
  we as e,
  Pe as f,
  be as g,
  je as h,
  Oe as i,
  Ee as j
};
//# sourceMappingURL=dialog-D6_lBvtT.mjs.map
