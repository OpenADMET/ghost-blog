import { y as L, a as A, j as u, x as T, l as f, u as g, b as N, i as z, v as B, c as p } from "./index-BAF0YXsp.mjs";
import { f as U, c as S } from "./createLucideIcon-DcUfTBt_.mjs";
import { P as b, U as V } from "./get-site-timezone-DlXmHA3y.mjs";
import { s as W } from "./hooks-BEngBys9.mjs";
import { e as q, h as G } from "./app-utils-DIc5TmxO.mjs";
function K(e, a = []) {
  let s = [];
  function o(t, c) {
    const n = L(c);
    n.displayName = t + "Context";
    const i = s.length;
    s = [...s, c];
    const l = (m) => {
      const { scope: x, children: h, ...v } = m, F = x?.[e]?.[i] || n, H = A(() => v, Object.values(v));
      return /* @__PURE__ */ u.jsx(F.Provider, { value: H, children: h });
    };
    l.displayName = t + "Provider";
    function d(m, x) {
      const h = x?.[e]?.[i] || n, v = T(h);
      if (v) return v;
      if (c !== void 0) return c;
      throw new Error(`\`${m}\` must be used within \`${t}\``);
    }
    return [l, d];
  }
  const r = () => {
    const t = s.map((c) => L(c));
    return function(n) {
      const i = n?.[e] || t;
      return A(
        () => ({ [`__scope${e}`]: { ...n, [e]: i } }),
        [n, i]
      );
    };
  };
  return r.scopeName = e, [o, D(r, ...a)];
}
function D(...e) {
  const a = e[0];
  if (e.length === 1) return a;
  const s = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(t) {
      const c = o.reduce((n, { useScope: i, scopeName: l }) => {
        const m = i(t)[`__scope${l}`];
        return { ...n, ...m };
      }, {});
      return A(() => ({ [`__scope${a.scopeName}`]: c }), [c]);
    };
  };
  return s.scopeName = a.scopeName, s;
}
function J() {
  return W.useSyncExternalStore(
    O,
    () => !0,
    () => !1
  );
}
function O() {
  return () => {
  };
}
var y = "Avatar", [Q] = K(y), [X, j] = Q(y), _ = f(
  (e, a) => {
    const { __scopeAvatar: s, ...o } = e, [r, t] = g("idle");
    return /* @__PURE__ */ u.jsx(
      X,
      {
        scope: s,
        imageLoadingStatus: r,
        onImageLoadingStatusChange: t,
        children: /* @__PURE__ */ u.jsx(b.span, { ...o, ref: a })
      }
    );
  }
);
_.displayName = y;
var w = "AvatarImage", E = f(
  (e, a) => {
    const { __scopeAvatar: s, src: o, onLoadingStatusChange: r = () => {
    }, ...t } = e, c = j(w, s), n = Y(o, t), i = U((l) => {
      r(l), c.onImageLoadingStatusChange(l);
    });
    return S(() => {
      n !== "idle" && i(n);
    }, [n, i]), n === "loaded" ? /* @__PURE__ */ u.jsx(b.img, { ...t, ref: a, src: o }) : null;
  }
);
E.displayName = w;
var I = "AvatarFallback", P = f(
  (e, a) => {
    const { __scopeAvatar: s, delayMs: o, ...r } = e, t = j(I, s), [c, n] = g(o === void 0);
    return N(() => {
      if (o !== void 0) {
        const i = window.setTimeout(() => n(!0), o);
        return () => window.clearTimeout(i);
      }
    }, [o]), c && t.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(b.span, { ...r, ref: a }) : null;
  }
);
P.displayName = I;
function C(e, a) {
  return e ? a ? (e.src !== a && (e.src = a), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Y(e, { referrerPolicy: a, crossOrigin: s }) {
  const o = J(), r = z(null), t = o ? (r.current || (r.current = new window.Image()), r.current) : null, [c, n] = g(
    () => C(t, e)
  );
  return S(() => {
    n(C(t, e));
  }, [t, e]), S(() => {
    const i = (m) => () => {
      n(m);
    };
    if (!t) return;
    const l = i("loaded"), d = i("error");
    return t.addEventListener("load", l), t.addEventListener("error", d), a && (t.referrerPolicy = a), typeof s == "string" && (t.crossOrigin = s), () => {
      t.removeEventListener("load", l), t.removeEventListener("error", d);
    };
  }, [t, s, a]), c;
}
var k = _, R = E, M = P;
const Z = f(({ className: e, ...a }, s) => /* @__PURE__ */ u.jsx(
  R,
  {
    ref: s,
    className: p("aspect-square h-full w-full", e),
    ...a
  }
));
Z.displayName = R.displayName;
const $ = f(({ className: e, ...a }, s) => /* @__PURE__ */ u.jsx(
  M,
  {
    ref: s,
    className: p(
      "flex h-full w-full items-center justify-center rounded-full bg-muted [&_svg]:size-4",
      e
    ),
    ...a
  }
));
$.displayName = M.displayName;
function ee({ src: e }) {
  const [a, s] = g(!1);
  return N(() => {
    s(!1);
  }, [e]), /* @__PURE__ */ u.jsx(
    "img",
    {
      alt: "",
      className: p(
        "absolute inset-0 h-full w-full object-cover",
        !a && "invisible"
      ),
      src: e,
      onLoad: (o) => {
        const { naturalWidth: r, naturalHeight: t } = o.currentTarget;
        r > 1 && t > 1 && s(!0);
      }
    }
  );
}
const te = f(({ className: e, children: a, src: s, name: o, email: r, ...t }, c) => {
  const n = { name: o || void 0, email: r || void 0 }, i = !!(o || r), l = i ? q(n) : null, d = i ? B(G(n), "75", "55") : void 0;
  return /* @__PURE__ */ u.jsx(
    k,
    {
      ref: c,
      className: p(
        "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t,
      children: a ?? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          $,
          {
            className: p(
              "text-xs text-muted-foreground md:text-sm [&_svg]:size-3 md:[&_svg]:size-4",
              i && "font-semibold text-white"
            ),
            style: i ? { backgroundColor: d } : void 0,
            children: l ?? /* @__PURE__ */ u.jsx(V, {})
          }
        ),
        s && /* @__PURE__ */ u.jsx(ee, { src: s })
      ] })
    }
  );
});
te.displayName = k.displayName;
export {
  te as A,
  $ as a
};
//# sourceMappingURL=avatar-K63cvqSS.mjs.map
