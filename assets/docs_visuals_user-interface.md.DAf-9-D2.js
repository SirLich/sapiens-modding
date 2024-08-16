import{_ as e,c as a,o as t,a4 as i}from"./chunks/framework.qL1yNBZ5.js";const g=JSON.parse('{"title":"User Interface (UI)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/visuals/user-interface.md","filePath":"docs/visuals/user-interface.md","lastUpdated":1715343935000}'),s={name:"docs/visuals/user-interface.md"},n=i('<h1 id="user-interface-ui" tabindex="-1">User Interface (UI) <a class="header-anchor" href="#user-interface-ui" aria-label="Permalink to &quot;User Interface (UI)&quot;">​</a></h1><p>UI in Sapiens is fairly complex, and the extent of it has not been fully documented. Subsequently, we recommend Hammerstone&#39;s UI Manager to ease the burdens of creating UI.</p><div class="tip custom-block"><p class="custom-block-title">Hammerstone Edition™</p><p>We recommend you use Hammerstone for managing UI. You can find the Hammerstone docs <a href="/hammerstone/systems/ui-manager.html">here</a>.</p></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>To get started, you should start with an entry point that contains UI that you can hook into. For example, <code>scripts/mainThread/ui/gameUI</code>.</p><p>Then, you can create a view:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mainView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> View.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gameUI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Every time you create a new View, pass in your parent view as the first argument.</p><p><strong>Note:</strong> <code>View</code> and other kinds of views such as <code>ImageView</code> are not defined in Lua, instead as environment globals. Despite what your IDE may be telling you, it is safe to use them.</p><p>On each view you can set fields such as:</p><ul><li><code>Hidden</code> : <code>bool</code></li><li><code>RelativePosition</code>: <code>ViewPosition</code></li><li><code>size</code> : <code>vec2</code></li><li>...</li></ul><h2 id="ui-types" tabindex="-1">UI Types <a class="header-anchor" href="#ui-types" aria-label="Permalink to &quot;UI Types&quot;">​</a></h2><p>Use the official documentation surrounding the UI types. You can find it <a href="https://github.com/Majic-Jungle/sapiens-mod-creation/wiki/UI-Views" target="_blank" rel="noreferrer">here</a>.</p>',13),o=[n];function r(c,d,l,h,p,u){return t(),a("div",null,o)}const f=e(s,[["render",r]]);export{g as __pageData,f as default};
