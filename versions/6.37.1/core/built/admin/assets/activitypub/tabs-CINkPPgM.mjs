import { ae as d, ao as Ut, j as r, am as y, al as Bt, an as g, c as h, e as A, aQ as $, ag as se, aR as zt, aS as we, ah as K, aT as Yt, b as re, aU as Xt, W as j, aV as Wt, aW as Ht, aX as Zt, aY as qt, aZ as Qt, ap as Jt, a_ as en, a$ as Ne, ai as tn, b0 as nn, b1 as on, a6 as rn, C as an, s as C, b2 as Ie, Y as sn, aj as H, ak as cn, b3 as ie } from "./index-4hBKVHQG.mjs";
import { u as dn, R as De, I as Te, c as Z, a as un } from "./index-CTw1bTY7.mjs";
var q = "Tabs", [ln] = se(q, [
  Z
]), Se = Z(), [pn, ce] = ln(q), Pe = d(
  (e, n) => {
    const {
      __scopeTabs: t,
      value: o,
      onValueChange: a,
      defaultValue: s,
      orientation: c = "horizontal",
      dir: u,
      activationMode: f = "automatic",
      ...v
    } = e, l = dn(u), [i, m] = Ut({
      prop: o,
      onChange: a,
      defaultProp: s ?? "",
      caller: q
    });
    return /* @__PURE__ */ r.jsx(
      pn,
      {
        scope: t,
        baseId: Bt(),
        value: i,
        onValueChange: m,
        orientation: c,
        dir: l,
        activationMode: f,
        children: /* @__PURE__ */ r.jsx(
          y.div,
          {
            dir: l,
            "data-orientation": c,
            ...v,
            ref: n
          }
        )
      }
    );
  }
);
Pe.displayName = q;
var Ee = "TabsList", je = d(
  (e, n) => {
    const { __scopeTabs: t, loop: o = !0, ...a } = e, s = ce(Ee, t), c = Se(t);
    return /* @__PURE__ */ r.jsx(
      De,
      {
        asChild: !0,
        ...c,
        orientation: s.orientation,
        dir: s.dir,
        loop: o,
        children: /* @__PURE__ */ r.jsx(
          y.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...a,
            ref: n
          }
        )
      }
    );
  }
);
je.displayName = Ee;
var Ae = "TabsTrigger", Re = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, disabled: a = !1, ...s } = e, c = ce(Ae, t), u = Se(t), f = Fe(c.baseId, o), v = Le(c.baseId, o), l = o === c.value;
    return /* @__PURE__ */ r.jsx(
      Te,
      {
        asChild: !0,
        ...u,
        focusable: !a,
        active: l,
        children: /* @__PURE__ */ r.jsx(
          y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": v,
            "data-state": l ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: f,
            ...s,
            ref: n,
            onMouseDown: g(e.onMouseDown, (i) => {
              !a && i.button === 0 && i.ctrlKey === !1 ? c.onValueChange(o) : i.preventDefault();
            }),
            onKeyDown: g(e.onKeyDown, (i) => {
              [" ", "Enter"].includes(i.key) && c.onValueChange(o);
            }),
            onFocus: g(e.onFocus, () => {
              const i = c.activationMode !== "manual";
              !l && !a && i && c.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Re.displayName = Ae;
var ke = "TabsContent", Oe = d(
  (e, n) => {
    const { __scopeTabs: t, value: o, forceMount: a, children: s, ...c } = e, u = ce(ke, t), f = Fe(u.baseId, o), v = Le(u.baseId, o), l = o === u.value, i = h(l);
    return A(() => {
      const m = requestAnimationFrame(() => i.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ r.jsx($, { present: a || l, children: ({ present: m }) => /* @__PURE__ */ r.jsx(
      y.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !m,
        id: v,
        tabIndex: 0,
        ...c,
        ref: n,
        style: {
          ...e.style,
          animationDuration: i.current ? "0s" : void 0
        },
        children: m && s
      }
    ) });
  }
);
Oe.displayName = ke;
function Fe(e, n) {
  return `${e}-trigger-${n}`;
}
function Le(e, n) {
  return `${e}-content-${n}`;
}
var Ge = Pe, $e = je, de = Re, Ke = Oe, ae = ["Enter", " "], mn = ["ArrowDown", "PageUp", "Home"], Ve = ["ArrowUp", "PageDown", "End"], fn = [...mn, ...Ve], vn = {
  ltr: [...ae, "ArrowRight"],
  rtl: [...ae, "ArrowLeft"]
}, gn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Q = "Menu", [L, xn, hn] = un(Q), [I, Ue] = se(Q, [
  hn,
  we,
  Z
]), ue = we(), Be = Z(), [Go, D] = I(Q), [$o, V] = I(Q), bn = "MenuAnchor", le = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = ue(t);
    return /* @__PURE__ */ r.jsx(zt, { ...a, ...o, ref: n });
  }
);
le.displayName = bn;
var pe = "MenuPortal", [Mn, ze] = I(pe, {
  forceMount: void 0
}), Ye = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: a } = e, s = D(pe, n);
  return /* @__PURE__ */ r.jsx(Mn, { scope: n, forceMount: t, children: /* @__PURE__ */ r.jsx($, { present: t || s.open, children: /* @__PURE__ */ r.jsx(on, { asChild: !0, container: a, children: o }) }) });
};
Ye.displayName = pe;
var _ = "MenuContent", [_n, me] = I(_), Xe = d(
  (e, n) => {
    const t = ze(_, e.__scopeMenu), { forceMount: o = t.forceMount, ...a } = e, s = D(_, e.__scopeMenu), c = V(_, e.__scopeMenu);
    return /* @__PURE__ */ r.jsx(L.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx($, { present: o || s.open, children: /* @__PURE__ */ r.jsx(L.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ r.jsx(Cn, { ...a, ref: n }) : /* @__PURE__ */ r.jsx(yn, { ...a, ref: n }) }) }) });
  }
), Cn = d(
  (e, n) => {
    const t = D(_, e.__scopeMenu), o = h(null), a = K(n, o);
    return A(() => {
      const s = o.current;
      if (s) return Yt(s);
    }, []), /* @__PURE__ */ r.jsx(
      fe,
      {
        ...e,
        ref: a,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: g(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), yn = d((e, n) => {
  const t = D(_, e.__scopeMenu);
  return /* @__PURE__ */ r.jsx(
    fe,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), wn = tn("MenuContent.ScrollLock"), fe = d(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: o = !1,
      trapFocus: a,
      onOpenAutoFocus: s,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: u,
      onEntryFocus: f,
      onEscapeKeyDown: v,
      onPointerDownOutside: l,
      onFocusOutside: i,
      onInteractOutside: m,
      onDismiss: w,
      disableOutsideScroll: x,
      ...T
    } = e, R = D(_, t), S = V(_, t), kt = ue(t), Ot = Be(t), he = xn(t), [Ft, be] = re(null), B = h(null), Lt = K(n, B, R.onContentChange), z = h(0), Y = h(""), Gt = h(0), ee = h(null), Me = h("right"), te = h(0), $t = x ? Wt : Ht, Kt = x ? { as: wn, allowPinchZoom: !0 } : void 0, Vt = (p) => {
      const E = Y.current + p, N = he().filter((M) => !M.disabled), k = document.activeElement, ne = N.find((M) => M.ref.current === k)?.textValue, oe = N.map((M) => M.textValue), _e = On(oe, E, ne), O = N.find((M) => M.textValue === _e)?.ref.current;
      (function M(Ce) {
        Y.current = Ce, window.clearTimeout(z.current), Ce !== "" && (z.current = window.setTimeout(() => M(""), 1e3));
      })(E), O && setTimeout(() => O.focus());
    };
    A(() => () => window.clearTimeout(z.current), []), Xt();
    const P = j((p) => Me.current === ee.current?.side && Ln(p, ee.current?.area), []);
    return /* @__PURE__ */ r.jsx(
      _n,
      {
        scope: t,
        searchRef: Y,
        onItemEnter: j(
          (p) => {
            P(p) && p.preventDefault();
          },
          [P]
        ),
        onItemLeave: j(
          (p) => {
            P(p) || (B.current?.focus(), be(null));
          },
          [P]
        ),
        onTriggerLeave: j(
          (p) => {
            P(p) && p.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: Gt,
        onPointerGraceIntentChange: j((p) => {
          ee.current = p;
        }, []),
        children: /* @__PURE__ */ r.jsx($t, { ...Kt, children: /* @__PURE__ */ r.jsx(
          Zt,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: g(s, (p) => {
              p.preventDefault(), B.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ r.jsx(
              qt,
              {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: v,
                onPointerDownOutside: l,
                onFocusOutside: i,
                onInteractOutside: m,
                onDismiss: w,
                children: /* @__PURE__ */ r.jsx(
                  De,
                  {
                    asChild: !0,
                    ...Ot,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: Ft,
                    onCurrentTabStopIdChange: be,
                    onEntryFocus: g(f, (p) => {
                      S.isUsingKeyboardRef.current || p.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ r.jsx(
                      Qt,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": dt(R.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...kt,
                        ...T,
                        ref: Lt,
                        style: { outline: "none", ...T.style },
                        onKeyDown: g(T.onKeyDown, (p) => {
                          const N = p.target.closest("[data-radix-menu-content]") === p.currentTarget, k = p.ctrlKey || p.altKey || p.metaKey, ne = p.key.length === 1;
                          N && (p.key === "Tab" && p.preventDefault(), !k && ne && Vt(p.key));
                          const oe = B.current;
                          if (p.target !== oe || !fn.includes(p.key)) return;
                          p.preventDefault();
                          const O = he().filter((M) => !M.disabled).map((M) => M.ref.current);
                          Ve.includes(p.key) && O.reverse(), Rn(O);
                        }),
                        onBlur: g(e.onBlur, (p) => {
                          p.currentTarget.contains(p.target) || (window.clearTimeout(z.current), Y.current = "");
                        }),
                        onPointerMove: g(
                          e.onPointerMove,
                          G((p) => {
                            const E = p.target, N = te.current !== p.clientX;
                            if (p.currentTarget.contains(E) && N) {
                              const k = p.clientX > te.current ? "right" : "left";
                              Me.current = k, te.current = p.clientX;
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
Xe.displayName = _;
var Nn = "MenuGroup", ve = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(y.div, { role: "group", ...o, ref: n });
  }
);
ve.displayName = Nn;
var In = "MenuLabel", We = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(y.div, { ...o, ref: n });
  }
);
We.displayName = In;
var X = "MenuItem", ye = "menu.itemSelect", J = d(
  (e, n) => {
    const { disabled: t = !1, onSelect: o, ...a } = e, s = h(null), c = V(X, e.__scopeMenu), u = me(X, e.__scopeMenu), f = K(n, s), v = h(!1), l = () => {
      const i = s.current;
      if (!t && i) {
        const m = new CustomEvent(ye, { bubbles: !0, cancelable: !0 });
        i.addEventListener(ye, (w) => o?.(w), { once: !0 }), nn(i, m), m.defaultPrevented ? v.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ r.jsx(
      He,
      {
        ...a,
        ref: f,
        disabled: t,
        onClick: g(e.onClick, l),
        onPointerDown: (i) => {
          e.onPointerDown?.(i), v.current = !0;
        },
        onPointerUp: g(e.onPointerUp, (i) => {
          v.current || i.currentTarget?.click();
        }),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = u.searchRef.current !== "";
          t || m && i.key === " " || ae.includes(i.key) && (i.currentTarget.click(), i.preventDefault());
        })
      }
    );
  }
);
J.displayName = X;
var He = d(
  (e, n) => {
    const { __scopeMenu: t, disabled: o = !1, textValue: a, ...s } = e, c = me(X, t), u = Be(t), f = h(null), v = K(n, f), [l, i] = re(!1), [m, w] = re("");
    return A(() => {
      const x = f.current;
      x && w((x.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ r.jsx(
      L.ItemSlot,
      {
        scope: t,
        disabled: o,
        textValue: a ?? m,
        children: /* @__PURE__ */ r.jsx(Te, { asChild: !0, ...u, focusable: !o, children: /* @__PURE__ */ r.jsx(
          y.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: v,
            onPointerMove: g(
              e.onPointerMove,
              G((x) => {
                o ? c.onItemLeave(x) : (c.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: g(
              e.onPointerLeave,
              G((x) => c.onItemLeave(x))
            ),
            onFocus: g(e.onFocus, () => i(!0)),
            onBlur: g(e.onBlur, () => i(!1))
          }
        ) })
      }
    );
  }
), Dn = "MenuCheckboxItem", Ze = d(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: o, ...a } = e;
    return /* @__PURE__ */ r.jsx(tt, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ r.jsx(
      J,
      {
        role: "menuitemcheckbox",
        "aria-checked": W(t) ? "mixed" : t,
        ...a,
        ref: n,
        "data-state": xe(t),
        onSelect: g(
          a.onSelect,
          () => o?.(W(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ze.displayName = Dn;
var qe = "MenuRadioGroup", [Tn, Sn] = I(
  qe,
  { value: void 0, onValueChange: () => {
  } }
), Qe = d(
  (e, n) => {
    const { value: t, onValueChange: o, ...a } = e, s = Jt(o);
    return /* @__PURE__ */ r.jsx(Tn, { scope: e.__scopeMenu, value: t, onValueChange: s, children: /* @__PURE__ */ r.jsx(ve, { ...a, ref: n }) });
  }
);
Qe.displayName = qe;
var Je = "MenuRadioItem", et = d(
  (e, n) => {
    const { value: t, ...o } = e, a = Sn(Je, e.__scopeMenu), s = t === a.value;
    return /* @__PURE__ */ r.jsx(tt, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ r.jsx(
      J,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": xe(s),
        onSelect: g(
          o.onSelect,
          () => a.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
et.displayName = Je;
var ge = "MenuItemIndicator", [tt, Pn] = I(
  ge,
  { checked: !1 }
), nt = d(
  (e, n) => {
    const { __scopeMenu: t, forceMount: o, ...a } = e, s = Pn(ge, t);
    return /* @__PURE__ */ r.jsx(
      $,
      {
        present: o || W(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ r.jsx(
          y.span,
          {
            ...a,
            ref: n,
            "data-state": xe(s.checked)
          }
        )
      }
    );
  }
);
nt.displayName = ge;
var En = "MenuSeparator", ot = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ r.jsx(
      y.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }
);
ot.displayName = En;
var jn = "MenuArrow", rt = d(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, a = ue(t);
    return /* @__PURE__ */ r.jsx(en, { ...a, ...o, ref: n });
  }
);
rt.displayName = jn;
var An = "MenuSub", [Ko, at] = I(An), F = "MenuSubTrigger", st = d(
  (e, n) => {
    const t = D(F, e.__scopeMenu), o = V(F, e.__scopeMenu), a = at(F, e.__scopeMenu), s = me(F, e.__scopeMenu), c = h(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: f } = s, v = { __scopeMenu: e.__scopeMenu }, l = j(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return A(() => l, [l]), A(() => {
      const i = u.current;
      return () => {
        window.clearTimeout(i), f(null);
      };
    }, [u, f]), /* @__PURE__ */ r.jsx(le, { asChild: !0, ...v, children: /* @__PURE__ */ r.jsx(
      He,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": a.contentId,
        "data-state": dt(t.open),
        ...e,
        ref: Ne(n, a.onTriggerChange),
        onClick: (i) => {
          e.onClick?.(i), !(e.disabled || i.defaultPrevented) && (i.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: g(
          e.onPointerMove,
          G((i) => {
            s.onItemEnter(i), !i.defaultPrevented && !e.disabled && !t.open && !c.current && (s.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              t.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: g(
          e.onPointerLeave,
          G((i) => {
            l();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const w = t.content?.dataset.side, x = w === "right", T = x ? -5 : 5, R = m[x ? "left" : "right"], S = m[x ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: i.clientX + T, y: i.clientY },
                  { x: R, y: m.top },
                  { x: S, y: m.top },
                  { x: S, y: m.bottom },
                  { x: R, y: m.bottom }
                ],
                side: w
              }), window.clearTimeout(u.current), u.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(i), i.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: g(e.onKeyDown, (i) => {
          const m = s.searchRef.current !== "";
          e.disabled || m && i.key === " " || vn[o.dir].includes(i.key) && (t.onOpenChange(!0), t.content?.focus(), i.preventDefault());
        })
      }
    ) });
  }
);
st.displayName = F;
var it = "MenuSubContent", ct = d(
  (e, n) => {
    const t = ze(_, e.__scopeMenu), { forceMount: o = t.forceMount, ...a } = e, s = D(_, e.__scopeMenu), c = V(_, e.__scopeMenu), u = at(it, e.__scopeMenu), f = h(null), v = K(n, f);
    return /* @__PURE__ */ r.jsx(L.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx($, { present: o || s.open, children: /* @__PURE__ */ r.jsx(L.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ r.jsx(
      fe,
      {
        id: u.contentId,
        "aria-labelledby": u.triggerId,
        ...a,
        ref: v,
        align: "start",
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          c.isUsingKeyboardRef.current && f.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: g(e.onFocusOutside, (l) => {
          l.target !== u.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: g(e.onEscapeKeyDown, (l) => {
          c.onClose(), l.preventDefault();
        }),
        onKeyDown: g(e.onKeyDown, (l) => {
          const i = l.currentTarget.contains(l.target), m = gn[c.dir].includes(l.key);
          i && m && (s.onOpenChange(!1), u.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
ct.displayName = it;
function dt(e) {
  return e ? "open" : "closed";
}
function W(e) {
  return e === "indeterminate";
}
function xe(e) {
  return W(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rn(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function kn(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function On(e, n, t) {
  const a = n.length > 1 && Array.from(n).every((v) => v === n[0]) ? n[0] : n, s = t ? e.indexOf(t) : -1;
  let c = kn(e, Math.max(s, 0));
  a.length === 1 && (c = c.filter((v) => v !== t));
  const f = c.find(
    (v) => v.toLowerCase().startsWith(a.toLowerCase())
  );
  return f !== t ? f : void 0;
}
function Fn(e, n) {
  const { x: t, y: o } = e;
  let a = !1;
  for (let s = 0, c = n.length - 1; s < n.length; c = s++) {
    const u = n[s], f = n[c], v = u.x, l = u.y, i = f.x, m = f.y;
    l > o != m > o && t < (i - v) * (o - l) / (m - l) + v && (a = !a);
  }
  return a;
}
function Ln(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Fn(t, n);
}
function G(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Gn = le, $n = Ye, Kn = Xe, Vn = ve, Un = We, Bn = J, zn = Ze, Yn = Qe, Xn = et, Wn = nt, Hn = ot, Zn = rt, qn = st, Qn = ct, ut = "DropdownMenu", [Jn] = se(
  ut,
  [Ue]
), b = Ue(), [Vo, lt] = Jn(ut), pt = "DropdownMenuTrigger", mt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: o = !1, ...a } = e, s = lt(pt, t), c = b(t);
    return /* @__PURE__ */ r.jsx(Gn, { asChild: !0, ...c, children: /* @__PURE__ */ r.jsx(
      y.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...a,
        ref: Ne(n, s.triggerRef),
        onPointerDown: g(e.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (s.onOpenToggle(), s.open || u.preventDefault());
        }),
        onKeyDown: g(e.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && s.onOpenToggle(), u.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }
);
mt.displayName = pt;
var eo = "DropdownMenuPortal", ft = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, o = b(n);
  return /* @__PURE__ */ r.jsx($n, { ...o, ...t });
};
ft.displayName = eo;
var vt = "DropdownMenuContent", gt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = lt(vt, t), s = b(t), c = h(!1);
    return /* @__PURE__ */ r.jsx(
      Kn,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: g(e.onCloseAutoFocus, (u) => {
          c.current || a.triggerRef.current?.focus(), c.current = !1, u.preventDefault();
        }),
        onInteractOutside: g(e.onInteractOutside, (u) => {
          const f = u.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, l = f.button === 2 || v;
          (!a.modal || l) && (c.current = !0);
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
gt.displayName = vt;
var to = "DropdownMenuGroup", no = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Vn, { ...a, ...o, ref: n });
  }
);
no.displayName = to;
var oo = "DropdownMenuLabel", xt = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Un, { ...a, ...o, ref: n });
  }
);
xt.displayName = oo;
var ro = "DropdownMenuItem", ht = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Bn, { ...a, ...o, ref: n });
  }
);
ht.displayName = ro;
var ao = "DropdownMenuCheckboxItem", bt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(zn, { ...a, ...o, ref: n });
});
bt.displayName = ao;
var so = "DropdownMenuRadioGroup", io = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Yn, { ...a, ...o, ref: n });
});
io.displayName = so;
var co = "DropdownMenuRadioItem", Mt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Xn, { ...a, ...o, ref: n });
});
Mt.displayName = co;
var uo = "DropdownMenuItemIndicator", _t = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Wn, { ...a, ...o, ref: n });
});
_t.displayName = uo;
var lo = "DropdownMenuSeparator", Ct = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(Hn, { ...a, ...o, ref: n });
});
Ct.displayName = lo;
var po = "DropdownMenuArrow", mo = d(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
    return /* @__PURE__ */ r.jsx(Zn, { ...a, ...o, ref: n });
  }
);
mo.displayName = po;
var fo = "DropdownMenuSubTrigger", yt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(qn, { ...a, ...o, ref: n });
});
yt.displayName = fo;
var vo = "DropdownMenuSubContent", wt = d((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, a = b(t);
  return /* @__PURE__ */ r.jsx(
    Qn,
    {
      ...a,
      ...o,
      ref: n,
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
wt.displayName = vo;
var go = mt, xo = ft, Nt = gt, It = xt, Dt = ht, Tt = bt, St = Mt, Pt = _t, Et = Ct, jt = yt, At = wt;
const ho = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], bo = rn("circle", ho), Mo = go, _o = d(({ className: e, inset: n, children: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  jt,
  {
    ref: a,
    className: C(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ r.jsx(an, { className: "ml-auto" })
    ]
  }
));
_o.displayName = jt.displayName;
const Co = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx("div", { className: Ie, children: /* @__PURE__ */ r.jsx(
  At,
  {
    ref: t,
    className: C(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Co.displayName = At.displayName;
const yo = d(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ r.jsx(xo, { children: /* @__PURE__ */ r.jsx("div", { className: Ie, children: /* @__PURE__ */ r.jsx(
  Nt,
  {
    ref: o,
    className: C(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: n,
    ...t
  }
) }) }));
yo.displayName = Nt.displayName;
const wo = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  Dt,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      n && "pl-8",
      e
    ),
    ...t
  }
));
wo.displayName = Dt.displayName;
const No = d(({ className: e, children: n, checked: t, ...o }, a) => /* @__PURE__ */ r.jsxs(
  Tt,
  {
    ref: a,
    checked: t,
    className: C(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(Pt, { children: /* @__PURE__ */ r.jsx(sn, { className: "size-4" }) }) }),
      n
    ]
  }
));
No.displayName = Tt.displayName;
const Io = d(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ r.jsxs(
  St,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(Pt, { children: /* @__PURE__ */ r.jsx(bo, { className: "size-2 fill-current" }) }) }),
      n
    ]
  }
));
Io.displayName = St.displayName;
const Do = d(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ r.jsx(
  It,
  {
    ref: o,
    className: C(
      "px-2 py-1.5 text-sm font-semibold",
      n && "pl-8",
      e
    ),
    ...t
  }
));
Do.displayName = It.displayName;
const To = d(({ className: e, ...n }, t) => /* @__PURE__ */ r.jsx(
  Et,
  {
    ref: t,
    className: C("-mx-1 my-1 h-px bg-muted", e),
    ...n
  }
));
To.displayName = Et.displayName;
const U = cn("segmented"), So = d(({ variant: e = "segmented", ...n }, t) => /* @__PURE__ */ r.jsx(U.Provider, { value: e, children: /* @__PURE__ */ r.jsx(Ge, { ref: t, ...n }) }));
So.displayName = Ge.displayName;
const Po = ie(
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
), Eo = d(({ className: e, ...n }, t) => {
  const o = H(U);
  return /* @__PURE__ */ r.jsx(
    $e,
    {
      ref: t,
      className: C(Po({ variant: o, className: e })),
      ...n
    }
  );
});
Eo.displayName = $e.displayName;
const Rt = ie(
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
), jo = d(({ className: e, ...n }, t) => {
  const o = H(U);
  return /* @__PURE__ */ r.jsx(
    de,
    {
      ref: t,
      className: C(Rt({ variant: o, className: e })),
      ...n
    }
  );
});
jo.displayName = de.displayName;
const Ao = ({ className: e = "", children: n }) => /* @__PURE__ */ r.jsx("span", { className: `mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-surface-elevated px-1.5 py-0 text-xs leading-[21px] font-semibold text-text-secondary ${e}`, children: n });
Ao.displayName = "TabsTriggerCount";
const Ro = ie(
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
), ko = d(({ className: e, ...n }, t) => {
  const o = H(U);
  return /* @__PURE__ */ r.jsx(
    Ke,
    {
      ref: t,
      className: C(Ro({ variant: o, className: e })),
      ...n
    }
  );
});
ko.displayName = Ke.displayName;
const Oo = d(({
  children: e,
  className: n,
  ...t
}, o) => {
  const a = H(U);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ r.jsx(
      de,
      {
        ref: o,
        className: C(Rt({ variant: a, className: n })),
        ...t,
        children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ r.jsx(
      Mo,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (s) => {
          s.preventDefault();
        }
      }
    )
  ] });
});
Oo.displayName = "TabsDropdownTrigger";
export {
  So as T,
  Eo as a,
  jo as b,
  ko as c,
  Ao as d
};
//# sourceMappingURL=tabs-CINkPPgM.mjs.map
