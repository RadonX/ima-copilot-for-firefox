var nm = Object.defineProperty;
var np = (r) => {
  throw TypeError(r);
};
var rm = (r, i, o) =>
  i in r
    ? nm(r, i, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (r[i] = o);
var De = (r, i, o) => rm(r, typeof i != "symbol" ? i + "" : i, o),
  rp = (r, i, o) => i.has(r) || np("Cannot " + o);
var Lt = (r, i, o) => (
    rp(r, i, "read from private field"), o ? o.call(r) : i.get(r)
  ),
  _i = (r, i, o) =>
    i.has(r)
      ? np("Cannot add the same private member more than once")
      : i instanceof WeakSet
        ? i.add(r)
        : i.set(r, o),
  Yr = (r, i, o, l) => (
    rp(r, i, "write to private field"), l ? l.call(r, o) : i.set(r, o), o
  );
function im(r, i) {
  for (var o = 0; o < i.length; o++) {
    const l = i[o];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const p in l)
        if (p !== "default" && !(p in r)) {
          const m = Object.getOwnPropertyDescriptor(l, p);
          m &&
            Object.defineProperty(
              r,
              p,
              m.get ? m : { enumerable: !0, get: () => l[p] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) l(p);
  new MutationObserver((p) => {
    for (const m of p)
      if (m.type === "childList")
        for (const v of m.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && l(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(p) {
    const m = {};
    return (
      p.integrity && (m.integrity = p.integrity),
      p.referrerPolicy && (m.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : p.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function l(p) {
    if (p.ep) return;
    p.ep = !0;
    const m = o(p);
    fetch(p.href, m);
  }
})();
(function (r, i) {
  r.WxLogin = function (o) {
    let l = "default";
    o.self_redirect === !0
      ? (l = "true")
      : o.self_redirect === !1 && (l = "false");
    const p = i.createElement("iframe");
    let m = `https://open.weixin.qq.com/connect/qrconnect?appid=${o.appid}&scope=${o.scope}&redirect_uri=${o.redirect_uri}&state=${o.state}&login_type=jssdk&self_redirect=${l}&styletype=${o.styletype || ""}&sizetype=${o.sizetype || ""}&bgcolor=${o.bgcolor || ""}&rst=${o.rst || ""}`;
    (m += o.style ? `&style=${o.style}` : ""),
      (m += o.href ? `&href=${o.href}` : ""),
      (m += o.lang === "en" ? "&lang=en" : ""),
      (m += o.stylelite === 1 ? "&stylelite=1" : ""),
      (m += o.fast_login === 0 ? "&fast_login=0" : ""),
      (p.src = m),
      (p.frameBorder = "0"),
      (p.allowTransparency = "true"),
      (p.scrolling = "no"),
      (p.width = "300px"),
      (p.height = "400px");
    const v = i.getElementById(o.id);
    (v.innerHTML = ""), v.appendChild(p);
  };
})(window, document);
var ip =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Yu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Pc = { exports: {} },
  da = {},
  Tc = { exports: {} },
  at = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function om() {
  if (op) return at;
  op = 1;
  var r = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    v = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    D = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    G = Symbol.iterator;
  function se(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (G && N[G]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var Z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ie = Object.assign,
    V = {};
  function J(N, ee, fe) {
    (this.props = N),
      (this.context = ee),
      (this.refs = V),
      (this.updater = fe || Z);
  }
  (J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (N, ee) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, N, ee, "setState");
    }),
    (J.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function _e() {}
  _e.prototype = J.prototype;
  function te(N, ee, fe) {
    (this.props = N),
      (this.context = ee),
      (this.refs = V),
      (this.updater = fe || Z);
  }
  var me = (te.prototype = new _e());
  (me.constructor = te), ie(me, J.prototype), (me.isPureReactComponent = !0);
  var Ze = Array.isArray,
    Ge = Object.prototype.hasOwnProperty,
    Et = { current: null },
    Qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fn(N, ee, fe) {
    var Ve,
      Je = {},
      be = null,
      ut = null;
    if (ee != null)
      for (Ve in (ee.ref !== void 0 && (ut = ee.ref),
      ee.key !== void 0 && (be = "" + ee.key),
      ee))
        Ge.call(ee, Ve) && !Qe.hasOwnProperty(Ve) && (Je[Ve] = ee[Ve]);
    var ot = arguments.length - 2;
    if (ot === 1) Je.children = fe;
    else if (1 < ot) {
      for (var nt = Array(ot), _t = 0; _t < ot; _t++)
        nt[_t] = arguments[_t + 2];
      Je.children = nt;
    }
    if (N && N.defaultProps)
      for (Ve in ((ot = N.defaultProps), ot))
        Je[Ve] === void 0 && (Je[Ve] = ot[Ve]);
    return {
      $$typeof: r,
      type: N,
      key: be,
      ref: ut,
      props: Je,
      _owner: Et.current,
    };
  }
  function jn(N, ee) {
    return {
      $$typeof: r,
      type: N.type,
      key: ee,
      ref: N.ref,
      props: N.props,
      _owner: N._owner,
    };
  }
  function Fn(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }
  function un(N) {
    var ee = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (fe) {
        return ee[fe];
      })
    );
  }
  var Kt = /\/+/g;
  function xt(N, ee) {
    return typeof N == "object" && N !== null && N.key != null
      ? un("" + N.key)
      : ee.toString(36);
  }
  function on(N, ee, fe, Ve, Je) {
    var be = typeof N;
    (be === "undefined" || be === "boolean") && (N = null);
    var ut = !1;
    if (N === null) ut = !0;
    else
      switch (be) {
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case r:
            case i:
              ut = !0;
          }
      }
    if (ut)
      return (
        (ut = N),
        (Je = Je(ut)),
        (N = Ve === "" ? "." + xt(ut, 0) : Ve),
        Ze(Je)
          ? ((fe = ""),
            N != null && (fe = N.replace(Kt, "$&/") + "/"),
            on(Je, ee, fe, "", function (_t) {
              return _t;
            }))
          : Je != null &&
            (Fn(Je) &&
              (Je = jn(
                Je,
                fe +
                  (!Je.key || (ut && ut.key === Je.key)
                    ? ""
                    : ("" + Je.key).replace(Kt, "$&/") + "/") +
                  N,
              )),
            ee.push(Je)),
        1
      );
    if (((ut = 0), (Ve = Ve === "" ? "." : Ve + ":"), Ze(N)))
      for (var ot = 0; ot < N.length; ot++) {
        be = N[ot];
        var nt = Ve + xt(be, ot);
        ut += on(be, ee, fe, nt, Je);
      }
    else if (((nt = se(N)), typeof nt == "function"))
      for (N = nt.call(N), ot = 0; !(be = N.next()).done; )
        (be = be.value),
          (nt = Ve + xt(be, ot++)),
          (ut += on(be, ee, fe, nt, Je));
    else if (be === "object")
      throw (
        ((ee = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (ee === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : ee) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return ut;
  }
  function dn(N, ee, fe) {
    if (N == null) return N;
    var Ve = [],
      Je = 0;
    return (
      on(N, Ve, "", "", function (be) {
        return ee.call(fe, be, Je++);
      }),
      Ve
    );
  }
  function bt(N) {
    if (N._status === -1) {
      var ee = N._result;
      (ee = ee()),
        ee.then(
          function (fe) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = fe));
          },
          function (fe) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = fe));
          },
        ),
        N._status === -1 && ((N._status = 0), (N._result = ee));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var et = { current: null },
    ye = { transition: null },
    Be = {
      ReactCurrentDispatcher: et,
      ReactCurrentBatchConfig: ye,
      ReactCurrentOwner: Et,
    };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (at.Children = {
      map: dn,
      forEach: function (N, ee, fe) {
        dn(
          N,
          function () {
            ee.apply(this, arguments);
          },
          fe,
        );
      },
      count: function (N) {
        var ee = 0;
        return (
          dn(N, function () {
            ee++;
          }),
          ee
        );
      },
      toArray: function (N) {
        return (
          dn(N, function (ee) {
            return ee;
          }) || []
        );
      },
      only: function (N) {
        if (!Fn(N))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return N;
      },
    }),
    (at.Component = J),
    (at.Fragment = o),
    (at.Profiler = p),
    (at.PureComponent = te),
    (at.StrictMode = l),
    (at.Suspense = _),
    (at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be),
    (at.act = Se),
    (at.cloneElement = function (N, ee, fe) {
      if (N == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            N +
            ".",
        );
      var Ve = ie({}, N.props),
        Je = N.key,
        be = N.ref,
        ut = N._owner;
      if (ee != null) {
        if (
          (ee.ref !== void 0 && ((be = ee.ref), (ut = Et.current)),
          ee.key !== void 0 && (Je = "" + ee.key),
          N.type && N.type.defaultProps)
        )
          var ot = N.type.defaultProps;
        for (nt in ee)
          Ge.call(ee, nt) &&
            !Qe.hasOwnProperty(nt) &&
            (Ve[nt] = ee[nt] === void 0 && ot !== void 0 ? ot[nt] : ee[nt]);
      }
      var nt = arguments.length - 2;
      if (nt === 1) Ve.children = fe;
      else if (1 < nt) {
        ot = Array(nt);
        for (var _t = 0; _t < nt; _t++) ot[_t] = arguments[_t + 2];
        Ve.children = ot;
      }
      return {
        $$typeof: r,
        type: N.type,
        key: Je,
        ref: be,
        props: Ve,
        _owner: ut,
      };
    }),
    (at.createContext = function (N) {
      return (
        (N = {
          $$typeof: v,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (N.Provider = { $$typeof: m, _context: N }),
        (N.Consumer = N)
      );
    }),
    (at.createElement = fn),
    (at.createFactory = function (N) {
      var ee = fn.bind(null, N);
      return (ee.type = N), ee;
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (N) {
      return { $$typeof: R, render: N };
    }),
    (at.isValidElement = Fn),
    (at.lazy = function (N) {
      return { $$typeof: X, _payload: { _status: -1, _result: N }, _init: bt };
    }),
    (at.memo = function (N, ee) {
      return { $$typeof: D, type: N, compare: ee === void 0 ? null : ee };
    }),
    (at.startTransition = function (N) {
      var ee = ye.transition;
      ye.transition = {};
      try {
        N();
      } finally {
        ye.transition = ee;
      }
    }),
    (at.unstable_act = Se),
    (at.useCallback = function (N, ee) {
      return et.current.useCallback(N, ee);
    }),
    (at.useContext = function (N) {
      return et.current.useContext(N);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (N) {
      return et.current.useDeferredValue(N);
    }),
    (at.useEffect = function (N, ee) {
      return et.current.useEffect(N, ee);
    }),
    (at.useId = function () {
      return et.current.useId();
    }),
    (at.useImperativeHandle = function (N, ee, fe) {
      return et.current.useImperativeHandle(N, ee, fe);
    }),
    (at.useInsertionEffect = function (N, ee) {
      return et.current.useInsertionEffect(N, ee);
    }),
    (at.useLayoutEffect = function (N, ee) {
      return et.current.useLayoutEffect(N, ee);
    }),
    (at.useMemo = function (N, ee) {
      return et.current.useMemo(N, ee);
    }),
    (at.useReducer = function (N, ee, fe) {
      return et.current.useReducer(N, ee, fe);
    }),
    (at.useRef = function (N) {
      return et.current.useRef(N);
    }),
    (at.useState = function (N) {
      return et.current.useState(N);
    }),
    (at.useSyncExternalStore = function (N, ee, fe) {
      return et.current.useSyncExternalStore(N, ee, fe);
    }),
    (at.useTransition = function () {
      return et.current.useTransition();
    }),
    (at.version = "18.3.1"),
    at
  );
}
var sp;
function Zu() {
  return sp || ((sp = 1), (Tc.exports = om())), Tc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function sm() {
  if (ap) return da;
  ap = 1;
  var r = Zu(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    p = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(R, _, D) {
    var X,
      G = {},
      se = null,
      Z = null;
    D !== void 0 && (se = "" + D),
      _.key !== void 0 && (se = "" + _.key),
      _.ref !== void 0 && (Z = _.ref);
    for (X in _) l.call(_, X) && !m.hasOwnProperty(X) && (G[X] = _[X]);
    if (R && R.defaultProps)
      for (X in ((_ = R.defaultProps), _)) G[X] === void 0 && (G[X] = _[X]);
    return {
      $$typeof: i,
      type: R,
      key: se,
      ref: Z,
      props: G,
      _owner: p.current,
    };
  }
  return (da.Fragment = o), (da.jsx = v), (da.jsxs = v), da;
}
var up;
function am() {
  return up || ((up = 1), (Pc.exports = sm())), Pc.exports;
}
var Oe = am(),
  lp = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var cp;
function um() {
  if (cp) return lp;
  cp = 1;
  var r;
  return (
    (function (i) {
      (function (o) {
        var l =
            typeof globalThis == "object"
              ? globalThis
              : typeof ip == "object"
                ? ip
                : typeof self == "object"
                  ? self
                  : typeof this == "object"
                    ? this
                    : _(),
          p = m(i);
        typeof l.Reflect < "u" && (p = m(l.Reflect, p)),
          o(p, l),
          typeof l.Reflect > "u" && (l.Reflect = i);
        function m(D, X) {
          return function (G, se) {
            Object.defineProperty(D, G, {
              configurable: !0,
              writable: !0,
              value: se,
            }),
              X && X(G, se);
          };
        }
        function v() {
          try {
            return Function("return this;")();
          } catch {}
        }
        function R() {
          try {
            return (0, eval)("(function() { return this; })()");
          } catch {}
        }
        function _() {
          return v() || R();
        }
      })(function (o, l) {
        var p = Object.prototype.hasOwnProperty,
          m = typeof Symbol == "function",
          v =
            m && typeof Symbol.toPrimitive < "u"
              ? Symbol.toPrimitive
              : "@@toPrimitive",
          R =
            m && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator",
          _ = typeof Object.create == "function",
          D = { __proto__: [] } instanceof Array,
          X = !_ && !D,
          G = {
            create: _
              ? function () {
                  return Ht(Object.create(null));
                }
              : D
                ? function () {
                    return Ht({ __proto__: null });
                  }
                : function () {
                    return Ht({});
                  },
            has: X
              ? function (M, W) {
                  return p.call(M, W);
                }
              : function (M, W) {
                  return W in M;
                },
            get: X
              ? function (M, W) {
                  return p.call(M, W) ? M[W] : void 0;
                }
              : function (M, W) {
                  return M[W];
                },
          },
          se = Object.getPrototypeOf(Function),
          Z =
            typeof Map == "function" &&
            typeof Map.prototype.entries == "function"
              ? Map
              : rt(),
          ie =
            typeof Set == "function" &&
            typeof Set.prototype.entries == "function"
              ? Set
              : Rt(),
          V = typeof WeakMap == "function" ? WeakMap : jt(),
          J = m ? Symbol.for("@reflect-metadata:registry") : void 0,
          _e = Fe(),
          te = Ae(_e);
        function me(M, W, Q, ae) {
          if (fe(Q)) {
            if (!_r(M)) throw new TypeError();
            if (!$n(W)) throw new TypeError();
            return xt(M, W);
          } else {
            if (!_r(M)) throw new TypeError();
            if (!be(W)) throw new TypeError();
            if (!be(ae) && !fe(ae) && !Ve(ae)) throw new TypeError();
            return Ve(ae) && (ae = void 0), (Q = sn(Q)), on(M, W, Q, ae);
          }
        }
        o("decorate", me);
        function Ze(M, W) {
          function Q(ae, Pe) {
            if (!be(ae)) throw new TypeError();
            if (!fe(Pe) && !Cn(Pe)) throw new TypeError();
            Be(M, W, ae, Pe);
          }
          return Q;
        }
        o("metadata", Ze);
        function Ge(M, W, Q, ae) {
          if (!be(Q)) throw new TypeError();
          return fe(ae) || (ae = sn(ae)), Be(M, W, Q, ae);
        }
        o("defineMetadata", Ge);
        function Et(M, W, Q) {
          if (!be(W)) throw new TypeError();
          return fe(Q) || (Q = sn(Q)), dn(M, W, Q);
        }
        o("hasMetadata", Et);
        function Qe(M, W, Q) {
          if (!be(W)) throw new TypeError();
          return fe(Q) || (Q = sn(Q)), bt(M, W, Q);
        }
        o("hasOwnMetadata", Qe);
        function fn(M, W, Q) {
          if (!be(W)) throw new TypeError();
          return fe(Q) || (Q = sn(Q)), et(M, W, Q);
        }
        o("getMetadata", fn);
        function jn(M, W, Q) {
          if (!be(W)) throw new TypeError();
          return fe(Q) || (Q = sn(Q)), ye(M, W, Q);
        }
        o("getOwnMetadata", jn);
        function Fn(M, W) {
          if (!be(M)) throw new TypeError();
          return fe(W) || (W = sn(W)), Se(M, W);
        }
        o("getMetadataKeys", Fn);
        function un(M, W) {
          if (!be(M)) throw new TypeError();
          return fe(W) || (W = sn(W)), N(M, W);
        }
        o("getOwnMetadataKeys", un);
        function Kt(M, W, Q) {
          if (!be(W)) throw new TypeError();
          if ((fe(Q) || (Q = sn(Q)), !be(W))) throw new TypeError();
          fe(Q) || (Q = sn(Q));
          var ae = st(W, Q, !1);
          return fe(ae) ? !1 : ae.OrdinaryDeleteMetadata(M, W, Q);
        }
        o("deleteMetadata", Kt);
        function xt(M, W) {
          for (var Q = M.length - 1; Q >= 0; --Q) {
            var ae = M[Q],
              Pe = ae(W);
            if (!fe(Pe) && !Ve(Pe)) {
              if (!$n(Pe)) throw new TypeError();
              W = Pe;
            }
          }
          return W;
        }
        function on(M, W, Q, ae) {
          for (var Pe = M.length - 1; Pe >= 0; --Pe) {
            var kt = M[Pe],
              Pt = kt(W, Q, ae);
            if (!fe(Pt) && !Ve(Pt)) {
              if (!be(Pt)) throw new TypeError();
              ae = Pt;
            }
          }
          return ae;
        }
        function dn(M, W, Q) {
          var ae = bt(M, W, Q);
          if (ae) return !0;
          var Pe = H(W);
          return Ve(Pe) ? !1 : dn(M, Pe, Q);
        }
        function bt(M, W, Q) {
          var ae = st(W, Q, !1);
          return fe(ae) ? !1 : nt(ae.OrdinaryHasOwnMetadata(M, W, Q));
        }
        function et(M, W, Q) {
          var ae = bt(M, W, Q);
          if (ae) return ye(M, W, Q);
          var Pe = H(W);
          if (!Ve(Pe)) return et(M, Pe, Q);
        }
        function ye(M, W, Q) {
          var ae = st(W, Q, !1);
          if (!fe(ae)) return ae.OrdinaryGetOwnMetadata(M, W, Q);
        }
        function Be(M, W, Q, ae) {
          var Pe = st(Q, ae, !0);
          Pe.OrdinaryDefineOwnMetadata(M, W, Q, ae);
        }
        function Se(M, W) {
          var Q = N(M, W),
            ae = H(M);
          if (ae === null) return Q;
          var Pe = Se(ae, W);
          if (Pe.length <= 0) return Q;
          if (Q.length <= 0) return Pe;
          for (
            var kt = new ie(), Pt = [], Ke = 0, ve = Q;
            Ke < ve.length;
            Ke++
          ) {
            var Ee = ve[Ke],
              we = kt.has(Ee);
            we || (kt.add(Ee), Pt.push(Ee));
          }
          for (var ke = 0, tt = Pe; ke < tt.length; ke++) {
            var Ee = tt[ke],
              we = kt.has(Ee);
            we || (kt.add(Ee), Pt.push(Ee));
          }
          return Pt;
        }
        function N(M, W) {
          var Q = st(M, W, !1);
          return Q ? Q.OrdinaryOwnMetadataKeys(M, W) : [];
        }
        function ee(M) {
          if (M === null) return 1;
          switch (typeof M) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return M === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function fe(M) {
          return M === void 0;
        }
        function Ve(M) {
          return M === null;
        }
        function Je(M) {
          return typeof M == "symbol";
        }
        function be(M) {
          return typeof M == "object" ? M !== null : typeof M == "function";
        }
        function ut(M, W) {
          switch (ee(M)) {
            case 0:
              return M;
            case 1:
              return M;
            case 2:
              return M;
            case 3:
              return M;
            case 4:
              return M;
            case 5:
              return M;
          }
          var Q = "string",
            ae = E(M, v);
          if (ae !== void 0) {
            var Pe = ae.call(M, Q);
            if (be(Pe)) throw new TypeError();
            return Pe;
          }
          return ot(M);
        }
        function ot(M, W) {
          var Q, ae, Pe;
          {
            var kt = M.toString;
            if (Un(kt)) {
              var ae = kt.call(M);
              if (!be(ae)) return ae;
            }
            var Q = M.valueOf;
            if (Un(Q)) {
              var ae = Q.call(M);
              if (!be(ae)) return ae;
            }
          }
          throw new TypeError();
        }
        function nt(M) {
          return !!M;
        }
        function _t(M) {
          return "" + M;
        }
        function sn(M) {
          var W = ut(M);
          return Je(W) ? W : _t(W);
        }
        function _r(M) {
          return Array.isArray
            ? Array.isArray(M)
            : M instanceof Object
              ? M instanceof Array
              : Object.prototype.toString.call(M) === "[object Array]";
        }
        function Un(M) {
          return typeof M == "function";
        }
        function $n(M) {
          return typeof M == "function";
        }
        function Cn(M) {
          switch (ee(M)) {
            case 3:
              return !0;
            case 4:
              return !0;
            default:
              return !1;
          }
        }
        function L(M, W) {
          return M === W || (M !== M && W !== W);
        }
        function E(M, W) {
          var Q = M[W];
          if (Q != null) {
            if (!Un(Q)) throw new TypeError();
            return Q;
          }
        }
        function k(M) {
          var W = E(M, R);
          if (!Un(W)) throw new TypeError();
          var Q = W.call(M);
          if (!be(Q)) throw new TypeError();
          return Q;
        }
        function w(M) {
          return M.value;
        }
        function x(M) {
          var W = M.next();
          return W.done ? !1 : W;
        }
        function q(M) {
          var W = M.return;
          W && W.call(M);
        }
        function H(M) {
          var W = Object.getPrototypeOf(M);
          if (typeof M != "function" || M === se || W !== se) return W;
          var Q = M.prototype,
            ae = Q && Object.getPrototypeOf(Q);
          if (ae == null || ae === Object.prototype) return W;
          var Pe = ae.constructor;
          return typeof Pe != "function" || Pe === M ? W : Pe;
        }
        function ce() {
          var M;
          !fe(J) &&
            typeof l.Reflect < "u" &&
            !(J in l.Reflect) &&
            typeof l.Reflect.defineMetadata == "function" &&
            (M = ue(l.Reflect));
          var W,
            Q,
            ae,
            Pe = new V(),
            kt = { registerProvider: Pt, getProvider: ve, setProvider: we };
          return kt;
          function Pt(ke) {
            if (!Object.isExtensible(kt))
              throw new Error("Cannot add provider to a frozen registry.");
            switch (!0) {
              case M === ke:
                break;
              case fe(W):
                W = ke;
                break;
              case W === ke:
                break;
              case fe(Q):
                Q = ke;
                break;
              case Q === ke:
                break;
              default:
                ae === void 0 && (ae = new ie()), ae.add(ke);
                break;
            }
          }
          function Ke(ke, tt) {
            if (!fe(W)) {
              if (W.isProviderFor(ke, tt)) return W;
              if (!fe(Q)) {
                if (Q.isProviderFor(ke, tt)) return W;
                if (!fe(ae))
                  for (var ht = k(ae); ; ) {
                    var ft = x(ht);
                    if (!ft) return;
                    var Ce = w(ft);
                    if (Ce.isProviderFor(ke, tt)) return q(ht), Ce;
                  }
              }
            }
            if (!fe(M) && M.isProviderFor(ke, tt)) return M;
          }
          function ve(ke, tt) {
            var ht = Pe.get(ke),
              ft;
            return (
              fe(ht) || (ft = ht.get(tt)),
              fe(ft) &&
                ((ft = Ke(ke, tt)),
                fe(ft) ||
                  (fe(ht) && ((ht = new Z()), Pe.set(ke, ht)), ht.set(tt, ft))),
              ft
            );
          }
          function Ee(ke) {
            if (fe(ke)) throw new TypeError();
            return W === ke || Q === ke || (!fe(ae) && ae.has(ke));
          }
          function we(ke, tt, ht) {
            if (!Ee(ht)) throw new Error("Metadata provider not registered.");
            var ft = ve(ke, tt);
            if (ft !== ht) {
              if (!fe(ft)) return !1;
              var Ce = Pe.get(ke);
              fe(Ce) && ((Ce = new Z()), Pe.set(ke, Ce)), Ce.set(tt, ht);
            }
            return !0;
          }
        }
        function Fe() {
          var M;
          return (
            !fe(J) &&
              be(l.Reflect) &&
              Object.isExtensible(l.Reflect) &&
              (M = l.Reflect[J]),
            fe(M) && (M = ce()),
            !fe(J) &&
              be(l.Reflect) &&
              Object.isExtensible(l.Reflect) &&
              Object.defineProperty(l.Reflect, J, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: M,
              }),
            M
          );
        }
        function Ae(M) {
          var W = new V(),
            Q = {
              isProviderFor: function (Ee, we) {
                var ke = W.get(Ee);
                return fe(ke) ? !1 : ke.has(we);
              },
              OrdinaryDefineOwnMetadata: Pt,
              OrdinaryHasOwnMetadata: Pe,
              OrdinaryGetOwnMetadata: kt,
              OrdinaryOwnMetadataKeys: Ke,
              OrdinaryDeleteMetadata: ve,
            };
          return _e.registerProvider(Q), Q;
          function ae(Ee, we, ke) {
            var tt = W.get(Ee),
              ht = !1;
            if (fe(tt)) {
              if (!ke) return;
              (tt = new Z()), W.set(Ee, tt), (ht = !0);
            }
            var ft = tt.get(we);
            if (fe(ft)) {
              if (!ke) return;
              if (((ft = new Z()), tt.set(we, ft), !M.setProvider(Ee, we, Q)))
                throw (
                  (tt.delete(we),
                  ht && W.delete(Ee),
                  new Error("Wrong provider for target."))
                );
            }
            return ft;
          }
          function Pe(Ee, we, ke) {
            var tt = ae(we, ke, !1);
            return fe(tt) ? !1 : nt(tt.has(Ee));
          }
          function kt(Ee, we, ke) {
            var tt = ae(we, ke, !1);
            if (!fe(tt)) return tt.get(Ee);
          }
          function Pt(Ee, we, ke, tt) {
            var ht = ae(ke, tt, !0);
            ht.set(Ee, we);
          }
          function Ke(Ee, we) {
            var ke = [],
              tt = ae(Ee, we, !1);
            if (fe(tt)) return ke;
            for (var ht = tt.keys(), ft = k(ht), Ce = 0; ; ) {
              var Vn = x(ft);
              if (!Vn) return (ke.length = Ce), ke;
              var ei = w(Vn);
              try {
                ke[Ce] = ei;
              } catch (Fr) {
                try {
                  q(ft);
                } finally {
                  throw Fr;
                }
              }
              Ce++;
            }
          }
          function ve(Ee, we, ke) {
            var tt = ae(we, ke, !1);
            if (fe(tt) || !tt.delete(Ee)) return !1;
            if (tt.size === 0) {
              var ht = W.get(we);
              fe(ht) || (ht.delete(ke), ht.size === 0 && W.delete(ht));
            }
            return !0;
          }
        }
        function ue(M) {
          var W = M.defineMetadata,
            Q = M.hasOwnMetadata,
            ae = M.getOwnMetadata,
            Pe = M.getOwnMetadataKeys,
            kt = M.deleteMetadata,
            Pt = new V(),
            Ke = {
              isProviderFor: function (ve, Ee) {
                var we = Pt.get(ve);
                return !fe(we) && we.has(Ee)
                  ? !0
                  : Pe(ve, Ee).length
                    ? (fe(we) && ((we = new ie()), Pt.set(ve, we)),
                      we.add(Ee),
                      !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: W,
              OrdinaryHasOwnMetadata: Q,
              OrdinaryGetOwnMetadata: ae,
              OrdinaryOwnMetadataKeys: Pe,
              OrdinaryDeleteMetadata: kt,
            };
          return Ke;
        }
        function st(M, W, Q) {
          var ae = _e.getProvider(M, W);
          if (!fe(ae)) return ae;
          if (Q) {
            if (_e.setProvider(M, W, te)) return te;
            throw new Error("Illegal state.");
          }
        }
        function rt() {
          var M = {},
            W = [],
            Q = (function () {
              function Ke(ve, Ee, we) {
                (this._index = 0),
                  (this._keys = ve),
                  (this._values = Ee),
                  (this._selector = we);
              }
              return (
                (Ke.prototype["@@iterator"] = function () {
                  return this;
                }),
                (Ke.prototype[R] = function () {
                  return this;
                }),
                (Ke.prototype.next = function () {
                  var ve = this._index;
                  if (ve >= 0 && ve < this._keys.length) {
                    var Ee = this._selector(this._keys[ve], this._values[ve]);
                    return (
                      ve + 1 >= this._keys.length
                        ? ((this._index = -1),
                          (this._keys = W),
                          (this._values = W))
                        : this._index++,
                      { value: Ee, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                (Ke.prototype.throw = function (ve) {
                  throw (
                    (this._index >= 0 &&
                      ((this._index = -1),
                      (this._keys = W),
                      (this._values = W)),
                    ve)
                  );
                }),
                (Ke.prototype.return = function (ve) {
                  return (
                    this._index >= 0 &&
                      ((this._index = -1),
                      (this._keys = W),
                      (this._values = W)),
                    { value: ve, done: !0 }
                  );
                }),
                Ke
              );
            })(),
            ae = (function () {
              function Ke() {
                (this._keys = []),
                  (this._values = []),
                  (this._cacheKey = M),
                  (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(Ke.prototype, "size", {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (Ke.prototype.has = function (ve) {
                  return this._find(ve, !1) >= 0;
                }),
                (Ke.prototype.get = function (ve) {
                  var Ee = this._find(ve, !1);
                  return Ee >= 0 ? this._values[Ee] : void 0;
                }),
                (Ke.prototype.set = function (ve, Ee) {
                  var we = this._find(ve, !0);
                  return (this._values[we] = Ee), this;
                }),
                (Ke.prototype.delete = function (ve) {
                  var Ee = this._find(ve, !1);
                  if (Ee >= 0) {
                    for (var we = this._keys.length, ke = Ee + 1; ke < we; ke++)
                      (this._keys[ke - 1] = this._keys[ke]),
                        (this._values[ke - 1] = this._values[ke]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      L(ve, this._cacheKey) &&
                        ((this._cacheKey = M), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                (Ke.prototype.clear = function () {
                  (this._keys.length = 0),
                    (this._values.length = 0),
                    (this._cacheKey = M),
                    (this._cacheIndex = -2);
                }),
                (Ke.prototype.keys = function () {
                  return new Q(this._keys, this._values, Pe);
                }),
                (Ke.prototype.values = function () {
                  return new Q(this._keys, this._values, kt);
                }),
                (Ke.prototype.entries = function () {
                  return new Q(this._keys, this._values, Pt);
                }),
                (Ke.prototype["@@iterator"] = function () {
                  return this.entries();
                }),
                (Ke.prototype[R] = function () {
                  return this.entries();
                }),
                (Ke.prototype._find = function (ve, Ee) {
                  if (!L(this._cacheKey, ve)) {
                    this._cacheIndex = -1;
                    for (var we = 0; we < this._keys.length; we++)
                      if (L(this._keys[we], ve)) {
                        this._cacheIndex = we;
                        break;
                      }
                  }
                  return (
                    this._cacheIndex < 0 &&
                      Ee &&
                      ((this._cacheIndex = this._keys.length),
                      this._keys.push(ve),
                      this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                Ke
              );
            })();
          return ae;
          function Pe(Ke, ve) {
            return Ke;
          }
          function kt(Ke, ve) {
            return ve;
          }
          function Pt(Ke, ve) {
            return [Ke, ve];
          }
        }
        function Rt() {
          var M = (function () {
            function W() {
              this._map = new Z();
            }
            return (
              Object.defineProperty(W.prototype, "size", {
                get: function () {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (W.prototype.has = function (Q) {
                return this._map.has(Q);
              }),
              (W.prototype.add = function (Q) {
                return this._map.set(Q, Q), this;
              }),
              (W.prototype.delete = function (Q) {
                return this._map.delete(Q);
              }),
              (W.prototype.clear = function () {
                this._map.clear();
              }),
              (W.prototype.keys = function () {
                return this._map.keys();
              }),
              (W.prototype.values = function () {
                return this._map.keys();
              }),
              (W.prototype.entries = function () {
                return this._map.entries();
              }),
              (W.prototype["@@iterator"] = function () {
                return this.keys();
              }),
              (W.prototype[R] = function () {
                return this.keys();
              }),
              W
            );
          })();
          return M;
        }
        function jt() {
          var M = 16,
            W = G.create(),
            Q = ae();
          return (function () {
            function ve() {
              this._key = ae();
            }
            return (
              (ve.prototype.has = function (Ee) {
                var we = Pe(Ee, !1);
                return we !== void 0 ? G.has(we, this._key) : !1;
              }),
              (ve.prototype.get = function (Ee) {
                var we = Pe(Ee, !1);
                return we !== void 0 ? G.get(we, this._key) : void 0;
              }),
              (ve.prototype.set = function (Ee, we) {
                var ke = Pe(Ee, !0);
                return (ke[this._key] = we), this;
              }),
              (ve.prototype.delete = function (Ee) {
                var we = Pe(Ee, !1);
                return we !== void 0 ? delete we[this._key] : !1;
              }),
              (ve.prototype.clear = function () {
                this._key = ae();
              }),
              ve
            );
          })();
          function ae() {
            var ve;
            do ve = "@@WeakMap@@" + Ke();
            while (G.has(W, ve));
            return (W[ve] = !0), ve;
          }
          function Pe(ve, Ee) {
            if (!p.call(ve, Q)) {
              if (!Ee) return;
              Object.defineProperty(ve, Q, { value: G.create() });
            }
            return ve[Q];
          }
          function kt(ve, Ee) {
            for (var we = 0; we < Ee; ++we) ve[we] = (Math.random() * 255) | 0;
            return ve;
          }
          function Pt(ve) {
            if (typeof Uint8Array == "function") {
              var Ee = new Uint8Array(ve);
              return (
                typeof crypto < "u"
                  ? crypto.getRandomValues(Ee)
                  : typeof msCrypto < "u"
                    ? msCrypto.getRandomValues(Ee)
                    : kt(Ee, ve),
                Ee
              );
            }
            return kt(new Array(ve), ve);
          }
          function Ke() {
            var ve = Pt(M);
            (ve[6] = (ve[6] & 79) | 64), (ve[8] = (ve[8] & 191) | 128);
            for (var Ee = "", we = 0; we < M; ++we) {
              var ke = ve[we];
              (we === 4 || we === 6 || we === 8) && (Ee += "-"),
                ke < 16 && (Ee += "0"),
                (Ee += ke.toString(16).toLowerCase());
            }
            return Ee;
          }
        }
        function Ht(M) {
          return (M.__ = void 0), delete M.__, M;
        }
      });
    })(r || (r = {})),
    lp
  );
}
um();
var nn = ((r) => (
  (r[(r.Unknown = 0)] = "Unknown"),
  (r[(r.PDF = 1)] = "PDF"),
  (r[(r.Web = 2)] = "Web"),
  (r[(r.Word = 3)] = "Word"),
  (r[(r.PPT = 4)] = "PPT"),
  (r[(r.WeChatArticle = 6)] = "WeChatArticle"),
  (r[(r.MarkDown = 7)] = "MarkDown"),
  (r[(r.Image = 9)] = "Image"),
  (r[(r.Note = 11)] = "Note"),
  (r[(r.AISession = 12)] = "AISession"),
  (r[(r.Folder = 99)] = "Folder"),
  r
))(nn || {});
nn.Unknown + "",
  nn.PDF + "",
  nn.Web + "",
  nn.Word + "",
  nn.AISession + "",
  nn.Image + "",
  nn.WeChatArticle + "",
  nn.Note + "",
  nn.MarkDown + "",
  nn.PPT + "",
  nn.Folder + "";
nn.PDF, nn.Word, nn.Image, nn.MarkDown, nn.PPT;
nn.WeChatArticle, nn.Note, nn.AISession;
nn.Web;
var ga = ((r) => (
    (r[(r.MediaInit = 0)] = "MediaInit"),
    (r[(r.MediaParsing = 1)] = "MediaParsing"),
    (r[(r.MediaParseSuccess = 2)] = "MediaParseSuccess"),
    (r[(r.MediaParseError = 3)] = "MediaParseError"),
    r
  ))(ga || {}),
  Mo = ((r) => (
    (r.CosError = "CosError"),
    (r.UnsupportMedia = "UnsupportMedia"),
    (r.OversizeFile = "OversizeFile"),
    (r.ZeroSizeFile = "ZeroSizeFile"),
    (r.CreateMediaError = "CreateMediaError"),
    (r.UserSpaceShortage = "UserSpaceShortage"),
    (r.UserSpaceError = "UserSpaceError"),
    (r.UserCancel = "UserCancel"),
    r
  ))(Mo || {}),
  Mr = ((r) => (
    (r.Init = "init"),
    (r.WaitUpload = "waitUpload"),
    (r.Uploading = "uploading"),
    (r.UploadError = "uploadError"),
    (r.UploadPause = "uploadPause"),
    (r.FinishUploadError = "finishUploadError"),
    (r.UploadDeadEndError = "UploadDeadEndError"),
    (r.WaitParse = "waitParse"),
    (r.Parsing = "parsing"),
    (r.ParsingError = "parsingError"),
    (r.Finish = "finish"),
    (r.Error = "error"),
    r
  ))(Mr || {}),
  zc = ((r) => (
    (r[(r.InvalidResp = -9999)] = "InvalidResp"),
    (r[(r.Success = 0)] = "Success"),
    (r[(r.OverQps = 3)] = "OverQps"),
    (r[(r.ClientAbort = 4)] = "ClientAbort"),
    (r[(r.BetaNoQuota = 5)] = "BetaNoQuota"),
    (r[(r.BadRequest = 1e3)] = "BadRequest"),
    (r[(r.AuthError = 1100)] = "AuthError"),
    (r[(r.AuthNeedRefresh = 1101)] = "AuthNeedRefresh"),
    (r[(r.NotBetaUser = 1102)] = "NotBetaUser"),
    (r[(r.PDFNeedPwd = 1203)] = "PDFNeedPwd"),
    (r[(r.PDFPwdError = 1204)] = "PDFPwdError"),
    (r[(r.InvalidSource = 1300)] = "InvalidSource"),
    (r[(r.FrequencyLimit = 1301)] = "FrequencyLimit"),
    (r[(r.FileParsing = 1302)] = "FileParsing"),
    (r[(r.GptError = 1400)] = "GptError"),
    (r[(r.GptExpired = 1402)] = "GptExpired"),
    (r[(r.GptEmptyContent = 1403)] = "GptEmptyContent"),
    (r[(r.GptRefuse = 1404)] = "GptRefuse"),
    (r[(r.GptWaitFileParse = 1407)] = "GptWaitFileParse"),
    (r[(r.SecurityError = 3001)] = "SecurityError"),
    (r[(r.RedHeader = 3002)] = "RedHeader"),
    (r[(r.HitBlacklist = 3003)] = "HitBlacklist"),
    (r[(r.LoginExpired = 41)] = "LoginExpired"),
    (r[(r.TokenExpired = 600001)] = "TokenExpired"),
    (r[(r.TokenRefreshError = 110030)] = "TokenRefreshError"),
    (r[(r.ServerInternalError = 300001)] = "ServerInternalError"),
    (r[(r.ReqWithInvalidQbid = 300101)] = "ReqWithInvalidQbid"),
    (r[(r.InvalidFileId = 300102)] = "InvalidFileId"),
    (r[(r.AccountInvalid = 40030)] = "AccountInvalid"),
    (r[(r.CallNativeTimeout = 996)] = "CallNativeTimeout"),
    (r[(r.ExceedMemberCountLimit = 100002)] = "ExceedMemberCountLimit"),
    (r[(r.ExceedMemberAdminCountLimit = 100005)] =
      "ExceedMemberAdminCountLimit"),
    (r[(r.CreatedSameNameKnowledgeBase = 40001)] =
      "CreatedSameNameKnowledgeBase"),
    (r[(r.RenamedKnowledgeSameName = 40003)] = "RenamedKnowledgeSameName"),
    (r[(r.KnowledgeBaseAuditSecurityHit = 50001)] =
      "KnowledgeBaseAuditSecurityHit"),
    (r[(r.PermissionDenied = 80001)] = "PermissionDenied"),
    (r[(r.KnowledgeBaseDeleted = 80011)] = "KnowledgeBaseDeleted"),
    (r[(r.ErrCodeKnowledgeSpaceLimit = 500012)] = "ErrCodeKnowledgeSpaceLimit"),
    (r[(r.ErrCodeKnowledgeMatrixIdNotExist = 100001)] =
      "ErrCodeKnowledgeMatrixIdNotExist"),
    (r[(r.ErrCodeServerExecFail = 200001)] = "ErrCodeServerExecFail"),
    (r[(r.ErrCodeNameSecurityStrike = 140022)] = "ErrCodeNameSecurityStrike"),
    (r[(r.ErrCodeAvatarSecurityStrike = 140023)] =
      "ErrCodeAvatarSecurityStrike"),
    (r[(r.ErrCodeNameForbidden = 140024)] = "ErrCodeNameForbidden"),
    (r[(r.ErrCodeAccountIsRegistered = 141036)] = "ErrCodeAccountIsRegistered"),
    (r[(r.ErrCodeVerifyCodeIsExpired = 142050)] = "ErrCodeVerifyCodeIsExpired"),
    (r[(r.ErrCodeVerifyCodeIsInvalid = 142051)] = "ErrCodeVerifyCodeIsInvalid"),
    (r[(r.ErrCodeFolderNumberLimit = 30002)] = "ErrCodeFolderNumberLimit"),
    (r[(r.ErrCodeFolderDepthLimit = 30003)] = "ErrCodeFolderDepthLimit"),
    (r[(r.ErrCodeFolderNoExist = 30005)] = "ErrCodeFolderNoExist"),
    (r[(r.ErrCodePermissionDenied = 80001)] = "ErrCodePermissionDenied"),
    (r[(r.ErrCodeHasDeleted = 80011)] = "ErrCodeHasDeleted"),
    (r[(r.ErrCodeVisitorPermissionDenied = 80100)] =
      "ErrCodeVisitorPermissionDenied"),
    (r[(r.ErrCodeKnowledgeNotExist = 1330045)] = "ErrCodeKnowledgeNotExist"),
    (r[(r.ShareExpired = 900001)] = "ShareExpired"),
    r
  ))(zc || {}),
  uh = ((r) => (
    (r[(r.UNKNOWN_TYPE = 0)] = "UNKNOWN_TYPE"),
    (r[(r.QQ = 1)] = "QQ"),
    (r[(r.WX = 2)] = "WX"),
    (r[(r.PH = 3)] = "PH"),
    (r[(r.GUID = 4)] = "GUID"),
    (r[(r.QQ_MINI = 5)] = "QQ_MINI"),
    (r[(r.WX_MINI = 6)] = "WX_MINI"),
    r
  ))(uh || {});
const Xi = 1e3;
var Hc = ((r) => (
    (r[(r.InlineIndexModal = 300)] = "InlineIndexModal"),
    (r[(r.AIAbstract = 500)] = "AIAbstract"),
    (r[(r.UploadFile = 100 * Xi)] = "UploadFile"),
    (r[(r.SSE = 60 * Xi)] = "SSE"),
    (r[(r.Request = 16 * Xi)] = "Request"),
    (r[(r.RetryGap = 1 * Xi)] = "RetryGap"),
    (r[(r.OneSecond = Xi)] = "OneSecond"),
    (r[(r.ThreeSecond = 3 * Xi)] = "ThreeSecond"),
    (r[(r.DialogWaitingTime = 300 * Xi)] = "DialogWaitingTime"),
    (r[(r.canvasToImg = 10 * Xi)] = "canvasToImg"),
    (r[(r.KnowledgeBaseSettingsCache = 500)] = "KnowledgeBaseSettingsCache"),
    r
  ))(Hc || {}),
  Jt = ((r) => (
    (r[(r.Hunyuan = 0)] = "Hunyuan"),
    (r[(r.Deepseek = 1)] = "Deepseek"),
    (r[(r.HunyuanT1 = 2)] = "HunyuanT1"),
    (r[(r.DeepseekV3 = 3)] = "DeepseekV3"),
    r
  ))(Jt || {}),
  Zr = ((r) => (
    (r[(r.Question = 0)] = "Question"),
    (r[(r.ExtractText = 1)] = "ExtractText"),
    (r[(r.InterpretImage = 2)] = "InterpretImage"),
    (r[(r.ContinueWriting = 3)] = "ContinueWriting"),
    (r[(r.Proofread = 4)] = "Proofread"),
    (r[(r.ExpandWriting = 5)] = "ExpandWriting"),
    (r[(r.AbbreviateWriting = 6)] = "AbbreviateWriting"),
    (r[(r.Translate = 7)] = "Translate"),
    (r[(r.PolishMoreVivid = 8)] = "PolishMoreVivid"),
    (r[(r.PolishMoreFormal = 9)] = "PolishMoreFormal"),
    (r[(r.PolishMoreFriendly = 10)] = "PolishMoreFriendly"),
    (r[(r.PolishMoreColloquial = 11)] = "PolishMoreColloquial"),
    (r[(r.GenerateOutline = 12)] = "GenerateOutline"),
    (r[(r.SummarizeText = 13)] = "SummarizeText"),
    (r[(r.KnowledgeQa = 14)] = "KnowledgeQa"),
    (r[(r.DeepResearch = 15)] = "DeepResearch"),
    (r[(r.ArticleGeneration = 16)] = "ArticleGeneration"),
    (r[(r.GenerateMindMap = 17)] = "GenerateMindMap"),
    (r[(r.Explain = 18)] = "Explain"),
    (r[(r.QuickRead = 19)] = "QuickRead"),
    (r[(r.SmartWriting = 20)] = "SmartWriting"),
    (r[(r.PaperWriting = 21)] = "PaperWriting"),
    (r[(r.EssayWriting = 22)] = "EssayWriting"),
    (r[(r.ReflectionWriting = 23)] = "ReflectionWriting"),
    (r[(r.CreativeCopywriting = 24)] = "CreativeCopywriting"),
    (r[(r.FinancialReportExplain = 25)] = "FinancialReportExplain"),
    (r[(r.Illustrate = 26)] = "Illustrate"),
    (r[(r.GenerateMultipleImages = 27)] = "GenerateMultipleImages"),
    r
  ))(Zr || {});
Jt.Hunyuan;
var jo = ((r) => (
  (r.InWebsite = "InWebsite"),
  (r.InAiChat = "InAiChat"),
  (r.InNoteChat = "InNoteChat"),
  (r.InNote = "InNote"),
  (r.InTab = "InTab"),
  (r.InMask = "InMask"),
  (r.InInputMedia = "InInputMedia"),
  (r.InExternal = "InExternal"),
  r
))(jo || {});
jo.InNoteChat,
  jo.InAiChat,
  jo.InAiChat,
  jo.InAiChat,
  jo.InAiChat,
  jo.InExternal;
const fp = {},
  dp = {};
Jt.Deepseek + "", Jt.HunyuanT1 + "", Jt.Hunyuan + "", Jt.DeepseekV3 + "";
Zr.SummarizeText;
Zr.GenerateMindMap;
Zr.InterpretImage;
Zr.ExtractText;
const lm = [Mr.UploadError, Mr.UploadDeadEndError, Mr.FinishUploadError];
[...lm, Mr.UploadPause, Mr.Uploading, Mr.WaitUpload];
var Ut = ((r) => (
  (r[(r.Empty = 1e4)] = "Empty"),
  (r[(r.Meta = 91)] = "Meta"),
  (r[(r.Control = 17)] = "Control"),
  (r[(r.Shift = 16)] = "Shift"),
  (r[(r.Alt = 18)] = "Alt"),
  (r[(r.CapsLock = 20)] = "CapsLock"),
  r
))(Ut || {});
Ut.Meta + "",
  Ut.Control + "",
  Ut.Shift + "",
  Ut.Alt + "",
  Ut.CapsLock + "",
  Ut.Empty + "";
Ut.Meta + "",
  Ut.Control + "",
  Ut.Shift + "",
  Ut.Alt + "",
  Ut.CapsLock + "",
  Ut.Empty + "";
Ut.Meta + "",
  Ut.Control + "",
  Ut.Shift + "",
  Ut.Alt + "",
  Ut.CapsLock + "",
  Ut.Empty + "";
Ut.Meta + "",
  Ut.Control + "",
  Ut.Shift + "",
  Ut.Alt + "",
  Ut.CapsLock + "",
  Ut.Empty + "";
var kn = ((r) => (
  (r.ChineseSimplified = "zh-CN"),
  (r.ChineseTraditional = "zh-TW"),
  (r.English = "en"),
  (r.Japanese = "ja"),
  (r.Korean = "ko"),
  (r.French = "fr"),
  (r.Spanish = "es"),
  (r.Russian = "ru"),
  (r.German = "de"),
  (r.Portuguese = "pt"),
  (r.Italian = "it"),
  (r.Arabic = "ar"),
  (r.Vietnamese = "vi"),
  (r.Malay = "ms"),
  (r.Turkish = "tr"),
  (r.Indonesian = "id"),
  r
))(kn || {});
kn.ChineseSimplified,
  kn.ChineseTraditional,
  kn.English,
  kn.Japanese,
  kn.Korean,
  kn.French,
  kn.Spanish,
  kn.Russian,
  kn.German,
  kn.Portuguese,
  kn.Italian,
  kn.Arabic,
  kn.Vietnamese,
  kn.Malay,
  kn.Turkish,
  kn.Indonesian;
var pe = ((r) => (
  (r.Unknown = "unknown"),
  (r.Mac = "mac"),
  (r.Windows = "windows"),
  (r.Android = "android"),
  (r.IOS = "ios"),
  (r.HarmonyOS = "harmonyOS"),
  r
))(pe || {});
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "",
  pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
pe.Windows + "",
  pe.Mac + "",
  pe.Unknown + "",
  pe.Android + "",
  pe.IOS + "",
  pe.HarmonyOS + "";
var Fo = ((r) => (
    (r.UserSpaceShortage = "当前知识库剩余空间不足"),
    (r.CollectSuccess = "已加入个人知识库"),
    (r.ShareCollectSuccess = "已加入该知识库"),
    (r.ShareUncollectFail = "已移出该知识库"),
    (r.UnCollectSuccess = "已移出个人知识库"),
    (r.CollectFail = "加入知识库失败"),
    (r.UnCollectFail = "移出知识库失败"),
    (r.UnsupportedCollect = "当前资源类型不支持加入知识库"),
    (r.UnknownError = "当前操作异常，请稍后再试"),
    (r.OversizeFile = "上传失败，超过最大文件150MB的限制"),
    (r.ZeroSizeFile = "上传失败，不支持上传空内容文件"),
    (r.WrongPassword = "上传失败，输入密码不正确"),
    r
  ))(Fo || {}),
  Uo = ((r) => (
    (r[(r.MyKnowledgeBase = 1)] = "MyKnowledgeBase"),
    (r[(r.ShareKnowledgeBase = 2)] = "ShareKnowledgeBase"),
    (r[(r.ImportKnowledgeBase = 3)] = "ImportKnowledgeBase"),
    (r[(r.Homepage = 4)] = "Homepage"),
    (r[(r.HomeDocument = 5)] = "HomeDocument"),
    (r[(r.HomeEssay = 6)] = "HomeEssay"),
    (r[(r.HomeTranslation = 7)] = "HomeTranslation"),
    (r[(r.AiChat = 8)] = "AiChat"),
    (r[(r.NoteChatInput = 9)] = "NoteChatInput"),
    r
  ))(Uo || {}),
  Cs = ((r) => (
    (r.None = "none"),
    (r.DocumentInterpretation = "documentInterpretation"),
    (r.EssayWriting = "essayWriting"),
    (r.SmartTranslation = "smartTranslation"),
    (r.DiscoverKnowledgeBase = "DiscoverKnowledgeBase"),
    r
  ))(Cs || {});
Cs.None + "",
  Cs.DocumentInterpretation + "",
  Cs.EssayWriting + "",
  Cs.SmartTranslation + "",
  Cs.DiscoverKnowledgeBase + "";
var eo = ((r) => (
    (r[(r.Undefined = 0)] = "Undefined"),
    (r[(r.Forbidden = 1)] = "Forbidden"),
    (r[(r.VisibleAndNotExport = 2)] = "VisibleAndNotExport"),
    (r[(r.Export = 3)] = "Export"),
    r
  ))(eo || {}),
  ma = ((r) => (
    (r[(r.Undefined = 0)] = "Undefined"),
    (r[(r.Name = 1)] = "Name"),
    (r[(r.CoverCosKey = 2)] = "CoverCosKey"),
    (r[(r.Description = 3)] = "Description"),
    (r[(r.AccessStatus = 4)] = "AccessStatus"),
    (r[(r.ForbidMemberAccessContent = 5)] = "ForbidMemberAccessContent"),
    (r[(r.RequiresApprovalForJoin = 6)] = "RequiresApprovalForJoin"),
    (r[(r.RecommendedQuestions = 7)] = "RecommendedQuestions"),
    (r[(r.VisibleExportStatus = 19)] = "VisibleExportStatus"),
    r
  ))(ma || {}),
  Bo = ((r) => (
    (r.Homepage = "homepage"),
    (r.HomeDocument = "homeDocument"),
    (r.HomeEssay = "homeEssay"),
    (r.HomeTranslation = "homeTranslation"),
    (r.AiChat = "aiChat"),
    (r.NoteChatInput = "noteChatInput"),
    r
  ))(Bo || {});
ma.Name, ma.CoverCosKey, ma.Description, ma.RecommendedQuestions;
eo.Export, eo.VisibleAndNotExport, eo.Forbidden;
eo.Export + "",
  eo.VisibleAndNotExport + "",
  eo.Forbidden + "",
  eo.Undefined + "";
ga.MediaInit + "",
  Mr.Init,
  ga.MediaParsing + "",
  Mr.Parsing,
  ga.MediaParseError + "",
  Mr.Error,
  ga.MediaParseSuccess + "",
  Mr.Finish;
Mo.CosError + "",
  Fo.CollectFail,
  Mo.OversizeFile + "",
  Fo.OversizeFile,
  Mo.ZeroSizeFile + "",
  Fo.ZeroSizeFile,
  Mo.CreateMediaError + "",
  Fo.CollectFail,
  Mo.UserSpaceShortage + "",
  Fo.UserSpaceShortage,
  Mo.UserSpaceError + "",
  Fo.CollectFail;
Bo.Homepage + "",
  Uo.Homepage,
  Bo.HomeDocument + "",
  Uo.HomeDocument,
  Bo.HomeEssay + "",
  Uo.HomeEssay,
  Bo.HomeTranslation + "",
  Uo.HomeTranslation,
  Bo.AiChat + "",
  Uo.AiChat,
  Bo.NoteChatInput + "",
  Uo.NoteChatInput;
const cm = Symbol.for("ID_CALL_NATIVE"),
  fm = ["ima-test.qq.com", "share-test.qq.com", "ima-pre.qq.com"],
  dm = "https://ima.qq.com",
  pm = () => {
    var r, i, o;
    return fm.includes(
      (r = globalThis == null ? void 0 : globalThis.location) == null
        ? void 0
        : r.hostname,
    )
      ? globalThis.location.origin
      : (o =
            (i = globalThis == null ? void 0 : globalThis.chrome) == null
              ? void 0
              : i.extension) != null && o.imaServerHost
        ? globalThis.chrome.extension.imaServerHost
        : dm;
  };
pm();
var tf = ((r) => (
    (r.Login = "login"),
    (r.Logout = "logout"),
    (r.GetAccountInfo = "getAccountInfo"),
    (r.RefreshToken = "refreshToken"),
    (r.CloseLoginDialog = "closeLoginDialog"),
    (r.GetSettingByKey = "getCurSettingForKey"),
    (r.GetAllSettings = "getSettingsForKeys"),
    (r.SetShortcut = "modifyShortCut"),
    (r.ToggleStartup = "setStartup"),
    (r.UploadLog = "uploadLog"),
    (r.Update = "update"),
    (r.ToggleMenuStatus = "menuStatus"),
    (r.ToggleBlockMenuStatus = "modifyBlockMenuStatus"),
    (r.OpenWindow = "openWindow"),
    (r.OpenUrl = "openUrl"),
    (r.GetDeviceInfo = "getDeviceInfo"),
    (r.ScreenShot = "screenShot"),
    (r.ModifySpotlightInputViewRect = "modifySpotlightInputViewRect"),
    (r.SetAppAutoUpdate = "setAppAutoUpdate"),
    (r.GetAppUpdateInfo = "getAppUpdateInfo"),
    (r.CancelAccount = "cancelAccount"),
    (r.SetEnableStatusTextMenu = "setEnableStatusTextMenu"),
    (r.GetEnableStatusTextMenu = "getEnableStatusTextMenu"),
    (r.GetAllDisableTextMenuList = "getAllDisableTextMenuList"),
    (r.DeleteDisableTextMenu = "deleteDisableTextMenu"),
    (r.SaveInfoWithKey = "saveInfoWithKey"),
    (r.AddDisableTextMenu = "addDisableTextMenu"),
    (r.ReportToBeacon = "reportToBeacon"),
    (r.SwitchLoginHost = "switchServer"),
    (r.SwitchDebugMode = "switchDebugMode"),
    (r.OpenApp = "showApp"),
    (r.CheckIsDefaultBrowser = "checkIsDefaultBrowser"),
    (r.SetDefaultBrowser = "setDefaultBrowser"),
    (r.CheckAccessibilityPermission = "checkAccessibilityPermission"),
    (r.UpdateChannelId = "updateChannelID"),
    (r.GetCurrentTabCount = "getCurrentTabCount"),
    (r.ReadLocalFile = "readLocalFile"),
    r
  ))(tf || {}),
  hm = ((r) => (
    (r[(r.Default = Zr.SmartWriting)] = "Default"),
    (r[(r.Essay = Zr.EssayWriting)] = "Essay"),
    (r[(r.Paper = Zr.PaperWriting)] = "Paper"),
    (r[(r.Thoughts = Zr.ReflectionWriting)] = "Thoughts"),
    (r[(r.Copywriting = Zr.CreativeCopywriting)] = "Copywriting"),
    r
  ))(hm || {});
const Pu = {
    [Jt.Hunyuan]: "Hunyuan",
    [Jt.HunyuanT1]: "Hunyuan T1",
    [Jt.Deepseek]: "DeepSeek R1",
    [Jt.DeepseekV3]: "DeepSeek V3",
  },
  lh = [
    { name: Pu[Jt.Hunyuan], desc: "适合大部分任务", id: Jt.Hunyuan },
    { name: Pu[Jt.HunyuanT1], desc: "快速思考推理", id: Jt.HunyuanT1 },
    { name: Pu[Jt.DeepseekV3], desc: "适用多种应用场景", id: Jt.DeepseekV3 },
    { name: Pu[Jt.Deepseek], desc: "深度思考推理", id: Jt.Deepseek },
  ],
  gm = [Jt.Hunyuan, Jt.Deepseek];
lh.filter((r) => gm.includes(r.id));
const mm = [Jt.Hunyuan, Jt.HunyuanT1, Jt.Deepseek];
lh.filter((r) => mm.includes(r.id));
const Ac = Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var nh, _a, rh;
let vm =
  ((nh = Ac),
  (rh = class {
    constructor(i) {
      De(this, nh);
      _i(this, _a);
      Yr(this, _a, i), (this[Ac] = !0);
    }
    static is(i) {
      return typeof i == "object" && i !== null && i[Ac] === !0;
    }
    unwrap() {
      return Lt(this, _a).call(this);
    }
  }),
  (_a = new WeakMap()),
  rh);
function bi(r, i) {
  return Reflect.getMetadata(i, r);
}
function pp(r, i, o, l) {
  const p = l(bi(r, i) ?? o);
  Reflect.defineMetadata(i, p, r);
}
const el = "named",
  nf = "name",
  rf = "unmanaged",
  of = "optional",
  sf = "inject",
  af = "multi_inject",
  ch = "post_construct",
  fh = "pre_destroy",
  ym = [sf, af, nf, rf, el, of],
  Nc = Symbol.for("@inversifyjs/core/InversifyCoreError");
var ih, oh;
let zo = class dh extends ((oh = Error), (ih = Nc), oh) {
  constructor(o, l, p) {
    super(l, p);
    De(this, ih);
    De(this, "kind");
    (this[Nc] = !0), (this.kind = o);
  }
  static is(o) {
    return typeof o == "object" && o !== null && o[Nc] === !0;
  }
  static isErrorOfKind(o, l) {
    return dh.is(o) && o.kind === l;
  }
};
var Ri, nr;
function ph(r, i) {
  const o = [];
  for (let l = 0; l < i.length; ++l) i[l] === void 0 && o.push(l);
  if (o.length > 0)
    throw new zo(
      Ri.missingInjectionDecorator,
      `Found unexpected missing metadata on type "${r.name}" at constructor indexes "${o.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`,
    );
}
function hh(r) {
  return {
    kind: nr.singleInjection,
    name: void 0,
    optional: !1,
    tags: new Map(),
    targetName: void 0,
    value: r,
  };
}
function tl(r) {
  const i = r.find((v) => v.key === sf),
    o = r.find((v) => v.key === af);
  if (r.find((v) => v.key === rf) !== void 0)
    return (function (v, R) {
      if (R !== void 0 || v !== void 0)
        throw new zo(
          Ri.missingInjectionDecorator,
          "Expected a single @inject, @multiInject or @unmanaged metadata",
        );
      return { kind: nr.unmanaged };
    })(i, o);
  if (o === void 0 && i === void 0)
    throw new zo(
      Ri.missingInjectionDecorator,
      "Expected @inject, @multiInject or @unmanaged metadata",
    );
  const l = r.find((v) => v.key === el),
    p = r.find((v) => v.key === of),
    m = r.find((v) => v.key === nf);
  return {
    kind: i === void 0 ? nr.multipleInjection : nr.singleInjection,
    name: l == null ? void 0 : l.value,
    optional: p !== void 0,
    tags: new Map(
      r
        .filter((v) => ym.every((R) => v.key !== R))
        .map((v) => [v.key, v.value]),
    ),
    targetName: m == null ? void 0 : m.value,
    value: i === void 0 ? (o == null ? void 0 : o.value) : i.value,
  };
}
function gh(r, i, o) {
  try {
    return tl(o);
  } catch (l) {
    throw zo.isErrorOfKind(l, Ri.missingInjectionDecorator)
      ? new zo(
          Ri.missingInjectionDecorator,
          `Expected a single @inject, @multiInject or @unmanaged decorator at type "${r.name}" at constructor arguments at index "${i.toString()}"`,
          { cause: l },
        )
      : l;
  }
}
function wm(r) {
  const i = bi(r, "design:paramtypes"),
    o = bi(r, "inversify:tagged"),
    l = [];
  if (o !== void 0)
    for (const [p, m] of Object.entries(o)) {
      const v = parseInt(p);
      l[v] = gh(r, v, m);
    }
  if (i !== void 0) {
    for (let p = 0; p < i.length; ++p)
      if (l[p] === void 0) {
        const m = i[p];
        l[p] = hh(m);
      }
  }
  return ph(r, l), l;
}
function mh(r, i, o) {
  try {
    return tl(o);
  } catch (l) {
    throw zo.isErrorOfKind(l, Ri.missingInjectionDecorator)
      ? new zo(
          Ri.missingInjectionDecorator,
          `Expected a single @inject, @multiInject or @unmanaged decorator at type "${r.name}" at property "${i.toString()}"`,
          { cause: l },
        )
      : l;
  }
}
function vh(r) {
  const i = bi(r, "inversify:tagged_props"),
    o = new Map();
  if (i !== void 0)
    for (const l of Reflect.ownKeys(i)) {
      const p = i[l];
      o.set(l, mh(r, l, p));
    }
  return o;
}
function Sm(r) {
  const i = bi(r, ch),
    o = bi(r, fh);
  return {
    constructorArguments: wm(r),
    lifecycle: {
      postConstructMethodName: i == null ? void 0 : i.value,
      preDestroyMethodName: o == null ? void 0 : o.value,
    },
    properties: vh(r),
  };
}
function Em(r, i) {
  const o = i.getConstructorMetadata(r),
    l = [];
  for (const [p, m] of Object.entries(o.userGeneratedMetadata)) {
    const v = parseInt(p);
    l[v] = gh(r, v, m);
  }
  if (o.compilerGeneratedMetadata !== void 0) {
    for (let p = 0; p < o.compilerGeneratedMetadata.length; ++p)
      if (l[p] === void 0) {
        const m = o.compilerGeneratedMetadata[p];
        l[p] = hh(m);
      }
  }
  return ph(r, l), l;
}
function yh(r, i) {
  const o = i.getPropertiesMetadata(r),
    l = new Map();
  for (const p of Reflect.ownKeys(o)) {
    const m = o[p];
    l.set(p, mh(r, p, m));
  }
  return l;
}
function _m(r, i) {
  const o = bi(r, ch),
    l = bi(r, fh);
  return {
    constructorArguments: Em(r, i),
    lifecycle: {
      postConstructMethodName: o == null ? void 0 : o.value,
      preDestroyMethodName: l == null ? void 0 : l.value,
    },
    properties: yh(r, i),
  };
}
function hp(r) {
  const i = Object.getPrototypeOf(r.prototype);
  return i == null ? void 0 : i.constructor;
}
function km(r) {
  return r.kind === nr.unmanaged
    ? [{ key: rf, value: !0 }]
    : (function (i) {
        const o = [Im(i)];
        i.name !== void 0 && o.push({ key: el, value: i.name }),
          i.optional && o.push({ key: of, value: !0 });
        for (const [l, p] of i.tags) o.push({ key: l, value: p });
        return (
          i.targetName !== void 0 && o.push({ key: nf, value: i.targetName }), o
        );
      })(r);
}
function Im(r) {
  let i;
  switch (r.kind) {
    case nr.multipleInjection:
      i = { key: af, value: r.value };
      break;
    case nr.singleInjection:
      i = { key: sf, value: r.value };
  }
  return i;
}
(function (r) {
  (r[(r.injectionDecoratorConflict = 0)] = "injectionDecoratorConflict"),
    (r[(r.missingInjectionDecorator = 1)] = "missingInjectionDecorator"),
    (r[(r.planning = 2)] = "planning"),
    (r[(r.unknown = 3)] = "unknown");
})(Ri || (Ri = {})),
  (function (r) {
    (r[(r.multipleInjection = 0)] = "multipleInjection"),
      (r[(r.singleInjection = 1)] = "singleInjection"),
      (r[(r.unmanaged = 2)] = "unmanaged");
  })(nr || (nr = {}));
var xi, sh;
let xm =
  ((sh = class {
    constructor(i) {
      _i(this, xi);
      Yr(this, xi, i);
    }
    startsWith(i) {
      return Lt(this, xi).startsWith(i);
    }
    endsWith(i) {
      return Lt(this, xi).endsWith(i);
    }
    contains(i) {
      return Lt(this, xi).includes(i);
    }
    equals(i) {
      return Lt(this, xi) === i;
    }
    value() {
      return Lt(this, xi);
    }
  }),
  (xi = new WeakMap()),
  sh);
const Dc = "@inversifyjs/core/targetId";
var xn, ka, Ia, Wo, xa, Ca, ah;
let zu =
  ((ah = class {
    constructor(i, o, l) {
      _i(this, xn);
      _i(this, ka);
      _i(this, Ia);
      _i(this, Wo);
      _i(this, xa);
      _i(this, Ca);
      Yr(
        this,
        ka,
        (function () {
          const p = bi(Object, Dc) ?? 0;
          return (
            p === Number.MAX_SAFE_INTEGER
              ? pp(Object, Dc, p, () => Number.MIN_SAFE_INTEGER)
              : pp(Object, Dc, p, (m) => m + 1),
            p
          );
        })(),
      ),
        Yr(this, Ia, i),
        Yr(this, Wo, void 0),
        Yr(this, xn, o),
        Yr(
          this,
          xa,
          new xm(typeof i == "string" ? i : i.toString().slice(7, -1)),
        ),
        Yr(this, Ca, l);
    }
    get id() {
      return Lt(this, ka);
    }
    get identifier() {
      return Lt(this, Ia);
    }
    get metadata() {
      return (
        Lt(this, Wo) === void 0 && Yr(this, Wo, km(Lt(this, xn))), Lt(this, Wo)
      );
    }
    get name() {
      return Lt(this, xa);
    }
    get type() {
      return Lt(this, Ca);
    }
    get serviceIdentifier() {
      return vm.is(Lt(this, xn).value)
        ? Lt(this, xn).value.unwrap()
        : Lt(this, xn).value;
    }
    getCustomTags() {
      return [...Lt(this, xn).tags.entries()].map(([i, o]) => ({
        key: i,
        value: o,
      }));
    }
    getNamedTag() {
      return Lt(this, xn).name === void 0
        ? null
        : { key: el, value: Lt(this, xn).name };
    }
    hasTag(i) {
      return this.metadata.some((o) => o.key === i);
    }
    isArray() {
      return Lt(this, xn).kind === nr.multipleInjection;
    }
    isNamed() {
      return Lt(this, xn).name !== void 0;
    }
    isOptional() {
      return Lt(this, xn).optional;
    }
    isTagged() {
      return Lt(this, xn).tags.size > 0;
    }
    matchesArray(i) {
      return this.isArray() && Lt(this, xn).value === i;
    }
    matchesNamedTag(i) {
      return Lt(this, xn).name === i;
    }
    matchesTag(i) {
      return (o) => this.metadata.some((l) => l.key === i && l.value === o);
    }
  }),
  (xn = new WeakMap()),
  (ka = new WeakMap()),
  (Ia = new WeakMap()),
  (Wo = new WeakMap()),
  (xa = new WeakMap()),
  (Ca = new WeakMap()),
  ah);
const wh = (r) =>
    (function (i, o) {
      return function (l) {
        const p = i(l);
        let m = hp(l);
        for (; m !== void 0 && m !== Object; ) {
          const R = o(m);
          for (const [_, D] of R) p.properties.has(_) || p.properties.set(_, D);
          m = hp(m);
        }
        const v = [];
        for (const R of p.constructorArguments)
          if (R.kind !== nr.unmanaged) {
            const _ = R.targetName ?? "";
            v.push(new zu(_, R, "ConstructorArgument"));
          }
        for (const [R, _] of p.properties)
          if (_.kind !== nr.unmanaged) {
            const D = _.targetName ?? R;
            v.push(new zu(D, _, "ClassProperty"));
          }
        return v;
      };
    })(
      r === void 0 ? Sm : (i) => _m(i, r),
      r === void 0 ? vh : (i) => yh(i, r),
    ),
  Lr = "named",
  Cm = "unmanaged",
  Om = "optional",
  Sh = "inject",
  bm = "multi_inject",
  Eh = "inversify:tagged",
  _h = "inversify:tagged_props",
  gp = "inversify:paramtypes",
  kh = "design:paramtypes",
  mp = "post_construct",
  qc = "pre_destroy",
  rn = { Request: "Request", Singleton: "Singleton", Transient: "Transient" },
  Mt = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider",
  },
  Ih = { ConstructorArgument: "ConstructorArgument", Variable: "Variable" };
let Rm = 0;
function nl() {
  return Rm++;
}
class uf {
  constructor(i, o) {
    De(this, "id");
    De(this, "moduleId");
    De(this, "activated");
    De(this, "serviceIdentifier");
    De(this, "implementationType");
    De(this, "cache");
    De(this, "dynamicValue");
    De(this, "scope");
    De(this, "type");
    De(this, "factory");
    De(this, "provider");
    De(this, "constraint");
    De(this, "onActivation");
    De(this, "onDeactivation");
    (this.id = nl()),
      (this.activated = !1),
      (this.serviceIdentifier = i),
      (this.scope = o),
      (this.type = Mt.Invalid),
      (this.constraint = (l) => !0),
      (this.implementationType = null),
      (this.cache = null),
      (this.factory = null),
      (this.provider = null),
      (this.onActivation = null),
      (this.onDeactivation = null),
      (this.dynamicValue = null);
  }
  clone() {
    const i = new uf(this.serviceIdentifier, this.scope);
    return (
      (i.activated = i.scope === rn.Singleton && this.activated),
      (i.implementationType = this.implementationType),
      (i.dynamicValue = this.dynamicValue),
      (i.scope = this.scope),
      (i.type = this.type),
      (i.factory = this.factory),
      (i.provider = this.provider),
      (i.constraint = this.constraint),
      (i.onActivation = this.onActivation),
      (i.onDeactivation = this.onDeactivation),
      (i.cache = this.cache),
      i
    );
  }
}
const xh = "Metadata key was used more than once in a parameter:",
  vp = "NULL argument",
  yp = "Key Not Found",
  Pm = "Ambiguous match found for serviceIdentifier:",
  Tm = "No matching bindings found for serviceIdentifier:",
  Ch =
    "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",
  $c = (r, i) => `onDeactivation() error in class ${r}: ${i}`;
class Am {
  getConstructorMetadata(i) {
    return {
      compilerGeneratedMetadata: Reflect.getMetadata(kh, i) ?? [],
      userGeneratedMetadata: Reflect.getMetadata(Eh, i) ?? {},
    };
  }
  getPropertiesMetadata(i) {
    return Reflect.getMetadata(_h, i) ?? {};
  }
}
var Os;
function Oh(r) {
  return (
    r instanceof RangeError || r.message === "Maximum call stack size exceeded"
  );
}
(function (r) {
  (r[(r.MultipleBindingsAvailable = 2)] = "MultipleBindingsAvailable"),
    (r[(r.NoBindingsAvailable = 0)] = "NoBindingsAvailable"),
    (r[(r.OnlyOneBindingAvailable = 1)] = "OnlyOneBindingAvailable");
})(Os || (Os = {}));
function no(r) {
  return typeof r == "function"
    ? r.name
    : typeof r == "symbol"
      ? r.toString()
      : r;
}
function wp(r, i, o) {
  let l = "";
  const p = o(r, i);
  return (
    p.length !== 0 &&
      ((l = `
Registered bindings:`),
      p.forEach((m) => {
        let v = "Object";
        m.implementationType !== null && (v = Ph(m.implementationType)),
          (l = `${l}
 ${v}`),
          m.constraint.metaData && (l = `${l} - ${m.constraint.metaData}`);
      })),
    l
  );
}
function bh(r, i) {
  return (
    r.parentRequest !== null &&
    (r.parentRequest.serviceIdentifier === i || bh(r.parentRequest, i))
  );
}
function Rh(r) {
  r.childRequests.forEach((i) => {
    if (bh(r, i.serviceIdentifier)) {
      const o = (function (l) {
        return (function m(v, R = []) {
          const _ = no(v.serviceIdentifier);
          return (
            R.push(_), v.parentRequest !== null ? m(v.parentRequest, R) : R
          );
        })(l)
          .reverse()
          .join(" --> ");
      })(i);
      throw new Error(`Circular dependency found: ${o}`);
    }
    Rh(i);
  });
}
function Ph(r) {
  if (r.name != null && r.name !== "") return r.name;
  {
    const i = r.toString(),
      o = i.match(/^function\s*([^\s(]+)/);
    return o === null ? `Anonymous function: ${i}` : o[1];
  }
}
function Sp(r) {
  return `{"key":"${r.key.toString()}","value":"${r.value.toString()}"}`;
}
class Th {
  constructor(i) {
    De(this, "id");
    De(this, "container");
    De(this, "plan");
    De(this, "currentRequest");
    (this.id = nl()), (this.container = i);
  }
  addPlan(i) {
    this.plan = i;
  }
  setCurrentRequest(i) {
    this.currentRequest = i;
  }
}
class Sa {
  constructor(i, o) {
    De(this, "key");
    De(this, "value");
    (this.key = i), (this.value = o);
  }
  toString() {
    return this.key === Lr
      ? `named: ${String(this.value).toString()} `
      : `tagged: { key:${this.key.toString()}, value: ${String(this.value)} }`;
  }
}
class Nm {
  constructor(i, o) {
    De(this, "parentContext");
    De(this, "rootRequest");
    (this.parentContext = i), (this.rootRequest = o);
  }
}
function Ah(r, i) {
  const o = (function (R) {
    const _ = Object.getPrototypeOf(R.prototype);
    return _ == null ? void 0 : _.constructor;
  })(i);
  if (o === void 0 || o === Object) return 0;
  const l = wh(r)(o),
    p = l.map((R) => R.metadata.filter((_) => _.key === Cm)),
    m = [].concat.apply([], p).length,
    v = l.length - m;
  return v > 0 ? v : Ah(r, o);
}
class Oa {
  constructor(i, o, l, p, m) {
    De(this, "id");
    De(this, "serviceIdentifier");
    De(this, "parentContext");
    De(this, "parentRequest");
    De(this, "bindings");
    De(this, "childRequests");
    De(this, "target");
    De(this, "requestScope");
    (this.id = nl()),
      (this.serviceIdentifier = i),
      (this.parentContext = o),
      (this.parentRequest = l),
      (this.target = m),
      (this.childRequests = []),
      (this.bindings = Array.isArray(p) ? p : [p]),
      (this.requestScope = l === null ? new Map() : null);
  }
  addChildRequest(i, o, l) {
    const p = new Oa(i, this.parentContext, this, o, l);
    return this.childRequests.push(p), p;
  }
}
function Hu(r) {
  return r._bindingDictionary;
}
function Ep(r, i, o, l, p) {
  let m = va(o.container, p.serviceIdentifier),
    v = [];
  return (
    m.length === Os.NoBindingsAvailable &&
      o.container.options.autoBindInjectable === !0 &&
      typeof p.serviceIdentifier == "function" &&
      r.getConstructorMetadata(p.serviceIdentifier).compilerGeneratedMetadata &&
      (o.container.bind(p.serviceIdentifier).toSelf(),
      (m = va(o.container, p.serviceIdentifier))),
    (v = i
      ? m
      : m.filter((R) => {
          const _ = new Oa(R.serviceIdentifier, o, l, R, p);
          return R.constraint(_);
        })),
    (function (R, _, D, X, G) {
      switch (_.length) {
        case Os.NoBindingsAvailable:
          if (X.isOptional()) return _;
          {
            const se = no(R);
            let Z = Tm;
            throw (
              ((Z += (function (ie, V) {
                if (V.isTagged() || V.isNamed()) {
                  let J = "";
                  const _e = V.getNamedTag(),
                    te = V.getCustomTags();
                  return (
                    _e !== null &&
                      (J +=
                        Sp(_e) +
                        `
`),
                    te !== null &&
                      te.forEach((me) => {
                        J +=
                          Sp(me) +
                          `
`;
                      }),
                    ` ${ie}
 ${ie} - ${J}`
                  );
                }
                return ` ${ie}`;
              })(se, X)),
              (Z += wp(G, se, va)),
              D !== null &&
                (Z += `
Trying to resolve bindings for "${no(D.serviceIdentifier)}"`),
              new Error(Z))
            );
          }
        case Os.OnlyOneBindingAvailable:
          return _;
        case Os.MultipleBindingsAvailable:
        default:
          if (X.isArray()) return _;
          {
            const se = no(R);
            let Z = `${Pm} ${se}`;
            throw ((Z += wp(G, se, va)), new Error(Z));
          }
      }
    })(p.serviceIdentifier, v, l, p, o.container),
    v
  );
}
function Nh(r, i) {
  const o = i.isMultiInject ? bm : Sh,
    l = [new Sa(o, r)];
  return (
    i.customTag !== void 0 &&
      l.push(new Sa(i.customTag.key, i.customTag.value)),
    i.isOptional === !0 && l.push(new Sa(Om, !0)),
    l
  );
}
function Dh(r, i, o, l, p, m) {
  let v, R;
  if (p === null) {
    (v = Ep(r, i, l, null, m)), (R = new Oa(o, l, null, v, m));
    const _ = new Nm(l, R);
    l.addPlan(_);
  } else
    (v = Ep(r, i, l, p, m)), (R = p.addChildRequest(m.serviceIdentifier, v, m));
  v.forEach((_) => {
    let D = null;
    if (m.isArray()) D = R.addChildRequest(_.serviceIdentifier, _, m);
    else {
      if (_.cache !== null) return;
      D = R;
    }
    if (_.type === Mt.Instance && _.implementationType !== null) {
      const X = (function (G, se) {
        return wh(G)(se);
      })(r, _.implementationType);
      if (l.container.options.skipBaseClassChecks !== !0) {
        const G = Ah(r, _.implementationType);
        if (X.length < G) {
          const se = `The number of constructor arguments in the derived class ${Ph(_.implementationType)} must be >= than the number of constructor arguments of its base class.`;
          throw new Error(se);
        }
      }
      X.forEach((G) => {
        Dh(r, !1, G.serviceIdentifier, l, D, G);
      });
    }
  });
}
function va(r, i) {
  let o = [];
  const l = Hu(r);
  return (
    l.hasKey(i) ? (o = l.get(i)) : r.parent !== null && (o = va(r.parent, i)), o
  );
}
function Dm(r, i, o, l, p, m = !1) {
  const v = new Th(i),
    R = (function (_, D, X) {
      const G = Nh(D, X),
        se = tl(G);
      if (se.kind === nr.unmanaged)
        throw new Error("Unexpected metadata when creating target");
      return new zu("", se, _);
    })(o, l, p);
  try {
    return Dh(r, m, l, v, null, R), v;
  } catch (_) {
    throw (Oh(_) && Rh(v.plan.rootRequest), _);
  }
}
function tr(r) {
  return (
    ((typeof r == "object" && r !== null) || typeof r == "function") &&
    typeof r.then == "function"
  );
}
function Lh(r) {
  return !!tr(r) || (Array.isArray(r) && r.some(tr));
}
const Lm = (r, i, o) => {
    r.has(i.id) || r.set(i.id, o);
  },
  Mm = (r, i) => {
    (r.cache = i), (r.activated = !0), tr(i) && jm(r, i);
  },
  jm = async (r, i) => {
    try {
      const o = await i;
      r.cache = o;
    } catch (o) {
      throw ((r.cache = null), (r.activated = !1), o);
    }
  };
var Ea;
(function (r) {
  (r.DynamicValue = "toDynamicValue"),
    (r.Factory = "toFactory"),
    (r.Provider = "toProvider");
})(Ea || (Ea = {}));
function Fm(r, i, o) {
  let l;
  if (i.length > 0) {
    const p = (function (v, R) {
        return v.reduce(
          (_, D) => {
            const X = R(D);
            return (
              D.target.type === Ih.ConstructorArgument
                ? _.constructorInjections.push(X)
                : (_.propertyRequests.push(D), _.propertyInjections.push(X)),
              _.isAsync || (_.isAsync = Lh(X)),
              _
            );
          },
          {
            constructorInjections: [],
            isAsync: !1,
            propertyInjections: [],
            propertyRequests: [],
          },
        );
      })(i, o),
      m = { ...p, constr: r };
    l = p.isAsync
      ? (async function (v) {
          const R = await kp(v.constructorInjections),
            _ = await kp(v.propertyInjections);
          return _p({ ...v, constructorInjections: R, propertyInjections: _ });
        })(m)
      : _p(m);
  } else l = new r();
  return l;
}
function _p(r) {
  const i = new r.constr(...r.constructorInjections);
  return (
    r.propertyRequests.forEach((o, l) => {
      const p = o.target.identifier,
        m = r.propertyInjections[l];
      (o.target.isOptional() && m === void 0) || (i[p] = m);
    }),
    i
  );
}
async function kp(r) {
  const i = [];
  for (const o of r) Array.isArray(o) ? i.push(Promise.all(o)) : i.push(o);
  return Promise.all(i);
}
function Ip(r, i) {
  const o = (function (l, p) {
    var R;
    if (Reflect.hasMetadata(mp, l)) {
      const _ = Reflect.getMetadata(mp, l);
      try {
        return (R = p[_.value]) == null ? void 0 : R.call(p);
      } catch (D) {
        if (D instanceof Error)
          throw new Error(
            ((m = l.name),
            (v = D.message),
            `@postConstruct error in class ${m}: ${v}`),
          );
      }
    }
    var m, v;
  })(r, i);
  return tr(o) ? o.then(() => i) : i;
}
function Um(r, i) {
  r.scope !== rn.Singleton &&
    (function (o, l) {
      const p = `Class cannot be instantiated in ${o.scope === rn.Request ? "request" : "transient"} scope.`;
      if (typeof o.onDeactivation == "function") throw new Error($c(l.name, p));
      if (Reflect.hasMetadata(qc, l))
        throw new Error(`@preDestroy error in class ${l.name}: ${p}`);
    })(r, i);
}
const lf = (r) => (i) => {
    i.parentContext.setCurrentRequest(i);
    const o = i.bindings,
      l = i.childRequests,
      p = i.target && i.target.isArray(),
      m = !(
        i.parentRequest &&
        i.parentRequest.target &&
        i.target &&
        i.parentRequest.target.matchesArray(i.target.serviceIdentifier)
      );
    if (p && m) return l.map((v) => lf(r)(v));
    {
      if (i.target.isOptional() && o.length === 0) return;
      const v = o[0];
      return Hm(r, i, v);
    }
  },
  Bm = (r, i) => {
    const o = ((l) => {
      switch (l.type) {
        case Mt.Factory:
          return { factory: l.factory, factoryType: Ea.Factory };
        case Mt.Provider:
          return { factory: l.provider, factoryType: Ea.Provider };
        case Mt.DynamicValue:
          return { factory: l.dynamicValue, factoryType: Ea.DynamicValue };
        default:
          throw new Error(`Unexpected factory type ${l.type}`);
      }
    })(r);
    return ((l, p) => {
      try {
        return l();
      } catch (m) {
        throw Oh(m) ? p() : m;
      }
    })(
      () => o.factory.bind(r)(i),
      () => {
        return new Error(
          ((l = o.factoryType),
          (p = i.currentRequest.serviceIdentifier.toString()),
          `It looks like there is a circular dependency in one of the '${l}' bindings. Please investigate bindings with service identifier '${p}'.`),
        );
        var l, p;
      },
    );
  },
  Wm = (r, i, o) => {
    let l;
    const p = i.childRequests;
    switch (
      (((m) => {
        let v = null;
        switch (m.type) {
          case Mt.ConstantValue:
          case Mt.Function:
            v = m.cache;
            break;
          case Mt.Constructor:
          case Mt.Instance:
            v = m.implementationType;
            break;
          case Mt.DynamicValue:
            v = m.dynamicValue;
            break;
          case Mt.Provider:
            v = m.provider;
            break;
          case Mt.Factory:
            v = m.factory;
        }
        if (v === null) {
          const R = no(m.serviceIdentifier);
          throw new Error(`Invalid binding type: ${R}`);
        }
      })(o),
      o.type)
    ) {
      case Mt.ConstantValue:
      case Mt.Function:
        l = o.cache;
        break;
      case Mt.Constructor:
        l = o.implementationType;
        break;
      case Mt.Instance:
        l = (function (m, v, R, _) {
          Um(m, v);
          const D = Fm(v, R, _);
          return tr(D) ? D.then((X) => Ip(v, X)) : Ip(v, D);
        })(o, o.implementationType, p, lf(r));
        break;
      default:
        l = Bm(o, i.parentContext);
    }
    return l;
  },
  zm = (r, i, o) => {
    let l = ((p, m) =>
      m.scope === rn.Singleton && m.activated
        ? m.cache
        : m.scope === rn.Request && p.has(m.id)
          ? p.get(m.id)
          : null)(r, i);
    return (
      l !== null ||
        ((l = o()),
        ((p, m, v) => {
          m.scope === rn.Singleton && Mm(m, v),
            m.scope === rn.Request && Lm(p, m, v);
        })(r, i, l)),
      l
    );
  },
  Hm = (r, i, o) =>
    zm(r, o, () => {
      let l = Wm(r, i, o);
      return (l = tr(l) ? l.then((p) => xp(i, o, p)) : xp(i, o, l)), l;
    });
function xp(r, i, o) {
  let l = qm(r.parentContext, i, o);
  const p = Gm(r.parentContext.container);
  let m,
    v = p.next();
  do {
    m = v.value;
    const R = r.parentContext,
      _ = r.serviceIdentifier,
      D = Vm(m, _);
    (l = tr(l) ? Mh(D, R, l) : $m(D, R, l)), (v = p.next());
  } while (v.done !== !0 && !Hu(m).hasKey(r.serviceIdentifier));
  return l;
}
const qm = (r, i, o) => {
    let l;
    return (
      (l = typeof i.onActivation == "function" ? i.onActivation(r, o) : o), l
    );
  },
  $m = (r, i, o) => {
    let l = r.next();
    for (; l.done !== !0; ) {
      if (tr((o = l.value(i, o)))) return Mh(r, i, o);
      l = r.next();
    }
    return o;
  },
  Mh = async (r, i, o) => {
    let l = await o,
      p = r.next();
    for (; p.done !== !0; ) (l = await p.value(i, l)), (p = r.next());
    return l;
  },
  Vm = (r, i) => {
    const o = r._activations;
    return o.hasKey(i) ? o.get(i).values() : [].values();
  },
  Gm = (r) => {
    const i = [r];
    let o = r.parent;
    for (; o !== null; ) i.push(o), (o = o.parent);
    return {
      next: () => {
        const l = i.pop();
        return l !== void 0
          ? { done: !1, value: l }
          : { done: !0, value: void 0 };
      },
    };
  },
  ki = (r, i) => {
    const o = r.parentRequest;
    return o !== null && (!!i(o) || ki(o, i));
  },
  ya = (r) => (i) => {
    const o = (l) =>
      l !== null && l.target !== null && l.target.matchesTag(r)(i);
    return (o.metaData = new Sa(r, i)), o;
  },
  Tu = ya(Lr),
  Lc = (r) => (i) => {
    let o = null;
    if (i !== null) {
      if (((o = i.bindings[0]), typeof r == "string"))
        return o.serviceIdentifier === r;
      {
        const l = i.bindings[0].implementationType;
        return r === l;
      }
    }
    return !1;
  };
class qu {
  constructor(i) {
    De(this, "_binding");
    this._binding = i;
  }
  when(i) {
    return (this._binding.constraint = i), new In(this._binding);
  }
  whenTargetNamed(i) {
    return (this._binding.constraint = Tu(i)), new In(this._binding);
  }
  whenTargetIsDefault() {
    return (
      (this._binding.constraint = (i) =>
        i === null
          ? !1
          : i.target !== null && !i.target.isNamed() && !i.target.isTagged()),
      new In(this._binding)
    );
  }
  whenTargetTagged(i, o) {
    return (this._binding.constraint = ya(i)(o)), new In(this._binding);
  }
  whenInjectedInto(i) {
    return (
      (this._binding.constraint = (o) => o !== null && Lc(i)(o.parentRequest)),
      new In(this._binding)
    );
  }
  whenParentNamed(i) {
    return (
      (this._binding.constraint = (o) => o !== null && Tu(i)(o.parentRequest)),
      new In(this._binding)
    );
  }
  whenParentTagged(i, o) {
    return (
      (this._binding.constraint = (l) =>
        l !== null && ya(i)(o)(l.parentRequest)),
      new In(this._binding)
    );
  }
  whenAnyAncestorIs(i) {
    return (
      (this._binding.constraint = (o) => o !== null && ki(o, Lc(i))),
      new In(this._binding)
    );
  }
  whenNoAncestorIs(i) {
    return (
      (this._binding.constraint = (o) => o !== null && !ki(o, Lc(i))),
      new In(this._binding)
    );
  }
  whenAnyAncestorNamed(i) {
    return (
      (this._binding.constraint = (o) => o !== null && ki(o, Tu(i))),
      new In(this._binding)
    );
  }
  whenNoAncestorNamed(i) {
    return (
      (this._binding.constraint = (o) => o !== null && !ki(o, Tu(i))),
      new In(this._binding)
    );
  }
  whenAnyAncestorTagged(i, o) {
    return (
      (this._binding.constraint = (l) => l !== null && ki(l, ya(i)(o))),
      new In(this._binding)
    );
  }
  whenNoAncestorTagged(i, o) {
    return (
      (this._binding.constraint = (l) => l !== null && !ki(l, ya(i)(o))),
      new In(this._binding)
    );
  }
  whenAnyAncestorMatches(i) {
    return (
      (this._binding.constraint = (o) => o !== null && ki(o, i)),
      new In(this._binding)
    );
  }
  whenNoAncestorMatches(i) {
    return (
      (this._binding.constraint = (o) => o !== null && !ki(o, i)),
      new In(this._binding)
    );
  }
}
class In {
  constructor(i) {
    De(this, "_binding");
    this._binding = i;
  }
  onActivation(i) {
    return (this._binding.onActivation = i), new qu(this._binding);
  }
  onDeactivation(i) {
    return (this._binding.onDeactivation = i), new qu(this._binding);
  }
}
class Ii {
  constructor(i) {
    De(this, "_bindingWhenSyntax");
    De(this, "_bindingOnSyntax");
    De(this, "_binding");
    (this._binding = i),
      (this._bindingWhenSyntax = new qu(this._binding)),
      (this._bindingOnSyntax = new In(this._binding));
  }
  when(i) {
    return this._bindingWhenSyntax.when(i);
  }
  whenTargetNamed(i) {
    return this._bindingWhenSyntax.whenTargetNamed(i);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(i, o) {
    return this._bindingWhenSyntax.whenTargetTagged(i, o);
  }
  whenInjectedInto(i) {
    return this._bindingWhenSyntax.whenInjectedInto(i);
  }
  whenParentNamed(i) {
    return this._bindingWhenSyntax.whenParentNamed(i);
  }
  whenParentTagged(i, o) {
    return this._bindingWhenSyntax.whenParentTagged(i, o);
  }
  whenAnyAncestorIs(i) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(i);
  }
  whenNoAncestorIs(i) {
    return this._bindingWhenSyntax.whenNoAncestorIs(i);
  }
  whenAnyAncestorNamed(i) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(i);
  }
  whenAnyAncestorTagged(i, o) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(i, o);
  }
  whenNoAncestorNamed(i) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(i);
  }
  whenNoAncestorTagged(i, o) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(i, o);
  }
  whenAnyAncestorMatches(i) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(i);
  }
  whenNoAncestorMatches(i) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(i);
  }
  onActivation(i) {
    return this._bindingOnSyntax.onActivation(i);
  }
  onDeactivation(i) {
    return this._bindingOnSyntax.onDeactivation(i);
  }
}
class Qm {
  constructor(i) {
    De(this, "_binding");
    this._binding = i;
  }
  inRequestScope() {
    return (this._binding.scope = rn.Request), new Ii(this._binding);
  }
  inSingletonScope() {
    return (this._binding.scope = rn.Singleton), new Ii(this._binding);
  }
  inTransientScope() {
    return (this._binding.scope = rn.Transient), new Ii(this._binding);
  }
}
class Cp {
  constructor(i) {
    De(this, "_bindingInSyntax");
    De(this, "_bindingWhenSyntax");
    De(this, "_bindingOnSyntax");
    De(this, "_binding");
    (this._binding = i),
      (this._bindingWhenSyntax = new qu(this._binding)),
      (this._bindingOnSyntax = new In(this._binding)),
      (this._bindingInSyntax = new Qm(i));
  }
  inRequestScope() {
    return this._bindingInSyntax.inRequestScope();
  }
  inSingletonScope() {
    return this._bindingInSyntax.inSingletonScope();
  }
  inTransientScope() {
    return this._bindingInSyntax.inTransientScope();
  }
  when(i) {
    return this._bindingWhenSyntax.when(i);
  }
  whenTargetNamed(i) {
    return this._bindingWhenSyntax.whenTargetNamed(i);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(i, o) {
    return this._bindingWhenSyntax.whenTargetTagged(i, o);
  }
  whenInjectedInto(i) {
    return this._bindingWhenSyntax.whenInjectedInto(i);
  }
  whenParentNamed(i) {
    return this._bindingWhenSyntax.whenParentNamed(i);
  }
  whenParentTagged(i, o) {
    return this._bindingWhenSyntax.whenParentTagged(i, o);
  }
  whenAnyAncestorIs(i) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(i);
  }
  whenNoAncestorIs(i) {
    return this._bindingWhenSyntax.whenNoAncestorIs(i);
  }
  whenAnyAncestorNamed(i) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(i);
  }
  whenAnyAncestorTagged(i, o) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(i, o);
  }
  whenNoAncestorNamed(i) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(i);
  }
  whenNoAncestorTagged(i, o) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(i, o);
  }
  whenAnyAncestorMatches(i) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(i);
  }
  whenNoAncestorMatches(i) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(i);
  }
  onActivation(i) {
    return this._bindingOnSyntax.onActivation(i);
  }
  onDeactivation(i) {
    return this._bindingOnSyntax.onDeactivation(i);
  }
}
class Jm {
  constructor(i) {
    De(this, "_binding");
    this._binding = i;
  }
  to(i) {
    return (
      (this._binding.type = Mt.Instance),
      (this._binding.implementationType = i),
      new Cp(this._binding)
    );
  }
  toSelf() {
    if (typeof this._binding.serviceIdentifier != "function")
      throw new Error(
        "The toSelf function can only be applied when a constructor is used as service identifier",
      );
    const i = this._binding.serviceIdentifier;
    return this.to(i);
  }
  toConstantValue(i) {
    return (
      (this._binding.type = Mt.ConstantValue),
      (this._binding.cache = i),
      (this._binding.dynamicValue = null),
      (this._binding.implementationType = null),
      (this._binding.scope = rn.Singleton),
      new Ii(this._binding)
    );
  }
  toDynamicValue(i) {
    return (
      (this._binding.type = Mt.DynamicValue),
      (this._binding.cache = null),
      (this._binding.dynamicValue = i),
      (this._binding.implementationType = null),
      new Cp(this._binding)
    );
  }
  toConstructor(i) {
    return (
      (this._binding.type = Mt.Constructor),
      (this._binding.implementationType = i),
      (this._binding.scope = rn.Singleton),
      new Ii(this._binding)
    );
  }
  toFactory(i) {
    return (
      (this._binding.type = Mt.Factory),
      (this._binding.factory = i),
      (this._binding.scope = rn.Singleton),
      new Ii(this._binding)
    );
  }
  toFunction(i) {
    if (typeof i != "function")
      throw new Error("Value provided to function binding must be a function!");
    const o = this.toConstantValue(i);
    return (
      (this._binding.type = Mt.Function),
      (this._binding.scope = rn.Singleton),
      o
    );
  }
  toAutoFactory(i) {
    return (
      (this._binding.type = Mt.Factory),
      (this._binding.factory = (o) => () => o.container.get(i)),
      (this._binding.scope = rn.Singleton),
      new Ii(this._binding)
    );
  }
  toAutoNamedFactory(i) {
    return (
      (this._binding.type = Mt.Factory),
      (this._binding.factory = (o) => (l) => o.container.getNamed(i, l)),
      new Ii(this._binding)
    );
  }
  toProvider(i) {
    return (
      (this._binding.type = Mt.Provider),
      (this._binding.provider = i),
      (this._binding.scope = rn.Singleton),
      new Ii(this._binding)
    );
  }
  toService(i) {
    (this._binding.type = Mt.DynamicValue),
      Object.defineProperty(this._binding, "cache", {
        configurable: !0,
        enumerable: !0,
        get: () => null,
        set(o) {},
      }),
      (this._binding.dynamicValue = (o) => {
        try {
          return o.container.get(i);
        } catch {
          return o.container.getAsync(i);
        }
      }),
      (this._binding.implementationType = null);
  }
}
class cf {
  constructor() {
    De(this, "bindings");
    De(this, "activations");
    De(this, "deactivations");
    De(this, "middleware");
    De(this, "moduleActivationStore");
  }
  static of(i, o, l, p, m) {
    const v = new cf();
    return (
      (v.bindings = i),
      (v.middleware = o),
      (v.deactivations = p),
      (v.activations = l),
      (v.moduleActivationStore = m),
      v
    );
  }
}
class Ci {
  constructor() {
    De(this, "_map");
    this._map = new Map();
  }
  getMap() {
    return this._map;
  }
  add(i, o) {
    if ((this._checkNonNulish(i), o == null)) throw new Error(vp);
    const l = this._map.get(i);
    l !== void 0 ? l.push(o) : this._map.set(i, [o]);
  }
  get(i) {
    this._checkNonNulish(i);
    const o = this._map.get(i);
    if (o !== void 0) return o;
    throw new Error(yp);
  }
  remove(i) {
    if ((this._checkNonNulish(i), !this._map.delete(i))) throw new Error(yp);
  }
  removeIntersection(i) {
    this.traverse((o, l) => {
      const p = i.hasKey(o) ? i.get(o) : void 0;
      if (p !== void 0) {
        const m = l.filter((v) => !p.some((R) => v === R));
        this._setValue(o, m);
      }
    });
  }
  removeByCondition(i) {
    const o = [];
    return (
      this._map.forEach((l, p) => {
        const m = [];
        for (const v of l) i(v) ? o.push(v) : m.push(v);
        this._setValue(p, m);
      }),
      o
    );
  }
  hasKey(i) {
    return this._checkNonNulish(i), this._map.has(i);
  }
  clone() {
    const i = new Ci();
    return (
      this._map.forEach((o, l) => {
        o.forEach((p) => {
          var m;
          i.add(
            l,
            typeof (m = p) == "object" &&
              m !== null &&
              "clone" in m &&
              typeof m.clone == "function"
              ? p.clone()
              : p,
          );
        });
      }),
      i
    );
  }
  traverse(i) {
    this._map.forEach((o, l) => {
      i(l, o);
    });
  }
  _checkNonNulish(i) {
    if (i == null) throw new Error(vp);
  }
  _setValue(i, o) {
    o.length > 0 ? this._map.set(i, o) : this._map.delete(i);
  }
}
class ff {
  constructor() {
    De(this, "_map", new Map());
  }
  remove(i) {
    const o = this._map.get(i);
    return o === void 0
      ? this._getEmptyHandlersStore()
      : (this._map.delete(i), o);
  }
  addDeactivation(i, o, l) {
    this._getModuleActivationHandlers(i).onDeactivations.add(o, l);
  }
  addActivation(i, o, l) {
    this._getModuleActivationHandlers(i).onActivations.add(o, l);
  }
  clone() {
    const i = new ff();
    return (
      this._map.forEach((o, l) => {
        i._map.set(l, {
          onActivations: o.onActivations.clone(),
          onDeactivations: o.onDeactivations.clone(),
        });
      }),
      i
    );
  }
  _getModuleActivationHandlers(i) {
    let o = this._map.get(i);
    return (
      o === void 0 &&
        ((o = this._getEmptyHandlersStore()), this._map.set(i, o)),
      o
    );
  }
  _getEmptyHandlersStore() {
    return { onActivations: new Ci(), onDeactivations: new Ci() };
  }
}
class $u {
  constructor(i) {
    De(this, "id");
    De(this, "parent");
    De(this, "options");
    De(this, "_middleware");
    De(this, "_bindingDictionary");
    De(this, "_activations");
    De(this, "_deactivations");
    De(this, "_snapshots");
    De(this, "_metadataReader");
    De(this, "_moduleActivationStore");
    const o = i || {};
    if (typeof o != "object")
      throw new Error(
        "Invalid Container constructor argument. Container options must be an object.",
      );
    if (o.defaultScope === void 0) o.defaultScope = rn.Transient;
    else if (
      o.defaultScope !== rn.Singleton &&
      o.defaultScope !== rn.Transient &&
      o.defaultScope !== rn.Request
    )
      throw new Error(
        'Invalid Container option. Default scope must be a string ("singleton" or "transient").',
      );
    if (o.autoBindInjectable === void 0) o.autoBindInjectable = !1;
    else if (typeof o.autoBindInjectable != "boolean")
      throw new Error(
        "Invalid Container option. Auto bind injectable must be a boolean",
      );
    if (o.skipBaseClassChecks === void 0) o.skipBaseClassChecks = !1;
    else if (typeof o.skipBaseClassChecks != "boolean")
      throw new Error(
        "Invalid Container option. Skip base check must be a boolean",
      );
    (this.options = {
      autoBindInjectable: o.autoBindInjectable,
      defaultScope: o.defaultScope,
      skipBaseClassChecks: o.skipBaseClassChecks,
    }),
      (this.id = nl()),
      (this._bindingDictionary = new Ci()),
      (this._snapshots = []),
      (this._middleware = null),
      (this._activations = new Ci()),
      (this._deactivations = new Ci()),
      (this.parent = null),
      (this._metadataReader = new Am()),
      (this._moduleActivationStore = new ff());
  }
  static merge(i, o, ...l) {
    const p = new $u(),
      m = [i, o, ...l].map((R) => Hu(R)),
      v = Hu(p);
    return (
      m.forEach((R) => {
        var _;
        (_ = v),
          R.traverse((D, X) => {
            X.forEach((G) => {
              _.add(G.serviceIdentifier, G.clone());
            });
          });
      }),
      p
    );
  }
  load(...i) {
    const o = this._getContainerModuleHelpersFactory();
    for (const l of i) {
      const p = o(l.id);
      l.registry(
        p.bindFunction,
        p.unbindFunction,
        p.isboundFunction,
        p.rebindFunction,
        p.unbindAsyncFunction,
        p.onActivationFunction,
        p.onDeactivationFunction,
      );
    }
  }
  async loadAsync(...i) {
    const o = this._getContainerModuleHelpersFactory();
    for (const l of i) {
      const p = o(l.id);
      await l.registry(
        p.bindFunction,
        p.unbindFunction,
        p.isboundFunction,
        p.rebindFunction,
        p.unbindAsyncFunction,
        p.onActivationFunction,
        p.onDeactivationFunction,
      );
    }
  }
  unload(...i) {
    i.forEach((o) => {
      const l = this._removeModuleBindings(o.id);
      this._deactivateSingletons(l), this._removeModuleHandlers(o.id);
    });
  }
  async unloadAsync(...i) {
    for (const o of i) {
      const l = this._removeModuleBindings(o.id);
      await this._deactivateSingletonsAsync(l),
        this._removeModuleHandlers(o.id);
    }
  }
  bind(i) {
    return this._bind(this._buildBinding(i));
  }
  rebind(i) {
    return this.unbind(i), this.bind(i);
  }
  async rebindAsync(i) {
    return await this.unbindAsync(i), this.bind(i);
  }
  unbind(i) {
    if (this._bindingDictionary.hasKey(i)) {
      const o = this._bindingDictionary.get(i);
      this._deactivateSingletons(o);
    }
    this._removeServiceFromDictionary(i);
  }
  async unbindAsync(i) {
    if (this._bindingDictionary.hasKey(i)) {
      const o = this._bindingDictionary.get(i);
      await this._deactivateSingletonsAsync(o);
    }
    this._removeServiceFromDictionary(i);
  }
  unbindAll() {
    this._bindingDictionary.traverse((i, o) => {
      this._deactivateSingletons(o);
    }),
      (this._bindingDictionary = new Ci());
  }
  async unbindAllAsync() {
    const i = [];
    this._bindingDictionary.traverse((o, l) => {
      i.push(this._deactivateSingletonsAsync(l));
    }),
      await Promise.all(i),
      (this._bindingDictionary = new Ci());
  }
  onActivation(i, o) {
    this._activations.add(i, o);
  }
  onDeactivation(i, o) {
    this._deactivations.add(i, o);
  }
  isBound(i) {
    let o = this._bindingDictionary.hasKey(i);
    return !o && this.parent && (o = this.parent.isBound(i)), o;
  }
  isCurrentBound(i) {
    return this._bindingDictionary.hasKey(i);
  }
  isBoundNamed(i, o) {
    return this.isBoundTagged(i, Lr, o);
  }
  isBoundTagged(i, o, l) {
    let p = !1;
    if (this._bindingDictionary.hasKey(i)) {
      const m = this._bindingDictionary.get(i),
        v = (function (R, _, D) {
          const X = Nh(_, D),
            G = tl(X);
          if (G.kind === nr.unmanaged)
            throw new Error("Unexpected metadata when creating target");
          const se = new zu("", G, "Variable"),
            Z = new Th(R);
          return new Oa(_, Z, null, [], se);
        })(this, i, { customTag: { key: o, value: l }, isMultiInject: !1 });
      p = m.some((R) => R.constraint(v));
    }
    return !p && this.parent && (p = this.parent.isBoundTagged(i, o, l)), p;
  }
  snapshot() {
    this._snapshots.push(
      cf.of(
        this._bindingDictionary.clone(),
        this._middleware,
        this._activations.clone(),
        this._deactivations.clone(),
        this._moduleActivationStore.clone(),
      ),
    );
  }
  restore() {
    const i = this._snapshots.pop();
    if (i === void 0) throw new Error("No snapshot available to restore.");
    (this._bindingDictionary = i.bindings),
      (this._activations = i.activations),
      (this._deactivations = i.deactivations),
      (this._middleware = i.middleware),
      (this._moduleActivationStore = i.moduleActivationStore);
  }
  createChild(i) {
    const o = new $u(i || this.options);
    return (o.parent = this), o;
  }
  applyMiddleware(...i) {
    const o = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = i.reduce((l, p) => p(l), o);
  }
  applyCustomMetadataReader(i) {
    this._metadataReader = i;
  }
  get(i) {
    const o = this._getNotAllArgs(i, !1, !1);
    return this._getButThrowIfAsync(o);
  }
  async getAsync(i) {
    const o = this._getNotAllArgs(i, !1, !1);
    return this._get(o);
  }
  getTagged(i, o, l) {
    const p = this._getNotAllArgs(i, !1, !1, o, l);
    return this._getButThrowIfAsync(p);
  }
  async getTaggedAsync(i, o, l) {
    const p = this._getNotAllArgs(i, !1, !1, o, l);
    return this._get(p);
  }
  getNamed(i, o) {
    return this.getTagged(i, Lr, o);
  }
  async getNamedAsync(i, o) {
    return this.getTaggedAsync(i, Lr, o);
  }
  getAll(i, o) {
    const l = this._getAllArgs(i, o, !1);
    return this._getButThrowIfAsync(l);
  }
  async getAllAsync(i, o) {
    const l = this._getAllArgs(i, o, !1);
    return this._getAll(l);
  }
  getAllTagged(i, o, l) {
    const p = this._getNotAllArgs(i, !0, !1, o, l);
    return this._getButThrowIfAsync(p);
  }
  async getAllTaggedAsync(i, o, l) {
    const p = this._getNotAllArgs(i, !0, !1, o, l);
    return this._getAll(p);
  }
  getAllNamed(i, o) {
    return this.getAllTagged(i, Lr, o);
  }
  async getAllNamedAsync(i, o) {
    return this.getAllTaggedAsync(i, Lr, o);
  }
  resolve(i) {
    const o = this.isBound(i);
    o || this.bind(i).toSelf();
    const l = this.get(i);
    return o || this.unbind(i), l;
  }
  tryGet(i) {
    const o = this._getNotAllArgs(i, !1, !0);
    return this._getButThrowIfAsync(o);
  }
  async tryGetAsync(i) {
    const o = this._getNotAllArgs(i, !1, !0);
    return this._get(o);
  }
  tryGetTagged(i, o, l) {
    const p = this._getNotAllArgs(i, !1, !0, o, l);
    return this._getButThrowIfAsync(p);
  }
  async tryGetTaggedAsync(i, o, l) {
    const p = this._getNotAllArgs(i, !1, !0, o, l);
    return this._get(p);
  }
  tryGetNamed(i, o) {
    return this.tryGetTagged(i, Lr, o);
  }
  async tryGetNamedAsync(i, o) {
    return this.tryGetTaggedAsync(i, Lr, o);
  }
  tryGetAll(i, o) {
    const l = this._getAllArgs(i, o, !0);
    return this._getButThrowIfAsync(l);
  }
  async tryGetAllAsync(i, o) {
    const l = this._getAllArgs(i, o, !0);
    return this._getAll(l);
  }
  tryGetAllTagged(i, o, l) {
    const p = this._getNotAllArgs(i, !0, !0, o, l);
    return this._getButThrowIfAsync(p);
  }
  async tryGetAllTaggedAsync(i, o, l) {
    const p = this._getNotAllArgs(i, !0, !0, o, l);
    return this._getAll(p);
  }
  tryGetAllNamed(i, o) {
    return this.tryGetAllTagged(i, Lr, o);
  }
  async tryGetAllNamedAsync(i, o) {
    return this.tryGetAllTaggedAsync(i, Lr, o);
  }
  _preDestroy(i, o) {
    var l;
    if (i !== void 0 && Reflect.hasMetadata(qc, i)) {
      const p = Reflect.getMetadata(qc, i);
      return (l = o[p.value]) == null ? void 0 : l.call(o);
    }
  }
  _removeModuleHandlers(i) {
    const o = this._moduleActivationStore.remove(i);
    this._activations.removeIntersection(o.onActivations),
      this._deactivations.removeIntersection(o.onDeactivations);
  }
  _removeModuleBindings(i) {
    return this._bindingDictionary.removeByCondition((o) => o.moduleId === i);
  }
  _deactivate(i, o) {
    const l = o == null ? void 0 : Object.getPrototypeOf(o).constructor;
    try {
      if (this._deactivations.hasKey(i.serviceIdentifier)) {
        const m = this._deactivateContainer(
          o,
          this._deactivations.get(i.serviceIdentifier).values(),
        );
        if (tr(m))
          return this._handleDeactivationError(
            m.then(async () =>
              this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(
                i,
                o,
                l,
              ),
            ),
            i.serviceIdentifier,
          );
      }
      const p = this._propagateContainerDeactivationThenBindingAndPreDestroy(
        i,
        o,
        l,
      );
      if (tr(p)) return this._handleDeactivationError(p, i.serviceIdentifier);
    } catch (p) {
      if (p instanceof Error)
        throw new Error($c(no(i.serviceIdentifier), p.message));
    }
  }
  async _handleDeactivationError(i, o) {
    try {
      await i;
    } catch (l) {
      if (l instanceof Error) throw new Error($c(no(o), l.message));
    }
  }
  _deactivateContainer(i, o) {
    let l = o.next();
    for (; typeof l.value == "function"; ) {
      const p = l.value(i);
      if (tr(p))
        return p.then(async () => this._deactivateContainerAsync(i, o));
      l = o.next();
    }
  }
  async _deactivateContainerAsync(i, o) {
    let l = o.next();
    for (; typeof l.value == "function"; ) await l.value(i), (l = o.next());
  }
  _getContainerModuleHelpersFactory() {
    const i = (_) => (D) => {
        const X = this._buildBinding(D);
        return (X.moduleId = _), this._bind(X);
      },
      o = () => (_) => {
        this.unbind(_);
      },
      l = () => async (_) => this.unbindAsync(_),
      p = () => (_) => this.isBound(_),
      m = (_) => {
        const D = i(_);
        return (X) => (this.unbind(X), D(X));
      },
      v = (_) => (D, X) => {
        this._moduleActivationStore.addActivation(_, D, X),
          this.onActivation(D, X);
      },
      R = (_) => (D, X) => {
        this._moduleActivationStore.addDeactivation(_, D, X),
          this.onDeactivation(D, X);
      };
    return (_) => ({
      bindFunction: i(_),
      isboundFunction: p(),
      onActivationFunction: v(_),
      onDeactivationFunction: R(_),
      rebindFunction: m(_),
      unbindAsyncFunction: l(),
      unbindFunction: o(),
    });
  }
  _bind(i) {
    return this._bindingDictionary.add(i.serviceIdentifier, i), new Jm(i);
  }
  _buildBinding(i) {
    const o = this.options.defaultScope || rn.Transient;
    return new uf(i, o);
  }
  async _getAll(i) {
    return Promise.all(this._get(i));
  }
  _get(i) {
    const o = { ...i, contextInterceptor: (l) => l, targetType: Ih.Variable };
    if (this._middleware) {
      const l = this._middleware(o);
      if (l == null)
        throw new Error(
          "Invalid return type in middleware. Middleware must return!",
        );
      return l;
    }
    return this._planAndResolve()(o);
  }
  _getButThrowIfAsync(i) {
    const o = this._get(i);
    if (Lh(o))
      throw new Error(
        `You are attempting to construct ${(function (l) {
          return typeof l == "function"
            ? `[function/class ${l.name || "<anonymous>"}]`
            : typeof l == "symbol"
              ? l.toString()
              : `'${l}'`;
        })(
          i.serviceIdentifier,
        )} in a synchronous way but it has asynchronous dependencies.`,
      );
    return o;
  }
  _getAllArgs(i, o, l) {
    return {
      avoidConstraints: !(o != null && o.enforceBindingConstraints),
      isMultiInject: !0,
      isOptional: l,
      serviceIdentifier: i,
    };
  }
  _getNotAllArgs(i, o, l, p, m) {
    return {
      avoidConstraints: !1,
      isMultiInject: o,
      isOptional: l,
      key: p,
      serviceIdentifier: i,
      value: m,
    };
  }
  _getPlanMetadataFromNextArgs(i) {
    const o = { isMultiInject: i.isMultiInject };
    return (
      i.key !== void 0 && (o.customTag = { key: i.key, value: i.value }),
      i.isOptional === !0 && (o.isOptional = !0),
      o
    );
  }
  _planAndResolve() {
    return (i) => {
      let o = Dm(
        this._metadataReader,
        this,
        i.targetType,
        i.serviceIdentifier,
        this._getPlanMetadataFromNextArgs(i),
        i.avoidConstraints,
      );
      return (
        (o = i.contextInterceptor(o)),
        (function (p) {
          return lf(p.plan.rootRequest.requestScope)(p.plan.rootRequest);
        })(o)
      );
    };
  }
  _deactivateIfSingleton(i) {
    if (i.activated)
      return tr(i.cache)
        ? i.cache.then((o) => this._deactivate(i, o))
        : this._deactivate(i, i.cache);
  }
  _deactivateSingletons(i) {
    for (const o of i)
      if (tr(this._deactivateIfSingleton(o)))
        throw new Error(
          "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)",
        );
  }
  async _deactivateSingletonsAsync(i) {
    await Promise.all(i.map(async (o) => this._deactivateIfSingleton(o)));
  }
  _propagateContainerDeactivationThenBindingAndPreDestroy(i, o, l) {
    return this.parent
      ? this._deactivate.bind(this.parent)(i, o)
      : this._bindingDeactivationAndPreDestroy(i, o, l);
  }
  async _propagateContainerDeactivationThenBindingAndPreDestroyAsync(i, o, l) {
    this.parent
      ? await this._deactivate.bind(this.parent)(i, o)
      : await this._bindingDeactivationAndPreDestroyAsync(i, o, l);
  }
  _removeServiceFromDictionary(i) {
    try {
      this._bindingDictionary.remove(i);
    } catch {
      throw new Error(`Could not unbind serviceIdentifier: ${no(i)}`);
    }
  }
  _bindingDeactivationAndPreDestroy(i, o, l) {
    if (typeof i.onDeactivation == "function") {
      const p = i.onDeactivation(o);
      if (tr(p)) return p.then(() => this._preDestroy(l, o));
    }
    return this._preDestroy(l, o);
  }
  async _bindingDeactivationAndPreDestroyAsync(i, o, l) {
    typeof i.onDeactivation == "function" && (await i.onDeactivation(o)),
      await this._preDestroy(l, o);
  }
}
function Km(r, i, o, l) {
  (function (p) {
    if (p !== void 0) throw new Error(Ch);
  })(i),
    jh(Eh, r, o.toString(), l);
}
function Xm(r) {
  let i = [];
  if (Array.isArray(r)) {
    i = r;
    const o = (function (l) {
      const p = new Set();
      for (const m of l) {
        if (p.has(m)) return m;
        p.add(m);
      }
    })(i.map((l) => l.key));
    if (o !== void 0) throw new Error(`${xh} ${o.toString()}`);
  } else i = [r];
  return i;
}
function jh(r, i, o, l) {
  const p = Xm(l);
  let m = {};
  Reflect.hasOwnMetadata(r, i) && (m = Reflect.getMetadata(r, i));
  let v = m[o];
  if (v === void 0) v = [];
  else
    for (const R of v)
      if (p.some((_) => _.key === R.key))
        throw new Error(`${xh} ${R.key.toString()}`);
  v.push(...p), (m[o] = v), Reflect.defineMetadata(r, m, i);
}
function Ym(r) {
  return (i, o, l) => {
    typeof l == "number"
      ? Km(i, o, l, r)
      : (function (p, m, v) {
          if (p.prototype !== void 0) throw new Error(Ch);
          jh(_h, p.constructor, m, v);
        })(i, o, r);
  };
}
function rl() {
  return function (r) {
    if (Reflect.hasOwnMetadata(gp, r))
      throw new Error("Cannot apply @injectable decorator multiple times.");
    const i = Reflect.getMetadata(kh, r) || [];
    return Reflect.defineMetadata(gp, i, r), r;
  };
}
function Zm(r) {
  return (i) => (o, l, p) => {
    if (i === void 0) {
      const m = typeof o == "function" ? o.name : o.constructor.name;
      throw new Error(
        `@inject called with undefined this could mean that the class ${m} has a circular dependency problem. You can use a LazyServiceIdentifer to overcome this limitation.`,
      );
    }
    Ym(new Sa(r, i))(o, l, p);
  };
}
const Oi = Zm(Sh);
var Vc = function (r, i) {
  return (
    (Vc =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (o, l) {
          o.__proto__ = l;
        }) ||
      function (o, l) {
        for (var p in l)
          Object.prototype.hasOwnProperty.call(l, p) && (o[p] = l[p]);
      }),
    Vc(r, i)
  );
};
function df(r, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError(
      "Class extends value " + String(i) + " is not a constructor or null",
    );
  Vc(r, i);
  function o() {
    this.constructor = r;
  }
  r.prototype =
    i === null ? Object.create(i) : ((o.prototype = i.prototype), new o());
}
function Op(r) {
  var i = typeof Symbol == "function" && Symbol.iterator,
    o = i && r[i],
    l = 0;
  if (o) return o.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && l >= r.length && (r = void 0), { value: r && r[l++], done: !r }
        );
      },
    };
  throw new TypeError(
    i ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Vu(r, i) {
  var o = typeof Symbol == "function" && r[Symbol.iterator];
  if (!o) return r;
  var l = o.call(r),
    p,
    m = [],
    v;
  try {
    for (; (i === void 0 || i-- > 0) && !(p = l.next()).done; ) m.push(p.value);
  } catch (R) {
    v = { error: R };
  } finally {
    try {
      p && !p.done && (o = l.return) && o.call(l);
    } finally {
      if (v) throw v.error;
    }
  }
  return m;
}
function Gu(r, i, o) {
  if (o || arguments.length === 2)
    for (var l = 0, p = i.length, m; l < p; l++)
      (m || !(l in i)) &&
        (m || (m = Array.prototype.slice.call(i, 0, l)), (m[l] = i[l]));
  return r.concat(m || Array.prototype.slice.call(i));
}
function jr(r) {
  return typeof r == "function";
}
function ev(r) {
  var i = function (l) {
      Error.call(l), (l.stack = new Error().stack);
    },
    o = r(i);
  return (
    (o.prototype = Object.create(Error.prototype)),
    (o.prototype.constructor = o),
    o
  );
}
var Mc = ev(function (r) {
  return function (o) {
    r(this),
      (this.message = o
        ? o.length +
          ` errors occurred during unsubscription:
` +
          o.map(function (l, p) {
            return p + 1 + ") " + l.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = o);
  };
});
function bp(r, i) {
  if (r) {
    var o = r.indexOf(i);
    0 <= o && r.splice(o, 1);
  }
}
var pf = (function () {
  function r(i) {
    (this.initialTeardown = i),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  return (
    (r.prototype.unsubscribe = function () {
      var i, o, l, p, m;
      if (!this.closed) {
        this.closed = !0;
        var v = this._parentage;
        if (v)
          if (((this._parentage = null), Array.isArray(v)))
            try {
              for (var R = Op(v), _ = R.next(); !_.done; _ = R.next()) {
                var D = _.value;
                D.remove(this);
              }
            } catch (V) {
              i = { error: V };
            } finally {
              try {
                _ && !_.done && (o = R.return) && o.call(R);
              } finally {
                if (i) throw i.error;
              }
            }
          else v.remove(this);
        var X = this.initialTeardown;
        if (jr(X))
          try {
            X();
          } catch (V) {
            m = V instanceof Mc ? V.errors : [V];
          }
        var G = this._finalizers;
        if (G) {
          this._finalizers = null;
          try {
            for (var se = Op(G), Z = se.next(); !Z.done; Z = se.next()) {
              var ie = Z.value;
              try {
                Rp(ie);
              } catch (V) {
                (m = m ?? []),
                  V instanceof Mc
                    ? (m = Gu(Gu([], Vu(m)), Vu(V.errors)))
                    : m.push(V);
              }
            }
          } catch (V) {
            l = { error: V };
          } finally {
            try {
              Z && !Z.done && (p = se.return) && p.call(se);
            } finally {
              if (l) throw l.error;
            }
          }
        }
        if (m) throw new Mc(m);
      }
    }),
    (r.prototype.add = function (i) {
      var o;
      if (i && i !== this)
        if (this.closed) Rp(i);
        else {
          if (i instanceof r) {
            if (i.closed || i._hasParent(this)) return;
            i._addParent(this);
          }
          (this._finalizers =
            (o = this._finalizers) !== null && o !== void 0 ? o : []).push(i);
        }
    }),
    (r.prototype._hasParent = function (i) {
      var o = this._parentage;
      return o === i || (Array.isArray(o) && o.includes(i));
    }),
    (r.prototype._addParent = function (i) {
      var o = this._parentage;
      this._parentage = Array.isArray(o) ? (o.push(i), o) : o ? [o, i] : i;
    }),
    (r.prototype._removeParent = function (i) {
      var o = this._parentage;
      o === i ? (this._parentage = null) : Array.isArray(o) && bp(o, i);
    }),
    (r.prototype.remove = function (i) {
      var o = this._finalizers;
      o && bp(o, i), i instanceof r && i._removeParent(this);
    }),
    (r.EMPTY = (function () {
      var i = new r();
      return (i.closed = !0), i;
    })()),
    r
  );
})();
pf.EMPTY;
function Fh(r) {
  return (
    r instanceof pf ||
    (r && "closed" in r && jr(r.remove) && jr(r.add) && jr(r.unsubscribe))
  );
}
function Rp(r) {
  jr(r) ? r() : r.unsubscribe();
}
var tv = { Promise: void 0 },
  nv = {
    setTimeout: function (r, i) {
      for (var o = [], l = 2; l < arguments.length; l++)
        o[l - 2] = arguments[l];
      return setTimeout.apply(void 0, Gu([r, i], Vu(o)));
    },
    clearTimeout: function (r) {
      return clearTimeout(r);
    },
    delegate: void 0,
  };
function rv(r) {
  nv.setTimeout(function () {
    throw r;
  });
}
function Pp() {}
function iv(r) {
  r();
}
var hf = (function (r) {
    df(i, r);
    function i(o) {
      var l = r.call(this) || this;
      return (
        (l.isStopped = !1),
        o ? ((l.destination = o), Fh(o) && o.add(l)) : (l.destination = av),
        l
      );
    }
    return (
      (i.create = function (o, l, p) {
        return new Gc(o, l, p);
      }),
      (i.prototype.next = function (o) {
        this.isStopped || this._next(o);
      }),
      (i.prototype.error = function (o) {
        this.isStopped || ((this.isStopped = !0), this._error(o));
      }),
      (i.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (i.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          r.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (i.prototype._next = function (o) {
        this.destination.next(o);
      }),
      (i.prototype._error = function (o) {
        try {
          this.destination.error(o);
        } finally {
          this.unsubscribe();
        }
      }),
      (i.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      i
    );
  })(pf),
  ov = (function () {
    function r(i) {
      this.partialObserver = i;
    }
    return (
      (r.prototype.next = function (i) {
        var o = this.partialObserver;
        if (o.next)
          try {
            o.next(i);
          } catch (l) {
            Au(l);
          }
      }),
      (r.prototype.error = function (i) {
        var o = this.partialObserver;
        if (o.error)
          try {
            o.error(i);
          } catch (l) {
            Au(l);
          }
        else Au(i);
      }),
      (r.prototype.complete = function () {
        var i = this.partialObserver;
        if (i.complete)
          try {
            i.complete();
          } catch (o) {
            Au(o);
          }
      }),
      r
    );
  })(),
  Gc = (function (r) {
    df(i, r);
    function i(o, l, p) {
      var m = r.call(this) || this,
        v;
      return (
        jr(o) || !o
          ? (v = {
              next: o ?? void 0,
              error: l ?? void 0,
              complete: p ?? void 0,
            })
          : (v = o),
        (m.destination = new ov(v)),
        m
      );
    }
    return i;
  })(hf);
function Au(r) {
  rv(r);
}
function sv(r) {
  throw r;
}
var av = { closed: !0, next: Pp, error: sv, complete: Pp },
  uv = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function lv(r) {
  return r;
}
function cv(r) {
  return r.length === 0
    ? lv
    : r.length === 1
      ? r[0]
      : function (o) {
          return r.reduce(function (l, p) {
            return p(l);
          }, o);
        };
}
var fv = (function () {
  function r(i) {
    i && (this._subscribe = i);
  }
  return (
    (r.prototype.lift = function (i) {
      var o = new r();
      return (o.source = this), (o.operator = i), o;
    }),
    (r.prototype.subscribe = function (i, o, l) {
      var p = this,
        m = pv(i) ? i : new Gc(i, o, l);
      return (
        iv(function () {
          var v = p,
            R = v.operator,
            _ = v.source;
          m.add(R ? R.call(m, _) : _ ? p._subscribe(m) : p._trySubscribe(m));
        }),
        m
      );
    }),
    (r.prototype._trySubscribe = function (i) {
      try {
        return this._subscribe(i);
      } catch (o) {
        i.error(o);
      }
    }),
    (r.prototype.forEach = function (i, o) {
      var l = this;
      return (
        (o = Tp(o)),
        new o(function (p, m) {
          var v = new Gc({
            next: function (R) {
              try {
                i(R);
              } catch (_) {
                m(_), v.unsubscribe();
              }
            },
            error: m,
            complete: p,
          });
          l.subscribe(v);
        })
      );
    }),
    (r.prototype._subscribe = function (i) {
      var o;
      return (o = this.source) === null || o === void 0
        ? void 0
        : o.subscribe(i);
    }),
    (r.prototype[uv] = function () {
      return this;
    }),
    (r.prototype.pipe = function () {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      return cv(i)(this);
    }),
    (r.prototype.toPromise = function (i) {
      var o = this;
      return (
        (i = Tp(i)),
        new i(function (l, p) {
          var m;
          o.subscribe(
            function (v) {
              return (m = v);
            },
            function (v) {
              return p(v);
            },
            function () {
              return l(m);
            },
          );
        })
      );
    }),
    (r.create = function (i) {
      return new r(i);
    }),
    r
  );
})();
function Tp(r) {
  var i;
  return (i = r ?? tv.Promise) !== null && i !== void 0 ? i : Promise;
}
function dv(r) {
  return r && jr(r.next) && jr(r.error) && jr(r.complete);
}
function pv(r) {
  return (r && r instanceof hf) || (dv(r) && Fh(r));
}
function hv(r) {
  return jr(r == null ? void 0 : r.lift);
}
function Uh(r) {
  return function (i) {
    if (hv(i))
      return i.lift(function (o) {
        try {
          return r(o, this);
        } catch (l) {
          this.error(l);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Bh(r, i, o, l, p) {
  return new gv(r, i, o, l, p);
}
var gv = (function (r) {
  df(i, r);
  function i(o, l, p, m, v, R) {
    var _ = r.call(this, o) || this;
    return (
      (_.onFinalize = v),
      (_.shouldUnsubscribe = R),
      (_._next = l
        ? function (D) {
            try {
              l(D);
            } catch (X) {
              o.error(X);
            }
          }
        : r.prototype._next),
      (_._error = m
        ? function (D) {
            try {
              m(D);
            } catch (X) {
              o.error(X);
            } finally {
              this.unsubscribe();
            }
          }
        : r.prototype._error),
      (_._complete = p
        ? function () {
            try {
              p();
            } catch (D) {
              o.error(D);
            } finally {
              this.unsubscribe();
            }
          }
        : r.prototype._complete),
      _
    );
  }
  return (
    (i.prototype.unsubscribe = function () {
      var o;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var l = this.closed;
        r.prototype.unsubscribe.call(this),
          !l &&
            ((o = this.onFinalize) === null || o === void 0 || o.call(this));
      }
    }),
    i
  );
})(hf);
function mv(r, i) {
  return Uh(function (o, l) {
    var p = 0;
    o.subscribe(
      Bh(l, function (m) {
        l.next(r.call(i, m, p++));
      }),
    );
  });
}
var vv = Array.isArray;
function yv(r, i) {
  return vv(i) ? r.apply(void 0, Gu([], Vu(i))) : r(i);
}
function wv(r) {
  return mv(function (i) {
    return yv(r, i);
  });
}
function Wh(r, i, o) {
  return o
    ? Wh(r, i).pipe(wv(o))
    : new fv(function (l) {
        var p = function () {
            for (var v = [], R = 0; R < arguments.length; R++)
              v[R] = arguments[R];
            return l.next(v.length === 1 ? v[0] : v);
          },
          m = r(p);
        return jr(i)
          ? function () {
              return i(p, m);
            }
          : void 0;
      });
}
function Ap(r, i) {
  return Uh(function (o, l) {
    var p = 0;
    o.subscribe(
      Bh(l, function (m) {
        return r.call(i, m, p++) && l.next(m);
      }),
    );
  });
}
const Qu = (r, i) => {
    try {
      return JSON.parse(r);
    } catch (o) {
      return (
        console.error(`[parseJson] parse json error, jsonString: ${r}`, o), i
      );
    }
  },
  Ho = (r) => {
    try {
      return JSON.stringify(r);
    } catch (i) {
      return (
        console.error(`[stringifyJson] stringify json error, json: ${r}`, i), ""
      );
    }
  },
  Sv = (r) => r != null,
  Ju = (r, i = 0) => {
    const o = parseFloat(r);
    return isNaN(o) ? i : o;
  };
var He = Zu();
const zh = Yu(He),
  Ev = im({ __proto__: null, default: zh }, [He]),
  ro = Symbol.for("LOGGER"),
  Hh = Symbol.for("BEACON_EVENT_CODE"),
  qh = Symbol.for("ACCOUNT_SERVICE"),
  $h = Symbol.for("REPORT_SERVICE");
function Vh(r) {
  return r.replace(/[_.-](\w|$)/g, function (i, o) {
    return o.toUpperCase();
  });
}
function ju(r, i = !1) {
  return !r || typeof r != "object" || r instanceof Date || r instanceof RegExp
    ? r
    : Array.isArray(r)
      ? r.map((o) => (i ? (typeof o == "object" ? ju(o, i) : o) : ju(o)))
      : Object.keys(r).reduce((o, l) => {
          const p = Vh(l),
            m = p.charAt(0).toLowerCase() + p.slice(1);
          return (o[m] = i ? r[l] : ju(r[l])), o;
        }, {});
}
function Gh(r, i) {
  return typeof r == "string" ? Vh(r) : ju(r, i);
}
const _v = [];
for (let r = 0; r < 256; ++r) _v.push((r + 256).toString(16).slice(1));
var Yi = ((r) => (
  (r[(r.Unknown = 995)] = "Unknown"),
  (r[(r.Timeout = 996)] = "Timeout"),
  (r[(r.FrontendException = 997)] = "FrontendException"),
  r
))(Yi || {});
const kv = ({ action: r, params: i }) => {
    var o, l, p;
    console.warn("[callNative] 触发终端调用：", r),
      (p =
        (l =
          (o = globalThis == null ? void 0 : globalThis.chrome) == null
            ? void 0
            : o.imaFrame) == null
          ? void 0
          : l.invoke) == null || p.call(l, { action: r, params: Ho(i) });
  },
  Iv = () => globalThis.navigator.userAgent.includes("IMA"),
  Qh = async ({ action: r, params: i, timeout: o = 5e3 }) => {
    console.warn("[callNativePromise] 触发终端调用：", r, JSON.stringify(i));
    try {
      return Iv()
        ? new Promise((l) => {
            var p, m, v;
            setTimeout(() => {
              l({ code: Yi.Timeout, msg: "接口执行超时", data: null });
            }, o),
              (v =
                (m = (p = globalThis.chrome) == null ? void 0 : p.imaFrame) ==
                null
                  ? void 0
                  : m.invokeWithCallback) == null ||
                v.call(m, { action: r, params: Ho(i) }, (R) => {
                  l(R);
                });
          })
        : Promise.resolve({ code: 0, msg: "", data: null });
    } catch (l) {
      return {
        code: Yi.FrontendException,
        msg: `执行异常: ${Ho(l)}`,
        data: null,
      };
    }
  },
  xv = async () => {
    const r = await Qh({ action: tf.GetDeviceInfo }),
      { code: i, data: o } = r || {};
    return i !== 0 || !o ? null : Qu(o, null);
  };
var Cv = Object.getOwnPropertyDescriptor,
  Ov = (r, i, o, l) => {
    for (
      var p = l > 1 ? void 0 : l ? Cv(i, o) : i, m = r.length - 1, v;
      m >= 0;
      m--
    )
      (v = r[m]) && (p = v(p) || p);
    return p;
  },
  bv = (r, i) => (o, l) => i(o, l, r);
let Qc = class {
  constructor(r) {
    (this.callNative = r),
      (this.info = (i, o = "NativeLogger") => {
        this.callNative({
          action: "log",
          params: { msg: `[${o}] ${i}`, level: 0 },
        });
      }),
      (this.error = (i, o = "NativeLogger") => {
        const l = typeof i == "string" ? i : JSON.stringify(i);
        this.callNative({
          action: "log",
          params: { msg: `[${o}] ${l}`, level: 2 },
        });
      }),
      (this.reportEvent = () => {}),
      (this.reportTime = () => {});
  }
};
Qc = Ov([rl(), bv(0, Oi(cm))], Qc);
const Jc = (r) => {
    const {
        userId: i = "",
        userInfo: o,
        idType: l = 0,
        token: p = "",
        refreshToken: m = "",
        tokenType: v = 0,
        refreshTokenValidTime: R = "",
        tokenValidTime: _ = "",
      } = Gh(r),
      { customInfo: D, openInfo: X, knowledgeMatrixInfo: G } = o || {},
      { nick: se, head: Z } = D || {},
      {
        avatarUrl: ie,
        nickname: V,
        openid: J,
        type: _e,
        guid: te,
        uid: me,
      } = X || {};
    return {
      token: p,
      refreshToken: m,
      userId: i,
      avatarUrl: ie,
      idType: l,
      guid: te,
      uid: me,
      customAvatarUrl: Z,
      customNickName: se,
      nickName: V,
      accountType: _e,
      openId: J,
      tokenType: v,
      tokenValidTime: Ju(_, 1 / 0),
      refreshTokenValidTime: Ju(R, 1 / 0),
      knowledgeMatrixInfo:
        G != null && G.knowledgeMatrixId
          ? {
              avatar: G.avatarUrl,
              nickname: G.nickname,
              knowledgeMatrixId: G.knowledgeMatrixId,
            }
          : void 0,
    };
  },
  Rv = (r) => {
    if (!(r != null && r.data)) return console.error("终端接口空响应"), null;
    if ((r == null ? void 0 : r.code) !== 0)
      return console.error("异常错误码", JSON.stringify(r)), null;
    const i = Qu(r.data, {});
    return Jc(i);
  },
  Pv = async () => {
    const r = await Qh({ action: tf.GetAccountInfo });
    return Rv(r);
  },
  Tv = (r) => {
    var o, l, p;
    const i = (m, v) => {
      const R = m ? Jc(JSON.parse(m)) : null,
        _ = v ? Jc(JSON.parse(v)) : null;
      r(R, _);
    };
    return (
      (p =
        (l =
          (o = globalThis == null ? void 0 : globalThis.chrome) == null
            ? void 0
            : o.imaFrame) == null
          ? void 0
          : l.onAccountInfoChange) == null || p.addListener(i),
      () => {
        var m, v, R;
        (R =
          (v =
            (m = globalThis == null ? void 0 : globalThis.chrome) == null
              ? void 0
              : m.imaFrame) == null
            ? void 0
            : v.onAccountInfoChange) == null || R.removeListener(i);
      }
    );
  };
var Av = Object.getOwnPropertyDescriptor,
  Nv = (r, i, o, l) => {
    for (
      var p = l > 1 ? void 0 : l ? Av(i, o) : i, m = r.length - 1, v;
      m >= 0;
      m--
    )
      (v = r[m]) && (p = v(p) || p);
    return p;
  },
  Nu = (r, i) => (o, l) => i(o, l, r),
  il = ((r) => (
    (r.InvokeWithPromise = "invokeWithPromise"),
    (r.OnAccountInfoChange = "onAccountInfoChange"),
    (r.OnLoginDialogClose = "onLoginDialogClose"),
    r
  ))(il || {});
let wn = class {
  constructor(r, i, o, l) {
    (this.invokeWithPromise = r),
      (this.onAccountInfoChange = i),
      (this.onLoginDialogClose = o),
      (this.logger = l),
      (this.getAccountInfo = async () => {
        const p = await this.invokeWithPromise({
            action: "getAccountInfo",
            params: {},
          }),
          m = this.handleResponse(p);
        return (
          this.logger.info(
            `当前用户登录信息: ${this.getAccountInfoLog(m)}`,
            `${wn.tag}.getAccountInfo`,
          ),
          m
        );
      }),
      (this.refreshToken = async (p = !1) => {
        const m = await this.invokeWithPromise({
          action: "refreshToken",
          timeout: Hc.Request,
        });
        if (m.code === zc.CallNativeTimeout && !p)
          return (
            this.logger.info(
              "刷新票据超时，重试一次",
              `${wn.tag}.refreshToken`,
            ),
            this.refreshToken(!0)
          );
        const v = this.handleResponse(m);
        return (
          this.logger.info(
            `刷新后的用户登录信息: ${this.getAccountInfoLog(v)}`,
            `${wn.tag}.refreshToken`,
          ),
          v
        );
      }),
      (this.verifyWxCode = async (p, m = !1) => {
        const v = await this.invokeWithPromise({
          action: "verifyWxCode",
          params: { wxCode: p, loginType: uh.WX },
          timeout: Hc.Request,
        });
        if (v.code === zc.CallNativeTimeout && !m)
          return (
            this.logger.info(
              `verifyWxCode ${p} 超时，重试一次`,
              `${wn.tag}.verifyWxCode`,
            ),
            this.verifyWxCode(p, !0)
          );
        const R = this.handleResponse(v);
        return (
          this.logger.info(
            `当前用户登录信息: ${this.getAccountInfoLog(R)}`,
            `${wn.tag}.verifyWxCode`,
          ),
          R
        );
      }),
      (this.showLoginPanel = async () => {
        this.logger.info("展示用户登录弹窗", `${wn.tag}.showLoginPanel`);
        const { data: p } = await this.invokeWithPromise({ action: "login" });
        return Qu(p || "", { loginId: "" }).loginId;
      }),
      (this.closeLoginDialog = () => {
        this.logger.info("关闭用户登录弹窗", `${wn.tag}.CloseLoginDialog`),
          this.invokeWithPromise({ action: "closeLoginDialog" });
      }),
      (this.loginAsync = () => {
        this.logger.info("LoginAsync", `${wn.tag}.LoginAsync`),
          this.showLoginPanel();
        const p = Promise.withResolvers();
        return (
          this.onAccountInfoChange((m, v) => {
            this.logger.info(
              `用户信息发生变化 ${this.getAccountInfoLog(v)}`,
              `${wn.tag}.LoginAsync`,
            ),
              this.validateAccountInfo(v) && p.resolve(v);
          }),
          this.onLoginDialogClose(() => {
            this.logger.info("用户关闭登录弹窗", `${wn.tag}.LoginAsync`),
              p.resolve(null);
          }),
          p.promise
        );
      }),
      (this.logout = () => {
        this.invokeWithPromise({ action: "logout" });
      }),
      (this.checkAndLogin = async () => {
        if (!(await this.checkIsLogin())) {
          const m = await this.loginAsync();
          return !!(m != null && m.userId);
        }
        return !0;
      }),
      (this.formatServerAccountInfo = (p) => {
        const {
            userId: m = "",
            userInfo: v,
            idType: R = 0,
            token: _ = "",
            refreshToken: D = "",
            tokenType: X = 0,
            refreshTokenValidTime: G = "",
            tokenValidTime: se = "",
          } = Gh(p),
          { customInfo: Z, openInfo: ie, knowledgeMatrixInfo: V } = v || {},
          { nick: J, head: _e } = Z || {},
          {
            avatarUrl: te,
            nickname: me,
            openid: Ze,
            type: Ge,
            guid: Et,
            uid: Qe,
          } = ie || {};
        return {
          token: _,
          refreshToken: D,
          userId: m,
          avatarUrl: te,
          idType: R,
          guid: Et,
          uid: Qe,
          customAvatarUrl: _e,
          customNickName: J,
          nickName: me,
          accountType: Ge,
          openId: Ze,
          tokenType: X,
          tokenValidTime: Ju(se, 1 / 0),
          refreshTokenValidTime: Ju(G, 1 / 0),
          knowledgeMatrixInfo:
            V != null && V.knowledgeMatrixId
              ? {
                  avatar: V == null ? void 0 : V.avatarUrl,
                  nickname: V == null ? void 0 : V.nickname,
                  knowledgeMatrixId: V == null ? void 0 : V.knowledgeMatrixId,
                }
              : void 0,
        };
      }),
      (this.handleResponse = (p) => {
        if (!(p != null && p.data))
          return this.logger.error(`终端接口空响应: ${Ho(p)}`, wn.tag), null;
        if ((p == null ? void 0 : p.code) !== 0)
          return this.logger.error(`异常返回码: ${Ho(p)}`, wn.tag), null;
        const m = Qu(p.data, {});
        return this.formatServerAccountInfo(m);
      }),
      (this.getAccountInfoLog = (p) =>
        JSON.stringify({
          uid: p == null ? void 0 : p.userId,
          tokenTime: p == null ? void 0 : p.tokenValidTime,
          refreshTokenTime: p == null ? void 0 : p.refreshTokenValidTime,
        }));
  }
  async checkIsLogin() {
    const r = await this.getAccountInfo();
    return this.validateAccountInfo(r);
  }
  validateAccountInfo(r) {
    return r != null && r.userId
      ? (this.logger.info("判断用户已登录", wn.tag), !0)
      : (this.logger.info("判断用户未登录", wn.tag), !1);
  }
};
wn.tag = "AccountService";
wn = Nv(
  [
    rl(),
    Nu(0, Oi("invokeWithPromise")),
    Nu(1, Oi("onAccountInfoChange")),
    Nu(2, Oi("onLoginDialogClose")),
    Nu(3, Oi(ro)),
  ],
  wn,
);
var Fu = { exports: {} },
  Dv = Fu.exports,
  Np;
function Lv() {
  return (
    Np ||
      ((Np = 1),
      (function (r, i) {
        (function (o, l) {
          r.exports = l();
        })(Dv, function () {
          var o, l;
          function p(a) {
            (this.name = "__st" + ((1e9 * Math.random()) >>> 0) + o + "__"),
              a != null && a.forEach(this.add, this),
              (o += 1);
          }
          Array.prototype.find ||
            Object.defineProperty(Array.prototype, "find", {
              configurable: !0,
              writable: !0,
              value: function (a) {
                if (this === null)
                  throw new TypeError('"this" is null or not defined');
                var c = Object(this),
                  d = c.length >>> 0;
                if (typeof a != "function")
                  throw new TypeError("predicate must be a function");
                for (var h = arguments[1], g = 0; g < d; ) {
                  var I = c[g];
                  if (a.call(h, I, g, c)) return I;
                  g += 1;
                }
              },
            }),
            typeof window > "u" ||
              window.WeakSet ||
              ((o = Date.now() % 1e9),
              (p.prototype.add = function (a) {
                var c = this.name;
                return (
                  a[c] ||
                    Object.defineProperty(a, c, { value: !0, writable: !0 }),
                  this
                );
              }),
              (p.prototype.delete = function (a) {
                return !!a[this.name] && !(a[this.name] = void 0);
              }),
              (p.prototype.has = function (a) {
                return !!a[this.name];
              }),
              (l = p),
              Object.defineProperty(window, "WeakSet", {
                value: function (a) {
                  return new l(a);
                },
              }));
          var m = function (a, c) {
              return (m =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                  ? function (d, h) {
                      d.__proto__ = h;
                    }
                  : function (d, h) {
                      for (var g in h)
                        Object.prototype.hasOwnProperty.call(h, g) &&
                          (d[g] = h[g]);
                    }))(a, c);
            },
            v = function () {
              return (v =
                Object.assign ||
                function (a) {
                  for (var c, d = 1, h = arguments.length; d < h; d++)
                    for (var g in (c = arguments[d]))
                      Object.prototype.hasOwnProperty.call(c, g) &&
                        (a[g] = c[g]);
                  return a;
                }).apply(this, arguments);
            };
          function R(a, c) {
            var d = {};
            for (g in a)
              Object.prototype.hasOwnProperty.call(a, g) &&
                c.indexOf(g) < 0 &&
                (d[g] = a[g]);
            if (a != null && typeof Object.getOwnPropertySymbols == "function")
              for (
                var h = 0, g = Object.getOwnPropertySymbols(a);
                h < g.length;
                h++
              )
                c.indexOf(g[h]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(a, g[h]) &&
                  (d[g[h]] = a[g[h]]);
            return d;
          }
          function _(a, c, d, h) {
            return new (d = d || Promise)(function (g, I) {
              function S(U) {
                try {
                  T(h.next(U));
                } catch (b) {
                  I(b);
                }
              }
              function C(U) {
                try {
                  T(h.throw(U));
                } catch (b) {
                  I(b);
                }
              }
              function T(U) {
                var b;
                U.done
                  ? g(U.value)
                  : ((b = U.value) instanceof d
                      ? b
                      : new d(function (j) {
                          j(b);
                        })
                    ).then(S, C);
              }
              T((h = h.apply(a, [])).next());
            });
          }
          function D(a, c) {
            var d,
              h,
              g,
              I = {
                label: 0,
                sent: function () {
                  if (1 & g[0]) throw g[1];
                  return g[1];
                },
                trys: [],
                ops: [],
              },
              S = { next: C(0), throw: C(1), return: C(2) };
            return (
              typeof Symbol == "function" &&
                (S[Symbol.iterator] = function () {
                  return this;
                }),
              S
            );
            function C(T) {
              return function (U) {
                var b = [T, U];
                if (d) throw new TypeError("Generator is already executing.");
                for (; I; )
                  try {
                    if (
                      ((d = 1),
                      h &&
                        (g =
                          2 & b[0]
                            ? h.return
                            : b[0]
                              ? h.throw || ((g = h.return) && g.call(h), 0)
                              : h.next) &&
                        !(g = g.call(h, b[1])).done)
                    )
                      return g;
                    switch (((h = 0), (b = g ? [2 & b[0], g.value] : b)[0])) {
                      case 0:
                      case 1:
                        g = b;
                        break;
                      case 4:
                        return I.label++, { value: b[1], done: !1 };
                      case 5:
                        I.label++, (h = b[1]), (b = [0]);
                        continue;
                      case 7:
                        (b = I.ops.pop()), I.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (g = 0 < (g = I.trys).length && g[g.length - 1]) ||
                            (b[0] !== 6 && b[0] !== 2)
                          )
                        ) {
                          I = 0;
                          continue;
                        }
                        if (b[0] === 3 && (!g || (b[1] > g[0] && b[1] < g[3])))
                          I.label = b[1];
                        else if (b[0] === 6 && I.label < g[1])
                          (I.label = g[1]), (g = b);
                        else {
                          if (!(g && I.label < g[2])) {
                            g[2] && I.ops.pop(), I.trys.pop();
                            continue;
                          }
                          (I.label = g[2]), I.ops.push(b);
                        }
                    }
                    b = c.call(a, I);
                  } catch (j) {
                    (b = [6, j]), (h = 0);
                  } finally {
                    d = g = 0;
                  }
                if (5 & b[0]) throw b[1];
                return { value: b[0] ? b[1] : void 0, done: !0 };
              };
            }
          }
          function X() {
            for (var a = 0, c = 0, d = arguments.length; c < d; c++)
              a += arguments[c].length;
            for (var h = Array(a), g = 0, c = 0; c < d; c++)
              for (var I = arguments[c], S = 0, C = I.length; S < C; S++, g++)
                h[g] = I[S];
            return h;
          }
          Object.assign ||
            Object.defineProperty(Object, "assign", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (a) {
                if (a == null)
                  throw new TypeError(
                    "Cannot convert first argument to object",
                  );
                for (var c = Object(a), d = 1; d < arguments.length; d++)
                  if ((h = arguments[d]) != null)
                    for (
                      var h = Object(h),
                        g = Object.keys(Object(h)),
                        I = 0,
                        S = g.length;
                      I < S;
                      I++
                    ) {
                      var C = g[I],
                        T = Object.getOwnPropertyDescriptor(h, C);
                      T != null && T.enumerable && (c[C] = h[C]);
                    }
                return c;
              },
            });
          var G,
            se = {
              snapshootInfo: void 0,
              type: void 0,
              level: void 0,
              plugin: void 0,
              originEvent: void 0,
            },
            Z = {
              PV: "pv",
              AID: "aid",
              F_ID: "fId",
              ERROR: "error",
              DEVICE: "device",
              CLOSE: "close",
              PAGE_PERFORMANCE: "pagePerformance",
              WEB_VITALS: "webVitals",
              IE: "ie",
              SPA: "spa",
              API: "api",
              ASSET_SPEED: "assetSpeed",
              CUSTOM: "custom",
              SESSION: "session",
              BRIDGE_SPEED: "bridgeSpeed",
              LOAD_PACKAGE: "loadPackageSpeed",
              BLANK_SCREEN: "blankScreen",
              WEBSOCKET: "websocket",
              LONGTASK: "longtask",
            },
            ie = [
              "aegis.qq.com",
              "tamaegis.com",
              "/aegis-sdk",
              "rumt-",
              "/flog.core.min.js",
              "pingfore.qq.com",
              "pingfore.tencent.com",
              "zhiyan.tencent-cloud.net",
              "h.trace.qq.com",
              "btrace.qq.com",
              "beacon.qq.com",
              "dmplog.qq.com",
              "qq.com/report",
              "svibeacon.onezapp.com",
              "cube.weixinbridge.com",
              "doubleclick.net",
              "pcmgrmonitor.3g.qq.com",
              "tdm.qq.com",
              "report.qqweb.qq.com",
              "tpstelemetry.tencent.com",
              "galileotelemetry.tencent.com",
              "insight.cloud.tencent.com",
              "facebook.com",
              "facebook.net",
              "google",
              "yahoo.com",
              "twitter.com",
              "ga-audiences",
              "report.idqqimg.com",
              "arms-retcode.aliyuncs.com",
              "px.effirst.com",
              "sentry",
              "baidu.com",
              "hot-update.json",
              "u.c.b.r.o.w.s.e.r",
              "report.url.cn",
              "sockjs-node",
              "m3u8",
              "flv",
            ],
            V = [
              "ResizeObserver loop limit exceeded",
              "ResizeObserver loop completed with undelivered notifications",
              "Failed to execute 'transaction'",
              "window.indexedDB.deleteDatabase is not a function",
            ],
            J = { data: "", event: "", id: "", retry: void 0 };
          ((ne = G = G || {}).data = "data"),
            (ne.event = "event"),
            (ne.id = "id"),
            (ne.retry = "retry");
          function _e() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (a) {
                var c = (16 * Math.random()) | 0;
                return (a === "x" ? c : (3 & c) | 8).toString(16);
              },
            );
          }
          var te,
            me,
            Ze,
            Ge,
            Et,
            Qe,
            fn = ["level", "trace", "tag", "seq", "code"],
            jn = ["static", "fetch"],
            Fn =
              (((ne = te = te || {}).INFO = "info"),
              (ne.ERROR = "error"),
              (ne.SDK_ERROR = "sdk_error"),
              (ne.PROMISE_ERROR = "promise_error"),
              (ne.AJAX_ERROR = "ajax_error"),
              (ne.SCRIPT_ERROR = "script_error"),
              (ne.WEBSOCKET_ERROR = "websocket_error"),
              (ne.IMAGE_ERROR = "image_error"),
              (ne.CSS_ERROR = "css_error"),
              (ne.MEDIA_ERROR = "media_error"),
              (ne.REPORT = "report"),
              (ne.RET_ERROR = "ret_error"),
              (ne.BRIDGE_ERROR = "brige_error"),
              (ne.BLANK_SCREEN = "blank_screen"),
              (ne.CUSTOM_ERROR = "custom_error"),
              (ne.PAGE_NOT_FOUND_ERROR = "page_not_found_error"),
              (ne.LAZY_LOAD_ERROR = "lazy_load_error"),
              (ne.LONGTASK = "longtask"),
              ((ne = me = me || {}).NORMAL = "normal"),
              (ne.PV = "pv"),
              (ne.API = "api"),
              (ne.CUSTOM_TIME = "custom_time"),
              (ne.CUSTOM_EVENT = "custom_event"),
              (ne.ASSETS_SPEED = "assets_speed"),
              (ne.PAGE_PERFORMANCE = "page_performance"),
              (ne.WEB_VITALS = "web_vitals"),
              (ne.SDK_ERROR = "sdk_error"),
              (ne.SESSION = "session"),
              (ne.BRIDGE = "bridge"),
              (ne.WEBSOCKET = "websocket"),
              (ne.SSE = "sse"),
              ((ne = Ze = Ze || {}).android = "android"),
              (ne.ios = "iOS"),
              (ne.windows = "windows"),
              (ne.macos = "macOS"),
              (ne.linux = "linux"),
              (ne.devtools = "devtools"),
              (ne.other = "other"),
              ((ne = Ge = Ge || {}).unknown = "unknown"),
              (ne.wifi = "wifi"),
              (ne.wired = "wired"),
              (ne.net2g = "2G"),
              (ne.net3g = "3G"),
              (ne.net4g = "4G"),
              (ne.net5g = "5G"),
              (ne.net6g = "6G"),
              ((ne = Et = Et || {}).PROD = "production"),
              (ne.DEV = "development"),
              (ne.GRAY = "gray"),
              (ne.PRE = "pre"),
              (ne.DAILY = "daily"),
              (ne.LOCAL = "local"),
              (ne.TEST = "test"),
              (ne.OTHER = "others"),
              ((ne = Qe = Qe || {}).init = "init"),
              (ne.sampleChange = "sampleChange"),
              (ne.destroy = "destroy"),
              (ne.configChange = "configChange"),
              (ne.errorOccurred = "errorOccurred"),
              (un.prototype.indexOf = function (a, c) {
                for (var d = 0; d < a.length; d++)
                  if (a[d].callback === c) return d;
                return -1;
              }),
              (un.prototype.on = function (a, c, d) {
                var h;
                if ((d === void 0 && (d = 0), this))
                  return (
                    (h = this.eventsList[a]) ||
                      ((this.eventsList[a] = []), (h = this.eventsList[a])),
                    this.indexOf(h, c) === -1 &&
                      h.push({ name: a, type: d || 0, callback: c }),
                    this
                  );
              }),
              (un.prototype.one = function (a, c) {
                this.on(a, c, 1);
              }),
              (un.prototype.remove = function (a, c) {
                if (this) {
                  var d = this.eventsList[a];
                  if (d) {
                    if (c)
                      return (
                        d.length && ((c = this.indexOf(d, c)), d.splice(c, 1)),
                        this
                      );
                    try {
                      delete this.eventsList[a];
                    } catch {}
                  }
                  return null;
                }
              }),
              (un.prototype.clear = function () {
                this.eventsList = {};
              }),
              un);
          function un() {
            var a = this;
            (this.emit = function (c, d) {
              if (a) {
                var h;
                if ((g = a.eventsList[c]) != null && g.length)
                  for (var g = g.slice(), I = 0; I < g.length; I++) {
                    h = g[I];
                    try {
                      var S = h.callback.apply(a, [d]);
                      if ((h.type === 1 && a.remove(c, h.callback), S === !1))
                        break;
                    } catch (C) {
                      throw C;
                    }
                  }
                return a;
              }
            }),
              (this.eventsList = {});
          }
          function Kt() {
            return ("10000000100040008000" + 1e11).replace(
              /[018]/g,
              function (a) {
                return (a ^ (((16 * Math.random()) & 15) >> (a / 4))).toString(
                  16,
                );
              },
            );
          }
          var xt = { generateTraceId: dn(16), generateSpanId: dn(8) },
            on = Array(32);
          function dn(a) {
            return function () {
              for (var c = 0; c < 2 * a; c++)
                (on[c] = Math.floor(16 * Math.random()) + 48),
                  58 <= on[c] && (on[c] += 39);
              return String.fromCharCode.apply(null, on.slice(0, 2 * a));
            };
          }
          function bt(a) {
            var c,
              d = ["", ""];
            return (d =
              typeof a == "object" &&
              ((c = (a = (function (h) {
                for (var g = 0, I = Object.keys(ye); g < I.length; g++) {
                  var S = I[g],
                    C = h[S] || (typeof h.get == "function" && h.get(S));
                  if (C) return [S, C];
                }
                return ["", ""];
              })(a))[0]),
              (a = a[1]),
              c)
                ? ye[c](a)
                : d);
          }
          var et,
            ye = {
              sw8: function (d) {
                var d = d.split("-"),
                  c = d[1],
                  d = d[2];
                return c ? [atob(c), atob(d)] : ["", ""];
              },
              traceparent: function (a) {
                return (a = a.split("-")), [a[1], a[2]];
              },
              b3: function (a) {
                return (a = a.split("-")), [a[0], a[1]];
              },
              "sentry-trace": function (a) {
                return (a = a.split("-")), [a[0], a[1]];
              },
            },
            Be =
              ((Se.prototype.generate = function (a, c) {
                if (
                  (c === void 0 && (c = {}),
                  (this.url = a),
                  !this.isUrlIgnored() &&
                    this.isUrlInTraceUrls() &&
                    this.traceType)
                ) {
                  switch (this.traceType) {
                    case "traceparent":
                      this.traceId = this.createTraceparent();
                      break;
                    case "b3":
                      this.traceId = this.createB3();
                      break;
                    case "sw8":
                      this.traceId = this.createSw8();
                      break;
                    case "sentry-trace":
                      this.traceId = this.createSentryTrace();
                      break;
                    default:
                      return (
                        console.warn(
                          "this trace key " +
                            this.traceType +
                            " is not supported",
                        ),
                        void (this.traceId = "")
                      );
                  }
                  return (
                    c[this.traceType] && (this.traceId = c[this.traceType]),
                    { name: this.traceType, value: this.traceId }
                  );
                }
              }),
              (Se.prototype.createTraceparent = function () {
                var a = xt.generateSpanId();
                return "00-" + xt.generateTraceId() + "-" + a + "-01";
              }),
              (Se.prototype.createB3 = function () {
                var a = xt.generateSpanId();
                return xt.generateTraceId() + "-" + a + "-1";
              }),
              (Se.prototype.createSw8 = function () {
                var a = new URL(location.href),
                  c = _e(),
                  d = _e();
                return (
                  "1-" +
                  String(btoa(d)) +
                  "-" +
                  String(btoa(c)) +
                  "-1-" +
                  String(btoa("aegis")) +
                  "-" +
                  String(btoa("2.5.46")) +
                  "-" +
                  String(btoa(encodeURI(location.pathname))) +
                  "-" +
                  String(btoa(a.host))
                );
              }),
              (Se.prototype.createSentryTrace = function () {
                var a = Kt().substring(16);
                return Kt() + "-" + a + "-1";
              }),
              (Se.prototype.isUrlIgnored = function () {
                if (
                  Array.isArray(this.ignoreUrls) &&
                  this.ignoreUrls.length !== 0
                )
                  for (var a = 0, c = this.ignoreUrls; a < c.length; a++) {
                    var d = c[a];
                    if (this.urlMatches(this.url, d)) return !0;
                  }
                return !1;
              }),
              (Se.prototype.isUrlInTraceUrls = function () {
                if (!this.urls) return !0;
                if (Array.isArray(this.urls)) {
                  if (this.urls.length === 0) return !1;
                  for (var a = 0, c = this.urls; a < c.length; a++) {
                    var d = c[a];
                    if (this.urlMatches(this.url, d)) return !0;
                  }
                }
                return !1;
              }),
              (Se.prototype.urlMatches = function (a, c) {
                return typeof c == "string" ? a === c : !!a.match(c);
              }),
              Se);
          function Se(a, c, d) {
            d === void 0 && (d = null),
              (this.traceType = a),
              (this.ignoreUrls = c),
              (this.urls = d);
          }
          ((ne = et = et || {})[(ne.number = -1)] = "number"), (ne.string = "");
          function N(a, c) {
            return typeof a == "string" ? a.split("?")[c ? 1 : 0] || "" : a;
          }
          function ee(a, c) {
            return (
              c === void 0 && (c = 2048),
              (a = String(a).split("?")[0]) == null ? void 0 : a.slice(0, c)
            );
          }
          function fe(a) {
            return typeof a == "string" && /^\//.test(a)
              ? (location == null ? void 0 : location.protocol) === "https:"
              : /^https/.test(a);
          }
          function Ve(a, c, d) {
            return _(void 0, void 0, void 0, function () {
              var h, g, I, S;
              return D(this, function (C) {
                switch (C.label) {
                  case 0:
                    return (
                      C.trys.push([0, 3, , 4]),
                      typeof (c == null ? void 0 : c.retCodeHandlerAsync) ==
                      "function"
                        ? [
                            2,
                            new Promise(function (T) {
                              c.retCodeHandlerAsync(
                                a,
                                d == null ? void 0 : d.url,
                                d == null ? void 0 : d.ctx,
                                function (j) {
                                  var b = j.code,
                                    j = j.isErr;
                                  T({
                                    code: b === void 0 ? "unknown" : b,
                                    isErr: j,
                                  });
                                },
                              );
                            }),
                          ]
                        : typeof (c == null ? void 0 : c.retCodeHandler) !=
                            "function"
                          ? [3, 2]
                          : [
                              4,
                              c.retCodeHandler(
                                a,
                                d == null ? void 0 : d.url,
                                d == null ? void 0 : d.ctx,
                                d == null ? void 0 : d.payload,
                              ),
                            ]
                    );
                  case 1:
                    return (
                      (I = C.sent() || {}),
                      (g = I.code),
                      (I = I.isErr),
                      [2, { code: g === void 0 ? "unknown" : g, isErr: I }]
                    );
                  case 2:
                    return (a = typeof a == "string" ? JSON.parse(a) : a) &&
                      ((S =
                        typeof ((I = c == null ? void 0 : c.ret) == null
                          ? void 0
                          : I.join) == "function"),
                      (h = S
                        ? (S = c == null ? void 0 : c.ret) == null
                          ? void 0
                          : S.map(function (T) {
                              return T.toLowerCase();
                            })
                        : k),
                      (S = Object.getOwnPropertyNames(a)),
                      (S = S.filter(function (T) {
                        return h.indexOf(T.toLowerCase()) !== -1;
                      })).length)
                      ? [
                          2,
                          {
                            code:
                              "" +
                              (g =
                                (g = a[S[0]]) !== "未知" && g !== ""
                                  ? g
                                  : "unknown"),
                            isErr: g !== 0 && g !== "0" && g !== "unknown",
                          },
                        ]
                      : [2, w];
                  case 3:
                    return C.sent(), [2, w];
                  case 4:
                    return [2];
                }
              });
            });
          }
          function Je(a, c, d) {
            try {
              var h =
                typeof c == "function"
                  ? c(a, d == null ? void 0 : d.url) || ""
                  : a;
              return q(h).slice(0, 102400);
            } catch {
              return "";
            }
          }
          function be(a) {
            if (typeof a == "string") return a;
            try {
              return a instanceof Error
                ? (JSON.stringify(a, x()) || "undefined").replace(/"/gim, "")
                : JSON.stringify(a, x()) || "undefined";
            } catch (c) {
              return (
                `error happen when aegis stringify:
 ` +
                c.message +
                `
 ` +
                c.stack
              );
            }
          }
          function ut(a) {
            if (typeof a == "string") return a;
            try {
              return JSON.stringify(a, x()) || "undefined";
            } catch (c) {
              return (
                `error happen when aegis stringify:
 ` +
                c.message +
                `
 ` +
                c.stack
              );
            }
          }
          function ot(a, c) {
            var d;
            return (
              typeof a != "string" ||
              !a ||
              ((d = !1),
              (d = c
                ? typeof c == "string"
                  ? -1 < a.indexOf(c)
                  : Object.keys(c).some(function (h) {
                      return -1 < a.indexOf(c[h]);
                    })
                : d)) ||
              Fe.test(a) ||
              ie.some(function (h) {
                return -1 < a.indexOf(h);
              })
            );
          }
          function nt(a, c, d) {
            return _(void 0, void 0, void 0, function () {
              return D(this, function (h) {
                switch (h.label) {
                  case 0:
                    return typeof a != "function"
                      ? [3, 2]
                      : [4, a.call(c, d, c)];
                  case 1:
                    return [2, h.sent()];
                  case 2:
                    return [2, d || []];
                }
              });
            });
          }
          function _t(a, c) {
            if (typeof c == "string") {
              var c = c.split("."),
                d = c.pop();
              if (d)
                return typeof (c = c.reduce(function (g, I) {
                  return g == null ? void 0 : g[I];
                }, a)) == "object"
                  ? c[d]
                  : c;
            }
          }
          function sn(a, c, d, h) {
            return (
              "url: " +
              a +
              `
resdata: ` +
              c +
              `
status: ` +
              d +
              `
retcode: ` +
              h
            );
          }
          function _r(a) {
            return [
              te.ERROR,
              te.PROMISE_ERROR,
              te.AJAX_ERROR,
              te.SCRIPT_ERROR,
              te.IMAGE_ERROR,
              te.CSS_ERROR,
              te.MEDIA_ERROR,
              te.WEBSOCKET_ERROR,
              te.BRIDGE_ERROR,
              te.SDK_ERROR,
              te.BLANK_SCREEN,
              te.RET_ERROR,
              te.PAGE_NOT_FOUND_ERROR,
              te.LAZY_LOAD_ERROR,
              te.CUSTOM_ERROR,
            ].includes(a.level);
          }
          function Un(a) {
            var c, d;
            return a.length === 0
              ? { isStuck: !1, fluency: 0 }
              : ((c = a.some(function (h) {
                  return 6e4 < h;
                })),
                (d = a.reduce(function (h, g) {
                  var I = ue.find(function (S) {
                    return g < S.max;
                  });
                  return h + ((I == null ? void 0 : I.score) || 0);
                }, 0)),
                { isStuck: c, fluency: parseFloat((d / a.length).toFixed(4)) });
          }
          function $n(a) {
            var c = v({}, J);
            try {
              var d = (a || "").indexOf(`

`);
              a.slice(0, d)
                .split(
                  `
`,
                )
                .forEach(function (g) {
                  var g = g.split(/:\s?/, 2),
                    I = g[0],
                    S = g[1];
                  switch (I.toLowerCase()) {
                    case G.data:
                      c.data = c.data
                        ? c.data +
                          `
` +
                          S
                        : S;
                      break;
                    case G.event:
                      c.event = S;
                      break;
                    case G.id:
                      c.id = S;
                      break;
                    case G.retry:
                      var C = parseInt(S, 10);
                      isNaN(C) || (c.retry = C);
                  }
                });
            } catch (h) {
              console.warn(
                "Fail to parse chunk details with errors occurred",
                h,
              );
            }
            return c;
          }
          var Cn,
            L = [
              "application/xhtml+xml",
              "application/xml",
              "application/pdf",
              "application/pkcs12",
              "application/javascript",
              "application/x-javascript",
              "application/ecmascript",
              "application/vnd.mspowerpoint",
              "application/vnd.apple.mpegurl",
              "application/ogg",
              "text/css",
              "text/javascript",
              "image",
              "audio",
              "video",
              "video/mp2t",
            ],
            E =
              /\.(json|js|css|jpg|jpeg|png|svg|apng|webp|gif|bmp|mp4|mp3|ts|mpeg|wav|webm|ogg|flv|m3u8|ttf|woff2|otf|eot|woff|html|htm|shtml|shtm|)$/gi,
            k = ["ret", "retcode", "code", "errcode"],
            w = { code: "unknown", isErr: !1 },
            x = function () {
              var a = new WeakSet();
              return function (c, d) {
                if (d instanceof Error)
                  return (
                    "Error.message: " +
                    d.message +
                    `
  Error.stack: ` +
                    d.stack
                  );
                if (typeof d == "object" && d !== null) {
                  if (a.has(d)) return "[Circular " + (c || "root") + "]";
                  a.add(d);
                }
                return d;
              };
            },
            q = function (a, c) {
              c === void 0 && (c = 3);
              var d,
                h,
                g,
                I = "";
              return (
                Array.isArray(a)
                  ? ((I += "["),
                    (d = a.length),
                    a.forEach(function (S, C) {
                      I =
                        (I +=
                          typeof S == "object" && 1 < c ? q(S, c - 1) : ce(S)) +
                        (C === d - 1 ? "" : ",");
                    }),
                    (I += "]"))
                  : a instanceof Object
                    ? ((I = "{"),
                      (h = Object.keys(a)),
                      (g = h.length),
                      h.forEach(function (S, C) {
                        typeof a[S] == "object" && 1 < c
                          ? (I += '"' + S + '":' + q(a[S], c - 1))
                          : (I += H(S, a[S])),
                          (I +=
                            C === g - 1 || (C < g - 1 && a[h[C + 1]] === void 0)
                              ? ""
                              : ",");
                      }),
                      (I += "}"))
                    : (I += a),
                I
              );
            },
            H = function (a, c) {
              var d = typeof c,
                h = "";
              return (
                d == "string" || d == "object"
                  ? (h += '"' + a + '":"' + c + '"')
                  : typeof c == "function"
                    ? (h += '"' + a + '":"function ' + c.name + '"')
                    : typeof c == "symbol"
                      ? (h += '"' + a + '":"symbol"')
                      : (typeof c != "number" && d != "boolean") ||
                        (h += '"' + a + '": ' + c),
                h
              );
            },
            ce = function (a) {
              var c = typeof a;
              return (
                "" +
                (c == "undefined" || c == "symbol" || c == "function"
                  ? "null"
                  : c == "string" || c == "object"
                    ? '"' + a + '"'
                    : a)
              );
            },
            Fe = /data:(image|text|application|font)\/.*;base64/,
            Ae = function (a) {
              for (var c = [], d = 1; d < arguments.length; d++)
                c[d - 1] = arguments[d];
              if (!c.length) return a;
              var h,
                g = c.shift();
              for (h in g)
                typeof g[h] == "object" &&
                g[h] !== null &&
                a.hasOwnProperty(h) &&
                typeof a[h] == "object" &&
                a[h] !== null
                  ? Ae(a[h], g[h])
                  : (a[h] = g[h]);
              return Ae.apply(void 0, X([a], c));
            },
            ue = [
              { max: 500, score: 1 },
              { max: 1e3, score: 0.5 },
              { max: 3e3, score: 0.25 },
              { max: 1e4, score: 0.125 },
              { max: 6e4, score: 0.0625 },
            ],
            st =
              ((rt.prototype.patch = function (a) {
                this.canUse(a) &&
                  this.exist(a) &&
                  (this.plugins.push(a),
                  this.triggerInit(a),
                  this.triggerOnNewAegis(a));
              }),
              (rt.prototype.unPatch = function (a) {
                var c = this.plugins.indexOf(a);
                c !== -1 &&
                  (this.plugins.splice(c, 1), this.plugins.length === 0) &&
                  this.uninstall(a);
              }),
              (rt.prototype.uninstall = function (a) {
                var c;
                (c = (c = a.option) == null ? void 0 : c.destroy) != null &&
                  c.call(a.option, this.aegis, this.getConfig(a));
              }),
              (rt.prototype.walk = function (a) {
                var c = this;
                this.plugins.forEach(function (d) {
                  c.canUse(d) && a(d, c.getConfig(d));
                });
              }),
              (rt.prototype.canUse = function (a) {
                return (
                  !a ||
                  !(!(a = this.getConfig(a)) || typeof a != "object") ||
                  !!a
                );
              }),
              (rt.prototype.getConfig = function (a) {
                var c;
                return (c = (c = this.config) == null ? void 0 : c[a.name]) !=
                  null
                  ? c
                  : (c = this.aegis.config) == null
                    ? void 0
                    : c[a.name];
              }),
              (rt.prototype.exist = function (a) {
                return this.plugins.indexOf(a) === -1;
              }),
              (rt.prototype.triggerInit = function (a) {
                var c;
                this.initializedPlugin[a.name] ||
                  ((a.option.aegis = this.aegis),
                  (a.aegis = this.aegis),
                  (this.initializedPlugin[a.name] = !0),
                  (c = (c = a.option) == null ? void 0 : c.init) == null) ||
                  c.call(a.option, this.aegis, this.getConfig(a));
              }),
              (rt.prototype.triggerOnNewAegis = function (a) {
                var c;
                nt(this.aegis.config.onBeforeCollect, this.aegis),
                  (c = (c = a.option) == null ? void 0 : c.onNewAegis) !=
                    null && c.call(a.option, this.aegis, this.getConfig(a));
              }),
              rt);
          function rt(a, c) {
            (this.plugins = []),
              (this.initializedPlugin = {}),
              (this.aegis = a),
              (this.config = c);
          }
          ((ne = Cn = Cn || {})[(ne.hasNotFetched = 0)] = "hasNotFetched"),
            (ne[(ne.fetching = 1)] = "fetching"),
            (ne[(ne.alreadyFetched = 2)] = "alreadyFetched");
          function Rt(a) {
            return a.filter(function (c, d) {
              return (
                (c == null ? void 0 : c.requestType) !== "static" ||
                !a.find(function (h, g) {
                  return (
                    (c == null ? void 0 : c.url) === h.url &&
                    (c == null ? void 0 : c.status) === 200 &&
                    d < g
                  );
                })
              );
            });
          }
          function jt(a) {
            return new Promise(function (c) {
              return Array.isArray(a)
                ? c(
                    a.map(function (d) {
                      return (
                        (h = v(v({}, d), {
                          msg:
                            typeof d.msg == "string"
                              ? d.msg
                              : [].concat(d.msg).map(be).join(" "),
                        })),
                        fn.forEach(function (g) {
                          h[g] || delete h[g];
                        }),
                        h
                      );
                      var h;
                    }),
                  )
                : c([
                    v(v({}, a), {
                      msg: typeof a.msg == "string" ? a.msg : be(a.msg),
                    }),
                  ]);
            });
          }
          function Ht(a) {
            if (Array.isArray(a) && a.length !== 0)
              return function (c) {
                return new Promise(function (d) {
                  var h = function (g, I) {
                    return _(void 0, void 0, void 0, function () {
                      var S;
                      return D(this, function (C) {
                        switch (C.label) {
                          case 0:
                            return g < a.length ? [4, a[g](I)] : [3, 2];
                          case 1:
                            return (
                              (S = C.sent()).length
                                ? h(g + 1, S)
                                : d != null && d([]),
                              [3, 3]
                            );
                          case 2:
                            d != null && d(I), (C.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  };
                  h(0, c);
                });
              };
            throw new TypeError(
              "createPipeline needs at least one function param",
            );
          }
          function M(a, c) {
            Object.getOwnPropertyNames(a).forEach(function (d) {
              typeof a[d] == "function" &&
                d !== "constructor" &&
                (c
                  ? (c[d] =
                      d === "sendPipeline"
                        ? function () {
                            return function () {};
                          }
                        : function () {})
                  : (a[d] = function () {}));
            });
          }
          function W(a) {
            return Promise.resolve(a);
          }
          var Q,
            ae = {
              name: "sample",
              create: function (a) {
                function c() {
                  (a.fetchSampleStatus = Cn.alreadyFetched),
                    T.length && a.send(T.splice(0, T.length));
                }
                function d() {
                  return (
                    (a.fetchSampleStatus = Cn.fetching),
                    new Promise(function (U) {
                      var b = Date.now();
                      a.request(
                        {
                          url:
                            _t(a.config, "hostUrl.whiteListUrl") +
                            "?uid=" +
                            C +
                            "&topic=" +
                            a.config.id,
                          payload: {},
                          method: "GET",
                        },
                        function (z) {
                          var K,
                            z = z.data || JSON.parse(z),
                            Y = z.is_in_white_list,
                            Le = z.sample_map,
                            ge = Le === void 0 ? {} : Le,
                            Le = z.server_time,
                            de = z.start_server_time;
                          z.code !== 0
                            ? ((a.sampleMap = S), a.event.emit(Qe.sampleChange))
                            : ((a.isWhiteList = !!Y),
                              Y && a.config.whiteList
                                ? Object.keys(Z).forEach(function (Ie) {
                                    S[Z[Ie]] = 1;
                                  })
                                : ((K = {}),
                                  Object.keys(ge).forEach(function (Ie) {
                                    K[
                                      Ie.replace(/(_\w)/g, function (Ue) {
                                        return Ue[1].toUpperCase();
                                      })
                                    ] = ge[Ie] / 100;
                                  }),
                                  Ae(S, K)),
                              (a.sampleMap = S),
                              a.event.emit(Qe.sampleChange),
                              (Y =
                                ((z = Date.now()) -
                                  b -
                                  (Number(Le) - Number(de))) /
                                2),
                              (de = Number(Le) + Y),
                              (a.serverTimeGap = Math.floor(de - z))),
                            c(),
                            U();
                        },
                        function () {
                          (a.sampleMap = S),
                            a.event.emit(Qe.sampleChange),
                            c(),
                            U();
                        },
                      );
                    })
                  );
                }
                (g = a),
                  (I = {}),
                  Object.keys(Z).forEach(function (b) {
                    var b = Z[b],
                      j = _t(g.config, "sample." + b);
                    I[b] = j;
                  });
                var h,
                  g,
                  I,
                  S = I,
                  C = (h = a.config) == null ? void 0 : h.uid,
                  T = [];
                return (
                  a.event.on(Qe.configChange, function (U) {
                    U.uid !== C && ((C = U.uid), d());
                  }),
                  function (U) {
                    return new Promise(function (b) {
                      return _(void 0, void 0, void 0, function () {
                        var j, K, z;
                        return D(this, function (Y) {
                          switch (Y.label) {
                            case 0:
                              return Cn.alreadyFetched === a.fetchSampleStatus
                                ? ((j = a.sampleMap),
                                  (K = a.config.forceReportErrorLog),
                                  (z = U.filter(function (ge) {
                                    return (
                                      !ge.plugin ||
                                      !(
                                        (!a.isWhiteList &&
                                          ge != null &&
                                          ge.isWhiteListDyeLog) ||
                                        ((!K || !_r(ge)) &&
                                          ((ge =
                                            ge.plugin === Z.SPA
                                              ? Z.PV
                                              : ge.plugin),
                                          (ge = j[ge]) !== void 0) &&
                                          Math.random() > ge)
                                      )
                                    );
                                  })),
                                  [2, b(z)])
                                : ((T = T.concat(U)),
                                  Cn.hasNotFetched !== a.fetchSampleStatus
                                    ? [3, 2]
                                    : [4, d()]);
                            case 1:
                              return Y.sent(), [2, b([])];
                            case 2:
                              return Cn.fetching === a.fetchSampleStatus
                                ? [2, b([])]
                                : [2];
                          }
                        });
                      });
                    });
                  }
                );
              },
            },
            Pe = {
              name: "throttle",
              create: function (a, c) {
                var d,
                  h = [],
                  g = a.config;
                return (
                  a.event.on(Qe.destroy, function () {
                    h.length = 0;
                  }),
                  function (I) {
                    return new Promise(function (S) {
                      if (
                        ((h = h.concat(I)),
                        (c && h.length >= c) || (a.sendNow && 0 < h.length))
                      )
                        return (
                          (h = Rt(h)),
                          d && clearTimeout(d),
                          S(h.splice(0, (!a.sendNow && c) || h.length))
                        );
                      d && clearTimeout(d),
                        (d = setTimeout(function () {
                          (d = null), (h = Rt(h)), S(h.splice(0, h.length));
                        }, g.delay));
                    });
                  }
                );
              },
            },
            kt = {
              name: "format",
              create: function () {
                return jt;
              },
            },
            Pt = {
              name: "lengthLimit",
              create: function (a) {
                return function (c) {
                  return _(void 0, void 0, void 0, function () {
                    var d;
                    return D(this, function (h) {
                      return (
                        (d = a.config),
                        (c = c.map(function (g) {
                          var I,
                            S = d.maxLength || 102400;
                          try {
                            if (!g.msg || g.msg.length <= S) return g;
                            g.msg =
                              (I = g.msg) == null ? void 0 : I.substring(0, S);
                          } catch {
                            g.msg =
                              (S = be(g.msg)) == null
                                ? void 0
                                : S.substring(0, d.maxLength);
                          }
                          return g;
                        })),
                        [2, Promise.resolve(c)]
                      );
                    });
                  });
                };
              },
            },
            Ke = {},
            ve = {},
            Ee = {
              name: "repeatLimit",
              create: function (a) {
                return (
                  (c = a.config),
                  function (d) {
                    return new Promise(function (h) {
                      var g = typeof c.repeat == "number" ? c.repeat : 60;
                      if (!_t(c, "sample.speed") || g <= 0) return h(d);
                      var I = (c == null ? void 0 : c.id) || "0",
                        S = ve[I] || {};
                      h(
                        d.filter(function (C) {
                          var T,
                            U = !S[C.url] || S[C.url] < g;
                          return (
                            U
                              ? ((S[C.url] = 1 + ~~S[C.url]), (ve[I] = S))
                              : Ke[I] ||
                                Ke[(T = I)] ||
                                (Ke[T] = setTimeout(function () {
                                  (ve[T] = {}), (Ke[T] = null);
                                }, 6e4)),
                            U
                          );
                        }),
                      );
                    });
                  }
                );
                var c;
              },
            },
            we = {},
            ke = {},
            tt = {
              name: "errorLogCollectLimit",
              create: function (a) {
                var c = a.config,
                  c = c === void 0 ? {} : c,
                  d = typeof c.repeat == "number" ? c.repeat : 60,
                  h =
                    ((c = c == null ? void 0 : c.id) != null ? c : 0) +
                    "_error",
                  g = ke[h] || {};
                return (
                  (ke[h] = g),
                  a.event.on(Qe.destroy, function () {
                    delete ke[h], we[h] && (clearTimeout(we[h]), delete we[h]);
                  }),
                  function (I) {
                    return new Promise(function (S) {
                      if (d <= 0) return S(I);
                      S(
                        I.filter(function (C) {
                          var T,
                            U = C.level,
                            b = C.msg;
                          return (
                            !(U && b && _r(C)) ||
                            ((C =
                              U +
                              "_" +
                              (b == null
                                ? void 0
                                : b.slice(0, 200).replace(/[\r\n]+/g, ""))),
                            (U = (b = (U = g[C]) != null ? U : 0) < d)
                              ? (g[C] = b + 1)
                              : we[h] ||
                                (we[(T = h)] ||
                                  (we[T] = setTimeout(function () {
                                    (ke[T] = {}), (we[T] = null);
                                  }, 6e4)),
                                we[T]),
                            U)
                          );
                        }),
                      );
                    });
                  }
                );
              },
            },
            ht =
              (((ne = Q = Q || {})[(ne.ERROR = 0)] = "ERROR"),
              (ne[(ne.WARN = 1)] = "WARN"),
              (ne[(ne.INFO = 2)] = "INFO"),
              (ne[(ne.DEBUG = 3)] = "DEBUG"),
              (Vn.prototype.debug = function (a) {
                this.log(Q.DEBUG, a);
              }),
              (Vn.prototype.info = function (a) {
                this.log(Q.INFO, a);
              }),
              (Vn.prototype.warn = function (a) {
                this.log(Q.WARN, a);
              }),
              (Vn.prototype.error = function (a) {
                this.log(Q.ERROR, a);
              }),
              (Vn.prototype.log = function (a, c) {
                this.instance.fetchSampleStatus === Cn.alreadyFetched
                  ? this.instance.isWhiteList && this.consoleLog(a, c)
                  : this.queue.push({ level: a, message: c });
              }),
              (Vn.prototype.consoleLog = function (a, c) {
                (a <= this.logLevel || this.instance.isWhiteList) &&
                  console.log("Aegis-[" + Q[a] + "] " + c);
              }),
              Vn),
            ne =
              ((Ce.prototype.init = function () {
                var a = this,
                  c = this.config.env === Et.PROD ? Q.ERROR : Q.DEBUG;
                (this.logger = new ht(c, this)),
                  (this.pluginController = new st(this, this.config.plugin)),
                  Ce.installedPlugins.forEach(function (d) {
                    a.pluginController.patch(d);
                  }),
                  this.event.emit(Qe.init);
              }),
              (Ce.prototype.setConfig = function (a) {
                var c;
                return (
                  Ae(this.config, a),
                  this.tempContext.isInTempContext
                    ? ((c = v({}, this.tempContext.originBean)),
                      (c = this.getNewBean(a, c)),
                      (this.tempContext.originBean = c))
                    : this.extendBean(this.config),
                  this.event.emit(Qe.configChange, a),
                  nt(this.config.onConfigChange, this),
                  this.config
                );
              }),
              (Ce.prototype.setTempConfig = function (a, c) {
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        (this.sendNow = !0),
                          (this.tempContext.isInTempContext = !0),
                          (this.tempContext.originBean = v({}, this.bean)),
                          this.extendBean(a),
                          (d.label = 1);
                      case 1:
                        return d.trys.push([1, 3, , 4]), [4, c()];
                      case 2:
                      case 3:
                        return d.sent(), [3, 4];
                      case 4:
                        return (
                          (this.tempContext.isInTempContext = !1),
                          (this.sendNow = !1),
                          this.extendBean(this.tempContext.originBean),
                          this.send(
                            this.tempContext.catchLogs.splice(
                              0,
                              this.tempContext.catchLogs.length,
                            ),
                          ),
                          [2]
                        );
                    }
                  });
                });
              }),
              (Ce.use = function (a) {
                Ce.installedPlugins.indexOf(a) === -1 &&
                  Ce.installedPlugins.push(a);
              }),
              (Ce.unuse = function (a) {
                (a = Ce.installedPlugins.indexOf(a)),
                  a !== -1 && Ce.installedPlugins.splice(a, 1);
              }),
              (Ce.prototype.sendCustomLogs = function (a, c, d, h) {
                return (
                  c === void 0 && (c = te.INFO),
                  d === void 0 && (d = me.NORMAL),
                  h === void 0 &&
                    (h = { canCustom: !1, isWhiteListDyeLog: !1 }),
                  _(this, void 0, void 0, function () {
                    var g,
                      I,
                      S,
                      C,
                      T = this;
                    return D(this, function (U) {
                      switch (U.label) {
                        case 0:
                          return this.canUseCustomPlugin()
                            ? ((g = h.canCustom),
                              (I = h.isWhiteListDyeLog),
                              [4, nt(this.config.onBeforeCollect, this)])
                            : [2];
                        case 1:
                          return (
                            U.sent(),
                            (b = { logLevel: c, logType: d, canCustom: g }),
                            (S = a
                              .map(function (j) {
                                var K = b.canCustom,
                                  z = b.logLevel,
                                  Y = b.logType,
                                  ge = typeof j == "object" ? j : { msg: j },
                                  Le = ge.msg || "",
                                  de = void 0;
                                return (
                                  z === te.CUSTOM_ERROR && (de = Le),
                                  ge instanceof Error &&
                                    ((Le = be(ge)), (de = ge.message)),
                                  v(v({}, ge), {
                                    msg: Le,
                                    errorMsg: de,
                                    level:
                                      (ge = K ? j.level : null) != null
                                        ? ge
                                        : z,
                                    type:
                                      (Le = K ? j.type : null) != null ? Le : Y,
                                    plugin: Z.CUSTOM,
                                  })
                                );
                              })
                              .map(function (j) {
                                var K;
                                return v(v({}, j), {
                                  aegisv2_goto: xt.generateSpanId(),
                                  timestamp: Date.now(),
                                  isWhiteListDyeLog: I || void 0,
                                  snapshootInfo: ut(
                                    v(v({}, T.snapshootInfo), {
                                      type:
                                        (K = j.type) != null ? K : me.NORMAL,
                                      level:
                                        (K = j.level) != null ? K : te.INFO,
                                      plugin: Z.CUSTOM,
                                    }),
                                  ),
                                });
                              })),
                            [4, nt(this.config.onCollected, this, S)]
                          );
                        case 2:
                          return 0 < (S = U.sent()).length
                            ? this.tempContext.isInTempContext
                              ? [4, this.immediatelySend(S)]
                              : [3, 4]
                            : [3, 7];
                        case 3:
                          return (C = U.sent()), [3, 6];
                        case 4:
                          return [4, this.send(S)];
                        case 5:
                          (C = U.sent()), (U.label = 6);
                        case 6:
                          return [2, C];
                        case 7:
                          return [2];
                      }
                      var b;
                    });
                  })
                );
              }),
              (Ce.prototype.info = function () {
                for (var a = [], c = 0; c < arguments.length; c++)
                  a[c] = arguments[c];
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [4, this.sendCustomLogs(a, te.INFO)];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.whiteListInfo = function () {
                for (var a = [], c = 0; c < arguments.length; c++)
                  a[c] = arguments[c];
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [
                          4,
                          this.sendCustomLogs(a, te.INFO, me.NORMAL, {
                            canCustom: !0,
                            isWhiteListDyeLog: !0,
                          }),
                        ];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.report = function () {
                for (var a = [], c = 0; c < arguments.length; c++)
                  a[c] = arguments[c];
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [
                          4,
                          this.sendCustomLogs(a, te.REPORT, me.NORMAL, {
                            canCustom: !0,
                            isWhiteListDyeLog: !1,
                          }),
                        ];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.error = function () {
                for (var a = [], c = 0; c < arguments.length; c++)
                  a[c] = arguments[c];
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [4, this.sendCustomLogs(a, te.CUSTOM_ERROR)];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.clearPluginCache = function () {
                this.pluginController.plugins.forEach(function (a) {
                  var c;
                  (c = (c = a.option) == null ? void 0 : c.clear) != null &&
                    c.call(a.option, a);
                });
              }),
              (Ce.prototype.clearThrottleCache = function () {
                (this.sendNow = !0), this.send([]), (this.sendNow = !1);
              }),
              (Ce.prototype.reportEvent = function (a) {
                return _(this, void 0, void 0, function () {
                  var c;
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return a
                          ? (c =
                              typeof a == "string"
                                ? {
                                    name: a,
                                    msg: "report_event",
                                    level: te.INFO,
                                    plugin: Z.CUSTOM,
                                  }
                                : a).name
                            ? (typeof c.name != "string" &&
                                (this.logger.warn(
                                  "reportEvent params name must be string",
                                ),
                                (c.name = String(c.name))),
                              [
                                4,
                                this.sendCustomLogs(
                                  [c],
                                  te.INFO,
                                  me.CUSTOM_EVENT,
                                ),
                              ])
                            : (this.logger.warn("reportEvent params error"),
                              [2])
                          : [2];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.canUseCustomPlugin = function () {
                var a;
                return (
                  ((a = this.config.plugin) == null ? void 0 : a[Z.CUSTOM]) !==
                  !1
                );
              }),
              (Ce.prototype.reportTime = function (a, c) {
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return typeof a != "object"
                          ? [3, 2]
                          : [4, this.reportT(a)];
                      case 1:
                        return [2, d.sent()];
                      case 2:
                        return typeof a != "string"
                          ? (this.logger.warn(
                              "reportTime: first param must be a string",
                            ),
                            [2])
                          : typeof c != "number"
                            ? (this.logger.warn(
                                "reportTime: second param must be number",
                              ),
                              [2])
                            : c < 0 || 6e4 < c
                              ? (this.logger.warn(
                                  "reportTime: duration must between 0 and 60000",
                                ),
                                [2])
                              : [4, this.submitCustomTime(a, c)];
                      case 3:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.reportT = function (a) {
                return _(this, void 0, void 0, function () {
                  var c, d, h;
                  return D(this, function (g) {
                    switch (g.label) {
                      case 0:
                        return (
                          (c = a.name),
                          (d = a.duration),
                          (h = R(a, ["name", "duration"])),
                          typeof c != "string" || typeof d != "number"
                            ? (this.logger.warn("reportTime: params error"),
                              [2])
                            : d < 0 || 6e4 < d
                              ? (this.logger.warn(
                                  "reportTime: duration must between 0 and 60000",
                                ),
                                [2])
                              : [4, this.submitCustomTime(c, d, h)]
                        );
                      case 1:
                        return [2, g.sent()];
                    }
                  });
                });
              }),
              (Ce.prototype.time = function (a, c) {
                typeof a == "string"
                  ? this.timeMap[a]
                    ? this.logger.warn("Timer " + a + " already exists")
                    : (this.timeMap[a] = {
                        startTime: Date.now(),
                        customParams: c,
                      })
                  : this.logger.warn("time: first param must be a string");
              }),
              (Ce.prototype.timeEnd = function (a, c) {
                return _(this, void 0, void 0, function () {
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return typeof a != "string"
                          ? (this.logger.warn(
                              "timeEnd: first param must be a string",
                            ),
                            [2])
                          : this.timeMap[a]
                            ? [
                                4,
                                this.submitCustomTime(
                                  a,
                                  Date.now() - this.timeMap[a].startTime,
                                  v(v({}, this.timeMap[a].customParams), c),
                                ),
                              ]
                            : [3, 2];
                      case 1:
                        return d.sent(), delete this.timeMap[a], [3, 3];
                      case 2:
                        this.logger.warn("Timer " + a + " does not exist"),
                          (d.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (Ce.prototype.submitCustomTime = function (a, c, d) {
                return _(this, void 0, void 0, function () {
                  return D(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return [
                          4,
                          this.sendCustomLogs(
                            [
                              v(
                                {
                                  name: a,
                                  duration: c,
                                  msg: "custom_time",
                                  plugin: Z.CUSTOM,
                                },
                                d,
                              ),
                            ],
                            te.INFO,
                            me.CUSTOM_TIME,
                          ),
                        ];
                      case 1:
                        return h.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.updateSnapshootInfo = function (a) {
                Ae(this.snapshootInfo, a);
              }),
              (Ce.prototype.extendBean = function (a) {
                (a = this.getNewBean(a, this.bean)), Ae(this.bean, a);
              }),
              (Ce.prototype.generateRequestOptionsByLogs = function (g) {
                var c,
                  d,
                  h = this,
                  g =
                    ((g = g.map(function (I) {
                      var S = I.snapshootInfo;
                      return {
                        message: ut(
                          v(v(v({}, I), se), {
                            timestamp: I.timestamp + h.serverTimeGap,
                          }),
                        ),
                        fields: S,
                      };
                    })),
                    (d = {}),
                    g.forEach(function (I) {
                      var S = I.fields;
                      d[S] || (d[S] = { fields: I.fields, message: [] }),
                        d[S].message.push(I.message);
                    }),
                    Object.keys(d).map(function (I) {
                      return d[I];
                    }));
                return {
                  payload: {
                    topic: this.bean.id || "",
                    bean: v(v({}, this.bean), { id: void 0 }),
                    ext: ut(
                      ((c = this.config) == null ? void 0 : c.extField) || {},
                    ),
                    scheme: "v2",
                    d2: g,
                    v: "2.5.46",
                  },
                  url: _t(this.config, "hostUrl.url"),
                  method: "POST",
                };
              }),
              (Ce.prototype.send = function (a, c, d) {
                var h,
                  g,
                  I,
                  S,
                  C = this;
                if (!this.tempContext.isInTempContext)
                  return (
                    this.sendPipeline ||
                      (this.sendPipeline = Ht([
                        ((I = []),
                        (g = this).event.on(Qe.destroy, function () {
                          I.length = 0;
                        }),
                        (S = !0),
                        function (T) {
                          return new Promise(function (U) {
                            var b;
                            !S ||
                            ((b = g == null ? void 0 : g.canProceedLogs) !=
                              null &&
                              b.call(g))
                              ? (0 < I.length &&
                                  (T.push.apply(T, I), (I.length = 0)),
                                (S = !1),
                                U(T))
                              : ((I = I.concat(T)), U([]));
                          });
                        }),
                        Pe.create(this, 400),
                        ae.create(this),
                        tt.create(this),
                        function (T) {
                          return _(C, void 0, void 0, function () {
                            var U, b;
                            return D(this, function (j) {
                              switch (j.label) {
                                case 0:
                                  return (
                                    (b = (U = Promise).resolve),
                                    [4, nt(this.config.onBeforeSend, this, T)]
                                  );
                                case 1:
                                  return [2, b.apply(U, [j.sent()])];
                              }
                            });
                          });
                        },
                        function (T) {
                          return new Promise(function (U) {
                            if (T.length === 0) return U([]);
                            C.sendLogs(
                              T,
                              function () {
                                for (
                                  var b = [], j = 0;
                                  j < arguments.length;
                                  j++
                                )
                                  b[j] = arguments[j];
                                (C.failRequestCount = 0),
                                  U(X(T, [{ isErr: !1, result: b }])),
                                  c != null && c.apply(void 0, b);
                              },
                              function () {
                                for (
                                  var b = [], j = 0;
                                  j < arguments.length;
                                  j++
                                )
                                  b[j] = arguments[j];
                                60 <= ++C.failRequestCount && C.destroy(),
                                  U(X(T, [{ isErr: !0, result: b }])),
                                  d != null && d.apply(void 0, b);
                              },
                            );
                          });
                        },
                        function (T) {
                          return _(C, void 0, void 0, function () {
                            var U, b;
                            return D(this, function (j) {
                              switch (j.label) {
                                case 0:
                                  return (
                                    (b = (U = Promise).resolve),
                                    [4, nt(this.config.onSended, this, T)]
                                  );
                                case 1:
                                  return [2, b.apply(U, [j.sent()])];
                              }
                            });
                          });
                        },
                      ])),
                    this.sendPipeline(a)
                  );
                (h = this.tempContext.catchLogs).push.apply(h, a);
              }),
              (Ce.prototype.immediatelySend = function (a, c, d) {
                var h = this;
                return Ht([
                  function (g) {
                    return _(h, void 0, void 0, function () {
                      var I, S;
                      return D(this, function (C) {
                        switch (C.label) {
                          case 0:
                            return (
                              (S = (I = Promise).resolve),
                              [4, nt(this.config.onBeforeSend, this, g)]
                            );
                          case 1:
                            return [2, S.apply(I, [C.sent()])];
                        }
                      });
                    });
                  },
                  function (g) {
                    return new Promise(function (I) {
                      if (g.length === 0) return I([]);
                      h.sendLogs(
                        g,
                        function () {
                          for (var S = [], C = 0; C < arguments.length; C++)
                            S[C] = arguments[C];
                          (h.failRequestCount = 0),
                            I(X(g, [{ isErr: !1, result: S }])),
                            c != null && c.apply(void 0, S);
                        },
                        function () {
                          for (var S = [], C = 0; C < arguments.length; C++)
                            S[C] = arguments[C];
                          60 <= ++h.failRequestCount && h.destroy(),
                            I(X(g, [{ isErr: !0, result: S }])),
                            d != null && d.apply(void 0, S);
                        },
                      );
                    });
                  },
                  function (g) {
                    return _(h, void 0, void 0, function () {
                      var I, S;
                      return D(this, function (C) {
                        switch (C.label) {
                          case 0:
                            return (
                              (S = (I = Promise).resolve),
                              [4, nt(this.config.onSended, this, g)]
                            );
                          case 1:
                            return [2, S.apply(I, [C.sent()])];
                        }
                      });
                    });
                  },
                ])(a);
              }),
              (Ce.prototype.performRequest = function (a, c, d) {
                throw new Error('You need to override "performRequest" method');
              }),
              (Ce.prototype.ready = function () {
                function a() {
                  var d, h, g, I, S;
                  c.reportRequestQueue.length &&
                    ((h = (d = c.reportRequestQueue.shift()).logs),
                    (g = d.success),
                    (I = d.fail),
                    (S = c.generateRequestOptionsByLogs(h)),
                    c.request(
                      S,
                      function () {
                        for (var C = [], T = 0; T < arguments.length; T++)
                          C[T] = arguments[T];
                        try {
                          return g == null ? void 0 : g.apply(S, C);
                        } finally {
                          a();
                        }
                      },
                      function () {
                        for (var C = [], T = 0; T < arguments.length; T++)
                          C[T] = arguments[T];
                        try {
                          return I == null ? void 0 : I.apply(S, C);
                        } finally {
                          a();
                        }
                      },
                    ));
                }
                var c = this;
                a(), (this.isReportReady = !0);
              }),
              (Ce.prototype.sendLogs = function (a, c, d) {
                this.config.reportImmediately || this.isReportReady
                  ? this.request(this.generateRequestOptionsByLogs(a), c, d)
                  : this.reportRequestQueue.push({
                      logs: a,
                      success: c,
                      fail: d,
                    });
              }),
              (Ce.prototype.request = function (a, c, d) {
                return a && this.bean.id
                  ? a.url
                    ? void this.performRequest(a, c, d)
                    : this.logger.error("request url is empty")
                  : this.logger.error(
                      "Invalid parameters or missing project ID, request forbidden",
                    );
              }),
              (Ce.prototype.sendSDKError = function (a) {
                return _(this, void 0, void 0, function () {
                  var c = this;
                  return D(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [
                          4,
                          this.setTempConfig(
                            { id: "SDK-88b1f242f91b60885f0c" },
                            function () {
                              return c.sendCustomLogs(
                                [
                                  v(v({}, a), {
                                    errorToken: c.config.id,
                                    aegisSDKVersion: "2.5.46",
                                    errorConfig: ut(c.config),
                                  }),
                                ],
                                te.SDK_ERROR,
                                me.SDK_ERROR,
                              );
                            },
                          ),
                        ];
                      case 1:
                        return d.sent(), [2];
                    }
                  });
                });
              }),
              (Ce.prototype.destroy = function (a) {
                return (
                  a === void 0 && (a = !1),
                  _(this, void 0, void 0, function () {
                    var c, d, h, g;
                    return D(this, function (I) {
                      switch (I.label) {
                        case 0:
                          return [4, nt(this.config.onBeforeDestroy, this)];
                        case 1:
                          I.sent(),
                            (c = Ce.instances.indexOf(this)) !== -1 &&
                              Ce.instances.splice(c, 1),
                            (c = Ce.installedPlugins.length - 1),
                            (I.label = 2);
                        case 2:
                          if (!(0 <= c)) return [3, 7];
                          I.label = 3;
                        case 3:
                          return (
                            I.trys.push([3, 4, , 6]),
                            (d = Ce.installedPlugins[c]),
                            this.pluginController.unPatch(d),
                            [3, 6]
                          );
                        case 4:
                          return (
                            (d = I.sent()),
                            [4, this.sendSDKError({ msg: be(d) })]
                          );
                        case 5:
                          return I.sent(), [3, 6];
                        case 6:
                          return c--, [3, 2];
                        case 7:
                          if (
                            (this.event.emit("destroy"), this.event.clear(), a)
                          )
                            (S = this),
                              (C = Object.getOwnPropertyDescriptors(S)),
                              Object.keys(C).forEach(function (T) {
                                C[T].writable && (S[T] = null);
                              }),
                              Object.setPrototypeOf(this, null);
                          else {
                            for (
                              h = this;
                              h.constructor !== Object && M(h, this),
                                (h = Object.getPrototypeOf(h));

                            );
                            Ce.instances.length === 0 &&
                              ((g = Object.getPrototypeOf(this).constructor),
                              M(g),
                              M(Ce));
                          }
                          return nt(this.config.onDestroyed, this), [2];
                      }
                      var S, C;
                    });
                  })
                );
              }),
              (Ce.prototype.canProceedLogs = function () {
                return !0;
              }),
              (Ce.version = "2.5.46"),
              (Ce.instances = []),
              (Ce.logLevel = te),
              (Ce.environment = Et),
              (Ce.installedPlugins = []),
              Ce),
            Tt =
              ((ft.prototype.getConfig = function () {
                var a;
                return (a =
                  (a = this.aegis.config) == null ? void 0 : a[this.name]) !=
                  null
                  ? a
                  : (a = this.aegis.config) == null
                    ? void 0
                    : a[this.name];
              }),
              (ft.prototype.publish = function (a, c) {
                var d;
                return _(this, void 0, void 0, function () {
                  var h,
                    g,
                    I,
                    S,
                    C,
                    T,
                    U = this;
                  return D(this, function (b) {
                    switch (b.label) {
                      case 0:
                        return (
                          (h = c || this.aegis),
                          (g = Date.now()),
                          h.pluginController.canUse(this)
                            ? ((I = (Array.isArray(a) ? a : [a]).map(
                                function (j) {
                                  var K =
                                      U.name === Z.API ||
                                      U.name === Z.ASSET_SPEED,
                                    Y = (h == null ? void 0 : h.snapshootInfo)
                                      .action,
                                    z = v({}, h.snapshootInfo),
                                    Y =
                                      (K &&
                                        Y &&
                                        ((K =
                                          g -
                                          ((K =
                                            j == null ? void 0 : j.duration) !=
                                          null
                                            ? K
                                            : 0)),
                                        (Y == null ? void 0 : Y.timestamp) >
                                          K) &&
                                        delete z.action,
                                      {
                                        type:
                                          (Y = j.type) != null ? Y : me.NORMAL,
                                        level:
                                          (K = j.level) != null ? K : te.INFO,
                                        plugin: U.name,
                                      });
                                  return v(
                                    v(
                                      v(
                                        {
                                          aegisv2_goto: xt.generateSpanId(),
                                          timestamp: g,
                                        },
                                        j,
                                      ),
                                      Y,
                                    ),
                                    { snapshootInfo: ut(v(v({}, z), Y)) },
                                  );
                                },
                              )),
                              [4, nt(h.config.onCollected, h, I)])
                            : [2, !1]
                        );
                      case 1:
                        return (I = b.sent()).length === 0
                          ? [2, !1]
                          : ((S = I.filter(_r)).length &&
                              h.event.emit(Qe.errorOccurred, S),
                            (d = this.option.pipes) != null && d.length
                              ? (this.pipeline ||
                                  ((S = this.option.pipes.map(function (j) {
                                    return U.wrapPipe(j, h);
                                  })),
                                  (T = function (j) {
                                    return _(U, void 0, void 0, function () {
                                      var K, z;
                                      return D(this, function (Y) {
                                        switch (Y.label) {
                                          case 0:
                                            return (
                                              (z = (K = Promise).resolve),
                                              [
                                                4,
                                                nt(
                                                  h.config.onBeforeProcess,
                                                  h,
                                                  j,
                                                ),
                                              ]
                                            );
                                          case 1:
                                            return [2, z.apply(K, [Y.sent()])];
                                        }
                                      });
                                    });
                                  }),
                                  (C = function (j) {
                                    return _(U, void 0, void 0, function () {
                                      var K, z;
                                      return D(this, function (Y) {
                                        switch (Y.label) {
                                          case 0:
                                            return (
                                              (z = (K = Promise).resolve),
                                              [
                                                4,
                                                nt(h.config.onProcessed, h, j),
                                              ]
                                            );
                                          case 1:
                                            return [2, z.apply(K, [Y.sent()])];
                                        }
                                      });
                                    });
                                  }),
                                  S.unshift(T),
                                  S.push(C),
                                  (T = function (j) {
                                    return new Promise(function (K) {
                                      h.send(j), K(j);
                                    });
                                  }),
                                  S.push(T),
                                  (this.pipeline = Ht(S))),
                                this.pipeline(I))
                              : h.send(I),
                            [2, !0]);
                    }
                  });
                });
              }),
              (ft.prototype.wrapPipe = function (a, c) {
                var d, h, g, I;
                return typeof a == "string"
                  ? (g =
                      (g = c.pipes.find(function (S) {
                        return S.name === a;
                      })) == null
                        ? void 0
                        : g.create(c)) != null
                    ? g
                    : W
                  : ((g = (g = a) != null ? g : {}),
                    (d = g.name),
                    (h = g.option),
                    (g = g.create),
                    typeof d != "string"
                      ? a
                      : ((I = c.pipes.find(function (S) {
                          return S.name === d;
                        })),
                        (g =
                          (g = g == null ? void 0 : g(c, h)) != null
                            ? g
                            : I == null
                              ? void 0
                              : I.create(c, h)) != null
                          ? g
                          : W));
              }),
              ft);
          function ft(a) {
            var c;
            (this.option = a),
              (this.name = a.name),
              (this.init = (c = a.init) == null ? void 0 : c.bind(this)),
              (this.onNewAegis =
                (c = a.onNewAegis) == null ? void 0 : c.bind(this)),
              (this.destroy = (c = a.destroy) == null ? void 0 : c.bind(this)),
              (this.option.$getConfig = this.getConfig.bind(this)),
              (this.option.publish = this.publish.bind(this));
          }
          function Ce(a) {
            var c;
            (this.pipes = [ae, Pe, kt, Pt, Ee, tt]),
              (this.fetchSampleStatus = Cn.hasNotFetched),
              (this.config = {
                id: "",
                uid: "",
                delay: 1e3,
                repeat: 60,
                sample: 1,
                env: "production",
                maxLength: 102400,
                whiteList: !0,
                hostUrl: {
                  url: "https://galileotelemetry.tencent.com/collect",
                  whiteListUrl:
                    "https://galileotelemetry.tencent.com/aegiscontrol/whitelist",
                },
                plugin: {
                  pv: !0,
                  aid: !0,
                  error: !0,
                  device: !0,
                  close: !0,
                  pagePerformance: !0,
                  webVitals: !0,
                  custom: !0,
                  fId: !1,
                  ie: !1,
                  spa: !1,
                  api: !1,
                  assetSpeed: !1,
                  session: !1,
                  websocket: !1,
                  blankScreen: !1,
                },
                reportImmediately: !0,
                forceReportErrorLog: !1,
              }),
              (this.event = new Fn()),
              (this.bean = {}),
              (this.snapshootInfo = {}),
              (this.serverTimeGap = 0),
              (this.sampleMap = {}),
              (this.isWhiteList = !1),
              (this.tempContext = {
                isInTempContext: !1,
                catchLogs: [],
                originBean: {},
              }),
              (this.isReportReady = !1),
              (this.reportRequestQueue = []),
              (this.timeMap = {}),
              (this.failRequestCount = 0),
              (this.getNewBean = function (d, h) {
                var g;
                return {
                  id: (g = d.id) != null ? g : h.id,
                  uid: (g = d.uid) != null ? g : h.uid,
                  version: (g = d.version) != null ? g : h.version,
                  aid: (g = d.aid) != null ? g : h.aid,
                  env: (g = d.env) != null ? g : h.env,
                  platform: (g = d.platform) != null ? g : h.platform,
                  netType: (g = d.netType) != null ? g : h.netType,
                  vp: (g = d.vp) != null ? g : h.vp,
                  sr: (g = d.sr) != null ? g : h.sr,
                  sessionId: (g = d.sessionId) != null ? g : h.sessionId,
                  from: (g = d.from) != null ? g : h.from,
                  referer: (g = d.referer) != null ? g : h.referer,
                };
              }),
              (a.hostUrl =
                (c = a.hostUrl) === void 0
                  ? {}
                  : typeof c == "string"
                    ? { url: c }
                    : c),
              (a.uid = "" + a.uid),
              this.setConfig(a),
              Ce.instances.push(this),
              nt(this.config.onNewAegis, this);
          }
          function Vn(a, c) {
            var d = this;
            a === void 0 && (a = Q.INFO),
              (this.queue = []),
              (this.logLevel = a),
              (this.instance = c),
              this.instance.event.on(Qe.sampleChange, function () {
                d.instance.isWhiteList &&
                  d.queue.forEach(function (I) {
                    var g = I.level,
                      I = I.message;
                    return d.consoleLog(g, I);
                  }),
                  (d.queue.length = 0);
              });
          }
          function ei(a) {
            for (var c = 1; c < arguments.length; c++) {
              var d,
                h = arguments[c];
              for (d in h) a[d] = h[d];
            }
            return a;
          }
          function Fr(a, c) {
            function d(h) {
              (h.type !== "pagehide" &&
                document.visibilityState !== "hidden") ||
                (a(h),
                removeEventListener("visibilitychange", d, !0),
                removeEventListener("pagehide", d, !0));
            }
            addEventListener("visibilitychange", d, !0),
              addEventListener("pagehide", d, !0);
          }
          function qo() {
            var a;
            return !((a = window.external) == null || !a.assetsGC);
          }
          function Pi(a) {
            var c = (a = a || {}).name,
              d = a.initiatorType;
            if (Rs.test(c)) return "js";
            if (al.test(c)) return "css";
            switch (d) {
              case "script":
                return "js";
              case "link":
                return "css";
              default:
                return d;
            }
          }
          function Ra(b) {
            var c = b.domainLookupStart,
              d = b.domainLookupEnd,
              h = b.fetchStart,
              g = b.connectEnd,
              I = b.connectStart,
              S = b.requestStart,
              C = b.secureConnectionStart,
              T = b.responseStart,
              U = b.responseEnd,
              b = b.duration,
              j = 0;
            return {
              preHandleTime: (j = c !== 0 ? Number((c - h).toFixed(2)) : j),
              duration: Number(b.toFixed(2)),
              domainLookup: Number((d - c).toFixed(2)),
              connectTime: Number((g - I).toFixed(2)),
              tlsTime: Number((S - C).toFixed(2)),
              tcpAndRequestGap: Number((S - g).toFixed(2)),
              requestTime: Number((T - S).toFixed(2)),
              responseTime: Number((T ? U - T : b).toFixed(2)),
            };
          }
          var kr,
            or = (function a(c, d) {
              function h(g, I, S) {
                if (typeof document < "u") {
                  typeof (S = ei({}, d, S)).expires == "number" &&
                    (S.expires = new Date(Date.now() + 864e5 * S.expires)),
                    S.expires && (S.expires = S.expires.toUTCString()),
                    (g = encodeURIComponent(g)
                      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                      .replace(/[()]/g, escape));
                  var C,
                    T = "";
                  for (C in S)
                    S[C] &&
                      ((T += "; " + C), S[C] !== !0) &&
                      (T += "=" + S[C].split(";")[0]);
                  return (document.cookie = g + "=" + c.write(I, g) + T);
                }
              }
              return Object.create(
                {
                  set: h,
                  get: function (g) {
                    if (typeof document < "u" && (!arguments.length || g)) {
                      for (
                        var I = document.cookie
                            ? document.cookie.split("; ")
                            : [],
                          S = {},
                          C = 0;
                        C < I.length;
                        C++
                      ) {
                        var T = I[C].split("="),
                          U = T.slice(1).join("=");
                        try {
                          var b = decodeURIComponent(T[0]);
                          if (((S[b] = c.read(U, b)), g === b)) break;
                        } catch {}
                      }
                      return g ? S[g] : S;
                    }
                  },
                  remove: function (g, I) {
                    h(g, "", ei({}, I, { expires: -1 }));
                  },
                  withAttributes: function (g) {
                    return a(this.converter, ei({}, this.attributes, g));
                  },
                  withConverter: function (g) {
                    return a(ei({}, this.converter, g), this.attributes);
                  },
                },
                {
                  attributes: { value: Object.freeze(d) },
                  converter: { value: Object.freeze(c) },
                },
              );
            })(
              {
                read: function (a) {
                  return (a = a[0] === '"' ? a.slice(1, -1) : a).replace(
                    /(%[\dA-F]{2})+/gi,
                    decodeURIComponent,
                  );
                },
                write: function (a) {
                  return encodeURIComponent(a).replace(
                    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                    decodeURIComponent,
                  );
                },
              },
              { path: "/" },
            ),
            $o = new Tt({
              name: Z.AID,
              aid: "",
              init: function (a) {
                var c;
                return _(this, void 0, void 0, function () {
                  var d;
                  return D(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          h.trys.push([0, 1, , 3]),
                          (d = (c = a.config.plugin) == null ? void 0 : c.aid),
                          (d =
                            typeof d == "string"
                              ? d
                              : window.localStorage
                                ? window.localStorage.getItem("AEGIS_ID")
                                : or.get("AEGIS_ID")) ||
                            ((g = d = _e()),
                            window.localStorage
                              ? window.localStorage.setItem("AEGIS_ID", g)
                              : or.set("AEGIS_ID", g)),
                          (this.aid = d),
                          [3, 3]
                        );
                      case 1:
                        return (
                          (d = h.sent()), [4, a.sendSDKError({ msg: be(d) })]
                        );
                      case 2:
                        return h.sent(), [3, 3];
                      case 3:
                        return [2];
                    }
                    var g;
                  });
                });
              },
              onNewAegis: function (a) {
                (a.bean.aid = this.aid), (a.config.aid = this.aid);
              },
            }),
            Rs = /\.js(\?|$)/i,
            al = /\.css(\?|$)/i,
            io = function () {
              return (
                window.performance !== void 0 &&
                typeof performance.getEntriesByType == "function" &&
                typeof performance.now == "function"
              );
            },
            ul =
              (new Tt({ name: Z.ASSET_SPEED }),
              new Tt({
                name: Z.ASSET_SPEED,
                pipes: ["repeatLimit", "networkRefresh"],
                collectCur: 0,
                collectEntryType: "resource",
                ASSETS_INITIATOR_TYPE: [
                  "img",
                  "css",
                  "script",
                  "link",
                  "audio",
                  "video",
                ],
                observer: null,
                onNewAegis: function (a) {
                  var c = this;
                  io() &&
                    (this.collectSuccessLog(a),
                    this.collectFailLog(a),
                    (performance.onresourcetimingbufferfull = function () {
                      typeof performance.clearResourceTimings == "function" &&
                        ((c.collectCur = 0),
                        performance.clearResourceTimings());
                    }));
                },
                publishMany: function (a, c) {
                  for (var d = c.config, h = 0, g = a.length; h < g; h++) {
                    var I = a[h];
                    this.ASSETS_INITIATOR_TYPE.indexOf(I.initiatorType) ===
                      -1 ||
                      ot(I.name, _t(d, "hostUrl")) ||
                      this.publish(this.generateLog(I, d), c);
                  }
                },
                collectSuccessLog: function (a) {
                  var c,
                    d = this;
                  typeof (window == null
                    ? void 0
                    : window.PerformanceObserver) == "function"
                    ? (this.publishMany(
                        performance.getEntriesByType(this.collectEntryType),
                        a,
                      ),
                      (this.observer = new window.PerformanceObserver(function (
                        h,
                      ) {
                        d.publishMany(h.getEntries(), a);
                      })),
                      this.observer.observe({
                        entryTypes: [this.collectEntryType],
                      }),
                      a.event.on(Qe.destroy, function () {
                        var h;
                        (h = d.observer) != null && h.disconnect();
                      }))
                    : ((c = setInterval(function () {
                        var h = performance.getEntriesByType(
                            d.collectEntryType,
                          ),
                          g = h.slice(d.collectCur);
                        (d.collectCur = h.length), d.publishMany(g, a);
                      }, 3e3)),
                      a.event.on(Qe.destroy, function () {
                        clearInterval(c);
                      }));
                },
                collectFailLog: function (a) {
                  function c(g) {
                    var I, S, C;
                    g &&
                      ((g = g.target || g.srcElement),
                      !(I =
                        (g == null ? void 0 : g.src) ||
                        (g == null ? void 0 : g.href)) ||
                        typeof I != "string" ||
                        -1 < window.location.href.indexOf(I) ||
                        ((g = performance
                          .getEntriesByType(d.collectEntryType)
                          .find(function (T) {
                            return T.name === I;
                          })),
                        (S =
                          typeof (S = ((S = h.plugin) == null ? void 0 : S.api)
                            .resourceTypeHandler) == "function"
                            ? S(I)
                            : Pi(g)),
                        ot(I, _t(h, "hostUrl"))) ||
                        ((C =
                          typeof (C = (
                            (C = h.plugin) == null ? void 0 : C.assetSpeed
                          ).urlHandler) == "function"
                            ? C(I)
                            : I),
                        (C = {
                          msg: "static_fail",
                          errorMsg: "load " + ee(I) + " fail",
                          url: ee(C),
                          status: 400,
                          duration: Number(
                            ((g == null ? void 0 : g.duration) || 0).toFixed(2),
                          ),
                          method: "get",
                          assetType: S || "static",
                          isHttps: fe(I),
                          urlQuery: N(I, !0),
                          nextHopProtocol: "",
                          domainLookup: et.number,
                          connectTime: et.number,
                          tlsTime: et.number,
                          requestTime: et.number,
                          responseTime: et.number,
                          preHandleTime: et.number,
                          tcpAndRequestGap: et.number,
                          level: te.ERROR,
                          type: me.ASSETS_SPEED,
                        }),
                        d.publish(C, a)));
                  }
                  var d = this,
                    h = a.config;
                  window.document.addEventListener("error", c, !0),
                    a.event.on(Qe.destroy, function () {
                      window.document.removeEventListener("error", c, !0);
                    });
                },
                generateLog: function (a, d) {
                  var h = ((h = d.plugin) == null ? void 0 : h.api)
                      .resourceTypeHandler,
                    d = ((d = d.plugin) == null ? void 0 : d.assetSpeed)
                      .urlHandler,
                    d = typeof d == "function" ? d(a.name) : a.name,
                    h = typeof h == "function" ? h(a.name) : Pi(a);
                  return v(
                    {
                      msg: "asset_speed",
                      url: ee(d),
                      status: 200,
                      assetType: h || "static",
                      isHttps: fe(a.name),
                      nextHopProtocol: a.nextHopProtocol || "",
                      urlQuery: N(a.name, !0),
                      transferSize: 0 < a.transferSize ? a.transferSize : -1,
                      method: "get",
                      type: me.ASSETS_SPEED,
                    },
                    Ra(a),
                  );
                },
                collectNotReportedLog: function (a) {
                  var c, d;
                  io() &&
                    ((c = (d = performance.getEntriesByType(
                      this.collectEntryType,
                    )).length),
                    typeof window.PerformanceObserver != "function") &&
                    this.collectCur !== c &&
                    ((d = d.slice(this.collectCur)),
                    (this.collectCur = c),
                    this.publishMany(d, a));
                },
                destroy: function () {
                  var a;
                  (this.publish = function () {}),
                    (a = this.observer) != null && a.disconnect();
                },
              }));
          ((Wr = kr = kr || {}).unknown = "unknown"),
            (Wr.normal = "normal"),
            (Wr.weak = "weak"),
            (Wr.disconnected = "disconnected");
          function Ur(a) {
            window.WebSocket = ll;
            var c = bn.findIndex(function (d) {
              return d.key === a.key;
            });
            c !== -1 && bn.splice(c, 1);
          }
          function Ps(a) {
            var c, d, h;
            window.Proxy &&
              window.WebSocket &&
              ((c = window.WebSocket),
              window &&
                !c.isHack &&
                ((d = new Proxy(WebSocket, Ds)),
                (c.isHack = !0),
                (window.WebSocket = d)),
              (h = a),
              bn.find(function (g) {
                return g.key === h.key;
              }) ||
                (h && bn.push(h)));
          }
          function sr(a, c, d, h) {
            return (
              d === void 0 && (d = 15e3),
              h === void 0 && (h = 0),
              (c = c === void 0 ? 0 : c) <= a && a <= d ? a : h
            );
          }
          function fr(a, c) {
            var d = Ms(),
              h = "navigate";
            return (
              0 <= gt
                ? (h = "back-forward-cache")
                : d &&
                  (document.prerendering || 0 < co()
                    ? (h = "prerender")
                    : document.wasDiscarded
                      ? (h = "restore")
                      : d.type && (h = d.type.replace(/_/g, "-"))),
              {
                name: a,
                value: c === void 0 ? -1 : c,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v4-"
                  .concat(Date.now(), "-")
                  .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: h,
              }
            );
          }
          function ar(a, c, d, h) {
            var g, I;
            return function (S) {
              0 <= c.value &&
                (S || h) &&
                ((I = c.value - (g || 0)) || g === void 0) &&
                ((g = c.value),
                (c.delta = I),
                (c.rating =
                  (S = c.value) > d[1]
                    ? "poor"
                    : S > d[0]
                      ? "needs-improvement"
                      : "good"),
                a(c));
            };
          }
          function Vo(a) {
            requestAnimationFrame(function () {
              return requestAnimationFrame(function () {
                return a();
              });
            });
          }
          function Ti(a) {
            document.addEventListener("visibilitychange", function () {
              document.visibilityState === "hidden" && a();
            });
          }
          function oo(a) {
            var c = !1;
            return function () {
              c || (a(), (c = !0));
            };
          }
          function Ts() {
            return (
              oi < 0 &&
                ((oi = js()),
                fo(),
                ri(function () {
                  setTimeout(function () {
                    (oi = js()), fo();
                  }, 0);
                })),
              {
                get firstHiddenTime() {
                  return oi;
                },
              }
            );
          }
          function Go(a) {
            document.prerendering
              ? addEventListener(
                  "prerenderingchange",
                  function () {
                    return a();
                  },
                  !0,
                )
              : a();
          }
          function Bt(a, c) {
            (c = c || {}),
              Go(function () {
                var d,
                  h = Ts(),
                  g = fr("FCP"),
                  I = ii("paint", function (S) {
                    S.forEach(function (C) {
                      C.name === "first-contentful-paint" &&
                        (I.disconnect(), C.startTime < h.firstHiddenTime) &&
                        ((g.value = Math.max(C.startTime - co(), 0)),
                        g.entries.push(C),
                        d(!0));
                    });
                  });
                I &&
                  ((d = ar(a, g, Ir, c.reportAllChanges)),
                  ri(function (S) {
                    (g = fr("FCP")),
                      (d = ar(a, g, Ir, c.reportAllChanges)),
                      Vo(function () {
                        (g.value = performance.now() - S.timeStamp), d(!0);
                      });
                  }));
              });
          }
          function Pa() {
            return Bn ? Cr : performance.interactionCount || 0;
          }
          function As(a) {
            var c, d;
            cl.forEach(function (h) {
              return h(a);
            }),
              (!a.interactionId && a.entryType !== "first-input") ||
                ((d = dr[dr.length - 1]),
                ((c = po.get(a.interactionId)) ||
                  dr.length < 10 ||
                  a.duration > d.latency) &&
                  (c
                    ? a.duration > c.latency
                      ? ((c.entries = [a]), (c.latency = a.duration))
                      : a.duration === c.latency &&
                        a.startTime === c.entries[0].startTime &&
                        c.entries.push(a)
                    : ((d = {
                        id: a.interactionId,
                        latency: a.duration,
                        entries: [a],
                      }),
                      po.set(d.id, d),
                      dr.push(d)),
                  dr.sort(function (h, g) {
                    return g.latency - h.latency;
                  }),
                  10 < dr.length) &&
                  dr.splice(10).forEach(function (h) {
                    return po.delete(h.id);
                  }));
          }
          function Ns(a) {
            var c = self.requestIdleCallback || self.setTimeout,
              d = -1;
            return (
              (a = oo(a)),
              document.visibilityState === "hidden" ? a() : ((d = c(a)), Ti(a)),
              d
            );
          }
          function Qo(a, c) {
            "PerformanceEventTiming" in self &&
              "interactionId" in PerformanceEventTiming.prototype &&
              ((c = c || {}),
              Go(function () {
                var d;
                "interactionCount" in performance ||
                  (Bn =
                    Bn ||
                    ii("event", Hr, {
                      type: "event",
                      buffered: !0,
                      durationThreshold: 0,
                    }));
                function h(C) {
                  Ns(function () {
                    C.forEach(As),
                      (T = Math.min(
                        dr.length - 1,
                        Math.floor((Pa() - Di) / 50),
                      ));
                    var T = dr[T];
                    T &&
                      T.latency !== g.value &&
                      ((g.value = T.latency), (g.entries = T.entries), S());
                  });
                }
                var g = fr("INP"),
                  I = ii("event", h, {
                    durationThreshold:
                      (d = c.durationThreshold) != null ? d : 40,
                  }),
                  S = ar(a, g, Fs, c.reportAllChanges);
                I &&
                  (I.observe({ type: "first-input", buffered: !0 }),
                  Ti(function () {
                    h(I.takeRecords()), S(!0);
                  }),
                  ri(function () {
                    (Di = Pa()),
                      (dr.length = 0),
                      po.clear(),
                      (g = fr("INP")),
                      (S = ar(a, g, Fs, c.reportAllChanges));
                  }));
              }));
          }
          function Ta() {
            var a;
            0 <= ao &&
              ao < Na - mo &&
              ((a = {
                entryType: "first-input",
                name: Br.type,
                target: Br.target,
                cancelable: Br.cancelable,
                startTime: Br.timeStamp,
                processingStart: Br.timeStamp + ao,
              }),
              ti.forEach(function (c) {
                c(a);
              }),
              (ti = []));
          }
          function Aa(a) {
            var c, d, h, g;
            function I() {
              Li(d, h), g();
            }
            function S() {
              g();
            }
            a.cancelable &&
              ((c =
                (1e12 < a.timeStamp ? new Date() : performance.now()) -
                a.timeStamp),
              a.type == "pointerdown"
                ? ((d = c),
                  (h = a),
                  (g = function () {
                    removeEventListener("pointerup", I, go),
                      removeEventListener("pointercancel", S, go);
                  }),
                  addEventListener("pointerup", I, go),
                  addEventListener("pointercancel", S, go))
                : Li(c, a));
          }
          function so(a) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(
              function (c) {
                return a(c, Aa, go);
              },
            );
          }
          function On(a) {
            var c = a.name;
            0 < (a = a.value) && a < Number.MAX_SAFE_INTEGER && (vo[c] = a);
          }
          var Ai,
            Bn,
            Br,
            ao,
            Na,
            ti,
            uo,
            ni,
            Wr = new Tt({
              name: Z.DEVICE,
              onNewAegis: function (a) {
                a.extendBean({
                  platform: this.getPlatform(),
                  netType: Ge.unknown,
                }),
                  this.getDpi(a),
                  this.getWechatVersion(a),
                  this.refreshNetworkTypeToBean(a),
                  this.refreshNetworkStatusToBean(a);
              },
              getDpi: function (a) {
                a.extendBean({
                  vp:
                    Math.round(window.innerWidth) +
                    " * " +
                    Math.round(window.innerHeight),
                }),
                  window.screen &&
                    a.extendBean({
                      sr:
                        Math.round(window.screen.width) +
                        " * " +
                        Math.round(window.screen.height),
                    });
              },
              getPlatform: function () {
                var a = {
                    android: /\bAndroid\s*([^;]+)/,
                    ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,
                    windows: /\b(Windows NT|Windows)/,
                    macos: /\b(Mac OS|OSX)/,
                    linux: /\b(Linux)/i,
                  },
                  c = Object.keys(a).find(function (d) {
                    return a[d].test(navigator.userAgent);
                  });
                return c ? Ze[c] : Ze.other;
              },
              getWechatVersion: function (a) {
                var c = navigator.userAgent,
                  c = /Micromessenger/i.test(c)
                    ? ((c = c.match(/MicroMessenger\/([\d.]+)/i)) == null
                        ? void 0
                        : c[1]) || ""
                    : void 0;
                a.setConfig({ extField: { wechatVersion: c } });
              },
              refreshNetworkTypeToBean: function (a) {
                var c = this,
                  d = a.config;
                d &&
                  (typeof d.getNetworkType == "function"
                    ? d.getNetworkType
                    : Da)(function (h) {
                    Object.keys(Ge).some(function (g) {
                      return Ge[g] === h;
                    }) || (h = Ge.unknown),
                      a.extendBean({ netType: h }),
                      (c.NetworkRefreshTimer = setTimeout(function () {
                        c.refreshNetworkTypeToBean(a),
                          clearTimeout(c.NetworkRefreshTimer);
                      }, 1e4));
                  });
              },
              refreshNetworkStatusToBean: function (a) {
                var c,
                  d = this,
                  h = a.config;
                h &&
                  (c =
                    typeof h.getNetworkStatus == "function"
                      ? h.getNetworkStatus
                      : c) != null &&
                  c(function (g) {
                    Object.keys(kr).some(function (I) {
                      return kr[I] === g;
                    }) || (g = kr.unknown),
                      a.extendBean({ netStatus: g }),
                      (d.NetworkStatusRefreshTimer = setTimeout(function () {
                        d.refreshNetworkStatusToBean(a),
                          clearTimeout(d.NetworkStatusRefreshTimer);
                      }, 1e4));
                  });
              },
            }),
            Da = function (a) {
              var c = "",
                d = navigator.userAgent.match(/NetType\/(\w+)/);
              d
                ? (c = d[1])
                : navigator.connection &&
                  (c =
                    navigator.connection.effectiveType ||
                    navigator.connection.type),
                a(
                  ((d = c = c || "unknown"),
                  0 <= (d = String(d).toLowerCase()).indexOf("4g")
                    ? Ge.net4g
                    : 0 <= d.indexOf("wifi")
                      ? Ge.wifi
                      : 0 <= d.indexOf("5g")
                        ? Ge.net5g
                        : 0 <= d.indexOf("6g")
                          ? Ge.net6g
                          : 0 <= d.indexOf("3g")
                            ? Ge.net3g
                            : 0 <= d.indexOf("2g")
                              ? Ge.net2g
                              : Ge.unknown),
                );
            },
            ll = typeof window < "u" ? window.WebSocket : void 0,
            bn = [],
            Rn = {},
            Ds = {
              construct: function (a, c) {
                var d = c[0],
                  h = new a(d, c[1]),
                  g = ((h.originSend = h.send), Date.now()),
                  I = !1;
                return (
                  h.addEventListener("open", function () {
                    var S,
                      C = Date.now();
                    (Rn[d] = (S = Rn[d]) != null ? S : {}),
                      bn.forEach(function (j) {
                        var U,
                          b = j.sendConnectInfo,
                          j = j.key;
                        (Rn[d][j] = (U = Rn[d][j]) != null && U),
                          b != null &&
                            b({
                              msg: "WebSocket connection succeeded",
                              url: d,
                              successFlag: !0,
                              duration: C - g,
                              retryFlag: Rn[d][j],
                            }),
                          (Rn[d][j] = !1);
                      }),
                      (I = !0);
                  }),
                  h.addEventListener("error", function (S) {
                    var C = ((S == null ? void 0 : S.currentTarget) || {})
                      .readyState;
                    bn != null &&
                      bn.forEach(function (T) {
                        (T = T.onErr),
                          T != null &&
                            T({
                              msg: "Unable to retrieve specific error information, please check the browser console!",
                              readyState: C,
                              connectUrl: d,
                            });
                      });
                  }),
                  h.addEventListener("close", function (S) {
                    var C;
                    (Rn[d] = (C = Rn[d]) != null ? C : {}),
                      I || S.code === 1e3
                        ? ((I = !1),
                          bn.forEach(function (T) {
                            (T = T.key), (Rn[d][T] = !1);
                          }))
                        : (bn.forEach(function (j) {
                            var U,
                              b = j.sendConnectInfo,
                              j = j.key;
                            (Rn[d][j] = (U = Rn[d][j]) != null && U),
                              b != null &&
                                b(
                                  v(v({}, S), {
                                    msg: "WebSocket connection failed",
                                    url: d,
                                    successFlag: !1,
                                    retryFlag: Rn[d][j],
                                  }),
                                ),
                              (Rn[d][j] = !0);
                          }),
                          (I = !1));
                  }),
                  Object.defineProperty(h, "send", {
                    get: function () {
                      return function (T) {
                        (C = h.originSend) != null && C.call(h, T);
                        var C = h.readyState,
                          T = WebSocket.OPEN,
                          U = WebSocket.CLOSED,
                          b = WebSocket.CONNECTING,
                          j = WebSocket.CLOSING;
                        if (C !== T) {
                          var K = { readyState: C, connectUrl: h.url };
                          switch (C) {
                            case U:
                              bn.forEach(function (z) {
                                (z = z.sendErr),
                                  z != null &&
                                    z(
                                      v(
                                        {
                                          msg: "Message sending failed, the connection is closed!",
                                        },
                                        K,
                                      ),
                                    );
                              });
                              break;
                            case b:
                              bn.forEach(function (z) {
                                (0, z.sendErr)(
                                  v(
                                    {
                                      msg: "Message sending failed, connecting...",
                                    },
                                    K,
                                  ),
                                );
                              });
                              break;
                            case j:
                              bn.forEach(function (z) {
                                (0, z.sendErr)(
                                  v(
                                    {
                                      msg: "Message sending failed, connection is closing!",
                                    },
                                    K,
                                  ),
                                );
                              });
                          }
                        }
                      };
                    },
                  }),
                  h
                );
              },
            },
            lo =
              (new Tt({ name: Z.ERROR }),
              new Tt({
                name: Z.ERROR,
                onNewAegis: function (a) {
                  this.startListen(a);
                },
                startListen: function (a) {
                  function c(S) {
                    var C,
                      T = S && be(S.reason);
                    T &&
                      g.publishErrorLog(
                        {
                          msg: "PROMISE_ERROR: " + T,
                          errorMsg:
                            (T =
                              (C =
                                ((C = S.reason) == null ? void 0 : C.message) ||
                                ((C = S.reason) == null ? void 0 : C.errMsg) ||
                                T) == null
                                ? void 0
                                : C.slice) == null
                              ? void 0
                              : T.call(C, 0, 150),
                          level: te.PROMISE_ERROR,
                          type: me.NORMAL,
                          originEvent: S,
                        },
                        a,
                      );
                  }
                  function d(S) {
                    var C;
                    if (
                      (U =
                        (S == null ? void 0 : S.target) ||
                        (S == null ? void 0 : S.srcElement))
                    ) {
                      var T = U.src || U.href || "",
                        U = U.tagName,
                        U = U === void 0 ? "script" : U;
                      if (
                        !(
                          ot((C = T), _t(a.config, "hostUrl")) ||
                          -1 < window.location.href.indexOf(C)
                        )
                      ) {
                        var b = {
                          msg: U + " load fail: " + T,
                          level: te.INFO,
                          type: me.NORMAL,
                          originEvent: S,
                        };
                        if (/\.js$/.test(T)) b.level = te.SCRIPT_ERROR;
                        else if (/\.css$/.test(T)) b.level = te.CSS_ERROR;
                        else
                          switch (U.toLowerCase()) {
                            case "script":
                              b.level = te.SCRIPT_ERROR;
                              break;
                            case "link":
                              b.level = te.CSS_ERROR;
                              break;
                            case "img":
                              b.level = te.IMAGE_ERROR;
                              break;
                            case "audio":
                            case "video":
                              b.level = te.MEDIA_ERROR;
                              break;
                            default:
                              return;
                          }
                        g.publishErrorLog(b, a);
                      }
                    }
                  }
                  var h,
                    g = this,
                    I = window.onerror;
                  (window.onerror = function () {
                    for (var S = [], C = 0; C < arguments.length; C++)
                      S[C] = arguments[C];
                    var T,
                      U = be(S[0]);
                    typeof (T = U) != "string" ||
                      !T ||
                      V.some(function (b) {
                        return -1 < T.indexOf(b);
                      }) ||
                      ie.some(function (b) {
                        return -1 < T.indexOf(b);
                      }) ||
                      g.publishErrorLog(
                        {
                          msg:
                            (U || "") +
                            " @ (" +
                            (be(S[1]) || "") +
                            ":" +
                            (S[2] || 0) +
                            ":" +
                            (S[3] || 0) +
                            `)

` +
                            be(S[4] || ""),
                          errorMsg: U,
                          level: te.ERROR,
                          type: me.NORMAL,
                          originEvent: S[4],
                        },
                        a,
                      ),
                      I != null && I.call.apply(I, X([window], S));
                  }),
                    window.addEventListener("unhandledrejection", c),
                    window.document.addEventListener("error", d, !0),
                    a.event.on(Qe.destroy, function () {
                      window.document.removeEventListener(
                        "unhandledrejection",
                        c,
                      ),
                        window.document.removeEventListener("error", d, !0);
                    }),
                    a.config.websocketHack &&
                      ((h = {
                        key: a.config.id + "-" + this.name,
                        onErr: function (S) {
                          var C;
                          (C = g.publishWsErrorLog) != null && C.call(g, S, a);
                        },
                        sendErr: function (S) {
                          var C;
                          (C = g.publishWsErrorLog) != null && C.call(g, S, a);
                        },
                      }),
                      (this.hackWebsocketConfig = h),
                      Ps(this.hackWebsocketConfig));
                },
                publishErrorLog: function (g, c) {
                  var d = g.type,
                    h = g.level,
                    g = R(g, ["type", "level"]);
                  this.publish(
                    v({ level: h || te.ERROR, type: d || me.NORMAL }, g),
                    c,
                  );
                },
                publishWsErrorLog: function (g, c) {
                  var d = g.connectUrl,
                    h = g.msg,
                    g = g.readyState;
                  this.publishErrorLog(
                    {
                      msg:
                        `WEBSOCKET_ERROR:
              connect: ` +
                        d +
                        `
              readyState: ` +
                        g +
                        `
              msg: ` +
                        h,
                      level: te.WEBSOCKET_ERROR,
                      type: me.NORMAL,
                    },
                    c,
                  );
                },
                destroy: function () {
                  (this.publishErrorLog = function () {}),
                    this.hackWebsocketConfig && Ur(this.hackWebsocketConfig);
                },
              })),
            La = (new Tt({ name: Z.PAGE_PERFORMANCE }), 3),
            Ls = new Tt({
              name: Z.PAGE_PERFORMANCE,
              performanceMap: {},
              longTaskObserver: null,
              onNewAegis: function (a) {
                io() &&
                  (Ai ? this.publish(Ai, a) : this.startCalcPerformance(a),
                  this.startLongtaskObserver(a));
              },
              startLongtaskObserver: function (a) {
                var c = this;
                window.PerformanceObserver &&
                  ((this.longTaskObserver = new PerformanceObserver(function (
                    d,
                  ) {
                    d.getEntries().forEach(function (S) {
                      var g = S.duration,
                        I = S.name,
                        S = S.startTime,
                        S = Math.floor(
                          performance != null && performance.timeOrigin
                            ? performance.timeOrigin + S
                            : Date.now() - g,
                        );
                      c.publish(
                        {
                          duration: g,
                          msg: "longtask",
                          name: I,
                          timestamp: S,
                          type: me.PAGE_PERFORMANCE,
                          level: te.LONGTASK,
                        },
                        a,
                      );
                    });
                  })),
                  this.longTaskObserver.observe({ entryTypes: ["longtask"] }));
              },
              startCalcPerformance: function (a) {
                var c = this;
                try {
                  this.getFirstScreenTiming(a, function (d) {
                    var h = performance.timing;
                    h &&
                      ((Ai = {
                        msg: "page_performance",
                        type: me.PAGE_PERFORMANCE,
                        dnsLookup: sr(h.domainLookupEnd - h.domainLookupStart),
                        tcp: sr(h.connectEnd - h.connectStart),
                        ssl: sr(
                          h.secureConnectionStart === 0
                            ? 0
                            : h.requestStart - h.secureConnectionStart,
                        ),
                        ttfb: sr(h.responseStart - h.requestStart),
                        contentDownload: sr(h.responseEnd - h.responseStart),
                        domParse: sr(
                          h.domInteractive - h.domLoading,
                          0,
                          15e3,
                          1070,
                        ),
                        resourceDownload: sr(
                          h.loadEventStart - h.domInteractive,
                          0,
                          15e3,
                          1070,
                        ),
                        firstScreenTiming: sr(Math.floor(d), 0, 15e3, 15e3),
                      }),
                      (h = a.config).extraPerformanceData &&
                        JSON.stringify(h.extraPerformanceData) !== "{}" &&
                        ((h = (d = h.extraPerformanceData).engineInit),
                        (d = d.bundleLoad),
                        (Ai = v(v({}, Ai), {
                          engineInit: sr(h, 0, 1e4),
                          bundleLoad: sr(d, 0, 1e4),
                        }))),
                      c.publish(Ai, a));
                  });
                } catch {}
              },
              getFirstScreenTiming: function (a, c) {
                var d = this;
                a.event.on(Qe.destroy, function () {
                  j && clearTimeout(j);
                });
                var h,
                  g = this,
                  I = ["script", "style", "link", "br"],
                  S = [],
                  C = {},
                  T =
                    (-1 <
                      ((U =
                        (U = window.PerformanceObserver) == null
                          ? void 0
                          : U.supportedEntryTypes) == null
                        ? void 0
                        : U.indexOf("paint")) &&
                      (h = new PerformanceObserver(function (K) {
                        K.getEntries().forEach(function (z) {
                          var Y;
                          z.entryType === "paint" &&
                            z.name === "first-contentful-paint" &&
                            0 <
                              (Y = document.querySelectorAll(
                                "[AEGIS-FIRST-SCREEN-TIMING]",
                              )).length &&
                            a.config.id &&
                            !d.performanceMap[a.config.id] &&
                            (d.setFirstScreenInfo(a, z.startTime, Y[0], Y),
                            c != null && c(z.startTime),
                            T.disconnect(),
                            h.disconnect(),
                            j) &&
                            clearTimeout(j);
                        });
                      })).observe({ entryTypes: ["paint"] }),
                    new MutationObserver(function (K) {
                      var z = {
                        roots: [],
                        ignores: [],
                        rootsDomNum: [],
                        time: performance.now(),
                      };
                      K.forEach(function (Y) {
                        Y != null &&
                          Y.addedNodes &&
                          Array.prototype.slice
                            .call(Y.addedNodes)
                            .forEach(function (ge) {
                              g.isEleInArray(ge, z.ignores)
                                ? z.ignores.push(ge)
                                : ge.nodeType === 1 &&
                                    ge.hasAttribute("AEGIS-FIRST-SCREEN-TIMING")
                                  ? (Object.prototype.hasOwnProperty.apply(C, [
                                      z.time,
                                    ]) || (C[z.time] = []),
                                    C[z.time].push(ge))
                                  : ge.nodeType === 1 &&
                                    (g.hasAncestorOrSelfWithAttribute(
                                      ge,
                                      "AEGIS-IGNORE-FIRST-SCREEN-TIMING",
                                    )
                                      ? z.ignores.push(ge)
                                      : I.indexOf(
                                          ge.nodeName.toLocaleLowerCase(),
                                        ) !== -1 ||
                                        g.isEleInArray(ge, z.roots) ||
                                        (z.roots.push(ge),
                                        z.rootsDomNum.push(
                                          g.walkAndCount(ge) || 0,
                                        )));
                            });
                      }),
                        z.roots.length && S.push(z);
                    }));
                T.observe(document, { childList: !0, subtree: !0 });
                var U,
                  b = function (K) {
                    (K = K === void 0 ? 0 : K) ||
                      ((z = 0),
                      (ge = Object.keys(C)).length
                        ? ((K = Math.max.apply(null, ge)),
                          d.setFirstScreenInfo(
                            a,
                            K,
                            (ge = C[K]) == null ? void 0 : ge[0],
                            C,
                          ))
                        : S.forEach(function (Ue) {
                            for (var qe = 0; qe < Ue.roots.length; qe++)
                              Ue.rootsDomNum[qe] > z &&
                                g.isInFirstScreen(Ue.roots[qe]) &&
                                ((z = Ue.rootsDomNum[qe]),
                                (K = Ue.time),
                                d.setFirstScreenInfo(a, K, Ue.roots[qe]));
                          }),
                      (S.length = 0),
                      Object.keys(C).forEach(function (Ue) {
                        C[Ue] = C[Ue].map(function (qe) {
                          var lt = { tagName: qe.tagName },
                            Xe = qe.attributes;
                          if (!Xe) return qe;
                          for (var ct = 0; ct < Xe.length; ct++) {
                            var mt = Xe[ct];
                            mt.name && (lt[mt.name] = qe.getAttribute(mt.name));
                          }
                          return lt;
                        });
                      }));
                    var z,
                      ge = performance.timing,
                      Y = ge.domInteractive - ge.domLoading,
                      ge = ge.loadEventStart - ge.domInteractive,
                      Le = K;
                    j = null;
                    for (var de = 0, Ie = [Y, ge, Le]; de < Ie.length; de++)
                      if (Ie[de] <= 0 && 0 < La) {
                        j = setTimeout(function () {
                          return b(Le);
                        }, 3e3);
                        break;
                      }
                    j
                      ? --La
                      : (T.disconnect(),
                        h != null && h.disconnect(),
                        c != null && c(K));
                  },
                  j = setTimeout(function () {
                    return b();
                  }, 3e3);
              },
              setFirstScreenInfo: function (a, c, d, h) {
                var g;
                (a.config.id && this.performanceMap[a.config.id]) ||
                  (a.config.id && (this.performanceMap[a.config.id] = !0),
                  (typeof ((g = a.config) == null
                    ? void 0
                    : g.pagePerformance) != "object" ||
                    ((g = a.config.pagePerformance) != null &&
                      g.firstScreenInfo)) &&
                    (a.firstScreenInfo = {
                      element: d,
                      timing: c,
                      markDoms: h,
                    }));
              },
              isEleInArray: function (a, c) {
                return (
                  !(!a || a === document.documentElement) &&
                  (c.indexOf(a) !== -1 || this.isEleInArray(a.parentElement, c))
                );
              },
              isInFirstScreen: function (a) {
                var c, d;
                return (
                  !(!a || typeof a.getBoundingClientRect != "function") &&
                  ((a = a.getBoundingClientRect()),
                  (c = window.innerHeight),
                  (d = window.innerWidth),
                  0 <= a.left) &&
                  a.left < d &&
                  0 <= a.top &&
                  a.top < c &&
                  0 < a.width &&
                  0 < a.height
                );
              },
              walkAndCount: function (a) {
                var c = 0;
                if (a && a.nodeType === 1) {
                  c += 1;
                  var d = a.children;
                  if (d != null && d.length)
                    for (var h = 0; h < d.length; h++)
                      (d[h].nodeType === 1 &&
                        d[h].hasAttribute(
                          "AEGIS-IGNORE-FIRST-SCREEN-TIMING",
                        )) ||
                        (c += this.walkAndCount(d[h]));
                }
                return c;
              },
              hasAncestorOrSelfWithAttribute: function (a, c) {
                for (var d = a; d && d !== document.body; ) {
                  if (d.hasAttribute(c)) return !0;
                  d = d.parentElement;
                }
                return !1;
              },
              destroy: function () {
                this.longTaskObserver &&
                  (this.longTaskObserver.disconnect(),
                  (this.longTaskObserver = null)),
                  (this.performanceMap = {});
              },
            }),
            gt = -1,
            ri = function (a) {
              addEventListener(
                "pageshow",
                function (c) {
                  c.persisted && ((gt = c.timeStamp), a(c));
                },
                !0,
              );
            },
            Ms = function () {
              var a =
                self.performance &&
                performance.getEntriesByType &&
                performance.getEntriesByType("navigation")[0];
              if (
                a &&
                0 < a.responseStart &&
                a.responseStart < performance.now()
              )
                return a;
            },
            co = function () {
              var a = Ms();
              return (a && a.activationStart) || 0;
            },
            ii = function (a, c, d) {
              try {
                var h;
                if (PerformanceObserver.supportedEntryTypes.includes(a))
                  return (
                    (h = new PerformanceObserver(function (g) {
                      Promise.resolve().then(function () {
                        c(g.getEntries());
                      });
                    })).observe(
                      Object.assign({ type: a, buffered: !0 }, d || {}),
                    ),
                    h
                  );
              } catch {}
            },
            oi = -1,
            js = function () {
              return document.visibilityState !== "hidden" ||
                document.prerendering
                ? 1 / 0
                : 0;
            },
            Ni = function (a) {
              document.visibilityState === "hidden" &&
                -1 < oi &&
                ((oi = a.type === "visibilitychange" ? a.timeStamp : 0),
                removeEventListener("visibilitychange", Ni, !0),
                removeEventListener("prerenderingchange", Ni, !0));
            },
            fo = function () {
              addEventListener("visibilitychange", Ni, !0),
                addEventListener("prerenderingchange", Ni, !0);
            },
            Ir = [1800, 3e3],
            xr = [0.1, 0.25],
            Cr = 0,
            si = 1 / 0,
            zr = 0,
            Hr = function (a) {
              a.forEach(function (c) {
                c.interactionId &&
                  ((si = Math.min(si, c.interactionId)),
                  (zr = Math.max(zr, c.interactionId)),
                  (Cr = zr ? (zr - si) / 7 + 1 : 0));
              });
            },
            dr = [],
            po = new Map(),
            Di = 0,
            cl = [],
            Fs = [200, 500],
            ho = [2500, 4e3],
            Jo = {},
            go = { passive: !0, capture: !0 },
            mo = new Date(),
            Li = function (a, c) {
              Br ||
                ((Br = c),
                (ao = a),
                (Na = new Date()),
                so(removeEventListener),
                Ta());
            },
            ai = [100, 300],
            vo =
              (new Tt({ name: Z.WEB_VITALS }),
              { FCP: -1, LCP: -1, FID: -1, CLS: -1, INP: -1 }),
            fl = new Tt({
              name: Z.WEB_VITALS,
              onNewAegis: function (a) {
                if (
                  io() &&
                  typeof window.PerformanceObserver == "function" &&
                  typeof performance.getEntriesByName == "function"
                )
                  try {
                    Bt(On),
                      (I = On),
                      (S = {}),
                      Go(function () {
                        function C(z) {
                          (z = S.reportAllChanges ? z : z.slice(-1)).forEach(
                            function (Y) {
                              Y.startTime < b.firstHiddenTime &&
                                ((j.value = Math.max(Y.startTime - co(), 0)),
                                (j.entries = [Y]),
                                T());
                            },
                          );
                        }
                        var T,
                          U,
                          b = Ts(),
                          j = fr("LCP"),
                          K = ii("largest-contentful-paint", C);
                        K &&
                          ((T = ar(I, j, ho, S.reportAllChanges)),
                          (U = oo(function () {
                            Jo[j.id] ||
                              (C(K.takeRecords()),
                              K.disconnect(),
                              (Jo[j.id] = !0),
                              T(!0));
                          })),
                          ["keydown", "click"].forEach(function (z) {
                            addEventListener(
                              z,
                              function () {
                                return Ns(U);
                              },
                              { once: !0, capture: !0 },
                            );
                          }),
                          Ti(U),
                          ri(function (z) {
                            (j = fr("LCP")),
                              (T = ar(I, j, ho, S.reportAllChanges)),
                              Vo(function () {
                                (j.value = performance.now() - z.timeStamp),
                                  (Jo[j.id] = !0),
                                  T(!0);
                              });
                          }));
                      }),
                      (h = On),
                      (g = {}),
                      Go(function () {
                        function C(z) {
                          z.startTime < U.firstHiddenTime &&
                            ((b.value = z.processingStart - z.startTime),
                            b.entries.push(z),
                            K(!0));
                        }
                        function T(z) {
                          z.forEach(C);
                        }
                        var U = Ts(),
                          b = fr("FID"),
                          j = ii("first-input", T),
                          K = ar(h, b, ai, g.reportAllChanges);
                        j &&
                          (Ti(
                            oo(function () {
                              T(j.takeRecords()), j.disconnect();
                            }),
                          ),
                          ri(function () {
                            (b = fr("FID")),
                              (K = ar(h, b, ai, g.reportAllChanges)),
                              (ti = []),
                              (ao = -1),
                              (Br = null),
                              so(addEventListener),
                              ti.push(C),
                              Ta();
                          }));
                      }),
                      (c = On),
                      (d = {}),
                      Bt(
                        oo(function () {
                          function C(z) {
                            z.forEach(function (Y) {
                              var ge, Le;
                              Y.hadRecentInput ||
                                ((ge = j[0]),
                                (Le = j[j.length - 1]),
                                b &&
                                Y.startTime - Le.startTime < 1e3 &&
                                Y.startTime - ge.startTime < 5e3
                                  ? ((b += Y.value), j.push(Y))
                                  : ((b = Y.value), (j = [Y])));
                            }),
                              b > U.value &&
                                ((U.value = b), (U.entries = j), T());
                          }
                          var T,
                            U = fr("CLS", 0),
                            b = 0,
                            j = [],
                            K = ii("layout-shift", C);
                          K &&
                            ((T = ar(c, U, xr, d.reportAllChanges)),
                            Ti(function () {
                              C(K.takeRecords()), T(!0);
                            }),
                            ri(function () {
                              (U = fr("CLS", (b = 0))),
                                (T = ar(c, U, xr, d.reportAllChanges)),
                                Vo(function () {
                                  return T();
                                });
                            }),
                            setTimeout(T, 0));
                        }),
                      ),
                      Qo(On),
                      Fr(this.publishVitals.bind(this, a), !0);
                  } catch {}
                var c, d, h, g, I, S;
              },
              publishVitals: function (a) {
                var c = this;
                setTimeout(function () {
                  c.publish(
                    v({ type: me.WEB_VITALS, msg: "web_vitals" }, vo),
                    a,
                  );
                }, 10);
              },
              destroy: function () {
                this.publish = function () {};
              },
            }),
            dl =
              (new Tt({ name: Z.SPA }),
              new Tt({
                name: Z.SPA,
                originFireUrl: "",
                onNewAegis: function (a) {
                  var c,
                    d,
                    h,
                    g = this;
                  (this.sendPv = this.sendPv.bind(this)),
                    (c = (c = a.config) == null ? void 0 : c.plugin) != null &&
                      c.spa &&
                      this.sendPv(a);
                  try {
                    (d = Object.getOwnPropertyDescriptor(
                      History.prototype,
                      "pushState",
                    )) != null &&
                      d.writable &&
                      (history.pushState =
                        this.wr("pushState") || history.pushState),
                      (h = Object.getOwnPropertyDescriptor(
                        History.prototype,
                        "replaceState",
                      )) != null &&
                        h.writable &&
                        (history.replaceState =
                          this.wr("replaceState") || history.replaceState);
                  } catch {}
                  [
                    "replaceState",
                    "pushState",
                    "hashchange",
                    "popstate",
                  ].forEach(function (I) {
                    return window.addEventListener(I, function () {
                      return g.sendPv.call(g, a);
                    });
                  });
                },
                wr: function (a) {
                  var c = history[a],
                    d = "__" + a + "__hasWrittenByTamSpa";
                  return (
                    typeof c == "function" &&
                    !history[d] &&
                    (Object.defineProperty(history, d, {
                      value: !0,
                      enumerable: !1,
                    }),
                    function () {
                      var h = c.apply(this, arguments),
                        g = null;
                      return (
                        typeof Event == "function"
                          ? (g = new Event(a))
                          : (g = document.createEvent("HTMLEvents")).initEvent(
                              a,
                              !1,
                              !0,
                            ),
                        window.dispatchEvent(g),
                        h
                      );
                    })
                  );
                },
                sendPv: function (a) {
                  var c = this;
                  setTimeout(function () {
                    var d = location.pathname + location.hash + a.config.id;
                    d &&
                      d !== a.originFireUrl &&
                      (a.updateSnapshootInfo({ from: a.getCurrentPageUrl() }),
                      (a.timeOrigin = Date.now()),
                      c.publish({ msg: "spa", type: me.PV }, a),
                      (a.originFireUrl = d));
                  }, 0);
                },
                destroy: function () {
                  this.sendPv = function () {};
                },
              })),
            Us = {
              name: "networkRefresh",
              create: function (a) {
                return function (c) {
                  return new Promise(function (d) {
                    Da(function (h) {
                      a.extendBean({ netType: h }), d(c);
                    });
                  });
                };
              },
            },
            ne =
              (m((ni = ui), (ne = uo = ne)),
              (ni.prototype =
                ne === null
                  ? Object.create(ne)
                  : ((Bs.prototype = ne.prototype), new Bs())),
              (ui.prototype.getCurrentPageUrl = function () {
                var a = this.config.pageUrl || location.href || "";
                return (a =
                  typeof this.config.urlHandler == "function"
                    ? this.config.urlHandler()
                    : a).slice(0, 2048);
              }),
              (ui.prototype.performRequest = function (U, c, d) {
                var h,
                  g,
                  I,
                  S,
                  C = U.method,
                  T = U.url,
                  U = U.payload;
                if (
                  this.sendNow &&
                  T === _t(this.config, "hostUrl.url") &&
                  typeof (navigator == null ? void 0 : navigator.sendBeacon) ==
                    "function"
                )
                  return (h = navigator.sendBeacon(T, ut(U)))
                    ? c == null
                      ? void 0
                      : c(h)
                    : d == null
                      ? void 0
                      : d(h);
                (T = (h = {
                  url: T,
                  payload: U,
                  method: C,
                  success: c,
                  fail: d,
                }).url),
                  (U = h.method),
                  (C = h.payload),
                  (g = h.fail),
                  (I = h.success),
                  ((S = new XMLHttpRequest()).sendByAegis = !0),
                  S.addEventListener("readystatechange", function () {
                    S.readyState === 4 &&
                      (400 <= S.status || S.status === 0
                        ? g != null && g(S.response)
                        : I != null && I(S.response));
                  }),
                  S.open(U || "post", T),
                  qo() &&
                    S.setRequestHeader(
                      "content-type",
                      "text/plain;charset=UTF-8",
                    ),
                  S.send(JSON.stringify(C));
              }),
              (ui.sessionID = "session-" + Date.now()),
              ui);
          function ui(d) {
            var c,
              d = uo.call(this, d) || this;
            (d.sendNow = !1),
              (d.originFireUrl = ""),
              (d.timeOrigin =
                (c =
                  typeof performance < "u" &&
                  (performance == null ? void 0 : performance.timeOrigin)) !=
                null
                  ? c
                  : Date.now()),
              d.pipes.push(Us);
            try {
              d.updateSnapshootInfo({ from: d.getCurrentPageUrl() }),
                typeof document < "u" &&
                  d.extendBean({ referer: document.referrer || "" }),
                d.init();
            } catch (h) {
              d.logger.warn(h), d.sendSDKError({ msg: be(h) });
            }
            return d;
          }
          function Bs() {
            this.constructor = ni;
          }
          new Tt({ name: Z.IE });
          function Ct(a) {
            return navigator.userAgent.toLowerCase().indexOf(a) !== -1;
          }
          var je = {},
            Ko =
              ((je.macos = function () {
                return Ct("mac");
              }),
              (je.ios = function () {
                return je.iphone() || je.ipod() || je.ipad();
              }),
              (je.iphone = function () {
                return !je.windows() && Ct("iphone");
              }),
              (je.ipod = function () {
                return Ct("ipod");
              }),
              (je.ipad = function () {
                var a =
                  navigator.platform === "MacIntel" &&
                  1 < navigator.maxTouchPoints;
                return Ct("ipad") || a;
              }),
              (je.android = function () {
                return !je.windows() && Ct("android");
              }),
              (je.androidPhone = function () {
                return je.android() && Ct("mobile");
              }),
              (je.androidTablet = function () {
                return je.android() && !Ct("mobile");
              }),
              (je.blackberry = function () {
                return Ct("blackberry") || Ct("bb10");
              }),
              (je.blackberryPhone = function () {
                return je.blackberry() && !Ct("tablet");
              }),
              (je.blackberryTablet = function () {
                return je.blackberry() && Ct("tablet");
              }),
              (je.windows = function () {
                return Ct("windows");
              }),
              (je.windowsPhone = function () {
                return je.windows() && Ct("phone");
              }),
              (je.windowsTablet = function () {
                return je.windows() && Ct("touch") && !je.windowsPhone();
              }),
              (je.fxos = function () {
                return (Ct("(mobile") || Ct("(tablet")) && Ct(" rv:");
              }),
              (je.fxosPhone = function () {
                return je.fxos() && Ct("mobile");
              }),
              (je.fxosTablet = function () {
                return je.fxos() && Ct("tablet");
              }),
              (je.meego = function () {
                return Ct("meego");
              }),
              (je.cordova = function () {
                return window.cordova && location.protocol === "file:";
              }),
              (je.nodeWebkit = function () {
                return typeof window.process == "object";
              }),
              (je.mobile = function () {
                return (
                  je.androidPhone() ||
                  je.iphone() ||
                  je.ipod() ||
                  je.windowsPhone() ||
                  je.blackberryPhone() ||
                  je.fxosPhone() ||
                  je.meego()
                );
              }),
              (je.tablet = function () {
                return (
                  je.ipad() ||
                  je.androidTablet() ||
                  je.blackberryTablet() ||
                  je.windowsTablet() ||
                  je.fxosTablet()
                );
              }),
              (je.desktop = function () {
                return !je.tablet() && !je.mobile();
              }),
              (je.isIE = function () {
                return "ActiveXObject" in window;
              }),
              new Tt({ name: Z.CLOSE }),
              new Tt({
                name: Z.CLOSE,
                onNewAegis: function (a) {
                  var c,
                    d = this;
                  je.desktop()
                    ? ((c = window.onunload),
                      (window.onunload = function () {
                        for (var h = [], g = 0; g < arguments.length; g++)
                          h[g] = arguments[g];
                        d.publishNotReportedLog(a),
                          c != null && c.call.apply(c, X([window], h));
                      }))
                    : Fr(this.publishNotReportedLog.bind(this, a));
                },
                publishNotReportedLog: function (a) {
                  a.clearPluginCache(), a.clearThrottleCache();
                },
                publishThrottlePipeLogs: function () {},
              }));
          new Tt({ name: Z.F_ID });
          function Ma(a, c) {
            c === void 0 && (c = /\.flv(\?|$)/i),
              hr.find(function (d) {
                return d.name === a.name;
              }) ||
                (hr.push(a),
                !Fa &&
                  window.fetch &&
                  ((Fa = !0),
                  (ci = window.fetch),
                  (window.fetch = function (d, h) {
                    h === void 0 && (h = {});
                    var g =
                      typeof (C = d) == "string"
                        ? C
                        : C instanceof Request
                          ? C.url
                          : C instanceof URL
                            ? C.href
                            : "";
                    if (
                      (C = c == null ? void 0 : c.test) != null &&
                      C.call(c, g)
                    )
                      return ci(g, h);
                    ja.test(g) && (g = "" + location.origin + g);
                    var I,
                      S,
                      C = (a || {}).traceRequestHeader;
                    C &&
                      ((I = (function (j, K) {
                        try {
                          var z = {};
                          return (
                            K.headers
                              ? new Headers(K.headers).forEach(
                                  function (Y, ge) {
                                    z[ge] = Y;
                                  },
                                )
                              : j instanceof Request &&
                                j.headers.forEach(function (Y, ge) {
                                  z[ge] = Y;
                                }),
                            z
                          );
                        } catch (Y) {
                          return (
                            console.log(
                              "failed to get header: " +
                                JSON.stringify(Y) +
                                " }",
                            ),
                            {}
                          );
                        }
                      })(d, h)),
                      (S = (C = C.generate(g, I) || {}).name),
                      (C = C.value)) &&
                      S &&
                      (h.headers = Object.assign(I, (((I = {})[S] = C), I)));
                    for (var T = 0; T < hr.length; T++) {
                      var U = hr[T];
                      try {
                        typeof U.beforeFetch == "function" &&
                          U.beforeFetch(g, h);
                      } catch {}
                    }
                    var b = Date.now();
                    return ci(d, h)
                      .then(function (j) {
                        for (var K = j.clone(), z = 0; z < hr.length; z++) {
                          var Y = hr[z];
                          try {
                            typeof Y.then == "function" &&
                              Y.then(K, Date.now() - b, g, h);
                          } catch {}
                        }
                        return K;
                      })
                      .catch(function (j) {
                        for (var K = 0; K < hr.length; K++) {
                          var z = hr[K];
                          try {
                            typeof z.catch == "function" &&
                              z.catch(j, Date.now() - b, g, h);
                          } catch {}
                        }
                        throw j;
                      });
                  })));
          }
          function qr(a, c, d) {
            return c != null && c.length && typeof a == "object"
              ? c.reduce(function (h, g) {
                  var I = a instanceof Headers ? a.get(g) : a[g];
                  return I
                    ? h +
                        (h === ""
                          ? `
`
                          : `

`) +
                        d +
                        " header " +
                        g +
                        ": " +
                        I
                    : h;
                }, "")
              : "";
          }
          function Xo(a, c, d) {
            return _(void 0, void 0, void 0, function () {
              var h, g, I, S, C, T, U, b, j, K, z, Y, ge;
              return D(this, function (Le) {
                switch (Le.label) {
                  case 0:
                    (h = Date.now()),
                      (g = h),
                      (I = new Uint8Array(0)),
                      (S = 0),
                      (C = c),
                      (T = []),
                      (U = new TextDecoder()),
                      (b = !1),
                      (Le.label = 1);
                  case 1:
                    return [4, a.read()];
                  case 2:
                    return !(z = Le.sent()).done && z.value
                      ? ((K = Date.now() - g),
                        !b &&
                          ((j = $n(U.decode(z.value))),
                          typeof d == "function" ? d(j) : I.length === 0) &&
                          ((C += K), (b = !0)),
                        T.push(K),
                        (g = Date.now()),
                        (S += 1),
                        (de = I),
                        (Ie = z.value),
                        (Ue = new Uint8Array(de.length + Ie.length)).set(de),
                        Ue.set(Ie, de.length),
                        (I = Ue),
                        [3, 1])
                      : [3, 3];
                  case 3:
                    return (
                      (j = Date.now() - h),
                      (K = j + c),
                      (z = Un(T)),
                      (Y = z.fluency),
                      (ge = z.isStuck),
                      [
                        2,
                        {
                          dataDuration: j,
                          dataChunkCount: S,
                          firstChunkTime: C,
                          totalDuration: K,
                          totalDataSize: I.length,
                          connectTime: c,
                          fluency: Y,
                          isStuck: ge,
                          data: U.decode(I),
                        },
                      ]
                    );
                }
                var de, Ie, Ue;
              });
            });
          }
          function Yo(d) {
            var c = d.isAjaxError,
              d = d.isRetcodeError,
              h = te.INFO;
            return (
              c ? (h = te.AJAX_ERROR) : d && (h = te.ERROR),
              { level: h, type: me.API }
            );
          }
          var Pn,
            li,
            Zo,
            ci,
            yo,
            pr,
            Ws = new Tt({
              name: Z.PV,
              init: function (a) {
                var c;
                ((c = (c = a.config) == null ? void 0 : c.plugin) != null &&
                  c.spa) ||
                  this.publish({ msg: "pv", type: me.PV }, a);
              },
            }),
            wo = {
              isSSE: void 0,
              dataChunkCount: 0,
              sseConnectTime: 0,
              firstChunkTime: 0,
              totalDataSize: 0,
              tokenIntervalArr: [],
              preTokenStartTime: 0,
              chunkPosition: 0,
              firstChunkFlag: !1,
            },
            So = !1,
            Or = [],
            ja = /^\/[^/]/,
            Fa = !1,
            hr = [],
            zs =
              (new Tt({ name: Z.API }),
              new Tt({
                name: Z.API,
                pipes: ["repeatLimit", "networkRefresh"],
                override: !1,
                onNewAegis: function (a) {
                  var c,
                    d = (
                      ((d = a == null ? void 0 : a.config) == null
                        ? void 0
                        : d.plugin) || {}
                    ).api;
                  d != null &&
                    d.injectTraceHeader &&
                    (this.traceRequestHeader = new Be(
                      d.injectTraceHeader,
                      (c = d == null ? void 0 : d.injectTraceIgnoreUrls) != null
                        ? c
                        : [],
                      d == null ? void 0 : d.injectTraceUrls,
                    )),
                    this.overrideFetch(a.config, a),
                    this.overrideXhr(a.config, a);
                },
                getRequestType: function (g, c, d) {
                  c === void 0 && (c = "");
                  var h,
                    g = (g = g.plugin) == null ? void 0 : g.api,
                    g =
                      typeof (g == null ? void 0 : g.resourceTypeHandler) ==
                      "function"
                        ? g == null
                          ? void 0
                          : g.resourceTypeHandler(d)
                        : "";
                  return (
                    jn.indexOf(g) === -1 &&
                      ((h = c === void 0 ? "" : c),
                      (c = (d === void 0 ? "" : d).split("?")[0]),
                      (c = E.test(c)),
                      (E.lastIndex = 0),
                      (g =
                        c ||
                        L.some(function (I) {
                          return String(h).indexOf(I) !== -1;
                        })
                          ? "static"
                          : "fetch")),
                    g
                  );
                },
                overrideFetch: function (a, c) {
                  var d = this,
                    h = ((a == null ? void 0 : a.plugin) || {}).api,
                    g = {
                      name: a.id,
                      traceRequestHeader:
                        h != null && h.injectTraceHeader
                          ? this.traceRequestHeader
                          : null,
                      then: function (I, S, C, T) {
                        return _(d, void 0, void 0, function () {
                          var U,
                            b,
                            j,
                            K,
                            z = this;
                          return D(this, function (Y) {
                            return (
                              ot(C, _t(a, "hostUrl")) ||
                                ((K = I.headers
                                  ? I.headers.get("content-type")
                                  : ""),
                                (U = this.getRequestType(a, K, C)) === "fetch"
                                  ? ((b =
                                      (K == null
                                        ? void 0
                                        : K.includes("text/event-stream")) ||
                                      ((K = h == null ? void 0 : h.isSSE) ==
                                      null
                                        ? void 0
                                        : K.call(h, C))),
                                    (j = {}),
                                    new Promise(function (ge) {
                                      return _(z, void 0, void 0, function () {
                                        var Le, de, Ie;
                                        return D(this, function (Ue) {
                                          switch (Ue.label) {
                                            case 0:
                                              return b
                                                ? [
                                                    4,
                                                    Xo(
                                                      (Ie =
                                                        (Ie = I.clone()) == null
                                                          ? void 0
                                                          : Ie.body) == null
                                                        ? void 0
                                                        : Ie.getReader(),
                                                      S,
                                                      h.isFirstSSEChunk,
                                                    ),
                                                  ]
                                                : [3, 2];
                                            case 1:
                                              return (
                                                (Ie = Ue.sent()),
                                                (Le = Ie.data),
                                                (de = R(Ie, ["data"])),
                                                (j = de),
                                                [2, ge(Le)]
                                              );
                                            case 2:
                                              return ge(I.clone().text()), [2];
                                          }
                                        });
                                      });
                                    }).then(function (ge) {
                                      return _(z, void 0, void 0, function () {
                                        var Le,
                                          de,
                                          Ie,
                                          Ue,
                                          qe,
                                          lt,
                                          Xe,
                                          ct,
                                          mt,
                                          At,
                                          It,
                                          $e,
                                          yt = this;
                                        return D(this, function (Zt) {
                                          switch (Zt.label) {
                                            case 0:
                                              return (
                                                (Le =
                                                  I.status <= 0 ||
                                                  400 <= I.status),
                                                (de =
                                                  ($e = a.plugin) == null
                                                    ? void 0
                                                    : $e.api),
                                                ($e =
                                                  (de == null
                                                    ? void 0
                                                    : de.reqHeaders) || []),
                                                (Ie = qr(
                                                  T == null
                                                    ? void 0
                                                    : T.headers,
                                                  $e,
                                                  "req",
                                                )),
                                                ($e =
                                                  (de == null
                                                    ? void 0
                                                    : de.resHeaders) || []),
                                                (Ue = qr(I.headers, $e, "res")),
                                                ($e = bt(
                                                  T == null
                                                    ? void 0
                                                    : T.headers,
                                                )),
                                                (qe = $e[0]),
                                                (lt = $e[1]),
                                                [
                                                  4,
                                                  Ve(ge, de, {
                                                    url: C,
                                                    ctx: I,
                                                    payload:
                                                      T == null
                                                        ? void 0
                                                        : T.body,
                                                  }),
                                                ]
                                              );
                                            case 1:
                                              return (
                                                ($e = Zt.sent()),
                                                (Xe = $e.code),
                                                (ct = $e.isErr),
                                                (mt =
                                                  de == null
                                                    ? void 0
                                                    : de.apiDetail),
                                                (At = mt
                                                  ? Je(
                                                      T == null
                                                        ? void 0
                                                        : T.body,
                                                      de == null
                                                        ? void 0
                                                        : de.reqParamHandler,
                                                      { url: C },
                                                    )
                                                  : ""),
                                                (It = mt
                                                  ? Je(
                                                      ge,
                                                      de == null
                                                        ? void 0
                                                        : de.resBodyHandler,
                                                      { url: C, ctx: I },
                                                    )
                                                  : ""),
                                                setTimeout(function () {
                                                  var Nt =
                                                      yt.getPerformanceEntryByUrl(
                                                        { url: C, duration: S },
                                                      ),
                                                    pn = Nt.performanceTiming,
                                                    Nt = Nt.nextHopProtocol,
                                                    wt =
                                                      "" +
                                                      (Le
                                                        ? "FETCH_ERROR"
                                                        : sn(
                                                            C,
                                                            It,
                                                            I.status,
                                                            Xe,
                                                          )),
                                                    qt = (de || {}).urlHandler,
                                                    qt =
                                                      typeof qt == "function"
                                                        ? qt(
                                                            C,
                                                            T == null
                                                              ? void 0
                                                              : T.body,
                                                          )
                                                        : C;
                                                  yt.publish(
                                                    v(
                                                      v(
                                                        v(
                                                          v({}, pn),
                                                          Yo({
                                                            isAjaxError: Le,
                                                            isRetcodeError: ct,
                                                          }),
                                                        ),
                                                        {
                                                          msg: wt,
                                                          errorMsg:
                                                            Le || ct
                                                              ? C + "," + Xe
                                                              : void 0,
                                                          url: N(qt),
                                                          status: I.status || 0,
                                                          method:
                                                            (T == null
                                                              ? void 0
                                                              : T.method) ||
                                                            "get",
                                                          ret: Xe,
                                                          isErr: ct,
                                                          param: At,
                                                          data: It,
                                                          reqHeaders: Ie,
                                                          resHeaders: Ue,
                                                          trace: qe,
                                                          span: lt,
                                                          nextHopProtocol: Nt,
                                                          requestType: U,
                                                          isSSE: b,
                                                        },
                                                      ),
                                                      b
                                                        ? v(v({}, j), {
                                                            totalDuration:
                                                              pn.duration,
                                                          })
                                                        : {},
                                                    ),
                                                    c,
                                                  );
                                                }, 0),
                                                [2]
                                              );
                                          }
                                        });
                                      });
                                    }))
                                  : setTimeout(function () {
                                      var Le = z.getPerformanceEntryByUrl({
                                          url: C,
                                          duration: S,
                                        }),
                                        ge = Le.performanceTiming,
                                        Le = R(Le, ["performanceTiming"]);
                                      z.publish(
                                        v(v(v({}, ge), Le), {
                                          url: N(C),
                                          status: I.status,
                                          type: me.ASSETS_SPEED,
                                        }),
                                        c,
                                      );
                                    }, 0)),
                              [2]
                            );
                          });
                        });
                      },
                      catch: function (I, S, C, T) {
                        var U, b, j, K, z, Y, ge, Le;
                        throw (
                          (ot(C, _t(a, "hostUrl")) ||
                            ((U = d.getRequestType(a, "", C)),
                            (b = (z = a.plugin) == null ? void 0 : z.api),
                            (j =
                              (z = b == null ? void 0 : b.isSSE) == null
                                ? void 0
                                : z.call(b)),
                            (z = (b == null ? void 0 : b.reqHeaders) || []),
                            (K = qr(T == null ? void 0 : T.headers, z, "req")),
                            (z = bt(T == null ? void 0 : T.headers)),
                            (Y = z[0]),
                            (ge = z[1]),
                            (Le =
                              b != null && b.apiDetail
                                ? Je(
                                    T == null ? void 0 : T.body,
                                    b == null ? void 0 : b.reqParamHandler,
                                    { url: C },
                                  )
                                : ""),
                            setTimeout(function () {
                              var de,
                                Ie,
                                qe = d.getPerformanceEntryByUrl({
                                  url: C,
                                  duration: S,
                                }),
                                Ue = qe.performanceTiming,
                                qe = R(qe, ["performanceTiming"]);
                              U === "fetch"
                                ? ((de =
                                    "FETCH_ERROR: " +
                                    I +
                                    `
url: ` +
                                    C +
                                    `
resdata:
status: 0
retcode: unknown
 `),
                                  (Ie =
                                    typeof (Ie = (b || {}).urlHandler) ==
                                    "function"
                                      ? Ie(C, T == null ? void 0 : T.body)
                                      : C),
                                  d.publish(
                                    v(
                                      v(
                                        v({}, Ue),
                                        Yo({
                                          isAjaxError: !0,
                                          isRetcodeError: !1,
                                        }),
                                      ),
                                      {
                                        msg: de,
                                        errorMsg: C + ",0",
                                        url: N(Ie),
                                        status: 0,
                                        method:
                                          (T == null ? void 0 : T.method) ||
                                          "get",
                                        param: Le,
                                        reqHeaders: K,
                                        ret: "unknown",
                                        trace: Y,
                                        span: ge,
                                        isSSE: j,
                                        nextHopProtocol: qe.nextHopProtocol,
                                        requestType: U,
                                      },
                                    ),
                                    c,
                                  ))
                                : d.publish(
                                    v(v(v({}, Ue), qe), {
                                      url: N(C),
                                      status: 400,
                                      type: me.ASSETS_SPEED,
                                    }),
                                    c,
                                  );
                            }, 0)),
                          I)
                        );
                      },
                    };
                  (this.hackFetchOptions = g), Ma(this.hackFetchOptions);
                },
                overrideXhr: function (a, c) {
                  var d,
                    h = this,
                    g = ((a == null ? void 0 : a.plugin) || {}).api,
                    I = {
                      traceRequestHeader:
                        g != null && g.injectTraceHeader
                          ? this.traceRequestHeader
                          : null,
                      name: a.id,
                      send: function (S, C) {
                        var T,
                          U,
                          b = Date.now(),
                          j =
                            (g != null &&
                              g.injectTraceHeader &&
                              ((T = (U =
                                h.traceRequestHeader.generate(S.aegisUrl) || {})
                                .name),
                              (U = U.value),
                              T) &&
                              U &&
                              S.setRequestHeader(T, U),
                            (S.sseConfig = v({}, wo)),
                            S.addEventListener("readystatechange", function () {
                              var Y = S,
                                ge = b,
                                Le = g == null ? void 0 : g.isFirstSSEChunk,
                                de = g == null ? void 0 : g.isSSE;
                              switch (Y.readyState) {
                                case XMLHttpRequest.HEADERS_RECEIVED:
                                  var Ie = Y.sseConfig,
                                    Ie =
                                      (Ie.sseConnectTime, Ie.preTokenStartTime),
                                    Xe =
                                      !!(
                                        (Xe =
                                          Y.getResponseHeader(
                                            "content-type",
                                          )) != null &&
                                        Xe.includes("text/event-stream")
                                      ) ||
                                      (de == null ? void 0 : de(Y.aegisUrl));
                                  Xe &&
                                    ((Ue = Date.now() - ge),
                                    (Ie = Date.now()),
                                    Ae(Y.sseConfig, {
                                      isSSE: Xe,
                                      sseConnectTime: Ue,
                                      preTokenStartTime: Ie,
                                    }));
                                  break;
                                case XMLHttpRequest.LOADING:
                                  if (!Y.sseConfig.isSSE) return;
                                  var Xe = Y.sseConfig,
                                    Ue = Xe.dataChunkCount,
                                    qe = Xe.firstChunkTime,
                                    lt = Xe.totalDataSize,
                                    Xe =
                                      ((Ie = Xe.preTokenStartTime),
                                      Y.sseConfig.firstChunkFlag),
                                    ct = Y.sseConfig.tokenIntervalArr,
                                    mt = ((Ue += 1), Date.now() - Ie);
                                  !Xe &&
                                    ((Xe = $n(
                                      (Y.responseText || "").slice(lt),
                                    )),
                                    typeof Le == "function"
                                      ? Le(Xe)
                                      : Ue === 0) &&
                                    ((qe = Date.now() - ge),
                                    Ae(Y.sseConfig, { firstChunkFlag: !0 })),
                                    (Ie = Date.now()),
                                    ct.push(mt),
                                    (lt =
                                      ((Xe = Y.responseText) == null
                                        ? void 0
                                        : Xe.length) || 0),
                                    Ae(Y.sseConfig, {
                                      dataChunkCount: Ue,
                                      firstChunkTime: qe,
                                      totalDataSize: lt,
                                      tokenIntervalArr: ct,
                                      preTokenStartTime: Ie,
                                    });
                              }
                            }),
                            S.addEventListener("loadend", function () {
                              var Y,
                                ge,
                                Le,
                                de = S.aegisUrl || "",
                                Ie =
                                  !(g != null && g.reportAbort) &&
                                  S.failType === "abort";
                              ot(de, _t(a, "hostUrl")) ||
                                Ie ||
                                ((Y = ""),
                                (S.failType || !S.status || 400 <= S.status) &&
                                  (Y = S.failType || "failed"),
                                (ge = Date.now() - b),
                                (Ie = S.getResponseHeader("content-type")),
                                (Le = h.getRequestType(a, Ie, de)),
                                setTimeout(function () {
                                  return _(h, void 0, void 0, function () {
                                    var Ue,
                                      qe,
                                      lt,
                                      Xe,
                                      ct,
                                      mt,
                                      At,
                                      It,
                                      $e,
                                      yt,
                                      Zt,
                                      pn,
                                      Nt,
                                      wt,
                                      qt,
                                      hn,
                                      $t;
                                    return D(this, function (Ot) {
                                      switch (Ot.label) {
                                        case 0:
                                          if (
                                            ((qe =
                                              this.getPerformanceEntryByUrl({
                                                url: de,
                                                duration: ge,
                                              })),
                                            (Ue = qe.performanceTiming),
                                            (qe = R(qe, ["performanceTiming"])),
                                            (lt = S.aegisMethod || "get"),
                                            (Xe = S.status),
                                            Le !== "fetch")
                                          )
                                            return [3, 5];
                                          (ct =
                                            (g == null
                                              ? void 0
                                              : g.reqHeaders) || []),
                                            (ct = qr(
                                              S.aegisXhrReqHeader,
                                              ct,
                                              "req",
                                            )),
                                            (It =
                                              (g == null
                                                ? void 0
                                                : g.resHeaders) || []),
                                            (Vt = S.getAllResponseHeaders()),
                                            (mt = Vt.split(
                                              `\r
`,
                                            ).reduce(function (gr, Sn) {
                                              return (
                                                (Sn = Sn.split(": ")),
                                                Sn[0] &&
                                                  Sn[1] &&
                                                  (gr[Sn[0]] = Sn[1]),
                                                gr
                                              );
                                            }, {})),
                                            (mt = qr(mt, It, "res")),
                                            (It = bt(S.aegisXhrReqHeader)),
                                            (At = It[0]),
                                            (It = It[1]),
                                            (yt =
                                              g == null ? void 0 : g.apiDetail),
                                            ($e = yt
                                              ? Je(
                                                  C,
                                                  g == null
                                                    ? void 0
                                                    : g.reqParamHandler,
                                                  { url: de },
                                                )
                                              : ""),
                                            (yt = yt
                                              ? Je(
                                                  S.response,
                                                  g == null
                                                    ? void 0
                                                    : g.resBodyHandler,
                                                  { url: de },
                                                )
                                              : ""),
                                            (Ot.label = 1);
                                        case 1:
                                          return (
                                            Ot.trys.push([1, 3, , 4]),
                                            [
                                              4,
                                              Ve(
                                                S.response,
                                                ($t = a.plugin) == null
                                                  ? void 0
                                                  : $t.api,
                                                { url: de, ctx: S, payload: C },
                                              ),
                                            ]
                                          );
                                        case 2:
                                          return (
                                            ($t = Ot.sent()),
                                            (Zt = $t.code),
                                            (pn = $t.isErr),
                                            (Nt = Y
                                              ? "AJAX_ERROR: request " + Y
                                              : sn(de, yt, Xe, Zt)),
                                            (wt = (g || {}).urlHandler),
                                            (wt =
                                              typeof wt == "function"
                                                ? wt(de, C)
                                                : de),
                                            (qt = S.sseConfig.isSSE),
                                            (hn = qt
                                              ? v(
                                                  v(
                                                    {},
                                                    ((Vt = b),
                                                    (dt = (it = S).sseConfig),
                                                    (Xt = dt.dataChunkCount),
                                                    (Wt = dt.firstChunkTime),
                                                    (Wn = dt.sseConnectTime),
                                                    (Gn = dt.totalDataSize),
                                                    (dt = dt.tokenIntervalArr),
                                                    (zn = Date.now()),
                                                    (br = zn - (Vt + Wn)),
                                                    (zn -= Vt),
                                                    (Vt = Un(dt)),
                                                    (dt = Vt.fluency),
                                                    (Vt = Vt.isStuck),
                                                    {
                                                      totalDuration: zn,
                                                      dataDuration: br,
                                                      connectTime: Wn,
                                                      firstChunkTime: Wt,
                                                      dataChunkCount: Xt,
                                                      totalDataSize:
                                                        ((zn =
                                                          it.responseText) ==
                                                        null
                                                          ? void 0
                                                          : zn.length) || Gn,
                                                      fluency: dt,
                                                      isStuck: Vt,
                                                    }),
                                                  ),
                                                  {
                                                    totalDuration: Ue.duration,
                                                  },
                                                )
                                              : {}),
                                            this.publish(
                                              v(
                                                v(
                                                  v(
                                                    v({}, Ue),
                                                    Yo({
                                                      isAjaxError: !!Y,
                                                      isRetcodeError: pn,
                                                    }),
                                                  ),
                                                  {
                                                    msg: Nt,
                                                    errorMsg:
                                                      Y || pn
                                                        ? de + "," + Zt
                                                        : void 0,
                                                    url: N(wt),
                                                    status: Xe,
                                                    method: lt,
                                                    param: $e,
                                                    data: yt,
                                                    reqHeaders: ct,
                                                    resHeaders: mt,
                                                    ret: Zt,
                                                    isErr: pn,
                                                    trace: At,
                                                    span: It,
                                                    nextHopProtocol:
                                                      qe.nextHopProtocol,
                                                    requestType: Le,
                                                    isSSE: qt,
                                                  },
                                                ),
                                                hn,
                                              ),
                                              c,
                                            ),
                                            [3, 4]
                                          );
                                        case 3:
                                          return Ot.sent(), [3, 4];
                                        case 4:
                                          return [3, 6];
                                        case 5:
                                          this.publish(
                                            v(v(v({}, Ue), qe), {
                                              status: Xe,
                                              url: N(de),
                                              type: me.ASSETS_SPEED,
                                            }),
                                            c,
                                          ),
                                            (Ot.label = 6);
                                        case 6:
                                          return (
                                            S.removeEventListener("abort", j),
                                            S.removeEventListener("error", K),
                                            S.removeEventListener("timeout", z),
                                            [2]
                                          );
                                      }
                                      var it, dt, Xt, Wt, Wn, Gn, zn, br, Vt;
                                    });
                                  });
                                }, 0));
                            }),
                            function () {
                              S.failType = "abort";
                            }),
                          K = function () {
                            S.failType = "error";
                          },
                          z = function () {
                            S.failType = "timeout";
                          };
                        S.addEventListener("abort", j),
                          S.addEventListener("error", K),
                          S.addEventListener("timeout", z);
                      },
                    };
                  (this.hackXHROptions = I),
                    (d = this.hackXHROptions),
                    (I = Object.getOwnPropertyDescriptor(
                      XMLHttpRequest.prototype,
                      "open",
                    )) != null &&
                      I.writable &&
                      !Or.find(function (S) {
                        return S.name === d.name;
                      }) &&
                      (Or.push(d), !So && window.XMLHttpRequest) &&
                      ((Pn = window.XMLHttpRequest.prototype.send),
                      (li = window.XMLHttpRequest.prototype.open),
                      (Zo = window.XMLHttpRequest.prototype.setRequestHeader),
                      (So = !0),
                      (window.XMLHttpRequest.prototype.open = function () {
                        this.aegisMethod = arguments[0];
                        var S = arguments[1];
                        if (
                          (ja.test(S) && (S = "" + location.origin + S),
                          (this.aegisUrl = S),
                          (this.aegisXhrStartTime = Date.now()),
                          this.sendByAegis)
                        )
                          je.isIE() || (this.timeout = 5e3);
                        else
                          for (var C = 0; C < Or.length; C++) {
                            var T = Or[C];
                            try {
                              typeof T.open == "function" && T.open(this);
                            } catch {}
                          }
                        return li.apply(this, arguments);
                      }),
                      (window.XMLHttpRequest.prototype.setRequestHeader =
                        function () {
                          var S,
                            C = arguments[0],
                            T = arguments[1];
                          if (
                            ((this.aegisXhrReqHeader =
                              (S = this.aegisXhrReqHeader) != null ? S : {}),
                            !(
                              d != null &&
                              d.traceRequestHeader &&
                              -1 <
                                [
                                  "traceparent",
                                  "b3",
                                  "sw8",
                                  "sentry-trace",
                                ].indexOf(C) &&
                              (this.aegisXhrReqHeader[C] || (arguments[1] = T),
                              this.aegisXhrReqHeader[C])
                            ))
                          )
                            return (
                              (this.aegisXhrReqHeader[C] = arguments[1]),
                              Zo.apply(this, arguments)
                            );
                        }),
                      (window.XMLHttpRequest.prototype.send = function () {
                        if (!this.sendByAegis)
                          for (var S = 0; S < Or.length; S++) {
                            var C = Or[S];
                            try {
                              typeof C.send == "function" &&
                                C.send(this, arguments[0]);
                            } catch {}
                          }
                        return Pn.apply(this, arguments);
                      }));
                },
                getPerformanceEntryByUrl: function (d) {
                  var c = d.url,
                    d = d.duration;
                  if (
                    typeof c == "string" &&
                    typeof performance.getEntriesByName == "function"
                  ) {
                    var h =
                      (h = performance.getEntriesByName(c)) == null
                        ? void 0
                        : h.pop();
                    if (h)
                      return {
                        msg: "api",
                        type: me.API,
                        isHttps: fe(c),
                        nextHopProtocol: h.nextHopProtocol || "",
                        urlQuery: N(c, !0),
                        transferSize: 0 < h.transferSize ? h.transferSize : -1,
                        performanceTiming: Ra(h),
                      };
                  }
                  return {
                    msg: "api",
                    type: me.API,
                    isHttps: fe(c),
                    nextHopProtocol: "",
                    urlQuery: N(c, !0),
                    performanceTiming: {
                      preHandleTime: et.number,
                      duration: Number(d.toFixed(2)),
                      domainLookup: et.number,
                      connectTime: et.number,
                      tlsTime: et.number,
                      tcpAndRequestGap: et.number,
                      requestTime: et.number,
                      responseTime: et.number,
                    },
                  };
                },
                destroy: function () {
                  var a, c, d;
                  (this.publish = function () {}),
                    this.hackXHROptions &&
                      ((a = this.hackXHROptions),
                      (d = Or.findIndex(function (h) {
                        return h.name === a.name;
                      })) !== -1) &&
                      Or.splice(d, 1),
                    this.hackFetchOptions &&
                      ((c = this.hackFetchOptions),
                      (d = hr.findIndex(function (h) {
                        return h.name === c.name;
                      })) !== -1) &&
                      hr.splice(d, 1),
                    (this.override = !1);
                },
              })),
            es =
              ((($r = yo = yo || {}).INITIAL_LOAD = "initial_load"),
              ($r.ROUTE_CHANGE = "route_change"),
              (($r = pr = pr || {}).SELF_GENETATE = "self_generate"),
              ($r.SERVER_INJECT = "server_inject"),
              ($r.URL_QUERY = "url_query"),
              ($r.LOCAL_STORAGE = "local_storage"),
              ($r.COOKIES = "cookies"),
              function () {});
          function Eo(a, c, d) {
            var h,
              g,
              I,
              S,
              C,
              T = d.before,
              U = d.after;
            return (
              (S = (h = a)[(g = c)]),
              (I = S),
              (C = function () {
                for (var j, K = [], z = 0; z < arguments.length; z++)
                  K[z] = arguments[z];
                return (
                  T && T.apply(this, K),
                  typeof I == "function" && (j = I.apply(this, K)),
                  U && U.apply(this, [j]),
                  j
                );
              }),
              (h[g] = b),
              {
                stop: function () {
                  h[g] === b ? (h[g] = S) : (C = S);
                },
              }
            );
            function b() {
              for (var j = [], K = 0; K < arguments.length; K++)
                j[K] = arguments[K];
              if (typeof C == "function") return C.apply(this, j);
            }
          }
          function pl(a) {
            return (function (c) {
              for (var d = [], h = 1; h < arguments.length; h++)
                d[h - 1] = arguments[h];
              return (
                d.forEach(function (g) {
                  for (var I in g)
                    Object.prototype.hasOwnProperty.call(g, I) && (c[I] = g[I]);
                }),
                c
              );
            })({}, a);
          }
          function hl(a) {
            return [
              "ancestorOrigins",
              "href",
              "origin",
              "protocol",
              "host",
              "hostname",
              "port",
              "pathname",
              "search",
              "hash",
              "assign",
              "reload",
              "replace",
              "toString",
            ].reduce(function (c, d) {
              return (c[d] = a[d]), c;
            }, {});
          }
          function fi() {
            return new Date().getTime();
          }
          function Hs(a) {
            var c;
            return a
              ? (c = a == null ? void 0 : a.indexOf("?")) < 0
                ? a
                : a == null
                  ? void 0
                  : a.slice(0, c)
              : "";
          }
          function gl(a, c) {
            function d(b, j) {
              for (
                var K = b, z = 0;
                z <= 10 && K && !["BODY", "HTML", "HEAD"].includes(K.nodeName);

              ) {
                for (var Y = 0, ge = j; Y < ge.length; Y++) {
                  var Le = (0, ge[Y])(K);
                  if (typeof Le == "string" && Le.trim())
                    return h(Le.trim().replace(/\s+/g, " "));
                }
                if (K.nodeName === "FORM") break;
                (K = K.parentElement), (z += 1);
              }
              return "";
            }
            function h(b) {
              return 100 < b.length
                ? (K === void 0 && (K = ""),
                  (z =
                    55296 <= (z = (j = b).charCodeAt(99)) && z <= 56319
                      ? 101
                      : 100),
                  (j.length <= z
                    ? j
                    : "" + (j == null ? void 0 : j.slice(0, z)) + K) + " [...]")
                : b;
              var j, K, z;
            }
            var g,
              I = [
                function (b) {
                  var j;
                  if (U()) {
                    if ("labels" in b && b.labels && 0 < b.labels.length)
                      return T(b.labels[0]);
                  } else if (b.id)
                    return (
                      (j =
                        b.ownerDocument &&
                        (function (K) {
                          for (var z = 0; z < K.length; z += 1) {
                            var Y = K[z];
                            if (Y.htmlFor === b.id) return Y;
                          }
                        })(b.ownerDocument.querySelectorAll("label"))) && T(j)
                    );
                  return "";
                },
                function (b) {
                  if (b.nodeName === "INPUT") {
                    var j = b.getAttribute("type");
                    if (["button", "submit", "reset"].includes(j || ""))
                      return b.value;
                  }
                  return "";
                },
                function (b) {
                  return ["BUTTON", "LABEL"].includes(b.nodeName) ||
                    b.getAttribute("role") === "button"
                    ? T(b)
                    : "";
                },
                function (b) {
                  return b.getAttribute("aria-label");
                },
                function (b) {
                  var j = b.getAttribute("aria-labelledby");
                  return j
                    ? j
                        .split(/\s+/)
                        .map(function (K) {
                          return C(b, K);
                        })
                        .filter(function (K) {
                          return !!K;
                        })
                        .map(function (K) {
                          return T(K);
                        })
                        .join(" ")
                    : "";
                },
                function (b) {
                  return b.getAttribute("alt");
                },
                function (b) {
                  return b.getAttribute("name");
                },
                function (b) {
                  return b.getAttribute("title");
                },
                function (b) {
                  return b.getAttribute("placeholder");
                },
                function (b) {
                  return "options" in b && 0 < b.options.length
                    ? T(b.options[0])
                    : "";
                },
              ],
              S = [
                function (b) {
                  return T(b);
                },
              ],
              C = function (b, j) {
                return b.ownerDocument
                  ? b.ownerDocument.getElementById(j)
                  : null;
              },
              T = function (b) {
                if (!b.isContentEditable)
                  return "innerText" in b ? b.innerText : b.textContent;
              },
              U = function () {
                return (g =
                  g === void 0 ? "labels" in HTMLInputElement.prototype : g);
              };
            return (
              (function (b, j) {
                var K;
                if ("closest" in HTMLElement.prototype)
                  K = b.closest("[" + j + "]");
                else
                  for (var z = b; z; ) {
                    if (z.hasAttribute(j)) {
                      K = z;
                      break;
                    }
                    z = (function (Y) {
                      if (Y.parentElement) return Y.parentElement;
                      for (; Y.parentNode; ) {
                        if (Y.parentNode.nodeType === Node.ELEMENT_NODE)
                          return Y.parentNode;
                        Y = Y.parentNode;
                      }
                      return null;
                    })(z);
                  }
                if (K)
                  return (
                    (b = K.getAttribute(j)), h(b.trim().replace(/\s+/g, " "))
                  );
              })(a, c || "data-aegis-action-name") ||
              d(a, I) ||
              d(a, S) ||
              ""
            );
          }
          function ml(a) {
            var c = a.onStart,
              d = a.onChange,
              h = qo() ? hl : pl;
            function g() {
              var U, b, j, K;
              S.href !== window.location.href &&
                ((U = h(window.location)),
                (j = U),
                ((b = S).pathname === j.pathname &&
                  ((K = j.hash),
                  document.getElementById(
                    K == null ? void 0 : K.substring(1),
                  ) || Hs(j.hash) === Hs(b.hash))) ||
                  (d(S, U), (S = h(U))));
            }
            c();
            var I,
              S = h(window.location),
              C =
                ((I = g),
                window.addEventListener("hashchange", I),
                function () {
                  window.removeEventListener("hashchange", I);
                }),
              T = (function (U) {
                var b,
                  j,
                  K = es,
                  z = es;
                try {
                  (b = Object.getOwnPropertyDescriptor(
                    History.prototype,
                    "pushState",
                  )) != null &&
                    b.writable &&
                    (K = Eo(history, "pushState", { after: U }).stop),
                    (j = Object.getOwnPropertyDescriptor(
                      History.prototype,
                      "replaceState",
                    )) != null &&
                      j.writable &&
                      (z = Eo(history, "replaceState", { after: U }).stop);
                } catch {}
                return {
                  stop: function () {
                    K(), z(), window.removeEventListener("popstate", U);
                  },
                };
              })(g).stop;
            return function () {
              C(), T();
            };
          }
          (rs.prototype.subscribe = function (a) {
            var c = this;
            return (
              !this.observers.length &&
                this.onFirstSubscribe &&
                (this.onLastUnsubscribe =
                  this.onFirstSubscribe(this) || void 0),
              this.observers.push(a),
              {
                unsubscribe: function () {
                  (c.observers = c.observers.filter(function (d) {
                    return a !== d;
                  })),
                    !c.observers.length &&
                      c.onLastUnsubscribe &&
                      c.onLastUnsubscribe();
                },
              }
            );
          }),
            (rs.prototype.notify = function (a) {
              this.observers.forEach(function (c) {
                return c(a);
              });
            });
          var Mi,
            ts = rs,
            ns = {
              sessionId: xt.generateTraceId(),
              sessionFrom: pr.SELF_GENETATE,
            },
            $r = new Tt({
              name: Z.SESSION,
              onNewAegis: function (a) {
                var c,
                  d,
                  h,
                  g,
                  I,
                  S,
                  C,
                  T = this,
                  U = pr.SELF_GENETATE,
                  b =
                    (a.event.on(Qe.sampleChange, function () {
                      Math.random() > a.sampleMap[Z.SESSION] &&
                        T.stopSessionPlugin();
                    }),
                    function (de, Ie) {
                      T.publishSessionDataWithAegis(
                        {
                          session_type: de,
                          is_active: Ie,
                          session_from: U,
                          link_session_id: c == null ? void 0 : c.linkSessionId,
                          link_span_id: c == null ? void 0 : c.linkSpanId,
                        },
                        a,
                      );
                    }),
                  j = (function (de) {
                    function Ie(yt) {
                      yt === void 0 && (yt = !1),
                        (mt = fi()),
                        (At = fi() + 9e5),
                        Xe(yt),
                        (lt = setInterval(qe, 1e3));
                    }
                    function Ue() {
                      It() ? (At = fi() + 9e5) : Ie(!0);
                    }
                    function qe() {
                      It() || (ct(), clearInterval(lt));
                    }
                    var lt,
                      Xe = de.onCreateOrRebuild,
                      ct = de.onExpire,
                      mt = fi(),
                      At = fi() + 9e5,
                      It = function () {
                        return fi() - Number(mt) < 144e5 && fi() < Number(At);
                      };
                    Ie();
                    var $e;
                    return (
                      ($e = [
                        "click",
                        "touchstart",
                        "keydown",
                        "scroll",
                      ]).forEach(function (yt) {
                        return window.addEventListener.call(window, yt, Ue, !0);
                      }),
                      function () {
                        clearInterval(lt),
                          $e.forEach(function (yt) {
                            return window.removeEventListener.call(
                              window,
                              yt,
                              Ue,
                            );
                          });
                      }
                    );
                  })({
                    onCreateOrRebuild: function (de) {
                      var qe = (function (lt, Xe, ct) {
                          if (!lt) {
                            var mt,
                              $e = (function () {
                                for (
                                  var wt =
                                      document.getElementsByTagName("meta"),
                                    qt = 0;
                                  qt < wt.length;
                                  qt++
                                ) {
                                  var hn = wt[qt];
                                  if (hn.getAttribute("name") === "traceparent")
                                    return hn;
                                }
                                return null;
                              })(),
                              $e = ($e == null ? void 0 : $e.content) || "";
                            if ($e)
                              return (
                                ($e = {
                                  sessionId: $e.split("-")[1],
                                  sessionFrom: pr.SERVER_INJECT,
                                }),
                                ct(JSON.stringify($e)),
                                $e
                              );
                            if (
                              (($e = (
                                ($e =
                                  ($e = window.location) == null
                                    ? void 0
                                    : $e.search) == null
                                  ? void 0
                                  : $e.substring(1)
                              ).split("&")),
                              (mt = ""),
                              $e.some(function (wt) {
                                return (
                                  (wt = wt.split("=")),
                                  wt[0] === "aegis_session_id" &&
                                    ((mt = decodeURIComponent(wt[1])), !0)
                                );
                              }),
                              mt)
                            )
                              return (
                                ($e = {
                                  sessionId: mt,
                                  sessionFrom: pr.URL_QUERY,
                                }),
                                ct(JSON.stringify($e)),
                                $e
                              );
                            var $e = {
                                sessionId: or.get("aegis_session_id"),
                                linkSessionId: or.get("link_session_id"),
                                linkSpanId: or.get("link_span_id"),
                              },
                              At = $e.sessionId,
                              It = $e.linkSessionId,
                              $e = $e.linkSpanId;
                            if (
                              (ct(
                                "[cookie] " +
                                  JSON.stringify({
                                    sessionId: At,
                                    linkSessionId: It,
                                    linkSpanId: $e,
                                  }),
                              ),
                              At)
                            )
                              return (
                                (At = {
                                  sessionId: At,
                                  sessionFrom: pr.COOKIES,
                                  linkSessionId: It,
                                  linkSpanId: $e,
                                }),
                                ct(JSON.stringify(At)),
                                or.remove("aegis_session_id"),
                                or.remove("link_session_id"),
                                or.remove("link_span_id"),
                                At
                              );
                            try {
                              var yt = localStorage.getItem("aegis_session_id");
                              if (yt !== null) {
                                var Zt,
                                  pn = JSON.parse(yt),
                                  Nt = pn.sessionId;
                                if (Xe !== pn.id)
                                  return (
                                    (Zt = {
                                      sessionId: Nt,
                                      sessionFrom: pr.LOCAL_STORAGE,
                                    }),
                                    ct(JSON.stringify(Zt)),
                                    Zt
                                  );
                              }
                            } catch {}
                          }
                          return ct(JSON.stringify(ns)), ns;
                        })(de, a.config.id, function (lt) {
                          a.logger.info("session from: " + lt);
                        }),
                        Ie = qe.sessionId,
                        Ue = qe.sessionFrom,
                        qe = R(qe, ["sessionId", "sessionFrom"]);
                      (U = Ue), (c = qe);
                      try {
                        localStorage.setItem(
                          "aegis_session_id",
                          JSON.stringify({ id: a.config.id, sessionId: Ie }),
                        );
                      } catch {}
                      a.updateSnapshootInfo({ session: { id: Ie } }),
                        b("session", !0),
                        de &&
                          (a.updateSnapshootInfo({
                            view: {
                              id: xt.generateSpanId(),
                              loading_type: yo.INITIAL_LOAD,
                              view_name: document.title,
                              view_url: window.location.href,
                              referrer: "",
                            },
                          }),
                          b("view", !0));
                    },
                    onExpire: function () {
                      try {
                        localStorage.removeItem("aegis_session_id");
                      } catch {}
                      d(),
                        a.updateSnapshootInfo({
                          session: void 0,
                          view: void 0,
                          action: void 0,
                        });
                    },
                  }),
                  K = ml({
                    onStart: function () {
                      a.updateSnapshootInfo({
                        view: {
                          id: xt.generateSpanId(),
                          loading_type: yo.INITIAL_LOAD,
                          view_name: document.title,
                          view_url: window.location.href,
                          referrer: "",
                        },
                      }),
                        b("view", !0);
                    },
                    onChange: function (de, Ie) {
                      var Ue;
                      (Ue = a.snapshootInfo) != null &&
                        Ue.action &&
                        (b("action", !1),
                        a.updateSnapshootInfo({ action: void 0 })),
                        b("view", !1),
                        a.updateSnapshootInfo({
                          view: {
                            id: xt.generateSpanId(),
                            loading_type: yo.ROUTE_CHANGE,
                            view_name: document.title,
                            view_url: Ie.href,
                            referer: de.href,
                          },
                        }),
                        b("view", !0);
                    },
                  }),
                  z = ((z = a.config.plugin) == null ? void 0 : z.session)
                    .actionTypes,
                  Y = ((Y = a.config.plugin) == null ? void 0 : Y.session)
                    .customActionNameAttribute,
                  ge = function () {};
                function Le(de) {
                  var Ie, Ue, qe, lt, Xe, ct;
                  function mt() {
                    qe ||
                      ((qe = !0),
                      Ie(),
                      clearTimeout(Xe),
                      clearTimeout(ct),
                      lt == null) ||
                      lt();
                  }
                  I() &&
                    ((de = {
                      action_type: de.type,
                      action_name: gl(de.target, g),
                      action_target_name:
                        (de =
                          (de = de.target) == null ? void 0 : de.nodeName) ==
                        null
                          ? void 0
                          : de.toLowerCase(),
                    }),
                    S(de),
                    (Ie = C),
                    (qe = !1),
                    (lt = (function (At) {
                      function It() {
                        At({ isBusy: 0 < Zt });
                      }
                      var $e,
                        yt,
                        Zt = 0,
                        pn = new ts(function ($t) {
                          var Ot;
                          if (MutationObserver)
                            return (
                              (Ot = new MutationObserver(function () {
                                return $t.notify();
                              })).observe(document, {
                                attributes: !0,
                                characterData: !0,
                                childList: !0,
                                subtree: !0,
                              }),
                              function () {
                                return Ot.disconnect();
                              }
                            );
                        }),
                        Nt = new ts(function ($t) {
                          var Ot, it, dt;
                          return typeof (window == null
                            ? void 0
                            : window.PerformanceObserver) == "function"
                            ? ((Ot = new window.PerformanceObserver(
                                function () {
                                  $t.notify();
                                },
                              )).observe({ entryTypes: ["resource"] }),
                              function () {
                                Ot.disconnect();
                              })
                            : io()
                              ? ((it =
                                  performance.getEntriesByType(
                                    "resource",
                                  ).length),
                                (dt = setInterval(function () {
                                  var Xt =
                                    performance.getEntriesByType("resource");
                                  it <= Xt.length && $t.notify(),
                                    (it = Xt.length);
                                }, 100)),
                                function () {
                                  clearInterval(dt), (it = 0);
                                })
                              : es;
                        }),
                        wt = function ($t) {
                          var Ot = 1,
                            it = new ts(function (Xt) {
                              var Wt = Eo(XMLHttpRequest.prototype, "send", {
                                before: function () {
                                  (Ot += 1),
                                    (this.requestIndex = Ot),
                                    Xt.notify({
                                      state: "start",
                                      requestIndex: Ot,
                                    });
                                },
                                after: function () {
                                  var Wn = this,
                                    Gn = function () {
                                      Wn.removeEventListener("loadend", Gn),
                                        Xt.notify({
                                          state: "end",
                                          requestIndex: Wn.requestIndex,
                                        });
                                    };
                                  this.addEventListener("loadend", Gn);
                                },
                              }).stop;
                              return function () {
                                return Wt();
                              };
                            }).subscribe($t),
                            dt = new ts(function (Xt) {
                              var Wt = Eo(window, "fetch", {
                                before: function () {
                                  (Ot += 1),
                                    Xt.notify({
                                      state: "start",
                                      requestIndex: Ot,
                                    });
                                },
                                after: function (Wn) {
                                  Wn.finally(function () {
                                    Xt.notify({
                                      state: "end",
                                      requestIndex: Ot,
                                    });
                                  });
                                },
                              }).stop;
                              return function () {
                                return Wt();
                              };
                            }).subscribe($t);
                          return {
                            unsubscribe: function () {
                              it.unsubscribe(), dt.unsubscribe();
                            },
                          };
                        },
                        qt = [
                          pn.subscribe(It),
                          Nt.subscribe(It),
                          wt(function (it) {
                            var Ot = it.state,
                              it = it.requestIndex;
                            Ot === "start"
                              ? (yt === void 0 && (yt = it), (Zt += 1), It())
                              : Ot !== "end" ||
                                yt === void 0 ||
                                it < yt ||
                                (--Zt, It());
                          }),
                        ],
                        hn = es;
                      try {
                        ($e = Object.getOwnPropertyDescriptor(
                          window,
                          "open",
                        )) != null &&
                          $e.writable &&
                          (hn = Eo(window, "open", { before: It }).stop);
                      } catch {}
                      return {
                        stop: function () {
                          hn(),
                            qt.forEach(function ($t) {
                              return $t.unsubscribe();
                            });
                        },
                      };
                    })(function (At) {
                      clearTimeout(Xe),
                        clearTimeout(Ue),
                        At.isBusy ||
                          (Ue = setTimeout(function () {
                            qe ||
                              ((qe = !0),
                              Ie(),
                              clearTimeout(Xe),
                              clearTimeout(ct),
                              lt == null) ||
                              lt();
                          }, 100));
                    }).stop),
                    (Xe = setTimeout(mt, 100)),
                    (ct = setTimeout(mt, 1e4)));
                }
                (z = z === void 0 ? ["click"] : z) !== !1 &&
                  z.length !== 0 &&
                  ((h = (z = { actionTypes: z, customActionNameAttribute: Y })
                    .actionTypes),
                  (g = z.customActionNameAttribute),
                  (I = (Y = {
                    onBeforeStart: function () {
                      var de;
                      return !((de = a.snapshootInfo) != null && de.action);
                    },
                    onStart: function (de) {
                      a.updateSnapshootInfo({
                        action: v(
                          { id: xt.generateSpanId(), timestamp: Date.now() },
                          de,
                        ),
                      }),
                        b("action", !0);
                    },
                    onEnd: function () {
                      var de;
                      (de = a.snapshootInfo) != null &&
                        de.action &&
                        (b("action", !1),
                        a.updateSnapshootInfo({ action: void 0 }));
                    },
                  }).onBeforeStart),
                  (S = Y.onStart),
                  (C = Y.onEnd),
                  h.forEach(function (de) {
                    window.addEventListener.call(window, de, Le, !0);
                  }),
                  (ge = function () {
                    h.forEach(function (de) {
                      window.removeEventListener.call(window, de, Le);
                    });
                  }),
                  (d = function () {
                    var de = a.snapshootInfo,
                      Ie = de.session,
                      Ue = de.view;
                    de.action && b("action", !1),
                      Ue && b("view", !1),
                      Ie && b("session", !1);
                  }),
                  window.addEventListener.call(
                    window,
                    "beforeunload",
                    function () {
                      (a.sendNow = !0), d();
                    },
                    !0,
                  ),
                  (this.stopSessionPlugin = function () {
                    a.updateSnapshootInfo({
                      session: void 0,
                      view: void 0,
                      action: void 0,
                    }),
                      j(),
                      K(),
                      ge();
                  }));
              },
              publishSessionDataWithAegis: function (a, c) {
                this.publish(
                  v(v({}, a), { msg: a.session_type, type: me.SESSION }),
                  c,
                );
              },
              destroy: function () {
                var a;
                (a = this.stopSessionPlugin) != null && a.call(this);
              },
            }),
            qs = {
              containers: ["body", "html", "#app", "#root"],
              ignoreContainers: [],
              detectStartPosition: { x: 0, y: 0 },
              emptyElementsPercent: 70,
              sameElementsPercent: 70,
              debounceDuration: 1500,
              everySideSampleNumber: 9,
              disableSameElementsCheck: !1,
              ignoreElesWhenDomChange: [],
              reDetectInterval: 1500,
              samePointDepth: 5,
            },
            vl = ["canvas", "img", "svg", "iframe"];
          function rs(a) {
            (this.onFirstSubscribe = a), (this.observers = []);
          }
          ((di = Mi = Mi || {})[(di.UNKNOWN = 0)] = "UNKNOWN"),
            (di[(di.ERROR = 1)] = "ERROR"),
            (di[(di.DOM_CHANGE = 2)] = "DOM_CHANGE");
          function is(a, c, d) {
            var h = (a = a.map(function (g) {
              return Ba(g);
            }))[0];
            return h
              ? ((c = c.some(function (g) {
                  return h.includes(g);
                })),
                (d = d.some(function (g) {
                  return h.includes(g);
                })),
                { isWhitePoint: c && d, selectorPointers: a })
              : { isWhitePoint: !1, selectorPointers: a };
          }
          function Ua(a) {
            try {
              var c = a.config.plugin.blankScreen;
              return c === !0 ? qs : Ae(qs, c);
            } catch {
              return qs;
            }
          }
          function os(a, c) {
            function d(g) {
              var I = g[0];
              return I &&
                I.shadowRoot !== null &&
                (I =
                  ((I = I == null ? void 0 : I.shadowRoot) == null
                    ? void 0
                    : I.elementsFromPoint(a, c)) || []).length > g.length
                ? d(I || [])
                : g;
            }
            var h = document.elementsFromPoint(a, c);
            return d(h);
          }
          var Ba = function (a) {
              var c = a.nodeName.toLowerCase();
              return a.id
                ? c + "#" + a.id
                : a.className && typeof a.className == "string"
                  ? c +
                    "." +
                    a.className
                      .split(" ")
                      .filter(function (d) {
                        return !!d;
                      })
                      .join(".")
                  : c;
            },
            di = new Tt({
              name: Z.BLANK_SCREEN,
              onNewAegis: function (a) {
                var c,
                  d,
                  h,
                  g,
                  I,
                  S,
                  C,
                  T,
                  U,
                  b,
                  j,
                  K,
                  z,
                  Y,
                  ge,
                  Le,
                  de,
                  Ie,
                  Ue,
                  qe,
                  lt,
                  Xe,
                  ct,
                  mt,
                  At,
                  It,
                  $e,
                  yt,
                  Zt,
                  pn,
                  Nt,
                  wt,
                  qt,
                  hn,
                  $t,
                  Ot = this;
                document != null &&
                  document.elementFromPoint &&
                  ((Y = Ua(a)),
                  (h = Y.everySideSampleNumber),
                  (g = Y.sameElementsPercent),
                  (I = Y.emptyElementsPercent),
                  (S = Y.containers),
                  (C = Y.ignoreContainers),
                  (T = Y.debounceDuration),
                  (U = Y.detectStartPosition),
                  (b = Y.ignoreElesWhenDomChange),
                  (j = Y.reDetectInterval),
                  (K = Y.disableSameElementsCheck),
                  (z = Y.samePointDepth),
                  (Y = 4 * h - 3),
                  (ge = Math.floor((Y * I) / 100)),
                  (Le = Math.floor((Y * g) / 100)),
                  (de = Mi.UNKNOWN),
                  (Ue = null),
                  (qe = ""),
                  (lt = Ie = !1),
                  (Xe = function () {
                    return _(Ot, void 0, void 0, function () {
                      var it,
                        dt,
                        Xt,
                        Wt,
                        Wn,
                        Gn,
                        zn,
                        br,
                        Vt,
                        gr,
                        Sn,
                        _o,
                        pi,
                        Tn,
                        gn,
                        Vr,
                        $s,
                        ss,
                        as,
                        Rr,
                        Qn,
                        ji,
                        yl = this;
                      return D(this, function (Vs) {
                        switch (Vs.label) {
                          case 0:
                            if (
                              ((it = window.innerHeight),
                              (dt = window.innerWidth),
                              (Xt = U.x),
                              (Wt = U.y),
                              dt <= Xt || it <= Wt)
                            )
                              return [2];
                            for (
                              Wn = Xt + (dt - Xt) / 2,
                                Gn = Wt + (it - Wt) / 2,
                                zn = [],
                                br = h + 1,
                                Vt = 0,
                                gr = Date.now(),
                                Sn = 1;
                              Sn < br;
                              Sn++
                            )
                              (gn = Wt + ((it - Wt) * Sn) / br),
                                (Tn = os(
                                  (Vr = Xt + ((dt - Xt) * Sn) / br),
                                  Gn,
                                )),
                                (_o = os(Wn, gn)),
                                (pi = os(Vr, gn)),
                                (Vr = os(Vr, it - gn)),
                                (gn = is(Tn, S, C)),
                                (Tn = gn.isWhitePoint),
                                (gn = gn.selectorPointers),
                                Tn && (Vt += 1),
                                zn.push(gn),
                                Sn !== br / 2 &&
                                  ((Tn = is(_o, S, C)),
                                  (gn = Tn.isWhitePoint),
                                  (_o = Tn.selectorPointers),
                                  gn && (Vt += 1),
                                  (Tn = is(pi, S, C)),
                                  (gn = Tn.isWhitePoint),
                                  (pi = Tn.selectorPointers),
                                  gn && (Vt += 1),
                                  (Tn = is(Vr, S, C)),
                                  (gn = Tn.isWhitePoint),
                                  (Vr = Tn.selectorPointers),
                                  gn && (Vt += 1),
                                  zn.push(_o, pi, Vr));
                            return (
                              ($s = ge <= Vt),
                              (ss = !1),
                              (as = {
                                samePointerMap: {},
                                maximumSamePointer: {},
                              }),
                              K ||
                                ((Qn = zn.map(function (en) {
                                  return en.slice(0, z);
                                })),
                                (Gr = Qn.map(function (en) {
                                  return en.join(" < ");
                                }).reduce(function (en, St) {
                                  return (en[St] = en[St] ? en[St] + 1 : 1), en;
                                }, {})),
                                (ko = Object.keys(Gr)
                                  .map(function (en) {
                                    return [en, Gr[en]];
                                  })
                                  .sort(function (en, St) {
                                    return St[1] - en[1];
                                  })[0]),
                                (Gs = ko[0]),
                                (ko = ko[1]),
                                (as = {
                                  samePointerMap: (Qn = {
                                    samePointerMap: Gr,
                                    maximumSamePointerClass: Gs,
                                    maximumSamePointerCounter: ko,
                                  }).samePointerMap,
                                  maximumSamePointer:
                                    (((ji = {})[
                                      (Rr = Qn.maximumSamePointerClass)
                                    ] = Qn =
                                      Qn.maximumSamePointerCounter),
                                    ji),
                                }),
                                (ji = vl.some(function (en) {
                                  return Rr.startsWith(en);
                                })),
                                (ss = Le <= Qn && !ji)),
                              $s || ss
                                ? [3, 1]
                                : ((Ie = !1), (Ue = null), [3, 4])
                            );
                          case 1:
                            return Ie
                              ? (qe !== a.snapshootInfo.from &&
                                  Ue &&
                                  (this.publish({
                                    level: te.BLANK_SCREEN,
                                    type: me.PV,
                                  }),
                                  (qe = a.snapshootInfo.from)),
                                this.publish(
                                  Ae(
                                    Ue,
                                    c
                                      ? {
                                          linkLogId:
                                            c == null ? void 0 : c.aegisv2_goto,
                                          linkLogType:
                                            c == null ? void 0 : c.type,
                                          linkLogLevel:
                                            c == null ? void 0 : c.level,
                                          linkErrorMsg:
                                            c == null ? void 0 : c.errorMsg,
                                        }
                                      : {},
                                  ),
                                  a,
                                ),
                                [
                                  4,
                                  a.setTempConfig(
                                    { id: "SDK-88b1f242f91b60885f0c" },
                                    function () {
                                      return a.reportTime(
                                        "白屏检测总耗时",
                                        Date.now() - gr,
                                      );
                                    },
                                  ),
                                ])
                              : [3, 3];
                          case 2:
                            return Vs.sent(), (Ie = !1), (Ue = null), [3, 4];
                          case 3:
                            (Qn = Date.now() - a.timeOrigin - T),
                              (Ue = v(
                                v(
                                  {
                                    msg: "blank_screen",
                                    level: te.BLANK_SCREEN,
                                    type: me.NORMAL,
                                    triggerTime: Qn < 0 ? 0 : Qn,
                                    whitePointCount: Vt,
                                  },
                                  as,
                                ),
                                c
                                  ? {
                                      linkLogId:
                                        c == null ? void 0 : c.aegisv2_goto,
                                      linkLogType: c == null ? void 0 : c.type,
                                      linkLogLevel:
                                        c == null ? void 0 : c.level,
                                      linkErrorMsg:
                                        c == null ? void 0 : c.errorMsg,
                                    }
                                  : {},
                              )),
                              (Ie = !0),
                              (d = setTimeout(function () {
                                return _(yl, void 0, void 0, function () {
                                  return D(this, function (en) {
                                    switch (en.label) {
                                      case 0:
                                        return [4, ct()];
                                      case 1:
                                        return en.sent(), [2];
                                    }
                                  });
                                });
                              }, j)),
                              (Vs.label = 4);
                          case 4:
                            return [2];
                        }
                        var Gr, ko, Gs;
                      });
                    });
                  }),
                  (ct = function () {
                    return _(Ot, void 0, void 0, function () {
                      var it = this;
                      return D(this, function (dt) {
                        switch (dt.label) {
                          case 0:
                            return "requestIdleCallback" in window
                              ? (window.requestIdleCallback(function (Xt) {
                                  return _(it, void 0, void 0, function () {
                                    return D(this, function (Wt) {
                                      switch (Wt.label) {
                                        case 0:
                                          return 0 < Xt.timeRemaining()
                                            ? [4, Xe()]
                                            : [3, 2];
                                        case 1:
                                          Wt.sent(), (Wt.label = 2);
                                        case 2:
                                          return [2];
                                      }
                                    });
                                  });
                                }),
                                [3, 3])
                              : [3, 1];
                          case 1:
                            return [4, Xe()];
                          case 2:
                            dt.sent(), (dt.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }),
                  (mt = function () {
                    var it;
                    Ie ||
                      (de === Mi.ERROR && !c) ||
                      ((de = c ? Mi.ERROR : Mi.DOM_CHANGE),
                      clearTimeout(d),
                      (it = Ua(a).debounceDuration),
                      (d = setTimeout(function () {
                        return _(Ot, void 0, void 0, function () {
                          return D(this, function (dt) {
                            switch (dt.label) {
                              case 0:
                                return clearTimeout(d), [4, ct()];
                              case 1:
                                return dt.sent(), [2];
                            }
                          });
                        });
                      }, it)));
                  }),
                  a.event.on(
                    Qe.errorOccurred,
                    (At = function (it) {
                      (it = it.filter(function (dt) {
                        return dt.level !== te.BLANK_SCREEN;
                      })),
                        0 < it.length && ((c = it[it.length - 1]), mt());
                    }),
                  ),
                  (It = null),
                  window.MutationObserver &&
                    ((wt = qt = null),
                    ($e =
                      window.cancelAnimationFrame ||
                      function (it) {
                        clearTimeout(it);
                      }),
                    (yt =
                      window.requestAnimationFrame ||
                      function (it) {
                        return setTimeout(it, 1e3 / 60);
                      }),
                    (Zt = function () {
                      (It = new MutationObserver(function (it) {
                        var dt = b.includes(Ba(it[0].target));
                        (it.length === 1 && dt) || mt();
                      })).observe(document.body, {
                        childList: !0,
                        subtree: !0,
                      });
                    }),
                    (pn = function () {
                      qt && (clearTimeout(qt), (qt = null)),
                        wt && ($e(wt), (wt = null));
                    }),
                    document.body
                      ? Zt()
                      : ((wt = yt(
                          (Nt = function () {
                            document.body ? (pn(), Zt()) : (wt = yt(Nt));
                          }),
                        )),
                        (qt = setTimeout(function () {
                          pn();
                        }, 1e4)))),
                  (hn = function () {
                    lt && ((lt = !0), Ie) && (clearTimeout(d), Xe());
                  }),
                  ($t = function () {
                    document.visibilityState === "visible" && (lt = !1),
                      document.visibilityState === "hidden" && hn();
                  }),
                  window.addEventListener("pagehide", hn),
                  window.addEventListener("beforeunload", hn),
                  window.addEventListener("visibilitychange", $t),
                  (this.destroyBlanckScreenDetect = function () {
                    window.removeEventListener("pagehide", hn),
                      window.removeEventListener("beforeunload", hn),
                      window.removeEventListener("visibilitychange", $t),
                      a.event.remove(Qe.errorOccurred, At),
                      It != null && It.disconnect();
                  }));
              },
              destroy: function () {
                this.destroyBlanckScreenDetect();
              },
            }),
            Tt =
              (new Tt({ name: Z.WEBSOCKET }),
              new Tt({
                name: Z.WEBSOCKET,
                init: function (a) {
                  var c = this,
                    d = {
                      key: a.config.id + "-" + this.name,
                      onErr: function (h) {
                        a.config.websocketHack || c.publishWsErrorLog(h, a);
                      },
                      sendErr: function (h) {
                        a.config.websocketHack || c.publishWsErrorLog(h, a);
                      },
                      sendConnectInfo: function (h) {
                        c.publish(
                          v(v({}, h), { level: te.INFO, type: me.WEBSOCKET }),
                          a,
                        );
                      },
                    };
                  Ps(d);
                },
                publishWsErrorLog: function (g, c) {
                  var d = g.connectUrl,
                    h = g.msg,
                    g = g.readyState;
                  this.publish(
                    {
                      msg:
                        `WEBSOCKET_ERROR:
              connect: ` +
                        d +
                        `
              readyState: ` +
                        g +
                        `
              msg: ` +
                        h,
                      level: te.WEBSOCKET_ERROR,
                      type: me.WEBSOCKET,
                    },
                    c,
                  );
                },
                destroy: function () {
                  (this.publishErrorLog = function () {}),
                    this.hackWebsocketConfig && Ur(this.hackWebsocketConfig);
                },
              }));
          return (
            ne.use($r),
            ne.use($o),
            ne.use(Ws),
            ne.use(lo),
            ne.use(zs),
            ne.use(ul),
            ne.use(Ls),
            ne.use(fl),
            ne.use(Wr),
            ne.use(dl),
            ne.use(Ko),
            ne.use(di),
            ne.use(Tt),
            ne
          );
        });
      })(Fu)),
    Fu.exports
  );
}
var Mv = Lv();
const jv = Yu(Mv);
var Uu = { exports: {} },
  Fv = Uu.exports,
  Dp;
function Uv() {
  return (
    Dp ||
      ((Dp = 1),
      (function (r, i) {
        (function (o, l) {
          r.exports = l();
        })(Fv, function () {
          var o = function (L, E) {
              return (
                (o =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (k, w) {
                      k.__proto__ = w;
                    }) ||
                  function (k, w) {
                    for (var x in w)
                      Object.prototype.hasOwnProperty.call(w, x) &&
                        (k[x] = w[x]);
                  }),
                o(L, E)
              );
            },
            l = function () {
              return (
                (l =
                  Object.assign ||
                  function (L) {
                    for (var E, k = 1, w = arguments.length; k < w; k++)
                      for (var x in (E = arguments[k]))
                        Object.prototype.hasOwnProperty.call(E, x) &&
                          (L[x] = E[x]);
                    return L;
                  }),
                l.apply(this, arguments)
              );
            };
          function p(L, E, k, w) {
            return new (k || (k = Promise))(function (x, q) {
              function H(Ae) {
                try {
                  Fe(w.next(Ae));
                } catch (ue) {
                  q(ue);
                }
              }
              function ce(Ae) {
                try {
                  Fe(w.throw(Ae));
                } catch (ue) {
                  q(ue);
                }
              }
              function Fe(Ae) {
                var ue;
                Ae.done
                  ? x(Ae.value)
                  : ((ue = Ae.value),
                    ue instanceof k
                      ? ue
                      : new k(function (st) {
                          st(ue);
                        })).then(H, ce);
              }
              Fe((w = w.apply(L, [])).next());
            });
          }
          function m(L, E) {
            var k,
              w,
              x,
              q,
              H = {
                label: 0,
                sent: function () {
                  if (1 & x[0]) throw x[1];
                  return x[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (q = { next: ce(0), throw: ce(1), return: ce(2) }),
              typeof Symbol == "function" &&
                (q[Symbol.iterator] = function () {
                  return this;
                }),
              q
            );
            function ce(Fe) {
              return function (Ae) {
                return (function (ue) {
                  if (k) throw new TypeError("Generator is already executing.");
                  for (; q && ((q = 0), ue[0] && (H = 0)), H; )
                    try {
                      if (
                        ((k = 1),
                        w &&
                          (x =
                            2 & ue[0]
                              ? w.return
                              : ue[0]
                                ? w.throw || ((x = w.return) && x.call(w), 0)
                                : w.next) &&
                          !(x = x.call(w, ue[1])).done)
                      )
                        return x;
                      switch (
                        ((w = 0), x && (ue = [2 & ue[0], x.value]), ue[0])
                      ) {
                        case 0:
                        case 1:
                          x = ue;
                          break;
                        case 4:
                          return H.label++, { value: ue[1], done: !1 };
                        case 5:
                          H.label++, (w = ue[1]), (ue = [0]);
                          continue;
                        case 7:
                          (ue = H.ops.pop()), H.trys.pop();
                          continue;
                        default:
                          if (
                            ((x = H.trys),
                            !(
                              (x = x.length > 0 && x[x.length - 1]) ||
                              (ue[0] !== 6 && ue[0] !== 2)
                            ))
                          ) {
                            H = 0;
                            continue;
                          }
                          if (
                            ue[0] === 3 &&
                            (!x || (ue[1] > x[0] && ue[1] < x[3]))
                          ) {
                            H.label = ue[1];
                            break;
                          }
                          if (ue[0] === 6 && H.label < x[1]) {
                            (H.label = x[1]), (x = ue);
                            break;
                          }
                          if (x && H.label < x[2]) {
                            (H.label = x[2]), H.ops.push(ue);
                            break;
                          }
                          x[2] && H.ops.pop(), H.trys.pop();
                          continue;
                      }
                      ue = E.call(L, H);
                    } catch (st) {
                      (ue = [6, st]), (w = 0);
                    } finally {
                      k = x = 0;
                    }
                  if (5 & ue[0]) throw ue[1];
                  return { value: ue[0] ? ue[1] : void 0, done: !0 };
                })([Fe, Ae]);
              };
            }
          }
          typeof SuppressedError == "function" && SuppressedError;
          var v = "__BEACON_",
            R = "__BEACON_deviceId",
            _ = "last_report_time",
            D = "sending_event_ids",
            X = "beacon_config",
            G = "beacon_config_request_time",
            se = new Set(["rqd_js_init", "rqd_applaunched"]),
            Z = (function () {
              function L() {
                var E = this;
                (this.emit = function (k, w) {
                  if (E) {
                    var x,
                      q = E.__EventsList[k];
                    if (q != null && q.length) {
                      q = q.slice();
                      for (var H = 0; H < q.length; H++) {
                        x = q[H];
                        try {
                          var ce = x.callback.apply(E, [w]);
                          if (
                            (x.type === 1 && E.remove(k, x.callback), ce === !1)
                          )
                            break;
                        } catch (Fe) {
                          throw Fe;
                        }
                      }
                    }
                    return E;
                  }
                }),
                  (this.__EventsList = {});
              }
              return (
                (L.prototype.indexOf = function (E, k) {
                  for (var w = 0; w < E.length; w++)
                    if (E[w].callback === k) return w;
                  return -1;
                }),
                (L.prototype.on = function (E, k, w) {
                  if ((w === void 0 && (w = 0), this)) {
                    var x = this.__EventsList[E];
                    if (
                      (x || (x = this.__EventsList[E] = []),
                      this.indexOf(x, k) === -1)
                    ) {
                      var q = { name: E, type: w || 0, callback: k };
                      return x.push(q), this;
                    }
                    return this;
                  }
                }),
                (L.prototype.one = function (E, k) {
                  this.on(E, k, 1);
                }),
                (L.prototype.remove = function (E, k) {
                  if (this) {
                    var w = this.__EventsList[E];
                    if (!w) return null;
                    if (!k) {
                      try {
                        delete this.__EventsList[E];
                      } catch {}
                      return null;
                    }
                    if (w.length) {
                      var x = this.indexOf(w, k);
                      w.splice(x, 1);
                    }
                    return this;
                  }
                }),
                L
              );
            })();
          function ie(L, E) {
            for (var k = {}, w = 0, x = Object.keys(L); w < x.length; w++) {
              var q = x[w],
                H = L[q];
              if (typeof H == "string") k[V(q)] = V(H);
              else {
                if (E) throw new Error("value mast be string  !!!!");
                k[V(String(q))] = V(String(H));
              }
            }
            return k;
          }
          function V(L) {
            if (typeof L != "string") return L;
            try {
              return L.replace(new RegExp("\\|", "g"), "%7C")
                .replace(new RegExp("\\&", "g"), "%26")
                .replace(new RegExp("\\=", "g"), "%3D")
                .replace(new RegExp("\\+", "g"), "%2B");
            } catch {
              return "";
            }
          }
          function J(L) {
            return String(L.A99) + String(L.A100);
          }
          var _e = function () {},
            te = (function () {
              function L(E) {
                var k = this;
                (this.lifeCycle = new Z()),
                  (this.uploadJobQueue = []),
                  (this.additionalParams = {}),
                  (this.delayTime = 0),
                  (this._normalLogPipeline = (function (w) {
                    if (!w || !w.reduce || !w.length)
                      throw new TypeError(
                        "createPipeline 方法需要传入至少有一个 pipe 的数组",
                      );
                    return w.length === 1
                      ? function (x, q) {
                          w[0](x, q || _e);
                        }
                      : w.reduce(function (x, q) {
                          return function (H, ce) {
                            return (
                              ce === void 0 && (ce = _e),
                              x(H, function (Fe) {
                                return q == null ? void 0 : q(Fe, ce);
                              })
                            );
                          };
                        });
                  })([
                    function (w) {
                      k.send(
                        {
                          url: k.strategy.getUploadUrl(),
                          data: w,
                          method: "post",
                          contentType: "application/json;charset=UTF-8",
                        },
                        function () {
                          var x = k.config.onReportSuccess;
                          typeof x == "function" && x(JSON.stringify(w.events));
                        },
                        function () {
                          var x = k.config.onReportFail;
                          typeof x == "function" && x(JSON.stringify(w.events));
                        },
                      );
                    },
                  ])),
                  (function (w, x) {
                    if (!w) throw x instanceof Error ? x : new Error(x);
                  })(!!E.appkey, "appkey must be initial"),
                  (this.config = l(l({}, E), {
                    needReportRqdEvent:
                      E.needReportRqdEvent == null || E.needReportRqdEvent,
                  }));
              }
              return (
                (L.prototype.onUserAction = function (E, k) {
                  this.preReport(E, k, !1);
                }),
                (L.prototype.onDirectUserAction = function (E, k) {
                  this.preReport(E, k, !0);
                }),
                (L.prototype.preReport = function (E, k, w) {
                  E
                    ? this.strategy.isEventUpOnOff() &&
                      (this.strategy.isBlackEvent(E) ||
                        this.strategy.isSampleEvent(E) ||
                        (!this.config.needReportRqdEvent && se.has(E)) ||
                        this.onReport(E, k, w))
                    : this.errorReport.reportError("602", " no eventCode");
                }),
                (L.prototype.addAdditionalParams = function (E) {
                  for (var k = 0, w = Object.keys(E); k < w.length; k++) {
                    var x = w[k];
                    this.additionalParams[x] = E[x];
                  }
                }),
                (L.prototype.setChannelId = function (E) {
                  this.commonInfo.channelID = String(E);
                }),
                (L.prototype.setOpenId = function (E) {
                  this.commonInfo.openid = String(E);
                }),
                (L.prototype.setUnionid = function (E) {
                  this.commonInfo.unid = String(E);
                }),
                (L.prototype.getDeviceId = function () {
                  return this.commonInfo.deviceId;
                }),
                (L.prototype.getCommonInfo = function () {
                  return this.commonInfo;
                }),
                (L.prototype.removeSendingId = function (E) {
                  try {
                    var k = JSON.parse(this.storage.getItem(D)),
                      w = k.indexOf(E);
                    w != -1 &&
                      (k.splice(w, 1),
                      this.storage.setItem(D, JSON.stringify(k)));
                  } catch {}
                }),
                L
              );
            })(),
            me = (function () {
              function L(E, k, w, x) {
                (this.requestParams = {}),
                  (this.network = x),
                  (this.requestParams.attaid = "00400014144"),
                  (this.requestParams.token = "6478159937"),
                  (this.requestParams.product_id = E.appkey),
                  (this.requestParams.platform = w),
                  (this.requestParams.uin = k.deviceId),
                  (this.requestParams.model = ""),
                  (this.requestParams.os = w),
                  (this.requestParams.app_version = E.appVersion),
                  (this.requestParams.sdk_version = k.sdkVersion),
                  (this.requestParams.error_stack = ""),
                  (this.uploadUrl = E.isOversea
                    ? "https://htrace.wetvinfo.com/kv"
                    : "https://h.trace.qq.com/kv");
              }
              return (
                (L.prototype.reportError = function (E, k) {
                  (this.requestParams._dc = Math.random()),
                    (this.requestParams.error_msg = k),
                    (this.requestParams.error_code = E),
                    this.network
                      .get(this.uploadUrl, { params: this.requestParams })
                      .catch(function (w) {});
                }),
                L
              );
            })(),
            Ze = (function () {
              function L(E, k, w, x, q) {
                (this.strategy = {
                  isEventUpOnOff: !0,
                  httpsUploadUrl:
                    "https://otheve.beacon.qq.com/analytics/v2_upload",
                  requestInterval: 30,
                  blacklist: [],
                  samplelist: [],
                }),
                  (this.realSample = {}),
                  (this.appkey = ""),
                  (this.needQueryConfig = !0),
                  (this.appkey = k.appkey),
                  (this.storage = x),
                  (this.needQueryConfig = E);
                try {
                  var H = JSON.parse(this.storage.getItem(X));
                  H && this.processData(H);
                } catch {}
                k.isOversea &&
                  (this.strategy.httpsUploadUrl =
                    "https://svibeacon.onezapp.com/analytics/v2_upload"),
                  !k.isOversea &&
                    this.needRequestConfig() &&
                    this.requestConfig(k.appVersion, w, q);
              }
              return (
                (L.prototype.requestConfig = function (E, k, w) {
                  var x = this;
                  this.storage.setItem(G, Date.now().toString()),
                    w
                      .post(
                        "https://oth.str.beacon.qq.com/trpc.beacon.configserver.BeaconConfigService/QueryConfig",
                        {
                          platformId: typeof wx > "u" ? "3" : "4",
                          mainAppKey: this.appkey,
                          appVersion: E,
                          sdkVersion: k.sdkVersion,
                          osVersion: k.userAgent,
                          model: "",
                          packageName: "",
                          params: { A3: k.deviceId },
                        },
                      )
                      .then(function (q) {
                        if (q.data.ret == 0)
                          try {
                            var H = JSON.parse(q.data.beaconConfig);
                            H &&
                              (x.processData(H),
                              x.storage.setItem(X, q.data.beaconConfig));
                          } catch {}
                        else x.processData(null), x.storage.setItem(X, "");
                      })
                      .catch(function (q) {});
                }),
                (L.prototype.processData = function (E) {
                  var k, w, x, q, H;
                  (this.strategy.isEventUpOnOff =
                    (k = E == null ? void 0 : E.isEventUpOnOff) !== null &&
                    k !== void 0
                      ? k
                      : this.strategy.isEventUpOnOff),
                    (this.strategy.httpsUploadUrl =
                      (w = E == null ? void 0 : E.httpsUploadUrl) !== null &&
                      w !== void 0
                        ? w
                        : this.strategy.httpsUploadUrl),
                    (this.strategy.requestInterval =
                      (x = E == null ? void 0 : E.requestInterval) !== null &&
                      x !== void 0
                        ? x
                        : this.strategy.requestInterval),
                    (this.strategy.blacklist =
                      (q = E == null ? void 0 : E.blacklist) !== null &&
                      q !== void 0
                        ? q
                        : this.strategy.blacklist),
                    (this.strategy.samplelist =
                      (H = E == null ? void 0 : E.samplelist) !== null &&
                      H !== void 0
                        ? H
                        : this.strategy.samplelist);
                  for (
                    var ce = 0, Fe = this.strategy.samplelist;
                    ce < Fe.length;
                    ce++
                  ) {
                    var Ae = Fe[ce].split(",");
                    Ae.length == 2 && (this.realSample[Ae[0]] = Ae[1]);
                  }
                }),
                (L.prototype.needRequestConfig = function () {
                  if (!this.needQueryConfig) return !1;
                  var E = Number(this.storage.getItem(G));
                  return (
                    Date.now() - E > 60 * this.strategy.requestInterval * 1e3
                  );
                }),
                (L.prototype.getUploadUrl = function () {
                  return (
                    this.strategy.httpsUploadUrl + "?appkey=" + this.appkey
                  );
                }),
                (L.prototype.isBlackEvent = function (E) {
                  return this.strategy.blacklist.indexOf(E) != -1;
                }),
                (L.prototype.isEventUpOnOff = function () {
                  return this.strategy.isEventUpOnOff;
                }),
                (L.prototype.isSampleEvent = function (E) {
                  return (
                    !!Object.prototype.hasOwnProperty.call(
                      this.realSample,
                      E,
                    ) &&
                    this.realSample[E] <
                      Math.floor(Math.random() * Math.floor(1e4))
                  );
                }),
                L
              );
            })(),
            Ge = "session_storage_key",
            Et = (function () {
              function L(E, k, w) {
                (this.getSessionStackDepth = 0),
                  (this.beacon = w),
                  (this.storage = E),
                  (this.duration = k),
                  (this.appkey = w.config.appkey);
              }
              return (
                (L.prototype.getSession = function () {
                  this.getSessionStackDepth += 1;
                  var E = this.storage.getItem(Ge);
                  if (!E) return this.createSession();
                  var k = "",
                    w = 0;
                  try {
                    var x = JSON.parse(E) || {
                      sessionId: void 0,
                      sessionStart: void 0,
                    };
                    if (!x.sessionId || !x.sessionStart)
                      return this.createSession();
                    var q = Number(this.storage.getItem(_));
                    if (Date.now() - q > this.duration)
                      return this.createSession();
                    (k = x.sessionId),
                      (w = x.sessionStart),
                      (this.getSessionStackDepth = 0);
                  } catch {}
                  return { sessionId: k, sessionStart: w };
                }),
                (L.prototype.createSession = function () {
                  var E = Date.now(),
                    k = {
                      sessionId: this.appkey + "_" + E.toString(),
                      sessionStart: E,
                    };
                  this.storage.setItem(Ge, JSON.stringify(k)),
                    this.storage.setItem(_, E.toString());
                  var w = "is_new_user",
                    x = this.storage.getItem(w);
                  return (
                    this.getSessionStackDepth <= 1 &&
                      this.beacon.onDirectUserAction("rqd_applaunched", {
                        A21: x ? "N" : "Y",
                      }),
                    this.storage.setItem(w, JSON.stringify(!1)),
                    k
                  );
                }),
                L
              );
            })();
          function Qe() {
            var L = navigator.userAgent,
              E = L.indexOf("compatible") > -1 && L.indexOf("MSIE") > -1,
              k = L.indexOf("Edge") > -1 && !E,
              w = L.indexOf("Trident") > -1 && L.indexOf("rv:11.0") > -1;
            if (E) {
              new RegExp("MSIE (\\d+\\.\\d+);").test(L);
              var x = parseFloat(RegExp.$1);
              return x == 7 ? 7 : x == 8 ? 8 : x == 9 ? 9 : x == 10 ? 10 : 6;
            }
            return k ? -2 : w ? 11 : -1;
          }
          function fn(L, E) {
            var k, w;
            return (
              ((k = "https://tun-cos-1258344701.file.myqcloud.com/fp.js"),
              w === void 0 && (w = Date.now() + "-" + Math.random()),
              new Promise(function (x, q) {
                if (document.getElementById(w)) x(void 0);
                else {
                  var H = document.getElementsByTagName("head")[0],
                    ce = document.createElement("script");
                  (ce.onload = function () {
                    return function () {
                      (ce.onload = null), x(void 0);
                    };
                  }),
                    (ce.onerror = function (Fe) {
                      (ce.onerror = null), H.removeChild(ce), q(Fe);
                    }),
                    (ce.src = k),
                    (ce.id = w),
                    H.appendChild(ce);
                }
              }))
                .then(function () {
                  new Fingerprint().getQimei36(L, E);
                })
                .catch(function (x) {}),
              ""
            );
          }
          var jn,
            Fn = (function () {
              function L(E) {
                this.config = E;
              }
              return (
                (L.canUseDB = function () {
                  return typeof indexedDB < "u";
                }),
                (L.prototype.openDB = function () {
                  var E = this;
                  return new Promise(function (k, w) {
                    if (!L.canUseDB())
                      return w({ message: "当前不支持 indexeddb" });
                    var x = E.config,
                      q = x.name,
                      H = x.version,
                      ce = x.stores,
                      Fe = indexedDB.open(q, H);
                    (Fe.onsuccess = function () {
                      (E.db = Fe.result), k();
                    }),
                      (Fe.onerror = function (Ae) {
                        w(Ae);
                      }),
                      (Fe.onupgradeneeded = function () {
                        E.db = Fe.result;
                        try {
                          ce == null ||
                            ce.forEach(function (Ae) {
                              E.createStore(Ae);
                            });
                        } catch (Ae) {
                          w(Ae);
                        }
                      });
                  });
                }),
                (L.prototype.useStore = function (E) {
                  return (this.storeName = E), this;
                }),
                (L.prototype.deleteDB = function () {
                  var E = this;
                  return (
                    this.closeDB(),
                    new Promise(function (k, w) {
                      var x = indexedDB.deleteDatabase(E.config.name);
                      (x.onsuccess = function () {
                        return k();
                      }),
                        (x.onerror = w);
                    })
                  );
                }),
                (L.prototype.closeDB = function () {
                  var E;
                  (E = this.db) === null || E === void 0 || E.close(),
                    (this.db = null);
                }),
                (L.prototype.getStoreCount = function () {
                  var E = this;
                  return new Promise(function (k, w) {
                    var x = E.getStore("readonly").count();
                    (x.onsuccess = function () {
                      return k(x.result);
                    }),
                      (x.onerror = w);
                  });
                }),
                (L.prototype.clearStore = function () {
                  var E = this;
                  return new Promise(function (k, w) {
                    var x = E.getStore("readwrite").clear();
                    (x.onsuccess = function () {
                      return k();
                    }),
                      (x.onerror = w);
                  });
                }),
                (L.prototype.add = function (E, k) {
                  var w = this;
                  return new Promise(function (x, q) {
                    var H = w.getStore("readwrite").add(E, k);
                    (H.onsuccess = function () {
                      x(H.result);
                    }),
                      (H.onerror = q);
                  });
                }),
                (L.prototype.put = function (E, k) {
                  var w = this;
                  return new Promise(function (x, q) {
                    var H = w.getStore("readwrite").put(E, k);
                    (H.onsuccess = function () {
                      x(H.result);
                    }),
                      (H.onerror = q);
                  });
                }),
                (L.prototype.get = function (E, k) {
                  var w = this;
                  return new Promise(function (x, q) {
                    var H = w.getStore().index(E).get(k);
                    (H.onsuccess = function () {
                      x(H.result);
                    }),
                      (H.onerror = q);
                  });
                }),
                (L.prototype.remove = function (E, k) {
                  var w = this;
                  return new Promise(function (x, q) {
                    var H = w
                      .getStore("readwrite")
                      .index(E)
                      .objectStore.delete(k);
                    (H.onsuccess = function () {
                      x(H.result);
                    }),
                      (H.onerror = q);
                  });
                }),
                (L.prototype.removeList = function (E, k) {
                  var w = this;
                  return new Promise(function (x) {
                    var q = w.getStore("readwrite").index(E),
                      H = [];
                    k.forEach(function (ce) {
                      q.objectStore.delete(ce).onerror = function () {
                        H.push(ce);
                      };
                    }),
                      x(H);
                  });
                }),
                (L.prototype.getStoreAllData = function (E) {
                  var k = this;
                  return (
                    E === void 0 && (E = 1 / 0),
                    new Promise(function (w, x) {
                      var q = k.getStore("readonly").openCursor(),
                        H = [];
                      (q.onsuccess = function () {
                        var ce = q.result;
                        if (ce && H.length < E)
                          try {
                            ce.value && H.push(ce.value), ce.continue();
                          } catch {
                            w(H);
                          }
                        else w(H);
                      }),
                        (q.onerror = x);
                    })
                  );
                }),
                (L.prototype.getDataRangeByIndex = function (E, k, w, x, q) {
                  var H = this;
                  return new Promise(function (ce, Fe) {
                    var Ae = H.getStore().index(E),
                      ue = IDBKeyRange.bound(k, w, x, q),
                      st = [],
                      rt = Ae.openCursor(ue);
                    (rt.onsuccess = function () {
                      var Rt;
                      !(
                        (Rt = rt == null ? void 0 : rt.result) === null ||
                        Rt === void 0
                      ) && Rt.value
                        ? (st.push(rt == null ? void 0 : rt.result.value),
                          rt == null || rt.result.continue())
                        : ce(st);
                    }),
                      (rt.onerror = Fe);
                  });
                }),
                (L.prototype.removeDataByIndex = function (E, k, w, x, q) {
                  var H = this;
                  return new Promise(function (ce, Fe) {
                    var Ae = H.getStore("readwrite").index(E),
                      ue = IDBKeyRange.bound(k, w, x, q),
                      st = Ae.openCursor(ue),
                      rt = 0;
                    (st.onsuccess = function (Rt) {
                      var jt = Rt.target.result;
                      jt ? ((rt += 1), jt.delete(), jt.continue()) : ce(rt);
                    }),
                      (st.onerror = Fe);
                  });
                }),
                (L.prototype.createStore = function (E) {
                  var k = E.name,
                    w = E.indexes,
                    x = w === void 0 ? [] : w,
                    q = E.options;
                  if (this.db) {
                    this.db.objectStoreNames.contains(k) &&
                      this.db.deleteObjectStore(k);
                    var H = this.db.createObjectStore(k, q);
                    x.forEach(function (ce) {
                      H.createIndex(ce.indexName, ce.keyPath, ce.options);
                    });
                  }
                }),
                (L.prototype.getStore = function (E) {
                  var k;
                  return (
                    E === void 0 && (E = "readonly"),
                    (k = this.db) === null || k === void 0
                      ? void 0
                      : k
                          .transaction(this.storeName, E)
                          .objectStore(this.storeName)
                  );
                }),
                L
              );
            })(),
            un = "event_table_v3",
            Kt = "eventId",
            xt = (function () {
              function L(E, k) {
                (this.isReady = !1),
                  (this.taskQueue = Promise.resolve()),
                  (this.db = new Fn({
                    name: "Beacon_" + E + "_V3",
                    version: 1,
                    stores: [
                      {
                        name: un,
                        options: { keyPath: Kt },
                        indexes: [
                          {
                            indexName: Kt,
                            keyPath: Kt,
                            options: { unique: !0 },
                          },
                        ],
                      },
                    ],
                  })),
                  this.open(k);
              }
              return (
                (L.prototype.getCount = function () {
                  var E = this;
                  return this.readyExec(function () {
                    return E.db.getStoreCount();
                  });
                }),
                (L.prototype.setItem = function (E, k) {
                  var w = this;
                  return this.readyExec(function () {
                    return w.db.add({ eventId: E, value: k });
                  });
                }),
                (L.prototype.getItem = function (E) {
                  return p(this, void 0, void 0, function () {
                    var k = this;
                    return m(this, function (w) {
                      return [
                        2,
                        this.readyExec(function () {
                          return k.db.getDataRangeByIndex(Kt, E, E);
                        }),
                      ];
                    });
                  });
                }),
                (L.prototype.removeItem = function (E) {
                  var k = this;
                  return this.readyExec(function () {
                    return k.db.removeDataByIndex(Kt, E, E);
                  });
                }),
                (L.prototype.removeItemList = function (E) {
                  var k = this;
                  return this.readyExec(function () {
                    return k.db.removeList(Kt, E);
                  });
                }),
                (L.prototype.updateItem = function (E, k) {
                  var w = this;
                  return this.readyExec(function () {
                    return w.db.put({ eventId: E, value: k });
                  });
                }),
                (L.prototype.iterate = function (E) {
                  var k = this;
                  return this.readyExec(function () {
                    return k.db
                      .getStoreAllData()
                      .then(function (w) {
                        w.forEach(function (x) {
                          E(x.value);
                        });
                      })
                      .catch(function (w) {});
                  });
                }),
                (L.prototype.open = function (E) {
                  return p(this, void 0, void 0, function () {
                    var k,
                      w = this;
                    return m(this, function (x) {
                      switch (x.label) {
                        case 0:
                          return (
                            x.trys.push([0, 2, , 3]),
                            (this.taskQueue = this.taskQueue.then(function () {
                              return w.db.openDB();
                            })),
                            [4, this.taskQueue]
                          );
                        case 1:
                          return (
                            x.sent(),
                            (this.isReady = !0),
                            this.db.useStore(un),
                            [3, 3]
                          );
                        case 2:
                          return (
                            (k = x.sent()), E == null || E.openDBFail(k), [3, 3]
                          );
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                (L.prototype.readyExec = function (E) {
                  return this.isReady
                    ? E()
                    : ((this.taskQueue = this.taskQueue.then(function () {
                        return E();
                      })),
                      this.taskQueue);
                }),
                L
              );
            })(),
            on = (function () {
              function L(E) {
                (this.keyObject = {}), (this.storage = E);
              }
              return (
                (L.prototype.getCount = function () {
                  return this.storage.getStoreCount();
                }),
                (L.prototype.removeItem = function (E) {
                  this.storage.removeItem(E), delete this.keyObject[E];
                }),
                (L.prototype.removeItemList = function (E) {
                  var k = this;
                  E.forEach(function (w) {
                    return k.removeItem(w);
                  });
                }),
                (L.prototype.setItem = function (E, k) {
                  var w = JSON.stringify(k);
                  this.storage.setItem(E, w), (this.keyObject[E] = k);
                }),
                (L.prototype.iterate = function (E) {
                  for (
                    var k = Object.keys(this.keyObject), w = 0;
                    w < k.length;
                    w++
                  ) {
                    var x = this.storage.getItem(k[w]);
                    E(JSON.parse(x));
                  }
                }),
                L
              );
            })(),
            dn = (function () {
              function L(E, k) {
                var w = this;
                this.dbEventCount = 0;
                var x = Qe(),
                  q = function () {
                    (w.store = new on(k)),
                      (w.dbEventCount = w.store.getCount());
                  };
                x > 0 || !window.indexedDB || /X5Lite/.test(navigator.userAgent)
                  ? q()
                  : ((this.store = new xt(E, {
                      openDBFail: function (H) {
                        q();
                      },
                    })),
                    this.getCount()
                      .then(function (H) {
                        w.dbEventCount = H;
                      })
                      .catch(function (H) {}));
              }
              return (
                (L.prototype.getCount = function () {
                  return p(this, void 0, void 0, function () {
                    return m(this, function (E) {
                      switch (E.label) {
                        case 0:
                          return (
                            E.trys.push([0, 2, , 3]), [4, this.store.getCount()]
                          );
                        case 1:
                          return [2, E.sent()];
                        case 2:
                          return E.sent(), [2, Promise.reject()];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                (L.prototype.insertEvent = function (E, k) {
                  return p(this, void 0, void 0, function () {
                    var w, x;
                    return m(this, function (q) {
                      switch (q.label) {
                        case 0:
                          if (this.dbEventCount >= 1e3)
                            return [2, Promise.reject()];
                          (w = J(E.mapValue)), (q.label = 1);
                        case 1:
                          return (
                            q.trys.push([1, 3, , 4]),
                            this.dbEventCount++,
                            [4, this.store.setItem(w, E)]
                          );
                        case 2:
                          return [2, q.sent()];
                        case 3:
                          return (
                            (x = q.sent()),
                            k && k(x, E),
                            this.dbEventCount--,
                            [2, Promise.reject()]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (L.prototype.getEvents = function () {
                  return p(this, void 0, void 0, function () {
                    var E;
                    return m(this, function (k) {
                      switch (k.label) {
                        case 0:
                          (E = []), (k.label = 1);
                        case 1:
                          return (
                            k.trys.push([1, 3, , 4]),
                            [
                              4,
                              this.store.iterate(function (w) {
                                E.push(w);
                              }),
                            ]
                          );
                        case 2:
                          return k.sent(), [2, Promise.all(E)];
                        case 3:
                          return k.sent(), [2, Promise.all(E)];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (L.prototype.removeEvent = function (E) {
                  return p(this, void 0, void 0, function () {
                    var k;
                    return m(this, function (w) {
                      switch (w.label) {
                        case 0:
                          (k = J(E.mapValue)), (w.label = 1);
                        case 1:
                          return (
                            w.trys.push([1, 3, , 4]),
                            this.dbEventCount--,
                            [4, this.store.removeItem(k)]
                          );
                        case 2:
                          return [2, w.sent()];
                        case 3:
                          return (
                            w.sent(), this.dbEventCount++, [2, Promise.reject()]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (L.prototype.removeEventList = function (E) {
                  return p(this, void 0, void 0, function () {
                    var k, w;
                    return m(this, function (x) {
                      switch (x.label) {
                        case 0:
                          (k = E.map(function (q) {
                            return J(q.mapValue);
                          })),
                            (x.label = 1);
                        case 1:
                          return (
                            x.trys.push([1, 3, , 4]),
                            [4, this.store.removeItemList(k)]
                          );
                        case 2:
                          return (
                            (w = x.sent()),
                            (this.dbEventCount -=
                              k.length - (w == null ? void 0 : w.length) || 0),
                            [3, 4]
                          );
                        case 3:
                          return x.sent(), [2, Promise.reject()];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                L
              );
            })(),
            bt = function () {
              return (bt =
                Object.assign ||
                function (L) {
                  for (var E, k = 1, w = arguments.length; k < w; k++)
                    for (var x in (E = arguments[k]))
                      Object.prototype.hasOwnProperty.call(E, x) &&
                        (L[x] = E[x]);
                  return L;
                }).apply(this, arguments);
            };
          function et(L) {
            try {
              return decodeURIComponent(L.replace(/\+/g, " "));
            } catch {
              return null;
            }
          }
          function ye(L, E) {
            var k = [null, void 0, "", NaN].includes(L);
            if (E.isSkipEmpty && k) return null;
            var w = !E.isSkipEmpty && k ? "" : L;
            try {
              return E.encode ? encodeURIComponent(w) : w;
            } catch {
              return null;
            }
          }
          function Be(L, E) {
            E === void 0 && (E = { encode: !0, isSkipEmpty: !1 });
            var k = L.url,
              w = L.query,
              x = w === void 0 ? {} : w,
              q = L.hash,
              H = k.split("#"),
              ce = H[0],
              Fe = H[1],
              Ae = Fe === void 0 ? "" : Fe,
              ue = ce.split("?")[0],
              st = [],
              rt = ye(q || Ae, E),
              Rt = bt(
                bt(
                  {},
                  (function (jt) {
                    var Ht = jt.split("#"),
                      M = Ht[0],
                      W = Ht[1],
                      Q = W === void 0 ? "" : W,
                      ae = M.split("?"),
                      Pe = ae[0],
                      kt = ae[1],
                      Pt = kt === void 0 ? "" : kt,
                      Ke = et(Q),
                      ve = Object.create(null);
                    return (
                      Pt.split("&").forEach(function (Ee) {
                        var we = Ee.split("="),
                          ke = we[0],
                          tt = we[1],
                          ht = tt === void 0 ? "" : tt,
                          ft = et(ke),
                          Ce = et(ht);
                        ft === null ||
                          Ce === null ||
                          (ft === "" && Ce === "") ||
                          ve[ft] ||
                          (ve[ft] = Ce);
                      }),
                      { url: Pe, query: ve, hash: Ke }
                    );
                  })(k).query,
                ),
                x,
              );
            return (
              Object.keys(Rt).forEach(function (jt) {
                var Ht = ye(jt, E),
                  M = ye(Rt[jt], E);
                Ht !== null && M !== null && st.push(Ht + "=" + M);
              }),
              ue + (st.length ? "?" + st.join("&") : "") + (rt ? "#" + rt : "")
            );
          }
          function Se(L, E) {
            return new Promise(function (k, w) {
              var x = document.createElement("script"),
                q = bt({ type: "text/javascript", charset: "utf-8" }, L);
              Object.keys(q).forEach(function (H) {
                return (function (ce, Fe, Ae) {
                  if (ce)
                    return Ae === void 0
                      ? ce.getAttribute(Fe)
                      : ce.setAttribute(Fe, Ae);
                })(x, H, q[H]);
              }),
                (x.onload = function () {
                  return k();
                }),
                (x.onreadystatechange = function () {
                  var H = x.readyState;
                  ["complete", "loaded"].includes(H) &&
                    ((x.onreadystatechange = null), k());
                }),
                (x.onerror = w),
                document.body.appendChild(x);
            });
          }
          (function (L) {
            (L[(L.equal = 0)] = "equal"),
              (L[(L.low = -1)] = "low"),
              (L[(L.high = 1)] = "high");
          })(jn || (jn = {}));
          var N = function () {
            return (N =
              Object.assign ||
              function (L) {
                for (var E, k = 1, w = arguments.length; k < w; k++)
                  for (var x in (E = arguments[k]))
                    Object.prototype.hasOwnProperty.call(E, x) && (L[x] = E[x]);
                return L;
              }).apply(this, arguments);
          };
          function ee(L, E, k, w) {
            return new (k || (k = Promise))(function (x, q) {
              function H(Ae) {
                try {
                  Fe(w.next(Ae));
                } catch (ue) {
                  q(ue);
                }
              }
              function ce(Ae) {
                try {
                  Fe(w.throw(Ae));
                } catch (ue) {
                  q(ue);
                }
              }
              function Fe(Ae) {
                var ue;
                Ae.done
                  ? x(Ae.value)
                  : ((ue = Ae.value),
                    ue instanceof k
                      ? ue
                      : new k(function (st) {
                          st(ue);
                        })).then(H, ce);
              }
              Fe((w = w.apply(L, [])).next());
            });
          }
          function fe(L, E) {
            var k,
              w,
              x,
              q,
              H = {
                label: 0,
                sent: function () {
                  if (1 & x[0]) throw x[1];
                  return x[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (q = { next: ce(0), throw: ce(1), return: ce(2) }),
              typeof Symbol == "function" &&
                (q[Symbol.iterator] = function () {
                  return this;
                }),
              q
            );
            function ce(Fe) {
              return function (Ae) {
                return (function (ue) {
                  if (k) throw new TypeError("Generator is already executing.");
                  for (; H; )
                    try {
                      if (
                        ((k = 1),
                        w &&
                          (x =
                            2 & ue[0]
                              ? w.return
                              : ue[0]
                                ? w.throw || ((x = w.return) && x.call(w), 0)
                                : w.next) &&
                          !(x = x.call(w, ue[1])).done)
                      )
                        return x;
                      switch (
                        ((w = 0), x && (ue = [2 & ue[0], x.value]), ue[0])
                      ) {
                        case 0:
                        case 1:
                          x = ue;
                          break;
                        case 4:
                          return H.label++, { value: ue[1], done: !1 };
                        case 5:
                          H.label++, (w = ue[1]), (ue = [0]);
                          continue;
                        case 7:
                          (ue = H.ops.pop()), H.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (x =
                                (x = H.trys).length > 0 && x[x.length - 1]) ||
                              (ue[0] !== 6 && ue[0] !== 2)
                            )
                          ) {
                            H = 0;
                            continue;
                          }
                          if (
                            ue[0] === 3 &&
                            (!x || (ue[1] > x[0] && ue[1] < x[3]))
                          ) {
                            H.label = ue[1];
                            break;
                          }
                          if (ue[0] === 6 && H.label < x[1]) {
                            (H.label = x[1]), (x = ue);
                            break;
                          }
                          if (x && H.label < x[2]) {
                            (H.label = x[2]), H.ops.push(ue);
                            break;
                          }
                          x[2] && H.ops.pop(), H.trys.pop();
                          continue;
                      }
                      ue = E.call(L, H);
                    } catch (st) {
                      (ue = [6, st]), (w = 0);
                    } finally {
                      k = x = 0;
                    }
                  if (5 & ue[0]) throw ue[1];
                  return { value: ue[0] ? ue[1] : void 0, done: !0 };
                })([Fe, Ae]);
              };
            }
          }
          var Ve = (function () {
              function L() {
                this.interceptors = [];
              }
              return (
                (L.prototype.use = function (E, k) {
                  return (
                    this.interceptors.push({ resolved: E, rejected: k }),
                    this.interceptors.length - 1
                  );
                }),
                (L.prototype.traverse = function (E, k) {
                  k === void 0 && (k = !1);
                  var w = Promise.resolve(E);
                  return (
                    (k
                      ? Array.prototype.reduceRight
                      : Array.prototype.reduce
                    ).call(
                      this.interceptors,
                      function (x, q) {
                        if (q) {
                          var H = q.resolved,
                            ce = q.rejected;
                          w = w.then(H, ce);
                        }
                        return x;
                      },
                      "",
                    ),
                    w
                  );
                }),
                (L.prototype.eject = function (E) {
                  this.interceptors[E] && (this.interceptors[E] = null);
                }),
                L
              );
            })(),
            Je = {
              defaults: {
                timeout: 0,
                method: "GET",
                mode: "cors",
                redirect: "follow",
                credentials: "same-origin",
              },
              headers: {
                common: { Accept: "application/json, text/plain, */*" },
                POST: { "Content-Type": "application/x-www-form-urlencoded" },
                PUT: { "Content-Type": "application/x-www-form-urlencoded" },
                PATCH: { "Content-Type": "application/x-www-form-urlencoded" },
              },
              baseURL: "",
              polyfillUrl: "https://vm.gtimg.cn/comps/script/fetch.min.js",
              interceptors: { request: new Ve(), response: new Ve() },
            },
            be = /^([a-z][a-z\d+\-.]*:)?\/\//i,
            ut = Object.prototype.toString;
          function ot(L) {
            return ee(this, void 0, void 0, function () {
              var E;
              return fe(this, function (k) {
                switch (k.label) {
                  case 0:
                    if (window.fetch) return [2];
                    k.label = 1;
                  case 1:
                    return k.trys.push([1, 3, , 4]), [4, Se({ src: L })];
                  case 2:
                    return k.sent(), [3, 4];
                  case 3:
                    throw (
                      ((E = k.sent()),
                      new Error("加载 polyfill " + L + " 失败: " + E.message))
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }
          function nt(L) {
            return (
              ["Accept", "Content-Type"].forEach(function (E) {
                return (
                  (k = E),
                  void (
                    (w = L.headers) &&
                    Object.keys(w).forEach(function (x) {
                      x !== k &&
                        x.toUpperCase() === k.toUpperCase() &&
                        ((w[k] = w[x]), delete w[x]);
                    })
                  )
                );
                var k, w;
              }),
              (function (E) {
                if (ut.call(E) !== "[object Object]") return !1;
                var k = Object.getPrototypeOf(E);
                return k === null || k === Object.prototype;
              })(L.body) &&
                ((L.body = JSON.stringify(L.body)),
                L.headers &&
                  (L.headers["Content-Type"] =
                    "application/json;charset=utf-8")),
              L
            );
          }
          function _t(L) {
            return ee(this, void 0, void 0, function () {
              var E, k, w, x, q, H, ce, Fe, Ae, ue, st, rt, Rt, jt, Ht, M, W;
              return fe(this, function (Q) {
                switch (Q.label) {
                  case 0:
                    return (
                      (E = Je.baseURL),
                      (k = Je.defaults),
                      (w = Je.interceptors),
                      [4, ot(Je.polyfillUrl)]
                    );
                  case 1:
                    return (
                      Q.sent(),
                      (x = N(N({}, k), L)).headers ||
                        (x.headers = (function (ae) {
                          ae === void 0 && (ae = "GET");
                          var Pe = Je.headers[ae] || {};
                          return N(N({}, Je.headers.common), Pe);
                        })(x.method)),
                      nt(x),
                      [4, w.request.traverse(x, !0)]
                    );
                  case 2:
                    if ((q = Q.sent()) instanceof Error) throw q;
                    return (
                      (q.url = (function (ae, Pe) {
                        return !ae || be.test(Pe)
                          ? Pe
                          : ae.replace(/\/+$/, "") +
                              "/" +
                              Pe.replace(/^\/+/, "");
                      })(E, q.url)),
                      (H = q.url),
                      (ce = q.timeout),
                      (Fe = q.params),
                      (Ae = q.method),
                      (ue =
                        ["GET", "DELETE", "OPTIONS", "HEAD"].includes(
                          Ae === void 0 ? "GET" : Ae,
                        ) && !!Fe),
                      (st = ue ? Be({ url: H, query: Fe }) : H),
                      (rt = []),
                      ce &&
                        !q.signal &&
                        ((Ht = new Promise(function (ae) {
                          Rt = setTimeout(function () {
                            ae(new Error("timeout"));
                          }, ce);
                        })),
                        rt.push(Ht),
                        (jt = new AbortController()),
                        (q.signal = jt.signal)),
                      rt.push(
                        fetch(st, q).catch(function (ae) {
                          return ae;
                        }),
                      ),
                      [4, Promise.race(rt)]
                    );
                  case 3:
                    return (
                      (M = Q.sent()),
                      Rt && clearTimeout(Rt),
                      [4, w.response.traverse(M)]
                    );
                  case 4:
                    if ((W = Q.sent()) instanceof Error)
                      throw (jt == null || jt.abort(), W);
                    return [2, W];
                }
              });
            });
          }
          var sn = (function () {
              function L(E) {
                Je.interceptors.request.use(function (k) {
                  var w = k.url,
                    x = k.method,
                    q = k.body,
                    H = q;
                  if (E.onReportBeforeSend) {
                    var ce = E.onReportBeforeSend({
                      url: w,
                      method: x,
                      data: q ? JSON.parse(q) : null,
                    });
                    H = ce != null && ce.data ? JSON.stringify(ce.data) : null;
                  }
                  return x != "GET" && H ? l(l({}, k), { body: H }) : k;
                });
              }
              return (
                (L.prototype.get = function (E, k) {
                  return p(this, void 0, void 0, function () {
                    var w, x;
                    return m(this, function (q) {
                      switch (q.label) {
                        case 0:
                          return [4, _t(l({ url: E }, k))];
                        case 1:
                          return [4, (w = q.sent()).json()];
                        case 2:
                          return (
                            (x = q.sent()),
                            [
                              2,
                              Promise.resolve({
                                data: x,
                                status: w.status,
                                statusText: w.statusText,
                                headers: w.headers,
                              }),
                            ]
                          );
                      }
                    });
                  });
                }),
                (L.prototype.post = function (E, k, w) {
                  return p(this, void 0, void 0, function () {
                    var x, q;
                    return m(this, function (H) {
                      switch (H.label) {
                        case 0:
                          return [
                            4,
                            _t(l({ url: E, body: k, method: "POST" }, w)),
                          ];
                        case 1:
                          return [4, (x = H.sent()).json()];
                        case 2:
                          return (
                            (q = H.sent()),
                            [
                              2,
                              Promise.resolve({
                                data: q,
                                status: x.status,
                                statusText: x.statusText,
                                headers: x.headers,
                              }),
                            ]
                          );
                      }
                    });
                  });
                }),
                L
              );
            })(),
            _r = (function () {
              function L(E) {
                this.appkey = E;
              }
              return (
                (L.prototype.getItem = function (E) {
                  try {
                    return window.localStorage.getItem(this.getStoreKey(E));
                  } catch {
                    return "";
                  }
                }),
                (L.prototype.removeItem = function (E) {
                  try {
                    window.localStorage.removeItem(this.getStoreKey(E));
                  } catch {}
                }),
                (L.prototype.setItem = function (E, k) {
                  try {
                    window.localStorage.setItem(this.getStoreKey(E), k);
                  } catch {}
                }),
                (L.prototype.setSessionItem = function (E, k) {
                  try {
                    window.sessionStorage.setItem(this.getStoreKey(E), k);
                  } catch {}
                }),
                (L.prototype.getSessionItem = function (E) {
                  try {
                    return window.sessionStorage.getItem(this.getStoreKey(E));
                  } catch {
                    return "";
                  }
                }),
                (L.prototype.getStoreKey = function (E) {
                  return v + this.appkey + "_" + E;
                }),
                (L.prototype.createDeviceId = function () {
                  try {
                    var E = window.localStorage.getItem(R);
                    return (
                      E ||
                        ((E = (function (k) {
                          for (
                            var w =
                                "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",
                              x = "",
                              q = 0;
                            q < k;
                            q++
                          )
                            x += w.charAt(Math.floor(51 * Math.random()));
                          return x;
                        })(32)),
                        window.localStorage.setItem(R, E)),
                      E
                    );
                  } catch {
                    return "";
                  }
                }),
                (L.prototype.clear = function () {
                  try {
                    for (
                      var E = window.localStorage.length, k = 0;
                      k < E;
                      k++
                    ) {
                      var w = window.localStorage.key(k);
                      (w == null ? void 0 : w.substr(0, 9)) == v &&
                        window.localStorage.removeItem(w);
                    }
                  } catch {}
                }),
                (L.prototype.getStoreCount = function () {
                  var E = 0;
                  try {
                    E = window.localStorage.length;
                  } catch {}
                  return E;
                }),
                L
              );
            })(),
            Un = "logid_start",
            $n = "4.5.30-web",
            Cn = (function (L) {
              function E(k) {
                var w = L.call(this, k) || this;
                if (
                  ((w.qimei36 = ""),
                  (w.uselessCycleTaskNum = 0),
                  (w.underWeakNet = !1),
                  (w.pauseSearching = !1),
                  (w.lsEnable = !0),
                  (w.throttleTimer = null),
                  (w.throttleBuffer = []),
                  (w.send = function (ce, Fe, Ae) {
                    w.storage.setItem(_, Date.now().toString()),
                      w.network
                        .post(w.uploadUrl || w.strategy.getUploadUrl(), ce.data)
                        .then(function (ue) {
                          var st;
                          ((st = ue == null ? void 0 : ue.data) === null ||
                          st === void 0
                            ? void 0
                            : st.result) == 100
                            ? (w.delayTime = 1e3 * ue.data.delayTime)
                            : (w.delayTime = 0),
                            Fe && Fe(ce.data);
                          var rt = ce.data.events;
                          w.store
                            .removeEventList(rt)
                            .then(function () {
                              rt.forEach(function (Rt) {
                                return w.removeSendingId(J(Rt.mapValue));
                              });
                            })
                            .catch(function (Rt) {}),
                            w.doCustomCycleTask();
                        })
                        .catch(function (ue) {
                          var st = ce.data.events;
                          w.errorReport.reportError(
                            ue.code ? ue.code.toString() : "600",
                            ue.message,
                          ),
                            Ae && Ae(ce.data);
                          var rt = JSON.parse(w.storage.getItem(D));
                          st.forEach(function (Rt) {
                            rt &&
                              rt.indexOf(J(Rt)) != -1 &&
                              w.store.insertEvent(Rt, function (jt, Ht) {
                                jt &&
                                  w.errorReport.reportError(
                                    "604",
                                    "insertEvent fail!",
                                  );
                              }),
                              w.removeSendingId(J(Rt));
                          }),
                            w.monitorUploadFailed();
                        });
                  }),
                  !window.localStorage)
                )
                  return (
                    w.errorReport.reportError("605", "no localStorage!"),
                    (w.lsEnable = !1),
                    w
                  );
                var x,
                  q,
                  H = Qe();
                return (
                  (w.isUnderIE8 = H > 0 && H < 8),
                  w.isUnderIE8 ||
                    ((w.isUnderIE = H > 0),
                    k.needInitQimei &&
                      fn(k.appkey, function (ce) {
                        w.qimei36 = ce.q36;
                      }),
                    (w.network = new sn(k)),
                    (w.storage = new _r(k.appkey)),
                    w.initCommonInfo(k),
                    (w.store = new dn(k.appkey, w.storage)),
                    (w.errorReport = new me(
                      w.config,
                      w.commonInfo,
                      "web",
                      w.network,
                    )),
                    (w.strategy = new Ze(
                      k.needQueryConfig == null || k.needQueryConfig,
                      w.config,
                      w.commonInfo,
                      w.storage,
                      w.network,
                    )),
                    (w.logidStartTime = w.storage.getItem(Un)),
                    w.logidStartTime ||
                      ((w.logidStartTime = Date.now().toString()),
                      w.storage.setItem(Un, w.logidStartTime)),
                    (x = w.logidStartTime),
                    (q = Date.now() - Number.parseFloat(x)),
                    Math.floor(q / 864e5) >= 365 && w.storage.clear(),
                    w.initSession(k),
                    w.onDirectUserAction("rqd_js_init", {}),
                    setTimeout(function () {
                      return w.lifeCycle.emit("init");
                    }, 0),
                    w.storage.setItem(D, "[]"),
                    (w.initDelayTime = k.delay ? k.delay : 1e3),
                    w.cycleTask(w.initDelayTime)),
                  w
                );
              }
              return (
                (function (k, w) {
                  if (typeof w != "function" && w !== null)
                    throw new TypeError(
                      "Class extends value " +
                        String(w) +
                        " is not a constructor or null",
                    );
                  function x() {
                    this.constructor = k;
                  }
                  o(k, w),
                    (k.prototype =
                      w === null
                        ? Object.create(w)
                        : ((x.prototype = w.prototype), new x()));
                })(E, L),
                (E.prototype.initSession = function (k) {
                  var w = 18e5;
                  k.sessionDuration &&
                    k.sessionDuration > 3e4 &&
                    (w = k.sessionDuration),
                    (this.beaconSession = new Et(this.storage, w, this));
                }),
                (E.prototype.initCommonInfo = function (k) {
                  var w = Number(this.storage.getItem(_));
                  try {
                    var x = JSON.parse(this.storage.getItem(D));
                    (Date.now() - w > 3e4 || !x) &&
                      this.storage.setItem(D, JSON.stringify([]));
                  } catch {}
                  k.uploadUrl &&
                    (this.uploadUrl = k.uploadUrl + "?appkey=" + k.appkey);
                  var q = [window.screen.width, window.screen.height];
                  window.devicePixelRatio && q.push(window.devicePixelRatio),
                    (this.commonInfo = {
                      deviceId: this.storage.createDeviceId(),
                      language: (navigator && navigator.language) || "zh_CN",
                      query: window.location.search,
                      userAgent: navigator.userAgent,
                      pixel: q.join("*"),
                      channelID: k.channelID ? String(k.channelID) : "",
                      openid: k.openid ? String(k.openid) : "",
                      unid: k.unionid ? String(k.unionid) : "",
                      sdkVersion: $n,
                    }),
                    (this.config.appVersion = k.versionCode
                      ? String(k.versionCode)
                      : ""),
                    (this.config.strictMode = k.strictMode);
                }),
                (E.prototype.cycleTask = function (k) {
                  var w = this;
                  this.intervalID = window.setInterval(function () {
                    w.pauseSearching ||
                      w.store
                        .getEvents()
                        .then(function (x) {
                          x.length == 0 && (w.pauseSearching = !0);
                          var q = [],
                            H = JSON.parse(w.storage.getItem(D));
                          H || (H = []),
                            x &&
                              x.forEach(function (ce) {
                                var Fe = J(ce.mapValue);
                                H.indexOf(Fe) == -1 && (q.push(ce), H.push(Fe));
                              }),
                            H.length > 1e3 && (H = []),
                            q.length != 0 &&
                              (w.storage.setItem(D, JSON.stringify(H)),
                              w._normalLogPipeline(w.assembleData(q)));
                        })
                        .catch(function (x) {});
                  }, k);
                }),
                (E.prototype.thottleReport = function (k) {
                  var w,
                    x = this;
                  if (
                    ((w = this.throttleBuffer).push.apply(w, k),
                    this.throttleBuffer.length >= 500)
                  ) {
                    var q = this.throttleBuffer.slice(0);
                    (this.throttleBuffer.length = 0),
                      this._normalLogPipeline(this.assembleData(q));
                  } else {
                    if (this.throttleTimer) return;
                    this.throttleTimer = setTimeout(function () {
                      var H = x.throttleBuffer.slice(0);
                      (x.throttleBuffer.length = 0),
                        x._normalLogPipeline(x.assembleData(H)),
                        (x.throttleTimer = null);
                    }, 1e3);
                  }
                }),
                (E.prototype.onReport = function (k, w, x) {
                  var q = this;
                  if (this.lsEnable)
                    if (this.isUnderIE8)
                      this.errorReport.reportError("601", "UnderIE8");
                    else {
                      this.pauseSearching = !1;
                      var H = this.generateData(k, w, x);
                      if (x && this.delayTime == 0 && !this.underWeakNet)
                        this._normalLogPipeline(this.assembleData(H));
                      else {
                        var ce = H.shift();
                        ce &&
                          this.store
                            .insertEvent(ce, function (Fe) {
                              Fe &&
                                q.errorReport.reportError(
                                  "604",
                                  "insertEvent fail!",
                                );
                            })
                            .catch(function (Fe) {
                              q.thottleReport([ce]);
                            });
                      }
                    }
                }),
                (E.prototype.onSendBeacon = function (k, w) {
                  if (this.lsEnable)
                    if (this.isUnderIE)
                      this.errorReport.reportError("605", "UnderIE");
                    else {
                      this.pauseSearching = !1;
                      var x = this.assembleData(this.generateData(k, w, !0));
                      typeof navigator.sendBeacon == "function" &&
                        navigator.sendBeacon(
                          this.uploadUrl || this.strategy.getUploadUrl(),
                          JSON.stringify(x),
                        );
                    }
                }),
                (E.prototype.generateData = function (k, w, x) {
                  var q = [],
                    H = $n + "_" + (x ? "direct_log_id" : "normal_log_id"),
                    ce = Number(this.storage.getItem(H));
                  return (
                    (ce = ce || 1),
                    (w = l(l({}, w), {
                      A99: x ? "Y" : "N",
                      A100: ce.toString(),
                      A72: $n,
                      A88: this.logidStartTime,
                    })),
                    ce++,
                    this.storage.setItem(H, ce.toString()),
                    q.push({
                      eventCode: k,
                      eventTime: Date.now().toString(),
                      mapValue: ie(w, this.config.strictMode),
                    }),
                    q
                  );
                }),
                (E.prototype.assembleData = function (k) {
                  var w = this.beaconSession.getSession();
                  return {
                    appVersion: this.config.appVersion
                      ? V(this.config.appVersion)
                      : "",
                    sdkId: "js",
                    sdkVersion: $n,
                    mainAppKey: this.config.appkey,
                    platformId: 3,
                    common: ie(
                      l(l({}, this.additionalParams), {
                        A2: this.commonInfo.deviceId,
                        A8: this.commonInfo.openid,
                        A12: this.commonInfo.language,
                        A17: this.commonInfo.pixel,
                        A23: this.commonInfo.channelID,
                        A50: this.commonInfo.unid,
                        A76: w.sessionId,
                        A101: this.commonInfo.userAgent,
                        A102: window.location.href,
                        A104: document.referrer,
                        A119: this.commonInfo.query,
                        A153: this.qimei36,
                      }),
                      !1,
                    ),
                    events: k,
                  };
                }),
                (E.prototype.monitorUploadFailed = function () {
                  this.uselessCycleTaskNum++,
                    this.uselessCycleTaskNum >= 5 &&
                      (window.clearInterval(this.intervalID),
                      this.cycleTask(6e4),
                      (this.underWeakNet = !0));
                }),
                (E.prototype.doCustomCycleTask = function () {
                  this.uselessCycleTaskNum >= 5 &&
                    (window.clearInterval(this.intervalID),
                    this.cycleTask(this.initDelayTime)),
                    (this.uselessCycleTaskNum = 0),
                    (this.underWeakNet = !1);
                }),
                (E.prototype.setQimei = function (k) {
                  this.qimei36 = k;
                }),
                E
              );
            })(te);
          return Cn;
        });
      })(Uu)),
    Uu.exports
  );
}
var Bv = Uv();
const Wv = Yu(Bv);
var zv = Object.getOwnPropertyDescriptor,
  Hv = (r, i, o, l) => {
    for (
      var p = l > 1 ? void 0 : l ? zv(i, o) : i, m = r.length - 1, v;
      m >= 0;
      m--
    )
      (v = r[m]) && (p = v(p) || p);
    return p;
  },
  Lp = (r, i) => (o, l) => i(o, l, r);
const qv = "0WEB0698R9XOG65A";
let Kc = class {
  constructor(r, i) {
    (this.eventCode = r),
      (this.logger = i),
      (this.report = (o, l) => {
        var p;
        (p = this.logger) == null ||
          p.info(Ho({ action: o, ...l }), "BeaconReportServiceImpl.report"),
          this.reporter.onDirectUserAction(this.eventCode, {
            action: o,
            ...this.publicParams,
            ...l,
          });
      }),
      (this.setPublicParams = (o) => {
        this.publicParams = o;
      }),
      (this.reporter = new Wv({ appkey: qv, strictMode: !1 }));
  }
};
Kc = Hv([rl(), Lp(0, Oi(Hh)), Lp(1, Oi(ro))], Kc);
const $v = `
`,
  Vv = 3;
class Gv {
  constructor(i, o) {
    (this.reporter = i),
      (this.options = o),
      (this.messages = []),
      (this.startTime = Date.now()),
      (this.info = (l, p) => {
        if (!l) return;
        const m = this.serializeMessage(l, p);
        this.showDebug(m, "info"),
          this.messages.push(m),
          this.checkAndReportInfo();
      }),
      (this.error = (l, p) => {
        if (!l) return;
        const m = this.serializeError(l, p);
        this.showDebug(m, "error"), this.reporter.error(m);
      }),
      (this.reportEvent = (...l) => {
        const [p, m] = l;
        this.showDebug({ eventName: p, data: m }, "info"),
          this.reporter.reportEvent(...l);
      }),
      (this.reportTime = (...l) => {
        const [p, m, v] = l;
        this.showDebug({ name: p, duration: m, data: v }, "info"),
          this.reporter.reportTime(...l);
      }),
      (this.setConfig = (l) => {
        var p, m;
        this.showDebug({ ...l }, "info"),
          (m = (p = this.reporter) == null ? void 0 : p.setConfig) == null ||
            m.call(p, l);
      });
  }
  serializeMessage(...i) {
    const [o, l] = i,
      p = this.costTimeFromStart(),
      m = `${o} (${p}ms)`;
    return l ? `[${l}] ${m}` : m;
  }
  serializeError(...i) {
    const [o, l] = i;
    if (o instanceof Error) {
      const p = l ? ` [${l}]` : "";
      return (o.name = `${o.name}${p}`), o;
    }
    return l ? `[${l}] ${o}` : o;
  }
  costTimeFromStart() {
    return Date.now() - this.startTime;
  }
  checkAndReportInfo() {
    const i = this.options.mergeCount || Vv;
    if (this.messages.length < i) return;
    const o = this.options.separator || $v,
      l = this.messages.join(o);
    this.reporter.info(l), (this.messages = []);
  }
  showDebug(i, o) {
    this.options.debug && console[o]("[LOGGER-DEBUG]:", i);
  }
}
class Qv {
  constructor(i) {
    (this.aegis = i),
      (this.info = (...o) => this.aegis.info(...o)),
      (this.error = (...o) => {
        const [l] = o;
        if (l instanceof Error) {
          this.aegis.error(`${l.message}
${l == null ? void 0 : l.stack}`);
          return;
        }
        this.aegis.error(...o);
      }),
      (this.reportEvent = (o, l) => {
        this.aegis.reportEvent({ name: o, ...l });
      }),
      (this.reportTime = (o, l, p) => {
        this.aegis.reportTime({ name: o, duration: l, ...p });
      }),
      (this.setConfig = (...o) => this.aegis.setConfig(...o));
  }
}
const Jv = "https://galileotelemetry.tencent.com/collect",
  Kv = "SDK-8252ca67359fbfb43771";
let Zi, Du;
const Jh = () => {
    if (!Du) {
      const r = new jv({
          id: Kv,
          hostUrl: { url: Jv },
          plugin: {
            pv: !0,
            aid: !0,
            error: !0,
            device: !0,
            close: !0,
            pagePerformance: !0,
            webVitals: !0,
            fId: !1,
            ie: !1,
            spa: !0,
            api: { apiDetail: !0 },
            apiSpeed: !0,
            assetSpeed: !0,
            session: !0,
          },
          env: "production",
        }),
        i = new Qc(kv);
      Zi = new Qv(r);
      const { info: o, error: l } = Zi;
      return (
        (Zi.info = (...p) => {
          i.info(...p), o(...p);
        }),
        (Zi.error = (...p) => {
          i.error(...p), l(...p);
        }),
        (Du = new Gv(Zi, { debug: !1 })),
        Du
      );
    }
    return Du;
  },
  Xv = (...r) => Jh().error(...r),
  Kh = (...r) => (Zi == null ? void 0 : Zi.setConfig(...r)),
  Mp = async (r) => {
    try {
      const [i, o] = await Promise.all([Pv(), xv()]);
      console.log("[initLogger] -> accountInfo, deviceInfo:", i, o);
      const { userId: l = "" } = i || {},
        { guid: p, q36: m, qua: v } = o || {};
      Kh({ uid: l, extField: { ...r, guid: p, q36: m, qua: v } }),
        window._preErrorCatcher &&
          (window.removeEventListener("error", window._preErrorCatcher),
          (window._preErrorCatcher = void 0));
    } catch (i) {
      console.error("[initLogger] init logger failed: ", i), Xv(i);
    }
  };
typeof window < "u" &&
  (Mp(),
  Tv((r, i) => {
    i != null && i.userId && Mp();
  }));
var jc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var jp;
function Yv() {
  return (
    jp ||
      ((jp = 1),
      (function (r) {
        (function () {
          var i = {}.hasOwnProperty;
          function o() {
            for (var m = "", v = 0; v < arguments.length; v++) {
              var R = arguments[v];
              R && (m = p(m, l(R)));
            }
            return m;
          }
          function l(m) {
            if (typeof m == "string" || typeof m == "number") return m;
            if (typeof m != "object") return "";
            if (Array.isArray(m)) return o.apply(null, m);
            if (
              m.toString !== Object.prototype.toString &&
              !m.toString.toString().includes("[native code]")
            )
              return m.toString();
            var v = "";
            for (var R in m) i.call(m, R) && m[R] && (v = p(v, R));
            return v;
          }
          function p(m, v) {
            return v ? (m ? m + " " + v : m + v) : m;
          }
          r.exports
            ? ((o.default = o), (r.exports = o))
            : (window.classNames = o);
        })();
      })(jc)),
    jc.exports
  );
}
var Zv = Yv();
const Xc = Yu(Zv);
var Fc = { exports: {} },
  er = {},
  Uc = { exports: {} },
  Bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp;
function ey() {
  return (
    Fp ||
      ((Fp = 1),
      (function (r) {
        function i(ye, Be) {
          var Se = ye.length;
          ye.push(Be);
          e: for (; 0 < Se; ) {
            var N = (Se - 1) >>> 1,
              ee = ye[N];
            if (0 < p(ee, Be)) (ye[N] = Be), (ye[Se] = ee), (Se = N);
            else break e;
          }
        }
        function o(ye) {
          return ye.length === 0 ? null : ye[0];
        }
        function l(ye) {
          if (ye.length === 0) return null;
          var Be = ye[0],
            Se = ye.pop();
          if (Se !== Be) {
            ye[0] = Se;
            e: for (var N = 0, ee = ye.length, fe = ee >>> 1; N < fe; ) {
              var Ve = 2 * (N + 1) - 1,
                Je = ye[Ve],
                be = Ve + 1,
                ut = ye[be];
              if (0 > p(Je, Se))
                be < ee && 0 > p(ut, Je)
                  ? ((ye[N] = ut), (ye[be] = Se), (N = be))
                  : ((ye[N] = Je), (ye[Ve] = Se), (N = Ve));
              else if (be < ee && 0 > p(ut, Se))
                (ye[N] = ut), (ye[be] = Se), (N = be);
              else break e;
            }
          }
          return Be;
        }
        function p(ye, Be) {
          var Se = ye.sortIndex - Be.sortIndex;
          return Se !== 0 ? Se : ye.id - Be.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          r.unstable_now = function () {
            return m.now();
          };
        } else {
          var v = Date,
            R = v.now();
          r.unstable_now = function () {
            return v.now() - R;
          };
        }
        var _ = [],
          D = [],
          X = 1,
          G = null,
          se = 3,
          Z = !1,
          ie = !1,
          V = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          _e = typeof clearTimeout == "function" ? clearTimeout : null,
          te = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function me(ye) {
          for (var Be = o(D); Be !== null; ) {
            if (Be.callback === null) l(D);
            else if (Be.startTime <= ye)
              l(D), (Be.sortIndex = Be.expirationTime), i(_, Be);
            else break;
            Be = o(D);
          }
        }
        function Ze(ye) {
          if (((V = !1), me(ye), !ie))
            if (o(_) !== null) (ie = !0), bt(Ge);
            else {
              var Be = o(D);
              Be !== null && et(Ze, Be.startTime - ye);
            }
        }
        function Ge(ye, Be) {
          (ie = !1), V && ((V = !1), _e(fn), (fn = -1)), (Z = !0);
          var Se = se;
          try {
            for (
              me(Be), G = o(_);
              G !== null && (!(G.expirationTime > Be) || (ye && !un()));

            ) {
              var N = G.callback;
              if (typeof N == "function") {
                (G.callback = null), (se = G.priorityLevel);
                var ee = N(G.expirationTime <= Be);
                (Be = r.unstable_now()),
                  typeof ee == "function"
                    ? (G.callback = ee)
                    : G === o(_) && l(_),
                  me(Be);
              } else l(_);
              G = o(_);
            }
            if (G !== null) var fe = !0;
            else {
              var Ve = o(D);
              Ve !== null && et(Ze, Ve.startTime - Be), (fe = !1);
            }
            return fe;
          } finally {
            (G = null), (se = Se), (Z = !1);
          }
        }
        var Et = !1,
          Qe = null,
          fn = -1,
          jn = 5,
          Fn = -1;
        function un() {
          return !(r.unstable_now() - Fn < jn);
        }
        function Kt() {
          if (Qe !== null) {
            var ye = r.unstable_now();
            Fn = ye;
            var Be = !0;
            try {
              Be = Qe(!0, ye);
            } finally {
              Be ? xt() : ((Et = !1), (Qe = null));
            }
          } else Et = !1;
        }
        var xt;
        if (typeof te == "function")
          xt = function () {
            te(Kt);
          };
        else if (typeof MessageChannel < "u") {
          var on = new MessageChannel(),
            dn = on.port2;
          (on.port1.onmessage = Kt),
            (xt = function () {
              dn.postMessage(null);
            });
        } else
          xt = function () {
            J(Kt, 0);
          };
        function bt(ye) {
          (Qe = ye), Et || ((Et = !0), xt());
        }
        function et(ye, Be) {
          fn = J(function () {
            ye(r.unstable_now());
          }, Be);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (ye) {
            ye.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            ie || Z || ((ie = !0), bt(Ge));
          }),
          (r.unstable_forceFrameRate = function (ye) {
            0 > ye || 125 < ye
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (jn = 0 < ye ? Math.floor(1e3 / ye) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return se;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return o(_);
          }),
          (r.unstable_next = function (ye) {
            switch (se) {
              case 1:
              case 2:
              case 3:
                var Be = 3;
                break;
              default:
                Be = se;
            }
            var Se = se;
            se = Be;
            try {
              return ye();
            } finally {
              se = Se;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (ye, Be) {
            switch (ye) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                ye = 3;
            }
            var Se = se;
            se = ye;
            try {
              return Be();
            } finally {
              se = Se;
            }
          }),
          (r.unstable_scheduleCallback = function (ye, Be, Se) {
            var N = r.unstable_now();
            switch (
              (typeof Se == "object" && Se !== null
                ? ((Se = Se.delay),
                  (Se = typeof Se == "number" && 0 < Se ? N + Se : N))
                : (Se = N),
              ye)
            ) {
              case 1:
                var ee = -1;
                break;
              case 2:
                ee = 250;
                break;
              case 5:
                ee = 1073741823;
                break;
              case 4:
                ee = 1e4;
                break;
              default:
                ee = 5e3;
            }
            return (
              (ee = Se + ee),
              (ye = {
                id: X++,
                callback: Be,
                priorityLevel: ye,
                startTime: Se,
                expirationTime: ee,
                sortIndex: -1,
              }),
              Se > N
                ? ((ye.sortIndex = Se),
                  i(D, ye),
                  o(_) === null &&
                    ye === o(D) &&
                    (V ? (_e(fn), (fn = -1)) : (V = !0), et(Ze, Se - N)))
                : ((ye.sortIndex = ee),
                  i(_, ye),
                  ie || Z || ((ie = !0), bt(Ge))),
              ye
            );
          }),
          (r.unstable_shouldYield = un),
          (r.unstable_wrapCallback = function (ye) {
            var Be = se;
            return function () {
              var Se = se;
              se = Be;
              try {
                return ye.apply(this, arguments);
              } finally {
                se = Se;
              }
            };
          });
      })(Bc)),
    Bc
  );
}
var Up;
function ty() {
  return Up || ((Up = 1), (Uc.exports = ey())), Uc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp;
function ny() {
  if (Bp) return er;
  Bp = 1;
  var r = Zu(),
    i = ty();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    p = {};
  function m(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (p[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var R = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _ = Object.prototype.hasOwnProperty,
    D =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    X = {},
    G = {};
  function se(e) {
    return _.call(G, e)
      ? !0
      : _.call(X, e)
        ? !1
        : D.test(e)
          ? (G[e] = !0)
          : ((X[e] = !0), !1);
  }
  function Z(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ie(e, t, n, s) {
    if (t === null || typeof t > "u" || Z(e, t, n, s)) return !0;
    if (s) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function V(e, t, n, s, u, f, y) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = u),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y);
  }
  var J = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      J[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      J[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        J[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      J[e] = new V(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        J[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      J[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      J[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      J[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      J[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var _e = /[\-:]([a-z])/g;
  function te(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(_e, te);
      J[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(_e, te);
        J[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(_e, te);
      J[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      J[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (J.xlinkHref = new V(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      J[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function me(e, t, n, s) {
    var u = J.hasOwnProperty(t) ? J[t] : null;
    (u !== null
      ? u.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (ie(t, n, u, s) && (n = null),
      s || u === null
        ? se(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : u.mustUseProperty
          ? (e[u.propertyName] = n === null ? (u.type === 3 ? !1 : "") : n)
          : ((t = u.attributeName),
            (s = u.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (n = u === 3 || (u === 4 && n === !0) ? "" : "" + n),
                s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var Ze = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ge = Symbol.for("react.element"),
    Et = Symbol.for("react.portal"),
    Qe = Symbol.for("react.fragment"),
    fn = Symbol.for("react.strict_mode"),
    jn = Symbol.for("react.profiler"),
    Fn = Symbol.for("react.provider"),
    un = Symbol.for("react.context"),
    Kt = Symbol.for("react.forward_ref"),
    xt = Symbol.for("react.suspense"),
    on = Symbol.for("react.suspense_list"),
    dn = Symbol.for("react.memo"),
    bt = Symbol.for("react.lazy"),
    et = Symbol.for("react.offscreen"),
    ye = Symbol.iterator;
  function Be(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ye && e[ye]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Se = Object.assign,
    N;
  function ee(e) {
    if (N === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        N = (t && t[1]) || "";
      }
    return (
      `
` +
      N +
      e
    );
  }
  var fe = !1;
  function Ve(e, t) {
    if (!e || fe) return "";
    fe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch ($) {
            var s = $;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch ($) {
            s = $;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch ($) {
          s = $;
        }
        e();
      }
    } catch ($) {
      if ($ && s && typeof $.stack == "string") {
        for (
          var u = $.stack.split(`
`),
            f = s.stack.split(`
`),
            y = u.length - 1,
            O = f.length - 1;
          1 <= y && 0 <= O && u[y] !== f[O];

        )
          O--;
        for (; 1 <= y && 0 <= O; y--, O--)
          if (u[y] !== f[O]) {
            if (y !== 1 || O !== 1)
              do
                if ((y--, O--, 0 > O || u[y] !== f[O])) {
                  var P =
                    `
` + u[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", e.displayName)),
                    P
                  );
                }
              while (1 <= y && 0 <= O);
            break;
          }
      }
    } finally {
      (fe = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? ee(e) : "";
  }
  function Je(e) {
    switch (e.tag) {
      case 5:
        return ee(e.type);
      case 16:
        return ee("Lazy");
      case 13:
        return ee("Suspense");
      case 19:
        return ee("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ve(e.type, !1)), e;
      case 11:
        return (e = Ve(e.type.render, !1)), e;
      case 1:
        return (e = Ve(e.type, !0)), e;
      default:
        return "";
    }
  }
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Qe:
        return "Fragment";
      case Et:
        return "Portal";
      case jn:
        return "Profiler";
      case fn:
        return "StrictMode";
      case xt:
        return "Suspense";
      case on:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case un:
          return (e.displayName || "Context") + ".Consumer";
        case Fn:
          return (e._context.displayName || "Context") + ".Provider";
        case Kt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dn:
          return (
            (t = e.displayName || null), t !== null ? t : be(e.type) || "Memo"
          );
        case bt:
          (t = e._payload), (e = e._init);
          try {
            return be(e(t));
          } catch {}
      }
    return null;
  }
  function ut(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return be(t);
      case 8:
        return t === fn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ot(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function nt(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function _t(e) {
    var t = nt(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        f = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            (s = "" + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function sn(e) {
    e._valueTracker || (e._valueTracker = _t(e));
  }
  function _r(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      s = "";
    return (
      e && (s = nt(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Un(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function $n(e, t) {
    var n = t.checked;
    return Se({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Cn(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (n = ot(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function L(e, t) {
    (t = t.checked), t != null && me(e, "checked", t, !1);
  }
  function E(e, t) {
    L(e, t);
    var n = ot(t.value),
      s = t.type;
    if (n != null)
      s === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? w(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && w(e, t.type, ot(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function k(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function w(e, t, n) {
    (t !== "number" || Un(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var x = Array.isArray;
  function q(e, t, n, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        (u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ot(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function H(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Se({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ce(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (x(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ot(n) };
  }
  function Fe(e, t) {
    var n = ot(t.value),
      s = ot(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      s != null && (e.defaultValue = "" + s);
  }
  function Ae(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ue(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function st(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ue(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var rt,
    Rt = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, s, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, s, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          rt = rt || document.createElement("div"),
            rt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = rt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function jt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ht = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    M = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ht).forEach(function (e) {
    M.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ht[t] = Ht[e]);
    });
  });
  function W(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Ht.hasOwnProperty(e) && Ht[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Q(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var s = n.indexOf("--") === 0,
          u = W(n, t[n], s);
        n === "float" && (n = "cssFloat"), s ? e.setProperty(n, u) : (e[n] = u);
      }
  }
  var ae = Se(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Pe(e, t) {
    if (t) {
      if (ae[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function kt(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pt = null;
  function Ke(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ve = null,
    Ee = null,
    we = null;
  function ke(e) {
    if ((e = Xs(e))) {
      if (typeof ve != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = $a(t)), ve(e.stateNode, e.type, t));
    }
  }
  function tt(e) {
    Ee ? (we ? we.push(e) : (we = [e])) : (Ee = e);
  }
  function ht() {
    if (Ee) {
      var e = Ee,
        t = we;
      if (((we = Ee = null), ke(e), t)) for (e = 0; e < t.length; e++) ke(t[e]);
    }
  }
  function ft(e, t) {
    return e(t);
  }
  function Ce() {}
  var Vn = !1;
  function ei(e, t, n) {
    if (Vn) return e(t, n);
    Vn = !0;
    try {
      return ft(e, t, n);
    } finally {
      (Vn = !1), (Ee !== null || we !== null) && (Ce(), ht());
    }
  }
  function Fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = $a(n);
    if (s === null) return null;
    n = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var qo = !1;
  if (R)
    try {
      var Pi = {};
      Object.defineProperty(Pi, "passive", {
        get: function () {
          qo = !0;
        },
      }),
        window.addEventListener("test", Pi, Pi),
        window.removeEventListener("test", Pi, Pi);
    } catch {
      qo = !1;
    }
  function Ra(e, t, n, s, u, f, y, O, P) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var kr = !1,
    or = null,
    $o = !1,
    Rs = null,
    al = {
      onError: function (e) {
        (kr = !0), (or = e);
      },
    };
  function io(e, t, n, s, u, f, y, O, P) {
    (kr = !1), (or = null), Ra.apply(al, arguments);
  }
  function ul(e, t, n, s, u, f, y, O, P) {
    if ((io.apply(this, arguments), kr)) {
      if (kr) {
        var $ = or;
        (kr = !1), (or = null);
      } else throw Error(o(198));
      $o || (($o = !0), (Rs = $));
    }
  }
  function Ur(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ps(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function sr(e) {
    if (Ur(e) !== e) throw Error(o(188));
  }
  function fr(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Ur(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((s = u.return), s !== null)) {
          n = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === n) return sr(u), e;
          if (f === s) return sr(u), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== s.return) (n = u), (s = f);
      else {
        for (var y = !1, O = u.child; O; ) {
          if (O === n) {
            (y = !0), (n = u), (s = f);
            break;
          }
          if (O === s) {
            (y = !0), (s = u), (n = f);
            break;
          }
          O = O.sibling;
        }
        if (!y) {
          for (O = f.child; O; ) {
            if (O === n) {
              (y = !0), (n = f), (s = u);
              break;
            }
            if (O === s) {
              (y = !0), (s = f), (n = u);
              break;
            }
            O = O.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (n.alternate !== s) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function ar(e) {
    return (e = fr(e)), e !== null ? Vo(e) : null;
  }
  function Vo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Vo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ti = i.unstable_scheduleCallback,
    oo = i.unstable_cancelCallback,
    Ts = i.unstable_shouldYield,
    Go = i.unstable_requestPaint,
    Bt = i.unstable_now,
    Pa = i.unstable_getCurrentPriorityLevel,
    As = i.unstable_ImmediatePriority,
    Ns = i.unstable_UserBlockingPriority,
    Qo = i.unstable_NormalPriority,
    Ta = i.unstable_LowPriority,
    Aa = i.unstable_IdlePriority,
    so = null,
    On = null;
  function Ai(e) {
    if (On && typeof On.onCommitFiberRoot == "function")
      try {
        On.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Bn = Math.clz32 ? Math.clz32 : Na,
    Br = Math.log,
    ao = Math.LN2;
  function Na(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Br(e) / ao) | 0)) | 0;
  }
  var ti = 64,
    uo = 4194304;
  function ni(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      y = n & 268435455;
    if (y !== 0) {
      var O = y & ~u;
      O !== 0 ? (s = ni(O)) : ((f &= y), f !== 0 && (s = ni(f)));
    } else (y = n & ~u), y !== 0 ? (s = ni(y)) : f !== 0 && (s = ni(f));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & u) === 0 &&
      ((u = s & -s), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (n = 31 - Bn(t)), (u = 1 << n), (s |= e[n]), (t &= ~u);
    return s;
  }
  function Da(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ll(e, t) {
    for (
      var n = e.suspendedLanes,
        s = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes;
      0 < f;

    ) {
      var y = 31 - Bn(f),
        O = 1 << y,
        P = u[y];
      P === -1
        ? ((O & n) === 0 || (O & s) !== 0) && (u[y] = Da(O, t))
        : P <= t && (e.expiredLanes |= O),
        (f &= ~O);
    }
  }
  function bn(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Rn() {
    var e = ti;
    return (ti <<= 1), (ti & 4194240) === 0 && (ti = 64), e;
  }
  function Ds(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function lo(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Bn(t)),
      (e[t] = n);
  }
  function La(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var u = 31 - Bn(n),
        f = 1 << u;
      (t[u] = 0), (s[u] = -1), (e[u] = -1), (n &= ~f);
    }
  }
  function Ls(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var s = 31 - Bn(n),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (n &= ~u);
    }
  }
  var gt = 0;
  function ri(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ms,
    co,
    ii,
    oi,
    js,
    Ni = !1,
    fo = [],
    Ir = null,
    xr = null,
    Cr = null,
    si = new Map(),
    zr = new Map(),
    Hr = [],
    dr =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function po(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ir = null;
        break;
      case "dragenter":
      case "dragleave":
        xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Cr = null;
        break;
      case "pointerover":
      case "pointerout":
        si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zr.delete(t.pointerId);
    }
  }
  function Di(e, t, n, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: s,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = Xs(t)), t !== null && co(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function cl(e, t, n, s, u) {
    switch (t) {
      case "focusin":
        return (Ir = Di(Ir, e, t, n, s, u)), !0;
      case "dragenter":
        return (xr = Di(xr, e, t, n, s, u)), !0;
      case "mouseover":
        return (Cr = Di(Cr, e, t, n, s, u)), !0;
      case "pointerover":
        var f = u.pointerId;
        return si.set(f, Di(si.get(f) || null, e, t, n, s, u)), !0;
      case "gotpointercapture":
        return (
          (f = u.pointerId), zr.set(f, Di(zr.get(f) || null, e, t, n, s, u)), !0
        );
    }
    return !1;
  }
  function Fs(e) {
    var t = Io(e.target);
    if (t !== null) {
      var n = Ur(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ps(n)), t !== null)) {
            (e.blockedOn = t),
              js(e.priority, function () {
                ii(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ho(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        (Pt = s), n.target.dispatchEvent(s), (Pt = null);
      } else return (t = Xs(n)), t !== null && co(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Jo(e, t, n) {
    ho(e) && n.delete(t);
  }
  function go() {
    (Ni = !1),
      Ir !== null && ho(Ir) && (Ir = null),
      xr !== null && ho(xr) && (xr = null),
      Cr !== null && ho(Cr) && (Cr = null),
      si.forEach(Jo),
      zr.forEach(Jo);
  }
  function mo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ni ||
        ((Ni = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, go)));
  }
  function Li(e) {
    function t(u) {
      return mo(u, e);
    }
    if (0 < fo.length) {
      mo(fo[0], e);
      for (var n = 1; n < fo.length; n++) {
        var s = fo[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Ir !== null && mo(Ir, e),
        xr !== null && mo(xr, e),
        Cr !== null && mo(Cr, e),
        si.forEach(t),
        zr.forEach(t),
        n = 0;
      n < Hr.length;
      n++
    )
      (s = Hr[n]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Hr.length && ((n = Hr[0]), n.blockedOn === null); )
      Fs(n), n.blockedOn === null && Hr.shift();
  }
  var ai = Ze.ReactCurrentBatchConfig,
    vo = !0;
  function fl(e, t, n, s) {
    var u = gt,
      f = ai.transition;
    ai.transition = null;
    try {
      (gt = 1), Us(e, t, n, s);
    } finally {
      (gt = u), (ai.transition = f);
    }
  }
  function dl(e, t, n, s) {
    var u = gt,
      f = ai.transition;
    ai.transition = null;
    try {
      (gt = 4), Us(e, t, n, s);
    } finally {
      (gt = u), (ai.transition = f);
    }
  }
  function Us(e, t, n, s) {
    if (vo) {
      var u = ui(e, t, n, s);
      if (u === null) Sl(e, t, s, ne, n), po(e, s);
      else if (cl(u, e, t, n, s)) s.stopPropagation();
      else if ((po(e, s), t & 4 && -1 < dr.indexOf(e))) {
        for (; u !== null; ) {
          var f = Xs(u);
          if (
            (f !== null && Ms(f),
            (f = ui(e, t, n, s)),
            f === null && Sl(e, t, s, ne, n),
            f === u)
          )
            break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else Sl(e, t, s, null, n);
    }
  }
  var ne = null;
  function ui(e, t, n, s) {
    if (((ne = null), (e = Ke(s)), (e = Io(e)), e !== null))
      if (((t = Ur(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ps(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ne = e), null;
  }
  function Bs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Pa()) {
          case As:
            return 1;
          case Ns:
            return 4;
          case Qo:
          case Ta:
            return 16;
          case Aa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ct = null,
    je = null,
    Ko = null;
  function Ma() {
    if (Ko) return Ko;
    var e,
      t = je,
      n = t.length,
      s,
      u = "value" in Ct ? Ct.value : Ct.textContent,
      f = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var y = n - e;
    for (s = 1; s <= y && t[n - s] === u[f - s]; s++);
    return (Ko = u.slice(e, 1 < s ? 1 - s : void 0));
  }
  function qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xo() {
    return !0;
  }
  function Yo() {
    return !1;
  }
  function Pn(e) {
    function t(n, s, u, f, y) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var O in e)
        e.hasOwnProperty(O) && ((n = e[O]), (this[O] = n ? n(f) : f[O]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Xo
          : Yo),
        (this.isPropagationStopped = Yo),
        this
      );
    }
    return (
      Se(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xo));
        },
        persist: function () {},
        isPersistent: Xo,
      }),
      t
    );
  }
  var li = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zo = Pn(li),
    ci = Se({}, li, { view: 0, detail: 0 }),
    yo = Pn(ci),
    pr,
    Ws,
    wo,
    So = Se({}, ci, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ns,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wo &&
              (wo && e.type === "mousemove"
                ? ((pr = e.screenX - wo.screenX), (Ws = e.screenY - wo.screenY))
                : (Ws = pr = 0),
              (wo = e)),
            pr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ws;
      },
    }),
    Or = Pn(So),
    ja = Se({}, So, { dataTransfer: 0 }),
    Fa = Pn(ja),
    hr = Se({}, ci, { relatedTarget: 0 }),
    zs = Pn(hr),
    es = Se({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Eo = Pn(es),
    pl = Se({}, li, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hl = Pn(pl),
    fi = Se({}, li, { data: 0 }),
    Hs = Pn(fi),
    gl = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ml = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Mi = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ts(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Mi[e])
        ? !!t[e]
        : !1;
  }
  function ns() {
    return ts;
  }
  var $r = Se({}, ci, {
      key: function (e) {
        if (e.key) {
          var t = gl[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ml[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ns,
      charCode: function (e) {
        return e.type === "keypress" ? qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    qs = Pn($r),
    vl = Se({}, So, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    rs = Pn(vl),
    is = Se({}, ci, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ns,
    }),
    Ua = Pn(is),
    os = Se({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ba = Pn(os),
    di = Se({}, So, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Tt = Pn(di),
    a = [9, 13, 27, 32],
    c = R && "CompositionEvent" in window,
    d = null;
  R && "documentMode" in document && (d = document.documentMode);
  var h = R && "TextEvent" in window && !d,
    g = R && (!c || (d && 8 < d && 11 >= d)),
    I = " ",
    S = !1;
  function C(e, t) {
    switch (e) {
      case "keyup":
        return a.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function T(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var U = !1;
  function b(e, t) {
    switch (e) {
      case "compositionend":
        return T(t);
      case "keypress":
        return t.which !== 32 ? null : ((S = !0), I);
      case "textInput":
        return (e = t.data), e === I && S ? null : e;
      default:
        return null;
    }
  }
  function j(e, t) {
    if (U)
      return e === "compositionend" || (!c && C(e, t))
        ? ((e = Ma()), (Ko = je = Ct = null), (U = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return g && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var K = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function z(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!K[e.type] : t === "textarea";
  }
  function Y(e, t, n, s) {
    tt(s),
      (t = za(t, "onChange")),
      0 < t.length &&
        ((n = new Zo("onChange", "change", null, n, s)),
        e.push({ event: n, listeners: t }));
  }
  var ge = null,
    Le = null;
  function de(e) {
    en(e, 0);
  }
  function Ie(e) {
    var t = cs(e);
    if (_r(t)) return e;
  }
  function Ue(e, t) {
    if (e === "change") return t;
  }
  var qe = !1;
  if (R) {
    var lt;
    if (R) {
      var Xe = "oninput" in document;
      if (!Xe) {
        var ct = document.createElement("div");
        ct.setAttribute("oninput", "return;"),
          (Xe = typeof ct.oninput == "function");
      }
      lt = Xe;
    } else lt = !1;
    qe = lt && (!document.documentMode || 9 < document.documentMode);
  }
  function mt() {
    ge && (ge.detachEvent("onpropertychange", At), (Le = ge = null));
  }
  function At(e) {
    if (e.propertyName === "value" && Ie(Le)) {
      var t = [];
      Y(t, Le, e, Ke(e)), ei(de, t);
    }
  }
  function It(e, t, n) {
    e === "focusin"
      ? (mt(), (ge = t), (Le = n), ge.attachEvent("onpropertychange", At))
      : e === "focusout" && mt();
  }
  function $e(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ie(Le);
  }
  function yt(e, t) {
    if (e === "click") return Ie(t);
  }
  function Zt(e, t) {
    if (e === "input" || e === "change") return Ie(t);
  }
  function pn(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == "function" ? Object.is : pn;
  function wt(e, t) {
    if (Nt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var u = n[s];
      if (!_.call(t, u) || !Nt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function qt(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hn(e, t) {
    var n = qt(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (((s = e + n.textContent.length), e <= t && s >= t))
          return { node: n, offset: t - e };
        e = s;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qt(n);
    }
  }
  function $t(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? $t(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ot() {
    for (var e = window, t = Un(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Un(e.document);
    }
    return t;
  }
  function it(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function dt(e) {
    var t = Ot(),
      n = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      $t(n.ownerDocument.documentElement, n)
    ) {
      if (s !== null && it(n)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = n.textContent.length,
            f = Math.min(s.start, u);
          (s = s.end === void 0 ? f : Math.min(s.end, u)),
            !e.extend && f > s && ((u = s), (s = f), (f = u)),
            (u = hn(n, f));
          var y = hn(n, s);
          u &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > s
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Xt = R && "documentMode" in document && 11 >= document.documentMode,
    Wt = null,
    Wn = null,
    Gn = null,
    zn = !1;
  function br(e, t, n) {
    var s =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zn ||
      Wt == null ||
      Wt !== Un(s) ||
      ((s = Wt),
      "selectionStart" in s && it(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Gn && wt(Gn, s)) ||
        ((Gn = s),
        (s = za(Wn, "onSelect")),
        0 < s.length &&
          ((t = new Zo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: s }),
          (t.target = Wt))));
  }
  function Vt(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var gr = {
      animationend: Vt("Animation", "AnimationEnd"),
      animationiteration: Vt("Animation", "AnimationIteration"),
      animationstart: Vt("Animation", "AnimationStart"),
      transitionend: Vt("Transition", "TransitionEnd"),
    },
    Sn = {},
    _o = {};
  R &&
    ((_o = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gr.animationend.animation,
      delete gr.animationiteration.animation,
      delete gr.animationstart.animation),
    "TransitionEvent" in window || delete gr.transitionend.transition);
  function pi(e) {
    if (Sn[e]) return Sn[e];
    if (!gr[e]) return e;
    var t = gr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in _o) return (Sn[e] = t[n]);
    return e;
  }
  var Tn = pi("animationend"),
    gn = pi("animationiteration"),
    Vr = pi("animationstart"),
    $s = pi("transitionend"),
    ss = new Map(),
    as =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rr(e, t) {
    ss.set(e, t), m(t, [e]);
  }
  for (var Qn = 0; Qn < as.length; Qn++) {
    var ji = as[Qn],
      yl = ji.toLowerCase(),
      Vs = ji[0].toUpperCase() + ji.slice(1);
    Rr(yl, "on" + Vs);
  }
  Rr(Tn, "onAnimationEnd"),
    Rr(gn, "onAnimationIteration"),
    Rr(Vr, "onAnimationStart"),
    Rr("dblclick", "onDoubleClick"),
    Rr("focusin", "onFocus"),
    Rr("focusout", "onBlur"),
    Rr($s, "onTransitionEnd"),
    v("onMouseEnter", ["mouseout", "mouseover"]),
    v("onMouseLeave", ["mouseout", "mouseover"]),
    v("onPointerEnter", ["pointerout", "pointerover"]),
    v("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ko = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Gr),
    );
  function Gs(e, t, n) {
    var s = e.type || "unknown-event";
    (e.currentTarget = n), ul(s, t, void 0, e), (e.currentTarget = null);
  }
  function en(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n],
        u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = s.length - 1; 0 <= y; y--) {
            var O = s[y],
              P = O.instance,
              $ = O.currentTarget;
            if (((O = O.listener), P !== f && u.isPropagationStopped()))
              break e;
            Gs(u, O, $), (f = P);
          }
        else
          for (y = 0; y < s.length; y++) {
            if (
              ((O = s[y]),
              (P = O.instance),
              ($ = O.currentTarget),
              (O = O.listener),
              P !== f && u.isPropagationStopped())
            )
              break e;
            Gs(u, O, $), (f = P);
          }
      }
    }
    if ($o) throw ((e = Rs), ($o = !1), (Rs = null), e);
  }
  function St(e, t) {
    var n = t[Cl];
    n === void 0 && (n = t[Cl] = new Set());
    var s = e + "__bubble";
    n.has(s) || (wf(t, e, 2, !1), n.add(s));
  }
  function wl(e, t, n) {
    var s = 0;
    t && (s |= 4), wf(n, e, s, t);
  }
  var Wa = "_reactListening" + Math.random().toString(36).slice(2);
  function Qs(e) {
    if (!e[Wa]) {
      (e[Wa] = !0),
        l.forEach(function (n) {
          n !== "selectionchange" && (ko.has(n) || wl(n, !1, e), wl(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wa] || ((t[Wa] = !0), wl("selectionchange", !1, t));
    }
  }
  function wf(e, t, n, s) {
    switch (Bs(t)) {
      case 1:
        var u = fl;
        break;
      case 4:
        u = dl;
        break;
      default:
        u = Us;
    }
    (n = u.bind(null, t, n, e)),
      (u = void 0),
      !qo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      s
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1);
  }
  function Sl(e, t, n, s, u) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var O = s.stateNode.containerInfo;
          if (O === u || (O.nodeType === 8 && O.parentNode === u)) break;
          if (y === 4)
            for (y = s.return; y !== null; ) {
              var P = y.tag;
              if (
                (P === 3 || P === 4) &&
                ((P = y.stateNode.containerInfo),
                P === u || (P.nodeType === 8 && P.parentNode === u))
              )
                return;
              y = y.return;
            }
          for (; O !== null; ) {
            if (((y = Io(O)), y === null)) return;
            if (((P = y.tag), P === 5 || P === 6)) {
              s = f = y;
              continue e;
            }
            O = O.parentNode;
          }
        }
        s = s.return;
      }
    ei(function () {
      var $ = f,
        oe = Ke(n),
        le = [];
      e: {
        var re = ss.get(e);
        if (re !== void 0) {
          var xe = Zo,
            Te = e;
          switch (e) {
            case "keypress":
              if (qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              xe = qs;
              break;
            case "focusin":
              (Te = "focus"), (xe = zs);
              break;
            case "focusout":
              (Te = "blur"), (xe = zs);
              break;
            case "beforeblur":
            case "afterblur":
              xe = zs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = Or;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = Fa;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = Ua;
              break;
            case Tn:
            case gn:
            case Vr:
              xe = Eo;
              break;
            case $s:
              xe = Ba;
              break;
            case "scroll":
              xe = yo;
              break;
            case "wheel":
              xe = Tt;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = hl;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = rs;
          }
          var Ne = (t & 4) !== 0,
            tn = !Ne && e === "scroll",
            F = Ne ? (re !== null ? re + "Capture" : null) : re;
          Ne = [];
          for (var A = $, B; A !== null; ) {
            B = A;
            var he = B.stateNode;
            if (
              (B.tag === 5 &&
                he !== null &&
                ((B = he),
                F !== null &&
                  ((he = Fr(A, F)), he != null && Ne.push(Js(A, he, B)))),
              tn)
            )
              break;
            A = A.return;
          }
          0 < Ne.length &&
            ((re = new xe(re, Te, null, n, oe)),
            le.push({ event: re, listeners: Ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((re = e === "mouseover" || e === "pointerover"),
            (xe = e === "mouseout" || e === "pointerout"),
            re &&
              n !== Pt &&
              (Te = n.relatedTarget || n.fromElement) &&
              (Io(Te) || Te[hi]))
          )
            break e;
          if (
            (xe || re) &&
            ((re =
              oe.window === oe
                ? oe
                : (re = oe.ownerDocument)
                  ? re.defaultView || re.parentWindow
                  : window),
            xe
              ? ((Te = n.relatedTarget || n.toElement),
                (xe = $),
                (Te = Te ? Io(Te) : null),
                Te !== null &&
                  ((tn = Ur(Te)),
                  Te !== tn || (Te.tag !== 5 && Te.tag !== 6)) &&
                  (Te = null))
              : ((xe = null), (Te = $)),
            xe !== Te)
          ) {
            if (
              ((Ne = Or),
              (he = "onMouseLeave"),
              (F = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ne = rs),
                (he = "onPointerLeave"),
                (F = "onPointerEnter"),
                (A = "pointer")),
              (tn = xe == null ? re : cs(xe)),
              (B = Te == null ? re : cs(Te)),
              (re = new Ne(he, A + "leave", xe, n, oe)),
              (re.target = tn),
              (re.relatedTarget = B),
              (he = null),
              Io(oe) === $ &&
                ((Ne = new Ne(F, A + "enter", Te, n, oe)),
                (Ne.target = B),
                (Ne.relatedTarget = tn),
                (he = Ne)),
              (tn = he),
              xe && Te)
            )
              t: {
                for (Ne = xe, F = Te, A = 0, B = Ne; B; B = us(B)) A++;
                for (B = 0, he = F; he; he = us(he)) B++;
                for (; 0 < A - B; ) (Ne = us(Ne)), A--;
                for (; 0 < B - A; ) (F = us(F)), B--;
                for (; A--; ) {
                  if (Ne === F || (F !== null && Ne === F.alternate)) break t;
                  (Ne = us(Ne)), (F = us(F));
                }
                Ne = null;
              }
            else Ne = null;
            xe !== null && Sf(le, re, xe, Ne, !1),
              Te !== null && tn !== null && Sf(le, tn, Te, Ne, !0);
          }
        }
        e: {
          if (
            ((re = $ ? cs($) : window),
            (xe = re.nodeName && re.nodeName.toLowerCase()),
            xe === "select" || (xe === "input" && re.type === "file"))
          )
            var Me = Ue;
          else if (z(re))
            if (qe) Me = Zt;
            else {
              Me = $e;
              var We = It;
            }
          else
            (xe = re.nodeName) &&
              xe.toLowerCase() === "input" &&
              (re.type === "checkbox" || re.type === "radio") &&
              (Me = yt);
          if (Me && (Me = Me(e, $))) {
            Y(le, Me, n, oe);
            break e;
          }
          We && We(e, re, $),
            e === "focusout" &&
              (We = re._wrapperState) &&
              We.controlled &&
              re.type === "number" &&
              w(re, "number", re.value);
        }
        switch (((We = $ ? cs($) : window), e)) {
          case "focusin":
            (z(We) || We.contentEditable === "true") &&
              ((Wt = We), (Wn = $), (Gn = null));
            break;
          case "focusout":
            Gn = Wn = Wt = null;
            break;
          case "mousedown":
            zn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zn = !1), br(le, n, oe);
            break;
          case "selectionchange":
            if (Xt) break;
          case "keydown":
          case "keyup":
            br(le, n, oe);
        }
        var ze;
        if (c)
          e: {
            switch (e) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          U
            ? C(e, n) && (Ye = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ye = "onCompositionStart");
        Ye &&
          (g &&
            n.locale !== "ko" &&
            (U || Ye !== "onCompositionStart"
              ? Ye === "onCompositionEnd" && U && (ze = Ma())
              : ((Ct = oe),
                (je = "value" in Ct ? Ct.value : Ct.textContent),
                (U = !0))),
          (We = za($, Ye)),
          0 < We.length &&
            ((Ye = new Hs(Ye, e, null, n, oe)),
            le.push({ event: Ye, listeners: We }),
            ze
              ? (Ye.data = ze)
              : ((ze = T(n)), ze !== null && (Ye.data = ze)))),
          (ze = h ? b(e, n) : j(e, n)) &&
            (($ = za($, "onBeforeInput")),
            0 < $.length &&
              ((oe = new Hs("onBeforeInput", "beforeinput", null, n, oe)),
              le.push({ event: oe, listeners: $ }),
              (oe.data = ze)));
      }
      en(le, t);
    });
  }
  function Js(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function za(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Fr(e, n)),
        f != null && s.unshift(Js(e, f, u)),
        (f = Fr(e, t)),
        f != null && s.push(Js(e, f, u))),
        (e = e.return);
    }
    return s;
  }
  function us(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sf(e, t, n, s, u) {
    for (var f = t._reactName, y = []; n !== null && n !== s; ) {
      var O = n,
        P = O.alternate,
        $ = O.stateNode;
      if (P !== null && P === s) break;
      O.tag === 5 &&
        $ !== null &&
        ((O = $),
        u
          ? ((P = Fr(n, f)), P != null && y.unshift(Js(n, P, O)))
          : u || ((P = Fr(n, f)), P != null && y.push(Js(n, P, O)))),
        (n = n.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var hg = /\r\n?/g,
    gg = /\u0000|\uFFFD/g;
  function Ef(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        hg,
        `
`,
      )
      .replace(gg, "");
  }
  function Ha(e, t, n) {
    if (((t = Ef(t)), Ef(e) !== t && n)) throw Error(o(425));
  }
  function qa() {}
  var El = null,
    _l = null;
  function kl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Il = typeof setTimeout == "function" ? setTimeout : void 0,
    mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _f = typeof Promise == "function" ? Promise : void 0,
    vg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _f < "u"
          ? function (e) {
              return _f.resolve(null).then(e).catch(yg);
            }
          : Il;
  function yg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xl(e, t) {
    var n = t,
      s = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (s === 0) {
            e.removeChild(u), Li(t);
            return;
          }
          s--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
      n = u;
    } while (n);
    Li(t);
  }
  function Fi(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function kf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ls = Math.random().toString(36).slice(2),
    Qr = "__reactFiber$" + ls,
    Ks = "__reactProps$" + ls,
    hi = "__reactContainer$" + ls,
    Cl = "__reactEvents$" + ls,
    wg = "__reactListeners$" + ls,
    Sg = "__reactHandles$" + ls;
  function Io(e) {
    var t = e[Qr];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[hi] || n[Qr])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = kf(e); e !== null; ) {
            if ((n = e[Qr])) return n;
            e = kf(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Xs(e) {
    return (
      (e = e[Qr] || e[hi]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function cs(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function $a(e) {
    return e[Ks] || null;
  }
  var Ol = [],
    fs = -1;
  function Ui(e) {
    return { current: e };
  }
  function Ft(e) {
    0 > fs || ((e.current = Ol[fs]), (Ol[fs] = null), fs--);
  }
  function Dt(e, t) {
    fs++, (Ol[fs] = e.current), (e.current = t);
  }
  var Bi = {},
    An = Ui(Bi),
    Jn = Ui(!1),
    xo = Bi;
  function ds(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Bi;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in n) u[f] = t[f];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Kn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Va() {
    Ft(Jn), Ft(An);
  }
  function If(e, t, n) {
    if (An.current !== Bi) throw Error(o(168));
    Dt(An, t), Dt(Jn, n);
  }
  function xf(e, t, n) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return n;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(o(108, ut(e) || "Unknown", u));
    return Se({}, n, s);
  }
  function Ga(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Bi),
      (xo = An.current),
      Dt(An, e),
      Dt(Jn, Jn.current),
      !0
    );
  }
  function Cf(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    n
      ? ((e = xf(e, t, xo)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        Ft(Jn),
        Ft(An),
        Dt(An, e))
      : Ft(Jn),
      Dt(Jn, n);
  }
  var gi = null,
    Qa = !1,
    bl = !1;
  function Of(e) {
    gi === null ? (gi = [e]) : gi.push(e);
  }
  function Eg(e) {
    (Qa = !0), Of(e);
  }
  function Wi() {
    if (!bl && gi !== null) {
      bl = !0;
      var e = 0,
        t = gt;
      try {
        var n = gi;
        for (gt = 1; e < n.length; e++) {
          var s = n[e];
          do s = s(!0);
          while (s !== null);
        }
        (gi = null), (Qa = !1);
      } catch (u) {
        throw (gi !== null && (gi = gi.slice(e + 1)), Ti(As, Wi), u);
      } finally {
        (gt = t), (bl = !1);
      }
    }
    return null;
  }
  var ps = [],
    hs = 0,
    Ja = null,
    Ka = 0,
    mr = [],
    vr = 0,
    Co = null,
    mi = 1,
    vi = "";
  function Oo(e, t) {
    (ps[hs++] = Ka), (ps[hs++] = Ja), (Ja = e), (Ka = t);
  }
  function bf(e, t, n) {
    (mr[vr++] = mi), (mr[vr++] = vi), (mr[vr++] = Co), (Co = e);
    var s = mi;
    e = vi;
    var u = 32 - Bn(s) - 1;
    (s &= ~(1 << u)), (n += 1);
    var f = 32 - Bn(t) + u;
    if (30 < f) {
      var y = u - (u % 5);
      (f = (s & ((1 << y) - 1)).toString(32)),
        (s >>= y),
        (u -= y),
        (mi = (1 << (32 - Bn(t) + u)) | (n << u) | s),
        (vi = f + e);
    } else (mi = (1 << f) | (n << u) | s), (vi = e);
  }
  function Rl(e) {
    e.return !== null && (Oo(e, 1), bf(e, 1, 0));
  }
  function Pl(e) {
    for (; e === Ja; )
      (Ja = ps[--hs]), (ps[hs] = null), (Ka = ps[--hs]), (ps[hs] = null);
    for (; e === Co; )
      (Co = mr[--vr]),
        (mr[vr] = null),
        (vi = mr[--vr]),
        (mr[vr] = null),
        (mi = mr[--vr]),
        (mr[vr] = null);
  }
  var ur = null,
    lr = null,
    zt = !1,
    Pr = null;
  function Rf(e, t) {
    var n = Er(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Pf(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ur = e), (lr = Fi(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ur = e), (lr = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Co !== null ? { id: mi, overflow: vi } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Er(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ur = e),
              (lr = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Al(e) {
    if (zt) {
      var t = lr;
      if (t) {
        var n = t;
        if (!Pf(e, t)) {
          if (Tl(e)) throw Error(o(418));
          t = Fi(n.nextSibling);
          var s = ur;
          t && Pf(e, t)
            ? Rf(s, n)
            : ((e.flags = (e.flags & -4097) | 2), (zt = !1), (ur = e));
        }
      } else {
        if (Tl(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (zt = !1), (ur = e);
      }
    }
  }
  function Tf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ur = e;
  }
  function Xa(e) {
    if (e !== ur) return !1;
    if (!zt) return Tf(e), (zt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !kl(e.type, e.memoizedProps))),
      t && (t = lr))
    ) {
      if (Tl(e)) throw (Af(), Error(o(418)));
      for (; t; ) Rf(e, t), (t = Fi(t.nextSibling));
    }
    if ((Tf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lr = Fi(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        lr = null;
      }
    } else lr = ur ? Fi(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Af() {
    for (var e = lr; e; ) e = Fi(e.nextSibling);
  }
  function gs() {
    (lr = ur = null), (zt = !1);
  }
  function Nl(e) {
    Pr === null ? (Pr = [e]) : Pr.push(e);
  }
  var _g = Ze.ReactCurrentBatchConfig;
  function Ys(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var u = s,
          f = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === f
          ? t.ref
          : ((t = function (y) {
              var O = u.refs;
              y === null ? delete O[f] : (O[f] = y);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ya(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Nf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Df(e) {
    function t(F, A) {
      if (e) {
        var B = F.deletions;
        B === null ? ((F.deletions = [A]), (F.flags |= 16)) : B.push(A);
      }
    }
    function n(F, A) {
      if (!e) return null;
      for (; A !== null; ) t(F, A), (A = A.sibling);
      return null;
    }
    function s(F, A) {
      for (F = new Map(); A !== null; )
        A.key !== null ? F.set(A.key, A) : F.set(A.index, A), (A = A.sibling);
      return F;
    }
    function u(F, A) {
      return (F = Ji(F, A)), (F.index = 0), (F.sibling = null), F;
    }
    function f(F, A, B) {
      return (
        (F.index = B),
        e
          ? ((B = F.alternate),
            B !== null
              ? ((B = B.index), B < A ? ((F.flags |= 2), A) : B)
              : ((F.flags |= 2), A))
          : ((F.flags |= 1048576), A)
      );
    }
    function y(F) {
      return e && F.alternate === null && (F.flags |= 2), F;
    }
    function O(F, A, B, he) {
      return A === null || A.tag !== 6
        ? ((A = Ic(B, F.mode, he)), (A.return = F), A)
        : ((A = u(A, B)), (A.return = F), A);
    }
    function P(F, A, B, he) {
      var Me = B.type;
      return Me === Qe
        ? oe(F, A, B.props.children, he, B.key)
        : A !== null &&
            (A.elementType === Me ||
              (typeof Me == "object" &&
                Me !== null &&
                Me.$$typeof === bt &&
                Nf(Me) === A.type))
          ? ((he = u(A, B.props)), (he.ref = Ys(F, A, B)), (he.return = F), he)
          : ((he = _u(B.type, B.key, B.props, null, F.mode, he)),
            (he.ref = Ys(F, A, B)),
            (he.return = F),
            he);
    }
    function $(F, A, B, he) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== B.containerInfo ||
        A.stateNode.implementation !== B.implementation
        ? ((A = xc(B, F.mode, he)), (A.return = F), A)
        : ((A = u(A, B.children || [])), (A.return = F), A);
    }
    function oe(F, A, B, he, Me) {
      return A === null || A.tag !== 7
        ? ((A = Lo(B, F.mode, he, Me)), (A.return = F), A)
        : ((A = u(A, B)), (A.return = F), A);
    }
    function le(F, A, B) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (A = Ic("" + A, F.mode, B)), (A.return = F), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Ge:
            return (
              (B = _u(A.type, A.key, A.props, null, F.mode, B)),
              (B.ref = Ys(F, null, A)),
              (B.return = F),
              B
            );
          case Et:
            return (A = xc(A, F.mode, B)), (A.return = F), A;
          case bt:
            var he = A._init;
            return le(F, he(A._payload), B);
        }
        if (x(A) || Be(A))
          return (A = Lo(A, F.mode, B, null)), (A.return = F), A;
        Ya(F, A);
      }
      return null;
    }
    function re(F, A, B, he) {
      var Me = A !== null ? A.key : null;
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return Me !== null ? null : O(F, A, "" + B, he);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Ge:
            return B.key === Me ? P(F, A, B, he) : null;
          case Et:
            return B.key === Me ? $(F, A, B, he) : null;
          case bt:
            return (Me = B._init), re(F, A, Me(B._payload), he);
        }
        if (x(B) || Be(B)) return Me !== null ? null : oe(F, A, B, he, null);
        Ya(F, B);
      }
      return null;
    }
    function xe(F, A, B, he, Me) {
      if ((typeof he == "string" && he !== "") || typeof he == "number")
        return (F = F.get(B) || null), O(A, F, "" + he, Me);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case Ge:
            return (
              (F = F.get(he.key === null ? B : he.key) || null), P(A, F, he, Me)
            );
          case Et:
            return (
              (F = F.get(he.key === null ? B : he.key) || null), $(A, F, he, Me)
            );
          case bt:
            var We = he._init;
            return xe(F, A, B, We(he._payload), Me);
        }
        if (x(he) || Be(he))
          return (F = F.get(B) || null), oe(A, F, he, Me, null);
        Ya(A, he);
      }
      return null;
    }
    function Te(F, A, B, he) {
      for (
        var Me = null, We = null, ze = A, Ye = (A = 0), yn = null;
        ze !== null && Ye < B.length;
        Ye++
      ) {
        ze.index > Ye ? ((yn = ze), (ze = null)) : (yn = ze.sibling);
        var vt = re(F, ze, B[Ye], he);
        if (vt === null) {
          ze === null && (ze = yn);
          break;
        }
        e && ze && vt.alternate === null && t(F, ze),
          (A = f(vt, A, Ye)),
          We === null ? (Me = vt) : (We.sibling = vt),
          (We = vt),
          (ze = yn);
      }
      if (Ye === B.length) return n(F, ze), zt && Oo(F, Ye), Me;
      if (ze === null) {
        for (; Ye < B.length; Ye++)
          (ze = le(F, B[Ye], he)),
            ze !== null &&
              ((A = f(ze, A, Ye)),
              We === null ? (Me = ze) : (We.sibling = ze),
              (We = ze));
        return zt && Oo(F, Ye), Me;
      }
      for (ze = s(F, ze); Ye < B.length; Ye++)
        (yn = xe(ze, F, Ye, B[Ye], he)),
          yn !== null &&
            (e &&
              yn.alternate !== null &&
              ze.delete(yn.key === null ? Ye : yn.key),
            (A = f(yn, A, Ye)),
            We === null ? (Me = yn) : (We.sibling = yn),
            (We = yn));
      return (
        e &&
          ze.forEach(function (Ki) {
            return t(F, Ki);
          }),
        zt && Oo(F, Ye),
        Me
      );
    }
    function Ne(F, A, B, he) {
      var Me = Be(B);
      if (typeof Me != "function") throw Error(o(150));
      if (((B = Me.call(B)), B == null)) throw Error(o(151));
      for (
        var We = (Me = null), ze = A, Ye = (A = 0), yn = null, vt = B.next();
        ze !== null && !vt.done;
        Ye++, vt = B.next()
      ) {
        ze.index > Ye ? ((yn = ze), (ze = null)) : (yn = ze.sibling);
        var Ki = re(F, ze, vt.value, he);
        if (Ki === null) {
          ze === null && (ze = yn);
          break;
        }
        e && ze && Ki.alternate === null && t(F, ze),
          (A = f(Ki, A, Ye)),
          We === null ? (Me = Ki) : (We.sibling = Ki),
          (We = Ki),
          (ze = yn);
      }
      if (vt.done) return n(F, ze), zt && Oo(F, Ye), Me;
      if (ze === null) {
        for (; !vt.done; Ye++, vt = B.next())
          (vt = le(F, vt.value, he)),
            vt !== null &&
              ((A = f(vt, A, Ye)),
              We === null ? (Me = vt) : (We.sibling = vt),
              (We = vt));
        return zt && Oo(F, Ye), Me;
      }
      for (ze = s(F, ze); !vt.done; Ye++, vt = B.next())
        (vt = xe(ze, F, Ye, vt.value, he)),
          vt !== null &&
            (e &&
              vt.alternate !== null &&
              ze.delete(vt.key === null ? Ye : vt.key),
            (A = f(vt, A, Ye)),
            We === null ? (Me = vt) : (We.sibling = vt),
            (We = vt));
      return (
        e &&
          ze.forEach(function (tm) {
            return t(F, tm);
          }),
        zt && Oo(F, Ye),
        Me
      );
    }
    function tn(F, A, B, he) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === Qe &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case Ge:
            e: {
              for (var Me = B.key, We = A; We !== null; ) {
                if (We.key === Me) {
                  if (((Me = B.type), Me === Qe)) {
                    if (We.tag === 7) {
                      n(F, We.sibling),
                        (A = u(We, B.props.children)),
                        (A.return = F),
                        (F = A);
                      break e;
                    }
                  } else if (
                    We.elementType === Me ||
                    (typeof Me == "object" &&
                      Me !== null &&
                      Me.$$typeof === bt &&
                      Nf(Me) === We.type)
                  ) {
                    n(F, We.sibling),
                      (A = u(We, B.props)),
                      (A.ref = Ys(F, We, B)),
                      (A.return = F),
                      (F = A);
                    break e;
                  }
                  n(F, We);
                  break;
                } else t(F, We);
                We = We.sibling;
              }
              B.type === Qe
                ? ((A = Lo(B.props.children, F.mode, he, B.key)),
                  (A.return = F),
                  (F = A))
                : ((he = _u(B.type, B.key, B.props, null, F.mode, he)),
                  (he.ref = Ys(F, A, B)),
                  (he.return = F),
                  (F = he));
            }
            return y(F);
          case Et:
            e: {
              for (We = B.key; A !== null; ) {
                if (A.key === We)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === B.containerInfo &&
                    A.stateNode.implementation === B.implementation
                  ) {
                    n(F, A.sibling),
                      (A = u(A, B.children || [])),
                      (A.return = F),
                      (F = A);
                    break e;
                  } else {
                    n(F, A);
                    break;
                  }
                else t(F, A);
                A = A.sibling;
              }
              (A = xc(B, F.mode, he)), (A.return = F), (F = A);
            }
            return y(F);
          case bt:
            return (We = B._init), tn(F, A, We(B._payload), he);
        }
        if (x(B)) return Te(F, A, B, he);
        if (Be(B)) return Ne(F, A, B, he);
        Ya(F, B);
      }
      return (typeof B == "string" && B !== "") || typeof B == "number"
        ? ((B = "" + B),
          A !== null && A.tag === 6
            ? (n(F, A.sibling), (A = u(A, B)), (A.return = F), (F = A))
            : (n(F, A), (A = Ic(B, F.mode, he)), (A.return = F), (F = A)),
          y(F))
        : n(F, A);
    }
    return tn;
  }
  var ms = Df(!0),
    Lf = Df(!1),
    Za = Ui(null),
    eu = null,
    vs = null,
    Dl = null;
  function Ll() {
    Dl = vs = eu = null;
  }
  function Ml(e) {
    var t = Za.current;
    Ft(Za), (e._currentValue = t);
  }
  function jl(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ys(e, t) {
    (eu = e),
      (Dl = vs = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Xn = !0), (e.firstContext = null));
  }
  function yr(e) {
    var t = e._currentValue;
    if (Dl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), vs === null)) {
        if (eu === null) throw Error(o(308));
        (vs = e), (eu.dependencies = { lanes: 0, firstContext: e });
      } else vs = vs.next = e;
    return t;
  }
  var bo = null;
  function Fl(e) {
    bo === null ? (bo = [e]) : bo.push(e);
  }
  function Mf(e, t, n, s) {
    var u = t.interleaved;
    return (
      u === null ? ((n.next = n), Fl(t)) : ((n.next = u.next), (u.next = n)),
      (t.interleaved = n),
      yi(e, s)
    );
  }
  function yi(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var zi = !1;
  function Ul(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function jf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function wi(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Hi(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (pt & 2) !== 0)) {
      var u = s.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (s.pending = t),
        yi(e, n)
      );
    }
    return (
      (u = s.interleaved),
      u === null ? ((t.next = t), Fl(s)) : ((t.next = u.next), (u.next = t)),
      (s.interleaved = t),
      yi(e, n)
    );
  }
  function tu(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ls(e, n);
    }
  }
  function Ff(e, t) {
    var n = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), n === s)) {
      var u = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var y = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          f === null ? (u = f = y) : (f = f.next = y), (n = n.next);
        } while (n !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      (n = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function nu(e, t, n, s) {
    var u = e.updateQueue;
    zi = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      O = u.shared.pending;
    if (O !== null) {
      u.shared.pending = null;
      var P = O,
        $ = P.next;
      (P.next = null), y === null ? (f = $) : (y.next = $), (y = P);
      var oe = e.alternate;
      oe !== null &&
        ((oe = oe.updateQueue),
        (O = oe.lastBaseUpdate),
        O !== y &&
          (O === null ? (oe.firstBaseUpdate = $) : (O.next = $),
          (oe.lastBaseUpdate = P)));
    }
    if (f !== null) {
      var le = u.baseState;
      (y = 0), (oe = $ = P = null), (O = f);
      do {
        var re = O.lane,
          xe = O.eventTime;
        if ((s & re) === re) {
          oe !== null &&
            (oe = oe.next =
              {
                eventTime: xe,
                lane: 0,
                tag: O.tag,
                payload: O.payload,
                callback: O.callback,
                next: null,
              });
          e: {
            var Te = e,
              Ne = O;
            switch (((re = t), (xe = n), Ne.tag)) {
              case 1:
                if (((Te = Ne.payload), typeof Te == "function")) {
                  le = Te.call(xe, le, re);
                  break e;
                }
                le = Te;
                break e;
              case 3:
                Te.flags = (Te.flags & -65537) | 128;
              case 0:
                if (
                  ((Te = Ne.payload),
                  (re = typeof Te == "function" ? Te.call(xe, le, re) : Te),
                  re == null)
                )
                  break e;
                le = Se({}, le, re);
                break e;
              case 2:
                zi = !0;
            }
          }
          O.callback !== null &&
            O.lane !== 0 &&
            ((e.flags |= 64),
            (re = u.effects),
            re === null ? (u.effects = [O]) : re.push(O));
        } else
          (xe = {
            eventTime: xe,
            lane: re,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null,
          }),
            oe === null ? (($ = oe = xe), (P = le)) : (oe = oe.next = xe),
            (y |= re);
        if (((O = O.next), O === null)) {
          if (((O = u.shared.pending), O === null)) break;
          (re = O),
            (O = re.next),
            (re.next = null),
            (u.lastBaseUpdate = re),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (oe === null && (P = le),
        (u.baseState = P),
        (u.firstBaseUpdate = $),
        (u.lastBaseUpdate = oe),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (y |= u.lane), (u = u.next);
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      (To |= y), (e.lanes = y), (e.memoizedState = le);
    }
  }
  function Uf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          u = s.callback;
        if (u !== null) {
          if (((s.callback = null), (s = n), typeof u != "function"))
            throw Error(o(191, u));
          u.call(s);
        }
      }
  }
  var Zs = {},
    Jr = Ui(Zs),
    ea = Ui(Zs),
    ta = Ui(Zs);
  function Ro(e) {
    if (e === Zs) throw Error(o(174));
    return e;
  }
  function Bl(e, t) {
    switch ((Dt(ta, t), Dt(ea, e), Dt(Jr, Zs), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = st(t, e));
    }
    Ft(Jr), Dt(Jr, t);
  }
  function ws() {
    Ft(Jr), Ft(ea), Ft(ta);
  }
  function Bf(e) {
    Ro(ta.current);
    var t = Ro(Jr.current),
      n = st(t, e.type);
    t !== n && (Dt(ea, e), Dt(Jr, n));
  }
  function Wl(e) {
    ea.current === e && (Ft(Jr), Ft(ea));
  }
  var Gt = Ui(0);
  function ru(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var zl = [];
  function Hl() {
    for (var e = 0; e < zl.length; e++)
      zl[e]._workInProgressVersionPrimary = null;
    zl.length = 0;
  }
  var iu = Ze.ReactCurrentDispatcher,
    ql = Ze.ReactCurrentBatchConfig,
    Po = 0,
    Qt = null,
    ln = null,
    mn = null,
    ou = !1,
    na = !1,
    ra = 0,
    kg = 0;
  function Nn() {
    throw Error(o(321));
  }
  function $l(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function Vl(e, t, n, s, u, f) {
    if (
      ((Po = f),
      (Qt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (iu.current = e === null || e.memoizedState === null ? Og : bg),
      (e = n(s, u)),
      na)
    ) {
      f = 0;
      do {
        if (((na = !1), (ra = 0), 25 <= f)) throw Error(o(301));
        (f += 1),
          (mn = ln = null),
          (t.updateQueue = null),
          (iu.current = Rg),
          (e = n(s, u));
      } while (na);
    }
    if (
      ((iu.current = uu),
      (t = ln !== null && ln.next !== null),
      (Po = 0),
      (mn = ln = Qt = null),
      (ou = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Gl() {
    var e = ra !== 0;
    return (ra = 0), e;
  }
  function Kr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return mn === null ? (Qt.memoizedState = mn = e) : (mn = mn.next = e), mn;
  }
  function wr() {
    if (ln === null) {
      var e = Qt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ln.next;
    var t = mn === null ? Qt.memoizedState : mn.next;
    if (t !== null) (mn = t), (ln = e);
    else {
      if (e === null) throw Error(o(310));
      (ln = e),
        (e = {
          memoizedState: ln.memoizedState,
          baseState: ln.baseState,
          baseQueue: ln.baseQueue,
          queue: ln.queue,
          next: null,
        }),
        mn === null ? (Qt.memoizedState = mn = e) : (mn = mn.next = e);
    }
    return mn;
  }
  function ia(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ql(e) {
    var t = wr(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = ln,
      u = s.baseQueue,
      f = n.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        (u.next = f.next), (f.next = y);
      }
      (s.baseQueue = u = f), (n.pending = null);
    }
    if (u !== null) {
      (f = u.next), (s = s.baseState);
      var O = (y = null),
        P = null,
        $ = f;
      do {
        var oe = $.lane;
        if ((Po & oe) === oe)
          P !== null &&
            (P = P.next =
              {
                lane: 0,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null,
              }),
            (s = $.hasEagerState ? $.eagerState : e(s, $.action));
        else {
          var le = {
            lane: oe,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null,
          };
          P === null ? ((O = P = le), (y = s)) : (P = P.next = le),
            (Qt.lanes |= oe),
            (To |= oe);
        }
        $ = $.next;
      } while ($ !== null && $ !== f);
      P === null ? (y = s) : (P.next = O),
        Nt(s, t.memoizedState) || (Xn = !0),
        (t.memoizedState = s),
        (t.baseState = y),
        (t.baseQueue = P),
        (n.lastRenderedState = s);
    }
    if (((e = n.interleaved), e !== null)) {
      u = e;
      do (f = u.lane), (Qt.lanes |= f), (To |= f), (u = u.next);
      while (u !== e);
    } else u === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Jl(e) {
    var t = wr(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch,
      u = n.pending,
      f = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var y = (u = u.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== u);
      Nt(f, t.memoizedState) || (Xn = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f);
    }
    return [f, s];
  }
  function Wf() {}
  function zf(e, t) {
    var n = Qt,
      s = wr(),
      u = t(),
      f = !Nt(s.memoizedState, u);
    if (
      (f && ((s.memoizedState = u), (Xn = !0)),
      (s = s.queue),
      Kl($f.bind(null, n, s, e), [e]),
      s.getSnapshot !== t || f || (mn !== null && mn.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        oa(9, qf.bind(null, n, s, u, t), void 0, null),
        vn === null)
      )
        throw Error(o(349));
      (Po & 30) !== 0 || Hf(n, t, u);
    }
    return u;
  }
  function Hf(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Qt.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Qt.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function qf(e, t, n, s) {
    (t.value = n), (t.getSnapshot = s), Vf(t) && Gf(e);
  }
  function $f(e, t, n) {
    return n(function () {
      Vf(t) && Gf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function Gf(e) {
    var t = yi(e, 1);
    t !== null && Dr(t, e, 1, -1);
  }
  function Qf(e) {
    var t = Kr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ia,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Cg.bind(null, Qt, e)),
      [t.memoizedState, e]
    );
  }
  function oa(e, t, n, s) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
      (t = Qt.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Qt.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Jf() {
    return wr().memoizedState;
  }
  function su(e, t, n, s) {
    var u = Kr();
    (Qt.flags |= e),
      (u.memoizedState = oa(1 | t, n, void 0, s === void 0 ? null : s));
  }
  function au(e, t, n, s) {
    var u = wr();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (ln !== null) {
      var y = ln.memoizedState;
      if (((f = y.destroy), s !== null && $l(s, y.deps))) {
        u.memoizedState = oa(t, n, f, s);
        return;
      }
    }
    (Qt.flags |= e), (u.memoizedState = oa(1 | t, n, f, s));
  }
  function Kf(e, t) {
    return su(8390656, 8, e, t);
  }
  function Kl(e, t) {
    return au(2048, 8, e, t);
  }
  function Xf(e, t) {
    return au(4, 2, e, t);
  }
  function Yf(e, t) {
    return au(4, 4, e, t);
  }
  function Zf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ed(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), au(4, 4, Zf.bind(null, t, e), n)
    );
  }
  function Xl() {}
  function td(e, t) {
    var n = wr();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && $l(t, s[1])
      ? s[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function nd(e, t) {
    var n = wr();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && $l(t, s[1])
      ? s[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function rd(e, t, n) {
    return (Po & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Xn = !0)), (e.memoizedState = n))
      : (Nt(n, t) ||
          ((n = Rn()), (Qt.lanes |= n), (To |= n), (e.baseState = !0)),
        t);
  }
  function Ig(e, t) {
    var n = gt;
    (gt = n !== 0 && 4 > n ? n : 4), e(!0);
    var s = ql.transition;
    ql.transition = {};
    try {
      e(!1), t();
    } finally {
      (gt = n), (ql.transition = s);
    }
  }
  function id() {
    return wr().memoizedState;
  }
  function xg(e, t, n) {
    var s = Gi(e);
    if (
      ((n = {
        lane: s,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      od(e))
    )
      sd(t, n);
    else if (((n = Mf(e, t, n, s)), n !== null)) {
      var u = qn();
      Dr(n, e, s, u), ad(n, t, s);
    }
  }
  function Cg(e, t, n) {
    var s = Gi(e),
      u = {
        lane: s,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (od(e)) sd(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            O = f(y, n);
          if (((u.hasEagerState = !0), (u.eagerState = O), Nt(O, y))) {
            var P = t.interleaved;
            P === null
              ? ((u.next = u), Fl(t))
              : ((u.next = P.next), (P.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (n = Mf(e, t, u, s)),
        n !== null && ((u = qn()), Dr(n, e, s, u), ad(n, t, s));
    }
  }
  function od(e) {
    var t = e.alternate;
    return e === Qt || (t !== null && t === Qt);
  }
  function sd(e, t) {
    na = ou = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ad(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ls(e, n);
    }
  }
  var uu = {
      readContext: yr,
      useCallback: Nn,
      useContext: Nn,
      useEffect: Nn,
      useImperativeHandle: Nn,
      useInsertionEffect: Nn,
      useLayoutEffect: Nn,
      useMemo: Nn,
      useReducer: Nn,
      useRef: Nn,
      useState: Nn,
      useDebugValue: Nn,
      useDeferredValue: Nn,
      useTransition: Nn,
      useMutableSource: Nn,
      useSyncExternalStore: Nn,
      useId: Nn,
      unstable_isNewReconciler: !1,
    },
    Og = {
      readContext: yr,
      useCallback: function (e, t) {
        return (Kr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yr,
      useEffect: Kf,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          su(4194308, 4, Zf.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return su(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return su(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Kr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var s = Kr();
        return (
          (t = n !== void 0 ? n(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = xg.bind(null, Qt, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Kr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Qf,
      useDebugValue: Xl,
      useDeferredValue: function (e) {
        return (Kr().memoizedState = e);
      },
      useTransition: function () {
        var e = Qf(!1),
          t = e[0];
        return (e = Ig.bind(null, e[1])), (Kr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var s = Qt,
          u = Kr();
        if (zt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), vn === null)) throw Error(o(349));
          (Po & 30) !== 0 || Hf(s, t, n);
        }
        u.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (u.queue = f),
          Kf($f.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          oa(9, qf.bind(null, s, f, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Kr(),
          t = vn.identifierPrefix;
        if (zt) {
          var n = vi,
            s = mi;
          (n = (s & ~(1 << (32 - Bn(s) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ra++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = kg++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    bg = {
      readContext: yr,
      useCallback: td,
      useContext: yr,
      useEffect: Kl,
      useImperativeHandle: ed,
      useInsertionEffect: Xf,
      useLayoutEffect: Yf,
      useMemo: nd,
      useReducer: Ql,
      useRef: Jf,
      useState: function () {
        return Ql(ia);
      },
      useDebugValue: Xl,
      useDeferredValue: function (e) {
        var t = wr();
        return rd(t, ln.memoizedState, e);
      },
      useTransition: function () {
        var e = Ql(ia)[0],
          t = wr().memoizedState;
        return [e, t];
      },
      useMutableSource: Wf,
      useSyncExternalStore: zf,
      useId: id,
      unstable_isNewReconciler: !1,
    },
    Rg = {
      readContext: yr,
      useCallback: td,
      useContext: yr,
      useEffect: Kl,
      useImperativeHandle: ed,
      useInsertionEffect: Xf,
      useLayoutEffect: Yf,
      useMemo: nd,
      useReducer: Jl,
      useRef: Jf,
      useState: function () {
        return Jl(ia);
      },
      useDebugValue: Xl,
      useDeferredValue: function (e) {
        var t = wr();
        return ln === null ? (t.memoizedState = e) : rd(t, ln.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(ia)[0],
          t = wr().memoizedState;
        return [e, t];
      },
      useMutableSource: Wf,
      useSyncExternalStore: zf,
      useId: id,
      unstable_isNewReconciler: !1,
    };
  function Tr(e, t) {
    if (e && e.defaultProps) {
      (t = Se({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yl(e, t, n, s) {
    (t = e.memoizedState),
      (n = n(s, t)),
      (n = n == null ? t : Se({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var lu = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Ur(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var s = qn(),
        u = Gi(e),
        f = wi(s, u);
      (f.payload = t),
        n != null && (f.callback = n),
        (t = Hi(e, f, u)),
        t !== null && (Dr(t, e, u, s), tu(t, e, u));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var s = qn(),
        u = Gi(e),
        f = wi(s, u);
      (f.tag = 1),
        (f.payload = t),
        n != null && (f.callback = n),
        (t = Hi(e, f, u)),
        t !== null && (Dr(t, e, u, s), tu(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = qn(),
        s = Gi(e),
        u = wi(n, s);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Hi(e, u, s)),
        t !== null && (Dr(t, e, s, n), tu(t, e, s));
    },
  };
  function ud(e, t, n, s, u, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !wt(n, s) || !wt(u, f)
          : !0
    );
  }
  function ld(e, t, n) {
    var s = !1,
      u = Bi,
      f = t.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = yr(f))
        : ((u = Kn(t) ? xo : An.current),
          (s = t.contextTypes),
          (f = (s = s != null) ? ds(e, u) : Bi)),
      (t = new t(n, f)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = lu),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function cd(e, t, n, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, s),
      t.state !== e && lu.enqueueReplaceState(t, t.state, null);
  }
  function Zl(e, t, n, s) {
    var u = e.stateNode;
    (u.props = n), (u.state = e.memoizedState), (u.refs = {}), Ul(e);
    var f = t.contextType;
    typeof f == "object" && f !== null
      ? (u.context = yr(f))
      : ((f = Kn(t) ? xo : An.current), (u.context = ds(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" && (Yl(e, t, f, n), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && lu.enqueueReplaceState(u, u.state, null),
        nu(e, n, u, s),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ss(e, t) {
    try {
      var n = "",
        s = t;
      do (n += Je(s)), (s = s.return);
      while (s);
      var u = n;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function ec(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function tc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Pg = typeof WeakMap == "function" ? WeakMap : Map;
  function fd(e, t, n) {
    (n = wi(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var s = t.value;
    return (
      (n.callback = function () {
        mu || ((mu = !0), (mc = s)), tc(e, t);
      }),
      n
    );
  }
  function dd(e, t, n) {
    (n = wi(-1, n)), (n.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      (n.payload = function () {
        return s(u);
      }),
        (n.callback = function () {
          tc(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (n.callback = function () {
          tc(e, t),
            typeof s != "function" &&
              ($i === null ? ($i = new Set([this])) : $i.add(this));
          var y = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: y !== null ? y : "",
          });
        }),
      n
    );
  }
  function pd(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Pg();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(n) || (u.add(n), (e = qg.bind(null, e, t, n)), t.then(e, e));
  }
  function hd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function gd(e, t, n, s, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = wi(-1, 1)), (t.tag = 2), Hi(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Tg = Ze.ReactCurrentOwner,
    Xn = !1;
  function Hn(e, t, n, s) {
    t.child = e === null ? Lf(t, null, n, s) : ms(t, e.child, n, s);
  }
  function md(e, t, n, s, u) {
    n = n.render;
    var f = t.ref;
    return (
      ys(t, u),
      (s = Vl(e, t, n, s, f, u)),
      (n = Gl()),
      e !== null && !Xn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Si(e, t, u))
        : (zt && n && Rl(t), (t.flags |= 1), Hn(e, t, s, u), t.child)
    );
  }
  function vd(e, t, n, s, u) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !kc(f) &&
        f.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), yd(e, t, f, s, u))
        : ((e = _u(n.type, null, s, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var y = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : wt), n(y, s) && e.ref === t.ref)
      )
        return Si(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Ji(f, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function yd(e, t, n, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (wt(f, s) && e.ref === t.ref)
        if (((Xn = !1), (t.pendingProps = s = f), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (Xn = !0);
        else return (t.lanes = e.lanes), Si(e, t, u);
    }
    return nc(e, t, n, s, u);
  }
  function wd(e, t, n) {
    var s = t.pendingProps,
      u = s.children,
      f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Dt(_s, cr),
          (cr |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Dt(_s, cr),
            (cr |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = f !== null ? f.baseLanes : n),
          Dt(_s, cr),
          (cr |= s);
      }
    else
      f !== null ? ((s = f.baseLanes | n), (t.memoizedState = null)) : (s = n),
        Dt(_s, cr),
        (cr |= s);
    return Hn(e, t, u, n), t.child;
  }
  function Sd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function nc(e, t, n, s, u) {
    var f = Kn(n) ? xo : An.current;
    return (
      (f = ds(t, f)),
      ys(t, u),
      (n = Vl(e, t, n, s, f, u)),
      (s = Gl()),
      e !== null && !Xn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Si(e, t, u))
        : (zt && s && Rl(t), (t.flags |= 1), Hn(e, t, n, u), t.child)
    );
  }
  function Ed(e, t, n, s, u) {
    if (Kn(n)) {
      var f = !0;
      Ga(t);
    } else f = !1;
    if ((ys(t, u), t.stateNode === null))
      fu(e, t), ld(t, n, s), Zl(t, n, s, u), (s = !0);
    else if (e === null) {
      var y = t.stateNode,
        O = t.memoizedProps;
      y.props = O;
      var P = y.context,
        $ = n.contextType;
      typeof $ == "object" && $ !== null
        ? ($ = yr($))
        : (($ = Kn(n) ? xo : An.current), ($ = ds(t, $)));
      var oe = n.getDerivedStateFromProps,
        le =
          typeof oe == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function";
      le ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((O !== s || P !== $) && cd(t, y, s, $)),
        (zi = !1);
      var re = t.memoizedState;
      (y.state = re),
        nu(t, s, y, u),
        (P = t.memoizedState),
        O !== s || re !== P || Jn.current || zi
          ? (typeof oe == "function" &&
              (Yl(t, n, oe, s), (P = t.memoizedState)),
            (O = zi || ud(t, n, O, s, re, P, $))
              ? (le ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = P)),
            (y.props = s),
            (y.state = P),
            (y.context = $),
            (s = O))
          : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (y = t.stateNode),
        jf(e, t),
        (O = t.memoizedProps),
        ($ = t.type === t.elementType ? O : Tr(t.type, O)),
        (y.props = $),
        (le = t.pendingProps),
        (re = y.context),
        (P = n.contextType),
        typeof P == "object" && P !== null
          ? (P = yr(P))
          : ((P = Kn(n) ? xo : An.current), (P = ds(t, P)));
      var xe = n.getDerivedStateFromProps;
      (oe =
        typeof xe == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((O !== le || re !== P) && cd(t, y, s, P)),
        (zi = !1),
        (re = t.memoizedState),
        (y.state = re),
        nu(t, s, y, u);
      var Te = t.memoizedState;
      O !== le || re !== Te || Jn.current || zi
        ? (typeof xe == "function" && (Yl(t, n, xe, s), (Te = t.memoizedState)),
          ($ = zi || ud(t, n, $, s, re, Te, P) || !1)
            ? (oe ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(s, Te, P),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(s, Te, P)),
              typeof y.componentDidUpdate == "function" && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (O === e.memoizedProps && re === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (O === e.memoizedProps && re === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = Te)),
          (y.props = s),
          (y.state = Te),
          (y.context = P),
          (s = $))
        : (typeof y.componentDidUpdate != "function" ||
            (O === e.memoizedProps && re === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (O === e.memoizedProps && re === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return rc(e, t, n, s, f, u);
  }
  function rc(e, t, n, s, u, f) {
    Sd(e, t);
    var y = (t.flags & 128) !== 0;
    if (!s && !y) return u && Cf(t, n, !1), Si(e, t, f);
    (s = t.stateNode), (Tg.current = t);
    var O =
      y && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = ms(t, e.child, null, f)), (t.child = ms(t, null, O, f)))
        : Hn(e, t, O, f),
      (t.memoizedState = s.state),
      u && Cf(t, n, !0),
      t.child
    );
  }
  function _d(e) {
    var t = e.stateNode;
    t.pendingContext
      ? If(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && If(e, t.context, !1),
      Bl(e, t.containerInfo);
  }
  function kd(e, t, n, s, u) {
    return gs(), Nl(u), (t.flags |= 256), Hn(e, t, n, s), t.child;
  }
  var ic = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Id(e, t, n) {
    var s = t.pendingProps,
      u = Gt.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      O;
    if (
      ((O = y) ||
        (O = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      O
        ? ((f = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Dt(Gt, u & 1),
      e === null)
    )
      return (
        Al(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((y = s.children),
            (e = s.fallback),
            f
              ? ((s = t.mode),
                (f = t.child),
                (y = { mode: "hidden", children: y }),
                (s & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = y))
                  : (f = ku(y, s, 0, null)),
                (e = Lo(e, s, n, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = oc(n)),
                (t.memoizedState = ic),
                e)
              : sc(t, y))
      );
    if (((u = e.memoizedState), u !== null && ((O = u.dehydrated), O !== null)))
      return Ag(e, t, y, s, O, u, n);
    if (f) {
      (f = s.fallback), (y = t.mode), (u = e.child), (O = u.sibling);
      var P = { mode: "hidden", children: s.children };
      return (
        (y & 1) === 0 && t.child !== u
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = P),
            (t.deletions = null))
          : ((s = Ji(u, P)), (s.subtreeFlags = u.subtreeFlags & 14680064)),
        O !== null ? (f = Ji(O, f)) : ((f = Lo(f, y, n, null)), (f.flags |= 2)),
        (f.return = t),
        (s.return = t),
        (s.sibling = f),
        (t.child = s),
        (s = f),
        (f = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? oc(n)
            : {
                baseLanes: y.baseLanes | n,
                cachePool: null,
                transitions: y.transitions,
              }),
        (f.memoizedState = y),
        (f.childLanes = e.childLanes & ~n),
        (t.memoizedState = ic),
        s
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (s = Ji(f, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = n),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function sc(e, t) {
    return (
      (t = ku({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cu(e, t, n, s) {
    return (
      s !== null && Nl(s),
      ms(t, e.child, null, n),
      (e = sc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ag(e, t, n, s, u, f, y) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (s = ec(Error(o(422)))), cu(e, t, y, s))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = s.fallback),
            (u = t.mode),
            (s = ku({ mode: "visible", children: s.children }, u, 0, null)),
            (f = Lo(f, u, y, null)),
            (f.flags |= 2),
            (s.return = t),
            (f.return = t),
            (s.sibling = f),
            (t.child = s),
            (t.mode & 1) !== 0 && ms(t, e.child, null, y),
            (t.child.memoizedState = oc(y)),
            (t.memoizedState = ic),
            f);
    if ((t.mode & 1) === 0) return cu(e, t, y, null);
    if (u.data === "$!") {
      if (((s = u.nextSibling && u.nextSibling.dataset), s)) var O = s.dgst;
      return (
        (s = O), (f = Error(o(419))), (s = ec(f, s, void 0)), cu(e, t, y, s)
      );
    }
    if (((O = (y & e.childLanes) !== 0), Xn || O)) {
      if (((s = vn), s !== null)) {
        switch (y & -y) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (s.suspendedLanes | y)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== f.retryLane &&
            ((f.retryLane = u), yi(e, u), Dr(s, e, u, -1));
      }
      return _c(), (s = ec(Error(o(421)))), cu(e, t, y, s);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = $g.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = f.treeContext),
        (lr = Fi(u.nextSibling)),
        (ur = t),
        (zt = !0),
        (Pr = null),
        e !== null &&
          ((mr[vr++] = mi),
          (mr[vr++] = vi),
          (mr[vr++] = Co),
          (mi = e.id),
          (vi = e.overflow),
          (Co = t)),
        (t = sc(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function xd(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), jl(e.return, t, n);
  }
  function ac(e, t, n, s, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: n,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = s),
        (f.tail = n),
        (f.tailMode = u));
  }
  function Cd(e, t, n) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((Hn(e, t, s.children, n), (s = Gt.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
          else if (e.tag === 19) xd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((Dt(Gt, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (n = t.child, u = null; n !== null; )
            (e = n.alternate),
              e !== null && ru(e) === null && (u = n),
              (n = n.sibling);
          (n = u),
            n === null
              ? ((u = t.child), (t.child = null))
              : ((u = n.sibling), (n.sibling = null)),
            ac(t, !1, u, n, f);
          break;
        case "backwards":
          for (n = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && ru(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = n), (n = u), (u = e);
          }
          ac(t, !0, n, null, f);
          break;
        case "together":
          ac(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fu(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Si(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (To |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Ji(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Ji(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ng(e, t, n) {
    switch (t.tag) {
      case 3:
        _d(t), gs();
        break;
      case 5:
        Bf(t);
        break;
      case 1:
        Kn(t.type) && Ga(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          u = t.memoizedProps.value;
        Dt(Za, s._currentValue), (s._currentValue = u);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Dt(Gt, Gt.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Id(e, t, n)
              : (Dt(Gt, Gt.current & 1),
                (e = Si(e, t, n)),
                e !== null ? e.sibling : null);
        Dt(Gt, Gt.current & 1);
        break;
      case 19:
        if (((s = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Cd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Dt(Gt, Gt.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), wd(e, t, n);
    }
    return Si(e, t, n);
  }
  var Od, uc, bd, Rd;
  (Od = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (uc = function () {}),
    (bd = function (e, t, n, s) {
      var u = e.memoizedProps;
      if (u !== s) {
        (e = t.stateNode), Ro(Jr.current);
        var f = null;
        switch (n) {
          case "input":
            (u = $n(e, u)), (s = $n(e, s)), (f = []);
            break;
          case "select":
            (u = Se({}, u, { value: void 0 })),
              (s = Se({}, s, { value: void 0 })),
              (f = []);
            break;
          case "textarea":
            (u = H(e, u)), (s = H(e, s)), (f = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = qa);
        }
        Pe(n, s);
        var y;
        n = null;
        for ($ in u)
          if (!s.hasOwnProperty($) && u.hasOwnProperty($) && u[$] != null)
            if ($ === "style") {
              var O = u[$];
              for (y in O) O.hasOwnProperty(y) && (n || (n = {}), (n[y] = ""));
            } else
              $ !== "dangerouslySetInnerHTML" &&
                $ !== "children" &&
                $ !== "suppressContentEditableWarning" &&
                $ !== "suppressHydrationWarning" &&
                $ !== "autoFocus" &&
                (p.hasOwnProperty($)
                  ? f || (f = [])
                  : (f = f || []).push($, null));
        for ($ in s) {
          var P = s[$];
          if (
            ((O = u != null ? u[$] : void 0),
            s.hasOwnProperty($) && P !== O && (P != null || O != null))
          )
            if ($ === "style")
              if (O) {
                for (y in O)
                  !O.hasOwnProperty(y) ||
                    (P && P.hasOwnProperty(y)) ||
                    (n || (n = {}), (n[y] = ""));
                for (y in P)
                  P.hasOwnProperty(y) &&
                    O[y] !== P[y] &&
                    (n || (n = {}), (n[y] = P[y]));
              } else n || (f || (f = []), f.push($, n)), (n = P);
            else
              $ === "dangerouslySetInnerHTML"
                ? ((P = P ? P.__html : void 0),
                  (O = O ? O.__html : void 0),
                  P != null && O !== P && (f = f || []).push($, P))
                : $ === "children"
                  ? (typeof P != "string" && typeof P != "number") ||
                    (f = f || []).push($, "" + P)
                  : $ !== "suppressContentEditableWarning" &&
                    $ !== "suppressHydrationWarning" &&
                    (p.hasOwnProperty($)
                      ? (P != null && $ === "onScroll" && St("scroll", e),
                        f || O === P || (f = []))
                      : (f = f || []).push($, P));
        }
        n && (f = f || []).push("style", n);
        var $ = f;
        (t.updateQueue = $) && (t.flags |= 4);
      }
    }),
    (Rd = function (e, t, n, s) {
      n !== s && (t.flags |= 4);
    });
  function sa(e, t) {
    if (!zt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), (n = n.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Dn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 14680064),
          (s |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags),
          (s |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = n), t;
  }
  function Dg(e, t, n) {
    var s = t.pendingProps;
    switch ((Pl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dn(t), null;
      case 1:
        return Kn(t.type) && Va(), Dn(t), null;
      case 3:
        return (
          (s = t.stateNode),
          ws(),
          Ft(Jn),
          Ft(An),
          Hl(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Xa(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pr !== null && (wc(Pr), (Pr = null)))),
          uc(e, t),
          Dn(t),
          null
        );
      case 5:
        Wl(t);
        var u = Ro(ta.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          bd(e, t, n, s, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return Dn(t), null;
          }
          if (((e = Ro(Jr.current)), Xa(t))) {
            (s = t.stateNode), (n = t.type);
            var f = t.memoizedProps;
            switch (((s[Qr] = t), (s[Ks] = f), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                St("cancel", s), St("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                St("load", s);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Gr.length; u++) St(Gr[u], s);
                break;
              case "source":
                St("error", s);
                break;
              case "img":
              case "image":
              case "link":
                St("error", s), St("load", s);
                break;
              case "details":
                St("toggle", s);
                break;
              case "input":
                Cn(s, f), St("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!f.multiple }),
                  St("invalid", s);
                break;
              case "textarea":
                ce(s, f), St("invalid", s);
            }
            Pe(n, f), (u = null);
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var O = f[y];
                y === "children"
                  ? typeof O == "string"
                    ? s.textContent !== O &&
                      (f.suppressHydrationWarning !== !0 &&
                        Ha(s.textContent, O, e),
                      (u = ["children", O]))
                    : typeof O == "number" &&
                      s.textContent !== "" + O &&
                      (f.suppressHydrationWarning !== !0 &&
                        Ha(s.textContent, O, e),
                      (u = ["children", "" + O]))
                  : p.hasOwnProperty(y) &&
                    O != null &&
                    y === "onScroll" &&
                    St("scroll", s);
              }
            switch (n) {
              case "input":
                sn(s), k(s, f, !0);
                break;
              case "textarea":
                sn(s), Ae(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (s.onclick = qa);
            }
            (s = u), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (y = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ue(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                    ? (e = y.createElement(n, { is: s.is }))
                    : ((e = y.createElement(n)),
                      n === "select" &&
                        ((y = e),
                        s.multiple
                          ? (y.multiple = !0)
                          : s.size && (y.size = s.size)))
                : (e = y.createElementNS(e, n)),
              (e[Qr] = t),
              (e[Ks] = s),
              Od(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((y = kt(n, s)), n)) {
                case "dialog":
                  St("cancel", e), St("close", e), (u = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  St("load", e), (u = s);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Gr.length; u++) St(Gr[u], e);
                  u = s;
                  break;
                case "source":
                  St("error", e), (u = s);
                  break;
                case "img":
                case "image":
                case "link":
                  St("error", e), St("load", e), (u = s);
                  break;
                case "details":
                  St("toggle", e), (u = s);
                  break;
                case "input":
                  Cn(e, s), (u = $n(e, s)), St("invalid", e);
                  break;
                case "option":
                  u = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (u = Se({}, s, { value: void 0 })),
                    St("invalid", e);
                  break;
                case "textarea":
                  ce(e, s), (u = H(e, s)), St("invalid", e);
                  break;
                default:
                  u = s;
              }
              Pe(n, u), (O = u);
              for (f in O)
                if (O.hasOwnProperty(f)) {
                  var P = O[f];
                  f === "style"
                    ? Q(e, P)
                    : f === "dangerouslySetInnerHTML"
                      ? ((P = P ? P.__html : void 0), P != null && Rt(e, P))
                      : f === "children"
                        ? typeof P == "string"
                          ? (n !== "textarea" || P !== "") && jt(e, P)
                          : typeof P == "number" && jt(e, "" + P)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          f !== "autoFocus" &&
                          (p.hasOwnProperty(f)
                            ? P != null && f === "onScroll" && St("scroll", e)
                            : P != null && me(e, f, P, y));
                }
              switch (n) {
                case "input":
                  sn(e), k(e, s, !1);
                  break;
                case "textarea":
                  sn(e), Ae(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + ot(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (f = s.value),
                    f != null
                      ? q(e, !!s.multiple, f, !1)
                      : s.defaultValue != null &&
                        q(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = qa);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Dn(t), null;
      case 6:
        if (e && t.stateNode != null) Rd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = Ro(ta.current)), Ro(Jr.current), Xa(t))) {
            if (
              ((s = t.stateNode),
              (n = t.memoizedProps),
              (s[Qr] = t),
              (f = s.nodeValue !== n) && ((e = ur), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ha(s.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ha(s.nodeValue, n, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
              (s[Qr] = t),
              (t.stateNode = s);
        }
        return Dn(t), null;
      case 13:
        if (
          (Ft(Gt),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (zt && lr !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Af(), gs(), (t.flags |= 98560), (f = !1);
          else if (((f = Xa(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (
                ((f = t.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(o(317));
              f[Qr] = t;
            } else
              gs(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Dn(t), (f = !1);
          } else Pr !== null && (wc(Pr), (Pr = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Gt.current & 1) !== 0
                  ? cn === 0 && (cn = 3)
                  : _c())),
            t.updateQueue !== null && (t.flags |= 4),
            Dn(t),
            null);
      case 4:
        return (
          ws(),
          uc(e, t),
          e === null && Qs(t.stateNode.containerInfo),
          Dn(t),
          null
        );
      case 10:
        return Ml(t.type._context), Dn(t), null;
      case 17:
        return Kn(t.type) && Va(), Dn(t), null;
      case 19:
        if ((Ft(Gt), (f = t.memoizedState), f === null)) return Dn(t), null;
        if (((s = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (s) sa(f, !1);
          else {
            if (cn !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = ru(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      sa(f, !1),
                      s = y.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = n,
                      n = t.child;
                    n !== null;

                  )
                    (f = n),
                      (e = s),
                      (f.flags &= 14680066),
                      (y = f.alternate),
                      y === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = y.childLanes),
                          (f.lanes = y.lanes),
                          (f.child = y.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = y.memoizedProps),
                          (f.memoizedState = y.memoizedState),
                          (f.updateQueue = y.updateQueue),
                          (f.type = y.type),
                          (e = y.dependencies),
                          (f.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Dt(Gt, (Gt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Bt() > ks &&
              ((t.flags |= 128), (s = !0), sa(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = ru(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                sa(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !y.alternate &&
                  !zt)
              )
                return Dn(t), null;
            } else
              2 * Bt() - f.renderingStartTime > ks &&
                n !== 1073741824 &&
                ((t.flags |= 128), (s = !0), sa(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((n = f.last),
              n !== null ? (n.sibling = y) : (t.child = y),
              (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Bt()),
            (t.sibling = null),
            (n = Gt.current),
            Dt(Gt, s ? (n & 1) | 2 : n & 1),
            t)
          : (Dn(t), null);
      case 22:
      case 23:
        return (
          Ec(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (cr & 1073741824) !== 0 &&
              (Dn(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Dn(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Lg(e, t) {
    switch ((Pl(t), t.tag)) {
      case 1:
        return (
          Kn(t.type) && Va(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ws(),
          Ft(Jn),
          Ft(An),
          Hl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Wl(t), null;
      case 13:
        if (
          (Ft(Gt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          gs();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ft(Gt), null;
      case 4:
        return ws(), null;
      case 10:
        return Ml(t.type._context), null;
      case 22:
      case 23:
        return Ec(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var du = !1,
    Ln = !1,
    Mg = typeof WeakSet == "function" ? WeakSet : Set,
    Re = null;
  function Es(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Yt(e, t, s);
        }
      else n.current = null;
  }
  function lc(e, t, n) {
    try {
      n();
    } catch (s) {
      Yt(e, t, s);
    }
  }
  var Pd = !1;
  function jg(e, t) {
    if (((El = vo), (e = Ot()), it(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var s = n.getSelection && n.getSelection();
          if (s && s.rangeCount !== 0) {
            n = s.anchorNode;
            var u = s.anchorOffset,
              f = s.focusNode;
            s = s.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
              break e;
            }
            var y = 0,
              O = -1,
              P = -1,
              $ = 0,
              oe = 0,
              le = e,
              re = null;
            t: for (;;) {
              for (
                var xe;
                le !== n || (u !== 0 && le.nodeType !== 3) || (O = y + u),
                  le !== f || (s !== 0 && le.nodeType !== 3) || (P = y + s),
                  le.nodeType === 3 && (y += le.nodeValue.length),
                  (xe = le.firstChild) !== null;

              )
                (re = le), (le = xe);
              for (;;) {
                if (le === e) break t;
                if (
                  (re === n && ++$ === u && (O = y),
                  re === f && ++oe === s && (P = y),
                  (xe = le.nextSibling) !== null)
                )
                  break;
                (le = re), (re = le.parentNode);
              }
              le = xe;
            }
            n = O === -1 || P === -1 ? null : { start: O, end: P };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _l = { focusedElem: e, selectionRange: n }, vo = !1, Re = t;
      Re !== null;

    )
      if (
        ((t = Re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Re = e);
      else
        for (; Re !== null; ) {
          t = Re;
          try {
            var Te = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Te !== null) {
                    var Ne = Te.memoizedProps,
                      tn = Te.memoizedState,
                      F = t.stateNode,
                      A = F.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Ne : Tr(t.type, Ne),
                        tn,
                      );
                    F.__reactInternalSnapshotBeforeUpdate = A;
                  }
                  break;
                case 3:
                  var B = t.stateNode.containerInfo;
                  B.nodeType === 1
                    ? (B.textContent = "")
                    : B.nodeType === 9 &&
                      B.documentElement &&
                      B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (he) {
            Yt(t, t.return, he);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Re = e);
            break;
          }
          Re = t.return;
        }
    return (Te = Pd), (Pd = !1), Te;
  }
  function aa(e, t, n) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var u = (s = s.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          (u.destroy = void 0), f !== void 0 && lc(t, n, f);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function pu(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function cc(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Td(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Td(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Qr],
          delete t[Ks],
          delete t[Cl],
          delete t[wg],
          delete t[Sg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Nd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ad(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fc(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = qa));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (fc(e, t, n), e = e.sibling; e !== null; )
        fc(e, t, n), (e = e.sibling);
  }
  function dc(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (dc(e, t, n), e = e.sibling; e !== null; )
        dc(e, t, n), (e = e.sibling);
  }
  var En = null,
    Ar = !1;
  function qi(e, t, n) {
    for (n = n.child; n !== null; ) Dd(e, t, n), (n = n.sibling);
  }
  function Dd(e, t, n) {
    if (On && typeof On.onCommitFiberUnmount == "function")
      try {
        On.onCommitFiberUnmount(so, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ln || Es(n, t);
      case 6:
        var s = En,
          u = Ar;
        (En = null),
          qi(e, t, n),
          (En = s),
          (Ar = u),
          En !== null &&
            (Ar
              ? ((e = En),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : En.removeChild(n.stateNode));
        break;
      case 18:
        En !== null &&
          (Ar
            ? ((e = En),
              (n = n.stateNode),
              e.nodeType === 8
                ? xl(e.parentNode, n)
                : e.nodeType === 1 && xl(e, n),
              Li(e))
            : xl(En, n.stateNode));
        break;
      case 4:
        (s = En),
          (u = Ar),
          (En = n.stateNode.containerInfo),
          (Ar = !0),
          qi(e, t, n),
          (En = s),
          (Ar = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ln &&
          ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          u = s = s.next;
          do {
            var f = u,
              y = f.destroy;
            (f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && lc(n, t, y),
              (u = u.next);
          } while (u !== s);
        }
        qi(e, t, n);
        break;
      case 1:
        if (
          !Ln &&
          (Es(n, t),
          (s = n.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = n.memoizedProps),
              (s.state = n.memoizedState),
              s.componentWillUnmount();
          } catch (O) {
            Yt(n, t, O);
          }
        qi(e, t, n);
        break;
      case 21:
        qi(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ln = (s = Ln) || n.memoizedState !== null), qi(e, t, n), (Ln = s))
          : qi(e, t, n);
        break;
      default:
        qi(e, t, n);
    }
  }
  function Ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Mg()),
        t.forEach(function (s) {
          var u = Vg.bind(null, e, s);
          n.has(s) || (n.add(s), s.then(u, u));
        });
    }
  }
  function Nr(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var s = 0; s < n.length; s++) {
        var u = n[s];
        try {
          var f = e,
            y = t,
            O = y;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                (En = O.stateNode), (Ar = !1);
                break e;
              case 3:
                (En = O.stateNode.containerInfo), (Ar = !0);
                break e;
              case 4:
                (En = O.stateNode.containerInfo), (Ar = !0);
                break e;
            }
            O = O.return;
          }
          if (En === null) throw Error(o(160));
          Dd(f, y, u), (En = null), (Ar = !1);
          var P = u.alternate;
          P !== null && (P.return = null), (u.return = null);
        } catch ($) {
          Yt(u, t, $);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Md(t, e), (t = t.sibling);
  }
  function Md(e, t) {
    var n = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Nr(t, e), Xr(e), s & 4)) {
          try {
            aa(3, e, e.return), pu(3, e);
          } catch (Ne) {
            Yt(e, e.return, Ne);
          }
          try {
            aa(5, e, e.return);
          } catch (Ne) {
            Yt(e, e.return, Ne);
          }
        }
        break;
      case 1:
        Nr(t, e), Xr(e), s & 512 && n !== null && Es(n, n.return);
        break;
      case 5:
        if (
          (Nr(t, e),
          Xr(e),
          s & 512 && n !== null && Es(n, n.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            jt(u, "");
          } catch (Ne) {
            Yt(e, e.return, Ne);
          }
        }
        if (s & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            y = n !== null ? n.memoizedProps : f,
            O = e.type,
            P = e.updateQueue;
          if (((e.updateQueue = null), P !== null))
            try {
              O === "input" && f.type === "radio" && f.name != null && L(u, f),
                kt(O, y);
              var $ = kt(O, f);
              for (y = 0; y < P.length; y += 2) {
                var oe = P[y],
                  le = P[y + 1];
                oe === "style"
                  ? Q(u, le)
                  : oe === "dangerouslySetInnerHTML"
                    ? Rt(u, le)
                    : oe === "children"
                      ? jt(u, le)
                      : me(u, oe, le, $);
              }
              switch (O) {
                case "input":
                  E(u, f);
                  break;
                case "textarea":
                  Fe(u, f);
                  break;
                case "select":
                  var re = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var xe = f.value;
                  xe != null
                    ? q(u, !!f.multiple, xe, !1)
                    : re !== !!f.multiple &&
                      (f.defaultValue != null
                        ? q(u, !!f.multiple, f.defaultValue, !0)
                        : q(u, !!f.multiple, f.multiple ? [] : "", !1));
              }
              u[Ks] = f;
            } catch (Ne) {
              Yt(e, e.return, Ne);
            }
        }
        break;
      case 6:
        if ((Nr(t, e), Xr(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            u.nodeValue = f;
          } catch (Ne) {
            Yt(e, e.return, Ne);
          }
        }
        break;
      case 3:
        if (
          (Nr(t, e), Xr(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Li(t.containerInfo);
          } catch (Ne) {
            Yt(e, e.return, Ne);
          }
        break;
      case 4:
        Nr(t, e), Xr(e);
        break;
      case 13:
        Nr(t, e),
          Xr(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (gc = Bt())),
          s & 4 && Ld(e);
        break;
      case 22:
        if (
          ((oe = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ln = ($ = Ln) || oe), Nr(t, e), (Ln = $)) : Nr(t, e),
          Xr(e),
          s & 8192)
        ) {
          if (
            (($ = e.memoizedState !== null),
            (e.stateNode.isHidden = $) && !oe && (e.mode & 1) !== 0)
          )
            for (Re = e, oe = e.child; oe !== null; ) {
              for (le = Re = oe; Re !== null; ) {
                switch (((re = Re), (xe = re.child), re.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    aa(4, re, re.return);
                    break;
                  case 1:
                    Es(re, re.return);
                    var Te = re.stateNode;
                    if (typeof Te.componentWillUnmount == "function") {
                      (s = re), (n = re.return);
                      try {
                        (t = s),
                          (Te.props = t.memoizedProps),
                          (Te.state = t.memoizedState),
                          Te.componentWillUnmount();
                      } catch (Ne) {
                        Yt(s, n, Ne);
                      }
                    }
                    break;
                  case 5:
                    Es(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      Ud(le);
                      continue;
                    }
                }
                xe !== null ? ((xe.return = re), (Re = xe)) : Ud(le);
              }
              oe = oe.sibling;
            }
          e: for (oe = null, le = e; ; ) {
            if (le.tag === 5) {
              if (oe === null) {
                oe = le;
                try {
                  (u = le.stateNode),
                    $
                      ? ((f = u.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((O = le.stateNode),
                        (P = le.memoizedProps.style),
                        (y =
                          P != null && P.hasOwnProperty("display")
                            ? P.display
                            : null),
                        (O.style.display = W("display", y)));
                } catch (Ne) {
                  Yt(e, e.return, Ne);
                }
              }
            } else if (le.tag === 6) {
              if (oe === null)
                try {
                  le.stateNode.nodeValue = $ ? "" : le.memoizedProps;
                } catch (Ne) {
                  Yt(e, e.return, Ne);
                }
            } else if (
              ((le.tag !== 22 && le.tag !== 23) ||
                le.memoizedState === null ||
                le === e) &&
              le.child !== null
            ) {
              (le.child.return = le), (le = le.child);
              continue;
            }
            if (le === e) break e;
            for (; le.sibling === null; ) {
              if (le.return === null || le.return === e) break e;
              oe === le && (oe = null), (le = le.return);
            }
            oe === le && (oe = null),
              (le.sibling.return = le.return),
              (le = le.sibling);
          }
        }
        break;
      case 19:
        Nr(t, e), Xr(e), s & 4 && Ld(e);
        break;
      case 21:
        break;
      default:
        Nr(t, e), Xr(e);
    }
  }
  function Xr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ad(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (jt(u, ""), (s.flags &= -33));
            var f = Nd(e);
            dc(e, f, u);
            break;
          case 3:
          case 4:
            var y = s.stateNode.containerInfo,
              O = Nd(e);
            fc(e, O, y);
            break;
          default:
            throw Error(o(161));
        }
      } catch (P) {
        Yt(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Fg(e, t, n) {
    (Re = e), jd(e);
  }
  function jd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; Re !== null; ) {
      var u = Re,
        f = u.child;
      if (u.tag === 22 && s) {
        var y = u.memoizedState !== null || du;
        if (!y) {
          var O = u.alternate,
            P = (O !== null && O.memoizedState !== null) || Ln;
          O = du;
          var $ = Ln;
          if (((du = y), (Ln = P) && !$))
            for (Re = u; Re !== null; )
              (y = Re),
                (P = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Bd(u)
                  : P !== null
                    ? ((P.return = y), (Re = P))
                    : Bd(u);
          for (; f !== null; ) (Re = f), jd(f), (f = f.sibling);
          (Re = u), (du = O), (Ln = $);
        }
        Fd(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && f !== null
          ? ((f.return = u), (Re = f))
          : Fd(e);
    }
  }
  function Fd(e) {
    for (; Re !== null; ) {
      var t = Re;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ln || pu(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Ln)
                  if (n === null) s.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Tr(t.type, n.memoizedProps);
                    s.componentDidUpdate(
                      u,
                      n.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var f = t.updateQueue;
                f !== null && Uf(t, f, s);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Uf(t, y, n);
                }
                break;
              case 5:
                var O = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = O;
                  var P = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && n.focus();
                      break;
                    case "img":
                      P.src && (n.src = P.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var $ = t.alternate;
                  if ($ !== null) {
                    var oe = $.memoizedState;
                    if (oe !== null) {
                      var le = oe.dehydrated;
                      le !== null && Li(le);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Ln || (t.flags & 512 && cc(t));
        } catch (re) {
          Yt(t, t.return, re);
        }
      }
      if (t === e) {
        Re = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Re = n);
        break;
      }
      Re = t.return;
    }
  }
  function Ud(e) {
    for (; Re !== null; ) {
      var t = Re;
      if (t === e) {
        Re = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Re = n);
        break;
      }
      Re = t.return;
    }
  }
  function Bd(e) {
    for (; Re !== null; ) {
      var t = Re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pu(4, t);
            } catch (P) {
              Yt(t, n, P);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch (P) {
                Yt(t, u, P);
              }
            }
            var f = t.return;
            try {
              cc(t);
            } catch (P) {
              Yt(t, f, P);
            }
            break;
          case 5:
            var y = t.return;
            try {
              cc(t);
            } catch (P) {
              Yt(t, y, P);
            }
        }
      } catch (P) {
        Yt(t, t.return, P);
      }
      if (t === e) {
        Re = null;
        break;
      }
      var O = t.sibling;
      if (O !== null) {
        (O.return = t.return), (Re = O);
        break;
      }
      Re = t.return;
    }
  }
  var Ug = Math.ceil,
    hu = Ze.ReactCurrentDispatcher,
    pc = Ze.ReactCurrentOwner,
    Sr = Ze.ReactCurrentBatchConfig,
    pt = 0,
    vn = null,
    an = null,
    _n = 0,
    cr = 0,
    _s = Ui(0),
    cn = 0,
    ua = null,
    To = 0,
    gu = 0,
    hc = 0,
    la = null,
    Yn = null,
    gc = 0,
    ks = 1 / 0,
    Ei = null,
    mu = !1,
    mc = null,
    $i = null,
    vu = !1,
    Vi = null,
    yu = 0,
    ca = 0,
    vc = null,
    wu = -1,
    Su = 0;
  function qn() {
    return (pt & 6) !== 0 ? Bt() : wu !== -1 ? wu : (wu = Bt());
  }
  function Gi(e) {
    return (e.mode & 1) === 0
      ? 1
      : (pt & 2) !== 0 && _n !== 0
        ? _n & -_n
        : _g.transition !== null
          ? (Su === 0 && (Su = Rn()), Su)
          : ((e = gt),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Bs(e.type))),
            e);
  }
  function Dr(e, t, n, s) {
    if (50 < ca) throw ((ca = 0), (vc = null), Error(o(185)));
    lo(e, n, s),
      ((pt & 2) === 0 || e !== vn) &&
        (e === vn && ((pt & 2) === 0 && (gu |= n), cn === 4 && Qi(e, _n)),
        Zn(e, s),
        n === 1 &&
          pt === 0 &&
          (t.mode & 1) === 0 &&
          ((ks = Bt() + 500), Qa && Wi()));
  }
  function Zn(e, t) {
    var n = e.callbackNode;
    ll(e, t);
    var s = Wr(e, e === vn ? _n : 0);
    if (s === 0)
      n !== null && oo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((n != null && oo(n), t === 1))
        e.tag === 0 ? Eg(zd.bind(null, e)) : Of(zd.bind(null, e)),
          vg(function () {
            (pt & 6) === 0 && Wi();
          }),
          (n = null);
      else {
        switch (ri(s)) {
          case 1:
            n = As;
            break;
          case 4:
            n = Ns;
            break;
          case 16:
            n = Qo;
            break;
          case 536870912:
            n = Aa;
            break;
          default:
            n = Qo;
        }
        n = Kd(n, Wd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Wd(e, t) {
    if (((wu = -1), (Su = 0), (pt & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (Is() && e.callbackNode !== n) return null;
    var s = Wr(e, e === vn ? _n : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Eu(e, s);
    else {
      t = s;
      var u = pt;
      pt |= 2;
      var f = qd();
      (vn !== e || _n !== t) && ((Ei = null), (ks = Bt() + 500), No(e, t));
      do
        try {
          zg();
          break;
        } catch (O) {
          Hd(e, O);
        }
      while (!0);
      Ll(),
        (hu.current = f),
        (pt = u),
        an !== null ? (t = 0) : ((vn = null), (_n = 0), (t = cn));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = bn(e)), u !== 0 && ((s = u), (t = yc(e, u)))),
        t === 1)
      )
        throw ((n = ua), No(e, 0), Qi(e, s), Zn(e, Bt()), n);
      if (t === 6) Qi(e, s);
      else {
        if (
          ((u = e.current.alternate),
          (s & 30) === 0 &&
            !Bg(u) &&
            ((t = Eu(e, s)),
            t === 2 && ((f = bn(e)), f !== 0 && ((s = f), (t = yc(e, f)))),
            t === 1))
        )
          throw ((n = ua), No(e, 0), Qi(e, s), Zn(e, Bt()), n);
        switch (((e.finishedWork = u), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Do(e, Yn, Ei);
            break;
          case 3:
            if (
              (Qi(e, s),
              (s & 130023424) === s && ((t = gc + 500 - Bt()), 10 < t))
            ) {
              if (Wr(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & s) !== s)) {
                qn(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Il(Do.bind(null, e, Yn, Ei), t);
              break;
            }
            Do(e, Yn, Ei);
            break;
          case 4:
            if ((Qi(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var y = 31 - Bn(s);
              (f = 1 << y), (y = t[y]), y > u && (u = y), (s &= ~f);
            }
            if (
              ((s = u),
              (s = Bt() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                    ? 480
                    : 1080 > s
                      ? 1080
                      : 1920 > s
                        ? 1920
                        : 3e3 > s
                          ? 3e3
                          : 4320 > s
                            ? 4320
                            : 1960 * Ug(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Il(Do.bind(null, e, Yn, Ei), s);
              break;
            }
            Do(e, Yn, Ei);
            break;
          case 5:
            Do(e, Yn, Ei);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Zn(e, Bt()), e.callbackNode === n ? Wd.bind(null, e) : null;
  }
  function yc(e, t) {
    var n = la;
    return (
      e.current.memoizedState.isDehydrated && (No(e, t).flags |= 256),
      (e = Eu(e, t)),
      e !== 2 && ((t = Yn), (Yn = n), t !== null && wc(t)),
      e
    );
  }
  function wc(e) {
    Yn === null ? (Yn = e) : Yn.push.apply(Yn, e);
  }
  function Bg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var s = 0; s < n.length; s++) {
            var u = n[s],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Nt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Qi(e, t) {
    for (
      t &= ~hc,
        t &= ~gu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Bn(t),
        s = 1 << n;
      (e[n] = -1), (t &= ~s);
    }
  }
  function zd(e) {
    if ((pt & 6) !== 0) throw Error(o(327));
    Is();
    var t = Wr(e, 0);
    if ((t & 1) === 0) return Zn(e, Bt()), null;
    var n = Eu(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = bn(e);
      s !== 0 && ((t = s), (n = yc(e, s)));
    }
    if (n === 1) throw ((n = ua), No(e, 0), Qi(e, t), Zn(e, Bt()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Do(e, Yn, Ei),
      Zn(e, Bt()),
      null
    );
  }
  function Sc(e, t) {
    var n = pt;
    pt |= 1;
    try {
      return e(t);
    } finally {
      (pt = n), pt === 0 && ((ks = Bt() + 500), Qa && Wi());
    }
  }
  function Ao(e) {
    Vi !== null && Vi.tag === 0 && (pt & 6) === 0 && Is();
    var t = pt;
    pt |= 1;
    var n = Sr.transition,
      s = gt;
    try {
      if (((Sr.transition = null), (gt = 1), e)) return e();
    } finally {
      (gt = s), (Sr.transition = n), (pt = t), (pt & 6) === 0 && Wi();
    }
  }
  function Ec() {
    (cr = _s.current), Ft(_s);
  }
  function No(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), mg(n)), an !== null))
      for (n = an.return; n !== null; ) {
        var s = n;
        switch ((Pl(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Va();
            break;
          case 3:
            ws(), Ft(Jn), Ft(An), Hl();
            break;
          case 5:
            Wl(s);
            break;
          case 4:
            ws();
            break;
          case 13:
            Ft(Gt);
            break;
          case 19:
            Ft(Gt);
            break;
          case 10:
            Ml(s.type._context);
            break;
          case 22:
          case 23:
            Ec();
        }
        n = n.return;
      }
    if (
      ((vn = e),
      (an = e = Ji(e.current, null)),
      (_n = cr = t),
      (cn = 0),
      (ua = null),
      (hc = gu = To = 0),
      (Yn = la = null),
      bo !== null)
    ) {
      for (t = 0; t < bo.length; t++)
        if (((n = bo[t]), (s = n.interleaved), s !== null)) {
          n.interleaved = null;
          var u = s.next,
            f = n.pending;
          if (f !== null) {
            var y = f.next;
            (f.next = u), (s.next = y);
          }
          n.pending = s;
        }
      bo = null;
    }
    return e;
  }
  function Hd(e, t) {
    do {
      var n = an;
      try {
        if ((Ll(), (iu.current = uu), ou)) {
          for (var s = Qt.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), (s = s.next);
          }
          ou = !1;
        }
        if (
          ((Po = 0),
          (mn = ln = Qt = null),
          (na = !1),
          (ra = 0),
          (pc.current = null),
          n === null || n.return === null)
        ) {
          (cn = 1), (ua = t), (an = null);
          break;
        }
        e: {
          var f = e,
            y = n.return,
            O = n,
            P = t;
          if (
            ((t = _n),
            (O.flags |= 32768),
            P !== null && typeof P == "object" && typeof P.then == "function")
          ) {
            var $ = P,
              oe = O,
              le = oe.tag;
            if ((oe.mode & 1) === 0 && (le === 0 || le === 11 || le === 15)) {
              var re = oe.alternate;
              re
                ? ((oe.updateQueue = re.updateQueue),
                  (oe.memoizedState = re.memoizedState),
                  (oe.lanes = re.lanes))
                : ((oe.updateQueue = null), (oe.memoizedState = null));
            }
            var xe = hd(y);
            if (xe !== null) {
              (xe.flags &= -257),
                gd(xe, y, O, f, t),
                xe.mode & 1 && pd(f, $, t),
                (t = xe),
                (P = $);
              var Te = t.updateQueue;
              if (Te === null) {
                var Ne = new Set();
                Ne.add(P), (t.updateQueue = Ne);
              } else Te.add(P);
              break e;
            } else {
              if ((t & 1) === 0) {
                pd(f, $, t), _c();
                break e;
              }
              P = Error(o(426));
            }
          } else if (zt && O.mode & 1) {
            var tn = hd(y);
            if (tn !== null) {
              (tn.flags & 65536) === 0 && (tn.flags |= 256),
                gd(tn, y, O, f, t),
                Nl(Ss(P, O));
              break e;
            }
          }
          (f = P = Ss(P, O)),
            cn !== 4 && (cn = 2),
            la === null ? (la = [f]) : la.push(f),
            (f = y);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var F = fd(f, P, t);
                Ff(f, F);
                break e;
              case 1:
                O = P;
                var A = f.type,
                  B = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof A.getDerivedStateFromError == "function" ||
                    (B !== null &&
                      typeof B.componentDidCatch == "function" &&
                      ($i === null || !$i.has(B))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var he = dd(f, O, t);
                  Ff(f, he);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Vd(n);
      } catch (Me) {
        (t = Me), an === n && n !== null && (an = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qd() {
    var e = hu.current;
    return (hu.current = uu), e === null ? uu : e;
  }
  function _c() {
    (cn === 0 || cn === 3 || cn === 2) && (cn = 4),
      vn === null ||
        ((To & 268435455) === 0 && (gu & 268435455) === 0) ||
        Qi(vn, _n);
  }
  function Eu(e, t) {
    var n = pt;
    pt |= 2;
    var s = qd();
    (vn !== e || _n !== t) && ((Ei = null), No(e, t));
    do
      try {
        Wg();
        break;
      } catch (u) {
        Hd(e, u);
      }
    while (!0);
    if ((Ll(), (pt = n), (hu.current = s), an !== null)) throw Error(o(261));
    return (vn = null), (_n = 0), cn;
  }
  function Wg() {
    for (; an !== null; ) $d(an);
  }
  function zg() {
    for (; an !== null && !Ts(); ) $d(an);
  }
  function $d(e) {
    var t = Jd(e.alternate, e, cr);
    (e.memoizedProps = e.pendingProps),
      t === null ? Vd(e) : (an = t),
      (pc.current = null);
  }
  function Vd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Dg(n, t, cr)), n !== null)) {
          an = n;
          return;
        }
      } else {
        if (((n = Lg(n, t)), n !== null)) {
          (n.flags &= 32767), (an = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (cn = 6), (an = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        an = t;
        return;
      }
      an = t = e;
    } while (t !== null);
    cn === 0 && (cn = 5);
  }
  function Do(e, t, n) {
    var s = gt,
      u = Sr.transition;
    try {
      (Sr.transition = null), (gt = 1), Hg(e, t, n, s);
    } finally {
      (Sr.transition = u), (gt = s);
    }
    return null;
  }
  function Hg(e, t, n, s) {
    do Is();
    while (Vi !== null);
    if ((pt & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var u = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = n.lanes | n.childLanes;
    if (
      (La(e, f),
      e === vn && ((an = vn = null), (_n = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        vu ||
        ((vu = !0),
        Kd(Qo, function () {
          return Is(), null;
        })),
      (f = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || f)
    ) {
      (f = Sr.transition), (Sr.transition = null);
      var y = gt;
      gt = 1;
      var O = pt;
      (pt |= 4),
        (pc.current = null),
        jg(e, n),
        Md(n, e),
        dt(_l),
        (vo = !!El),
        (_l = El = null),
        (e.current = n),
        Fg(n),
        Go(),
        (pt = O),
        (gt = y),
        (Sr.transition = f);
    } else e.current = n;
    if (
      (vu && ((vu = !1), (Vi = e), (yu = u)),
      (f = e.pendingLanes),
      f === 0 && ($i = null),
      Ai(n.stateNode),
      Zn(e, Bt()),
      t !== null)
    )
      for (s = e.onRecoverableError, n = 0; n < t.length; n++)
        (u = t[n]), s(u.value, { componentStack: u.stack, digest: u.digest });
    if (mu) throw ((mu = !1), (e = mc), (mc = null), e);
    return (
      (yu & 1) !== 0 && e.tag !== 0 && Is(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === vc ? ca++ : ((ca = 0), (vc = e))) : (ca = 0),
      Wi(),
      null
    );
  }
  function Is() {
    if (Vi !== null) {
      var e = ri(yu),
        t = Sr.transition,
        n = gt;
      try {
        if (((Sr.transition = null), (gt = 16 > e ? 16 : e), Vi === null))
          var s = !1;
        else {
          if (((e = Vi), (Vi = null), (yu = 0), (pt & 6) !== 0))
            throw Error(o(331));
          var u = pt;
          for (pt |= 4, Re = e.current; Re !== null; ) {
            var f = Re,
              y = f.child;
            if ((Re.flags & 16) !== 0) {
              var O = f.deletions;
              if (O !== null) {
                for (var P = 0; P < O.length; P++) {
                  var $ = O[P];
                  for (Re = $; Re !== null; ) {
                    var oe = Re;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        aa(8, oe, f);
                    }
                    var le = oe.child;
                    if (le !== null) (le.return = oe), (Re = le);
                    else
                      for (; Re !== null; ) {
                        oe = Re;
                        var re = oe.sibling,
                          xe = oe.return;
                        if ((Td(oe), oe === $)) {
                          Re = null;
                          break;
                        }
                        if (re !== null) {
                          (re.return = xe), (Re = re);
                          break;
                        }
                        Re = xe;
                      }
                  }
                }
                var Te = f.alternate;
                if (Te !== null) {
                  var Ne = Te.child;
                  if (Ne !== null) {
                    Te.child = null;
                    do {
                      var tn = Ne.sibling;
                      (Ne.sibling = null), (Ne = tn);
                    } while (Ne !== null);
                  }
                }
                Re = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && y !== null)
              (y.return = f), (Re = y);
            else
              e: for (; Re !== null; ) {
                if (((f = Re), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      aa(9, f, f.return);
                  }
                var F = f.sibling;
                if (F !== null) {
                  (F.return = f.return), (Re = F);
                  break e;
                }
                Re = f.return;
              }
          }
          var A = e.current;
          for (Re = A; Re !== null; ) {
            y = Re;
            var B = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && B !== null)
              (B.return = y), (Re = B);
            else
              e: for (y = A; Re !== null; ) {
                if (((O = Re), (O.flags & 2048) !== 0))
                  try {
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pu(9, O);
                    }
                  } catch (Me) {
                    Yt(O, O.return, Me);
                  }
                if (O === y) {
                  Re = null;
                  break e;
                }
                var he = O.sibling;
                if (he !== null) {
                  (he.return = O.return), (Re = he);
                  break e;
                }
                Re = O.return;
              }
          }
          if (
            ((pt = u),
            Wi(),
            On && typeof On.onPostCommitFiberRoot == "function")
          )
            try {
              On.onPostCommitFiberRoot(so, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (gt = n), (Sr.transition = t);
      }
    }
    return !1;
  }
  function Gd(e, t, n) {
    (t = Ss(n, t)),
      (t = fd(e, t, 1)),
      (e = Hi(e, t, 1)),
      (t = qn()),
      e !== null && (lo(e, 1, t), Zn(e, t));
  }
  function Yt(e, t, n) {
    if (e.tag === 3) Gd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              ($i === null || !$i.has(s)))
          ) {
            (e = Ss(n, e)),
              (e = dd(t, e, 1)),
              (t = Hi(t, e, 1)),
              (e = qn()),
              t !== null && (lo(t, 1, e), Zn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function qg(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = qn()),
      (e.pingedLanes |= e.suspendedLanes & n),
      vn === e &&
        (_n & n) === n &&
        (cn === 4 || (cn === 3 && (_n & 130023424) === _n && 500 > Bt() - gc)
          ? No(e, 0)
          : (hc |= n)),
      Zn(e, t);
  }
  function Qd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = uo), (uo <<= 1), (uo & 130023424) === 0 && (uo = 4194304)));
    var n = qn();
    (e = yi(e, t)), e !== null && (lo(e, t, n), Zn(e, n));
  }
  function $g(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Qd(e, n);
  }
  function Vg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), Qd(e, n);
  }
  var Jd;
  Jd = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Jn.current) Xn = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Xn = !1), Ng(e, t, n);
        Xn = (e.flags & 131072) !== 0;
      }
    else (Xn = !1), zt && (t.flags & 1048576) !== 0 && bf(t, Ka, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        fu(e, t), (e = t.pendingProps);
        var u = ds(t, An.current);
        ys(t, n), (u = Vl(null, t, s, e, u, n));
        var f = Gl();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Kn(s) ? ((f = !0), Ga(t)) : (f = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ul(t),
              (u.updater = lu),
              (t.stateNode = u),
              (u._reactInternals = t),
              Zl(t, s, e, n),
              (t = rc(null, t, s, !0, f, n)))
            : ((t.tag = 0), zt && f && Rl(t), Hn(null, t, u, n), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (fu(e, t),
            (e = t.pendingProps),
            (u = s._init),
            (s = u(s._payload)),
            (t.type = s),
            (u = t.tag = Qg(s)),
            (e = Tr(s, e)),
            u)
          ) {
            case 0:
              t = nc(null, t, s, e, n);
              break e;
            case 1:
              t = Ed(null, t, s, e, n);
              break e;
            case 11:
              t = md(null, t, s, e, n);
              break e;
            case 14:
              t = vd(null, t, s, Tr(s.type, e), n);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Tr(s, u)),
          nc(e, t, s, u, n)
        );
      case 1:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Tr(s, u)),
          Ed(e, t, s, u, n)
        );
      case 3:
        e: {
          if ((_d(t), e === null)) throw Error(o(387));
          (s = t.pendingProps),
            (f = t.memoizedState),
            (u = f.element),
            jf(e, t),
            nu(t, s, null, n);
          var y = t.memoizedState;
          if (((s = y.element), f.isDehydrated))
            if (
              ((f = {
                element: s,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              (u = Ss(Error(o(423)), t)), (t = kd(e, t, s, n, u));
              break e;
            } else if (s !== u) {
              (u = Ss(Error(o(424)), t)), (t = kd(e, t, s, n, u));
              break e;
            } else
              for (
                lr = Fi(t.stateNode.containerInfo.firstChild),
                  ur = t,
                  zt = !0,
                  Pr = null,
                  n = Lf(t, null, s, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((gs(), s === u)) {
              t = Si(e, t, n);
              break e;
            }
            Hn(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Bf(t),
          e === null && Al(t),
          (s = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = u.children),
          kl(s, u) ? (y = null) : f !== null && kl(s, f) && (t.flags |= 32),
          Sd(e, t),
          Hn(e, t, y, n),
          t.child
        );
      case 6:
        return e === null && Al(t), null;
      case 13:
        return Id(e, t, n);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = ms(t, null, s, n)) : Hn(e, t, s, n),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Tr(s, u)),
          md(e, t, s, u, n)
        );
      case 7:
        return Hn(e, t, t.pendingProps, n), t.child;
      case 8:
        return Hn(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Hn(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (y = u.value),
            Dt(Za, s._currentValue),
            (s._currentValue = y),
            f !== null)
          )
            if (Nt(f.value, y)) {
              if (f.children === u.children && !Jn.current) {
                t = Si(e, t, n);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var O = f.dependencies;
                if (O !== null) {
                  y = f.child;
                  for (var P = O.firstContext; P !== null; ) {
                    if (P.context === s) {
                      if (f.tag === 1) {
                        (P = wi(-1, n & -n)), (P.tag = 2);
                        var $ = f.updateQueue;
                        if ($ !== null) {
                          $ = $.shared;
                          var oe = $.pending;
                          oe === null
                            ? (P.next = P)
                            : ((P.next = oe.next), (oe.next = P)),
                            ($.pending = P);
                        }
                      }
                      (f.lanes |= n),
                        (P = f.alternate),
                        P !== null && (P.lanes |= n),
                        jl(f.return, n, t),
                        (O.lanes |= n);
                      break;
                    }
                    P = P.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(o(341));
                  (y.lanes |= n),
                    (O = y.alternate),
                    O !== null && (O.lanes |= n),
                    jl(y, n, t),
                    (y = f.sibling);
                } else y = f.child;
                if (y !== null) y.return = f;
                else
                  for (y = f; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((f = y.sibling), f !== null)) {
                      (f.return = y.return), (y = f);
                      break;
                    }
                    y = y.return;
                  }
                f = y;
              }
          Hn(e, t, u.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (s = t.pendingProps.children),
          ys(t, n),
          (u = yr(u)),
          (s = s(u)),
          (t.flags |= 1),
          Hn(e, t, s, n),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (u = Tr(s, t.pendingProps)),
          (u = Tr(s.type, u)),
          vd(e, t, s, u, n)
        );
      case 15:
        return yd(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Tr(s, u)),
          fu(e, t),
          (t.tag = 1),
          Kn(s) ? ((e = !0), Ga(t)) : (e = !1),
          ys(t, n),
          ld(t, s, u),
          Zl(t, s, u, n),
          rc(null, t, s, !0, e, n)
        );
      case 19:
        return Cd(e, t, n);
      case 22:
        return wd(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Kd(e, t) {
    return Ti(e, t);
  }
  function Gg(e, t, n, s) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Er(e, t, n, s) {
    return new Gg(e, t, n, s);
  }
  function kc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Qg(e) {
    if (typeof e == "function") return kc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Kt)) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Ji(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Er(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function _u(e, t, n, s, u, f) {
    var y = 2;
    if (((s = e), typeof e == "function")) kc(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case Qe:
          return Lo(n.children, u, f, t);
        case fn:
          (y = 8), (u |= 8);
          break;
        case jn:
          return (
            (e = Er(12, n, t, u | 2)), (e.elementType = jn), (e.lanes = f), e
          );
        case xt:
          return (e = Er(13, n, t, u)), (e.elementType = xt), (e.lanes = f), e;
        case on:
          return (e = Er(19, n, t, u)), (e.elementType = on), (e.lanes = f), e;
        case et:
          return ku(n, u, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Fn:
                y = 10;
                break e;
              case un:
                y = 9;
                break e;
              case Kt:
                y = 11;
                break e;
              case dn:
                y = 14;
                break e;
              case bt:
                (y = 16), (s = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Er(y, n, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t
    );
  }
  function Lo(e, t, n, s) {
    return (e = Er(7, e, s, t)), (e.lanes = n), e;
  }
  function ku(e, t, n, s) {
    return (
      (e = Er(22, e, s, t)),
      (e.elementType = et),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ic(e, t, n) {
    return (e = Er(6, e, null, t)), (e.lanes = n), e;
  }
  function xc(e, t, n) {
    return (
      (t = Er(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Jg(e, t, n, s, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ds(0)),
      (this.expirationTimes = Ds(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ds(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Cc(e, t, n, s, u, f, y, O, P) {
    return (
      (e = new Jg(e, t, n, O, P)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = Er(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: s,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ul(f),
      e
    );
  }
  function Kg(e, t, n) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Et,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Xd(e) {
    if (!e) return Bi;
    e = e._reactInternals;
    e: {
      if (Ur(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Kn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Kn(n)) return xf(e, n, t);
    }
    return t;
  }
  function Yd(e, t, n, s, u, f, y, O, P) {
    return (
      (e = Cc(n, s, !0, e, u, f, y, O, P)),
      (e.context = Xd(null)),
      (n = e.current),
      (s = qn()),
      (u = Gi(n)),
      (f = wi(s, u)),
      (f.callback = t ?? null),
      Hi(n, f, u),
      (e.current.lanes = u),
      lo(e, u, s),
      Zn(e, s),
      e
    );
  }
  function Iu(e, t, n, s) {
    var u = t.current,
      f = qn(),
      y = Gi(u);
    return (
      (n = Xd(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = wi(f, y)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = Hi(u, t, y)),
      e !== null && (Dr(e, u, y, f), tu(e, u, y)),
      y
    );
  }
  function xu(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oc(e, t) {
    Zd(e, t), (e = e.alternate) && Zd(e, t);
  }
  function Xg() {
    return null;
  }
  var ep =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function bc(e) {
    this._internalRoot = e;
  }
  (Cu.prototype.render = bc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Iu(e, t, null, null);
    }),
    (Cu.prototype.unmount = bc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ao(function () {
            Iu(null, e, null, null);
          }),
            (t[hi] = null);
        }
      });
  function Cu(e) {
    this._internalRoot = e;
  }
  Cu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hr.length && t !== 0 && t < Hr[n].priority; n++);
      Hr.splice(n, 0, e), n === 0 && Fs(e);
    }
  };
  function Rc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ou(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function tp() {}
  function Yg(e, t, n, s, u) {
    if (u) {
      if (typeof s == "function") {
        var f = s;
        s = function () {
          var $ = xu(y);
          f.call($);
        };
      }
      var y = Yd(t, s, e, 0, null, !1, !1, "", tp);
      return (
        (e._reactRootContainer = y),
        (e[hi] = y.current),
        Qs(e.nodeType === 8 ? e.parentNode : e),
        Ao(),
        y
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof s == "function") {
      var O = s;
      s = function () {
        var $ = xu(P);
        O.call($);
      };
    }
    var P = Cc(e, 0, !1, null, null, !1, !1, "", tp);
    return (
      (e._reactRootContainer = P),
      (e[hi] = P.current),
      Qs(e.nodeType === 8 ? e.parentNode : e),
      Ao(function () {
        Iu(t, P, n, s);
      }),
      P
    );
  }
  function bu(e, t, n, s, u) {
    var f = n._reactRootContainer;
    if (f) {
      var y = f;
      if (typeof u == "function") {
        var O = u;
        u = function () {
          var P = xu(y);
          O.call(P);
        };
      }
      Iu(t, y, e, u);
    } else y = Yg(n, t, e, u, s);
    return xu(y);
  }
  (Ms = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ni(t.pendingLanes);
          n !== 0 &&
            (Ls(t, n | 1),
            Zn(t, Bt()),
            (pt & 6) === 0 && ((ks = Bt() + 500), Wi()));
        }
        break;
      case 13:
        Ao(function () {
          var s = yi(e, 1);
          if (s !== null) {
            var u = qn();
            Dr(s, e, 1, u);
          }
        }),
          Oc(e, 1);
    }
  }),
    (co = function (e) {
      if (e.tag === 13) {
        var t = yi(e, 134217728);
        if (t !== null) {
          var n = qn();
          Dr(t, e, 134217728, n);
        }
        Oc(e, 134217728);
      }
    }),
    (ii = function (e) {
      if (e.tag === 13) {
        var t = Gi(e),
          n = yi(e, t);
        if (n !== null) {
          var s = qn();
          Dr(n, e, t, s);
        }
        Oc(e, t);
      }
    }),
    (oi = function () {
      return gt;
    }),
    (js = function (e, t) {
      var n = gt;
      try {
        return (gt = e), t();
      } finally {
        gt = n;
      }
    }),
    (ve = function (e, t, n) {
      switch (t) {
        case "input":
          if ((E(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var s = n[t];
              if (s !== e && s.form === e.form) {
                var u = $a(s);
                if (!u) throw Error(o(90));
                _r(s), E(s, u);
              }
            }
          }
          break;
        case "textarea":
          Fe(e, n);
          break;
        case "select":
          (t = n.value), t != null && q(e, !!n.multiple, t, !1);
      }
    }),
    (ft = Sc),
    (Ce = Ao);
  var Zg = { usingClientEntryPoint: !1, Events: [Xs, cs, $a, tt, ht, Sc] },
    fa = {
      findFiberByHostInstance: Io,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    em = {
      bundleType: fa.bundleType,
      version: fa.version,
      rendererPackageName: fa.rendererPackageName,
      rendererConfig: fa.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ze.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ar(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fa.findFiberByHostInstance || Xg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ru.isDisabled && Ru.supportsFiber)
      try {
        (so = Ru.inject(em)), (On = Ru);
      } catch {}
  }
  return (
    (er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg),
    (er.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Rc(t)) throw Error(o(200));
      return Kg(e, t, null, n);
    }),
    (er.createRoot = function (e, t) {
      if (!Rc(e)) throw Error(o(299));
      var n = !1,
        s = "",
        u = ep;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Cc(e, 1, !1, null, null, n, !1, s, u)),
        (e[hi] = t.current),
        Qs(e.nodeType === 8 ? e.parentNode : e),
        new bc(t)
      );
    }),
    (er.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = ar(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (er.flushSync = function (e) {
      return Ao(e);
    }),
    (er.hydrate = function (e, t, n) {
      if (!Ou(t)) throw Error(o(200));
      return bu(null, e, t, !0, n);
    }),
    (er.hydrateRoot = function (e, t, n) {
      if (!Rc(e)) throw Error(o(405));
      var s = (n != null && n.hydratedSources) || null,
        u = !1,
        f = "",
        y = ep;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (u = !0),
          n.identifierPrefix !== void 0 && (f = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (t = Yd(t, null, e, 1, n ?? null, u, !1, f, y)),
        (e[hi] = t.current),
        Qs(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (n = s[e]),
            (u = n._getVersion),
            (u = u(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, u])
              : t.mutableSourceEagerHydrationData.push(n, u);
      return new Cu(t);
    }),
    (er.render = function (e, t, n) {
      if (!Ou(t)) throw Error(o(200));
      return bu(null, e, t, !1, n);
    }),
    (er.unmountComponentAtNode = function (e) {
      if (!Ou(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Ao(function () {
            bu(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[hi] = null);
            });
          }),
          !0)
        : !1;
    }),
    (er.unstable_batchedUpdates = Sc),
    (er.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
      if (!Ou(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return bu(e, t, n, !1, s);
    }),
    (er.version = "18.3.1-next-f1338f8080-20240426"),
    er
  );
}
var Wp;
function Xh() {
  if (Wp) return Fc.exports;
  Wp = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (Fc.exports = ny()), Fc.exports;
}
Xh();
const ry = (r, i) => {
    He.useEffect(() => {
      r().then((o) => {
        o == null || o();
      });
    }, i);
  },
  iy = (r, i) =>
    Wh(
      (o) => {
        new IntersectionObserver(o, r).observe(i);
      },
      () => {},
      (o) => (o == null ? void 0 : o[0]) || null,
    ).pipe(
      Ap(Sv),
      Ap((o) => o.isIntersecting),
    ),
  oy = ({ getRoot: r, getTarget: i, callback: o }) => {
    He.useEffect(() => {
      const l = r(),
        p = i();
      if (!l || !p) return;
      const v = iy({ root: l }, p).subscribe((R) => {
        o(R);
      });
      return () => {
        v.unsubscribe();
      };
    }, [o, r, i]);
  },
  sy = ({ id: r, getTarget: i, getRoot: o, callback: l }) => {
    const p = He.useRef(new Set()),
      m = He.useCallback(() => document.body, []),
      v = He.useCallback(
        (R) => {
          p.current.has(r) || (p.current.add(r), l(R));
        },
        [l, r],
      );
    oy({ getTarget: i, callback: v, getRoot: o || m });
  };
var Bu = { exports: {} },
  ay = Bu.exports,
  zp;
function uy() {
  return (
    zp ||
      ((zp = 1),
      (function (r, i) {
        (function (o, l) {
          r.exports = l(Zu());
        })(typeof self < "u" ? self : ay, (o) =>
          (() => {
            var l = {
                896: (R, _, D) => {
                  Object.defineProperty(_, "__esModule", { value: !0 }),
                    (_.useAllInjections =
                      _.useOptionalInjection =
                      _.useInjection =
                      _.useContainer =
                        void 0);
                  var X = D(12),
                    G = D(799);
                  function se(Z) {
                    var ie,
                      V,
                      J = (0, X.useContext)(G.InversifyReactContext);
                    if (!J)
                      throw new Error(
                        "Cannot find Inversify container on React Context. `Provider` component is missing in component tree.",
                      );
                    return Z
                      ? ((ie = function () {
                          return Z(J);
                        }),
                        (V = (0, X.useRef)()).current ||
                          (V.current = { v: ie() }),
                        V.current.v)
                      : J;
                  }
                  (_.useContainer = se),
                    (_.useInjection = function (Z) {
                      return se(function (ie) {
                        return ie.get(Z);
                      });
                    }),
                    (_.useOptionalInjection = function (Z, ie) {
                      return (
                        ie === void 0 && (ie = function () {}),
                        se(function (V) {
                          return V.isBound(Z) ? V.get(Z) : ie(V);
                        })
                      );
                    }),
                    (_.useAllInjections = function (Z) {
                      return se(function (ie) {
                        return ie.getAll(Z);
                      });
                    });
                },
                799: (R, _, D) => {
                  Object.defineProperty(_, "__esModule", { value: !0 }),
                    (_.getInstanceAdministration =
                      _.getClassAdministration =
                      _.createProperty =
                      _.ensureAcceptContext =
                      _.AdministrationKey =
                      _.InversifyReactContext =
                        void 0);
                  var X = (0, D(12).createContext)(void 0);
                  (_.InversifyReactContext = X),
                    (X.displayName = "InversifyReactContext");
                  var G = "contextType",
                    se = "~$inversify-react";
                  function Z(V) {
                    var J = V[se];
                    return (
                      J ||
                        ((J = { accepts: !1 }),
                        Object.defineProperty(V, se, {
                          enumerable: !1,
                          writable: !1,
                          value: J,
                        })),
                      J
                    );
                  }
                  function ie(V) {
                    var J = V[se];
                    if (!J) {
                      var _e = V.context;
                      if (!_e)
                        throw new Error(
                          "Cannot use resolve services without any providers in component tree.",
                        );
                      (J = { container: _e, properties: {} }),
                        Object.defineProperty(V, se, {
                          enumerable: !1,
                          writable: !1,
                          value: J,
                        });
                    }
                    return J;
                  }
                  (_.AdministrationKey = se),
                    (_.getClassAdministration = Z),
                    (_.getInstanceAdministration = ie),
                    (_.ensureAcceptContext = function (V) {
                      var J = Z(V);
                      if (!J.accepts) {
                        var _e = V.contextType,
                          te = V.displayName || V.name;
                        if (_e)
                          throw new Error(
                            `inversify-react cannot configure React context.
` +
                              "Component `"
                                .concat(te, "` already has `")
                                .concat(G, ": ")
                                .concat(
                                  _e.displayName || "<anonymous context>",
                                  "` defined.\n",
                                ) +
                              `@see inversify-react/test/resolve.tsx#limitations for more info and workarounds
`,
                          );
                        Object.defineProperty(V, G, {
                          enumerable: !0,
                          get: function () {
                            return X;
                          },
                          set: function (me) {
                            if (me !== X)
                              throw new Error(
                                "Cannot change `"
                                  .concat(G, "` of `")
                                  .concat(te, "` component.\n") +
                                  `Looks like you are using inversify-react decorators, which have already patched this component and use own context to deliver IoC container.
@see inversify-react/test/resolve.tsx#limitations for more info and workarounds
`,
                              );
                          },
                        }),
                          (J.accepts = !0);
                      }
                    }),
                    (_.createProperty = function (V, J, _e, te) {
                      Object.defineProperty(V, J, {
                        enumerable: !0,
                        get: function () {
                          var Ze = ie(this),
                            Ge = Ze.properties[J];
                          if (!Ge) {
                            var Et,
                              Qe = Ze.container;
                            (Et = te.isAll
                              ? te.isOptional && !Qe.isBound(_e)
                                ? []
                                : Qe.getAll(_e)
                              : te.isOptional
                                ? Qe.isBound(_e)
                                  ? Qe.get(_e)
                                  : te.defaultValue
                                : Qe.get(_e)),
                              (Ge = Ze.properties[J] =
                                function () {
                                  return Et;
                                });
                          }
                          return Ge();
                        },
                      });
                      var me = Object.getOwnPropertyDescriptor(V, J);
                      if (!me) throw new Error("Failed to define property");
                      return me;
                    });
                },
                21: (R, _, D) => {
                  Object.defineProperty(_, "__esModule", { value: !0 }),
                    (_.Provider = void 0);
                  var X = D(12),
                    G = D(12),
                    se = D(799),
                    Z = function (ie) {
                      var V = ie.children,
                        J = ie.container,
                        _e = ie.standalone,
                        te = _e !== void 0 && _e,
                        me = (0, G.useState)(J)[0];
                      if ("resolve" in J && J !== me)
                        throw new Error(
                          "Changing `container` prop (swapping container in runtime) is not supported.\nIf you're rendering Provider in some list, try adding `key={container.id}` to the Provider.\nMore info on React lists:\nhttps://reactjs.org/docs/lists-and-keys.html#keys\nhttps://reactjs.org/docs/reconciliation.html#recursing-on-children",
                        );
                      var Ze = (0, G.useState)(te)[0];
                      if (te !== Ze)
                        throw new Error(
                          "Changing `standalone` prop is not supported.",
                        );
                      var Ge = (0, G.useContext)(se.InversifyReactContext);
                      return (
                        (0, G.useState)(function () {
                          if (!Ze && Ge) {
                            if (Ge === me)
                              throw new Error(
                                "Provider has found a parent container (on surrounding React Context), yet somehow it's the same as container specified in props. It doesn't make sense.\nPerhaps you meant to configure Provider as `standalone={true}`?",
                              );
                            if (me.parent && me.parent !== Ge)
                              throw new Error(
                                "Ambiguous containers hierarchy.\nProvider has found a parent for specified `container`, but it already has a different parent.\nLearn more at https://github.com/Kukkimonsuta/inversify-react/blob/v0.5.0/src/provider.tsx",
                              );
                            me.parent = Ge;
                          }
                        }),
                        X.createElement(
                          se.InversifyReactContext.Provider,
                          { value: me },
                          V,
                        )
                      );
                    };
                  (_.Provider = Z), (_.default = Z);
                },
                704: (R, _, D) => {
                  Object.defineProperty(_, "__esModule", { value: !0 }),
                    (_.resolve = void 0);
                  var X = D(799);
                  function G(ie, V, J, _e) {
                    return (
                      (0, X.ensureAcceptContext)(ie.constructor),
                      (0, X.createProperty)(ie, V, J, _e)
                    );
                  }
                  function se(ie, V) {
                    if (!V)
                      throw new Error(
                        "Decorator `resolve` failed to resolve property name",
                      );
                    if (!Reflect || !Reflect.getMetadata)
                      throw new Error(
                        "Decorator `resolve` without specifying service identifier requires `reflect-metadata`",
                      );
                    var J = Reflect.getMetadata("design:type", ie, V);
                    if (!J)
                      throw new Error(
                        "Failed to discover property type, is `emitDecoratorMetadata` enabled?",
                      );
                    return J;
                  }
                  var Z = function (ie, V, J) {
                    if (V !== void 0) return G(ie, V, se(ie, V), {});
                    var _e = ie;
                    if (!_e) throw new Error("Invalid property type.");
                    return function (te, me, Ze) {
                      return G(te, me, _e, {});
                    };
                  };
                  (_.resolve = Z),
                    (Z.optional = function () {
                      for (var ie = [], V = 0; V < arguments.length; V++)
                        ie[V] = arguments[V];
                      if (typeof ie[1] == "string" && ie.length === 3) {
                        var J = ie[0],
                          _e = ie[1];
                        return ie[2], G(J, _e, se(J, _e), { isOptional: !0 });
                      }
                      var te = ie[0],
                        me = ie[1];
                      return function (Ze, Ge, Et) {
                        return G(Ze, Ge, te, {
                          isOptional: !0,
                          defaultValue: me,
                        });
                      };
                    }),
                    (Z.all = function () {
                      for (var ie = [], V = 0; V < arguments.length; V++)
                        ie[V] = arguments[V];
                      if (typeof ie[1] == "string" && ie.length === 3) {
                        var J = ie[0],
                          _e = ie[1];
                        return ie[2], G(J, _e, se(J, _e), { isAll: !0 });
                      }
                      var te = ie[0];
                      return function (me, Ze, Ge) {
                        return G(me, Ze, te, { isAll: !0 });
                      };
                    }),
                    (Z.optional.all = function () {
                      for (var ie = [], V = 0; V < arguments.length; V++)
                        ie[V] = arguments[V];
                      if (typeof ie[1] == "string" && ie.length === 3) {
                        var J = ie[0],
                          _e = ie[1];
                        return ie[2], G(J, _e, se(J, _e), { isAll: !0 });
                      }
                      var te = ie[0];
                      return function (me, Ze, Ge) {
                        return G(me, Ze, te, { isAll: !0, isOptional: !0 });
                      };
                    }),
                    (_.default = Z);
                },
                12: (R) => {
                  R.exports = o;
                },
              },
              p = {};
            function m(R) {
              var _ = p[R];
              if (_ !== void 0) return _.exports;
              var D = (p[R] = { exports: {} });
              return l[R](D, D.exports, m), D.exports;
            }
            var v = {};
            return (
              (() => {
                var R = v;
                Object.defineProperty(R, "__esModule", { value: !0 }),
                  (R.useOptionalInjection =
                    R.useInjection =
                    R.useContainer =
                    R.useAllInjections =
                    R.Provider =
                    R.resolve =
                      void 0);
                var _ = m(704);
                Object.defineProperty(R, "resolve", {
                  enumerable: !0,
                  get: function () {
                    return _.resolve;
                  },
                });
                var D = m(21);
                Object.defineProperty(R, "Provider", {
                  enumerable: !0,
                  get: function () {
                    return D.Provider;
                  },
                });
                var X = m(896);
                Object.defineProperty(R, "useAllInjections", {
                  enumerable: !0,
                  get: function () {
                    return X.useAllInjections;
                  },
                }),
                  Object.defineProperty(R, "useContainer", {
                    enumerable: !0,
                    get: function () {
                      return X.useContainer;
                    },
                  }),
                  Object.defineProperty(R, "useInjection", {
                    enumerable: !0,
                    get: function () {
                      return X.useInjection;
                    },
                  }),
                  Object.defineProperty(R, "useOptionalInjection", {
                    enumerable: !0,
                    get: function () {
                      return X.useOptionalInjection;
                    },
                  });
              })(),
              v
            );
          })(),
        );
      })(Bu)),
    Bu.exports
  );
}
var gf = uy();
const ly = "_commonIcon_hxbfy_1",
  Yh = { commonIcon: ly },
  Zh = ({ className: r = "", style: i, size: o, ...l }) => {
    const p = o ? { width: o, height: o } : {},
      m = `${Yh.commonIcon} icon-empty-placeholder ${r}`;
    return Oe.jsx("span", {
      className: m,
      style: { ...i, ...p },
      ...l,
      children: Oe.jsxs("svg", {
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          Oe.jsxs("g", {
            clipPath: "url(#clip0_6332_306477)",
            children: [
              Oe.jsx("path", {
                d: "M4 28H52V50C52 51.1046 51.1046 52 50 52H6C4.89543 52 4 51.1046 4 50V28Z",
                fill: "url(#paint0_linear_6332_306477)",
              }),
              Oe.jsx("path", {
                d: "M9.4 20.8C9.77771 20.2964 10.3705 20 11 20H45C45.6295 20 46.2223 20.2964 46.6 20.8L52 28C52 29.1046 51.1046 30 50 30H6C4.89543 30 4 29.1046 4 28L9.4 20.8Z",
                fill: "url(#paint1_linear_6332_306477)",
              }),
              Oe.jsx("rect", {
                x: "18",
                y: "35",
                width: "20",
                height: "3",
                rx: "1.5",
                fill: "#CCCCCC",
              }),
              Oe.jsx("rect", {
                x: "9",
                y: "4",
                width: "38",
                height: "26",
                fill: "url(#paint2_linear_6332_306477)",
              }),
              Oe.jsx("circle", {
                cx: "25",
                cy: "17",
                r: "1",
                fill: "black",
                fillOpacity: "0.24",
              }),
              Oe.jsx("circle", {
                cx: "28",
                cy: "17",
                r: "1",
                fill: "black",
                fillOpacity: "0.3",
              }),
              Oe.jsx("circle", {
                cx: "31",
                cy: "17",
                r: "1",
                fill: "black",
                fillOpacity: "0.44",
              }),
            ],
          }),
          Oe.jsxs("defs", {
            children: [
              Oe.jsxs("linearGradient", {
                id: "paint0_linear_6332_306477",
                x1: "28",
                y1: "28",
                x2: "28",
                y2: "55",
                gradientUnits: "userSpaceOnUse",
                children: [
                  Oe.jsx("stop", { stopColor: "#DBDBDB" }),
                  Oe.jsx("stop", { offset: "1", stopColor: "#D4D4D4" }),
                ],
              }),
              Oe.jsxs("linearGradient", {
                id: "paint1_linear_6332_306477",
                x1: "52",
                y1: "23.5",
                x2: "4",
                y2: "23.5",
                gradientUnits: "userSpaceOnUse",
                children: [
                  Oe.jsx("stop", { stopColor: "#8C8C8C" }),
                  Oe.jsx("stop", { offset: "0.169271", stopColor: "#B6B6B6" }),
                  Oe.jsx("stop", { offset: "0.479167", stopColor: "#BABABA" }),
                  Oe.jsx("stop", { offset: "0.815104", stopColor: "#B6B6B6" }),
                  Oe.jsx("stop", { offset: "1", stopColor: "#8C8C8C" }),
                ],
              }),
              Oe.jsxs("linearGradient", {
                id: "paint2_linear_6332_306477",
                x1: "28",
                y1: "26.5",
                x2: "28",
                y2: "38",
                gradientUnits: "userSpaceOnUse",
                children: [
                  Oe.jsx("stop", { stopColor: "#ECECEC" }),
                  Oe.jsx("stop", { offset: "1", stopColor: "#727272" }),
                ],
              }),
              Oe.jsx("clipPath", {
                id: "clip0_6332_306477",
                children: Oe.jsx("rect", {
                  width: "56",
                  height: "56",
                  rx: "13.125",
                  fill: "white",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
Zh.displayName = "EmptyPlaceholderIcon";
const eg = ({ className: r = "", style: i, size: o, ...l }) => {
  const p = o ? { width: o, height: o } : {},
    m = `${Yh.commonIcon} icon-panda ${r}`;
  return Oe.jsx("span", {
    className: m,
    style: { ...i, ...p },
    ...l,
    children: Oe.jsxs("svg", {
      viewBox: "0 0 56 39",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        Oe.jsx("path", {
          d: "M50.1599 16.7998C52.5333 14.7873 52.063 10.2865 49.1219 6.73726C46.1808 3.18804 41.8703 1.9521 39.5089 3.9657C37.1475 5.97929 37.6058 10.479 40.5469 14.0282C43.488 17.5774 47.7853 18.8177 50.1599 16.7998Z",
          fill: "currentColor",
        }),
        Oe.jsx("path", {
          d: "M4.51261 16.7998C2.14136 14.7873 2.61058 10.2865 5.55168 6.73726C8.49277 3.18804 12.7978 1.9521 15.1592 3.9657C17.5206 5.97929 17.0612 10.479 14.1201 14.0282C11.179 17.5774 6.88496 18.8177 4.51261 16.7998Z",
          fill: "currentColor",
        }),
        Oe.jsx("path", {
          d: "M10.9228 35.6207C8.55152 33.6071 9.02074 29.1063 11.9618 25.5582C14.9029 22.0101 19.2079 20.7698 21.5693 22.7823C23.9307 24.7948 23.4714 29.2955 20.5314 32.8448C17.5914 36.394 13.2951 37.6332 10.9228 35.6207Z",
          fill: "currentColor",
        }),
        Oe.jsx("path", {
          d: "M35.4686 32.8447C32.5286 29.2944 32.0594 24.7936 34.4307 22.7822C36.8019 20.7708 41.1025 22.0079 44.0382 25.5582C46.9738 29.1085 47.4485 33.6082 45.0772 35.6207C42.706 37.6332 38.3988 36.383 35.4686 32.8447Z",
          fill: "currentColor",
        }),
        Oe.jsx("path", {
          d: "M28 36.7051C30.0563 36.7051 31.7188 35.6748 31.7188 34.4082C31.7188 33.1416 30.0563 32.1113 28 32.1113C25.9438 32.1113 24.2812 33.1416 24.2812 34.4082C24.2812 35.6748 25.9438 36.7051 28 36.7051Z",
          fill: "currentColor",
        }),
      ],
    }),
  });
};
eg.displayName = "PandaIcon";
const cy = "_historyEmptyWrap_zghcm_1",
  fy = "_defaultIcon_zghcm_7",
  dy = "_emptyText_zghcm_11",
  py = "_reload_zghcm_19",
  Lu = { historyEmptyWrap: cy, defaultIcon: fy, emptyText: dy, reload: py },
  hy = (r) => {
    const {
        icon: i = Oe.jsx(eg, { className: Lu.defaultIcon }),
        text: o = "暂无更多",
        className: l,
        textStyle: p = {},
        showReload: m = !1,
        onReload: v,
      } = r || {},
      R = () => {
        v ? v() : window.location.reload();
      };
    return Oe.jsxs("div", {
      className: `${Lu.historyEmptyWrap} ${l}`,
      children: [
        i,
        Oe.jsx("div", { className: Lu.emptyText, style: p, children: o }),
        m &&
          Oe.jsx("div", {
            className: Lu.reload,
            onClick: R,
            children: "点击重试",
          }),
      ],
    });
  },
  gy = "_error_1ooqv_1",
  my = { error: gy },
  vy = () => Oe.jsx("div", { className: my.error, children: "渲染出了点问题" });
class yy extends zh.Component {
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  constructor(i) {
    super(i), (this.state = { hasError: !1 });
  }
  componentDidCatch(i) {
    var o, l;
    this.props.onError(i, `ErrorBoundary.${this.props.name}`),
      (l = (o = this.props).reportErrorEvent) == null ||
        l.call(o, "error-boundary", { ext1: this.props.name });
  }
  render() {
    return this.state.hasError
      ? this.props.fallback || Oe.jsx(vy, {})
      : this.props.children;
  }
}
const wy = "_container_1tyj3_1",
  Sy = "_emptyIcon_1tyj3_9",
  Hp = { container: wy, emptyIcon: Sy };
function Ey({
  errorText: r = "页面错误",
  errorIcon: i,
  showReload: o = !1,
  logger: l,
  name: p,
  needAutoReload: m = !0,
  className: v = "",
  style: R = {},
  onReload: _,
}) {
  const D = i || Oe.jsx(Zh, { className: Hp.emptyIcon });
  return (
    He.useEffect(() => {
      if (!m) return;
      if (
        (l == null || l.reportEvent("page-error", { ext1: p }),
        navigator.onLine)
      ) {
        l == null || l.info("navigator.onLine: true", "PageError");
        return;
      }
      const X = () => {
        if (
          (l == null ||
            l.info("network reconnected, navigator.onLine: true", "PageError"),
          _)
        ) {
          _();
          return;
        }
        window.location.reload();
      };
      return (
        window.addEventListener("online", X),
        () => {
          window.removeEventListener("online", X);
        }
      );
    }, []),
    Oe.jsx("div", {
      style: R,
      className: Xc(Hp.container, v),
      children: Oe.jsx(hy, { text: r, icon: D, showReload: o, onReload: _ }),
    })
  );
}
var Mu = {},
  qp;
function _y() {
  if (qp) return Mu;
  qp = 1;
  var r = Xh();
  return (Mu.createRoot = r.createRoot), (Mu.hydrateRoot = r.hydrateRoot), Mu;
}
var ky = _y();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ku() {
  return (
    (Ku = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
          }
          return r;
        }),
    Ku.apply(this, arguments)
  );
}
var to;
(function (r) {
  (r.Pop = "POP"), (r.Push = "PUSH"), (r.Replace = "REPLACE");
})(to || (to = {}));
const $p = "popstate";
function Iy(r) {
  r === void 0 && (r = {});
  function i(p, m) {
    let {
      pathname: v = "/",
      search: R = "",
      hash: _ = "",
    } = ba(p.location.hash.substr(1));
    return (
      !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v),
      Yc(
        "",
        { pathname: v, search: R, hash: _ },
        (m.state && m.state.usr) || null,
        (m.state && m.state.key) || "default",
      )
    );
  }
  function o(p, m) {
    let v = p.document.querySelector("base"),
      R = "";
    if (v && v.getAttribute("href")) {
      let _ = p.location.href,
        D = _.indexOf("#");
      R = D === -1 ? _ : _.slice(0, D);
    }
    return R + "#" + (typeof m == "string" ? m : tg(m));
  }
  function l(p, m) {
    mf(
      p.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(m) +
        ")",
    );
  }
  return Cy(i, o, l, r);
}
function rr(r, i) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(i);
}
function mf(r, i) {
  if (!r) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function xy() {
  return Math.random().toString(36).substr(2, 8);
}
function Vp(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function Yc(r, i, o, l) {
  return (
    o === void 0 && (o = null),
    Ku(
      { pathname: typeof r == "string" ? r : r.pathname, search: "", hash: "" },
      typeof i == "string" ? ba(i) : i,
      { state: o, key: (i && i.key) || l || xy() },
    )
  );
}
function tg(r) {
  let { pathname: i = "/", search: o = "", hash: l = "" } = r;
  return (
    o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (i += l.charAt(0) === "#" ? l : "#" + l),
    i
  );
}
function ba(r) {
  let i = {};
  if (r) {
    let o = r.indexOf("#");
    o >= 0 && ((i.hash = r.substr(o)), (r = r.substr(0, o)));
    let l = r.indexOf("?");
    l >= 0 && ((i.search = r.substr(l)), (r = r.substr(0, l))),
      r && (i.pathname = r);
  }
  return i;
}
function Cy(r, i, o, l) {
  l === void 0 && (l = {});
  let { window: p = document.defaultView, v5Compat: m = !1 } = l,
    v = p.history,
    R = to.Pop,
    _ = null,
    D = X();
  D == null && ((D = 0), v.replaceState(Ku({}, v.state, { idx: D }), ""));
  function X() {
    return (v.state || { idx: null }).idx;
  }
  function G() {
    R = to.Pop;
    let J = X(),
      _e = J == null ? null : J - D;
    (D = J), _ && _({ action: R, location: V.location, delta: _e });
  }
  function se(J, _e) {
    R = to.Push;
    let te = Yc(V.location, J, _e);
    o && o(te, J), (D = X() + 1);
    let me = Vp(te, D),
      Ze = V.createHref(te);
    try {
      v.pushState(me, "", Ze);
    } catch (Ge) {
      if (Ge instanceof DOMException && Ge.name === "DataCloneError") throw Ge;
      p.location.assign(Ze);
    }
    m && _ && _({ action: R, location: V.location, delta: 1 });
  }
  function Z(J, _e) {
    R = to.Replace;
    let te = Yc(V.location, J, _e);
    o && o(te, J), (D = X());
    let me = Vp(te, D),
      Ze = V.createHref(te);
    v.replaceState(me, "", Ze),
      m && _ && _({ action: R, location: V.location, delta: 0 });
  }
  function ie(J) {
    let _e = p.location.origin !== "null" ? p.location.origin : p.location.href,
      te = typeof J == "string" ? J : tg(J);
    return (
      (te = te.replace(/ $/, "%20")),
      rr(
        _e,
        "No window.location.(origin|href) available to create URL for href: " +
          te,
      ),
      new URL(te, _e)
    );
  }
  let V = {
    get action() {
      return R;
    },
    get location() {
      return r(p, v);
    },
    listen(J) {
      if (_) throw new Error("A history only accepts one active listener");
      return (
        p.addEventListener($p, G),
        (_ = J),
        () => {
          p.removeEventListener($p, G), (_ = null);
        }
      );
    },
    createHref(J) {
      return i(p, J);
    },
    createURL: ie,
    encodeLocation(J) {
      let _e = ie(J);
      return { pathname: _e.pathname, search: _e.search, hash: _e.hash };
    },
    push: se,
    replace: Z,
    go(J) {
      return v.go(J);
    },
  };
  return V;
}
var Gp;
(function (r) {
  (r.data = "data"),
    (r.deferred = "deferred"),
    (r.redirect = "redirect"),
    (r.error = "error");
})(Gp || (Gp = {}));
function Oy(r, i, o) {
  return o === void 0 && (o = "/"), by(r, i, o);
}
function by(r, i, o, l) {
  let p = typeof i == "string" ? ba(i) : i,
    m = ig(p.pathname || "/", o);
  if (m == null) return null;
  let v = ng(r);
  Ry(v);
  let R = null;
  for (let _ = 0; R == null && _ < v.length; ++_) {
    let D = Wy(m);
    R = Fy(v[_], D);
  }
  return R;
}
function ng(r, i, o, l) {
  i === void 0 && (i = []), o === void 0 && (o = []), l === void 0 && (l = "");
  let p = (m, v, R) => {
    let _ = {
      relativePath: R === void 0 ? m.path || "" : R,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: v,
      route: m,
    };
    _.relativePath.startsWith("/") &&
      (rr(
        _.relativePath.startsWith(l),
        'Absolute route path "' +
          _.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (_.relativePath = _.relativePath.slice(l.length)));
    let D = bs([l, _.relativePath]),
      X = o.concat(_);
    m.children &&
      m.children.length > 0 &&
      (rr(
        m.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + D + '".'),
      ),
      ng(m.children, i, X, D)),
      !(m.path == null && !m.index) &&
        i.push({ path: D, score: My(D, m.index), routesMeta: X });
  };
  return (
    r.forEach((m, v) => {
      var R;
      if (m.path === "" || !((R = m.path) != null && R.includes("?"))) p(m, v);
      else for (let _ of rg(m.path)) p(m, v, _);
    }),
    i
  );
}
function rg(r) {
  let i = r.split("/");
  if (i.length === 0) return [];
  let [o, ...l] = i,
    p = o.endsWith("?"),
    m = o.replace(/\?$/, "");
  if (l.length === 0) return p ? [m, ""] : [m];
  let v = rg(l.join("/")),
    R = [];
  return (
    R.push(...v.map((_) => (_ === "" ? m : [m, _].join("/")))),
    p && R.push(...v),
    R.map((_) => (r.startsWith("/") && _ === "" ? "/" : _))
  );
}
function Ry(r) {
  r.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : jy(
          i.routesMeta.map((l) => l.childrenIndex),
          o.routesMeta.map((l) => l.childrenIndex),
        ),
  );
}
const Py = /^:[\w-]+$/,
  Ty = 3,
  Ay = 2,
  Ny = 1,
  Dy = 10,
  Ly = -2,
  Qp = (r) => r === "*";
function My(r, i) {
  let o = r.split("/"),
    l = o.length;
  return (
    o.some(Qp) && (l += Ly),
    i && (l += Ay),
    o
      .filter((p) => !Qp(p))
      .reduce((p, m) => p + (Py.test(m) ? Ty : m === "" ? Ny : Dy), l)
  );
}
function jy(r, i) {
  return r.length === i.length && r.slice(0, -1).every((l, p) => l === i[p])
    ? r[r.length - 1] - i[i.length - 1]
    : 0;
}
function Fy(r, i, o) {
  let { routesMeta: l } = r,
    p = {},
    m = "/",
    v = [];
  for (let R = 0; R < l.length; ++R) {
    let _ = l[R],
      D = R === l.length - 1,
      X = m === "/" ? i : i.slice(m.length) || "/",
      G = Uy(
        { path: _.relativePath, caseSensitive: _.caseSensitive, end: D },
        X,
      ),
      se = _.route;
    if (!G) return null;
    Object.assign(p, G.params),
      v.push({
        params: p,
        pathname: bs([m, G.pathname]),
        pathnameBase: zy(bs([m, G.pathnameBase])),
        route: se,
      }),
      G.pathnameBase !== "/" && (m = bs([m, G.pathnameBase]));
  }
  return v;
}
function Uy(r, i) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, l] = By(r.path, r.caseSensitive, r.end),
    p = i.match(o);
  if (!p) return null;
  let m = p[0],
    v = m.replace(/(.)\/+$/, "$1"),
    R = p.slice(1);
  return {
    params: l.reduce((D, X, G) => {
      let { paramName: se, isOptional: Z } = X;
      if (se === "*") {
        let V = R[G] || "";
        v = m.slice(0, m.length - V.length).replace(/(.)\/+$/, "$1");
      }
      const ie = R[G];
      return (
        Z && !ie ? (D[se] = void 0) : (D[se] = (ie || "").replace(/%2F/g, "/")),
        D
      );
    }, {}),
    pathname: m,
    pathnameBase: v,
    pattern: r,
  };
}
function By(r, i, o) {
  i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    mf(
      r === "*" || !r.endsWith("*") || r.endsWith("/*"),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'),
    );
  let l = [],
    p =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (v, R, _) => (
            l.push({ paramName: R, isOptional: _ != null }),
            _ ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    r.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (p += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (p += "\\/*$")
        : r !== "" && r !== "/" && (p += "(?:(?=\\/|$))"),
    [new RegExp(p, i ? void 0 : "i"), l]
  );
}
function Wy(r) {
  try {
    return r
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      mf(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + i + ")."),
      ),
      r
    );
  }
}
function ig(r, i) {
  if (i === "/") return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith("/") ? i.length - 1 : i.length,
    l = r.charAt(o);
  return l && l !== "/" ? null : r.slice(o) || "/";
}
const bs = (r) => r.join("/").replace(/\/\/+/g, "/"),
  zy = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/");
function Hy(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
const og = ["post", "put", "patch", "delete"];
new Set(og);
const qy = ["get", ...og];
new Set(qy);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xu() {
  return (
    (Xu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
          }
          return r;
        }),
    Xu.apply(this, arguments)
  );
}
const $y = He.createContext(null),
  Vy = He.createContext(null),
  sg = He.createContext(null),
  ol = He.createContext(null),
  sl = He.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ag = He.createContext(null);
function vf() {
  return He.useContext(ol) != null;
}
function ug() {
  return vf() || rr(!1), He.useContext(ol).location;
}
function Gy(r, i) {
  return Qy(r, i);
}
function Qy(r, i, o, l) {
  vf() || rr(!1);
  let { navigator: p } = He.useContext(sg),
    { matches: m } = He.useContext(sl),
    v = m[m.length - 1],
    R = v ? v.params : {};
  v && v.pathname;
  let _ = v ? v.pathnameBase : "/";
  v && v.route;
  let D = ug(),
    X;
  if (i) {
    var G;
    let J = typeof i == "string" ? ba(i) : i;
    _ === "/" || ((G = J.pathname) != null && G.startsWith(_)) || rr(!1),
      (X = J);
  } else X = D;
  let se = X.pathname || "/",
    Z = se;
  if (_ !== "/") {
    let J = _.replace(/^\//, "").split("/");
    Z = "/" + se.replace(/^\//, "").split("/").slice(J.length).join("/");
  }
  let ie = Oy(r, { pathname: Z }),
    V = Zy(
      ie &&
        ie.map((J) =>
          Object.assign({}, J, {
            params: Object.assign({}, R, J.params),
            pathname: bs([
              _,
              p.encodeLocation
                ? p.encodeLocation(J.pathname).pathname
                : J.pathname,
            ]),
            pathnameBase:
              J.pathnameBase === "/"
                ? _
                : bs([
                    _,
                    p.encodeLocation
                      ? p.encodeLocation(J.pathnameBase).pathname
                      : J.pathnameBase,
                  ]),
          }),
        ),
      m,
      o,
      l,
    );
  return i && V
    ? He.createElement(
        ol.Provider,
        {
          value: {
            location: Xu(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              X,
            ),
            navigationType: to.Pop,
          },
        },
        V,
      )
    : V;
}
function Jy() {
  let r = r0(),
    i = Hy(r)
      ? r.status + " " + r.statusText
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    o = r instanceof Error ? r.stack : null,
    p = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return He.createElement(
    He.Fragment,
    null,
    He.createElement("h2", null, "Unexpected Application Error!"),
    He.createElement("h3", { style: { fontStyle: "italic" } }, i),
    o ? He.createElement("pre", { style: p }, o) : null,
    null,
  );
}
const Ky = He.createElement(Jy, null);
class Xy extends He.Component {
  constructor(i) {
    super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      });
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, o) {
    return o.location !== i.location ||
      (o.revalidation !== "idle" && i.revalidation === "idle")
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : o.error,
          location: o.location,
          revalidation: i.revalidation || o.revalidation,
        };
  }
  componentDidCatch(i, o) {
    console.error(
      "React Router caught the following error during render",
      i,
      o,
    );
  }
  render() {
    return this.state.error !== void 0
      ? He.createElement(
          sl.Provider,
          { value: this.props.routeContext },
          He.createElement(ag.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Yy(r) {
  let { routeContext: i, match: o, children: l } = r,
    p = He.useContext($y);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = o.route.id),
    He.createElement(sl.Provider, { value: i }, l)
  );
}
function Zy(r, i, o, l) {
  var p;
  if (
    (i === void 0 && (i = []),
    o === void 0 && (o = null),
    l === void 0 && (l = null),
    r == null)
  ) {
    var m;
    if (!o) return null;
    if (o.errors) r = o.matches;
    else if (
      (m = l) != null &&
      m.v7_partialHydration &&
      i.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      r = o.matches;
    else return null;
  }
  let v = r,
    R = (p = o) == null ? void 0 : p.errors;
  if (R != null) {
    let X = v.findIndex(
      (G) => G.route.id && (R == null ? void 0 : R[G.route.id]) !== void 0,
    );
    X >= 0 || rr(!1), (v = v.slice(0, Math.min(v.length, X + 1)));
  }
  let _ = !1,
    D = -1;
  if (o && l && l.v7_partialHydration)
    for (let X = 0; X < v.length; X++) {
      let G = v[X];
      if (
        ((G.route.HydrateFallback || G.route.hydrateFallbackElement) && (D = X),
        G.route.id)
      ) {
        let { loaderData: se, errors: Z } = o,
          ie =
            G.route.loader &&
            se[G.route.id] === void 0 &&
            (!Z || Z[G.route.id] === void 0);
        if (G.route.lazy || ie) {
          (_ = !0), D >= 0 ? (v = v.slice(0, D + 1)) : (v = [v[0]]);
          break;
        }
      }
    }
  return v.reduceRight((X, G, se) => {
    let Z,
      ie = !1,
      V = null,
      J = null;
    o &&
      ((Z = R && G.route.id ? R[G.route.id] : void 0),
      (V = G.route.errorElement || Ky),
      _ &&
        (D < 0 && se === 0
          ? (i0("route-fallback"), (ie = !0), (J = null))
          : D === se &&
            ((ie = !0), (J = G.route.hydrateFallbackElement || null))));
    let _e = i.concat(v.slice(0, se + 1)),
      te = () => {
        let me;
        return (
          Z
            ? (me = V)
            : ie
              ? (me = J)
              : G.route.Component
                ? (me = He.createElement(G.route.Component, null))
                : G.route.element
                  ? (me = G.route.element)
                  : (me = X),
          He.createElement(Yy, {
            match: G,
            routeContext: { outlet: X, matches: _e, isDataRoute: o != null },
            children: me,
          })
        );
      };
    return o && (G.route.ErrorBoundary || G.route.errorElement || se === 0)
      ? He.createElement(Xy, {
          location: o.location,
          revalidation: o.revalidation,
          component: V,
          error: Z,
          children: te(),
          routeContext: { outlet: null, matches: _e, isDataRoute: !0 },
        })
      : te();
  }, null);
}
var lg = (function (r) {
  return (
    (r.UseBlocker = "useBlocker"),
    (r.UseLoaderData = "useLoaderData"),
    (r.UseActionData = "useActionData"),
    (r.UseRouteError = "useRouteError"),
    (r.UseNavigation = "useNavigation"),
    (r.UseRouteLoaderData = "useRouteLoaderData"),
    (r.UseMatches = "useMatches"),
    (r.UseRevalidator = "useRevalidator"),
    (r.UseNavigateStable = "useNavigate"),
    (r.UseRouteId = "useRouteId"),
    r
  );
})(lg || {});
function e0(r) {
  let i = He.useContext(Vy);
  return i || rr(!1), i;
}
function t0(r) {
  let i = He.useContext(sl);
  return i || rr(!1), i;
}
function n0(r) {
  let i = t0(),
    o = i.matches[i.matches.length - 1];
  return o.route.id || rr(!1), o.route.id;
}
function r0() {
  var r;
  let i = He.useContext(ag),
    o = e0(lg.UseRouteError),
    l = n0();
  return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[l];
}
const Jp = {};
function i0(r, i, o) {
  Jp[r] || (Jp[r] = !0);
}
function o0(r, i) {
  r == null || r.v7_startTransition, r == null || r.v7_relativeSplatPath;
}
function Wu(r) {
  rr(!1);
}
function s0(r) {
  let {
    basename: i = "/",
    children: o = null,
    location: l,
    navigationType: p = to.Pop,
    navigator: m,
    static: v = !1,
    future: R,
  } = r;
  vf() && rr(!1);
  let _ = i.replace(/^\/*/, "/"),
    D = He.useMemo(
      () => ({
        basename: _,
        navigator: m,
        static: v,
        future: Xu({ v7_relativeSplatPath: !1 }, R),
      }),
      [_, R, m, v],
    );
  typeof l == "string" && (l = ba(l));
  let {
      pathname: X = "/",
      search: G = "",
      hash: se = "",
      state: Z = null,
      key: ie = "default",
    } = l,
    V = He.useMemo(() => {
      let J = ig(X, _);
      return J == null
        ? null
        : {
            location: { pathname: J, search: G, hash: se, state: Z, key: ie },
            navigationType: p,
          };
    }, [_, X, G, se, Z, ie, p]);
  return V == null
    ? null
    : He.createElement(
        sg.Provider,
        { value: D },
        He.createElement(ol.Provider, { children: o, value: V }),
      );
}
function a0(r) {
  let { children: i, location: o } = r;
  return Gy(Zc(i), o);
}
new Promise(() => {});
function Zc(r, i) {
  i === void 0 && (i = []);
  let o = [];
  return (
    He.Children.forEach(r, (l, p) => {
      if (!He.isValidElement(l)) return;
      let m = [...i, p];
      if (l.type === He.Fragment) {
        o.push.apply(o, Zc(l.props.children, m));
        return;
      }
      l.type !== Wu && rr(!1), !l.props.index || !l.props.children || rr(!1);
      let v = {
        id: l.props.id || m.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (v.children = Zc(l.props.children, m)), o.push(v);
    }),
    o
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const u0 = "6";
try {
  window.__reactRouterVersion = u0;
} catch {}
const l0 = "startTransition",
  Kp = Ev[l0];
function c0(r) {
  let { basename: i, children: o, future: l, window: p } = r,
    m = He.useRef();
  m.current == null && (m.current = Iy({ window: p, v5Compat: !0 }));
  let v = m.current,
    [R, _] = He.useState({ action: v.action, location: v.location }),
    { v7_startTransition: D } = l || {},
    X = He.useCallback(
      (G) => {
        D && Kp ? Kp(() => _(G)) : _(G);
      },
      [_, D],
    );
  return (
    He.useLayoutEffect(() => v.listen(X), [v, X]),
    He.useEffect(() => o0(l), [l]),
    He.createElement(s0, {
      basename: i,
      children: o,
      location: R.location,
      navigationType: R.action,
      navigator: v,
      future: l,
    })
  );
}
var Xp;
(function (r) {
  (r.UseScrollRestoration = "useScrollRestoration"),
    (r.UseSubmit = "useSubmit"),
    (r.UseSubmitFetcher = "useSubmitFetcher"),
    (r.UseFetcher = "useFetcher"),
    (r.useViewTransitionState = "useViewTransitionState");
})(Xp || (Xp = {}));
var Yp;
(function (r) {
  (r.UseFetcher = "useFetcher"),
    (r.UseFetchers = "useFetchers"),
    (r.UseScrollRestoration = "useScrollRestoration");
})(Yp || (Yp = {}));
const yf = () => {
    const r = new URLSearchParams(window.location.search);
    if (r.get("extId")) return r.get("extId");
    const i = new URLSearchParams(window.location.hash).get("state") || "";
    try {
      const o = decodeURI(atob(i));
      return JSON.parse(o).extId || i;
    } catch {
      return i;
    }
  },
  f0 = () => {
    const r = new URLSearchParams(window.location.search);
    if (r.get("guid")) return r.get("guid");
    const i = new URLSearchParams(window.location.hash).get("state") || "";
    try {
      const o = decodeURI(atob(i));
      return JSON.parse(o).guid || "";
    } catch {
      return "";
    }
  },
  d0 = () => {
    const r = new URLSearchParams(window.location.search);
    if (r.get("qimei36")) return r.get("qimei36");
    const i = new URLSearchParams(window.location.hash).get("state") || "";
    try {
      const o = decodeURI(atob(i));
      return JSON.parse(o).qimei36 || "";
    } catch {
      return "";
    }
  },
  cg = () => ({ guid: f0(), qimei36: d0(), extId: yf() });
var p0 = Object.getOwnPropertyDescriptor,
  h0 = (r, i, o, l) => {
    for (
      var p = l > 1 ? void 0 : l ? p0(i, o) : i, m = r.length - 1, v;
      m >= 0;
      m--
    )
      (v = r[m]) && (p = v(p) || p);
    return p;
  },
  Zp = (r, i) => (o, l) => i(o, l, r);
const g0 = ["verifyWxCode", "closeLoginDialog"],
  fg = Symbol("ID_MOCK_NATIVE_PROMISE_IN_WEB_IFRAME"),
  dg = Symbol("ID_EXT_ID"),
  xs = "MockNativePromiseInWebIFrame";
let ef = class {
  constructor(r, i) {
    (this.logger = r),
      (this.extId = i),
      (this.callNativePromiseInWebIFrame = async ({
        action: o,
        params: l,
        timeout: p = 5e3,
      }) => {
        var v;
        let m;
        try {
          return this.extId
            ? (v = chrome == null ? void 0 : chrome.runtime) != null &&
              v.sendMessage
              ? new Promise((R) => {
                  (m = setTimeout(() => {
                    this.logger.error("接口执行超时", xs),
                      R({ code: Yi.Timeout, msg: "接口执行超时", data: null });
                  }, p)),
                    g0.includes(o)
                      ? (this.logger.info(`发送 action: ${o}`, xs),
                        chrome.runtime.sendMessage(
                          this.extId,
                          { action: o, params: l },
                          (_) => {
                            clearTimeout(m);
                            const D = JSON.stringify(_);
                            this.logger.info(
                              `接收 action: ${o} 返回响应：${D}`,
                              xs,
                            ),
                              R({ data: D, code: 0, msg: "" });
                          },
                        ))
                      : (clearTimeout(m),
                        R({ code: Yi.Unknown, msg: "接口异常", data: null }));
                })
              : (this.logger.error("不再插件内", xs),
                { code: Yi.Unknown, msg: "不再插件内", data: null })
            : (this.logger.error("没有插件 id", xs),
              { code: Yi.Unknown, msg: "没有插件 id", data: null });
        } catch (R) {
          return (
            clearTimeout(m),
            this.logger.error(R, xs),
            {
              code: Yi.FrontendException,
              msg: `执行异常: ${Ho(R)}`,
              data: null,
            }
          );
        }
      });
  }
};
ef = h0([rl(), Zp(0, Oi(ro)), Zp(1, Oi(dg))], ef);
const pg = () => {},
  ir = new $u();
ir.bind(ro).toConstantValue(Jh());
ir.bind(dg).toConstantValue(yf());
ir.bind(fg).to(ef).inSingletonScope();
ir.bind(il.InvokeWithPromise).toDynamicValue(
  (r) => r.container.get(fg).callNativePromiseInWebIFrame,
);
ir.bind(il.OnAccountInfoChange).toConstantValue(pg);
ir.bind(il.OnLoginDialogClose).toConstantValue(pg);
ir.bind(qh).to(wn).inSingletonScope();
ir.bind($h).to(Kc).inSingletonScope();
ir.bind(Hh).toConstantValue("universal_login_h5");
const m0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAABYlAAAWJQFJUiTwAAABaWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8MSlPPgAAAPJJREFUeAHtlqEOwjAQhn/Ikrk5HA6Hw+FwPMjeDccT4HiCORwOh8PN0cu2pGna7q67MsS+5JJ1bfqld7dmwEJGVs54Z+KAPDQmnvRQOBMk3CIfXulAa+INHTYmSvtFSErCK3SoXekaMzCLtBCur/qIQaVpoSilzU7omiME9cIrMi9Ob9tvOqmzU2o6WZzaSCR+IJFU6R5dbX8mJeHZGt8hTLVU6gpv6C5yUY0lUp9wqKuoubjfaUwIR1xCSXocEdri6G1EcNNLJ/iMCNlwT0rCCxin4CBpJBWhVKpGKL30n1RDh4or9S7WwpU2yEfOvf+UL1wXLjYAzkEBAAAAAElFTkSuQmCC",
  v0 = () => gf.useInjection(ro);
var wa = ((r) => (
  (r.PluginLoginExp = "plugin_login_exp"),
  (r.PluginScanSuc = "plugin_scan_suc"),
  (r.PluginLoginSuc = "plugin_login_suc"),
  (r.PluginLoginFail = "plugin_login_fail"),
  r
))(wa || {});
const y0 = () => {
    const r = window.location.hostname.startsWith("ima-test");
    new window.WxLogin({
      self_redirect: !0,
      id: "login-qrcode",
      appid: r ? "wx98bb917ba99f2eb7" : "wx0d63f5de059f1d52",
      scope: "snsapi_login",
      redirect_uri: encodeURIComponent(
        `${window.location.origin}/universal-login/#/weixin-login`,
      ),
      state: btoa(encodeURI(JSON.stringify(cg(), null, 0))),
      style: "",
      href: "",
      lang: "cn",
      stylelite: 1,
      fast_login: 0,
    });
  },
  w0 = "_login_nzmsb_1",
  S0 = "_loginQrcode_nzmsb_9",
  E0 = "_titleLine_nzmsb_36",
  _0 = "_title_nzmsb_36",
  k0 = "_argeeLine_nzmsb_49",
  I0 = "_text_nzmsb_49",
  x0 = "_agreement_nzmsb_55",
  C0 = "_actions_nzmsb_60",
  O0 = "_action_nzmsb_60",
  b0 = "_icon_nzmsb_82",
  R0 = "_desc_nzmsb_87",
  P0 = "_jump_nzmsb_99",
  Mn = {
    login: w0,
    loginQrcode: S0,
    titleLine: E0,
    title: _0,
    argeeLine: k0,
    text: I0,
    agreement: x0,
    actions: C0,
    action: O0,
    icon: b0,
    desc: R0,
    jump: P0,
  },
  T0 = "https://rule.tencent.com/rule/202410140002",
  A0 =
    "https://privacy.qq.com/document/preview/aca5ed13893d47cfa31697704c2dd366",
  pa = "Login",
  eh = (r) => {
    window.open(r, "_blank");
  },
  Wc = () => {
    const { search: r } = ug(),
      i = v0(),
      o = He.useRef(null),
      l = gf.useInjection($h),
      m = new URLSearchParams(r).get("code");
    return (
      sy({
        id: "universal-login-panel",
        getTarget: () => o.current,
        callback: () => {
          i.info("登录面板曝光", pa), l.report(wa.PluginLoginExp);
        },
      }),
      He.useEffect(() => {
        y0(), ir.get(ro).info("进入登录面板", pa);
      }, []),
      ry(async () => {
        if (!m) return;
        l.report(wa.PluginScanSuc);
        const v = ir.get(qh);
        try {
          const R = await v.verifyWxCode(`${m}`);
          R != null && R.userId && R != null && R.token
            ? l.report(wa.PluginLoginSuc)
            : l.report(wa.PluginLoginFail),
            i.info(`校验 weixin code 回包: ${JSON.stringify(R)}`, pa),
            v.closeLoginDialog();
        } catch (R) {
          i.error(`登录异常 ${m} ${yf()} url: ${window.location.href}`, pa),
            i.error(R, pa);
        }
      }, [m]),
      Oe.jsxs("div", {
        className: Mn.login,
        ref: o,
        style: { display: m ? "none" : "flex" },
        children: [
          Oe.jsx("div", {
            className: Mn.titleLine,
            children: Oe.jsx("span", {
              className: Mn.title,
              children: "微信扫码登录",
            }),
          }),
          Oe.jsx("div", {
            className: Mn.loginQrcode,
            children: Oe.jsx("div", { id: "login-qrcode" }),
          }),
          Oe.jsxs("div", {
            className: Mn.argeeLine,
            children: [
              Oe.jsx("span", { className: Mn.text, children: "已阅读并同意" }),
              Oe.jsx("span", {
                onClick: (v) => {
                  v.stopPropagation(), eh(T0);
                },
                className: Xc([Mn.text, Mn.agreement]),
                rel: "noreferrer",
                children: "《服务协议》",
              }),
              Oe.jsx("span", { className: Mn.text, children: "与" }),
              Oe.jsx("span", {
                onClick: (v) => {
                  v.stopPropagation(), eh(A0);
                },
                className: Xc([Mn.text, Mn.agreement]),
                rel: "noreferrer",
                children: "《隐私保护指引》",
              }),
            ],
          }),
          Oe.jsx("div", {
            className: Mn.actions,
            children: Oe.jsxs("div", {
              className: `${Mn.action} ${Mn.jump}`,
              onClick: (v) => {
                v.stopPropagation(),
                  window.open(
                    "https://ima.qq.com/?webFrom=10000044&channel=10000044",
                    "_blank",
                  );
              },
              children: [
                Oe.jsx("img", { src: m0, alt: "IMA", className: Mn.icon }),
                Oe.jsx("span", { className: Mn.desc, children: "了解 ima" }),
              ],
            }),
          }),
        ],
      })
    );
  };
function N0() {
  return (
    He.useEffect(() => {
      ir.get(ro).info(
        `登录弹窗用户界面参数：可视宽度：${window.innerWidth}px; 布局宽度：${document.documentElement.clientWidth}px; 设备宽度：${window.screen.width}; dpr: ${window.devicePixelRatio}`,
      );
    }, []),
    Oe.jsxs(a0, {
      children: [
        Oe.jsx(Wu, { path: "/", element: Oe.jsx(Wc, {}) }),
        Oe.jsx(Wu, { path: "/login", element: Oe.jsx(Wc, {}) }),
        Oe.jsx(Wu, { path: "/weixin-login", element: Oe.jsx(Wc, {}) }),
      ],
    })
  );
}
const th = "universal-login",
  ha = ir.get(ro),
  D0 = ky.createRoot(document.getElementById("root"));
Kh({ extField: { ...cg(), app_id: "universal-login_panel" } });
D0.render(
  Oe.jsx(yy, {
    onError: ha.error.bind(ha),
    reportErrorEvent: ha.reportEvent.bind(ha),
    fallback: Oe.jsx(Ey, { logger: ha, name: th }),
    name: th,
    children: Oe.jsx(c0, {
      children: Oe.jsx(gf.Provider, {
        container: ir,
        children: Oe.jsx(N0, {}),
      }),
    }),
  }),
);
