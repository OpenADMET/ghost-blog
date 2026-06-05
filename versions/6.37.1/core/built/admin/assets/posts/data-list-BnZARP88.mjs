import { u as Ux, P as Ka, a as Wx, d as Ci, e as Hx, h as Cn } from "./createLucideIcon-DcUfTBt_.mjs";
import { l as $e, j as H, i as Xr, b as Va, x as Re, c as fe, y as gt, s as Gl, z as Un, n as ie, A as Ye, B as Ft, p as se, R as E, P as Xt, D as zx, u as Kl, k as Gx, a as Vl, E as xe, q as Xa, C as Kx, F as Vx } from "./index-BAF0YXsp.mjs";
import { u as Xx, R as Yx, I as Zx, b as jm } from "./skeleton-S1k58YKa.mjs";
import { a as Jx } from "./check-IcEnuTpD.mjs";
import { e as Qx } from "./dropdown-menu-BSSmAory.mjs";
var Ya = "Tabs", [e1] = Hx(Ya, [
  jm
]), Cm = jm(), [t1, Xl] = e1(Ya), Im = $e(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: a,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: u,
      activationMode: s = "automatic",
      ...c
    } = e, f = Xx(u), [l, d] = Ux({
      prop: n,
      onChange: a,
      defaultProp: i ?? "",
      caller: Ya
    });
    return /* @__PURE__ */ H.jsx(
      t1,
      {
        scope: r,
        baseId: Wx(),
        value: l,
        onValueChange: d,
        orientation: o,
        dir: f,
        activationMode: s,
        children: /* @__PURE__ */ H.jsx(
          Ka.div,
          {
            dir: f,
            "data-orientation": o,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Im.displayName = Ya;
var $m = "TabsList", Rm = $e(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...a } = e, i = Xl($m, r), o = Cm(r);
    return /* @__PURE__ */ H.jsx(
      Yx,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ H.jsx(
          Ka.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
Rm.displayName = $m;
var Nm = "TabsTrigger", Dm = $e(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: a = !1, ...i } = e, o = Xl(Nm, r), u = Cm(r), s = Lm(o.baseId, n), c = Bm(o.baseId, n), f = n === o.value;
    return /* @__PURE__ */ H.jsx(
      Zx,
      {
        asChild: !0,
        ...u,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ H.jsx(
          Ka.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: s,
            ...i,
            ref: t,
            onMouseDown: Ci(e.onMouseDown, (l) => {
              !a && l.button === 0 && l.ctrlKey === !1 ? o.onValueChange(n) : l.preventDefault();
            }),
            onKeyDown: Ci(e.onKeyDown, (l) => {
              [" ", "Enter"].includes(l.key) && o.onValueChange(n);
            }),
            onFocus: Ci(e.onFocus, () => {
              const l = o.activationMode !== "manual";
              !f && !a && l && o.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
Dm.displayName = Nm;
var qm = "TabsContent", km = $e(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: a, children: i, ...o } = e, u = Xl(qm, r), s = Lm(u.baseId, n), c = Bm(u.baseId, n), f = n === u.value, l = Xr(f);
    return Va(() => {
      const d = requestAnimationFrame(() => l.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ H.jsx(Jx, { present: a || f, children: ({ present: d }) => /* @__PURE__ */ H.jsx(
      Ka.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": s,
        hidden: !d,
        id: c,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
          ...e.style,
          animationDuration: l.current ? "0s" : void 0
        },
        children: d && i
      }
    ) });
  }
);
km.displayName = qm;
function Lm(e, t) {
  return `${e}-trigger-${t}`;
}
function Bm(e, t) {
  return `${e}-content-${t}`;
}
var Fm = Im, Um = Rm, Yl = Dm, Wm = km;
const r1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], m2 = Cn("arrow-left", r1);
const n1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], b2 = Cn("arrow-right", n1);
const a1 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], x2 = Cn("arrow-up", a1);
const i1 = [
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ],
  ["path", { d: "M17 14V2", key: "8ymqnk" }]
], w2 = Cn("thumbs-down", i1);
const o1 = [
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ],
  ["path", { d: "M7 10v12", key: "1qc93n" }]
], _2 = Cn("thumbs-up", o1), In = gt("segmented"), u1 = $e(({ variant: e = "segmented", ...t }, r) => /* @__PURE__ */ H.jsx(In.Provider, { value: e, children: /* @__PURE__ */ H.jsx(Fm, { ref: r, ...t }) }));
u1.displayName = Fm.displayName;
const s1 = Gl(
  "inline-flex items-center text-muted-foreground",
  {
    variants: {
      variant: {
        segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
        "segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
        button: "gap-2",
        "button-sm": "gap-1",
        underline: "w-full gap-5 border-b border-border-default",
        navbar: "h-[52px] items-end gap-6",
        pill: "-ml-0.5 h-[30px] gap-px",
        // The `kpis` variant is consumed only by `features/kpi/kpi-tabs.tsx`.
        // Kept here so the cva variant set is in one place; not for direct use by app code.
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), c1 = $e(({ className: e, ...t }, r) => {
  const n = Re(In);
  return /* @__PURE__ */ H.jsx(
    Um,
    {
      ref: r,
      className: fe(s1({ variant: n, className: e })),
      ...t
    }
  );
});
c1.displayName = Um.displayName;
const Hm = Gl(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-sm font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-xs font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-sm font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-xs font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-md font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-md font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-md font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), l1 = $e(({ className: e, ...t }, r) => {
  const n = Re(In);
  return /* @__PURE__ */ H.jsx(
    Yl,
    {
      ref: r,
      className: fe(Hm({ variant: n, className: e })),
      ...t
    }
  );
});
l1.displayName = Yl.displayName;
const f1 = Gl(
  "ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        segmented: "",
        "segmented-sm": "",
        button: "",
        "button-sm": "",
        underline: "",
        navbar: "",
        pill: "",
        kpis: "ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), d1 = $e(({ className: e, ...t }, r) => {
  const n = Re(In);
  return /* @__PURE__ */ H.jsx(
    Wm,
    {
      ref: r,
      className: fe(f1({ variant: n, className: e })),
      ...t
    }
  );
});
d1.displayName = Wm.displayName;
const h1 = $e(({
  children: e,
  className: t,
  ...r
}, n) => {
  const a = Re(In);
  return /* @__PURE__ */ H.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ H.jsx(
      Yl,
      {
        ref: n,
        className: fe(Hm({ variant: a, className: t })),
        ...r,
        children: /* @__PURE__ */ H.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ H.jsx(
      Qx,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
h1.displayName = "TabsDropdownTrigger";
var Ii, ed;
function Ne() {
  if (ed) return Ii;
  ed = 1;
  var e = Array.isArray;
  return Ii = e, Ii;
}
var $i, td;
function zm() {
  if (td) return $i;
  td = 1;
  var e = typeof Un == "object" && Un && Un.Object === Object && Un;
  return $i = e, $i;
}
var Ri, rd;
function ut() {
  if (rd) return Ri;
  rd = 1;
  var e = zm(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Ri = r, Ri;
}
var Ni, nd;
function $n() {
  if (nd) return Ni;
  nd = 1;
  var e = ut(), t = e.Symbol;
  return Ni = t, Ni;
}
var Di, ad;
function p1() {
  if (ad) return Di;
  ad = 1;
  var e = $n(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var u = r.call(o, a), s = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (u ? o[a] = s : delete o[a]), f;
  }
  return Di = i, Di;
}
var qi, id;
function v1() {
  if (id) return qi;
  id = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return qi = r, qi;
}
var ki, od;
function mt() {
  if (od) return ki;
  od = 1;
  var e = $n(), t = p1(), r = v1(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? t(u) : r(u);
  }
  return ki = o, ki;
}
var Li, ud;
function bt() {
  if (ud) return Li;
  ud = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Li = e, Li;
}
var Bi, sd;
function Tr() {
  if (sd) return Bi;
  sd = 1;
  var e = mt(), t = bt(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Bi = n, Bi;
}
var Fi, cd;
function Zl() {
  if (cd) return Fi;
  cd = 1;
  var e = Ne(), t = Tr(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return Fi = a, Fi;
}
var Ui, ld;
function Tt() {
  if (ld) return Ui;
  ld = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ui = e, Ui;
}
var Wi, fd;
function Jl() {
  if (fd) return Wi;
  fd = 1;
  var e = mt(), t = Tt(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var s = e(u);
    return s == n || s == a || s == r || s == i;
  }
  return Wi = o, Wi;
}
var Hi, dd;
function y1() {
  if (dd) return Hi;
  dd = 1;
  var e = ut(), t = e["__core-js_shared__"];
  return Hi = t, Hi;
}
var zi, hd;
function g1() {
  if (hd) return zi;
  hd = 1;
  var e = y1(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return zi = r, zi;
}
var Gi, pd;
function Gm() {
  if (pd) return Gi;
  pd = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Gi = r, Gi;
}
var Ki, vd;
function m1() {
  if (vd) return Ki;
  vd = 1;
  var e = Jl(), t = g1(), r = Tt(), n = Gm(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + s.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? f : i;
    return p.test(n(d));
  }
  return Ki = l, Ki;
}
var Vi, yd;
function b1() {
  if (yd) return Vi;
  yd = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Vi = e, Vi;
}
var Xi, gd;
function Yt() {
  if (gd) return Xi;
  gd = 1;
  var e = m1(), t = b1();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Xi = r, Xi;
}
var Yi, md;
function Za() {
  if (md) return Yi;
  md = 1;
  var e = Yt(), t = e(Object, "create");
  return Yi = t, Yi;
}
var Zi, bd;
function x1() {
  if (bd) return Zi;
  bd = 1;
  var e = Za();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Zi = t, Zi;
}
var Ji, xd;
function w1() {
  if (xd) return Ji;
  xd = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Ji = e, Ji;
}
var Qi, wd;
function _1() {
  if (wd) return Qi;
  wd = 1;
  var e = Za(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var u = o[i];
      return u === t ? void 0 : u;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Qi = a, Qi;
}
var eo, _d;
function O1() {
  if (_d) return eo;
  _d = 1;
  var e = Za(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return eo = n, eo;
}
var to, Od;
function S1() {
  if (Od) return to;
  Od = 1;
  var e = Za(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return to = r, to;
}
var ro, Sd;
function A1() {
  if (Sd) return ro;
  Sd = 1;
  var e = x1(), t = w1(), r = _1(), n = O1(), a = S1();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ro = i, ro;
}
var no, Ad;
function P1() {
  if (Ad) return no;
  Ad = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return no = e, no;
}
var ao, Pd;
function Ql() {
  if (Pd) return ao;
  Pd = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ao = e, ao;
}
var io, Td;
function Ja() {
  if (Td) return io;
  Td = 1;
  var e = Ql();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return io = t, io;
}
var oo, Ed;
function T1() {
  if (Ed) return oo;
  Ed = 1;
  var e = Ja(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var u = i.length - 1;
    return o == u ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return oo = n, oo;
}
var uo, Md;
function E1() {
  if (Md) return uo;
  Md = 1;
  var e = Ja();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return uo = t, uo;
}
var so, jd;
function M1() {
  if (jd) return so;
  jd = 1;
  var e = Ja();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return so = t, so;
}
var co, Cd;
function j1() {
  if (Cd) return co;
  Cd = 1;
  var e = Ja();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return co = t, co;
}
var lo, Id;
function Qa() {
  if (Id) return lo;
  Id = 1;
  var e = P1(), t = T1(), r = E1(), n = M1(), a = j1();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, lo = i, lo;
}
var fo, $d;
function ef() {
  if ($d) return fo;
  $d = 1;
  var e = Yt(), t = ut(), r = e(t, "Map");
  return fo = r, fo;
}
var ho, Rd;
function C1() {
  if (Rd) return ho;
  Rd = 1;
  var e = A1(), t = Qa(), r = ef();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return ho = n, ho;
}
var po, Nd;
function I1() {
  if (Nd) return po;
  Nd = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return po = e, po;
}
var vo, Dd;
function ei() {
  if (Dd) return vo;
  Dd = 1;
  var e = I1();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return vo = t, vo;
}
var yo, qd;
function $1() {
  if (qd) return yo;
  qd = 1;
  var e = ei();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return yo = t, yo;
}
var go, kd;
function R1() {
  if (kd) return go;
  kd = 1;
  var e = ei();
  function t(r) {
    return e(this, r).get(r);
  }
  return go = t, go;
}
var mo, Ld;
function N1() {
  if (Ld) return mo;
  Ld = 1;
  var e = ei();
  function t(r) {
    return e(this, r).has(r);
  }
  return mo = t, mo;
}
var bo, Bd;
function D1() {
  if (Bd) return bo;
  Bd = 1;
  var e = ei();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return bo = t, bo;
}
var xo, Fd;
function tf() {
  if (Fd) return xo;
  Fd = 1;
  var e = C1(), t = $1(), r = R1(), n = N1(), a = D1();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, xo = i, xo;
}
var wo, Ud;
function Km() {
  if (Ud) return wo;
  Ud = 1;
  var e = tf(), t = "Expected a function";
  function r(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var i = function() {
      var o = arguments, u = a ? a.apply(this, o) : o[0], s = i.cache;
      if (s.has(u))
        return s.get(u);
      var c = n.apply(this, o);
      return i.cache = s.set(u, c) || s, c;
    };
    return i.cache = new (r.Cache || e)(), i;
  }
  return r.Cache = e, wo = r, wo;
}
var _o, Wd;
function q1() {
  if (Wd) return _o;
  Wd = 1;
  var e = Km(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return _o = r, _o;
}
var Oo, Hd;
function k1() {
  if (Hd) return Oo;
  Hd = 1;
  var e = q1(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, u, s, c) {
      i.push(s ? c.replace(r, "$1") : u || o);
    }), i;
  });
  return Oo = n, Oo;
}
var So, zd;
function rf() {
  if (zd) return So;
  zd = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return So = e, So;
}
var Ao, Gd;
function L1() {
  if (Gd) return Ao;
  Gd = 1;
  var e = $n(), t = rf(), r = Ne(), n = Tr(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return i ? i.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return Ao = o, Ao;
}
var Po, Kd;
function Vm() {
  if (Kd) return Po;
  Kd = 1;
  var e = L1();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Po = t, Po;
}
var To, Vd;
function Xm() {
  if (Vd) return To;
  Vd = 1;
  var e = Ne(), t = Zl(), r = k1(), n = Vm();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return To = a, To;
}
var Eo, Xd;
function ti() {
  if (Xd) return Eo;
  Xd = 1;
  var e = Tr();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Eo = t, Eo;
}
var Mo, Yd;
function nf() {
  if (Yd) return Mo;
  Yd = 1;
  var e = Xm(), t = ti();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return Mo = r, Mo;
}
var jo, Zd;
function Ym() {
  if (Zd) return jo;
  Zd = 1;
  var e = nf();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return jo = t, jo;
}
var B1 = Ym();
const nt = /* @__PURE__ */ ie(B1);
var Co, Jd;
function F1() {
  if (Jd) return Co;
  Jd = 1;
  function e(t) {
    return t == null;
  }
  return Co = e, Co;
}
var U1 = F1();
const Y = /* @__PURE__ */ ie(U1);
var Io, Qd;
function W1() {
  if (Qd) return Io;
  Qd = 1;
  var e = mt(), t = Ne(), r = bt(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return Io = a, Io;
}
var H1 = W1();
const Gt = /* @__PURE__ */ ie(H1);
var z1 = Jl();
const J = /* @__PURE__ */ ie(z1);
var G1 = Tt();
const Er = /* @__PURE__ */ ie(G1);
var $o = { exports: {} }, ee = {};
var eh;
function K1() {
  if (eh) return ee;
  eh = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), g;
  g = /* @__PURE__ */ Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var m = h.$$typeof;
      switch (m) {
        case e:
          switch (h = h.type, h) {
            case r:
            case a:
            case n:
            case c:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case o:
                case s:
                case d:
                case l:
                case i:
                  return h;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ee.ContextConsumer = o, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = s, ee.Fragment = r, ee.Lazy = d, ee.Memo = l, ee.Portal = t, ee.Profiler = a, ee.StrictMode = n, ee.Suspense = c, ee.SuspenseList = f, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(h) {
    return v(h) === o;
  }, ee.isContextProvider = function(h) {
    return v(h) === i;
  }, ee.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ee.isForwardRef = function(h) {
    return v(h) === s;
  }, ee.isFragment = function(h) {
    return v(h) === r;
  }, ee.isLazy = function(h) {
    return v(h) === d;
  }, ee.isMemo = function(h) {
    return v(h) === l;
  }, ee.isPortal = function(h) {
    return v(h) === t;
  }, ee.isProfiler = function(h) {
    return v(h) === a;
  }, ee.isStrictMode = function(h) {
    return v(h) === n;
  }, ee.isSuspense = function(h) {
    return v(h) === c;
  }, ee.isSuspenseList = function(h) {
    return v(h) === f;
  }, ee.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === a || h === n || h === c || h === f || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === l || h.$$typeof === i || h.$$typeof === o || h.$$typeof === s || h.$$typeof === g || h.getModuleId !== void 0);
  }, ee.typeOf = v, ee;
}
var th;
function V1() {
  return th || (th = 1, $o.exports = K1()), $o.exports;
}
var X1 = V1(), Ro, rh;
function Zm() {
  if (rh) return Ro;
  rh = 1;
  var e = mt(), t = bt(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return Ro = n, Ro;
}
var No, nh;
function Y1() {
  if (nh) return No;
  nh = 1;
  var e = Zm();
  function t(r) {
    return e(r) && r != +r;
  }
  return No = t, No;
}
var Z1 = Y1();
const Rn = /* @__PURE__ */ ie(Z1);
var J1 = Zm();
const Q1 = /* @__PURE__ */ ie(J1);
var tt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, kt = function(t) {
  return Gt(t) && t.indexOf("%") === t.length - 1;
}, B = function(t) {
  return Q1(t) && !Rn(t);
}, ew = function(t) {
  return Y(t);
}, we = function(t) {
  return B(t) || Gt(t);
}, tw = 0, ri = function(t) {
  var r = ++tw;
  return "".concat(t || "").concat(r);
}, Xe = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!B(t) && !Gt(t))
    return n;
  var i;
  if (kt(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return Rn(i) && (i = n), a && i > r && (i = r), i;
}, Ot = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, rw = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, tr = function(t, r) {
  return B(t) && B(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function ra(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : nt(n, t)) === r;
  });
}
var nw = function(t, r) {
  return B(t) && B(r) ? t - r : Gt(t) && Gt(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Ic(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function $c(e) {
  "@babel/helpers - typeof";
  return $c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $c(e);
}
var aw = ["viewBox", "children"], iw = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], ah = ["points", "pathLength"], Do = {
  svg: aw,
  polygon: ah,
  polyline: ah
}, af = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], na = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Ye(t) && (n = t.props), !Er(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    af.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, ow = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Rc = function(t, r, n) {
  if (!Er(t) || $c(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    af.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = ow(o, r, n));
  }), a;
}, uw = ["children"], sw = ["children"];
function ih(e, t) {
  if (e == null) return {};
  var r = cw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Nc(e) {
  "@babel/helpers - typeof";
  return Nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nc(e);
}
var oh = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, dt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, uh = null, qo = null, of = function e(t) {
  if (t === uh && Array.isArray(qo))
    return qo;
  var r = [];
  return Ft.forEach(t, function(n) {
    Y(n) || (X1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), qo = r, uh = t, r;
};
function Ze(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return dt(a);
  }) : n = [dt(t)], of(e).forEach(function(a) {
    var i = nt(a, "type.displayName") || nt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function ke(e, t) {
  var r = Ze(e, t);
  return r && r[0];
}
var sh = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!B(n) || n <= 0 || !B(a) || a <= 0);
}, lw = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], fw = function(t) {
  return t && t.type && Gt(t.type) && lw.indexOf(t.type) >= 0;
}, O2 = function(t) {
  return t && Nc(t) === "object" && "clipDot" in t;
}, dw = function(t, r, n, a) {
  var i, o = (i = Do?.[a]) !== null && i !== void 0 ? i : [];
  return r.startsWith("data-") || !J(t) && (a && o.includes(r) || iw.includes(r)) || n && af.includes(r);
}, ce = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Ye(t) && (a = t.props), !Er(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var u;
    dw((u = a) === null || u === void 0 ? void 0 : u[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Dc = function e(t, r) {
  if (t === r)
    return !0;
  var n = Ft.count(t);
  if (n !== Ft.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return ch(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!ch(i, o))
      return !1;
  }
  return !0;
}, ch = function(t, r) {
  if (Y(t) && Y(r))
    return !0;
  if (!Y(t) && !Y(r)) {
    var n = t.props || {}, a = n.children, i = ih(n, uw), o = r.props || {}, u = o.children, s = ih(o, sw);
    return a && u ? Ic(i, s) && Dc(a, u) : !a && !u ? Ic(i, s) : !1;
  }
  return !1;
}, lh = function(t, r) {
  var n = [], a = {};
  return of(t).forEach(function(i, o) {
    if (fw(i))
      n.push(i);
    else if (i) {
      var u = dt(i.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !a[u])) {
        var l = c(i, u, o);
        n.push(l), a[u] = !0;
      }
    }
  }), n;
}, hw = function(t) {
  var r = t && t.type;
  return r && oh[r] ? oh[r] : null;
}, pw = function(t, r) {
  return of(r).indexOf(t);
}, vw = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function qc() {
  return qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qc.apply(this, arguments);
}
function yw(e, t) {
  if (e == null) return {};
  var r = gw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function kc(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, u = e.title, s = e.desc, c = yw(e, vw), f = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = se("recharts-surface", i);
  return /* @__PURE__ */ E.createElement("svg", qc({}, ce(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, u), /* @__PURE__ */ E.createElement("desc", null, s), t);
}
var mw = ["children", "className"];
function Lc() {
  return Lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lc.apply(this, arguments);
}
function bw(e, t) {
  if (e == null) return {};
  var r = xw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Te = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = bw(e, mw), i = se("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", Lc({
    className: i
  }, ce(a, !0), {
    ref: t
  }), r);
}), Ut = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
}, ko, fh;
function ww() {
  if (fh) return ko;
  fh = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return ko = e, ko;
}
var Lo, dh;
function _w() {
  if (dh) return Lo;
  dh = 1;
  var e = ww();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return Lo = t, Lo;
}
var Bo, hh;
function Jm() {
  if (hh) return Bo;
  hh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + a + i + "]");
  function s(c) {
    return u.test(c);
  }
  return Bo = s, Bo;
}
var Fo, ph;
function Ow() {
  if (ph) return Fo;
  ph = 1;
  function e(t) {
    return t.split("");
  }
  return Fo = e, Fo;
}
var Uo, vh;
function Sw() {
  if (vh) return Uo;
  vh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + a + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + u + "|" + s + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", g = c + "?", v = "[" + i + "]?", h = "(?:" + p + "(?:" + [f, l, d].join("|") + ")" + v + g + ")*", m = v + g + h, x = "(?:" + [f + u + "?", u, l, d, o].join("|") + ")", w = RegExp(s + "(?=" + s + ")|" + x + m, "g");
  function _(y) {
    return y.match(w) || [];
  }
  return Uo = _, Uo;
}
var Wo, yh;
function Aw() {
  if (yh) return Wo;
  yh = 1;
  var e = Ow(), t = Jm(), r = Sw();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Wo = n, Wo;
}
var Ho, gh;
function Pw() {
  if (gh) return Ho;
  gh = 1;
  var e = _w(), t = Jm(), r = Aw(), n = Vm();
  function a(i) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, s = u ? u[0] : o.charAt(0), c = u ? e(u, 1).join("") : o.slice(1);
      return s[i]() + c;
    };
  }
  return Ho = a, Ho;
}
var zo, mh;
function Tw() {
  if (mh) return zo;
  mh = 1;
  var e = Pw(), t = e("toUpperCase");
  return zo = t, zo;
}
var Ew = Tw();
const ni = /* @__PURE__ */ ie(Ew);
function ae(e) {
  return function() {
    return e;
  };
}
const Qm = Math.cos, aa = Math.sin, Qe = Math.sqrt, ia = Math.PI, ai = 2 * ia, Bc = Math.PI, Fc = 2 * Bc, Dt = 1e-6, Mw = Fc - Dt;
function eb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function jw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return eb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class Cw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? eb : jw(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, a) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, n, a, i, o) {
    this._append`C${+t},${+r},${+n},${+a},${this._x1 = +i},${this._y1 = +o}`;
  }
  arcTo(t, r, n, a, i) {
    if (t = +t, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let o = this._x1, u = this._y1, s = n - t, c = a - r, f = o - t, l = u - r, d = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Dt) if (!(Math.abs(l * s - c * f) > Dt) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, g = a - u, v = s * s + c * c, h = p * p + g * g, m = Math.sqrt(v), x = Math.sqrt(d), w = i * Math.tan((Bc - Math.acos((v + d - h) / (2 * m * x))) / 2), _ = w / x, y = w / m;
      Math.abs(_ - 1) > Dt && this._append`L${t + _ * f},${r + _ * l}`, this._append`A${i},${i},0,0,${+(l * p > f * g)},${this._x1 = t + y * s},${this._y1 = r + y * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(a), s = n * Math.sin(a), c = t + u, f = r + s, l = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Dt || Math.abs(this._y1 - f) > Dt) && this._append`L${c},${f}`, n && (d < 0 && (d = d % Fc + Fc), d > Mw ? this._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : d > Dt && this._append`A${n},${n},0,${+(d >= Bc)},${l},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function uf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new Cw(t);
}
function sf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function tb(e) {
  this._context = e;
}
tb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function ii(e) {
  return new tb(e);
}
function rb(e) {
  return e[0];
}
function nb(e) {
  return e[1];
}
function ab(e, t) {
  var r = ae(!0), n = null, a = ii, i = null, o = uf(u);
  e = typeof e == "function" ? e : e === void 0 ? rb : ae(e), t = typeof t == "function" ? t : t === void 0 ? nb : ae(t);
  function u(s) {
    var c, f = (s = sf(s)).length, l, d = !1, p;
    for (n == null && (i = a(p = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = s[c], c, s)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(l, c, s), +t(l, c, s));
    if (p) return i = null, p + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ae(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ae(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : ae(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (a = s, n != null && (i = a(n)), u) : a;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = i = null : i = a(n = s), u) : n;
  }, u;
}
function Wn(e, t, r) {
  var n = null, a = ae(!0), i = null, o = ii, u = null, s = uf(c);
  e = typeof e == "function" ? e : e === void 0 ? rb : ae(+e), t = typeof t == "function" ? t : ae(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? nb : ae(+r);
  function c(l) {
    var d, p, g, v = (l = sf(l)).length, h, m = !1, x, w = new Array(v), _ = new Array(v);
    for (i == null && (u = o(x = s())), d = 0; d <= v; ++d) {
      if (!(d < v && a(h = l[d], d, l)) === m)
        if (m = !m)
          p = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), g = d - 1; g >= p; --g)
            u.point(w[g], _[g]);
          u.lineEnd(), u.areaEnd();
        }
      m && (w[d] = +e(h, d, l), _[d] = +t(h, d, l), u.point(n ? +n(h, d, l) : w[d], r ? +r(h, d, l) : _[d]));
    }
    if (x) return u = null, x + "" || null;
  }
  function f() {
    return ab().defined(a).curve(o).context(i);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ae(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ae(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : ae(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ae(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ae(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : ae(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : ae(!!l), c) : a;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, i != null && (u = o(i)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? i = u = null : u = o(i = l), c) : i;
  }, c;
}
class ib {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Iw(e) {
  return new ib(e, !0);
}
function $w(e) {
  return new ib(e, !1);
}
const cf = {
  draw(e, t) {
    const r = Qe(t / ia);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ai);
  }
}, Rw = {
  draw(e, t) {
    const r = Qe(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, ob = Qe(1 / 3), Nw = ob * 2, Dw = {
  draw(e, t) {
    const r = Qe(t / Nw), n = r * ob;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, qw = {
  draw(e, t) {
    const r = Qe(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, kw = 0.8908130915292852, ub = aa(ia / 10) / aa(7 * ia / 10), Lw = aa(ai / 10) * ub, Bw = -Qm(ai / 10) * ub, Fw = {
  draw(e, t) {
    const r = Qe(t * kw), n = Lw * r, a = Bw * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = ai * i / 5, u = Qm(o), s = aa(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * a, s * n + u * a);
    }
    e.closePath();
  }
}, Go = Qe(3), Uw = {
  draw(e, t) {
    const r = -Qe(t / (Go * 3));
    e.moveTo(0, r * 2), e.lineTo(-Go * r, -r), e.lineTo(Go * r, -r), e.closePath();
  }
}, Be = -0.5, Fe = Qe(3) / 2, Uc = 1 / Qe(12), Ww = (Uc / 2 + 1) * 3, Hw = {
  draw(e, t) {
    const r = Qe(t / Ww), n = r / 2, a = r * Uc, i = n, o = r * Uc + r, u = -i, s = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(u, s), e.lineTo(Be * n - Fe * a, Fe * n + Be * a), e.lineTo(Be * i - Fe * o, Fe * i + Be * o), e.lineTo(Be * u - Fe * s, Fe * u + Be * s), e.lineTo(Be * n + Fe * a, Be * a - Fe * n), e.lineTo(Be * i + Fe * o, Be * o - Fe * i), e.lineTo(Be * u + Fe * s, Be * s - Fe * u), e.closePath();
  }
};
function zw(e, t) {
  let r = null, n = uf(a);
  e = typeof e == "function" ? e : ae(e || cf), t = typeof t == "function" ? t : ae(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : ae(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : ae(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function oa() {
}
function ua(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function sb(e) {
  this._context = e;
}
sb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ua(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        ua(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Gw(e) {
  return new sb(e);
}
function cb(e) {
  this._context = e;
}
cb.prototype = {
  areaStart: oa,
  areaEnd: oa,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ua(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Kw(e) {
  return new cb(e);
}
function lb(e) {
  this._context = e;
}
lb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ua(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Vw(e) {
  return new lb(e);
}
function fb(e) {
  this._context = e;
}
fb.prototype = {
  areaStart: oa,
  areaEnd: oa,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Xw(e) {
  return new fb(e);
}
function bh(e) {
  return e < 0 ? -1 : 1;
}
function xh(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), u = (i * a + o * n) / (n + a);
  return (bh(i) + bh(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function wh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ko(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, u = (i - n) / 3;
  e._context.bezierCurveTo(n + u, a + u * t, i - u, o - u * r, i, o);
}
function sa(e) {
  this._context = e;
}
sa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ko(this, this._t0, wh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Ko(this, wh(this, r = xh(this, e, t)), r);
          break;
        default:
          Ko(this, this._t0, r = xh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function db(e) {
  this._context = new hb(e);
}
(db.prototype = Object.create(sa.prototype)).point = function(e, t) {
  sa.prototype.point.call(this, t, e);
};
function hb(e) {
  this._context = e;
}
hb.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  }
};
function Yw(e) {
  return new sa(e);
}
function Zw(e) {
  return new db(e);
}
function pb(e) {
  this._context = e;
}
pb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = _h(e), a = _h(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function _h(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function Jw(e) {
  return new pb(e);
}
function oi(e, t) {
  this._context = e, this._t = t;
}
oi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Qw(e) {
  return new oi(e, 0.5);
}
function e_(e) {
  return new oi(e, 0);
}
function t_(e) {
  return new oi(e, 1);
}
function cr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, u = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < u; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Wc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function r_(e, t) {
  return e[t];
}
function n_(e) {
  const t = [];
  return t.key = e, t;
}
function a_() {
  var e = ae([]), t = Wc, r = cr, n = r_;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), n_), u, s = o.length, c = -1, f;
    for (const l of i)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, i)]).data = l;
    for (u = 0, f = sf(t(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : ae(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : ae(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Wc : typeof i == "function" ? i : ae(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? cr, a) : r;
  }, a;
}
function i_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    cr(e, t);
  }
}
function o_(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, u = 0; o < a; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    cr(e, t);
  }
}
function u_(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, d = f[n - 1][1] || 0, p = (l - d) / 2, g = 0; g < u; ++g) {
          var v = e[t[g]], h = v[n][1] || 0, m = v[n - 1][1] || 0;
          p += h - m;
        }
        s += l, c += p * l;
      }
      a[n - 1][1] += a[n - 1][0] = r, s && (r -= c / s);
    }
    a[n - 1][1] += a[n - 1][0] = r, cr(e, t);
  }
}
function Yr(e) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
var s_ = ["type", "size", "sizeType"];
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hc.apply(this, arguments);
}
function Oh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(r), !0).forEach(function(n) {
      c_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c_(e, t, r) {
  return t = l_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l_(e) {
  var t = f_(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function f_(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d_(e, t) {
  if (e == null) return {};
  var r = h_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var vb = {
  symbolCircle: cf,
  symbolCross: Rw,
  symbolDiamond: Dw,
  symbolSquare: qw,
  symbolStar: Fw,
  symbolTriangle: Uw,
  symbolWye: Hw
}, p_ = Math.PI / 180, v_ = function(t) {
  var r = "symbol".concat(ni(t));
  return vb[r] || cf;
}, y_ = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var a = 18 * p_;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, g_ = function(t, r) {
  vb["symbol".concat(ni(t))] = r;
}, lf = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, u = o === void 0 ? "area" : o, s = d_(t, s_), c = Sh(Sh({}, s), {}, {
    type: n,
    size: i,
    sizeType: u
  }), f = function() {
    var h = v_(n), m = zw().type(h).size(y_(i, u, n));
    return m();
  }, l = c.className, d = c.cx, p = c.cy, g = ce(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ E.createElement("path", Hc({}, g, {
    className: se("recharts-symbols", l),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: f()
  })) : null;
};
lf.registerSymbol = g_;
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
function zc() {
  return zc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zc.apply(this, arguments);
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function m_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      Zr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gb(n.key), n);
  }
}
function w_(e, t, r) {
  return t && x_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function __(e, t, r) {
  return t = ca(t), O_(e, yb() ? Reflect.construct(t, r || [], ca(e).constructor) : t.apply(e, r));
}
function O_(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S_(e);
}
function S_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yb = function() {
    return !!e;
  })();
}
function ca(e) {
  return ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ca(e);
}
function A_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gc(e, t);
}
function Gc(e, t) {
  return Gc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gc(e, t);
}
function Zr(e, t, r) {
  return t = gb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gb(e) {
  var t = P_(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function P_(e, t) {
  if (lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ue = 32, ff = /* @__PURE__ */ (function(e) {
  function t() {
    return b_(this, t), __(this, t, arguments);
  }
  return A_(t, e), w_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Ue / 2, o = Ue / 6, u = Ue / 3, s = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Ue,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(i, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(i, `
            H`).concat(Ue, "M").concat(2 * u, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var c = m_({}, n);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(lf, {
          fill: s,
          cx: i,
          cy: i,
          size: Ue,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, u = a.layout, s = a.formatter, c = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Ue,
        height: Ue
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, g) {
        var v = p.formatter || s, h = se(Zr(Zr({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var m = J(p.value) ? null : p.value;
        Ut(
          !J(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = p.inactive ? c : p.color;
        return /* @__PURE__ */ E.createElement("li", zc({
          className: h,
          style: l,
          key: "legend-item-".concat(g)
        }, Rc(n.props, p, g)), /* @__PURE__ */ E.createElement(kc, {
          width: o,
          height: o,
          viewBox: f,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, v ? v(m, p, g) : m));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(Xt);
Zr(ff, "displayName", "Legend");
Zr(ff, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Vo, Ph;
function T_() {
  if (Ph) return Vo;
  Ph = 1;
  var e = Qa();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Vo = t, Vo;
}
var Xo, Th;
function E_() {
  if (Th) return Xo;
  Th = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Xo = e, Xo;
}
var Yo, Eh;
function M_() {
  if (Eh) return Yo;
  Eh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Yo = e, Yo;
}
var Zo, Mh;
function j_() {
  if (Mh) return Zo;
  Mh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Zo = e, Zo;
}
var Jo, jh;
function C_() {
  if (jh) return Jo;
  jh = 1;
  var e = Qa(), t = ef(), r = tf(), n = 200;
  function a(i, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1)
        return s.push([i, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(s);
    }
    return u.set(i, o), this.size = u.size, this;
  }
  return Jo = a, Jo;
}
var Qo, Ch;
function mb() {
  if (Ch) return Qo;
  Ch = 1;
  var e = Qa(), t = T_(), r = E_(), n = M_(), a = j_(), i = C_();
  function o(u) {
    var s = this.__data__ = new e(u);
    this.size = s.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, Qo = o, Qo;
}
var eu, Ih;
function I_() {
  if (Ih) return eu;
  Ih = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return eu = t, eu;
}
var tu, $h;
function $_() {
  if ($h) return tu;
  $h = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return tu = e, tu;
}
var ru, Rh;
function bb() {
  if (Rh) return ru;
  Rh = 1;
  var e = tf(), t = I_(), r = $_();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, ru = n, ru;
}
var nu, Nh;
function xb() {
  if (Nh) return nu;
  Nh = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return nu = e, nu;
}
var au, Dh;
function wb() {
  if (Dh) return au;
  Dh = 1;
  function e(t, r) {
    return t.has(r);
  }
  return au = e, au;
}
var iu, qh;
function _b() {
  if (qh) return iu;
  qh = 1;
  var e = bb(), t = xb(), r = wb(), n = 1, a = 2;
  function i(o, u, s, c, f, l) {
    var d = s & n, p = o.length, g = u.length;
    if (p != g && !(d && g > p))
      return !1;
    var v = l.get(o), h = l.get(u);
    if (v && h)
      return v == u && h == o;
    var m = -1, x = !0, w = s & a ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++m < p; ) {
      var _ = o[m], y = u[m];
      if (c)
        var b = d ? c(y, _, m, u, o, l) : c(_, y, m, o, u, l);
      if (b !== void 0) {
        if (b)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(u, function(O, S) {
          if (!r(w, S) && (_ === O || f(_, O, s, c, l)))
            return w.push(S);
        })) {
          x = !1;
          break;
        }
      } else if (!(_ === y || f(_, y, s, c, l))) {
        x = !1;
        break;
      }
    }
    return l.delete(o), l.delete(u), x;
  }
  return iu = i, iu;
}
var ou, kh;
function R_() {
  if (kh) return ou;
  kh = 1;
  var e = ut(), t = e.Uint8Array;
  return ou = t, ou;
}
var uu, Lh;
function N_() {
  if (Lh) return uu;
  Lh = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return uu = e, uu;
}
var su, Bh;
function df() {
  if (Bh) return su;
  Bh = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return su = e, su;
}
var cu, Fh;
function D_() {
  if (Fh) return cu;
  Fh = 1;
  var e = $n(), t = R_(), r = Ql(), n = _b(), a = N_(), i = df(), o = 1, u = 2, s = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", p = "[object RegExp]", g = "[object Set]", v = "[object String]", h = "[object Symbol]", m = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function y(b, O, S, A, C, T, P) {
    switch (S) {
      case x:
        if (b.byteLength != O.byteLength || b.byteOffset != O.byteOffset)
          return !1;
        b = b.buffer, O = O.buffer;
      case m:
        return !(b.byteLength != O.byteLength || !T(new t(b), new t(O)));
      case s:
      case c:
      case d:
        return r(+b, +O);
      case f:
        return b.name == O.name && b.message == O.message;
      case p:
      case v:
        return b == O + "";
      case l:
        var M = a;
      case g:
        var I = A & o;
        if (M || (M = i), b.size != O.size && !I)
          return !1;
        var j = P.get(b);
        if (j)
          return j == O;
        A |= u, P.set(b, O);
        var R = n(M(b), M(O), A, C, T, P);
        return P.delete(b), R;
      case h:
        if (_)
          return _.call(b) == _.call(O);
    }
    return !1;
  }
  return cu = y, cu;
}
var lu, Uh;
function Ob() {
  if (Uh) return lu;
  Uh = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return lu = e, lu;
}
var fu, Wh;
function q_() {
  if (Wh) return fu;
  Wh = 1;
  var e = Ob(), t = Ne();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return fu = r, fu;
}
var du, Hh;
function k_() {
  if (Hh) return du;
  Hh = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var u = t[n];
      r(u, n, t) && (o[i++] = u);
    }
    return o;
  }
  return du = e, du;
}
var hu, zh;
function L_() {
  if (zh) return hu;
  zh = 1;
  function e() {
    return [];
  }
  return hu = e, hu;
}
var pu, Gh;
function B_() {
  if (Gh) return pu;
  Gh = 1;
  var e = k_(), t = L_(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(u) {
      return n.call(o, u);
    }));
  } : t;
  return pu = i, pu;
}
var vu, Kh;
function F_() {
  if (Kh) return vu;
  Kh = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return vu = e, vu;
}
var yu, Vh;
function U_() {
  if (Vh) return yu;
  Vh = 1;
  var e = mt(), t = bt(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return yu = n, yu;
}
var gu, Xh;
function hf() {
  if (Xh) return gu;
  Xh = 1;
  var e = U_(), t = bt(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return gu = i, gu;
}
var Ur = { exports: {} }, mu, Yh;
function W_() {
  if (Yh) return mu;
  Yh = 1;
  function e() {
    return !1;
  }
  return mu = e, mu;
}
Ur.exports;
var Zh;
function Sb() {
  return Zh || (Zh = 1, (function(e, t) {
    var r = ut(), n = W_(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
    e.exports = c;
  })(Ur, Ur.exports)), Ur.exports;
}
var bu, Jh;
function pf() {
  if (Jh) return bu;
  Jh = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return bu = r, bu;
}
var xu, Qh;
function vf() {
  if (Qh) return xu;
  Qh = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return xu = t, xu;
}
var wu, ep;
function H_() {
  if (ep) return wu;
  ep = 1;
  var e = mt(), t = vf(), r = bt(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", u = "[object Error]", s = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", p = "[object Set]", g = "[object String]", v = "[object WeakMap]", h = "[object ArrayBuffer]", m = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", y = "[object Int16Array]", b = "[object Int32Array]", O = "[object Uint8Array]", S = "[object Uint8ClampedArray]", A = "[object Uint16Array]", C = "[object Uint32Array]", T = {};
  T[x] = T[w] = T[_] = T[y] = T[b] = T[O] = T[S] = T[A] = T[C] = !0, T[n] = T[a] = T[h] = T[i] = T[m] = T[o] = T[u] = T[s] = T[c] = T[f] = T[l] = T[d] = T[p] = T[g] = T[v] = !1;
  function P(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return wu = P, wu;
}
var _u, tp;
function Ab() {
  if (tp) return _u;
  tp = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return _u = e, _u;
}
var Wr = { exports: {} };
Wr.exports;
var rp;
function z_() {
  return rp || (rp = 1, (function(e, t) {
    var r = zm(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, u = (function() {
      try {
        var s = a && a.require && a.require("util").types;
        return s || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Wr, Wr.exports)), Wr.exports;
}
var Ou, np;
function Pb() {
  if (np) return Ou;
  np = 1;
  var e = H_(), t = Ab(), r = z_(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Ou = a, Ou;
}
var Su, ap;
function G_() {
  if (ap) return Su;
  ap = 1;
  var e = F_(), t = hf(), r = Ne(), n = Sb(), a = pf(), i = Pb(), o = Object.prototype, u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c), d = !l && t(c), p = !l && !d && n(c), g = !l && !d && !p && i(c), v = l || d || p || g, h = v ? e(c.length, String) : [], m = h.length;
    for (var x in c)
      (f || u.call(c, x)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      g && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      a(x, m))) && h.push(x);
    return h;
  }
  return Su = s, Su;
}
var Au, ip;
function K_() {
  if (ip) return Au;
  ip = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Au = t, Au;
}
var Pu, op;
function Tb() {
  if (op) return Pu;
  op = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Pu = e, Pu;
}
var Tu, up;
function V_() {
  if (up) return Tu;
  up = 1;
  var e = Tb(), t = e(Object.keys, Object);
  return Tu = t, Tu;
}
var Eu, sp;
function X_() {
  if (sp) return Eu;
  sp = 1;
  var e = K_(), t = V_(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && o.push(u);
    return o;
  }
  return Eu = a, Eu;
}
var Mu, cp;
function Nn() {
  if (cp) return Mu;
  cp = 1;
  var e = Jl(), t = vf();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Mu = r, Mu;
}
var ju, lp;
function ui() {
  if (lp) return ju;
  lp = 1;
  var e = G_(), t = X_(), r = Nn();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return ju = n, ju;
}
var Cu, fp;
function Y_() {
  if (fp) return Cu;
  fp = 1;
  var e = q_(), t = B_(), r = ui();
  function n(a) {
    return e(a, r, t);
  }
  return Cu = n, Cu;
}
var Iu, dp;
function Z_() {
  if (dp) return Iu;
  dp = 1;
  var e = Y_(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, u, s, c, f) {
    var l = u & t, d = e(i), p = d.length, g = e(o), v = g.length;
    if (p != v && !l)
      return !1;
    for (var h = p; h--; ) {
      var m = d[h];
      if (!(l ? m in o : n.call(o, m)))
        return !1;
    }
    var x = f.get(i), w = f.get(o);
    if (x && w)
      return x == o && w == i;
    var _ = !0;
    f.set(i, o), f.set(o, i);
    for (var y = l; ++h < p; ) {
      m = d[h];
      var b = i[m], O = o[m];
      if (s)
        var S = l ? s(O, b, m, o, i, f) : s(b, O, m, i, o, f);
      if (!(S === void 0 ? b === O || c(b, O, u, s, f) : S)) {
        _ = !1;
        break;
      }
      y || (y = m == "constructor");
    }
    if (_ && !y) {
      var A = i.constructor, C = o.constructor;
      A != C && "constructor" in i && "constructor" in o && !(typeof A == "function" && A instanceof A && typeof C == "function" && C instanceof C) && (_ = !1);
    }
    return f.delete(i), f.delete(o), _;
  }
  return Iu = a, Iu;
}
var $u, hp;
function J_() {
  if (hp) return $u;
  hp = 1;
  var e = Yt(), t = ut(), r = e(t, "DataView");
  return $u = r, $u;
}
var Ru, pp;
function Q_() {
  if (pp) return Ru;
  pp = 1;
  var e = Yt(), t = ut(), r = e(t, "Promise");
  return Ru = r, Ru;
}
var Nu, vp;
function Eb() {
  if (vp) return Nu;
  vp = 1;
  var e = Yt(), t = ut(), r = e(t, "Set");
  return Nu = r, Nu;
}
var Du, yp;
function eO() {
  if (yp) return Du;
  yp = 1;
  var e = Yt(), t = ut(), r = e(t, "WeakMap");
  return Du = r, Du;
}
var qu, gp;
function tO() {
  if (gp) return qu;
  gp = 1;
  var e = J_(), t = ef(), r = Q_(), n = Eb(), a = eO(), i = mt(), o = Gm(), u = "[object Map]", s = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", p = o(e), g = o(t), v = o(r), h = o(n), m = o(a), x = i;
  return (e && x(new e(new ArrayBuffer(1))) != d || t && x(new t()) != u || r && x(r.resolve()) != c || n && x(new n()) != f || a && x(new a()) != l) && (x = function(w) {
    var _ = i(w), y = _ == s ? w.constructor : void 0, b = y ? o(y) : "";
    if (b)
      switch (b) {
        case p:
          return d;
        case g:
          return u;
        case v:
          return c;
        case h:
          return f;
        case m:
          return l;
      }
    return _;
  }), qu = x, qu;
}
var ku, mp;
function rO() {
  if (mp) return ku;
  mp = 1;
  var e = mb(), t = _b(), r = D_(), n = Z_(), a = tO(), i = Ne(), o = Sb(), u = Pb(), s = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function g(v, h, m, x, w, _) {
    var y = i(v), b = i(h), O = y ? f : a(v), S = b ? f : a(h);
    O = O == c ? l : O, S = S == c ? l : S;
    var A = O == l, C = S == l, T = O == S;
    if (T && o(v)) {
      if (!o(h))
        return !1;
      y = !0, A = !1;
    }
    if (T && !A)
      return _ || (_ = new e()), y || u(v) ? t(v, h, m, x, w, _) : r(v, h, O, m, x, w, _);
    if (!(m & s)) {
      var P = A && p.call(v, "__wrapped__"), M = C && p.call(h, "__wrapped__");
      if (P || M) {
        var I = P ? v.value() : v, j = M ? h.value() : h;
        return _ || (_ = new e()), w(I, j, m, x, _);
      }
    }
    return T ? (_ || (_ = new e()), n(v, h, m, x, w, _)) : !1;
  }
  return ku = g, ku;
}
var Lu, bp;
function yf() {
  if (bp) return Lu;
  bp = 1;
  var e = rO(), t = bt();
  function r(n, a, i, o, u) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, u);
  }
  return Lu = r, Lu;
}
var Bu, xp;
function nO() {
  if (xp) return Bu;
  xp = 1;
  var e = mb(), t = yf(), r = 1, n = 2;
  function a(i, o, u, s) {
    var c = u.length, f = c, l = !s;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var d = u[c];
      if (l && d[2] ? d[1] !== i[d[0]] : !(d[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      d = u[c];
      var p = d[0], g = i[p], v = d[1];
      if (l && d[2]) {
        if (g === void 0 && !(p in i))
          return !1;
      } else {
        var h = new e();
        if (s)
          var m = s(g, v, p, i, o, h);
        if (!(m === void 0 ? t(v, g, r | n, s, h) : m))
          return !1;
      }
    }
    return !0;
  }
  return Bu = a, Bu;
}
var Fu, wp;
function Mb() {
  if (wp) return Fu;
  wp = 1;
  var e = Tt();
  function t(r) {
    return r === r && !e(r);
  }
  return Fu = t, Fu;
}
var Uu, _p;
function aO() {
  if (_p) return Uu;
  _p = 1;
  var e = Mb(), t = ui();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], u = n[o];
      a[i] = [o, u, e(u)];
    }
    return a;
  }
  return Uu = r, Uu;
}
var Wu, Op;
function jb() {
  if (Op) return Wu;
  Op = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Wu = e, Wu;
}
var Hu, Sp;
function iO() {
  if (Sp) return Hu;
  Sp = 1;
  var e = nO(), t = aO(), r = jb();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Hu = n, Hu;
}
var zu, Ap;
function oO() {
  if (Ap) return zu;
  Ap = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return zu = e, zu;
}
var Gu, Pp;
function uO() {
  if (Pp) return Gu;
  Pp = 1;
  var e = Xm(), t = hf(), r = Ne(), n = pf(), a = vf(), i = ti();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, d = !1; ++f < l; ) {
      var p = i(s[f]);
      if (!(d = u != null && c(u, p)))
        break;
      u = u[p];
    }
    return d || ++f != l ? d : (l = u == null ? 0 : u.length, !!l && a(l) && n(p, l) && (r(u) || t(u)));
  }
  return Gu = o, Gu;
}
var Ku, Tp;
function sO() {
  if (Tp) return Ku;
  Tp = 1;
  var e = oO(), t = uO();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Ku = r, Ku;
}
var Vu, Ep;
function cO() {
  if (Ep) return Vu;
  Ep = 1;
  var e = yf(), t = Ym(), r = sO(), n = Zl(), a = Mb(), i = jb(), o = ti(), u = 1, s = 2;
  function c(f, l) {
    return n(f) && a(l) ? i(o(f), l) : function(d) {
      var p = t(d, f);
      return p === void 0 && p === l ? r(d, f) : e(l, p, u | s);
    };
  }
  return Vu = c, Vu;
}
var Xu, Mp;
function Mr() {
  if (Mp) return Xu;
  Mp = 1;
  function e(t) {
    return t;
  }
  return Xu = e, Xu;
}
var Yu, jp;
function lO() {
  if (jp) return Yu;
  jp = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Yu = e, Yu;
}
var Zu, Cp;
function fO() {
  if (Cp) return Zu;
  Cp = 1;
  var e = nf();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Zu = t, Zu;
}
var Ju, Ip;
function dO() {
  if (Ip) return Ju;
  Ip = 1;
  var e = lO(), t = fO(), r = Zl(), n = ti();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return Ju = a, Ju;
}
var Qu, $p;
function Et() {
  if ($p) return Qu;
  $p = 1;
  var e = iO(), t = cO(), r = Mr(), n = Ne(), a = dO();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return Qu = i, Qu;
}
var es, Rp;
function Cb() {
  if (Rp) return es;
  Rp = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return es = e, es;
}
var ts, Np;
function hO() {
  if (Np) return ts;
  Np = 1;
  function e(t) {
    return t !== t;
  }
  return ts = e, ts;
}
var rs, Dp;
function pO() {
  if (Dp) return rs;
  Dp = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return rs = e, rs;
}
var ns, qp;
function vO() {
  if (qp) return ns;
  qp = 1;
  var e = Cb(), t = hO(), r = pO();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return ns = n, ns;
}
var as, kp;
function yO() {
  if (kp) return as;
  kp = 1;
  var e = vO();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return as = t, as;
}
var is, Lp;
function gO() {
  if (Lp) return is;
  Lp = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return is = e, is;
}
var os, Bp;
function mO() {
  if (Bp) return os;
  Bp = 1;
  function e() {
  }
  return os = e, os;
}
var us, Fp;
function bO() {
  if (Fp) return us;
  Fp = 1;
  var e = Eb(), t = mO(), r = df(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return us = a, us;
}
var ss, Up;
function xO() {
  if (Up) return ss;
  Up = 1;
  var e = bb(), t = yO(), r = gO(), n = wb(), a = bO(), i = df(), o = 200;
  function u(s, c, f) {
    var l = -1, d = t, p = s.length, g = !0, v = [], h = v;
    if (f)
      g = !1, d = r;
    else if (p >= o) {
      var m = c ? null : a(s);
      if (m)
        return i(m);
      g = !1, d = n, h = new e();
    } else
      h = c ? [] : v;
    e:
      for (; ++l < p; ) {
        var x = s[l], w = c ? c(x) : x;
        if (x = f || x !== 0 ? x : 0, g && w === w) {
          for (var _ = h.length; _--; )
            if (h[_] === w)
              continue e;
          c && h.push(w), v.push(x);
        } else d(h, w, f) || (h !== v && h.push(w), v.push(x));
      }
    return v;
  }
  return ss = u, ss;
}
var cs, Wp;
function wO() {
  if (Wp) return cs;
  Wp = 1;
  var e = Et(), t = xO();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return cs = r, cs;
}
var _O = wO();
const Hp = /* @__PURE__ */ ie(_O);
function Ib(e, t, r) {
  return t === !0 ? Hp(e, r) : J(t) ? Hp(e, t) : e;
}
function fr(e) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fr(e);
}
var OO = ["ref"];
function zp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zp(Object(r), !0).forEach(function(n) {
      si(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Rb(n.key), n);
  }
}
function AO(e, t, r) {
  return t && Gp(e.prototype, t), r && Gp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PO(e, t, r) {
  return t = la(t), TO(e, $b() ? Reflect.construct(t, r || [], la(e).constructor) : t.apply(e, r));
}
function TO(e, t) {
  if (t && (fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return EO(e);
}
function EO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $b() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($b = function() {
    return !!e;
  })();
}
function la(e) {
  return la = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, la(e);
}
function MO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kc(e, t);
}
function Kc(e, t) {
  return Kc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kc(e, t);
}
function si(e, t, r) {
  return t = Rb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rb(e) {
  var t = jO(e, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function jO(e, t) {
  if (fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function CO(e, t) {
  if (e == null) return {};
  var r = IO(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function $O(e) {
  return e.value;
}
function RO(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var r = CO(t, OO);
  return /* @__PURE__ */ E.createElement(ff, r);
}
var Kp = 1, or = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    SO(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = PO(this, t, [].concat(a)), si(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return MO(t, e), AO(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Kp || Math.abs(a.height - this.lastBoundingBox.height) > Kp) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? st({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, u = a.verticalAlign, s = a.margin, c = a.chartWidth, f = a.chartHeight, l, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var g = this.getBBoxSnapshot();
          d = {
            top: ((f || 0) - g.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return st(st({}, l), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, u = a.height, s = a.wrapperStyle, c = a.payloadUniqBy, f = a.payload, l = st(st({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, RO(i, st(st({}, this.props), {}, {
        payload: Ib(f, c, $O)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = st(st({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && B(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(Xt);
si(or, "displayName", "Legend");
si(or, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var ls, Vp;
function NO() {
  if (Vp) return ls;
  Vp = 1;
  var e = $n(), t = hf(), r = Ne(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return ls = a, ls;
}
var fs, Xp;
function Nb() {
  if (Xp) return fs;
  Xp = 1;
  var e = Ob(), t = NO();
  function r(n, a, i, o, u) {
    var s = -1, c = n.length;
    for (i || (i = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      a > 0 && i(f) ? a > 1 ? r(f, a - 1, i, o, u) : e(u, f) : o || (u[u.length] = f);
    }
    return u;
  }
  return fs = r, fs;
}
var ds, Yp;
function DO() {
  if (Yp) return ds;
  Yp = 1;
  function e(t) {
    return function(r, n, a) {
      for (var i = -1, o = Object(r), u = a(r), s = u.length; s--; ) {
        var c = u[t ? s : ++i];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return ds = e, ds;
}
var hs, Zp;
function qO() {
  if (Zp) return hs;
  Zp = 1;
  var e = DO(), t = e();
  return hs = t, hs;
}
var ps, Jp;
function Db() {
  if (Jp) return ps;
  Jp = 1;
  var e = qO(), t = ui();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return ps = r, ps;
}
var vs, Qp;
function kO() {
  if (Qp) return vs;
  Qp = 1;
  var e = Nn();
  function t(r, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return r(a, i);
      for (var o = a.length, u = n ? o : -1, s = Object(a); (n ? u-- : ++u < o) && i(s[u], u, s) !== !1; )
        ;
      return a;
    };
  }
  return vs = t, vs;
}
var ys, ev;
function gf() {
  if (ev) return ys;
  ev = 1;
  var e = Db(), t = kO(), r = t(e);
  return ys = r, ys;
}
var gs, tv;
function qb() {
  if (tv) return gs;
  tv = 1;
  var e = gf(), t = Nn();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, s, c) {
      o[++i] = a(u, s, c);
    }), o;
  }
  return gs = r, gs;
}
var ms, rv;
function LO() {
  if (rv) return ms;
  rv = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return ms = e, ms;
}
var bs, nv;
function BO() {
  if (nv) return bs;
  nv = 1;
  var e = Tr();
  function t(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, u = e(r), s = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !u && r > n || u && s && f && !c && !l || i && s && f || !a && f || !o)
        return 1;
      if (!i && !u && !l && r < n || l && a && o && !i && !u || c && a && o || !s && o || !f)
        return -1;
    }
    return 0;
  }
  return bs = t, bs;
}
var xs, av;
function FO() {
  if (av) return xs;
  av = 1;
  var e = BO();
  function t(r, n, a) {
    for (var i = -1, o = r.criteria, u = n.criteria, s = o.length, c = a.length; ++i < s; ) {
      var f = e(o[i], u[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = a[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return xs = t, xs;
}
var ws, iv;
function UO() {
  if (iv) return ws;
  iv = 1;
  var e = rf(), t = nf(), r = Et(), n = qb(), a = LO(), i = Ab(), o = FO(), u = Mr(), s = Ne();
  function c(f, l, d) {
    l.length ? l = e(l, function(v) {
      return s(v) ? function(h) {
        return t(h, v.length === 1 ? v[0] : v);
      } : v;
    }) : l = [u];
    var p = -1;
    l = e(l, i(r));
    var g = n(f, function(v, h, m) {
      var x = e(l, function(w) {
        return w(v);
      });
      return { criteria: x, index: ++p, value: v };
    });
    return a(g, function(v, h) {
      return o(v, h, d);
    });
  }
  return ws = c, ws;
}
var _s, ov;
function WO() {
  if (ov) return _s;
  ov = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return _s = e, _s;
}
var Os, uv;
function HO() {
  if (uv) return Os;
  uv = 1;
  var e = WO(), t = Math.max;
  function r(n, a, i) {
    return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, u = -1, s = t(o.length - a, 0), c = Array(s); ++u < s; )
        c[u] = o[a + u];
      u = -1;
      for (var f = Array(a + 1); ++u < a; )
        f[u] = o[u];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return Os = r, Os;
}
var Ss, sv;
function zO() {
  if (sv) return Ss;
  sv = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Ss = e, Ss;
}
var As, cv;
function kb() {
  if (cv) return As;
  cv = 1;
  var e = Yt(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return As = t, As;
}
var Ps, lv;
function GO() {
  if (lv) return Ps;
  lv = 1;
  var e = zO(), t = kb(), r = Mr(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return Ps = n, Ps;
}
var Ts, fv;
function KO() {
  if (fv) return Ts;
  fv = 1;
  var e = 800, t = 16, r = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var u = r(), s = t - (u - o);
      if (o = u, s > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return Ts = n, Ts;
}
var Es, dv;
function VO() {
  if (dv) return Es;
  dv = 1;
  var e = GO(), t = KO(), r = t(e);
  return Es = r, Es;
}
var Ms, hv;
function XO() {
  if (hv) return Ms;
  hv = 1;
  var e = Mr(), t = HO(), r = VO();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return Ms = n, Ms;
}
var js, pv;
function ci() {
  if (pv) return js;
  pv = 1;
  var e = Ql(), t = Nn(), r = pf(), n = Tt();
  function a(i, o, u) {
    if (!n(u))
      return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], i) : !1;
  }
  return js = a, js;
}
var Cs, vv;
function YO() {
  if (vv) return Cs;
  vv = 1;
  var e = Nb(), t = UO(), r = XO(), n = ci(), a = r(function(i, o) {
    if (i == null)
      return [];
    var u = o.length;
    return u > 1 && n(i, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return Cs = a, Cs;
}
var ZO = YO();
const mf = /* @__PURE__ */ ie(ZO);
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vc.apply(this, arguments);
}
function JO(e, t) {
  return rS(e) || tS(e, t) || eS(e, t) || QO();
}
function QO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eS(e, t) {
  if (e) {
    if (typeof e == "string") return yv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yv(e, t);
  }
}
function yv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function rS(e) {
  if (Array.isArray(e)) return e;
}
function gv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gv(Object(r), !0).forEach(function(n) {
      nS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nS(e, t, r) {
  return t = aS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aS(e) {
  var t = iS(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function iS(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oS(e) {
  return Array.isArray(e) && we(e[0]) && we(e[1]) ? e.join(" ~ ") : e;
}
var uS = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, f = t.payload, l = t.formatter, d = t.itemSorter, p = t.wrapperClassName, g = t.labelClassName, v = t.label, h = t.labelFormatter, m = t.accessibilityLayer, x = m === void 0 ? !1 : m, w = function() {
    if (f && f.length) {
      var P = {
        padding: 0,
        margin: 0
      }, M = (d ? mf(f, d) : f).map(function(I, j) {
        if (I.type === "none")
          return null;
        var R = Is({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: I.color || "#000"
        }, u), D = I.formatter || l || oS, q = I.value, k = I.name, W = q, G = k;
        if (D && W != null && G != null) {
          var F = D(q, k, I, j, f);
          if (Array.isArray(F)) {
            var K = JO(F, 2);
            W = K[0], G = K[1];
          } else
            W = F;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(j),
            style: R
          }, we(G) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, G) : null, we(G) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, W), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, I.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, M);
    }
    return null;
  }, _ = Is({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), y = Is({
    margin: 0
  }, c), b = !Y(v), O = b ? v : "", S = se("recharts-default-tooltip", p), A = se("recharts-tooltip-label", g);
  b && h && f !== void 0 && f !== null && (O = h(v, f));
  var C = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Vc({
    className: S,
    style: _
  }, C), /* @__PURE__ */ E.createElement("p", {
    className: A,
    style: y
  }, /* @__PURE__ */ E.isValidElement(O) ? O : "".concat(O)), w());
};
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Hn(e, t, r) {
  return t = sS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sS(e) {
  var t = cS(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function cS(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = "recharts-tooltip-wrapper", lS = {
  visibility: "hidden"
};
function fS(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return se($r, Hn(Hn(Hn(Hn({}, "".concat($r, "-right"), B(r) && t && B(t.x) && r >= t.x), "".concat($r, "-left"), B(r) && t && B(t.x) && r < t.x), "".concat($r, "-bottom"), B(n) && t && B(t.y) && n >= t.y), "".concat($r, "-top"), B(n) && t && B(t.y) && n < t.y));
}
function mv(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (i && B(i[n]))
    return i[n];
  var f = r[n] - u - a, l = r[n] + a;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var d = f, p = s[n];
    return d < p ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var g = l + u, v = s[n] + c;
  return g > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function dS(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function hS(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = mv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = mv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = dS({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = lS, {
    cssProperties: c,
    cssClasses: fS({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e);
}
function bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(r), !0).forEach(function(n) {
      Yc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bb(n.key), n);
  }
}
function yS(e, t, r) {
  return t && vS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gS(e, t, r) {
  return t = fa(t), mS(e, Lb() ? Reflect.construct(t, r || [], fa(e).constructor) : t.apply(e, r));
}
function mS(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bS(e);
}
function bS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lb = function() {
    return !!e;
  })();
}
function fa(e) {
  return fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fa(e);
}
function xS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xc(e, t);
}
function Xc(e, t) {
  return Xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xc(e, t);
}
function Yc(e, t, r) {
  return t = Bb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bb(e) {
  var t = wS(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function wS(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wv = 1, _S = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    pS(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = gS(this, t, [].concat(a)), Yc(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Yc(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return xS(t, e), yS(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > wv || Math.abs(n.height - this.state.lastBoundingBox.height) > wv) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.children, f = a.coordinate, l = a.hasPayload, d = a.isAnimationActive, p = a.offset, g = a.position, v = a.reverseDirection, h = a.useTranslate3d, m = a.viewBox, x = a.wrapperStyle, w = hS({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: p,
        position: g,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: h,
        viewBox: m
      }), _ = w.cssClasses, y = w.cssProperties, b = xv(xv({
        transition: d && i ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, y), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: _,
          style: b,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, c)
      );
    }
  }]);
})(Xt), OS = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: OS()
};
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function _v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _v(Object(r), !0).forEach(function(n) {
      bf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _v(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function AS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ub(n.key), n);
  }
}
function PS(e, t, r) {
  return t && AS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TS(e, t, r) {
  return t = da(t), ES(e, Fb() ? Reflect.construct(t, r || [], da(e).constructor) : t.apply(e, r));
}
function ES(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MS(e);
}
function MS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fb = function() {
    return !!e;
  })();
}
function da(e) {
  return da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, da(e);
}
function jS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zc(e, t);
}
function Zc(e, t) {
  return Zc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Zc(e, t);
}
function bf(e, t, r) {
  return t = Ub(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ub(e) {
  var t = CS(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function CS(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function IS(e) {
  return e.dataKey;
}
function $S(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(uS, t);
}
var et = /* @__PURE__ */ (function(e) {
  function t() {
    return SS(this, t), TS(this, t, arguments);
  }
  return jS(t, e), PS(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.content, f = a.coordinate, l = a.filterNull, d = a.isAnimationActive, p = a.offset, g = a.payload, v = a.payloadUniqBy, h = a.position, m = a.reverseDirection, x = a.useTranslate3d, w = a.viewBox, _ = a.wrapperStyle, y = g ?? [];
      l && y.length && (y = Ib(g.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, IS));
      var b = y.length > 0;
      return /* @__PURE__ */ E.createElement(_S, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: d,
        active: i,
        coordinate: f,
        hasPayload: b,
        offset: p,
        position: h,
        reverseDirection: m,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: _
      }, $S(c, Ov(Ov({}, this.props), {}, {
        payload: y
      })));
    }
  }]);
})(Xt);
bf(et, "displayName", "Tooltip");
bf(et, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !li.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var $s, Sv;
function RS() {
  if (Sv) return $s;
  Sv = 1;
  var e = ut(), t = function() {
    return e.Date.now();
  };
  return $s = t, $s;
}
var Rs, Av;
function NS() {
  if (Av) return Rs;
  Av = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Rs = t, Rs;
}
var Ns, Pv;
function DS() {
  if (Pv) return Ns;
  Pv = 1;
  var e = NS(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Ns = r, Ns;
}
var Ds, Tv;
function Wb() {
  if (Tv) return Ds;
  Tv = 1;
  var e = DS(), t = Tt(), r = Tr(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = i.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Ds = s, Ds;
}
var qs, Ev;
function qS() {
  if (Ev) return qs;
  Ev = 1;
  var e = Tt(), t = RS(), r = Wb(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(u, s, c) {
    var f, l, d, p, g, v, h = 0, m = !1, x = !1, w = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    s = r(s) || 0, e(c) && (m = !!c.leading, x = "maxWait" in c, d = x ? a(r(c.maxWait) || 0, s) : d, w = "trailing" in c ? !!c.trailing : w);
    function _(M) {
      var I = f, j = l;
      return f = l = void 0, h = M, p = u.apply(j, I), p;
    }
    function y(M) {
      return h = M, g = setTimeout(S, s), m ? _(M) : p;
    }
    function b(M) {
      var I = M - v, j = M - h, R = s - I;
      return x ? i(R, d - j) : R;
    }
    function O(M) {
      var I = M - v, j = M - h;
      return v === void 0 || I >= s || I < 0 || x && j >= d;
    }
    function S() {
      var M = t();
      if (O(M))
        return A(M);
      g = setTimeout(S, b(M));
    }
    function A(M) {
      return g = void 0, w && f ? _(M) : (f = l = void 0, p);
    }
    function C() {
      g !== void 0 && clearTimeout(g), h = 0, f = v = l = g = void 0;
    }
    function T() {
      return g === void 0 ? p : A(t());
    }
    function P() {
      var M = t(), I = O(M);
      if (f = arguments, l = this, v = M, I) {
        if (g === void 0)
          return y(v);
        if (x)
          return clearTimeout(g), g = setTimeout(S, s), _(v);
      }
      return g === void 0 && (g = setTimeout(S, s)), p;
    }
    return P.cancel = C, P.flush = T, P;
  }
  return qs = o, qs;
}
var ks, Mv;
function kS() {
  if (Mv) return ks;
  Mv = 1;
  var e = qS(), t = Tt(), r = "Expected a function";
  function n(a, i, o) {
    var u = !0, s = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, s = "trailing" in o ? !!o.trailing : s), e(a, i, {
      leading: u,
      maxWait: i,
      trailing: s
    });
  }
  return ks = n, ks;
}
var LS = kS();
const Hb = /* @__PURE__ */ ie(LS);
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function jv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jv(Object(r), !0).forEach(function(n) {
      BS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BS(e, t, r) {
  return t = FS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FS(e) {
  var t = US(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function US(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WS(e, t) {
  return KS(e) || GS(e, t) || zS(e, t) || HS();
}
function HS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zS(e, t) {
  if (e) {
    if (typeof e == "string") return Cv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cv(e, t);
  }
}
function Cv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function KS(e) {
  if (Array.isArray(e)) return e;
}
var VS = /* @__PURE__ */ $e(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, d = e.maxHeight, p = e.children, g = e.debounce, v = g === void 0 ? 0 : g, h = e.id, m = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, y = Xr(null), b = Xr();
  b.current = x, zx(t, function() {
    return Object.defineProperty(y.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), y.current;
      },
      configurable: !0
    });
  });
  var O = Kl({
    containerWidth: a.width,
    containerHeight: a.height
  }), S = WS(O, 2), A = S[0], C = S[1], T = Gx(function(M, I) {
    C(function(j) {
      var R = Math.round(M), D = Math.round(I);
      return j.containerWidth === R && j.containerHeight === D ? j : {
        containerWidth: R,
        containerHeight: D
      };
    });
  }, []);
  Va(function() {
    var M = function(k) {
      var W, G = k[0].contentRect, F = G.width, K = G.height;
      T(F, K), (W = b.current) === null || W === void 0 || W.call(b, F, K);
    };
    v > 0 && (M = Hb(M, v, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver(M), j = y.current.getBoundingClientRect(), R = j.width, D = j.height;
    return T(R, D), I.observe(y.current), function() {
      I.disconnect();
    };
  }, [T, v]);
  var P = Vl(function() {
    var M = A.containerWidth, I = A.containerHeight;
    if (M < 0 || I < 0)
      return null;
    Ut(kt(o) || kt(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), Ut(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var j = kt(o) ? M : o, R = kt(s) ? I : s;
    r && r > 0 && (j ? R = j / r : R && (j = R * r), d && R > d && (R = d)), Ut(j > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, j, R, o, s, f, l, r);
    var D = !Array.isArray(p) && dt(p.type).endsWith("Chart");
    return E.Children.map(p, function(q) {
      return /* @__PURE__ */ E.isValidElement(q) ? /* @__PURE__ */ xe(q, zn({
        width: j,
        height: R
      }, D ? {
        style: zn({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: j
        }, q.props.style)
      } : {})) : q;
    });
  }, [r, p, s, d, l, f, A, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: h ? "".concat(h) : void 0,
    className: se("recharts-responsive-container", m),
    style: zn(zn({}, _), {}, {
      width: o,
      height: s,
      minWidth: f,
      minHeight: l,
      maxHeight: d
    }),
    ref: y
  }, P);
}), zb = function(t) {
  return null;
};
zb.displayName = "Cell";
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function Iv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iv(Object(r), !0).forEach(function(n) {
      XS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XS(e, t, r) {
  return t = YS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YS(e) {
  var t = ZS(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function ZS(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rr = {
  widthCache: {},
  cacheCount: 0
}, JS = 2e3, QS = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, $v = "recharts_measurement_span";
function eA(e) {
  var t = Jc({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Rv = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || li.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = eA(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (rr.widthCache[a])
    return rr.widthCache[a];
  try {
    var i = document.getElementById($v);
    i || (i = document.createElement("span"), i.setAttribute("id", $v), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Jc(Jc({}, QS), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var u = i.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return rr.widthCache[a] = s, ++rr.cacheCount > JS && (rr.cacheCount = 0, rr.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, tA = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function ha(e, t) {
  return iA(e) || aA(e, t) || nA(e, t) || rA();
}
function rA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nA(e, t) {
  if (e) {
    if (typeof e == "string") return Nv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nv(e, t);
  }
}
function Nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aA(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function iA(e) {
  if (Array.isArray(e)) return e;
}
function oA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sA(n.key), n);
  }
}
function uA(e, t, r) {
  return t && Dv(e.prototype, t), r && Dv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sA(e) {
  var t = cA(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function cA(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, kv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, lA = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, fA = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Gb = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, dA = Object.keys(Gb), ar = "NaN";
function hA(e, t) {
  return e * Gb[t];
}
var Gn = /* @__PURE__ */ (function() {
  function e(t, r) {
    oA(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !lA.test(r) && (this.num = NaN, this.unit = ""), dA.includes(r) && (this.num = hA(t, r), this.unit = "px");
  }
  return uA(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = fA.exec(r)) !== null && n !== void 0 ? n : [], i = ha(a, 3), o = i[1], u = i[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
})();
function Kb(e) {
  if (e.includes(ar))
    return ar;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = qv.exec(t)) !== null && r !== void 0 ? r : [], a = ha(n, 4), i = a[1], o = a[2], u = a[3], s = Gn.parse(i ?? ""), c = Gn.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return ar;
    t = t.replace(qv, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, d = (l = kv.exec(t)) !== null && l !== void 0 ? l : [], p = ha(d, 4), g = p[1], v = p[2], h = p[3], m = Gn.parse(g ?? ""), x = Gn.parse(h ?? ""), w = v === "+" ? m.add(x) : m.subtract(x);
    if (w.isNaN())
      return ar;
    t = t.replace(kv, w.toString());
  }
  return t;
}
var Lv = /\(([^()]*)\)/;
function pA(e) {
  for (var t = e; t.includes("("); ) {
    var r = Lv.exec(t), n = ha(r, 2), a = n[1];
    t = t.replace(Lv, Kb(a));
  }
  return t;
}
function vA(e) {
  var t = e.replace(/\s+/g, "");
  return t = pA(t), t = Kb(t), t;
}
function yA(e) {
  try {
    return vA(e);
  } catch {
    return ar;
  }
}
function Ls(e) {
  var t = yA(e.slice(5, -1));
  return t === ar ? "" : t;
}
var gA = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], mA = ["dx", "dy", "angle", "className", "breakAll"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function Bv(e, t) {
  if (e == null) return {};
  var r = bA(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Fv(e, t) {
  return OA(e) || _A(e, t) || wA(e, t) || xA();
}
function xA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wA(e, t) {
  if (e) {
    if (typeof e == "string") return Uv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uv(e, t);
  }
}
function Uv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _A(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function OA(e) {
  if (Array.isArray(e)) return e;
}
var Vb = /[ \f\n\r\t\v\u2028\u2029]+/, Xb = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Y(r) || (n ? i = r.toString().split("") : i = r.toString().split(Vb));
    var o = i.map(function(s) {
      return {
        word: s,
        width: Rv(s, a).width
      };
    }), u = n ? 0 : Rv(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, SA = function(t, r, n, a, i) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, f = B(o), l = u, d = function() {
    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return j.reduce(function(R, D) {
      var q = D.word, k = D.width, W = R[R.length - 1];
      if (W && (a == null || i || W.width + k + n < Number(a)))
        W.words.push(q), W.width += k + n;
      else {
        var G = {
          words: [q],
          width: k
        };
        R.push(G);
      }
      return R;
    }, []);
  }, p = d(r), g = function(j) {
    return j.reduce(function(R, D) {
      return R.width > D.width ? R : D;
    });
  };
  if (!f)
    return p;
  for (var v = "…", h = function(j) {
    var R = l.slice(0, j), D = Xb({
      breakAll: c,
      style: s,
      children: R + v
    }).wordsWithComputedWidth, q = d(D), k = q.length > o || g(q).width > Number(a);
    return [k, q];
  }, m = 0, x = l.length - 1, w = 0, _; m <= x && w <= l.length - 1; ) {
    var y = Math.floor((m + x) / 2), b = y - 1, O = h(b), S = Fv(O, 2), A = S[0], C = S[1], T = h(y), P = Fv(T, 1), M = P[0];
    if (!A && !M && (m = y + 1), A && M && (x = y - 1), !A && M) {
      _ = C;
      break;
    }
    w++;
  }
  return _ || p;
}, Wv = function(t) {
  var r = Y(t) ? [] : t.toString().split(Vb);
  return [{
    words: r
  }];
}, AA = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !li.isSsr) {
    var s, c, f = Xb({
      breakAll: o,
      children: a,
      style: i
    });
    if (f) {
      var l = f.wordsWithComputedWidth, d = f.spaceWidth;
      s = l, c = d;
    } else
      return Wv(a);
    return SA({
      breakAll: o,
      children: a,
      maxLines: u,
      style: i
    }, s, c, r, n);
  }
  return Wv(a);
}, Hv = "#808080", el = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, f = t.scaleToFit, l = f === void 0 ? !1 : f, d = t.textAnchor, p = d === void 0 ? "start" : d, g = t.verticalAnchor, v = g === void 0 ? "end" : g, h = t.fill, m = h === void 0 ? Hv : h, x = Bv(t, gA), w = Vl(function() {
    return AA({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: l,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, l, x.style, x.width]), _ = x.dx, y = x.dy, b = x.angle, O = x.className, S = x.breakAll, A = Bv(x, mA);
  if (!we(n) || !we(i))
    return null;
  var C = n + (B(_) ? _ : 0), T = i + (B(y) ? y : 0), P;
  switch (v) {
    case "start":
      P = Ls("calc(".concat(c, ")"));
      break;
    case "middle":
      P = Ls("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      P = Ls("calc(".concat(w.length - 1, " * -").concat(u, ")"));
      break;
  }
  var M = [];
  if (l) {
    var I = w[0].width, j = x.width;
    M.push("scale(".concat((B(j) ? j / I : 1) / I, ")"));
  }
  return b && M.push("rotate(".concat(b, ", ").concat(C, ", ").concat(T, ")")), M.length && (A.transform = M.join(" ")), /* @__PURE__ */ E.createElement("text", Qc({}, ce(A, !0), {
    x: C,
    y: T,
    className: se("recharts-text", O),
    textAnchor: p,
    fill: m.includes("url") ? Hv : m
  }), w.map(function(R, D) {
    var q = R.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: C,
        dy: D === 0 ? P : u,
        key: "".concat(q, "-").concat(D)
      }, q)
    );
  }));
};
function At(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function PA(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xf(e) {
  let t, r, n;
  e.length !== 2 ? (t = At, r = (u, s) => At(e(u), s), n = (u, s) => e(u) - s) : (t = e === At || e === PA ? e : TA, r = e, n = e);
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = a(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: a, center: o, right: i };
}
function TA() {
  return 0;
}
function Yb(e) {
  return e === null ? NaN : +e;
}
function* EA(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const MA = xf(At), Dn = MA.right;
xf(Yb).center;
class zv extends Map {
  constructor(t, r = IA) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(Gv(this, t));
  }
  has(t) {
    return super.has(Gv(this, t));
  }
  set(t, r) {
    return super.set(jA(this, t), r);
  }
  delete(t) {
    return super.delete(CA(this, t));
  }
}
function Gv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function jA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function CA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function IA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function $A(e = At) {
  if (e === At) return Zb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Zb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const RA = Math.sqrt(50), NA = Math.sqrt(10), DA = Math.sqrt(2);
function pa(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= RA ? 10 : i >= NA ? 5 : i >= DA ? 2 : 1;
  let u, s, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, a) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? pa(e, t, r * 2) : [u, s, c];
}
function tl(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? pa(t, e, r) : pa(e, t, r);
  if (!(i >= a)) return [];
  const u = i - a + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (a + c) * o;
  return s;
}
function rl(e, t, r) {
  return t = +t, e = +e, r = +r, pa(e, t, r)[2];
}
function nl(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? rl(t, e, r) : rl(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Kv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Vv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Jb(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? Zb : $A(a); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * l / s + d)), g = Math.min(n, Math.floor(t + (s - c) * l / s + d));
      Jb(e, t, p, g, a);
    }
    const i = e[t];
    let o = r, u = n;
    for (Rr(e, r, t), a(e[n], i) > 0 && Rr(e, r, n); o < u; ) {
      for (Rr(e, o, u), ++o, --u; a(e[o], i) < 0; ) ++o;
      for (; a(e[u], i) > 0; ) --u;
    }
    a(e[r], i) === 0 ? Rr(e, r, u) : (++u, Rr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Rr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function qA(e, t, r) {
  if (e = Float64Array.from(EA(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Vv(e);
    if (t >= 1) return Kv(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Kv(Jb(e, i).subarray(0, i + 1)), u = Vv(e.subarray(i + 1));
    return o + (u - o) * (a - i);
  }
}
function kA(e, t, r = Yb) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), u = +r(e[i + 1], i + 1, e);
    return o + (u - o) * (a - i);
  }
}
function LA(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function ze(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function xt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const al = /* @__PURE__ */ Symbol("implicit");
function wf() {
  var e = new zv(), t = [], r = [], n = al;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== al) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new zv();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return wf(t, r).unknown(n);
  }, ze.apply(a, arguments), a;
}
function nn() {
  var e = wf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, u = !1, s = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var d = t().length, p = a < n, g = p ? a : n, v = p ? n : a;
    i = (v - g) / Math.max(1, d - s + c * 2), u && (i = Math.floor(i)), g += (v - g - i * (d - s)) * f, o = i * (1 - s), u && (g = Math.round(g), o = Math.round(o));
    var h = LA(d).map(function(m) {
      return g + i * m;
    });
    return r(p ? h.reverse() : h);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), l()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, l()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, l()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), l()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), l()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, l()) : c;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), l()) : f;
  }, e.copy = function() {
    return nn(t(), [n, a]).round(u).paddingInner(s).paddingOuter(c).align(f);
  }, ze.apply(l(), arguments);
}
function Qb(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Qb(t());
  }, e;
}
function Gr() {
  return Qb(nn.apply(null, arguments).paddingInner(1));
}
function _f(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function e0(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function qn() {
}
var an = 0.7, va = 1 / an, ur = "\\s*([+-]?\\d+)\\s*", on = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", BA = /^#([0-9a-f]{3,8})$/, FA = new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`), UA = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), WA = new RegExp(`^rgba\\(${ur},${ur},${ur},${on}\\)$`), HA = new RegExp(`^rgba\\(${at},${at},${at},${on}\\)$`), zA = new RegExp(`^hsl\\(${on},${at},${at}\\)$`), GA = new RegExp(`^hsla\\(${on},${at},${at},${on}\\)$`), Xv = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
_f(qn, un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yv,
  // Deprecated! Use color.formatHex.
  formatHex: Yv,
  formatHex8: KA,
  formatHsl: VA,
  formatRgb: Zv,
  toString: Zv
});
function Yv() {
  return this.rgb().formatHex();
}
function KA() {
  return this.rgb().formatHex8();
}
function VA() {
  return t0(this).formatHsl();
}
function Zv() {
  return this.rgb().formatRgb();
}
function un(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = BA.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Jv(t) : r === 3 ? new Ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Kn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Kn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = FA.exec(e)) ? new Ie(t[1], t[2], t[3], 1) : (t = UA.exec(e)) ? new Ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = WA.exec(e)) ? Kn(t[1], t[2], t[3], t[4]) : (t = HA.exec(e)) ? Kn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = zA.exec(e)) ? ty(t[1], t[2] / 100, t[3] / 100, 1) : (t = GA.exec(e)) ? ty(t[1], t[2] / 100, t[3] / 100, t[4]) : Xv.hasOwnProperty(e) ? Jv(Xv[e]) : e === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function Jv(e) {
  return new Ie(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Kn(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ie(e, t, r, n);
}
function XA(e) {
  return e instanceof qn || (e = un(e)), e ? (e = e.rgb(), new Ie(e.r, e.g, e.b, e.opacity)) : new Ie();
}
function il(e, t, r, n) {
  return arguments.length === 1 ? XA(e) : new Ie(e, t, r, n ?? 1);
}
function Ie(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
_f(Ie, il, e0(qn, {
  brighter(e) {
    return e = e == null ? va : Math.pow(va, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? an : Math.pow(an, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ie(Wt(this.r), Wt(this.g), Wt(this.b), ya(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qv,
  // Deprecated! Use color.formatHex.
  formatHex: Qv,
  formatHex8: YA,
  formatRgb: ey,
  toString: ey
}));
function Qv() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}`;
}
function YA() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}${Lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ey() {
  const e = ya(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wt(this.r)}, ${Wt(this.g)}, ${Wt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ya(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Lt(e) {
  return e = Wt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ty(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ve(e, t, r, n);
}
function t0(e) {
  if (e instanceof Ve) return new Ve(e.h, e.s, e.l, e.opacity);
  if (e instanceof qn || (e = un(e)), !e) return new Ve();
  if (e instanceof Ve) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, u = i - a, s = (i + a) / 2;
  return u ? (t === i ? o = (r - n) / u + (r < n) * 6 : r === i ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new Ve(o, u, s, e.opacity);
}
function ZA(e, t, r, n) {
  return arguments.length === 1 ? t0(e) : new Ve(e, t, r, n ?? 1);
}
function Ve(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
_f(Ve, ZA, e0(qn, {
  brighter(e) {
    return e = e == null ? va : Math.pow(va, e), new Ve(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? an : Math.pow(an, e), new Ve(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Ie(
      Bs(e >= 240 ? e - 240 : e + 120, a, n),
      Bs(e, a, n),
      Bs(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Ve(ry(this.h), Vn(this.s), Vn(this.l), ya(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ya(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ry(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ry(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Vn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Bs(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Of = (e) => () => e;
function JA(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function QA(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function eP(e) {
  return (e = +e) == 1 ? r0 : function(t, r) {
    return r - t ? QA(t, r, e) : Of(isNaN(t) ? r : t);
  };
}
function r0(e, t) {
  var r = t - e;
  return r ? JA(e, r) : Of(isNaN(e) ? t : e);
}
const ny = (function e(t) {
  var r = eP(t);
  function n(a, i) {
    var o = r((a = il(a)).r, (i = il(i)).r), u = r(a.g, i.g), s = r(a.b, i.b), c = r0(a.opacity, i.opacity);
    return function(f) {
      return a.r = o(f), a.g = u(f), a.b = s(f), a.opacity = c(f), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function tP(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function rP(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function nP(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = jr(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) i[o] = a[o](u);
    return i;
  };
}
function aP(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ga(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function iP(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = jr(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var ol = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fs = new RegExp(ol.source, "g");
function oP(e) {
  return function() {
    return e;
  };
}
function uP(e) {
  return function(t) {
    return e(t) + "";
  };
}
function sP(e, t) {
  var r = ol.lastIndex = Fs.lastIndex = 0, n, a, i, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = ol.exec(e)) && (a = Fs.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), u[o] ? u[o] += i : u[++o] = i), (n = n[0]) === (a = a[0]) ? u[o] ? u[o] += a : u[++o] = a : (u[++o] = null, s.push({ i: o, x: ga(n, a) })), r = Fs.lastIndex;
  return r < t.length && (i = t.slice(r), u[o] ? u[o] += i : u[++o] = i), u.length < 2 ? s[0] ? uP(s[0].x) : oP(t) : (t = s.length, function(c) {
    for (var f = 0, l; f < t; ++f) u[(l = s[f]).i] = l.x(c);
    return u.join("");
  });
}
function jr(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Of(t) : (r === "number" ? ga : r === "string" ? (n = un(t)) ? (t = n, ny) : sP : t instanceof un ? ny : t instanceof Date ? aP : rP(t) ? tP : Array.isArray(t) ? nP : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? iP : ga)(e, t);
}
function Sf(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function cP(e, t) {
  t === void 0 && (t = e, e = jr);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[u](o - u);
  };
}
function lP(e) {
  return function() {
    return e;
  };
}
function ma(e) {
  return +e;
}
var ay = [0, 1];
function Me(e) {
  return e;
}
function ul(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : lP(isNaN(t) ? NaN : 0.5);
}
function fP(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function dP(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = ul(a, n), i = r(o, i)) : (n = ul(n, a), i = r(i, o)), function(u) {
    return i(n(u));
  };
}
function hP(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = ul(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Dn(e, u, 1, n) - 1;
    return i[s](a[s](u));
  };
}
function kn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function fi() {
  var e = ay, t = ay, r = jr, n, a, i, o = Me, u, s, c;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== Me && (o = fP(e[0], e[d - 1])), u = d > 2 ? hP : dP, s = c = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? i : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return l.invert = function(d) {
    return o(a((c || (c = u(t, e.map(n), ga)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ma), f()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), r = Sf, f();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Me, f()) : o !== Me;
  }, l.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, l.unknown = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, function(d, p) {
    return n = d, a = p, f();
  };
}
function Af() {
  return fi()(Me, Me);
}
function pP(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ba(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function pr(e) {
  return e = ba(Math.abs(e)), e ? e[1] : NaN;
}
function vP(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, u = e[0], s = 0; a > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), i.push(r.substring(a -= u, a + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function yP(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var gP = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function sn(e) {
  if (!(t = gP.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Pf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
sn.prototype = Pf.prototype;
function Pf(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Pf.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function mP(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var xa;
function bP(e, t) {
  var r = ba(e, t);
  if (!r) return xa = void 0, e.toPrecision(t);
  var n = r[0], a = r[1], i = a - (xa = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + ba(e, Math.max(0, t + i - 1))[0];
}
function iy(e, t) {
  var r = ba(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const oy = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pP,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => iy(e * 100, t),
  r: iy,
  s: bP,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function uy(e) {
  return e;
}
var sy = Array.prototype.map, cy = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function xP(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? uy : vP(sy.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? uy : yP(sy.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, d) {
    l = sn(l);
    var p = l.fill, g = l.align, v = l.sign, h = l.symbol, m = l.zero, x = l.width, w = l.comma, _ = l.precision, y = l.trim, b = l.type;
    b === "n" ? (w = !0, b = "g") : oy[b] || (_ === void 0 && (_ = 12), y = !0, b = "g"), (m || p === "0" && g === "=") && (m = !0, p = "0", g = "=");
    var O = (d && d.prefix !== void 0 ? d.prefix : "") + (h === "$" ? r : h === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), S = (h === "$" ? n : /[%p]/.test(b) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), A = oy[b], C = /[defgprs%]/.test(b);
    _ = _ === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function T(P) {
      var M = O, I = S, j, R, D;
      if (b === "c")
        I = A(P) + I, P = "";
      else {
        P = +P;
        var q = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? s : A(Math.abs(P), _), y && (P = mP(P)), q && +P == 0 && v !== "+" && (q = !1), M = (q ? v === "(" ? v : u : v === "-" || v === "(" ? "" : v) + M, I = (b === "s" && !isNaN(P) && xa !== void 0 ? cy[8 + xa / 3] : "") + I + (q && v === "(" ? ")" : ""), C) {
          for (j = -1, R = P.length; ++j < R; )
            if (D = P.charCodeAt(j), 48 > D || D > 57) {
              I = (D === 46 ? a + P.slice(j + 1) : P.slice(j)) + I, P = P.slice(0, j);
              break;
            }
        }
      }
      w && !m && (P = t(P, 1 / 0));
      var k = M.length + P.length + I.length, W = k < x ? new Array(x - k + 1).join(p) : "";
      switch (w && m && (P = t(W + P, W.length ? x - I.length : 1 / 0), W = ""), g) {
        case "<":
          P = M + P + I + W;
          break;
        case "=":
          P = M + W + P + I;
          break;
        case "^":
          P = W.slice(0, k = W.length >> 1) + M + P + I + W.slice(k);
          break;
        default:
          P = W + M + P + I;
          break;
      }
      return i(P);
    }
    return T.toString = function() {
      return l + "";
    }, T;
  }
  function f(l, d) {
    var p = Math.max(-8, Math.min(8, Math.floor(pr(d) / 3))) * 3, g = Math.pow(10, -p), v = c((l = sn(l), l.type = "f", l), { suffix: cy[8 + p / 3] });
    return function(h) {
      return v(g * h);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Xn, Tf, n0;
wP({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function wP(e) {
  return Xn = xP(e), Tf = Xn.format, n0 = Xn.formatPrefix, Xn;
}
function _P(e) {
  return Math.max(0, -pr(Math.abs(e)));
}
function OP(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(pr(t) / 3))) * 3 - pr(Math.abs(e)));
}
function SP(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, pr(t) - pr(e)) + 1;
}
function a0(e, t, r, n) {
  var a = nl(e, t, r), i;
  switch (n = sn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = OP(a, o)) && (n.precision = i), n0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = SP(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = _P(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Tf(n);
}
function Mt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return tl(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return a0(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], u = n[i], s, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = a, a = i, i = c); f-- > 0; ) {
      if (c = rl(o, u, r), c === s)
        return n[a] = o, n[i] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function wa() {
  var e = Af();
  return e.copy = function() {
    return kn(e, wa());
  }, ze.apply(e, arguments), Mt(e);
}
function i0(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ma), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return i0(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ma) : [0, 1], Mt(r);
}
function o0(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function ly(e) {
  return Math.log(e);
}
function fy(e) {
  return Math.exp(e);
}
function AP(e) {
  return -Math.log(-e);
}
function PP(e) {
  return -Math.exp(-e);
}
function TP(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function EP(e) {
  return e === 10 ? TP : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function MP(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function dy(e) {
  return (t, r) => -e(-t, r);
}
function Ef(e) {
  const t = e(ly, fy), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = MP(n), i = EP(n), r()[0] < 0 ? (a = dy(a), i = dy(i), e(AP, PP)) : e(ly, fy), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let d = a(c), p = a(f), g, v;
    const h = u == null ? 10 : +u;
    let m = [];
    if (!(n % 1) && p - d < h) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (g = 1; g < n; ++g)
            if (v = d < 0 ? g / i(-d) : g * i(d), !(v < c)) {
              if (v > f) break;
              m.push(v);
            }
      } else for (; d <= p; ++d)
        for (g = n - 1; g >= 1; --g)
          if (v = d > 0 ? g / i(-d) : g * i(d), !(v < c)) {
            if (v > f) break;
            m.push(v);
          }
      m.length * 2 < h && (m = tl(c, f, h));
    } else
      m = tl(d, p, Math.min(p - d, h)).map(i);
    return l ? m.reverse() : m;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = sn(s)).precision == null && (s.trim = !0), s = Tf(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / i(Math.round(a(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, t.nice = () => r(o0(r(), {
    floor: (u) => i(Math.floor(a(u))),
    ceil: (u) => i(Math.ceil(a(u)))
  })), t;
}
function u0() {
  const e = Ef(fi()).domain([1, 10]);
  return e.copy = () => kn(e, u0()).base(e.base()), ze.apply(e, arguments), e;
}
function hy(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function py(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Mf(e) {
  var t = 1, r = e(hy(t), py(t));
  return r.constant = function(n) {
    return arguments.length ? e(hy(t = +n), py(t)) : t;
  }, Mt(r);
}
function s0() {
  var e = Mf(fi());
  return e.copy = function() {
    return kn(e, s0()).constant(e.constant());
  }, ze.apply(e, arguments);
}
function vy(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function jP(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function CP(e) {
  return e < 0 ? -e * e : e * e;
}
function jf(e) {
  var t = e(Me, Me), r = 1;
  function n() {
    return r === 1 ? e(Me, Me) : r === 0.5 ? e(jP, CP) : e(vy(r), vy(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Mt(t);
}
function Cf() {
  var e = jf(fi());
  return e.copy = function() {
    return kn(e, Cf()).exponent(e.exponent());
  }, ze.apply(e, arguments), e;
}
function IP() {
  return Cf.apply(null, arguments).exponent(0.5);
}
function yy(e) {
  return Math.sign(e) * e * e;
}
function $P(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function c0() {
  var e = Af(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = $P(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(yy(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, ma)).map(yy)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return c0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ze.apply(a, arguments), Mt(a);
}
function l0() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = kA(e, o / u);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Dn(r, o)];
  }
  return i.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(At), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return l0().domain(e).range(t).unknown(n);
  }, ze.apply(i, arguments);
}
function f0() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(s) {
    return s != null && s <= s ? a[Dn(n, s, 0, r)] : i;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (a = Array.from(s)).length - 1, u()) : a.slice();
  }, o.invertExtent = function(s) {
    var c = a.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (i = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return f0().domain([e, t]).range(a).unknown(i);
  }, ze.apply(Mt(o), arguments);
}
function d0() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Dn(e, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), a) : e.slice();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), a) : t.slice();
  }, a.invertExtent = function(i) {
    var o = t.indexOf(i);
    return [e[o - 1], e[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return d0().domain(e).range(t).unknown(r);
  }, ze.apply(a, arguments);
}
const Us = /* @__PURE__ */ new Date(), Ws = /* @__PURE__ */ new Date();
function _e(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), u = a.ceil(i);
    return i - o < u - i ? o : u;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, u) => {
    const s = [];
    if (i = a.ceil(i), u = u == null ? 1 : Math.floor(u), !(i < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+i)), t(i, u), e(i);
    while (c < i && i < o);
    return s;
  }, a.filter = (i) => _e((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (Us.setTime(+i), Ws.setTime(+o), e(Us), e(Ws), Math.floor(r(Us, Ws))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const _a = _e(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
_a.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? _e((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : _a);
_a.range;
const lt = 1e3, We = lt * 60, ft = We * 60, pt = ft * 24, If = pt * 7, gy = pt * 30, Hs = pt * 365, Bt = _e((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * lt);
}, (e, t) => (t - e) / lt, (e) => e.getUTCSeconds());
Bt.range;
const $f = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * lt);
}, (e, t) => {
  e.setTime(+e + t * We);
}, (e, t) => (t - e) / We, (e) => e.getMinutes());
$f.range;
const Rf = _e((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * We);
}, (e, t) => (t - e) / We, (e) => e.getUTCMinutes());
Rf.range;
const Nf = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * lt - e.getMinutes() * We);
}, (e, t) => {
  e.setTime(+e + t * ft);
}, (e, t) => (t - e) / ft, (e) => e.getHours());
Nf.range;
const Df = _e((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ft);
}, (e, t) => (t - e) / ft, (e) => e.getUTCHours());
Df.range;
const Ln = _e(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * We) / pt,
  (e) => e.getDate() - 1
);
Ln.range;
const di = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / pt, (e) => e.getUTCDate() - 1);
di.range;
const h0 = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / pt, (e) => Math.floor(e / pt));
h0.range;
function Zt(e) {
  return _e((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * We) / If);
}
const hi = Zt(0), Oa = Zt(1), RP = Zt(2), NP = Zt(3), vr = Zt(4), DP = Zt(5), qP = Zt(6);
hi.range;
Oa.range;
RP.range;
NP.range;
vr.range;
DP.range;
qP.range;
function Jt(e) {
  return _e((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / If);
}
const pi = Jt(0), Sa = Jt(1), kP = Jt(2), LP = Jt(3), yr = Jt(4), BP = Jt(5), FP = Jt(6);
pi.range;
Sa.range;
kP.range;
LP.range;
yr.range;
BP.range;
FP.range;
const qf = _e((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
qf.range;
const kf = _e((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
kf.range;
const vt = _e((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
vt.range;
const yt = _e((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
yt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
yt.range;
function p0(e, t, r, n, a, i) {
  const o = [
    [Bt, 1, lt],
    [Bt, 5, 5 * lt],
    [Bt, 15, 15 * lt],
    [Bt, 30, 30 * lt],
    [i, 1, We],
    [i, 5, 5 * We],
    [i, 15, 15 * We],
    [i, 30, 30 * We],
    [a, 1, ft],
    [a, 3, 3 * ft],
    [a, 6, 6 * ft],
    [a, 12, 12 * ft],
    [n, 1, pt],
    [n, 2, 2 * pt],
    [r, 1, If],
    [t, 1, gy],
    [t, 3, 3 * gy],
    [e, 1, Hs]
  ];
  function u(c, f, l) {
    const d = f < c;
    d && ([c, f] = [f, c]);
    const p = l && typeof l.range == "function" ? l : s(c, f, l), g = p ? p.range(c, +f + 1) : [];
    return d ? g.reverse() : g;
  }
  function s(c, f, l) {
    const d = Math.abs(f - c) / l, p = xf(([, , h]) => h).right(o, d);
    if (p === o.length) return e.every(nl(c / Hs, f / Hs, l));
    if (p === 0) return _a.every(Math.max(nl(c, f, l), 1));
    const [g, v] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return g.every(v);
  }
  return [u, s];
}
const [UP, WP] = p0(yt, kf, pi, h0, Df, Rf), [HP, zP] = p0(vt, qf, hi, Ln, Nf, $f);
function zs(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Gs(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Nr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function GP(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Dr(a), f = qr(a), l = Dr(i), d = qr(i), p = Dr(o), g = qr(o), v = Dr(u), h = qr(u), m = Dr(s), x = qr(s), w = {
    a: D,
    A: q,
    b: k,
    B: W,
    c: null,
    d: Oy,
    e: Oy,
    f: vT,
    g: AT,
    G: TT,
    H: dT,
    I: hT,
    j: pT,
    L: v0,
    m: yT,
    M: gT,
    p: G,
    q: F,
    Q: Py,
    s: Ty,
    S: mT,
    u: bT,
    U: xT,
    V: wT,
    w: _T,
    W: OT,
    x: null,
    X: null,
    y: ST,
    Y: PT,
    Z: ET,
    "%": Ay
  }, _ = {
    a: K,
    A: oe,
    b: pe,
    B: De,
    c: null,
    d: Sy,
    e: Sy,
    f: IT,
    g: UT,
    G: HT,
    H: MT,
    I: jT,
    j: CT,
    L: g0,
    m: $T,
    M: RT,
    p: It,
    q: je,
    Q: Py,
    s: Ty,
    S: NT,
    u: DT,
    U: qT,
    V: kT,
    w: LT,
    W: BT,
    x: null,
    X: null,
    y: FT,
    Y: WT,
    Z: zT,
    "%": Ay
  }, y = {
    a: C,
    A: T,
    b: P,
    B: M,
    c: I,
    d: wy,
    e: wy,
    f: sT,
    g: xy,
    G: by,
    H: _y,
    I: _y,
    j: aT,
    L: uT,
    m: nT,
    M: iT,
    p: A,
    q: rT,
    Q: lT,
    s: fT,
    S: oT,
    u: ZP,
    U: JP,
    V: QP,
    w: YP,
    W: eT,
    x: j,
    X: R,
    y: xy,
    Y: by,
    Z: tT,
    "%": cT
  };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), _.x = b(r, _), _.X = b(n, _), _.c = b(t, _);
  function b(L, V) {
    return function(X) {
      var N = [], de = -1, Z = 0, ge = L.length, me, Ce, wt;
      for (X instanceof Date || (X = /* @__PURE__ */ new Date(+X)); ++de < ge; )
        L.charCodeAt(de) === 37 && (N.push(L.slice(Z, de)), (Ce = my[me = L.charAt(++de)]) != null ? me = L.charAt(++de) : Ce = me === "e" ? " " : "0", (wt = V[me]) && (me = wt(X, Ce)), N.push(me), Z = de + 1);
      return N.push(L.slice(Z, de)), N.join("");
    };
  }
  function O(L, V) {
    return function(X) {
      var N = Nr(1900, void 0, 1), de = S(N, L, X += "", 0), Z, ge;
      if (de != X.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (V && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (Z = Gs(Nr(N.y, 0, 1)), ge = Z.getUTCDay(), Z = ge > 4 || ge === 0 ? Sa.ceil(Z) : Sa(Z), Z = di.offset(Z, (N.V - 1) * 7), N.y = Z.getUTCFullYear(), N.m = Z.getUTCMonth(), N.d = Z.getUTCDate() + (N.w + 6) % 7) : (Z = zs(Nr(N.y, 0, 1)), ge = Z.getDay(), Z = ge > 4 || ge === 0 ? Oa.ceil(Z) : Oa(Z), Z = Ln.offset(Z, (N.V - 1) * 7), N.y = Z.getFullYear(), N.m = Z.getMonth(), N.d = Z.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), ge = "Z" in N ? Gs(Nr(N.y, 0, 1)).getUTCDay() : zs(Nr(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (ge + 5) % 7 : N.w + N.U * 7 - (ge + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, Gs(N)) : zs(N);
    };
  }
  function S(L, V, X, N) {
    for (var de = 0, Z = V.length, ge = X.length, me, Ce; de < Z; ) {
      if (N >= ge) return -1;
      if (me = V.charCodeAt(de++), me === 37) {
        if (me = V.charAt(de++), Ce = y[me in my ? V.charAt(de++) : me], !Ce || (N = Ce(L, X, N)) < 0) return -1;
      } else if (me != X.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function A(L, V, X) {
    var N = c.exec(V.slice(X));
    return N ? (L.p = f.get(N[0].toLowerCase()), X + N[0].length) : -1;
  }
  function C(L, V, X) {
    var N = p.exec(V.slice(X));
    return N ? (L.w = g.get(N[0].toLowerCase()), X + N[0].length) : -1;
  }
  function T(L, V, X) {
    var N = l.exec(V.slice(X));
    return N ? (L.w = d.get(N[0].toLowerCase()), X + N[0].length) : -1;
  }
  function P(L, V, X) {
    var N = m.exec(V.slice(X));
    return N ? (L.m = x.get(N[0].toLowerCase()), X + N[0].length) : -1;
  }
  function M(L, V, X) {
    var N = v.exec(V.slice(X));
    return N ? (L.m = h.get(N[0].toLowerCase()), X + N[0].length) : -1;
  }
  function I(L, V, X) {
    return S(L, t, V, X);
  }
  function j(L, V, X) {
    return S(L, r, V, X);
  }
  function R(L, V, X) {
    return S(L, n, V, X);
  }
  function D(L) {
    return o[L.getDay()];
  }
  function q(L) {
    return i[L.getDay()];
  }
  function k(L) {
    return s[L.getMonth()];
  }
  function W(L) {
    return u[L.getMonth()];
  }
  function G(L) {
    return a[+(L.getHours() >= 12)];
  }
  function F(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function K(L) {
    return o[L.getUTCDay()];
  }
  function oe(L) {
    return i[L.getUTCDay()];
  }
  function pe(L) {
    return s[L.getUTCMonth()];
  }
  function De(L) {
    return u[L.getUTCMonth()];
  }
  function It(L) {
    return a[+(L.getUTCHours() >= 12)];
  }
  function je(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var V = b(L += "", w);
      return V.toString = function() {
        return L;
      }, V;
    },
    parse: function(L) {
      var V = O(L += "", !1);
      return V.toString = function() {
        return L;
      }, V;
    },
    utcFormat: function(L) {
      var V = b(L += "", _);
      return V.toString = function() {
        return L;
      }, V;
    },
    utcParse: function(L) {
      var V = O(L += "", !0);
      return V.toString = function() {
        return L;
      }, V;
    }
  };
}
var my = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, KP = /^%/, VP = /[\\^$*+?|[\]().{}]/g;
function Q(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function XP(e) {
  return e.replace(VP, "\\$&");
}
function Dr(e) {
  return new RegExp("^(?:" + e.map(XP).join("|") + ")", "i");
}
function qr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function YP(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function ZP(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function JP(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function QP(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function eT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function by(e, t, r) {
  var n = Se.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function xy(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function tT(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function rT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function nT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function wy(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function aT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function _y(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function iT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function oT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function uT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function sT(e, t, r) {
  var n = Se.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function cT(e, t, r) {
  var n = KP.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function lT(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function fT(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Oy(e, t) {
  return Q(e.getDate(), t, 2);
}
function dT(e, t) {
  return Q(e.getHours(), t, 2);
}
function hT(e, t) {
  return Q(e.getHours() % 12 || 12, t, 2);
}
function pT(e, t) {
  return Q(1 + Ln.count(vt(e), e), t, 3);
}
function v0(e, t) {
  return Q(e.getMilliseconds(), t, 3);
}
function vT(e, t) {
  return v0(e, t) + "000";
}
function yT(e, t) {
  return Q(e.getMonth() + 1, t, 2);
}
function gT(e, t) {
  return Q(e.getMinutes(), t, 2);
}
function mT(e, t) {
  return Q(e.getSeconds(), t, 2);
}
function bT(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function xT(e, t) {
  return Q(hi.count(vt(e) - 1, e), t, 2);
}
function y0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? vr(e) : vr.ceil(e);
}
function wT(e, t) {
  return e = y0(e), Q(vr.count(vt(e), e) + (vt(e).getDay() === 4), t, 2);
}
function _T(e) {
  return e.getDay();
}
function OT(e, t) {
  return Q(Oa.count(vt(e) - 1, e), t, 2);
}
function ST(e, t) {
  return Q(e.getFullYear() % 100, t, 2);
}
function AT(e, t) {
  return e = y0(e), Q(e.getFullYear() % 100, t, 2);
}
function PT(e, t) {
  return Q(e.getFullYear() % 1e4, t, 4);
}
function TT(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? vr(e) : vr.ceil(e), Q(e.getFullYear() % 1e4, t, 4);
}
function ET(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Q(t / 60 | 0, "0", 2) + Q(t % 60, "0", 2);
}
function Sy(e, t) {
  return Q(e.getUTCDate(), t, 2);
}
function MT(e, t) {
  return Q(e.getUTCHours(), t, 2);
}
function jT(e, t) {
  return Q(e.getUTCHours() % 12 || 12, t, 2);
}
function CT(e, t) {
  return Q(1 + di.count(yt(e), e), t, 3);
}
function g0(e, t) {
  return Q(e.getUTCMilliseconds(), t, 3);
}
function IT(e, t) {
  return g0(e, t) + "000";
}
function $T(e, t) {
  return Q(e.getUTCMonth() + 1, t, 2);
}
function RT(e, t) {
  return Q(e.getUTCMinutes(), t, 2);
}
function NT(e, t) {
  return Q(e.getUTCSeconds(), t, 2);
}
function DT(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qT(e, t) {
  return Q(pi.count(yt(e) - 1, e), t, 2);
}
function m0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? yr(e) : yr.ceil(e);
}
function kT(e, t) {
  return e = m0(e), Q(yr.count(yt(e), e) + (yt(e).getUTCDay() === 4), t, 2);
}
function LT(e) {
  return e.getUTCDay();
}
function BT(e, t) {
  return Q(Sa.count(yt(e) - 1, e), t, 2);
}
function FT(e, t) {
  return Q(e.getUTCFullYear() % 100, t, 2);
}
function UT(e, t) {
  return e = m0(e), Q(e.getUTCFullYear() % 100, t, 2);
}
function WT(e, t) {
  return Q(e.getUTCFullYear() % 1e4, t, 4);
}
function HT(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? yr(e) : yr.ceil(e), Q(e.getUTCFullYear() % 1e4, t, 4);
}
function zT() {
  return "+0000";
}
function Ay() {
  return "%";
}
function Py(e) {
  return +e;
}
function Ty(e) {
  return Math.floor(+e / 1e3);
}
var nr, b0, x0;
GT({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function GT(e) {
  return nr = GP(e), b0 = nr.format, nr.parse, x0 = nr.utcFormat, nr.utcParse, nr;
}
function KT(e) {
  return new Date(e);
}
function VT(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Lf(e, t, r, n, a, i, o, u, s, c) {
  var f = Af(), l = f.invert, d = f.domain, p = c(".%L"), g = c(":%S"), v = c("%I:%M"), h = c("%I %p"), m = c("%a %d"), x = c("%b %d"), w = c("%B"), _ = c("%Y");
  function y(b) {
    return (s(b) < b ? p : u(b) < b ? g : o(b) < b ? v : i(b) < b ? h : n(b) < b ? a(b) < b ? m : x : r(b) < b ? w : _)(b);
  }
  return f.invert = function(b) {
    return new Date(l(b));
  }, f.domain = function(b) {
    return arguments.length ? d(Array.from(b, VT)) : d().map(KT);
  }, f.ticks = function(b) {
    var O = d();
    return e(O[0], O[O.length - 1], b ?? 10);
  }, f.tickFormat = function(b, O) {
    return O == null ? y : c(O);
  }, f.nice = function(b) {
    var O = d();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? d(o0(O, b)) : f;
  }, f.copy = function() {
    return kn(f, Lf(e, t, r, n, a, i, o, u, s, c));
  }, f;
}
function XT() {
  return ze.apply(Lf(HP, zP, vt, qf, hi, Ln, Nf, $f, Bt, b0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function YT() {
  return ze.apply(Lf(UP, WP, yt, kf, pi, di, Df, Rf, Bt, x0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function vi() {
  var e = 0, t = 1, r, n, a, i, o = Me, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(a === 0 ? 0.5 : (l = (i(l) - r) * a, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(d) {
      var p, g;
      return arguments.length ? ([p, g] = d, o = l(p, g), c) : [o(0), o(1)];
    };
  }
  return c.range = f(jr), c.rangeRound = f(Sf), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return i = l, r = l(e), n = l(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function jt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function w0() {
  var e = Mt(vi()(Me));
  return e.copy = function() {
    return jt(e, w0());
  }, xt.apply(e, arguments);
}
function _0() {
  var e = Ef(vi()).domain([1, 10]);
  return e.copy = function() {
    return jt(e, _0()).base(e.base());
  }, xt.apply(e, arguments);
}
function O0() {
  var e = Mf(vi());
  return e.copy = function() {
    return jt(e, O0()).constant(e.constant());
  }, xt.apply(e, arguments);
}
function Bf() {
  var e = jf(vi());
  return e.copy = function() {
    return jt(e, Bf()).exponent(e.exponent());
  }, xt.apply(e, arguments);
}
function ZT() {
  return Bf.apply(null, arguments).exponent(0.5);
}
function S0() {
  var e = [], t = Me;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Dn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(At), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => qA(e, i / n));
  }, r.copy = function() {
    return S0(t).domain(e);
  }, xt.apply(r, arguments);
}
function yi() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, u, s, c = Me, f, l = !1, d;
  function p(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +f(v)) - i) * (n * v < n * i ? u : s), c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  p.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, a = f(e = +e), i = f(t = +t), o = f(r = +r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(v) {
    return arguments.length ? (l = !!v, p) : l;
  }, p.interpolator = function(v) {
    return arguments.length ? (c = v, p) : c;
  };
  function g(v) {
    return function(h) {
      var m, x, w;
      return arguments.length ? ([m, x, w] = h, c = cP(v, [m, x, w]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = g(jr), p.rangeRound = g(Sf), p.unknown = function(v) {
    return arguments.length ? (d = v, p) : d;
  }, function(v) {
    return f = v, a = v(e), i = v(t), o = v(r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function A0() {
  var e = Mt(yi()(Me));
  return e.copy = function() {
    return jt(e, A0());
  }, xt.apply(e, arguments);
}
function P0() {
  var e = Ef(yi()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return jt(e, P0()).base(e.base());
  }, xt.apply(e, arguments);
}
function T0() {
  var e = Mf(yi());
  return e.copy = function() {
    return jt(e, T0()).constant(e.constant());
  }, xt.apply(e, arguments);
}
function Ff() {
  var e = jf(yi());
  return e.copy = function() {
    return jt(e, Ff()).exponent(e.exponent());
  }, xt.apply(e, arguments);
}
function JT() {
  return Ff.apply(null, arguments).exponent(0.5);
}
const Ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: nn,
  scaleDiverging: A0,
  scaleDivergingLog: P0,
  scaleDivergingPow: Ff,
  scaleDivergingSqrt: JT,
  scaleDivergingSymlog: T0,
  scaleIdentity: i0,
  scaleImplicit: al,
  scaleLinear: wa,
  scaleLog: u0,
  scaleOrdinal: wf,
  scalePoint: Gr,
  scalePow: Cf,
  scaleQuantile: l0,
  scaleQuantize: f0,
  scaleRadial: c0,
  scaleSequential: w0,
  scaleSequentialLog: _0,
  scaleSequentialPow: Bf,
  scaleSequentialQuantile: S0,
  scaleSequentialSqrt: ZT,
  scaleSequentialSymlog: O0,
  scaleSqrt: IP,
  scaleSymlog: s0,
  scaleThreshold: d0,
  scaleTime: XT,
  scaleUtc: YT,
  tickFormat: a0
}, Symbol.toStringTag, { value: "Module" }));
var Ks, My;
function E0() {
  if (My) return Ks;
  My = 1;
  var e = Tr();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var u = r[i], s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : a(s, c)))
        var c = s, f = u;
    }
    return f;
  }
  return Ks = t, Ks;
}
var Vs, jy;
function QT() {
  if (jy) return Vs;
  jy = 1;
  function e(t, r) {
    return t > r;
  }
  return Vs = e, Vs;
}
var Xs, Cy;
function eE() {
  if (Cy) return Xs;
  Cy = 1;
  var e = E0(), t = QT(), r = Mr();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Xs = n, Xs;
}
var tE = eE();
const gi = /* @__PURE__ */ ie(tE);
var Ys, Iy;
function rE() {
  if (Iy) return Ys;
  Iy = 1;
  function e(t, r) {
    return t < r;
  }
  return Ys = e, Ys;
}
var Zs, $y;
function nE() {
  if ($y) return Zs;
  $y = 1;
  var e = E0(), t = rE(), r = Mr();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Zs = n, Zs;
}
var aE = nE();
const mi = /* @__PURE__ */ ie(aE);
var Js, Ry;
function iE() {
  if (Ry) return Js;
  Ry = 1;
  var e = rf(), t = Et(), r = qb(), n = Ne();
  function a(i, o) {
    var u = n(i) ? e : r;
    return u(i, t(o, 3));
  }
  return Js = a, Js;
}
var Qs, Ny;
function oE() {
  if (Ny) return Qs;
  Ny = 1;
  var e = Nb(), t = iE();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Qs = r, Qs;
}
var uE = oE();
const sE = /* @__PURE__ */ ie(uE);
var ec, Dy;
function cE() {
  if (Dy) return ec;
  Dy = 1;
  var e = yf();
  function t(r, n) {
    return e(r, n);
  }
  return ec = t, ec;
}
var lE = cE();
const Uf = /* @__PURE__ */ ie(lE);
var Cr = 1e9, fE = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Hf, le = !0, He = "[DecimalError] ", Ht = He + "Invalid argument: ", Wf = He + "Exponent out of range: ", Ir = Math.floor, qt = Math.pow, dE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Le, Oe = 1e7, ue = 7, M0 = 9007199254740991, Aa = Ir(M0 / ue), U = {};
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
U.decimalPlaces = U.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ue;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function(e) {
  return ht(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return ne(ht(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function(e) {
  return !this.cmp(e);
};
U.exponent = function() {
  return ye(this);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function() {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function() {
  return this.s < 0;
};
U.isPositive = U.ispos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return this.s === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Le)) throw Error(He + "NaN");
  if (r.s < 1) throw Error(He + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Le) ? new n(0) : (le = !1, t = ht(cn(r, i), cn(e, i), i), le = !0, ne(t, a));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? I0(t, e) : j0(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(He + "NaN");
  return r.s ? (le = !1, t = ht(r, e, 0, 1).times(e), le = !0, r.minus(t)) : ne(new n(r), a);
};
U.naturalExponential = U.exp = function() {
  return C0(this);
};
U.naturalLogarithm = U.ln = function() {
  return cn(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
U.plus = U.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? j0(t, e) : I0(t, (e.s = -e.s, e));
};
U.precision = U.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ht + e);
  if (t = ye(a) + 1, n = a.d.length - 1, r = n * ue + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, a, i, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(He + "NaN");
  }
  for (e = ye(u), le = !1, a = Math.sqrt(+u), a == 0 || a == 1 / 0 ? (t = rt(u.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = Ir((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(a.toString()), r = s.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(ht(u, i, o + 2)).times(0.5), rt(i.d).slice(0, o) === (t = rt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (ne(i, r + 1, 0), i.times(i).eq(u)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return le = !0, ne(n, r);
};
U.times = U.mul = function(e) {
  var t, r, n, a, i, o, u, s, c, f = this, l = f.constructor, d = f.d, p = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, s = d.length, c = p.length, s < c && (i = d, d = p, p = i, o = s, s = c, c = o), i = [], o = s + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = s + n; a > n; )
      u = i[a] + p[n] * d[a - n - 1] + t, i[a--] = u % Oe | 0, t = u / Oe | 0;
    i[a] = (i[a] + t) % Oe | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, le ? ne(e, l.precision) : e;
};
U.toDecimalPlaces = U.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (ot(e, 0, Cr), t === void 0 ? t = n.rounding : ot(t, 0, 8), ne(r, e + ye(r) + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = Kt(n, !0) : (ot(e, 0, Cr), t === void 0 ? t = a.rounding : ot(t, 0, 8), n = ne(new a(n), e + 1, t), r = Kt(n, !0, e + 1)), r;
};
U.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? Kt(a) : (ot(e, 0, Cr), t === void 0 ? t = i.rounding : ot(t, 0, 8), n = ne(new i(a), e + ye(a) + 1, t), r = Kt(n.abs(), !1, e + ye(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function() {
  var e = this, t = e.constructor;
  return ne(new t(e), ye(e) + 1, t.rounding);
};
U.toNumber = function() {
  return +this;
};
U.toPower = U.pow = function(e) {
  var t, r, n, a, i, o, u = this, s = u.constructor, c = 12, f = +(e = new s(e));
  if (!e.s) return new s(Le);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(He + "Infinity");
    return u;
  }
  if (u.eq(Le)) return u;
  if (n = s.precision, e.eq(Le)) return ne(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = u.s, o) {
    if ((r = f < 0 ? -f : f) <= M0) {
      for (a = new s(Le), t = Math.ceil(n / ue + 4), le = !1; r % 2 && (a = a.times(u), ky(a.d, t)), r = Ir(r / 2), r !== 0; )
        u = u.times(u), ky(u.d, t);
      return le = !0, e.s < 0 ? new s(Le).div(a) : ne(a, n);
    }
  } else if (i < 0) throw Error(He + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, le = !1, a = e.times(cn(u, n + c)), le = !0, a = C0(a), a.s = i, a;
};
U.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = ye(a), n = Kt(a, r <= i.toExpNeg || r >= i.toExpPos)) : (ot(e, 1, Cr), t === void 0 ? t = i.rounding : ot(t, 0, 8), a = ne(new i(a), e, t), r = ye(a), n = Kt(a, e <= r || r <= i.toExpNeg, e)), n;
};
U.toSignificantDigits = U.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (ot(e, 1, Cr), t === void 0 ? t = n.rounding : ot(t, 0, 8)), ne(new n(r), e, t);
};
U.toString = U.valueOf = U.val = U.toJSON = U[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = ye(e), r = e.constructor;
  return Kt(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function j0(e, t) {
  var r, n, a, i, o, u, s, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), le ? ne(t, l) : t;
  if (s = e.d, c = t.d, o = e.e, a = t.e, s = s.slice(), i = o - a, i) {
    for (i < 0 ? (n = s, i = -i, u = c.length) : (n = c, a = o, u = s.length), o = Math.ceil(l / ue), u = o > u ? o + 1 : u + 1, i > u && (i = u, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, i = c.length, u - i < 0 && (i = u, n = c, c = s, s = n), r = 0; i; )
    r = (s[--i] = s[i] + c[i] + r) / Oe | 0, s[i] %= Oe;
  for (r && (s.unshift(r), ++a), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = a, le ? ne(t, l) : t;
}
function ot(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ht + e);
}
function rt(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = ue - n.length, r && (i += _t(r)), i += n;
    o = e[t], n = o + "", r = ue - n.length, r && (i += _t(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var ht = /* @__PURE__ */ (function() {
  function e(n, a) {
    var i, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      i = n[u] * a + o, n[u] = i % Oe | 0, o = i / Oe | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var u, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (u = s = 0; u < i; u++)
        if (n[u] != a[u]) {
          s = n[u] > a[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * Oe + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var u, s, c, f, l, d, p, g, v, h, m, x, w, _, y, b, O, S, A = n.constructor, C = n.s == a.s ? 1 : -1, T = n.d, P = a.d;
    if (!n.s) return new A(n);
    if (!a.s) throw Error(He + "Division by zero");
    for (s = n.e - a.e, O = P.length, y = T.length, p = new A(C), g = p.d = [], c = 0; P[c] == (T[c] || 0); ) ++c;
    if (P[c] > (T[c] || 0) && --s, i == null ? x = i = A.precision : o ? x = i + (ye(n) - ye(a)) + 1 : x = i, x < 0) return new A(0);
    if (x = x / ue + 2 | 0, c = 0, O == 1)
      for (f = 0, P = P[0], x++; (c < y || f) && x--; c++)
        w = f * Oe + (T[c] || 0), g[c] = w / P | 0, f = w % P | 0;
    else {
      for (f = Oe / (P[0] + 1) | 0, f > 1 && (P = e(P, f), T = e(T, f), O = P.length, y = T.length), _ = O, v = T.slice(0, O), h = v.length; h < O; ) v[h++] = 0;
      S = P.slice(), S.unshift(0), b = P[0], P[1] >= Oe / 2 && ++b;
      do
        f = 0, u = t(P, v, O, h), u < 0 ? (m = v[0], O != h && (m = m * Oe + (v[1] || 0)), f = m / b | 0, f > 1 ? (f >= Oe && (f = Oe - 1), l = e(P, f), d = l.length, h = v.length, u = t(l, v, d, h), u == 1 && (f--, r(l, O < d ? S : P, d))) : (f == 0 && (u = f = 1), l = P.slice()), d = l.length, d < h && l.unshift(0), r(v, l, h), u == -1 && (h = v.length, u = t(P, v, O, h), u < 1 && (f++, r(v, O < h ? S : P, h))), h = v.length) : u === 0 && (f++, v = [0]), g[c++] = f, u && v[0] ? v[h++] = T[_] || 0 : (v = [T[_]], h = 1);
      while ((_++ < y || v[0] !== void 0) && x--);
    }
    return g[0] || g.shift(), p.e = s, ne(p, o ? i + ye(p) + 1 : i);
  };
})();
function C0(e, t) {
  var r, n, a, i, o, u, s = 0, c = 0, f = e.constructor, l = f.precision;
  if (ye(e) > 16) throw Error(Wf + ye(e));
  if (!e.s) return new f(Le);
  for (le = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(qt(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = a = i = new f(Le), f.precision = u; ; ) {
    if (a = ne(a.times(e), u), r = r.times(++s), o = i.plus(ht(a, r, u)), rt(o.d).slice(0, u) === rt(i.d).slice(0, u)) {
      for (; c--; ) i = ne(i.times(i), u);
      return f.precision = l, t == null ? (le = !0, ne(i, l)) : i;
    }
    i = o;
  }
}
function ye(e) {
  for (var t = e.e * ue, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function tc(e, t, r) {
  if (t > e.LN10.sd())
    throw le = !0, r && (e.precision = r), Error(He + "LN10 precision limit exceeded");
  return ne(new e(e.LN10), t);
}
function _t(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function cn(e, t) {
  var r, n, a, i, o, u, s, c, f, l = 1, d = 10, p = e, g = p.d, v = p.constructor, h = v.precision;
  if (p.s < 1) throw Error(He + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Le)) return new v(0);
  if (t == null ? (le = !1, c = h) : c = t, p.eq(10))
    return t == null && (le = !0), tc(v, c);
  if (c += d, v.precision = c, r = rt(g), n = r.charAt(0), i = ye(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = rt(p.d), n = r.charAt(0), l++;
    i = ye(p), n > 1 ? (p = new v("0." + r), i++) : p = new v(n + "." + r.slice(1));
  } else
    return s = tc(v, c + 2, h).times(i + ""), p = cn(new v(n + "." + r.slice(1)), c - d).plus(s), v.precision = h, t == null ? (le = !0, ne(p, h)) : p;
  for (u = o = p = ht(p.minus(Le), p.plus(Le), c), f = ne(p.times(p), c), a = 3; ; ) {
    if (o = ne(o.times(f), c), s = u.plus(ht(o, new v(a), c)), rt(s.d).slice(0, c) === rt(u.d).slice(0, c))
      return u = u.times(2), i !== 0 && (u = u.plus(tc(v, c + 2, h).times(i + ""))), u = ht(u, new v(l), c), v.precision = h, t == null ? (le = !0, ne(u, h)) : u;
    u = s, a += 2;
  }
}
function qy(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = Ir(r / ue), e.d = [], n = (r + 1) % ue, r < 0 && (n += ue), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= ue; n < a; ) e.d.push(+t.slice(n, n += ue));
      t = t.slice(n), n = ue - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), le && (e.e > Aa || e.e < -Aa)) throw Error(Wf + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ne(e, t, r) {
  var n, a, i, o, u, s, c, f, l = e.d;
  for (o = 1, i = l[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += ue, a = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / ue), i = l.length, f >= i) return e;
    for (c = i = l[f], o = 1; i >= 10; i /= 10) o++;
    n %= ue, a = n - ue + o;
  }
  if (r !== void 0 && (i = qt(10, o - a - 1), u = c / i % 10 | 0, s = t < 0 || l[f + 1] !== void 0 || c % i, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / qt(10, o - a) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return s ? (i = ye(e), l.length = 1, t = t - i - 1, l[0] = qt(10, (ue - t % ue) % ue), e.e = Ir(-t / ue) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, i = 1, f--) : (l.length = f + 1, i = qt(10, ue - n), l[f] = a > 0 ? (c / qt(10, o - a) % qt(10, a) | 0) * i : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += i) == Oe && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += i, l[f] != Oe) break;
        l[f--] = 0, i = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (le && (e.e > Aa || e.e < -Aa))
    throw Error(Wf + ye(e));
  return e;
}
function I0(e, t) {
  var r, n, a, i, o, u, s, c, f, l, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), le ? ne(t, p) : t;
  if (s = e.d, l = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), a = Math.max(Math.ceil(p / ue), u) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = s.length, u = l.length, f = a < u, f && (u = a), a = 0; a < u; a++)
      if (s[a] != l[a]) {
        f = s[a] < l[a];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, t.s = -t.s), u = s.length, a = l.length - u; a > 0; --a) s[u++] = 0;
  for (a = l.length; a > o; ) {
    if (s[--a] < l[a]) {
      for (i = a; i && s[--i] === 0; ) s[i] = Oe - 1;
      --s[i], s[a] += Oe;
    }
    s[a] -= l[a];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, le ? ne(t, p) : t) : new d(0);
}
function Kt(e, t, r) {
  var n, a = ye(e), i = rt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + _t(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + _t(-a - 1) + i, r && (n = r - o) > 0 && (i += _t(n))) : a >= o ? (i += _t(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + _t(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += _t(n))), e.s < 0 ? "-" + i : i;
}
function ky(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function $0(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(Ht + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return qy(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Ht + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, dE.test(i)) qy(o, i);
    else throw Error(Ht + i);
  }
  if (a.prototype = U, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = $0, a.config = a.set = hE, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function hE(e) {
  if (!e || typeof e != "object")
    throw Error(He + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    Cr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[r = a[t]]) !== void 0)
      if (Ir(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Ht + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ht + r + ": " + n);
  return this;
}
var Hf = $0(fE);
Le = new Hf(1);
const re = Hf;
function pE(e) {
  return mE(e) || gE(e) || yE(e) || vE();
}
function vE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yE(e, t) {
  if (e) {
    if (typeof e == "string") return sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sl(e, t);
  }
}
function gE(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function mE(e) {
  if (Array.isArray(e)) return sl(e);
}
function sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var bE = function(t) {
  return t;
}, R0 = {}, N0 = function(t) {
  return t === R0;
}, Ly = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && N0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, xE = function e(t, r) {
  return t === 1 ? r : Ly(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(u) {
      return u !== R0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Ly(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = a.map(function(l) {
        return N0(l) ? s.shift() : l;
      });
      return r.apply(void 0, pE(f).concat(s));
    }));
  });
}, bi = function(t) {
  return xE(t.length, t);
}, cl = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, wE = bi(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), _E = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return bE;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, i.apply(void 0, arguments));
  };
}, ll = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, D0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(u, s) {
      return u === r[s];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function OE(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new re(e).abs().log(10).toNumber()) + 1, t;
}
function SE(e, t, r) {
  for (var n = new re(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var AE = bi(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), PE = bi(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), TE = bi(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const xi = {
  rangeStep: SE,
  getDigitCount: OE,
  interpolateNumber: AE,
  uninterpolateNumber: PE,
  uninterpolateTruncation: TE
};
function fl(e) {
  return jE(e) || ME(e) || q0(e) || EE();
}
function EE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ME(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function jE(e) {
  if (Array.isArray(e)) return dl(e);
}
function ln(e, t) {
  return $E(e) || IE(e, t) || q0(e, t) || CE();
}
function CE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q0(e, t) {
  if (e) {
    if (typeof e == "string") return dl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dl(e, t);
  }
}
function dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function IE(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      a = !0, i = s;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function $E(e) {
  if (Array.isArray(e)) return e;
}
function k0(e) {
  var t = ln(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function L0(e, t, r) {
  if (e.lte(0))
    return new re(0);
  var n = xi.getDigitCount(e.toNumber()), a = new re(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, u = new re(Math.ceil(i.div(o).toNumber())).add(r).mul(o), s = u.mul(a);
  return t ? s : new re(Math.ceil(s));
}
function RE(e, t, r) {
  var n = 1, a = new re(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new re(10).pow(xi.getDigitCount(e) - 1), a = new re(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new re(Math.floor(e)));
  } else e === 0 ? a = new re(Math.floor((t - 1) / 2)) : r || (a = new re(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = _E(wE(function(s) {
    return a.add(new re(s - o).mul(n)).toNumber();
  }), cl);
  return u(0, t);
}
function B0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new re(0),
      tickMin: new re(0),
      tickMax: new re(0)
    };
  var i = L0(new re(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new re(0) : (o = new re(e).add(t).div(2), o = o.sub(new re(o).mod(i)));
  var u = Math.ceil(o.sub(e).div(i).toNumber()), s = Math.ceil(new re(t).sub(o).div(i).toNumber()), c = u + s + 1;
  return c > r ? B0(e, t, r, n, a + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: i,
    tickMin: o.sub(new re(u).mul(i)),
    tickMax: o.add(new re(s).mul(i))
  });
}
function NE(e) {
  var t = ln(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), u = k0([r, n]), s = ln(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(fl(cl(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(fl(cl(0, a - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? ll(l) : l;
  }
  if (c === f)
    return RE(c, a, i);
  var d = B0(c, f, o, i), p = d.step, g = d.tickMin, v = d.tickMax, h = xi.rangeStep(g, v.add(new re(0.1).mul(p)), p);
  return r > n ? ll(h) : h;
}
function DE(e, t) {
  var r = ln(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = k0([n, a]), u = ln(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (s === c)
    return [s];
  var f = Math.max(t, 2), l = L0(new re(c).sub(s).div(f - 1), i, 0), d = [].concat(fl(xi.rangeStep(new re(s), new re(c).sub(new re(0.99).mul(l)), l)), [c]);
  return n > a ? ll(d) : d;
}
var qE = D0(NE), kE = D0(DE), LE = "Invariant failed";
function Vt(e, t) {
  throw new Error(LE);
}
var BE = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
function FE(e, t) {
  return zE(e) || HE(e, t) || WE(e, t) || UE();
}
function UE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WE(e, t) {
  if (e) {
    if (typeof e == "string") return By(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return By(e, t);
  }
}
function By(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function zE(e) {
  if (Array.isArray(e)) return e;
}
function GE(e, t) {
  if (e == null) return {};
  var r = KE(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function VE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function XE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, W0(n.key), n);
  }
}
function YE(e, t, r) {
  return t && XE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZE(e, t, r) {
  return t = Ta(t), JE(e, F0() ? Reflect.construct(t, r || [], Ta(e).constructor) : t.apply(e, r));
}
function JE(e, t) {
  if (t && (gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QE(e);
}
function QE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function F0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (F0 = function() {
    return !!e;
  })();
}
function Ta(e) {
  return Ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ta(e);
}
function eM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hl(e, t);
}
function hl(e, t) {
  return hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hl(e, t);
}
function U0(e, t, r) {
  return t = W0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W0(e) {
  var t = tM(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function tM(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wi = /* @__PURE__ */ (function(e) {
  function t() {
    return VE(this, t), ZE(this, t, arguments);
  }
  return eM(t, e), YE(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, d = GE(n, BE), p = ce(d, !1);
      this.props.direction === "x" && f.type !== "number" && Vt();
      var g = s.map(function(v) {
        var h = c(v, u), m = h.x, x = h.y, w = h.value, _ = h.errorVal;
        if (!_)
          return null;
        var y = [], b, O;
        if (Array.isArray(_)) {
          var S = FE(_, 2);
          b = S[0], O = S[1];
        } else
          b = O = _;
        if (i === "vertical") {
          var A = f.scale, C = x + a, T = C + o, P = C - o, M = A(w - b), I = A(w + O);
          y.push({
            x1: I,
            y1: T,
            x2: I,
            y2: P
          }), y.push({
            x1: M,
            y1: C,
            x2: I,
            y2: C
          }), y.push({
            x1: M,
            y1: T,
            x2: M,
            y2: P
          });
        } else if (i === "horizontal") {
          var j = l.scale, R = m + a, D = R - o, q = R + o, k = j(w - b), W = j(w + O);
          y.push({
            x1: D,
            y1: W,
            x2: q,
            y2: W
          }), y.push({
            x1: R,
            y1: k,
            x2: R,
            y2: W
          }), y.push({
            x1: D,
            y1: k,
            x2: q,
            y2: k
          });
        }
        return /* @__PURE__ */ E.createElement(Te, Pa({
          className: "recharts-errorBar",
          key: "bar-".concat(y.map(function(G) {
            return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
          }))
        }, p), y.map(function(G) {
          return /* @__PURE__ */ E.createElement("line", Pa({}, G, {
            key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-errorBars"
      }, g);
    }
  }]);
})(E.Component);
U0(wi, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
U0(wi, "displayName", "ErrorBar");
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fy(Object(r), !0).forEach(function(n) {
      rM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rM(e, t, r) {
  return t = nM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nM(e) {
  var t = aM(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function aM(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var H0 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = ke(r, or);
  if (!o)
    return null;
  var u = or.defaultProps, s = u !== void 0 ? Nt(Nt({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(f, l) {
    var d = l.item, p = l.props, g = p.sectors || p.data || [];
    return f.concat(g.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, d = l.type.defaultProps, p = d !== void 0 ? Nt(Nt({}, d), l.props) : {}, g = p.dataKey, v = p.name, h = p.legendType, m = p.hide;
    return {
      inactive: m,
      dataKey: g,
      type: s.iconType || h || "square",
      color: zf(l),
      value: v || g,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), Nt(Nt(Nt({}, s), or.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function Uy(e) {
  return sM(e) || uM(e) || oM(e) || iM();
}
function iM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oM(e, t) {
  if (e) {
    if (typeof e == "string") return pl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pl(e, t);
  }
}
function uM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sM(e) {
  if (Array.isArray(e)) return pl(e);
}
function pl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wy(Object(r), !0).forEach(function(n) {
      sr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sr(e, t, r) {
  return t = cM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cM(e) {
  var t = lM(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function lM(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Je(e, t, r) {
  return Y(e) || Y(t) ? r : we(t) ? nt(e, t, r) : J(t) ? t(e) : r;
}
function Kr(e, t, r, n) {
  var a = sE(e, function(u) {
    return Je(u, t);
  });
  if (r === "number") {
    var i = a.filter(function(u) {
      return B(u) || parseFloat(u);
    });
    return i.length ? [mi(i), gi(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(u) {
    return !Y(u);
  }) : a;
  return o.map(function(u) {
    return we(u) || u instanceof Date ? u : "";
  });
}
var fM = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var s = i.range, c = 0; c < u; c++) {
      var f = c > 0 ? a[c - 1].coordinate : a[u - 1].coordinate, l = a[c].coordinate, d = c >= u - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (tt(l - f) !== tt(d - l)) {
        var g = [];
        if (tt(d - l) === tt(s[1] - s[0])) {
          p = d;
          var v = l + s[1] - s[0];
          g[0] = Math.min(v, (v + f) / 2), g[1] = Math.max(v, (v + f) / 2);
        } else {
          p = f;
          var h = d + s[1] - s[0];
          g[0] = Math.min(l, (h + l) / 2), g[1] = Math.max(l, (h + l) / 2);
        }
        var m = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (t > m[0] && t <= m[1] || t >= g[0] && t <= g[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var x = Math.min(f, d), w = Math.max(f, d);
        if (t > (x + l) / 2 && t <= (w + l) / 2) {
          o = a[c].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < u; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
        break;
      }
  return o;
}, zf = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, u = i.fill, s;
  switch (a) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, dM = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, u = Object.keys(i), s = 0, c = u.length; s < c; s++)
    for (var f = i[u[s]].stackGroups, l = Object.keys(f), d = 0, p = l.length; d < p; d++) {
      var g = f[l[d]], v = g.items, h = g.cateAxisId, m = v.filter(function(O) {
        return dt(O.type).indexOf("Bar") >= 0;
      });
      if (m && m.length) {
        var x = m[0].type.defaultProps, w = x !== void 0 ? he(he({}, x), m[0].props) : m[0].props, _ = w.barSize, y = w[h];
        o[y] || (o[y] = []);
        var b = Y(_) ? r : _;
        o[y].push({
          item: m[0],
          stackList: m.slice(1),
          barSize: Y(b) ? void 0 : Xe(b, n, 0)
        });
      }
    }
  return o;
}, hM = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = Xe(r, a, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / s, g = o.reduce(function(_, y) {
      return _ + y.barSize || 0;
    }, 0);
    g += (s - 1) * c, g >= a && (g -= (s - 1) * c, c = 0), g >= a && p > 0 && (d = !0, p *= 0.9, g = s * p);
    var v = (a - g) / 2 >> 0, h = {
      offset: v - c,
      size: 0
    };
    f = o.reduce(function(_, y) {
      var b = {
        item: y.item,
        position: {
          offset: h.offset + h.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : y.barSize
        }
      }, O = [].concat(Uy(_), [b]);
      return h = O[O.length - 1].position, y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: h
        });
      }), O;
    }, l);
  } else {
    var m = Xe(n, a, 0, !0);
    a - 2 * m - (s - 1) * c <= 0 && (c = 0);
    var x = (a - 2 * m - (s - 1) * c) / s;
    x > 1 && (x >>= 0);
    var w = u === +u ? Math.min(x, u) : x;
    f = o.reduce(function(_, y, b) {
      var O = [].concat(Uy(_), [{
        item: y.item,
        position: {
          offset: m + (x + c) * b + (x - w) / 2,
          size: w
        }
      }]);
      return y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, pM = function(t, r, n, a) {
  var i = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = H0({
    children: i,
    legendWidth: s
  });
  if (c) {
    var f = a || {}, l = f.width, d = f.height, p = c.align, g = c.verticalAlign, v = c.layout;
    if ((v === "vertical" || v === "horizontal" && g === "middle") && p !== "center" && B(t[p]))
      return he(he({}, t), {}, sr({}, p, t[p] + (l || 0)));
    if ((v === "horizontal" || v === "vertical" && p === "center") && g !== "middle" && B(t[g]))
      return he(he({}, t), {}, sr({}, g, t[g] + (d || 0)));
  }
  return t;
}, vM = function(t, r, n) {
  return Y(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, z0 = function(t, r, n, a, i) {
  var o = r.props.children, u = Ze(o, wi).filter(function(c) {
    return vM(a, i, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = Je(f, n);
      if (Y(l)) return c;
      var d = Array.isArray(l) ? [mi(l), gi(l)] : [l, l], p = s.reduce(function(g, v) {
        var h = Je(f, v, 0), m = d[0] - Math.abs(Array.isArray(h) ? h[0] : h), x = d[1] + Math.abs(Array.isArray(h) ? h[1] : h);
        return [Math.min(m, g[0]), Math.max(x, g[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, yM = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    return z0(t, u, n, i, a);
  }).filter(function(u) {
    return !Y(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, G0 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && z0(t, s, c, a) || Kr(t, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, K0 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, S2 = function(t, r, n, a) {
  if (a)
    return t.map(function(s) {
      return s.coordinate;
    });
  var i, o, u = t.map(function(s) {
    return s.coordinate === r && (i = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return i || u.push(r), o || u.push(n), u;
}, Hr = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && u?.length >= 2 ? tt(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var d = i ? i.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !Rn(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: l,
      index: d,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: a(l) + c,
      value: l,
      offset: c
    };
  }) : a.domain().map(function(l, d) {
    return {
      coordinate: a(l) + c,
      value: i ? i[l] : l,
      index: d,
      offset: c
    };
  });
}, rc = /* @__PURE__ */ new WeakMap(), Yn = function(t, r) {
  if (typeof r != "function")
    return t;
  rc.has(t) || rc.set(t, /* @__PURE__ */ new WeakMap());
  var n = rc.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, V0 = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, u = t.axisType;
  if (a === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: nn(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: wa(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Gr(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: nn(),
      realScaleType: "band"
    } : {
      scale: wa(),
      realScaleType: "linear"
    };
  if (Gt(a)) {
    var s = "scale".concat(ni(a));
    return {
      scale: (Ey[s] || Gr)(),
      realScaleType: Ey[s] ? s : "point"
    };
  }
  return J(a) ? {
    scale: a
  } : {
    scale: Gr(),
    realScaleType: "point"
  };
}, Hy = 1e-4, X0 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - Hy, o = Math.max(a[0], a[1]) + Hy, u = t(r[0]), s = t(r[n - 1]);
    (u < i || u > o || s < i || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, gM = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, mM = function(t, r) {
  if (!r || r.length !== 2 || !B(r[0]) || !B(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!B(t[0]) || t[0] < n) && (i[0] = n), (!B(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, bM = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, u = 0; u < r; ++u) {
        var s = Rn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = i, t[u][n][1] = i + s, i = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, xM = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var u = Rn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + u, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, wM = {
  sign: bM,
  // @ts-expect-error definitelytyped types are incorrect
  expand: i_,
  // @ts-expect-error definitelytyped types are incorrect
  none: cr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: o_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: u_,
  positive: xM
}, _M = function(t, r, n) {
  var a = r.map(function(u) {
    return u.props.dataKey;
  }), i = wM[n], o = a_().keys(a).value(function(u, s) {
    return +Je(u, s, 0);
  }).order(Wc).offset(i);
  return o(t);
}, OM = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, d) {
    var p, g = (p = d.type) !== null && p !== void 0 && p.defaultProps ? he(he({}, d.type.defaultProps), d.props) : d.props, v = g.stackId, h = g.hide;
    if (h)
      return l;
    var m = g[n], x = l[m] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (we(v)) {
      var w = x.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      w.items.push(d), x.hasStack = !0, x.stackGroups[v] = w;
    } else
      x.stackGroups[ri("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return he(he({}, l), {}, sr({}, m, x));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, d) {
    var p = c[d];
    if (p.hasStack) {
      var g = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(v, h) {
        var m = p.stackGroups[h];
        return he(he({}, v), {}, sr({}, h, {
          numericAxisId: n,
          cateAxisId: a,
          items: m.items,
          stackedData: _M(t, m.items, i)
        }));
      }, g);
    }
    return he(he({}, l), {}, sr({}, d, p));
  }, f);
}, Y0 = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = qE(c, i, u);
    return t.domain([mi(f), gi(f)]), {
      niceTicks: f
    };
  }
  if (i && a === "number") {
    var l = t.domain(), d = kE(l, i, u);
    return {
      niceTicks: d
    };
  }
  return null;
};
function A2(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Y(a[t.dataKey])) {
      var u = ra(r, "value", a[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var s = Je(a, Y(o) ? t.dataKey : o);
  return Y(s) ? null : t.scale(s);
}
var zy = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + a : null;
  var s = Je(o, r.dataKey, r.domain[u]);
  return Y(s) ? null : r.scale(s) - i / 2 + a;
}, SM = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, AM = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (we(i)) {
    var o = r[i];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, PM = function(t) {
  return t.reduce(function(r, n) {
    return [mi(n.concat([r[0]]).filter(B)), gi(n.concat([r[1]]).filter(B))];
  }, [1 / 0, -1 / 0]);
}, Z0 = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = PM(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, Gy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ky = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vl = function(t, r, n) {
  if (J(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (B(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Gy.test(t[0])) {
    var i = +Gy.exec(t[0])[1];
    a[0] = r[0] - i;
  } else J(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (B(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Ky.test(t[1])) {
    var o = +Ky.exec(t[1])[1];
    a[1] = r[1] + o;
  } else J(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Ea = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = mf(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = i.length; u < s; u++) {
      var c = i[u], f = i[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Vy = function(t, r, n) {
  return !t || !t.length || Uf(t, nt(n, "type.defaultProps.domain")) ? r : t;
}, J0 = function(t, r) {
  var n = t.type.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return he(he({}, ce(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: u,
    name: i || a,
    color: zf(t),
    value: Je(r, a),
    type: s,
    payload: r,
    chartType: c,
    hide: f
  });
};
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function Xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xy(Object(r), !0).forEach(function(n) {
      Q0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q0(e, t, r) {
  return t = TM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TM(e) {
  var t = EM(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function EM(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MM(e, t) {
  return $M(e) || IM(e, t) || CM(e, t) || jM();
}
function jM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CM(e, t) {
  if (e) {
    if (typeof e == "string") return Yy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yy(e, t);
  }
}
function Yy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function IM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function $M(e) {
  if (Array.isArray(e)) return e;
}
var Ma = Math.PI / 180, RM = function(t) {
  return t * 180 / Math.PI;
}, Pe = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Ma * a) * n,
    y: r + Math.sin(-Ma * a) * n
  };
}, NM = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, P2 = function(t, r, n, a, i) {
  var o = t.width, u = t.height, s = t.startAngle, c = t.endAngle, f = Xe(t.cx, o, o / 2), l = Xe(t.cy, u, u / 2), d = NM(o, u, n), p = Xe(t.innerRadius, d, 0), g = Xe(t.outerRadius, d, d * 0.8), v = Object.keys(r);
  return v.reduce(function(h, m) {
    var x = r[m], w = x.domain, _ = x.reversed, y;
    if (Y(x.range))
      a === "angleAxis" ? y = [s, c] : a === "radiusAxis" && (y = [p, g]), _ && (y = [y[1], y[0]]);
    else {
      y = x.range;
      var b = y, O = MM(b, 2);
      s = O[0], c = O[1];
    }
    var S = V0(x, i), A = S.realScaleType, C = S.scale;
    C.domain(w).range(y), X0(C);
    var T = Y0(C, ct(ct({}, x), {}, {
      realScaleType: A
    })), P = ct(ct(ct({}, x), T), {}, {
      range: y,
      radius: g,
      realScaleType: A,
      scale: C,
      cx: f,
      cy: l,
      innerRadius: p,
      outerRadius: g,
      startAngle: s,
      endAngle: c
    });
    return ct(ct({}, h), {}, Q0({}, m, P));
  }, {});
}, DM = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, qM = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, u = DM({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - i) / u, c = Math.acos(s);
  return a > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: RM(c),
    angleInRadian: c
  };
}, kM = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, LM = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), u = Math.min(i, o);
  return t + u * 360;
}, Zy = function(t, r) {
  var n = t.x, a = t.y, i = qM({
    x: n,
    y: a
  }, r), o = i.radius, u = i.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = kM(r), l = f.startAngle, d = f.endAngle, p = u, g;
  if (l <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < l; )
      p += 360;
    g = p >= l && p <= d;
  } else {
    for (; p > l; )
      p -= 360;
    for (; p < d; )
      p += 360;
    g = p >= d && p <= l;
  }
  return g ? ct(ct({}, r), {}, {
    radius: o,
    angle: LM(p, r)
  }) : null;
}, T2 = function(t) {
  return !/* @__PURE__ */ Ye(t) && !J(t) && typeof t != "boolean" ? t.className : "";
};
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
var BM = ["offset"];
function FM(e) {
  return zM(e) || HM(e) || WM(e) || UM();
}
function UM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WM(e, t) {
  if (e) {
    if (typeof e == "string") return yl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yl(e, t);
  }
}
function HM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zM(e) {
  if (Array.isArray(e)) return yl(e);
}
function yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GM(e, t) {
  if (e == null) return {};
  var r = KM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jy(Object(r), !0).forEach(function(n) {
      VM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VM(e, t, r) {
  return t = XM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XM(e) {
  var t = YM(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function YM(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vn.apply(this, arguments);
}
var ZM = function(t) {
  var r = t.value, n = t.formatter, a = Y(t.children) ? r : t.children;
  return J(n) ? n(a) : a;
}, JM = function(t, r) {
  var n = tt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, QM = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, u = t.className, s = i, c = s.cx, f = s.cy, l = s.innerRadius, d = s.outerRadius, p = s.startAngle, g = s.endAngle, v = s.clockWise, h = (l + d) / 2, m = JM(p, g), x = m >= 0 ? 1 : -1, w, _;
  a === "insideStart" ? (w = p + x * o, _ = v) : a === "insideEnd" ? (w = g - x * o, _ = !v) : a === "end" && (w = g + x * o, _ = v), _ = m <= 0 ? _ : !_;
  var y = Pe(c, f, h, w), b = Pe(c, f, h, w + (_ ? 1 : -1) * 359), O = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), S = Y(t.id) ? ri("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ E.createElement("text", vn({}, n, {
    dominantBaseline: "central",
    className: se("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: S,
    d: O
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, ej = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, u = i.cy, s = i.innerRadius, c = i.outerRadius, f = i.startAngle, l = i.endAngle, d = (f + l) / 2;
  if (a === "outside") {
    var p = Pe(o, u, c + n, d), g = p.x, v = p.y;
    return {
      x: g,
      y: v,
      textAnchor: g >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var h = (s + c) / 2, m = Pe(o, u, h, d), x = m.x, w = m.y;
  return {
    x,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, tj = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, d = l * a, p = l > 0 ? "end" : "start", g = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, h = v * a, m = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end";
  if (i === "top") {
    var w = {
      x: u + c / 2,
      y: s - l * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return be(be({}, w), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var _ = {
      x: u + c / 2,
      y: s + f + d,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return be(be({}, _), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var y = {
      x: u - h,
      y: s + f / 2,
      textAnchor: m,
      verticalAnchor: "middle"
    };
    return be(be({}, y), n ? {
      width: Math.max(y.x - n.x, 0),
      height: f
    } : {});
  }
  if (i === "right") {
    var b = {
      x: u + c + h,
      y: s + f / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return be(be({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return i === "insideLeft" ? be({
    x: u + h,
    y: s + f / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, O) : i === "insideRight" ? be({
    x: u + c - h,
    y: s + f / 2,
    textAnchor: m,
    verticalAnchor: "middle"
  }, O) : i === "insideTop" ? be({
    x: u + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: g
  }, O) : i === "insideBottom" ? be({
    x: u + c / 2,
    y: s + f - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, O) : i === "insideTopLeft" ? be({
    x: u + h,
    y: s + d,
    textAnchor: x,
    verticalAnchor: g
  }, O) : i === "insideTopRight" ? be({
    x: u + c - h,
    y: s + d,
    textAnchor: m,
    verticalAnchor: g
  }, O) : i === "insideBottomLeft" ? be({
    x: u + h,
    y: s + f - d,
    textAnchor: x,
    verticalAnchor: p
  }, O) : i === "insideBottomRight" ? be({
    x: u + c - h,
    y: s + f - d,
    textAnchor: m,
    verticalAnchor: p
  }, O) : Er(i) && (B(i.x) || kt(i.x)) && (B(i.y) || kt(i.y)) ? be({
    x: u + Xe(i.x, c),
    y: s + Xe(i.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : be({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, rj = function(t) {
  return "cx" in t && B(t.cx);
};
function Ee(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = GM(e, BM), a = be({
    offset: r
  }, n), i = a.viewBox, o = a.position, u = a.value, s = a.children, c = a.content, f = a.className, l = f === void 0 ? "" : f, d = a.textBreakAll;
  if (!i || Y(u) && Y(s) && !/* @__PURE__ */ Ye(c) && !J(c))
    return null;
  if (/* @__PURE__ */ Ye(c))
    return /* @__PURE__ */ xe(c, a);
  var p;
  if (J(c)) {
    if (p = /* @__PURE__ */ Xa(c, a), /* @__PURE__ */ Ye(p))
      return p;
  } else
    p = ZM(a);
  var g = rj(i), v = ce(a, !0);
  if (g && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return QM(a, p, v);
  var h = g ? ej(a) : tj(a);
  return /* @__PURE__ */ E.createElement(el, vn({
    className: se("recharts-label", l)
  }, v, h, {
    breakAll: d
  }), p);
}
Ee.displayName = "Label";
var ex = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, d = t.y, p = t.top, g = t.left, v = t.width, h = t.height, m = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (B(v) && B(h)) {
    if (B(l) && B(d))
      return {
        x: l,
        y: d,
        width: v,
        height: h
      };
    if (B(p) && B(g))
      return {
        x: p,
        y: g,
        width: v,
        height: h
      };
  }
  return B(l) && B(d) ? {
    x: l,
    y: d,
    width: 0,
    height: 0
  } : B(r) && B(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: f || s || u || 0,
    clockWise: m
  } : t.viewBox ? t.viewBox : {};
}, nj = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r
  }) : we(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Ye(t) ? t.type === Ee ? /* @__PURE__ */ xe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : J(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Er(t) ? /* @__PURE__ */ E.createElement(Ee, vn({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, aj = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = ex(t), o = Ze(a, Ee).map(function(s, c) {
    return /* @__PURE__ */ xe(s, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = nj(t.label, r || i);
  return [u].concat(FM(o));
};
Ee.parseViewBox = ex;
Ee.renderCallByParent = aj;
var nc, Qy;
function ij() {
  if (Qy) return nc;
  Qy = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return nc = e, nc;
}
var oj = ij();
const uj = /* @__PURE__ */ ie(oj);
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
var sj = ["valueAccessor"], cj = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function lj(e) {
  return pj(e) || hj(e) || dj(e) || fj();
}
function fj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dj(e, t) {
  if (e) {
    if (typeof e == "string") return gl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gl(e, t);
  }
}
function hj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pj(e) {
  if (Array.isArray(e)) return gl(e);
}
function gl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ja() {
  return ja = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ja.apply(this, arguments);
}
function eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eg(Object(r), !0).forEach(function(n) {
      vj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vj(e, t, r) {
  return t = yj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yj(e) {
  var t = gj(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function gj(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rg(e, t) {
  if (e == null) return {};
  var r = mj(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var bj = function(t) {
  return Array.isArray(t.value) ? uj(t.value) : t.value;
};
function zt(e) {
  var t = e.valueAccessor, r = t === void 0 ? bj : t, n = rg(e, sj), a = n.data, i = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = rg(n, cj);
  return !a || !a.length ? null : /* @__PURE__ */ E.createElement(Te, {
    className: "recharts-label-list"
  }, a.map(function(f, l) {
    var d = Y(i) ? r(f, l) : Je(f && f.payload, i), p = Y(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ E.createElement(Ee, ja({}, ce(f, !0), c, p, {
      parentViewBox: f.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: Ee.parseViewBox(Y(o) ? f : tg(tg({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
zt.displayName = "LabelList";
function xj(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(zt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ E.isValidElement(e) || J(e) ? /* @__PURE__ */ E.createElement(zt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Er(e) ? /* @__PURE__ */ E.createElement(zt, ja({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function wj(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = Ze(n, zt).map(function(o, u) {
    return /* @__PURE__ */ xe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return a;
  var i = xj(e.label, t);
  return [i].concat(lj(a));
}
zt.renderCallByParent = wj;
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ml.apply(this, arguments);
}
function ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ag(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ng(Object(r), !0).forEach(function(n) {
      _j(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _j(e, t, r) {
  return t = Oj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Oj(e) {
  var t = Sj(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function Sj(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Aj = function(t, r) {
  var n = tt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, Zn = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, f = s * (u ? 1 : -1) + a, l = Math.asin(s / f) / Ma, d = c ? i : i + o * l, p = Pe(r, n, f, d), g = Pe(r, n, a, d), v = c ? i - o * l : i, h = Pe(r, n, f * Math.cos(l * Ma), v);
  return {
    center: p,
    circleTangency: g,
    lineTangency: h,
    theta: l
  };
}, tx = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, u = t.endAngle, s = Aj(o, u), c = o + s, f = Pe(r, n, i, o), l = Pe(r, n, i, c), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (a > 0) {
    var p = Pe(r, n, a, o), g = Pe(r, n, a, c);
    d += "L ".concat(g.x, ",").concat(g.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, Pj = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = tt(f - c), d = Zn({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), p = d.circleTangency, g = d.lineTangency, v = d.theta, h = Zn({
    cx: r,
    cy: n,
    radius: i,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), m = h.circleTangency, x = h.lineTangency, w = h.theta, _ = s ? Math.abs(c - f) : Math.abs(c - f) - v - w;
  if (_ < 0)
    return u ? "M ".concat(g.x, ",").concat(g.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : tx({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: f
    });
  var y = "M ".concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(_ > 180), ",").concat(+(l < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (a > 0) {
    var b = Zn({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = b.circleTangency, S = b.lineTangency, A = b.theta, C = Zn({
      cx: r,
      cy: n,
      radius: a,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), T = C.circleTangency, P = C.lineTangency, M = C.theta, I = s ? Math.abs(c - f) : Math.abs(c - f) - A - M;
    if (I < 0 && o === 0)
      return "".concat(y, "L").concat(r, ",").concat(n, "Z");
    y += "L".concat(P.x, ",").concat(P.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(I > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    y += "L".concat(r, ",").concat(n, "Z");
  return y;
}, Tj = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, rx = function(t) {
  var r = ag(ag({}, Tj), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, d = r.className;
  if (o < i || f === l)
    return null;
  var p = se("recharts-sector", d), g = o - i, v = Xe(u, g, 0, !0), h;
  return v > 0 && Math.abs(f - l) < 360 ? h = Pj({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(v, g / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : h = tx({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ E.createElement("path", ml({}, ce(r, !0), {
    className: p,
    d: h,
    role: "img"
  }));
};
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), !0).forEach(function(n) {
      Ej(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ej(e, t, r) {
  return t = Mj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mj(e) {
  var t = jj(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function jj(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ug = {
  curveBasisClosed: Kw,
  curveBasisOpen: Vw,
  curveBasis: Gw,
  curveBumpX: Iw,
  curveBumpY: $w,
  curveLinearClosed: Xw,
  curveLinear: ii,
  curveMonotoneX: Yw,
  curveMonotoneY: Zw,
  curveNatural: Jw,
  curveStep: Qw,
  curveStepAfter: t_,
  curveStepBefore: e_
}, Jn = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, kr = function(t) {
  return t.x;
}, Lr = function(t) {
  return t.y;
}, Cj = function(t, r) {
  if (J(t))
    return t;
  var n = "curve".concat(ni(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? ug["".concat(n).concat(r === "vertical" ? "Y" : "X")] : ug[n] || ii;
}, Ij = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, f = Cj(n, u), l = c ? i.filter(function(v) {
    return Jn(v);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(v) {
      return Jn(v);
    }) : o, g = l.map(function(v, h) {
      return og(og({}, v), {}, {
        base: p[h]
      });
    });
    return u === "vertical" ? d = Wn().y(Lr).x1(kr).x0(function(v) {
      return v.base.x;
    }) : d = Wn().x(kr).y1(Lr).y0(function(v) {
      return v.base.y;
    }), d.defined(Jn).curve(f), d(g);
  }
  return u === "vertical" && B(o) ? d = Wn().y(Lr).x1(kr).x0(o) : B(o) ? d = Wn().x(kr).y1(Lr).y0(o) : d = ab().x(kr).y(Lr), d.defined(Jn).curve(f), d(l);
}, sg = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? Ij(t) : a;
  return /* @__PURE__ */ Xa("path", bl({}, ce(t, !1), na(t), {
    className: se("recharts-curve", r),
    d: o,
    ref: i
  }));
}, ac = { exports: {} }, ic, cg;
function $j() {
  if (cg) return ic;
  cg = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ic = e, ic;
}
var oc, lg;
function Rj() {
  if (lg) return oc;
  lg = 1;
  var e = /* @__PURE__ */ $j();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, oc = function() {
    function n(o, u, s, c, f, l) {
      if (l !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, oc;
}
var fg;
function Nj() {
  return fg || (fg = 1, ac.exports = /* @__PURE__ */ Rj()()), ac.exports;
}
var Dj = /* @__PURE__ */ Nj();
const te = /* @__PURE__ */ ie(Dj), { getOwnPropertyNames: qj, getOwnPropertySymbols: kj } = Object, { hasOwnProperty: Lj } = Object.prototype;
function uc(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function Qn(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    const { cache: i } = a, o = i.get(r), u = i.get(n);
    if (o && u)
      return o === n && u === r;
    i.set(r, n), i.set(n, r);
    const s = e(r, n, a);
    return i.delete(r), i.delete(n), s;
  };
}
function Bj(e) {
  return e?.[Symbol.toStringTag];
}
function dg(e) {
  return qj(e).concat(kj(e));
}
const Fj = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => Lj.call(e, t))
);
function Qt(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const Uj = "__v", Wj = "__o", Hj = "_owner", { getOwnPropertyDescriptor: hg, keys: pg } = Object;
function zj(e, t) {
  return e.byteLength === t.byteLength && Ca(new Uint8Array(e), new Uint8Array(t));
}
function Gj(e, t, r) {
  let n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function Kj(e, t) {
  return e.byteLength === t.byteLength && Ca(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function Vj(e, t) {
  return Qt(e.getTime(), t.getTime());
}
function Xj(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Yj(e, t) {
  return e === t;
}
function vg(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const a = new Array(n), i = e.entries();
  let o, u, s = 0;
  for (; (o = i.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1, l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (a[l]) {
        l++;
        continue;
      }
      const d = o.value, p = u.value;
      if (r.equals(d[0], p[0], s, l, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
        f = a[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    s++;
  }
  return !0;
}
const Zj = Qt;
function Jj(e, t, r) {
  const n = pg(e);
  let a = n.length;
  if (pg(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!nx(e, t, r, n[a]))
      return !1;
  return !0;
}
function Br(e, t, r) {
  const n = dg(e);
  let a = n.length;
  if (dg(t).length !== a)
    return !1;
  let i, o, u;
  for (; a-- > 0; )
    if (i = n[a], !nx(e, t, r, i) || (o = hg(e, i), u = hg(t, i), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function Qj(e, t) {
  return Qt(e.valueOf(), t.valueOf());
}
function eC(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function yg(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const a = new Array(n), i = e.values();
  let o, u;
  for (; (o = i.next()) && !o.done; ) {
    const s = t.values();
    let c = !1, f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!a[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = a[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function Ca(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function tC(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function nx(e, t, r, n) {
  return (n === Hj || n === Wj || n === Uj) && (e.$$typeof || t.$$typeof) ? !0 : Fj(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const rC = "[object ArrayBuffer]", nC = "[object Arguments]", aC = "[object Boolean]", iC = "[object DataView]", oC = "[object Date]", uC = "[object Error]", sC = "[object Map]", cC = "[object Number]", lC = "[object Object]", fC = "[object RegExp]", dC = "[object Set]", hC = "[object String]", pC = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, vC = "[object URL]", yC = Object.prototype.toString;
function gC({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: a, areFunctionsEqual: i, areMapsEqual: o, areNumbersEqual: u, areObjectsEqual: s, arePrimitiveWrappersEqual: c, areRegExpsEqual: f, areSetsEqual: l, areTypedArraysEqual: d, areUrlsEqual: p, unknownTagComparators: g }) {
  return function(h, m, x) {
    if (h === m)
      return !0;
    if (h == null || m == null)
      return !1;
    const w = typeof h;
    if (w !== typeof m)
      return !1;
    if (w !== "object")
      return w === "number" ? u(h, m, x) : w === "function" ? i(h, m, x) : !1;
    const _ = h.constructor;
    if (_ !== m.constructor)
      return !1;
    if (_ === Object)
      return s(h, m, x);
    if (Array.isArray(h))
      return t(h, m, x);
    if (_ === Date)
      return n(h, m, x);
    if (_ === RegExp)
      return f(h, m, x);
    if (_ === Map)
      return o(h, m, x);
    if (_ === Set)
      return l(h, m, x);
    const y = yC.call(h);
    if (y === oC)
      return n(h, m, x);
    if (y === fC)
      return f(h, m, x);
    if (y === sC)
      return o(h, m, x);
    if (y === dC)
      return l(h, m, x);
    if (y === lC)
      return typeof h.then != "function" && typeof m.then != "function" && s(h, m, x);
    if (y === vC)
      return p(h, m, x);
    if (y === uC)
      return a(h, m, x);
    if (y === nC)
      return s(h, m, x);
    if (pC[y])
      return d(h, m, x);
    if (y === rC)
      return e(h, m, x);
    if (y === iC)
      return r(h, m, x);
    if (y === aC || y === cC || y === hC)
      return c(h, m, x);
    if (g) {
      let b = g[y];
      if (!b) {
        const O = Bj(h);
        O && (b = g[O]);
      }
      if (b)
        return b(h, m, x);
    }
    return !1;
  };
}
function mC({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: zj,
    areArraysEqual: r ? Br : Gj,
    areDataViewsEqual: Kj,
    areDatesEqual: Vj,
    areErrorsEqual: Xj,
    areFunctionsEqual: Yj,
    areMapsEqual: r ? uc(vg, Br) : vg,
    areNumbersEqual: Zj,
    areObjectsEqual: r ? Br : Jj,
    arePrimitiveWrappersEqual: Qj,
    areRegExpsEqual: eC,
    areSetsEqual: r ? uc(yg, Br) : yg,
    areTypedArraysEqual: r ? uc(Ca, Br) : Ca,
    areUrlsEqual: tC,
    unknownTagComparators: void 0
  };
  if (t && (n = Object.assign({}, n, t(n))), e) {
    const a = Qn(n.areArraysEqual), i = Qn(n.areMapsEqual), o = Qn(n.areObjectsEqual), u = Qn(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: a,
      areMapsEqual: i,
      areObjectsEqual: o,
      areSetsEqual: u
    });
  }
  return n;
}
function bC(e) {
  return function(t, r, n, a, i, o, u) {
    return e(t, r, u);
  };
}
function xC({ circular: e, comparator: t, createState: r, equals: n, strict: a }) {
  if (r)
    return function(u, s) {
      const { cache: c = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: f } = r();
      return t(u, s, {
        cache: c,
        equals: n,
        meta: f,
        strict: a
      });
    };
  if (e)
    return function(u, s) {
      return t(u, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: n,
        meta: void 0,
        strict: a
      });
    };
  const i = {
    cache: void 0,
    equals: n,
    meta: void 0,
    strict: a
  };
  return function(u, s) {
    return t(u, s, i);
  };
}
const wC = Ct();
Ct({ strict: !0 });
Ct({ circular: !0 });
Ct({
  circular: !0,
  strict: !0
});
Ct({
  createInternalComparator: () => Qt
});
Ct({
  strict: !0,
  createInternalComparator: () => Qt
});
Ct({
  circular: !0,
  createInternalComparator: () => Qt
});
Ct({
  circular: !0,
  createInternalComparator: () => Qt,
  strict: !0
});
function Ct(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: a = !1 } = e, i = mC(e), o = gC(i), u = r ? r(o) : bC(o);
  return xC({ circular: t, comparator: o, createState: n, equals: u, strict: a });
}
function _C(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function gg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : _C(a);
  };
  requestAnimationFrame(n);
}
function xl(e) {
  "@babel/helpers - typeof";
  return xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xl(e);
}
function OC(e) {
  return TC(e) || PC(e) || AC(e) || SC();
}
function SC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AC(e, t) {
  if (e) {
    if (typeof e == "string") return mg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mg(e, t);
  }
}
function mg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function TC(e) {
  if (Array.isArray(e)) return e;
}
function EC() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, u = OC(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          gg(a.bind(null, c), s);
          return;
        }
        a(s), gg(a.bind(null, c));
        return;
      }
      xl(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return t = i, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
function bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bg(Object(r), !0).forEach(function(n) {
      ax(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ax(e, t, r) {
  return t = MC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MC(e) {
  var t = jC(e, "string");
  return bn(t) === "symbol" ? t : String(t);
}
function jC(e, t) {
  if (bn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var CC = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, IC = function(t) {
  return t;
}, $C = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Vr = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return xg(xg({}, n), {}, ax({}, a, t(a, r[a])));
  }, {});
}, wg = function(t, r, n) {
  return t.map(function(a) {
    return "".concat($C(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function RC(e, t) {
  return qC(e) || DC(e, t) || ix(e, t) || NC();
}
function NC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function qC(e) {
  if (Array.isArray(e)) return e;
}
function kC(e) {
  return FC(e) || BC(e) || ix(e) || LC();
}
function LC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ix(e, t) {
  if (e) {
    if (typeof e == "string") return wl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wl(e, t);
  }
}
function BC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FC(e) {
  if (Array.isArray(e)) return wl(e);
}
function wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ia = 1e-4, ox = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, ux = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, _g = function(t, r) {
  return function(n) {
    var a = ox(t, r);
    return ux(a, n);
  };
}, UC = function(t, r) {
  return function(n) {
    var a = ox(t, r), i = [].concat(kC(a.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return ux(i, n);
  };
}, Og = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, u = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, u = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(h) {
            return parseFloat(h);
          }), f = RC(c, 4);
          a = f[0], i = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = _g(a, o), d = _g(i, u), p = UC(a, o), g = function(m) {
    return m > 1 ? 1 : m < 0 ? 0 : m;
  }, v = function(m) {
    for (var x = m > 1 ? 1 : m, w = x, _ = 0; _ < 8; ++_) {
      var y = l(w) - x, b = p(w);
      if (Math.abs(y - x) < Ia || b < Ia)
        return d(w);
      w = g(w - y / b);
    }
    return d(w);
  };
  return v.isStepper = !1, v;
}, WC = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, u = o === void 0 ? 17 : o, s = function(f, l, d) {
    var p = -(f - l) * n, g = d * i, v = d + (p - g) * u / 1e3, h = d * u / 1e3 + f;
    return Math.abs(h - l) < Ia && Math.abs(v) < Ia ? [l, 0] : [h, v];
  };
  return s.isStepper = !0, s.dt = u, s;
}, HC = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Og(a);
      case "spring":
        return WC();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Og(a);
    }
  return typeof a == "function" ? a : null;
};
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function Sg(e) {
  return KC(e) || GC(e) || sx(e) || zC();
}
function zC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function KC(e) {
  if (Array.isArray(e)) return Ol(e);
}
function Ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ag(Object(r), !0).forEach(function(n) {
      _l(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _l(e, t, r) {
  return t = VC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VC(e) {
  var t = XC(e, "string");
  return xn(t) === "symbol" ? t : String(t);
}
function XC(e, t) {
  if (xn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function YC(e, t) {
  return QC(e) || JC(e, t) || sx(e, t) || ZC();
}
function ZC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sx(e, t) {
  if (e) {
    if (typeof e == "string") return Ol(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ol(e, t);
  }
}
function Ol(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function QC(e) {
  if (Array.isArray(e)) return e;
}
var $a = function(t, r, n) {
  return t + (r - t) * n;
}, Sl = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, eI = function e(t, r, n) {
  var a = Vr(function(i, o) {
    if (Sl(o)) {
      var u = t(o.from, o.to, o.velocity), s = YC(u, 2), c = s[0], f = s[1];
      return Ae(Ae({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Vr(function(i, o) {
    return Sl(o) ? Ae(Ae({}, o), {}, {
      velocity: $a(o.velocity, a[i].velocity, n),
      from: $a(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const tI = (function(e, t, r, n, a) {
  var i = CC(e, t), o = i.reduce(function(h, m) {
    return Ae(Ae({}, h), {}, _l({}, m, [e[m], t[m]]));
  }, {}), u = i.reduce(function(h, m) {
    return Ae(Ae({}, h), {}, _l({}, m, {
      from: e[m],
      velocity: 0,
      to: t[m]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, d = function() {
    return Vr(function(m, x) {
      return x.from;
    }, u);
  }, p = function() {
    return !Object.values(u).filter(Sl).length;
  }, g = function(m) {
    c || (c = m);
    var x = m - c, w = x / r.dt;
    u = eI(r, u, w), a(Ae(Ae(Ae({}, e), t), d())), c = m, p() || (s = requestAnimationFrame(l));
  }, v = function(m) {
    f || (f = m);
    var x = (m - f) / n, w = Vr(function(y, b) {
      return $a.apply(void 0, Sg(b).concat([r(x)]));
    }, o);
    if (a(Ae(Ae(Ae({}, e), t), w)), x < 1)
      s = requestAnimationFrame(l);
    else {
      var _ = Vr(function(y, b) {
        return $a.apply(void 0, Sg(b).concat([r(1)]));
      }, o);
      a(Ae(Ae(Ae({}, e), t), _));
    }
  };
  return l = r.isStepper ? g : v, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
    };
  };
});
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
var rI = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function nI(e, t) {
  if (e == null) return {};
  var r = aI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aI(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function sc(e) {
  return sI(e) || uI(e) || oI(e) || iI();
}
function iI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oI(e, t) {
  if (e) {
    if (typeof e == "string") return Al(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Al(e, t);
  }
}
function uI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sI(e) {
  if (Array.isArray(e)) return Al(e);
}
function Al(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      zr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zr(e, t, r) {
  return t = cx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cx(n.key), n);
  }
}
function fI(e, t, r) {
  return t && lI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cx(e) {
  var t = dI(e, "string");
  return mr(t) === "symbol" ? t : String(t);
}
function dI(e, t) {
  if (mr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pl(e, t);
}
function Pl(e, t) {
  return Pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pl(e, t);
}
function pI(e) {
  var t = vI();
  return function() {
    var n = Ra(e), a;
    if (t) {
      var i = Ra(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Tl(this, a);
  };
}
function Tl(e, t) {
  if (t && (mr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return El(e);
}
function El(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vI() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ra(e) {
  return Ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ra(e);
}
var Pt = /* @__PURE__ */ (function(e) {
  hI(r, e);
  var t = pI(r);
  function r(n, a) {
    var i;
    cI(this, r), i = t.call(this, n, a);
    var o = i.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(El(i)), i.changeStyle = i.changeStyle.bind(El(i)), !u || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: f
      }), Tl(i);
    if (l && l.length)
      i.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, Tl(i);
      i.state = {
        style: s ? zr({}, s, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return fI(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, u = i.canBegin, s = i.attributeName, c = i.shouldReAnimate, f = i.to, l = i.from, d = this.state.style;
      if (u) {
        if (!o) {
          var p = {
            style: s ? zr({}, s, f) : f
          };
          this.state && d && (s && d[s] !== f || !s && d !== f) && this.setState(p);
          return;
        }
        if (!(wC(a.to, f) && a.canBegin && a.isActive)) {
          var g = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = g || c ? l : a.to;
          if (this.state && d) {
            var h = {
              style: s ? zr({}, s, v) : v
            };
            (s && d[s] !== v || !s && d !== v) && this.setState(h);
          }
          this.runAnimation(Ge(Ge({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, u = a.to, s = a.duration, c = a.easing, f = a.begin, l = a.onAnimationEnd, d = a.onAnimationStart, p = tI(o, u, HC(c), s, this.changeStyle), g = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, f, g, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, u = a.begin, s = a.onAnimationStart, c = o[0], f = c.style, l = c.duration, d = l === void 0 ? 0 : l, p = function(v, h, m) {
        if (m === 0)
          return v;
        var x = h.duration, w = h.easing, _ = w === void 0 ? "ease" : w, y = h.style, b = h.properties, O = h.onAnimationEnd, S = m > 0 ? o[m - 1] : h, A = b || Object.keys(y);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(sc(v), [i.runJSAnimation.bind(i, {
            from: S.style,
            to: y,
            duration: x,
            easing: _
          }), x]);
        var C = wg(A, x, _), T = Ge(Ge(Ge({}, S.style), y), {}, {
          transition: C
        });
        return [].concat(sc(v), [T, x, O]).filter(IC);
      };
      return this.manager.start([s].concat(sc(o.reduce(p, [f, Math.max(d, u)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = EC());
      var i = a.begin, o = a.duration, u = a.attributeName, s = a.to, c = a.easing, f = a.onAnimationStart, l = a.onAnimationEnd, d = a.steps, p = a.children, g = this.manager;
      if (this.unSubscribe = g.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var v = u ? zr({}, u, s) : s, h = wg(Object.keys(v), o, c);
      g.start([f, i, Ge(Ge({}, v), {}, {
        transition: h
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var u = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var s = nI(a, rI), c = Ft.count(i), f = this.state.style;
      if (typeof i == "function")
        return i(f);
      if (!u || c === 0 || o <= 0)
        return i;
      var l = function(p) {
        var g = p.props, v = g.style, h = v === void 0 ? {} : v, m = g.className, x = /* @__PURE__ */ xe(p, Ge(Ge({}, s), {}, {
          style: Ge(Ge({}, h), f),
          className: m
        }));
        return x;
      };
      return c === 1 ? l(Ft.only(i)) : /* @__PURE__ */ E.createElement("div", null, Ft.map(i, function(d) {
        return l(d);
      }));
    }
  }]), r;
})(Xt);
Pt.displayName = "Animate";
Pt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Pt.propTypes = {
  from: te.oneOfType([te.object, te.string]),
  to: te.oneOfType([te.object, te.string]),
  attributeName: te.string,
  // animation duration
  duration: te.number,
  begin: te.number,
  easing: te.oneOfType([te.string, te.func]),
  steps: te.arrayOf(te.shape({
    duration: te.number.isRequired,
    style: te.object.isRequired,
    easing: te.oneOfType([te.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), te.func]),
    // transition css properties(dash case), optional
    properties: te.arrayOf("string"),
    onAnimationEnd: te.func
  })),
  children: te.oneOfType([te.node, te.func]),
  isActive: te.bool,
  canBegin: te.bool,
  onAnimationEnd: te.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: te.bool,
  onAnimationStart: te.func,
  onAnimationReStart: te.func
};
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function yI(e, t) {
  return xI(e) || bI(e, t) || mI(e, t) || gI();
}
function gI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mI(e, t) {
  if (e) {
    if (typeof e == "string") return Tg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tg(e, t);
  }
}
function Tg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function xI(e) {
  if (Array.isArray(e)) return e;
}
function Eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), !0).forEach(function(n) {
      wI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wI(e, t, r) {
  return t = _I(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _I(e) {
  var t = OI(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function OI(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jg = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), u = a >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = i[d] > o ? o : i[d];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + s * l[0], ",").concat(r)), f += "L ".concat(t + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + a - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * l[2], ",").concat(r + a)), f += "L ".concat(t + s * l[3], ",").concat(r + a), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - u * l[3])), f += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var g = Math.min(o, i);
    f = "M ".concat(t, ",").concat(r + u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + s * g, ",").concat(r, `
            L `).concat(t + n - s * g, ",").concat(r, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * g, `
            L `).concat(t + n, ",").concat(r + a - u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n - s * g, ",").concat(r + a, `
            L `).concat(t + s * g, ",").concat(r + a, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - u * g, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return f;
}, SI = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(i, i + u), f = Math.max(i, i + u), l = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= f && a >= l && a <= d;
  }
  return !1;
}, AI = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Gf = function(t) {
  var r = Mg(Mg({}, AI), t), n = Xr(), a = Kl(-1), i = yI(a, 2), o = i[0], u = i[1];
  Va(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && u(_);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, d = r.radius, p = r.className, g = r.animationEasing, v = r.animationDuration, h = r.animationBegin, m = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var w = se("recharts-rectangle", p);
  return x ? /* @__PURE__ */ E.createElement(Pt, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: x
  }, function(_) {
    var y = _.width, b = _.height, O = _.x, S = _.y;
    return /* @__PURE__ */ E.createElement(Pt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: v,
      isActive: m,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", Na({}, ce(r, !0), {
      className: w,
      d: jg(O, S, y, b, d),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", Na({}, ce(r, !0), {
    className: w,
    d: jg(s, c, f, l, d)
  }));
};
function Ml() {
  return Ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ml.apply(this, arguments);
}
var lx = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = se("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ Xa("circle", Ml({}, ce(t, !1), na(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
var PI = ["x", "y", "top", "left", "width", "height", "className"];
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jl.apply(this, arguments);
}
function Cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function TI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cg(Object(r), !0).forEach(function(n) {
      EI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EI(e, t, r) {
  return t = MI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MI(e) {
  var t = jI(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function jI(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CI(e, t) {
  if (e == null) return {};
  var r = II(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function II(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var $I = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, RI = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, f = t.width, l = f === void 0 ? 0 : f, d = t.height, p = d === void 0 ? 0 : d, g = t.className, v = CI(t, PI), h = TI({
    x: n,
    y: i,
    top: u,
    left: c,
    width: l,
    height: p
  }, v);
  return !B(n) || !B(i) || !B(l) || !B(p) || !B(u) || !B(c) ? null : /* @__PURE__ */ E.createElement("path", jl({}, ce(h, !0), {
    className: se("recharts-cross", g),
    d: $I(n, i, l, p, u, c)
  }));
}, cc, Ig;
function NI() {
  if (Ig) return cc;
  Ig = 1;
  var e = Tb(), t = e(Object.getPrototypeOf, Object);
  return cc = t, cc;
}
var lc, $g;
function DI() {
  if ($g) return lc;
  $g = 1;
  var e = mt(), t = NI(), r = bt(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, u = i.hasOwnProperty, s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var d = u.call(l, "constructor") && l.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == s;
  }
  return lc = c, lc;
}
var qI = DI();
const kI = /* @__PURE__ */ ie(qI);
var fc, Rg;
function LI() {
  if (Rg) return fc;
  Rg = 1;
  var e = mt(), t = bt(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return fc = n, fc;
}
var BI = LI();
const FI = /* @__PURE__ */ ie(BI);
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Da.apply(this, arguments);
}
function UI(e, t) {
  return GI(e) || zI(e, t) || HI(e, t) || WI();
}
function WI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HI(e, t) {
  if (e) {
    if (typeof e == "string") return Ng(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ng(e, t);
  }
}
function Ng(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function GI(e) {
  if (Array.isArray(e)) return e;
}
function Dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), !0).forEach(function(n) {
      KI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KI(e, t, r) {
  return t = VI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VI(e) {
  var t = XI(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function XI(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kg = function(t, r, n, a, i) {
  var o = n - a, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + i), u += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, YI = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, ZI = function(t) {
  var r = qg(qg({}, YI), t), n = Xr(), a = Kl(-1), i = UI(a, 2), o = i[0], u = i[1];
  Va(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, d = r.height, p = r.className, g = r.animationEasing, v = r.animationDuration, h = r.animationBegin, m = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || d !== +d || f === 0 && l === 0 || d === 0)
    return null;
  var x = se("recharts-trapezoid", p);
  return m ? /* @__PURE__ */ E.createElement(Pt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: d,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: m
  }, function(w) {
    var _ = w.upperWidth, y = w.lowerWidth, b = w.height, O = w.x, S = w.y;
    return /* @__PURE__ */ E.createElement(Pt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: v,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", Da({}, ce(r, !0), {
      className: x,
      d: kg(O, S, _, y, b),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", Da({}, ce(r, !0), {
    className: x,
    d: kg(s, c, f, l, d)
  })));
}, JI = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
function QI(e, t) {
  if (e == null) return {};
  var r = e$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function e$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), !0).forEach(function(n) {
      t$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function t$(e, t, r) {
  return t = r$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r$(e) {
  var t = n$(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function n$(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a$(e, t) {
  return qa(qa({}, t), e);
}
function i$(e, t) {
  return e === "symbols";
}
function Bg(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(Gf, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(ZI, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(rx, r);
    case "symbols":
      if (i$(t))
        return /* @__PURE__ */ E.createElement(lf, r);
      break;
    default:
      return null;
  }
}
function o$(e) {
  return /* @__PURE__ */ Ye(e) ? e.props : e;
}
function u$(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? a$ : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, u = e.isActive, s = QI(e, JI), c;
  if (/* @__PURE__ */ Ye(t))
    c = /* @__PURE__ */ xe(t, qa(qa({}, s), o$(t)));
  else if (J(t))
    c = t(s);
  else if (kI(t) && !FI(t)) {
    var f = a(t, s);
    c = /* @__PURE__ */ E.createElement(Bg, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ E.createElement(Bg, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ E.createElement(Te, {
    className: o
  }, c) : c;
}
function _i(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Oi(e, t) {
  return t != null && "sectors" in e.props;
}
function An(e, t) {
  return t != null && "points" in e.props;
}
function s$(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function c$(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function l$(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function f$(e, t) {
  var r;
  return _i(e, t) ? r = s$ : Oi(e, t) ? r = c$ : An(e, t) && (r = l$), r;
}
function d$(e, t) {
  var r;
  return _i(e, t) ? r = "trapezoids" : Oi(e, t) ? r = "sectors" : An(e, t) && (r = "points"), r;
}
function h$(e, t) {
  if (_i(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Oi(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return An(e, t) ? t.payload : {};
}
function p$(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = d$(r, t), i = h$(r, t), o = n.filter(function(s, c) {
    var f = Uf(i, s), l = r.props[a].filter(function(g) {
      var v = f$(r, t);
      return v(g, t);
    }), d = r.props[a].indexOf(l[l.length - 1]), p = c === d;
    return f && p;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var dc, Fg;
function v$() {
  if (Fg) return dc;
  Fg = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var u = -1, s = t(e((a - n) / (i || 1)), 0), c = Array(s); s--; )
      c[o ? s : ++u] = n, n += i;
    return c;
  }
  return dc = r, dc;
}
var hc, Ug;
function fx() {
  if (Ug) return hc;
  Ug = 1;
  var e = Wb(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return hc = n, hc;
}
var pc, Wg;
function y$() {
  if (Wg) return pc;
  Wg = 1;
  var e = v$(), t = ci(), r = fx();
  function n(a) {
    return function(i, o, u) {
      return u && typeof u != "number" && t(i, o, u) && (o = u = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), u = u === void 0 ? i < o ? 1 : -1 : r(u), e(i, o, u, a);
    };
  }
  return pc = n, pc;
}
var vc, Hg;
function g$() {
  if (Hg) return vc;
  Hg = 1;
  var e = y$(), t = e();
  return vc = t, vc;
}
var m$ = g$();
const ka = /* @__PURE__ */ ie(m$);
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      dx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dx(e, t, r) {
  return t = b$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b$(e) {
  var t = x$(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function x$(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var w$ = ["Webkit", "Moz", "O", "ms"], _$ = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = w$.reduce(function(i, o) {
    return Gg(Gg({}, i), {}, dx({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(this, arguments);
}
function Kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kg(Object(r), !0).forEach(function(n) {
      qe(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, px(n.key), n);
  }
}
function S$(e, t, r) {
  return t && Vg(e.prototype, t), r && Vg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function A$(e, t, r) {
  return t = Ba(t), P$(e, hx() ? Reflect.construct(t, r || [], Ba(e).constructor) : t.apply(e, r));
}
function P$(e, t) {
  if (t && (br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T$(e);
}
function T$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hx = function() {
    return !!e;
  })();
}
function Ba(e) {
  return Ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ba(e);
}
function E$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cl(e, t);
}
function Cl(e, t) {
  return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Cl(e, t);
}
function qe(e, t, r) {
  return t = px(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function px(e) {
  var t = M$(e, "string");
  return br(t) == "symbol" ? t : t + "";
}
function M$(e, t) {
  if (br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var j$ = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = Gr().domain(ka(0, s)).range([i, i + o - u]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: f
  };
}, Xg = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, xr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return O$(this, t), n = A$(this, t, [r]), qe(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), qe(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), qe(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, u = a.startIndex;
        o?.({
          endIndex: i,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), qe(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), qe(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), qe(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), qe(n, "handleSlideDragStart", function(a) {
      var i = Xg(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return E$(t, e), S$(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, l), g = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % s,
        endIndex: g === f ? f : g - g % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, u = a.dataKey, s = Je(i[n], u, n);
      return J(o) ? o(s, n) : s;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, u = a.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, d = s.startIndex, p = s.endIndex, g = s.onChange, v = n.pageX - i;
      v > 0 ? v = Math.min(v, c + f - l - u, c + f - l - o) : v < 0 && (v = Math.max(v, c - o, c - u));
      var h = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (h.startIndex !== d || h.endIndex !== p) && g && g(h), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = Xg(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, u = a.endX, s = a.startX, c = this.state[o], f = this.props, l = f.x, d = f.width, p = f.travellerWidth, g = f.onChange, v = f.gap, h = f.data, m = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - i;
      x > 0 ? x = Math.min(x, l + d - p - c) : x < 0 && (x = Math.max(x, l - c)), m[o] = c + x;
      var w = this.getIndex(m), _ = w.startIndex, y = w.endIndex, b = function() {
        var S = h.length - 1;
        return o === "startX" && (u > s ? _ % v === 0 : y % v === 0) || u < s && y === S || o === "endX" && (u > s ? y % v === 0 : _ % v === 0) || u > s && y === S;
      };
      this.setState(qe(qe({}, o, c + x), "brushMoveStartX", n.pageX), function() {
        g && b() && g(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[a], l = u.indexOf(f);
      if (l !== -1) {
        var d = l + n;
        if (!(d === -1 || d >= u.length)) {
          var p = u[d];
          a === "startX" && p >= c || a === "endX" && p <= s || this.setState(qe({}, a, p), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ E.createElement("rect", {
        stroke: c,
        fill: s,
        x: a,
        y: i,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = Ft.only(c);
      return l ? /* @__PURE__ */ E.cloneElement(l, {
        x: a,
        y: i,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, d = s.traveller, p = s.ariaLabel, g = s.data, v = s.startIndex, h = s.endIndex, m = Math.max(n, this.props.x), x = yc(yc({}, ce(this.props, !1)), {}, {
        x: m,
        y: c,
        width: f,
        height: l
      }), w = p || "Min value: ".concat((i = g[v]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = g[h]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(Te, {
        tabIndex: 0,
        role: "slider",
        "aria-label": w,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(y) {
          ["ArrowLeft", "ArrowRight"].includes(y.key) && (y.preventDefault(), y.stopPropagation(), u.handleTravellerMoveKeyboard(y.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, u = i.height, s = i.stroke, c = i.travellerWidth, f = Math.min(n, a) + c, l = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ E.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, d = f.endX, p = 5, g = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(el, La({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, d) - p,
        y: o + u / 2
      }, g), this.getTextOfTick(a)), /* @__PURE__ */ E.createElement(el, La({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, d) + s + p,
        y: o + u / 2
      }, g), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, d = this.state, p = d.startX, g = d.endX, v = d.isTextActive, h = d.isSlideMoving, m = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!a || !a.length || !B(u) || !B(s) || !B(c) || !B(f) || c <= 0 || f <= 0)
        return null;
      var w = se("recharts-brush", i), _ = E.Children.count(o) === 1, y = _$("userSelect", "none");
      return /* @__PURE__ */ E.createElement(Te, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: y
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(p, g), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(g, "endX"), (v || h || m || x || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(i + u / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c + 2,
        x2: a + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ E.isValidElement(n) ? i = /* @__PURE__ */ E.cloneElement(n, a) : J(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return yc({
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, i && i.length ? j$({
          data: i,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || u !== a.prevX || s !== a.prevTravellerWidth)) {
        a.scale.range([u, u + o - s]);
        var d = a.scale.domain().map(function(p) {
          return a.scale(p);
        });
        return {
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, u = i - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > a ? u = s : o = s;
      }
      return a >= n[u] ? u : o;
    }
  }]);
})(Xt);
qe(xr, "displayName", "Brush");
qe(xr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var gc, Yg;
function C$() {
  if (Yg) return gc;
  Yg = 1;
  var e = gf();
  function t(r, n) {
    var a;
    return e(r, function(i, o, u) {
      return a = n(i, o, u), !a;
    }), !!a;
  }
  return gc = t, gc;
}
var mc, Zg;
function I$() {
  if (Zg) return mc;
  Zg = 1;
  var e = xb(), t = Et(), r = C$(), n = Ne(), a = ci();
  function i(o, u, s) {
    var c = n(o) ? e : r;
    return s && a(o, u, s) && (u = void 0), c(o, t(u, 3));
  }
  return mc = i, mc;
}
var $$ = I$();
const R$ = /* @__PURE__ */ ie($$);
var it = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, bc, Jg;
function N$() {
  if (Jg) return bc;
  Jg = 1;
  var e = kb();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return bc = t, bc;
}
var xc, Qg;
function D$() {
  if (Qg) return xc;
  Qg = 1;
  var e = N$(), t = Db(), r = Et();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(u, s, c) {
      e(o, s, i(u, s, c));
    }), o;
  }
  return xc = n, xc;
}
var q$ = D$();
const k$ = /* @__PURE__ */ ie(q$);
var wc, em;
function L$() {
  if (em) return wc;
  em = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return wc = e, wc;
}
var _c, tm;
function B$() {
  if (tm) return _c;
  tm = 1;
  var e = gf();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, u) {
      return a = !!n(i, o, u), a;
    }), a;
  }
  return _c = t, _c;
}
var Oc, rm;
function F$() {
  if (rm) return Oc;
  rm = 1;
  var e = L$(), t = B$(), r = Et(), n = Ne(), a = ci();
  function i(o, u, s) {
    var c = n(o) ? e : t;
    return s && a(o, u, s) && (u = void 0), c(o, r(u, 3));
  }
  return Oc = i, Oc;
}
var U$ = F$();
const vx = /* @__PURE__ */ ie(U$);
var W$ = ["x", "y"];
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
function Il() {
  return Il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Il.apply(this, arguments);
}
function nm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nm(Object(r), !0).forEach(function(n) {
      H$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H$(e, t, r) {
  return t = z$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z$(e) {
  var t = G$(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function G$(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K$(e, t) {
  if (e == null) return {};
  var r = V$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function V$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function X$(e, t) {
  var r = e.x, n = e.y, a = K$(e, W$), i = "".concat(r), o = parseInt(i, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || a.height), f = parseInt(c, 10), l = "".concat(t.width || a.width), d = parseInt(l, 10);
  return Fr(Fr(Fr(Fr(Fr({}, t), a), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function am(e) {
  return /* @__PURE__ */ E.createElement(u$, Il({
    shapeType: "rectangle",
    propTransformer: X$,
    activeClassName: "recharts-active-bar"
  }, e));
}
var Y$ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = B(n) || ew(n);
    return i ? t(n, a) : (i || Vt(), r);
  };
}, Z$ = ["value", "background"], yx;
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function J$(e, t) {
  if (e == null) return {};
  var r = Q$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Q$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
function im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? im(Object(r), !0).forEach(function(n) {
      St(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function om(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mx(n.key), n);
  }
}
function tR(e, t, r) {
  return t && om(e.prototype, t), r && om(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rR(e, t, r) {
  return t = Ua(t), nR(e, gx() ? Reflect.construct(t, r || [], Ua(e).constructor) : t.apply(e, r));
}
function nR(e, t) {
  if (t && (wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aR(e);
}
function aR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gx = function() {
    return !!e;
  })();
}
function Ua(e) {
  return Ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ua(e);
}
function iR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $l(e, t);
}
function $l(e, t) {
  return $l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $l(e, t);
}
function St(e, t, r) {
  return t = mx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mx(e) {
  var t = oR(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function oR(e, t) {
  if (wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Bn = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    eR(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = rR(this, t, [].concat(a)), St(r, "state", {
      isAnimationFinished: !1
    }), St(r, "id", ri("recharts-bar-")), St(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), St(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return iR(t, e), tR(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, u = i.dataKey, s = i.activeIndex, c = i.activeBar, f = ce(this.props, !1);
      return n && n.map(function(l, d) {
        var p = d === s, g = p ? c : o, v = ve(ve(ve({}, f), l), {}, {
          isActive: p,
          option: g,
          index: d,
          dataKey: u,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(Te, Fa({
          className: "recharts-bar-rectangle"
        }, Rc(a.props, l, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value, "-").concat(d)
        }), /* @__PURE__ */ E.createElement(am, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, u = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, f = a.animationEasing, l = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ E.createElement(Pt, {
        begin: s,
        duration: c,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var g = p.t, v = i.map(function(h, m) {
          var x = d && d[m];
          if (x) {
            var w = tr(x.x, h.x), _ = tr(x.y, h.y), y = tr(x.width, h.width), b = tr(x.height, h.height);
            return ve(ve({}, h), {}, {
              x: w(g),
              y: _(g),
              width: y(g),
              height: b(g)
            });
          }
          if (o === "horizontal") {
            var O = tr(0, h.height), S = O(g);
            return ve(ve({}, h), {}, {
              y: h.y + h.height - S,
              height: S
            });
          }
          var A = tr(0, h.width), C = A(g);
          return ve(ve({}, h), {}, {
            width: C
          });
        });
        return /* @__PURE__ */ E.createElement(Te, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !Uf(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, u = a.activeIndex, s = ce(this.props.background, !1);
      return i.map(function(c, f) {
        c.value;
        var l = c.background, d = J$(c, Z$);
        if (!l)
          return null;
        var p = ve(ve(ve(ve(ve({}, d), {}, {
          fill: "#eee"
        }, l), s), Rc(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(am, Fa({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, u = i.xAxis, s = i.yAxis, c = i.layout, f = i.children, l = Ze(f, wi);
      if (!l)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(h, m) {
        var x = Array.isArray(h.value) ? h.value[1] : h.value;
        return {
          x: h.x,
          y: h.y,
          value: x,
          errorVal: Je(h, m)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Te, g, l.map(function(v) {
        return /* @__PURE__ */ E.cloneElement(v, {
          key: "error-bar-".concat(a, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, d = n.height, p = n.isAnimationActive, g = n.background, v = n.id;
      if (a || !i || !i.length)
        return null;
      var h = this.state.isAnimationFinished, m = se("recharts-bar", o), x = u && u.allowDataOverflow, w = s && s.allowDataOverflow, _ = x || w, y = Y(v) ? this.id : v;
      return /* @__PURE__ */ E.createElement(Te, {
        className: m
      }, x || w ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: x ? c : c - l / 2,
        y: w ? f : f - d / 2,
        width: x ? l : l * 2,
        height: w ? d : d * 2
      }))) : null, /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(y, ")") : null
      }, g ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, y), (!p || h) && zt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(Xt);
yx = Bn;
St(Bn, "displayName", "Bar");
St(Bn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !li.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
St(Bn, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, d = e.offset, p = gM(n, r);
  if (!p)
    return null;
  var g = t.layout, v = r.type.defaultProps, h = v !== void 0 ? ve(ve({}, v), r.props) : r.props, m = h.dataKey, x = h.children, w = h.minPointSize, _ = g === "horizontal" ? o : i, y = c ? _.scale.domain() : null, b = SM({
    numericAxis: _
  }), O = Ze(x, zb), S = l.map(function(A, C) {
    var T, P, M, I, j, R;
    c ? T = mM(c[f + C], y) : (T = Je(A, m), Array.isArray(T) || (T = [b, T]));
    var D = Y$(w, yx.defaultProps.minPointSize)(T[1], C);
    if (g === "horizontal") {
      var q, k = [o.scale(T[0]), o.scale(T[1])], W = k[0], G = k[1];
      P = zy({
        axis: i,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: A,
        index: C
      }), M = (q = G ?? W) !== null && q !== void 0 ? q : void 0, I = p.size;
      var F = W - G;
      if (j = Number.isNaN(F) ? 0 : F, R = {
        x: P,
        y: o.y,
        width: I,
        height: o.height
      }, Math.abs(D) > 0 && Math.abs(j) < Math.abs(D)) {
        var K = tt(j || D) * (Math.abs(D) - Math.abs(j));
        M -= K, j += K;
      }
    } else {
      var oe = [i.scale(T[0]), i.scale(T[1])], pe = oe[0], De = oe[1];
      if (P = pe, M = zy({
        axis: o,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: A,
        index: C
      }), I = De - pe, j = p.size, R = {
        x: i.x,
        y: M,
        width: i.width,
        height: j
      }, Math.abs(D) > 0 && Math.abs(I) < Math.abs(D)) {
        var It = tt(I || D) * (Math.abs(D) - Math.abs(I));
        I += It;
      }
    }
    return ve(ve(ve({}, A), {}, {
      x: P,
      y: M,
      width: I,
      height: j,
      value: c ? T : T[1],
      payload: A,
      background: R
    }, O && O[C] && O[C].props), {}, {
      tooltipPayload: [J0(r, A)],
      tooltipPosition: {
        x: P + I / 2,
        y: M + j / 2
      }
    });
  });
  return ve({
    data: S,
    layout: g
  }, d);
});
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
function uR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function um(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bx(n.key), n);
  }
}
function sR(e, t, r) {
  return t && um(e.prototype, t), r && um(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      Si(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Si(e, t, r) {
  return t = bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bx(e) {
  var t = cR(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function cR(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var E2 = function(t, r, n, a, i) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, d = !!ke(c, Bn);
  return f.reduce(function(p, g) {
    var v = r[g], h = v.orientation, m = v.domain, x = v.padding, w = x === void 0 ? {} : x, _ = v.mirror, y = v.reversed, b = "".concat(h).concat(_ ? "Mirror" : ""), O, S, A, C, T;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var P = m[1] - m[0], M = 1 / 0, I = v.categoricalDomain.sort(nw);
      if (I.forEach(function(oe, pe) {
        pe > 0 && (M = Math.min((oe || 0) - (I[pe - 1] || 0), M));
      }), Number.isFinite(M)) {
        var j = M / P, R = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = j * R / 2), v.padding === "no-gap") {
          var D = Xe(t.barCategoryGap, j * R), q = j * R / 2;
          O = q - D - (q - D) / R * D;
        }
      }
    }
    a === "xAxis" ? S = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : a === "yAxis" ? S = s === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : S = v.range, y && (S = [S[1], S[0]]);
    var k = V0(v, i, d), W = k.scale, G = k.realScaleType;
    W.domain(m).range(S), X0(W);
    var F = Y0(W, Ke(Ke({}, v), {}, {
      realScaleType: G
    }));
    a === "xAxis" ? (T = h === "top" && !_ || h === "bottom" && _, A = n.left, C = l[b] - T * v.height) : a === "yAxis" && (T = h === "left" && !_ || h === "right" && _, A = l[b] - T * v.width, C = n.top);
    var K = Ke(Ke(Ke({}, v), F), {}, {
      realScaleType: G,
      x: A,
      y: C,
      scale: W,
      width: a === "xAxis" ? n.width : v.width,
      height: a === "yAxis" ? n.height : v.height
    });
    return K.bandSize = Ea(K, F), !v.hide && a === "xAxis" ? l[b] += (T ? -1 : 1) * K.height : v.hide || (l[b] += (T ? -1 : 1) * K.width), Ke(Ke({}, p), {}, Si({}, g, K));
  }, {});
}, xx = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, lR = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return xx({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, wx = /* @__PURE__ */ (function() {
  function e(t) {
    uR(this, e), this.scale = t;
  }
  return sR(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
Si(wx, "EPS", 1e-4);
var Kf = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return Ke(Ke({}, n), {}, Si({}, a, wx.create(t[a])));
  }, {});
  return Ke(Ke({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, u = i.position;
      return k$(a, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(a) {
      return vx(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function fR(e) {
  return (e % 180 + 180) % 180;
}
var M2 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = fR(a), o = i * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, Sc, cm;
function dR() {
  if (cm) return Sc;
  cm = 1;
  var e = Et(), t = Nn(), r = ui();
  function n(a) {
    return function(i, o, u) {
      var s = Object(i);
      if (!t(i)) {
        var c = e(o, 3);
        i = r(i), o = function(l) {
          return c(s[l], l, s);
        };
      }
      var f = a(i, o, u);
      return f > -1 ? s[c ? i[f] : f] : void 0;
    };
  }
  return Sc = n, Sc;
}
var Ac, lm;
function hR() {
  if (lm) return Ac;
  lm = 1;
  var e = fx();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ac = t, Ac;
}
var Pc, fm;
function pR() {
  if (fm) return Pc;
  fm = 1;
  var e = Cb(), t = Et(), r = hR(), n = Math.max;
  function a(i, o, u) {
    var s = i == null ? 0 : i.length;
    if (!s)
      return -1;
    var c = u == null ? 0 : r(u);
    return c < 0 && (c = n(s + c, 0)), e(i, t(o, 3), c);
  }
  return Pc = a, Pc;
}
var Tc, dm;
function vR() {
  if (dm) return Tc;
  dm = 1;
  var e = dR(), t = pR(), r = e(t);
  return Tc = r, Tc;
}
var yR = vR();
const gR = /* @__PURE__ */ ie(yR);
var mR = Km();
const bR = /* @__PURE__ */ ie(mR);
var xR = bR(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), Vf = /* @__PURE__ */ gt(void 0), Xf = /* @__PURE__ */ gt(void 0), _x = /* @__PURE__ */ gt(void 0), Ox = /* @__PURE__ */ gt({}), Sx = /* @__PURE__ */ gt(void 0), Ax = /* @__PURE__ */ gt(0), Px = /* @__PURE__ */ gt(0), hm = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, f = xR(i);
  return /* @__PURE__ */ E.createElement(Vf.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(Xf.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(Ox.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(_x.Provider, {
    value: f
  }, /* @__PURE__ */ E.createElement(Sx.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(Ax.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(Px.Provider, {
    value: s
  }, u)))))));
}, wR = function() {
  return Re(Sx);
}, _R = function(t) {
  var r = Re(Vf);
  r == null && Vt();
  var n = r[t];
  return n == null && Vt(), n;
}, j2 = function() {
  var t = Re(Vf);
  return Ot(t);
}, C2 = function() {
  var t = Re(Xf), r = gR(t, function(n) {
    return vx(n.domain, Number.isFinite);
  });
  return r || Ot(t);
}, OR = function(t) {
  var r = Re(Xf);
  r == null && Vt();
  var n = r[t];
  return n == null && Vt(), n;
}, SR = function() {
  var t = Re(_x);
  return t;
}, I2 = function() {
  return Re(Ox);
}, $2 = function() {
  return Re(Px);
}, R2 = function() {
  return Re(Ax);
};
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function AR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function PR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ex(n.key), n);
  }
}
function TR(e, t, r) {
  return t && PR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ER(e, t, r) {
  return t = Wa(t), MR(e, Tx() ? Reflect.construct(t, r || [], Wa(e).constructor) : t.apply(e, r));
}
function MR(e, t) {
  if (t && (_r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jR(e);
}
function jR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tx = function() {
    return !!e;
  })();
}
function Wa(e) {
  return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wa(e);
}
function CR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rl(e, t);
}
function Rl(e, t) {
  return Rl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rl(e, t);
}
function pm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), !0).forEach(function(n) {
      Yf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yf(e, t, r) {
  return t = Ex(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ex(e) {
  var t = IR(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function IR(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $R(e, t) {
  return qR(e) || DR(e, t) || NR(e, t) || RR();
}
function RR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NR(e, t) {
  if (e) {
    if (typeof e == "string") return ym(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ym(e, t);
  }
}
function ym(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function qR(e) {
  if (Array.isArray(e)) return e;
}
function Nl() {
  return Nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nl.apply(this, arguments);
}
var kR = function(t, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(t) ? n = /* @__PURE__ */ E.cloneElement(t, r) : J(t) ? n = t(r) : n = /* @__PURE__ */ E.createElement("line", Nl({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, LR = function(t, r, n, a, i, o, u, s, c) {
  var f = i.x, l = i.y, d = i.width, p = i.height;
  if (n) {
    var g = c.y, v = t.y.apply(g, {
      position: o
    });
    if (it(c, "discard") && !t.y.isInRange(v))
      return null;
    var h = [{
      x: f + d,
      y: v
    }, {
      x: f,
      y: v
    }];
    return s === "left" ? h.reverse() : h;
  }
  if (r) {
    var m = c.x, x = t.x.apply(m, {
      position: o
    });
    if (it(c, "discard") && !t.x.isInRange(x))
      return null;
    var w = [{
      x,
      y: l + p
    }, {
      x,
      y: l
    }];
    return u === "top" ? w.reverse() : w;
  }
  if (a) {
    var _ = c.segment, y = _.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return it(c, "discard") && R$(y, function(b) {
      return !t.isInRange(b);
    }) ? null : y;
  }
  return null;
};
function BR(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = wR(), f = _R(a), l = OR(i), d = SR();
  if (!c || !d)
    return null;
  Ut(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Kf({
    x: f.scale,
    y: l.scale
  }), g = we(t), v = we(r), h = n && n.length === 2, m = LR(p, g, v, h, d, e.position, f.orientation, l.orientation, e);
  if (!m)
    return null;
  var x = $R(m, 2), w = x[0], _ = w.x, y = w.y, b = x[1], O = b.x, S = b.y, A = it(e, "hidden") ? "url(#".concat(c, ")") : void 0, C = vm(vm({
    clipPath: A
  }, ce(e, !0)), {}, {
    x1: _,
    y1: y,
    x2: O,
    y2: S
  });
  return /* @__PURE__ */ E.createElement(Te, {
    className: se("recharts-reference-line", u)
  }, kR(o, C), Ee.renderCallByParent(e, lR({
    x1: _,
    y1: y,
    x2: O,
    y2: S
  })));
}
var Zf = /* @__PURE__ */ (function(e) {
  function t() {
    return AR(this, t), ER(this, t, arguments);
  }
  return CR(t, e), TR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(BR, this.props);
    }
  }]);
})(E.Component);
Yf(Zf, "displayName", "ReferenceLine");
Yf(Zf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Dl() {
  return Dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dl.apply(this, arguments);
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function gm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), !0).forEach(function(n) {
      Ai(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jx(n.key), n);
  }
}
function WR(e, t, r) {
  return t && UR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function HR(e, t, r) {
  return t = Ha(t), zR(e, Mx() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r));
}
function zR(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return GR(e);
}
function GR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mx = function() {
    return !!e;
  })();
}
function Ha(e) {
  return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ha(e);
}
function KR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ql(e, t);
}
function ql(e, t) {
  return ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ql(e, t);
}
function Ai(e, t, r) {
  return t = jx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jx(e) {
  var t = VR(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function VR(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var XR = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Kf({
    x: a.scale,
    y: i.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return it(t, "discard") && !o.isInRange(u) ? null : u;
}, Pi = /* @__PURE__ */ (function(e) {
  function t() {
    return FR(this, t), HR(this, t, arguments);
  }
  return KR(t, e), WR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = we(a), f = we(i);
      if (Ut(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = XR(this.props);
      if (!l)
        return null;
      var d = l.x, p = l.y, g = this.props, v = g.shape, h = g.className, m = it(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, x = mm(mm({
        clipPath: m
      }, ce(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-dot", h)
      }, t.renderDot(v, x), Ee.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(E.Component);
Ai(Pi, "displayName", "ReferenceDot");
Ai(Pi, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Ai(Pi, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(lx, Dl({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function kl() {
  return kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kl.apply(this, arguments);
}
function Sr(e) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e);
}
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      Ti(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ix(n.key), n);
  }
}
function JR(e, t, r) {
  return t && ZR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QR(e, t, r) {
  return t = za(t), eN(e, Cx() ? Reflect.construct(t, r || [], za(e).constructor) : t.apply(e, r));
}
function eN(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tN(e);
}
function tN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cx = function() {
    return !!e;
  })();
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
function rN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ll(e, t);
}
function Ll(e, t) {
  return Ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ll(e, t);
}
function Ti(e, t, r) {
  return t = Ix(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ix(e) {
  var t = nN(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function nN(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var aN = function(t, r, n, a, i) {
  var o = i.x1, u = i.x2, s = i.y1, c = i.y2, f = i.xAxis, l = i.yAxis;
  if (!f || !l) return null;
  var d = Kf({
    x: f.scale,
    y: l.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(s, {
      position: "start"
    }) : d.y.rangeMin
  }, g = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return it(i, "discard") && (!d.isInRange(p) || !d.isInRange(g)) ? null : xx(p, g);
}, Ei = /* @__PURE__ */ (function(e) {
  function t() {
    return YR(this, t), QR(this, t, arguments);
  }
  return rN(t, e), JR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      Ut(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = we(a), d = we(i), p = we(o), g = we(u), v = this.props.shape;
      if (!l && !d && !p && !g && !v)
        return null;
      var h = aN(l, d, p, g, this.props);
      if (!h && !v)
        return null;
      var m = it(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-area", s)
      }, t.renderRect(v, xm(xm({
        clipPath: m
      }, ce(this.props, !0)), h)), Ee.renderCallByParent(this.props, h));
    }
  }]);
})(E.Component);
Ti(Ei, "displayName", "ReferenceArea");
Ti(Ei, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Ti(Ei, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(Gf, kl({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function wm(e) {
  return sN(e) || uN(e) || oN(e) || iN();
}
function iN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oN(e, t) {
  if (e) {
    if (typeof e == "string") return Bl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bl(e, t);
  }
}
function uN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sN(e) {
  if (Array.isArray(e)) return Bl(e);
}
function Bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Fl = function(t, r, n, a, i) {
  var o = Ze(t, Zf), u = Ze(t, Pi), s = [].concat(wm(o), wm(u)), c = Ze(t, Ei), f = "".concat(a, "Id"), l = a[0], d = r;
  if (s.length && (d = s.reduce(function(v, h) {
    if (h.props[f] === n && it(h.props, "extendDomain") && B(h.props[l])) {
      var m = h.props[l];
      return [Math.min(v[0], m), Math.max(v[1], m)];
    }
    return v;
  }, d)), c.length) {
    var p = "".concat(l, "1"), g = "".concat(l, "2");
    d = c.reduce(function(v, h) {
      if (h.props[f] === n && it(h.props, "extendDomain") && B(h.props[p]) && B(h.props[g])) {
        var m = h.props[p], x = h.props[g];
        return [Math.min(v[0], m, x), Math.max(v[1], m, x)];
      }
      return v;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(v, h) {
    return B(h) ? [Math.min(v[0], h), Math.max(v[1], h)] : v;
  }, d)), d;
}, Ec = { exports: {} }, _m;
function cN() {
  return _m || (_m = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function a(s, c, f) {
      this.fn = s, this.context = c, this.once = f || !1;
    }
    function i(s, c, f, l, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var p = new a(f, l || s, d), g = r ? r + c : c;
      return s._events[g] ? s._events[g].fn ? s._events[g] = [s._events[g], p] : s._events[g].push(p) : (s._events[g] = p, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        t.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, u.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var d = 0, p = l.length, g = new Array(p); d < p; d++)
        g[d] = l[d].fn;
      return g;
    }, u.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, u.prototype.emit = function(c, f, l, d, p, g) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var h = this._events[v], m = arguments.length, x, w;
      if (h.fn) {
        switch (h.once && this.removeListener(c, h.fn, void 0, !0), m) {
          case 1:
            return h.fn.call(h.context), !0;
          case 2:
            return h.fn.call(h.context, f), !0;
          case 3:
            return h.fn.call(h.context, f, l), !0;
          case 4:
            return h.fn.call(h.context, f, l, d), !0;
          case 5:
            return h.fn.call(h.context, f, l, d, p), !0;
          case 6:
            return h.fn.call(h.context, f, l, d, p, g), !0;
        }
        for (w = 1, x = new Array(m - 1); w < m; w++)
          x[w - 1] = arguments[w];
        h.fn.apply(h.context, x);
      } else {
        var _ = h.length, y;
        for (w = 0; w < _; w++)
          switch (h[w].once && this.removeListener(c, h[w].fn, void 0, !0), m) {
            case 1:
              h[w].fn.call(h[w].context);
              break;
            case 2:
              h[w].fn.call(h[w].context, f);
              break;
            case 3:
              h[w].fn.call(h[w].context, f, l);
              break;
            case 4:
              h[w].fn.call(h[w].context, f, l, d);
              break;
            default:
              if (!x) for (y = 1, x = new Array(m - 1); y < m; y++)
                x[y - 1] = arguments[y];
              h[w].fn.apply(h[w].context, x);
          }
      }
      return !0;
    }, u.prototype.on = function(c, f, l) {
      return i(this, c, f, l, !1);
    }, u.prototype.once = function(c, f, l) {
      return i(this, c, f, l, !0);
    }, u.prototype.removeListener = function(c, f, l, d) {
      var p = r ? r + c : c;
      if (!this._events[p]) return this;
      if (!f)
        return o(this, p), this;
      var g = this._events[p];
      if (g.fn)
        g.fn === f && (!d || g.once) && (!l || g.context === l) && o(this, p);
      else {
        for (var v = 0, h = [], m = g.length; v < m; v++)
          (g[v].fn !== f || d && !g[v].once || l && g[v].context !== l) && h.push(g[v]);
        h.length ? this._events[p] = h.length === 1 ? h[0] : h : o(this, p);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(Ec)), Ec.exports;
}
var lN = cN();
const fN = /* @__PURE__ */ ie(lN);
var Mc = new fN(), jc = "recharts.syncMouseEvents";
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
function dN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $x(n.key), n);
  }
}
function pN(e, t, r) {
  return t && hN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Cc(e, t, r) {
  return t = $x(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $x(e) {
  var t = vN(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function vN(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var yN = /* @__PURE__ */ (function() {
  function e() {
    dN(this, e), Cc(this, "activeIndex", 0), Cc(this, "coordinateList", []), Cc(this, "layout", "horizontal");
  }
  return pN(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, u = a.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = i + s + c, d = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: d
        });
      }
    }
  }]);
})();
function gN(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && B(n) && B(a))
      return !0;
  }
  return !1;
}
function mN(e, t, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - a : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - a,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Rx(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = Pe(t, r, n, a), u = Pe(t, r, n, i);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function bN(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, d = Pe(u, s, c, l), p = Pe(u, s, f, l);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return Rx(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      xN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xN(e, t, r) {
  return t = wN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wN(e) {
  var t = _N(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function _N(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ON(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var g, v = sg;
  if (d === "ScatterChart")
    g = o, v = RI;
  else if (d === "BarChart")
    g = mN(l, o, s, f), v = Gf;
  else if (l === "radial") {
    var h = Rx(o), m = h.cx, x = h.cy, w = h.radius, _ = h.startAngle, y = h.endAngle;
    g = {
      cx: m,
      cy: x,
      startAngle: _,
      endAngle: y,
      innerRadius: w,
      outerRadius: w
    }, v = rx;
  } else
    g = {
      points: bN(l, o, s)
    }, v = sg;
  var b = ea(ea(ea(ea({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), g), ce(p, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: se("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Ye(p) ? /* @__PURE__ */ xe(p, b) : /* @__PURE__ */ Xa(v, b);
}
var SN = ["item"], AN = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ir.apply(this, arguments);
}
function Sm(e, t) {
  return EN(e) || TN(e, t) || Dx(e, t) || PN();
}
function PN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function EN(e) {
  if (Array.isArray(e)) return e;
}
function Am(e, t) {
  if (e == null) return {};
  var r = MN(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function MN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qx(n.key), n);
  }
}
function IN(e, t, r) {
  return t && CN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $N(e, t, r) {
  return t = Ga(t), RN(e, Nx() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r));
}
function RN(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return NN(e);
}
function NN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nx = function() {
    return !!e;
  })();
}
function Ga(e) {
  return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ga(e);
}
function DN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ul(e, t);
}
function Pr(e) {
  return LN(e) || kN(e) || Dx(e) || qN();
}
function qN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dx(e, t) {
  if (e) {
    if (typeof e == "string") return Wl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wl(e, t);
  }
}
function kN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function LN(e) {
  if (Array.isArray(e)) return Wl(e);
}
function Wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pm(Object(r), !0).forEach(function(n) {
      z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z(e, t, r) {
  return t = qx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qx(e) {
  var t = BN(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FN = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, UN = {
  width: "100%",
  height: "100%"
}, kx = {
  x: 0,
  y: 0
};
function ta(e) {
  return e;
}
var WN = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, HN = function(t, r, n, a) {
  var i = r.find(function(f) {
    return f && f.index === n;
  });
  if (i) {
    if (t === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (t === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (t === "centric") {
      var o = i.coordinate, u = a.radius;
      return $($($({}, a), Pe(a.cx, a.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = i.coordinate, c = a.angle;
    return $($($({}, a), Pe(a.cx, a.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return kx;
}, Mi = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(Pr(u), Pr(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && B(a) && B(i) ? t.slice(a, i + 1) : [];
};
function Lx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Hl = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, u = Mi(r, t);
  return n < 0 || !i || !i.length || n >= u.length ? null : i.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = l === void 0 ? u : l;
      d = ra(p, o.dataKey, a);
    } else
      d = l && l[n] || u[n];
    return d ? [].concat(Pr(s), [J0(c, d)]) : s;
  }, []);
}, Tm = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = WN(i, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, f = fM(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, d = Hl(t, r, f, l), p = HN(n, u, f, i);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, zN = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = t.stackOffset, p = K0(f, i);
  return n.reduce(function(g, v) {
    var h, m = v.type.defaultProps !== void 0 ? $($({}, v.type.defaultProps), v.props) : v.props, x = m.type, w = m.dataKey, _ = m.allowDataOverflow, y = m.allowDuplicatedCategory, b = m.scale, O = m.ticks, S = m.includeHidden, A = m[o];
    if (g[A])
      return g;
    var C = Mi(t.data, {
      graphicalItems: a.filter(function(F) {
        var K, oe = o in F.props ? F.props[o] : (K = F.type.defaultProps) === null || K === void 0 ? void 0 : K[o];
        return oe === A;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), T = C.length, P, M, I;
    gN(m.domain, _, x) && (P = vl(m.domain, null, _), p && (x === "number" || b !== "auto") && (I = Kr(C, w, "category")));
    var j = Lx(x);
    if (!P || P.length === 0) {
      var R, D = (R = m.domain) !== null && R !== void 0 ? R : j;
      if (w) {
        if (P = Kr(C, w, x), x === "category" && p) {
          var q = rw(P);
          y && q ? (M = P, P = ka(0, T)) : y || (P = Vy(D, P, v).reduce(function(F, K) {
            return F.indexOf(K) >= 0 ? F : [].concat(Pr(F), [K]);
          }, []));
        } else if (x === "category")
          y ? P = P.filter(function(F) {
            return F !== "" && !Y(F);
          }) : P = Vy(D, P, v).reduce(function(F, K) {
            return F.indexOf(K) >= 0 || K === "" || Y(K) ? F : [].concat(Pr(F), [K]);
          }, []);
        else if (x === "number") {
          var k = yM(C, a.filter(function(F) {
            var K, oe, pe = o in F.props ? F.props[o] : (K = F.type.defaultProps) === null || K === void 0 ? void 0 : K[o], De = "hide" in F.props ? F.props.hide : (oe = F.type.defaultProps) === null || oe === void 0 ? void 0 : oe.hide;
            return pe === A && (S || !De);
          }), w, i, f);
          k && (P = k);
        }
        p && (x === "number" || b !== "auto") && (I = Kr(C, w, "category"));
      } else p ? P = ka(0, T) : u && u[A] && u[A].hasStack && x === "number" ? P = d === "expand" ? [0, 1] : Z0(u[A].stackGroups, s, c) : P = G0(C, a.filter(function(F) {
        var K = o in F.props ? F.props[o] : F.type.defaultProps[o], oe = "hide" in F.props ? F.props.hide : F.type.defaultProps.hide;
        return K === A && (S || !oe);
      }), x, f, !0);
      if (x === "number")
        P = Fl(l, P, A, i, O), D && (P = vl(D, P, _));
      else if (x === "category" && D) {
        var W = D, G = P.every(function(F) {
          return W.indexOf(F) >= 0;
        });
        G && (P = W);
      }
    }
    return $($({}, g), {}, z({}, A, $($({}, m), {}, {
      axisType: i,
      domain: P,
      categoricalDomain: I,
      duplicateDomain: M,
      originalDomain: (h = m.domain) !== null && h !== void 0 ? h : j,
      isCategorical: p,
      layout: f
    })));
  }, {});
}, GN = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = Mi(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), p = d.length, g = K0(f, i), v = -1;
  return n.reduce(function(h, m) {
    var x = m.type.defaultProps !== void 0 ? $($({}, m.type.defaultProps), m.props) : m.props, w = x[o], _ = Lx("number");
    if (!h[w]) {
      v++;
      var y;
      return g ? y = ka(0, p) : u && u[w] && u[w].hasStack ? (y = Z0(u[w].stackGroups, s, c), y = Fl(l, y, w, i)) : (y = vl(_, G0(d, n.filter(function(b) {
        var O, S, A = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], C = "hide" in b.props ? b.props.hide : (S = b.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return A === w && !C;
      }), "number", f), a.defaultProps.allowDataOverflow), y = Fl(l, y, w, i)), $($({}, h), {}, z({}, w, $($({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: nt(FN, "".concat(i, ".").concat(v % 2), null),
        domain: y,
        originalDomain: _,
        isCategorical: g,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return h;
  }, {});
}, KN = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(a, "Id"), d = Ze(f, i), p = {};
  return d && d.length ? p = zN(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (p = GN(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), p;
}, VN = function(t) {
  var r = Ot(t), n = Hr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: mf(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Ea(r, n)
  };
}, Em = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = ke(r, xr), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, XN = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = dt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Mm = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, YN = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, d = n.margin || {}, p = ke(l, xr), g = ke(l, or), v = Object.keys(s).reduce(function(y, b) {
    var O = s[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, z({}, S, y[S] + O.width)) : y;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), h = Object.keys(o).reduce(function(y, b) {
    var O = o[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, z({}, S, nt(y, "".concat(S)) + O.height)) : y;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), m = $($({}, h), v), x = m.bottom;
  p && (m.bottom += p.props.height || xr.defaultProps.height), g && r && (m = pM(m, a, n, r));
  var w = c - m.left - m.right, _ = f - m.top - m.bottom;
  return $($({
    brushBottom: x
  }, m), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(_, 0)
  });
}, ZN = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, N2 = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, d = function(m, x) {
    var w = x.graphicalItems, _ = x.stackGroups, y = x.offset, b = x.updateId, O = x.dataStartIndex, S = x.dataEndIndex, A = m.barSize, C = m.layout, T = m.barGap, P = m.barCategoryGap, M = m.maxBarSize, I = Mm(C), j = I.numericAxisName, R = I.cateAxisName, D = XN(w), q = [];
    return w.forEach(function(k, W) {
      var G = Mi(m.data, {
        graphicalItems: [k],
        dataStartIndex: O,
        dataEndIndex: S
      }), F = k.type.defaultProps !== void 0 ? $($({}, k.type.defaultProps), k.props) : k.props, K = F.dataKey, oe = F.maxBarSize, pe = F["".concat(j, "Id")], De = F["".concat(R, "Id")], It = {}, je = s.reduce(function($t, Rt) {
        var ji = x["".concat(Rt.axisType, "Map")], Jf = F["".concat(Rt.axisType, "Id")];
        ji && ji[Jf] || Rt.axisType === "zAxis" || Vt();
        var Qf = ji[Jf];
        return $($({}, $t), {}, z(z({}, Rt.axisType, Qf), "".concat(Rt.axisType, "Ticks"), Hr(Qf)));
      }, It), L = je[R], V = je["".concat(R, "Ticks")], X = _ && _[pe] && _[pe].hasStack && AM(k, _[pe].stackGroups), N = dt(k.type).indexOf("Bar") >= 0, de = Ea(L, V), Z = [], ge = D && dM({
        barSize: A,
        stackGroups: _,
        totalSize: ZN(je, R)
      });
      if (N) {
        var me, Ce, wt = Y(oe) ? M : oe, er = (me = (Ce = Ea(L, V, !0)) !== null && Ce !== void 0 ? Ce : wt) !== null && me !== void 0 ? me : 0;
        Z = hM({
          barGap: T,
          barCategoryGap: P,
          bandSize: er !== de ? er : de,
          sizeList: ge[De],
          maxBarSize: wt
        }), er !== de && (Z = Z.map(function($t) {
          return $($({}, $t), {}, {
            position: $($({}, $t.position), {}, {
              offset: $t.position.offset - er / 2
            })
          });
        }));
      }
      var Fn = k && k.type && k.type.getComposedData;
      Fn && q.push({
        props: $($({}, Fn($($({}, je), {}, {
          displayedData: G,
          props: m,
          dataKey: K,
          item: k,
          bandSize: de,
          barPosition: Z,
          offset: y,
          stackedData: X,
          layout: C,
          dataStartIndex: O,
          dataEndIndex: S
        }))), {}, z(z(z({
          key: k.key || "item-".concat(W)
        }, j, je[j]), R, je[R]), "animationId", b)),
        childIndex: pw(k, m.children),
        item: k
      });
    }), q;
  }, p = function(m, x) {
    var w = m.props, _ = m.dataStartIndex, y = m.dataEndIndex, b = m.updateId;
    if (!sh({
      props: w
    }))
      return null;
    var O = w.children, S = w.layout, A = w.stackOffset, C = w.data, T = w.reverseStackOrder, P = Mm(S), M = P.numericAxisName, I = P.cateAxisName, j = Ze(O, n), R = OM(C, j, "".concat(M, "Id"), "".concat(I, "Id"), A, T), D = s.reduce(function(F, K) {
      var oe = "".concat(K.axisType, "Map");
      return $($({}, F), {}, z({}, oe, KN(w, $($({}, K), {}, {
        graphicalItems: j,
        stackGroups: K.axisType === M && R,
        dataStartIndex: _,
        dataEndIndex: y
      }))));
    }, {}), q = YN($($({}, D), {}, {
      props: w,
      graphicalItems: j
    }), x?.legendBBox);
    Object.keys(D).forEach(function(F) {
      D[F] = f(w, D[F], q, F.replace("Map", ""), r);
    });
    var k = D["".concat(I, "Map")], W = VN(k), G = d(w, $($({}, D), {}, {
      dataStartIndex: _,
      dataEndIndex: y,
      updateId: b,
      graphicalItems: j,
      stackGroups: R,
      offset: q
    }));
    return $($({
      formattedGraphicalItems: G,
      graphicalItems: j,
      offset: q,
      stackGroups: R
    }, W), D);
  }, g = /* @__PURE__ */ (function(h) {
    function m(x) {
      var w, _, y;
      return jN(this, m), y = $N(this, m, [x]), z(y, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), z(y, "accessibilityManager", new yN()), z(y, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = y.state, S = O.dataStartIndex, A = O.dataEndIndex, C = O.updateId;
          y.setState($({
            legendBBox: b
          }, p({
            props: y.props,
            dataStartIndex: S,
            dataEndIndex: A,
            updateId: C
          }, $($({}, y.state), {}, {
            legendBBox: b
          }))));
        }
      }), z(y, "handleReceiveSyncEvent", function(b, O, S) {
        if (y.props.syncId === b) {
          if (S === y.eventEmitterSymbol && typeof y.props.syncMethod != "function")
            return;
          y.applySyncEvent(O);
        }
      }), z(y, "handleBrushChange", function(b) {
        var O = b.startIndex, S = b.endIndex;
        if (O !== y.state.dataStartIndex || S !== y.state.dataEndIndex) {
          var A = y.state.updateId;
          y.setState(function() {
            return $({
              dataStartIndex: O,
              dataEndIndex: S
            }, p({
              props: y.props,
              dataStartIndex: O,
              dataEndIndex: S,
              updateId: A
            }, y.state));
          }), y.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: S
          });
        }
      }), z(y, "handleMouseEnter", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onMouseEnter;
          J(A) && A(S, b);
        }
      }), z(y, "triggeredAfterMouseMove", function(b) {
        var O = y.getMouseInfo(b), S = O ? $($({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        y.setState(S), y.triggerSyncEvent(S);
        var A = y.props.onMouseMove;
        J(A) && A(S, b);
      }), z(y, "handleItemMouseEnter", function(b) {
        y.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), z(y, "handleItemMouseLeave", function() {
        y.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), z(y, "handleMouseMove", function(b) {
        b.persist(), y.throttleTriggeredAfterMouseMove(b);
      }), z(y, "handleMouseLeave", function(b) {
        y.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        y.setState(O), y.triggerSyncEvent(O);
        var S = y.props.onMouseLeave;
        J(S) && S(O, b);
      }), z(y, "handleOuterEvent", function(b) {
        var O = hw(b), S = nt(y.props, "".concat(O));
        if (O && J(S)) {
          var A, C;
          /.*touch.*/i.test(O) ? C = y.getMouseInfo(b.changedTouches[0]) : C = y.getMouseInfo(b), S((A = C) !== null && A !== void 0 ? A : {}, b);
        }
      }), z(y, "handleClick", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onClick;
          J(A) && A(S, b);
        }
      }), z(y, "handleMouseDown", function(b) {
        var O = y.props.onMouseDown;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleMouseUp", function(b) {
        var O = y.props.onMouseUp;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), z(y, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseDown(b.changedTouches[0]);
      }), z(y, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseUp(b.changedTouches[0]);
      }), z(y, "handleDoubleClick", function(b) {
        var O = y.props.onDoubleClick;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleContextMenu", function(b) {
        var O = y.props.onContextMenu;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "triggerSyncEvent", function(b) {
        y.props.syncId !== void 0 && Mc.emit(jc, y.props.syncId, b, y.eventEmitterSymbol);
      }), z(y, "applySyncEvent", function(b) {
        var O = y.props, S = O.layout, A = O.syncMethod, C = y.state.updateId, T = b.dataStartIndex, P = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          y.setState($({
            dataStartIndex: T,
            dataEndIndex: P
          }, p({
            props: y.props,
            dataStartIndex: T,
            dataEndIndex: P,
            updateId: C
          }, y.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var M = b.chartX, I = b.chartY, j = b.activeTooltipIndex, R = y.state, D = R.offset, q = R.tooltipTicks;
          if (!D)
            return;
          if (typeof A == "function")
            j = A(q, b);
          else if (A === "value") {
            j = -1;
            for (var k = 0; k < q.length; k++)
              if (q[k].value === b.activeLabel) {
                j = k;
                break;
              }
          }
          var W = $($({}, D), {}, {
            x: D.left,
            y: D.top
          }), G = Math.min(M, W.x + W.width), F = Math.min(I, W.y + W.height), K = q[j] && q[j].value, oe = Hl(y.state, y.props.data, j), pe = q[j] ? {
            x: S === "horizontal" ? q[j].coordinate : G,
            y: S === "horizontal" ? F : q[j].coordinate
          } : kx;
          y.setState($($({}, b), {}, {
            activeLabel: K,
            activeCoordinate: pe,
            activePayload: oe,
            activeTooltipIndex: j
          }));
        } else
          y.setState(b);
      }), z(y, "renderCursor", function(b) {
        var O, S = y.state, A = S.isTooltipActive, C = S.activeCoordinate, T = S.activePayload, P = S.offset, M = S.activeTooltipIndex, I = S.tooltipAxisBandSize, j = y.getTooltipEventType(), R = (O = b.props.active) !== null && O !== void 0 ? O : A, D = y.props.layout, q = b.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(ON, {
          key: q,
          activeCoordinate: C,
          activePayload: T,
          activeTooltipIndex: M,
          chartName: r,
          element: b,
          isActive: R,
          layout: D,
          offset: P,
          tooltipAxisBandSize: I,
          tooltipEventType: j
        });
      }), z(y, "renderPolarAxis", function(b, O, S) {
        var A = nt(b, "type.axisType"), C = nt(y.state, "".concat(A, "Map")), T = b.type.defaultProps, P = T !== void 0 ? $($({}, T), b.props) : b.props, M = C && C[P["".concat(A, "Id")]];
        return /* @__PURE__ */ xe(b, $($({}, M), {}, {
          className: se(A, M.className),
          key: b.key || "".concat(O, "-").concat(S),
          ticks: Hr(M, !0)
        }));
      }), z(y, "renderPolarGrid", function(b) {
        var O = b.props, S = O.radialLines, A = O.polarAngles, C = O.polarRadius, T = y.state, P = T.radiusAxisMap, M = T.angleAxisMap, I = Ot(P), j = Ot(M), R = j.cx, D = j.cy, q = j.innerRadius, k = j.outerRadius;
        return /* @__PURE__ */ xe(b, {
          polarAngles: Array.isArray(A) ? A : Hr(j, !0).map(function(W) {
            return W.coordinate;
          }),
          polarRadius: Array.isArray(C) ? C : Hr(I, !0).map(function(W) {
            return W.coordinate;
          }),
          cx: R,
          cy: D,
          innerRadius: q,
          outerRadius: k,
          key: b.key || "polar-grid",
          radialLines: S
        });
      }), z(y, "renderLegend", function() {
        var b = y.state.formattedGraphicalItems, O = y.props, S = O.children, A = O.width, C = O.height, T = y.props.margin || {}, P = A - (T.left || 0) - (T.right || 0), M = H0({
          children: S,
          formattedGraphicalItems: b,
          legendWidth: P,
          legendContent: c
        });
        if (!M)
          return null;
        var I = M.item, j = Am(M, SN);
        return /* @__PURE__ */ xe(I, $($({}, j), {}, {
          chartWidth: A,
          chartHeight: C,
          margin: T,
          onBBoxUpdate: y.handleLegendBBoxUpdate
        }));
      }), z(y, "renderTooltip", function() {
        var b, O = y.props, S = O.children, A = O.accessibilityLayer, C = ke(S, et);
        if (!C)
          return null;
        var T = y.state, P = T.isTooltipActive, M = T.activeCoordinate, I = T.activePayload, j = T.activeLabel, R = T.offset, D = (b = C.props.active) !== null && b !== void 0 ? b : P;
        return /* @__PURE__ */ xe(C, {
          viewBox: $($({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: D,
          label: j,
          payload: D ? I : [],
          coordinate: M,
          accessibilityLayer: A
        });
      }), z(y, "renderBrush", function(b) {
        var O = y.props, S = O.margin, A = O.data, C = y.state, T = C.offset, P = C.dataStartIndex, M = C.dataEndIndex, I = C.updateId;
        return /* @__PURE__ */ xe(b, {
          key: b.key || "_recharts-brush",
          onChange: Yn(y.handleBrushChange, b.props.onChange),
          data: A,
          x: B(b.props.x) ? b.props.x : T.left,
          y: B(b.props.y) ? b.props.y : T.top + T.height + T.brushBottom - (S.bottom || 0),
          width: B(b.props.width) ? b.props.width : T.width,
          startIndex: P,
          endIndex: M,
          updateId: "brush-".concat(I)
        });
      }), z(y, "renderReferenceElement", function(b, O, S) {
        if (!b)
          return null;
        var A = y, C = A.clipPathId, T = y.state, P = T.xAxisMap, M = T.yAxisMap, I = T.offset, j = b.type.defaultProps || {}, R = b.props, D = R.xAxisId, q = D === void 0 ? j.xAxisId : D, k = R.yAxisId, W = k === void 0 ? j.yAxisId : k;
        return /* @__PURE__ */ xe(b, {
          key: b.key || "".concat(O, "-").concat(S),
          xAxis: P[q],
          yAxis: M[W],
          viewBox: {
            x: I.left,
            y: I.top,
            width: I.width,
            height: I.height
          },
          clipPathId: C
        });
      }), z(y, "renderActivePoints", function(b) {
        var O = b.item, S = b.activePoint, A = b.basePoint, C = b.childIndex, T = b.isRange, P = [], M = O.props.key, I = O.item.type.defaultProps !== void 0 ? $($({}, O.item.type.defaultProps), O.item.props) : O.item.props, j = I.activeDot, R = I.dataKey, D = $($({
          index: C,
          dataKey: R,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: zf(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, ce(j, !1)), na(j));
        return P.push(m.renderActiveDot(j, D, "".concat(M, "-activePoint-").concat(C))), A ? P.push(m.renderActiveDot(j, $($({}, D), {}, {
          cx: A.x,
          cy: A.y
        }), "".concat(M, "-basePoint-").concat(C))) : T && P.push(null), P;
      }), z(y, "renderGraphicChild", function(b, O, S) {
        var A = y.filterFormatItem(b, O, S);
        if (!A)
          return null;
        var C = y.getTooltipEventType(), T = y.state, P = T.isTooltipActive, M = T.tooltipAxis, I = T.activeTooltipIndex, j = T.activeLabel, R = y.props.children, D = ke(R, et), q = A.props, k = q.points, W = q.isRange, G = q.baseLine, F = A.item.type.defaultProps !== void 0 ? $($({}, A.item.type.defaultProps), A.item.props) : A.item.props, K = F.activeDot, oe = F.hide, pe = F.activeBar, De = F.activeShape, It = !!(!oe && P && D && (K || pe || De)), je = {};
        C !== "axis" && D && D.props.trigger === "click" ? je = {
          onClick: Yn(y.handleItemMouseEnter, b.props.onClick)
        } : C !== "axis" && (je = {
          onMouseLeave: Yn(y.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Yn(y.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var L = /* @__PURE__ */ xe(b, $($({}, A.props), je));
        function V(Rt) {
          return typeof M.dataKey == "function" ? M.dataKey(Rt.payload) : null;
        }
        if (It)
          if (I >= 0) {
            var X, N;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var de = typeof M.dataKey == "function" ? V : "payload.".concat(M.dataKey.toString());
              X = ra(k, de, j), N = W && G && ra(G, de, j);
            } else
              X = k?.[I], N = W && G && G[I];
            if (De || pe) {
              var Z = b.props.activeIndex !== void 0 ? b.props.activeIndex : I;
              return [/* @__PURE__ */ xe(b, $($($({}, A.props), je), {}, {
                activeIndex: Z
              })), null, null];
            }
            if (!Y(X))
              return [L].concat(Pr(y.renderActivePoints({
                item: A,
                activePoint: X,
                basePoint: N,
                childIndex: I,
                isRange: W
              })));
          } else {
            var ge, me = (ge = y.getItemByXY(y.state.activeCoordinate)) !== null && ge !== void 0 ? ge : {
              graphicalItem: L
            }, Ce = me.graphicalItem, wt = Ce.item, er = wt === void 0 ? b : wt, Fn = Ce.childIndex, $t = $($($({}, A.props), je), {}, {
              activeIndex: Fn
            });
            return [/* @__PURE__ */ xe(er, $t), null, null];
          }
        return W ? [L, null, null] : [L, null];
      }), z(y, "renderCustomized", function(b, O, S) {
        return /* @__PURE__ */ xe(b, $($({
          key: "recharts-customized-".concat(S)
        }, y.props), y.state));
      }), z(y, "renderMap", {
        CartesianGrid: {
          handler: ta,
          once: !0
        },
        ReferenceArea: {
          handler: y.renderReferenceElement
        },
        ReferenceLine: {
          handler: ta
        },
        ReferenceDot: {
          handler: y.renderReferenceElement
        },
        XAxis: {
          handler: ta
        },
        YAxis: {
          handler: ta
        },
        Brush: {
          handler: y.renderBrush,
          once: !0
        },
        Bar: {
          handler: y.renderGraphicChild
        },
        Line: {
          handler: y.renderGraphicChild
        },
        Area: {
          handler: y.renderGraphicChild
        },
        Radar: {
          handler: y.renderGraphicChild
        },
        RadialBar: {
          handler: y.renderGraphicChild
        },
        Scatter: {
          handler: y.renderGraphicChild
        },
        Pie: {
          handler: y.renderGraphicChild
        },
        Funnel: {
          handler: y.renderGraphicChild
        },
        Tooltip: {
          handler: y.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: y.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: y.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: y.renderPolarAxis
        },
        Customized: {
          handler: y.renderCustomized
        }
      }), y.clipPathId = "".concat((w = x.id) !== null && w !== void 0 ? w : ri("recharts"), "-clip"), y.throttleTriggeredAfterMouseMove = Hb(y.triggeredAfterMouseMove, (_ = x.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60), y.state = {}, y;
    }
    return DN(m, h), IN(m, [{
      key: "componentDidMount",
      value: function() {
        var w, _;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
            top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var w = this.props, _ = w.children, y = w.data, b = w.height, O = w.layout, S = ke(_, et);
        if (S) {
          var A = S.props.defaultIndex;
          if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
            var C = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, T = Hl(this.state, y, A, C), P = this.state.tooltipTicks[A].coordinate, M = (this.state.offset.top + b) / 2, I = O === "horizontal", j = I ? {
              x: P,
              y: M
            } : {
              y: P,
              x: M
            }, R = this.state.formattedGraphicalItems.find(function(q) {
              var k = q.item;
              return k.type.name === "Scatter";
            });
            R && (j = $($({}, j), R.props.points[A].tooltipPosition), T = R.props.points[A].tooltipPayload);
            var D = {
              activeTooltipIndex: A,
              isTooltipActive: !0,
              activeLabel: C,
              activePayload: T,
              activeCoordinate: j
            };
            this.setState(D), this.renderCursor(S), this.accessibilityManager.setIndex(A);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(w, _) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== _.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== w.margin) {
          var y, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (y = this.props.margin.left) !== null && y !== void 0 ? y : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        Dc([ke(w.children, et)], [ke(this.props.children, et)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var w = ke(this.props.children, et);
        if (w && typeof w.props.shared == "boolean") {
          var _ = w.props.shared ? "axis" : "item";
          return u.indexOf(_) >= 0 ? _ : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(w) {
        if (!this.container)
          return null;
        var _ = this.container, y = _.getBoundingClientRect(), b = tA(y), O = {
          chartX: Math.round(w.pageX - b.left),
          chartY: Math.round(w.pageY - b.top)
        }, S = y.width / _.offsetWidth || 1, A = this.inRange(O.chartX, O.chartY, S);
        if (!A)
          return null;
        var C = this.state, T = C.xAxisMap, P = C.yAxisMap, M = this.getTooltipEventType(), I = Tm(this.state, this.props.data, this.props.layout, A);
        if (M !== "axis" && T && P) {
          var j = Ot(T).scale, R = Ot(P).scale, D = j && j.invert ? j.invert(O.chartX) : null, q = R && R.invert ? R.invert(O.chartY) : null;
          return $($({}, O), {}, {
            xValue: D,
            yValue: q
          }, I);
        }
        return I ? $($({}, O), I) : null;
      }
    }, {
      key: "inRange",
      value: function(w, _) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = w / y, S = _ / y;
        if (b === "horizontal" || b === "vertical") {
          var A = this.state.offset, C = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height;
          return C ? {
            x: O,
            y: S
          } : null;
        }
        var T = this.state, P = T.angleAxisMap, M = T.radiusAxisMap;
        if (P && M) {
          var I = Ot(P);
          return Zy({
            x: O,
            y: S
          }, I);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var w = this.props.children, _ = this.getTooltipEventType(), y = ke(w, et), b = {};
        y && _ === "axis" && (y.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = na(this.props, this.handleOuterEvent);
        return $($({}, O), b);
      }
    }, {
      key: "addListener",
      value: function() {
        Mc.on(jc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Mc.removeListener(jc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(w, _, y) {
        for (var b = this.state.formattedGraphicalItems, O = 0, S = b.length; O < S; O++) {
          var A = b[O];
          if (A.item === w || A.props.key === w.key || _ === dt(A.item.type) && y === A.childIndex)
            return A;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var w = this.clipPathId, _ = this.state.offset, y = _.left, b = _.top, O = _.height, S = _.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: w
        }, /* @__PURE__ */ E.createElement("rect", {
          x: y,
          y: b,
          height: O,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var w = this.state.xAxisMap;
        return w ? Object.entries(w).reduce(function(_, y) {
          var b = Sm(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, z({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var w = this.state.yAxisMap;
        return w ? Object.entries(w).reduce(function(_, y) {
          var b = Sm(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, z({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(w) {
        var _;
        return (_ = this.state.xAxisMap) === null || _ === void 0 || (_ = _[w]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(w) {
        var _;
        return (_ = this.state.yAxisMap) === null || _ === void 0 || (_ = _[w]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(w) {
        var _ = this.state, y = _.formattedGraphicalItems, b = _.activeItem;
        if (y && y.length)
          for (var O = 0, S = y.length; O < S; O++) {
            var A = y[O], C = A.props, T = A.item, P = T.type.defaultProps !== void 0 ? $($({}, T.type.defaultProps), T.props) : T.props, M = dt(T.type);
            if (M === "Bar") {
              var I = (C.data || []).find(function(q) {
                return SI(w, q);
              });
              if (I)
                return {
                  graphicalItem: A,
                  payload: I
                };
            } else if (M === "RadialBar") {
              var j = (C.data || []).find(function(q) {
                return Zy(w, q);
              });
              if (j)
                return {
                  graphicalItem: A,
                  payload: j
                };
            } else if (_i(A, b) || Oi(A, b) || An(A, b)) {
              var R = p$({
                graphicalItem: A,
                activeTooltipItem: b,
                itemData: P.data
              }), D = P.activeIndex === void 0 ? R : P.activeIndex;
              return {
                graphicalItem: $($({}, A), {}, {
                  childIndex: D
                }),
                payload: An(A, b) ? P.data[R] : A.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!sh(this))
          return null;
        var _ = this.props, y = _.children, b = _.className, O = _.width, S = _.height, A = _.style, C = _.compact, T = _.title, P = _.desc, M = Am(_, AN), I = ce(M, !1);
        if (C)
          return /* @__PURE__ */ E.createElement(hm, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(kc, ir({}, I, {
            width: O,
            height: S,
            title: T,
            desc: P
          }), this.renderClipPath(), lh(y, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var j, R;
          I.tabIndex = (j = this.props.tabIndex) !== null && j !== void 0 ? j : 0, I.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", I.onKeyDown = function(q) {
            w.accessibilityManager.keyboardEvent(q);
          }, I.onFocus = function() {
            w.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(hm, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", ir({
          className: se("recharts-wrapper", b),
          style: $({
            position: "relative",
            cursor: "default",
            width: O,
            height: S
          }, A)
        }, D, {
          ref: function(k) {
            w.container = k;
          }
        }), /* @__PURE__ */ E.createElement(kc, ir({}, I, {
          width: O,
          height: S,
          title: T,
          desc: P,
          style: UN
        }), this.renderClipPath(), lh(y, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(Kx);
  z(g, "displayName", r), z(g, "defaultProps", $({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), z(g, "getDerivedStateFromProps", function(h, m) {
    var x = h.dataKey, w = h.data, _ = h.children, y = h.width, b = h.height, O = h.layout, S = h.stackOffset, A = h.margin, C = m.dataStartIndex, T = m.dataEndIndex;
    if (m.updateId === void 0) {
      var P = Em(h);
      return $($($({}, P), {}, {
        updateId: 0
      }, p($($({
        props: h
      }, P), {}, {
        updateId: 0
      }), m)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (x !== m.prevDataKey || w !== m.prevData || y !== m.prevWidth || b !== m.prevHeight || O !== m.prevLayout || S !== m.prevStackOffset || !Ic(A, m.prevMargin)) {
      var M = Em(h), I = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: m.chartX,
        chartY: m.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: m.isTooltipActive
      }, j = $($({}, Tm(m, w, O)), {}, {
        updateId: m.updateId + 1
      }), R = $($($({}, M), I), j);
      return $($($({}, R), p($({
        props: h
      }, R), m)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (!Dc(_, m.prevChildren)) {
      var D, q, k, W, G = ke(_, xr), F = G && (D = (q = G.props) === null || q === void 0 ? void 0 : q.startIndex) !== null && D !== void 0 ? D : C, K = G && (k = (W = G.props) === null || W === void 0 ? void 0 : W.endIndex) !== null && k !== void 0 ? k : T, oe = F !== C || K !== T, pe = !Y(w), De = pe && !oe ? m.updateId : m.updateId + 1;
      return $($({
        updateId: De
      }, p($($({
        props: h
      }, m), {}, {
        updateId: De,
        dataStartIndex: F,
        dataEndIndex: K
      }), m)), {}, {
        prevChildren: _,
        dataStartIndex: F,
        dataEndIndex: K
      });
    }
    return null;
  }), z(g, "renderActiveDot", function(h, m, x) {
    var w;
    return /* @__PURE__ */ Ye(h) ? w = /* @__PURE__ */ xe(h, m) : J(h) ? w = h(m) : w = /* @__PURE__ */ E.createElement(lx, m), /* @__PURE__ */ E.createElement(Te, {
      className: "recharts-active-dot",
      key: x
    }, w);
  });
  var v = /* @__PURE__ */ $e(function(m, x) {
    return /* @__PURE__ */ E.createElement(g, ir({}, m, {
      ref: x
    }));
  });
  return v.displayName = g.displayName, v;
};
const JN = { light: "", dark: ".dark" }, Bx = gt(null);
function Fx() {
  const e = Re(Bx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const QN = $e(({ id: e, className: t, children: r, config: n, ...a }, i) => {
  const o = Vx(), u = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ H.jsx(Bx.Provider, { value: { config: n }, children: /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: i,
      className: fe(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted  [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      "data-chart": u,
      ...a,
      children: [
        /* @__PURE__ */ H.jsx(e2, { config: n, id: u }),
        /* @__PURE__ */ H.jsx(VS, { children: r })
      ]
    }
  ) });
});
QN.displayName = "Chart";
const e2 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ H.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(JN).map(
          ([n, a]) => `
${a} [data-chart=${e}] {
${r.map(([i, o]) => {
            var u;
            const s = ((u = o.theme) == null ? void 0 : u[n]) || o.color;
            return s ? `  --color-${i}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, D2 = et, t2 = $e(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: a = !1,
    hideIndicator: i = !1,
    label: o,
    labelFormatter: u,
    labelClassName: s,
    formatter: c,
    color: f,
    nameKey: l,
    labelKey: d
  }, p) => {
    const { config: g } = Fx(), v = Vl(() => {
      var m;
      if (a || !t?.length)
        return null;
      const [x] = t, w = `${d || x.dataKey || x.name || "value"}`, _ = zl(g, x, w), y = !d && typeof o == "string" ? ((m = g[o]) == null ? void 0 : m.label) || o : _?.label;
      return u ? /* @__PURE__ */ H.jsx("div", { className: fe("font-medium", s), children: u(y, t) }) : y ? /* @__PURE__ */ H.jsx("div", { className: fe("font-medium", s), children: y }) : null;
    }, [
      o,
      u,
      t,
      a,
      s,
      g,
      d
    ]);
    if (!e || !t?.length)
      return null;
    const h = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ H.jsxs(
      "div",
      {
        ref: p,
        className: fe(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          h ? null : v,
          /* @__PURE__ */ H.jsx("div", { className: "grid gap-1", children: t.map((m, x) => {
            const w = `${l || m.name || m.dataKey || "value"}`, _ = zl(g, m, w), y = f || m.payload.fill || m.color;
            return /* @__PURE__ */ H.jsx(
              "div",
              {
                className: fe(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: c && m?.value !== void 0 && m.name ? c(m.value, m.name, m, x, m.payload) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ H.jsx(_.icon, {}) : !i && /* @__PURE__ */ H.jsx(
                    "div",
                    {
                      className: fe(
                        "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": h && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": y,
                        "--color-border": y
                      }
                    }
                  ),
                  /* @__PURE__ */ H.jsxs(
                    "div",
                    {
                      className: fe(
                        "flex flex-1 justify-between leading-none gap-1.5",
                        h ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ H.jsxs("div", { className: "grid gap-1.5", children: [
                          h ? v : null,
                          /* @__PURE__ */ H.jsx("span", { className: "text-muted-foreground", children: _?.label || m.name })
                        ] }),
                        m.value && /* @__PURE__ */ H.jsx("span", { className: "font-mono font-medium text-foreground tabular-nums", children: m.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              m.dataKey
            );
          }) })
        ]
      }
    );
  }
);
t2.displayName = "ChartTooltip";
const r2 = $e(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a }, i) => {
    const { config: o } = Fx();
    return r?.length ? /* @__PURE__ */ H.jsx(
      "div",
      {
        ref: i,
        className: fe(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((u) => {
          const s = `${a || u.dataKey || "value"}`, c = zl(o, u, s);
          return /* @__PURE__ */ H.jsxs(
            "div",
            {
              className: fe(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                c?.icon && !t ? /* @__PURE__ */ H.jsx(c.icon, {}) : /* @__PURE__ */ H.jsx(
                  "div",
                  {
                    className: "size-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: u.color
                    }
                  }
                ),
                c?.label
              ]
            },
            u.value
          );
        })
      }
    ) : null;
  }
);
r2.displayName = "ChartLegend";
function zl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  return r in t && typeof t[r] == "string" ? a = t[r] : n && r in n && typeof n[r] == "string" && (a = n[r]), a in e ? e[a] : e[r];
}
const q2 = ({ x: e, y: t, payload: r, index: n, formatter: a = (i) => String(i) }) => {
  const i = n === 0 ? "start" : "end";
  return /* @__PURE__ */ H.jsx("g", { transform: `translate(${e},${t})`, children: /* @__PURE__ */ H.jsx(
    "text",
    {
      dy: 16,
      fill: "var(--muted-foreground)",
      textAnchor: i,
      x: 0,
      y: -12,
      children: a(r.value)
    }
  ) });
}, n2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("flex flex-col items-stretch", t),
    ...r,
    children: e
  }
));
n2.displayName = "DataList";
const a2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("flex uppercase items-center justify-between gap-2 border-b p-2 text-xs tracking-wide font-medium text-muted-foreground", t),
    ...r,
    children: e
  }
));
a2.displayName = "DataListHeader";
const i2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("", t),
    ...r,
    children: e
  }
));
i2.displayName = "DataListHead";
const o2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("flex flex-col items-stretch pt-1.5", t),
    ...r,
    children: e
  }
));
o2.displayName = "DataListBody";
const u2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("group/row py-0.5 relative flex items-center justify-between gap-3 before:absolute before:z-0 before:-inset-x-0.5 before:inset-y-0.5 before:bg-muted/60 before:opacity-0 hover:before:opacity-100 before:rounded-[6px]", t),
    ...r,
    children: e
  }
));
u2.displayName = "DataListRow";
const s2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("absolute inset-x-0 inset-y-1 z-0 origin-left rounded-[4px] bg-state-info/10 group-hover/row:bg-state-info/25 dark:bg-state-info/20 dark:group-hover/row:bg-state-info/35 transition-all", t),
    ...r,
    children: e
  }
));
s2.displayName = "DataListBar";
const c2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("text-sm p-2 font-medium relative z-10 flex min-w-0 max-w-[calc(100%-32px)] items-center transition-[max-width] duration-300 ease-in-out group-hover/datalist:max-w-[calc(100%-100px)]", t),
    ...r,
    children: e
  }
));
c2.displayName = "DataListItemContent";
const l2 = E.forwardRef(({ children: e, className: t, ...r }, n) => {
  const i = E.Children.toArray(e).length > 1;
  return /* @__PURE__ */ H.jsx(
    "div",
    {
      ref: n,
      className: fe(
        "z-10 flex items-center",
        // Apply animation styles when there are multiple children
        i && '[&>[data-type="value-abs"]]:transition-transform [&>[data-type="value-abs"]]:duration-300 [&>[data-type="value-abs"]]:group-hover/datalist:-translate-x-14',
        i && '[&>[data-type="value-perc"]]:invisible [&>[data-type="value-perc"]]:absolute [&>[data-type="value-perc"]]:right-0 [&>[data-type="value-perc"]]:translate-x-14 [&>[data-type="value-perc"]]:opacity-0 [&>[data-type="value-perc"]]:transition-all [&>[data-type="value-perc"]]:duration-300 [&>[data-type="value-perc"]]:group-hover/datalist:visible [&>[data-type="value-perc"]]:group-hover/datalist:translate-x-0 [&>[data-type="value-perc"]]:group-hover/datalist:opacity-100',
        t
      ),
      ...r,
      children: e
    }
  );
});
l2.displayName = "DataListItemValue";
const f2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("z-10 px-2 text-sm font-mono", t),
    "data-type": "value-abs",
    ...r,
    children: e
  }
));
f2.displayName = "DataListItemValueAbs";
const d2 = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ H.jsx(
  "div",
  {
    ref: n,
    className: fe("px-3 text-sm font-mono text-muted-foreground", t),
    "data-type": "value-perc",
    ...r,
    children: e
  }
));
d2.displayName = "DataListItemValuePerc";
export {
  QN as $,
  m2 as A,
  j2 as B,
  C2 as C,
  n2 as D,
  Ut as E,
  S2 as F,
  li as G,
  Hr as H,
  gi as I,
  sg as J,
  Pt as K,
  Te as L,
  tr as M,
  Y as N,
  Rn as O,
  Uf as P,
  O2 as Q,
  zt as R,
  ri as S,
  w2 as T,
  Je as U,
  A2 as V,
  lx as W,
  _R as X,
  OR as Y,
  N2 as Z,
  E2 as _,
  o2 as a,
  q2 as a0,
  D2 as a1,
  l1 as a2,
  u1 as a3,
  c1 as a4,
  d1 as a5,
  E0 as a6,
  QT as a7,
  Et as a8,
  rE as a9,
  Pe as aa,
  T2 as ab,
  u$ as ac,
  gM as ad,
  SM as ae,
  Ze as af,
  zb as ag,
  mM as ah,
  zy as ai,
  J0 as aj,
  P2 as ak,
  t2 as al,
  u2 as b,
  s2 as c,
  c2 as d,
  l2 as e,
  f2 as f,
  d2 as g,
  a2 as h,
  i2 as i,
  b2 as j,
  x2 as k,
  _2 as l,
  M2 as m,
  B as n,
  Rv as o,
  tt as p,
  J as q,
  el as r,
  Ic as s,
  ce as t,
  nt as u,
  Rc as v,
  Ee as w,
  $2 as x,
  R2 as y,
  I2 as z
};
//# sourceMappingURL=data-list-BnZARP88.mjs.map
