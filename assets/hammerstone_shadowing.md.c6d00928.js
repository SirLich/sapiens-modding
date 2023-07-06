import{_ as s,o as a,c as n,U as l}from"./chunks/framework.82cf92f3.js";const C=JSON.parse('{"title":"Shadowing with Hammerstone","description":"","frontmatter":{},"headers":[],"relativePath":"hammerstone/shadowing.md","filePath":"hammerstone/shadowing.md","lastUpdated":1688236295000}'),o={name:"hammerstone/shadowing.md"},e=l(`<h1 id="shadowing-with-hammerstone" tabindex="-1">Shadowing with Hammerstone <a class="header-anchor" href="#shadowing-with-hammerstone" aria-label="Permalink to &quot;Shadowing with Hammerstone&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This page builds upon the explanation inside of the base-game <a href="/guide/shadowing.html">shadowing explanation</a>.</p></div><p>&#39;Shadowing&#39; is what allows us to hook our logic into sapiens. This page introduces something called the &#39;shadowing utility&#39; which makes this job easier, by introducing a simpler syntax.</p><h3 id="normal-shadowing" tabindex="-1">Normal Shadowing <a class="header-anchor" href="#normal-shadowing" aria-label="Permalink to &quot;Normal Shadowing&quot;">​</a></h3><p>In the base game, shadowing is implemented by calling a special function called <code>onload</code>, with a single param, representing the original base game module. This module can be used to &#39;hook&#39; or override functions, change local state, etc.</p><details class="details custom-block"><summary>&#39;Normal Shadowing&#39; example, for reference.</summary><p>Here is an example, which shows:</p><ul><li>Injecting a variable (greet)</li><li>Shadowing a function (setMapMode)</li><li>Injecting a new function (newFunction)</li></ul><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> mod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {loadOrder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Define a new function.</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New Function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mod</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">localPlayer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">-- localPlayer variable refers to the </span></span>
<span class="line"><span style="color:#A6ACCD;">	localPlayer.</span><span style="color:#FFCB6B;">greet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot;         </span><span style="color:#676E95;font-style:italic;">-- Define a new &#39;greet&#39; variable on the module</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Onload Called</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	super_setMapMode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> localPlayer.</span><span style="color:#FFCB6B;">setMapMode</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- Save the original &#39;setMapMode&#39; function to a local var (the &quot;super&quot;), so we can re-call it layer</span></span>
<span class="line"><span style="color:#A6ACCD;">	localPlayer.</span><span style="color:#82AAFF;">setMapMode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">newMapModeOrNil</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">shouldSnap</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Before setMapMode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">super_setMapMode</span><span style="color:#A6ACCD;">(newMapModeOrNil, shouldSnap) </span><span style="color:#676E95;font-style:italic;">-- Call the super, so that the base game logic continues to be called.</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">After setMapMode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	localPlayer.</span><span style="color:#FFCB6B;">newFunction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> newFunction </span><span style="color:#676E95;font-style:italic;">-- Remap the local &#39;newFunction&#39; so that it&#39;s available on the \`localPlayer\` module.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> mod</span></span></code></pre></div><p>As you can see, once you have access to the <code>localPlayer</code> module you have a <em>lot of freedom</em> to update and change it&#39;s behavior -it&#39;s just a bit finicky.</p></details><h3 id="shadowing-utility" tabindex="-1">Shadowing Utility <a class="header-anchor" href="#shadowing-utility" aria-label="Permalink to &quot;Shadowing Utility&quot;">​</a></h3><p>While the &#39;onload&#39; based syntax from above is very powerful, it can be a bit annoying to write. A &#39;shadow&#39; file tends to look very different than a base game file which can make it harder to read and understand.</p><p>Hammerstone solves this with something called the <em>shadowing utility</em> which you can import like so:</p><ul><li><code>mjrequire &quot;hammerstone/utils/shadow&quot;</code></li></ul><p>Once you&#39;ve imported this module, you have access to the <code>shadow:shadow</code> function, which takes in a lua module, and re-configures it as a valid shadow. This is a <em>transformation</em> step, and allows you to author a normal lua file, without defining <code>onload</code>.</p><p>Here is the same example from above, rewritten using this utility:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- Include the shadowing utility</span></span>
<span class="line"><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hammerstone/utils/shadow</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Start by defining a module matching the name of the shadowed module. No more need for &#39;mod&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> localPlayer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">	greet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot; </span><span style="color:#676E95;font-style:italic;">-- The public state you define here will also be available on the parent module</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- &#39;preload&#39; amd &#39;postload&#39; are called automatically when the file is first required. It&#39;s equivalent to placing code directly into &#39;onload&#39;, as you can see above.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">localPlayer</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">preload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">parent</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Onload Called</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- To shadow a function, just define it. The only different is the first argument should always be called &#39;super&#39;, and represents</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- the original function (which you should probably call).</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">localPlayer</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">setMapMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">super</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">newMapModeOrNil</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">shouldSnap</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Before setMapMode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">super</span><span style="color:#A6ACCD;">(newMapModeOrNil, shouldSnap)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">After setMapMode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- Public non-shadow functions that you define will automatically be available on the base game module.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">localPlayer</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">newFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New Function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- This line does all the work for you. It will convert the current \`localPlayer\` module, into a module matching the format of Sapiens.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">shadow</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">shadow</span><span style="color:#A6ACCD;">(localPlayer)</span></span></code></pre></div><p>In case this example wasn&#39;t clear, what&#39;s happening here is that <code>shadow:shadow</code> performs a <em>transformation</em> on your code, taking a straight-forward lua file, and re-configuring it under the hood to use the <code>mod:onload</code> syntax.</p><p>So, in a nutshell, <code>shadow:shadow</code> defines <code>mod:onload</code>, and runs the following logic inside of it:</p><ul><li>Copies local variables from the shadow module into the parent module (i.e., greet)</li><li>Iterates over the functions in the parent module, and checks the shadow for functions with the same name. If they exist, shadow them automatically.</li><li>Takes any remaining functions in the shadow, and copies them into the parent (i.e., newFunction)</li></ul><h3 id="style-suggestion" tabindex="-1">Style Suggestion <a class="header-anchor" href="#style-suggestion" aria-label="Permalink to &quot;Style Suggestion&quot;">​</a></h3><p>To make it easier to understand shadows, I suggest two style tips:</p><ol><li>Always call the first argument of a shadowed function <code>super</code></li><li>Use the @shadow annotation comment</li></ol><p>Example:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--- @shadow</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">localPlayer</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">setMapMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">super</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">newMapModeOrNil</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">shouldSnap</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><h3 id="debugging-tip" tabindex="-1">Debugging Tip <a class="header-anchor" href="#debugging-tip" aria-label="Permalink to &quot;Debugging Tip&quot;">​</a></h3><p>To debug the shadowing module, you can always print out the resulting module:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> debugLocalPlayer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">shadow</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">shadow</span><span style="color:#A6ACCD;">(localPlayer)</span></span>
<span class="line"><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(debugLocalPlayer)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> debugLocalPlayer</span></span></code></pre></div><h3 id="common-issue" tabindex="-1">Common Issue <a class="header-anchor" href="#common-issue" aria-label="Permalink to &quot;Common Issue&quot;">​</a></h3><p>One last thing to note, is <code>self</code> vs. the module name.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In short: Use <code>self</code> inside of shadowed functions to gain a reference to the true parent module. Using the module name will just give you a copy of the current file, which isn&#39;t what you want.</p><p>If this is confusing for you, try printing out <code>self</code> and <code>localPlayer</code> to see the difference.</p></div><p>Imagine you&#39;re shadowing a fake file called &#39;birdBath.lua&#39;</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">birdBath</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">fillWithWater</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">super</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">liters</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><p>Inside of this function, it&#39;s very natural that you want to access the &#39;birdBath&#39; module, to access the internal state. For example:</p><p><strong>WRONG</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">birdBath</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">fillWithWater</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">super</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">liters</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">super</span><span style="color:#A6ACCD;">(liters)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New Water Level: </span><span style="color:#89DDFF;">&quot; </span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;"> birdBath.</span><span style="color:#FFCB6B;">waterLevel</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><p>As you might have noticed, using <code>birdBath</code> to refer to the module is WRONG. At this point, <code>birdBath</code> will refer to the <em>current file</em>, not the actual birdBath module (the base game module, containing water level information).</p><p><strong>RIGHT</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">birdBath</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">fillWithWater</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">super</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">liters</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">super</span><span style="color:#A6ACCD;">(liters)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">mj</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New Water Level: </span><span style="color:#89DDFF;">&quot; </span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;"> self.</span><span style="color:#FFCB6B;">waterLevel</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><p>The correct way to refer to the actual <code>birdBath</code> module is using the <code>self</code> variable, which is special in lua, and contains the parent module. Once the <code>shadow:shadow</code> nonsense is finished, the shadowed function will exist in <code>birdBath</code>, meaning that <code>self</code> correctly refers to the <em>parent</em> module, not the current module.</p>`,36),t=[e];function p(c,i,r,y,d,D){return a(),n("div",null,t)}const F=s(o,[["render",p]]);export{C as __pageData,F as default};