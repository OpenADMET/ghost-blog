import { a as n, b as p, c as i, d as c } from "./hooks-BEngBys9.mjs";
const a = "PostsResponseType", g = n({
  dataType: a,
  path: "/posts/"
}), d = c({
  dataType: a,
  path: "/posts/",
  defaultNextPageParams: (t, e) => {
    if (t.meta?.pagination.next)
      return {
        ...e,
        page: t.meta.pagination.next.toString()
      };
  },
  returnData: (t) => {
    const { pages: e } = t, o = e.flatMap((r) => r.posts), s = e[e.length - 1].meta;
    return {
      posts: o,
      meta: s,
      isEnd: s ? s.pagination.pages === s.pagination.page : !0
    };
  }
}), l = i({
  dataType: a,
  path: (t) => `/posts/${t}/`
}), y = p({
  method: "DELETE",
  path: (t) => `/posts/${t}/`
}), u = "SettingsResponseType", h = n({
  dataType: u,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
});
export {
  y as a,
  h as b,
  d as c,
  l as g,
  g as u
};
//# sourceMappingURL=settings-CZYL6Jhr.mjs.map
