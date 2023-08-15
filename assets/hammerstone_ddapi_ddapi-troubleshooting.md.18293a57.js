import{_ as e,o as a,c as t,U as o}from"./chunks/framework.1eef7d9b.js";const m=JSON.parse('{"title":"Troubleshooting the DDAPI","description":"","frontmatter":{},"headers":[],"relativePath":"hammerstone/ddapi/ddapi-troubleshooting.md","filePath":"hammerstone/ddapi/ddapi-troubleshooting.md","lastUpdated":1691841594000}'),i={name:"hammerstone/ddapi/ddapi-troubleshooting.md"},n=o('<h1 id="troubleshooting-the-ddapi" tabindex="-1">Troubleshooting the DDAPI <a class="header-anchor" href="#troubleshooting-the-ddapi" aria-label="Permalink to &quot;Troubleshooting the DDAPI&quot;">​</a></h1><p>Modding in Sapiens is error prone, and although Hammerstone improves this in some ways, in other ways it can add more confusion. Also, the DDAPI opens the doors to additional bugs to sneak in! This section will explain some common issues and their solutions. Happy modding!</p><h2 id="debug-boolean" tabindex="-1">Debug Boolean <a class="header-anchor" href="#debug-boolean" aria-label="Permalink to &quot;Debug Boolean&quot;">​</a></h2><p>Simply set <code>&quot;debug&quot;: true</code> at the top of your JSON file (per config, not fully standardized), and Hammerstone will print additional information about the object.</p><h2 id="problems" tabindex="-1">Problems <a class="header-anchor" href="#problems" aria-label="Permalink to &quot;Problems&quot;">​</a></h2><p>A list of problems, and solutions</p><h3 id="buildable-doesn-t-start-building" tabindex="-1">Buildable Doesn&#39;t start Building <a class="header-anchor" href="#buildable-doesn-t-start-building" aria-label="Permalink to &quot;Buildable Doesn&#39;t start Building&quot;">​</a></h3><p>If you notice that sapiens will gather the resources for a buildable but not start building it, this could be caused by the &quot;requirements&quot; being ill-matched. For example the &#39;tool&#39; or &#39;skill&#39; being defined in a weird or unexpected way.</p><h3 id="buildable-doesn-t-complete" tabindex="-1">Buildable Doesn&#39;t Complete <a class="header-anchor" href="#buildable-doesn-t-complete" aria-label="Permalink to &quot;Buildable Doesn&#39;t Complete&quot;">​</a></h3><p>If the buildable is finished, but never &quot;completed&quot;, this could be caused by an incorrect &#39;action_sequence&#39;. For example the sequence created from <code>createStandardBuildSequence</code> doesn&#39;t work for buildables.</p><h3 id="object-crashes-when-i-click-on-it" tabindex="-1">Object Crashes when I Click On It <a class="header-anchor" href="#object-crashes-when-i-click-on-it" aria-label="Permalink to &quot;Object Crashes when I Click On It&quot;">​</a></h3><p>Objects in Sapiens need the &quot;plans&quot; to be added. Resources have their own plans. Harvestables have their own plans. You can also add custom plans. But if you don&#39;t do any of this, the object will crash when you click on it.</p><h3 id="object-crashes-when-a-sapien-picks-it-up" tabindex="-1">Object Crashes when a Sapien Picks it Up <a class="header-anchor" href="#object-crashes-when-a-sapien-picks-it-up" aria-label="Permalink to &quot;Object Crashes when a Sapien Picks it Up&quot;">​</a></h3><p>Probably a storage issue</p>',14),s=[n];function l(r,d,h,c,u,b){return a(),t("div",null,s)}const f=e(i,[["render",l]]);export{m as __pageData,f as default};
