import { h as s } from "./createLucideIcon-DcUfTBt_.mjs";
import { l as c, j as l, c as f } from "./index-BAF0YXsp.mjs";
import { c as y } from "./button-ufGBCcsV.mjs";
var h = [
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
], x = h.reduce((t, r) => {
  const e = y(`Primitive.${r}`), i = c((o, a) => {
    const { asChild: p, ...n } = o, u = p ? e : r;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(u, { ...n, ref: a });
  });
  return i.displayName = `Primitive.${r}`, { ...t, [r]: i };
}, {}), N = "Separator", d = "horizontal", k = ["horizontal", "vertical"], m = c((t, r) => {
  const { decorative: e, orientation: i = d, ...o } = t, a = w(i) ? i : d, n = e ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    x.div,
    {
      "data-orientation": a,
      ...n,
      ...o,
      ref: r
    }
  );
});
m.displayName = N;
function w(t) {
  return k.includes(t);
}
var v = m;
const E = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], _ = s("ellipsis", E);
const S = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], j = s("external-link", S);
const g = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], b = s("user", g), z = c(
  ({ className: t, orientation: r = "horizontal", decorative: e = !0, ...i }, o) => /* @__PURE__ */ l.jsx(
    v,
    {
      ref: o,
      className: f(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: e,
      orientation: r,
      ...i
    }
  )
);
z.displayName = v.displayName;
const I = (t) => {
  for (const r of t)
    if (r.key === "timezone") {
      const e = r.value;
      if (typeof e != "string")
        throw new TypeError("Site timezone setting is not a string");
      return e;
    }
  return "Etc/UTC";
};
export {
  _ as E,
  x as P,
  z as S,
  b as U,
  j as a,
  I as g
};
//# sourceMappingURL=get-site-timezone-DlXmHA3y.mjs.map
