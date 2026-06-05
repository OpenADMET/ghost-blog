import { R as u, j as e, c as i } from "./index-BAF0YXsp.mjs";
import { T as A, j as M } from "./createLucideIcon-DcUfTBt_.mjs";
import { D as C, f as H, e as k } from "./dropdown-menu-BSSmAory.mjs";
import { J as v, A as G, G as _, I as n } from "./inline-C2YFQAdU.mjs";
import { M as I } from "./main-layout-D_HHTP_n.mjs";
import { S as g } from "./skeleton-S1k58YKa.mjs";
import { T as y, a as L, b as m, c as p, d as S, e as x } from "./table-Cw3Wxf1C.mjs";
import { a as O } from "./hooks-BEngBys9.mjs";
const T = u.forwardRef(
  function({
    className: s,
    gap: a = "md",
    align: r = "stretch",
    justify: d = "start",
    ...l
  }, c) {
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: c,
        className: i(
          "flex flex-col",
          _[a],
          G[r],
          v[d],
          s
        ),
        ...l
      }
    );
  }
);
T.displayName = "Stack";
function B({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    T,
    {
      className: i("min-w-0 h-full min-h-(--control-height)", t),
      "data-list-header": "list-header-left",
      gap: "xs",
      justify: "center",
      children: s
    }
  );
}
function R({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    n,
    {
      align: "center",
      className: i("text-sm text-muted-foreground", t),
      "data-list-header": "list-header-breadcrumb",
      gap: "sm",
      children: s
    }
  );
}
function z({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    M,
    {
      className: i(
        "text-2xl leading-[1.2em] sidebar:text-[2.5rem] whitespace-nowrap",
        t
      ),
      "data-list-header": "list-header-title",
      children: s
    }
  );
}
function D({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    A,
    {
      as: "p",
      className: t,
      "data-list-header": "list-header-description",
      size: "sm",
      tone: "secondary",
      children: s
    }
  );
}
function F({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    A,
    {
      as: "span",
      className: i("ml-2 lg:ml-3 text-[1.9rem] sidebar:text-[2.2rem] tabular-nums", t),
      "data-list-header": "list-header-count",
      tone: "secondary",
      weight: "regular",
      children: s
    }
  );
}
function b({ children: t }) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: t });
}
function w({ children: t }) {
  return /* @__PURE__ */ e.jsx(C, { children: t });
}
function P({ children: t, ...s }) {
  return /* @__PURE__ */ e.jsx(k, { asChild: !0, ...s, children: t });
}
function U({ children: t, ...s }) {
  return /* @__PURE__ */ e.jsx(H, { align: "end", sideOffset: 8, ...s, children: t });
}
const J = 640, N = (t) => typeof window > "u" ? !1 : window.innerWidth < t, V = (t) => {
  const [s, a] = u.useState(() => N(t));
  return u.useEffect(() => {
    const r = () => {
      a(N(t));
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, [t]), s;
}, $ = Object.assign(
  function({ className: s, children: a, mobileMenuBreakpoint: r = J }) {
    const d = u.Children.toArray(a), l = [];
    let c = null, f = null;
    const E = V(r);
    return d.forEach((h) => {
      if (!u.isValidElement(h)) {
        l.push(h);
        return;
      }
      const o = h;
      if (o.type === w) {
        c = o;
        return;
      }
      if (o.type === b) {
        f = o.props.children ?? null, l.push(o.props.children ?? null);
        return;
      }
      l.push(o);
    }), c ? E ? /* @__PURE__ */ e.jsx(
      n,
      {
        align: "center",
        className: s,
        "data-list-header": "list-header-action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ e.jsxs(
          n,
          {
            align: "center",
            className: "ml-auto",
            "data-list-header": "list-header-action-group-mobile",
            gap: "sm",
            children: [
              c,
              f && /* @__PURE__ */ e.jsx("div", { "data-list-header": "list-header-action-group-mobile-primary", children: f })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx(
      n,
      {
        align: "center",
        className: s,
        "data-list-header": "list-header-action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ e.jsx(
          n,
          {
            align: "center",
            "data-list-header": "list-header-action-group-desktop",
            gap: "sm",
            justify: "end",
            children: l
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx(
      n,
      {
        align: "center",
        className: s,
        "data-list-header": "list-header-action-group",
        gap: "sm",
        justify: "end",
        children: a
      }
    );
  },
  {
    Primary: b,
    MobileMenu: w,
    MobileMenuTrigger: P,
    MobileMenuContent: U
  }
);
function K({ className: t, children: s }) {
  return /* @__PURE__ */ e.jsx(
    n,
    {
      align: "center",
      className: i("shrink-0", t),
      "data-list-header": "list-header-actions",
      gap: "lg",
      children: s
    }
  );
}
const j = Object.assign(
  function({ className: s, children: a, sticky: r = !0, blurredBackground: d = !0 }) {
    return /* @__PURE__ */ e.jsx(
      n,
      {
        align: "start",
        as: "header",
        className: i(
          "px-4 lg:px-8",
          r && "sticky top-0 z-50 -mb-4 lg:-mb-4",
          d && "bg-gradient-to-b from-background via-background/70 to-background/70 backdrop-blur-md dark:bg-black",
          s
        ),
        "data-list-header": "list-header",
        gap: "lg",
        justify: "between",
        children: a
      }
    );
  },
  {
    Left: B,
    Breadcrumb: R,
    Title: z,
    Count: F,
    Description: D,
    Actions: K,
    ActionGroup: $
  }
), Q = ({ children: t, className: s, ...a }) => /* @__PURE__ */ e.jsx("section", { className: i("flex gap-6 flex-col px-4 lg:px-8 py-2 size-full grow", s), ...a, children: t }), W = () => /* @__PURE__ */ e.jsx(j, { className: "py-4 sidebar:py-6", children: /* @__PURE__ */ e.jsx(j.Left, { children: /* @__PURE__ */ e.jsx(j.Title, { children: "Automations" }) }) }), Y = ({ children: t }) => /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "automations-page", children: t }) }) }), q = {
  "member-welcome-email-free": "Onboard new free members with a short welcome email.",
  "member-welcome-email-paid": "Greet new paid members and point them at member-only content."
}, X = ({ status: t }) => {
  switch (t) {
    case "active":
      return /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-green/20 px-2 py-0.5 text-xs font-medium text-green", children: [
        /* @__PURE__ */ e.jsx("span", { className: "size-1.5 rounded-full bg-green" }),
        "LIVE"
      ] });
    case "inactive":
      return /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground", children: "OFF" });
    default: {
      const s = t;
      throw new Error(`Unhandled status: ${s}`);
    }
  }
}, Z = () => /* @__PURE__ */ e.jsxs(y, { className: "flex table-fixed flex-col lg:table", "data-testid": "automations-list-loading", children: [
  /* @__PURE__ */ e.jsx(L, { className: "hidden lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(m, { children: [
    /* @__PURE__ */ e.jsx(p, { className: "w-auto px-4", children: "Automation" }),
    /* @__PURE__ */ e.jsx(p, { className: "w-32 px-4", children: "Status" })
  ] }) }),
  /* @__PURE__ */ e.jsx(S, { className: "flex flex-col lg:table-row-group", children: Array.from({ length: 2 }, (t, s) => /* @__PURE__ */ e.jsxs(
    m,
    {
      "aria-hidden": "true",
      className: "grid w-full grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
      children: [
        /* @__PURE__ */ e.jsxs(x, { className: "min-w-0 lg:p-4", children: [
          /* @__PURE__ */ e.jsx(g, { className: "mb-1 h-5 w-48 max-w-full" }),
          /* @__PURE__ */ e.jsx(g, { className: "h-5 w-80 max-w-full" })
        ] }),
        /* @__PURE__ */ e.jsx(x, { className: "lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(g, { className: "h-5 w-16" }) })
      ]
    },
    s
  )) })
] }), ee = ({ automations: t = [], isLoading: s = !1 }) => s ? /* @__PURE__ */ e.jsx(Z, {}) : /* @__PURE__ */ e.jsxs(y, { className: "flex table-fixed flex-col lg:table", "data-testid": "automations-list", children: [
  /* @__PURE__ */ e.jsx(L, { className: "hidden lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(m, { children: [
    /* @__PURE__ */ e.jsx(p, { className: "w-auto px-4", children: "Automation" }),
    /* @__PURE__ */ e.jsx(p, { className: "w-32 px-4", children: "Status" })
  ] }) }),
  /* @__PURE__ */ e.jsx(S, { className: "flex flex-col lg:table-row-group", children: t.map((a) => {
    const r = q[a.slug];
    return /* @__PURE__ */ e.jsxs(
      m,
      {
        className: "grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
        "data-testid": "automation-list-row",
        children: [
          /* @__PURE__ */ e.jsxs(x, { className: "static min-w-0 lg:p-4", children: [
            /* @__PURE__ */ e.jsx(
              "a",
              {
                className: "before:absolute before:inset-0 before:z-10 before:rounded-sm focus-visible:outline-hidden focus-visible:before:ring-2 focus-visible:before:ring-focus-ring",
                href: `#/automations/${a.slug}`,
                children: /* @__PURE__ */ e.jsx("span", { className: "block font-medium", children: a.name })
              }
            ),
            r && /* @__PURE__ */ e.jsx("span", { className: "block text-muted-foreground", children: r })
          ] }),
          /* @__PURE__ */ e.jsx(x, { className: "lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(X, { status: a.status }) })
        ]
      },
      a.slug
    );
  }) })
] }), te = "AutomationsResponseType", se = O({
  dataType: te,
  path: "/automations/"
}), ue = () => {
  const { data: t, error: s, isError: a, isLoading: r } = se({
    defaultErrorHandler: !1
  });
  if (a)
    throw s || new Error("Failed to load automations");
  return /* @__PURE__ */ e.jsxs(Y, { children: [
    /* @__PURE__ */ e.jsx(W, {}),
    /* @__PURE__ */ e.jsx(Q, { children: /* @__PURE__ */ e.jsx(ee, { automations: t?.automations, isLoading: r }) })
  ] });
};
export {
  ue as default
};
//# sourceMappingURL=automations-BZpT35kJ.mjs.map
