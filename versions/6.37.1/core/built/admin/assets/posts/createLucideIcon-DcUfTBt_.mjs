import { k as R, y as E, a as y, j as f, x as _, G as D, i as C, b as N, u as T, W as $, l as p, B as h, A as b, E as A, X as B, V as X, R as z, c as m, q as w } from "./index-BAF0YXsp.mjs";
function P(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function I(...t) {
  return (e) => {
    let n = !1;
    const o = t.map((r) => {
      const s = P(r, e);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : P(t[r], null);
        }
      };
  };
}
function gt(...t) {
  return R(I(...t), t);
}
function ht(t, e) {
  const n = E(e), o = (s) => {
    const { children: c, ...i } = s, a = y(() => i, Object.values(i));
    return /* @__PURE__ */ f.jsx(n.Provider, { value: a, children: c });
  };
  o.displayName = t + "Provider";
  function r(s) {
    const c = _(n);
    if (c) return c;
    if (e !== void 0) return e;
    throw new Error(`\`${s}\` must be used within \`${t}\``);
  }
  return [o, r];
}
function yt(t, e = []) {
  let n = [];
  function o(s, c) {
    const i = E(c), a = n.length;
    n = [...n, c];
    const l = (d) => {
      const { scope: v, children: S, ...g } = d, O = v?.[t]?.[a] || i, W = y(() => g, Object.values(g));
      return /* @__PURE__ */ f.jsx(O.Provider, { value: W, children: S });
    };
    l.displayName = s + "Provider";
    function u(d, v) {
      const S = v?.[t]?.[a] || i, g = _(S);
      if (g) return g;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [l, u];
  }
  const r = () => {
    const s = n.map((c) => E(c));
    return function(i) {
      const a = i?.[t] || s;
      return y(
        () => ({ [`__scope${t}`]: { ...i, [t]: a } }),
        [i, a]
      );
    };
  };
  return r.scopeName = t, [o, F(r, ...e)];
}
function F(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const o = t.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const c = o.reduce((i, { useScope: a, scopeName: l }) => {
        const d = a(s)[`__scope${l}`];
        return { ...i, ...d };
      }, {});
      return y(() => ({ [`__scope${e.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
function vt(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (t?.(r), n === !1 || !r.defaultPrevented)
      return e?.(r);
  };
}
var H = globalThis?.document ? D : () => {
}, U = $[" useInsertionEffect ".trim().toString()] || H;
function St({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, c] = V({
    defaultProp: e,
    onChange: n
  }), i = t !== void 0, a = i ? t : r;
  {
    const u = C(t !== void 0);
    N(() => {
      const d = u.current;
      d !== i && console.warn(
        `${o} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, o]);
  }
  const l = R(
    (u) => {
      if (i) {
        const d = Z(u) ? u(t) : u;
        d !== t && c.current?.(d);
      } else
        s(u);
    },
    [i, t, s, c]
  );
  return [a, l];
}
function V({
  defaultProp: t,
  onChange: e
}) {
  const [n, o] = T(t), r = C(n), s = C(e);
  return U(() => {
    s.current = e;
  }, [e]), N(() => {
    r.current !== n && (s.current?.(n), r.current = n);
  }, [n, r]), [n, o, s];
}
function Z(t) {
  return typeof t == "function";
}
// @__NO_SIDE_EFFECTS__
function G(t) {
  const e = /* @__PURE__ */ q(t), n = p((o, r) => {
    const { children: s, ...c } = o, i = h.toArray(s), a = i.find(K);
    if (a) {
      const l = a.props.children, u = i.map((d) => d === a ? h.count(l) > 1 ? h.only(null) : b(l) ? l.props.children : null : d);
      return /* @__PURE__ */ f.jsx(e, { ...c, ref: r, children: b(l) ? A(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f.jsx(e, { ...c, ref: r, children: s });
  });
  return n.displayName = `${t}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function q(t) {
  const e = p((n, o) => {
    const { children: r, ...s } = n;
    if (b(r)) {
      const c = J(r), i = M(s, r.props);
      return r.type !== B && (i.ref = o ? I(o, c) : c), A(r, i);
    }
    return h.count(r) > 1 ? h.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var k = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ct(t) {
  const e = ({ children: n }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: n });
  return e.displayName = `${t}.Slottable`, e.__radixId = k, e;
}
function K(t) {
  return b(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === k;
}
function M(t, e) {
  const n = { ...e };
  for (const o in e) {
    const r = t[o], s = e[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      const a = s(...i);
      return r(...i), a;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function J(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var Q = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], bt = Q.reduce((t, e) => {
  const n = /* @__PURE__ */ G(`Primitive.${e}`), o = p((r, s) => {
    const { asChild: c, ...i } = r, a = c ? n : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(a, { ...i, ref: s });
  });
  return o.displayName = `Primitive.${e}`, { ...t, [e]: o };
}, {});
function Et(t, e) {
  t && X(() => t.dispatchEvent(e));
}
var Y = $[" useId ".trim().toString()] || (() => {
}), tt = 0;
function wt(t) {
  const [e, n] = T(Y());
  return H(() => {
    n((o) => o ?? String(tt++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
function Nt(t) {
  const e = C(t);
  return N(() => {
    e.current = t;
  }), y(() => (...n) => e.current?.(...n), []);
}
const et = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
}, nt = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, rt = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  inverse: "text-text-inverse"
}, ot = {
  none: "leading-none",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  tight: "leading-tight",
  tighter: "leading-tighter",
  supertight: "leading-supertight",
  body: "leading-body",
  heading: "leading-heading"
}, x = z.forwardRef(
  function({
    as: e = "p",
    className: n,
    size: o = "md",
    weight: r = "regular",
    tone: s = "primary",
    leading: c = "body",
    truncate: i = !1,
    ...a
  }, l) {
    const u = e;
    return /* @__PURE__ */ f.jsx(
      u,
      {
        ref: l,
        className: m(
          et[o],
          nt[r],
          rt[s],
          ot[c],
          i && "truncate",
          n
        ),
        ...a
      }
    );
  }
);
x.displayName = "Text";
const st = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ f.jsx(
    x,
    {
      ref: n,
      as: "h1",
      className: m("scroll-m-20 leading-[1.1em] tracking-tighter", t),
      size: "3xl",
      weight: "bold",
      ...e
    }
  )
);
st.displayName = "H1";
const it = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ f.jsx(
    x,
    {
      ref: n,
      as: "h2",
      className: m("scroll-m-20 tracking-tighter first:mt-0", t),
      size: "2xl",
      weight: "bold",
      ...e
    }
  )
);
it.displayName = "H2";
const ct = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ f.jsx(
    x,
    {
      ref: n,
      as: "h3",
      className: m("scroll-m-20 tracking-tight", t),
      size: "xl",
      weight: "semibold",
      ...e
    }
  )
);
ct.displayName = "H3";
const at = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ f.jsx(
    x,
    {
      ref: n,
      as: "h4",
      className: m("scroll-m-20 tracking-tight", t),
      size: "lg",
      weight: "semibold",
      ...e
    }
  )
);
at.displayName = "H4";
const lt = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ f.jsx(
    x,
    {
      ref: n,
      as: "div",
      className: m("tracking-wide uppercase", t),
      size: "xs",
      tone: "secondary",
      weight: "medium",
      ...e
    }
  )
);
lt.displayName = "HTable";
const L = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
const ut = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const dt = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
);
const j = (t) => {
  const e = dt(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
var ft = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const pt = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const mt = p(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: c,
    ...i
  }, a) => w(
    "svg",
    {
      ref: a,
      ...ft,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(n) * 24 / Number(e) : n,
      className: L("lucide", r),
      ...!s && !pt(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([l, u]) => w(l, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const Pt = (t, e) => {
  const n = p(
    ({ className: o, ...r }, s) => w(mt, {
      ref: s,
      iconNode: e,
      className: L(
        `lucide-${ut(j(t))}`,
        `lucide-${t}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = j(t), n;
};
export {
  lt as H,
  mt as I,
  bt as P,
  x as T,
  wt as a,
  gt as b,
  H as c,
  vt as d,
  yt as e,
  Nt as f,
  G as g,
  Pt as h,
  Ct as i,
  st as j,
  ct as k,
  I as l,
  ht as m,
  Et as n,
  St as u
};
//# sourceMappingURL=createLucideIcon-DcUfTBt_.mjs.map
