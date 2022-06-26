import{_ as e,c as a,o as t,a as r}from"./app.60e89118.js";const v=JSON.parse('{"title":"Thread Management","description":"","frontmatter":{},"headers":[{"level":2,"title":"Threads","slug":"threads"},{"level":3,"title":"mainThread","slug":"mainthread"},{"level":3,"title":"server","slug":"server"},{"level":2,"title":"Thread Communication","slug":"thread-communication"},{"level":3,"title":"Client to Server","slug":"client-to-server"},{"level":3,"title":"Server to Client","slug":"server-to-client"}],"relativePath":"docs/thread-management.md","lastUpdated":1656281117000}'),o={name:"docs/thread-management.md"},i=r('<h1 id="thread-management" tabindex="-1">Thread Management <a class="header-anchor" href="#thread-management" aria-hidden="true">#</a></h1><p>Sapiens uses multiple threads to manage tasks. These threads are more or less reflected in the folder structure of the Lua code. For example, code nested within <code>server</code> will only be executed on the server, and so forth.</p><h2 id="threads" tabindex="-1">Threads <a class="header-anchor" href="#threads" aria-hidden="true">#</a></h2><p>Here is a quick explanation of all threads.</p><h3 id="mainthread" tabindex="-1">mainThread <a class="header-anchor" href="#mainthread" aria-hidden="true">#</a></h3><p>The <code>mainThread</code> is essentially the client.</p><h3 id="server" tabindex="-1">server <a class="header-anchor" href="#server" aria-hidden="true">#</a></h3><p>The <code>server</code> thread runs the client-agnostic logic. It may help to think of Sapiens is a multiplayer game, where multiple clients can attach to the same server.</p><p>For example, if a client digs out a section of the world, this will need to be communicated to all clients. This will be done via the server.</p><h2 id="thread-communication" tabindex="-1">Thread Communication <a class="header-anchor" href="#thread-communication" aria-hidden="true">#</a></h2><p>Sapiens has an RPC-like structure for elevating client calls to the server, and for server calls to be multicast to the clients.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You can only send one param at once! Use a table if you must process multiple pieces of information at once.</p></div><h3 id="client-to-server" tabindex="-1">Client to Server <a class="header-anchor" href="#client-to-server" aria-hidden="true">#</a></h3><p>To communicate for the client to the server, you will need to register a new net function (at startup), then call it.</p><ul><li><code>server:registerNetFunction</code> can be called on the <code>server</code> to make a server function available to the <code>mainThread</code>.</li><li><code>logicInterface:callServerFunction</code> can be called on the <code>mainThread</code> to fire a function on the <code>server</code>, assuming <code>registerNetFunction</code> is setup.</li></ul><h3 id="server-to-client" tabindex="-1">Server to Client <a class="header-anchor" href="#server-to-client" aria-hidden="true">#</a></h3><p>To communicate from the Server to the Client, you will need to do a bit of setup. Unless I am mistaken, the path is: Server -&gt; Logic -&gt; MainThread</p><ul><li><code>logic:registerLogicThreadNetFunction</code> can be used to register a <code>logic</code> thread function as callable on the server.</li><li><code>logicInterface:registerMainThreadFunction</code> can be used to register a <code>mainThread</code> function as callable on the logic thread.</li></ul><p>And then finally, you can use:</p><ul><li><code>server:callClientFunction</code> can be called on the <code>server</code> to propagate a server call to the <code>mainThread</code>, via the <code>logic</code> thread.</li></ul>',20),n=[i];function c(l,d,s,h,u,m){return t(),a("div",null,n)}var g=e(o,[["render",c]]);export{v as __pageData,g as default};
