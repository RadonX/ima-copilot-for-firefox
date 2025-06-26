function distiller(options, stringify_output) {
  try {
    function initialize() {
      (function () {
        var $gwt_version = "2.7.0";
        var $wnd = window;
        var $doc = $wnd.document;
        var $moduleName, $moduleBase;
        var $stats = $wnd.__gwtStatsEvent
          ? function (a) {
              $wnd.__gwtStatsEvent(a);
            }
          : null;
        var $strongName = "98E1B99F877931B580DC384A9E7B0787";
        var ca = 2147483647,
          fa = { 3: 1, 12: 1 },
          ha = { 3: 1, 11: 1, 12: 1 },
          ia = { 3: 1, 4: 1 },
          ja = { 3: 1, 5: 1, 6: 1, 4: 1 },
          la = { 10: 1, 21: 1, 3: 1, 13: 1, 9: 1 },
          k = { 3: 1, 5: 1, 15: 1, 6: 1, 4: 1, 14: 1 },
          na = { 3: 1, 11: 1, 20: 1, 12: 1 },
          ra = { 41: 1 },
          sa = { 25: 1 },
          ua = { 48: 1, 39: 1, 24: 1 },
          ya = { 3: 1, 30: 1 },
          za = { 3: 1, 41: 1 },
          Da = { 3: 1, 13: 1, 9: 1, 29: 1 },
          Ea = { 3: 1, 5: 1, 4: 1 },
          Fa = 0.20000000298023224,
          _,
          Ka,
          La = {};
        function Ma() {}
        function Wa(a) {
          function b() {}
          b.prototype = a || {};
          return new b();
        }
        function l() {}
        function q(a, b, c) {
          var d = La[a],
            e = d instanceof Array ? d[0] : null;
          d && !e
            ? (_ = d)
            : ((_ = La[a] = b ? Wa(La[b]) : {}),
              (_.cM = c),
              (_.constructor = _),
              !b && (_.tM = Ma));
          for (d = 3; d < arguments.length; ++d) {
            arguments[d].prototype = _;
          }
          e && (_.cZ = e);
        }
        function fb() {}
        function qb(a, b) {
          return rb(a) ? a === b : sb(a) ? a.eQ(b) : (tb(a), a === b);
        }
        function Jb(a) {
          return rb(a) ? s : sb(a) ? a.cZ : tb(a) ? a.cZ : Kb;
        }
        function Lb(a) {
          return rb(a) ? Mb(a) : sb(a) ? a.hC() : (tb(a), Nb(a));
        }
        q(1, null, {}, fb);
        _.eQ = function (a) {
          return this === a;
        };
        _.gC = function () {
          return this.cZ;
        };
        _.hC = function () {
          return Nb(this);
        };
        _.tS = function () {
          var a = Ob(Jb(this)) + "@",
            b;
          b = (Lb(this) >>> 0).toString(16);
          return a + b;
        };
        _.toString = function () {
          return this.tS();
        };
        Pb = { 3: 1, 240: 1, 13: 1, 2: 1 };
        !Array.isArray &&
          (Array.isArray = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          });
        function Zb(a) {
          return a.toString ? a.toString() : "[JavaScriptObject]";
        }
        function sb(a) {
          return !Array.isArray(a) && a.tM === Ma;
        }
        function t(a, b) {
          return null != a && ((rb(a) && !!Pb[b]) || (a.cM && !!a.cM[b]));
        }
        function tb(a) {
          return Array.isArray(a) && a.tM === Ma;
        }
        function rb(a) {
          return "string" === typeof a;
        }
        function $b(a) {
          return null == a ? null : a;
        }
        function ac(a) {
          return ~~Math.max(Math.min(a, ca), -2147483648);
        }
        var Pb;
        function bc(a) {
          if (null == a.n) {
            if (a.F()) {
              var b = a.c;
              b.G()
                ? (a.n = "[" + b.k)
                : b.F()
                  ? (a.n = "[" + b.C())
                  : (a.n = "[L" + b.C() + ";");
              a.b = b.B() + "[]";
              a.j = b.D() + "[]";
            } else {
              var b = a.g,
                c = a.d,
                c = c.split("/");
              a.n = cc(".", [b, cc("$", c)]);
              a.b = cc(".", [b, cc(".", c)]);
              a.j = c[c.length - 1];
            }
          }
        }
        function Ob(a) {
          bc(a);
          return a.n;
        }
        function mc(a) {
          bc(a);
          return a.j;
        }
        function nc() {
          this.i = oc++;
          this.a = this.k = this.b = this.d = this.g = this.j = this.n = null;
        }
        function pc(a) {
          var b;
          b = new nc();
          b.n = "Class$" + (a ? "S" + a : "" + b.i);
          b.b = b.n;
          b.j = b.n;
          return b;
        }
        function v(a) {
          var b;
          b = pc(a);
          Fc(a, b);
          return b;
        }
        function Gc(a, b) {
          var c;
          c = pc(a);
          Fc(a, c);
          c.f = b ? 8 : 0;
          c.e = b;
          return c;
        }
        function Hc() {
          var a;
          a = pc(null);
          a.f = 2;
          return a;
        }
        function Ic(a) {
          var b;
          b = pc(a);
          b.k = a;
          b.f = 1;
          return b;
        }
        function w(a, b) {
          var c = (a.a = a.a || []);
          return c[b] || (c[b] = a.A(b));
        }
        function cc(a, b) {
          for (var c = 0; !b[c] || "" == b[c]; ) {
            c++;
          }
          for (var d = b[c++]; c < b.length; c++) {
            b[c] && "" != b[c] && (d += a + b[c]);
          }
          return d;
        }
        function Fc(a, b) {
          if (a) {
            b.k = a;
            var c = b.G() ? null : La[b.k];
            c ? (c.cZ = b) : (La[a] = [b]);
          }
        }
        q(85, 1, {}, nc);
        _.A = function (a) {
          var b;
          b = new nc();
          b.f = 4;
          1 < a ? (b.c = w(this, a - 1)) : (b.c = this);
          return b;
        };
        _.B = function () {
          bc(this);
          return this.b;
        };
        _.C = function () {
          return Ob(this);
        };
        _.D = function () {
          return mc(this);
        };
        _.F = function () {
          return 0 != (this.f & 4);
        };
        _.G = function () {
          return 0 != (this.f & 1);
        };
        _.tS = function () {
          return (
            (0 != (this.f & 2)
              ? "interface "
              : 0 != (this.f & 1)
                ? ""
                : "class ") + (bc(this), this.n)
          );
        };
        _.f = 0;
        _.i = 0;
        var oc = 1,
          Jc = v(1),
          Kb = v(0);
        v(85);
        function Kc(a) {
          var b;
          b = Ob(a.cZ);
          a = a.q();
          return null != a ? b + ": " + a : b;
        }
        q(12, 1, fa);
        _.q = function () {
          return this.e;
        };
        _.tS = function () {
          return Kc(this);
        };
        v(12);
        function Lc(a) {
          this.e = a;
          Yc(this, this.e);
        }
        q(11, 12, ha, Lc);
        v(11);
        q(19, 11, ha);
        v(19);
        q(116, 19, ha);
        v(116);
        function Zc() {
          Zc = l;
          $c = new fb();
        }
        function ad(a) {
          Zc();
          this.e = null;
          this.a = "";
          this.b = a;
          this.a = "";
        }
        q(38, 116, { 38: 1, 3: 1, 11: 1, 12: 1 }, ad);
        _.q = function () {
          var a;
          null == this.c &&
            ((a = $b(this.b) === $b($c) ? null : this.b),
            (this.d =
              null == a
                ? "null"
                : null == a || rb(a) || a.tM === Ma
                  ? rb(a)
                    ? "String"
                    : Ob(Jb(a))
                  : null == a
                    ? null
                    : a.name),
            (this.a =
              this.a +
              ": " +
              (null == a || rb(a) || a.tM === Ma
                ? a + ""
                : null == a
                  ? null
                  : a.message)),
            (this.c = "(" + this.d + ") " + this.a));
          return this.c;
        };
        _.r = function () {
          return $b(this.b) === $b($c) ? null : this.b;
        };
        var $c;
        v(38);
        function bd(a, b) {
          a[a.length] = b;
        }
        function cd(a) {
          dd();
          return (
            '"' +
            a.replace(
              /[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,
              function (a) {
                var c = td[a.charCodeAt(0)];
                return null == c ? a : c;
              },
            ) +
            '"'
          );
        }
        function dd() {
          if (!td) {
            var a = [
              "\\u0000",
              "\\u0001",
              "\\u0002",
              "\\u0003",
              "\\u0004",
              "\\u0005",
              "\\u0006",
              "\\u0007",
              "\\b",
              "\\t",
              "\\n",
              "\\u000B",
              "\\f",
              "\\r",
              "\\u000E",
              "\\u000F",
              "\\u0010",
              "\\u0011",
              "\\u0012",
              "\\u0013",
              "\\u0014",
              "\\u0015",
              "\\u0016",
              "\\u0017",
              "\\u0018",
              "\\u0019",
              "\\u001A",
              "\\u001B",
              "\\u001C",
              "\\u001D",
              "\\u001E",
              "\\u001F",
              ,
              ,
              '\\"',
            ];
            a[92] = "\\\\";
            a[173] = "\\u00ad";
            a[1536] = "\\u0600";
            a[1537] = "\\u0601";
            a[1538] = "\\u0602";
            a[1539] = "\\u0603";
            a[1757] = "\\u06dd";
            a[1807] = "\\u070f";
            a[6068] = "\\u17b4";
            a[6069] = "\\u17b5";
            a[8203] = "\\u200b";
            a[8204] = "\\u200c";
            a[8205] = "\\u200d";
            a[8206] = "\\u200e";
            a[8207] = "\\u200f";
            a[8232] = "\\u2028";
            a[8233] = "\\u2029";
            a[8234] = "\\u202a";
            a[8235] = "\\u202b";
            a[8236] = "\\u202c";
            a[8237] = "\\u202d";
            a[8238] = "\\u202e";
            a[8288] = "\\u2060";
            a[8289] = "\\u2061";
            a[8290] = "\\u2062";
            a[8291] = "\\u2063";
            a[8292] = "\\u2064";
            a[8298] = "\\u206a";
            a[8299] = "\\u206b";
            a[8300] = "\\u206c";
            a[8301] = "\\u206d";
            a[8302] = "\\u206e";
            a[8303] = "\\u206f";
            a[65279] = "\\ufeff";
            a[65529] = "\\ufff9";
            a[65530] = "\\ufffa";
            a[65531] = "\\ufffb";
            td = a;
          }
        }
        var td;
        q(215, 1, {});
        v(215);
        function Nb(a) {
          return a.$H || (a.$H = ++ud);
        }
        function vd(a) {
          $wnd.setTimeout(function () {
            throw a;
          }, 0);
        }
        function wd() {
          0 != xd && (xd = 0);
          yd = -1;
        }
        var xd = 0,
          ud = 0,
          zd = 0,
          yd = -1;
        function Ad() {
          Ad = l;
          Bd = new Cd();
        }
        function Cd() {}
        function Dd(a, b) {
          var c, d, e;
          d = 0;
          for (e = a.length; d < e; d++) {
            c = a[d];
            try {
              if (c[1]) {
                if (c[0].Rb()) {
                  var f = b;
                  !f && (f = []);
                  f[f.length] = c;
                  b = f;
                }
              } else {
                c[0].Rb();
              }
            } catch (g) {
              if (((g = Od(g)), t(g, 12))) {
                (c = g), vd(t(c, 38) ? c.r() : c);
              } else {
                throw Pd(g);
              }
            }
          }
          return b;
        }
        q(181, 215, {}, Cd);
        var Bd;
        v(181);
        function Qd() {
          Qd = l;
          var a, b;
          b = !(Error.stackTraceLimit || "stack" in Error());
          a = new Rd();
          Sd = b ? new Td() : a;
        }
        function Yc(a, b) {
          Qd();
          Sd.s(a, b);
        }
        var Sd;
        q(227, 1, {});
        v(227);
        function Td() {}
        q(128, 227, {}, Td);
        _.s = function (a, b) {
          var c = {};
          a.fnStack = [];
          for (var d = arguments.callee.caller; d; ) {
            Qd();
            var e;
            if (!(e = d.name)) {
              e = d;
              var f = /function(?:\s+([\w$]+))?\s*\(/.exec(d.toString());
              e = e.name = (f && f[1]) || "anonymous";
            }
            a.fnStack.push(e);
            e = ":" + e;
            if ((f = c[e])) {
              var g, h;
              g = 0;
              for (h = f.length; g < h; g++) {
                if (f[g] === d) {
                  return;
                }
              }
            }
            (f || (c[e] = [])).push(d);
            d = d.caller;
          }
        };
        v(128);
        function Ud() {
          Ud = l;
          Error.stackTraceLimit = 64;
        }
        q(228, 227, {});
        _.s = function (a, b) {
          function c(a) {
            if (!("stack" in a)) {
              try {
                throw a;
              } catch (b) {}
            }
            return a;
          }
          var d;
          "string" == typeof b
            ? (d = c(Error(b)))
            : b instanceof Object && "stack" in b
              ? (d = b)
              : (d = c(Error()));
          a.__gwt$backingJsError = d;
        };
        v(228);
        function Rd() {
          Ud();
        }
        q(129, 228, {}, Rd);
        v(129);
        function Vd(a, b) {
          if (!a) {
            throw new ie("" + b);
          }
        }
        function z(a) {
          if (!a) {
            throw new je();
          }
        }
        function A(a, b) {
          if (0 > a || a >= b) {
            throw new ke("Index: " + a + ", Size: " + b);
          }
        }
        function le(a) {
          if (null == a) {
            throw new me();
          }
        }
        function ne(a, b) {
          if (0 > a || a > b) {
            throw new ke("Index: " + a + ", Size: " + b);
          }
        }
        function oe(a, b) {
          var c, d, e, f;
          a = "" + a;
          c = new pe();
          for (d = f = 0; d < b.length; ) {
            e = a.indexOf("%s", f);
            if (-1 == e) {
              break;
            }
            f = a.substr(f, e - f);
            c.a += f;
            f = b[d++];
            c.a += f;
            f = e + 2;
          }
          e = a.substr(f, a.length - f);
          c.a += e;
          if (d < b.length) {
            c.a += " [";
            e = b[d++];
            for (c.a += e; d < b.length; ) {
              (c.a += ", "), (e = b[d++]), (c.a += e);
            }
            c.a += "]";
          }
          return c.a;
        }
        function qe(a, b) {
          return null == a[b] ? null : String(a[b]);
        }
        function B(a, b) {
          return a.getAttribute(b) || "";
        }
        function re(a) {
          ((a = a.parentNode) && 1 == a.nodeType) || (a = null);
          return a;
        }
        function se(a) {
          var b;
          if ((b = a.getBoundingClientRect && a.getBoundingClientRect())) {
            a = b.top + ((a.ownerDocument.body.scrollTop || 0) | 0);
          } else {
            if (null == a.offsetTop) {
              a = 0;
            } else {
              b = 0;
              var c = a.ownerDocument,
                d = a.parentNode;
              if (d) {
                for (; d.offsetParent; ) {
                  (b -= d.scrollTop), (d = d.parentNode);
                }
              }
              for (; a; ) {
                b += a.offsetTop;
                if ("fixed" == c.defaultView.getComputedStyle(a, "").position) {
                  b += c.body.scrollTop;
                  break;
                }
                (d = a.offsetParent) &&
                  $wnd.devicePixelRatio &&
                  (b += parseInt(
                    c.defaultView
                      .getComputedStyle(d, "")
                      .getPropertyValue("border-top-width"),
                  ));
                if (
                  d &&
                  "BODY" == d.tagName &&
                  "absolute" == a.style.position
                ) {
                  break;
                }
                a = d;
              }
              a = b;
            }
          }
          return a | 0;
        }
        function te(a, b) {
          this.a = a;
          this.b = b;
        }
        q(9, 1, { 3: 1, 13: 1, 9: 1 });
        _.t = function (a) {
          return this.b - a.b;
        };
        _.eQ = function (a) {
          return this === a;
        };
        _.hC = function () {
          return Nb(this);
        };
        _.tS = function () {
          return null != this.a ? this.a : "" + this.b;
        };
        _.b = 0;
        v(9);
        function ue() {
          ue = l;
          ve = new He();
          Ie = new Me();
          Ne = new Oe();
          Pe = new Qe();
          Re = new Se();
          Te = new Ue();
          Ve = new We();
          Xe = new Ye();
          Ze = new $e();
          af = new bf();
          cf = new df();
          ef = new ff();
          gf = new lf();
          tf = new uf();
          vf = new wf();
          xf = new yf();
          zf = new Af();
          Bf = new Cf();
        }
        function Df() {
          ue();
          return C(w(Ef, 1), ja, 10, 0, [
            ve,
            Ie,
            Ne,
            Pe,
            Re,
            Te,
            Ve,
            Xe,
            Ze,
            af,
            cf,
            ef,
            gf,
            tf,
            vf,
            xf,
            zf,
            Bf,
          ]);
        }
        q(10, 9, la);
        var Ie,
          zf,
          Ne,
          ve,
          Te,
          xf,
          Re,
          Ve,
          Xe,
          Ze,
          Pe,
          Bf,
          af,
          cf,
          ef,
          tf,
          vf,
          gf,
          Ef = Gc(10, Df);
        function He() {
          te.call(this, "DEFAULT", 0);
        }
        q(137, 10, la, He);
        Gc(137, null);
        function bf() {
          te.call(this, "SE_RESIZE", 9);
        }
        q(146, 10, la, bf);
        Gc(146, null);
        function df() {
          te.call(this, "SW_RESIZE", 10);
        }
        q(147, 10, la, df);
        Gc(147, null);
        function ff() {
          te.call(this, "S_RESIZE", 11);
        }
        q(148, 10, la, ff);
        Gc(148, null);
        function lf() {
          te.call(this, "W_RESIZE", 12);
        }
        q(149, 10, la, lf);
        Gc(149, null);
        function uf() {
          te.call(this, "TEXT", 13);
        }
        q(150, 10, la, uf);
        Gc(150, null);
        function wf() {
          te.call(this, "WAIT", 14);
        }
        q(151, 10, la, wf);
        Gc(151, null);
        function yf() {
          te.call(this, "HELP", 15);
        }
        q(152, 10, la, yf);
        Gc(152, null);
        function Af() {
          te.call(this, "COL_RESIZE", 16);
        }
        q(153, 10, la, Af);
        Gc(153, null);
        function Cf() {
          te.call(this, "ROW_RESIZE", 17);
        }
        q(154, 10, la, Cf);
        Gc(154, null);
        function Me() {
          te.call(this, "AUTO", 1);
        }
        q(138, 10, la, Me);
        Gc(138, null);
        function Oe() {
          te.call(this, "CROSSHAIR", 2);
        }
        q(139, 10, la, Oe);
        Gc(139, null);
        function Qe() {
          te.call(this, "POINTER", 3);
        }
        q(140, 10, la, Qe);
        Gc(140, null);
        function Se() {
          te.call(this, "MOVE", 4);
        }
        q(141, 10, la, Se);
        Gc(141, null);
        function Ue() {
          te.call(this, "E_RESIZE", 5);
        }
        q(142, 10, la, Ue);
        Gc(142, null);
        function We() {
          te.call(this, "NE_RESIZE", 6);
        }
        q(143, 10, la, We);
        Gc(143, null);
        function Ye() {
          te.call(this, "NW_RESIZE", 7);
        }
        q(144, 10, la, Ye);
        Gc(144, null);
        function $e() {
          te.call(this, "N_RESIZE", 8);
        }
        q(145, 10, la, $e);
        Gc(145, null);
        function Ff() {
          Ff = l;
          var a = Df(),
            b,
            c,
            d,
            e;
          b = {};
          d = 0;
          for (e = a.length; d < e; ++d) {
            (c = a[d]), (b[":" + (null != c.a ? c.a : "" + c.b)] = c);
          }
          Gf = b;
        }
        var Gf;
        function Hf(a) {
          if (null == a) {
            throw new If("encodedURL cannot be null");
          }
        }
        q(234, 1, {});
        _.u = function () {
          return null;
        };
        _.v = function () {
          return null;
        };
        _.w = function () {
          return null;
        };
        v(234);
        function Jf(a) {
          this.a = a;
        }
        q(104, 234, { 104: 1 }, Jf);
        _.eQ = function (a) {
          return t(a, 104) ? this.a == a.a : !1;
        };
        _.hC = function () {
          return Nb(this.a);
        };
        _.tS = function () {
          var a, b, c, d, e;
          c = new Kf("[");
          b = 0;
          for (a = this.a.length; b < a; b++) {
            0 < b && (c.a += ",");
            var f =
              ((d = this.a[b]),
              (e = (Lf(), Mf)[typeof d]),
              e ? e(d) : Nf(typeof d));
            c.a += f;
          }
          c.a += "]";
          return c.a;
        };
        v(104);
        function Of() {
          Of = l;
          Pf = new Qf(!1);
          Rf = new Qf(!0);
        }
        function Qf(a) {
          this.a = a;
        }
        q(96, 234, {}, Qf);
        _.u = function () {
          return this;
        };
        _.tS = function () {
          return Sf(), "" + this.a;
        };
        _.a = !1;
        var Pf, Rf;
        v(96);
        function Tf(a) {
          Lc.call(this, a);
        }
        function Uf(a) {
          this.e = a ? Kc(a) : null;
          Yc(this, this.e);
        }
        q(81, 19, ha, Tf, Uf);
        v(81);
        function Vf() {
          Vf = l;
          Wf = new Xf();
        }
        function Xf() {}
        q(196, 234, {}, Xf);
        _.tS = function () {
          return "null";
        };
        var Wf;
        v(196);
        function Yf(a) {
          this.a = a;
        }
        q(82, 234, { 82: 1 }, Yf);
        _.eQ = function (a) {
          return t(a, 82) ? this.a == a.a : !1;
        };
        _.hC = function () {
          return ac(new Zf(this.a).a);
        };
        _.tS = function () {
          return this.a + "";
        };
        _.a = 0;
        v(82);
        function $f(a, b) {
          if (null == b) {
            throw new me();
          }
          var c,
            d = a.a,
            e;
          c = String(b);
          d.hasOwnProperty(c) && (e = d[c]);
          return (c = (Lf(), Mf)[typeof e]) ? c(e) : Nf(typeof e);
        }
        function bg(a) {
          this.a = a;
        }
        q(91, 234, { 91: 1 }, bg);
        _.eQ = function (a) {
          return t(a, 91) ? this.a == a.a : !1;
        };
        _.hC = function () {
          return Nb(this.a);
        };
        _.v = function () {
          return this;
        };
        _.tS = function () {
          var a, b, c, d, e;
          e = new Kf("{");
          a = !0;
          var f = fg(s, k, 2, 0, 4);
          c = this.a;
          d = 0;
          for (b in c) {
            c.hasOwnProperty(b) && (f[d++] = b);
          }
          c = 0;
          for (d = f.length; c < d; ++c) {
            b = f[c];
            a ? (a = !1) : (e.a += ", ");
            var g = cd(b);
            e.a += g;
            e.a += ":";
            b = $f(this, b);
            e.a += b;
          }
          e.a += "}";
          return e.a;
        };
        v(91);
        function Lf() {
          Lf = l;
          Mf = {
            boolean: hg,
            number: ig,
            string: jg,
            object: kg,
            function: kg,
            undefined: lg,
          };
        }
        function hg(a) {
          return Of(), a ? Rf : Pf;
        }
        function ig(a) {
          return new Yf(a);
        }
        function kg(a) {
          if (!a) {
            return Vf(), Wf;
          }
          var b = a.valueOf ? a.valueOf() : a;
          return b !== a
            ? (a = Mf[typeof b])
              ? a(b)
              : Nf(typeof b)
            : a instanceof Array || a instanceof $wnd.Array
              ? new Jf(a)
              : new bg(a);
        }
        function jg(a) {
          return new mg(a);
        }
        function lg() {
          return null;
        }
        function Nf(a) {
          Lf();
          throw new Tf(
            "Unexpected typeof result '" +
              a +
              "'; please report this bug to the GWT team",
          );
        }
        var Mf;
        function mg(a) {
          if (null == a) {
            throw new me();
          }
          this.a = a;
        }
        q(78, 234, { 78: 1 }, mg);
        _.eQ = function (a) {
          return t(a, 78) ? this.a === a.a : !1;
        };
        _.hC = function () {
          return Mb(this.a);
        };
        _.w = function () {
          return this;
        };
        _.tS = function () {
          return cd(this.a);
        };
        v(78);
        function ng(a, b) {
          var c;
          c = a.slice(0, b);
          C(Jb(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function og(a, b) {
          var c;
          c = pg(0, b);
          C(Jb(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function fg(a, b, c, d, e) {
          d = pg(e, d);
          C(w(a, 1), b, c, e, d);
          return d;
        }
        function qg(a) {
          return rg(s, [Ea, k], [14, 2], 4, a, 0, 2);
        }
        function rg(a, b, c, d, e, f, g) {
          var h, n, m, u;
          m = e[f];
          h = (n = f == g - 1) ? d : 0;
          u = pg(h, m);
          C(w(a, g - f), b[f], c[f], h, u);
          if (!n) {
            for (++f, h = 0; h < m; ++h) {
              u[h] = rg(a, b, c, d, e, f, g);
            }
          }
          return u;
        }
        function C(a, b, c, d, e) {
          e.cZ = a;
          e.cM = b;
          e.tM = Ma;
          e.__elementTypeId$ = c;
          e.__elementTypeCategory$ = d;
          return e;
        }
        function pg(a, b) {
          var c = Array(b),
            d;
          switch (a) {
            case 6:
              d = { l: 0, m: 0, h: 0 };
              break;
            case 7:
              d = 0;
              break;
            case 8:
              d = !1;
              break;
            default:
              return c;
          }
          for (var e = 0; e < b; ++e) {
            c[e] = d;
          }
          return c;
        }
        function sg(a, b, c, d, e, f) {
          a === c && ((a = a.slice(b, b + e)), (b = 0));
          var g = b;
          for (b += e; g < b; ) {
            var h = Math.min(g + 10000, b);
            e = h - g;
            Array.prototype.splice.apply(
              c,
              [d, f ? e : 0].concat(a.slice(g, h)),
            );
            g = h;
            d += e;
          }
        }
        function Pd(a) {
          return t(a, 38) && $b(a.b) !== $b((Zc(), $c))
            ? $b(a.b) === $b($c)
              ? null
              : a.b
            : a;
        }
        function Od(a) {
          var b;
          if (t(a, 12)) {
            return a;
          }
          b = a && a.__gwt$exception;
          if (!b && ((b = new ad(a)), Yc(b, a), a && "object" == typeof a)) {
            try {
              a.__gwt$exception = b;
            } catch (c) {}
          }
          return b;
        }
        function tg() {
          var a;
          a = navigator.userAgent.toLowerCase();
          var b = $doc.documentMode;
          a =
            -1 != a.indexOf("webkit")
              ? "safari"
              : -1 != a.indexOf("msie") && 10 <= b && 11 > b
                ? "ie10"
                : -1 != a.indexOf("msie") && 9 <= b && 11 > b
                  ? "ie9"
                  : -1 != a.indexOf("msie") && 8 <= b && 11 > b
                    ? "ie8"
                    : -1 != a.indexOf("gecko") || 11 <= b
                      ? "gecko1_8"
                      : "unknown";
          if ("safari" !== a) {
            throw new ug(a);
          }
        }
        q(64, 12, fa);
        v(64);
        q(23, 64, fa);
        v(23);
        function ug(a) {
          this.e =
            "" +
            ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
              a +
              ").\nExpect more errors.");
          Yc(this, this.e);
        }
        q(115, 23, fa, ug);
        v(115);
        q(66, 1, {});
        _.tS = function () {
          return this.a;
        };
        v(66);
        function vg() {
          Yc(this, this.e);
        }
        function ke(a) {
          Lc.call(this, a);
        }
        q(32, 19, ha, vg, ke);
        v(32);
        function wg() {
          Yc(this, this.e);
        }
        q(199, 32, ha, wg);
        v(199);
        function ie(a) {
          Lc.call(this, a);
        }
        q(42, 19, ha, ie);
        v(42);
        function Sf() {
          Sf = l;
          xg = new yg(!1);
          zg = new yg(!0);
        }
        function yg(a) {
          this.a = a;
        }
        q(53, 1, { 3: 1, 53: 1, 13: 1 }, yg);
        _.t = function (a) {
          var b = this.a;
          return b == a.a ? 0 : b ? 1 : -1;
        };
        _.eQ = function (a) {
          return t(a, 53) && a.a == this.a;
        };
        _.hC = function () {
          return this.a ? 1231 : 1237;
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = !1;
        var xg, zg;
        v(53);
        function Ag(a) {
          this.a = a;
        }
        function Bg(a) {
          return null != String.fromCharCode(a).match(/\d/);
        }
        function Cg(a) {
          var b;
          return 128 > a
            ? ((b = (Dg(), Eg)[a]), !b && (b = Eg[a] = new Ag(a)), b)
            : new Ag(a);
        }
        q(43, 1, { 3: 1, 43: 1, 13: 1 }, Ag);
        _.t = function (a) {
          return this.a - a.a;
        };
        _.eQ = function (a) {
          return t(a, 43) && a.a == this.a;
        };
        _.hC = function () {
          return this.a;
        };
        _.tS = function () {
          return String.fromCharCode(this.a);
        };
        _.a = 0;
        var Fg = v(43);
        function Dg() {
          Dg = l;
          Eg = fg(Fg, ja, 43, 128, 0);
        }
        var Eg;
        function Gg(a) {
          var b;
          if (
            ((b = Hg),
            !b &&
              (b = Hg =
                /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),
            !b.test(a))
          ) {
            throw new Ig('For input string: "' + a + '"');
          }
          return parseFloat(a);
        }
        function Jg(a) {
          var b, c;
          if (null == a) {
            throw new Ig("null");
          }
          c = a.length;
          for (
            b =
              0 < c && (45 == a.charCodeAt(0) || 43 == a.charCodeAt(0)) ? 1 : 0;
            b < c;
            b++
          ) {
            var d = a.charCodeAt(b);
            if (
              -1 ==
              (48 <= d && 58 > d
                ? d - 48
                : 97 <= d && 97 > d
                  ? d - 97 + 10
                  : 65 <= d && 65 > d
                    ? d - 65 + 10
                    : -1)
            ) {
              throw new Ig('For input string: "' + a + '"');
            }
          }
          c = parseInt(a, 10);
          b = -2147483648 > c;
          if (isNaN(c)) {
            throw new Ig('For input string: "' + a + '"');
          }
          if (b || c > ca) {
            throw new Ig('For input string: "' + a + '"');
          }
          return c;
        }
        q(54, 1, { 3: 1, 54: 1 });
        var Hg;
        v(54);
        function Zf(a) {
          this.a = a;
        }
        function Kg(a, b) {
          return a < b
            ? -1
            : a > b
              ? 1
              : a == b
                ? 0
                : isNaN(a)
                  ? isNaN(b)
                    ? 0
                    : 1
                  : -1;
        }
        q(65, 54, { 3: 1, 13: 1, 65: 1, 54: 1 }, Zf);
        _.t = function (a) {
          return Kg(this.a, a.a);
        };
        _.eQ = function (a) {
          return t(a, 65) && a.a == this.a;
        };
        _.hC = function () {
          return ac(this.a);
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = 0;
        v(65);
        function Lg(a) {
          a = Gg(a);
          this.a =
            3.4028234663852886e38 < a
              ? Infinity
              : -3.4028234663852886e38 > a
                ? -Infinity
                : a;
        }
        q(55, 54, { 3: 1, 13: 1, 55: 1, 54: 1 }, Lg);
        _.t = function (a) {
          return Kg(this.a, a.a);
        };
        _.eQ = function (a) {
          return t(a, 55) && a.a == this.a;
        };
        _.hC = function () {
          return ac(this.a);
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = 0;
        v(55);
        function Mg(a) {
          Lc.call(this, a);
        }
        q(20, 19, na, Mg);
        v(20);
        function Ng() {
          Yc(this, this.e);
        }
        q(200, 19, ha, Ng);
        v(200);
        function Og(a) {
          this.a = a;
        }
        function Pg(a) {
          var b, c;
          return -129 < a && 128 > a
            ? ((b = a + 128),
              (c = (Qg(), Rg)[b]),
              !c && (c = Rg[b] = new Og(a)),
              c)
            : new Og(a);
        }
        q(44, 54, { 3: 1, 13: 1, 44: 1, 54: 1 }, Og);
        _.t = function (a) {
          var b = this.a;
          a = a.a;
          return b < a ? -1 : b > a ? 1 : 0;
        };
        _.eQ = function (a) {
          return t(a, 44) && a.a == this.a;
        };
        _.hC = function () {
          return this.a;
        };
        _.tS = function () {
          return "" + this.a;
        };
        _.a = 0;
        var Sg = v(44);
        function Qg() {
          Qg = l;
          Rg = fg(Sg, ja, 44, 256, 0);
        }
        var Rg;
        function Tg(a, b) {
          return a < b ? a : b;
        }
        function me() {
          Yc(this, this.e);
        }
        function If(a) {
          Lc.call(this, a);
        }
        q(35, 19, ha, me, If);
        v(35);
        function Ig(a) {
          Lc.call(this, a);
        }
        q(47, 20, na, Ig);
        v(47);
        function Ug(a, b) {
          var c;
          c = b.length;
          return E(a.substr(a.length - c, c), b);
        }
        function E(a, b) {
          return a === b;
        }
        function F(a, b) {
          return null == b
            ? !1
            : a == b
              ? !0
              : a.length == b.length && a.toLowerCase() == b.toLowerCase();
        }
        function Vg(a) {
          return !a.length;
        }
        function Wg(a, b, c) {
          var d;
          65536 <= b
            ? ((d = (56320 + ((b - 65536) & 1023)) & 65535),
              (b =
                String.fromCharCode(
                  (55296 + (((b - 65536) >> 10) & 1023)) & 65535,
                ) + String.fromCharCode(d)))
            : (b = String.fromCharCode(b & 65535));
          return a.lastIndexOf(b, c);
        }
        function Xg(a, b, c, d, e, f) {
          if (null == d) {
            throw new me();
          }
          if (
            0 > c ||
            0 > e ||
            0 >= f ||
            c + f > a.length ||
            e + f > d.length
          ) {
            return !1;
          }
          a = a.substr(c, f);
          d = d.substr(e, f);
          return b ? F(a, d) : a === d;
        }
        function Yg(a) {
          var b = (160).toString(16),
            b = "\\u" + "0000".substring(b.length) + b;
          return a.replace(RegExp(b, "g"), String.fromCharCode(32));
        }
        function Zg(a, b, c) {
          b = $g(b, "([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])", "\\\\$1");
          c = $g($g(c, "\\\\", "\\\\\\\\"), "\\$", "\\\\$");
          return $g(a, b, c);
        }
        function $g(a, b, c) {
          c = ah(c);
          return a.replace(RegExp(b, "g"), c);
        }
        function bh(a, b) {
          var c;
          c = ah("");
          return a.replace(RegExp(b), c);
        }
        function fh(a, b) {
          for (var c = RegExp(b, "g"), d = [], e = 0, f = a, g = null; ; ) {
            var h = c.exec(f);
            if (null == h || "" == f) {
              d[e] = f;
              break;
            } else {
              (d[e] = f.substring(0, h.index)),
                (f = f.substring(h.index + h[0].length, f.length)),
                (c.lastIndex = 0),
                g == f && ((d[e] = f.substring(0, 1)), (f = f.substring(1))),
                (g = f),
                e++;
            }
          }
          if (0 < a.length) {
            for (c = d.length; 0 < c && "" == d[c - 1]; ) {
              --c;
            }
            c < d.length && d.splice(c, d.length - c);
          }
          c = fg(s, k, 2, d.length, 4);
          for (e = 0; e < d.length; ++e) {
            c[e] = d[e];
          }
          return c;
        }
        function gh(a, b) {
          return E(a.substr(0, b.length), b);
        }
        function hh(a, b) {
          return a.substr(b, a.length - b);
        }
        function ih(a, b, c) {
          return a.substr(b, c - b);
        }
        function jh(a) {
          return 0 == a.length || (" " < a[0] && " " < a[a.length - 1])
            ? a
            : a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "");
        }
        function ah(a) {
          var b;
          for (b = 0; 0 <= (b = a.indexOf("\\", b)); ) {
            36 == a.charCodeAt(b + 1)
              ? (a = a.substr(0, b) + "$" + hh(a, ++b))
              : (a = a.substr(0, b) + hh(a, ++b));
          }
          return a;
        }
        var s = v(2);
        function kh() {
          kh = l;
          lh = {};
          mh = {};
        }
        function Mb(a) {
          kh();
          var b = ":" + a,
            c = mh[b];
          if (null != c) {
            return c;
          }
          c = lh[b];
          if (null == c) {
            var d, e, f;
            d = 0;
            e = a.length;
            f = e - 4;
            for (c = 0; c < f; ) {
              (d =
                a.charCodeAt(c + 3) +
                31 *
                  (a.charCodeAt(c + 2) +
                    31 *
                      (a.charCodeAt(c + 1) + 31 * (a.charCodeAt(c) + 31 * d)))),
                (d = ~~d),
                (c += 4);
            }
            for (; c < e; ) {
              (d *= 31), (f = c++), (f = a.charCodeAt(f)), (d += f);
            }
            c = ~~d;
          }
          256 == oh && ((lh = mh), (mh = {}), (oh = 0));
          ++oh;
          return (mh[b] = c);
        }
        var lh,
          oh = 0,
          mh;
        function ph() {
          this.a = "";
        }
        function pe() {
          this.a = "";
        }
        function Kf(a) {
          this.a = a;
        }
        q(33, 66, { 240: 1 }, ph, pe, Kf);
        v(33);
        function qh(a) {
          Lc.call(this, a);
        }
        q(59, 19, ha, qh);
        v(59);
        function rh(a, b) {
          var c, d, e;
          le(b);
          c = !1;
          for (e = b.H(); e.Y(); ) {
            (d = e.Z()), (c |= a.I(d));
          }
          return c;
        }
        function sh(a) {
          var b, c, d, e;
          e = new Kf("[");
          b = !1;
          for (d = a.H(); d.Y(); ) {
            (c = d.Z()),
              b ? (e.a += ", ") : (b = !0),
              (e.a += c === a ? "(this Collection)" : "" + c);
          }
          e.a += "]";
          return e.a;
        }
        q(230, 1, {});
        _.I = function () {
          throw new qh("Add not supported on this collection");
        };
        _.J = function (a) {
          return rh(this, a);
        };
        _.K = function (a) {
          a: {
            var b, c;
            for (c = this.H(); c.Y(); ) {
              if (((b = c.Z()), $b(a) === $b(b) || (null != a && qb(a, b)))) {
                a = !0;
                break a;
              }
            }
            a = !1;
          }
          return a;
        };
        _.L = function () {
          return 0 == this.M();
        };
        _.N = function () {
          return this.O(fg(Jc, ia, 1, this.M(), 3));
        };
        _.O = function (a) {
          var b, c, d;
          d = this.M();
          a.length < d && (a = og(a, d));
          c = this.H();
          for (b = 0; b < d; ++b) {
            a[b] = c.Z();
          }
          a.length > d && (a[d] = null);
          return a;
        };
        _.tS = function () {
          return sh(this);
        };
        v(230);
        function th(a, b) {
          var c, d, e;
          c = b.cb();
          e = b.db();
          d = a.S(c);
          return !($b(e) === $b(d) || (null != e && qb(e, d))) ||
            (null == d && !a.Q(c))
            ? !1
            : !0;
        }
        function uh(a, b) {
          var c, d, e;
          for (d = a.R().H(); d.Y(); ) {
            if (
              ((c = d.Z()),
              (e = c.cb()),
              $b(b) === $b(e) || (null != b && qb(b, e)))
            ) {
              return c;
            }
          }
          return null;
        }
        function vh(a, b) {
          return b === a ? "(this Map)" : "" + b;
        }
        function wh(a) {
          return a ? a.db() : null;
        }
        q(229, 1, ra);
        _.P = function (a) {
          return th(this, a);
        };
        _.Q = function (a) {
          return !!uh(this, a);
        };
        _.eQ = function (a) {
          var b;
          if (a === this) {
            return !0;
          }
          if (!t(a, 41) || this.M() != a.M()) {
            return !1;
          }
          for (b = a.R().H(); b.Y(); ) {
            if (((a = b.Z()), !this.P(a))) {
              return !1;
            }
          }
          return !0;
        };
        _.S = function (a) {
          return wh(uh(this, a));
        };
        _.hC = function () {
          return xh(this.R());
        };
        _.M = function () {
          return this.R().M();
        };
        _.tS = function () {
          var a, b, c, d;
          d = new Kf("{");
          a = !1;
          for (c = this.R().H(); c.Y(); ) {
            (b = c.Z()),
              a ? (d.a += ", ") : (a = !0),
              (d.a += vh(this, b.cb())),
              (d.a += "\x3d"),
              (b = vh(this, b.db())),
              (d.a += b);
          }
          d.a += "}";
          return d.a;
        };
        v(229);
        function yh(a) {
          zh();
          a.d = Ah.jb();
          a.d.b = a;
          a.f = Ah.kb();
          a.f.b = a;
          a.e = 0;
          Bh(a);
        }
        q(130, 229, ra);
        _.T = function () {
          yh(this);
        };
        _.Q = function (a) {
          return rb(a)
            ? null == a
              ? !!Ch(this.d, null)
              : void 0 !== this.f.mb(a)
            : !!Ch(this.d, a);
        };
        _.R = function () {
          return new Dh(this);
        };
        _.S = function (a) {
          return rb(a)
            ? null == a
              ? wh(Ch(this.d, null))
              : this.f.mb(a)
            : wh(Ch(this.d, a));
        };
        _.W = function (a, b) {
          return rb(a)
            ? null == a
              ? Eh(this.d, null, b)
              : this.f.pb(a, b)
            : Eh(this.d, a, b);
        };
        _.X = function (a) {
          return rb(a)
            ? null == a
              ? Fh(this.d, null)
              : this.f.qb(a)
            : Fh(this.d, a);
        };
        _.M = function () {
          return this.e;
        };
        _.e = 0;
        v(130);
        q(231, 230, sa);
        _.eQ = function (a) {
          if (a === this) {
            a = !0;
          } else {
            if (t(a, 25) && a.M() == this.M()) {
              a: {
                var b;
                le(a);
                for (b = a.H(); b.Y(); ) {
                  if (((a = b.Z()), !this.K(a))) {
                    a = !1;
                    break a;
                  }
                }
                a = !0;
              }
            } else {
              a = !1;
            }
          }
          return a;
        };
        _.hC = function () {
          return xh(this);
        };
        v(231);
        function Dh(a) {
          this.a = a;
        }
        q(131, 231, sa, Dh);
        _.K = function (a) {
          return t(a, 24) ? th(this.a, a) : !1;
        };
        _.H = function () {
          return new Gh(this.a);
        };
        _.M = function () {
          return this.a.M();
        };
        v(131);
        function Hh(a) {
          if (a.a.Y()) {
            return !0;
          }
          if (a.a != a.b) {
            return !1;
          }
          a.a = a.c.d.hb();
          return a.a.Y();
        }
        function Gh(a) {
          this.c = a;
          this.a = this.b = this.c.f.hb();
          this._gwt_modCount = a._gwt_modCount;
        }
        q(132, 1, {}, Gh);
        _.Y = function () {
          return Hh(this);
        };
        _.Z = function () {
          return Ih(this.c, this), z(Hh(this)), this.a.Z();
        };
        v(132);
        function Jh(a, b) {
          var c, d;
          c = 0;
          for (d = a.a.length; c < d; ++c) {
            if (Kh(b, (A(c, a.a.length), a.a[c]))) {
              return c;
            }
          }
          return -1;
        }
        q(232, 230, { 30: 1 });
        _.$ = function () {
          throw new qh("Add not supported on this list");
        };
        _.I = function (a) {
          this.$(this.M(), a);
          return !0;
        };
        _.eQ = function (a) {
          var b, c, d;
          if (a === this) {
            return !0;
          }
          if (!t(a, 30) || this.M() != a.M()) {
            return !1;
          }
          d = a.H();
          for (b = this.H(); b.Y(); ) {
            if (
              ((a = b.Z()),
              (c = d.Z()),
              !($b(a) === $b(c) || (null != a && qb(a, c))))
            ) {
              return !1;
            }
          }
          return !0;
        };
        _.hC = function () {
          var a, b, c;
          c = 1;
          for (b = this.H(); b.Y(); ) {
            (a = b.Z()), (c = 31 * c + (null != a ? Lb(a) : 0)), (c = ~~c);
          }
          return c;
        };
        _.H = function () {
          return new I(this);
        };
        _.ab = function () {
          throw new qh("Remove not supported on this list");
        };
        v(232);
        function Lh(a) {
          if (-1 == a.c) {
            throw new Ng();
          }
          a.d.ab(a.c);
          a.b = a.c;
          a.c = -1;
        }
        function I(a) {
          this.d = a;
        }
        q(7, 1, {}, I);
        _.Y = function () {
          return this.b < this.d.M();
        };
        _.Z = function () {
          return z(this.b < this.d.M()), this.d._((this.c = this.b++));
        };
        _.bb = function () {
          Lh(this);
        };
        _.b = 0;
        _.c = -1;
        v(7);
        function Mh(a, b) {
          this.d = this.a = a;
          ne(b, a.b.length);
          this.b = b;
        }
        q(50, 7, {}, Mh);
        v(50);
        function Nh(a, b) {
          A(b, a.b);
          return L(a.c, a.a + b);
        }
        function Oh(a, b, c) {
          var d = a.b.length;
          if (0 > b) {
            throw new ke("fromIndex: " + b + " \x3c 0");
          }
          if (c > d) {
            throw new ke("toIndex: " + c + " \x3e size " + d);
          }
          if (b > c) {
            throw new Mg("fromIndex: " + b + " \x3e toIndex: " + c);
          }
          this.c = a;
          this.a = b;
          this.b = c - b;
        }
        q(40, 232, { 30: 1 }, Oh);
        _.$ = function (a, b) {
          ne(a, this.b);
          Ph(this.c, this.a + a, b);
          ++this.b;
        };
        _._ = function (a) {
          return Nh(this, a);
        };
        _.ab = function (a) {
          A(a, this.b);
          a = this.c.ab(this.a + a);
          --this.b;
          return a;
        };
        _.M = function () {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        v(40);
        function Qh(a) {
          a = a.a.R().H();
          return new Rh(a);
        }
        function Sh(a) {
          this.a = a;
        }
        q(68, 231, sa, Sh);
        _.K = function (a) {
          return this.a.Q(a);
        };
        _.H = function () {
          return Qh(this);
        };
        _.M = function () {
          return this.a.M();
        };
        v(68);
        function Rh(a) {
          this.a = a;
        }
        q(133, 1, {}, Rh);
        _.Y = function () {
          return this.a.Y();
        };
        _.Z = function () {
          return this.a.Z().cb();
        };
        v(133);
        function Th(a, b) {
          var c;
          c = a.e;
          a.e = b;
          return c;
        }
        q(48, 1, { 48: 1, 24: 1 });
        _.eQ = function (a) {
          return t(a, 24) ? Kh(this.d, a.cb()) && Kh(this.e, a.db()) : !1;
        };
        _.cb = function () {
          return this.d;
        };
        _.db = function () {
          return this.e;
        };
        _.hC = function () {
          return Uh(this.d) ^ Uh(this.e);
        };
        _.eb = function (a) {
          return Th(this, a);
        };
        _.tS = function () {
          return this.d + "\x3d" + this.e;
        };
        v(48);
        function Vh(a, b) {
          this.d = a;
          this.e = b;
        }
        q(39, 48, ua, Vh);
        v(39);
        q(236, 1, { 24: 1 });
        _.eQ = function (a) {
          return t(a, 24) ? Kh(this.cb(), a.cb()) && Kh(this.db(), a.db()) : !1;
        };
        _.hC = function () {
          return Uh(this.cb()) ^ Uh(this.db());
        };
        _.tS = function () {
          return this.cb() + "\x3d" + this.db();
        };
        v(236);
        function Wh(a, b) {
          var c;
          c = Xh(a, b.cb());
          return !!c && Kh(c.e, b.db());
        }
        q(238, 229, ra);
        _.P = function (a) {
          return Wh(this, a);
        };
        _.Q = function (a) {
          return !!Xh(this, a);
        };
        _.R = function () {
          return new Yh(this);
        };
        _.S = function (a) {
          return wh(Xh(this, a));
        };
        v(238);
        function Yh(a) {
          this.a = a;
        }
        q(112, 231, sa, Yh);
        _.K = function (a) {
          return t(a, 24) && Wh(this.a, a);
        };
        _.H = function () {
          return new Zh(this.a);
        };
        _.M = function () {
          return this.a.c;
        };
        v(112);
        function $h(a) {
          a = new Zh(new ai(a.a).a);
          return new bi(a);
        }
        function ci(a) {
          this.a = a;
        }
        q(212, 231, sa, ci);
        _.K = function (a) {
          return !!Xh(this.a, a);
        };
        _.H = function () {
          return $h(this);
        };
        _.M = function () {
          return this.a.c;
        };
        v(212);
        function bi(a) {
          this.a = a;
        }
        q(213, 1, {}, bi);
        _.Y = function () {
          return this.a.a.Y();
        };
        _.Z = function () {
          return this.a.a.Z().cb();
        };
        v(213);
        function di(a, b) {
          var c;
          c = ei(a, b);
          try {
            return z(c.b != c.d.c), (c.c = c.b), (c.b = c.b.a), ++c.a, c.c.c;
          } catch (d) {
            d = Od(d);
            if (t(d, 60)) {
              throw new ke("Can't get element " + b);
            }
            throw Pd(d);
          }
        }
        q(233, 232, { 30: 1 });
        _.$ = function (a, b) {
          var c;
          c = ei(this, a);
          fi(c.d, b, c.b.b, c.b);
          ++c.a;
          c.c = null;
        };
        _._ = function (a) {
          return di(this, a);
        };
        _.H = function () {
          return ei(this, 0);
        };
        _.ab = function (a) {
          var b, c;
          b = ei(this, a);
          try {
            return (
              (c = (z(b.b != b.d.c), (b.c = b.b), (b.b = b.b.a), ++b.a, b.c.c)),
              gi(b),
              c
            );
          } catch (d) {
            d = Od(d);
            if (t(d, 60)) {
              throw new ke("Can't remove element " + a);
            }
            throw Pd(d);
          }
        };
        v(233);
        function hi(a) {
          a.b = fg(Jc, ia, 1, 0, 3);
        }
        function Ph(a, b, c) {
          ne(b, a.b.length);
          a.b.splice(b, 0, c);
        }
        function M(a, b) {
          a.b[a.b.length] = b;
          return !0;
        }
        function ii(a, b) {
          var c;
          c = b.N();
          if (0 == c.length) {
            return !1;
          }
          sg(c, 0, a.b, a.b.length, c.length, !1);
          return !0;
        }
        function L(a, b) {
          A(b, a.b.length);
          return a.b[b];
        }
        function ji(a, b) {
          for (var c = 0; c < a.b.length; ++c) {
            if (Kh(b, a.b[c])) {
              return c;
            }
          }
          return -1;
        }
        function ki(a, b) {
          var c;
          c = (A(b, a.b.length), a.b[b]);
          a.b.splice(b, 1);
          return c;
        }
        function li(a, b, c) {
          A(b, a.b.length);
          a.b[b] = c;
        }
        function mi(a, b) {
          var c, d;
          d = a.b.length;
          b.length < d && (b = og(b, d));
          for (c = 0; c < d; ++c) {
            b[c] = a.b[c];
          }
          b.length > d && (b[d] = null);
          return b;
        }
        function N() {
          hi(this);
        }
        function ni(a) {
          hi(this);
          a = ng(a.b, a.b.length);
          sg(a, 0, this.b, 0, a.length, !1);
        }
        q(8, 232, ya, N, ni);
        _.$ = function (a, b) {
          Ph(this, a, b);
        };
        _.I = function (a) {
          return M(this, a);
        };
        _.J = function (a) {
          return ii(this, a);
        };
        _.K = function (a) {
          return -1 != ji(this, a);
        };
        _._ = function (a) {
          return L(this, a);
        };
        _.L = function () {
          return 0 == this.b.length;
        };
        _.ab = function (a) {
          return ki(this, a);
        };
        _.M = function () {
          return this.b.length;
        };
        _.N = function () {
          return ng(this.b, this.b.length);
        };
        _.O = function (a) {
          return mi(this, a);
        };
        v(8);
        function oi(a, b, c, d, e, f) {
          var g, h, n;
          if (7 > d - c) {
            for (a = c, g = a + 1; g < d; ++g) {
              for (n = g; n > a && 0 < f.fb(b[n - 1], b[n]); --n) {
                (c = b[n]), (b[n] = b[n - 1]), (b[n - 1] = c);
              }
            }
          } else {
            if (
              ((h = c + e),
              (g = d + e),
              (n = h + ((g - h) >> 1)),
              oi(b, a, h, n, -e, f),
              oi(b, a, n, g, -e, f),
              0 >= f.fb(a[n - 1], a[n]))
            ) {
              for (; c < d; ) {
                b[c++] = a[h++];
              }
            } else {
              for (e = h, h = n; c < d; ) {
                h >= g || (e < n && 0 >= f.fb(a[e], a[h]))
                  ? (b[c++] = a[e++])
                  : (b[c++] = a[h++]);
              }
            }
          }
        }
        function pi(a) {
          this.a = a;
        }
        q(197, 232, ya, pi);
        _.K = function (a) {
          return -1 != Jh(this, a);
        };
        _._ = function (a) {
          return A(a, this.a.length), this.a[a];
        };
        _.M = function () {
          return this.a.length;
        };
        _.N = function () {
          var a = this.a;
          return ng(a, a.length);
        };
        _.O = function (a) {
          var b, c;
          c = this.a.length;
          a.length < c && (a = og(a, c));
          for (b = 0; b < c; ++b) {
            a[b] = this.a[b];
          }
          a.length > c && (a[c] = null);
          return a;
        };
        v(197);
        function xh(a) {
          var b, c;
          c = 0;
          for (b = a.H(); b.Y(); ) {
            (a = b.Z()), (c += null != a ? Lb(a) : 0), (c = ~~c);
          }
          return c;
        }
        function qi() {
          qi = l;
          ri = new si();
        }
        var ri;
        function ti(a, b) {
          le(a);
          le(b);
          return rb(a) ? (a == b ? 0 : a < b ? -1 : 1) : a.t(b);
        }
        function si() {}
        q(207, 1, {}, si);
        _.fb = function (a, b) {
          return ti(a, b);
        };
        v(207);
        function Ih(a, b) {
          if (b._gwt_modCount != a._gwt_modCount) {
            throw new ui();
          }
        }
        function Bh(a) {
          a._gwt_modCount = (a._gwt_modCount | 0) + 1;
        }
        function ui() {
          Yc(this, this.e);
        }
        q(206, 19, ha, ui);
        v(206);
        function vi() {
          Yc(this, this.e);
        }
        q(102, 19, ha, vi);
        v(102);
        function wi(a, b) {
          return xi(a.a, b) ? a.b[b.b] : null;
        }
        function yi(a, b, c) {
          zi(a.a, b);
          Ai(a, b.b, c);
        }
        function Ai(a, b, c) {
          var d;
          d = a.b[b];
          a.b[b] = c;
          return d;
        }
        function Bi(a) {
          var b;
          this.a = ((b = a.e && a.e()), new Ci(b, og(b, b.length)));
          this.b = fg(Jc, ia, 1, this.a.a.length, 3);
        }
        q(204, 229, ra, Bi);
        _.Q = function (a) {
          return xi(this.a, a);
        };
        _.R = function () {
          return new Di(this);
        };
        _.S = function (a) {
          return wi(this, a);
        };
        _.M = function () {
          return this.a.c;
        };
        v(204);
        function Di(a) {
          this.a = a;
        }
        q(107, 231, sa, Di);
        _.K = function (a) {
          return t(a, 24) ? th(this.a, a) : !1;
        };
        _.H = function () {
          return new Ei(this.a);
        };
        _.M = function () {
          return this.a.a.c;
        };
        v(107);
        function Ei(a) {
          this.c = a;
          this.a = new Fi(this.c.a);
        }
        q(108, 1, {}, Ei);
        _.Y = function () {
          return Gi(this.a);
        };
        _.Z = function () {
          return (this.b = Hi(this.a)), new Ii(this.c, this.b);
        };
        v(108);
        function Ii(a, b) {
          this.b = a;
          this.a = b;
        }
        q(109, 236, { 24: 1 }, Ii);
        _.cb = function () {
          return this.a;
        };
        _.db = function () {
          return this.b.b[this.a.b];
        };
        _.eb = function (a) {
          return Ai(this.b, this.a.b, a);
        };
        v(109);
        q(239, 231, sa);
        v(239);
        function zi(a, b) {
          var c;
          le(b);
          c = b.b;
          return a.b[c] ? !1 : ((a.b[c] = b), ++a.c, !0);
        }
        function xi(a, b) {
          return t(b, 9) && !!b && a.b[b.b] == b;
        }
        function Ci(a, b) {
          this.a = a;
          this.b = b;
          this.c = 0;
        }
        q(214, 239, sa, Ci);
        _.I = function (a) {
          return zi(this, a);
        };
        _.K = function (a) {
          return xi(this, a);
        };
        _.H = function () {
          return new Fi(this);
        };
        _.M = function () {
          return this.c;
        };
        _.c = 0;
        v(214);
        function Ji(a) {
          var b;
          ++a.a;
          for (b = a.c.a.length; a.a < b && !a.c.b[a.a]; ++a.a) {}
        }
        function Gi(a) {
          return a.a < a.c.a.length;
        }
        function Hi(a) {
          return z(a.a < a.c.a.length), (a.b = a.a), Ji(a), a.c.b[a.b];
        }
        function Fi(a) {
          this.c = a;
          Ji(this);
        }
        q(114, 1, {}, Fi);
        _.Y = function () {
          return Gi(this);
        };
        _.Z = function () {
          return Hi(this);
        };
        _.a = -1;
        _.b = -1;
        v(114);
        function Ki() {
          yh(this);
        }
        q(17, 130, za, Ki);
        _.U = function (a, b) {
          return $b(a) === $b(b) || (null != a && qb(a, b));
        };
        _.V = function (a) {
          return ~~Lb(a);
        };
        v(17);
        function O(a, b) {
          return null == a.a.W(b, a);
        }
        function P(a, b) {
          return a.a.Q(b);
        }
        function Li() {
          this.a = new Ki();
        }
        q(18, 231, { 3: 1, 25: 1 }, Li);
        _.I = function (a) {
          return O(this, a);
        };
        _.K = function (a) {
          return P(this, a);
        };
        _.L = function () {
          return 0 == this.a.M();
        };
        _.H = function () {
          return Qh(new Sh(this.a));
        };
        _.M = function () {
          return this.a.M();
        };
        _.tS = function () {
          return sh(new Sh(this.a));
        };
        v(18);
        function Ch(a, b) {
          var c, d, e, f;
          c = null == b ? "0" : "" + a.b.V(b);
          d = a.a[c] || [];
          e = 0;
          for (f = d.length; e < f; ++e) {
            if (((c = d[e]), a.b.U(b, c.cb()))) {
              return c;
            }
          }
          return null;
        }
        function Eh(a, b, c) {
          var d, e, f, g;
          d = null == b ? "0" : "" + a.b.V(b);
          e = a.a;
          d = e[d] || (e[d] = []);
          f = 0;
          for (g = d.length; f < g; ++f) {
            if (((e = d[f]), a.b.U(b, e.cb()))) {
              return e.eb(c);
            }
          }
          d[d.length] = new Vh(b, c);
          a = a.b;
          ++a.e;
          Bh(a);
          return null;
        }
        function Fh(a, b) {
          var c, d, e, f;
          e = null == b ? "0" : "" + a.b.V(b);
          c = a.a[e] || [];
          for (f = 0; f < c.length; f++) {
            if (((d = c[f]), a.b.U(b, d.cb()))) {
              return (
                1 == c.length ? delete a.a[e] : c.splice(f, 1),
                (c = a.b),
                --c.e,
                Bh(c),
                d.db()
              );
            }
          }
          return null;
        }
        function Mi() {
          this.a = this.gb();
        }
        q(103, 1, {}, Mi);
        _.gb = function () {
          return Object.create(null);
        };
        _.hb = function () {
          return new Ni(this);
        };
        v(103);
        function Oi(a) {
          if (a.c < a.a.length) {
            return !0;
          }
          if (a.b < a.d.length - 1) {
            var b = a.d[++a.b];
            a.a = a.f.a[b];
            a.c = 0;
            return !0;
          }
          return !1;
        }
        function Ni(a) {
          this.f = a;
          this.d = Object.getOwnPropertyNames(this.f.a);
          this.a = fg(Pi, ia, 24, 0, 0);
        }
        q(180, 1, {}, Ni);
        _.Y = function () {
          return Oi(this);
        };
        _.Z = function () {
          return z(Oi(this)), (this.e = this.a[this.c++]), this.e;
        };
        _.b = -1;
        _.c = 0;
        _.e = null;
        v(180);
        function Qi() {
          Mi.call(this);
        }
        q(178, 103, {}, Qi);
        _.gb = function () {
          return {};
        };
        _.hb = function () {
          var a = this.ib(),
            b = this.a,
            c;
          for (c in b) {
            if (c == parseInt(c, 10)) {
              for (var d = b[c], e = 0, f = d.length; e < f; ++e) {
                a.I(d[e]);
              }
            }
          }
          return a.H();
        };
        _.ib = function () {
          return new Ri(this);
        };
        v(178);
        function Ri(a) {
          this.a = a;
          hi(this);
        }
        q(179, 8, ya, Ri);
        _.ab = function (a) {
          var b;
          return (b = ki(this, a)), Fh(this.a, b.cb()), b;
        };
        v(179);
        function Si() {}
        q(175, 1, {}, Si);
        _.jb = function () {
          return new Mi();
        };
        _.kb = function () {
          return new Ti();
        };
        v(175);
        function zh() {
          zh = l;
          var a, b;
          if ((b = Object.create && Object.getOwnPropertyNames)) {
            (b = Object.create(null)),
              void 0 !== b.__proto__ ||
              0 != Object.getOwnPropertyNames(b).length
                ? (b = !1)
                : ((b.__proto__ = 42), (b = 42 !== b.__proto__ ? !1 : !0));
          }
          Ah = b
            ? ((a = Object.create(null)),
              (a.__proto__ = 42),
              0 == Object.getOwnPropertyNames(a).length)
              ? new Ui()
              : new Si()
            : new Vi();
        }
        var Ah;
        function Ui() {}
        q(177, 175, {}, Ui);
        _.kb = function () {
          return new Wi();
        };
        v(177);
        function Vi() {}
        q(176, 175, {}, Vi);
        _.jb = function () {
          return new Qi();
        };
        _.kb = function () {
          return new Xi();
        };
        v(176);
        function Yi(a, b, c) {
          var d;
          d = a.a[b];
          if (void 0 === d) {
            var e = a.b;
            ++e.e;
            Bh(e);
          }
          a.a[b] = void 0 === c ? null : c;
          return d;
        }
        function Zi(a, b) {
          var c;
          c = a.a[b];
          if (void 0 !== c) {
            delete a.a[b];
            var d = a.b;
            --d.e;
            Bh(d);
          }
          return c;
        }
        function Ti() {
          this.a = this.lb();
        }
        q(79, 1, {}, Ti);
        _.lb = function () {
          return Object.create(null);
        };
        _.hb = function () {
          var a;
          a = this.nb();
          return new $i(this, a);
        };
        _.mb = function (a) {
          return this.a[a];
        };
        _.nb = function () {
          return Object.getOwnPropertyNames(this.a);
        };
        _.ob = function (a) {
          return new aj(this, a);
        };
        _.pb = function (a, b) {
          return Yi(this, a, b);
        };
        _.qb = function (a) {
          return Zi(this, a);
        };
        v(79);
        function $i(a, b) {
          this.b = a;
          this.c = b;
        }
        q(167, 1, {}, $i);
        _.Y = function () {
          return this.a < this.c.length;
        };
        _.Z = function () {
          return z(this.a < this.c.length), new aj(this.b, this.c[this.a++]);
        };
        _.a = 0;
        v(167);
        function aj(a, b) {
          this.a = a;
          this.b = b;
        }
        q(97, 236, { 24: 1 }, aj);
        _.cb = function () {
          return this.b;
        };
        _.db = function () {
          return this.a.mb(this.b);
        };
        _.eb = function (a) {
          return this.a.pb(this.b, a);
        };
        v(97);
        function Xi() {
          Ti.call(this);
        }
        q(164, 79, {}, Xi);
        _.lb = function () {
          return {};
        };
        _.hb = function () {
          var a = this.rb(),
            b;
          for (b in this.a) {
            if (58 == b.charCodeAt(0)) {
              var c = this.ob(b.substring(1));
              a.I(c);
            }
          }
          return a.H();
        };
        _.mb = function (a) {
          return this.a[":" + a];
        };
        _.rb = function () {
          return new bj(this);
        };
        _.pb = function (a, b) {
          return Yi(this, ":" + a, b);
        };
        _.qb = function (a) {
          return Zi(this, ":" + a);
        };
        v(164);
        function bj(a) {
          this.a = a;
          hi(this);
        }
        q(166, 8, ya, bj);
        _.ab = function (a) {
          var b;
          return (b = ki(this, a)), Zi(this.a, ":" + b.cb()), b;
        };
        v(166);
        function Wi() {
          Ti.call(this);
        }
        q(165, 79, {}, Wi);
        _.nb = function () {
          var a;
          a = Object.getOwnPropertyNames(this.a);
          void 0 !== this.a.__proto__ && (a[a.length] = "__proto__");
          return a;
        };
        v(165);
        function cj(a, b, c) {
          var d;
          if ((d = a.c.S(b))) {
            return (b = Th(d, c)), a.a && (dj(d), ej(d)), b;
          }
          d = new fj(a, b, c);
          a.c.W(b, d);
          ej(d);
          return null;
        }
        function gj() {
          yh(this);
          this.b = new hj(this);
          this.c = new Ki();
          this.b.b = this.b;
          this.b.a = this.b;
        }
        q(90, 17, za, gj);
        _.T = function () {
          this.c.T();
          this.b.b = this.b;
          this.b.a = this.b;
        };
        _.Q = function (a) {
          return this.c.Q(a);
        };
        _.R = function () {
          return new ij(this);
        };
        _.S = function (a) {
          return (a = this.c.S(a)) ? (this.a && (dj(a), ej(a)), a.e) : null;
        };
        _.W = function (a, b) {
          return cj(this, a, b);
        };
        _.X = function (a) {
          (a = this.c.X(a)) ? (dj(a), (a = a.e)) : (a = null);
          return a;
        };
        _.M = function () {
          return this.c.M();
        };
        _.a = !1;
        v(90);
        function ej(a) {
          var b;
          b = a.c.b.b;
          a.b = b;
          a.a = a.c.b;
          b.a = a.c.b.b = a;
        }
        function dj(a) {
          a.a.b = a.b;
          a.b.a = a.a;
          a.a = a.b = null;
        }
        function hj(a) {
          fj.call(this, a, null, null);
        }
        function fj(a, b, c) {
          this.c = a;
          Vh.call(this, b, c);
        }
        q(70, 39, ua, hj, fj);
        v(70);
        function ij(a) {
          this.a = a;
        }
        q(71, 231, sa, ij);
        _.K = function (a) {
          return t(a, 24) ? th(this.a, a) : !1;
        };
        _.H = function () {
          return new jj(this);
        };
        _.M = function () {
          return this.a.c.M();
        };
        v(71);
        function jj(a) {
          this.c = a;
          this.b = a.a.b.a;
          this._gwt_modCount = a.a.c._gwt_modCount;
        }
        q(72, 1, {}, jj);
        _.Y = function () {
          return this.b != this.c.a.b;
        };
        _.Z = function () {
          return (
            Ih(this.c.a.c, this),
            z(this.b != this.c.a.b),
            (this.a = this.b),
            (this.b = this.b.a),
            this.a
          );
        };
        v(72);
        function kj(a, b) {
          fi(a, b, a.c.b, a.c);
          return !0;
        }
        function fi(a, b, c, d) {
          var e;
          e = new lj();
          e.c = b;
          e.b = c;
          e.a = d;
          d.b = c.a = e;
          ++a.b;
        }
        function ei(a, b) {
          var c, d;
          ne(b, a.b);
          if (b >= a.b >> 1) {
            for (d = a.c, c = a.b; c > b; --c) {
              d = d.b;
            }
          } else {
            for (d = a.a.a, c = 0; c < b; ++c) {
              d = d.a;
            }
          }
          return new mj(a, b, d);
        }
        function nj(a, b) {
          fi(a, b, a.c.b, a.c);
        }
        function sj() {
          var a = R;
          return 0 == a.b ? null : (z(0 != a.b), a.a.a.c);
        }
        function tj(a) {
          return 0 == a.b ? null : (z(0 != a.b), a.c.b.c);
        }
        function uj(a) {
          return 0 == a.b ? null : (z(0 != a.b), vj(a, a.a.a));
        }
        function wj(a) {
          0 == a.b || (z(0 != a.b), vj(a, a.c.b));
        }
        function vj(a, b) {
          var c;
          c = b.c;
          b.a.b = b.b;
          b.b.a = b.a;
          b.a = b.b = null;
          b.c = null;
          --a.b;
          return c;
        }
        function xj() {
          this.a = new lj();
          this.c = new lj();
          this.a.a = this.c;
          this.c.b = this.a;
          this.a.b = this.c.a = null;
          this.b = 0;
        }
        q(49, 233, ya, xj);
        _.I = function (a) {
          return kj(this, a);
        };
        _.M = function () {
          return this.b;
        };
        _.b = 0;
        v(49);
        function gi(a) {
          var b;
          if (!a.c) {
            throw new Ng();
          }
          b = a.c.a;
          vj(a.d, a.c);
          a.b == a.c ? (a.b = b) : --a.a;
          a.c = null;
        }
        function mj(a, b, c) {
          this.d = a;
          this.b = c;
          this.a = b;
        }
        q(134, 1, {}, mj);
        _.Y = function () {
          return this.b != this.d.c;
        };
        _.Z = function () {
          return (
            z(this.b != this.d.c),
            (this.c = this.b),
            (this.b = this.b.a),
            ++this.a,
            this.c.c
          );
        };
        _.bb = function () {
          gi(this);
        };
        _.a = 0;
        _.c = null;
        v(134);
        function lj() {}
        q(69, 1, {}, lj);
        v(69);
        var Pi = Hc();
        function je() {
          Yc(this, this.e);
        }
        q(60, 19, { 3: 1, 11: 1, 12: 1, 60: 1 }, je);
        v(60);
        function Kh(a, b) {
          return $b(a) === $b(b) || (null != a && qb(a, b));
        }
        function Uh(a) {
          return null != a ? Lb(a) : 0;
        }
        function yj(a, b) {
          if (0 > a || a >= b) {
            throw new wg();
          }
        }
        q(160, 232, ya);
        _.$ = function (a, b) {
          yj(a, this.a.b.length + 1);
          Ph(this.a, a, b);
        };
        _.I = function (a) {
          return M(this.a, a);
        };
        _.J = function (a) {
          return ii(this.a, a);
        };
        _.K = function (a) {
          return -1 != ji(this.a, a);
        };
        _._ = function (a) {
          return yj(a, this.a.b.length), L(this.a, a);
        };
        _.L = function () {
          return 0 == this.a.b.length;
        };
        _.H = function () {
          return new I(this.a);
        };
        _.ab = function (a) {
          return yj(a, this.a.b.length), this.a.ab(a);
        };
        _.M = function () {
          return this.a.b.length;
        };
        _.N = function () {
          var a = this.a;
          return ng(a.b, a.b.length);
        };
        _.O = function (a) {
          return mi(this.a, a);
        };
        _.tS = function () {
          return sh(this.a);
        };
        v(160);
        function zj(a) {
          var b;
          b = a.a.b.length;
          if (0 < b) {
            return yj(b - 1, a.a.b.length), a.a.ab(b - 1);
          }
          throw new vi();
        }
        function Aj() {
          this.a = new N();
        }
        q(73, 160, ya, Aj);
        v(73);
        function Xh(a, b) {
          var c, d;
          for (d = a.b; d; ) {
            c = ti(b, d.d);
            if (0 == c) {
              return d;
            }
            c = 0 > c ? 0 : 1;
            d = d.a[c];
          }
          return null;
        }
        function Bj(a, b, c, d, e, f, g, h) {
          var n;
          if (d) {
            (n = d.a[0]) && Bj(a, b, c, n, e, f, g, h);
            n = d.d;
            var m, u;
            (c.sb() && ((m = ti(n, e)), 0 > m || (!f && 0 == m))) ||
              (c.tb() && ((u = ti(n, g)), 0 < u || (!h && 0 == u))) ||
              b.I(d);
            (d = d.a[1]) && Bj(a, b, c, d, e, f, g, h);
          }
        }
        function Cj(a, b, c, d) {
          var e, f;
          if (b) {
            e = ti(c.d, b.d);
            if (0 == e) {
              return (d.d = Th(b, c.e)), (d.b = !0), b;
            }
            e = 0 > e ? 0 : 1;
            b.a[e] = Cj(a, b.a[e], c, d);
            Dj(b.a[e]) &&
              (Dj(b.a[1 - e])
                ? ((b.b = !0), (b.a[0].b = !1), (b.a[1].b = !1))
                : Dj(b.a[e].a[e])
                  ? (b = Ej(b, 1 - e))
                  : Dj(b.a[e].a[1 - e]) &&
                    (b =
                      ((f = 1 - (1 - e)),
                      (b.a[f] = Ej(b.a[f], f)),
                      Ej(b, 1 - e))));
          } else {
            return c;
          }
          return b;
        }
        function Dj(a) {
          return !!a && a.b;
        }
        function Ej(a, b) {
          var c, d;
          c = 1 - b;
          d = a.a[c];
          a.a[c] = d.a[b];
          d.a[b] = a;
          a.b = !0;
          d.b = !1;
          return d;
        }
        function Fj() {
          var a = null;
          this.b = null;
          !a && (a = (qi(), qi(), ri));
          this.a = a;
        }
        q(111, 238, za, Fj);
        _.R = function () {
          return new ai(this);
        };
        _.M = function () {
          return this.c;
        };
        _.c = 0;
        v(111);
        function Zh(a) {
          var b = (Gj(), Hj),
            c;
          c = new N();
          Bj(a, c, b, a.b, null, !1, null, !1);
          this.a = new Mh(c, 0);
        }
        q(84, 1, {}, Zh);
        _.Y = function () {
          return this.a.Y();
        };
        _.Z = function () {
          return this.a.Z();
        };
        v(84);
        function ai(a) {
          this.a = a;
        }
        q(113, 112, sa, ai);
        v(113);
        function Ij(a, b) {
          Vh.call(this, a, b);
          this.a = fg(Jj, ia, 63, 2, 0);
          this.b = !0;
        }
        q(63, 39, { 48: 1, 39: 1, 24: 1, 63: 1 }, Ij);
        _.b = !1;
        var Jj = v(63);
        function Kj() {}
        q(208, 1, {}, Kj);
        _.tS = function () {
          return (
            "State: mv\x3d" +
            this.c +
            " value\x3d" +
            this.d +
            " done\x3d" +
            this.a +
            " found\x3d" +
            this.b
          );
        };
        _.a = !1;
        _.b = !1;
        _.c = !1;
        v(208);
        function Gj() {
          Gj = l;
          Hj = new Lj("All", 0);
          Mj = new Nj();
          Oj = new Pj();
          Qj = new Rj();
        }
        function Lj(a, b) {
          te.call(this, a, b);
        }
        q(29, 9, Da, Lj);
        _.sb = function () {
          return !1;
        };
        _.tb = function () {
          return !1;
        };
        var Hj,
          Mj,
          Oj,
          Qj,
          Sj = Gc(29, function () {
            Gj();
            return C(w(Sj, 1), ja, 29, 0, [Hj, Mj, Oj, Qj]);
          });
        function Nj() {
          te.call(this, "Head", 1);
        }
        q(209, 29, Da, Nj);
        _.tb = function () {
          return !0;
        };
        Gc(209, null);
        function Pj() {
          te.call(this, "Range", 2);
        }
        q(210, 29, Da, Pj);
        _.sb = function () {
          return !0;
        };
        _.tb = function () {
          return !0;
        };
        Gc(210, null);
        function Rj() {
          te.call(this, "Tail", 3);
        }
        q(211, 29, Da, Rj);
        _.sb = function () {
          return !0;
        };
        Gc(211, null);
        function Tj(a) {
          this.a = new Fj();
          rh(this, a);
        }
        q(105, 231, { 3: 1, 25: 1 }, Tj);
        _.I = function (a) {
          var b = this.a,
            c = (Sf(), xg);
          a = new Ij(a, c);
          c = new Kj();
          b.b = Cj(b, b.b, a, c);
          c.b || ++b.c;
          b.b.b = !1;
          return null == c.d;
        };
        _.K = function (a) {
          return !!Xh(this.a, a);
        };
        _.H = function () {
          return $h(new ci(this.a));
        };
        _.M = function () {
          return this.a.c;
        };
        v(105);
        function Uj() {
          Uj = l;
          Vj = new gj();
          R = new xj();
          Wj = new xj();
          Xj = new xj();
          Yj = new gj();
          Zj = RegExp("\u6b63\u5e8f|\u987a\u5e8f", "i");
          ak = RegExp("\u5012\u5e8f|\u53cd\u5e8f", "i");
        }
        function bk(a) {
          var b, c;
          b = "";
          if (Bg(a.charCodeAt(0))) {
            for (c = 0; c < a.length; c++) {
              if (Bg(a.charCodeAt(c))) {
                var d;
                d = a.charCodeAt(c);
                d = String.fromCharCode(d);
                b += d;
              } else {
                return b;
              }
            }
          } else {
            (b = a.indexOf("\u7b2c")),
              (c = a.indexOf("\u7ae0")),
              -1 == c && (c = a.indexOf("\u5377")),
              (b = a.substr(b + 1, c - (b + 1)));
          }
          return (b = $g(b, " ", ""));
        }
        function ck(a) {
          var b, c;
          c = jh(a.innerText);
          if ("" == c || null == c) {
            if (((c = $g(jh(a.textContent), " ", "")), "" == c || null == c)) {
              (b = a.getElementsByTagName("img")),
                1 == b.length && (c = jh(a.title));
            }
          }
          return c;
        }
        function dk(a) {
          var b;
          a = jh(a);
          for (b = 0; b < a.length; b++) {
            if (!Bg(a.charCodeAt(b))) {
              return !1;
            }
          }
          return !0;
        }
        function ek(a) {
          var b, c, d;
          d = c = 0;
          b = "";
          if (!a || !a.parentNode) {
            return T("node is null"), "";
          }
          for (a = a.parentNode; a; ) {
            ++c;
            if (5 > c) {
              if ("BODY" == a.nodeName) {
                break;
              }
              ++d;
              1 == c
                ? (b +=
                    '{"cn":"' +
                    a.className +
                    '","id":"' +
                    a.id +
                    '","nn":"' +
                    a.nodeName +
                    '"}')
                : (b +=
                    ',{"cn":"' +
                    a.className +
                    '","id":"' +
                    a.id +
                    '","nn":"' +
                    a.nodeName +
                    '"}');
            } else {
              if ("BODY" == a.nodeName) {
                break;
              }
              ++d;
            }
            a = a.parentNode;
          }
          0 < d && (b = '{"node_depth":"' + d + '","nodes":[' + b + "]}");
          return b;
        }
        var Zj, ak, Xj, Vj, R, Wj, Yj;
        function fk() {
          fk = l;
          gk = new Ki();
          hk = new Ki();
          gk.W(Cg(38646), Pg(0));
          gk.W(Cg(19968), Pg(1));
          gk.W(Cg(20108), Pg(2));
          gk.W(Cg(19977), Pg(3));
          gk.W(Cg(22235), Pg(4));
          gk.W(Cg(20116), Pg(5));
          gk.W(Cg(20845), Pg(6));
          gk.W(Cg(19971), Pg(7));
          gk.W(Cg(20843), Pg(8));
          gk.W(Cg(20061), Pg(9));
          hk.W(Cg(21313), Pg(1));
          hk.W(Cg(30334), Pg(2));
          hk.W(Cg(21315), Pg(3));
        }
        function ik(a) {
          var b, c;
          fk();
          var d, e, f;
          e = fg(jk, { 3: 1 }, 0, 8, 7);
          d = f = 7;
          b = a.length;
          c = fg(jk, { 3: 1 }, 0, b, 7);
          var g = 0,
            h;
          for (h = 0; h < b; ++h) {
            c[g++] = a.charCodeAt(h);
          }
          for (a = c.length - 1; 0 <= a; a--) {
            if (19975 == c[a]) {
              d = f = 3;
            } else {
              if (
                ((b = -1), gk.Q(Cg(c[a])) && (b = gk.S(Cg(c[a])).a), 0 != b)
              ) {
                if (-1 == b) {
                  d = -1;
                  hk.Q(Cg(c[a])) && (d = hk.S(Cg(c[a])).a);
                  if (-1 == d) {
                    return -1;
                  }
                  d = f - d;
                  6 == d && (e[6] = 1);
                } else {
                  e[d] = b & 65535;
                }
              }
            }
          }
          for (c = 0; c < e.length; c++) {
            e[c] = (e[c] + 48) & 65535;
          }
          c = e.length;
          f = "";
          for (d = 0; d < c; ) {
            (a = Math.min(d + 10000, c)),
              (f += String.fromCharCode.apply(null, e.slice(d, a))),
              (d = a);
          }
          return Jg(f);
        }
        var gk, hk;
        function kk() {
          kk = l;
          lk = RegExp(
            "\u76ee\u5f55|\u8fd4\u56de\u4e66\u7c4d\u9875|\u4e66\u9875|\u8fd4\u56de\u76ee\u5f55|\u7b2c(\\d+)/(\\d+)\u7ae0",
            "i",
          );
        }
        var lk;
        function mk(a) {
          var b;
          if (!(0 < a.a.b)) {
            var c;
            c = a.b;
            c = null == c.f ? "" : c.f;
            a: {
              var d;
              if (null != c && c.length) {
                try {
                  if ((d = $doc.documentElement.querySelector(c))) {
                    b = d.textContent;
                    break a;
                  }
                } catch (e) {
                  if (((e = Od(e)), !t(e, 11))) {
                    throw Pd(e);
                  }
                }
              }
              b = "";
            }
            !b.length || kj(a.a, b);
            b = nk();
            null != b && b.length && kj(a.a, b);
            b = ok(a.g);
            !b.length || kj(a.a, b);
            b = a.a;
            var f = $doc.title;
            c = $doc.documentElement;
            var g;
            d = g = "";
            s == s
              ? (g = d = f)
              : c &&
                ((f = c.getElementsByTagName("TITLE")),
                0 < f.length && (g = d = f[0].textContent));
            if (g.length) {
              pk();
              if (/ [\|\-] /i.test(g)) {
                (g = d.replace(RegExp("(.*)[\\|\\-] .*", "gi"), "$1")),
                  3 > qk.Jb(g) &&
                    (g = d.replace(
                      RegExp("[^\\|\\-]*[\\|\\-](.*)", "gi"),
                      "$1",
                    ));
              } else {
                if (-1 != g.indexOf(": ")) {
                  (g = d.replace(RegExp(".*:(.*)", "gi"), "$1")),
                    3 > qk.Jb(g) &&
                      (g = d.replace(RegExp("[^:]*[:](.*)", "gi"), "$1"));
                } else {
                  if (c && (150 < g.length || 5 > g.length)) {
                    g = c.getElementsByTagName("H1");
                    c = "";
                    for (f = 0; f < g.length && !c.length; f++) {
                      c = g[f].innerText;
                    }
                    g = c;
                    !g.length && (g = d);
                  }
                }
              }
              g = rk(g);
              4 >= qk.Jb(g) && (g = d);
              d = g;
            } else {
              d = "";
            }
            kj(b, d);
            s == s && kj(a.a, $doc.title);
          }
        }
        function sk(a, b, c, d) {
          var e, f, g, h;
          h = 0;
          var n, m, u, p, x;
          u = new tk();
          m = new uk();
          p = a.c.querySelectorAll(
            'meta[name\x3d"viewport"][content*\x3d"width\x3ddevice-width"]',
          );
          n = new vk(m, a.b);
          n.n = d;
          n.i = 0 < p.length;
          x = null;
          !c.length || (x = $doc.documentElement.querySelector(c));
          if (!x) {
            if (!E(wk($doc.URL), "baike.sogou.com")) {
              var D = a.c,
                Q,
                oa;
              Q = D.getElementsByTagName("ARTICLE");
              oa = xk(Q);
              1 == oa.b.length
                ? (x = (A(0, oa.b.length), oa.b[0]))
                : ((Q = D.querySelectorAll(
                    '[itemscope][itemtype*\x3d"Article"],[itemscope][itemtype*\x3d"Posting"]',
                  )),
                  (oa = xk(Q)),
                  (x = 0 < oa.b.length ? yk(oa) : null));
            }
            n.d = !!x;
            x ? 1 <= V && T("Extracted article element: " + x) : (x = a.c);
          }
          zk(new Ak(n), x);
          u.a = (Bk(m, m.d), m.b);
          mk(a);
          var W = 0 - h;
          if (void 0 == W) {
            throw new TypeError();
          }
          a.f[2] = W;
          h = 0;
          var y;
          y = Ck(u.a);
          var dc = a.a,
            r;
          Dk(y, !0, "Start");
          var gb = (Ek(), y),
            H,
            Mc,
            Xa,
            Na;
          H = !1;
          var G;
          G = wk($doc.URL);
          Mc =
            null == G
              ? !1
              : Ug(G, "mbd.baidu.com") ||
                "baijiahao.baidu.com" === G ||
                "iflow.uc.cn" === G ||
                "mparticle.uc.cn" === G;
          for (Na = new I(gb.a); Na.b < Na.d.M(); ) {
            Xa = (z(Na.b < Na.d.M()), Na.d._((Na.c = Na.b++)));
            var hb;
            if (!(hb = H && Mc)) {
              var Nc = Xa,
                U = void 0;
              14 < Nc.d
                ? (hb = !1)
                : ((U = rk(Nc.g)),
                  (hb =
                    8 <= U.length
                      ? Fk.test(U)
                      : 1 == Nc.c
                        ? "Comment" === U
                        : "Shares" === U || P(Gk, U)
                          ? !0
                          : !1));
            }
            hb && (O(Xa.b, "STRICTLY_NOT_CONTENT"), (H = !0));
          }
          var ed = new Hk(dc),
            Ga,
            ub,
            ib;
          if (ed.a) {
            for (ub = new I(y.a); ub.b < ub.d.M(); ) {
              (Ga = (z(ub.b < ub.d.M()), ub.d._((ub.c = ub.b++)))),
                (ib = Ga.g),
                (ib = Yg(ib)),
                (ib = Zg(ib, "'", "")),
                (ib = jh(ib).toLowerCase()),
                P(ed.a, ib) && O(Ga.b, "de.l3s.boilerpipe/TITLE"),
                (ib = jh(ib.replace(Ik, ""))),
                P(ed.a, ib) && O(Ga.b, "de.l3s.boilerpipe/TITLE");
            }
          }
          var S, Ya, Ha, Za, ga, da, Db;
          da = y.a;
          if (0 == da.b.length) {
            r = !1;
          } else {
            Ya = !1;
            for (Ha = 0; Ha < da.b.length; Ha++) {
              (ga = 0 == Ha ? null : (A(Ha - 1, da.b.length), da.b[Ha - 1])),
                (S = (A(Ha, da.b.length), da.b[Ha])),
                (Za =
                  Ha + 1 == da.b.length
                    ? null
                    : (A(Ha + 1, da.b.length), da.b[Ha + 1])),
                (Ya |=
                  (0.333333 >= S.c
                    ? !ga || 0.555556 >= ga.c
                      ? 16 >= S.d
                        ? !Za || 15 >= Za.d
                          ? !ga || 4 >= ga.d
                            ? (Db = !1)
                            : (Db = !0)
                          : (Db = !0)
                        : (Db = !0)
                      : 40 >= S.d
                        ? !Za || 17 >= Za.d
                          ? (Db = !1)
                          : (Db = !0)
                        : (Db = !0)
                    : (Db = !1),
                  Jk(S, Db)));
            }
            r = Ya;
          }
          Dk(y, r, "Classification Complete");
          var J = (Kk(), Lk),
            Aa,
            Oa,
            Pa,
            Qa,
            fd,
            qc,
            Eb;
          Aa = !1;
          Eb = new I(y.a);
          a: for (; Eb.b < Eb.d.M(); ) {
            if (((qc = (z(Eb.b < Eb.d.M()), Eb.d._((Eb.c = Eb.b++)))), qc.a)) {
              for (Pa = J.a, Qa = 0, fd = Pa.length; Qa < fd; ++Qa) {
                if (((Oa = Pa[Qa]), P(qc.b, Oa))) {
                  Jk(qc, !1);
                  Aa = !0;
                  continue a;
                }
              }
            }
          }
          r = Aa;
          Dk(y, r, "Ignore Strictly Not Content blocks");
          var Fb = Mk();
          Fb.e = 0;
          Fb.d = 10;
          r = Nk(Ok(Fb), y);
          Dk(y, r, "SimilarSiblingContentExpansion: Cross headings");
          var $a = Mk();
          $a.c = !0;
          $a.e = 0;
          $a.d = 10;
          r = Nk(Ok($a), y);
          Dk(y, r, "SimilarSiblingContentExpansion: Mixed tags");
          var Gb, va, Qb, ec, Ia, $;
          $ = y.a;
          if (2 > $.b.length) {
            r = !1;
          } else {
            Gb = !1;
            ec = new Mh($, 0);
            for (va = ec.Z(); ec.Y(); ) {
              if (
                ((Ia = va),
                (va = ec.Z()),
                Ia.b.a.Q("de.l3s.boilerpipe/HEADING") &&
                  !(
                    Ia.b.a.Q("STRICTLY_NOT_CONTENT") ||
                    va.b.a.Q("STRICTLY_NOT_CONTENT") ||
                    Ia.b.a.Q("de.l3s.boilerpipe/TITLE") ||
                    va.b.a.Q("de.l3s.boilerpipe/TITLE")
                  ))
              ) {
                if (va.a) {
                  Gb = !0;
                  Qb = Ia.a;
                  Pk(Ia, va);
                  va = Ia;
                  ec.bb();
                  var gd = Ia;
                  gd.b.a.Q("de.l3s.boilerpipe/HEADING") &&
                    gd.b.a.X("de.l3s.boilerpipe/HEADING");
                  Qb || O(Ia.b, "BOILERPLATE_HEADING_FUSED");
                } else {
                  Ia.a && ((Gb = !0), Jk(Ia, !1));
                }
              }
            }
            r = Gb;
          }
          Dk(y, r, "HeadingFusion");
          var Ra, rc, Rb, pa;
          Ra = !1;
          rc = ca;
          for (pa = new I(y.a); pa.b < pa.d.M(); ) {
            (Rb = (z(pa.b < pa.d.M()), pa.d._((pa.c = pa.b++)))),
              Rb.a
                ? (rc = Rb.f)
                : Rb.f > rc && P(Rb.b, "de.l3s.boilerpipe/LI")
                  ? (Jk(Rb, !0), (Ra = !0))
                  : (rc = ca);
          }
          r = Ra;
          Dk(y, r, "List in content filter");
          r = Qk((Rk(), Sk), y);
          Dk(y, r, "BlockProximityFusion: Distance 1");
          var X = (Tk(), Uk),
            sc,
            jb,
            vb,
            fc;
          fc = y.a;
          sc = !1;
          for (jb = new I(fc); jb.b < jb.d.M(); ) {
            (vb = (z(jb.b < jb.d.M()), jb.d._((jb.c = jb.b++)))),
              vb.a ||
                (null != X.a && vb.b.a.Q("de.l3s.boilerpipe/TITLE")) ||
                (Lh(jb), (sc = !0));
          }
          r = sc;
          Dk(y, r, "BlockFilter");
          r = Qk(Vk, y);
          Dk(y, r, "BlockProximityFusion: Same level content-only");
          var Sb = (Wk(), Xk),
            ea,
            K,
            ab,
            tc,
            kb,
            Ja,
            bb,
            ma,
            uc;
          uc = y.a;
          if (2 > uc.b.length) {
            r = !1;
          } else {
            tc = -1;
            K = null;
            ea = 0;
            ab = -1;
            for (ma = new I(uc); ma.b < ma.d.M(); ) {
              (Ja = (z(ma.b < ma.d.M()), ma.d._((ma.c = ma.b++)))),
                Ja.a &&
                  ((kb = Ja.d), kb > tc && ((K = Ja), (tc = kb), (ab = ea))),
                ++ea;
            }
            for (bb = new I(uc); bb.b < bb.d.M(); ) {
              (Ja = (z(bb.b < bb.d.M()), bb.d._((bb.c = bb.b++)))),
                Ja == K
                  ? (Jk(Ja, !0),
                    O(Ja.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
                  : (Jk(Ja, !1), O(Ja.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT"));
            }
            if (Sb.a && -1 != ab) {
              var Ed = ab,
                Tb,
                gc,
                vc,
                wb;
              wb = re(Yk(L(K.j, L(K.i, K.i.b.length - 1).a)));
              for (vc = new Mh(uc, Ed + 1); vc.Y(); ) {
                (Tb = vc.Z()),
                  (gc = re(Zk(L(Tb.j, L(Tb.i, 0).a)))),
                  re(wb) == re(gc) &&
                    (Jk(Tb, !0),
                    O(Tb.b, "SIBLING_OF_MAIN_CONTENT"),
                    (wb = re(Yk(L(Tb.j, L(Tb.i, Tb.i.b.length - 1).a)))));
              }
              var hd = ab,
                Sa,
                wc,
                id,
                Hb;
              id = re(Zk(L(K.j, L(K.i, 0).a)));
              for (Hb = new Mh(uc, hd); 0 < Hb.b; ) {
                (Sa = (z(0 < Hb.b), L(Hb.a, (Hb.c = --Hb.b)))),
                  (wc = re(Yk(L(Sa.j, L(Sa.i, Sa.i.b.length - 1).a)))),
                  re(id) == re(wc) &&
                    (Jk(Sa, !0),
                    O(Sa.b, "SIBLING_OF_MAIN_CONTENT"),
                    (id = re(Zk(L(Sa.j, L(Sa.i, 0).a)))));
              }
            }
            r = !0;
          }
          Dk(y, r, "Keep Largest Block");
          var Ta, hc, Fd, lb, xb, wa, aa;
          Fd = 0;
          hc = aa = -1;
          for (wa = new I(y.a); wa.b < wa.d.M(); ) {
            (lb = (z(wa.b < wa.d.M()), wa.d._((wa.c = wa.b++)))),
              -1 == hc &&
                P(lb.b, "de.l3s.boilerpipe/TITLE") &&
                ((aa = Fd), (hc = -1)),
              -1 == hc && lb.a && (hc = Fd),
              ++Fd;
          }
          if (hc <= aa || -1 == aa) {
            r = !1;
          } else {
            Ta = !1;
            for (xb = new I(new Oh(y.a, aa, hc)); xb.b < xb.d.M(); ) {
              (lb = (z(xb.b < xb.d.M()), xb.d._((xb.c = xb.b++)))),
                P(lb.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                  (Ta |= Jk(lb, !0));
            }
            r = Ta;
          }
          Dk(y, r, "Expand Title to Content");
          var jd, mb, ba, Ua, Ba;
          jd = !1;
          mb = -1;
          for (Ba = new I(y.a); Ba.b < Ba.d.M(); ) {
            if (
              ((ba = (z(Ba.b < Ba.d.M()), Ba.d._((Ba.c = Ba.b++)))),
              ba.a && P(ba.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
            ) {
              mb = ba.f;
              break;
            }
          }
          if (-1 == mb) {
            r = !1;
          } else {
            for (Ua = new I(y.a); Ua.b < Ua.d.M(); ) {
              (ba = (z(Ua.b < Ua.d.M()), Ua.d._((Ua.c = Ua.b++)))),
                !ba.a && 100 <= ba.d && ba.f == mb && (Jk(ba, !0), (jd = !0));
            }
            r = jd;
          }
          Dk(y, r, "Largest Block Same Tag Level -\x3e Content");
          var xc, xa, Va, yb;
          xc = !1;
          xa = ca;
          for (yb = new I(y.a); yb.b < yb.d.M(); ) {
            (Va = (z(yb.b < yb.d.M()), yb.d._((yb.c = yb.b++)))),
              Va.a && P(Va.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")
                ? (xa = Va.f)
                : Va.f > xa &&
                    P(Va.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                    P(Va.b, "de.l3s.boilerpipe/LI") &&
                    0 == Va.c
                  ? (Jk(Va, !0), (xc = !0))
                  : (xa = ca);
          }
          r = xc;
          Dk(y, r, "List at end filter");
          var Oc = a.e,
            ka,
            Ca,
            cb,
            db;
          Ca = 0;
          for (db = new I(y.a); db.b < db.d.M(); ) {
            (cb = (z(db.b < db.d.M()), db.d._((db.c = db.b++)))),
              cb.a && (Ca += cb.d);
          }
          ka = Ca;
          if (void 0 == ka) {
            throw new TypeError();
          }
          Oc[1] = ka;
          $k(y);
          var we = u.a,
            qa,
            Pc;
          Pc = new Ki();
          qa = we.a;
          var kd, nb, Ub, Ib, Wd, ic, Gd, Qc, ld, md, Xd;
          md = 0;
          Ib = "";
          for (Ub = Wd = 0; Ub < qa.b.length; ++Ub) {
            if (
              ((Xd = (A(Ub, qa.b.length), qa.b[Ub])), Xd.p && (kd = Xd.Nb()))
            ) {
              (Qc = kd.innerText),
                (ld = null == Qc ? 0 : Qc.length),
                0 >= ld ||
                  ((nb = al(kd)),
                  (md += ld),
                  (Gd = Pc.S(nb)),
                  !Gd && (Gd = Pg(0)),
                  (ic = Pg(Gd.a + ld)),
                  Pc.W(nb, ic),
                  ic.a > Wd && ((Wd = ic.a), (Ib = nb)),
                  3 <= V &&
                    T(
                      "FontSizeFilter 1, fontSize \x3d " +
                        nb +
                        ", textLength \x3d " +
                        ld +
                        ", fontSize textLength \x3d " +
                        ic +
                        ", totalTextLength \x3d " +
                        md +
                        ", text \x3d " +
                        Qc,
                    ));
            }
          }
          var zb = new bl(md, Ib),
            Yd,
            Hd,
            nd,
            Zd,
            Id,
            $d,
            yc,
            od,
            Vb,
            Rc;
          for ($d = Yd = 0; $d < qa.b.length; ++$d) {
            if (
              ((Rc = (A($d, qa.b.length), qa.b[$d])),
              Rc.p &&
                (Hd = Rc.Nb()) &&
                "BLOCKQUOTE" != Hd.tagName &&
                ((yc = Hd.innerText),
                (od = null == yc ? 0 : yc.length),
                !(0 >= od)))
            ) {
              nd = al(Hd);
              if ((Vb = Pc.S(nd))) {
                3 <= V &&
                  T(
                    "FontSizeFilter 2, fontSize \x3d " +
                      nd +
                      ", textLength \x3d " +
                      od +
                      ", fontSize textLength \x3d " +
                      Vb +
                      ", totalTextLength \x3d " +
                      zb.b +
                      ", ratio \x3d " +
                      Vb.a / zb.b +
                      ", text \x3d " +
                      yc,
                  ),
                  (Zd = Vb.a / zb.b),
                  Zd < Fa && cl(nd, zb.a) && (Rc.p = !1);
              }
              ++Yd;
              if (10 <= Yd) {
                break;
              }
            }
          }
          Yd = 0;
          for (Id = qa.b.length - 1; 0 <= Id; --Id) {
            if (
              ((Rc = (A(Id, qa.b.length), qa.b[Id])), Rc.p && (Hd = Rc.Nb()))
            ) {
              if (
                ((yc = Hd.innerText),
                (od = null == yc ? 0 : yc.length),
                !(0 >= od))
              ) {
                nd = al(Hd);
                if ((Vb = Pc.S(nd))) {
                  3 <= V &&
                    T(
                      "FontSizeFilter 3, fontSize \x3d " +
                        nd +
                        ", textLength \x3d " +
                        od +
                        ", fontSize textLength \x3d " +
                        Vb +
                        ", totalTextLength \x3d " +
                        zb.b +
                        ", ratio \x3d " +
                        Vb.a / zb.b +
                        ", text \x3d " +
                        yc,
                    ),
                    (Zd = Vb.a / zb.b),
                    Zd < Fa && cl(nd, zb.a) && (Rc.p = !1);
                }
                ++Yd;
                if (10 <= Yd) {
                  break;
                }
              }
            }
          }
          dl(u.a);
          var xe = u.a,
            ae,
            eb,
            ob,
            zc,
            Ab,
            hf,
            pd;
          ae = new N();
          pd = Ab = null;
          for (zc = new I(xe.a); zc.b < zc.d.M(); ) {
            (eb = (z(zc.b < zc.d.M()), zc.d._((zc.c = zc.b++)))),
              t(eb, 34) && eb.p && (!Ab && (Ab = eb), (pd = eb));
          }
          if (pd) {
            for (
              ob = new I(xe.a);
              ob.b < ob.d.M() &&
              !((eb = (z(ob.b < ob.d.M()), ob.d._((ob.c = ob.b++)))),
              ((hf = t(eb, 31)) && eb.p) || eb == pd);

            ) {
              hf && M(ae, eb);
            }
            var be, ye, Ac, Bb, ag, qd, Bc, Cc;
            if (0 != ae.b.length) {
              Ac = null;
              Ab && (Ac = L(Ab.a, Ab.c));
              ag =
                ((Cc = new N()),
                M(Cc, new el()),
                M(Cc, new fl()),
                M(Cc, new gl(Ac)),
                M(Cc, new hl()),
                Cc);
              be = null;
              ye = 0;
              for (Bc = new I(ae); Bc.b < Bc.d.M(); ) {
                qd = (z(Bc.b < Bc.d.M()), Bc.d._((Bc.c = Bc.b++)));
                var Sc = void 0,
                  jf = void 0,
                  rd = void 0,
                  Dc = void 0;
                if (qd) {
                  Dc = 0;
                  Sc = qd.d;
                  for (rd = new I(ag); rd.b < rd.d.M(); ) {
                    (jf = (z(rd.b < rd.d.M()), rd.d._((rd.c = rd.b++)))),
                      (Dc += jf.Pb(Sc));
                  }
                  2 > V ||
                    (Sc
                      ? T("FINAL SCORE: " + Dc + " : " + B(Sc, "src"))
                      : T("Null image attempting to be scored!"));
                  Bb = Dc;
                } else {
                  Bb = 0;
                }
                50 <= Bb && (!be || ye < Bb) && ((be = qd), (ye = Bb));
              }
              be && (be.p = !0);
            }
          }
          var kf = u.a,
            jc,
            Ec,
            Wb,
            Xb,
            ta,
            Tc,
            Uc,
            sd;
          Wb = !1;
          ta = -1;
          Xb = new Aj();
          for (Ec = new I(kf.a); Ec.b < Ec.d.M(); ) {
            (jc = (z(Ec.b < Ec.d.M()), Ec.d._((Ec.c = Ec.b++)))),
              t(jc, 57)
                ? ((sd = jc),
                  sd.b == (il(), jl)
                    ? ((sd.p = Wb), M(Xb.a, sd), (Wb = !1))
                    : ((Tc = zj(Xb)),
                      (Wb |= ta >= Xb.a.b.length) && (ta = Xb.a.b.length - 1),
                      (Uc = Tc.p),
                      (Tc.p = Wb),
                      (sd.p = Wb),
                      (Wb = Uc)))
                : Wb || (Wb = jc.p);
          }
          var Vc, Cb, Wc, ze, pb, mf;
          Wc = !1;
          for (Cb = new I(u.a.a); Cb.b < Cb.d.M(); ) {
            if (
              ((Vc = (z(Cb.b < Cb.d.M()), Cb.d._((Cb.c = Cb.b++)))), t(Vc, 74))
            ) {
              pb = ((mf = Vc.a), B(mf, "src"));
              a: {
                for (
                  var nf = Vc, Ae = void 0, ce = void 0, Jd = void 0, Jd = 0;
                  Jd < nf.a.childNodes.length;
                  Jd++
                ) {
                  if (
                    ((Ae = nf.a.childNodes[Jd]),
                    1 == Ae.nodeType &&
                      ((ce = Ae),
                      "SOURCE" === ce.tagName && null != B(ce, "src")))
                  ) {
                    ze = !0;
                    break a;
                  }
                }
                ze = !1;
              }
              ze || (null != pb && "" != pb && !E(pb.substr(0, 5), "blob:"))
                ? Wc || ((Wc = !0), (Vc.p = !0))
                : (Vc.p = !1);
            }
          }
          var of;
          a: {
            var Be, kc, Ce;
            for (kc = new I(u.a.a); kc.b < kc.d.M(); ) {
              Be = (z(kc.b < kc.d.M()), kc.d._((kc.c = kc.b++)));
              Ce = Be.p;
              var de;
              if ((de = Ce)) {
                var De = void 0,
                  ee = void 0;
                (De = Be.Nb())
                  ? ((ee = kl(De)["user-select-original"]),
                    T(
                      "WebElement isUserSelectNone: userSelectOriginal \x3d " +
                        ee,
                    ),
                    (de = "none" === ee))
                  : (de = !1);
              }
              if (de) {
                of = !1;
                break a;
              }
            }
            of = !0;
          }
          a.j = of;
          T(
            "ContentExtractor::extractContent, userSelectEnabled \x3d " +
              a.j +
              ", this \x3d " +
              a,
          );
          var pf = 0 - h;
          if (void 0 == pf) {
            throw new TypeError();
          }
          a.f[3] = pf;
          h = 0;
          f = ll(u.a, b);
          var Ee = 0 - h;
          if (void 0 == Ee) {
            throw new TypeError();
          }
          a.f[4] = Ee;
          var qf = u.a,
            Yb,
            lc,
            Kd,
            fe;
          Kd = new N();
          for (lc = new I(qf.a); lc.b < lc.d.M(); ) {
            if (((Yb = (z(lc.b < lc.d.M()), lc.d._((lc.c = lc.b++)))), Yb.p)) {
              if (t(Yb, 31)) {
                ii(
                  Kd,
                  (!Yb.b && ml(Yb),
                  (fe = new N()),
                  !Yb.e.length || M(fe, Yb.e),
                  ii(fe, nl(Yb.b)),
                  fe),
                );
              } else {
                if (t(Yb, 75)) {
                  var rf = Kd,
                    Ld = Yb,
                    ge = void 0,
                    Md = void 0,
                    Nd = void 0,
                    he = void 0;
                  !Ld.a && (Ld.a = ol(pl(Ld.b)));
                  Nd = new N();
                  he = Ld.a.querySelectorAll("IMG, SOURCE");
                  for (ge = 0; ge < he.length; ge++) {
                    (Md = he[ge]),
                      !Md.src.length || M(Nd, Md.src),
                      ii(Nd, nl(Md));
                  }
                  ii(rf, Nd);
                }
              }
            }
          }
          a.d = Kd;
          if (4 <= V) {
            for (g = 0; g < a.f[6].length; g++) {
              var Fe = a.f;
              if (g >= Fe[6].length) {
                throw new RangeError();
              }
              e = Fe[6][g];
              if (void 0 === e[1]) {
                throw new TypeError();
              }
              var ch = "Timing: " + e[1] + " \x3d ";
              if (void 0 === e[2]) {
                throw new TypeError();
              }
              T(ch + e[2]);
            }
            var cg = a.f;
            if (void 0 === cg[1]) {
              throw new TypeError();
            }
            var dh =
                "Timing: MarkupParsingTime \x3d " +
                cg[1] +
                "\nTiming: DocumentConstructionTime \x3d ",
              dg = a.f;
            if (void 0 === dg[2]) {
              throw new TypeError();
            }
            var sf = dh + dg[2] + "\nTiming: ArticleProcessingTime \x3d ",
              Ge = a.f;
            if (void 0 === Ge[3]) {
              throw new TypeError();
            }
            var eh = sf + Ge[3] + "\nTiming: FormattingTime \x3d ",
              eg = a.f;
            if (void 0 === eg[4]) {
              throw new TypeError();
            }
            T(eh + eg[4]);
          }
          return f;
        }
        function ql(a, b) {
          var c, d;
          this.c = a;
          this.a = new xj();
          this.f = ((c = {}), (c[6] = []), c);
          this.e = ((d = {}), d);
          this.g = new rl(a, this.f);
          this.f[1] = 0;
          this.i = "";
          this.b = b;
        }
        q(117, 1, {}, ql);
        _.j = !0;
        v(117);
        function tk() {}
        q(118, 1, {}, tk);
        v(118);
        function sl(a) {
          Lf();
          var b;
          Lf();
          if (null == a) {
            throw new me();
          }
          if (0 == a.length) {
            throw new Mg("empty argument");
          }
          try {
            var c;
            try {
              c = JSON.parse(a);
            } catch (d) {
              throw new Tf("Error parsing JSON: " + d);
            }
            var e = Mf[typeof c];
            b = e ? e(c) : Nf(typeof c);
          } catch (f) {
            f = Od(f);
            if (t(f, 38)) {
              throw ((a = f), new Uf(a));
            }
            throw Pd(f);
          }
          a = b;
          a.v() &&
            ((a = a.v()),
            (this.e = tl(a, "root")),
            (this.f = tl(a, "title")),
            (this.d = tl(a, "notContents")),
            (this.a = tl(a, "contents")),
            (this.g = tl(a, "unlikely")),
            (this.c = tl(a, "maybe")),
            (this.b = ul(a, "extractAllOnFailure", !0)),
            (this.i = ul(a, "wholePage", !1)));
        }
        q(86, 1, {}, sl);
        _.tS = function () {
          return (
            "[mRoot: " +
            this.e +
            ", mContents: " +
            this.a +
            ", mTitle: " +
            this.f +
            ", mNotContents: " +
            this.d +
            ", mUnlikelyCandidates: " +
            this.g +
            ", mMaybeCandidates: " +
            this.c +
            ", mWholePage: " +
            this.i +
            ", mExtractAllOnFailure: " +
            this.b +
            "]"
          );
        };
        _.b = !1;
        _.i = !1;
        v(86);
        function nk() {
          var a = $doc.documentElement,
            b,
            c,
            d;
          if (!a) {
            return "";
          }
          b = a.getElementsByTagName("META");
          if (0 == b.length) {
            return "";
          }
          a = "";
          for (c = 0; c < b.length; c++) {
            if (((d = b[c]), vl(d, "og:title"))) {
              a = rk(d.content);
              break;
            }
          }
          if (!a.length) {
            return a;
          }
          for (c = 0; c < b.length; c++) {
            if (((d = b[c]), vl(d, "og:site_name"))) {
              b = rk(d.content);
              !b.length || (a = a + "-" + b);
              break;
            }
          }
          return a;
        }
        function vl(a, b) {
          var c;
          if (!a) {
            return !1;
          }
          c = a.name;
          if (null != c && F(c, b)) {
            return !0;
          }
          c = B(a, "property");
          return null != c ? F(c, b) : !1;
        }
        function wl(a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            n,
            m,
            u,
            p,
            x,
            D,
            Q,
            oa,
            W,
            y,
            dc,
            r,
            gb,
            H,
            Mc,
            Xa,
            Na,
            G,
            hb,
            Nc,
            U,
            ed,
            Ga,
            ub = $doc.documentElement.textContent,
            ib,
            S;
          pk();
          qk =
            ((ib = RegExp("[\\u3040-\\uA4CF]", "g")),
            (S = RegExp("[\\uAC00-\\uD7AF]", "g")),
            ib.test(ub) ? new xl() : S.test(ub) ? new yl() : new zl());
          H = ((hb = {}), (hb[10] = []), hb);
          var Ya;
          if (void 0 != a[3]) {
            if (void 0 === a[3]) {
              throw new TypeError();
            }
            Ya = a[3];
          } else {
            Ya = $doc.URL;
          }
          y = Ya;
          T("siteType: " + b + " originalUrl host: " + wk(y));
          H[15] = "";
          if (
            "content_page" === b &&
            (E(wk(y), "m.baidu.com") || E(wk(y), "k.sogou.com"))
          ) {
            Al();
            var Ha,
              Za = $doc.body,
              ga,
              da,
              Db,
              J,
              Aa,
              Oa,
              Pa,
              Qa,
              fd,
              qc;
            Qa = null;
            da = new N();
            ga = Za.getElementsByTagName("A");
            for (J = 0; J < ga.length; J++) {
              if (
                ((Aa = ga[J]),
                (Oa = Aa.href),
                (Pa = Aa.innerText),
                !(10 < Pa.length) &&
                  Bl(Aa) &&
                  ((qc = (Aa.offsetWidth || 0) | 0),
                  (Db = (Aa.offsetHeight || 0) | 0),
                  0 != qc && 0 != Db))
              ) {
                fd = $g(Pa, " ", "");
                if (
                  E(jh(fd), "\u539f\u7f51\u7ad9") ||
                  E(jh(fd), "\u539f\u7f51\u9875")
                ) {
                  null != Oa && Oa.length && "javascript:" !== Aa.protocol
                    ? (Qa = Oa)
                    : (Qa = "action_id:" + Cl(Aa));
                  break;
                }
                if (Dl.test(Pa)) {
                  null != Oa && Oa.length && "javascript:" !== Aa.protocol
                    ? (da.b[da.b.length] = Oa)
                    : M(da, "action_id:" + Cl(Aa));
                  break;
                }
              }
            }
            Ha =
              null != Qa
                ? Qa
                : 0 != da.b.length
                  ? (A(0, da.b.length), da.b[0])
                  : "";
            dc = null == Ha ? "" : Ha;
            T("original_page_url: " + dc);
            if (dc.length) {
              if (void 0 == dc) {
                throw new TypeError();
              }
              H[15] = dc;
            }
          }
          if ("img_page" === b) {
            return El(H, Fl(y, 0)), T("img_page no need distiller content"), H;
          }
          h = new ql($doc.documentElement, Gl(a));
          f = "";
          if (void 0 != a[6]) {
            if (void 0 === a[6]) {
              throw new TypeError();
            }
            f = Hl(a[6]);
            if (f.length) {
              if (void 0 == f) {
                throw new TypeError();
              }
              H[1] = f;
            }
          }
          if (!f.length) {
            var Eb = (mk(h), di(h.a, 0));
            if (void 0 == Eb) {
              throw new TypeError();
            }
            H[1] = Eb;
          }
          var Fb;
          if (void 0 != a[2]) {
            if (void 0 === a[2]) {
              throw new TypeError();
            }
            Fb = a[2];
          } else {
            Fb = 0;
          }
          V = Fb;
          T("DomDistiller debug level: " + V);
          g = ((Nc = {}), Nc);
          Mc = void 0 != a[1] && Il(a);
          e = "";
          if (void 0 != a[5]) {
            if (void 0 === a[5]) {
              throw new TypeError();
            }
            e = a[5];
          }
          p = "";
          u = Gl(a);
          if (u.i) {
            (n = $doc.documentElement.querySelector("body")) &&
              (p = n.innerText),
              Jl(g, p);
          } else {
            if (((p = Kl(a, b, null)), p.length)) {
              Jl(g, p);
            } else {
              if (((p = sk(h, Mc, e, b)), u.b && 100 >= Ll(p).length)) {
                (n = $doc.documentElement.querySelectorAll("body")),
                  (p = Kl(a, b, n)),
                  Jl(g, p);
              } else {
                Jl(g, p);
                var $a = h.j;
                if (void 0 == $a) {
                  throw new TypeError();
                }
                H[17] = $a;
                var Gb = ((null == h.i || !h.i.length) && (h.i = "auto"), h.i);
                if (void 0 == Gb) {
                  throw new TypeError();
                }
                H[9] = Gb;
                for (G = new I(h.d); G.b < G.d.M(); ) {
                  Na = (z(G.b < G.d.M()), G.d._((G.c = G.b++)));
                  var va = Ml(H);
                  if (void 0 == Na) {
                    throw new TypeError();
                  }
                  va[1] = Na;
                }
              }
            }
          }
          if (p.length) {
            Jl(g, p);
          } else {
            if (((p = sk(h, Mc, e, b)), u.b && 100 >= Ll(p).length)) {
              (n = $doc.documentElement.querySelectorAll("body")),
                (p = Kl(a, b, n)),
                Jl(g, p);
            } else {
              Jl(g, p);
              var Qb = h.j;
              if (void 0 == Qb) {
                throw new TypeError();
              }
              H[17] = Qb;
              var ec = ((null == h.i || !h.i.length) && (h.i = "auto"), h.i);
              if (void 0 == ec) {
                throw new TypeError();
              }
              H[9] = ec;
              for (G = new I(h.d); G.b < G.d.M(); ) {
                Na = (z(G.b < G.d.M()), G.d._((G.c = G.b++)));
                var Ia = Ml(H);
                if (void 0 == Na) {
                  throw new TypeError();
                }
                Ia[1] = Na;
              }
            }
          }
          if (void 0 == g) {
            throw new TypeError();
          }
          H[2] = g;
          Xa = h.f;
          var $;
          if (void 0 != a[4]) {
            if (void 0 === a[4]) {
              throw new TypeError();
            }
            $ = a[4];
          } else {
            $ = "next";
          }
          if ("pagenum" === $) {
            Nl();
            U = new Ol(Xa);
            var gd;
            var Ra = $doc.documentElement,
              rc,
              Rb,
              pa,
              X,
              sc,
              jb,
              vb;
            vb = 0;
            U.b = y.replace(Pl, "");
            U.d = Ql(U.b);
            if (U.d) {
              Rb = Rl(Sl(Ra, y));
              rc = Ra.getElementsByTagName("A");
              for (pa = 0; pa < rc.length; ) {
                (sc = rc[pa]),
                  (jb = Tl(U, sc, Rb))
                    ? (Ul(U.a),
                      Vl(U, sc, !1, !0, null),
                      Wl(U.a, jb.a),
                      (U.c = 0),
                      Vl(U, sc, !1, !1, Rb),
                      (pa += 1 + U.c))
                    : ++pa;
              }
              var fc = U.a;
              0 != fc.a.b.length &&
                0 == L(fc.a, fc.a.b.length - 1).b.b.length &&
                fc.a.ab(fc.a.b.length - 1);
              Xl(vb, U.e, "PageParameterParser");
              vb = 0;
              var Sb = U.a,
                ea = U.b,
                K,
                ab,
                tc,
                kb,
                Ja,
                bb;
              if ((Ja = Ql(ea))) {
                Ja.d.username = "";
                Ja.d.password = "";
                ab = new Yl();
                for (kb = new I(Sb.a); kb.b < kb.d.M(); ) {
                  if (
                    ((tc = (z(kb.b < kb.d.M()), kb.d._((kb.c = kb.b++)))),
                    !(2 > tc.b.b.length))
                  ) {
                    for (
                      var ma = tc.b,
                        uc = 0 > tc.a,
                        Ed = Ja,
                        Tb = ab.a ? ab.a.d : "",
                        gc = void 0,
                        vc = void 0,
                        wb = void 0,
                        gc = 0,
                        wb = new I(ma);
                      wb.b < wb.d.M();

                    ) {
                      (vc = (z(wb.b < wb.d.M()), wb.d._((wb.c = wb.b++)))),
                        !vc.b.length || ++gc;
                    }
                    if (0 == gc) {
                      bb = null;
                    } else {
                      if (uc) {
                        for (
                          var hd = ma,
                            Sa = void 0,
                            wc = void 0,
                            id = void 0,
                            wc = 0,
                            Sa = hd.b.length - 1;
                          wc < Sa;
                          ++wc, --Sa
                        ) {
                          (id = (A(wc, hd.b.length), hd.b[wc])),
                            li(hd, wc, (A(Sa, hd.b.length), hd.b[Sa])),
                            li(hd, Sa, id);
                        }
                      }
                      2 == ma.b.length &&
                        1 == gc &&
                        1 == (A(0, ma.b.length), ma.b[0]).a &&
                        2 == (A(1, ma.b.length), ma.b[1]).a &&
                        (Vg((A(0, ma.b.length), ma.b[0]).b)
                          ? li(ma, 0, new Zl(1, Zb(Ed.d)))
                          : li(ma, 1, new Zl(2, Zb(Ed.d))),
                        ++gc);
                      var Hb;
                      if (2 <= gc) {
                        for (
                          var Ta = ma,
                            hc = Ed,
                            Fd = Tb,
                            lb = void 0,
                            xb = void 0,
                            wa = void 0,
                            aa = void 0,
                            jd = void 0,
                            mb = void 0,
                            ba = void 0,
                            Ua = void 0,
                            Ba = void 0,
                            xc = void 0,
                            xa = void 0,
                            Va = void 0,
                            yb = void 0,
                            Oc = void 0,
                            ka = void 0,
                            Ca = void 0,
                            cb = void 0,
                            db = void 0,
                            db = 0,
                            cb = new I(Ta);
                          cb.b < cb.d.M();

                        ) {
                          (Ca = (z(cb.b < cb.d.M()), cb.d._((cb.c = cb.b++)))),
                            Ca.a == db + 1 && ++db;
                        }
                        if (28 <= db && 31 >= db) {
                          Hb = null;
                        } else {
                          jd = "";
                          xc = new $l();
                          Va = fg(am, ia, 76, Ta.b.length, 0);
                          for (ba = 0; ba < Ta.b.length; ba++) {
                            if (
                              ((Ba = (A(ba, Ta.b.length), Ta.b[ba])),
                              Ba.b.length && ((ka = Ql(Ba.b)), (Va[ba] = ka)))
                            ) {
                              ka.d.username = "";
                              ka.d.password = "";
                              var we = ka,
                                qa = Ba.a,
                                Pc = ba,
                                kd = xc,
                                nb = void 0,
                                Ub = void 0,
                                Ib = void 0,
                                Wd = void 0,
                                ic = we,
                                Gd = void 0,
                                Qc = void 0,
                                ld = void 0,
                                md = void 0;
                              if (null == ic.b) {
                                if (((md = ic.d.search), md.length)) {
                                  for (
                                    Gd =
                                      (pk(),
                                      fh(
                                        md.substr(1, md.length - 1),
                                        "\\\x26",
                                      )),
                                      ic.b = qg([Gd.length, 2]),
                                      Qc = 0;
                                    Qc < Gd.length;
                                    Qc++
                                  ) {
                                    (ld = fh(Gd[Qc], "\x3d")),
                                      (ic.b[Qc][0] = ld[0]),
                                      (ic.b[Qc][1] =
                                        1 < ld.length ? ld[1] : "");
                                  }
                                } else {
                                  ic.b = qg([0, 2]);
                                }
                              }
                              Wd = ic.b;
                              if (0 != Wd.length) {
                                for (nb = 0; nb < Wd.length; nb++) {
                                  Ub = Wd[nb];
                                  try {
                                    Ib = new bm(we, 0 == nb, Ub[0], Ub[1]);
                                  } catch (Xd) {
                                    if (((Xd = Od(Xd)), t(Xd, 20))) {
                                      Ib = null;
                                    } else {
                                      throw Pd(Xd);
                                    }
                                  }
                                  Ib && cm(kd, Ib, new dm(qa, Ib.a, Pc));
                                }
                              }
                              1 == Ba.a && (jd = Ba.b);
                            }
                          }
                          if (0 == xc.a.M()) {
                            for (mb = 0; mb < Ta.b.length; mb++) {
                              if (
                                ((Ba = (A(mb, Ta.b.length), Ta.b[mb])), Va[mb])
                              ) {
                                var zb = Va[mb],
                                  Yd = Ba.a,
                                  Hd = mb,
                                  nd = xc,
                                  Zd = void 0,
                                  Id = void 0,
                                  $d = void 0,
                                  yc = void 0,
                                  od = void 0,
                                  Vb = void 0,
                                  Rc = void 0,
                                  yc =
                                    (null == zb.c && (zb.c = em(zb.d)), zb.c);
                                if (yc.length && fm(yc)) {
                                  for (
                                    Rc = Zb(zb.d),
                                      od = zb.d.origin.length,
                                      !gm && (gm = RegExp("(\\d+)", "gi")),
                                      gm.lastIndex = od;
                                    ;

                                  ) {
                                    Zd = gm.exec(Rc);
                                    if (!Zd) {
                                      break;
                                    }
                                    Id = gm.lastIndex;
                                    $d = Id - Zd[1].length;
                                    try {
                                      Vb = new hm(zb, od, $d, Id);
                                    } catch (xe) {
                                      if (((xe = Od(xe)), t(xe, 20))) {
                                        Vb = null;
                                      } else {
                                        throw Pd(xe);
                                      }
                                    }
                                    Vb && cm(nd, Vb, new dm(Yd, Vb.a, Hd));
                                  }
                                }
                              }
                            }
                          }
                          Oc = new Yl();
                          for (wa = xc.a.R().H(); wa.Y(); ) {
                            if (
                              ((xb = wa.Z()),
                              (yb = xb.cb()),
                              (Ua = xb.db()),
                              !(yb === Fd || 100 < Ua.a.b.length) &&
                                Ua.b.Ib(hc))
                            ) {
                              e: {
                                var ae = Ua.b,
                                  eb = Ua.a,
                                  ob = Ta,
                                  zc = jd,
                                  Ab = void 0,
                                  hf = void 0,
                                  pd = void 0,
                                  be = void 0,
                                  ye = void 0,
                                  Ac = void 0,
                                  Bb = void 0,
                                  ag = void 0,
                                  qd = void 0,
                                  Bc = void 0;
                                if (2 <= eb.b.length) {
                                  if (
                                    ((qd = im(eb, ob)),
                                    qd.a && qd.b && jm(ob, qd))
                                  ) {
                                    be = km(eb);
                                    Ab = new N();
                                    for (Ac = new I(eb); Ac.b < Ac.d.M(); ) {
                                      (ye =
                                        (z(Ac.b < Ac.d.M()),
                                        Ac.d._((Ac.c = Ac.b++)))),
                                        M(Ab, new Zl(ye.a, L(ob, ye.c).b));
                                    }
                                    xa = new lm(
                                      (mm(), nm),
                                      ae.tS(),
                                      Ab,
                                      be,
                                      qd.c,
                                    );
                                  } else {
                                    xa = null;
                                  }
                                } else {
                                  if (
                                    1 == eb.b.length &&
                                    zc.length &&
                                    ((Bb = (A(0, eb.b.length), eb.b[0])),
                                    (ag = 2 == Bb.a && 1 == Bb.c),
                                    (Bc =
                                      3 == Bb.a &&
                                      2 == Bb.c &&
                                      2 == (A(1, ob.b.length), ob.b[1]).a),
                                    1 == (A(0, ob.b.length), ob.b[0]).a &&
                                      (ag || Bc) &&
                                      ae.Hb(zc))
                                  ) {
                                    pd = Bb.b - Bb.a;
                                    0 == pd || 1 == pd
                                      ? (hf = 1)
                                      : ((hf = Bb.b), (pd = 0));
                                    Ab = new N();
                                    M(Ab, new Zl(1, zc));
                                    M(Ab, new Zl(Bb.a, L(ob, Bb.c).b));
                                    xa = new lm(
                                      (mm(), nm),
                                      ae.tS(),
                                      Ab,
                                      new om(hf, pd),
                                      Bc ? (A(1, Ab.b.length), Ab.b[1]).b : "",
                                    );
                                    break e;
                                  }
                                  xa = null;
                                }
                              }
                              if (xa) {
                                var lb =
                                    (!pm && (pm = /\/$/),
                                    hc.d.href.replace(pm, "")),
                                  Cc;
                                e: {
                                  var Sc = xa,
                                    jf = lb,
                                    rd = Ta,
                                    Dc = void 0,
                                    kf = void 0,
                                    jc = void 0;
                                  if (
                                    2 > Sc.a.b.length ||
                                    1 == L(Sc.a, 0).a ||
                                    jf.length >= L(Sc.a, 0).b.length
                                  ) {
                                    Cc = !1;
                                  } else {
                                    for (Dc = 0; Dc < Sc.a.b.length; Dc++) {
                                      if (
                                        L(Sc.a, Dc).a != Dc + 2 ||
                                        E(L(Sc.a, Dc).b, jf)
                                      ) {
                                        Cc = !1;
                                        break e;
                                      }
                                    }
                                    for (jc = new I(rd); jc.b < jc.d.M(); ) {
                                      if (
                                        ((kf =
                                          (z(jc.b < jc.d.M()),
                                          jc.d._((jc.c = jc.b++)))),
                                        1 == kf.a && kf.b.length && kf.b !== jf)
                                      ) {
                                        Cc = !1;
                                        break e;
                                      }
                                    }
                                    Cc = !0;
                                  }
                                }
                                Cc
                                  ? Ph(xa.a, 0, new Zl(1, lb))
                                  : Ua.b.Hb(lb) &&
                                    ((aa = L(xa.a, 0)),
                                    2 == aa.a &&
                                      aa.b !== lb &&
                                      lb.length < aa.b.length &&
                                      Ph(xa.a, 0, new Zl(1, lb)));
                                qm(Oc, new rm(xa));
                              }
                            }
                          }
                          Hb = Oc.a ? Oc : null;
                        }
                      } else {
                        Hb = null;
                      }
                      bb = Hb;
                    }
                    bb && qm(ab, bb);
                  }
                }
                if (ab.a) {
                  ab.b && 3 <= V && T("Detected multiple page patterns");
                  K = ab.a;
                  var Ec, Wb, Xb;
                  if (!K.c.length && 0 != K.a.b.length) {
                    for (Ec = !1, Xb = new I(K.a); Xb.b < Xb.d.M(); ) {
                      Wb = (z(Xb.b < Xb.d.M()), Xb.d._((Xb.c = Xb.b++)));
                      if (Ec) {
                        K.c = Wb.b;
                        break;
                      }
                      Wb.b === ea && (Ec = !0);
                    }
                  }
                  X = K;
                } else {
                  X = new sm();
                }
              } else {
                X = new sm();
              }
              Xl(vb, U.e, "PageParameterDetector");
              gd = X;
            } else {
              gd = new sm();
            }
            r = gd;
            Q = {};
            oa = r.c;
            !oa.length || tm(Q, oa);
            El(H, Q);
            3 <= V && T("paging by pagenum: " + um(r));
          } else {
            3 <= V && T("paging by next");
            gb = W = "";
            if (void 0 != a[7] && void 0 != a[8]) {
              if (void 0 === a[7]) {
                throw new TypeError();
              }
              W = vm(a[7]);
              if (void 0 === a[8]) {
                throw new TypeError();
              }
              gb = vm(a[8]);
              W.length &&
                gb.length &&
                ((Q = {}), tm(Q, W), wm(Q, gb), El(H, Q));
            }
            (W.length && gb.length) || El(H, Fl(y, 0));
          }
          Xl(0, Xa, "Pagination");
          var ta = h.g,
            Tc,
            Uc,
            sd,
            Vc,
            Cb,
            Wc,
            ze,
            pb,
            mf,
            nf,
            Ae;
          pb = ((mf = {}), (mf[9] = []), mf);
          var ce, Jd;
          Jd = !1;
          for (ce = 0; ce < ta.a.b.length && !Jd; ce++) {
            Jd = L(ta.a, ce).Fb();
          }
          if (!Jd) {
            var of = ok(ta);
            if (void 0 == of) {
              throw new TypeError();
            }
            pb[1] = of;
            var Be, kc, Ce;
            Ce = "";
            for (kc = 0; kc < ta.a.b.length && !Ce.length; kc++) {
              Ce = L(ta.a, kc).Db();
            }
            Be = Ce;
            if (void 0 == Be) {
              throw new TypeError();
            }
            pb[2] = Be;
            var de, De, ee;
            ee = "";
            for (De = 0; De < ta.a.b.length && !ee.length; De++) {
              ee = L(ta.a, De).Eb();
            }
            de = ee;
            if (void 0 == de) {
              throw new TypeError();
            }
            pb[3] = de;
            var pf, Ee, qf;
            Ee = "";
            for (qf = 0; qf < ta.a.b.length && !Ee.length; qf++) {
              Ee = L(ta.a, qf).zb();
            }
            pf = Ee;
            if (void 0 == pf) {
              throw new TypeError();
            }
            pb[4] = pf;
            var Yb, lc, Kd;
            Kd = "";
            for (lc = 0; lc < ta.a.b.length && !Kd.length; lc++) {
              Kd = L(ta.a, lc).Bb();
            }
            Yb = Kd;
            if (void 0 == Yb) {
              throw new TypeError();
            }
            pb[5] = Yb;
            var fe, rf, Ld;
            rf = "";
            for (Ld = 0; Ld < ta.a.b.length && !rf.length; Ld++) {
              rf = L(ta.a, Ld).yb();
            }
            fe = rf;
            if (void 0 == fe) {
              throw new TypeError();
            }
            pb[6] = fe;
            var ge, Md, Nd;
            Md = "";
            for (Nd = 0; Nd < ta.a.b.length && !Md.length; Nd++) {
              Md = L(ta.a, Nd).xb();
            }
            ge = Md;
            if (void 0 == ge) {
              throw new TypeError();
            }
            pb[7] = ge;
            var he, Fe;
            he = null;
            for (Fe = 0; Fe < ta.a.b.length && !he; Fe++) {
              he = L(ta.a, Fe).wb();
            }
            if ((Tc = he)) {
              Uc = ((nf = {}), (nf[5] = []), nf);
              var ch = Tc.d;
              if (void 0 == ch) {
                throw new TypeError();
              }
              Uc[1] = ch;
              var cg = Tc.c;
              if (void 0 == cg) {
                throw new TypeError();
              }
              Uc[2] = cg;
              var dh = Tc.b;
              if (void 0 == dh) {
                throw new TypeError();
              }
              Uc[3] = dh;
              var dg = Tc.e;
              if (void 0 == dg) {
                throw new TypeError();
              }
              Uc[4] = dg;
              for (Vc = 0; Vc < Tc.a.length; Vc++) {
                Uc[5].push(Tc.a[Vc]);
              }
              if (void 0 == Uc) {
                throw new TypeError();
              }
              pb[8] = Uc;
            }
            var sf, Ge;
            Ge = null;
            for (
              sf = 0;
              sf < ta.a.b.length && !((Ge = L(ta.a, sf).Ab()), 0 < Ge.length);
              sf++
            ) {}
            ze = Ge;
            for (sd = 0; sd < ze.length; sd++) {
              Cb = ze[sd];
              Wc = ((Ae = {}), pb[9].push(Ae), Ae);
              var eh = Cb.e;
              if (void 0 == eh) {
                throw new TypeError();
              }
              Wc[1] = eh;
              var eg = Cb.c;
              if (void 0 == eg) {
                throw new TypeError();
              }
              Wc[2] = eg;
              var ro = Cb.d;
              if (void 0 == ro) {
                throw new TypeError();
              }
              Wc[3] = ro;
              var so = Cb.a;
              if (void 0 == so) {
                throw new TypeError();
              }
              Wc[4] = so;
              var to = Cb.f;
              if (void 0 == to) {
                throw new TypeError();
              }
              Wc[5] = to;
              var uo = Cb.b;
              if (void 0 == uo) {
                throw new TypeError();
              }
              Wc[6] = uo;
            }
          }
          if (void 0 == pb) {
            throw new TypeError();
          }
          H[5] = pb;
          Xa[5] = 0;
          if (void 0 == Xa) {
            throw new TypeError();
          }
          H[6] = Xa;
          var vo = h.e;
          if (void 0 == vo) {
            throw new TypeError();
          }
          H[8] = vo;
          m = ((ed = {}), ed);
          var wo = ((Ga = xm), (xm = ""), Ga);
          if (void 0 == wo) {
            throw new TypeError();
          }
          m[1] = wo;
          if (void 0 == m) {
            throw new TypeError();
          }
          H[7] = m;
          if (void 0 == y) {
            throw new TypeError();
          }
          H[11] = y;
          d = "";
          if (void 0 != a[9]) {
            if (void 0 === a[9]) {
              throw new TypeError();
            }
            d = vm(a[9]);
            if (d.length) {
              if (void 0 == d) {
                throw new TypeError();
              }
              H[12] = d;
            }
          }
          if (!d.length) {
            var oj;
            kk();
            var pj,
              Sq = $doc.documentElement,
              qj,
              Je,
              gg,
              xo,
              nh,
              Xc,
              Ke,
              Le,
              rj,
              yo;
            gg = null;
            Je = new N();
            qj = Sq.getElementsByTagName("A");
            for (nh = 0; nh < qj.length; nh++) {
              if (
                ((Xc = qj[nh]),
                (Ke = Xc.href),
                (Le = Xc.innerText),
                !(10 < Le.length) &&
                  Bl(Xc) &&
                  ((yo = (Xc.offsetWidth || 0) | 0),
                  (xo = (Xc.offsetHeight || 0) | 0),
                  0 != yo && 0 != xo))
              ) {
                rj = $g(Le, " ", "");
                if (
                  E(jh(rj), "\u76ee\u5f55") ||
                  E(jh(rj), "\u8fd4\u56de\u4e66\u9875")
                ) {
                  null != Ke && Ke.length && "javascript:" !== Xc.protocol
                    ? (gg = Ke)
                    : (gg = "action_id:" + Cl(Xc));
                  break;
                }
                (null != Le && "" != Le) || (Le = $g(Xc.textContent, " ", ""));
                lk.test(Le) &&
                  (null != Ke && Ke.length && "javascript:" !== Xc.protocol
                    ? (Je.b[Je.b.length] = Ke)
                    : M(Je, "action_id:" + Cl(Xc)));
              }
            }
            pj =
              null != gg
                ? gg
                : 0 != Je.b.length
                  ? (A(0, Je.b.length), Je.b[0])
                  : "";
            oj = null == pj ? "" : pj;
            if (void 0 == oj) {
              throw new TypeError();
            }
            H[12] = oj;
          }
          if (void 0 == b) {
            throw new TypeError();
          }
          H[13] = b;
          if (null != jh(c) && "" != jh(c) && "null" != jh(c)) {
            if (void 0 == c) {
              throw new TypeError();
            }
            H[14] = c;
          } else {
            H[14] = "";
          }
          D = "";
          "news" === b &&
            E(wk(y), "m.baidu.com") &&
            (x = $doc.documentElement.querySelector(
              "#__SF___idetail \x3e div.sf-frame \x3e ul \x3e li \x3e iframe",
            )) &&
            (D = x.src);
          if (void 0 == D) {
            throw new TypeError();
          }
          H[16] = D;
          return H;
        }
        function Kl(a, b, c) {
          var d, e, f, g, h, n, m;
          3 <= V &&
            T("extractContentPartly: contents size \x3d " + (c ? c.length : 0));
          e = Gl(a);
          3 <= V && T("extractContentPartly distillRule: " + e);
          if (!c || 0 == c.length) {
            if (!(null == e.a ? "" : e.a).length) {
              return "";
            }
            d = null == e.a ? "" : e.a;
            c = $doc.documentElement.querySelectorAll(d);
            3 <= V &&
              T(
                "extractContentPartly: contentSelector \x3d " +
                  d +
                  ", elements length \x3d " +
                  c.length,
              );
          }
          if (0 == c.length) {
            return "";
          }
          d = void 0 != a[1] && Il(a);
          g = "";
          for (a = 0; a < c.length; ++a) {
            f = new ym(c[a], e);
            f =
              ((h = new zm()),
              (n = new uk()),
              (m = new vk(n, f.a)),
              (m.n = b),
              zk(new Ak(m), f.b),
              (h.a = (Bk(n, n.d), n.b)),
              h);
            for (
              var u = void 0,
                u = Ck(f.a),
                p = void 0,
                x = void 0,
                x = new I(u.a);
              x.b < x.d.M();

            ) {
              (p = (z(x.b < x.d.M()), x.d._((x.c = x.b++)))), p.a || Jk(p, !0);
            }
            $k(u);
            f = (dl(f.a), ll(f.a, d));
            3 <= V && T("extractContentPartly: html \x3d " + f);
            g += f;
            d && f.length && (g += "\n");
          }
          return g;
        }
        function Gl(a) {
          if (void 0 != a[10]) {
            if (void 0 === a[10]) {
              throw new TypeError();
            }
            a = a[10];
          } else {
            a = "";
          }
          return a.length ? new sl(a) : new sl("{}");
        }
        function vm(a) {
          var b;
          if (!a.length) {
            return "";
          }
          try {
            if (
              (b = $doc.documentElement.querySelector(a)) &&
              b &&
              F("a", b.tagName)
            ) {
              return b.href;
            }
          } catch (c) {
            if (((c = Od(c)), !t(c, 11))) {
              throw Pd(c);
            }
          }
          return "";
        }
        function Hl(a) {
          var b;
          if (!a.length) {
            return "";
          }
          try {
            if ((b = $doc.documentElement.querySelector(a))) {
              return b.textContent;
            }
          } catch (c) {
            if (((c = Od(c)), !t(c, 11))) {
              throw Pd(c);
            }
          }
          return "";
        }
        q(226, 1, {}, function () {});
        v(226);
        function ol(a) {
          var b;
          if (0 == a.b.length) {
            return null;
          }
          b = new Am(a);
          var c = (A(0, a.b.length), a.b[0]),
            d;
          for (
            d = c.parentNode;
            d && 9 != d.nodeType;
            c = d, d = d.parentNode
          ) {}
          zk(new Ak(b), c);
          b = b.c;
          for (
            a = (A(0, a.b.length), a.b[0]);
            1 == b.a.b && b.b != a && 3 != di(b.a, 0).b.nodeType;

          ) {
            b = di(b.a, 0);
          }
          a = Bm(b);
          if (1 != a.nodeType) {
            return null;
          }
          Cm(a, "ID", C(w(s, 1), k, 2, 4, ["*"]));
          Dm(a);
          Cm(a, "TARGET", C(w(s, 1), k, 2, 4, ["A"]));
          Cm(a, "COLOR", C(w(s, 1), k, 2, 4, ["FONT"]));
          Cm(a, "BGCOLOR", C(w(s, 1), k, 2, 4, ["TABLE", "TR", "TD", "TH"]));
          Cm(a, "STYLE", C(w(s, 1), k, 2, 4, ["*"]));
          1 == a.nodeType && "IMG" === a.tagName && Em(a);
          c = a.querySelectorAll("IMG");
          for (b = 0; b < c.length; b++) {
            Em(c[b]);
          }
          return a;
        }
        function nl(a) {
          var b, c;
          c = new N();
          a.hasAttribute("srcset") && ii(c, Fm(a));
          a = a.querySelectorAll("[SRCSET]");
          for (b = 0; b < a.length; b++) {
            ii(c, Fm(a[b]));
          }
          return c;
        }
        function Gm(a) {
          return a
            ? ((a.offsetHeight || 0) | 0) * ((a.offsetWidth || 0) | 0)
            : 0;
        }
        function kl(a) {
          return getComputedStyle(a, null);
        }
        function Hm(a, b) {
          var c;
          c = a.getElementsByTagName(b);
          return 0 < c.length ? c[0] : null;
        }
        function al(a) {
          return a ? kl(a)["font-size"] : "null";
        }
        function wk(a) {
          a = (pk(), fh(a, ":\\/\\/"))[1];
          return -1 == a.indexOf("/") ? a : fh(a, "\\/")[0];
        }
        function Im(a, b) {
          var c;
          for (c = a; c && !c.contains(b); ) {
            c = c.parentNode;
          }
          return c;
        }
        function yk(a) {
          var b, c;
          if (0 == a.M()) {
            return null;
          }
          c = a._(0);
          for (b = 1; b < a.M(); b++) {
            c = Im(c, a._(b));
          }
          return c;
        }
        function pl(a) {
          var b;
          b = new N();
          zk(new Ak(new Jm(b)), a);
          return b;
        }
        function Km(a) {
          var b;
          for (b = new N(); a; ) {
            (b.b[b.b.length] = a), (a = a.parentNode);
          }
          return b;
        }
        function Fm(a) {
          var b, c, d;
          c = new N();
          a = B(a, "srcset");
          if (!a.length) {
            return c;
          }
          d = Lm(a);
          for (a = 0; a < d.length; a++) {
            (b = rk(d[a])), b.length && ((b = fh(b, " ")), M(c, b[0]));
          }
          return c;
        }
        function Mm(a) {
          var b;
          $doc.body.appendChild(a);
          b = a.innerText;
          $doc.body.removeChild(a);
          return b;
        }
        function xk(a) {
          var b, c, d;
          d = new N();
          for (c = 0; c < a.length; c++) {
            (b = a[c]),
              Bl(b) &&
                (b.offsetParent ||
                  0 != ((b.offsetHeight || 0) | 0) ||
                  0 != ((b.offsetWidth || 0) | 0)) &&
                0 < Gm(b) &&
                (d.b[d.b.length] = b);
          }
          return d;
        }
        function Nm(a, b) {
          var c, d;
          b = b.toUpperCase();
          for (c = 0; ; ) {
            if (3 < c) {
              return !1;
            }
            d = a.parentNode;
            if (!d) {
              return !1;
            }
            if (b === d.tagName) {
              return (
                3 <= V &&
                  T(
                    "hasAncestorTag: depth \x3d " +
                      c +
                      ", tagName \x3d " +
                      b +
                      ", parentTagName \x3d " +
                      d.tagName,
                  ),
                !0
              );
            }
            a = d;
            ++c;
          }
        }
        function Om(a, b) {
          var c;
          if (null == a) {
            return !1;
          }
          c = $doc.createElement("a");
          c.href = a;
          return Ug("." + qe(c, "host"), "." + b);
        }
        function Bl(a) {
          var b;
          b = kl(a);
          a = parseFloat(b.opacity);
          return !("none" === b.display || "hidden" === b.visibility || 0 == a);
        }
        function Dm(a) {
          var b, c, d;
          "A" === a.tagName && ((d = a), d.href.length && (d.href = d.href));
          b = a.getElementsByTagName("A");
          for (c = 0; c < b.length; c++) {
            (d = b[c]), d.href.length && (d.href = d.href);
          }
          "VIDEO" === a.tagName &&
            ((c = a), c.poster.length && (c.poster = c.poster));
          d = a.getElementsByTagName("VIDEO");
          for (b = 0; b < d.length; b++) {
            (c = d[b]), c.poster.length && (c.poster = c.poster);
          }
          Pm(a);
          Qm(a);
        }
        function Pm(a) {
          ("IMG" == a.tagName ||
            "SOURCE" == a.tagName ||
            "TRACK" == a.tagName ||
            "VIDEO" == a.tagName) &&
            a.src &&
            (a.src = a.src);
          a = a.querySelectorAll("img,source,track,video");
          for (var b in a) {
            a[b].src && (a[b].src = a[b].src);
          }
        }
        function Qm(a) {
          var b;
          a.hasAttribute("srcset") && Rm(a);
          a = a.querySelectorAll("[SRCSET]");
          for (b = 0; b < a.length; b++) {
            Rm(a[b]);
          }
        }
        function Rm(a) {
          var b, c, d, e;
          d = B(a, "srcset");
          if (d.length) {
            c = $doc.createElement("img");
            e = Lm(d);
            for (d = 0; d < e.length; d++) {
              (b = rk(e[d])),
                b.length &&
                  ((b = fh(b, " ")),
                  (c.src = b[0]),
                  (b[0] = c.src),
                  (e[d] = Sm(b, " ")));
            }
            c = Sm(e, ", ");
            a.setAttribute("srcset", c);
          } else {
            a.removeAttribute("srcset");
          }
        }
        function Cl(a) {
          if ("" !== a.id) {
            return '//*[@id\x3d"' + a.id + '"]';
          }
          if (a == document.body) {
            return "/html/" + a.tagName.toLowerCase();
          }
          for (
            var b = 1, c = a.parentNode.childNodes, d = 0, e = c.length;
            d < e;
            d++
          ) {
            var f = c[d];
            if (f == a) {
              return (
                arguments.callee(a.parentNode) +
                "/" +
                a.tagName.toLowerCase() +
                "[" +
                b +
                "]"
              );
            }
            1 == f.nodeType && f.tagName == a.tagName && b++;
          }
        }
        function Tm(a) {
          var b, c, d, e;
          if (null == a || !a.length) {
            return new Ki();
          }
          e = new Ki();
          a = fh(a, "\x26");
          for (c = 0; c < a.length; c++) {}
          c = 0;
          for (d = a.length; c < d; ++c) {
            (b = a[c]),
              (b = fh(b, "\x3d")),
              1 < b.length && e.W(b[0], (Hf(b[1]), decodeURI(b[1])));
          }
          return e;
        }
        function Cm(a, b, c) {
          var d, e, f;
          e = 0;
          for (f = c.length; e < f; ++e) {
            (d = c[e]), (a.tagName !== d && "*" !== d) || a.removeAttribute(b);
          }
          d = 0;
          for (e = c.length; d < e; ++d) {}
          c = Sm(c, ", ");
          c = a.querySelectorAll(c);
          for (a = 0; a < c.length; a++) {
            c[a].removeAttribute(b);
          }
        }
        function Em(a) {
          var b, c, d;
          b = a.attributes;
          for (c = 0; c < b.length; ) {
            (d = b[c].nodeName),
              "src" === d ||
              "alt" === d ||
              "srcset" === d ||
              "dir" === d ||
              "width" === d ||
              "height" === d ||
              "title" === d
                ? ++c
                : a.removeAttribute(d);
          }
        }
        function Um(a) {
          var b;
          b = $doc.createElement("a");
          b.href = a;
          return b.href;
        }
        function Jm(a) {
          this.a = a;
        }
        q(120, 1, {}, Jm);
        _.ub = function () {};
        _.vb = function (a) {
          switch (a.nodeType) {
            case 3:
              return M(this.a, a), !1;
            case 1:
              if (!Bl(a)) {
                return !1;
              }
              M(this.a, a);
              return !0;
            default:
              return !1;
          }
        };
        v(120);
        function zk(a, b) {
          var c, d;
          if (a.a.vb(b)) {
            if ((d = b.firstChild)) {
              for (; d != b; ) {
                c = !1;
                if (a.a.vb(d)) {
                  if ((c = d.firstChild)) {
                    d = c;
                    continue;
                  }
                  c = !0;
                }
                for (; d != b; ) {
                  c && a.a.ub(d);
                  if ((c = d.nextSibling)) {
                    d = c;
                    break;
                  }
                  d = d.parentNode;
                  c = !0;
                }
              }
            }
            a.a.ub(b);
          }
        }
        function Ak(a) {
          this.a = a;
        }
        q(56, 1, {}, Ak);
        v(56);
        function Vm(a) {
          var b;
          a.b = "";
          (b = a.j.querySelector(".byline-name")) && (a.b = b.textContent);
        }
        function Wm(a) {
          this.j = a;
        }
        q(159, 1, {}, Wm);
        _.wb = function () {
          var a, b;
          a = new Xm();
          if (null == this.d) {
            var c;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.d = "";
            if ((b = this.j.querySelector(".dateline"))) {
              this.d = b.textContent;
            } else {
              for (b = 0; b < this.a.length; b++) {
                if (((c = this.a[b]), F(c.name, "displaydate"))) {
                  this.d = c.content;
                  break;
                }
              }
            }
          }
          a.d = this.d;
          b = (null == this.b && Vm(this), this.b);
          a.a = b.length ? C(w(s, 1), k, 2, 4, [b]) : fg(s, k, 2, 0, 4);
          return a;
        };
        _.xb = function () {
          return null == this.b && Vm(this), this.b;
        };
        _.yb = function () {
          if (null == this.c) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.c = "";
            for (a = 0; a < this.a.length; a++) {
              if (((b = this.a[a]), F(b.name, "copyright"))) {
                this.c = b.content;
                break;
              }
            }
          }
          return this.c;
        };
        _.zb = function () {
          return "";
        };
        _.Ab = function () {
          if (!this.f) {
            var a, b, c, d, e;
            this.f = new N();
            a = this.j.getElementsByTagName("IMG");
            for (c = 0; c < a.length; c++) {
              e = a[c];
              var f = (d = b = void 0),
                g = void 0;
              b = void 0;
              b = re(e);
              if (F("FIGURE", b.tagName)) {
                if (
                  ((d = b.getElementsByTagName("FIGCAPTION")),
                  (g = d.length),
                  (b = ""),
                  0 < g && 2 >= g)
                ) {
                  for (f = 0; f < g && !b.length; f++) {
                    b = d[f].innerText;
                  }
                }
              } else {
                b = "";
              }
              (d = null != b && b.length) ||
                ((d = d = void 0),
                (d = e.width),
                400 > d
                  ? (d = !1)
                  : ((d /= e.height), (d = 1.3 <= d && 3 >= d)));
              d &&
                ((d = new Ym()),
                (d.e = e.src),
                (d.a = b),
                (d.f = e.width),
                (d.b = e.height),
                M(this.f, d));
            }
          }
          return mi(this.f, fg(Zm, ia, 27, this.f.b.length, 0));
        };
        _.Bb = function () {
          if (null == this.i) {
            var a, b, c;
            this.i = "";
            a = this.j.getElementsByTagName("*");
            for (c = 0; c < a.length && !this.i.length; c++) {
              (b = a[c]),
                (this.i = B(b, "publisher")),
                !this.i.length && (this.i = B(b, "source_organization"));
            }
          }
          return this.i;
        };
        _.Cb = function () {
          if (null == this.k) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.k = "";
            if (
              0 != this.a.length &&
              ((a = this.j.getElementsByTagName("TITLE")), 0 != a.length)
            ) {
              for (a = 0; a < this.a.length; a++) {
                if (((b = this.a[a]), F(b.name, "title"))) {
                  this.k = b.content;
                  break;
                }
              }
            }
          }
          return this.k;
        };
        _.Db = function () {
          return "";
        };
        _.Eb = function () {
          return "";
        };
        _.Fb = function () {
          if (!this.e) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.e = !0;
            for (a = 0; a < this.a.length; a++) {
              if (((b = this.a[a]), F(b.name, "IE_RM_OFF"))) {
                this.g = F(b.content, "true");
                break;
              }
            }
          }
          return this.g;
        };
        _.a = null;
        _.b = null;
        _.c = null;
        _.d = null;
        _.e = !1;
        _.f = null;
        _.g = !1;
        _.i = null;
        _.j = null;
        _.k = null;
        v(159);
        function ul(a, b, c) {
          return a && b in a.a ? ((a = $f(a, b)) && a.u() ? a.u().a : c) : c;
        }
        function tl(a, b) {
          var c;
          if (!(a && b in a.a)) {
            return "";
          }
          c = $f(a, b);
          if (!c || !c.w()) {
            return "";
          }
          c = c.w().a;
          return null == c || "undefined" === c ? "" : c;
        }
        function $m(a) {
          return parseInt(a, 10) | 0;
        }
        function Xl(a, b, c) {
          var d;
          if (b) {
            b = ((d = {}), b[6].push(d), d);
            if (void 0 == c) {
              throw new TypeError();
            }
            b[1] = c;
            a = 0 - a;
            if (void 0 == a) {
              throw new TypeError();
            }
            b[2] = a;
          }
        }
        function T(a) {
          null == a && (a = "");
          (-1 == a.indexOf("[0;") && -1 == a.indexOf("[1;")) ||
            (a += "\u001b[0m");
          an ||
            null == $wnd.console ||
            ("function" != typeof $wnd.console.log &&
              "object" != typeof $wnd.console.log) ||
            $wnd.console.log(a);
          xm += a + "\n";
        }
        var V = 0,
          xm = "",
          an = !1;
        function ok(a) {
          var b, c;
          c = "";
          for (b = 0; b < a.a.b.length && !c.length; b++) {
            c = L(a.a, b).Cb();
          }
          return c;
        }
        function rl(a, b) {
          var c;
          this.b = b;
          this.a = new N();
          c = 0;
          M(this.a, new bn(a, this.b));
          Xl(c, this.b, "OpenGraphProtocolParser");
          c = 0;
          M(this.a, new cn(a, this.b));
          Xl(c, this.b, "SchemaOrgParserAccessor");
          c = 0;
          M(this.a, new Wm(a));
          Xl(c, this.b, "IEReadingViewParser");
        }
        q(125, 1, {}, rl);
        v(125);
        function Xm() {}
        q(67, 1, {}, Xm);
        _.a = null;
        _.b = "";
        _.c = "";
        _.d = "";
        _.e = "";
        v(67);
        function Ym() {}
        q(27, 1, { 27: 1 }, Ym);
        _.a = "";
        _.b = 0;
        _.c = "";
        _.d = "";
        _.e = "";
        _.f = 0;
        var Zm = v(27);
        function Ul(a) {
          if (0 == a.a.b.length || 0 != L(a.a, a.a.b.length - 1).b.b.length) {
            M(a.a, new dn()), (a.b = null);
          }
        }
        function Wl(a, b) {
          var c, d, e;
          d = L(a.a, a.a.b.length - 1);
          0 == d.b.b.length
            ? (M(d.b, b), (a.b = b))
            : ((c = b.a - a.b.a),
              (c = 0 == c ? 0 : 0 > c ? -1 : 1),
              c != d.a
                ? 0 != d.a &&
                  ((d = ((e = new dn()), M(a.a, e), e)), 0 != c && M(d.b, a.b))
                : 0 == c && (d.b.b = fg(Jc, ia, 1, 0, 3)),
              M(d.b, b),
              (a.b = b),
              (d.a = c));
        }
        function en() {
          this.a = new N();
        }
        q(161, 1, {}, en);
        _.b = null;
        v(161);
        function dn() {
          this.b = new N();
        }
        q(95, 1, {}, dn);
        _.a = 0;
        v(95);
        function Am(a) {
          this.b = new fn(a);
          this.a = new N();
          this.d = new N();
        }
        q(201, 1, {}, Am);
        _.ub = function () {
          this.a.ab(this.a.b.length - 1);
          this.d.ab(this.d.b.length - 1);
        };
        _.vb = function (a) {
          if (!this.b.a) {
            return !1;
          }
          M(this.a, a);
          M(this.d, null);
          1 == this.d.b.length && ((this.c = new gn(a)), li(this.d, 0, this.c));
          if (hn(this.b, a)) {
            for (a = 0; a < this.a.b.length; a++) {
              if (null == L(this.d, a)) {
                li(this.d, a, new gn(L(this.a, a)));
                var b = L(this.d, a - 1),
                  c = L(this.d, a);
                kj(b.a, c);
              }
            }
          }
          return !0;
        };
        v(201);
        function jn(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          for (a = ei(a.a, 0); a.b != a.d.c; ) {
            (b = (z(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = jn(b)),
              c.appendChild(b);
          }
          return c;
        }
        function Bm(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          1 == a.b.nodeType &&
            ((b = kl(a.b).direction),
            !b.length && (b = "auto"),
            c.setAttribute("dir", b));
          for (a = ei(a.a, 0); a.b != a.d.c; ) {
            (b = (z(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = Bm(b)),
              c.appendChild(b);
          }
          return c;
        }
        function gn(a) {
          this.b = a;
          this.a = new xj();
        }
        q(83, 1, {}, gn);
        v(83);
        function kn() {
          kn = l;
          ln = RegExp(
            "((\\w+):\\s+(http:\\/\\/ogp.me\\/ns(\\/\\w+)*#))\\s*",
            "gi",
          );
          mn = /^xmlns:(\w+)/i;
          nn = /^http:\/\/ogp.me\/ns(\/\w+)*#/i;
        }
        function on(a, b) {
          return a.f.Q(b) ? a.f.S(b) : "";
        }
        function pn(a, b, c) {
          null != c && c.length
            ? ((c = c.substr(1, c.length - 1)),
              "profile" === c
                ? yi(a.c, (qn(), rn), b)
                : "article" === c && yi(a.c, (qn(), sn), b))
            : yi(a.c, (qn(), tn), b);
        }
        function un(a, b) {
          var c, d;
          this.b = new vn();
          this.d = new wn();
          this.a = new xn();
          this.e = C(w(yn, 1), ia, 22, 0, [
            new zn("title", (qn(), tn), null),
            new zn("type", tn, null),
            new zn("url", tn, null),
            new zn("description", tn, null),
            new zn("site_name", tn, null),
            new zn("image", tn, this.b),
            new zn("image:", tn, this.b),
            new zn("first_name", rn, this.d),
            new zn("last_name", rn, this.d),
            new zn("section", sn, this.a),
            new zn("published_time", sn, this.a),
            new zn("modified_time", sn, this.a),
            new zn("expiration_time", sn, this.a),
            new zn("author", sn, this.a),
          ]);
          this.f = new Ki();
          this.c = new Bi(An);
          this.g = b;
          d = 0;
          var e, f, g;
          c = "";
          F("HTML", a.tagName) && (c = B(a, "prefix"));
          c.length ||
            ((g = a.getElementsByTagName("HEAD")),
            1 == g.length && (c = B(g[0], "prefix")));
          if (c.length) {
            for (ln.lastIndex = 0; ; ) {
              g = ln.exec(c);
              if (!g) {
                break;
              }
              pn(this, g[2], g[4]);
            }
          } else {
            for (c = a.attributes, g = 0; g < c.length; g++) {
              if (
                ((f = c[g]), (e = f.nodeName.toLowerCase()), (e = mn.exec(e)))
              ) {
                (f = f.nodeValue), (f = nn.exec(f)) && pn(this, e[1], f[1]);
              }
            }
          }
          null == wi(this.c, (qn(), tn)) && yi(this.c, tn, "og");
          null == wi(this.c, rn) && yi(this.c, rn, "profile");
          null == wi(this.c, sn) && yi(this.c, sn, "article");
          Xl(d, this.g, "OpenGraphProtocolParser.findPrefixes");
          d = 0;
          var h, n;
          e = "";
          for (g = new Ei(new Di(this.c).a); Gi(g.a); ) {
            (c = ((g.b = Hi(g.a)), new Ii(g.c, g.b))),
              (e += 'meta[property^\x3d"' + c.b.b[c.a.b] + '"],');
          }
          e = ih(e, 0, e.length - 1);
          c = a.querySelectorAll(e);
          for (g = 0; g < c.length; g++) {
            for (
              f = c[g], n = B(f, "property").toLowerCase(), e = 0;
              e < this.e.length;
              e++
            ) {
              (h = wi(this.c, this.e[e].c) + ":"),
                gh(n, h + this.e[e].a) &&
                  ((n = hh(n, h.length)),
                  (h = !0),
                  this.e[e].b && (h = this.e[e].b.Gb(n, f.content, this.f)),
                  h && this.f.W(this.e[e].a, f.content));
            }
          }
          Xl(d, this.g, "OpenGraphProtocolParser.parseMetaTags");
          d = 0;
          c = this.b;
          if (0 != c.a.b.length) {
            for (g = c.a.b.length - 1; 0 <= g; g--) {
              (e = L(c.a, g)[0]), (null != e && e.length) || c.a.ab(g);
            }
          }
          Xl(d, this.g, "OpenGraphProtocolParser.imageParser.verify");
          d = 0;
          c = wi(this.c, tn) + ":";
          if (!(this.f.Q("title") ? this.f.S("title") : "").length) {
            throw new Lc('Required "' + c + 'title" property is missing.');
          }
          if (!(this.f.Q("type") ? this.f.S("type") : "").length) {
            throw new Lc('Required "' + c + 'type" property is missing.');
          }
          if (!(this.f.Q("url") ? this.f.S("url") : "").length) {
            throw new Lc('Required "' + c + 'url" property is missing.');
          }
          if (0 == Bn(this.b).length) {
            throw new Lc('Required "' + c + 'image" property is missing.');
          }
          Xl(d, this.g, "OpenGraphProtocolParser.checkRequired");
        }
        q(182, 1, {}, un);
        var mn, nn, ln;
        v(182);
        function xn() {
          this.b = !1;
          this.a = new N();
        }
        q(185, 1, {}, xn);
        _.Gb = function (a, b, c) {
          this.b ||
            ((c = c.S("type")), (this.b = null != c && F(c, "article")));
          return this.b ? ("author" === a ? (M(this.a, b), !1) : !0) : !1;
        };
        _.b = !1;
        v(185);
        function Bn(a) {
          var b, c, d, e;
          e = fg(Zm, ia, 27, a.a.b.length, 0);
          for (b = 0; b < a.a.b.length; b++) {
            (c = L(a.a, b)),
              (d = new Ym()),
              (e[b] = d),
              (d.e = null != c[1] && c[1].length ? c[1] : c[0]),
              null != c[2] && (d.c = c[2]),
              null != c[3] && (d.d = c[3]),
              null != c[4] && (d.f = $m(c[4])),
              null != c[5] && (d.b = $m(c[5]));
          }
          return e;
        }
        function vn() {
          this.b = C(
            w(s, 1),
            k,
            2,
            4,
            "image image:url image:secure_url image:type image:width image:height".split(
              " ",
            ),
          );
          this.a = new N();
        }
        q(183, 1, {}, vn);
        _.Gb = function (a, b) {
          var c, d;
          if ("image" === a) {
            (d = fg(s, k, 2, this.b.length, 4)), (d[0] = b), M(this.a, d);
          } else {
            for (
              0 == this.a.b.length
                ? ((d = fg(s, k, 2, this.b.length, 4)), M(this.a, d))
                : (d = L(this.a, this.a.b.length - 1)),
                c = 1;
              c < this.b.length;
              c++
            ) {
              if (a === this.b[c]) {
                d[c] = b;
                break;
              }
            }
          }
          return !1;
        };
        v(183);
        function qn() {
          qn = l;
          tn = new Cn("OG", 0);
          rn = new Cn("PROFILE", 1);
          sn = new Cn("ARTICLE", 2);
        }
        function Cn(a, b) {
          te.call(this, a, b);
        }
        q(51, 9, { 3: 1, 13: 1, 9: 1, 51: 1 }, Cn);
        var sn,
          tn,
          rn,
          An = Gc(51, function () {
            qn();
            return C(w(An, 1), ja, 51, 0, [tn, rn, sn]);
          });
        function wn() {
          this.b = this.a = !1;
        }
        q(184, 1, {}, wn);
        _.Gb = function (a, b, c) {
          this.a ||
            ((a = c.S("type")),
            (this.b = null != a && F(a, "profile")),
            (this.a = !0));
          return this.b;
        };
        _.a = !1;
        _.b = !1;
        v(184);
        function zn(a, b, c) {
          this.a = a;
          this.c = b;
          this.b = c;
        }
        q(22, 1, { 22: 1 }, zn);
        _.a = null;
        _.b = null;
        var yn = v(22);
        function Dn(a) {
          if (!a.a) {
            var b;
            var c = a.c,
              d = a.d;
            kn();
            var e;
            try {
              (e = new un(c, d)),
                Xl(0, d, "OpenGraphProtocolParser.parse"),
                (b = e);
            } catch (f) {
              if (((f = Od(f)), t(f, 11))) {
                b = null;
              } else {
                throw Pd(f);
              }
            }
            a.b = b;
            a.a = !0;
          }
          return !!a.b;
        }
        function bn(a, b) {
          this.c = a;
          this.d = b;
          this.a = !1;
        }
        q(156, 1, {}, bn);
        _.wb = function () {
          var a;
          if (Dn(this)) {
            a = new Xm();
            a.d = on(this.b, "published_time");
            a.c = on(this.b, "modified_time");
            a.b = on(this.b, "expiration_time");
            a.e = on(this.b, "section");
            var b;
            b = this.b.a;
            b = mi(b.a, fg(s, k, 2, b.a.b.length, 4));
            a.a = b;
            return a.e.length ||
              a.d.length ||
              a.c.length ||
              a.b.length ||
              0 != a.a.length
              ? a
              : null;
          }
          return null;
        };
        _.xb = function () {
          var a;
          if (Dn(this)) {
            var b = this.b;
            a = b.f;
            b.d.b
              ? ((b = a.S("first_name")),
                null == b && (b = ""),
                (a = a.S("last_name")),
                null != a && b.length && a.length && (b += " "),
                (a = b + a))
              : (a = "");
          } else {
            a = "";
          }
          return a;
        };
        _.yb = function () {
          return "";
        };
        _.zb = function () {
          return Dn(this) ? on(this.b, "description") : "";
        };
        _.Ab = function () {
          return Dn(this) ? Bn(this.b.b) : fg(Zm, ia, 27, 0, 0);
        };
        _.Bb = function () {
          return Dn(this) ? on(this.b, "site_name") : "";
        };
        _.Cb = function () {
          return Dn(this) ? on(this.b, "title") : "";
        };
        _.Db = function () {
          var a;
          a = Dn(this) ? on(this.b, "type") : "";
          return F(a, "article") ? "Article" : "";
        };
        _.Eb = function () {
          return Dn(this) ? on(this.b, "url") : "";
        };
        _.Fb = function () {
          return !1;
        };
        _.a = !1;
        v(156);
        function hn(a, b) {
          if (b != a.a) {
            return !1;
          }
          a.a = a.b.Y() ? a.b.Z() : null;
          return !0;
        }
        function fn(a) {
          this.b = a.H();
          a.L() || (this.a = this.b.Z());
        }
        q(110, 1, {}, fn);
        v(110);
        function Al() {
          Al = l;
          Dl = RegExp("\u539f\u7f51\u7ad9|\u539f\u7f51\u9875", "i");
        }
        var Dl;
        function dm(a, b, c) {
          this.a = a;
          this.b = b;
          this.c = c;
        }
        q(106, 1, {}, dm);
        _.a = 0;
        _.b = 0;
        _.c = 0;
        v(106);
        function um(a) {
          var b, c, d;
          d = "Type: " + a.e + "\nPageInfo: " + a.a.b.length;
          d += "\npattern: " + a.d;
          for (c = new I(a.a); c.b < c.d.M(); ) {
            (b = (z(c.b < c.d.M()), c.d._((c.c = c.b++)))),
              (d += "\n  " + ("pg" + b.a + ": " + b.b));
          }
          return (d +=
            "\nformula: " +
            (a.b ? En(a.b) : "null") +
            "\nnextPagingUrl: " +
            a.c);
        }
        function sm() {
          this.e = (mm(), Fn);
          this.a = new N();
        }
        function lm(a, b, c, d, e) {
          this.e = (mm(), Fn);
          this.e = a;
          this.d = b;
          this.a = c;
          this.b = d;
          this.c = e;
        }
        function km(a) {
          var b, c, d, e;
          if (2 > a.b.length) {
            return null;
          }
          c = (A(0, a.b.length), a.b[0]);
          b = (A(1, a.b.length), a.b[1]);
          if ((d = 2 == a.b.length)) {
            (d = c.a), (e = b.a), (d = 4 < (d > e ? d : e));
          }
          if (d) {
            return null;
          }
          d = b.a - c.a;
          if (0 == d) {
            return null;
          }
          b = ~~((b.b - c.b) / d);
          if (0 == b) {
            return null;
          }
          c = c.b - b * c.a;
          if (0 != c && c != -b) {
            return null;
          }
          for (d = 2; d < a.b.length; d++) {
            if (((e = (A(d, a.b.length), a.b[d])), e.b != b * e.a + c)) {
              return null;
            }
          }
          return new om(b, c);
        }
        function im(a, b) {
          var c, d, e, f, g, h, n, m;
          m = new Gn();
          f = c = e = -1;
          n = new Li();
          for (h = new I(a); h.b < h.d.M(); ) {
            g = (z(h.b < h.d.M()), h.d._((h.c = h.b++)));
            d = g.c;
            if (-1 == c) {
              e = d;
            } else {
              if (d != c + 1) {
                if (d <= c || d != c + 2 || -1 != f) {
                  return m;
                }
                f = d - 1;
              }
            }
            if (!O(n, Pg(g.b))) {
              return m;
            }
            c = d;
          }
          m.a = !0;
          if (-1 != f) {
            if (0 >= f || f >= b.b.length - 1) {
              return m;
            }
            c = (A(f, b.b.length), b.b[f]).a;
            (A(f - 1, b.b.length), b.b[f - 1]).a == c - 1 &&
              (A(f + 1, b.b.length), b.b[f + 1]).a == c + 1 &&
              ((m.b = !0), (m.c = (A(f + 1, b.b.length), b.b[f + 1]).b));
            return m;
          }
          if (
            ((0 == e || 1 == e) &&
              1 == (A(0, b.b.length), b.b[0]).a &&
              2 == (A(1, b.b.length), b.b[1]).a) ||
            (2 == e &&
              3 == (A(2, b.b.length), b.b[2]).a &&
              Vg((A(1, b.b.length), b.b[1]).b) &&
              !Vg((A(0, b.b.length), b.b[0]).b))
          ) {
            return (m.b = !0), m;
          }
          f = b.b.length;
          if (
            (c == f - 1 || c == f - 2) &&
            (A(f - 2, b.b.length), b.b[f - 2]).a + 1 ==
              (A(f - 1, b.b.length), b.b[f - 1]).a
          ) {
            return (m.b = !0), m;
          }
          for (e += 1; e < c; e++) {
            if (
              (A(e - 1, b.b.length), b.b[e - 1]).a + 2 ==
              (A(e + 1, b.b.length), b.b[e + 1]).a
            ) {
              m.b = !0;
              break;
            }
          }
          return m;
        }
        function jm(a, b) {
          var c, d, e, f;
          if (1 >= a.b.length) {
            return !1;
          }
          c = (A(0, a.b.length), a.b[0]);
          if (1 != c.a && !c.b.length) {
            return !1;
          }
          d = !1;
          for (f = new I(a); f.b < f.d.M(); ) {
            if (((e = (z(f.b < f.d.M()), f.d._((f.c = f.b++)))), e.b.length)) {
              d && !b.c.length && (b.c = e.b);
            } else {
              if (d) {
                return !1;
              }
              d = !0;
            }
          }
          if (2 == a.b.length) {
            return c.a + 1 == (A(1, a.b.length), a.b[1]).a;
          }
          for (d = 1; d < a.b.length; d++) {
            if (
              ((c = (A(d, a.b.length), a.b[d])),
              (e = (A(d - 1, a.b.length), a.b[d - 1])),
              1 != c.a - e.a &&
                ((1 != d && d != a.b.length - 1) || !c.b.length || !e.b.length))
            ) {
              return !1;
            }
          }
          return !0;
        }
        q(45, 1, {}, sm, lm);
        _.tS = function () {
          return um(this);
        };
        _.b = null;
        _.c = "";
        _.d = "";
        v(45);
        function En(a) {
          return "coefficient\x3d" + a.a + ", delta\x3d" + a.b;
        }
        function om(a, b) {
          this.a = a;
          this.b = b;
        }
        q(87, 1, {}, om);
        _.tS = function () {
          return En(this);
        };
        _.a = 0;
        _.b = 0;
        v(87);
        function Zl(a, b) {
          this.a = a;
          this.b = b;
        }
        q(26, 1, {}, Zl);
        _.tS = function () {
          return "pg" + this.a + ": " + this.b;
        };
        _.a = 0;
        v(26);
        function Gn() {}
        q(119, 1, {}, Gn);
        _.a = !1;
        _.b = !1;
        _.c = "";
        v(119);
        function mm() {
          mm = l;
          Fn = new Hn("UNSET", 0);
          nm = new Hn("PAGE_NUMBER", 1);
          In = new Hn("UNKNOWN", 2);
        }
        function Hn(a, b) {
          te.call(this, a, b);
        }
        q(46, 9, { 3: 1, 13: 1, 9: 1, 46: 1 }, Hn);
        var nm,
          In,
          Fn,
          Jn = Gc(46, function () {
            mm();
            return C(w(Jn, 1), ja, 46, 0, [Fn, nm, In]);
          });
        function Kn() {
          Y ||
            ((Y = new Li()),
            O(Y, "baixar-gratis"),
            O(Y, "category"),
            O(Y, "content"),
            O(Y, "day"),
            O(Y, "date"),
            O(Y, "definition"),
            O(Y, "etiket"),
            O(Y, "film-seyret"),
            O(Y, "key"),
            O(Y, "keys"),
            O(Y, "keyword"),
            O(Y, "label"),
            O(Y, "news"),
            O(Y, "q"),
            O(Y, "query"),
            O(Y, "rating"),
            O(Y, "s"),
            O(Y, "search"),
            O(Y, "seasons"),
            O(Y, "search_keyword"),
            O(Y, "search_query"),
            O(Y, "sortby"),
            O(Y, "subscriptions"),
            O(Y, "tag"),
            O(Y, "tags"),
            O(Y, "video"),
            O(Y, "videos"),
            O(Y, "w"),
            O(Y, "wiki"));
        }
        var Y = null,
          gm = null;
        function qm(a, b) {
          var c;
          if (a.a) {
            c = a.a;
            var d = b.a;
            c =
              c.b && !d.b
                ? 1
                : !c.b && d.b
                  ? -1
                  : c.e == d.e
                    ? 0
                    : c.e == (mm(), nm)
                      ? 1
                      : d.e == nm
                        ? -1
                        : 0;
            -1 == c ? ((a.a = b.a), (a.b = b.b)) : 0 == c && (a.b = !0);
          } else {
            (a.a = b.a), (a.b = b.b);
          }
        }
        function Yl() {}
        function rm(a) {
          this.a = a;
        }
        q(77, 1, {}, Yl, rm);
        _.a = null;
        _.b = !1;
        v(77);
        function cm(a, b, c) {
          var d;
          d = b.tS();
          a.a.Q(d) ? M(a.a.S(d).a, c) : a.a.W(d, new Ln(b, c));
        }
        function $l() {
          this.a = new Ki();
        }
        q(162, 1, {}, $l);
        v(162);
        function Ln(a, b) {
          this.b = a;
          this.a = new N();
          M(this.a, b);
        }
        q(163, 1, {}, Ln);
        v(163);
        function Nl() {
          Nl = l;
          Pl = /\/$/;
        }
        function Vl(a, b, c, d, e) {
          var f;
          f = c ? b : d ? b.previousSibling : b.nextSibling;
          if (!f) {
            return (
              (f = b.parentNode),
              !Mn && (Mn = /(BODY)|(HTML)/),
              Mn.test(f.nodeName) ? !1 : Vl(a, f, !1, d, e)
            );
          }
          c = !1;
          switch (f.nodeType) {
            case 3:
              b = f.nodeValue;
              if (!b.length || (pk(), 0 == qk.Jb(b))) {
                break;
              }
              b = f.nodeValue;
              var g, h, n;
              if (fm(b)) {
                Nn
                  ? (Nn.lastIndex = 0)
                  : (Nn = RegExp(
                      "(\\S*[\\w\u00c0-\u1fff\u2c00-\ud7ff]\\S*)",
                      "gi",
                    ));
                !On && (On = /^[\W_]*(\d+)[\W_]*$/i);
                for (g = !1; ; ) {
                  h = Nn.exec(b);
                  if (!h) {
                    break;
                  }
                  1 >= h.length ||
                    ((h = h[1]),
                    (n = On.exec(h)),
                    (h = -1),
                    n && 1 < n.length && (h = Pn(n[1])),
                    0 <= h && 100 >= h
                      ? (Wl(a.a, new Zl(h, "")), (g = !0))
                      : Ul(a.a));
                }
                b = g;
              } else {
                Ul(a.a), (b = !1);
              }
              if (d || !b) {
                return !1;
              }
              break;
            case 1:
              if (((b = f), F("A", b.tagName))) {
                if (d) {
                  return !1;
                }
                ++a.c;
                (b = Tl(a, b, e))
                  ? (Wl(a.a, b.a), (b = !0))
                  : (Ul(a.a), (b = !1));
                if (!b) {
                  return !1;
                }
                break;
              }
            default:
              if (!f.hasChildNodes()) {
                break;
              }
              c = !0;
              d ? (f = f.lastChild) : (f = f.firstChild);
          }
          return Vl(a, f, c, d, e);
        }
        function Tl(a, b, c) {
          var d, e, f, g;
          if (!Bl(b)) {
            return null;
          }
          g = rk(b.innerText);
          g = $g(g, "[()\\[\\]{}]", "");
          g = jh(g);
          g = Pn(g);
          if (!(0 <= g && 100 >= g)) {
            return null;
          }
          d = B(b, "href");
          d.length ? (c.setAttribute("href", d), (f = c.href)) : (f = "");
          d = !f.length;
          e = !1;
          c = null;
          if (!d) {
            e = E(f.substr(0, 11), "javascript:");
            c = Ql(f);
            if (!c || (!e && !F(c.d.host, a.d.d.host))) {
              return null;
            }
            c.d.hash = "";
          }
          if (!(a = d || e)) {
            b = kl(b);
            b = b.cursor.toUpperCase();
            ue();
            a = (Ff(), Gf);
            le(b);
            a = a[":" + b];
            b = C(w(Jc, 1), ia, 1, 3, [b]);
            if (!a) {
              throw new Mg(oe("Enum constant undefined: %s", b));
            }
            a = a == (ue(), tf);
          }
          return a ? new Qn(g, "") : new Qn(g, Zb(c.d).replace(Pl, ""));
        }
        function Ol(a) {
          this.a = new en();
          this.e = a;
        }
        q(124, 1, {}, Ol);
        _.b = "";
        _.c = 0;
        _.d = null;
        var Pl,
          Mn = null,
          On = null,
          Nn = null;
        v(124);
        function Qn(a, b) {
          this.a = new Zl(a, b);
        }
        q(89, 1, {}, Qn);
        v(89);
        function Rn() {
          Rn = l;
          Sn = RegExp(
            "(\u4e0b\u7ae0|\u4e0b\u4e00\u7ae0|\u4e0b\u9875|\u4e0b\u4e00\u9875|next|weiter|continue|\x3e([^\\|]|$)|\u00bb([^\\|]|$))",
            "i",
          );
          Tn = RegExp(
            "(\u4e0a\u7ae0|\u4e0a\u9875|\u4e0a\u4e00\u7ae0|\u4e0a\u4e00\u9875|prev|early|old|new|\x3c|\u00ab)",
            "i",
          );
          Un =
            /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i;
          Vn = RegExp(
            "combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|shoutbox|sidebar|sponsor|shopping|tags|tool|widget",
            "i",
          );
          Wn = RegExp(
            "print|archive|comment|discuss|e[\\-]?mail|share|reply|all|login|sign|single|as one|article|post|\u7bc7",
            "i",
          );
          Xn = /pag(e|ing|inat)/i;
          Yn = /p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}$/i;
          Zn = /(first|last)/i;
          $n = /\/?(#.*)?$/;
          ao = /\d/;
          bo = RegExp(
            "\u7b2c[\\u4e00-\\u9fa5\\u767e\\u5343\\u96f6]{1,10}\u7ae0|\u7b2c(\\d+)\u7ae0",
            "i",
          );
          co = RegExp("\u7b2c(\\d+)\u7ae0", "i");
          eo = new Ki();
        }
        function fo(a, b) {
          var c;
          3 > V ||
            ((c = ""),
            eo.Q(a) && (c = eo.S(a)),
            !c.length || (c += "; "),
            eo.W(a, c + b));
        }
        function Rl(a) {
          Rn();
          var b, c;
          c = $doc.implementation.createHTMLDocument();
          b = c.createElement("base");
          b.href = a;
          (c.head || c.getElementsByTagName("head")[0]).appendChild(b);
          a = c.createElement("a");
          c.body.appendChild(a);
          return a;
        }
        function go(a, b, c, d) {
          var e, f, g, h, n, m, u, p, x, D, Q, oa, W, y, dc, r, gb;
          3 <= V && eo.T();
          r = new N();
          if (E(wk(b), "m.baidu.com")) {
            e = a.getElementsByTagName("span");
            for (g = 0; g < e.length; g++) {
              if (((Q = e[g]), (b = $g(Q.innerText, " ", "")), 0 == c)) {
                if (
                  "\u4e0b\u4e00\u9875" === b ||
                  "\u4e0b\u4e00\u7ae0" === b ||
                  "\u4e0b\u4e00\u7bc7" === b ||
                  "\u4e0b\u7ae0" === b
                ) {
                  M(r, "action_id:" + Cl(Q));
                  break;
                }
              } else {
                if (
                  1 == c &&
                  ("\u4e0a\u4e00\u9875" === b ||
                    "\u4e0a\u4e00\u7ae0" === b ||
                    "\u4e0a\u4e00\u7bc7" === b ||
                    "\u4e0a\u7ae0" === b)
                ) {
                  M(r, "action_id:" + Cl(Q));
                  break;
                }
              }
            }
            return r;
          }
          n = (pk(), b.replace(RegExp("\\/[^/]*$", "gi"), ""));
          gb = b.replace(RegExp("\\/$", "gi"), "");
          e = a.getElementsByTagName("A");
          Q = new Li();
          g = new Li();
          a = Rl(Sl(a, b));
          f = fh(b, ":\\/\\/")[0] + "://";
          u = b;
          u = (pk(), fh(u, ":\\/\\/"))[1];
          u = -1 == u.indexOf("/") ? u : fh(u, "\\/")[0];
          f = f + u + "/";
          u =
            "^" + f.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26") + ".*\\d";
          dc = RegExp(u, "i");
          for (u = wk(b); d < e.length; d++) {
            p = e[d];
            h = B(p, "href");
            a.setAttribute("href", h);
            h = a.href;
            D = p.innerText;
            if (0 == c) {
              if (
                ((m = $g(D, " ", "")),
                (null != m && "" != m) || (m = $g(p.textContent, " ", "")),
                "\u4e0b\u4e00\u9875" === m ||
                  "\u4e0b\u4e00\u7ae0" === m ||
                  "\u4e0b\u4e00\u7bc7" === m ||
                  "\u4e0b\u7ae0" === m)
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && M(r, p.href);
                return r;
              }
            } else {
              if (
                1 == c &&
                ((m = $g(D, " ", "")),
                (null != m && "" != m) || (m = $g(p.textContent, " ", "")),
                "\u4e0a\u4e00\u9875" === m ||
                  "\u4e0a\u4e00\u7ae0" === m ||
                  "\u4e0a\u4e00\u7bc7" === m ||
                  "\u4e0a\u7ae0" === m)
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && M(r, p.href);
                return r;
              }
            }
            if (0 == c && "wap.mywenxue.com" === u) {
              if (
                ((m = $g(D, " ", "")),
                (null != m && "" != m) || (m = $g(p.textContent, " ", "")),
                (x = co.exec(m)),
                (m = !!x) && 2 == x.length)
              ) {
                ho = !0;
                io = Jg(x[1]);
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && M(r, p.href);
                return r;
              }
            } else {
              if (1 == c && "wap.mywenxue.com" === u) {
                m = $g(D, " ", "");
                (null != m && "" != m) || (m = p.textContent);
                if (0 < io && !ho && "\u6ca1\u6709\u4e86" === m) {
                  jo = 268435455;
                  if (null == h || !h.length || "javascript:" === p.protocol) {
                    return M(r, "action_id:" + Cl(p)), r;
                  }
                  null != p.href && M(r, p.href);
                  return r;
                }
                x = co.exec(m);
                if ((m = !!x) && 2 == x.length) {
                  if (0 < io && ho) {
                    ho = !1;
                    continue;
                  }
                  jo = Jg(x[1]);
                  jo == io && (ko = !0);
                  if (null == h || !h.length || "javascript:" === p.protocol) {
                    return M(r, "action_id:" + Cl(p)), r;
                  }
                  null != p.href && M(r, p.href);
                  return r;
                }
              }
            }
            if (0 == c) {
              if (
                ((m = $g(D, " ", "")),
                (null != m && "" != m) || (m = $g(p.textContent, " ", "")),
                bo.test(m) && E($g(p.rel, " ", ""), "next"))
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && M(r, p.href);
                return r;
              }
            } else {
              if (
                1 == c &&
                ((m = $g(D, " ", "")),
                (null != m && "" != m) || (m = p.textContent),
                bo.test(m) && E($g(p.rel, " ", ""), "prev"))
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && M(r, p.href);
                return r;
              }
            }
            if (0 == c) {
              if (
                ((m = $g(D, " ", "")),
                E(m.substr(0, 4), "\u4e0b\u4e00\u7bc7\uff1a"))
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && (M(r, p.href), (r.b[r.b.length] = m));
                return r;
              }
            } else {
              if (
                1 == c &&
                ((m = $g(D, " ", "")),
                E(m.substr(0, 4), "\u4e0a\u4e00\u7bc7\uff1a"))
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && (M(r, p.href), (r.b[r.b.length] = m));
                return r;
              }
            }
            if (0 == c) {
              if ((m = p.parentNode)) {
                if (
                  ((m = $g(m.innerText, " ", "")),
                  E(m.substr(0, 4), "\u4e0b\u4e00\u7bc7\uff1a") ||
                    E(m.substr(0, 4), "\u4e0b\u4e00\u7bc7:"))
                ) {
                  if (null == h || !h.length || "javascript:" === p.protocol) {
                    return M(r, "action_id:" + Cl(p)), r;
                  }
                  null != p.href && (M(r, p.href), (r.b[r.b.length] = m));
                  return r;
                }
              }
            } else {
              if (
                1 == c &&
                (m = p.parentNode) &&
                ((m = $g(m.innerText, " ", "")),
                E(m.substr(0, 4), "\u4e0a\u4e00\u7bc7\uff1a") ||
                  E(m.substr(0, 4), "\u4e0a\u4e00\u7bc7:"))
              ) {
                if (null == h || !h.length || "javascript:" === p.protocol) {
                  return M(r, "action_id:" + Cl(p)), r;
                }
                null != p.href && (M(r, p.href), (r.b[r.b.length] = m));
                return r;
              }
            }
            if (0 == c) {
              if (!dc.test(h)) {
                fo(p, "ignored: not prefix + num");
                continue;
              }
            } else {
              if (1 == c && !F(ih(h, 0, f.length), f)) {
                fo(p, "ignored: prefix");
                continue;
              }
            }
            x = (p.offsetWidth || 0) | 0;
            m = (p.offsetHeight || 0) | 0;
            if (0 == x || 0 == m) {
              fo(p, "ignored: sz\x3d" + x + "x" + m);
            } else {
              if (Bl(p)) {
                if (
                  ((h = h.replace($n, "")),
                  fo(p, "-\x3e " + h),
                  F(h, gb) || (0 == c && F(h, n)))
                ) {
                  fo(p, "ignored: same as current or folder url " + n);
                } else {
                  if (25 < D.length) {
                    fo(p, "ignored: link text too long");
                  } else {
                    if (Wn.test(D)) {
                      fo(p, "ignored: one of extra"), O(g, h);
                    } else {
                      if (
                        0 == c &&
                        ((m = h),
                        E(h.substr(0, n.length), n) && (m = hh(h, n.length)),
                        !ao.test(m))
                      ) {
                        fo(p, "ignored: no number beyond folder url " + n);
                        continue;
                      }
                      m = new lo(d, D, h);
                      O(Q, m);
                      0 != h.indexOf(n) &&
                        ((m.d -= 25),
                        fo(
                          p,
                          "score\x3d" + m.d + ": not part of folder url " + n,
                        ));
                      x = D + " " + B(p, "class") + " " + p.id;
                      fo(p, "txt+class+id\x3d" + x);
                      if (0 == c ? Sn.test(x) : Tn.test(x)) {
                        (m.d += 50),
                          fo(
                            p,
                            "score\x3d" +
                              m.d +
                              ": has " +
                              (0 == c ? "next" : "prev regex"),
                          );
                      }
                      Xn.test(x) &&
                        ((m.d += 25),
                        fo(p, "score\x3d" + m.d + ": has pag* word"));
                      Zn.test(x) &&
                        ((0 == c && !Sn.test(m.c)) ||
                          (1 == c && !Tn.test(m.c))) &&
                        ((m.d -= 65),
                        fo(
                          p,
                          "score\x3d" +
                            m.d +
                            ": has first|last but no " +
                            (0 == c ? "next" : "prev") +
                            " regex",
                        ));
                      if (Vn.test(x) || Wn.test(x)) {
                        (m.d -= 50),
                          fo(p, "score\x3d" + m.d + ": has neg or extra regex");
                      }
                      if (0 == c ? Tn.test(x) : Sn.test(x)) {
                        (m.d -= 200),
                          fo(
                            p,
                            "score\x3d" +
                              m.d +
                              ": has opp of " +
                              (0 == c ? "next" : "prev") +
                              " regex",
                          );
                      }
                      x = y = !1;
                      for (oa = re(p); oa && (!y || !x); ) {
                        (W = B(oa, "class") + " " + oa.id),
                          !y &&
                            Xn.test(W) &&
                            ((m.d += 25),
                            (y = !0),
                            fo(p, "score\x3d" + m.d + ": posParent - " + W)),
                          x ||
                            !Vn.test(W) ||
                            Un.test(W) ||
                            ((m.d -= 25),
                            (x = !0),
                            fo(p, "score\x3d" + m.d + ": negParent - " + W)),
                          (oa = re(oa));
                      }
                      if (Yn.test(h) || Xn.test(h)) {
                        (m.d += 25),
                          fo(p, "score\x3d" + m.d + ": has paging info");
                      }
                      Wn.test(h) &&
                        ((m.d -= 15),
                        fo(p, "score\x3d" + m.d + ": has extra regex"));
                      10 < D.length &&
                        ((m.d -= D.length),
                        fo(p, "score\x3d" + m.d + ": text too long"));
                      D = $m(D);
                      0 < D &&
                        (1 == D
                          ? (m.d -= 10)
                          : (m.d += 0 > 10 - D ? 0 : 10 - D),
                        fo(
                          p,
                          "score\x3d" + m.d + ": linktxt is a num (" + D + ")",
                        ));
                      a: {
                        D = b;
                        x = p;
                        oa = f.length;
                        y = W = W = void 0;
                        try {
                          (D = mo(D)), (h = mo(h));
                        } catch (H) {
                          H = Od(H);
                          if (t(H, 11)) {
                            h = null;
                            break a;
                          }
                          throw Pd(H);
                        }
                        for (
                          W = oa;
                          W < Tg(D.length, h.length) &&
                          D.charCodeAt(W) == h.charCodeAt(W);
                          W++
                        ) {}
                        D = ih(D, W, D.length);
                        h = ih(h, W, h.length);
                        fo(x, "remains: " + D + ", " + h);
                        W = $m(h);
                        y = $m(D);
                        fo(x, "remains: " + y + ", " + W);
                        h = 0 < y && 0 < W ? Pg(W - y) : null;
                      }
                      h &&
                        ((0 == c && 1 == h.a) || (1 == c && -1 == h.a)) &&
                        ((m.d += 25),
                        fo(p, "score\x3d" + m.d + ": diff \x3d " + h));
                    }
                  }
                }
              } else {
                fo(p, "ignored: invisible");
              }
            }
          }
          b = null;
          if (0 != Q.a.M()) {
            for (n = Qh(new Sh(Q.a)); n.a.Y(); ) {
              (Q = n.a.Z().cb()),
                P(g, Q.a) || (50 <= Q.d && (!b || b.d < Q.d) && (b = Q));
            }
          }
          g = null;
          b &&
            ((g = no(b.a, "\\/$")),
            fo(
              e[b.b],
              "found: score\x3d" + b.d + ", txt\x3d[" + b.c + "], " + g,
            ));
          if (3 <= V) {
            for (
              T(
                "numLinks\x3d" +
                  e.length +
                  ", found " +
                  (0 == c ? "next: " : "prev: ") +
                  (null != g ? g : "null"),
              ),
                c = 0;
              c < e.length;
              c++
            ) {
              Q = e[c];
              b = Q.innerText;
              gb = (pk(), fh(b, "\\s+"));
              b = "";
              for (n = 0; n < gb.length; n++) {
                (b += gb[n]), n < gb.length - 1 && (b += " ");
              }
              T(
                c +
                  ")" +
                  Q.href +
                  ", txt\x3d[" +
                  b +
                  "], dbg\x3d[" +
                  eo.S(Q) +
                  "]",
              );
            }
          }
          null != g && (r.b[r.b.length] = g);
          return r;
        }
        function Sl(a, b) {
          Rn();
          var c, d;
          d = a.getElementsByTagName("BASE");
          if (0 == d.length) {
            return b;
          }
          c = Rl(b);
          d = B(d[0], "href");
          c.setAttribute("href", d);
          return c.href;
        }
        function Fl(a, b) {
          Rn();
          var c, d, e;
          io = jo = 0;
          ko = ho = !1;
          c = {};
          d = $doc.documentElement;
          T("findNext" + Zb(d) + a);
          d = go(d, a, 0, b);
          if (
            0 < d.b.length &&
            !E((A(0, d.b.length), d.b[0]), a) &&
            (tm(c, (A(0, d.b.length), d.b[0])),
            2 == d.b.length && (A(1, d.b.length), "" !== d.b[1]))
          ) {
            e = (A(1, d.b.length), d.b[1]);
            if (void 0 == e) {
              throw new TypeError();
            }
            c[4] = e;
          }
          e = $doc.documentElement;
          T("findPrevious" + Zb(e) + a);
          e = go(e, a, 1, b);
          if (
            0 < e.b.length &&
            !E((A(0, e.b.length), e.b[0]), a) &&
            (wm(c, (A(0, e.b.length), e.b[0])),
            2 == d.b.length && (A(1, e.b.length), "" !== e.b[1]))
          ) {
            d = (A(1, e.b.length), e.b[1]);
            if (void 0 == d) {
              throw new TypeError();
            }
            c[5] = d;
          }
          if ((0 < io && jo > io) || ko) {
            (d = oo(c)), tm(c, po(c)), wm(c, d);
          }
          return c;
        }
        var io = 0,
          jo = 0,
          ho = !1,
          ko = !1,
          Wn,
          Zn,
          $n,
          Yn,
          Vn,
          Sn,
          bo,
          co,
          ao,
          Xn,
          Un,
          Tn,
          eo;
        function lo(a, b, c) {
          this.b = a;
          this.d = 0;
          this.c = b;
          this.a = c;
        }
        q(123, 1, {}, lo);
        _.b = -1;
        _.d = 0;
        v(123);
        function qo(a) {
          var b;
          null == a.a &&
            ((b = (null == a.c && (a.c = em(a.d)), a.c)),
            b.length
              ? (a.a = (pk(), fh(b, "\\/")))
              : (a.a = fg(s, k, 2, 0, 4)));
          return a.a;
        }
        function zo(a) {
          this.d = a;
        }
        function Ql(a) {
          var b;
          try {
            b = new URL(a);
          } catch (c) {
            b = null;
          }
          return b ? new zo(b) : null;
        }
        q(76, 1, { 76: 1 }, zo);
        _.tS = function () {
          return Zb(this.d);
        };
        _.a = null;
        _.b = null;
        var pm = (_.c = null),
          am = v(76);
        function em(a) {
          a = a.pathname.replace(/;.*$/, "");
          a = a.replace(/^\//, "");
          return a.replace(/\/$/, "");
        }
        function ym(a, b) {
          this.b = a;
          this.a = b;
        }
        q(126, 1, {}, ym);
        v(126);
        function zm() {}
        q(127, 1, {}, zm);
        v(127);
        function Ao(a) {
          var b, c;
          if (2 > a.b) {
            return !1;
          }
          c = qo(a.g);
          if (4 != c[a.b].length) {
            return !1;
          }
          b = Pn(c[a.b - 1]);
          return 0 < b &&
            12 >= b &&
            ((a = Pn(c[a.b - 2])), 1970 < a && 3000 > a)
            ? !0
            : !1;
        }
        function Bo(a, b) {
          var c, d, e, f;
          f = b.length;
          e = f - a.f.length;
          if (!gh(b, a.e)) {
            return !1;
          }
          c = a.c;
          for (
            d = Tg(a.d, e);
            c < d && b.charCodeAt(c) == a.i.charCodeAt(c);
            c++
          ) {}
          if (c == e) {
            if ((d = c + 1 == a.d)) {
              (d = Cg(a.i.charCodeAt(c))), (d = /[-_;,]/.test(d));
            }
            if (d || c + a.f.length == f) {
              return !0;
            }
          } else {
            if (c == a.d && 0 <= Pn(b.substr(c, e - c))) {
              return !0;
            }
          }
          return !1;
        }
        function hm(a, b, c, d) {
          var e;
          a = Zb(a.d);
          a: {
            if (
              47 == a.charCodeAt(c - 1) &&
              b < c - 1 &&
              ((e = a.substr(d, a.length - d).toLowerCase()),
              !Co && (Co = /(.s?html?)?$/i),
              Co.test(e) &&
                (!Do && (Do = /([^/]*)\/$/i),
                (b = a.substr(b + 1, c - (b + 1))),
                (b = Do.exec(b)) &&
                  1 < b.length &&
                  (Kn(), P(Y, b[1].toLowerCase()))))
            ) {
              b = !0;
              break a;
            }
            b = !1;
          }
          if (b) {
            throw new Mg("Bad last numeric path component");
          }
          e = a.substr(c, d - c);
          b = Pn(e);
          if (0 > b) {
            throw new Mg("Value in path component is an invalid number: " + e);
          }
          d = a.substr(0, c) + "[*!]" + a.substr(d, a.length - d);
          this.g = Ql(d);
          if (!this.g) {
            throw new Mg("Invalid URL: " + d);
          }
          this.i = d;
          this.a = b;
          this.d = c;
          this.c = Wg(this.i, 47, this.d);
          c = qo(this.g);
          for (
            this.b = 0;
            this.b < c.length && -1 == c[this.b].indexOf("[*!]");
            this.b++
          ) {}
          this.e = ih(this.i, 0, this.c);
          d = this.i.length;
          c = d - this.d - 4;
          0 != c && (this.f = hh(this.i, d - c));
        }
        q(203, 1, {}, hm);
        _.Hb = function (a) {
          if (this.f.length && !Ug(a, this.f)) {
            a = !1;
          } else {
            if (47 == this.i.charCodeAt(this.d - 1)) {
              a: {
                var b, c, d, e;
                e = a.length;
                c = this.f.length;
                d = a.length - c;
                b = Wg(
                  this.g.d.pathname,
                  47,
                  this.c - 1 - this.g.d.origin.length,
                );
                if (-1 != b && ((b += this.g.d.origin.length), b + c == e)) {
                  a = Xg(a, !1, 0, this.i, 0, b);
                  break a;
                }
                gh(a, this.e)
                  ? ((b = this.c + c),
                    (a =
                      b == e
                        ? !0
                        : b > e || 47 != a.charCodeAt(this.c)
                          ? !1
                          : 0 <= Pn(ih(a, this.c + 1, d))))
                  : (a = !1);
              }
            } else {
              a = Bo(this, a);
            }
          }
          return a;
        };
        _.Ib = function (a) {
          var b, c;
          b = qo(a).length;
          c = qo(this.g).length;
          if (b > c) {
            return !1;
          }
          if (1 == b && 1 == c) {
            c = qo(a)[0];
            a = qo(this.g)[0];
            var d;
            if (c.length && a.length) {
              for (
                d = Tg(c.length, a.length), b = 0;
                b < d && c.charCodeAt(b) == a.charCodeAt(b);
                b++
              ) {}
            } else {
              b = 0;
            }
            d = b;
            var e, f, g;
            e = 0;
            f = c.length - 1;
            for (
              g = a.length - 1;
              f > d && g > d && c.charCodeAt(f) == a.charCodeAt(g);
              --f, --g, e++
            ) {}
            return 2 * (e + b) >= c.length;
          }
          a: {
            e = qo(a);
            d = qo(this.g);
            b = !1;
            for (c = a = 0; a < e.length && c < d.length; ++a, c++) {
              if (a == this.b && !b) {
                (b = !0), e.length < d.length && --a;
              } else {
                if (!F(e[a], d[c])) {
                  a = !1;
                  break a;
                }
              }
            }
            a = !0;
          }
          return !a || Ao(this) ? !1 : !0;
        };
        _.tS = function () {
          return this.i;
        };
        _.a = 0;
        _.b = -1;
        _.c = 0;
        _.d = 0;
        _.f = "";
        var Co = null,
          Do = null;
        v(203);
        function bm(a, b, c, d) {
          var e;
          if (!c.length) {
            throw new Mg("Empty query name");
          }
          if (!d.length) {
            throw new Mg("Empty query value");
          }
          if (!Eo(d)) {
            throw new Mg("Query value has non-digits: " + d);
          }
          Kn();
          if (P(Y, c.toLowerCase())) {
            throw new Mg("Query name is bad page param name: " + c);
          }
          e = Pn(d);
          if (0 > e) {
            throw new Mg("Query value is an invalid number: " + d);
          }
          b = (b ? "?" : "\x26") + c + "\x3d";
          a = a.d.href.replace(b + d, b + "[*!]");
          this.i = Ql(a);
          if (!this.i) {
            throw new Mg("Invalid URL: " + a);
          }
          this.j = a;
          this.a = e;
          this.c = a.indexOf("[*!]");
          this.e = Wg(this.j, 63, this.c - 1);
          this.b = Wg(this.j, 38, this.c - 1);
          -1 == this.b && (this.b = this.e);
          !Fo && (Fo = /\/$/);
          this.d = ih(this.j, 0, this.b).replace(Fo, "");
          e = this.j.length;
          this.g = e - this.c - 4;
          0 != this.g && (this.f = hh(this.j, e - this.g + 1));
        }
        q(202, 1, {}, bm);
        _.Hb = function (a) {
          var b, c;
          if (0 != this.g && !Ug(a, this.f)) {
            return !1;
          }
          c = a.length - this.g;
          if (!gh(a, this.d)) {
            return !1;
          }
          if (this.b == c || (c == this.b - 1 && 47 == this.j.charCodeAt(c))) {
            return !0;
          }
          b = ih(a, this.b, c).toLowerCase();
          !Go && (Go = /^\/|(.html?)$/i);
          return Go.test(b)
            ? !0
            : Xg(a, !1, this.b, this.j, this.b, this.c - this.b)
              ? 0 <= Pn(ih(a, this.c, c))
              : !1;
        };
        _.Ib = function (a) {
          a = (null == a.c && (a.c = em(a.d)), a.c);
          var b = this.i;
          null == b.c && (b.c = em(b.d));
          return F(a, b.c);
        };
        _.tS = function () {
          return this.j;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        _.e = 0;
        _.f = "";
        _.g = 0;
        var Fo = null,
          Go = null;
        v(202);
        function Ho() {
          Ho = l;
          Io = new Ki();
          Io.W("http://schema.org/ImageObject", (Jo(), Ko));
          Io.W("http://schema.org/Article", Lo);
          Io.W("http://schema.org/BlogPosting", Lo);
          Io.W("http://schema.org/NewsArticle", Lo);
          Io.W("http://schema.org/ScholarlyArticle", Lo);
          Io.W("http://schema.org/TechArticle", Lo);
          Io.W("http://schema.org/Person", Mo);
          Io.W("http://schema.org/Organization", No);
          Io.W("http://schema.org/Corporation", No);
          Io.W("http://schema.org/EducationalOrganization", No);
          Io.W("http://schema.org/GovernmentOrganization", No);
          Io.W("http://schema.org/NGO", No);
          Oo = new Ki();
          Oo.W("IMG", "SRC");
          Oo.W("AUDIO", "SRC");
          Oo.W("EMBED", "SRC");
          Oo.W("IFRAME", "SRC");
          Oo.W("SOURCE", "SRC");
          Oo.W("TRACK", "SRC");
          Oo.W("VIDEO", "SRC");
          Oo.W("A", "HREF");
          Oo.W("LINK", "HREF");
          Oo.W("AREA", "HREF");
          Oo.W("META", "CONTENT");
          Oo.W("TIME", "DATETIME");
          Oo.W("OBJECT", "DATA");
          Oo.W("DATA", "VALUE");
          Oo.W("METER", "VALUE");
        }
        function Po(a) {
          var b, c, d;
          b = new N();
          for (c = 0; c < a.c.b.length; c++) {
            (d = L(a.c, c)), d.d == (Jo(), Lo) && M(b, d);
          }
          return b;
        }
        function Qo(a, b, c) {
          var d, e, f, g, h;
          e = null;
          d = b.hasAttribute("ITEMSCOPE") && b.hasAttribute("ITEMTYPE");
          if (c) {
            var n;
            f = B(b, "ITEMPROP");
            f.length
              ? ((n = (pk(), fh(f, "\\s+"))),
                (f = 0 < n.length ? n : C(w(s, 1), k, 2, 4, [f])))
              : (f = fg(s, k, 2, 0, 4));
          } else {
            f = fg(s, k, 2, 0, 4);
          }
          if (d) {
            a: {
              var m;
              switch (
                ((m = B(b, "ITEMTYPE")), Io.Q(m) ? Io.S(m) : (Jo(), Ro)).b
              ) {
                case 0:
                  e = new So(b);
                  break;
                case 1:
                  e = new To(b);
                  break;
                case 2:
                  e = new Uo(b);
                  break;
                case 3:
                  e = new Vo(b);
                  break;
                case 4:
                  e = new Wo(b);
                  break;
                default:
                  e = null;
                  break a;
              }
            }
            !e ||
              e.d == (Jo(), Ro) ||
              (c && c.d == (Jo(), Ro) && 0 != f.length) ||
              (M(a.c, e), a.b.W(b, e));
          }
          if (0 < f.length && c.d != (Jo(), Ro) && (!e || e.d != (Jo(), Ro))) {
            for (a = 0; a < f.length; a++) {
              e
                ? c.b.Q(f[a]) && c.b.W(f[a], e)
                : ((d = c),
                  (m = f[a]),
                  (n =
                    ((g = ""),
                    (h = b.tagName),
                    Oo.Q(h) && (g = B(b, Oo.S(h))),
                    !g.length && (g = b.textContent),
                    g)),
                  d.c.Q(m) && !d.c.S(m).length && d.c.W(m, n));
            }
          }
        }
        function Xo(a, b) {
          Ho();
          this.c = new N();
          this.b = new Ki();
          this.d = b;
          var c, d, e, f, g;
          c = a.querySelectorAll("[ITEMPROP],[ITEMSCOPE]");
          Qo(this, a, null);
          for (e = 0; e < c.length; e++) {
            for (
              var h = (d = c[e]), n = void 0, m = void 0, m = null, n = d;
              n;

            ) {
              n = re(n);
              if (!n) {
                break;
              }
              if (n.hasAttribute("ITEMSCOPE") && n.hasAttribute("ITEMTYPE")) {
                this.b.Q(n) && (m = this.b.S(n));
                break;
              }
            }
            Qo(this, h, m);
          }
          c = a.querySelectorAll("A[rel\x3dauthor],LINK[rel\x3dauthor]");
          for (e = 0; e < c.length; e++) {
            (d = c[e]),
              !this.a.length &&
                (this.a =
                  ((f = ""),
                  (g = d.tagName),
                  (F(g, "A") || F(g, "LINK")) &&
                    F(B(d, "REL"), "author") &&
                    (f = d.textContent),
                  f));
          }
          Xl(0, this.d, "SchemaOrgParser.parse");
        }
        function Yo(a, b) {
          Ho();
          var c;
          c = a;
          a.length && b.length && (c += " ");
          return c + b;
        }
        q(28, 1, {}, Xo);
        _.a = "";
        var Oo, Io;
        v(28);
        function Zo(a, b) {
          return a.c.Q(b) ? a.c.S(b) : "";
        }
        function $o(a, b) {
          this.a = b;
          this.d = a;
          this.c = new Ki();
          this.b = new Ki();
          this.c.W("name", "");
          this.c.W("url", "");
          this.c.W("description", "");
          this.c.W("image", "");
        }
        q(52, 1, {});
        v(52);
        function ap(a, b) {
          var c, d, e, f;
          c = a.c.Q(b) ? a.c.S(b) : "";
          if (c.length) {
            return c;
          }
          (d = a.b.Q(b) ? a.b.S(b) : null) &&
            (d.d == (Jo(), Mo)
              ? (c =
                  ((e = d.c.Q("name") ? d.c.S("name") : ""),
                  e.length
                    ? e
                    : Yo(
                        d.c.Q("givenName") ? d.c.S("givenName") : "",
                        d.c.Q("familyName") ? d.c.S("familyName") : "",
                      )))
              : d.d == No &&
                (c =
                  ((f = d.c.Q("name") ? d.c.S("name") : ""),
                  f.length
                    ? f
                    : d.c.Q("legalName")
                      ? d.c.S("legalName")
                      : "")));
          return c;
        }
        function To(a) {
          $o.call(this, (Jo(), Lo), a);
          this.c.W("headline", "");
          this.c.W("publisher", "");
          this.c.W("copyrightHolder", "");
          this.c.W("copyrightYear", "");
          this.c.W("dateModified", "");
          this.c.W("datePublished", "");
          this.c.W("author", "");
          this.c.W("creator", "");
          this.c.W("articleSection", "");
          this.b.W("publisher", null);
          this.b.W("copyrightHolder", null);
          this.b.W("author", null);
          this.b.W("creator", null);
          this.b.W("associatedMedia", null);
          this.b.W("encoding", null);
        }
        q(187, 52, {}, To);
        v(187);
        function So(a) {
          $o.call(this, (Jo(), Ko), a);
          this.c.W("contentUrl", "");
          this.c.W("encodingFormat", "");
          this.c.W("caption", "");
          this.c.W("representativeOfPage", "");
          this.c.W("width", "");
          this.c.W("height", "");
        }
        q(186, 52, {}, So);
        v(186);
        function Vo(a) {
          $o.call(this, (Jo(), No), a);
          this.c.W("legalName", "");
        }
        q(189, 52, {}, Vo);
        v(189);
        function Uo(a) {
          $o.call(this, (Jo(), Mo), a);
          this.c.W("familyName", "");
          this.c.W("givenName", "");
        }
        q(188, 52, {}, Uo);
        v(188);
        function Jo() {
          Jo = l;
          Ko = new bp("IMAGE", 0);
          Lo = new bp("ARTICLE", 1);
          Mo = new bp("PERSON", 2);
          No = new bp("ORGANIZATION", 3);
          Ro = new bp("UNSUPPORTED", 4);
        }
        function bp(a, b) {
          te.call(this, a, b);
        }
        q(36, 9, { 3: 1, 13: 1, 9: 1, 36: 1 }, bp);
        var Lo,
          Ko,
          No,
          Mo,
          Ro,
          cp = Gc(36, function () {
            Jo();
            return C(w(cp, 1), ja, 36, 0, [Ko, Lo, Mo, No, Ro]);
          });
        function Wo(a) {
          $o.call(this, (Jo(), Ro), a);
        }
        q(190, 52, {}, Wo);
        v(190);
        function cn(a, b) {
          this.b = a;
          this.c = b;
        }
        q(157, 1, {}, cn);
        _.wb = function () {
          var a;
          !this.a && (this.a = new Xo(this.b, this.c));
          a = Po(this.a);
          if (0 == a.b.length) {
            a = null;
          } else {
            a = (A(0, a.b.length), a.b[0]);
            var b, c;
            b = new Xm();
            b.d = a.c.Q("datePublished") ? a.c.S("datePublished") : "";
            b.c = a.c.Q("dateModified") ? a.c.S("dateModified") : "";
            b.e = a.c.Q("articleSection") ? a.c.S("articleSection") : "";
            c = ap(a, "author");
            !c.length && (c = ap(a, "creator"));
            b.a = c.length ? C(w(s, 1), k, 2, 4, [c]) : fg(s, k, 2, 0, 4);
            a = b;
          }
          return a;
        };
        _.xb = function () {
          var a, b;
          !this.a && (this.a = new Xo(this.b, this.c));
          b = "";
          a = Po(this.a);
          0 != a.b.length &&
            ((a = (A(0, a.b.length), a.b[0])),
            (b = ap(a, "author")),
            !b.length && (b = ap(a, "creator")));
          return b.length ? b : this.a.a;
        };
        _.yb = function () {
          var a;
          !this.a && (this.a = new Xo(this.b, this.c));
          a = Po(this.a);
          0 == a.b.length
            ? (a = "")
            : ((a = (A(0, a.b.length), a.b[0])),
              (a = Yo(
                a.c.Q("copyrightYear") ? a.c.S("copyrightYear") : "",
                ap(a, "copyrightHolder"),
              )),
              (a = a.length ? "Copyright " + a : a));
          return a;
        };
        _.zb = function () {
          var a;
          !this.a && (this.a = new Xo(this.b, this.c));
          a = Po(this.a);
          return 0 == a.b.length
            ? ""
            : Zo((A(0, a.b.length), a.b[0]), "description");
        };
        _.Ab = function () {
          var a, b, c, d, e, f, g, h;
          !this.a && (this.a = new Xo(this.b, this.c));
          g = new N();
          b = Po(this.a);
          c = null;
          for (d = 0; d < b.b.length; d++) {
            a = (A(d, b.b.length), b.b[d]);
            if (
              !c &&
              (c =
                ((e = a.b.Q("associatedMedia")
                  ? a.b.S("associatedMedia")
                  : null),
                !e && (e = a.b.Q("encoding") ? a.b.S("encoding") : null),
                e && e.d == (Jo(), Ko) ? e : null))
            ) {
              continue;
            }
            var n = (f = void 0),
              n = a.c.Q("image") ? a.c.S("image") : "";
            n.length ? ((f = new Ym()), (f.e = n), (a = f)) : (a = null);
            a && (g.b[g.b.length] = a);
          }
          d = this.a;
          b = new N();
          for (a = 0; a < d.c.b.length; a++) {
            (e = L(d.c, a)), e.d == (Jo(), Ko) && M(b, e);
          }
          d = !1;
          for (e = 0; e < b.b.length; e++) {
            (f = (A(e, b.b.length), b.b[e])),
              (a =
                ((h = new Ym()),
                (h.e = f.c.Q("contentUrl") ? f.c.S("contentUrl") : ""),
                !h.e.length && (h.e = f.c.Q("url") ? f.c.S("url") : ""),
                (h.d = f.c.Q("encodingFormat") ? f.c.S("encodingFormat") : ""),
                (h.a = f.c.Q("caption") ? f.c.S("caption") : ""),
                (h.f = $m(f.c.Q("width") ? f.c.S("width") : "")),
                (h.b = $m(f.c.Q("height") ? f.c.S("height") : "")),
                h)),
              f == c ||
              (!d &&
                F(
                  f.c.Q("representativeOfPage")
                    ? f.c.S("representativeOfPage")
                    : "",
                  "true",
                ))
                ? ((d = !0), ne(0, g.b.length), g.b.splice(0, 0, a))
                : (g.b[g.b.length] = a);
          }
          return mi(g, fg(Zm, ia, 27, g.b.length, 0));
        };
        _.Bb = function () {
          var a, b;
          !this.a && (this.a = new Xo(this.b, this.c));
          b = "";
          a = Po(this.a);
          0 != a.b.length &&
            ((a = (A(0, a.b.length), a.b[0])),
            (b = ap(a, "publisher")),
            !b.length && (b = ap(a, "copyrightHolder")));
          return b;
        };
        _.Cb = function () {
          var a, b, c;
          !this.a && (this.a = new Xo(this.b, this.c));
          c = "";
          var d = Po(this.a),
            d = new ni(d),
            e = new dp();
          a = ng(d.b, d.b.length);
          b = a.length;
          var f, g;
          !e && (e = (qi(), qi(), ri));
          f = b - 0;
          g = C(w(Jc, 1), ia, 1, 3, [Pg(0), Pg(b)]);
          if (!(0 <= f)) {
            throw new Mg(oe("%s \x3e %s", g));
          }
          g = og(a, f);
          var h = Tg(a.length - 0, f),
            n = (f = 0),
            m,
            u,
            p,
            x,
            D;
          if (null == a) {
            throw new If("src");
          }
          if (null == g) {
            throw new If("dest");
          }
          x = Jb(a);
          u = Jb(g);
          Vd(0 != (x.f & 4), "srcType is not an array");
          Vd(0 != (u.f & 4), "destType is not an array");
          p = x.c;
          m = u.c;
          Vd(
            0 != (p.f & 1) ? p == m : 0 == (m.f & 1),
            "Array types don't match",
          );
          D = a.length;
          m = g.length;
          if (0 > f || 0 > n || 0 > h || f + h > D || n + h > m) {
            throw new vg();
          }
          if ((0 != (p.f & 1) && 0 == (p.f & 4)) || x == u) {
            0 < h && sg(a, f, g, n, h, !0);
          } else {
            if ($b(a) === $b(g) && f < n) {
              for (f += h, h = n + h; h-- > n; ) {
                g[h] = a[--f];
              }
            } else {
              for (h = n + h; n < h; ) {
                g[n++] = a[f++];
              }
            }
          }
          oi(g, a, 0, b, -0, e);
          e = d.b.length;
          for (b = 0; b < e; b++) {
            li(d, b, a[b]);
          }
          for (a = 0; a < d.b.length && !c.length; a++) {
            (b = (A(a, d.b.length), d.b[a])),
              (c = b.c.Q("headline") ? b.c.S("headline") : ""),
              !c.length && (c = b.c.Q("name") ? b.c.S("name") : "");
          }
          return c;
        };
        _.Db = function () {
          !this.a && (this.a = new Xo(this.b, this.c));
          return 0 == Po(this.a).b.length ? "" : "Article";
        };
        _.Eb = function () {
          var a;
          !this.a && (this.a = new Xo(this.b, this.c));
          a = Po(this.a);
          return 0 == a.b.length ? "" : Zo((A(0, a.b.length), a.b[0]), "url");
        };
        _.Fb = function () {
          return !1;
        };
        v(157);
        function dp() {}
        q(158, 1, {}, dp);
        _.fb = function (a, b) {
          var c, d;
          c = Gm(a.a);
          d = Gm(b.a);
          return c > d ? -1 : c < d ? 1 : 0;
        };
        v(158);
        function pk() {
          pk = l;
          qk = new xl();
        }
        function fm(a) {
          pk();
          return /\d/.test(a);
        }
        function mo(a) {
          pk();
          return decodeURIComponent(a);
        }
        function no(a, b) {
          pk();
          return a.replace(RegExp(b, "gi"), "");
        }
        function Eo(a) {
          pk();
          return /^\d+$/.test(a);
        }
        function ep(a) {
          pk();
          return !/\S/.test(a);
        }
        function Sm(a, b) {
          pk();
          return a.join(b);
        }
        function Lm(a) {
          pk();
          return a.split(",");
        }
        function rk(a) {
          pk();
          return a.trim();
        }
        function Ll(a) {
          pk();
          if (null == a || !a.length) {
            return "";
          }
          a = no(a, fp);
          return (a = a.replace(RegExp("\\s*", "gi"), ""));
        }
        function Pn(a) {
          pk();
          return a.length && Eo(a) ? $m(a) : -1;
        }
        var fp = "\x3c[^\x3e]+\x3e",
          qk;
        function zl() {}
        q(122, 1, {}, zl);
        _.Jb = function (a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF]\S*)/g)) ? a.length : 0;
        };
        v(122);
        function xl() {}
        q(88, 1, {}, xl);
        _.Jb = function (a) {
          var b = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g),
            c = b ? b.length : 0,
            b = a.match(/([\u3040-\uA4CF])/g);
          return (c += Math.ceil(0.55 * (b ? b.length : 0)));
        };
        v(88);
        function yl() {}
        q(121, 1, {}, yl);
        _.Jb = function (a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g))
            ? a.length
            : 0;
        };
        v(121);
        function gp() {
          gp = l;
          hp = new Ki();
          hp.W("COLGROUP", (Sf(), xg));
          hp.W("COL", xg);
          hp.W("TH", zg);
          ip = new Ki();
          ip.W("EMBED", xg);
          ip.W("OBJECT", xg);
          ip.W("APPLET", xg);
          ip.W("IFRAME", xg);
          jp = new Li();
          O(jp, "grid");
          O(jp, "treegrid");
          kp = new Li();
          O(kp, "gridcell");
          O(kp, "columnheader");
          O(kp, "row");
          O(kp, "rowgroup");
          O(kp, "rowheader");
          lp = new Li();
          O(lp, "application");
          O(lp, "banner");
          O(lp, "complementary");
          O(lp, "contentinfo");
          O(lp, "form");
          O(lp, "main");
          O(lp, "navigation");
          O(lp, "search");
        }
        function mp(a, b) {
          var c, d, e;
          for (d = new I(a); d.b < d.d.M(); ) {
            if (
              ((c = (z(d.b < d.d.M()), d.d._((d.c = d.b++)))),
              (e = c.tagName),
              b.Q(e))
            ) {
              return !b.S(e).a || np(c);
            }
          }
          return !1;
        }
        function np(a) {
          a = a.innerText;
          return !!a.length && !ep(a);
        }
        function op(a, b, c) {
          2 <= V && T(a + b + " -\x3e " + c);
          return c;
        }
        function pp(a) {
          gp();
          var b, c, d, e, f, g, h, n;
          qp();
          for (f = re(a); f; ) {
            if (F("INPUT", f.tagName) || F(B(f, "contenteditable"), "true")) {
              return op(rp, "", (sp(), tp));
            }
            f = re(f);
          }
          f = B(a, "role").toLowerCase();
          if ("presentation" === f) {
            return op(up, "_" + f, (sp(), tp));
          }
          if (P(jp, f) || P(lp, f)) {
            return op(up, "_" + f, (sp(), vp));
          }
          f = new N();
          g = a.getElementsByTagName("*");
          if (0 < a.getElementsByTagName("TABLE").length) {
            for (e = 0; e < g.length; e++) {
              for (c = g[e], d = re(c); d; ) {
                if (F("TABLE", d.tagName)) {
                  d == a && (f.b[f.b.length] = c);
                  break;
                }
                d = re(d);
              }
            }
          } else {
            for (e = 0; e < g.length; e++) {
              M(f, g[e]);
            }
          }
          for (g = new I(f); g.b < g.d.M(); ) {
            if (
              ((b = (z(g.b < g.d.M()), g.d._((g.c = g.b++)))),
              (c = B(b, "role").toLowerCase()),
              P(kp, c) || P(lp, c))
            ) {
              return op(wp, "_" + c, (sp(), vp));
            }
          }
          if (E(B(a, "datatable"), "0")) {
            return op(xp, "", (sp(), tp));
          }
          if (0 < a.getElementsByTagName("TABLE").length) {
            return op(yp, "", (sp(), tp));
          }
          g = a.rows;
          if (1 >= g.length) {
            return op(zp, "", (sp(), tp));
          }
          c = null;
          for (d = b = 0; d < g.length; d++) {
            (e = g[d].cells), e.length > b && ((b = e.length), (c = e));
          }
          d = c;
          if (!d || 1 >= d.length) {
            return op(Ap, "", (sp(), tp));
          }
          if (((c = a.caption) && np(c)) || a.tHead || a.tFoot || mp(f, hp)) {
            return op(Bp, "", (sp(), vp));
          }
          c = new N();
          for (e = new I(f); e.b < e.d.M(); ) {
            (b = (z(e.b < e.d.M()), e.d._((e.c = e.b++)))),
              F("TD", b.tagName) && (c.b[c.b.length] = b);
          }
          for (e = new I(c); e.b < e.d.M(); ) {
            b = (z(e.b < e.d.M()), e.d._((e.c = e.b++)));
            if (
              b.hasAttribute("abbr") ||
              b.hasAttribute("headers") ||
              b.hasAttribute("scope")
            ) {
              return op(Cp, "", (sp(), vp));
            }
            b = b.getElementsByTagName("*");
            if (1 == b.length && F("ABBR", b[0].tagName)) {
              return op(Dp, "", (sp(), vp));
            }
          }
          e = a.ownerDocument.documentElement;
          b = (e.offsetWidth || 0) | 0;
          if (0 < b && ((a.offsetWidth || 0) | 0) > 0.95 * b) {
            n = !1;
            b = e.getElementsByTagName("META");
            for (h = 0; h < b.length && !n; h++) {
              (n = b[h]), (n = F(n.name, "viewport"));
            }
            if (!n) {
              return op(Ep, "", (sp(), tp));
            }
          }
          if (a.hasAttribute("summary")) {
            return op(Fp, "", (sp(), vp));
          }
          if (5 <= d.length) {
            return op(Gp, "", (sp(), vp));
          }
          for (d = new I(c); d.b < d.d.M(); ) {
            if (
              ((b = (z(d.b < d.d.M()), d.d._((d.c = d.b++)))),
              (b = kl(b).borderStyle),
              b.length && "none" !== b && "hidden" !== b)
            ) {
              return op(Hp, "_" + b, (sp(), vp));
            }
          }
          h = null;
          for (b = 0; b < g.length; b++) {
            if (
              ((d = getComputedStyle(g[b], null).backgroundColor), null == h)
            ) {
              h = d;
            } else {
              if (!F(h, d)) {
                return op(Ip, "", (sp(), vp));
              }
            }
          }
          if (20 <= g.length) {
            return op(Jp, "", (sp(), vp));
          }
          if (10 >= c.b.length) {
            return op(Kp, "", (sp(), tp));
          }
          if (mp(f, ip)) {
            return op(Lp, "", (sp(), tp));
          }
          f = (e.offsetHeight || 0) | 0;
          return 0 < f && ((a.offsetHeight || 0) | 0) > 0.9 * f
            ? op(Mp, "", (sp(), tp))
            : op(Np, "", (sp(), vp));
        }
        var lp, kp, jp, hp, ip;
        function qp() {
          qp = l;
          rp = new Op("INSIDE_EDITABLE_AREA", 0);
          up = new Op("ROLE_TABLE", 1);
          wp = new Op("ROLE_DESCENDANT", 2);
          xp = new Op("DATATABLE_0", 3);
          Bp = new Op("CAPTION_THEAD_TFOOT_COLGROUP_COL_TH", 4);
          Cp = new Op("ABBR_HEADERS_SCOPE", 5);
          Dp = new Op("ONLY_HAS_ABBR", 6);
          Ep = new Op("MORE_95_PERCENT_DOC_WIDTH", 7);
          Fp = new Op("SUMMARY", 8);
          yp = new Op("NESTED_TABLE", 9);
          zp = new Op("LESS_EQ_1_ROW", 10);
          Ap = new Op("LESS_EQ_1_COL", 11);
          Gp = new Op("MORE_EQ_5_COLS", 12);
          Hp = new Op("CELLS_HAVE_BORDER", 13);
          Ip = new Op("DIFFERENTLY_COLORED_ROWS", 14);
          Jp = new Op("MORE_EQ_20_ROWS", 15);
          Kp = new Op("LESS_EQ_10_CELLS", 16);
          Lp = new Op("EMBED_OBJECT_APPLET_IFRAME", 17);
          Mp = new Op("MORE_90_PERCENT_DOC_HEIGHT", 18);
          Np = new Op("DEFAULT", 19);
          Pp = new Op("UNKNOWN", 20);
        }
        function Op(a, b) {
          te.call(this, a, b);
        }
        q(16, 9, { 3: 1, 13: 1, 9: 1, 16: 1 }, Op);
        var Cp,
          Bp,
          Hp,
          xp,
          Np,
          Ip,
          Lp,
          rp,
          Kp,
          Ap,
          zp,
          Mp,
          Ep,
          Jp,
          Gp,
          yp,
          Dp,
          wp,
          up,
          Fp,
          Pp,
          Qp = Gc(16, function () {
            qp();
            return C(w(Qp, 1), ja, 16, 0, [
              rp,
              up,
              wp,
              xp,
              Bp,
              Cp,
              Dp,
              Ep,
              Fp,
              yp,
              zp,
              Ap,
              Gp,
              Hp,
              Ip,
              Jp,
              Kp,
              Lp,
              Mp,
              Np,
              Pp,
            ]);
          });
        function sp() {
          sp = l;
          vp = new Rp("DATA", 0);
          tp = new Rp("LAYOUT", 1);
        }
        function Rp(a, b) {
          te.call(this, a, b);
        }
        q(61, 9, { 3: 1, 13: 1, 9: 1, 61: 1 }, Rp);
        var vp,
          tp,
          Sp = Gc(61, function () {
            sp();
            return C(w(Sp, 1), ja, 61, 0, [vp, tp]);
          });
        function Tp(a, b) {
          var c;
          c = Up(b);
          a.appendChild(c);
          return c;
        }
        function Up(a) {
          var b;
          b = a.cloneNode(!1);
          1 == a.nodeType &&
            ((a = kl(a).direction),
            !a.length && (a = "auto"),
            b.setAttribute("dir", a));
          return b;
        }
        function Vp(a, b) {
          var c;
          c = a.parentNode;
          c || ((c = Up(b)), c.appendChild(a));
          return c;
        }
        function Wp(a) {
          return Zk(L(a.j, L(a.i, 0).a));
        }
        function Xp(a, b) {
          return P(a.b, b);
        }
        function Pk(a, b) {
          a.g += "\n";
          a.g += b.g;
          a.d += b.d;
          a.e += b.e;
          a.c = 0 == a.d ? 0 : a.e / a.d;
          a.a |= b.a;
          ii(a.i, b.i);
          a.b.J(b.b);
          a.f = Tg(a.f, b.f);
        }
        function Jk(a, b) {
          if (b == a.a) {
            return !1;
          }
          a.a = b;
          return !0;
        }
        function Yp(a) {
          var b;
          b =
            "[" +
            (L(a.j, L(a.i, 0).a).j +
              "-" +
              L(a.j, L(a.i, a.i.b.length - 1).a).j +
              ";");
          b += "tl\x3d" + a.f + ";";
          b += "nw\x3d" + a.d + ";";
          b += "ld\x3d" + a.c + ";";
          b =
            b +
            "]\t" +
            ((a.a ? "\u001b[0;32mCONTENT" : "\u001b[0;35mboilerplate") +
              "\u001b[0m,");
          b += "\u001b[1;30m" + sh(new Tj(a.b)) + "\u001b[0m";
          return (b += "\n" + a.g);
        }
        function Zp(a, b) {
          var c, d;
          this.j = a;
          this.i = new N();
          M(this.i, Pg(b));
          c = L(this.j, b);
          this.b = ((d = c.e), (c.e = new Li()), d);
          this.d = c.i;
          this.e = c.g;
          this.f = c.n;
          this.g = c.o;
          this.c = 0 == this.d ? 0 : this.e / this.d;
        }
        q(80, 1, {}, Zp);
        _.tS = function () {
          return Yp(this);
        };
        _.a = !1;
        _.c = 0;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        v(80);
        function $k(a) {
          var b;
          for (a = new I(a.a); a.b < a.d.M(); ) {
            b = (z(a.b < a.d.M()), a.d._((a.c = a.b++)));
            var c = void 0,
              d = void 0,
              c = void 0;
            if (b.a) {
              for (d = new I(b.i); d.b < d.d.M(); ) {
                (c = (z(d.b < d.d.M()), d.d._((d.c = d.b++)))),
                  (c = L(b.j, c.a)),
                  (c.p = !0),
                  P(b.b, "de.l3s.boilerpipe/TITLE") &&
                    O(c.e, "de.l3s.boilerpipe/TITLE");
              }
            }
          }
        }
        function $p(a) {
          this.a = a;
        }
        q(94, 1, {}, $p);
        v(94);
        function aq() {
          aq = l;
          bq = new Li();
          O(bq, "IMG");
          O(bq, "PICTURE");
          O(bq, "FIGURE");
          O(bq, "SPAN");
          O(bq, "DIV");
          cq = C(
            w(s, 1),
            k,
            2,
            4,
            "data-src data-original datasrc data-url original data-original-src .src".split(
              " ",
            ),
          );
        }
        function dq(a) {
          var b;
          b = $doc.createElement("FIGCAPTION");
          a = rk(a.innerText);
          b.textContent = a || "";
          return b;
        }
        function eq(a, b) {
          var c, d, e;
          if (!P(bq, b.tagName)) {
            return null;
          }
          a.b = "";
          c = "IMG" == b.tagName ? b : Hm(b, "IMG");
          if ("FIGURE" === b.tagName) {
            d = Hm(b, "PICTURE");
            !d && (d = Hm(b, "IMG"));
            if (!d) {
              return null;
            }
            fq(a, c);
            (c = Hm(b, "FIGCAPTION"))
              ? ((e = c.querySelectorAll("A[HREF]")),
                (c = 0 < e.length ? c : dq(c)))
              : (c = dq(b));
            return new gq(d, a.c, a.a, a.b, c);
          }
          if ("SPAN" === b.tagName) {
            if (-1 == B(b, "class").indexOf("lazy-image-placeholder")) {
              return null;
            }
            c = $doc.createElement("img");
            a.b = B(b, "data-src");
            a.c = $m(B(b, "data-width"));
            a.a = $m(B(b, "data-height"));
            d = B(b, "data-srcset");
            c.setAttribute("srcset", d);
            return new hq(c, a.c, a.a, a.b);
          }
          if ("DIV" === b.tagName) {
            if (-1 == B(b, "class").indexOf("sgui-img-box")) {
              return null;
            }
            a.b = B(b, "data-src");
            if (!a.b.length) {
              return null;
            }
            c = $doc.createElement("img");
            return new hq(c, 0, 0, a.b);
          }
          fq(a, c);
          return new hq(b, a.c, a.a, a.b);
        }
        function fq(a, b) {
          var c, d, e, f;
          d = cq;
          e = 0;
          for (
            f = d.length;
            e < f && ((c = d[e]), (a.b = B(b, c)), !a.b.length);
            ++e
          ) {}
          a.b.length
            ? ((a.c = 0), (a.a = 0))
            : ((a.b = b.src), (a.c = b.width), (a.a = b.height));
          2 <= V && T("Extracted WebImage: " + a.b);
        }
        function iq() {
          aq();
        }
        q(168, 1, {}, iq);
        _.Kb = function (a) {
          return eq(this, a);
        };
        _.Lb = function () {
          return bq;
        };
        _.a = 0;
        _.c = 0;
        var cq, bq;
        v(168);
        function jq() {
          jq = l;
          kq = new Li();
          O(kq, "BLOCKQUOTE");
          O(kq, "IFRAME");
        }
        function lq(a) {
          var b;
          if (-1 == B(a, "class").indexOf("twitter-tweet")) {
            return null;
          }
          b = a.getElementsByTagName("a");
          if (0 == b.length) {
            return null;
          }
          b = b[b.length - 1];
          if (!Om(b.href, "twitter.com")) {
            return null;
          }
          a: {
            var c;
            c = fh(qe(b, "pathname"), "/");
            for (b = c.length - 1; 0 <= b; b--) {
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            }
            b = null;
          }
          return null == b ? null : new mq(a, "twitter", b, null);
        }
        function nq(a) {
          var b;
          if ("IFRAME" !== a.tagName || a.src.length) {
            return null;
          }
          b = a.contentWindow.document;
          if (!b) {
            return null;
          }
          b = b.getElementsByTagName("blockquote");
          if (1 > b.length) {
            return null;
          }
          b = B(b[0], "data-tweet-id");
          return b.length ? new mq(a, "twitter", b, null) : null;
        }
        function oq() {
          jq();
        }
        q(169, 1, {}, oq);
        _.Kb = function (a) {
          var b;
          a && P(kq, a.tagName)
            ? ((b = null),
              "BLOCKQUOTE" === a.tagName
                ? (b = lq(a))
                : "IFRAME" === a.tagName && (b = nq(a)),
              b &&
                2 <= V &&
                (T("Twitter embed extracted:"), T("    ID: " + b.b)),
              (a = b))
            : (a = null);
          return a;
        };
        _.Lb = function () {
          return kq;
        };
        var kq;
        v(169);
        function pq() {
          pq = l;
          qq = new Li();
          O(qq, "IFRAME");
        }
        function rq(a) {
          var b, c;
          if (!a || !P(qq, a.tagName)) {
            return null;
          }
          c = a.src;
          if (!Om(c, "player.vimeo.com")) {
            return null;
          }
          b = $doc.createElement("a");
          b.href = c;
          c = qe(b, "pathname");
          b = Tm(hh(qe(b, "search"), 1));
          a: {
            var d;
            d = fh(c, "/");
            for (c = d.length - 1; 0 <= c && "video" !== d[c]; c--) {
              if (0 < d[c].length) {
                c = d[c];
                break a;
              }
            }
            c = null;
          }
          if (null == c) {
            return null;
          }
          2 <= V && (T("Vimeo embed extracted:"), T("    ID:    " + c));
          return new mq(a, "vimeo", c, b);
        }
        function sq() {
          pq();
        }
        q(170, 1, {}, sq);
        _.Kb = function (a) {
          return rq(a);
        };
        _.Lb = function () {
          return qq;
        };
        var qq;
        v(170);
        function tq() {
          tq = l;
          uq = new Li();
          O(uq, "IFRAME");
          O(uq, "OBJECT");
        }
        function vq(a) {
          var b, c, d;
          if (!a || !P(uq, a.tagName)) {
            return null;
          }
          d = null;
          "IFRAME" === a.tagName
            ? (d = a.src)
            : "OBJECT" === a.tagName &&
              (E(B(a, "type"), "application/x-shockwave-flash")
                ? (d = B(a, "data"))
                : ((b = a.querySelectorAll('param[name\x3d"movie"]')),
                  1 == b.length && (d = B(b[0], "value"))));
          if (null == d || !Om(d, "youtube.com")) {
            return null;
          }
          c = d.indexOf("?");
          0 > c && (c = d.indexOf("\x26"));
          0 > c && (c = d.length);
          b = d.substr(0, c);
          d = Tm(d.substr(c + 1, d.length - (c + 1)));
          a: {
            c = fh(b, "/");
            for (b = c.length - 1; 0 <= b && "embed" !== c[b]; b--) {
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            }
            b = null;
          }
          if (null == b) {
            return null;
          }
          2 <= V && (T("YouTube embed extracted:"), T("    ID:    " + b));
          return new mq(a, "youtube", b, d);
        }
        function wq() {
          tq();
        }
        q(171, 1, {}, wq);
        _.Kb = function (a) {
          return vq(a);
        };
        _.Lb = function () {
          return uq;
        };
        var uq;
        v(171);
        function Dk(a, b, c) {
          if (!(1 > V)) {
            if (b) {
              T(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c " +
                  c +
                  " \x3e\x3e\x3e\x3e\x3e",
              );
              if (!(1 > V)) {
                b = "";
                for (c = new I(a.a); c.b < c.d.M(); ) {
                  (a = (z(c.b < c.d.M()), c.d._((c.c = c.b++)))),
                    (b += Yp(a) + "\n");
                }
                T(b);
              }
              T(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c                \x3e\x3e\x3e\x3e\x3e",
              );
            } else {
              T("\u001b[0;31m~~~~~ No Changes: " + c + " ~~~~~");
            }
          }
        }
        function Ek() {
          Ek = l;
          Gk = new Li();
          O(Gk, "\u67e5\u770b\u5168\u6587");
          O(Gk, "\u5c55\u5f00\u5168\u6587");
          O(Gk, "\u5c55\u5f00\u5168\u90e8");
          O(Gk, "\u6700\u4f73\u7b54\u6848");
          O(Gk, "\u70b9\u51fb\u5c55\u5f00\u5168\u6587");
          O(Gk, "\u76f8\u5173\u63a8\u8350");
          O(Gk, "\u76f8\u5173\u641c\u7d22");
          O(Gk, "\u7cbe\u5f69\u63a8\u8350");
          Fk = RegExp(
            "(^(comments|\u00a9 reuters|please rate this|post a comment|\\d+\\s+(comments|users responded in))|what you think\\.\\.\\.|add your comment|add comment|reader views|have your say|reader comments|r\u00e4tta artikeln|^thanks for your comments - this feedback is now closed$)",
            "i",
          );
        }
        var Fk, Gk;
        function Rk() {
          Rk = l;
          Sk = new xq(!1);
          Vk = new xq(!0);
        }
        function Qk(a, b) {
          var c, d, e, f, g;
          c = b.a;
          if (2 > c.b.length) {
            return !1;
          }
          d = !1;
          g = (A(0, c.b.length), c.b[0]);
          for (f = new Mh(c, 1); f.b < f.d.M(); ) {
            (c = (z(f.b < f.d.M()), f.d._((f.c = f.b++)))),
              c.a && g.a
                ? ((e =
                    L(c.j, L(c.i, 0).a).j -
                    L(g.j, L(g.i, g.i.b.length - 1).a).j -
                    1),
                  1 >= e
                    ? ((e = !0),
                      a.a
                        ? g.f != c.f && (e = !1)
                        : P(c.b, "BOILERPLATE_HEADING_FUSED") && (e = !1),
                      P(g.b, "STRICTLY_NOT_CONTENT") !=
                        P(c.b, "STRICTLY_NOT_CONTENT") && (e = !1),
                      P(g.b, "de.l3s.boilerpipe/TITLE") !=
                        P(c.b, "de.l3s.boilerpipe/TITLE") && (e = !1),
                      !g.a &&
                        P(g.b, "de.l3s.boilerpipe/LI") &&
                        !P(c.b, "de.l3s.boilerpipe/LI") &&
                        (e = !1),
                      e ? (Pk(g, c), Lh(f), (d = !0)) : (g = c))
                    : (g = c))
                : (g = c);
          }
          return d;
        }
        function xq(a) {
          this.a = a;
        }
        q(99, 1, {}, xq);
        _.tS = function () {
          return bc(yq), yq.n + ": postFiltering\x3d" + this.a;
        };
        _.a = !1;
        var Vk,
          Sk,
          yq = v(99);
        function zq() {
          zq = l;
          Ik = RegExp("[\\?\\!\\.\\-\\:]+", "g");
        }
        function Aq(a, b, c) {
          var d, e;
          e = fh(b, c);
          if (1 != e.length) {
            for (b = 0; b < e.length; b++) {
              (d = e[b]),
                -1 == d.indexOf(".com") &&
                  ((c = (pk(), qk.Jb(d))), 4 <= c && O(a, d));
            }
          }
        }
        function Bq(a, b) {
          var c, d, e, f, g, h;
          h = fh(a, b);
          if (1 == h.length) {
            return null;
          }
          d = 0;
          e = "";
          for (c = 0; c < h.length; c++) {
            if (
              ((g = h[c]),
              -1 == g.indexOf(".com") &&
                ((f = (pk(), qk.Jb(g))), f > d || g.length > e.length))
            ) {
              (d = f), (e = g);
            }
          }
          return 0 == e.length ? null : jh(e);
        }
        function Hk(a) {
          zq();
          var b;
          if (a) {
            for (this.a = new Li(), a = ei(a, 0); a.b != a.d.c; ) {
              b = (z(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c);
              var c = void 0;
              b = Yg(b);
              b = Zg(b, "'", "");
              b = jh(b).toLowerCase();
              0 != b.length &&
                O(this.a, b) &&
                ((c = Bq(b, "[ ]*[\\|\u00bb|-][ ]*")),
                null != c && O(this.a, c),
                (c = Bq(b, "[ ]*[\\|\u00bb|:][ ]*")),
                null != c && O(this.a, c),
                (c = Bq(b, "[ ]*[\\|\u00bb|:\\(\\)][ ]*")),
                null != c && O(this.a, c),
                (c = Bq(b, "[ ]*[\\|\u00bb|:\\(\\)\\-][ ]*")),
                null != c && O(this.a, c),
                (c = Bq(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-][ ]*")),
                null != c && O(this.a, c),
                (c = Bq(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-\u00a0][ ]*")),
                null != c && O(this.a, c),
                Aq(this.a, b, "[ ]+[\\|][ ]+"),
                Aq(this.a, b, "[ ]+[\\-][ ]+"),
                O(this.a, bh(b, " - [^\\-]+$")),
                O(this.a, bh(b, "^[^\\-]+ - ")));
            }
          } else {
            this.a = null;
          }
        }
        q(172, 1, {}, Hk);
        var Ik;
        v(172);
        function Wk() {
          Wk = l;
          Xk = new Cq(!0);
        }
        function Cq(a) {
          this.a = a;
        }
        q(101, 1, {}, Cq);
        _.a = !1;
        var Xk;
        v(101);
        function Dq(a, b, c) {
          b = L(a.d, b);
          c = L(a.d, c);
          return a.c ||
            (b.nodeType != c.nodeType
              ? 0
              : 1 != b.nodeType || b.nodeName === c.nodeName)
            ? b.parentNode == c.parentNode
            : !1;
        }
        function Nk(a, b) {
          var c, d, e, f, g, h, n, m, u, p;
          a.g = b.a;
          if (2 > a.g.b.length) {
            return !1;
          }
          d = a.g;
          e = $doc.documentElement;
          h = new N();
          for (f = 0; f < d.b.length; ++f) {
            g =
              f + 1 == d.b.length ? e : Wp((A(f + 1, d.b.length), d.b[f + 1]));
            0 == f
              ? (n = e)
              : ((n = (A(f - 1, d.b.length), d.b[f - 1])),
                (n = Yk(L(n.j, L(n.i, n.i.b.length - 1).a))));
            u = n;
            n = Wp((A(f, d.b.length), d.b[f]));
            for (m = n.parentNode; !m.contains(u) && !m.contains(g); ) {
              (n = m), (m = m.parentNode);
            }
            h.b[h.b.length] = n;
          }
          a.d = h;
          h = fg(Eq, { 3: 1 }, 0, a.g.b.length, 7);
          m = n = 0;
          d = fg(Eq, { 3: 1 }, 0, a.g.b.length, 7);
          f = e = 0;
          g = !1;
          for (u = 0; u < a.g.b.length; u++) {
            if (
              (!a.b && Xp(L(a.g, u), "de.l3s.boilerpipe/TITLE")) ||
              (!a.a && Xp(L(a.g, u), "de.l3s.boilerpipe/HEADING"))
            ) {
              (n = m), (e = f);
            } else {
              if (
                L(a.g, u).a &&
                !Xp(L(a.g, u), "STRICTLY_NOT_CONTENT") &&
                !Xp(L(a.g, u), "de.l3s.boilerpipe/TITLE")
              ) {
                for (h[m++] = u, p = e; p < f; p++) {
                  (c = d[p]),
                    u - c > a.e
                      ? p == e && ++e
                      : Dq(a, u, c) &&
                        ((g = !0), Jk(L(a.g, c), !0), (d[p] = d[e++]));
                }
              } else {
                if (
                  L(a.g, u).c <= a.f &&
                  !L(a.g, u).a &&
                  !Xp(L(a.g, u), "STRICTLY_NOT_CONTENT") &&
                  !Xp(L(a.g, u), "de.l3s.boilerpipe/TITLE")
                ) {
                  for (p = n; p < m; p++) {
                    if (((c = h[p]), u - c > a.e)) {
                      p == n && ++n;
                    } else {
                      if (Dq(a, u, c)) {
                        g = !0;
                        Jk(L(a.g, u), !0);
                        h[p] = h[n++];
                        break;
                      }
                    }
                  }
                  p == m ? (d[f++] = u) : (h[m++] = u);
                }
              }
            }
          }
          return g;
        }
        function Fq(a, b, c, d, e) {
          this.b = a;
          this.a = b;
          this.c = c;
          this.f = d;
          this.e = e;
        }
        q(174, 1, {}, Fq);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.e = 0;
        _.f = 0;
        v(174);
        function Mk() {
          var a = new Gq();
          a.a = !0;
          return a;
        }
        function Ok(a) {
          return new Fq(a.b, a.a, a.c, a.e, a.d);
        }
        function Gq() {
          this.c = this.a = this.b = !1;
          this.d = this.e = 0;
        }
        q(98, 1, {}, Gq);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.d = 0;
        _.e = 0;
        v(98);
        function Tk() {
          Tk = l;
          Uk = new Hq("de.l3s.boilerpipe/TITLE");
        }
        function Hq(a) {
          this.a = a;
        }
        q(100, 1, {}, Hq);
        var Uk;
        v(100);
        function Kk() {
          Kk = l;
          Lk = new Iq(C(w(s, 1), k, 2, 4, ["STRICTLY_NOT_CONTENT"]));
        }
        function Iq(a) {
          this.a = a;
        }
        q(173, 1, {}, Iq);
        var Lk;
        v(173);
        function Jl(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[1] = b;
        }
        function Jq(a) {
          if (void 0 === a[1]) {
            throw new TypeError();
          }
          return a[1];
        }
        function Kq(a) {
          if (void 0 === a[4]) {
            throw new TypeError();
          }
          return a[4];
        }
        function Il(a) {
          if (void 0 === a[1]) {
            throw new TypeError();
          }
          return a[1];
        }
        function Ml(a) {
          var b, c;
          b = ((c = {}), c);
          a[10].push(b);
          return b;
        }
        function El(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[3] = b;
        }
        function oo(a) {
          if (void 0 === a[1]) {
            throw new TypeError();
          }
          return a[1];
        }
        function po(a) {
          if (void 0 === a[2]) {
            throw new TypeError();
          }
          return a[2];
        }
        function tm(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[1] = b;
        }
        function wm(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[2] = b;
        }
        function Lq(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[2] = b;
        }
        function Mq(a, b) {
          if (void 0 == b) {
            throw new TypeError();
          }
          a[3] = b;
        }
        function Nq(a, b) {
          var c, d, e, f, g, h, n, m;
          a: {
            if (a.k) {
              for (g = 0; g < a.k.length; ++g) {
                if (a.k[g] == b) {
                  g = !0;
                  break a;
                }
              }
            }
            g = !1;
          }
          if (g) {
            return (
              3 <= V &&
                T(
                  "Ignore not content element: " +
                    B(b, "class") +
                    " " +
                    B(b, "id"),
                ),
              !1
            );
          }
          m = Bl(b);
          g = n = !1;
          if (!m) {
            if ((a.i && a.d) || "news" === a.n) {
              a.f ||
                (g =
                  b.classList.contains("hidden") ||
                  b.classList.contains("hide") ||
                  b.classList.contains("catmore")),
                (a.f || g) && (n = !0);
            }
            a.i &&
              (-1 != B(b, "class").indexOf("continue") && (n = !0),
              E(B(b, "aria-expanded"), "false") && (n = !0));
          }
          var u = m || n,
            p;
          2 > V ||
            ((p = kl(b)),
            T(
              (u ? "KEEP " : "SKIP ") +
                b.tagName +
                ": id\x3d" +
                b.id +
                ", dsp\x3d" +
                p.display +
                ", vis\x3d" +
                p.visibility +
                ", opaq\x3d" +
                p.opacity,
            ));
          if (!m && !n) {
            return O(a.e, b), !1;
          }
          try {
            if (P(a.b, b.tagName)) {
              for (f = new I(a.c); f.b < f.d.M(); ) {
                if (
                  ((e = (z(f.b < f.d.M()), f.d._((f.c = f.b++)))),
                  (d = e.Kb(b)))
                ) {
                  return (c = a.a), Bk(c, c.d), M(c.b.a, d), !1;
                }
              }
            }
          } catch (x) {
            if (((x = Od(x)), t(x, 11))) {
              (c = x), T("Exception happened in EmbedExtractors: " + c.q());
            } else {
              throw Pd(x);
            }
          }
          b ? ((c = kl(b).position), (c = F("fixed", c))) : (c = !1);
          if (c && ((c = b.innerText), null != c && 100 > c.length)) {
            return 3 <= V && T("Ignore fixed element: " + b.innerText), !1;
          }
          c = B(b, "class") + " " + B(b, "id");
          if (
            a.o.test(c) &&
            !a.j.test(c) &&
            "BODY" !== b.tagName &&
            "A" !== b.tagName &&
            !Nm(b, "table") &&
            !Nm(b, "code")
          ) {
            return 3 <= V && T("Ignore unlikely candidates: " + c), !1;
          }
          c = B(b, "class");
          d = B(b, "data-component");
          if ("sharing" === c || "socialArea" === c || "share" === d) {
            return !1;
          }
          d = new pi(fh(c, " "));
          if (-1 != Jh(d, "weibo_info") || -1 != Jh(d, "recommend-list")) {
            return !1;
          }
          Oq();
          !Pq(b.tagName) ||
            b.classList.contains("answer_item") ||
            b.classList.contains("ask-mod") ||
            ((d = a.a),
            (e = new Qq(b.tagName, (il(), jl))),
            Bk(d, d.d),
            M(d.b.a, e));
          switch (b.tagName) {
            case "A":
              if ((h = -1 != b.href.indexOf("action\x3dedit\x26section\x3d"))) {
                return !1;
              }
              break;
            case "SPAN":
              if ("mw-editsection" === c) {
                return !1;
              }
              break;
            case "BR":
              return (
                (g = a.a),
                g.c && (Bk(g, g.d), ++g.d, (g.c = !1)),
                (g = g.g),
                (g.j += "\n"),
                M(g.a, b),
                !1
              );
            case "TABLE":
              h = pp(b);
              2 > V ||
                ((c = re(b)),
                T(
                  "TABLE: " +
                    h +
                    ", id\x3d" +
                    b.id +
                    ", class\x3d" +
                    B(b, "class") +
                    ", parent\x3d[" +
                    c.tagName +
                    ", id\x3d" +
                    c.id +
                    ", class\x3d" +
                    B(c, "class") +
                    "]",
                ));
              if (h == (sp(), vp)) {
                return (g = a.a), Bk(g, g.d), M(g.b.a, new Rq(b)), !1;
              }
              break;
            case "VIDEO":
              return (g = a.a), (h = new Tq(b)), Bk(g, g.d), M(g.b.a, h), !1;
            case "OPTION":
            case "OBJECT":
            case "EMBED":
            case "APPLET":
              return (a.a.c = !0), !1;
            case "HEAD":
            case "STYLE":
            case "SCRIPT":
            case "LINK":
            case "NOSCRIPT":
            case "IFRAME":
            case "svg":
              return !1;
            case "BUTTON":
              c = ((h = wk($doc.URL)), null == h ? "" : h);
              if (F("www.sciencedirect.com", c)) {
                break;
              }
              return !1;
          }
          h = a.a;
          Uq();
          e = kl(b);
          c = new Vq();
          d = b.tagName;
          switch (e.display) {
            case "inline":
              break;
            case "inline-block":
            case "inline-flex":
              c.a = !0;
              break;
            case "block":
              if ("none" !== e["float"] && "SPAN" === d) {
                break;
              }
            default:
              (c.b = !0), (c.a = !0);
          }
          "DIV" === d &&
            ((e = e.textIndent),
            null != e &&
              e.length &&
              "0px" != e &&
              ((e = (pk(), e.replace(RegExp("px", "gi"), ""))),
              e.length &&
                ((e = Gg(e)),
                10000 < (0 >= e ? 0 - e : e) &&
                  bd(c.d, "STRICTLY_NOT_CONTENT"))));
          if ("HTML" !== d && "BODY" !== d && "ARTICLE" !== d) {
            switch (
              ((f = B(b, "class")),
              (e = b.classList.length),
              (n = B(b, "id")),
              (Wq.test(f) || Wq.test(n)) &&
                2 >= e &&
                bd(c.d, "STRICTLY_NOT_CONTENT"),
              d)
            ) {
              case "ASIDE":
              case "NAV":
                bd(c.d, "STRICTLY_NOT_CONTENT");
                break;
              case "LI":
                bd(c.d, "de.l3s.boilerpipe/LI");
                break;
              case "H1":
                bd(c.d, "de.l3s.boilerpipe/H1");
                bd(c.d, "de.l3s.boilerpipe/HEADING");
                break;
              case "H2":
                bd(c.d, "de.l3s.boilerpipe/H2");
                bd(c.d, "de.l3s.boilerpipe/HEADING");
                break;
              case "H3":
                bd(c.d, "de.l3s.boilerpipe/H3");
                bd(c.d, "de.l3s.boilerpipe/HEADING");
                break;
              case "H4":
              case "H5":
              case "H6":
                bd(c.d, "de.l3s.boilerpipe/HEADING");
                break;
              case "A":
                (c.a = !0),
                  (b.hasAttribute("href") || b.hasAttribute("onclick")) &&
                    (c.c = !0);
            }
          }
          M(h.a.a, c);
          c.a && ++h.f;
          c.c && ((d = h.g), (d.e = !0), (d.j += " "));
          h.c |= c.b;
          h = (Sf(), a.f ? zg : xg);
          M(a.g.a, h);
          a.f |= g;
          return !0;
        }
        function vk(a, b) {
          var c, d;
          this.g = new Aj();
          this.e = new Li();
          this.a = a;
          this.c = new N();
          M(this.c, new iq());
          M(this.c, new oq());
          M(this.c, new sq());
          M(this.c, new wq());
          this.b = new Li();
          for (d = new I(this.c); d.b < d.d.M(); ) {
            (c = (z(d.b < d.d.M()), d.d._((d.c = d.b++)))), rh(this.b, c.Lb());
          }
          this.n = "";
          this.o = RegExp(
            "-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|releted|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote|search-box|recommend" +
              (null == b.g ? "" : b.g),
          );
          this.j = RegExp(
            "and|article|body|column|content|main|shadow" +
              (null == b.c ? "" : b.c),
          );
          b &&
            (null == b.d ? "" : b.d).length &&
            (this.k = $doc.documentElement.querySelectorAll(
              null == b.d ? "" : b.d,
            ));
        }
        q(93, 1, {}, vk);
        _.ub = function (a) {
          if (
            1 == a.nodeType &&
            (Oq(),
            Pq(a.tagName) &&
              !a.classList.contains("answer_item") &&
              !a.classList.contains("ask-mod"))
          ) {
            var b = this.a;
            a = new Qq(a.tagName, (il(), Xq));
            Bk(b, b.d);
            M(b.b.a, a);
          }
          b = this.a;
          a = b.a;
          var c;
          c = a.a.b.length;
          if (0 < c) {
            a = (yj(c - 1, a.a.b.length), L(a.a, c - 1));
          } else {
            throw new vi();
          }
          a.a && --b.f;
          if (b.c || a.b) {
            Bk(b, b.d), ++b.d;
          }
          a.c && ((a = b.g), (a.e = !1), (a.j += " "));
          zj(b.a);
          this.f = zj(this.g).a;
        };
        _.vb = function (a) {
          switch (a.nodeType) {
            case 3:
              var b = this.a;
              b.c && (Bk(b, b.d), ++b.d, (b.c = !1));
              var c = b.g,
                b = b.f,
                d;
              d = a.data;
              d.length &&
                ((c.j += d),
                M(c.a, a),
                ep(d) ||
                  ((a = (pk(), qk.Jb(d))),
                  (c.i += a),
                  c.e && (c.g += a),
                  (c.f = c.a.b.length - 1),
                  c.d < c.c && (c.d = c.f),
                  -1 == c.b && (c.b = b)));
              return !1;
            case 1:
              return Nq(this, a);
            default:
              return !1;
          }
        };
        _.d = !1;
        _.f = !1;
        _.i = !1;
        v(93);
        function Uq() {
          Uq = l;
          Wq = /\bcomments?\b/;
        }
        function Vq() {
          this.d = [];
        }
        q(198, 1, {}, Vq);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        var Wq;
        v(198);
        function Ck(a) {
          var b, c, d, e, f;
          f = new N();
          a: {
            for (b = 0; b < a.a.b.length; b++) {
              if (t(L(a.a, b), 34)) {
                d = b;
                break a;
              }
            }
            d = a.a.b.length;
          }
          if (d == a.a.b.length) {
            return new $p(f);
          }
          e = c = L(a.a, d).d;
          b = new Zp(a.a, d);
          for (++d; d < a.a.b.length; d++) {
            t(L(a.a, d), 34) &&
              ((c = L(a.a, d).d),
              c == e
                ? Pk(b, new Zp(a.a, d))
                : ((f.b[f.b.length] = b), (e = c), (b = new Zp(a.a, d))));
          }
          f.b[f.b.length] = b;
          return new $p(f);
        }
        function ll(a, b) {
          var c, d, e, f, g, h;
          f = !0;
          g = null;
          h = new ph();
          for (e = new I(a.a); e.b < e.d.M(); ) {
            (d = (z(e.b < e.d.M()), e.d._((e.c = e.b++)))),
              d.p &&
                ((c = d.Mb(b)),
                null != c &&
                  c.length &&
                  (b &&
                    (((d = d.Nb()) && d == g) || f || (h.a += "\n"), (g = d)),
                  (h.a += c),
                  (f = !1)));
          }
          return h.a;
        }
        function Yq() {
          this.a = new N();
        }
        q(135, 1, {}, Yq);
        v(135);
        function Bk(a, b) {
          var c;
          c = a.g;
          var d = a.e;
          c.c == c.a.b.length
            ? (c = null)
            : c.d < c.c
              ? (Zq(c), (c = null))
              : ((d = new $q(
                  c.j,
                  c.a,
                  c.c,
                  c.a.b.length,
                  c.d,
                  c.f,
                  c.i,
                  c.g,
                  c.b,
                  d,
                )),
                Zq(c),
                (c = d));
          if (c) {
            c.d = b;
            ++a.e;
            var e, f;
            for (e = new I(a.a.a); e.b < e.d.M(); ) {
              for (
                d = (z(e.b < e.d.M()), e.d._((e.c = e.b++))), f = 0;
                f < d.d.length;
                f++
              ) {
                O(c.e, d.d[f]);
              }
            }
            M(a.b.a, c);
          }
        }
        function uk() {
          this.b = new Yq();
          this.a = new Aj();
          this.g = new ar();
          this.d = 0;
        }
        q(92, 1, {}, uk);
        _.c = !1;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        v(92);
        q(235, 1, {});
        _.p = !1;
        v(235);
        function mq(a, b, c, d) {
          this.a = new N();
          this.b = c;
          M(this.a, a);
          this.c = b;
          !d && new Ki();
        }
        q(62, 235, {}, mq);
        _.Mb = function (a) {
          if (a) {
            return "";
          }
          a = $doc.createElement("div");
          a.className = "embed-placeholder";
          a.setAttribute("data-type", this.c);
          a.setAttribute("data-id", this.b);
          return a.outerHTML;
        };
        _.Nb = function () {
          return 0 == this.a.b.length ? null : L(this.a, 0);
        };
        v(62);
        function br() {
          br = l;
          cr = C(w(s, 1), k, 2, 4, ["data-srcset"]);
        }
        function ml(a) {
          var b, c, d, e, f, g, h, n;
          f = a.d.cloneNode(!0);
          c = "IMG" == f.tagName ? f : Hm(f, "IMG");
          a.e.length && ((c.src = a.e), (a.e = c.src));
          0 < a.f && 0 < a.c && ((c.width = a.f), (c.height = a.c));
          Em(c);
          n = f.getElementsByTagName("SOURCE");
          for (g = 0; g < n.length; g++) {
            for (h = n[g], c = cr, d = 0, e = c.length; d < e; ++d) {
              if (((b = c[d]), (b = B(h, b)), b.length)) {
                h.setAttribute("srcset", b);
                break;
              }
            }
          }
          Pm(f);
          Qm(f);
          a.b = f;
        }
        function hq(a, b, c, d) {
          br();
          this.d = a;
          this.f = b;
          this.c = c;
          this.e = d;
          null == this.e && (this.e = "");
        }
        q(31, 235, { 31: 1 }, hq);
        _.Mb = function (a) {
          if (a) {
            return "";
          }
          !this.b && ml(this);
          return this.b.outerHTML;
        };
        _.Nb = function () {
          return this.d;
        };
        _.c = 0;
        _.f = 0;
        var cr;
        v(31);
        function gq(a, b, c, d, e) {
          br();
          hq.call(this, a, b, c, d);
          this.a = e;
        }
        q(205, 31, { 31: 1 }, gq);
        _.Mb = function (a) {
          var b;
          b = ol(pl(this.a));
          if (a) {
            return Mm(b);
          }
          a = $doc.createElement("FIGURE");
          var c = (!this.b && ml(this), this.b);
          a.appendChild(c);
          !this.a.innerHTML.length || a.appendChild(b);
          return a.outerHTML;
        };
        _.Nb = function () {
          return this.a;
        };
        v(205);
        function Rq(a) {
          this.b = a;
        }
        q(75, 235, { 75: 1 }, Rq);
        _.Mb = function (a) {
          !this.a && (this.a = ol(pl(this.b)));
          return a ? Mm(this.a) : this.a.outerHTML;
        };
        _.Nb = function () {
          return this.b;
        };
        v(75);
        function Oq() {
          Oq = l;
          dr = new Li();
          O(dr, "UL");
          O(dr, "OL");
          O(dr, "LI");
          O(dr, "BLOCKQUOTE");
          O(dr, "PRE");
        }
        function Qq(a, b) {
          Oq();
          this.a = a;
          this.b = b;
        }
        function Pq(a) {
          Oq();
          return P(dr, a);
        }
        q(57, 235, { 57: 1 }, Qq);
        _.Mb = function (a) {
          return a
            ? ""
            : "\x3c" + (this.b == (il(), jl) ? "" : "/") + this.a + "\x3e";
        };
        _.Nb = function () {
          return null;
        };
        var dr;
        v(57);
        function il() {
          il = l;
          jl = new er("START", 0);
          Xq = new er("END", 1);
        }
        function er(a, b) {
          te.call(this, a, b);
        }
        q(58, 9, { 3: 1, 13: 1, 9: 1, 58: 1 }, er);
        var Xq,
          jl,
          fr = Gc(58, function () {
            il();
            return C(w(fr, 1), ja, 58, 0, [jl, Xq]);
          });
        function Zk(a) {
          return L(a.a, a.c);
        }
        function gr() {
          Z ||
            ((Z = new Li()),
            O(Z, "B"),
            O(Z, "BIG"),
            O(Z, "I"),
            O(Z, "SMALL"),
            O(Z, "TT"),
            O(Z, "ABBR"),
            O(Z, "ACRONYM"),
            O(Z, "CITE"),
            O(Z, "CODE"),
            O(Z, "DFN"),
            O(Z, "EM"),
            O(Z, "KBD"),
            O(Z, "STRONG"),
            O(Z, "SAMP"),
            O(Z, "TIME"),
            O(Z, "VAR"),
            O(Z, "A"),
            O(Z, "BDO"),
            O(Z, "IMG"),
            O(Z, "MAP"),
            O(Z, "Q"),
            O(Z, "SPAN"),
            O(Z, "SUB"),
            O(Z, "SUP"),
            O(Z, "BUTTON"),
            O(Z, "INPUT"),
            O(Z, "LABEL"),
            O(Z, "SELECT"),
            O(Z, "TEXTAREA"));
          return Z;
        }
        function Yk(a) {
          return L(a.a, a.f);
        }
        function $q(a, b, c, d, e, f, g, h, n, m) {
          this.o = a;
          this.a = b;
          this.k = c;
          this.b = d;
          this.c = e;
          this.f = f;
          this.i = g;
          this.g = h;
          this.e = new Li();
          this.n = n;
          this.j = m;
        }
        q(34, 235, { 34: 1 }, $q);
        _.Mb = function (a) {
          var b, c, d;
          if (this.e.a.Q("de.l3s.boilerpipe/TITLE")) {
            return "";
          }
          d = new Oh(this.a, this.k, this.b);
          var e;
          if (1 == d.b) {
            b = jn(new gn((A(0, d.b), L(d.c, d.a))));
          } else {
            c = (A(0, d.b), L(d.c, d.a));
            b = c.cloneNode(!1);
            for (d = new fn(d); d.a; ) {
              if (hn(d, c)) {
                if (!d.a) {
                  break;
                }
                for (;;) {
                  for (e = c.nextSibling; e && !e.contains(d.a); ) {
                    e = e.nextSibling;
                  }
                  if (e) {
                    b = Vp(b, c.parentNode);
                    b = Tp(b, e);
                    c = e;
                    break;
                  }
                  c = c.parentNode;
                  b = Vp(b, c);
                }
              } else {
                for (c = c.firstChild; !c.contains(d.a); ) {
                  c = c.nextSibling;
                }
                b = Tp(b, c);
              }
            }
            for (; b.parentNode; ) {
              b = b.parentNode;
            }
          }
          1 != b.nodeType &&
            ((c = re(Nh(new Oh(this.a, this.k, this.b), 0)).cloneNode(!1)),
            c.appendChild(b),
            (b = c));
          "BODY" === b.tagName &&
            ((c = $doc.createElement("div")),
            (c.innerHTML = b.innerHTML || ""),
            (b = c));
          for (d = null; P(gr(), b.tagName); ) {
            d ||
              ((d = yk(new Oh(this.a, this.k, this.b))),
              1 != d.nodeType && (d = re(d)));
            d = re(d);
            if ("BODY" === d.tagName) {
              break;
            }
            c = d.cloneNode(!1);
            c.appendChild(b);
            b = c;
          }
          Dm(b);
          Cm(b, "TARGET", C(w(s, 1), k, 2, 4, ["A"]));
          Cm(b, "ID", C(w(s, 1), k, 2, 4, ["*"]));
          c = b;
          1 == c.nodeType &&
            c.hasAttribute("class") &&
            (-1 != B(c, "class").indexOf("caption")
              ? (c.className = "caption")
              : c.removeAttribute("class"));
          c = c.querySelectorAll("[class]");
          for (d = 0; d < c.length; d++) {
            -1 != B(c[d], "class").indexOf("caption")
              ? (c[d].className = "caption")
              : c[d].removeAttribute("class");
          }
          Cm(b, "COLOR", C(w(s, 1), k, 2, 4, ["FONT"]));
          Cm(b, "STYLE", C(w(s, 1), k, 2, 4, ["*"]));
          return a ? Mm(b) : Pq(b.tagName) ? b.innerHTML : b.outerHTML;
        };
        _.Nb = function () {
          return 0 == new Oh(this.a, this.k, this.b).b
            ? null
            : re(Nh(new Oh(this.a, this.k, this.b), 0));
        };
        _.b = 0;
        _.c = 0;
        _.d = 0;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = 0;
        _.k = 0;
        _.n = 0;
        var Z = null;
        v(34);
        function Zq(a) {
          a.j = "";
          a.i = 0;
          a.g = 0;
          a.c = a.a.b.length;
          a.b = -1;
        }
        function ar() {
          this.a = new N();
        }
        q(191, 1, {}, ar);
        _.b = -1;
        _.c = 0;
        _.d = -1;
        _.e = !1;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = "";
        v(191);
        function hr() {
          hr = l;
          ir = C(
            w(s, 1),
            k,
            2,
            4,
            "autoplay controls height loop muted poster preload src width".split(
              " ",
            ),
          );
        }
        function Tq(a) {
          hr();
          this.a = a;
        }
        q(74, 235, { 74: 1 }, Tq);
        _.Mb = function (a) {
          var b, c, d, e;
          if (a) {
            return "";
          }
          a = $doc.createElement("__video_temp_tag__");
          c = ir;
          d = 0;
          for (e = c.length; d < e; ++d) {
            if (((b = c[d]), this.a.hasAttribute(b))) {
              var f = B(this.a, b);
              a.setAttribute(b, f);
            }
          }
          a.setAttribute("controls", "controls");
          for (b = 0; b < this.a.childNodes.length; b++) {
            (c = this.a.childNodes[b]),
              1 != c.nodeType ||
                ("SOURCE" !== c.tagName && "TRACK" !== c.tagName) ||
                ((c = c.cloneNode(!1)), a.appendChild(c));
          }
          a.hasAttribute("src") &&
            ((b = Um(B(a, "src"))), a.setAttribute("src", b));
          a.hasAttribute("poster") &&
            ((b = Um(B(a, "poster"))), a.setAttribute("poster", b));
          Pm(a);
          Cm(a, "ID", C(w(s, 1), k, 2, 4, ["*"]));
          return Zg(a.outerHTML, "__video_temp_tag__", "video");
        };
        _.Nb = function () {
          return this.a;
        };
        var ir;
        v(74);
        function cl(a, b) {
          var c, d;
          try {
            return (
              (c = new Lg(ih(a, 0, a.length - 2))),
              (d = new Lg(ih(b, 0, b.length - 2))),
              3 <= V &&
                T(
                  "FontSizeFilter smallerThan: f1 \x3d " + c + ", f2 \x3d " + d,
                ),
              c.a < d.a
            );
          } catch (e) {
            e = Od(e);
            if (t(e, 11)) {
              return !1;
            }
            throw Pd(e);
          }
        }
        function bl(a, b) {
          this.b = a;
          this.a = b;
        }
        q(136, 1, {}, bl);
        _.b = 0;
        v(136);
        function dl(a) {
          var b, c, d;
          d = !1;
          for (c = new I(a.a); c.b < c.d.M(); ) {
            (b = (z(c.b < c.d.M()), c.d._((c.c = c.b++)))),
              b.p ? (d = !0) : t(b, 34) ? (d = !1) : d && (b.p = !0);
          }
          c = a.a;
          for (a = c.b.length - 1; 0 <= a; --a) {
            (b = (A(a, c.b.length), c.b[a])),
              b.p ? (d = !0) : t(b, 34) ? (d = !1) : d && (b.p = !0);
          }
        }
        q(237, 1, {});
        _.Pb = function (a) {
          var b;
          b = 0;
          a && (b = this.Ob(a));
          2 <= V && T(mc(this.cZ) + ": " + b + "/" + this.Qb());
          return Tg(b, this.Qb());
        };
        v(237);
        function el() {
          this.b = 25;
          this.c = 75000;
          this.a = 200000;
        }
        q(192, 237, {}, el);
        _.Ob = function (a) {
          a = ((a.offsetWidth || 0) | 0) * ((a.offsetHeight || 0) | 0);
          if (a < this.c) {
            return 0;
          }
          a = ac(((a - this.c) / (this.a - this.c)) * this.b);
          return Tg(a, this.b);
        };
        _.Qb = function () {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        v(192);
        function fl() {
          this.a = 25;
        }
        q(193, 237, {}, fl);
        _.Ob = function (a) {
          var b, c;
          b = (a.offsetHeight || 0) | 0;
          if (0 >= b) {
            return 0;
          }
          c = (a.offsetWidth || 0) | 0;
          a = 0;
          b = c / b;
          1.4500000476837158 < b && 1.7999999523162842 > b
            ? (a = 1)
            : 1.2999999523162842 < b &&
              2.200000047683716 > b &&
              (a = 0.4000000059604645);
          return ac(this.a * a);
        };
        _.Qb = function () {
          return this.a;
        };
        _.a = 0;
        v(193);
        function gl(a) {
          this.b = 25;
          this.a = a;
        }
        q(194, 237, {}, gl);
        _.Ob = function (a) {
          var b;
          if (!this.a) {
            return 0;
          }
          a = Km(this.a).b.length - 1 - (Km(Im(this.a, a)).b.length - 1);
          b = 0;
          4 > a
            ? (b = 1)
            : 6 > a
              ? (b = 0.6000000238418579)
              : 8 > a && (b = Fa);
          return ac(this.b * b);
        };
        _.Qb = function () {
          return this.b;
        };
        _.b = 0;
        v(194);
        function hl() {
          this.a = 15;
        }
        q(195, 237, {}, hl);
        _.Ob = function (a) {
          var b;
          a = Km(a);
          for (b = new I(a); b.b < b.d.M(); ) {
            if (
              ((a = (z(b.b < b.d.M()), b.d._((b.c = b.b++)))),
              1 == a.nodeType && "FIGURE" === a.tagName)
            ) {
              return this.a;
            }
          }
          return 0;
        };
        _.Qb = function () {
          return this.a;
        };
        _.a = 0;
        v(195);
        var Eq = Ic("I");
        v(217);
        v(219);
        v(null);
        v(222);
        var jk = Ic("C"),
          Pi = Hc();
        _ = (function (a) {
          var b = this;
          if ("$wnd" == a) {
            return $wnd;
          }
          if ("" === a) {
            return b;
          }
          "$wnd." == a.substring(0, 5) && ((b = $wnd), (a = a.substring(5)));
          a = a.split(".");
          a[0] in b || !b.execScript || b.execScript("var " + a[0]);
          for (var c; a.length && (c = a.shift()); ) {
            b[c] ? (b = b[c]) : (b = b[c] = {});
          }
          return b;
        })("org.chromium.distiller.DomDistiller");
        _.apply = function () {
          var a;
          return wl(((a = {}), a), "content_page", "");
        };
        _.applyCatalog = function (a, b, c) {
          var d, e, f, g, h, n;
          h = ((n = {}), n);
          g = $doc.URL;
          if (void 0 == b) {
            throw new TypeError();
          }
          h[1] = b;
          if (void 0 == g) {
            throw new TypeError();
          }
          h[2] = g;
          d = 0;
          f = !1;
          if (void 0 != a[8]) {
            try {
              if (void 0 === a[8]) {
                throw new TypeError();
              }
              d = Jg(a[8]);
            } catch (m) {
              if (((m = Od(m)), t(m, 11))) {
                d = 0;
              } else {
                throw Pd(m);
              }
            }
          }
          if (200 > d) {
            var u = Fl(g, 0);
            if (void 0 == u) {
              throw new TypeError();
            }
            h[4] = u;
            f =
              void 0 != Kq(h)[2] &&
              !!po(Kq(h)).length &&
              (void 0 == Kq(h)[1] || !oo(Kq(h)).length);
          }
          var p = void 0 != a[1] ? Jq(a) : "",
            x = f,
            D;
          if (void 0 != a[6]) {
            if (void 0 === a[6]) {
              throw new TypeError();
            }
            D = a[6];
          } else {
            D = "";
          }
          var Q = D,
            oa;
          if (void 0 != a[7]) {
            if (void 0 === a[7]) {
              throw new TypeError();
            }
            oa = a[7];
          } else {
            oa = "";
          }
          var W = oa,
            y,
            dc;
          Uj();
          var r,
            gb,
            H,
            Mc,
            Xa,
            Na,
            G,
            hb,
            Nc,
            U,
            ed,
            Ga,
            ub,
            ib,
            S,
            Ya,
            Ha,
            Za,
            ga,
            da,
            Db,
            J,
            Aa,
            Oa,
            Pa,
            Qa,
            fd,
            qc,
            Eb,
            Fb,
            $a,
            Gb,
            va,
            Qb,
            ec,
            Ia,
            $,
            gd,
            Ra,
            rc,
            Rb,
            pa,
            X,
            sc,
            jb,
            vb,
            fc,
            Sb,
            ea,
            K,
            ab,
            tc,
            kb;
          hb = ((y = {}), y);
          Gb = ((dc = {}), dc);
          Qa = wk(g);
          ub = "";
          null != p && "" !== p && (ub = p);
          gb = RegExp(
            "\u7b2c[\\u4e00-\\u9fa5\\u767e\\u5343\\u96f6]{1,10}\u7ae0|\u7b2c[\\u4e00-\\u9fa5\\u767e\\u5343\\u96f6]{1,10}\u90e8\u5206|\u7b2c[\\u4e00-\\u9fa5\\u767e\\u5343\\u96f6]{1,10}\u5377|\u7b2c(\\d+)\u7ae0|\u7b2c(\\d+)\u90e8\u5206|\u7b2c(\\d+)\u5377|^\\d" +
              ub,
            "i",
          );
          r = RegExp(
            "^\\d+\u8d5e|^\\d+\u6761\u56de\u590d|\u5f69\u7968\u5e73\u53f0|\u5b58\u6b3e\u6ce8\u518c|\u5f69\u7968\u5b98\u7f51" +
              ub,
            "i",
          );
          H = RegExp(
            "\u66f4\u591a\u7ae0\u8282|\u5168\u90e8\u7ae0\u8282|\u5b8c\u6574\u76ee\u5f55|\u76ee\u5f55\u6b63\u5e8f|\u67e5\u770b\u76ee\u5f55|\u5168\u6587\u9605\u8bfb|\u66f4\u591a \u00bb",
            "i",
          );
          Gb[1] = "";
          Gb[2] = "";
          gd = $doc.documentElement;
          Pa = null;
          "k.sogou.com" === Qa
            ? (Xa = gd.getElementsByTagName("LI"))
            : (Xa = gd.getElementsByTagName("A"));
          $a = "";
          Fb = pa = 0;
          if ("" != Q) {
            try {
              pa = Jg(Q);
            } catch (Ja) {
              if (((Ja = Od(Ja)), t(Ja, 11))) {
                pa = 0;
              } else {
                throw Pd(Ja);
              }
            }
          }
          if ("" != W) {
            try {
              Fb = Jg(W);
            } catch (bb) {
              if (((bb = Od(bb)), t(bb, 11))) {
                Fb = 0;
              } else {
                throw Pd(bb);
              }
            }
          }
          pa >= Xa.length && (pa = 0);
          U = 0;
          qc = Nc = fd = !1;
          "wap.faloo.com" === Qa && (fd = !0);
          "wap.7yun.org" === Qa && (Nc = !0);
          for (Ya = pa; Ya < Xa.length; Ya++) {
            if (
              ((J = Xa[Ya]),
              "k.sogou.com" === Qa ? (Aa = "") : (Aa = J.href),
              (Oa = ck(J)),
              !(100 < Oa.length) && "" != Oa && null != Oa)
            ) {
              if (Zj.test(Oa)) {
                if (void 0 == Aa) {
                  throw new TypeError();
                }
                Gb[1] = Aa;
              }
              if (ak.test(Oa)) {
                if (void 0 == Aa) {
                  throw new TypeError();
                }
                Gb[2] = Aa;
              }
              if (Bl(J)) {
                kb = (J.offsetWidth || 0) | 0;
                ib = (J.offsetHeight || 0) | 0;
                var ma;
                if ((ma = 0 != kb && 0 != ib)) {
                  var uc;
                  if ((uc = fd && 1 < Fb)) {
                    var Ed;
                    var Tb = J,
                      gc = void 0,
                      vc = void 0,
                      gc = 0;
                    if (Tb && Tb.parentNode) {
                      for (vc = Tb.parentNode; vc && "BODY" != vc.nodeName; ) {
                        ++gc, (vc = vc.parentNode);
                      }
                      Ed = gc;
                    } else {
                      T("node is null"), (Ed = 0);
                    }
                    uc = Ed != Fb;
                  }
                  ma = !uc;
                }
                if (ma) {
                  if (gb.test(Oa)) {
                    if (r.test(Oa)) {
                      continue;
                    }
                    nj(Xj, J);
                  }
                  if (0 == R.b) {
                    nj(R, J);
                  } else {
                    if (
                      ((Qb = J.parentNode),
                      (va = null),
                      (ec = Ia = sj().parentNode),
                      "SPAN" == Qb.nodeName &&
                        Qb.parentNode &&
                        "LI" == Qb.parentNode.nodeName &&
                        "SPAN" == Ia.nodeName &&
                        Ia.parentNode &&
                        "LI" == Ia.parentNode.nodeName &&
                        ((Qb = Qb.parentNode), (ec = Ia = Ia.parentNode)),
                      Qb && (va = Qb),
                      kb != ((sj().offsetWidth || 0) | 0) &&
                        (!va ||
                          ((va.offsetWidth || 0) | 0) !=
                            ((ec.offsetWidth || 0) | 0)) &&
                        10 > R.b)
                    ) {
                      Ra = R.b;
                      for (X = 0; X < Ra; X++) {
                        uj(R);
                      }
                      nj(R, J);
                      Pa = null;
                    } else {
                      if (
                        kb == ((sj().offsetWidth || 0) | 0) ||
                        (va &&
                          ((va.offsetWidth || 0) | 0) ==
                            ((ec.offsetWidth || 0) | 0))
                      ) {
                        var wb;
                        try {
                          wb = !!J && !!J.nodeType;
                        } catch (hd) {
                          wb = !1;
                        }
                        if (wb) {
                          if (Pa) {
                            jb = Im(tj(R), J);
                            if (!jb) {
                              continue;
                            }
                            if (jb != Pa && 10 > R.b) {
                              if (Nc && 0 < pa && 0 < Fb && ek(J) == ek(sj())) {
                                nj(R, J);
                                Pa = null;
                                qc = !0;
                                continue;
                              }
                              Ra = R.b;
                              for (X = 0; X < Ra - 1; X++) {
                                uj(R);
                              }
                              Pa = Im(sj(), J);
                            } else {
                              if (jb != Pa && 10 <= R.b) {
                                if (
                                  Nc &&
                                  0 < pa &&
                                  0 < Fb &&
                                  ek(J) == ek(sj())
                                ) {
                                  nj(R, J);
                                  Pa = null;
                                  qc = !0;
                                  continue;
                                }
                                break;
                              }
                            }
                          } else {
                            qc ? (Pa = Im(tj(R), J)) : (Pa = Im(sj(), J));
                          }
                        }
                        if (
                          kl(J).color != kl(tj(R)).color ||
                          (va && kl(va).color != kl(tj(R).parentNode).color)
                        ) {
                          if (
                            Ya + 1 < Xa.length &&
                            ((Eb = Xa[Ya + 1]),
                            (tc = Eb.parentNode),
                            (ab = null),
                            tc && (ab = tc),
                            ab &&
                              ((ab.offsetWidth || 0) | 0) ==
                                ((va.offsetWidth || 0) | 0) &&
                              10 > R.b &&
                              kl(J).color == kl(Eb).color)
                          ) {
                            Ra = R.b;
                            for (X = 0; X < Ra; X++) {
                              uj(R);
                            }
                            nj(R, J);
                          }
                        } else {
                          if (
                            !(
                              kl(J).color != kl(tj(R)).color ||
                              (va && kl(va).color != kl(tj(R).parentNode).color)
                            )
                          ) {
                            if (se(J) != se(tj(R))) {
                              (U = Ya), nj(R, J);
                            } else {
                              if (10 > R.b) {
                                Mc = J.getElementsByTagName("img");
                                if (1 == Mc.length) {
                                  U = Ya;
                                } else {
                                  for (Ra = R.b, X = 0; X < Ra; X++) {
                                    uj(R);
                                  }
                                }
                                nj(R, J);
                              } else {
                                (Mc = J.getElementsByTagName("img")),
                                  1 == Mc.length && ((U = Ya), nj(R, J));
                              }
                            }
                          }
                        }
                      } else {
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          if (void 0 == Gb) {
            throw new TypeError();
          }
          hb[2] = Gb;
          if (10 <= R.b) {
            for (
              E(sj().innerText, "\u5c3e\u9875") && uj(R), Ra = R.b, X = 0;
              X < Ra;
              X++
            ) {
              (vb = uj(R)),
                H.test(vb.innerText) ||
                  ("k.sogou.com" === Qa
                    ? cj(Vj, vb.innerText, "action_id:" + Cl(vb))
                    : cj(Vj, ck(vb), vb.href),
                  1 < X && "" == $a && ($a = ek(vb)));
            }
          } else {
            U = 0;
            Ra = R.b;
            for (sc = 0; sc < Ra; sc++) {
              uj(R);
            }
            Na = Xj.b;
            if (2 <= Na) {
              $ = ga = 0;
              da = !0;
              for (K = ei(Xj, 0); K.b != K.d.c; ) {
                if (
                  ((ea =
                    (z(K.b != K.d.c),
                    (K.c = K.b),
                    (K.b = K.b.a),
                    ++K.a,
                    K.c.c)),
                  0 == ga && 0 == $)
                ) {
                  ++ga, nj(R, ea);
                } else {
                  if (
                    ((Sb = bk(ea.innerText)),
                    "" !== Sb &&
                      ((fc = dk(Sb) ? Jg(Sb) : ik(Sb)),
                      (Za = bk(tj(R).innerText)),
                      "" !== Za))
                  ) {
                    Ha = dk(Za) ? Jg(Za) : ik(Za);
                    if (fc >= Ha) {
                      da ? ++ga : ++$;
                    } else {
                      if (0 == $) {
                        (da = !1), ++$;
                      } else {
                        if (ga > $) {
                          for (S = 0; S < $; S++) {
                            wj(R);
                          }
                          da = !1;
                        } else {
                          for (S = 0; S < ga; S++) {
                            uj(R);
                          }
                          da = !0;
                          ga = $;
                        }
                        $ = 1;
                      }
                    }
                    nj(R, ea);
                  }
                }
              }
              if (ga >= $) {
                for (S = 0; S < $; S++) {
                  wj(R);
                }
              } else {
                for (S = 0; S < ga; S++) {
                  uj(R);
                }
              }
            }
            if (2 <= Na) {
              $ = ga = 0;
              da = !0;
              for (K = ei(Xj, 0); K.b != K.d.c; ) {
                if (
                  ((ea =
                    (z(K.b != K.d.c),
                    (K.c = K.b),
                    (K.b = K.b.a),
                    ++K.a,
                    K.c.c)),
                  0 == ga && 0 == $)
                ) {
                  ++ga, nj(Wj, ea);
                } else {
                  if (
                    ((Sb = bk(ea.innerText)),
                    "" !== Sb &&
                      ((fc = dk(Sb) ? Jg(Sb) : ik(Sb)),
                      (Za = bk(tj(Wj).innerText)),
                      "" !== Za))
                  ) {
                    Ha = dk(Za) ? Jg(Za) : ik(Za);
                    if (fc <= Ha) {
                      da ? ++ga : ++$;
                    } else {
                      if (0 == $) {
                        (da = !1), ++$;
                      } else {
                        if (ga > $) {
                          for (S = 0; S < $; S++) {
                            wj(Wj);
                          }
                          da = !1;
                        } else {
                          for (S = 0; S < ga; S++) {
                            uj(Wj);
                          }
                          da = !0;
                          ga = $;
                        }
                        $ = 1;
                      }
                    }
                    nj(Wj, ea);
                  }
                }
              }
              if (ga >= $) {
                for (S = 0; S < $; S++) {
                  wj(Wj);
                }
              } else {
                for (S = 0; S < ga; S++) {
                  uj(Wj);
                }
              }
            }
            rc = R.b;
            Rb = Wj.b;
            if (rc >= Rb || x) {
              for (X = 0; X < rc; X++) {
                (ea = uj(R)),
                  H.test(ea.innerText) ||
                    ("k.sogou.com" === Qa
                      ? cj(Vj, ea.innerText, "action_id:" + Cl(ea))
                      : cj(Vj, ck(ea), ea.href),
                    0 < X && "" == $a && ($a = ek(ea)));
              }
            } else {
              for (X = 0; X < Rb; X++) {
                (ea = uj(Wj)),
                  H.test(ea.innerText) ||
                    ("k.sogou.com" === Qa
                      ? cj(Vj, ea.innerText, "action_id:" + Cl(ea))
                      : cj(Vj, ck(ea), ea.href),
                    0 < X && "" == $a && ($a = ek(ea)));
              }
            }
          }
          0 == Vj.c.M() && ($a = hb[1] = "");
          G = "";
          0 == Vj.c.M() ||
            (G +=
              '\x3cdiv id\x3d"chapterlist" class\x3d"directoryArea" style\x3d"list-style: none;"\x3e');
          Db = 1;
          for (Ga = new jj(new ij(Vj)); Ga.b != Ga.c.a.b; ) {
            (ed =
              (Ih(Ga.c.a.c, Ga),
              z(Ga.b != Ga.c.a.b),
              (Ga.a = Ga.b),
              (Ga.b = Ga.b.a),
              Ga.a)),
              Db++,
              (G += '\x3cli\x3e\x3ca href\x3d"'),
              (G += ed.e),
              (G += '?mtt_in_readmode\x3d1"\x3e'),
              (G += ed.d),
              (G += "\x3c/a\x3e\x3c/li\x3e");
          }
          0 == Vj.c.M() || (G += "\x3c/div\x3e");
          "," === hh(G, G.length - 1) && (G = ih(G, 0, G.length - 1));
          if (void 0 == G) {
            throw new TypeError();
          }
          hb[1] = G;
          if (void 0 == $a) {
            throw new TypeError();
          }
          hb[3] = $a;
          if (void 0 == U) {
            throw new TypeError();
          }
          hb[4] = U;
          if (void 0 == hb) {
            throw new TypeError();
          }
          h[3] = hb;
          if (200 <= d) {
            var Sa;
            if (void 0 === h[3]) {
              throw new TypeError();
            }
            Sa = h[3];
            if (void 0 === Sa[4]) {
              throw new TypeError();
            }
            var wc = Fl(g, Sa[4]);
            if (void 0 == wc) {
              throw new TypeError();
            }
            h[4] = wc;
          }
          e = "";
          if (void 0 != a[4]) {
            if (void 0 === a[4]) {
              throw new TypeError();
            }
            e = Hl(a[4]);
            if (e.length) {
              if (void 0 == e) {
                throw new TypeError();
              }
              h[5] = e;
            }
          }
          if (!e.length) {
            if (void 0 == c) {
              throw new TypeError();
            }
            h[5] = c;
          }
          var id = void 0 != a[1] ? Jq(a) : "",
            Hb;
          if (void 0 != a[2]) {
            if (void 0 === a[2]) {
              throw new TypeError();
            }
            Hb = a[2];
          } else {
            Hb = "";
          }
          var Ta = Hb,
            hc;
          Uj();
          var Fd,
            lb,
            xb,
            wa,
            aa,
            jd,
            mb,
            ba,
            Ua,
            Ba,
            xc,
            xa,
            Va,
            yb,
            Oc,
            ka,
            Ca,
            cb,
            db,
            we,
            qa,
            Pc,
            kd,
            nb,
            Ub;
          qa = ((hc = {}), hc);
          db = $doc.documentElement;
          qa[1] = !1;
          Mq(qa, "");
          cb = wk(g);
          Ua = "";
          null != id && "" !== id && (Ua = id);
          Fd = RegExp(
            "\u7b2c*\u6761|\u7b2c*\u7ae0|\u7b2c*\u90e8\u5206|\u7b2c*\u5377|\u7b2c(\\d+)\u9875|^\\d" +
              Ua,
            "i",
          );
          Ba = "";
          null != Ta && "" !== Ta && (Ba = Ta);
          lb = RegExp(
            "\u66f4\u591a\u7ae0\u8282|\u5168\u90e8\u7ae0\u8282|\u5b8c\u6574\u76ee\u5f55|\u76ee\u5f55\u6b63\u5e8f|\u67e5\u770b\u76ee\u5f55|\u5168\u6587\u9605\u8bfb|\u7ae0\u8282\u76ee\u5f55|\u66f4\u591a \u00bb" +
              Ba,
            "i",
          );
          wa = db.getElementsByTagName("OPTION");
          if (
            0 == wa.length ||
            (2 == wa.length &&
              "articlename" === qe(wa[0], "value") &&
              "author" === qe(wa[1], "value"))
          ) {
            for (
              xb = db.getElementsByTagName("A"), Va = 0;
              Va < xb.length;
              Va++
            ) {
              (Oc = xb[Va]),
                "k.sogou.com" === cb ? (ka = "") : (ka = Oc.href),
                (Ca = Oc.innerText),
                lb.test(Ca) &&
                  (Lq(qa, "[]"),
                  "k.sogou.com" === cb
                    ? Mq(qa, "action_id:" + Cl(Oc))
                    : Mq(qa, ka),
                  (qa[1] = !0));
            }
          } else {
            Pc = !1;
            "g.999wx.com" === cb && (Pc = !0);
            for (xa = 0; xa < wa.length; xa++) {
              if (
                ((ka = qe(wa[xa], "value")),
                "articlename" !== ka &&
                  "author" !== ka &&
                  ((Ca = wa[xa].innerText), !(30 < Ca.length)))
              ) {
                we = (pk(), fh(g, ":\\/\\/"))[0];
                var Ib = g,
                  Ib = (pk(), fh(Ib, ":\\/\\/"))[1];
                xc = -1 == Ib.indexOf("/") ? Ib : fh(Ib, "\\/")[0];
                Fd.test(Ca) &&
                  !Yj.c.Q(Ca) &&
                  null != ka &&
                  ("k.sogou.com" === cb
                    ? cj(Yj, Ca, "action_id:" + Cl(wa[xa]))
                    : E(ka.substr(0, 1), "/")
                      ? cj(Yj, Ca, we + "://" + xc + ka)
                      : Ug(g, "/")
                        ? cj(Yj, Ca, g + ka)
                        : Pc
                          ? ((Ub = fh(g, ":\\/\\/")[1]),
                            -1 != Ub.indexOf("/")
                              ? ((yb = g.lastIndexOf("/")),
                                (Ub = g.substr(0, yb)),
                                (kd = g.substr(yb + 1, g.length - (yb + 1))),
                                ka.length > kd.length
                                  ? (nb = kd.length)
                                  : (nb = ka.length),
                                10 < nb && (nb = 10),
                                Xg(ka, !0, 0, kd, 0, nb)
                                  ? cj(Yj, Ca, Ub + "/" + ka)
                                  : cj(Yj, Ca, g + "/" + ka))
                              : cj(Yj, Ca, g + "/" + ka))
                          : cj(Yj, Ca, g + "/" + ka));
              }
            }
            0 == Yj.c.M() && Lq(qa, "");
            aa = "[";
            for (ba = new jj(new ij(Yj)); ba.b != ba.c.a.b; ) {
              (mb =
                (Ih(ba.c.a.c, ba),
                z(ba.b != ba.c.a.b),
                (ba.a = ba.b),
                (ba.b = ba.b.a),
                ba.a)),
                (aa += '{"'),
                (aa += mb.d),
                (aa += '":"'),
                (aa += mb.e),
                (aa += '"},');
            }
            jd = hh(aa, aa.length - 1);
            "," === jd && (aa = ih(aa, 0, aa.length - 1));
            aa += "]";
            Lq(qa, aa);
          }
          if (void 0 == qa) {
            throw new TypeError();
          }
          h[6] = qa;
          return h;
        };
        _.applyWithOptions = wl;
        function jr(a) {
          return function () {
            var b;
            a: {
              var c = arguments,
                d;
              0 != xd &&
                ((d = Date.now ? Date.now() : new Date().getTime()),
                2000 < d - zd && ((zd = d), (yd = $wnd.setTimeout(wd, 10))));
              if (0 == xd++) {
                d = (Ad(), Bd);
                var e, f;
                if (d.a) {
                  f = null;
                  do {
                    (e = d.a), (d.a = null), (f = Dd(e, f));
                  } while (d.a);
                  d.a = f;
                }
                d = !0;
              } else {
                d = !1;
              }
              try {
                b = a.apply(this, c);
                break a;
              } finally {
                if ((c = d)) {
                  if (((d = (Ad(), Bd)), d.b)) {
                    f = null;
                    do {
                      (e = d.b), (d.b = null), (f = Dd(e, f));
                    } while (d.b);
                    d.b = f;
                  }
                }
                --xd;
                c && -1 != yd && ($wnd.clearTimeout(yd), (yd = -1));
              }
              b = void 0;
            }
            return b;
          };
        }
        var gwtOnLoad = (gwtOnLoad = function (a, b, c) {
          function d() {
            for (var a = 0; a < e.length; a++) {
              e[a]();
            }
          }
          null == Ka && (Ka = []);
          var e = Ka;
          $moduleName = b;
          $moduleBase = c;
          if (a) {
            try {
              jr(d)();
            } catch (f) {
              a(b, f);
            }
          } else {
            jr(d)();
          }
        });
        (function () {
          null == Ka && (Ka = []);
          for (var a = Ka, b = 0; b < arguments.length; b++) {
            a.push(arguments[b]);
          }
        })(function () {
          $wnd.setTimeout(jr(tg));
          var a, b, c;
          b = $doc.compatMode;
          a = C(w(s, 1), k, 2, 4, ["CSS1Compat"]);
          for (c = 0; c < a.length && a[c] !== b; c++) {}
        });
        var kr = [
          [
            ["locale", "default"],
            ["user.agent", "safari"],
          ],
        ];
        "object" === typeof window &&
          "object" === typeof window.$gwt &&
          (window.$gwt.permProps = kr);
        window.gwtOnLoad = gwtOnLoad;
        gwtOnLoad(undefined, "domdistiller", "", 0);
      })();
    }
    var context = Object.create(window);
    context.setTimeout = function () {};
    context.clearTimeout = function () {};
    initialize();
    var metaKeyword = null;
    function getKeyWord() {
      if (metaKeyword != null) {
        return metaKeyword;
      }
      metaKeyword = "";
      var headMetas = document.head.getElementsByTagName("meta");
      for (var i = 0; i < headMetas.length && i < 300; i++) {
        var meta = headMetas[i];
        if (meta.name === "keywords") {
          metaKeyword = meta.content;
          return metaKeyword;
        }
      }
      return metaKeyword;
    }
    var findBookInfoStep1 = function getBookInfoFromHead() {
      var metas = document.getElementsByTagName("meta");
      var bookInfo = { book_name: null, author: null };
      for (var i = 0; i < metas.length && i < 300; i++) {
        var meta = metas[i];
        if (meta.getAttribute("property") === "og:novel:book_name") {
          bookInfo["book_name"] = meta.getAttribute("content");
        }
        if (meta.getAttribute("property") === "og:novel:author") {
          bookInfo["author"] = meta.getAttribute("content");
        }
        if (bookInfo["book_name"] != null && bookInfo["author"] != null) {
          break;
        }
      }
      return bookInfo;
    };
    var findBookInfoStep2 = function getBookInfoFromBody() {
      var bookInfoDiv = null;
      var bookInfo = { book_name: null, author: null };
      var root = document.body;
      if (root === null) {
        siteInfoJson["errMsg"] = "document body is null !!!";
        root = document;
      }
      var bookInfoClassNames = new Array(
        "bookinfo",
        "book_info",
        "detail",
        "cover",
        "article",
        "cataloginfo",
        "ui_bookinfo",
        "novel-cover",
        "htmlbookinfo",
        "catalog",
        "mod detail",
        "pt-novel",
        "lb_fm",
      );
      for (var i = 0; i < bookInfoClassNames.length; ++i) {
        var class_name = bookInfoClassNames[i];
        var bookInfoDivs = root.getElementsByClassName(class_name);
        if (bookInfoDivs.length != 0) {
          break;
        }
      }
      if (bookInfoDivs.length > 0) {
        var blocks = bookInfoDivs[0].getElementsByClassName("block");
        if (blocks.length > 0) {
          bookInfoDiv = blocks[0];
        } else {
          bookInfoDiv = bookInfoDivs[0];
        }
      }
      if (bookInfoDiv == null) {
        bookInfoDiv = document.body;
      }
      if (bookInfoDiv != null) {
        var bookInfoText = bookInfoDiv.innerText;
        var words = bookInfoText.split("\n");
        for (var i = 0; i < words.length && i < 100; ++i) {
          word = words[i].trim();
          if (word.length === 0) {
            continue;
          }
          var splitWords = word.split("：");
          if (splitWords.length < 2) {
            splitWords = word.split(":");
          }
          if (splitWords.length < 2) {
            continue;
          }
          if (splitWords[0] == "作者") {
            var author = splitWords[1];
            if (splitWords.length > 2) {
              var index = splitWords[1].lastIndexOf("分类");
              if (index === splitWords[1].length - 2) {
                author = splitWords[1].substring(0, index);
              }
            }
            bookInfo["author"] = author;
            var j = i;
            while (j > 0) {
              bookInfo["book_name"] = words[j - 1].trim();
              if (bookInfo["book_name"].length > 0) {
                break;
              }
              --j;
            }
            return bookInfo;
          }
        }
      }
      if (bookInfo.book_name === null) {
        var candidateBookName = document.querySelectorAll("h1, h2, h3");
        if (candidateBookName.length > 0) {
          bookInfo.book_name = candidateBookName[0].innerText;
        } else {
          candidateBookName = document.getElementsByClassName("title");
          if (candidateBookName.length > 0) {
            var patt = new RegExp("《[^\f\r\n\t\v]*》");
            var match = patt.exec(candidateBookName[0].innerText);
            if (match != null) {
              bookInfo.book_name = match[0].substring(1, match[0].length - 1);
            }
          }
        }
      }
      if (bookInfo.book_name === null) {
        var keywordTitleText = getKeyWord() + " " + document.title;
        var nonBookNames = new Array(
          "返回",
          "首页",
          "书库",
          "主页",
          "分类",
          "排行",
          "最新章节",
          "章节目录",
          "全文阅读",
          "章节列表",
          "TXT图书下载网",
          "目录",
        );
        if (keywordTitleText.length > 1) {
          var candidateBookNames = document.querySelectorAll(
            "div, span, a, h1, h2, h3",
          );
          for (var i = 0; i < candidateBookNames.length && i < 20; ++i) {
            var candidateBookNameText = candidateBookNames[i].innerText;
            candidateBookNameText = candidateBookNameText.trim();
            if (
              candidateBookNameText.length < 1 ||
              candidateBookNameText.length > 100
            ) {
              continue;
            }
            if (keywordTitleText.indexOf(candidateBookNameText) != -1) {
              var j;
              for (j = 0; j < nonBookNames.length; ++j) {
                if (nonBookNames[j] === candidateBookNameText) {
                  break;
                }
              }
              if (j >= nonBookNames.length) {
                bookInfo.book_name = candidateBookNameText;
                break;
              }
            }
          }
        }
      }
      return bookInfo;
    };
    function parseExtradata(extra_data) {
      try {
        if (
          extra_data === undefined ||
          extra_data === null ||
          extra_data === "" ||
          extra_data.startsWith("$$EXTRA")
        ) {
          return null;
        }
        return JSON.parse(extra_data);
      } catch (e) {
        window.console.error("parse extra data error!" + e);
      }
      return null;
    }
    function distillImg(image_content, para, res) {
      if (
        window.innerWidth <= 0 ||
        document.body.scrollWidth <= 0 ||
        document.body.scrollHeight <= 0
      ) {
        console.log(
          "Width:" +
            window.innerWidth +
            ", " +
            document.body.scrollWidth +
            ", " +
            document.body.scrollHeight,
        );
        return false;
      }
      var width_limit = window.innerWidth * para.min_width_limit;
      var height_limit = window.innerWidth * para.min_height_limit;
      var page_area = document.body.scrollWidth * document.body.scrollHeight;
      var image_area = 0;
      var total_height = 0;
      var imgs = document.getElementsByTagName("img");
      var img_count = 0;
      for (var i = 0; i < imgs.length; i++) {
        var img_src;
        var is_delay_load = true;
        if (imgs[i].getAttribute("data-original")) {
          img_src = imgs[i].getAttribute("data-original");
        } else {
          if (imgs[i].getAttribute("original")) {
            img_src = imgs[i].getAttribute("original");
          } else {
            if (imgs[i].getAttribute("data-src")) {
              img_src = imgs[i].getAttribute("data-src");
            } else {
              img_src = imgs[i].src;
              is_delay_load = false;
            }
          }
        }
        if (
          is_delay_load &&
          imgs[i].clientWidth > 0 &&
          imgs[i].clientHeight > 0
        ) {
          is_delay_load = false;
        }
        if (
          !imgs[i].complete &&
          (imgs[i].clientWidth == 0 || imgs[i].clientHeight == 0)
        ) {
          is_delay_load = true;
        }
        if (
          is_delay_load ||
          (imgs[i].clientWidth >= width_limit &&
            imgs[i].clientHeight >= height_limit)
        ) {
          var abs = { x: 0, y: 0 };
          var element = imgs[i];
          while (element && element != document.body) {
            abs.x += element.offsetLeft;
            abs.y += element.offsetTop;
            element = element.offsetParent;
          }
          if (
            abs.x + imgs[i].clientWidth <= 0 ||
            abs.x >= document.body.scrollWidth
          ) {
            continue;
          }
          image_area += imgs[i].clientWidth * imgs[i].clientHeight;
          total_height += imgs[i].clientHeight;
          img_count++;
          image_content.content +=
            '<img src="' + img_src + '";  style="width: 100%;"\\>';
          window.testimg = imgs[i];
        }
      }
      console.log(
        "penghu test img percent: " +
          (100 * image_area) / page_area +
          "% (" +
          image_area +
          "/" +
          page_area +
          ") height percent: " +
          (100 * total_height) / document.body.scrollHeight +
          "%",
      );
      if (
        (image_area / page_area < para.min_area_percent &&
          total_height / document.body.scrollHeight < para.min_height_percent &&
          total_height < window.innerHeight * 3) ||
        img_count < para.min_img_count
      ) {
        return false;
      }
      if (image_content.content.length < res[2][1].length) {
        return false;
      }
      image_content.title = document.title;
      return true;
    }
    function nodeInfo(node) {
      var i = 0;
      var node_depth = 0;
      var arr = "";
      var find_depth = false;
      if (node == null || node.parentNode == null) {
        LogUtil.logToConsole("node is null");
        return "";
      }
      var tmp = node.parentNode;
      while (tmp != null) {
        i++;
        if (i < 5) {
          if (tmp.nodeName == "BODY") {
            find_depth = true;
            break;
          }
          node_depth++;
          if (i == 1) {
            arr +=
              '{"cn":"' +
              tmp.className +
              '","id":"' +
              tmp.id +
              '","nn":"' +
              tmp.nodeName +
              '"}';
          } else {
            arr +=
              ',{"cn":"' +
              tmp.className +
              '","id":"' +
              tmp.id +
              '","nn":"' +
              tmp.nodeName +
              '"}';
          }
        } else {
          if (tmp.nodeName == "BODY") {
            find_depth = true;
            break;
          }
          node_depth++;
        }
        tmp = tmp.parentNode;
      }
      if (node_depth > 0) {
        arr = '{"node_depth":"' + node_depth + '","nodes":[' + arr + "]}";
      }
      return arr;
    }
    function distillCatalog(catalog_content, para) {
      console.log("penghu test distillCatalog start: " + JSON.stringify(para));
      var lis = document.getElementsByTagName("li");
      var li_count = 0;
      var find_lis = [];
      var current_lis = [];
      var find_count = 0;
      var alist;
      var para_url = para.url.substring(para.url.indexOf("/"));
      var para_pre_url = para.pre_url.substring(para.pre_url.indexOf("/"));
      var para_next_url = para.next_url.substring(para.next_url.indexOf("/"));
      var path = para.path.substring(para.path.indexOf("/"));
      for (var i = 0; i < lis.length; i++) {
        alist = lis[i].getElementsByTagName("a");
        if (alist.length !== 1) {
          continue;
        }
        var tempUrl = alist[0].href.substring(alist[0].href.indexOf("/"));
        if (tempUrl == para_url) {
          current_lis.push(lis[i]);
        } else {
          if (
            (para.pre_url.startsWith("http") && tempUrl == para_pre_url) ||
            (para.next_url.startsWith("http") && tempUrl == para_next_url)
          ) {
            find_lis.push(lis[i]);
          } else {
            if (
              !para.url.startsWith("http") &&
              para.path.startsWith("http") &&
              tempUrl.startsWith(path)
            ) {
              current_lis.push(lis[i]);
            }
          }
        }
      }
      if (current_lis.length <= 0) {
        return false;
      }
      var max_parent_count = 0;
      var lis_parent;
      current_lis.forEach(function (current_li) {
        var parent_count = 0;
        current_lis.forEach(function (li_for_parent) {
          if (li_for_parent.parentElement == current_li.parentElement) {
            parent_count++;
          }
        });
        find_lis.forEach(function (li_for_parent) {
          if (li_for_parent.parentElement == current_li.parentElement) {
            parent_count++;
          }
        });
        if (parent_count > max_parent_count) {
          max_parent_count = parent_count;
          lis_parent = current_li.parentElement;
        }
      });
      if (!lis_parent) {
        return false;
      }
      var catalog_lis = lis_parent.getElementsByTagName("li");
      if (catalog_lis.length < 5) {
        return false;
      }
      var jsonArr = {};
      jsonArr[document.title] = location.href;
      catalog_content.catalogArr.push(jsonArr);
      var url_path = para.url.substr(
        para.url.indexOf("/"),
        para.url.lastIndexOf("/") + 1 - para.url.indexOf("/"),
      );
      var catalog_length = 0;
      var background_color = ["#ffffff", "#f4f4f4"];
      catalog_content.content =
        '<div id="chapterlist" class="directoryArea" style="list-style: none;">';
      for (var j = 0; j < catalog_lis.length; j++) {
        alist = catalog_lis[j].getElementsByTagName("a");
        if (alist.length !== 1) {
          continue;
        }
        if (alist[0].href.indexOf(url_path) < 0) {
          continue;
        }
        if (catalog_content.cachedFeature == "") {
          catalog_content.cachedFeature = nodeInfo(alist[0]);
        }
        var jsonInfo = {};
        jsonInfo[alist[0].innerText] = alist[0].href;
        catalog_content.catalogInfo.push(jsonInfo);
        catalog_length++;
        console.log(
          "penghu test distillCatalog: " +
            alist[0].innerText.replace(/[\r\n]/g, " ") +
            ": " +
            alist[0].href,
        );
        var url = alist[0].href;
        if (url.indexOf("?") >= 0) {
          url = url.replace("?", "?mtt_in_readmode=1&");
        } else {
          url += "?mtt_in_readmode=1";
        }
        catalog_content.content +=
          '<li><a href="' +
          url +
          '">' +
          alist[0].innerText.replace(/[\r\n]/g, " ") +
          "</a></li>";
      }
      catalog_content.content += "</div>";
      var catalog_path = location.href.substr(
        0,
        location.href.lastIndexOf("/") + 1,
      );
      alist = document.getElementsByTagName("a");
      for (var k = 0; k < alist.length; k++) {
        if (
          alist[k].innerText.indexOf("上一页") >= 0 &&
          alist[k].href.indexOf(catalog_path) >= 0
        ) {
          if (catalog_content.preCatalogUrl === alist[k].href) {
            continue;
          }
          catalog_content.preCatalogUrl = alist[k].href;
          catalog_content.catalogArr.push({ 上一页: alist[k].href });
        } else {
          if (
            alist[k].innerText.indexOf("下一页") >= 0 &&
            alist[k].href.indexOf(catalog_path) >= 0
          ) {
            if (catalog_content.nextCatalogUrl === alist[k].href) {
              continue;
            }
            catalog_content.nextCatalogUrl = alist[k].href;
            catalog_content.catalogArr.push({ 下一页: alist[k].href });
          }
        }
      }
      catalog_content.title = document.title;
      return true;
    }
    function getLinkText(element) {
      var link_text = element.innerText.trim();
      if (link_text == null || link_text == "") {
        link_text = element.textContent.trim().replace(/\s*/g, "");
        if (link_text == null || link_text == "") {
          var alist = element.getElementsByTagName("img");
          if (alist.length === 1) {
            link_text = element.title;
          }
        }
      }
      return link_text;
    }
    function isCatalogPage() {
      console.time("catalog");
      var find_catalog_pattern = false;
      if (
        extraData === undefined ||
        extraData === null ||
        extraData === "" ||
        extraData.startsWith("$$EXTRA")
      ) {
        console.timeEnd("catalog");
        return null;
      }
      var featuresArr = extraData.split("___");
      if (featuresArr.length == 0) {
        console.log("extraData split error");
        console.timeEnd("catalog");
        extraData = "";
        return false;
      }
      var links = document.querySelectorAll("A");
      for (f in featuresArr) {
        var tmp_extra_data_json = parseExtradata(featuresArr[f]);
        var link_min = 0;
        var node_depth = 0;
        if (tmp_extra_data_json == "" || tmp_extra_data_json == null) {
          console.log("features to json error");
          console.timeEnd("catalog");
          extraData = "";
          return false;
        }
        var alist;
        for (var i = 0; i < links.length && i < 500; ++i) {
          var tmpLink = links[i];
          var link_text = getLinkText(tmpLink);
          if (link_text.length > 100) {
            continue;
          }
          if (link_text == null || link_text == "") {
            continue;
          }
          var node_info = null;
          for (j in tmp_extra_data_json.nodes) {
            var node_info = tmp_extra_data_json.nodes[j];
            if (
              tmpLink.parentNode.className == node_info.cn &&
              tmpLink.parentNode.id == node_info.id &&
              tmpLink.parentNode.nodeName == node_info.nn
            ) {
              tmpLink = tmpLink.parentNode;
              find_catalog_pattern = true;
            } else {
              find_catalog_pattern = false;
              link_min = 0;
              break;
            }
          }
          if (find_catalog_pattern) {
            link_min++;
          }
          if (find_catalog_pattern && link_min > 2) {
            tmpLink = links[i];
            while (tmpLink.parentNode) {
              if (tmpLink.parentNode.nodeName == "BODY") {
                break;
              }
              node_depth++;
              tmpLink = tmpLink.parentNode;
            }
            if (node_depth == tmp_extra_data_json.node_depth) {
              extraData =
                '{"start_idx":"' +
                (i - link_min + 1) +
                '","node_depth":"' +
                node_depth +
                '","anchor_num":"' +
                links.length +
                '"}';
              break;
            } else {
              find_catalog_pattern = false;
              link_min = 0;
            }
          }
        }
        if (find_catalog_pattern && link_min > 2) {
          resNovel["matchedFeature"] = JSON.stringify(featuresArr[f]);
          console.timeEnd("catalog");
          return true;
        }
      }
      console.timeEnd("catalog");
      extraData = "";
      return false;
    }
    function getDistillRule(distillRules) {
      console.log(
        "getDistillRule, host = " +
          window.location.hostname +
          ", url = " +
          window.location.href,
      );
      if (isForeignLanguage()) {
        console.log("WebPage Foreign Language");
        var enRules = { wholePage: true };
        return JSON.stringify(enRules);
      }
      var rules = distillRules.get(window.location.hostname);
      if (!rules || rules == undefined) {
        return JSON.stringify({});
      }
      var url = window.location.href;
      for (var i = 0; i < rules.length; ++i) {
        var supportedUrls = rules[i]["supportedUrls"];
        console.log("getDistillRule, supportedUrls = " + supportedUrls);
        if (!supportedUrls || supportedUrls == undefined) {
          continue;
        }
        var re = new RegExp(supportedUrls);
        if (re.test(url)) {
          console.log("getDistillRule, match sucess!");
          return JSON.stringify(rules[i]);
        }
      }
      return JSON.stringify({});
    }
    function isForeignLanguage() {
      var langUsed = document.documentElement.lang;
      console.log("isForeignLanguage, lang = " + langUsed);
      if (!langUsed || langUsed.indexOf("zh") == 0) {
        return false;
      }
      return true;
    }
    var distillRules = new Map();
    distillRules.set("baike.baidu.com", [
      {
        supportedUrls: ".*",
        contents:
          "div.summary-content,div.BK-main-content" +
          ",div[class*='mainContent_'],div[class*='smallFeatureWrap_']",
        notContents:
          ".content-video-list,.floatTashuo-list-wrapper,.content-albums,.lemma-map" +
          ",div[class*='topToolsBox_'],div[class*='btnList_'],div[class*='albumList_'],a[class*='albumWrapper_']",
        unlikely: "",
        maybe: "",
      },
    ]);
    distillRules.set("zhidao.baidu.com", [
      { supportedUrls: ".*", maybe: "|replies-container|has-comment-count" },
    ]);
    distillRules.set("wk.baidu.com", [
      {
        supportedUrls: "^https?:\\/\\/wk\\.baidu\\.com\\/([^\\/\\s]*)?$",
        contents: "[class='doc-list-wrap']",
      },
      {
        supportedUrls: ".*",
        notContents: "div[class*='vip-choice'],div[class*='app-choice']",
      },
    ]);
    distillRules.set("wenku.baidu.com", [
      {
        supportedUrls: "^https?:\\/\\/wenku\\.baidu\\.com\\/view\\/([^\\s]*)?$",
        contents: "body",
        notContents:
          "#wk-chat,#app-left,#app-reader-editor-below,.tool-bar-wrap,.top-bar-right,.claim-doc",
      },
      {
        supportedUrls: "^https?:\\/\\/wenku\\.baidu\\.com\\/aggs\\/([^\\s]*)?$",
        contents: "body",
        notContents:
          "#wk-chat,#app-left,#app-reader-editor-below,.tool-bar-wrap,.top-bar-right,.pc-cashier-card,.copyright-wrap",
      },
      {
        supportedUrls: "^https?:\\/\\/wenku\\.baidu\\.com\\/([^\\/\\s]*)?$",
        contents: "body",
        notContents: ".right-chat-wrapper",
        maybe: "|recommend",
      },
    ]);
    distillRules.set("m.baidu.com", [
      {
        supportedUrls:
          "^https?:\\/\\/m\\.baidu\\.com(\\/[^\\/\\?]*)*\\/s\\?([^\\/\\s]*)?$",
        contents: ".c-result-content",
      },
      { supportedUrls: ".*", notContents: ".hui-pull__content" },
    ]);
    distillRules.set("www.baidu.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.baidu\\.com\\/s\\?([^\\/\\s]*)?$",
        contents: "#content_left",
        notContents: ".sc-icon,.c-icon,.result-molecule",
      },
    ]);
    distillRules.set("fanyi.baidu.com", [
      {
        supportedUrls:
          "^https?:\\/\\/fanyi\\.baidu\\.com(\\/[^\\/\\?]*)*\\?([^\\s]*)?$",
        contents: "#editor-text",
      },
    ]);
    distillRules.set("hanyu.baidu.com", [
      {
        supportedUrls: ".*",
        contents:
          "div.poem-detail-body .poem-detail-item,div.poem-detail-body #means_zhushi_div",
        maybe: "|header",
      },
    ]);
    distillRules.set("www.bing.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.bing\\.com\\/search\\?([^\\s]*)?$",
        contents: "#b_results",
      },
    ]);
    distillRules.set("www.so.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.so\\.com\\/s\\?([^\\/\\s]*)?$",
        contents: ".result",
      },
    ]);
    distillRules.set("www.sogou.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.sogou\\.com(\\/[^\\/\\?]*)*\\?([^\\/\\s]*)?$",
        contents: ".results",
      },
    ]);
    distillRules.set("baike.sogou.com", [
      {
        supportedUrls:
          "^https?:\\/\\/baike\\.sogou\\.com\\/m\\/collection([^\\s]*)?$",
        contents: "#root .title,#root .intro,#root ul li .coll-item",
        notContents: ".item-desc-show-all",
      },
      {
        supportedUrls: ".*",
        contents:
          "div#abstract [class^='abstract-'],div#base-info,section.bkcard[id^='paragraph_']" +
          ",div[class*='lemma_container']",
        notContents:
          "span.distribution-icon,div.album-container" +
          ",div[class*='lemma_toolbar'],div[id='bottomRelationSearch'],a[class*='btn_edit'],.album_title",
        unlikely: "",
        maybe: "",
      },
    ]);
    distillRules.set("hanyu.sogou.com", [
      {
        supportedUrls:
          "^https?:\\/\\/hanyu\\.sogou\\.com\\/result\\?([^\\s]*)?$",
        contents: ".wrapper-hanyu",
        notContents: ".collect-box,.hanyu-video,#relate,.poety-recommend",
      },
    ]);
    distillRules.set("fanyi.sogou.com", [
      {
        supportedUrls:
          "^https?:\\/\\/fanyi\\.sogou\\.com\\/text\\?keyword([^\\s]*)?$",
        contents:
          "div.translate-pc-main.text-translate div.trans-box,div.translate-pc-main.text-translate div.container",
        notContents: ".operate-box,.trans-to-bar",
      },
    ]);
    distillRules.set("bbs.csdn.net", [
      { supportedUrls: ".*", contents: "div[id^='blogDetail']" },
    ]);
    distillRules.set("d.wanfangdata.com.cn", [
      {
        supportedUrls: ".*",
        contents: "div.detailIntro,div.thesisFlexDetaiIntro",
        notContents: "div.detailIcon,label.fullText,div.Sort",
      },
    ]);
    distillRules.set("maimai.cn", [
      {
        supportedUrls: ".*",
        notContents:
          "div[class^='CommentCard_card__'],div[class^='style_recFeeds__']",
        maybe: "|_feedHeader__",
      },
    ]);
    distillRules.set("www.xiaohongshu.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.xiaohongshu\\.com\\/search_result\\?keyword([^\\/\\s]*)?$",
        contents: "div.main-container div.feeds-container",
        notContents: "div.feeds-container div.author-wrapper",
        maybe: "|footer",
      },
      {
        supportedUrls: ".*",
        notContents:
          "div.user-notes-box,i.author-desc-trigger,div.topic-container,div[class^='hotlist-'],.engage-bar-container,.side-bar",
        maybe: "|video-banner",
      },
    ]);
    distillRules.set("xw.qq.com", [
      { supportedUrls: ".*", notContents: "a[id*='_tuijian_']" },
    ]);
    distillRules.set("www.zhipin.com", [
      {
        supportedUrls: ".*",
        contents: "[id='main'],div.job-detail-container",
        notContents:
          "div[class*='job-recomend'],div[class='links'],div[class='pos-bread']",
        maybe: "|job-banner|header",
      },
    ]);
    distillRules.set("m.zhipin.com", [
      {
        supportedUrls: ".*",
        contents: "body",
        notContents:
          "div[class*='job-recomend'],div[class='links'],div[class='pos-bread']",
        maybe: "|job-banner",
      },
    ]);
    distillRules.set("m.weibo.cn", [
      {
        supportedUrls: "^https?:\\/\\/m\\.weibo\\.cn\\/search\\?([^\\/\\s]*)?$",
        contents: ".card-wrap .card-main",
        notContents: ".m-ctrl-box",
      },
      {
        supportedUrls: "^https?:\\/\\/m\\.weibo\\.cn\\/u\\/([^\\/\\s]*)?$",
        contents:
          ".mod-fil-name,.mod-fil-fans,mod-fil-desc,.card-wrap .card-main",
        notContents: ".m-ctrl-box",
      },
      {
        supportedUrls: "^https?:\\/\\/m\\.weibo\\.cn\\/([^\\/\\s]*)?$",
        contents: "div[class='nav-main'],div[class='wb-item-wrap']",
      },
    ]);
    distillRules.set("weibo.com", [
      { supportedUrls: ".*", contents: "main div[class*='Main_full_']" },
    ]);
    distillRules.set("s.weibo.com", [
      {
        supportedUrls:
          "^https?:\\/\\/s\\.weibo\\.com\\/weibo\\?q([^\\/\\s]*)?$",
        contents: ".card-wrap .card-feed",
      },
    ]);
    distillRules.set("bbs.cnool.net", [
      {
        supportedUrls: "^https?:\\/\\/bbs\\.cnool\\.net(\\/)?$",
        wholePage: true,
      },
    ]);
    distillRules.set("www.bilibili.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.bilibili\\.com\\/bangumi\\/play([^\\s]*)?$",
        contents: "div.main-container div.player-left-components",
        notContents: "div.player-left-components div.toolbar",
      },
      {
        supportedUrls:
          "^https?:\\/\\/www\\.bilibili\\.com\\/video\\/([^\\s]*)?$",
        wholePage: true,
      },
    ]);
    distillRules.set("www.hao123.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.hao123\\.com(\\/)?$",
        wholePage: true,
      },
    ]);
    distillRules.set("user.guancha.cn", [
      { supportedUrls: ".*", contents: ".index-list" },
    ]);
    distillRules.set("www.shangxueba.com", [
      {
        supportedUrls: ".*",
        contents:
          "div.detail_flex div.detnew_subject,div.detail_flex div.detnew_interest",
      },
    ]);
    distillRules.set("www.gaokao.cn", [
      { supportedUrls: ".*", contents: "div.main" },
    ]);
    distillRules.set("translate.alibaba.com", [
      {
        supportedUrls: "^https?:\\/\\/translate\\.alibaba\\.com(\\/)?$",
        wholePage: true,
      },
    ]);
    distillRules.set("www.op.gg", [{ supportedUrls: ".*", wholePage: true }]);
    distillRules.set("www.people.cn", [
      {
        supportedUrls: "^https?:\\/\\/www\\.people\\.cn\\/([^\\/\\s]*)?$",
        contents: "body",
        maybe: "|menu_item",
      },
    ]);
    distillRules.set("xueqiu.com", [
      {
        supportedUrls: "^https?:\\/\\/xueqiu\\.com\\/([^\\/\\s]*)?$",
        contents:
          "[class*='_home-banner_'],[class*='_home__business_'],[class*='_home__timeline__tabs_'],[class*='_home__timeline__hotspot_'],[class*='_home__timeline__item_']:not([class*='_home__timeline__item__ft_'])",
        maybe: "|home-banner",
      },
    ]);
    distillRules.set("muse.jhu.edu", [
      {
        supportedUrls: "^https?:\\/\\/muse\\.jhu\\.edu\\/([^\\/\\s]*)?$",
        contents: "div[id='home_main']",
      },
    ]);
    distillRules.set("m.douban.com", [
      {
        supportedUrls:
          "^https?:\\/\\/m\\.douban\\.com\\/movie\\/subject\\/([^\\s]*)?$",
        contents:
          "div[id='subject-header-container'],section[class*='subject-intro'],section[id='celebrities'],section[class*='subject-comments']",
        maybe: "|header|comment",
      },
    ]);
    distillRules.set("movie.douban.com", [
      {
        supportedUrls:
          "^https?:\\/\\/movie\\.douban\\.com\\/subject\\/([^\\s]*)?$",
        contents: "div[id='content'] .article",
        maybe: "|related|recommend|comment",
      },
      {
        supportedUrls:
          "^https?:\\/\\/movie\\.douban\\.com\\/celebrity\\/([^\\s]*)?$",
        contents: "div[id='content'] .article",
        notContents: ".paginator",
      },
    ]);
    distillRules.set("www.douban.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.douban\\.com\\/personage\\/([^\\s]*)?$",
        contents: "div[id='content'] .article",
        maybe: "|related|recommend|comment",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.douban\\.com\\/group\\/([^\\s]*)?$",
        contents: "body",
        maybe: "|comment",
      },
    ]);
    distillRules.set("www.sciencedirect.com", [
      {
        supportedUrls: ".*",
        contents: "body",
        notContents: "[class='accessbar-sticky']",
      },
    ]);
    distillRules.set("www.sohu.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.sohu\\.com\\/xchannel\\/([^\\s]*)?$",
        contents: "body",
        notContents:
          "div[class='TPLFeedBottom'],.n-m-container,.header-right-content",
        maybe: "|recommend|extra|title-menu-list",
      },
      { supportedUrls: ".*", notContents: "a[id='backsohucom']" },
    ]);
    distillRules.set("m.sohu.com", [
      { supportedUrls: ".*", title: ".sgui-content .sgui-text-title" },
    ]);
    distillRules.set("quotes.sina.cn", [
      {
        supportedUrls: ".*",
        contents:
          "nav div[class*='sft-header-title'],div[id='HQBox_Main'],div[class*='-v-news-wrap']",
        maybe: "|header",
      },
    ]);
    distillRules.set("finance.sina.com.cn", [
      {
        supportedUrls:
          "^https?:\\/\\/finance\\.sina\\.com\\.cn\\/realstock\\/([^\\s]*)?$",
        contents: ".main_wrap",
      },
      {
        supportedUrls:
          "^https?:\\/\\/finance\\.sina\\.com\\.cn\\/futures\\/quotes\\/([^\\s]*)?$",
        contents: "#container #middle",
      },
      {
        supportedUrls:
          "^https?:\\/\\/finance\\.sina\\.com\\.cn\\/head\\/([^\\s]*)?$",
        contents: "body",
      },
      {
        supportedUrls:
          "^https?:\\/\\/finance\\.sina\\.com\\.cn\\/([^\\/\\s]*)?$",
        contents: "body",
      },
      {
        supportedUrls:
          "^https?:\\/\\/finance\\.sina\\.com\\.cn\\/stock\\/index.shtml",
        contents: "body",
      },
      { supportedUrls: ".*", notContents: ".appendQr_wrap" },
    ]);
    distillRules.set("client.sina.com.cn", [
      { supportedUrls: ".*", notContents: ".appendQr_wrap" },
    ]);
    distillRules.set("h5.baike.qq.com", [
      {
        supportedUrls: ".*",
        contents: "div[class*='sgui-customer-content']",
        notContents: "div[id='sgui-collapse']",
      },
    ]);
    distillRules.set("view.inews.qq.com", [
      {
        supportedUrls:
          "^https?:\\/\\/view\\.inews\\.qq\\.com\\/hotEvent\\/([^\\s]*)?$",
        contents: "body",
        notContents: "div[class*='header_wap-header_'],[class*='style_ad-']",
        maybe: "|header|comment",
      },
      {
        supportedUrls: ".*",
        notContents:
          "div[class*='ad-title_'],div[class*='-ad_'],div[class*='copyright_wrapper__']",
        extractAllOnFailure: false,
      },
    ]);
    distillRules.set("new.qq.com", [
      {
        supportedUrls: ".*",
        notContents: ".article-status .statement,.right-bar",
      },
    ]);
    distillRules.set("mbd.baidu.com", [
      {
        supportedUrls: ".*",
        contents:
          "div[class='video-info'] div[class*='videoInfo']" +
          ",div[class*='index-module_articleContainer_']",
        notContents:
          "div[class*='index-module_relateContainer_'],div[class*='index-module_interactContainer_'],div[class*='index-module_btn_']",
        maybe: "|header",
        extractAllOnFailure: false,
      },
    ]);
    distillRules.set("ubook.reader.qq.com", [
      {
        supportedUrls: ".*",
        contents:
          "section[class*='detail-x__header'],section[class*='detail-x__detail'],section[class*='detail-x__catalogue'],section[class*='detail-x__content'] [class*='detail-x__content-']",
        notContents: "[class*='detail-x__catalogue-entry']",
        maybe: "|header",
      },
    ]);
    distillRules.set("m.qidian.com", [
      {
        supportedUrls: "^https?:\\/\\/m\\.qidian\\.com\\/book\\/([^\\s]*)?$",
        contents:
          "div[class='detail__header'],div[class*='detail__summary'],div[class*='detail__chapters'],div[id='reader-content']",
        notContents: "span[class='review']",
        maybe: "|header",
      },
      {
        supportedUrls:
          "^https?:\\/\\/m\\.qidian\\.com\\/bookrecommend\\/([^\\s]*)?$",
        contents:
          "div[class='recommend__header-detail'],section[id='bookSummary'],div[class='read-section']",
        notContents: "a[class='review-count']",
        maybe: "|header|recommend",
      },
    ]);
    distillRules.set("www.qidian.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.qidian\\.com\\/([^\\/\\s]*)?$",
        contents: "body",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.qidian\\.com\\/role\\/([^\\s]*)?$",
        contents: ".role-header,.role-content",
        maybe: "|header",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.qidian\\.com\\/book\\/([^\\s]*)?$",
        contents:
          ".book-information-normal,.author-information,.intro-detail,#bookCatalogSection,.honor-works",
        notContents: "span[class='review'],em.iconfont",
        maybe: "|header",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.qidian\\.com\\/ask\\/([^\\s]*)?$",
        contents: ".left-content .topic-list",
      },
      {
        supportedUrls: ".*",
        notContents: "span.review",
        contents: ".main-content-wrap",
      },
    ]);
    distillRules.set("www.jjwxc.net", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.jjwxc\\.net\\/onebook.php\\?([^\\s]*)?$",
        contents: "td[class='readtd']:first-child",
      },
    ]);
    distillRules.set("wap.jjwxc.net", [
      {
        supportedUrls:
          "^https?:\\/\\/wap\\.jjwxc\\.net\\/book2\\/([^\\/\\s]*)?$",
        contents: "body",
        notContents: "div.ft",
      },
      {
        supportedUrls: "^https?:\\/\\/wap\\.jjwxc\\.net\\/assort\\?([^\\s]*)?$",
        contents: "#diss table",
      },
      {
        supportedUrls: ".*",
        notContents: "#note_danmu_wrapper,.module #note_danmu_wrapper ~ *",
      },
    ]);
    distillRules.set("m.jjwxc.net", [
      {
        supportedUrls: "^https?:\\/\\/m\\.jjwxc\\.net\\/book2\\/([^\\/\\s]*)?$",
        contents: "body",
        notContents: "div.ft",
      },
      {
        supportedUrls: ".*",
        notContents:
          "div.show_menu,div.ft" +
          ",#note_danmu_wrapper,.module #note_danmu_wrapper ~ *",
        maybe: "|comment",
      },
    ]);
    distillRules.set("36kr.com", [
      {
        supportedUrls: "^https?:\\/\\/36kr\\.com\\/([^\\/\\s]*)?$",
        contents: "body",
      },
      { supportedUrls: ".*", notContents: "div[class*='relate-articles']" },
    ]);
    distillRules.set("www.toutiao.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.toutiao\\.com\\/video\\/([^\\s]*)?$",
        notContents:
          ".video-detail-tabs,.video-list,.load-more-text,.video-slider-wrapper",
      },
      {
        supportedUrls:
          "^https?:\\/\\/www\\.toutiao\\.com\\/answer\\/([^\\s]*)?$",
        contents:
          ".wenda-answer-item .wenda-answer-author .author,.wenda-answer-item .wenda-answer-content",
        notContents: "",
        maybe: "|extra",
      },
    ]);
    distillRules.set("www.163.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.163\\.com\\/v\\/video\\/([^\\s]*)?$",
        notContents: ".post_top",
        extractAllOnFailure: false,
      },
      { supportedUrls: ".*", notContents: ".post_statement" },
    ]);
    distillRules.set("mparticle.uc.cn", [
      {
        supportedUrls:
          "^https?:\\/\\/mparticle\\.uc\\.cn\\/video.html([^\\s]*)?$",
        contents:
          "div[class*='index-videoContainer-']" +
          ",div[class*='pc-videoInfoContainer-']",
        notContents:
          "div[class*='index-videoIconContainer-']" +
          ",div[class*='pc-followContainer-']",
      },
    ]);
    distillRules.set("www.woshipm.com", [
      {
        supportedUrls: "^https?:\\/\\/www\\.woshipm\\.com\\/([^\\/\\s]*)?$",
        contents: "body",
      },
      {
        supportedUrls:
          "^https?:\\/\\/www\\.woshipm\\.com\\/category\\/([^\\s]*)?$",
        contents: "body",
      },
      { supportedUrls: ".*", notContents: ".pm-adTitle" },
    ]);
    distillRules.set("weread.qq.com", [
      {
        supportedUrls: "^https?:\\/\\/weread\\.qq\\.com\\/wrpage\\/([^\\s]*)?$",
        contents: "body",
        maybe: "|header",
      },
      {
        supportedUrls:
          "^https?:\\/\\/weread\\.qq\\.com\\/web\\/bookDetail\\/([^\\s]*)?$",
        contents:
          ".readerBookInfo,.book_ratings_container,button.showAll div,.reader_bestBookMark_container",
        notContents:
          ".book_rating_item_bar_container,.book_ratings_button_container",
        maybe: "|header|footer",
      },
      {
        supportedUrls:
          "^https?:\\/\\/weread\\.qq\\.com\\/web\\/search\\/([^\\s]*)?$",
        contents: ".search_bookDetail_wrap",
        maybe: "|header",
      },
    ]);
    distillRules.set("www.360doc.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.360doc\\.com\\/content\\/([^\\s]*)?$",
        contents: "div.art_topdata,div#articlecontent",
        notContents: "div.article_showall",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.360doc\\.com\\/([^\\/\\s]*)?$",
        contents: "body",
        notContents: "div.content_top",
      },
    ]);
    distillRules.set("www.maigoo.com", [
      {
        supportedUrls: ".*",
        notContents: ".publichtml,#mzsmcontent,div[class*='top10list']",
      },
    ]);
    distillRules.set("m.maigoo.com", [
      {
        supportedUrls: ".*",
        notContents: ".publichtml,#mzsmcontent,div[class*='top10list']",
      },
    ]);
    distillRules.set("m.okjike.com", [
      {
        supportedUrls: ".*",
        contents: ".post-page .post-wrap",
        notContents: ".like-count,.comment-count,.repost-count",
      },
    ]);
    distillRules.set("www.mdpi.com", [
      {
        supportedUrls: ".*",
        contents: ".content__container .article-content",
        notContents: ".article-icons",
      },
    ]);
    distillRules.set("link.springer.com", [
      {
        supportedUrls:
          "^https?:\\/\\/link\\.springer\\.com\\/search\\?([^\\s]*)?$",
        contents: ".app-search-layout div[data-test='results-data']",
        notContents: ".c-status-message",
      },
      {
        supportedUrls: ".*",
        notContents:
          ".c-article-references__item .c-article-references__links,.c-article-references__download",
      },
    ]);
    distillRules.set("yandex.com", [
      {
        supportedUrls: "^https?:\\/\\/yandex\\.com\\/search\\/([^\\s]*)?$",
        contents: "#search-result",
      },
    ]);
    distillRules.set("www.haogushi8.cc", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.haogushi8\\.cc\\/sort\\/([^\\s]*)?$",
        contents: "div.bookbox",
      },
    ]);
    distillRules.set("www.zhihu.com", [
      {
        supportedUrls:
          "^https?:\\/\\/www\\.zhihu\\.com\\/question\\/([^\\/\\?])*\\/answer\\/([^\\s]*)?$",
        contents: ".ContentItem",
        maybe: "|meta|related",
      },
      {
        supportedUrls: "^https?:\\/\\/www\\.zhihu\\.com\\/search\\?([^\\s]*)?$",
        contents: ".ContentItem",
        maybe: "|meta|related",
      },
      {
        supportedUrls: ".*",
        notContents: ".sgui-hint,sgui-recommend,.Button",
        maybe: "|meta|related",
      },
    ]);
    distillRules.set("e.fenbige.com", [
      {
        supportedUrls: "^https?:\\/\\/e\\.fenbige\\.com\\/book\\/([^\\s]*)?$",
        contents: ".detail-box,.row-section",
        notContents: ".index-container",
      },
    ]);
    distillRules.set("m.fushutxt.cc", [
      {
        supportedUrls:
          "^https?:\\/\\/m\\.fushutxt\\.cc\\/([^\\/\\?])*\\/index_([^\\s]*)?$",
        contents: "body",
        notContents:
          ".top,.header-banner,.nav,#searchform,.list_page,.links,.search,.copyright",
      },
    ]);
    var distiller = context.org.chromium.distiller.DomDistiller;
    var siteType = "$$SITETYPE";
    var bookName = "$$BOOKNAME";
    var extraData = "$$EXTRADATA";
    var isExtractTextOnly = "$$ISEXTRACTTEXTONLY";
    var versionSign = "20240813111851";
    if (siteType.startsWith("$$")) {
      siteType = "news";
    }
    if (bookName.startsWith("$$")) {
      bookName = "";
    }
    var res = {};
    var resNovel = {};
    if (siteType == "news") {
      if (isCatalogPage()) {
        siteType = "catalog_page";
      }
    }
    if (siteType == "content_page") {
      var extra_data_json = parseExtradata(extraData);
      if (extra_data_json != null) {
        if (extra_data_json["chapter_content"] != undefined) {
          options[5] = extra_data_json["chapter_content"];
        }
        if (extra_data_json["chapter_title"] != undefined) {
          options[6] = extra_data_json["chapter_title"];
        }
        if (extra_data_json["chapter_next_url"] != undefined) {
          options[7] = extra_data_json["chapter_next_url"];
        }
        if (extra_data_json["chapter_pre_url"] != undefined) {
          options[8] = extra_data_json["chapter_pre_url"];
        }
        if (extra_data_json["catalog_url"] != undefined) {
          options[9] = extra_data_json["catalog_url"];
        }
      }
      res = distiller.applyWithOptions(options, siteType, bookName);
      resNovel["chapterTitle"] = res[1];
      if (res[14] == undefined || res[14] == "") {
        resNovel["title"] = res[1];
      } else {
        resNovel["title"] = res[14];
      }
      resNovel["owner"] = "";
      resNovel["content"] = res[2][1];
      resNovel["nextUrl"] = res[3][1];
      resNovel["preUrl"] = res[3][2];
      resNovel["url"] = res[11];
      resNovel["catalogUrl"] = res[12];
      resNovel["siteType"] = res[13];
      if (res[15] != "") {
        resNovel["originalPageUrl"] = res[15];
      }
      var chapter_title = document.querySelector(".title, .nr_title");
      if (chapter_title != null) {
        var patt = new RegExp("第[^\f\r\n\t\v]*章");
        var titleContent = chapter_title.textContent;
        var match = patt.exec(titleContent);
        if (match != null) {
          resNovel["chapterTitle"] = titleContent;
        }
      }
    } else {
      if (siteType == "catalog_page") {
        var extra_data_json = parseExtradata(extraData);
        var catalog_options = {};
        if (extra_data_json != null) {
          if (extra_data_json["reg_catalog_item"] != undefined) {
            catalog_options[1] = extra_data_json["reg_catalog_item"];
          }
          if (extra_data_json["reg_more_catalog"] != undefined) {
            catalog_options[2] = extra_data_json["reg_more_catalog"];
          }
          if (extra_data_json["author"] != undefined) {
            catalog_options[3] = extra_data_json["author"];
          }
          if (extra_data_json["book_name"] != undefined) {
            catalog_options[4] = extra_data_json["book_name"];
          }
          if (extra_data_json["book_pic_url"] != undefined) {
            catalog_options[5] = extra_data_json["book_pic_url"];
          }
          if (extra_data_json["start_idx"] != undefined) {
            catalog_options[6] = extra_data_json["start_idx"];
            console.log("start_idx=" + catalog_options[6]);
          }
          if (extra_data_json["node_depth"] != undefined) {
            catalog_options[7] = extra_data_json["node_depth"];
            console.log("node_depth=" + catalog_options[7]);
          }
          if (extra_data_json["anchor_num"] != undefined) {
            catalog_options[8] = extra_data_json["anchor_num"];
            console.log("anchor_num=" + catalog_options[8]);
          }
        }
        try {
          res = distiller.applyCatalog(catalog_options, siteType, bookName);
        } catch (e) {}
        resNovel["owner"] = "";
        resNovel["nextCatalogUrl"] = res[4][1];
        resNovel["preCatalogUrl"] = res[4][2];
        resNovel["url"] = res[2];
        resNovel["catalogInfo"] = "";
        resNovel["posOrder"] = res[3][2][1];
        resNovel["revOrder"] = res[3][2][2];
        resNovel["needToRedirect"] = res[6][1];
        resNovel["catalogArr"] = res[6][2];
        resNovel["redirectUrl"] = res[6][3];
        resNovel["pic"] = res[7];
        resNovel["siteType"] = res[1];
        resNovel["content"] = res[3][1];
        resNovel["cachedFeature"] = JSON.stringify(res[3][3]);
        if (
          extra_data_json != null &&
          (extra_data_json["author"] != undefined ||
            extra_data_json["book_name"] != undefined)
        ) {
          resNovel["title"] = res[5];
          resNovel["owner"] = res[8];
        }
        if (
          resNovel["title"] == undefined ||
          resNovel["title"] === "$$BOOKNAME"
        ) {
          var bookInfo = findBookInfoStep1();
          if (bookInfo.book_name != null && bookInfo.author) {
            resNovel["title"] = bookInfo.book_name;
            resNovel["owner"] = bookInfo.author;
          } else {
            bookInfo = findBookInfoStep2();
            if (bookInfo.book_name === null || bookInfo.book_name.length < 1) {
              bookInfo.book_name = document.title;
            }
            if (bookInfo.book_name != null) {
              resNovel["title"] = bookInfo.book_name;
              resNovel["owner"] = bookInfo.author;
              if (resNovel["owner"] == null) {
                resNovel["owner"] = res[8];
              }
            } else {
              resNovel["title"] = res[5];
              resNovel["owner"] = res[8];
            }
          }
        }
      } else {
        if (siteType == "catalog_page_by_url") {
          var para = { url: "", pre_url: "", next_url: "", path: "" };
          var extra_data_json = parseExtradata(extraData);
          var url_path = "";
          if (extra_data_json != null) {
            if (extra_data_json["url"] != undefined) {
              para.url = extra_data_json["url"];
              url_path = para.url.substring(0, para.url.lastIndexOf("/"));
            }
            if (extra_data_json["pre_url"] != undefined) {
              para.pre_url = extra_data_json["pre_url"];
            }
            if (extra_data_json["next_url"] != undefined) {
              para.next_url = extra_data_json["next_url"];
            }
            if (extra_data_json["path"] != undefined) {
              para.path = extra_data_json["path"];
              url_path = para.path;
            }
          }
          var catalog_content = {
            catalogArr: [],
            catalogInfo: [],
            preCatalogUrl: "",
            nextCatalogUrl: "",
            content: "",
            title: "",
            cachedFeature: "",
          };
          resNovel["siteType"] = "catalog_page_by_url";
          if (distillCatalog(catalog_content, para)) {
            console.log(
              "penghu test distillCatalog success " +
                JSON.stringify(catalog_content),
            );
            resNovel["title"] = catalog_content.title;
            resNovel["chapterTitle"] = catalog_content.title;
            resNovel["content"] = catalog_content.content;
            resNovel["url"] = window.location.href;
            resNovel["nextUrl"] = catalog_content.nextCatalogUrl;
            resNovel["preUrl"] = catalog_content.preCatalogUrl;
            resNovel["nextCatalogUrl"] = catalog_content.nextCatalogUrl;
            resNovel["preCatalogUrl"] = catalog_content.preCatalogUrl;
            resNovel["path"] = url_path;
            resNovel["cachedFeature"] = JSON.stringify(
              catalog_content.cachedFeature,
            );
          }
        } else {
          if (siteType == "news") {
            if (isExtractTextOnly === "false") {
              options[1] = false;
            }
            var image_content = { content: "", title: "" };
            var para = {
              min_width_limit: 0.6,
              min_height_limit: 0.5,
              min_area_percent: 0.8,
              min_height_percent: 0.8,
              min_img_count: 5,
            };
            options[10] = getDistillRule(distillRules);
            console.log("distillRule: " + options[10]);
            res = distiller.applyWithOptions(options, siteType, bookName);
            var img_page = false;
            if (img_page) {
              res = distiller.applyWithOptions(options, "img_page", bookName);
              window.console.error("img_page " + image_content.title);
            }
            if (img_page) {
              resNovel["title"] = image_content.title;
              resNovel["chapterTitle"] = image_content.title;
              resNovel["content"] = image_content.content;
              resNovel["siteType"] = "img_page";
              resNovel["nextTitle"] = res[3][4];
              resNovel["prevTitle"] = res[3][5];
              resNovel["url"] = window.location.href;
            } else {
              if (res[14] == undefined || res[14] == "") {
                resNovel["title"] = res[1];
              } else {
                resNovel["title"] = res[14];
              }
              resNovel["chapterTitle"] = res[1];
              resNovel["content"] = res[2][1];
              resNovel["siteType"] = res[13];
              resNovel["url"] = res[11];
            }
            resNovel["nextUrl"] = res[3][1];
            resNovel["preUrl"] = res[3][2];
            resNovel["catalogUrl"] = res[12];
            if (res[16] != "") {
              resNovel["iframeSrc"] = res[16];
            }
          } else {
            bookName = "";
            res = distiller.applyWithOptions(options, "other_page", bookName);
            resNovel["chapterTitle"] = res[1];
            if (res[14] == undefined || res[14] == "") {
              resNovel["title"] = res[1];
            } else {
              resNovel["title"] = res[14];
            }
            resNovel["owner"] = "";
            resNovel["content"] = res[2][1];
            resNovel["nextUrl"] = res[3][1];
            resNovel["preUrl"] = res[3][2];
            resNovel["url"] = res[11];
            resNovel["catalogUrl"] = res[12];
            resNovel["siteType"] = res[13];
          }
        }
      }
    }
    resNovel["userSelectEnabled"] = res[17];
    console.log("userSelectEnabled: " + res[17]);
    resNovel["version"] = versionSign;
    if (stringify_output === "true") {
      return JSON.stringify(resNovel);
    }
    return resNovel;
  } catch (e) {
    var error_msg = "Error during distillation: " + e;
    if (e.stack != undefined) {
      error_msg += " e.stack:" + e.stack;
    }
    window.console.error(error_msg);
    var exception_result = {};
    exception_result["exceptionMsg"] = error_msg;
    if (stringify_output === "true") {
      return JSON.stringify(exception_result);
    }
    return exception_result;
  }
  return resNovel;
}

(() => {
  const getLogo = () => {
    const faviconLink = document.querySelector(
      "link[rel='shortcut icon'], link[rel='icon']",
    );
    if (faviconLink) {
      const faviconHref = faviconLink.getAttribute("href");
      return faviconHref;
    } else {
      // Fallback to default favicon location
      return `${location.origin}/favicon.ico`;
    }
  };

  const getImage = () => {
    const imgsList = Array.from(document.getElementsByTagName("img"))
      .filter(
        (img) =>
          img.width > 200 &&
          img.width < 1000 &&
          img.height > 200 &&
          img.height < 1000,
      )
      .filter((img) => !!img.src && img.src.startsWith("http"))
      .sort((a, b) => b.width * b.height - a.width * a.height)
      .map((img) => img.src);

    return imgsList;
  };

  const res = distiller((options = { 1: true }), "false");
  res.logo = getLogo();
  res.imgs = getImage();
  console.log("🚀 ~ res:", res);
  return res;
})();
