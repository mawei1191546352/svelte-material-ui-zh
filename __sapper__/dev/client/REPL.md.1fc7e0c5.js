import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as element, t as text, o as space, x as claim_element, y as children, z as claim_text, u as detach_dev, w as claim_space, E as attr_dev, D as add_location, F as insert_dev, G as append_dev, O as noop, q as create_component, r as query_selector_all, A as claim_component, H as mount_component, J as transition_in, K as transition_out, M as destroy_component } from './client.ec94238b.js';

/* REPL.md generated by Svelte v3.37.0 */

const file$1 = "REPL.md";

function create_fragment$1(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let a;
	let t3;
	let t4;
	let t5;
	let p1;
	let t6;
	let code0;
	let t7;
	let t8;
	let t9;
	let pre0;

	let raw0_value = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Fonts --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/icon?family=Material+Icons<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>

  <span class="token comment">&lt;!-- Material Typography --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.css<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>

  <span class="token comment">&lt;!-- SMUI --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/svelte-material-ui/bare.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span></code>` + "";

	let t10;
	let p2;
	let t11;
	let code1;
	let t12;
	let t13;
	let t14;
	let pre1;

	let raw1_value = `<code class="language-svelte">&lt;Button on:click=&#123;() => alert('See, I told you.')&#125;>This is a button!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 2em auto<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdc-typography--body2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is a card!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@smui/button'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Card<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> Content <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@smui/card'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>` + "";

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Using SMUI in the Svelte REPL");
			t1 = space();
			p0 = element("p");
			t2 = text("Check out an ");
			a = element("a");
			t3 = text("example REPL");
			t4 = text(".");
			t5 = space();
			p1 = element("p");
			t6 = text("SMUI components provide “bare.css” files to use in the REPL. In a ");
			code0 = element("code");
			t7 = text("<svelte:head>");
			t8 = text(" section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for SMUI:");
			t9 = space();
			pre0 = element("pre");
			t10 = space();
			p2 = element("p");
			t11 = text("Now load the Components, from within a ");
			code1 = element("code");
			t12 = text("<script>");
			t13 = text(" section, and you can use them:");
			t14 = space();
			pre1 = element("pre");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { id: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Using SMUI in the Svelte REPL");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Check out an ");
			a = claim_element(p0_nodes, "A", { href: true, rel: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "example REPL");
			a_nodes.forEach(detach_dev);
			t4 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "SMUI components provide “bare.css” files to use in the REPL. In a ");
			code0 = claim_element(p1_nodes, "CODE", {});
			var code0_nodes = children(code0);
			t7 = claim_text(code0_nodes, "<svelte:head>");
			code0_nodes.forEach(detach_dev);
			t8 = claim_text(p1_nodes, " section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for SMUI:");
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			pre0 = claim_element(nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			pre0_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t11 = claim_text(p2_nodes, "Now load the Components, from within a ");
			code1 = claim_element(p2_nodes, "CODE", {});
			var code1_nodes = children(code1);
			t12 = claim_text(code1_nodes, "<script>");
			code1_nodes.forEach(detach_dev);
			t13 = claim_text(p2_nodes, " section, and you can use them:");
			p2_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			pre1 = claim_element(nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			pre1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "id", "using-smui-in-the-svelte-repl");
			add_location(h1, file$1, 1, 0, 1);
			attr_dev(a, "href", "https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a?version=3.37.0");
			attr_dev(a, "rel", "nofollow");
			add_location(a, file$1, 2, 16, 91);
			add_location(p0, file$1, 2, 0, 75);
			add_location(code0, file$1, 6, 69, 284);
			add_location(p1, file$1, 6, 0, 215);
			attr_dev(pre0, "class", "language-svelte");
			add_location(pre0, file$1, 7, 0, 425);
			add_location(code1, file$1, 27, 42, 3731);
			add_location(p2, file$1, 27, 0, 3689);
			attr_dev(pre1, "class", "language-svelte");
			add_location(pre1, file$1, 28, 0, 3794);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			append_dev(p0, a);
			append_dev(a, t3);
			append_dev(p0, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t6);
			append_dev(p1, code0);
			append_dev(code0, t7);
			append_dev(p1, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert_dev(target, t10, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t11);
			append_dev(p2, code1);
			append_dev(code1, t12);
			append_dev(p2, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(pre0);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(pre1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("REPL", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<REPL> was created with unknown prop '${key}'`);
	});

	return [];
}

class REPL extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "REPL",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/REPL.md.svelte generated by Svelte v3.37.0 */
const file = "src/routes/REPL.md.svelte";

function create_fragment(ctx) {
	let t;
	let section;
	let repl;
	let current;
	repl = new REPL({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			section = element("section");
			create_component(repl.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-cit14p\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(repl.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "REPL - SMUI";
			attr_dev(section, "class", "markdown");
			add_location(section, file, 4, 0, 59);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, section, anchor);
			mount_component(repl, section, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(repl.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(repl.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(section);
			destroy_component(repl);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("REPL_md", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<REPL_md> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Repl: REPL });
	return [];
}

class REPL_md extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "REPL_md",
			options,
			id: create_fragment.name
		});
	}
}

export default REPL_md;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUkVQTC5tZC4xZmM3ZTBjNS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9