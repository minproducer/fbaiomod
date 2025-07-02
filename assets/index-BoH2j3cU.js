function e(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if ("string" != typeof r && !Array.isArray(r))
			for (const t in r)
				if ("default" !== t && !(t in e)) {
					const n = Object.getOwnPropertyDescriptor(r, t);
					n && Object.defineProperty(e, t, n.get ? n : {
						enumerable: !0,
						get: () => r[t]
					})
				}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}! function () {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
		new MutationObserver((e => {
			for (const n of e)
				if ("childList" === n.type)
					for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
		})).observe(document, {
			childList: !0,
			subtree: !0
		})
	}

	function t(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = function (e) {
			const t = {};
			return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
		}(e);
		fetch(e.href, t)
	}
}();
const t = {},
	n = function (e, n, r) {
		let o = Promise.resolve();
		if (n && n.length > 0) {
			let e = function (e) {
				return Promise.all(e.map((e => Promise.resolve(e).then((e => ({
					status: "fulfilled",
					value: e
				})), (e => ({
					status: "rejected",
					reason: e
				}))))))
			};
			const a = document.getElementsByTagName("link"),
				i = document.querySelector("meta[property=csp-nonce]"),
				l = (null == i ? void 0 : i.nonce) || (null == i ? void 0 : i.getAttribute("nonce"));
			o = e(n.map((e => {
				if (e = function (e, t) {
						return new URL(e, t).href
					}(e, r), e in t) return;
				t[e] = !0;
				const n = e.endsWith(".css"),
					o = n ? '[rel="stylesheet"]' : "";
				if (!!r)
					for (let t = a.length - 1; t >= 0; t--) {
						const r = a[t];
						if (r.href === e && (!n || "stylesheet" === r.rel)) return
					} else if (document.querySelector(`link[href="${e}"]${o}`)) return;
				const i = document.createElement("link");
				return i.rel = n ? "stylesheet" : "modulepreload", n || (i.as = "script"), i.crossOrigin = "", i.href = e, l && i.setAttribute("nonce", l), document.head.appendChild(i), n ? new Promise(((t, n) => {
					i.addEventListener("load", t), i.addEventListener("error", (() => n(new Error(`Unable to preload CSS for ${e}`))))
				})) : void 0
			})))
		}

		function a(e) {
			const t = new Event("vite:preloadError", {
				cancelable: !0
			});
			if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
		}
		return o.then((t => {
			for (const e of t || []) "rejected" === e.status && a(e.reason);
			return e().catch(a)
		}))
	};
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function o(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function a(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if ("function" == typeof t) {
		var n = function e() {
			return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
		};
		n.prototype = t.prototype
	} else n = {};
	return Object.defineProperty(n, "__esModule", {
		value: !0
	}), Object.keys(e).forEach((function (t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function () {
				return e[t]
			}
		})
	})), n
}
var i, l, s, c, u = {
		exports: {}
	},
	d = {},
	f = {
		exports: {}
	},
	p = {};

function h() {
	if (i) return p;
	i = 1;
	var e = Symbol.for("react.element"),
		t = Symbol.for("react.portal"),
		n = Symbol.for("react.fragment"),
		r = Symbol.for("react.strict_mode"),
		o = Symbol.for("react.profiler"),
		a = Symbol.for("react.provider"),
		l = Symbol.for("react.context"),
		s = Symbol.for("react.forward_ref"),
		c = Symbol.for("react.suspense"),
		u = Symbol.for("react.memo"),
		d = Symbol.for("react.lazy"),
		f = Symbol.iterator;
	var h = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {}
		},
		m = Object.assign,
		g = {};

	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || h
	}

	function y() {}

	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || h
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function (e, t) {
		if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState")
	}, v.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate")
	}, y.prototype = v.prototype;
	var w = b.prototype = new y;
	w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
	var k = Array.isArray,
		x = Object.prototype.hasOwnProperty,
		S = {
			current: null
		},
		C = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function E(t, n, r) {
		var o, a = {},
			i = null,
			l = null;
		if (null != n)
			for (o in void 0 !== n.ref && (l = n.ref), void 0 !== n.key && (i = "" + n.key), n) x.call(n, o) && !C.hasOwnProperty(o) && (a[o] = n[o]);
		var s = arguments.length - 2;
		if (1 === s) a.children = r;
		else if (1 < s) {
			for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
			a.children = c
		}
		if (t && t.defaultProps)
			for (o in s = t.defaultProps) void 0 === a[o] && (a[o] = s[o]);
		return {
			$$typeof: e,
			type: t,
			key: i,
			ref: l,
			props: a,
			_owner: S.current
		}
	}

	function O(t) {
		return "object" == typeof t && null !== t && t.$$typeof === e
	}
	var $ = /\/+/g;

	function P(e, t) {
		return "object" == typeof e && null !== e && null != e.key ? function (e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, (function (e) {
				return t[e]
			}))
		}("" + e.key) : t.toString(36)
	}

	function j(n, r, o, a, i) {
		var l = typeof n;
		"undefined" !== l && "boolean" !== l || (n = null);
		var s = !1;
		if (null === n) s = !0;
		else switch (l) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (n.$$typeof) {
					case e:
					case t:
						s = !0
				}
		}
		if (s) return i = i(s = n), n = "" === a ? "." + P(s, 0) : a, k(i) ? (o = "", null != n && (o = n.replace($, "$&/") + "/"), j(i, r, o, "", (function (e) {
			return e
		}))) : null != i && (O(i) && (i = function (t, n) {
			return {
				$$typeof: e,
				type: t.type,
				key: n,
				ref: t.ref,
				props: t.props,
				_owner: t._owner
			}
		}(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace($, "$&/") + "/") + n)), r.push(i)), 1;
		if (s = 0, a = "" === a ? "." : a + ":", k(n))
			for (var c = 0; c < n.length; c++) {
				var u = a + P(l = n[c], c);
				s += j(l, r, o, u, i)
			} else if (u = function (e) {
					return null === e || "object" != typeof e ? null : "function" == typeof (e = f && e[f] || e["@@iterator"]) ? e : null
				}(n), "function" == typeof u)
				for (n = u.call(n), c = 0; !(l = n.next()).done;) s += j(l = l.value, r, o, u = a + P(l, c++), i);
			else if ("object" === l) throw r = String(n), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r ? "object with keys {" + Object.keys(n).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return s
	}

	function _(e, t, n) {
		if (null == e) return e;
		var r = [],
			o = 0;
		return j(e, r, "", "", (function (e) {
			return t.call(n, e, o++)
		})), r
	}

	function R(e) {
		if (-1 === e._status) {
			var t = e._result;
			(t = t()).then((function (t) {
				0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
			}), (function (t) {
				0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
			})), -1 === e._status && (e._status = 0, e._result = t)
		}
		if (1 === e._status) return e._result.default;
		throw e._result
	}
	var M = {
			current: null
		},
		F = {
			transition: null
		},
		N = {
			ReactCurrentDispatcher: M,
			ReactCurrentBatchConfig: F,
			ReactCurrentOwner: S
		};

	function T() {
		throw Error("act(...) is not supported in production builds of React.")
	}
	return p.Children = {
		map: _,
		forEach: function (e, t, n) {
			_(e, (function () {
				t.apply(this, arguments)
			}), n)
		},
		count: function (e) {
			var t = 0;
			return _(e, (function () {
				t++
			})), t
		},
		toArray: function (e) {
			return _(e, (function (e) {
				return e
			})) || []
		},
		only: function (e) {
			if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e
		}
	}, p.Component = v, p.Fragment = n, p.Profiler = o, p.PureComponent = b, p.StrictMode = r, p.Suspense = c, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, p.act = T, p.cloneElement = function (t, n, r) {
		if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
		var o = m({}, t.props),
			a = t.key,
			i = t.ref,
			l = t._owner;
		if (null != n) {
			if (void 0 !== n.ref && (i = n.ref, l = S.current), void 0 !== n.key && (a = "" + n.key), t.type && t.type.defaultProps) var s = t.type.defaultProps;
			for (c in n) x.call(n, c) && !C.hasOwnProperty(c) && (o[c] = void 0 === n[c] && void 0 !== s ? s[c] : n[c])
		}
		var c = arguments.length - 2;
		if (1 === c) o.children = r;
		else if (1 < c) {
			s = Array(c);
			for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
			o.children = s
		}
		return {
			$$typeof: e,
			type: t.type,
			key: a,
			ref: i,
			props: o,
			_owner: l
		}
	}, p.createContext = function (e) {
		return (e = {
			$$typeof: l,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}).Provider = {
			$$typeof: a,
			_context: e
		}, e.Consumer = e
	}, p.createElement = E, p.createFactory = function (e) {
		var t = E.bind(null, e);
		return t.type = e, t
	}, p.createRef = function () {
		return {
			current: null
		}
	}, p.forwardRef = function (e) {
		return {
			$$typeof: s,
			render: e
		}
	}, p.isValidElement = O, p.lazy = function (e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: R
		}
	}, p.memo = function (e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: void 0 === t ? null : t
		}
	}, p.startTransition = function (e) {
		var t = F.transition;
		F.transition = {};
		try {
			e()
		} finally {
			F.transition = t
		}
	}, p.unstable_act = T, p.useCallback = function (e, t) {
		return M.current.useCallback(e, t)
	}, p.useContext = function (e) {
		return M.current.useContext(e)
	}, p.useDebugValue = function () {}, p.useDeferredValue = function (e) {
		return M.current.useDeferredValue(e)
	}, p.useEffect = function (e, t) {
		return M.current.useEffect(e, t)
	}, p.useId = function () {
		return M.current.useId()
	}, p.useImperativeHandle = function (e, t, n) {
		return M.current.useImperativeHandle(e, t, n)
	}, p.useInsertionEffect = function (e, t) {
		return M.current.useInsertionEffect(e, t)
	}, p.useLayoutEffect = function (e, t) {
		return M.current.useLayoutEffect(e, t)
	}, p.useMemo = function (e, t) {
		return M.current.useMemo(e, t)
	}, p.useReducer = function (e, t, n) {
		return M.current.useReducer(e, t, n)
	}, p.useRef = function (e) {
		return M.current.useRef(e)
	}, p.useState = function (e) {
		return M.current.useState(e)
	}, p.useSyncExternalStore = function (e, t, n) {
		return M.current.useSyncExternalStore(e, t, n)
	}, p.useTransition = function () {
		return M.current.useTransition()
	}, p.version = "18.3.1", p
}

function m() {
	return l || (l = 1, f.exports = h()), f.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g = (c || (c = 1, u.exports = function () {
		if (s) return d;
		s = 1;
		var e = m(),
			t = Symbol.for("react.element"),
			n = Symbol.for("react.fragment"),
			r = Object.prototype.hasOwnProperty,
			o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
			a = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function i(e, n, i) {
			var l, s = {},
				c = null,
				u = null;
			for (l in void 0 !== i && (c = "" + i), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (u = n.ref), n) r.call(n, l) && !a.hasOwnProperty(l) && (s[l] = n[l]);
			if (e && e.defaultProps)
				for (l in n = e.defaultProps) void 0 === s[l] && (s[l] = n[l]);
			return {
				$$typeof: t,
				type: e,
				key: c,
				ref: u,
				props: s,
				_owner: o.current
			}
		}
		return d.Fragment = n, d.jsx = i, d.jsxs = i, d
	}()), u.exports),
	v = m();
const y = o(v),
	b = e({
		__proto__: null,
		default: y
	}, [v]);
var w, k, x, S, C, E = {},
	O = {
		exports: {}
	},
	$ = {},
	P = {
		exports: {}
	},
	j = {};

function _() {
	return k || (k = 1, P.exports = (w || (w = 1, function (e) {
		function t(e, t) {
			var n = e.length;
			e.push(t);
			e: for (; 0 < n;) {
				var r = n - 1 >>> 1,
					a = e[r];
				if (!(0 < o(a, t))) break e;
				e[r] = t, e[n] = a, n = r
			}
		}

		function n(e) {
			return 0 === e.length ? null : e[0]
		}

		function r(e) {
			if (0 === e.length) return null;
			var t = e[0],
				n = e.pop();
			if (n !== t) {
				e[0] = n;
				e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
					var l = 2 * (r + 1) - 1,
						s = e[l],
						c = l + 1,
						u = e[c];
					if (0 > o(s, n)) c < a && 0 > o(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[l] = n, r = l);
					else {
						if (!(c < a && 0 > o(u, n))) break e;
						e[r] = u, e[c] = n, r = c
					}
				}
			}
			return t
		}

		function o(e, t) {
			var n = e.sortIndex - t.sortIndex;
			return 0 !== n ? n : e.id - t.id
		}
		if ("object" == typeof performance && "function" == typeof performance.now) {
			var a = performance;
			e.unstable_now = function () {
				return a.now()
			}
		} else {
			var i = Date,
				l = i.now();
			e.unstable_now = function () {
				return i.now() - l
			}
		}
		var s = [],
			c = [],
			u = 1,
			d = null,
			f = 3,
			p = !1,
			h = !1,
			m = !1,
			g = "function" == typeof setTimeout ? setTimeout : null,
			v = "function" == typeof clearTimeout ? clearTimeout : null,
			y = "undefined" != typeof setImmediate ? setImmediate : null;

		function b(e) {
			for (var o = n(c); null !== o;) {
				if (null === o.callback) r(c);
				else {
					if (!(o.startTime <= e)) break;
					r(c), o.sortIndex = o.expirationTime, t(s, o)
				}
				o = n(c)
			}
		}

		function w(e) {
			if (m = !1, b(e), !h)
				if (null !== n(s)) h = !0, M(k);
				else {
					var t = n(c);
					null !== t && F(w, t.startTime - e)
				}
		}

		function k(t, o) {
			h = !1, m && (m = !1, v(E), E = -1), p = !0;
			var a = f;
			try {
				for (b(o), d = n(s); null !== d && (!(d.expirationTime > o) || t && !P());) {
					var i = d.callback;
					if ("function" == typeof i) {
						d.callback = null, f = d.priorityLevel;
						var l = i(d.expirationTime <= o);
						o = e.unstable_now(), "function" == typeof l ? d.callback = l : d === n(s) && r(s), b(o)
					} else r(s);
					d = n(s)
				}
				if (null !== d) var u = !0;
				else {
					var g = n(c);
					null !== g && F(w, g.startTime - o), u = !1
				}
				return u
			} finally {
				d = null, f = a, p = !1
			}
		}
		"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
		var x, S = !1,
			C = null,
			E = -1,
			O = 5,
			$ = -1;

		function P() {
			return !(e.unstable_now() - $ < O)
		}

		function j() {
			if (null !== C) {
				var t = e.unstable_now();
				$ = t;
				var n = !0;
				try {
					n = C(!0, t)
				} finally {
					n ? x() : (S = !1, C = null)
				}
			} else S = !1
		}
		if ("function" == typeof y) x = function () {
			y(j)
		};
		else if ("undefined" != typeof MessageChannel) {
			var _ = new MessageChannel,
				R = _.port2;
			_.port1.onmessage = j, x = function () {
				R.postMessage(null)
			}
		} else x = function () {
			g(j, 0)
		};

		function M(e) {
			C = e, S || (S = !0, x())
		}

		function F(t, n) {
			E = g((function () {
				t(e.unstable_now())
			}), n)
		}
		e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (e) {
			e.callback = null
		}, e.unstable_continueExecution = function () {
			h || p || (h = !0, M(k))
		}, e.unstable_forceFrameRate = function (e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < e ? Math.floor(1e3 / e) : 5
		}, e.unstable_getCurrentPriorityLevel = function () {
			return f
		}, e.unstable_getFirstCallbackNode = function () {
			return n(s)
		}, e.unstable_next = function (e) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default:
					t = f
			}
			var n = f;
			f = t;
			try {
				return e()
			} finally {
				f = n
			}
		}, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (e, t) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					e = 3
			}
			var n = f;
			f = e;
			try {
				return t()
			} finally {
				f = n
			}
		}, e.unstable_scheduleCallback = function (r, o, a) {
			var i = e.unstable_now();
			switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, r) {
				case 1:
					var l = -1;
					break;
				case 2:
					l = 250;
					break;
				case 5:
					l = 1073741823;
					break;
				case 4:
					l = 1e4;
					break;
				default:
					l = 5e3
			}
			return r = {
				id: u++,
				callback: o,
				priorityLevel: r,
				startTime: a,
				expirationTime: l = a + l,
				sortIndex: -1
			}, a > i ? (r.sortIndex = a, t(c, r), null === n(s) && r === n(c) && (m ? (v(E), E = -1) : m = !0, F(w, a - i))) : (r.sortIndex = l, t(s, r), h || p || (h = !0, M(k))), r
		}, e.unstable_shouldYield = P, e.unstable_wrapCallback = function (e) {
			var t = f;
			return function () {
				var n = f;
				f = t;
				try {
					return e.apply(this, arguments)
				} finally {
					f = n
				}
			}
		}
	}(j)), j)), P.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function R() {
	if (x) return $;
	x = 1;
	var e = m(),
		t = _();

	function n(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}
	var r = new Set,
		o = {};

	function a(e, t) {
		i(e, t), i(e + "Capture", t)
	}

	function i(e, t) {
		for (o[e] = t, e = 0; e < t.length; e++) r.add(t[e])
	}
	var l = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
		s = Object.prototype.hasOwnProperty,
		c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		u = {},
		d = {};

	function f(e, t, n, r, o, a, i) {
		this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
	}
	var p = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
		p[e] = new f(e, 0, !1, e, null, !1, !1)
	})), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach((function (e) {
		var t = e[0];
		p[t] = new f(t, 1, !1, e[1], null, !1, !1)
	})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
		p[e] = new f(e, 2, !1, e.toLowerCase(), null, !1, !1)
	})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
		p[e] = new f(e, 2, !1, e, null, !1, !1)
	})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
		p[e] = new f(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
		p[e] = new f(e, 3, !0, e, null, !1, !1)
	})), ["capture", "download"].forEach((function (e) {
		p[e] = new f(e, 4, !1, e, null, !1, !1)
	})), ["cols", "rows", "size", "span"].forEach((function (e) {
		p[e] = new f(e, 6, !1, e, null, !1, !1)
	})), ["rowSpan", "start"].forEach((function (e) {
		p[e] = new f(e, 5, !1, e.toLowerCase(), null, !1, !1)
	}));
	var h = /[\-:]([a-z])/g;

	function g(e) {
		return e[1].toUpperCase()
	}

	function v(e, t, n, r) {
		var o = p.hasOwnProperty(t) ? p[t] : null;
		(null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
			if (null == t || function (e, t, n, r) {
					if (null !== n && 0 === n.type) return !1;
					switch (typeof t) {
						case "function":
						case "symbol":
							return !0;
						case "boolean":
							return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
						default:
							return !1
					}
				}(e, t, n, r)) return !0;
			if (r) return !1;
			if (null !== n) switch (n.type) {
				case 3:
					return !t;
				case 4:
					return !1 === t;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t
			}
			return !1
		}(t, n, o, r) && (n = null), r || null === o ? function (e) {
			return !!s.call(d, e) || !s.call(u, e) && (c.test(e) ? d[e] = !0 : (u[e] = !0, !1))
		}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
		var t = e.replace(h, g);
		p[t] = new f(t, 1, !1, e, null, !1, !1)
	})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
		var t = e.replace(h, g);
		p[t] = new f(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
	})), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
		var t = e.replace(h, g);
		p[t] = new f(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
	})), ["tabIndex", "crossOrigin"].forEach((function (e) {
		p[e] = new f(e, 1, !1, e.toLowerCase(), null, !1, !1)
	})), p.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
		p[e] = new f(e, 1, !1, e.toLowerCase(), null, !0, !0)
	}));
	var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		b = Symbol.for("react.element"),
		w = Symbol.for("react.portal"),
		k = Symbol.for("react.fragment"),
		S = Symbol.for("react.strict_mode"),
		C = Symbol.for("react.profiler"),
		E = Symbol.for("react.provider"),
		O = Symbol.for("react.context"),
		P = Symbol.for("react.forward_ref"),
		j = Symbol.for("react.suspense"),
		R = Symbol.for("react.suspense_list"),
		M = Symbol.for("react.memo"),
		F = Symbol.for("react.lazy"),
		N = Symbol.for("react.offscreen"),
		T = Symbol.iterator;

	function I(e) {
		return null === e || "object" != typeof e ? null : "function" == typeof (e = T && e[T] || e["@@iterator"]) ? e : null
	}
	var L, z = Object.assign;

	function A(e) {
		if (void 0 === L) try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			L = t && t[1] || ""
		}
		return "\n" + L + e
	}
	var D = !1;

	function H(e, t) {
		if (!e || D) return "";
		D = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t)
				if (t = function () {
						throw Error()
					}, Object.defineProperty(t.prototype, "props", {
						set: function () {
							throw Error()
						}
					}), "object" == typeof Reflect && Reflect.construct) {
					try {
						Reflect.construct(t, [])
					} catch (c) {
						var r = c
					}
					Reflect.construct(e, [], t)
				} else {
					try {
						t.call()
					} catch (c) {
						r = c
					}
					e.call(t.prototype)
				}
			else {
				try {
					throw Error()
				} catch (c) {
					r = c
				}
				e()
			}
		} catch (c) {
			if (c && r && "string" == typeof c.stack) {
				for (var o = c.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
				for (; 1 <= i && 0 <= l; i--, l--)
					if (o[i] !== a[l]) {
						if (1 !== i || 1 !== l)
							do {
								if (i--, 0 > --l || o[i] !== a[l]) {
									var s = "\n" + o[i].replace(" at new ", " at ");
									return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
								}
							} while (1 <= i && 0 <= l);
						break
					}
			}
		} finally {
			D = !1, Error.prepareStackTrace = n
		}
		return (e = e ? e.displayName || e.name : "") ? A(e) : ""
	}

	function B(e) {
		switch (e.tag) {
			case 5:
				return A(e.type);
			case 16:
				return A("Lazy");
			case 13:
				return A("Suspense");
			case 19:
				return A("SuspenseList");
			case 0:
			case 2:
			case 15:
				return e = H(e.type, !1);
			case 11:
				return e = H(e.type.render, !1);
			case 1:
				return e = H(e.type, !0);
			default:
				return ""
		}
	}

	function U(e) {
		if (null == e) return null;
		if ("function" == typeof e) return e.displayName || e.name || null;
		if ("string" == typeof e) return e;
		switch (e) {
			case k:
				return "Fragment";
			case w:
				return "Portal";
			case C:
				return "Profiler";
			case S:
				return "StrictMode";
			case j:
				return "Suspense";
			case R:
				return "SuspenseList"
		}
		if ("object" == typeof e) switch (e.$$typeof) {
			case O:
				return (e.displayName || "Context") + ".Consumer";
			case E:
				return (e._context.displayName || "Context") + ".Provider";
			case P:
				var t = e.render;
				return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
			case M:
				return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
			case F:
				t = e._payload, e = e._init;
				try {
					return U(e(t))
				} catch (n) {}
		}
		return null
	}

	function V(e) {
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
				return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
				return U(t);
			case 8:
				return t === S ? "StrictMode" : "Mode";
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
				if ("function" == typeof t) return t.displayName || t.name || null;
				if ("string" == typeof t) return t
		}
		return null
	}

	function W(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined":
			case "object":
				return e;
			default:
				return ""
		}
	}

	function q(e) {
		var t = e.type;
		return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
	}

	function G(e) {
		e._valueTracker || (e._valueTracker = function (e) {
			var t = q(e) ? "checked" : "value",
				n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
				r = "" + e[t];
			if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
				var o = n.get,
					a = n.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return o.call(this)
					},
					set: function (e) {
						r = "" + e, a.call(this, e)
					}
				}), Object.defineProperty(e, t, {
					enumerable: n.enumerable
				}), {
					getValue: function () {
						return r
					},
					setValue: function (e) {
						r = "" + e
					},
					stopTracking: function () {
						e._valueTracker = null, delete e[t]
					}
				}
			}
		}(e))
	}

	function X(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = "";
		return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
	}

	function K(e) {
		if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
		try {
			return e.activeElement || e.body
		} catch (t) {
			return e.body
		}
	}

	function Q(e, t) {
		var n = t.checked;
		return z({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != n ? n : e._wrapperState.initialChecked
		})
	}

	function Y(e, t) {
		var n = null == t.defaultValue ? "" : t.defaultValue,
			r = null != t.checked ? t.checked : t.defaultChecked;
		n = W(null != t.value ? t.value : n), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
		}
	}

	function Z(e, t) {
		null != (t = t.checked) && v(e, "checked", t, !1)
	}

	function J(e, t) {
		Z(e, t);
		var n = W(t.value),
			r = t.type;
		if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
		t.hasOwnProperty("value") ? te(e, t.type, n) : t.hasOwnProperty("defaultValue") && te(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
	}

	function ee(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
		}
		"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
	}

	function te(e, t, n) {
		"number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
	}
	var ne = Array.isArray;

	function re(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
			for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
		} else {
			for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
				if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
				null !== t || e[o].disabled || (t = e[o])
			}
			null !== t && (t.selected = !0)
		}
	}

	function oe(e, t) {
		if (null != t.dangerouslySetInnerHTML) throw Error(n(91));
		return z({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		})
	}

	function ae(e, t) {
		var r = t.value;
		if (null == r) {
			if (r = t.children, t = t.defaultValue, null != r) {
				if (null != t) throw Error(n(92));
				if (ne(r)) {
					if (1 < r.length) throw Error(n(93));
					r = r[0]
				}
				t = r
			}
			null == t && (t = ""), r = t
		}
		e._wrapperState = {
			initialValue: W(r)
		}
	}

	function ie(e, t) {
		var n = W(t.value),
			r = W(t.defaultValue);
		null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
	}

	function le(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
	}

	function se(e) {
		switch (e) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function ce(e, t) {
		return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
	}
	var ue, de, fe = (de = function (e, t) {
		if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
		else {
			for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild)
		}
	}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
		MSApp.execUnsafeLocalFunction((function () {
			return de(e, t)
		}))
	} : de);

	function pe(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
		}
		e.textContent = t
	}
	var he = {
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
			strokeWidth: !0
		},
		me = ["Webkit", "ms", "Moz", "O"];

	function ge(e, t, n) {
		return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px"
	}

	function ve(e, t) {
		for (var n in e = e.style, t)
			if (t.hasOwnProperty(n)) {
				var r = 0 === n.indexOf("--"),
					o = ge(n, t[n], r);
				"float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
			}
	}
	Object.keys(he).forEach((function (e) {
		me.forEach((function (t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e]
		}))
	}));
	var ye = z({
		menuitem: !0
	}, {
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
		wbr: !0
	});

	function be(e, t) {
		if (t) {
			if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(n(137, e));
			if (null != t.dangerouslySetInnerHTML) {
				if (null != t.children) throw Error(n(60));
				if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(n(61))
			}
			if (null != t.style && "object" != typeof t.style) throw Error(n(62))
		}
	}

	function we(e, t) {
		if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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
				return !0
		}
	}
	var ke = null;

	function xe(e) {
		return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
	}
	var Se = null,
		Ce = null,
		Ee = null;

	function Oe(e) {
		if (e = ko(e)) {
			if ("function" != typeof Se) throw Error(n(280));
			var t = e.stateNode;
			t && (t = So(t), Se(e.stateNode, e.type, t))
		}
	}

	function $e(e) {
		Ce ? Ee ? Ee.push(e) : Ee = [e] : Ce = e
	}

	function Pe() {
		if (Ce) {
			var e = Ce,
				t = Ee;
			if (Ee = Ce = null, Oe(e), t)
				for (e = 0; e < t.length; e++) Oe(t[e])
		}
	}

	function je(e, t) {
		return e(t)
	}

	function _e() {}
	var Re = !1;

	function Me(e, t, n) {
		if (Re) return e(t, n);
		Re = !0;
		try {
			return je(e, t, n)
		} finally {
			Re = !1, (null !== Ce || null !== Ee) && (_e(), Pe())
		}
	}

	function Fe(e, t) {
		var r = e.stateNode;
		if (null === r) return null;
		var o = So(r);
		if (null === o) return null;
		r = o[t];
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
				(o = !o.disabled) || (o = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !o;
				break e;
			default:
				e = !1
		}
		if (e) return null;
		if (r && "function" != typeof r) throw Error(n(231, t, typeof r));
		return r
	}
	var Ne = !1;
	if (l) try {
		var Te = {};
		Object.defineProperty(Te, "passive", {
			get: function () {
				Ne = !0
			}
		}), window.addEventListener("test", Te, Te), window.removeEventListener("test", Te, Te)
	} catch (de) {
		Ne = !1
	}

	function Ie(e, t, n, r, o, a, i, l, s) {
		var c = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, c)
		} catch (u) {
			this.onError(u)
		}
	}
	var Le = !1,
		ze = null,
		Ae = !1,
		De = null,
		He = {
			onError: function (e) {
				Le = !0, ze = e
			}
		};

	function Be(e, t, n, r, o, a, i, l, s) {
		Le = !1, ze = null, Ie.apply(He, arguments)
	}

	function Ue(e) {
		var t = e,
			n = e;
		if (e.alternate)
			for (; t.return;) t = t.return;
		else {
			e = t;
			do {
				!!(4098 & (t = e).flags) && (n = t.return), e = t.return
			} while (e)
		}
		return 3 === t.tag ? n : null
	}

	function Ve(e) {
		if (13 === e.tag) {
			var t = e.memoizedState;
			if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
		}
		return null
	}

	function We(e) {
		if (Ue(e) !== e) throw Error(n(188))
	}

	function qe(e) {
		return null !== (e = function (e) {
			var t = e.alternate;
			if (!t) {
				if (null === (t = Ue(e))) throw Error(n(188));
				return t !== e ? null : e
			}
			for (var r = e, o = t;;) {
				var a = r.return;
				if (null === a) break;
				var i = a.alternate;
				if (null === i) {
					if (null !== (o = a.return)) {
						r = o;
						continue
					}
					break
				}
				if (a.child === i.child) {
					for (i = a.child; i;) {
						if (i === r) return We(a), e;
						if (i === o) return We(a), t;
						i = i.sibling
					}
					throw Error(n(188))
				}
				if (r.return !== o.return) r = a, o = i;
				else {
					for (var l = !1, s = a.child; s;) {
						if (s === r) {
							l = !0, r = a, o = i;
							break
						}
						if (s === o) {
							l = !0, o = a, r = i;
							break
						}
						s = s.sibling
					}
					if (!l) {
						for (s = i.child; s;) {
							if (s === r) {
								l = !0, r = i, o = a;
								break
							}
							if (s === o) {
								l = !0, o = i, r = a;
								break
							}
							s = s.sibling
						}
						if (!l) throw Error(n(189))
					}
				}
				if (r.alternate !== o) throw Error(n(190))
			}
			if (3 !== r.tag) throw Error(n(188));
			return r.stateNode.current === r ? e : t
		}(e)) ? Ge(e) : null
	}

	function Ge(e) {
		if (5 === e.tag || 6 === e.tag) return e;
		for (e = e.child; null !== e;) {
			var t = Ge(e);
			if (null !== t) return t;
			e = e.sibling
		}
		return null
	}
	var Xe = t.unstable_scheduleCallback,
		Ke = t.unstable_cancelCallback,
		Qe = t.unstable_shouldYield,
		Ye = t.unstable_requestPaint,
		Ze = t.unstable_now,
		Je = t.unstable_getCurrentPriorityLevel,
		et = t.unstable_ImmediatePriority,
		tt = t.unstable_UserBlockingPriority,
		nt = t.unstable_NormalPriority,
		rt = t.unstable_LowPriority,
		ot = t.unstable_IdlePriority,
		at = null,
		it = null;
	var lt = Math.clz32 ? Math.clz32 : function (e) {
			return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / ct | 0) | 0
		},
		st = Math.log,
		ct = Math.LN2;
	var ut = 64,
		dt = 4194304;

	function ft(e) {
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
				return 4194240 & e;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return 130023424 & e;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return e
		}
	}

	function pt(e, t) {
		var n = e.pendingLanes;
		if (0 === n) return 0;
		var r = 0,
			o = e.suspendedLanes,
			a = e.pingedLanes,
			i = 268435455 & n;
		if (0 !== i) {
			var l = i & ~o;
			0 !== l ? r = ft(l) : 0 !== (a &= i) && (r = ft(a))
		} else 0 !== (i = n & ~o) ? r = ft(i) : 0 !== a && (r = ft(a));
		if (0 === r) return 0;
		if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 4194240 & a)) return t;
		if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
			for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - lt(t)), r |= e[n], t &= ~o;
		return r
	}

	function ht(e, t) {
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
			default:
				return -1
		}
	}

	function mt(e) {
		return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
	}

	function gt() {
		var e = ut;
		return !(4194240 & (ut <<= 1)) && (ut = 64), e
	}

	function vt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t
	}

	function yt(e, t, n) {
		e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - lt(t)] = n
	}

	function bt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - lt(n),
				o = 1 << r;
			o & t | e[r] & t && (e[r] |= t), n &= ~o
		}
	}
	var wt = 0;

	function kt(e) {
		return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
	}
	var xt, St, Ct, Et, Ot, $t = !1,
		Pt = [],
		jt = null,
		_t = null,
		Rt = null,
		Mt = new Map,
		Ft = new Map,
		Nt = [],
		Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function It(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				jt = null;
				break;
			case "dragenter":
			case "dragleave":
				_t = null;
				break;
			case "mouseover":
			case "mouseout":
				Rt = null;
				break;
			case "pointerover":
			case "pointerout":
				Mt.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Ft.delete(t.pointerId)
		}
	}

	function Lt(e, t, n, r, o, a) {
		return null === e || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [o]
		}, null !== t && (null !== (t = ko(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
	}

	function zt(e) {
		var t = wo(e.target);
		if (null !== t) {
			var n = Ue(t);
			if (null !== n)
				if (13 === (t = n.tag)) {
					if (null !== (t = Ve(n))) return e.blockedOn = t, void Ot(e.priority, (function () {
						Ct(n)
					}))
				} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
		}
		e.blockedOn = null
	}

	function At(e) {
		if (null !== e.blockedOn) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (null !== n) return null !== (t = ko(n)) && St(t), e.blockedOn = n, !1;
			var r = new(n = e.nativeEvent).constructor(n.type, n);
			ke = r, n.target.dispatchEvent(r), ke = null, t.shift()
		}
		return !0
	}

	function Dt(e, t, n) {
		At(e) && n.delete(t)
	}

	function Ht() {
		$t = !1, null !== jt && At(jt) && (jt = null), null !== _t && At(_t) && (_t = null), null !== Rt && At(Rt) && (Rt = null), Mt.forEach(Dt), Ft.forEach(Dt)
	}

	function Bt(e, n) {
		e.blockedOn === n && (e.blockedOn = null, $t || ($t = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Ht)))
	}

	function Ut(e) {
		function t(t) {
			return Bt(t, e)
		}
		if (0 < Pt.length) {
			Bt(Pt[0], e);
			for (var n = 1; n < Pt.length; n++) {
				var r = Pt[n];
				r.blockedOn === e && (r.blockedOn = null)
			}
		}
		for (null !== jt && Bt(jt, e), null !== _t && Bt(_t, e), null !== Rt && Bt(Rt, e), Mt.forEach(t), Ft.forEach(t), n = 0; n < Nt.length; n++)(r = Nt[n]).blockedOn === e && (r.blockedOn = null);
		for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn;) zt(n), null === n.blockedOn && Nt.shift()
	}
	var Vt = y.ReactCurrentBatchConfig,
		Wt = !0;

	function qt(e, t, n, r) {
		var o = wt,
			a = Vt.transition;
		Vt.transition = null;
		try {
			wt = 1, Xt(e, t, n, r)
		} finally {
			wt = o, Vt.transition = a
		}
	}

	function Gt(e, t, n, r) {
		var o = wt,
			a = Vt.transition;
		Vt.transition = null;
		try {
			wt = 4, Xt(e, t, n, r)
		} finally {
			wt = o, Vt.transition = a
		}
	}

	function Xt(e, t, n, r) {
		if (Wt) {
			var o = Qt(e, t, n, r);
			if (null === o) Wr(e, t, r, Kt, n), It(e, r);
			else if (function (e, t, n, r, o) {
					switch (t) {
						case "focusin":
							return jt = Lt(jt, e, t, n, r, o), !0;
						case "dragenter":
							return _t = Lt(_t, e, t, n, r, o), !0;
						case "mouseover":
							return Rt = Lt(Rt, e, t, n, r, o), !0;
						case "pointerover":
							var a = o.pointerId;
							return Mt.set(a, Lt(Mt.get(a) || null, e, t, n, r, o)), !0;
						case "gotpointercapture":
							return a = o.pointerId, Ft.set(a, Lt(Ft.get(a) || null, e, t, n, r, o)), !0
					}
					return !1
				}(o, e, t, n, r)) r.stopPropagation();
			else if (It(e, r), 4 & t && -1 < Tt.indexOf(e)) {
				for (; null !== o;) {
					var a = ko(o);
					if (null !== a && xt(a), null === (a = Qt(e, t, n, r)) && Wr(e, t, r, Kt, n), a === o) break;
					o = a
				}
				null !== o && r.stopPropagation()
			} else Wr(e, t, r, null, n)
		}
	}
	var Kt = null;

	function Qt(e, t, n, r) {
		if (Kt = null, null !== (e = wo(e = xe(r))))
			if (null === (t = Ue(e))) e = null;
			else if (13 === (n = t.tag)) {
			if (null !== (e = Ve(t))) return e;
			e = null
		} else if (3 === n) {
			if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
			e = null
		} else t !== e && (e = null);
		return Kt = e, null
	}

	function Yt(e) {
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
				switch (Je()) {
					case et:
						return 1;
					case tt:
						return 4;
					case nt:
					case rt:
						return 16;
					case ot:
						return 536870912;
					default:
						return 16
				}
				default:
					return 16
		}
	}
	var Zt = null,
		Jt = null,
		en = null;

	function tn() {
		if (en) return en;
		var e, t, n = Jt,
			r = n.length,
			o = "value" in Zt ? Zt.value : Zt.textContent,
			a = o.length;
		for (e = 0; e < r && n[e] === o[e]; e++);
		var i = r - e;
		for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
		return en = o.slice(e, 1 < t ? 1 - t : void 0)
	}

	function nn(e) {
		var t = e.keyCode;
		return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
	}

	function rn() {
		return !0
	}

	function on() {
		return !1
	}

	function an(e) {
		function t(t, n, r, o, a) {
			for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
			return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? rn : on, this.isPropagationStopped = on, this
		}
		return z(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = rn)
			},
			stopPropagation: function () {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = rn)
			},
			persist: function () {},
			isPersistent: rn
		}), t
	}
	var ln, sn, cn, un = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		dn = an(un),
		fn = z({}, un, {
			view: 0,
			detail: 0
		}),
		pn = an(fn),
		hn = z({}, fn, {
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
			getModifierState: On,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
			},
			movementX: function (e) {
				return "movementX" in e ? e.movementX : (e !== cn && (cn && "mousemove" === e.type ? (ln = e.screenX - cn.screenX, sn = e.screenY - cn.screenY) : sn = ln = 0, cn = e), ln)
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : sn
			}
		}),
		mn = an(hn),
		gn = an(z({}, hn, {
			dataTransfer: 0
		})),
		vn = an(z({}, fn, {
			relatedTarget: 0
		})),
		yn = an(z({}, un, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})),
		bn = z({}, un, {
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		}),
		wn = an(bn),
		kn = an(z({}, un, {
			data: 0
		})),
		xn = {
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
			MozPrintableKey: "Unidentified"
		},
		Sn = {
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
			224: "Meta"
		},
		Cn = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function En(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
	}

	function On() {
		return En
	}
	var $n = z({}, fn, {
			key: function (e) {
				if (e.key) {
					var t = xn[e.key] || e.key;
					if ("Unidentified" !== t) return t
				}
				return "keypress" === e.type ? 13 === (e = nn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: On,
			charCode: function (e) {
				return "keypress" === e.type ? nn(e) : 0
			},
			keyCode: function (e) {
				return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			},
			which: function (e) {
				return "keypress" === e.type ? nn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			}
		}),
		Pn = an($n),
		jn = an(z({}, hn, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		})),
		_n = an(z({}, fn, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: On
		})),
		Rn = an(z({}, un, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})),
		Mn = z({}, hn, {
			deltaX: function (e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function (e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		Fn = an(Mn),
		Nn = [9, 13, 27, 32],
		Tn = l && "CompositionEvent" in window,
		In = null;
	l && "documentMode" in document && (In = document.documentMode);
	var Ln = l && "TextEvent" in window && !In,
		zn = l && (!Tn || In && 8 < In && 11 >= In),
		An = String.fromCharCode(32),
		Dn = !1;

	function Hn(e, t) {
		switch (e) {
			case "keyup":
				return -1 !== Nn.indexOf(t.keyCode);
			case "keydown":
				return 229 !== t.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Bn(e) {
		return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
	}
	var Un = !1;
	var Vn = {
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
		week: !0
	};

	function Wn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return "input" === t ? !!Vn[e.type] : "textarea" === t
	}

	function qn(e, t, n, r) {
		$e(r), 0 < (t = Gr(t, "onChange")).length && (n = new dn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}))
	}
	var Gn = null,
		Xn = null;

	function Kn(e) {
		Ar(e, 0)
	}

	function Qn(e) {
		if (X(xo(e))) return e
	}

	function Yn(e, t) {
		if ("change" === e) return t
	}
	var Zn = !1;
	if (l) {
		var Jn;
		if (l) {
			var er = "oninput" in document;
			if (!er) {
				var tr = document.createElement("div");
				tr.setAttribute("oninput", "return;"), er = "function" == typeof tr.oninput
			}
			Jn = er
		} else Jn = !1;
		Zn = Jn && (!document.documentMode || 9 < document.documentMode)
	}

	function nr() {
		Gn && (Gn.detachEvent("onpropertychange", rr), Xn = Gn = null)
	}

	function rr(e) {
		if ("value" === e.propertyName && Qn(Xn)) {
			var t = [];
			qn(t, Xn, e, xe(e)), Me(Kn, t)
		}
	}

	function or(e, t, n) {
		"focusin" === e ? (nr(), Xn = n, (Gn = t).attachEvent("onpropertychange", rr)) : "focusout" === e && nr()
	}

	function ar(e) {
		if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Xn)
	}

	function ir(e, t) {
		if ("click" === e) return Qn(t)
	}

	function lr(e, t) {
		if ("input" === e || "change" === e) return Qn(t)
	}
	var sr = "function" == typeof Object.is ? Object.is : function (e, t) {
		return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
	};

	function cr(e, t) {
		if (sr(e, t)) return !0;
		if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var o = n[r];
			if (!s.call(t, o) || !sr(e[o], t[o])) return !1
		}
		return !0
	}

	function ur(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function dr(e, t) {
		var n, r = ur(e);
		for (e = 0; r;) {
			if (3 === r.nodeType) {
				if (n = e + r.textContent.length, e <= t && n >= t) return {
					node: r,
					offset: t - e
				};
				e = n
			}
			e: {
				for (; r;) {
					if (r.nextSibling) {
						r = r.nextSibling;
						break e
					}
					r = r.parentNode
				}
				r = void 0
			}
			r = ur(r)
		}
	}

	function fr(e, t) {
		return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
	}

	function pr() {
		for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = "string" == typeof t.contentWindow.location.href
			} catch (r) {
				n = !1
			}
			if (!n) break;
			t = K((e = t.contentWindow).document)
		}
		return t
	}

	function hr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
	}

	function mr(e) {
		var t = pr(),
			n = e.focusedElem,
			r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
			if (null !== r && hr(n))
				if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
				e = e.getSelection();
				var o = n.textContent.length,
					a = Math.min(r.start, o);
				r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = dr(n, a);
				var i = dr(n, r);
				o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
			}
			for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
				element: e,
				left: e.scrollLeft,
				top: e.scrollTop
			});
			for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
		}
	}
	var gr = l && "documentMode" in document && 11 >= document.documentMode,
		vr = null,
		yr = null,
		br = null,
		wr = !1;

	function kr(e, t, n) {
		var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
		wr || null == vr || vr !== K(r) || ("selectionStart" in (r = vr) && hr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : r = {
			anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}, br && cr(br, r) || (br = r, 0 < (r = Gr(yr, "onSelect")).length && (t = new dn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = vr)))
	}

	function xr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
	}
	var Sr = {
			animationend: xr("Animation", "AnimationEnd"),
			animationiteration: xr("Animation", "AnimationIteration"),
			animationstart: xr("Animation", "AnimationStart"),
			transitionend: xr("Transition", "TransitionEnd")
		},
		Cr = {},
		Er = {};

	function Or(e) {
		if (Cr[e]) return Cr[e];
		if (!Sr[e]) return e;
		var t, n = Sr[e];
		for (t in n)
			if (n.hasOwnProperty(t) && t in Er) return Cr[e] = n[t];
		return e
	}
	l && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
	var $r = Or("animationend"),
		Pr = Or("animationiteration"),
		jr = Or("animationstart"),
		_r = Or("transitionend"),
		Rr = new Map,
		Mr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

	function Fr(e, t) {
		Rr.set(e, t), a(t, [e])
	}
	for (var Nr = 0; Nr < Mr.length; Nr++) {
		var Tr = Mr[Nr];
		Fr(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)))
	}
	Fr($r, "onAnimationEnd"), Fr(Pr, "onAnimationIteration"), Fr(jr, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(_r, "onTransitionEnd"), i("onMouseEnter", ["mouseout", "mouseover"]), i("onMouseLeave", ["mouseout", "mouseover"]), i("onPointerEnter", ["pointerout", "pointerover"]), i("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

	function zr(e, t, r) {
		var o = e.type || "unknown-event";
		e.currentTarget = r,
			function (e, t, r, o, a, i, l, s, c) {
				if (Be.apply(this, arguments), Le) {
					if (!Le) throw Error(n(198));
					var u = ze;
					Le = !1, ze = null, Ae || (Ae = !0, De = u)
				}
			}(o, t, void 0, e), e.currentTarget = null
	}

	function Ar(e, t) {
		t = !!(4 & t);
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				o = r.event;
			r = r.listeners;
			e: {
				var a = void 0;
				if (t)
					for (var i = r.length - 1; 0 <= i; i--) {
						var l = r[i],
							s = l.instance,
							c = l.currentTarget;
						if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
						zr(o, l, c), a = s
					} else
						for (i = 0; i < r.length; i++) {
							if (s = (l = r[i]).instance, c = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
							zr(o, l, c), a = s
						}
			}
		}
		if (Ae) throw e = De, Ae = !1, De = null, e
	}

	function Dr(e, t) {
		var n = t[vo];
		void 0 === n && (n = t[vo] = new Set);
		var r = e + "__bubble";
		n.has(r) || (Vr(t, e, 2, !1), n.add(r))
	}

	function Hr(e, t, n) {
		var r = 0;
		t && (r |= 4), Vr(n, e, r, t)
	}
	var Br = "_reactListening" + Math.random().toString(36).slice(2);

	function Ur(e) {
		if (!e[Br]) {
			e[Br] = !0, r.forEach((function (t) {
				"selectionchange" !== t && (Lr.has(t) || Hr(t, !1, e), Hr(t, !0, e))
			}));
			var t = 9 === e.nodeType ? e : e.ownerDocument;
			null === t || t[Br] || (t[Br] = !0, Hr("selectionchange", !1, t))
		}
	}

	function Vr(e, t, n, r) {
		switch (Yt(t)) {
			case 1:
				var o = qt;
				break;
			case 4:
				o = Gt;
				break;
			default:
				o = Xt
		}
		n = o.bind(null, t, n, e), o = void 0, !Ne || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
			capture: !0,
			passive: o
		}) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
			passive: o
		}) : e.addEventListener(t, n, !1)
	}

	function Wr(e, t, n, r, o) {
		var a = r;
		if (!(1 & t || 2 & t || null === r)) e: for (;;) {
			if (null === r) return;
			var i = r.tag;
			if (3 === i || 4 === i) {
				var l = r.stateNode.containerInfo;
				if (l === o || 8 === l.nodeType && l.parentNode === o) break;
				if (4 === i)
					for (i = r.return; null !== i;) {
						var s = i.tag;
						if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o)) return;
						i = i.return
					}
				for (; null !== l;) {
					if (null === (i = wo(l))) return;
					if (5 === (s = i.tag) || 6 === s) {
						r = a = i;
						continue e
					}
					l = l.parentNode
				}
			}
			r = r.return
		}
		Me((function () {
			var r = a,
				o = xe(n),
				i = [];
			e: {
				var l = Rr.get(e);
				if (void 0 !== l) {
					var s = dn,
						c = e;
					switch (e) {
						case "keypress":
							if (0 === nn(n)) break e;
						case "keydown":
						case "keyup":
							s = Pn;
							break;
						case "focusin":
							c = "focus", s = vn;
							break;
						case "focusout":
							c = "blur", s = vn;
							break;
						case "beforeblur":
						case "afterblur":
							s = vn;
							break;
						case "click":
							if (2 === n.button) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							s = mn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							s = gn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							s = _n;
							break;
						case $r:
						case Pr:
						case jr:
							s = yn;
							break;
						case _r:
							s = Rn;
							break;
						case "scroll":
							s = pn;
							break;
						case "wheel":
							s = Fn;
							break;
						case "copy":
						case "cut":
						case "paste":
							s = wn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							s = jn
					}
					var u = !!(4 & t),
						d = !u && "scroll" === e,
						f = u ? null !== l ? l + "Capture" : null : l;
					u = [];
					for (var p, h = r; null !== h;) {
						var m = (p = h).stateNode;
						if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Fe(h, f)) && u.push(qr(h, m, p)))), d) break;
						h = h.return
					}
					0 < u.length && (l = new s(l, c, null, n, o), i.push({
						event: l,
						listeners: u
					}))
				}
			}
			if (!(7 & t)) {
				if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === ke || !(c = n.relatedTarget || n.fromElement) || !wo(c) && !c[go]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? wo(c) : null) && (c !== (d = Ue(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (s = null, c = r), s !== c)) {
					if (u = mn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (u = jn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? l : xo(s), p = null == c ? l : xo(c), (l = new u(m, h + "leave", s, n, o)).target = d, l.relatedTarget = p, m = null, wo(o) === r && ((u = new u(f, h + "enter", c, n, o)).target = p, u.relatedTarget = d, m = u), d = m, s && c) e: {
						for (f = c, h = 0, p = u = s; p; p = Xr(p)) h++;
						for (p = 0, m = f; m; m = Xr(m)) p++;
						for (; 0 < h - p;) u = Xr(u),
						h--;
						for (; 0 < p - h;) f = Xr(f),
						p--;
						for (; h--;) {
							if (u === f || null !== f && u === f.alternate) break e;
							u = Xr(u), f = Xr(f)
						}
						u = null
					}
					else u = null;
					null !== s && Kr(i, l, s, u, !1), null !== c && null !== d && Kr(i, d, c, u, !0)
				}
				if ("select" === (s = (l = r ? xo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var g = Yn;
				else if (Wn(l))
					if (Zn) g = lr;
					else {
						g = ar;
						var v = or
					}
				else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = ir);
				switch (g && (g = g(e, r)) ? qn(i, g, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && te(l, "number", l.value)), v = r ? xo(r) : window, e) {
					case "focusin":
						(Wn(v) || "true" === v.contentEditable) && (vr = v, yr = r, br = null);
						break;
					case "focusout":
						br = yr = vr = null;
						break;
					case "mousedown":
						wr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						wr = !1, kr(i, n, o);
						break;
					case "selectionchange":
						if (gr) break;
					case "keydown":
					case "keyup":
						kr(i, n, o)
				}
				var y;
				if (Tn) e: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break e;
						case "compositionend":
							b = "onCompositionEnd";
							break e;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break e
					}
					b = void 0
				}
				else Un ? Hn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
				b && (zn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = tn()) : (Jt = "value" in (Zt = o) ? Zt.value : Zt.textContent, Un = !0)), 0 < (v = Gr(r, b)).length && (b = new kn(b, e, null, n, o), i.push({
					event: b,
					listeners: v
				}), y ? b.data = y : null !== (y = Bn(n)) && (b.data = y))), (y = Ln ? function (e, t) {
					switch (e) {
						case "compositionend":
							return Bn(t);
						case "keypress":
							return 32 !== t.which ? null : (Dn = !0, An);
						case "textInput":
							return (e = t.data) === An && Dn ? null : e;
						default:
							return null
					}
				}(e, n) : function (e, t) {
					if (Un) return "compositionend" === e || !Tn && Hn(e, t) ? (e = tn(), en = Jt = Zt = null, Un = !1, e) : null;
					switch (e) {
						case "paste":
						default:
							return null;
						case "keypress":
							if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
								if (t.char && 1 < t.char.length) return t.char;
								if (t.which) return String.fromCharCode(t.which)
							}
							return null;
						case "compositionend":
							return zn && "ko" !== t.locale ? null : t.data
					}
				}(e, n)) && (0 < (r = Gr(r, "onBeforeInput")).length && (o = new kn("onBeforeInput", "beforeinput", null, n, o), i.push({
					event: o,
					listeners: r
				}), o.data = y))
			}
			Ar(i, t)
		}))
	}

	function qr(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		}
	}

	function Gr(e, t) {
		for (var n = t + "Capture", r = []; null !== e;) {
			var o = e,
				a = o.stateNode;
			5 === o.tag && null !== a && (o = a, null != (a = Fe(e, n)) && r.unshift(qr(e, a, o)), null != (a = Fe(e, t)) && r.push(qr(e, a, o))), e = e.return
		}
		return r
	}

	function Xr(e) {
		if (null === e) return null;
		do {
			e = e.return
		} while (e && 5 !== e.tag);
		return e || null
	}

	function Kr(e, t, n, r, o) {
		for (var a = t._reactName, i = []; null !== n && n !== r;) {
			var l = n,
				s = l.alternate,
				c = l.stateNode;
			if (null !== s && s === r) break;
			5 === l.tag && null !== c && (l = c, o ? null != (s = Fe(n, a)) && i.unshift(qr(n, s, l)) : o || null != (s = Fe(n, a)) && i.push(qr(n, s, l))), n = n.return
		}
		0 !== i.length && e.push({
			event: t,
			listeners: i
		})
	}
	var Qr = /\r\n?/g,
		Yr = /\u0000|\uFFFD/g;

	function Zr(e) {
		return ("string" == typeof e ? e : "" + e).replace(Qr, "\n").replace(Yr, "")
	}

	function Jr(e, t, r) {
		if (t = Zr(t), Zr(e) !== t && r) throw Error(n(425))
	}

	function eo() {}
	var to = null,
		no = null;

	function ro(e, t) {
		return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
	}
	var oo = "function" == typeof setTimeout ? setTimeout : void 0,
		ao = "function" == typeof clearTimeout ? clearTimeout : void 0,
		io = "function" == typeof Promise ? Promise : void 0,
		lo = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== io ? function (e) {
			return io.resolve(null).then(e).catch(so)
		} : oo;

	function so(e) {
		setTimeout((function () {
			throw e
		}))
	}

	function co(e, t) {
		var n = t,
			r = 0;
		do {
			var o = n.nextSibling;
			if (e.removeChild(n), o && 8 === o.nodeType)
				if ("/$" === (n = o.data)) {
					if (0 === r) return e.removeChild(o), void Ut(t);
					r--
				} else "$" !== n && "$?" !== n && "$!" !== n || r++;
			n = o
		} while (n);
		Ut(t)
	}

	function uo(e) {
		for (; null != e; e = e.nextSibling) {
			var t = e.nodeType;
			if (1 === t || 3 === t) break;
			if (8 === t) {
				if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
				if ("/$" === t) return null
			}
		}
		return e
	}

	function fo(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (8 === e.nodeType) {
				var n = e.data;
				if ("$" === n || "$!" === n || "$?" === n) {
					if (0 === t) return e;
					t--
				} else "/$" === n && t++
			}
			e = e.previousSibling
		}
		return null
	}
	var po = Math.random().toString(36).slice(2),
		ho = "__reactFiber$" + po,
		mo = "__reactProps$" + po,
		go = "__reactContainer$" + po,
		vo = "__reactEvents$" + po,
		yo = "__reactListeners$" + po,
		bo = "__reactHandles$" + po;

	function wo(e) {
		var t = e[ho];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[go] || n[ho]) {
				if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
					for (e = fo(e); null !== e;) {
						if (n = e[ho]) return n;
						e = fo(e)
					}
				return t
			}
			n = (e = n).parentNode
		}
		return null
	}

	function ko(e) {
		return !(e = e[ho] || e[go]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
	}

	function xo(e) {
		if (5 === e.tag || 6 === e.tag) return e.stateNode;
		throw Error(n(33))
	}

	function So(e) {
		return e[mo] || null
	}
	var Co = [],
		Eo = -1;

	function Oo(e) {
		return {
			current: e
		}
	}

	function $o(e) {
		0 > Eo || (e.current = Co[Eo], Co[Eo] = null, Eo--)
	}

	function Po(e, t) {
		Eo++, Co[Eo] = e.current, e.current = t
	}
	var jo = {},
		_o = Oo(jo),
		Ro = Oo(!1),
		Mo = jo;

	function Fo(e, t) {
		var n = e.type.contextTypes;
		if (!n) return jo;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var o, a = {};
		for (o in n) a[o] = t[o];
		return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
	}

	function No(e) {
		return null != (e = e.childContextTypes)
	}

	function To() {
		$o(Ro), $o(_o)
	}

	function Io(e, t, r) {
		if (_o.current !== jo) throw Error(n(168));
		Po(_o, t), Po(Ro, r)
	}

	function Lo(e, t, r) {
		var o = e.stateNode;
		if (t = t.childContextTypes, "function" != typeof o.getChildContext) return r;
		for (var a in o = o.getChildContext())
			if (!(a in t)) throw Error(n(108, V(e) || "Unknown", a));
		return z({}, r, o)
	}

	function zo(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jo, Mo = _o.current, Po(_o, e), Po(Ro, Ro.current), !0
	}

	function Ao(e, t, r) {
		var o = e.stateNode;
		if (!o) throw Error(n(169));
		r ? (e = Lo(e, t, Mo), o.__reactInternalMemoizedMergedChildContext = e, $o(Ro), $o(_o), Po(_o, e)) : $o(Ro), Po(Ro, r)
	}
	var Do = null,
		Ho = !1,
		Bo = !1;

	function Uo(e) {
		null === Do ? Do = [e] : Do.push(e)
	}

	function Vo() {
		if (!Bo && null !== Do) {
			Bo = !0;
			var e = 0,
				t = wt;
			try {
				var n = Do;
				for (wt = 1; e < n.length; e++) {
					var r = n[e];
					do {
						r = r(!0)
					} while (null !== r)
				}
				Do = null, Ho = !1
			} catch (o) {
				throw null !== Do && (Do = Do.slice(e + 1)), Xe(et, Vo), o
			} finally {
				wt = t, Bo = !1
			}
		}
		return null
	}
	var Wo = [],
		qo = 0,
		Go = null,
		Xo = 0,
		Ko = [],
		Qo = 0,
		Yo = null,
		Zo = 1,
		Jo = "";

	function ea(e, t) {
		Wo[qo++] = Xo, Wo[qo++] = Go, Go = e, Xo = t
	}

	function ta(e, t, n) {
		Ko[Qo++] = Zo, Ko[Qo++] = Jo, Ko[Qo++] = Yo, Yo = e;
		var r = Zo;
		e = Jo;
		var o = 32 - lt(r) - 1;
		r &= ~(1 << o), n += 1;
		var a = 32 - lt(t) + o;
		if (30 < a) {
			var i = o - o % 5;
			a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Zo = 1 << 32 - lt(t) + o | n << o | r, Jo = a + e
		} else Zo = 1 << a | n << o | r, Jo = e
	}

	function na(e) {
		null !== e.return && (ea(e, 1), ta(e, 1, 0))
	}

	function ra(e) {
		for (; e === Go;) Go = Wo[--qo], Wo[qo] = null, Xo = Wo[--qo], Wo[qo] = null;
		for (; e === Yo;) Yo = Ko[--Qo], Ko[Qo] = null, Jo = Ko[--Qo], Ko[Qo] = null, Zo = Ko[--Qo], Ko[Qo] = null
	}
	var oa = null,
		aa = null,
		ia = !1,
		la = null;

	function sa(e, t) {
		var n = Mc(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
	}

	function ca(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, oa = e, aa = uo(t.firstChild), !0);
			case 6:
				return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, oa = e, aa = null, !0);
			case 13:
				return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Yo ? {
					id: Zo,
					overflow: Jo
				} : null, e.memoizedState = {
					dehydrated: t,
					treeContext: n,
					retryLane: 1073741824
				}, (n = Mc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, oa = e, aa = null, !0);
			default:
				return !1
		}
	}

	function ua(e) {
		return !(!(1 & e.mode) || 128 & e.flags)
	}

	function da(e) {
		if (ia) {
			var t = aa;
			if (t) {
				var r = t;
				if (!ca(e, t)) {
					if (ua(e)) throw Error(n(418));
					t = uo(r.nextSibling);
					var o = oa;
					t && ca(e, t) ? sa(o, r) : (e.flags = -4097 & e.flags | 2, ia = !1, oa = e)
				}
			} else {
				if (ua(e)) throw Error(n(418));
				e.flags = -4097 & e.flags | 2, ia = !1, oa = e
			}
		}
	}

	function fa(e) {
		for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
		oa = e
	}

	function pa(e) {
		if (e !== oa) return !1;
		if (!ia) return fa(e), ia = !0, !1;
		var t;
		if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ro(e.type, e.memoizedProps)), t && (t = aa)) {
			if (ua(e)) throw ha(), Error(n(418));
			for (; t;) sa(e, t), t = uo(t.nextSibling)
		}
		if (fa(e), 13 === e.tag) {
			if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(n(317));
			e: {
				for (e = e.nextSibling, t = 0; e;) {
					if (8 === e.nodeType) {
						var r = e.data;
						if ("/$" === r) {
							if (0 === t) {
								aa = uo(e.nextSibling);
								break e
							}
							t--
						} else "$" !== r && "$!" !== r && "$?" !== r || t++
					}
					e = e.nextSibling
				}
				aa = null
			}
		} else aa = oa ? uo(e.stateNode.nextSibling) : null;
		return !0
	}

	function ha() {
		for (var e = aa; e;) e = uo(e.nextSibling)
	}

	function ma() {
		aa = oa = null, ia = !1
	}

	function ga(e) {
		null === la ? la = [e] : la.push(e)
	}
	var va = y.ReactCurrentBatchConfig;

	function ya(e, t, r) {
		if (null !== (e = r.ref) && "function" != typeof e && "object" != typeof e) {
			if (r._owner) {
				if (r = r._owner) {
					if (1 !== r.tag) throw Error(n(309));
					var o = r.stateNode
				}
				if (!o) throw Error(n(147, e));
				var a = o,
					i = "" + e;
				return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function (e) {
					var t = a.refs;
					null === e ? delete t[i] : t[i] = e
				})._stringRef = i, t)
			}
			if ("string" != typeof e) throw Error(n(284));
			if (!r._owner) throw Error(n(290, e))
		}
		return e
	}

	function ba(e, t) {
		throw e = Object.prototype.toString.call(t), Error(n(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
	}

	function wa(e) {
		return (0, e._init)(e._payload)
	}

	function ka(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
			}
		}

		function r(n, r) {
			if (!e) return null;
			for (; null !== r;) t(n, r), r = r.sibling;
			return null
		}

		function o(e, t) {
			for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
			return e
		}

		function a(e, t) {
			return (e = Nc(e, t)).index = 0, e.sibling = null, e
		}

		function i(t, n, r) {
			return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
		}

		function l(t) {
			return e && null === t.alternate && (t.flags |= 2), t
		}

		function s(e, t, n, r) {
			return null === t || 6 !== t.tag ? ((t = zc(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
		}

		function c(e, t, n, r) {
			var o = n.type;
			return o === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === F && wa(o) === t.type) ? ((r = a(t, n.props)).ref = ya(e, t, n), r.return = e, r) : ((r = Tc(n.type, n.key, n.props, null, e.mode, r)).ref = ya(e, t, n), r.return = e, r)
		}

		function u(e, t, n, r) {
			return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ac(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
		}

		function d(e, t, n, r, o) {
			return null === t || 7 !== t.tag ? ((t = Ic(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
		}

		function f(e, t, n) {
			if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = zc("" + t, e.mode, n)).return = e, t;
			if ("object" == typeof t && null !== t) {
				switch (t.$$typeof) {
					case b:
						return (n = Tc(t.type, t.key, t.props, null, e.mode, n)).ref = ya(e, null, t), n.return = e, n;
					case w:
						return (t = Ac(t, e.mode, n)).return = e, t;
					case F:
						return f(e, (0, t._init)(t._payload), n)
				}
				if (ne(t) || I(t)) return (t = Ic(t, e.mode, n, null)).return = e, t;
				ba(e, t)
			}
			return null
		}

		function p(e, t, n, r) {
			var o = null !== t ? t.key : null;
			if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
			if ("object" == typeof n && null !== n) {
				switch (n.$$typeof) {
					case b:
						return n.key === o ? c(e, t, n, r) : null;
					case w:
						return n.key === o ? u(e, t, n, r) : null;
					case F:
						return p(e, t, (o = n._init)(n._payload), r)
				}
				if (ne(n) || I(n)) return null !== o ? null : d(e, t, n, r, null);
				ba(e, n)
			}
			return null
		}

		function h(e, t, n, r, o) {
			if ("string" == typeof r && "" !== r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, o);
			if ("object" == typeof r && null !== r) {
				switch (r.$$typeof) {
					case b:
						return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
					case w:
						return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
					case F:
						return h(e, t, n, (0, r._init)(r._payload), o)
				}
				if (ne(r) || I(r)) return d(t, e = e.get(n) || null, r, o, null);
				ba(t, r)
			}
			return null
		}
		return function s(c, u, d, m) {
			if ("object" == typeof d && null !== d && d.type === k && null === d.key && (d = d.props.children), "object" == typeof d && null !== d) {
				switch (d.$$typeof) {
					case b:
						e: {
							for (var g = d.key, v = u; null !== v;) {
								if (v.key === g) {
									if ((g = d.type) === k) {
										if (7 === v.tag) {
											r(c, v.sibling), (u = a(v, d.props.children)).return = c, c = u;
											break e
										}
									} else if (v.elementType === g || "object" == typeof g && null !== g && g.$$typeof === F && wa(g) === v.type) {
										r(c, v.sibling), (u = a(v, d.props)).ref = ya(c, v, d), u.return = c, c = u;
										break e
									}
									r(c, v);
									break
								}
								t(c, v), v = v.sibling
							}
							d.type === k ? ((u = Ic(d.props.children, c.mode, m, d.key)).return = c, c = u) : ((m = Tc(d.type, d.key, d.props, null, c.mode, m)).ref = ya(c, u, d), m.return = c, c = m)
						}
						return l(c);
					case w:
						e: {
							for (v = d.key; null !== u;) {
								if (u.key === v) {
									if (4 === u.tag && u.stateNode.containerInfo === d.containerInfo && u.stateNode.implementation === d.implementation) {
										r(c, u.sibling), (u = a(u, d.children || [])).return = c, c = u;
										break e
									}
									r(c, u);
									break
								}
								t(c, u), u = u.sibling
							}(u = Ac(d, c.mode, m)).return = c,
							c = u
						}
						return l(c);
					case F:
						return s(c, u, (v = d._init)(d._payload), m)
				}
				if (ne(d)) return function (n, a, l, s) {
					for (var c = null, u = null, d = a, m = a = 0, g = null; null !== d && m < l.length; m++) {
						d.index > m ? (g = d, d = null) : g = d.sibling;
						var v = p(n, d, l[m], s);
						if (null === v) {
							null === d && (d = g);
							break
						}
						e && d && null === v.alternate && t(n, d), a = i(v, a, m), null === u ? c = v : u.sibling = v, u = v, d = g
					}
					if (m === l.length) return r(n, d), ia && ea(n, m), c;
					if (null === d) {
						for (; m < l.length; m++) null !== (d = f(n, l[m], s)) && (a = i(d, a, m), null === u ? c = d : u.sibling = d, u = d);
						return ia && ea(n, m), c
					}
					for (d = o(n, d); m < l.length; m++) null !== (g = h(d, n, m, l[m], s)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), a = i(g, a, m), null === u ? c = g : u.sibling = g, u = g);
					return e && d.forEach((function (e) {
						return t(n, e)
					})), ia && ea(n, m), c
				}(c, u, d, m);
				if (I(d)) return function (a, l, s, c) {
					var u = I(s);
					if ("function" != typeof u) throw Error(n(150));
					if (null == (s = u.call(s))) throw Error(n(151));
					for (var d = u = null, m = l, g = l = 0, v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
						m.index > g ? (v = m, m = null) : v = m.sibling;
						var b = p(a, m, y.value, c);
						if (null === b) {
							null === m && (m = v);
							break
						}
						e && m && null === b.alternate && t(a, m), l = i(b, l, g), null === d ? u = b : d.sibling = b, d = b, m = v
					}
					if (y.done) return r(a, m), ia && ea(a, g), u;
					if (null === m) {
						for (; !y.done; g++, y = s.next()) null !== (y = f(a, y.value, c)) && (l = i(y, l, g), null === d ? u = y : d.sibling = y, d = y);
						return ia && ea(a, g), u
					}
					for (m = o(a, m); !y.done; g++, y = s.next()) null !== (y = h(m, a, g, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), l = i(y, l, g), null === d ? u = y : d.sibling = y, d = y);
					return e && m.forEach((function (e) {
						return t(a, e)
					})), ia && ea(a, g), u
				}(c, u, d, m);
				ba(c, d)
			}
			return "string" == typeof d && "" !== d || "number" == typeof d ? (d = "" + d, null !== u && 6 === u.tag ? (r(c, u.sibling), (u = a(u, d)).return = c, c = u) : (r(c, u), (u = zc(d, c.mode, m)).return = c, c = u), l(c)) : r(c, u)
		}
	}
	var xa = ka(!0),
		Sa = ka(!1),
		Ca = Oo(null),
		Ea = null,
		Oa = null,
		$a = null;

	function Pa() {
		$a = Oa = Ea = null
	}

	function ja(e) {
		var t = Ca.current;
		$o(Ca), e._currentValue = t
	}

	function _a(e, t, n) {
		for (; null !== e;) {
			var r = e.alternate;
			if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
			e = e.return
		}
	}

	function Ra(e, t) {
		Ea = e, $a = Oa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wl = !0), e.firstContext = null)
	}

	function Ma(e) {
		var t = e._currentValue;
		if ($a !== e)
			if (e = {
					context: e,
					memoizedValue: t,
					next: null
				}, null === Oa) {
				if (null === Ea) throw Error(n(308));
				Oa = e, Ea.dependencies = {
					lanes: 0,
					firstContext: e
				}
			} else Oa = Oa.next = e;
		return t
	}
	var Fa = null;

	function Na(e) {
		null === Fa ? Fa = [e] : Fa.push(e)
	}

	function Ta(e, t, n, r) {
		var o = t.interleaved;
		return null === o ? (n.next = n, Na(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ia(e, r)
	}

	function Ia(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
		return 3 === n.tag ? n.stateNode : null
	}
	var La = !1;

	function za(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		}
	}

	function Aa(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		})
	}

	function Da(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function Ha(e, t, n) {
		var r = e.updateQueue;
		if (null === r) return null;
		if (r = r.shared, 2 & js) {
			var o = r.pending;
			return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ia(e, n)
		}
		return null === (o = r.interleaved) ? (t.next = t, Na(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ia(e, n)
	}

	function Ba(e, t, n) {
		if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
			var r = t.lanes;
			n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
		}
	}

	function Ua(e, t) {
		var n = e.updateQueue,
			r = e.alternate;
		if (null !== r && n === (r = r.updateQueue)) {
			var o = null,
				a = null;
			if (null !== (n = n.firstBaseUpdate)) {
				do {
					var i = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null
					};
					null === a ? o = a = i : a = a.next = i, n = n.next
				} while (null !== n);
				null === a ? o = a = t : a = a.next = t
			} else o = a = t;
			return n = {
				baseState: r.baseState,
				firstBaseUpdate: o,
				lastBaseUpdate: a,
				shared: r.shared,
				effects: r.effects
			}, void(e.updateQueue = n)
		}
		null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
	}

	function Va(e, t, n, r) {
		var o = e.updateQueue;
		La = !1;
		var a = o.firstBaseUpdate,
			i = o.lastBaseUpdate,
			l = o.shared.pending;
		if (null !== l) {
			o.shared.pending = null;
			var s = l,
				c = s.next;
			s.next = null, null === i ? a = c : i.next = c, i = s;
			var u = e.alternate;
			null !== u && ((l = (u = u.updateQueue).lastBaseUpdate) !== i && (null === l ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = s))
		}
		if (null !== a) {
			var d = o.baseState;
			for (i = 0, u = c = s = null, l = a;;) {
				var f = l.lane,
					p = l.eventTime;
				if ((r & f) === f) {
					null !== u && (u = u.next = {
						eventTime: p,
						lane: 0,
						tag: l.tag,
						payload: l.payload,
						callback: l.callback,
						next: null
					});
					e: {
						var h = e,
							m = l;
						switch (f = t, p = n, m.tag) {
							case 1:
								if ("function" == typeof (h = m.payload)) {
									d = h.call(p, d, f);
									break e
								}
								d = h;
								break e;
							case 3:
								h.flags = -65537 & h.flags | 128;
							case 0:
								if (null == (f = "function" == typeof (h = m.payload) ? h.call(p, d, f) : h)) break e;
								d = z({}, d, f);
								break e;
							case 2:
								La = !0
						}
					}
					null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l))
				} else p = {
					eventTime: p,
					lane: f,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null
				}, null === u ? (c = u = p, s = d) : u = u.next = p, i |= f;
				if (null === (l = l.next)) {
					if (null === (l = o.shared.pending)) break;
					l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
				}
			}
			if (null === u && (s = d), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = u, null !== (t = o.shared.interleaved)) {
				o = t;
				do {
					i |= o.lane, o = o.next
				} while (o !== t)
			} else null === a && (o.shared.lanes = 0);
			Ls |= i, e.lanes = i, e.memoizedState = d
		}
	}

	function Wa(e, t, r) {
		if (e = t.effects, t.effects = null, null !== e)
			for (t = 0; t < e.length; t++) {
				var o = e[t],
					a = o.callback;
				if (null !== a) {
					if (o.callback = null, o = r, "function" != typeof a) throw Error(n(191, a));
					a.call(o)
				}
			}
	}
	var qa = {},
		Ga = Oo(qa),
		Xa = Oo(qa),
		Ka = Oo(qa);

	function Qa(e) {
		if (e === qa) throw Error(n(174));
		return e
	}

	function Ya(e, t) {
		switch (Po(Ka, t), Po(Xa, e), Po(Ga, qa), e = t.nodeType) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : ce(null, "");
				break;
			default:
				t = ce(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
		}
		$o(Ga), Po(Ga, t)
	}

	function Za() {
		$o(Ga), $o(Xa), $o(Ka)
	}

	function Ja(e) {
		Qa(Ka.current);
		var t = Qa(Ga.current),
			n = ce(t, e.type);
		t !== n && (Po(Xa, e), Po(Ga, n))
	}

	function ei(e) {
		Xa.current === e && ($o(Ga), $o(Xa))
	}
	var ti = Oo(0);

	function ni(e) {
		for (var t = e; null !== t;) {
			if (13 === t.tag) {
				var n = t.memoizedState;
				if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
			} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
				if (128 & t.flags) return t
			} else if (null !== t.child) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; null === t.sibling;) {
				if (null === t.return || t.return === e) return null;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		return null
	}
	var ri = [];

	function oi() {
		for (var e = 0; e < ri.length; e++) ri[e]._workInProgressVersionPrimary = null;
		ri.length = 0
	}
	var ai = y.ReactCurrentDispatcher,
		ii = y.ReactCurrentBatchConfig,
		li = 0,
		si = null,
		ci = null,
		ui = null,
		di = !1,
		fi = !1,
		pi = 0,
		hi = 0;

	function mi() {
		throw Error(n(321))
	}

	function gi(e, t) {
		if (null === t) return !1;
		for (var n = 0; n < t.length && n < e.length; n++)
			if (!sr(e[n], t[n])) return !1;
		return !0
	}

	function vi(e, t, r, o, a, i) {
		if (li = i, si = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ai.current = null === e || null === e.memoizedState ? el : tl, e = r(o, a), fi) {
			i = 0;
			do {
				if (fi = !1, pi = 0, 25 <= i) throw Error(n(301));
				i += 1, ui = ci = null, t.updateQueue = null, ai.current = nl, e = r(o, a)
			} while (fi)
		}
		if (ai.current = Ji, t = null !== ci && null !== ci.next, li = 0, ui = ci = si = null, di = !1, t) throw Error(n(300));
		return e
	}

	function yi() {
		var e = 0 !== pi;
		return pi = 0, e
	}

	function bi() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return null === ui ? si.memoizedState = ui = e : ui = ui.next = e, ui
	}

	function wi() {
		if (null === ci) {
			var e = si.alternate;
			e = null !== e ? e.memoizedState : null
		} else e = ci.next;
		var t = null === ui ? si.memoizedState : ui.next;
		if (null !== t) ui = t, ci = e;
		else {
			if (null === e) throw Error(n(310));
			e = {
				memoizedState: (ci = e).memoizedState,
				baseState: ci.baseState,
				baseQueue: ci.baseQueue,
				queue: ci.queue,
				next: null
			}, null === ui ? si.memoizedState = ui = e : ui = ui.next = e
		}
		return ui
	}

	function ki(e, t) {
		return "function" == typeof t ? t(e) : t
	}

	function xi(e) {
		var t = wi(),
			r = t.queue;
		if (null === r) throw Error(n(311));
		r.lastRenderedReducer = e;
		var o = ci,
			a = o.baseQueue,
			i = r.pending;
		if (null !== i) {
			if (null !== a) {
				var l = a.next;
				a.next = i.next, i.next = l
			}
			o.baseQueue = a = i, r.pending = null
		}
		if (null !== a) {
			i = a.next, o = o.baseState;
			var s = l = null,
				c = null,
				u = i;
			do {
				var d = u.lane;
				if ((li & d) === d) null !== c && (c = c.next = {
					lane: 0,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}), o = u.hasEagerState ? u.eagerState : e(o, u.action);
				else {
					var f = {
						lane: d,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					};
					null === c ? (s = c = f, l = o) : c = c.next = f, si.lanes |= d, Ls |= d
				}
				u = u.next
			} while (null !== u && u !== i);
			null === c ? l = o : c.next = s, sr(o, t.memoizedState) || (wl = !0), t.memoizedState = o, t.baseState = l, t.baseQueue = c, r.lastRenderedState = o
		}
		if (null !== (e = r.interleaved)) {
			a = e;
			do {
				i = a.lane, si.lanes |= i, Ls |= i, a = a.next
			} while (a !== e)
		} else null === a && (r.lanes = 0);
		return [t.memoizedState, r.dispatch]
	}

	function Si(e) {
		var t = wi(),
			r = t.queue;
		if (null === r) throw Error(n(311));
		r.lastRenderedReducer = e;
		var o = r.dispatch,
			a = r.pending,
			i = t.memoizedState;
		if (null !== a) {
			r.pending = null;
			var l = a = a.next;
			do {
				i = e(i, l.action), l = l.next
			} while (l !== a);
			sr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), r.lastRenderedState = i
		}
		return [i, o]
	}

	function Ci() {}

	function Ei(e, t) {
		var r = si,
			o = wi(),
			a = t(),
			i = !sr(o.memoizedState, a);
		if (i && (o.memoizedState = a, wl = !0), o = o.queue, Li(Pi.bind(null, r, o, e), [e]), o.getSnapshot !== t || i || null !== ui && 1 & ui.memoizedState.tag) {
			if (r.flags |= 2048, Mi(9, $i.bind(null, r, o, a, t), void 0, null), null === _s) throw Error(n(349));
			30 & li || Oi(r, t, a)
		}
		return a
	}

	function Oi(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, null === (t = si.updateQueue) ? (t = {
			lastEffect: null,
			stores: null
		}, si.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
	}

	function $i(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ji(t) && _i(e)
	}

	function Pi(e, t, n) {
		return n((function () {
			ji(t) && _i(e)
		}))
	}

	function ji(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !sr(e, n)
		} catch (r) {
			return !0
		}
	}

	function _i(e) {
		var t = Ia(e, 1);
		null !== t && rc(t, e, 1, -1)
	}

	function Ri(e) {
		var t = bi();
		return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ki,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = Ki.bind(null, si, e), [t.memoizedState, e]
	}

	function Mi(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, null === (t = si.updateQueue) ? (t = {
			lastEffect: null,
			stores: null
		}, si.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
	}

	function Fi() {
		return wi().memoizedState
	}

	function Ni(e, t, n, r) {
		var o = bi();
		si.flags |= e, o.memoizedState = Mi(1 | t, n, void 0, void 0 === r ? null : r)
	}

	function Ti(e, t, n, r) {
		var o = wi();
		r = void 0 === r ? null : r;
		var a = void 0;
		if (null !== ci) {
			var i = ci.memoizedState;
			if (a = i.destroy, null !== r && gi(r, i.deps)) return void(o.memoizedState = Mi(t, n, a, r))
		}
		si.flags |= e, o.memoizedState = Mi(1 | t, n, a, r)
	}

	function Ii(e, t) {
		return Ni(8390656, 8, e, t)
	}

	function Li(e, t) {
		return Ti(2048, 8, e, t)
	}

	function zi(e, t) {
		return Ti(4, 2, e, t)
	}

	function Ai(e, t) {
		return Ti(4, 4, e, t)
	}

	function Di(e, t) {
		return "function" == typeof t ? (e = e(), t(e), function () {
			t(null)
		}) : null != t ? (e = e(), t.current = e, function () {
			t.current = null
		}) : void 0
	}

	function Hi(e, t, n) {
		return n = null != n ? n.concat([e]) : null, Ti(4, 4, Di.bind(null, t, e), n)
	}

	function Bi() {}

	function Ui(e, t) {
		var n = wi();
		t = void 0 === t ? null : t;
		var r = n.memoizedState;
		return null !== r && null !== t && gi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
	}

	function Vi(e, t) {
		var n = wi();
		t = void 0 === t ? null : t;
		var r = n.memoizedState;
		return null !== r && null !== t && gi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
	}

	function Wi(e, t, n) {
		return 21 & li ? (sr(n, t) || (n = gt(), si.lanes |= n, Ls |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n)
	}

	function qi(e, t) {
		var n = wt;
		wt = 0 !== n && 4 > n ? n : 4, e(!0);
		var r = ii.transition;
		ii.transition = {};
		try {
			e(!1), t()
		} finally {
			wt = n, ii.transition = r
		}
	}

	function Gi() {
		return wi().memoizedState
	}

	function Xi(e, t, n) {
		var r = nc(e);
		if (n = {
				lane: r,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, Qi(e)) Yi(t, n);
		else if (null !== (n = Ta(e, t, n, r))) {
			rc(n, e, r, tc()), Zi(n, t, r)
		}
	}

	function Ki(e, t, n) {
		var r = nc(e),
			o = {
				lane: r,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
		if (Qi(e)) Yi(t, o);
		else {
			var a = e.alternate;
			if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
				var i = t.lastRenderedState,
					l = a(i, n);
				if (o.hasEagerState = !0, o.eagerState = l, sr(l, i)) {
					var s = t.interleaved;
					return null === s ? (o.next = o, Na(t)) : (o.next = s.next, s.next = o), void(t.interleaved = o)
				}
			} catch (c) {}
			null !== (n = Ta(e, t, o, r)) && (rc(n, e, r, o = tc()), Zi(n, t, r))
		}
	}

	function Qi(e) {
		var t = e.alternate;
		return e === si || null !== t && t === si
	}

	function Yi(e, t) {
		fi = di = !0;
		var n = e.pending;
		null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
	}

	function Zi(e, t, n) {
		if (4194240 & n) {
			var r = t.lanes;
			n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
		}
	}
	var Ji = {
			readContext: Ma,
			useCallback: mi,
			useContext: mi,
			useEffect: mi,
			useImperativeHandle: mi,
			useInsertionEffect: mi,
			useLayoutEffect: mi,
			useMemo: mi,
			useReducer: mi,
			useRef: mi,
			useState: mi,
			useDebugValue: mi,
			useDeferredValue: mi,
			useTransition: mi,
			useMutableSource: mi,
			useSyncExternalStore: mi,
			useId: mi,
			unstable_isNewReconciler: !1
		},
		el = {
			readContext: Ma,
			useCallback: function (e, t) {
				return bi().memoizedState = [e, void 0 === t ? null : t], e
			},
			useContext: Ma,
			useEffect: Ii,
			useImperativeHandle: function (e, t, n) {
				return n = null != n ? n.concat([e]) : null, Ni(4194308, 4, Di.bind(null, t, e), n)
			},
			useLayoutEffect: function (e, t) {
				return Ni(4194308, 4, e, t)
			},
			useInsertionEffect: function (e, t) {
				return Ni(4, 2, e, t)
			},
			useMemo: function (e, t) {
				var n = bi();
				return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
			},
			useReducer: function (e, t, n) {
				var r = bi();
				return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t
				}, r.queue = e, e = e.dispatch = Xi.bind(null, si, e), [r.memoizedState, e]
			},
			useRef: function (e) {
				return e = {
					current: e
				}, bi().memoizedState = e
			},
			useState: Ri,
			useDebugValue: Bi,
			useDeferredValue: function (e) {
				return bi().memoizedState = e
			},
			useTransition: function () {
				var e = Ri(!1),
					t = e[0];
				return e = qi.bind(null, e[1]), bi().memoizedState = e, [t, e]
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (e, t, r) {
				var o = si,
					a = bi();
				if (ia) {
					if (void 0 === r) throw Error(n(407));
					r = r()
				} else {
					if (r = t(), null === _s) throw Error(n(349));
					30 & li || Oi(o, t, r)
				}
				a.memoizedState = r;
				var i = {
					value: r,
					getSnapshot: t
				};
				return a.queue = i, Ii(Pi.bind(null, o, i, e), [e]), o.flags |= 2048, Mi(9, $i.bind(null, o, i, r, t), void 0, null), r
			},
			useId: function () {
				var e = bi(),
					t = _s.identifierPrefix;
				if (ia) {
					var n = Jo;
					t = ":" + t + "R" + (n = (Zo & ~(1 << 32 - lt(Zo) - 1)).toString(32) + n), 0 < (n = pi++) && (t += "H" + n.toString(32)), t += ":"
				} else t = ":" + t + "r" + (n = hi++).toString(32) + ":";
				return e.memoizedState = t
			},
			unstable_isNewReconciler: !1
		},
		tl = {
			readContext: Ma,
			useCallback: Ui,
			useContext: Ma,
			useEffect: Li,
			useImperativeHandle: Hi,
			useInsertionEffect: zi,
			useLayoutEffect: Ai,
			useMemo: Vi,
			useReducer: xi,
			useRef: Fi,
			useState: function () {
				return xi(ki)
			},
			useDebugValue: Bi,
			useDeferredValue: function (e) {
				return Wi(wi(), ci.memoizedState, e)
			},
			useTransition: function () {
				return [xi(ki)[0], wi().memoizedState]
			},
			useMutableSource: Ci,
			useSyncExternalStore: Ei,
			useId: Gi,
			unstable_isNewReconciler: !1
		},
		nl = {
			readContext: Ma,
			useCallback: Ui,
			useContext: Ma,
			useEffect: Li,
			useImperativeHandle: Hi,
			useInsertionEffect: zi,
			useLayoutEffect: Ai,
			useMemo: Vi,
			useReducer: Si,
			useRef: Fi,
			useState: function () {
				return Si(ki)
			},
			useDebugValue: Bi,
			useDeferredValue: function (e) {
				var t = wi();
				return null === ci ? t.memoizedState = e : Wi(t, ci.memoizedState, e)
			},
			useTransition: function () {
				return [Si(ki)[0], wi().memoizedState]
			},
			useMutableSource: Ci,
			useSyncExternalStore: Ei,
			useId: Gi,
			unstable_isNewReconciler: !1
		};

	function rl(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = z({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
			return t
		}
		return t
	}

	function ol(e, t, n, r) {
		n = null == (n = n(r, t = e.memoizedState)) ? t : z({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
	}
	var al = {
		isMounted: function (e) {
			return !!(e = e._reactInternals) && Ue(e) === e
		},
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var r = tc(),
				o = nc(e),
				a = Da(r, o);
			a.payload = t, null != n && (a.callback = n), null !== (t = Ha(e, a, o)) && (rc(t, e, o, r), Ba(t, e, o))
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var r = tc(),
				o = nc(e),
				a = Da(r, o);
			a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Ha(e, a, o)) && (rc(t, e, o, r), Ba(t, e, o))
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = tc(),
				r = nc(e),
				o = Da(n, r);
			o.tag = 2, null != t && (o.callback = t), null !== (t = Ha(e, o, r)) && (rc(t, e, r, n), Ba(t, e, r))
		}
	};

	function il(e, t, n, r, o, a, i) {
		return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!cr(n, r) || !cr(o, a))
	}

	function ll(e, t, n) {
		var r = !1,
			o = jo,
			a = t.contextType;
		return "object" == typeof a && null !== a ? a = Ma(a) : (o = No(t) ? Mo : _o.current, a = (r = null != (r = t.contextTypes)) ? Fo(e, o) : jo), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
	}

	function sl(e, t, n, r) {
		e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null)
	}

	function cl(e, t, n, r) {
		var o = e.stateNode;
		o.props = n, o.state = e.memoizedState, o.refs = {}, za(e);
		var a = t.contextType;
		"object" == typeof a && null !== a ? o.context = Ma(a) : (a = No(t) ? Mo : _o.current, o.context = Fo(e, a)), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (ol(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && al.enqueueReplaceState(o, o.state, null), Va(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
	}

	function ul(e, t) {
		try {
			var n = "",
				r = t;
			do {
				n += B(r), r = r.return
			} while (r);
			var o = n
		} catch (a) {
			o = "\nError generating stack: " + a.message + "\n" + a.stack
		}
		return {
			value: e,
			source: t,
			stack: o,
			digest: null
		}
	}

	function dl(e, t, n) {
		return {
			value: e,
			source: null,
			stack: null != n ? n : null,
			digest: null != t ? t : null
		}
	}

	function fl(e, t) {
		try {
			console.error(t.value)
		} catch (n) {
			setTimeout((function () {
				throw n
			}))
		}
	}
	var pl = "function" == typeof WeakMap ? WeakMap : Map;

	function hl(e, t, n) {
		(n = Da(-1, n)).tag = 3, n.payload = {
			element: null
		};
		var r = t.value;
		return n.callback = function () {
			Ws || (Ws = !0, qs = r), fl(0, t)
		}, n
	}

	function ml(e, t, n) {
		(n = Da(-1, n)).tag = 3;
		var r = e.type.getDerivedStateFromError;
		if ("function" == typeof r) {
			var o = t.value;
			n.payload = function () {
				return r(o)
			}, n.callback = function () {
				fl(0, t)
			}
		}
		var a = e.stateNode;
		return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
			fl(0, t), "function" != typeof r && (null === Gs ? Gs = new Set([this]) : Gs.add(this));
			var e = t.stack;
			this.componentDidCatch(t.value, {
				componentStack: null !== e ? e : ""
			})
		}), n
	}

	function gl(e, t, n) {
		var r = e.pingCache;
		if (null === r) {
			r = e.pingCache = new pl;
			var o = new Set;
			r.set(t, o)
		} else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
		o.has(n) || (o.add(n), e = Oc.bind(null, e, t, n), t.then(e, e))
	}

	function vl(e) {
		do {
			var t;
			if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
			e = e.return
		} while (null !== e);
		return null
	}

	function yl(e, t, n, r, o) {
		return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Da(-1, 1)).tag = 2, Ha(n, t, 1))), n.lanes |= 1), e)
	}
	var bl = y.ReactCurrentOwner,
		wl = !1;

	function kl(e, t, n, r) {
		t.child = null === e ? Sa(t, null, n, r) : xa(t, e.child, n, r)
	}

	function xl(e, t, n, r, o) {
		n = n.render;
		var a = t.ref;
		return Ra(t, o), r = vi(e, t, n, r, a, o), n = yi(), null === e || wl ? (ia && n && na(t), t.flags |= 1, kl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wl(e, t, o))
	}

	function Sl(e, t, n, r, o) {
		if (null === e) {
			var a = n.type;
			return "function" != typeof a || Fc(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Tc(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Cl(e, t, a, r, o))
		}
		if (a = e.child, 0 === (e.lanes & o)) {
			var i = a.memoizedProps;
			if ((n = null !== (n = n.compare) ? n : cr)(i, r) && e.ref === t.ref) return Wl(e, t, o)
		}
		return t.flags |= 1, (e = Nc(a, r)).ref = t.ref, e.return = t, t.child = e
	}

	function Cl(e, t, n, r, o) {
		if (null !== e) {
			var a = e.memoizedProps;
			if (cr(a, r) && e.ref === t.ref) {
				if (wl = !1, t.pendingProps = r = a, 0 === (e.lanes & o)) return t.lanes = e.lanes, Wl(e, t, o);
				131072 & e.flags && (wl = !0)
			}
		}
		return $l(e, t, n, r, o)
	}

	function El(e, t, n) {
		var r = t.pendingProps,
			o = r.children,
			a = null !== e ? e.memoizedState : null;
		if ("hidden" === r.mode)
			if (1 & t.mode) {
				if (!(1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
					baseLanes: e,
					cachePool: null,
					transitions: null
				}, t.updateQueue = null, Po(Ns, Fs), Fs |= e, null;
				t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, r = null !== a ? a.baseLanes : n, Po(Ns, Fs), Fs |= r
			} else t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, Po(Ns, Fs), Fs |= n;
		else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Po(Ns, Fs), Fs |= r;
		return kl(e, t, o, n), t.child
	}

	function Ol(e, t) {
		var n = t.ref;
		(null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
	}

	function $l(e, t, n, r, o) {
		var a = No(n) ? Mo : _o.current;
		return a = Fo(t, a), Ra(t, o), n = vi(e, t, n, r, a, o), r = yi(), null === e || wl ? (ia && r && na(t), t.flags |= 1, kl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wl(e, t, o))
	}

	function Pl(e, t, n, r, o) {
		if (No(n)) {
			var a = !0;
			zo(t)
		} else a = !1;
		if (Ra(t, o), null === t.stateNode) Vl(e, t), ll(t, n, r), cl(t, n, r, o), r = !0;
		else if (null === e) {
			var i = t.stateNode,
				l = t.memoizedProps;
			i.props = l;
			var s = i.context,
				c = n.contextType;
			"object" == typeof c && null !== c ? c = Ma(c) : c = Fo(t, c = No(n) ? Mo : _o.current);
			var u = n.getDerivedStateFromProps,
				d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
			d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== c) && sl(t, i, r, c), La = !1;
			var f = t.memoizedState;
			i.state = f, Va(t, r, i, o), s = t.memoizedState, l !== r || f !== s || Ro.current || La ? ("function" == typeof u && (ol(t, n, u, r), s = t.memoizedState), (l = La || il(t, n, l, r, f, s, c)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
		} else {
			i = t.stateNode, Aa(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : rl(t.type, l), i.props = c, d = t.pendingProps, f = i.context, "object" == typeof (s = n.contextType) && null !== s ? s = Ma(s) : s = Fo(t, s = No(n) ? Mo : _o.current);
			var p = n.getDerivedStateFromProps;
			(u = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || f !== s) && sl(t, i, r, s), La = !1, f = t.memoizedState, i.state = f, Va(t, r, i, o);
			var h = t.memoizedState;
			l !== d || f !== h || Ro.current || La ? ("function" == typeof p && (ol(t, n, p, r), h = t.memoizedState), (c = La || il(t, n, c, r, f, h, s) || !1) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
		}
		return jl(e, t, n, r, a, o)
	}

	function jl(e, t, n, r, o, a) {
		Ol(e, t);
		var i = !!(128 & t.flags);
		if (!r && !i) return o && Ao(t, n, !1), Wl(e, t, a);
		r = t.stateNode, bl.current = t;
		var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
		return t.flags |= 1, null !== e && i ? (t.child = xa(t, e.child, null, a), t.child = xa(t, null, l, a)) : kl(e, t, l, a), t.memoizedState = r.state, o && Ao(t, n, !0), t.child
	}

	function _l(e) {
		var t = e.stateNode;
		t.pendingContext ? Io(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Io(0, t.context, !1), Ya(e, t.containerInfo)
	}

	function Rl(e, t, n, r, o) {
		return ma(), ga(o), t.flags |= 256, kl(e, t, n, r), t.child
	}
	var Ml, Fl, Nl, Tl, Il = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};

	function Ll(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		}
	}

	function zl(e, t, r) {
		var o, a = t.pendingProps,
			i = ti.current,
			l = !1,
			s = !!(128 & t.flags);
		if ((o = s) || (o = (null === e || null !== e.memoizedState) && !!(2 & i)), o ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Po(ti, 1 & i), null === e) return da(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, s = {
			mode: "hidden",
			children: s
		}, 1 & a || null === l ? l = Lc(s, a, 0, null) : (l.childLanes = 0, l.pendingProps = s), e = Ic(e, a, r, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ll(r), t.memoizedState = Il, e) : Al(t, s));
		if (null !== (i = e.memoizedState) && null !== (o = i.dehydrated)) return function (e, t, r, o, a, i, l) {
			if (r) return 256 & t.flags ? (t.flags &= -257, Dl(e, t, l, o = dl(Error(n(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = o.fallback, a = t.mode, o = Lc({
				mode: "visible",
				children: o.children
			}, a, 0, null), (i = Ic(i, a, l, null)).flags |= 2, o.return = t, i.return = t, o.sibling = i, t.child = o, 1 & t.mode && xa(t, e.child, null, l), t.child.memoizedState = Ll(l), t.memoizedState = Il, i);
			if (!(1 & t.mode)) return Dl(e, t, l, null);
			if ("$!" === a.data) {
				if (o = a.nextSibling && a.nextSibling.dataset) var s = o.dgst;
				return o = s, Dl(e, t, l, o = dl(i = Error(n(419)), o, void 0))
			}
			if (s = 0 !== (l & e.childLanes), wl || s) {
				if (null !== (o = _s)) {
					switch (l & -l) {
						case 4:
							a = 2;
							break;
						case 16:
							a = 8;
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
							a = 32;
							break;
						case 536870912:
							a = 268435456;
							break;
						default:
							a = 0
					}
					0 !== (a = 0 !== (a & (o.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Ia(e, a), rc(o, e, a, -1))
				}
				return gc(), Dl(e, t, l, o = dl(Error(n(421))))
			}
			return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Pc.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, aa = uo(a.nextSibling), oa = t, ia = !0, la = null, null !== e && (Ko[Qo++] = Zo, Ko[Qo++] = Jo, Ko[Qo++] = Yo, Zo = e.id, Jo = e.overflow, Yo = t), t = Al(t, o.children), t.flags |= 4096, t)
		}(e, t, s, a, o, i, r);
		if (l) {
			l = a.fallback, s = t.mode, o = (i = e.child).sibling;
			var c = {
				mode: "hidden",
				children: a.children
			};
			return 1 & s || t.child === i ? (a = Nc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags : ((a = t.child).childLanes = 0, a.pendingProps = c, t.deletions = null), null !== o ? l = Nc(o, l) : (l = Ic(l, s, r, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, s = null === (s = e.child.memoizedState) ? Ll(r) : {
				baseLanes: s.baseLanes | r,
				cachePool: null,
				transitions: s.transitions
			}, l.memoizedState = s, l.childLanes = e.childLanes & ~r, t.memoizedState = Il, a
		}
		return e = (l = e.child).sibling, a = Nc(l, {
			mode: "visible",
			children: a.children
		}), !(1 & t.mode) && (a.lanes = r), a.return = t, a.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = a, t.memoizedState = null, a
	}

	function Al(e, t) {
		return (t = Lc({
			mode: "visible",
			children: t
		}, e.mode, 0, null)).return = e, e.child = t
	}

	function Dl(e, t, n, r) {
		return null !== r && ga(r), xa(t, e.child, null, n), (e = Al(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
	}

	function Hl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		null !== r && (r.lanes |= t), _a(e.return, t, n)
	}

	function Bl(e, t, n, r, o) {
		var a = e.memoizedState;
		null === a ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: o
		} : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
	}

	function Ul(e, t, n) {
		var r = t.pendingProps,
			o = r.revealOrder,
			a = r.tail;
		if (kl(e, t, r.children, n), 2 & (r = ti.current)) r = 1 & r | 2, t.flags |= 128;
		else {
			if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
				if (13 === e.tag) null !== e.memoizedState && Hl(e, n, t);
				else if (19 === e.tag) Hl(e, n, t);
				else if (null !== e.child) {
					e.child.return = e, e = e.child;
					continue
				}
				if (e === t) break e;
				for (; null === e.sibling;) {
					if (null === e.return || e.return === t) break e;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
			r &= 1
		}
		if (Po(ti, r), 1 & t.mode) switch (o) {
			case "forwards":
				for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === ni(e) && (o = n), n = n.sibling;
				null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bl(t, !1, o, n, a);
				break;
			case "backwards":
				for (n = null, o = t.child, t.child = null; null !== o;) {
					if (null !== (e = o.alternate) && null === ni(e)) {
						t.child = o;
						break
					}
					e = o.sibling, o.sibling = n, n = o, o = e
				}
				Bl(t, !0, n, null, a);
				break;
			case "together":
				Bl(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null
		} else t.memoizedState = null;
		return t.child
	}

	function Vl(e, t) {
		!(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
	}

	function Wl(e, t, r) {
		if (null !== e && (t.dependencies = e.dependencies), Ls |= t.lanes, 0 === (r & t.childLanes)) return null;
		if (null !== e && t.child !== e.child) throw Error(n(153));
		if (null !== t.child) {
			for (r = Nc(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = Nc(e, e.pendingProps)).return = t;
			r.sibling = null
		}
		return t.child
	}

	function ql(e, t) {
		if (!ia) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
				null === n ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
				null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
		}
	}

	function Gl(e) {
		var t = null !== e.alternate && e.alternate.child === e.child,
			n = 0,
			r = 0;
		if (t)
			for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
		else
			for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t
	}

	function Xl(e, t, r) {
		var a = t.pendingProps;
		switch (ra(t), t.tag) {
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
				return Gl(t), null;
			case 1:
			case 17:
				return No(t.type) && To(), Gl(t), null;
			case 3:
				return a = t.stateNode, Za(), $o(Ro), $o(_o), oi(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), null !== e && null !== e.child || (pa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== la && (lc(la), la = null))), Fl(e, t), Gl(t), null;
			case 5:
				ei(t);
				var i = Qa(Ka.current);
				if (r = t.type, null !== e && null != t.stateNode) Nl(e, t, r, a, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!a) {
						if (null === t.stateNode) throw Error(n(166));
						return Gl(t), null
					}
					if (e = Qa(Ga.current), pa(t)) {
						a = t.stateNode, r = t.type;
						var l = t.memoizedProps;
						switch (a[ho] = t, a[mo] = l, e = !!(1 & t.mode), r) {
							case "dialog":
								Dr("cancel", a), Dr("close", a);
								break;
							case "iframe":
							case "object":
							case "embed":
								Dr("load", a);
								break;
							case "video":
							case "audio":
								for (i = 0; i < Ir.length; i++) Dr(Ir[i], a);
								break;
							case "source":
								Dr("error", a);
								break;
							case "img":
							case "image":
							case "link":
								Dr("error", a), Dr("load", a);
								break;
							case "details":
								Dr("toggle", a);
								break;
							case "input":
								Y(a, l), Dr("invalid", a);
								break;
							case "select":
								a._wrapperState = {
									wasMultiple: !!l.multiple
								}, Dr("invalid", a);
								break;
							case "textarea":
								ae(a, l), Dr("invalid", a)
						}
						for (var s in be(r, l), i = null, l)
							if (l.hasOwnProperty(s)) {
								var c = l[s];
								"children" === s ? "string" == typeof c ? a.textContent !== c && (!0 !== l.suppressHydrationWarning && Jr(a.textContent, c, e), i = ["children", c]) : "number" == typeof c && a.textContent !== "" + c && (!0 !== l.suppressHydrationWarning && Jr(a.textContent, c, e), i = ["children", "" + c]) : o.hasOwnProperty(s) && null != c && "onScroll" === s && Dr("scroll", a)
							} switch (r) {
							case "input":
								G(a), ee(a, l, !0);
								break;
							case "textarea":
								G(a), le(a);
								break;
							case "select":
							case "option":
								break;
							default:
								"function" == typeof l.onClick && (a.onclick = eo)
						}
						a = i, t.updateQueue = a, null !== a && (t.flags |= 4)
					} else {
						s = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(r)), "http://www.w3.org/1999/xhtml" === e ? "script" === r ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof a.is ? e = s.createElement(r, {
							is: a.is
						}) : (e = s.createElement(r), "select" === r && (s = e, a.multiple ? s.multiple = !0 : a.size && (s.size = a.size))) : e = s.createElementNS(e, r), e[ho] = t, e[mo] = a, Ml(e, t, !1, !1), t.stateNode = e;
						e: {
							switch (s = we(r, a), r) {
								case "dialog":
									Dr("cancel", e), Dr("close", e), i = a;
									break;
								case "iframe":
								case "object":
								case "embed":
									Dr("load", e), i = a;
									break;
								case "video":
								case "audio":
									for (i = 0; i < Ir.length; i++) Dr(Ir[i], e);
									i = a;
									break;
								case "source":
									Dr("error", e), i = a;
									break;
								case "img":
								case "image":
								case "link":
									Dr("error", e), Dr("load", e), i = a;
									break;
								case "details":
									Dr("toggle", e), i = a;
									break;
								case "input":
									Y(e, a), i = Q(e, a), Dr("invalid", e);
									break;
								case "option":
								default:
									i = a;
									break;
								case "select":
									e._wrapperState = {
										wasMultiple: !!a.multiple
									}, i = z({}, a, {
										value: void 0
									}), Dr("invalid", e);
									break;
								case "textarea":
									ae(e, a), i = oe(e, a), Dr("invalid", e)
							}
							for (l in be(r, i), c = i)
								if (c.hasOwnProperty(l)) {
									var u = c[l];
									"style" === l ? ve(e, u) : "dangerouslySetInnerHTML" === l ? null != (u = u ? u.__html : void 0) && fe(e, u) : "children" === l ? "string" == typeof u ? ("textarea" !== r || "" !== u) && pe(e, u) : "number" == typeof u && pe(e, "" + u) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (o.hasOwnProperty(l) ? null != u && "onScroll" === l && Dr("scroll", e) : null != u && v(e, l, u, s))
								} switch (r) {
								case "input":
									G(e), ee(e, a, !1);
									break;
								case "textarea":
									G(e), le(e);
									break;
								case "option":
									null != a.value && e.setAttribute("value", "" + W(a.value));
									break;
								case "select":
									e.multiple = !!a.multiple, null != (l = a.value) ? re(e, !!a.multiple, l, !1) : null != a.defaultValue && re(e, !!a.multiple, a.defaultValue, !0);
									break;
								default:
									"function" == typeof i.onClick && (e.onclick = eo)
							}
							switch (r) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									a = !!a.autoFocus;
									break e;
								case "img":
									a = !0;
									break e;
								default:
									a = !1
							}
						}
						a && (t.flags |= 4)
					}
					null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
				}
				return Gl(t), null;
			case 6:
				if (e && null != t.stateNode) Tl(e, t, e.memoizedProps, a);
				else {
					if ("string" != typeof a && null === t.stateNode) throw Error(n(166));
					if (r = Qa(Ka.current), Qa(Ga.current), pa(t)) {
						if (a = t.stateNode, r = t.memoizedProps, a[ho] = t, (l = a.nodeValue !== r) && null !== (e = oa)) switch (e.tag) {
							case 3:
								Jr(a.nodeValue, r, !!(1 & e.mode));
								break;
							case 5:
								!0 !== e.memoizedProps.suppressHydrationWarning && Jr(a.nodeValue, r, !!(1 & e.mode))
						}
						l && (t.flags |= 4)
					} else(a = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(a))[ho] = t, t.stateNode = a
				}
				return Gl(t), null;
			case 13:
				if ($o(ti), a = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
					if (ia && null !== aa && 1 & t.mode && !(128 & t.flags)) ha(), ma(), t.flags |= 98560, l = !1;
					else if (l = pa(t), null !== a && null !== a.dehydrated) {
						if (null === e) {
							if (!l) throw Error(n(318));
							if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(n(317));
							l[ho] = t
						} else ma(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
						Gl(t), l = !1
					} else null !== la && (lc(la), la = null), l = !0;
					if (!l) return 65536 & t.flags ? t : null
				}
				return 128 & t.flags ? (t.lanes = r, t) : ((a = null !== a) !== (null !== e && null !== e.memoizedState) && a && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & ti.current ? 0 === Ts && (Ts = 3) : gc())), null !== t.updateQueue && (t.flags |= 4), Gl(t), null);
			case 4:
				return Za(), Fl(e, t), null === e && Ur(t.stateNode.containerInfo), Gl(t), null;
			case 10:
				return ja(t.type._context), Gl(t), null;
			case 19:
				if ($o(ti), null === (l = t.memoizedState)) return Gl(t), null;
				if (a = !!(128 & t.flags), null === (s = l.rendering))
					if (a) ql(l, !1);
					else {
						if (0 !== Ts || null !== e && 128 & e.flags)
							for (e = t.child; null !== e;) {
								if (null !== (s = ni(e))) {
									for (t.flags |= 128, ql(l, !1), null !== (a = s.updateQueue) && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = r, r = t.child; null !== r;) e = a, (l = r).flags &= 14680066, null === (s = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = null === e ? null : {
										lanes: e.lanes,
										firstContext: e.firstContext
									}), r = r.sibling;
									return Po(ti, 1 & ti.current | 2), t.child
								}
								e = e.sibling
							}
						null !== l.tail && Ze() > Us && (t.flags |= 128, a = !0, ql(l, !1), t.lanes = 4194304)
					}
				else {
					if (!a)
						if (null !== (e = ni(s))) {
							if (t.flags |= 128, a = !0, null !== (r = e.updateQueue) && (t.updateQueue = r, t.flags |= 4), ql(l, !0), null === l.tail && "hidden" === l.tailMode && !s.alternate && !ia) return Gl(t), null
						} else 2 * Ze() - l.renderingStartTime > Us && 1073741824 !== r && (t.flags |= 128, a = !0, ql(l, !1), t.lanes = 4194304);
					l.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (r = l.last) ? r.sibling = s : t.child = s, l.last = s)
				}
				return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ze(), t.sibling = null, r = ti.current, Po(ti, a ? 1 & r | 2 : 1 & r), t) : (Gl(t), null);
			case 22:
			case 23:
				return fc(), a = null !== t.memoizedState, null !== e && null !== e.memoizedState !== a && (t.flags |= 8192), a && 1 & t.mode ? !!(1073741824 & Fs) && (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Gl(t), null;
			case 24:
			case 25:
				return null
		}
		throw Error(n(156, t.tag))
	}

	function Kl(e, t) {
		switch (ra(t), t.tag) {
			case 1:
				return No(t.type) && To(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
			case 3:
				return Za(), $o(Ro), $o(_o), oi(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
			case 5:
				return ei(t), null;
			case 13:
				if ($o(ti), null !== (e = t.memoizedState) && null !== e.dehydrated) {
					if (null === t.alternate) throw Error(n(340));
					ma()
				}
				return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
			case 19:
				return $o(ti), null;
			case 4:
				return Za(), null;
			case 10:
				return ja(t.type._context), null;
			case 22:
			case 23:
				return fc(), null;
			default:
				return null
		}
	}
	Ml = function (e, t) {
		for (var n = t.child; null !== n;) {
			if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
			else if (4 !== n.tag && null !== n.child) {
				n.child.return = n, n = n.child;
				continue
			}
			if (n === t) break;
			for (; null === n.sibling;) {
				if (null === n.return || n.return === t) return;
				n = n.return
			}
			n.sibling.return = n.return, n = n.sibling
		}
	}, Fl = function () {}, Nl = function (e, t, n, r) {
		var a = e.memoizedProps;
		if (a !== r) {
			e = t.stateNode, Qa(Ga.current);
			var i, l = null;
			switch (n) {
				case "input":
					a = Q(e, a), r = Q(e, r), l = [];
					break;
				case "select":
					a = z({}, a, {
						value: void 0
					}), r = z({}, r, {
						value: void 0
					}), l = [];
					break;
				case "textarea":
					a = oe(e, a), r = oe(e, r), l = [];
					break;
				default:
					"function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = eo)
			}
			for (u in be(n, r), n = null, a)
				if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
					if ("style" === u) {
						var s = a[u];
						for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
					} else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (o.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
			for (u in r) {
				var c = r[u];
				if (s = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== s && (null != c || null != s))
					if ("style" === u)
						if (s) {
							for (i in s) !s.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
							for (i in c) c.hasOwnProperty(i) && s[i] !== c[i] && (n || (n = {}), n[i] = c[i])
						} else n || (l || (l = []), l.push(u, n)), n = c;
				else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (l = l || []).push(u, c)) : "children" === u ? "string" != typeof c && "number" != typeof c || (l = l || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (o.hasOwnProperty(u) ? (null != c && "onScroll" === u && Dr("scroll", e), l || s === c || (l = [])) : (l = l || []).push(u, c))
			}
			n && (l = l || []).push("style", n);
			var u = l;
			(t.updateQueue = u) && (t.flags |= 4)
		}
	}, Tl = function (e, t, n, r) {
		n !== r && (t.flags |= 4)
	};
	var Ql = !1,
		Yl = !1,
		Zl = "function" == typeof WeakSet ? WeakSet : Set,
		Jl = null;

	function es(e, t) {
		var n = e.ref;
		if (null !== n)
			if ("function" == typeof n) try {
				n(null)
			} catch (r) {
				Ec(e, t, r)
			} else n.current = null
	}

	function ts(e, t, n) {
		try {
			n()
		} catch (r) {
			Ec(e, t, r)
		}
	}
	var ns = !1;

	function rs(e, t, n) {
		var r = t.updateQueue;
		if (null !== (r = null !== r ? r.lastEffect : null)) {
			var o = r = r.next;
			do {
				if ((o.tag & e) === e) {
					var a = o.destroy;
					o.destroy = void 0, void 0 !== a && ts(t, n, a)
				}
				o = o.next
			} while (o !== r)
		}
	}

	function os(e, t) {
		if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r()
				}
				n = n.next
			} while (n !== t)
		}
	}

	function as(e) {
		var t = e.ref;
		if (null !== t) {
			var n = e.stateNode;
			e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
		}
	}

	function is(e) {
		var t = e.alternate;
		null !== t && (e.alternate = null, is(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[ho], delete t[mo], delete t[vo], delete t[yo], delete t[bo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
	}

	function ls(e) {
		return 5 === e.tag || 3 === e.tag || 4 === e.tag
	}

	function ss(e) {
		e: for (;;) {
			for (; null === e.sibling;) {
				if (null === e.return || ls(e.return)) return null;
				e = e.return
			}
			for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
				if (2 & e.flags) continue e;
				if (null === e.child || 4 === e.tag) continue e;
				e.child.return = e, e = e.child
			}
			if (!(2 & e.flags)) return e.stateNode
		}
	}

	function cs(e, t, n) {
		var r = e.tag;
		if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = eo));
		else if (4 !== r && null !== (e = e.child))
			for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n), e = e.sibling
	}

	function us(e, t, n) {
		var r = e.tag;
		if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (4 !== r && null !== (e = e.child))
			for (us(e, t, n), e = e.sibling; null !== e;) us(e, t, n), e = e.sibling
	}
	var ds = null,
		fs = !1;

	function ps(e, t, n) {
		for (n = n.child; null !== n;) hs(e, t, n), n = n.sibling
	}

	function hs(e, t, n) {
		if (it && "function" == typeof it.onCommitFiberUnmount) try {
			it.onCommitFiberUnmount(at, n)
		} catch (l) {}
		switch (n.tag) {
			case 5:
				Yl || es(n, t);
			case 6:
				var r = ds,
					o = fs;
				ds = null, ps(e, t, n), fs = o, null !== (ds = r) && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ds.removeChild(n.stateNode));
				break;
			case 18:
				null !== ds && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? co(e.parentNode, n) : 1 === e.nodeType && co(e, n), Ut(e)) : co(ds, n.stateNode));
				break;
			case 4:
				r = ds, o = fs, ds = n.stateNode.containerInfo, fs = !0, ps(e, t, n), ds = r, fs = o;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!Yl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
					o = r = r.next;
					do {
						var a = o,
							i = a.destroy;
						a = a.tag, void 0 !== i && (2 & a || 4 & a) && ts(n, t, i), o = o.next
					} while (o !== r)
				}
				ps(e, t, n);
				break;
			case 1:
				if (!Yl && (es(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
				} catch (l) {
					Ec(n, t, l)
				}
				ps(e, t, n);
				break;
			case 21:
				ps(e, t, n);
				break;
			case 22:
				1 & n.mode ? (Yl = (r = Yl) || null !== n.memoizedState, ps(e, t, n), Yl = r) : ps(e, t, n);
				break;
			default:
				ps(e, t, n)
		}
	}

	function ms(e) {
		var t = e.updateQueue;
		if (null !== t) {
			e.updateQueue = null;
			var n = e.stateNode;
			null === n && (n = e.stateNode = new Zl), t.forEach((function (t) {
				var r = jc.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r))
			}))
		}
	}

	function gs(e, t) {
		var r = t.deletions;
		if (null !== r)
			for (var o = 0; o < r.length; o++) {
				var a = r[o];
				try {
					var i = e,
						l = t,
						s = l;
					e: for (; null !== s;) {
						switch (s.tag) {
							case 5:
								ds = s.stateNode, fs = !1;
								break e;
							case 3:
							case 4:
								ds = s.stateNode.containerInfo, fs = !0;
								break e
						}
						s = s.return
					}
					if (null === ds) throw Error(n(160));
					hs(i, l, a), ds = null, fs = !1;
					var c = a.alternate;
					null !== c && (c.return = null), a.return = null
				} catch (u) {
					Ec(a, t, u)
				}
			}
		if (12854 & t.subtreeFlags)
			for (t = t.child; null !== t;) vs(t, e), t = t.sibling
	}

	function vs(e, t) {
		var r = e.alternate,
			o = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (gs(t, e), ys(e), 4 & o) {
					try {
						rs(3, e, e.return), os(3, e)
					} catch (g) {
						Ec(e, e.return, g)
					}
					try {
						rs(5, e, e.return)
					} catch (g) {
						Ec(e, e.return, g)
					}
				}
				break;
			case 1:
				gs(t, e), ys(e), 512 & o && null !== r && es(r, r.return);
				break;
			case 5:
				if (gs(t, e), ys(e), 512 & o && null !== r && es(r, r.return), 32 & e.flags) {
					var a = e.stateNode;
					try {
						pe(a, "")
					} catch (g) {
						Ec(e, e.return, g)
					}
				}
				if (4 & o && null != (a = e.stateNode)) {
					var i = e.memoizedProps,
						l = null !== r ? r.memoizedProps : i,
						s = e.type,
						c = e.updateQueue;
					if (e.updateQueue = null, null !== c) try {
						"input" === s && "radio" === i.type && null != i.name && Z(a, i), we(s, l);
						var u = we(s, i);
						for (l = 0; l < c.length; l += 2) {
							var d = c[l],
								f = c[l + 1];
							"style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? fe(a, f) : "children" === d ? pe(a, f) : v(a, d, f, u)
						}
						switch (s) {
							case "input":
								J(a, i);
								break;
							case "textarea":
								ie(a, i);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!i.multiple;
								var h = i.value;
								null != h ? re(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? re(a, !!i.multiple, i.defaultValue, !0) : re(a, !!i.multiple, i.multiple ? [] : "", !1))
						}
						a[mo] = i
					} catch (g) {
						Ec(e, e.return, g)
					}
				}
				break;
			case 6:
				if (gs(t, e), ys(e), 4 & o) {
					if (null === e.stateNode) throw Error(n(162));
					a = e.stateNode, i = e.memoizedProps;
					try {
						a.nodeValue = i
					} catch (g) {
						Ec(e, e.return, g)
					}
				}
				break;
			case 3:
				if (gs(t, e), ys(e), 4 & o && null !== r && r.memoizedState.isDehydrated) try {
					Ut(t.containerInfo)
				} catch (g) {
					Ec(e, e.return, g)
				}
				break;
			case 4:
			default:
				gs(t, e), ys(e);
				break;
			case 13:
				gs(t, e), ys(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Bs = Ze())), 4 & o && ms(e);
				break;
			case 22:
				if (d = null !== r && null !== r.memoizedState, 1 & e.mode ? (Yl = (u = Yl) || d, gs(t, e), Yl = u) : gs(t, e), ys(e), 8192 & o) {
					if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 1 & e.mode)
						for (Jl = e, d = e.child; null !== d;) {
							for (f = Jl = d; null !== Jl;) {
								switch (h = (p = Jl).child, p.tag) {
									case 0:
									case 11:
									case 14:
									case 15:
										rs(4, p, p.return);
										break;
									case 1:
										es(p, p.return);
										var m = p.stateNode;
										if ("function" == typeof m.componentWillUnmount) {
											o = p, r = p.return;
											try {
												t = o, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
											} catch (g) {
												Ec(o, r, g)
											}
										}
										break;
									case 5:
										es(p, p.return);
										break;
									case 22:
										if (null !== p.memoizedState) {
											xs(f);
											continue
										}
								}
								null !== h ? (h.return = p, Jl = h) : xs(f)
							}
							d = d.sibling
						}
					e: for (d = null, f = e;;) {
						if (5 === f.tag) {
							if (null === d) {
								d = f;
								try {
									a = f.stateNode, u ? "function" == typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, l = null != (c = f.memoizedProps.style) && c.hasOwnProperty("display") ? c.display : null, s.style.display = ge("display", l))
								} catch (g) {
									Ec(e, e.return, g)
								}
							}
						} else if (6 === f.tag) {
							if (null === d) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps
							} catch (g) {
								Ec(e, e.return, g)
							}
						} else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
							f.child.return = f, f = f.child;
							continue
						}
						if (f === e) break e;
						for (; null === f.sibling;) {
							if (null === f.return || f.return === e) break e;
							d === f && (d = null), f = f.return
						}
						d === f && (d = null), f.sibling.return = f.return, f = f.sibling
					}
				}
				break;
			case 19:
				gs(t, e), ys(e), 4 & o && ms(e);
			case 21:
		}
	}

	function ys(e) {
		var t = e.flags;
		if (2 & t) {
			try {
				e: {
					for (var r = e.return; null !== r;) {
						if (ls(r)) {
							var o = r;
							break e
						}
						r = r.return
					}
					throw Error(n(160))
				}
				switch (o.tag) {
					case 5:
						var a = o.stateNode;
						32 & o.flags && (pe(a, ""), o.flags &= -33), us(e, ss(e), a);
						break;
					case 3:
					case 4:
						var i = o.stateNode.containerInfo;
						cs(e, ss(e), i);
						break;
					default:
						throw Error(n(161))
				}
			}
			catch (l) {
				Ec(e, e.return, l)
			}
			e.flags &= -3
		}
		4096 & t && (e.flags &= -4097)
	}

	function bs(e, t, n) {
		Jl = e, ws(e)
	}

	function ws(e, t, n) {
		for (var r = !!(1 & e.mode); null !== Jl;) {
			var o = Jl,
				a = o.child;
			if (22 === o.tag && r) {
				var i = null !== o.memoizedState || Ql;
				if (!i) {
					var l = o.alternate,
						s = null !== l && null !== l.memoizedState || Yl;
					l = Ql;
					var c = Yl;
					if (Ql = i, (Yl = s) && !c)
						for (Jl = o; null !== Jl;) s = (i = Jl).child, 22 === i.tag && null !== i.memoizedState ? Ss(o) : null !== s ? (s.return = i, Jl = s) : Ss(o);
					for (; null !== a;) Jl = a, ws(a), a = a.sibling;
					Jl = o, Ql = l, Yl = c
				}
				ks(e)
			} else 8772 & o.subtreeFlags && null !== a ? (a.return = o, Jl = a) : ks(e)
		}
	}

	function ks(e) {
		for (; null !== Jl;) {
			var t = Jl;
			if (8772 & t.flags) {
				var r = t.alternate;
				try {
					if (8772 & t.flags) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Yl || os(5, t);
							break;
						case 1:
							var o = t.stateNode;
							if (4 & t.flags && !Yl)
								if (null === r) o.componentDidMount();
								else {
									var a = t.elementType === t.type ? r.memoizedProps : rl(t.type, r.memoizedProps);
									o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
								} var i = t.updateQueue;
							null !== i && Wa(t, i, o);
							break;
						case 3:
							var l = t.updateQueue;
							if (null !== l) {
								if (r = null, null !== t.child) switch (t.child.tag) {
									case 5:
									case 1:
										r = t.child.stateNode
								}
								Wa(t, l, r)
							}
							break;
						case 5:
							var s = t.stateNode;
							if (null === r && 4 & t.flags) {
								r = s;
								var c = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										c.autoFocus && r.focus();
										break;
									case "img":
										c.src && (r.src = c.src)
								}
							}
							break;
						case 6:
						case 4:
						case 12:
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						case 13:
							if (null === t.memoizedState) {
								var u = t.alternate;
								if (null !== u) {
									var d = u.memoizedState;
									if (null !== d) {
										var f = d.dehydrated;
										null !== f && Ut(f)
									}
								}
							}
							break;
						default:
							throw Error(n(163))
					}
					Yl || 512 & t.flags && as(t)
				} catch (p) {
					Ec(t, t.return, p)
				}
			}
			if (t === e) {
				Jl = null;
				break
			}
			if (null !== (r = t.sibling)) {
				r.return = t.return, Jl = r;
				break
			}
			Jl = t.return
		}
	}

	function xs(e) {
		for (; null !== Jl;) {
			var t = Jl;
			if (t === e) {
				Jl = null;
				break
			}
			var n = t.sibling;
			if (null !== n) {
				n.return = t.return, Jl = n;
				break
			}
			Jl = t.return
		}
	}

	function Ss(e) {
		for (; null !== Jl;) {
			var t = Jl;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							os(4, t)
						} catch (s) {
							Ec(t, n, s)
						}
						break;
					case 1:
						var r = t.stateNode;
						if ("function" == typeof r.componentDidMount) {
							var o = t.return;
							try {
								r.componentDidMount()
							} catch (s) {
								Ec(t, o, s)
							}
						}
						var a = t.return;
						try {
							as(t)
						} catch (s) {
							Ec(t, a, s)
						}
						break;
					case 5:
						var i = t.return;
						try {
							as(t)
						} catch (s) {
							Ec(t, i, s)
						}
				}
			} catch (s) {
				Ec(t, t.return, s)
			}
			if (t === e) {
				Jl = null;
				break
			}
			var l = t.sibling;
			if (null !== l) {
				l.return = t.return, Jl = l;
				break
			}
			Jl = t.return
		}
	}
	var Cs, Es = Math.ceil,
		Os = y.ReactCurrentDispatcher,
		$s = y.ReactCurrentOwner,
		Ps = y.ReactCurrentBatchConfig,
		js = 0,
		_s = null,
		Rs = null,
		Ms = 0,
		Fs = 0,
		Ns = Oo(0),
		Ts = 0,
		Is = null,
		Ls = 0,
		zs = 0,
		As = 0,
		Ds = null,
		Hs = null,
		Bs = 0,
		Us = 1 / 0,
		Vs = null,
		Ws = !1,
		qs = null,
		Gs = null,
		Xs = !1,
		Ks = null,
		Qs = 0,
		Ys = 0,
		Zs = null,
		Js = -1,
		ec = 0;

	function tc() {
		return 6 & js ? Ze() : -1 !== Js ? Js : Js = Ze()
	}

	function nc(e) {
		return 1 & e.mode ? 2 & js && 0 !== Ms ? Ms & -Ms : null !== va.transition ? (0 === ec && (ec = gt()), ec) : 0 !== (e = wt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type) : 1
	}

	function rc(e, t, r, o) {
		if (50 < Ys) throw Ys = 0, Zs = null, Error(n(185));
		yt(e, r, o), 2 & js && e === _s || (e === _s && (!(2 & js) && (zs |= r), 4 === Ts && sc(e, Ms)), oc(e, o), 1 === r && 0 === js && !(1 & t.mode) && (Us = Ze() + 500, Ho && Vo()))
	}

	function oc(e, t) {
		var n = e.callbackNode;
		! function (e, t) {
			for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
				var i = 31 - lt(a),
					l = 1 << i,
					s = o[i]; - 1 === s ? 0 !== (l & n) && 0 === (l & r) || (o[i] = ht(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
			}
		}(e, t);
		var r = pt(e, e === _s ? Ms : 0);
		if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (null != n && Ke(n), 1 === t) 0 === e.tag ? function (e) {
				Ho = !0, Uo(e)
			}(cc.bind(null, e)) : Uo(cc.bind(null, e)), lo((function () {
				!(6 & js) && Vo()
			})), n = null;
			else {
				switch (kt(r)) {
					case 1:
						n = et;
						break;
					case 4:
						n = tt;
						break;
					case 16:
					default:
						n = nt;
						break;
					case 536870912:
						n = ot
				}
				n = _c(n, ac.bind(null, e))
			}
			e.callbackPriority = t, e.callbackNode = n
		}
	}

	function ac(e, t) {
		if (Js = -1, ec = 0, 6 & js) throw Error(n(327));
		var r = e.callbackNode;
		if (Sc() && e.callbackNode !== r) return null;
		var o = pt(e, e === _s ? Ms : 0);
		if (0 === o) return null;
		if (30 & o || 0 !== (o & e.expiredLanes) || t) t = vc(e, o);
		else {
			t = o;
			var a = js;
			js |= 2;
			var i = mc();
			for (_s === e && Ms === t || (Vs = null, Us = Ze() + 500, pc(e, t));;) try {
				bc();
				break
			} catch (s) {
				hc(e, s)
			}
			Pa(), Os.current = i, js = a, null !== Rs ? t = 0 : (_s = null, Ms = 0, t = Ts)
		}
		if (0 !== t) {
			if (2 === t && (0 !== (a = mt(e)) && (o = a, t = ic(e, a))), 1 === t) throw r = Is, pc(e, 0), sc(e, o), oc(e, Ze()), r;
			if (6 === t) sc(e, o);
			else {
				if (a = e.current.alternate, !(30 & o || function (e) {
						for (var t = e;;) {
							if (16384 & t.flags) {
								var n = t.updateQueue;
								if (null !== n && null !== (n = n.stores))
									for (var r = 0; r < n.length; r++) {
										var o = n[r],
											a = o.getSnapshot;
										o = o.value;
										try {
											if (!sr(a(), o)) return !1
										} catch (l) {
											return !1
										}
									}
							}
							if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
							else {
								if (t === e) break;
								for (; null === t.sibling;) {
									if (null === t.return || t.return === e) return !0;
									t = t.return
								}
								t.sibling.return = t.return, t = t.sibling
							}
						}
						return !0
					}(a) || (t = vc(e, o), 2 === t && (i = mt(e), 0 !== i && (o = i, t = ic(e, i))), 1 !== t))) throw r = Is, pc(e, 0), sc(e, o), oc(e, Ze()), r;
				switch (e.finishedWork = a, e.finishedLanes = o, t) {
					case 0:
					case 1:
						throw Error(n(345));
					case 2:
					case 5:
						xc(e, Hs, Vs);
						break;
					case 3:
						if (sc(e, o), (130023424 & o) === o && 10 < (t = Bs + 500 - Ze())) {
							if (0 !== pt(e, 0)) break;
							if (((a = e.suspendedLanes) & o) !== o) {
								tc(), e.pingedLanes |= e.suspendedLanes & a;
								break
							}
							e.timeoutHandle = oo(xc.bind(null, e, Hs, Vs), t);
							break
						}
						xc(e, Hs, Vs);
						break;
					case 4:
						if (sc(e, o), (4194240 & o) === o) break;
						for (t = e.eventTimes, a = -1; 0 < o;) {
							var l = 31 - lt(o);
							i = 1 << l, (l = t[l]) > a && (a = l), o &= ~i
						}
						if (o = a, 10 < (o = (120 > (o = Ze() - o) ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Es(o / 1960)) - o)) {
							e.timeoutHandle = oo(xc.bind(null, e, Hs, Vs), o);
							break
						}
						xc(e, Hs, Vs);
						break;
					default:
						throw Error(n(329))
				}
			}
		}
		return oc(e, Ze()), e.callbackNode === r ? ac.bind(null, e) : null
	}

	function ic(e, t) {
		var n = Ds;
		return e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256), 2 !== (e = vc(e, t)) && (t = Hs, Hs = n, null !== t && lc(t)), e
	}

	function lc(e) {
		null === Hs ? Hs = e : Hs.push.apply(Hs, e)
	}

	function sc(e, t) {
		for (t &= ~As, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - lt(t),
				r = 1 << n;
			e[n] = -1, t &= ~r
		}
	}

	function cc(e) {
		if (6 & js) throw Error(n(327));
		Sc();
		var t = pt(e, 0);
		if (!(1 & t)) return oc(e, Ze()), null;
		var r = vc(e, t);
		if (0 !== e.tag && 2 === r) {
			var o = mt(e);
			0 !== o && (t = o, r = ic(e, o))
		}
		if (1 === r) throw r = Is, pc(e, 0), sc(e, t), oc(e, Ze()), r;
		if (6 === r) throw Error(n(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, xc(e, Hs, Vs), oc(e, Ze()), null
	}

	function uc(e, t) {
		var n = js;
		js |= 1;
		try {
			return e(t)
		} finally {
			0 === (js = n) && (Us = Ze() + 500, Ho && Vo())
		}
	}

	function dc(e) {
		null !== Ks && 0 === Ks.tag && !(6 & js) && Sc();
		var t = js;
		js |= 1;
		var n = Ps.transition,
			r = wt;
		try {
			if (Ps.transition = null, wt = 1, e) return e()
		} finally {
			wt = r, Ps.transition = n, !(6 & (js = t)) && Vo()
		}
	}

	function fc() {
		Fs = Ns.current, $o(Ns)
	}

	function pc(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (-1 !== n && (e.timeoutHandle = -1, ao(n)), null !== Rs)
			for (n = Rs.return; null !== n;) {
				var r = n;
				switch (ra(r), r.tag) {
					case 1:
						null != (r = r.type.childContextTypes) && To();
						break;
					case 3:
						Za(), $o(Ro), $o(_o), oi();
						break;
					case 5:
						ei(r);
						break;
					case 4:
						Za();
						break;
					case 13:
					case 19:
						$o(ti);
						break;
					case 10:
						ja(r.type._context);
						break;
					case 22:
					case 23:
						fc()
				}
				n = n.return
			}
		if (_s = e, Rs = e = Nc(e.current, null), Ms = Fs = t, Ts = 0, Is = null, As = zs = Ls = 0, Hs = Ds = null, null !== Fa) {
			for (t = 0; t < Fa.length; t++)
				if (null !== (r = (n = Fa[t]).interleaved)) {
					n.interleaved = null;
					var o = r.next,
						a = n.pending;
					if (null !== a) {
						var i = a.next;
						a.next = o, r.next = i
					}
					n.pending = r
				} Fa = null
		}
		return e
	}

	function hc(e, t) {
		for (;;) {
			var r = Rs;
			try {
				if (Pa(), ai.current = Ji, di) {
					for (var o = si.memoizedState; null !== o;) {
						var a = o.queue;
						null !== a && (a.pending = null), o = o.next
					}
					di = !1
				}
				if (li = 0, ui = ci = si = null, fi = !1, pi = 0, $s.current = null, null === r || null === r.return) {
					Ts = 1, Is = t, Rs = null;
					break
				}
				e: {
					var i = e,
						l = r.return,
						s = r,
						c = t;
					if (t = Ms, s.flags |= 32768, null !== c && "object" == typeof c && "function" == typeof c.then) {
						var u = c,
							d = s,
							f = d.tag;
						if (!(1 & d.mode || 0 !== f && 11 !== f && 15 !== f)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
						}
						var h = vl(l);
						if (null !== h) {
							h.flags &= -257, yl(h, l, s, 0, t), 1 & h.mode && gl(i, u, t), c = u;
							var m = (t = h).updateQueue;
							if (null === m) {
								var g = new Set;
								g.add(c), t.updateQueue = g
							} else m.add(c);
							break e
						}
						if (!(1 & t)) {
							gl(i, u, t), gc();
							break e
						}
						c = Error(n(426))
					} else if (ia && 1 & s.mode) {
						var v = vl(l);
						if (null !== v) {
							!(65536 & v.flags) && (v.flags |= 256), yl(v, l, s, 0, t), ga(ul(c, s));
							break e
						}
					}
					i = c = ul(c, s),
					4 !== Ts && (Ts = 2),
					null === Ds ? Ds = [i] : Ds.push(i),
					i = l;do {
						switch (i.tag) {
							case 3:
								i.flags |= 65536, t &= -t, i.lanes |= t, Ua(i, hl(0, c, t));
								break e;
							case 1:
								s = c;
								var y = i.type,
									b = i.stateNode;
								if (!(128 & i.flags || "function" != typeof y.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Gs && Gs.has(b)))) {
									i.flags |= 65536, t &= -t, i.lanes |= t, Ua(i, ml(i, s, t));
									break e
								}
						}
						i = i.return
					} while (null !== i)
				}
				kc(r)
			} catch (w) {
				t = w, Rs === r && null !== r && (Rs = r = r.return);
				continue
			}
			break
		}
	}

	function mc() {
		var e = Os.current;
		return Os.current = Ji, null === e ? Ji : e
	}

	function gc() {
		0 !== Ts && 3 !== Ts && 2 !== Ts || (Ts = 4), null === _s || !(268435455 & Ls) && !(268435455 & zs) || sc(_s, Ms)
	}

	function vc(e, t) {
		var r = js;
		js |= 2;
		var o = mc();
		for (_s === e && Ms === t || (Vs = null, pc(e, t));;) try {
			yc();
			break
		} catch (a) {
			hc(e, a)
		}
		if (Pa(), js = r, Os.current = o, null !== Rs) throw Error(n(261));
		return _s = null, Ms = 0, Ts
	}

	function yc() {
		for (; null !== Rs;) wc(Rs)
	}

	function bc() {
		for (; null !== Rs && !Qe();) wc(Rs)
	}

	function wc(e) {
		var t = Cs(e.alternate, e, Fs);
		e.memoizedProps = e.pendingProps, null === t ? kc(e) : Rs = t, $s.current = null
	}

	function kc(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, 32768 & t.flags) {
				if (null !== (n = Kl(n, t))) return n.flags &= 32767, void(Rs = n);
				if (null === e) return Ts = 6, void(Rs = null);
				e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
			} else if (null !== (n = Xl(n, t, Fs))) return void(Rs = n);
			if (null !== (t = t.sibling)) return void(Rs = t);
			Rs = t = e
		} while (null !== t);
		0 === Ts && (Ts = 5)
	}

	function xc(e, t, r) {
		var o = wt,
			a = Ps.transition;
		try {
			Ps.transition = null, wt = 1,
				function (e, t, r, o) {
					do {
						Sc()
					} while (null !== Ks);
					if (6 & js) throw Error(n(327));
					r = e.finishedWork;
					var a = e.finishedLanes;
					if (null === r) return null;
					if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(n(177));
					e.callbackNode = null, e.callbackPriority = 0;
					var i = r.lanes | r.childLanes;
					if (function (e, t) {
							var n = e.pendingLanes & ~t;
							e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
							var r = e.eventTimes;
							for (e = e.expirationTimes; 0 < n;) {
								var o = 31 - lt(n),
									a = 1 << o;
								t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
							}
						}(e, i), e === _s && (Rs = _s = null, Ms = 0), !(2064 & r.subtreeFlags) && !(2064 & r.flags) || Xs || (Xs = !0, _c(nt, (function () {
							return Sc(), null
						}))), i = !!(15990 & r.flags), !!(15990 & r.subtreeFlags) || i) {
						i = Ps.transition, Ps.transition = null;
						var l = wt;
						wt = 1;
						var s = js;
						js |= 4, $s.current = null,
							function (e, t) {
								if (to = Wt, hr(e = pr())) {
									if ("selectionStart" in e) var r = {
										start: e.selectionStart,
										end: e.selectionEnd
									};
									else e: {
										var o = (r = (r = e.ownerDocument) && r.defaultView || window).getSelection && r.getSelection();
										if (o && 0 !== o.rangeCount) {
											r = o.anchorNode;
											var a = o.anchorOffset,
												i = o.focusNode;
											o = o.focusOffset;
											try {
												r.nodeType, i.nodeType
											} catch (k) {
												r = null;
												break e
											}
											var l = 0,
												s = -1,
												c = -1,
												u = 0,
												d = 0,
												f = e,
												p = null;
											t: for (;;) {
												for (var h; f !== r || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== i || 0 !== o && 3 !== f.nodeType || (c = l + o), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
												for (;;) {
													if (f === e) break t;
													if (p === r && ++u === a && (s = l), p === i && ++d === o && (c = l), null !== (h = f.nextSibling)) break;
													p = (f = p).parentNode
												}
												f = h
											}
											r = -1 === s || -1 === c ? null : {
												start: s,
												end: c
											}
										} else r = null
									}
									r = r || {
										start: 0,
										end: 0
									}
								} else r = null;
								for (no = {
										focusedElem: e,
										selectionRange: r
									}, Wt = !1, Jl = t; null !== Jl;)
									if (e = (t = Jl).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Jl = e;
									else
										for (; null !== Jl;) {
											t = Jl;
											try {
												var m = t.alternate;
												if (1024 & t.flags) switch (t.tag) {
													case 0:
													case 11:
													case 15:
													case 5:
													case 6:
													case 4:
													case 17:
														break;
													case 1:
														if (null !== m) {
															var g = m.memoizedProps,
																v = m.memoizedState,
																y = t.stateNode,
																b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : rl(t.type, g), v);
															y.__reactInternalSnapshotBeforeUpdate = b
														}
														break;
													case 3:
														var w = t.stateNode.containerInfo;
														1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
														break;
													default:
														throw Error(n(163))
												}
											} catch (k) {
												Ec(t, t.return, k)
											}
											if (null !== (e = t.sibling)) {
												e.return = t.return, Jl = e;
												break
											}
											Jl = t.return
										}
								m = ns, ns = !1
							}(e, r), vs(r, e), mr(no), Wt = !!to, no = to = null, e.current = r, bs(r), Ye(), js = s, wt = l, Ps.transition = i
					} else e.current = r;
					if (Xs && (Xs = !1, Ks = e, Qs = a), i = e.pendingLanes, 0 === i && (Gs = null), function (e) {
							if (it && "function" == typeof it.onCommitFiberRoot) try {
								it.onCommitFiberRoot(at, e, void 0, !(128 & ~e.current.flags))
							} catch (t) {}
						}(r.stateNode), oc(e, Ze()), null !== t)
						for (o = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], o(a.value, {
							componentStack: a.stack,
							digest: a.digest
						});
					if (Ws) throw Ws = !1, e = qs, qs = null, e;
					!!(1 & Qs) && 0 !== e.tag && Sc(), i = e.pendingLanes, 1 & i ? e === Zs ? Ys++ : (Ys = 0, Zs = e) : Ys = 0, Vo()
				}(e, t, r, o)
		} finally {
			Ps.transition = a, wt = o
		}
		return null
	}

	function Sc() {
		if (null !== Ks) {
			var e = kt(Qs),
				t = Ps.transition,
				r = wt;
			try {
				if (Ps.transition = null, wt = 16 > e ? 16 : e, null === Ks) var o = !1;
				else {
					if (e = Ks, Ks = null, Qs = 0, 6 & js) throw Error(n(331));
					var a = js;
					for (js |= 4, Jl = e.current; null !== Jl;) {
						var i = Jl,
							l = i.child;
						if (16 & Jl.flags) {
							var s = i.deletions;
							if (null !== s) {
								for (var c = 0; c < s.length; c++) {
									var u = s[c];
									for (Jl = u; null !== Jl;) {
										var d = Jl;
										switch (d.tag) {
											case 0:
											case 11:
											case 15:
												rs(8, d, i)
										}
										var f = d.child;
										if (null !== f) f.return = d, Jl = f;
										else
											for (; null !== Jl;) {
												var p = (d = Jl).sibling,
													h = d.return;
												if (is(d), d === u) {
													Jl = null;
													break
												}
												if (null !== p) {
													p.return = h, Jl = p;
													break
												}
												Jl = h
											}
									}
								}
								var m = i.alternate;
								if (null !== m) {
									var g = m.child;
									if (null !== g) {
										m.child = null;
										do {
											var v = g.sibling;
											g.sibling = null, g = v
										} while (null !== g)
									}
								}
								Jl = i
							}
						}
						if (2064 & i.subtreeFlags && null !== l) l.return = i, Jl = l;
						else e: for (; null !== Jl;) {
							if (2048 & (i = Jl).flags) switch (i.tag) {
								case 0:
								case 11:
								case 15:
									rs(9, i, i.return)
							}
							var y = i.sibling;
							if (null !== y) {
								y.return = i.return, Jl = y;
								break e
							}
							Jl = i.return
						}
					}
					var b = e.current;
					for (Jl = b; null !== Jl;) {
						var w = (l = Jl).child;
						if (2064 & l.subtreeFlags && null !== w) w.return = l, Jl = w;
						else e: for (l = b; null !== Jl;) {
							if (2048 & (s = Jl).flags) try {
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										os(9, s)
								}
							} catch (x) {
								Ec(s, s.return, x)
							}
							if (s === l) {
								Jl = null;
								break e
							}
							var k = s.sibling;
							if (null !== k) {
								k.return = s.return, Jl = k;
								break e
							}
							Jl = s.return
						}
					}
					if (js = a, Vo(), it && "function" == typeof it.onPostCommitFiberRoot) try {
						it.onPostCommitFiberRoot(at, e)
					} catch (x) {}
					o = !0
				}
				return o
			} finally {
				wt = r, Ps.transition = t
			}
		}
		return !1
	}

	function Cc(e, t, n) {
		e = Ha(e, t = hl(0, t = ul(n, t), 1), 1), t = tc(), null !== e && (yt(e, 1, t), oc(e, t))
	}

	function Ec(e, t, n) {
		if (3 === e.tag) Cc(e, e, n);
		else
			for (; null !== t;) {
				if (3 === t.tag) {
					Cc(t, e, n);
					break
				}
				if (1 === t.tag) {
					var r = t.stateNode;
					if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Gs || !Gs.has(r))) {
						t = Ha(t, e = ml(t, e = ul(n, e), 1), 1), e = tc(), null !== t && (yt(t, 1, e), oc(t, e));
						break
					}
				}
				t = t.return
			}
	}

	function Oc(e, t, n) {
		var r = e.pingCache;
		null !== r && r.delete(t), t = tc(), e.pingedLanes |= e.suspendedLanes & n, _s === e && (Ms & n) === n && (4 === Ts || 3 === Ts && (130023424 & Ms) === Ms && 500 > Ze() - Bs ? pc(e, 0) : As |= n), oc(e, t)
	}

	function $c(e, t) {
		0 === t && (1 & e.mode ? (t = dt, !(130023424 & (dt <<= 1)) && (dt = 4194304)) : t = 1);
		var n = tc();
		null !== (e = Ia(e, t)) && (yt(e, t, n), oc(e, n))
	}

	function Pc(e) {
		var t = e.memoizedState,
			n = 0;
		null !== t && (n = t.retryLane), $c(e, n)
	}

	function jc(e, t) {
		var r = 0;
		switch (e.tag) {
			case 13:
				var o = e.stateNode,
					a = e.memoizedState;
				null !== a && (r = a.retryLane);
				break;
			case 19:
				o = e.stateNode;
				break;
			default:
				throw Error(n(314))
		}
		null !== o && o.delete(t), $c(e, r)
	}

	function _c(e, t) {
		return Xe(e, t)
	}

	function Rc(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function Mc(e, t, n, r) {
		return new Rc(e, t, n, r)
	}

	function Fc(e) {
		return !(!(e = e.prototype) || !e.isReactComponent)
	}

	function Nc(e, t) {
		var n = e.alternate;
		return null === n ? ((n = Mc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
	}

	function Tc(e, t, r, o, a, i) {
		var l = 2;
		if (o = e, "function" == typeof e) Fc(e) && (l = 1);
		else if ("string" == typeof e) l = 5;
		else e: switch (e) {
			case k:
				return Ic(r.children, a, i, t);
			case S:
				l = 8, a |= 8;
				break;
			case C:
				return (e = Mc(12, r, t, 2 | a)).elementType = C, e.lanes = i, e;
			case j:
				return (e = Mc(13, r, t, a)).elementType = j, e.lanes = i, e;
			case R:
				return (e = Mc(19, r, t, a)).elementType = R, e.lanes = i, e;
			case N:
				return Lc(r, a, i, t);
			default:
				if ("object" == typeof e && null !== e) switch (e.$$typeof) {
					case E:
						l = 10;
						break e;
					case O:
						l = 9;
						break e;
					case P:
						l = 11;
						break e;
					case M:
						l = 14;
						break e;
					case F:
						l = 16, o = null;
						break e
				}
				throw Error(n(130, null == e ? e : typeof e, ""))
		}
		return (t = Mc(l, r, t, a)).elementType = e, t.type = o, t.lanes = i, t
	}

	function Ic(e, t, n, r) {
		return (e = Mc(7, e, r, t)).lanes = n, e
	}

	function Lc(e, t, n, r) {
		return (e = Mc(22, e, r, t)).elementType = N, e.lanes = n, e.stateNode = {
			isHidden: !1
		}, e
	}

	function zc(e, t, n) {
		return (e = Mc(6, e, null, t)).lanes = n, e
	}

	function Ac(e, t, n) {
		return (t = Mc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}

	function Dc(e, t, n, r, o) {
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
	}

	function Hc(e, t, n, r, o, a, i, l, s) {
		return e = new Dc(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Mc(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, za(a), e
	}

	function Bc(e) {
		if (!e) return jo;
		e: {
			if (Ue(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(n(170));
			var t = e;do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break e;
					case 1:
						if (No(t.type)) {
							t = t.stateNode.__reactInternalMemoizedMergedChildContext;
							break e
						}
				}
				t = t.return
			} while (null !== t);
			throw Error(n(171))
		}
		if (1 === e.tag) {
			var r = e.type;
			if (No(r)) return Lo(e, r, t)
		}
		return t
	}

	function Uc(e, t, n, r, o, a, i, l, s) {
		return (e = Hc(n, r, !0, e, 0, a, 0, l, s)).context = Bc(null), n = e.current, (a = Da(r = tc(), o = nc(n))).callback = null != t ? t : null, Ha(n, a, o), e.current.lanes = o, yt(e, o, r), oc(e, r), e
	}

	function Vc(e, t, n, r) {
		var o = t.current,
			a = tc(),
			i = nc(o);
		return n = Bc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Da(a, i)).payload = {
			element: e
		}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ha(o, t, i)) && (rc(e, o, i, a), Ba(e, o, i)), i
	}

	function Wc(e) {
		return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
	}

	function qc(e, t) {
		if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
			var n = e.retryLane;
			e.retryLane = 0 !== n && n < t ? n : t
		}
	}

	function Gc(e, t) {
		qc(e, t), (e = e.alternate) && qc(e, t)
	}
	Cs = function (e, t, r) {
		if (null !== e)
			if (e.memoizedProps !== t.pendingProps || Ro.current) wl = !0;
			else {
				if (0 === (e.lanes & r) && !(128 & t.flags)) return wl = !1,
					function (e, t, n) {
						switch (t.tag) {
							case 3:
								_l(t), ma();
								break;
							case 5:
								Ja(t);
								break;
							case 1:
								No(t.type) && zo(t);
								break;
							case 4:
								Ya(t, t.stateNode.containerInfo);
								break;
							case 10:
								var r = t.type._context,
									o = t.memoizedProps.value;
								Po(Ca, r._currentValue), r._currentValue = o;
								break;
							case 13:
								if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Po(ti, 1 & ti.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? zl(e, t, n) : (Po(ti, 1 & ti.current), null !== (e = Wl(e, t, n)) ? e.sibling : null);
								Po(ti, 1 & ti.current);
								break;
							case 19:
								if (r = 0 !== (n & t.childLanes), 128 & e.flags) {
									if (r) return Ul(e, t, n);
									t.flags |= 128
								}
								if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Po(ti, ti.current), r) break;
								return null;
							case 22:
							case 23:
								return t.lanes = 0, El(e, t, n)
						}
						return Wl(e, t, n)
					}(e, t, r);
				wl = !!(131072 & e.flags)
			}
		else wl = !1, ia && 1048576 & t.flags && ta(t, Xo, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var o = t.type;
				Vl(e, t), e = t.pendingProps;
				var a = Fo(t, _o.current);
				Ra(t, r), a = vi(null, t, o, e, a, r);
				var i = yi();
				return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, No(o) ? (i = !0, zo(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, za(t), a.updater = al, t.stateNode = a, a._reactInternals = t, cl(t, o, e, r), t = jl(null, t, o, !0, i, r)) : (t.tag = 0, ia && i && na(t), kl(null, t, a, r), t = t.child), t;
			case 16:
				o = t.elementType;
				e: {
					switch (Vl(e, t), e = t.pendingProps, o = (a = o._init)(o._payload), t.type = o, a = t.tag = function (e) {
						if ("function" == typeof e) return Fc(e) ? 1 : 0;
						if (null != e) {
							if ((e = e.$$typeof) === P) return 11;
							if (e === M) return 14
						}
						return 2
					}(o), e = rl(o, e), a) {
						case 0:
							t = $l(null, t, o, e, r);
							break e;
						case 1:
							t = Pl(null, t, o, e, r);
							break e;
						case 11:
							t = xl(null, t, o, e, r);
							break e;
						case 14:
							t = Sl(null, t, o, rl(o.type, e), r);
							break e
					}
					throw Error(n(306, o, ""))
				}
				return t;
			case 0:
				return o = t.type, a = t.pendingProps, $l(e, t, o, a = t.elementType === o ? a : rl(o, a), r);
			case 1:
				return o = t.type, a = t.pendingProps, Pl(e, t, o, a = t.elementType === o ? a : rl(o, a), r);
			case 3:
				e: {
					if (_l(t), null === e) throw Error(n(387));o = t.pendingProps,
					a = (i = t.memoizedState).element,
					Aa(e, t),
					Va(t, o, null, r);
					var l = t.memoizedState;
					if (o = l.element, i.isDehydrated) {
						if (i = {
								element: o,
								isDehydrated: !1,
								cache: l.cache,
								pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
								transitions: l.transitions
							}, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
							t = Rl(e, t, o, r, a = ul(Error(n(423)), t));
							break e
						}
						if (o !== a) {
							t = Rl(e, t, o, r, a = ul(Error(n(424)), t));
							break e
						}
						for (aa = uo(t.stateNode.containerInfo.firstChild), oa = t, ia = !0, la = null, r = Sa(t, null, o, r), t.child = r; r;) r.flags = -3 & r.flags | 4096, r = r.sibling
					} else {
						if (ma(), o === a) {
							t = Wl(e, t, r);
							break e
						}
						kl(e, t, o, r)
					}
					t = t.child
				}
				return t;
			case 5:
				return Ja(t), null === e && da(t), o = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = a.children, ro(o, a) ? l = null : null !== i && ro(o, i) && (t.flags |= 32), Ol(e, t), kl(e, t, l, r), t.child;
			case 6:
				return null === e && da(t), null;
			case 13:
				return zl(e, t, r);
			case 4:
				return Ya(t, t.stateNode.containerInfo), o = t.pendingProps, null === e ? t.child = xa(t, null, o, r) : kl(e, t, o, r), t.child;
			case 11:
				return o = t.type, a = t.pendingProps, xl(e, t, o, a = t.elementType === o ? a : rl(o, a), r);
			case 7:
				return kl(e, t, t.pendingProps, r), t.child;
			case 8:
			case 12:
				return kl(e, t, t.pendingProps.children, r), t.child;
			case 10:
				e: {
					if (o = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Po(Ca, o._currentValue), o._currentValue = l, null !== i)
						if (sr(i.value, l)) {
							if (i.children === a.children && !Ro.current) {
								t = Wl(e, t, r);
								break e
							}
						} else
							for (null !== (i = t.child) && (i.return = t); null !== i;) {
								var s = i.dependencies;
								if (null !== s) {
									l = i.child;
									for (var c = s.firstContext; null !== c;) {
										if (c.context === o) {
											if (1 === i.tag) {
												(c = Da(-1, r & -r)).tag = 2;
												var u = i.updateQueue;
												if (null !== u) {
													var d = (u = u.shared).pending;
													null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
												}
											}
											i.lanes |= r, null !== (c = i.alternate) && (c.lanes |= r), _a(i.return, r, t), s.lanes |= r;
											break
										}
										c = c.next
									}
								} else if (10 === i.tag) l = i.type === t.type ? null : i.child;
								else if (18 === i.tag) {
									if (null === (l = i.return)) throw Error(n(341));
									l.lanes |= r, null !== (s = l.alternate) && (s.lanes |= r), _a(l, r, t), l = i.sibling
								} else l = i.child;
								if (null !== l) l.return = i;
								else
									for (l = i; null !== l;) {
										if (l === t) {
											l = null;
											break
										}
										if (null !== (i = l.sibling)) {
											i.return = l.return, l = i;
											break
										}
										l = l.return
									}
								i = l
							}
					kl(e, t, a.children, r),
					t = t.child
				}
				return t;
			case 9:
				return a = t.type, o = t.pendingProps.children, Ra(t, r), o = o(a = Ma(a)), t.flags |= 1, kl(e, t, o, r), t.child;
			case 14:
				return a = rl(o = t.type, t.pendingProps), Sl(e, t, o, a = rl(o.type, a), r);
			case 15:
				return Cl(e, t, t.type, t.pendingProps, r);
			case 17:
				return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : rl(o, a), Vl(e, t), t.tag = 1, No(o) ? (e = !0, zo(t)) : e = !1, Ra(t, r), ll(t, o, a), cl(t, o, a, r), jl(null, t, o, !0, e, r);
			case 19:
				return Ul(e, t, r);
			case 22:
				return El(e, t, r)
		}
		throw Error(n(156, t.tag))
	};
	var Xc = "function" == typeof reportError ? reportError : function (e) {
		console.error(e)
	};

	function Kc(e) {
		this._internalRoot = e
	}

	function Qc(e) {
		this._internalRoot = e
	}

	function Yc(e) {
		return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
	}

	function Zc(e) {
		return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
	}

	function Jc() {}

	function eu(e, t, n, r, o) {
		var a = n._reactRootContainer;
		if (a) {
			var i = a;
			if ("function" == typeof o) {
				var l = o;
				o = function () {
					var e = Wc(i);
					l.call(e)
				}
			}
			Vc(t, i, e, o)
		} else i = function (e, t, n, r, o) {
			if (o) {
				if ("function" == typeof r) {
					var a = r;
					r = function () {
						var e = Wc(i);
						a.call(e)
					}
				}
				var i = Uc(t, r, e, 0, null, !1, 0, "", Jc);
				return e._reactRootContainer = i, e[go] = i.current, Ur(8 === e.nodeType ? e.parentNode : e), dc(), i
			}
			for (; o = e.lastChild;) e.removeChild(o);
			if ("function" == typeof r) {
				var l = r;
				r = function () {
					var e = Wc(s);
					l.call(e)
				}
			}
			var s = Hc(e, 0, !1, null, 0, !1, 0, "", Jc);
			return e._reactRootContainer = s, e[go] = s.current, Ur(8 === e.nodeType ? e.parentNode : e), dc((function () {
				Vc(t, s, n, r)
			})), s
		}(n, t, e, o, r);
		return Wc(i)
	}
	Qc.prototype.render = Kc.prototype.render = function (e) {
		var t = this._internalRoot;
		if (null === t) throw Error(n(409));
		Vc(e, t, null, null)
	}, Qc.prototype.unmount = Kc.prototype.unmount = function () {
		var e = this._internalRoot;
		if (null !== e) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dc((function () {
				Vc(null, e, null, null)
			})), t[go] = null
		}
	}, Qc.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = Et();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++);
			Nt.splice(n, 0, e), 0 === n && zt(e)
		}
	}, xt = function (e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = ft(t.pendingLanes);
					0 !== n && (bt(t, 1 | n), oc(t, Ze()), !(6 & js) && (Us = Ze() + 500, Vo()))
				}
				break;
			case 13:
				dc((function () {
					var t = Ia(e, 1);
					if (null !== t) {
						var n = tc();
						rc(t, e, 1, n)
					}
				})), Gc(e, 1)
		}
	}, St = function (e) {
		if (13 === e.tag) {
			var t = Ia(e, 134217728);
			if (null !== t) rc(t, e, 134217728, tc());
			Gc(e, 134217728)
		}
	}, Ct = function (e) {
		if (13 === e.tag) {
			var t = nc(e),
				n = Ia(e, t);
			if (null !== n) rc(n, e, t, tc());
			Gc(e, t)
		}
	}, Et = function () {
		return wt
	}, Ot = function (e, t) {
		var n = wt;
		try {
			return wt = e, t()
		} finally {
			wt = n
		}
	}, Se = function (e, t, r) {
		switch (t) {
			case "input":
				if (J(e, r), t = r.name, "radio" === r.type && null != t) {
					for (r = e; r.parentNode;) r = r.parentNode;
					for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
						var o = r[t];
						if (o !== e && o.form === e.form) {
							var a = So(o);
							if (!a) throw Error(n(90));
							X(o), J(o, a)
						}
					}
				}
				break;
			case "textarea":
				ie(e, r);
				break;
			case "select":
				null != (t = r.value) && re(e, !!r.multiple, t, !1)
		}
	}, je = uc, _e = dc;
	var tu = {
			usingClientEntryPoint: !1,
			Events: [ko, xo, So, $e, Pe, uc]
		},
		nu = {
			findFiberByHostInstance: wo,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom"
		},
		ru = {
			bundleType: nu.bundleType,
			version: nu.version,
			rendererPackageName: nu.rendererPackageName,
			rendererConfig: nu.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: y.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return null === (e = qe(e)) ? null : e.stateNode
			},
			findFiberByHostInstance: nu.findFiberByHostInstance || function () {
				return null
			},
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
		};
	if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!ou.isDisabled && ou.supportsFiber) try {
			at = ou.inject(ru), it = ou
		} catch (de) {}
	}
	return $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, $.createPortal = function (e, t) {
		var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!Yc(t)) throw Error(n(200));
		return function (e, t, n) {
			var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {
				$$typeof: w,
				key: null == r ? null : "" + r,
				children: e,
				containerInfo: t,
				implementation: n
			}
		}(e, t, null, r)
	}, $.createRoot = function (e, t) {
		if (!Yc(e)) throw Error(n(299));
		var r = !1,
			o = "",
			a = Xc;
		return null != t && (!0 === t.unstable_strictMode && (r = !0), void 0 !== t.identifierPrefix && (o = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Hc(e, 1, !1, null, 0, r, 0, o, a), e[go] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new Kc(t)
	}, $.findDOMNode = function (e) {
		if (null == e) return null;
		if (1 === e.nodeType) return e;
		var t = e._reactInternals;
		if (void 0 === t) {
			if ("function" == typeof e.render) throw Error(n(188));
			throw e = Object.keys(e).join(","), Error(n(268, e))
		}
		return e = null === (e = qe(t)) ? null : e.stateNode
	}, $.flushSync = function (e) {
		return dc(e)
	}, $.hydrate = function (e, t, r) {
		if (!Zc(t)) throw Error(n(200));
		return eu(null, e, t, !0, r)
	}, $.hydrateRoot = function (e, t, r) {
		if (!Yc(e)) throw Error(n(405));
		var o = null != r && r.hydratedSources || null,
			a = !1,
			i = "",
			l = Xc;
		if (null != r && (!0 === r.unstable_strictMode && (a = !0), void 0 !== r.identifierPrefix && (i = r.identifierPrefix), void 0 !== r.onRecoverableError && (l = r.onRecoverableError)), t = Uc(t, null, e, 1, null != r ? r : null, a, 0, i, l), e[go] = t.current, Ur(e), o)
			for (e = 0; e < o.length; e++) a = (a = (r = o[e])._getVersion)(r._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(r, a);
		return new Qc(t)
	}, $.render = function (e, t, r) {
		if (!Zc(t)) throw Error(n(200));
		return eu(null, e, t, !1, r)
	}, $.unmountComponentAtNode = function (e) {
		if (!Zc(e)) throw Error(n(40));
		return !!e._reactRootContainer && (dc((function () {
			eu(null, null, e, !1, (function () {
				e._reactRootContainer = null, e[go] = null
			}))
		})), !0)
	}, $.unstable_batchedUpdates = uc, $.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
		if (!Zc(r)) throw Error(n(200));
		if (null == e || void 0 === e._reactInternals) throw Error(n(38));
		return eu(e, t, r, !1, o)
	}, $.version = "18.3.1-next-f1338f8080-20240426", $
}

function M() {
	if (S) return O.exports;
	return S = 1,
		function e() {
			if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
			} catch (t) {
				console.error(t)
			}
		}(), O.exports = R(), O.exports
}
var F = function () {
	if (C) return E;
	C = 1;
	var e = M();
	return E.createRoot = e.createRoot, E.hydrateRoot = e.hydrateRoot, E
}();
const N = o(F);
var T = M();
const I = o(T),
	L = e({
		__proto__: null,
		default: I
	}, [T]);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function z() {
	return z = Object.assign ? Object.assign.bind() : function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, z.apply(this, arguments)
}
var A, D;
(D = A || (A = {})).Pop = "POP", D.Push = "PUSH", D.Replace = "REPLACE";
const H = "popstate";

function B(e) {
	return void 0 === e && (e = {}),
		function (e, t, n, r) {
			void 0 === r && (r = {});
			let {
				window: o = document.defaultView,
				v5Compat: a = !1
			} = r, i = o.history, l = A.Pop, s = null, c = u();
			null == c && (c = 0, i.replaceState(z({}, i.state, {
				idx: c
			}), ""));

			function u() {
				return (i.state || {
					idx: null
				}).idx
			}

			function d() {
				l = A.Pop;
				let e = u(),
					t = null == e ? null : e - c;
				c = e, s && s({
					action: l,
					location: m.location,
					delta: t
				})
			}

			function f(e, t) {
				l = A.Push;
				let r = q(m.location, e, t);
				n && n(r, e), c = u() + 1;
				let d = W(r, c),
					f = m.createHref(r);
				try {
					i.pushState(d, "", f)
				} catch (p) {
					if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
					o.location.assign(f)
				}
				a && s && s({
					action: l,
					location: m.location,
					delta: 1
				})
			}

			function p(e, t) {
				l = A.Replace;
				let r = q(m.location, e, t);
				n && n(r, e), c = u();
				let o = W(r, c),
					d = m.createHref(r);
				i.replaceState(o, "", d), a && s && s({
					action: l,
					location: m.location,
					delta: 0
				})
			}

			function h(e) {
				let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
					n = "string" == typeof e ? e : G(e);
				return n = n.replace(/ $/, "%20"), U(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
			}
			let m = {
				get action() {
					return l
				},
				get location() {
					return e(o, i)
				},
				listen(e) {
					if (s) throw new Error("A history only accepts one active listener");
					return o.addEventListener(H, d), s = e, () => {
						o.removeEventListener(H, d), s = null
					}
				},
				createHref: e => t(o, e),
				createURL: h,
				encodeLocation(e) {
					let t = h(e);
					return {
						pathname: t.pathname,
						search: t.search,
						hash: t.hash
					}
				},
				push: f,
				replace: p,
				go: e => i.go(e)
			};
			return m
		}((function (e, t) {
			let {
				pathname: n = "/",
				search: r = "",
				hash: o = ""
			} = X(e.location.hash.substr(1));
			return n.startsWith("/") || n.startsWith(".") || (n = "/" + n), q("", {
				pathname: n,
				search: r,
				hash: o
			}, t.state && t.state.usr || null, t.state && t.state.key || "default")
		}), (function (e, t) {
			let n = e.document.querySelector("base"),
				r = "";
			if (n && n.getAttribute("href")) {
				let t = e.location.href,
					n = t.indexOf("#");
				r = -1 === n ? t : t.slice(0, n)
			}
			return r + "#" + ("string" == typeof t ? t : G(t))
		}), (function (e, t) {
			V("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
		}), e)
}

function U(e, t) {
	if (!1 === e || null == e) throw new Error(t)
}

function V(e, t) {
	if (!e) {
		"undefined" != typeof console && console.warn(t);
		try {
			throw new Error(t)
		} catch (n) {}
	}
}

function W(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function q(e, t, n, r) {
	return void 0 === n && (n = null), z({
		pathname: "string" == typeof e ? e : e.pathname,
		search: "",
		hash: ""
	}, "string" == typeof t ? X(t) : t, {
		state: n,
		key: t && t.key || r || Math.random().toString(36).substr(2, 8)
	})
}

function G(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = ""
	} = e;
	return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
}

function X(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
	}
	return t
}
var K, Q;
(Q = K || (K = {})).data = "data", Q.deferred = "deferred", Q.redirect = "redirect", Q.error = "error";
const Y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function Z(e, t, n, r) {
	return void 0 === n && (n = []), void 0 === r && (r = {}), e.map(((e, o) => {
		let a = [...n, String(o)],
			i = "string" == typeof e.id ? e.id : a.join("-");
		if (U(!0 !== e.index || !e.children, "Cannot specify children on an index route"), U(!r[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function (e) {
				return !0 === e.index
			}(e)) {
			let n = z({}, e, t(e), {
				id: i
			});
			return r[i] = n, n
		} {
			let n = z({}, e, t(e), {
				id: i,
				children: void 0
			});
			return r[i] = n, e.children && (n.children = Z(e.children, t, a, r)), n
		}
	}))
}

function J(e, t, n) {
	return void 0 === n && (n = "/"), ee(e, t, n, !1)
}

function ee(e, t, n, r) {
	let o = he(("string" == typeof t ? X(t) : t).pathname || "/", n);
	if (null == o) return null;
	let a = te(e);
	! function (e) {
		e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) {
			let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
			return n ? e[e.length - 1] - t[t.length - 1] : 0
		}(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
	}(a);
	let i = null;
	for (let l = 0; null == i && l < a.length; ++l) {
		let e = pe(o);
		i = de(a[l], e, r)
	}
	return i
}

function te(e, t, n, r) {
	void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
	let o = (e, o, a) => {
		let i = {
			relativePath: void 0 === a ? e.path || "" : a,
			caseSensitive: !0 === e.caseSensitive,
			childrenIndex: o,
			route: e
		};
		i.relativePath.startsWith("/") && (U(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
		let l = be([r, i.relativePath]),
			s = n.concat(i);
		e.children && e.children.length > 0 && (U(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), te(e.children, t, s, l)), (null != e.path || e.index) && t.push({
			path: l,
			score: ue(l, e.index),
			routesMeta: s
		})
	};
	return e.forEach(((e, t) => {
		var n;
		if ("" !== e.path && null != (n = e.path) && n.includes("?"))
			for (let r of ne(e.path)) o(e, t, r);
		else o(e, t)
	})), t
}

function ne(e) {
	let t = e.split("/");
	if (0 === t.length) return [];
	let [n, ...r] = t, o = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (0 === r.length) return o ? [a, ""] : [a];
	let i = ne(r.join("/")),
		l = [];
	return l.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
}
const re = /^:[\w-]+$/,
	oe = 3,
	ae = 2,
	ie = 1,
	le = 10,
	se = -2,
	ce = e => "*" === e;

function ue(e, t) {
	let n = e.split("/"),
		r = n.length;
	return n.some(ce) && (r += se), t && (r += ae), n.filter((e => !ce(e))).reduce(((e, t) => e + (re.test(t) ? oe : "" === t ? ie : le)), r)
}

function de(e, t, n) {
	void 0 === n && (n = !1);
	let {
		routesMeta: r
	} = e, o = {}, a = "/", i = [];
	for (let l = 0; l < r.length; ++l) {
		let e = r[l],
			s = l === r.length - 1,
			c = "/" === a ? t : t.slice(a.length) || "/",
			u = fe({
				path: e.relativePath,
				caseSensitive: e.caseSensitive,
				end: s
			}, c),
			d = e.route;
		if (!u && s && n && !r[r.length - 1].route.index && (u = fe({
				path: e.relativePath,
				caseSensitive: e.caseSensitive,
				end: !1
			}, c)), !u) return null;
		Object.assign(o, u.params), i.push({
			params: o,
			pathname: be([a, u.pathname]),
			pathnameBase: we(be([a, u.pathnameBase])),
			route: d
		}), "/" !== u.pathnameBase && (a = be([a, u.pathnameBase]))
	}
	return i
}

function fe(e, t) {
	"string" == typeof e && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = function (e, t, n) {
		void 0 === t && (t = !1);
		void 0 === n && (n = !0);
		V("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
		let r = [],
			o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, n) => (r.push({
				paramName: t,
				isOptional: null != n
			}), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
		e.endsWith("*") ? (r.push({
			paramName: "*"
		}), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
		let a = new RegExp(o, t ? void 0 : "i");
		return [a, r]
	}(e.path, e.caseSensitive, e.end), o = t.match(n);
	if (!o) return null;
	let a = o[0],
		i = a.replace(/(.)\/+$/, "$1"),
		l = o.slice(1);
	return {
		params: r.reduce(((e, t, n) => {
			let {
				paramName: r,
				isOptional: o
			} = t;
			if ("*" === r) {
				let e = l[n] || "";
				i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
			}
			const s = l[n];
			return e[r] = o && !s ? void 0 : (s || "").replace(/%2F/g, "/"), e
		}), {}),
		pathname: a,
		pathnameBase: i,
		pattern: e
	}
}

function pe(e) {
	try {
		return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
	} catch (t) {
		return V(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
	}
}

function he(e, t) {
	if ("/" === t) return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && "/" !== r ? null : e.slice(n) || "/"
}

function me(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
}

function ge(e) {
	return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
}

function ve(e, t) {
	let n = ge(e);
	return t ? n.map(((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e => e.pathnameBase))
}

function ye(e, t, n, r) {
	let o;
	void 0 === r && (r = !1), "string" == typeof e ? o = X(e) : (o = z({}, e), U(!o.pathname || !o.pathname.includes("?"), me("?", "pathname", "search", o)), U(!o.pathname || !o.pathname.includes("#"), me("#", "pathname", "hash", o)), U(!o.search || !o.search.includes("#"), me("#", "search", "hash", o)));
	let a, i = "" === e || "" === o.pathname,
		l = i ? "/" : o.pathname;
	if (null == l) a = n;
	else {
		let e = t.length - 1;
		if (!r && l.startsWith("..")) {
			let t = l.split("/");
			for (;
				".." === t[0];) t.shift(), e -= 1;
			o.pathname = t.join("/")
		}
		a = e >= 0 ? t[e] : "/"
	}
	let s = function (e, t) {
			void 0 === t && (t = "/");
			let {
				pathname: n,
				search: r = "",
				hash: o = ""
			} = "string" == typeof e ? X(e) : e, a = n ? n.startsWith("/") ? n : function (e, t) {
				let n = t.replace(/\/+$/, "").split("/");
				return e.split("/").forEach((e => {
					".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
				})), n.length > 1 ? n.join("/") : "/"
			}(n, t) : t;
			return {
				pathname: a,
				search: ke(r),
				hash: xe(o)
			}
		}(o, a),
		c = l && "/" !== l && l.endsWith("/"),
		u = (i || "." === l) && n.endsWith("/");
	return s.pathname.endsWith("/") || !c && !u || (s.pathname += "/"), s
}
const be = e => e.join("/").replace(/\/\/+/g, "/"),
	we = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	ke = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
	xe = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
class Se {
	constructor(e, t, n, r) {
		void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n
	}
}

function Ce(e) {
	return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
}
const Ee = ["post", "put", "patch", "delete"],
	Oe = new Set(Ee),
	$e = ["get", ...Ee],
	Pe = new Set($e),
	je = new Set([301, 302, 303, 307, 308]),
	_e = new Set([307, 308]),
	Re = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	},
	Me = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	},
	Fe = {
		state: "unblocked",
		proceed: void 0,
		reset: void 0,
		location: void 0
	},
	Ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Te = e => ({
		hasErrorBoundary: Boolean(e.hasErrorBoundary)
	}),
	Ie = "remix-router-transitions";

function Le(e) {
	const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
		n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
		r = !n;
	let o;
	if (U(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) o = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let t = e.detectErrorBoundary;
		o = e => ({
			hasErrorBoundary: t(e)
		})
	} else o = Te;
	let a, i, l, s = {},
		c = Z(e.routes, o, void 0, s),
		u = e.basename || "/",
		d = e.dataStrategy || Ge,
		f = e.patchRoutesOnNavigation,
		p = z({
			v7_fetcherPersist: !1,
			v7_normalizeFormMethod: !1,
			v7_partialHydration: !1,
			v7_prependBasename: !1,
			v7_relativeSplatPath: !1,
			v7_skipActionErrorRevalidation: !1
		}, e.future),
		h = null,
		m = new Set,
		g = null,
		v = null,
		y = null,
		b = null != e.hydrationData,
		w = J(c, e.history.location, u),
		k = !1,
		x = null;
	if (null == w && !f) {
		let t = at(404, {
				pathname: e.history.location.pathname
			}),
			{
				matches: n,
				route: r
			} = ot(c);
		w = n, x = {
			[r.id]: t
		}
	}
	if (w && !e.hydrationData) {
		Oe(w, c, e.history.location.pathname).active && (w = null)
	}
	if (w)
		if (w.some((e => e.route.lazy))) i = !1;
		else if (w.some((e => e.route.loader)))
		if (p.v7_partialHydration) {
			let t = e.hydrationData ? e.hydrationData.loaderData : null,
				n = e.hydrationData ? e.hydrationData.errors : null;
			if (n) {
				let e = w.findIndex((e => void 0 !== n[e.route.id]));
				i = w.slice(0, e + 1).every((e => !Be(e.route, t, n)))
			} else i = w.every((e => !Be(e.route, t, n)))
		} else i = null != e.hydrationData;
	else i = !0;
	else if (i = !1, w = [], p.v7_partialHydration) {
		let t = Oe(null, c, e.history.location.pathname);
		t.active && t.matches && (k = !0, w = t.matches)
	}
	let S, C, E = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: w,
			initialized: i,
			navigation: Re,
			restoreScrollPosition: null == e.hydrationData && null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: e.hydrationData && e.hydrationData.loaderData || {},
			actionData: e.hydrationData && e.hydrationData.actionData || null,
			errors: e.hydrationData && e.hydrationData.errors || x,
			fetchers: new Map,
			blockers: new Map
		},
		O = A.Pop,
		$ = !1,
		P = !1,
		j = new Map,
		_ = null,
		R = !1,
		M = !1,
		F = [],
		N = new Set,
		T = new Map,
		I = 0,
		L = -1,
		D = new Map,
		H = new Set,
		B = new Map,
		W = new Map,
		G = new Set,
		X = new Map,
		Q = new Map;

	function te(e, t) {
		void 0 === t && (t = {}), E = z({}, E, e);
		let n = [],
			r = [];
		p.v7_fetcherPersist && E.fetchers.forEach(((e, t) => {
			"idle" === e.state && (G.has(t) ? r.push(t) : n.push(t))
		})), G.forEach((e => {
			E.fetchers.has(e) || T.has(e) || r.push(e)
		})), [...m].forEach((e => e(E, {
			deletedFetchers: r,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: !0 === t.flushSync
		}))), p.v7_fetcherPersist ? (n.forEach((e => E.fetchers.delete(e))), r.forEach((e => fe(e)))) : r.forEach((e => G.delete(e)))
	}

	function ne(t, n, r) {
		var o, i;
		let l, {
				flushSync: s
			} = void 0 === r ? {} : r,
			u = null != E.actionData && null != E.navigation.formMethod && ht(E.navigation.formMethod) && "loading" === E.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
		l = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : u ? E.actionData : null;
		let d = n.loaderData ? tt(E.loaderData, n.loaderData, n.matches || [], n.errors) : E.loaderData,
			f = E.blockers;
		f.size > 0 && (f = new Map(f), f.forEach(((e, t) => f.set(t, Fe))));
		let p, h = !0 === $ || null != E.navigation.formMethod && ht(E.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
		if (a && (c = a, a = void 0), R || O === A.Pop || (O === A.Push ? e.history.push(t, t.state) : O === A.Replace && e.history.replace(t, t.state)), O === A.Pop) {
			let e = j.get(E.location.pathname);
			e && e.has(t.pathname) ? p = {
				currentLocation: E.location,
				nextLocation: t
			} : j.has(t.pathname) && (p = {
				currentLocation: t,
				nextLocation: E.location
			})
		} else if (P) {
			let e = j.get(E.location.pathname);
			e ? e.add(t.pathname) : (e = new Set([t.pathname]), j.set(E.location.pathname, e)), p = {
				currentLocation: E.location,
				nextLocation: t
			}
		}
		te(z({}, n, {
			actionData: l,
			loaderData: d,
			historyAction: O,
			location: t,
			initialized: !0,
			navigation: Re,
			revalidation: "idle",
			restoreScrollPosition: Ee(t, n.matches || E.matches),
			preventScrollReset: h,
			blockers: f
		}), {
			viewTransitionOpts: p,
			flushSync: !0 === s
		}), O = A.Pop, $ = !1, P = !1, R = !1, M = !1, F = []
	}
	async function re(t, n, r) {
		S && S.abort(), S = null, O = t, R = !0 === (r && r.startUninterruptedRevalidation),
			function (e, t) {
				if (g && y) {
					let n = Se(e, t);
					g[n] = y()
				}
			}(E.location, E.matches), $ = !0 === (r && r.preventScrollReset), P = !0 === (r && r.enableViewTransition);
		let o = a || c,
			i = r && r.overrideNavigation,
			l = null != r && r.initialHydration && E.matches && E.matches.length > 0 && !k ? E.matches : J(o, n, u),
			s = !0 === (r && r.flushSync);
		if (l && E.initialized && !M && function (e, t) {
				if (e.pathname !== t.pathname || e.search !== t.search) return !1;
				if ("" === e.hash) return "" !== t.hash;
				if (e.hash === t.hash) return !0;
				if ("" !== t.hash) return !0;
				return !1
			}(E.location, n) && !(r && r.submission && ht(r.submission.formMethod))) return void ne(n, {
			matches: l
		}, {
			flushSync: s
		});
		let d = Oe(l, o, n.pathname);
		if (d.active && d.matches && (l = d.matches), !l) {
			let {
				error: e,
				notFoundMatches: t,
				route: r
			} = ke(n.pathname);
			return void ne(n, {
				matches: t,
				loaderData: {},
				errors: {
					[r.id]: e
				}
			}, {
				flushSync: s
			})
		}
		S = new AbortController;
		let f, h = Ye(e.history, n, S.signal, r && r.submission);
		if (r && r.pendingError) f = [rt(l).route.id, {
			type: K.error,
			error: r.pendingError
		}];
		else if (r && r.submission && ht(r.submission.formMethod)) {
			let t = await async function (e, t, n, r, o, a) {
				void 0 === a && (a = {});
				se();
				let i, l = function (e, t) {
					let n = {
						state: "submitting",
						location: e,
						formMethod: t.formMethod,
						formAction: t.formAction,
						formEncType: t.formEncType,
						formData: t.formData,
						json: t.json,
						text: t.text
					};
					return n
				}(t, n);
				if (te({
						navigation: l
					}, {
						flushSync: !0 === a.flushSync
					}), o) {
					let n = await $e(r, t.pathname, e.signal);
					if ("aborted" === n.type) return {
						shortCircuited: !0
					};
					if ("error" === n.type) {
						let e = rt(n.partialMatches).route.id;
						return {
							matches: n.partialMatches,
							pendingActionResult: [e, {
								type: K.error,
								error: n.error
							}]
						}
					}
					if (!n.matches) {
						let {
							notFoundMatches: e,
							error: n,
							route: r
						} = ke(t.pathname);
						return {
							matches: e,
							pendingActionResult: [r.id, {
								type: K.error,
								error: n
							}]
						}
					}
					r = n.matches
				}
				let s = bt(r, t);
				if (s.route.action || s.route.lazy) {
					if (i = (await ie("action", E, e, [s], r, null))[s.route.id], e.signal.aborted) return {
						shortCircuited: !0
					}
				} else i = {
					type: K.error,
					error: at(405, {
						method: e.method,
						pathname: t.pathname,
						routeId: s.route.id
					})
				};
				if (dt(i)) {
					let t;
					if (a && null != a.replace) t = a.replace;
					else {
						t = Qe(i.response.headers.get("Location"), new URL(e.url), u) === E.location.pathname + E.location.search
					}
					return await ae(e, i, !0, {
						submission: n,
						replace: t
					}), {
						shortCircuited: !0
					}
				}
				if (ct(i)) throw at(400, {
					type: "defer-action"
				});
				if (ut(i)) {
					let e = rt(r, s.route.id);
					return !0 !== (a && a.replace) && (O = A.Push), {
						matches: r,
						pendingActionResult: [e.route.id, i]
					}
				}
				return {
					matches: r,
					pendingActionResult: [s.route.id, i]
				}
			}(h, n, r.submission, l, d.active, {
				replace: r.replace,
				flushSync: s
			});
			if (t.shortCircuited) return;
			if (t.pendingActionResult) {
				let [e, r] = t.pendingActionResult;
				if (ut(r) && Ce(r.error) && 404 === r.error.status) return S = null, void ne(n, {
					matches: t.matches,
					loaderData: {},
					errors: {
						[e]: r.error
					}
				})
			}
			l = t.matches || l, f = t.pendingActionResult, i = kt(n, r.submission), s = !1, d.active = !1, h = Ye(e.history, h.url, h.signal)
		}
		let {
			shortCircuited: m,
			matches: v,
			loaderData: b,
			errors: w
		} = await async function (t, n, r, o, i, l, s, d, f, h, m) {
			let g = i || kt(n, l),
				v = l || s || wt(g),
				y = !(R || p.v7_partialHydration && f);
			if (o) {
				if (y) {
					let e = oe(m);
					te(z({
						navigation: g
					}, void 0 !== e ? {
						actionData: e
					} : {}), {
						flushSync: h
					})
				}
				let e = await $e(r, n.pathname, t.signal);
				if ("aborted" === e.type) return {
					shortCircuited: !0
				};
				if ("error" === e.type) {
					let t = rt(e.partialMatches).route.id;
					return {
						matches: e.partialMatches,
						loaderData: {},
						errors: {
							[t]: e.error
						}
					}
				}
				if (!e.matches) {
					let {
						error: e,
						notFoundMatches: t,
						route: r
					} = ke(n.pathname);
					return {
						matches: t,
						loaderData: {},
						errors: {
							[r.id]: e
						}
					}
				}
				r = e.matches
			}
			let b = a || c,
				[w, k] = He(e.history, E, r, v, n, p.v7_partialHydration && !0 === f, p.v7_skipActionErrorRevalidation, M, F, N, G, B, H, b, u, m);
			if (xe((e => !(r && r.some((t => t.route.id === e))) || w && w.some((t => t.route.id === e)))), L = ++I, 0 === w.length && 0 === k.length) {
				let e = ge();
				return ne(n, z({
					matches: r,
					loaderData: {},
					errors: m && ut(m[1]) ? {
						[m[0]]: m[1].error
					} : null
				}, nt(m), e ? {
					fetchers: new Map(E.fetchers)
				} : {}), {
					flushSync: h
				}), {
					shortCircuited: !0
				}
			}
			if (y) {
				let e = {};
				if (!o) {
					e.navigation = g;
					let t = oe(m);
					void 0 !== t && (e.actionData = t)
				}
				k.length > 0 && (e.fetchers = function (e) {
					return e.forEach((e => {
						let t = E.fetchers.get(e.key),
							n = xt(void 0, t ? t.data : void 0);
						E.fetchers.set(e.key, n)
					})), new Map(E.fetchers)
				}(k)), te(e, {
					flushSync: h
				})
			}
			k.forEach((e => {
				pe(e.key), e.controller && T.set(e.key, e.controller)
			}));
			let x = () => k.forEach((e => pe(e.key)));
			S && S.signal.addEventListener("abort", x);
			let {
				loaderResults: C,
				fetcherResults: O
			} = await le(E, r, w, k, t);
			if (t.signal.aborted) return {
				shortCircuited: !0
			};
			S && S.signal.removeEventListener("abort", x);
			k.forEach((e => T.delete(e.key)));
			let $ = it(C);
			if ($) return await ae(t, $.result, !0, {
				replace: d
			}), {
				shortCircuited: !0
			};
			if ($ = it(O), $) return H.add($.key), await ae(t, $.result, !0, {
				replace: d
			}), {
				shortCircuited: !0
			};
			let {
				loaderData: P,
				errors: j
			} = et(E, r, C, m, k, O, X);
			X.forEach(((e, t) => {
				e.subscribe((n => {
					(n || e.done) && X.delete(t)
				}))
			})), p.v7_partialHydration && f && E.errors && (j = z({}, E.errors, j));
			let _ = ge(),
				A = ve(L),
				D = _ || A || k.length > 0;
			return z({
				matches: r,
				loaderData: P,
				errors: j
			}, D ? {
				fetchers: new Map(E.fetchers)
			} : {})
		}(h, n, l, d.active, i, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && !0 === r.initialHydration, s, f);
		m || (S = null, ne(n, z({
			matches: v || l
		}, nt(f), {
			loaderData: b,
			errors: w
		})))
	}

	function oe(e) {
		return e && !ut(e[1]) ? {
			[e[0]]: e[1].data
		} : E.actionData ? 0 === Object.keys(E.actionData).length ? null : E.actionData : void 0
	}
	async function ae(r, o, a, i) {
		let {
			submission: l,
			fetcherSubmission: s,
			preventScrollReset: c,
			replace: d
		} = void 0 === i ? {} : i;
		o.response.headers.has("X-Remix-Revalidate") && (M = !0);
		let f = o.response.headers.get("Location");
		U(f, "Expected a Location header on the redirect Response"), f = Qe(f, new URL(r.url), u);
		let p = q(E.location, f, {
			_isRedirect: !0
		});
		if (n) {
			let n = !1;
			if (o.response.headers.has("X-Remix-Reload-Document")) n = !0;
			else if (Ne.test(f)) {
				const r = e.history.createURL(f);
				n = r.origin !== t.location.origin || null == he(r.pathname, u)
			}
			if (n) return void(d ? t.location.replace(f) : t.location.assign(f))
		}
		S = null;
		let h = !0 === d || o.response.headers.has("X-Remix-Replace") ? A.Replace : A.Push,
			{
				formMethod: m,
				formAction: g,
				formEncType: v
			} = E.navigation;
		!l && !s && m && g && v && (l = wt(E.navigation));
		let y = l || s;
		if (_e.has(o.response.status) && y && ht(y.formMethod)) await re(h, p, {
			submission: z({}, y, {
				formAction: f
			}),
			preventScrollReset: c || $,
			enableViewTransition: a ? P : void 0
		});
		else {
			let e = kt(p, l);
			await re(h, p, {
				overrideNavigation: e,
				fetcherSubmission: s,
				preventScrollReset: c || $,
				enableViewTransition: a ? P : void 0
			})
		}
	}
	async function ie(e, t, n, r, a, i) {
		let l, c = {};
		try {
			l = await async function (e, t, n, r, o, a, i, l, s, c) {
				let u = a.map((e => e.route.lazy ? async function (e, t, n) {
						if (!e.lazy) return;
						let r = await e.lazy();
						if (!e.lazy) return;
						let o = n[e.id];
						U(o, "No route found in manifest");
						let a = {};
						for (let i in r) {
							let e = void 0 !== o[i] && "hasErrorBoundary" !== i;
							V(!e, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + i + '" will be ignored.'), e || Y.has(i) || (a[i] = r[i])
						}
						Object.assign(o, a), Object.assign(o, z({}, t(o), {
							lazy: void 0
						}))
					}(e.route, s, l): void 0)),
					d = a.map(((e, n) => {
						let a = u[n],
							i = o.some((t => t.route.id === e.route.id)),
							l = async n => (n && "GET" === r.method && (e.route.lazy || e.route.loader) && (i = !0), i ? async function (e, t, n, r, o, a) {
								let i, l, s = r => {
									let i, s = new Promise(((e, t) => i = t));
									l = () => i(), t.signal.addEventListener("abort", l);
									let c = o => "function" != typeof r ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + n.route.id + "]")) : r({
											request: t,
											params: n.params,
											context: a
										}, ...void 0 !== o ? [o] : []),
										u = (async () => {
											try {
												return {
													type: "data",
													result: await (o ? o((e => c(e))) : c())
												}
											} catch (e) {
												return {
													type: "error",
													result: e
												}
											}
										})();
									return Promise.race([u, s])
								};
								try {
									let o = n.route[e];
									if (r)
										if (o) {
											let e, [t] = await Promise.all([s(o).catch((t => {
												e = t
											})), r]);
											if (void 0 !== e) throw e;
											i = t
										} else {
											if (await r, o = n.route[e], !o) {
												if ("action" === e) {
													let e = new URL(t.url),
														r = e.pathname + e.search;
													throw at(405, {
														method: t.method,
														pathname: r,
														routeId: n.route.id
													})
												}
												return {
													type: K.data,
													result: void 0
												}
											}
											i = await s(o)
										}
									else {
										if (!o) {
											let e = new URL(t.url);
											throw at(404, {
												pathname: e.pathname + e.search
											})
										}
										i = await s(o)
									}
									U(void 0 !== i.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
								} catch (c) {
									return {
										type: K.error,
										result: c
									}
								} finally {
									l && t.signal.removeEventListener("abort", l)
								}
								return i
							}(t, r, e, a, n, c): Promise.resolve({
								type: K.data,
								result: void 0
							}));
						return z({}, e, {
							shouldLoad: i,
							resolve: l
						})
					})),
					f = await e({
						matches: d,
						request: r,
						params: a[0].params,
						fetcherKey: i,
						context: c
					});
				try {
					await Promise.all(u)
				} catch (p) {}
				return f
			}(d, e, 0, n, r, a, i, s, o)
		} catch (f) {
			return r.forEach((e => {
				c[e.route.id] = {
					type: K.error,
					error: f
				}
			})), c
		}
		for (let [o, s] of Object.entries(l))
			if (st(s)) {
				let e = s.result;
				c[o] = {
					type: K.redirect,
					response: Ke(e, n, o, a, u, p.v7_relativeSplatPath)
				}
			} else c[o] = await Xe(s);
		return c
	}
	async function le(t, n, r, o, a) {
		let i = t.matches,
			l = ie("loader", 0, a, r, n, null),
			s = Promise.all(o.map((async t => {
				if (t.matches && t.match && t.controller) {
					let n = (await ie("loader", 0, Ye(e.history, t.path, t.controller.signal), [t.match], t.matches, t.key))[t.match.route.id];
					return {
						[t.key]: n
					}
				}
				return Promise.resolve({
					[t.key]: {
						type: K.error,
						error: at(404, {
							pathname: t.path
						})
					}
				})
			}))),
			c = await l,
			u = (await s).reduce(((e, t) => Object.assign(e, t)), {});
		return await Promise.all([mt(n, c, a.signal, i, t.loaderData), gt(n, u, o)]), {
			loaderResults: c,
			fetcherResults: u
		}
	}

	function se() {
		M = !0, F.push(...xe()), B.forEach(((e, t) => {
			T.has(t) && N.add(t), pe(t)
		}))
	}

	function ce(e, t, n) {
		void 0 === n && (n = {}), E.fetchers.set(e, t), te({
			fetchers: new Map(E.fetchers)
		}, {
			flushSync: !0 === (n && n.flushSync)
		})
	}

	function ue(e, t, n, r) {
		void 0 === r && (r = {});
		let o = rt(E.matches, t);
		fe(e), te({
			errors: {
				[o.route.id]: n
			},
			fetchers: new Map(E.fetchers)
		}, {
			flushSync: !0 === (r && r.flushSync)
		})
	}

	function de(e) {
		return W.set(e, (W.get(e) || 0) + 1), G.has(e) && G.delete(e), E.fetchers.get(e) || Me
	}

	function fe(e) {
		let t = E.fetchers.get(e);
		!T.has(e) || t && "loading" === t.state && D.has(e) || pe(e), B.delete(e), D.delete(e), H.delete(e), p.v7_fetcherPersist && G.delete(e), N.delete(e), E.fetchers.delete(e)
	}

	function pe(e) {
		let t = T.get(e);
		t && (t.abort(), T.delete(e))
	}

	function me(e) {
		for (let t of e) {
			let e = St(de(t).data);
			E.fetchers.set(t, e)
		}
	}

	function ge() {
		let e = [],
			t = !1;
		for (let n of H) {
			let r = E.fetchers.get(n);
			U(r, "Expected fetcher: " + n), "loading" === r.state && (H.delete(n), e.push(n), t = !0)
		}
		return me(e), t
	}

	function ve(e) {
		let t = [];
		for (let [n, r] of D)
			if (r < e) {
				let e = E.fetchers.get(n);
				U(e, "Expected fetcher: " + n), "loading" === e.state && (pe(n), D.delete(n), t.push(n))
			} return me(t), t.length > 0
	}

	function ye(e) {
		E.blockers.delete(e), Q.delete(e)
	}

	function be(e, t) {
		let n = E.blockers.get(e) || Fe;
		U("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state);
		let r = new Map(E.blockers);
		r.set(e, t), te({
			blockers: r
		})
	}

	function we(e) {
		let {
			currentLocation: t,
			nextLocation: n,
			historyAction: r
		} = e;
		if (0 === Q.size) return;
		Q.size > 1 && V(!1, "A router only supports one blocker at a time");
		let o = Array.from(Q.entries()),
			[a, i] = o[o.length - 1],
			l = E.blockers.get(a);
		return l && "proceeding" === l.state ? void 0 : i({
			currentLocation: t,
			nextLocation: n,
			historyAction: r
		}) ? a : void 0
	}

	function ke(e) {
		let t = at(404, {
				pathname: e
			}),
			n = a || c,
			{
				matches: r,
				route: o
			} = ot(n);
		return xe(), {
			notFoundMatches: r,
			route: o,
			error: t
		}
	}

	function xe(e) {
		let t = [];
		return X.forEach(((n, r) => {
			e && !e(r) || (n.cancel(), t.push(r), X.delete(r))
		})), t
	}

	function Se(e, t) {
		if (v) {
			return v(e, t.map((e => function (e, t) {
				let {
					route: n,
					pathname: r,
					params: o
				} = e;
				return {
					id: n.id,
					pathname: r,
					params: o,
					data: t[n.id],
					handle: n.handle
				}
			}(e, E.loaderData)))) || e.key
		}
		return e.key
	}

	function Ee(e, t) {
		if (g) {
			let n = Se(e, t),
				r = g[n];
			if ("number" == typeof r) return r
		}
		return null
	}

	function Oe(e, t, n) {
		if (f) {
			if (!e) {
				return {
					active: !0,
					matches: ee(t, n, u, !0) || []
				}
			}
			if (Object.keys(e[0].params).length > 0) {
				return {
					active: !0,
					matches: ee(t, n, u, !0)
				}
			}
		}
		return {
			active: !1,
			matches: null
		}
	}
	async function $e(e, t, n, r) {
		if (!f) return {
			type: "success",
			matches: e
		};
		let i = e;
		for (;;) {
			let e = null == a,
				d = a || c,
				p = s;
			try {
				await f({
					signal: n,
					path: t,
					matches: i,
					fetcherKey: r,
					patch: (e, t) => {
						n.aborted || We(e, t, d, p, o)
					}
				})
			} catch (l) {
				return {
					type: "error",
					error: l,
					partialMatches: i
				}
			} finally {
				e && !n.aborted && (c = [...c])
			}
			if (n.aborted) return {
				type: "aborted"
			};
			let h = J(d, t, u);
			if (h) return {
				type: "success",
				matches: h
			};
			let m = ee(d, t, u, !0);
			if (!m || i.length === m.length && i.every(((e, t) => e.route.id === m[t].route.id))) return {
				type: "success",
				matches: null
			};
			i = m
		}
	}
	return l = {
		get basename() {
			return u
		},
		get future() {
			return p
		},
		get state() {
			return E
		},
		get routes() {
			return c
		},
		get window() {
			return t
		},
		initialize: function () {
			if (h = e.history.listen((t => {
					let {
						action: n,
						location: r,
						delta: o
					} = t;
					if (C) return C(), void(C = void 0);
					V(0 === Q.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
					let a = we({
						currentLocation: E.location,
						nextLocation: r,
						historyAction: n
					});
					if (a && null != o) {
						let t = new Promise((e => {
							C = e
						}));
						return e.history.go(-1 * o), void be(a, {
							state: "blocked",
							location: r,
							proceed() {
								be(a, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: r
								}), t.then((() => e.history.go(o)))
							},
							reset() {
								let e = new Map(E.blockers);
								e.set(a, Fe), te({
									blockers: e
								})
							}
						})
					}
					return re(n, r)
				})), n) {
				! function (e, t) {
					try {
						let n = e.sessionStorage.getItem(Ie);
						if (n) {
							let e = JSON.parse(n);
							for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []))
						}
					} catch (n) {}
				}(t, j);
				let e = () => function (e, t) {
					if (t.size > 0) {
						let r = {};
						for (let [e, n] of t) r[e] = [...n];
						try {
							e.sessionStorage.setItem(Ie, JSON.stringify(r))
						} catch (n) {
							V(!1, "Failed to save applied view transitions in sessionStorage (" + n + ").")
						}
					}
				}
				/**
				 * React Router v6.30.1
				 *
				 * Copyright (c) Remix Software Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE.md file in the root directory of this source tree.
				 *
				 * @license MIT
				 */
				(t, j);
				t.addEventListener("pagehide", e), _ = () => t.removeEventListener("pagehide", e)
			}
			return E.initialized || re(A.Pop, E.location, {
				initialHydration: !0
			}), l
		},
		subscribe: function (e) {
			return m.add(e), () => m.delete(e)
		},
		enableScrollRestoration: function (e, t, n) {
			if (g = e, y = t, v = n || null, !b && E.navigation === Re) {
				b = !0;
				let e = Ee(E.location, E.matches);
				null != e && te({
					restoreScrollPosition: e
				})
			}
			return () => {
				g = null, y = null, v = null
			}
		},
		navigate: async function t(n, r) {
			if ("number" == typeof n) return void e.history.go(n);
			let o = ze(E.location, E.matches, u, p.v7_prependBasename, n, p.v7_relativeSplatPath, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative),
				{
					path: a,
					submission: i,
					error: l
				} = Ae(p.v7_normalizeFormMethod, !1, o, r),
				s = E.location,
				c = q(E.location, a, r && r.state);
			c = z({}, c, e.history.encodeLocation(c));
			let d = r && null != r.replace ? r.replace : void 0,
				f = A.Push;
			!0 === d ? f = A.Replace : !1 === d || null != i && ht(i.formMethod) && i.formAction === E.location.pathname + E.location.search && (f = A.Replace);
			let h = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0,
				m = !0 === (r && r.flushSync),
				g = we({
					currentLocation: s,
					nextLocation: c,
					historyAction: f
				});
			if (!g) return await re(f, c, {
				submission: i,
				pendingError: l,
				preventScrollReset: h,
				replace: r && r.replace,
				enableViewTransition: r && r.viewTransition,
				flushSync: m
			});
			be(g, {
				state: "blocked",
				location: c,
				proceed() {
					be(g, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: c
					}), t(n, r)
				},
				reset() {
					let e = new Map(E.blockers);
					e.set(g, Fe), te({
						blockers: e
					})
				}
			})
		},
		fetch: function (t, n, o, i) {
			if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
			pe(t);
			let l = !0 === (i && i.flushSync),
				s = a || c,
				d = ze(E.location, E.matches, u, p.v7_prependBasename, o, p.v7_relativeSplatPath, n, null == i ? void 0 : i.relative),
				f = J(s, d, u),
				h = Oe(f, s, d);
			if (h.active && h.matches && (f = h.matches), !f) return void ue(t, n, at(404, {
				pathname: d
			}), {
				flushSync: l
			});
			let {
				path: m,
				submission: g,
				error: v
			} = Ae(p.v7_normalizeFormMethod, !0, d, i);
			if (v) return void ue(t, n, v, {
				flushSync: l
			});
			let y = bt(f, m),
				b = !0 === (i && i.preventScrollReset);
			g && ht(g.formMethod) ? async function (t, n, r, o, i, l, s, d, f) {
				function h(e) {
					if (!e.route.action && !e.route.lazy) {
						let e = at(405, {
							method: f.formMethod,
							pathname: r,
							routeId: n
						});
						return ue(t, n, e, {
							flushSync: s
						}), !0
					}
					return !1
				}
				if (se(), B.delete(t), !l && h(o)) return;
				let m = E.fetchers.get(t);
				ce(t, function (e, t) {
					let n = {
						state: "submitting",
						formMethod: e.formMethod,
						formAction: e.formAction,
						formEncType: e.formEncType,
						formData: e.formData,
						json: e.json,
						text: e.text,
						data: t ? t.data : void 0
					};
					return n
				}(f, m), {
					flushSync: s
				});
				let g = new AbortController,
					v = Ye(e.history, r, g.signal, f);
				if (l) {
					let e = await $e(i, new URL(v.url).pathname, v.signal, t);
					if ("aborted" === e.type) return;
					if ("error" === e.type) return void ue(t, n, e.error, {
						flushSync: s
					});
					if (!e.matches) return void ue(t, n, at(404, {
						pathname: r
					}), {
						flushSync: s
					});
					if (h(o = bt(i = e.matches, r))) return
				}
				T.set(t, g);
				let y = I,
					b = await ie("action", E, v, [o], i, t),
					w = b[o.route.id];
				if (v.signal.aborted) return void(T.get(t) === g && T.delete(t));
				if (p.v7_fetcherPersist && G.has(t)) {
					if (dt(w) || ut(w)) return void ce(t, St(void 0))
				} else {
					if (dt(w)) return T.delete(t), L > y ? void ce(t, St(void 0)) : (H.add(t), ce(t, xt(f)), ae(v, w, !1, {
						fetcherSubmission: f,
						preventScrollReset: d
					}));
					if (ut(w)) return void ue(t, n, w.error)
				}
				if (ct(w)) throw at(400, {
					type: "defer-action"
				});
				let k = E.navigation.location || E.location,
					x = Ye(e.history, k, g.signal),
					C = a || c,
					$ = "idle" !== E.navigation.state ? J(C, E.navigation.location, u) : E.matches;
				U($, "Didn't find any matches after fetcher action");
				let P = ++I;
				D.set(t, P);
				let j = xt(f, w.data);
				E.fetchers.set(t, j);
				let [_, R] = He(e.history, E, $, f, k, !1, p.v7_skipActionErrorRevalidation, M, F, N, G, B, H, C, u, [o.route.id, w]);
				R.filter((e => e.key !== t)).forEach((e => {
					let t = e.key,
						n = E.fetchers.get(t),
						r = xt(void 0, n ? n.data : void 0);
					E.fetchers.set(t, r), pe(t), e.controller && T.set(t, e.controller)
				})), te({
					fetchers: new Map(E.fetchers)
				});
				let z = () => R.forEach((e => pe(e.key)));
				g.signal.addEventListener("abort", z);
				let {
					loaderResults: A,
					fetcherResults: V
				} = await le(E, $, _, R, x);
				if (g.signal.aborted) return;
				g.signal.removeEventListener("abort", z), D.delete(t), T.delete(t), R.forEach((e => T.delete(e.key)));
				let W = it(A);
				if (W) return ae(x, W.result, !1, {
					preventScrollReset: d
				});
				if (W = it(V), W) return H.add(W.key), ae(x, W.result, !1, {
					preventScrollReset: d
				});
				let {
					loaderData: q,
					errors: K
				} = et(E, $, A, void 0, R, V, X);
				if (E.fetchers.has(t)) {
					let e = St(w.data);
					E.fetchers.set(t, e)
				}
				ve(P), "loading" === E.navigation.state && P > L ? (U(O, "Expected pending action"), S && S.abort(), ne(E.navigation.location, {
					matches: $,
					loaderData: q,
					errors: K,
					fetchers: new Map(E.fetchers)
				})) : (te({
					errors: K,
					loaderData: tt(E.loaderData, q, $, K),
					fetchers: new Map(E.fetchers)
				}), M = !1)
			}(t, n, m, y, f, h.active, l, b, g): (B.set(t, {
				routeId: n,
				path: m
			}), async function (t, n, r, o, a, i, l, s, c) {
				let u = E.fetchers.get(t);
				ce(t, xt(c, u ? u.data : void 0), {
					flushSync: l
				});
				let d = new AbortController,
					f = Ye(e.history, r, d.signal);
				if (i) {
					let e = await $e(a, new URL(f.url).pathname, f.signal, t);
					if ("aborted" === e.type) return;
					if ("error" === e.type) return void ue(t, n, e.error, {
						flushSync: l
					});
					if (!e.matches) return void ue(t, n, at(404, {
						pathname: r
					}), {
						flushSync: l
					});
					o = bt(a = e.matches, r)
				}
				T.set(t, d);
				let p = I,
					h = await ie("loader", E, f, [o], a, t),
					m = h[o.route.id];
				ct(m) && (m = await vt(m, f.signal, !0) || m);
				T.get(t) === d && T.delete(t);
				if (f.signal.aborted) return;
				if (G.has(t)) return void ce(t, St(void 0));
				if (dt(m)) return L > p ? void ce(t, St(void 0)) : (H.add(t), void(await ae(f, m, !1, {
					preventScrollReset: s
				})));
				if (ut(m)) return void ue(t, n, m.error);
				U(!ct(m), "Unhandled fetcher deferred data"), ce(t, St(m.data))
			}(t, n, m, y, f, h.active, l, b, g))
		},
		revalidate: function () {
			se(), te({
				revalidation: "loading"
			}), "submitting" !== E.navigation.state && ("idle" !== E.navigation.state ? re(O || E.historyAction, E.navigation.location, {
				overrideNavigation: E.navigation,
				enableViewTransition: !0 === P
			}) : re(E.historyAction, E.location, {
				startUninterruptedRevalidation: !0
			}))
		},
		createHref: t => e.history.createHref(t),
		encodeLocation: t => e.history.encodeLocation(t),
		getFetcher: de,
		deleteFetcher: function (e) {
			let t = (W.get(e) || 0) - 1;
			t <= 0 ? (W.delete(e), G.add(e), p.v7_fetcherPersist || fe(e)) : W.set(e, t), te({
				fetchers: new Map(E.fetchers)
			})
		},
		dispose: function () {
			h && h(), _ && _(), m.clear(), S && S.abort(), E.fetchers.forEach(((e, t) => fe(t))), E.blockers.forEach(((e, t) => ye(t)))
		},
		getBlocker: function (e, t) {
			let n = E.blockers.get(e) || Fe;
			return Q.get(e) !== t && Q.set(e, t), n
		},
		deleteBlocker: ye,
		patchRoutes: function (e, t) {
			let n = null == a;
			We(e, t, a || c, s, o), n && (c = [...c], te({}))
		},
		_internalFetchControllers: T,
		_internalActiveDeferreds: X,
		_internalSetRoutes: function (e) {
			s = {}, a = Z(e, o, void 0, s)
		}
	}, l
}

function ze(e, t, n, r, o, a, i, l) {
	let s, c;
	if (i) {
		s = [];
		for (let e of t)
			if (s.push(e), e.route.id === i) {
				c = e;
				break
			}
	} else s = t, c = t[t.length - 1];
	let u = ye(o || ".", ve(s, a), he(e.pathname, n) || e.pathname, "path" === l);
	if (null == o && (u.search = e.search, u.hash = e.hash), (null == o || "" === o || "." === o) && c) {
		let e = yt(u.search);
		if (c.route.index && !e) u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
		else if (!c.route.index && e) {
			let e = new URLSearchParams(u.search),
				t = e.getAll("index");
			e.delete("index"), t.filter((e => e)).forEach((t => e.append("index", t)));
			let n = e.toString();
			u.search = n ? "?" + n : ""
		}
	}
	return r && "/" !== n && (u.pathname = "/" === u.pathname ? n : be([n, u.pathname])), G(u)
}

function Ae(e, t, n, r) {
	if (!r || ! function (e) {
			return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
		}(r)) return {
		path: n
	};
	if (r.formMethod && (o = r.formMethod, !Pe.has(o.toLowerCase()))) return {
		path: n,
		error: at(405, {
			method: r.formMethod
		})
	};
	var o;
	let a, i, l = () => ({
			path: n,
			error: at(400, {
				type: "invalid-body"
			})
		}),
		s = r.formMethod || "get",
		c = e ? s.toUpperCase() : s.toLowerCase(),
		u = lt(n);
	if (void 0 !== r.body) {
		if ("text/plain" === r.formEncType) {
			if (!ht(c)) return l();
			let e = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce(((e, t) => {
				let [n, r] = t;
				return "" + e + n + "=" + r + "\n"
			}), "") : String(r.body);
			return {
				path: n,
				submission: {
					formMethod: c,
					formAction: u,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: e
				}
			}
		}
		if ("application/json" === r.formEncType) {
			if (!ht(c)) return l();
			try {
				let e = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: c,
						formAction: u,
						formEncType: r.formEncType,
						formData: void 0,
						json: e,
						text: void 0
					}
				}
			} catch (p) {
				return l()
			}
		}
	}
	if (U("function" == typeof FormData, "FormData is not available in this environment"), r.formData) a = Ze(r.formData), i = r.formData;
	else if (r.body instanceof FormData) a = Ze(r.body), i = r.body;
	else if (r.body instanceof URLSearchParams) a = r.body, i = Je(a);
	else if (null == r.body) a = new URLSearchParams, i = new FormData;
	else try {
		a = new URLSearchParams(r.body), i = Je(a)
	} catch (p) {
		return l()
	}
	let d = {
		formMethod: c,
		formAction: u,
		formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
		formData: i,
		json: void 0,
		text: void 0
	};
	if (ht(d.formMethod)) return {
		path: n,
		submission: d
	};
	let f = X(n);
	return t && f.search && yt(f.search) && a.append("index", ""), f.search = "?" + a, {
		path: G(f),
		submission: d
	}
}

function De(e, t, n) {
	void 0 === n && (n = !1);
	let r = e.findIndex((e => e.route.id === t));
	return r >= 0 ? e.slice(0, n ? r + 1 : r) : e
}

function He(e, t, n, r, o, a, i, l, s, c, u, d, f, p, h, m) {
	let g = m ? ut(m[1]) ? m[1].error : m[1].data : void 0,
		v = e.createURL(t.location),
		y = e.createURL(o),
		b = n;
	a && t.errors ? b = De(n, Object.keys(t.errors)[0], !0) : m && ut(m[1]) && (b = De(n, m[0]));
	let w = m ? m[1].statusCode : void 0,
		k = i && w && w >= 400,
		x = b.filter(((e, n) => {
			let {
				route: o
			} = e;
			if (o.lazy) return !0;
			if (null == o.loader) return !1;
			if (a) return Be(o, t.loaderData, t.errors);
			if (function (e, t, n) {
					let r = !t || n.route.id !== t.route.id,
						o = void 0 === e[n.route.id];
					return r || o
				}(t.loaderData, t.matches[n], e) || s.some((t => t === e.route.id))) return !0;
			let i = t.matches[n],
				c = e;
			return Ve(e, z({
				currentUrl: v,
				currentParams: i.params,
				nextUrl: y,
				nextParams: c.params
			}, r, {
				actionResult: g,
				actionStatus: w,
				defaultShouldRevalidate: !k && (l || v.pathname + v.search === y.pathname + y.search || v.search !== y.search || Ue(i, c))
			}))
		})),
		S = [];
	return d.forEach(((e, o) => {
		if (a || !n.some((t => t.route.id === e.routeId)) || u.has(o)) return;
		let i = J(p, e.path, h);
		if (!i) return void S.push({
			key: o,
			routeId: e.routeId,
			path: e.path,
			matches: null,
			match: null,
			controller: null
		});
		let s = t.fetchers.get(o),
			d = bt(i, e.path),
			m = !1;
		f.has(o) ? m = !1 : c.has(o) ? (c.delete(o), m = !0) : m = s && "idle" !== s.state && void 0 === s.data ? l : Ve(d, z({
			currentUrl: v,
			currentParams: t.matches[t.matches.length - 1].params,
			nextUrl: y,
			nextParams: n[n.length - 1].params
		}, r, {
			actionResult: g,
			actionStatus: w,
			defaultShouldRevalidate: !k && l
		})), m && S.push({
			key: o,
			routeId: e.routeId,
			path: e.path,
			matches: i,
			match: d,
			controller: new AbortController
		})
	})), [x, S]
}

function Be(e, t, n) {
	if (e.lazy) return !0;
	if (!e.loader) return !1;
	let r = null != t && void 0 !== t[e.id],
		o = null != n && void 0 !== n[e.id];
	return !(!r && o) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !r && !o)
}

function Ue(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Ve(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if ("boolean" == typeof n) return n
	}
	return t.defaultShouldRevalidate
}

function We(e, t, n, r, o) {
	var a;
	let i;
	if (e) {
		let t = r[e];
		U(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), i = t.children
	} else i = n;
	let l = Z(t.filter((e => !i.some((t => qe(e, t))))), o, [e || "_", "patch", String((null == (a = i) ? void 0 : a.length) || "0")], r);
	i.push(...l)
}

function qe(e, t) {
	return "id" in e && "id" in t && e.id === t.id || e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive && (!(e.children && 0 !== e.children.length || t.children && 0 !== t.children.length) || e.children.every(((e, n) => {
		var r;
		return null == (r = t.children) ? void 0 : r.some((t => qe(e, t)))
	})))
}
async function Ge(e) {
	let {
		matches: t
	} = e, n = t.filter((e => e.shouldLoad));
	return (await Promise.all(n.map((e => e.resolve())))).reduce(((e, t, r) => Object.assign(e, {
		[n[r].route.id]: t
	})), {})
}
async function Xe(e) {
	let {
		result: t,
		type: n
	} = e;
	if (pt(t)) {
		let e;
		try {
			let n = t.headers.get("Content-Type");
			e = n && /\bapplication\/json\b/.test(n) ? null == t.body ? null : await t.json() : await t.text()
		} catch (d) {
			return {
				type: K.error,
				error: d
			}
		}
		return n === K.error ? {
			type: K.error,
			error: new Se(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: K.data,
			data: e,
			statusCode: t.status,
			headers: t.headers
		}
	}
	var r, o, a, i, l, s, c, u;
	return n === K.error ? ft(t) ? t.data instanceof Error ? {
		type: K.error,
		error: t.data,
		statusCode: null == (a = t.init) ? void 0 : a.status,
		headers: null != (i = t.init) && i.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: K.error,
		error: new Se((null == (r = t.init) ? void 0 : r.status) || 500, void 0, t.data),
		statusCode: Ce(t) ? t.status : void 0,
		headers: null != (o = t.init) && o.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: K.error,
		error: t,
		statusCode: Ce(t) ? t.status : void 0
	} : function (e) {
		let t = e;
		return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
	}(t) ? {
		type: K.deferred,
		deferredData: t,
		statusCode: null == (l = t.init) ? void 0 : l.status,
		headers: (null == (s = t.init) ? void 0 : s.headers) && new Headers(t.init.headers)
	} : ft(t) ? {
		type: K.data,
		data: t.data,
		statusCode: null == (c = t.init) ? void 0 : c.status,
		headers: null != (u = t.init) && u.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: K.data,
		data: t
	}
}

function Ke(e, t, n, r, o, a) {
	let i = e.headers.get("Location");
	if (U(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !Ne.test(i)) {
		let l = r.slice(0, r.findIndex((e => e.route.id === n)) + 1);
		i = ze(new URL(t.url), l, o, !0, i, a), e.headers.set("Location", i)
	}
	return e
}

function Qe(e, t, n) {
	if (Ne.test(e)) {
		let r = e,
			o = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
			a = null != he(o.pathname, n);
		if (o.origin === t.origin && a) return o.pathname + o.search + o.hash
	}
	return e
}

function Ye(e, t, n, r) {
	let o = e.createURL(lt(t)).toString(),
		a = {
			signal: n
		};
	if (r && ht(r.formMethod)) {
		let {
			formMethod: e,
			formEncType: t
		} = r;
		a.method = e.toUpperCase(), "application/json" === t ? (a.headers = new Headers({
			"Content-Type": t
		}), a.body = JSON.stringify(r.json)) : "text/plain" === t ? a.body = r.text : "application/x-www-form-urlencoded" === t && r.formData ? a.body = Ze(r.formData) : a.body = r.formData
	}
	return new Request(o, a)
}

function Ze(e) {
	let t = new URLSearchParams;
	for (let [n, r] of e.entries()) t.append(n, "string" == typeof r ? r : r.name);
	return t
}

function Je(e) {
	let t = new FormData;
	for (let [n, r] of e.entries()) t.append(n, r);
	return t
}

function et(e, t, n, r, o, a, i) {
	let {
		loaderData: l,
		errors: s
	} = function (e, t, n, r) {
		let o, a = {},
			i = null,
			l = !1,
			s = {},
			c = n && ut(n[1]) ? n[1].error : void 0;
		return e.forEach((n => {
			if (!(n.route.id in t)) return;
			let u = n.route.id,
				d = t[u];
			if (U(!dt(d), "Cannot handle redirect results in processLoaderData"), ut(d)) {
				let t = d.error;
				void 0 !== c && (t = c, c = void 0), i = i || {}; {
					let n = rt(e, u);
					null == i[n.route.id] && (i[n.route.id] = t)
				}
				a[u] = void 0, l || (l = !0, o = Ce(d.error) ? d.error.status : 500), d.headers && (s[u] = d.headers)
			} else ct(d) ? (r.set(u, d.deferredData), a[u] = d.deferredData.data, null == d.statusCode || 200 === d.statusCode || l || (o = d.statusCode), d.headers && (s[u] = d.headers)) : (a[u] = d.data, d.statusCode && 200 !== d.statusCode && !l && (o = d.statusCode), d.headers && (s[u] = d.headers))
		})), void 0 !== c && n && (i = {
			[n[0]]: c
		}, a[n[0]] = void 0), {
			loaderData: a,
			errors: i,
			statusCode: o || 200,
			loaderHeaders: s
		}
	}(t, n, r, i);
	return o.forEach((t => {
		let {
			key: n,
			match: r,
			controller: o
		} = t, i = a[n];
		if (U(i, "Did not find corresponding fetcher result"), !o || !o.signal.aborted)
			if (ut(i)) {
				let t = rt(e.matches, null == r ? void 0 : r.route.id);
				s && s[t.route.id] || (s = z({}, s, {
					[t.route.id]: i.error
				})), e.fetchers.delete(n)
			} else if (dt(i)) U(!1, "Unhandled fetcher revalidation redirect");
		else if (ct(i)) U(!1, "Unhandled fetcher deferred data");
		else {
			let t = St(i.data);
			e.fetchers.set(n, t)
		}
	})), {
		loaderData: l,
		errors: s
	}
}

function tt(e, t, n, r) {
	let o = z({}, t);
	for (let a of n) {
		let n = a.route.id;
		if (t.hasOwnProperty(n) ? void 0 !== t[n] && (o[n] = t[n]) : void 0 !== e[n] && a.route.loader && (o[n] = e[n]), r && r.hasOwnProperty(n)) break
	}
	return o
}

function nt(e) {
	return e ? ut(e[1]) ? {
		actionData: {}
	} : {
		actionData: {
			[e[0]]: e[1].data
		}
	} : {}
}

function rt(e, t) {
	return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
}

function ot(e) {
	let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
		id: "__shim-error-route__"
	};
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	}
}

function at(e, t) {
	let {
		pathname: n,
		routeId: r,
		method: o,
		type: a,
		message: i
	} = void 0 === t ? {} : t, l = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return 400 === e ? (l = "Bad Request", o && n && r ? s = "You made a " + o + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === a ? s = "defer() is not supported in actions" : "invalid-body" === a && (s = "Unable to encode submission body")) : 403 === e ? (l = "Forbidden", s = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (l = "Not Found", s = 'No route matches URL "' + n + '"') : 405 === e && (l = "Method Not Allowed", o && n && r ? s = "You made a " + o.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')), new Se(e || 500, l, new Error(s), !0)
}

function it(e) {
	let t = Object.entries(e);
	for (let n = t.length - 1; n >= 0; n--) {
		let [e, r] = t[n];
		if (dt(r)) return {
			key: e,
			result: r
		}
	}
}

function lt(e) {
	return G(z({}, "string" == typeof e ? X(e) : e, {
		hash: ""
	}))
}

function st(e) {
	return pt(e.result) && je.has(e.result.status)
}

function ct(e) {
	return e.type === K.deferred
}

function ut(e) {
	return e.type === K.error
}

function dt(e) {
	return (e && e.type) === K.redirect
}

function ft(e) {
	return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
}

function pt(e) {
	return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
}

function ht(e) {
	return Oe.has(e.toLowerCase())
}
async function mt(e, t, n, r, o) {
	let a = Object.entries(t);
	for (let i = 0; i < a.length; i++) {
		let [l, s] = a[i], c = e.find((e => (null == e ? void 0 : e.route.id) === l));
		if (!c) continue;
		let u = r.find((e => e.route.id === c.route.id)),
			d = null != u && !Ue(u, c) && void 0 !== (o && o[c.route.id]);
		ct(s) && d && await vt(s, n, !1).then((e => {
			e && (t[l] = e)
		}))
	}
}
async function gt(e, t, n) {
	for (let r = 0; r < n.length; r++) {
		let {
			key: o,
			routeId: a,
			controller: i
		} = n[r], l = t[o];
		e.find((e => (null == e ? void 0 : e.route.id) === a)) && (ct(l) && (U(i, "Expected an AbortController for revalidating fetcher deferred result"), await vt(l, i.signal, !0).then((e => {
			e && (t[o] = e)
		}))))
	}
}
async function vt(e, t, n) {
	if (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t))) {
		if (n) try {
			return {
				type: K.data,
				data: e.deferredData.unwrappedData
			}
		} catch (r) {
			return {
				type: K.error,
				error: r
			}
		}
		return {
			type: K.data,
			data: e.deferredData.data
		}
	}
}

function yt(e) {
	return new URLSearchParams(e).getAll("index").some((e => "" === e))
}

function bt(e, t) {
	let n = "string" == typeof t ? X(t).search : t.search;
	if (e[e.length - 1].route.index && yt(n || "")) return e[e.length - 1];
	let r = ge(e);
	return r[r.length - 1]
}

function wt(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: o,
		formData: a,
		json: i
	} = e;
	if (t && n && r) return null != o ? {
		formMethod: t,
		formAction: n,
		formEncType: r,
		formData: void 0,
		json: void 0,
		text: o
	} : null != a ? {
		formMethod: t,
		formAction: n,
		formEncType: r,
		formData: a,
		json: void 0,
		text: void 0
	} : void 0 !== i ? {
		formMethod: t,
		formAction: n,
		formEncType: r,
		formData: void 0,
		json: i,
		text: void 0
	} : void 0
}

function kt(e, t) {
	if (t) {
		return {
			state: "loading",
			location: e,
			formMethod: t.formMethod,
			formAction: t.formAction,
			formEncType: t.formEncType,
			formData: t.formData,
			json: t.json,
			text: t.text
		}
	}
	return {
		state: "loading",
		location: e,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	}
}

function xt(e, t) {
	if (e) {
		return {
			state: "loading",
			formMethod: e.formMethod,
			formAction: e.formAction,
			formEncType: e.formEncType,
			formData: e.formData,
			json: e.json,
			text: e.text,
			data: t
		}
	}
	return {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	}
}

function St(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	}
}

function Ct() {
	return Ct = Object.assign ? Object.assign.bind() : function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Ct.apply(this, arguments)
}
const Et = v.createContext(null),
	Ot = v.createContext(null),
	$t = v.createContext(null),
	Pt = v.createContext(null),
	jt = v.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1
	}),
	_t = v.createContext(null);

function Rt() {
	return null != v.useContext(Pt)
}

function Mt() {
	return Rt() || U(!1), v.useContext(Pt).location
}

function Ft(e) {
	v.useContext($t).static || v.useLayoutEffect(e)
}

function Nt() {
	let {
		isDataRoute: e
	} = v.useContext(jt);
	return e ? function () {
		let {
			router: e
		} = Ut(), t = Wt(), n = v.useRef(!1);
		return Ft((() => {
			n.current = !0
		})), v.useCallback((function (r, o) {
			void 0 === o && (o = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, Ct({
				fromRouteId: t
			}, o)))
		}), [e, t])
	}() : function () {
		Rt() || U(!1);
		let e = v.useContext(Et),
			{
				basename: t,
				future: n,
				navigator: r
			} = v.useContext($t),
			{
				matches: o
			} = v.useContext(jt),
			{
				pathname: a
			} = Mt(),
			i = JSON.stringify(ve(o, n.v7_relativeSplatPath)),
			l = v.useRef(!1);
		return Ft((() => {
			l.current = !0
		})), v.useCallback((function (n, o) {
			if (void 0 === o && (o = {}), !l.current) return;
			if ("number" == typeof n) return void r.go(n);
			let s = ye(n, JSON.parse(i), a, "path" === o.relative);
			null == e && "/" !== t && (s.pathname = "/" === s.pathname ? t : be([t, s.pathname])), (o.replace ? r.replace : r.push)(s, o.state, o)
		}), [t, r, i, a, e])
	}()
}

function Tt(e, t) {
	let {
		relative: n
	} = void 0 === t ? {} : t, {
		future: r
	} = v.useContext($t), {
		matches: o
	} = v.useContext(jt), {
		pathname: a
	} = Mt(), i = JSON.stringify(ve(o, r.v7_relativeSplatPath));
	return v.useMemo((() => ye(e, JSON.parse(i), a, "path" === n)), [e, i, a, n])
}

function It(e, t, n, r) {
	Rt() || U(!1);
	let {
		navigator: o
	} = v.useContext($t), {
		matches: a
	} = v.useContext(jt), i = a[a.length - 1], l = i ? i.params : {};
	!i || i.pathname;
	let s = i ? i.pathnameBase : "/";
	i && i.route;
	let c, u = Mt();
	if (t) {
		var d;
		let e = "string" == typeof t ? X(t) : t;
		"/" === s || (null == (d = e.pathname) ? void 0 : d.startsWith(s)) || U(!1), c = e
	} else c = u;
	let f = c.pathname || "/",
		p = f;
	if ("/" !== s) {
		let e = s.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/")
	}
	let h = J(e, {
			pathname: p
		}),
		m = function (e, t, n, r) {
			var o;
			void 0 === t && (t = []);
			void 0 === n && (n = null);
			void 0 === r && (r = null);
			if (null == e) {
				var a;
				if (!n) return null;
				if (n.errors) e = n.matches;
				else {
					if (!(null != (a = r) && a.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0)) return null;
					e = n.matches
				}
			}
			let i = e,
				l = null == (o = n) ? void 0 : o.errors;
			if (null != l) {
				let e = i.findIndex((e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])));
				e >= 0 || U(!1), i = i.slice(0, Math.min(i.length, e + 1))
			}
			let s = !1,
				c = -1;
			if (n && r && r.v7_partialHydration)
				for (let u = 0; u < i.length; u++) {
					let e = i[u];
					if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (c = u), e.route.id) {
						let {
							loaderData: t,
							errors: r
						} = n, o = e.route.loader && void 0 === t[e.route.id] && (!r || void 0 === r[e.route.id]);
						if (e.route.lazy || o) {
							s = !0, i = c >= 0 ? i.slice(0, c + 1) : [i[0]];
							break
						}
					}
				}
			return i.reduceRight(((e, r, o) => {
				let a, u = !1,
					d = null,
					f = null;
				var p;
				n && (a = l && r.route.id ? l[r.route.id] : void 0, d = r.route.errorElement || zt, s && (c < 0 && 0 === o ? (Xt[p = "route-fallback"] || (Xt[p] = !0), u = !0, f = null) : c === o && (u = !0, f = r.route.hydrateFallbackElement || null)));
				let h = t.concat(i.slice(0, o + 1)),
					m = () => {
						let t;
						return t = a ? d : u ? f : r.route.Component ? v.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, v.createElement(Dt, {
							match: r,
							routeContext: {
								outlet: e,
								matches: h,
								isDataRoute: null != n
							},
							children: t
						})
					};
				return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o) ? v.createElement(At, {
					location: n.location,
					revalidation: n.revalidation,
					component: d,
					error: a,
					children: m(),
					routeContext: {
						outlet: null,
						matches: h,
						isDataRoute: !0
					}
				}) : m()
			}), null)
		}(h && h.map((e => Object.assign({}, e, {
			params: Object.assign({}, l, e.params),
			pathname: be([s, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
			pathnameBase: "/" === e.pathnameBase ? s : be([s, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
		}))), a, n, r);
	return t && m ? v.createElement(Pt.Provider, {
		value: {
			location: Ct({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, c),
			navigationType: A.Pop
		}
	}, m) : m
}

function Lt() {
	let e = function () {
			var e;
			let t = v.useContext(_t),
				n = Vt(),
				r = Wt();
			if (void 0 !== t) return t;
			return null == (e = n.errors) ? void 0 : e[r]
		}(),
		t = Ce(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		r = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		};
	return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? v.createElement("pre", {
		style: r
	}, n) : null, null)
}
const zt = v.createElement(Lt, null);
class At extends v.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		}
	}
	static getDerivedStateFromError(e) {
		return {
			error: e
		}
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: void 0 !== e.error ? e.error : t.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		}
	}
	componentDidCatch(e, t) {
		console.error("React Router caught the following error during render", e, t)
	}
	render() {
		return void 0 !== this.state.error ? v.createElement(jt.Provider, {
			value: this.props.routeContext
		}, v.createElement(_t.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function Dt(e) {
	let {
		routeContext: t,
		match: n,
		children: r
	} = e, o = v.useContext(Et);
	return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(jt.Provider, {
		value: t
	}, r)
}
var Ht = function (e) {
		return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
	}(Ht || {}),
	Bt = function (e) {
		return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
	}(Bt || {});

function Ut(e) {
	let t = v.useContext(Et);
	return t || U(!1), t
}

function Vt(e) {
	let t = v.useContext(Ot);
	return t || U(!1), t
}

function Wt(e) {
	let t = function () {
			let e = v.useContext(jt);
			return e || U(!1), e
		}(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || U(!1), n.route.id
}
let qt = 0;

function Gt(e) {
	let {
		router: t,
		basename: n
	} = Ut(Ht.UseBlocker), r = Vt(Bt.UseBlocker), [o, a] = v.useState(""), i = v.useCallback((t => {
		if ("function" != typeof e) return !!e;
		if ("/" === n) return e(t);
		let {
			currentLocation: r,
			nextLocation: o,
			historyAction: a
		} = t;
		return e({
			currentLocation: Ct({}, r, {
				pathname: he(r.pathname, n) || r.pathname
			}),
			nextLocation: Ct({}, o, {
				pathname: he(o.pathname, n) || o.pathname
			}),
			historyAction: a
		})
	}), [n, e]);
	return v.useEffect((() => {
		let e = String(++qt);
		return a(e), () => t.deleteBlocker(e)
	}), [t]), v.useEffect((() => {
		"" !== o && t.getBlocker(o, i)
	}), [t, o, i]), o && r.blockers.has(o) ? r.blockers.get(o) : Fe
}
const Xt = {};

function Kt(e) {
	U(!1)
}

function Qt(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: o = A.Pop,
		navigator: a,
		static: i = !1,
		future: l
	} = e;
	Rt() && U(!1);
	let s = t.replace(/^\/*/, "/"),
		c = v.useMemo((() => ({
			basename: s,
			navigator: a,
			static: i,
			future: Ct({
				v7_relativeSplatPath: !1
			}, l)
		})), [s, l, a, i]);
	"string" == typeof r && (r = X(r));
	let {
		pathname: u = "/",
		search: d = "",
		hash: f = "",
		state: p = null,
		key: h = "default"
	} = r, m = v.useMemo((() => {
		let e = he(u, s);
		return null == e ? null : {
			location: {
				pathname: e,
				search: d,
				hash: f,
				state: p,
				key: h
			},
			navigationType: o
		}
	}), [s, u, d, f, p, h, o]);
	return null == m ? null : v.createElement($t.Provider, {
		value: c
	}, v.createElement(Pt.Provider, {
		children: n,
		value: m
	}))
}

function Yt(e) {
	let {
		children: t,
		location: n
	} = e;
	return It(Zt(t), n)
}

function Zt(e, t) {
	void 0 === t && (t = []);
	let n = [];
	return v.Children.forEach(e, ((e, r) => {
		if (!v.isValidElement(e)) return;
		let o = [...t, r];
		if (e.type === v.Fragment) return void n.push.apply(n, Zt(e.props.children, o));
		e.type !== Kt && U(!1), e.props.index && e.props.children && U(!1);
		let a = {
			id: e.props.id || o.join("-"),
			caseSensitive: e.props.caseSensitive,
			element: e.props.element,
			Component: e.props.Component,
			index: e.props.index,
			path: e.props.path,
			loader: e.props.loader,
			action: e.props.action,
			errorElement: e.props.errorElement,
			ErrorBoundary: e.props.ErrorBoundary,
			hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
			shouldRevalidate: e.props.shouldRevalidate,
			handle: e.props.handle,
			lazy: e.props.lazy
		};
		e.props.children && (a.children = Zt(e.props.children, o)), n.push(a)
	})), n
}

function Jt(e) {
	let t = {
		hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
	};
	return e.Component && Object.assign(t, {
		element: v.createElement(e.Component),
		Component: void 0
	}), e.HydrateFallback && Object.assign(t, {
		hydrateFallbackElement: v.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	}), e.ErrorBoundary && Object.assign(t, {
		errorElement: v.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	}), t
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
 */
function en() {
	return en = Object.assign ? Object.assign.bind() : function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, en.apply(this, arguments)
}

function tn(e) {
	return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map((e => [n, e])) : [
			[n, r]
		])
	}), []))
}
new Promise((() => {}));
const nn = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
try {
	window.__reactRouterVersion = "6"
} catch (wS) {}

function rn() {
	var e;
	let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = en({}, t, {
		errors: on(t.errors)
	})), t
}

function on(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, o] of t)
		if (o && "RouteErrorResponse" === o.__type) n[r] = new Se(o.status, o.statusText, o.data, !0 === o.internal);
		else if (o && "Error" === o.__type) {
		if (o.__subType) {
			let e = window[o.__subType];
			if ("function" == typeof e) try {
				let t = new e(o.message);
				t.stack = "", n[r] = t
			} catch (wS) {}
		}
		if (null == n[r]) {
			let e = new Error(o.message);
			e.stack = "", n[r] = e
		}
	} else n[r] = o;
	return n
}
const an = v.createContext({
		isTransitioning: !1
	}),
	ln = v.createContext(new Map),
	sn = b.startTransition,
	cn = L.flushSync;

function un(e) {
	cn ? cn(e) : e()
}
class dn {
	constructor() {
		this.status = "pending", this.promise = new Promise(((e, t) => {
			this.resolve = t => {
				"pending" === this.status && (this.status = "resolved", e(t))
			}, this.reject = e => {
				"pending" === this.status && (this.status = "rejected", t(e))
			}
		}))
	}
}

function fn(e) {
	let {
		fallbackElement: t,
		router: n,
		future: r
	} = e, [o, a] = v.useState(n.state), [i, l] = v.useState(), [s, c] = v.useState({
		isTransitioning: !1
	}), [u, d] = v.useState(), [f, p] = v.useState(), [h, m] = v.useState(), g = v.useRef(new Map), {
		v7_startTransition: y
	} = r || {}, b = v.useCallback((e => {
		y ? function (e) {
			sn ? sn(e) : e()
		}(e) : e()
	}), [y]), w = v.useCallback(((e, t) => {
		let {
			deletedFetchers: r,
			flushSync: o,
			viewTransitionOpts: i
		} = t;
		e.fetchers.forEach(((e, t) => {
			void 0 !== e.data && g.current.set(t, e.data)
		})), r.forEach((e => g.current.delete(e)));
		let s = null == n.window || null == n.window.document || "function" != typeof n.window.document.startViewTransition;
		if (i && !s) {
			if (o) {
				un((() => {
					f && (u && u.resolve(), f.skipTransition()), c({
						isTransitioning: !0,
						flushSync: !0,
						currentLocation: i.currentLocation,
						nextLocation: i.nextLocation
					})
				}));
				let t = n.window.document.startViewTransition((() => {
					un((() => a(e)))
				}));
				return t.finished.finally((() => {
					un((() => {
						d(void 0), p(void 0), l(void 0), c({
							isTransitioning: !1
						})
					}))
				})), void un((() => p(t)))
			}
			f ? (u && u.resolve(), f.skipTransition(), m({
				state: e,
				currentLocation: i.currentLocation,
				nextLocation: i.nextLocation
			})) : (l(e), c({
				isTransitioning: !0,
				flushSync: !1,
				currentLocation: i.currentLocation,
				nextLocation: i.nextLocation
			}))
		} else o ? un((() => a(e))) : b((() => a(e)))
	}), [n.window, f, u, g, b]);
	v.useLayoutEffect((() => n.subscribe(w)), [n, w]), v.useEffect((() => {
		s.isTransitioning && !s.flushSync && d(new dn)
	}), [s]), v.useEffect((() => {
		if (u && i && n.window) {
			let e = i,
				t = u.promise,
				r = n.window.document.startViewTransition((async () => {
					b((() => a(e))), await t
				}));
			r.finished.finally((() => {
				d(void 0), p(void 0), l(void 0), c({
					isTransitioning: !1
				})
			})), p(r)
		}
	}), [b, i, u, n.window]), v.useEffect((() => {
		u && i && o.location.key === i.location.key && u.resolve()
	}), [u, f, o.location, i]), v.useEffect((() => {
		!s.isTransitioning && h && (l(h.state), c({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: h.currentLocation,
			nextLocation: h.nextLocation
		}), m(void 0))
	}), [s.isTransitioning, h]), v.useEffect((() => {}), []);
	let k = v.useMemo((() => ({
			createHref: n.createHref,
			encodeLocation: n.encodeLocation,
			go: e => n.navigate(e),
			push: (e, t, r) => n.navigate(e, {
				state: t,
				preventScrollReset: null == r ? void 0 : r.preventScrollReset
			}),
			replace: (e, t, r) => n.navigate(e, {
				replace: !0,
				state: t,
				preventScrollReset: null == r ? void 0 : r.preventScrollReset
			})
		})), [n]),
		x = n.basename || "/",
		S = v.useMemo((() => ({
			router: n,
			navigator: k,
			static: !1,
			basename: x
		})), [n, k, x]),
		C = v.useMemo((() => ({
			v7_relativeSplatPath: n.future.v7_relativeSplatPath
		})), [n.future.v7_relativeSplatPath]);
	return v.useEffect((() => function (e, t) {
		null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation)
	}(r, n.future)), [r, n.future]), v.createElement(v.Fragment, null, v.createElement(Et.Provider, {
		value: S
	}, v.createElement(Ot.Provider, {
		value: o
	}, v.createElement(ln.Provider, {
		value: g.current
	}, v.createElement(an.Provider, {
		value: s
	}, v.createElement(Qt, {
		basename: x,
		location: o.location,
		navigationType: o.historyAction,
		navigator: k,
		future: C
	}, o.initialized || n.future.v7_partialHydration ? v.createElement(pn, {
		routes: n.routes,
		future: n.future,
		state: o
	}) : t))))), null)
}
const pn = v.memo(hn);

function hn(e) {
	let {
		routes: t,
		future: n,
		state: r
	} = e;
	return It(t, void 0, r, n)
}
const mn = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
	gn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	vn = v.forwardRef((function (e, t) {
		let n, {
				onClick: r,
				relative: o,
				reloadDocument: a,
				replace: i,
				state: l,
				target: s,
				to: c,
				preventScrollReset: u,
				viewTransition: d
			} = e,
			f = function (e, t) {
				if (null == e) return {};
				var n, r, o = {},
					a = Object.keys(e);
				for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
				return o
			}(e, nn),
			{
				basename: p
			} = v.useContext($t),
			h = !1;
		if ("string" == typeof c && gn.test(c) && (n = c, mn)) try {
			let e = new URL(window.location.href),
				t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
				n = he(t.pathname, p);
			t.origin === e.origin && null != n ? c = n + t.search + t.hash : h = !0
		} catch (wS) {}
		let m = function (e, t) {
				let {
					relative: n
				} = void 0 === t ? {} : t;
				Rt() || U(!1);
				let {
					basename: r,
					navigator: o
				} = v.useContext($t), {
					hash: a,
					pathname: i,
					search: l
				} = Tt(e, {
					relative: n
				}), s = i;
				return "/" !== r && (s = "/" === i ? r : be([r, i])), o.createHref({
					pathname: s,
					search: l,
					hash: a
				})
			}(c, {
				relative: o
			}),
			g = function (e, t) {
				let {
					target: n,
					replace: r,
					state: o,
					preventScrollReset: a,
					relative: i,
					viewTransition: l
				} = void 0 === t ? {} : t, s = Nt(), c = Mt(), u = Tt(e, {
					relative: i
				});
				return v.useCallback((t => {
					if (function (e, t) {
							return !(0 !== e.button || t && "_self" !== t || function (e) {
								return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
							}(e))
						}(t, n)) {
						t.preventDefault();
						let n = void 0 !== r ? r : G(c) === G(u);
						s(e, {
							replace: n,
							state: o,
							preventScrollReset: a,
							relative: i,
							viewTransition: l
						})
					}
				}), [c, s, u, r, o, n, e, a, i, l])
			}(c, {
				replace: i,
				state: l,
				target: s,
				preventScrollReset: u,
				relative: o,
				viewTransition: d
			});
		return v.createElement("a", en({}, f, {
			href: n || m,
			onClick: h || a ? r : function (e) {
				r && r(e), e.defaultPrevented || g(e)
			},
			ref: t,
			target: s
		}))
	}));
var yn, bn, wn, kn;

function xn(e) {
	let t = v.useRef(tn(e)),
		n = v.useRef(!1),
		r = Mt(),
		o = v.useMemo((() => function (e, t) {
			let n = tn(e);
			return t && t.forEach(((e, r) => {
				n.has(r) || t.getAll(r).forEach((e => {
					n.append(r, e)
				}))
			})), n
		}(r.search, n.current ? null : t.current)), [r.search]),
		a = Nt(),
		i = v.useCallback(((e, t) => {
			const r = tn("function" == typeof e ? e(o) : e);
			n.current = !0, a("?" + r, t)
		}), [a, o]);
	return [o, i]
}(bn = yn || (yn = {})).UseScrollRestoration = "useScrollRestoration", bn.UseSubmit = "useSubmit", bn.UseSubmitFetcher = "useSubmitFetcher", bn.UseFetcher = "useFetcher", bn.useViewTransitionState = "useViewTransitionState", (kn = wn || (wn = {})).UseFetcher = "useFetcher", kn.UseFetchers = "useFetchers", kn.UseScrollRestoration = "useScrollRestoration";
var Sn, Cn, En = {
	exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
const On = o((Sn || (Sn = 1, Cn = En, function () {
	var e = {}.hasOwnProperty;

	function t() {
		for (var e = "", t = 0; t < arguments.length; t++) {
			var o = arguments[t];
			o && (e = r(e, n(o)))
		}
		return e
	}

	function n(n) {
		if ("string" == typeof n || "number" == typeof n) return n;
		if ("object" != typeof n) return "";
		if (Array.isArray(n)) return t.apply(null, n);
		if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) return n.toString();
		var o = "";
		for (var a in n) e.call(n, a) && n[a] && (o = r(o, a));
		return o
	}

	function r(e, t) {
		return t ? e ? e + " " + t : e + t : e
	}
	Cn.exports ? (t.default = t, Cn.exports = t) : window.classNames = t
}()), En.exports));

function $n() {
	return $n = Object.assign ? Object.assign.bind() : function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, $n.apply(null, arguments)
}

function Pn(e) {
	return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	})(e)
}
var jn = Symbol.for("react.element"),
	_n = Symbol.for("react.transitional.element"),
	Rn = Symbol.for("react.fragment");

function Mn(e) {
	return e && "object" === Pn(e) && (e.$$typeof === jn || e.$$typeof === _n) && e.type === Rn
}

function Fn(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = [];
	return y.Children.forEach(e, (function (e) {
		(null != e || t.keepEmpty) && (Array.isArray(e) ? n = n.concat(Fn(e)) : Mn(e) && e.props ? n = n.concat(Fn(e.props.children, t)) : n.push(e))
	})), n
}
var Nn = {};

function Tn(e, t) {}

function In(e, t) {}

function Ln(e, t, n) {
	t || Nn[n] || (e(!1, n), Nn[n] = !0)
}

function zn(e, t) {
	Ln(Tn, e, t)
}

function An(e) {
	var t = function (e, t) {
		if ("object" != Pn(e) || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (void 0 !== n) {
			var r = n.call(e, t);
			if ("object" != Pn(r)) return r;
			throw new TypeError("@@toPrimitive must return a primitive value.")
		}
		return ("string" === t ? String : Number)(e)
	}(e, "string");
	return "symbol" == Pn(t) ? t : t + ""
}

function Dn(e, t, n) {
	return (t = An(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function Hn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter((function (t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		}))), n.push.apply(n, r)
	}
	return n
}

function Bn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2 ? Hn(Object(n), !0).forEach((function (t) {
			Dn(e, t, n[t])
		})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach((function (t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
		}))
	}
	return e
}

function Un(e) {
	return e instanceof HTMLElement || e instanceof SVGElement
}

function Vn(e) {
	return e && "object" === Pn(e) && Un(e.nativeElement) ? e.nativeElement : Un(e) ? e : null
}

function Wn(e) {
	var t, n = Vn(e);
	return n || (e instanceof y.Component ? null === (t = I.findDOMNode) || void 0 === t ? void 0 : t.call(I, e) : null)
}
zn.preMessage = function (e) {}, zn.resetWarned = function () {
	Nn = {}
}, zn.noteOnce = function (e, t) {
	Ln(In, e, t)
};
var qn, Gn, Xn = {
		exports: {}
	},
	Kn = {};
var Qn = (Gn || (Gn = 1, Xn.exports = function () {
	if (qn) return Kn;
	qn = 1;
	var e, t = Symbol.for("react.element"),
		n = Symbol.for("react.portal"),
		r = Symbol.for("react.fragment"),
		o = Symbol.for("react.strict_mode"),
		a = Symbol.for("react.profiler"),
		i = Symbol.for("react.provider"),
		l = Symbol.for("react.context"),
		s = Symbol.for("react.server_context"),
		c = Symbol.for("react.forward_ref"),
		u = Symbol.for("react.suspense"),
		d = Symbol.for("react.suspense_list"),
		f = Symbol.for("react.memo"),
		p = Symbol.for("react.lazy"),
		h = Symbol.for("react.offscreen");

	function m(e) {
		if ("object" == typeof e && null !== e) {
			var h = e.$$typeof;
			switch (h) {
				case t:
					switch (e = e.type) {
						case r:
						case a:
						case o:
						case u:
						case d:
							return e;
						default:
							switch (e = e && e.$$typeof) {
								case s:
								case l:
								case c:
								case p:
								case f:
								case i:
									return e;
								default:
									return h
							}
					}
					case n:
						return h
			}
		}
	}
	return e = Symbol.for("react.module.reference"), Kn.ContextConsumer = l, Kn.ContextProvider = i, Kn.Element = t, Kn.ForwardRef = c, Kn.Fragment = r, Kn.Lazy = p, Kn.Memo = f, Kn.Portal = n, Kn.Profiler = a, Kn.StrictMode = o, Kn.Suspense = u, Kn.SuspenseList = d, Kn.isAsyncMode = function () {
		return !1
	}, Kn.isConcurrentMode = function () {
		return !1
	}, Kn.isContextConsumer = function (e) {
		return m(e) === l
	}, Kn.isContextProvider = function (e) {
		return m(e) === i
	}, Kn.isElement = function (e) {
		return "object" == typeof e && null !== e && e.$$typeof === t
	}, Kn.isForwardRef = function (e) {
		return m(e) === c
	}, Kn.isFragment = function (e) {
		return m(e) === r
	}, Kn.isLazy = function (e) {
		return m(e) === p
	}, Kn.isMemo = function (e) {
		return m(e) === f
	}, Kn.isPortal = function (e) {
		return m(e) === n
	}, Kn.isProfiler = function (e) {
		return m(e) === a
	}, Kn.isStrictMode = function (e) {
		return m(e) === o
	}, Kn.isSuspense = function (e) {
		return m(e) === u
	}, Kn.isSuspenseList = function (e) {
		return m(e) === d
	}, Kn.isValidElementType = function (t) {
		return "string" == typeof t || "function" == typeof t || t === r || t === a || t === o || t === u || t === d || t === h || "object" == typeof t && null !== t && (t.$$typeof === p || t.$$typeof === f || t.$$typeof === i || t.$$typeof === l || t.$$typeof === c || t.$$typeof === e || void 0 !== t.getModuleId)
	}, Kn.typeOf = m, Kn
}()), Xn.exports);

function Yn(e, t, n) {
	var r = v.useRef({});
	return "value" in r.current && !n(r.current.condition, t) || (r.current.value = e(), r.current.condition = t), r.current.value
}
var Zn = Number(v.version.split(".")[0]),
	Jn = function (e, t) {
		"function" == typeof e ? e(t) : "object" === Pn(e) && e && "current" in e && (e.current = t)
	},
	er = function () {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		var r = t.filter(Boolean);
		return r.length <= 1 ? r[0] : function (e) {
			t.forEach((function (t) {
				Jn(t, e)
			}))
		}
	},
	tr = function () {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return Yn((function () {
			return er.apply(void 0, t)
		}), t, (function (e, t) {
			return e.length !== t.length || e.every((function (e, n) {
				return e !== t[n]
			}))
		}))
	},
	nr = function (e) {
		var t, n;
		if (!e) return !1;
		if (rr(e) && Zn >= 19) return !0;
		var r = Qn.isMemo(e) ? e.type.type : e.type;
		return !!("function" != typeof r || null !== (t = r.prototype) && void 0 !== t && t.render || r.$$typeof === Qn.ForwardRef) && !!("function" != typeof e || null !== (n = e.prototype) && void 0 !== n && n.render || e.$$typeof === Qn.ForwardRef)
	};

function rr(e) {
	return v.isValidElement(e) && !Mn(e)
}
var or = function (e) {
		return rr(e) && nr(e)
	},
	ar = function (e) {
		if (e && rr(e)) {
			var t = e;
			return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref
		}
		return null
	};

function ir(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function lr(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, An(r.key), r)
	}
}

function sr(e, t, n) {
	return t && lr(e.prototype, t), n && lr(e, n), Object.defineProperty(e, "prototype", {
		writable: !1
	}), e
}

function cr(e, t) {
	return (cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
		return e.__proto__ = t, e
	})(e, t)
}

function ur(e, t) {
	if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, {
		constructor: {
			value: e,
			writable: !0,
			configurable: !0
		}
	}), Object.defineProperty(e, "prototype", {
		writable: !1
	}), t && cr(e, t)
}

function dr(e) {
	return (dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
		return e.__proto__ || Object.getPrototypeOf(e)
	})(e)
}

function fr() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
	} catch (t) {}
	return (fr = function () {
		return !!e
	})()
}

function pr(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e
}

function hr(e, t) {
	if (t && ("object" == Pn(t) || "function" == typeof t)) return t;
	if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
	return pr(e)
}

function mr(e) {
	var t = fr();
	return function () {
		var n, r = dr(e);
		if (t) {
			var o = dr(this).constructor;
			n = Reflect.construct(r, arguments, o)
		} else n = r.apply(this, arguments);
		return hr(this, n)
	}
}

function gr(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r
}

function vr(e) {
	if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function yr(e, t) {
	if (e) {
		if ("string" == typeof e) return gr(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gr(e, t) : void 0
	}
}

function br(e) {
	return function (e) {
		if (Array.isArray(e)) return gr(e)
	}(e) || vr(e) || yr(e) || function () {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}()
}
var wr = function (e) {
		return +setTimeout(e, 16)
	},
	kr = function (e) {
		return clearTimeout(e)
	};
"undefined" != typeof window && "requestAnimationFrame" in window && (wr = function (e) {
	return window.requestAnimationFrame(e)
}, kr = function (e) {
	return window.cancelAnimationFrame(e)
});
var xr = 0,
	Sr = new Map;

function Cr(e) {
	Sr.delete(e)
}
var Er = function (e) {
	var t = xr += 1;
	return function n(r) {
		if (0 === r) Cr(t), e();
		else {
			var o = wr((function () {
				n(r - 1)
			}));
			Sr.set(t, o)
		}
	}(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), t
};

function Or(e) {
	if (Array.isArray(e)) return e
}

function $r() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function Pr(e, t) {
	return Or(e) || function (e, t) {
		var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (null != n) {
			var r, o, a, i, l = [],
				s = !0,
				c = !1;
			try {
				if (a = (n = n.call(e)).next, 0 === t) {
					if (Object(n) !== n) return;
					s = !1
				} else
					for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
			} catch (u) {
				c = !0, o = u
			} finally {
				try {
					if (!s && null != n.return && (i = n.return(), Object(i) !== i)) return
				} finally {
					if (c) throw o
				}
			}
			return l
		}
	}(e, t) || yr(e, t) || $r()
}

function jr(e) {
	for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
	switch (o) {
		case 3:
			n ^= (255 & e.charCodeAt(r + 2)) << 16;
		case 2:
			n ^= (255 & e.charCodeAt(r + 1)) << 8;
		case 1:
			n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
	}
	return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
}

function _r() {
	return !("undefined" == typeof window || !window.document || !window.document.createElement)
}

function Rr(e, t) {
	if (!e) return !1;
	if (e.contains) return e.contains(t);
	for (var n = t; n;) {
		if (n === e) return !0;
		n = n.parentNode
	}
	return !1
}
Er.cancel = function (e) {
	var t = Sr.get(e);
	return Cr(e), kr(t)
};
var Mr = "data-rc-order",
	Fr = "data-rc-priority",
	Nr = new Map;

function Tr() {
	var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mark;
	return e ? e.startsWith("data-") ? e : "data-".concat(e) : "rc-util-key"
}

function Ir(e) {
	return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}

function Lr(e) {
	return Array.from((Nr.get(e) || e).children).filter((function (e) {
		return "STYLE" === e.tagName
	}))
}

function zr(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	if (!_r()) return null;
	var n = t.csp,
		r = t.prepend,
		o = t.priority,
		a = void 0 === o ? 0 : o,
		i = function (e) {
			return "queue" === e ? "prependQueue" : e ? "prepend" : "append"
		}(r),
		l = "prependQueue" === i,
		s = document.createElement("style");
	s.setAttribute(Mr, i), l && a && s.setAttribute(Fr, "".concat(a)), null != n && n.nonce && (s.nonce = null == n ? void 0 : n.nonce), s.innerHTML = e;
	var c = Ir(t),
		u = c.firstChild;
	if (r) {
		if (l) {
			var d = (t.styles || Lr(c)).filter((function (e) {
				if (!["prepend", "prependQueue"].includes(e.getAttribute(Mr))) return !1;
				var t = Number(e.getAttribute(Fr) || 0);
				return a >= t
			}));
			if (d.length) return c.insertBefore(s, d[d.length - 1].nextSibling), s
		}
		c.insertBefore(s, u)
	} else c.appendChild(s);
	return s
}

function Ar(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = Ir(t);
	return (t.styles || Lr(n)).find((function (n) {
		return n.getAttribute(Tr(t)) === e
	}))
}

function Dr(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = Ar(e, t);
	n && Ir(t).removeChild(n)
}

function Hr(e, t) {
	var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		r = Ir(n),
		o = Lr(r),
		a = Bn(Bn({}, n), {}, {
			styles: o
		});
	! function (e, t) {
		var n = Nr.get(e);
		if (!n || !Rr(document, n)) {
			var r = zr("", t),
				o = r.parentNode;
			Nr.set(e, o), e.removeChild(r)
		}
	}(r, a);
	var i = Ar(t, a);
	if (i) {
		var l, s, c;
		if (null !== (l = a.csp) && void 0 !== l && l.nonce && i.nonce !== (null === (s = a.csp) || void 0 === s ? void 0 : s.nonce)) i.nonce = null === (c = a.csp) || void 0 === c ? void 0 : c.nonce;
		return i.innerHTML !== e && (i.innerHTML = e), i
	}
	var u = zr(e, a);
	return u.setAttribute(Tr(a), t), u
}

function Br(e, t) {
	if (null == e) return {};
	var n = {};
	for (var r in e)
		if ({}.hasOwnProperty.call(e, r)) {
			if (-1 !== t.indexOf(r)) continue;
			n[r] = e[r]
		} return n
}

function Ur(e, t) {
	if (null == e) return {};
	var n, r, o = Br(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
	}
	return o
}

function Vr(e, t) {
	var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = new Set;
	return function e(t, o) {
		var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
			i = r.has(t);
		if (zn(!i, "Warning: There may be circular references"), i) return !1;
		if (t === o) return !0;
		if (n && a > 1) return !1;
		r.add(t);
		var l = a + 1;
		if (Array.isArray(t)) {
			if (!Array.isArray(o) || t.length !== o.length) return !1;
			for (var s = 0; s < t.length; s++)
				if (!e(t[s], o[s], l)) return !1;
			return !0
		}
		if (t && o && "object" === Pn(t) && "object" === Pn(o)) {
			var c = Object.keys(t);
			return c.length === Object.keys(o).length && c.every((function (n) {
				return e(t[n], o[n], l)
			}))
		}
		return !1
	}(e, t)
}

function Wr(e) {
	return e.join("%")
}
var qr = function () {
		function e(t) {
			ir(this, e), Dn(this, "instanceId", void 0), Dn(this, "cache", new Map), this.instanceId = t
		}
		return sr(e, [{
			key: "get",
			value: function (e) {
				return this.opGet(Wr(e))
			}
		}, {
			key: "opGet",
			value: function (e) {
				return this.cache.get(e) || null
			}
		}, {
			key: "update",
			value: function (e, t) {
				return this.opUpdate(Wr(e), t)
			}
		}, {
			key: "opUpdate",
			value: function (e, t) {
				var n = t(this.cache.get(e));
				null === n ? this.cache.delete(e) : this.cache.set(e, n)
			}
		}]), e
	}(),
	Gr = "data-token-hash",
	Xr = "data-css-hash",
	Kr = "__cssinjs_instance__";
var Qr = v.createContext({
	hashPriority: "low",
	cache: function () {
		var e = Math.random().toString(12).slice(2);
		if ("undefined" != typeof document && document.head && document.body) {
			var t = document.body.querySelectorAll("style[".concat(Xr, "]")) || [],
				n = document.head.firstChild;
			Array.from(t).forEach((function (t) {
				t[Kr] = t[Kr] || e, t[Kr] === e && document.head.insertBefore(t, n)
			}));
			var r = {};
			Array.from(document.querySelectorAll("style[".concat(Xr, "]"))).forEach((function (t) {
				var n, o = t.getAttribute(Xr);
				r[o] ? t[Kr] === e && (null === (n = t.parentNode) || void 0 === n || n.removeChild(t)) : r[o] = !0
			}))
		}
		return new qr(e)
	}(),
	defaultCache: !0
});
var Yr = function () {
	function e() {
		ir(this, e), Dn(this, "cache", void 0), Dn(this, "keys", void 0), Dn(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
	}
	return sr(e, [{
		key: "size",
		value: function () {
			return this.keys.length
		}
	}, {
		key: "internalGet",
		value: function (e) {
			var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				o = {
					map: this.cache
				};
			return e.forEach((function (e) {
				var t;
				o ? o = null === (t = o) || void 0 === t || null === (t = t.map) || void 0 === t ? void 0 : t.get(e) : o = void 0
			})), null !== (t = o) && void 0 !== t && t.value && r && (o.value[1] = this.cacheCallTimes++), null === (n = o) || void 0 === n ? void 0 : n.value
		}
	}, {
		key: "get",
		value: function (e) {
			var t;
			return null === (t = this.internalGet(e, !0)) || void 0 === t ? void 0 : t[0]
		}
	}, {
		key: "has",
		value: function (e) {
			return !!this.internalGet(e)
		}
	}, {
		key: "set",
		value: function (t, n) {
			var r = this;
			if (!this.has(t)) {
				if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
					var o = this.keys.reduce((function (e, t) {
							var n = Pr(e, 2)[1];
							return r.internalGet(t)[1] < n ? [t, r.internalGet(t)[1]] : e
						}), [this.keys[0], this.cacheCallTimes]),
						a = Pr(o, 1)[0];
					this.delete(a)
				}
				this.keys.push(t)
			}
			var i = this.cache;
			t.forEach((function (e, o) {
				if (o === t.length - 1) i.set(e, {
					value: [n, r.cacheCallTimes++]
				});
				else {
					var a = i.get(e);
					a ? a.map || (a.map = new Map) : i.set(e, {
						map: new Map
					}), i = i.get(e).map
				}
			}))
		}
	}, {
		key: "deleteByPath",
		value: function (e, t) {
			var n, r = e.get(t[0]);
			if (1 === t.length) return r.map ? e.set(t[0], {
				map: r.map
			}) : e.delete(t[0]), null === (n = r.value) || void 0 === n ? void 0 : n[0];
			var o = this.deleteByPath(r.map, t.slice(1));
			return r.map && 0 !== r.map.size || r.value || e.delete(t[0]), o
		}
	}, {
		key: "delete",
		value: function (e) {
			if (this.has(e)) return this.keys = this.keys.filter((function (t) {
				return ! function (e, t) {
					if (e.length !== t.length) return !1;
					for (var n = 0; n < e.length; n++)
						if (e[n] !== t[n]) return !1;
					return !0
				}(t, e)
			})), this.deleteByPath(this.cache, e)
		}
	}]), e
}();
Dn(Yr, "MAX_CACHE_SIZE", 20), Dn(Yr, "MAX_CACHE_OFFSET", 5);
var Zr = 0,
	Jr = function () {
		function e(t) {
			ir(this, e), Dn(this, "derivatives", void 0), Dn(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Zr, 0 === t.length && t.length, Zr += 1
		}
		return sr(e, [{
			key: "getDerivativeToken",
			value: function (e) {
				return this.derivatives.reduce((function (t, n) {
					return n(e, t)
				}), void 0)
			}
		}]), e
	}(),
	eo = new Yr;

function to(e) {
	var t = Array.isArray(e) ? e : [e];
	return eo.has(t) || eo.set(t, new Jr(t)), eo.get(t)
}
var no = new WeakMap,
	ro = {};
var oo = new WeakMap;

function ao(e) {
	var t = oo.get(e) || "";
	return t || (Object.keys(e).forEach((function (n) {
		var r = e[n];
		t += n, r instanceof Jr ? t += r.id : r && "object" === Pn(r) ? t += ao(r) : t += r
	})), t = jr(t), oo.set(e, t)), t
}

function io(e, t) {
	return jr("".concat(t, "_").concat(ao(e)))
}
var lo = _r();

function so(e) {
	return "number" == typeof e ? "".concat(e, "px") : e
}

function co(e, t, n) {
	var r;
	if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) return e;
	var o = Bn(Bn({}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}), {}, (Dn(r = {}, Gr, t), Dn(r, Xr, n), r)),
		a = Object.keys(o).map((function (e) {
			var t = o[e];
			return t ? "".concat(e, '="').concat(t, '"') : null
		})).filter((function (e) {
			return e
		})).join(" ");
	return "<style ".concat(a, ">").concat(e, "</style>")
}
var uo = function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
		return "--".concat(t ? "".concat(t, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase()
	},
	fo = function (e, t, n) {
		return Object.keys(e).length ? ".".concat(t).concat(null != n && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(e).map((function (e) {
			var t = Pr(e, 2),
				n = t[0],
				r = t[1];
			return "".concat(n, ":").concat(r, ";")
		})).join(""), "}") : ""
	},
	po = function (e, t, n) {
		var r = {},
			o = {};
		return Object.entries(e).forEach((function (e) {
			var t, a, i = Pr(e, 2),
				l = i[0],
				s = i[1];
			if (null != n && null !== (t = n.preserve) && void 0 !== t && t[l]) o[l] = s;
			else if (!("string" != typeof s && "number" != typeof s || null != n && null !== (a = n.ignore) && void 0 !== a && a[l])) {
				var c, u = uo(l, null == n ? void 0 : n.prefix);
				r[u] = "number" != typeof s || null != n && null !== (c = n.unitless) && void 0 !== c && c[l] ? String(s) : "".concat(s, "px"), o[l] = "var(".concat(u, ")")
			}
		})), [o, fo(r, t, {
			scope: null == n ? void 0 : n.scope
		})]
	},
	ho = _r() ? v.useLayoutEffect : v.useEffect,
	mo = function (e, t) {
		var n = v.useRef(!0);
		ho((function () {
			return e(n.current)
		}), t), ho((function () {
			return n.current = !1,
				function () {
					n.current = !0
				}
		}), [])
	},
	go = function (e, t) {
		mo((function (t) {
			if (!t) return e()
		}), t)
	},
	vo = Bn({}, b).useInsertionEffect,
	yo = vo ? function (e, t, n) {
		return vo((function () {
			return e(), t()
		}), n)
	} : function (e, t, n) {
		v.useMemo(e, n), mo((function () {
			return t(!0)
		}), n)
	},
	bo = void 0 !== Bn({}, b).useInsertionEffect ? function (e) {
		var t = [],
			n = !1;
		return v.useEffect((function () {
				return n = !1,
					function () {
						n = !0, t.length && t.forEach((function (e) {
							return e()
						}))
					}
			}), e),
			function (e) {
				n || t.push(e)
			}
	} : function () {
		return function (e) {
			e()
		}
	};

function wo(e, t, n, r, o) {
	var a = v.useContext(Qr).cache,
		i = Wr([e].concat(br(t))),
		l = bo([i]),
		s = function (e) {
			a.opUpdate(i, (function (t) {
				var r = Pr(t || [void 0, void 0], 2),
					o = r[0],
					a = [void 0 === o ? 0 : o, r[1] || n()];
				return e ? e(a) : a
			}))
		};
	v.useMemo((function () {
		s()
	}), [i]);
	var c = a.opGet(i)[1];
	return yo((function () {
		null == o || o(c)
	}), (function (e) {
		return s((function (t) {
				var n = Pr(t, 2),
					r = n[0],
					a = n[1];
				return e && 0 === r && (null == o || o(c)), [r + 1, a]
			})),
			function () {
				a.opUpdate(i, (function (t) {
					var n = Pr(t || [], 2),
						o = n[0],
						s = void 0 === o ? 0 : o,
						c = n[1];
					return 0 === s - 1 ? (l((function () {
						!e && a.opGet(i) || null == r || r(c, !1)
					})), null) : [s - 1, c]
				}))
			}
	}), [i]), c
}
var ko = {},
	xo = new Map;

function So(e, t) {
	xo.set(e, (xo.get(e) || 0) - 1);
	var n = Array.from(xo.keys()),
		r = n.filter((function (e) {
			return (xo.get(e) || 0) <= 0
		}));
	n.length - r.length > 0 && r.forEach((function (e) {
		! function (e, t) {
			"undefined" != typeof document && document.querySelectorAll("style[".concat(Gr, '="').concat(e, '"]')).forEach((function (e) {
				var n;
				e[Kr] === t && (null === (n = e.parentNode) || void 0 === n || n.removeChild(e))
			}))
		}(e, t), xo.delete(e)
	}))
}
var Co = "token";

function Eo(e, t) {
	var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		r = v.useContext(Qr),
		o = r.cache.instanceId,
		a = r.container,
		i = n.salt,
		l = void 0 === i ? "" : i,
		s = n.override,
		c = void 0 === s ? ko : s,
		u = n.formatToken,
		d = n.getComputedToken,
		f = n.cssVar,
		p = function (e, t) {
			for (var n = no, r = 0; r < t.length; r += 1) {
				var o = t[r];
				n.has(o) || n.set(o, new WeakMap), n = n.get(o)
			}
			return n.has(ro) || n.set(ro, e()), n.get(ro)
		}((function () {
			return Object.assign.apply(Object, [{}].concat(br(t)))
		}), t),
		h = ao(p),
		m = ao(c),
		g = f ? ao(f) : "",
		y = wo(Co, [l, e.id, h, m, g], (function () {
			var t, n = d ? d(p, c, e) : function (e, t, n, r) {
					var o = Bn(Bn({}, n.getDerivativeToken(e)), t);
					return r && (o = r(o)), o
				}(p, c, e, u),
				r = Bn({}, n),
				o = "";
			if (f) {
				var a = Pr(po(n, f.key, {
					prefix: f.prefix,
					ignore: f.ignore,
					unitless: f.unitless,
					preserve: f.preserve
				}), 2);
				n = a[0], o = a[1]
			}
			var i = io(n, l);
			n._tokenKey = i, r._tokenKey = io(r, l);
			var s = null !== (t = null == f ? void 0 : f.key) && void 0 !== t ? t : i;
			n._themeKey = s,
				function (e) {
					xo.set(e, (xo.get(e) || 0) + 1)
				}(s);
			var h = "".concat("css", "-").concat(jr(i));
			return n._hashId = h, [n, h, r, o, (null == f ? void 0 : f.key) || ""]
		}), (function (e) {
			So(e[0]._themeKey, o)
		}), (function (e) {
			var t = Pr(e, 4),
				n = t[0],
				r = t[3];
			if (f && r) {
				var i = Hr(r, jr("css-variables-".concat(n._themeKey)), {
					mark: Xr,
					prepend: "queue",
					attachTo: a,
					priority: -999
				});
				i[Kr] = o, i.setAttribute(Gr, n._themeKey)
			}
		}));
	return y
}
var Oo = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	},
	$o = "comm",
	Po = "rule",
	jo = "decl",
	_o = Math.abs,
	Ro = String.fromCharCode;

function Mo(e) {
	return e.trim()
}

function Fo(e, t, n) {
	return e.replace(t, n)
}

function No(e, t, n) {
	return e.indexOf(t, n)
}

function To(e, t) {
	return 0 | e.charCodeAt(t)
}

function Io(e, t, n) {
	return e.slice(t, n)
}

function Lo(e) {
	return e.length
}

function zo(e, t) {
	return t.push(e), e
}
var Ao = 1,
	Do = 1,
	Ho = 0,
	Bo = 0,
	Uo = 0,
	Vo = "";

function Wo(e, t, n, r, o, a, i, l) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: o,
		children: a,
		line: Ao,
		column: Do,
		length: i,
		return: "",
		siblings: l
	}
}

function qo() {
	return Uo = Bo < Ho ? To(Vo, Bo++) : 0, Do++, 10 === Uo && (Do = 1, Ao++), Uo
}

function Go() {
	return To(Vo, Bo)
}

function Xo() {
	return Bo
}

function Ko(e, t) {
	return Io(Vo, e, t)
}

function Qo(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4;
		case 58:
			return 3;
		case 34:
		case 39:
		case 40:
		case 91:
			return 2;
		case 41:
		case 93:
			return 1
	}
	return 0
}

function Yo(e) {
	return Mo(Ko(Bo - 1, ea(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
}

function Zo(e) {
	for (;
		(Uo = Go()) && Uo < 33;) qo();
	return Qo(e) > 2 || Qo(Uo) > 3 ? "" : " "
}

function Jo(e, t) {
	for (; --t && qo() && !(Uo < 48 || Uo > 102 || Uo > 57 && Uo < 65 || Uo > 70 && Uo < 97););
	return Ko(e, Xo() + (t < 6 && 32 == Go() && 32 == qo()))
}

function ea(e) {
	for (; qo();) switch (Uo) {
		case e:
			return Bo;
		case 34:
		case 39:
			34 !== e && 39 !== e && ea(Uo);
			break;
		case 40:
			41 === e && ea(e);
			break;
		case 92:
			qo()
	}
	return Bo
}

function ta(e, t) {
	for (; qo() && e + Uo !== 57 && (e + Uo !== 84 || 47 !== Go()););
	return "/*" + Ko(t, Bo - 1) + "*" + Ro(47 === e ? e : qo())
}

function na(e) {
	for (; !Qo(Go());) qo();
	return Ko(e, Bo)
}

function ra(e) {
	return function (e) {
		return Vo = "", e
	}(oa("", null, null, null, [""], e = function (e) {
		return Ao = Do = 1, Ho = Lo(Vo = e), Bo = 0, []
	}(e), 0, [0], e))
}

function oa(e, t, n, r, o, a, i, l, s) {
	for (var c = 0, u = 0, d = i, f = 0, p = 0, h = 0, m = 1, g = 1, v = 1, y = 0, b = "", w = o, k = a, x = r, S = b; g;) switch (h = y, y = qo()) {
		case 40:
			if (108 != h && 58 == To(S, d - 1)) {
				-1 != No(S += Fo(Yo(y), "&", "&\f"), "&\f", _o(c ? l[c - 1] : 0)) && (v = -1);
				break
			}
			case 34:
			case 39:
			case 91:
				S += Yo(y);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				S += Zo(h);
				break;
			case 92:
				S += Jo(Xo() - 1, 7);
				continue;
			case 47:
				switch (Go()) {
					case 42:
					case 47:
						zo(ia(ta(qo(), Xo()), t, n, s), s), 5 != Qo(h || 1) && 5 != Qo(Go() || 1) || !Lo(S) || " " === Io(S, -1, void 0) || (S += " ");
						break;
					default:
						S += "/"
				}
				break;
			case 123 * m:
				l[c++] = Lo(S) * v;
			case 125 * m:
			case 59:
			case 0:
				switch (y) {
					case 0:
					case 125:
						g = 0;
					case 59 + u:
						-1 == v && (S = Fo(S, /\f/g, "")), p > 0 && (Lo(S) - d || 0 === m && 47 === h) && zo(p > 32 ? la(S + ";", r, n, d - 1, s) : la(Fo(S, " ", "") + ";", r, n, d - 2, s), s);
						break;
					case 59:
						S += ";";
					default:
						if (zo(x = aa(S, t, n, c, u, o, l, b, w = [], k = [], d, a), a), 123 === y)
							if (0 === u) oa(S, t, x, x, w, a, d, l, k);
							else {
								switch (f) {
									case 99:
										if (110 === To(S, 3)) break;
									case 108:
										if (97 === To(S, 2)) break;
									default:
										u = 0;
									case 100:
									case 109:
									case 115:
								}
								u ? oa(e, x, x, r && zo(aa(e, x, x, 0, 0, o, l, b, o, w = [], d, k), k), o, k, d, l, r ? w : k) : oa(S, x, x, x, [""], k, 0, l, k)
							}
				}
				c = u = p = 0, m = v = 1, b = S = "", d = i;
				break;
			case 58:
				d = 1 + Lo(S), p = h;
			default:
				if (m < 1)
					if (123 == y) --m;
					else if (125 == y && 0 == m++ && 125 == (Uo = Bo > 0 ? To(Vo, --Bo) : 0, Do--, 10 === Uo && (Do = 1, Ao--), Uo)) continue;
				switch (S += Ro(y), y * m) {
					case 38:
						v = u > 0 ? 1 : (S += "\f", -1);
						break;
					case 44:
						l[c++] = (Lo(S) - 1) * v, v = 1;
						break;
					case 64:
						45 === Go() && (S += Yo(qo())), f = Go(), u = d = Lo(b = S += na(Xo())), y++;
						break;
					case 45:
						45 === h && 2 == Lo(S) && (m = 0)
				}
	}
	return a
}

function aa(e, t, n, r, o, a, i, l, s, c, u, d) {
	for (var f = o - 1, p = 0 === o ? a : [""], h = function (e) {
			return e.length
		}(p), m = 0, g = 0, v = 0; m < r; ++m)
		for (var y = 0, b = Io(e, f + 1, f = _o(g = i[m])), w = e; y < h; ++y)(w = Mo(g > 0 ? p[y] + " " + b : Fo(b, /&\f/g, p[y]))) && (s[v++] = w);
	return Wo(e, t, n, 0 === o ? Po : l, s, c, u, d)
}

function ia(e, t, n, r) {
	return Wo(e, t, n, $o, Ro(Uo), Io(e, 2, -2), 0, r)
}

function la(e, t, n, r, o) {
	return Wo(e, t, n, jo, Io(e, 0, r), Io(e, r + 1, -1), r, o)
}

function sa(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n
}

function ca(e, t, n, r) {
	switch (e.type) {
		case "@layer":
			if (e.children.length) break;
		case "@import":
		case "@namespace":
		case jo:
			return e.return = e.return || e.value;
		case $o:
			return "";
		case "@keyframes":
			return e.return = e.value + "{" + sa(e.children, r) + "}";
		case Po:
			if (!Lo(e.value = e.props.join(","))) return ""
	}
	return Lo(n = sa(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
var ua, da = "data-ant-cssinjs-cache-path",
	fa = "_FILE_STYLE__",
	pa = !0;

function ha(e) {
	return function () {
		if (!ua && (ua = {}, _r())) {
			var e = document.createElement("div");
			e.className = da, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
			var t = getComputedStyle(e).content || "";
			(t = t.replace(/^"/, "").replace(/"$/, "")).split(";").forEach((function (e) {
				var t = Pr(e.split(":"), 2),
					n = t[0],
					r = t[1];
				ua[n] = r
			}));
			var n, r = document.querySelector("style[".concat(da, "]"));
			r && (pa = !1, null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), document.body.removeChild(e)
		}
	}(), !!ua[e]
}
var ma = "_multi_value_";

function ga(e) {
	return sa(ra(e), ca).replace(/\{%%%\:[^;];}/g, ";")
}

function va(e, t, n) {
	if (!t) return e;
	var r = ".".concat(t),
		o = "low" === n ? ":where(".concat(r, ")") : r;
	return e.split(",").map((function (e) {
		var t, n = e.trim().split(/\s+/),
			r = n[0] || "",
			a = (null === (t = r.match(/^\w+/)) || void 0 === t ? void 0 : t[0]) || "";
		return [r = "".concat(a).concat(o).concat(r.slice(a.length))].concat(br(n.slice(1))).join(" ")
	})).join(",")
}
var ya = function e(t) {
	var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
			root: !0,
			parentSelectors: []
		},
		o = r.root,
		a = r.injectHash,
		i = r.parentSelectors,
		l = n.hashId,
		s = n.layer;
	n.path;
	var c = n.hashPriority,
		u = n.transformers,
		d = void 0 === u ? [] : u;
	n.linters;
	var f = "",
		p = {};

	function h(t) {
		var r = t.getName(l);
		if (!p[r]) {
			var o = Pr(e(t.style, n, {
				root: !1,
				parentSelectors: i
			}), 1)[0];
			p[r] = "@keyframes ".concat(t.getName(l)).concat(o)
		}
	}
	var m = function e(t) {
		var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
		return t.forEach((function (t) {
			Array.isArray(t) ? e(t, n) : t && n.push(t)
		})), n
	}(Array.isArray(t) ? t : [t]);
	return m.forEach((function (t) {
		var r = "string" != typeof t || o ? t : {};
		if ("string" == typeof r) f += "".concat(r, "\n");
		else if (r._keyframe) h(r);
		else {
			var s = d.reduce((function (e, t) {
				var n;
				return (null == t || null === (n = t.visit) || void 0 === n ? void 0 : n.call(t, e)) || e
			}), r);
			Object.keys(s).forEach((function (t) {
				var r = s[t];
				if ("object" !== Pn(r) || !r || "animationName" === t && r._keyframe || function (e) {
						return "object" === Pn(e) && e && ("_skip_check_" in e || ma in e)
					}(r)) {
					let e = function (e, t) {
						var n = e.replace(/[A-Z]/g, (function (e) {
								return "-".concat(e.toLowerCase())
							})),
							r = t;
						Oo[e] || "number" != typeof r || 0 === r || (r = "".concat(r, "px")), "animationName" === e && null != t && t._keyframe && (h(t), r = t.getName(l)), f += "".concat(n, ":").concat(r, ";")
					};
					var u, d = null !== (u = null == r ? void 0 : r.value) && void 0 !== u ? u : r;
					"object" === Pn(r) && null != r && r[ma] && Array.isArray(d) ? d.forEach((function (n) {
						e(t, n)
					})) : e(t, d)
				} else {
					var m = !1,
						g = t.trim(),
						v = !1;
					(o || a) && l ? g.startsWith("@") ? m = !0 : g = va("&" === g ? "" : t, l, c) : !o || l || "&" !== g && "" !== g || (g = "", v = !0);
					var y = Pr(e(r, n, {
							root: v,
							injectHash: m,
							parentSelectors: [].concat(br(i), [g])
						}), 2),
						b = y[0],
						w = y[1];
					p = Bn(Bn({}, p), w), f += "".concat(g).concat(b)
				}
			}))
		}
	})), o ? s && (f && (f = "@layer ".concat(s.name, " {").concat(f, "}")), s.dependencies && (p["@layer ".concat(s.name)] = s.dependencies.map((function (e) {
		return "@layer ".concat(e, ", ").concat(s.name, ";")
	})).join("\n"))) : f = "{".concat(f, "}"), [f, p]
};

function ba(e, t) {
	return jr("".concat(e.join("%")).concat(t))
}

function wa() {
	return null
}
var ka = "style";

function xa(e, t) {
	var n = e.token,
		r = e.path,
		o = e.hashId,
		a = e.layer,
		i = e.nonce,
		l = e.clientOnly,
		s = e.order,
		c = void 0 === s ? 0 : s,
		u = v.useContext(Qr),
		d = u.autoClear;
	u.mock;
	var f = u.defaultCache,
		p = u.hashPriority,
		h = u.container,
		m = u.ssrInline,
		g = u.transformers,
		y = u.linters,
		b = u.cache,
		w = u.layer,
		k = n._tokenKey,
		x = [k];
	w && x.push("layer"), x.push.apply(x, br(r));
	var S = lo,
		C = wo(ka, x, (function () {
			var e = x.join("|");
			if (ha(e)) {
				var n = function (e) {
						var t = ua[e],
							n = null;
						if (t && _r())
							if (pa) n = fa;
							else {
								var r = document.querySelector("style[".concat(Xr, '="').concat(ua[e], '"]'));
								r ? n = r.innerHTML : delete ua[e]
							} return [n, t]
					}(e),
					i = Pr(n, 2),
					s = i[0],
					u = i[1];
				if (s) return [s, k, u, {}, l, c]
			}
			var d = t(),
				f = Pr(ya(d, {
					hashId: o,
					hashPriority: p,
					layer: w ? a : void 0,
					path: r.join("-"),
					transformers: g,
					linters: y
				}), 2),
				h = f[0],
				m = f[1],
				v = ga(h),
				b = ba(x, v);
			return [v, k, b, m, l, c]
		}), (function (e, t) {
			var n = Pr(e, 3)[2];
			(t || d) && lo && Dr(n, {
				mark: Xr
			})
		}), (function (e) {
			var t = Pr(e, 4),
				n = t[0];
			t[1];
			var r = t[2],
				o = t[3];
			if (S && n !== fa) {
				var a = {
						mark: Xr,
						prepend: !w && "queue",
						attachTo: h,
						priority: c
					},
					l = "function" == typeof i ? i() : i;
				l && (a.csp = {
					nonce: l
				});
				var s = [],
					u = [];
				Object.keys(o).forEach((function (e) {
					e.startsWith("@layer") ? s.push(e) : u.push(e)
				})), s.forEach((function (e) {
					Hr(ga(o[e]), "_layer-".concat(e), Bn(Bn({}, a), {}, {
						prepend: !0
					}))
				}));
				var d = Hr(n, r, a);
				d[Kr] = b.instanceId, d.setAttribute(Gr, k), u.forEach((function (e) {
					Hr(ga(o[e]), "_effect-".concat(e), a)
				}))
			}
		})),
		E = Pr(C, 3),
		O = E[0],
		$ = E[1],
		P = E[2];
	return function (e) {
		var t, n;
		m && !S && f ? t = v.createElement("style", $n({}, (Dn(n = {}, Gr, $), Dn(n, Xr, P), n), {
			dangerouslySetInnerHTML: {
				__html: O
			}
		})) : t = v.createElement(wa, null);
		return v.createElement(v.Fragment, null, t, e)
	}
}
var Sa, Ca = "cssVar";
Dn(Sa = {}, ka, (function (e, t, n) {
	var r = Pr(e, 6),
		o = r[0],
		a = r[1],
		i = r[2],
		l = r[3],
		s = r[4],
		c = r[5],
		u = (n || {}).plain;
	if (s) return null;
	var d = o,
		f = {
			"data-rc-order": "prependQueue",
			"data-rc-priority": "".concat(c)
		};
	return d = co(o, a, i, f, u), l && Object.keys(l).forEach((function (e) {
		if (!t[e]) {
			t[e] = !0;
			var n = co(ga(l[e]), a, "_effect-".concat(e), f, u);
			e.startsWith("@layer") ? d = n + d : d += n
		}
	})), [c, i, d]
})), Dn(Sa, Co, (function (e, t, n) {
	var r = Pr(e, 5),
		o = r[2],
		a = r[3],
		i = r[4],
		l = (n || {}).plain;
	if (!a) return null;
	var s = o._tokenKey;
	return [-999, s, co(a, i, s, {
		"data-rc-order": "prependQueue",
		"data-rc-priority": "".concat(-999)
	}, l)]
})), Dn(Sa, Ca, (function (e, t, n) {
	var r = Pr(e, 4),
		o = r[1],
		a = r[2],
		i = r[3],
		l = (n || {}).plain;
	if (!o) return null;
	return [-999, a, co(o, i, a, {
		"data-rc-order": "prependQueue",
		"data-rc-priority": "".concat(-999)
	}, l)]
}));
var Ea = function () {
	function e(t, n) {
		ir(this, e), Dn(this, "name", void 0), Dn(this, "style", void 0), Dn(this, "_keyframe", !0), this.name = t, this.style = n
	}
	return sr(e, [{
		key: "getName",
		value: function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return e ? "".concat(e, "-").concat(this.name) : this.name
		}
	}]), e
}();

function Oa(e) {
	return e.notSplit = !0, e
}
Oa(["borderTop", "borderBottom"]), Oa(["borderTop"]), Oa(["borderBottom"]), Oa(["borderLeft", "borderRight"]), Oa(["borderLeft"]), Oa(["borderRight"]);
var $a = v.createContext({});

function Pa(e) {
	return Or(e) || vr(e) || yr(e) || $r()
}

function ja(e, t) {
	for (var n = e, r = 0; r < t.length; r += 1) {
		if (null == n) return;
		n = n[t[r]]
	}
	return n
}

function _a(e, t, n, r) {
	if (!t.length) return n;
	var o, a = Pa(t),
		i = a[0],
		l = a.slice(1);
	return o = e || "number" != typeof i ? Array.isArray(e) ? br(e) : Bn({}, e) : [], r && void 0 === n && 1 === l.length ? delete o[i][l[0]] : o[i] = _a(o[i], l, n, r), o
}

function Ra(e, t, n) {
	var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	return t.length && r && void 0 === n && !ja(e, t.slice(0, -1)) ? e : _a(e, t, n, r)
}

function Ma(e) {
	return Array.isArray(e) ? [] : {}
}
var Fa = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;

function Na() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	var r = Ma(t[0]);
	return t.forEach((function (e) {
		! function t(n, o) {
			var a, i = new Set(o),
				l = ja(e, n),
				s = Array.isArray(l);
			if (s || "object" === Pn(a = l) && null !== a && Object.getPrototypeOf(a) === Object.prototype) {
				if (!i.has(l)) {
					i.add(l);
					var c = ja(r, n);
					s ? r = Ra(r, n, []) : c && "object" === Pn(c) || (r = Ra(r, n, Ma(l))), Fa(l).forEach((function (e) {
						t([].concat(br(n), [e]), i)
					}))
				}
			} else r = Ra(r, n, l)
		}([])
	})), r
}

function Ta() {}
const Ia = v.createContext({}),
	La = () => {
		const e = () => {};
		return e.deprecated = Ta, e
	},
	za = v.createContext(void 0);
var Aa = {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size"
	},
	Da = Bn(Bn({}, {
		yearFormat: "YYYY",
		dayFormat: "D",
		cellMeridiemFormat: "A",
		monthBeforeYear: !0
	}), {}, {
		locale: "en_US",
		today: "Today",
		now: "Now",
		backToToday: "Back to today",
		ok: "OK",
		clear: "Clear",
		week: "Week",
		month: "Month",
		year: "Year",
		timeSelect: "select time",
		dateSelect: "select date",
		weekSelect: "Choose a week",
		monthSelect: "Choose a month",
		yearSelect: "Choose a year",
		decadeSelect: "Choose a decade",
		dateFormat: "M/D/YYYY",
		dateTimeFormat: "M/D/YYYY HH:mm:ss",
		previousMonth: "Previous month (PageUp)",
		nextMonth: "Next month (PageDown)",
		previousYear: "Last year (Control + left)",
		nextYear: "Next year (Control + right)",
		previousDecade: "Last decade",
		nextDecade: "Next decade",
		previousCentury: "Last century",
		nextCentury: "Next century"
	});
const Ha = {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"]
	},
	Ba = {
		lang: Object.assign({
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"]
		}, Da),
		timePickerLocale: Object.assign({}, Ha)
	},
	Ua = "${label} is not a valid ${type}",
	Va = {
		locale: "en",
		Pagination: Aa,
		DatePicker: Ba,
		TimePicker: Ha,
		Calendar: Ba,
		global: {
			placeholder: "Please select",
			close: "Close"
		},
		Table: {
			filterTitle: "Filter menu",
			filterConfirm: "OK",
			filterReset: "Reset",
			filterEmptyText: "No filters",
			filterCheckAll: "Select all items",
			filterSearchPlaceholder: "Search in filters",
			emptyText: "No data",
			selectAll: "Select current page",
			selectInvert: "Invert current page",
			selectNone: "Clear all data",
			selectionAll: "Select all data",
			sortTitle: "Sort",
			expand: "Expand row",
			collapse: "Collapse row",
			triggerDesc: "Click to sort descending",
			triggerAsc: "Click to sort ascending",
			cancelSort: "Click to cancel sorting"
		},
		Tour: {
			Next: "Next",
			Previous: "Previous",
			Finish: "Finish"
		},
		Modal: {
			okText: "OK",
			cancelText: "Cancel",
			justOkText: "OK"
		},
		Popconfirm: {
			okText: "OK",
			cancelText: "Cancel"
		},
		Transfer: {
			titles: ["", ""],
			searchPlaceholder: "Search here",
			itemUnit: "item",
			itemsUnit: "items",
			remove: "Remove",
			selectCurrent: "Select current page",
			removeCurrent: "Remove current page",
			selectAll: "Select all data",
			deselectAll: "Deselect all data",
			removeAll: "Remove all data",
			selectInvert: "Invert current page"
		},
		Upload: {
			uploading: "Uploading...",
			removeFile: "Remove file",
			uploadError: "Upload error",
			previewFile: "Preview file",
			downloadFile: "Download file"
		},
		Empty: {
			description: "No data"
		},
		Icon: {
			icon: "icon"
		},
		Text: {
			edit: "Edit",
			copy: "Copy",
			copied: "Copied",
			expand: "Expand",
			collapse: "Collapse"
		},
		Form: {
			optional: "(optional)",
			defaultValidateMessages: {
				default: "Field validation error for ${label}",
				required: "Please enter ${label}",
				enum: "${label} must be one of [${enum}]",
				whitespace: "${label} cannot be a blank character",
				date: {
					format: "${label} date format is invalid",
					parse: "${label} cannot be converted to a date",
					invalid: "${label} is an invalid date"
				},
				types: {
					string: Ua,
					method: Ua,
					array: Ua,
					object: Ua,
					number: Ua,
					date: Ua,
					boolean: Ua,
					integer: Ua,
					float: Ua,
					regexp: Ua,
					email: Ua,
					url: Ua,
					hex: Ua
				},
				string: {
					len: "${label} must be ${len} characters",
					min: "${label} must be at least ${min} characters",
					max: "${label} must be up to ${max} characters",
					range: "${label} must be between ${min}-${max} characters"
				},
				number: {
					len: "${label} must be equal to ${len}",
					min: "${label} must be minimum ${min}",
					max: "${label} must be maximum ${max}",
					range: "${label} must be between ${min}-${max}"
				},
				array: {
					len: "Must be ${len} ${label}",
					min: "At least ${min} ${label}",
					max: "At most ${max} ${label}",
					range: "The amount of ${label} must be between ${min}-${max}"
				},
				pattern: {
					mismatch: "${label} does not match the pattern ${pattern}"
				}
			}
		},
		Image: {
			preview: "Preview"
		},
		QRCode: {
			expired: "QR code expired",
			refresh: "Refresh",
			scanned: "Scanned"
		},
		ColorPicker: {
			presetEmpty: "Empty",
			transparent: "Transparent",
			singleColor: "Single",
			gradientColor: "Gradient"
		}
	};
let Wa = Object.assign({}, Va.Modal),
	qa = [];
const Ga = () => qa.reduce(((e, t) => Object.assign(Object.assign({}, e), t)), Va.Modal);

function Xa() {
	return Wa
}
const Ka = v.createContext(void 0),
	Qa = (e, t) => {
		const n = v.useContext(Ka);
		return [v.useMemo((() => {
			var r;
			const o = t || Va[e],
				a = null !== (r = null == n ? void 0 : n[e]) && void 0 !== r ? r : {};
			return Object.assign(Object.assign({}, "function" == typeof o ? o() : o), a || {})
		}), [e, t, n]), v.useMemo((() => {
			const e = null == n ? void 0 : n.locale;
			return (null == n ? void 0 : n.exist) && !e ? Va.locale : e
		}), [n])]
	},
	Ya = e => {
		const {
			locale: t = {},
			children: n,
			_ANT_MARK__: r
		} = e;
		v.useEffect((() => {
			const e = function (e) {
				if (e) {
					const t = Object.assign({}, e);
					return qa.push(t), Wa = Ga(), () => {
						qa = qa.filter((e => e !== t)), Wa = Ga()
					}
				}
				Wa = Object.assign({}, Va.Modal)
			}(null == t ? void 0 : t.Modal);
			return e
		}), [t]);
		const o = v.useMemo((() => Object.assign(Object.assign({}, t), {
			exist: !0
		})), [t]);
		return v.createElement(Ka.Provider, {
			value: o
		}, n)
	},
	Za = {
		blue: "#1677FF",
		purple: "#722ED1",
		cyan: "#13C2C2",
		green: "#52C41A",
		magenta: "#EB2F96",
		pink: "#EB2F96",
		red: "#F5222D",
		orange: "#FA8C16",
		yellow: "#FADB14",
		volcano: "#FA541C",
		geekblue: "#2F54EB",
		gold: "#FAAD14",
		lime: "#A0D911"
	},
	Ja = Object.assign(Object.assign({}, Za), {
		colorPrimary: "#1677ff",
		colorSuccess: "#52c41a",
		colorWarning: "#faad14",
		colorError: "#ff4d4f",
		colorInfo: "#1677ff",
		colorLink: "",
		colorTextBase: "",
		colorBgBase: "",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
		fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
		fontSize: 14,
		lineWidth: 1,
		lineType: "solid",
		motionUnit: .1,
		motionBase: 0,
		motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
		motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
		motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
		motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
		motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
		motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
		motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
		borderRadius: 6,
		sizeUnit: 4,
		sizeStep: 4,
		sizePopupArrow: 16,
		controlHeight: 32,
		zIndexBase: 0,
		zIndexPopupBase: 1e3,
		opacityImage: 1,
		wireframe: !1,
		motion: !0
	}),
	ei = Math.round;

function ti(e, t) {
	const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [],
		r = n.map((e => parseFloat(e)));
	for (let o = 0; o < 3; o += 1) r[o] = t(r[o] || 0, n[o] || "", o);
	return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r
}
const ni = (e, t, n) => 0 === n ? e : e / 100;

function ri(e, t) {
	const n = t || 255;
	return e > n ? n : e < 0 ? 0 : e
}
class oi {
	constructor(e) {
		function t(t) {
			return t[0] in e && t[1] in e && t[2] in e
		}
		if (Dn(this, "isValid", !0), Dn(this, "r", 0), Dn(this, "g", 0), Dn(this, "b", 0), Dn(this, "a", 1), Dn(this, "_h", void 0), Dn(this, "_s", void 0), Dn(this, "_l", void 0), Dn(this, "_v", void 0), Dn(this, "_max", void 0), Dn(this, "_min", void 0), Dn(this, "_brightness", void 0), e)
			if ("string" == typeof e) {
				let t = function (e) {
					return n.startsWith(e)
				};
				const n = e.trim();
				/^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : t("rgb") ? this.fromRgbString(n) : t("hsl") ? this.fromHslString(n) : (t("hsv") || t("hsb")) && this.fromHsvString(n)
			} else if (e instanceof oi) this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
		else if (t("rgb")) this.r = ri(e.r), this.g = ri(e.g), this.b = ri(e.b), this.a = "number" == typeof e.a ? ri(e.a, 1) : 1;
		else if (t("hsl")) this.fromHsl(e);
		else {
			if (!t("hsv")) throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e));
			this.fromHsv(e)
		} else;
	}
	setR(e) {
		return this._sc("r", e)
	}
	setG(e) {
		return this._sc("g", e)
	}
	setB(e) {
		return this._sc("b", e)
	}
	setA(e) {
		return this._sc("a", e, 1)
	}
	setHue(e) {
		const t = this.toHsv();
		return t.h = e, this._c(t)
	}
	getLuminance() {
		function e(e) {
			const t = e / 255;
			return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
		}
		return .2126 * e(this.r) + .7152 * e(this.g) + .0722 * e(this.b)
	}
	getHue() {
		if (void 0 === this._h) {
			const e = this.getMax() - this.getMin();
			this._h = 0 === e ? 0 : ei(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4))
		}
		return this._h
	}
	getSaturation() {
		if (void 0 === this._s) {
			const e = this.getMax() - this.getMin();
			this._s = 0 === e ? 0 : e / this.getMax()
		}
		return this._s
	}
	getLightness() {
		return void 0 === this._l && (this._l = (this.getMax() + this.getMin()) / 510), this._l
	}
	getValue() {
		return void 0 === this._v && (this._v = this.getMax() / 255), this._v
	}
	getBrightness() {
		return void 0 === this._brightness && (this._brightness = (299 * this.r + 587 * this.g + 114 * this.b) / 1e3), this._brightness
	}
	darken(e = 10) {
		const t = this.getHue(),
			n = this.getSaturation();
		let r = this.getLightness() - e / 100;
		return r < 0 && (r = 0), this._c({
			h: t,
			s: n,
			l: r,
			a: this.a
		})
	}
	lighten(e = 10) {
		const t = this.getHue(),
			n = this.getSaturation();
		let r = this.getLightness() + e / 100;
		return r > 1 && (r = 1), this._c({
			h: t,
			s: n,
			l: r,
			a: this.a
		})
	}
	mix(e, t = 50) {
		const n = this._c(e),
			r = t / 100,
			o = e => (n[e] - this[e]) * r + this[e],
			a = {
				r: ei(o("r")),
				g: ei(o("g")),
				b: ei(o("b")),
				a: ei(100 * o("a")) / 100
			};
		return this._c(a)
	}
	tint(e = 10) {
		return this.mix({
			r: 255,
			g: 255,
			b: 255,
			a: 1
		}, e)
	}
	shade(e = 10) {
		return this.mix({
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}, e)
	}
	onBackground(e) {
		const t = this._c(e),
			n = this.a + t.a * (1 - this.a),
			r = e => ei((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
		return this._c({
			r: r("r"),
			g: r("g"),
			b: r("b"),
			a: n
		})
	}
	isDark() {
		return this.getBrightness() < 128
	}
	isLight() {
		return this.getBrightness() >= 128
	}
	equals(e) {
		return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a
	}
	clone() {
		return this._c(this)
	}
	toHexString() {
		let e = "#";
		const t = (this.r || 0).toString(16);
		e += 2 === t.length ? t : "0" + t;
		const n = (this.g || 0).toString(16);
		e += 2 === n.length ? n : "0" + n;
		const r = (this.b || 0).toString(16);
		if (e += 2 === r.length ? r : "0" + r, "number" == typeof this.a && this.a >= 0 && this.a < 1) {
			const t = ei(255 * this.a).toString(16);
			e += 2 === t.length ? t : "0" + t
		}
		return e
	}
	toHsl() {
		return {
			h: this.getHue(),
			s: this.getSaturation(),
			l: this.getLightness(),
			a: this.a
		}
	}
	toHslString() {
		const e = this.getHue(),
			t = ei(100 * this.getSaturation()),
			n = ei(100 * this.getLightness());
		return 1 !== this.a ? `hsla(${e},${t}%,${n}%,${this.a})` : `hsl(${e},${t}%,${n}%)`
	}
	toHsv() {
		return {
			h: this.getHue(),
			s: this.getSaturation(),
			v: this.getValue(),
			a: this.a
		}
	}
	toRgb() {
		return {
			r: this.r,
			g: this.g,
			b: this.b,
			a: this.a
		}
	}
	toRgbString() {
		return 1 !== this.a ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`
	}
	toString() {
		return this.toRgbString()
	}
	_sc(e, t, n) {
		const r = this.clone();
		return r[e] = ri(t, n), r
	}
	_c(e) {
		return new this.constructor(e)
	}
	getMax() {
		return void 0 === this._max && (this._max = Math.max(this.r, this.g, this.b)), this._max
	}
	getMin() {
		return void 0 === this._min && (this._min = Math.min(this.r, this.g, this.b)), this._min
	}
	fromHexString(e) {
		const t = e.replace("#", "");

		function n(e, n) {
			return parseInt(t[e] + t[n || e], 16)
		}
		t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1)
	}
	fromHsl({
		h: e,
		s: t,
		l: n,
		a: r
	}) {
		if (this._h = e % 360, this._s = t, this._l = n, this.a = "number" == typeof r ? r : 1, t <= 0) {
			const e = ei(255 * n);
			this.r = e, this.g = e, this.b = e
		}
		let o = 0,
			a = 0,
			i = 0;
		const l = e / 60,
			s = (1 - Math.abs(2 * n - 1)) * t,
			c = s * (1 - Math.abs(l % 2 - 1));
		l >= 0 && l < 1 ? (o = s, a = c) : l >= 1 && l < 2 ? (o = c, a = s) : l >= 2 && l < 3 ? (a = s, i = c) : l >= 3 && l < 4 ? (a = c, i = s) : l >= 4 && l < 5 ? (o = c, i = s) : l >= 5 && l < 6 && (o = s, i = c);
		const u = n - s / 2;
		this.r = ei(255 * (o + u)), this.g = ei(255 * (a + u)), this.b = ei(255 * (i + u))
	}
	fromHsv({
		h: e,
		s: t,
		v: n,
		a: r
	}) {
		this._h = e % 360, this._s = t, this._v = n, this.a = "number" == typeof r ? r : 1;
		const o = ei(255 * n);
		if (this.r = o, this.g = o, this.b = o, t <= 0) return;
		const a = e / 60,
			i = Math.floor(a),
			l = a - i,
			s = ei(n * (1 - t) * 255),
			c = ei(n * (1 - t * l) * 255),
			u = ei(n * (1 - t * (1 - l)) * 255);
		switch (i) {
			case 0:
				this.g = u, this.b = s;
				break;
			case 1:
				this.r = c, this.b = s;
				break;
			case 2:
				this.r = s, this.b = u;
				break;
			case 3:
				this.r = s, this.g = c;
				break;
			case 4:
				this.r = u, this.g = s;
				break;
			default:
				this.g = s, this.b = c
		}
	}
	fromHsvString(e) {
		const t = ti(e, ni);
		this.fromHsv({
			h: t[0],
			s: t[1],
			v: t[2],
			a: t[3]
		})
	}
	fromHslString(e) {
		const t = ti(e, ni);
		this.fromHsl({
			h: t[0],
			s: t[1],
			l: t[2],
			a: t[3]
		})
	}
	fromRgbString(e) {
		const t = ti(e, ((e, t) => t.includes("%") ? ei(e / 100 * 255) : e));
		this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3]
	}
}
var ai = [{
	index: 7,
	amount: 15
}, {
	index: 6,
	amount: 25
}, {
	index: 5,
	amount: 30
}, {
	index: 5,
	amount: 45
}, {
	index: 5,
	amount: 65
}, {
	index: 5,
	amount: 85
}, {
	index: 4,
	amount: 90
}, {
	index: 3,
	amount: 95
}, {
	index: 2,
	amount: 97
}, {
	index: 1,
	amount: 98
}];

function ii(e, t, n) {
	var r;
	return (r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0 ? r += 360 : r >= 360 && (r -= 360), r
}

function li(e, t, n) {
	return 0 === e.h && 0 === e.s ? e.s : ((r = n ? e.s - .16 * t : 4 === t ? e.s + .16 : e.s + .05 * t) > 1 && (r = 1), n && 5 === t && r > .1 && (r = .1), r < .06 && (r = .06), Math.round(100 * r) / 100);
	var r
}

function si(e, t, n) {
	var r;
	return r = n ? e.v + .05 * t : e.v - .15 * t, r = Math.max(0, Math.min(1, r)), Math.round(100 * r) / 100
}

function ci(e) {
	for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = new oi(e), o = r.toHsv(), a = 5; a > 0; a -= 1) {
		var i = new oi({
			h: ii(o, a, !0),
			s: li(o, a, !0),
			v: si(o, a, !0)
		});
		n.push(i)
	}
	n.push(r);
	for (var l = 1; l <= 4; l += 1) {
		var s = new oi({
			h: ii(o, l),
			s: li(o, l),
			v: si(o, l)
		});
		n.push(s)
	}
	return "dark" === t.theme ? ai.map((function (e) {
		var r = e.index,
			o = e.amount;
		return new oi(t.backgroundColor || "#141414").mix(n[r], o).toHexString()
	})) : n.map((function (e) {
		return e.toHexString()
	}))
}
var ui = {
		red: "#F5222D",
		volcano: "#FA541C",
		orange: "#FA8C16",
		gold: "#FAAD14",
		yellow: "#FADB14",
		lime: "#A0D911",
		green: "#52C41A",
		cyan: "#13C2C2",
		blue: "#1677FF",
		geekblue: "#2F54EB",
		purple: "#722ED1",
		magenta: "#EB2F96",
		grey: "#666666"
	},
	di = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
di.primary = di[5];
var fi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
fi.primary = fi[5];
var pi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
pi.primary = pi[5];
var hi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
hi.primary = hi[5];
var mi = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
mi.primary = mi[5];
var gi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
gi.primary = gi[5];
var vi = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
vi.primary = vi[5];
var yi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
yi.primary = yi[5];
var bi = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
bi.primary = bi[5];
var wi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
wi.primary = wi[5];
var ki = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ki.primary = ki[5];
var xi = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xi.primary = xi[5];
var Si = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Si.primary = Si[5];
var Ci = {
	red: di,
	volcano: fi,
	orange: pi,
	gold: hi,
	yellow: mi,
	lime: gi,
	green: vi,
	cyan: yi,
	blue: bi,
	geekblue: wi,
	purple: ki,
	magenta: xi,
	grey: Si
};

function Ei(e, {
	generateColorPalettes: t,
	generateNeutralColorPalettes: n
}) {
	const {
		colorSuccess: r,
		colorWarning: o,
		colorError: a,
		colorInfo: i,
		colorPrimary: l,
		colorBgBase: s,
		colorTextBase: c
	} = e, u = t(l), d = t(r), f = t(o), p = t(a), h = t(i), m = n(s, c), g = t(e.colorLink || e.colorInfo), v = new oi(p[1]).mix(new oi(p[3]), 50).toHexString();
	return Object.assign(Object.assign({}, m), {
		colorPrimaryBg: u[1],
		colorPrimaryBgHover: u[2],
		colorPrimaryBorder: u[3],
		colorPrimaryBorderHover: u[4],
		colorPrimaryHover: u[5],
		colorPrimary: u[6],
		colorPrimaryActive: u[7],
		colorPrimaryTextHover: u[8],
		colorPrimaryText: u[9],
		colorPrimaryTextActive: u[10],
		colorSuccessBg: d[1],
		colorSuccessBgHover: d[2],
		colorSuccessBorder: d[3],
		colorSuccessBorderHover: d[4],
		colorSuccessHover: d[4],
		colorSuccess: d[6],
		colorSuccessActive: d[7],
		colorSuccessTextHover: d[8],
		colorSuccessText: d[9],
		colorSuccessTextActive: d[10],
		colorErrorBg: p[1],
		colorErrorBgHover: p[2],
		colorErrorBgFilledHover: v,
		colorErrorBgActive: p[3],
		colorErrorBorder: p[3],
		colorErrorBorderHover: p[4],
		colorErrorHover: p[5],
		colorError: p[6],
		colorErrorActive: p[7],
		colorErrorTextHover: p[8],
		colorErrorText: p[9],
		colorErrorTextActive: p[10],
		colorWarningBg: f[1],
		colorWarningBgHover: f[2],
		colorWarningBorder: f[3],
		colorWarningBorderHover: f[4],
		colorWarningHover: f[4],
		colorWarning: f[6],
		colorWarningActive: f[7],
		colorWarningTextHover: f[8],
		colorWarningText: f[9],
		colorWarningTextActive: f[10],
		colorInfoBg: h[1],
		colorInfoBgHover: h[2],
		colorInfoBorder: h[3],
		colorInfoBorderHover: h[4],
		colorInfoHover: h[4],
		colorInfo: h[6],
		colorInfoActive: h[7],
		colorInfoTextHover: h[8],
		colorInfoText: h[9],
		colorInfoTextActive: h[10],
		colorLinkHover: g[4],
		colorLink: g[6],
		colorLinkActive: g[7],
		colorBgMask: new oi("#000").setA(.45).toRgbString(),
		colorWhite: "#fff"
	})
}
const Oi = e => {
	const {
		controlHeight: t
	} = e;
	return {
		controlHeightSM: .75 * t,
		controlHeightXS: .5 * t,
		controlHeightLG: 1.25 * t
	}
};

function $i(e) {
	return (e + 8) / e
}
const Pi = e => {
	const t = function (e) {
			const t = Array.from({
				length: 10
			}).map(((t, n) => {
				const r = n - 1,
					o = e * Math.pow(Math.E, r / 5),
					a = n > 1 ? Math.floor(o) : Math.ceil(o);
				return 2 * Math.floor(a / 2)
			}));
			return t[1] = e, t.map((e => ({
				size: e,
				lineHeight: $i(e)
			})))
		}(e),
		n = t.map((e => e.size)),
		r = t.map((e => e.lineHeight)),
		o = n[1],
		a = n[0],
		i = n[2],
		l = r[1],
		s = r[0],
		c = r[2];
	return {
		fontSizeSM: a,
		fontSize: o,
		fontSizeLG: i,
		fontSizeXL: n[3],
		fontSizeHeading1: n[6],
		fontSizeHeading2: n[5],
		fontSizeHeading3: n[4],
		fontSizeHeading4: n[3],
		fontSizeHeading5: n[2],
		lineHeight: l,
		lineHeightLG: c,
		lineHeightSM: s,
		fontHeight: Math.round(l * o),
		fontHeightLG: Math.round(c * i),
		fontHeightSM: Math.round(s * a),
		lineHeightHeading1: r[6],
		lineHeightHeading2: r[5],
		lineHeightHeading3: r[4],
		lineHeightHeading4: r[3],
		lineHeightHeading5: r[2]
	}
};
const ji = (e, t) => new oi(e).setA(t).toRgbString(),
	_i = (e, t) => new oi(e).darken(t).toHexString(),
	Ri = e => {
		const t = ci(e);
		return {
			1: t[0],
			2: t[1],
			3: t[2],
			4: t[3],
			5: t[4],
			6: t[5],
			7: t[6],
			8: t[4],
			9: t[5],
			10: t[6]
		}
	},
	Mi = (e, t) => {
		const n = e || "#fff",
			r = t || "#000";
		return {
			colorBgBase: n,
			colorTextBase: r,
			colorText: ji(r, .88),
			colorTextSecondary: ji(r, .65),
			colorTextTertiary: ji(r, .45),
			colorTextQuaternary: ji(r, .25),
			colorFill: ji(r, .15),
			colorFillSecondary: ji(r, .06),
			colorFillTertiary: ji(r, .04),
			colorFillQuaternary: ji(r, .02),
			colorBgSolid: ji(r, 1),
			colorBgSolidHover: ji(r, .75),
			colorBgSolidActive: ji(r, .95),
			colorBgLayout: _i(n, 4),
			colorBgContainer: _i(n, 0),
			colorBgElevated: _i(n, 0),
			colorBgSpotlight: ji(r, .85),
			colorBgBlur: "transparent",
			colorBorder: _i(n, 15),
			colorBorderSecondary: _i(n, 6)
		}
	};

function Fi(e) {
	ui.pink = ui.magenta, Ci.pink = Ci.magenta;
	const t = Object.keys(Za).map((t => {
		const n = e[t] === ui[t] ? Ci[t] : ci(e[t]);
		return Array.from({
			length: 10
		}, (() => 1)).reduce(((e, r, o) => (e[`${t}-${o+1}`] = n[o], e[`${t}${o+1}`] = n[o], e)), {})
	})).reduce(((e, t) => e = Object.assign(Object.assign({}, e), t)), {});
	return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Ei(e, {
		generateColorPalettes: Ri,
		generateNeutralColorPalettes: Mi
	})), Pi(e.fontSize)), function (e) {
		const {
			sizeUnit: t,
			sizeStep: n
		} = e;
		return {
			sizeXXL: t * (n + 8),
			sizeXL: t * (n + 4),
			sizeLG: t * (n + 2),
			sizeMD: t * (n + 1),
			sizeMS: t * n,
			size: t * n,
			sizeSM: t * (n - 1),
			sizeXS: t * (n - 2),
			sizeXXS: t * (n - 3)
		}
	}(e)), Oi(e)), function (e) {
		const {
			motionUnit: t,
			motionBase: n,
			borderRadius: r,
			lineWidth: o
		} = e;
		return Object.assign({
			motionDurationFast: `${(n+t).toFixed(1)}s`,
			motionDurationMid: `${(n+2*t).toFixed(1)}s`,
			motionDurationSlow: `${(n+3*t).toFixed(1)}s`,
			lineWidthBold: o + 1
		}, (e => {
			let t = e,
				n = e,
				r = e,
				o = e;
			return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
				borderRadius: e,
				borderRadiusXS: r,
				borderRadiusSM: n,
				borderRadiusLG: t,
				borderRadiusOuter: o
			}
		})(r))
	}(e))
}
const Ni = to(Fi),
	Ti = {
		token: Ja,
		override: {
			override: Ja
		},
		hashed: !0
	},
	Ii = y.createContext(Ti),
	Li = "ant",
	zi = "anticon",
	Ai = ["outlined", "borderless", "filled", "underlined"],
	Di = v.createContext({
		getPrefixCls: (e, t) => t || (e ? `${Li}-${e}` : Li),
		iconPrefixCls: zi
	}),
	{
		Consumer: Hi
	} = Di,
	Bi = {};

function Ui(e) {
	const t = v.useContext(Di),
		{
			getPrefixCls: n,
			direction: r,
			getPopupContainer: o
		} = t,
		a = t[e];
	return Object.assign(Object.assign({
		classNames: Bi,
		styles: Bi
	}, a), {
		getPrefixCls: n,
		direction: r,
		getPopupContainer: o
	})
}
const Vi = `-ant-${Date.now()}-${Math.random()}`;

function Wi(e, t) {
	const n = function (e, t) {
		const n = {},
			r = (e, t) => {
				let n = e.clone();
				return n = (null == t ? void 0 : t(n)) || n, n.toRgbString()
			},
			o = (e, t) => {
				const o = new oi(e),
					a = ci(o.toRgbString());
				n[`${t}-color`] = r(o), n[`${t}-color-disabled`] = a[1], n[`${t}-color-hover`] = a[4], n[`${t}-color-active`] = a[6], n[`${t}-color-outline`] = o.clone().setA(.2).toRgbString(), n[`${t}-color-deprecated-bg`] = a[0], n[`${t}-color-deprecated-border`] = a[2]
			};
		if (t.primaryColor) {
			o(t.primaryColor, "primary");
			const e = new oi(t.primaryColor),
				a = ci(e.toRgbString());
			a.forEach(((e, t) => {
				n[`primary-${t+1}`] = e
			})), n["primary-color-deprecated-l-35"] = r(e, (e => e.lighten(35))), n["primary-color-deprecated-l-20"] = r(e, (e => e.lighten(20))), n["primary-color-deprecated-t-20"] = r(e, (e => e.tint(20))), n["primary-color-deprecated-t-50"] = r(e, (e => e.tint(50))), n["primary-color-deprecated-f-12"] = r(e, (e => e.setA(.12 * e.a)));
			const i = new oi(a[0]);
			n["primary-color-active-deprecated-f-30"] = r(i, (e => e.setA(.3 * e.a))), n["primary-color-active-deprecated-d-02"] = r(i, (e => e.darken(2)))
		}
		return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `\n  :root {\n    ${Object.keys(n).map((t=>`--${e}-${t}: ${n[t]};`)).join("\n")}\n  }\n  `.trim()
	}(e, t);
	_r() && Hr(n, `${Vi}-dynamic-theme`)
}
const qi = v.createContext(!1),
	Gi = ({
		children: e,
		disabled: t
	}) => {
		const n = v.useContext(qi);
		return v.createElement(qi.Provider, {
			value: null != t ? t : n
		}, e)
	},
	Xi = v.createContext(void 0),
	Ki = ({
		children: e,
		size: t
	}) => {
		const n = v.useContext(Xi);
		return v.createElement(Xi.Provider, {
			value: t || n
		}, e)
	};
var Qi = sr((function e() {
		ir(this, e)
	})),
	Yi = "CALC_UNIT",
	Zi = new RegExp(Yi, "g");

function Ji(e) {
	return "number" == typeof e ? "".concat(e).concat(Yi) : e
}
var el = function () {
		ur(t, Qi);
		var e = mr(t);

		function t(n, r) {
			var o;
			ir(this, t), Dn(pr(o = e.call(this)), "result", ""), Dn(pr(o), "unitlessCssVar", void 0), Dn(pr(o), "lowPriority", void 0);
			var a = Pn(n);
			return o.unitlessCssVar = r, n instanceof t ? o.result = "(".concat(n.result, ")") : "number" === a ? o.result = Ji(n) : "string" === a && (o.result = n), o
		}
		return sr(t, [{
			key: "add",
			value: function (e) {
				return e instanceof t ? this.result = "".concat(this.result, " + ").concat(e.getResult()) : "number" != typeof e && "string" != typeof e || (this.result = "".concat(this.result, " + ").concat(Ji(e))), this.lowPriority = !0, this
			}
		}, {
			key: "sub",
			value: function (e) {
				return e instanceof t ? this.result = "".concat(this.result, " - ").concat(e.getResult()) : "number" != typeof e && "string" != typeof e || (this.result = "".concat(this.result, " - ").concat(Ji(e))), this.lowPriority = !0, this
			}
		}, {
			key: "mul",
			value: function (e) {
				return this.lowPriority && (this.result = "(".concat(this.result, ")")), e instanceof t ? this.result = "".concat(this.result, " * ").concat(e.getResult(!0)) : "number" != typeof e && "string" != typeof e || (this.result = "".concat(this.result, " * ").concat(e)), this.lowPriority = !1, this
			}
		}, {
			key: "div",
			value: function (e) {
				return this.lowPriority && (this.result = "(".concat(this.result, ")")), e instanceof t ? this.result = "".concat(this.result, " / ").concat(e.getResult(!0)) : "number" != typeof e && "string" != typeof e || (this.result = "".concat(this.result, " / ").concat(e)), this.lowPriority = !1, this
			}
		}, {
			key: "getResult",
			value: function (e) {
				return this.lowPriority || e ? "(".concat(this.result, ")") : this.result
			}
		}, {
			key: "equal",
			value: function (e) {
				var t = this,
					n = (e || {}).unit,
					r = !0;
				return "boolean" == typeof n ? r = n : Array.from(this.unitlessCssVar).some((function (e) {
					return t.result.includes(e)
				})) && (r = !1), this.result = this.result.replace(Zi, r ? "px" : ""), void 0 !== this.lowPriority ? "calc(".concat(this.result, ")") : this.result
			}
		}]), t
	}(),
	tl = function () {
		ur(t, Qi);
		var e = mr(t);

		function t(n) {
			var r;
			return ir(this, t), Dn(pr(r = e.call(this)), "result", 0), n instanceof t ? r.result = n.result : "number" == typeof n && (r.result = n), r
		}
		return sr(t, [{
			key: "add",
			value: function (e) {
				return e instanceof t ? this.result += e.result : "number" == typeof e && (this.result += e), this
			}
		}, {
			key: "sub",
			value: function (e) {
				return e instanceof t ? this.result -= e.result : "number" == typeof e && (this.result -= e), this
			}
		}, {
			key: "mul",
			value: function (e) {
				return e instanceof t ? this.result *= e.result : "number" == typeof e && (this.result *= e), this
			}
		}, {
			key: "div",
			value: function (e) {
				return e instanceof t ? this.result /= e.result : "number" == typeof e && (this.result /= e), this
			}
		}, {
			key: "equal",
			value: function () {
				return this.result
			}
		}]), t
	}(),
	nl = function (e, t) {
		return "".concat([t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"))
	};

function rl(e) {
	var t = v.useRef();
	t.current = e;
	var n = v.useCallback((function () {
		for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
		return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
	}), []);
	return n
}

function ol(e) {
	var t = v.useRef(!1),
		n = Pr(v.useState(e), 2),
		r = n[0],
		o = n[1];
	return v.useEffect((function () {
		return t.current = !1,
			function () {
				t.current = !0
			}
	}), []), [r, function (e, n) {
		n && t.current || o(e)
	}]
}

function al(e) {
	return void 0 !== e
}

function il(e, t) {
	var n = t || {},
		r = n.defaultValue,
		o = n.value,
		a = n.onChange,
		i = n.postState,
		l = Pr(ol((function () {
			return al(o) ? o : al(r) ? "function" == typeof r ? r() : r : "function" == typeof e ? e() : e
		})), 2),
		s = l[0],
		c = l[1],
		u = void 0 !== o ? o : s,
		d = i ? i(u) : u,
		f = rl(a),
		p = Pr(ol([u]), 2),
		h = p[0],
		m = p[1];
	return go((function () {
		var e = h[0];
		s !== e && f(s, e)
	}), [h]), go((function () {
		al(o) || c(o)
	}), [o]), [d, rl((function (e, t) {
		c(e, t), m([u], t)
	}))]
}

function ll(e, t, n, r) {
	var o = Bn({}, t[e]);
	null != r && r.deprecatedTokens && r.deprecatedTokens.forEach((function (e) {
		var t, n = Pr(e, 2),
			r = n[0],
			a = n[1];
		(null != o && o[r] || null != o && o[a]) && (null !== (t = o[a]) && void 0 !== t || (o[a] = null == o ? void 0 : o[r]))
	}));
	var a = Bn(Bn({}, n), o);
	return Object.keys(a).forEach((function (e) {
		a[e] === t[e] && delete a[e]
	})), a
}
var sl = "undefined" != typeof CSSINJS_STATISTIC,
	cl = !0;

function ul() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	if (!sl) return Object.assign.apply(Object, [{}].concat(t));
	cl = !1;
	var r = {};
	return t.forEach((function (e) {
		"object" === Pn(e) && Object.keys(e).forEach((function (t) {
			Object.defineProperty(r, t, {
				configurable: !0,
				enumerable: !0,
				get: function () {
					return e[t]
				}
			})
		}))
	})), cl = !0, r
}
var dl = {};

function fl() {}

function pl(e, t, n) {
	var r;
	return "function" == typeof n ? n(ul(t, null !== (r = t[e]) && void 0 !== r ? r : {})) : null != n ? n : {}
}
var hl = new(function () {
	function e() {
		ir(this, e), Dn(this, "map", new Map), Dn(this, "objectIDMap", new WeakMap), Dn(this, "nextID", 0), Dn(this, "lastAccessBeat", new Map), Dn(this, "accessBeat", 0)
	}
	return sr(e, [{
		key: "set",
		value: function (e, t) {
			this.clear();
			var n = this.getCompositeKey(e);
			this.map.set(n, t), this.lastAccessBeat.set(n, Date.now())
		}
	}, {
		key: "get",
		value: function (e) {
			var t = this.getCompositeKey(e),
				n = this.map.get(t);
			return this.lastAccessBeat.set(t, Date.now()), this.accessBeat += 1, n
		}
	}, {
		key: "getCompositeKey",
		value: function (e) {
			var t = this;
			return e.map((function (e) {
				return e && "object" === Pn(e) ? "obj_".concat(t.getObjectID(e)) : "".concat(Pn(e), "_").concat(e)
			})).join("|")
		}
	}, {
		key: "getObjectID",
		value: function (e) {
			if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
			var t = this.nextID;
			return this.objectIDMap.set(e, t), this.nextID += 1, t
		}
	}, {
		key: "clear",
		value: function () {
			var e = this;
			if (this.accessBeat > 1e4) {
				var t = Date.now();
				this.lastAccessBeat.forEach((function (n, r) {
					t - n > 6e5 && (e.map.delete(r), e.lastAccessBeat.delete(r))
				})), this.accessBeat = 0
			}
		}
	}]), e
}());
var ml = function () {
	return {}
};
const gl = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];

function vl(e) {
	return e >= 0 && e <= 255
}

function yl(e, t) {
	const {
		r: n,
		g: r,
		b: o,
		a: a
	} = new oi(e).toRgb();
	if (a < 1) return e;
	const {
		r: i,
		g: l,
		b: s
	} = new oi(t).toRgb();
	for (let c = .01; c <= 1; c += .01) {
		const e = Math.round((n - i * (1 - c)) / c),
			t = Math.round((r - l * (1 - c)) / c),
			a = Math.round((o - s * (1 - c)) / c);
		if (vl(e) && vl(t) && vl(a)) return new oi({
			r: e,
			g: t,
			b: a,
			a: Math.round(100 * c) / 100
		}).toRgbString()
	}
	return new oi({
		r: n,
		g: r,
		b: o,
		a: 1
	}).toRgbString()
}

function bl(e) {
	const {
		override: t
	} = e, n = function (e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
		}
		return n
	}(e, ["override"]), r = Object.assign({}, t);
	Object.keys(Ja).forEach((e => {
		delete r[e]
	}));
	const o = Object.assign(Object.assign({}, n), r),
		a = 1200,
		i = 1600;
	if (!1 === o.motion) {
		const e = "0s";
		o.motionDurationFast = e, o.motionDurationMid = e, o.motionDurationSlow = e
	}
	return Object.assign(Object.assign(Object.assign({}, o), {
		colorFillContent: o.colorFillSecondary,
		colorFillContentHover: o.colorFill,
		colorFillAlter: o.colorFillQuaternary,
		colorBgContainerDisabled: o.colorFillTertiary,
		colorBorderBg: o.colorBgContainer,
		colorSplit: yl(o.colorBorderSecondary, o.colorBgContainer),
		colorTextPlaceholder: o.colorTextQuaternary,
		colorTextDisabled: o.colorTextQuaternary,
		colorTextHeading: o.colorText,
		colorTextLabel: o.colorTextSecondary,
		colorTextDescription: o.colorTextTertiary,
		colorTextLightSolid: o.colorWhite,
		colorHighlight: o.colorError,
		colorBgTextHover: o.colorFillSecondary,
		colorBgTextActive: o.colorFill,
		colorIcon: o.colorTextTertiary,
		colorIconHover: o.colorText,
		colorErrorOutline: yl(o.colorErrorBg, o.colorBgContainer),
		colorWarningOutline: yl(o.colorWarningBg, o.colorBgContainer),
		fontSizeIcon: o.fontSizeSM,
		lineWidthFocus: 3 * o.lineWidth,
		lineWidth: o.lineWidth,
		controlOutlineWidth: 2 * o.lineWidth,
		controlInteractiveSize: o.controlHeight / 2,
		controlItemBgHover: o.colorFillTertiary,
		controlItemBgActive: o.colorPrimaryBg,
		controlItemBgActiveHover: o.colorPrimaryBgHover,
		controlItemBgActiveDisabled: o.colorFill,
		controlTmpOutline: o.colorFillQuaternary,
		controlOutline: yl(o.colorPrimaryBg, o.colorBgContainer),
		lineType: o.lineType,
		borderRadius: o.borderRadius,
		borderRadiusXS: o.borderRadiusXS,
		borderRadiusSM: o.borderRadiusSM,
		borderRadiusLG: o.borderRadiusLG,
		fontWeightStrong: 600,
		opacityLoading: .65,
		linkDecoration: "none",
		linkHoverDecoration: "none",
		linkFocusDecoration: "none",
		controlPaddingHorizontal: 12,
		controlPaddingHorizontalSM: 8,
		paddingXXS: o.sizeXXS,
		paddingXS: o.sizeXS,
		paddingSM: o.sizeSM,
		padding: o.size,
		paddingMD: o.sizeMD,
		paddingLG: o.sizeLG,
		paddingXL: o.sizeXL,
		paddingContentHorizontalLG: o.sizeLG,
		paddingContentVerticalLG: o.sizeMS,
		paddingContentHorizontal: o.sizeMS,
		paddingContentVertical: o.sizeSM,
		paddingContentHorizontalSM: o.size,
		paddingContentVerticalSM: o.sizeXS,
		marginXXS: o.sizeXXS,
		marginXS: o.sizeXS,
		marginSM: o.sizeSM,
		margin: o.size,
		marginMD: o.sizeMD,
		marginLG: o.sizeLG,
		marginXL: o.sizeXL,
		marginXXL: o.sizeXXL,
		boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
		screenXS: 480,
		screenXSMin: 480,
		screenXSMax: 575,
		screenSM: 576,
		screenSMMin: 576,
		screenSMMax: 767,
		screenMD: 768,
		screenMDMin: 768,
		screenMDMax: 991,
		screenLG: 992,
		screenLGMin: 992,
		screenLGMax: 1199,
		screenXL: a,
		screenXLMin: a,
		screenXLMax: 1599,
		screenXXL: i,
		screenXXLMin: i,
		boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
		boxShadowCard: `\n      0 1px 2px -2px ${new oi("rgba(0, 0, 0, 0.16)").toRgbString()},\n      0 3px 6px 0 ${new oi("rgba(0, 0, 0, 0.12)").toRgbString()},\n      0 5px 12px 4px ${new oi("rgba(0, 0, 0, 0.09)").toRgbString()}\n    `,
		boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
	}), r)
}
var wl = function (e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
	}
	return n
};
const kl = {
		lineHeight: !0,
		lineHeightSM: !0,
		lineHeightLG: !0,
		lineHeightHeading1: !0,
		lineHeightHeading2: !0,
		lineHeightHeading3: !0,
		lineHeightHeading4: !0,
		lineHeightHeading5: !0,
		opacityLoading: !0,
		fontWeightStrong: !0,
		zIndexPopupBase: !0,
		zIndexBase: !0,
		opacityImage: !0
	},
	xl = {
		size: !0,
		sizeSM: !0,
		sizeLG: !0,
		sizeMD: !0,
		sizeXS: !0,
		sizeXXS: !0,
		sizeMS: !0,
		sizeXL: !0,
		sizeXXL: !0,
		sizeUnit: !0,
		sizeStep: !0,
		motionBase: !0,
		motionUnit: !0
	},
	Sl = {
		screenXS: !0,
		screenXSMin: !0,
		screenXSMax: !0,
		screenSM: !0,
		screenSMMin: !0,
		screenSMMax: !0,
		screenMD: !0,
		screenMDMin: !0,
		screenMDMax: !0,
		screenLG: !0,
		screenLGMin: !0,
		screenLGMax: !0,
		screenXL: !0,
		screenXLMin: !0,
		screenXLMax: !0,
		screenXXL: !0,
		screenXXLMin: !0
	},
	Cl = (e, t, n) => {
		const r = n.getDerivativeToken(e),
			{
				override: o
			} = t,
			a = wl(t, ["override"]);
		let i = Object.assign(Object.assign({}, r), {
			override: o
		});
		return i = bl(i), a && Object.entries(a).forEach((([e, t]) => {
			const {
				theme: n
			} = t, r = wl(t, ["theme"]);
			let o = r;
			n && (o = Cl(Object.assign(Object.assign({}, i), r), {
				override: r
			}, n)), i[e] = o
		})), i
	};

function El() {
	const {
		token: e,
		hashed: t,
		theme: n,
		override: r,
		cssVar: o
	} = y.useContext(Ii), a = `5.26.0-${t||""}`, i = n || Ni, [l, s, c] = Eo(i, [Ja, e], {
		salt: a,
		override: r,
		getComputedToken: Cl,
		formatToken: bl,
		cssVar: o && {
			prefix: o.prefix,
			key: o.key,
			unitless: kl,
			ignore: xl,
			preserve: Sl
		}
	});
	return [i, c, t ? s : "", l, o]
}
const Ol = {
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis"
	},
	$l = (e, t = !1) => ({
		boxSizing: "border-box",
		margin: 0,
		padding: 0,
		color: e.colorText,
		fontSize: e.fontSize,
		lineHeight: e.lineHeight,
		listStyle: "none",
		fontFamily: t ? "inherit" : e.fontFamily
	}),
	Pl = () => ({
		display: "inline-flex",
		alignItems: "center",
		color: "inherit",
		fontStyle: "normal",
		lineHeight: 0,
		textAlign: "center",
		textTransform: "none",
		verticalAlign: "-0.125em",
		textRendering: "optimizeLegibility",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		"> *": {
			lineHeight: 1
		},
		svg: {
			display: "inline-block"
		}
	}),
	jl = () => ({
		"&::before": {
			display: "table",
			content: '""'
		},
		"&::after": {
			display: "table",
			clear: "both",
			content: '""'
		}
	}),
	_l = (e, t) => ({
		outline: `${so(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
		outlineOffset: null != t ? t : 1,
		transition: "outline-offset 0s, outline 0s"
	}),
	Rl = (e, t) => ({
		"&:focus-visible": Object.assign({}, _l(e, t))
	}),
	Ml = e => ({
		[`.${e}`]: Object.assign(Object.assign({}, {
			display: "inline-flex",
			alignItems: "center",
			color: "inherit",
			fontStyle: "normal",
			lineHeight: 0,
			textAlign: "center",
			textTransform: "none",
			verticalAlign: "-0.125em",
			textRendering: "optimizeLegibility",
			"-webkit-font-smoothing": "antialiased",
			"-moz-osx-font-smoothing": "grayscale",
			"> *": {
				lineHeight: 1
			},
			svg: {
				display: "inline-block"
			}
		}), {
			[`.${e} .${e}-icon`]: {
				display: "block"
			}
		})
	}),
	Fl = e => Object.assign(Object.assign({
		color: e.colorLink,
		textDecoration: e.linkDecoration,
		outline: "none",
		cursor: "pointer",
		transition: `all ${e.motionDurationSlow}`,
		border: 0,
		padding: 0,
		background: "none",
		userSelect: "none"
	}, Rl(e)), {
		"&:focus, &:hover": {
			color: e.colorLinkHover
		},
		"&:active": {
			color: e.colorLinkActive
		}
	}),
	{
		genStyleHooks: Nl,
		genComponentStyleHook: Tl,
		genSubStyleComponent: Il
	} = function (e) {
		var t = e.useCSP,
			n = void 0 === t ? ml : t,
			r = e.useToken,
			o = e.usePrefix,
			a = e.getResetStyles,
			i = e.getCommonStyle,
			l = e.getCompUnitless;

		function s(t, l, s) {
			var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
				u = Array.isArray(t) ? t : [t, t],
				d = Pr(u, 1)[0],
				f = u.join("-"),
				p = e.layer || {
					name: "antd"
				};
			return function (e) {
				var t, u, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
					m = r(),
					g = m.theme,
					v = m.realToken,
					b = m.hashId,
					w = m.token,
					k = m.cssVar,
					x = o(),
					S = x.rootPrefixCls,
					C = x.iconPrefixCls,
					E = n(),
					O = k ? "css" : "js",
					$ = (t = function () {
						var e = new Set;
						return k && Object.keys(c.unitless || {}).forEach((function (t) {
								e.add(uo(t, k.prefix)), e.add(uo(t, nl(d, k.prefix)))
							})),
							function (e, t) {
								var n = "css" === e ? el : tl;
								return function (e) {
									return new n(e, t)
								}
							}(O, e)
					}, u = [O, d, null == k ? void 0 : k.prefix], y.useMemo((function () {
						var e = hl.get(u);
						if (e) return e;
						var n = t();
						return hl.set(u, n), n
					}), u)),
					P = function (e) {
						return "js" === e ? {
							max: Math.max,
							min: Math.min
						} : {
							max: function () {
								for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
								return "max(".concat(t.map((function (e) {
									return so(e)
								})).join(","), ")")
							},
							min: function () {
								for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
								return "min(".concat(t.map((function (e) {
									return so(e)
								})).join(","), ")")
							}
						}
					}(O),
					j = P.max,
					_ = P.min,
					R = {
						theme: g,
						token: w,
						hashId: b,
						nonce: function () {
							return E.nonce
						},
						clientOnly: c.clientOnly,
						layer: p,
						order: c.order || -999
					};
				"function" == typeof a && xa(Bn(Bn({}, R), {}, {
					clientOnly: !1,
					path: ["Shared", S]
				}), (function () {
					return a(w, {
						prefix: {
							rootPrefixCls: S,
							iconPrefixCls: C
						},
						csp: E
					})
				}));
				var M = xa(Bn(Bn({}, R), {}, {
					path: [f, e, C]
				}), (function () {
					if (!1 === c.injectStyle) return [];
					var t = function (e) {
							var t, n = e,
								r = fl;
							return sl && "undefined" != typeof Proxy && (t = new Set, n = new Proxy(e, {
								get: function (e, n) {
									var r;
									return cl && (null === (r = t) || void 0 === r || r.add(n)), e[n]
								}
							}), r = function (e, n) {
								var r;
								dl[e] = {
									global: Array.from(t),
									component: Bn(Bn({}, null === (r = dl[e]) || void 0 === r ? void 0 : r.component), n)
								}
							}), {
								token: n,
								keys: t,
								flush: r
							}
						}(w),
						n = t.token,
						r = t.flush,
						o = pl(d, v, s),
						a = ".".concat(e),
						u = ll(d, v, o, {
							deprecatedTokens: c.deprecatedTokens
						});
					k && o && "object" === Pn(o) && Object.keys(o).forEach((function (e) {
						o[e] = "var(".concat(uo(e, nl(d, k.prefix)), ")")
					}));
					var f = ul(n, {
							componentCls: a,
							prefixCls: e,
							iconCls: ".".concat(C),
							antCls: ".".concat(S),
							calc: $,
							max: j,
							min: _
						}, k ? o : u),
						p = l(f, {
							hashId: b,
							prefixCls: e,
							rootPrefixCls: S,
							iconPrefixCls: C
						});
					r(d, u);
					var m = "function" == typeof i ? i(f, e, h, c.resetFont) : null;
					return [!1 === c.resetStyle ? null : m, p]
				}));
				return [M, b]
			}
		}
		return {
			genStyleHooks: function (e, t, n, o) {
				var a = Array.isArray(e) ? e[0] : e;

				function i(e) {
					return "".concat(String(a)).concat(e.slice(0, 1).toUpperCase()).concat(e.slice(1))
				}
				var c = (null == o ? void 0 : o.unitless) || {},
					u = Bn(Bn({}, "function" == typeof l ? l(e) : {}), {}, Dn({}, i("zIndexPopup"), !0));
				Object.keys(c).forEach((function (e) {
					u[i(e)] = c[e]
				}));
				var d = Bn(Bn({}, o), {}, {
						unitless: u,
						prefixToken: i
					}),
					f = s(e, t, n, d),
					p = function (e, t, n) {
						var o = n.unitless,
							a = n.injectStyle,
							i = void 0 === a || a,
							l = n.prefixToken,
							s = n.ignore,
							c = function (a) {
								var i = a.rootCls,
									c = a.cssVar,
									u = void 0 === c ? {} : c,
									d = r().realToken;
								return function (e, t) {
									var n = e.key,
										r = e.prefix,
										o = e.unitless,
										a = e.ignore,
										i = e.token,
										l = e.scope,
										s = void 0 === l ? "" : l,
										c = v.useContext(Qr),
										u = c.cache.instanceId,
										d = c.container,
										f = i._tokenKey,
										p = [].concat(br(e.path), [n, s, f]);
									wo(Ca, p, (function () {
										var e = t(),
											i = Pr(po(e, n, {
												prefix: r,
												unitless: o,
												ignore: a,
												scope: s
											}), 2),
											l = i[0],
											c = i[1];
										return [l, c, ba(p, c), n]
									}), (function (e) {
										var t = Pr(e, 3)[2];
										lo && Dr(t, {
											mark: Xr
										})
									}), (function (e) {
										var t = Pr(e, 3),
											r = t[1],
											o = t[2];
										if (r) {
											var a = Hr(r, o, {
												mark: Xr,
												prepend: "queue",
												attachTo: d,
												priority: -999
											});
											a[Kr] = u, a.setAttribute(Gr, n)
										}
									}))
								}({
									path: [e],
									prefix: u.prefix,
									key: u.key,
									unitless: o,
									ignore: s,
									token: d,
									scope: i
								}, (function () {
									var r = pl(e, d, t),
										o = ll(e, d, r, {
											deprecatedTokens: null == n ? void 0 : n.deprecatedTokens
										});
									return Object.keys(r).forEach((function (e) {
										o[l(e)] = o[e], delete o[e]
									})), o
								})), null
							},
							u = function (t) {
								var n = r().cssVar;
								return [function (r) {
									return i && n ? y.createElement(y.Fragment, null, y.createElement(c, {
										rootCls: t,
										cssVar: n,
										component: e
									}), r) : r
								}, null == n ? void 0 : n.key]
							};
						return u
					}(a, n, d);
				return function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
						n = Pr(f(e, t), 2)[1],
						r = Pr(p(t), 2);
					return [r[0], n, r[1]]
				}
			},
			genSubStyleComponent: function (e, t, n) {
				var r = s(e, t, n, Bn({
					resetStyle: !1,
					order: -998
				}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}));
				return function (e) {
					var t = e.prefixCls,
						n = e.rootCls;
					return r(t, void 0 === n ? t : n), null
				}
			},
			genComponentStyleHook: s
		}
	}({
		usePrefix: () => {
			const {
				getPrefixCls: e,
				iconPrefixCls: t
			} = v.useContext(Di);
			return {
				rootPrefixCls: e(),
				iconPrefixCls: t
			}
		},
		useToken: () => {
			const [e, t, n, r, o] = El();
			return {
				theme: e,
				realToken: t,
				hashId: n,
				token: r,
				cssVar: o
			}
		},
		useCSP: () => {
			const {
				csp: e
			} = v.useContext(Di);
			return null != e ? e : {}
		},
		getResetStyles: (e, t) => {
			var n;
			const r = (e => ({
				a: {
					color: e.colorLink,
					textDecoration: e.linkDecoration,
					backgroundColor: "transparent",
					outline: "none",
					cursor: "pointer",
					transition: `color ${e.motionDurationSlow}`,
					"-webkit-text-decoration-skip": "objects",
					"&:hover": {
						color: e.colorLinkHover
					},
					"&:active": {
						color: e.colorLinkActive
					},
					"&:active, &:hover": {
						textDecoration: e.linkHoverDecoration,
						outline: 0
					},
					"&:focus": {
						textDecoration: e.linkFocusDecoration,
						outline: 0
					},
					"&[disabled]": {
						color: e.colorTextDisabled,
						cursor: "not-allowed"
					}
				}
			}))(e);
			return [r, {
				"&": r
			}, Ml(null !== (n = null == t ? void 0 : t.prefix.iconPrefixCls) && void 0 !== n ? n : zi)]
		},
		getCommonStyle: (e, t, n, r) => {
			const o = `[class^="${t}"], [class*=" ${t}"]`,
				a = n ? `.${n}` : o,
				i = {
					boxSizing: "border-box",
					"&::before, &::after": {
						boxSizing: "border-box"
					}
				};
			let l = {};
			return !1 !== r && (l = {
				fontFamily: e.fontFamily,
				fontSize: e.fontSize
			}), {
				[a]: Object.assign(Object.assign(Object.assign({}, l), i), {
					[o]: i
				})
			}
		},
		getCompUnitless: () => kl
	}),
	Ll = Object.assign({}, b),
	{
		useId: zl
	} = Ll,
	Al = void 0 === zl ? () => "" : zl;
var Dl = ["children"],
	Hl = v.createContext({});

function Bl(e) {
	var t = e.children,
		n = Ur(e, Dl);
	return v.createElement(Hl.Provider, {
		value: n
	}, t)
}
var Ul = function () {
	ur(t, v.Component);
	var e = mr(t);

	function t() {
		return ir(this, t), e.apply(this, arguments)
	}
	return sr(t, [{
		key: "render",
		value: function () {
			return this.props.children
		}
	}]), t
}();
var Vl = "none",
	Wl = "appear",
	ql = "enter",
	Gl = "leave",
	Xl = "none",
	Kl = "prepare",
	Ql = "start",
	Yl = "active",
	Zl = "end",
	Jl = "prepared";

function es(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n
}
var ts, ns, rs, os = (ts = _r(), ns = "undefined" != typeof window ? window : {}, rs = {
		animationend: es("Animation", "AnimationEnd"),
		transitionend: es("Transition", "TransitionEnd")
	}, ts && ("AnimationEvent" in ns || delete rs.animationend.animation, "TransitionEvent" in ns || delete rs.transitionend.transition), rs),
	as = {};
if (_r()) {
	var is = document.createElement("div");
	as = is.style
}
var ls = {};

function ss(e) {
	if (ls[e]) return ls[e];
	var t = os[e];
	if (t)
		for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
			var a = n[o];
			if (Object.prototype.hasOwnProperty.call(t, a) && a in as) return ls[e] = t[a], ls[e]
		}
	return ""
}
var cs = ss("animationend"),
	us = ss("transitionend"),
	ds = !(!cs || !us),
	fs = cs || "animationend",
	ps = us || "transitionend";

function hs(e, t) {
	return e ? "object" === Pn(e) ? e[t.replace(/-\w/g, (function (e) {
		return e[1].toUpperCase()
	}))] : "".concat(e, "-").concat(t) : null
}
var ms = _r() ? v.useLayoutEffect : v.useEffect;
var gs = [Kl, Ql, Yl, Zl],
	vs = [Kl, Jl],
	ys = !1;

function bs(e) {
	return e === Yl || e === Zl
}
const ws = function (e, t, n) {
	var r = Pr(ol(Xl), 2),
		o = r[0],
		a = r[1],
		i = function () {
			var e = v.useRef(null);

			function t() {
				Er.cancel(e.current)
			}
			return v.useEffect((function () {
				return function () {
					t()
				}
			}), []), [function n(r) {
				var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				t();
				var a = Er((function () {
					o <= 1 ? r({
						isCanceled: function () {
							return a !== e.current
						}
					}) : n(r, o - 1)
				}));
				e.current = a
			}, t]
		}(),
		l = Pr(i, 2),
		s = l[0],
		c = l[1];
	var u = t ? vs : gs;
	return ms((function () {
		if (o !== Xl && o !== Zl) {
			var e = u.indexOf(o),
				t = u[e + 1],
				r = n(o);
			r === ys ? a(t, !0) : t && s((function (e) {
				function n() {
					e.isCanceled() || a(t, !0)
				}!0 === r ? n() : Promise.resolve(r).then(n)
			}))
		}
	}), [e, o]), v.useEffect((function () {
		return function () {
			c()
		}
	}), []), [function () {
		a(Kl, !0)
	}, o]
};

function ks(e, t, n, r) {
	var o, a, i, l = r.motionEnter,
		s = void 0 === l || l,
		c = r.motionAppear,
		u = void 0 === c || c,
		d = r.motionLeave,
		f = void 0 === d || d,
		p = r.motionDeadline,
		h = r.motionLeaveImmediately,
		m = r.onAppearPrepare,
		g = r.onEnterPrepare,
		y = r.onLeavePrepare,
		b = r.onAppearStart,
		w = r.onEnterStart,
		k = r.onLeaveStart,
		x = r.onAppearActive,
		S = r.onEnterActive,
		C = r.onLeaveActive,
		E = r.onAppearEnd,
		O = r.onEnterEnd,
		$ = r.onLeaveEnd,
		P = r.onVisibleChanged,
		j = Pr(ol(), 2),
		_ = j[0],
		R = j[1],
		M = (o = Vl, a = Pr(v.useReducer((function (e) {
			return e + 1
		}), 0), 2)[1], i = v.useRef(o), [rl((function () {
			return i.current
		})), rl((function (e) {
			i.current = "function" == typeof e ? e(i.current) : e, a()
		}))]),
		F = Pr(M, 2),
		N = F[0],
		T = F[1],
		I = Pr(ol(null), 2),
		L = I[0],
		z = I[1],
		A = N(),
		D = v.useRef(!1),
		H = v.useRef(null);

	function B() {
		return n()
	}
	var U = v.useRef(!1);

	function V() {
		T(Vl), z(null, !0)
	}
	var W = rl((function (e) {
			var t = N();
			if (t !== Vl) {
				var n = B();
				if (!e || e.deadline || e.target === n) {
					var r, o = U.current;
					t === Wl && o ? r = null == E ? void 0 : E(n, e) : t === ql && o ? r = null == O ? void 0 : O(n, e) : t === Gl && o && (r = null == $ ? void 0 : $(n, e)), o && !1 !== r && V()
				}
			}
		})),
		q = function (e) {
			var t = v.useRef();

			function n(t) {
				t && (t.removeEventListener(ps, e), t.removeEventListener(fs, e))
			}
			return v.useEffect((function () {
				return function () {
					n(t.current)
				}
			}), []), [function (r) {
				t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(ps, e), r.addEventListener(fs, e), t.current = r)
			}, n]
		}(W),
		G = Pr(q, 1)[0],
		X = function (e) {
			switch (e) {
				case Wl:
					return Dn(Dn(Dn({}, Kl, m), Ql, b), Yl, x);
				case ql:
					return Dn(Dn(Dn({}, Kl, g), Ql, w), Yl, S);
				case Gl:
					return Dn(Dn(Dn({}, Kl, y), Ql, k), Yl, C);
				default:
					return {}
			}
		},
		K = v.useMemo((function () {
			return X(A)
		}), [A]),
		Q = Pr(ws(A, !e, (function (e) {
			if (e === Kl) {
				var t = K[Kl];
				return t ? t(B()) : ys
			}
			var n;
			Z in K && z((null === (n = K[Z]) || void 0 === n ? void 0 : n.call(K, B(), null)) || null);
			return Z === Yl && A !== Vl && (G(B()), p > 0 && (clearTimeout(H.current), H.current = setTimeout((function () {
				W({
					deadline: !0
				})
			}), p))), Z === Jl && V(), true
		})), 2),
		Y = Q[0],
		Z = Q[1],
		J = bs(Z);
	U.current = J;
	var ee = v.useRef(null);
	ms((function () {
		if (!D.current || ee.current !== t) {
			R(t);
			var n, r = D.current;
			D.current = !0, !r && t && u && (n = Wl), r && t && s && (n = ql), (r && !t && f || !r && h && !t && f) && (n = Gl);
			var o = X(n);
			n && (e || o[Kl]) ? (T(n), Y()) : T(Vl), ee.current = t
		}
	}), [t]), v.useEffect((function () {
		(A === Wl && !u || A === ql && !s || A === Gl && !f) && T(Vl)
	}), [u, s, f]), v.useEffect((function () {
		return function () {
			D.current = !1, clearTimeout(H.current)
		}
	}), []);
	var te = v.useRef(!1);
	v.useEffect((function () {
		_ && (te.current = !0), void 0 !== _ && A === Vl && ((te.current || _) && (null == P || P(_)), te.current = !0)
	}), [_, A]);
	var ne = L;
	return K[Kl] && Z === Ql && (ne = Bn({
		transition: "none"
	}, ne)), [A, Z, ne, null != _ ? _ : t]
}
const xs = function (e) {
	var t = e;
	"object" === Pn(e) && (t = e.transitionSupport);
	var n = v.forwardRef((function (e, n) {
		var r = e.visible,
			o = void 0 === r || r,
			a = e.removeOnLeave,
			i = void 0 === a || a,
			l = e.forceRender,
			s = e.children,
			c = e.motionName,
			u = e.leavedClassName,
			d = e.eventProps,
			f = function (e, n) {
				return !(!e.motionName || !t || !1 === n)
			}(e, v.useContext(Hl).motion),
			p = v.useRef(),
			h = v.useRef();
		var m = Pr(ks(f, o, (function () {
				try {
					return p.current instanceof HTMLElement ? p.current : Wn(h.current)
				} catch (wS) {
					return null
				}
			}), e), 4),
			g = m[0],
			y = m[1],
			b = m[2],
			w = m[3],
			k = v.useRef(w);
		w && (k.current = !0);
		var x, S = v.useCallback((function (e) {
				p.current = e, Jn(n, e)
			}), [n]),
			C = Bn(Bn({}, d), {}, {
				visible: o
			});
		if (s)
			if (g === Vl) x = w ? s(Bn({}, C), S) : !i && k.current && u ? s(Bn(Bn({}, C), {}, {
				className: u
			}), S) : l || !i && !u ? s(Bn(Bn({}, C), {}, {
				style: {
					display: "none"
				}
			}), S) : null;
			else {
				var E;
				y === Kl ? E = "prepare" : bs(y) ? E = "active" : y === Ql && (E = "start");
				var O = hs(c, "".concat(g, "-").concat(E));
				x = s(Bn(Bn({}, C), {}, {
					className: On(hs(c, g), Dn(Dn({}, O, O && E), c, "string" == typeof c)),
					style: b
				}), S)
			}
		else x = null;
		v.isValidElement(x) && nr(x) && (ar(x) || (x = v.cloneElement(x, {
			ref: S
		})));
		return v.createElement(Ul, {
			ref: h
		}, x)
	}));
	return n.displayName = "CSSMotion", n
}(ds);
var Ss = "add",
	Cs = "keep",
	Es = "remove",
	Os = "removed";

function $s(e) {
	var t;
	return Bn(Bn({}, t = e && "object" === Pn(e) && "key" in e ? e : {
		key: e
	}), {}, {
		key: String(t.key)
	})
}

function Ps() {
	return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map($s)
}
var js = ["component", "children", "onVisibleChanged", "onAllRemoved"],
	_s = ["status"],
	Rs = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
const Ms = function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xs,
			n = function () {
				ur(n, v.Component);
				var e = mr(n);

				function n() {
					var t;
					ir(this, n);
					for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
					return Dn(pr(t = e.call.apply(e, [this].concat(o))), "state", {
						keyEntities: []
					}), Dn(pr(t), "removeKey", (function (e) {
						t.setState((function (t) {
							return {
								keyEntities: t.keyEntities.map((function (t) {
									return t.key !== e ? t : Bn(Bn({}, t), {}, {
										status: Os
									})
								}))
							}
						}), (function () {
							0 === t.state.keyEntities.filter((function (e) {
								return e.status !== Os
							})).length && t.props.onAllRemoved && t.props.onAllRemoved()
						}))
					})), t
				}
				return sr(n, [{
					key: "render",
					value: function () {
						var e = this,
							n = this.state.keyEntities,
							r = this.props,
							o = r.component,
							a = r.children,
							i = r.onVisibleChanged;
						r.onAllRemoved;
						var l = Ur(r, js),
							s = o || v.Fragment,
							c = {};
						return Rs.forEach((function (e) {
							c[e] = l[e], delete l[e]
						})), delete l.keys, v.createElement(s, l, n.map((function (n, r) {
							var o = n.status,
								l = Ur(n, _s),
								s = o === Ss || o === Cs;
							return v.createElement(t, $n({}, c, {
								key: l.key,
								visible: s,
								eventProps: l,
								onVisibleChanged: function (t) {
									null == i || i(t, {
										key: l.key
									}), t || e.removeKey(l.key)
								}
							}), (function (e, t) {
								return a(Bn(Bn({}, e), {}, {
									index: r
								}), t)
							}))
						})))
					}
				}], [{
					key: "getDerivedStateFromProps",
					value: function (e, t) {
						var n = e.keys,
							r = t.keyEntities,
							o = Ps(n),
							a = function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
									t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
									n = [],
									r = 0,
									o = t.length,
									a = Ps(e),
									i = Ps(t);
								a.forEach((function (e) {
									for (var t = !1, a = r; a < o; a += 1) {
										var l = i[a];
										if (l.key === e.key) {
											r < a && (n = n.concat(i.slice(r, a).map((function (e) {
												return Bn(Bn({}, e), {}, {
													status: Ss
												})
											}))), r = a), n.push(Bn(Bn({}, l), {}, {
												status: Cs
											})), r += 1, t = !0;
											break
										}
									}
									t || n.push(Bn(Bn({}, e), {}, {
										status: Es
									}))
								})), r < o && (n = n.concat(i.slice(r).map((function (e) {
									return Bn(Bn({}, e), {}, {
										status: Ss
									})
								}))));
								var l = {};
								return n.forEach((function (e) {
									var t = e.key;
									l[t] = (l[t] || 0) + 1
								})), Object.keys(l).filter((function (e) {
									return l[e] > 1
								})).forEach((function (e) {
									(n = n.filter((function (t) {
										var n = t.key,
											r = t.status;
										return n !== e || r !== Es
									}))).forEach((function (t) {
										t.key === e && (t.status = Cs)
									}))
								})), n
							}(r, o);
						return {
							keyEntities: a.filter((function (e) {
								var t = r.find((function (t) {
									var n = t.key;
									return e.key === n
								}));
								return !t || t.status !== Os || e.status !== Es
							}))
						}
					}
				}]), n
			}();
		return Dn(n, "defaultProps", {
			component: "div"
		}), n
	}(ds),
	Fs = v.createContext(!0);

function Ns(e) {
	const t = v.useContext(Fs),
		{
			children: n
		} = e,
		[, r] = El(),
		{
			motion: o
		} = r,
		a = v.useRef(!1);
	return a.current || (a.current = t !== o), a.current ? v.createElement(Fs.Provider, {
		value: o
	}, v.createElement(Bl, {
		motion: o
	}, n)) : n
}
const Ts = () => null;
const Is = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Ls, zs, As, Ds;

function Hs() {
	return Ls || Li
}

function Bs() {
	return zs || zi
}
const Us = () => ({
		getPrefixCls: (e, t) => t || (e ? `${Hs()}-${e}` : Hs()),
		getIconPrefixCls: Bs,
		getRootPrefixCls: () => Ls || Hs(),
		getTheme: () => As,
		holderRender: Ds
	}),
	Vs = e => {
		const {
			children: t,
			csp: n,
			autoInsertSpaceInButton: r,
			alert: o,
			anchor: a,
			form: i,
			locale: l,
			componentSize: s,
			direction: c,
			space: u,
			splitter: d,
			virtual: f,
			dropdownMatchSelectWidth: p,
			popupMatchSelectWidth: h,
			popupOverflow: m,
			legacyLocale: g,
			parentContext: y,
			iconPrefixCls: b,
			theme: w,
			componentDisabled: k,
			segmented: x,
			statistic: S,
			spin: C,
			calendar: E,
			carousel: O,
			cascader: $,
			collapse: P,
			typography: j,
			checkbox: _,
			descriptions: R,
			divider: M,
			drawer: F,
			skeleton: N,
			steps: T,
			image: I,
			layout: L,
			list: z,
			mentions: A,
			modal: D,
			progress: H,
			result: B,
			slider: U,
			breadcrumb: V,
			menu: W,
			pagination: q,
			input: G,
			textArea: X,
			empty: K,
			badge: Q,
			radio: Y,
			rate: Z,
			switch: J,
			transfer: ee,
			avatar: te,
			message: ne,
			tag: re,
			table: oe,
			card: ae,
			tabs: ie,
			timeline: le,
			timePicker: se,
			upload: ce,
			notification: ue,
			tree: de,
			colorPicker: fe,
			datePicker: pe,
			rangePicker: he,
			flex: me,
			wave: ge,
			dropdown: ve,
			warning: ye,
			tour: be,
			tooltip: we,
			popover: ke,
			popconfirm: xe,
			floatButtonGroup: Se,
			variant: Ce,
			inputNumber: Ee,
			treeSelect: Oe
		} = e, $e = v.useCallback(((t, n) => {
			const {
				prefixCls: r
			} = e;
			if (n) return n;
			const o = r || y.getPrefixCls("");
			return t ? `${o}-${t}` : o
		}), [y.getPrefixCls, e.prefixCls]), Pe = b || y.iconPrefixCls || zi, je = n || y.csp;
		((e, t) => {
			const [n, r] = El();
			xa({
				token: r,
				hashId: "",
				path: ["ant-design-icons", e],
				nonce: () => null == t ? void 0 : t.nonce,
				layer: {
					name: "antd"
				}
			}, (() => [Ml(e)]))
		})(Pe, je);
		const _e = function (e, t, n) {
				var r;
				La();
				const o = e || {},
					a = !1 !== o.inherit && t ? t : Object.assign(Object.assign({}, Ti), {
						hashed: null !== (r = null == t ? void 0 : t.hashed) && void 0 !== r ? r : Ti.hashed,
						cssVar: null == t ? void 0 : t.cssVar
					}),
					i = Al();
				return Yn((() => {
					var r, l;
					if (!e) return t;
					const s = Object.assign({}, a.components);
					Object.keys(e.components || {}).forEach((t => {
						s[t] = Object.assign(Object.assign({}, s[t]), e.components[t])
					}));
					const c = `css-var-${i.replace(/:/g,"")}`,
						u = (null !== (r = o.cssVar) && void 0 !== r ? r : a.cssVar) && Object.assign(Object.assign(Object.assign({
							prefix: null == n ? void 0 : n.prefixCls
						}, "object" == typeof a.cssVar ? a.cssVar : {}), "object" == typeof o.cssVar ? o.cssVar : {}), {
							key: "object" == typeof o.cssVar && (null === (l = o.cssVar) || void 0 === l ? void 0 : l.key) || c
						});
					return Object.assign(Object.assign(Object.assign({}, a), o), {
						token: Object.assign(Object.assign({}, a.token), o.token),
						components: s,
						cssVar: u
					})
				}), [o, a], ((e, t) => e.some(((e, n) => !Vr(e, t[n], !0)))))
			}(w, y.theme, {
				prefixCls: $e("")
			}),
			Re = {
				csp: je,
				autoInsertSpaceInButton: r,
				alert: o,
				anchor: a,
				locale: l || g,
				direction: c,
				space: u,
				splitter: d,
				virtual: f,
				popupMatchSelectWidth: null != h ? h : p,
				popupOverflow: m,
				getPrefixCls: $e,
				iconPrefixCls: Pe,
				theme: _e,
				segmented: x,
				statistic: S,
				spin: C,
				calendar: E,
				carousel: O,
				cascader: $,
				collapse: P,
				typography: j,
				checkbox: _,
				descriptions: R,
				divider: M,
				drawer: F,
				skeleton: N,
				steps: T,
				image: I,
				input: G,
				textArea: X,
				layout: L,
				list: z,
				mentions: A,
				modal: D,
				progress: H,
				result: B,
				slider: U,
				breadcrumb: V,
				menu: W,
				pagination: q,
				empty: K,
				badge: Q,
				radio: Y,
				rate: Z,
				switch: J,
				transfer: ee,
				avatar: te,
				message: ne,
				tag: re,
				table: oe,
				card: ae,
				tabs: ie,
				timeline: le,
				timePicker: se,
				upload: ce,
				notification: ue,
				tree: de,
				colorPicker: fe,
				datePicker: pe,
				rangePicker: he,
				flex: me,
				wave: ge,
				dropdown: ve,
				warning: ye,
				tour: be,
				tooltip: we,
				popover: ke,
				popconfirm: xe,
				floatButtonGroup: Se,
				variant: Ce,
				inputNumber: Ee,
				treeSelect: Oe
			},
			Me = Object.assign({}, y);
		Object.keys(Re).forEach((e => {
			void 0 !== Re[e] && (Me[e] = Re[e])
		})), Is.forEach((t => {
			const n = e[t];
			n && (Me[t] = n)
		})), void 0 !== r && (Me.button = Object.assign({
			autoInsertSpace: r
		}, Me.button));
		const Fe = Yn((() => Me), Me, ((e, t) => {
				const n = Object.keys(e),
					r = Object.keys(t);
				return n.length !== r.length || n.some((n => e[n] !== t[n]))
			})),
			{
				layer: Ne
			} = v.useContext(Qr),
			Te = v.useMemo((() => ({
				prefixCls: Pe,
				csp: je,
				layer: Ne ? "antd" : void 0
			})), [Pe, je, Ne]);
		let Ie = v.createElement(v.Fragment, null, v.createElement(Ts, {
			dropdownMatchSelectWidth: p
		}), t);
		const Le = v.useMemo((() => {
			var e, t, n, r;
			return Na((null === (e = Va.Form) || void 0 === e ? void 0 : e.defaultValidateMessages) || {}, (null === (n = null === (t = Fe.locale) || void 0 === t ? void 0 : t.Form) || void 0 === n ? void 0 : n.defaultValidateMessages) || {}, (null === (r = Fe.form) || void 0 === r ? void 0 : r.validateMessages) || {}, (null == i ? void 0 : i.validateMessages) || {})
		}), [Fe, null == i ? void 0 : i.validateMessages]);
		Object.keys(Le).length > 0 && (Ie = v.createElement(za.Provider, {
			value: Le
		}, Ie)), l && (Ie = v.createElement(Ya, {
			locale: l,
			_ANT_MARK__: "internalMark"
		}, Ie)), Ie = v.createElement($a.Provider, {
			value: Te
		}, Ie), s && (Ie = v.createElement(Ki, {
			size: s
		}, Ie)), Ie = v.createElement(Ns, null, Ie);
		const ze = v.useMemo((() => {
			const e = _e || {},
				{
					algorithm: t,
					token: n,
					components: r,
					cssVar: o
				} = e,
				a = function (e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
					}
					return n
				}(e, ["algorithm", "token", "components", "cssVar"]),
				i = t && (!Array.isArray(t) || t.length > 0) ? to(t) : Ni,
				l = {};
			Object.entries(r || {}).forEach((([e, t]) => {
				const n = Object.assign({}, t);
				"algorithm" in n && (!0 === n.algorithm ? n.theme = i : (Array.isArray(n.algorithm) || "function" == typeof n.algorithm) && (n.theme = to(n.algorithm)), delete n.algorithm), l[e] = n
			}));
			const s = Object.assign(Object.assign({}, Ja), n);
			return Object.assign(Object.assign({}, a), {
				theme: i,
				token: s,
				components: l,
				override: Object.assign({
					override: s
				}, l),
				cssVar: o
			})
		}), [_e]);
		return w && (Ie = v.createElement(Ii.Provider, {
			value: ze
		}, Ie)), Fe.warning && (Ie = v.createElement(Ia.Provider, {
			value: Fe.warning
		}, Ie)), void 0 !== k && (Ie = v.createElement(Gi, {
			disabled: k
		}, Ie)), v.createElement(Di.Provider, {
			value: Fe
		}, Ie)
	},
	Ws = e => {
		const t = v.useContext(Di),
			n = v.useContext(Ka);
		return v.createElement(Vs, Object.assign({
			parentContext: t,
			legacyLocale: n
		}, e))
	};
Ws.ConfigContext = Di, Ws.SizeContext = Xi, Ws.config = e => {
	const {
		prefixCls: t,
		iconPrefixCls: n,
		theme: r,
		holderRender: o
	} = e;
	void 0 !== t && (Ls = t), void 0 !== n && (zs = n), "holderRender" in e && (Ds = o), r && (! function (e) {
		return Object.keys(e).some((e => e.endsWith("Color")))
	}(r) ? As = r : Wi(Hs(), r))
}, Ws.useConfig = function () {
	return {
		componentDisabled: v.useContext(qi),
		componentSize: v.useContext(Xi)
	}
}, Object.defineProperty(Ws, "SizeContext", {
	get: () => Xi
});
var qs = {
	icon: {
		tag: "svg",
		attrs: {
			viewBox: "64 64 896 896",
			focusable: "false"
		},
		children: [{
			tag: "path",
			attrs: {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
			}
		}]
	},
	name: "check-circle",
	theme: "filled"
};

function Gs(e) {
	var t;
	return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
}

function Xs(e) {
	return function (e) {
		return Gs(e) instanceof ShadowRoot
	}(e) ? Gs(e) : null
}

function Ks(e) {
	return "object" === Pn(e) && "string" == typeof e.name && "string" == typeof e.theme && ("object" === Pn(e.icon) || "function" == typeof e.icon)
}

function Qs() {
	var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	return Object.keys(e).reduce((function (t, n) {
		var r, o = e[n];
		if ("class" === n) t.className = o, delete t.class;
		else delete t[n], t[(r = n, r.replace(/-(.)/g, (function (e, t) {
			return t.toUpperCase()
		})))] = o;
		return t
	}), {})
}

function Ys(e, t, n) {
	return n ? y.createElement(e.tag, Bn(Bn({
		key: t
	}, Qs(e.attrs)), n), (e.children || []).map((function (n, r) {
		return Ys(n, "".concat(t, "-").concat(e.tag, "-").concat(r))
	}))) : y.createElement(e.tag, Bn({
		key: t
	}, Qs(e.attrs)), (e.children || []).map((function (n, r) {
		return Ys(n, "".concat(t, "-").concat(e.tag, "-").concat(r))
	})))
}

function Zs(e) {
	return ci(e)[0]
}

function Js(e) {
	return e ? Array.isArray(e) ? e : [e] : []
}
var ec = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
	tc = {
		primaryColor: "#333",
		secondaryColor: "#E6E6E6",
		calculated: !1
	};
var nc = function (e) {
	var t, n, r, o, a, i, l, s, c = e.icon,
		u = e.className,
		d = e.onClick,
		f = e.style,
		p = e.primaryColor,
		h = e.secondaryColor,
		m = Ur(e, ec),
		g = v.useRef(),
		y = tc;
	if (p && (y = {
			primaryColor: p,
			secondaryColor: h || Zs(p)
		}), t = g, n = v.useContext($a), r = n.csp, o = n.prefixCls, a = n.layer, i = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, " {\n").concat(i, "\n}")), v.useEffect((function () {
			var e = Xs(t.current);
			Hr(i, "@ant-design-icons", {
				prepend: !a,
				csp: r,
				attachTo: e
			})
		}), []), l = Ks(c), s = "icon should be icon definiton, but got ".concat(c), zn(l, "[@ant-design/icons] ".concat(s)), !Ks(c)) return null;
	var b = c;
	return b && "function" == typeof b.icon && (b = Bn(Bn({}, b), {}, {
		icon: b.icon(y.primaryColor, y.secondaryColor)
	})), Ys(b.icon, "svg-".concat(b.name), Bn(Bn({
		className: u,
		onClick: d,
		style: f,
		"data-icon": b.name,
		width: "1em",
		height: "1em",
		fill: "currentColor",
		"aria-hidden": "true"
	}, m), {}, {
		ref: g
	}))
};

function rc(e) {
	var t = Pr(Js(e), 2),
		n = t[0],
		r = t[1];
	return nc.setTwoToneColors({
		primaryColor: n,
		secondaryColor: r
	})
}
nc.displayName = "IconReact", nc.getTwoToneColors = function () {
	return Bn({}, tc)
}, nc.setTwoToneColors = function (e) {
	var t = e.primaryColor,
		n = e.secondaryColor;
	tc.primaryColor = t, tc.secondaryColor = n || Zs(t), tc.calculated = !!n
};
var oc = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
rc(bi.primary);
var ac = v.forwardRef((function (e, t) {
	var n = e.className,
		r = e.icon,
		o = e.spin,
		a = e.rotate,
		i = e.tabIndex,
		l = e.onClick,
		s = e.twoToneColor,
		c = Ur(e, oc),
		u = v.useContext($a),
		d = u.prefixCls,
		f = void 0 === d ? "anticon" : d,
		p = u.rootClassName,
		h = On(p, f, Dn(Dn({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || "loading" === r.name), n),
		m = i;
	void 0 === m && l && (m = -1);
	var g = a ? {
			msTransform: "rotate(".concat(a, "deg)"),
			transform: "rotate(".concat(a, "deg)")
		} : void 0,
		y = Pr(Js(s), 2),
		b = y[0],
		w = y[1];
	return v.createElement("span", $n({
		role: "img",
		"aria-label": r.name
	}, c, {
		ref: t,
		tabIndex: m,
		onClick: l,
		className: h
	}), v.createElement(nc, {
		icon: r,
		primaryColor: b,
		secondaryColor: w,
		style: g
	}))
}));
ac.displayName = "AntdIcon", ac.getTwoToneColor = function () {
	var e = nc.getTwoToneColors();
	return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}, ac.setTwoToneColor = rc;
var ic = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: qs
		}))
	},
	lc = v.forwardRef(ic),
	sc = {
		icon: {
			tag: "svg",
			attrs: {
				"fill-rule": "evenodd",
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
				}
			}]
		},
		name: "close-circle",
		theme: "filled"
	},
	cc = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: sc
		}))
	},
	uc = v.forwardRef(cc),
	dc = {
		icon: {
			tag: "svg",
			attrs: {
				"fill-rule": "evenodd",
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
				}
			}]
		},
		name: "close",
		theme: "outlined"
	},
	fc = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: dc
		}))
	},
	pc = v.forwardRef(fc),
	hc = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
				}
			}]
		},
		name: "exclamation-circle",
		theme: "filled"
	},
	mc = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: hc
		}))
	},
	gc = v.forwardRef(mc),
	vc = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
				}
			}]
		},
		name: "info-circle",
		theme: "filled"
	},
	yc = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: vc
		}))
	},
	bc = v.forwardRef(yc),
	wc = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);

function kc(e, t) {
	return 0 === e.indexOf(t)
}

function xc(e) {
	var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	t = !1 === n ? {
		aria: !0,
		data: !0,
		attr: !0
	} : !0 === n ? {
		aria: !0
	} : Bn({}, n);
	var r = {};
	return Object.keys(e).forEach((function (n) {
		(t.aria && ("role" === n || kc(n, "aria-")) || t.data && kc(n, "data-") || t.attr && wc.includes(n)) && (r[n] = e[n])
	})), r
}

function Sc(e) {
	return e && y.isValidElement(e) && e.type === y.Fragment
}
const Cc = (e, t, n) => y.isValidElement(e) ? y.cloneElement(e, "function" == typeof n ? n(e.props || {}) : n) : t;

function Ec(e, t) {
	return Cc(e, e, t)
}
const Oc = (e, t, n, r, o) => ({
		background: e,
		border: `${so(r.lineWidth)} ${r.lineType} ${t}`,
		[`${o}-icon`]: {
			color: n
		}
	}),
	$c = e => {
		const {
			componentCls: t,
			motionDurationSlow: n,
			marginXS: r,
			marginSM: o,
			fontSize: a,
			fontSizeLG: i,
			lineHeight: l,
			borderRadiusLG: s,
			motionEaseInOutCirc: c,
			withDescriptionIconSize: u,
			colorText: d,
			colorTextHeading: f,
			withDescriptionPadding: p,
			defaultPadding: h
		} = e;
		return {
			[t]: Object.assign(Object.assign({}, $l(e)), {
				position: "relative",
				display: "flex",
				alignItems: "center",
				padding: h,
				wordWrap: "break-word",
				borderRadius: s,
				[`&${t}-rtl`]: {
					direction: "rtl"
				},
				[`${t}-content`]: {
					flex: 1,
					minWidth: 0
				},
				[`${t}-icon`]: {
					marginInlineEnd: r,
					lineHeight: 0
				},
				"&-description": {
					display: "none",
					fontSize: a,
					lineHeight: l
				},
				"&-message": {
					color: f
				},
				[`&${t}-motion-leave`]: {
					overflow: "hidden",
					opacity: 1,
					transition: `max-height ${n} ${c}, opacity ${n} ${c},\n        padding-top ${n} ${c}, padding-bottom ${n} ${c},\n        margin-bottom ${n} ${c}`
				},
				[`&${t}-motion-leave-active`]: {
					maxHeight: 0,
					marginBottom: "0 !important",
					paddingTop: 0,
					paddingBottom: 0,
					opacity: 0
				}
			}),
			[`${t}-with-description`]: {
				alignItems: "flex-start",
				padding: p,
				[`${t}-icon`]: {
					marginInlineEnd: o,
					fontSize: u,
					lineHeight: 0
				},
				[`${t}-message`]: {
					display: "block",
					marginBottom: r,
					color: f,
					fontSize: i
				},
				[`${t}-description`]: {
					display: "block",
					color: d
				}
			},
			[`${t}-banner`]: {
				marginBottom: 0,
				border: "0 !important",
				borderRadius: 0
			}
		}
	},
	Pc = e => {
		const {
			componentCls: t,
			colorSuccess: n,
			colorSuccessBorder: r,
			colorSuccessBg: o,
			colorWarning: a,
			colorWarningBorder: i,
			colorWarningBg: l,
			colorError: s,
			colorErrorBorder: c,
			colorErrorBg: u,
			colorInfo: d,
			colorInfoBorder: f,
			colorInfoBg: p
		} = e;
		return {
			[t]: {
				"&-success": Oc(o, r, n, e, t),
				"&-info": Oc(p, f, d, e, t),
				"&-warning": Oc(l, i, a, e, t),
				"&-error": Object.assign(Object.assign({}, Oc(u, c, s, e, t)), {
					[`${t}-description > pre`]: {
						margin: 0,
						padding: 0
					}
				})
			}
		}
	},
	jc = e => {
		const {
			componentCls: t,
			iconCls: n,
			motionDurationMid: r,
			marginXS: o,
			fontSizeIcon: a,
			colorIcon: i,
			colorIconHover: l
		} = e;
		return {
			[t]: {
				"&-action": {
					marginInlineStart: o
				},
				[`${t}-close-icon`]: {
					marginInlineStart: o,
					padding: 0,
					overflow: "hidden",
					fontSize: a,
					lineHeight: so(a),
					backgroundColor: "transparent",
					border: "none",
					outline: "none",
					cursor: "pointer",
					[`${n}-close`]: {
						color: i,
						transition: `color ${r}`,
						"&:hover": {
							color: l
						}
					}
				},
				"&-close-text": {
					color: i,
					transition: `color ${r}`,
					"&:hover": {
						color: l
					}
				}
			}
		}
	},
	_c = Nl("Alert", (e => [$c(e), Pc(e), jc(e)]), (e => ({
		withDescriptionIconSize: e.fontSizeHeading3,
		defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
		withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
	})));
var Rc = function (e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
	}
	return n
};
const Mc = {
		success: lc,
		info: bc,
		error: uc,
		warning: gc
	},
	Fc = e => {
		const {
			icon: t,
			prefixCls: n,
			type: r
		} = e, o = Mc[r] || null;
		return t ? Cc(t, v.createElement("span", {
			className: `${n}-icon`
		}, t), (() => ({
			className: On(`${n}-icon`, t.props.className)
		}))) : v.createElement(o, {
			className: `${n}-icon`
		})
	},
	Nc = e => {
		const {
			isClosable: t,
			prefixCls: n,
			closeIcon: r,
			handleClose: o,
			ariaProps: a
		} = e, i = !0 === r || void 0 === r ? v.createElement(pc, null) : r;
		return t ? v.createElement("button", Object.assign({
			type: "button",
			onClick: o,
			className: `${n}-close-icon`,
			tabIndex: 0
		}, a), i) : null
	},
	Tc = v.forwardRef(((e, t) => {
		const {
			description: n,
			prefixCls: r,
			message: o,
			banner: a,
			className: i,
			rootClassName: l,
			style: s,
			onMouseEnter: c,
			onMouseLeave: u,
			onClick: d,
			afterClose: f,
			showIcon: p,
			closable: h,
			closeText: m,
			closeIcon: g,
			action: y,
			id: b
		} = e, w = Rc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [k, x] = v.useState(!1), S = v.useRef(null);
		v.useImperativeHandle(t, (() => ({
			nativeElement: S.current
		})));
		const {
			getPrefixCls: C,
			direction: E,
			closable: O,
			closeIcon: $,
			className: P,
			style: j
		} = Ui("alert"), _ = C("alert", r), [R, M, F] = _c(_), N = t => {
			var n;
			x(!0), null === (n = e.onClose) || void 0 === n || n.call(e, t)
		}, T = v.useMemo((() => void 0 !== e.type ? e.type : a ? "warning" : "info"), [e.type, a]), I = v.useMemo((() => !("object" != typeof h || !h.closeIcon) || (!!m || ("boolean" == typeof h ? h : !1 !== g && null != g || !!O))), [m, g, h, O]), L = !(!a || void 0 !== p) || p, z = On(_, `${_}-${T}`, {
			[`${_}-with-description`]: !!n,
			[`${_}-no-icon`]: !L,
			[`${_}-banner`]: !!a,
			[`${_}-rtl`]: "rtl" === E
		}, P, i, l, F, M), A = xc(w, {
			aria: !0,
			data: !0
		}), D = v.useMemo((() => "object" == typeof h && h.closeIcon ? h.closeIcon : m || (void 0 !== g ? g : "object" == typeof O && O.closeIcon ? O.closeIcon : $)), [g, h, m, $]), H = v.useMemo((() => {
			const e = null != h ? h : O;
			if ("object" == typeof e) {
				const {
					closeIcon: t
				} = e;
				return Rc(e, ["closeIcon"])
			}
			return {}
		}), [h, O]);
		return R(v.createElement(xs, {
			visible: !k,
			motionName: `${_}-motion`,
			motionAppear: !1,
			motionEnter: !1,
			onLeaveStart: e => ({
				maxHeight: e.offsetHeight
			}),
			onLeaveEnd: f
		}, (({
			className: t,
			style: r
		}, a) => v.createElement("div", Object.assign({
			id: b,
			ref: er(S, a),
			"data-show": !k,
			className: On(z, t),
			style: Object.assign(Object.assign(Object.assign({}, j), s), r),
			onMouseEnter: c,
			onMouseLeave: u,
			onClick: d,
			role: "alert"
		}, A), L ? v.createElement(Fc, {
			description: n,
			icon: e.icon,
			prefixCls: _,
			type: T
		}) : null, v.createElement("div", {
			className: `${_}-content`
		}, o ? v.createElement("div", {
			className: `${_}-message`
		}, o) : null, n ? v.createElement("div", {
			className: `${_}-description`
		}, n) : null), y ? v.createElement("div", {
			className: `${_}-action`
		}, y) : null, v.createElement(Nc, {
			isClosable: I,
			prefixCls: _,
			closeIcon: D,
			handleClose: N,
			ariaProps: H
		})))))
	}));
let Ic = function () {
	function e() {
		var t, n, r, o;
		return ir(this, e), n = this, o = arguments, r = dr(r = e), (t = hr(n, fr() ? Reflect.construct(r, o || [], dr(n).constructor) : r.apply(n, o))).state = {
			error: void 0,
			info: {
				componentStack: ""
			}
		}, t
	}
	return ur(e, v.Component), sr(e, [{
		key: "componentDidCatch",
		value: function (e, t) {
			this.setState({
				error: e,
				info: t
			})
		}
	}, {
		key: "render",
		value: function () {
			const {
				message: e,
				description: t,
				id: n,
				children: r
			} = this.props, {
				error: o,
				info: a
			} = this.state, i = (null == a ? void 0 : a.componentStack) || null, l = void 0 === e ? (o || "").toString() : e, s = void 0 === t ? i : t;
			return o ? v.createElement(Tc, {
				id: n,
				type: "error",
				message: l,
				description: v.createElement("pre", {
					style: {
						fontSize: "0.9em",
						overflowX: "auto"
					}
				}, s)
			}) : r
		}
	}])
}();
const Lc = e => {
	const [, , , , t] = El();
	return t ? `${e}-css-var` : ""
};
var zc = {
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		CAPS_LOCK: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		DELETE: 46,
		N: 78,
		P: 80,
		META: 91,
		WIN_KEY_RIGHT: 92,
		CONTEXT_MENU: 93,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SEMICOLON: 186,
		EQUALS: 187,
		WIN_KEY: 224
	},
	Ac = v.forwardRef((function (e, t) {
		var n = e.prefixCls,
			r = e.style,
			o = e.className,
			a = e.duration,
			i = void 0 === a ? 4.5 : a,
			l = e.showProgress,
			s = e.pauseOnHover,
			c = void 0 === s || s,
			u = e.eventKey,
			d = e.content,
			f = e.closable,
			p = e.closeIcon,
			h = void 0 === p ? "x" : p,
			m = e.props,
			g = e.onClick,
			y = e.onNoticeClose,
			b = e.times,
			w = e.hovering,
			k = Pr(v.useState(!1), 2),
			x = k[0],
			S = k[1],
			C = Pr(v.useState(0), 2),
			E = C[0],
			O = C[1],
			$ = Pr(v.useState(0), 2),
			P = $[0],
			j = $[1],
			_ = w || x,
			R = i > 0 && l,
			M = function () {
				y(u)
			};
		v.useEffect((function () {
			if (!_ && i > 0) {
				var e = Date.now() - P,
					t = setTimeout((function () {
						M()
					}), 1e3 * i - P);
				return function () {
					c && clearTimeout(t), j(Date.now() - e)
				}
			}
		}), [i, _, b]), v.useEffect((function () {
			if (!_ && R && (c || 0 === P)) {
				var e, t = performance.now();
				return function n() {
						cancelAnimationFrame(e), e = requestAnimationFrame((function (e) {
							var r = e + P - t,
								o = Math.min(r / (1e3 * i), 1);
							O(100 * o), o < 1 && n()
						}))
					}(),
					function () {
						c && cancelAnimationFrame(e)
					}
			}
		}), [i, P, _, R, b]);
		var F = v.useMemo((function () {
				return "object" === Pn(f) && null !== f ? f : f ? {
					closeIcon: h
				} : {}
			}), [f, h]),
			N = xc(F, !0),
			T = 100 - (!E || E < 0 ? 0 : E > 100 ? 100 : E),
			I = "".concat(n, "-notice");
		return v.createElement("div", $n({}, m, {
			ref: t,
			className: On(I, o, Dn({}, "".concat(I, "-closable"), f)),
			style: r,
			onMouseEnter: function (e) {
				var t;
				S(!0), null == m || null === (t = m.onMouseEnter) || void 0 === t || t.call(m, e)
			},
			onMouseLeave: function (e) {
				var t;
				S(!1), null == m || null === (t = m.onMouseLeave) || void 0 === t || t.call(m, e)
			},
			onClick: g
		}), v.createElement("div", {
			className: "".concat(I, "-content")
		}, d), f && v.createElement("a", $n({
			tabIndex: 0,
			className: "".concat(I, "-close"),
			onKeyDown: function (e) {
				"Enter" !== e.key && "Enter" !== e.code && e.keyCode !== zc.ENTER || M()
			},
			"aria-label": "Close"
		}, N, {
			onClick: function (e) {
				e.preventDefault(), e.stopPropagation(), M()
			}
		}), F.closeIcon), R && v.createElement("progress", {
			className: "".concat(I, "-progress"),
			max: "100",
			value: T
		}, T + "%"))
	})),
	Dc = y.createContext({}),
	Hc = function (e) {
		var t = e.children,
			n = e.classNames;
		return y.createElement(Dc.Provider, {
			value: {
				classNames: n
			}
		}, t)
	},
	Bc = ["className", "style", "classNames", "styles"],
	Uc = function (e) {
		var t, n, r, o, a, i = e.configList,
			l = e.placement,
			s = e.prefixCls,
			c = e.className,
			u = e.style,
			d = e.motion,
			f = e.onAllNoticeRemoved,
			p = e.onNoticeClose,
			h = e.stack,
			m = v.useContext(Dc).classNames,
			g = v.useRef({}),
			b = Pr(v.useState(null), 2),
			w = b[0],
			k = b[1],
			x = Pr(v.useState([]), 2),
			S = x[0],
			C = x[1],
			E = i.map((function (e) {
				return {
					config: e,
					key: String(e.key)
				}
			})),
			O = Pr((a = {
				offset: 8,
				threshold: 3,
				gap: 16
			}, (t = h) && "object" === Pn(t) && (a.offset = null !== (n = t.offset) && void 0 !== n ? n : 8, a.threshold = null !== (r = t.threshold) && void 0 !== r ? r : 3, a.gap = null !== (o = t.gap) && void 0 !== o ? o : 16), [!!t, a]), 2),
			$ = O[0],
			P = O[1],
			j = P.offset,
			_ = P.threshold,
			R = P.gap,
			M = $ && (S.length > 0 || E.length <= _),
			F = "function" == typeof d ? d(l) : d;
		return v.useEffect((function () {
			$ && S.length > 1 && C((function (e) {
				return e.filter((function (e) {
					return E.some((function (t) {
						var n = t.key;
						return e === n
					}))
				}))
			}))
		}), [S, E, $]), v.useEffect((function () {
			var e, t;
			$ && g.current[null === (e = E[E.length - 1]) || void 0 === e ? void 0 : e.key] && k(g.current[null === (t = E[E.length - 1]) || void 0 === t ? void 0 : t.key])
		}), [E, $]), y.createElement(Ms, $n({
			key: l,
			className: On(s, "".concat(s, "-").concat(l), null == m ? void 0 : m.list, c, Dn(Dn({}, "".concat(s, "-stack"), !!$), "".concat(s, "-stack-expanded"), M)),
			style: u,
			keys: E,
			motionAppear: !0
		}, F, {
			onAllRemoved: function () {
				f(l)
			}
		}), (function (e, t) {
			var n = e.config,
				r = e.className,
				o = e.style,
				a = e.index,
				i = n,
				c = i.key,
				u = i.times,
				d = String(c),
				f = n,
				h = f.className,
				v = f.style,
				b = f.classNames,
				k = f.styles,
				x = Ur(f, Bc),
				O = E.findIndex((function (e) {
					return e.key === d
				})),
				P = {};
			if ($) {
				var _ = E.length - 1 - (O > -1 ? O : a - 1),
					F = "top" === l || "bottom" === l ? "-50%" : "0";
				if (_ > 0) {
					var N, T, I;
					P.height = M ? null === (N = g.current[d]) || void 0 === N ? void 0 : N.offsetHeight : null == w ? void 0 : w.offsetHeight;
					for (var L = 0, z = 0; z < _; z++) {
						var A;
						L += (null === (A = g.current[E[E.length - 1 - z].key]) || void 0 === A ? void 0 : A.offsetHeight) + R
					}
					var D = (M ? L : _ * j) * (l.startsWith("top") ? 1 : -1),
						H = !M && null != w && w.offsetWidth && null !== (T = g.current[d]) && void 0 !== T && T.offsetWidth ? ((null == w ? void 0 : w.offsetWidth) - 2 * j * (_ < 3 ? _ : 3)) / (null === (I = g.current[d]) || void 0 === I ? void 0 : I.offsetWidth) : 1;
					P.transform = "translate3d(".concat(F, ", ").concat(D, "px, 0) scaleX(").concat(H, ")")
				} else P.transform = "translate3d(".concat(F, ", 0, 0)")
			}
			return y.createElement("div", {
				ref: t,
				className: On("".concat(s, "-notice-wrapper"), r, null == b ? void 0 : b.wrapper),
				style: Bn(Bn(Bn({}, o), P), null == k ? void 0 : k.wrapper),
				onMouseEnter: function () {
					return C((function (e) {
						return e.includes(d) ? e : [].concat(br(e), [d])
					}))
				},
				onMouseLeave: function () {
					return C((function (e) {
						return e.filter((function (e) {
							return e !== d
						}))
					}))
				}
			}, y.createElement(Ac, $n({}, x, {
				ref: function (e) {
					O > -1 ? g.current[d] = e : delete g.current[d]
				},
				prefixCls: s,
				classNames: b,
				styles: k,
				className: On(h, null == m ? void 0 : m.notice),
				style: v,
				times: u,
				key: c,
				eventKey: c,
				onNoticeClose: p,
				hovering: $ && S.length > 0
			})))
		}))
	},
	Vc = v.forwardRef((function (e, t) {
		var n = e.prefixCls,
			r = void 0 === n ? "rc-notification" : n,
			o = e.container,
			a = e.motion,
			i = e.maxCount,
			l = e.className,
			s = e.style,
			c = e.onAllRemoved,
			u = e.stack,
			d = e.renderNotifications,
			f = Pr(v.useState([]), 2),
			p = f[0],
			h = f[1],
			m = function (e) {
				var t, n = p.find((function (t) {
					return t.key === e
				}));
				null == n || null === (t = n.onClose) || void 0 === t || t.call(n), h((function (t) {
					return t.filter((function (t) {
						return t.key !== e
					}))
				}))
			};
		v.useImperativeHandle(t, (function () {
			return {
				open: function (e) {
					h((function (t) {
						var n, r = br(t),
							o = r.findIndex((function (t) {
								return t.key === e.key
							})),
							a = Bn({}, e);
						o >= 0 ? (a.times = ((null === (n = t[o]) || void 0 === n ? void 0 : n.times) || 0) + 1, r[o] = a) : (a.times = 0, r.push(a));
						return i > 0 && r.length > i && (r = r.slice(-i)), r
					}))
				},
				close: function (e) {
					m(e)
				},
				destroy: function () {
					h([])
				}
			}
		}));
		var g = Pr(v.useState({}), 2),
			y = g[0],
			b = g[1];
		v.useEffect((function () {
			var e = {};
			p.forEach((function (t) {
				var n = t.placement,
					r = void 0 === n ? "topRight" : n;
				r && (e[r] = e[r] || [], e[r].push(t))
			})), Object.keys(y).forEach((function (t) {
				e[t] = e[t] || []
			})), b(e)
		}), [p]);
		var w = function (e) {
				b((function (t) {
					var n = Bn({}, t);
					return (n[e] || []).length || delete n[e], n
				}))
			},
			k = v.useRef(!1);
		if (v.useEffect((function () {
				Object.keys(y).length > 0 ? k.current = !0 : k.current && (null == c || c(), k.current = !1)
			}), [y]), !o) return null;
		var x = Object.keys(y);
		return T.createPortal(v.createElement(v.Fragment, null, x.map((function (e) {
			var t = y[e],
				n = v.createElement(Uc, {
					key: e,
					configList: t,
					placement: e,
					prefixCls: r,
					className: null == l ? void 0 : l(e),
					style: null == s ? void 0 : s(e),
					motion: a,
					onNoticeClose: m,
					onAllNoticeRemoved: w,
					stack: u
				});
			return d ? d(n, {
				prefixCls: r,
				key: e
			}) : n
		}))), o)
	})),
	Wc = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"],
	qc = function () {
		return document.body
	},
	Gc = 0;

function Xc() {
	var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
		t = e.getContainer,
		n = void 0 === t ? qc : t,
		r = e.motion,
		o = e.prefixCls,
		a = e.maxCount,
		i = e.className,
		l = e.style,
		s = e.onAllRemoved,
		c = e.stack,
		u = e.renderNotifications,
		d = Ur(e, Wc),
		f = Pr(v.useState(), 2),
		p = f[0],
		h = f[1],
		m = v.useRef(),
		g = v.createElement(Vc, {
			container: p,
			ref: m,
			prefixCls: o,
			motion: r,
			maxCount: a,
			className: i,
			style: l,
			onAllRemoved: s,
			stack: c,
			renderNotifications: u
		}),
		y = Pr(v.useState([]), 2),
		b = y[0],
		w = y[1],
		k = rl((function (e) {
			var t = function () {
				for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return n.forEach((function (t) {
					t && Object.keys(t).forEach((function (n) {
						var r = t[n];
						void 0 !== r && (e[n] = r)
					}))
				})), e
			}(d, e);
			null !== t.key && void 0 !== t.key || (t.key = "rc-notification-".concat(Gc), Gc += 1), w((function (e) {
				return [].concat(br(e), [{
					type: "open",
					config: t
				}])
			}))
		})),
		x = v.useMemo((function () {
			return {
				open: k,
				close: function (e) {
					w((function (t) {
						return [].concat(br(t), [{
							type: "close",
							key: e
						}])
					}))
				},
				destroy: function () {
					w((function (e) {
						return [].concat(br(e), [{
							type: "destroy"
						}])
					}))
				}
			}
		}), []);
	return v.useEffect((function () {
		h(n())
	})), v.useEffect((function () {
		var e, t;
		m.current && b.length && (b.forEach((function (e) {
			switch (e.type) {
				case "open":
					m.current.open(e.config);
					break;
				case "close":
					m.current.close(e.key);
					break;
				case "destroy":
					m.current.destroy()
			}
		})), w((function (n) {
			return e === n && t || (e = n, t = n.filter((function (e) {
				return !b.includes(e)
			}))), t
		})))
	}), [b]), [x, g]
}
var Kc = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "0 0 1024 1024",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
				}
			}]
		},
		name: "loading",
		theme: "outlined"
	},
	Qc = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: Kc
		}))
	},
	Yc = v.forwardRef(Qc);
const Zc = y.createContext(void 0),
	Jc = 100,
	eu = 1e3,
	tu = {
		Modal: Jc,
		Drawer: Jc,
		Popover: Jc,
		Popconfirm: Jc,
		Tooltip: Jc,
		Tour: Jc,
		FloatButton: Jc
	},
	nu = {
		SelectLike: 50,
		Dropdown: 50,
		DatePicker: 50,
		Menu: 50,
		ImagePreview: 1
	};
const ru = (e, t) => {
		const [, n] = El(), r = y.useContext(Zc), o = e in tu;
		let a;
		if (void 0 !== t) a = [t, t];
		else {
			let i = null != r ? r : 0;
			i += o ? (r ? 0 : n.zIndexPopupBase) + tu[e] : nu[e], a = [void 0 === r ? t : i, i]
		}
		return a
	},
	ou = e => {
		const {
			componentCls: t,
			iconCls: n,
			boxShadow: r,
			colorText: o,
			colorSuccess: a,
			colorError: i,
			colorWarning: l,
			colorInfo: s,
			fontSizeLG: c,
			motionEaseInOutCirc: u,
			motionDurationSlow: d,
			marginXS: f,
			paddingXS: p,
			borderRadiusLG: h,
			zIndexPopup: m,
			contentPadding: g,
			contentBg: v
		} = e, y = `${t}-notice`, b = new Ea("MessageMoveIn", {
			"0%": {
				padding: 0,
				transform: "translateY(-100%)",
				opacity: 0
			},
			"100%": {
				padding: p,
				transform: "translateY(0)",
				opacity: 1
			}
		}), w = new Ea("MessageMoveOut", {
			"0%": {
				maxHeight: e.height,
				padding: p,
				opacity: 1
			},
			"100%": {
				maxHeight: 0,
				padding: 0,
				opacity: 0
			}
		}), k = {
			padding: p,
			textAlign: "center",
			[`${t}-custom-content`]: {
				display: "flex",
				alignItems: "center"
			},
			[`${t}-custom-content > ${n}`]: {
				marginInlineEnd: f,
				fontSize: c
			},
			[`${y}-content`]: {
				display: "inline-block",
				padding: g,
				background: v,
				borderRadius: h,
				boxShadow: r,
				pointerEvents: "all"
			},
			[`${t}-success > ${n}`]: {
				color: a
			},
			[`${t}-error > ${n}`]: {
				color: i
			},
			[`${t}-warning > ${n}`]: {
				color: l
			},
			[`${t}-info > ${n},\n      ${t}-loading > ${n}`]: {
				color: s
			}
		};
		return [{
			[t]: Object.assign(Object.assign({}, $l(e)), {
				color: o,
				position: "fixed",
				top: f,
				width: "100%",
				pointerEvents: "none",
				zIndex: m,
				[`${t}-move-up`]: {
					animationFillMode: "forwards"
				},
				[`\n        ${t}-move-up-appear,\n        ${t}-move-up-enter\n      `]: {
					animationName: b,
					animationDuration: d,
					animationPlayState: "paused",
					animationTimingFunction: u
				},
				[`\n        ${t}-move-up-appear${t}-move-up-appear-active,\n        ${t}-move-up-enter${t}-move-up-enter-active\n      `]: {
					animationPlayState: "running"
				},
				[`${t}-move-up-leave`]: {
					animationName: w,
					animationDuration: d,
					animationPlayState: "paused",
					animationTimingFunction: u
				},
				[`${t}-move-up-leave${t}-move-up-leave-active`]: {
					animationPlayState: "running"
				},
				"&-rtl": {
					direction: "rtl",
					span: {
						direction: "rtl"
					}
				}
			})
		}, {
			[t]: {
				[`${y}-wrapper`]: Object.assign({}, k)
			}
		}, {
			[`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, k), {
				padding: 0,
				textAlign: "start"
			})
		}]
	},
	au = Nl("Message", (e => {
		const t = ul(e, {
			height: 150
		});
		return [ou(t)]
	}), (e => ({
		zIndexPopup: e.zIndexPopupBase + eu + 10,
		contentBg: e.colorBgElevated,
		contentPadding: `${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`
	})));
const iu = {
		info: v.createElement(bc, null),
		success: v.createElement(lc, null),
		error: v.createElement(uc, null),
		warning: v.createElement(gc, null),
		loading: v.createElement(Yc, null)
	},
	lu = ({
		prefixCls: e,
		type: t,
		icon: n,
		children: r
	}) => v.createElement("div", {
		className: On(`${e}-custom-content`, `${e}-${t}`)
	}, n || iu[t], v.createElement("span", null, r)),
	su = e => {
		const {
			prefixCls: t,
			className: n,
			type: r,
			icon: o,
			content: a
		} = e, i = function (e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
			}
			return n
		}(e, ["prefixCls", "className", "type", "icon", "content"]), {
			getPrefixCls: l
		} = v.useContext(Di), s = t || l("message"), c = Lc(s), [u, d, f] = au(s, c);
		return u(v.createElement(Ac, Object.assign({}, i, {
			prefixCls: s,
			className: On(n, d, `${s}-notice-pure-panel`, f, c),
			eventKey: "pure",
			duration: null,
			content: v.createElement(lu, {
				prefixCls: s,
				type: r,
				icon: o
			}, a)
		})))
	};

function cu(e) {
	let t;
	const n = new Promise((n => {
			t = e((() => {
				n(!0)
			}))
		})),
		r = () => {
			null == t || t()
		};
	return r.then = (e, t) => n.then(e, t), r.promise = n, r
}
const uu = 3,
	du = ({
		children: e,
		prefixCls: t
	}) => {
		const n = Lc(t),
			[r, o, a] = au(t, n);
		return r(v.createElement(Hc, {
			classNames: {
				list: On(o, a, n)
			}
		}, e))
	},
	fu = (e, {
		prefixCls: t,
		key: n
	}) => v.createElement(du, {
		prefixCls: t,
		key: n
	}, e),
	pu = v.forwardRef(((e, t) => {
		const {
			top: n,
			prefixCls: r,
			getContainer: o,
			maxCount: a,
			duration: i = uu,
			rtl: l,
			transitionName: s,
			onAllRemoved: c
		} = e, {
			getPrefixCls: u,
			getPopupContainer: d,
			message: f,
			direction: p
		} = v.useContext(Di), h = r || u("message"), m = v.createElement("span", {
			className: `${h}-close-x`
		}, v.createElement(pc, {
			className: `${h}-close-icon`
		})), [g, y] = Xc({
			prefixCls: h,
			style: () => ({
				left: "50%",
				transform: "translateX(-50%)",
				top: null != n ? n : 8
			}),
			className: () => On({
				[`${h}-rtl`]: null != l ? l : "rtl" === p
			}),
			motion: () => function (e, t) {
				return {
					motionName: null != t ? t : `${e}-move-up`
				}
			}(h, s),
			closable: !1,
			closeIcon: m,
			duration: i,
			getContainer: () => (null == o ? void 0 : o()) || (null == d ? void 0 : d()) || document.body,
			maxCount: a,
			onAllRemoved: c,
			renderNotifications: fu
		});
		return v.useImperativeHandle(t, (() => Object.assign(Object.assign({}, g), {
			prefixCls: h,
			message: f
		}))), y
	}));
let hu = 0;

function mu(e) {
	const t = v.useRef(null);
	La();
	return [v.useMemo((() => {
		const e = e => {
				var n;
				null === (n = t.current) || void 0 === n || n.close(e)
			},
			n = n => {
				if (!t.current) {
					const e = () => {};
					return e.then = () => {}, e
				}
				const {
					open: r,
					prefixCls: o,
					message: a
				} = t.current, i = `${o}-notice`, {
					content: l,
					icon: s,
					type: c,
					key: u,
					className: d,
					style: f,
					onClose: p
				} = n, h = function (e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
					}
					return n
				}(n, ["content", "icon", "type", "key", "className", "style", "onClose"]);
				let m = u;
				return null == m && (hu += 1, m = `antd-message-${hu}`), cu((t => (r(Object.assign(Object.assign({}, h), {
					key: m,
					content: v.createElement(lu, {
						prefixCls: o,
						type: c,
						icon: s
					}, l),
					placement: "top",
					className: On(c && `${i}-${c}`, d, null == a ? void 0 : a.className),
					style: Object.assign(Object.assign({}, null == a ? void 0 : a.style), f),
					onClose: () => {
						null == p || p(), t()
					}
				})), () => {
					e(m)
				})))
			},
			r = {
				open: n,
				destroy: n => {
					var r;
					void 0 !== n ? e(n) : null === (r = t.current) || void 0 === r || r.destroy()
				}
			};
		return ["info", "success", "warning", "error", "loading"].forEach((e => {
			r[e] = (t, r, o) => {
				let a, i, l;
				a = t && "object" == typeof t && "content" in t ? t : {
					content: t
				}, "function" == typeof r ? l = r : (i = r, l = o);
				const s = Object.assign(Object.assign({
					onClose: l,
					duration: i
				}, a), {
					type: e
				});
				return n(s)
			}
		})), r
	}), []), v.createElement(pu, Object.assign({
		key: "message-holder"
	}, e, {
		ref: t
	}))]
}

function gu(e) {
	return mu(e)
}

function vu(e, t) {
	this.v = e, this.k = t
}

function yu(e, t, n, r) {
	var o = Object.defineProperty;
	try {
		o({}, "", {})
	} catch (a) {
		o = 0
	}(yu = function (e, t, n, r) {
		if (t) o ? o(e, t, {
			value: n,
			enumerable: !r,
			configurable: !r,
			writable: !r
		}) : e[t] = n;
		else {
			var a = function (t, n) {
				yu(e, t, (function (e) {
					return this._invoke(t, n, e)
				}))
			};
			a("next", 0), a("throw", 1), a("return", 2)
		}
	})(e, t, n, r)
}

function bu() {
	/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
	var e, t, n = "function" == typeof Symbol ? Symbol : {},
		r = n.iterator || "@@iterator",
		o = n.toStringTag || "@@toStringTag";

	function a(n, r, o, a) {
		var s = r && r.prototype instanceof l ? r : l,
			c = Object.create(s.prototype);
		return yu(c, "_invoke", function (n, r, o) {
			var a, l, s, c = 0,
				u = o || [],
				d = !1,
				f = {
					p: 0,
					n: 0,
					v: e,
					a: p,
					f: p.bind(e, 4),
					d: function (t, n) {
						return a = t, l = 0, s = e, f.n = n, i
					}
				};

			function p(n, r) {
				for (l = n, s = r, t = 0; !d && c && !o && t < u.length; t++) {
					var o, a = u[t],
						p = f.p,
						h = a[2];
					n > 3 ? (o = h === r) && (s = a[(l = a[4]) ? 5 : (l = 3, 3)], a[4] = a[5] = e) : a[0] <= p && ((o = n < 2 && p < a[1]) ? (l = 0, f.v = r, f.n = a[1]) : p < h && (o = n < 3 || a[0] > r || r > h) && (a[4] = n, a[5] = r, f.n = h, l = 0))
				}
				if (o || n > 1) return i;
				throw d = !0, r
			}
			return function (o, u, h) {
				if (c > 1) throw TypeError("Generator is already running");
				for (d && 1 === u && p(u, h), l = u, s = h;
					(t = l < 2 ? e : s) || !d;) {
					a || (l ? l < 3 ? (l > 1 && (f.n = -1), p(l, s)) : f.n = s : f.v = s);
					try {
						if (c = 2, a) {
							if (l || (o = "next"), t = a[o]) {
								if (!(t = t.call(a, s))) throw TypeError("iterator result is not an object");
								if (!t.done) return t;
								s = t.value, l < 2 && (l = 0)
							} else 1 === l && (t = a.return) && t.call(a), l < 2 && (s = TypeError("The iterator does not provide a '" + o + "' method"), l = 1);
							a = e
						} else if ((t = (d = f.n < 0) ? s : n.call(r, f)) !== i) break
					} catch (m) {
						a = e, l = 1, s = m
					} finally {
						c = 1
					}
				}
				return {
					value: t,
					done: d
				}
			}
		}(n, o, a), !0), c
	}
	var i = {};

	function l() {}

	function s() {}

	function c() {}
	t = Object.getPrototypeOf;
	var u = [][r] ? t(t([][r]())) : (yu(t = {}, r, (function () {
			return this
		})), t),
		d = c.prototype = l.prototype = Object.create(u);

	function f(e) {
		return Object.setPrototypeOf ? Object.setPrototypeOf(e, c) : (e.__proto__ = c, yu(e, o, "GeneratorFunction")), e.prototype = Object.create(d), e
	}
	return s.prototype = c, yu(d, "constructor", c), yu(c, "constructor", s), s.displayName = "GeneratorFunction", yu(c, o, "GeneratorFunction"), yu(d), yu(d, o, "Generator"), yu(d, r, (function () {
		return this
	})), yu(d, "toString", (function () {
		return "[object Generator]"
	})), (bu = function () {
		return {
			w: a,
			m: f
		}
	})()
}

function wu(e, t) {
	function n(r, o, a, i) {
		try {
			var l = e[r](o),
				s = l.value;
			return s instanceof vu ? t.resolve(s.v).then((function (e) {
				n("next", e, a, i)
			}), (function (e) {
				n("throw", e, a, i)
			})) : t.resolve(s).then((function (e) {
				l.value = e, a(l)
			}), (function (e) {
				return n("throw", e, a, i)
			}))
		} catch (c) {
			i(c)
		}
	}
	var r;
	this.next || (yu(wu.prototype), yu(wu.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", (function () {
		return this
	}))), yu(this, "_invoke", (function (e, o, a) {
		function i() {
			return new t((function (t, r) {
				n(e, a, t, r)
			}))
		}
		return r = r ? r.then(i, i) : i()
	}), !0)
}

function ku(e, t, n, r, o) {
	return new wu(bu().w(e, t, n, r), o || Promise)
}

function xu(e, t, n, r, o) {
	var a = ku(e, t, n, r, o);
	return a.next().then((function (e) {
		return e.done ? e.value : a.next()
	}))
}

function Su(e) {
	var t = Object(e),
		n = [];
	for (var r in t) n.unshift(r);
	return function e() {
		for (; n.length;)
			if ((r = n.pop()) in t) return e.value = r, e.done = !1, e;
		return e.done = !0, e
	}
}

function Cu(e) {
	if (null != e) {
		var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
			n = 0;
		if (t) return t.call(e);
		if ("function" == typeof e.next) return e;
		if (!isNaN(e.length)) return {
			next: function () {
				return e && n >= e.length && (e = void 0), {
					value: e && e[n++],
					done: !e
				}
			}
		}
	}
	throw new TypeError(Pn(e) + " is not iterable")
}

function Eu() {
	var e = bu(),
		t = e.m(Eu),
		n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;

	function r(e) {
		var t = "function" == typeof e && e.constructor;
		return !!t && (t === n || "GeneratorFunction" === (t.displayName || t.name))
	}
	var o = {
		throw: 1,
		return: 2,
		break: 3,
		continue: 3
	};

	function a(e) {
		var t, n;
		return function (r) {
			t || (t = {
				stop: function () {
					return n(r.a, 2)
				},
				catch: function () {
					return r.v
				},
				abrupt: function (e, t) {
					return n(r.a, o[e], t)
				},
				delegateYield: function (e, o, a) {
					return t.resultName = o, n(r.d, Cu(e), a)
				},
				finish: function (e) {
					return n(r.f, e)
				}
			}, n = function (e, n, o) {
				r.p = t.prev, r.n = t.next;
				try {
					return e(n, o)
				} finally {
					t.next = r.n
				}
			}), t.resultName && (t[t.resultName] = r.v, t.resultName = void 0), t.sent = r.v, t.next = r.n;
			try {
				return e.call(this, t)
			} finally {
				r.p = t.prev, r.n = t.next
			}
		}
	}
	return (Eu = function () {
		return {
			wrap: function (t, n, r, o) {
				return e.w(a(t), n, r, o && o.reverse())
			},
			isGeneratorFunction: r,
			mark: e.m,
			awrap: function (e, t) {
				return new vu(e, t)
			},
			AsyncIterator: wu,
			async: function (e, t, n, o, i) {
				return (r(t) ? ku : xu)(a(e), t, n, o, i)
			},
			keys: Su,
			values: Cu
		}
	})()
}

function Ou(e, t, n, r, o, a, i) {
	try {
		var l = e[a](i),
			s = l.value
	} catch (c) {
		return void n(c)
	}
	l.done ? t(s) : Promise.resolve(s).then(r, o)
}

function $u(e) {
	return function () {
		var t = this,
			n = arguments;
		return new Promise((function (r, o) {
			var a = e.apply(t, n);

			function i(e) {
				Ou(a, r, o, i, l, "next", e)
			}

			function l(e) {
				Ou(a, r, o, i, l, "throw", e)
			}
			i(void 0)
		}))
	}
}
var Pu, ju = Bn({}, L),
	_u = ju.version,
	Ru = ju.render,
	Mu = ju.unmountComponentAtNode;
try {
	Number((_u || "").split(".")[0]) >= 18 && (Pu = ju.createRoot)
} catch (wS) {}

function Fu(e) {
	var t = ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	t && "object" === Pn(t) && (t.usingClientEntryPoint = e)
}
var Nu = "__rc_react_root__";

function Tu(e, t) {
	Pu ? function (e, t) {
		Fu(!0);
		var n = t[Nu] || Pu(t);
		Fu(!1), n.render(e), t[Nu] = n
	}(e, t) : function (e, t) {
		null == Ru || Ru(e, t)
	}(e, t)
}

function Iu(e) {
	return Lu.apply(this, arguments)
}

function Lu() {
	return (Lu = $u(Eu().mark((function e(t) {
		return Eu().wrap((function (e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.abrupt("return", Promise.resolve().then((function () {
						var e;
						null === (e = t[Nu]) || void 0 === e || e.unmount(), delete t[Nu]
					})));
				case 1:
				case "end":
					return e.stop()
			}
		}), e)
	})))).apply(this, arguments)
}

function zu(e) {
	Mu(e)
}

function Au() {
	return (Au = $u(Eu().mark((function e(t) {
		return Eu().wrap((function (e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (void 0 === Pu) {
						e.next = 2;
						break
					}
					return e.abrupt("return", Iu(t));
				case 2:
					zu(t);
				case 3:
				case "end":
					return e.stop()
			}
		}), e)
	})))).apply(this, arguments)
}
let Du = (e, t) => (Tu(e, t), () => function (e) {
	return Au.apply(this, arguments)
}(t));

function Hu(e) {
	return Du
}
const Bu = () => ({
		height: 0,
		opacity: 0
	}),
	Uu = e => {
		const {
			scrollHeight: t
		} = e;
		return {
			height: t,
			opacity: 1
		}
	},
	Vu = e => ({
		height: e ? e.offsetHeight : 0
	}),
	Wu = (e, t) => !0 === (null == t ? void 0 : t.deadline) || "height" === t.propertyName,
	qu = (e = Li) => ({
		motionName: `${e}-motion-collapse`,
		onAppearStart: Bu,
		onEnterStart: Bu,
		onAppearActive: Uu,
		onEnterActive: Uu,
		onLeaveStart: Vu,
		onLeaveActive: Bu,
		onAppearEnd: Wu,
		onEnterEnd: Wu,
		onLeaveEnd: Wu,
		motionDeadline: 500
	}),
	Gu = (e, t, n) => void 0 !== n ? n : `${e}-${t}`;

function Xu(e, t) {
	var n = Object.assign({}, e);
	return Array.isArray(t) && t.forEach((function (e) {
		delete n[e]
	})), n
}
const Ku = function (e) {
		if (!e) return !1;
		if (e instanceof Element) {
			if (e.offsetParent) return !0;
			if (e.getBBox) {
				var t = e.getBBox(),
					n = t.width,
					r = t.height;
				if (n || r) return !0
			}
			if (e.getBoundingClientRect) {
				var o = e.getBoundingClientRect(),
					a = o.width,
					i = o.height;
				if (a || i) return !0
			}
		}
		return !1
	},
	Qu = e => {
		const {
			componentCls: t,
			colorPrimary: n
		} = e;
		return {
			[t]: {
				position: "absolute",
				background: "transparent",
				pointerEvents: "none",
				boxSizing: "border-box",
				color: `var(--wave-color, ${n})`,
				boxShadow: "0 0 0 0 currentcolor",
				opacity: .2,
				"&.wave-motion-appear": {
					transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
					"&-active": {
						boxShadow: "0 0 0 6px currentcolor",
						opacity: 0
					},
					"&.wave-quick": {
						transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
					}
				}
			}
		}
	},
	Yu = Tl("Wave", (e => [Qu(e)])),
	Zu = `${Li}-wave-target`;

function Ju(e) {
	return e && "#fff" !== e && "#ffffff" !== e && "rgb(255, 255, 255)" !== e && "rgba(255, 255, 255, 1)" !== e && !/rgba\((?:\d*, ){3}0\)/.test(e) && "transparent" !== e
}

function ed(e) {
	return Number.isNaN(e) ? 0 : e
}
const td = e => {
		const {
			className: t,
			target: n,
			component: r,
			registerUnmount: o
		} = e, a = v.useRef(null), i = v.useRef(null);
		v.useEffect((() => {
			i.current = o()
		}), []);
		const [l, s] = v.useState(null), [c, u] = v.useState([]), [d, f] = v.useState(0), [p, h] = v.useState(0), [m, g] = v.useState(0), [y, b] = v.useState(0), [w, k] = v.useState(!1), x = {
			left: d,
			top: p,
			width: m,
			height: y,
			borderRadius: c.map((e => `${e}px`)).join(" ")
		};

		function S() {
			const e = getComputedStyle(n);
			s(function (e) {
				const {
					borderTopColor: t,
					borderColor: n,
					backgroundColor: r
				} = getComputedStyle(e);
				return Ju(t) ? t : Ju(n) ? n : Ju(r) ? r : null
			}(n));
			const t = "static" === e.position,
				{
					borderLeftWidth: r,
					borderTopWidth: o
				} = e;
			f(t ? n.offsetLeft : ed(-parseFloat(r))), h(t ? n.offsetTop : ed(-parseFloat(o))), g(n.offsetWidth), b(n.offsetHeight);
			const {
				borderTopLeftRadius: a,
				borderTopRightRadius: i,
				borderBottomLeftRadius: l,
				borderBottomRightRadius: c
			} = e;
			u([a, i, c, l].map((e => ed(parseFloat(e)))))
		}
		if (l && (x["--wave-color"] = l), v.useEffect((() => {
				if (n) {
					const e = Er((() => {
						S(), k(!0)
					}));
					let t;
					return "undefined" != typeof ResizeObserver && (t = new ResizeObserver(S), t.observe(n)), () => {
						Er.cancel(e), null == t || t.disconnect()
					}
				}
			}), []), !w) return null;
		const C = ("Checkbox" === r || "Radio" === r) && (null == n ? void 0 : n.classList.contains(Zu));
		return v.createElement(xs, {
			visible: !0,
			motionAppear: !0,
			motionName: "wave-motion",
			motionDeadline: 5e3,
			onAppearEnd: (e, t) => {
				var n, r;
				if (t.deadline || "opacity" === t.propertyName) {
					const e = null === (n = a.current) || void 0 === n ? void 0 : n.parentElement;
					null === (r = i.current) || void 0 === r || r.call(i).then((() => {
						null == e || e.remove()
					}))
				}
				return !1
			}
		}, (({
			className: e
		}, n) => v.createElement("div", {
			ref: er(a, n),
			className: On(t, e, {
				"wave-quick": C
			}),
			style: x
		})))
	},
	nd = (e, t) => {
		var n;
		const {
			component: r
		} = t;
		if ("Checkbox" === r && !(null === (n = e.querySelector("input")) || void 0 === n ? void 0 : n.checked)) return;
		const o = document.createElement("div");
		o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", null == e || e.insertBefore(o, null == e ? void 0 : e.firstChild);
		const a = Hu();
		let i = null;
		i = a(v.createElement(td, Object.assign({}, t, {
			target: e,
			registerUnmount: function () {
				return i
			}
		})), o)
	},
	rd = (e, t, n) => {
		const {
			wave: r
		} = v.useContext(Di), [, o, a] = El(), i = rl((i => {
			const l = e.current;
			if ((null == r ? void 0 : r.disabled) || !l) return;
			const s = l.querySelector(`.${Zu}`) || l,
				{
					showEffect: c
				} = r || {};
			(c || nd)(s, {
				className: t,
				token: o,
				component: n,
				event: i,
				hashId: a
			})
		})), l = v.useRef(null);
		return e => {
			Er.cancel(l.current), l.current = Er((() => {
				i(e)
			}))
		}
	},
	od = e => {
		const {
			children: t,
			disabled: n,
			component: r
		} = e, {
			getPrefixCls: o
		} = v.useContext(Di), a = v.useRef(null), i = o("wave"), [, l] = Yu(i), s = rd(a, On(i, l), r);
		if (y.useEffect((() => {
				const e = a.current;
				if (!e || 1 !== e.nodeType || n) return;
				const t = t => {
					!Ku(t.target) || !e.getAttribute || e.getAttribute("disabled") || e.disabled || e.className.includes("disabled") || e.className.includes("-leave") || s(t)
				};
				return e.addEventListener("click", t, !0), () => {
					e.removeEventListener("click", t, !0)
				}
			}), [n]), !y.isValidElement(t)) return null != t ? t : null;
		return Ec(t, {
			ref: nr(t) ? er(ar(t), a) : a
		})
	},
	ad = e => {
		const t = y.useContext(Xi);
		return y.useMemo((() => e ? "string" == typeof e ? null != e ? e : t : "function" == typeof e ? e(t) : t : t), [e, t])
	},
	id = e => {
		const {
			componentCls: t
		} = e;
		return {
			[t]: {
				"&-block": {
					display: "flex",
					width: "100%"
				},
				"&-vertical": {
					flexDirection: "column"
				}
			}
		}
	},
	ld = e => {
		const {
			componentCls: t,
			antCls: n
		} = e;
		return {
			[t]: {
				display: "inline-flex",
				"&-rtl": {
					direction: "rtl"
				},
				"&-vertical": {
					flexDirection: "column"
				},
				"&-align": {
					flexDirection: "column",
					"&-center": {
						alignItems: "center"
					},
					"&-start": {
						alignItems: "flex-start"
					},
					"&-end": {
						alignItems: "flex-end"
					},
					"&-baseline": {
						alignItems: "baseline"
					}
				},
				[`${t}-item:empty`]: {
					display: "none"
				},
				[`${t}-item > ${n}-badge-not-a-wrapper:only-child`]: {
					display: "block"
				}
			}
		}
	},
	sd = e => {
		const {
			componentCls: t
		} = e;
		return {
			[t]: {
				"&-gap-row-small": {
					rowGap: e.spaceGapSmallSize
				},
				"&-gap-row-middle": {
					rowGap: e.spaceGapMiddleSize
				},
				"&-gap-row-large": {
					rowGap: e.spaceGapLargeSize
				},
				"&-gap-col-small": {
					columnGap: e.spaceGapSmallSize
				},
				"&-gap-col-middle": {
					columnGap: e.spaceGapMiddleSize
				},
				"&-gap-col-large": {
					columnGap: e.spaceGapLargeSize
				}
			}
		}
	},
	cd = Nl("Space", (e => {
		const t = ul(e, {
			spaceGapSmallSize: e.paddingXS,
			spaceGapMiddleSize: e.padding,
			spaceGapLargeSize: e.paddingLG
		});
		return [ld(t), sd(t), id(t)]
	}), (() => ({})), {
		resetStyle: !1
	});
var ud = function (e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
	}
	return n
};
const dd = v.createContext(null),
	fd = (e, t) => {
		const n = v.useContext(dd),
			r = v.useMemo((() => {
				if (!n) return "";
				const {
					compactDirection: r,
					isFirstItem: o,
					isLastItem: a
				} = n, i = "vertical" === r ? "-vertical-" : "-";
				return On(`${e}-compact${i}item`, {
					[`${e}-compact${i}first-item`]: o,
					[`${e}-compact${i}last-item`]: a,
					[`${e}-compact${i}item-rtl`]: "rtl" === t
				})
			}), [e, t, n]);
		return {
			compactSize: null == n ? void 0 : n.compactSize,
			compactDirection: null == n ? void 0 : n.compactDirection,
			compactItemClassnames: r
		}
	},
	pd = e => {
		const {
			children: t
		} = e;
		return v.createElement(dd.Provider, {
			value: null
		}, t)
	},
	hd = e => {
		const {
			children: t
		} = e, n = ud(e, ["children"]);
		return v.createElement(dd.Provider, {
			value: v.useMemo((() => n), [n])
		}, t)
	},
	md = e => {
		const {
			getPrefixCls: t,
			direction: n
		} = v.useContext(Di), {
			size: r,
			direction: o,
			block: a,
			prefixCls: i,
			className: l,
			rootClassName: s,
			children: c
		} = e, u = ud(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = ad((e => null != r ? r : e)), f = t("space-compact", i), [p, h] = cd(f), m = On(f, h, {
			[`${f}-rtl`]: "rtl" === n,
			[`${f}-block`]: a,
			[`${f}-vertical`]: "vertical" === o
		}, l, s), g = v.useContext(dd), y = Fn(c), b = v.useMemo((() => y.map(((e, t) => {
			const n = (null == e ? void 0 : e.key) || `${f}-item-${t}`;
			return v.createElement(hd, {
				key: n,
				compactSize: d,
				compactDirection: o,
				isFirstItem: 0 === t && (!g || (null == g ? void 0 : g.isFirstItem)),
				isLastItem: t === y.length - 1 && (!g || (null == g ? void 0 : g.isLastItem))
			}, e)
		}))), [r, y, g]);
		return 0 === y.length ? null : p(v.createElement("div", Object.assign({
			className: m
		}, u), b))
	};
const gd = v.createContext(void 0),
	vd = /^[\u4E00-\u9FA5]{2}$/,
	yd = vd.test.bind(vd);

function bd(e) {
	return "danger" === e ? {
		danger: !0
	} : {
		type: e
	}
}

function wd(e) {
	return "string" == typeof e
}

function kd(e) {
	return "text" === e || "link" === e
}

function xd(e, t) {
	let n = !1;
	const r = [];
	return y.Children.forEach(e, (e => {
		const t = typeof e,
			o = "string" === t || "number" === t;
		if (n && o) {
			const t = r.length - 1,
				n = r[t];
			r[t] = `${n}${e}`
		} else r.push(e);
		n = o
	})), y.Children.map(r, (e => function (e, t) {
		if (null == e) return;
		const n = t ? " " : "";
		return "string" != typeof e && "number" != typeof e && wd(e.type) && yd(e.props.children) ? Ec(e, {
			children: e.props.children.split("").join(n)
		}) : wd(e) ? yd(e) ? y.createElement("span", null, e.split("").join(n)) : y.createElement("span", null, e) : Sc(e) ? y.createElement("span", null, e) : e
	}(e, t)))
} ["default", "primary", "danger"].concat(br(gl));
const Sd = v.forwardRef(((e, t) => {
		const {
			className: n,
			style: r,
			children: o,
			prefixCls: a
		} = e, i = On(`${a}-icon`, n);
		return y.createElement("span", {
			ref: t,
			className: i,
			style: r
		}, o)
	})),
	Cd = v.forwardRef(((e, t) => {
		const {
			prefixCls: n,
			className: r,
			style: o,
			iconClassName: a
		} = e, i = On(`${n}-loading-icon`, r);
		return y.createElement(Sd, {
			prefixCls: n,
			className: i,
			style: o,
			ref: t
		}, y.createElement(Yc, {
			className: a
		}))
	})),
	Ed = () => ({
		width: 0,
		opacity: 0,
		transform: "scale(0)"
	}),
	Od = e => ({
		width: e.scrollWidth,
		opacity: 1,
		transform: "scale(1)"
	}),
	$d = e => {
		const {
			prefixCls: t,
			loading: n,
			existIcon: r,
			className: o,
			style: a,
			mount: i
		} = e, l = !!n;
		return r ? y.createElement(Cd, {
			prefixCls: t,
			className: o,
			style: a
		}) : y.createElement(xs, {
			visible: l,
			motionName: `${t}-loading-icon-motion`,
			motionAppear: !i,
			motionEnter: !i,
			motionLeave: !i,
			removeOnLeave: !0,
			onAppearStart: Ed,
			onAppearActive: Od,
			onEnterStart: Ed,
			onEnterActive: Od,
			onLeaveStart: Od,
			onLeaveActive: Ed
		}, (({
			className: e,
			style: n
		}, r) => {
			const i = Object.assign(Object.assign({}, a), n);
			return y.createElement(Cd, {
				prefixCls: t,
				className: On(o, e),
				style: i,
				ref: r
			})
		}))
	},
	Pd = (e, t) => ({
		[`> span, > ${e}`]: {
			"&:not(:last-child)": {
				[`&, & > ${e}`]: {
					"&:not(:disabled)": {
						borderInlineEndColor: t
					}
				}
			},
			"&:not(:first-child)": {
				[`&, & > ${e}`]: {
					"&:not(:disabled)": {
						borderInlineStartColor: t
					}
				}
			}
		}
	}),
	jd = e => {
		const {
			componentCls: t,
			fontSize: n,
			lineWidth: r,
			groupBorderColor: o,
			colorErrorHover: a
		} = e;
		return {
			[`${t}-group`]: [{
				position: "relative",
				display: "inline-flex",
				[`> span, > ${t}`]: {
					"&:not(:last-child)": {
						[`&, & > ${t}`]: {
							borderStartEndRadius: 0,
							borderEndEndRadius: 0
						}
					},
					"&:not(:first-child)": {
						marginInlineStart: e.calc(r).mul(-1).equal(),
						[`&, & > ${t}`]: {
							borderStartStartRadius: 0,
							borderEndStartRadius: 0
						}
					}
				},
				[t]: {
					position: "relative",
					zIndex: 1,
					"&:hover, &:focus, &:active": {
						zIndex: 2
					},
					"&[disabled]": {
						zIndex: 0
					}
				},
				[`${t}-icon-only`]: {
					fontSize: n
				}
			}, Pd(`${t}-primary`, o), Pd(`${t}-danger`, a)]
		}
	};
var _d = ["b"],
	Rd = ["v"],
	Md = function (e) {
		return Math.round(Number(e || 0))
	},
	Fd = function () {
		ur(t, oi);
		var e = mr(t);

		function t(n) {
			return ir(this, t), e.call(this, function (e) {
				if (e instanceof oi) return e;
				if (e && "object" === Pn(e) && "h" in e && "b" in e) {
					var t = e,
						n = t.b;
					return Bn(Bn({}, Ur(t, _d)), {}, {
						v: n
					})
				}
				return "string" == typeof e && /hsb/.test(e) ? e.replace(/hsb/, "hsv") : e
			}(n))
		}
		return sr(t, [{
			key: "toHsbString",
			value: function () {
				var e = this.toHsb(),
					t = Md(100 * e.s),
					n = Md(100 * e.b),
					r = Md(e.h),
					o = e.a,
					a = "hsb(".concat(r, ", ").concat(t, "%, ").concat(n, "%)"),
					i = "hsba(".concat(r, ", ").concat(t, "%, ").concat(n, "%, ").concat(o.toFixed(0 === o ? 0 : 2), ")");
				return 1 === o ? a : i
			}
		}, {
			key: "toHsb",
			value: function () {
				var e = this.toHsv(),
					t = e.v;
				return Bn(Bn({}, Ur(e, Rd)), {}, {
					b: t,
					a: this.a
				})
			}
		}]), t
	}(),
	Nd = "rc-color-picker",
	Td = function (e) {
		return e instanceof Fd ? e : new Fd(e)
	},
	Id = Td("#1677ff"),
	Ld = function (e) {
		var t = e.offset,
			n = e.targetRef,
			r = e.containerRef,
			o = e.color,
			a = e.type,
			i = r.current.getBoundingClientRect(),
			l = i.width,
			s = i.height,
			c = n.current.getBoundingClientRect(),
			u = c.width / 2,
			d = c.height / 2,
			f = (t.x + u) / l,
			p = 1 - (t.y + d) / s,
			h = o.toHsb(),
			m = f,
			g = (t.x + u) / l * 360;
		if (a) switch (a) {
			case "hue":
				return Td(Bn(Bn({}, h), {}, {
					h: g <= 0 ? 0 : g
				}));
			case "alpha":
				return Td(Bn(Bn({}, h), {}, {
					a: m <= 0 ? 0 : m
				}))
		}
		return Td({
			h: h.h,
			s: f <= 0 ? 0 : f,
			b: p >= 1 ? 1 : p,
			a: h.a
		})
	},
	zd = function (e, t) {
		var n = e.toHsb();
		switch (t) {
			case "hue":
				return {
					x: n.h / 360 * 100, y: 50
				};
			case "alpha":
				return {
					x: 100 * e.a, y: 50
				};
			default:
				return {
					x: 100 * n.s, y: 100 * (1 - n.b)
				}
		}
	},
	Ad = function (e) {
		var t = e.color,
			n = e.prefixCls,
			r = e.className,
			o = e.style,
			a = e.onClick,
			i = "".concat(n, "-color-block");
		return y.createElement("div", {
			className: On(i, r),
			style: o,
			onClick: a
		}, y.createElement("div", {
			className: "".concat(i, "-inner"),
			style: {
				background: t
			}
		}))
	};
const Dd = (e, t) => (null == e ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "";
let Hd = function () {
	return sr((function e(t) {
		var n;
		if (ir(this, e), this.cleared = !1, t instanceof e) return this.metaColor = t.metaColor.clone(), this.colors = null === (n = t.colors) || void 0 === n ? void 0 : n.map((t => ({
			color: new e(t.color),
			percent: t.percent
		}))), void(this.cleared = t.cleared);
		const r = Array.isArray(t);
		r && t.length ? (this.colors = t.map((({
			color: t,
			percent: n
		}) => ({
			color: new e(t),
			percent: n
		}))), this.metaColor = new Fd(this.colors[0].color.metaColor)) : this.metaColor = new Fd(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0)
	}), [{
		key: "toHsb",
		value: function () {
			return this.metaColor.toHsb()
		}
	}, {
		key: "toHsbString",
		value: function () {
			return this.metaColor.toHsbString()
		}
	}, {
		key: "toHex",
		value: function () {
			return e = this.toHexString(), t = this.metaColor.a < 1, e ? Dd(e, t) : "";
			var e, t
		}
	}, {
		key: "toHexString",
		value: function () {
			return this.metaColor.toHexString()
		}
	}, {
		key: "toRgb",
		value: function () {
			return this.metaColor.toRgb()
		}
	}, {
		key: "toRgbString",
		value: function () {
			return this.metaColor.toRgbString()
		}
	}, {
		key: "isGradient",
		value: function () {
			return !!this.colors && !this.cleared
		}
	}, {
		key: "getColors",
		value: function () {
			return this.colors || [{
				color: this,
				percent: 0
			}]
		}
	}, {
		key: "toCssString",
		value: function () {
			const {
				colors: e
			} = this;
			if (e) {
				return `linear-gradient(90deg, ${e.map((e=>`${e.color.toRgbString()} ${e.percent}%`)).join(", ")})`
			}
			return this.metaColor.toRgbString()
		}
	}, {
		key: "equals",
		value: function (e) {
			return !(!e || this.isGradient() !== e.isGradient()) && (this.isGradient() ? this.colors.length === e.colors.length && this.colors.every(((t, n) => {
				const r = e.colors[n];
				return t.percent === r.percent && t.color.equals(r.color)
			})) : this.toHexString() === e.toHexString())
		}
	}])
}();
var Bd = {
		icon: {
			tag: "svg",
			attrs: {
				viewBox: "64 64 896 896",
				focusable: "false"
			},
			children: [{
				tag: "path",
				attrs: {
					d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
				}
			}]
		},
		name: "right",
		theme: "outlined"
	},
	Ud = function (e, t) {
		return v.createElement(ac, $n({}, e, {
			ref: t,
			icon: Bd
		}))
	},
	Vd = v.forwardRef(Ud),
	Wd = y.forwardRef((function (e, t) {
		var n = e.prefixCls,
			r = e.forceRender,
			o = e.className,
			a = e.style,
			i = e.children,
			l = e.isActive,
			s = e.role,
			c = e.classNames,
			u = e.styles,
			d = Pr(y.useState(l || r), 2),
			f = d[0],
			p = d[1];
		return y.useEffect((function () {
			(r || l) && p(!0)
		}), [r, l]), f ? y.createElement("div", {
			ref: t,
			className: On("".concat(n, "-content"), Dn(Dn({}, "".concat(n, "-content-active"), l), "".concat(n, "-content-inactive"), !l), o),
			style: a,
			role: s
		}, y.createElement("div", {
			className: On("".concat(n, "-content-box"), null == c ? void 0 : c.body),
			style: null == u ? void 0 : u.body
		}, i)) : null
	}));
Wd.displayName = "PanelContent";
var qd = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"],
	Gd = y.forwardRef((function (e, t) {
		var n = e.showArrow,
			r = void 0 === n || n,
			o = e.headerClass,
			a = e.isActive,
			i = e.onItemClick,
			l = e.forceRender,
			s = e.className,
			c = e.classNames,
			u = void 0 === c ? {} : c,
			d = e.styles,
			f = void 0 === d ? {} : d,
			p = e.prefixCls,
			h = e.collapsible,
			m = e.accordion,
			g = e.panelKey,
			v = e.extra,
			b = e.header,
			w = e.expandIcon,
			k = e.openMotion,
			x = e.destroyInactivePanel,
			S = e.children,
			C = Ur(e, qd),
			E = "disabled" === h,
			O = null != v && "boolean" != typeof v,
			$ = Dn(Dn(Dn({
				onClick: function () {
					null == i || i(g)
				},
				onKeyDown: function (e) {
					"Enter" !== e.key && e.keyCode !== zc.ENTER && e.which !== zc.ENTER || null == i || i(g)
				},
				role: m ? "tab" : "button"
			}, "aria-expanded", a), "aria-disabled", E), "tabIndex", E ? -1 : 0),
			P = "function" == typeof w ? w(e) : y.createElement("i", {
				className: "arrow"
			}),
			j = P && y.createElement("div", $n({
				className: "".concat(p, "-expand-icon")
			}, ["header", "icon"].includes(h) ? $ : {}), P),
			_ = On("".concat(p, "-item"), Dn(Dn({}, "".concat(p, "-item-active"), a), "".concat(p, "-item-disabled"), E), s),
			R = Bn({
				className: On(o, "".concat(p, "-header"), Dn({}, "".concat(p, "-collapsible-").concat(h), !!h), u.header),
				style: f.header
			}, ["header", "icon"].includes(h) ? {} : $);
		return y.createElement("div", $n({}, C, {
			ref: t,
			className: _
		}), y.createElement("div", R, r && j, y.createElement("span", $n({
			className: "".concat(p, "-header-text")
		}, "header" === h ? $ : {}), b), O && y.createElement("div", {
			className: "".concat(p, "-extra")
		}, v)), y.createElement(xs, $n({
			visible: a,
			leavedClassName: "".concat(p, "-content-hidden")
		}, k, {
			forceRender: l,
			removeOnLeave: x
		}), (function (e, t) {
			var n = e.className,
				r = e.style;
			return y.createElement(Wd, {
				ref: t,
				prefixCls: p,
				className: n,
				classNames: u,
				style: r,
				styles: f,
				isActive: a,
				forceRender: l,
				role: m ? "tabpanel" : void 0
			}, S)
		})))
	})),
	Xd = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"];

function Kd(e, t, n) {
	return Array.isArray(e) ? function (e, t) {
		var n = t.prefixCls,
			r = t.accordion,
			o = t.collapsible,
			a = t.destroyInactivePanel,
			i = t.onItemClick,
			l = t.activeKey,
			s = t.openMotion,
			c = t.expandIcon;
		return e.map((function (e, t) {
			var u = e.children,
				d = e.label,
				f = e.key,
				p = e.collapsible,
				h = e.onItemClick,
				m = e.destroyInactivePanel,
				g = Ur(e, Xd),
				v = String(null != f ? f : t),
				b = null != p ? p : o,
				w = null != m ? m : a,
				k = !1;
			return k = r ? l[0] === v : l.indexOf(v) > -1, y.createElement(Gd, $n({}, g, {
				prefixCls: n,
				key: v,
				panelKey: v,
				isActive: k,
				accordion: r,
				openMotion: s,
				expandIcon: c,
				header: d,
				collapsible: b,
				onItemClick: function (e) {
					"disabled" !== b && (i(e), null == h || h(e))
				},
				destroyInactivePanel: w
			}), u)
		}))
	}(e, n) : Fn(t).map((function (e, t) {
		return function (e, t, n) {
			if (!e) return null;
			var r = n.prefixCls,
				o = n.accordion,
				a = n.collapsible,
				i = n.destroyInactivePanel,
				l = n.onItemClick,
				s = n.activeKey,
				c = n.openMotion,
				u = n.expandIcon,
				d = e.key || String(t),
				f = e.props,
				p = f.header,
				h = f.headerClass,
				m = f.destroyInactivePanel,
				g = f.collapsible,
				v = f.onItemClick,
				b = !1;
			b = o ? s[0] === d : s.indexOf(d) > -1;
			var w = null != g ? g : a,
				k = {
					key: d,
					panelKey: d,
					header: p,
					headerClass: h,
					isActive: b,
					prefixCls: r,
					destroyInactivePanel: null != m ? m : i,
					openMotion: c,
					accordion: o,
					children: e.props.children,
					onItemClick: function (e) {
						"disabled" !== w && (l(e), null == v || v(e))
					},
					expandIcon: u,
					collapsible: w
				};
			return "string" == typeof e.type ? e : (Object.keys(k).forEach((function (e) {
				void 0 === k[e] && delete k[e]
			})), y.cloneElement(e, k))
		}(e, t, n)
	}))
}

function Qd(e) {
	var t = e;
	if (!Array.isArray(t)) {
		var n = Pn(t);
		t = "number" === n || "string" === n ? [t] : []
	}
	return t.map((function (e) {
		return String(e)
	}))
}
var Yd = y.forwardRef((function (e, t) {
	var n = e.prefixCls,
		r = void 0 === n ? "rc-collapse" : n,
		o = e.destroyInactivePanel,
		a = void 0 !== o && o,
		i = e.style,
		l = e.accordion,
		s = e.className,
		c = e.children,
		u = e.collapsible,
		d = e.openMotion,
		f = e.expandIcon,
		p = e.activeKey,
		h = e.defaultActiveKey,
		m = e.onChange,
		g = e.items,
		v = On(r, s),
		b = Pr(il([], {
			value: p,
			onChange: function (e) {
				return null == m ? void 0 : m(e)
			},
			defaultValue: h,
			postState: Qd
		}), 2),
		w = b[0],
		k = b[1];
	zn(!c, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
	var x = Kd(g, c, {
		prefixCls: r,
		accordion: l,
		openMotion: d,
		expandIcon: f,
		collapsible: u,
		destroyInactivePanel: a,
		onItemClick: function (e) {
			return k((function () {
				return l ? w[0] === e ? [] : [e] : w.indexOf(e) > -1 ? w.filter((function (t) {
					return t !== e
				})) : [].concat(br(w), [e])
			}))
		},
		activeKey: w
	});
	return y.createElement("div", $n({
		ref: t,
		className: v,
		style: i,
		role: l ? "tablist" : void 0
	}, xc(e, {
		aria: !0,
		data: !0
	})), x)
}));
const Zd = Object.assign(Yd, {
	Panel: Gd
});
Zd.Panel;
const Jd = v.forwardRef(((e, t) => {
		const {
			getPrefixCls: n
		} = v.useContext(Di), {
			prefixCls: r,
			className: o,
			showArrow: a = !0
		} = e, i = n("collapse", r), l = On({
			[`${i}-no-arrow`]: !a
		}, o);
		return v.createElement(Zd.Panel, Object.assign({
			ref: t
		}, e, {
			prefixCls: i,
			className: l
		}))
	})),
	ef = e => ({
		[e.componentCls]: {
			[`${e.antCls}-motion-collapse-legacy`]: {
				overflow: "hidden",
				"&-active": {
					transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
				}
			},
			[`${e.antCls}-motion-collapse`]: {
				overflow: "hidden",
				transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
			}
		}
	}),
	tf = e => ({
		animationDuration: e,
		animationFillMode: "both"
	}),
	nf = e => ({
		animationDuration: e,
		animationFillMode: "both"
	}),
	rf = (e, t, n, r, o = !1) => {
		const a = o ? "&" : "";
		return {
			[`\n      ${a}${e}-enter,\n      ${a}${e}-appear\n    `]: Object.assign(Object.assign({}, tf(r)), {
				animationPlayState: "paused"
			}),
			[`${a}${e}-leave`]: Object.assign(Object.assign({}, nf(r)), {
				animationPlayState: "paused"
			}),
			[`\n      ${a}${e}-enter${e}-enter-active,\n      ${a}${e}-appear${e}-appear-active\n    `]: {
				animationName: t,
				animationPlayState: "running"
			},
			[`${a}${e}-leave${e}-leave-active`]: {
				animationName: n,
				animationPlayState: "running",
				pointerEvents: "none"
			}
		}
	},
	of = new Ea("antFadeIn", {
		"0%": {
			opacity: 0
		},
		"100%": {
			opacity: 1
		}
	}),
	af = new Ea("antFadeOut", {
		"0%": {
			opacity: 1
		},
		"100%": {
			opacity: 0
		}
	}),
	lf = (e, t = !1) => {
		const {
			antCls: n
		} = e, r = `${n}-fade`, o = t ? "&" : "";
		return [rf(r, of , af, e.motionDurationMid, t), {
			[`\n        ${o}${r}-enter,\n        ${o}${r}-appear\n      `]: {
				opacity: 0,
				animationTimingFunction: "linear"
			},
			[`${o}${r}-leave`]: {
				animationTimingFunction: "linear"
			}
		}]
	},
	sf = new Ea("antZoomIn", {
		"0%": {
			transform: "scale(0.2)",
			opacity: 0
		},
		"100%": {
			transform: "scale(1)",
			opacity: 1
		}
	}),
	cf = new Ea("antZoomOut", {
		"0%": {
			transform: "scale(1)"
		},
		"100%": {
			transform: "scale(0.2)",
			opacity: 0
		}
	}),
	uf = new Ea("antZoomBigIn", {
		"0%": {
			transform: "scale(0.8)",
			opacity: 0
		},
		"100%": {
			transform: "scale(1)",
			opacity: 1
		}
	}),
	df = new Ea("antZoomBigOut", {
		"0%": {
			transform: "scale(1)"
		},
		"100%": {
			transform: "scale(0.8)",
			opacity: 0
		}
	}),
	ff = new Ea("antZoomUpIn", {
		"0%": {
			transform: "scale(0.8)",
			transformOrigin: "50% 0%",
			opacity: 0
		},
		"100%": {
			transform: "scale(1)",
			transformOrigin: "50% 0%"
		}
	}),
	pf = new Ea("antZoomUpOut", {
		"0%": {
			transform: "scale(1)",
			transformOrigin: "50% 0%"
		},
		"100%": {
			transform: "scale(0.8)",
			transformOrigin: "50% 0%",
			opacity: 0
		}
	}),
	hf = {
		zoom: {
			inKeyframes: sf,
			outKeyframes: cf
		},
		"zoom-big": {
			inKeyframes: uf,
			outKeyframes: df
		},
		"zoom-big-fast": {
			inKeyframes: uf,
			outKeyframes: df
		},
		"zoom-left": {
			inKeyframes: new Ea("antZoomLeftIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "0% 50%",
					opacity: 0
				},
				"100%": {
					transform: "scale(1)",
					transformOrigin: "0% 50%"
				}
			}),
			outKeyframes: new Ea("antZoomLeftOut", {
				"0%": {
					transform: "scale(1)",
					transformOrigin: "0% 50%"
				},
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "0% 50%",
					opacity: 0
				}
			})
		},
		"zoom-right": {
			inKeyframes: new Ea("antZoomRightIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "100% 50%",
					opacity: 0
				},
				"100%": {
					transform: "scale(1)",
					transformOrigin: "100% 50%"
				}
			}),
			outKeyframes: new Ea("antZoomRightOut", {
				"0%": {
					transform: "scale(1)",
					transformOrigin: "100% 50%"
				},
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "100% 50%",
					opacity: 0
				}
			})
		},
		"zoom-up": {
			inKeyframes: ff,
			outKeyframes: pf
		},
		"zoom-down": {
			inKeyframes: new Ea("antZoomDownIn", {
				"0%": {
					transform: "scale(0.8)",
					transformOrigin: "50% 100%",
					opacity: 0
				},
				"100%": {
					transform: "scale(1)",
					transformOrigin: "50% 100%"
				}
			}),
			outKeyframes: new Ea("antZoomDownOut", {
				"0%": {
					transform: "scale(1)",
					transformOrigin: "50% 100%"
				},
				"100%": {
					transform: "scale(0.8)",
					transformOrigin: "50% 100%",
					opacity: 0
				}
			})
		}
	},
	mf = (e, t) => {
		const {
			antCls: n
		} = e, r = `${n}-${t}`, {
			inKeyframes: o,
			outKeyframes: a
		} = hf[t];
		return [rf(r, o, a, "zoom-big-fast" === t ? e.motionDurationFast : e.motionDurationMid), {
			[`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
				transform: "scale(0)",
				opacity: 0,
				animationTimingFunction: e.motionEaseOutCirc,
				"&-prepare": {
					transform: "none"
				}
			},
			[`${r}-leave`]: {
				animationTimingFunction: e.motionEaseInOutCirc
			}
		}]
	},
	gf = e => {
		const {
			componentCls: t,
			contentBg: n,
			padding: r,
			headerBg: o,
			headerPadding: a,
			collapseHeaderPaddingSM: i,
			collapseHeaderPaddingLG: l,
			collapsePanelBorderRadius: s,
			lineWidth: c,
			lineType: u,
			colorBorder: d,
			colorText: f,
			colorTextHeading: p,
			colorTextDisabled: h,
			fontSizeLG: m,
			lineHeight: g,
			lineHeightLG: v,
			marginSM: y,
			paddingSM: b,
			paddingLG: w,
			paddingXS: k,
			motionDurationSlow: x,
			fontSizeIcon: S,
			contentPadding: C,
			fontHeight: E,
			fontHeightLG: O
		} = e, $ = `${so(c)} ${u} ${d}`;
		return {
			[t]: Object.assign(Object.assign({}, $l(e)), {
				backgroundColor: o,
				border: $,
				borderRadius: s,
				"&-rtl": {
					direction: "rtl"
				},
				[`& > ${t}-item`]: {
					borderBottom: $,
					"&:first-child": {
						[`\n            &,\n            & > ${t}-header`]: {
							borderRadius: `${so(s)} ${so(s)} 0 0`
						}
					},
					"&:last-child": {
						[`\n            &,\n            & > ${t}-header`]: {
							borderRadius: `0 0 ${so(s)} ${so(s)}`
						}
					},
					[`> ${t}-header`]: Object.assign(Object.assign({
						position: "relative",
						display: "flex",
						flexWrap: "nowrap",
						alignItems: "flex-start",
						padding: a,
						color: p,
						lineHeight: g,
						cursor: "pointer",
						transition: `all ${x}, visibility 0s`
					}, Rl(e)), {
						[`> ${t}-header-text`]: {
							flex: "auto"
						},
						[`${t}-expand-icon`]: {
							height: E,
							display: "flex",
							alignItems: "center",
							paddingInlineEnd: y
						},
						[`${t}-arrow`]: Object.assign(Object.assign({}, {
							display: "inline-flex",
							alignItems: "center",
							color: "inherit",
							fontStyle: "normal",
							lineHeight: 0,
							textAlign: "center",
							textTransform: "none",
							verticalAlign: "-0.125em",
							textRendering: "optimizeLegibility",
							"-webkit-font-smoothing": "antialiased",
							"-moz-osx-font-smoothing": "grayscale",
							"> *": {
								lineHeight: 1
							},
							svg: {
								display: "inline-block"
							}
						}), {
							fontSize: S,
							transition: `transform ${x}`,
							svg: {
								transition: `transform ${x}`
							}
						}),
						[`${t}-header-text`]: {
							marginInlineEnd: "auto"
						}
					}),
					[`${t}-collapsible-header`]: {
						cursor: "default",
						[`${t}-header-text`]: {
							flex: "none",
							cursor: "pointer"
						}
					},
					[`${t}-collapsible-icon`]: {
						cursor: "unset",
						[`${t}-expand-icon`]: {
							cursor: "pointer"
						}
					}
				},
				[`${t}-content`]: {
					color: f,
					backgroundColor: n,
					borderTop: $,
					[`& > ${t}-content-box`]: {
						padding: C
					},
					"&-hidden": {
						display: "none"
					}
				},
				"&-small": {
					[`> ${t}-item`]: {
						[`> ${t}-header`]: {
							padding: i,
							paddingInlineStart: k,
							[`> ${t}-expand-icon`]: {
								marginInlineStart: e.calc(b).sub(k).equal()
							}
						},
						[`> ${t}-content > ${t}-content-box`]: {
							padding: b
						}
					}
				},
				"&-large": {
					[`> ${t}-item`]: {
						fontSize: m,
						lineHeight: v,
						[`> ${t}-header`]: {
							padding: l,
							paddingInlineStart: r,
							[`> ${t}-expand-icon`]: {
								height: O,
								marginInlineStart: e.calc(w).sub(r).equal()
							}
						},
						[`> ${t}-content > ${t}-content-box`]: {
							padding: w
						}
					}
				},
				[`${t}-item:last-child`]: {
					borderBottom: 0,
					[`> ${t}-content`]: {
						borderRadius: `0 0 ${so(s)} ${so(s)}`
					}
				},
				[`& ${t}-item-disabled > ${t}-header`]: {
					"\n          &,\n          & > .arrow\n        ": {
						color: h,
						cursor: "not-allowed"
					}
				},
				[`&${t}-icon-position-end`]: {
					[`& > ${t}-item`]: {
						[`> ${t}-header`]: {
							[`${t}-expand-icon`]: {
								order: 1,
								paddingInlineEnd: 0,
								paddingInlineStart: y
							}
						}
					}
				}
			})
		}
	},
	vf = e => {
		const {
			componentCls: t
		} = e, n = `> ${t}-item > ${t}-header ${t}-arrow`;
		return {
			[`${t}-rtl`]: {
				[n]: {
					transform: "rotate(180deg)"
				}
			}
		}
	},
	yf = e => {
		const {
			componentCls: t,
			headerBg: n,
			borderlessContentPadding: r,
			borderlessContentBg: o,
			colorBorder: a
		} = e;
		return {
			[`${t}-borderless`]: {
				backgroundColor: n,
				border: 0,
				[`> ${t}-item`]: {
					borderBottom: `1px solid ${a}`
				},
				[`\n        > ${t}-item:last-child,\n        > ${t}-item:last-child ${t}-header\n      `]: {
					borderRadius: 0
				},
				[`> ${t}-item:last-child`]: {
					borderBottom: 0
				},
				[`> ${t}-item > ${t}-content`]: {
					backgroundColor: o,
					borderTop: 0
				},
				[`> ${t}-item > ${t}-content > ${t}-content-box`]: {
					padding: r
				}
			}
		}
	},
	bf = e => {
		const {
			componentCls: t,
			paddingSM: n
		} = e;
		return {
			[`${t}-ghost`]: {
				backgroundColor: "transparent",
				border: 0,
				[`> ${t}-item`]: {
					borderBottom: 0,
					[`> ${t}-content`]: {
						backgroundColor: "transparent",
						border: 0,
						[`> ${t}-content-box`]: {
							paddingBlock: n
						}
					}
				}
			}
		}
	},
	wf = Nl("Collapse", (e => {
		const t = ul(e, {
			collapseHeaderPaddingSM: `${so(e.paddingXS)} ${so(e.paddingSM)}`,
			collapseHeaderPaddingLG: `${so(e.padding)} ${so(e.paddingLG)}`,
			collapsePanelBorderRadius: e.borderRadiusLG
		});
		return [gf(t), yf(t), bf(t), vf(t), ef(t)]
	}), (e => ({
		headerPadding: `${e.paddingSM}px ${e.padding}px`,
		headerBg: e.colorFillAlter,
		contentPadding: `${e.padding}px 16px`,
		contentBg: e.colorBgContainer,
		borderlessContentPadding: `${e.paddingXXS}px 16px ${e.padding}px`,
		borderlessContentBg: "transparent"
	}))),
	kf = v.forwardRef(((e, t) => {
		const {
			getPrefixCls: n,
			direction: r,
			expandIcon: o,
			className: a,
			style: i
		} = Ui("collapse"), {
			prefixCls: l,
			className: s,
			rootClassName: c,
			style: u,
			bordered: d = !0,
			ghost: f,
			size: p,
			expandIconPosition: h = "start",
			children: m,
			destroyInactivePanel: g,
			destroyOnHidden: y,
			expandIcon: b
		} = e, w = ad((e => {
			var t;
			return null !== (t = null != p ? p : e) && void 0 !== t ? t : "middle"
		})), k = n("collapse", l), x = n(), [S, C, E] = wf(k), O = v.useMemo((() => "left" === h ? "start" : "right" === h ? "end" : h), [h]), $ = null != b ? b : o, P = v.useCallback(((e = {}) => {
			const t = "function" == typeof $ ? $(e) : v.createElement(Vd, {
				rotate: e.isActive ? "rtl" === r ? -90 : 90 : void 0,
				"aria-label": e.isActive ? "expanded" : "collapsed"
			});
			return Ec(t, (() => {
				var e;
				return {
					className: On(null === (e = null == t ? void 0 : t.props) || void 0 === e ? void 0 : e.className, `${k}-arrow`)
				}
			}))
		}), [$, k]), j = On(`${k}-icon-position-${O}`, {
			[`${k}-borderless`]: !d,
			[`${k}-rtl`]: "rtl" === r,
			[`${k}-ghost`]: !!f,
			[`${k}-${w}`]: "middle" !== w
		}, a, s, c, C, E), _ = Object.assign(Object.assign({}, qu(x)), {
			motionAppear: !1,
			leavedClassName: `${k}-content-hidden`
		}), R = v.useMemo((() => m ? Fn(m).map(((e, t) => {
			var n, r;
			const o = e.props;
			if (null == o ? void 0 : o.disabled) {
				const a = null !== (n = e.key) && void 0 !== n ? n : String(t);
				return Ec(e, Object.assign(Object.assign({}, Xu(e.props, ["disabled"])), {
					key: a,
					collapsible: null !== (r = o.collapsible) && void 0 !== r ? r : "disabled"
				}))
			}
			return e
		})) : null), [m]);
		return S(v.createElement(Zd, Object.assign({
			ref: t,
			openMotion: _
		}, Xu(e, ["rootClassName"]), {
			expandIcon: P,
			prefixCls: k,
			className: j,
			style: Object.assign(Object.assign({}, i), u),
			destroyInactivePanel: null != y ? y : g
		}), R))
	})),
	xf = Object.assign(kf, {
		Panel: Jd
	}),
	Sf = e => e instanceof Hd ? e : new Hd(e),
	Cf = e => Math.round(Number(e || 0)),
	Ef = e => Cf(100 * e.toHsb().a),
	Of = (e, t) => {
		const n = e.toRgb();
		if (!n.r && !n.g && !n.b) {
			const t = e.toHsb();
			return t.a = 1, Sf(t)
		}
		return n.a = 1, Sf(n)
	},
	$f = (e, t) => {
		const n = [{
			percent: 0,
			color: e[0].color
		}].concat(br(e), [{
			percent: 100,
			color: e[e.length - 1].color
		}]);
		for (let r = 0; r < n.length - 1; r += 1) {
			const e = n[r].percent,
				o = n[r + 1].percent,
				a = n[r].color,
				i = n[r + 1].color;
			if (e <= t && t <= o) {
				const n = o - e;
				if (0 === n) return a;
				const r = (t - e) / n * 100,
					l = new Fd(a),
					s = new Fd(i);
				return l.mix(s, r).toRgbString()
			}
		}
		return ""
	},
	Pf = e => e.map((e => (e.colors = e.colors.map(Sf), e))),
	jf = (e, t) => {
		const {
			r: n,
			g: r,
			b: o,
			a: a
		} = e.toRgb(), i = new Fd(e.toRgbString()).onBackground(t).toHsv();
		return a <= .5 ? i.v > .5 : .299 * n + .587 * r + .114 * o > 192
	},
	_f = (e, t) => {
		var n;
		return `panel-${null!==(n=e.key)&&void 0!==n?n:t}`
	},
	Rf = ({
		prefixCls: e,
		presets: t,
		value: n,
		onChange: r
	}) => {
		const [o] = Qa("ColorPicker"), [, a] = El(), [i] = il(Pf(t), {
			value: Pf(t),
			postState: Pf
		}), l = `${e}-presets`, s = v.useMemo((() => i.reduce(((e, t, n) => {
			const {
				defaultOpen: r = !0
			} = t;
			return r && e.push(_f(t, n)), e
		}), [])), [i]), c = i.map(((t, i) => {
			var s;
			return {
				key: _f(t, i),
				label: y.createElement("div", {
					className: `${l}-label`
				}, null == t ? void 0 : t.label),
				children: y.createElement("div", {
					className: `${l}-items`
				}, Array.isArray(null == t ? void 0 : t.colors) && (null === (s = t.colors) || void 0 === s ? void 0 : s.length) > 0 ? t.colors.map(((t, o) => y.createElement(Ad, {
					key: `preset-${o}-${t.toHexString()}`,
					color: Sf(t).toRgbString(),
					prefixCls: e,
					className: On(`${l}-color`, {
						[`${l}-color-checked`]: t.toHexString() === (null == n ? void 0 : n.toHexString()),
						[`${l}-color-bright`]: jf(t, a.colorBgElevated)
					}),
					onClick: () => {
						return e = t, void(null == r || r(e));
						var e
					}
				}))) : y.createElement("span", {
					className: `${l}-empty`
				}, o.presetEmpty))
			}
		}));
		return y.createElement("div", {
			className: l
		}, y.createElement(xf, {
			defaultActiveKey: s,
			ghost: !0,
			items: c
		}))
	},
	Mf = e => {
		const {
			paddingInline: t,
			onlyIconSize: n
		} = e;
		return ul(e, {
			buttonPaddingHorizontal: t,
			buttonPaddingVertical: 0,
			buttonIconOnlyFontSize: n
		})
	},
	Ff = e => {
		var t, n, r, o, a, i;
		const l = null !== (t = e.contentFontSize) && void 0 !== t ? t : e.fontSize,
			s = null !== (n = e.contentFontSizeSM) && void 0 !== n ? n : e.fontSize,
			c = null !== (r = e.contentFontSizeLG) && void 0 !== r ? r : e.fontSizeLG,
			u = null !== (o = e.contentLineHeight) && void 0 !== o ? o : $i(l),
			d = null !== (a = e.contentLineHeightSM) && void 0 !== a ? a : $i(s),
			f = null !== (i = e.contentLineHeightLG) && void 0 !== i ? i : $i(c),
			p = jf(new Hd(e.colorBgSolid), "#fff") ? "#000" : "#fff",
			h = gl.reduce(((t, n) => Object.assign(Object.assign({}, t), {
				[`${n}ShadowColor`]: `0 ${so(e.controlOutlineWidth)} 0 ${yl(e[`${n}1`],e.colorBgContainer)}`
			})), {});
		return Object.assign(Object.assign({}, h), {
			fontWeight: 400,
			defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
			primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
			dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
			primaryColor: e.colorTextLightSolid,
			dangerColor: e.colorTextLightSolid,
			borderColorDisabled: e.colorBorder,
			defaultGhostColor: e.colorBgContainer,
			ghostBg: "transparent",
			defaultGhostBorderColor: e.colorBgContainer,
			paddingInline: e.paddingContentHorizontal - e.lineWidth,
			paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
			paddingInlineSM: 8 - e.lineWidth,
			onlyIconSize: "inherit",
			onlyIconSizeSM: "inherit",
			onlyIconSizeLG: "inherit",
			groupBorderColor: e.colorPrimaryHover,
			linkHoverBg: "transparent",
			textTextColor: e.colorText,
			textTextHoverColor: e.colorText,
			textTextActiveColor: e.colorText,
			textHoverBg: e.colorFillTertiary,
			defaultColor: e.colorText,
			defaultBg: e.colorBgContainer,
			defaultBorderColor: e.colorBorder,
			defaultBorderColorDisabled: e.colorBorder,
			defaultHoverBg: e.colorBgContainer,
			defaultHoverColor: e.colorPrimaryHover,
			defaultHoverBorderColor: e.colorPrimaryHover,
			defaultActiveBg: e.colorBgContainer,
			defaultActiveColor: e.colorPrimaryActive,
			defaultActiveBorderColor: e.colorPrimaryActive,
			solidTextColor: p,
			contentFontSize: l,
			contentFontSizeSM: s,
			contentFontSizeLG: c,
			contentLineHeight: u,
			contentLineHeightSM: d,
			contentLineHeightLG: f,
			paddingBlock: Math.max((e.controlHeight - l * u) / 2 - e.lineWidth, 0),
			paddingBlockSM: Math.max((e.controlHeightSM - s * d) / 2 - e.lineWidth, 0),
			paddingBlockLG: Math.max((e.controlHeightLG - c * f) / 2 - e.lineWidth, 0)
		})
	},
	Nf = e => {
		const {
			componentCls: t,
			iconCls: n,
			fontWeight: r,
			opacityLoading: o,
			motionDurationSlow: a,
			motionEaseInOut: i,
			marginXS: l,
			calc: s
		} = e;
		return {
			[t]: {
				outline: "none",
				position: "relative",
				display: "inline-flex",
				gap: e.marginXS,
				alignItems: "center",
				justifyContent: "center",
				fontWeight: r,
				whiteSpace: "nowrap",
				textAlign: "center",
				backgroundImage: "none",
				background: "transparent",
				border: `${so(e.lineWidth)} ${e.lineType} transparent`,
				cursor: "pointer",
				transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
				userSelect: "none",
				touchAction: "manipulation",
				color: e.colorText,
				"&:disabled > *": {
					pointerEvents: "none"
				},
				[`${t}-icon > svg`]: {
					display: "inline-flex",
					alignItems: "center",
					color: "inherit",
					fontStyle: "normal",
					lineHeight: 0,
					textAlign: "center",
					textTransform: "none",
					verticalAlign: "-0.125em",
					textRendering: "optimizeLegibility",
					"-webkit-font-smoothing": "antialiased",
					"-moz-osx-font-smoothing": "grayscale",
					"> *": {
						lineHeight: 1
					},
					svg: {
						display: "inline-block"
					}
				},
				"> a": {
					color: "currentColor"
				},
				"&:not(:disabled)": Rl(e),
				[`&${t}-two-chinese-chars::first-letter`]: {
					letterSpacing: "0.34em"
				},
				[`&${t}-two-chinese-chars > *:not(${n})`]: {
					marginInlineEnd: "-0.34em",
					letterSpacing: "0.34em"
				},
				[`&${t}-icon-only`]: {
					paddingInline: 0,
					[`&${t}-compact-item`]: {
						flex: "none"
					},
					[`&${t}-round`]: {
						width: "auto"
					}
				},
				[`&${t}-loading`]: {
					opacity: o,
					cursor: "default"
				},
				[`${t}-loading-icon`]: {
					transition: ["width", "opacity", "margin"].map((e => `${e} ${a} ${i}`)).join(",")
				},
				[`&:not(${t}-icon-end)`]: {
					[`${t}-loading-icon-motion`]: {
						"&-appear-start, &-enter-start": {
							marginInlineEnd: s(l).mul(-1).equal()
						},
						"&-appear-active, &-enter-active": {
							marginInlineEnd: 0
						},
						"&-leave-start": {
							marginInlineEnd: 0
						},
						"&-leave-active": {
							marginInlineEnd: s(l).mul(-1).equal()
						}
					}
				},
				"&-icon-end": {
					flexDirection: "row-reverse",
					[`${t}-loading-icon-motion`]: {
						"&-appear-start, &-enter-start": {
							marginInlineStart: s(l).mul(-1).equal()
						},
						"&-appear-active, &-enter-active": {
							marginInlineStart: 0
						},
						"&-leave-start": {
							marginInlineStart: 0
						},
						"&-leave-active": {
							marginInlineStart: s(l).mul(-1).equal()
						}
					}
				}
			}
		}
	},
	Tf = (e, t, n) => ({
		[`&:not(:disabled):not(${e}-disabled)`]: {
			"&:hover": t,
			"&:active": n
		}
	}),
	If = e => ({
		minWidth: e.controlHeight,
		paddingInlineStart: 0,
		paddingInlineEnd: 0,
		borderRadius: "50%"
	}),
	Lf = e => ({
		borderRadius: e.controlHeight,
		paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
		paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
	}),
	zf = e => ({
		cursor: "not-allowed",
		borderColor: e.borderColorDisabled,
		color: e.colorTextDisabled,
		background: e.colorBgContainerDisabled,
		boxShadow: "none"
	}),
	Af = (e, t, n, r, o, a, i, l) => ({
		[`&${e}-background-ghost`]: Object.assign(Object.assign({
			color: n || void 0,
			background: t,
			borderColor: r || void 0,
			boxShadow: "none"
		}, Tf(e, Object.assign({
			background: t
		}, i), Object.assign({
			background: t
		}, l))), {
			"&:disabled": {
				cursor: "not-allowed",
				color: o || void 0,
				borderColor: a || void 0
			}
		})
	}),
	Df = e => ({
		[`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, zf(e))
	}),
	Hf = e => ({
		[`&:disabled, &${e.componentCls}-disabled`]: {
			cursor: "not-allowed",
			color: e.colorTextDisabled
		}
	}),
	Bf = (e, t, n, r) => {
		const o = r && ["link", "text"].includes(r) ? Hf : Df;
		return Object.assign(Object.assign({}, o(e)), Tf(e.componentCls, t, n))
	},
	Uf = (e, t, n, r, o) => ({
		[`&${e.componentCls}-variant-solid`]: Object.assign({
			color: t,
			background: n
		}, Bf(e, r, o))
	}),
	Vf = (e, t, n, r, o) => ({
		[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
			borderColor: t,
			background: n
		}, Bf(e, r, o))
	}),
	Wf = e => ({
		[`&${e.componentCls}-variant-dashed`]: {
			borderStyle: "dashed"
		}
	}),
	qf = (e, t, n, r) => ({
		[`&${e.componentCls}-variant-filled`]: Object.assign({
			boxShadow: "none",
			background: t
		}, Bf(e, n, r))
	}),
	Gf = (e, t, n, r, o) => ({
		[`&${e.componentCls}-variant-${n}`]: Object.assign({
			color: t,
			boxShadow: "none"
		}, Bf(e, r, o, n))
	}),
	Xf = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
		color: e.defaultColor,
		boxShadow: e.defaultShadow
	}, Uf(e, e.solidTextColor, e.colorBgSolid, {
		color: e.solidTextColor,
		background: e.colorBgSolidHover
	}, {
		color: e.solidTextColor,
		background: e.colorBgSolidActive
	})), Wf(e)), qf(e, e.colorFillTertiary, {
		background: e.colorFillSecondary
	}, {
		background: e.colorFill
	})), Af(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Gf(e, e.textTextColor, "link", {
		color: e.colorLinkHover,
		background: e.linkHoverBg
	}, {
		color: e.colorLinkActive
	})),
	Kf = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
		color: e.colorPrimary,
		boxShadow: e.primaryShadow
	}, Vf(e, e.colorPrimary, e.colorBgContainer, {
		color: e.colorPrimaryTextHover,
		borderColor: e.colorPrimaryHover,
		background: e.colorBgContainer
	}, {
		color: e.colorPrimaryTextActive,
		borderColor: e.colorPrimaryActive,
		background: e.colorBgContainer
	})), Wf(e)), qf(e, e.colorPrimaryBg, {
		background: e.colorPrimaryBgHover
	}, {
		background: e.colorPrimaryBorder
	})), Gf(e, e.colorPrimaryText, "text", {
		color: e.colorPrimaryTextHover,
		background: e.colorPrimaryBg
	}, {
		color: e.colorPrimaryTextActive,
		background: e.colorPrimaryBorder
	})), Gf(e, e.colorPrimaryText, "link", {
		color: e.colorPrimaryTextHover,
		background: e.linkHoverBg
	}, {
		color: e.colorPrimaryTextActive
	})), Af(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
		color: e.colorPrimaryHover,
		borderColor: e.colorPrimaryHover
	}, {
		color: e.colorPrimaryActive,
		borderColor: e.colorPrimaryActive
	})),
	Qf = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
		color: e.colorError,
		boxShadow: e.dangerShadow
	}, Uf(e, e.dangerColor, e.colorError, {
		background: e.colorErrorHover
	}, {
		background: e.colorErrorActive
	})), Vf(e, e.colorError, e.colorBgContainer, {
		color: e.colorErrorHover,
		borderColor: e.colorErrorBorderHover
	}, {
		color: e.colorErrorActive,
		borderColor: e.colorErrorActive
	})), Wf(e)), qf(e, e.colorErrorBg, {
		background: e.colorErrorBgFilledHover
	}, {
		background: e.colorErrorBgActive
	})), Gf(e, e.colorError, "text", {
		color: e.colorErrorHover,
		background: e.colorErrorBg
	}, {
		color: e.colorErrorHover,
		background: e.colorErrorBgActive
	})), Gf(e, e.colorError, "link", {
		color: e.colorErrorHover
	}, {
		color: e.colorErrorActive
	})), Af(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
		color: e.colorErrorHover,
		borderColor: e.colorErrorHover
	}, {
		color: e.colorErrorActive,
		borderColor: e.colorErrorActive
	})),
	Yf = e => Object.assign(Object.assign({}, Gf(e, e.colorLink, "link", {
		color: e.colorLinkHover
	}, {
		color: e.colorLinkActive
	})), Af(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
		color: e.colorInfoHover,
		borderColor: e.colorInfoHover
	}, {
		color: e.colorInfoActive,
		borderColor: e.colorInfoActive
	})),
	Zf = e => {
		const {
			componentCls: t
		} = e;
		return Object.assign({
			[`${t}-color-default`]: Xf(e),
			[`${t}-color-primary`]: Kf(e),
			[`${t}-color-dangerous`]: Qf(e),
			[`${t}-color-link`]: Yf(e)
		}, (e => {
			const {
				componentCls: t
			} = e;
			return gl.reduce(((n, r) => {
				const o = e[`${r}6`],
					a = e[`${r}1`],
					i = e[`${r}5`],
					l = e[`${r}2`],
					s = e[`${r}3`],
					c = e[`${r}7`];
				return Object.assign(Object.assign({}, n), {
					[`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
						color: o,
						boxShadow: e[`${r}ShadowColor`]
					}, Uf(e, e.colorTextLightSolid, o, {
						background: i
					}, {
						background: c
					})), Vf(e, o, e.colorBgContainer, {
						color: i,
						borderColor: i,
						background: e.colorBgContainer
					}, {
						color: c,
						borderColor: c,
						background: e.colorBgContainer
					})), Wf(e)), qf(e, a, {
						background: l
					}, {
						background: s
					})), Gf(e, o, "link", {
						color: i
					}, {
						color: c
					})), Gf(e, o, "text", {
						color: i,
						background: a
					}, {
						color: c,
						background: s
					}))
				})
			}), {})
		})(e))
	},
	Jf = e => Object.assign(Object.assign(Object.assign(Object.assign({}, Vf(e, e.defaultBorderColor, e.defaultBg, {
		color: e.defaultHoverColor,
		borderColor: e.defaultHoverBorderColor,
		background: e.defaultHoverBg
	}, {
		color: e.defaultActiveColor,
		borderColor: e.defaultActiveBorderColor,
		background: e.defaultActiveBg
	})), Gf(e, e.textTextColor, "text", {
		color: e.textTextHoverColor,
		background: e.textHoverBg
	}, {
		color: e.textTextActiveColor,
		background: e.colorBgTextActive
	})), Uf(e, e.primaryColor, e.colorPrimary, {
		background: e.colorPrimaryHover,
		color: e.primaryColor
	}, {
		background: e.colorPrimaryActive,
		color: e.primaryColor
	})), Gf(e, e.colorLink, "link", {
		color: e.colorLinkHover,
		background: e.linkHoverBg
	}, {
		color: e.colorLinkActive
	})),
	ep = (e, t = "") => {
		const {
			componentCls: n,
			controlHeight: r,
			fontSize: o,
			borderRadius: a,
			buttonPaddingHorizontal: i,
			iconCls: l,
			buttonPaddingVertical: s,
			buttonIconOnlyFontSize: c
		} = e;
		return [{
			[t]: {
				fontSize: o,
				height: r,
				padding: `${so(s)} ${so(i)}`,
				borderRadius: a,
				[`&${n}-icon-only`]: {
					width: r,
					[l]: {
						fontSize: c
					}
				}
			}
		}, {
			[`${n}${n}-circle${t}`]: If(e)
		}, {
			[`${n}${n}-round${t}`]: Lf(e)
		}]
	},
	tp = e => {
		const t = ul(e, {
			fontSize: e.contentFontSize
		});
		return ep(t, e.componentCls)
	},
	np = e => {
		const t = ul(e, {
			controlHeight: e.controlHeightSM,
			fontSize: e.contentFontSizeSM,
			padding: e.paddingXS,
			buttonPaddingHorizontal: e.paddingInlineSM,
			buttonPaddingVertical: 0,
			borderRadius: e.borderRadiusSM,
			buttonIconOnlyFontSize: e.onlyIconSizeSM
		});
		return ep(t, `${e.componentCls}-sm`)
	},
	rp = e => {
		const t = ul(e, {
			controlHeight: e.controlHeightLG,
			fontSize: e.contentFontSizeLG,
			buttonPaddingHorizontal: e.paddingInlineLG,
			buttonPaddingVertical: 0,
			borderRadius: e.borderRadiusLG,
			buttonIconOnlyFontSize: e.onlyIconSizeLG
		});
		return ep(t, `${e.componentCls}-lg`)
	},
	op = e => {
		const {
			componentCls: t
		} = e;
		return {
			[t]: {
				[`&${t}-block`]: {
					width: "100%"
				}
			}
		}
	},
	ap = Nl("Button", (e => {
		const t = Mf(e);
		return [Nf(t), tp(t), np(t), rp(t), op(t), Zf(t), Jf(t), jd(t)]
	}), Ff, {
		unitless: {
			fontWeight: !0,
			contentLineHeight: !0,
			contentLineHeightSM: !0,
			contentLineHeightLG: !0
		}
	});

function ip(e, t, n) {
	const {
		focusElCls: r,
		focus: o,
		borderElCls: a
	} = n, i = a ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((e => `&:${e} ${i}`)).join(",");
	return {
		[`&-item:not(${t}-last-item)`]: {
			marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
		},
		"&-item": Object.assign(Object.assign({
			[l]: {
				zIndex: 2
			}
		}, r ? {
			[`&${r}`]: {
				zIndex: 2
			}
		} : {}), {
			[`&[disabled] ${i}`]: {
				zIndex: 0
			}
		})
	}
}

function lp(e, t, n) {
	const {
		borderElCls: r
	} = n, o = r ? `> ${r}` : "";
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
			borderRadius: 0
		},
		[`&-item:not(${t}-last-item)${t}-first-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0
			}
		},
		[`&-item:not(${t}-first-item)${t}-last-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0
			}
		}
	}
}

function sp(e, t = {
	focus: !0
}) {
	const {
		componentCls: n
	} = e, r = `${n}-compact`;
	return {
		[r]: Object.assign(Object.assign({}, ip(e, r, t)), lp(n, r, t))
	}
}

function cp(e, t) {
	return {
		[`&-item:not(${t}-last-item)`]: {
			marginBottom: e.calc(e.lineWidth).mul(-1).equal()
		},
		"&-item": {
			"&:hover,&:focus,&:active": {
				zIndex: 2
			},
			"&[disabled]": {
				zIndex: 0
			}
		}
	}
}

function up(e) {
	const t = `${e.componentCls}-compact-vertical`;
	return {
		[t]: Object.assign(Object.assign({}, cp(e, t)), (n = e.componentCls, r = t, {
			[`&-item:not(${r}-first-item):not(${r}-last-item)`]: {
				borderRadius: 0
			},
			[`&-item${r}-first-item:not(${r}-last-item)`]: {
				[`&, &${n}-sm, &${n}-lg`]: {
					borderEndEndRadius: 0,
					borderEndStartRadius: 0
				}
			},
			[`&-item${r}-last-item:not(${r}-first-item)`]: {
				[`&, &${n}-sm, &${n}-lg`]: {
					borderStartStartRadius: 0,
					borderStartEndRadius: 0
				}
			}
		}))
	};
	var n, r
}
const dp = e => {
		const {
			componentCls: t,
			colorPrimaryHover: n,
			lineWidth: r,
			calc: o
		} = e, a = o(r).mul(-1).equal(), i = e => {
			const o = `${t}-compact${e?"-vertical":""}-item${t}-primary:not([disabled])`;
			return {
				[`${o} + ${o}::before`]: {
					position: "absolute",
					top: e ? a : 0,
					insetInlineStart: e ? 0 : a,
					backgroundColor: n,
					content: '""',
					width: e ? "100%" : r,
					height: e ? r : "100%"
				}
			}
		};
		return Object.assign(Object.assign({}, i()), i(!0))
	},
	fp = Il(["Button", "compact"], (e => {
		const t = Mf(e);
		return [sp(t), up(t), dp(t)]
	}), Ff);
const pp = {
		default: ["default", "outlined"],
		primary: ["primary", "solid"],
		dashed: ["default", "dashed"],
		link: ["link", "link"],
		text: ["default", "text"]
	},
	hp = y.forwardRef(((e, t) => {
		var n, r;
		const {
			loading: o = !1,
			prefixCls: a,
			color: i,
			variant: l,
			type: s,
			danger: c = !1,
			shape: u = "default",
			size: d,
			styles: f,
			disabled: p,
			className: h,
			rootClassName: m,
			children: g,
			icon: b,
			iconPosition: w = "start",
			ghost: k = !1,
			block: x = !1,
			htmlType: S = "button",
			classNames: C,
			style: E = {},
			autoInsertSpace: O,
			autoFocus: $
		} = e, P = function (e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
			}
			return n
		}(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), j = s || "default", {
			button: _
		} = y.useContext(Di), [R, M] = v.useMemo((() => {
			if (i && l) return [i, l];
			if (s || c) {
				const e = pp[j] || [];
				return c ? ["danger", e[1]] : e
			}
			return (null == _ ? void 0 : _.color) && (null == _ ? void 0 : _.variant) ? [_.color, _.variant] : ["default", "outlined"]
		}), [s, i, l, c, null == _ ? void 0 : _.variant, null == _ ? void 0 : _.color]), F = "danger" === R ? "dangerous" : R, {
			getPrefixCls: N,
			direction: T,
			autoInsertSpace: I,
			className: L,
			style: z,
			classNames: A,
			styles: D
		} = Ui("button"), H = null === (n = null != O ? O : I) || void 0 === n || n, B = N("btn", a), [U, V, W] = ap(B), q = v.useContext(qi), G = null != p ? p : q, X = v.useContext(gd), K = v.useMemo((() => function (e) {
			if ("object" == typeof e && e) {
				let t = null == e ? void 0 : e.delay;
				return t = Number.isNaN(t) || "number" != typeof t ? 0 : t, {
					loading: t <= 0,
					delay: t
				}
			}
			return {
				loading: !!e,
				delay: 0
			}
		}(o)), [o]), [Q, Y] = v.useState(K.loading), [Z, J] = v.useState(!1), ee = v.useRef(null), te = tr(t, ee), ne = 1 === v.Children.count(g) && !b && !kd(M), re = v.useRef(!0);
		y.useEffect((() => (re.current = !1, () => {
			re.current = !0
		})), []), v.useEffect((() => {
			let e = null;
			return K.delay > 0 ? e = setTimeout((() => {
					e = null, Y(!0)
				}), K.delay) : Y(K.loading),
				function () {
					e && (clearTimeout(e), e = null)
				}
		}), [K]), v.useEffect((() => {
			if (!ee.current || !H) return;
			const e = ee.current.textContent || "";
			ne && yd(e) ? Z || J(!0) : Z && J(!1)
		})), v.useEffect((() => {
			$ && ee.current && ee.current.focus()
		}), []);
		const oe = y.useCallback((t => {
				var n;
				Q || G ? t.preventDefault() : null === (n = e.onClick) || void 0 === n || n.call(e, t)
			}), [e.onClick, Q, G]),
			{
				compactSize: ae,
				compactItemClassnames: ie
			} = fd(B, T),
			le = ad((e => {
				var t, n;
				return null !== (n = null !== (t = null != d ? d : ae) && void 0 !== t ? t : X) && void 0 !== n ? n : e
			})),
			se = le && null !== (r = {
				large: "lg",
				small: "sm",
				middle: void 0
			} [le]) && void 0 !== r ? r : "",
			ce = Q ? "loading" : b,
			ue = Xu(P, ["navigate"]),
			de = On(B, V, W, {
				[`${B}-${u}`]: "default" !== u && u,
				[`${B}-${j}`]: j,
				[`${B}-dangerous`]: c,
				[`${B}-color-${F}`]: F,
				[`${B}-variant-${M}`]: M,
				[`${B}-${se}`]: se,
				[`${B}-icon-only`]: !g && 0 !== g && !!ce,
				[`${B}-background-ghost`]: k && !kd(M),
				[`${B}-loading`]: Q,
				[`${B}-two-chinese-chars`]: Z && H && !Q,
				[`${B}-block`]: x,
				[`${B}-rtl`]: "rtl" === T,
				[`${B}-icon-end`]: "end" === w
			}, ie, h, m, L),
			fe = Object.assign(Object.assign({}, z), E),
			pe = On(null == C ? void 0 : C.icon, A.icon),
			he = Object.assign(Object.assign({}, (null == f ? void 0 : f.icon) || {}), D.icon || {}),
			me = b && !Q ? y.createElement(Sd, {
				prefixCls: B,
				className: pe,
				style: he
			}, b) : o && "object" == typeof o && o.icon ? y.createElement(Sd, {
				prefixCls: B,
				className: pe,
				style: he
			}, o.icon) : y.createElement($d, {
				existIcon: !!b,
				prefixCls: B,
				loading: Q,
				mount: re.current
			}),
			ge = g || 0 === g ? xd(g, ne && H) : null;
		if (void 0 !== ue.href) return U(y.createElement("a", Object.assign({}, ue, {
			className: On(de, {
				[`${B}-disabled`]: G
			}),
			href: G ? void 0 : ue.href,
			style: fe,
			onClick: oe,
			ref: te,
			tabIndex: G ? -1 : 0
		}), me, ge));
		let ve = y.createElement("button", Object.assign({}, P, {
			type: S,
			className: de,
			style: fe,
			onClick: oe,
			disabled: G,
			ref: te
		}), me, ge, ie && y.createElement(fp, {
			prefixCls: B
		}));
		return kd(M) || (ve = y.createElement(od, {
			component: "Button",
			disabled: Q
		}, ve)), U(ve)
	}));

function mp(e) {
	return !!(null == e ? void 0 : e.then)
}
hp.Group = e => {
	const {
		getPrefixCls: t,
		direction: n
	} = v.useContext(Di), {
		prefixCls: r,
		size: o,
		className: a
	} = e, i = function (e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
		}
		return n
	}(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , s] = El(), c = v.useMemo((() => {
		switch (o) {
			case "large":
				return "lg";
			case "small":
				return "sm";
			default:
				return ""
		}
	}), [o]), u = On(l, {
		[`${l}-${c}`]: c,
		[`${l}-rtl`]: "rtl" === n
	}, a, s);
	return v.createElement(gd.Provider, {
		value: o
	}, v.createElement("div", Object.assign({}, i, {
		className: u
	})))
}, hp.__ANT_BUTTON = !0;
const gp = e => {
		const {
			type: t,
			children: n,
			prefixCls: r,
			buttonProps: o,
			close: a,
			autoFocus: i,
			emitEvent: l,
			isSilent: s,
			quitOnNullishReturnValue: c,
			actionFn: u
		} = e, d = v.useRef(!1), f = v.useRef(null), [p, h] = ol(!1), m = (...e) => {
			null == a || a.apply(void 0, e)
		};
		v.useEffect((() => {
			let e = null;
			return i && (e = setTimeout((() => {
				var e;
				null === (e = f.current) || void 0 === e || e.focus({
					preventScroll: !0
				})
			}))), () => {
				e && clearTimeout(e)
			}
		}), []);
		return v.createElement(hp, Object.assign({}, bd(t), {
			onClick: e => {
				if (d.current) return;
				if (d.current = !0, !u) return void m();
				let t;
				if (l) {
					if (t = u(e), c && !mp(t)) return d.current = !1, void m(e)
				} else if (u.length) t = u(a), d.current = !1;
				else if (t = u(), !mp(t)) return void m();
				(e => {
					mp(e) && (h(!0), e.then(((...e) => {
						h(!1, !0), m.apply(void 0, e), d.current = !1
					}), (e => {
						if (h(!1, !0), d.current = !1, !(null == s ? void 0 : s())) return Promise.reject(e)
					})))
				})(t)
			},
			loading: p,
			prefixCls: r
		}, o, {
			ref: f
		}), n)
	},
	vp = y.createContext({}),
	{
		Provider: yp
	} = vp,
	bp = () => {
		const {
			autoFocusButton: e,
			cancelButtonProps: t,
			cancelTextLocale: n,
			isSilent: r,
			mergedOkCancel: o,
			rootPrefixCls: a,
			close: i,
			onCancel: l,
			onConfirm: s
		} = v.useContext(vp);
		return o ? y.createElement(gp, {
			isSilent: r,
			actionFn: l,
			close: (...e) => {
				null == i || i.apply(void 0, e), null == s || s(!1)
			},
			autoFocus: "cancel" === e,
			buttonProps: t,
			prefixCls: `${a}-btn`
		}, n) : null
	},
	wp = () => {
		const {
			autoFocusButton: e,
			close: t,
			isSilent: n,
			okButtonProps: r,
			rootPrefixCls: o,
			okTextLocale: a,
			okType: i,
			onConfirm: l,
			onOk: s
		} = v.useContext(vp);
		return y.createElement(gp, {
			isSilent: n,
			type: i || "primary",
			actionFn: s,
			close: (...e) => {
				null == t || t.apply(void 0, e), null == l || l(!0)
			},
			autoFocus: "ok" === e,
			buttonProps: r,
			prefixCls: `${o}-btn`
		}, a)
	};
var kp, xp = v.createContext(null),
	Sp = [];

function Cp(e) {
	var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),
		n = document.createElement("div");
	n.id = t;
	var r, o, a = n.style;
	if (a.position = "absolute", a.left = "0", a.top = "0", a.width = "100px", a.height = "100px", a.overflow = "scroll", e) {
		var i = getComputedStyle(e);
		a.scrollbarColor = i.scrollbarColor, a.scrollbarWidth = i.scrollbarWidth;
		var l = getComputedStyle(e, "::-webkit-scrollbar"),
			s = parseInt(l.width, 10),
			c = parseInt(l.height, 10);
		try {
			var u = s ? "width: ".concat(l.width, ";") : "",
				d = c ? "height: ".concat(l.height, ";") : "";
			Hr("\n#".concat(t, "::-webkit-scrollbar {\n").concat(u, "\n").concat(d, "\n}"), t)
		} catch (wS) {
			console.error(wS), r = s, o = c
		}
	}
	document.body.appendChild(n);
	var f = e && r && !isNaN(r) ? r : n.offsetWidth - n.clientWidth,
		p = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
	return document.body.removeChild(n), Dr(t), {
		width: f,
		height: p
	}
}

function Ep(e) {
	return "undefined" == typeof document ? 0 : (void 0 === kp && (kp = Cp()), kp.width)
}

function Op(e) {
	return "undefined" != typeof document && e && e instanceof Element ? Cp(e) : {
		width: 0,
		height: 0
	}
}
var $p = "rc-util-locker-".concat(Date.now()),
	Pp = 0;

function jp(e) {
	var t = !!e,
		n = Pr(v.useState((function () {
			return Pp += 1, "".concat($p, "_").concat(Pp)
		})), 1)[0];
	mo((function () {
		if (t) {
			var e = Op(document.body).width,
				r = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
			Hr("\nhtml body {\n  overflow-y: hidden;\n  ".concat(r ? "width: calc(100% - ".concat(e, "px);") : "", "\n}"), n)
		} else Dr(n);
		return function () {
			Dr(n)
		}
	}), [t, n])
}
var _p = function (e) {
		return !1 !== e && (_r() && e ? "string" == typeof e ? document.querySelector(e) : "function" == typeof e ? e() : e : null)
	},
	Rp = v.forwardRef((function (e, t) {
		var n = e.open,
			r = e.autoLock,
			o = e.getContainer;
		e.debug;
		var a = e.autoDestroy,
			i = void 0 === a || a,
			l = e.children,
			s = Pr(v.useState(n), 2),
			c = s[0],
			u = s[1],
			d = c || n;
		v.useEffect((function () {
			(i || n) && u(n)
		}), [n, i]);
		var f = Pr(v.useState((function () {
				return _p(o)
			})), 2),
			p = f[0],
			h = f[1];
		v.useEffect((function () {
			var e = _p(o);
			h(null != e ? e : null)
		}));
		var m = function (e) {
				var t = Pr(v.useState((function () {
						return _r() ? document.createElement("div") : null
					})), 1)[0],
					n = v.useRef(!1),
					r = v.useContext(xp),
					o = Pr(v.useState(Sp), 2),
					a = o[0],
					i = o[1],
					l = r || (n.current ? void 0 : function (e) {
						i((function (t) {
							return [e].concat(br(t))
						}))
					});

				function s() {
					t.parentElement || document.body.appendChild(t), n.current = !0
				}

				function c() {
					var e;
					null === (e = t.parentElement) || void 0 === e || e.removeChild(t), n.current = !1
				}
				return mo((function () {
					return e ? r ? r(s) : s() : c(), c
				}), [e]), mo((function () {
					a.length && (a.forEach((function (e) {
						return e()
					})), i(Sp))
				}), [a]), [t, l]
			}(d && !p),
			g = Pr(m, 2),
			y = g[0],
			b = g[1],
			w = null != p ? p : y;
		jp(r && n && _r() && (w === y || w === document.body));
		var k = null;
		l && nr(l) && t && (k = l.ref);
		var x = tr(k, t);
		if (!d || !_r() || void 0 === p) return null;
		var S = !1 === w || !1,
			C = l;
		return t && (C = v.cloneElement(l, {
			ref: x
		})), v.createElement(xp.Provider, {
			value: b
		}, S ? C : T.createPortal(C, w))
	})),
	Mp = v.createContext({});
var Fp = 0,
	Np = Bn({}, b).useId;
const Tp = Np ? function (e) {
	var t = Np();
	return e || t
} : function (e) {
	var t = Pr(v.useState("ssr-id"), 2),
		n = t[0],
		r = t[1];
	return v.useEffect((function () {
		var e = Fp;
		Fp += 1, r("rc_unique_".concat(e))
	}), []), e || n
};

function Ip(e, t, n) {
	var r = t;
	return !r && n && (r = "".concat(e, "-").concat(n)), r
}

function Lp(e, t) {
	var n = e["page".concat(t ? "Y" : "X", "Offset")],
		r = "scroll".concat(t ? "Top" : "Left");
	if ("number" != typeof n) {
		var o = e.document;
		"number" != typeof (n = o.documentElement[r]) && (n = o.body[r])
	}
	return n
}
const zp = v.memo((function (e) {
	return e.children
}), (function (e, t) {
	return !t.shouldUpdate
}));
var Ap = {
		width: 0,
		height: 0,
		overflow: "hidden",
		outline: "none"
	},
	Dp = {
		outline: "none"
	},
	Hp = y.forwardRef((function (e, t) {
		var n = e.prefixCls,
			r = e.className,
			o = e.style,
			a = e.title,
			i = e.ariaId,
			l = e.footer,
			s = e.closable,
			c = e.closeIcon,
			u = e.onClose,
			d = e.children,
			f = e.bodyStyle,
			p = e.bodyProps,
			h = e.modalRender,
			m = e.onMouseDown,
			g = e.onMouseUp,
			b = e.holderRef,
			w = e.visible,
			k = e.forceRender,
			x = e.width,
			S = e.height,
			C = e.classNames,
			E = e.styles,
			O = y.useContext(Mp).panel,
			$ = tr(b, O),
			P = v.useRef(),
			j = v.useRef();
		y.useImperativeHandle(t, (function () {
			return {
				focus: function () {
					var e;
					null === (e = P.current) || void 0 === e || e.focus({
						preventScroll: !0
					})
				},
				changeActive: function (e) {
					var t = document.activeElement;
					e && t === j.current ? P.current.focus({
						preventScroll: !0
					}) : e || t !== P.current || j.current.focus({
						preventScroll: !0
					})
				}
			}
		}));
		var _ = {};
		void 0 !== x && (_.width = x), void 0 !== S && (_.height = S);
		var R = l ? y.createElement("div", {
				className: On("".concat(n, "-footer"), null == C ? void 0 : C.footer),
				style: Bn({}, null == E ? void 0 : E.footer)
			}, l) : null,
			M = a ? y.createElement("div", {
				className: On("".concat(n, "-header"), null == C ? void 0 : C.header),
				style: Bn({}, null == E ? void 0 : E.header)
			}, y.createElement("div", {
				className: "".concat(n, "-title"),
				id: i
			}, a)) : null,
			F = v.useMemo((function () {
				return "object" === Pn(s) && null !== s ? s : s ? {
					closeIcon: null != c ? c : y.createElement("span", {
						className: "".concat(n, "-close-x")
					})
				} : {}
			}), [s, c, n]),
			N = xc(F, !0),
			T = "object" === Pn(s) && s.disabled,
			I = s ? y.createElement("button", $n({
				type: "button",
				onClick: u,
				"aria-label": "Close"
			}, N, {
				className: "".concat(n, "-close"),
				disabled: T
			}), F.closeIcon) : null,
			L = y.createElement("div", {
				className: On("".concat(n, "-content"), null == C ? void 0 : C.content),
				style: null == E ? void 0 : E.content
			}, I, M, y.createElement("div", $n({
				className: On("".concat(n, "-body"), null == C ? void 0 : C.body),
				style: Bn(Bn({}, f), null == E ? void 0 : E.body)
			}, p), d), R);
		return y.createElement("div", {
			key: "dialog-element",
			role: "dialog",
			"aria-labelledby": a ? i : null,
			"aria-modal": "true",
			ref: $,
			style: Bn(Bn({}, o), _),
			className: On(n, r),
			onMouseDown: m,
			onMouseUp: g
		}, y.createElement("div", {
			ref: P,
			tabIndex: 0,
			style: Dp
		}, y.createElement(zp, {
			shouldUpdate: w || k
		}, h ? h(L) : L)), y.createElement("div", {
			tabIndex: 0,
			ref: j,
			style: Ap
		}))
	})),
	Bp = v.forwardRef((function (e, t) {
		var n = e.prefixCls,
			r = e.title,
			o = e.style,
			a = e.className,
			i = e.visible,
			l = e.forceRender,
			s = e.destroyOnClose,
			c = e.motionName,
			u = e.ariaId,
			d = e.onVisibleChanged,
			f = e.mousePosition,
			p = v.useRef(),
			h = Pr(v.useState(), 2),
			m = h[0],
			g = h[1],
			y = {};

		function b() {
			var e, t, n, r, o, a = (e = p.current, t = e.getBoundingClientRect(), n = {
				left: t.left,
				top: t.top
			}, r = e.ownerDocument, o = r.defaultView || r.parentWindow, n.left += Lp(o), n.top += Lp(o, !0), n);
			g(f && (f.x || f.y) ? "".concat(f.x - a.left, "px ").concat(f.y - a.top, "px") : "")
		}
		return m && (y.transformOrigin = m), v.createElement(xs, {
			visible: i,
			onVisibleChanged: d,
			onAppearPrepare: b,
			onEnterPrepare: b,
			forceRender: l,
			motionName: c,
			removeOnLeave: s,
			ref: p
		}, (function (i, l) {
			var s = i.className,
				c = i.style;
			return v.createElement(Hp, $n({}, e, {
				ref: t,
				title: r,
				ariaId: u,
				prefixCls: n,
				holderRef: l,
				style: Bn(Bn(Bn({}, c), o), y),
				className: On(a, s)
			}))
		}))
	}));
Bp.displayName = "Content";
var Up = function (e) {
		var t = e.prefixCls,
			n = e.style,
			r = e.visible,
			o = e.maskProps,
			a = e.motionName,
			i = e.className;
		return v.createElement(xs, {
			key: "mask",
			visible: r,
			motionName: a,
			leavedClassName: "".concat(t, "-mask-hidden")
		}, (function (e, r) {
			var a = e.className,
				l = e.style;
			return v.createElement("div", $n({
				ref: r,
				style: Bn(Bn({}, l), n),
				className: On("".concat(t, "-mask"), a, i)
			}, o))
		}))
	},
	Vp = function (e) {
		var t = e.prefixCls,
			n = void 0 === t ? "rc-dialog" : t,
			r = e.zIndex,
			o = e.visible,
			a = void 0 !== o && o,
			i = e.keyboard,
			l = void 0 === i || i,
			s = e.focusTriggerAfterClose,
			c = void 0 === s || s,
			u = e.wrapStyle,
			d = e.wrapClassName,
			f = e.wrapProps,
			p = e.onClose,
			h = e.afterOpenChange,
			m = e.afterClose,
			g = e.transitionName,
			y = e.animation,
			b = e.closable,
			w = void 0 === b || b,
			k = e.mask,
			x = void 0 === k || k,
			S = e.maskTransitionName,
			C = e.maskAnimation,
			E = e.maskClosable,
			O = void 0 === E || E,
			$ = e.maskStyle,
			P = e.maskProps,
			j = e.rootClassName,
			_ = e.classNames,
			R = e.styles,
			M = v.useRef(),
			F = v.useRef(),
			N = v.useRef(),
			T = Pr(v.useState(a), 2),
			I = T[0],
			L = T[1],
			z = Tp();

		function A(e) {
			null == p || p(e)
		}
		var D = v.useRef(!1),
			H = v.useRef(),
			B = null;
		O && (B = function (e) {
			D.current ? D.current = !1 : F.current === e.target && A(e)
		}), v.useEffect((function () {
			a && (L(!0), Rr(F.current, document.activeElement) || (M.current = document.activeElement))
		}), [a]), v.useEffect((function () {
			return function () {
				clearTimeout(H.current)
			}
		}), []);
		var U = Bn(Bn(Bn({
			zIndex: r
		}, u), null == R ? void 0 : R.wrapper), {}, {
			display: I ? null : "none"
		});
		return v.createElement("div", $n({
			className: On("".concat(n, "-root"), j)
		}, xc(e, {
			data: !0
		})), v.createElement(Up, {
			prefixCls: n,
			visible: x && a,
			motionName: Ip(n, S, C),
			style: Bn(Bn({
				zIndex: r
			}, $), null == R ? void 0 : R.mask),
			maskProps: P,
			className: null == _ ? void 0 : _.mask
		}), v.createElement("div", $n({
			tabIndex: -1,
			onKeyDown: function (e) {
				if (l && e.keyCode === zc.ESC) return e.stopPropagation(), void A(e);
				a && e.keyCode === zc.TAB && N.current.changeActive(!e.shiftKey)
			},
			className: On("".concat(n, "-wrap"), d, null == _ ? void 0 : _.wrapper),
			ref: F,
			onClick: B,
			style: U
		}, f), v.createElement(Bp, $n({}, e, {
			onMouseDown: function () {
				clearTimeout(H.current), D.current = !0
			},
			onMouseUp: function () {
				H.current = setTimeout((function () {
					D.current = !1
				}))
			},
			ref: N,
			closable: w,
			ariaId: z,
			prefixCls: n,
			visible: a && I,
			onClose: A,
			onVisibleChanged: function (e) {
				if (e) Rr(F.current, document.activeElement) || null === (t = N.current) || void 0 === t || t.focus();
				else {
					if (L(!1), x && M.current && c) {
						try {
							M.current.focus({
								preventScroll: !0
							})
						} catch (wS) {}
						M.current = null
					}
					I && (null == m || m())
				}
				var t;
				null == h || h(e)
			},
			motionName: Ip(n, g, y)
		}))))
	},
	Wp = function (e) {
		var t = e.visible,
			n = e.getContainer,
			r = e.forceRender,
			o = e.destroyOnClose,
			a = void 0 !== o && o,
			i = e.afterClose,
			l = e.panelRef,
			s = Pr(v.useState(t), 2),
			c = s[0],
			u = s[1],
			d = v.useMemo((function () {
				return {
					panel: l
				}
			}), [l]);
		return v.useEffect((function () {
			t && u(!0)
		}), [t]), r || !a || c ? v.createElement(Mp.Provider, {
			value: d
		}, v.createElement(Rp, {
			open: t || r || c,
			autoDestroy: !1,
			getContainer: n,
			autoLock: t || c
		}, v.createElement(Vp, $n({}, e, {
			destroyOnClose: a,
			afterClose: function () {
				null == i || i(), u(!1)
			}
		})))) : null
	};
Wp.displayName = "Dialog";
var qp = "RC_FORM_INTERNAL_HOOKS",
	Gp = function () {
		zn(!1, "Can not find FormContext. Please make sure you wrap Field under Form.")
	},
	Xp = v.createContext({
		getFieldValue: Gp,
		getFieldsValue: Gp,
		getFieldError: Gp,
		getFieldWarning: Gp,
		getFieldsError: Gp,
		isFieldsTouched: Gp,
		isFieldTouched: Gp,
		isFieldValidating: Gp,
		isFieldsValidating: Gp,
		resetFields: Gp,
		setFields: Gp,
		setFieldValue: Gp,
		setFieldsValue: Gp,
		validateFields: Gp,
		submit: Gp,
		getInternalHooks: function () {
			return Gp(), {
				dispatch: Gp,
				initEntityValue: Gp,
				registerField: Gp,
				useSubscribe: Gp,
				setInitialValues: Gp,
				destroyForm: Gp,
				setCallbacks: Gp,
				registerWatch: Gp,
				getFields: Gp,
				setValidateMessages: Gp,
				setPreserve: Gp,
				getInitialValue: Gp
			}
		}
	}),
	Kp = v.createContext(null);

function Qp(e) {
	return null == e ? [] : Array.isArray(e) ? e : [e]
}

function Yp() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid"
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s"
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters"
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s"
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length"
		},
		pattern: {
			mismatch: "%s value %s does not match pattern %s"
		},
		clone: function () {
			var e = JSON.parse(JSON.stringify(this));
			return e.clone = this.clone, e
		}
	}
}
var Zp = Yp();

function Jp(e) {
	var t = "function" == typeof Map ? new Map : void 0;
	return Jp = function (e) {
		if (null === e || ! function (e) {
				try {
					return -1 !== Function.toString.call(e).indexOf("[native code]")
				} catch (t) {
					return "function" == typeof e
				}
			}(e)) return e;
		if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== t) {
			if (t.has(e)) return t.get(e);
			t.set(e, n)
		}

		function n() {
			return function (e, t, n) {
				if (fr()) return Reflect.construct.apply(null, arguments);
				var r = [null];
				r.push.apply(r, t);
				var o = new(e.bind.apply(e, r));
				return n && cr(o, n.prototype), o
			}(e, arguments, dr(this).constructor)
		}
		return n.prototype = Object.create(e.prototype, {
			constructor: {
				value: n,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), cr(n, e)
	}, Jp(e)
}
var eh = /%[sdj%]/g;

function th(e) {
	if (!e || !e.length) return null;
	var t = {};
	return e.forEach((function (e) {
		var n = e.field;
		t[n] = t[n] || [], t[n].push(e)
	})), t
}

function nh(e) {
	for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	var o = 0,
		a = n.length;
	return "function" == typeof e ? e.apply(null, n) : "string" == typeof e ? e.replace(eh, (function (e) {
		if ("%%" === e) return "%";
		if (o >= a) return e;
		switch (e) {
			case "%s":
				return String(n[o++]);
			case "%d":
				return Number(n[o++]);
			case "%j":
				try {
					return JSON.stringify(n[o++])
				} catch (t) {
					return "[Circular]"
				}
				break;
			default:
				return e
		}
	})) : e
}

function rh(e, t) {
	return null == e || (!("array" !== t || !Array.isArray(e) || e.length) || !(! function (e) {
		return "string" === e || "url" === e || "hex" === e || "email" === e || "date" === e || "pattern" === e
	}(t) || "string" != typeof e || e))
}

function oh(e, t, n) {
	var r = 0,
		o = e.length;
	! function a(i) {
		if (i && i.length) n(i);
		else {
			var l = r;
			r += 1, l < o ? t(e[l], a) : n([])
		}
	}([])
}
var ah = function () {
	ur(t, Jp(Error));
	var e = mr(t);

	function t(n, r) {
		var o;
		return ir(this, t), Dn(pr(o = e.call(this, "Async Validation Error")), "errors", void 0), Dn(pr(o), "fields", void 0), o.errors = n, o.fields = r, o
	}
	return sr(t)
}();

function ih(e, t, n, r, o) {
	if (t.first) {
		var a = new Promise((function (t, a) {
			var i = function (e) {
				var t = [];
				return Object.keys(e).forEach((function (n) {
					t.push.apply(t, br(e[n] || []))
				})), t
			}(e);
			oh(i, n, (function (e) {
				return r(e), e.length ? a(new ah(e, th(e))) : t(o)
			}))
		}));
		return a.catch((function (e) {
			return e
		})), a
	}
	var i = !0 === t.firstFields ? Object.keys(e) : t.firstFields || [],
		l = Object.keys(e),
		s = l.length,
		c = 0,
		u = [],
		d = new Promise((function (t, a) {
			var d = function (e) {
				if (u.push.apply(u, e), ++c === s) return r(u), u.length ? a(new ah(u, th(u))) : t(o)
			};
			l.length || (r(u), t(o)), l.forEach((function (t) {
				var r = e[t]; - 1 !== i.indexOf(t) ? oh(r, n, d) : function (e, t, n) {
					var r = [],
						o = 0,
						a = e.length;

					function i(e) {
						r.push.apply(r, br(e || [])), ++o === a && n(r)
					}
					e.forEach((function (e) {
						t(e, i)
					}))
				}(r, n, d)
			}))
		}));
	return d.catch((function (e) {
		return e
	})), d
}

function lh(e, t) {
	return function (n) {
		var r, o;
		return r = e.fullFields ? function (e, t) {
			for (var n = e, r = 0; r < t.length; r++) {
				if (null == n) return n;
				n = n[t[r]]
			}
			return n
		}(t, e.fullFields) : t[n.field || e.fullField], (o = n) && void 0 !== o.message ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
			message: "function" == typeof n ? n() : n,
			fieldValue: r,
			field: n.field || e.fullField
		}
	}
}

function sh(e, t) {
	if (t)
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var r = t[n];
				"object" === Pn(r) && "object" === Pn(e[n]) ? e[n] = Bn(Bn({}, e[n]), r) : e[n] = r
			} return e
}
var ch, uh = "enum",
	dh = function (e, t, n, r, o, a) {
		!e.required || n.hasOwnProperty(e.field) && !rh(t, a || e.type) || r.push(nh(o.messages.required, e.fullField))
	};
var fh = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	ph = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
	hh = {
		integer: function (e) {
			return hh.number(e) && parseInt(e, 10) === e
		},
		float: function (e) {
			return hh.number(e) && !hh.integer(e)
		},
		array: function (e) {
			return Array.isArray(e)
		},
		regexp: function (e) {
			if (e instanceof RegExp) return !0;
			try {
				return !!new RegExp(e)
			} catch (wS) {
				return !1
			}
		},
		date: function (e) {
			return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear && !isNaN(e.getTime())
		},
		number: function (e) {
			return !isNaN(e) && "number" == typeof e
		},
		object: function (e) {
			return "object" === Pn(e) && !hh.array(e)
		},
		method: function (e) {
			return "function" == typeof e
		},
		email: function (e) {
			return "string" == typeof e && e.length <= 320 && !!e.match(fh)
		},
		url: function (e) {
			return "string" == typeof e && e.length <= 2048 && !!e.match(function () {
				if (ch) return ch;
				var e = "[a-fA-F\\d:]",
					t = function (t) {
						return t && t.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : ""
					},
					n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
					r = "[a-fA-F\\d]{1,4}",
					o = ["(?:".concat(r, ":){7}(?:").concat(r, "|:)"), "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"), "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"), "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"), "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"), "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"), "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"), "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")],
					a = "(?:".concat(o.join("|"), ")").concat("(?:%[0-9a-zA-Z]{1,})?"),
					i = new RegExp("(?:^".concat(n, "$)|(?:^").concat(a, "$)")),
					l = new RegExp("^".concat(n, "$")),
					s = new RegExp("^".concat(a, "$")),
					c = function (e) {
						return e && e.exact ? i : new RegExp("(?:".concat(t(e)).concat(n).concat(t(e), ")|(?:").concat(t(e)).concat(a).concat(t(e), ")"), "g")
					};
				c.v4 = function (e) {
					return e && e.exact ? l : new RegExp("".concat(t(e)).concat(n).concat(t(e)), "g")
				}, c.v6 = function (e) {
					return e && e.exact ? s : new RegExp("".concat(t(e)).concat(a).concat(t(e)), "g")
				};
				var u = c.v4().source,
					d = c.v6().source,
					f = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(u, "|").concat(d, "|").concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?');
				return ch = new RegExp("(?:^".concat(f, "$)"), "i")
			}())
		},
		hex: function (e) {
			return "string" == typeof e && !!e.match(ph)
		}
	};
const mh = {
	required: dh,
	whitespace: function (e, t, n, r, o) {
		(/^\s+$/.test(t) || "" === t) && r.push(nh(o.messages.whitespace, e.fullField))
	},
	type: function (e, t, n, r, o) {
		if (e.required && void 0 === t) dh(e, t, n, r, o);
		else {
			var a = e.type;
			["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(a) > -1 ? hh[a](t) || r.push(nh(o.messages.types[a], e.fullField, e.type)) : a && Pn(t) !== e.type && r.push(nh(o.messages.types[a], e.fullField, e.type))
		}
	},
	range: function (e, t, n, r, o) {
		var a = "number" == typeof e.len,
			i = "number" == typeof e.min,
			l = "number" == typeof e.max,
			s = t,
			c = null,
			u = "number" == typeof t,
			d = "string" == typeof t,
			f = Array.isArray(t);
		if (u ? c = "number" : d ? c = "string" : f && (c = "array"), !c) return !1;
		f && (s = t.length), d && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), a ? s !== e.len && r.push(nh(o.messages[c].len, e.fullField, e.len)) : i && !l && s < e.min ? r.push(nh(o.messages[c].min, e.fullField, e.min)) : l && !i && s > e.max ? r.push(nh(o.messages[c].max, e.fullField, e.max)) : i && l && (s < e.min || s > e.max) && r.push(nh(o.messages[c].range, e.fullField, e.min, e.max))
	},
	enum: function (e, t, n, r, o) {
		e[uh] = Array.isArray(e[uh]) ? e[uh] : [], -1 === e[uh].indexOf(t) && r.push(nh(o.messages[uh], e.fullField, e[uh].join(", ")))
	},
	pattern: function (e, t, n, r, o) {
		if (e.pattern)
			if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(nh(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
			else if ("string" == typeof e.pattern) {
			new RegExp(e.pattern).test(t) || r.push(nh(o.messages.pattern.mismatch, e.fullField, t, e.pattern))
		}
	}
};
var gh = function (e, t, n, r, o) {
	var a = e.type,
		i = [];
	if (e.required || !e.required && r.hasOwnProperty(e.field)) {
		if (rh(t, a) && !e.required) return n();
		mh.required(e, t, r, i, o, a), rh(t, a) || mh.type(e, t, r, i, o)
	}
	n(i)
};
const vh = {
	string: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t, "string") && !e.required) return n();
			mh.required(e, t, r, a, o, "string"), rh(t, "string") || (mh.type(e, t, r, a, o), mh.range(e, t, r, a, o), mh.pattern(e, t, r, a, o), !0 === e.whitespace && mh.whitespace(e, t, r, a, o))
		}
		n(a)
	},
	method: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && mh.type(e, t, r, a, o)
		}
		n(a)
	},
	number: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if ("" === t && (t = void 0), rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && (mh.type(e, t, r, a, o), mh.range(e, t, r, a, o))
		}
		n(a)
	},
	boolean: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && mh.type(e, t, r, a, o)
		}
		n(a)
	},
	regexp: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), rh(t) || mh.type(e, t, r, a, o)
		}
		n(a)
	},
	integer: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && (mh.type(e, t, r, a, o), mh.range(e, t, r, a, o))
		}
		n(a)
	},
	float: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && (mh.type(e, t, r, a, o), mh.range(e, t, r, a, o))
		}
		n(a)
	},
	array: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (null == t && !e.required) return n();
			mh.required(e, t, r, a, o, "array"), null != t && (mh.type(e, t, r, a, o), mh.range(e, t, r, a, o))
		}
		n(a)
	},
	object: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && mh.type(e, t, r, a, o)
		}
		n(a)
	},
	enum: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o), void 0 !== t && mh.enum(e, t, r, a, o)
		}
		n(a)
	},
	pattern: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t, "string") && !e.required) return n();
			mh.required(e, t, r, a, o), rh(t, "string") || mh.pattern(e, t, r, a, o)
		}
		n(a)
	},
	date: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t, "date") && !e.required) return n();
			var i;
			if (mh.required(e, t, r, a, o), !rh(t, "date")) i = t instanceof Date ? t : new Date(t), mh.type(e, i, r, a, o), i && mh.range(e, i.getTime(), r, a, o)
		}
		n(a)
	},
	url: gh,
	hex: gh,
	email: gh,
	required: function (e, t, n, r, o) {
		var a = [],
			i = Array.isArray(t) ? "array" : Pn(t);
		mh.required(e, t, r, a, o, i), n(a)
	},
	any: function (e, t, n, r, o) {
		var a = [];
		if (e.required || !e.required && r.hasOwnProperty(e.field)) {
			if (rh(t) && !e.required) return n();
			mh.required(e, t, r, a, o)
		}
		n(a)
	}
};
var yh = function () {
	function e(t) {
		ir(this, e), Dn(this, "rules", null), Dn(this, "_messages", Zp), this.define(t)
	}
	return sr(e, [{
		key: "define",
		value: function (e) {
			var t = this;
			if (!e) throw new Error("Cannot configure a schema with no rules");
			if ("object" !== Pn(e) || Array.isArray(e)) throw new Error("Rules must be an object");
			this.rules = {}, Object.keys(e).forEach((function (n) {
				var r = e[n];
				t.rules[n] = Array.isArray(r) ? r : [r]
			}))
		}
	}, {
		key: "messages",
		value: function (e) {
			return e && (this._messages = sh(Yp(), e)), this._messages
		}
	}, {
		key: "validate",
		value: function (t) {
			var n = this,
				r = t,
				o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
			if ("function" == typeof o && (a = o, o = {}), !this.rules || 0 === Object.keys(this.rules).length) return a && a(null, r), Promise.resolve(r);
			if (o.messages) {
				var i = this.messages();
				i === Zp && (i = Yp()), sh(i, o.messages), o.messages = i
			} else o.messages = this.messages();
			var l = {};
			(o.keys || Object.keys(this.rules)).forEach((function (e) {
				var o = n.rules[e],
					a = r[e];
				o.forEach((function (o) {
					var i = o;
					"function" == typeof i.transform && (r === t && (r = Bn({}, r)), null != (a = r[e] = i.transform(a)) && (i.type = i.type || (Array.isArray(a) ? "array" : Pn(a)))), (i = "function" == typeof i ? {
						validator: i
					} : Bn({}, i)).validator = n.getValidationMethod(i), i.validator && (i.field = e, i.fullField = i.fullField || e, i.type = n.getType(i), l[e] = l[e] || [], l[e].push({
						rule: i,
						value: a,
						source: r,
						field: e
					}))
				}))
			}));
			var s = {};
			return ih(l, o, (function (t, n) {
				var a, i = t.rule,
					l = !("object" !== i.type && "array" !== i.type || "object" !== Pn(i.fields) && "object" !== Pn(i.defaultField));

				function c(e, t) {
					return Bn(Bn({}, t), {}, {
						fullField: "".concat(i.fullField, ".").concat(e),
						fullFields: i.fullFields ? [].concat(br(i.fullFields), [e]) : [e]
					})
				}

				function u() {
					var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						u = Array.isArray(a) ? a : [a];
					!o.suppressWarning && u.length && e.warning("async-validator:", u), u.length && void 0 !== i.message && (u = [].concat(i.message));
					var d = u.map(lh(i, r));
					if (o.first && d.length) return s[i.field] = 1, n(d);
					if (l) {
						if (i.required && !t.value) return void 0 !== i.message ? d = [].concat(i.message).map(lh(i, r)) : o.error && (d = [o.error(i, nh(o.messages.required, i.field))]), n(d);
						var f = {};
						i.defaultField && Object.keys(t.value).map((function (e) {
							f[e] = i.defaultField
						})), f = Bn(Bn({}, f), t.rule.fields);
						var p = {};
						Object.keys(f).forEach((function (e) {
							var t = f[e],
								n = Array.isArray(t) ? t : [t];
							p[e] = n.map(c.bind(null, e))
						}));
						var h = new e(p);
						h.messages(o.messages), t.rule.options && (t.rule.options.messages = o.messages, t.rule.options.error = o.error), h.validate(t.value, t.rule.options || o, (function (e) {
							var t = [];
							d && d.length && t.push.apply(t, br(d)), e && e.length && t.push.apply(t, br(e)), n(t.length ? t : null)
						}))
					} else n(d)
				}
				if (l = l && (i.required || !i.required && t.value), i.field = t.field, i.asyncValidator) a = i.asyncValidator(i, t.value, u, t.source, o);
				else if (i.validator) {
					try {
						a = i.validator(i, t.value, u, t.source, o)
					} catch (p) {
						var d, f;
						null === (d = (f = console).error) || void 0 === d || d.call(f, p), o.suppressValidatorError || setTimeout((function () {
							throw p
						}), 0), u(p.message)
					}!0 === a ? u() : !1 === a ? u("function" == typeof i.message ? i.message(i.fullField || i.field) : i.message || "".concat(i.fullField || i.field, " fails")) : a instanceof Array ? u(a) : a instanceof Error && u(a.message)
				}
				a && a.then && a.then((function () {
					return u()
				}), (function (e) {
					return u(e)
				}))
			}), (function (e) {
				! function (e) {
					for (var t, n, o = [], i = {}, l = 0; l < e.length; l++) t = e[l], n = void 0, Array.isArray(t) ? o = (n = o).concat.apply(n, br(t)) : o.push(t);
					o.length ? (i = th(o), a(o, i)) : a(null, r)
				}(e)
			}), r)
		}
	}, {
		key: "getType",
		value: function (e) {
			if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !vh.hasOwnProperty(e.type)) throw new Error(nh("Unknown rule type %s", e.type));
			return e.type || "string"
		}
	}, {
		key: "getValidationMethod",
		value: function (e) {
			if ("function" == typeof e.validator) return e.validator;
			var t = Object.keys(e),
				n = t.indexOf("message");
			return -1 !== n && t.splice(n, 1), 1 === t.length && "required" === t[0] ? vh.required : vh[this.getType(e)] || void 0
		}
	}]), e
}();
Dn(yh, "register", (function (e, t) {
	if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
	vh[e] = t
})), Dn(yh, "warning", (function () {})), Dn(yh, "messages", Zp), Dn(yh, "validators", vh);
var bh = "'${name}' is not a valid ${type}",
	wh = {
		default: "Validation error on field '${name}'",
		required: "'${name}' is required",
		enum: "'${name}' must be one of [${enum}]",
		whitespace: "'${name}' cannot be empty",
		date: {
			format: "'${name}' is invalid for format date",
			parse: "'${name}' could not be parsed as date",
			invalid: "'${name}' is invalid date"
		},
		types: {
			string: bh,
			method: bh,
			array: bh,
			object: bh,
			number: bh,
			date: bh,
			boolean: bh,
			integer: bh,
			float: bh,
			regexp: bh,
			email: bh,
			url: bh,
			hex: bh
		},
		string: {
			len: "'${name}' must be exactly ${len} characters",
			min: "'${name}' must be at least ${min} characters",
			max: "'${name}' cannot be longer than ${max} characters",
			range: "'${name}' must be between ${min} and ${max} characters"
		},
		number: {
			len: "'${name}' must equal ${len}",
			min: "'${name}' cannot be less than ${min}",
			max: "'${name}' cannot be greater than ${max}",
			range: "'${name}' must be between ${min} and ${max}"
		},
		array: {
			len: "'${name}' must be exactly ${len} in length",
			min: "'${name}' cannot be less than ${min} in length",
			max: "'${name}' cannot be greater than ${max} in length",
			range: "'${name}' must be between ${min} and ${max} in length"
		},
		pattern: {
			mismatch: "'${name}' does not match pattern ${pattern}"
		}
	},
	kh = yh;

function xh(e, t) {
	return e.replace(/\\?\$\{\w+\}/g, (function (e) {
		if (e.startsWith("\\")) return e.slice(1);
		var n = e.slice(2, -1);
		return t[n]
	}))
}
var Sh = "CODE_LOGIC_ERROR";

function Ch(e, t, n, r, o) {
	return Eh.apply(this, arguments)
}

function Eh() {
	return Eh = $u(Eu().mark((function e(t, n, r, o, a) {
		var i, l, s, c, u, d, f, p, h;
		return Eu().wrap((function (e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return delete(i = Bn({}, r)).ruleIndex, kh.warning = function () {}, i.validator && (l = i.validator, i.validator = function () {
						try {
							return l.apply(void 0, arguments)
						} catch (e) {
							return console.error(e), Promise.reject(Sh)
						}
					}), s = null, i && "array" === i.type && i.defaultField && (s = i.defaultField, delete i.defaultField), c = new kh(Dn({}, t, [i])), u = Na(wh, o.validateMessages), c.messages(u), d = [], e.prev = 10, e.next = 13, Promise.resolve(c.validate(Dn({}, t, n), Bn({}, o)));
				case 13:
					e.next = 18;
					break;
				case 15:
					e.prev = 15, e.t0 = e.catch(10), e.t0.errors && (d = e.t0.errors.map((function (e, t) {
						var n = e.message,
							r = n === Sh ? u.default : n;
						return v.isValidElement(r) ? v.cloneElement(r, {
							key: "error_".concat(t)
						}) : r
					})));
				case 18:
					if (d.length || !s) {
						e.next = 23;
						break
					}
					return e.next = 21, Promise.all(n.map((function (e, n) {
						return Ch("".concat(t, ".").concat(n), e, s, o, a)
					})));
				case 21:
					return f = e.sent, e.abrupt("return", f.reduce((function (e, t) {
						return [].concat(br(e), br(t))
					}), []));
				case 23:
					return p = Bn(Bn({}, r), {}, {
						name: t,
						enum: (r.enum || []).join(", ")
					}, a), h = d.map((function (e) {
						return "string" == typeof e ? xh(e, p) : e
					})), e.abrupt("return", h);
				case 26:
				case "end":
					return e.stop()
			}
		}), e, null, [
			[10, 15]
		])
	}))), Eh.apply(this, arguments)
}

function Oh(e, t, n, r, o, a) {
	var i, l = e.join("."),
		s = n.map((function (e, t) {
			var n = e.validator,
				r = Bn(Bn({}, e), {}, {
					ruleIndex: t
				});
			return n && (r.validator = function (e, t, r) {
				var o = !1,
					a = n(e, t, (function () {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						Promise.resolve().then((function () {
							zn(!o, "Your validator function has already return a promise. `callback` will be ignored."), o || r.apply(void 0, t)
						}))
					}));
				zn(o = a && "function" == typeof a.then && "function" == typeof a.catch, "`callback` is deprecated. Please return a promise instead."), o && a.then((function () {
					r()
				})).catch((function (e) {
					r(e || " ")
				}))
			}), r
		})).sort((function (e, t) {
			var n = e.warningOnly,
				r = e.ruleIndex,
				o = t.warningOnly,
				a = t.ruleIndex;
			return !!n == !!o ? r - a : n ? 1 : -1
		}));
	if (!0 === o) i = new Promise(function () {
		var e = $u(Eu().mark((function e(n, o) {
			var i, c, u;
			return Eu().wrap((function (e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						i = 0;
					case 1:
						if (!(i < s.length)) {
							e.next = 12;
							break
						}
						return c = s[i], e.next = 5, Ch(l, t, c, r, a);
					case 5:
						if (!(u = e.sent).length) {
							e.next = 9;
							break
						}
						return o([{
							errors: u,
							rule: c
						}]), e.abrupt("return");
					case 9:
						i += 1, e.next = 1;
						break;
					case 12:
						n([]);
					case 13:
					case "end":
						return e.stop()
				}
			}), e)
		})));
		return function (t, n) {
			return e.apply(this, arguments)
		}
	}());
	else {
		var c = s.map((function (e) {
			return Ch(l, t, e, r, a).then((function (t) {
				return {
					errors: t,
					rule: e
				}
			}))
		}));
		i = (o ? function (e) {
			return Ph.apply(this, arguments)
		}(c) : function (e) {
			return $h.apply(this, arguments)
		}(c)).then((function (e) {
			return Promise.reject(e)
		}))
	}
	return i.catch((function (e) {
		return e
	})), i
}

function $h() {
	return ($h = $u(Eu().mark((function e(t) {
		return Eu().wrap((function (e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.abrupt("return", Promise.all(t).then((function (e) {
						var t;
						return (t = []).concat.apply(t, br(e))
					})));
				case 1:
				case "end":
					return e.stop()
			}
		}), e)
	})))).apply(this, arguments)
}

function Ph() {
	return (Ph = $u(Eu().mark((function e(t) {
		var n;
		return Eu().wrap((function (e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return n = 0, e.abrupt("return", new Promise((function (e) {
						t.forEach((function (r) {
							r.then((function (r) {
								r.errors.length && e([r]), (n += 1) === t.length && e([])
							}))
						}))
					})));
				case 2:
				case "end":
					return e.stop()
			}
		}), e)
	})))).apply(this, arguments)
}

function jh(e) {
	return Qp(e)
}

function _h(e, t) {
	var n = {};
	return t.forEach((function (t) {
		var r = ja(e, t);
		n = Ra(n, t, r)
	})), n
}

function Rh(e, t) {
	var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	return e && e.some((function (e) {
		return Mh(t, e, n)
	}))
}

function Mh(e, t) {
	return !(!e || !t) && (!(!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) && e.length !== t.length) && t.every((function (t, n) {
		return e[n] === t
	})))
}

function Fh(e) {
	var t = arguments.length <= 1 ? void 0 : arguments[1];
	return t && t.target && "object" === Pn(t.target) && e in t.target ? t.target[e] : t
}

function Nh(e, t, n) {
	var r = e.length;
	if (t < 0 || t >= r || n < 0 || n >= r) return e;
	var o = e[t],
		a = t - n;
	return a > 0 ? [].concat(br(e.slice(0, n)), [o], br(e.slice(n, t)), br(e.slice(t + 1, r))) : a < 0 ? [].concat(br(e.slice(0, t)), br(e.slice(t + 1, n + 1)), [o], br(e.slice(n + 1, r))) : e
}
var Th = ["name"],
	Ih = [];

function Lh(e, t, n, r, o, a) {
	return "function" == typeof e ? e(t, n, "source" in a ? {
		source: a.source
	} : {}) : r !== o
}
var zh = function () {
	ur(t, v.Component);
	var e = mr(t);

	function t(n) {
		var r;
		(ir(this, t), Dn(pr(r = e.call(this, n)), "state", {
			resetCount: 0
		}), Dn(pr(r), "cancelRegisterFunc", null), Dn(pr(r), "mounted", !1), Dn(pr(r), "touched", !1), Dn(pr(r), "dirty", !1), Dn(pr(r), "validatePromise", void 0), Dn(pr(r), "prevValidating", void 0), Dn(pr(r), "errors", Ih), Dn(pr(r), "warnings", Ih), Dn(pr(r), "cancelRegister", (function () {
			var e = r.props,
				t = e.preserve,
				n = e.isListField,
				o = e.name;
			r.cancelRegisterFunc && r.cancelRegisterFunc(n, t, jh(o)), r.cancelRegisterFunc = null
		})), Dn(pr(r), "getNamePath", (function () {
			var e = r.props,
				t = e.name,
				n = e.fieldContext.prefixName;
			return void 0 !== t ? [].concat(br(void 0 === n ? [] : n), br(t)) : []
		})), Dn(pr(r), "getRules", (function () {
			var e = r.props,
				t = e.rules,
				n = void 0 === t ? [] : t,
				o = e.fieldContext;
			return n.map((function (e) {
				return "function" == typeof e ? e(o) : e
			}))
		})), Dn(pr(r), "refresh", (function () {
			r.mounted && r.setState((function (e) {
				return {
					resetCount: e.resetCount + 1
				}
			}))
		})), Dn(pr(r), "metaCache", null), Dn(pr(r), "triggerMetaEvent", (function (e) {
			var t = r.props.onMetaChange;
			if (t) {
				var n = Bn(Bn({}, r.getMeta()), {}, {
					destroy: e
				});
				Vr(r.metaCache, n) || t(n), r.metaCache = n
			} else r.metaCache = null
		})), Dn(pr(r), "onStoreChange", (function (e, t, n) {
			var o = r.props,
				a = o.shouldUpdate,
				i = o.dependencies,
				l = void 0 === i ? [] : i,
				s = o.onReset,
				c = n.store,
				u = r.getNamePath(),
				d = r.getValue(e),
				f = r.getValue(c),
				p = t && Rh(t, u);
			switch ("valueUpdate" !== n.type || "external" !== n.source || Vr(d, f) || (r.touched = !0, r.dirty = !0, r.validatePromise = null, r.errors = Ih, r.warnings = Ih, r.triggerMetaEvent()), n.type) {
				case "reset":
					if (!t || p) return r.touched = !1, r.dirty = !1, r.validatePromise = void 0, r.errors = Ih, r.warnings = Ih, r.triggerMetaEvent(), null == s || s(), void r.refresh();
					break;
				case "remove":
					if (a && Lh(a, e, c, d, f, n)) return void r.reRender();
					break;
				case "setField":
					var h = n.data;
					if (p) return "touched" in h && (r.touched = h.touched), "validating" in h && !("originRCField" in h) && (r.validatePromise = h.validating ? Promise.resolve([]) : null), "errors" in h && (r.errors = h.errors || Ih), "warnings" in h && (r.warnings = h.warnings || Ih), r.dirty = !0, r.triggerMetaEvent(), void r.reRender();
					if ("value" in h && Rh(t, u, !0)) return void r.reRender();
					if (a && !u.length && Lh(a, e, c, d, f, n)) return void r.reRender();
					break;
				case "dependenciesUpdate":
					if (l.map(jh).some((function (e) {
							return Rh(n.relatedFields, e)
						}))) return void r.reRender();
					break;
				default:
					if (p || (!l.length || u.length || a) && Lh(a, e, c, d, f, n)) return void r.reRender()
			}!0 === a && r.reRender()
		})), Dn(pr(r), "validateRules", (function (e) {
			var t = r.getNamePath(),
				n = r.getValue(),
				o = e || {},
				a = o.triggerName,
				i = o.validateOnly,
				l = void 0 !== i && i,
				s = Promise.resolve().then($u(Eu().mark((function o() {
					var i, l, c, u, d, f, p;
					return Eu().wrap((function (o) {
						for (;;) switch (o.prev = o.next) {
							case 0:
								if (r.mounted) {
									o.next = 2;
									break
								}
								return o.abrupt("return", []);
							case 2:
								if (i = r.props, l = i.validateFirst, c = void 0 !== l && l, u = i.messageVariables, d = i.validateDebounce, f = r.getRules(), a && (f = f.filter((function (e) {
										return e
									})).filter((function (e) {
										var t = e.validateTrigger;
										return !t || Qp(t).includes(a)
									}))), !d || !a) {
									o.next = 10;
									break
								}
								return o.next = 8, new Promise((function (e) {
									setTimeout(e, d)
								}));
							case 8:
								if (r.validatePromise === s) {
									o.next = 10;
									break
								}
								return o.abrupt("return", []);
							case 10:
								return (p = Oh(t, n, f, e, c, u)).catch((function (e) {
									return e
								})).then((function () {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih;
									if (r.validatePromise === s) {
										var t;
										r.validatePromise = null;
										var n = [],
											o = [];
										null === (t = e.forEach) || void 0 === t || t.call(e, (function (e) {
											var t = e.rule.warningOnly,
												r = e.errors,
												a = void 0 === r ? Ih : r;
											t ? o.push.apply(o, br(a)) : n.push.apply(n, br(a))
										})), r.errors = n, r.warnings = o, r.triggerMetaEvent(), r.reRender()
									}
								})), o.abrupt("return", p);
							case 13:
							case "end":
								return o.stop()
						}
					}), o)
				}))));
			return l || (r.validatePromise = s, r.dirty = !0, r.errors = Ih, r.warnings = Ih, r.triggerMetaEvent(), r.reRender()), s
		})), Dn(pr(r), "isFieldValidating", (function () {
			return !!r.validatePromise
		})), Dn(pr(r), "isFieldTouched", (function () {
			return r.touched
		})), Dn(pr(r), "isFieldDirty", (function () {
			return !(!r.dirty && void 0 === r.props.initialValue) || void 0 !== (0, r.props.fieldContext.getInternalHooks(qp).getInitialValue)(r.getNamePath())
		})), Dn(pr(r), "getErrors", (function () {
			return r.errors
		})), Dn(pr(r), "getWarnings", (function () {
			return r.warnings
		})), Dn(pr(r), "isListField", (function () {
			return r.props.isListField
		})), Dn(pr(r), "isList", (function () {
			return r.props.isList
		})), Dn(pr(r), "isPreserve", (function () {
			return r.props.preserve
		})), Dn(pr(r), "getMeta", (function () {
			return r.prevValidating = r.isFieldValidating(), {
				touched: r.isFieldTouched(),
				validating: r.prevValidating,
				errors: r.errors,
				warnings: r.warnings,
				name: r.getNamePath(),
				validated: null === r.validatePromise
			}
		})), Dn(pr(r), "getOnlyChild", (function (e) {
			if ("function" == typeof e) {
				var t = r.getMeta();
				return Bn(Bn({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {
					isFunction: !0
				})
			}
			var n = Fn(e);
			return 1 === n.length && v.isValidElement(n[0]) ? {
				child: n[0],
				isFunction: !1
			} : {
				child: n,
				isFunction: !1
			}
		})), Dn(pr(r), "getValue", (function (e) {
			var t = r.props.fieldContext.getFieldsValue,
				n = r.getNamePath();
			return ja(e || t(!0), n)
		})), Dn(pr(r), "getControlled", (function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = r.props,
				n = t.name,
				o = t.trigger,
				a = t.validateTrigger,
				i = t.getValueFromEvent,
				l = t.normalize,
				s = t.valuePropName,
				c = t.getValueProps,
				u = t.fieldContext,
				d = void 0 !== a ? a : u.validateTrigger,
				f = r.getNamePath(),
				p = u.getInternalHooks,
				h = u.getFieldsValue,
				m = p(qp).dispatch,
				g = r.getValue(),
				v = c || function (e) {
					return Dn({}, s, e)
				},
				y = e[o],
				b = void 0 !== n ? v(g) : {},
				w = Bn(Bn({}, e), b);
			return w[o] = function () {
				var e;
				r.touched = !0, r.dirty = !0, r.triggerMetaEvent();
				for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
				e = i ? i.apply(void 0, n) : Fh.apply(void 0, [s].concat(n)), l && (e = l(e, g, h(!0))), e !== g && m({
					type: "updateValue",
					namePath: f,
					value: e
				}), y && y.apply(void 0, n)
			}, Qp(d || []).forEach((function (e) {
				var t = w[e];
				w[e] = function () {
					t && t.apply(void 0, arguments);
					var n = r.props.rules;
					n && n.length && m({
						type: "validateField",
						namePath: f,
						triggerName: e
					})
				}
			})), w
		})), n.fieldContext) && (0, (0, n.fieldContext.getInternalHooks)(qp).initEntityValue)(pr(r));
		return r
	}
	return sr(t, [{
		key: "componentDidMount",
		value: function () {
			var e = this.props,
				t = e.shouldUpdate,
				n = e.fieldContext;
			if (this.mounted = !0, n) {
				var r = (0, n.getInternalHooks)(qp).registerField;
				this.cancelRegisterFunc = r(this)
			}!0 === t && this.reRender()
		}
	}, {
		key: "componentWillUnmount",
		value: function () {
			this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1
		}
	}, {
		key: "reRender",
		value: function () {
			this.mounted && this.forceUpdate()
		}
	}, {
		key: "render",
		value: function () {
			var e, t = this.state.resetCount,
				n = this.props.children,
				r = this.getOnlyChild(n),
				o = r.child;
			return r.isFunction ? e = o : v.isValidElement(o) ? e = v.cloneElement(o, this.getControlled(o.props)) : (zn(!o, "`children` of Field is not validate ReactElement."), e = o), v.createElement(v.Fragment, {
				key: t
			}, e)
		}
	}]), t
}();

function Ah(e) {
	var t, n = e.name,
		r = Ur(e, Th),
		o = v.useContext(Xp),
		a = v.useContext(Kp),
		i = void 0 !== n ? jh(n) : void 0,
		l = null !== (t = r.isListField) && void 0 !== t ? t : !!a,
		s = "keep";
	return l || (s = "_".concat((i || []).join("_"))), v.createElement(zh, $n({
		key: s,
		name: i,
		isListField: l
	}, r, {
		fieldContext: o
	}))
}
Dn(zh, "contextType", Xp), Dn(zh, "defaultProps", {
	trigger: "onChange",
	valuePropName: "value"
});
var Dh = "__@field_split__";

function Hh(e) {
	return e.map((function (e) {
		return "".concat(Pn(e), ":").concat(e)
	})).join(Dh)
}
var Bh = function () {
		function e() {
			ir(this, e), Dn(this, "kvs", new Map)
		}
		return sr(e, [{
			key: "set",
			value: function (e, t) {
				this.kvs.set(Hh(e), t)
			}
		}, {
			key: "get",
			value: function (e) {
				return this.kvs.get(Hh(e))
			}
		}, {
			key: "update",
			value: function (e, t) {
				var n = t(this.get(e));
				n ? this.set(e, n) : this.delete(e)
			}
		}, {
			key: "delete",
			value: function (e) {
				this.kvs.delete(Hh(e))
			}
		}, {
			key: "map",
			value: function (e) {
				return br(this.kvs.entries()).map((function (t) {
					var n = Pr(t, 2),
						r = n[0],
						o = n[1],
						a = r.split(Dh);
					return e({
						key: a.map((function (e) {
							var t = Pr(e.match(/^([^:]*):(.*)$/), 3),
								n = t[1],
								r = t[2];
							return "number" === n ? Number(r) : r
						})),
						value: o
					})
				}))
			}
		}, {
			key: "toJSON",
			value: function () {
				var e = {};
				return this.map((function (t) {
					var n = t.key,
						r = t.value;
					return e[n.join(".")] = r, null
				})), e
			}
		}]), e
	}(),
	Uh = ["name"],
	Vh = sr((function e(t) {
		var n = this;
		ir(this, e), Dn(this, "formHooked", !1), Dn(this, "forceRootUpdate", void 0), Dn(this, "subscribable", !0), Dn(this, "store", {}), Dn(this, "fieldEntities", []), Dn(this, "initialValues", {}), Dn(this, "callbacks", {}), Dn(this, "validateMessages", null), Dn(this, "preserve", null), Dn(this, "lastValidatePromise", null), Dn(this, "getForm", (function () {
			return {
				getFieldValue: n.getFieldValue,
				getFieldsValue: n.getFieldsValue,
				getFieldError: n.getFieldError,
				getFieldWarning: n.getFieldWarning,
				getFieldsError: n.getFieldsError,
				isFieldsTouched: n.isFieldsTouched,
				isFieldTouched: n.isFieldTouched,
				isFieldValidating: n.isFieldValidating,
				isFieldsValidating: n.isFieldsValidating,
				resetFields: n.resetFields,
				setFields: n.setFields,
				setFieldValue: n.setFieldValue,
				setFieldsValue: n.setFieldsValue,
				validateFields: n.validateFields,
				submit: n.submit,
				_init: !0,
				getInternalHooks: n.getInternalHooks
			}
		})), Dn(this, "getInternalHooks", (function (e) {
			return e === qp ? (n.formHooked = !0, {
				dispatch: n.dispatch,
				initEntityValue: n.initEntityValue,
				registerField: n.registerField,
				useSubscribe: n.useSubscribe,
				setInitialValues: n.setInitialValues,
				destroyForm: n.destroyForm,
				setCallbacks: n.setCallbacks,
				setValidateMessages: n.setValidateMessages,
				getFields: n.getFields,
				setPreserve: n.setPreserve,
				getInitialValue: n.getInitialValue,
				registerWatch: n.registerWatch
			}) : (zn(!1, "`getInternalHooks` is internal usage. Should not call directly."), null)
		})), Dn(this, "useSubscribe", (function (e) {
			n.subscribable = e
		})), Dn(this, "prevWithoutPreserves", null), Dn(this, "setInitialValues", (function (e, t) {
			if (n.initialValues = e || {}, t) {
				var r, o = Na(e, n.store);
				null === (r = n.prevWithoutPreserves) || void 0 === r || r.map((function (t) {
					var n = t.key;
					o = Ra(o, n, ja(e, n))
				})), n.prevWithoutPreserves = null, n.updateStore(o)
			}
		})), Dn(this, "destroyForm", (function (e) {
			if (e) n.updateStore({});
			else {
				var t = new Bh;
				n.getFieldEntities(!0).forEach((function (e) {
					n.isMergedPreserve(e.isPreserve()) || t.set(e.getNamePath(), !0)
				})), n.prevWithoutPreserves = t
			}
		})), Dn(this, "getInitialValue", (function (e) {
			var t = ja(n.initialValues, e);
			return e.length ? Na(t) : t
		})), Dn(this, "setCallbacks", (function (e) {
			n.callbacks = e
		})), Dn(this, "setValidateMessages", (function (e) {
			n.validateMessages = e
		})), Dn(this, "setPreserve", (function (e) {
			n.preserve = e
		})), Dn(this, "watchList", []), Dn(this, "registerWatch", (function (e) {
			return n.watchList.push(e),
				function () {
					n.watchList = n.watchList.filter((function (t) {
						return t !== e
					}))
				}
		})), Dn(this, "notifyWatch", (function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			if (n.watchList.length) {
				var t = n.getFieldsValue(),
					r = n.getFieldsValue(!0);
				n.watchList.forEach((function (n) {
					n(t, r, e)
				}))
			}
		})), Dn(this, "timeoutId", null), Dn(this, "warningUnhooked", (function () {})), Dn(this, "updateStore", (function (e) {
			n.store = e
		})), Dn(this, "getFieldEntities", (function () {
			return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? n.fieldEntities.filter((function (e) {
				return e.getNamePath().length
			})) : n.fieldEntities
		})), Dn(this, "getFieldsMap", (function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
				t = new Bh;
			return n.getFieldEntities(e).forEach((function (e) {
				var n = e.getNamePath();
				t.set(n, e)
			})), t
		})), Dn(this, "getFieldEntitiesForNamePathList", (function (e) {
			if (!e) return n.getFieldEntities(!0);
			var t = n.getFieldsMap(!0);
			return e.map((function (e) {
				var n = jh(e);
				return t.get(n) || {
					INVALIDATE_NAME_PATH: jh(e)
				}
			}))
		})), Dn(this, "getFieldsValue", (function (e, t) {
			var r, o, a;
			if (n.warningUnhooked(), !0 === e || Array.isArray(e) ? (r = e, o = t) : e && "object" === Pn(e) && (a = e.strict, o = e.filter), !0 === r && !o) return n.store;
			var i = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
				l = [];
			return i.forEach((function (e) {
				var t, n, i, s, c = "INVALIDATE_NAME_PATH" in e ? e.INVALIDATE_NAME_PATH : e.getNamePath();
				if (a) {
					if (null !== (i = (s = e).isList) && void 0 !== i && i.call(s)) return
				} else if (!r && null !== (t = (n = e).isListField) && void 0 !== t && t.call(n)) return;
				if (o) {
					var u = "getMeta" in e ? e.getMeta() : null;
					o(u) && l.push(c)
				} else l.push(c)
			})), _h(n.store, l.map(jh))
		})), Dn(this, "getFieldValue", (function (e) {
			n.warningUnhooked();
			var t = jh(e);
			return ja(n.store, t)
		})), Dn(this, "getFieldsError", (function (e) {
			return n.warningUnhooked(), n.getFieldEntitiesForNamePathList(e).map((function (t, n) {
				return t && !("INVALIDATE_NAME_PATH" in t) ? {
					name: t.getNamePath(),
					errors: t.getErrors(),
					warnings: t.getWarnings()
				} : {
					name: jh(e[n]),
					errors: [],
					warnings: []
				}
			}))
		})), Dn(this, "getFieldError", (function (e) {
			n.warningUnhooked();
			var t = jh(e);
			return n.getFieldsError([t])[0].errors
		})), Dn(this, "getFieldWarning", (function (e) {
			n.warningUnhooked();
			var t = jh(e);
			return n.getFieldsError([t])[0].warnings
		})), Dn(this, "isFieldsTouched", (function () {
			n.warningUnhooked();
			for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			var o, a = t[0],
				i = t[1],
				l = !1;
			0 === t.length ? o = null : 1 === t.length ? Array.isArray(a) ? (o = a.map(jh), l = !1) : (o = null, l = a) : (o = a.map(jh), l = i);
			var s = n.getFieldEntities(!0),
				c = function (e) {
					return e.isFieldTouched()
				};
			if (!o) return l ? s.every((function (e) {
				return c(e) || e.isList()
			})) : s.some(c);
			var u = new Bh;
			o.forEach((function (e) {
				u.set(e, [])
			})), s.forEach((function (e) {
				var t = e.getNamePath();
				o.forEach((function (n) {
					n.every((function (e, n) {
						return t[n] === e
					})) && u.update(n, (function (t) {
						return [].concat(br(t), [e])
					}))
				}))
			}));
			var d = function (e) {
					return e.some(c)
				},
				f = u.map((function (e) {
					return e.value
				}));
			return l ? f.every(d) : f.some(d)
		})), Dn(this, "isFieldTouched", (function (e) {
			return n.warningUnhooked(), n.isFieldsTouched([e])
		})), Dn(this, "isFieldsValidating", (function (e) {
			n.warningUnhooked();
			var t = n.getFieldEntities();
			if (!e) return t.some((function (e) {
				return e.isFieldValidating()
			}));
			var r = e.map(jh);
			return t.some((function (e) {
				var t = e.getNamePath();
				return Rh(r, t) && e.isFieldValidating()
			}))
		})), Dn(this, "isFieldValidating", (function (e) {
			return n.warningUnhooked(), n.isFieldsValidating([e])
		})), Dn(this, "resetWithFieldInitialValue", (function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = new Bh,
				r = n.getFieldEntities(!0);
			r.forEach((function (e) {
				var n = e.props.initialValue,
					r = e.getNamePath();
				if (void 0 !== n) {
					var o = t.get(r) || new Set;
					o.add({
						entity: e,
						value: n
					}), t.set(r, o)
				}
			}));
			var o;
			e.entities ? o = e.entities : e.namePathList ? (o = [], e.namePathList.forEach((function (e) {
				var n, r = t.get(e);
				r && (n = o).push.apply(n, br(br(r).map((function (e) {
					return e.entity
				}))))
			}))) : o = r, o.forEach((function (r) {
				if (void 0 !== r.props.initialValue) {
					var o = r.getNamePath();
					if (void 0 !== n.getInitialValue(o)) zn(!1, "Form already set 'initialValues' with path '".concat(o.join("."), "'. Field can not overwrite it."));
					else {
						var a = t.get(o);
						if (a && a.size > 1) zn(!1, "Multiple Field with path '".concat(o.join("."), "' set 'initialValue'. Can not decide which one to pick."));
						else if (a) {
							var i = n.getFieldValue(o);
							r.isListField() || e.skipExist && void 0 !== i || n.updateStore(Ra(n.store, o, br(a)[0].value))
						}
					}
				}
			}))
		})), Dn(this, "resetFields", (function (e) {
			n.warningUnhooked();
			var t = n.store;
			if (!e) return n.updateStore(Na(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(t, null, {
				type: "reset"
			}), void n.notifyWatch();
			var r = e.map(jh);
			r.forEach((function (e) {
				var t = n.getInitialValue(e);
				n.updateStore(Ra(n.store, e, t))
			})), n.resetWithFieldInitialValue({
				namePathList: r
			}), n.notifyObservers(t, r, {
				type: "reset"
			}), n.notifyWatch(r)
		})), Dn(this, "setFields", (function (e) {
			n.warningUnhooked();
			var t = n.store,
				r = [];
			e.forEach((function (e) {
				var o = e.name,
					a = Ur(e, Uh),
					i = jh(o);
				r.push(i), "value" in a && n.updateStore(Ra(n.store, i, a.value)), n.notifyObservers(t, [i], {
					type: "setField",
					data: e
				})
			})), n.notifyWatch(r)
		})), Dn(this, "getFields", (function () {
			return n.getFieldEntities(!0).map((function (e) {
				var t = e.getNamePath(),
					r = Bn(Bn({}, e.getMeta()), {}, {
						name: t,
						value: n.getFieldValue(t)
					});
				return Object.defineProperty(r, "originRCField", {
					value: !0
				}), r
			}))
		})), Dn(this, "initEntityValue", (function (e) {
			var t = e.props.initialValue;
			if (void 0 !== t) {
				var r = e.getNamePath();
				void 0 === ja(n.store, r) && n.updateStore(Ra(n.store, r, t))
			}
		})), Dn(this, "isMergedPreserve", (function (e) {
			var t = void 0 !== e ? e : n.preserve;
			return null == t || t
		})), Dn(this, "registerField", (function (e) {
			n.fieldEntities.push(e);
			var t = e.getNamePath();
			if (n.notifyWatch([t]), void 0 !== e.props.initialValue) {
				var r = n.store;
				n.resetWithFieldInitialValue({
					entities: [e],
					skipExist: !0
				}), n.notifyObservers(r, [e.getNamePath()], {
					type: "valueUpdate",
					source: "internal"
				})
			}
			return function (r, o) {
				var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
				if (n.fieldEntities = n.fieldEntities.filter((function (t) {
						return t !== e
					})), !n.isMergedPreserve(o) && (!r || a.length > 1)) {
					var i = r ? void 0 : n.getInitialValue(t);
					if (t.length && n.getFieldValue(t) !== i && n.fieldEntities.every((function (e) {
							return !Mh(e.getNamePath(), t)
						}))) {
						var l = n.store;
						n.updateStore(Ra(l, t, i, !0)), n.notifyObservers(l, [t], {
							type: "remove"
						}), n.triggerDependenciesUpdate(l, t)
					}
				}
				n.notifyWatch([t])
			}
		})), Dn(this, "dispatch", (function (e) {
			switch (e.type) {
				case "updateValue":
					var t = e.namePath,
						r = e.value;
					n.updateValue(t, r);
					break;
				case "validateField":
					var o = e.namePath,
						a = e.triggerName;
					n.validateFields([o], {
						triggerName: a
					})
			}
		})), Dn(this, "notifyObservers", (function (e, t, r) {
			if (n.subscribable) {
				var o = Bn(Bn({}, r), {}, {
					store: n.getFieldsValue(!0)
				});
				n.getFieldEntities().forEach((function (n) {
					(0, n.onStoreChange)(e, t, o)
				}))
			} else n.forceRootUpdate()
		})), Dn(this, "triggerDependenciesUpdate", (function (e, t) {
			var r = n.getDependencyChildrenFields(t);
			return r.length && n.validateFields(r), n.notifyObservers(e, r, {
				type: "dependenciesUpdate",
				relatedFields: [t].concat(br(r))
			}), r
		})), Dn(this, "updateValue", (function (e, t) {
			var r = jh(e),
				o = n.store;
			n.updateStore(Ra(n.store, r, t)), n.notifyObservers(o, [r], {
				type: "valueUpdate",
				source: "internal"
			}), n.notifyWatch([r]);
			var a = n.triggerDependenciesUpdate(o, r),
				i = n.callbacks.onValuesChange;
			i && i(_h(n.store, [r]), n.getFieldsValue());
			n.triggerOnFieldsChange([r].concat(br(a)))
		})), Dn(this, "setFieldsValue", (function (e) {
			n.warningUnhooked();
			var t = n.store;
			if (e) {
				var r = Na(n.store, e);
				n.updateStore(r)
			}
			n.notifyObservers(t, null, {
				type: "valueUpdate",
				source: "external"
			}), n.notifyWatch()
		})), Dn(this, "setFieldValue", (function (e, t) {
			n.setFields([{
				name: e,
				value: t,
				errors: [],
				warnings: []
			}])
		})), Dn(this, "getDependencyChildrenFields", (function (e) {
			var t = new Set,
				r = [],
				o = new Bh;
			n.getFieldEntities().forEach((function (e) {
				(e.props.dependencies || []).forEach((function (t) {
					var n = jh(t);
					o.update(n, (function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set;
						return t.add(e), t
					}))
				}))
			}));
			return function e(n) {
				(o.get(n) || new Set).forEach((function (n) {
					if (!t.has(n)) {
						t.add(n);
						var o = n.getNamePath();
						n.isFieldDirty() && o.length && (r.push(o), e(o))
					}
				}))
			}(e), r
		})), Dn(this, "triggerOnFieldsChange", (function (e, t) {
			var r = n.callbacks.onFieldsChange;
			if (r) {
				var o = n.getFields();
				if (t) {
					var a = new Bh;
					t.forEach((function (e) {
						var t = e.name,
							n = e.errors;
						a.set(t, n)
					})), o.forEach((function (e) {
						e.errors = a.get(e.name) || e.errors
					}))
				}
				var i = o.filter((function (t) {
					var n = t.name;
					return Rh(e, n)
				}));
				i.length && r(i, o)
			}
		})), Dn(this, "validateFields", (function (e, t) {
			var r, o;
			n.warningUnhooked(), Array.isArray(e) || "string" == typeof e || "string" == typeof t ? (r = e, o = t) : o = e;
			var a = !!r,
				i = a ? r.map(jh) : [],
				l = [],
				s = String(Date.now()),
				c = new Set,
				u = o || {},
				d = u.recursive,
				f = u.dirty;
			n.getFieldEntities(!0).forEach((function (e) {
				if (a || i.push(e.getNamePath()), e.props.rules && e.props.rules.length && (!f || e.isFieldDirty())) {
					var t = e.getNamePath();
					if (c.add(t.join(s)), !a || Rh(i, t, d)) {
						var r = e.validateRules(Bn({
							validateMessages: Bn(Bn({}, wh), n.validateMessages)
						}, o));
						l.push(r.then((function () {
							return {
								name: t,
								errors: [],
								warnings: []
							}
						})).catch((function (e) {
							var n, r = [],
								o = [];
							return null === (n = e.forEach) || void 0 === n || n.call(e, (function (e) {
								var t = e.rule.warningOnly,
									n = e.errors;
								t ? o.push.apply(o, br(n)) : r.push.apply(r, br(n))
							})), r.length ? Promise.reject({
								name: t,
								errors: r,
								warnings: o
							}) : {
								name: t,
								errors: r,
								warnings: o
							}
						})))
					}
				}
			}));
			var p = function (e) {
				var t = !1,
					n = e.length,
					r = [];
				return e.length ? new Promise((function (o, a) {
					e.forEach((function (e, i) {
						e.catch((function (e) {
							return t = !0, e
						})).then((function (e) {
							n -= 1, r[i] = e, n > 0 || (t && a(r), o(r))
						}))
					}))
				})) : Promise.resolve([])
			}(l);
			n.lastValidatePromise = p, p.catch((function (e) {
				return e
			})).then((function (e) {
				var t = e.map((function (e) {
					return e.name
				}));
				n.notifyObservers(n.store, t, {
					type: "validateFinish"
				}), n.triggerOnFieldsChange(t, e)
			}));
			var h = p.then((function () {
				return n.lastValidatePromise === p ? Promise.resolve(n.getFieldsValue(i)) : Promise.reject([])
			})).catch((function (e) {
				var t = e.filter((function (e) {
					return e && e.errors.length
				}));
				return Promise.reject({
					values: n.getFieldsValue(i),
					errorFields: t,
					outOfDate: n.lastValidatePromise !== p
				})
			}));
			h.catch((function (e) {
				return e
			}));
			var m = i.filter((function (e) {
				return c.has(e.join(s))
			}));
			return n.triggerOnFieldsChange(m), h
		})), Dn(this, "submit", (function () {
			n.warningUnhooked(), n.validateFields().then((function (e) {
				var t = n.callbacks.onFinish;
				if (t) try {
					t(e)
				} catch (r) {
					console.error(r)
				}
			})).catch((function (e) {
				var t = n.callbacks.onFinishFailed;
				t && t(e)
			}))
		})), this.forceRootUpdate = t
	}));

function Wh(e) {
	var t = v.useRef(),
		n = Pr(v.useState({}), 2)[1];
	if (!t.current)
		if (e) t.current = e;
		else {
			var r = new Vh((function () {
				n({})
			}));
			t.current = r.getForm()
		} return [t.current]
}
var qh = v.createContext({
		triggerFormChange: function () {},
		triggerFormFinish: function () {},
		registerForm: function () {},
		unregisterForm: function () {}
	}),
	Gh = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"],
	Xh = function (e, t) {
		var n = e.name,
			r = e.initialValues,
			o = e.fields,
			a = e.form,
			i = e.preserve,
			l = e.children,
			s = e.component,
			c = void 0 === s ? "form" : s,
			u = e.validateMessages,
			d = e.validateTrigger,
			f = void 0 === d ? "onChange" : d,
			p = e.onValuesChange,
			h = e.onFieldsChange,
			m = e.onFinish,
			g = e.onFinishFailed,
			y = e.clearOnDestroy,
			b = Ur(e, Gh),
			w = v.useRef(null),
			k = v.useContext(qh),
			x = Pr(Wh(a), 1)[0],
			S = x.getInternalHooks(qp),
			C = S.useSubscribe,
			E = S.setInitialValues,
			O = S.setCallbacks,
			$ = S.setValidateMessages,
			P = S.setPreserve,
			j = S.destroyForm;
		v.useImperativeHandle(t, (function () {
			return Bn(Bn({}, x), {}, {
				nativeElement: w.current
			})
		})), v.useEffect((function () {
			return k.registerForm(n, x),
				function () {
					k.unregisterForm(n)
				}
		}), [k, x, n]), $(Bn(Bn({}, k.validateMessages), u)), O({
			onValuesChange: p,
			onFieldsChange: function (e) {
				if (k.triggerFormChange(n, e), h) {
					for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
					h.apply(void 0, [e].concat(r))
				}
			},
			onFinish: function (e) {
				k.triggerFormFinish(n, e), m && m(e)
			},
			onFinishFailed: g
		}), P(i);
		var _, R = v.useRef(null);
		E(r, !R.current), R.current || (R.current = !0), v.useEffect((function () {
			return function () {
				return j(y)
			}
		}), []);
		var M = "function" == typeof l;
		M ? _ = l(x.getFieldsValue(!0), x) : _ = l;
		C(!M);
		var F = v.useRef();
		v.useEffect((function () {
			(function (e, t) {
				if (e === t) return !0;
				if (!e && t || e && !t) return !1;
				if (!e || !t || "object" !== Pn(e) || "object" !== Pn(t)) return !1;
				var n = Object.keys(e),
					r = Object.keys(t);
				return br(new Set([].concat(n, r))).every((function (n) {
					var r = e[n],
						o = t[n];
					return "function" == typeof r && "function" == typeof o || r === o
				}))
			})(F.current || [], o || []) || x.setFields(o || []), F.current = o
		}), [o, x]);
		var N = v.useMemo((function () {
				return Bn(Bn({}, x), {}, {
					validateTrigger: f
				})
			}), [x, f]),
			T = v.createElement(Kp.Provider, {
				value: null
			}, v.createElement(Xp.Provider, {
				value: N
			}, _));
		return !1 === c ? T : v.createElement(c, $n({}, b, {
			ref: w,
			onSubmit: function (e) {
				e.preventDefault(), e.stopPropagation(), x.submit()
			},
			onReset: function (e) {
				var t;
				e.preventDefault(), x.resetFields(), null === (t = b.onReset) || void 0 === t || t.call(b, e)
			}
		}), T)
	};

function Kh(e) {
	try {
		return JSON.stringify(e)
	} catch (t) {
		return Math.random()
	}
}
var Qh = v.forwardRef(Xh);
Qh.FormProvider = function (e) {
	var t = e.validateMessages,
		n = e.onFormChange,
		r = e.onFormFinish,
		o = e.children,
		a = v.useContext(qh),
		i = v.useRef({});
	return v.createElement(qh.Provider, {
		value: Bn(Bn({}, a), {}, {
			validateMessages: Bn(Bn({}, a.validateMessages), t),
			triggerFormChange: function (e, t) {
				n && n(e, {
					changedFields: t,
					forms: i.current
				}), a.triggerFormChange(e, t)
			},
			triggerFormFinish: function (e, t) {
				r && r(e, {
					values: t,
					forms: i.current
				}), a.triggerFormFinish(e, t)
			},
			registerForm: function (e, t) {
				e && (i.current = Bn(Bn({}, i.current), {}, Dn({}, e, t))), a.registerForm(e, t)
			},
			unregisterForm: function (e) {
				var t = Bn({}, i.current);
				delete t[e], i.current = t, a.unregisterForm(e)
			}
		})
	}, o)
}, Qh.Field = Ah, Qh.List = function (e) {
	var t = e.name,
		n = e.initialValue,
		r = e.children,
		o = e.rules,
		a = e.validateTrigger,
		i = e.isListField,
		l = v.useContext(Xp),
		s = v.useContext(Kp),
		c = v.useRef({
			keys: [],
			id: 0
		}).current,
		u = v.useMemo((function () {
			var e = jh(l.prefixName) || [];
			return [].concat(br(e), br(jh(t)))
		}), [l.prefixName, t]),
		d = v.useMemo((function () {
			return Bn(Bn({}, l), {}, {
				prefixName: u
			})
		}), [l, u]),
		f = v.useMemo((function () {
			return {
				getKey: function (e) {
					var t = u.length,
						n = e[t];
					return [c.keys[n], e.slice(t + 1)]
				}
			}
		}), [u]);
	return "function" != typeof r ? (zn(!1, "Form.List only accepts function as children."), null) : v.createElement(Kp.Provider, {
		value: f
	}, v.createElement(Xp.Provider, {
		value: d
	}, v.createElement(Ah, {
		name: [],
		shouldUpdate: function (e, t, n) {
			return "internal" !== n.source && e !== t
		},
		rules: o,
		validateTrigger: a,
		initialValue: n,
		isList: !0,
		isListField: null != i ? i : !!s
	}, (function (e, t) {
		var n = e.value,
			o = void 0 === n ? [] : n,
			a = e.onChange,
			i = l.getFieldValue,
			s = function () {
				return i(u || []) || []
			},
			d = {
				add: function (e, t) {
					var n = s();
					t >= 0 && t <= n.length ? (c.keys = [].concat(br(c.keys.slice(0, t)), [c.id], br(c.keys.slice(t))), a([].concat(br(n.slice(0, t)), [e], br(n.slice(t))))) : (c.keys = [].concat(br(c.keys), [c.id]), a([].concat(br(n), [e]))), c.id += 1
				},
				remove: function (e) {
					var t = s(),
						n = new Set(Array.isArray(e) ? e : [e]);
					n.size <= 0 || (c.keys = c.keys.filter((function (e, t) {
						return !n.has(t)
					})), a(t.filter((function (e, t) {
						return !n.has(t)
					}))))
				},
				move: function (e, t) {
					if (e !== t) {
						var n = s();
						e < 0 || e >= n.length || t < 0 || t >= n.length || (c.keys = Nh(c.keys, e, t), a(Nh(n, e, t)))
					}
				}
			},
			f = o || [];
		return Array.isArray(f) || (f = []), r(f.map((function (e, t) {
			var n = c.keys[t];
			return void 0 === n && (c.keys[t] = c.id, n = c.keys[t], c.id += 1), {
				name: t,
				key: n,
				isListField: !0
			}
		})), d, t)
	}))))
}, Qh.useForm = Wh, Qh.useWatch = function () {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	var r = t[0],
		o = t[1],
		a = void 0 === o ? {} : o,
		i = function (e) {
			return e && !!e._init
		}(a) ? {
			form: a
		} : a,
		l = i.form,
		s = Pr(v.useState(), 2),
		c = s[0],
		u = s[1],
		d = v.useMemo((function () {
			return Kh(c)
		}), [c]),
		f = v.useRef(d);
	f.current = d;
	var p = v.useContext(Xp),
		h = l || p,
		m = h && h._init,
		g = jh(r),
		y = v.useRef(g);
	return y.current = g, v.useEffect((function () {
		if (m) {
			var e = h.getFieldsValue,
				t = (0, h.getInternalHooks)(qp).registerWatch,
				n = function (e, t) {
					var n = i.preserve ? t : e;
					return "function" == typeof r ? r(n) : ja(n, y.current)
				},
				o = t((function (e, t) {
					var r = n(e, t),
						o = Kh(r);
					f.current !== o && (f.current = o, u(r))
				})),
				a = n(e(), e(!0));
			return c !== a && u(a), o
		}
	}), [m]), c
};
const Yh = v.createContext({}),
	Zh = ({
		children: e,
		status: t,
		override: n
	}) => {
		const r = v.useContext(Yh),
			o = v.useMemo((() => {
				const e = Object.assign({}, r);
				return n && delete e.isFormItemInput, t && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon), e
			}), [t, n, r]);
		return v.createElement(Yh.Provider, {
			value: o
		}, e)
	},
	Jh = v.createContext(void 0),
	em = e => {
		const {
			space: t,
			form: n,
			children: r
		} = e;
		if (null == r) return null;
		let o = r;
		return n && (o = y.createElement(Zh, {
			override: !0,
			status: !0
		}, o)), t && (o = y.createElement(pd, null, o)), o
	};

function tm(...e) {
	const t = {};
	return e.forEach((e => {
		e && Object.keys(e).forEach((n => {
			void 0 !== e[n] && (t[n] = e[n])
		}))
	})), t
}

function nm(e) {
	if (e) return {
		closable: e.closable,
		closeIcon: e.closeIcon
	}
}

function rm(e) {
	const {
		closable: t,
		closeIcon: n
	} = e || {};
	return y.useMemo((() => {
		if (!t && (!1 === t || !1 === n || null === n)) return !1;
		if (void 0 === t && void 0 === n) return null;
		let e = {
			closeIcon: "boolean" != typeof n && null !== n ? n : void 0
		};
		return t && "object" == typeof t && (e = Object.assign(Object.assign({}, e), t)), e
	}), [t, n])
}
const om = {};

function am(e, t, n = om) {
	const r = rm(e),
		o = rm(t),
		[a] = Qa("global", Va.global),
		i = "boolean" != typeof r && !!(null == r ? void 0 : r.disabled),
		l = y.useMemo((() => Object.assign({
			closeIcon: y.createElement(pc, null)
		}, n)), [n]),
		s = y.useMemo((() => !1 !== r && (r ? tm(l, o, r) : !1 !== o && (o ? tm(l, o) : !!l.closable && l))), [r, o, l]);
	return y.useMemo((() => {
		if (!1 === s) return [!1, null, i, {}];
		const {
			closeIconRender: e
		} = l, {
			closeIcon: t
		} = s;
		let n = t;
		const r = xc(s, !0);
		return null != n && (e && (n = e(t)), n = y.isValidElement(n) ? y.cloneElement(n, Object.assign({
			"aria-label": a.close
		}, r)) : y.createElement("span", Object.assign({
			"aria-label": a.close
		}, r), n)), [!0, n, i, r]
	}), [s, l])
}
const im = e => {
		const {
			prefixCls: t,
			className: n,
			style: r,
			size: o,
			shape: a
		} = e, i = On({
			[`${t}-lg`]: "large" === o,
			[`${t}-sm`]: "small" === o
		}), l = On({
			[`${t}-circle`]: "circle" === a,
			[`${t}-square`]: "square" === a,
			[`${t}-round`]: "round" === a
		}), s = v.useMemo((() => "number" == typeof o ? {
			width: o,
			height: o,
			lineHeight: `${o}px`
		} : {}), [o]);
		return v.createElement("span", {
			className: On(t, i, l, n),
			style: Object.assign(Object.assign({}, s), r)
		})
	},
	lm = new Ea("ant-skeleton-loading", {
		"0%": {
			backgroundPosition: "100% 50%"
		},
		"100%": {
			backgroundPosition: "0 50%"
		}
	}),
	sm = e => ({
		height: e,
		lineHeight: so(e)
	}),
	cm = e => Object.assign({
		width: e
	}, sm(e)),
	um = e => ({
		background: e.skeletonLoadingBackground,
		backgroundSize: "400% 100%",
		animationName: lm,
		animationDuration: e.skeletonLoadingMotionDuration,
		animationTimingFunction: "ease",
		animationIterationCount: "infinite"
	}),
	dm = (e, t) => Object.assign({
		width: t(e).mul(5).equal(),
		minWidth: t(e).mul(5).equal()
	}, sm(e)),
	fm = e => {
		const {
			skeletonAvatarCls: t,
			gradientFromColor: n,
			controlHeight: r,
			controlHeightLG: o,
			controlHeightSM: a
		} = e;
		return {
			[t]: Object.assign({
				display: "inline-block",
				verticalAlign: "top",
				background: n
			}, cm(r)),
			[`${t}${t}-circle`]: {
				borderRadius: "50%"
			},
			[`${t}${t}-lg`]: Object.assign({}, cm(o)),
			[`${t}${t}-sm`]: Object.assign({}, cm(a))
		}
	},
	pm = e => {
		const {
			controlHeight: t,
			borderRadiusSM: n,
			skeletonInputCls: r,
			controlHeightLG: o,
			controlHeightSM: a,
			gradientFromColor: i,
			calc: l
		} = e;
		return {
			[r]: Object.assign({
				display: "inline-block",
				verticalAlign: "top",
				background: i,
				borderRadius: n
			}, dm(t, l)),
			[`${r}-lg`]: Object.assign({}, dm(o, l)),
			[`${r}-sm`]: Object.assign({}, dm(a, l))
		}
	},
	hm = e => Object.assign({
		width: e
	}, sm(e)),
	mm = e => {
		const {
			skeletonImageCls: t,
			imageSizeBase: n,
			gradientFromColor: r,
			borderRadiusSM: o,
			calc: a
		} = e;
		return {
			[t]: Object.assign(Object.assign({
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				verticalAlign: "middle",
				background: r,
				borderRadius: o
			}, hm(a(n).mul(2).equal())), {
				[`${t}-path`]: {
					fill: "#bfbfbf"
				},
				[`${t}-svg`]: Object.assign(Object.assign({}, hm(n)), {
					maxWidth: a(n).mul(4).equal(),
					maxHeight: a(n).mul(4).equal()
				}),
				[`${t}-svg${t}-svg-circle`]: {
					borderRadius: "50%"
				}
			}),
			[`${t}${t}-circle`]: {
				borderRadius: "50%"
			}
		}
	},
	gm = (e, t, n) => {
		const {
			skeletonButtonCls: r
		} = e;
		return {
			[`${n}${r}-circle`]: {
				width: t,
				minWidth: t,
				borderRadius: "50%"
			},
			[`${n}${r}-round`]: {
				borderRadius: t
			}
		}
	},
	vm = (e, t) => Object.assign({
		width: t(e).mul(2).equal(),
		minWidth: t(e).mul(2).equal()
	}, sm(e)),
	ym = e => {
		const {
			borderRadiusSM: t,
			skeletonButtonCls: n,
			controlHeight: r,
			controlHeightLG: o,
			controlHeightSM: a,
			gradientFromColor: i,
			calc: l
		} = e;
		return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
			[n]: Object.assign({
				display: "inline-block",
				verticalAlign: "top",
				background: i,
				borderRadius: t,
				width: l(r).mul(2).equal(),
				minWidth: l(r).mul(2).equal()
			}, vm(r, l))
		}, gm(e, r, n)), {
			[`${n}-lg`]: Object.assign({}, vm(o, l))
		}), gm(e, o, `${n}-lg`)), {
			[`${n}-sm`]: Object.assign({}, vm(a, l))
		}), gm(e, a, `${n}-sm`))
	},
	bm = e => {
		const {
			componentCls: t,
			skeletonAvatarCls: n,
			skeletonTitleCls: r,
			skeletonParagraphCls: o,
			skeletonButtonCls: a,
			skeletonInputCls: i,
			skeletonImageCls: l,
			controlHeight: s,
			controlHeightLG: c,
			controlHeightSM: u,
			gradientFromColor: d,
			padding: f,
			marginSM: p,
			borderRadius: h,
			titleHeight: m,
			blockRadius: g,
			paragraphLiHeight: v,
			controlHeightXS: y,
			paragraphMarginTop: b
		} = e;
		return {
			[t]: {
				display: "table",
				width: "100%",
				[`${t}-header`]: {
					display: "table-cell",
					paddingInlineEnd: f,
					verticalAlign: "top",
					[n]: Object.assign({
						display: "inline-block",
						verticalAlign: "top",
						background: d
					}, cm(s)),
					[`${n}-circle`]: {
						borderRadius: "50%"
					},
					[`${n}-lg`]: Object.assign({}, cm(c)),
					[`${n}-sm`]: Object.assign({}, cm(u))
				},
				[`${t}-content`]: {
					display: "table-cell",
					width: "100%",
					verticalAlign: "top",
					[r]: {
						width: "100%",
						height: m,
						background: d,
						borderRadius: g,
						[`+ ${o}`]: {
							marginBlockStart: u
						}
					},
					[o]: {
						padding: 0,
						"> li": {
							width: "100%",
							height: v,
							listStyle: "none",
							background: d,
							borderRadius: g,
							"+ li": {
								marginBlockStart: y
							}
						}
					},
					[`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
						width: "61%"
					}
				},
				[`&-round ${t}-content`]: {
					[`${r}, ${o} > li`]: {
						borderRadius: h
					}
				}
			},
			[`${t}-with-avatar ${t}-content`]: {
				[r]: {
					marginBlockStart: p,
					[`+ ${o}`]: {
						marginBlockStart: b
					}
				}
			},
			[`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
				display: "inline-block",
				width: "auto"
			}, ym(e)), fm(e)), pm(e)), mm(e)),
			[`${t}${t}-block`]: {
				width: "100%",
				[a]: {
					width: "100%"
				},
				[i]: {
					width: "100%"
				}
			},
			[`${t}${t}-active`]: {
				[`\n        ${r},\n        ${o} > li,\n        ${n},\n        ${a},\n        ${i},\n        ${l}\n      `]: Object.assign({}, um(e))
			}
		}
	},
	wm = Nl("Skeleton", (e => {
		const {
			componentCls: t,
			calc: n
		} = e, r = ul(e, {
			skeletonAvatarCls: `${t}-avatar`,
			skeletonTitleCls: `${t}-title`,
			skeletonParagraphCls: `${t}-paragraph`,
			skeletonButtonCls: `${t}-button`,
			skeletonInputCls: `${t}-input`,
			skeletonImageCls: `${t}-image`,
			imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
			borderRadius: 100,
			skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
			skeletonLoadingMotionDuration: "1.4s"
		});
		return [bm(r)]
	}), (e => {
		const {
			colorFillContent: t,
			colorFill: n
		} = e;
		return {
			color: t,
			colorGradientEnd: n,
			gradientFromColor: t,
			gradientToColor: n,
			titleHeight: e.controlHeight / 2,
			blockRadius: e.borderRadiusSM,
			paragraphMarginTop: e.marginLG + e.marginXXS,
			paragraphLiHeight: e.controlHeight / 2
		}
	}), {
		deprecatedTokens: [
			["color", "gradientFromColor"],
			["colorGradientEnd", "gradientToColor"]
		]
	}),
	km = e => {
		const {
			prefixCls: t,
			className: n,
			rootClassName: r,
			style: o,
			active: a
		} = e, {
			getPrefixCls: i
		} = v.useContext(Di), l = i("skeleton", t), [s, c, u] = wm(l), d = On(l, `${l}-element`, {
			[`${l}-active`]: a
		}, n, r, c, u);
		return s(v.createElement("div", {
			className: d
		}, v.createElement("div", {
			className: On(`${l}-image`, n),
			style: o
		}, v.createElement("svg", {
			viewBox: "0 0 1098 1024",
			xmlns: "http://www.w3.org/2000/svg",
			className: `${l}-image-svg`
		}, v.createElement("title", null, "Image placeholder"), v.createElement("path", {
			d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
			className: `${l}-image-path`
		})))))
	},
	xm = (e, t) => {
		const {
			width: n,
			rows: r = 2
		} = t;
		return Array.isArray(n) ? n[e] : r - 1 === e ? n : void 0
	},
	Sm = e => {
		const {
			prefixCls: t,
			className: n,
			style: r,
			rows: o = 0
		} = e, a = Array.from({
			length: o
		}).map(((t, n) => v.createElement("li", {
			key: n,
			style: {
				width: xm(n, e)
			}
		})));
		return v.createElement("ul", {
			className: On(t, n),
			style: r
		}, a)
	},
	Cm = ({
		prefixCls: e,
		className: t,
		width: n,
		style: r
	}) => v.createElement("h3", {
		className: On(e, t),
		style: Object.assign({
			width: n
		}, r)
	});

function Em(e) {
	return e && "object" == typeof e ? e : {}
}
const Om = e => {
	const {
		prefixCls: t,
		loading: n,
		className: r,
		rootClassName: o,
		style: a,
		children: i,
		avatar: l = !1,
		title: s = !0,
		paragraph: c = !0,
		active: u,
		round: d
	} = e, {
		getPrefixCls: f,
		direction: p,
		className: h,
		style: m
	} = Ui("skeleton"), g = f("skeleton", t), [y, b, w] = wm(g);
	if (n || !("loading" in e)) {
		const e = !!l,
			t = !!s,
			n = !!c;
		let i, f;
		if (e) {
			const e = Object.assign(Object.assign({
				prefixCls: `${g}-avatar`
			}, function (e, t) {
				return e && !t ? {
					size: "large",
					shape: "square"
				} : {
					size: "large",
					shape: "circle"
				}
			}(t, n)), Em(l));
			i = v.createElement("div", {
				className: `${g}-header`
			}, v.createElement(im, Object.assign({}, e)))
		}
		if (t || n) {
			let r, o;
			if (t) {
				const t = Object.assign(Object.assign({
					prefixCls: `${g}-title`
				}, function (e, t) {
					return !e && t ? {
						width: "38%"
					} : e && t ? {
						width: "50%"
					} : {}
				}(e, n)), Em(s));
				r = v.createElement(Cm, Object.assign({}, t))
			}
			if (n) {
				const n = Object.assign(Object.assign({
					prefixCls: `${g}-paragraph`
				}, function (e, t) {
					const n = {};
					return e && t || (n.width = "61%"), n.rows = !e && t ? 3 : 2, n
				}(e, t)), Em(c));
				o = v.createElement(Sm, Object.assign({}, n))
			}
			f = v.createElement("div", {
				className: `${g}-content`
			}, r, o)
		}
		const k = On(g, {
			[`${g}-with-avatar`]: e,
			[`${g}-active`]: u,
			[`${g}-rtl`]: "rtl" === p,
			[`${g}-round`]: d
		}, h, r, o, b, w);
		return y(v.createElement("div", {
			className: k,
			style: Object.assign(Object.assign({}, m), a)
		}, i, f))
	}
	return null != i ? i : null
};

function $m() {}
Om.Button = e => {
	const {
		prefixCls: t,
		className: n,
		rootClassName: r,
		active: o,
		block: a = !1,
		size: i = "default"
	} = e, {
		getPrefixCls: l
	} = v.useContext(Di), s = l("skeleton", t), [c, u, d] = wm(s), f = Xu(e, ["prefixCls"]), p = On(s, `${s}-element`, {
		[`${s}-active`]: o,
		[`${s}-block`]: a
	}, n, r, u, d);
	return c(v.createElement("div", {
		className: p
	}, v.createElement(im, Object.assign({
		prefixCls: `${s}-button`,
		size: i
	}, f))))
}, Om.Avatar = e => {
	const {
		prefixCls: t,
		className: n,
		rootClassName: r,
		active: o,
		shape: a = "circle",
		size: i = "default"
	} = e, {
		getPrefixCls: l
	} = v.useContext(Di), s = l("skeleton", t), [c, u, d] = wm(s), f = Xu(e, ["prefixCls", "className"]), p = On(s, `${s}-element`, {
		[`${s}-active`]: o
	}, n, r, u, d);
	return c(v.createElement("div", {
		className: p
	}, v.createElement(im, Object.assign({
		prefixCls: `${s}-avatar`,
		shape: a,
		size: i
	}, f))))
}, Om.Input = e => {
	const {
		prefixCls: t,
		className: n,
		rootClassName: r,
		active: o,
		block: a,
		size: i = "default"
	} = e, {
		getPrefixCls: l
	} = v.useContext(Di), s = l("skeleton", t), [c, u, d] = wm(s), f = Xu(e, ["prefixCls"]), p = On(s, `${s}-element`, {
		[`${s}-active`]: o,
		[`${s}-block`]: a
	}, n, r, u, d);
	return c(v.createElement("div", {
		className: p
	}, v.createElement(im, Object.assign({
		prefixCls: `${s}-input`,
		size: i
	}, f))))
}, Om.Image = km, Om.Node = e => {
	const {
		prefixCls: t,
		className: n,
		rootClassName: r,
		style: o,
		active: a,
		children: i
	} = e, {
		getPrefixCls: l
	} = v.useContext(Di), s = l("skeleton", t), [c, u, d] = wm(s), f = On(s, `${s}-element`, {
		[`${s}-active`]: a
	}, u, n, r, d);
	return c(v.createElement("div", {
		className: f
	}, v.createElement("div", {
		className: On(`${s}-image`, n),
		style: o
	}, i)))
};
const Pm = v.createContext({
	add: $m,
	remove: $m
});

function jm(e) {
	const t = v.useContext(Pm),
		n = v.useRef(null);
	return rl((r => {
		if (r) {
			const o = e ? r.querySelector(e) : r;
			t.add(o), n.current = o
		} else t.remove(n.current)
	}))
}
const _m = () => {
		const {
			cancelButtonProps: e,
			cancelTextLocale: t,
			onCancel: n
		} = v.useContext(vp);
		return y.createElement(hp, Object.assign({
			onClick: n
		}, e), t)
	},
	Rm = () => {
		const {
			confirmLoading: e,
			okButtonProps: t,
			okType: n,
			okTextLocale: r,
			onOk: o
		} = v.useContext(vp);
		return y.createElement(hp, Object.assign({}, bd(n), {
			loading: e,
			onClick: o
		}, t), r)
	};

function Mm(e, t) {
	return y.createElement("span", {
		className: `${e}-close-x`
	}, t || y.createElement(pc, {
		className: `${e}-close-icon`
	}))
}
const Fm = e => {
		const {
			okText: t,
			okType: n = "primary",
			cancelText: r,
			confirmLoading: o,
			onOk: a,
			onCancel: i,
			okButtonProps: l,
			cancelButtonProps: s,
			footer: c
		} = e, [u] = Qa("Modal", Xa()), d = {
			confirmLoading: o,
			okButtonProps: l,
			cancelButtonProps: s,
			okTextLocale: t || (null == u ? void 0 : u.okText),
			cancelTextLocale: r || (null == u ? void 0 : u.cancelText),
			okType: n,
			onOk: a,
			onCancel: i
		}, f = y.useMemo((() => d), br(Object.values(d)));
		let p;
		return "function" == typeof c || void 0 === c ? (p = y.createElement(y.Fragment, null, y.createElement(_m, null), y.createElement(Rm, null)), "function" == typeof c && (p = c(p, {
			OkBtn: Rm,
			CancelBtn: _m
		})), p = y.createElement(yp, {
			value: f
		}, p)) : p = c, y.createElement(Gi, {
			disabled: !1
		}, p)
	},
	Nm = e => {
		const {
			componentCls: t
		} = e;
		return {
			[t]: {
				position: "relative",
				maxWidth: "100%",
				minHeight: 1
			}
		}
	},
	Tm = (e, t) => ((e, t) => {
		const {
			prefixCls: n,
			componentCls: r,
			gridColumns: o
		} = e, a = {};
		for (let i = o; i >= 0; i--) 0 === i ? (a[`${r}${t}-${i}`] = {
			display: "none"
		}, a[`${r}-push-${i}`] = {
			insetInlineStart: "auto"
		}, a[`${r}-pull-${i}`] = {
			insetInlineEnd: "auto"
		}, a[`${r}${t}-push-${i}`] = {
			insetInlineStart: "auto"
		}, a[`${r}${t}-pull-${i}`] = {
			insetInlineEnd: "auto"
		}, a[`${r}${t}-offset-${i}`] = {
			marginInlineStart: 0
		}, a[`${r}${t}-order-${i}`] = {
			order: 0
		}) : (a[`${r}${t}-${i}`] = [{
			"--ant-display": "block",
			display: "block"
		}, {
			display: "var(--ant-display)",
			flex: `0 0 ${i/o*100}%`,
			maxWidth: i / o * 100 + "%"
		}], a[`${r}${t}-push-${i}`] = {
			insetInlineStart: i / o * 100 + "%"
		}, a[`${r}${t}-pull-${i}`] = {
			insetInlineEnd: i / o * 100 + "%"
		}, a[`${r}${t}-offset-${i}`] = {
			marginInlineStart: i / o * 100 + "%"
		}, a[`${r}${t}-order-${i}`] = {
			order: i
		});
		return a[`${r}${t}-flex`] = {
			flex: `var(--${n}${t}-flex)`
		}, a
	})(e, t),
	Im = Nl("Grid", (e => {
		const {
			componentCls: t
		} = e;
		return {
			[t]: {
				display: "flex",
				flexFlow: "row wrap",
				minWidth: 0,
				"&::before, &::after": {
					display: "flex"
				},
				"&-no-wrap": {
					flexWrap: "nowrap"
				},
				"&-start": {
					justifyContent: "flex-start"
				},
				"&-center": {
					justifyContent: "center"
				},
				"&-end": {
					justifyContent: "flex-end"
				},
				"&-space-between": {
					justifyContent: "space-between"
				},
				"&-space-around": {
					justifyContent: "space-around"
				},
				"&-space-evenly": {
					justifyContent: "space-evenly"
				},
				"&-top": {
					alignItems: "flex-start"
				},
				"&-middle": {
					alignItems: "center"
				},
				"&-bottom": {
					alignItems: "flex-end"
				}
			}
		}
	}), (() => ({}))),
	Lm = e => ({
		xs: e.screenXSMin,
		sm: e.screenSMMin,
		md: e.screenMDMin,
		lg: e.screenLGMin,
		xl: e.screenXLMin,
		xxl: e.screenXXLMin
	}),
	zm = Nl("Grid", (e => {
		const t = ul(e, {
				gridColumns: 24
			}),
			n = Lm(t);
		return delete n.xs, [Nm(t), Tm(t, ""), Tm(t, "-xs"), Object.keys(n).map((e => ((e, t, n) => ({
			[`@media (min-width: ${so(t)})`]: Object.assign({}, Tm(e, n))
		}))(t, n[e], `-${e}`))).reduce(((e, t) => Object.assign(Object.assign({}, e), t)), {})]
	}), (() => ({})));

function Am(e) {
	return {
		position: e,
		inset: 0
	}
}
const Dm = e => {
		const {
			componentCls: t,
			antCls: n
		} = e;
		return [{
			[`${t}-root`]: {
				[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
					transform: "none",
					opacity: 0,
					animationDuration: e.motionDurationSlow,
					userSelect: "none"
				},
				[`${t}${n}-zoom-leave ${t}-content`]: {
					pointerEvents: "none"
				},
				[`${t}-mask`]: Object.assign(Object.assign({}, Am("fixed")), {
					zIndex: e.zIndexPopupBase,
					height: "100%",
					backgroundColor: e.colorBgMask,
					pointerEvents: "none",
					[`${t}-hidden`]: {
						display: "none"
					}
				}),
				[`${t}-wrap`]: Object.assign(Object.assign({}, Am("fixed")), {
					zIndex: e.zIndexPopupBase,
					overflow: "auto",
					outline: 0,
					WebkitOverflowScrolling: "touch"
				})
			}
		}, {
			[`${t}-root`]: lf(e)
		}]
	},
	Hm = e => {
		const {
			componentCls: t
		} = e;
		return [{
			[`${t}-root`]: {
				[`${t}-wrap-rtl`]: {
					direction: "rtl"
				},
				[`${t}-centered`]: {
					textAlign: "center",
					"&::before": {
						display: "inline-block",
						width: 0,
						height: "100%",
						verticalAlign: "middle",
						content: '""'
					},
					[t]: {
						top: 0,
						display: "inline-block",
						paddingBottom: 0,
						textAlign: "start",
						verticalAlign: "middle"
					}
				},
				[`@media (max-width: ${e.screenSMMax}px)`]: {
					[t]: {
						maxWidth: "calc(100vw - 16px)",
						margin: `${so(e.marginXS)} auto`
					},
					[`${t}-centered`]: {
						[t]: {
							flex: 1
						}
					}
				}
			}
		}, {
			[t]: Object.assign(Object.assign({}, $l(e)), {
				pointerEvents: "none",
				position: "relative",
				top: 100,
				width: "auto",
				maxWidth: `calc(100vw - ${so(e.calc(e.margin).mul(2).equal())})`,
				margin: "0 auto",
				paddingBottom: e.paddingLG,
				[`${t}-title`]: {
					margin: 0,
					color: e.titleColor,
					fontWeight: e.fontWeightStrong,
					fontSize: e.titleFontSize,
					lineHeight: e.titleLineHeight,
					wordWrap: "break-word"
				},
				[`${t}-content`]: {
					position: "relative",
					backgroundColor: e.contentBg,
					backgroundClip: "padding-box",
					border: 0,
					borderRadius: e.borderRadiusLG,
					boxShadow: e.boxShadow,
					pointerEvents: "auto",
					padding: e.contentPadding
				},
				[`${t}-close`]: Object.assign({
					position: "absolute",
					top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
					insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
					zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
					padding: 0,
					color: e.modalCloseIconColor,
					fontWeight: e.fontWeightStrong,
					lineHeight: 1,
					textDecoration: "none",
					background: "transparent",
					borderRadius: e.borderRadiusSM,
					width: e.modalCloseBtnSize,
					height: e.modalCloseBtnSize,
					border: 0,
					outline: 0,
					cursor: "pointer",
					transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
					"&-x": {
						display: "flex",
						fontSize: e.fontSizeLG,
						fontStyle: "normal",
						lineHeight: so(e.modalCloseBtnSize),
						justifyContent: "center",
						textTransform: "none",
						textRendering: "auto"
					},
					"&:disabled": {
						pointerEvents: "none"
					},
					"&:hover": {
						color: e.modalCloseIconHoverColor,
						backgroundColor: e.colorBgTextHover,
						textDecoration: "none"
					},
					"&:active": {
						backgroundColor: e.colorBgTextActive
					}
				}, Rl(e)),
				[`${t}-header`]: {
					color: e.colorText,
					background: e.headerBg,
					borderRadius: `${so(e.borderRadiusLG)} ${so(e.borderRadiusLG)} 0 0`,
					marginBottom: e.headerMarginBottom,
					padding: e.headerPadding,
					borderBottom: e.headerBorderBottom
				},
				[`${t}-body`]: {
					fontSize: e.fontSize,
					lineHeight: e.lineHeight,
					wordWrap: "break-word",
					padding: e.bodyPadding,
					[`${t}-body-skeleton`]: {
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: `${so(e.margin)} auto`
					}
				},
				[`${t}-footer`]: {
					textAlign: "end",
					background: e.footerBg,
					marginTop: e.footerMarginTop,
					padding: e.footerPadding,
					borderTop: e.footerBorderTop,
					borderRadius: e.footerBorderRadius,
					[`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
						marginInlineStart: e.marginXS
					}
				},
				[`${t}-open`]: {
					overflow: "hidden"
				}
			})
		}, {
			[`${t}-pure-panel`]: {
				top: "auto",
				padding: 0,
				display: "flex",
				flexDirection: "column",
				[`${t}-content,\n          ${t}-body,\n          ${t}-confirm-body-wrapper`]: {
					display: "flex",
					flexDirection: "column",
					flex: "auto"
				},
				[`${t}-confirm-body`]: {
					marginBottom: "auto"
				}
			}
		}]
	},
	Bm = e => {
		const {
			componentCls: t
		} = e;
		return {
			[`${t}-root`]: {
				[`${t}-wrap-rtl`]: {
					direction: "rtl",
					[`${t}-confirm-body`]: {
						direction: "rtl"
					}
				}
			}
		}
	},
	Um = e => {
		const {
			componentCls: t
		} = e, n = Lm(e);
		delete n.xs;
		const r = Object.keys(n).map((e => ({
			[`@media (min-width: ${so(n[e])})`]: {
				width: `var(--${t.replace(".","")}-${e}-width)`
			}
		})));
		return {
			[`${t}-root`]: {
				[t]: [{
					width: `var(--${t.replace(".","")}-xs-width)`
				}].concat(br(r))
			}
		}
	},
	Vm = e => {
		const t = e.padding,
			n = e.fontSizeHeading5,
			r = e.lineHeightHeading5;
		return ul(e, {
			modalHeaderHeight: e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),
			modalFooterBorderColorSplit: e.colorSplit,
			modalFooterBorderStyle: e.lineType,
			modalFooterBorderWidth: e.lineWidth,
			modalCloseIconColor: e.colorIcon,
			modalCloseIconHoverColor: e.colorIconHover,
			modalCloseBtnSize: e.controlHeight,
			modalConfirmIconSize: e.fontHeight,
			modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
		})
	},
	Wm = e => ({
		footerBg: "transparent",
		headerBg: e.colorBgElevated,
		titleLineHeight: e.lineHeightHeading5,
		titleFontSize: e.fontSizeHeading5,
		contentBg: e.colorBgElevated,
		titleColor: e.colorTextHeading,
		contentPadding: e.wireframe ? 0 : `${so(e.paddingMD)} ${so(e.paddingContentHorizontalLG)}`,
		headerPadding: e.wireframe ? `${so(e.padding)} ${so(e.paddingLG)}` : 0,
		headerBorderBottom: e.wireframe ? `${so(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
		headerMarginBottom: e.wireframe ? 0 : e.marginXS,
		bodyPadding: e.wireframe ? e.paddingLG : 0,
		footerPadding: e.wireframe ? `${so(e.paddingXS)} ${so(e.padding)}` : 0,
		footerBorderTop: e.wireframe ? `${so(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
		footerBorderRadius: e.wireframe ? `0 0 ${so(e.borderRadiusLG)} ${so(e.borderRadiusLG)}` : 0,
		footerMarginTop: e.wireframe ? 0 : e.marginSM,
		confirmBodyPadding: e.wireframe ? `${so(2*e.padding)} ${so(2*e.padding)} ${so(e.paddingLG)}` : 0,
		confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
		confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
	}),
	qm = Nl("Modal", (e => {
		const t = Vm(e);
		return [Hm(t), Bm(t), Dm(t), mf(t, "zoom"), Um(t)]
	}), Wm, {
		unitless: {
			titleLineHeight: !0
		}
	});
let Gm;
const Xm = e => {
	Gm = {
		x: e.pageX,
		y: e.pageY
	}, setTimeout((() => {
		Gm = null
	}), 100)
};
_r() && window.document.documentElement && document.documentElement.addEventListener("click", Xm, !0);
const Km = e => {
		const {
			prefixCls: t,
			className: n,
			rootClassName: r,
			open: o,
			wrapClassName: a,
			centered: i,
			getContainer: l,
			focusTriggerAfterClose: s = !0,
			style: c,
			visible: u,
			width: d = 520,
			footer: f,
			classNames: p,
			styles: h,
			children: m,
			loading: g,
			confirmLoading: y,
			zIndex: b,
			mousePosition: w,
			onOk: k,
			onCancel: x,
			destroyOnHidden: S,
			destroyOnClose: C
		} = e, E = function (e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
			}
			return n
		}(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose"]), {
			getPopupContainer: O,
			getPrefixCls: $,
			direction: P,
			modal: j
		} = v.useContext(Di), _ = e => {
			y || null == x || x(e)
		}, R = $("modal", t), M = $(), F = Lc(R), [N, T, I] = qm(R, F), L = On(a, {
			[`${R}-centered`]: null != i ? i : null == j ? void 0 : j.centered,
			[`${R}-wrap-rtl`]: "rtl" === P
		}), z = null === f || g ? null : v.createElement(Fm, Object.assign({}, e, {
			onOk: e => {
				null == k || k(e)
			},
			onCancel: _
		})), [A, D, H, B] = am(nm(e), nm(j), {
			closable: !0,
			closeIcon: v.createElement(pc, {
				className: `${R}-close-icon`
			}),
			closeIconRender: e => Mm(R, e)
		}), U = jm(`.${R}-content`), [V, W] = ru("Modal", b), [q, G] = v.useMemo((() => d && "object" == typeof d ? [void 0, d] : [d, void 0]), [d]), X = v.useMemo((() => {
			const e = {};
			return G && Object.keys(G).forEach((t => {
				const n = G[t];
				void 0 !== n && (e[`--${R}-${t}-width`] = "number" == typeof n ? `${n}px` : n)
			})), e
		}), [G]);
		return N(v.createElement(em, {
			form: !0,
			space: !0
		}, v.createElement(Zc.Provider, {
			value: W
		}, v.createElement(Wp, Object.assign({
			width: q
		}, E, {
			zIndex: V,
			getContainer: void 0 === l ? O : l,
			prefixCls: R,
			rootClassName: On(T, r, I, F),
			footer: z,
			visible: null != o ? o : u,
			mousePosition: null != w ? w : Gm,
			onClose: _,
			closable: A ? Object.assign({
				disabled: H,
				closeIcon: D
			}, B) : A,
			closeIcon: D,
			focusTriggerAfterClose: s,
			transitionName: Gu(M, "zoom", e.transitionName),
			maskTransitionName: Gu(M, "fade", e.maskTransitionName),
			className: On(T, n, null == j ? void 0 : j.className),
			style: Object.assign(Object.assign(Object.assign({}, null == j ? void 0 : j.style), c), X),
			classNames: Object.assign(Object.assign(Object.assign({}, null == j ? void 0 : j.classNames), p), {
				wrapper: On(L, null == p ? void 0 : p.wrapper)
			}),
			styles: Object.assign(Object.assign({}, null == j ? void 0 : j.styles), h),
			panelRef: U,
			destroyOnClose: null != S ? S : C
		}), g ? v.createElement(Om, {
			active: !0,
			title: !1,
			paragraph: {
				rows: 4
			},
			className: `${R}-body-skeleton`
		}) : m))))
	},
	Qm = e => {
		const {
			componentCls: t,
			titleFontSize: n,
			titleLineHeight: r,
			modalConfirmIconSize: o,
			fontSize: a,
			lineHeight: i,
			modalTitleHeight: l,
			fontHeight: s,
			confirmBodyPadding: c
		} = e, u = `${t}-confirm`;
		return {
			[u]: {
				"&-rtl": {
					direction: "rtl"
				},
				[`${e.antCls}-modal-header`]: {
					display: "none"
				},
				[`${u}-body-wrapper`]: Object.assign({}, {
					"&::before": {
						display: "table",
						content: '""'
					},
					"&::after": {
						display: "table",
						clear: "both",
						content: '""'
					}
				}),
				[`&${t} ${t}-body`]: {
					padding: c
				},
				[`${u}-body`]: {
					display: "flex",
					flexWrap: "nowrap",
					alignItems: "start",
					[`> ${e.iconCls}`]: {
						flex: "none",
						fontSize: o,
						marginInlineEnd: e.confirmIconMarginInlineEnd,
						marginTop: e.calc(e.calc(s).sub(o).equal()).div(2).equal()
					},
					[`&-has-title > ${e.iconCls}`]: {
						marginTop: e.calc(e.calc(l).sub(o).equal()).div(2).equal()
					}
				},
				[`${u}-paragraph`]: {
					display: "flex",
					flexDirection: "column",
					flex: "auto",
					rowGap: e.marginXS,
					maxWidth: `calc(100% - ${so(e.marginSM)})`
				},
				[`${e.iconCls} + ${u}-paragraph`]: {
					maxWidth: `calc(100% - ${so(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
				},
				[`${u}-title`]: {
					color: e.colorTextHeading,
					fontWeight: e.fontWeightStrong,
					fontSize: n,
					lineHeight: r
				},
				[`${u}-content`]: {
					color: e.colorText,
					fontSize: a,
					lineHeight: i
				},
				[`${u}-btns`]: {
					textAlign: "end",
					marginTop: e.confirmBtnsMarginTop,
					[`${e.antCls}-btn + ${e.antCls}-btn`]: {
						marginBottom: 0,
						marginInlineStart: e.marginXS
					}
				}
			},
			[`${u}-error ${u}-body > ${e.iconCls}`]: {
				color: e.colorError
			},
			[`${u}-warning ${u}-body > ${e.iconCls},\n        ${u}-confirm ${u}-body > ${e.iconCls}`]: {
				color: e.colorWarning
			},
			[`${u}-info ${u}-body > ${e.iconCls}`]: {
				color: e.colorInfo
			},
			[`${u}-success ${u}-body > ${e.iconCls}`]: {
				color: e.colorSuccess
			}
		}
	},
	Ym = Il(["Modal", "confirm"], (e => {
		const t = Vm(e);
		return [Qm(t)]
	}), Wm, {
		order: -1e3
	});

function Zm(e) {
	const {
		prefixCls: t,
		icon: n,
		okText: r,
		cancelText: o,
		confirmPrefixCls: a,
		type: i,
		okCancel: l,
		footer: s,
		locale: c
	} = e, u = function (e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
		}
		return n
	}(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
	let d = n;
	if (!n && null !== n) switch (i) {
		case "info":
			d = v.createElement(bc, null);
			break;
		case "success":
			d = v.createElement(lc, null);
			break;
		case "error":
			d = v.createElement(uc, null);
			break;
		default:
			d = v.createElement(gc, null)
	}
	const f = null != l ? l : "confirm" === i,
		p = null !== e.autoFocusButton && (e.autoFocusButton || "ok"),
		[h] = Qa("Modal"),
		m = c || h,
		g = r || (f ? null == m ? void 0 : m.okText : null == m ? void 0 : m.justOkText),
		y = o || (null == m ? void 0 : m.cancelText),
		b = Object.assign({
			autoFocusButton: p,
			cancelTextLocale: y,
			okTextLocale: g,
			mergedOkCancel: f
		}, u),
		w = v.useMemo((() => b), br(Object.values(b))),
		k = v.createElement(v.Fragment, null, v.createElement(bp, null), v.createElement(wp, null)),
		x = void 0 !== e.title && null !== e.title,
		S = `${a}-body`;
	return v.createElement("div", {
		className: `${a}-body-wrapper`
	}, v.createElement("div", {
		className: On(S, {
			[`${S}-has-title`]: x
		})
	}, d, v.createElement("div", {
		className: `${a}-paragraph`
	}, x && v.createElement("span", {
		className: `${a}-title`
	}, e.title), v.createElement("div", {
		className: `${a}-content`
	}, e.content))), void 0 === s || "function" == typeof s ? v.createElement(yp, {
		value: w
	}, v.createElement("div", {
		className: `${a}-btns`
	}, "function" == typeof s ? s(k, {
		OkBtn: wp,
		CancelBtn: bp
	}) : k)) : s, v.createElement(Ym, {
		prefixCls: t
	}))
}
const Jm = e => {
		const {
			close: t,
			zIndex: n,
			maskStyle: r,
			direction: o,
			prefixCls: a,
			wrapClassName: i,
			rootPrefixCls: l,
			bodyStyle: s,
			closable: c = !1,
			onConfirm: u,
			styles: d
		} = e, f = `${a}-confirm`, p = e.width || 416, h = e.style || {}, m = void 0 === e.mask || e.mask, g = void 0 !== e.maskClosable && e.maskClosable, y = On(f, `${f}-${e.type}`, {
			[`${f}-rtl`]: "rtl" === o
		}, e.className), [, b] = El(), w = v.useMemo((() => void 0 !== n ? n : b.zIndexPopupBase + eu), [n, b]);
		return v.createElement(Km, Object.assign({}, e, {
			className: y,
			wrapClassName: On({
				[`${f}-centered`]: !!e.centered
			}, i),
			onCancel: () => {
				null == t || t({
					triggerCancel: !0
				}), null == u || u(!1)
			},
			title: "",
			footer: null,
			transitionName: Gu(l || "", "zoom", e.transitionName),
			maskTransitionName: Gu(l || "", "fade", e.maskTransitionName),
			mask: m,
			maskClosable: g,
			style: h,
			styles: Object.assign({
				body: s,
				mask: r
			}, d),
			width: p,
			zIndex: w,
			closable: c
		}), v.createElement(Zm, Object.assign({}, e, {
			confirmPrefixCls: f
		})))
	},
	eg = e => {
		const {
			rootPrefixCls: t,
			iconPrefixCls: n,
			direction: r,
			theme: o
		} = e;
		return v.createElement(Ws, {
			prefixCls: t,
			iconPrefixCls: n,
			direction: r,
			theme: o
		}, v.createElement(Jm, Object.assign({}, e)))
	},
	tg = [];
let ng = "";

function rg() {
	return ng
}
const og = e => {
	var t, n;
	const {
		prefixCls: r,
		getContainer: o,
		direction: a
	} = e, i = Xa(), l = v.useContext(Di), s = rg() || l.getPrefixCls(), c = r || `${s}-modal`;
	let u = o;
	return !1 === u && (u = void 0), y.createElement(eg, Object.assign({}, e, {
		rootPrefixCls: s,
		prefixCls: c,
		iconPrefixCls: l.iconPrefixCls,
		theme: l.theme,
		direction: null != a ? a : l.direction,
		locale: null !== (n = null === (t = l.locale) || void 0 === t ? void 0 : t.Modal) && void 0 !== n ? n : i,
		getContainer: u
	}))
};

function ag(e) {
	const t = Us(),
		n = document.createDocumentFragment();
	let r, o, a = Object.assign(Object.assign({}, e), {
		close: s,
		open: !0
	});

	function i(...t) {
		var n;
		var r;
		t.some((e => null == e ? void 0 : e.triggerCancel)) && (null === (n = e.onCancel) || void 0 === n || (r = n).call.apply(r, [e, () => {}].concat(br(t.slice(1)))));
		for (let e = 0; e < tg.length; e++) {
			if (tg[e] === s) {
				tg.splice(e, 1);
				break
			}
		}
		o()
	}

	function l(e) {
		clearTimeout(r), r = setTimeout((() => {
			const r = t.getPrefixCls(void 0, rg()),
				a = t.getIconPrefixCls(),
				i = t.getTheme(),
				l = y.createElement(og, Object.assign({}, e)),
				s = Hu();
			o = s(y.createElement(Ws, {
				prefixCls: r,
				iconPrefixCls: a,
				theme: i
			}, t.holderRender ? t.holderRender(l) : l), n)
		}))
	}

	function s(...t) {
		a = Object.assign(Object.assign({}, a), {
			open: !1,
			afterClose: () => {
				"function" == typeof e.afterClose && e.afterClose(), i.apply(this, t)
			}
		}), a.visible && delete a.visible, l(a)
	}
	return l(a), tg.push(s), {
		destroy: s,
		update: function (e) {
			a = "function" == typeof e ? e(a) : Object.assign(Object.assign({}, a), e), l(a)
		}
	}
}

function ig(e) {
	return Object.assign(Object.assign({}, e), {
		type: "warning"
	})
}

function lg(e) {
	return Object.assign(Object.assign({}, e), {
		type: "info"
	})
}

function sg(e) {
	return Object.assign(Object.assign({}, e), {
		type: "success"
	})
}

function cg(e) {
	return Object.assign(Object.assign({}, e), {
		type: "error"
	})
}

function ug(e) {
	return Object.assign(Object.assign({}, e), {
		type: "confirm"
	})
}

function dg({
	rootPrefixCls: e
}) {
	ng = e
}
const fg = (e, t) => {
		var n, {
				afterClose: r,
				config: o
			} = e,
			a = function (e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			}(e, ["afterClose", "config"]);
		const [i, l] = v.useState(!0), [s, c] = v.useState(o), {
			direction: u,
			getPrefixCls: d
		} = v.useContext(Di), f = d("modal"), p = d(), h = (...e) => {
			var t;
			l(!1);
			var n;
			e.some((e => null == e ? void 0 : e.triggerCancel)) && (null === (t = s.onCancel) || void 0 === t || (n = t).call.apply(n, [s, () => {}].concat(br(e.slice(1)))))
		};
		v.useImperativeHandle(t, (() => ({
			destroy: h,
			update: e => {
				c((t => {
					const n = "function" == typeof e ? e(t) : e;
					return Object.assign(Object.assign({}, t), n)
				}))
			}
		})));
		const m = null !== (n = s.okCancel) && void 0 !== n ? n : "confirm" === s.type,
			[g] = Qa("Modal", Va.Modal);
		return v.createElement(eg, Object.assign({
			prefixCls: f,
			rootPrefixCls: p
		}, s, {
			close: h,
			open: i,
			afterClose: () => {
				var e;
				r(), null === (e = s.afterClose) || void 0 === e || e.call(s)
			},
			okText: s.okText || (m ? null == g ? void 0 : g.okText : null == g ? void 0 : g.justOkText),
			direction: s.direction || u,
			cancelText: s.cancelText || (null == g ? void 0 : g.cancelText)
		}, a))
	},
	pg = v.forwardRef(fg);
let hg = 0;
const mg = v.memo(v.forwardRef(((e, t) => {
	const [n, r] = function () {
		const [e, t] = v.useState([]);
		return [e, v.useCallback((e => (t((t => [].concat(br(t), [e]))), () => {
			t((t => t.filter((t => t !== e))))
		})), [])]
	}();
	return v.useImperativeHandle(t, (() => ({
		patchElement: r
	})), []), v.createElement(v.Fragment, null, n)
})));

function gg() {
	const e = v.useRef(null),
		[t, n] = v.useState([]);
	v.useEffect((() => {
		if (t.length) {
			br(t).forEach((e => {
				e()
			})), n([])
		}
	}), [t]);
	const r = v.useCallback((t => function (r) {
		var o;
		hg += 1;
		const a = v.createRef();
		let i;
		const l = new Promise((e => {
			i = e
		}));
		let s, c = !1;
		const u = v.createElement(pg, {
			key: `modal-${hg}`,
			config: t(r),
			ref: a,
			afterClose: () => {
				null == s || s()
			},
			isSilent: () => c,
			onConfirm: e => {
				i(e)
			}
		});
		s = null === (o = e.current) || void 0 === o ? void 0 : o.patchElement(u), s && tg.push(s);
		return {
			destroy: () => {
				function e() {
					var e;
					null === (e = a.current) || void 0 === e || e.destroy()
				}
				a.current ? e() : n((t => [].concat(br(t), [e])))
			},
			update: e => {
				function t() {
					var t;
					null === (t = a.current) || void 0 === t || t.update(e)
				}
				a.current ? t() : n((e => [].concat(br(e), [t])))
			},
			then: e => (c = !0, l.then(e))
		}
	}), []);
	return [v.useMemo((() => ({
		info: r(lg),
		success: r(sg),
		error: r(cg),
		warning: r(ig),
		confirm: r(ug)
	})), []), v.createElement(mg, {
		key: "modal-holder",
		ref: e
	})]
}
const vg = e => {
		const {
			componentCls: t,
			notificationMarginEdge: n,
			animationMaxHeight: r
		} = e, o = `${t}-notice`, a = new Ea("antNotificationFadeIn", {
			"0%": {
				transform: "translate3d(100%, 0, 0)",
				opacity: 0
			},
			"100%": {
				transform: "translate3d(0, 0, 0)",
				opacity: 1
			}
		}), i = new Ea("antNotificationTopFadeIn", {
			"0%": {
				top: -r,
				opacity: 0
			},
			"100%": {
				top: 0,
				opacity: 1
			}
		}), l = new Ea("antNotificationBottomFadeIn", {
			"0%": {
				bottom: e.calc(r).mul(-1).equal(),
				opacity: 0
			},
			"100%": {
				bottom: 0,
				opacity: 1
			}
		}), s = new Ea("antNotificationLeftFadeIn", {
			"0%": {
				transform: "translate3d(-100%, 0, 0)",
				opacity: 0
			},
			"100%": {
				transform: "translate3d(0, 0, 0)",
				opacity: 1
			}
		});
		return {
			[t]: {
				[`&${t}-top, &${t}-bottom`]: {
					marginInline: 0,
					[o]: {
						marginInline: "auto auto"
					}
				},
				[`&${t}-top`]: {
					[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
						animationName: i
					}
				},
				[`&${t}-bottom`]: {
					[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
						animationName: l
					}
				},
				[`&${t}-topRight, &${t}-bottomRight`]: {
					[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
						animationName: a
					}
				},
				[`&${t}-topLeft, &${t}-bottomLeft`]: {
					marginRight: {
						value: 0,
						_skip_check_: !0
					},
					marginLeft: {
						value: n,
						_skip_check_: !0
					},
					[o]: {
						marginInlineEnd: "auto",
						marginInlineStart: 0
					},
					[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
						animationName: s
					}
				}
			}
		}
	},
	yg = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"],
	bg = {
		topLeft: "left",
		topRight: "right",
		bottomLeft: "left",
		bottomRight: "right",
		top: "left",
		bottom: "left"
	},
	wg = e => {
		const t = {};
		for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
			overflow: "hidden",
			[`& > ${e.componentCls}-notice`]: {
				opacity: 0,
				transition: `opacity ${e.motionDurationMid}`
			}
		};
		return Object.assign({
			[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
				opacity: 0,
				overflow: "hidden",
				color: "transparent",
				pointerEvents: "none"
			}
		}, t)
	},
	kg = e => {
		const t = {};
		for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
			background: e.colorBgBlur,
			backdropFilter: "blur(10px)",
			"-webkit-backdrop-filter": "blur(10px)"
		};
		return Object.assign({}, t)
	},
	xg = e => {
		const {
			componentCls: t
		} = e;
		return Object.assign({
			[`${t}-stack`]: {
				[`& > ${t}-notice-wrapper`]: Object.assign({
					transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
					willChange: "transform, opacity",
					position: "absolute"
				}, wg(e))
			},
			[`${t}-stack:not(${t}-stack-expanded)`]: {
				[`& > ${t}-notice-wrapper`]: Object.assign({}, kg(e))
			},
			[`${t}-stack${t}-stack-expanded`]: {
				[`& > ${t}-notice-wrapper`]: {
					"&:not(:nth-last-child(-n + 1))": {
						opacity: 1,
						overflow: "unset",
						color: "inherit",
						pointerEvents: "auto",
						[`& > ${e.componentCls}-notice`]: {
							opacity: 1
						}
					},
					"&:after": {
						content: '""',
						position: "absolute",
						height: e.margin,
						width: "100%",
						insetInline: 0,
						bottom: e.calc(e.margin).mul(-1).equal(),
						background: "transparent",
						pointerEvents: "auto"
					}
				}
			}
		}, yg.map((t => ((e, t) => {
			const {
				componentCls: n
			} = e;
			return {
				[`${n}-${t}`]: {
					[`&${n}-stack > ${n}-notice-wrapper`]: {
						[t.startsWith("top") ? "top" : "bottom"]: 0,
						[bg[t]]: {
							value: 0,
							_skip_check_: !0
						}
					}
				}
			}
		})(e, t))).reduce(((e, t) => Object.assign(Object.assign({}, e), t)), {}))
	},
	Sg = e => {
		const {
			iconCls: t,
			componentCls: n,
			boxShadow: r,
			fontSizeLG: o,
			notificationMarginBottom: a,
			borderRadiusLG: i,
			colorSuccess: l,
			colorInfo: s,
			colorWarning: c,
			colorError: u,
			colorTextHeading: d,
			notificationBg: f,
			notificationPadding: p,
			notificationMarginEdge: h,
			notificationProgressBg: m,
			notificationProgressHeight: g,
			fontSize: v,
			lineHeight: y,
			width: b,
			notificationIconSize: w,
			colorText: k
		} = e, x = `${n}-notice`;
		return {
			position: "relative",
			marginBottom: a,
			marginInlineStart: "auto",
			background: f,
			borderRadius: i,
			boxShadow: r,
			[x]: {
				padding: p,
				width: b,
				maxWidth: `calc(100vw - ${so(e.calc(h).mul(2).equal())})`,
				overflow: "hidden",
				lineHeight: y,
				wordWrap: "break-word"
			},
			[`${x}-message`]: {
				marginBottom: e.marginXS,
				color: d,
				fontSize: o,
				lineHeight: e.lineHeightLG
			},
			[`${x}-description`]: {
				fontSize: v,
				color: k
			},
			[`${x}-closable ${x}-message`]: {
				paddingInlineEnd: e.paddingLG
			},
			[`${x}-with-icon ${x}-message`]: {
				marginBottom: e.marginXS,
				marginInlineStart: e.calc(e.marginSM).add(w).equal(),
				fontSize: o
			},
			[`${x}-with-icon ${x}-description`]: {
				marginInlineStart: e.calc(e.marginSM).add(w).equal(),
				fontSize: v
			},
			[`${x}-icon`]: {
				position: "absolute",
				fontSize: w,
				lineHeight: 1,
				[`&-success${t}`]: {
					color: l
				},
				[`&-info${t}`]: {
					color: s
				},
				[`&-warning${t}`]: {
					color: c
				},
				[`&-error${t}`]: {
					color: u
				}
			},
			[`${x}-close`]: Object.assign({
				position: "absolute",
				top: e.notificationPaddingVertical,
				insetInlineEnd: e.notificationPaddingHorizontal,
				color: e.colorIcon,
				outline: "none",
				width: e.notificationCloseButtonSize,
				height: e.notificationCloseButtonSize,
				borderRadius: e.borderRadiusSM,
				transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "none",
				border: "none",
				"&:hover": {
					color: e.colorIconHover,
					backgroundColor: e.colorBgTextHover
				},
				"&:active": {
					backgroundColor: e.colorBgTextActive
				}
			}, Rl(e)),
			[`${x}-progress`]: {
				position: "absolute",
				display: "block",
				appearance: "none",
				inlineSize: `calc(100% - ${so(i)} * 2)`,
				left: {
					_skip_check_: !0,
					value: i
				},
				right: {
					_skip_check_: !0,
					value: i
				},
				bottom: 0,
				blockSize: g,
				border: 0,
				"&, &::-webkit-progress-bar": {
					borderRadius: i,
					backgroundColor: "rgba(0, 0, 0, 0.04)"
				},
				"&::-moz-progress-bar": {
					background: m
				},
				"&::-webkit-progress-value": {
					borderRadius: i,
					background: m
				}
			},
			[`${x}-actions`]: {
				float: "right",
				marginTop: e.marginSM
			}
		}
	},
	Cg = e => {
		const {
			componentCls: t,
			notificationMarginBottom: n,
			notificationMarginEdge: r,
			motionDurationMid: o,
			motionEaseInOut: a
		} = e, i = `${t}-notice`, l = new Ea("antNotificationFadeOut", {
			"0%": {
				maxHeight: e.animationMaxHeight,
				marginBottom: n
			},
			"100%": {
				maxHeight: 0,
				marginBottom: 0,
				paddingTop: 0,
				paddingBottom: 0,
				opacity: 0
			}
		});
		return [{
			[t]: Object.assign(Object.assign({}, $l(e)), {
				position: "fixed",
				zIndex: e.zIndexPopup,
				marginRight: {
					value: r,
					_skip_check_: !0
				},
				[`${t}-hook-holder`]: {
					position: "relative"
				},
				[`${t}-fade-appear-prepare`]: {
					opacity: "0 !important"
				},
				[`${t}-fade-enter, ${t}-fade-appear`]: {
					animationDuration: e.motionDurationMid,
					animationTimingFunction: a,
					animationFillMode: "both",
					opacity: 0,
					animationPlayState: "paused"
				},
				[`${t}-fade-leave`]: {
					animationTimingFunction: a,
					animationFillMode: "both",
					animationDuration: o,
					animationPlayState: "paused"
				},
				[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
					animationPlayState: "running"
				},
				[`${t}-fade-leave${t}-fade-leave-active`]: {
					animationName: l,
					animationPlayState: "running"
				},
				"&-rtl": {
					direction: "rtl",
					[`${i}-actions`]: {
						float: "left"
					}
				}
			})
		}, {
			[t]: {
				[`${i}-wrapper`]: Object.assign({}, Sg(e))
			}
		}]
	},
	Eg = e => ({
		zIndexPopup: e.zIndexPopupBase + eu + 50,
		width: 384
	}),
	Og = e => {
		const t = e.paddingMD,
			n = e.paddingLG;
		return ul(e, {
			notificationBg: e.colorBgElevated,
			notificationPaddingVertical: t,
			notificationPaddingHorizontal: n,
			notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
			notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(.55).equal(),
			notificationMarginBottom: e.margin,
			notificationPadding: `${so(e.paddingMD)} ${so(e.paddingContentHorizontalLG)}`,
			notificationMarginEdge: e.marginLG,
			animationMaxHeight: 150,
			notificationStackLayer: 3,
			notificationProgressHeight: 2,
			notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
		})
	},
	$g = Nl("Notification", (e => {
		const t = Og(e);
		return [Cg(t), vg(t), xg(t)]
	}), Eg),
	Pg = Il(["Notification", "PurePanel"], (e => {
		const t = `${e.componentCls}-notice`,
			n = Og(e);
		return {
			[`${t}-pure-panel`]: Object.assign(Object.assign({}, Sg(n)), {
				width: n.width,
				maxWidth: `calc(100vw - ${so(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
				margin: 0
			})
		}
	}), Eg);

function jg(e, t) {
	return null === t || !1 === t ? null : t || v.createElement(pc, {
		className: `${e}-close-icon`
	})
}
const _g = {
		success: lc,
		info: bc,
		error: uc,
		warning: gc
	},
	Rg = e => {
		const {
			prefixCls: t,
			icon: n,
			type: r,
			message: o,
			description: a,
			actions: i,
			role: l = "alert"
		} = e;
		let s = null;
		return n ? s = v.createElement("span", {
			className: `${t}-icon`
		}, n) : r && (s = v.createElement(_g[r] || null, {
			className: On(`${t}-icon`, `${t}-icon-${r}`)
		})), v.createElement("div", {
			className: On({
				[`${t}-with-icon`]: s
			}),
			role: l
		}, s, v.createElement("div", {
			className: `${t}-message`
		}, o), v.createElement("div", {
			className: `${t}-description`
		}, a), i && v.createElement("div", {
			className: `${t}-actions`
		}, i))
	},
	Mg = e => {
		const {
			prefixCls: t,
			className: n,
			icon: r,
			type: o,
			message: a,
			description: i,
			btn: l,
			actions: s,
			closable: c = !0,
			closeIcon: u,
			className: d
		} = e, f = function (e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
			}
			return n
		}(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]), {
			getPrefixCls: p
		} = v.useContext(Di), h = null != s ? s : l, m = t || p("notification"), g = `${m}-notice`, y = Lc(m), [b, w, k] = $g(m, y);
		return b(v.createElement("div", {
			className: On(`${g}-pure-panel`, w, n, k, y)
		}, v.createElement(Pg, {
			prefixCls: m
		}), v.createElement(Ac, Object.assign({}, f, {
			prefixCls: m,
			eventKey: "pure",
			duration: null,
			closable: c,
			className: On({
				notificationClassName: d
			}),
			closeIcon: jg(m, u),
			content: v.createElement(Rg, {
				prefixCls: g,
				icon: r,
				type: o,
				message: a,
				description: i,
				actions: h
			})
		}))))
	};
const Fg = ({
		children: e,
		prefixCls: t
	}) => {
		const n = Lc(t),
			[r, o, a] = $g(t, n);
		return r(y.createElement(Hc, {
			classNames: {
				list: On(o, a, n)
			}
		}, e))
	},
	Ng = (e, {
		prefixCls: t,
		key: n
	}) => y.createElement(Fg, {
		prefixCls: t,
		key: n
	}, e),
	Tg = y.forwardRef(((e, t) => {
		const {
			top: n,
			bottom: r,
			prefixCls: o,
			getContainer: a,
			maxCount: i,
			rtl: l,
			onAllRemoved: s,
			stack: c,
			duration: u,
			pauseOnHover: d = !0,
			showProgress: f
		} = e, {
			getPrefixCls: p,
			getPopupContainer: h,
			notification: m,
			direction: g
		} = v.useContext(Di), [, b] = El(), w = o || p("notification"), [k, x] = Xc({
			prefixCls: w,
			style: e => function (e, t, n) {
				let r;
				switch (e) {
					case "top":
						r = {
							left: "50%",
							transform: "translateX(-50%)",
							right: "auto",
							top: t,
							bottom: "auto"
						};
						break;
					case "topLeft":
						r = {
							left: 0,
							top: t,
							bottom: "auto"
						};
						break;
					case "topRight":
						r = {
							right: 0,
							top: t,
							bottom: "auto"
						};
						break;
					case "bottom":
						r = {
							left: "50%",
							transform: "translateX(-50%)",
							right: "auto",
							top: "auto",
							bottom: n
						};
						break;
					case "bottomLeft":
						r = {
							left: 0,
							top: "auto",
							bottom: n
						};
						break;
					default:
						r = {
							right: 0,
							top: "auto",
							bottom: n
						}
				}
				return r
			}(e, null != n ? n : 24, null != r ? r : 24),
			className: () => On({
				[`${w}-rtl`]: null != l ? l : "rtl" === g
			}),
			motion: () => function (e) {
				return {
					motionName: `${e}-fade`
				}
			}(w),
			closable: !0,
			closeIcon: jg(w),
			duration: null != u ? u : 4.5,
			getContainer: () => (null == a ? void 0 : a()) || (null == h ? void 0 : h()) || document.body,
			maxCount: i,
			pauseOnHover: d,
			showProgress: f,
			onAllRemoved: s,
			renderNotifications: Ng,
			stack: !1 !== c && {
				threshold: "object" == typeof c ? null == c ? void 0 : c.threshold : void 0,
				offset: 8,
				gap: b.margin
			}
		});
		return y.useImperativeHandle(t, (() => Object.assign(Object.assign({}, k), {
			prefixCls: w,
			notification: m
		}))), x
	}));

function Ig(e) {
	const t = y.useRef(null);
	La();
	return [y.useMemo((() => {
		const n = n => {
				var r;
				if (!t.current) return;
				const {
					open: o,
					prefixCls: a,
					notification: i
				} = t.current, l = `${a}-notice`, {
					message: s,
					description: c,
					icon: u,
					type: d,
					btn: f,
					actions: p,
					className: h,
					style: m,
					role: g = "alert",
					closeIcon: v,
					closable: b
				} = n, w = function (e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
					}
					return n
				}(n, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]), k = null != p ? p : f, x = jg(l, function (e, t, n) {
					return void 0 !== e ? e : void 0 !== (null == t ? void 0 : t.closeIcon) ? t.closeIcon : null == n ? void 0 : n.closeIcon
				}(v, e, i));
				return o(Object.assign(Object.assign({
					placement: null !== (r = null == e ? void 0 : e.placement) && void 0 !== r ? r : "topRight"
				}, w), {
					content: y.createElement(Rg, {
						prefixCls: l,
						icon: u,
						type: d,
						message: s,
						description: c,
						actions: k,
						role: g
					}),
					className: On(d && `${l}-${d}`, h, null == i ? void 0 : i.className),
					style: Object.assign(Object.assign({}, null == i ? void 0 : i.style), m),
					closeIcon: x,
					closable: null != b ? b : !!x
				}))
			},
			r = {
				open: n,
				destroy: e => {
					var n, r;
					void 0 !== e ? null === (n = t.current) || void 0 === n || n.close(e) : null === (r = t.current) || void 0 === r || r.destroy()
				}
			};
		return ["success", "info", "warning", "error"].forEach((e => {
			r[e] = t => n(Object.assign(Object.assign({}, t), {
				type: e
			}))
		})), r
	}), []), y.createElement(Tg, Object.assign({
		key: "notification-holder"
	}, e, {
		ref: t
	}))]
}

function Lg(e) {
	return Ig(e)
}
const zg = y.createContext({}),
	Ag = y.createContext({
		message: {},
		notification: {},
		modal: {}
	}),
	Dg = Nl("App", (e => {
		const {
			componentCls: t,
			colorText: n,
			fontSize: r,
			lineHeight: o,
			fontFamily: a
		} = e;
		return {
			[t]: {
				color: n,
				fontSize: r,
				lineHeight: o,
				fontFamily: a,
				[`&${t}-rtl`]: {
					direction: "rtl"
				}
			}
		}
	}), (() => ({}))),
	Hg = e => {
		const {
			prefixCls: t,
			children: n,
			className: r,
			rootClassName: o,
			message: a,
			notification: i,
			style: l,
			component: s = "div"
		} = e, {
			direction: c,
			getPrefixCls: u
		} = v.useContext(Di), d = u("app", t), [f, p, h] = Dg(d), m = On(p, d, r, o, h, {
			[`${d}-rtl`]: "rtl" === c
		}), g = v.useContext(zg), b = y.useMemo((() => ({
			message: Object.assign(Object.assign({}, g.message), a),
			notification: Object.assign(Object.assign({}, g.notification), i)
		})), [a, i, g.message, g.notification]), [w, k] = gu(b.message), [x, S] = Lg(b.notification), [C, E] = gg(), O = y.useMemo((() => ({
			message: w,
			notification: x,
			modal: C
		})), [w, x, C]);
		La()(!(h && !1 === s), "usage", "When using cssVar, ensure `component` is assigned a valid React component string.");
		const $ = !1 === s ? y.Fragment : s,
			P = {
				className: m,
				style: l
			};
		return f(y.createElement(Ag.Provider, {
			value: O
		}, y.createElement(zg.Provider, {
			value: b
		}, y.createElement($, Object.assign({}, !1 === s ? void 0 : P), E, k, S, n))))
	};
Hg.useApp = () => y.useContext(Ag);
const Bg = (e, t) => new oi(e).setA(t).toRgbString(),
	Ug = (e, t) => new oi(e).lighten(t).toHexString(),
	Vg = e => {
		const t = ci(e, {
			theme: "dark"
		});
		return {
			1: t[0],
			2: t[1],
			3: t[2],
			4: t[3],
			5: t[6],
			6: t[5],
			7: t[4],
			8: t[6],
			9: t[5],
			10: t[4]
		}
	},
	Wg = (e, t) => {
		const n = e || "#000",
			r = t || "#fff";
		return {
			colorBgBase: n,
			colorTextBase: r,
			colorText: Bg(r, .85),
			colorTextSecondary: Bg(r, .65),
			colorTextTertiary: Bg(r, .45),
			colorTextQuaternary: Bg(r, .25),
			colorFill: Bg(r, .18),
			colorFillSecondary: Bg(r, .12),
			colorFillTertiary: Bg(r, .08),
			colorFillQuaternary: Bg(r, .04),
			colorBgSolid: Bg(r, .95),
			colorBgSolidHover: Bg(r, 1),
			colorBgSolidActive: Bg(r, .9),
			colorBgElevated: Ug(n, 12),
			colorBgContainer: Ug(n, 8),
			colorBgLayout: Ug(n, 0),
			colorBgSpotlight: Ug(n, 26),
			colorBgBlur: Bg(r, .04),
			colorBorder: Ug(n, 26),
			colorBorderSecondary: Ug(n, 19)
		}
	},
	qg = {
		defaultSeed: Ti.token,
		defaultAlgorithm: Fi,
		darkAlgorithm: (e, t) => {
			const n = Object.keys(Za).map((t => {
					const n = ci(e[t], {
						theme: "dark"
					});
					return Array.from({
						length: 10
					}, (() => 1)).reduce(((e, r, o) => (e[`${t}-${o+1}`] = n[o], e[`${t}${o+1}`] = n[o], e)), {})
				})).reduce(((e, t) => e = Object.assign(Object.assign({}, e), t)), {}),
				r = null != t ? t : Fi(e),
				o = Ei(e, {
					generateColorPalettes: Vg,
					generateNeutralColorPalettes: Wg
				});
			return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
				colorPrimaryBg: o.colorPrimaryBorder,
				colorPrimaryBgHover: o.colorPrimaryBorderHover
			})
		},
		compactAlgorithm: (e, t) => {
			const n = null != t ? t : Fi(e),
				r = n.fontSizeSM,
				o = n.controlHeight - 4;
			return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), function (e) {
				const {
					sizeUnit: t,
					sizeStep: n
				} = e, r = n - 2;
				return {
					sizeXXL: t * (r + 10),
					sizeXL: t * (r + 6),
					sizeLG: t * (r + 2),
					sizeMD: t * (r + 2),
					sizeMS: t * (r + 1),
					size: t * r,
					sizeSM: t * r,
					sizeXS: t * (r - 1),
					sizeXXS: t * (r - 1)
				}
			}(null != t ? t : e)), Pi(r)), {
				controlHeight: o
			}), Oi(Object.assign(Object.assign({}, n), {
				controlHeight: o
			})))
		}
	},
	Gg = {},
	Xg = e => {
		let t;
		const n = new Set,
			r = (e, r) => {
				const o = "function" == typeof e ? e(t) : e;
				if (!Object.is(o, t)) {
					const e = t;
					t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), n.forEach((n => n(t, e)))
				}
			},
			o = () => t,
			a = {
				setState: r,
				getState: o,
				getInitialState: () => i,
				subscribe: e => (n.add(e), () => n.delete(e)),
				destroy: () => {
					"production" !== (Gg ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
				}
			},
			i = t = e(r, o, a);
		return a
	};
var Kg, Qg, Yg, Zg, Jg = {
		exports: {}
	},
	ev = {},
	tv = {
		exports: {}
	},
	nv = {};

function rv() {
	return Qg || (Qg = 1, tv.exports = function () {
		if (Kg) return nv;
		Kg = 1;
		var e = m(),
			t = "function" == typeof Object.is ? Object.is : function (e, t) {
				return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
			},
			n = e.useState,
			r = e.useEffect,
			o = e.useLayoutEffect,
			a = e.useDebugValue;

		function i(e) {
			var n = e.getSnapshot;
			e = e.value;
			try {
				var r = n();
				return !t(e, r)
			} catch (o) {
				return !0
			}
		}
		var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
			return t()
		} : function (e, t) {
			var l = t(),
				s = n({
					inst: {
						value: l,
						getSnapshot: t
					}
				}),
				c = s[0].inst,
				u = s[1];
			return o((function () {
				c.value = l, c.getSnapshot = t, i(c) && u({
					inst: c
				})
			}), [e, l, t]), r((function () {
				return i(c) && u({
					inst: c
				}), e((function () {
					i(c) && u({
						inst: c
					})
				}))
			}), [e]), a(l), l
		};
		return nv.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : l, nv
	}()), tv.exports
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ov = o((Zg || (Zg = 1, Jg.exports = function () {
		if (Yg) return ev;
		Yg = 1;
		var e = m(),
			t = rv(),
			n = "function" == typeof Object.is ? Object.is : function (e, t) {
				return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
			},
			r = t.useSyncExternalStore,
			o = e.useRef,
			a = e.useEffect,
			i = e.useMemo,
			l = e.useDebugValue;
		return ev.useSyncExternalStoreWithSelector = function (e, t, s, c, u) {
			var d = o(null);
			if (null === d.current) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f
			} else f = d.current;
			d = i((function () {
				function e(e) {
					if (!a) {
						if (a = !0, r = e, e = c(e), void 0 !== u && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return o = t
						}
						return o = e
					}
					if (t = o, n(r, e)) return t;
					var i = c(e);
					return void 0 !== u && u(t, i) ? (r = e, t) : (r = e, o = i)
				}
				var r, o, a = !1,
					i = void 0 === s ? null : s;
				return [function () {
					return e(t())
				}, null === i ? void 0 : function () {
					return e(i())
				}]
			}), [t, s, c, u]);
			var p = r(e, d[0], d[1]);
			return a((function () {
				f.hasValue = !0, f.value = p
			}), [p]), l(p), p
		}, ev
	}()), Jg.exports)),
	av = {},
	{
		useDebugValue: iv
	} = y,
	{
		useSyncExternalStoreWithSelector: lv
	} = ov;
let sv = !1;
const cv = e => e;
const uv = e => {
	"production" !== (av ? "production" : void 0) && "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
	const t = "function" == typeof e ? (e => e ? Xg(e) : Xg)(e) : e,
		n = (e, n) => function (e, t = cv, n) {
			"production" !== (av ? "production" : void 0) && n && !sv && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), sv = !0);
			const r = lv(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
			return iv(r), r
		}(t, e, n);
	return Object.assign(n, t), n
};
var dv = Symbol.for("immer-nothing"),
	fv = Symbol.for("immer-draftable"),
	pv = Symbol.for("immer-state");

function hv(e, ...t) {
	throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var mv = Object.getPrototypeOf;

function gv(e) {
	return !!e && !!e[pv]
}

function vv(e) {
	var t;
	return !!e && (bv(e) || Array.isArray(e) || !!e[fv] || !!(null == (t = e.constructor) ? void 0 : t[fv]) || Cv(e) || Ev(e))
}
var yv = Object.prototype.constructor.toString();

function bv(e) {
	if (!e || "object" != typeof e) return !1;
	const t = mv(e);
	if (null === t) return !0;
	const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return n === Object || "function" == typeof n && Function.toString.call(n) === yv
}

function wv(e, t) {
	0 === kv(e) ? Reflect.ownKeys(e).forEach((n => {
		t(n, e[n], e)
	})) : e.forEach(((n, r) => t(r, n, e)))
}

function kv(e) {
	const t = e[pv];
	return t ? t.type_ : Array.isArray(e) ? 1 : Cv(e) ? 2 : Ev(e) ? 3 : 0
}

function xv(e, t) {
	return 2 === kv(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Sv(e, t, n) {
	const r = kv(e);
	2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
}

function Cv(e) {
	return e instanceof Map
}

function Ev(e) {
	return e instanceof Set
}

function Ov(e) {
	return e.copy_ || e.base_
}

function $v(e, t) {
	if (Cv(e)) return new Map(e);
	if (Ev(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	const n = bv(e);
	if (!0 === t || "class_only" === t && !n) {
		const t = Object.getOwnPropertyDescriptors(e);
		delete t[pv];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			const o = n[r],
				a = t[o];
			!1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[o] = {
				configurable: !0,
				writable: !0,
				enumerable: a.enumerable,
				value: e[o]
			})
		}
		return Object.create(mv(e), t)
	} {
		const t = mv(e);
		if (null !== t && n) return {
			...e
		};
		const r = Object.create(t);
		return Object.assign(r, e)
	}
}

function Pv(e, t = !1) {
	return _v(e) || gv(e) || !vv(e) || (kv(e) > 1 && (e.set = e.add = e.clear = e.delete = jv), Object.freeze(e), t && Object.entries(e).forEach((([e, t]) => Pv(t, !0)))), e
}

function jv() {
	hv(2)
}

function _v(e) {
	return Object.isFrozen(e)
}
var Rv, Mv = {};

function Fv(e) {
	const t = Mv[e];
	return t || hv(0), t
}

function Nv() {
	return Rv
}

function Tv(e, t) {
	t && (Fv("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Iv(e) {
	Lv(e), e.drafts_.forEach(Av), e.drafts_ = null
}

function Lv(e) {
	e === Rv && (Rv = e.parent_)
}

function zv(e) {
	return Rv = {
		drafts_: [],
		parent_: Rv,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	}
}

function Av(e) {
	const t = e[pv];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
}

function Dv(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	const n = t.drafts_[0];
	return void 0 !== e && e !== n ? (n[pv].modified_ && (Iv(t), hv(4)), vv(e) && (e = Hv(t, e), t.parent_ || Uv(t, e)), t.patches_ && Fv("Patches").generateReplacementPatches_(n[pv].base_, e, t.patches_, t.inversePatches_)) : e = Hv(t, n, []), Iv(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== dv ? e : void 0
}

function Hv(e, t, n) {
	if (_v(t)) return t;
	const r = t[pv];
	if (!r) return wv(t, ((o, a) => Bv(e, r, t, o, a, n))), t;
	if (r.scope_ !== e) return t;
	if (!r.modified_) return Uv(e, r.base_, !0), r.base_;
	if (!r.finalized_) {
		r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
		const t = r.copy_;
		let o = t,
			a = !1;
		3 === r.type_ && (o = new Set(t), t.clear(), a = !0), wv(o, ((o, i) => Bv(e, r, t, o, i, n, a))), Uv(e, t, !1), n && e.patches_ && Fv("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
	}
	return r.copy_
}

function Bv(e, t, n, r, o, a, i) {
	if (gv(o)) {
		const i = Hv(e, o, a && t && 3 !== t.type_ && !xv(t.assigned_, r) ? a.concat(r) : void 0);
		if (Sv(n, r, i), !gv(i)) return;
		e.canAutoFreeze_ = !1
	} else i && n.add(o);
	if (vv(o) && !_v(o)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		Hv(e, o), t && t.scope_.parent_ || "symbol" == typeof r || !Object.prototype.propertyIsEnumerable.call(n, r) || Uv(e, o)
	}
}

function Uv(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Pv(t, n)
}
var Vv = {
		get(e, t) {
			if (t === pv) return e;
			const n = Ov(e);
			if (!xv(n, t)) return function (e, t, n) {
				var r;
				const o = Gv(t, n);
				return o ? "value" in o ? o.value : null == (r = o.get) ? void 0 : r.call(e.draft_) : void 0
			}(e, n, t);
			const r = n[t];
			return e.finalized_ || !vv(r) ? r : r === qv(e.base_, t) ? (Kv(e), e.copy_[t] = Qv(r, e)) : r
		},
		has: (e, t) => t in Ov(e),
		ownKeys: e => Reflect.ownKeys(Ov(e)),
		set(e, t, n) {
			const r = Gv(Ov(e), t);
			if (null == r ? void 0 : r.set) return r.set.call(e.draft_, n), !0;
			if (!e.modified_) {
				const r = qv(Ov(e), t),
					i = null == r ? void 0 : r[pv];
				if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
				if (((o = n) === (a = r) ? 0 !== o || 1 / o == 1 / a : o != o && a != a) && (void 0 !== n || xv(e.base_, t))) return !0;
				Kv(e), Xv(e)
			}
			var o, a;
			return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
		},
		deleteProperty: (e, t) => (void 0 !== qv(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Kv(e), Xv(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
		getOwnPropertyDescriptor(e, t) {
			const n = Ov(e),
				r = Reflect.getOwnPropertyDescriptor(n, t);
			return r ? {
				writable: !0,
				configurable: 1 !== e.type_ || "length" !== t,
				enumerable: r.enumerable,
				value: n[t]
			} : r
		},
		defineProperty() {
			hv(11)
		},
		getPrototypeOf: e => mv(e.base_),
		setPrototypeOf() {
			hv(12)
		}
	},
	Wv = {};

function qv(e, t) {
	const n = e[pv];
	return (n ? Ov(n) : e)[t]
}

function Gv(e, t) {
	if (!(t in e)) return;
	let n = mv(e);
	for (; n;) {
		const e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = mv(n)
	}
}

function Xv(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && Xv(e.parent_))
}

function Kv(e) {
	e.copy_ || (e.copy_ = $v(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
wv(Vv, ((e, t) => {
	Wv[e] = function () {
		return arguments[0] = arguments[0][0], t.apply(this, arguments)
	}
})), Wv.deleteProperty = function (e, t) {
	return Wv.set.call(this, e, t, void 0)
}, Wv.set = function (e, t, n) {
	return Vv.set.call(this, e[0], t, n, e[0])
};

function Qv(e, t) {
	const n = Cv(e) ? Fv("MapSet").proxyMap_(e, t) : Ev(e) ? Fv("MapSet").proxySet_(e, t) : function (e, t) {
		const n = Array.isArray(e),
			r = {
				type_: n ? 1 : 0,
				scope_: t ? t.scope_ : Nv(),
				modified_: !1,
				finalized_: !1,
				assigned_: {},
				parent_: t,
				base_: e,
				draft_: null,
				copy_: null,
				revoke_: null,
				isManual_: !1
			};
		let o = r,
			a = Vv;
		n && (o = [r], a = Wv);
		const {
			revoke: i,
			proxy: l
		} = Proxy.revocable(o, a);
		return r.draft_ = l, r.revoke_ = i, l
	}(e, t);
	return (t ? t.scope_ : Nv()).drafts_.push(n), n
}

function Yv(e) {
	if (!vv(e) || _v(e)) return e;
	const t = e[pv];
	let n;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = $v(e, t.scope_.immer_.useStrictShallowCopy_)
	} else n = $v(e, !0);
	return wv(n, ((e, t) => {
		Sv(n, e, Yv(t))
	})), t && (t.finalized_ = !1), n
}
var Zv = new class {
		constructor(e) {
			this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
				if ("function" == typeof e && "function" != typeof t) {
					const n = t;
					t = e;
					const r = this;
					return function (e = n, ...o) {
						return r.produce(e, (e => t.call(this, e, ...o)))
					}
				}
				let r;
				if ("function" != typeof t && hv(6), void 0 !== n && "function" != typeof n && hv(7), vv(e)) {
					const o = zv(this),
						a = Qv(e, void 0);
					let i = !0;
					try {
						r = t(a), i = !1
					} finally {
						i ? Iv(o) : Lv(o)
					}
					return Tv(o, n), Dv(r, o)
				}
				if (!e || "object" != typeof e) {
					if (r = t(e), void 0 === r && (r = e), r === dv && (r = void 0), this.autoFreeze_ && Pv(r, !0), n) {
						const t = [],
							o = [];
						Fv("Patches").generateReplacementPatches_(e, r, t, o), n(t, o)
					}
					return r
				}
				hv(1)
			}, this.produceWithPatches = (e, t) => {
				if ("function" == typeof e) return (t, ...n) => this.produceWithPatches(t, (t => e(t, ...n)));
				let n, r;
				return [this.produce(e, t, ((e, t) => {
					n = e, r = t
				})), n, r]
			}, "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
		}
		createDraft(e) {
			vv(e) || hv(8), gv(e) && (e = function (e) {
				gv(e) || hv(10);
				return Yv(e)
			}(e));
			const t = zv(this),
				n = Qv(e, void 0);
			return n[pv].isManual_ = !0, Lv(t), n
		}
		finishDraft(e, t) {
			const n = e && e[pv];
			n && n.isManual_ || hv(9);
			const {
				scope_: r
			} = n;
			return Tv(r, t), Dv(void 0, r)
		}
		setAutoFreeze(e) {
			this.autoFreeze_ = e
		}
		setUseStrictShallowCopy(e) {
			this.useStrictShallowCopy_ = e
		}
		applyPatches(e, t) {
			let n;
			for (n = t.length - 1; n >= 0; n--) {
				const r = t[n];
				if (0 === r.path.length && "replace" === r.op) {
					e = r.value;
					break
				}
			}
			n > -1 && (t = t.slice(n + 1));
			const r = Fv("Patches").applyPatches_;
			return gv(e) ? r(e, t) : this.produce(e, (e => r(e, t)))
		}
	},
	Jv = Zv.produce;
Zv.produceWithPatches.bind(Zv), Zv.setAutoFreeze.bind(Zv), Zv.setUseStrictShallowCopy.bind(Zv), Zv.applyPatches.bind(Zv), Zv.createDraft.bind(Zv), Zv.finishDraft.bind(Zv);
const ey = e => (t, n, r) => (r.setState = (e, n, ...r) => {
		const o = "function" == typeof e ? Jv(e) : e;
		return t(o, n, ...r)
	}, e(r.setState, n, r)),
	ty = {};

function ny(e, t) {
	let n;
	try {
		n = e()
	} catch (r) {
		return
	}
	return {
		getItem: e => {
			var t;
			const r = e => null === e ? null : JSON.parse(e, void 0),
				o = null != (t = n.getItem(e)) ? t : null;
			return o instanceof Promise ? o.then(r) : r(o)
		},
		setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
		removeItem: e => n.removeItem(e)
	}
}
const ry = e => t => {
		try {
			const n = e(t);
			return n instanceof Promise ? n : {
				then: e => ry(e)(n),
				catch (e) {
					return this
				}
			}
		} catch (wS) {
			return {
				then(e) {
					return this
				},
				catch: t => ry(t)(wS)
			}
		}
	},
	oy = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (ty ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), ((e, t) => (n, r, o) => {
		let a = {
				getStorage: () => localStorage,
				serialize: JSON.stringify,
				deserialize: JSON.parse,
				partialize: e => e,
				version: 0,
				merge: (e, t) => ({
					...t,
					...e
				}),
				...t
			},
			i = !1;
		const l = new Set,
			s = new Set;
		let c;
		try {
			c = a.getStorage()
		} catch (g) {}
		if (!c) return e(((...e) => {
			console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
		}), r, o);
		const u = ry(a.serialize),
			d = () => {
				const e = a.partialize({
					...r()
				});
				let t;
				const n = u({
					state: e,
					version: a.version
				}).then((e => c.setItem(a.name, e))).catch((e => {
					t = e
				}));
				if (t) throw t;
				return n
			},
			f = o.setState;
		o.setState = (e, t) => {
			f(e, t), d()
		};
		const p = e(((...e) => {
			n(...e), d()
		}), r, o);
		let h;
		const m = () => {
			var e;
			if (!c) return;
			i = !1, l.forEach((e => e(r())));
			const t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, r())) || void 0;
			return ry(c.getItem.bind(c))(a.name).then((e => {
				if (e) return a.deserialize(e)
			})).then((e => {
				if (e) {
					if ("number" != typeof e.version || e.version === a.version) return e.state;
					if (a.migrate) return a.migrate(e.state, e.version);
					console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
				}
			})).then((e => {
				var t;
				return h = a.merge(e, null != (t = r()) ? t : p), n(h, !0), d()
			})).then((() => {
				null == t || t(h, void 0), i = !0, s.forEach((e => e(h)))
			})).catch((e => {
				null == t || t(void 0, e)
			}))
		};
		return o.persist = {
			setOptions: e => {
				a = {
					...a,
					...e
				}, e.getStorage && (c = e.getStorage())
			},
			clearStorage: () => {
				null == c || c.removeItem(a.name)
			},
			getOptions: () => a,
			rehydrate: () => m(),
			hasHydrated: () => i,
			onHydrate: e => (l.add(e), () => {
				l.delete(e)
			}),
			onFinishHydration: e => (s.add(e), () => {
				s.delete(e)
			})
		}, m(), h || p
	})(e, t)) : ((e, t) => (n, r, o) => {
		let a = {
				storage: ny((() => localStorage)),
				partialize: e => e,
				version: 0,
				merge: (e, t) => ({
					...t,
					...e
				}),
				...t
			},
			i = !1;
		const l = new Set,
			s = new Set;
		let c = a.storage;
		if (!c) return e(((...e) => {
			console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
		}), r, o);
		const u = () => {
				const e = a.partialize({
					...r()
				});
				return c.setItem(a.name, {
					state: e,
					version: a.version
				})
			},
			d = o.setState;
		o.setState = (e, t) => {
			d(e, t), u()
		};
		const f = e(((...e) => {
			n(...e), u()
		}), r, o);
		let p;
		o.getInitialState = () => f;
		const h = () => {
			var e, t;
			if (!c) return;
			i = !1, l.forEach((e => {
				var t;
				return e(null != (t = r()) ? t : f)
			}));
			const o = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, null != (e = r()) ? e : f)) || void 0;
			return ry(c.getItem.bind(c))(a.name).then((e => {
				if (e) {
					if ("number" != typeof e.version || e.version === a.version) return [!1, e.state];
					if (a.migrate) return [!0, a.migrate(e.state, e.version)];
					console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
				}
				return [!1, void 0]
			})).then((e => {
				var t;
				const [o, i] = e;
				if (p = a.merge(i, null != (t = r()) ? t : f), n(p, !0), o) return u()
			})).then((() => {
				null == o || o(p, void 0), p = r(), i = !0, s.forEach((e => e(p)))
			})).catch((e => {
				null == o || o(void 0, e)
			}))
		};
		return o.persist = {
			setOptions: e => {
				a = {
					...a,
					...e
				}, e.storage && (c = e.storage)
			},
			clearStorage: () => {
				null == c || c.removeItem(a.name)
			},
			getOptions: () => a,
			rehydrate: () => h(),
			hasHydrated: () => i,
			onHydrate: e => (l.add(e), () => {
				l.delete(e)
			}),
			onFinishHydration: e => (s.add(e), () => {
				s.delete(e)
			})
		}, a.skipHydration || h(), p || f
	})(e, t),
	ay = "FB AIO",
	iy = {
		vi: 65e3,
		en: 3
	},
	ly = 10729152e5,
	sy = {
		Facebook: "Facebook",
		Instagram: "Instagram",
		Threads: "Threads",
		Tiktok: "Tiktok",
		FacebookPost: "FacebookPost",
		Bilibili: "Bilibili",
		GGDrive: "GGDrive",
		Douyin: "Douyin",
		Scribd: "Scribd"
	},
	cy = {
		[sy.Facebook]: "fa-brands fa-facebook fa-lg",
		[sy.FacebookPost]: "fa-brands fa-facebook fa-lg",
		[sy.Instagram]: "fa-brands fa-instagram fa-lg",
		[sy.Threads]: "fa-solid fa-at fa-lg",
		[sy.Tiktok]: "fa-brands fa-tiktok fa-lg",
		[sy.Bilibili]: "fa-brands fa-bilibili fa-lg",
		[sy.GGDrive]: "fa-brands fa-google fa-lg",
		[sy.Douyin]: "fa-brands fa-tiktok fa-lg",
		[sy.Scribd]: "fa-brands fa-scribd fa-lg"
	},
	uy = {
		[sy.FacebookPost]: {
			en: "FB Post",
			vi: "Bài viết FB"
		}
	},
	dy = {
		vi: "vi",
		en: "en"
	},
	fy = {
		me: {
			url: "https://fb.com/minproducer.fb",
			uid: "100008656354405",
			zalo: "https://zalo.me/0974597614",
			telegram: "",
		},
		donate: null,
		GroupFB: null,
		FaintiyoMedia: null,
		AIOBUFF: {
			website: "https://aiobuff.com",
			post: "https://www.facebook.com/groups/fbaio/posts/1596748910979791",
			moreServices: "https://www.facebook.com/groups/fbaio/posts/1597418370912845"
		},
		FB_AIO: {
			config: "https://raw.githubusercontent.com/Useful-Scripts-Extension/fbaio-config/main/config.json",
			webstore: "https://chromewebstore.google.com/detail/ncncagnhhigemlgiflfgdhcdpipadmmm",
			helpReferral: "https://www.facebook.com/groups/fbaio/posts/1497153027606047",
			howToGetFbDtsg: "https://www.facebook.com/groups/fbaio/posts/1517029315618418",
			unlockVIPChat: "https://www.facebook.com/groups/fbaio/posts/1547801539207862",
			banWarning: "https://www.facebook.com/groups/fbaio/posts/1543286992992650",
			website: "https://facebook-all-in-one.com",
			webisteGithub: "https://fbaio.minproducer.com",
			youtubePlaylist: "https://youtube.com/playlist?list=PLcZcXUjIE-TR0-84OHz8zfomHtzGGES8P&si=etl9Knl5NKwkJtyF",
			server: null
		},
		PostToShare: {
			url: "https://www.facebook.com/groups/fbaio/posts/1473755286612488/",
			urlNew: "https://www.facebook.com/groups/fbaio/posts/1473755286612488/",
			postId: "1473755286612488",
			uid: "100004848287494"
		},
		TopID: {
			webstore: "https://chromewebstore.google.com/detail/apkfbbbikiaebjbpkkbpipmihngckloe"
		}
	},
	py = {
		HOT: {
			bg: "#cc4433",
			color: "white",
			text: "Hot"
		},
		NEW: {
			bg: "purple",
			color: "white",
			text: {
				vi: "Mới",
				en: "New"
			}
		},
		WIP: {
			bg: "darkgreen",
			color: "white",
			text: "🚧"
		}
	},
	hy = {
		[sy.Facebook]: ["🎬 https://fb.watch/...", "🌈 https://www.facebook.com/reel/...", "🎬 https://www.facebook.com/watch/?v=...", "🎬 https://www.facebook.com/.../videos/...", "🔗 https://www.facebook.com/watch/?share_url=...", "🔗 https://www.facebook.com/groups/.../permalink/...", "🔗 https://www.facebook.com/.../posts/..."],
		[sy.GGDrive]: ["🎬Video: https://drive.google.com/file/d/..."],
		[sy.Tiktok]: ["🎬 https://www.tiktok.com/.../video/..."],
		[sy.Douyin]: ["🎬 https://www.douyin.com/video/...", "👤 https://www.douyin.com/user/...&modal_id=...", "👤 https://www.douyin.com/user/...&vid=...", "🔗 Share URL: ... https://v.douyin.com/..."],
		[sy.Bilibili]: ["📺 https://www.bilibili.tv/play/...", "🎬 https://www.bilibili.tv/video/..."]
	},
	my = {
		[sy.Facebook]: [{
			icon: "fa-solid fa-hashtag",
			name: {
				en: "ID of user/group/page",
				vi: "ID của user/group/page"
			},
			url: ["100006164142110"]
		}, {
			icon: "fa-solid fa-link",
			name: {
				en: "URL of user/group/page",
				vi: "Link của user/group/page"
			},
			url: ["https://www.facebook.com/...", "https://www.facebook.com/groups/...", "https://www.facebook.com/groups/.../user/...", "https://www.facebook.com/profile.php?id=..."]
		}, {
			icon: "fa-solid fa-share",
			name: {
				en: "Share URL",
				vi: "Link share"
			},
			url: ["https://www.facebook.com/share/..."]
		}],
		[sy.FacebookPost]: [{
			icon: "fa-regular fa-heart",
			name: {
				en: "Post URL (with multiple photos/videos)",
				vi: "Link bài viết (có nhiều ảnh/video)"
			},
			url: ["https://www.facebook.com/.../posts/...", "https://www.facebook.com/groups/.../posts/...", "https://www.facebook.com/groups/...?multi_permalinks=...", "https://www.facebook.com/photo/?fbid=...&set=...", "https://www.facebook.com/permalink.php?story_fbid=...&id=..."]
		}, {
			icon: "fa-solid fa-film",
			name: {
				en: "Video/Reel URL",
				vi: "Link video/reel"
			},
			url: hy[sy.Facebook]
		}, {
			icon: "fa-solid fa-share",
			name: {
				en: "Share URL",
				vi: "Link share"
			},
			url: ["https://www.facebook.com/share/..."]
		}],
		[sy.Instagram]: [{
			icon: "fa-solid fa-hashtag",
			name: {
				en: "Insta name",
				vi: "Tên insta"
			},
			url: ["99.hoangtran"]
		}, {
			icon: "fa-solid fa-link",
			name: {
				en: "Direct URL",
				vi: "Link insta"
			},
			url: ["https://www.instagram.com/99.hoangtran"]
		}, {
			icon: "fa-solid fa-play",
			name: {
				en: "Story URL",
				vi: "Link story"
			},
			url: ["https://www.instagram.com/stories/99.hoangtran"]
		}],
		[sy.Threads]: [{
			icon: "fa-solid fa-hashtag",
			name: {
				en: "Threads name",
				vi: "Tên threads"
			},
			url: ["99.hoangtran"]
		}, {
			icon: "fa-solid fa-link",
			name: {
				en: "Direct URL",
				vi: "Link threads"
			},
			url: ["https://www.threads.com/@99.hoangtran"]
		}],
		[sy.Tiktok]: [{
			icon: "fa-solid fa-hashtag",
			name: {
				en: "Tiktok name",
				vi: "Tên tiktok"
			},
			url: ["@99.hoangtran", "99.hoangtran"]
		}, {
			icon: "fa-solid fa-link",
			name: {
				en: "Direct URL",
				vi: "Link Tiktok"
			},
			url: ["https://www.tiktok.com/@99hoangtran"]
		}]
	};
var gy, vy, yy, by, wy, ky, xy, Sy, Cy, Ey, Oy, $y, Py, jy, _y, Ry, My, Fy, Ny, Ty, Iy, Ly, zy, Ay, Dy, Hy, By, Uy, Vy, Wy, qy, Gy, Xy, Ky, Qy, Yy, Zy, Jy, eb, tb, nb, rb, ob, ab, ib, lb, sb, cb, ub, db, fb, pb, hb, mb, gb, vb, yb, bb, wb, kb, xb, Sb, Cb, Eb, Ob, $b, Pb, jb, _b, Rb, Mb, Fb, Nb, Tb, Ib, Lb, zb, Ab, Db, Hb, Bb, Ub, Vb, Wb, qb, Gb, Xb, Kb, Qb, Yb, Zb, Jb, ew, tw, nw, rw, ow, aw, iw, lw, sw, cw, uw, dw, fw, pw, hw, mw, gw, vw, yw, bw, ww, kw, xw, Sw, Cw, Ew, Ow, $w, Pw, jw, _w, Rw, Mw, Fw, Nw, Tw;

function Iw() {
	if (by) return yy;
	return by = 1, yy = function (e, t) {
		return e === t || e != e && t != t
	}
}

function Lw() {
	if (ky) return wy;
	ky = 1;
	var e = Iw();
	return wy = function (t, n) {
		for (var r = t.length; r--;)
			if (e(t[r][0], n)) return r;
		return -1
	}
}

function zw() {
	if (Ry) return _y;
	Ry = 1;
	var e = vy ? gy : (vy = 1, gy = function () {
			this.__data__ = [], this.size = 0
		}),
		t = function () {
			if (Sy) return xy;
			Sy = 1;
			var e = Lw(),
				t = Array.prototype.splice;
			return xy = function (n) {
				var r = this.__data__,
					o = e(r, n);
				return !(o < 0 || (o == r.length - 1 ? r.pop() : t.call(r, o, 1), --this.size, 0))
			}
		}(),
		n = function () {
			if (Ey) return Cy;
			Ey = 1;
			var e = Lw();
			return Cy = function (t) {
				var n = this.__data__,
					r = e(n, t);
				return r < 0 ? void 0 : n[r][1]
			}
		}(),
		r = function () {
			if ($y) return Oy;
			$y = 1;
			var e = Lw();
			return Oy = function (t) {
				return e(this.__data__, t) > -1
			}
		}(),
		o = function () {
			if (jy) return Py;
			jy = 1;
			var e = Lw();
			return Py = function (t, n) {
				var r = this.__data__,
					o = e(r, t);
				return o < 0 ? (++this.size, r.push([t, n])) : r[o][1] = n, this
			}
		}();

	function a(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}
	return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, _y = a
}

function Aw() {
	if (Hy) return Dy;
	Hy = 1;
	var e = "object" == typeof r && r && r.Object === Object && r;
	return Dy = e
}

function Dw() {
	if (Uy) return By;
	Uy = 1;
	var e = Aw(),
		t = "object" == typeof self && self && self.Object === Object && self,
		n = e || t || Function("return this")();
	return By = n
}

function Hw() {
	if (Wy) return Vy;
	Wy = 1;
	var e = Dw().Symbol;
	return Vy = e
}

function Bw() {
	if (Yy) return Qy;
	Yy = 1;
	var e = Hw(),
		t = function () {
			if (Gy) return qy;
			Gy = 1;
			var e = Hw(),
				t = Object.prototype,
				n = t.hasOwnProperty,
				r = t.toString,
				o = e ? e.toStringTag : void 0;
			return qy = function (e) {
				var t = n.call(e, o),
					a = e[o];
				try {
					e[o] = void 0;
					var i = !0
				} catch (wS) {}
				var l = r.call(e);
				return i && (t ? e[o] = a : delete e[o]), l
			}
		}(),
		n = function () {
			if (Ky) return Xy;
			Ky = 1;
			var e = Object.prototype.toString;
			return Xy = function (t) {
				return e.call(t)
			}
		}(),
		r = e ? e.toStringTag : void 0;
	return Qy = function (e) {
		return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : r && r in Object(e) ? t(e) : n(e)
	}
}

function Uw() {
	if (Jy) return Zy;
	return Jy = 1, Zy = function (e) {
		var t = typeof e;
		return null != e && ("object" == t || "function" == t)
	}
}

function Vw() {
	if (tb) return eb;
	tb = 1;
	var e = Bw(),
		t = Uw();
	return eb = function (n) {
		if (!t(n)) return !1;
		var r = e(n);
		return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
	}
}

function Ww() {
	if (ab) return ob;
	ab = 1;
	var e, t = function () {
			if (rb) return nb;
			rb = 1;
			var e = Dw()["__core-js_shared__"];
			return nb = e
		}(),
		n = (e = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "";
	return ob = function (e) {
		return !!n && n in e
	}
}

function qw() {
	if (lb) return ib;
	lb = 1;
	var e = Function.prototype.toString;
	return ib = function (t) {
		if (null != t) {
			try {
				return e.call(t)
			} catch (wS) {}
			try {
				return t + ""
			} catch (wS) {}
		}
		return ""
	}
}

function Gw() {
	if (pb) return fb;
	pb = 1;
	var e = function () {
			if (cb) return sb;
			cb = 1;
			var e = Vw(),
				t = Ww(),
				n = Uw(),
				r = qw(),
				o = /^\[object .+?Constructor\]$/,
				a = Function.prototype,
				i = Object.prototype,
				l = a.toString,
				s = i.hasOwnProperty,
				c = RegExp("^" + l.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
			return sb = function (a) {
				return !(!n(a) || t(a)) && (e(a) ? c : o).test(r(a))
			}
		}(),
		t = db ? ub : (db = 1, ub = function (e, t) {
			return null == e ? void 0 : e[t]
		});
	return fb = function (n, r) {
		var o = t(n, r);
		return e(o) ? o : void 0
	}
}

function Xw() {
	if (mb) return hb;
	mb = 1;
	var e = Gw()(Dw(), "Map");
	return hb = e
}

function Kw() {
	if (vb) return gb;
	vb = 1;
	var e = Gw()(Object, "create");
	return gb = e
}

function Qw() {
	if (jb) return Pb;
	jb = 1;
	var e = function () {
			if (bb) return yb;
			bb = 1;
			var e = Kw();
			return yb = function () {
				this.__data__ = e ? e(null) : {}, this.size = 0
			}
		}(),
		t = kb ? wb : (kb = 1, wb = function (e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}),
		n = function () {
			if (Sb) return xb;
			Sb = 1;
			var e = Kw(),
				t = Object.prototype.hasOwnProperty;
			return xb = function (n) {
				var r = this.__data__;
				if (e) {
					var o = r[n];
					return "__lodash_hash_undefined__" === o ? void 0 : o
				}
				return t.call(r, n) ? r[n] : void 0
			}
		}(),
		r = function () {
			if (Eb) return Cb;
			Eb = 1;
			var e = Kw(),
				t = Object.prototype.hasOwnProperty;
			return Cb = function (n) {
				var r = this.__data__;
				return e ? void 0 !== r[n] : t.call(r, n)
			}
		}(),
		o = function () {
			if ($b) return Ob;
			$b = 1;
			var e = Kw();
			return Ob = function (t, n) {
				var r = this.__data__;
				return this.size += this.has(t) ? 0 : 1, r[t] = e && void 0 === n ? "__lodash_hash_undefined__" : n, this
			}
		}();

	function a(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}
	return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, Pb = a
}

function Yw() {
	if (Tb) return Nb;
	Tb = 1;
	var e = Fb ? Mb : (Fb = 1, Mb = function (e) {
		var t = typeof e;
		return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
	});
	return Nb = function (t, n) {
		var r = t.__data__;
		return e(n) ? r["string" == typeof n ? "string" : "hash"] : r.map
	}
}

function Zw() {
	if (Wb) return Vb;
	Wb = 1;
	var e = function () {
			if (Rb) return _b;
			Rb = 1;
			var e = Qw(),
				t = zw(),
				n = Xw();
			return _b = function () {
				this.size = 0, this.__data__ = {
					hash: new e,
					map: new(n || t),
					string: new e
				}
			}
		}(),
		t = function () {
			if (Lb) return Ib;
			Lb = 1;
			var e = Yw();
			return Ib = function (t) {
				var n = e(this, t).delete(t);
				return this.size -= n ? 1 : 0, n
			}
		}(),
		n = function () {
			if (Ab) return zb;
			Ab = 1;
			var e = Yw();
			return zb = function (t) {
				return e(this, t).get(t)
			}
		}(),
		r = function () {
			if (Hb) return Db;
			Hb = 1;
			var e = Yw();
			return Db = function (t) {
				return e(this, t).has(t)
			}
		}(),
		o = function () {
			if (Ub) return Bb;
			Ub = 1;
			var e = Yw();
			return Bb = function (t, n) {
				var r = e(this, t),
					o = r.size;
				return r.set(t, n), this.size += r.size == o ? 0 : 1, this
			}
		}();

	function a(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1])
		}
	}
	return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, Vb = a
}

function Jw() {
	if (Kb) return Xb;
	Kb = 1;
	var e = zw(),
		t = function () {
			if (Fy) return My;
			Fy = 1;
			var e = zw();
			return My = function () {
				this.__data__ = new e, this.size = 0
			}
		}(),
		n = Ty ? Ny : (Ty = 1, Ny = function (e) {
			var t = this.__data__,
				n = t.delete(e);
			return this.size = t.size, n
		}),
		r = Ly ? Iy : (Ly = 1, Iy = function (e) {
			return this.__data__.get(e)
		}),
		o = Ay ? zy : (Ay = 1, zy = function (e) {
			return this.__data__.has(e)
		}),
		a = function () {
			if (Gb) return qb;
			Gb = 1;
			var e = zw(),
				t = Xw(),
				n = Zw();
			return qb = function (r, o) {
				var a = this.__data__;
				if (a instanceof e) {
					var i = a.__data__;
					if (!t || i.length < 199) return i.push([r, o]), this.size = ++a.size, this;
					a = this.__data__ = new n(i)
				}
				return a.set(r, o), this.size = a.size, this
			}
		}();

	function i(t) {
		var n = this.__data__ = new e(t);
		this.size = n.size
	}
	return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = o, i.prototype.set = a, Xb = i
}

function ek() {
	if (tw) return ew;
	tw = 1;
	var e = Zw(),
		t = Yb ? Qb : (Yb = 1, Qb = function (e) {
			return this.__data__.set(e, "__lodash_hash_undefined__"), this
		}),
		n = Jb ? Zb : (Jb = 1, Zb = function (e) {
			return this.__data__.has(e)
		});

	function r(t) {
		var n = -1,
			r = null == t ? 0 : t.length;
		for (this.__data__ = new e; ++n < r;) this.add(t[n])
	}
	return r.prototype.add = r.prototype.push = t, r.prototype.has = n, ew = r
}

function tk() {
	if (aw) return ow;
	return aw = 1, ow = function (e, t) {
		return e.has(t)
	}
}

function nk() {
	if (lw) return iw;
	lw = 1;
	var e = ek(),
		t = rw ? nw : (rw = 1, nw = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
				if (t(e[n], n, e)) return !0;
			return !1
		}),
		n = tk();
	return iw = function (r, o, a, i, l, s) {
		var c = 1 & a,
			u = r.length,
			d = o.length;
		if (u != d && !(c && d > u)) return !1;
		var f = s.get(r),
			p = s.get(o);
		if (f && p) return f == o && p == r;
		var h = -1,
			m = !0,
			g = 2 & a ? new e : void 0;
		for (s.set(r, o), s.set(o, r); ++h < u;) {
			var v = r[h],
				y = o[h];
			if (i) var b = c ? i(y, v, h, o, r, s) : i(v, y, h, r, o, s);
			if (void 0 !== b) {
				if (b) continue;
				m = !1;
				break
			}
			if (g) {
				if (!t(o, (function (e, t) {
						if (!n(g, t) && (v === e || l(v, e, a, i, s))) return g.push(t)
					}))) {
					m = !1;
					break
				}
			} else if (v !== y && !l(v, y, a, i, s)) {
				m = !1;
				break
			}
		}
		return s.delete(r), s.delete(o), m
	}
}

function rk() {
	if (cw) return sw;
	cw = 1;
	var e = Dw().Uint8Array;
	return sw = e
}

function ok() {
	if (pw) return fw;
	return pw = 1, fw = function (e) {
		var t = -1,
			n = Array(e.size);
		return e.forEach((function (e) {
			n[++t] = e
		})), n
	}
}

function ak() {
	if (mw) return hw;
	mw = 1;
	var e = Hw(),
		t = rk(),
		n = Iw(),
		r = nk(),
		o = dw ? uw : (dw = 1, uw = function (e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach((function (e, r) {
				n[++t] = [r, e]
			})), n
		}),
		a = ok(),
		i = e ? e.prototype : void 0,
		l = i ? i.valueOf : void 0;
	return hw = function (e, i, s, c, u, d, f) {
		switch (s) {
			case "[object DataView]":
				if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return !1;
				e = e.buffer, i = i.buffer;
			case "[object ArrayBuffer]":
				return !(e.byteLength != i.byteLength || !d(new t(e), new t(i)));
			case "[object Boolean]":
			case "[object Date]":
			case "[object Number]":
				return n(+e, +i);
			case "[object Error]":
				return e.name == i.name && e.message == i.message;
			case "[object RegExp]":
			case "[object String]":
				return e == i + "";
			case "[object Map]":
				var p = o;
			case "[object Set]":
				var h = 1 & c;
				if (p || (p = a), e.size != i.size && !h) return !1;
				var m = f.get(e);
				if (m) return m == i;
				c |= 2, f.set(e, i);
				var g = r(p(e), p(i), c, u, d, f);
				return f.delete(e), g;
			case "[object Symbol]":
				if (l) return l.call(e) == l.call(i)
		}
		return !1
	}
}

function ik() {
	if (bw) return yw;
	bw = 1;
	var e = Array.isArray;
	return yw = e
}

function lk() {
	if (kw) return ww;
	kw = 1;
	var e = vw ? gw : (vw = 1, gw = function (e, t) {
			for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
			return e
		}),
		t = ik();
	return ww = function (n, r, o) {
		var a = r(n);
		return t(n) ? a : e(a, o(n))
	}
}

function sk() {
	if ($w) return Ow;
	$w = 1;
	var e = Sw ? xw : (Sw = 1, xw = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
				var i = e[n];
				t(i, n, e) && (a[o++] = i)
			}
			return a
		}),
		t = Ew ? Cw : (Ew = 1, Cw = function () {
			return []
		}),
		n = Object.prototype.propertyIsEnumerable,
		r = Object.getOwnPropertySymbols;
	return Ow = r ? function (t) {
		return null == t ? [] : (t = Object(t), e(r(t), (function (e) {
			return n.call(t, e)
		})))
	} : t
}

function ck() {
	if (Rw) return _w;
	return Rw = 1, _w = function (e) {
		return null != e && "object" == typeof e
	}
}

function uk() {
	if (Tw) return Nw;
	Tw = 1;
	var e = function () {
			if (Fw) return Mw;
			Fw = 1;
			var e = Bw(),
				t = ck();
			return Mw = function (n) {
				return t(n) && "[object Arguments]" == e(n)
			}
		}(),
		t = ck(),
		n = Object.prototype,
		r = n.hasOwnProperty,
		o = n.propertyIsEnumerable,
		a = e(function () {
			return arguments
		}()) ? e : function (e) {
			return t(e) && r.call(e, "callee") && !o.call(e, "callee")
		};
	return Nw = a
}
var dk, fk, pk, hk, mk, gk, vk, yk, bk, wk, kk, xk = {
	exports: {}
};

function Sk() {
	return pk || (pk = 1, function (e, t) {
		var n = Dw(),
			r = fk ? dk : (fk = 1, dk = function () {
				return !1
			}),
			o = t && !t.nodeType && t,
			a = o && e && !e.nodeType && e,
			i = a && a.exports === o ? n.Buffer : void 0,
			l = (i ? i.isBuffer : void 0) || r;
		e.exports = l
	}(xk, xk.exports)), xk.exports
}

function Ck() {
	if (mk) return hk;
	mk = 1;
	var e = /^(?:0|[1-9]\d*)$/;
	return hk = function (t, n) {
		var r = typeof t;
		return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && e.test(t)) && t > -1 && t % 1 == 0 && t < n
	}
}

function Ek() {
	if (vk) return gk;
	vk = 1;
	return gk = function (e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
	}
}
var Ok, $k, Pk, jk, _k, Rk, Mk, Fk, Nk, Tk, Ik, Lk, zk, Ak, Dk, Hk, Bk, Uk, Vk, Wk, qk, Gk, Xk, Kk, Qk, Yk, Zk, Jk, ex, tx, nx, rx, ox, ax, ix, lx, sx, cx = {
	exports: {}
};

function ux() {
	if (Pk) return $k;
	Pk = 1;
	var e = function () {
			if (bk) return yk;
			bk = 1;
			var e = Bw(),
				t = Ek(),
				n = ck(),
				r = {};
			return r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1, yk = function (o) {
				return n(o) && t(o.length) && !!r[e(o)]
			}
		}(),
		t = kk ? wk : (kk = 1, wk = function (e) {
			return function (t) {
				return e(t)
			}
		}),
		n = (Ok || (Ok = 1, function (e, t) {
			var n = Aw(),
				r = t && !t.nodeType && t,
				o = r && e && !e.nodeType && e,
				a = o && o.exports === r && n.process,
				i = function () {
					try {
						return o && o.require && o.require("util").types || a && a.binding && a.binding("util")
					} catch (wS) {}
				}();
			e.exports = i
		}(cx, cx.exports)), cx.exports),
		r = n && n.isTypedArray,
		o = r ? t(r) : e;
	return $k = o
}

function dx() {
	if (_k) return jk;
	_k = 1;
	var e = jw ? Pw : (jw = 1, Pw = function (e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r
		}),
		t = uk(),
		n = ik(),
		r = Sk(),
		o = Ck(),
		a = ux(),
		i = Object.prototype.hasOwnProperty;
	return jk = function (l, s) {
		var c = n(l),
			u = !c && t(l),
			d = !c && !u && r(l),
			f = !c && !u && !d && a(l),
			p = c || u || d || f,
			h = p ? e(l.length, String) : [],
			m = h.length;
		for (var g in l) !s && !i.call(l, g) || p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || o(g, m)) || h.push(g);
		return h
	}
}

function fx() {
	if (Mk) return Rk;
	Mk = 1;
	var e = Object.prototype;
	return Rk = function (t) {
		var n = t && t.constructor;
		return t === ("function" == typeof n && n.prototype || e)
	}
}

function px() {
	if (Nk) return Fk;
	return Nk = 1, Fk = function (e, t) {
		return function (n) {
			return e(t(n))
		}
	}
}

function hx() {
	if (zk) return Lk;
	zk = 1;
	var e = fx(),
		t = function () {
			if (Ik) return Tk;
			Ik = 1;
			var e = px()(Object.keys, Object);
			return Tk = e
		}(),
		n = Object.prototype.hasOwnProperty;
	return Lk = function (r) {
		if (!e(r)) return t(r);
		var o = [];
		for (var a in Object(r)) n.call(r, a) && "constructor" != a && o.push(a);
		return o
	}
}

function mx() {
	if (Dk) return Ak;
	Dk = 1;
	var e = Vw(),
		t = Ek();
	return Ak = function (n) {
		return null != n && t(n.length) && !e(n)
	}
}

function gx() {
	if (Bk) return Hk;
	Bk = 1;
	var e = dx(),
		t = hx(),
		n = mx();
	return Hk = function (r) {
		return n(r) ? e(r) : t(r)
	}
}

function vx() {
	if (qk) return Wk;
	qk = 1;
	var e = function () {
			if (Vk) return Uk;
			Vk = 1;
			var e = lk(),
				t = sk(),
				n = gx();
			return Uk = function (r) {
				return e(r, n, t)
			}
		}(),
		t = Object.prototype.hasOwnProperty;
	return Wk = function (n, r, o, a, i, l) {
		var s = 1 & o,
			c = e(n),
			u = c.length;
		if (u != e(r).length && !s) return !1;
		for (var d = u; d--;) {
			var f = c[d];
			if (!(s ? f in r : t.call(r, f))) return !1
		}
		var p = l.get(n),
			h = l.get(r);
		if (p && h) return p == r && h == n;
		var m = !0;
		l.set(n, r), l.set(r, n);
		for (var g = s; ++d < u;) {
			var v = n[f = c[d]],
				y = r[f];
			if (a) var b = s ? a(y, v, f, r, n, l) : a(v, y, f, n, r, l);
			if (!(void 0 === b ? v === y || i(v, y, o, a, l) : b)) {
				m = !1;
				break
			}
			g || (g = "constructor" == f)
		}
		if (m && !g) {
			var w = n.constructor,
				k = r.constructor;
			w == k || !("constructor" in n) || !("constructor" in r) || "function" == typeof w && w instanceof w && "function" == typeof k && k instanceof k || (m = !1)
		}
		return l.delete(n), l.delete(r), m
	}
}

function yx() {
	if (Zk) return Yk;
	Zk = 1;
	var e = Gw()(Dw(), "Set");
	return Yk = e
}

function bx() {
	if (nx) return tx;
	nx = 1;
	var e = function () {
			if (Xk) return Gk;
			Xk = 1;
			var e = Gw()(Dw(), "DataView");
			return Gk = e
		}(),
		t = Xw(),
		n = function () {
			if (Qk) return Kk;
			Qk = 1;
			var e = Gw()(Dw(), "Promise");
			return Kk = e
		}(),
		r = yx(),
		o = function () {
			if (ex) return Jk;
			ex = 1;
			var e = Gw()(Dw(), "WeakMap");
			return Jk = e
		}(),
		a = Bw(),
		i = qw(),
		l = "[object Map]",
		s = "[object Promise]",
		c = "[object Set]",
		u = "[object WeakMap]",
		d = "[object DataView]",
		f = i(e),
		p = i(t),
		h = i(n),
		m = i(r),
		g = i(o),
		v = a;
	return (e && v(new e(new ArrayBuffer(1))) != d || t && v(new t) != l || n && v(n.resolve()) != s || r && v(new r) != c || o && v(new o) != u) && (v = function (e) {
		var t = a(e),
			n = "[object Object]" == t ? e.constructor : void 0,
			r = n ? i(n) : "";
		if (r) switch (r) {
			case f:
				return d;
			case p:
				return l;
			case h:
				return s;
			case m:
				return c;
			case g:
				return u
		}
		return t
	}), tx = v
}

function wx() {
	if (ix) return ax;
	ix = 1;
	var e = function () {
			if (ox) return rx;
			ox = 1;
			var e = Jw(),
				t = nk(),
				n = ak(),
				r = vx(),
				o = bx(),
				a = ik(),
				i = Sk(),
				l = ux(),
				s = "[object Arguments]",
				c = "[object Array]",
				u = "[object Object]",
				d = Object.prototype.hasOwnProperty;
			return rx = function (f, p, h, m, g, v) {
				var y = a(f),
					b = a(p),
					w = y ? c : o(f),
					k = b ? c : o(p),
					x = (w = w == s ? u : w) == u,
					S = (k = k == s ? u : k) == u,
					C = w == k;
				if (C && i(f)) {
					if (!i(p)) return !1;
					y = !0, x = !1
				}
				if (C && !x) return v || (v = new e), y || l(f) ? t(f, p, h, m, g, v) : n(f, p, w, h, m, g, v);
				if (!(1 & h)) {
					var E = x && d.call(f, "__wrapped__"),
						O = S && d.call(p, "__wrapped__");
					if (E || O) {
						var $ = E ? f.value() : f,
							P = O ? p.value() : p;
						return v || (v = new e), g($, P, h, m, v)
					}
				}
				return !!C && (v || (v = new e), r(f, p, h, m, g, v))
			}
		}(),
		t = ck();
	return ax = function n(r, o, a, i, l) {
		return r === o || (null == r || null == o || !t(r) && !t(o) ? r != r && o != o : e(r, o, a, i, n, l))
	}, ax
}
const kx = o(function () {
		if (sx) return lx;
		sx = 1;
		var e = wx();
		return lx = function (t, n) {
			return e(t, n)
		}
	}()),
	xx = [
		["", "ncncagnhhigemlgiflfgdhcdpipadmmm"],
		["Dev", "bcdciehmofoknodeodijhfgcacgignjc"]
	],
	Sx = {
		id: null,
		name: null,
		version: null
	};

function Cx(e, t = [], n = (null == Sx ? void 0 : Sx.id)) {
	return Hx({
		action: "fb_allInOne_runFunc",
		fnPath: e,
		params: t
	}, n)
}

function Ex(e, t = {}) {
	return Promise.race([new Promise((e => setTimeout(e, 3e4))), Cx("fetch", [e, t])])
}

function Ox(e, t = {}) {
	return Cx("customFetch", [e, t])
}

function $x(e) {
	return Cx("utils.Storage.get", [e])
}

function Px(e, t) {
	return Cx("utils.Storage.set", [e, t])
}

function jx(e) {
	return Cx("utils.Storage.remove", [e])
}

function _x() {
	return Cx("getSupportedAutoRunFeatures")
}

function Rx(e) {
	return Cx("chrome.windows.create", [{
		url: e,
		incognito: !0
	}])
}
async function Mx() {
	try {
		return await Cx("chrome.permissions.query", [{
			permissions: ["downloads"]
		}])
	} catch (wS) {
		return !1
	}
}

function Fx(e = {}) {
	return Cx("chrome.downloads.download", [e])
}

function Nx() {
	return Cx("chrome.downloads.showDefaultFolder", [])
}
const Tx = {
	redirect: {}
};
async function Ix(e, t = !1, n = !1) {
	if (!t && Tx.redirect[e]) return Tx.redirect[e];
	try {
		let t = e;
		for (;;) {
			let r;
			try {
				r = n ? await fetch(e, {
					method: "HEAD"
				}) : await Cx("customFetch", [e, {
					method: "HEAD"
				}])
			} catch (wS) {
				console.log(wS)
			}
			if (!(null == r ? void 0 : r.redirected) || !r.url || r.url === e) return Tx.redirect[t] = e, e;
			console.log("redirected:", e, "->", r.url), e = r.url
		}
	} catch (wS) {
		return console.log("ERROR:", wS), e
	}
}
async function Lx(e) {
	var t;
	const n = await Ix(e),
		r = await Ox(n, {
			method: "HEAD"
		});
	return {
		url: n,
		size: parseInt(null == (t = r.headers) ? void 0 : t["content-length"])
	}
}
async function zx() {
	const e = await Cx("chrome.declarativeNetRequest.getDynamicRules");
	console.log("currentRules", e);
	let t = [{
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "referer",
				operation: "set",
				value: "https://www.instagram.com/"
			}, {
				header: "origin",
				operation: "set",
				value: "https://www.instagram.com"
			}, {
				header: "sec-fetch-mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-site",
				operation: "set",
				value: "cross-site"
			}, {
				header: "cross-origin-resource-policy",
				operation: "set",
				value: "cross-origin"
			}],
			responseHeaders: [{
				header: "access-control-allow-origin",
				operation: "set",
				value: "*"
			}, {
				header: "X-Frame-Options",
				operation: "remove"
			}, {
				header: "Content-Security-Policy",
				operation: "remove"
			}]
		},
		condition: {
			regexFilter: "^https://.+\\.fna\\.fbcdn\\.net/.*|https://.+\\.cdninstagram\\.com/.*",
			resourceTypes: ["image", "xmlhttprequest", "media"]
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "referer",
				operation: "set",
				value: "https://www.threads.net/"
			}, {
				header: "origin",
				operation: "set",
				value: "https://www.threads.net"
			}]
		},
		condition: {
			urlFilter: "https://www.threads.net/*",
			resourceTypes: ["xmlhttprequest"]
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "referer",
				operation: "set",
				value: "https://www.threads.com/"
			}, {
				header: "origin",
				operation: "set",
				value: "https://www.threads.com"
			}]
		},
		condition: {
			urlFilter: "https://www.threads.com/*",
			resourceTypes: ["xmlhttprequest"]
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "Referer",
				operation: "set",
				value: "https://www.tiktok.com/"
			}, {
				header: "Origin",
				operation: "set",
				value: "https://www.tiktok.com"
			}, {
				header: "Sec-Fetch-Mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-site",
				operation: "set",
				value: "cross-site"
			}],
			responseHeaders: [{
				header: "Access-Control-Allow-Origin",
				operation: "set",
				value: "*"
			}, {
				header: "Content-Security-Policy",
				operation: "remove"
			}]
		},
		condition: {
			initiatorDomains: ["extension://*", "*.github.io", location.hostname],
			resourceTypes: ["xmlhttprequest", "media", "image"],
			regexFilter: "^https://(.*?)\\.(tiktok|tiktokcdn)\\.com/(.*?)"
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "Referer",
				operation: "set",
				value: "https://www.douyin.com/"
			}, {
				header: "Origin",
				operation: "set",
				value: "https://www.douyin.com"
			}, {
				header: "Sec-Fetch-Mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-site",
				operation: "set",
				value: "cross-site"
			}],
			responseHeaders: [{
				header: "Access-Control-Allow-Origin",
				operation: "set",
				value: "*"
			}, {
				header: "Content-Security-Policy",
				operation: "remove"
			}]
		},
		condition: {
			initiatorDomains: ["extension://*", "*.github.io", location.hostname],
			resourceTypes: ["media", "image"],
			regexFilter: "^https://(.*?)\\.(douyin|zjcdn|douyinstatic)\\.com/(.*?)"
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "Referer",
				operation: "set",
				value: "https://youtube.googleapis.com/"
			}, {
				header: "Sec-Fetch-Mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-dest",
				operation: "set",
				value: "video"
			}]
		},
		condition: {
			resourceTypes: ["media"],
			regexFilter: "^https://(.*?)\\.drive.google.com/videoplayback/(.*?)"
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "Origin",
				operation: "set",
				value: "https://lh3.googleusercontent.com"
			}, {
				header: "Referer",
				operation: "set",
				value: "https://lh3.googleusercontent.com/"
			}]
		},
		condition: {
			resourceTypes: ["image", "xmlhttprequest"],
			regexFilter: "^https://lh3.googleusercontent.com/(.*?)"
		}
	}, {
		priority: 1,
		action: {
			type: "modifyHeaders",
			requestHeaders: [{
				header: "Origin",
				operation: "set",
				value: "https://www.bilibili.tv"
			}, {
				header: "Referer",
				operation: "set",
				value: "https://www.bilibili.tv/"
			}, {
				header: "Sec-Fetch-Mode",
				operation: "set",
				value: "no-cors"
			}, {
				header: "sec-fetch-mode",
				operation: "set",
				value: "no-cors"
			}]
		},
		condition: {
			resourceTypes: ["xmlhttprequest", "media"],
			regexFilter: "^https://(.*?)(.bilivideo.com|.akamaized.net|api.bilibili.tv)/(.*?)"
		}
	}].map((t => {
		var n;
		const r = null == (n = e.find((e => {
			const n = {
				...t,
				id: e.id
			};
			return kx(n, e)
		}))) ? void 0 : n.id;
		return {
			...t,
			id: r
		}
	}));
	const n = t.filter((e => !e.id)).length,
		r = await Ax(n, e);
	let o = 0;
	t = t.map((e => (e.id || (e.id = r[o], o++), e))), console.log("rules", n, r, o, t);
	try {
		await Cx("chrome.declarativeNetRequest.updateDynamicRules", [{
			addRules: t,
			removeRuleIds: t.map((e => e.id))
		}, "callback"])
	} catch (wS) {
		console.log("update rules error", wS)
	}
	return !0
}
async function Ax(e = 1, t = []) {
	t.length || (t = await Cx("chrome.declarativeNetRequest.getDynamicRules"));
	const n = new Set(t.map((e => e.id))),
		r = [];
	let o = 1;
	for (; r.length < e;) n.has(o) || (r.push(o), n.add(o)), o++;
	return r
}
async function Dx() {
	var e;
	if (!window || !(null == (e = null == window ? void 0 : window.chrome) ? void 0 : e.runtime)) return !1;
	if (null == Sx ? void 0 : Sx.id) return Sx;
	for (const [t, n] of xx) try {
		const e = await Cx("chrome.runtime.getManifest", [], n);
		if (!e) continue;
		const r = null == e ? void 0 : e.name;
		return console.log("connected to extension ", r, e), Sx.name = r + (t && t != r ? ` (${t})` : ""), Sx.id = n, Sx.version = (null == e ? void 0 : e.version) || "", Sx
	} catch (wS) {
		console.log("CANNOT connect to ", t, wS)
	}
	return !1
}

function Hx(e, t = (null == Sx ? void 0 : Sx.id)) {
	return new Promise(((n, r) => {
		var o;
		if (!t || !window || !(null == (o = null == window ? void 0 : window.chrome) ? void 0 : o.runtime)) return r(new Error("Cannot connect to extension"));
		try {
			window.chrome.runtime.sendMessage(t, e, (function (e) {
				(null == e ? void 0 : e.error) ? r((null == e ? void 0 : e.error) || new Error("Extension return empty")): n(e)
			}))
		} catch (a) {
			return r(a)
		}
	}))
}
const Bx = Object.freeze(Object.defineProperty({
		__proto__: null,
		canUseDownloadAPI: Mx,
		checkConnectExtension: Dx,
		connectedExtension: Sx,
		customeFetch: Ox,
		download: Fx,
		fetchExtension: Ex,
		fixCORS: zx,
		getFileSize: Lx,
		getNextDynamicRuleIds: Ax,
		getRedirectedUrl: Ix,
		getStorageValue: $x,
		getSupportedAutoRunFeatures: _x,
		openURLInIncognito: Rx,
		removeStorageValue: jx,
		runExtFunc: Cx,
		sendMessage: Hx,
		setStorageValue: Px,
		showDefaultDownloadFolder: Nx
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Ux = (e, t) => ({
		persist: {
			smoothScroll: !1,
			compactMode: !1,
			devMode: !1,
			muted: !1,
			darkMode: !0,
			profile: null,
			platform: null,
			friendsByUid: {},
			bulkSearchHistory: [],
			notifications: [],
			language: null,
			sharedPostURL: null,
			sharedPostTime: null,
			BEVIPExpiredTime: {},
			cached: {}
		},
		setSmoothScroll: t => e((e => {
			e.persist.smoothScroll = t
		})),
		setCompactMode: t => e((e => {
			e.persist.compactMode = t
		})),
		setDevMode: t => e((e => {
			e.persist.devMode = t
		})),
		setMuted: t => e((e => {
			e.persist.muted = t
		})),
		setDarkMode: t => e((e => {
			e.persist.darkMode = t
		})),
		setProfile: t => e((e => {
			e.persist.profile = t
		})),
		setPlatform: t => e((e => {
			e.persist.platform = t
		})),
		setFriendsByUid: (t, n) => e((e => {
			try {
				e.persist.friendsByUid || (e.persist.friendsByUid = {}), t && (e.persist.friendsByUid[t] = n)
			} catch (wS) {
				console.error(wS)
			}
		})),
		addBulkSearchHistory: (t, n = 1e3) => e((e => {
			try {
				Array.isArray(t) || (t = [t]), e.persist.bulkSearchHistory || (e.persist.bulkSearchHistory = []);
				for (let n of t) {
					let t = e.persist.bulkSearchHistory.findIndex((e => e.targetId === n.targetId));
					t > -1 && e.persist.bulkSearchHistory.splice(t, 1), e.persist.bulkSearchHistory.push(n)
				}
				e.persist.bulkSearchHistory.length > n && (e.persist.bulkSearchHistory = e.persist.bulkSearchHistory.slice(e.persist.bulkSearchHistory.length - n))
			} catch (wS) {
				console.error(wS)
			}
		})),
		deleteBulkSearchHistory: (t, n) => e((e => {
			var r;
			try {
				let o = null == (r = e.persist.bulkSearchHistory) ? void 0 : r.findIndex((e => e.platform === t && e.targetId === n));
				o > -1 && e.persist.bulkSearchHistory.splice(o, 1)
			} catch (wS) {
				console.error(wS)
			}
		})),
		clearBulkSearchHistory: t => e((e => {
			var n;
			e.persist.bulkSearchHistory = (null == (n = e.persist.bulkSearchHistory) ? void 0 : n.filter((e => e.platform !== t))) || []
		})),
		addNotification: (t, n = 1e3) => e((e => {
			try {
				e.persist.notifications || (e.persist.notifications = []), e.persist.notifications.push(t), e.persist.notifications.length > n && (e.persist.notifications = e.persist.notifications.slice(e.persist.notifications.length - n))
			} catch (wS) {
				console.error(wS)
			}
		})),
		setNotifications: (t = []) => e((e => {
			e.persist.notifications = t
		})),
		setLanguage: t => e((e => {
			"string" == typeof t && t in dy && (localStorage.setItem("language", t), e.persist.language = t)
		})),
		setSharedPostURL: t => e((e => {
			e.persist.sharedPostURL = t
		})),
		setSharedPostTime: t => e((e => {
			e.persist.sharedPostTime = t
		})),
		setBEVIPexpiredTime: (t, n) => e((e => {
			e.persist.BEVIPExpiredTime || (e.persist.BEVIPExpiredTime = {}), e.persist.BEVIPExpiredTime[t] = n
		})),
		setCache: (t, n) => e((e => {
			e.persist.cached || (e.persist.cached = {}), e.persist.cached[t] = n
		})),
		removeCache: t => e((e => {
			e.persist.cached || (e.persist.cached = {}), delete e.persist.cached[t]
		}))
	}),
	Vx = {
		hydrated: e => e.hydrated,
		smoothScroll: e => e.persist.smoothScroll,
		compactMode: e => e.persist.compactMode,
		devMode: e => e.persist.devMode,
		muted: e => e.persist.muted,
		darkMode: e => e.persist.darkMode,
		platform: e => e.persist.platform,
		profile: e => e.persist.profile,
		friendsByUid: e => e.persist.friendsByUid || {},
		bulkSearchHistory: e => e.persist.bulkSearchHistory || [],
		notifications: e => e.persist.notifications || [],
		language: e => e.persist.language || localStorage.getItem("language"),
		sharedPostURL: e => e.persist.sharedPostURL,
		sharedPostTime: e => e.persist.sharedPostTime || 0,
		BEVIPExpiredTime: e => e.persist.BEVIPExpiredTime || {},
		setSmoothScroll: e => e.setSmoothScroll,
		setCompactMode: e => e.setCompactMode,
		setDevMode: e => e.setDevMode,
		setMuted: e => e.setMuted,
		setDarkMode: e => e.setDarkMode,
		setProfile: e => e.setProfile,
		setPlatform: e => e.setPlatform,
		setFriendsByUid: e => e.setFriendsByUid,
		addBulkSearchHistory: e => e.addBulkSearchHistory,
		deleteBulkSearchHistory: e => e.deleteBulkSearchHistory,
		clearBulkSearchHistory: e => e.clearBulkSearchHistory,
		addNotification: e => e.addNotification,
		setNotifications: e => e.setNotifications,
		setLanguage: e => e.setLanguage,
		setSharedPostURL: e => e.setSharedPostURL,
		setSharedPostTime: e => e.setSharedPostTime,
		setBEVIPexpiredTime: e => e.setBEVIPexpiredTime,
		setCache: e => e.setCache,
		getCache: e => t => {
			var n, r;
			return null == (r = null == (n = e.persist) ? void 0 : n.cached) ? void 0 : r[t]
		},
		removeCache: e => e.removeCache
	},
	Wx = "facebook-all-in-one-extension",
	qx = (Gx = ey(oy(((e, t) => ({
		...Ux(e),
		hydrated: !1,
		setHasHydrated: t => {
			e({
				hydrated: t
			})
		}
	})), {
		name: Wx,
		partialize: e => ({
			persist: e.persist
		}),
		skipHydration: !0,
		storage: ny((() => ({
			getItem: async e => {
				try {
					return await $x(e) || localStorage.getItem(e)
				} catch (wS) {
					return localStorage.getItem(e)
				}
			},
			setItem: async (e, t) => {
				try {
					await Px(e, t)
				} catch (wS) {
					localStorage.setItem(e, t), console.error(wS)
				}
			},
			removeItem: async e => {
				try {
					await jx(e)
				} catch (wS) {
					localStorage.removeItem(e), console.error(wS)
				}
			}
		}))),
		onRehydrateStorage: () => (e, t) => (console.log("onRehydrateStorage", e, t), e.setHasHydrated(!0), localStorage.removeItem(Wx), (e, t) => {
			t ? console.log("an error happened during hydration", t) : console.log("hydration finished")
		})
	}))) ? uv(Gx) : uv;
var Gx;
const Xx = (e, {
	event: t,
	component: n
}) => {
	if ("Button" !== n) return;
	const r = (e => {
			const {
				borderWidth: t
			} = getComputedStyle(e), n = parseInt(t, 10), r = document.createElement("div");
			return r.style.position = "absolute", r.style.inset = `-${n}px`, r.style.borderRadius = "inherit", r.style.background = "transparent", r.style.zIndex = "999", r.style.pointerEvents = "none", r.style.overflow = "hidden", e.appendChild(r), r
		})(e),
		o = r.getBoundingClientRect(),
		a = t.clientX - o.left,
		i = t.clientY - o.top,
		l = ((e, t, n, r, o = 0) => {
			const a = document.createElement("div");
			return a.style.position = "absolute", a.style.left = `${n}px`, a.style.top = `${r}px`, a.style.width = `${o}px`, a.style.height = `${o}px`, a.style.borderRadius = "50%", a.style.background = t, a.style.transform = "translate(-50%, -50%)", a.style.transition = "all .5s ease-out", e.appendChild(a), a
		})(r, "rgba(255, 255, 255, 0.65)", a, i);
	requestAnimationFrame((() => {
		l.ontransitionend = () => {
			r.remove()
		}, l.style.width = "200px", l.style.height = "200px", l.style.opacity = "0"
	}))
};
var Kx, Qx, Yx, Zx, Jx = {
		exports: {}
	},
	eS = {};

function tS() {
	return Qx || (Qx = 1, Jx.exports = function () {
		if (Kx) return eS;
		Kx = 1;
		var e = "function" == typeof Symbol && Symbol.for,
			t = e ? Symbol.for("react.element") : 60103,
			n = e ? Symbol.for("react.portal") : 60106,
			r = e ? Symbol.for("react.fragment") : 60107,
			o = e ? Symbol.for("react.strict_mode") : 60108,
			a = e ? Symbol.for("react.profiler") : 60114,
			i = e ? Symbol.for("react.provider") : 60109,
			l = e ? Symbol.for("react.context") : 60110,
			s = e ? Symbol.for("react.async_mode") : 60111,
			c = e ? Symbol.for("react.concurrent_mode") : 60111,
			u = e ? Symbol.for("react.forward_ref") : 60112,
			d = e ? Symbol.for("react.suspense") : 60113,
			f = e ? Symbol.for("react.suspense_list") : 60120,
			p = e ? Symbol.for("react.memo") : 60115,
			h = e ? Symbol.for("react.lazy") : 60116,
			m = e ? Symbol.for("react.block") : 60121,
			g = e ? Symbol.for("react.fundamental") : 60117,
			v = e ? Symbol.for("react.responder") : 60118,
			y = e ? Symbol.for("react.scope") : 60119;

		function b(e) {
			if ("object" == typeof e && null !== e) {
				var f = e.$$typeof;
				switch (f) {
					case t:
						switch (e = e.type) {
							case s:
							case c:
							case r:
							case a:
							case o:
							case d:
								return e;
							default:
								switch (e = e && e.$$typeof) {
									case l:
									case u:
									case h:
									case p:
									case i:
										return e;
									default:
										return f
								}
						}
						case n:
							return f
				}
			}
		}

		function w(e) {
			return b(e) === c
		}
		return eS.AsyncMode = s, eS.ConcurrentMode = c, eS.ContextConsumer = l, eS.ContextProvider = i, eS.Element = t, eS.ForwardRef = u, eS.Fragment = r, eS.Lazy = h, eS.Memo = p, eS.Portal = n, eS.Profiler = a, eS.StrictMode = o, eS.Suspense = d, eS.isAsyncMode = function (e) {
			return w(e) || b(e) === s
		}, eS.isConcurrentMode = w, eS.isContextConsumer = function (e) {
			return b(e) === l
		}, eS.isContextProvider = function (e) {
			return b(e) === i
		}, eS.isElement = function (e) {
			return "object" == typeof e && null !== e && e.$$typeof === t
		}, eS.isForwardRef = function (e) {
			return b(e) === u
		}, eS.isFragment = function (e) {
			return b(e) === r
		}, eS.isLazy = function (e) {
			return b(e) === h
		}, eS.isMemo = function (e) {
			return b(e) === p
		}, eS.isPortal = function (e) {
			return b(e) === n
		}, eS.isProfiler = function (e) {
			return b(e) === a
		}, eS.isStrictMode = function (e) {
			return b(e) === o
		}, eS.isSuspense = function (e) {
			return b(e) === d
		}, eS.isValidElementType = function (e) {
			return "string" == typeof e || "function" == typeof e || e === r || e === c || e === a || e === o || e === d || e === f || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === p || e.$$typeof === i || e.$$typeof === l || e.$$typeof === u || e.$$typeof === g || e.$$typeof === v || e.$$typeof === y || e.$$typeof === m)
		}, eS.typeOf = b, eS
	}()), Jx.exports
}
const nS = o(function () {
	if (Zx) return Yx;
	Zx = 1;
	var e = tS(),
		t = {
			childContextTypes: !0,
			contextType: !0,
			contextTypes: !0,
			defaultProps: !0,
			displayName: !0,
			getDefaultProps: !0,
			getDerivedStateFromError: !0,
			getDerivedStateFromProps: !0,
			mixins: !0,
			propTypes: !0,
			type: !0
		},
		n = {
			name: !0,
			length: !0,
			prototype: !0,
			caller: !0,
			callee: !0,
			arguments: !0,
			arity: !0
		},
		r = {
			$$typeof: !0,
			compare: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0,
			type: !0
		},
		o = {};

	function a(n) {
		return e.isMemo(n) ? r : o[n.$$typeof] || t
	}
	o[e.ForwardRef] = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o[e.Memo] = r;
	var i = Object.defineProperty,
		l = Object.getOwnPropertyNames,
		s = Object.getOwnPropertySymbols,
		c = Object.getOwnPropertyDescriptor,
		u = Object.getPrototypeOf,
		d = Object.prototype;
	return Yx = function e(t, r, o) {
		if ("string" != typeof r) {
			if (d) {
				var f = u(r);
				f && f !== d && e(t, f, o)
			}
			var p = l(r);
			s && (p = p.concat(s(r)));
			for (var h = a(t), m = a(r), g = 0; g < p.length; ++g) {
				var v = p[g];
				if (!(n[v] || o && o[v] || m && m[v] || h && h[v])) {
					var y = c(r, v);
					try {
						i(t, v, y)
					} catch (wS) {}
				}
			}
		}
		return t
	}
}());
var rS = y.createContext(),
	oS = {},
	aS = "PENDING",
	iS = "REJECTED";
var lS = function (e) {
	return e
};

function sS(e) {
	var t = e.defaultResolveComponent,
		n = void 0 === t ? lS : t,
		r = e.render,
		o = e.onLoad;

	function a(e, t) {
		void 0 === t && (t = {});
		var a = function (e) {
				return "function" == typeof e ? {
					requireAsync: e,
					resolve: function () {},
					chunkName: function () {}
				} : e
			}(e),
			i = {};

		function l(e) {
			return t.cacheKey ? t.cacheKey(e) : a.resolve ? a.resolve(e) : "static"
		}

		function s(e, r, o) {
			var a = t.resolveComponent ? t.resolveComponent(e, r) : n(e);
			return nS(o, a, {
				preload: !0
			}), a
		}
		var c, u, d = function (e) {
				var t = l(e),
					n = i[t];
				return n && n.status !== iS || ((n = a.requireAsync(e)).status = aS, i[t] = n, n.then((function () {
					n.status = "RESOLVED"
				}), (function (t) {
					console.error("loadable-components: failed to asynchronously load component", {
						fileName: a.resolve(e),
						chunkName: a.chunkName(e),
						error: t ? t.message : t
					}), n.status = iS
				}))), n
			},
			f = function (e) {
				var n, c;

				function u(n) {
					var r;
					return (r = e.call(this, n) || this).state = {
							result: null,
							error: null,
							loading: !0,
							cacheKey: l(n)
						},
						function (e, t) {
							if (!e) {
								var n = new Error("loadable: " + t);
								throw n.framesToPop = 1, n.name = "Invariant Violation", n
							}
						}(!n.__chunkExtractor || a.requireSync, "SSR requires `@loadable/babel-plugin`, please install it"), n.__chunkExtractor ? (!1 === t.ssr || (a.requireAsync(n).catch((function () {
							return null
						})), r.loadSync(), n.__chunkExtractor.addChunk(a.chunkName(n))), pr(r)) : (!1 !== t.ssr && (a.isReady && a.isReady(n) || a.chunkName && oS[a.chunkName(n)]) && r.loadSync(), r)
				}
				c = e, (n = u).prototype = Object.create(c.prototype), n.prototype.constructor = n, cr(n, c), u.getDerivedStateFromProps = function (e, t) {
					var n = l(e);
					return $n({}, t, {
						cacheKey: n,
						loading: t.loading || t.cacheKey !== n
					})
				};
				var f = u.prototype;
				return f.componentDidMount = function () {
					this.mounted = !0;
					var e = this.getCache();
					e && e.status === iS && this.setCache(), this.state.loading && this.loadAsync()
				}, f.componentDidUpdate = function (e, t) {
					t.cacheKey !== this.state.cacheKey && this.loadAsync()
				}, f.componentWillUnmount = function () {
					this.mounted = !1
				}, f.safeSetState = function (e, t) {
					this.mounted && this.setState(e, t)
				}, f.getCacheKey = function () {
					return l(this.props)
				}, f.getCache = function () {
					return i[this.getCacheKey()]
				}, f.setCache = function (e) {
					void 0 === e && (e = void 0), i[this.getCacheKey()] = e
				}, f.triggerOnLoad = function () {
					var e = this;
					o && setTimeout((function () {
						o(e.state.result, e.props)
					}))
				}, f.loadSync = function () {
					if (this.state.loading) try {
						var e = s(a.requireSync(this.props), this.props, h);
						this.state.result = e, this.state.loading = !1
					} catch (t) {
						console.error("loadable-components: failed to synchronously load component, which expected to be available", {
							fileName: a.resolve(this.props),
							chunkName: a.chunkName(this.props),
							error: t ? t.message : t
						}), this.state.error = t
					}
				}, f.loadAsync = function () {
					var e = this,
						t = this.resolveAsync();
					return t.then((function (t) {
						var n = s(t, e.props, h);
						e.safeSetState({
							result: n,
							loading: !1
						}, (function () {
							return e.triggerOnLoad()
						}))
					})).catch((function (t) {
						return e.safeSetState({
							error: t,
							loading: !1
						})
					})), t
				}, f.resolveAsync = function () {
					var e = this.props;
					e.__chunkExtractor, e.forwardedRef;
					var t = Br(e, ["__chunkExtractor", "forwardedRef"]);
					return d(t)
				}, f.render = function () {
					var e = this.props,
						n = e.forwardedRef,
						o = e.fallback;
					e.__chunkExtractor;
					var a = Br(e, ["forwardedRef", "fallback", "__chunkExtractor"]),
						i = this.state,
						l = i.error,
						s = i.loading,
						c = i.result;
					if (t.suspense && (this.getCache() || this.loadAsync()).status === aS) throw this.loadAsync();
					if (l) throw l;
					var u = o || t.fallback || null;
					return s ? u : r({
						fallback: u,
						result: c,
						options: t,
						props: $n({}, a, {
							ref: n
						})
					})
				}, u
			}(y.Component),
			p = (u = function (e) {
				return y.createElement(rS.Consumer, null, (function (t) {
					return y.createElement(c, Object.assign({
						__chunkExtractor: t
					}, e))
				}))
			}, (c = f).displayName && (u.displayName = c.displayName + "WithChunkExtractor"), u),
			h = y.forwardRef((function (e, t) {
				return y.createElement(p, Object.assign({
					forwardedRef: t
				}, e))
			}));
		return h.displayName = "Loadable", h.preload = function (e) {
			h.load(e)
		}, h.load = function (e) {
			return d(e)
		}, h
	}
	return {
		loadable: a,
		lazy: function (e, t) {
			return a(e, $n({}, t, {
				suspense: !0
			}))
		}
	}
}
var cS = sS({
		defaultResolveComponent: function (e) {
			return e.__esModule ? e.default : e.default || e
		},
		render: function (e) {
			var t = e.result,
				n = e.props;
			return y.createElement(t, n)
		}
	}),
	uS = cS.loadable,
	dS = cS.lazy,
	fS = sS({
		onLoad: function (e, t) {
			e && t.forwardedRef && ("function" == typeof t.forwardedRef ? t.forwardedRef(e) : t.forwardedRef.current = e)
		},
		render: function (e) {
			var t = e.result,
				n = e.props;
			return n.children ? n.children(t) : null
		}
	}),
	pS = fS.loadable,
	hS = fS.lazy,
	mS = uS;
mS.lib = pS, dS.lib = hS;
const gS = mS((() => n((() => import("./MyApp-D93h0aQZ.js").then((e => e.a$))), [],
		import.meta.url)), {
		fallback: g.jsx("div", {
			className: "_init_loading",
			children: g.jsx("h1", {
				children: "🚀 Starting FB AIO..."
			})
		})
	}),
	vS = (yS = [{
		path: "/*",
		element: g.jsx(gS, {})
	}], Le({
		basename: void 0,
		future: en({}, void 0, {
			v7_prependBasename: !0
		}),
		history: B({
			window: void 0
		}),
		hydrationData: rn(),
		routes: yS,
		mapRouteProperties: Jt,
		dataStrategy: void 0,
		patchRoutesOnNavigation: void 0,
		window: void 0
	}).initialize());
var yS;

function bS() {
	const e = qx(Vx.darkMode),
		t = qx(Vx.compactMode);
	return g.jsx(Ic, {
		fallback: g.jsx("div", {
			children: "Something went wrong. Please refresh the page."
		}),
		children: g.jsx(v.StrictMode, {
			children: g.jsx(Ws, {
				wave: {
					showEffect: Xx
				},
				theme: {
					algorithm: [e ? qg.darkAlgorithm : qg.defaultAlgorithm, ...t ? [qg.compactAlgorithm] : []]
				},
				children: g.jsx(Hg, {
					children: g.jsx(fn, {
						router: vS
					})
				})
			})
		})
	})
}
N.createRoot(document.getElementById("root")).render(g.jsx(bS, {}));
export {
	y as $, Tc as A, Xs as B, xs as C, Tp as D, Ic as E, Rp as F, Di as G, Ai as H, ac as I, so as J, Ea as K, Nl as L, ul as M, mf as N, $l as O, gl as P, El as Q, Ui as R, La as S, il as T, em as U, Jh as V, Sc as W, ru as X, Gu as Y, Ec as Z, ur as _, mr as a, mx as a$, Zc as a0, Yn as a1, Vr as a2, zc as a3, Dn as a4, zn as a5, Xu as a6, Vd as a7, or as a8, _l as a9, ad as aA, Mg as aB, Lg as aC, Hu as aD, Ws as aE, Us as aF, zg as aG, Ig as aH, Il as aI, Cc as aJ, od as aK, hi as aL, Fl as aM, o as aN, Yc as aO, Ex as aP, n as aQ, Cx as aR, fy as aS, Vx as aT, dy as aU, qx as aV, Hg as aW, hx as aX, bx as aY, uk as aZ, ik as a_, Ol as aa, ef as ab, jl as ac, oi as ad, Pl as ae, Lc as af, qu as ag, sp as ah, uc as ai, xc as aj, am as ak, nm as al, Om as am, Rl as an, jm as ao, cd as ap, md as aq, lf as ar, pc as as, I as at, Wp as au, Dm as av, Qa as aw, qi as ax, Yh as ay, fd as az, ir as b, a as b$, Sk as b0, fx as b1, ux as b2, g as b3, mS as b4, py as b5, Mt as b6, zx as b7, hp as b8, ay as b9, qm as bA, Zm as bB, Fm as bC, Hp as bD, Mm as bE, Km as bF, gg as bG, ag as bH, lg as bI, sg as bJ, cg as bK, ug as bL, tg as bM, dg as bN, ig as bO, r as bP, Zu as bQ, ja as bR, Vn as bS, Ep as bT, Op as bU, Va as bV, pr as bW, Ba as bX, gc as bY, gp as bZ, bd as b_, Yt as ba, Kt as bb, vn as bc, Dx as bd, Px as be, Nt as bf, m as bg, F as bh, iy as bi, xf as bj, Sx as bk, Jv as bl, ly as bm, sy as bn, xn as bo, uy as bp, cy as bq, my as br, Ix as bs, go as bt, tm as bu, Tn as bv, Pa as bw, Im as bx, Aa as by, zm as bz, sr as c, $u as c0, Eu as c1, bi as c2, Ms as c3, ui as c4, lc as c5, _x as c6, $x as c7, Rx as c8, gx as c9, Ld as cA, zd as cB, Td as cC, Fd as cD, Nd as cE, Ad as cF, Id as cG, Sf as cH, Ef as cI, Dd as cJ, Cf as cK, $f as cL, Hd as cM, Of as cN, Rf as cO, Lx as cP, hy as cQ, Ox as cR, Bx as cS, yx as ca, ok as cb, ek as cc, tk as cd, km as ce, Mx as cf, Fx as cg, Nx as ch, Gt as ci, Gw as cj, Iw as ck, Dw as cl, rk as cm, Uw as cn, px as co, ck as cp, Bw as cq, dx as cr, Vw as cs, Jw as ct, Ck as cu, su as cv, gu as cw, cu as cx, mu as cy, Zw as cz, Bn as d, Pn as e, Wn as f, ar as g, $n as h, br as i, rf as j, _r as k, Ur as l, On as m, Pr as n, rl as o, T as p, mo as q, v as r, nr as s, Fn as t, tr as u, er as v, Er as w, Jn as x, Un as y, Ku as z
};