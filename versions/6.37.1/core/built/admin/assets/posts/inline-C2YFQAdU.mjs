import { R as l, j as f, c as m } from "./index-BAF0YXsp.mjs";
const p = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
  "2xl": "gap-8"
}, d = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, u = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, x = l.forwardRef(
  function({
    as: e = "div",
    className: t,
    gap: s = "md",
    align: n = "center",
    justify: a = "start",
    wrap: r = !1,
    ...i
  }, o) {
    const c = e;
    return /* @__PURE__ */ f.jsx(
      c,
      {
        ref: o,
        className: m(
          "flex flex-row",
          r ? "flex-wrap" : "flex-nowrap",
          p[s],
          d[n],
          u[a],
          t
        ),
        ...i
      }
    );
  }
);
x.displayName = "Inline";
export {
  d as A,
  p as G,
  x as I,
  u as J
};
//# sourceMappingURL=inline-C2YFQAdU.mjs.map
