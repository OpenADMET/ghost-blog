import { d as h, u as P, j as k, x as E, y as I } from "./index-BAF0YXsp.mjs";
import { a as d } from "./hooks-BEngBys9.mjs";
import { b as C, u as D } from "./settings-CZYL6Jhr.mjs";
const N = "TinybirdTokenResponseType", w = {
  refetchInterval: 7200 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 6600 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, B = d({
  dataType: N,
  path: "/tinybird/token/"
}), O = (o = {}) => B({
  ...w,
  ...o
});
let T = !1;
const R = (o = {}) => {
  const { enabled: s = !0 } = o, t = O({ enabled: s }), e = t.data?.tinybird?.token, n = t.error;
  return !t.isLoading && s && t.data && !e && !T && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), T = !0), {
    token: e && typeof e == "string" ? e : void 0,
    isLoading: t.isLoading,
    error: n,
    refetch: t.refetch
  };
}, U = "ConfigResponseType", Y = d({
  dataType: U,
  path: "/config/"
}), x = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_90_DAYS: { name: "Last 90 days", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 372 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, q = {
  // Countries
  US: "United States",
  TWN: "Taiwan",
  TW: "Taiwan",
  CN: "China",
  // Technical
  "mobile-ios": "iOS",
  "mobile-android": "Android",
  macos: "macOS",
  // Sources
  "google.com": "Google",
  "ghost.org": "Ghost",
  "bing.com": "Bing",
  "bsky.app": "Bluesky",
  "yahoo.com": "Yahoo",
  "duckduckgo.com": "DuckDuckGo"
}, z = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], a = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, H = a.PUBLIC | a.FREE | a.PAID, K = [
  { name: "Public visitors", value: "undefined", bit: a.PUBLIC },
  { name: "Free members", value: "free", bit: a.FREE },
  { name: "Paid members", value: "paid", bit: a.PAID }
], G = "SiteResponseType", j = d({
  dataType: G,
  path: "/site/"
}), y = I(void 0), Q = () => {
  const o = E(y);
  if (!o)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return o;
}, F = ({ children: o }) => {
  const { postId: s } = h();
  if (!s)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const t = Y(), e = j(), [n, m] = P(x.LAST_30_DAYS.value), u = C(), i = !!t.data?.config?.stats, r = R({ enabled: i }), { data: { posts: [p] } = { posts: [] }, isLoading: b } = D({
    searchParams: {
      filter: `id:${s}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), l = [t, e, u], f = l.map((c) => c.error).find(Boolean), A = i ? r.error : null, g = f || A, L = l.some((c) => c.isLoading), S = i ? r.isLoading : !1, _ = L || S;
  if (g)
    throw g;
  const v = e.data?.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ k.jsx(y.Provider, { value: {
    data: t.data?.config,
    site: v,
    statsConfig: t.data?.config?.stats,
    tinybirdToken: r.token,
    isLoading: _,
    range: n,
    setRange: m,
    settings: u.data?.settings || [],
    postId: s,
    post: p,
    isPostLoading: b
  }, children: o });
}, V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F,
  useGlobalData: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  H as A,
  x as S,
  z as U,
  q as a,
  K as b,
  a as c,
  R as d,
  V as p,
  Q as u
};
//# sourceMappingURL=post-analytics-context-B1r3HBrp.mjs.map
