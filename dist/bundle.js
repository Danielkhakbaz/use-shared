/*! For license information please see bundle.js.LICENSE.txt */
!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("react")))
    : "function" == typeof define && define.amd
      ? define(["React"], r)
      : "object" == typeof exports
        ? (exports["use-shared"] = r(require("react")))
        : (e["use-shared"] = r(e.React));
})(self, (e) =>
  (() => {
    "use strict";
    var r = {
        20: (e, r, t) => {
          var o = t(156),
            n = Symbol.for("react.element"),
            a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
            u =
              o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            l = { key: !0, ref: !0, __self: !0, __source: !0 };
          r.jsx = function (e, r, t) {
            var o,
              i = {},
              f = null,
              c = null;
            for (o in (void 0 !== t && (f = "" + t),
            void 0 !== r.key && (f = "" + r.key),
            void 0 !== r.ref && (c = r.ref),
            r))
              a.call(r, o) && !l.hasOwnProperty(o) && (i[o] = r[o]);
            if (e && e.defaultProps)
              for (o in (r = e.defaultProps)) void 0 === i[o] && (i[o] = r[o]);
            return {
              $$typeof: n,
              type: e,
              key: f,
              ref: c,
              props: i,
              _owner: u.current,
            };
          };
        },
        848: (e, r, t) => {
          e.exports = t(20);
        },
        156: (r) => {
          r.exports = e;
        },
      },
      t = {};
    function o(e) {
      var n = t[e];
      if (void 0 !== n) return n.exports;
      var a = (t[e] = { exports: {} });
      return r[e](a, a.exports, o), a.exports;
    }
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return o.d(r, { a: r }), r;
    }),
      (o.d = (e, r) => {
        for (var t in r)
          o.o(r, t) &&
            !o.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        o.r(n), o.d(n, { ShareProvider: () => u, useShared: () => l });
        var e = o(156),
          r = o(848);
        function t(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
          return o;
        }
        var a = (0, e.createContext)(),
          u = function (o) {
            var n,
              u,
              l = o.state,
              i = o.children,
              f =
                ((n = (0, e.useState)(l)),
                (u = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(n) ||
                  (function (e, r) {
                    var t =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != t) {
                      var o,
                        n,
                        a,
                        u,
                        l = [],
                        i = !0,
                        f = !1;
                      try {
                        if (((a = (t = t.call(e)).next), 0 === r)) {
                          if (Object(t) !== t) return;
                          i = !1;
                        } else
                          for (
                            ;
                            !(i = (o = a.call(t)).done) &&
                            (l.push(o.value), l.length !== r);
                            i = !0
                          );
                      } catch (e) {
                        (f = !0), (n = e);
                      } finally {
                        try {
                          if (
                            !i &&
                            null != t.return &&
                            ((u = t.return()), Object(u) !== u)
                          )
                            return;
                        } finally {
                          if (f) throw n;
                        }
                      }
                      return l;
                    }
                  })(n, u) ||
                  (function (e, r) {
                    if (e) {
                      if ("string" == typeof e) return t(e, r);
                      var o = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === o &&
                          e.constructor &&
                          (o = e.constructor.name),
                        "Map" === o || "Set" === o
                          ? Array.from(e)
                          : "Arguments" === o ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                            ? t(e, r)
                            : void 0
                      );
                    }
                  })(n, u) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })()),
              c = f[0],
              s = f[1];
            return (0, r.jsx)(a.Provider, {
              value: { data: c, setData: s },
              children: i,
            });
          },
          l = function () {
            var r = (0, e.useContext)(a);
            return [r.data, r.setData];
          };
      })(),
      n
    );
  })(),
);
