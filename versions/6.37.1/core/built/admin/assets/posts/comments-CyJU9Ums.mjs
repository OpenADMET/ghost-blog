import { l as Nt, j as l, u as Re, i as te, b as He, c as ye, s as Xu, a as we, R as Gt, k as nr, w as kr, o as fr, g as Vd, L as ea, M as Gd, N as ta, z as el, n as Kd } from "./index-BAF0YXsp.mjs";
import { u as Jd, F as Qd, c as Xd } from "./filters-BLBaHhJz.mjs";
import { a as ep, b as ra, j as tp, f as rp, F as np, g as op, C as ip, T as _i, k as Fi, l as Bi, h as tl, m as Li, D as na, M as ap, H as rl, R as sp, e as nl, E as ol, i as qi } from "./tooltip-CTcyINxz.mjs";
import { u as cp, d as up, D as lp, e as fp, f as dp, g as pn } from "./dropdown-menu-BSSmAory.mjs";
import { P as pp, U as il, E as hp, a as mp, S as yp, g as gp } from "./get-site-timezone-DlXmHA3y.mjs";
import { b as Bn, d as oa, c as ia } from "./hooks-BEngBys9.mjs";
import { c as vp, b as bp } from "./settings-CZYL6Jhr.mjs";
import { X as wp, d as aa, f as sa, g as ca, h as ua, i as xp, j as la } from "./dialog-D6_lBvtT.mjs";
import { H as Js, g as Sp, u as jp, a as Ep, L as Tp } from "./virtual-list-window-Bs88yrut.mjs";
import { M as Pp } from "./main-layout-D_HHTP_n.mjs";
import { B as le, C as Np } from "./button-ufGBCcsV.mjs";
import { A as or } from "./avatar-K63cvqSS.mjs";
import { L as dr } from "./loading-indicator-BZsjmp8g.mjs";
import { P as fa, u as Op, b as al, d as Qs, e as Rp } from "./createLucideIcon-DcUfTBt_.mjs";
import { a as Ap, C as Ip } from "./check-IcEnuTpD.mjs";
import { h as Tn } from "./app-utils-DIc5TmxO.mjs";
import { E as Ui } from "./empty-indicator-DvGCvRAX.mjs";
import { S as Mp, b as kp, c as Dp, d as Cp } from "./sheet-D7YesQJE.mjs";
function _p(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ln = "Checkbox", [Fp] = Rp(Ln), [Bp, da] = Fp(Ln);
function Lp(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, h] = Op({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Ln
  }), [m, g] = Re(null), [v, b] = Re(null), w = te(!1), T = m ? !!a || !!m.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: p,
    disabled: i,
    setChecked: h,
    control: m,
    setControl: g,
    name: s,
    form: a,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: vt(o) ? !1 : o,
    isFormControl: T,
    bubbleInput: v,
    setBubbleInput: b
  };
  return /* @__PURE__ */ l.jsx(
    Bp,
    {
      scope: t,
      ...N,
      children: qp(f) ? f(N) : n
    }
  );
}
var sl = "CheckboxTrigger", cl = Nt(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: i,
      value: a,
      disabled: s,
      checked: c,
      required: u,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: m
    } = da(sl, e), g = al(o, d), v = te(c);
    return He(() => {
      const b = i?.form;
      if (b) {
        const w = () => f(v.current);
        return b.addEventListener("reset", w), () => b.removeEventListener("reset", w);
      }
    }, [i, f]), /* @__PURE__ */ l.jsx(
      fa.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": vt(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": pl(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: g,
        onKeyDown: Qs(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: Qs(r, (b) => {
          f((w) => vt(w) ? !0 : !w), m && h && (p.current = b.isPropagationStopped(), p.current || b.stopPropagation());
        })
      }
    );
  }
);
cl.displayName = sl;
var pa = Nt(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ l.jsx(
      Lp,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: a,
        onCheckedChange: u,
        name: n,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            cl,
            {
              ...f,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            dl,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
pa.displayName = Ln;
var ul = "CheckboxIndicator", ll = Nt(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = da(ul, r);
    return /* @__PURE__ */ l.jsx(
      Ap,
      {
        present: n || vt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          fa.span,
          {
            "data-state": pl(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
ll.displayName = ul;
var fl = "CheckboxBubbleInput", dl = Nt(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      name: u,
      value: d,
      form: f,
      bubbleInput: p,
      setBubbleInput: h
    } = da(fl, e), m = al(r, h), g = Jd(i), v = cp(n);
    He(() => {
      const w = p;
      if (!w) return;
      const T = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        T,
        "checked"
      ).set, F = !o.current;
      if (g !== i && k) {
        const R = new Event("click", { bubbles: F });
        w.indeterminate = vt(i), k.call(w, vt(i) ? !1 : i), w.dispatchEvent(R);
      }
    }, [p, g, i, o]);
    const b = te(vt(i) ? !1 : i);
    return /* @__PURE__ */ l.jsx(
      fa.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? b.current,
        required: s,
        disabled: c,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: m,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
dl.displayName = fl;
function qp(e) {
  return typeof e == "function";
}
function vt(e) {
  return e === "indeterminate";
}
function pl(e) {
  return vt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
const Up = Xu(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function zp({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ l.jsx("div", { className: ye(Up({ variant: t }), e), ...r });
}
const hl = Nt(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  pa,
  {
    ref: r,
    className: ye(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-xs border border-primary shadow focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      ll,
      {
        className: ye("grid place-content-center text-current"),
        children: /* @__PURE__ */ l.jsx(Ip, { className: "size-4" })
      }
    )
  }
));
hl.displayName = pa.displayName;
var Yp = "Label", ml = Nt((e, t) => /* @__PURE__ */ l.jsx(
  pp.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
ml.displayName = Yp;
var yl = ml;
const Zp = Xu(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), gl = Nt(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  yl,
  {
    ref: r,
    className: ye(Zp(), e),
    ...t
  }
));
gl.displayName = yl.displayName;
const vl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ l.jsx("section", { className: ye("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...r, children: e }), $p = ["is-less", "is-or-less", "is-greater", "is-or-greater"], Wp = {
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after"
}, Hp = "is-or-less";
function Pe(e, t, r, n, o) {
  return at(t, ((i, a) => {
    const s = i[a];
    if (s === void 0)
      throw new TypeError(ss(a));
    return s;
  })(e, t), r, n, o);
}
function at(e, t, r, n, o, i) {
  const a = _r(t, r, n);
  if (o && t !== a)
    throw new RangeError(kf(e, t, r, n, i));
  return a;
}
function je(e) {
  return e !== null && /object|function/.test(typeof e);
}
function ke(e, t = Map) {
  const r = new t();
  return (n, ...o) => {
    if (r.has(n))
      return r.get(n);
    const i = e(n, ...o);
    return r.set(n, i), i;
  };
}
function Cr(e) {
  return ir({
    name: e
  }, 1);
}
function ir(e, t) {
  return st(((r) => ({
    value: r,
    configurable: 1,
    writable: !t
  })), e);
}
function Vp(e) {
  return st(((t) => ({
    get: t,
    configurable: 1
  })), e);
}
function ha(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function pr(e, t) {
  const r = {};
  let n = e.length;
  for (const o of t)
    r[e[--n]] = o;
  return r;
}
function st(e, t, r) {
  const n = {};
  for (const o in t)
    n[o] = e(t[o], o, r);
  return n;
}
function qn(e, t, r) {
  const n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    n[i] = e(i, o, r);
  }
  return n;
}
function bl(e, t, r) {
  const n = {};
  for (let o = 0; o < e.length; o++)
    n[t[o]] = r[e[o]];
  return n;
}
function Le(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    r[n] = t[n];
  return r;
}
function Xs(e, t) {
  for (const r of t)
    if (r in e)
      return 1;
  return 0;
}
function wl(e, t, r) {
  for (const n of e)
    if (t[n] !== r[n])
      return 0;
  return 1;
}
function xl(e, t, r) {
  const n = {
    ...r
  };
  for (let o = 0; o < t; o++)
    n[e[o]] = 0;
  return n;
}
function J(e, ...t) {
  return (...r) => e(...t, ...r);
}
function ec(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Yr(e) {
  return e.slice().sort();
}
function Pn(e, t) {
  return String(t).padStart(e, "0");
}
function bt(e, t) {
  return Math.sign(e - t);
}
function _r(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function nt(e, t) {
  return [Math.floor(e / t), Ir(e, t)];
}
function Ir(e, t) {
  return (e % t + t) % t;
}
function St(e, t) {
  return [Un(e, t), ma(e, t)];
}
function Un(e, t) {
  return Math.trunc(e / t) || 0;
}
function ma(e, t) {
  return e % t || 0;
}
function hn(e) {
  return Math.abs(e % 1) === 0.5;
}
function Sl(e, t, r) {
  let n = 0, o = 0;
  for (let s = 0; s <= t; s++) {
    const c = e[r[s]], u = Je[s], d = ae / u, [f, p] = St(c, d);
    n += p * u, o += f;
  }
  const [i, a] = St(n, ae);
  return [o + i, a];
}
function zn(e, t, r) {
  const n = {};
  for (let o = t; o >= 0; o--) {
    const i = Je[o];
    n[r[o]] = Un(e, i), e = ma(e, i);
  }
  return n;
}
function Gp(e) {
  if (e !== void 0)
    return ge(e);
}
function Kp(e) {
  if (e !== void 0)
    return rt(e);
}
function jl(e) {
  if (e !== void 0)
    return ya(e);
}
function rt(e) {
  return Pl(ya(e));
}
function ya(e) {
  return Tl(ay(e));
}
function El(e, t) {
  if (t == null)
    throw new RangeError(ss(e));
  return t;
}
function Zr(e) {
  if (!je(e))
    throw new TypeError(Im);
  return e;
}
function ga(e, t, r = e) {
  if (typeof t !== e)
    throw new TypeError(kt(r, t));
  return t;
}
function Tl(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(Tm(t, e));
  return e || 0;
}
function Pl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(Pm(t, e));
  return e;
}
function va(e) {
  if (typeof e == "symbol")
    throw new TypeError(Am);
  return String(e);
}
function xn(e, t) {
  return je(e) ? String(e) : ge(e, t);
}
function ba(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(Rm(e));
  return e;
}
function Nl(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(Om(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(Nm(t, e));
  return e;
}
function xe(e, t) {
  return Math.trunc(Nl(e, t)) || 0;
}
function wa(e, t) {
  return Tl(Nl(e, t), t);
}
function tc(e, t) {
  return Pl(xe(e, t), t);
}
function xa(e, t) {
  let [r, n] = St(t, ae), o = e + r;
  const i = Math.sign(o);
  return i && i === -Math.sign(n) && (o -= i, n += i * ae), [o, n];
}
function ar(e, t, r = 1) {
  return xa(e[0] + t[0] * r, e[1] + t[1] * r);
}
function Lt(e, t) {
  return xa(e[0], e[1] + t);
}
function Ge(e, t) {
  return ar(t, e, -1);
}
function De(e, t) {
  return bt(e[0], t[0]) || bt(e[1], t[1]);
}
function Ol(e, t, r) {
  return De(e, t) === -1 || De(e, r) === 1;
}
function Sa(e, t = 1) {
  const r = BigInt(ae / t);
  return [Number(e / r), Number(e % r) * t];
}
function Nn(e, t = 1) {
  const r = ae / t, [n, o] = St(e, r);
  return [n, o * t];
}
function Ke(e, t = 1, r) {
  const [n, o] = e, [i, a] = St(o, t);
  return n * (ae / t) + (i + (r ? a / t : 0));
}
function ja(e, t, r = nt) {
  const [n, o] = e, [i, a] = r(o, t);
  return [n * (ae / t) + i, a];
}
function Ea(e) {
  return Pe(e, "isoYear", zr, Ur, 1), e.isoYear === zr ? Pe(e, "isoMonth", 4, 12, 1) : e.isoYear === Ur && Pe(e, "isoMonth", 1, 9, 1), e;
}
function Fe(e) {
  return Ae({
    ...e,
    ...Ie,
    isoHour: 12
  }), e;
}
function Ae(e) {
  const t = Pe(e, "isoYear", zr, Ur, 1), r = t === zr ? 1 : t === Ur ? -1 : 0;
  return r && Qe(pe({
    ...e,
    isoDay: e.isoDay + r,
    isoNanosecond: e.isoNanosecond - r
  })), e;
}
function Qe(e) {
  if (!e || Ol(e, py, dy))
    throw new RangeError(Dt);
  return e;
}
function jt(e) {
  return Sl(e, 5, ze)[1];
}
function Yn(e) {
  const [t, r] = nt(e, ae);
  return [zn(r, 5, ze), t];
}
function rc(e) {
  return ja(e, Ve);
}
function Se(e) {
  return hr(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function pe(e) {
  const t = Se(e);
  if (t !== void 0) {
    const [r, n] = St(t, Oe);
    return [r, n * lt + (e.isoMicrosecond || 0) * Jr + (e.isoNanosecond || 0)];
  }
}
function Ta(e, t) {
  const [r, n] = Yn(jt(e) - t);
  return Qe(pe({
    ...e,
    isoDay: e.isoDay + n,
    ...r
  }));
}
function On(...e) {
  return hr(...e) / zf;
}
function hr(...e) {
  const [t, r] = Rl(...e), n = t.valueOf();
  if (!isNaN(n))
    return n - r * Oe;
}
function Rl(e, t = 1, r = 1, n = 0, o = 0, i = 0, a = 0) {
  const s = e === zr ? 1 : e === Ur ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(n, o, i, a), c.setUTCFullYear(e, t - 1, r + s), [c, s];
}
function mr(e, t) {
  let [r, n] = Lt(e, t);
  n < 0 && (n += ae, r -= 1);
  const [o, i] = nt(n, lt), [a, s] = nt(i, Jr);
  return Zn(r * Oe + o, a, s);
}
function Zn(e, t = 0, r = 0) {
  const n = Math.ceil(Math.max(0, Math.abs(e) - bs) / Oe) * Math.sign(e), o = new Date(e - n * Oe);
  return pr(fo, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + n, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, r]);
}
function Pa(e, t) {
  if (t < -bs)
    throw new RangeError(Dt);
  const r = e.formatToParts(t), n = {};
  for (const o of r)
    n[o.type] = o.value;
  return n;
}
function Na(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function Al(e, t) {
  return [t, 0];
}
function Il() {
  return ht;
}
function Ml(e, t) {
  switch (t) {
    case 2:
      return Oa(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function kl(e) {
  return Oa(e) ? 366 : 365;
}
function Oa(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Dl(e) {
  const [t, r] = Rl(e.isoYear, e.isoMonth, e.isoDay);
  return Ir(t.getUTCDay() - r, 7) || 7;
}
function Cl(e) {
  return this.id === jr ? (({ isoYear: t }) => t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(e) : this.id === Pt ? yy(e) : [];
}
function Jp(e) {
  const t = Se(e);
  if (t < my) {
    const { isoYear: i } = e;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const r = Pa(Rs(Pt), t), { era: n, eraYear: o } = Sf(r, Pt);
  return [n, o];
}
function $n(e) {
  return zt(e), yr(e, 1), e;
}
function zt(e) {
  return _l(e, 1), e;
}
function nc(e) {
  return wl(ys, e, _l(e));
}
function _l(e, t) {
  const { isoYear: r } = e, n = Pe(e, "isoMonth", 1, Il(), t);
  return {
    isoYear: r,
    isoMonth: n,
    isoDay: Pe(e, "isoDay", 1, Ml(r, n), t)
  };
}
function yr(e, t) {
  return pr(ze, [Pe(e, "isoHour", 0, 23, t), Pe(e, "isoMinute", 0, 59, t), Pe(e, "isoSecond", 0, 59, t), Pe(e, "isoMillisecond", 0, 999, t), Pe(e, "isoMicrosecond", 0, 999, t), Pe(e, "isoNanosecond", 0, 999, t)]);
}
function ee(e) {
  return e === void 0 ? 0 : nd(Zr(e));
}
function Wn(e, t = 0) {
  e = Xe(e);
  const r = od(e), n = Py(e, t);
  return [nd(e), n, r];
}
function gr(e, t, r, n = 9, o = 0, i = 4) {
  t = Xe(t);
  let a = rd(t, n, o), s = Ia(t), c = en(t, i);
  const u = Xr(t, n, o, 1);
  return a == null ? a = Math.max(r, u) : ql(a, u), s = Ma(s, u, 1), e && (c = ((d) => d < 4 ? (d + 2) % 4 : d)(c)), [a, u, s, c];
}
function Hn(e, t = 6, r) {
  let n = Ia(e = Vn(e, Dn));
  const o = en(e, 7);
  let i = Xr(e, t);
  return i = El(Dn, i), n = Ma(n, i, void 0, r), [i, n, o];
}
function Ra(e) {
  return ws(Xe(e));
}
function Fl(e, t) {
  return Aa(Xe(e), t);
}
function Qp(e) {
  const t = Vn(e, Oo), r = Ot(Oo, Ey, t, 0);
  if (!r)
    throw new RangeError(kt(Oo, r));
  return r;
}
function Aa(e, t = 4) {
  const r = Ll(e);
  return [en(e, 4), ...Bl(Xr(e, t), r)];
}
function Bl(e, t) {
  return e != null ? [Je[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function Ia(e) {
  const t = e[Mr];
  return t === void 0 ? 1 : xe(t, Mr);
}
function Ma(e, t, r, n) {
  const o = n ? ae : Je[t + 1];
  if (o) {
    const i = Je[t];
    if (o % ((e = at(Mr, e, 1, o / i - (n ? 0 : 1), 1)) * i))
      throw new RangeError(kt(Mr, e));
  } else
    e = at(Mr, e, 1, r ? 10 ** 9 : 1, 1);
  return e;
}
function Ll(e) {
  let t = e[No];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (va(t) === "auto")
        return;
      throw new RangeError(kt(No, t));
    }
    t = at(No, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function Xe(e) {
  return e === void 0 ? {} : Zr(e);
}
function Vn(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : Zr(e);
}
function Gn(e) {
  return {
    overflow: gy[e]
  };
}
function ka(e, t, r = 9, n = 0, o) {
  let i = t[e];
  if (i === void 0)
    return o ? n : void 0;
  if (i = va(i), i === "auto")
    return o ? n : null;
  let a = $i[i];
  if (a === void 0 && (a = uy[i]), a === void 0)
    throw new RangeError(Cf(e, i, $i));
  return at(e, a, n, r, 1, cs), a;
}
function Ot(e, t, r, n = 0) {
  const o = r[e];
  if (o === void 0)
    return n;
  const i = va(o), a = t[i];
  if (a === void 0)
    throw new RangeError(Cf(e, i, t));
  return a;
}
function ql(e, t) {
  if (t > e)
    throw new RangeError(Qm);
}
function ct(e) {
  return {
    branding: Es,
    epochNanoseconds: e
  };
}
function qe(e, t, r) {
  return {
    branding: Ct,
    calendar: r,
    timeZone: t,
    epochNanoseconds: e
  };
}
function Ue(e, t = e.calendar) {
  return {
    branding: Er,
    calendar: t,
    ...Le(ly, e)
  };
}
function ut(e, t = e.calendar) {
  return {
    branding: tn,
    calendar: t,
    ...Le(gs, e)
  };
}
function Fr(e, t = e.calendar) {
  return {
    branding: xs,
    calendar: t,
    ...Le(gs, e)
  };
}
function Rn(e, t = e.calendar) {
  return {
    branding: Ss,
    calendar: t,
    ...Le(gs, e)
  };
}
function et(e) {
  return {
    branding: js,
    ...Le(Qf, e)
  };
}
function fe(e) {
  return {
    branding: Ts,
    sign: Rt(e),
    ...Le(ps, e)
  };
}
function Da(e) {
  return ja(e.epochNanoseconds, lt)[0];
}
function Xp(e) {
  return ((t, r = 1) => {
    const [n, o] = t, i = Math.floor(o / r), a = ae / r;
    return BigInt(n) * BigInt(a) + BigInt(i);
  })(e.epochNanoseconds);
}
function Ul(e) {
  return e.epochNanoseconds;
}
function eh(e, t, r, n, o) {
  const i = qt(n), [a, s] = ((b, w) => {
    const T = w((b = Vn(b, Vi))[ed]);
    let N = Ty(b);
    return N = El(Vi, N), [N, T];
  })(o, e), c = Math.max(a, i);
  if (!s && Lr(c, s))
    return oc(n, a);
  if (!s)
    throw new RangeError(co);
  if (!n.sign)
    return 0;
  const [u, d, f] = eo(t, r, s), p = Ya(f), h = to(f), m = Za(f), g = h(d, u, n);
  sr(s) || (Ae(u), Ae(g));
  const v = m(d, u, g, a);
  return Lr(a, s) ? oc(v, a) : ((b, w, T, N, k, F, R) => {
    const L = Rt(b), [B, _] = Ca(N, ms(T, b), T, L, k, F, R), Y = _a(w, B, _);
    return b[re[T]] + Y * L;
  })(v, p(g), a, d, u, p, h);
}
function oc(e, t) {
  return Ke(he(e), Je[t], 1);
}
function Ca(e, t, r, n, o, i, a) {
  const s = re[r], c = {
    ...t,
    [s]: t[s] + n
  }, u = a(e, o, t), d = a(e, o, c);
  return [i(u), i(d)];
}
function _a(e, t, r) {
  const n = Ke(Ge(t, r));
  if (!n)
    throw new RangeError(Sr);
  return Ke(Ge(t, e)) / n;
}
function th(e, t) {
  const [r, n, o] = Hn(t, 5, 1);
  return ct(Jn(e.epochNanoseconds, r, n, o, 1));
}
function rh(e, t, r) {
  let { epochNanoseconds: n, timeZone: o, calendar: i } = t;
  const [a, s, c] = Hn(r);
  if (a === 0 && s === 1)
    return t;
  const u = e(o);
  if (a === 6)
    n = ((d, f, p, h) => {
      const m = _e(p, f), [g, v] = d(m), b = p.epochNanoseconds, w = Tt(f, g), T = Tt(f, v);
      if (Ol(b, w, T))
        throw new RangeError(Sr);
      return Wl(_a(b, w, T), h) ? T : w;
    })(Zl, u, t, c);
  else {
    const d = u.R(n);
    n = vr(u, zl(mr(n, d), a, s, c), d, 2, 0, 1);
  }
  return qe(n, o, i);
}
function nh(e, t) {
  return Ue(zl(e, ...Hn(t)), e.calendar);
}
function oh(e, t) {
  const [r, n, o] = Hn(t, 5);
  var i;
  return et((i = o, Fa(e, $r(r, n), i)[0]));
}
function ih(e, t) {
  const r = e(t.timeZone), n = _e(t, r), [o, i] = Zl(n), a = Ke(Ge(Tt(r, o), Tt(r, i)), lo, 1);
  if (a <= 0)
    throw new RangeError(Sr);
  return a;
}
function ah(e, t) {
  const { timeZone: r, calendar: n } = t, o = ((i, a, s) => Tt(a, i(_e(s, a))))($l, e(r), t);
  return qe(o, r, n);
}
function zl(e, t, r, n) {
  return Yl(e, $r(t, r), n);
}
function Yl(e, t, r) {
  const [n, o] = Fa(e, t, r);
  return Ae({
    ...Yt(e, o),
    ...n
  });
}
function Fa(e, t, r) {
  return Yn(Et(jt(e), t, r));
}
function An(e) {
  return Et(e, uo, 7);
}
function $r(e, t) {
  return Je[e] * t;
}
function Zl(e) {
  const t = $l(e);
  return [t, Yt(t, 1)];
}
function $l(e) {
  return fy(6, e);
}
function sh(e, t, r) {
  const n = Math.min(qt(e), 6);
  return br(Qn(he(e, n), t, r), n);
}
function Kn(e, t, r, n, o, i, a, s, c, u) {
  if (n === 0 && o === 1)
    return e;
  const d = Lr(n, s) ? sr(s) && n < 6 && r >= 6 ? uh : ch : lh;
  let [f, p, h] = d(e, t, r, n, o, i, a, s, c, u);
  return h && n !== 7 && (f = ((m, g, v, b, w, T, N, k) => {
    const F = Rt(m);
    for (let R = b + 1; R <= v; R++) {
      if (R === 7 && v !== 7)
        continue;
      const L = ms(R, m);
      L[re[R]] += F;
      const B = Ke(Ge(N(k(w, T, L)), g));
      if (B && Math.sign(B) !== F)
        break;
      m = L;
    }
    return m;
  })(f, p, r, Math.max(6, n), a, s, c, u)), f;
}
function Jn(e, t, r, n, o) {
  if (t === 6) {
    const i = ((a) => a[0] + a[1] / ae)(e);
    return [Et(i, r, n), 0];
  }
  return Qn(e, $r(t, r), n, o);
}
function Qn(e, t, r, n) {
  let [o, i] = e;
  n && i < 0 && (i += ae, o -= 1);
  const [a, s] = nt(Et(i, t, r), ae);
  return xa(o + a, s);
}
function Et(e, t, r) {
  return Wl(e / t, r) * t;
}
function Wl(e, t) {
  return Ry[t](e);
}
function ch(e, t, r, n, o, i) {
  const a = Rt(e), s = he(e), c = Jn(s, n, o, i), u = Ge(s, c), d = Math.sign(c[0] - s[0]) === a, f = br(c, Math.min(r, 6));
  return [{
    ...e,
    ...f
  }, ar(t, u), d];
}
function uh(e, t, r, n, o, i, a, s, c, u) {
  const d = Rt(e) || 1, f = Ke(he(e, 5)), p = $r(n, o);
  let h = Et(f, p, i);
  const [m, g] = Ca(a, {
    ...e,
    ...hs
  }, 6, d, s, c, u), v = h - Ke(Ge(m, g));
  let b = 0;
  v && Math.sign(v) !== d ? t = Lt(m, h) : (b += d, h = Et(v, p, i), t = Lt(g, h));
  const w = ro(h);
  return [{
    ...e,
    ...w,
    days: e.days + b
  }, t, !!b];
}
function lh(e, t, r, n, o, i, a, s, c, u) {
  const d = Rt(e), f = re[n], p = ms(n, e);
  n === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const h = Un(e[f], o) * o;
  p[f] = h;
  const [m, g] = Ca(a, p, n, o * d, s, c, u), v = h + _a(t, m, g) * d * o, b = Et(v, o, i), w = Math.sign(b - v) === d;
  return p[f] = b, [p, w ? g : m, w];
}
function ic(e, t, r, n) {
  const [o, i, a, s] = ((u) => {
    const d = Aa(u = Xe(u));
    return [u.timeZone, ...d];
  })(n), c = o !== void 0;
  return ((u, d, f, p, h, m) => {
    f = Qn(f, h, p, 1);
    const g = d.R(f);
    return Ba(mr(f, g), m) + (u ? Wr(An(g)) : "Z");
  })(c, t(c ? e(o) : Ht), r.epochNanoseconds, i, a, s);
}
function ac(e, t, r) {
  const [n, o, i, a, s, c] = ((u) => {
    u = Xe(u);
    const d = ws(u), f = Ll(u), p = Oy(u), h = en(u, 4), m = Xr(u, 4);
    return [d, Ny(u), p, h, ...Bl(m, f)];
  })(r);
  return ((u, d, f, p, h, m, g, v, b, w) => {
    p = Qn(p, b, v, 1);
    const T = u(f).R(p);
    return Ba(mr(p, T), w) + Wr(An(T), g) + ((N, k) => k !== 1 ? "[" + (k === 2 ? "!" : "") + N + "]" : "")(f, m) + La(d, h);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, n, o, i, a, s, c);
}
function sc(e, t) {
  const [r, n, o, i] = ((u) => (u = Xe(u), [ws(u), ...Aa(u)]))(t);
  return a = e.calendar, s = r, c = i, Ba(Yl(e, o, n), c) + La(a, s);
  var a, s, c;
}
function cc(e, t) {
  return r = e.calendar, n = e, o = Ra(t), In(n) + La(r, o);
  var r, n, o;
}
function uc(e, t) {
  return Hl(e.calendar, Vl, e, Ra(t));
}
function lc(e, t) {
  return Hl(e.calendar, fh, e, Ra(t));
}
function fc(e, t) {
  const [r, n, o] = Fl(t);
  return i = o, Gl(Fa(e, n, r)[0], i);
  var i;
}
function xo(e, t) {
  const [r, n, o] = Fl(t, 3);
  return n > 1 && Zt(e = {
    ...e,
    ...sh(e, n, r)
  }), ((i, a) => {
    const { sign: s } = i, c = s === -1 ? Ee(i) : i, { hours: u, minutes: d } = c, [f, p] = ja(he(c, 3), Ve, St);
    Xl(f);
    const h = qa(p, a), m = a >= 0 || !s || h;
    return (s < 0 ? "-" : "") + "P" + dc({
      Y: Bt(c.years),
      M: Bt(c.months),
      W: Bt(c.weeks),
      D: Bt(c.days)
    }) + (u || d || f || m ? "T" + dc({
      H: Bt(u),
      M: Bt(d),
      S: Bt(f, m) + h
    }) : "");
  })(e, o);
}
function Hl(e, t, r, n) {
  const o = n > 1 || n === 0 && e !== X;
  return n === 1 ? e === X ? t(r) : In(r) : o ? In(r) + Kl(e, n === 2) : t(r);
}
function dc(e) {
  const t = [];
  for (const r in e) {
    const n = e[r];
    n && t.push(n, r);
  }
  return t.join("");
}
function Ba(e, t) {
  return In(e) + "T" + Gl(e, t);
}
function In(e) {
  return Vl(e) + "-" + Be(e.isoDay);
}
function Vl(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? Jl(t) + Pn(6, Math.abs(t)) : Pn(4, t)) + "-" + Be(e.isoMonth);
}
function fh(e) {
  return Be(e.isoMonth) + "-" + Be(e.isoDay);
}
function Gl(e, t) {
  const r = [Be(e.isoHour), Be(e.isoMinute)];
  return t !== -1 && r.push(Be(e.isoSecond) + ((n, o, i, a) => qa(n * lt + o * Jr + i, a))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), r.join(":");
}
function Wr(e, t = 0) {
  if (t === 1)
    return "";
  const [r, n] = nt(Math.abs(e), lo), [o, i] = nt(n, uo), [a, s] = nt(i, Ve);
  return Jl(e) + Be(r) + ":" + Be(o) + (a || s ? ":" + Be(a) + qa(s) : "");
}
function La(e, t) {
  return t !== 1 && (t > 1 || t === 0 && e !== X) ? Kl(e, t === 2) : "";
}
function Kl(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function qa(e, t) {
  let r = Pn(9, e);
  return r = t === void 0 ? r.replace(My, "") : r.slice(0, t), r ? "." + r : "";
}
function Jl(e) {
  return e < 0 ? "-" : "+";
}
function Bt(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function dh(e, t) {
  const { epochNanoseconds: r } = e, n = (t.R ? t : t(e.timeZone)).R(r), o = mr(r, n);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: n
  };
}
function vr(e, t, r, n = 0, o = 0, i, a) {
  if (r !== void 0 && n === 1 && (n === 1 || a))
    return Ta(t, r);
  const s = e.I(t);
  if (r !== void 0 && n !== 3) {
    const c = ((u, d, f, p) => {
      const h = pe(d);
      p && (f = An(f));
      for (const m of u) {
        let g = Ke(Ge(m, h));
        if (p && (g = An(g)), g === f)
          return m;
      }
    })(s, t, r, i);
    if (c !== void 0)
      return c;
    if (n === 0)
      throw new RangeError(Wm);
  }
  return a ? pe(t) : Hr(e, t, o, s);
}
function Hr(e, t, r = 0, n = e.I(t)) {
  if (n.length === 1)
    return n[0];
  if (r === 1)
    throw new RangeError(Hm);
  if (n.length)
    return n[r === 3 ? 1 : 0];
  const o = pe(t), i = ((s, c) => {
    const u = s.R(Lt(c, -ae));
    return ((d) => {
      if (d > ae)
        throw new RangeError($m);
      return d;
    })(s.R(Lt(c, ae)) - u);
  })(e, o), a = i * (r === 2 ? -1 : 1);
  return (n = e.I(mr(o, a)))[r === 2 ? 0 : n.length - 1];
}
function Tt(e, t) {
  const r = e.I(t);
  if (r.length)
    return r[0];
  const n = Lt(pe(t), -ae);
  return e.O(n, 1);
}
function pc(e, t, r) {
  return ct(Qe(ar(t.epochNanoseconds, ((n) => {
    if (ef(n))
      throw new RangeError(Km);
    return he(n, 5);
  })(e ? Ee(r) : r))));
}
function hc(e, t, r, n, o, i = /* @__PURE__ */ Object.create(null)) {
  const a = t(n.timeZone), s = e(n.calendar);
  return {
    ...n,
    ...Ua(a, s, n, r ? Ee(o) : o, i)
  };
}
function mc(e, t, r, n, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = r;
  return Ue(za(e(i), r, t ? Ee(n) : n, o), i);
}
function yc(e, t, r, n, o) {
  const { calendar: i } = r;
  return ut(Xn(e(i), r, t ? Ee(n) : n, o), i);
}
function gc(e, t, r, n, o) {
  const i = r.calendar, a = e(i);
  let s = Fe(Br(a, r));
  t && (n = $a(n)), n.sign < 0 && (s = a.P(s, {
    ...me,
    months: 1
  }), s = Yt(s, -1));
  const c = a.P(s, n, o);
  return Fr(Br(a, c), i);
}
function vc(e, t, r) {
  return et(Ql(t, e ? Ee(r) : r)[0]);
}
function Ua(e, t, r, n, o) {
  const i = he(n, 5);
  let a = r.epochNanoseconds;
  if (ef(n)) {
    const s = _e(r, e);
    a = ar(Hr(e, {
      ...Xn(t, s, {
        ...n,
        ...hs
      }, o),
      ...Le(ze, s)
    }), i);
  } else
    a = ar(a, i), ee(o);
  return {
    epochNanoseconds: Qe(a)
  };
}
function za(e, t, r, n) {
  const [o, i] = Ql(t, r);
  return Ae({
    ...Xn(e, t, {
      ...r,
      ...hs,
      days: r.days + i
    }, n),
    ...o
  });
}
function Xn(e, t, r, n) {
  if (r.years || r.months || r.weeks)
    return e.P(t, r, n);
  ee(n);
  const o = r.days + he(r, 5)[0];
  return o ? Fe(Yt(t, o)) : t;
}
function Br(e, t, r = 1) {
  return Yt(t, r - e.day(t));
}
function Ql(e, t) {
  const [r, n] = he(t, 5), [o, i] = Yn(jt(e) + n);
  return [o, r + i];
}
function Yt(e, t) {
  return t ? {
    ...e,
    ...Zn(Se(e) + t * Oe)
  } : e;
}
function eo(e, t, r) {
  const n = e(r.calendar);
  return sr(r) ? [r, n, t(r.timeZone)] : [{
    ...r,
    ...Ie
  }, n];
}
function Ya(e) {
  return e ? Ul : pe;
}
function to(e) {
  return e ? J(Ua, e) : za;
}
function Za(e) {
  return e ? J(_h, e) : Fh;
}
function sr(e) {
  return e && e.epochNanoseconds;
}
function Lr(e, t) {
  return e <= 6 - (sr(t) ? 1 : 0);
}
function bc(e, t, r, n, o, i, a) {
  const s = e(Xe(a).relativeTo), c = Math.max(qt(o), qt(i));
  if (Lr(c, s))
    return fe(Zt(((g, v, b, w) => {
      const T = ar(he(g), he(v), w ? -1 : 1);
      if (!Number.isFinite(T[0]))
        throw new RangeError(Dt);
      return {
        ...me,
        ...br(T, b)
      };
    })(o, i, c, n)));
  if (!s)
    throw new RangeError(co);
  n && (i = Ee(i));
  const [u, d, f] = eo(t, r, s), p = to(f), h = Za(f), m = p(d, u, o);
  return fe(h(d, u, p(d, m, i), c));
}
function ph(e, t, r, n, o) {
  const i = qt(n), [a, s, c, u, d] = ((F, R, L) => {
    F = Vn(F, Dn);
    let B = rd(F);
    const _ = L(F[ed]);
    let Y = Ia(F);
    const P = en(F, 7);
    let A = Xr(F);
    if (B === void 0 && A === void 0)
      throw new RangeError(Jm);
    if (A == null && (A = 0), B == null && (B = Math.max(A, R)), ql(B, A), Y = Ma(Y, A, 1), Y > 1 && A > 5 && B !== A)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [B, A, Y, P, _];
  })(o, i, e), f = Math.max(i, a);
  if (!d && f <= 6)
    return fe(Zt(((F, R, L, B, _) => {
      const Y = Jn(he(F), L, B, _);
      return {
        ...me,
        ...br(Y, R)
      };
    })(n, a, s, c, u)));
  if (!sr(d) && !n.sign)
    return n;
  if (!d)
    throw new RangeError(co);
  const [p, h, m] = eo(t, r, d), g = Ya(m), v = to(m), b = Za(m), w = v(h, p, n);
  sr(d) || (Ae(p), Ae(w));
  let T = b(h, p, w, a);
  const N = n.sign, k = Rt(T);
  if (N && k && N !== k)
    throw new RangeError(Sr);
  return T = Kn(T, g(w), a, s, c, u, h, p, g, v), fe(T);
}
function hh(e) {
  return e.sign === -1 ? $a(e) : e;
}
function $a(e) {
  return fe(Ee(e));
}
function Ee(e) {
  const t = {};
  for (const r of re)
    t[r] = -1 * e[r] || 0;
  return t;
}
function mh(e) {
  return !e.sign;
}
function Rt(e, t = re) {
  let r = 0;
  for (const n of t) {
    const o = Math.sign(e[n]);
    if (o) {
      if (r && r !== o)
        throw new RangeError(Gm);
      r = o;
    }
  }
  return r;
}
function Zt(e) {
  for (const t of cy)
    at(t, e[t], -Ac, Ac, 1);
  return Xl(Ke(he(e), Ve)), e;
}
function Xl(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(Vm);
}
function he(e, t = 6) {
  return Sl(e, t, re);
}
function br(e, t = 6) {
  const [r, n] = e, o = zn(n, t, re);
  if (o[re[t]] += r * (ae / Je[t]), !Number.isFinite(o[re[t]]))
    throw new RangeError(Dt);
  return o;
}
function ro(e, t = 5) {
  return zn(e, t, re);
}
function ef(e) {
  return !!Rt(e, Jf);
}
function qt(e) {
  let t = 9;
  for (; t > 0 && !e[re[t]]; t--)
    ;
  return t;
}
function yh(e, t) {
  return [e, t];
}
function wc(e) {
  const t = Math.floor(e / jn) * jn;
  return [t, t + jn];
}
function gh(e) {
  const t = At(e = xn(e));
  if (!t)
    throw new RangeError(Ne(e));
  let r;
  if (t.j)
    r = 0;
  else {
    if (!t.offset)
      throw new RangeError(Ne(e));
    r = $t(t.offset);
  }
  return t.timeZone && Ka(t.timeZone, 1), ct(Ta($n(t), r));
}
function vh(e) {
  const t = At(ge(e));
  if (!t)
    throw new RangeError(Ne(e));
  if (t.timeZone)
    return tf(t, t.offset ? $t(t.offset) : void 0);
  if (t.j)
    throw new RangeError(Ne(e));
  return nf(t);
}
function bh(e, t) {
  const r = At(ge(e));
  if (!r || !r.timeZone)
    throw new RangeError(Ne(e));
  const { offset: n } = r, o = n ? $t(n) : void 0, [, i, a] = Wn(t);
  return tf(r, o, i, a);
}
function $t(e) {
  const t = Ka(e);
  if (t === void 0)
    throw new RangeError(Ne(e));
  return t;
}
function wh(e) {
  const t = At(ge(e));
  if (!t || t.j)
    throw new RangeError(Ne(e));
  return Ue(rf(t));
}
function Wa(e, t, r) {
  let n = At(ge(e));
  if (!n || n.j)
    throw new RangeError(Ne(e));
  return t ? n.calendar === X && (n = n.isoYear === -271821 && n.isoMonth === 4 ? {
    ...n,
    isoDay: 20,
    ...Ie
  } : {
    ...n,
    isoDay: 1,
    ...Ie
  }) : r && n.calendar === X && (n = {
    ...n,
    isoYear: it
  }), ut(n.C ? rf(n) : nf(n));
}
function xh(e, t) {
  const r = Va(ge(t));
  if (r)
    return Ha(r), Fr(Ea(zt(r)));
  const n = Wa(t, 1);
  return Fr(Br(e(n.calendar), n));
}
function Ha(e) {
  if (e.calendar !== X)
    throw new RangeError(ot(e.calendar));
}
function Sh(e, t) {
  const r = Ga(ge(t));
  if (r)
    return Ha(r), Rn(zt(r));
  const n = Wa(t, 0, 1), { calendar: o } = n, i = e(o), [a, s, c] = i.v(n), [u, d] = i.q(a, s), [f, p] = i.G(u, d, c);
  return Rn(Fe(i.V(f, p, c)), o);
}
function jh(e) {
  let t, r = ((n) => {
    const o = Ly.exec(n);
    return o ? (no(o[10]), sf(o)) : void 0;
  })(ge(e));
  if (!r) {
    if (r = At(e), !r)
      throw new RangeError(Ne(e));
    if (!r.C)
      throw new RangeError(Ne(e));
    if (r.j)
      throw new RangeError(ot("Z"));
    Ha(r);
  }
  if ((t = Va(e)) && nc(t))
    throw new RangeError(Ne(e));
  if ((t = Ga(e)) && nc(t))
    throw new RangeError(Ne(e));
  return et(yr(r, 1));
}
function Eh(e) {
  const t = ((r) => {
    const n = zy.exec(r);
    return n ? ((o) => {
      function i(d, f, p) {
        let h = 0, m = 0;
        if (p && ([h, c] = nt(c, Je[p])), d !== void 0) {
          if (s)
            throw new RangeError(ot(d));
          m = ((g) => {
            const v = parseInt(g);
            if (!Number.isFinite(v))
              throw new RangeError(ot(g));
            return v;
          })(d), a = 1, f && (c = Ja(f) * (Je[p] / Ve), s = 1);
        }
        return h + m;
      }
      let a = 0, s = 0, c = 0, u = {
        ...pr(re, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...zn(c, 2, re)
      };
      if (!a)
        throw new RangeError(Df(re));
      return Qa(o[1]) < 0 && (u = Ee(u)), u;
    })(n) : void 0;
  })(ge(e));
  if (!t)
    throw new RangeError(Ne(e));
  return fe(Zt(t));
}
function Th(e) {
  const t = At(e) || Va(e) || Ga(e);
  return t ? t.calendar : e;
}
function Ph(e) {
  const t = At(e);
  return t && (t.timeZone || t.j && Ht || t.offset) || e;
}
function tf(e, t, r = 0, n = 0) {
  const o = Xa(e.timeZone), i = G(o);
  let a;
  return $n(e), a = e.C ? vr(i, e, t, r, n, !i.$, e.j) : Tt(i, e), qe(a, o, so(e.calendar));
}
function rf(e) {
  return of(Ae($n(e)));
}
function nf(e) {
  return of(Fe(zt(e)));
}
function of(e) {
  return {
    ...e,
    calendar: so(e.calendar)
  };
}
function At(e) {
  const t = By.exec(e);
  return t ? ((r) => {
    const n = r[10], o = (n || "").toUpperCase() === "Z";
    return {
      isoYear: af(r),
      isoMonth: parseInt(r[4]),
      isoDay: parseInt(r[5]),
      ...sf(r.slice(5)),
      ...no(r[16]),
      C: !!r[6],
      j: o,
      offset: o ? void 0 : n
    };
  })(t) : void 0;
}
function Va(e) {
  const t = _y.exec(e);
  return t ? ((r) => ({
    isoYear: af(r),
    isoMonth: parseInt(r[4]),
    isoDay: 1,
    ...no(r[5])
  }))(t) : void 0;
}
function Ga(e) {
  const t = Fy.exec(e);
  return t ? ((r) => ({
    isoYear: it,
    isoMonth: parseInt(r[1]),
    isoDay: parseInt(r[2]),
    ...no(r[3])
  }))(t) : void 0;
}
function Ka(e, t) {
  const r = qy.exec(e);
  return r ? ((n, o) => {
    const i = n[4] || n[5];
    if (o && i)
      throw new RangeError(ot(i));
    return ((a) => {
      if (Math.abs(a) >= ae)
        throw new RangeError(Zm);
      return a;
    })((tr(n[2]) * lo + tr(n[3]) * uo + tr(n[4]) * Ve + Ja(n[5] || "")) * Qa(n[1]));
  })(r, t) : void 0;
}
function af(e) {
  const t = Qa(e[1]), r = parseInt(e[2] || e[3]);
  if (t < 0 && !r)
    throw new RangeError(ot(-0));
  return t * r;
}
function sf(e) {
  const t = tr(e[3]);
  return {
    ...Yn(Ja(e[4] || ""))[0],
    isoHour: tr(e[1]),
    isoMinute: tr(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function no(e) {
  let t, r;
  const n = [];
  if (e.replace(Uy, ((o, i, a) => {
    const s = !!i, [c, u] = a.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        n.push(c), t || (t = s);
      else if (s || /[A-Z]/.test(u))
        throw new RangeError(ot(o));
    } else {
      if (r)
        throw new RangeError(ot(o));
      r = c;
    }
    return "";
  })), n.length > 1 && t)
    throw new RangeError(ot(e));
  return {
    timeZone: r,
    calendar: n[0] || X
  };
}
function Ja(e) {
  return parseInt(e.padEnd(9, "0"));
}
function wr(e) {
  return new RegExp(`^${e}$`, "i");
}
function Qa(e) {
  return e && e !== "+" ? -1 : 1;
}
function tr(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function Nh(e) {
  return Xa(ge(e));
}
function Xa(e) {
  const t = es(e);
  return typeof t == "number" ? Wr(t) : t ? ((r) => {
    if ($y.test(r))
      throw new RangeError(Lf(r));
    if (Zy.test(r))
      throw new RangeError(Ym);
    return r.toLowerCase().split("/").map(((n, o) => (n.length <= 3 || /\d/.test(n)) && !/etc|yap/.test(n) ? n.toUpperCase() : n.replace(/baja|dumont|[a-z]+/g, ((i, a) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !a ? ec(i).replace(/island|noronha|murdo|rivadavia|urville/, ec) : i)))).join("/");
  })(e) : Ht;
}
function xc(e) {
  const t = es(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Ht;
}
function es(e) {
  const t = Ka(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== Ht ? Yy(e) : void 0;
}
function cf(e, t) {
  return De(e.epochNanoseconds, t.epochNanoseconds);
}
function uf(e, t) {
  return De(e.epochNanoseconds, t.epochNanoseconds);
}
function Oh(e, t, r, n, o, i) {
  const a = e(Xe(i).relativeTo), s = Math.max(qt(n), qt(o));
  if (wl(re, n, o))
    return 0;
  if (Lr(s, a))
    return De(he(n), he(o));
  if (!a)
    throw new RangeError(co);
  const [c, u, d] = eo(t, r, a), f = Ya(d), p = to(d);
  return De(f(p(u, c, n)), f(p(u, c, o)));
}
function lf(e, t) {
  return xr(e, t) || ts(e, t);
}
function xr(e, t) {
  return bt(Se(e), Se(t));
}
function ts(e, t) {
  return bt(jt(e), jt(t));
}
function Rh(e, t) {
  return !cf(e, t);
}
function Ah(e, t) {
  return !uf(e, t) && !!ff(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function Ih(e, t) {
  return !lf(e, t) && e.calendar === t.calendar;
}
function Mh(e, t) {
  return !xr(e, t) && e.calendar === t.calendar;
}
function kh(e, t) {
  return !xr(e, t) && e.calendar === t.calendar;
}
function Dh(e, t) {
  return !xr(e, t) && e.calendar === t.calendar;
}
function Ch(e, t) {
  return !ts(e, t);
}
function ff(e, t) {
  if (e === t)
    return 1;
  try {
    return xc(e) === xc(t);
  } catch {
  }
}
function Sc(e, t, r, n) {
  const o = gr(e, n, 3, 5), i = oo(t.epochNanoseconds, r.epochNanoseconds, ...o);
  return fe(e ? Ee(i) : i);
}
function jc(e, t, r, n, o, i) {
  const a = ao(n.calendar, o.calendar), [s, c, u, d] = gr(r, i, 5), f = n.epochNanoseconds, p = o.epochNanoseconds, h = De(p, f);
  let m;
  if (h)
    if (s < 6)
      m = oo(f, p, s, c, u, d);
    else {
      const g = t(((b, w) => {
        if (!ff(b, w))
          throw new RangeError(qf);
        return b;
      })(n.timeZone, o.timeZone)), v = e(a);
      m = pf(v, g, n, o, h, s, i), m = Kn(m, p, s, c, u, d, v, n, Ul, J(Ua, g));
    }
  else
    m = me;
  return fe(r ? Ee(m) : m);
}
function Ec(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar), [a, s, c, u] = gr(t, o, 6), d = pe(r), f = pe(n), p = De(f, d);
  let h;
  if (p)
    if (a <= 6)
      h = oo(d, f, a, s, c, u);
    else {
      const m = e(i);
      h = hf(m, r, n, p, a, o), h = Kn(h, f, a, s, c, u, m, r, pe, za);
    }
  else
    h = me;
  return fe(t ? Ee(h) : h);
}
function Tc(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar);
  return df(t, (() => e(i)), r, n, ...gr(t, o, 6, 9, 6));
}
function Pc(e, t, r, n, o) {
  const i = ao(r.calendar, n.calendar), a = gr(t, o, 9, 9, 8), s = e(i), c = Br(s, r), u = Br(s, n);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? fe(me) : df(t, (() => s), Fe(c), Fe(u), ...a, 8);
}
function df(e, t, r, n, o, i, a, s, c = 6) {
  const u = pe(r), d = pe(n);
  if (u === void 0 || d === void 0)
    throw new RangeError(Dt);
  let f;
  if (De(d, u))
    if (o === 6)
      f = oo(u, d, o, i, a, s);
    else {
      const p = t();
      f = p.N(r, n, o), i === c && a === 1 || (f = Kn(f, d, o, i, a, s, p, r, pe, Xn));
    }
  else
    f = me;
  return fe(e ? Ee(f) : f);
}
function Nc(e, t, r, n) {
  const [o, i, a, s] = gr(e, n, 5, 5), c = Et(rs(t, r), $r(i, a), s), u = {
    ...me,
    ...ro(c, o)
  };
  return fe(e ? Ee(u) : u);
}
function _h(e, t, r, n, o, i) {
  const a = De(n.epochNanoseconds, r.epochNanoseconds);
  return a ? o < 6 ? mf(r.epochNanoseconds, n.epochNanoseconds, o) : pf(t, e, r, n, a, o, i) : me;
}
function Fh(e, t, r, n, o) {
  const i = pe(t), a = pe(r), s = De(a, i);
  return s ? n <= 6 ? mf(i, a, n) : hf(e, t, r, s, n, o) : me;
}
function pf(e, t, r, n, o, i, a) {
  const [s, c, u] = ((p, h, m, g) => {
    function v() {
      return R = {
        ...Yt(T, k++ * -g),
        ...w
      }, L = Hr(p, R), De(N, L) === -g;
    }
    const b = _e(h, p), w = Le(ze, b), T = _e(m, p), N = m.epochNanoseconds;
    let k = 0;
    const F = rs(b, T);
    let R, L;
    if (Math.sign(F) === -g && k++, v() && (g === -1 || v()))
      throw new RangeError(Sr);
    const B = Ke(Ge(L, N));
    return [b, R, B];
  })(t, r, n, o);
  var d, f;
  return {
    ...i === 6 ? (d = s, f = c, {
      ...me,
      days: yf(d, f)
    }) : e.N(s, c, i, a),
    ...ro(u)
  };
}
function hf(e, t, r, n, o, i) {
  const [a, s, c] = ((u, d, f) => {
    let p = d, h = rs(u, d);
    return Math.sign(h) === -f && (p = Yt(d, -f), h += ae * f), [u, p, h];
  })(t, r, n);
  return {
    ...e.N(a, s, o, i),
    ...ro(c)
  };
}
function oo(e, t, r, n, o, i) {
  return {
    ...me,
    ...br(Jn(Ge(e, t), n, o, i), r)
  };
}
function mf(e, t, r) {
  return {
    ...me,
    ...br(Ge(e, t), r)
  };
}
function yf(e, t) {
  return io(Se(e), Se(t));
}
function io(e, t) {
  return Math.trunc((t - e) / Oe);
}
function rs(e, t) {
  return jt(t) - jt(e);
}
function ao(e, t) {
  if (e !== t)
    throw new RangeError(Bf);
  return e;
}
function gf(e) {
  return this.m(e)[0];
}
function vf(e) {
  return this.m(e)[1];
}
function ns(e) {
  const [t] = this.v(e);
  return io(this.p(t), Se(e)) + 1;
}
function os(e) {
  const t = Wy.exec(e);
  if (!t)
    throw new RangeError(Um(e));
  return [parseInt(t[1]), !!t[2]];
}
function Vr(e, t) {
  return "M" + Be(e) + (t ? "L" : "");
}
function Mn(e, t, r) {
  return e + (t || r && e >= r ? 1 : 0);
}
function is(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function bf(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function zi(e) {
  return Gf[xf(e)];
}
function wf(e) {
  return oy[xf(e)];
}
function xf(e) {
  return Ut(e.id || X);
}
function Bh(e) {
  function t(o) {
    return ((i, a) => ({
      ...Sf(i, a),
      o: i.month,
      day: parseInt(i.day)
    }))(Pa(r, o), n);
  }
  const r = Rs(e), n = Ut(e);
  return {
    id: e,
    h: Lh(t),
    l: qh(t)
  };
}
function Lh(e) {
  return ke(((t) => {
    const r = Se(t);
    return e(r);
  }), WeakMap);
}
function qh(e) {
  const t = e(0).year - hy;
  return ke(((r) => {
    let n, o = hr(r - t), i = 0;
    const a = [], s = [];
    do
      o += 400 * Oe;
    while ((n = e(o)).year <= r);
    do
      if (o += (1 - n.day) * Oe, n.year === r && (a.push(o), s.push(n.o)), o -= Oe, ++i > 100 || o < -bs)
        throw new RangeError(Sr);
    while ((n = e(o)).year >= r);
    return {
      i: a.reverse(),
      u: Uf(s.reverse())
    };
  }));
}
function Sf(e, t) {
  let r, n, o = jf(e);
  if (e.era) {
    const i = Gf[t], a = Kf[t] || {};
    i !== void 0 && (r = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), r === "bc" || r === "b" ? r = "bce" : r === "ad" || r === "a" ? r = "ce" : r === "beforeroc" && (r = "broc"), r = a[r] || r, n = o, o = bf(n, i[r] || 0));
  }
  return {
    era: r,
    eraYear: n,
    year: o
  };
}
function jf(e) {
  return parseInt(e.relatedYear || e.year);
}
function kn(e) {
  const { year: t, o: r, day: n } = this.h(e), { u: o } = this.l(t);
  return [t, o[r] + 1, n];
}
function qr(e, t = 1, r = 1) {
  return this.l(e).i[t - 1] + (r - 1) * Oe;
}
function Ef(e, t) {
  const r = Sn.call(this, e);
  return [is(t, r), r === t];
}
function Sn(e) {
  const t = Rc(this, e), r = Rc(this, e - 1), n = t.length;
  if (n > r.length) {
    const o = wf(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < n; i++)
      if (t[i] !== r[i])
        return i + 1;
  }
}
function mn(e) {
  return io(qr.call(this, e), qr.call(this, e + 1));
}
function Oc(e, t) {
  const { i: r } = this.l(e);
  let n = t + 1, o = r;
  return n > r.length && (n = 1, o = this.l(e + 1).i), io(r[t - 1], o[n - 1]);
}
function yn(e) {
  return this.l(e).i.length;
}
function Tf(e) {
  const t = this.h(e);
  return [t.era, t.eraYear];
}
function Rc(e, t) {
  return Object.keys(e.l(t).u);
}
function Gr(e) {
  return so(ge(e));
}
function so(e) {
  if ((e = e.toLowerCase()) !== X && e !== jr) {
    const t = Rs(e).resolvedOptions().calendar;
    if (Ut(e) !== Ut(t))
      throw new RangeError(Ff(e));
    return t;
  }
  return e;
}
function Ut(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Pf(e, t) {
  return (r) => r === X ? e : r === jr || r === Pt ? Object.assign(Object.create(e), {
    id: r
  }) : Object.assign(Object.create(t), Hy(r));
}
function Uh(e, t, r, n) {
  const o = It(r, n, dt, [], $f);
  if (o.timeZone !== void 0) {
    const i = r.F(o), a = Kr(o), s = e(o.timeZone);
    return {
      epochNanoseconds: vr(t(s), {
        ...i,
        ...a
      }, o.offset !== void 0 ? $t(o.offset) : void 0),
      timeZone: s
    };
  }
  return {
    ...r.F(o),
    ...Ie
  };
}
function zh(e, t, r, n, o, i) {
  const a = It(r, o, dt, Yf, $f), s = e(a.timeZone), [c, u, d] = Wn(i), f = r.F(a, Gn(c)), p = Kr(a, c);
  return qe(vr(t(s), {
    ...f,
    ...p
  }, a.offset !== void 0 ? $t(a.offset) : void 0, u, d), s, n);
}
function Yh(e, t, r) {
  const n = It(e, t, dt, [], ft), o = ee(r);
  return Ue(Ae({
    ...e.F(n, Gn(o)),
    ...Kr(n, o)
  }));
}
function Zh(e, t, r, n = []) {
  const o = It(e, t, dt, n);
  return e.F(o, r);
}
function $h(e, t, r, n) {
  const o = It(e, t, ds, n);
  return e.K(o, r);
}
function Wh(e, t, r, n) {
  const o = It(e, r, dt, Qr);
  return t && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = it), e._(o, n);
}
function Hh(e, t) {
  return et(Kr(Ce(e, Wi, [], 1), ee(t)));
}
function Vh(e) {
  const t = Ce(e, ps);
  return fe(Zt({
    ...me,
    ...t
  }));
}
function It(e, t, r, n = [], o = []) {
  return Ce(t, [...e.fields(r), ...o].sort(), n);
}
function Ce(e, t, r, n = !r) {
  const o = {};
  let i, a = 0;
  for (const s of t) {
    if (s === i)
      throw new RangeError(km(s));
    if (s === "constructor" || s === "__proto__")
      throw new RangeError(Mm(s));
    let c = e[s];
    if (c !== void 0)
      a = 1, Ic[s] && (c = Ic[s](c, s)), o[s] = c;
    else if (r) {
      if (r.includes(s))
        throw new TypeError(ss(s));
      o[s] = Vf[s];
    }
    i = s;
  }
  if (n && !a)
    throw new TypeError(Df(t));
  return o;
}
function Kr(e, t) {
  return yr(As({
    ...Vf,
    ...e
  }), t);
}
function Gh(e, t, r, n, o) {
  const { calendar: i, timeZone: a } = r, s = e(i), c = t(a), u = [...s.fields(dt), ...Zf].sort(), d = ((b) => {
    const w = _e(b, G), T = Wr(w.offsetNanoseconds), N = ho(b.calendar), [k, F, R] = N.v(w), [L, B] = N.q(k, F), _ = Vr(L, B);
    return {
      ...tg(w),
      year: k,
      monthCode: _,
      day: R,
      offset: T
    };
  })(r), f = Ce(n, u), p = s.k(d, f), h = {
    ...d,
    ...f
  }, [m, g, v] = Wn(o, 2);
  return qe(vr(c, {
    ...s.F(p, Gn(m)),
    ...yr(As(h), m)
  }, $t(h.offset), g, v), a, i);
}
function Kh(e, t, r, n) {
  const o = e(t.calendar), i = [...o.fields(dt), ...ft].sort(), a = {
    ...Of(s = t),
    hour: s.isoHour,
    minute: s.isoMinute,
    second: s.isoSecond,
    millisecond: s.isoMillisecond,
    microsecond: s.isoMicrosecond,
    nanosecond: s.isoNanosecond
  };
  var s;
  const c = Ce(r, i), u = ee(n), d = o.k(a, c), f = {
    ...a,
    ...c
  };
  return Ue(Ae({
    ...o.F(d, Gn(u)),
    ...yr(As(f), u)
  }));
}
function Jh(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(dt).sort(), a = Of(t), s = Ce(r, i), c = o.k(a, s);
  return o.F(c, n);
}
function Qh(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(ds).sort(), a = ((u) => {
    const d = ho(u.calendar), [f, p] = d.v(u), [h, m] = d.q(f, p);
    return {
      year: f,
      monthCode: Vr(h, m)
    };
  })(t), s = Ce(r, i), c = o.k(a, s);
  return o.K(c, n);
}
function Xh(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(dt).sort(), a = ((u) => {
    const d = ho(u.calendar), [f, p, h] = d.v(u), [m, g] = d.q(f, p);
    return {
      monthCode: Vr(m, g),
      day: h
    };
  })(t), s = Ce(r, i), c = o.k(a, s);
  return o._(c, n);
}
function em(e, t, r) {
  return et(((n, o, i) => Kr({
    ...Le(Wi, n),
    ...Ce(o, Wi)
  }, ee(i)))(e, t, r));
}
function tm(e, t) {
  return fe((r = e, n = t, Zt({
    ...r,
    ...Ce(n, ps)
  })));
  var r, n;
}
function Nf(e, t, r, n, o) {
  t = Le(r = e.fields(r), t), n = Ce(n, o = e.fields(o), []);
  let i = e.k(t, n);
  return i = Ce(i, [...r, ...o].sort(), []), e.F(i);
}
function So(e, t) {
  const r = zi(e), n = Kf[e.id || ""] || {};
  let { era: o, eraYear: i, year: a } = t;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Fm);
    if (!r)
      throw new RangeError(_m);
    const s = r[n[o] || o];
    if (s === void 0)
      throw new RangeError(Lm(o));
    const c = bf(i, s);
    if (a !== void 0 && a !== c)
      throw new RangeError(Bm);
    a = c;
  } else if (a === void 0)
    throw new TypeError(qm(r));
  return a;
}
function gn(e, t, r, n) {
  let { month: o, monthCode: i } = t;
  if (i !== void 0) {
    const a = ((s, c, u, d) => {
      const f = s.L(u), [p, h] = os(c);
      let m = Mn(p, h, f);
      if (h) {
        const g = wf(s);
        if (g === void 0)
          throw new RangeError(Or);
        if (g > 0) {
          if (m > g)
            throw new RangeError(Or);
          if (f === void 0) {
            if (d === 1)
              throw new RangeError(Or);
            m--;
          }
        } else {
          if (m !== -g)
            throw new RangeError(Or);
          if (f === void 0 && d === 1)
            throw new RangeError(Or);
        }
      }
      return m;
    })(e, i, r, n);
    if (o !== void 0 && o !== a)
      throw new RangeError(zm);
    o = a, n = 1;
  } else if (o === void 0)
    throw new TypeError(_f);
  return at("month", o, 1, e.B(r), n);
}
function jo(e, t, r, n, o) {
  return Pe(t, "day", 1, e.U(n, r), o);
}
function Eo(e, t, r, n) {
  let o = 0;
  const i = [];
  for (const a of r)
    t[a] !== void 0 ? o = 1 : i.push(a);
  if (Object.assign(e, t), o)
    for (const a of n || i)
      delete e[a];
}
function Of(e) {
  const t = ho(e.calendar), [r, n, o] = t.v(e), [i, a] = t.q(r, n);
  return {
    year: r,
    monthCode: Vr(i, a),
    day: o
  };
}
function rm(e) {
  return ct(Qe(Sa(ba(e))));
}
function nm(e, t, r, n, o = X) {
  return qe(Qe(Sa(ba(r))), t(n), e(o));
}
function om(e, t, r, n, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0, d = X) {
  return Ue(Ae($n(st(xe, pr(fo, [t, r, n, o, i, a, s, c, u])))), e(d));
}
function im(e, t, r, n, o = X) {
  return ut(Fe(zt(st(xe, {
    isoYear: t,
    isoMonth: r,
    isoDay: n
  }))), e(o));
}
function am(e, t, r, n = X, o = 1) {
  const i = xe(t), a = xe(r), s = e(n);
  return Fr(Ea(zt({
    isoYear: i,
    isoMonth: a,
    isoDay: xe(o)
  })), s);
}
function sm(e, t, r, n = X, o = it) {
  const i = xe(t), a = xe(r), s = e(n);
  return Rn(Fe(zt({
    isoYear: xe(o),
    isoMonth: i,
    isoDay: a
  })), s);
}
function cm(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0) {
  return et(yr(st(xe, pr(ze, [e, t, r, n, o, i])), 1));
}
function um(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0) {
  return fe(Zt(st(wa, pr(re, [e, t, r, n, o, i, a, s, c, u]))));
}
function lm(e, t, r = X) {
  return qe(e.epochNanoseconds, t, r);
}
function fm(e) {
  return ct(e.epochNanoseconds);
}
function Rf(e, t) {
  return Ue(_e(t, e));
}
function Af(e, t) {
  return ut(_e(t, e));
}
function If(e, t) {
  return et(_e(t, e));
}
function dm(e, t, r, n) {
  const o = ((i, a, s, c) => {
    const u = ((d) => od(Xe(d)))(c);
    return Hr(i(a), s, u);
  })(e, r, t, n);
  return qe(Qe(o), r, t.calendar);
}
function pm(e, t, r, n, o) {
  const i = e(o.timeZone), a = o.plainTime, s = a !== void 0 ? t(a) : void 0, c = r(i);
  let u;
  return u = s ? Hr(c, {
    ...n,
    ...s
  }) : Tt(c, {
    ...n,
    ...Ie
  }), qe(u, i, n.calendar);
}
function hm(e, t = Ie) {
  return Ue(Ae({
    ...e,
    ...t
  }));
}
function mm(e, t, r) {
  return ((n, o) => {
    const i = It(n, o, Wf);
    return n.K(i, void 0);
  })(e(t.calendar), r);
}
function ym(e, t, r) {
  return ((n, o) => {
    const i = It(n, o, Hf);
    return n._(i);
  })(e(t.calendar), r);
}
function gm(e, t, r, n) {
  return ((o, i, a) => Nf(o, i, Wf, Zr(a), Qr))(e(t.calendar), r, n);
}
function vm(e, t, r, n) {
  return ((o, i, a) => Nf(o, i, Hf, Zr(a), us))(e(t.calendar), r, n);
}
function bm(e) {
  return ct(Qe(Nn(wa(e), lt)));
}
function wm(e) {
  return ct(Qe(Sa(ba(e))));
}
function Wt(e, t, r) {
  const n = new Set(r);
  return (o, i) => {
    const a = r && Xs(o, r);
    if (!Xs(o = ((s, c) => {
      const u = {};
      for (const d in c)
        s.has(d) || (u[d] = c[d]);
      return u;
    })(n, o), e)) {
      if (i && a)
        throw new TypeError("Invalid formatting options");
      o = {
        ...t,
        ...o
      };
    }
    return r && (o.timeZone = Ht, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function Mt(e, t = Mf, r = 0) {
  const [n, , , o] = e;
  return (i, a = wg, ...s) => {
    const c = t(o && o(...s), i, a, n, r), u = c.resolvedOptions();
    return [c, ...xm(e, u, s)];
  };
}
function Mf(e, t, r, n, o) {
  if (r = n(r, o), e) {
    if (r.timeZone !== void 0)
      throw new TypeError(ey);
    r.timeZone = e;
  }
  return new wt(t, r);
}
function xm(e, t, r) {
  const [, n, o] = e;
  return r.map(((i) => (i.calendar && ((a, s, c) => {
    if ((c || a !== X) && a !== s)
      throw new RangeError(Bf);
  })(i.calendar, t.calendar, o), n(i, t))));
}
function Sm(e, t, r) {
  const n = t.timeZone, o = e(n), i = {
    ..._e(t, o),
    ...r || Ie
  };
  let a;
  return a = r ? vr(o, i, i.offsetNanoseconds, 2) : Tt(o, i), qe(a, n, t.calendar);
}
function jm(e, t = Ie) {
  return Ue(Ae({
    ...e,
    ...t
  }));
}
function as(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function Em(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function To(e) {
  const t = Yi();
  return mr(t, e.R(t));
}
function Yi() {
  return Nn(Date.now(), lt);
}
function Nr() {
  return Mc || (Mc = new wt().resolvedOptions().timeZone);
}
const Tm = (e, t) => `Non-integer ${e}: ${t}`, Pm = (e, t) => `Non-positive ${e}: ${t}`, Nm = (e, t) => `Non-finite ${e}: ${t}`, Om = (e) => `Cannot convert bigint to ${e}`, Rm = (e) => `Invalid bigint: ${e}`, Am = "Cannot convert Symbol to string", Im = "Invalid object", kf = (e, t, r, n, o) => o ? kf(e, o[t], o[r], o[n]) : kt(e, t) + `; must be between ${r}-${n}`, kt = (e, t) => `Invalid ${e}: ${t}`, ss = (e) => `Missing ${e}`, Mm = (e) => `Invalid field ${e}`, km = (e) => `Duplicate field ${e}`, Df = (e) => "No valid fields: " + e.join(), Dm = "Invalid bag", Cf = (e, t, r) => kt(e, t) + "; must be " + Object.keys(r).join(), Cm = "Cannot use valueOf", Zi = "Invalid calling context", _m = "Forbidden era/eraYear", Fm = "Mismatching era/eraYear", Bm = "Mismatching year/eraYear", Lm = (e) => `Invalid era: ${e}`, qm = (e) => "Missing year" + (e ? "/era/eraYear" : ""), Um = (e) => `Invalid monthCode: ${e}`, zm = "Mismatching month/monthCode", _f = "Missing month/monthCode", Or = "Invalid leap month", Sr = "Invalid protocol results", Ff = (e) => kt("Calendar", e), Bf = "Mismatching Calendars", Lf = (e) => kt("TimeZone", e), qf = "Mismatching TimeZones", Ym = "Forbidden ICU TimeZone", Zm = "Out-of-bounds offset", $m = "Out-of-bounds TimeZone gap", Wm = "Invalid TimeZone offset", Hm = "Ambiguous offset", Dt = "Out-of-bounds date", Vm = "Out-of-bounds duration", Gm = "Cannot mix duration signs", co = "Missing relativeTo", Km = "Cannot use large units", Jm = "Required smallestUnit or largestUnit", Qm = "smallestUnit > largestUnit", Ne = (e) => `Cannot parse: ${e}`, ot = (e) => `Invalid substring: ${e}`, Xm = (e) => `Cannot format ${e}`, Po = "Mismatching types for formatting", ey = "Cannot specify TimeZone", Uf = /* @__PURE__ */ J(qn, ((e, t) => t)), cr = /* @__PURE__ */ J(qn, ((e, t, r) => r)), Be = /* @__PURE__ */ J(Pn, 2), $i = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, cs = /* @__PURE__ */ Object.keys($i), Oe = 864e5, zf = 1e3, Jr = 1e3, lt = 1e6, Ve = 1e9, uo = 6e10, lo = 36e11, ae = 864e11, Je = [1, Jr, lt, Ve, uo, lo, ae], ft = /* @__PURE__ */ cs.slice(0, 6), Wi = /* @__PURE__ */ Yr(ft), ty = ["offset"], Yf = ["timeZone"], Zf = /* @__PURE__ */ ft.concat(ty), $f = /* @__PURE__ */ Zf.concat(Yf), Hi = ["era", "eraYear"], ry = /* @__PURE__ */ Hi.concat(["year"]), us = ["year"], ls = ["monthCode"], fs = /* @__PURE__ */ ["month"].concat(ls), Qr = ["day"], ds = /* @__PURE__ */ fs.concat(us), Wf = /* @__PURE__ */ ls.concat(us), dt = /* @__PURE__ */ Qr.concat(ds), ny = /* @__PURE__ */ Qr.concat(fs), Hf = /* @__PURE__ */ Qr.concat(ls), Vf = /* @__PURE__ */ cr(ft, 0), X = "iso8601", jr = "gregory", Pt = "japanese", Gf = {
  [jr]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [Pt]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, Kf = {
  [jr]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [Pt]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, oy = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, ge = /* @__PURE__ */ J(ga, "string"), iy = /* @__PURE__ */ J(ga, "boolean"), ay = /* @__PURE__ */ J(ga, "number"), re = /* @__PURE__ */ cs.map(((e) => e + "s")), ps = /* @__PURE__ */ Yr(re), sy = /* @__PURE__ */ re.slice(0, 6), Jf = /* @__PURE__ */ re.slice(6), cy = /* @__PURE__ */ Jf.slice(1), uy = /* @__PURE__ */ Uf(re), me = /* @__PURE__ */ cr(re, 0), hs = /* @__PURE__ */ cr(sy, 0), ms = /* @__PURE__ */ J(xl, re), ze = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ys = ["isoDay", "isoMonth", "isoYear"], fo = /* @__PURE__ */ ze.concat(ys), gs = /* @__PURE__ */ Yr(ys), Qf = /* @__PURE__ */ Yr(ze), ly = /* @__PURE__ */ Yr(fo), Ie = /* @__PURE__ */ cr(Qf, 0), fy = /* @__PURE__ */ J(xl, fo), vs = 1e8, bs = vs * Oe, dy = [vs, 0], py = [-vs, 0], Ur = 275760, zr = -271821, wt = Intl.DateTimeFormat, Xf = "en-GB", hy = 1970, it = 1972, ht = 12, my = /* @__PURE__ */ hr(1868, 9, 8), yy = /* @__PURE__ */ ke(Jp, WeakMap), Dn = "smallestUnit", Vi = "unit", Mr = "roundingIncrement", No = "fractionalSecondDigits", ed = "relativeTo", Oo = "direction", td = {
  constrain: 0,
  reject: 1
}, gy = /* @__PURE__ */ Object.keys(td), vy = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, by = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, wy = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, xy = {
  auto: 0,
  never: 1,
  critical: 2
}, Sy = {
  auto: 0,
  never: 1
}, jy = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, Ey = {
  previous: -1,
  next: 1
}, Xr = /* @__PURE__ */ J(ka, Dn), rd = /* @__PURE__ */ J(ka, "largestUnit"), Ty = /* @__PURE__ */ J(ka, Vi), nd = /* @__PURE__ */ J(Ot, "overflow", td), od = /* @__PURE__ */ J(Ot, "disambiguation", vy), Py = /* @__PURE__ */ J(Ot, "offset", by), ws = /* @__PURE__ */ J(Ot, "calendarName", wy), Ny = /* @__PURE__ */ J(Ot, "timeZoneName", xy), Oy = /* @__PURE__ */ J(Ot, "offset", Sy), en = /* @__PURE__ */ J(Ot, "roundingMode", jy), xs = "PlainYearMonth", Ss = "PlainMonthDay", tn = "PlainDate", Er = "PlainDateTime", js = "PlainTime", Ct = "ZonedDateTime", Es = "Instant", Ts = "Duration", Ry = [Math.floor, (e) => hn(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => hn(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => hn(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => hn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], Ht = "UTC", jn = 5184e3, Ay = /* @__PURE__ */ On(1847), Iy = /* @__PURE__ */ On(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), My = /0+$/, _e = /* @__PURE__ */ ke(dh, WeakMap), Ac = 2 ** 32 - 1, G = /* @__PURE__ */ ke(((e) => {
  const t = es(e);
  return typeof t == "object" ? new Dy(t) : new ky(t || 0);
}));
class ky {
  constructor(t) {
    this.$ = t;
  }
  R() {
    return this.$;
  }
  I(t) {
    return ((r) => {
      const n = pe({
        ...r,
        ...Ie
      });
      if (!n || Math.abs(n[0]) > 1e8)
        throw new RangeError(Dt);
    })(t), [Ta(t, this.$)];
  }
  O() {
  }
}
class Dy {
  constructor(t) {
    this.nn = ((r) => {
      function n(u) {
        const d = _r(u, s, c), [f, p] = wc(d), h = i(f), m = i(p);
        return h === m ? h : o(a(f, p), h, m, u);
      }
      function o(u, d, f, p) {
        let h, m;
        for (; (p === void 0 || (h = p < u[0] ? d : p >= u[1] ? f : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const g = u[0] + Math.floor(m / 2);
          r(g) === f ? u[1] = g : u[0] = g + 1;
        }
        return h;
      }
      const i = ke(r), a = ke(yh);
      let s = Ay, c = Iy;
      return {
        tn(u) {
          const d = n(u - 86400), f = n(u + 86400), p = u - d, h = u - f;
          if (d === f)
            return [p];
          const m = n(p);
          return m === n(h) ? [u - m] : d > f ? [p, h] : [];
        },
        rn: n,
        O(u, d) {
          const f = _r(u, s, c);
          let [p, h] = wc(f);
          const m = jn * d, g = d < 0 ? () => h > s || (s = f, 0) : () => p < c || (c = f, 0);
          for (; g(); ) {
            const v = i(p), b = i(h);
            if (v !== b) {
              const w = a(p, h);
              o(w, v, b);
              const T = w[0];
              if ((bt(T, u) || 1) === d)
                return T;
            }
            p += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((r) => (n) => {
      const o = Pa(r, n * zf);
      return On(jf(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - n;
    })(t));
  }
  R(t) {
    return this.nn.rn(((r) => rc(r)[0])(t)) * Ve;
  }
  I(t) {
    const [r, n] = [On((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * lt + o.isoMicrosecond * Jr + o.isoNanosecond];
    var o;
    return this.nn.tn(r).map(((i) => Qe(Lt(Nn(i, Ve), n))));
  }
  O(t, r) {
    const [n, o] = rc(t), i = this.nn.O(n + (r > 0 || o ? 1 : 0), r);
    if (i !== void 0)
      return Nn(i, Ve);
  }
}
const Ps = "([+-])", En = "(?:[.,](\\d{1,9}))?", id = `(?:(?:${Ps}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Ns = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + En + ")?)?", Os = Ps + Ns, Cy = id + "-?(\\d{2})(?:[T ]" + Ns + "(Z|" + Os + ")?)?", ad = "\\[(!?)([^\\]]*)\\]", po = `((?:${ad}){0,9})`, _y = /* @__PURE__ */ wr(id + po), Fy = /* @__PURE__ */ wr("(?:--)?(\\d{2})-?(\\d{2})" + po), By = /* @__PURE__ */ wr(Cy + po), Ly = /* @__PURE__ */ wr("T?" + Ns + "(?:" + Os + ")?" + po), qy = /* @__PURE__ */ wr(Os), Uy = /* @__PURE__ */ new RegExp(ad, "g"), zy = /* @__PURE__ */ wr(`${Ps}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${En}H)?(?:(\\d+)${En}M)?(?:(\\d+)${En}S)?)?`), Yy = /* @__PURE__ */ ke(((e) => new wt(Xf, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}))), Zy = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, $y = /[^\w\/:+-]+/, Wy = /^M(\d{2})(L?)$/, Hy = /* @__PURE__ */ ke(Bh), Rs = /* @__PURE__ */ ke(((e) => new wt(Xf, {
  calendar: e,
  timeZone: Ht,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
}))), sd = {
  P(e, t, r) {
    const n = ee(r);
    let o, { years: i, months: a, weeks: s, days: c } = t;
    if (c += he(t, 5)[0], i || a)
      o = ((u, d, f, p, h) => {
        let [m, g, v] = u.v(d);
        if (f) {
          const [b, w] = u.q(m, g);
          m += f, g = Mn(b, w, u.L(m)), g = at("month", g, 1, u.B(m), h);
        }
        return p && ([m, g] = u.un(m, g, p)), v = at("day", v, 1, u.U(m, g), h), u.p(m, g, v);
      })(this, e, i, a, n);
    else {
      if (!s && !c)
        return e;
      o = Se(e);
    }
    if (o === void 0)
      throw new RangeError(Dt);
    return o += (7 * s + c) * Oe, Fe(Zn(o));
  },
  N(e, t, r) {
    if (r <= 7) {
      let c = 0, u = yf({
        ...e,
        ...Ie
      }, {
        ...t,
        ...Ie
      });
      return r === 7 && ([c, u] = St(u, 7)), {
        ...me,
        weeks: c,
        days: u
      };
    }
    const n = this.v(e), o = this.v(t);
    let [i, a, s] = ((c, u, d, f, p, h, m) => {
      let g = p - u, v = h - d, b = m - f;
      if (g || v) {
        const w = Math.sign(g || v);
        let T = c.U(p, h), N = 0;
        if (Math.sign(b) === -w) {
          const k = T;
          [p, h] = c.un(p, h, -w), g = p - u, v = h - d, T = c.U(p, h), N = w < 0 ? -k : T;
        }
        if (b = m - Math.min(f, T) + N, g) {
          const [k, F] = c.q(u, d), [R, L] = c.q(p, h);
          if (v = R - k || Number(L) - Number(F), Math.sign(v) === -w) {
            const B = w < 0 && -c.B(p);
            g = (p -= w) - u, v = h - Mn(k, F, c.L(p)) + (B || c.B(p));
          }
        }
      }
      return [g, v, b];
    })(this, ...n, ...o);
    return r === 8 && (a += this.cn(i, n[0]), i = 0), {
      ...me,
      years: i,
      months: a,
      days: s
    };
  },
  F(e, t) {
    const r = ee(t), n = So(this, e), o = gn(this, e, n, r), i = jo(this, e, o, n, r);
    return ut(Fe(this.V(n, o, i)), this.id || X);
  },
  K(e, t) {
    const r = ee(t), n = So(this, e), o = gn(this, e, n, r);
    return Fr(Ea(this.V(n, o, 1)), this.id || X);
  },
  _(e, t) {
    const r = ee(t);
    let n, o, i, a = e.eraYear !== void 0 || e.year !== void 0 ? So(this, e) : void 0;
    const s = !this.id;
    if (a === void 0 && s && (a = it), a !== void 0) {
      const f = gn(this, e, a, r);
      n = jo(this, e, f, a, r);
      const p = this.L(a);
      o = is(f, p), i = f === p;
    } else {
      if (e.monthCode === void 0)
        throw new TypeError(_f);
      if ([o, i] = os(e.monthCode), this.id && this.id !== jr && this.id !== Pt)
        if (this.id && Ut(this.id) === "coptic" && r === 0) {
          const f = i || o !== 13 ? 30 : 6;
          n = e.day, n = _r(n, 1, f);
        } else if (this.id && Ut(this.id) === "chinese" && r === 0) {
          const f = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          n = e.day, n = _r(n, 1, f);
        } else
          n = e.day;
      else
        n = jo(this, e, gn(this, e, it, r), it, r);
    }
    const c = this.G(o, i, n);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, d] = c;
    return Rn(Fe(this.V(u, d, n)), this.id || X);
  },
  fields(e) {
    return zi(this) && e.includes("year") ? [...e, ...Hi] : e;
  },
  k(e, t) {
    const r = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return Eo(r, t, fs), zi(this) && (Eo(r, t, ry), this.id === Pt && Eo(r, t, ny, Hi)), r;
  },
  inLeapYear(e) {
    const [t] = this.v(e);
    return this.sn(t);
  },
  monthsInYear(e) {
    const [t] = this.v(e);
    return this.B(t);
  },
  daysInMonth(e) {
    const [t, r] = this.v(e);
    return this.U(t, r);
  },
  daysInYear(e) {
    const [t] = this.v(e);
    return this.fn(t);
  },
  dayOfYear: ns,
  era(e) {
    return this.hn(e)[0];
  },
  eraYear(e) {
    return this.hn(e)[1];
  },
  monthCode(e) {
    const [t, r] = this.v(e), [n, o] = this.q(t, r);
    return Vr(n, o);
  },
  dayOfWeek: Dl,
  daysInWeek() {
    return 7;
  }
}, Vy = {
  v: Na,
  hn: Cl,
  q: Al
}, Gy = {
  dayOfYear: ns,
  v: Na,
  p: hr
}, Ky = /* @__PURE__ */ Object.assign({}, Gy, {
  weekOfYear: gf,
  yearOfWeek: vf,
  m(e) {
    function t(h) {
      return (7 - h < n ? 7 : 0) - h;
    }
    function r(h) {
      const m = kl(p + h), g = h || 1, v = t(Ir(c + m * g, 7));
      return d = (m + (v - u) * g) / 7;
    }
    const n = this.id ? 1 : 4, o = Dl(e), i = this.dayOfYear(e), a = Ir(o - 1, 7), s = i - 1, c = Ir(a - s, 7), u = t(c);
    let d, f = Math.floor((s - u) / 7) + 1, p = e.isoYear;
    return f ? f > r(0) && (f = 1, p++) : (f = r(-1), p--), [f, p, d];
  }
}), Jy = /* @__PURE__ */ Object.assign({}, sd, Ky, {
  v: Na,
  hn: Cl,
  q: Al,
  G(e, t) {
    if (!t)
      return [it, e];
  },
  sn: Oa,
  L() {
  },
  B: Il,
  cn: (e) => e * ht,
  U: Ml,
  fn: kl,
  V: (e, t, r) => ({
    isoYear: e,
    isoMonth: t,
    isoDay: r
  }),
  p: hr,
  un: (e, t, r) => (e += Un(r, ht), (t += ma(r, ht)) < 1 ? (e--, t += ht) : t > ht && (e++, t -= ht), [e, t]),
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: (e) => e.isoDay
}), Qy = {
  v: kn,
  hn: Tf,
  q: Ef
}, Xy = {
  dayOfYear: ns,
  v: kn,
  p: qr,
  weekOfYear: gf,
  yearOfWeek: vf,
  m() {
    return [];
  }
}, eg = /* @__PURE__ */ Object.assign({}, sd, Xy, {
  v: kn,
  hn: Tf,
  q: Ef,
  G(e, t, r) {
    const n = this.id && Ut(this.id) === "chinese" ? ((u, d, f) => {
      if (d)
        switch (u) {
          case 1:
            return 1651;
          case 2:
            return f < 30 ? 1947 : 1765;
          case 3:
            return f < 30 ? 1966 : 1955;
          case 4:
            return f < 30 ? 1963 : 1944;
          case 5:
            return f < 30 ? 1971 : 1952;
          case 6:
            return f < 30 ? 1960 : 1941;
          case 7:
            return f < 30 ? 1968 : 1938;
          case 8:
            return f < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(e, t, r) : it;
    let [o, i, a] = kn.call(this, {
      isoYear: n,
      isoMonth: ht,
      isoDay: 31
    });
    const s = Sn.call(this, o), c = i === s;
    (bt(e, is(i, s)) || bt(Number(t), Number(c)) || bt(r, a)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const d = o - u, f = Sn.call(this, d), p = Mn(e, t, f);
      if (t === (p === f) && r <= Oc.call(this, d, p))
        return [d, p];
    }
  },
  sn(e) {
    const t = mn.call(this, e);
    return t > mn.call(this, e - 1) && t > mn.call(this, e + 1);
  },
  L: Sn,
  B: yn,
  cn(e, t) {
    const r = t + e, n = Math.sign(e), o = n < 0 ? -1 : 0;
    let i = 0;
    for (let a = t; a !== r; a += n)
      i += yn.call(this, a + o);
    return i;
  },
  U: Oc,
  fn: mn,
  V(e, t, r) {
    return Zn(qr.call(this, e, t, r));
  },
  p: qr,
  un(e, t, r) {
    if (r) {
      if (t += r, !Number.isSafeInteger(t))
        throw new RangeError(Dt);
      if (r < 0)
        for (; t < 1; )
          t += yn.call(this, --e);
      else {
        let n;
        for (; t > (n = yn.call(this, e)); )
          t -= n, e++;
      }
    }
    return [e, t];
  },
  year(e) {
    return this.h(e).year;
  },
  month(e) {
    const { year: t, o: r } = this.h(e), { u: n } = this.l(t);
    return n[r] + 1;
  },
  day(e) {
    return this.h(e).day;
  }
}), ho = /* @__PURE__ */ Pf(Vy, Qy), W = /* @__PURE__ */ Pf(Jy, eg), Ic = {
  era: xn,
  eraYear: xe,
  year: xe,
  month: tc,
  monthCode(e) {
    const t = xn(e);
    return os(t), t;
  },
  day: tc,
  .../* @__PURE__ */ cr(ft, xe),
  .../* @__PURE__ */ cr(re, wa),
  offset(e) {
    const t = xn(e);
    return $t(t), t;
  }
}, As = /* @__PURE__ */ J(bl, ft, ze), tg = /* @__PURE__ */ J(bl, ze, ft), xt = "numeric", rn = ["timeZoneName"], cd = {
  month: xt,
  day: xt
}, Is = {
  year: xt,
  month: xt
}, Ms = /* @__PURE__ */ Object.assign({}, Is, {
  day: xt
}), ks = {
  hour: xt,
  minute: xt,
  second: xt
}, Ds = /* @__PURE__ */ Object.assign({}, Ms, ks), rg = /* @__PURE__ */ Object.assign({}, Ds, {
  timeZoneName: "short"
}), ng = /* @__PURE__ */ Object.keys(Is), og = /* @__PURE__ */ Object.keys(cd), ig = /* @__PURE__ */ Object.keys(Ms), ag = /* @__PURE__ */ Object.keys(ks), Cs = ["dateStyle"], sg = /* @__PURE__ */ ng.concat(Cs), cg = /* @__PURE__ */ og.concat(Cs), _s = /* @__PURE__ */ ig.concat(Cs, ["weekday"]), nn = /* @__PURE__ */ ag.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Fs = /* @__PURE__ */ _s.concat(nn), ug = /* @__PURE__ */ rn.concat(nn), lg = /* @__PURE__ */ rn.concat(_s), fg = /* @__PURE__ */ rn.concat(["day", "weekday"], nn), dg = /* @__PURE__ */ rn.concat(["year", "weekday"], nn), pg = /* @__PURE__ */ Wt(Fs, Ds), hg = /* @__PURE__ */ Wt(Fs, rg), mg = /* @__PURE__ */ Wt(Fs, Ds, rn), yg = /* @__PURE__ */ Wt(_s, Ms, ug), gg = /* @__PURE__ */ Wt(nn, ks, lg), vg = /* @__PURE__ */ Wt(sg, Is, fg), bg = /* @__PURE__ */ Wt(cg, cd, dg), wg = {}, ud = new wt(void 0, {
  calendar: X
}).resolvedOptions().calendar === X, ld = [pg, Da], xg = [hg, Da, 0, (e, t) => {
  const r = e.timeZone;
  if (t && t.timeZone !== r)
    throw new RangeError(qf);
  return r;
}], fd = [mg, Se], dd = [yg, Se], pd = [gg, (e) => jt(e) / lt], hd = [vg, Se, ud], md = [bg, Se, ud];
let Mc;
function _t(e, t, r, n, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Zi);
    Cc(this, t(...c));
  }
  function a(c, u) {
    return Object.defineProperties((function(...d) {
      return c.call(this, s(this), ...d);
    }), Cr(u));
  }
  function s(c) {
    const u = Te(c);
    if (!u || u.branding !== e)
      throw new TypeError(Zi);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Vp(st(a, r)),
    ...ir(st(a, n)),
    ...ha("Temporal." + e)
  }), Object.defineProperties(i, {
    ...ir(o),
    ...Cr(e)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return Cc(u, c), u;
  }, s];
}
function Tr(e) {
  if (Te(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(Dm);
  return e;
}
function on(e) {
  return yd(e) || X;
}
function yd(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return mo(t);
}
function mo(e) {
  if (je(e)) {
    const { calendar: t } = Te(e) || {};
    if (!t)
      throw new TypeError(Ff(e));
    return t;
  }
  return ((t) => so(Th(ge(t))))(e);
}
function Bs(e) {
  const t = {};
  for (const r in e)
    t[r] = (n) => {
      const { calendar: o } = n;
      return W(o)[r](n);
    };
  return t;
}
function Ft() {
  throw new TypeError(Cm);
}
function Me(e) {
  if (je(e)) {
    const { timeZone: t } = Te(e) || {};
    if (!t)
      throw new TypeError(Lf(e));
    return t;
  }
  return ((t) => Xa(Ph(ge(t))))(e);
}
function ue(e) {
  if (je(e)) {
    const t = Te(e);
    return t && t.branding === Ts ? t : Vh(e);
  }
  return Eh(e);
}
function Rr(e) {
  if (e !== void 0) {
    if (je(e)) {
      const t = Te(e) || {};
      switch (t.branding) {
        case Ct:
        case tn:
          return t;
        case Er:
          return ut(t);
      }
      const r = on(e);
      return {
        ...Uh(Me, G, W(r), e),
        calendar: r
      };
    }
    return vh(e);
  }
}
function mt(e, t) {
  if (je(e)) {
    const n = Te(e) || {};
    switch (n.branding) {
      case js:
        return ee(t), n;
      case Er:
        return ee(t), et(n);
      case Ct:
        return ee(t), If(G, n);
    }
    return Hh(e, t);
  }
  const r = jh(e);
  return ee(t), r;
}
function Ls(e) {
  return e === void 0 ? void 0 : mt(e);
}
function Kt(e, t) {
  if (je(e)) {
    const n = Te(e) || {};
    switch (n.branding) {
      case Er:
        return ee(t), n;
      case tn:
        return ee(t), Ue({
          ...n,
          ...Ie
        });
      case Ct:
        return ee(t), Rf(G, n);
    }
    return Yh(W(on(e)), e, t);
  }
  const r = wh(e);
  return ee(t), r;
}
function kc(e, t) {
  if (je(e)) {
    const n = Te(e);
    if (n && n.branding === Ss)
      return ee(t), n;
    const o = yd(e);
    return Wh(W(o || X), !o, e, t);
  }
  const r = Sh(W, e);
  return ee(t), r;
}
function Jt(e, t) {
  if (je(e)) {
    const n = Te(e);
    return n && n.branding === xs ? (ee(t), n) : $h(W(on(e)), e, t);
  }
  const r = xh(W, e);
  return ee(t), r;
}
function Qt(e, t) {
  if (je(e)) {
    const n = Te(e) || {};
    switch (n.branding) {
      case tn:
        return ee(t), n;
      case Er:
        return ee(t), ut(n);
      case Ct:
        return ee(t), Af(G, n);
    }
    return Zh(W(on(e)), e, t);
  }
  const r = Wa(e);
  return ee(t), r;
}
function Xt(e, t) {
  if (je(e)) {
    const r = Te(e);
    if (r && r.branding === Ct)
      return Wn(t), r;
    const n = on(e);
    return zh(Me, G, W(n), n, e, t);
  }
  return bh(e, t);
}
function Dc(e) {
  return st(((t) => (r) => t(Gi(r))), e);
}
function Gi(e) {
  return _e(e, G);
}
function er(e) {
  if (je(e)) {
    const t = Te(e);
    if (t)
      switch (t.branding) {
        case Es:
          return t;
        case Ct:
          return ct(t.epochNanoseconds);
      }
  }
  return gh(e);
}
function Sg() {
  function e(i, a) {
    return new t(i, a);
  }
  function t(i, a = /* @__PURE__ */ Object.create(null)) {
    _n.set(this, ((s, c) => {
      const u = new wt(s, c), d = u.resolvedOptions(), f = d.locale, p = Le(Object.keys(c), d), h = ke(Tg), m = (g, ...v) => {
        if (g) {
          if (v.length !== 2)
            throw new TypeError(Po);
          for (const N of v)
            if (N === void 0)
              throw new TypeError(Po);
        }
        g || v[0] !== void 0 || (v = []);
        const b = v.map(((N) => Te(N) || Number(N)));
        let w, T = 0;
        for (const N of b) {
          const k = typeof N == "object" ? N.branding : void 0;
          if (T++ && k !== w)
            throw new TypeError(Po);
          w = k;
        }
        return w ? h(w)(f, p, ...b) : [u, ...b];
      };
      return m.X = u, m;
    })(i, a));
  }
  const r = wt.prototype, n = Object.getOwnPropertyDescriptors(r), o = Object.getOwnPropertyDescriptors(wt);
  for (const i in n) {
    const a = n[i], s = i.startsWith("format") && jg(i);
    typeof a.value == "function" ? a.value = i === "constructor" ? e : s || Eg(i) : s && (a.get = function() {
      if (!_n.has(this))
        throw new TypeError(Zi);
      return (...c) => s.apply(this, c);
    }, Object.defineProperties(a.get, Cr(`get ${i}`)));
  }
  return o.prototype.value = t.prototype = Object.create({}, n), Object.defineProperties(e, o), e;
}
function jg(e) {
  return Object.defineProperties((function(...t) {
    const r = _n.get(this), [n, ...o] = r(e.includes("Range"), ...t);
    return n[e](...o);
  }), Cr(e));
}
function Eg(e) {
  return Object.defineProperties((function(...t) {
    return _n.get(this).X[e](...t);
  }), Cr(e));
}
function Tg(e) {
  const t = Ig[e];
  if (!t)
    throw new TypeError(Xm(e));
  return Mt(t, ke(Mf), 1);
}
const Cn = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ Cn.get.bind(Cn), Cc = /* @__PURE__ */ Cn.set.bind(Cn), gd = {
  era: Gp,
  eraYear: jl,
  year: ya,
  month: rt,
  daysInMonth: rt,
  daysInYear: rt,
  inLeapYear: iy,
  monthsInYear: rt
}, qs = {
  monthCode: ge
}, vd = {
  day: rt
}, Pg = {
  dayOfWeek: rt,
  dayOfYear: rt,
  weekOfYear: Kp,
  yearOfWeek: jl,
  daysInWeek: rt
}, Us = /* @__PURE__ */ Bs(/* @__PURE__ */ Object.assign({}, gd, qs, vd, Pg)), Ng = /* @__PURE__ */ Bs({
  ...gd,
  ...qs
}), Og = /* @__PURE__ */ Bs({
  ...qs,
  ...vd
}), an = {
  calendarId: (e) => e.calendar
}, Rg = /* @__PURE__ */ qn(((e) => (t) => t[e]), re.concat("sign")), zs = /* @__PURE__ */ qn(((e, t) => (r) => r[ze[t]]), ft), bd = {
  epochMilliseconds: Da,
  epochNanoseconds: Xp
}, [Ag, se] = _t(Ts, um, {
  ...Rg,
  blank: mh
}, {
  with: (e, t) => se(tm(e, t)),
  negated: (e) => se($a(e)),
  abs: (e) => se(hh(e)),
  add: (e, t, r) => se(bc(Rr, W, G, 0, e, ue(t), r)),
  subtract: (e, t, r) => se(bc(Rr, W, G, 1, e, ue(t), r)),
  round: (e, t) => se(ph(Rr, W, G, e, t)),
  total: (e, t) => eh(Rr, W, G, e, t),
  toLocaleString(e, t, r) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, r).format(this) : xo(e);
  },
  toString: xo,
  toJSON: (e) => xo(e),
  valueOf: Ft
}, {
  from: (e) => se(ue(e)),
  compare: (e, t, r) => Oh(Rr, W, G, ue(e), ue(t), r)
}), Ig = {
  Instant: ld,
  PlainDateTime: fd,
  PlainDate: dd,
  PlainTime: pd,
  PlainYearMonth: hd,
  PlainMonthDay: md
}, Mg = /* @__PURE__ */ Mt(ld), kg = /* @__PURE__ */ Mt(xg), Dg = /* @__PURE__ */ Mt(fd), Cg = /* @__PURE__ */ Mt(dd), _g = /* @__PURE__ */ Mt(pd), Fg = /* @__PURE__ */ Mt(hd), Bg = /* @__PURE__ */ Mt(md), [Lg, gt] = _t(js, cm, zs, {
  with(e, t, r) {
    return gt(em(this, Tr(t), r));
  },
  add: (e, t) => gt(vc(0, e, ue(t))),
  subtract: (e, t) => gt(vc(1, e, ue(t))),
  until: (e, t, r) => se(Nc(0, e, mt(t), r)),
  since: (e, t, r) => se(Nc(1, e, mt(t), r)),
  round: (e, t) => gt(oh(e, t)),
  equals: (e, t) => Ch(e, mt(t)),
  toLocaleString(e, t, r) {
    const [n, o] = _g(t, r, e);
    return n.format(o);
  },
  toString: fc,
  toJSON: (e) => fc(e),
  valueOf: Ft
}, {
  from: (e, t) => gt(mt(e, t)),
  compare: (e, t) => ts(mt(e), mt(t))
}), [qg, $e] = _t(Er, J(om, Gr), {
  ...an,
  ...Us,
  ...zs
}, {
  with: (e, t, r) => $e(Kh(W, e, Tr(t), r)),
  withCalendar: (e, t) => $e(as(e, mo(t))),
  withPlainTime: (e, t) => $e(jm(e, Ls(t))),
  add: (e, t, r) => $e(mc(W, 0, e, ue(t), r)),
  subtract: (e, t, r) => $e(mc(W, 1, e, ue(t), r)),
  until: (e, t, r) => se(Ec(W, 0, e, Kt(t), r)),
  since: (e, t, r) => se(Ec(W, 1, e, Kt(t), r)),
  round: (e, t) => $e(nh(e, t)),
  equals: (e, t) => Ih(e, Kt(t)),
  toZonedDateTime: (e, t, r) => be(dm(G, e, Me(t), r)),
  toPlainDate: (e) => We(ut(e)),
  toPlainTime: (e) => gt(et(e)),
  toLocaleString(e, t, r) {
    const [n, o] = Dg(t, r, e);
    return n.format(o);
  },
  toString: sc,
  toJSON: (e) => sc(e),
  valueOf: Ft
}, {
  from: (e, t) => $e(Kt(e, t)),
  compare: (e, t) => lf(Kt(e), Kt(t))
}), [Ug, Ki] = _t(Ss, J(sm, Gr), {
  ...an,
  ...Og
}, {
  with: (e, t, r) => Ki(Xh(W, e, Tr(t), r)),
  equals: (e, t) => Dh(e, kc(t)),
  toPlainDate(e, t) {
    return We(vm(W, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Bg(t, r, e);
    return n.format(o);
  },
  toString: lc,
  toJSON: (e) => lc(e),
  valueOf: Ft
}, {
  from: (e, t) => Ki(kc(e, t))
}), [zg, Ar] = _t(xs, J(am, Gr), {
  ...an,
  ...Ng
}, {
  with: (e, t, r) => Ar(Qh(W, e, Tr(t), r)),
  add: (e, t, r) => Ar(gc(W, 0, e, ue(t), r)),
  subtract: (e, t, r) => Ar(gc(W, 1, e, ue(t), r)),
  until: (e, t, r) => se(Pc(W, 0, e, Jt(t), r)),
  since: (e, t, r) => se(Pc(W, 1, e, Jt(t), r)),
  equals: (e, t) => kh(e, Jt(t)),
  toPlainDate(e, t) {
    return We(gm(W, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Fg(t, r, e);
    return n.format(o);
  },
  toString: uc,
  toJSON: (e) => uc(e),
  valueOf: Ft
}, {
  from: (e, t) => Ar(Jt(e, t)),
  compare: (e, t) => xr(Jt(e), Jt(t))
}), [Yg, We] = _t(tn, J(im, Gr), {
  ...an,
  ...Us
}, {
  with: (e, t, r) => We(Jh(W, e, Tr(t), r)),
  withCalendar: (e, t) => We(as(e, mo(t))),
  add: (e, t, r) => We(yc(W, 0, e, ue(t), r)),
  subtract: (e, t, r) => We(yc(W, 1, e, ue(t), r)),
  until: (e, t, r) => se(Tc(W, 0, e, Qt(t), r)),
  since: (e, t, r) => se(Tc(W, 1, e, Qt(t), r)),
  equals: (e, t) => Mh(e, Qt(t)),
  toZonedDateTime(e, t) {
    const r = je(t) ? t : {
      timeZone: t
    };
    return be(pm(Me, mt, G, e, r));
  },
  toPlainDateTime: (e, t) => $e(hm(e, Ls(t))),
  toPlainYearMonth(e) {
    return Ar(mm(W, e, this));
  },
  toPlainMonthDay(e) {
    return Ki(ym(W, e, this));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Cg(t, r, e);
    return n.format(o);
  },
  toString: cc,
  toJSON: (e) => cc(e),
  valueOf: Ft
}, {
  from: (e, t) => We(Qt(e, t)),
  compare: (e, t) => xr(Qt(e), Qt(t))
}), [Zg, be] = _t(Ct, J(nm, Gr, Nh), {
  ...bd,
  ...an,
  ...Dc(Us),
  ...Dc(zs),
  offset: (e) => Wr(Gi(e).offsetNanoseconds),
  offsetNanoseconds: (e) => Gi(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => ih(G, e)
}, {
  with: (e, t, r) => be(Gh(W, G, e, Tr(t), r)),
  withCalendar: (e, t) => be(as(e, mo(t))),
  withTimeZone: (e, t) => be(Em(e, Me(t))),
  withPlainTime: (e, t) => be(Sm(G, e, Ls(t))),
  add: (e, t, r) => be(hc(W, G, 0, e, ue(t), r)),
  subtract: (e, t, r) => be(hc(W, G, 1, e, ue(t), r)),
  until: (e, t, r) => se(fe(jc(W, G, 0, e, Xt(t), r))),
  since: (e, t, r) => se(fe(jc(W, G, 1, e, Xt(t), r))),
  round: (e, t) => be(rh(G, e, t)),
  startOfDay: (e) => be(ah(G, e)),
  equals: (e, t) => Ah(e, Xt(t)),
  toInstant: (e) => yt(fm(e)),
  toPlainDateTime: (e) => $e(Rf(G, e)),
  toPlainDate: (e) => We(Af(G, e)),
  toPlainTime: (e) => gt(If(G, e)),
  toLocaleString(e, t, r = {}) {
    const [n, o] = kg(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => ac(G, e, t),
  toJSON: (e) => ac(G, e),
  valueOf: Ft,
  getTimeZoneTransition(e, t) {
    const { timeZone: r, epochNanoseconds: n } = e, o = Qp(t), i = G(r).O(n, o);
    return i ? be({
      ...e,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (e, t) => be(Xt(e, t)),
  compare: (e, t) => uf(Xt(e), Xt(t))
}), [$g, yt] = _t(Es, rm, bd, {
  add: (e, t) => yt(pc(0, e, ue(t))),
  subtract: (e, t) => yt(pc(1, e, ue(t))),
  until: (e, t, r) => se(Sc(0, e, er(t), r)),
  since: (e, t, r) => se(Sc(1, e, er(t), r)),
  round: (e, t) => yt(th(e, t)),
  equals: (e, t) => Rh(e, er(t)),
  toZonedDateTimeISO: (e, t) => be(lm(e, Me(t))),
  toLocaleString(e, t, r) {
    const [n, o] = Mg(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => ic(Me, G, e, t),
  toJSON: (e) => ic(Me, G, e),
  valueOf: Ft
}, {
  from: (e) => yt(er(e)),
  fromEpochMilliseconds: (e) => yt(bm(e)),
  fromEpochNanoseconds: (e) => yt(wm(e)),
  compare: (e, t) => cf(er(e), er(t))
}), Wg = /* @__PURE__ */ Object.defineProperties({}, {
  ...ha("Temporal.Now"),
  ...ir({
    timeZoneId: () => Nr(),
    instant: () => yt(ct(Yi())),
    zonedDateTimeISO: (e = Nr()) => be(qe(Yi(), Me(e), X)),
    plainDateTimeISO: (e = Nr()) => $e(Ue(To(G(Me(e))), X)),
    plainDateISO: (e = Nr()) => We(ut(To(G(Me(e))), X)),
    plainTimeISO: (e = Nr()) => gt(et(To(G(Me(e)))))
  })
}), rr = /* @__PURE__ */ Object.defineProperties({}, {
  ...ha("Temporal"),
  ...ir({
    PlainYearMonth: zg,
    PlainMonthDay: Ug,
    PlainDate: Yg,
    PlainTime: Lg,
    PlainDateTime: qg,
    ZonedDateTime: Zg,
    Instant: $g,
    Duration: Ag,
    Now: Wg
  })
}), Hg = /* @__PURE__ */ Sg(), _n = /* @__PURE__ */ new WeakMap();
Object.create(Intl), ir({
  DateTimeFormat: Hg
});
function ur(e) {
  return `'${e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
const Vg = /^(\d{4})-(\d{2})-(\d{2})$/, Gg = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
function _c(e, t) {
  try {
    if (Vg.test(e))
      return rr.PlainDate.from(e).toString();
    const r = Gg.test(e) ? `${e.replace(" ", "T")}Z` : e;
    return rr.Instant.from(r).toZonedDateTimeISO(t).toPlainDate().toString();
  } catch {
    return null;
  }
}
function Kg(e) {
  return rr.Now.zonedDateTimeISO(e).toPlainDate().toString();
}
function Jg(e, t) {
  let r;
  try {
    r = rr.PlainDate.from(e);
  } catch {
    throw new Error(`Invalid filter date: ${e}`);
  }
  try {
    const n = r.toPlainDateTime(rr.PlainTime.from("00:00:00")).toZonedDateTime(t).toInstant(), o = r.toPlainDateTime(rr.PlainTime.from("23:59:59.999")).toZonedDateTime(t).toInstant();
    return {
      start: n.toString({ fractionalSecondDigits: 3 }),
      end: o.toString({ fractionalSecondDigits: 3 })
    };
  } catch {
    throw new Error(`Invalid timezone: ${t}`);
  }
}
function Qg(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp);
}
function Xg(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    return;
  const [r] = t;
  if (!r.startsWith("$"))
    return r;
}
function yo(e) {
  const t = Xg(e);
  if (!t)
    return;
  const r = e[t];
  if (Qg(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [o, i] = n[0];
    return { field: t, operator: o, value: i };
  }
  return {
    field: t,
    operator: "$eq",
    value: r
  };
}
const ev = {
  $eq: "is",
  $ne: "is-not"
}, tv = {
  $lt: "is-less",
  $lte: "is-or-less",
  $gt: "is-greater",
  $gte: "is-or-greater"
}, rv = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, nv = {
  "is-less": "<",
  "is-or-less": "<=",
  "is-greater": ">",
  "is-or-greater": ">="
}, ov = /^[A-Za-z0-9_.-]+$/;
function lr(e, t) {
  return e?.field ?? t;
}
function Fc(e, t) {
  return typeof e == "string" ? t?.quoteStrings || e.startsWith("-") || !ov.test(e) ? ur(e) : e : String(e);
}
function Bc(e, t = !1) {
  const r = e.source, n = r.startsWith("^"), o = r.endsWith("$");
  return n && o ? t ? "does-not-contain" : "contains" : n ? t ? "does-not-start-with" : "starts-with" : o ? t ? "does-not-end-with" : "ends-with" : t ? "does-not-contain" : "contains";
}
function Lc(e) {
  let t = e.source;
  return t.startsWith("^") && (t = t.slice(1)), t.endsWith("$") && (t = t.slice(0, -1)), t.replace(/\\([\\.^$|?*+()[\]{}\/-])/g, "$1");
}
function Ro(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = lr(e, r.key);
      if (!n || n.field !== o)
        return null;
      const i = ev[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = lr(e, r.key);
      return n == null || n === "" ? null : t.operator === "is" ? [`${o}:${Fc(n, e)}`] : t.operator === "is-not" ? [`${o}:-${Fc(n, e)}`] : null;
    }
  };
}
function iv(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = lr(e, r.key);
      return !n || n.field !== o ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Bc(n.value),
        values: [Lc(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Bc(n.value, !0),
        values: [Lc(n.value)]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = lr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (t.operator === "is")
        return [`${o}:${ur(n)}`];
      const i = rv[t.operator];
      return i ? [`${o}:${i}${ur(n)}`] : null;
    }
  };
}
function av(e) {
  return {
    parse(t, r) {
      const n = yo(t), o = lr(e, r.key);
      if (!n || n.field !== o || typeof n.value != "string")
        return null;
      const i = tv[n.operator], a = _c(n.value, r.timezone);
      return !i || !a ? null : {
        field: r.key,
        operator: i,
        values: [a]
      };
    },
    serialize(t, r) {
      const n = t.values[0], o = lr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      const i = _c(n, r.timezone);
      if (!i)
        return null;
      const { start: a, end: s } = Jg(i, r.timezone), c = nv[t.operator];
      if (c === void 0)
        return null;
      const u = t.operator === "is-less" || t.operator === "is-or-greater" ? a : s;
      return [`${o}:${c}'${u}'`];
    }
  };
}
const sv = {
  parse(e, t) {
    const r = yo(e);
    return !r || r.field !== "count.reports" ? null : r.operator === "$eq" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["false"]
    } : r.operator === "$gt" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["true"]
    } : null;
  },
  serialize(e) {
    const t = e.values[0];
    return e.operator !== "is" ? null : t === "true" ? ["count.reports:>0"] : t === "false" ? ["count.reports:0"] : null;
  }
}, go = {
  status: {
    operators: ["is"],
    ui: {
      label: "Status",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "published", label: "Published" },
      { value: "hidden", label: "Hidden" }
    ],
    codec: Ro()
  },
  created_at: {
    operators: $p,
    ui: {
      label: "Date",
      defaultOperator: Hp,
      type: "date"
    },
    codec: av()
  },
  body: {
    operators: ["contains", "does-not-contain"],
    parseKeys: ["html"],
    ui: {
      label: "Text",
      type: "text",
      placeholder: "Search comment text...",
      defaultOperator: "contains",
      className: "w-full max-w-48",
      popoverContentClassName: "w-full max-w-48"
    },
    codec: iv({ field: "html" })
  },
  post: {
    operators: ["is", "is-not"],
    parseKeys: ["post_id"],
    ui: {
      label: "Post",
      type: "select",
      searchable: !0,
      className: "w-full max-w-80",
      popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80"
    },
    codec: Ro({ field: "post_id" })
  },
  author: {
    operators: ["is", "is-not"],
    parseKeys: ["member_id"],
    ui: {
      label: "Author",
      type: "select",
      searchable: !0,
      className: "w-80",
      popoverContentClassName: "w-80"
    },
    codec: Ro({ field: "member_id" })
  },
  reported: {
    operators: ["is"],
    parseKeys: ["count.reports"],
    ui: {
      label: "Reported",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    codec: sv
  }
};
function cv(e, t = {}) {
  const r = t.labels || {};
  return e.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const uv = ["author", "post", "body", "status", "reported", "created_at"];
function lv(e) {
  switch (e) {
    case "author":
      return Gt.createElement(il, { className: "size-4" });
    case "post":
      return Gt.createElement(rp, { className: "size-4" });
    case "body":
      return Gt.createElement(tp, { className: "size-4" });
    case "status":
      return Gt.createElement(up, { className: "size-4" });
    case "reported":
      return Gt.createElement(ra, { className: "size-4" });
    case "created_at":
      return Gt.createElement(ep, { className: "size-4" });
    default:
      return;
  }
}
function fv({
  postValueSource: e,
  memberValueSource: t,
  siteTimezone: r = "UTC"
}) {
  return we(() => {
    const n = Kg(r);
    return uv.map((o) => {
      const i = go[o];
      return {
        key: o,
        ...i.ui,
        icon: lv(o),
        operators: cv(i.operators, { labels: Wp }),
        ..."options" in i && i.options ? { options: i.options } : {},
        ...o === "created_at" ? { defaultValue: n } : {},
        ...o === "author" ? { valueSource: t } : {},
        ...o === "post" ? { valueSource: e } : {}
      };
    });
  }, [t, e, r]);
}
const dv = "MembersResponseType", pv = Bn({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), hv = Bn({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), mv = oa({
  dataType: dv,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "100",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.members), n = t[t.length - 1].meta;
    return {
      members: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function yv(e, t) {
  if (t.length !== 0)
    return `${e}:[${t.map((r) => ur(r)).join(",")}]`;
}
function Fn(...e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    if (r)
      for (const n of r)
        t.has(n.value) || t.set(n.value, n);
  return [...t.values()];
}
function gv(e, t, r, n) {
  var o = this, i = te(null), a = te(0), s = te(0), c = te(null), u = te([]), d = te(), f = te(), p = te(e), h = te(!0), m = te(), g = te();
  p.current = e;
  var v = typeof window < "u", b = !t && t !== 0 && v;
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var w = !!(r = r || {}).leading, T = !("trailing" in r) || !!r.trailing, N = !!r.flushOnExit && T, k = "maxWait" in r, F = "debounceOnServer" in r && !!r.debounceOnServer, R = k ? Math.max(+r.maxWait || 0, t) : null, L = we(function() {
    var B = function(I) {
      var E = u.current, ie = d.current;
      return u.current = d.current = null, a.current = I, s.current = s.current || I, f.current = p.current.apply(ie, E);
    }, _ = function(I, E) {
      b && cancelAnimationFrame(c.current), c.current = b ? requestAnimationFrame(I) : setTimeout(I, E);
    }, Y = function(I) {
      if (!h.current) return !1;
      var E = I - i.current;
      return !i.current || E >= t || E < 0 || k && I - a.current >= R;
    }, P = function(I) {
      return c.current = null, T && u.current ? B(I) : (u.current = d.current = null, f.current);
    }, A = function I() {
      var E = Date.now();
      if (w && s.current === a.current && D(), Y(E)) return P(E);
      if (h.current) {
        var ie = t - (E - i.current), K = k ? Math.min(ie, R - (E - a.current)) : ie;
        _(I, K);
      }
    }, D = function() {
      n && n({});
    }, C = function() {
      if (v || F) {
        var I, E = Date.now(), ie = Y(E);
        if (u.current = [].slice.call(arguments), d.current = o, i.current = E, N && !m.current && (m.current = function() {
          var K;
          ((K = globalThis.document) == null ? void 0 : K.visibilityState) === "hidden" && g.current.flush();
        }, (I = globalThis.document) == null || I.addEventListener == null || I.addEventListener("visibilitychange", m.current)), ie) {
          if (!c.current && h.current) return a.current = i.current, _(A, t), w ? B(i.current) : f.current;
          if (k) return _(A, t), B(i.current);
        }
        return c.current || _(A, t), f.current;
      }
    };
    return C.cancel = function() {
      var I = c.current;
      I && (b ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), a.current = 0, u.current = i.current = d.current = c.current = null, I && n && n({});
    }, C.isPending = function() {
      return !!c.current;
    }, C.flush = function() {
      return c.current ? P(Date.now()) : f.current;
    }, C;
  }, [w, k, t, R, T, N, b, v, F, n]);
  return g.current = L, He(function() {
    return h.current = !0, function() {
      var B;
      N && g.current.flush(), m.current && ((B = globalThis.document) == null || B.removeEventListener == null || B.removeEventListener("visibilitychange", m.current), m.current = null), h.current = !1;
    };
  }, [N]), L;
}
function vv(e, t) {
  return e === t;
}
function bv(e, t, r) {
  var n = vv, o = te(e), i = Re({})[1], a = gv(nr(function(c) {
    o.current = c, i({});
  }, [i]), t, r, i), s = te(e);
  return n(s.current, e) || (a(e), s.current = e), [o.current, a];
}
const qc = () => {
};
function wv(e, t, r) {
  return r ? e.flatMap((n) => t.some((i) => i.value === n) ? [] : [r(n)]) : [];
}
function xv(e) {
  return function(r = {}) {
    const { enabled: n = !0 } = r, o = () => {
      const a = e.useBrowse("", { enabled: !0 }), s = we(() => (a.data || []).map(e.toOption), [a.data]);
      return {
        items: a.data,
        options: s,
        isLoading: a.isLoading,
        pagination: a.pagination
      };
    }, i = ({ query: a, selectedValues: s }) => {
      const [c] = bv(a, e.debounceMs ?? 200), u = e.useBrowse(c, { enabled: n }), d = e.useHydrate?.(s, { enabled: n }), f = we(() => (u.data || []).map(e.toOption), [u.data]), p = we(() => (d?.data || []).map(e.toOption), [d?.data]), h = we(() => Fn(p, f), [p, f]), m = we(() => wv(
        s,
        h,
        e.getMissingSelectedOption
      ), [h, s]);
      return n ? {
        options: Fn(m, h),
        isInitialLoad: u.isLoading && h.length === 0,
        isSearching: !u.isLoading && u.isRefreshing && !u.isLoadingMore,
        isLoadingMore: u.isLoadingMore,
        hasMore: u.hasMore,
        loadMore: u.loadMore ?? qc
      } : {
        options: [],
        isInitialLoad: !1,
        isSearching: !1,
        isLoadingMore: !1,
        hasMore: !1,
        loadMore: qc
      };
    };
    return {
      id: e.id,
      useInitialBrowse: o,
      useOptions: i
    };
  };
}
function Sv(e) {
  return { filter: e };
}
function jv(e) {
  return yv("id", e);
}
function Uc(e) {
  return {
    limit: "100",
    ...e
  };
}
function Ys({
  id: e,
  buildBrowseSearchParams: t,
  buildHydrateSearchParams: r = Sv,
  buildHydrateFilter: n = jv,
  debounceMs: o,
  selectItems: i,
  toOption: a,
  getMissingSelectedOption: s,
  useQuery: c
}) {
  return xv({
    id: e,
    useBrowse: (u, d) => {
      const f = c({
        enabled: d.enabled ?? !0,
        searchParams: Uc(t(u))
      });
      return {
        data: i(f.data),
        isLoading: f.isLoading,
        isRefreshing: f.isFetching,
        isLoadingMore: f.isFetchingNextPage,
        hasMore: !!f.hasNextPage,
        loadMore: f.fetchNextPage,
        pagination: f.data?.meta?.pagination
      };
    },
    useHydrate: (u, d) => {
      const f = n(u), p = {};
      typeof f == "string" && Object.assign(p, Uc(r(f)));
      const m = c({
        enabled: (d.enabled ?? !0) && u.length > 0,
        searchParams: p
      });
      return {
        data: i(m.data),
        isLoading: m.isLoading
      };
    },
    toOption: a,
    getMissingSelectedOption: s,
    debounceMs: o
  });
}
function Ev(e) {
  return {
    value: e.id,
    label: e.name || "Unknown name",
    detail: e.email ?? "(Unknown email)"
  };
}
const Tv = Ys({
  id: "posts.members.remote",
  buildBrowseSearchParams: (e) => ({
    limit: "100",
    order: "created_at DESC",
    ...e ? { search: e } : {}
  }),
  getMissingSelectedOption: (e) => ({
    value: e,
    label: `ID: ${e}`
  }),
  selectItems: (e) => e?.members,
  useQuery: ({ enabled: e, searchParams: t }) => mv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Ev
});
function Pv() {
  return Tv();
}
const Nv = "PagesResponseType", Ov = oa({
  dataType: Nv,
  path: "/pages/",
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.pages), n = t[t.length - 1].meta;
    return {
      pages: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Rv(e, t, r) {
  return function(o) {
    const i = e(o), a = t(o), s = nr(({ query: c, selectedValues: u }) => {
      const d = i.useOptions({ query: c, selectedValues: u }), f = a.useOptions({ query: c, selectedValues: u }), p = Fn(d.options, f.options), h = r ? u.flatMap((m) => p.some((v) => v.value === m) ? [] : [r(m)]) : [];
      return {
        options: Fn(p, h),
        isInitialLoad: d.options.length === 0 && f.options.length === 0 && (d.isInitialLoad || f.isInitialLoad),
        isSearching: d.isSearching || f.isSearching,
        isLoadingMore: d.isLoadingMore || f.isLoadingMore,
        hasMore: d.hasMore || f.hasMore,
        loadMore: () => {
          d.hasMore && d.loadMore(), f.hasMore && f.loadMore();
        }
      };
    }, [i, a]);
    return we(() => ({
      id: `${i.id}+${a.id}`,
      useOptions: s
    }), [i.id, a.id, s]);
  };
}
function Av(e) {
  return e ? `status:published+title:~${ur(e)}` : "status:published";
}
function Iv(e) {
  return {
    value: e.id,
    label: e.title
  };
}
function Mv(e) {
  return {
    value: e.id,
    label: e.title,
    detail: "Page"
  };
}
const wd = (e) => ({
  filter: Av(e),
  limit: "25",
  fields: "id,title",
  order: "published_at DESC"
}), xd = (e) => ({
  fields: "id,title",
  filter: e
}), kv = Ys({
  id: "posts.published.remote",
  buildBrowseSearchParams: wd,
  buildHydrateSearchParams: xd,
  selectItems: (e) => e?.posts,
  useQuery: ({ enabled: e, searchParams: t }) => vp({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Iv
}), Dv = Ys({
  id: "pages.published.remote",
  buildBrowseSearchParams: wd,
  buildHydrateSearchParams: xd,
  selectItems: (e) => e?.pages,
  useQuery: ({ enabled: e, searchParams: t }) => Ov({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Mv
}), Cv = Rv(
  kv,
  Dv,
  (e) => ({
    value: e,
    label: `ID: ${e}`
  })
);
function _v() {
  return Cv();
}
const Fv = ({
  filters: e,
  siteTimezone: t,
  onFiltersChange: r
}) => {
  const n = _v(), o = Pv(), i = fv({
    memberValueSource: o,
    postValueSource: n,
    siteTimezone: t
  }), a = e.length > 0, s = ye(
    "flex flex-row",
    !a && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    a && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ l.jsx("div", { className: s, children: /* @__PURE__ */ l.jsx(
    Qd,
    {
      addButtonIcon: a ? /* @__PURE__ */ l.jsx(np, {}) : /* @__PURE__ */ l.jsx(op, {}),
      addButtonText: a ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${a ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ l.jsx(wp, {}),
      clearButtonText: "Clear",
      fields: i,
      filters: e,
      keyboardShortcut: "f",
      popoverAlign: a ? "start" : "end",
      showClearButton: a,
      showSearchInput: !1,
      onChange: r
    }
  ) });
}, Sd = ({ children: e }) => /* @__PURE__ */ l.jsxs(Js, { className: "relative pb-6! md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ l.jsx(Js.Title, { children: "Comments" }),
  e
] }), jd = ({ children: e }) => /* @__PURE__ */ l.jsx(Pp, { children: /* @__PURE__ */ l.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ l.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: e }) }) });
function Bv({ onClick: e, expanded: t }) {
  return /* @__PURE__ */ l.jsxs(
    le,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: e,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ l.jsx(ip, {}) : /* @__PURE__ */ l.jsx(Np, {})
      ]
    }
  );
}
function Ed({ item: e }) {
  const t = te(null), [r, n] = Re(!1), [o, i] = Re(!1);
  return He(() => {
    if (o)
      return;
    const a = () => {
      t.current && n(t.current.scrollHeight > t.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e.html, o]), /* @__PURE__ */ l.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ l.jsxs("div", { className: `flex max-w-full flex-col items-start ${e.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: e.html || "" },
        ref: t,
        className: ye(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          o ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ l.jsx(Bv, { expanded: o, onClick: () => i(!o) })
  ] }) });
}
const vo = "CommentsResponseType", Lv = oa({
  dataType: vo,
  path: "/comments/",
  defaultNextPageParams: (e, t) => e.meta?.pagination.next ? {
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.comments), n = t[t.length - 1].meta;
    return {
      comments: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), Td = (e) => Lv({
  ...e,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...e?.searchParams
  }
}), Pd = Bn({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: vo
  }
}), Nd = Bn({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: vo
  }
}), qv = ia({
  dataType: vo,
  path: (e) => `/comments/${e}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), Uv = ia({
  dataType: "CommentReportsResponseType",
  path: (e) => `/comments/${e}/reports/`
}), zv = (e, t) => Uv(e, { ...t }), Yv = ia({
  dataType: "CommentLikesResponseType",
  path: (e) => `/comments/${e}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), Zv = (e, t) => Yv(e, { ...t }), $v = (e, t) => Td({
  ...t,
  searchParams: {
    filter: `(parent_id:${e}+in_reply_to_id:null),in_reply_to_id:${e}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function Wv(e) {
  const t = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function Od({
  memberName: e,
  memberId: t,
  createdAt: r,
  isHidden: n,
  canComment: o,
  onAuthorClick: i,
  postTitle: a,
  onPostClick: s,
  className: c
}) {
  return /* @__PURE__ */ l.jsxs("div", { className: ye("flex items-baseline gap-4", c), children: [
    /* @__PURE__ */ l.jsxs("div", { className: ye(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      n && "opacity-50"
    ), children: [
      /* @__PURE__ */ l.jsx("div", { className: "whitespace-nowrap", children: t && i ? /* @__PURE__ */ l.jsx(
        le,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: i,
          children: e || "Unknown"
        }
      ) : /* @__PURE__ */ l.jsx("span", { className: "block truncate font-semibold", children: e || "Unknown" }) }),
      o === !1 && /* @__PURE__ */ l.jsx(_i, { children: /* @__PURE__ */ l.jsxs(Fi, { children: [
        /* @__PURE__ */ l.jsx(Bi, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ l.jsx(
          tl,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ l.jsx(Li, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ l.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ l.jsx(_i, { children: /* @__PURE__ */ l.jsxs(Fi, { children: [
        /* @__PURE__ */ l.jsx(Bi, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: kr(r) }) }),
        /* @__PURE__ */ l.jsx(Li, { children: Wv(r) })
      ] }) }) }),
      a && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ l.jsx("div", { className: "min-w-0 truncate", children: s ? /* @__PURE__ */ l.jsx(
          le,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: s,
            children: a
          }
        ) : /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: a }) })
      ] })
    ] }),
    n && /* @__PURE__ */ l.jsx(zp, { variant: "secondary", children: "Hidden" })
  ] });
}
function Hv({
  open: e,
  memberName: t,
  onOpenChange: r,
  onConfirm: n
}) {
  const [o, i] = Re(!1), a = (c) => {
    c || i(!1), r(c);
  }, s = () => {
    n(o), i(!1);
  };
  return /* @__PURE__ */ l.jsx(aa, { open: e, onOpenChange: a, children: /* @__PURE__ */ l.jsxs(sa, { className: "gap-5", children: [
    /* @__PURE__ */ l.jsxs(ca, { children: [
      /* @__PURE__ */ l.jsx(ua, { children: "Disable comments" }),
      /* @__PURE__ */ l.jsxs(xp, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx(
        hl,
        {
          checked: o,
          id: "hide-comments",
          onCheckedChange: (c) => i(c === !0)
        }
      ),
      /* @__PURE__ */ l.jsx(gl, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ l.jsxs(la, { children: [
      /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => a(!1), children: "Cancel" }),
      /* @__PURE__ */ l.jsx(le, { onClick: s, children: "Disable comments" })
    ] })
  ] }) });
}
function Rd({
  comment: e
}) {
  const { mutate: t } = pv(), { mutate: r } = hv(), [n, o] = Re(!1), { id: i, post: a, member: s } = e, c = a?.url, u = s?.id, d = s?.can_comment, f = (h) => {
    u && (t({
      id: u,
      reason: `Disabled from comment ${i}`,
      hideComments: h
    }), o(!1));
  }, p = () => {
    u && r({ id: u });
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(lp, { children: [
      /* @__PURE__ */ l.jsx(fp, { asChild: !0, children: /* @__PURE__ */ l.jsx(
        le,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ l.jsx(hp, {})
        }
      ) }),
      /* @__PURE__ */ l.jsxs(dp, { align: "start", children: [
        c && /* @__PURE__ */ l.jsx(pn, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `${c}#ghost-comments-${i}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ l.jsx(mp, { className: "size-4" }),
          "View on post"
        ] }) }),
        u && /* @__PURE__ */ l.jsx(pn, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `#/members/${u}`, children: [
          /* @__PURE__ */ l.jsx(il, { className: "size-4" }),
          "View member"
        ] }) }),
        u && (d !== !1 ? /* @__PURE__ */ l.jsxs(pn, { onClick: () => o(!0), children: [
          /* @__PURE__ */ l.jsx(tl, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ l.jsxs(pn, { onClick: p, children: [
          /* @__PURE__ */ l.jsx(ap, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      Hv,
      {
        memberName: s?.name,
        open: n,
        onConfirm: f,
        onOpenChange: o
      }
    )
  ] });
}
function Vv({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = Zv(e.id, { enabled: t }), i = n?.comment_likes ?? [], a = e.count?.likes ?? 0, s = a - i.length;
  return /* @__PURE__ */ l.jsx(aa, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(sa, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ca, { children: /* @__PURE__ */ l.jsxs(ua, { children: [
      a,
      " ",
      a === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        or,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? Tn(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && kr(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(dr, { size: "md" }) }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      i.map((c) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ l.jsx(
              or,
              {
                email: c.member?.email,
                name: c.member?.name,
                src: c.member?.avatar_image
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ l.jsx(rl, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: c.member ? Tn(c.member) : "Deleted member" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: kr(c.created_at) })
      ] }, c.id)),
      s > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        s,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(la, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Gv({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = zv(e.id, { enabled: t }), i = n?.comment_reports ?? [], a = e.count?.reports ?? i.length;
  return /* @__PURE__ */ l.jsx(aa, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(sa, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ca, { children: /* @__PURE__ */ l.jsxs(ua, { children: [
      a,
      " ",
      a === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        or,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? Tn(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(na, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && kr(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(dr, { size: "md" }) }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-3 pb-1", children: i.map((s) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ l.jsx(
            or,
            {
              email: s.member?.email,
              name: s.member?.name,
              src: s.member?.avatar_image
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ l.jsx(ra, { className: "size-2.5", fill: "currentColor" }) })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: s.member ? Tn(s.member) : "Deleted member" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: kr(s.created_at) })
    ] }, s.id)) }) }),
    /* @__PURE__ */ l.jsx(la, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Ao({ icon: e, count: t, label: r, to: n, onClick: o, className: i, testId: a }) {
  const s = ye("flex items-center gap-1 text-xs text-gray-800", i), c = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e,
    /* @__PURE__ */ l.jsx("span", { children: Vd(t) })
  ] }), u = n || o;
  return /* @__PURE__ */ l.jsx(_i, { children: /* @__PURE__ */ l.jsxs(Fi, { children: [
    /* @__PURE__ */ l.jsx(Bi, { asChild: !0, children: n ? /* @__PURE__ */ l.jsx(
      ea,
      {
        className: ye(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        to: n,
        onClick: (d) => {
          d.stopPropagation();
        },
        children: c
      }
    ) : o ? /* @__PURE__ */ l.jsx(
      "button",
      {
        className: ye(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        type: "button",
        onClick: (d) => {
          d.stopPropagation(), o();
        },
        children: c
      }
    ) : /* @__PURE__ */ l.jsx("div", { className: s, "data-testid": a, children: c }) }),
    /* @__PURE__ */ l.jsx(Li, { children: u ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function Zs(e, t) {
  if (!t)
    return;
  const r = new URLSearchParams(e);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function Ad({
  comment: e,
  className: t
}) {
  const [r] = fr(), [n, o] = Re(!1), [i, a] = Re(!1), s = Zs(r, e.id), c = e.count?.direct_replies ?? e.count?.replies ?? e.replies?.length ?? 0, u = e.count?.likes ?? 0, d = e.count?.reports ?? 0, f = c > 0, p = u > 0, h = d > 0;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: ye("flex items-center gap-6", t), children: [
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          count: c,
          icon: /* @__PURE__ */ l.jsx(sp, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: f ? s : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          count: u,
          icon: /* @__PURE__ */ l.jsx(rl, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: p ? () => o(!0) : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ao,
        {
          className: h ? "font-semibold text-red" : void 0,
          count: d,
          icon: /* @__PURE__ */ l.jsx(ra, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: h ? () => a(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      Vv,
      {
        comment: e,
        open: n,
        onOpenChange: o
      }
    ),
    /* @__PURE__ */ l.jsx(
      Gv,
      {
        comment: e,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function Kv({ hasReplies: e }) {
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function Id({ comment: e, isReply: t = !1, isSelectedComment: r = !1, selectedCommentId: n }) {
  const [o] = fr(), { mutate: i } = Pd(), { mutate: a } = Nd(), s = (e.replies?.length ?? 0) > 0 || (e.count?.direct_replies ?? e.count?.replies ?? 0) > 0, c = !s || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ l.jsxs("div", { className: `flex w-full flex-row ${c}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ l.jsx(
        or,
        {
          className: ye("mb-3 size-6 md:mb-4 md:size-8", e.status === "hidden" && "opacity-50"),
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsx(Kv, { hasReplies: s && !t })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "grow", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${e.id}`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ l.jsx(
              Od,
              {
                canComment: e.member?.can_comment,
                createdAt: e.created_at,
                isHidden: e.status === "hidden",
                memberId: e.member?.id,
                memberName: e.member?.name
              }
            ),
            e.in_reply_to_snippet && r && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${e.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ l.jsx(
                ea,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: Zs(o, e.in_reply_to_id || e.parent_id) || "",
                  onClick: (u) => {
                    u.stopPropagation();
                  },
                  children: e.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ l.jsx(Ed, { item: e }),
            /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              e.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => i({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(nl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              e.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => a({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(ol, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ l.jsx(
                Ad,
                {
                  comment: e
                }
              ),
              /* @__PURE__ */ l.jsx(
                Rd,
                {
                  comment: e
                }
              )
            ] })
          ] }),
          s && e.replies && /* @__PURE__ */ l.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: e.replies.map((u) => /* @__PURE__ */ l.jsx(
            Id,
            {
              comment: u,
              isReply: !0,
              selectedCommentId: n
            },
            u.id
          )) })
        ]
      }
    ) })
  ] });
}
const Jv = ({
  selectedComment: e,
  replies: t,
  selectedCommentId: r,
  fetchNextPage: n,
  hasNextPage: o,
  isFetchingNextPage: i
}) => {
  const a = { ...e, replies: t };
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ l.jsx(
      Id,
      {
        comment: a,
        isSelectedComment: !0,
        selectedCommentId: r
      }
    ),
    o && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ l.jsx(
      le,
      {
        disabled: i,
        variant: "outline",
        onClick: () => n(),
        children: i ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(dr, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, Qv = ({
  commentId: e,
  open: t,
  onOpenChange: r
}) => {
  const {
    data: n,
    isLoading: o,
    isError: i,
    fetchNextPage: a,
    hasNextPage: s,
    isFetchingNextPage: c
  } = $v(e ?? "", {
    enabled: t && !!e
  }), { data: u, isLoading: d, isError: f } = qv(e ?? "", {
    enabled: t && !!e
  }), p = o || d, h = f || i && !u, m = u?.comments?.[0], g = n?.comments || [];
  return /* @__PURE__ */ l.jsx(Mp, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(kp, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ l.jsx(Dp, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ l.jsx(Cp, { className: "text-md", children: "Thread" }) }),
    m?.post && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: m.post.title }),
          m.post.excerpt && /* @__PURE__ */ l.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: m.post.excerpt })
        ] }),
        m.post.feature_image && /* @__PURE__ */ l.jsx(
          "img",
          {
            alt: m.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: m.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(yp, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { children: p ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(dr, { size: "lg" }) }) : h || !m ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(
      Ui,
      {
        actions: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ l.jsx(qi, {})
      }
    ) }) : /* @__PURE__ */ l.jsx(
      Jv,
      {
        fetchNextPage: a,
        hasNextPage: s,
        isFetchingNextPage: c,
        replies: g,
        selectedComment: m,
        selectedCommentId: e ?? ""
      }
    ) })
  ] }) });
}, Io = /* @__PURE__ */ new Map(), Ji = "ghostVirtualListScrollPosition", zc = 150, Xv = 500;
function Mo() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function Qi(e) {
  const t = e?.key;
  if (typeof t == "string" || typeof t == "number")
    return String(t);
  const r = e?.idx;
  if (typeof r == "number")
    return String(r);
}
function Yc(e, t) {
  const r = Qi(e);
  if (r)
    return `${r}::${t}`;
}
function eb(e, t) {
  const r = e?.[Ji];
  if (!r || typeof r != "object")
    return;
  const n = r[t];
  if (typeof n == "number")
    return n;
}
function tb(e, t, r) {
  if (typeof window > "u")
    return;
  const n = e?.[Ji], o = {
    ...e ?? {},
    [Ji]: {
      ...n && typeof n == "object" ? n : {},
      [t]: r
    }
  };
  window.history.replaceState(o, "");
}
function rb({ parentRef: e, enabled: t = !0, isLoading: r = !1 }) {
  const n = Gd(), [o, i] = Re(null), a = te(null), s = te(0), c = te(0), u = te(0), d = te(null), f = te(/* @__PURE__ */ new Set()), p = n.pathname + n.search;
  He(() => {
    if (!t || !e.current)
      return;
    const h = Sp(e.current);
    i(h);
  }, [t, e]), He(() => {
    if (!t || !o)
      return;
    const h = Mo(), m = Qi(h), g = Yc(h, p), v = () => {
      d.current !== null && (window.clearTimeout(d.current), d.current = null);
    }, b = (F) => {
      g && Io.set(g, F);
      const R = Mo();
      Qi(R) === m && tb(R, p, F), c.current = Date.now(), u.current = F;
    }, w = ({ persistToHistory: F = !0 } = {}) => {
      if (v(), !F) {
        const R = s.current;
        g && Io.set(g, R), c.current = Date.now(), u.current = R;
        return;
      }
      b(s.current);
    }, T = () => {
      const F = Date.now();
      if (Math.abs(s.current - u.current) >= Xv || F - c.current >= zc) {
        v(), b(s.current);
        return;
      }
      d.current === null && (d.current = window.setTimeout(() => {
        d.current = null, b(s.current);
      }, zc));
    }, N = () => {
      s.current = o.scrollTop, T();
    }, k = () => {
      w();
    };
    return s.current = o.scrollTop, o.addEventListener("scroll", N), window.addEventListener("pagehide", k), () => {
      w({ persistToHistory: !1 }), o.removeEventListener("scroll", N), window.removeEventListener("pagehide", k);
    };
  }, [t, p, o]), He(() => {
    const h = Mo(), m = Yc(h, p), g = (m ? Io.get(m) : void 0) ?? eb(h, p);
    if (!(!t || !o || r)) {
      if (g !== void 0 && a.current !== p) {
        a.current = p;
        let v = 0;
        const b = 20, w = () => {
          for (const k of f.current)
            window.clearTimeout(k);
          f.current.clear();
        }, T = (k, F) => {
          const R = window.setTimeout(() => {
            f.current.delete(R), k();
          }, F);
          f.current.add(R);
        }, N = () => {
          if (v += 1, !o)
            return;
          const k = o.scrollTop, F = o.scrollHeight, R = o.clientHeight, L = F - R;
          if (g > L && v < b) {
            T(N, 100);
            return;
          }
          if (Math.abs(g - k) > 5) {
            const B = Math.min(g, L);
            o.scrollTop = B;
          }
        };
        return T(N, 150), () => w();
      }
      a.current = p;
    }
  }, [t, p, o, r]);
}
const Zc = ({ height: e }) => /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ l.jsx("div", { className: "flex", style: { height: e } }) }), nb = Nt(function(t, r) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ l.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ l.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function ob({
  items: e,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: o,
  resetKey: i,
  onAddFilter: a,
  isLoading: s
}) {
  const c = te(null), { visibleItemCount: u, canLoadMore: d, loadMore: f } = jp(t, { resetKey: i }), [p, h] = fr(), [m, g] = Re(!1), [v, b] = Re(null), { mutate: w } = Pd(), { mutate: T } = Nd(), N = (L) => {
    if (g(L), !L) {
      const B = new URLSearchParams(p);
      B.delete("thread"), h(B, { replace: !0 });
    }
  };
  He(() => {
    const L = p.get("thread");
    if (L) {
      const B = L.match(/^is:(.+)$/);
      if (B && B[1]) {
        const _ = B[1];
        b(_), g(!0);
      } else
        g(!1), b(null);
    } else
      g(!1), b(null);
  }, [p]), rb({ parentRef: c, isLoading: s });
  const { visibleItems: k, spaceBefore: F, spaceAfter: R } = Ep({
    items: e,
    totalItems: u,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: o,
    parentRef: c
  });
  return /* @__PURE__ */ l.jsxs("div", { ref: c, className: "overflow-hidden", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(Zc, { height: F }),
          k.map(({ key: L, virtualItem: B, item: _, props: Y }) => B.index > e.length - 1 ? /* @__PURE__ */ l.jsx(nb, { ...Y }, L) : /* @__PURE__ */ l.jsxs(
            "div",
            {
              ...Y,
              className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
              "data-testid": "comment-list-row",
              onClick: () => {
                m && N(!1);
              },
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ l.jsx(
                    or,
                    {
                      className: ye("size-6 md:size-8", _.status === "hidden" && "opacity-50"),
                      email: _.member?.email,
                      name: _.member?.name,
                      src: _.member?.avatar_image
                    }
                  ),
                  /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                    /* @__PURE__ */ l.jsx(
                      Od,
                      {
                        canComment: _.member?.can_comment,
                        createdAt: _.created_at,
                        isHidden: _.status === "hidden",
                        memberId: _.member?.id,
                        memberName: _.member?.name,
                        postTitle: _.post?.title,
                        onAuthorClick: _.member?.id ? () => a("author", _.member.id) : void 0,
                        onPostClick: _.post?.id ? () => a("post", _.post.id) : void 0
                      }
                    ),
                    _.in_reply_to_snippet && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${_.status === "hidden" && "opacity-50"}`, children: [
                      /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                      " ",
                      /* @__PURE__ */ l.jsx(
                        ea,
                        {
                          className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                          "data-testid": "replied-to-link",
                          to: Zs(p, _.in_reply_to_id || _.parent_id) || "",
                          onClick: (A) => {
                            A.stopPropagation();
                          },
                          children: _.in_reply_to_snippet
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx(Ed, { item: _ }),
                    /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                      _.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => w({ id: _.id }), children: [
                        /* @__PURE__ */ l.jsx(nl, {}),
                        "Hide"
                      ] }),
                      _.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => T({ id: _.id }), children: [
                        /* @__PURE__ */ l.jsx(ol, {}),
                        "Show"
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        Ad,
                        {
                          className: "ml-2",
                          comment: _
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        Rd,
                        {
                          comment: _
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { children: _.post?.feature_image ? /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    alt: _.post.title || "Post feature image",
                    className: `hidden aspect-video w-36 rounded object-cover lg:block ${_.status === "hidden" && "opacity-50"}`,
                    src: _.post.feature_image
                  }
                ) : null })
              ]
            },
            L
          )),
          /* @__PURE__ */ l.jsx(Zc, { height: R })
        ] })
      }
    ),
    d && /* @__PURE__ */ l.jsx(Tp, { isLoading: n, onClick: f }),
    /* @__PURE__ */ l.jsx(
      Qv,
      {
        commentId: v,
        open: m,
        onOpenChange: N
      }
    )
  ] });
}
var vn = {}, bn = { exports: {} };
const ib = {}, ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ib
}, Symbol.toStringTag, { value: "Module" })), $c = /* @__PURE__ */ ta(ab);
var Wc;
function sb() {
  return Wc || (Wc = 1, (function(e, t) {
    var r = (function() {
      var n = function(Y, P, A, D) {
        for (A = A || {}, D = Y.length; D--; A[Y[D]] = P) ;
        return A;
      }, o = [1, 5], i = [1, 7], a = [1, 8], s = [1, 6, 10], c = [1, 9], u = [1, 6, 8, 10], d = [1, 24], f = [1, 25], p = [1, 26], h = [1, 27], m = [1, 28], g = [1, 29], v = [1, 30], b = [1, 17], w = [1, 18], T = [1, 19], N = [21, 22, 23, 24, 25, 29, 30], k = [1, 6, 8, 10, 18], F = [1, 47], R = [6, 18], L = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
        productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
        performAction: function(P, A, D, C, I, E, ie, K) {
          var O = E.length - 1;
          switch (I) {
            case 1:
              return C.debug("expression", E[O]), C.debug("opt", K), E[O] && E[O].yg ? E[O].yg : E[O];
            case 2:
              C.debug("andCondition", E[O]), this.$ = E[O];
              break;
            case 3:
              C.debug("expression OR andCondition", E[O - 2], E[O]), E[O - 2] = E[O - 2].$or ? E[O - 2] : { $or: [C.ungroup(E[O - 2])] }, E[O - 2].$or.push(C.ungroup(E[O])), this.$ = E[O - 2];
              break;
            case 4:
              C.debug("filterExpr", E[O]), this.$ = E[O];
              break;
            case 5:
              C.debug("andCondition AND filterExpr", E[O - 2], E[O]), E[O - 2] = E[O - 2].$and ? E[O - 2] : { $and: [C.ungroup(E[O - 2])] }, E[O - 2].$and.push(C.ungroup(E[O])), this.$ = E[O - 2];
              break;
            case 6:
              C.debug("LPAREN expression RPAREN", E[O - 1]), this.$ = { yg: E[O - 1] };
              break;
            case 7:
              this.$ = { [E[O - 1]]: E[O] };
              break;
            case 8:
              E[O] = E[O].replace(/:$/, ""), E[O] = K.aliases && K.aliases[E[O]] ? K.aliases[E[O]] : E[O], this.$ = E[O];
              break;
            case 9:
              this.$ = { $not: E[O] };
              break;
            case 10:
              this.$ = { $regex: E[O] };
              break;
            case 11:
              this.$ = { $nin: E[O - 1] };
              break;
            case 12:
              this.$ = { $in: E[O - 1] };
              break;
            case 13:
              this.$ = {}, this.$[E[O - 1]] = E[O];
              break;
            case 14:
              this.$ = E[O];
              break;
            case 15:
              this.$.push(E[O]);
              break;
            case 16:
              this.$ = [E[O]];
              break;
            case 17:
              this.$ = null;
              break;
            case 18:
              this.$ = !0;
              break;
            case 19:
              this.$ = !1;
              break;
            case 20:
              this.$ = parseInt(P);
              break;
            case 21:
              this.$ = C.relDateToAbsolute(E[O - 2], E[O - 1], E[O]);
              break;
            case 22:
              this.$ = C.unescape(E[O]);
              break;
            case 23:
              E[O] = E[O].replace(/^'|'$/g, ""), this.$ = C.unescape(E[O]);
              break;
            case 24:
              this.$ = "add";
              break;
            case 25:
              this.$ = "sub";
              break;
            case 26:
              E[O] = E[O].replace(/^'|'$/g, ""), E[O] = C.unescape(E[O]), this.$ = C.stringToRegExp(E[O]);
              break;
            case 27:
              E[O] = E[O].replace(/^'|'$/g, ""), E[O] = C.unescape(E[O]), this.$ = C.stringToRegExp(E[O], "^");
              break;
            case 28:
              E[O] = E[O].replace(/^'|'$/g, ""), E[O] = C.unescape(E[O]), this.$ = C.stringToRegExp(E[O], "$");
              break;
            case 29:
              this.$ = "$ne";
              break;
            case 30:
              this.$ = "$gt";
              break;
            case 31:
              this.$ = "$lt";
              break;
            case 32:
              this.$ = "$gte";
              break;
            case 33:
              this.$ = "$lte";
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 1: [3] }, { 1: [2, 1], 6: a }, n(s, [2, 2], { 8: c }), n(u, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: v, 33: b, 34: w, 35: T, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, n([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: o, 11: 6, 13: i }, { 7: 32, 9: o, 11: 6, 13: i }, { 6: a, 10: [1, 33] }, n(u, [2, 7]), n(N, [2, 29], { 15: 34, 16: [1, 35], 33: b, 34: w, 35: T }), n(u, [2, 10]), { 17: 36, 20: 37, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: v }, { 20: 38, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: v }, n(u, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, n(N, [2, 30]), n(N, [2, 31]), n(N, [2, 32]), n(N, [2, 33]), n(k, [2, 17]), n(k, [2, 18]), n(k, [2, 19]), n(k, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, n(k, [2, 22]), n(k, [2, 23]), n(s, [2, 3], { 8: c }), n(u, [2, 5]), n(u, [2, 6]), n(u, [2, 9]), { 17: 45, 20: 37, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: v }, { 6: F, 18: [1, 46] }, n(R, [2, 16]), n(u, [2, 13]), n(u, [2, 26]), n(u, [2, 27]), n(u, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: F, 18: [1, 49] }, n(u, [2, 12]), { 20: 50, 21: d, 22: f, 23: p, 24: h, 25: m, 29: g, 30: v }, { 28: [1, 51] }, n(u, [2, 11]), n(R, [2, 15]), n(k, [2, 21])],
        defaultActions: { 43: [2, 24], 44: [2, 25] },
        parseError: function(P, A) {
          if (A.recoverable)
            this.trace(P);
          else {
            var D = new Error(P);
            throw D.hash = A, D;
          }
        },
        parse: function(P) {
          var A = this, D = [0], C = [null], I = [], E = this.table, ie = "", K = 0, O = 0, pt = 2, y = 1, x = I.slice.call(arguments, 1), j = Object.create(this.lexer), q = { yy: {} };
          for (var H in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, H) && (q.yy[H] = this.yy[H]);
          j.setInput(P, q.yy), q.yy.lexer = j, q.yy.parser = this, typeof j.yylloc > "u" && (j.yylloc = {});
          var V = j.yylloc;
          I.push(V);
          var Z = j.options && j.options.ranges;
          typeof q.yy.parseError == "function" ? this.parseError = q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var U = function() {
            var ve;
            return ve = j.lex() || y, typeof ve != "number" && (ve = A.symbols_[ve] || ve), ve;
          }, M, $, z, ne, oe = {}, de, Q, tt, Ye; ; ) {
            if ($ = D[D.length - 1], this.defaultActions[$] ? z = this.defaultActions[$] : ((M === null || typeof M > "u") && (M = U()), z = E[$] && E[$][M]), typeof z > "u" || !z.length || !z[0]) {
              var S = "";
              Ye = [];
              for (de in E[$])
                this.terminals_[de] && de > pt && Ye.push("'" + this.terminals_[de] + "'");
              j.showPosition ? S = "Parse error on line " + (K + 1) + `:
` + j.showPosition() + `
Expecting ` + Ye.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : S = "Parse error on line " + (K + 1) + ": Unexpected " + (M == y ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(S, {
                text: j.match,
                token: this.terminals_[M] || M,
                line: j.yylineno,
                loc: V,
                expected: Ye
              });
            }
            if (z[0] instanceof Array && z.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + M);
            switch (z[0]) {
              case 1:
                D.push(M), C.push(j.yytext), I.push(j.yylloc), D.push(z[1]), M = null, O = j.yyleng, ie = j.yytext, K = j.yylineno, V = j.yylloc;
                break;
              case 2:
                if (Q = this.productions_[z[1]][1], oe.$ = C[C.length - Q], oe._$ = {
                  first_line: I[I.length - (Q || 1)].first_line,
                  last_line: I[I.length - 1].last_line,
                  first_column: I[I.length - (Q || 1)].first_column,
                  last_column: I[I.length - 1].last_column
                }, Z && (oe._$.range = [
                  I[I.length - (Q || 1)].range[0],
                  I[I.length - 1].range[1]
                ]), ne = this.performAction.apply(oe, [
                  ie,
                  O,
                  K,
                  q.yy,
                  z[1],
                  C,
                  I
                ].concat(x)), typeof ne < "u")
                  return ne;
                Q && (D = D.slice(0, -1 * Q * 2), C = C.slice(0, -1 * Q), I = I.slice(0, -1 * Q)), D.push(this.productions_[z[1]][0]), C.push(oe.$), I.push(oe._$), tt = E[D[D.length - 2]][D[D.length - 1]], D.push(tt);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      };
      L.parseError = function(Y, P) {
        var A = Y.split(`
`);
        throw A[0] = "Query Error: unexpected character in filter at char " + (P.loc.first_column + 1), new Error(A.join(`
`));
      };
      var B = (function() {
        var Y = {
          EOF: 1,
          parseError: function(A, D) {
            if (this.yy.parser)
              this.yy.parser.parseError(A, D);
            else
              throw new Error(A);
          },
          // resets the lexer, sets new input
          setInput: function(P, A) {
            return this.yy = A || this.yy || {}, this._input = P, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          // consumes and returns one char from the input
          input: function() {
            var P = this._input[0];
            this.yytext += P, this.yyleng++, this.offset++, this.match += P, this.matched += P;
            var A = P.match(/(?:\r\n?|\n).*/g);
            return A ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), P;
          },
          // unshifts one char (or a string) into the input
          unput: function(P) {
            var A = P.length, D = P.split(/(?:\r\n?|\n)/g);
            this._input = P + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - A), this.offset -= A;
            var C = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), D.length - 1 && (this.yylineno -= D.length - 1);
            var I = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: D ? (D.length === C.length ? this.yylloc.first_column : 0) + C[C.length - D.length].length - D[0].length : this.yylloc.first_column - A
            }, this.options.ranges && (this.yylloc.range = [I[0], I[0] + this.yyleng - A]), this.yyleng = this.yytext.length, this;
          },
          // When called from action, caches matched text and appends it on next action
          more: function() {
            return this._more = !0, this;
          },
          // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
          reject: function() {
            if (this.options.backtrack_lexer)
              this._backtrack = !0;
            else
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            return this;
          },
          // retain first n characters of the match
          less: function(P) {
            this.unput(this.match.slice(P));
          },
          // displays already matched input, i.e. for error messages
          pastInput: function() {
            var P = this.matched.substr(0, this.matched.length - this.match.length);
            return (P.length > 20 ? "..." : "") + P.substr(-20).replace(/\n/g, "");
          },
          // displays upcoming input, i.e. for error messages
          upcomingInput: function() {
            var P = this.match;
            return P.length < 20 && (P += this._input.substr(0, 20 - P.length)), (P.substr(0, 20) + (P.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          // displays the character position where the lexing error occurred, i.e. for error messages
          showPosition: function() {
            var P = this.pastInput(), A = new Array(P.length + 1).join("-");
            return P + this.upcomingInput() + `
` + A + "^";
          },
          // test the lexed token: return FALSE when not a match, otherwise return token
          test_match: function(P, A) {
            var D, C, I;
            if (this.options.backtrack_lexer && (I = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (I.yylloc.range = this.yylloc.range.slice(0))), C = P[0].match(/(?:\r\n?|\n).*/g), C && (this.yylineno += C.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: C ? C[C.length - 1].length - C[C.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + P[0].length
            }, this.yytext += P[0], this.match += P[0], this.matches = P, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(P[0].length), this.matched += P[0], D = this.performAction.call(this, this.yy, this, A, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), D)
              return D;
            if (this._backtrack) {
              for (var E in I)
                this[E] = I[E];
              return !1;
            }
            return !1;
          },
          // return next match in input
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var P, A, D, C;
            this._more || (this.yytext = "", this.match = "");
            for (var I = this._currentRules(), E = 0; E < I.length; E++)
              if (D = this._input.match(this.rules[I[E]]), D && (!A || D[0].length > A[0].length)) {
                if (A = D, C = E, this.options.backtrack_lexer) {
                  if (P = this.test_match(D, I[E]), P !== !1)
                    return P;
                  if (this._backtrack) {
                    A = !1;
                    continue;
                  } else
                    return !1;
                } else if (!this.options.flex)
                  break;
              }
            return A ? (P = this.test_match(A, I[C]), P !== !1 ? P : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          },
          // return next match that has a token
          lex: function() {
            var A = this.next();
            return A || this.lex();
          },
          // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
          begin: function(A) {
            this.conditionStack.push(A);
          },
          // pop the previously active lexer condition state off the condition stack
          popState: function() {
            var A = this.conditionStack.length - 1;
            return A > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          // produce the lexer rule set which is active for the currently active lexer condition state
          _currentRules: function() {
            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
          },
          // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
          topState: function(A) {
            return A = this.conditionStack.length - 1 - Math.abs(A || 0), A >= 0 ? this.conditionStack[A] : "INITIAL";
          },
          // alias for begin(condition)
          pushState: function(A) {
            this.begin(A);
          },
          // return the number of states currently on the stack
          stateStackSize: function() {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function(A, D, C, I) {
            switch (C) {
              case 0:
                break;
              case 1:
                return 21;
              case 2:
                return 22;
              case 3:
                return 23;
              case 4:
                return 13;
              case 5:
                return 24;
              case 6:
                return 16;
              case 7:
                return 18;
              case 8:
                return this.pushState("reldate"), 25;
              case 9:
                return 32;
              case 10:
                return 31;
              case 11:
                return 27;
              case 12:
                return this.popState(), 28;
              case 13:
                return 29;
              case 14:
                return 30;
              case 15:
                return 9;
              case 16:
                return 10;
              case 17:
                return 6;
              case 18:
                return 8;
              case 19:
                return 14;
              case 20:
                return 38;
              case 21:
                return 39;
              case 22:
                return 36;
              case 23:
                return 37;
              case 24:
                return 34;
              case 25:
                return 35;
              case 26:
                return 33;
              case 27:
                return 29;
            }
          },
          rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
          conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
        };
        return Y.parseError = function(P, A) {
          var D = P.split(`
`), C, I;
          throw C = D[2].indexOf("^"), I = D[1].charAt(C), D[0] = 'Query Error: unrecognized text "' + I + '" in filter at char ' + (C + 1), Error(D.join(`
`));
        }, Y;
      })();
      L.lexer = B;
      function _() {
        this.yy = {};
      }
      return _.prototype = L, L.Parser = _, new _();
    })();
    typeof _p < "u" && (t.parser = r, t.Parser = r.Parser, t.parse = function() {
      return r.parse.apply(r, arguments);
    }, t.main = function(o) {
      o[1] || (console.log("Usage: " + o[0] + " FILE"), process.exit(1));
      var i = $c.readFileSync($c.normalize(o[1]), "utf8");
      return t.parser.parse(i);
    }, require.main === e && t.main(process.argv.slice(1)));
  })(bn, bn.exports)), bn.exports;
}
var ko = {}, Do = {}, Co, Hc;
function Md() {
  return Hc || (Hc = 1, Co = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Co;
}
var _o, Vc;
function bo() {
  if (Vc) return _o;
  Vc = 1;
  var e = Md();
  return _o = function() {
    return e() && !!Symbol.toStringTag;
  }, _o;
}
var Fo, Gc;
function kd() {
  return Gc || (Gc = 1, Fo = Object), Fo;
}
var Bo, Kc;
function cb() {
  return Kc || (Kc = 1, Bo = Error), Bo;
}
var Lo, Jc;
function ub() {
  return Jc || (Jc = 1, Lo = EvalError), Lo;
}
var qo, Qc;
function lb() {
  return Qc || (Qc = 1, qo = RangeError), qo;
}
var Uo, Xc;
function fb() {
  return Xc || (Xc = 1, Uo = ReferenceError), Uo;
}
var zo, eu;
function Dd() {
  return eu || (eu = 1, zo = SyntaxError), zo;
}
var Yo, tu;
function sn() {
  return tu || (tu = 1, Yo = TypeError), Yo;
}
var Zo, ru;
function db() {
  return ru || (ru = 1, Zo = URIError), Zo;
}
var $o, nu;
function pb() {
  return nu || (nu = 1, $o = Math.abs), $o;
}
var Wo, ou;
function hb() {
  return ou || (ou = 1, Wo = Math.floor), Wo;
}
var Ho, iu;
function mb() {
  return iu || (iu = 1, Ho = Math.max), Ho;
}
var Vo, au;
function yb() {
  return au || (au = 1, Vo = Math.min), Vo;
}
var Go, su;
function gb() {
  return su || (su = 1, Go = Math.pow), Go;
}
var Ko, cu;
function vb() {
  return cu || (cu = 1, Ko = Math.round), Ko;
}
var Jo, uu;
function bb() {
  return uu || (uu = 1, Jo = Number.isNaN || function(t) {
    return t !== t;
  }), Jo;
}
var Qo, lu;
function wb() {
  if (lu) return Qo;
  lu = 1;
  var e = /* @__PURE__ */ bb();
  return Qo = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Qo;
}
var Xo, fu;
function xb() {
  return fu || (fu = 1, Xo = Object.getOwnPropertyDescriptor), Xo;
}
var ei, du;
function Pr() {
  if (du) return ei;
  du = 1;
  var e = /* @__PURE__ */ xb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ei = e, ei;
}
var ti, pu;
function wo() {
  if (pu) return ti;
  pu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ti = e, ti;
}
var ri, hu;
function Sb() {
  if (hu) return ri;
  hu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Md();
  return ri = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, ri;
}
var ni, mu;
function Cd() {
  return mu || (mu = 1, ni = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ni;
}
var oi, yu;
function _d() {
  if (yu) return oi;
  yu = 1;
  var e = /* @__PURE__ */ kd();
  return oi = e.getPrototypeOf || null, oi;
}
var ii, gu;
function jb() {
  if (gu) return ii;
  gu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(c, u) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var p = 0; p < u.length; p += 1)
      d[p + c.length] = u[p];
    return d;
  }, i = function(c, u) {
    for (var d = [], f = u, p = 0; f < c.length; f += 1, p += 1)
      d[p] = c[f];
    return d;
  }, a = function(s, c) {
    for (var u = "", d = 0; d < s.length; d += 1)
      u += s[d], d + 1 < s.length && (u += c);
    return u;
  };
  return ii = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var d = i(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var b = u.apply(
          this,
          o(d, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return u.apply(
        c,
        o(d, arguments)
      );
    }, h = r(0, u.length - d.length), m = [], g = 0; g < h; g++)
      m[g] = "$" + g;
    if (f = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(p), u.prototype) {
      var v = function() {
      };
      v.prototype = u.prototype, f.prototype = new v(), v.prototype = null;
    }
    return f;
  }, ii;
}
var ai, vu;
function cn() {
  if (vu) return ai;
  vu = 1;
  var e = jb();
  return ai = Function.prototype.bind || e, ai;
}
var si, bu;
function $s() {
  return bu || (bu = 1, si = Function.prototype.call), si;
}
var ci, wu;
function Ws() {
  return wu || (wu = 1, ci = Function.prototype.apply), ci;
}
var ui, xu;
function Eb() {
  return xu || (xu = 1, ui = typeof Reflect < "u" && Reflect && Reflect.apply), ui;
}
var li, Su;
function Fd() {
  if (Su) return li;
  Su = 1;
  var e = cn(), t = Ws(), r = $s(), n = Eb();
  return li = n || e.call(r, t), li;
}
var fi, ju;
function Hs() {
  if (ju) return fi;
  ju = 1;
  var e = cn(), t = /* @__PURE__ */ sn(), r = $s(), n = Fd();
  return fi = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, fi;
}
var di, Eu;
function Tb() {
  if (Eu) return di;
  Eu = 1;
  var e = Hs(), t = /* @__PURE__ */ Pr(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return di = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, di;
}
var pi, Tu;
function Vs() {
  if (Tu) return pi;
  Tu = 1;
  var e = Cd(), t = _d(), r = /* @__PURE__ */ Tb();
  return pi = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, pi;
}
var hi, Pu;
function Bd() {
  if (Pu) return hi;
  Pu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = cn();
  return hi = r.call(e, t), hi;
}
var mi, Nu;
function Ld() {
  if (Nu) return mi;
  Nu = 1;
  var e, t = /* @__PURE__ */ kd(), r = /* @__PURE__ */ cb(), n = /* @__PURE__ */ ub(), o = /* @__PURE__ */ lb(), i = /* @__PURE__ */ fb(), a = /* @__PURE__ */ Dd(), s = /* @__PURE__ */ sn(), c = /* @__PURE__ */ db(), u = /* @__PURE__ */ pb(), d = /* @__PURE__ */ hb(), f = /* @__PURE__ */ mb(), p = /* @__PURE__ */ yb(), h = /* @__PURE__ */ gb(), m = /* @__PURE__ */ vb(), g = /* @__PURE__ */ wb(), v = Function, b = function(U) {
    try {
      return v('"use strict"; return (' + U + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Pr(), T = /* @__PURE__ */ wo(), N = function() {
    throw new s();
  }, k = w ? (function() {
    try {
      return arguments.callee, N;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return N;
      }
    }
  })() : N, F = Sb()(), R = Vs(), L = _d(), B = Cd(), _ = Ws(), Y = $s(), P = {}, A = typeof Uint8Array > "u" || !R ? e : R(Uint8Array), D = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": F && R ? R([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": P,
    "%AsyncGenerator%": P,
    "%AsyncGeneratorFunction%": P,
    "%AsyncIteratorPrototype%": P,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": v,
    "%GeneratorFunction%": P,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": F && R ? R(R([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !F || !R ? e : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !F || !R ? e : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": F && R ? R(""[Symbol.iterator]()) : e,
    "%Symbol%": F ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": k,
    "%TypedArray%": A,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": Y,
    "%Function.prototype.apply%": _,
    "%Object.defineProperty%": T,
    "%Object.getPrototypeOf%": L,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": g,
    "%Reflect.getPrototypeOf%": B
  };
  if (R)
    try {
      null.error;
    } catch (U) {
      var C = R(R(U));
      D["%Error.prototype%"] = C;
    }
  var I = function U(M) {
    var $;
    if (M === "%AsyncFunction%")
      $ = b("async function () {}");
    else if (M === "%GeneratorFunction%")
      $ = b("function* () {}");
    else if (M === "%AsyncGeneratorFunction%")
      $ = b("async function* () {}");
    else if (M === "%AsyncGenerator%") {
      var z = U("%AsyncGeneratorFunction%");
      z && ($ = z.prototype);
    } else if (M === "%AsyncIteratorPrototype%") {
      var ne = U("%AsyncGenerator%");
      ne && R && ($ = R(ne.prototype));
    }
    return D[M] = $, $;
  }, E = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, ie = cn(), K = /* @__PURE__ */ Bd(), O = ie.call(Y, Array.prototype.concat), pt = ie.call(_, Array.prototype.splice), y = ie.call(Y, String.prototype.replace), x = ie.call(Y, String.prototype.slice), j = ie.call(Y, RegExp.prototype.exec), q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, H = /\\(\\)?/g, V = function(M) {
    var $ = x(M, 0, 1), z = x(M, -1);
    if ($ === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (z === "%" && $ !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ne = [];
    return y(M, q, function(oe, de, Q, tt) {
      ne[ne.length] = Q ? y(tt, H, "$1") : de || oe;
    }), ne;
  }, Z = function(M, $) {
    var z = M, ne;
    if (K(E, z) && (ne = E[z], z = "%" + ne[0] + "%"), K(D, z)) {
      var oe = D[z];
      if (oe === P && (oe = I(z)), typeof oe > "u" && !$)
        throw new s("intrinsic " + M + " exists, but is not available. Please file an issue!");
      return {
        alias: ne,
        name: z,
        value: oe
      };
    }
    throw new a("intrinsic " + M + " does not exist!");
  };
  return mi = function(M, $) {
    if (typeof M != "string" || M.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof $ != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (j(/^%?[^%]*%?$/, M) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var z = V(M), ne = z.length > 0 ? z[0] : "", oe = Z("%" + ne + "%", $), de = oe.name, Q = oe.value, tt = !1, Ye = oe.alias;
    Ye && (ne = Ye[0], pt(z, O([0, 1], Ye)));
    for (var S = 1, ve = !0; S < z.length; S += 1) {
      var Ze = z[S], ln = x(Ze, 0, 1), fn = x(Ze, -1);
      if ((ln === '"' || ln === "'" || ln === "`" || fn === '"' || fn === "'" || fn === "`") && ln !== fn)
        throw new a("property names with quotes must have matching quotes");
      if ((Ze === "constructor" || !ve) && (tt = !0), ne += "." + Ze, de = "%" + ne + "%", K(D, de))
        Q = D[de];
      else if (Q != null) {
        if (!(Ze in Q)) {
          if (!$)
            throw new s("base intrinsic for " + M + " exists, but the property is not available.");
          return;
        }
        if (w && S + 1 >= z.length) {
          var dn = w(Q, Ze);
          ve = !!dn, ve && "get" in dn && !("originalValue" in dn.get) ? Q = dn.get : Q = Q[Ze];
        } else
          ve = K(Q, Ze), Q = Q[Ze];
        ve && !tt && (D[de] = Q);
      }
    }
    return Q;
  }, mi;
}
var yi, Ou;
function un() {
  if (Ou) return yi;
  Ou = 1;
  var e = /* @__PURE__ */ Ld(), t = Hs(), r = t([e("%String.prototype.indexOf%")]);
  return yi = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, yi;
}
var gi, Ru;
function Pb() {
  if (Ru) return gi;
  Ru = 1;
  var e = bo()(), t = /* @__PURE__ */ un(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, o = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, i = (function() {
    return n(arguments);
  })();
  return n.isLegacyArguments = o, gi = i ? n : o, gi;
}
var vi, Au;
function Nb() {
  if (Au) return vi;
  Au = 1;
  var e = /* @__PURE__ */ un(), t = bo()(), r = /* @__PURE__ */ Bd(), n = /* @__PURE__ */ Pr(), o;
  if (t) {
    var i = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), o = function(p) {
      if (!p || typeof p != "object")
        return !1;
      var h = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          p,
          "lastIndex"
        )
      ), m = h && r(h, "value");
      if (!m)
        return !1;
      try {
        i(
          p,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (g) {
        return g === a;
      }
    };
  } else {
    var u = e("Object.prototype.toString"), d = "[object RegExp]";
    o = function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : u(p) === d;
    };
  }
  return vi = o, vi;
}
var bi, Iu;
function Ob() {
  if (Iu) return bi;
  Iu = 1;
  var e = /* @__PURE__ */ un(), t = Nb(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ sn();
  return bi = function(i) {
    if (!t(i))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(i, s) !== null;
    };
  }, bi;
}
var wi, Mu;
function Rb() {
  if (Mu) return wi;
  Mu = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return wi = () => e, wi;
}
var xi, ku;
function Ab() {
  if (ku) return xi;
  ku = 1;
  var e = /* @__PURE__ */ un(), t = /* @__PURE__ */ Ob(), r = t(/^\s*(?:function)?\*/), n = bo()(), o = Vs(), i = e("Object.prototype.toString"), a = e("Function.prototype.toString"), s = /* @__PURE__ */ Rb();
  return xi = function(u) {
    if (typeof u != "function")
      return !1;
    if (r(a(u)))
      return !0;
    if (!n) {
      var d = i(u);
      return d === "[object GeneratorFunction]";
    }
    if (!o)
      return !1;
    var f = s();
    return f && o(u) === f.prototype;
  }, xi;
}
var Si, Du;
function Ib() {
  if (Du) return Si;
  Du = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (w) {
      w !== n && (t = null);
    }
  else
    t = null;
  var o = /^\s*class\b/, i = function(T) {
    try {
      var N = e.call(T);
      return o.test(N);
    } catch {
      return !1;
    }
  }, a = function(T) {
    try {
      return i(T) ? !1 : (e.call(T), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", d = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", p = "[object HTML document.all class]", h = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, g = !(0 in [,]), v = function() {
    return !1;
  };
  if (typeof document == "object") {
    var b = document.all;
    s.call(b) === s.call(document.all) && (v = function(T) {
      if ((g || !T) && (typeof T > "u" || typeof T == "object"))
        try {
          var N = s.call(T);
          return (N === f || N === p || N === h || N === c) && T("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Si = t ? function(T) {
    if (v(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    try {
      t(T, null, r);
    } catch (N) {
      if (N !== n)
        return !1;
    }
    return !i(T) && a(T);
  } : function(T) {
    if (v(T))
      return !0;
    if (!T || typeof T != "function" && typeof T != "object")
      return !1;
    if (m)
      return a(T);
    if (i(T))
      return !1;
    var N = s.call(T);
    return N !== u && N !== d && !/^\[object HTML/.test(N) ? !1 : a(T);
  }, Si;
}
var ji, Cu;
function Mb() {
  if (Cu) return ji;
  Cu = 1;
  var e = Ib(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, d) {
    for (var f = 0, p = c.length; f < p; f++)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  }, o = function(c, u, d) {
    for (var f = 0, p = c.length; f < p; f++)
      d == null ? u(c.charAt(f), f, c) : u.call(d, c.charAt(f), f, c);
  }, i = function(c, u, d) {
    for (var f in c)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return ji = function(c, u, d) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, u, f) : typeof c == "string" ? o(c, u, f) : i(c, u, f);
  }, ji;
}
var Ei, _u;
function kb() {
  return _u || (_u = 1, Ei = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), Ei;
}
var Ti, Fu;
function Db() {
  if (Fu) return Ti;
  Fu = 1;
  var e = /* @__PURE__ */ kb(), t = typeof globalThis > "u" ? el : globalThis;
  return Ti = function() {
    for (var n = [], o = 0; o < e.length; o++)
      typeof t[e[o]] == "function" && (n[n.length] = e[o]);
    return n;
  }, Ti;
}
var Pi = { exports: {} }, Ni, Bu;
function Cb() {
  if (Bu) return Ni;
  Bu = 1;
  var e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ Dd(), r = /* @__PURE__ */ sn(), n = /* @__PURE__ */ Pr();
  return Ni = function(i, a, s) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, p = !!n && n(i, a);
    if (e)
      e(i, a, {
        configurable: d === null && p ? p.configurable : !d,
        enumerable: c === null && p ? p.enumerable : !c,
        value: s,
        writable: u === null && p ? p.writable : !u
      });
    else if (f || !c && !u && !d)
      i[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ni;
}
var Oi, Lu;
function _b() {
  if (Lu) return Oi;
  Lu = 1;
  var e = /* @__PURE__ */ wo(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Oi = t, Oi;
}
var Ri, qu;
function Fb() {
  if (qu) return Ri;
  qu = 1;
  var e = /* @__PURE__ */ Ld(), t = /* @__PURE__ */ Cb(), r = /* @__PURE__ */ _b()(), n = /* @__PURE__ */ Pr(), o = /* @__PURE__ */ sn(), i = e("%Math.floor%");
  return Ri = function(s, c) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || i(c) !== c)
      throw new o("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], d = !0, f = !0;
    if ("length" in s && n) {
      var p = n(s, "length");
      p && !p.configurable && (d = !1), p && !p.writable && (f = !1);
    }
    return (d || f || !u) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, Ri;
}
var Ai, Uu;
function Bb() {
  if (Uu) return Ai;
  Uu = 1;
  var e = cn(), t = Ws(), r = Fd();
  return Ai = function() {
    return r(e, t, arguments);
  }, Ai;
}
var zu;
function Lb() {
  return zu || (zu = 1, (function(e) {
    var t = /* @__PURE__ */ Fb(), r = /* @__PURE__ */ wo(), n = Hs(), o = Bb();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  })(Pi)), Pi.exports;
}
var Ii, Yu;
function qd() {
  if (Yu) return Ii;
  Yu = 1;
  var e = Mb(), t = /* @__PURE__ */ Db(), r = Lb(), n = /* @__PURE__ */ un(), o = /* @__PURE__ */ Pr(), i = Vs(), a = n("Object.prototype.toString"), s = bo()(), c = typeof globalThis > "u" ? el : globalThis, u = t(), d = n("String.prototype.slice"), f = n("Array.prototype.indexOf", !0) || function(v, b) {
    for (var w = 0; w < v.length; w += 1)
      if (v[w] === b)
        return w;
    return -1;
  }, p = { __proto__: null };
  s && o && i ? e(u, function(g) {
    var v = new c[g]();
    if (Symbol.toStringTag in v && i) {
      var b = i(v), w = o(b, Symbol.toStringTag);
      if (!w && b) {
        var T = i(b);
        w = o(T, Symbol.toStringTag);
      }
      if (w && w.get) {
        var N = r(w.get);
        p[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + g
        ] = N;
      }
    }
  }) : e(u, function(g) {
    var v = new c[g](), b = v.slice || v.set;
    if (b) {
      var w = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        r(b)
      );
      p[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + g
      ] = w;
    }
  });
  var h = function(v) {
    var b = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, T) {
        if (!b)
          try {
            "$" + w(v) === T && (b = /** @type {import('.').TypedArrayName} */
            d(T, 1));
          } catch {
          }
      }
    ), b;
  }, m = function(v) {
    var b = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, T) {
        if (!b)
          try {
            w(v), b = /** @type {import('.').TypedArrayName} */
            d(T, 1);
          } catch {
          }
      }
    ), b;
  };
  return Ii = function(v) {
    if (!v || typeof v != "object")
      return !1;
    if (!s) {
      var b = d(a(v), 8, -1);
      return f(u, b) > -1 ? b : b !== "Object" ? !1 : m(v);
    }
    return o ? h(v) : null;
  }, Ii;
}
var Mi, Zu;
function qb() {
  if (Zu) return Mi;
  Zu = 1;
  var e = /* @__PURE__ */ qd();
  return Mi = function(r) {
    return !!e(r);
  }, Mi;
}
var $u;
function Ub() {
  return $u || ($u = 1, (function(e) {
    var t = /* @__PURE__ */ Pb(), r = Ab(), n = /* @__PURE__ */ qd(), o = /* @__PURE__ */ qb();
    function i(S) {
      return S.call.bind(S);
    }
    var a = typeof BigInt < "u", s = typeof Symbol < "u", c = i(Object.prototype.toString), u = i(Number.prototype.valueOf), d = i(String.prototype.valueOf), f = i(Boolean.prototype.valueOf);
    if (a)
      var p = i(BigInt.prototype.valueOf);
    if (s)
      var h = i(Symbol.prototype.valueOf);
    function m(S, ve) {
      if (typeof S != "object")
        return !1;
      try {
        return ve(S), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
    function g(S) {
      return typeof Promise < "u" && S instanceof Promise || S !== null && typeof S == "object" && typeof S.then == "function" && typeof S.catch == "function";
    }
    e.isPromise = g;
    function v(S) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(S) : o(S) || x(S);
    }
    e.isArrayBufferView = v;
    function b(S) {
      return n(S) === "Uint8Array";
    }
    e.isUint8Array = b;
    function w(S) {
      return n(S) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = w;
    function T(S) {
      return n(S) === "Uint16Array";
    }
    e.isUint16Array = T;
    function N(S) {
      return n(S) === "Uint32Array";
    }
    e.isUint32Array = N;
    function k(S) {
      return n(S) === "Int8Array";
    }
    e.isInt8Array = k;
    function F(S) {
      return n(S) === "Int16Array";
    }
    e.isInt16Array = F;
    function R(S) {
      return n(S) === "Int32Array";
    }
    e.isInt32Array = R;
    function L(S) {
      return n(S) === "Float32Array";
    }
    e.isFloat32Array = L;
    function B(S) {
      return n(S) === "Float64Array";
    }
    e.isFloat64Array = B;
    function _(S) {
      return n(S) === "BigInt64Array";
    }
    e.isBigInt64Array = _;
    function Y(S) {
      return n(S) === "BigUint64Array";
    }
    e.isBigUint64Array = Y;
    function P(S) {
      return c(S) === "[object Map]";
    }
    P.working = typeof Map < "u" && P(/* @__PURE__ */ new Map());
    function A(S) {
      return typeof Map > "u" ? !1 : P.working ? P(S) : S instanceof Map;
    }
    e.isMap = A;
    function D(S) {
      return c(S) === "[object Set]";
    }
    D.working = typeof Set < "u" && D(/* @__PURE__ */ new Set());
    function C(S) {
      return typeof Set > "u" ? !1 : D.working ? D(S) : S instanceof Set;
    }
    e.isSet = C;
    function I(S) {
      return c(S) === "[object WeakMap]";
    }
    I.working = typeof WeakMap < "u" && I(/* @__PURE__ */ new WeakMap());
    function E(S) {
      return typeof WeakMap > "u" ? !1 : I.working ? I(S) : S instanceof WeakMap;
    }
    e.isWeakMap = E;
    function ie(S) {
      return c(S) === "[object WeakSet]";
    }
    ie.working = typeof WeakSet < "u" && ie(/* @__PURE__ */ new WeakSet());
    function K(S) {
      return ie(S);
    }
    e.isWeakSet = K;
    function O(S) {
      return c(S) === "[object ArrayBuffer]";
    }
    O.working = typeof ArrayBuffer < "u" && O(new ArrayBuffer());
    function pt(S) {
      return typeof ArrayBuffer > "u" ? !1 : O.working ? O(S) : S instanceof ArrayBuffer;
    }
    e.isArrayBuffer = pt;
    function y(S) {
      return c(S) === "[object DataView]";
    }
    y.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && y(new DataView(new ArrayBuffer(1), 0, 1));
    function x(S) {
      return typeof DataView > "u" ? !1 : y.working ? y(S) : S instanceof DataView;
    }
    e.isDataView = x;
    var j = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function q(S) {
      return c(S) === "[object SharedArrayBuffer]";
    }
    function H(S) {
      return typeof j > "u" ? !1 : (typeof q.working > "u" && (q.working = q(new j())), q.working ? q(S) : S instanceof j);
    }
    e.isSharedArrayBuffer = H;
    function V(S) {
      return c(S) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = V;
    function Z(S) {
      return c(S) === "[object Map Iterator]";
    }
    e.isMapIterator = Z;
    function U(S) {
      return c(S) === "[object Set Iterator]";
    }
    e.isSetIterator = U;
    function M(S) {
      return c(S) === "[object Generator]";
    }
    e.isGeneratorObject = M;
    function $(S) {
      return c(S) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = $;
    function z(S) {
      return m(S, u);
    }
    e.isNumberObject = z;
    function ne(S) {
      return m(S, d);
    }
    e.isStringObject = ne;
    function oe(S) {
      return m(S, f);
    }
    e.isBooleanObject = oe;
    function de(S) {
      return a && m(S, p);
    }
    e.isBigIntObject = de;
    function Q(S) {
      return s && m(S, h);
    }
    e.isSymbolObject = Q;
    function tt(S) {
      return z(S) || ne(S) || oe(S) || de(S) || Q(S);
    }
    e.isBoxedPrimitive = tt;
    function Ye(S) {
      return typeof Uint8Array < "u" && (pt(S) || H(S));
    }
    e.isAnyArrayBuffer = Ye, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(S) {
      Object.defineProperty(e, S, {
        enumerable: !1,
        value: function() {
          throw new Error(S + " is not supported in userland");
        }
      });
    });
  })(Do)), Do;
}
var ki, Wu;
function zb() {
  return Wu || (Wu = 1, ki = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), ki;
}
var wn = { exports: {} }, Hu;
function Yb() {
  return Hu || (Hu = 1, typeof Object.create == "function" ? wn.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : wn.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
    }
  }), wn.exports;
}
var Vu;
function Zb() {
  return Vu || (Vu = 1, (function(e) {
    var t = Object.getOwnPropertyDescriptors || function(x) {
      for (var j = Object.keys(x), q = {}, H = 0; H < j.length; H++)
        q[j[H]] = Object.getOwnPropertyDescriptor(x, j[H]);
      return q;
    }, r = /%[sdj%]/g;
    e.format = function(y) {
      if (!k(y)) {
        for (var x = [], j = 0; j < arguments.length; j++)
          x.push(a(arguments[j]));
        return x.join(" ");
      }
      for (var j = 1, q = arguments, H = q.length, V = String(y).replace(r, function(U) {
        if (U === "%%") return "%";
        if (j >= H) return U;
        switch (U) {
          case "%s":
            return String(q[j++]);
          case "%d":
            return Number(q[j++]);
          case "%j":
            try {
              return JSON.stringify(q[j++]);
            } catch {
              return "[Circular]";
            }
          default:
            return U;
        }
      }), Z = q[j]; j < H; Z = q[++j])
        w(Z) || !B(Z) ? V += " " + Z : V += " " + a(Z);
      return V;
    }, e.deprecate = function(y, x) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return y;
      if (typeof process > "u")
        return function() {
          return e.deprecate(y, x).apply(this, arguments);
        };
      var j = !1;
      function q() {
        if (!j) {
          if (process.throwDeprecation)
            throw new Error(x);
          process.traceDeprecation ? console.trace(x) : console.error(x), j = !0;
        }
        return y.apply(this, arguments);
      }
      return q;
    };
    var n = {}, o = /^$/;
    if (process.env.NODE_DEBUG) {
      var i = process.env.NODE_DEBUG;
      i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), o = new RegExp("^" + i + "$", "i");
    }
    e.debuglog = function(y) {
      if (y = y.toUpperCase(), !n[y])
        if (o.test(y)) {
          var x = process.pid;
          n[y] = function() {
            var j = e.format.apply(e, arguments);
            console.error("%s %d: %s", y, x, j);
          };
        } else
          n[y] = function() {
          };
      return n[y];
    };
    function a(y, x) {
      var j = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && (j.depth = arguments[2]), arguments.length >= 4 && (j.colors = arguments[3]), b(x) ? j.showHidden = x : x && e._extend(j, x), R(j.showHidden) && (j.showHidden = !1), R(j.depth) && (j.depth = 2), R(j.colors) && (j.colors = !1), R(j.customInspect) && (j.customInspect = !0), j.colors && (j.stylize = s), d(j, y, j.depth);
    }
    e.inspect = a, a.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, a.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function s(y, x) {
      var j = a.styles[x];
      return j ? "\x1B[" + a.colors[j][0] + "m" + y + "\x1B[" + a.colors[j][1] + "m" : y;
    }
    function c(y, x) {
      return y;
    }
    function u(y) {
      var x = {};
      return y.forEach(function(j, q) {
        x[j] = !0;
      }), x;
    }
    function d(y, x, j) {
      if (y.customInspect && x && P(x.inspect) && // Filter out the util module, it's inspect function is special
      x.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(x.constructor && x.constructor.prototype === x)) {
        var q = x.inspect(j, y);
        return k(q) || (q = d(y, q, j)), q;
      }
      var H = f(y, x);
      if (H)
        return H;
      var V = Object.keys(x), Z = u(V);
      if (y.showHidden && (V = Object.getOwnPropertyNames(x)), Y(x) && (V.indexOf("message") >= 0 || V.indexOf("description") >= 0))
        return p(x);
      if (V.length === 0) {
        if (P(x)) {
          var U = x.name ? ": " + x.name : "";
          return y.stylize("[Function" + U + "]", "special");
        }
        if (L(x))
          return y.stylize(RegExp.prototype.toString.call(x), "regexp");
        if (_(x))
          return y.stylize(Date.prototype.toString.call(x), "date");
        if (Y(x))
          return p(x);
      }
      var M = "", $ = !1, z = ["{", "}"];
      if (v(x) && ($ = !0, z = ["[", "]"]), P(x)) {
        var ne = x.name ? ": " + x.name : "";
        M = " [Function" + ne + "]";
      }
      if (L(x) && (M = " " + RegExp.prototype.toString.call(x)), _(x) && (M = " " + Date.prototype.toUTCString.call(x)), Y(x) && (M = " " + p(x)), V.length === 0 && (!$ || x.length == 0))
        return z[0] + M + z[1];
      if (j < 0)
        return L(x) ? y.stylize(RegExp.prototype.toString.call(x), "regexp") : y.stylize("[Object]", "special");
      y.seen.push(x);
      var oe;
      return $ ? oe = h(y, x, j, Z, V) : oe = V.map(function(de) {
        return m(y, x, j, Z, de, $);
      }), y.seen.pop(), g(oe, M, z);
    }
    function f(y, x) {
      if (R(x))
        return y.stylize("undefined", "undefined");
      if (k(x)) {
        var j = "'" + JSON.stringify(x).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return y.stylize(j, "string");
      }
      if (N(x))
        return y.stylize("" + x, "number");
      if (b(x))
        return y.stylize("" + x, "boolean");
      if (w(x))
        return y.stylize("null", "null");
    }
    function p(y) {
      return "[" + Error.prototype.toString.call(y) + "]";
    }
    function h(y, x, j, q, H) {
      for (var V = [], Z = 0, U = x.length; Z < U; ++Z)
        ie(x, String(Z)) ? V.push(m(
          y,
          x,
          j,
          q,
          String(Z),
          !0
        )) : V.push("");
      return H.forEach(function(M) {
        M.match(/^\d+$/) || V.push(m(
          y,
          x,
          j,
          q,
          M,
          !0
        ));
      }), V;
    }
    function m(y, x, j, q, H, V) {
      var Z, U, M;
      if (M = Object.getOwnPropertyDescriptor(x, H) || { value: x[H] }, M.get ? M.set ? U = y.stylize("[Getter/Setter]", "special") : U = y.stylize("[Getter]", "special") : M.set && (U = y.stylize("[Setter]", "special")), ie(q, H) || (Z = "[" + H + "]"), U || (y.seen.indexOf(M.value) < 0 ? (w(j) ? U = d(y, M.value, null) : U = d(y, M.value, j - 1), U.indexOf(`
`) > -1 && (V ? U = U.split(`
`).map(function($) {
        return "  " + $;
      }).join(`
`).slice(2) : U = `
` + U.split(`
`).map(function($) {
        return "   " + $;
      }).join(`
`))) : U = y.stylize("[Circular]", "special")), R(Z)) {
        if (V && H.match(/^\d+$/))
          return U;
        Z = JSON.stringify("" + H), Z.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (Z = Z.slice(1, -1), Z = y.stylize(Z, "name")) : (Z = Z.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), Z = y.stylize(Z, "string"));
      }
      return Z + ": " + U;
    }
    function g(y, x, j) {
      var q = y.reduce(function(H, V) {
        return V.indexOf(`
`) >= 0, H + V.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return q > 60 ? j[0] + (x === "" ? "" : x + `
 `) + " " + y.join(`,
  `) + " " + j[1] : j[0] + x + " " + y.join(", ") + " " + j[1];
    }
    e.types = Ub();
    function v(y) {
      return Array.isArray(y);
    }
    e.isArray = v;
    function b(y) {
      return typeof y == "boolean";
    }
    e.isBoolean = b;
    function w(y) {
      return y === null;
    }
    e.isNull = w;
    function T(y) {
      return y == null;
    }
    e.isNullOrUndefined = T;
    function N(y) {
      return typeof y == "number";
    }
    e.isNumber = N;
    function k(y) {
      return typeof y == "string";
    }
    e.isString = k;
    function F(y) {
      return typeof y == "symbol";
    }
    e.isSymbol = F;
    function R(y) {
      return y === void 0;
    }
    e.isUndefined = R;
    function L(y) {
      return B(y) && D(y) === "[object RegExp]";
    }
    e.isRegExp = L, e.types.isRegExp = L;
    function B(y) {
      return typeof y == "object" && y !== null;
    }
    e.isObject = B;
    function _(y) {
      return B(y) && D(y) === "[object Date]";
    }
    e.isDate = _, e.types.isDate = _;
    function Y(y) {
      return B(y) && (D(y) === "[object Error]" || y instanceof Error);
    }
    e.isError = Y, e.types.isNativeError = Y;
    function P(y) {
      return typeof y == "function";
    }
    e.isFunction = P;
    function A(y) {
      return y === null || typeof y == "boolean" || typeof y == "number" || typeof y == "string" || typeof y == "symbol" || // ES6 symbol
      typeof y > "u";
    }
    e.isPrimitive = A, e.isBuffer = zb();
    function D(y) {
      return Object.prototype.toString.call(y);
    }
    function C(y) {
      return y < 10 ? "0" + y.toString(10) : y.toString(10);
    }
    var I = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function E() {
      var y = /* @__PURE__ */ new Date(), x = [
        C(y.getHours()),
        C(y.getMinutes()),
        C(y.getSeconds())
      ].join(":");
      return [y.getDate(), I[y.getMonth()], x].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", E(), e.format.apply(e, arguments));
    }, e.inherits = Yb(), e._extend = function(y, x) {
      if (!x || !B(x)) return y;
      for (var j = Object.keys(x), q = j.length; q--; )
        y[j[q]] = x[j[q]];
      return y;
    };
    function ie(y, x) {
      return Object.prototype.hasOwnProperty.call(y, x);
    }
    var K = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    e.promisify = function(x) {
      if (typeof x != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (K && x[K]) {
        var j = x[K];
        if (typeof j != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(j, K, {
          value: j,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), j;
      }
      function j() {
        for (var q, H, V = new Promise(function(M, $) {
          q = M, H = $;
        }), Z = [], U = 0; U < arguments.length; U++)
          Z.push(arguments[U]);
        Z.push(function(M, $) {
          M ? H(M) : q($);
        });
        try {
          x.apply(this, Z);
        } catch (M) {
          H(M);
        }
        return V;
      }
      return Object.setPrototypeOf(j, Object.getPrototypeOf(x)), K && Object.defineProperty(j, K, {
        value: j,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        j,
        t(x)
      );
    }, e.promisify.custom = K;
    function O(y, x) {
      if (!y) {
        var j = new Error("Promise was rejected with a falsy value");
        j.reason = y, y = j;
      }
      return x(y);
    }
    function pt(y) {
      if (typeof y != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function x() {
        for (var j = [], q = 0; q < arguments.length; q++)
          j.push(arguments[q]);
        var H = j.pop();
        if (typeof H != "function")
          throw new TypeError("The last argument must be of type Function");
        var V = this, Z = function() {
          return H.apply(V, arguments);
        };
        y.apply(this, j).then(
          function(U) {
            process.nextTick(Z.bind(null, null, U));
          },
          function(U) {
            process.nextTick(O.bind(null, U, Z));
          }
        );
      }
      return Object.setPrototypeOf(x, Object.getPrototypeOf(y)), Object.defineProperties(
        x,
        t(y)
      ), x;
    }
    e.callbackify = pt;
  })(ko)), ko;
}
function ce(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Vt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Gs(e) {
  Vt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Dr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ud(e, t) {
  Vt(2, arguments);
  var r = Gs(e), n = ce(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function zd(e, t) {
  Vt(2, arguments);
  var r = Gs(e), n = ce(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var o = r.getDate(), i = new Date(r.getTime());
  i.setMonth(r.getMonth() + n + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r);
}
function $b(e, t) {
  if (Vt(2, arguments), !t || Dr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = Gs(e), d = n || r ? zd(u, n + r * 12) : u, f = i || o ? Ud(d, i + o * 7) : d, p = s + a * 60, h = c + p * 60, m = h * 1e3, g = new Date(f.getTime() + m);
  return g;
}
const Wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $b
}, Symbol.toStringTag, { value: "Module" })), Hb = /* @__PURE__ */ ta(Wb);
function Vb(e, t) {
  Vt(2, arguments);
  var r = ce(t);
  return Ud(e, -r);
}
function Gb(e, t) {
  Vt(2, arguments);
  var r = ce(t);
  return zd(e, -r);
}
function Kb(e, t) {
  if (Vt(2, arguments), !t || Dr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = Gb(e, n + r * 12), d = Vb(u, i + o * 7), f = s + a * 60, p = c + f * 60, h = p * 1e3, m = new Date(d.getTime() - h);
  return m;
}
const Jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kb
}, Symbol.toStringTag, { value: "Module" })), Qb = /* @__PURE__ */ ta(Jb);
var Di, Gu;
function Xb() {
  if (Gu) return Di;
  Gu = 1;
  const e = Zb(), n = {
    add: Hb,
    sub: Qb
  }, o = {
    d: "days",
    w: "weeks",
    M: "months",
    y: "years",
    h: "hours",
    m: "minutes",
    s: "seconds"
  }, i = (a) => a.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
  return Di = {
    ungroup(a) {
      return a.yg ? a.yg : a;
    },
    unescape(a) {
      const s = new RegExp(`\\\\(['"])`, "g");
      return a.replace(s, "$1");
    },
    stringToRegExp(a, s) {
      let c = a.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
      return s === "^" ? c = "^" + c : s === "$" && (c = c + "$"), new RegExp(c, "i");
    },
    relDateToAbsolute(a, s, c) {
      const u = /* @__PURE__ */ new Date(), d = n[a](u, { [o[c]]: s });
      return i(d);
    },
    debug() {
      if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
        return;
      const a = arguments[0], s = Array.prototype.slice.call(arguments, 1), c = [a];
      s.forEach(function(u) {
        c.push(e.inspect(u, !1, null));
      }), console.log.apply(this, c);
    }
  }, Di;
}
var Ku;
function e0() {
  if (Ku) return vn;
  Ku = 1;
  const e = sb().parser;
  return e.yy = Xb(), vn.lex = (t) => {
    e.lexer.setInput(t);
    let r = e.lexer.lex();
    const n = [];
    for (; r !== e.lexer.EOF; )
      n.push({ token: e.terminals_[r], matched: e.lexer.match }), r = e.lexer.lex();
    return n;
  }, vn.parse = (t, r) => e.parse(t, r || {}), vn;
}
var Ci, Ju;
function t0() {
  return Ju || (Ju = 1, Ci = e0()), Ci;
}
var r0 = t0();
const n0 = /* @__PURE__ */ Kd(r0);
function o0(e, t) {
  const r = e.split("."), n = t.split(".");
  if (r.length !== n.length)
    return null;
  const o = {};
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i], s = n[i];
    if (a.startsWith(":")) {
      o[a.slice(1)] = s;
      continue;
    }
    if (a !== s)
      return null;
  }
  return o;
}
function Yd(e, t, r) {
  const n = e[t];
  if (n)
    return {
      definition: n,
      context: {
        key: t,
        pattern: t,
        params: {},
        timezone: r
      }
    };
  for (const [o, i] of Object.entries(e))
    if (i.parseKeys?.includes(t))
      return {
        definition: i,
        context: {
          key: o,
          pattern: o,
          params: {},
          timezone: r
        }
      };
  for (const [o, i] of Object.entries(e)) {
    if (!o.includes(":"))
      continue;
    const a = o0(o, t);
    if (a)
      return {
        definition: i,
        context: {
          key: t,
          pattern: o,
          params: a,
          timezone: r
        }
      };
  }
}
function Zd(e) {
  if (e)
    try {
      return n0.parse(e);
    } catch {
      return;
    }
}
function i0(e) {
  return e.map((t, r) => ({
    ...t,
    id: `${t.field}:${r + 1}`
  }));
}
function a0(e, t) {
  const r = /* @__PURE__ */ new Set();
  return Object.entries(e).forEach(([n, o]) => {
    o.ui.type === t && (r.add(n), o.parseKeys?.forEach((i) => r.add(i)));
  }), r;
}
function Xi(e, t) {
  return Object.keys(e).some((r) => t.has(r)) ? !0 : Object.values(e).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && Xi(n, t)) : r !== null && typeof r == "object" && !(r instanceof RegExp) && Xi(r, t));
}
function s0(e, t, r) {
  return e.flatMap((n) => {
    const o = Object.keys(n);
    if (o.length !== 1 || o[0].startsWith("$"))
      return [];
    const i = Yd(t, o[0], r);
    if (i) {
      const a = i.definition.codec.parse(n, i.context);
      if (a)
        return [a];
    }
    return [];
  });
}
function c0(e) {
  return [...e].sort((t, r) => t.localeCompare(r));
}
function u0(e, t, r) {
  const n = e.flatMap((o) => {
    const i = Yd(t, o.field, r);
    return i ? i.definition.codec.serialize(o, i.context) ?? [] : [];
  });
  if (n.length)
    return c0(n).join("+");
}
const l0 = a0(go, "date");
function $d(e, t) {
  return Array.isArray(e.$and) ? e.$and.flatMap((r) => $d(r, t)) : s0([e], go, t);
}
function f0(e, t) {
  const r = Zd(e ?? "");
  return r ? i0($d(r, t)) : [];
}
function d0(e) {
  const t = Zd(e ?? "");
  return t ? Xi(t, l0) : !1;
}
function Ks(e, t) {
  return u0(e, go, t);
}
const Wd = ["status", "created_at", "body", "post", "author", "reported"], p0 = {
  is_not: "is-not",
  not_contains: "does-not-contain",
  before: "is-less",
  after: "is-greater",
  on_or_before: "is-or-less",
  on_or_after: "is-or-greater"
};
function h0(e) {
  const t = e.indexOf(":");
  if (t <= 0)
    return null;
  const r = e.substring(0, t), n = e.substring(t + 1);
  return n ? {
    operator: p0[r] ?? r,
    value: n
  } : null;
}
function m0(e) {
  const t = [];
  for (const [r, n] of e.entries()) {
    if (!Wd.includes(r))
      continue;
    const o = h0(n);
    o && t.push({
      id: `${r}:${t.length + 1}`,
      field: r,
      operator: o.operator,
      values: [o.value]
    });
  }
  return t;
}
function Hd(e) {
  Wd.forEach((t) => e.delete(t));
}
function Qu(e, t, r) {
  const n = new URLSearchParams(e), o = Ks(t, r);
  return n.delete("filter"), Hd(n), o && n.set("filter", o), n;
}
function y0(e, t, r = !t) {
  return !!e && r && !t && d0(e);
}
function g0(e) {
  const [t, r] = fr(), n = te(null), o = we(() => t.get("filter") ?? void 0, [t]), i = we(() => t.toString(), [t]), a = we(() => o !== void 0 ? f0(o, e) : m0(t), [o, t, e]), [s, c] = Re(a), u = we(() => Ks(s, e), [s, e]);
  He(() => {
    i !== n.current && (c(a), n.current = i);
  }, [i, a]), He(() => {
    if (n.current !== null && i !== n.current)
      return;
    const p = Qu(t, s, e), h = p.toString();
    h !== i && (n.current = h, r(p, { replace: !0 }));
  }, [i, s, t, r, e]);
  const d = nr((p, h = {}) => {
    const m = typeof p == "function" ? p(s) : p, g = Qu(t, m, e), v = h.replace ?? !0;
    c(m), n.current = g.toString(), r(g, { replace: v });
  }, [s, t, r, e]), f = nr(({ replace: p = !0 } = {}) => {
    const h = new URLSearchParams(t);
    h.delete("filter"), Hd(h), c([]), n.current = h.toString(), r(h, { replace: p });
  }, [t, r]);
  return { filters: s, nql: u, setFilters: d, clearFilters: f };
}
function v0(e) {
  return e.get("id")?.match(/^is:(.+)$/)?.[1];
}
const b0 = ({
  timezone: e,
  singleCommentId: t
}) => {
  const [r, n] = fr(), { filters: o, nql: i, setFilters: a } = g0(e), s = nr((T, N, k = "is") => {
    const F = [
      ...o.filter((B) => B.field !== T),
      Xd(T, k, [N])
    ];
    if (!t) {
      a(F, { replace: !1 });
      return;
    }
    const R = new URLSearchParams(r), L = Ks(F, e);
    R.delete("id"), R.delete("filter"), L && R.set("filter", L), n(R, { replace: !1 });
  }, [o, r, a, n, t, e]), c = we(() => t ? `id:${ur(t)}` : i, [i, t]), u = nr(() => {
    n(new URLSearchParams(), { replace: !1 });
  }, [n]), {
    data: d,
    isError: f,
    isFetching: p,
    isFetchingNextPage: h,
    isRefetching: m,
    fetchNextPage: g,
    hasNextPage: v
  } = Td({
    searchParams: {
      ...c ? { filter: c } : {}
    },
    keepPreviousData: !0
  }), b = p && !h && !m, w = c ?? "";
  return /* @__PURE__ */ l.jsxs(jd, { children: [
    /* @__PURE__ */ l.jsx(Sd, { children: !t && /* @__PURE__ */ l.jsx(
      Fv,
      {
        filters: o,
        siteTimezone: e,
        onFiltersChange: a
      }
    ) }),
    /* @__PURE__ */ l.jsx(vl, { children: b ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ l.jsx(dr, { size: "lg" }) }) : f ? /* @__PURE__ */ l.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ l.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ l.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ l.jsx(le, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : d?.comments.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        ob,
        {
          fetchNextPage: g,
          hasNextPage: v,
          isFetchingNextPage: h,
          isLoading: p && !h,
          items: d?.comments ?? [],
          resetKey: w,
          totalItems: d?.meta?.pagination?.total ?? 0,
          onAddFilter: s
        }
      ),
      t && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: u, children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center", children: t ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ l.jsx(Ui, { title: "Comment not found", children: /* @__PURE__ */ l.jsx(qi, {}) }),
      /* @__PURE__ */ l.jsx(le, { className: "mt-4", variant: "outline", onClick: u, children: "Show all comments" })
    ] }) : /* @__PURE__ */ l.jsx(
      Ui,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ l.jsx(qi, {})
      }
    ) }) })
  ] });
}, B0 = () => {
  const [e] = fr(), { data: t, isLoading: r } = bp({}), n = we(() => v0(e), [e]), o = e.get("filter") ?? void 0;
  if (!n && y0(o, !!t, r))
    return /* @__PURE__ */ l.jsxs(jd, { children: [
      /* @__PURE__ */ l.jsx(Sd, {}),
      /* @__PURE__ */ l.jsx(vl, { children: /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ l.jsx(dr, { size: "lg" }) }) })
    ] });
  const a = gp(t?.settings ?? []);
  return /* @__PURE__ */ l.jsx(b0, { singleCommentId: n, timezone: a });
};
export {
  B0 as default
};
//# sourceMappingURL=comments-CyJU9Ums.mjs.map
