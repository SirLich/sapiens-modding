import{_ as a,c as t,a2 as i,o as s}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"Hammerstone Data-Driven-API","description":"","frontmatter":{},"headers":[],"relativePath":"hammerstone/ddapi/ddapi-getting-started.md","filePath":"hammerstone/ddapi/ddapi-getting-started.md","lastUpdated":1733695063000}'),n={name:"hammerstone/ddapi/ddapi-getting-started.md"};function o(l,e,r,p,d,h){return s(),t("div",null,e[0]||(e[0]=[i(`<h1 id="hammerstone-data-driven-api" tabindex="-1">Hammerstone Data-Driven-API <a class="header-anchor" href="#hammerstone-data-driven-api" aria-label="Permalink to &quot;Hammerstone Data-Driven-API&quot;">​</a></h1><p>The &#39;DDAPI&#39; is a data-driven API for creating Hammerstone mods: rather than working with the games code directly, you&#39;re instead authoring a &quot;config&quot; format which Hammerstone interprets.</p><h2 id="config-types" tabindex="-1">Config Types <a class="header-anchor" href="#config-types" aria-label="Permalink to &quot;Config Types&quot;">​</a></h2><p>Writing config files can be done in two formats: Lua and JSON. Both are fully supported, yet come with some unique trade-offs. Unless stated otherwise, DDAPI examples use the JSON format.</p><h3 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h3><p>JSON is the default config format, and the first format that Hammerstone supported. All examples will use JSON. JSON is good when you want to do something simple, and want maximum editor help in defining the config files. A json schema is available, so you can get autocomplete in your editor of choice (e.g., VSCode).</p><h3 id="lua" tabindex="-1">Lua <a class="header-anchor" href="#lua" aria-label="Permalink to &quot;Lua&quot;">​</a></h3><p>Lua configs were added later, when it became clear that JSON configs aren&#39;t suitable for all use-cases. Namely, in complex scenarios where you want to write lua code inline as part of the configs. For example, generating multiple items from the same bit of code, or doing some inline maths calculations.</p><p>Lua is best suited when you know what you&#39;re doing, or you&#39;re trying to accomplish something very unique.</p><h2 id="philosophy" tabindex="-1">Philosophy <a class="header-anchor" href="#philosophy" aria-label="Permalink to &quot;Philosophy&quot;">​</a></h2><p>In the base game of Sapiens, the data and logic for a &quot;feature&quot; is often spread across multiple files. For example, to create an apple, you might need the following:</p><ul><li><code>gameObject.lua</code> - Define the apple object</li><li><code>resource.lua</code> - Give it a &#39;resource&#39; definition for storage/crafting</li><li><code>evolvingObject.lua</code> - Allow the apple to &#39;rot&#39; away, or into a rotten variant</li><li><code>storage.lua</code> - Allow the apple to be carried and stored in storage areas</li><li>... and more!</li></ul><p>With Hammerstone, we reverse this relationship. We believe you should be able to define your data in a single place, with a well-defined API. To create an apple in Hammerstone, you would only need to create <code>apple.json</code>.</p><p>Inside this apple file, you define &quot;components&quot; describing the apple. For example, this component allows the apple to &#39;rot&#39; into a rotten apple after some time:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hs_evolving_object&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;min_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;transform_to&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;rotten_apple&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="getting-started-with-ddapi" tabindex="-1">Getting Started with DDAPI <a class="header-anchor" href="#getting-started-with-ddapi" aria-label="Permalink to &quot;Getting Started with DDAPI&quot;">​</a></h1><p>To get started, you need a live copy of Hammerstone, and a text editor like VSCode. Then create a folder structure like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mod-name</span></span>
<span class="line"><span>	modInfo.lua</span></span>
<span class="line"><span>	hammerstone</span></span>
<span class="line"><span>		objects</span></span>
<span class="line"><span>			my_object.json</span></span></code></pre></div><p>Read further in the <a href="./ddapi-objects.html">DDAPI Object Guide</a></p>`,19)]))}const m=a(n,[["render",o]]);export{u as __pageData,m as default};