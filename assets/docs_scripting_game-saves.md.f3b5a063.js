import{_ as e,o as a,c as t,U as o}from"./chunks/framework.1eef7d9b.js";const _=JSON.parse('{"title":"Game Saves","description":"","frontmatter":{},"headers":[],"relativePath":"docs/scripting/game-saves.md","filePath":"docs/scripting/game-saves.md","lastUpdated":1664143882000}'),s={name:"docs/scripting/game-saves.md"},i=o('<h1 id="game-saves" tabindex="-1">Game Saves <a class="header-anchor" href="#game-saves" aria-label="Permalink to &quot;Game Saves&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend you use Hammerstone for managing state. You can find the Hammerstone docs <a href="/hammerstone/save-state.html">here</a></p></div><h2 id="step-by-step" tabindex="-1">Step by Step <a class="header-anchor" href="#step-by-step" aria-label="Permalink to &quot;Step by Step&quot;">​</a></h2><p>Get bridge from <code>world.lua</code> <code>world:setBridge</code></p><p>Then you can use <code>clientWorldSettingsDatabase = bridge.clientWorldSettingsDatabase</code></p><p>Now methods are:</p><ul><li>clientWorldSettingsDatabase:dataForKey(&quot;hasCheckedForTutorialSkip&quot;)</li><li>clientWorldSettingsDatabase:setDataForKey(true, &quot;hasCheckedForTutorialSkip&quot;)</li></ul><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h2><p>In Sapiens, there are a few different databases, which allow you to store different things.</p><div class="danger custom-block"><p class="custom-block-title">Oh-no!</p><p>This wiki page isn&#39;t done. But you can help! Click the &#39;Edit Page&#39; button at the bottom.</p></div>',10),r=[i];function n(c,l,d,p,h,m){return a(),t("div",null,r)}const b=e(s,[["render",n]]);export{_ as __pageData,b as default};