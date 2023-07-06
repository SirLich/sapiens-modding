import{_ as e,o as t,c as o,U as a}from"./chunks/framework.82cf92f3.js";const i="/assets/instruction_1.88c709e3.png",s="/assets/instruction_2.4a8dd7fa.png",l="/assets/instruction_3.8ebbb3a1.png",n="/assets/instruction_4.c8ae9544.png",b=JSON.parse('{"title":"Getting Started in VSCode","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vscode-getting-started.md","filePath":"guide/vscode-getting-started.md","lastUpdated":1688603644000}'),r={name:"guide/vscode-getting-started.md"},d=a('<h1 id="getting-started-in-vscode" tabindex="-1">Getting Started in VSCode <a class="header-anchor" href="#getting-started-in-vscode" aria-label="Permalink to &quot;Getting Started in VSCode&quot;">​</a></h1><p>A Sapiens VSCode extension is at your disposal in the VSCode extension market that sets up a project for you to write Lua, C (a combination of both) and localization mods with. It uses the wonderful <a href="https://github.com/Sapiens-OSS/sapiens-cmake-template" target="_blank" rel="noreferrer">Sapiens cmake template by suppergerrie2</a>.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>The VSCode extension and cmake template have been tested on Windows and Linux.</p><p>Please ensure you have the following installed on your system:</p><ul><li><a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></li><li><a href="https://cmake.org/" target="_blank" rel="noreferrer">CMake</a><ul><li><strong>Windows</strong> users should additionally install <a href="https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019" target="_blank" rel="noreferrer">Visual C++ Build Tools</a></li><li><strong>Linux</strong> users should additionally install <a href="https://aur.archlinux.org/packages/mingw-w64-cmake" target="_blank" rel="noreferrer">x86_64-w64-mingw32-cmake</a></li></ul></li><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=Sapiens-OSS.sapiens-vscode-extension" target="_blank" rel="noreferrer">Sapiens VSCode Extension</a></li></ul><p>Ensure that <code>steam</code> is a recognized command on your system. If not, edit your PATH system environment variable to point to your Steam binary.</p><ul><li>On <strong>Windows</strong>, your Steam binary is likely located at <code>C:\\Program Files (x86)</code>, which is not by default in your PATH.</li></ul><p>Please take note of your Sapiens installation&#39;s mod directory:</p><ul><li>For <strong>Windows</strong> users, this is by default installed at <code>%AppData%\\majicjungle\\sapiens\\mods</code>.</li><li>For <strong>Linux</strong> users, you will need to: <ol><li>Open Steam.</li><li>Go to Sapiens.</li><li>Click on the gear on the right &gt; Properties...</li><li>Click on local files &gt; Browse...</li><li>You are now on the path where Sapiens files are located.</li><li>Navigate further to <code>../../compatdata/1060230/pfx/drive_c/users/steamuser/AppData/Roaming/majicjungle/sapiens/mods/</code>.</li><li>Take note of the <code>mods</code> folder&#39;s absolute path.</li></ol></li></ul><p>(Optional) Please also take note of your <code>GameResources</code> folder:</p><ol><li>Open Steam.</li><li>Go to Sapiens.</li><li>Click on the gear on the right &gt; Properties...</li><li>Click on local files &gt; Browse...</li><li>You are now on the path where Sapiens files are located.</li><li>Navigate further to <code>GameResources/</code>.</li><li>Take note of the <code>GameResources</code> folder&#39;s absolute path.</li></ol><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><ol><li>Install the Sapiens Modding extension for VSCode in the VSCode marketplace. <img src="'+i+'" alt=""></li><li>Open your VSCode settings, and search for <code>modPath</code>. Enter the path to the Sapiens mod folder as you have noted it down in the prerequisite step. <img src="'+s+'" alt=""></li><li>(Optional) Search for <code>gameResourcesPath</code> in your VSCode settings. Enter the path to the Sapiens GameResources folder as your have noted it down in the prerequisite step. <img src="'+l+'" alt=""></li><li>Search using Ctrl+Shift+P for &#39;newProject&#39;. An option to create a new Sapiens mod project will appear. <img src="'+n+'" alt=""></li><li>Follow the guide that shows up <ol><li>Enter the directory in which a new directory will be created that contains the project.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This should not be the folder in which you want your project files to be put in. The extension will create a folder in the provided folder in which all project files will appear.</p></div><ol start="2"><li>Enter the name of your mod. This is a string in which you are free to type in anything. The string gets converted into a valid cmake ID and folder name, which will be used as name for your project&#39;s folder. Whitespaces are converted to dashes, and illegal characters such as any type of bracket are omitted.</li><li>Enter the description of your mod.</li><li>Enter the mod type. Choose &#39;app&#39; if you are making a localization mod. Choose &#39;world&#39; for any other kind of mod.</li><li>Enter the name of the developer (you).</li><li>(Optional) Enter a website.</li></ol></li><li>Confirm, but double-check the location it will write files to, as well as the mod location where your mod will be copied to when building.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Open the Sapiens extension output (Ctrl+` &gt; OUTPUT &gt; Choose <code>sapiens-vscode-extension-log</code> in the dropdown on the right) to follow along with the process. Any errors will be logged there too.</p></div><p>The mod project will open in your current VSCode window.</p><p>Details about the mod that you entered were saved in <code>modInfo.lua</code>. You can change these any time you want.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The extension automatically initialized cmake for you by running the command:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake -DAUTO_COPY_MOD=ON -DSAPIENS_MOD_DIRECTORY=&quot;/directory/to/your/sapiens/installation&#39;s/mods/folder&quot; . -B build</span></span>\n<span class="line"><span style="color:#A6ACCD;"># Linux users should use x86_64-w64-mingw32-cmake instead of cmake</span></span></code></pre></div><p>If you ever happen to remove the build folder, wish to change the mod ID, or you changed the Sapiens mod directory, search using Ctrl+Shift+P for <code>recreateBuild</code> or press F7.</p></div><p>To build and run the project, search using Ctrl+Shift+P for <code>buildAndRun</code> or press F6.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>buildAndRun</code> command runs the following cmake command:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake --build build/ --target sync_mod_files --target run_game</span></span></code></pre></div></div><p>From hereon out, you can follow the other guides to <a href="/guide/lua-getting-started.html">get started with Lua</a> or <a href="/guide/c-getting-started.html">get started with C</a>.</p><h2 id="additional-features" tabindex="-1">Additional Features <a class="header-anchor" href="#additional-features" aria-label="Permalink to &quot;Additional Features&quot;">​</a></h2><h3 id="lua-shadow-snippets" tabindex="-1">Lua Shadow Snippets <a class="header-anchor" href="#lua-shadow-snippets" aria-label="Permalink to &quot;Lua Shadow Snippets&quot;">​</a></h3><p>There is a snippet called <code>lua-shadow</code> that automatically generates a template for your Lua file that is used to shadow a corresponding vanilla Lua file.</p><h3 id="open-vanilla-lua-file" tabindex="-1">Open Vanilla Lua File <a class="header-anchor" href="#open-vanilla-lua-file" aria-label="Permalink to &quot;Open Vanilla Lua File&quot;">​</a></h3><p>The <code>openSourceFile</code> command (bound to F4) allows you to open the corresponding Vanilla Lua file of the currently opened Lua shadow file. This requires that you set the <code>gameResourcesPath</code> setting (see prerequisites).</p>',26),c=[d];function u(p,h,m,g,f,y){return t(),o("div",null,c)}const S=e(r,[["render",u]]);export{b as __pageData,S as default};