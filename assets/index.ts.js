var er = Object.defineProperty;
var tr = (r, e, t) =>
  e in r
    ? er(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var j = (r, e, t) => tr(r, typeof e != "symbol" ? e + "" : e, t);
import {
  aO as p,
  aP as u,
  R as g,
  aQ as w,
  aR as h,
  K as P,
  Y as f,
  aS as X,
  aT as ut,
  I as y,
  aU as rr,
  aV as or,
  aW as Fe,
  s as Be,
  aX as dt,
  aY as ht,
  F as gt,
  aZ as L,
  a_ as He,
  i as sr,
  aH as Se,
  a$ as ft,
  b0 as pt,
  b1 as wt,
  b2 as _t,
  b3 as mt,
  b4 as re,
  b5 as Q,
  b6 as U,
  b7 as G,
  b8 as nr,
  b9 as We,
  ba as St,
  Z as bt,
  bb as J,
  bc as Ge,
  aB as yt,
  bd as Et,
  be as Je,
  bf as qe,
  bg as vt,
  bh as ar,
  bi as ge,
  bj as Pt,
  bk as $t,
  m as fe,
  bl as R,
  J as F,
  bm as ir,
  bn as cr,
  bo as et,
  bp as lr,
  ar as Tt,
  bq as q,
  B as It,
  br as ur,
  bs as dr,
  bt as hr,
  bu as gr,
  bv as fr,
  w as pr,
  a2 as wr,
  z as _r,
  bw as mr,
  bx as Sr,
  by as br,
  a3 as yr,
  aI as Er,
  bz as vr,
  bA as Pr,
  aD as Ye,
  aE as $r,
  aF as ze,
  aG as Tr,
  bB as Ir,
  aC as Cr,
  bC as Rr,
  aL as Ct,
  av as kr,
  aw as Or,
  bD as xr,
  bE as Rt,
  aA as Ar,
  bF as Lr,
  bG as Dr,
  a4 as Kr,
  bH as Nr,
  bI as Vr,
  bJ as jr,
  bK as kt,
  bL as pe,
  bM as Ot,
  bN as Mr,
  bO as Ur,
  bP as Fr,
  bQ as Br,
  bR as Hr,
  bS as Wr,
  aN as Gr,
  bT as Jr,
  C as qr,
  az as Yr,
  bU as zr,
} from "./pkg.js";
const xt = [200, 204];
function Xr(r, e) {
  let t = null;
  const o = () => {
      s(),
        (t = setTimeout(() => {
          r();
        }, e));
    },
    s = () => {
      t !== null && (clearTimeout(t), (t = null));
    };
  return (
    o(),
    {
      resetTimer: () => {
        o();
      },
      clearTimer: s,
    }
  );
}
const At = Symbol.for("HEADER_SERVICE"),
  Lt = Symbol.for("CLIENT_TYPE_SERVICE"),
  Dt = Symbol.for("CLIENT_TYPE_MAP"),
  Qr = Symbol.for("KY_EXTENSION_SERVICES");
var Zr = Object.defineProperty,
  eo = Object.getOwnPropertyDescriptor,
  be = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? eo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Zr(e, t, s), s;
  },
  ye = (r, e) => (t, o) => e(t, o, r);
let ee = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async createMedia(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/create_media`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getMedia(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_media`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getUploadCredential(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_upload_credential`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
};
be([h({ fallbackValue: null })], ee.prototype, "createMedia", 1);
be([h({ fallbackValue: null })], ee.prototype, "getMedia", 1);
be([h({ fallbackValue: null })], ee.prototype, "getUploadCredential", 1);
ee = be([P(), ye(0, f(X)), ye(1, f(ut)), ye(2, f(y))], ee);
const Kt = async () => {
    const r = await rr({ action: or.GetDeviceInfo }),
      { code: e, data: t } = r || {};
    return e !== 0 || !t ? null : Fe(t, null);
  },
  to = (r) => {
    var t;
    const e = Object.entries(r).reduce(
      (o, [s, n]) => ({ ...o, [s]: String(n) }),
      {},
    );
    (t = chrome.imaFrame) == null ||
      t.invokeWithCallback(
        { action: "reportToBeacon", params: Be(e) },
        (o) => {},
      );
  };
var ro = Object.defineProperty,
  oo = Object.getOwnPropertyDescriptor,
  ae = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? oo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && ro(e, t, s), s;
  },
  tt = (r, e) => (t, o) => e(t, o, r);
let z = class {
  constructor(r, e) {
    (this.kyService = r),
      (this.logger = e),
      (this.ky = this.kyService.create());
  }
  get(r, e) {
    return this.ky.get(r, e).json();
  }
  post(r, e) {
    return this.ky.post(r, e).json();
  }
  put(r, e) {
    return this.ky.put(r, e).json();
  }
  delete(r, e) {
    return this.ky.delete(r, e).json();
  }
  extends(r) {
    this.ky.extend(r);
  }
};
ae([h({ fallbackValue: null })], z.prototype, "get", 1);
ae([h({ fallbackValue: null })], z.prototype, "post", 1);
ae([h({ fallbackValue: null })], z.prototype, "put", 1);
ae([h({ fallbackValue: null })], z.prototype, "delete", 1);
z = ae([P(), tt(0, f(dt)), tt(1, f(y))], z);
class rt extends Error {
  constructor(t, o, s) {
    const n = t.status || t.status === 0 ? t.status : "",
      a = t.statusText || "",
      i = `${n} ${a}`.trim(),
      l = i ? `status code ${i}` : "an unknown error";
    super(`Request failed with ${l}: ${o.method} ${o.url}`);
    j(this, "response");
    j(this, "request");
    j(this, "options");
    (this.name = "HTTPError"),
      (this.response = t),
      (this.request = o),
      (this.options = s);
  }
}
class Nt extends Error {
  constructor(t) {
    super(`Request timed out: ${t.method} ${t.url}`);
    j(this, "request");
    (this.name = "TimeoutError"), (this.request = t);
  }
}
const ne = (r) => r !== null && typeof r == "object",
  le = (...r) => {
    for (const e of r)
      if ((!ne(e) || Array.isArray(e)) && e !== void 0)
        throw new TypeError("The `options` argument must be an object");
    return Xe({}, ...r);
  },
  Vt = (r = {}, e = {}) => {
    const t = new globalThis.Headers(r),
      o = e instanceof globalThis.Headers,
      s = new globalThis.Headers(e);
    for (const [n, a] of s.entries())
      (o && a === "undefined") || a === void 0 ? t.delete(n) : t.set(n, a);
    return t;
  };
function ue(r, e, t) {
  return Object.hasOwn(e, t) && e[t] === void 0
    ? []
    : Xe(r[t] ?? [], e[t] ?? []);
}
const jt = (r = {}, e = {}) => ({
    beforeRequest: ue(r, e, "beforeRequest"),
    beforeRetry: ue(r, e, "beforeRetry"),
    afterResponse: ue(r, e, "afterResponse"),
    beforeError: ue(r, e, "beforeError"),
  }),
  Xe = (...r) => {
    let e = {},
      t = {},
      o = {};
    for (const s of r)
      if (Array.isArray(s)) Array.isArray(e) || (e = []), (e = [...e, ...s]);
      else if (ne(s)) {
        for (let [n, a] of Object.entries(s))
          ne(a) && n in e && (a = Xe(e[n], a)), (e = { ...e, [n]: a });
        ne(s.hooks) && ((o = jt(o, s.hooks)), (e.hooks = o)),
          ne(s.headers) && ((t = Vt(t, s.headers)), (e.headers = t));
      }
    return e;
  },
  so = (() => {
    let r = !1,
      e = !1;
    const t = typeof globalThis.ReadableStream == "function",
      o = typeof globalThis.Request == "function";
    if (t && o)
      try {
        e = new globalThis.Request("https://empty.invalid", {
          body: new globalThis.ReadableStream(),
          method: "POST",
          get duplex() {
            return (r = !0), "half";
          },
        }).headers.has("Content-Type");
      } catch (s) {
        if (s instanceof Error && s.message === "unsupported BodyInit type")
          return !1;
        throw s;
      }
    return r && !e;
  })(),
  no = typeof globalThis.AbortController == "function",
  ao = typeof globalThis.ReadableStream == "function",
  io = typeof globalThis.FormData == "function",
  Mt = ["get", "post", "put", "patch", "head", "delete"],
  co = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  Ee = 2147483647,
  Ut = Symbol("stop"),
  lo = {
    json: !0,
    parseJson: !0,
    stringifyJson: !0,
    searchParams: !0,
    prefixUrl: !0,
    retry: !0,
    timeout: !0,
    hooks: !0,
    throwHttpErrors: !0,
    onDownloadProgress: !0,
    fetch: !0,
  },
  uo = {
    method: !0,
    headers: !0,
    body: !0,
    mode: !0,
    credentials: !0,
    cache: !0,
    redirect: !0,
    referrer: !0,
    referrerPolicy: !0,
    integrity: !0,
    keepalive: !0,
    signal: !0,
    window: !0,
    dispatcher: !0,
    duplex: !0,
    priority: !0,
  },
  ho = (r) => (Mt.includes(r) ? r.toUpperCase() : r),
  go = ["get", "put", "head", "delete", "options", "trace"],
  fo = [408, 413, 429, 500, 502, 503, 504],
  po = [413, 429, 503],
  ot = {
    limit: 2,
    methods: go,
    statusCodes: fo,
    afterStatusCodes: po,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: (r) => 0.3 * 2 ** (r - 1) * 1e3,
  },
  wo = (r = {}) => {
    if (typeof r == "number") return { ...ot, limit: r };
    if (r.methods && !Array.isArray(r.methods))
      throw new Error("retry.methods must be an array");
    if (r.statusCodes && !Array.isArray(r.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...ot, ...r };
  };
async function _o(r, e, t, o) {
  return new Promise((s, n) => {
    const a = setTimeout(() => {
      t && t.abort(), n(new Nt(r));
    }, o.timeout);
    o.fetch(r, e)
      .then(s)
      .catch(n)
      .then(() => {
        clearTimeout(a);
      });
  });
}
async function mo(r, { signal: e }) {
  return new Promise((t, o) => {
    e && (e.throwIfAborted(), e.addEventListener("abort", s, { once: !0 }));
    function s() {
      clearTimeout(n), o(e.reason);
    }
    const n = setTimeout(() => {
      e == null || e.removeEventListener("abort", s), t();
    }, r);
  });
}
const So = (r, e) => {
  const t = {};
  for (const o in e) !(o in uo) && !(o in lo) && !(o in r) && (t[o] = e[o]);
  return t;
};
class we {
  constructor(e, t = {}) {
    j(this, "request");
    j(this, "abortController");
    j(this, "_retryCount", 0);
    j(this, "_input");
    j(this, "_options");
    var o, s;
    if (
      ((this._input = e),
      (this._options = {
        ...t,
        headers: Vt(this._input.headers, t.headers),
        hooks: jt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks,
        ),
        method: ho(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: wo(t.retry),
        throwHttpErrors: t.throwHttpErrors !== !1,
        timeout: t.timeout ?? 1e4,
        fetch: t.fetch ?? globalThis.fetch.bind(globalThis),
      }),
      typeof this._input != "string" &&
        !(
          this._input instanceof URL ||
          this._input instanceof globalThis.Request
        ))
    )
      throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/"))
        throw new Error(
          "`input` must not begin with a slash when using `prefixUrl`",
        );
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"),
        (this._input = this._options.prefixUrl + this._input);
    }
    if (no) {
      this.abortController = new globalThis.AbortController();
      const n = this._options.signal ?? this._input.signal;
      n != null &&
        n.aborted &&
        this.abortController.abort(n == null ? void 0 : n.reason),
        n == null ||
          n.addEventListener("abort", () => {
            this.abortController.abort(n.reason);
          }),
        (this._options.signal = this.abortController.signal);
    }
    if (
      (so && (this._options.duplex = "half"),
      this._options.json !== void 0 &&
        ((this._options.body =
          ((s = (o = this._options).stringifyJson) == null
            ? void 0
            : s.call(o, this._options.json)) ??
          JSON.stringify(this._options.json)),
        this._options.headers.set(
          "content-type",
          this._options.headers.get("content-type") ?? "application/json",
        )),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const a =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        i = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, a);
      ((io && this._options.body instanceof globalThis.FormData) ||
        this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(
          new globalThis.Request(i, { ...this.request }),
          this._options,
        ));
    }
  }
  static create(e, t) {
    const o = new we(e, t),
      s = async () => {
        if (typeof o._options.timeout == "number" && o._options.timeout > Ee)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${Ee}`,
          );
        await Promise.resolve();
        let i = await o._fetch();
        for (const l of o._options.hooks.afterResponse) {
          const c = await l(
            o.request,
            o._options,
            o._decorateResponse(i.clone()),
          );
          c instanceof globalThis.Response && (i = c);
        }
        if ((o._decorateResponse(i), !i.ok && o._options.throwHttpErrors)) {
          let l = new rt(i, o.request, o._options);
          for (const c of o._options.hooks.beforeError) l = await c(l);
          throw l;
        }
        if (o._options.onDownloadProgress) {
          if (typeof o._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function",
            );
          if (!ao)
            throw new Error(
              "Streams are not supported in your environment. `ReadableStream` is missing.",
            );
          return o._stream(i.clone(), o._options.onDownloadProgress);
        }
        return i;
      },
      a = o._options.retry.methods.includes(o.request.method.toLowerCase())
        ? o._retry(s)
        : s();
    for (const [i, l] of Object.entries(co))
      a[i] = async () => {
        o.request.headers.set("accept", o.request.headers.get("accept") || l);
        const c = await a;
        if (i === "json") {
          if (
            c.status === 204 ||
            (await c.clone().arrayBuffer()).byteLength === 0
          )
            return "";
          if (t.parseJson) return t.parseJson(await c.text());
        }
        return c[i]();
      };
    return a;
  }
  _calculateRetryDelay(e) {
    if (
      (this._retryCount++,
      this._retryCount > this._options.retry.limit || e instanceof Nt)
    )
      throw e;
    if (e instanceof rt) {
      if (!this._options.retry.statusCodes.includes(e.response.status)) throw e;
      const o =
        e.response.headers.get("Retry-After") ??
        e.response.headers.get("RateLimit-Reset") ??
        e.response.headers.get("X-RateLimit-Reset") ??
        e.response.headers.get("X-Rate-Limit-Reset");
      if (
        o &&
        this._options.retry.afterStatusCodes.includes(e.response.status)
      ) {
        let s = Number(o) * 1e3;
        Number.isNaN(s)
          ? (s = Date.parse(o) - Date.now())
          : s >= Date.parse("2024-01-01") && (s -= Date.now());
        const n = this._options.retry.maxRetryAfter ?? s;
        return s < n ? s : n;
      }
      if (e.response.status === 413) throw e;
    }
    const t = this._options.retry.delay(this._retryCount);
    return Math.min(this._options.retry.backoffLimit, t);
  }
  _decorateResponse(e) {
    return (
      this._options.parseJson &&
        (e.json = async () => this._options.parseJson(await e.text())),
      e
    );
  }
  async _retry(e) {
    try {
      return await e();
    } catch (t) {
      const o = Math.min(this._calculateRetryDelay(t), Ee);
      if (this._retryCount < 1) throw t;
      await mo(o, { signal: this._options.signal });
      for (const s of this._options.hooks.beforeRetry)
        if (
          (await s({
            request: this.request,
            options: this._options,
            error: t,
            retryCount: this._retryCount,
          })) === Ut
        )
          return;
      return this._retry(e);
    }
  }
  async _fetch() {
    for (const o of this._options.hooks.beforeRequest) {
      const s = await o(this.request, this._options);
      if (s instanceof Request) {
        this.request = s;
        break;
      }
      if (s instanceof Response) return s;
    }
    const e = So(this.request, this._options),
      t = this.request;
    return (
      (this.request = t.clone()),
      this._options.timeout === !1
        ? this._options.fetch(t, e)
        : _o(t, e, this.abortController, this._options)
    );
  }
  _stream(e, t) {
    const o = Number(e.headers.get("content-length")) || 0;
    let s = 0;
    return e.status === 204
      ? (t &&
          t(
            { percent: 1, totalBytes: o, transferredBytes: s },
            new Uint8Array(),
          ),
        new globalThis.Response(null, {
          status: e.status,
          statusText: e.statusText,
          headers: e.headers,
        }))
      : new globalThis.Response(
          new globalThis.ReadableStream({
            async start(n) {
              const a = e.body.getReader();
              t &&
                t(
                  { percent: 0, transferredBytes: 0, totalBytes: o },
                  new Uint8Array(),
                );
              async function i() {
                const { done: l, value: c } = await a.read();
                if (l) {
                  n.close();
                  return;
                }
                if (t) {
                  s += c.byteLength;
                  const _ = o === 0 ? 0 : s / o;
                  t({ percent: _, transferredBytes: s, totalBytes: o }, c);
                }
                n.enqueue(c), await i();
              }
              await i();
            },
          }),
          { status: e.status, statusText: e.statusText, headers: e.headers },
        );
  }
}
/*! MIT License © Sindre Sorhus */ const xe = (r) => {
    const e = (t, o) => we.create(t, le(r, o));
    for (const t of Mt) e[t] = (o, s) => we.create(o, le(r, s, { method: t }));
    return (
      (e.create = (t) => xe(le(t))),
      (e.extend = (t) => (
        typeof t == "function" && (t = t(r ?? {})), xe(le(r, t))
      )),
      (e.stop = Ut),
      e
    );
  },
  de = xe();
var bo = Object.defineProperty,
  yo = Object.getOwnPropertyDescriptor,
  Eo = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? yo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && bo(e, t, s), s;
  },
  Z = (r, e) => (t, o) => e(t, o, r);
const vo = "https://ima.qq.com/cgi-bin/";
let E = class {
  constructor(r, e, t, o, s) {
    (this.accountService = r),
      (this.logger = e),
      (this.headerService = t),
      (this.urlPrefix = o),
      (this.kyExtensionServices = s),
      (this.create = () =>
        de.create({
          prefixUrl: this.urlPrefix || vo,
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          fetch: globalThis.fetch.bind(globalThis),
          hooks: {
            beforeRequest: [
              async (n) => {
                await this.resetHeader(n);
              },
            ],
            afterResponse: [
              async (n, a, i) => {
                const l =
                    (a == null ? void 0 : a[ht.ImaFetchManner]) === gt.Silent,
                  c = await i.json();
                if (
                  (i.status > 200 &&
                    this.logger.error(
                      `当前请求状态码异常：${n.method} ${n.url}; 回包头：${JSON.stringify(i.headers)}`,
                      `${E.tag}.${L.InvalidStatusCode}`,
                    ),
                  (c == null ? void 0 : c.code) === u.LoginExpired)
                ) {
                  if (
                    (this.logger.error(
                      `当前请求大票过期：${n.method} ${n.url}; 回包头：${JSON.stringify(i.headers)}`,
                      `${E.tag}.${L.RefreshTokenExpired}`,
                    ),
                    l)
                  ) {
                    this.logger.info(
                      "当前大票过期静默处理",
                      `${E.tag}.${L.RefreshTokenExpired}`,
                    );
                    return;
                  }
                  if (!(await this.checkPromptLogin(n))) {
                    this.accountService.logout();
                    return;
                  }
                  return (
                    this.logger.info(
                      `刷新大票成功：${n.method} ${n.url}， 准备重试`,
                      `${E.tag}.${L.RefreshTokenExpired}`,
                    ),
                    await this.resetHeader(n),
                    de(n)
                  );
                }
                if (
                  (c == null ? void 0 : c.code) === u.TokenExpired ||
                  (c == null ? void 0 : c.code) === u.TokenRefreshError
                ) {
                  this.logger.error(
                    `当前请求小票过期：${n.method} ${n.url}; 回包头：${JSON.stringify(i.headers)}`,
                    `${E.tag}.${L.TokenExpired}`,
                  );
                  const _ = await this.accountService.refreshToken();
                  if (!(_ != null && _.userId)) {
                    if (
                      (this.logger.error(
                        `刷新小票失败：${n.method} ${n.url}; 刷新小票回包：${JSON.stringify(_)}`,
                        `${E.tag}.${L.TokenExpired}`,
                      ),
                      l)
                    ) {
                      this.logger.info(
                        `刷新小票失败，但是保持静默处理：${n.method} ${n.url}`,
                        `${E.tag}.${L.TokenExpired}`,
                      );
                      return;
                    }
                    if (!(await this.checkPromptLogin(n))) {
                      this.accountService.logout();
                      return;
                    }
                  }
                  return (
                    this.logger.info(
                      `准备重试：${n.method} ${n.url}`,
                      `${E.tag}.${L.RefreshTokenExpired}`,
                    ),
                    await this.resetHeader(n),
                    de(n)
                  );
                }
                if (
                  ((c == null ? void 0 : c.code) !== u.Success &&
                    this.logger.error(
                      `当前请求返回异常错误码：${n.method} ${n.url}; 回包头：${JSON.stringify(i.headers)}；回应体：${JSON.stringify(c)}`,
                      `${E.tag}.${L.InvalidRespCode}`,
                    ),
                  i.status === 403)
                )
                  return de(n);
              },
              ...this.getExtensionAfterResponse(),
            ],
            beforeError: [
              (n) => {
                const { response: a, request: i } = n;
                return (
                  (n.message += `${i.method} ${i.url}`),
                  a != null &&
                    a.body &&
                    ((n.name = "RequestError"),
                    (n.message += ` (${a.status})`)),
                  this.logger.error(
                    `${JSON.stringify(n)}`,
                    `${E.tag}.${L.InvalidRespCode}`,
                  ),
                  n
                );
              },
            ],
            beforeRetry: [],
          },
          timeout: He.Request,
        })),
      (this.resetHeader = async (n) => {
        const a = await this.headerService.getHeader();
        this.logger.info(
          `当前请求：${n.method} ${n.url}; 设置 cookie: ${a["x-ima-cookie"]}`,
          E.tag,
        ),
          Object.entries(a).forEach(([i, l]) => {
            n.headers.set(i, l);
          });
      }),
      (this.checkPromptLogin = async (n) => {
        const [a, i] = await Promise.all([
          this.accountService.getAccountInfo(),
          this.accountService.loginAsync(),
        ]);
        return (
          this.logger.info(
            `唤起用户登录; 用户扫码登录回包：${JSON.stringify(i)}；${n.method} ${n.url}`,
            `${E.tag}.${L.ShowLoginPrompt}`,
          ),
          i != null && i.userId
            ? (a != null &&
                a.userId &&
                a.userId !== (i == null ? void 0 : i.userId) &&
                this.logger.info(
                  `用户扫码切换账号：${n.method} ${n.url}， prev user id: ${a.userId}, new user id: ${i == null ? void 0 : i.userId}`,
                  `${E.tag}.${L.ShowLoginPrompt}`,
                ),
              !0)
            : (this.logger.info(
                `扫码登录失败；${n.method} ${n.url}`,
                `${E.tag}.${L.ShowLoginPrompt}`,
              ),
              !1)
        );
      });
  }
  getExtensionAfterResponse() {
    var r;
    return (r = this.kyExtensionServices) != null && r.length
      ? this.kyExtensionServices
          .map(({ afterResponse: e }) => e || null)
          .filter(sr)
      : [];
  }
};
E.tag = "KyServiceImpl";
E = Eo(
  [
    P(),
    Z(0, f(Se)),
    Z(1, f(y)),
    Z(2, f(At)),
    Z(3, f(ft)),
    Z(4, f(Qr)),
    Z(4, pt()),
  ],
  E,
);
var Po = Object.defineProperty,
  $o = Object.getOwnPropertyDescriptor,
  N = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? $o(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Po(e, t, s), s;
  },
  ve = (r, e) => (t, o) => e(t, o, r);
let k = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async addKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/add_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async delKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/del_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getKnowledgeList(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_list`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), w(e);
    }
    return w(e);
  }
  async searchKnowledge(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/search_knowledge`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getKnowledgeSug(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_sug`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async isKnowledgeExist(r, e = {}) {
    var o;
    const t = await this.fetchService.post(
      `${this.urlPrefix}/is_knowledge_exist`,
      { ...e, json: p(r) },
    );
    if ((t == null ? void 0 : t.code) !== u.Success) {
      const s = new g(`error res.code: ${t.code}`);
      return (o = this.logger) == null || o.error(s), null;
    }
    return w(t);
  }
  async isAnyKnowledgeExist(r, e = {}) {
    var o;
    const t = await this.fetchService.post(
      "knowledge_tab_reader/check_content_status_in_knowledge_base",
      { ...e, json: p(r) },
    );
    if ((t == null ? void 0 : t.code) !== u.Success) {
      const s = new g(`error res.code: ${t.code}`);
      return (o = this.logger) == null || o.error(s), null;
    }
    return w(t);
  }
  async reportKnowledge(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/report_knowledge`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async updateTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/update_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async searchTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/search_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
};
N([h({ fallbackValue: null })], k.prototype, "addKnowledge", 1);
N([h({ fallbackValue: null })], k.prototype, "delKnowledge", 1);
N([h({ fallbackValue: null })], k.prototype, "getKnowledge", 1);
N([h({ fallbackValue: null })], k.prototype, "getKnowledgeList", 1);
N([h({ fallbackValue: null })], k.prototype, "searchKnowledge", 1);
N([h({ fallbackValue: null })], k.prototype, "getKnowledgeSug", 1);
N([h({ fallbackValue: null })], k.prototype, "isKnowledgeExist", 1);
N([h({ fallbackValue: null })], k.prototype, "reportKnowledge", 1);
N([h({ fallbackValue: null })], k.prototype, "updateTags", 1);
N([h({ fallbackValue: null })], k.prototype, "getTags", 1);
N([h({ fallbackValue: null })], k.prototype, "searchTags", 1);
k = N([P(), ve(0, f(X)), ve(1, f(wt)), ve(2, f(y))], k);
var To = Object.defineProperty,
  Io = Object.getOwnPropertyDescriptor,
  Ft = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Io(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && To(e, t, s), s;
  },
  Pe = (r, e) => (t, o) => e(t, o, r);
let _e = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async getKnowledgeList(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_list`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
};
Ft([h({ fallbackValue: null })], _e.prototype, "getKnowledgeList", 1);
_e = Ft([P(), Pe(0, f(X)), Pe(1, f(_t)), Pe(2, f(y))], _e);
var Co = Object.defineProperty,
  Ro = Object.getOwnPropertyDescriptor,
  O = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Ro(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Co(e, t, s), s;
  },
  $e = (r, e) => (t, o) => e(t, o, r);
let $ = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async getHomePageData(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_home_page_data`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(e.msg || `error res.code: ${e.code}`, e.code);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async getKnowledgeBaseList(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_base_list`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getKnowledgeBase(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_base`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getKnowledgeList(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_knowledge_list`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(e.msg || `error res.code: ${e.code}`, e.code);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async getKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async searchKnowledge(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/search_knowledge`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async searchTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/search_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getUserSpace(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_user_space`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async isKnowledgeExist(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/is_knowledge_exist`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getFolderList(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/get_folder_list`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(
        e.msg || `getFolderList error res.code: ${e.code}`,
        e.code,
      );
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getAddableKnowledgeBaseList(r, e = gt.Silent) {
    var o;
    const t = await this.fetchService.post(
      `${this.urlPrefix}/get_addable_knowledge_base_list`,
      { json: p(r), [ht.ImaFetchManner]: e },
    );
    if ((t == null ? void 0 : t.code) !== u.Success) {
      const s = new g(`error res.code: ${t.code}`);
      return (o = this.logger) == null || o.error(s), null;
    }
    return w(t);
  }
  async checkRepeatedNames(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/check_repeated_names`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async getTagView(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_tag_view`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
};
O([h({ fallbackValue: null })], $.prototype, "getHomePageData", 1);
O([h({ fallbackValue: null })], $.prototype, "getKnowledgeBaseList", 1);
O([h({ fallbackValue: null })], $.prototype, "getKnowledgeBase", 1);
O([h({ fallbackValue: null })], $.prototype, "getKnowledgeList", 1);
O([h({ fallbackValue: null })], $.prototype, "getKnowledge", 1);
O([h({ fallbackValue: null })], $.prototype, "searchKnowledge", 1);
O([h({ fallbackValue: null })], $.prototype, "searchTags", 1);
O([h({ fallbackValue: null })], $.prototype, "getUserSpace", 1);
O([h({ fallbackValue: null })], $.prototype, "isKnowledgeExist", 1);
O([h({ fallbackValue: null })], $.prototype, "getFolderList", 1);
O([h({ fallbackValue: null })], $.prototype, "getAddableKnowledgeBaseList", 1);
O([h({ fallbackValue: null })], $.prototype, "checkRepeatedNames", 1);
O([h({ fallbackValue: null })], $.prototype, "getTagView", 1);
$ = O([P(), $e(0, f(X)), $e(1, f(mt)), $e(2, f(y))], $);
const Bt = Symbol.for("WRITER_SERVICE"),
  Ht = Symbol.for("WRITER_SERVICE_URL_PREFIX");
var ko = Object.defineProperty,
  Oo = Object.getOwnPropertyDescriptor,
  T = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Oo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && ko(e, t, s), s;
  },
  Te = (r, e) => (t, o) => e(t, o, r);
let v = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async createKnowledgeBase(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/create_knowledge_base`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async updateBasicInfo(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/update_basic_info`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async updatePermissionInfo(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/update_permission_info`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async deleteKnowledgeBase(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/delete_knowledge_base`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async addKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/add_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async delKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/del_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async updateTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/update_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async batchUpdateTags(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/batch_update_tags`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async copyKnowledge(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/copy_knowledge`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
  async renameKnowledge(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/rename_knowledge`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(e.msg || `error res.code: ${e.code}`, e.code);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async replaceKnowledge(r) {
    var t;
    const e = await this.fetchService.post(
      `${this.urlPrefix}/replace_knowledge`,
      { json: p(r) },
    );
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(e.msg || `error res.code: ${e.code}`, e.code);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async renameTag(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/rename_tag`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async delTags(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/del_tags`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
  async createFolder(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/create_folder`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(e.msg || `error res.code: ${e.code}`, e.code);
      return (t = this.logger) == null || t.error(o), o;
    }
    return w(e);
  }
};
T([h({ fallbackValue: null })], v.prototype, "createKnowledgeBase", 1);
T([h({ fallbackValue: null })], v.prototype, "updateBasicInfo", 1);
T([h({ fallbackValue: null })], v.prototype, "updatePermissionInfo", 1);
T([h({ fallbackValue: null })], v.prototype, "deleteKnowledgeBase", 1);
T([h({ fallbackValue: null })], v.prototype, "addKnowledge", 1);
T([h({ fallbackValue: null })], v.prototype, "delKnowledge", 1);
T([h({ fallbackValue: null })], v.prototype, "updateTags", 1);
T([h({ fallbackValue: null })], v.prototype, "batchUpdateTags", 1);
T([h({ fallbackValue: null })], v.prototype, "copyKnowledge", 1);
T([h({ fallbackValue: null })], v.prototype, "renameKnowledge", 1);
T([h({ fallbackValue: null })], v.prototype, "replaceKnowledge", 1);
T([h({ fallbackValue: null })], v.prototype, "renameTag", 1);
T([h({ fallbackValue: null })], v.prototype, "delTags", 1);
T([h({ fallbackValue: null })], v.prototype, "createFolder", 1);
v = T([P(), Te(0, f(X)), Te(1, f(Ht)), Te(2, f(y))], v);
var xo = Object.defineProperty,
  Ao = Object.getOwnPropertyDescriptor,
  te = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Ao(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && xo(e, t, s), s;
  },
  he = (r, e) => (t, o) => e(t, o, r);
let B = class {
  constructor(r, e, t, o) {
    (this.readerService = r),
      (this.writerService = e),
      (this.knowledgeManagerHttpServiceNoLogin = t),
      (this.logger = o);
  }
  async getKnowledgeList(r) {
    var c, _;
    const e = await this.readerService.getKnowledgeList(r),
      { code: t = re.FrontendUnknown } = e || {};
    if ([u.LoginExpired, u.AccountInvalid].includes(t))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        code: t,
        emptyMsg: Q.LoginError,
        knowledgeBaseStatus: U.Error,
        totalSize: 0,
        knowledgeBaseInfo: void 0,
        userPermissionInfo: {},
      };
    if (e instanceof g)
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        code: e.code,
        emptyMsg: e.message,
        knowledgeBaseStatus: U.Error,
        totalSize: 0,
        knowledgeBaseInfo: void 0,
        userPermissionInfo: {},
      };
    if (!Array.isArray(e == null ? void 0 : e.knowledgeList))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        code: re.EmptyRespData,
        emptyMsg: Q.Error,
        knowledgeBaseStatus: U.Error,
        totalSize: 0,
        knowledgeBaseInfo: void 0,
        userPermissionInfo: {},
      };
    const { knowledgeBaseId: o = "" } = r,
      s = !!(e != null && e.isEnd),
      { isUpdate: n = !0, currentPath: a = [], version: i = "" } = e;
    return {
      code: u.Success,
      isEnd: s,
      nextCursor: String(e == null ? void 0 : e.nextCursor),
      knowledgeList:
        ((_ =
          (c = e == null ? void 0 : e.knowledgeList) == null
            ? void 0
            : c.map) == null
          ? void 0
          : _.call(c, (S) => ({ ...G(S), knowledgeBaseId: o }))) || [],
      emptyMsg: Q.Empty,
      knowledgeBaseStatus: s ? U.End : U.Ready,
      totalSize: (e == null ? void 0 : e.totalSize) || 0,
      knowledgeBaseInfo: e == null ? void 0 : e.knowledgeBaseInfo,
      userPermissionInfo: {},
      isUpdate: n,
      currentPath: a,
      version: i,
    };
  }
  async getNoLoginKnowledgeList(r) {
    var n, a;
    const e = await this.knowledgeManagerHttpServiceNoLogin.getKnowledgeList(r),
      { code: t = re.FrontendUnknown } = e || {};
    if ([u.LoginExpired, u.AccountInvalid].includes(t))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: Q.LoginError,
        knowledgeBaseStatus: U.Error,
        totalSize: 0,
        knowledgeBaseInfo: void 0,
        userPermissionInfo: {},
      };
    if (!Array.isArray(e == null ? void 0 : e.knowledgeList))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: Q.Error,
        knowledgeBaseStatus: U.Error,
        totalSize: 0,
        knowledgeBaseInfo: void 0,
        userPermissionInfo: {},
      };
    const o = !!(e != null && e.isEnd);
    return {
      isEnd: o,
      nextCursor: String(e == null ? void 0 : e.nextCursor),
      knowledgeList:
        ((a =
          (n = e == null ? void 0 : e.knowledgeList) == null
            ? void 0
            : n.map) == null
          ? void 0
          : a.call(n, G)) || [],
      emptyMsg: Q.Empty,
      knowledgeBaseStatus: o ? U.End : U.Ready,
      totalSize: 0,
      knowledgeBaseInfo: void 0,
      userPermissionInfo: {},
    };
  }
  async addKnowledge(r) {
    return await this.writerService.addKnowledge(r);
  }
  async getKnowledge(r) {
    const e = await this.readerService.getKnowledge(r);
    return e != null && e.knowledge ? G(e.knowledge) : null;
  }
  async delKnowledge(r) {
    const e = await this.writerService.delKnowledge(r);
    if (!e) return { success: [], fail: [...r.mediaIds] };
    const { results: t } = e;
    return Object.values(t).reduce(
      (o, s) => {
        const { success: n, fail: a } = o,
          { retCode: i, mediaId: l } = s;
        return i === u.Success
          ? { success: [...n, l], fail: a }
          : { success: n, fail: [...a, l] };
      },
      { success: [], fail: [] },
    );
  }
  async searchKnowledge(r) {
    const { knowledgeBaseId: e } = r,
      t = await this.readerService.searchKnowledge(r);
    if (!t) return null;
    const {
        searchedKnowledgeList: o = [],
        isEnd: s = !0,
        nextCursor: n = "",
        searchedTags: a,
      } = t,
      i = o
        .map(
          ({
            knowledge: l,
            highlightContent: c = "",
            highlightTitle: _ = "",
          }) => {
            const { title: S = "", introduction: m = "" } = l || {};
            return l
              ? {
                  ...G(l),
                  title: _ || S,
                  introduction: c || m,
                  originTitle: S,
                  knowledgeBaseId: e,
                }
              : null;
          },
        )
        .filter((l) => !!l);
    return {
      isEnd: s,
      cursor: n,
      list: i,
      tags:
        (a == null
          ? void 0
          : a.map(({ highlightTag: l = "", tagInfo: c = {} }) => ({
              highlightTag: l,
              tag: c.tag || "",
            }))) || [],
    };
  }
  async renameKnowledge(r) {
    const e = await this.writerService.renameKnowledge(r);
    return e instanceof g
      ? e
      : e != null && e.knowledge
        ? G(e.knowledge)
        : new g(nr, re.EmptyRespData);
  }
  async updateTags(r) {
    const e = await this.writerService.updateTags(r);
    return (e == null ? void 0 : e.code) === u.Success;
  }
  async batchUpdateTags(r) {
    const e = await this.writerService.batchUpdateTags(r);
    if (!e) return { success: [], fail: [...r.mediaIds] };
    const { results: t } = e;
    return Object.values(t).reduce(
      (o, s) => {
        const { success: n, fail: a } = o,
          { retCode: i, mediaId: l } = s;
        return i === u.Success
          ? { success: [...n, l], fail: a }
          : { success: n, fail: [...a, l] };
      },
      { success: [], fail: [] },
    );
  }
  async searchTags(r) {
    const e = await this.readerService.searchTags(r);
    if (!e) return null;
    const { searchedTags: t = [], nextCursor: o = "", isEnd: s = !0 } = e;
    return {
      nextCursor: o,
      isEnd: s,
      tags:
        (t == null
          ? void 0
          : t.map(({ highlightTag: n = "", tagInfo: a = {} }) => ({
              highlightTag: n,
              tag: a.tag || "",
            }))) || [],
    };
  }
  async copyKnowledge(r) {
    return !!(await this.writerService.copyKnowledge(r));
  }
  async checkRepeatedName(r) {
    const e = await this.readerService.checkRepeatedNames(r);
    return e != null && e.results ? e.results : [];
  }
  async replaceKnowledge(r) {
    const e = await this.writerService.replaceKnowledge(r);
    return e != null && e.knowledge ? G(e.knowledge) : null;
  }
  async createFolder(r) {
    var t;
    const e = await this.writerService.createFolder(r);
    return e instanceof g
      ? e
      : (t = e.knowledge) != null && t.mediaId
        ? G(e.knowledge)
        : new g("后台返回空", re.EmptyRespData);
  }
};
te([h({ fallbackValue: null })], B.prototype, "getKnowledgeList", 1);
te([h({ fallbackValue: null })], B.prototype, "getNoLoginKnowledgeList", 1);
te([h({ fallbackValue: null })], B.prototype, "copyKnowledge", 1);
te([h({ fallbackValue: [] })], B.prototype, "checkRepeatedName", 1);
te([h({ fallbackValue: null })], B.prototype, "replaceKnowledge", 1);
B = te([P(), he(0, f(We)), he(1, f(Bt)), he(2, f(St)), he(3, f(y))], B);
async function Lo(r, e) {
  const t = r.getReader();
  let o;
  for (; !(o = await t.read()).done; ) e(o.value);
}
function Do(r) {
  let e,
    t,
    o,
    s = !1;
  return function (a) {
    e === void 0 ? ((e = a), (t = 0), (o = -1)) : (e = No(e, a));
    const i = e.length;
    let l = 0;
    for (; t < i; ) {
      s && (e[t] === 10 && ((t += 1), (l += t)), (s = !1));
      let c = -1;
      for (; t < i && c === -1; ++t)
        switch (e[t]) {
          case 58:
            o === -1 && (o = t - l);
            break;
          case 13:
            s = !0;
          case 10:
            c = t;
            break;
        }
      if (c === -1) break;
      r(e.subarray(l, c), o), (l = t), (o = -1);
    }
    l === i ? (e = void 0) : l !== 0 && ((e = e.subarray(l)), (t -= l));
  };
}
function Ko(r, e, t) {
  let o = st();
  const s = new TextDecoder();
  return function (a, i) {
    if (a.length === 0) t == null || t(o), (o = st());
    else if (i > 0) {
      const l = s.decode(a.subarray(0, i)),
        c = i + (a[i + 1] === 32 ? 2 : 1),
        _ = s.decode(a.subarray(c)),
        S = parseInt(_, 10);
      switch (l) {
        case "data":
          o.data = o.data
            ? `${o.data}
${_}`
            : _;
          break;
        case "event":
          o.event = _;
          break;
        case "id":
          r((o.id = _));
          break;
        case "retry":
          isNaN(S) || e((o.retry = S));
          break;
      }
    }
  };
}
function No(r, e) {
  const t = new Uint8Array(r.length + e.length);
  return t.set(r), t.set(e, r.length), t;
}
function st() {
  return { data: "", event: "", id: "", retry: void 0 };
}
const Ae = "text/event-stream",
  Vo = 1e3,
  nt = "last-event-id";
function Wt(
  r,
  {
    signal: e,
    headers: t,
    onopen: o,
    onmessage: s,
    onclose: n,
    onerror: a,
    openWhenHidden: i,
    fetch: l,
    ...c
  },
) {
  return new Promise((_, S) => {
    const m = { ...t };
    m.accept || (m.accept = Ae);
    let b,
      x = Vo,
      A;
    function V() {
      clearTimeout(A), b.abort();
    }
    e == null ||
      e.addEventListener("abort", () => {
        V(), _();
      });
    const M = l ?? window.fetch,
      W = o ?? jo;
    async function I() {
      b = new AbortController();
      try {
        const C = await M(r, { ...c, headers: m, signal: b.signal });
        await W(C),
          await Lo(
            C.body,
            Do(
              Ko(
                (D) => {
                  D ? (m[nt] = D) : delete m[nt];
                },
                (D) => {
                  x = D;
                },
                s,
              ),
            ),
          ),
          n == null || n(),
          V(),
          _();
      } catch (C) {
        if (!b.signal.aborted)
          try {
            const D = (a == null ? void 0 : a(C)) ?? x;
            clearTimeout(A),
              (A = setTimeout(() => {
                I();
              }, D));
          } catch (D) {
            V(), S(D);
          }
      }
    }
    I();
  });
}
function jo(r) {
  const e = r.headers.get("content-type");
  if (!(e != null && e.startsWith(Ae)))
    throw new Error(`Expected content-type to be ${Ae}, Actual: ${e}`);
}
var Mo = Object.defineProperty,
  Uo = Object.getOwnPropertyDescriptor,
  Fo = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Uo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Mo(e, t, s), s;
  },
  Bo = (r, e) => (t, o) => e(t, o, r);
let Le = class {
  constructor(r) {
    this.logger = r;
  }
  send(r) {
    const {
        url: e,
        method: t,
        header: o,
        cookie: s,
        timeout: n = He.SSE,
        jsonEvents: a = [],
        body: i,
      } = r,
      l = s == null ? void 0 : s["IMA-TOKEN"],
      c = new AbortController();
    let _;
    const S = new bt((m) => {
      const b = (A, V) => {
          m.next({
            eventName: "FRONTEND_FINNISH",
            data: { code: A, status: V },
          }),
            m.complete(),
            _ && clearTimeout(_);
        },
        x = () => {
          clearTimeout(_),
            (_ = setTimeout(() => {
              b(J.Timeout), c.abort();
            }, n));
        };
      x();
      try {
        const A = async (I) => {
            const { headers: C, status: D } = I,
              ie = C.get("trpc-func-ret");
            switch (Number(ie)) {
              case u.TokenExpired:
              case u.TokenRefreshError:
                b(J.TokenExpired);
                return;
              case u.LoginExpired:
                b(J.LoginExpired);
                return;
            }
            xt.includes(D) || b(J.Error, D);
          },
          V = (I, C) => {
            var Ze;
            if (e.includes(":5555")) {
              const ce = C.replace(/\n(?=data:)/g, "$sss$").split("$sss$");
              (I = ce[0].replace(/event:\s*/i, "")),
                (C =
                  (Ze = ce == null ? void 0 : ce[1]) == null
                    ? void 0
                    : Ze.replace(/data:\s*/i, ""));
            }
            if (!I) return;
            x();
            const ie = a.includes(I) ? Fe(C, null) : C;
            if (!ie) {
              this.logger.error(
                `[SseService.send] ${String(I)}事件异常, data=${C}`,
              );
              return;
            }
            m.next({ eventName: I, data: ie });
          },
          M = (I) => {
            throw (
              (this.logger.error(`[SseService.send.onError] ${I}`),
              b(J.Error),
              new g("[SseService.send.onError]"))
            );
          },
          W = () => {
            b(J.Success);
          };
        Wt(e, {
          method: t,
          headers: {
            "x-ima-cookie": this.getCookie(s),
            from_browser_ima: "1",
            ...(l ? { "x-ima-bkn": String(Ge(l)) } : {}),
            ...o,
          },
          body: i,
          signal: c.signal,
          onopen: A,
          onmessage: ({ event: I, data: C }) => V(I, C),
          onerror: M,
          onclose: W,
          fetch,
        });
      } catch {
        b(J.Error);
      }
    });
    return { connection: c, observer: S };
  }
  getCookie(r) {
    return r
      ? Object.entries(r)
          .map(([e, t]) => `${e}=${t}`)
          .join("; ")
      : "";
  }
};
Le = Fo([P(), Bo(0, f(y))], Le);
var Ho = Object.defineProperty,
  Wo = Object.getOwnPropertyDescriptor,
  Go = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Wo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Ho(e, t, s), s;
  },
  Ie = (r, e) => (t, o) => e(t, o, r);
const Jo = "ClientTypeServiceImpl";
let De = class {
  constructor(r, e, t) {
    (this.platformService = r), (this.clientTypeMap = e), (this.logger = t);
  }
  getClientType() {
    const r = this.platformService.getPlatformType();
    return (
      this.logger.info(`platformType: ${r}`, `${Jo}.getClientType`),
      this.clientTypeMap[r]
    );
  }
};
De = Go([P(), Ie(0, f(yt)), Ie(1, f(Dt)), Ie(2, f(y))], De);
var qo = Object.defineProperty,
  Yo = Object.getOwnPropertyDescriptor,
  zo = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Yo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && qo(e, t, s), s;
  },
  oe = (r, e) => (t, o) => e(t, o, r);
let Ke = class {
  constructor(r, e, t, o, s) {
    (this.getDeviceInfo = r),
      (this.accountService = e),
      (this.clientTypeService = t),
      (this.version = o),
      (this.logger = s),
      (this.cookieInfo = {});
  }
  async getCookie() {
    const [r, e] = await Promise.all([
      this.accountService.getAccountInfo(),
      this.getDeviceInfo(),
    ]);
    if (!r)
      return (
        this.logger.error(
          "[CookieServiceImpl.getCookie] getAccountInfo failed",
        ),
        this.cookieInfo
      );
    const { token: t, refreshToken: o, userId: s, idType: n, tokenType: a } = r,
      { guid: i = "", q36: l = "", qua: c = "" } = e || {};
    return (
      (this.cookieInfo = {
        "IMA-UID": s,
        "IMA-TOKEN": t,
        "IMA-REFRESH-TOKEN": o,
        "UID-TYPE": String(n),
        "IMA-GUID": i,
        "IMA-Q36": l,
        "IMA-IUA": c,
        "TOKEN-TYPE": String(a),
        PLATFORM: "H5",
        "CLIENT-TYPE": this.clientTypeService.getClientType(),
        "WEB-VERSION": this.version,
      }),
      this.cookieInfo
    );
  }
  async getCookieString() {
    const r = await this.getCookie();
    return this.encodeCookie(r);
  }
  encodeCookie(r) {
    return Object.entries(r)
      .map(([e, t]) => `${e}=${t}`)
      .join("; ");
  }
};
Ke = zo(
  [P(), oe(0, f(Et)), oe(1, f(Se)), oe(2, f(Lt)), oe(3, f(Je)), oe(4, f(y))],
  Ke,
);
var Xo = Object.defineProperty,
  Qo = Object.getOwnPropertyDescriptor,
  Zo = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? Qo(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && Xo(e, t, s), s;
  },
  at = (r, e) => (t, o) => e(t, o, r);
let Ne = class {
  constructor(r, e) {
    (this.cookieService = r),
      (this.extensionVersion = e),
      (this.getHeader = async () => {
        const t = await this.cookieService.getCookie(),
          o = this.cookieService.encodeCookie(t),
          s = t["IMA-TOKEN"];
        return {
          "x-ima-cookie": o,
          from_browser_ima: "1",
          extension_version: this.extensionVersion,
          ...(s ? { "x-ima-bkn": String(Ge(s)) } : {}),
        };
      });
  }
};
Ne = Zo([P(), at(0, f(qe)), at(1, f(Je))], Ne);
var es = Object.defineProperty,
  ts = Object.getOwnPropertyDescriptor,
  Gt = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? ts(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && es(e, t, s), s;
  },
  Ce = (r, e) => (t, o) => e(t, o, r);
let me = class {
  constructor(r, e = "", t) {
    (this.fetchService = r), (this.urlPrefix = e), (this.logger = t);
  }
  async getUserSpace(r) {
    var t;
    const e = await this.fetchService.post(`${this.urlPrefix}/get_user_space`, {
      json: p(r),
    });
    if ((e == null ? void 0 : e.code) !== u.Success) {
      const o = new g(`error res.code: ${e.code}`);
      return (t = this.logger) == null || t.error(o), null;
    }
    return w(e);
  }
};
Gt([h({ fallbackValue: null })], me.prototype, "getUserSpace", 1);
me = Gt([P(), Ce(0, f(X)), Ce(1, f(vt)), Ce(2, f(y))], me);
var rs = Object.defineProperty,
  os = Object.getOwnPropertyDescriptor,
  ss = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? os(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && rs(e, t, s), s;
  },
  ns = (r, e) => (t, o) => e(t, o, r);
let Ve = class {
  constructor(r) {
    (this.logger = r),
      (this.report = (e, t) => {
        var o;
        (o = this.logger) == null ||
          o.info("[ReportServiceImpl.report]", Be({ action: e, ...t })),
          to({ action: String(e), ...t });
      });
  }
};
Ve = ss([P(), ns(0, f(y))], Ve);
const Jt = Symbol("ID_LOG_FILTERS");
var as = Object.defineProperty,
  is = Object.getOwnPropertyDescriptor,
  cs = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? is(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && as(e, t, s), s;
  },
  it = (r, e) => (t, o) => e(t, o, r);
const ls = "https://galileotelemetry.tencent.com/collect",
  ct = "SDK-707f4fe221a6cdf8afe5";
let je = class {
  constructor(r = []) {
    (this.regexFilters = r), (this.baseConfig = {});
  }
  setLoggerConfig(r) {
    this.baseConfig = { ...this.baseConfig, ...r };
  }
  async info(r, e = "Background Polyfill") {
    this.matchesAnyFilter(r) ||
      this.report(JSON.stringify(this.getInfoConfig(r, e)));
  }
  async error(r, e = "Background Polyfill") {
    const t =
      typeof r == "string" ? r : r instanceof Error ? r.message : String(r);
    this.matchesAnyFilter(t) ||
      this.report(JSON.stringify(this.getErrorConfig(r, e)));
  }
  reportEvent(r, e = {}) {
    this.report(JSON.stringify(this.getEventConfig(r, e)));
  }
  reportTime(r, e, t) {
    this.report(JSON.stringify(this.getTimeConfig(r, e, t)));
  }
  getEventConfig(r, e = {}) {
    return this.getCommonConfig(
      JSON.stringify({
        msg: "custom_event",
        name: r,
        level: "info",
        plugin: "custom",
        type: "custom_event",
        ...e,
      }),
    );
  }
  getTimeConfig(r, e, t = {}) {
    return this.getCommonConfig(
      JSON.stringify({
        msg: "custom_time",
        name: r,
        level: "info",
        plugin: "custom",
        type: "custom_time",
        duration: e,
        ...t,
      }),
    );
  }
  getInfoConfig(r, e) {
    return this.getCommonConfig(
      JSON.stringify({ msg: `[${e}]: ${r}`, level: "info" }),
    );
  }
  getErrorConfig(r, e) {
    return this.getCommonConfig(
      JSON.stringify({ msg: `[${e}]: ${r}`, level: "error" }),
    );
  }
  getCommonConfig(r) {
    return {
      topic: ct,
      data: [
        { message: r, fields: this.getCommonFields(), timestamp: Date.now() },
      ],
    };
  }
  getCommonFields() {
    return JSON.stringify({ ...this.baseConfig, id: ct, env: "production" });
  }
  async report(r) {
    const e = new Headers();
    e.set("content-type", "text/plain;charset=UTF-8");
    try {
      await fetch(ls, { method: "POST", headers: e, body: r });
    } catch (t) {
      console.error(`[BackgroundLoggerPolyfill.report]上报失败: ${t}`);
    }
  }
  matchesAnyFilter(r) {
    return this.regexFilters.some((e) => e.test(r));
  }
};
je = cs([P(), it(0, pt()), it(0, f(Jt))], je);
var us = Object.defineProperty,
  ds = Object.getOwnPropertyDescriptor,
  hs = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? ds(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && us(e, t, s), s;
  },
  Re = (r, e) => (t, o) => e(t, o, r);
let Y = class {
  constructor(r, e, t) {
    (this.parseConfig = r),
      (this.cookieService = e),
      (this.logger = t),
      (this.abortController = new AbortController()),
      (this.emitParseFile = () => Promise.resolve(!0));
  }
  async parseFile(r) {
    const { data: e, onError: t, onCompleted: o, onProgress: s } = r;
    this.logger.info(
      `Parse file for media id: ${e.mediaId}, mediaType: ${e.mediaType}`,
      Y.tag,
    );
    const { headers: n, url: a, method: i } = this.parseConfig,
      l = await this.cookieService.getCookie(),
      c = this.cookieService.encodeCookie(l),
      _ = l["IMA-TOKEN"];
    this.logger.info(`Parse SSE cookie: ${c}`, Y.tag);
    const S = {
        "x-ima-cookie": c,
        from_browser_ima: "1",
        ...(_ ? { "x-ima-bkn": String(Ge(_)) } : {}),
      },
      {
        handleError: m,
        handleThrowError: b,
        handleMessage: x,
        handleOpen: A,
        handleClose: V,
      } = this.getHandler({ onCompleted: o, onError: t, onProgress: s });
    this.onCancel = m;
    try {
      (this.abortController = new AbortController()),
        Wt(a, {
          method: i,
          headers: { ...n, ...S },
          body: Be(p(e)),
          signal: this.abortController.signal,
          onopen: A,
          onmessage: ({ event: M, data: W }) => x({ type: M, data: Fe(W, {}) }),
          onerror: b,
          onclose: V,
          fetch,
          credentials: "include",
        });
    } catch (M) {
      m(M);
    }
  }
  cancelParse() {
    var r;
    this.abortController.abort(),
      (r = this.onCancel) == null || r.call(this, new Error("用户取消解析"));
  }
  getHandler(r) {
    const { onCompleted: e, onProgress: t, onError: o } = r,
      s = Xr(() => {
        this.cancelParse(), o(new ar("parse file error"));
      }, He.SSE),
      n = (_) => {
        s.clearTimer(), o(_);
      };
    return {
      handleOpen: async (_) => {
        const { headers: S, status: m, statusText: b } = _,
          x = Number(S.get("trpc-func-ret"));
        this.logger.info(`Parse trpcFuncRet: ${x}`, Y.tag),
          (!xt.includes(m) || x === u.TokenExpired) &&
            n(
              new Error(`handleOpen error, status: ${m} statusText: ${b}`, {
                cause: x,
              }),
            );
      },
      handleMessage: (_) => {
        const { type: S, data: m } = _;
        switch (S) {
          case ge.Progress:
            s.resetTimer(), t(m);
            break;
          case ge.Completed:
            m.code !== u.Success
              ? n(
                  new Error(
                    `parse api onCompleted error, error code: ${m.code} message: ${m == null ? void 0 : m.msg}`,
                  ),
                )
              : (s.clearTimer(), e(m));
            break;
          default:
            n(
              new Error(
                `parse api impl error, error code: ${m.code} message: ${m == null ? void 0 : m.msg}`,
              ),
            );
        }
      },
      handleError: n,
      handleThrowError: (_) => {
        throw (s.clearTimer(), _);
      },
      handleClose: () => {
        s.clearTimer();
      },
    };
  }
};
Y.tag = "ParserServiceImpl";
Y = hs([P(), Re(0, f(Pt)), Re(1, f(qe)), Re(2, f(y))], Y);
var gs = Object.defineProperty,
  fs = Object.getOwnPropertyDescriptor,
  ps = (r, e, t, o) => {
    for (
      var s = o > 1 ? void 0 : o ? fs(e, t) : e, n = r.length - 1, a;
      n >= 0;
      n--
    )
      (a = r[n]) && (s = (o ? a(e, t, s) : a(s)) || s);
    return o && s && gs(e, t, s), s;
  },
  ws = (r, e) => (t, o) => e(t, o, r);
let Me = class {
  constructor(r) {
    this.parseApi = r;
  }
  parse(r) {
    return {
      parseObserver: new bt((t) => {
        this.parseApi.parseFile({
          data: r,
          onProgress: (o) => {
            t.next({ type: ge.Progress, data: o });
          },
          onCompleted: (o) => {
            t.next({ type: ge.Completed, data: o }), t.complete();
          },
          onError: (o) => {
            t.error(o ?? new Error("parse error"));
          },
        });
      }),
      cancelParse: () => this.parseApi.cancelParse(),
    };
  }
};
Me = ps([P(), ws(0, f($t))], Me);
const _s = async () => {
    const r = globalThis.location.href,
      { contentType: e } = document,
      t = { url: r, contentType: e };
    switch (e) {
      case "application/pdf":
        return { ...t, mediaType: 1 };
      case "application/vnd.ms-powerpoint":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return { ...t, mediaType: 4 };
      case "text/markdown; charset=utf-8":
      case "text/markdown;charset=utf-8":
      case "text/markdown":
      case "text/x-markdown":
        return { ...t, mediaType: 7 };
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return { ...t, mediaType: 3 };
      case "image/jpeg":
      case "image/png":
      case "image/jpg":
        return { ...t, mediaType: 9 };
      case "text/html":
        return r.startsWith("https://mp.weixin.qq.com/")
          ? { ...t, mediaType: 6 }
          : { ...t, mediaType: 2 };
      case "application/text":
      case "text/plain":
        return r.endsWith(".md") ||
          r.endsWith(".MD") ||
          r.endsWith(".markdown") ||
          r.endsWith(".MARKDOWN")
          ? { ...t, mediaType: 7 }
          : { ...t, mediaType: 0 };
    }
    return { ...t, mediaType: 0 };
  },
  ms = "distiller/wechat_official_distiller.js",
  Ss = "distiller/x5_distiller.js",
  bs = async (r, e) => {
    var t, o;
    try {
      const s = await chrome.scripting.executeScript({
        target: { tabId: r },
        files: [Ss],
      });
      return (
        ((t = s == null ? void 0 : s[0]) == null ? void 0 : t.result) || null
      );
    } catch (s) {
      return (
        (o = e == null ? void 0 : e.error) == null ||
          o.call(
            e,
            `parseWebContent chrome.scripting.executeScript: err.message: ${s == null ? void 0 : s.message} err.stack: ${s == null ? void 0 : s.stack}`,
          ),
        null
      );
    }
  },
  ys = async (r, e) => {
    var t, o;
    try {
      const s = await chrome.scripting.executeScript({
        target: { tabId: r },
        files: [ms],
      });
      return (
        ((t = s == null ? void 0 : s[0]) == null ? void 0 : t.result) || null
      );
    } catch (s) {
      return (
        (o = e == null ? void 0 : e.error) == null ||
          o.call(
            e,
            `parseWxArticleContent chrome.scripting.executeScript: err.message: ${s == null ? void 0 : s.message} err.stack: ${s == null ? void 0 : s.stack}`,
          ),
        null
      );
    }
  },
  qt = async (r, e) => {
    const [t, o] = await Promise.all([bs(r, e), chrome.tabs.get(r)]);
    if (!t) return null;
    const { favIconUrl: s = "", title: n = "" } = o || {};
    return { ...t, title: n || t.title, logo: s || t.logo };
  },
  Yt = async (r, e) => {
    const [t, o] = await Promise.all([ys(r, e), chrome.tabs.get(r)]);
    if (!t) return null;
    const { favIconUrl: s = "" } = o || {};
    return { ...t, logo: s };
  },
  Qe = async (r, e) => {
    var t, o, s, n, a;
    try {
      const i = await chrome.scripting.executeScript({
        target: { tabId: r, allFrames: !0 },
        func: _s,
      });
      (o = e == null ? void 0 : e.info) == null ||
        o.call(
          e,
          `getPageType: ${JSON.stringify(((t = i == null ? void 0 : i[0]) == null ? void 0 : t.result) ?? {})}`,
        );
      const l =
        ((n = (s = i == null ? void 0 : i[0]) == null ? void 0 : s.result) ==
        null
          ? void 0
          : n.mediaType) || fe.Unknown;
      return Number(l);
    } catch (i) {
      return (
        (a = e == null ? void 0 : e.error) == null ||
          a.call(
            e,
            `getMediaType chrome.scripting.executeScript: err.message: ${i == null ? void 0 : i.message} err.stack: ${i == null ? void 0 : i.stack}`,
          ),
        fe.Unknown
      );
    }
  },
  Es = () => {
    R(F.GotoKnowledgeBase, ({ data: r }) => {
      const e = ir(cr.KnowledgeBase, { ...r });
      chrome.tabs.create({ url: e });
    });
  },
  vs = (r) => {
    const e = async (t, o, s) => {
      var l;
      console.log("[MSG] Background: Message received:", t?.action || "unknown", "from:", o?.tab?.url || "unknown");
      if (!ur(t, dr.AddAiSession)) return !1;
      const { sessionId: n, tabId: a } = t,
        i = a || ((l = o.tab) == null ? void 0 : l.id) || 0;
      return (
        r.onAiSessionToggleCollect(n, i).then((c) => {
          s(c);
        }),
        !0
      );
    };
    chrome.runtime.onMessage.addListener(e),
      chrome.runtime.onMessageExternal.addListener(e);
  },
  Ps = (r) => {
    R(F.GetPageInfo, async ({ sender: e }) => {
      const t = r.get(y),
        { tabId: o } = e,
        [s, n] = await Promise.all([Qe(o, t), chrome.tabs.get(o)]);
      return {
        tabId: o,
        mediaType: s,
        knowledgeKey: n.url || "",
        url: n.url || "",
      };
    });
  },
  $s = (r) => {
    R(F.GetAddKnowledgeParams, async ({ sender: e }) => {
      const t = r.get(y),
        { tabId: o } = e,
        [s, n] = await Promise.all([Qe(o, t), chrome.tabs.get(o)]),
        { url: a = "", title: i = "" } = n,
        l = { mediaType: s, title: i };
      switch (s) {
        case fe.WeChatArticle: {
          l.webInfo = { sourcePath: a };
          const c = await Yt(o, t);
          if (!c) break;
          const {
            headers: _,
            title: S,
            titleSelector: m,
            author: b,
            authorSelector: x,
            paragraphs: A,
            imgs: V = [],
            logo: M,
          } = c;
          l.rawExtInfo = {
            wechatArticleInfo: {
              headers: _,
              title: S,
              titleSelector: m,
              author: b,
              authorSelector: x,
              paragraphs: A,
              jumpUrl: a,
              logo: M,
              coverUrls: V,
              content: JSON.stringify(c),
              introduction: A.map((W) => W.text)
                .join(
                  `
`,
                )
                .slice(0, lr),
              md5Sum: et(JSON.stringify(c)),
            },
          };
          break;
        }
        case fe.Web: {
          l.webInfo = { sourcePath: a };
          const c = await qt(o, t);
          if (!c) break;
          const { title: _, content: S, imgs: m, logo: b } = c;
          l.rawExtInfo = {
            webMediaInfo: {
              jumpUrl: a,
              title: _,
              content: S,
              coverUrls: m,
              logo: b,
              md5Sum: et(JSON.stringify(c)),
            },
          };
          break;
        }
      }
      return l;
    });
  },
  Ts = (r) => {
    const e = r.get(Tt);
    R(q.GetAddableKnowledgeBaseList, ({ data: t }) => {
      const { params: o, fetchManner: s } = t;
      return e.getAddableKnowledgeList(o, s);
    }),
      R(q.AddKnowledge, ({ data: t }) => e.addKnowledgeToKnowledgeBase(t)),
      R(q.DelKnowledge, ({ data: t }) => {
        const { mediaId: o, knowledgeBaseId: s } = t;
        return e.removeKnowledgeFromKnowledgeBase(o, s);
      }),
      R(q.CheckShareKnowledgeHasSpaceByMediaType, ({ data: t }) => {
        const { mediaType: o, knowledgeBaseId: s, size: n } = t;
        return e.checkShareKnowledgeHasSpaceByMediaType(s, o, n);
      }),
      R(q.CreateFileMedia, ({ data: t }) => e.createFileMedia(t)),
      R(q.CheckRepeatedName, ({ data: t }) => e.checkRepeatedNames(t)),
      R(q.ReplaceKnowledge, ({ data: t }) => e.replaceKnowledge(t));
  },
  Is = (r) => {
    R(F.LoggerInfo, ({ data: e }) => {
      const { message: t, key: o } = e;
      r.get(y).info(t, o);
    }),
      R(F.LoggerError, ({ data: e }) => {
        const { error: t, key: o } = e;
        r.get(y).error(t, o);
      });
  },
  Cs = (r) => {
    R(F.Report, ({ data: e }) => {
      const { action: t, data: o } = e;
      r.get(It).report(t, o);
    });
  },
  H = {
    GetCosConfig: hr,
    CosUploader: gr,
    PopupManagerFactory: fr,
    SendMessage: pr,
    ListenMessage: wr,
    NotifyKnowledgeBaseUpdate: _r,
    KyUrlPrefix: ft,
    GetMediaType: mr,
    GetWebMedia: Sr,
    GetWxMedia: br,
    AddableKnowledgeBaseService: Tt,
    ReaderService: We,
  },
  d = new yr({});
d.bind(Se).to(Er).inSingletonScope();
d.bind(vr).toConstantValue(Pr);
d.bind(y).to(je).inSingletonScope();
d.bind(Jt).toConstantValue([
  /当前用户登录信息/,
  /终端接口空响应/,
  /platformType:/,
  /判断用户已登录/,
]);
d.bind(Et).toConstantValue(Kt);
d.bind(Ye.InvokeWithPromise).toConstantValue($r);
d.bind(Ye.OnAccountInfoChange).toConstantValue(ze);
d.bind(Ye.OnLoginDialogClose).toConstantValue(Tr);
const zt = "ima.qq.com";
d.bind(H.KyUrlPrefix).toConstantValue(`https://${zt}/cgi-bin/`);
d.bind(Dt).toConstantValue(Ir);
d.bind(Lt).to(De).inSingletonScope();
d.bind(yt).to(Cr).inSingletonScope();
d.bind(qe).to(Ke).inSingletonScope();
d.bind(Rr).toConstantValue(console.error);
d.bind(dt).to(E).inSingletonScope();
d.bind(Je).toConstantValue(Ct.version);
d.bind(At).to(Ne).inSingletonScope();
d.bind(X).to(z).inSingletonScope();
d.bind(kr).to(Or).inSingletonScope();
d.bind(wt).toConstantValue("knowledge");
d.bind(xr).to(k).inSingletonScope();
d.bind(Rt).toSelf().inSingletonScope();
d.bind(H.NotifyKnowledgeBaseUpdate).toConstantValue(Ar);
d.bind(St).to(_e).inSingletonScope();
d.bind(_t).toConstantValue("knowledge_no_login");
d.bind(Le).toSelf().inSingletonScope();
d.bind(ut).toConstantValue("file_manager");
d.bind(Lr).to(ee).inSingletonScope();
d.bind(Dr).to(Kr).inSingletonScope();
d.bind(Pt).toConstantValue({
  url: `https://${zt}/cgi-bin/knowledge/parse_knowledge`,
  method: "POST",
});
d.bind($t).to(Y).inSingletonScope();
d.bind(Nr).to(Me).inSingletonScope();
d.bind(vt).toConstantValue("space");
d.bind(Vr).to(me).inSingletonScope();
d.bind(jr).to(kt).inSingletonScope();
d.bind(mt).toConstantValue("knowledge_tab_reader");
d.bind(We).to($).inSingletonScope();
d.bind(kt).toSelf().inSingletonScope();
d.bind(H.SendMessage).toConstantValue(pe);
d.bind(H.ListenMessage).toConstantValue(R);
d.bind(H.GetMediaType).toConstantValue(Qe);
d.bind(H.GetWebMedia).toConstantValue(qt);
d.bind(H.GetWxMedia).toConstantValue(Yt);
d.bind(Ot).toSelf().inSingletonScope();
d.bind(It).to(Ve).inSingletonScope();
d.bind(H.AddableKnowledgeBaseService).to(Mr).inSingletonScope();
d.bind(Ur).to(B).inSingletonScope();
d.bind(Ht).toConstantValue("knowledge_tab_writer");
d.bind(Bt).to(v).inSingletonScope();
const Ue = d.get(Ot),
  K = d.get(y),
  Xt = d.get(Se);
K.setLoggerConfig({ app_id: "ima-universal-collect", js_version: Ct.version });
Xt.getAccountInfo().then((r) => {
  K.setLoggerConfig({ uid: r == null ? void 0 : r.userId });
});
ze((r, e) => {
  K.setLoggerConfig({ uid: e == null ? void 0 : e.userId });
});
Kt().then((r) => {
  K.setLoggerConfig({
    q36: (r == null ? void 0 : r.q36) || "",
    guid: (r == null ? void 0 : r.guid) || "",
    qua: (r == null ? void 0 : r.qua) || "",
  });
});
const Rs = (r) => {
    Br.subscribe((e) => {
      Zt(e.url || "")
        ? r.onActionClicked.bind(r)(e, !1)
        : chrome.tabs.create({
            url: "https://ima.qq.com/?webFrom=10000044&channel=10000044",
          });
    }),
      Hr.subscribe((e) => {
        r.onActionClicked.bind(r)(e[1], !1);
      });
  },
  ks = () => {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create(
        {
          id: "add-to-ima-knowledge",
          title: "网页加入ima知识库",
          contexts: ["page", "link", "image", "video", "audio"],
        },
        () => null,
      );
    });
  },
  Os = () => {
    Wr.subscribe(async ({ tabId: r }) => {
      try {
        (await chrome.tabs.get(r)).url && se();
      } catch (e) {
        K.error(`获取tab信息失败: ${e}`, "background");
      }
    }),
      chrome.tabs.onUpdated.addListener((r, e, t) => {
        t.url && se(t.url, r);
      }),
      chrome.runtime.onMessage.addListener((r, e) => {
        var t, o;
        console.log("[MSG] Background: KnowledgeUpdated listener received:", r?.action, "from:", e?.tab?.url || "unknown");
        return (
          (r == null ? void 0 : r.action) === Gr.KnowledgeUpdated &&
            (console.log("收到KnowledgeBase消息", r),
            se(
              (t = e.tab) == null ? void 0 : t.url,
              (o = e.tab) == null ? void 0 : o.id,
            )),
          !0
        );
      }),
      Jr.subscribe(async ({ url: r, tabId: e }) => {
        pe(F.TabUpdate, { url: r }, { context: "content-script", tabId: e }),
          se(r);
      }),
      ze((r, e) => {
        K.setLoggerConfig({ uid: e == null ? void 0 : e.userId }), se();
      });
  },
  xs = () => {
    chrome.tabs.onActivated.addListener(({ tabId: r }) => {
      var e, t;
      (t =
        (e = pe(
          F.LoadFirstPage,
          {},
          { context: "content-script", tabId: r },
        )) == null
          ? void 0
          : e.catch) == null || t.call(e, () => null);
    }),
      chrome.windows.onFocusChanged.addListener((r) => {
        r !== chrome.windows.WINDOW_ID_NONE &&
          chrome.tabs.query({ active: !0, currentWindow: !0 }).then((e) => {
            var t, o;
            e.length > 0 &&
              e[0].id &&
              ((o =
                (t = pe(
                  F.LoadFirstPage,
                  {},
                  { context: "content-script", tabId: e[0].id },
                )) == null
                  ? void 0
                  : t.catch) == null ||
                o.call(t, () => null));
          });
      });
  },
  ke = (r, e) => {
    const t = r ? "img/ima-check.png" : "img/ima.png";
    chrome.action.setIcon({ path: t, tabId: e });
  },
  se = async (r, e) => {
    let t = e,
      o = r;
    const s = await Xt.getAccountInfo();
    if (!t) {
      const n = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      n.length > 0 && ((t = n[0].id), (o = n[0].url));
    }
    if ((!o && t && (o = (await chrome.tabs.get(t)).url), !o || !t)) {
      K.info("无法获取有效的tab信息", "background");
      return;
    }
    if (!(s != null && s.userId)) {
      ke(!1, t);
      return;
    }
    if (!o.startsWith("http")) {
      ke(!1, t);
      return;
    }
    ke(await Ks(o, t), t);
  },
  As = () => {
    K.info("collect background started", "background"),
      ks(),
      chrome.runtime.onSuspend.addListener(() => {
        chrome.contextMenus.removeAll();
      }),
      Es(),
      vs(Ue),
      Rs(Ue),
      Ts(d),
      Is(d),
      Cs(d),
      Ps(d),
      $s(d),
      Os(),
      xs(),
      Ls(),
      Fr();
  };
chrome.runtime.onUpdateAvailable.addListener((r) => {
  K.info(
    `Collect Update Request: ${JSON.stringify(r)}`,
    "CollectManager.OnUpdateAvailable",
  );
});
chrome.runtime.onInstalled.addListener((r) => {
  K.info(
    `Collect onInstalled Request: ${JSON.stringify(r)}`,
    "CollectManager.onInstalled",
  );
});
const lt = new Set(),
  Ls = () => {
    chrome.tabs.onActivated.addListener((r) => {
      r != null && r.tabId && Ds(r.tabId);
    }),
      chrome.tabs.query({ active: !0 }, (r) => {
        r.forEach((e) => {
          e != null &&
            e.id &&
            e != null &&
            e.url &&
            Qt(e == null ? void 0 : e.id, e.url);
        });
      });
  },
  Ds = (r) => {
    chrome.tabs.get(r, (e) => {
      e && (console.log("当前激活标签页:", e), Qt(r, e.url || ""));
    });
  },
  Qt = (r, e) => {
    !r ||
      !e ||
      (!lt.has(r) &&
        e &&
        Zt(e) &&
        chrome.scripting
          .executeScript({
            target: { tabId: r },
            files: ["assets/main.tsx-loader.js"],
          })
          .then(() => lt.add(r))
          .catch(console.error));
  },
  Oe = {},
  Ks = async (r, e) => {
    try {
      let t;
      const o = d.get(Rt),
        s = await Ue.getMediaType(r, e);
      if (qr.includes(s)) {
        const i = `${r}-${s}`;
        if (!Oe[i]) {
          const l = await Yr(r, s),
            { name: c = "", size: _ = 0 } = l || {};
          Oe[i] = { name: c, fileSize: _ };
        }
        t = { mediaType: s, fileDesc: Oe[i] };
      } else t = { mediaType: s, webInfo: { sourcePath: r } };
      const n = await o.isAnyKnowledgeExist(t);
      if (!n) return !1;
      const { collectStatus: a } = n;
      return a === zr.Collected;
    } catch (t) {
      K.error(`查询收藏状态失败: ${t}`, "background");
    }
    return !1;
  },
  Zt = (r) =>
    !r || /^https:\/\/chrome\.google\.com\/webstore/i.test(r)
      ? !1
      : !!(r.startsWith("http") || r.startsWith("file") || r.startsWith("/"));
try {
  As();
} catch (r) {
  K.error(JSON.stringify(r), "CollectManger");
}
