import{_ as s,c as n,o as a,a as l}from"./app.799f5912.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Bootstrapping","slug":"bootstrapping"},{"level":2,"title":"Components","slug":"components"}],"relativePath":"hammerstone/getting-started.md","lastUpdated":1655817382000}'),e={name:"hammerstone/getting-started.md"},o=l(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="bootstrapping" tabindex="-1">Bootstrapping <a class="header-anchor" href="#bootstrapping" aria-hidden="true">#</a></h2><p>Bootstrap is particularly important with Hammerstone as without it, Hammerstone has no idea that your mod actually exists. The recommended way of bootstrapping is <a href="/sapiens-modding-wiki/guide/shadowing.html">shadowing</a> <code>controller.lua</code>, then adding your init function to the init event, like this:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">-- Using the Hammerstone Framework</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> mod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">	loadOrder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">-- Can be anything less than 999</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> eventManager </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hammerstone/event/eventManager</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> eventTypes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hammerstone/event/eventTypes</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mod</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> exampleMod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exampleMod/exampleMod</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">eventManager</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(eventTypes.init, exampleMod.init)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> mod</span></span>
<span class="line"></span></code></pre></div><p>This format of bootstrapping is particularly good, as it keeps the shadowed file to a minimum. In <code>exampleMod/exampleMod.lua</code>, you would have something like this:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">--- Mod entry point for exampleMod</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Module setup</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> exampleMod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Includes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">(Add includes here)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- exampleMod entrypoint, called by shadowing &#39;controller.lua&#39; in the main thread.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">exampleMod</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Initializing Example Mod...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	(Add initalisation code here)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example Mod Initialized.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Module return</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> exampleMod</span></span>
<span class="line"></span></code></pre></div><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><p>Get started with logging with <a href="./logger.html">Logger</a>.</p><p>Get started with UI with <a href="./ui-manager.html">UI Manager</a>.</p><p>Get started with input with <a href="./input-manager.html">Input Manager</a></p>`,10),p=[o];function t(r,c,i,y,D,d){return a(),n("div",null,p)}var F=s(e,[["render",t]]);export{C as __pageData,F as default};
