! function (a) {
  var b = function (e, b, j) {
      "use strict";
      var f, a, h, E, i, c, g, d, A, v, y, C, q, F, o, n, s, t, m, u, k, z, l, p, D, x, B, w, r;
      return function () {
          var c = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  preloadClass: "lazypreload",
                  errorClass: "lazyerror",
                  autosizesClass: "lazyautosizes",
                  fastLoadedClass: "ls-is-cached",
                  iframeLoadMode: 0,
                  srcAttr: "data-src",
                  srcsetAttr: "data-srcset",
                  sizesAttr: "data-sizes",
                  minSize: 40,
                  customMedia: {},
                  init: !0,
                  expFactor: 1.5,
                  hFac: .8,
                  loadMode: 2,
                  loadHidden: !0,
                  ricTimeout: 0,
                  throttleDelay: 125
              },
              b;
          a = e.lazySizesConfig || e.lazysizesConfig || {};
          for (b in c) b in a || (a[b] = c[b])
      }(), !b || !b.getElementsByClassName ? {
          init: function () {},
          cfg: a,
          noSupport: !0
      } : (h = b.documentElement, E = e.HTMLPictureElement, i = "addEventListener", c = "getAttribute", g = e[i].bind(e), d = e.setTimeout, A = e.requestAnimationFrame || d, v = e.requestIdleCallback, y = /^picture$/i, C = ["load", "error", "lazyincluded", "_lazyloaded"], q = {}, F = Array.prototype.forEach, o = function (b, a) {
          return q[a] || (q[a] = new RegExp("(\\s|^)" + a + "(\\s|$)")), q[a].test(b[c]("class") || "") && q[a]
      }, n = function (a, b) {
          o(a, b) || a.setAttribute("class", (a[c]("class") || "").trim() + " " + b)
      }, s = function (a, d) {
          var b;
          (b = o(a, d)) && a.setAttribute("class", (a[c]("class") || "").replace(b, " "))
      }, t = function (a, b, c) {
          var d = c ? i : "removeEventListener";
          c && t(a, b), C.forEach(function (c) {
              a[d](c, b)
          })
      }, m = function (d, e, a, g, h) {
          var c = b.createEvent("Event");
          return a || (a = {}), a.instance = f, c.initEvent(e, !g, !h), c.detail = a, d.dispatchEvent(c), c
      }, u = function (d, b) {
          var f;
          !E && (f = e.picturefill || a.pf) ? (b && b.src && !d[c]("srcset") && d.setAttribute("srcset", b.src), f({
              reevaluate: !0,
              elements: [d]
          })) : b && b.src && (d.src = b.src)
      }, k = function (a, b) {
          return (getComputedStyle(a, null) || {})[b]
      }, z = function (d, c, b) {
          for (b = b || d.offsetWidth; b < a.minSize && c && !d._lazysizesWidth;) b = c.offsetWidth, c = c.parentNode;
          return b
      }, l = function () {
          var e = [],
              i = [],
              f = e,
              g = function () {
                  var b = f;
                  for (f = e.length ? i : e, a = !0, c = !1; b.length;) b.shift()();
                  a = !1
              },
              h = function (e, h) {
                  a && !h ? e.apply(this, arguments) : (f.push(e), c || (c = !0, (b.hidden ? d : A)(g)))
              },
              c, a;
          return h._lsFlush = g, h
      }(), p = function (a, b) {
          return b ? function () {
              l(a)
          } : function () {
              var b = this,
                  c = arguments;
              l(function () {
                  a.apply(b, c)
              })
          }
      }, D = function (i) {
          var f = 0,
              h = a.throttleDelay,
              b = a.ricTimeout,
              g = function () {
                  c = !1, f = j.now(), i()
              },
              e = v && b > 49 ? function () {
                  v(g, {
                      timeout: b
                  }), b !== a.ricTimeout && (b = a.ricTimeout)
              } : p(function () {
                  d(g)
              }, !0),
              c;
          return function (g) {
              var a;
              if ((g = g === !0) && (b = 33), c) return;
              c = !0, a = h - (j.now() - f), a < 0 && (a = 0), g || a < 9 ? e() : d(e, a)
          }
      }, x = function (g) {
          var b = 99,
              e = function () {
                  a = null, g()
              },
              f = function () {
                  var a = j.now() - c;
                  a < b ? d(f, b - a) : (v || e)(e)
              },
              c, a;
          return function () {
              c = j.now(), a || (a = d(f, b))
          }
      }, B = function () {
          var Z = /^img$/i,
              ae = /^iframe$/i,
              ad = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
              ab = 0,
              E = 0,
              r = 0,
              v = -1,
              S = function (a) {
                  r--, (!a || r < 0 || !a.target) && (r = 0)
              },
              T = function (a) {
                  return K == null && (K = k(b.body, "visibility") == "hidden"), K || !(k(a.parentNode, "visibility") == "hidden" && k(a, "visibility") == "hidden")
              },
              X = function (f, e) {
                  var a = f,
                      d = T(f),
                      c;
                  for (G -= e, J += e, H -= e, I += e; d && (a = a.offsetParent) && a != b.body && a != h;) d = (k(a, "opacity") || 1) > 0, d && k(a, "overflow") != "visible" && (c = a.getBoundingClientRect(), d = I > c.left && H < c.right && J > c.top - 1 && G < c.bottom + 1);
                  return d
              },
              V = function () {
                  var e = f.elements,
                      d, i, k, o, g, m, l, q, j, p, n, s;
                  if ((C = a.loadMode) && r < 8 && (s = e.length)) {
                      for (d = 0, v++; d < s; d++) {
                          if (!e[d] || e[d]._lazyRace) continue;
                          if (!ad || f.prematureUnveil && f.prematureUnveil(e[d])) {
                              B(e[d]);
                              continue
                          }
                          if ((!(l = e[d][c]("data-expand")) || !(g = l * 1)) && (g = E), j || (j = !a.expand || a.expand < 1 ? h.clientHeight > 500 && h.clientWidth > 500 ? 500 : 370 : a.expand, f._defEx = j, p = j * a.expFactor, n = a.hFac, K = null, E < p && r < 1 && v > 2 && C > 2 && !b.hidden ? (E = p, v = 0) : C > 1 && v > 1 && r < 6 ? E = j : E = ab), q !== g && (R = innerWidth + g * n, Q = innerHeight + g, m = g * -1, q = g), i = e[d].getBoundingClientRect(), (J = i.bottom) >= m && (G = i.top) <= Q && (I = i.right) >= m * n && (H = i.left) <= R && (J || I || H || G) && (a.loadHidden || T(e[d])) && (z && r < 3 && !l && (C < 3 || v < 4) || X(e[d], g))) {
                              if (B(e[d]), o = !0, r > 9) break
                          } else !o && z && !k && r < 4 && v < 4 && C > 2 && (L[0] || a.preloadAfterLoad) && (L[0] || !l && (J || I || H || G || e[d][c](a.sizesAttr) != "auto")) && (k = L[0] || e[d])
                      }
                      k && !o && B(k)
                  }
              },
              q = D(V),
              U = function (c) {
                  var b = c.target;
                  if (b._lazyCache) {
                      delete b._lazyCache;
                      return
                  }
                  S(c), n(b, a.loadedClass), s(b, a.loadingClass), t(b, P), m(b, "lazyloaded")
              },
              Y = p(U),
              P = function (a) {
                  Y({
                      target: a.target
                  })
              },
              _ = function (b, c) {
                  var d = b.getAttribute("data-load-mode") || a.iframeLoadMode;
                  d == 0 ? b.contentWindow.location.replace(c) : d == 1 && (b.src = c)
              },
              $ = function (b) {
                  var e = b[c](a.srcsetAttr),
                      d;
                  (d = a.customMedia[b[c]("data-media") || b[c]("media")]) && b.setAttribute("media", d), e && b.setAttribute("srcset", e)
              },
              aa = p(function (b, k, q, o, p) {
                  var e, g, h, f, i, j;
                  (i = m(b, "lazybeforeunveil", k)).defaultPrevented || (o && (q ? n(b, a.autosizesClass) : b.setAttribute("sizes", o)), g = b[c](a.srcsetAttr), e = b[c](a.srcAttr), p && (h = b.parentNode, f = h && y.test(h.nodeName || "")), j = k.firesLoad || "src" in b && (g || e || f), i = {
                      target: b
                  }, n(b, a.loadingClass), j && (clearTimeout(O), O = d(S, 2500), t(b, P, !0)), f && F.call(h.getElementsByTagName("source"), $), g ? b.setAttribute("srcset", g) : e && !f && (ae.test(b.nodeName) ? _(b, e) : b.src = e), p && (g || f) && u(b, {
                      src: e
                  })), b._lazyRace && delete b._lazyRace, s(b, a.lazyClass), l(function () {
                      var c = b.complete && b.naturalWidth > 1;
                      (!j || c) && (c && n(b, a.fastLoadedClass), U(i), b._lazyCache = !0, d(function () {
                          "_lazyCache" in b && delete b._lazyCache
                      }, 9)), b.loading == "lazy" && r--
                  }, !0)
              }),
              B = function (b) {
                  var f, d, g, e;
                  if (b._lazyRace) return;
                  if (d = Z.test(b.nodeName), g = d && (b[c](a.sizesAttr) || b[c]("sizes")), e = g == "auto", (e || !z) && d && (b[c]("src") || b.srcset) && !b.complete && !o(b, a.errorClass) && o(b, a.lazyClass)) return;
                  f = m(b, "lazyunveilread").detail, e && w.updateElem(b, !0, b.offsetWidth), b._lazyRace = !0, r++, aa(b, f, e, g, d)
              },
              ac = x(function () {
                  a.loadMode = 3, q()
              }),
              N = function () {
                  a.loadMode == 3 && (a.loadMode = 2), ac()
              },
              M = function () {
                  if (z) return;
                  if (j.now() - W < 999) {
                      d(M, 999);
                      return
                  }
                  z = !0, a.loadMode = 3, q(), g("scroll", N, !0)
              },
              J, K, L, z, O, C, W, R, Q, G, H, I;
          return {
              _: function () {
                  W = j.now(), f.elements = b.getElementsByClassName(a.lazyClass), L = b.getElementsByClassName(a.lazyClass + " " + a.preloadClass), g("scroll", q, !0), g("resize", q, !0), g("pageshow", function (d) {
                      if (d.persisted) {
                          var c = b.querySelectorAll("." + a.loadingClass);
                          c.length && c.forEach && A(function () {
                              c.forEach(function (a) {
                                  a.complete && B(a)
                              })
                          })
                      }
                  }), e.MutationObserver ? new MutationObserver(q).observe(h, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0
                  }) : (h[i]("DOMNodeInserted", q, !0), h[i]("DOMAttrModified", q, !0), setInterval(q, 999)), g("hashchange", q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (a) {
                      b[i](a, q, !0)
                  }), /d$|^c/.test(b.readyState) ? M() : (g("load", M), b[i]("DOMContentLoaded", q), d(M, 2e4)), f.elements.length ? (V(), l._lsFlush()) : q()
              },
              checkElems: q,
              unveil: B,
              _aLSL: N
          }
      }(), w = function () {
          var f = p(function (c, e, f, a) {
                  var d, b, g;
                  if (c._lazysizesWidth = a, a += "px", c.setAttribute("sizes", a), y.test(e.nodeName || "")) {
                      d = e.getElementsByTagName("source");
                      for (b = 0, g = d.length; b < g; b++) d[b].setAttribute("sizes", a)
                  }
                  f.detail.dataAttr || u(c, f.detail)
              }),
              d = function (b, e, a) {
                  var d = b.parentNode,
                      c;
                  d && (a = z(b, d, a), c = m(b, "lazybeforesizes", {
                      width: a,
                      dataAttr: !!e
                  }), c.defaultPrevented || (a = c.detail.width, a && a !== b._lazysizesWidth && f(b, d, c, a)))
              },
              h = function () {
                  var b = c.length,
                      a;
                  if (b)
                      for (a = 0; a < b; a++) d(c[a])
              },
              e = x(h),
              c;
          return {
              _: function () {
                  c = b.getElementsByClassName(a.autosizesClass), g("resize", e)
              },
              checkElems: e,
              updateElem: d
          }
      }(), r = function () {
          !r.i && b.getElementsByClassName && (r.i = !0, w._(), B._())
      }, d(function () {
          a.init && r()
      }), f = {
          cfg: a,
          autoSizer: w,
          loader: B,
          init: r,
          uP: u,
          aC: n,
          rC: s,
          hC: o,
          fire: m,
          gW: z,
          rAF: l
      })
  }(a, a.document, Date);
  a.lazySizes = b, "object" == typeof module && module.exports && (module.exports = b)
}("undefined" != typeof window ? window : {}), ! function (b, a) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : (b = "undefined" != typeof globalThis ? globalThis : b || self).MiniSearch = a()
}(this, function () {
  "use strict";
  var a = function () {
          return (a = Object.assign || function (d) {
              for (var a, b = 1, e = arguments.length, c; b < e; b++)
                  for (c in a = arguments[b]) Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c]);
              return d
          }).apply(this, arguments)
      },
      h, q, p, c, i, d, C, l, f, m, e, w, B, r, s, k, u, x, n, v, y, z, A, g, o, D, E;

  function t(a) {
      var b = "function" == typeof Symbol && Symbol.iterator,
          c = b && a[b],
          d = 0;
      if (c) return c.call(a);
      if (a && "number" == typeof a.length) return {
          next: function () {
              return a && d >= a.length && (a = void 0), {
                  value: a && a[d++],
                  done: !a
              }
          }
      };
      throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }

  function b(c, f) {
      var a = "function" == typeof Symbol && c[Symbol.iterator],
          b, d, e, g;
      if (!a) return c;
      e = a.call(c), g = [];
      try {
          for (;
              (void 0 === f || f-- > 0) && !(b = e.next()).done;) g.push(b.value)
      } catch (a) {
          d = {
              error: a
          }
      } finally {
          try {
              b && !b.done && (a = e.return) && a.call(e)
          } finally {
              if (d) throw d.error
          }
      }
      return g
  }

  function j(d, b, e) {
      if (e || 2 === arguments.length)
          for (var c, a = 0, f = b.length; a < f; a++) !c && a in b || (c || (c = Array.prototype.slice.call(b, 0, a)), c[a] = b[a]);
      return d.concat(c || b)
  }
  return q = "KEYS", p = "VALUES", c = "", i = function () {
      function a(a, d) {
          var b = a._tree,
              c = Object.keys(b);
          this.set = a, this._type = d, this._path = c.length > 0 ? [{
              node: b,
              keys: c
          }] : []
      }
      return a.prototype.next = function () {
          var a = this.dive();
          return this.backtrack(), a
      }, a.prototype.dive = function () {
          if (0 === this._path.length) return {
              done: !0,
              value: void 0
          };
          var b = d(this._path),
              e = b.node,
              a = b.keys;
          return d(a) === c ? {
              done: !1,
              value: this.result()
          } : (this._path.push({
              node: e[d(a)],
              keys: Object.keys(e[d(a)])
          }), this.dive())
      }, a.prototype.backtrack = function () {
          0 !== this._path.length && (d(this._path).keys.pop(), d(this._path).keys.length > 0 || (this._path.pop(), this.backtrack()))
      }, a.prototype.key = function () {
          return this.set._prefix + this._path.map(function (a) {
              var b = a.keys;
              return d(b)
          }).filter(function (a) {
              return a !== c
          }).join("")
      }, a.prototype.value = function () {
          return d(this._path).node[""]
      }, a.prototype.result = function () {
          return this._type === p ? this.value() : this._type === q ? this.key() : [this.key(), this.value()]
      }, a.prototype[Symbol.iterator] = function () {
          return this
      }, a
  }(), d = function (a) {
      return a[a.length - 1]
  }, C = function (h, i, j, k, l, d) {
      var g, f, b, a, c, e;
      d.push({
          distance: 0,
          ia: k,
          ib: 0,
          edit: l
      });
      for (g = []; d.length > 0;)
          if (f = d.pop(), b = f.distance, a = f.ia, c = f.ib, e = f.edit, c !== i.length)
              if (h[a] === i[c]) d.push({
                  distance: b,
                  ia: a + 1,
                  ib: c + 1,
                  edit: 0
              });
              else {
                  if (b >= j) continue;
                  2 !== e && d.push({
                      distance: b + 1,
                      ia: a,
                      ib: c + 1,
                      edit: 3
                  }), a < h.length && (3 !== e && d.push({
                      distance: b + 1,
                      ia: a + 1,
                      ib: c,
                      edit: 2
                  }), 3 !== e && 2 !== e && d.push({
                      distance: b + 1,
                      ia: a + 1,
                      ib: c + 1,
                      edit: 1
                  }))
              }
      else g.push({
          distance: b,
          i: a,
          edit: e
      });
      return g
  }, l = function () {
      function a(a, b) {
          void 0 === a && (a = {}), void 0 === b && (b = ""), this._tree = a, this._prefix = b
      }
      return a.prototype.atPrefix = function (d) {
          var g, m, h, n, i, j, l, e;
          if (!d.startsWith(this._prefix)) throw new Error("Mismatched prefix");
          if (m = b(f(this._tree, d.slice(this._prefix.length)), 2), h = m[0], n = m[1], void 0 === h)
              if (i = b(k(n), 2), j = i[0], l = i[1], e = Object.keys(j).find(function (a) {
                      return a !== c && a.startsWith(l)
                  }), void 0 !== e) return new a(((g = {})[e.slice(l.length)] = j[e], g), d);
          return new a(h || {}, d)
      }, a.prototype.clear = function () {
          delete this._size, this._tree = {}
      }, a.prototype.delete = function (a) {
          return delete this._size, B(this._tree, a)
      }, a.prototype.entries = function () {
          return new i(this, "ENTRIES")
      }, a.prototype.forEach = function (g) {
          var d, e, c, a, f;
          try {
              for (c = t(this), a = c.next(); !a.done; a = c.next()) f = b(a.value, 2), g(f[0], f[1], this)
          } catch (a) {
              d = {
                  error: a
              }
          } finally {
              try {
                  a && !a.done && (e = c.return) && e.call(c)
              } finally {
                  if (d) throw d.error
              }
          }
      }, a.prototype.fuzzyGet = function (a, d) {
          return function (g, e, f) {
              for (var a = [{
                      distance: 0,
                      i: 0,
                      key: "",
                      node: g
                  }], d = {}, h = [], i = function () {
                      var g = a.pop(),
                          i = g.node,
                          j = g.distance,
                          k = g.key,
                          l = g.i,
                          m = g.edit;
                      Object.keys(i).forEach(function (g) {
                          if (g === c) {
                              var n = j + (e.length - l),
                                  o = b(d[k] || [null, 1 / 0], 2)[1];
                              n <= f && n < o && (d[k] = [i[g], n])
                          } else C(e, g, f - j, l, m, h).forEach(function (b) {
                              var c = b.distance,
                                  d = b.i,
                                  e = b.edit;
                              a.push({
                                  node: i[g],
                                  distance: j + c,
                                  key: k + g,
                                  i: d,
                                  edit: e
                              })
                          })
                      })
                  }; a.length > 0;) i();
              return d
          }(this._tree, a, d)
      }, a.prototype.get = function (b) {
          var a = m(this._tree, b);
          return void 0 !== a ? a[""] : void 0
      }, a.prototype.has = function (b) {
          var a = m(this._tree, b);
          return void 0 !== a && a.hasOwnProperty(c)
      }, a.prototype.keys = function () {
          return new i(this, q)
      }, a.prototype.set = function (a, b) {
          if ("string" != typeof a) throw new Error("key must be a string");
          return delete this._size, e(this._tree, a)[""] = b, this
      }, Object.defineProperty(a.prototype, "size", {
          get: function () {
              var a = this;
              return this._size || (this._size = 0, this.forEach(function () {
                  a._size += 1
              })), this._size
          },
          enumerable: !1,
          configurable: !0
      }), a.prototype.update = function (a, c) {
          if ("string" != typeof a) throw new Error("key must be a string");
          delete this._size;
          var b = e(this._tree, a);
          return b[""] = c(b[""]), this
      }, a.prototype.values = function () {
          return new i(this, p)
      }, a.prototype[Symbol.iterator] = function () {
          return this.entries()
      }, a.from = function (i) {
          var e, g, h = new a,
              d, c, f, j, k;
          try {
              for (d = t(i), c = d.next(); !c.done; c = d.next()) f = b(c.value, 2), j = f[0], k = f[1], h.set(j, k)
          } catch (a) {
              e = {
                  error: a
              }
          } finally {
              try {
                  c && !c.done && (g = d.return) && g.call(d)
              } finally {
                  if (e) throw e.error
              }
          }
          return h
      }, a.fromObject = function (b) {
          return a.from(Object.entries(b))
      }, a
  }(), f = function (b, d, a) {
      if (void 0 === a && (a = []), 0 === d.length || null == b) return [b, a];
      var e = Object.keys(b).find(function (a) {
          return a !== c && d.startsWith(a)
      });
      return void 0 === e ? (a.push([b, d]), f(void 0, "", a)) : (a.push([b, e]), f(b[e], d.slice(e.length), a))
  }, m = function (a, b) {
      if (0 === b.length || null == a) return a;
      var d = Object.keys(a).find(function (a) {
          return a !== c && b.startsWith(a)
      });
      return void 0 !== d ? m(a[d], b.slice(d.length)) : void 0
  }, e = function (a, b) {
      var h, g, d, f;
      return 0 === b.length || null == a ? a : (g = Object.keys(a).find(function (a) {
          return a !== c && b.startsWith(a)
      }), void 0 === g) ? (d = Object.keys(a).find(function (a) {
          return a !== c && a.startsWith(b[0])
      }), void 0 !== d) ? (f = w(b, d), a[f] = ((h = {})[d.slice(f.length)] = a[d], h), delete a[d], e(a[f], b.slice(f.length))) : (a[b] = {}, a[b]) : e(a[g], b.slice(g.length))
  }, w = function (b, e, a, c, d) {
      return void 0 === a && (a = 0), void 0 === c && (c = Math.min(b.length, e.length)), void 0 === d && (d = ""), a >= c || b[a] !== e[a] ? d : w(b, e, a + 1, c, d + b[a])
  }, B = function (g, h) {
      var d = b(f(g, h), 2),
          a = d[0],
          e = d[1],
          c;
      void 0 !== a && (delete a[""], c = Object.keys(a), 0 === c.length && r(e), 1 === c.length && s(e, c[0], a[c[0]]))
  }, r = function (d) {
      var f, e, a;
      0 !== d.length && (f = b(k(d), 2), e = f[0], delete e[f[1]], a = Object.keys(e), 0 === a.length && r(d.slice(0, -1)), 1 === a.length && a[0] !== c && s(d.slice(0, -1), a[0], e[a[0]]))
  }, s = function (a, f, g) {
      if (0 !== a.length) {
          var c = b(k(a), 2),
              d = c[0],
              e = c[1];
          d[e + f] = g, delete d[e]
      }
  }, k = function (a) {
      return a[a.length - 1]
  }, u = "or", x = function () {
      function c(b) {
          if (null == (null == b ? void 0 : b.fields)) throw new Error('MiniSearch: option "fields" must be provided');
          this._options = a(a(a({}, g), b), {
              searchOptions: a(a({}, o), b.searchOptions || {})
          }), this._index = new l, this._documentCount = 0, this._documentIds = {}, this._fieldIds = {}, this._fieldLength = {}, this._averageFieldLength = {}, this._nextId = 0, this._storedFields = {}, this.addFields(this._options.fields)
      }
      return c.prototype.add = function (c) {
          var a = this,
              b = this._options,
              g = b.extractField,
              h = b.tokenize,
              i = b.processTerm,
              j = b.fields,
              e = b.idField,
              f = g(c, e),
              d;
          if (null == f) throw new Error('MiniSearch: document does not have ID field "' + e + '"');
          d = this.addDocumentId(f), this.saveStoredFields(d, c), j.forEach(function (b) {
              var e = g(c, b),
                  f;
              null != e && (f = h(e.toString(), b), a.addFieldLength(d, a._fieldIds[b], a.documentCount - 1, f.length), f.forEach(function (e) {
                  var c = i(e, b);
                  c && a.addTerm(a._fieldIds[b], d, c)
              }))
          })
      }, c.prototype.addAll = function (a) {
          var b = this;
          a.forEach(function (a) {
              return b.add(a)
          })
      }, c.prototype.addAllAsync = function (g, a) {
          var c = this,
              d, e, f, b, h;
          return void 0 === a && (a = {}), d = a.chunkSize, e = void 0 === d ? 10 : d, f = {
              chunk: [],
              promise: Promise.resolve()
          }, b = g.reduce(function (b, f, g) {
              var a = b.chunk,
                  d = b.promise;
              return a.push(f), (g + 1) % e == 0 ? {
                  chunk: [],
                  promise: d.then(function () {
                      return new Promise(function (a) {
                          return setTimeout(a, 0)
                      })
                  }).then(function () {
                      return c.addAll(a)
                  })
              } : {
                  chunk: a,
                  promise: d
              }
          }, f), h = b.chunk, b.promise.then(function () {
              return c.addAll(h)
          })
      }, c.prototype.remove = function (f) {
          var c = this,
              d = this._options,
              k = d.tokenize,
              i = d.processTerm,
              g = d.extractField,
              j = d.fields,
              h = d.idField,
              e = g(f, h),
              a;
          if (null == e) throw new Error('MiniSearch: document does not have ID field "' + h + '"');
          if (a = b(Object.entries(this._documentIds).find(function (c) {
                  var a = b(c, 2),
                      d;
                  return a[0], d = a[1], e === d
              }) || [], 1)[0], null == a) throw new Error("MiniSearch: cannot remove document with ID " + e + ": it is not in the index");
          j.forEach(function (b) {
              var d = g(f, b),
                  e;
              null != d && (e = k(d.toString(), b), e.forEach(function (e) {
                  var d = i(e, b);
                  d && c.removeTerm(c._fieldIds[b], a, d)
              }), c.removeFieldLength(a, c._fieldIds[b], c.documentCount, e.length))
          }), delete this._storedFields[a], delete this._documentIds[a], delete this._fieldLength[a], this._documentCount -= 1
      }, c.prototype.removeAll = function (a) {
          var b = this;
          if (a) a.forEach(function (a) {
              return b.remove(a)
          });
          else {
              if (arguments.length > 0) throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
              this._index = new l, this._documentCount = 0, this._documentIds = {}, this._fieldLength = {}, this._averageFieldLength = {}, this._storedFields = {}, this._nextId = 0
          }
      }, c.prototype.search = function (g, f) {
          var d = this,
              e, h, i, j, c, k, l, m, n;
          return void 0 === f && (f = {}), e = this._options, h = e.tokenize, i = e.processTerm, j = e.searchOptions, c = a(a({
              tokenize: h,
              processTerm: i
          }, j), f), k = c.tokenize, l = c.processTerm, m = k(g).map(function (a) {
              return l(a)
          }).filter(function (a) {
              return !!a
          }).map(z(c)).map(function (a) {
              return d.executeQuery(a, c)
          }), n = this.combineResults(m, c.combineWith), Object.entries(n).reduce(function (f, i) {
              var h = b(i, 2),
                  g = h[0],
                  e = h[1],
                  j = e.score,
                  k = e.match,
                  l = e.terms,
                  a = {
                      id: d._documentIds[g],
                      terms: A(l),
                      score: j,
                      match: k
                  };
              return Object.assign(a, d._storedFields[g]), (null == c.filter || c.filter(a)) && f.push(a), f
          }, []).sort(function (a, b) {
              return a.score < b.score ? 1 : -1
          })
      }, c.prototype.autoSuggest = function (d, c) {
          void 0 === c && (c = {}), c = a(a({}, D), c);
          var e = this.search(d, c).reduce(function (a, c) {
              var d = c.score,
                  e = c.terms,
                  b = e.join(" ");
              return null == a[b] ? a[b] = {
                  score: d,
                  terms: e,
                  count: 1
              } : (a[b].score += d, a[b].count += 1), a
          }, {});
          return Object.entries(e).map(function (d) {
              var c = b(d, 2),
                  e = c[0],
                  a = c[1],
                  f = a.score;
              return {
                  suggestion: e,
                  terms: a.terms,
                  score: f / a.count
              }
          }).sort(function (a, b) {
              return a.score < b.score ? 1 : -1
          })
      }, Object.defineProperty(c.prototype, "documentCount", {
          get: function () {
              return this._documentCount
          },
          enumerable: !1,
          configurable: !0
      }), c.loadJSON = function (b, a) {
          if (null == a) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
          return c.loadJS(JSON.parse(b), a)
      }, c.getDefault = function (a) {
          if (g.hasOwnProperty(a)) return n(g, a);
          throw new Error('MiniSearch: unknown option "' + a + '"')
      }, c.loadJS = function (b, f) {
          var d = b.index,
              g = b.documentCount,
              m = b.nextId,
              h = b.documentIds,
              e = b.fieldIds,
              i = b.fieldLength,
              j = b.averageFieldLength,
              k = b.storedFields,
              a = new c(f);
          return a._index = new l(d._tree, d._prefix), a._documentCount = g, a._nextId = m, a._documentIds = h, a._fieldIds = e, a._fieldLength = i, a._averageFieldLength = j, a._fieldIds = e, a._storedFields = k || {}, a
      }, c.prototype.executeQuery = function (c, q) {
          var i = this,
              d = a(a({}, this._options.searchOptions), q),
              f = (d.fields || this._options.fields).reduce(function (b, c) {
                  var d;
                  return a(a({}, b), ((d = {})[c] = n(b, c) || 1, d))
              }, d.boost || {}),
              g = d.boostDocument,
              p = d.weights,
              k = a(a({}, o.weights), p),
              m = k.fuzzy,
              l = k.prefix,
              j = this.termResults(c.term, f, g, this._index.get(c.term)),
              e, h, r;
          return !c.fuzzy && !c.prefix ? j : (e = [j], (c.prefix && this._index.atPrefix(c.term).forEach(function (a, b) {
              var d = .3 * (a.length - c.term.length) / a.length;
              e.push(i.termResults(a, f, g, b, l, d))
          }), c.fuzzy) && (h = !0 === c.fuzzy ? .2 : c.fuzzy, r = h < 1 ? Math.round(c.term.length * h) : h, Object.entries(this._index.fuzzyGet(c.term, r)).forEach(function (h) {
              var a = b(h, 2),
                  c = a[0],
                  d = b(a[1], 2),
                  j = d[0],
                  k = d[1] / c.length;
              e.push(i.termResults(c, f, g, j, m, k))
          })), e.reduce(v.or, {}))
      }, c.prototype.combineResults = function (b, a) {
          if (void 0 === a && (a = u), 0 === b.length) return {};
          var c = a.toLowerCase();
          return b.reduce(v[c], null) || {}
      }, c.prototype.toJSON = function () {
          return {
              index: this._index,
              documentCount: this._documentCount,
              nextId: this._nextId,
              documentIds: this._documentIds,
              fieldIds: this._fieldIds,
              fieldLength: this._fieldLength,
              averageFieldLength: this._averageFieldLength,
              storedFields: this._storedFields
          }
      }, c.prototype.termResults = function (a, g, e, f, h, d) {
          var c = this;
          return void 0 === d && (d = 0), null == f ? {} : Object.entries(g).reduce(function (g, l) {
              var i = b(l, 2),
                  j = i[0],
                  m = i[1],
                  h = c._fieldIds[j],
                  k = f[h] || {
                      ds: {}
                  },
                  o = k.df,
                  p = k.ds;
              return Object.entries(p).forEach(function (l) {
                  var i = b(l, 2),
                      f = i[0],
                      p = i[1],
                      k = e ? e(c._documentIds[f], a) : 1,
                      q;
                  k && (q = c._fieldLength[f][h] / c._averageFieldLength[h], g[f] = g[f] || {
                      score: 0,
                      match: {},
                      terms: []
                  }, g[f].terms.push(a), g[f].match[a] = n(g[f].match, a) || [], g[f].score += k * y(p, o, c._documentCount, q, m, d), g[f].match[a].push(j))
              }), g
          }, {})
      }, c.prototype.addTerm = function (c, b, d) {
          this._index.update(d, function (e) {
              var f, d = (e = e || {})[c] || {
                  df: 0,
                  ds: {}
              };
              return null == d.ds[b] && (d.df += 1), d.ds[b] = (d.ds[b] || 0) + 1, a(a({}, e), ((f = {})[c] = d, f))
          })
      }, c.prototype.removeTerm = function (d, b, c) {
          var e = this;
          this._index.has(c) ? (this._index.update(c, function (g) {
              var h, f = g[d];
              if (null == f || null == f.ds[b]) return e.warnDocumentChanged(b, d, c), g;
              if (f.ds[b] <= 1) {
                  if (f.df <= 1) return delete g[d], g;
                  f.df -= 1
              }
              return f.ds[b] <= 1 ? (delete f.ds[b], g) : (f.ds[b] -= 1, a(a({}, g), ((h = {})[d] = f, h)))
          }), 0 === Object.keys(this._index.get(c)).length && this._index.delete(c)) : this.warnDocumentChanged(b, d, c)
      }, c.prototype.warnDocumentChanged = function (a, c, d) {
          if (null != console && null != console.warn) {
              var e = Object.entries(this._fieldIds).find(function (d) {
                  var a = b(d, 2);
                  return a[0], a[1] === c
              })[0];
              console.warn("MiniSearch: document with ID " + this._documentIds[a] + ' has changed before removal: term "' + d + '" was not present in field "' + e + '". Removing a document after it has changed can corrupt the index!')
          }
      }, c.prototype.addDocumentId = function (b) {
          var a = this._nextId.toString(36);
          return this._documentIds[a] = b, this._documentCount += 1, this._nextId += 1, a
      }, c.prototype.addFields = function (a) {
          var b = this;
          a.forEach(function (a, c) {
              b._fieldIds[a] = c
          })
      }, c.prototype.addFieldLength = function (b, a, c, d) {
          this._averageFieldLength[a] = this._averageFieldLength[a] || 0;
          var e = this._averageFieldLength[a] * c + d;
          this._fieldLength[b] = this._fieldLength[b] || {}, this._fieldLength[b][a] = d, this._averageFieldLength[a] = e / (c + 1)
      }, c.prototype.removeFieldLength = function (e, a, b, c) {
          var d = this._averageFieldLength[a] * b - c;
          this._averageFieldLength[a] = d / (b - 1)
      }, c.prototype.saveStoredFields = function (a, d) {
          var e = this,
              c = this._options,
              b = c.storeFields,
              f = c.extractField;
          null != b && 0 !== b.length && (this._storedFields[a] = this._storedFields[a] || {}, b.forEach(function (b) {
              var c = f(d, b);
              void 0 !== c && (e._storedFields[a][b] = c)
          }))
      }, c
  }(), n = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : void 0
  }, v = ((h = {}).or = function (a, c) {
      return Object.entries(c).reduce(function (a, k) {
          var f, g = b(k, 2),
              c = g[0],
              d = g[1],
              h = d.score,
              e = d.match,
              i = d.terms;
          return null == a[c] ? a[c] = {
              score: h,
              match: e,
              terms: i
          } : (a[c].score += h, a[c].score *= 1.5, (f = a[c].terms).push.apply(f, j([], b(i))), Object.assign(a[c].match, e)), a
      }, a || {})
  }, h.and = function (c, d) {
      return null == c ? d : Object.entries(d).reduce(function (e, h) {
          var g = b(h, 2),
              d = g[0],
              f = g[1],
              i = f.score,
              k = f.match,
              l = f.terms;
          return void 0 === c[d] || (e[d] = e[d] || {}, e[d].score = c[d].score + i, e[d].match = a(a({}, c[d].match), k), e[d].terms = j(j([], b(c[d].terms)), b(l))), e
      }, {})
  }, h), y = function (g, h, d, e, c, f) {
      var a, b;
      return c / (1 + .333 * c * f) * (a = h, b = d, g * Math.log(b / a)) / e
  }, z = function (a) {
      return function (b, c, d) {
          return {
              term: b,
              fuzzy: "function" == typeof a.fuzzy ? a.fuzzy(b, c, d) : a.fuzzy || !1,
              prefix: "function" == typeof a.prefix ? a.prefix(b, c, d) : !0 === a.prefix
          }
      }
  }, A = function (a) {
      return a.filter(function (a, b, c) {
          return c.indexOf(a) === b
      })
  }, g = {
      idField: "id",
      extractField: function (a, b) {
          return a[b]
      },
      tokenize: function (a, b) {
          return a.split(E)
      },
      processTerm: function (a, b) {
          return a.toLowerCase()
      },
      fields: void 0,
      searchOptions: void 0,
      storeFields: []
  }, o = {
      combineWith: u,
      prefix: !1,
      fuzzy: !1,
      boost: {},
      weights: {
          fuzzy: .9,
          prefix: .75
      }
  }, D = {
      prefix: function (c, a, b) {
          return a === b.length - 1
      }
  }, E = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u, x
}), ! function () {
  "use strict";
  var D = {
          d: function (c, b) {
              for (var a in b) D.o(b, a) && !D.o(c, a) && Object.defineProperty(c, a, {
                  enumerable: !0,
                  get: b[a]
              })
          },
          o: function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b)
          },
          r: function (a) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                  value: "Module"
              }), Object.defineProperty(a, "__esModule", {
                  value: !0
              })
          }
      },
      M = {},
      N, I, j, z, aB, aA, c, t, ax, q, ai, v, w, K, aw, av, E, y, Z, ak, $, at, G, ar, ao, an, H, al, au, aj, Q, ah, am, af, ad, ap, aq, ac, r, p, o, V, B, ay, az, A, ag, aC, aD, aE;
  D.r(M), D.d(M, {
      CREATED: function () {
          return q
      },
      DESTROYED: function () {
          return K
      },
      IDLE: function () {
          return v
      },
      MOUNTED: function () {
          return ai
      },
      MOVING: function () {
          return w
      }
  });

  function ab() {
      return (ab = Object.assign || function (d) {
          for (var a = 1, b, c; a < arguments.length; a++) {
              b = arguments[a];
              for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
          }
          return d
      }).apply(this, arguments)
  }
  N = Object.keys;

  function g(a, b) {
      N(a).some(function (c, d) {
          return b(a[c], c, d)
      })
  }

  function O(a) {
      return N(a).map(function (b) {
          return a[b]
      })
  }

  function Y(a) {
      return "object" == typeof a
  }

  function J(b, c) {
      var a = ab({}, b);
      return g(c, function (c, b) {
          Y(c) ? (Y(a[b]) || (a[b] = {}), a[b] = J(a[b], c)) : a[b] = c
      }), a
  }

  function x(a) {
      return Array.isArray(a) ? a : [a]
  }

  function F(c, a, b) {
      return Math.min(Math.max(c, a > b ? b : a), a > b ? a : b)
  }

  function W(a, b) {
      var c = 0;
      return a.replace(/%s/g, function () {
          return x(b)[c++]
      })
  }

  function e(a) {
      var b = typeof a;
      return "number" === b && a > 0 ? parseFloat(a) + "px" : "string" === b ? a : ""
  }

  function X(a) {
      return a < 10 ? "0" + a : a
  }

  function d(d, a) {
      if ("string" == typeof a) {
          var c = k("div", {});
          b(c, {
              position: "absolute",
              width: a
          }), h(d, c), a = c.clientWidth, s(c)
      }
      return +a || 0
  }

  function n(a, b) {
      return a ? a.querySelector(b.split(" ")[0]) : null
  }

  function l(a, b) {
      return S(a, b)[0]
  }

  function S(a, b) {
      return a ? O(a.children).filter(function (a) {
          return aa(a, b.split(" ")[0]) || a.tagName === b
      }) : []
  }

  function k(c, d) {
      var b = document.createElement(c);
      return g(d, function (c, d) {
          return a(b, d, c)
      }), b
  }

  function T(b) {
      var a = k("div", {});
      return a.innerHTML = b, a.firstChild
  }

  function s(a) {
      x(a).forEach(function (a) {
          if (a) {
              var b = a.parentElement;
              b && b.removeChild(a)
          }
      })
  }

  function h(a, b) {
      a && a.appendChild(b)
  }

  function P(b, a) {
      if (b && a) {
          var c = a.parentElement;
          c && c.insertBefore(b, a)
      }
  }

  function b(a, b) {
      a && g(b, function (b, c) {
          null !== b && (a.style[c] = b)
      })
  }

  function _(a, b, c) {
      a && x(b).forEach(function (b) {
          b && a.classList[c ? "remove" : "add"](b)
      })
  }

  function m(a, b) {
      _(a, b, !1)
  }

  function u(a, b) {
      _(a, b, !0)
  }

  function aa(a, b) {
      return !!a && a.classList.contains(b)
  }

  function a(a, b, c) {
      a && a.setAttribute(b, c)
  }

  function C(a, b) {
      return a ? a.getAttribute(b) : ""
  }

  function f(a, b) {
      x(b).forEach(function (b) {
          x(a).forEach(function (a) {
              return a && a.removeAttribute(b)
          })
      })
  }

  function i(a) {
      return a.getBoundingClientRect()
  }
  I = "slide", j = "loop", z = "fade", aB = function (c, e) {
      var a, d;
      return {
          mount: function () {
              a = e.Elements.list, c.on("transitionend", function (b) {
                  b.target === a && d && d()
              }, a)
          },
          start: function (m, k, i, j, l) {
              var g = c.options,
                  h = e.Controller.edgeIndex,
                  f = g.speed;
              d = l, c.is(I) && (0 === i && k >= h || i >= h && 0 === k) && (f = g.rewindSpeed || f), b(a, {
                  transition: "transform " + f + "ms " + g.easing,
                  transform: "translate(" + j.x + "px," + j.y + "px)"
              })
          }
      }
  }, aA = function (a, c) {
      function d(e) {
          var d = a.options;
          b(c.Elements.slides[e], {
              transition: "opacity " + d.speed + "ms " + d.easing
          })
      }
      return {
          mount: function () {
              d(a.index)
          },
          start: function (h, f, i, j, g) {
              var a = c.Elements.track;
              b(a, {
                  height: e(a.clientHeight)
              }), d(f), setTimeout(function () {
                  g(), b(a, {
                      height: ""
                  })
              })
          }
      }
  };

  function R(a) {
      console.error("[SPLIDE] " + a)
  }

  function L(a, b) {
      if (!a) throw new Error(b)
  }
  c = "splide", t = {
      active: "is-active",
      visible: "is-visible",
      loading: "is-loading"
  }, ax = {
      type: "slide",
      rewind: !1,
      speed: 400,
      rewindSpeed: 0,
      waitForTransition: !0,
      width: 0,
      height: 0,
      fixedWidth: 0,
      fixedHeight: 0,
      heightRatio: 0,
      autoWidth: !1,
      autoHeight: !1,
      perPage: 1,
      perMove: 0,
      clones: 0,
      start: 0,
      focus: !1,
      gap: 0,
      padding: 0,
      arrows: !0,
      arrowPath: "",
      pagination: !0,
      autoplay: !1,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      lazyLoad: !1,
      preloadPages: 1,
      easing: "cubic-bezier(.42,.65,.27,.99)",
      keyboard: "global",
      drag: !0,
      dragAngleThreshold: 30,
      swipeDistanceThreshold: 150,
      flickVelocityThreshold: .6,
      flickPower: 600,
      flickMaxPages: 1,
      direction: "ltr",
      cover: !1,
      accessibility: !0,
      slideFocus: !0,
      isNavigation: !1,
      trimSpace: !0,
      updateOnMove: !1,
      throttle: 100,
      destroy: !1,
      breakpoints: !1,
      classes: {
          root: c,
          slider: c + "__slider",
          track: c + "__track",
          list: c + "__list",
          slide: c + "__slide",
          container: c + "__slide__container",
          arrows: c + "__arrows",
          arrow: c + "__arrow",
          prev: c + "__arrow--prev",
          next: c + "__arrow--next",
          pagination: c + "__pagination",
          page: c + "__pagination__page",
          clone: c + "__slide--clone",
          progress: c + "__progress",
          bar: c + "__progress__bar",
          autoplay: c + "__autoplay",
          play: c + "__play",
          pause: c + "__pause",
          spinner: c + "__spinner",
          sr: c + "__sr"
      },
      i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay"
      }
  }, q = 1, ai = 2, v = 3, w = 4, K = 5;

  function U(d, c) {
      for (var b = 0, a; b < c.length; b++) a = c[b], a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(d, a.key, a)
  }
  aw = function () {
      function c(a, b, c) {
          var d;
          void 0 === b && (b = {}), void 0 === c && (c = {}), this.root = a instanceof Element ? a : document.querySelector(a), L(this.root, "An invalid element/selector was given."), this.Components = null, this.Event = function () {
              var a = [];

              function b(a) {
                  a.elm && a.elm.removeEventListener(a.event, a.handler, a.options)
              }
              return {
                  on: function (e, d, b, c) {
                      void 0 === b && (b = null), void 0 === c && (c = {}), e.split(" ").forEach(function (e) {
                          b && b.addEventListener(e, d, c), a.push({
                              event: e,
                              handler: d,
                              elm: b,
                              options: c
                          })
                      })
                  },
                  off: function (d, c) {
                      void 0 === c && (c = null), d.split(" ").forEach(function (d) {
                          a = a.filter(function (a) {
                              return !a || a.event !== d || a.elm !== c || (b(a), !1)
                          })
                      })
                  },
                  emit: function (e) {
                      for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++) d[b - 1] = arguments[b];
                      a.forEach(function (a) {
                          a.elm || a.event.split(".")[0] !== e || a.handler.apply(a, d)
                      })
                  },
                  destroy: function () {
                      a.forEach(b), a = []
                  }
              }
          }(), this.State = (d = q, {
              set: function (a) {
                  d = a
              },
              is: function (a) {
                  return a === d
              }
          }), this.STATES = M, this._o = J(ax, b), this._i = 0, this._c = c, this._e = {}, this._t = null
      }
      var d, e, f, a = c.prototype;
      return a.mount = function (a, c) {
          var e = this,
              d;
          void 0 === a && (a = this._e), void 0 === c && (c = this._t), this.State.set(q), this._e = a, this._t = c, this.Components = function (b, d, c) {
              var a = {};
              return g(d, function (d, c) {
                  a[c] = d(b, a, c.toLowerCase())
              }), c || (c = b.is(z) ? aA : aB), a.Transition = c(b, a), a
          }(this, J(this._c, a), c);
          try {
              g(this.Components, function (a, c) {
                  var b = a.required;
                  void 0 === b || b ? a.mount && a.mount() : delete e.Components[c]
              })
          } catch (a) {
              return void R(a.message)
          }
          return d = this.State, d.set(ai), g(this.Components, function (a) {
              a.mounted && a.mounted()
          }), this.emit("mounted"), d.set(v), this.emit("ready"), b(this.root, {
              visibility: "visible"
          }), this.on("move drag", function () {
              return d.set(w)
          }).on("moved dragged", function () {
              return d.set(v)
          }), this
      }, a.sync = function (a) {
          return this.sibling = a, this
      }, a.on = function (c, d, a, b) {
          return void 0 === a && (a = null), void 0 === b && (b = {}), this.Event.on(c, d, a, b), this
      }, a.off = function (b, a) {
          return void 0 === a && (a = null), this.Event.off(b, a), this
      }, a.emit = function (e) {
          for (var c, b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), a = 1; a < b; a++) d[a - 1] = arguments[a];
          return (c = this.Event).emit.apply(c, [e].concat(d)), this
      }, a.go = function (b, a) {
          return void 0 === a && (a = this.options.waitForTransition), (this.State.is(v) || this.State.is(w) && !a) && this.Components.Controller.go(b, !1), this
      }, a.is = function (a) {
          return a === this._o.type
      }, a.add = function (b, a) {
          return void 0 === a && (a = -1), this.Components.Elements.add(b, a, this.refresh.bind(this)), this
      }, a.remove = function (a) {
          return this.Components.Elements.remove(a), this.refresh(), this
      }, a.refresh = function () {
          return this.emit("refresh:before").emit("refresh").emit("resize"), this
      }, a.destroy = function (a) {
          var b = this;
          if (void 0 === a && (a = !0), !this.State.is(q)) return O(this.Components).reverse().forEach(function (b) {
              b.destroy && b.destroy(a)
          }), this.emit("destroy", a), this.Event.destroy(), this.State.set(K), this;
          this.on("ready", function () {
              return b.destroy(a)
          })
      }, d = c, (e = [{
          key: "index",
          get: function () {
              return this._i
          },
          set: function (a) {
              this._i = parseInt(a)
          }
      }, {
          key: "length",
          get: function () {
              return this.Components.Elements.length
          }
      }, {
          key: "options",
          get: function () {
              return this._o
          },
          set: function (b) {
              var a = this.State.is(q);
              a || this.emit("update"), this._o = J(this._o, b), a || this.emit("updated", this._o)
          }
      }, {
          key: "classes",
          get: function () {
              return this._o.classes
          }
      }, {
          key: "i18n",
          get: function () {
              return this._o.i18n
          }
      }]) && U(d.prototype, e), f && U(d, f), c
  }(), av = function (a) {
      var b = C(a.root, "data-splide");
      if (b) try {
          a.options = JSON.parse(b)
      } catch (a) {
          R(a.message)
      }
      return {
          mount: function () {
              a.State.is(q) && (a.index = a.options.start)
          }
      }
  }, E = "rtl", y = "ttb", Z = "update.slide", ak = function (k, r) {
      var e = k.root,
          d = k.classes,
          j = [],
          q, c;
      e.id || (window.splide = window.splide || {}, q = window.splide.uid || 0, window.splide.uid = ++q, e.id = "splide" + X(q)), c = {
          mount: function () {
              var a = this;
              this.init(), k.on("refresh", function () {
                  a.destroy(), a.init()
              }).on("updated", function () {
                  u(e, o()), m(e, o())
              })
          },
          destroy: function () {
              j.forEach(function (a) {
                  a.destroy()
              }), j = [], u(e, o())
          },
          init: function () {
              var a = this;
              ! function () {
                  var a, b;
                  c.slider = l(e, d.slider), c.track = n(e, "." + d.track), c.list = l(c.track, d.list), L(c.track && c.list, "Track or list was not found."), c.slides = S(c.list, d.slide), a = p(d.arrows), c.arrows = {
                      prev: n(a, "." + d.prev),
                      next: n(a, "." + d.next)
                  }, b = p(d.autoplay), c.bar = n(p(d.progress), "." + d.bar), c.play = n(b, "." + d.play), c.pause = n(b, "." + d.pause), c.track.id = c.track.id || e.id + "-track", c.list.id = c.list.id || e.id + "-list"
              }(), m(e, o()), this.slides.forEach(function (b, c) {
                  a.register(b, c, -1)
              })
          },
          register: function (d, e, g) {
              var c = function (c, e, h, d) {
                  var k = c.options.updateOnMove,
                      n = "ready.slide updated.slide resized.slide moved.slide" + (k ? " move.slide" : ""),
                      g = {
                          slide: d,
                          index: e,
                          realIndex: h,
                          container: l(d, c.classes.container),
                          isClone: h > -1,
                          mount: function () {
                              var a = this;
                              this.isClone || (d.id = c.root.id + "-slide" + X(e + 1)), c.on(n, function () {
                                  return a.update()
                              }).on(Z, o).on("click", function () {
                                  return c.emit("click", a)
                              }, d), k && c.on("move.slide", function (a) {
                                  a === h && j(!0, !1)
                              }), b(d, {
                                  display: ""
                              }), this.styles = C(d, "style") || ""
                          },
                          destroy: function () {
                              c.off(n).off(Z).off("click", d), u(d, O(t)), o(), f(this.container, "style")
                          },
                          update: function () {
                              j(this.isActive(), !1), j(this.isVisible(), !0)
                          },
                          isActive: function () {
                              return c.index === e
                          },
                          isVisible: function () {
                              var e = this.isActive(),
                                  f, a, b;
                              return c.is(z) || e ? e : (f = Math.ceil, a = i(c.Components.Elements.track), b = i(d), c.options.direction === y ? a.top <= b.top && b.bottom <= f(a.bottom) : a.left <= b.left && b.right <= f(a.right))
                          },
                          isWithin: function (b, d) {
                              var a = Math.abs(b - e);
                              return c.is(I) || this.isClone || (a = Math.min(a, c.length - a)), a < d
                          }
                      };

                  function j(f, b) {
                      var e = b ? "visible" : "active",
                          a = t[e];
                      f ? (m(d, a), c.emit("" + e, g)) : aa(d, a) && (u(d, a), c.emit(b ? "hidden" : "inactive", g))
                  }

                  function o() {
                      a(d, "style", g.styles)
                  }
                  return g
              }(k, e, g, d);
              c.mount(), j.push(c)
          },
          getSlide: function (a) {
              return j.filter(function (b) {
                  return b.index === a
              })[0]
          },
          getSlides: function (a) {
              return a ? j : j.filter(function (a) {
                  return !a.isClone
              })
          },
          getSlidesByPage: function (c) {
              var a = r.Controller.toIndex(c),
                  b = k.options,
                  d = !1 !== b.focus ? 1 : b.perPage;
              return j.filter(function (c) {
                  var b = c.index;
                  return a <= b && b < a + d
              })
          },
          add: function (a, c, d) {
              if ("string" == typeof a && (a = T(a)), a instanceof Element) {
                  var e = this.slides[c];
                  b(a, {
                          display: "none"
                      }), e ? (P(a, e), this.slides.splice(c, 0, a)) : (h(this.list, a), this.slides.push(a)),
                      function (d, a) {
                          var b = d.querySelectorAll("img"),
                              c = b.length,
                              e;
                          c ? (e = 0, g(b, function (b) {
                              b.onload = b.onerror = function () {
                                  ++e === c && a()
                              }
                          })) : a()
                      }(a, function () {
                          d && d(a)
                      })
              }
          },
          remove: function (a) {
              s(this.slides.splice(a, 1)[0])
          },
          each: function (a) {
              j.forEach(a)
          },
          get length() {
              return this.slides.length
          },
          get total() {
              return j.length
          }
      };

      function o() {
          var a = d.root,
              b = k.options;
          return [a + "--" + b.type, a + "--" + b.direction, b.drag ? a + "--draggable" : "", b.isNavigation ? a + "--nav" : "", t.active]
      }

      function p(a) {
          return l(e, a) || l(c.slider, a)
      }
      return c
  }, $ = Math.floor, at = function (a, f) {
      var b, c, d = {
          mount: function () {
              b = a.options, c = a.is(j), a.on("move", function (b) {
                  a.index = b
              }).on("updated refresh", function (c) {
                  b = c || b, a.index = F(a.index, 0, d.edgeIndex)
              })
          },
          go: function (b, c) {
              var a = this.trim(this.parse(b));
              f.Track.go(a, this.rewind(a), c)
          },
          parse: function (g) {
              var c = a.index,
                  e = String(g).match(/([+\-<>]+)(\d+)?/),
                  h = e ? e[1] : "",
                  f = e ? parseInt(e[2]) : 0;
              switch (h) {
                  case "+":
                      c += f || 1;
                      break;
                  case "-":
                      c -= f || 1;
                      break;
                  case ">":
                  case "<":
                      c = function (a, c, g) {
                          if (a > -1) return d.toIndex(a);
                          var e = b.perMove,
                              f = g ? -1 : 1;
                          return e ? c + e * f : d.toIndex(d.toPage(c) + f)
                      }(f, c, "<" === h);
                      break;
                  default:
                      c = parseInt(g)
              }
              return c
          },
          toIndex: function (g) {
              if (e()) return g;
              var c = a.length,
                  f = b.perPage,
                  d = g * f;
              return c - f <= (d -= (this.pageLength * f - c) * $(d / c)) && d < c && (d = c - f), d
          },
          toPage: function (c) {
              if (e()) return c;
              var d = a.length,
                  f = b.perPage;
              return $(d - f <= c && c < d ? (d - 1) / f : c / f)
          },
          trim: function (a) {
              return c || (a = b.rewind ? this.rewind(a) : F(a, 0, this.edgeIndex)), a
          },
          rewind: function (a) {
              var b = this.edgeIndex;
              if (c) {
                  for (; a > b;) a -= b + 1;
                  for (; a < 0;) a += b + 1
              } else a > b ? a = 0 : a < 0 && (a = b);
              return a
          },
          isRtl: function () {
              return b.direction === E
          },
          get pageLength() {
              var c = a.length;
              return e() ? c : Math.ceil(c / b.perPage)
          },
          get edgeIndex() {
              var d = a.length;
              return d ? e() || b.isNavigation || c ? d - 1 : d - b.perPage : 0
          },
          get prevIndex() {
              var d = a.index - 1;
              return (c || b.rewind) && (d = this.rewind(d)), d > -1 ? d : -1
          },
          get nextIndex() {
              var d = a.index + 1;
              return (c || b.rewind) && (d = this.rewind(d)), a.index < d && d <= this.edgeIndex || 0 === d ? d : -1
          }
      };

      function e() {
          return !1 !== b.focus
      }
      return d
  }, G = Math.abs, ar = function (a, f) {
      var c, g, d, h = a.options.direction === y,
          l = a.is(z),
          n = a.options.direction === E,
          m = !1,
          e = n ? 1 : -1,
          k = {
              sign: e,
              mount: function () {
                  g = f.Elements, c = f.Layout, d = g.list
              },
              mounted: function () {
                  var b = this;
                  l || (this.jump(0), a.on("mounted resize updated", function () {
                      b.jump(a.index)
                  }))
              },
              go: function (b, d, e) {
                  var g = p(b),
                      c = a.index;
                  a.State.is(w) && m || (m = b !== d, e || a.emit("move", d, c, b), Math.abs(g - this.position) >= 1 || l ? f.Transition.start(b, d, c, this.toCoord(g), function () {
                      o(b, d, c, e)
                  }) : b !== c && "move" === a.options.trimSpace ? f.Controller.go(b + b - c, e) : o(b, d, c, e))
              },
              jump: function (a) {
                  this.translate(p(a))
              },
              translate: function (a) {
                  b(d, {
                      transform: "translate" + (h ? "Y" : "X") + "(" + a + "px)"
                  })
              },
              cancel: function () {
                  a.is(j) ? this.shift() : this.translate(this.position), b(d, {
                      transition: ""
                  })
              },
              shift: function () {
                  var b = G(this.position),
                      c = G(this.toPosition(0)),
                      d = G(this.toPosition(a.length)),
                      f = d - c;
                  b < c ? b += f : b > d && (b -= f), this.translate(e * b)
              },
              trim: function (b) {
                  return !a.options.trimSpace || a.is(j) ? b : F(b, e * (c.totalSize() - c.size - c.gap), 0)
              },
              toIndex: function (c) {
                  var d = this,
                      a = 0,
                      b = 1 / 0;
                  return g.getSlides(!0).forEach(function (g) {
                      var e = g.index,
                          f = G(d.toPosition(e) - c);
                      f < b && (b = f, a = e)
                  }), a
              },
              toCoord: function (a) {
                  return {
                      x: h ? 0 : a,
                      y: h ? a : 0
                  }
              },
              toPosition: function (a) {
                  var b = c.totalSize(a) - c.slideSize(a) - c.gap;
                  return e * (b + this.offset(a))
              },
              offset: function (e) {
                  var b = a.options.focus,
                      d = c.slideSize(e);
                  return "center" === b ? -(c.size - d) / 2 : -(parseInt(b) || 0) * (d + c.gap)
              },
              get position() {
                  var a = h ? "top" : n ? "right" : "left";
                  return i(d)[a] - (i(g.track)[a] - c.padding[a] * e)
              }
          };

      function o(e, c, f, g) {
          b(d, {
              transition: ""
          }), m = !1, l || k.jump(c), g || a.emit("moved", c, f, e)
      }

      function p(a) {
          return k.trim(k.toPosition(a))
      }
      return k
  }, ao = function (a, n) {
      var b = [],
          g = 0,
          c = n.Elements,
          i = {
              mount: function () {
                  var b = this;
                  a.is(j) && (k(), a.on("refresh:before", function () {
                      b.destroy()
                  }).on("refresh", k).on("resize", function () {
                      g !== e() && (b.destroy(), a.refresh())
                  }))
              },
              destroy: function () {
                  s(b), b = []
              },
              get clones() {
                  return b
              },
              get length() {
                  return b.length
              }
          };

      function k() {
          i.destroy(),
              function (e) {
                  var d = c.length,
                      f = c.register,
                      a;
                  if (d) {
                      for (a = c.slides; a.length < e;) a = a.concat(a);
                      a.slice(0, e).forEach(function (g, e) {
                          var a = l(g);
                          h(c.list, a), b.push(a), f(a, e + d, e % d)
                      }), a.slice(-e).forEach(function (h, g) {
                          var c = l(h);
                          P(c, a[0]), b.push(c), f(c, g - e, (d + g - e % d) % d)
                      })
                  }
              }(g = e())
      }

      function e() {
          var b = a.options,
              e, f, g;
          return b.clones ? b.clones : (e = b.autoWidth || b.autoHeight ? c.length : b.perPage, f = b.direction === y ? "Height" : "Width", g = d(a.root, b["fixed" + f]), g && (e = Math.ceil(c.track["client" + f] / g)), e * (b.drag ? b.flickMaxPages + 1 : 1))
      }

      function l(c) {
          var b = c.cloneNode(!0);
          return m(b, a.classes.clone), f(b, "id"), b
      }
      return i
  };

  function ae(b, c) {
      var a;
      return function () {
          a || (a = setTimeout(function () {
              b(), a = null
          }, c))
      }
  }
  an = function (a, k) {
      var h, l, g = k.Elements,
          j = a.options.direction === y,
          c = (h = {
              mount: function () {
                  a.on("resize load", ae(function () {
                      a.emit("resize")
                  }, a.options.throttle), window).on("resize", n).on("updated refresh", m), m(), this.totalSize = j ? this.totalHeight : this.totalWidth, this.slideSize = j ? this.slideHeight : this.slideWidth
              },
              destroy: function () {
                  f([g.list, g.track], "style")
              },
              get size() {
                  return j ? this.height : this.width
              }
          }, l = j ? function (g, j) {
              var h, a, f = j.Elements,
                  c = g.root;
              return {
                  margin: "marginBottom",
                  init: function () {
                      this.resize()
                  },
                  resize: function () {
                      a = g.options, h = f.track, this.gap = d(c, a.gap);
                      var i = a.padding,
                          j = d(c, i.top || i),
                          k = d(c, i.bottom || i);
                      this.padding = {
                          top: j,
                          bottom: k
                      }, b(h, {
                          paddingTop: e(j),
                          paddingBottom: e(k)
                      })
                  },
                  totalHeight: function (a) {
                      void 0 === a && (a = g.length - 1);
                      var b = f.getSlide(a);
                      return b ? i(b.slide).bottom - i(f.list).top + this.gap : 0
                  },
                  slideWidth: function () {
                      return d(c, a.fixedWidth || this.width)
                  },
                  slideHeight: function (g) {
                      var b, e;
                      return a.autoHeight ? (b = f.getSlide(g), b ? b.slide.offsetHeight : 0) : (e = a.fixedHeight || (this.height + this.gap) / a.perPage - this.gap, d(c, e))
                  },
                  get width() {
                      return h.clientWidth
                  },
                  get height() {
                      var b = a.height || this.width * a.heightRatio;
                      return L(b, '"height" or "heightRatio" is missing.'), d(c, b) - this.padding.top - this.padding.bottom
                  }
              }
          }(a, k) : function (f, j) {
              var h, g = j.Elements,
                  c = f.root,
                  a = f.options;
              return {
                  margin: "margin" + (a.direction === E ? "Left" : "Right"),
                  height: 0,
                  init: function () {
                      this.resize()
                  },
                  resize: function () {
                      a = f.options, h = g.track, this.gap = d(c, a.gap);
                      var i = a.padding,
                          j = d(c, i.left || i),
                          k = d(c, i.right || i);
                      this.padding = {
                          left: j,
                          right: k
                      }, b(h, {
                          paddingLeft: e(j),
                          paddingRight: e(k)
                      })
                  },
                  totalWidth: function (c) {
                      var d, b, e, h;
                      return void 0 === c && (c = f.length - 1), d = g.getSlide(c), b = 0, d && (e = i(d.slide), h = i(g.list), b = a.direction === E ? h.right - e.left : e.right - h.left, b += this.gap), b
                  },
                  slideWidth: function (f) {
                      var b, e;
                      return a.autoWidth ? (b = g.getSlide(f), b ? b.slide.offsetWidth : 0) : (e = a.fixedWidth || (this.width + this.gap) / a.perPage - this.gap, d(c, e))
                  },
                  slideHeight: function () {
                      var b = a.height || a.fixedHeight || this.width * a.heightRatio;
                      return d(c, b)
                  },
                  get width() {
                      return h.clientWidth - this.padding.left - this.padding.right
                  }
              }
          }(a, k), N(l).forEach(function (a) {
              h[a] || Object.defineProperty(h, a, Object.getOwnPropertyDescriptor(l, a))
          }), h);

      function m() {
          c.init(), b(a.root, {
              maxWidth: e(a.options.width)
          }), g.each(function (a) {
              a.slide.style[c.margin] = e(c.gap)
          }), n()
      }

      function n() {
          var d = a.options,
              f;
          c.resize(), b(g.track, {
              height: e(c.height)
          }), f = d.autoHeight ? null : e(c.slideHeight()), g.each(function (a) {
              b(a.container, {
                  height: f
              }), b(a.slide, {
                  width: d.autoWidth ? null : e(c.slideWidth(a.index)),
                  height: a.container ? null : f
              })
          }), a.emit("resized")
      }
      return c
  }, H = Math.abs, al = function (a, f) {
      var k, c, d, e, b = f.Track,
          i = f.Controller,
          j = a.options.direction === y,
          h = j ? "y" : "x",
          l = {
              disabled: !1,
              mount: function () {
                  var d = this,
                      c = f.Elements,
                      b = c.track;
                  a.on("touchstart mousedown", o, b).on("touchmove mousemove", p, b, {
                      passive: !1
                  }).on("touchend touchcancel mouseleave mouseup dragend", q, b).on("mounted refresh", function () {
                      g(c.list.querySelectorAll("img, a"), function (b) {
                          a.off("dragstart", b).on("dragstart", function (a) {
                              a.preventDefault()
                          }, b, {
                              passive: !1
                          })
                      })
                  }).on("mounted updated", function () {
                      d.disabled = !a.options.drag
                  })
              }
          };

      function o(a) {
          l.disabled || e || m(a)
      }

      function m(a) {
          k = b.toCoord(b.position), c = n(a, {}), d = c
      }

      function p(f) {
          if (c)
              if (d = n(f, c), e) {
                  if (f.cancelable && f.preventDefault(), !a.is(z)) {
                      var g = k[h] + d.offset[h];
                      b.translate(function (c) {
                          if (a.is(I)) {
                              var d = b.sign,
                                  e = d * b.trim(b.toPosition(0)),
                                  f = d * b.trim(b.toPosition(i.edgeIndex));
                              (c *= d) < e ? c = e - 7 * Math.log(e - c) : c > f && (c = f + 7 * Math.log(c - f)), c *= d
                          }
                          return c
                      }(g))
                  }
              } else(function (d) {
                  var c = d.offset,
                      b;
                  return !(a.State.is(w) && a.options.waitForTransition) && (b = 180 * Math.atan(H(c.y) / H(c.x)) / Math.PI, j && (b = 90 - b), b < a.options.dragAngleThreshold)
              })(d) && (a.emit("drag", c), e = !0, b.cancel(), m(f))
      }

      function q() {
          c = null, e && (a.emit("dragged", d), function (l) {
              var j = l.velocity[h],
                  e = H(j),
                  d, g, k, c, m;
              e > 0 && (d = a.options, g = a.index, k = j < 0 ? -1 : 1, c = g, a.is(z) || (m = b.position, e > d.flickVelocityThreshold && H(l.offset[h]) < d.swipeDistanceThreshold && (m += k * Math.min(e * d.flickPower, f.Layout.size * (d.flickMaxPages || 1))), c = b.toIndex(m)), c === g && e > .1 && (c = g + k * b.sign), a.is(I) && (c = F(c, 0, i.edgeIndex)), i.go(c, d.isNavigation))
          }(d), e = !1)
      }

      function n(d, k) {
          var g = d.timeStamp,
              f = d.touches,
              e = f ? f[0] : d,
              a = e.clientX,
              c = e.clientY,
              h = k.to || {},
              i = h.x,
              m = void 0 === i ? a : i,
              j = h.y,
              b = {
                  x: a - m,
                  y: c - (void 0 === j ? c : j)
              },
              l = g - (k.time || 0);
          return {
              to: {
                  x: a,
                  y: c
              },
              offset: b,
              time: g,
              velocity: {
                  x: b.x / l,
                  y: b.y / l
              }
          }
      }
      return l
  }, au = function (b, c) {
      var a = !1;

      function d(b) {
          a && (b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation())
      }
      return {
          required: b.options.drag,
          mount: function () {
              b.on("click", d, c.Elements.track, {
                  capture: !0
              }).on("drag", function () {
                  a = !0
              }).on("dragged", function () {
                  setTimeout(function () {
                      a = !1
                  })
              })
          }
      }
  }, aj = 1, Q = 2, ah = 3, am = function (a, g, l) {
      var b, c, i, d = a.classes,
          n = a.root,
          e = g.Elements;

      function o() {
          var d = g.Controller,
              e = d.prevIndex,
              f = d.nextIndex,
              h = a.length > a.options.perPage || a.is(j);
          b.disabled = e < 0 || !h, c.disabled = f < 0 || !h, a.emit(l + ":updated", b, c, e, f)
      }

      function m(b) {
          return T('<button class="' + d.arrow + " " + (b ? d.prev : d.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg"	viewBox="0 0 40 40"	width="40"	height="40"><path d="' + (a.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
      }
      return {
          required: a.options.arrows,
          mount: function () {
              b = e.arrows.prev, c = e.arrows.next, b && c || !a.options.arrows || (b = m(!0), c = m(!1), i = !0, function () {
                  var f = k("div", {
                          class: d.arrows
                      }),
                      g, i;
                  h(f, b), h(f, c), g = e.slider, i = "slider" === a.options.arrows && g ? g : n, P(f, i.firstElementChild)
              }()), b && c && a.on("click", function () {
                  a.go("<")
              }, b).on("click", function () {
                  a.go(">")
              }, c).on("mounted move updated refresh", o), this.arrows = {
                  prev: b,
                  next: c
              }
          },
          mounted: function () {
              a.emit(l + ":mounted", b, c)
          },
          destroy: function () {
              f([b, c], "disabled"), i && s(b.parentElement)
          }
      }
  }, af = "move.page", ad = "updated.page refresh.page", ap = function (a, e, f) {
      var b = {},
          d = e.Elements,
          c = {
              mount: function () {
                  var e = a.options.pagination,
                      f;
                  e && (b = function () {
                      var b = a.options,
                          c = a.classes,
                          e = k("ul", {
                              class: c.pagination
                          }),
                          f = d.getSlides(!1).filter(function (a) {
                              return !1 !== b.focus || a.index % b.perPage == 0
                          }).map(function (i, b) {
                              var f = k("li", {}),
                                  g = k("button", {
                                      class: c.page,
                                      type: "button"
                                  });
                              return h(f, g), h(e, f), a.on("click", function () {
                                  a.go(">" + b)
                              }, g), {
                                  li: f,
                                  button: g,
                                  page: b,
                                  Slides: d.getSlidesByPage(b)
                              }
                          });
                      return {
                          list: e,
                          items: f
                      }
                  }(), f = d.slider, h("slider" === e && f ? f : a.root, b.list), a.on(af, g)), a.off(ad).on(ad, function () {
                      c.destroy(), a.options.pagination && (c.mount(), c.mounted())
                  })
              },
              mounted: function () {
                  if (a.options.pagination) {
                      var c = a.index;
                      a.emit(f + ":mounted", b, this.getItem(c)), g(c, -1)
                  }
              },
              destroy: function () {
                  s(b.list), b.items && b.items.forEach(function (b) {
                      a.off("click", b.button)
                  }), a.off(af), b = {}
              },
              getItem: function (a) {
                  return b.items[e.Controller.toPage(a)]
              },
              get data() {
                  return b
              }
          };

      function g(h, i) {
          var d = c.getItem(i),
              e = c.getItem(h),
              g = t.active;
          d && u(d.button, g), e && m(e.button, g), a.emit(f + ":updated", b, d, e)
      }
      return c
  }, aq = "data-splide-lazy", ac = "data-splide-lazy-srcset", r = "aria-current", p = "aria-controls", o = "aria-label", V = "aria-hidden", B = "tabindex", ay = {
      ltr: {
          ArrowLeft: "<",
          ArrowRight: ">",
          Left: "<",
          Right: ">"
      },
      rtl: {
          ArrowLeft: ">",
          ArrowRight: "<",
          Left: ">",
          Right: "<"
      },
      ttb: {
          ArrowUp: "<",
          ArrowDown: ">",
          Up: "<",
          Down: ">"
      }
  }, az = function (b, e) {
      var c = b.i18n,
          d = e.Elements,
          g = [V, B, p, o, r, "role"];

      function h(c, d) {
          a(c, V, !d), b.options.slideFocus && a(c, B, d ? 0 : -1)
      }

      function q(c, e) {
          var b = d.track.id;
          a(c, p, b), a(e, p, b)
      }

      function n(g, h, d, e) {
          var f = b.index,
              i = d > -1 && f < d ? c.last : c.prev,
              j = e > -1 && f > e ? c.first : c.next;
          a(g, o, i), a(h, o, j)
      }

      function k(e, d) {
          d && a(d.button, r, !0), e.items.forEach(function (d) {
              var e = b.options,
                  g = W(!1 === e.focus && e.perPage > 1 ? c.pageX : c.slideX, d.page + 1),
                  f = d.button,
                  h = d.Slides.map(function (a) {
                      return a.slide.id
                  });
              a(f, p, h.join(" ")), a(f, o, g)
          })
      }

      function l(d, b, c) {
          b && f(b.button, r), c && a(c.button, r, !0)
      }

      function m(b) {
          d.each(function (e) {
              var d = e.slide,
                  f = e.realIndex,
                  g, i, h;
              j(d) || a(d, "role", "button"), g = f > -1 ? f : e.index, i = W(c.slideX, g + 1), h = b.Components.Elements.getSlide(g), a(d, o, i), h && a(d, p, h.slide.id)
          })
      }

      function i(c, d) {
          var b = c.slide;
          d ? a(b, r, !0) : f(b, r)
      }

      function j(a) {
          return "BUTTON" === a.tagName
      }
      return {
          required: b.options.accessibility,
          mount: function () {
              b.on("visible", function (a) {
                  h(a.slide, !0)
              }).on("hidden", function (a) {
                  h(a.slide, !1)
              }).on("arrows:mounted", q).on("arrows:updated", n).on("pagination:mounted", k).on("pagination:updated", l).on("refresh", function () {
                  f(e.Clones.clones, g)
              }), b.options.isNavigation && b.on("navigation:mounted navigation:updated", m).on("active", function (a) {
                  i(a, !0)
              }).on("inactive", function (a) {
                  i(a, !1)
              }), ["play", "pause"].forEach(function (e) {
                  var b = d[e];
                  b && (j(b) || a(b, "role", "button"), a(b, p, d.track.id), a(b, o, c[e]))
              })
          },
          destroy: function () {
              var a = e.Arrows,
                  b = a ? a.arrows : {};
              f(d.slides.concat([b.prev, b.next, d.play, d.pause]), g)
          }
      }
  }, A = "move.sync", ag = "mouseup touchend", aC = [" ", "Enter", "Spacebar"], aD = {
      Options: av,
      Breakpoints: function (a) {
          var b, d, c = a.options.breakpoints,
              e = ae(g, 50),
              f = [];

          function g() {
              var g, e = (g = f.filter(function (a) {
                      return a.mql.matches
                  })[0]) ? g.point : -1,
                  j, h, i;
              e !== d && (d = e, j = a.State, h = c[e] || b, i = h.destroy, i ? (a.options = b, a.destroy("completely" === i)) : (j.is(K) && a.mount(), a.options = h))
          }
          return {
              required: c && matchMedia,
              mount: function () {
                  f = Object.keys(c).sort(function (a, b) {
                      return +a - +b
                  }).map(function (a) {
                      return {
                          point: a,
                          mql: matchMedia("(max-width:" + a + "px)")
                      }
                  }), this.destroy(!0), addEventListener("resize", e), b = a.options, g()
              },
              destroy: function (a) {
                  a && removeEventListener("resize", e)
              }
          }
      },
      Controller: at,
      Elements: ak,
      Track: ar,
      Clones: ao,
      Layout: an,
      Drag: al,
      Click: au,
      Autoplay: function (a, i, g) {
          var h, f = [],
              c = i.Elements,
              d = {
                  required: a.options.autoplay,
                  mount: function () {
                      var f = a.options;
                      c.slides.length > f.perPage && (h = function (h, d, f) {
                          var a, g, b, e = window.requestAnimationFrame,
                              c = !0,
                              i = function j(i) {
                                  c || (a || (a = i, b && b < 1 && (a -= b * d)), b = (g = i - a) / d, g >= d && (a = 0, b = 1, h()), f && f(b), e(j))
                              };
                          return {
                              pause: function () {
                                  c = !0, a = 0
                              },
                              play: function (d) {
                                  a = 0, d && (b = 0), c && (c = !1, e(i))
                              }
                          }
                      }(function () {
                          a.go(">")
                      }, f.interval, function (d) {
                          a.emit(g + ":playing", d), c.bar && b(c.bar, {
                              width: 100 * d + "%"
                          })
                      }), function () {
                          var f = a.options,
                              g = a.sibling,
                              b = [a.root, g ? g.root : null];
                          f.pauseOnHover && (e(b, "mouseleave", aj, !0), e(b, "mouseenter", aj, !1)), f.pauseOnFocus && (e(b, "focusout", Q, !0), e(b, "focusin", Q, !1)), c.play && a.on("click", function () {
                              d.play(Q), d.play(ah)
                          }, c.play), c.pause && e([c.pause], "click", ah, !1), a.on("move refresh", function () {
                              d.play()
                          }).on("destroy", function () {
                              d.pause()
                          })
                      }(), this.play())
                  },
                  play: function (b) {
                      void 0 === b && (b = 0), (f = f.filter(function (a) {
                          return a !== b
                      })).length || (a.emit(g + ":play"), h.play(a.options.resetProgress))
                  },
                  pause: function (b) {
                      void 0 === b && (b = 0), h.pause(), -1 === f.indexOf(b) && f.push(b), 1 === f.length && a.emit(g + ":pause")
                  }
              };

          function e(b, c, e, f) {
              b.forEach(function (b) {
                  a.on(c, function () {
                      d[f ? "play" : "pause"](e)
                  }, b)
              })
          }
          return d
      },
      Cover: function (a, e) {
          function c(a) {
              e.Elements.each(function (c) {
                  var b = l(c.slide, "IMG") || l(c.container, "IMG");
                  b && b.src && d(b, a)
              })
          }

          function d(a, c) {
              b(a.parentElement, {
                  background: c ? "" : 'center/cover no-repeat url("' + a.src + '")'
              }), b(a, {
                  display: c ? "" : "none"
              })
          }
          return {
              required: a.options.cover,
              mount: function () {
                  a.on("lazyload:loaded", function (a) {
                      d(a, !1)
                  }), a.on("mounted updated refresh", function () {
                      return c(!1)
                  })
              },
              destroy: function () {
                  c(!0)
              }
          }
      },
      Arrows: am,
      Pagination: ap,
      LazyLoad: function (c, q, i) {
          var e, d, f = c.options,
              j = "sequential" === f.lazyLoad;

          function l() {
              d = [], e = 0
          }

          function r(a) {
              a = isNaN(a) ? c.index : a, (d = d.filter(function (b) {
                  return !b.Slide.isWithin(a, f.perPage * (f.preloadPages + 1)) || (n(b.img, b.Slide), !1)
              }))[0] || c.off("moved." + i)
          }

          function n(b, d) {
              m(d.slide, t.loading);
              var e = k("span", {
                  class: c.classes.spinner
              });
              h(b.parentElement, e), b.onload = function () {
                  p(b, e, d, !1)
              }, b.onerror = function () {
                  p(b, e, d, !0)
              }, a(b, "srcset", C(b, ac) || ""), a(b, "src", C(b, aq) || "")
          }

          function o() {
              if (e < d.length) {
                  var a = d[e];
                  n(a.img, a.Slide)
              }
              e++
          }

          function p(a, d, e, f) {
              u(e.slide, t.loading), f || (s(d), b(a, {
                  display: ""
              }), c.emit(i + ":loaded", a).emit("resize")), j && o()
          }
          return {
              required: f.lazyLoad,
              mount: function () {
                  c.on("mounted refresh", function () {
                      l(), q.Elements.each(function (a) {
                          g(a.slide.querySelectorAll("[data-splide-lazy], [" + ac + "]"), function (c) {
                              c.src || c.srcset || (d.push({
                                  img: c,
                                  Slide: a
                              }), b(c, {
                                  display: "none"
                              }))
                          })
                      }), j && o()
                  }), j || c.on("mounted refresh moved." + i, r)
              },
              destroy: l
          }
      },
      Keyboard: function (b) {
          var c;
          return {
              mount: function () {
                  b.on("mounted updated", function () {
                      var e = b.options,
                          d = b.root,
                          g = ay[e.direction],
                          h = e.keyboard;
                      c && (b.off("keydown", c), f(d, B)), h && ("focused" === h ? (c = d, a(d, B, 0)) : c = document, b.on("keydown", function (a) {
                          g[a.key] && b.go(g[a.key])
                      }, c))
                  })
              }
          }
      },
      Sync: function (a) {
          var b = a.sibling,
              c = b && b.options.isNavigation;

          function d() {
              a.on(A, function (a, d, c) {
                  b.off(A).go(b.is(j) ? c : a, !1), e()
              })
          }

          function e() {
              b.on(A, function (b, e, c) {
                  a.off(A).go(a.is(j) ? c : b, !1), d()
              })
          }

          function f() {
              b.Components.Elements.each(function (c) {
                  var b = c.slide,
                      d = c.index;
                  a.off(ag, b).on(ag, function (a) {
                      a.button && 0 !== a.button || g(d)
                  }, b), a.off("keyup", b).on("keyup", function (a) {
                      aC.indexOf(a.key) > -1 && (a.preventDefault(), g(d))
                  }, b, {
                      passive: !1
                  })
              })
          }

          function g(c) {
              a.State.is(v) && b.go(c)
          }
          return {
              required: !!b,
              mount: function () {
                  d(), e(), c && (f(), a.on("refresh", function () {
                      setTimeout(function () {
                          f(), b.emit("navigation:updated", a)
                      })
                  }))
              },
              mounted: function () {
                  c && b.emit("navigation:mounted", a)
              }
          }
      },
      A11y: az
  }, aE = function (c) {
      var a, b;

      function d(a, b) {
          return c.call(this, a, b, aD) || this
      }
      return b = c, (a = d).prototype = Object.create(b.prototype), a.prototype.constructor = a, a.__proto__ = b, d
  }(aw), window.Splide = aE
}();
var t, e;
t = this, e = function () {
  "use strict";
  var i, d, j, h, b, m, n, v, p, q, r, s, t, c, g, l, o, e, f, B;

  function u(a, d) {
      var b = Object.keys(a),
          c;
      return Object.getOwnPropertySymbols && (c = Object.getOwnPropertySymbols(a), d && (c = c.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable
      })), b.push.apply(b, c)), b
  }

  function a(c) {
      for (var a = 1, b; a < arguments.length; a++) b = null != arguments[a] ? arguments[a] : {}, a % 2 ? u(Object(b), !0).forEach(function (a) {
          C(c, a, b[a])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(b)) : u(Object(b)).forEach(function (a) {
          Object.defineProperty(c, a, Object.getOwnPropertyDescriptor(b, a))
      });
      return c
  }

  function A(a) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
          return typeof a
      } : function (a) {
          return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      })(a)
  }

  function C(a, b, c) {
      return b in a ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : a[b] = c, a
  }

  function x(a) {
      return function (a) {
          if (Array.isArray(a)) return k(a)
      }(a) || function (a) {
          if ("undefined" != typeof Symbol && null != a[Symbol.iterator] || null != a["@@iterator"]) return Array.from(a)
      }(a) || w(a) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function w(a, c) {
      if (a) {
          if ("string" == typeof a) return k(a, c);
          var b = Object.prototype.toString.call(a).slice(8, -1);
          return "Object" === b && a.constructor && (b = a.constructor.name), "Map" === b || "Set" === b ? Array.from(a) : "Arguments" === b || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? k(a, c) : void 0
      }
  }

  function k(c, a) {
      (null == a || a > c.length) && (a = c.length);
      for (var b = 0, d = new Array(a); b < a; b++) d[b] = c[b];
      return d
  }
  i = function (a) {
      return "string" == typeof a ? document.querySelector(a) : a()
  }, d = function (e, f) {
      var a = "string" == typeof e ? document.createElement(e) : e,
          b, c, d;
      for (b in f) c = f[b], "inside" === b ? c.append(a) : "dest" === b ? i(c[0]).insertAdjacentElement(c[1], a) : "around" === b ? (d = c, d.parentNode.insertBefore(a, d), a.append(d), null != d.getAttribute("autofocus") && d.focus()) : b in a ? a[b] = c : a.setAttribute(b, c);
      return a
  }, j = function (a, b) {
      return a = a.toString().toLowerCase(), b ? a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : a
  }, h = function (c, b) {
      return d("mark", a({
          innerHTML: c
      }, "string" == typeof b && {
          class: b
      })).outerHTML
  }, b = function (b, a) {
      a.input.dispatchEvent(new CustomEvent(b, {
          bubbles: !0,
          detail: a.feedback,
          cancelable: !0
      }))
  }, m = function (a, b, m) {
      var f = m || {},
          l = f.mode,
          k = f.diacritics,
          e = f.highlight,
          i = j(b, k),
          g, c, n, d;
      if (b = b.toString(), a = j(a, k), "loose" === l) {
          if (g = (a = a.replace(/ /g, "")).length, c = 0, n = Array.from(b).map(function (b, d) {
                  return c < g && i[d] === a[c] && (b = e ? h(b, e) : b, c++), b
              }).join(""), c === g) return n
      } else if (d = i.indexOf(a), ~d) return a = b.substring(d, d + a.length), d = e ? b.replace(a, h(a, e)) : b
  }, n = function (a, c) {
      return new Promise(function (e, f) {
          var d;
          return (d = a.data).cache && d.store ? e() : new Promise(function (a, b) {
              return "function" == typeof d.src ? d.src(c).then(a, b) : a(d.src)
          }).then(function (c) {
              try {
                  return a.feedback = d.store = c, b("response", a), e()
              } catch (a) {
                  return f(a)
              }
          }, f)
      })
  }, v = function (e, a) {
      var c = a.data,
          f = a.searchEngine,
          d = [],
          g;
      c.store.forEach(function (g, j) {
          var h = function (b) {
                  var c = b ? g[b] : g,
                      h = "function" == typeof f ? f(e, c) : m(e, c, {
                          mode: f,
                          diacritics: a.diacritics,
                          highlight: a.resultItem.highlight
                      }),
                      i;
                  h && (i = {
                      match: h,
                      value: g
                  }, b && (i.key = b), d.push(i))
              },
              i, b;
          if (c.keys) {
              b = function (a, h) {
                  var b = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"],
                      d, e, f, g, c;
                  if (!b) {
                      if (Array.isArray(a) || (b = w(a)) || h && a && "number" == typeof a.length) return b && (a = b), d = 0, e = function () {}, {
                          s: e,
                          n: function () {
                              return d >= a.length ? {
                                  done: !0
                              } : {
                                  done: !1,
                                  value: a[d++]
                              }
                          },
                          e: function (a) {
                              throw a
                          },
                          f: e
                      };
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
                  return g = !0, c = !1, {
                      s: function () {
                          b = b.call(a)
                      },
                      n: function () {
                          var a = b.next();
                          return g = a.done, a
                      },
                      e: function (a) {
                          c = !0, f = a
                      },
                      f: function () {
                          try {
                              g || null == b.return || b.return()
                          } finally {
                              if (c) throw f
                          }
                      }
                  }
              }(c.keys);
              try {
                  for (b.s(); !(i = b.n()).done;) h(i.value)
              } catch (a) {
                  b.e(a)
              } finally {
                  b.f()
              }
          } else h()
      }), c.filter && (d = c.filter(d)), g = d.slice(0, a.resultsList.maxResults), a.feedback = {
          query: e,
          matches: d,
          results: g
      }, b("results", a)
  }, p = "aria-expanded", q = "aria-activedescendant", r = "aria-selected", s = function (b, c) {
      b.feedback.selection = a({
          index: c
      }, b.feedback.results[c])
  }, t = function (a) {
      a.isOpen || ((a.wrapper || a.input).setAttribute(p, !0), a.list.removeAttribute("hidden"), a.isOpen = !0, b("open", a))
  }, c = function (a) {
      a.isOpen && ((a.wrapper || a.input).setAttribute(p, !1), a.input.setAttribute(q, ""), a.list.setAttribute("hidden", ""), a.isOpen = !1, b("close", a))
  }, g = function (c, a) {
      var f = a.resultItem,
          d = a.list.getElementsByTagName(f.tag),
          e = !!f.selected && f.selected.split(" "),
          h, i, g;
      a.isOpen && d.length && (g = a.cursor, c >= d.length && (c = 0), c < 0 && (c = d.length - 1), a.cursor = c, g > -1 && (d[g].removeAttribute(r), e && (i = d[g].classList).remove.apply(i, x(e))), d[c].setAttribute(r, !0), e && (h = d[c].classList).add.apply(h, x(e)), a.input.setAttribute(q, d[a.cursor].id), a.list.scrollTop = d[c].offsetTop - a.list.clientHeight + d[c].clientHeight + 5, a.feedback.cursor = a.cursor, s(a, c), b("navigate", a))
  }, l = function (a) {
      g(a.cursor + 1, a)
  }, o = function (a) {
      g(a.cursor - 1, a)
  }, e = function (a, e, d) {
      (d = d >= 0 ? d : a.cursor) < 0 || (a.feedback.event = e, s(a, d), b("selection", a), c(a))
  };

  function z(b, f) {
      var e = this;
      return new Promise(function (i, j) {
          var g, h;
          return g = f || ((h = b.input) instanceof HTMLInputElement || h instanceof HTMLTextAreaElement ? h.value : h.innerHTML),
              function (a, b, c) {
                  return b ? b(a) : a.length >= c
              }(g = b.query ? b.query(g) : g, b.trigger, b.threshold) ? n(b, g).then(function (f) {
                  try {
                      return b.feedback instanceof Error ? i() : (v(g, b), b.resultsList && function (b) {
                          var f = b.resultsList,
                              g = b.list,
                              e = b.resultItem,
                              h = b.feedback,
                              j = h.matches,
                              k = h.results,
                              i;
                          b.cursor = -1, g.innerHTML = "", j.length || f.noResults ? (i = new DocumentFragment, k.forEach(function (b, c) {
                              var f = d(e.tag, a({
                                  id: "".concat(e.id, "_").concat(c),
                                  role: "option",
                                  innerHTML: b.match,
                                  inside: i
                              }, e.class && {
                                  class: e.class
                              }));
                              e.element && e.element(f, b)
                          }), g.append(i), f.element && f.element(g, h), t(b)) : c(b)
                      }(b), k.call(e))
                  } catch (a) {
                      return j(a)
                  }
              }, j) : (c(b), k.call(e));

          function k() {
              return i()
          }
      })
  }
  f = function (b, d) {
      var a, c;
      for (a in b)
          for (c in b[a]) d(a, c)
  }, B = function (b) {
      var h, i, j, d = b.events,
          m = (h = function () {
              return z(b)
          }, i = b.debounce, function () {
              clearTimeout(j), j = setTimeout(function () {
                  return h()
              }, i)
          }),
          g = b.events = a({
              input: a({}, d && d.input)
          }, b.resultsList && {
              list: d ? a({}, d.list) : {}
          }),
          k = {
              input: {
                  input: function () {
                      m()
                  },
                  keydown: function (a) {
                      ! function (b, a) {
                          switch (b.keyCode) {
                              case 40:
                              case 38:
                                  b.preventDefault(), 40 === b.keyCode ? l(a) : o(a);
                                  break;
                              case 13:
                                  a.submit || b.preventDefault(), a.cursor >= 0 && e(a, b);
                                  break;
                              case 9:
                                  a.resultsList.tabSelect && a.cursor >= 0 && e(a, b);
                                  break;
                              case 27:
                                  a.input.value = "", c(a)
                          }
                      }(a, b)
                  },
                  blur: function () {
                      c(b)
                  }
              },
              list: {
                  mousedown: function (a) {
                      a.preventDefault()
                  },
                  click: function (a) {
                      ! function (d, a) {
                          var b = a.resultItem.tag.toUpperCase(),
                              f = Array.from(a.list.querySelectorAll(b)),
                              c = d.target.closest(b);
                          c && c.nodeName === b && e(a, d, f.indexOf(c))
                      }(a, b)
                  }
              }
          };
      f(k, function (c, a) {
          (b.resultsList || "input" === a) && (g[c][a] || (g[c][a] = k[c][a]))
      }), f(g, function (a, c) {
          b[a].addEventListener(c, g[a][c])
      })
  };

  function y(c) {
      var e = this;
      return new Promise(function (k, i) {
          var g, f, h;
          if (g = c.placeHolder, h = {
                  role: "combobox",
                  "aria-owns": (f = c.resultsList).id,
                  "aria-haspopup": !0,
                  "aria-expanded": !1
              }, d(c.input, a(a({
                  "aria-controls": f.id,
                  "aria-autocomplete": "both"
              }, g && {
                  placeholder: g
              }), !c.wrapper && a({}, h))), c.wrapper && (c.wrapper = d("div", a({
                  around: c.input,
                  class: c.name + "_wrapper"
              }, h))), f && (c.list = d(f.tag, a({
                  dest: [f.destination, f.position],
                  id: f.id,
                  role: "listbox",
                  hidden: "hidden"
              }, f.class && {
                  class: f.class
              }))), B(c), c.data.cache) return n(c).then(function (a) {
              try {
                  return j.call(e)
              } catch (a) {
                  return i(a)
              }
          }, i);

          function j() {
              return b("init", c), k()
          }
          return j.call(e)
      })
  }

  function D(b) {
      var a = b.prototype;
      a.init = function () {
          y(this)
      }, a.start = function (a) {
          z(this, a)
      }, a.unInit = function () {
          var b, a;
          this.wrapper && (b = this.wrapper.parentNode, b.insertBefore(this.input, this.wrapper), b.removeChild(this.wrapper)), f((a = this).events, function (b, c) {
              a[b].removeEventListener(c, a.events[b][c])
          })
      }, a.open = function () {
          t(this)
      }, a.close = function () {
          c(this)
      }, a.goTo = function (a) {
          g(a, this)
      }, a.next = function () {
          l(this)
      }, a.previous = function () {
          o(this)
      }, a.select = function (a) {
          e(this, null, a)
      }, a.search = function (a, b, c) {
          return m(a, b, c)
      }
  }
  return function a(b) {
      this.options = b, this.id = a.instances = (a.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = {
              position: "afterend",
              tag: "ul",
              maxResults: 5
          }, this.resultItem = {
              tag: "li"
          },
          function (a) {
              var e = a.name,
                  c = a.options,
                  d = a.resultsList,
                  f = a.resultItem,
                  b, g;
              for (b in c)
                  if ("object" === A(c[b]))
                      for (g in a[b] || (a[b] = {}), c[b]) a[b][g] = c[b][g];
                  else a[b] = c[b];
              a.selector = a.selector || "#" + e, d.destination = d.destination || a.selector, d.id = d.id || e + "_list_" + a.id, f.id = f.id || e + "_result", a.input = i(a.selector)
          }(this), D.call(this, a), y(this)
  }
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).autoComplete = e(), (() => {
  var ak = !1,
      ay = !1,
      x = [],
      r, q, N, bJ, aq, bC, bB, bN, ai, ag, u, ad, be, bc, Z, ac, aW, aj, B, aR, aO, aJ, aE, aD, ax, O, am, az, af, aK, m, aX, ab, bd, ct, p, dL, dM, co, dP, cj, dQ, bp, cf, E, k, A, ca, al, C, dJ, by, bz, an, R, b_, dR, bY, dS, bG, dT, bI, aA, w, f, l, au, bR, n, ao, b$, bu, cb, cc, cd, ce, H, ch, ci, bm, bl, dO, dN, X, V, S, P, aM, aI, aF, aC, cJ, cL, dK, cN, dU, aQ, dH, aS, cT, bx, bO;

  function bU(a) {
      bZ(a)
  }

  function bZ(a) {
      x.includes(a) || x.push(a), cM()
  }

  function cM() {
      !ay && !ak && (ak = !0, queueMicrotask(dI))
  }

  function dI() {
      ak = !1, ay = !0;
      for (let a = 0; a < x.length; a++) x[a]();
      x.length = 0, ay = !1
  }
  aq = !0;

  function dE(a) {
      aq = !1, a(), aq = !0
  }

  function dB(a) {
      r = a.reactive, N = a.release, q = b => a.effect(b, {
          scheduler: a => {
              aq ? bU(a) : a()
          }
      }), bJ = a.raw
  }

  function bF(a) {
      q = a
  }

  function dy(a) {
      let b = () => {};
      return [d => {
          let c = q(d);
          a._x_effects || (a._x_effects = new Set, a._x_runEffects = () => {
              a._x_effects.forEach(a => a())
          }), a._x_effects.add(c), b = () => {
              c !== void 0 && (a._x_effects.delete(c), N(c))
          }
      }, () => {
          b()
      }]
  }
  bC = [], bB = [], bN = [];

  function dq(a) {
      bN.push(a)
  }

  function dp(a) {
      bB.push(a)
  }

  function dn(a) {
      bC.push(a)
  }

  function dl(a, b, c) {
      a._x_attributeCleanups || (a._x_attributeCleanups = {}), a._x_attributeCleanups[b] || (a._x_attributeCleanups[b] = []), a._x_attributeCleanups[b].push(c)
  }

  function bv(a, b) {
      !a._x_attributeCleanups || Object.entries(a._x_attributeCleanups).forEach(([c, d]) => {
          (b === void 0 || b.includes(c)) && d.forEach(a => a()), delete a._x_attributeCleanups[c]
      })
  }
  ai = new MutationObserver(bq), ag = !1;

  function bt() {
      ai.observe(document, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeOldValue: !0
      }), ag = !0
  }

  function dk() {
      ai.disconnect(), ag = !1
  }
  u = [], ad = !1;

  function dj() {
      u = u.concat(ai.takeRecords()), u.length && !ad && (ad = !0, queueMicrotask(() => {
          dg(), ad = !1
      }))
  }

  function dg() {
      bq(u), u.length = 0
  }

  function b(a) {
      if (!ag) return a();
      dj(), dk();
      let b = a();
      return bt(), b
  }

  function bq(a) {
      let d = [],
          e = [],
          b = new Map,
          c = new Map;
      for (let f = 0; f < a.length; f++)
          if (!a[f].target._x_ignoreMutationObserver && (a[f].type === "childList" && (a[f].addedNodes.forEach(a => a.nodeType === 1 && d.push(a)), a[f].removedNodes.forEach(a => a.nodeType === 1 && e.push(a))), a[f].type === "attributes")) {
              let d = a[f].target,
                  e = a[f].attributeName,
                  i = a[f].oldValue,
                  g = () => {
                      b.has(d) || b.set(d, []), b.get(d).push({
                          name: e,
                          value: d.getAttribute(e)
                      })
                  },
                  h = () => {
                      c.has(d) || c.set(d, []), c.get(d).push(e)
                  };
              d.hasAttribute(e) && i === null ? g() : d.hasAttribute(e) ? (h(), g()) : h()
          } c.forEach((a, b) => {
          bv(b, a)
      }), b.forEach((a, b) => {
          bC.forEach(c => c(b, a))
      });
      for (let a of d) e.includes(a) || bN.forEach(b => b(a));
      for (let a of e) d.includes(a) || bB.forEach(b => b(a));
      d = null, e = null, b = null, c = null
  }

  function _(a, b, c) {
      return a._x_dataStack = [b, ...I(c || a)], () => {
          a._x_dataStack = a._x_dataStack.filter(a => a !== b)
      }
  }

  function bo(a, b) {
      let c = a._x_dataStack[0];
      Object.entries(b).forEach(([a, b]) => {
          c[a] = b
      })
  }

  function I(a) {
      return a._x_dataStack ? a._x_dataStack : typeof ShadowRoot == "function" && a instanceof ShadowRoot ? I(a.host) : a.parentNode ? I(a.parentNode) : []
  }

  function bj(a) {
      return new Proxy({}, {
          ownKeys: () => Array.from(new Set(a.flatMap(a => Object.keys(a)))),
          has: (c, b) => a.some(a => a.hasOwnProperty(b)),
          get: (c, b) => (a.find(a => a.hasOwnProperty(b)) || {})[b],
          set: (e, b, c) => {
              let d = a.find(a => a.hasOwnProperty(b));
              return d ? d[b] = c : a[a.length - 1][b] = c, !0
          }
      })
  }

  function dc(a) {
      let c = a => typeof a == "object" && !Array.isArray(a) && a !== null,
          b = (d, e = "") => {
              Object.entries(d).forEach(([g, f]) => {
                  let h = e === "" ? g : `${e}.${g}`;
                  typeof f == "object" && f !== null && f._x_interceptor ? d[g] = f.initialize(a, h, g) : c(f) && f !== d && !(f instanceof Element) && b(f, h)
              })
          };
      return b(a)
  }

  function bh(b, c = () => {}) {
      let a = {
          initialValue: void 0,
          _x_interceptor: !0,
          initialize(c, a, d) {
              return b(this.initialValue, () => da(c, a), b => bf(c, a, b), a, d)
          }
      };
      return c(a), b => {
          if (typeof b == "object" && b !== null && b._x_interceptor) {
              let c = a.initialize.bind(a);
              a.initialize = (d, e, f) => {
                  let g = b.initialize(d, e, f);
                  return a.initialValue = g, c(d, e, f)
              }
          } else a.initialValue = b;
          return a
      }
  }

  function da(a, b) {
      return b.split(".").reduce((a, b) => a[b], a)
  }

  function bf(b, a, c) {
      if (typeof a == "string" && (a = a.split(".")), a.length === 1) b[a[0]] = c;
      else {
          if (a.length === 0) throw error;
          return b[a[0]] || (b[a[0]] = {}), bf(b[a[0]], a.slice(1), c)
      }
  }
  be = {};

  function h(a, b) {
      be[a] = b
  }

  function T(a, b) {
      return Object.entries(be).forEach(([c, d]) => {
          Object.defineProperty(a, `$${c}`, {
              get() {
                  return d(b, {
                      Alpine: p,
                      interceptor: bh
                  })
              },
              enumerable: !1
          })
      }), a
  }

  function g(b, c, e = {}) {
      let a;
      return d(b, c)(b => a = b, e), a
  }

  function d(...a) {
      return bc(...a)
  }
  bc = bb;

  function c$(a) {
      bc = a
  }

  function bb(b, a) {
      let c = {};
      T(c, b);
      let d = [c, ...I(b)];
      if (typeof a == "function") return c_(d, a);
      let e = cY(d, a);
      return cX.bind(null, b, a, e)
  }

  function c_(a, b) {
      return (c = () => {}, {
          scope: d = {},
          params: e = []
      } = {}) => {
          let f = b.apply(bj([d, ...a]), e);
          F(c, f)
      }
  }
  Z = {};

  function cZ(a) {
      if (Z[a]) return Z[a];
      let c = Object.getPrototypeOf(async function () {}).constructor,
          d = /^[\n\s]*if.*\(.*\)/.test(a) || /^(let|const)/.test(a) ? `(() => { ${a} })()` : a,
          b = new c(["__self", "scope"], `with (scope) { __self.result = ${d} }; __self.finished = true; return __self.result;`);
      return Z[a] = b, b
  }

  function cY(b, c) {
      let a = cZ(c);
      return (d = () => {}, {
          scope: f = {},
          params: e = []
      } = {}) => {
          a.result = void 0, a.finished = !1;
          let c = bj([f, ...b]),
              g = a(a, c);
          a.finished ? F(d, a.result, c, e) : g.then(a => {
              F(d, a, c, e)
          })
      }
  }

  function F(a, b, c, d) {
      if (typeof b == "function") {
          let e = b.apply(c, d);
          e instanceof Promise ? e.then(b => F(a, b, c, d)) : a(e)
      } else a(b)
  }

  function cX(a, b, c, ...d) {
      try {
          return c(...d)
      } catch (c) {
          throw console.warn(`Alpine Expression Error: ${c.message}

Expression: "${b}"

`, a), c
      }
  }
  ac = "x-";

  function y(a = "") {
      return ac + a
  }

  function cW(a) {
      ac = a
  }
  aW = {};

  function c(a, b) {
      aW[a] = b
  }

  function ah(b, c, d) {
      let a = {};
      return Array.from(c).map(aG((b, c) => a[b] = c)).filter(aB).map(cK(a, d)).sort(cI).map(a => cP(b, a))
  }

  function cS(a) {
      return Array.from(a).map(aG()).filter(a => !aB(a))
  }
  aj = !1, B = new Map, aR = Symbol();

  function cQ(c) {
      aj = !0;
      let a = Symbol();
      aR = a, B.set(a, []);
      let b = () => {
              for (; B.get(a).length;) B.get(a).shift()();
              B.delete(a)
          },
          d = () => {
              aj = !1, b()
          };
      c(b), d()
  }

  function cP(a, c) {
      let m = () => {},
          b = aW[c.type] || m,
          e = [],
          j = a => e.push(a),
          [k, l] = dy(a);
      e.push(l);
      let f = {
              Alpine: p,
              effect: k,
              cleanup: j,
              evaluateLater: d.bind(d, a),
              evaluate: g.bind(g, a)
          },
          h = () => e.forEach(a => a());
      dl(a, c.original, h);
      let i = () => {
          a._x_ignore || a._x_ignoreSelf || (b.inline && b.inline(a, c, f), b = b.bind(b, a, c, f), aj ? B.get(aR).push(b) : b())
      };
      return i.runCleanups = h, i
  }
  aO = (a, b) => ({
      name: c,
      value: d
  }) => (c.startsWith(a) && (c = c.replace(a, b)), {
      name: c,
      value: d
  }), aJ = a => a;

  function aG(a = () => {}) {
      return ({
          name: b,
          value: d
      }) => {
          let {
              name: c,
              value: e
          } = aE.reduce((a, b) => b(a), {
              name: b,
              value: d
          });
          return c !== b && a(c, b), {
              name: c,
              value: e
          }
      }
  }
  aE = [];

  function at(a) {
      aE.push(a)
  }

  function aB({
      name: a
  }) {
      return aD().test(a)
  }
  aD = () => new RegExp(`^${ac}([^:^.]+)\\b`);

  function cK(a, b) {
      return ({
          name: c,
          value: f
      }) => {
          let d = c.match(aD()),
              e = c.match(/:([a-zA-Z0-9\-:]+)/),
              g = c.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
              h = b || a[c] || c;
          return {
              type: d ? d[1] : null,
              value: e ? e[1] : null,
              modifiers: g.map(a => a.replace(".", "")),
              expression: f,
              original: h
          }
      }
  }
  ax = "DEFAULT", O = ["ignore", "ref", "data", "bind", "init", "for", "model", "transition", "show", "if", ax, "element"];

  function cI(a, b) {
      let c = O.indexOf(a.type) === -1 ? ax : a.type,
          d = O.indexOf(b.type) === -1 ? ax : b.type;
      return O.indexOf(c) - O.indexOf(d)
  }

  function z(a, b, c = {}) {
      a.dispatchEvent(new CustomEvent(b, {
          detail: c,
          bubbles: !0,
          composed: !0,
          cancelable: !0
      }))
  }
  am = [], az = !1;

  function av(a) {
      am.push(a), queueMicrotask(() => {
          az || setTimeout(() => {
              ar()
          })
      })
  }

  function ar() {
      for (az = !1; am.length;) am.shift()()
  }

  function cH() {
      az = !0
  }

  function o(a, c) {
      if (typeof ShadowRoot == "function" && a instanceof ShadowRoot) {
          Array.from(a.children).forEach(a => o(a, c));
          return
      }
      let d = !1;
      if (c(a, () => d = !0), d) return;
      let b = a.firstElementChild;
      for (; b;) o(b, c, !1), b = b.nextElementSibling
  }

  function aH(a, ...b) {
      console.warn(`Alpine Warning: ${a}`, ...b)
  }

  function cG() {
      document.body || aH("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), z(document, "alpine:init"), z(document, "alpine:initializing"), bt(), dq(a => s(a, o)), dp(a => av(() => cC(a))), dn((a, b) => {
          ah(a, b).forEach(a => a())
      });
      let a = a => !t(a.parentElement);
      Array.from(document.querySelectorAll(cF())).filter(a).forEach(a => {
          s(a)
      }), z(document, "alpine:initialized")
  }
  af = [], aK = [];

  function aL() {
      return af.map(a => a())
  }

  function cF() {
      return af.concat(aK).map(a => a())
  }

  function aN(a) {
      af.push(a)
  }

  function cE(a) {
      aK.push(a)
  }

  function t(a) {
      if (!!a) {
          if (aL().some(b => a.matches(b))) return a;
          if (!!a.parentElement) return t(a.parentElement)
      }
  }

  function cD(a) {
      return aL().some(b => a.matches(b))
  }

  function s(a, b = o) {
      cQ(() => {
          b(a, (a, b) => {
              ah(a, a.attributes).forEach(a => a()), a._x_ignore && b()
          })
      })
  }

  function cC(a) {
      o(a, a => bv(a))
  }

  function aT(b, c) {
      var a;
      return function () {
          var d = this,
              e = arguments,
              f = function () {
                  a = null, b.apply(d, e)
              };
          clearTimeout(a), a = setTimeout(f, c)
      }
  }

  function aU(b, c) {
      let a;
      return function () {
          let d = this,
              e = arguments;
          a || (b.apply(d, e), a = !0, setTimeout(() => a = !1, c))
      }
  }

  function cB(a) {
      a(p)
  }
  m = {}, aX = !1;

  function cA(b, a) {
      if (aX || (m = r(m), aX = !0), a === void 0) return m[b];
      m[b] = a, typeof a == "object" && a !== null && a.hasOwnProperty("init") && typeof a.init == "function" && m[b].init()
  }

  function cz() {
      return m
  }
  ab = !1;

  function $(a) {
      return (...b) => ab || a(...b)
  }

  function cy(b, a) {
      a._x_dataStack = b._x_dataStack, ab = !0, cw(() => {
          cx(a)
      }), ab = !1
  }

  function cx(b) {
      let a = !1;
      s(b, (b, c) => {
          o(b, (b, d) => {
              if (a && cD(b)) return d();
              a = !0, c(b, d)
          })
      })
  }

  function cw(b) {
      let a = q;
      bF((b, d) => {
          let c = a(b);
          return N(c), () => {}
      }), b(), bF(a)
  }
  bd = {};

  function cv(a, b) {
      bd[a] = b
  }

  function cu(a, b) {
      return Object.entries(bd).forEach(([c, d]) => {
          Object.defineProperty(a, c, {
              get() {
                  return (...a) => d.bind(b)(...a)
              },
              enumerable: !1
          })
      }), a
  }
  ct = {
      get reactive() {
          return r
      },
      get release() {
          return N
      },
      get effect() {
          return q
      },
      get raw() {
          return bJ
      },
      version: "3.3.3",
      disableEffectScheduling: dE,
      setReactivityEngine: dB,
      addRootSelector: aN,
      mapAttributes: at,
      evaluateLater: d,
      setEvaluator: c$,
      closestRoot: t,
      interceptor: bh,
      mutateDom: b,
      directive: c,
      throttle: aU,
      debounce: aT,
      evaluate: g,
      initTree: s,
      nextTick: av,
      prefix: cW,
      plugin: cB,
      magic: h,
      store: cA,
      start: cG,
      clone: cy,
      data: cv
  }, p = ct;

  function bi(c, d) {
      let a = Object.create(null),
          b = c.split(",");
      for (let c = 0; c < b.length; c++) a[b[c]] = !0;
      return d ? b => !!a[b.toLowerCase()] : b => !!a[b]
  }
  dL = {
      [1]: "TEXT",
      [2]: "CLASS",
      [4]: "STYLE",
      [8]: "PROPS",
      [16]: "FULL_PROPS",
      [32]: "HYDRATE_EVENTS",
      [64]: "STABLE_FRAGMENT",
      [128]: "KEYED_FRAGMENT",
      [256]: "UNKEYED_FRAGMENT",
      [512]: "NEED_PATCH",
      [1024]: "DYNAMIC_SLOTS",
      [2048]: "DEV_ROOT_FRAGMENT",
      [-1]: "HOISTED",
      [-2]: "BAIL"
  }, dM = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
  }, co = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dP = bi(co + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"), cj = Object.freeze({}), dQ = Object.freeze([]), bp = Object.assign, cf = Object.prototype.hasOwnProperty, E = (a, b) => cf.call(a, b), k = Array.isArray, A = a => by(a) === "[object Map]", ca = a => typeof a == "string", al = a => typeof a == "symbol", C = a => a !== null && typeof a == "object", dJ = Object.prototype.toString, by = a => dJ.call(a), bz = a => by(a).slice(8, -1), an = a => ca(a) && a !== "NaN" && a[0] !== "-" && "" + parseInt(a, 10) === a, R = b => {
      let a = Object.create(null);
      return c => a[c] || (a[c] = b(c))
  }, b_ = /-(\w)/g, dR = R(a => a.replace(b_, (b, a) => a ? a.toUpperCase() : "")), bY = /\B([A-Z])/g, dS = R(a => a.replace(bY, "-$1").toLowerCase()), bG = R(a => a.charAt(0).toUpperCase() + a.slice(1)), dT = R(a => a ? `on${bG(a)}` : ""), bI = (a, b) => a !== b && (a === a || b === b), aA = new WeakMap, w = [], l = Symbol("iterate"), au = Symbol("Map key iterate");

  function bT(a) {
      return a && a._isEffect === !0
  }

  function bP(a, b = cj) {
      bT(a) && (a = a.raw);
      let c = bS(a, b);
      return b.lazy || c(), c
  }

  function bQ(a) {
      a.active && (bk(a), a.options.onStop && a.options.onStop(), a.active = !1)
  }
  bR = 0;

  function bS(b, c) {
      let a = function () {
          if (!a.active) return b();
          if (!w.includes(a)) {
              bk(a);
              try {
                  return bX(), w.push(a), f = a, b()
              } finally {
                  w.pop(), bE(), f = w[w.length - 1]
              }
          }
      };
      return a.id = bR++, a.allowRecurse = !!c.allowRecurse, a._isEffect = !0, a.active = !0, a.raw = b, a.deps = [], a.options = c, a
  }

  function bk(b) {
      let {
          deps: a
      } = b;
      if (a.length) {
          for (let c = 0; c < a.length; c++) a[c].delete(b);
          a.length = 0
      }
  }
  n = !0, ao = [];

  function bW() {
      ao.push(n), n = !1
  }

  function bX() {
      ao.push(n), n = !0
  }

  function bE() {
      let a = ao.pop();
      n = a === void 0 || a
  }

  function e(c, e, d) {
      if (!n || f === void 0) return;
      let b = aA.get(c);
      b || aA.set(c, b = new Map);
      let a = b.get(d);
      a || b.set(d, a = new Set), a.has(f) || (a.add(f), f.deps.push(a), f.options.onTrack && f.options.onTrack({
          effect: f,
          target: c,
          type: e,
          key: d
      }))
  }

  function i(c, e, d, g, i, j) {
      let a = aA.get(c);
      if (!a) return;
      let h = new Set,
          b = a => {
              a && a.forEach(a => {
                  (a !== f || a.allowRecurse) && h.add(a)
              })
          };
      if (e === "clear") a.forEach(b);
      else if (d === "length" && k(c)) a.forEach((c, a) => {
          (a === "length" || a >= g) && b(c)
      });
      else switch (d !== void 0 && b(a.get(d)), e) {
          case "add":
              k(c) ? an(d) && b(a.get("length")) : (b(a.get(l)), A(c) && b(a.get(au)));
              break;
          case "delete":
              k(c) || (b(a.get(l)), A(c) && b(a.get(au)));
              break;
          case "set":
              A(c) && b(a.get(l));
              break
      }
      let m = a => {
          a.options.onTrigger && a.options.onTrigger({
              effect: a,
              target: c,
              key: d,
              type: e,
              newValue: g,
              oldValue: i,
              oldTarget: j
          }), a.options.scheduler ? a.options.scheduler(a) : a()
      };
      h.forEach(m)
  }
  b$ = bi("__proto__,__v_isRef,__isVue"), bu = new Set(Object.getOwnPropertyNames(Symbol).map(a => Symbol[a]).filter(al)), cb = J(), cc = J(!1, !0), cd = J(!0), ce = J(!0, !0), H = {}, ["includes", "indexOf", "lastIndexOf"].forEach(b => {
      let c = Array.prototype[b];
      H[b] = function (...f) {
          let b = a(this);
          for (let a = 0, c = this.length; a < c; a++) e(b, "get", a + "");
          let d = c.apply(b, f);
          return d === -1 || d === !1 ? c.apply(b, f.map(a)) : d
      }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(a => {
      let b = Array.prototype[a];
      H[a] = function (...a) {
          bW();
          let c = b.apply(this, a);
          return bE(), c
      }
  });

  function J(a = !1, b = !1) {
      return function (f, c, g) {
          if (c === "__v_isReactive") return !a;
          if (c === "__v_isReadonly") return a;
          if (c === "__v_raw" && g === (a ? b ? cT : aS : b ? dH : aQ).get(f)) return f;
          let h = k(f);
          if (!a && h && E(H, c)) return Reflect.get(H, c, g);
          let d = Reflect.get(f, c, g);
          return (al(c) ? bu.has(c) : b$(c)) || (a || e(f, "get", c), b) ? d : Y(d) ? !h || !an(c) ? d.value : d : C(d) ? a ? a_(d) : ae(d) : d
      }
  }
  ch = bn(), ci = bn(!0);

  function bn(b = !1) {
      return function (c, e, d, g) {
          let f = c[e];
          if (!b && (d = a(d), f = a(f), !k(c) && Y(f) && !Y(d))) return f.value = d, !0;
          let h = k(c) && an(e) ? Number(e) < c.length : E(c, e),
              j = Reflect.set(c, e, d, g);
          return c === a(g) && (h ? bI(d, f) && i(c, "set", e, d, f) : i(c, "add", e, d)), j
      }
  }

  function ck(a, b) {
      let d = E(a, b),
          e = a[b],
          c = Reflect.deleteProperty(a, b);
      return c && d && i(a, "delete", b, void 0, e), c
  }

  function cl(b, a) {
      let c = Reflect.has(b, a);
      return (!al(a) || !bu.has(a)) && e(b, "has", a), c
  }

  function cm(a) {
      return e(a, "iterate", k(a) ? "length" : l), Reflect.ownKeys(a)
  }
  bm = {
      get: cb,
      set: ch,
      deleteProperty: ck,
      has: cl,
      ownKeys: cm
  }, bl = {
      get: cd,
      set(a, b) {
          return console.warn(`Set operation on key "${String(b)}" failed: target is readonly.`, a), !0
      },
      deleteProperty(a, b) {
          return console.warn(`Delete operation on key "${String(b)}" failed: target is readonly.`, a), !0
      }
  }, dO = bp({}, bm, {
      get: cc,
      set: ci
  }), dN = bp({}, bl, {
      get: ce
  }), X = a => C(a) ? ae(a) : a, V = a => C(a) ? a_(a) : a, S = a => a, P = a => Reflect.getPrototypeOf(a);

  function Q(b, c, g = !1, j = !1) {
      b = b.__v_raw;
      let d = a(b),
          f = a(c);
      c !== f && !g && e(d, "get", c), !g && e(d, "get", f);
      let {
          has: h
      } = P(d), i = j ? S : g ? V : X;
      if (h.call(d, c)) return i(b.get(c));
      if (h.call(d, f)) return i(b.get(f));
      b !== d && b.get(c)
  }

  function L(b, f = !1) {
      let c = this.__v_raw,
          g = a(c),
          d = a(b);
      return b !== d && !f && e(g, "has", b), !f && e(g, "has", d), b === d ? c.has(b) : c.has(b) || c.has(d)
  }

  function K(b, c = !1) {
      return b = b.__v_raw, !c && e(a(b), "iterate", l), Reflect.get(b, "size", b)
  }

  function ba(b) {
      b = a(b);
      let c = a(this);
      return P(c).has.call(c, b) || (c.add(b), i(c, "add", b, b)), this
  }

  function aZ(b, d) {
      d = a(d);
      let c = a(this),
          {
              has: e,
              get: h
          } = P(c),
          f = e.call(c, b);
      f ? aP(c, e, b) : (b = a(b), f = e.call(c, b));
      let g = h.call(c, b);
      return c.set(b, d), f ? bI(d, g) && i(c, "set", b, d, g) : i(c, "add", b, d), this
  }

  function aY(b) {
      let c = a(this),
          {
              has: d,
              get: f
          } = P(c),
          e = d.call(c, b);
      e ? aP(c, d, b) : (b = a(b), e = d.call(c, b));
      let g = f ? f.call(c, b) : void 0,
          h = c.delete(b);
      return e && i(c, "delete", b, void 0, g), h
  }

  function aV() {
      let b = a(this),
          c = b.size !== 0,
          d = A(b) ? new Map(b) : new Set(b),
          e = b.clear();
      return c && i(b, "clear", void 0, void 0, d), e
  }

  function D(b, c) {
      return function (h, i) {
          let d = this,
              f = d.__v_raw,
              j = a(f),
              g = c ? S : b ? V : X;
          return !b && e(j, "iterate", l), f.forEach((a, b) => h.call(i, g(a), g(b), d))
      }
  }

  function G(b, c, d) {
      return function (...j) {
          let i = this.__v_raw,
              g = a(i),
              h = A(g),
              k = b === "entries" || b === Symbol.iterator && h,
              m = b === "keys" && h,
              n = i[b](...j),
              f = d ? S : c ? V : X;
          return !c && e(g, "iterate", m ? au : l), {
              next() {
                  let {
                      value: a,
                      done: b
                  } = n.next();
                  return b ? {
                      value: a,
                      done: b
                  } : {
                      value: k ? [f(a[0]), f(a[1])] : f(a),
                      done: b
                  }
              },
              [Symbol.iterator]() {
                  return this
              }
          }
      }
  }

  function j(b) {
      return function (...c) {
          {
              let d = c[0] ? `on key "${c[0]}" ` : "";
              console.warn(`${bG(b)} operation ${d}failed: target is readonly.`, a(this))
          }
          return b !== "delete" && this
      }
  }
  aM = {
      get(a) {
          return Q(this, a)
      },
      get size() {
          return K(this)
      },
      has: L,
      add: ba,
      set: aZ,
      delete: aY,
      clear: aV,
      forEach: D(!1, !1)
  }, aI = {
      get(a) {
          return Q(this, a, !1, !0)
      },
      get size() {
          return K(this)
      },
      has: L,
      add: ba,
      set: aZ,
      delete: aY,
      clear: aV,
      forEach: D(!1, !0)
  }, aF = {
      get(a) {
          return Q(this, a, !0)
      },
      get size() {
          return K(this, !0)
      },
      has(a) {
          return L.call(this, a, !0)
      },
      add: j("add"),
      set: j("set"),
      delete: j("delete"),
      clear: j("clear"),
      forEach: D(!0, !1)
  }, aC = {
      get(a) {
          return Q(this, a, !0, !0)
      },
      get size() {
          return K(this, !0)
      },
      has(a) {
          return L.call(this, a, !0)
      },
      add: j("add"),
      set: j("set"),
      delete: j("delete"),
      clear: j("clear"),
      forEach: D(!0, !0)
  }, cJ = ["keys", "values", "entries", Symbol.iterator], cJ.forEach(a => {
      aM[a] = G(a, !1, !1), aF[a] = G(a, !0, !1), aI[a] = G(a, !1, !0), aC[a] = G(a, !0, !0)
  });

  function M(a, c) {
      let b = c ? a ? aC : aI : a ? aF : aM;
      return (d, c, e) => c === "__v_isReactive" ? !a : c === "__v_isReadonly" ? a : c === "__v_raw" ? d : Reflect.get(E(b, c) && c in d ? b : d, c, e)
  }
  cL = {
      get: M(!1, !1)
  }, dK = {
      get: M(!1, !0)
  }, cN = {
      get: M(!0, !1)
  }, dU = {
      get: M(!0, !0)
  };

  function aP(b, e, c) {
      let d = a(c);
      if (d !== c && e.call(b, d)) {
          let a = bz(b);
          console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
      }
  }
  aQ = new WeakMap, dH = new WeakMap, aS = new WeakMap, cT = new WeakMap;

  function cU(a) {
      switch (a) {
          case "Object":
          case "Array":
              return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
              return 2;
          default:
              return 0
      }
  }

  function cV(a) {
      return a.__v_skip || !Object.isExtensible(a) ? 0 : cU(bz(a))
  }

  function ae(a) {
      return a && a.__v_isReadonly ? a : a$(a, !1, bm, cL, aQ)
  }

  function a_(a) {
      return a$(a, !0, bl, cN, aS)
  }

  function a$(a, h, f, g, c) {
      if (!C(a)) return console.warn(`value cannot be made reactive: ${String(a)}`), a;
      if (a.__v_raw && !(h && a.__v_isReactive)) return a;
      let d = c.get(a);
      if (d) return d;
      let e = cV(a);
      if (e === 0) return a;
      let b = new Proxy(a, e === 2 ? g : f);
      return c.set(a, b), b
  }

  function a(b) {
      return b && a(b.__v_raw) || b
  }

  function Y(a) {
      return Boolean(a && a.__v_isRef === !0)
  }
  h("nextTick", () => av), h("dispatch", a => z.bind(z, a)), h("watch", a => (e, f) => {
      let g = d(a, e),
          c = !0,
          b;
      q(() => g(a => {
          let d = document.createElement("div");
          d.dataset.throwAway = a, c ? b = a : queueMicrotask(() => {
              f(a, b), b = a
          }), c = !1
      }))
  }), h("store", cz), h("root", a => t(a)), h("refs", a => t(a)._x_refs || {}), h("el", a => a);

  function W(b, a) {
      return Array.isArray(a) ? bg(b, a.join(" ")) : typeof a == "object" && a !== null ? db(b, a) : typeof a == "function" ? W(b, a()) : bg(b, a)
  }

  function bg(b, a) {
      let e = a => a.split(" ").filter(Boolean),
          c = a => a.split(" ").filter(a => !b.classList.contains(a)).filter(Boolean),
          d = a => (b.classList.add(...a), () => {
              b.classList.remove(...a)
          });
      return a = a === !0 ? a = "" : a || "", d(c(a))
  }

  function db(a, b) {
      let c = a => a.split(" ").filter(Boolean),
          f = Object.entries(b).flatMap(([a, b]) => !!b && c(a)).filter(Boolean),
          g = Object.entries(b).flatMap(([a, b]) => !b && c(a)).filter(Boolean),
          d = [],
          e = [];
      return g.forEach(b => {
          a.classList.contains(b) && (a.classList.remove(b), e.push(b))
      }), f.forEach(b => {
          a.classList.contains(b) || (a.classList.add(b), d.push(b))
      }), () => {
          e.forEach(b => a.classList.add(b)), d.forEach(b => a.classList.remove(b))
      }
  }

  function U(b, a) {
      return typeof a == "object" && a !== null ? dd(b, a) : de(b, a)
  }

  function dd(a, c) {
      let b = {};
      return Object.entries(c).forEach(([c, d]) => {
          b[c] = a.style[c], a.style.setProperty(df(c), d)
      }), setTimeout(() => {
          a.style.length === 0 && a.removeAttribute("style")
      }), () => {
          U(a, b)
      }
  }

  function de(a, b) {
      let c = a.getAttribute("style", b);
      return a.setAttribute("style", b), () => {
          a.setAttribute("style", c)
      }
  }

  function df(a) {
      return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  }

  function aa(b, c = () => {}) {
      let a = !1;
      return function () {
          a ? c.apply(this, arguments) : (a = !0, b.apply(this, arguments))
      }
  }
  c("transition", (b, {
      value: c,
      modifiers: d,
      expression: a
  }, {
      evaluate: e
  }) => {
      typeof a == "function" && (a = e(a)), a ? dh(b, a, c) : di(b, d, c)
  });

  function dh(a, b, c) {
      br(a, W, ""), {
          enter: b => {
              a._x_transition.enter.during = b
          },
          "enter-start": b => {
              a._x_transition.enter.start = b
          },
          "enter-end": b => {
              a._x_transition.enter.end = b
          },
          leave: b => {
              a._x_transition.leave.during = b
          },
          "leave-start": b => {
              a._x_transition.leave.start = b
          },
          "leave-end": b => {
              a._x_transition.leave.end = b
          }
      } [c](b)
  }

  function di(b, a, d) {
      br(b, U);
      let c = !a.includes("in") && !a.includes("out") && !d,
          n = c || a.includes("in") || ["enter"].includes(d),
          m = c || a.includes("out") || ["leave"].includes(d);
      a.includes("in") && !c && (a = a.filter((c, b) => b < a.indexOf("out"))), a.includes("out") && !c && (a = a.filter((c, b) => b > a.indexOf("out")));
      let h = !a.includes("opacity") && !a.includes("scale"),
          l = h || a.includes("opacity"),
          q = h || a.includes("scale"),
          j = l ? 0 : 1,
          e = q ? v(a, "scale", 95) / 100 : 1,
          i = v(a, "delay", 0),
          g = v(a, "origin", "center"),
          f = "opacity, transform",
          o = v(a, "duration", 150) / 1e3,
          p = v(a, "duration", 75) / 1e3,
          k = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      n && (b._x_transition.enter.during = {
          transformOrigin: g,
          transitionDelay: i,
          transitionProperty: f,
          transitionDuration: `${o}s`,
          transitionTimingFunction: k
      }, b._x_transition.enter.start = {
          opacity: j,
          transform: `scale(${e})`
      }, b._x_transition.enter.end = {
          opacity: 1,
          transform: "scale(1)"
      }), m && (b._x_transition.leave.during = {
          transformOrigin: g,
          transitionDelay: i,
          transitionProperty: f,
          transitionDuration: `${p}s`,
          transitionTimingFunction: k
      }, b._x_transition.leave.start = {
          opacity: 1,
          transform: "scale(1)"
      }, b._x_transition.leave.end = {
          opacity: j,
          transform: `scale(${e})`
      })
  }

  function br(b, c, a = {}) {
      b._x_transition || (b._x_transition = {
          enter: {
              during: a,
              start: a,
              end: a
          },
          leave: {
              during: a,
              start: a,
              end: a
          },
          in (a = () => {}, d = () => {}) {
              bw(b, c, {
                  during: this.enter.during,
                  start: this.enter.start,
                  end: this.enter.end,
                  entering: !0
              }, a, d)
          },
          out(a = () => {}, d = () => {}) {
              bw(b, c, {
                  during: this.leave.during,
                  start: this.leave.start,
                  end: this.leave.end,
                  entering: !1
              }, a, d)
          }
      })
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (a, d, b, c) {
      let e = () => requestAnimationFrame(b);
      if (d) {
          a._x_transition ? a._x_transition.in(b) : e();
          return
      }
      a._x_hidePromise = a._x_transition ? new Promise((b, d) => {
          a._x_transition.out(() => {}, () => b(c)), a._x_transitioning.beforeCancel(() => d({
              isFromCancelledTransition: !0
          }))
      }) : Promise.resolve(c), queueMicrotask(() => {
          let b = bs(a);
          b ? (b._x_hideChildren || (b._x_hideChildren = []), b._x_hideChildren.push(a)) : queueMicrotask(() => {
              let b = a => {
                  let c = Promise.all([a._x_hidePromise, ...(a._x_hideChildren || []).map(b)]).then(([a]) => a());
                  return delete a._x_hidePromise, delete a._x_hideChildren, c
              };
              b(a).catch(a => {
                  if (!a.isFromCancelledTransition) throw a
              })
          })
      })
  };

  function bs(b) {
      let a = b.parentNode;
      if (!!a) return a._x_hidePromise ? a : bs(a)
  }

  function bw(a, b, {
      during: c,
      start: d,
      end: e,
      entering: k
  } = {}, f = () => {}, g = () => {}) {
      if (a._x_transitioning && a._x_transitioning.cancel(), Object.keys(c).length === 0 && Object.keys(d).length === 0 && Object.keys(e).length === 0) {
          f(), g();
          return
      }
      let h, i, j;
      dm(a, {
          start() {
              h = b(a, d)
          },
          during() {
              i = b(a, c)
          },
          before: f,
          end() {
              h(), j = b(a, e)
          },
          after: g,
          cleanup() {
              i(), j()
          }
      }, k)
  }

  function dm(c, a, h) {
      let d, e, f, g = aa(() => {
          b(() => {
              d = !0, e || a.before(), f || (a.end(), ar()), a.after(), c.isConnected && a.cleanup(), delete c._x_transitioning
          })
      });
      c._x_transitioning = {
          beforeCancels: [],
          beforeCancel(a) {
              this.beforeCancels.push(a)
          },
          cancel: aa(function () {
              for (; this.beforeCancels.length;) this.beforeCancels.shift()();
              g()
          }),
          finish: g,
          entering: h
      }, b(() => {
          a.start(), a.during()
      }), cH(), requestAnimationFrame(() => {
          if (d) return;
          let g = Number(getComputedStyle(c).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
              h = Number(getComputedStyle(c).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
          g === 0 && (g = Number(getComputedStyle(c).animationDuration.replace("s", "")) * 1e3), b(() => {
              a.before()
          }), e = !0, requestAnimationFrame(() => {
              d || (b(() => {
                  a.end()
              }), ar(), setTimeout(c._x_transitioning.finish, g + h), f = !0)
          })
      })
  }

  function v(a, b, d) {
      if (a.indexOf(b) === -1) return d;
      let c = a[a.indexOf(b) + 1];
      if (!c || b === "scale" && isNaN(c)) return d;
      if (b === "duration") {
          let a = c.match(/([0-9]+)ms/);
          if (a) return a[1]
      }
      return b === "origin" && ["top", "right", "left", "center", "bottom"].includes(a[a.indexOf(b) + 2]) ? [c, a[a.indexOf(b) + 2]].join(" ") : c
  }
  bx = () => {}, bx.inline = (a, {
      modifiers: b
  }, {
      cleanup: c
  }) => {
      b.includes("self") ? a._x_ignoreSelf = !0 : a._x_ignore = !0, c(() => {
          b.includes("self") ? delete a._x_ignoreSelf : delete a._x_ignore
      })
  }, c("ignore", bx), c("effect", (a, {
      expression: b
  }, {
      effect: c
  }) => c(d(a, b)));

  function bA(a, b, c, d = []) {
      switch (a._x_bindings || (a._x_bindings = r({})), a._x_bindings[b] = c, b = d.includes("camel") ? dx(b) : b, b) {
          case "value":
              dr(a, c);
              break;
          case "style":
              dt(a, c);
              break;
          case "class":
              ds(a, c);
              break;
          default:
              du(a, b, c);
              break
      }
  }

  function dr(a, b) {
      if (a.type === "radio") a.attributes.value === void 0 && (a.value = b), window.fromModel && (a.checked = bD(a.value, b));
      else if (a.type === "checkbox") Number.isInteger(b) ? a.value = b : !Number.isInteger(b) && !Array.isArray(b) && typeof b != "boolean" && ![null, void 0].includes(b) ? a.value = String(b) : Array.isArray(b) ? a.checked = b.some(b => bD(b, a.value)) : a.checked = !!b;
      else if (a.tagName === "SELECT") dw(a, b);
      else {
          if (a.value === b) return;
          a.value = b
      }
  }

  function ds(a, b) {
      a._x_undoAddedClasses && a._x_undoAddedClasses(), a._x_undoAddedClasses = W(a, b)
  }

  function dt(a, b) {
      a._x_undoAddedStyles && a._x_undoAddedStyles(), a._x_undoAddedStyles = U(a, b)
  }

  function du(c, a, b) {
      [null, void 0, !1].includes(b) && dA(a) ? c.removeAttribute(a) : (dz(a) && (b = a), dv(c, a, b))
  }

  function dv(a, b, c) {
      a.getAttribute(b) != c && a.setAttribute(b, c)
  }

  function dw(a, b) {
      let c = [].concat(b).map(a => a + "");
      Array.from(a.options).forEach(a => {
          a.selected = c.includes(a.value)
      })
  }

  function dx(a) {
      return a.toLowerCase().replace(/-(\w)/g, (b, a) => a.toUpperCase())
  }

  function bD(a, b) {
      return a == b
  }

  function dz(a) {
      return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(a)
  }

  function dA(a) {
      return !["aria-pressed", "aria-checked"].includes(a)
  }

  function bH(f, c, b, h) {
      let d = f,
          a = a => h(a),
          g = {},
          e = (a, b) => c => b(a, c);
      if (b.includes("dot") && (c = dC(c)), b.includes("camel") && (c = dD(c)), b.includes("passive") && (g.passive = !0), b.includes("window") && (d = window), b.includes("document") && (d = document), b.includes("prevent") && (a = e(a, (b, a) => {
              a.preventDefault(), b(a)
          })), b.includes("stop") && (a = e(a, (b, a) => {
              a.stopPropagation(), b(a)
          })), b.includes("self") && (a = e(a, (b, a) => {
              a.target === f && b(a)
          })), (b.includes("away") || b.includes("outside")) && (d = document, a = e(a, (b, a) => {
              f.contains(a.target) || f.offsetWidth < 1 && f.offsetHeight < 1 || b(a)
          })), a = e(a, (d, a) => {
              dG(c) && cR(a, b) || d(a)
          }), b.includes("debounce")) {
          let c = b[b.indexOf("debounce") + 1] || "invalid-wait",
              d = ap(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
          a = aT(a, d)
      }
      if (b.includes("throttle")) {
          let c = b[b.indexOf("throttle") + 1] || "invalid-wait",
              d = ap(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
          a = aU(a, d)
      }
      return b.includes("once") && (a = e(a, (b, e) => {
          b(e), d.removeEventListener(c, a, g)
      })), d.addEventListener(c, a, g), () => {
          d.removeEventListener(c, a, g)
      }
  }

  function dC(a) {
      return a.replace(/-/g, ".")
  }

  function dD(a) {
      return a.toLowerCase().replace(/-(\w)/g, (b, a) => a.toUpperCase())
  }

  function ap(a) {
      return !Array.isArray(a) && !isNaN(a)
  }

  function dF(a) {
      return a.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
  }

  function dG(a) {
      return ["keydown", "keyup"].includes(a)
  }

  function cR(c, d) {
      let a = d.filter(a => !["window", "document", "prevent", "stop", "once"].includes(a));
      if (a.includes("debounce")) {
          let b = a.indexOf("debounce");
          a.splice(b, ap((a[b + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
      }
      if (a.length === 0 || a.length === 1 && bK(c.key).includes(a[0])) return !1;
      let b = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(b => a.includes(b));
      return a = a.filter(a => !b.includes(a)), !(b.length > 0 && b.filter(a => ((a === "cmd" || a === "super") && (a = "meta"), c[`${a}Key`])).length === b.length && bK(c.key).includes(a[0]))
  }

  function bK(a) {
      if (!a) return [];
      a = dF(a);
      let b = {
          ctrl: "control",
          slash: "/",
          space: "-",
          spacebar: "-",
          cmd: "meta",
          esc: "escape",
          up: "arrow-up",
          down: "arrow-down",
          left: "arrow-left",
          right: "arrow-right",
          period: ".",
          equal: "="
      };
      return b[a] = a, Object.keys(b).map(c => {
          if (b[c] === a) return c
      }).filter(a => a)
  }
  c("model", (a, {
      modifiers: e,
      expression: c
  }, {
      effect: f,
      cleanup: g
  }) => {
      let h = d(a, c),
          i = `${c} = rightSideOfExpression($event, ${c})`,
          j = d(a, i);
      var k = a.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(a.type) || e.includes("lazy") ? "change" : "input";
      let l = cO(a, e, c),
          m = bH(a, k, e, a => {
              j(() => {}, {
                  scope: {
                      $event: a,
                      rightSideOfExpression: l
                  }
              })
          });
      g(() => m()), a._x_forceModelUpdate = () => {
          h(d => {
              d === void 0 && c.match(/\./) && (d = ""), window.fromModel = !0, b(() => bA(a, "value", d)), delete window.fromModel
          })
      }, f(() => {
          e.includes("unintrusive") && document.activeElement.isSameNode(a) || a._x_forceModelUpdate()
      })
  });

  function cO(a, c, d) {
      return a.type === "radio" && b(() => {
          a.hasAttribute("name") || a.setAttribute("name", d)
      }), (d, e) => b(() => {
          if (d instanceof CustomEvent && d.detail !== void 0) return d.detail || d.target.value;
          if (a.type === "checkbox")
              if (Array.isArray(e)) {
                  let a = c.includes("number") ? aw(d.target.value) : d.target.value;
                  return d.target.checked ? e.concat([a]) : e.filter(b => !cs(b, a))
              } else return d.target.checked;
          else {
              if (a.tagName.toLowerCase() === "select" && a.multiple) return c.includes("number") ? Array.from(d.target.selectedOptions).map(a => {
                  let b = a.value || a.text;
                  return aw(b)
              }) : Array.from(d.target.selectedOptions).map(a => a.value || a.text); {
                  let a = d.target.value;
                  return c.includes("number") ? aw(a) : c.includes("trim") ? a.trim() : a
              }
          }
      })
  }

  function aw(a) {
      let b = a ? parseFloat(a) : null;
      return cr(b) ? b : a
  }

  function cs(a, b) {
      return a == b
  }

  function cr(a) {
      return !Array.isArray(a) && !isNaN(a)
  }
  c("cloak", a => queueMicrotask(() => b(() => a.removeAttribute(y("cloak"))))), cE(() => `[${y("init")}]`), c("init", $((b, {
      expression: a
  }) => typeof a == "string" ? !!a.trim() && g(b, a, {}, !1) : g(b, a, {}, !1))), c("text", (a, {
      expression: c
  }, {
      effect: d,
      evaluateLater: e
  }) => {
      let f = e(c);
      d(() => {
          f(c => {
              b(() => {
                  a.textContent = c
              })
          })
      })
  }), c("html", (a, {
      expression: b
  }, {
      effect: c,
      evaluateLater: d
  }) => {
      let e = d(b);
      c(() => {
          e(b => {
              a.innerHTML = b
          })
      })
  }), at(aO(":", aJ(y("bind:")))), c("bind", (a, {
      value: e,
      modifiers: g,
      expression: c,
      original: h
  }, {
      effect: f
  }) => {
      if (!e) return cq(a, c, h, f);
      if (e === "key") return cp(a, c);
      let i = d(a, c);
      f(() => i(d => {
          d === void 0 && c.match(/\./) && (d = ""), b(() => bA(a, e, d, g))
      }))
  });

  function cq(b, c, e, f) {
      let g = d(b, c),
          a = [];
      f(() => {
          for (; a.length;) a.pop()();
          g(d => {
              let c = Object.entries(d).map(([a, b]) => ({
                  name: a,
                  value: b
              }));
              cS(c).forEach(({
                  name: a,
                  value: b
              }, d) => {
                  c[d] = {
                      name: `x-bind:${a}`,
                      value: `"${b}"`
                  }
              }), ah(b, c, e).map(b => {
                  a.push(b.runCleanups), b()
              })
          })
      })
  }

  function cp(a, b) {
      a._x_keyExpression = b
  }
  aN(() => `[${y("data")}]`), c("data", $((a, {
      expression: c
  }, {
      cleanup: h
  }) => {
      c = c === "" ? "{}" : c;
      let d = {};
      T(d, a);
      let e = {};
      cu(e, d);
      let f = g(a, c, {
          scope: e
      });
      T(f, a);
      let b = r(f);
      dc(b);
      let i = _(a, b);
      b.init && g(a, b.init), h(() => {
          i(), b.destroy && g(a, b.destroy)
      })
  })), c("show", (a, {
      modifiers: j,
      expression: i
  }, {
      effect: l
  }) => {
      let m = d(a, i),
          c = () => b(() => {
              a.style.display = "none", a._x_isShown = !1
          }),
          e = () => b(() => {
              a.style.length === 1 && a.style.display === "none" ? a.removeAttribute("style") : a.style.removeProperty("display"), a._x_isShown = !0
          }),
          f = () => setTimeout(e),
          k = aa(a => a ? e() : c(), b => {
              typeof a._x_toggleAndCascadeWithTransitions == "function" ? a._x_toggleAndCascadeWithTransitions(a, b, e, c) : b ? f() : c()
          }),
          g, h = !0;
      l(() => m(a => {
          !h && a === g || (j.includes("immediate") && (a ? f() : c()), k(a), g = a, h = !1)
      }))
  }), c("for", (a, {
      expression: c
  }, {
      effect: e,
      cleanup: f
  }) => {
      let b = cg(c),
          g = d(a, b.items),
          h = d(a, a._x_keyExpression || "index");
      a._x_prevKeys = [], a._x_lookup = {}, e(() => cn(a, b, g, h)), f(() => {
          Object.values(a._x_lookup).forEach(a => a.remove()), delete a._x_prevKeys, delete a._x_lookup
      })
  });

  function cn(c, d, f, e) {
      let g = a => typeof a == "object" && !Array.isArray(a),
          a = c;
      f(f => {
          bV(f) && f >= 0 && (f = Array.from(Array(f).keys(), a => a + 1)), f === void 0 && (f = []);
          let j = c._x_lookup,
              h = c._x_prevKeys,
              k = [],
              i = [];
          if (g(f)) f = Object.entries(f).map(([a, c]) => {
              let b = bL(d, c, a, f);
              e(a => i.push(a), {
                  scope: {
                      index: a,
                      ...b
                  }
              }), k.push(b)
          });
          else
              for (let a = 0; a < f.length; a++) {
                  let b = bL(d, f[a], a, f);
                  e(a => i.push(a), {
                      scope: {
                          index: a,
                          ...b
                      }
                  }), k.push(b)
              }
          let n = [],
              o = [],
              l = [],
              m = [];
          for (let a = 0; a < h.length; a++) {
              let b = h[a];
              i.indexOf(b) === -1 && l.push(b)
          }
          h = h.filter(a => !l.includes(a));
          let p = "template";
          for (let a = 0; a < i.length; a++) {
              let b = i[a],
                  c = h.indexOf(b);
              if (c === -1) h.splice(a, 0, b), n.push([p, a]);
              else if (c !== a) {
                  let b = h.splice(a, 1)[0],
                      d = h.splice(c - 1, 1)[0];
                  h.splice(a, 0, d), h.splice(c, 0, b), o.push([b, d])
              } else m.push(b);
              p = b
          }
          for (let a = 0; a < l.length; a++) {
              let b = l[a];
              j[b].remove(), j[b] = null, delete j[b]
          }
          for (let a = 0; a < o.length; a++) {
              let [g, e] = o[a], f = j[g], c = j[e], d = document.createElement("div");
              b(() => {
                  c.after(d), f.after(c), d.before(f), d.remove()
              }), bo(c, k[i.indexOf(e)])
          }
          for (let d = 0; d < n.length; d++) {
              let [e, f] = n[d], h = e === "template" ? a : j[e], l = k[f], g = i[f], c = document.importNode(a.content, !0).firstElementChild;
              _(c, r(l), a), b(() => {
                  h.after(c), s(c)
              }), typeof g == "object" && aH("x-for key cannot be an object, it must be a string or an integer", a), j[g] = c
          }
          for (let a = 0; a < m.length; a++) bo(j[m[a]], k[i.indexOf(m[a])]);
          a._x_prevKeys = i
      })
  }

  function cg(h) {
      let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          f = /^\s*\(|\)\s*$/g,
          g = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
          d = h.match(g);
      if (!d) return;
      let a = {};
      a.items = d[2].trim();
      let c = d[1].replace(f, "").trim(),
          b = c.match(e);
      return b ? (a.item = c.replace(e, "").trim(), a.index = b[1].trim(), b[2] && (a.collection = b[2].trim())) : a.item = c, a
  }

  function bL(a, b, d, e) {
      let c = {};
      return /^\[.*\]$/.test(a.item) && Array.isArray(b) ? a.item.replace("[", "").replace("]", "").split(",").map(a => a.trim()).forEach((a, d) => {
          c[a] = b[d]
      }) : /^\{.*\}$/.test(a.item) && !Array.isArray(b) && typeof b == "object" ? a.item.replace("{", "").replace("}", "").split(",").map(a => a.trim()).forEach(a => {
          c[a] = b[a]
      }) : c[a.item] = b, a.index && (c[a.index] = d), a.collection && (c[a.collection] = e), c
  }

  function bV(a) {
      return !Array.isArray(a) && !isNaN(a)
  }

  function bM() {}
  bM.inline = (b, {
      expression: c
  }, {
      cleanup: d
  }) => {
      let a = t(b);
      a._x_refs || (a._x_refs = {}), a._x_refs[c] = b, d(() => delete a._x_refs[c])
  }, c("ref", bM), c("if", (a, {
      expression: c
  }, {
      effect: e,
      cleanup: f
  }) => {
      let g = d(a, c),
          h = () => {
              if (a._x_currentIfEl) return a._x_currentIfEl;
              let c = a.content.cloneNode(!0).firstElementChild;
              return _(c, {}, a), b(() => {
                  a.after(c), s(c)
              }), a._x_currentIfEl = c, a._x_undoIf = () => {
                  c.remove(), delete a._x_currentIfEl
              }, c
          },
          i = () => {
              !a._x_undoIf || (a._x_undoIf(), delete a._x_undoIf)
          };
      e(() => g(a => {
          a ? h() : i()
      })), f(() => a._x_undoIf && a._x_undoIf())
  }), at(aO("@", aJ(y("on:")))), c("on", $((a, {
      value: c,
      modifiers: e,
      expression: b
  }, {
      cleanup: f
  }) => {
      let g = b ? d(a, b) : () => {},
          h = bH(a, c, e, a => {
              g(() => {}, {
                  scope: {
                      $event: a
                  },
                  params: [a]
              })
          });
      f(() => h())
  })), p.setEvaluator(bb), p.setReactivityEngine({
      reactive: ae,
      effect: bP,
      release: bQ,
      raw: a
  }), bO = p, window.Alpine = bO, queueMicrotask(() => {
      bO.start()
  })
})(), document.addEventListener('alpine:init', () => {
  Alpine.data('pages', () => ({
      related: [],
      products: [],
      adFirst: {},
      adSecond: {},
      adThird: {},
      adFourth: {},
      adFifth: {},
      nama: 'vitoko',
      init() {
          const getProducts = async () => {
              const response = await fetch('https://vitoko.netlify.app/ads/index.json')
              if (! response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
              data = await response.json();
              this.products = data.items;
              this.adFirst = data.items[0];
              this.adSecond = data.items[1];
              this.adThird = data.items[2];
              this.adFourth = data.items[3];
              this.adFifth = data.items[4];
          };
          const wrapper_0 = document.querySelector("#related-item-0");
          const wrapper_1 = document.querySelector(".related-item-2");
          const wrapper_2 = document.querySelector(".related-item-4");
          const feed_1 = document.querySelectorAll(".feed-item-4");
          const feed_2 = document.querySelectorAll(".feed-item-8");
          const feed_3 = document.querySelectorAll(".feed-item-12");
          const feed_4 = document.querySelectorAll(".feed-item-16");
          const feed_5 = document.querySelectorAll(".feed-item-20");
          const feed_6 = document.querySelectorAll(".feed-item-24");
          const feed_7 = document.querySelectorAll(".feed-item-28");
          const feed_8 = document.querySelectorAll(".feed-item-32");
          const feed_9 = document.querySelectorAll(".feed-item-36");
          const feed_10 = document.querySelectorAll(".feed-item-40");
          let i;

          if (feed_1) {
              for (i = 0; i < feed_1.length; i++) {
                  this.adFirst(feed_1[i]);
              }
          }
          if (feed_2) {
              for (i = 0; i < feed_2.length; i++) {
                  this.adSecond(feed_2[i]);
              }
          }
          if (feed_3) {
              for (i = 0; i < feed_3.length; i++) {
                  this.adThird(feed_3[i]);
              }
          }
          if (feed_4) {
              for (i = 0; i < feed_4.length; i++) {
                  this.adFourth(feed_4[i]);
              }
          }
          if (feed_5) {
              for (i = 0; i < feed_5.length; i++) {
                  this.adFifth(feed_5[i]);
              }
          }
          if (feed_6) {
              for (i = 0; i < feed_6.length; i++) {
                  this.adFirst(feed_6[i]);
              }
          }
          if (feed_7) {
              for (i = 0; i < feed_7.length; i++) {
                  this.adSecond(feed_7[i]);
              }
          }
          if (feed_8) {
              for (i = 0; i < feed_8.length; i++) {
                  this.adThird(feed_8[i]);
              }
          }
          if (feed_9) {
              for (i = 0; i < feed_9.length; i++) {
                  this.adFourth(feed_9[i]);
              }
          }
          if (feed_10) {
              for (i = 0; i < feed_10.length; i++) {
                  this.adFifth(feed_10[i]);
              }
          }
          if (wrapper_0) {
          this.adFirst(wrapper_0);
          }
          if (wrapper_1) {
          this.adSecond(wrapper_1);
          }
          if (wrapper_2) {
          this.adThird(wrapper_2);
          this.adFourth(wrapper_2);
          }
         
          return getProducts;
      },
      relatedAd() {
          let wrapper = this.$refs.related;

          wrapper.insertAdjacentHTML('beforeend', `
          <template x-for="(product, index) in products" :key="product.title">
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="product.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="product.image">
                      </div>
                  </a>
              </div>
              <template x-if="product.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="product.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="product.title"></h3>
                  </a>
                  <template x-if="product.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="product.price"></span>
                  </p>
                  </template>
              </div>
              </template>
          </div>
          </template>
          `);
      
          return wrapper;
      },
      adFirst(wrapper) {            
          wrapper.insertAdjacentHTML('afterend', `
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="adFirst.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <template x-if="adFirst.image">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="adFirst.image">
                          </template>
                      </div>
                  </a>
              </div>
              <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-end pr-1">
                  <span class="text-xs leading-5 text-body-text bg-body opacity-60 rounded-sm px-1">Ad by Vitoko</span>
              </div>
              <template x-if="adFirst.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="adFirst.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="adFirst.title"></h3>
                  </a>
                  <template x-if="adFirst.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="adFirst.price"></span>
                  </p>
                  </template>
                  <p class="mb-2">
                      <span class="text-xs text-body bg-body-text opacity-60 rounded-sm px-1">Iklan</span>
                      <span class="text-xs text-body-text-secondary pl-1">https://hijacket.site</span>
                  </p>
              </div>
              </template>
          </div>
          `);
          
          return wrapper;
      },
      adSecond(wrapper) {
          wrapper.insertAdjacentHTML('afterend', `
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="adSecond.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="adSecond.image">
                      </div>
                  </a>
              </div>
              <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-end pr-1">
                  <span class="text-xs leading-5 text-body-text bg-body opacity-60 rounded-sm px-1">Ad by Vitoko</span>
              </div>
              <template x-if="adSecond.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="adSecond.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="adSecond.title"></h3>
                  </a>
                  <template x-if="adSecond.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="adSecond.price"></span>
                  </p>
                  </template>
                  <p class="mb-2">
                      <span class="text-xs text-body bg-body-text opacity-60 rounded-sm px-1">Iklan</span>
                      <span class="text-xs text-body-text-secondary pl-1">https://hijacket.site</span>
                  </p>
              </div>
              </template>
          </div>
          `);
          
          return wrapper;
      },
      adThird(wrapper) {
          wrapper.insertAdjacentHTML('beforebegin', `
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="adThird.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="adThird.image">
                      </div>
                  </a>
              </div>
              <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-end pr-1">
                  <span class="text-xs leading-5 text-body-text bg-body opacity-60 rounded-sm px-1">Ad by Vitoko</span>
              </div>
              <template x-if="adThird.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="adThird.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="adThird.title"></h3>
                  </a>
                  <template x-if="adThird.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="adThird.price"></span>
                  </p>
                  </template>
                  <p class="mb-2">
                      <span class="text-xs text-body bg-body-text opacity-60 rounded-sm px-1">Iklan</span>
                      <span class="text-xs text-body-text-secondary pl-1">https://hijacket.site</span>
                  </p>
              </div>
              </template>
          </div>
          `);
          
          return wrapper;
      },
      adFourth(wrapper) {
          wrapper.insertAdjacentHTML('afterend', `
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="adFourth.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="adFourth.image">
                      </div>
                  </a>
              </div>
              <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-end pr-1">
                  <span class="text-xs leading-5 text-body-text bg-body opacity-60 rounded-sm px-1">Ad by Vitoko</span>
              </div>
              <template x-if="adFourth.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="adFourth.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="adFourth.title"></h3>
                  </a>
                  <template x-if="adFourth.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="adFourth.price"></span>
                  </p>
                  </template>
                  <p class="mb-2">
                      <span class="text-xs text-body bg-body-text opacity-60 rounded-sm px-1">Iklan</span>
                      <span class="text-xs text-body-text-secondary pl-1">https://hijacket.site</span>
                  </p>
              </div>
              </template>
          </div>
          `);
          
          return wrapper;
      },
      adFifth(wrapper) {
          wrapper.insertAdjacentHTML('afterend', `
          <div class="ads-item relative col-span-6 md:col-span-3 lg:col-span-2 transition duration-500 ease-ease hover:shadow-lg">
              <div class="ads-item__image relative bg-body-primary">
                  <a class="ads-item__link" x-bind:href="adFifth.url">
                      <div class="responsive aspect-w-2 aspect-h-3">
                          <img class="absolute w-full h-full left-0 top-0 object-cover blur-up lazyloaded" x-bind:src="adFifth.image">
                      </div>
                  </a>
              </div>
              <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-end pr-1">
                  <span class="text-xs leading-5 text-body-text bg-body opacity-60 rounded-sm px-1">Ad by Vitoko</span>
              </div>
              <template x-if="adFifth.title">
              <div class="ads-item__info py-3 px-2">
                  <a class="ads-item__link" x-bind:href="adFifth.url">
                      <h3 class="ads-item__title text-sm lg:text-base text-heading font-heading font-medium mb-1" x-text="adFifth.title"></h3>
                  </a>
                  <template x-if="adFifth.price">
                  <p class="ads-item__price mb-3">
                      <span class="text-heading-primary text-xs lg:text-sm font-medium" x-text="adFifth.price"></span>
                  </p>
                  </template>
                  <p class="mb-2">
                      <span class="text-xs text-body bg-body-text opacity-60 rounded-sm px-1">Iklan</span>
                      <span class="text-xs text-body-text-secondary pl-1">https://hijacket.site</span>
                  </p>
              </div>
              </template>
          </div>
          `);
          
          return wrapper;
      },
  }))
}), document.addEventListener('alpine:init', () => {
  Alpine.data('rivebit', () => ({
      open: !1,
      searchApi: {},
      toggle() {
          this.open = !this.open
      },
      atTop: !0,
      showSearch: !1,
      sideNav: !1,
      display_drop_menu() {
          const a = event.target.parentElement.getElementsByClassName("nav__submenu-wrapper")[0],
              b = document.getElementsByClassName("nav__submenu-wrapper");
          Array.from(b).forEach(function (b) {
              b != a && b.classList.remove("active")
          });
          const c = document.getElementById("menu").getElementsByTagName("li");
          Array.from(c).forEach(function (a) {
              a.classList.remove("submenu-opened"), a.style.marginBottom = 0
          }), a && (!a.classList.contains("active") ? a.classList.add("active") : a.classList.remove("active"), a.classList.contains("active") && (event.target.parentElement.classList.add("submenu-opened"), event.target.parentElement.style.marginBottom = a.clientHeight + "px"))
      },
      query: '',
      searchResults: [],
      searchById: null,
      search() {
          const posts = this.searchApi;
          let miniSearch = new MiniSearch({
              fields: ['title'],
              storeFields: ['title', 'image', 'price', 'url'],
          });
          miniSearch.addAll(posts), this.searchById = posts.id;
          let results = miniSearch.search(this.query);
          return this.searchResults = results;
      }
  }))
});
function slider() {
  return {
      splide() {
          const a = new Splide(this.$refs.splidejs, {
              type: 'fade',
              rewind: !0,
              lazyLoad: 'nearby',
              autoplay: !0,
              classes: {
                  arrows: 'splide__arrows',
                  arrow: 'splide__arrow text-body-text hover:text-body-text-secondary bg-body hover:bg-body-primary transition ease-out duration-300 shadow-md box-content lg:py-1 lg:px-1',
                  prev: 'splide__arrow--prev transform opacity-0 -translate-x-20 group-hover:translate-x-0 group-hover:opacity-80',
                  next: 'splide__arrow--next transform opacity-0 translate-x-20 group-hover:translate-x-0 group-hover:opacity-80',
                  pagination: 'splide__pagination',
                  page: 'splide__pagination__page bg-body transition-all duration-400 ease-in-out shadow-md my-1 mx-1'
              }
          }).mount();
          if (this.$refs.splidejs) return a
      }
  }
}
document.addEventListener('alpine:init', () => {
  const a = Storage(),
      {
          carts: b
      } = a.get();
  Alpine.store('shop', {
      items: {},
      user: {},
      activeVariant: 0,
      count: 1,
      carts: b,
      inCarts() {
          const a = this.items.variants[this.activeVariant].id;
          let b = this.carts.find(b => b.sku == a);
          return !!b
      },
      listCarts() {
          return this.carts
      },
      addItem() {
          const a = this.items.variants[this.activeVariant].id,
              b = this.carts.some(b => b.sku === a);
          if (b) {
              for (let b of this.carts) b.sku == a && b.qty++
          } else this.carts.push({
              sku: this.items.variants[this.activeVariant].id,
              name: this.items.title,
              image: this.items.image,
              thumbnail: this.items.thumbnail,
              size: this.items.variants[this.activeVariant].size,
              price: this.items.variants[this.activeVariant].price,
              weight: this.items.variants[this.activeVariant].weight,
              qty: this.count
          })
      },
      deleteItem(a) {
          this.carts = this.carts.filter(b => a !== b.sku)
      },
      clearCarts() {
          this.carts = []
      },
      totalItem() {
          let a = 0;
          for (let b of this.carts) a += b.qty;
          return a
      },
      totalWeight() {
          let a = 0;
          for (let b of this.carts) a += b.weight * b.qty;
          return a
      },
      getWeight(a) {
          const b = a > 1e3 ? Math.round((a + 399 / 2) / 1e3) : 1;
          return Math.ceil(a) % 1e3 == 0 / 1e3 ? Math.ceil(a) / 1e3 : b
      },
      subtotal() {
          const a = this.carts.map((a, b) => a.price * a.qty);
          return a.reduce((a, b) => a + b, 0)
      },
      localPrice(a) {
          return a.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
          })
      },
      galleries() {
          const gallery = document.querySelectorAll('.shop__content .selector img');
          
          if(gallery) {
              return gallery; 
          }
      },
      activeSlide: 0,
      save() {
          a.set({
              carts: this.carts
          })
      }
  })
});

function Storage() {
  const a = 'vitoko',
      b = '{ "carts": [] }';
  return {
      get() {
          return JSON.parse(localStorage.getItem(a) || b)
      },
      set({
          carts: b,
          ...c
      }) {
          localStorage.setItem(a, JSON.stringify({
              ...c,
              carts: b.map(({
                  name: a,
                  sku: b,
                  image: c,
                  thumbnail: d,
                  size: e,
                  price: f,
                  weight: g,
                  qty: h
              }) => ({
                  name: a,
                  sku: b,
                  image: c,
                  thumbnail: d,
                  size: e,
                  price: f,
                  weight: g,
                  qty: h
              }))
          }))
      }
  }
}
document.addEventListener('alpine:init', () => {
    Alpine.data('checkout', () => ({
        user: {},
        activeStyle: false,
        destination: '',
        couriers: [],
        destinationName: '',
        fetchCourier() {
            if (this.destination !== '') {
                fetch('https://ongkir-' + this.user.kode_asal_pengiriman + '.netlify.app/api/' + this.destination.split(',')[0])
                    .then(response => response.json())
                    .then(data => {
                        this.couriers = data.results, this.destinationName = data.destination
                    })
            }
        },
        courierActive: null,
        courier: '',
        name: '',
        hp: '',
        email: '',
        address: '',
        postcode: '',
        payment: '',
        paymentActive: null,
        paymentAccount: '',
        paymentNumber: '',
        note: '',
        init() {
            const autoCompleteJS = new autoComplete({
                data: {
                    src: async () => {
                        try {
                            this.$refs.autoComplete.setAttribute("placeholder", "Loading...");
                            const source = await fetch('https://vitoko.netlify.app/api/destination.json');
                            const data = await source.json();
                            this.$refs.autoComplete.setAttribute("placeholder", autoCompleteJS.placeHolder);
                            return data;
                        } catch (error) {
                            return error;
                        }
                    },
                    keys: ["id", "name"],
                    cache: false,
                    filter: (list) => {
                        const filteredResults = Array.from(
                            new Set(list.map((value) => value.match))
                        ).map((id) => {
                            return list.find((value) => value.match === id);
                        });

                        return filteredResults;
                    }
                },
                placeHolder: "Masukkan Kecamatan",
                resultsList: {
                    class: "results__list list-none bg-body-secondary transition-all duration-500 ease-ease pl-0",
                    element: (list, data) => {
                        list.setAttribute("data-parent", "name-list");
                    },
                    noResults: true,
                    maxResults: 15,
                    tabSelect: true
                },
                resultItem: {
                    class: "autoComplete__result text-sm text-body-text hover:bg-body truncate group hover:border-l-2 hover:border-r-2 hover:border-solid hover:border-primary py-1 px-3 mb-0",
                    element: (item, data) => {
                        // Modify Results Item Content
                        item.innerHTML = `
                        <span class="truncate">
                        ${data.match}
                        </span>`;
                    },
                    highlight: "autoComplete_highlight text-primary bg-transparent",
                    selected: "autoComplete_selected bg-body border-l-2 border-r-2 border-solid border-primary"
                },
                events: {
                    input: {
                        focus: () => {
                            if (autoCompleteJS.input.value.length) autoCompleteJS.start();
                        },
                        selection: () => {
                            const feedback = event.detail;
                            const selection = feedback.selection.value.name;
                            const toDestination = feedback.selection.value.id + ', ' + feedback.selection.value.name;
                            this.$refs.autoComplete.setAttribute("placeholder", selection);
                            this.$refs.autoComplete.value = selection;
                            this.activeStyle = true;
                            this.destination = toDestination;
                            this.fetchCourier();
                            this.courier = '';
                            this.courierActive = null;
                            event.preventDefault();
                            
                            console.log(event.detail);
                        }
                    },
                }
            });
            
            if (this.$refs.autoComplete) {
                return autoCompleteJS ;
            }
        },
        localPrice(amount) {
            return amount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        },
        getTime() {
            const d = new Date();
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            const timeOrder = [d.toLocaleString("id-ID", options)];
            return timeOrder;
        },
        getCourier() {
            const kurir = this.courier.split(',')[0];
            const newKurir = kurir.replace(/&/g, "n");
            return newKurir;
        },
        sendWa(products, subtotal, berat) {
            const whatsapp = (this.user.whatsapp).toString().replace(/\D/g, '').replace(new RegExp('^0'), '62').replace(new RegExp('^8'), '628');
            const header = `Hi%20kak%20${this.user.nama}%2C%20saya%20mau%20order%20produk%20di%20toko%20${this.user.toko}%20dengan%20rincian%20berikut%2C%0A%0A`
            const name = `*Nama*%20%20%20%20%20%20%3A%20${this.name}%20%0A`;
            const hp = `*Nomor%20HP*%20%3A%20${this.hp}%20%0A`;
            const email = `*Email*%20%20%20%20%20%20%20%3A%20${this.email}%20%0A`;
            const district = ', Kec. ' + this.destination.split(',')[1] + ', ' + this.destination.split(',')[2] + ', ' + this.destination.split(',')[3];
            const address = `*Alamat*%20%20%20%20%3A%20${this.address}%20${district}%20${this.postcode}%0A`;
            const pembayaran = `*Pembayaran*%20%20%3A%20${this.paymentNumber}%20a/n%20${this.paymentAccount}%20(${this.payment})%0A`;
            const waktu = `*Waktu%20%20%20%20%20%20%20%3A%20${this.getTime()}%0A`;
            const catatan = `*Catatan*%20%20%3A%20${this.note}%0A%0A`;
            const produk = `${products.map((product, index) => product.summary = '%0A*' + product.qty + 'x*%20' + product.name + '%20*' + product.size + '*%20%0A_@' + this.localPrice(product.price) + '_%20%20%3D%3D%3E%20%20%20%20%20%20%20%20%20' + this.localPrice(product.price * product.qty)).join('%0A')}`;
            const product_list = `Rincian%20Pesanan%2C%0A_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_${produk}%0A_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%2B%0A`;
            const sub_total = `*Subtotal*%20%20%20%20%20%20%20%3A%20${this.localPrice(subtotal)}%0A`;
            const kurir = `*Kurir*%20%20%20%20%20%20%20%3A%20${this.courier !== '' ? this.getCourier() + ' - ' + this.localPrice(parseInt(this.courier.split(',')[1])) : '' }%0A`;
            const ongkir = `*Ongkir*%20%20%20%20%20%20%20%20%20%3A%20${this.courier !== '' ? this.localPrice(parseInt(this.courier.split(',')[1]) * berat) : 'belum ada kurir'}%0A`;
            const total_bayar = `*Total%20Pembayaran%20%20%20${this.courier !== '' ? this.localPrice(subtotal + (parseInt(this.courier.split(',')[1]) * berat )) : this.localPrice(subtotal)}*`;
            const link = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${header}${name}${hp}${email}${address}${pembayaran}${kurir}${waktu}${catatan}${product_list}${sub_total}${ongkir}${total_bayar}`;
            
            if ((this.name !== '') && (this.hp !== '') && (this.email !== '') && (this.address !== '') && (this.destination !== '')) {
                window.open(link);
            }
        },
    })
    )
})
    