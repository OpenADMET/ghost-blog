import { i as X, a as le, l as ee, u as re, j as d, b as oe, k as te, R as S, y as it, x as lt, G as En, c as C, q as ne, A as ka, E as Ma, Q as Da, S as Oa, s as ve } from "./index-BAF0YXsp.mjs";
import { C as Na, b as dn, B as Sa } from "./button-ufGBCcsV.mjs";
import { c as Ca, S as Wa, P as _a, k as Pa, l as ja, d as Ea, m as Fa, a as Ta, L as $t } from "./tooltip-CTcyINxz.mjs";
import { u as Ya, A as Fn, R as Ia, c as Tn, C as za, a as Aa, b as Ba, D as Ra, e as $a, f as Va, g as qa } from "./dropdown-menu-BSSmAory.mjs";
import { R as Ha, P as Ga, O as La, C as Ka, X as Yn } from "./dialog-D6_lBvtT.mjs";
import { P as _e } from "./get-site-timezone-DlXmHA3y.mjs";
import { b as yt, u as In, P as bt, d as He, e as zn, a as Te, g as Ua, l as rt } from "./createLucideIcon-DcUfTBt_.mjs";
import { a as An, P as Xa, h as Qa, R as Za, u as Ja, F as eo, D as to, C as at } from "./check-IcEnuTpD.mjs";
function no(e) {
  const t = X({ value: e, previous: e });
  return le(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var xt = "Switch", [ro] = zn(xt), [ao, oo] = ro(xt), Bn = ee(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: a,
      defaultChecked: o,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: u,
      form: c,
      ...f
    } = e, [m, v] = re(null), h = yt(t, (x) => v(x)), w = X(!1), y = m ? c || !!m.closest("form") : !0, [N, b] = In({
      prop: a,
      defaultProp: o ?? !1,
      onChange: u,
      caller: xt
    });
    return /* @__PURE__ */ d.jsxs(ao, { scope: n, checked: N, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        bt.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": N,
          "aria-required": i,
          "data-state": qn(N),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...f,
          ref: h,
          onClick: He(e.onClick, (x) => {
            b((O) => !O), y && (w.current = x.isPropagationStopped(), w.current || x.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ d.jsx(
        Vn,
        {
          control: m,
          bubbles: !w.current,
          name: r,
          value: l,
          checked: N,
          required: i,
          disabled: s,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Bn.displayName = xt;
var Rn = "SwitchThumb", $n = ee(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, a = oo(Rn, n);
    return /* @__PURE__ */ d.jsx(
      bt.span,
      {
        "data-state": qn(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
$n.displayName = Rn;
var so = "SwitchBubbleInput", Vn = ee(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...a
  }, o) => {
    const i = X(null), s = yt(i, o), l = no(n), u = Ya(t);
    return oe(() => {
      const c = i.current;
      if (!c) return;
      const f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && v) {
        const h = new Event("click", { bubbles: r });
        v.call(c, n), c.dispatchEvent(h);
      }
    }, [l, n, r]), /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...a,
        tabIndex: -1,
        ref: s,
        style: {
          ...a.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Vn.displayName = so;
function qn(e) {
  return e ? "checked" : "unchecked";
}
var Hn = Bn, io = $n, wt = "Popover", [Gn] = zn(wt, [
  Tn
]), ct = Tn(), [lo, Pe] = Gn(wt), Ln = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: i = !1
  } = e, s = ct(t), l = X(null), [u, c] = re(!1), [f, m] = In({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: wt
  });
  return /* @__PURE__ */ d.jsx(Ia, { ...s, children: /* @__PURE__ */ d.jsx(
    lo,
    {
      scope: t,
      contentId: Te(),
      triggerRef: l,
      open: f,
      onOpenChange: m,
      onOpenToggle: te(() => m((v) => !v), [m]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: te(() => c(!0), []),
      onCustomAnchorRemove: te(() => c(!1), []),
      modal: i,
      children: n
    }
  ) });
};
Ln.displayName = wt;
var Kn = "PopoverAnchor", co = ee(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Pe(Kn, n), o = ct(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = a;
    return oe(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d.jsx(Fn, { ...o, ...r, ref: t });
  }
);
co.displayName = Kn;
var Un = "PopoverTrigger", Xn = ee(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Pe(Un, n), o = ct(n), i = yt(t, a.triggerRef), s = /* @__PURE__ */ d.jsx(
      bt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": tr(a.open),
        ...r,
        ref: i,
        onClick: He(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? s : /* @__PURE__ */ d.jsx(Fn, { asChild: !0, ...o, children: s });
  }
);
Xn.displayName = Un;
var Lt = "PopoverPortal", [uo, fo] = Gn(Lt, {
  forceMount: void 0
}), Qn = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: a } = e, o = Pe(Lt, t);
  return /* @__PURE__ */ d.jsx(uo, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(An, { present: n || o.open, children: /* @__PURE__ */ d.jsx(Xa, { asChild: !0, container: a, children: r }) }) });
};
Qn.displayName = Lt;
var Le = "PopoverContent", Zn = ee(
  (e, t) => {
    const n = fo(Le, e.__scopePopover), { forceMount: r = n.forceMount, ...a } = e, o = Pe(Le, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(An, { present: r || o.open, children: o.modal ? /* @__PURE__ */ d.jsx(mo, { ...a, ref: t }) : /* @__PURE__ */ d.jsx(po, { ...a, ref: t }) });
  }
);
Zn.displayName = Le;
var ho = Ua("PopoverContent.RemoveScroll"), mo = ee(
  (e, t) => {
    const n = Pe(Le, e.__scopePopover), r = X(null), a = yt(t, r), o = X(!1);
    return oe(() => {
      const i = r.current;
      if (i) return Qa(i);
    }, []), /* @__PURE__ */ d.jsx(Za, { as: ho, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      Jn,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: He(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), o.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: He(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || l;
            o.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: He(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), po = ee(
  (e, t) => {
    const n = Pe(Le, e.__scopePopover), r = X(!1), a = X(!1);
    return /* @__PURE__ */ d.jsx(
      Jn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          e.onCloseAutoFocus?.(o), o.defaultPrevented || (r.current || n.triggerRef.current?.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          e.onInteractOutside?.(o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const i = o.target;
          n.triggerRef.current?.contains(i) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), Jn = ee(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: a,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: c,
      ...f
    } = e, m = Pe(Le, n), v = ct(n);
    return Ja(), /* @__PURE__ */ d.jsx(
      eo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ d.jsx(
          to,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: c,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              za,
              {
                "data-state": tr(m.open),
                role: "dialog",
                id: m.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), er = "PopoverClose", go = ee(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = Pe(er, n);
    return /* @__PURE__ */ d.jsx(
      bt.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: He(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
go.displayName = er;
var vo = "PopoverArrow", yo = ee(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, a = ct(n);
    return /* @__PURE__ */ d.jsx(Aa, { ...a, ...r, ref: t });
  }
);
yo.displayName = vo;
function tr(e) {
  return e ? "open" : "closed";
}
var bo = Ln, xo = Xn, wo = Qn, nr = Zn;
function ko(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Mo = {}, et = {};
function Fe(e, t) {
  try {
    const r = (Mo[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in et ? et[r] : fn(r, r.split(":"));
  } catch {
    if (e in et) return et[e];
    const n = e?.match(Do);
    return n ? fn(e, n.slice(1)) : NaN;
  }
}
const Do = /([+-]\d\d):?(\d\d)?/;
function fn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), a = +(t[2] || 0) / 60;
  return et[e] = n * 60 + r > 0 ? n * 60 + r + a : n * 60 - r - a;
}
class De extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Fe(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), rr(this), Vt(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new De(...n, t) : new De(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new De(+this, t);
  }
  getTimezoneOffset() {
    const t = -Fe(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Vt(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new De(+new Date(t), this.timeZone);
  }
  //#endregion
}
const hn = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!hn.test(e)) return;
  const t = e.replace(hn, "$1UTC");
  De.prototype[t] && (e.startsWith("get") ? De.prototype[e] = function() {
    return this.internal[t]();
  } : (De.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Oo(this), +this;
  }, De.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Vt(this), +this;
  }));
});
function Vt(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Fe(e.timeZone, e) * 60));
}
function Oo(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), rr(e);
}
function rr(e) {
  const t = Fe(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const a = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = a - o, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = a - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const u = /* @__PURE__ */ new Date(+e);
  u.setUTCSeconds(0);
  const c = a > 0 ? u.getSeconds() : (u.getSeconds() - 60) % 60, f = Math.round(-(Fe(e.timeZone, e) * 60)) % 60;
  (f || c) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + c));
  const m = Fe(e.timeZone, e), v = m > 0 ? Math.floor(m) : Math.ceil(m), w = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, y = v !== n, N = w - l;
  if (y && N) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + N);
    const b = Fe(e.timeZone, e), x = b > 0 ? Math.floor(b) : Math.ceil(b), O = v - x;
    O && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + O), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + O));
  }
}
class ce extends De {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ce(...n, t) : new ce(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), a = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + a;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, a] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${a}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, a] = this.tzComponents();
    return `${t} GMT${n}${r}${a} (${ko(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), a = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, a];
  }
  //#endregion
  withTimeZone(t) {
    return new ce(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new ce(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ar = 6048e5, No = 864e5, mn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ae(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && mn in e ? e[mn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function K(e, t) {
  return ae(t || e, e);
}
function or(e, t, n) {
  const r = K(e, n?.in);
  return isNaN(t) ? ae(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function sr(e, t, n) {
  const r = K(e, n?.in);
  if (isNaN(t)) return ae(e, NaN);
  if (!t)
    return r;
  const a = r.getDate(), o = ae(e, r.getTime());
  o.setMonth(r.getMonth() + t + 1, 0);
  const i = o.getDate();
  return a >= i ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), r);
}
let So = {};
function ut() {
  return So;
}
function Ke(e, t) {
  const n = ut(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = K(e, t?.in), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function ot(e, t) {
  return Ke(e, { ...t, weekStartsOn: 1 });
}
function ir(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = ae(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = ot(a), i = ae(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = ot(i);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function pn(e) {
  const t = K(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Xe(e, ...t) {
  const n = ae.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function st(e, t) {
  const n = K(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Kt(e, t, n) {
  const [r, a] = Xe(
    n?.in,
    e,
    t
  ), o = st(r), i = st(a), s = +o - pn(o), l = +i - pn(i);
  return Math.round((s - l) / No);
}
function Co(e, t) {
  const n = ir(e, t), r = ae(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ot(r);
}
function Wo(e, t, n) {
  return or(e, t * 7, n);
}
function _o(e, t, n) {
  return sr(e, t * 12, n);
}
function Po(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = ae.bind(null, a));
    const o = K(a, r);
    (!n || n < o || isNaN(+o)) && (n = o);
  }), ae(r, n || NaN);
}
function jo(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = ae.bind(null, a));
    const o = K(a, r);
    (!n || n > o || isNaN(+o)) && (n = o);
  }), ae(r, n || NaN);
}
function Eo(e, t, n) {
  const [r, a] = Xe(
    n?.in,
    e,
    t
  );
  return +st(r) == +st(a);
}
function lr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Fo(e) {
  return !(!lr(e) && typeof e != "number" || isNaN(+K(e)));
}
function cr(e, t, n) {
  const [r, a] = Xe(
    n?.in,
    e,
    t
  ), o = r.getFullYear() - a.getFullYear(), i = r.getMonth() - a.getMonth();
  return o * 12 + i;
}
function To(e, t) {
  const n = K(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ur(e, t) {
  const [n, r] = Xe(e, t.start, t.end);
  return { start: n, end: r };
}
function Yo(e, t) {
  const { start: n, end: r } = ur(t?.in, e);
  let a = +n > +r;
  const o = a ? +n : +r, i = a ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const l = [];
  for (; +i <= o; )
    l.push(ae(n, i)), i.setMonth(i.getMonth() + s);
  return a ? l.reverse() : l;
}
function Io(e, t) {
  const n = K(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function zo(e, t) {
  const n = K(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function dr(e, t) {
  const n = K(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ao(e, t) {
  const { start: n, end: r } = ur(t?.in, e);
  let a = +n > +r;
  const o = a ? +n : +r, i = a ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let s = 1;
  const l = [];
  for (; +i <= o; )
    l.push(ae(n, i)), i.setFullYear(i.getFullYear() + s);
  return a ? l.reverse() : l;
}
function fr(e, t) {
  const n = ut(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = K(e, t?.in), o = a.getDay(), i = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function Bo(e, t) {
  return fr(e, { ...t, weekStartsOn: 1 });
}
const Ro = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, $o = (e, t, n) => {
  let r;
  const a = Ro[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Vo = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qo = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ho = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Go = {
  date: jt({
    formats: Vo,
    defaultWidth: "full"
  }),
  time: jt({
    formats: qo,
    defaultWidth: "full"
  }),
  dateTime: jt({
    formats: Ho,
    defaultWidth: "full"
  })
}, Lo = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ko = (e, t, n, r) => Lo[e];
function Qe(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n?.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const Uo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Qo = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
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
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Zo = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Jo = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, es = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ts = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, ns = {
  ordinalNumber: ts,
  era: Qe({
    values: Uo,
    defaultWidth: "wide"
  }),
  quarter: Qe({
    values: Xo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qe({
    values: Qo,
    defaultWidth: "wide"
  }),
  day: Qe({
    values: Zo,
    defaultWidth: "wide"
  }),
  dayPeriod: Qe({
    values: Jo,
    defaultWidth: "wide",
    formattingValues: es,
    defaultFormattingWidth: "wide"
  })
};
function Ze(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? as(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      rs(s, (f) => f.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const c = t.slice(i.length);
    return { value: u, rest: c };
  };
}
function rs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function as(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function os(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(a.length);
    return { value: i, rest: s };
  };
}
const ss = /^(\d+)(th|st|nd|rd)?/i, is = /\d+/i, ls = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, cs = {
  any: [/^b/i, /^(a|c)/i]
}, us = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ds = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, hs = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ms = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ps = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gs = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vs = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ys = {
  ordinalNumber: os({
    matchPattern: ss,
    parsePattern: is,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ze({
    matchPatterns: ls,
    defaultMatchWidth: "wide",
    parsePatterns: cs,
    defaultParseWidth: "any"
  }),
  quarter: Ze({
    matchPatterns: us,
    defaultMatchWidth: "wide",
    parsePatterns: ds,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ze({
    matchPatterns: fs,
    defaultMatchWidth: "wide",
    parsePatterns: hs,
    defaultParseWidth: "any"
  }),
  day: Ze({
    matchPatterns: ms,
    defaultMatchWidth: "wide",
    parsePatterns: ps,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ze({
    matchPatterns: gs,
    defaultMatchWidth: "any",
    parsePatterns: vs,
    defaultParseWidth: "any"
  })
}, Re = {
  code: "en-US",
  formatDistance: $o,
  formatLong: Go,
  formatRelative: Ko,
  localize: ns,
  match: ys,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function bs(e, t) {
  const n = K(e, t?.in);
  return Kt(n, dr(n)) + 1;
}
function Ut(e, t) {
  const n = K(e, t?.in), r = +ot(n) - +Co(n);
  return Math.round(r / ar) + 1;
}
function hr(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = ut(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, i = ae(t?.in || e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = Ke(i, t), l = ae(t?.in || e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const u = Ke(l, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
}
function xs(e, t) {
  const n = ut(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = hr(e, t), o = ae(t?.in || e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), Ke(o, t);
}
function Xt(e, t) {
  const n = K(e, t?.in), r = +Ke(n, t) - +xs(n, t);
  return Math.round(r / ar) + 1;
}
function L(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ce = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return L(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : L(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return L(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return L(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return L(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return L(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return L(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return L(a, t.length);
  }
}, Ae = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gn = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Ce.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = hr(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return L(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : L(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ir(e);
    return L(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return L(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return L(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return L(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ce.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return L(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Xt(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : L(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ut(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : L(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ce.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = bs(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : L(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return L(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return L(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return L(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Ae.noon : r === 0 ? a = Ae.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Ae.evening : r >= 12 ? a = Ae.afternoon : r >= 4 ? a = Ae.morning : a = Ae.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ce.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ce.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : L(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : L(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ce.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ce.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ce.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return yn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return yn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return L(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return L(+e, t.length);
  }
};
function vn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + L(o, 2);
}
function yn(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + L(Math.abs(e) / 60, 2) : Ee(e, t);
}
function Ee(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = L(Math.trunc(r / 60), 2), o = L(r % 60, 2);
  return n + a + t + o;
}
const bn = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, mr = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, ws = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return bn(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", bn(r, t)).replace("{{time}}", mr(a, t));
}, ks = {
  p: mr,
  P: ws
}, Ms = /^D+$/, Ds = /^Y+$/, Os = ["D", "DD", "YY", "YYYY"];
function Ns(e) {
  return Ms.test(e);
}
function Ss(e) {
  return Ds.test(e);
}
function Cs(e, t, n) {
  const r = Ws(e, t, n);
  if (console.warn(r), Os.includes(e)) throw new RangeError(r);
}
function Ws(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const _s = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ps = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, js = /^'([^]*?)'?$/, Es = /''/g, Fs = /[a-zA-Z]/;
function tt(e, t, n) {
  const r = ut(), a = n?.locale ?? r.locale ?? Re, o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = K(e, n?.in);
  if (!Fo(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Ps).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const m = ks[f];
      return m(c, a.formatLong);
    }
    return c;
  }).join("").match(_s).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: Ts(c) };
    if (gn[f])
      return { isToken: !0, value: c };
    if (f.match(Fs))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return l.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (!n?.useAdditionalWeekYearTokens && Ss(f) || !n?.useAdditionalDayOfYearTokens && Ns(f)) && Cs(f, t, String(e));
    const m = gn[f[0]];
    return m(s, f, a.localize, u);
  }).join("");
}
function Ts(e) {
  const t = e.match(js);
  return t ? t[1].replace(Es, "'") : e;
}
function Ys(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = n.getMonth(), o = ae(n, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Is(e, t) {
  return K(e, t?.in).getMonth();
}
function zs(e, t) {
  return K(e, t?.in).getFullYear();
}
function As(e, t) {
  return +K(e) > +K(t);
}
function Bs(e, t) {
  return +K(e) < +K(t);
}
function Rs(e, t, n) {
  const [r, a] = Xe(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth();
}
function $s(e, t, n) {
  const [r, a] = Xe(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear();
}
function Vs(e, t, n) {
  const r = K(e, n?.in), a = r.getFullYear(), o = r.getDate(), i = ae(e, 0);
  i.setFullYear(a, t, 15), i.setHours(0, 0, 0, 0);
  const s = Ys(i);
  return r.setMonth(t, Math.min(o, s)), r;
}
function qs(e, t, n) {
  const r = K(e, n?.in);
  return isNaN(+r) ? ae(e, NaN) : (r.setFullYear(t), r);
}
const xn = 5, Hs = 4;
function Gs(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, a = t.addDays(e, -r + 1), o = t.addDays(a, xn * 7 - 1);
  return t.getMonth(e) === t.getMonth(o) ? xn : Hs;
}
function pr(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Ls(e, t) {
  const n = pr(e, t), r = Gs(e, t);
  return t.addDays(n, r * 7 - 1);
}
const gr = {
  ...Re,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (i, s) => tt(i, s, { locale: Re, ...n });
      let o = a(e, "PPPP");
      return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, o) => tt(a, o, { locale: Re, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (i, s) => tt(i, s, { locale: Re, ...n });
      let o = a(e, "PPPP");
      return t?.today && (o = `Today, ${o}`), o;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, o) => tt(a, o, { locale: Re, ...t }), r(e, "cccc");
    }
  }
};
class me {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ce.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, a, o) => this.overrides?.newDate ? this.overrides.newDate(r, a, o) : this.options.timeZone ? new ce(r, a, o, this.options.timeZone) : new Date(r, a, o), this.addDays = (r, a) => this.overrides?.addDays ? this.overrides.addDays(r, a) : or(r, a), this.addMonths = (r, a) => this.overrides?.addMonths ? this.overrides.addMonths(r, a) : sr(r, a), this.addWeeks = (r, a) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, a) : Wo(r, a), this.addYears = (r, a) => this.overrides?.addYears ? this.overrides.addYears(r, a) : _o(r, a), this.differenceInCalendarDays = (r, a) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, a) : Kt(r, a), this.differenceInCalendarMonths = (r, a) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, a) : cr(r, a), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Yo(r), this.eachYearOfInterval = (r) => {
      const a = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Ao(r), o = new Set(a.map((s) => this.getYear(s)));
      if (o.size === a.length)
        return a;
      const i = [];
      return o.forEach((s) => {
        i.push(new Date(s, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Ls(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Bo(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : To(r), this.endOfWeek = (r, a) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, a) : fr(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : zo(r), this.format = (r, a, o) => {
      const i = this.overrides?.format ? this.overrides.format(r, a, this.options) : tt(r, a, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Ut(r), this.getMonth = (r, a) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Is(r, this.options), this.getYear = (r, a) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : zs(r, this.options), this.getWeek = (r, a) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Xt(r, this.options), this.isAfter = (r, a) => this.overrides?.isAfter ? this.overrides.isAfter(r, a) : As(r, a), this.isBefore = (r, a) => this.overrides?.isBefore ? this.overrides.isBefore(r, a) : Bs(r, a), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : lr(r), this.isSameDay = (r, a) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, a) : Eo(r, a), this.isSameMonth = (r, a) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, a) : Rs(r, a), this.isSameYear = (r, a) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, a) : $s(r, a), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Po(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : jo(r), this.setMonth = (r, a) => this.overrides?.setMonth ? this.overrides.setMonth(r, a) : Vs(r, a), this.setYear = (r, a) => this.overrides?.setYear ? this.overrides.setYear(r, a) : qs(r, a), this.startOfBroadcastWeek = (r, a) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : pr(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : st(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : ot(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Io(r), this.startOfWeek = (r, a) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Ke(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : dr(r), this.options = { locale: gr, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let a = 0; a < 10; a++)
      r[a.toString()] = n.format(a);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && me.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: a } = this.options, o = n?.code;
    if (o && me.yearFirstLocales.has(o))
      try {
        return new Intl.DateTimeFormat(o, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: a
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
me.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Oe = new me();
class vr {
  constructor(t, n, r = Oe) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class Ks {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Us {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Xs(e) {
  return S.createElement("button", { ...e });
}
function Qs(e) {
  return S.createElement("span", { ...e });
}
function Zs(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    S.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && S.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && S.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && S.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && S.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Js(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function ei(e) {
  const { day: t, modifiers: n, ...r } = e, a = S.useRef(null);
  return S.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), S.createElement("button", { ref: a, ...r });
}
var _;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(_ || (_ = {}));
var Z;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Z || (Z = {}));
var xe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(xe || (xe = {}));
var he;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(he || (he = {}));
function ti(e) {
  const { options: t, className: n, components: r, classNames: a, ...o } = e, i = [a[_.Dropdown], n].join(" "), s = t?.find(({ value: l }) => l === o.value);
  return S.createElement(
    "span",
    { "data-disabled": o.disabled, className: a[_.DropdownRoot] },
    S.createElement(r.Select, { className: i, ...o }, t?.map(({ value: l, label: u, disabled: c }) => S.createElement(r.Option, { key: l, value: l, disabled: c }, u))),
    S.createElement(
      "span",
      { className: a[_.CaptionLabel], "aria-hidden": !0 },
      s?.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: a[_.Chevron] })
    )
  );
}
function ni(e) {
  return S.createElement("div", { ...e });
}
function ri(e) {
  return S.createElement("div", { ...e });
}
function ai(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function oi(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function si(e) {
  return S.createElement("table", { ...e });
}
function ii(e) {
  return S.createElement("div", { ...e });
}
const yr = it(void 0);
function dt() {
  const e = lt(yr);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function li(e) {
  const { components: t } = dt();
  return S.createElement(t.Dropdown, { ...e });
}
function ci(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: a, ...o } = e, { components: i, classNames: s, labels: { labelPrevious: l, labelNext: u } } = dt(), c = te((m) => {
    a && n?.(m);
  }, [a, n]), f = te((m) => {
    r && t?.(m);
  }, [r, t]);
  return S.createElement(
    "nav",
    { ...o },
    S.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[_.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      S.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[_.Chevron], orientation: "left" })
    ),
    S.createElement(
      i.NextMonthButton,
      { type: "button", className: s[_.NextMonthButton], tabIndex: a ? void 0 : -1, "aria-disabled": a ? void 0 : !0, "aria-label": u(a), onClick: c },
      S.createElement(i.Chevron, { disabled: a ? void 0 : !0, orientation: "right", className: s[_.Chevron] })
    )
  );
}
function ui(e) {
  const { components: t } = dt();
  return S.createElement(t.Button, { ...e });
}
function di(e) {
  return S.createElement("option", { ...e });
}
function fi(e) {
  const { components: t } = dt();
  return S.createElement(t.Button, { ...e });
}
function hi(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function mi(e) {
  return S.createElement("select", { ...e });
}
function pi(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function gi(e) {
  return S.createElement("th", { ...e });
}
function vi(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function yi(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function bi(e) {
  return S.createElement("th", { ...e });
}
function xi(e) {
  return S.createElement("tbody", { ...e });
}
function wi(e) {
  const { components: t } = dt();
  return S.createElement(t.Dropdown, { ...e });
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Xs,
  CaptionLabel: Qs,
  Chevron: Zs,
  Day: Js,
  DayButton: ei,
  Dropdown: ti,
  DropdownNav: ni,
  Footer: ri,
  Month: ai,
  MonthCaption: oi,
  MonthGrid: si,
  Months: ii,
  MonthsDropdown: li,
  Nav: ci,
  NextMonthButton: ui,
  Option: di,
  PreviousMonthButton: fi,
  Root: hi,
  Select: mi,
  Week: pi,
  WeekNumber: yi,
  WeekNumberHeader: bi,
  Weekday: gi,
  Weekdays: vi,
  Weeks: xi,
  YearsDropdown: wi
}, Symbol.toStringTag, { value: "Module" }));
function Ne(e, t, n = !1, r = Oe) {
  let { from: a, to: o } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return a && o ? (i(o, a) < 0 && ([a, o] = [o, a]), i(t, a) >= (n ? 1 : 0) && i(o, t) >= (n ? 1 : 0)) : !n && o ? s(o, t) : !n && a ? s(a, t) : !1;
}
function Qt(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function kt(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Zt(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Jt(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function br(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function xr(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Se(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: a, differenceInCalendarDays: o, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return a(e, s);
    if (xr(s, n))
      return s.some((l) => a(e, l));
    if (kt(s))
      return Ne(s, e, !1, n);
    if (br(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (Qt(s)) {
      const l = o(s.before, e), u = o(s.after, e), c = l > 0, f = u < 0;
      return i(s.before, s.after) ? f && c : c || f;
    }
    return Zt(s) ? o(e, s.after) > 0 : Jt(s) ? o(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function Mi(e, t, n, r, a) {
  const { disabled: o, hidden: i, modifiers: s, showOutsideDays: l, broadcastCalendar: u, today: c = a.today() } = t, { isSameDay: f, isSameMonth: m, startOfMonth: v, isBefore: h, endOfMonth: w, isAfter: y } = a, N = n && v(n), b = r && w(r), x = {
    [Z.focused]: [],
    [Z.outside]: [],
    [Z.disabled]: [],
    [Z.hidden]: [],
    [Z.today]: []
  }, O = {};
  for (const D of e) {
    const { date: p, displayMonth: P } = D, A = !!(P && !m(p, P)), G = !!(N && h(p, N)), B = !!(b && y(p, b)), j = !!(o && Se(p, o, a)), V = !!(i && Se(p, i, a)) || G || B || // Broadcast calendar will show outside days as default
    !u && !l && A || u && l === !1 && A, Q = f(p, c);
    A && x.outside.push(D), j && x.disabled.push(D), V && x.hidden.push(D), Q && x.today.push(D), s && Object.keys(s).forEach((U) => {
      const se = s?.[U];
      se && Se(p, se, a) && (O[U] ? O[U].push(D) : O[U] = [D]);
    });
  }
  return (D) => {
    const p = {
      [Z.focused]: !1,
      [Z.disabled]: !1,
      [Z.hidden]: !1,
      [Z.outside]: !1,
      [Z.today]: !1
    }, P = {};
    for (const A in x) {
      const G = x[A];
      p[A] = G.some((B) => B === D);
    }
    for (const A in O)
      P[A] = O[A].some((G) => G === D);
    return {
      ...p,
      // custom modifiers should override all the previous ones
      ...P
    };
  };
}
function Di(e, t, n = {}) {
  return Object.entries(e).filter(([, a]) => a === !0).reduce((a, [o]) => (n[o] ? a.push(n[o]) : t[Z[o]] ? a.push(t[Z[o]]) : t[xe[o]] && a.push(t[xe[o]]), a), [t[_.Day]]);
}
function Oi(e) {
  return {
    ...ki,
    ...e
  };
}
function Ni(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function en() {
  const e = {};
  for (const t in _)
    e[_[t]] = `rdp-${_[t]}`;
  for (const t in Z)
    e[Z[t]] = `rdp-${Z[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in he)
    e[he[t]] = `rdp-${he[t]}`;
  return e;
}
function wr(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const Si = wr;
function Ci(e, t, n) {
  return (n ?? new me(t)).format(e, "d");
}
function Wi(e, t = Oe) {
  return t.format(e, "LLLL");
}
function _i(e, t, n) {
  return (n ?? new me(t)).format(e, "cccccc");
}
function Pi(e, t = Oe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function ji() {
  return "";
}
function kr(e, t = Oe) {
  return t.format(e, "yyyy");
}
const Ei = kr, Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: wr,
  formatDay: Ci,
  formatMonthCaption: Si,
  formatMonthDropdown: Wi,
  formatWeekNumber: Pi,
  formatWeekNumberHeader: ji,
  formatWeekdayName: _i,
  formatYearCaption: Ei,
  formatYearDropdown: kr
}, Symbol.toStringTag, { value: "Module" }));
function Ti(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Fi,
    ...e
  };
}
function tn(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
}
const Yi = tn;
function nn(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const Ii = nn;
function Mr(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t?.today && (a = `Today, ${a}`), a;
}
function Dr(e) {
  return "Choose the Month";
}
function Or() {
  return "";
}
const zi = "Go to the Next Month";
function Nr(e, t) {
  return zi;
}
function Sr(e) {
  return "Go to the Previous Month";
}
function Cr(e, t, n) {
  return (n ?? new me(t)).format(e, "cccc");
}
function Wr(e, t) {
  return `Week ${e}`;
}
function _r(e) {
  return "Week Number";
}
function Pr(e) {
  return "Choose the Year";
}
const Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Ii,
  labelDay: Yi,
  labelDayButton: tn,
  labelGrid: nn,
  labelGridcell: Mr,
  labelMonthDropdown: Dr,
  labelNav: Or,
  labelNext: Nr,
  labelPrevious: Sr,
  labelWeekNumber: Wr,
  labelWeekNumberHeader: _r,
  labelWeekday: Cr,
  labelYearDropdown: Pr
}, Symbol.toStringTag, { value: "Module" })), be = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Bi(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...Ai,
    ...e ?? {},
    labelDayButton: be(tn, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: be(Dr, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: be(Nr, e?.labelNext, n.labelNext),
    labelPrevious: be(Sr, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: be(Wr, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: be(Pr, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: be(nn, e?.labelGrid, n.labelGrid),
    labelGridcell: be(Mr, e?.labelGridcell, n.labelGridcell),
    labelNav: be(Or, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: be(_r, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: be(Cr, e?.labelWeekday, n.labelWeekday)
  };
}
function Ri(e, t, n, r, a) {
  const { startOfMonth: o, startOfYear: i, endOfYear: s, eachMonthOfInterval: l, getMonth: u } = a;
  return l({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const v = r.formatMonthDropdown(m, a), h = u(m), w = t && m < o(t) || n && m > o(n) || !1;
    return { value: h, label: v, disabled: w };
  });
}
function $i(e, t = {}, n = {}) {
  let r = { ...t?.[_.Day] };
  return Object.entries(e).filter(([, a]) => a === !0).forEach(([a]) => {
    r = {
      ...r,
      ...n?.[a]
    };
  }), r;
}
function Vi(e, t, n, r) {
  const a = r ?? e.today(), o = n ? e.startOfBroadcastWeek(a, e) : t ? e.startOfISOWeek(a) : e.startOfWeek(a), i = [];
  for (let s = 0; s < 7; s++) {
    const l = e.addDays(o, s);
    i.push(l);
  }
  return i;
}
function qi(e, t, n, r, a = !1) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: i, eachYearOfInterval: s, getYear: l } = r, u = o(e), c = i(t), f = s({ start: u, end: c });
  return a && f.reverse(), f.map((m) => {
    const v = n.formatYearDropdown(m, r);
    return {
      value: l(m),
      label: v,
      disabled: !1
    };
  });
}
function Hi(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, a = n ?? r?.options?.weekStartsOn ?? 0, o = (s) => {
    const l = typeof s == "number" || typeof s == "string" ? new Date(s) : s;
    return new ce(l.getFullYear(), l.getMonth(), l.getDate(), 12, 0, 0, e);
  }, i = (s) => {
    const l = o(s);
    return new Date(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => o(ce.tz(e)),
    newDate: (s, l, u) => new ce(s, l, u, 12, 0, 0, e),
    startOfDay: (s) => o(s),
    startOfWeek: (s, l) => {
      const u = o(s), c = l?.weekStartsOn ?? a, f = (u.getDay() - c + 7) % 7;
      return u.setDate(u.getDate() - f), u;
    },
    startOfISOWeek: (s) => {
      const l = o(s), u = (l.getDay() - 1 + 7) % 7;
      return l.setDate(l.getDate() - u), l;
    },
    startOfMonth: (s) => {
      const l = o(s);
      return l.setDate(1), l;
    },
    startOfYear: (s) => {
      const l = o(s);
      return l.setMonth(0, 1), l;
    },
    endOfWeek: (s, l) => {
      const u = o(s), m = (((l?.weekStartsOn ?? a) + 6) % 7 - u.getDay() + 7) % 7;
      return u.setDate(u.getDate() + m), u;
    },
    endOfISOWeek: (s) => {
      const l = o(s), u = (7 - l.getDay()) % 7;
      return l.setDate(l.getDate() + u), l;
    },
    endOfMonth: (s) => {
      const l = o(s);
      return l.setMonth(l.getMonth() + 1, 0), l;
    },
    endOfYear: (s) => {
      const l = o(s);
      return l.setMonth(11, 31), l;
    },
    eachMonthOfInterval: (s) => {
      const l = o(s.start), u = o(s.end), c = [], f = new ce(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), m = u.getFullYear() * 12 + u.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= m; )
        c.push(new ce(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return c;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (s, l) => {
      const u = o(s);
      return u.setDate(u.getDate() + l), u;
    },
    addWeeks: (s, l) => {
      const u = o(s);
      return u.setDate(u.getDate() + l * 7), u;
    },
    addMonths: (s, l) => {
      const u = o(s);
      return u.setMonth(u.getMonth() + l), u;
    },
    addYears: (s, l) => {
      const u = o(s);
      return u.setFullYear(u.getFullYear() + l), u;
    },
    eachYearOfInterval: (s) => {
      const l = o(s.start), u = o(s.end), c = [], f = new ce(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= u.getFullYear(); )
        c.push(new ce(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return c;
    },
    getWeek: (s, l) => {
      const u = i(s);
      return Xt(u, {
        weekStartsOn: l?.weekStartsOn ?? a,
        firstWeekContainsDate: l?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (s) => {
      const l = i(s);
      return Ut(l);
    },
    differenceInCalendarDays: (s, l) => {
      const u = i(s), c = i(l);
      return Kt(u, c);
    },
    differenceInCalendarMonths: (s, l) => {
      const u = i(s), c = i(l);
      return cr(u, c);
    }
  };
}
const ft = (e) => e instanceof HTMLElement ? e : null, Et = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Gi = (e) => ft(e.querySelector("[data-animated-month]")), Ft = (e) => ft(e.querySelector("[data-animated-caption]")), Tt = (e) => ft(e.querySelector("[data-animated-weeks]")), Li = (e) => ft(e.querySelector("[data-animated-nav]")), Ki = (e) => ft(e.querySelector("[data-animated-weekdays]"));
function Ui(e, t, { classNames: n, months: r, focused: a, dateLib: o }) {
  const i = X(null), s = X(r), l = X(!1);
  En(() => {
    const u = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const c = o.isSameMonth(r[0].date, u[0].date), f = o.isAfter(r[0].date, u[0].date), m = f ? n[he.caption_after_enter] : n[he.caption_before_enter], v = f ? n[he.weeks_after_enter] : n[he.weeks_before_enter], h = i.current, w = e.current.cloneNode(!0);
    if (w instanceof HTMLElement ? (Et(w).forEach((x) => {
      if (!(x instanceof HTMLElement))
        return;
      const O = Gi(x);
      O && x.contains(O) && x.removeChild(O);
      const D = Ft(x);
      D && D.classList.remove(m);
      const p = Tt(x);
      p && p.classList.remove(v);
    }), i.current = w) : i.current = null, l.current || c || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    a)
      return;
    const y = h instanceof HTMLElement ? Et(h) : [], N = Et(e.current);
    if (N?.every((b) => b instanceof HTMLElement) && y && y.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = Li(e.current);
      b && (b.style.zIndex = "1"), N.forEach((x, O) => {
        const D = y[O];
        if (!D)
          return;
        x.style.position = "relative", x.style.overflow = "hidden";
        const p = Ft(x);
        p && p.classList.add(m);
        const P = Tt(x);
        P && P.classList.add(v);
        const A = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), p && p.classList.remove(m), P && P.classList.remove(v), x.style.position = "", x.style.overflow = "", x.contains(D) && x.removeChild(D);
        };
        D.style.pointerEvents = "none", D.style.position = "absolute", D.style.overflow = "hidden", D.setAttribute("aria-hidden", "true");
        const G = Ki(D);
        G && (G.style.opacity = "0");
        const B = Ft(D);
        B && (B.classList.add(f ? n[he.caption_before_exit] : n[he.caption_after_exit]), B.addEventListener("animationend", A));
        const j = Tt(D);
        j && j.classList.add(f ? n[he.weeks_before_exit] : n[he.weeks_after_exit]), x.insertBefore(D, x.firstChild);
      });
    }
  });
}
function Xi(e, t, n, r) {
  const a = e[0], o = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: l } = n ?? {}, { addDays: u, differenceInCalendarDays: c, differenceInCalendarMonths: f, endOfBroadcastWeek: m, endOfISOWeek: v, endOfMonth: h, endOfWeek: w, isAfter: y, startOfBroadcastWeek: N, startOfISOWeek: b, startOfWeek: x } = r, O = l ? N(a, r) : i ? b(a) : x(a), D = l ? m(o) : i ? v(h(o)) : w(h(o)), p = t && (l ? m(t) : i ? v(t) : w(t)), P = p && y(D, p) ? p : D, A = c(P, O), G = f(o, a) + 1, B = [];
  for (let Q = 0; Q <= A; Q++) {
    const U = u(O, Q);
    B.push(U);
  }
  const V = (l ? 35 : 42) * G;
  if (s && B.length < V) {
    const Q = V - B.length;
    for (let U = 0; U < Q; U++) {
      const se = u(B[B.length - 1], 1);
      B.push(se);
    }
  }
  return B;
}
function Qi(e) {
  const t = [];
  return e.reduce((n, r) => {
    const a = r.weeks.reduce((o, i) => o.concat(i.days.slice()), t.slice());
    return n.concat(a.slice());
  }, t.slice());
}
function Zi(e, t, n, r) {
  const { numberOfMonths: a = 1 } = n, o = [];
  for (let i = 0; i < a; i++) {
    const s = r.addMonths(e, i);
    if (t && s > t)
      break;
    o.push(s);
  }
  return o;
}
function wn(e, t, n, r) {
  const { month: a, defaultMonth: o, today: i = r.today(), numberOfMonths: s = 1 } = e;
  let l = a || o || i;
  const { differenceInCalendarMonths: u, addMonths: c, startOfMonth: f } = r;
  if (n && u(n, l) < s - 1) {
    const m = -1 * (s - 1);
    l = c(n, m);
  }
  return t && u(l, t) < 0 && (l = t), f(l);
}
function Ji(e, t, n, r) {
  const { addDays: a, endOfBroadcastWeek: o, endOfISOWeek: i, endOfMonth: s, endOfWeek: l, getISOWeek: u, getWeek: c, startOfBroadcastWeek: f, startOfISOWeek: m, startOfWeek: v } = r, h = e.reduce((w, y) => {
    const N = n.broadcastCalendar ? f(y, r) : n.ISOWeek ? m(y) : v(y), b = n.broadcastCalendar ? o(y) : n.ISOWeek ? i(s(y)) : l(s(y)), x = t.filter((P) => P >= N && P <= b), O = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && x.length < O) {
      const P = t.filter((A) => {
        const G = O - x.length;
        return A > b && A <= a(b, G);
      });
      x.push(...P);
    }
    const D = x.reduce((P, A) => {
      const G = n.ISOWeek ? u(A) : c(A), B = P.find((V) => V.weekNumber === G), j = new vr(A, y, r);
      return B ? B.days.push(j) : P.push(new Us(G, [j])), P;
    }, []), p = new Ks(y, D);
    return w.push(p), w;
  }, []);
  return n.reverseMonths ? h.reverse() : h;
}
function el(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: a, startOfDay: o, startOfMonth: i, endOfMonth: s, addYears: l, endOfYear: u, newDate: c, today: f } = t, { fromYear: m, toYear: v, fromMonth: h, toMonth: w } = e;
  !n && h && (n = h), !n && m && (n = t.newDate(m, 0, 1)), !r && w && (r = w), !r && v && (r = c(v, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : m ? n = c(m, 0, 1) : !n && y && (n = a(l(e.today ?? f(), -100))), r ? r = s(r) : v ? r = c(v, 11, 31) : !r && y && (r = u(e.today ?? f())), [
    n && o(n),
    r && o(r)
  ];
}
function tl(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, u = a ? o : 1, c = i(e);
  if (!t)
    return s(c, u);
  if (!(l(t, e) < o))
    return s(c, u);
}
function nl(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, u = a ? o ?? 1 : 1, c = i(e);
  if (!t)
    return s(c, -u);
  if (!(l(c, t) <= 0))
    return s(c, -u);
}
function rl(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Mt(e, t) {
  const [n, r] = re(e);
  return [t === void 0 ? n : t, r];
}
function al(e, t) {
  const [n, r] = el(e, t), { startOfMonth: a, endOfMonth: o } = t, i = wn(e, n, r, t), [s, l] = Mt(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  oe(() => {
    const O = wn(e, n, r, t);
    l(O);
  }, [e.timeZone]);
  const { months: u, weeks: c, days: f, previousMonth: m, nextMonth: v } = le(() => {
    const O = Zi(s, r, { numberOfMonths: e.numberOfMonths }, t), D = Xi(O, e.endMonth ? o(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), p = Ji(O, D, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), P = rl(p), A = Qi(p), G = nl(s, n, e, t), B = tl(s, r, e, t);
    return {
      months: p,
      weeks: P,
      days: A,
      previousMonth: G,
      nextMonth: B
    };
  }, [
    t,
    s.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: h, onMonthChange: w } = e, y = (O) => c.some((D) => D.days.some((p) => p.isEqualTo(O))), N = (O) => {
    if (h)
      return;
    let D = a(O);
    n && D < a(n) && (D = a(n)), r && D > a(r) && (D = a(r)), l(D), w?.(D);
  };
  return {
    months: u,
    weeks: c,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: m,
    nextMonth: v,
    goToMonth: N,
    goToDay: (O) => {
      y(O) || N(O.date);
    }
  };
}
var Me;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Me || (Me = {}));
function kn(e) {
  return !e[Z.disabled] && !e[Z.hidden] && !e[Z.outside];
}
function ol(e, t, n, r) {
  let a, o = -1;
  for (const i of e) {
    const s = t(i);
    kn(s) && (s[Z.focused] && o < Me.FocusedModifier ? (a = i, o = Me.FocusedModifier) : r?.isEqualTo(i) && o < Me.LastFocused ? (a = i, o = Me.LastFocused) : n(i.date) && o < Me.Selected ? (a = i, o = Me.Selected) : s[Z.today] && o < Me.Today && (a = i, o = Me.Today));
  }
  return a || (a = e.find((i) => kn(t(i)))), a;
}
function sl(e, t, n, r, a, o, i) {
  const { ISOWeek: s, broadcastCalendar: l } = o, { addDays: u, addMonths: c, addWeeks: f, addYears: m, endOfBroadcastWeek: v, endOfISOWeek: h, endOfWeek: w, max: y, min: N, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: O } = i;
  let p = {
    day: u,
    week: f,
    month: c,
    year: m,
    startOfWeek: (P) => l ? b(P, i) : s ? x(P) : O(P),
    endOfWeek: (P) => l ? v(P) : s ? h(P) : w(P)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? p = y([r, p]) : t === "after" && a && (p = N([a, p])), p;
}
function jr(e, t, n, r, a, o, i, s = 0) {
  if (s > 365)
    return;
  const l = sl(e, t, n.date, r, a, o, i), u = !!(o.disabled && Se(l, o.disabled, i)), c = !!(o.hidden && Se(l, o.hidden, i)), f = l, m = new vr(l, f, i);
  return !u && !c ? m : jr(e, t, m, r, a, o, i, s + 1);
}
function il(e, t, n, r, a) {
  const { autoFocus: o } = e, [i, s] = re(), l = ol(t.days, n, r || (() => !1), i), [u, c] = re(o ? l : void 0);
  return {
    isFocusTarget: (w) => !!l?.isEqualTo(w),
    setFocused: c,
    focused: u,
    blur: () => {
      s(u), c(void 0);
    },
    moveFocus: (w, y) => {
      if (!u)
        return;
      const N = jr(w, y, u, t.navStart, t.navEnd, e, a);
      N && (e.disableNavigation && !t.days.some((x) => x.isEqualTo(N)) || (t.goToDay(N), c(N)));
    }
  };
}
function ll(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [o, i] = Mt(n, a ? n : void 0), s = a ? n : o, { isSameDay: l } = t, u = (v) => s?.some((h) => l(h, v)) ?? !1, { min: c, max: f } = e;
  return {
    selected: s,
    select: (v, h, w) => {
      let y = [...s ?? []];
      if (u(v)) {
        if (s?.length === c || r && s?.length === 1)
          return;
        y = s?.filter((N) => !l(N, v));
      } else
        s?.length === f ? y = [v] : y = [...y, v];
      return a || i(y), a?.(y, v, h, w), y;
    },
    isSelected: u
  };
}
function cl(e, t, n = 0, r = 0, a = !1, o = Oe) {
  const { from: i, to: s } = t || {}, { isSameDay: l, isAfter: u, isBefore: c } = o;
  let f;
  if (!i && !s)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !s)
    l(i, e) ? n === 0 ? f = { from: i, to: e } : a ? f = { from: i, to: void 0 } : f = void 0 : c(e, i) ? f = { from: e, to: i } : f = { from: i, to: e };
  else if (i && s)
    if (l(i, e) && l(s, e))
      a ? f = { from: i, to: s } : f = void 0;
    else if (l(i, e))
      f = { from: i, to: n > 0 ? void 0 : e };
    else if (l(s, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (c(e, i))
      f = { from: e, to: s };
    else if (u(e, i))
      f = { from: i, to: e };
    else if (u(e, s))
      f = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const m = o.differenceInCalendarDays(f.to, f.from);
    r > 0 && m > r ? f = { from: e, to: void 0 } : n > 1 && m < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function ul(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t];
  let a = e.from;
  const o = n.differenceInCalendarDays(e.to, e.from), i = Math.min(o, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(a.getDay()))
      return !0;
    a = n.addDays(a, 1);
  }
  return !1;
}
function Mn(e, t, n = Oe) {
  return Ne(e, t.from, !1, n) || Ne(e, t.to, !1, n) || Ne(t, e.from, !1, n) || Ne(t, e.to, !1, n);
}
function dl(e, t, n = Oe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? Ne(e, s, !1, n) : xr(s, n) ? s.some((l) => Ne(e, l, !1, n)) : kt(s) ? s.from && s.to ? Mn(e, { from: s.from, to: s.to }, n) : !1 : br(s) ? ul(e, s.dayOfWeek, n) : Qt(s) ? n.isAfter(s.before, s.after) ? Mn(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : Se(e.from, s, n) || Se(e.to, s, n) : Zt(s) || Jt(s) ? Se(e.from, s, n) || Se(e.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let u = 0; u <= l; u++) {
      if (i.some((c) => c(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function fl(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: a, selected: o, required: i, onSelect: s } = e, [l, u] = Mt(o, s ? o : void 0), c = s ? o : l;
  return {
    selected: c,
    select: (v, h, w) => {
      const { min: y, max: N } = e;
      let b;
      if (v) {
        const x = c?.from, O = c?.to, D = !!x && !!O, p = !!x && !!O && t.isSameDay(x, O) && t.isSameDay(v, x);
        a && (D || !c?.from) ? !i && p ? b = void 0 : b = { from: v, to: void 0 } : b = cl(v, c, y, N, i, t);
      }
      return r && n && b?.from && b.to && dl({ from: b.from, to: b.to }, n, t) && (b.from = v, b.to = void 0), s || u(b), s?.(b, v, h, w), b;
    },
    isSelected: (v) => c && Ne(c, v, !1, t)
  };
}
function hl(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [o, i] = Mt(n, a ? n : void 0), s = a ? n : o, { isSameDay: l } = t;
  return {
    selected: s,
    select: (f, m, v) => {
      let h = f;
      return !r && s && s && l(f, s) && (h = void 0), a || i(h), a?.(h, f, m, v), h;
    },
    isSelected: (f) => s ? l(s, f) : !1
  };
}
function ml(e, t) {
  const n = hl(e, t), r = ll(e, t), a = fl(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return a;
    default:
      return;
  }
}
function ge(e, t) {
  return e instanceof ce && e.timeZone === t ? e : new ce(e, t);
}
function Be(e, t, n) {
  return ge(e, t);
}
function Dn(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Be(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Be(r, t) : r) : kt(e) ? {
    ...e,
    from: e.from ? ge(e.from, t) : e.from,
    to: e.to ? ge(e.to, t) : e.to
  } : Qt(e) ? {
    before: Be(e.before, t),
    after: Be(e.after, t)
  } : Zt(e) ? {
    after: Be(e.after, t)
  } : Jt(e) ? {
    before: Be(e.before, t)
  } : e;
}
function Yt(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Dn(r, t)) : Dn(e, t));
}
function pl(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = ge(t.today, n)), t.month && (t.month = ge(t.month, n)), t.defaultMonth && (t.defaultMonth = ge(t.defaultMonth, n)), t.startMonth && (t.startMonth = ge(t.startMonth, n)), t.endMonth && (t.endMonth = ge(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = ge(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((I) => ge(I, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? ge(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? ge(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Yt(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Yt(t.hidden, n)), t.modifiers)) {
    const I = {};
    Object.keys(t.modifiers).forEach((H) => {
      I[H] = Yt(t.modifiers?.[H], n);
    }), t.modifiers = I;
  }
  const { components: r, formatters: a, labels: o, dateLib: i, locale: s, classNames: l } = le(() => {
    const I = { ...gr, ...t.locale }, H = t.broadcastCalendar ? 1 : t.weekStartsOn, F = t.noonSafe && t.timeZone ? Hi(t.timeZone, {
      weekStartsOn: H,
      locale: I
    }) : void 0, q = t.dateLib && F ? { ...F, ...t.dateLib } : t.dateLib ?? F, fe = new me({
      locale: I,
      weekStartsOn: H,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, q);
    return {
      dateLib: fe,
      components: Oi(t.components),
      formatters: Ti(t.formatters),
      labels: Bi(t.labels, fe.options),
      locale: I,
      classNames: { ...en(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: i.today() });
  const { captionLayout: u, mode: c, navLayout: f, numberOfMonths: m = 1, onDayBlur: v, onDayClick: h, onDayFocus: w, onDayKeyDown: y, onDayMouseEnter: N, onDayMouseLeave: b, onNextClick: x, onPrevClick: O, showWeekNumber: D, styles: p } = t, { formatCaption: P, formatDay: A, formatMonthDropdown: G, formatWeekNumber: B, formatWeekNumberHeader: j, formatWeekdayName: V, formatYearDropdown: Q } = a, U = al(t, i), { days: se, months: pe, navStart: ue, navEnd: ye, previousMonth: J, nextMonth: ie, goToMonth: de } = U, g = Mi(se, t, ue, ye, i), { isSelected: E, select: z, selected: W } = ml(t, i) ?? {}, { blur: M, focused: k, isFocusTarget: T, moveFocus: Y, setFocused: R } = il(t, U, g, E ?? (() => !1), i), { labelDayButton: we, labelGridcell: St, labelGrid: Zr, labelMonthDropdown: Jr, labelNav: ln, labelPrevious: ea, labelNext: ta, labelWeekday: na, labelWeekNumber: ra, labelWeekNumberHeader: aa, labelYearDropdown: oa } = o, sa = le(() => Vi(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), cn = c !== void 0 || h !== void 0, Ct = te(() => {
    J && (de(J), O?.(J));
  }, [J, de, O]), Wt = te(() => {
    ie && (de(ie), x?.(ie));
  }, [de, ie, x]), ia = te((I, H) => (F) => {
    F.preventDefault(), F.stopPropagation(), R(I), !H.disabled && (z?.(I.date, H, F), h?.(I.date, H, F));
  }, [z, h, R]), la = te((I, H) => (F) => {
    R(I), w?.(I.date, H, F);
  }, [w, R]), ca = te((I, H) => (F) => {
    M(), v?.(I.date, H, F);
  }, [M, v]), ua = te((I, H) => (F) => {
    const q = {
      ArrowLeft: [
        F.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        F.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [F.shiftKey ? "year" : "week", "after"],
      ArrowUp: [F.shiftKey ? "year" : "week", "before"],
      PageUp: [F.shiftKey ? "year" : "month", "before"],
      PageDown: [F.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (q[F.key]) {
      F.preventDefault(), F.stopPropagation();
      const [fe, $] = q[F.key];
      Y(fe, $);
    }
    y?.(I.date, H, F);
  }, [Y, y, t.dir]), da = te((I, H) => (F) => {
    N?.(I.date, H, F);
  }, [N]), fa = te((I, H) => (F) => {
    b?.(I.date, H, F);
  }, [b]), ha = te((I) => (H) => {
    const F = Number(H.target.value), q = i.setMonth(i.startOfMonth(I), F);
    de(q);
  }, [i, de]), ma = te((I) => (H) => {
    const F = Number(H.target.value), q = i.setYear(i.startOfMonth(I), F);
    de(q);
  }, [i, de]), { className: pa, style: ga } = le(() => ({
    className: [l[_.Root], t.className].filter(Boolean).join(" "),
    style: { ...p?.[_.Root], ...t.style }
  }), [l, t.className, t.style, p]), va = Ni(t), un = X(null);
  Ui(un, !!t.animate, {
    classNames: l,
    months: pe,
    focused: k,
    dateLib: i
  });
  const ya = {
    dayPickerProps: t,
    selected: W,
    select: z,
    isSelected: E,
    months: pe,
    nextMonth: ie,
    previousMonth: J,
    goToMonth: de,
    getModifiers: g,
    components: r,
    classNames: l,
    styles: p,
    labels: o,
    formatters: a
  };
  return S.createElement(
    yr.Provider,
    { value: ya },
    S.createElement(
      r.Root,
      { rootRef: t.animate ? un : void 0, className: pa, style: ga, dir: t.dir, id: t.id, lang: t.lang ?? s.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...va },
      S.createElement(
        r.Months,
        { className: l[_.Months], style: p?.[_.Months] },
        !t.hideNavigation && !f && S.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[_.Nav], style: p?.[_.Nav], "aria-label": ln(), onPreviousClick: Ct, onNextClick: Wt, previousMonth: J, nextMonth: ie }),
        pe.map((I, H) => S.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[_.Month],
            style: p?.[_.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: H,
            displayIndex: H,
            calendarMonth: I
          },
          f === "around" && !t.hideNavigation && H === 0 && S.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[_.PreviousMonthButton], tabIndex: J ? void 0 : -1, "aria-disabled": J ? void 0 : !0, "aria-label": ea(J), onClick: Ct, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(r.Chevron, { disabled: J ? void 0 : !0, className: l[_.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[_.MonthCaption], style: p?.[_.MonthCaption], calendarMonth: I, displayIndex: H }, u?.startsWith("dropdown") ? S.createElement(
            r.DropdownNav,
            { className: l[_.Dropdowns], style: p?.[_.Dropdowns] },
            (() => {
              const F = u === "dropdown" || u === "dropdown-months" ? S.createElement(r.MonthsDropdown, { key: "month", className: l[_.MonthsDropdown], "aria-label": Jr(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: ha(I.date), options: Ri(I.date, ue, ye, a, i), style: p?.[_.Dropdown], value: i.getMonth(I.date) }) : S.createElement("span", { key: "month" }, G(I.date, i)), q = u === "dropdown" || u === "dropdown-years" ? S.createElement(r.YearsDropdown, { key: "year", className: l[_.YearsDropdown], "aria-label": oa(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: ma(I.date), options: qi(ue, ye, a, i, !!t.reverseYears), style: p?.[_.Dropdown], value: i.getYear(I.date) }) : S.createElement("span", { key: "year" }, Q(I.date, i));
              return i.getMonthYearOrder() === "year-first" ? [q, F] : [F, q];
            })(),
            S.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, P(I.date, i.options, i))
          ) : S.createElement(r.CaptionLabel, { className: l[_.CaptionLabel], role: "status", "aria-live": "polite" }, P(I.date, i.options, i))),
          f === "around" && !t.hideNavigation && H === m - 1 && S.createElement(
            r.NextMonthButton,
            { type: "button", className: l[_.NextMonthButton], tabIndex: ie ? void 0 : -1, "aria-disabled": ie ? void 0 : !0, "aria-label": ta(ie), onClick: Wt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(r.Chevron, { disabled: ie ? void 0 : !0, className: l[_.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          H === m - 1 && f === "after" && !t.hideNavigation && S.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[_.Nav], style: p?.[_.Nav], "aria-label": ln(), onPreviousClick: Ct, onNextClick: Wt, previousMonth: J, nextMonth: ie }),
          S.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": Zr(I.date, i.options, i) || void 0, className: l[_.MonthGrid], style: p?.[_.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[_.Weekdays], style: p?.[_.Weekdays] },
              D && S.createElement(r.WeekNumberHeader, { "aria-label": aa(i.options), className: l[_.WeekNumberHeader], style: p?.[_.WeekNumberHeader], scope: "col" }, j()),
              sa.map((F) => S.createElement(r.Weekday, { "aria-label": na(F, i.options, i), className: l[_.Weekday], key: String(F), style: p?.[_.Weekday], scope: "col" }, V(F, i.options, i)))
            ),
            S.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[_.Weeks], style: p?.[_.Weeks] }, I.weeks.map((F) => S.createElement(
              r.Week,
              { className: l[_.Week], key: F.weekNumber, style: p?.[_.Week], week: F },
              D && S.createElement(r.WeekNumber, { week: F, style: p?.[_.WeekNumber], "aria-label": ra(F.weekNumber, {
                locale: s
              }), className: l[_.WeekNumber], scope: "row", role: "rowheader" }, B(F.weekNumber, i)),
              F.days.map((q) => {
                const { date: fe } = q, $ = g(q);
                if ($[Z.focused] = !$.hidden && !!k?.isEqualTo(q), $[xe.selected] = E?.(fe) || $.selected, kt(W)) {
                  const { from: _t, to: Pt } = W;
                  $[xe.range_start] = !!(_t && Pt && i.isSameDay(fe, _t)), $[xe.range_end] = !!(_t && Pt && i.isSameDay(fe, Pt)), $[xe.range_middle] = Ne(W, fe, !0, i);
                }
                const ba = $i($, p, t.modifiersStyles), xa = Di($, l, t.modifiersClassNames), wa = !cn && !$.hidden ? St(fe, $, i.options, i) : void 0;
                return S.createElement(r.Day, { key: `${q.isoDate}_${q.displayMonthId}`, day: q, modifiers: $, className: xa.join(" "), style: ba, role: "gridcell", "aria-selected": $.selected || void 0, "aria-label": wa, "data-day": q.isoDate, "data-month": q.outside ? q.dateMonthId : void 0, "data-selected": $.selected || void 0, "data-disabled": $.disabled || void 0, "data-hidden": $.hidden || void 0, "data-outside": q.outside || void 0, "data-focused": $.focused || void 0, "data-today": $.today || void 0 }, !$.hidden && cn ? S.createElement(r.DayButton, { className: l[_.DayButton], style: p?.[_.DayButton], type: "button", day: q, modifiers: $, disabled: !$.focused && $.disabled || void 0, "aria-disabled": $.focused && $.disabled || void 0, tabIndex: T(q) ? 0 : -1, "aria-label": we(fe, $, i.options, i), onClick: ia(q, $), onBlur: ca(q, $), onFocus: la(q, $), onKeyDown: ua(q, $), onMouseEnter: da(q, $), onMouseLeave: fa(q, $) }, A(fe, i.options, i)) : !$.hidden && A(q.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && S.createElement(r.Footer, { className: l[_.Footer], style: p?.[_.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Er({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: a = "ghost",
  formatters: o,
  components: i,
  ...s
}) {
  const l = en();
  return /* @__PURE__ */ d.jsx(
    pl,
    {
      captionLayout: r,
      className: C(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      classNames: {
        root: C("w-fit", l.root),
        months: C(
          "flex gap-4 flex-col md:flex-row relative",
          l.months
        ),
        month: C("flex flex-col w-full gap-4", l.month),
        nav: C(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          l.nav
        ),
        button_previous: C(
          dn({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_previous
        ),
        button_next: C(
          dn({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_next
        ),
        month_caption: C(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: C(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          l.dropdowns
        ),
        dropdown_root: C(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          l.dropdown_root
        ),
        dropdown: C("absolute bg-popover inset-0 opacity-0", l.dropdown),
        caption_label: C(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          l.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: C("flex", l.weekdays),
        weekday: C(
          "text-muted-foreground rounded-md w-(--cell-size) font-normal text-sm select-none",
          l.weekday
        ),
        week: C("flex w-full mt-2", l.week),
        week_number_header: C(
          "select-none w-(--cell-size)",
          l.week_number_header
        ),
        week_number: C(
          "text-[0.8rem] select-none text-muted-foreground",
          l.week_number
        ),
        day: C(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          l.day
        ),
        range_start: C("rounded-l-md bg-accent", l.range_start),
        range_middle: C("rounded-none", l.range_middle),
        range_end: C("rounded-r-md bg-accent", l.range_end),
        today: C(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          l.today
        ),
        outside: C(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: C(
          "text-muted-foreground opacity-50",
          l.disabled
        ),
        hidden: C("invisible", l.hidden),
        ...t
      },
      components: {
        Root: ({ className: u, rootRef: c, ...f }) => /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: c,
            className: C(u),
            "data-slot": "calendar",
            ...f
          }
        ),
        Chevron: ({ className: u, orientation: c, ...f }) => c === "left" ? /* @__PURE__ */ d.jsx(Ca, { className: C("size-4", u), ...f }) : c === "right" ? /* @__PURE__ */ d.jsx(Ba, { className: C("size-4", u), ...f }) : /* @__PURE__ */ d.jsx(Na, { className: C("size-4", u), ...f }),
        DayButton: Fr,
        WeekNumber: ({ children: u, ...c }) => /* @__PURE__ */ d.jsx("td", { ...c, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: u }) }),
        ...i
      },
      formatters: {
        formatMonthDropdown: (u) => u.toLocaleString("default", { month: "short" }),
        ...o
      },
      showOutsideDays: n,
      ...s
    }
  );
}
Er.displayName = "Calendar";
function Fr({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const a = en(), o = X(null);
  return oe(() => {
    var i;
    n.focused && ((i = o.current) == null || i.focus());
  }, [n.focused]), /* @__PURE__ */ d.jsx(
    Sa,
    {
      ref: o,
      className: C(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-auto items-center justify-center gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      "data-day": t.date.toLocaleDateString(),
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      "data-range-start": n.range_start,
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      size: "icon",
      variant: "ghost",
      ...r
    }
  );
}
Fr.displayName = "CalendarDayButton";
var On = 1, gl = 0.9, vl = 0.8, yl = 0.17, It = 0.1, zt = 0.999, bl = 0.9999, xl = 0.99, wl = /[\\\/_+.#"@\[\(\{&]/, kl = /[\\\/_+.#"@\[\(\{&]/g, Ml = /[\s-]/, Tr = /[\s-]/g;
function qt(e, t, n, r, a, o, i) {
  if (o === t.length) return a === e.length ? On : xl;
  var s = `${a},${o}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(o), u = n.indexOf(l, a), c = 0, f, m, v, h; u >= 0; ) f = qt(e, t, n, r, u + 1, o + 1, i), f > c && (u === a ? f *= On : wl.test(e.charAt(u - 1)) ? (f *= vl, v = e.slice(a, u - 1).match(kl), v && a > 0 && (f *= Math.pow(zt, v.length))) : Ml.test(e.charAt(u - 1)) ? (f *= gl, h = e.slice(a, u - 1).match(Tr), h && a > 0 && (f *= Math.pow(zt, h.length))) : (f *= yl, a > 0 && (f *= Math.pow(zt, u - a))), e.charAt(u) !== t.charAt(o) && (f *= bl)), (f < It && n.charAt(u - 1) === r.charAt(o + 1) || r.charAt(o + 1) === r.charAt(o) && n.charAt(u - 1) !== r.charAt(o)) && (m = qt(e, t, n, r, u + 1, o + 2, i), m * It > f && (f = m * It)), f > c && (c = f), u = n.indexOf(l, u + 1);
  return i[s] = c, c;
}
function Nn(e) {
  return e.toLowerCase().replace(Tr, " ");
}
function Dl(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, qt(e, t, Nn(e), Nn(t), 0, 0, {});
}
var Je = '[cmdk-group=""]', At = '[cmdk-group-items=""]', Ol = '[cmdk-group-heading=""]', Yr = '[cmdk-item=""]', Sn = `${Yr}:not([aria-disabled="true"])`, Ht = "cmdk-item-select", $e = "data-value", Nl = (e, t, n) => Dl(e, t, n), Ir = it(void 0), ht = () => lt(Ir), zr = it(void 0), rn = () => lt(zr), Ar = it(void 0), Br = ee((e, t) => {
  let n = Ve(() => {
    var g, E;
    return { search: "", value: (E = (g = e.value) != null ? g : e.defaultValue) != null ? E : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Ve(() => /* @__PURE__ */ new Set()), a = Ve(() => /* @__PURE__ */ new Map()), o = Ve(() => /* @__PURE__ */ new Map()), i = Ve(() => /* @__PURE__ */ new Set()), s = Rr(e), { label: l, children: u, value: c, onValueChange: f, filter: m, shouldFilter: v, loop: h, disablePointerSelection: w = !1, vimBindings: y = !0, ...N } = e, b = Te(), x = Te(), O = Te(), D = X(null), p = Il();
  Ie(() => {
    if (c !== void 0) {
      let g = c.trim();
      n.current.value = g, P.emit();
    }
  }, [c]), Ie(() => {
    p(6, Q);
  }, []);
  let P = le(() => ({ subscribe: (g) => (i.current.add(g), () => i.current.delete(g)), snapshot: () => n.current, setState: (g, E, z) => {
    var W, M, k, T;
    if (!Object.is(n.current[g], E)) {
      if (n.current[g] = E, g === "search") V(), B(), p(1, j);
      else if (g === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Y = document.getElementById(O);
          Y ? Y.focus() : (W = document.getElementById(b)) == null || W.focus();
        }
        if (p(7, () => {
          var Y;
          n.current.selectedItemId = (Y = U()) == null ? void 0 : Y.id, P.emit();
        }), z || p(5, Q), ((M = s.current) == null ? void 0 : M.value) !== void 0) {
          let Y = E ?? "";
          (T = (k = s.current).onValueChange) == null || T.call(k, Y);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    i.current.forEach((g) => g());
  } }), []), A = le(() => ({ value: (g, E, z) => {
    var W;
    E !== ((W = o.current.get(g)) == null ? void 0 : W.value) && (o.current.set(g, { value: E, keywords: z }), n.current.filtered.items.set(g, G(E, z)), p(2, () => {
      B(), P.emit();
    }));
  }, item: (g, E) => (r.current.add(g), E && (a.current.has(E) ? a.current.get(E).add(g) : a.current.set(E, /* @__PURE__ */ new Set([g]))), p(3, () => {
    V(), B(), n.current.value || j(), P.emit();
  }), () => {
    o.current.delete(g), r.current.delete(g), n.current.filtered.items.delete(g);
    let z = U();
    p(4, () => {
      V(), z?.getAttribute("id") === g && j(), P.emit();
    });
  }), group: (g) => (a.current.has(g) || a.current.set(g, /* @__PURE__ */ new Set()), () => {
    o.current.delete(g), a.current.delete(g);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: b, inputId: O, labelId: x, listInnerRef: D }), []);
  function G(g, E) {
    var z, W;
    let M = (W = (z = s.current) == null ? void 0 : z.filter) != null ? W : Nl;
    return g ? M(g, n.current.search, E) : 0;
  }
  function B() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let g = n.current.filtered.items, E = [];
    n.current.filtered.groups.forEach((W) => {
      let M = a.current.get(W), k = 0;
      M.forEach((T) => {
        let Y = g.get(T);
        k = Math.max(Y, k);
      }), E.push([W, k]);
    });
    let z = D.current;
    se().sort((W, M) => {
      var k, T;
      let Y = W.getAttribute("id"), R = M.getAttribute("id");
      return ((k = g.get(R)) != null ? k : 0) - ((T = g.get(Y)) != null ? T : 0);
    }).forEach((W) => {
      let M = W.closest(At);
      M ? M.appendChild(W.parentElement === M ? W : W.closest(`${At} > *`)) : z.appendChild(W.parentElement === z ? W : W.closest(`${At} > *`));
    }), E.sort((W, M) => M[1] - W[1]).forEach((W) => {
      var M;
      let k = (M = D.current) == null ? void 0 : M.querySelector(`${Je}[${$e}="${encodeURIComponent(W[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function j() {
    let g = se().find((z) => z.getAttribute("aria-disabled") !== "true"), E = g?.getAttribute($e);
    P.setState("value", E || void 0);
  }
  function V() {
    var g, E, z, W;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let M = 0;
    for (let k of r.current) {
      let T = (E = (g = o.current.get(k)) == null ? void 0 : g.value) != null ? E : "", Y = (W = (z = o.current.get(k)) == null ? void 0 : z.keywords) != null ? W : [], R = G(T, Y);
      n.current.filtered.items.set(k, R), R > 0 && M++;
    }
    for (let [k, T] of a.current) for (let Y of T) if (n.current.filtered.items.get(Y) > 0) {
      n.current.filtered.groups.add(k);
      break;
    }
    n.current.filtered.count = M;
  }
  function Q() {
    var g, E, z;
    let W = U();
    W && (((g = W.parentElement) == null ? void 0 : g.firstChild) === W && ((z = (E = W.closest(Je)) == null ? void 0 : E.querySelector(Ol)) == null || z.scrollIntoView({ block: "nearest" })), W.scrollIntoView({ block: "nearest" }));
  }
  function U() {
    var g;
    return (g = D.current) == null ? void 0 : g.querySelector(`${Yr}[aria-selected="true"]`);
  }
  function se() {
    var g;
    return Array.from(((g = D.current) == null ? void 0 : g.querySelectorAll(Sn)) || []);
  }
  function pe(g) {
    let E = se()[g];
    E && P.setState("value", E.getAttribute($e));
  }
  function ue(g) {
    var E;
    let z = U(), W = se(), M = W.findIndex((T) => T === z), k = W[M + g];
    (E = s.current) != null && E.loop && (k = M + g < 0 ? W[W.length - 1] : M + g === W.length ? W[0] : W[M + g]), k && P.setState("value", k.getAttribute($e));
  }
  function ye(g) {
    let E = U(), z = E?.closest(Je), W;
    for (; z && !W; ) z = g > 0 ? Tl(z, Je) : Yl(z, Je), W = z?.querySelector(Sn);
    W ? P.setState("value", W.getAttribute($e)) : ue(g);
  }
  let J = () => pe(se().length - 1), ie = (g) => {
    g.preventDefault(), g.metaKey ? J() : g.altKey ? ye(1) : ue(1);
  }, de = (g) => {
    g.preventDefault(), g.metaKey ? pe(0) : g.altKey ? ye(-1) : ue(-1);
  };
  return ne(_e.div, { ref: t, tabIndex: -1, ...N, "cmdk-root": "", onKeyDown: (g) => {
    var E;
    (E = N.onKeyDown) == null || E.call(N, g);
    let z = g.nativeEvent.isComposing || g.keyCode === 229;
    if (!(g.defaultPrevented || z)) switch (g.key) {
      case "n":
      case "j": {
        y && g.ctrlKey && ie(g);
        break;
      }
      case "ArrowDown": {
        ie(g);
        break;
      }
      case "p":
      case "k": {
        y && g.ctrlKey && de(g);
        break;
      }
      case "ArrowUp": {
        de(g);
        break;
      }
      case "Home": {
        g.preventDefault(), pe(0);
        break;
      }
      case "End": {
        g.preventDefault(), J();
        break;
      }
      case "Enter": {
        g.preventDefault();
        let W = U();
        if (W) {
          let M = new Event(Ht);
          W.dispatchEvent(M);
        }
      }
    }
  } }, ne("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: Al }, l), Dt(e, (g) => ne(zr.Provider, { value: P }, ne(Ir.Provider, { value: A }, g))));
}), Sl = ee((e, t) => {
  var n, r;
  let a = Te(), o = X(null), i = lt(Ar), s = ht(), l = Rr(e), u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i?.forceMount;
  Ie(() => {
    if (!u) return s.item(a, i?.id);
  }, [u]);
  let c = $r(a, o, [e.value, e.children, o], e.keywords), f = rn(), m = We((p) => p.value && p.value === c.current), v = We((p) => u || s.filter() === !1 ? !0 : p.search ? p.filtered.items.get(a) > 0 : !0);
  oe(() => {
    let p = o.current;
    if (!(!p || e.disabled)) return p.addEventListener(Ht, h), () => p.removeEventListener(Ht, h);
  }, [v, e.onSelect, e.disabled]);
  function h() {
    var p, P;
    w(), (P = (p = l.current).onSelect) == null || P.call(p, c.current);
  }
  function w() {
    f.setState("value", c.current, !0);
  }
  if (!v) return null;
  let { disabled: y, value: N, onSelect: b, forceMount: x, keywords: O, ...D } = e;
  return ne(_e.div, { ref: rt(o, t), ...D, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!m, "data-disabled": !!y, "data-selected": !!m, onPointerMove: y || s.getDisablePointerSelection() ? void 0 : w, onClick: y ? void 0 : h }, e.children);
}), Cl = ee((e, t) => {
  let { heading: n, children: r, forceMount: a, ...o } = e, i = Te(), s = X(null), l = X(null), u = Te(), c = ht(), f = We((v) => a || c.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  Ie(() => c.group(i), []), $r(i, s, [e.value, e.heading, l]);
  let m = le(() => ({ id: i, forceMount: a }), [a]);
  return ne(_e.div, { ref: rt(s, t), ...o, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && ne("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), Dt(e, (v) => ne("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, ne(Ar.Provider, { value: m }, v))));
}), Wl = ee((e, t) => {
  let { alwaysRender: n, ...r } = e, a = X(null), o = We((i) => !i.search);
  return !n && !o ? null : ne(_e.div, { ref: rt(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), _l = ee((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, o = rn(), i = We((u) => u.search), s = We((u) => u.selectedItemId), l = ht();
  return oe(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), ne(_e.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: a ? e.value : i, onChange: (u) => {
    a || o.setState("search", u.target.value), n?.(u.target.value);
  } });
}), Pl = ee((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, o = X(null), i = X(null), s = We((u) => u.selectedItemId), l = ht();
  return oe(() => {
    if (i.current && o.current) {
      let u = i.current, c = o.current, f, m = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let v = u.offsetHeight;
          c.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return m.observe(u), () => {
        cancelAnimationFrame(f), m.unobserve(u);
      };
    }
  }, []), ne(_e.div, { ref: rt(o, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, Dt(e, (u) => ne("div", { ref: rt(i, l.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), jl = ee((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: o, container: i, ...s } = e;
  return ne(Ha, { open: n, onOpenChange: r }, ne(Ga, { container: i }, ne(La, { "cmdk-overlay": "", className: a }), ne(Ka, { "aria-label": e.label, "cmdk-dialog": "", className: o }, ne(Br, { ref: t, ...s }))));
}), El = ee((e, t) => We((n) => n.filtered.count === 0) ? ne(_e.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Fl = ee((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...o } = e;
  return ne(_e.div, { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, Dt(e, (i) => ne("div", { "aria-hidden": !0 }, i)));
}), ze = Object.assign(Br, { List: Pl, Item: Sl, Input: _l, Group: Cl, Separator: Wl, Dialog: jl, Empty: El, Loading: Fl });
function Tl(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function Yl(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Rr(e) {
  let t = X(e);
  return Ie(() => {
    t.current = e;
  }), t;
}
var Ie = typeof window > "u" ? oe : En;
function Ve(e) {
  let t = X();
  return t.current === void 0 && (t.current = e()), t;
}
function We(e) {
  let t = rn(), n = () => e(t.snapshot());
  return Da(t.subscribe, n, n);
}
function $r(e, t, n, r = []) {
  let a = X(), o = ht();
  return Ie(() => {
    var i;
    let s = (() => {
      var u;
      for (let c of n) {
        if (typeof c == "string") return c.trim();
        if (typeof c == "object" && "current" in c) return c.current ? (u = c.current.textContent) == null ? void 0 : u.trim() : a.current;
      }
    })(), l = r.map((u) => u.trim());
    o.value(e, s, l), (i = t.current) == null || i.setAttribute($e, s), a.current = s;
  }), a;
}
var Il = () => {
  let [e, t] = re(), n = Ve(() => /* @__PURE__ */ new Map());
  return Ie(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function zl(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Dt({ asChild: e, children: t }, n) {
  return e && ka(t) ? Ma(zl(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Al = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function gt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    ze,
    {
      className: C(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function an({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", "data-slot": "command-input", children: [
    /* @__PURE__ */ d.jsx(Wa, { className: "me-2 size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ d.jsx(
      ze.Input,
      {
        className: C(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t
      }
    )
  ] });
}
function on({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    ze.List,
    {
      className: C("max-h-[300px] p-1 overflow-y-auto overflow-x-hidden", e),
      "data-slot": "command-list",
      ...t
    }
  );
}
function sn({ ...e }) {
  return /* @__PURE__ */ d.jsx(ze.Empty, { className: "py-6 text-center text-sm", "data-slot": "command-empty", ...e });
}
function Ue({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    ze.Group,
    {
      className: C(
        "overflow-hidden p-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      "data-slot": "command-group",
      ...t
    }
  );
}
function Ge({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    ze.Separator,
    {
      className: C("-mx-1.5 h-px bg-border", e),
      "data-slot": "command-separator",
      ...t
    }
  );
}
function Ye({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    ze.Item,
    {
      className: C(
        "relative flex text-foreground cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
        e
      ),
      "data-slot": "command-item",
      ...t
    }
  );
}
const Ot = ({
  open: e,
  defaultOpen: t,
  onOpenChange: n,
  children: r,
  ...a
}) => {
  const o = e !== void 0, [i, s] = re(t ?? !1), l = o ? e : i, u = te((f) => {
    o || s(f), n?.(f);
  }, [o, n]), c = X(u);
  return oe(() => {
    c.current = u;
  }, [u]), oe(() => {
    if (!l)
      return;
    const f = (m) => {
      m.key === "Escape" && (m.preventDefault(), m.stopPropagation(), c.current(!1));
    };
    return document.addEventListener("keydown", f, { capture: !0 }), () => document.removeEventListener("keydown", f, { capture: !0 });
  }, [l]), /* @__PURE__ */ d.jsx(
    bo,
    {
      ...a,
      open: l,
      onOpenChange: u,
      children: r
    }
  );
}, Nt = xo, mt = ee(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, a) => /* @__PURE__ */ d.jsx(wo, { children: /* @__PURE__ */ d.jsx("div", { className: Oa, children: /* @__PURE__ */ d.jsx(
  nr,
  {
    ref: a,
    align: t,
    className: C(
      "z-50 rounded-md bg-surface-overlay p-5 text-popover-foreground shadow-md border outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      e
    ),
    sideOffset: n,
    ...r
  }
) }) }));
mt.displayName = nr.displayName;
const Bl = ve(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        default: "h-5 w-9",
        sm: "h-4 w-7"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Rl = ve(
  "pointer-events-none block rounded-full bg-background ring-0 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-4 data-[state=checked]:translate-x-4",
        sm: "size-3 data-[state=checked]:translate-x-3"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Vr = ee(({ className: e, size: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Hn,
  {
    className: C(Bl({ size: t, className: e })),
    ...n,
    ref: r,
    children: /* @__PURE__ */ d.jsx(
      io,
      {
        className: C(Rl({ size: t }))
      }
    )
  }
));
Vr.displayName = Hn.displayName;
const qe = {
  // UI Labels
  addFilter: "",
  clearFilters: "Clear",
  searchFields: "Search fields...",
  noFieldsFound: "No fields found.",
  noResultsFound: "No results found.",
  loading: "Loading...",
  loadMore: "Load more",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "currentColor",
  addFilterTitle: "",
  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty"
  },
  // Placeholders
  placeholders: {
    enterField: (e) => `Enter ${e}...`,
    selectField: "Select...",
    searchField: (e) => `Search ${e.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value..."
  },
  // Helper functions
  helpers: {
    formatOperator: (e) => e.replace(/_/g, " ")
  },
  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format"
  }
}, qr = it({
  variant: "outline",
  size: "md",
  radius: "md",
  i18n: qe,
  cursorPointer: !0,
  className: void 0,
  showAddButton: !0,
  addButtonText: void 0,
  addButtonIcon: void 0,
  addButtonClassName: void 0,
  addButton: void 0,
  showSearchInput: !0,
  trigger: void 0,
  allowMultiple: !0
}), je = () => lt(qr), Gt = 200, Hr = ve(
  [
    "relative flex shrink-0 items-center text-foreground outline-hidden transition",
    "has-[[data-slot=filters-input]:focus-visible]:ring-focus-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-focus-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "border-0 bg-secondary",
        outline: "border border-border bg-background"
      },
      size: {
        lg: "h-10 px-2.5 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        md: "h-(--control-height) px-2 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        sm: "h-8 px-2 text-xs has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), $l = ve(
  [
    "inline-flex shrink-0 items-center justify-center text-muted-foreground transition hover:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-s-0 border-border hover:bg-secondary"
      },
      size: {
        lg: "size-10 [&_svg:not([class*=size-])]:size-4",
        md: "size-(--control-height) [&_svg:not([class*=size-])]:size-3.5",
        sm: "size-8 [&_svg:not([class*=size-])]:size-3"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      },
      radius: {
        md: "rounded-e-md",
        full: "rounded-e-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "md",
      cursorPointer: !0
    }
  }
), Cn = ve(
  [
    "inline-flex shrink-0 items-center justify-center text-foreground transition",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "border border-input hover:bg-secondary/60",
        outline: "border border-border hover:bg-accent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-1.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), Vl = ve(
  [
    "relative flex shrink-0 items-center whitespace-nowrap text-muted-foreground transition hover:text-foreground focus-visible:z-1 data-[state=open]:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border bg-background hover:bg-secondary data-[state=open]:bg-secondary [&+[data-slot=filters-remove]]:border-s"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm",
        md: "h-(--control-height) gap-0.5 px-3 text-sm",
        sm: "h-8 gap-1 px-2.5 text-xs"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), ql = ve(
  [
    "flex shrink-0 items-center gap-1.5 px-1.5 py-1 text-foreground",
    "[&_svg:not([class*=size-])]:size-4"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-s-md",
        full: "rounded-s-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md"
    }
  }
), nt = ve(
  [
    "relative flex min-w-0 shrink items-center gap-1 text-foreground transition focus-visible:z-1",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-border bg-background hover:bg-secondary has-[[data-slot=switch]]:hover:bg-transparent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      cursorPointer: {
        true: "cursor-pointer has-[[data-slot=switch]]:cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), vt = ve("flex shrink-0 items-center justify-center text-foreground", {
  variants: {
    variant: {
      solid: "",
      outline: ""
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), pt = ve("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    variant: {
      solid: "bg-secondary",
      outline: "border border-x-0 border-border bg-background"
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), Hl = ve("relative flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      outline: ""
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2.5",
      lg: "gap-3.5"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), Gl = ve("flex max-w-[calc(100vw-32px)] items-center", {
  variants: {
    variant: {
      solid: "gap-px",
      outline: ""
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
function ke({
  field: e,
  onChange: t,
  onBlur: n,
  onKeyDown: r,
  onInputChange: a,
  className: o,
  ...i
}) {
  const s = je(), [l, u] = re(!0), [c, f] = re(""), m = (N, b) => !b || !N ? !0 : new RegExp(b).test(N), v = (N, b = !1) => {
    if ((N === "text" || N === "number") && b)
      return s.i18n.validation.invalid;
    switch (N) {
      case "email":
        return s.i18n.validation.invalidEmail;
      case "url":
        return s.i18n.validation.invalidUrl;
      case "tel":
        return s.i18n.validation.invalidTel;
      default:
        return s.i18n.validation.invalid;
    }
  }, h = (N) => {
    t?.(N);
  }, w = (N) => {
    const b = N.target.value, x = e?.pattern || i.pattern;
    if (b && x) {
      let O = !0;
      e?.validation ? O = e.validation(b) : O = m(b, x), u(O);
      const D = !!(e?.pattern || i.pattern);
      f(O ? "" : v(e?.type || "", D));
    } else
      u(!0), f("");
    a && a(N), n?.(N);
  }, y = (N) => {
    if (!l && !["Tab", "Escape", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(N.key) && (u(!0), f("")), N.key === "Enter" && a) {
      const b = {
        ...N,
        target: N.target,
        currentTarget: N.currentTarget
      };
      a(b);
    }
    r?.(N);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: C("w-36", Hr({ variant: s.variant, size: s.size }), o),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: vt({ variant: s.variant, size: s.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "flex w-full items-stretch", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              "aria-describedby": !l && c ? `${e?.key || "input"}-error` : void 0,
              "aria-invalid": !l,
              autoComplete: "off",
              className: "w-full bg-transparent outline-hidden dark:!bg-transparent",
              "data-form-type": "other",
              "data-lpignore": "true",
              "data-slot": "filters-input",
              "data-1p-ignore": !0,
              onBlur: w,
              onChange: h,
              onKeyDown: y,
              ...i
            }
          ),
          !l && c && /* @__PURE__ */ d.jsxs(Pa, { children: [
            /* @__PURE__ */ d.jsx(ja, { asChild: !0, children: /* @__PURE__ */ d.jsx("div", { className: "absolute top-1/2 right-2 flex -translate-y-1/2 items-center", children: /* @__PURE__ */ d.jsx(Ea, { className: "size-3.5 text-destructive" }) }) }),
            /* @__PURE__ */ d.jsx(Fa, { children: /* @__PURE__ */ d.jsx("p", { className: "text-sm", children: c }) })
          ] })
        ] }),
        e?.suffix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: C(vt({ variant: s.variant, size: s.size })),
            "data-slot": "filters-suffix",
            children: e.suffix
          }
        )
      ]
    }
  );
}
const Bt = (e) => {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!t)
    return;
  const [, n, r, a] = t, o = Number(n), i = Number(r), s = Number(a), l = new Date(o, i - 1, s);
  if (!(l.getFullYear() !== o || l.getMonth() !== i - 1 || l.getDate() !== s))
    return l;
}, Wn = (e) => {
  if (!e)
    return "";
  const t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
};
function Rt({
  field: e,
  value: t,
  onChange: n,
  className: r
}) {
  const a = je(), [o, i] = re(!1), s = le(() => Bt(t), [t]), [l, u] = re(s), c = X(null), f = X(t), [m, v] = re(t);
  oe(() => {
    s && u(s);
  }, [s]), oe(() => {
    t !== f.current && document.activeElement !== c.current && (v(t), f.current = t);
  }, [t]);
  const h = (b, x = c.current) => {
    !e?.onInputChange || !x || e.onInputChange({
      target: { ...x, value: b },
      currentTarget: { ...x, value: b }
    });
  }, w = (b) => {
    v(b.target.value);
  }, y = (b) => {
    const x = b.target.value, O = Bt(x), D = x && !O ? Wn(/* @__PURE__ */ new Date()) : x;
    O ? u(O) : D && u(Bt(D)), D !== x && (c.current && (c.current.value = D), v(D)), D !== t && (f.current = D, n(D)), h(D, b.target);
  }, N = (b) => {
    if (!b) {
      f.current = "", c.current && (c.current.value = ""), v(""), n(""), h("");
      return;
    }
    const x = Wn(b);
    f.current = x, c.current && (c.current.value = x), u(b), v(x), n(x), h(x), i(!1);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: C(
        "w-32",
        Hr({ variant: a.variant, size: a.size, cursorPointer: !1 }),
        r
      ),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: vt({ variant: a.variant, size: a.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-stretch", children: /* @__PURE__ */ d.jsx(
          "input",
          {
            ref: c,
            autoComplete: "off",
            className: "w-full min-w-0 bg-transparent outline-hidden dark:!bg-transparent",
            "data-slot": "filters-input",
            inputMode: "numeric",
            pattern: "\\d{4}-\\d{2}-\\d{2}",
            placeholder: "YYYY-MM-DD",
            type: "text",
            value: m,
            onBlur: y,
            onChange: w
          }
        ) }),
        /* @__PURE__ */ d.jsxs(Ot, { open: o, onOpenChange: i, children: [
          /* @__PURE__ */ d.jsx(Nt, { asChild: !0, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              "aria-label": "Open calendar",
              className: C(
                vt({ variant: a.variant, size: a.size }),
                "cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
              ),
              "data-slot": "filters-suffix",
              type: "button",
              children: /* @__PURE__ */ d.jsx(Ta, { className: "size-3.5" })
            }
          ) }),
          /* @__PURE__ */ d.jsx(mt, { align: "center", className: "w-auto overflow-hidden p-0", sideOffset: 4, children: /* @__PURE__ */ d.jsx(
            Er,
            {
              captionLayout: "dropdown",
              mode: "single",
              month: l,
              selected: s,
              onMonthChange: u,
              onSelect: N
            }
          ) })
        ] })
      ]
    }
  );
}
function Ll({ className: e, icon: t = /* @__PURE__ */ d.jsx(Yn, {}), ...n }) {
  const r = je();
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: C(
        $l({
          variant: r.variant,
          size: r.size,
          cursorPointer: r.cursorPointer,
          radius: r.radius
        }),
        e
      ),
      "data-slot": "filters-remove",
      ...n,
      type: "button",
      children: t
    }
  );
}
const Gr = (e) => "fields" in e && Array.isArray(e.fields), Lr = (e) => !!(e.group && e.fields), Kr = (e) => e.reduce((t, n) => Gr(n) ? [...t, ...n.fields] : Lr(n) ? [...t, ...n.fields] : [...t, n], []), Kl = (e) => Kr(e).reduce(
  (n, r) => (r.key && (n[r.key] = r), n),
  {}
), Ur = (e) => ({
  select: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  multiselect: [
    { value: "is_any_of", label: e.operators.isAnyOf },
    { value: "is_not_any_of", label: e.operators.isNotAnyOf },
    { value: "includes_all", label: e.operators.includesAll },
    { value: "excludes_all", label: e.operators.excludesAll },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  date: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  daterange: [
    { value: "between", label: e.operators.between },
    { value: "not_between", label: e.operators.notBetween },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  text: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  number: [
    { value: "equals", label: e.operators.equals },
    { value: "not_equals", label: e.operators.notEquals },
    { value: "greater_than", label: e.operators.greaterThan },
    { value: "less_than", label: e.operators.lessThan },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  numberrange: [
    { value: "between", label: e.operators.between },
    { value: "overlaps", label: e.operators.overlaps },
    { value: "contains", label: e.operators.contains },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  boolean: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  email: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  url: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  tel: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  time: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  datetime: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ]
});
Ur(qe);
const Ul = (e, t, n) => {
  if (e.operators)
    return e.operators;
  const r = Ur(n);
  let a = e.type || "select";
  return a === "select" && t.length > 1 && (a = "multiselect"), a === "multiselect" || e.type === "multiselect" ? r.multiselect : r[a] || r.select;
};
function Xl({ field: e, operator: t, values: n, onChange: r }) {
  var a;
  const o = je(), i = Ul(e, n, o.i18n), s = ((a = i.find((l) => l.value === t)) == null ? void 0 : a.label) || o.i18n.helpers.formatOperator(t);
  return e.hideOperatorSelect ? /* @__PURE__ */ d.jsx("div", { className: "flex items-center self-stretch border border-r-0 px-3 text-sm whitespace-nowrap text-muted-foreground", children: s }) : /* @__PURE__ */ d.jsxs(Ra, { children: [
    /* @__PURE__ */ d.jsx($a, { className: Vl({ variant: o.variant, size: o.size }), children: s }),
    /* @__PURE__ */ d.jsx(Va, { align: "start", className: "w-fit min-w-fit", children: i.map((l) => /* @__PURE__ */ d.jsxs(
      qa,
      {
        className: "flex items-center justify-between",
        onClick: () => r(l.value),
        children: [
          /* @__PURE__ */ d.jsx("span", { children: l.label }),
          /* @__PURE__ */ d.jsx(at, { className: `ms-auto text-primary ${l.value === t ? "opacity-100" : "opacity-0"}` })
        ]
      },
      l.value
    )) })
  ] });
}
function _n({
  searchable: e,
  label: t,
  searchInput: n,
  isSearching: r,
  className: a,
  onSearchChange: o
}) {
  const i = je();
  return e ? /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsx(
      an,
      {
        className: a,
        placeholder: i.i18n.placeholders.searchField(t || ""),
        value: n,
        onValueChange: o
      }
    ),
    r && /* @__PURE__ */ d.jsx($t, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-muted-foreground" })
  ] }) : null;
}
function Ql(e, t) {
  const n = t.trim().toLowerCase();
  return n ? e.filter((r) => {
    var a;
    return r.label.toLowerCase().includes(n) || ((a = r.detail) == null ? void 0 : a.toLowerCase().includes(n));
  }) : e;
}
function Pn({
  contextLabel: e,
  selectedOptions: t,
  unselectedOptions: n,
  isInitialLoad: r,
  isLoadingMore: a,
  hasMore: o,
  onLoadMore: i,
  onSelectSelected: s,
  onSelectUnselected: l
}) {
  const u = je();
  return /* @__PURE__ */ d.jsxs(on, { className: "outline-hidden", children: [
    r ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ d.jsx($t, { className: "mr-2 size-4 animate-spin" }),
      u.i18n.loading
    ] }) : /* @__PURE__ */ d.jsx(sn, { children: u.i18n.noResultsFound }),
    t.length > 0 && /* @__PURE__ */ d.jsx(Ue, { heading: e, children: t.map((c) => /* @__PURE__ */ d.jsxs(
      Ye,
      {
        className: "group flex items-center gap-2",
        onSelect: () => s(c),
        children: [
          c.icon && c.icon,
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: c.label, children: c.label }),
            c.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-sm text-muted-foreground", title: c.detail, children: c.detail })
          ] }),
          /* @__PURE__ */ d.jsx(at, { className: "ms-auto text-primary" })
        ]
      },
      String(c.value)
    )) }),
    n.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.length > 0 && /* @__PURE__ */ d.jsx(Ge, {}),
      /* @__PURE__ */ d.jsx(Ue, { children: n.map((c) => /* @__PURE__ */ d.jsxs(
        Ye,
        {
          className: "group flex items-center gap-2",
          value: c.label + (c.detail ? ` - ${c.detail}` : ""),
          onSelect: () => l(c),
          children: [
            c.icon && c.icon,
            /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: c.label, children: c.label }),
              c.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-sm text-muted-foreground", title: c.detail, children: c.detail })
            ] }),
            /* @__PURE__ */ d.jsx(at, { className: "ms-auto text-primary opacity-0" })
          ]
        },
        String(c.value)
      )) })
    ] }),
    o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      (t.length > 0 || n.length > 0) && /* @__PURE__ */ d.jsx(Ge, {}),
      /* @__PURE__ */ d.jsx("div", { className: "p-1.5", children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          className: "flex w-full items-center justify-center rounded-xs px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
          disabled: a,
          type: "button",
          onClick: i,
          children: [
            a && /* @__PURE__ */ d.jsx($t, { className: "mr-2 size-4 animate-spin" }),
            a ? u.i18n.loading : u.i18n.loadMore
          ]
        }
      ) })
    ] })
  ] });
}
function Xr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: o,
  onSearchChange: i,
  shouldClientFilter: s,
  isInitialLoad: l,
  isSearching: u,
  isLoadingMore: c,
  hasMore: f,
  onLoadMore: m
}) {
  var v;
  const [h, w] = re(!1), [y, N] = re([]), b = je(), x = e.type === "multiselect" || t.length > 1, O = le(() => e.value ?? t, [e.value, t]);
  oe(() => {
    h && e.searchable !== !1 && setTimeout(() => {
      const j = document.querySelector("[cmdk-input]");
      j && j.focus();
    }, 0);
  }, [h, e.searchable]);
  const D = le(
    () => {
      var j;
      return ((j = e.options) == null ? void 0 : j.filter((V) => O.includes(V.value))) || [];
    },
    [e.options, O]
  );
  oe(() => {
    if (O.length === 0) {
      N([]);
      return;
    }
    D.length > 0 && N((j) => {
      const V = [];
      for (const Q of O) {
        const U = D.find((se) => se.value === Q) ?? j.find((se) => se.value === Q);
        U && V.push(U);
      }
      return V;
    });
  }, [D, O]);
  const p = le(() => O.length === 0 ? [] : y.length > 0 ? y : D, [y, O.length, D]), P = le(() => Ql(p, o), [o, p]), A = ((v = e.options) == null ? void 0 : v.filter((j) => !O.includes(j.value))) || [], G = (j) => {
    i(j);
  }, B = () => {
    w(!1), setTimeout(() => i(""), Gt), r?.();
  };
  return a ? /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(gt, { shouldFilter: s, children: [
    /* @__PURE__ */ d.jsx(
      _n,
      {
        className: "h-(--control-height) pr-8 text-sm",
        isSearching: u,
        label: e.label,
        searchable: e.searchable !== !1,
        searchInput: o,
        onSearchChange: G
      }
    ),
    /* @__PURE__ */ d.jsx(
      Pn,
      {
        contextLabel: e.label || "Selected",
        hasMore: f,
        isInitialLoad: l,
        isLoadingMore: c,
        selectedOptions: P,
        unselectedOptions: A,
        onLoadMore: m,
        onSelectSelected: (j) => {
          if (x) {
            const V = O.filter((Q) => Q !== j.value);
            e.onValueChange ? e.onValueChange(V) : n(V);
          } else
            e.onValueChange ? e.onValueChange([]) : n([]);
        },
        onSelectUnselected: (j) => {
          if (x) {
            const V = [...O, j.value];
            if (e.maxSelections && V.length > e.maxSelections)
              return;
            e.onValueChange ? e.onValueChange(V) : n(V), e.autoCloseOnSelect && r?.();
          } else
            e.onValueChange ? e.onValueChange([j.value]) : n([j.value]), r?.();
        }
      }
    )
  ] }) }) : /* @__PURE__ */ d.jsxs(
    Ot,
    {
      open: h,
      onOpenChange: (j) => {
        w(j), j || setTimeout(() => i(""), Gt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          Nt,
          {
            className: C(nt({
              variant: b.variant,
              size: b.size,
              cursorPointer: b.cursorPointer
            }), e.triggerClassName ?? "max-w-60"),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              p.length > 0 && p.some((j) => j.icon) && /* @__PURE__ */ d.jsx("div", { className: C("-space-x-0.5 flex shrink-0 items-center", e.selectedOptionsClassName), children: p.slice(0, 3).map((j) => /* @__PURE__ */ d.jsx("div", { children: j.icon }, String(j.value))) }),
              p.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: p[0].detail ? `${p[0].label} - ${p[0].detail}` : p[0].label, children: p[0].label }) : p.length > 1 ? `${p.length} ${b.i18n.selectedCount}` : b.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(
          mt,
          {
            align: "start",
            className: C(
              "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
              e.className || "w-[200px]"
            ),
            children: /* @__PURE__ */ d.jsxs(gt, { shouldFilter: s, children: [
              /* @__PURE__ */ d.jsx(
                _n,
                {
                  className: "h-(--control-height) pr-8 text-sm",
                  isSearching: u,
                  label: e.label,
                  searchable: e.searchable !== !1,
                  searchInput: o,
                  onSearchChange: G
                }
              ),
              /* @__PURE__ */ d.jsx(
                Pn,
                {
                  hasMore: f,
                  isInitialLoad: l,
                  isLoadingMore: c,
                  selectedOptions: P,
                  unselectedOptions: A,
                  onLoadMore: m,
                  onSelectSelected: (j) => {
                    n(x ? t.filter((V) => V !== j.value) : []), x || (w(!1), B());
                  },
                  onSelectUnselected: (j) => {
                    if (x) {
                      const V = [...t, j.value];
                      if (e.maxSelections && V.length > e.maxSelections)
                        return;
                      n(V), e.autoCloseOnSelect && B();
                    } else
                      n([j.value]), w(!1), B();
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Zl({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: o,
  onSearchChange: i
}) {
  const s = le(() => e.value ?? t, [e.value, t]), l = e.valueSource.useOptions({
    query: o,
    selectedValues: s
  }), u = le(() => ({
    ...e,
    options: l.options
  }), [e, l.options]);
  return /* @__PURE__ */ d.jsx(
    Xr,
    {
      field: u,
      hasMore: l.hasMore,
      inline: a,
      isInitialLoad: l.isInitialLoad,
      isLoadingMore: l.isLoadingMore,
      isSearching: l.isSearching,
      searchInput: o,
      shouldClientFilter: !1,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: l.loadMore,
      onSearchChange: i
    }
  );
}
function Qr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1
}) {
  var o;
  const [i, s] = re(""), l = ((o = e.options) == null ? void 0 : o.length) ?? 0;
  return e.valueSource ? /* @__PURE__ */ d.jsx(
    Zl,
    {
      field: e,
      inline: a,
      searchInput: i,
      values: t,
      onChange: n,
      onClose: r,
      onSearchChange: s
    },
    e.valueSource.id
  ) : /* @__PURE__ */ d.jsx(
    Xr,
    {
      field: e,
      hasMore: !1,
      inline: a,
      isInitialLoad: !!e.isLoading && l === 0,
      isLoadingMore: !1,
      isSearching: !!e.isLoading && l > 0,
      searchInput: i,
      shouldClientFilter: !0,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: () => {
      },
      onSearchChange: s
    }
  );
}
function Jl({ field: e, values: t, onChange: n, operator: r }) {
  var a, o;
  const [i, s] = re(!1), [l, u] = re(""), c = je();
  if (oe(() => {
    i && e.searchable !== !1 && setTimeout(() => {
      const h = document.querySelector("[cmdk-input]");
      h && h.focus();
    }, 0);
  }, [i, e.searchable]), r === "empty" || r === "not_empty")
    return null;
  if (e.customRenderer)
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: nt({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: e.customRenderer({ field: e, values: t, onChange: n, operator: r })
      }
    );
  if (e.type === "boolean") {
    const h = t[0] === !0, w = e.onLabel || c.i18n.true, y = e.offLabel || c.i18n.false;
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: nt({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d.jsx(Vr, { checked: h, size: "sm", onCheckedChange: (N) => n([N]) }),
          e.onLabel && e.offLabel && /* @__PURE__ */ d.jsx("span", { className: "text-xs text-muted-foreground", children: h ? w : y })
        ] })
      }
    );
  }
  if (e.type === "time") {
    if (r === "between") {
      const h = t[0] || "", w = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: e.className,
            field: e,
            type: "time",
            value: h,
            onChange: (y) => n([y.target.value, w]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: pt({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: e.className,
            field: e,
            type: "time",
            value: w,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: e.className,
        field: e,
        type: "time",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "datetime") {
    if (r === "between") {
      const h = t[0] || "", w = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: h,
            onChange: (y) => n([y.target.value, w]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: pt({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: w,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: C("w-36 max-w-full", e.className),
        field: e,
        type: "datetime-local",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (["email", "url", "tel"].includes(e.type || "")) {
    const h = () => {
      switch (e.type) {
        case "email":
          return "email";
        case "url":
          return "url";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, w = () => {
      switch (e.type) {
        case "email":
          return "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
        case "url":
          return "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$";
        case "tel":
          return "^[\\+]?[1-9][\\d]{0,15}$";
        default:
          return;
      }
    };
    return /* @__PURE__ */ d.jsx(
      ke,
      {
        className: e.className,
        field: e,
        pattern: e.pattern || w(),
        placeholder: e.placeholder || c.i18n.placeholders.enterField(e.type || "text"),
        type: h(),
        value: t[0] || "",
        onChange: (y) => n([y.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "daterange") {
    const h = t[0] || "", w = t[1] || "";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: nt({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: [
          /* @__PURE__ */ d.jsx(
            Rt,
            {
              className: C("max-w-full", e.className),
              field: e,
              value: h,
              onChange: (y) => n([y, w])
            }
          ),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              className: pt({ variant: c.variant, size: c.size }),
              "data-slot": "filters-between",
              children: c.i18n.to
            }
          ),
          /* @__PURE__ */ d.jsx(
            Rt,
            {
              className: C("max-w-full", e.className),
              field: e,
              value: w,
              onChange: (y) => n([h, y])
            }
          )
        ]
      }
    );
  }
  if (e.type === "text" || e.type === "number") {
    if (e.type === "number" && r === "between") {
      const h = t[0] || "", w = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: c.i18n.min,
            step: e.step,
            type: "number",
            value: h,
            onChange: (y) => n([y.target.value, w]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: pt({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          ke,
          {
            className: C("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: c.i18n.max,
            step: e.step,
            type: "number",
            value: w,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx("div", { className: "flex items-center", "data-slot": "filters-item", children: /* @__PURE__ */ d.jsx(
      ke,
      {
        className: C("w-36", e.className),
        field: e,
        max: e.type === "number" ? e.max : void 0,
        min: e.type === "number" ? e.min : void 0,
        pattern: e.pattern,
        placeholder: e.placeholder,
        step: e.type === "number" ? e.step : void 0,
        type: e.type === "number" ? "number" : "text",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    ) });
  }
  if (e.type === "date")
    return /* @__PURE__ */ d.jsx(
      Rt,
      {
        className: e.className,
        field: e,
        value: t[0] || "",
        onChange: (h) => n([h])
      }
    );
  if (e.type === "select" || e.type === "multiselect")
    return /* @__PURE__ */ d.jsx(Qr, { field: e, values: t, onChange: n });
  const f = t.length > 1, m = ((a = e.options) == null ? void 0 : a.filter((h) => t.includes(h.value))) || [], v = ((o = e.options) == null ? void 0 : o.filter((h) => !t.includes(h.value))) || [];
  return /* @__PURE__ */ d.jsxs(
    Ot,
    {
      open: i,
      onOpenChange: (h) => {
        s(h), h || setTimeout(() => u(""), Gt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          Nt,
          {
            className: nt({
              variant: c.variant,
              size: c.size,
              cursorPointer: c.cursorPointer
            }),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              m.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "flex shrink-0 items-center -space-x-1.5", children: m.slice(0, 3).map((h) => /* @__PURE__ */ d.jsx("div", { children: h.icon }, String(h.value))) }),
              m.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: m[0].detail ? `${m[0].label} - ${m[0].detail}` : m[0].label, children: m[0].label }) : m.length > 1 ? `${m.length} ${c.i18n.selectedCount}` : c.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(mt, { className: C("w-36 p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!", e.popoverContentClassName), children: /* @__PURE__ */ d.jsxs(gt, { children: [
          e.searchable !== !1 && /* @__PURE__ */ d.jsx(
            an,
            {
              className: "h-(--control-height) text-sm",
              placeholder: c.i18n.placeholders.searchField(e.label || ""),
              value: l,
              onValueChange: u
            }
          ),
          /* @__PURE__ */ d.jsxs(on, { className: "outline-hidden", children: [
            /* @__PURE__ */ d.jsx(sn, { children: c.i18n.noResultsFound }),
            m.length > 0 && /* @__PURE__ */ d.jsx(Ue, { children: m.map((h) => /* @__PURE__ */ d.jsxs(
              Ye,
              {
                className: "group flex items-center gap-2",
                onSelect: () => {
                  n(f ? t.filter((w) => w !== h.value) : []), f || s(!1);
                },
                children: [
                  h.icon && h.icon,
                  /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: h.label }),
                  /* @__PURE__ */ d.jsx(at, { className: "ms-auto text-primary" })
                ]
              },
              String(h.value)
            )) }),
            v.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              m.length > 0 && /* @__PURE__ */ d.jsx(Ge, {}),
              /* @__PURE__ */ d.jsx(Ue, { children: v.map((h) => /* @__PURE__ */ d.jsxs(
                Ye,
                {
                  className: "group flex items-center gap-2",
                  value: h.label,
                  onSelect: () => {
                    if (f) {
                      const w = [...t, h.value];
                      if (e.maxSelections && w.length > e.maxSelections)
                        return;
                      n(w);
                    } else
                      n([h.value]), s(!1);
                  },
                  children: [
                    h.icon && h.icon,
                    /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: h.label }),
                    /* @__PURE__ */ d.jsx(at, { className: "ms-auto text-primary opacity-0" })
                  ]
                },
                String(h.value)
              )) })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function lc({
  filters: e,
  fields: t,
  onChange: n,
  className: r,
  showAddButton: a = !0,
  addButtonText: o,
  addButtonIcon: i,
  addButtonClassName: s,
  addButton: l,
  showClearButton: u = !1,
  clearButtonText: c,
  clearButtonIcon: f,
  clearButtonClassName: m,
  clearButton: v,
  onClear: h,
  variant: w = "outline",
  size: y = "md",
  radius: N = "md",
  i18n: b,
  showSearchInput: x = !0,
  cursorPointer: O = !0,
  trigger: D,
  allowMultiple: p = !0,
  popoverContentClassName: P,
  popoverAlign: A = "start",
  keyboardShortcut: G,
  onActiveFieldChange: B
}) {
  const [j, V] = re(!1), [Q, U] = re(null), [se, pe] = re([]);
  oe(() => {
    B?.(Q);
  }, [Q, B]), oe(() => {
    if (!G)
      return;
    const M = (k) => {
      const T = k.target;
      T.tagName === "INPUT" || T.tagName === "TEXTAREA" || T.isContentEditable || k.key.toLowerCase() === G.toLowerCase() && !k.metaKey && !k.ctrlKey && !k.altKey && (k.preventDefault(), V((Y) => !Y));
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [G]), oe(() => {
    j && setTimeout(() => {
      const M = document.querySelector("[cmdk-input]");
      if (M)
        M.focus();
      else {
        const k = document.querySelector("[cmdk-root]");
        k && k.focus();
      }
    }, 0);
  }, [j, Q, x]);
  const ue = {
    ...qe,
    ...b,
    operators: {
      ...qe.operators,
      ...b?.operators
    },
    placeholders: {
      ...qe.placeholders,
      ...b?.placeholders
    },
    validation: {
      ...qe.validation,
      ...b?.validation
    }
  }, ye = le(() => Kl(t), [t]), J = Q ? ye[Q] : null, ie = te(
    (M, k) => {
      n(
        e.map((T) => {
          if (T.id === M) {
            const Y = { ...T, ...k };
            return (k.operator === "empty" || k.operator === "not_empty") && (Y.values = []), Y;
          }
          return T;
        })
      );
    },
    [e, n]
  ), de = te(
    (M) => {
      n(e.filter((k) => k.id !== M));
    },
    [e, n]
  ), g = te(() => {
    V(!1), U(null), pe([]);
  }, []), E = te(
    (M) => {
      const k = ye[M];
      if (!k?.key)
        return;
      if (k.type === "select" || k.type === "multiselect") {
        U(k.key), pe([]);
        return;
      }
      const T = k.defaultOperator || (k.type === "daterange" || k.type === "numberrange" ? "between" : "is");
      let Y = [];
      k.defaultValue !== void 0 ? Y = [k.defaultValue] : ["text", "number", "date", "email", "url", "tel", "time", "datetime"].includes(k.type || "") ? Y = [""] : k.type === "daterange" ? Y = ["", ""] : k.type === "numberrange" ? Y = [k.min || 0, k.max || 100] : k.type === "boolean" && (Y = [!1]);
      const R = jn(M, T, Y);
      n([...e, R]), g();
    },
    [p, g, ye, e, n]
  ), z = te(
    (M, k) => {
      if (!M.key)
        return;
      const T = M.defaultOperator || (M.type === "multiselect" ? "is_any_of" : "is"), Y = jn(M.key, T, k);
      n([...e, Y]), g();
    },
    [g, e, n]
  ), W = le(() => Kr(t).filter((k) => !k.key || k.type === "separator" ? !1 : p ? !0 : !e.some((T) => T.field === k.key)), [t, e, p]);
  return /* @__PURE__ */ d.jsx(
    qr.Provider,
    {
      value: {
        variant: w,
        size: y,
        radius: N,
        i18n: ue,
        cursorPointer: O,
        className: r,
        showAddButton: a,
        addButtonText: o,
        addButtonIcon: i,
        addButtonClassName: s,
        addButton: l,
        showSearchInput: x,
        trigger: D,
        allowMultiple: p
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: C(
        Hl({ variant: w, size: y }),
        e.length > 0 && "w-full",
        u && e.length > 0 && "sm:pr-24",
        r
      ), children: [
        e.map((M) => {
          const k = ye[M.field];
          return k ? /* @__PURE__ */ d.jsxs("div", { className: Gl({ variant: w }), "data-slot": "filter-item", children: [
            /* @__PURE__ */ d.jsxs("div", { className: ql({ variant: w, size: y, radius: N }), children: [
              k.icon,
              k.label
            ] }),
            /* @__PURE__ */ d.jsx(
              Xl,
              {
                field: k,
                operator: M.operator,
                values: M.values,
                onChange: (T) => ie(M.id, { operator: T })
              }
            ),
            /* @__PURE__ */ d.jsx(
              Jl,
              {
                field: k,
                operator: M.operator,
                values: M.values,
                onChange: (T) => ie(M.id, { values: T })
              }
            ),
            /* @__PURE__ */ d.jsx(Ll, { onClick: () => de(M.id) })
          ] }, M.id) : null;
        }),
        a && W.length > 0 && /* @__PURE__ */ d.jsxs(
          Ot,
          {
            open: j,
            onOpenChange: (M) => {
              V(M), M || (U(null), pe([]));
            },
            children: [
              /* @__PURE__ */ d.jsx(Nt, { asChild: !0, children: l || /* @__PURE__ */ d.jsxs(
                "button",
                {
                  className: C(
                    Cn({
                      variant: w,
                      size: y,
                      cursorPointer: O,
                      radius: N
                    }),
                    s
                  ),
                  title: ue.addFilterTitle,
                  type: "button",
                  children: [
                    i || /* @__PURE__ */ d.jsx(_a, {}),
                    o || ue.addFilter
                  ]
                }
              ) }),
              /* @__PURE__ */ d.jsx(
                mt,
                {
                  align: A,
                  className: C(
                    "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
                    J?.className || P || "w-[220px]"
                  ),
                  children: J ? (
                    // The inline "add filter" picker always commits one filter per
                    // pick and closes — for both `select` and `multiselect` fields.
                    // We override `multiselect` → `select` so SelectOptionsPopover
                    // renders the single-pick UI (one click → onChange + onClose).
                    // Multi-value editing of an existing filter happens through the
                    // filter row's own picker, not here.
                    /* @__PURE__ */ d.jsx(
                      Qr,
                      {
                        field: J.type === "multiselect" ? { ...J, type: "select" } : J,
                        inline: !0,
                        values: se,
                        onChange: (M) => z(J, M),
                        onClose: g
                      }
                    )
                  ) : (
                    // Show field selection - needs Command wrapper for search/list
                    /* @__PURE__ */ d.jsxs(gt, { className: "outline-hidden", tabIndex: x ? void 0 : 0, children: [
                      x && /* @__PURE__ */ d.jsx(an, { className: "h-(--control-height)", placeholder: ue.searchFields }),
                      /* @__PURE__ */ d.jsxs(on, { className: "outline-hidden", children: [
                        /* @__PURE__ */ d.jsx(sn, { children: ue.noFieldsFound }),
                        t.map((M, k) => {
                          if (Gr(M)) {
                            const Y = M.fields.filter((R) => R.type === "separator" || p ? !0 : !e.some((we) => we.field === R.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ue, { heading: M.group || "Fields", children: Y.map((R, we) => {
                              if (R.type === "separator") {
                                const St = R.key ?? `${M.group ?? `group-${k}`}-separator-${we}`;
                                return /* @__PURE__ */ d.jsx(Ge, {}, St);
                              }
                              return /* @__PURE__ */ d.jsxs(
                                Ye,
                                {
                                  className: "min-w-0",
                                  onSelect: () => R.key && E(R.key),
                                  children: [
                                    R.icon,
                                    /* @__PURE__ */ d.jsx("span", { className: "truncate", children: R.label })
                                  ]
                                },
                                R.key ?? `${M.group ?? `group-${k}`}-field-${we}`
                              );
                            }) }, M.group || `group-${k}`);
                          }
                          if (Lr(M)) {
                            const Y = M.fields.filter((R) => R.type === "separator" || p ? !0 : !e.some((we) => we.field === R.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ue, { heading: M.group || "Fields", children: Y.map((R) => {
                              if (R.type === "separator") {
                                const we = R.key || `${M.group || `group-${k}`}-separator-${R.label || Math.random()}`;
                                return /* @__PURE__ */ d.jsx(Ge, {}, we);
                              }
                              return /* @__PURE__ */ d.jsxs(Ye, { className: "min-w-0", onSelect: () => R.key && E(R.key), children: [
                                R.icon,
                                /* @__PURE__ */ d.jsx("span", { className: "truncate", children: R.label })
                              ] }, R.key);
                            }) }, M.group || `group-${k}`);
                          }
                          const T = M;
                          if (T.type === "separator") {
                            const Y = T.key || `flat-separator-${T.label || k}`;
                            return /* @__PURE__ */ d.jsx(Ge, {}, Y);
                          }
                          return !p && e.some((Y) => Y.field === T.key) ? null : /* @__PURE__ */ d.jsxs(Ye, { className: "min-w-0", onSelect: () => T.key && E(T.key), children: [
                            T.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: T.label })
                          ] }, T.key);
                        })
                      ] })
                    ] })
                  )
                }
              )
            ]
          }
        ),
        u && e.length > 0 && (v || /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: C(
              Cn({
                variant: w,
                size: y,
                cursorPointer: O,
                radius: N
              }),
              "border-0 bg-transparent hover:bg-transparent hover:text-foreground",
              "sm:absolute sm:right-0 sm:top-0",
              m
            ),
            type: "button",
            onClick: () => {
              h ? h() : n([]);
            },
            children: [
              f || /* @__PURE__ */ d.jsx(Yn, {}),
              c || ue.clearFilters
            ]
          }
        ))
      ] })
    }
  );
}
const jn = (e, t, n = []) => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field: e,
  operator: t || "is",
  values: n
});
export {
  lc as F,
  jn as c,
  no as u
};
//# sourceMappingURL=filters-BLBaHhJz.mjs.map
