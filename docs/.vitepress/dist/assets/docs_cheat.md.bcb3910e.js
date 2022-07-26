import{_ as e,c as a,o as t,a as i}from"./app.799f5912.js";var o="/sapiens-modding-wiki/assets/debug_settings.cf068b95.png",s="/sapiens-modding-wiki/assets/debug_display.bb117971.png",n="/sapiens-modding-wiki/assets/context_debug.d36a83c2.png",l="/sapiens-modding-wiki/assets/lua_console.d2aeca48.png",d="/sapiens-modding-wiki/assets/lua_examples.e4f035e5.png";const y=JSON.parse('{"title":"Cheating","description":"","frontmatter":{},"headers":[{"level":2,"title":"Debug Menu","slug":"debug-menu"},{"level":3,"title":"Debug Display","slug":"debug-display"},{"level":3,"title":"Context Aware Debugging","slug":"context-aware-debugging"},{"level":2,"title":"Lua Console","slug":"lua-console"},{"level":2,"title":"Lua Cheats","slug":"lua-cheats"},{"level":3,"title":"Spawn","slug":"spawn"},{"level":3,"title":"Instant Build Mode","slug":"instant-build-mode"}],"relativePath":"docs/cheat.md","lastUpdated":1658674797000}'),c={name:"docs/cheat.md"},r=i('<h1 id="cheating" tabindex="-1">Cheating <a class="header-anchor" href="#cheating" aria-hidden="true">#</a></h1><p>Sapiens contains a few tools to cheat, built automatically into the game. It is unknown if dave will remove these before launch!</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>In latest betas, these cheat tools are not available without modifying the game. Check <code>gameConstants.lua</code>.</p></div><h2 id="debug-menu" tabindex="-1">Debug Menu <a class="header-anchor" href="#debug-menu" aria-hidden="true">#</a></h2><p>To access to the debug menu, you can select it from the settings tab:</p><p><img src="'+o+'" alt=""></p><p>It is suggested that you enabled the debug display checkbox, which will enable two additional displays:</p><h3 id="debug-display" tabindex="-1">Debug Display <a class="header-anchor" href="#debug-display" aria-hidden="true">#</a></h3><p>The debug display shows in the top right corner of your screen, and is similar to the <code>f3</code> tab in games like Minecraft. It will show your FPS, currently queued order totals, among other things.</p><p><img src="'+s+'" alt=""></p><h3 id="context-aware-debugging" tabindex="-1">Context Aware Debugging <a class="header-anchor" href="#context-aware-debugging" aria-hidden="true">#</a></h3><p>The context aware debugger is an odd little &quot;debug&quot; button that will appear in the bottom left corner of your screen. It will allow you to perform a single &quot;debug&quot; action on the currently selected object.</p><p><img src="'+n+'" alt=""></p><p><code>note:</code> The debug button mostly won&#39;t do anything. Only specific contexts have any functionality.</p><h2 id="lua-console" tabindex="-1">Lua Console <a class="header-anchor" href="#lua-console" aria-hidden="true">#</a></h2><p>The Lua console can be summoned by pressing <code>c</code> to summon the chat window, then typing <code>/lua</code> to enter lua mode. This mode essentially allows you to execute lua code, although it does not store state between commands.</p><p>How to open console:</p><p><img src="'+l+'" alt=""></p><p>Some examples:</p><p><img src="'+d+'" alt=""></p><h2 id="lua-cheats" tabindex="-1">Lua Cheats <a class="header-anchor" href="#lua-cheats" aria-hidden="true">#</a></h2><p>Once in lua mode, there are a few useful functions you might want to call:</p><h3 id="spawn" tabindex="-1">Spawn <a class="header-anchor" href="#spawn" aria-hidden="true">#</a></h3><ul><li>Format: <code>spawn(object_id)</code></li><li>Example: <code>spawn(&#39;mammoth&#39;)</code></li><li>Description: Spawns the object if it exists, and places it at your feet.</li></ul><h3 id="instant-build-mode" tabindex="-1">Instant Build Mode <a class="header-anchor" href="#instant-build-mode" aria-hidden="true">#</a></h3><ul><li>Format: <code>completeCheat()</code></li><li>Description: Enables instant build mode.</li></ul>',26),u=[r];function h(p,g,m,b,_,w){return t(),a("div",null,u)}var x=e(c,[["render",h]]);export{y as __pageData,x as default};
