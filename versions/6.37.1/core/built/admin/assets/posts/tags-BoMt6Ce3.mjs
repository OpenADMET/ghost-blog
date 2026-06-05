import { l as v, j as e, R as d, s as J, c as T, x as K, y as X, L, i as Y, g as Z, M as ee } from "./index-BAF0YXsp.mjs";
import { B as N } from "./button-ufGBCcsV.mjs";
import { u as C, P, d as se, e as ae } from "./createLucideIcon-DcUfTBt_.mjs";
import { I as te, b as S, u as oe, R as le } from "./skeleton-S1k58YKa.mjs";
import { H as f, u as re, a as ne, L as ie } from "./virtual-list-window-Bs88yrut.mjs";
import { M as ce } from "./main-layout-D_HHTP_n.mjs";
import { T as de, a as ue, b as y, c as b, d as ge, e as h } from "./table-Cw3Wxf1C.mjs";
import { P as pe, T as xe } from "./tags-CNdsvTtZ.mjs";
import { E as me } from "./empty-indicator-DvGCvRAX.mjs";
import { L as fe } from "./loading-indicator-BZsjmp8g.mjs";
import { d as he } from "./hooks-BEngBys9.mjs";
var z = "Toggle", I = v((s, a) => {
  const { pressed: o, defaultPressed: t, onPressedChange: l, ...r } = s, [n, i] = C({
    prop: o,
    onChange: l,
    defaultProp: t ?? !1,
    caller: z
  });
  return /* @__PURE__ */ e.jsx(
    P.button,
    {
      type: "button",
      "aria-pressed": n,
      "data-state": n ? "on" : "off",
      "data-disabled": s.disabled ? "" : void 0,
      ...r,
      ref: a,
      onClick: se(s.onClick, () => {
        s.disabled || i(!n);
      })
    }
  );
});
I.displayName = z;
var E = I, x = "ToggleGroup", [$] = ae(x, [
  S
]), A = S(), R = d.forwardRef((s, a) => {
  const { type: o, ...t } = s;
  if (o === "single") {
    const l = t;
    return /* @__PURE__ */ e.jsx(ve, { ...l, ref: a });
  }
  if (o === "multiple") {
    const l = t;
    return /* @__PURE__ */ e.jsx(je, { ...l, ref: a });
  }
  throw new Error(`Missing prop \`type\` expected on \`${x}\``);
});
R.displayName = x;
var [V, B] = $(x), ve = d.forwardRef((s, a) => {
  const {
    value: o,
    defaultValue: t,
    onValueChange: l = () => {
    },
    ...r
  } = s, [n, i] = C({
    prop: o,
    defaultProp: t ?? "",
    onChange: l,
    caller: x
  });
  return /* @__PURE__ */ e.jsx(
    V,
    {
      scope: s.__scopeToggleGroup,
      type: "single",
      value: d.useMemo(() => n ? [n] : [], [n]),
      onItemActivate: i,
      onItemDeactivate: d.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ e.jsx(D, { ...r, ref: a })
    }
  );
}), je = d.forwardRef((s, a) => {
  const {
    value: o,
    defaultValue: t,
    onValueChange: l = () => {
    },
    ...r
  } = s, [n, i] = C({
    prop: o,
    defaultProp: t ?? [],
    onChange: l,
    caller: x
  }), c = d.useCallback(
    (u) => i((g = []) => [...g, u]),
    [i]
  ), m = d.useCallback(
    (u) => i((g = []) => g.filter((j) => j !== u)),
    [i]
  );
  return /* @__PURE__ */ e.jsx(
    V,
    {
      scope: s.__scopeToggleGroup,
      type: "multiple",
      value: n,
      onItemActivate: c,
      onItemDeactivate: m,
      children: /* @__PURE__ */ e.jsx(D, { ...r, ref: a })
    }
  );
});
R.displayName = x;
var [be, Ne] = $(x), D = d.forwardRef(
  (s, a) => {
    const {
      __scopeToggleGroup: o,
      disabled: t = !1,
      rovingFocus: l = !0,
      orientation: r,
      dir: n,
      loop: i = !0,
      ...c
    } = s, m = A(o), u = oe(n), g = { role: "group", dir: u, ...c };
    return /* @__PURE__ */ e.jsx(be, { scope: o, rovingFocus: l, disabled: t, children: l ? /* @__PURE__ */ e.jsx(
      le,
      {
        asChild: !0,
        ...m,
        orientation: r,
        dir: u,
        loop: i,
        children: /* @__PURE__ */ e.jsx(P.div, { ...g, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(P.div, { ...g, ref: a }) });
  }
), w = "ToggleGroupItem", F = d.forwardRef(
  (s, a) => {
    const o = B(w, s.__scopeToggleGroup), t = Ne(w, s.__scopeToggleGroup), l = A(s.__scopeToggleGroup), r = o.value.includes(s.value), n = t.disabled || s.disabled, i = { ...s, pressed: r, disabled: n }, c = d.useRef(null);
    return t.rovingFocus ? /* @__PURE__ */ e.jsx(
      te,
      {
        asChild: !0,
        ...l,
        focusable: !n,
        active: r,
        ref: c,
        children: /* @__PURE__ */ e.jsx(k, { ...i, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(k, { ...i, ref: a });
  }
);
F.displayName = w;
var k = d.forwardRef(
  (s, a) => {
    const { __scopeToggleGroup: o, value: t, ...l } = s, r = B(w, o), n = { role: "radio", "aria-checked": s.pressed, "aria-pressed": void 0 }, i = r.type === "single" ? n : void 0;
    return /* @__PURE__ */ e.jsx(
      I,
      {
        ...i,
        ...l,
        ref: a,
        onPressedChange: (c) => {
          c ? r.onItemActivate(t) : r.onItemDeactivate(t);
        }
      }
    );
  }
), H = R, O = F;
const q = J(
  "inline-flex items-center justify-center gap-2 rounded-xs text-sm font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-transparent"
      },
      size: {
        default: "h-[26px] min-w-[26px] px-2",
        button: "h-[32px] min-w-[32px] px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), we = v(({ className: s, variant: a, size: o, ...t }, l) => /* @__PURE__ */ e.jsx(
  E,
  {
    ref: l,
    className: T(q({ variant: a, size: o, className: s })),
    ...t
  }
));
we.displayName = E.displayName;
const Q = X({
  size: "default",
  variant: "default"
}), U = v(({ className: s, variant: a, size: o, children: t, ...l }, r) => /* @__PURE__ */ e.jsx(
  H,
  {
    ref: r,
    className: T("inline-flex items-center justify-center gap-0.5 bg-muted p-0.5 rounded-md", s),
    ...l,
    children: /* @__PURE__ */ e.jsx(Q.Provider, { value: { variant: a, size: o }, children: t })
  }
));
U.displayName = H.displayName;
const G = v(({ className: s, children: a, variant: o, size: t, ...l }, r) => {
  const n = K(Q);
  return /* @__PURE__ */ e.jsx(
    O,
    {
      ref: r,
      className: T(
        q({
          variant: n.variant || o,
          size: n.size || t
        }),
        s
      ),
      ...l,
      children: a
    }
  );
});
G.displayName = O.displayName;
const Te = ({ children: s, className: a, ...o }) => /* @__PURE__ */ e.jsx("section", { className: T("flex gap-6 flex-col p-4 lg:p-8 size-full grow", a), ...o, children: s }), Pe = ({ currentTab: s }) => /* @__PURE__ */ e.jsxs(f, { variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(f.Title, { children: "Tags" }),
  /* @__PURE__ */ e.jsxs(f.Actions, { children: [
    /* @__PURE__ */ e.jsx(f.ActionGroup, { children: /* @__PURE__ */ e.jsxs(U, { "data-testid": "tags-header-tabs", size: "button", type: "single", value: s, children: [
      /* @__PURE__ */ e.jsx(G, { "aria-label": "Public tags", value: "public", asChild: !0, children: /* @__PURE__ */ e.jsx(L, { to: "/tags", children: "Public tags" }) }),
      /* @__PURE__ */ e.jsx(G, { "aria-label": "Internal tags", value: "internal", asChild: !0, children: /* @__PURE__ */ e.jsx(L, { to: "/tags?type=internal", children: "Internal tags" }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(f.ActionGroup, { children: /* @__PURE__ */ e.jsx(N, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { className: "font-bold", href: "#/tags/new", children: "New tag" }) }) })
  ] })
] }), ye = ({ children: s }) => /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "tags-page", children: s }) }) }), M = ({ height: s }) => /* @__PURE__ */ e.jsx("tr", { "aria-hidden": "true", className: "flex lg:table-row", children: /* @__PURE__ */ e.jsx("td", { className: "flex lg:table-cell", style: { height: s } }) }), Ge = v(function(a, o) {
  return /* @__PURE__ */ e.jsx(
    y,
    {
      ref: o,
      ...a,
      "aria-hidden": "true",
      className: "relative flex flex-col lg:table-row",
      children: /* @__PURE__ */ e.jsx(h, { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Ce({
  items: s,
  totalItems: a,
  hasNextPage: o,
  isFetchingNextPage: t,
  fetchNextPage: l
}) {
  const r = Y(null), { visibleItemCount: n, canLoadMore: i, loadMore: c } = re(a), { visibleItems: m, spaceBefore: u, spaceAfter: g } = ne({
    items: s,
    totalItems: n,
    hasNextPage: o,
    isFetchingNextPage: t,
    fetchNextPage: l,
    parentRef: r
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: r, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(
      de,
      {
        className: "flex table-fixed flex-col lg:table",
        "data-testid": "tags-list",
        children: [
          /* @__PURE__ */ e.jsx(ue, { className: "hidden lg:visible! lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(y, { children: [
            /* @__PURE__ */ e.jsx(b, { className: "w-auto px-4", children: "Tag" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "Slug" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "No. of posts" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-20 px-4" })
          ] }) }),
          /* @__PURE__ */ e.jsxs(ge, { className: "flex flex-col lg:table-row-group", children: [
            /* @__PURE__ */ e.jsx(M, { height: u }),
            m.map(({ key: j, virtualItem: W, item: p, props: _ }) => W.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Ge, { ..._ }, j) : /* @__PURE__ */ e.jsxs(
              y,
              {
                ..._,
                className: "grid w-full grid-cols-[1fr_5rem] items-center gap-x-4 p-2 hover:bg-muted/50 md:grid-cols-[1fr_auto_5rem] lg:table-row lg:p-0 [&.group:hover_td]:bg-transparent",
                "data-testid": "tag-list-row",
                children: [
                  /* @__PURE__ */ e.jsxs(h, { className: "static col-start-1 col-end-1 row-start-1 row-end-1 flex min-w-0 flex-col p-0 md:relative lg:table-cell lg:w-1/2 lg:p-4 xl:w-3/5", children: [
                    /* @__PURE__ */ e.jsx(
                      "a",
                      {
                        className: "before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[100vw]",
                        href: `#/tags/${p.slug}`,
                        children: /* @__PURE__ */ e.jsx("span", { className: "block truncate pb-1 text-lg font-medium", children: p.name })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "block truncate text-muted-foreground", children: p.description })
                  ] }),
                  /* @__PURE__ */ e.jsx(h, { className: "col-start-1 col-end-1 row-start-2 row-end-2 flex p-0 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate", children: p.slug }) }),
                  /* @__PURE__ */ e.jsx(h, { className: "col-start-1 col-end-1 row-start-3 row-end-3 flex p-0 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 lg:table-cell lg:p-4", children: p.count?.posts ? /* @__PURE__ */ e.jsx(
                    "a",
                    {
                      className: "relative z-10 -m-4 inline-block p-4 hover:underline",
                      href: `#/posts?tag=${p.slug}`,
                      children: `${Z(p.count?.posts)}  ${p.count?.posts === 1 ? "post" : "posts"}`
                    }
                  ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "0 posts" }) }),
                  /* @__PURE__ */ e.jsx(h, { className: "col-start-2 col-end-2 row-start-1 row-end-3 p-0 md:col-start-3 md:col-end-3 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx(
                    N,
                    {
                      "aria-hidden": "true",
                      className: "w-12",
                      size: "icon",
                      tabIndex: -1,
                      variant: "outline",
                      children: /* @__PURE__ */ e.jsx(pe, {})
                    }
                  ) })
                ]
              },
              j
            )),
            /* @__PURE__ */ e.jsx(M, { height: g })
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsx(ie, { isLoading: t, onClick: c })
  ] });
}
const Ie = "TagsResponseType", Re = he({
  dataType: Ie,
  path: "/tags/",
  defaultNextPageParams: (s, a) => s.meta?.pagination.next ? {
    ...a,
    page: (s.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (s) => {
    const { pages: a } = s, o = a.flatMap((l) => l.tags), t = a[a.length - 1].meta;
    return {
      tags: o,
      meta: t,
      isEnd: t ? t.pagination.pages === t.pagination.page : !0
    };
  }
}), _e = ({
  filter: s,
  ...a
}) => {
  const o = Object.entries(s).map(([t, l]) => `${t}:${l}`).join(",");
  return Re({
    ...a,
    searchParams: {
      limit: "100",
      order: "name asc",
      include: "count.posts",
      filter: o,
      ...a.searchParams
    }
  });
}, He = () => {
  const { search: s } = ee(), o = new URLSearchParams(s).get("type") ?? "public", {
    data: t,
    isError: l,
    isLoading: r,
    isFetchingNextPage: n,
    fetchNextPage: i,
    hasNextPage: c
  } = _e({
    filter: {
      visibility: o
    }
  });
  return /* @__PURE__ */ e.jsxs(ye, { children: [
    /* @__PURE__ */ e.jsx(Pe, { currentTab: o }),
    /* @__PURE__ */ e.jsx(Te, { children: r ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(fe, { size: "lg" }) }) : l ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading tags" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(N, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : t?.tags.length ? /* @__PURE__ */ e.jsx(
      Ce,
      {
        fetchNextPage: i,
        hasNextPage: c,
        isFetchingNextPage: n,
        items: t?.tags ?? [],
        totalItems: t?.meta?.pagination?.total ?? 0
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      me,
      {
        actions: /* @__PURE__ */ e.jsx(N, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { href: "#/tags/new", children: "Create a new tag" }) }),
        title: "Start organizing your content",
        children: /* @__PURE__ */ e.jsx(xe, {})
      }
    ) }) })
  ] });
};
export {
  He as default
};
//# sourceMappingURL=tags-BoMt6Ce3.mjs.map
