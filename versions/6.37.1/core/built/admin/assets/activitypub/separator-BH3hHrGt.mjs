import { ae as s, j as l, af as v, s as m } from "./index-4hBKVHQG.mjs";
var N = "Separator", n = "horizontal", f = ["horizontal", "vertical"], p = s((a, r) => {
  const { decorative: t, orientation: o = n, ...i } = a, e = u(o) ? o : n, d = t ? { role: "none" } : { "aria-orientation": e === "vertical" ? e : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    v.div,
    {
      "data-orientation": e,
      ...d,
      ...i,
      ref: r
    }
  );
});
p.displayName = N;
function u(a) {
  return f.includes(a);
}
var c = p;
const h = s(
  ({ className: a, orientation: r = "horizontal", decorative: t = !0, ...o }, i) => /* @__PURE__ */ l.jsx(
    c,
    {
      ref: i,
      className: m(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a
      ),
      decorative: t,
      orientation: r,
      ...o
    }
  )
);
h.displayName = c.displayName;
export {
  h as S
};
//# sourceMappingURL=separator-BH3hHrGt.mjs.map
