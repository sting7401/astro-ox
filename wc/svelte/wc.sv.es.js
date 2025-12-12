typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const HYDRATION_ERROR = {}, UNINITIALIZED = Symbol(), FILENAME = Symbol("filename");
var is_array = Array.isArray, index_of = Array.prototype.indexOf, array_from = Array.from, object_keys = Object.keys, define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function run_all(e) {
	for (var D = 0; D < e.length; D++) e[D]();
}
function deferred() {
	var e, D;
	return {
		promise: new Promise((O, k) => {
			e = O, D = k;
		}),
		resolve: e,
		reject: D
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, EFFECT_PRESERVED = 1 << 19, EFFECT_OFFSCREEN = 1 << 25, WAS_MARKED = 32768, REACTION_IS_UPDATING = 1 << 21, ASYNC = 1 << 22, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), PROXY_PATH_SYMBOL = Symbol("proxy path"), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function async_derived_orphan() {
	{
		let e = /* @__PURE__ */ Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
		throw e.name = "Svelte error", e;
	}
}
function component_api_changed(e, D) {
	{
		let O = /* @__PURE__ */ Error(`component_api_changed\nCalling \`${e}\` on a component instance (of ${D}) is no longer valid in Svelte 5\nhttps://svelte.dev/e/component_api_changed`);
		throw O.name = "Svelte error", O;
	}
}
function component_api_invalid_new(e, D) {
	{
		let O = /* @__PURE__ */ Error(`component_api_invalid_new\nAttempted to instantiate ${e} with \`new ${D}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.\nhttps://svelte.dev/e/component_api_invalid_new`);
		throw O.name = "Svelte error", O;
	}
}
function derived_references_self() {
	{
		let e = /* @__PURE__ */ Error("derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self");
		throw e.name = "Svelte error", e;
	}
}
function effect_update_depth_exceeded() {
	{
		let e = /* @__PURE__ */ Error("effect_update_depth_exceeded\nMaximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state\nhttps://svelte.dev/e/effect_update_depth_exceeded");
		throw e.name = "Svelte error", e;
	}
}
function hydration_failed() {
	{
		let e = /* @__PURE__ */ Error("hydration_failed\nFailed to hydrate the application\nhttps://svelte.dev/e/hydration_failed");
		throw e.name = "Svelte error", e;
	}
}
function props_invalid_value(e) {
	{
		let D = /* @__PURE__ */ Error(`props_invalid_value\nCannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);
		throw D.name = "Svelte error", D;
	}
}
function rune_outside_svelte(e) {
	{
		let D = /* @__PURE__ */ Error(`rune_outside_svelte\nThe \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);
		throw D.name = "Svelte error", D;
	}
}
function state_descriptors_fixed() {
	{
		let e = /* @__PURE__ */ Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
		throw e.name = "Svelte error", e;
	}
}
function state_prototype_fixed() {
	{
		let e = /* @__PURE__ */ Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
		throw e.name = "Svelte error", e;
	}
}
function state_unsafe_mutation() {
	{
		let e = /* @__PURE__ */ Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
		throw e.name = "Svelte error", e;
	}
}
function svelte_boundary_reset_onerror() {
	{
		let e = /* @__PURE__ */ Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
		throw e.name = "Svelte error", e;
	}
}
var bold = "font-weight: bold", normal = "font-weight: normal";
function await_waterfall(e, D) {
	console.warn(`%c[svelte] await_waterfall\n%cAn async derived, \`${e}\` (${D}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app\nhttps://svelte.dev/e/await_waterfall`, bold, normal);
}
function hydration_mismatch(e) {
	console.warn(`%c[svelte] hydration_mismatch\n%c${e ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${e}` : "Hydration failed because the initial UI does not match what was rendered on the server"}\nhttps://svelte.dev/e/hydration_mismatch`, bold, normal);
}
function lifecycle_double_unmount() {
	console.warn("%c[svelte] lifecycle_double_unmount\n%cTried to unmount a component that was not mounted\nhttps://svelte.dev/e/lifecycle_double_unmount", bold, normal);
}
function select_multiple_invalid_value() {
	console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", bold, normal);
}
function state_proxy_equality_mismatch(e) {
	console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
}
function state_proxy_unmount() {
	console.warn("%c[svelte] state_proxy_unmount\n%cTried to unmount a state proxy, rather than a component\nhttps://svelte.dev/e/state_proxy_unmount", bold, normal);
}
function svelte_boundary_reset_noop() {
	console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", bold, normal);
}
let hydrating = !1;
function set_hydrating(e) {
	hydrating = e;
}
let hydrate_node;
function set_hydrate_node(D) {
	if (D === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = D;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(D) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = D;
	}
}
function next(e = 1) {
	if (hydrating) {
		for (var D = e, O = hydrate_node; D--;) O = /* @__PURE__ */ get_next_sibling(O);
		hydrate_node = O;
	}
}
function skip_nodes(e = !0) {
	for (var D = 0, O = hydrate_node;;) {
		if (O.nodeType === 8) {
			var k = O.data;
			if (k === "]") {
				if (D === 0) return O;
				--D;
			} else (k === "[" || k === "[!") && (D += 1);
		}
		var A = /* @__PURE__ */ get_next_sibling(O);
		e && O.remove(), O = A;
	}
}
function read_hydration_instruction(D) {
	if (!D || D.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return D.data;
}
function equals(e) {
	return e === this.v;
}
function safe_not_equal(e, D) {
	return e == e ? e !== D || typeof e == "object" && !!e || typeof e == "function" : D == D;
}
function safe_equals(e) {
	return !safe_not_equal(e, this.v);
}
function tag(e, D) {
	return e.label = D, tag_proxy(e.v, D), e;
}
function tag_proxy(e, D) {
	return e?.[PROXY_PATH_SYMBOL]?.(D), e;
}
function get_error(e) {
	let D = /* @__PURE__ */ Error(), O = get_stack();
	return O.length === 0 ? null : (O.unshift("\n"), define_property(D, "stack", { value: O.join("\n") }), define_property(D, "name", { value: e }), D);
}
function get_stack() {
	let e = Error.stackTraceLimit;
	Error.stackTraceLimit = Infinity;
	let D = (/* @__PURE__ */ Error()).stack;
	if (Error.stackTraceLimit = e, !D) return [];
	let O = D.split("\n"), k = [];
	for (let e = 0; e < O.length; e++) {
		let D = O[e], A = D.replaceAll("\\", "/");
		if (D.trim() !== "Error") {
			if (D.includes("validate_each_keys")) return [];
			A.includes("svelte/src/internal") || A.includes("node_modules/.vite") || k.push(D);
		}
	}
	return k;
}
let component_context = null;
function set_component_context(e) {
	component_context = e;
}
let dev_stack = null;
function set_dev_stack(e) {
	dev_stack = e;
}
function add_svelte_meta(e, D, k, A, j, M) {
	let N = dev_stack;
	dev_stack = {
		type: D,
		file: k[FILENAME],
		line: A,
		column: j,
		parent: N,
		...M
	};
	try {
		return e();
	} finally {
		dev_stack = N;
	}
}
let dev_current_component_function = null;
function set_dev_current_component_function(e) {
	dev_current_component_function = e;
}
function push(e, D = !1, O) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		l: null
	}, component_context.function = O, dev_current_component_function = O;
}
function pop(e) {
	var D = component_context, O = D.e;
	if (O !== null) {
		D.e = null;
		for (var k of O) create_user_effect(k);
	}
	return e !== void 0 && (D.x = e), D.i = !0, component_context = D.p, dev_current_component_function = component_context?.function ?? null, e ?? {};
}
function is_runes() {
	return !0;
}
var micro_tasks = [];
function run_micro_tasks() {
	var e = micro_tasks;
	micro_tasks = [], run_all(e);
}
function queue_micro_task(e) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var D = micro_tasks;
		queueMicrotask(() => {
			D === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(e);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(e) {
	var D = active_effect;
	if (D === null) return active_reaction.f |= ERROR_VALUE, e;
	if (e instanceof Error && !adjustments.has(e) && adjustments.set(e, get_adjustments(e, D)), D.f & 32768) invoke_error_boundary(e, D);
	else {
		if (!(D.f & 128)) throw !D.parent && e instanceof Error && apply_adjustments(e), e;
		D.b.error(e);
	}
}
function invoke_error_boundary(e, D) {
	for (; D !== null;) {
		if (D.f & 128) try {
			D.b.error(e);
			return;
		} catch (D) {
			e = D;
		}
		D = D.parent;
	}
	throw e instanceof Error && apply_adjustments(e), e;
}
function get_adjustments(e, D) {
	let k = get_descriptor(e, "message");
	if (!(k && !k.configurable)) {
		for (var A = is_firefox ? "  " : "	", j = `\n${A}in ${D.fn?.name || "<unknown>"}`, M = D.ctx; M !== null;) j += `\n${A}in ${M.function?.[FILENAME].split("/").pop()}`, M = M.p;
		return {
			message: e.message + `\n${j}\n`,
			stack: e.stack?.split("\n").filter((e) => !e.includes("svelte/src/internal")).join("\n")
		};
	}
}
function apply_adjustments(e) {
	let D = adjustments.get(e);
	D && (define_property(e, "message", { value: D.message }), define_property(e, "stack", { value: D.stack }));
}
var batches = /* @__PURE__ */ new Set();
let current_batch = null, previous_batch = null, batch_values = null;
var queued_root_effects = [], last_scheduled_effect = null, is_flushing = !1;
let is_flushing_sync = !1;
var Batch = class e {
	committed = !1;
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = 0;
	#r = 0;
	#i = null;
	#a = [];
	#o = [];
	skipped_effects = /* @__PURE__ */ new Set();
	is_fork = !1;
	is_deferred() {
		return this.is_fork || this.#r > 0;
	}
	process(e) {
		queued_root_effects = [], previous_batch = null, this.apply();
		var D = {
			parent: null,
			effect: null,
			effects: [],
			render_effects: [],
			block_effects: []
		};
		for (let O of e) this.#s(O, D);
		this.is_fork || this.#u(), this.is_deferred() ? (this.#c(D.effects), this.#c(D.render_effects), this.#c(D.block_effects)) : (previous_batch = this, current_batch = null, flush_queued_effects(D.render_effects), flush_queued_effects(D.effects), previous_batch = null, this.#i?.resolve()), batch_values = null;
	}
	#s(e, D) {
		e.f ^= CLEAN;
		for (var O = e.first; O !== null;) {
			var k = O.f, A = (k & 96) != 0, j = A && (k & 1024) != 0 || (k & 8192) != 0 || this.skipped_effects.has(O);
			if (O.f & 128 && O.b?.is_pending() && (D = {
				parent: D,
				effect: O,
				effects: [],
				render_effects: [],
				block_effects: []
			}), !j && O.fn !== null) {
				A ? O.f ^= CLEAN : k & 4 ? D.effects.push(O) : is_dirty(O) && (O.f & 16 && D.block_effects.push(O), update_effect(O));
				var M = O.first;
				if (M !== null) {
					O = M;
					continue;
				}
			}
			var N = O.parent;
			for (O = O.next; O === null && N !== null;) N === D.effect && (this.#c(D.effects), this.#c(D.render_effects), this.#c(D.block_effects), D = D.parent), O = N.next, N = N.parent;
		}
	}
	#c(e) {
		for (let D of e) (D.f & 2048 ? this.#a : this.#o).push(D), this.#l(D.deps), set_signal_status(D, CLEAN);
	}
	#l(e) {
		if (e !== null) for (let D of e) !(D.f & 2) || !(D.f & 32768) || (D.f ^= WAS_MARKED, this.#l(D.deps));
	}
	capture(e, D) {
		this.previous.has(e) || this.previous.set(e, D), e.f & 8388608 || (this.current.set(e, e.v), batch_values?.set(e, e.v));
	}
	activate() {
		current_batch = this, this.apply();
	}
	deactivate() {
		current_batch === this && (current_batch = null, batch_values = null);
	}
	flush() {
		if (this.activate(), queued_root_effects.length > 0) {
			if (flush_effects(), current_batch !== null && current_batch !== this) return;
		} else this.#n === 0 && this.process([]);
		this.deactivate();
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear();
	}
	#u() {
		if (this.#r === 0) {
			for (let e of this.#e) e();
			this.#e.clear();
		}
		this.#n === 0 && this.#d();
	}
	#d() {
		if (batches.size > 1) {
			this.previous.clear();
			var e = batch_values, D = !0, O = {
				parent: null,
				effect: null,
				effects: [],
				render_effects: [],
				block_effects: []
			};
			for (let e of batches) {
				if (e === this) {
					D = !1;
					continue;
				}
				let A = [];
				for (let [O, k] of this.current) {
					if (e.current.has(O)) if (D && k !== e.current.get(O)) e.current.set(O, k);
					else continue;
					A.push(O);
				}
				if (A.length === 0) continue;
				let j = [...e.current.keys()].filter((e) => !this.current.has(e));
				if (j.length > 0) {
					var k = queued_root_effects;
					queued_root_effects = [];
					let D = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map();
					for (let e of A) mark_effects(e, j, D, M);
					if (queued_root_effects.length > 0) {
						current_batch = e, e.apply();
						for (let D of queued_root_effects) e.#s(D, O);
						e.deactivate();
					}
					queued_root_effects = k;
				}
			}
			current_batch = null, batch_values = e;
		}
		this.committed = !0, batches.delete(this);
	}
	increment(e) {
		this.#n += 1, e && (this.#r += 1);
	}
	decrement(e) {
		--this.#n, e && --this.#r, this.revive();
	}
	revive() {
		for (let e of this.#a) set_signal_status(e, DIRTY), schedule_effect(e);
		for (let e of this.#o) set_signal_status(e, MAYBE_DIRTY), schedule_effect(e);
		this.#a = [], this.#o = [], this.flush();
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	settled() {
		return (this.#i ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let D = current_batch = new e();
			batches.add(current_batch), is_flushing_sync || e.enqueue(() => {
				current_batch === D && D.flush();
			});
		}
		return current_batch;
	}
	static enqueue(e) {
		queue_micro_task(e);
	}
	apply() {}
};
function flushSync(e) {
	var D = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var O;
		for (e && (current_batch !== null && flush_effects(), O = e());;) {
			if (flush_tasks(), queued_root_effects.length === 0 && (current_batch?.flush(), queued_root_effects.length === 0)) return last_scheduled_effect = null, O;
			flush_effects();
		}
	} finally {
		is_flushing_sync = D;
	}
}
function flush_effects() {
	var e = is_updating_effect;
	is_flushing = !0;
	var D = /* @__PURE__ */ new Set();
	try {
		var O = 0;
		for (set_is_updating_effect(!0); queued_root_effects.length > 0;) {
			var k = Batch.ensure();
			if (O++ > 1e3) {
				var A = /* @__PURE__ */ new Map();
				for (let e of k.current.keys()) for (let [D, O] of e.updated ?? []) {
					var j = A.get(D);
					j || (j = {
						error: O.error,
						count: 0
					}, A.set(D, j)), j.count += O.count;
				}
				for (let e of A.values()) e.error && console.error(e.error);
				infinite_loop_guard();
			}
			k.process(queued_root_effects), old_values.clear();
			for (let e of k.current.keys()) D.add(e);
		}
	} finally {
		is_flushing = !1, set_is_updating_effect(e), last_scheduled_effect = null;
		for (let e of D) e.updated = null;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (e) {
		define_property(e, "stack", { value: "" }), invoke_error_boundary(e, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(e) {
	var D = e.length;
	if (D !== 0) {
		for (var O = 0; O < D;) {
			var k = e[O++];
			if (!(k.f & 24576) && is_dirty(k) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(k), k.deps === null && k.first === null && k.nodes === null && (k.teardown === null && k.ac === null ? unlink_effect(k) : k.fn = null), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let e of eager_block_effects) {
					if (e.f & 24576) continue;
					let D = [e], O = e.parent;
					for (; O !== null;) eager_block_effects.has(O) && (eager_block_effects.delete(O), D.push(O)), O = O.parent;
					for (let e = D.length - 1; e >= 0; e--) {
						let O = D[e];
						O.f & 24576 || update_effect(O);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(e, D, O, k) {
	if (!O.has(e) && (O.add(e), e.reactions !== null)) for (let A of e.reactions) {
		let e = A.f;
		e & 2 ? mark_effects(A, D, O, k) : e & 4194320 && !(e & 2048) && depends_on(A, D, k) && (set_signal_status(A, DIRTY), schedule_effect(A));
	}
}
function depends_on(e, D, O) {
	let k = O.get(e);
	if (k !== void 0) return k;
	if (e.deps !== null) for (let k of e.deps) {
		if (D.includes(k)) return !0;
		if (k.f & 2 && depends_on(k, D, O)) return O.set(k, !0), !0;
	}
	return O.set(e, !1), !1;
}
function schedule_effect(e) {
	for (var D = last_scheduled_effect = e; D.parent !== null;) {
		D = D.parent;
		var O = D.f;
		if (is_flushing && D === active_effect && O & 16 && !(O & 262144)) return;
		if (O & 96) {
			if (!(O & 1024)) return;
			D.f ^= CLEAN;
		}
	}
	queued_root_effects.push(D);
}
function createSubscriber(e) {
	let D = 0, O = source(0), k;
	return tag(O, "createSubscriber version"), () => {
		effect_tracking() && (get(O), render_effect(() => (D === 0 && (k = untrack(() => e(() => increment(O)))), D += 1, () => {
			queue_micro_task(() => {
				--D, D === 0 && (k?.(), k = void 0, increment(O));
			});
		})));
	};
}
var flags = EFFECT_PRESERVED | 65664;
function boundary(e, D, O) {
	new Boundary(e, D, O);
}
var Boundary = class {
	parent;
	#e = !1;
	#t;
	#n = hydrating ? hydrate_node : null;
	#r;
	#i;
	#a;
	#o = null;
	#s = null;
	#c = null;
	#l = null;
	#u = null;
	#d = 0;
	#f = 0;
	#p = !1;
	#m = null;
	#h = createSubscriber(() => (this.#m = source(this.#d), tag(this.#m, "$effect.pending()"), () => {
		this.#m = null;
	}));
	constructor(e, D, O) {
		this.#t = e, this.#r = D, this.#i = O, this.parent = active_effect.b, this.#e = !!this.#r.pending, this.#a = block(() => {
			if (active_effect.b = this, hydrating) {
				let e = this.#n;
				hydrate_next(), e.nodeType === 8 && e.data === "[!" ? this.#_() : this.#g();
			} else {
				var e = this.#v();
				try {
					this.#o = branch(() => O(e));
				} catch (e) {
					this.error(e);
				}
				this.#f > 0 ? this.#b() : this.#e = !1;
			}
			return () => {
				this.#u?.remove();
			};
		}, flags), hydrating && (this.#t = hydrate_node);
	}
	#g() {
		try {
			this.#o = branch(() => this.#i(this.#t));
		} catch (e) {
			this.error(e);
		}
		this.#e = !1;
	}
	#_() {
		let e = this.#r.pending;
		e && (this.#s = branch(() => e(this.#t)), Batch.enqueue(() => {
			var e = this.#v();
			this.#o = this.#y(() => (Batch.ensure(), branch(() => this.#i(e)))), this.#f > 0 ? this.#b() : (pause_effect(this.#s, () => {
				this.#s = null;
			}), this.#e = !1);
		}));
	}
	#v() {
		var e = this.#t;
		return this.#e && (this.#u = create_text(), this.#t.before(this.#u), e = this.#u), e;
	}
	is_pending() {
		return this.#e || !!this.parent && this.parent.is_pending();
	}
	has_pending_snippet() {
		return !!this.#r.pending;
	}
	#y(e) {
		var D = active_effect, O = active_reaction, k = component_context;
		set_active_effect(this.#a), set_active_reaction(this.#a), set_component_context(this.#a.ctx);
		try {
			return e();
		} catch (e) {
			return handle_error(e), null;
		} finally {
			set_active_effect(D), set_active_reaction(O), set_component_context(k);
		}
	}
	#b() {
		let e = this.#r.pending;
		this.#o !== null && (this.#l = document.createDocumentFragment(), this.#l.append(this.#u), move_effect(this.#o, this.#l)), this.#s === null && (this.#s = branch(() => e(this.#t)));
	}
	#x(e) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#x(e);
			return;
		}
		this.#f += e, this.#f === 0 && (this.#e = !1, this.#s && pause_effect(this.#s, () => {
			this.#s = null;
		}), this.#l &&= (this.#t.before(this.#l), null));
	}
	update_pending_count(e) {
		this.#x(e), this.#d += e, this.#m && internal_set(this.#m, this.#d);
	}
	get_effect_pending() {
		return this.#h(), get(this.#m);
	}
	error(e) {
		var D = this.#r.onerror;
		let O = this.#r.failed;
		if (this.#p || !D && !O) throw e;
		this.#o &&= (destroy_effect(this.#o), null), this.#s &&= (destroy_effect(this.#s), null), this.#c &&= (destroy_effect(this.#c), null), hydrating && (set_hydrate_node(this.#n), next(), set_hydrate_node(skip_nodes()));
		var k = !1, A = !1;
		let j = () => {
			if (k) {
				svelte_boundary_reset_noop();
				return;
			}
			k = !0, A && svelte_boundary_reset_onerror(), Batch.ensure(), this.#d = 0, this.#c !== null && pause_effect(this.#c, () => {
				this.#c = null;
			}), this.#e = this.has_pending_snippet(), this.#o = this.#y(() => (this.#p = !1, branch(() => this.#i(this.#t)))), this.#f > 0 ? this.#b() : this.#e = !1;
		};
		var M = active_reaction;
		try {
			set_active_reaction(null), A = !0, D?.(e, j), A = !1;
		} catch (e) {
			invoke_error_boundary(e, this.#a && this.#a.parent);
		} finally {
			set_active_reaction(M);
		}
		O && queue_micro_task(() => {
			this.#c = this.#y(() => {
				Batch.ensure(), this.#p = !0;
				try {
					return branch(() => {
						O(this.#t, () => e, () => j);
					});
				} catch (e) {
					return invoke_error_boundary(e, this.#a.parent), null;
				} finally {
					this.#p = !1;
				}
			});
		});
	}
};
function flatten(e, D, O, k) {
	let A = is_runes() ? derived : derived_safe_equal;
	if (O.length === 0 && e.length === 0) {
		k(D.map(A));
		return;
	}
	var j = current_batch, M = active_effect, N = capture();
	function P() {
		Promise.all(O.map((e) => /* @__PURE__ */ async_derived(e))).then((e) => {
			N();
			try {
				k([...D.map(A), ...e]);
			} catch (e) {
				M.f & 16384 || invoke_error_boundary(e, M);
			}
			j?.deactivate(), unset_context();
		}).catch((e) => {
			invoke_error_boundary(e, M);
		});
	}
	e.length > 0 ? Promise.all(e).then(() => {
		N();
		try {
			return P();
		} finally {
			j?.deactivate(), unset_context();
		}
	}) : P();
}
function capture() {
	var e = active_effect, D = active_reaction, O = component_context, k = current_batch, A = dev_stack;
	return function(j = !0) {
		set_active_effect(e), set_active_reaction(D), set_component_context(O), j && k?.activate(), set_dev_stack(A);
	};
}
function unset_context() {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), set_dev_stack(null);
}
const recent_async_deriveds = /* @__PURE__ */ new Set();
/* @__NO_SIDE_EFFECTS__ */
function derived(e) {
	var O = 2 | DIRTY, k = active_reaction !== null && active_reaction.f & 2 ? active_reaction : null;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: O,
		fn: e,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: k ?? active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(e, O) {
	let k = active_effect;
	k === null && async_derived_orphan();
	var A = k.b, j = void 0, M = source(UNINITIALIZED), N = !active_reaction, P = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var D = deferred();
		j = D.promise;
		try {
			Promise.resolve(e()).then(D.resolve, D.reject).then(() => {
				k === current_batch && k.committed && k.deactivate(), unset_context();
			});
		} catch (e) {
			D.reject(e), unset_context();
		}
		var k = current_batch;
		if (N) {
			var F = !A.is_pending();
			A.update_pending_count(1), k.increment(F), P.get(k)?.reject(STALE_REACTION), P.delete(k), P.set(k, D);
		}
		let I = (e, D = void 0) => {
			if (k.activate(), D) D !== STALE_REACTION && (M.f |= ERROR_VALUE, internal_set(M, D));
			else {
				M.f & 8388608 && (M.f ^= ERROR_VALUE), internal_set(M, e);
				for (let [e, D] of P) {
					if (P.delete(e), e === k) break;
					D.reject(STALE_REACTION);
				}
				O !== void 0 && (recent_async_deriveds.add(M), setTimeout(() => {
					recent_async_deriveds.has(M) && (await_waterfall(M.label, O), recent_async_deriveds.delete(M));
				}));
			}
			N && (A.update_pending_count(-1), k.decrement(F));
		};
		D.promise.then(I, (e) => I(null, e || "unknown"));
	}), teardown(() => {
		for (let e of P.values()) e.reject(STALE_REACTION);
	}), M.f |= ASYNC, new Promise((e) => {
		function D(O) {
			function k() {
				O === j ? e(M) : D(j);
			}
			O.then(k, k);
		}
		D(j);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(e) {
	let D = /* @__PURE__ */ derived(e);
	return D.equals = safe_equals, D;
}
function destroy_derived_effects(e) {
	var D = e.effects;
	if (D !== null) {
		e.effects = null;
		for (var O = 0; O < D.length; O += 1) destroy_effect(D[O]);
	}
}
var stack = [];
function get_derived_parent_effect(e) {
	for (var D = e.parent; D !== null;) {
		if (!(D.f & 2)) return D.f & 16384 ? null : D;
		D = D.parent;
	}
	return null;
}
function execute_derived(e) {
	var D, O = active_effect;
	set_active_effect(get_derived_parent_effect(e));
	{
		let k = eager_effects;
		set_eager_effects(/* @__PURE__ */ new Set());
		try {
			stack.includes(e) && derived_references_self(), stack.push(e), e.f &= ~WAS_MARKED, destroy_derived_effects(e), D = update_reaction(e);
		} finally {
			set_active_effect(O), set_eager_effects(k), stack.pop();
		}
	}
	return D;
}
function update_derived(e) {
	var D = execute_derived(e);
	e.equals(D) || (current_batch?.is_fork || (e.v = D), e.wv = increment_write_version()), !is_destroying_effect && (batch_values === null ? set_signal_status(e, e.f & 512 ? CLEAN : MAYBE_DIRTY) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(e, D));
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
function set_eager_effects(e) {
	eager_effects = e;
}
var eager_effects_deferred = !1;
function set_eager_effects_deferred() {
	eager_effects_deferred = !0;
}
function source(e, D) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(e, D) {
	let O = source(e, D);
	return push_reaction_value(O), O;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(e, D = !1, O = !0) {
	let k = source(e);
	return D || (k.equals = safe_equals), k;
}
function set(e, D, O = !1) {
	active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && !current_sources?.includes(e) && state_unsafe_mutation();
	let k = O ? proxy(D) : D;
	return tag_proxy(k, e.label), internal_set(e, k);
}
function internal_set(e, D) {
	if (!e.equals(D)) {
		var O = e.v;
		is_destroying_effect ? old_values.set(e, D) : old_values.set(e, O), e.v = D;
		var k = Batch.ensure();
		if (k.capture(e, O), active_effect !== null) {
			e.updated ??= /* @__PURE__ */ new Map();
			let D = (e.updated.get("")?.count ?? 0) + 1;
			if (e.updated.set("", {
				error: null,
				count: D
			}), D > 5) {
				let D = get_error("updated at");
				if (D !== null) {
					let O = e.updated.get(D.stack);
					O || (O = {
						error: D,
						count: 0
					}, e.updated.set(D.stack, O)), O.count++;
				}
			}
		}
		active_effect !== null && (e.set_during_effect = !0), e.f & 2 && (e.f & 2048 && execute_derived(e), set_signal_status(e, e.f & 512 ? CLEAN : MAYBE_DIRTY)), e.wv = increment_write_version(), mark_reactions(e, DIRTY), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([e]) : untracked_writes.push(e)), !k.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return D;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	var e = is_updating_effect;
	set_is_updating_effect(!0);
	let D = Array.from(eager_effects);
	try {
		for (let e of D) e.f & 1024 && set_signal_status(e, MAYBE_DIRTY), is_dirty(e) && update_effect(e);
	} finally {
		set_is_updating_effect(e);
	}
	eager_effects.clear();
}
function increment(e) {
	set(e, e.v + 1);
}
function mark_reactions(e, D) {
	var O = e.reactions;
	if (O !== null) for (var k = is_runes(), A = O.length, j = 0; j < A; j++) {
		var M = O[j], N = M.f;
		if (!(!k && M === active_effect)) {
			if (N & 131072) {
				eager_effects.add(M);
				continue;
			}
			var P = (N & DIRTY) === 0;
			if (P && set_signal_status(M, D), N & 2) {
				var F = M;
				batch_values?.delete(F), N & 32768 || (N & 512 && (M.f |= WAS_MARKED), mark_reactions(F, MAYBE_DIRTY));
			} else P && (N & 16 && eager_block_effects !== null && eager_block_effects.add(M), schedule_effect(M));
		}
	}
}
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(e) {
	if (typeof e != "object" || !e || STATE_SYMBOL in e) return e;
	let O = get_prototype_of(e);
	if (O !== object_prototype && O !== array_prototype) return e;
	var A = /* @__PURE__ */ new Map(), j = is_array(e), M = /* @__PURE__ */ state(0), N = null, R = update_version, z = (e) => {
		if (update_version === R) return e();
		var D = active_reaction, O = update_version;
		set_active_reaction(null), set_update_version(R);
		var k = e();
		return set_active_reaction(D), set_update_version(O), k;
	};
	j && (A.set("length", /* @__PURE__ */ state(e.length, N)), e = inspectable_array(e));
	var B = "";
	let V = !1;
	function H(e) {
		if (!V) {
			V = !0, B = e, tag(M, `${B} version`);
			for (let [e, D] of A) tag(D, get_label(B, e));
			V = !1;
		}
	}
	return new Proxy(e, {
		defineProperty(e, D, O) {
			(!("value" in O) || O.configurable === !1 || O.enumerable === !1 || O.writable === !1) && state_descriptors_fixed();
			var k = A.get(D);
			return k === void 0 ? k = z(() => {
				var e = /* @__PURE__ */ state(O.value, N);
				return A.set(D, e), typeof D == "string" && tag(e, get_label(B, D)), e;
			}) : set(k, O.value, !0), !0;
		},
		deleteProperty(e, O) {
			var k = A.get(O);
			if (k === void 0) {
				if (O in e) {
					let e = z(() => /* @__PURE__ */ state(UNINITIALIZED, N));
					A.set(O, e), increment(M), tag(e, get_label(B, O));
				}
			} else set(k, UNINITIALIZED), increment(M);
			return !0;
		},
		get(O, k, j) {
			if (k === STATE_SYMBOL) return e;
			if (k === PROXY_PATH_SYMBOL) return H;
			var M = A.get(k), F = k in O;
			if (M === void 0 && (!F || get_descriptor(O, k)?.writable) && (M = z(() => {
				var e = /* @__PURE__ */ state(proxy(F ? O[k] : UNINITIALIZED), N);
				return tag(e, get_label(B, k)), e;
			}), A.set(k, M)), M !== void 0) {
				var I = get(M);
				return I === UNINITIALIZED ? void 0 : I;
			}
			return Reflect.get(O, k, j);
		},
		getOwnPropertyDescriptor(e, O) {
			var k = Reflect.getOwnPropertyDescriptor(e, O);
			if (k && "value" in k) {
				var j = A.get(O);
				j && (k.value = get(j));
			} else if (k === void 0) {
				var M = A.get(O), N = M?.v;
				if (M !== void 0 && N !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: N,
					writable: !0
				};
			}
			return k;
		},
		has(e, O) {
			if (O === STATE_SYMBOL) return !0;
			var k = A.get(O), j = k !== void 0 && k.v !== UNINITIALIZED || Reflect.has(e, O);
			return (k !== void 0 || active_effect !== null && (!j || get_descriptor(e, O)?.writable)) && (k === void 0 && (k = z(() => {
				var k = /* @__PURE__ */ state(j ? proxy(e[O]) : UNINITIALIZED, N);
				return tag(k, get_label(B, O)), k;
			}), A.set(O, k)), get(k) === UNINITIALIZED) ? !1 : j;
		},
		set(e, O, k, F) {
			var I = A.get(O), L = O in e;
			if (j && O === "length") for (var R = k; R < I.v; R += 1) {
				var V = A.get(R + "");
				V === void 0 ? R in e && (V = z(() => /* @__PURE__ */ state(UNINITIALIZED, N)), A.set(R + "", V), tag(V, get_label(B, R))) : set(V, UNINITIALIZED);
			}
			if (I === void 0) (!L || get_descriptor(e, O)?.writable) && (I = z(() => /* @__PURE__ */ state(void 0, N)), tag(I, get_label(B, O)), set(I, proxy(k)), A.set(O, I));
			else {
				L = I.v !== UNINITIALIZED;
				var H = z(() => proxy(k));
				set(I, H);
			}
			var U = Reflect.getOwnPropertyDescriptor(e, O);
			if (U?.set && U.set.call(F, k), !L) {
				if (j && typeof O == "string") {
					var W = A.get("length"), G = Number(O);
					Number.isInteger(G) && G >= W.v && set(W, G + 1);
				}
				increment(M);
			}
			return !0;
		},
		ownKeys(e) {
			get(M);
			var O = Reflect.ownKeys(e).filter((e) => {
				var O = A.get(e);
				return O === void 0 || O.v !== UNINITIALIZED;
			});
			for (var [k, j] of A) j.v !== UNINITIALIZED && !(k in e) && O.push(k);
			return O;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_label(e, D) {
	return typeof D == "symbol" ? `${e}[Symbol(${D.description ?? ""})]` : regex_is_valid_identifier.test(D) ? `${e}.${D}` : /^\d+$/.test(D) ? `${e}[${D}]` : `${e}['${D}']`;
}
function get_proxied_value(e) {
	try {
		if (typeof e == "object" && e && STATE_SYMBOL in e) return e[STATE_SYMBOL];
	} catch {}
	return e;
}
function is(e, D) {
	return Object.is(get_proxied_value(e), get_proxied_value(D));
}
var ARRAY_MUTATING_METHODS = new Set([
	"copyWithin",
	"fill",
	"pop",
	"push",
	"reverse",
	"shift",
	"sort",
	"splice",
	"unshift"
]);
function inspectable_array(e) {
	return new Proxy(e, { get(e, D, O) {
		var k = Reflect.get(e, D, O);
		return ARRAY_MUTATING_METHODS.has(D) ? function(...e) {
			set_eager_effects_deferred();
			var D = k.apply(this, e);
			return flush_eager_effects(), D;
		} : k;
	} });
}
function init_array_prototype_warnings() {
	let e = Array.prototype, D = Array.__svelte_cleanup;
	D && D();
	let { indexOf: O, lastIndexOf: k, includes: A } = e;
	e.indexOf = function(e, D) {
		let k = O.call(this, e, D);
		if (k === -1) {
			for (let O = D ?? 0; O < this.length; O += 1) if (get_proxied_value(this[O]) === e) {
				state_proxy_equality_mismatch("array.indexOf(...)");
				break;
			}
		}
		return k;
	}, e.lastIndexOf = function(e, D) {
		let O = k.call(this, e, D ?? this.length - 1);
		if (O === -1) {
			for (let O = 0; O <= (D ?? this.length - 1); O += 1) if (get_proxied_value(this[O]) === e) {
				state_proxy_equality_mismatch("array.lastIndexOf(...)");
				break;
			}
		}
		return O;
	}, e.includes = function(e, D) {
		let O = A.call(this, e, D);
		if (!O) {
			for (let D = 0; D < this.length; D += 1) if (get_proxied_value(this[D]) === e) {
				state_proxy_equality_mismatch("array.includes(...)");
				break;
			}
		}
		return O;
	}, Array.__svelte_cleanup = () => {
		e.indexOf = O, e.lastIndexOf = k, e.includes = A;
	};
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, D = Node.prototype, O = Text.prototype;
		first_child_getter = get_descriptor(D, "firstChild").get, next_sibling_getter = get_descriptor(D, "nextSibling").get, is_extensible(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), is_extensible(O) && (O.__t = void 0), e.__svelte_meta = null, init_array_prototype_warnings();
	}
}
function create_text(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(e) {
	return first_child_getter.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(e) {
	return next_sibling_getter.call(e);
}
function child(e, D) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(e);
	var O = /* @__PURE__ */ get_first_child(hydrate_node);
	if (O === null) O = hydrate_node.appendChild(create_text());
	else if (D && O.nodeType !== 3) {
		var k = create_text();
		return O?.before(k), set_hydrate_node(k), k;
	}
	return set_hydrate_node(O), O;
}
function sibling(e, D = 1, O = !1) {
	let k = hydrating ? hydrate_node : e;
	for (var A; D--;) A = k, k = /* @__PURE__ */ get_next_sibling(k);
	if (!hydrating) return k;
	if (O && k?.nodeType !== 3) {
		var j = create_text();
		return k === null ? A?.after(j) : k.before(j), set_hydrate_node(j), j;
	}
	return set_hydrate_node(k), k;
}
function clear_text_content(e) {
	e.textContent = "";
}
function should_defer_append() {
	return !1;
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let D of e.target.elements) D.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(e) {
	var D = active_reaction, O = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return e();
	} finally {
		set_active_reaction(D), set_active_effect(O);
	}
}
function listen_to_event_and_reset_event(e, D, O, k = O) {
	e.addEventListener(D, () => without_reactive_context(O));
	let A = e.__on_r;
	A ? e.__on_r = () => {
		A(), k(!0);
	} : e.__on_r = () => k(!0), add_form_reset_listener();
}
function push_effect(e, D) {
	var O = D.last;
	O === null ? D.last = D.first = e : (O.next = e, e.prev = O, D.last = e);
}
function create_effect(e, D, O) {
	for (var k = active_effect; k !== null && k.f & 131072;) k = k.parent;
	k !== null && k.f & 8192 && (e |= INERT);
	var A = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: e | 2560,
		first: null,
		fn: D,
		last: null,
		next: null,
		parent: k,
		b: k && k.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	if (A.component_function = dev_current_component_function, O) try {
		update_effect(A), A.f |= 32768;
	} catch (e) {
		throw destroy_effect(A), e;
	}
	else D !== null && schedule_effect(A);
	var j = A;
	if (O && j.deps === null && j.teardown === null && j.nodes === null && j.first === j.last && !(j.f & 524288) && (j = j.first, e & 16 && e & 65536 && j !== null && (j.f |= 65536)), j !== null && (j.parent = k, k !== null && push_effect(j, k), active_reaction !== null && active_reaction.f & 2 && !(e & 64))) {
		var M = active_reaction;
		(M.effects ??= []).push(j);
	}
	return A;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(e) {
	let D = create_effect(8, null, !1);
	return set_signal_status(D, CLEAN), D.teardown = e, D;
}
function create_user_effect(e) {
	return create_effect(1048580, e, !1);
}
function effect_root(e) {
	Batch.ensure();
	let D = create_effect(64 | EFFECT_PRESERVED, e, !0);
	return () => {
		destroy_effect(D);
	};
}
function component_root(e) {
	Batch.ensure();
	let D = create_effect(64 | EFFECT_PRESERVED, e, !0);
	return (e = {}) => new Promise((O) => {
		e.outro ? pause_effect(D, () => {
			destroy_effect(D), O(void 0);
		}) : (destroy_effect(D), O(void 0));
	});
}
function effect(e) {
	return create_effect(4, e, !1);
}
function async_effect(e) {
	return create_effect(ASYNC | EFFECT_PRESERVED, e, !0);
}
function render_effect(e, D = 0) {
	return create_effect(8 | D, e, !0);
}
function template_effect(e, D = [], O = [], k = []) {
	flatten(k, D, O, (D) => {
		create_effect(8, () => e(...D.map(get)), !0);
	});
}
function block(e, D = 0) {
	var O = create_effect(16 | D, e, !0);
	return O.dev_stack = dev_stack, O;
}
function managed(e, D = 0) {
	var O = create_effect(16777216 | D, e, !0);
	return O.dev_stack = dev_stack, O;
}
function branch(e) {
	return create_effect(32 | EFFECT_PRESERVED, e, !0);
}
function execute_effect_teardown(e) {
	var D = e.teardown;
	if (D !== null) {
		let e = is_destroying_effect, O = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			D.call(null);
		} finally {
			set_is_destroying_effect(e), set_active_reaction(O);
		}
	}
}
function destroy_effect_children(e, D = !1) {
	var O = e.first;
	for (e.first = e.last = null; O !== null;) {
		let e = O.ac;
		e !== null && without_reactive_context(() => {
			e.abort(STALE_REACTION);
		});
		var k = O.next;
		O.f & 64 ? O.parent = null : destroy_effect(O, D), O = k;
	}
}
function destroy_block_effect_children(e) {
	for (var D = e.first; D !== null;) {
		var O = D.next;
		D.f & 32 || destroy_effect(D), D = O;
	}
}
function destroy_effect(e, D = !0) {
	var O = !1;
	(D || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (remove_effect_dom(e.nodes.start, e.nodes.end), O = !0), destroy_effect_children(e, D && !O), remove_reactions(e, 0), set_signal_status(e, 16384);
	var k = e.nodes && e.nodes.t;
	if (k !== null) for (let e of k) e.stop();
	execute_effect_teardown(e);
	var A = e.parent;
	A !== null && A.first !== null && unlink_effect(e), e.component_function = null, e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function remove_effect_dom(e, D) {
	for (; e !== null;) {
		var O = e === D ? null : /* @__PURE__ */ get_next_sibling(e);
		e.remove(), e = O;
	}
}
function unlink_effect(e) {
	var D = e.parent, O = e.prev, k = e.next;
	O !== null && (O.next = k), k !== null && (k.prev = O), D !== null && (D.first === e && (D.first = k), D.last === e && (D.last = O));
}
function pause_effect(e, D, O = !0) {
	var k = [];
	pause_children(e, k, !0);
	var A = () => {
		O && destroy_effect(e), D && D();
	}, j = k.length;
	if (j > 0) {
		var M = () => --j || A();
		for (var N of k) N.out(M);
	} else A();
}
function pause_children(e, D, O) {
	if (!(e.f & 8192)) {
		e.f ^= INERT;
		var k = e.nodes && e.nodes.t;
		if (k !== null) for (let e of k) (e.is_global || O) && D.push(e);
		for (var A = e.first; A !== null;) {
			var j = A.next, M = (A.f & 65536) != 0 || (A.f & 32) != 0 && (e.f & 16) != 0;
			pause_children(A, D, M ? O : !1), A = j;
		}
	}
}
function resume_effect(e) {
	resume_children(e, !0);
}
function resume_children(e, D) {
	if (e.f & 8192) {
		e.f ^= INERT, e.f & 1024 || (set_signal_status(e, DIRTY), schedule_effect(e));
		for (var O = e.first; O !== null;) {
			var k = O.next, A = (O.f & 65536) != 0 || (O.f & 32) != 0;
			resume_children(O, A ? D : !1), O = k;
		}
		var j = e.nodes && e.nodes.t;
		if (j !== null) for (let e of j) (e.is_global || D) && e.in();
	}
}
function move_effect(e, D) {
	if (e.nodes) for (var O = e.nodes.start, k = e.nodes.end; O !== null;) {
		var A = O === k ? null : /* @__PURE__ */ get_next_sibling(O);
		D.append(O), O = A;
	}
}
let is_updating_effect = !1;
function set_is_updating_effect(e) {
	is_updating_effect = e;
}
let is_destroying_effect = !1;
function set_is_destroying_effect(e) {
	is_destroying_effect = e;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(e) {
	active_reaction = e;
}
let active_effect = null;
function set_active_effect(e) {
	active_effect = e;
}
let current_sources = null;
function push_reaction_value(e) {
	active_reaction !== null && (current_sources === null ? current_sources = [e] : current_sources.push(e));
}
var new_deps = null, skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(e) {
	untracked_writes = e;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(e) {
	update_version = e;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(e) {
	var D = e.f;
	if (D & 2048) return !0;
	if (D & 2 && (e.f &= ~WAS_MARKED), D & 4096) {
		var O = e.deps;
		if (O !== null) for (var k = O.length, A = 0; A < k; A++) {
			var j = O[A];
			if (is_dirty(j) && update_derived(j), j.wv > e.wv) return !0;
		}
		D & 512 && batch_values === null && set_signal_status(e, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(e, D, O = !0) {
	var k = e.reactions;
	if (k !== null && !current_sources?.includes(e)) for (var A = 0; A < k.length; A++) {
		var j = k[A];
		j.f & 2 ? schedule_possible_effect_self_invalidation(j, D, !1) : D === j && (O ? set_signal_status(j, DIRTY) : j.f & 1024 && set_signal_status(j, MAYBE_DIRTY), schedule_effect(j));
	}
}
function update_reaction(e) {
	var D = new_deps, O = skipped_deps, k = untracked_writes, A = active_reaction, j = current_sources, M = component_context, N = untracking, P = update_version, F = e.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = F & 96 ? null : e, current_sources = null, set_component_context(e.ctx), untracking = !1, update_version = ++read_version, e.ac !== null && (without_reactive_context(() => {
		e.ac.abort(STALE_REACTION);
	}), e.ac = null);
	try {
		e.f |= REACTION_IS_UPDATING;
		var I = e.fn, L = I(), R = e.deps;
		if (new_deps !== null) {
			var z;
			if (remove_reactions(e, skipped_deps), R !== null && skipped_deps > 0) for (R.length = skipped_deps + new_deps.length, z = 0; z < new_deps.length; z++) R[skipped_deps + z] = new_deps[z];
			else e.deps = R = new_deps;
			if (effect_tracking() && e.f & 512) for (z = skipped_deps; z < R.length; z++) (R[z].reactions ??= []).push(e);
		} else R !== null && skipped_deps < R.length && (remove_reactions(e, skipped_deps), R.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && R !== null && !(e.f & 6146)) for (z = 0; z < untracked_writes.length; z++) schedule_possible_effect_self_invalidation(untracked_writes[z], e);
		return A !== null && A !== e && (read_version++, untracked_writes !== null && (k === null ? k = untracked_writes : k.push(...untracked_writes))), e.f & 8388608 && (e.f ^= ERROR_VALUE), L;
	} catch (e) {
		return handle_error(e);
	} finally {
		e.f ^= REACTION_IS_UPDATING, new_deps = D, skipped_deps = O, untracked_writes = k, active_reaction = A, current_sources = j, set_component_context(M), untracking = N, update_version = P;
	}
}
function remove_reaction(e, D) {
	let O = D.reactions;
	if (O !== null) {
		var k = index_of.call(O, e);
		if (k !== -1) {
			var j = O.length - 1;
			j === 0 ? O = D.reactions = null : (O[k] = O[j], O.pop());
		}
	}
	O === null && D.f & 2 && (new_deps === null || !new_deps.includes(D)) && (set_signal_status(D, MAYBE_DIRTY), D.f & 512 && (D.f ^= 512, D.f &= ~WAS_MARKED), destroy_derived_effects(D), remove_reactions(D, 0));
}
function remove_reactions(e, D) {
	var O = e.deps;
	if (O !== null) for (var k = D; k < O.length; k++) remove_reaction(e, O[k]);
}
function update_effect(e) {
	var D = e.f;
	if (!(D & 16384)) {
		set_signal_status(e, CLEAN);
		var O = active_effect, k = is_updating_effect;
		active_effect = e, is_updating_effect = !0;
		var A = dev_current_component_function;
		set_dev_current_component_function(e.component_function);
		var j = dev_stack;
		set_dev_stack(e.dev_stack ?? dev_stack);
		try {
			D & 16777232 ? destroy_block_effect_children(e) : destroy_effect_children(e), execute_effect_teardown(e);
			var M = update_reaction(e);
			e.teardown = typeof M == "function" ? M : null, e.wv = write_version;
		} finally {
			is_updating_effect = k, active_effect = O, set_dev_current_component_function(A), set_dev_stack(j);
		}
	}
}
function get(e) {
	var D = (e.f & 2) != 0;
	if (null?.add(e), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && !current_sources?.includes(e)) {
		var O = active_reaction.deps;
		if (active_reaction.f & 2097152) e.rv < read_version && (e.rv = read_version, new_deps === null && O !== null && O[skipped_deps] === e ? skipped_deps++ : new_deps === null ? new_deps = [e] : new_deps.includes(e) || new_deps.push(e));
		else {
			(active_reaction.deps ??= []).push(e);
			var k = e.reactions;
			k === null ? e.reactions = [active_reaction] : k.includes(active_reaction) || k.push(active_reaction);
		}
	}
	if (recent_async_deriveds.delete(e), is_destroying_effect) {
		if (old_values.has(e)) return old_values.get(e);
		if (D) {
			var A = e, j = A.v;
			return (!(A.f & 1024) && A.reactions !== null || depends_on_old_values(A)) && (j = execute_derived(A)), old_values.set(A, j), j;
		}
	} else D && (!batch_values?.has(e) || current_batch?.is_fork && !effect_tracking()) && (A = e, is_dirty(A) && update_derived(A), is_updating_effect && effect_tracking() && !(A.f & 512) && reconnect(A));
	if (batch_values?.has(e)) return batch_values.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function reconnect(e) {
	if (e.deps !== null) {
		e.f ^= 512;
		for (let D of e.deps) (D.reactions ??= []).push(e), D.f & 2 && !(D.f & 512) && reconnect(D);
	}
}
function depends_on_old_values(e) {
	if (e.v === UNINITIALIZED) return !0;
	if (e.deps === null) return !1;
	for (let D of e.deps) if (old_values.has(D) || D.f & 2 && depends_on_old_values(D)) return !0;
	return !1;
}
function untrack(e) {
	var D = untracking;
	try {
		return untracking = !0, e();
	} finally {
		untracking = D;
	}
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(e, D) {
	e.f = e.f & STATUS_MASK | D;
}
const all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
var last_propagated_event = null;
function handle_event_propagation(e) {
	var D = this, O = D.ownerDocument, k = e.type, A = e.composedPath?.() || [], j = A[0] || e.target;
	last_propagated_event = e;
	var M = 0, P = last_propagated_event === e && e.__root;
	if (P) {
		var F = A.indexOf(P);
		if (F !== -1 && (D === document || D === window)) {
			e.__root = D;
			return;
		}
		var I = A.indexOf(D);
		if (I === -1) return;
		F <= I && (M = F);
	}
	if (j = A[M] || e.target, j !== D) {
		define_property(e, "currentTarget", {
			configurable: !0,
			get() {
				return j || O;
			}
		});
		var L = active_reaction, R = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var z, B = []; j !== null;) {
				var V = j.assignedSlot || j.parentNode || j.host || null;
				try {
					var H = j["__" + k];
					H != null && (!j.disabled || e.target === j) && H.call(j, e);
				} catch (e) {
					z ? B.push(e) : z = e;
				}
				if (e.cancelBubble || V === D || V === null) break;
				j = V;
			}
			if (z) {
				for (let e of B) queueMicrotask(() => {
					throw e;
				});
				throw z;
			}
		} finally {
			e.__root = D, delete e.currentTarget, set_active_reaction(L), set_active_effect(R);
		}
	}
}
function create_fragment_from_html(e) {
	var D = document.createElement("template");
	return D.innerHTML = e.replaceAll("<!>", "<!---->"), D.content;
}
function assign_nodes(e, D) {
	var O = active_effect;
	O.nodes === null && (O.nodes = {
		start: e,
		end: D,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(e, D) {
	var O = (D & 1) != 0, k = (D & 2) != 0, A, j = !e.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		A === void 0 && (A = create_fragment_from_html(j ? e : "<!>" + e), O || (A = /* @__PURE__ */ get_first_child(A)));
		var D = k || is_firefox ? document.importNode(A, !0) : A.cloneNode(!0);
		if (O) {
			var M = /* @__PURE__ */ get_first_child(D), N = D.lastChild;
			assign_nodes(M, N);
		} else assign_nodes(D, D);
		return D;
	};
}
function append$1(e, D) {
	if (hydrating) {
		var O = active_effect;
		(!(O.f & 32768) || O.nodes.end === null) && (O.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	e !== null && e.before(D);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(e) {
	return PASSIVE_EVENTS.includes(e);
}
function set_text(e, D) {
	var O = D == null ? "" : typeof D == "object" ? D + "" : D;
	O !== (e.__t ??= e.nodeValue) && (e.__t = O, e.nodeValue = O + "");
}
function mount(e, D) {
	return _mount(e, D);
}
function hydrate(D, O) {
	init_operations(), O.intro = O.intro ?? !1;
	let k = O.target, A = hydrating, j = hydrate_node;
	try {
		for (var M = /* @__PURE__ */ get_first_child(k); M && (M.nodeType !== 8 || M.data !== "[");) M = /* @__PURE__ */ get_next_sibling(M);
		if (!M) throw HYDRATION_ERROR;
		set_hydrating(!0), set_hydrate_node(M);
		let A = _mount(D, {
			...O,
			anchor: M
		});
		return set_hydrating(!1), A;
	} catch (A) {
		if (A instanceof Error && A.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw A;
		return A !== HYDRATION_ERROR && console.warn("Failed to hydrate: ", A), O.recover === !1 && hydration_failed(), init_operations(), clear_text_content(k), set_hydrating(!1), mount(D, O);
	} finally {
		set_hydrating(A), set_hydrate_node(j);
	}
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(D, { target: O, anchor: k, props: A = {}, events: M, context: N, intro: P = !0 }) {
	init_operations();
	var F = /* @__PURE__ */ new Set(), I = (e) => {
		for (var D = 0; D < e.length; D++) {
			var k = e[D];
			if (!F.has(k)) {
				F.add(k);
				var A = is_passive_event(k);
				O.addEventListener(k, handle_event_propagation, { passive: A });
				var j = document_listeners.get(k);
				j === void 0 ? (document.addEventListener(k, handle_event_propagation, { passive: A }), document_listeners.set(k, 1)) : document_listeners.set(k, j + 1);
			}
		}
	};
	I(array_from(all_registered_events)), root_event_handles.add(I);
	var L = void 0, R = component_root(() => {
		var j = k ?? O.appendChild(create_text());
		return boundary(j, { pending: () => {} }, (O) => {
			if (N) {
				push({});
				var k = component_context;
				k.c = N;
			}
			if (M && (A.$$events = M), hydrating && assign_nodes(O, null), L = D(O, A) || {}, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			N && pop();
		}), () => {
			for (var e of F) {
				O.removeEventListener(e, handle_event_propagation);
				var D = document_listeners.get(e);
				--D === 0 ? (document.removeEventListener(e, handle_event_propagation), document_listeners.delete(e)) : document_listeners.set(e, D);
			}
			root_event_handles.delete(I), j !== k && j.parentNode?.removeChild(j);
		};
	});
	return mounted_components.set(L, R), L;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(e, D) {
	let O = mounted_components.get(e);
	return O ? (mounted_components.delete(e), O(D)) : (STATE_SYMBOL in e ? state_proxy_unmount() : lifecycle_double_unmount(), Promise.resolve());
}
{
	function e(e) {
		if (!(e in globalThis)) {
			let D;
			Object.defineProperty(globalThis, e, {
				configurable: !0,
				get: () => {
					if (D !== void 0) return D;
					rune_outside_svelte(e);
				},
				set: (e) => {
					D = e;
				}
			});
		}
	}
	e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function add_locations(e, D, O) {
	return (...k) => {
		let A = e(...k);
		return assign_locations(hydrating ? A : A.nodeType === 11 ? A.firstChild : A, D, O), A;
	};
}
function assign_location(e, D, O) {
	e.__svelte_meta = {
		parent: dev_stack,
		loc: {
			file: D,
			line: O[0],
			column: O[1]
		}
	}, O[2] && assign_locations(e.firstChild, D, O[2]);
}
function assign_locations(e, D, O) {
	for (var k = 0, A = 0; e && k < O.length;) {
		if (hydrating && e.nodeType === 8) {
			var j = e;
			j.data === "[" || j.data === "[!" ? A += 1 : j.data[0] === "]" && --A;
		}
		A === 0 && e.nodeType === 1 && assign_location(e, D, O[k++]), e = e.nextSibling;
	}
}
function check_target(e) {
	e && component_api_invalid_new(e[FILENAME] ?? "a component", e.name);
}
function legacy_api() {
	let e = component_context?.function;
	function D(D) {
		component_api_changed(D, e[FILENAME]);
	}
	return {
		$destroy: () => D("$destroy()"),
		$on: () => D("$on(...)"),
		$set: () => D("$set(...)")
	};
}
function index(e, D) {
	return D;
}
function pause_effects(e, D, O) {
	for (var k = [], A = D.length, M, N = D.length, P = 0; P < A; P++) {
		let O = D[P];
		pause_effect(O, () => {
			if (M) {
				if (M.pending.delete(O), M.done.add(O), M.pending.size === 0) {
					var D = e.outrogroups;
					destroy_effects(array_from(M.done)), D.delete(M), D.size === 0 && (e.outrogroups = null);
				}
			} else --N;
		}, !1);
	}
	if (N === 0) {
		var F = k.length === 0 && O !== null;
		if (F) {
			var I = O, L = I.parentNode;
			clear_text_content(L), L.append(I), e.items.clear();
		}
		destroy_effects(D, !F);
	} else M = {
		pending: new Set(D),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(M);
}
function destroy_effects(e, D = !0) {
	for (var O = 0; O < e.length; O++) destroy_effect(e[O], D);
}
var offscreen_anchor;
function each(e, D, O, A, M, N = null) {
	var P = e, F = /* @__PURE__ */ new Map();
	if (D & 4) {
		var I = e;
		P = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(I)) : I.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var L = null, R = /* @__PURE__ */ derived_safe_equal(() => {
		var e = O();
		return is_array(e) ? e : e == null ? [] : array_from(e);
	}), z, B = !0;
	function V() {
		H.fallback = L, reconcile(H, z, P, D, A), L !== null && (z.length === 0 ? L.f & 33554432 ? (L.f ^= EFFECT_OFFSCREEN, move(L, null, P)) : resume_effect(L) : pause_effect(L, () => {
			L = null;
		}));
	}
	var H = {
		effect: block(() => {
			z = get(R);
			var e = z.length;
			let k = !1;
			hydrating && read_hydration_instruction(P) === "[!" != (e === 0) && (P = skip_nodes(), set_hydrate_node(P), set_hydrating(!1), k = !0);
			for (var j = /* @__PURE__ */ new Set(), I = current_batch, H = should_defer_append(), U = 0; U < e; U += 1) {
				hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]" && (P = hydrate_node, k = !0, set_hydrating(!1));
				var W = z[U], G = A(W, U), q = B ? null : F.get(G);
				q ? (q.v && internal_set(q.v, W), q.i && internal_set(q.i, U), H && I.skipped_effects.delete(q.e)) : (q = create_item(F, B ? P : offscreen_anchor ??= create_text(), W, G, U, M, D, O), B || (q.e.f |= EFFECT_OFFSCREEN), F.set(G, q)), j.add(G);
			}
			if (e === 0 && N && !L && (B ? L = branch(() => N(P)) : (L = branch(() => N(offscreen_anchor ??= create_text())), L.f |= EFFECT_OFFSCREEN)), hydrating && e > 0 && set_hydrate_node(skip_nodes()), !B) if (H) {
				for (let [e, D] of F) j.has(e) || I.skipped_effects.add(D.e);
				I.oncommit(V), I.ondiscard(() => {});
			} else V();
			k && set_hydrating(!0), get(R);
		}),
		flags: D,
		items: F,
		outrogroups: null,
		fallback: L
	};
	B = !1, hydrating && (P = hydrate_node);
}
function reconcile(e, D, O, k, A) {
	var M = (k & 8) != 0, N = D.length, P = e.items, F = e.effect.first, I, L = null, R, z = [], B = [], V, H, U, W;
	if (M) for (W = 0; W < N; W += 1) V = D[W], H = A(V, W), U = P.get(H).e, U.f & 33554432 || (U.nodes?.a?.measure(), (R ??= /* @__PURE__ */ new Set()).add(U));
	for (W = 0; W < N; W += 1) {
		if (V = D[W], H = A(V, W), U = P.get(H).e, e.outrogroups !== null) for (let D of e.outrogroups) D.pending.delete(U), D.done.delete(U);
		if (U.f & 33554432) if (U.f ^= EFFECT_OFFSCREEN, U === F) move(U, null, O);
		else {
			var G = L ? L.next : F;
			U === e.effect.last && (e.effect.last = U.prev), U.prev && (U.prev.next = U.next), U.next && (U.next.prev = U.prev), link(e, L, U), link(e, U, G), move(U, G, O), L = U, z = [], B = [], F = L.next;
			continue;
		}
		if (U.f & 8192 && (resume_effect(U), M && (U.nodes?.a?.unfix(), (R ??= /* @__PURE__ */ new Set()).delete(U))), U !== F) {
			if (I !== void 0 && I.has(U)) {
				if (z.length < B.length) {
					var q = B[0], J;
					L = q.prev;
					var Y = z[0], X = z[z.length - 1];
					for (J = 0; J < z.length; J += 1) move(z[J], q, O);
					for (J = 0; J < B.length; J += 1) I.delete(B[J]);
					link(e, Y.prev, X.next), link(e, L, Y), link(e, X, q), F = q, L = X, --W, z = [], B = [];
				} else I.delete(U), move(U, F, O), link(e, U.prev, U.next), link(e, U, L === null ? e.effect.first : L.next), link(e, L, U), L = U;
				continue;
			}
			for (z = [], B = []; F !== null && F !== U;) (I ??= /* @__PURE__ */ new Set()).add(F), B.push(F), F = F.next;
			if (F === null) continue;
		}
		U.f & 33554432 || z.push(U), L = U, F = U.next;
	}
	if (e.outrogroups !== null) {
		for (let D of e.outrogroups) D.pending.size === 0 && (destroy_effects(array_from(D.done)), e.outrogroups?.delete(D));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (F !== null || I !== void 0) {
		var Z = [];
		if (I !== void 0) for (U of I) U.f & 8192 || Z.push(U);
		for (; F !== null;) !(F.f & 8192) && F !== e.fallback && Z.push(F), F = F.next;
		var Q = Z.length;
		if (Q > 0) {
			var $ = k & 4 && N === 0 ? O : null;
			if (M) {
				for (W = 0; W < Q; W += 1) Z[W].nodes?.a?.measure();
				for (W = 0; W < Q; W += 1) Z[W].nodes?.a?.fix();
			}
			pause_effects(e, Z, $);
		}
	}
	M && queue_micro_task(() => {
		if (R !== void 0) for (U of R) U.nodes?.a?.apply();
	});
}
function create_item(e, D, O, k, A, j, M, N) {
	var P = M & 1 ? M & 16 ? source(O) : /* @__PURE__ */ mutable_source(O, !1, !1) : null, F = M & 2 ? source(A) : null;
	return P && (P.trace = () => {
		N()[F?.v ?? A];
	}), {
		v: P,
		i: F,
		e: branch(() => (j(D, P ?? O, F ?? A, N), () => {
			e.delete(k);
		}))
	};
}
function move(e, D, O) {
	if (e.nodes) for (var k = e.nodes.start, A = e.nodes.end, j = D && !(D.f & 33554432) ? D.nodes.start : O; k !== null;) {
		var M = /* @__PURE__ */ get_next_sibling(k);
		if (j.before(k), k === A) return;
		k = M;
	}
}
function link(e, D, O) {
	D === null ? e.effect.first = O : D.next = O, O === null ? e.effect.last = D : O.prev = D;
}
function attach(e, D) {
	var O = void 0, k;
	managed(() => {
		O !== (O = D()) && (k &&= (destroy_effect(k), null), O && (k = branch(() => {
			effect(() => O(e));
		})));
	});
}
function select_option(e, D, O = !1) {
	if (e.multiple) {
		if (D == null) return;
		if (!is_array(D)) return select_multiple_invalid_value();
		for (var A of e.options) A.selected = D.includes(get_option_value(A));
		return;
	}
	for (A of e.options) if (is(get_option_value(A), D)) {
		A.selected = !0;
		return;
	}
	(!O || D !== void 0) && (e.selectedIndex = -1);
}
function init_select(e) {
	var D = new MutationObserver(() => {
		select_option(e, e.__value);
	});
	D.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		D.disconnect();
	});
}
function bind_select_value(e, D, O = D) {
	var k = /* @__PURE__ */ new WeakSet(), A = !0;
	listen_to_event_and_reset_event(e, "change", (D) => {
		var A = D ? "[selected]" : ":checked", j;
		if (e.multiple) j = [].map.call(e.querySelectorAll(A), get_option_value);
		else {
			var M = e.querySelector(A) ?? e.querySelector("option:not([disabled])");
			j = M && get_option_value(M);
		}
		O(j), current_batch !== null && k.add(current_batch);
	}), effect(() => {
		var j = D();
		if (e === document.activeElement) {
			var M = previous_batch ?? current_batch;
			if (k.has(M)) return;
		}
		if (select_option(e, j, A), A && j === void 0) {
			var N = e.querySelector(":checked");
			N !== null && (j = get_option_value(N), O(j));
		}
		e.__value = j, A = !1;
	}), init_select(e);
}
function get_option_value(e) {
	return "__value" in e ? e.__value : e.value;
}
var is_store_binding = !1;
function capture_store_binding(e) {
	var D = is_store_binding;
	try {
		return is_store_binding = !1, [e(), is_store_binding];
	} finally {
		is_store_binding = D;
	}
}
function prop(e, D, O, k) {
	var A = !0, j = (O & 8) != 0, M = (O & 16) != 0, N = k, F = !0, I = () => (F && (F = !1, N = M ? untrack(k) : k), N), L;
	if (j) {
		var R = STATE_SYMBOL in e || LEGACY_PROPS in e;
		L = get_descriptor(e, D)?.set ?? (R && D in e ? (O) => e[D] = O : void 0);
	}
	var z, B = !1;
	j ? [z, B] = capture_store_binding(() => e[D]) : z = e[D], z === void 0 && k !== void 0 && (z = I(), L && (A && props_invalid_value(D), L(z)));
	var V = A ? () => {
		var O = e[D];
		return O === void 0 ? I() : (F = !0, O);
	} : () => {
		var O = e[D];
		return O !== void 0 && (N = void 0), O === void 0 ? N : O;
	};
	if (A && !(O & 4)) return V;
	if (L) {
		var H = e.$$legacy;
		return (function(e, D) {
			return arguments.length > 0 ? ((!A || !D || H || B) && L(D ? V() : e), e) : V();
		});
	}
	var U = !1, W = (O & 1 ? derived : derived_safe_equal)(() => (U = !1, V()));
	W.label = D, j && get(W);
	var G = active_effect;
	return (function(e, D) {
		if (arguments.length > 0) {
			let O = D ? get(W) : A && j ? proxy(e) : e;
			return set(W, O), U = !0, N !== void 0 && (N = O), e;
		}
		return is_destroying_effect && U || G.f & 16384 ? W.v : get(W);
	});
}
function createClassComponent(e) {
	return new Svelte4Component(e);
}
var Svelte4Component = class {
	#e;
	#t;
	constructor(e) {
		var D = /* @__PURE__ */ new Map(), O = (e, O) => {
			var k = /* @__PURE__ */ mutable_source(O, !1, !1);
			return D.set(e, k), k;
		};
		let k = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, k) {
				return get(D.get(k) ?? O(k, Reflect.get(e, k)));
			},
			has(e, k) {
				return k === LEGACY_PROPS ? !0 : (get(D.get(k) ?? O(k, Reflect.get(e, k))), Reflect.has(e, k));
			},
			set(e, k, A) {
				return set(D.get(k) ?? O(k, A), A), Reflect.set(e, k, A);
			}
		});
		this.#t = (e.hydrate ? hydrate : mount)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: k,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover
		}), (!e?.props?.$$host || e.sync === !1) && flushSync(), this.#e = k.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || define_property(this, e, {
			get() {
				return this.#t[e];
			},
			set(D) {
				this.#t[e] = D;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(k, e);
		}, this.#t.$destroy = () => {
			unmount(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, D) {
		this.#e[e] = this.#e[e] || [];
		let O = (...e) => D.call(this, ...e);
		return this.#e[e].push(O), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== O);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, SvelteElement;
typeof HTMLElement == "function" && (SvelteElement = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	constructor(e, D, O) {
		super(), this.$$ctor = e, this.$$s = D, O && this.attachShadow({ mode: "open" });
	}
	addEventListener(e, D, O) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(D), this.$$c) {
			let O = this.$$c.$on(e, D);
			this.$$l_u.set(D, O);
		}
		super.addEventListener(e, D, O);
	}
	removeEventListener(e, D, O) {
		if (super.removeEventListener(e, D, O), this.$$c) {
			let e = this.$$l_u.get(D);
			e && (e(), this.$$l_u.delete(D));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (D) => {
					let O = document.createElement("slot");
					e !== "default" && (O.name = e), append$1(D, O);
				};
			}
			let D = {}, O = get_custom_elements_slots(this);
			for (let k of this.$$s) k in O && (k === "default" && !this.$$d.children ? (this.$$d.children = e(k), D.default = !0) : D[k] = e(k));
			for (let e of this.attributes) {
				let D = this.$$g_p(e.name);
				D in this.$$d || (this.$$d[D] = get_custom_element_value(D, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			for (let e in this.$$c = createClassComponent({
				component: this.$$ctor,
				target: this.shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: D,
					$$host: this
				}
			}), this.$$me = effect_root(() => {
				render_effect(() => {
					this.$$r = !0;
					for (let e of object_keys(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let D = get_custom_element_value(e, this.$$d[e], this.$$p_d, "toAttribute");
						D == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, D);
					}
					this.$$r = !1;
				});
			}), this.$$l) for (let D of this.$$l[e]) {
				let O = this.$$c.$on(e, D);
				this.$$l_u.set(D, O);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, D, O) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = get_custom_element_value(e, O, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return object_keys(this.$$p_d).find((D) => this.$$p_d[D].attribute === e || !this.$$p_d[D].attribute && D.toLowerCase() === e) || e;
	}
});
function get_custom_element_value(e, D, O, k) {
	let A = O[e]?.type;
	if (D = A === "Boolean" && typeof D != "boolean" ? D != null : D, !k || !O[e]) return D;
	if (k === "toAttribute") switch (A) {
		case "Object":
		case "Array": return D == null ? null : JSON.stringify(D);
		case "Boolean": return D ? "" : null;
		case "Number": return D ?? null;
		default: return D;
	}
	else switch (A) {
		case "Object":
		case "Array": return D && JSON.parse(D);
		case "Boolean": return D;
		case "Number": return D == null ? D : +D;
		default: return D;
	}
}
function get_custom_elements_slots(e) {
	let D = {};
	return e.childNodes.forEach((e) => {
		D[e.slot || "default"] = !0;
	}), D;
}
function create_custom_element(e, D, O, k, A, j) {
	let F = class extends SvelteElement {
		constructor() {
			super(e, O, A), this.$$p_d = D;
		}
		static get observedAttributes() {
			return object_keys(D).map((e) => (D[e].attribute || e).toLowerCase());
		}
	};
	return object_keys(D).forEach((e) => {
		define_property(F.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(O) {
				O = get_custom_element_value(e, O, D), this.$$d[e] = O;
				var k = this.$$c;
				k && (get_descriptor(k, e)?.get ? k[e] = O : k.$set({ [e]: O }));
			}
		});
	}), k.forEach((e) => {
		define_property(F.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), j && (F = j(F)), e.element = F, F;
}
function forEvents(e, D) {
	e.split(/\s+/).forEach((e) => {
		D(e);
	});
}
var MicroEvent = class {
	constructor() {
		this._events = {};
	}
	on(e, D) {
		forEvents(e, (e) => {
			let O = this._events[e] || [];
			O.push(D), this._events[e] = O;
		});
	}
	off(e, D) {
		var O = arguments.length;
		if (O === 0) {
			this._events = {};
			return;
		}
		forEvents(e, (e) => {
			if (O === 1) {
				delete this._events[e];
				return;
			}
			let k = this._events[e];
			k !== void 0 && (k.splice(k.indexOf(D), 1), this._events[e] = k);
		});
	}
	trigger(e, ...D) {
		var O = this;
		forEvents(e, (e) => {
			let k = O._events[e];
			k !== void 0 && k.forEach((e) => {
				e.apply(O, D);
			});
		});
	}
};
function MicroPlugin(e) {
	return e.plugins = {}, class extends e {
		constructor() {
			super(...arguments), this.plugins = {
				names: [],
				settings: {},
				requested: {},
				loaded: {}
			};
		}
		static define(D, O) {
			e.plugins[D] = {
				name: D,
				fn: O
			};
		}
		initializePlugins(e) {
			var D, O;
			let k = this, A = [];
			if (Array.isArray(e)) e.forEach((e) => {
				typeof e == "string" ? A.push(e) : (k.plugins.settings[e.name] = e.options, A.push(e.name));
			});
			else if (e) for (D in e) e.hasOwnProperty(D) && (k.plugins.settings[D] = e[D], A.push(D));
			for (; O = A.shift();) k.require(O);
		}
		loadPlugin(D) {
			var O = this, k = O.plugins, A = e.plugins[D];
			if (!e.plugins.hasOwnProperty(D)) throw Error("Unable to find \"" + D + "\" plugin");
			k.requested[D] = !0, k.loaded[D] = A.fn.apply(O, [O.plugins.settings[D] || {}]), k.names.push(D);
		}
		require(e) {
			var D = this, O = D.plugins;
			if (!D.plugins.loaded.hasOwnProperty(e)) {
				if (O.requested[e]) throw Error("Plugin has circular dependency (\"" + e + "\")");
				D.loadPlugin(e);
			}
			return O.loaded[e];
		}
	};
}
const arrayToPattern = (e) => (e = e.filter(Boolean), e.length < 2 ? e[0] || "" : maxValueLength(e) == 1 ? "[" + e.join("") + "]" : "(?:" + e.join("|") + ")"), sequencePattern = (e) => {
	if (!hasDuplicates(e)) return e.join("");
	let D = "", O = 0, k = () => {
		O > 1 && (D += "{" + O + "}");
	};
	return e.forEach((A, j) => {
		if (A === e[j - 1]) {
			O++;
			return;
		}
		k(), D += A, O = 1;
	}), k(), D;
}, setToPattern = (e) => arrayToPattern(Array.from(e)), hasDuplicates = (e) => new Set(e).size !== e.length, escape_regex = (e) => (e + "").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu, "\\$1"), maxValueLength = (e) => e.reduce((e, D) => Math.max(e, unicodeLength(D)), 0), unicodeLength = (e) => Array.from(e).length, allSubstrings = (e) => {
	if (e.length === 1) return [[e]];
	let D = [];
	return allSubstrings(e.substring(1)).forEach(function(O) {
		let k = O.slice(0);
		k[0] = e.charAt(0) + k[0], D.push(k), k = O.slice(0), k.unshift(e.charAt(0)), D.push(k);
	}), D;
}, code_points = [[0, 65535]];
let unicode_map;
var multi_char_reg, max_char_length = 3, latin_convert = {}, latin_condensed = {
	"/": "⁄∕",
	0: "߀",
	a: "ⱥɐɑ",
	aa: "ꜳ",
	ae: "æǽǣ",
	ao: "ꜵ",
	au: "ꜷ",
	av: "ꜹꜻ",
	ay: "ꜽ",
	b: "ƀɓƃ",
	c: "ꜿƈȼↄ",
	d: "đɗɖᴅƌꮷԁɦ",
	e: "ɛǝᴇɇ",
	f: "ꝼƒ",
	g: "ǥɠꞡᵹꝿɢ",
	h: "ħⱨⱶɥ",
	i: "ɨı",
	j: "ɉȷ",
	k: "ƙⱪꝁꝃꝅꞣ",
	l: "łƚɫⱡꝉꝇꞁɭ",
	m: "ɱɯϻ",
	n: "ꞥƞɲꞑᴎлԉ",
	o: "øǿɔɵꝋꝍᴑ",
	oe: "œ",
	oi: "ƣ",
	oo: "ꝏ",
	ou: "ȣ",
	p: "ƥᵽꝑꝓꝕρ",
	q: "ꝗꝙɋ",
	r: "ɍɽꝛꞧꞃ",
	s: "ßȿꞩꞅʂ",
	t: "ŧƭʈⱦꞇ",
	th: "þ",
	tz: "ꜩ",
	u: "ʉ",
	v: "ʋꝟʌ",
	vy: "ꝡ",
	w: "ⱳ",
	y: "ƴɏỿ",
	z: "ƶȥɀⱬꝣ",
	hv: "ƕ"
};
for (let e in latin_condensed) {
	let D = latin_condensed[e] || "";
	for (let O = 0; O < D.length; O++) {
		let k = D.substring(O, O + 1);
		latin_convert[k] = e;
	}
}
var convert_pat = RegExp(Object.keys(latin_convert).join("|") + "|[̀-ͯ·ʾʼ]", "gu");
const initialize = (e) => {
	unicode_map === void 0 && (unicode_map = generateMap(e || code_points));
}, normalize = (e, D = "NFKD") => e.normalize(D), asciifold = (e) => Array.from(e).reduce((e, D) => e + _asciifold(D), ""), _asciifold = (e) => (e = normalize(e).toLowerCase().replace(convert_pat, (e) => latin_convert[e] || ""), normalize(e, "NFC"));
function* generator(e) {
	for (let [D, O] of e) for (let e = D; e <= O; e++) {
		let D = String.fromCharCode(e), O = asciifold(D);
		O != D.toLowerCase() && (O.length > max_char_length || O.length != 0 && (yield {
			folded: O,
			composed: D,
			code_point: e
		}));
	}
}
const generateSets = (e) => {
	let D = {}, O = (e, O) => {
		let k = D[e] || /* @__PURE__ */ new Set(), A = RegExp("^" + setToPattern(k) + "$", "iu");
		O.match(A) || (k.add(escape_regex(O)), D[e] = k);
	};
	for (let D of generator(e)) O(D.folded, D.folded), O(D.folded, D.composed);
	return D;
}, generateMap = (e) => {
	let D = generateSets(e), O = {}, k = [];
	for (let e in D) {
		let A = D[e];
		A && (O[e] = setToPattern(A)), e.length > 1 && k.push(escape_regex(e));
	}
	k.sort((e, D) => D.length - e.length);
	let A = arrayToPattern(k);
	return multi_char_reg = RegExp("^" + A, "u"), O;
}, mapSequence = (e, D = 1) => {
	let O = 0;
	return e = e.map((e) => (unicode_map[e] && (O += e.length), unicode_map[e] || e)), O >= D ? sequencePattern(e) : "";
}, substringsToPattern = (e, D = 1) => (D = Math.max(D, e.length - 1), arrayToPattern(allSubstrings(e).map((e) => mapSequence(e, D))));
var sequencesToPattern = (e, D = !0) => {
	let O = e.length > 1 ? 1 : 0;
	return arrayToPattern(e.map((e) => {
		let k = [], A = D ? e.length() : e.length() - 1;
		for (let D = 0; D < A; D++) k.push(substringsToPattern(e.substrs[D] || "", O));
		return sequencePattern(k);
	}));
}, inSequences = (e, D) => {
	for (let O of D) {
		if (O.start != e.start || O.end != e.end || O.substrs.join("") !== e.substrs.join("")) continue;
		let D = e.parts;
		if (!(O.parts.filter((e) => {
			for (let O of D) {
				if (O.start === e.start && O.substr === e.substr) return !1;
				if (!(e.length == 1 || O.length == 1) && (e.start < O.start && e.end > O.start || O.start < e.start && O.end > e.start)) return !0;
			}
			return !1;
		}).length > 0)) return !0;
	}
	return !1;
}, Sequence = class e {
	parts;
	substrs;
	start;
	end;
	constructor() {
		this.parts = [], this.substrs = [], this.start = 0, this.end = 0;
	}
	add(e) {
		e && (this.parts.push(e), this.substrs.push(e.substr), this.start = Math.min(e.start, this.start), this.end = Math.max(e.end, this.end));
	}
	last() {
		return this.parts[this.parts.length - 1];
	}
	length() {
		return this.parts.length;
	}
	clone(D, O) {
		let k = new e(), A = JSON.parse(JSON.stringify(this.parts)), j = A.pop();
		for (let e of A) k.add(e);
		let M = O.substr.substring(0, D - j.start), N = M.length;
		return k.add({
			start: j.start,
			end: j.start + N,
			length: N,
			substr: M
		}), k;
	}
};
const getPattern = (e) => {
	initialize(), e = asciifold(e);
	let D = "", O = [new Sequence()];
	for (let k = 0; k < e.length; k++) {
		let A = e.substring(k).match(multi_char_reg), j = e.substring(k, k + 1), M = A ? A[0] : null, N = [], P = /* @__PURE__ */ new Set();
		for (let e of O) {
			let D = e.last();
			if (!D || D.length == 1 || D.end <= k) if (M) {
				let D = M.length;
				e.add({
					start: k,
					end: k + D,
					length: D,
					substr: M
				}), P.add("1");
			} else e.add({
				start: k,
				end: k + 1,
				length: 1,
				substr: j
			}), P.add("2");
			else if (M) {
				let O = e.clone(k, D), A = M.length;
				O.add({
					start: k,
					end: k + A,
					length: A,
					substr: M
				}), N.push(O);
			} else P.add("3");
		}
		if (N.length > 0) {
			N = N.sort((e, D) => e.length() - D.length());
			for (let e of N) inSequences(e, O) || O.push(e);
			continue;
		}
		if (k > 0 && P.size == 1 && !P.has("3")) {
			D += sequencesToPattern(O, !1);
			let e = new Sequence(), k = O[0];
			k && e.add(k.last()), O = [e];
		}
	}
	return D += sequencesToPattern(O, !0), D;
}, getAttr = (e, D) => {
	if (e) return e[D];
}, getAttrNesting = (e, D) => {
	if (e) {
		for (var O, k = D.split("."); (O = k.shift()) && (e = e[O]););
		return e;
	}
}, scoreValue = (e, D, O) => {
	var k, A;
	return !e || (e += "", D.regex == null) || (A = e.search(D.regex), A === -1) ? 0 : (k = D.string.length / e.length, A === 0 && (k += .5), k * O);
}, propToArray = (e, D) => {
	var O = e[D];
	if (typeof O == "function") return O;
	O && !Array.isArray(O) && (e[D] = [O]);
}, iterate$5 = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, cmp = (e, D) => typeof e == "number" && typeof D == "number" ? e > D ? 1 : e < D ? -1 : 0 : (e = asciifold(e + "").toLowerCase(), D = asciifold(D + "").toLowerCase(), e > D ? 1 : D > e ? -1 : 0);
var Sifter = class {
	items;
	settings;
	constructor(e, D) {
		this.items = e, this.settings = D || { diacritics: !0 };
	}
	tokenize(e, D, O) {
		if (!e || !e.length) return [];
		let k = [], A = e.split(/\s+/);
		var j;
		return O && (j = /* @__PURE__ */ RegExp("^(" + Object.keys(O).map(escape_regex).join("|") + "):(.*)$")), A.forEach((e) => {
			let O, A = null, M = null;
			j && (O = e.match(j)) && (A = O[1], e = O[2]), e.length > 0 && (M = this.settings.diacritics ? getPattern(e) || null : escape_regex(e), M && D && (M = "\\b" + M)), k.push({
				string: e,
				regex: M ? new RegExp(M, "iu") : null,
				field: A
			});
		}), k;
	}
	getScoreFunction(e, D) {
		var O = this.prepareSearch(e, D);
		return this._getScoreFunction(O);
	}
	_getScoreFunction(e) {
		let D = e.tokens, O = D.length;
		if (!O) return function() {
			return 0;
		};
		let k = e.options.fields, A = e.weights, j = k.length, M = e.getAttrFn;
		if (!j) return function() {
			return 1;
		};
		let N = (function() {
			return j === 1 ? function(e, D) {
				let O = k[0].field;
				return scoreValue(M(D, O), e, A[O] || 1);
			} : function(e, D) {
				var O = 0;
				if (e.field) {
					let k = M(D, e.field);
					!e.regex && k ? O += 1 / j : O += scoreValue(k, e, 1);
				} else iterate$5(A, (k, A) => {
					O += scoreValue(M(D, A), e, k);
				});
				return O / j;
			};
		})();
		return O === 1 ? function(e) {
			return N(D[0], e);
		} : e.options.conjunction === "and" ? function(e) {
			var k, A = 0;
			for (let O of D) {
				if (k = N(O, e), k <= 0) return 0;
				A += k;
			}
			return A / O;
		} : function(e) {
			var k = 0;
			return iterate$5(D, (D) => {
				k += N(D, e);
			}), k / O;
		};
	}
	getSortFunction(e, D) {
		var O = this.prepareSearch(e, D);
		return this._getSortFunction(O);
	}
	_getSortFunction(e) {
		var D, O = [];
		let k = this, A = e.options, j = !e.query && A.sort_empty ? A.sort_empty : A.sort;
		if (typeof j == "function") return j.bind(this);
		let M = function(D, O) {
			return D === "$score" ? O.score : e.getAttrFn(k.items[O.id], D);
		};
		if (j) for (let D of j) (e.query || D.field !== "$score") && O.push(D);
		if (e.query) {
			D = !0;
			for (let e of O) if (e.field === "$score") {
				D = !1;
				break;
			}
			D && O.unshift({
				field: "$score",
				direction: "desc"
			});
		} else O = O.filter((e) => e.field !== "$score");
		return O.length ? function(e, D) {
			var k, A;
			for (let j of O) if (A = j.field, k = (j.direction === "desc" ? -1 : 1) * cmp(M(A, e), M(A, D)), k) return k;
			return 0;
		} : null;
	}
	prepareSearch(e, D) {
		let O = {};
		var k = Object.assign({}, D);
		if (propToArray(k, "sort"), propToArray(k, "sort_empty"), k.fields) {
			propToArray(k, "fields");
			let e = [];
			k.fields.forEach((D) => {
				typeof D == "string" && (D = {
					field: D,
					weight: 1
				}), e.push(D), O[D.field] = "weight" in D ? D.weight : 1;
			}), k.fields = e;
		}
		return {
			options: k,
			query: e.toLowerCase().trim(),
			tokens: this.tokenize(e, k.respect_word_boundaries, O),
			total: 0,
			items: [],
			weights: O,
			getAttrFn: k.nesting ? getAttrNesting : getAttr
		};
	}
	search(e, D) {
		var O = this, k, A = this.prepareSearch(e, D);
		D = A.options, e = A.query;
		let j = D.score || O._getScoreFunction(A);
		e.length ? iterate$5(O.items, (e, O) => {
			k = j(e), (D.filter === !1 || k > 0) && A.items.push({
				score: k,
				id: O
			});
		}) : iterate$5(O.items, (e, D) => {
			A.items.push({
				score: 1,
				id: D
			});
		});
		let M = O._getSortFunction(A);
		return M && A.items.sort(M), A.total = A.items.length, typeof D.limit == "number" && (A.items = A.items.slice(0, D.limit)), A;
	}
};
const hash_key$1 = (e) => e == null ? null : get_hash$1(e), get_hash$1 = (e) => typeof e == "boolean" ? e ? "1" : "0" : e + "", escape_html$1 = (e) => (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), timeout = (e, D) => D > 0 ? window.setTimeout(e, D) : (e.call(null), null), loadDebounce = (e, D) => {
	var O;
	return function(k, A) {
		var j = this;
		O && (j.loading = Math.max(j.loading - 1, 0), clearTimeout(O)), O = setTimeout(function() {
			O = null, j.loadedSearches[k] = !0, e.call(j, k, A);
		}, D);
	};
}, debounce_events = (e, D, O) => {
	var k, A = e.trigger, j = {};
	e.trigger = function() {
		var O = arguments[0];
		if (D.indexOf(O) !== -1) j[O] = arguments;
		else return A.apply(e, arguments);
	}, O.apply(e, []), e.trigger = A;
	for (k of D) k in j && A.apply(e, j[k]);
}, getSelection = (e) => ({
	start: e.selectionStart || 0,
	length: (e.selectionEnd || 0) - (e.selectionStart || 0)
}), preventDefault$5 = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, addEvent$5 = (e, D, O, k) => {
	e.addEventListener(D, O, k);
}, isKeyDown = (e, D) => !D || !D[e] ? !1 : (D.altKey ? 1 : 0) + (D.ctrlKey ? 1 : 0) + (D.shiftKey ? 1 : 0) + (D.metaKey ? 1 : 0) == 1, getId = (e, D) => e.getAttribute("id") || (e.setAttribute("id", D), D), addSlashes = (e) => e.replace(/[\\"']/g, "\\$&"), append = (e, D) => {
	D && e.append(D);
}, iterate$4 = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, getDom$6 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$6(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$6 = (e) => typeof e == "string" && e.indexOf("<") > -1, escapeQuery = (e) => e.replace(/['"\\]/g, "\\$&"), triggerEvent = (e, D) => {
	var O = document.createEvent("HTMLEvents");
	O.initEvent(D, !0, !1), e.dispatchEvent(O);
}, applyCSS = (e, D) => {
	Object.assign(e.style, D);
}, addClasses$2 = (e, ...D) => {
	var O = classesArray$3(D);
	e = castAsArray$3(e), e.map((e) => {
		O.map((D) => {
			e.classList.add(D);
		});
	});
}, removeClasses$1 = (e, ...D) => {
	var O = classesArray$3(D);
	e = castAsArray$3(e), e.map((e) => {
		O.map((D) => {
			e.classList.remove(D);
		});
	});
}, classesArray$3 = (e) => {
	var D = [];
	return iterate$4(e, (e) => {
		typeof e == "string" && (e = e.trim().split(/[\t\n\f\r\s]/)), Array.isArray(e) && (D = D.concat(e));
	}), D.filter(Boolean);
}, castAsArray$3 = (e) => (Array.isArray(e) || (e = [e]), e), parentMatch$1 = (e, D, O) => {
	if (!(O && !O.contains(e))) for (; e && e.matches;) {
		if (e.matches(D)) return e;
		e = e.parentNode;
	}
}, getTail = (e, D = 0) => D > 0 ? e[e.length - 1] : e[0], isEmptyObject = (e) => Object.keys(e).length === 0, nodeIndex$2 = (e, D) => {
	if (!e) return -1;
	D ||= e.nodeName;
	for (var O = 0; e = e.previousElementSibling;) e.matches(D) && O++;
	return O;
}, setAttr$1 = (e, D) => {
	iterate$4(D, (D, O) => {
		D == null ? e.removeAttribute(O) : e.setAttribute(O, "" + D);
	});
}, replaceNode = (e, D) => {
	e.parentNode && e.parentNode.replaceChild(D, e);
}, highlight = (e, D) => {
	if (D === null) return;
	if (typeof D == "string") {
		if (!D.length) return;
		D = new RegExp(D, "i");
	}
	let O = (e) => {
		var O = e.data.match(D);
		if (O && e.data.length > 0) {
			var k = document.createElement("span");
			k.className = "highlight";
			var A = e.splitText(O.index);
			A.splitText(O[0].length);
			var j = A.cloneNode(!0);
			return k.appendChild(j), replaceNode(A, k), 1;
		}
		return 0;
	}, k = (e) => {
		e.nodeType === 1 && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.className !== "highlight" || e.tagName !== "SPAN") && Array.from(e.childNodes).forEach((e) => {
			A(e);
		});
	}, A = (e) => e.nodeType === 3 ? O(e) : (k(e), 0);
	A(e);
}, removeHighlight = (e) => {
	var D = e.querySelectorAll("span.highlight");
	Array.prototype.forEach.call(D, function(e) {
		var D = e.parentNode;
		D.replaceChild(e.firstChild, e), D.normalize();
	});
}, KEY_SHORTCUT = !(typeof navigator > "u") && /Mac/.test(navigator.userAgent) ? "metaKey" : "ctrlKey";
var defaults_default = {
	options: [],
	optgroups: [],
	plugins: [],
	delimiter: ",",
	splitOn: null,
	persist: !0,
	diacritics: !0,
	create: null,
	createOnBlur: !1,
	createFilter: null,
	highlight: !0,
	openOnFocus: !0,
	shouldOpen: null,
	maxOptions: 50,
	maxItems: null,
	hideSelected: null,
	duplicates: !1,
	addPrecedence: !1,
	selectOnTab: !1,
	preload: null,
	allowEmptyOption: !1,
	refreshThrottle: 300,
	loadThrottle: 300,
	loadingClass: "loading",
	dataAttr: null,
	optgroupField: "optgroup",
	valueField: "value",
	labelField: "text",
	disabledField: "disabled",
	optgroupLabelField: "label",
	optgroupValueField: "value",
	lockOptgroupOrder: !1,
	sortField: "$order",
	searchField: ["text"],
	searchConjunction: "and",
	mode: null,
	wrapperClass: "ts-wrapper",
	controlClass: "ts-control",
	dropdownClass: "ts-dropdown",
	dropdownContentClass: "ts-dropdown-content",
	itemClass: "item",
	optionClass: "option",
	dropdownParent: null,
	controlInput: "<input type=\"text\" autocomplete=\"off\" size=\"1\" />",
	copyClassesToDropdown: !1,
	placeholder: null,
	hidePlaceholder: null,
	shouldLoad: function(e) {
		return e.length > 0;
	},
	render: {}
};
function getSettings(e, D) {
	var O = Object.assign({}, defaults_default, D), k = O.dataAttr, A = O.labelField, j = O.valueField, M = O.disabledField, N = O.optgroupField, P = O.optgroupLabelField, F = O.optgroupValueField, I = e.tagName.toLowerCase(), L = e.getAttribute("placeholder") || e.getAttribute("data-placeholder");
	if (!L && !O.allowEmptyOption) {
		let D = e.querySelector("option[value=\"\"]");
		D && (L = D.textContent);
	}
	var R = {
		placeholder: L,
		options: [],
		optgroups: [],
		items: [],
		maxItems: null
	};
	return I === "select" ? (() => {
		var D, I = R.options, L = {}, z = 1;
		let B = 0;
		var V = (e) => {
			var D = Object.assign({}, e.dataset), O = k && D[k];
			return typeof O == "string" && O.length && (D = Object.assign(D, JSON.parse(O))), D;
		}, H = (e, D) => {
			var k = hash_key$1(e.value);
			if (k != null && !(!k && !O.allowEmptyOption)) {
				if (L.hasOwnProperty(k)) {
					if (D) {
						var P = L[k][N];
						P ? Array.isArray(P) ? P.push(D) : L[k][N] = [P, D] : L[k][N] = D;
					}
				} else {
					var F = V(e);
					F[A] = F[A] || e.textContent, F[j] = F[j] || k, F[M] = F[M] || e.disabled, F[N] = F[N] || D, F.$option = e, F.$order = F.$order || ++B, L[k] = F, I.push(F);
				}
				e.selected && R.items.push(k);
			}
		}, U = (e) => {
			var D, O = V(e);
			O[P] = O[P] || e.getAttribute("label") || "", O[F] = O[F] || z++, O[M] = O[M] || e.disabled, O.$order = O.$order || ++B, R.optgroups.push(O), D = O[F], iterate$4(e.children, (e) => {
				H(e, D);
			});
		};
		R.maxItems = e.hasAttribute("multiple") ? null : 1, iterate$4(e.children, (e) => {
			D = e.tagName.toLowerCase(), D === "optgroup" ? U(e) : D === "option" && H(e);
		});
	})() : (() => {
		let D = e.getAttribute(k);
		if (D) R.options = JSON.parse(D), iterate$4(R.options, (e) => {
			R.items.push(e[j]);
		});
		else {
			var M = e.value.trim() || "";
			if (!O.allowEmptyOption && !M.length) return;
			let D = M.split(O.delimiter);
			iterate$4(D, (e) => {
				let D = {};
				D[A] = e, D[j] = e, R.options.push(D);
			}), R.items = D;
		}
	})(), Object.assign({}, defaults_default, R, D);
}
var instance_i = 0, TomSelect = class extends MicroPlugin(MicroEvent) {
	constructor(e, D) {
		super(), this.order = 0, this.isOpen = !1, this.isDisabled = !1, this.isReadOnly = !1, this.isInvalid = !1, this.isValid = !0, this.isLocked = !1, this.isFocused = !1, this.isInputHidden = !1, this.isSetup = !1, this.ignoreFocus = !1, this.ignoreHover = !1, this.hasOptions = !1, this.lastValue = "", this.caretPos = 0, this.loading = 0, this.loadedSearches = {}, this.activeOption = null, this.activeItems = [], this.optgroups = {}, this.options = {}, this.userOptions = {}, this.items = [], this.refreshTimeout = null, instance_i++;
		var O, k = getDom$6(e);
		if (k.tomselect) throw Error("Tom Select already initialized on this element");
		k.tomselect = this, O = (window.getComputedStyle && window.getComputedStyle(k, null)).getPropertyValue("direction");
		let A = getSettings(k, D);
		this.settings = A, this.input = k, this.tabIndex = k.tabIndex || 0, this.is_select_tag = k.tagName.toLowerCase() === "select", this.rtl = /rtl/i.test(O), this.inputId = getId(k, "tomselect-" + instance_i), this.isRequired = k.required, this.sifter = new Sifter(this.options, { diacritics: A.diacritics }), A.mode = A.mode || (A.maxItems === 1 ? "single" : "multi"), typeof A.hideSelected != "boolean" && (A.hideSelected = A.mode === "multi"), typeof A.hidePlaceholder != "boolean" && (A.hidePlaceholder = A.mode !== "multi");
		var j = A.createFilter;
		typeof j != "function" && (typeof j == "string" && (j = new RegExp(j)), j instanceof RegExp ? A.createFilter = (e) => j.test(e) : A.createFilter = (e) => this.settings.duplicates || !this.options[e]), this.initializePlugins(A.plugins), this.setupCallbacks(), this.setupTemplates();
		let M = getDom$6("<div>"), N = getDom$6("<div>"), P = this._render("dropdown"), F = getDom$6("<div role=\"listbox\" tabindex=\"-1\">"), I = this.input.getAttribute("class") || "", L = A.mode;
		var R;
		addClasses$2(M, A.wrapperClass, I, L), addClasses$2(N, A.controlClass), append(M, N), addClasses$2(P, A.dropdownClass, L), A.copyClassesToDropdown && addClasses$2(P, I), addClasses$2(F, A.dropdownContentClass), append(P, F), getDom$6(A.dropdownParent || M).appendChild(P), isHtmlString$6(A.controlInput) ? (R = getDom$6(A.controlInput), iterate$4([
			"autocorrect",
			"autocapitalize",
			"autocomplete",
			"spellcheck"
		], (e) => {
			k.getAttribute(e) && setAttr$1(R, { [e]: k.getAttribute(e) });
		}), R.tabIndex = -1, N.appendChild(R), this.focus_node = R) : A.controlInput ? (R = getDom$6(A.controlInput), this.focus_node = R) : (R = getDom$6("<input/>"), this.focus_node = N), this.wrapper = M, this.dropdown = P, this.dropdown_content = F, this.control = N, this.control_input = R, this.setup();
	}
	setup() {
		let e = this, D = e.settings, O = e.control_input, k = e.dropdown, A = e.dropdown_content, j = e.wrapper, M = e.control, N = e.input, P = e.focus_node, F = { passive: !0 }, I = e.inputId + "-ts-dropdown";
		setAttr$1(A, { id: I }), setAttr$1(P, {
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-expanded": "false",
			"aria-controls": I
		});
		let L = getId(P, e.inputId + "-ts-control"), R = "label[for='" + escapeQuery(e.inputId) + "']", z = document.querySelector(R), B = e.focus.bind(e);
		if (z) {
			addEvent$5(z, "click", B), setAttr$1(z, { for: L });
			let D = getId(z, e.inputId + "-ts-label");
			setAttr$1(P, { "aria-labelledby": D }), setAttr$1(A, { "aria-labelledby": D });
		}
		if (j.style.width = N.style.width, e.plugins.names.length) {
			let D = "plugin-" + e.plugins.names.join(" plugin-");
			addClasses$2([j, k], D);
		}
		(D.maxItems === null || D.maxItems > 1) && e.is_select_tag && setAttr$1(N, { multiple: "multiple" }), D.placeholder && setAttr$1(O, { placeholder: D.placeholder }), !D.splitOn && D.delimiter && (D.splitOn = /* @__PURE__ */ RegExp("\\s*" + escape_regex(D.delimiter) + "+\\s*")), D.load && D.loadThrottle && (D.load = loadDebounce(D.load, D.loadThrottle)), addEvent$5(k, "mousemove", () => {
			e.ignoreHover = !1;
		}), addEvent$5(k, "mouseenter", (D) => {
			var O = parentMatch$1(D.target, "[data-selectable]", k);
			O && e.onOptionHover(D, O);
		}, { capture: !0 }), addEvent$5(k, "click", (D) => {
			let O = parentMatch$1(D.target, "[data-selectable]");
			O && (e.onOptionSelect(D, O), preventDefault$5(D, !0));
		}), addEvent$5(M, "click", (D) => {
			var k = parentMatch$1(D.target, "[data-ts-item]", M);
			if (k && e.onItemSelect(D, k)) {
				preventDefault$5(D, !0);
				return;
			}
			O.value == "" && (e.onClick(), preventDefault$5(D, !0));
		}), addEvent$5(P, "keydown", (D) => e.onKeyDown(D)), addEvent$5(O, "keypress", (D) => e.onKeyPress(D)), addEvent$5(O, "input", (D) => e.onInput(D)), addEvent$5(P, "blur", (D) => e.onBlur(D)), addEvent$5(P, "focus", (D) => e.onFocus(D)), addEvent$5(O, "paste", (D) => e.onPaste(D));
		let V = (D) => {
			let A = D.composedPath()[0];
			if (!j.contains(A) && !k.contains(A)) {
				e.isFocused && e.blur(), e.inputState();
				return;
			}
			A == O && e.isOpen ? D.stopPropagation() : preventDefault$5(D, !0);
		}, H = () => {
			e.isOpen && e.positionDropdown();
		};
		addEvent$5(document, "mousedown", V), addEvent$5(window, "scroll", H, F), addEvent$5(window, "resize", H, F), this._destroy = () => {
			document.removeEventListener("mousedown", V), window.removeEventListener("scroll", H), window.removeEventListener("resize", H), z && z.removeEventListener("click", B);
		}, this.revertSettings = {
			innerHTML: N.innerHTML,
			tabIndex: N.tabIndex
		}, N.tabIndex = -1, N.insertAdjacentElement("afterend", e.wrapper), e.sync(!1), D.items = [], delete D.optgroups, delete D.options, addEvent$5(N, "invalid", () => {
			e.isValid && (e.isValid = !1, e.isInvalid = !0, e.refreshState());
		}), e.updateOriginalInput(), e.refreshItems(), e.close(!1), e.inputState(), e.isSetup = !0, N.disabled ? e.disable() : N.readOnly ? e.setReadOnly(!0) : e.enable(), e.on("change", this.onChange), addClasses$2(N, "tomselected", "ts-hidden-accessible"), e.trigger("initialize"), D.preload === !0 && e.preload();
	}
	setupOptions(e = [], D = []) {
		this.addOptions(e), iterate$4(D, (e) => {
			this.registerOptionGroup(e);
		});
	}
	setupTemplates() {
		var e = this, D = e.settings.labelField, O = e.settings.optgroupLabelField, k = {
			optgroup: (e) => {
				let D = document.createElement("div");
				return D.className = "optgroup", D.appendChild(e.options), D;
			},
			optgroup_header: (e, D) => "<div class=\"optgroup-header\">" + D(e[O]) + "</div>",
			option: (e, O) => "<div>" + O(e[D]) + "</div>",
			item: (e, O) => "<div>" + O(e[D]) + "</div>",
			option_create: (e, D) => "<div class=\"create\">Add <strong>" + D(e.input) + "</strong>&hellip;</div>",
			no_results: () => "<div class=\"no-results\">No results found</div>",
			loading: () => "<div class=\"spinner\"></div>",
			not_loading: () => {},
			dropdown: () => "<div></div>"
		};
		e.settings.render = Object.assign({}, k, e.settings.render);
	}
	setupCallbacks() {
		var e, D, O = {
			initialize: "onInitialize",
			change: "onChange",
			item_add: "onItemAdd",
			item_remove: "onItemRemove",
			item_select: "onItemSelect",
			clear: "onClear",
			option_add: "onOptionAdd",
			option_remove: "onOptionRemove",
			option_clear: "onOptionClear",
			optgroup_add: "onOptionGroupAdd",
			optgroup_remove: "onOptionGroupRemove",
			optgroup_clear: "onOptionGroupClear",
			dropdown_open: "onDropdownOpen",
			dropdown_close: "onDropdownClose",
			type: "onType",
			load: "onLoad",
			focus: "onFocus",
			blur: "onBlur"
		};
		for (e in O) D = this.settings[O[e]], D && this.on(e, D);
	}
	sync(e = !0) {
		let D = this, O = e ? getSettings(D.input, { delimiter: D.settings.delimiter }) : D.settings;
		D.setupOptions(O.options, O.optgroups), D.setValue(O.items || [], !0), D.lastQuery = null;
	}
	onClick() {
		var e = this;
		if (e.activeItems.length > 0) {
			e.clearActiveItems(), e.focus();
			return;
		}
		e.isFocused && e.isOpen ? e.blur() : e.focus();
	}
	onMouseDown() {}
	onChange() {
		triggerEvent(this.input, "input"), triggerEvent(this.input, "change");
	}
	onPaste(e) {
		var D = this;
		if (D.isInputHidden || D.isLocked) {
			preventDefault$5(e);
			return;
		}
		D.settings.splitOn && setTimeout(() => {
			var e = D.inputValue();
			e.match(D.settings.splitOn) && iterate$4(e.trim().split(D.settings.splitOn), (e) => {
				hash_key$1(e) && (this.options[e] ? D.addItem(e) : D.createItem(e));
			});
		}, 0);
	}
	onKeyPress(e) {
		var D = this;
		if (D.isLocked) {
			preventDefault$5(e);
			return;
		}
		var O = String.fromCharCode(e.keyCode || e.which);
		if (D.settings.create && D.settings.mode === "multi" && O === D.settings.delimiter) {
			D.createItem(), preventDefault$5(e);
			return;
		}
	}
	onKeyDown(e) {
		var D = this;
		if (D.ignoreHover = !0, D.isLocked) {
			e.keyCode !== 9 && preventDefault$5(e);
			return;
		}
		switch (e.keyCode) {
			case 65:
				if (isKeyDown(KEY_SHORTCUT, e) && D.control_input.value == "") {
					preventDefault$5(e), D.selectAll();
					return;
				}
				break;
			case 27:
				D.isOpen && (preventDefault$5(e, !0), D.close()), D.clearActiveItems();
				return;
			case 40:
				if (!D.isOpen && D.hasOptions) D.open();
				else if (D.activeOption) {
					let e = D.getAdjacent(D.activeOption, 1);
					e && D.setActiveOption(e);
				}
				preventDefault$5(e);
				return;
			case 38:
				if (D.activeOption) {
					let e = D.getAdjacent(D.activeOption, -1);
					e && D.setActiveOption(e);
				}
				preventDefault$5(e);
				return;
			case 13:
				D.canSelect(D.activeOption) ? (D.onOptionSelect(e, D.activeOption), preventDefault$5(e)) : (D.settings.create && D.createItem() || document.activeElement == D.control_input && D.isOpen) && preventDefault$5(e);
				return;
			case 37:
				D.advanceSelection(-1, e);
				return;
			case 39:
				D.advanceSelection(1, e);
				return;
			case 9:
				D.settings.selectOnTab && (D.canSelect(D.activeOption) && (D.onOptionSelect(e, D.activeOption), preventDefault$5(e)), D.settings.create && D.createItem() && preventDefault$5(e));
				return;
			case 8:
			case 46:
				D.deleteSelection(e);
				return;
		}
		D.isInputHidden && !isKeyDown(KEY_SHORTCUT, e) && preventDefault$5(e);
	}
	onInput(e) {
		if (this.isLocked) return;
		let D = this.inputValue();
		if (this.lastValue !== D) {
			if (this.lastValue = D, D == "") {
				this._onInput();
				return;
			}
			this.refreshTimeout && window.clearTimeout(this.refreshTimeout), this.refreshTimeout = timeout(() => {
				this.refreshTimeout = null, this._onInput();
			}, this.settings.refreshThrottle);
		}
	}
	_onInput() {
		let e = this.lastValue;
		this.settings.shouldLoad.call(this, e) && this.load(e), this.refreshOptions(), this.trigger("type", e);
	}
	onOptionHover(e, D) {
		this.ignoreHover || this.setActiveOption(D, !1);
	}
	onFocus(e) {
		var D = this, O = D.isFocused;
		if (D.isDisabled || D.isReadOnly) {
			D.blur(), preventDefault$5(e);
			return;
		}
		D.ignoreFocus || (D.isFocused = !0, D.settings.preload === "focus" && D.preload(), O || D.trigger("focus"), D.activeItems.length || (D.inputState(), D.refreshOptions(!!D.settings.openOnFocus)), D.refreshState());
	}
	onBlur(e) {
		if (document.hasFocus() !== !1) {
			var D = this;
			if (D.isFocused) {
				D.isFocused = !1, D.ignoreFocus = !1;
				var O = () => {
					D.close(), D.setActiveItem(), D.setCaret(D.items.length), D.trigger("blur");
				};
				D.settings.create && D.settings.createOnBlur ? D.createItem(null, O) : O();
			}
		}
	}
	onOptionSelect(e, D) {
		var O, k = this;
		D.parentElement && D.parentElement.matches("[data-disabled]") || (D.classList.contains("create") ? k.createItem(null, () => {
			k.settings.closeAfterSelect && k.close();
		}) : (O = D.dataset.value, O !== void 0 && (k.lastQuery = null, k.addItem(O), k.settings.closeAfterSelect && k.close(), !k.settings.hideSelected && e.type && /click/.test(e.type) && k.setActiveOption(D))));
	}
	canSelect(e) {
		return !!(this.isOpen && e && this.dropdown_content.contains(e));
	}
	onItemSelect(e, D) {
		var O = this;
		return !O.isLocked && O.settings.mode === "multi" ? (preventDefault$5(e), O.setActiveItem(D, e), !0) : !1;
	}
	canLoad(e) {
		return !(!this.settings.load || this.loadedSearches.hasOwnProperty(e));
	}
	load(e) {
		let D = this;
		if (!D.canLoad(e)) return;
		addClasses$2(D.wrapper, D.settings.loadingClass), D.loading++;
		let O = D.loadCallback.bind(D);
		D.settings.load.call(D, e, O);
	}
	loadCallback(e, D) {
		let O = this;
		O.loading = Math.max(O.loading - 1, 0), O.lastQuery = null, O.clearActiveOption(), O.setupOptions(e, D), O.refreshOptions(O.isFocused && !O.isInputHidden), O.loading || removeClasses$1(O.wrapper, O.settings.loadingClass), O.trigger("load", e, D);
	}
	preload() {
		var e = this.wrapper.classList;
		e.contains("preloaded") || (e.add("preloaded"), this.load(""));
	}
	setTextboxValue(e = "") {
		var D = this.control_input;
		D.value !== e && (D.value = e, triggerEvent(D, "update"), this.lastValue = e);
	}
	getValue() {
		return this.is_select_tag && this.input.hasAttribute("multiple") ? this.items : this.items.join(this.settings.delimiter);
	}
	setValue(e, D) {
		debounce_events(this, D ? [] : ["change"], () => {
			this.clear(D), this.addItems(e, D);
		});
	}
	setMaxItems(e) {
		e === 0 && (e = null), this.settings.maxItems = e, this.refreshState();
	}
	setActiveItem(e, D) {
		var O = this, k, A, j, M, N, P;
		if (O.settings.mode !== "single") {
			if (!e) {
				O.clearActiveItems(), O.isFocused && O.inputState();
				return;
			}
			if (k = D && D.type.toLowerCase(), k === "click" && isKeyDown("shiftKey", D) && O.activeItems.length) {
				for (P = O.getLastActive(), j = Array.prototype.indexOf.call(O.control.children, P), M = Array.prototype.indexOf.call(O.control.children, e), j > M && (N = j, j = M, M = N), A = j; A <= M; A++) e = O.control.children[A], O.activeItems.indexOf(e) === -1 && O.setActiveItemClass(e);
				preventDefault$5(D);
			} else k === "click" && isKeyDown(KEY_SHORTCUT, D) || k === "keydown" && isKeyDown("shiftKey", D) ? e.classList.contains("active") ? O.removeActiveItem(e) : O.setActiveItemClass(e) : (O.clearActiveItems(), O.setActiveItemClass(e));
			O.inputState(), O.isFocused || O.focus();
		}
	}
	setActiveItemClass(e) {
		let D = this, O = D.control.querySelector(".last-active");
		O && removeClasses$1(O, "last-active"), addClasses$2(e, "active last-active"), D.trigger("item_select", e), D.activeItems.indexOf(e) == -1 && D.activeItems.push(e);
	}
	removeActiveItem(e) {
		var D = this.activeItems.indexOf(e);
		this.activeItems.splice(D, 1), removeClasses$1(e, "active");
	}
	clearActiveItems() {
		removeClasses$1(this.activeItems, "active"), this.activeItems = [];
	}
	setActiveOption(e, D = !0) {
		e !== this.activeOption && (this.clearActiveOption(), e && (this.activeOption = e, setAttr$1(this.focus_node, { "aria-activedescendant": e.getAttribute("id") }), setAttr$1(e, { "aria-selected": "true" }), addClasses$2(e, "active"), D && this.scrollToOption(e)));
	}
	scrollToOption(e, D) {
		if (!e) return;
		let O = this.dropdown_content, k = O.clientHeight, A = O.scrollTop || 0, j = e.offsetHeight, M = e.getBoundingClientRect().top - O.getBoundingClientRect().top + A;
		M + j > k + A ? this.scroll(M - k + j, D) : M < A && this.scroll(M, D);
	}
	scroll(e, D) {
		let O = this.dropdown_content;
		D && (O.style.scrollBehavior = D), O.scrollTop = e, O.style.scrollBehavior = "";
	}
	clearActiveOption() {
		this.activeOption && (removeClasses$1(this.activeOption, "active"), setAttr$1(this.activeOption, { "aria-selected": null })), this.activeOption = null, setAttr$1(this.focus_node, { "aria-activedescendant": null });
	}
	selectAll() {
		let e = this;
		if (e.settings.mode === "single") return;
		let D = e.controlChildren();
		D.length && (e.inputState(), e.close(), e.activeItems = D, iterate$4(D, (D) => {
			e.setActiveItemClass(D);
		}));
	}
	inputState() {
		var e = this;
		e.control.contains(e.control_input) && (setAttr$1(e.control_input, { placeholder: e.settings.placeholder }), e.activeItems.length > 0 || !e.isFocused && e.settings.hidePlaceholder && e.items.length > 0 ? (e.setTextboxValue(), e.isInputHidden = !0) : (e.settings.hidePlaceholder && e.items.length > 0 && setAttr$1(e.control_input, { placeholder: "" }), e.isInputHidden = !1), e.wrapper.classList.toggle("input-hidden", e.isInputHidden));
	}
	inputValue() {
		return this.control_input.value.trim();
	}
	focus() {
		var e = this;
		e.isDisabled || e.isReadOnly || (e.ignoreFocus = !0, e.control_input.offsetWidth ? e.control_input.focus() : e.focus_node.focus(), setTimeout(() => {
			e.ignoreFocus = !1, e.onFocus();
		}, 0));
	}
	blur() {
		this.focus_node.blur(), this.onBlur();
	}
	getScoreFunction(e) {
		return this.sifter.getScoreFunction(e, this.getSearchOptions());
	}
	getSearchOptions() {
		var e = this.settings, D = e.sortField;
		return typeof e.sortField == "string" && (D = [{ field: e.sortField }]), {
			fields: e.searchField,
			conjunction: e.searchConjunction,
			sort: D,
			nesting: e.nesting
		};
	}
	search(e) {
		var D, O, k = this, A = this.getSearchOptions();
		if (k.settings.score && (O = k.settings.score.call(k, e), typeof O != "function")) throw Error("Tom Select \"score\" setting must be a function that returns a function");
		return e === k.lastQuery ? D = Object.assign({}, k.currentResults) : (k.lastQuery = e, D = k.sifter.search(e, Object.assign(A, { score: O })), k.currentResults = D), k.settings.hideSelected && (D.items = D.items.filter((e) => {
			let D = hash_key$1(e.id);
			return !(D && k.items.indexOf(D) !== -1);
		})), D;
	}
	refreshOptions(e = !0) {
		var D, O, k, A, j, M, N, P, F, I;
		let L = {}, R = [];
		var z = this, B = z.inputValue();
		let V = B === z.lastQuery || B == "" && z.lastQuery == null;
		var H = z.search(B), U = null, W = z.settings.shouldOpen || !1, G = z.dropdown_content;
		V && (U = z.activeOption, U && (F = U.closest("[data-group]"))), A = H.items.length, typeof z.settings.maxOptions == "number" && (A = Math.min(A, z.settings.maxOptions)), A > 0 && (W = !0);
		let K = (e, D) => {
			let O = L[e];
			if (O !== void 0) {
				let e = R[O];
				if (e !== void 0) return [O, e.fragment];
			}
			let k = document.createDocumentFragment();
			return O = R.length, R.push({
				fragment: k,
				order: D,
				optgroup: e
			}), [O, k];
		};
		for (D = 0; D < A; D++) {
			let e = H.items[D];
			if (!e) continue;
			let A = e.id, N = z.options[A];
			if (N === void 0) continue;
			let P = get_hash$1(A), I = z.getOption(P, !0);
			for (z.settings.hideSelected || I.classList.toggle("selected", z.items.includes(P)), j = N[z.settings.optgroupField] || "", M = Array.isArray(j) ? j : [j], O = 0, k = M && M.length; O < k; O++) {
				j = M[O];
				let e = N.$order, D = z.optgroups[j];
				D === void 0 ? j = "" : e = D.$order;
				let [k, P] = K(j, e);
				O > 0 && (I = I.cloneNode(!0), setAttr$1(I, {
					id: N.$id + "-clone-" + O,
					"aria-selected": null
				}), I.classList.add("ts-cloned"), removeClasses$1(I, "active"), z.activeOption && z.activeOption.dataset.value == A && F && F.dataset.group === j.toString() && (U = I)), P.appendChild(I), j != "" && (L[j] = k);
			}
		}
		z.settings.lockOptgroupOrder && R.sort((e, D) => e.order - D.order), N = document.createDocumentFragment(), iterate$4(R, (e) => {
			let D = e.fragment, O = e.optgroup;
			if (!D || !D.children.length) return;
			let k = z.optgroups[O];
			if (k !== void 0) {
				let e = document.createDocumentFragment();
				append(e, z.render("optgroup_header", k)), append(e, D);
				let O = z.render("optgroup", {
					group: k,
					options: e
				});
				append(N, O);
			} else append(N, D);
		}), G.innerHTML = "", append(G, N), z.settings.highlight && (removeHighlight(G), H.query.length && H.tokens.length && iterate$4(H.tokens, (e) => {
			highlight(G, e.regex);
		}));
		var q = (e) => {
			let D = z.render(e, { input: B });
			return D && (W = !0, G.insertBefore(D, G.firstChild)), D;
		};
		if (z.loading ? q("loading") : z.settings.shouldLoad.call(z, B) ? H.items.length === 0 && q("no_results") : q("not_loading"), P = z.canCreate(B), P && (I = q("option_create")), z.hasOptions = H.items.length > 0 || P, W) {
			if (H.items.length > 0) {
				if (!U && z.settings.mode === "single" && z.items[0] != null && (U = z.getOption(z.items[0])), !G.contains(U)) {
					let e = 0;
					I && !z.settings.addPrecedence && (e = 1), U = z.selectable()[e];
				}
			} else I && (U = I);
			e && !z.isOpen && (z.open(), z.scrollToOption(U, "auto")), z.setActiveOption(U);
		} else z.clearActiveOption(), e && z.isOpen && z.close(!1);
	}
	selectable() {
		return this.dropdown_content.querySelectorAll("[data-selectable]");
	}
	addOption(e, D = !1) {
		let O = this;
		if (Array.isArray(e)) return O.addOptions(e, D), !1;
		let k = hash_key$1(e[O.settings.valueField]);
		return k === null || O.options.hasOwnProperty(k) ? !1 : (e.$order = e.$order || ++O.order, e.$id = O.inputId + "-opt-" + e.$order, O.options[k] = e, O.lastQuery = null, D && (O.userOptions[k] = D, O.trigger("option_add", k, e)), k);
	}
	addOptions(e, D = !1) {
		iterate$4(e, (e) => {
			this.addOption(e, D);
		});
	}
	registerOption(e) {
		return this.addOption(e);
	}
	registerOptionGroup(e) {
		var D = hash_key$1(e[this.settings.optgroupValueField]);
		return D === null ? !1 : (e.$order = e.$order || ++this.order, this.optgroups[D] = e, D);
	}
	addOptionGroup(e, D) {
		var O;
		D[this.settings.optgroupValueField] = e, (O = this.registerOptionGroup(D)) && this.trigger("optgroup_add", O, D);
	}
	removeOptionGroup(e) {
		this.optgroups.hasOwnProperty(e) && (delete this.optgroups[e], this.clearCache(), this.trigger("optgroup_remove", e));
	}
	clearOptionGroups() {
		this.optgroups = {}, this.clearCache(), this.trigger("optgroup_clear");
	}
	updateOption(e, D) {
		let O = this;
		var k, A;
		let j = hash_key$1(e), M = hash_key$1(D[O.settings.valueField]);
		if (j === null) return;
		let N = O.options[j];
		if (N == null) return;
		if (typeof M != "string") throw Error("Value must be set in option data");
		let P = O.getOption(j), F = O.getItem(j);
		if (D.$order = D.$order || N.$order, delete O.options[j], O.uncacheValue(M), O.options[M] = D, P) {
			if (O.dropdown_content.contains(P)) {
				let e = O._render("option", D);
				replaceNode(P, e), O.activeOption === P && O.setActiveOption(e);
			}
			P.remove();
		}
		F && (A = O.items.indexOf(j), A !== -1 && O.items.splice(A, 1, M), k = O._render("item", D), F.classList.contains("active") && addClasses$2(k, "active"), replaceNode(F, k)), O.lastQuery = null;
	}
	removeOption(e, D) {
		let O = this;
		e = get_hash$1(e), O.uncacheValue(e), delete O.userOptions[e], delete O.options[e], O.lastQuery = null, O.trigger("option_remove", e), O.removeItem(e, D);
	}
	clearOptions(e) {
		let D = (e || this.clearFilter).bind(this);
		this.loadedSearches = {}, this.userOptions = {}, this.clearCache();
		let O = {};
		iterate$4(this.options, (e, k) => {
			D(e, k) && (O[k] = e);
		}), this.options = this.sifter.items = O, this.lastQuery = null, this.trigger("option_clear");
	}
	clearFilter(e, D) {
		return this.items.indexOf(D) >= 0;
	}
	getOption(e, D = !1) {
		let O = hash_key$1(e);
		if (O === null) return null;
		let k = this.options[O];
		if (k != null) {
			if (k.$div) return k.$div;
			if (D) return this._render("option", k);
		}
		return null;
	}
	getAdjacent(e, D, O = "option") {
		var k = this, A;
		if (!e) return null;
		A = O == "item" ? k.controlChildren() : k.dropdown_content.querySelectorAll("[data-selectable]");
		for (let O = 0; O < A.length; O++) if (A[O] == e) return D > 0 ? A[O + 1] : A[O - 1];
		return null;
	}
	getItem(e) {
		if (typeof e == "object") return e;
		var D = hash_key$1(e);
		return D === null ? null : this.control.querySelector(`[data-value="${addSlashes(D)}"]`);
	}
	addItems(e, D) {
		var O = this, k = Array.isArray(e) ? e : [e];
		k = k.filter((e) => O.items.indexOf(e) === -1);
		let A = k[k.length - 1];
		k.forEach((e) => {
			O.isPending = e !== A, O.addItem(e, D);
		});
	}
	addItem(e, D) {
		debounce_events(this, D ? [] : ["change", "dropdown_close"], () => {
			var O, k;
			let A = this, j = A.settings.mode, M = hash_key$1(e);
			if (!(M && A.items.indexOf(M) !== -1 && (j === "single" && A.close(), j === "single" || !A.settings.duplicates)) && !(M === null || !A.options.hasOwnProperty(M)) && (j === "single" && A.clear(D), !(j === "multi" && A.isFull()))) {
				if (O = A._render("item", A.options[M]), A.control.contains(O) && (O = O.cloneNode(!0)), k = A.isFull(), A.items.splice(A.caretPos, 0, M), A.insertAtCaret(O), A.isSetup) {
					if (!A.isPending && A.settings.hideSelected) {
						let e = A.getOption(M), D = A.getAdjacent(e, 1);
						D && A.setActiveOption(D);
					}
					!A.isPending && !A.settings.closeAfterSelect && A.refreshOptions(A.isFocused && j !== "single"), A.settings.closeAfterSelect != 0 && A.isFull() ? A.close() : A.isPending || A.positionDropdown(), A.trigger("item_add", M, O), A.isPending || A.updateOriginalInput({ silent: D });
				}
				(!A.isPending || !k && A.isFull()) && (A.inputState(), A.refreshState());
			}
		});
	}
	removeItem(e = null, D) {
		let O = this;
		if (e = O.getItem(e), !e) return;
		var k, A;
		let j = e.dataset.value;
		k = nodeIndex$2(e), e.remove(), e.classList.contains("active") && (A = O.activeItems.indexOf(e), O.activeItems.splice(A, 1), removeClasses$1(e, "active")), O.items.splice(k, 1), O.lastQuery = null, !O.settings.persist && O.userOptions.hasOwnProperty(j) && O.removeOption(j, D), k < O.caretPos && O.setCaret(O.caretPos - 1), O.updateOriginalInput({ silent: D }), O.refreshState(), O.positionDropdown(), O.trigger("item_remove", j, e);
	}
	createItem(e = null, D = () => {}) {
		arguments.length === 3 && (D = arguments[2]), typeof D != "function" && (D = () => {});
		var O = this, k = O.caretPos, A;
		if (e ||= O.inputValue(), !O.canCreate(e)) return D(), !1;
		O.lock();
		var j = !1, M = (e) => {
			if (O.unlock(), !e || typeof e != "object") return D();
			var A = hash_key$1(e[O.settings.valueField]);
			if (typeof A != "string") return D();
			O.setTextboxValue(), O.addOption(e, !0), O.setCaret(k), O.addItem(A), D(e), j = !0;
		};
		return A = typeof O.settings.create == "function" ? O.settings.create.call(this, e, M) : {
			[O.settings.labelField]: e,
			[O.settings.valueField]: e
		}, j || M(A), !0;
	}
	refreshItems() {
		var e = this;
		e.lastQuery = null, e.isSetup && e.addItems(e.items), e.updateOriginalInput(), e.refreshState();
	}
	refreshState() {
		let e = this;
		e.refreshValidityState();
		let D = e.isFull(), O = e.isLocked;
		e.wrapper.classList.toggle("rtl", e.rtl);
		let k = e.wrapper.classList;
		k.toggle("focus", e.isFocused), k.toggle("disabled", e.isDisabled), k.toggle("readonly", e.isReadOnly), k.toggle("required", e.isRequired), k.toggle("invalid", !e.isValid), k.toggle("locked", O), k.toggle("full", D), k.toggle("input-active", e.isFocused && !e.isInputHidden), k.toggle("dropdown-active", e.isOpen), k.toggle("has-options", isEmptyObject(e.options)), k.toggle("has-items", e.items.length > 0);
	}
	refreshValidityState() {
		var e = this;
		e.input.validity && (e.isValid = e.input.validity.valid, e.isInvalid = !e.isValid);
	}
	isFull() {
		return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
	}
	updateOriginalInput(e = {}) {
		let D = this;
		var O, k;
		let A = D.input.querySelector("option[value=\"\"]");
		if (D.is_select_tag) {
			let e = [], j = D.input.querySelectorAll("option:checked").length;
			function M(O, k, M) {
				return O ||= getDom$6("<option value=\"" + escape_html$1(k) + "\">" + escape_html$1(M) + "</option>"), O != A && D.input.append(O), e.push(O), (O != A || j > 0) && (O.selected = !0), O;
			}
			D.input.querySelectorAll("option:checked").forEach((e) => {
				e.selected = !1;
			}), D.items.length == 0 && D.settings.mode == "single" ? M(A, "", "") : D.items.forEach((A) => {
				O = D.options[A], k = O[D.settings.labelField] || "", e.includes(O.$option) ? M(D.input.querySelector(`option[value="${addSlashes(A)}"]:not(:checked)`), A, k) : O.$option = M(O.$option, A, k);
			});
		} else D.input.value = D.getValue();
		D.isSetup && (e.silent || D.trigger("change", D.getValue()));
	}
	open() {
		var e = this;
		e.isLocked || e.isOpen || e.settings.mode === "multi" && e.isFull() || (e.isOpen = !0, setAttr$1(e.focus_node, { "aria-expanded": "true" }), e.refreshState(), applyCSS(e.dropdown, {
			visibility: "hidden",
			display: "block"
		}), e.positionDropdown(), applyCSS(e.dropdown, {
			visibility: "visible",
			display: "block"
		}), e.focus(), e.trigger("dropdown_open", e.dropdown));
	}
	close(e = !0) {
		var D = this, O = D.isOpen;
		e && (D.setTextboxValue(), D.settings.mode === "single" && D.items.length && D.inputState()), D.isOpen = !1, setAttr$1(D.focus_node, { "aria-expanded": "false" }), applyCSS(D.dropdown, { display: "none" }), D.settings.hideSelected && D.clearActiveOption(), D.refreshState(), O && D.trigger("dropdown_close", D.dropdown);
	}
	positionDropdown() {
		if (this.settings.dropdownParent === "body") {
			var e = this.control, D = e.getBoundingClientRect(), O = e.offsetHeight + D.top + window.scrollY, k = D.left + window.scrollX;
			applyCSS(this.dropdown, {
				width: D.width + "px",
				top: O + "px",
				left: k + "px"
			});
		}
	}
	clear(e) {
		var D = this;
		D.items.length && (iterate$4(D.controlChildren(), (e) => {
			D.removeItem(e, !0);
		}), D.inputState(), e || D.updateOriginalInput(), D.trigger("clear"));
	}
	insertAtCaret(e) {
		let D = this, O = D.caretPos, k = D.control;
		k.insertBefore(e, k.children[O] || null), D.setCaret(O + 1);
	}
	deleteSelection(e) {
		var D, O, k, A, j = this;
		D = e && e.keyCode === 8 ? -1 : 1, O = getSelection(j.control_input);
		let M = [];
		if (j.activeItems.length) A = getTail(j.activeItems, D), k = nodeIndex$2(A), D > 0 && k++, iterate$4(j.activeItems, (e) => M.push(e));
		else if ((j.isFocused || j.settings.mode === "single") && j.items.length) {
			let e = j.controlChildren(), k;
			D < 0 && O.start === 0 && O.length === 0 ? k = e[j.caretPos - 1] : D > 0 && O.start === j.inputValue().length && (k = e[j.caretPos]), k !== void 0 && M.push(k);
		}
		if (!j.shouldDelete(M, e)) return !1;
		for (preventDefault$5(e, !0), k !== void 0 && j.setCaret(k); M.length;) j.removeItem(M.pop());
		return j.inputState(), j.positionDropdown(), j.refreshOptions(!1), !0;
	}
	shouldDelete(e, D) {
		let O = e.map((e) => e.dataset.value);
		return !(!O.length || typeof this.settings.onDelete == "function" && this.settings.onDelete(O, D) === !1);
	}
	advanceSelection(e, D) {
		var O, k, A = this;
		A.rtl && (e *= -1), !A.inputValue().length && (isKeyDown(KEY_SHORTCUT, D) || isKeyDown("shiftKey", D) ? (O = A.getLastActive(e), k = O ? O.classList.contains("active") ? A.getAdjacent(O, e, "item") : O : e > 0 ? A.control_input.nextElementSibling : A.control_input.previousElementSibling, k && (k.classList.contains("active") && A.removeActiveItem(O), A.setActiveItemClass(k))) : A.moveCaret(e));
	}
	moveCaret(e) {}
	getLastActive(e) {
		let D = this.control.querySelector(".last-active");
		if (D) return D;
		var O = this.control.querySelectorAll(".active");
		if (O) return getTail(O, e);
	}
	setCaret(e) {
		this.caretPos = this.items.length;
	}
	controlChildren() {
		return Array.from(this.control.querySelectorAll("[data-ts-item]"));
	}
	lock() {
		this.setLocked(!0);
	}
	unlock() {
		this.setLocked(!1);
	}
	setLocked(e = this.isReadOnly || this.isDisabled) {
		this.isLocked = e, this.refreshState();
	}
	disable() {
		this.setDisabled(!0), this.close();
	}
	enable() {
		this.setDisabled(!1);
	}
	setDisabled(e) {
		this.focus_node.tabIndex = e ? -1 : this.tabIndex, this.isDisabled = e, this.input.disabled = e, this.control_input.disabled = e, this.setLocked();
	}
	setReadOnly(e) {
		this.isReadOnly = e, this.input.readOnly = e, this.control_input.readOnly = e, this.setLocked();
	}
	destroy() {
		var e = this, D = e.revertSettings;
		e.trigger("destroy"), e.off(), e.wrapper.remove(), e.dropdown.remove(), e.input.innerHTML = D.innerHTML, e.input.tabIndex = D.tabIndex, removeClasses$1(e.input, "tomselected", "ts-hidden-accessible"), e._destroy(), delete e.input.tomselect;
	}
	render(e, D) {
		var O, k;
		let A = this;
		if (typeof this.settings.render[e] != "function" || (k = A.settings.render[e].call(this, D, escape_html$1), !k)) return null;
		if (k = getDom$6(k), e === "option" || e === "option_create" ? D[A.settings.disabledField] ? setAttr$1(k, { "aria-disabled": "true" }) : setAttr$1(k, { "data-selectable": "" }) : e === "optgroup" && (O = D.group[A.settings.optgroupValueField], setAttr$1(k, { "data-group": O }), D.group[A.settings.disabledField] && setAttr$1(k, { "data-disabled": "" })), e === "option" || e === "item") {
			let O = get_hash$1(D[A.settings.valueField]);
			setAttr$1(k, { "data-value": O }), e === "item" ? (addClasses$2(k, A.settings.itemClass), setAttr$1(k, { "data-ts-item": "" })) : (addClasses$2(k, A.settings.optionClass), setAttr$1(k, {
				role: "option",
				id: D.$id
			}), D.$div = k, A.options[O] = D);
		}
		return k;
	}
	_render(e, D) {
		let O = this.render(e, D);
		if (O == null) throw "HTMLElement expected";
		return O;
	}
	clearCache() {
		iterate$4(this.options, (e) => {
			e.$div && (e.$div.remove(), delete e.$div);
		});
	}
	uncacheValue(e) {
		let D = this.getOption(e);
		D && D.remove();
	}
	canCreate(e) {
		return this.settings.create && e.length > 0 && this.settings.createFilter.call(this, e);
	}
	hook(e, D, O) {
		var k = this, A = k[D];
		k[D] = function() {
			var D, j;
			return e === "after" && (D = A.apply(k, arguments)), j = O.apply(k, arguments), e === "instead" ? j : (e === "before" && (D = A.apply(k, arguments)), D);
		};
	}
}, addEvent$4 = (e, D, O, k) => {
	e.addEventListener(D, O, k);
};
function plugin() {
	addEvent$4(this.input, "change", () => {
		this.sync();
	});
}
var hash_key = (e) => e == null ? null : get_hash(e), get_hash = (e) => typeof e == "boolean" ? e ? "1" : "0" : e + "", preventDefault$4 = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, getDom$5 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$5(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$5 = (e) => typeof e == "string" && e.indexOf("<") > -1;
function plugin$1(e) {
	var D = this, O = D.onOptionSelect;
	D.settings.hideSelected = !1;
	let k = Object.assign({
		className: "tomselect-checkbox",
		checkedClassNames: void 0,
		uncheckedClassNames: void 0
	}, e);
	var A = function(e, D) {
		D ? (e.checked = !0, k.uncheckedClassNames && e.classList.remove(...k.uncheckedClassNames), k.checkedClassNames && e.classList.add(...k.checkedClassNames)) : (e.checked = !1, k.checkedClassNames && e.classList.remove(...k.checkedClassNames), k.uncheckedClassNames && e.classList.add(...k.uncheckedClassNames));
	}, j = function(e) {
		setTimeout(() => {
			var D = e.querySelector("input." + k.className);
			D instanceof HTMLInputElement && A(D, e.classList.contains("selected"));
		}, 1);
	};
	D.hook("after", "setupTemplates", () => {
		var e = D.settings.render.option;
		D.settings.render.option = (O, j) => {
			var M = getDom$5(e.call(D, O, j)), N = document.createElement("input");
			k.className && N.classList.add(k.className), N.addEventListener("click", function(e) {
				preventDefault$4(e);
			}), N.type = "checkbox";
			let P = hash_key(O[D.settings.valueField]);
			return A(N, !!(P && D.items.indexOf(P) > -1)), M.prepend(N), M;
		};
	}), D.on("item_remove", (e) => {
		var O = D.getOption(e);
		O && (O.classList.remove("selected"), j(O));
	}), D.on("item_add", (e) => {
		var O = D.getOption(e);
		O && j(O);
	}), D.hook("instead", "onOptionSelect", (e, k) => {
		if (k.classList.contains("selected")) {
			k.classList.remove("selected"), D.removeItem(k.dataset.value), D.refreshOptions(), preventDefault$4(e, !0);
			return;
		}
		O.call(D, e, k), j(k);
	});
}
var getDom$4 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$4(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$4 = (e) => typeof e == "string" && e.indexOf("<") > -1;
function plugin$2(e) {
	let D = this, O = Object.assign({
		className: "clear-button",
		title: "Clear All",
		html: (e) => `<div class="${e.className}" title="${e.title}">&#10799;</div>`
	}, e);
	D.on("initialize", () => {
		var e = getDom$4(O.html(O));
		e.addEventListener("click", (e) => {
			D.isLocked || (D.clear(), D.settings.mode === "single" && D.settings.allowEmptyOption && D.addItem(""), e.preventDefault(), e.stopPropagation());
		}), D.control.appendChild(e);
	});
}
var preventDefault$3 = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, addEvent$3 = (e, D, O, k) => {
	e.addEventListener(D, O, k);
}, iterate$3 = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, getDom$3 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$3(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$3 = (e) => typeof e == "string" && e.indexOf("<") > -1, setAttr = (e, D) => {
	iterate$3(D, (D, O) => {
		D == null ? e.removeAttribute(O) : e.setAttribute(O, "" + D);
	});
}, insertAfter = (e, D) => {
	var O;
	(O = e.parentNode) == null || O.insertBefore(D, e.nextSibling);
}, insertBefore = (e, D) => {
	var O;
	(O = e.parentNode) == null || O.insertBefore(D, e);
}, isBefore = (e, D) => {
	do
		if (D = D?.previousElementSibling, e == D) return !0;
	while (D && D.previousElementSibling);
	return !1;
};
function plugin$3() {
	var e = this;
	if (e.settings.mode !== "multi") return;
	var D = e.lock, O = e.unlock;
	let k = !0, A;
	e.hook("after", "setupTemplates", () => {
		var D = e.settings.render.item;
		e.settings.render.item = (O, j) => {
			let M = getDom$3(D.call(e, O, j));
			setAttr(M, { draggable: "true" });
			let N = (e) => {
				k || preventDefault$3(e), e.stopPropagation();
			}, P = (e) => {
				A = M, setTimeout(() => {
					M.classList.add("ts-dragging");
				}, 0);
			}, F = (e) => {
				e.preventDefault(), M.classList.add("ts-drag-over"), L(M, A);
			}, I = () => {
				M.classList.remove("ts-drag-over");
			}, L = (e, D) => {
				D !== void 0 && (isBefore(D, M) ? insertAfter(e, D) : insertBefore(e, D));
			};
			return addEvent$3(M, "mousedown", N), addEvent$3(M, "dragstart", P), addEvent$3(M, "dragenter", F), addEvent$3(M, "dragover", F), addEvent$3(M, "dragleave", I), addEvent$3(M, "dragend", () => {
				var D;
				document.querySelectorAll(".ts-drag-over").forEach((e) => e.classList.remove("ts-drag-over")), (D = A) == null || D.classList.remove("ts-dragging"), A = void 0;
				var O = [];
				e.control.querySelectorAll("[data-value]").forEach((e) => {
					if (e.dataset.value) {
						let D = e.dataset.value;
						D && O.push(D);
					}
				}), e.setValue(O);
			}), M;
		};
	}), e.hook("instead", "lock", () => (k = !1, D.call(e))), e.hook("instead", "unlock", () => (k = !0, O.call(e)));
}
var preventDefault$2 = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, getDom$2 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$2(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$2 = (e) => typeof e == "string" && e.indexOf("<") > -1;
function plugin$4(e) {
	let D = this, O = Object.assign({
		title: "Untitled",
		headerClass: "dropdown-header",
		titleRowClass: "dropdown-header-title",
		labelClass: "dropdown-header-label",
		closeClass: "dropdown-header-close",
		html: (e) => "<div class=\"" + e.headerClass + "\"><div class=\"" + e.titleRowClass + "\"><span class=\"" + e.labelClass + "\">" + e.title + "</span><a class=\"" + e.closeClass + "\">&times;</a></div></div>"
	}, e);
	D.on("initialize", () => {
		var e = getDom$2(O.html(O)), k = e.querySelector("." + O.closeClass);
		k && k.addEventListener("click", (e) => {
			preventDefault$2(e, !0), D.close();
		}), D.dropdown.insertBefore(e, D.dropdown.firstChild);
	});
}
var iterate$2 = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, removeClasses = (e, ...D) => {
	var O = classesArray$2(D);
	e = castAsArray$2(e), e.map((e) => {
		O.map((D) => {
			e.classList.remove(D);
		});
	});
}, classesArray$2 = (e) => {
	var D = [];
	return iterate$2(e, (e) => {
		typeof e == "string" && (e = e.trim().split(/[\t\n\f\r\s]/)), Array.isArray(e) && (D = D.concat(e));
	}), D.filter(Boolean);
}, castAsArray$2 = (e) => (Array.isArray(e) || (e = [e]), e), nodeIndex$1 = (e, D) => {
	if (!e) return -1;
	D ||= e.nodeName;
	for (var O = 0; e = e.previousElementSibling;) e.matches(D) && O++;
	return O;
};
function plugin$5() {
	var e = this;
	e.hook("instead", "setCaret", (D) => {
		e.settings.mode === "single" || !e.control.contains(e.control_input) ? D = e.items.length : (D = Math.max(0, Math.min(e.items.length, D)), D != e.caretPos && !e.isPending && e.controlChildren().forEach((O, k) => {
			k < D ? e.control_input.insertAdjacentElement("beforebegin", O) : e.control.appendChild(O);
		})), e.caretPos = D;
	}), e.hook("instead", "moveCaret", (D) => {
		if (!e.isFocused) return;
		let O = e.getLastActive(D);
		if (O) {
			let k = nodeIndex$1(O);
			e.setCaret(D > 0 ? k + 1 : k), e.setActiveItem(), removeClasses(O, "last-active");
		} else e.setCaret(e.caretPos + D);
	});
}
var KEY_ESC = 27, KEY_TAB = 9, preventDefault$1 = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, addEvent$2 = (e, D, O, k) => {
	e.addEventListener(D, O, k);
}, iterate$1 = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, getDom$1 = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString$1(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString$1 = (e) => typeof e == "string" && e.indexOf("<") > -1, addClasses$1 = (e, ...D) => {
	var O = classesArray$1(D);
	e = castAsArray$1(e), e.map((e) => {
		O.map((D) => {
			e.classList.add(D);
		});
	});
}, classesArray$1 = (e) => {
	var D = [];
	return iterate$1(e, (e) => {
		typeof e == "string" && (e = e.trim().split(/[\t\n\f\r\s]/)), Array.isArray(e) && (D = D.concat(e));
	}), D.filter(Boolean);
}, castAsArray$1 = (e) => (Array.isArray(e) || (e = [e]), e);
function plugin$6() {
	let e = this;
	e.settings.shouldOpen = !0, e.hook("before", "setup", () => {
		e.focus_node = e.control, addClasses$1(e.control_input, "dropdown-input");
		let D = getDom$1("<div class=\"dropdown-input-wrap\">");
		D.append(e.control_input), e.dropdown.insertBefore(D, e.dropdown.firstChild);
		let O = getDom$1("<input class=\"items-placeholder\" tabindex=\"-1\" />");
		O.placeholder = e.settings.placeholder || "", e.control.append(O);
	}), e.on("initialize", () => {
		e.control_input.addEventListener("keydown", (D) => {
			switch (D.keyCode) {
				case KEY_ESC:
					e.isOpen && (preventDefault$1(D, !0), e.close()), e.clearActiveItems();
					return;
				case KEY_TAB:
					e.focus_node.tabIndex = -1;
					break;
			}
			return e.onKeyDown.call(e, D);
		}), e.on("blur", () => {
			e.focus_node.tabIndex = e.isDisabled ? -1 : e.tabIndex;
		}), e.on("dropdown_open", () => {
			e.control_input.focus();
		});
		let D = e.onBlur;
		e.hook("instead", "onBlur", (O) => {
			if (!(O && O.relatedTarget == e.control_input)) return D.call(e);
		}), addEvent$2(e.control_input, "blur", () => e.onBlur()), e.hook("before", "close", () => {
			e.isOpen && e.focus_node.focus({ preventScroll: !0 });
		});
	});
}
var addEvent$1 = (e, D, O, k) => {
	e.addEventListener(D, O, k);
};
function plugin$7() {
	var e = this;
	e.on("initialize", () => {
		var D = document.createElement("span"), O = e.control_input;
		D.style.cssText = "position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ", e.wrapper.appendChild(D);
		for (let e of [
			"letterSpacing",
			"fontSize",
			"fontFamily",
			"fontWeight",
			"textTransform"
		]) D.style[e] = O.style[e];
		var k = () => {
			D.textContent = O.value, O.style.width = D.clientWidth + "px";
		};
		k(), e.on("update item_add item_remove", k), addEvent$1(O, "input", k), addEvent$1(O, "keyup", k), addEvent$1(O, "blur", k), addEvent$1(O, "update", k);
	});
}
function plugin$8() {
	var e = this, D = e.deleteSelection;
	this.hook("instead", "deleteSelection", (O) => e.activeItems.length ? D.call(e, O) : !1);
}
function plugin$9() {
	this.hook("instead", "setActiveItem", () => {}), this.hook("instead", "selectAll", () => {});
}
var KEY_LEFT = 37, KEY_RIGHT = 39, parentMatch = (e, D, O) => {
	for (; e && e.matches;) {
		if (e.matches(D)) return e;
		e = e.parentNode;
	}
}, nodeIndex = (e, D) => {
	if (!e) return -1;
	D ||= e.nodeName;
	for (var O = 0; e = e.previousElementSibling;) e.matches(D) && O++;
	return O;
};
function plugin$10() {
	var e = this, D = e.onKeyDown;
	e.hook("instead", "onKeyDown", (O) => {
		var k, A, j, M;
		if (!e.isOpen || !(O.keyCode === KEY_LEFT || O.keyCode === KEY_RIGHT)) return D.call(e, O);
		e.ignoreHover = !0, M = parentMatch(e.activeOption, "[data-group]"), k = nodeIndex(e.activeOption, "[data-selectable]"), M && (M = O.keyCode === KEY_LEFT ? M.previousSibling : M.nextSibling, M && (j = M.querySelectorAll("[data-selectable]"), A = j[Math.min(j.length - 1, k)], A && e.setActiveOption(A)));
	});
}
var escape_html = (e) => (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), preventDefault = (e, D = !1) => {
	e && (e.preventDefault(), D && e.stopPropagation());
}, addEvent = (e, D, O, k) => {
	e.addEventListener(D, O, k);
}, getDom = (e) => {
	if (e.jquery) return e[0];
	if (e instanceof HTMLElement) return e;
	if (isHtmlString(e)) {
		var D = document.createElement("template");
		return D.innerHTML = e.trim(), D.content.firstChild;
	}
	return document.querySelector(e);
}, isHtmlString = (e) => typeof e == "string" && e.indexOf("<") > -1;
function plugin$11(e) {
	let D = Object.assign({
		label: "&times;",
		title: "Remove",
		className: "remove",
		append: !0
	}, e);
	var O = this;
	if (D.append) {
		var k = "<a href=\"javascript:void(0)\" class=\"" + D.className + "\" tabindex=\"-1\" title=\"" + escape_html(D.title) + "\">" + D.label + "</a>";
		O.hook("after", "setupTemplates", () => {
			var e = O.settings.render.item;
			O.settings.render.item = (D, A) => {
				var j = getDom(e.call(O, D, A)), M = getDom(k);
				return j.appendChild(M), addEvent(M, "mousedown", (e) => {
					preventDefault(e, !0);
				}), addEvent(M, "click", (e) => {
					O.isLocked || (preventDefault(e, !0), !O.isLocked && O.shouldDelete([j], e) && (O.removeItem(j), O.refreshOptions(!1), O.inputState()));
				}), j;
			};
		});
	}
}
function plugin$12(e) {
	let D = this, O = Object.assign({ text: (e) => e[D.settings.labelField] }, e);
	D.on("item_remove", function(e) {
		if (D.isFocused && D.control_input.value.trim() === "") {
			var k = D.options[e];
			k && D.setTextboxValue(O.text.call(D, k));
		}
	});
}
var iterate = (e, D) => {
	if (Array.isArray(e)) e.forEach(D);
	else for (var O in e) e.hasOwnProperty(O) && D(e[O], O);
}, addClasses = (e, ...D) => {
	var O = classesArray(D);
	e = castAsArray(e), e.map((e) => {
		O.map((D) => {
			e.classList.add(D);
		});
	});
}, classesArray = (e) => {
	var D = [];
	return iterate(e, (e) => {
		typeof e == "string" && (e = e.trim().split(/[\t\n\f\r\s]/)), Array.isArray(e) && (D = D.concat(e));
	}), D.filter(Boolean);
}, castAsArray = (e) => (Array.isArray(e) || (e = [e]), e);
function plugin$13() {
	let e = this, D = e.canLoad, O = e.clearActiveOption, k = e.loadCallback;
	var A = {}, j, M = !1, N, P = [];
	if (e.settings.shouldLoadMore || (e.settings.shouldLoadMore = () => {
		if (j.clientHeight / (j.scrollHeight - j.scrollTop) > .9) return !0;
		if (e.activeOption) {
			var D = e.selectable();
			if (Array.from(D).indexOf(e.activeOption) >= D.length - 2) return !0;
		}
		return !1;
	}), !e.settings.firstUrl) throw "virtual_scroll plugin requires a firstUrl() method";
	e.settings.sortField = [{ field: "$order" }, { field: "$score" }];
	let F = (D) => typeof e.settings.maxOptions == "number" && j.children.length >= e.settings.maxOptions ? !1 : !!(D in A && A[D]), I = (D, O) => e.items.indexOf(O) >= 0 || P.indexOf(O) >= 0;
	e.setNextUrl = (e, D) => {
		A[e] = D;
	}, e.getUrl = (D) => {
		if (D in A) {
			let e = A[D];
			return A[D] = !1, e;
		}
		return e.clearPagination(), e.settings.firstUrl.call(e, D);
	}, e.clearPagination = () => {
		A = {};
	}, e.hook("instead", "clearActiveOption", () => {
		if (!M) return O.call(e);
	}), e.hook("instead", "canLoad", (O) => O in A ? F(O) : D.call(e, O)), e.hook("instead", "loadCallback", (D, O) => {
		if (!M) e.clearOptions(I);
		else if (N) {
			let O = D[0];
			O !== void 0 && (N.dataset.value = O[e.settings.valueField]);
		}
		k.call(e, D, O), M = !1;
	}), e.hook("after", "refreshOptions", () => {
		let D = e.lastValue;
		var O;
		F(D) ? (O = e.render("loading_more", { query: D }), O && (O.setAttribute("data-selectable", ""), N = O)) : D in A && !j.querySelector(".no-results") && (O = e.render("no_more_results", { query: D })), O && (addClasses(O, e.settings.optionClass), j.append(O));
	}), e.on("initialize", () => {
		P = Object.keys(e.options), j = e.dropdown_content, e.settings.render = Object.assign({}, {
			loading_more: () => "<div class=\"loading-more-results\">Loading more results ... </div>",
			no_more_results: () => "<div class=\"no-more-results\">No more results</div>"
		}, e.settings.render), j.addEventListener("scroll", () => {
			e.settings.shouldLoadMore.call(e) && F(e.lastValue) && (M || (M = !0, e.load.call(e, e.lastValue)));
		});
	});
}
TomSelect.define("change_listener", plugin), TomSelect.define("checkbox_options", plugin$1), TomSelect.define("clear_button", plugin$2), TomSelect.define("drag_drop", plugin$3), TomSelect.define("dropdown_header", plugin$4), TomSelect.define("caret_position", plugin$5), TomSelect.define("dropdown_input", plugin$6), TomSelect.define("input_autogrow", plugin$7), TomSelect.define("no_backspace_delete", plugin$8), TomSelect.define("no_active_items", plugin$9), TomSelect.define("optgroup_columns", plugin$10), TomSelect.define("remove_button", plugin$11), TomSelect.define("restore_on_backspace", plugin$12), TomSelect.define("virtual_scroll", plugin$13);
var tom_select_complete_default = TomSelect;
ComboBox[FILENAME] = "src/components/svelte/combobox/ComboBox.svelte";
var root_1 = add_locations(/* @__PURE__ */ from_html("<option> </option>"), ComboBox[FILENAME], [[31, 3]]), root = add_locations(/* @__PURE__ */ from_html("<div class=\"select-skeleton grid min-h-10 gap-3\"><select autocomplete=\"off\" class=\"rounded-lg\"><option>d</option><!></select></div>"), ComboBox[FILENAME], [[
	27,
	0,
	[[
		28,
		1,
		[[29, 2]]
	]]
]]);
function ComboBox(e, D) {
	check_target(new.target), push(D, !0, ComboBox);
	let O = prop(D, "listIems", 7), k = tag(/* @__PURE__ */ state(""), "comboboxValue");
	function A(e) {
		let D = new tom_select_complete_default(e, {
			create: !1,
			sortField: [{
				field: "text",
				direction: "asc"
			}],
			dropdownContentClass: "combo-box"
		});
		return () => {
			D.destroy();
		};
	}
	var j = {
		get listIems() {
			return O();
		},
		set listIems(e) {
			O(e), flushSync();
		},
		...legacy_api()
	}, M = root(), N = child(M), P = child(N);
	P.value = P.__value = "";
	var F = sibling(P);
	return add_svelte_meta(() => each(F, 17, O, index, (e, D) => {
		var O = root_1(), k = child(O, !0);
		reset(O);
		var A = {};
		template_effect(() => {
			set_text(k, get(D)), A !== (A = get(D)) && (O.value = (O.__value = get(D)) ?? "");
		}), append$1(e, O);
	}), "each", ComboBox, 30, 2), reset(N), attach(N, () => A), reset(M), bind_select_value(N, function() {
		return get(k);
	}, function(e) {
		set(k, e);
	}), append$1(e, M), pop(j);
}
customElements.define("combo-box", create_custom_element(ComboBox, { listIems: {} }, [], [], !1));
