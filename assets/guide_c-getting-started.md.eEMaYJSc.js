import{_ as e,c as i,o as a,a4 as t}from"./chunks/framework.qL1yNBZ5.js";const s="/assets/visual-studio-retarget-solution.CCxW5Vx4.png",o="/assets/visual-studio-build-menu.DsR9uvXY.png",n="/assets/cmake-gui.BUhwo2_j.png",l="/assets/clion-open-project-wizard.oroDQaWf.png",b=JSON.parse('{"title":"Getting Started with C/C++","description":"","frontmatter":{},"headers":[],"relativePath":"guide/c-getting-started.md","filePath":"guide/c-getting-started.md","lastUpdated":1714790475000}'),r={name:"guide/c-getting-started.md"},h=t('<h1 id="getting-started-with-c-c" tabindex="-1">Getting Started with C/C++ <a class="header-anchor" href="#getting-started-with-c-c" aria-label="Permalink to &quot;Getting Started with C/C++&quot;">​</a></h1><p>Certain tasks are too performance intensive to implement in Lua, these tasks are implemented in C. Currently the following tasks are done in C:</p><ul><li>Vertex Terrain Generation</li><li>Biome and Climate assignment</li><li>Particles</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is considered an advanced topic. If you&#39;re new, try <a href="/guide/lua-getting-started.html">Getting Started with Lua</a></p></div><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></li><li><a href="https://visualstudio.microsoft.com/" target="_blank" rel="noreferrer">Visual Studio 2017</a> or later Desktop development with C++ <ul><li>When using a different IDE than Visual Studio for development only the <a href="https://visualstudio.microsoft.com/downloads/?q=build+tools" target="_blank" rel="noreferrer">build tools</a> is enough.</li></ul></li><li><a href="https://cmake.org/" target="_blank" rel="noreferrer">CMake</a> if using the template, or an IDE that has CMake bundled like <a href="https://www.jetbrains.com/clion/" target="_blank" rel="noreferrer">CLion</a></li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>C Mods have a file structure very familiar to normal Lua mods. The root folder contains a <code>modInfo.lua</code> file, exactly like a normal Lua mod. For more information on this check out the <a href="/guide/lua-getting-started.html">Getting Started with Lua</a> page. Additionally the root folder contains a <code>lib</code> folder. This lib folder contains library files which the game will load. On windows these library files have the <code>.dll</code> extension.</p><p>The easiest way to get started is by cloning either the <a href="https://github.com/Majic-Jungle/sapiens-mod-creation/" target="_blank" rel="noreferrer">official example repository</a> or the <a href="https://github.com/suppergerrie2/SapiensCModTemplate" target="_blank" rel="noreferrer">template made by suppergerrie2</a>. The template has the benefit of being a clean setup without the other Lua mod examples, and does not require Visual Studio, allowing you to program on Linux. Note that both repositories need to be cloned with the <code>--recurse-submodules</code>.</p><h2 id="official-repository" tabindex="-1">Official repository <a class="header-anchor" href="#official-repository" aria-label="Permalink to &quot;Official repository&quot;">​</a></h2><p>The official example repository contains an example C Mod that can be found in <code>Examples\\src\\FlatTerrain</code>. The <code>Windows\\FlatTerrainMod.sln</code> can be opened in Visual Studio. When opening the project it may ask to be updated to the latest version, let it do that. If it doesn&#39;t ask it and building fails with <code>The build tools for Visual Studio 2017 (Platform Toolset = &#39;v141&#39;) cannot be found</code> you can manually upgrade the project by right clicking the solution and clicking <code>Retarget solution</code>. <img src="'+s+'" alt=""> the mod can be compiled by <code>Build -&gt; Build FlatTerrainMod</code>. This will generate a <code>dll</code> file in <code>Windows\\Build\\</code>. This <code>dll</code> file should be moved into your mod&#39;s <code>lib</code> folder. <img src="'+o+`" alt=""></p><h2 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h2><p>If using the template the project can be opened using any IDE that supports CMake, or compiled manually from the command line. The template will combine the <code>modInfo.lua</code> and create the <code>lib</code> folder for you, the resulting folder can be found in the build folder and is named based on the <code>mod id</code> configured at the start.</p><p>The template is setup as a GitHub template, thus it can be easily used to create your own GitHub repository by going to the <a href="https://github.com/suppergerrie2/SapiensCModTemplate" target="_blank" rel="noreferrer">repository</a> and pressing <code>Use this template</code>. This will then ask you to enter the name of your mod and whether it should be public or private and then create the GitHub repository. Copy the Git URL by pressing <code>Code =&gt; Local</code> and then copying the URL.</p><h3 id="for-linux-developers" tabindex="-1">For Linux developers <a class="header-anchor" href="#for-linux-developers" aria-label="Permalink to &quot;For Linux developers&quot;">​</a></h3><p>Append <code>NO_CMAKE_FIND_ROOT_PATH</code> to the end of the arguments list of <code>find_library</code> in <code>CMakeLists.txt</code>.</p><h3 id="command-line-setup" tabindex="-1">Command line setup <a class="header-anchor" href="#command-line-setup" aria-label="Permalink to &quot;Command line setup&quot;">​</a></h3><p>First the repository needs to be cloned.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recurse-submodules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [your </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL]</span></span></code></pre></div><p>Then configure the CMake project</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Your </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DMOD_ID=MyCMod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DMOD_NAME=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;My C Mod&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DDESCRIPTION=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;An amazing mod that does things in C&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DDEVELOPER=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Me!&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DDEVELOPER_URL=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.com&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DPREVIEW_FILE=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preview.png&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DMOD_MAJOR_VERSION=1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DMOD_MINOR_VERSION=2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DMOD_PATCH_VERSION=3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>For Linux developers, swap <code>cmake</code> with <code>x86_64-w64-mingw32-cmake</code>.</p><p>Don&#39;t be afraid of the long line, it&#39;s defining a lot of values you should change yourself. The version is combined as <code>major.minor.patch</code>.</p><details class="details custom-block"><summary>CMake gui</summary><p>You can also configure the project using <code>cmake-gui</code> which comes shipped with CMake by default!</p><p>Select the folder where you cloned to and create a folder where to build to (<code>build</code> in the screenshot below), then press configure. <img src="`+n+`" alt=""></p><p>In the window that opens select the Visual Studio version you installed and press <code>Finish</code>. After this all settings show up in a nice gui!</p></details><p>After this you can build the mod.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>You can then find the build mod in <code>build/[MOD ID]</code>, it should contain one file and one folder.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     Directory: MyCMod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uild</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yCMod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Mode                 LastWriteTime         Length Name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ----                 -------------         ------ ----</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d----          19/08/2022    16:53                lib</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -a---          19/08/2022    14:46            300 modInfo.lua</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     Directory: MyCMod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uild</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yCMod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ib</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Mode                 LastWriteTime         Length Name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ----                 -------------         ------ ----</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -a---          19/08/2022    16:53          52224 MyCMod.dll</span></span></code></pre></div><h3 id="clion-setup" tabindex="-1">CLion Setup <a class="header-anchor" href="#clion-setup" aria-label="Permalink to &quot;CLion Setup&quot;">​</a></h3><p>Create a new project from version control by selecting <code>File =&gt; New =&gt; Project from Version Control</code>, in the UI that pops up enter your Git URL. Select where to clone to and press <code>Clone</code>.</p><details class="details custom-block"><summary>GitHub Authentication</summary><p>CLion may ask you to authenticate with GitHub, press <code>Login</code> and follow the instructions to authenticate with GitHub</p></details><p>After cloning finishes a window pops up asking for configuration. <img src="`+l+'" alt=""> In the <code>Toolchain</code> make sure it uses <code>Visual Studio</code>, if <code>Visual Studio</code> is not available press <code>Manage toolchains</code> and add a <code>Visual Studio</code> toolchain.</p><p>Press <code>Ok</code> to continue.</p><p>Now it&#39;s time to configure all settings. Open the <code>CMake</code> tab at the bottom, press the small gear at the left of the tab and open <code>CMake Settings</code>. In the tab that opens you can configure the <code>Cache variables</code> by opening the <code>Cache variables</code> dropdown if it&#39;s not opened by default. Change the values to match your mod (Name, Description, etc.) and press <code>Apply</code>.</p><p>You can now build your mod by pressing the green hammer at the top. By default CLion uses the <code>cmake-build-debug</code> folder, in here a folder with as name your chosen Mod ID will be created which you can copy over to the game&#39;s mod folder (or create a symlink to).</p><h2 id="spvanilla" tabindex="-1">SPVanilla <a class="header-anchor" href="#spvanilla" aria-label="Permalink to &quot;SPVanilla&quot;">​</a></h2><p>The <a href="https://github.com/Majic-Jungle/splugins/tree/main/SPVanilla" target="_blank" rel="noreferrer">splugins</a> repository contains the vanilla code, this can be used as a reference when working on your own mod.</p><h2 id="symlinks" tabindex="-1">Symlinks <a class="header-anchor" href="#symlinks" aria-label="Permalink to &quot;Symlinks&quot;">​</a></h2><p>A symlink to your mod can be made for easy development, making it so you do not have to manually copy the folder to the game&#39;s mods folder every time you compile. The template can setup this symlink automatically, to do this the project should be configured with <code>AUTO_GENERATE_SAPIENS_MOD_SYMLINK</code> set to <code>ON</code> and with admin permissions. The symlink can also be manually made by running <code>ni [YOUR MOD NAME] -i SymbolicLink -ta [PATH TO WHERE YOUR MOD COMPILES TO]</code> in a powershell instance with admin privileges.</p><h2 id="common-mistakes" tabindex="-1">Common mistakes <a class="header-anchor" href="#common-mistakes" aria-label="Permalink to &quot;Common mistakes&quot;">​</a></h2><p>Some mistakes are easy to make, here is a list of mistakes that are commonly made and their fixes.</p><h3 id="wrong-folder-name" tabindex="-1">Wrong folder name <a class="header-anchor" href="#wrong-folder-name" aria-label="Permalink to &quot;Wrong folder name&quot;">​</a></h3><p>The folder in the root folder should be named <code>lib</code> and not <code>libs</code>, if it&#39;s the wrong name the game will not load anything nor throw an error.</p><h3 id="file-in-use-or-cannot-open-file-your-dll" tabindex="-1"><code>File in use</code> or <code>Cannot open file [your.dll]</code> <a class="header-anchor" href="#file-in-use-or-cannot-open-file-your-dll" aria-label="Permalink to &quot;`File in use` or `Cannot open file [your.dll]`&quot;">​</a></h3><p>When the game has loaded the mod it will keep it loaded in memory until the game is closed, this means that after testing the mod you always need to fully close the game before you can recompile or overwrite the dll. Just closing the world or going back to the main screen is not enough. Even unchecking the mod in the mods selector is not enough.</p>',45),d=[h];function p(c,k,u,g,m,y){return a(),i("div",null,d)}const C=e(r,[["render",p]]);export{b as __pageData,C as default};