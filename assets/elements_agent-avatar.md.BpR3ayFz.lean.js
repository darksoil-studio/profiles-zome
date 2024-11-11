const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context._te38gq-.js","assets/chunks/lit-element.Boh-YGZU.js","assets/chunks/range.CRHiLbae.js","assets/chunks/commonjsHelpers.D6yTTuv9.js","assets/chunks/toFinite.CFYyTVp8.js","assets/chunks/isSymbol.DnU6SLKZ.js","assets/chunks/context.CPoyaPMH.js","assets/chunks/agent-avatar.DyMJZmJT.js","assets/chunks/routes.CkF5Gd-V.js","assets/chunks/style-map.DgzVTwIW.js","assets/chunks/display-error.BU3R3_jK.js"])))=>i.map(i=>d[i]);
import{v as l,V as a,c as o,a2 as r,j as h,o as p}from"./chunks/framework.BbRsG_Ut.js";import{d,P as c,a as k,b as g,B as m,e as u}from"./chunks/lit-element.Boh-YGZU.js";import{u as E,s as v}from"./chunks/static.ckAnSLD9.js";import"./chunks/range.CRHiLbae.js";import"./chunks/commonjsHelpers.D6yTTuv9.js";import"./chunks/toFinite.CFYyTVp8.js";import"./chunks/isSymbol.DnU6SLKZ.js";const C=JSON.parse('{"title":"<agent-avatar>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/agent-avatar.md","filePath":"elements/agent-avatar.md"}'),f={name:"elements/agent-avatar.md"},D=Object.assign(f,{setup(y){return l(async()=>{await a(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await a(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await a(()=>import("./chunks/profiles-context._te38gq-.js"),__vite__mapDeps([4,5,6,7,8,9,10])),await a(()=>import("./chunks/agent-avatar.DyMJZmJT.js"),__vite__mapDeps([11,12,10,5,6,7,8,9,13,14]));const t=await d(),e=Array.from(t.keys())[0],i=new c(t,e),s=new k(i,"lobby"),n=new g(s);m(E`
    <profiles-context .store=${n}>
      <api-demo src="custom-elements.json" only="agent-avatar" exclude-knobs="store">
        <template data-element="agent-avatar" data-target="host">
          <agent-avatar agent-pub-key="${v(u(s.client.myPubKey))}">
          </agent-avatar>
        </template>
      </api-demo>
    </profiles-context>`,document.querySelector("element-demo"))}),(t,e)=>(p(),o("div",null,e[0]||(e[0]=[r('<h1 id="agent-avatar" tabindex="-1"><code>&lt;agent-avatar&gt;</code> <a class="header-anchor" href="#agent-avatar" aria-label="Permalink to &quot;`&lt;agent-avatar&gt;`&quot;">​</a></h1><p>Shows the avatar for the profile for the given agent or profile hash.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/profiles-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>agent-avatar</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/profiles-zome/dist/elements/agent-avatar.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">agent-avatar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .agentPubKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${agent}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">agent-avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>OR, if you have a profile hash instead of the agent pub key:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">agent-avatar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .profileHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${profileHash}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">agent-avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;agent-avatar&gt;</code> needs to be placed inside an initialized <code>&lt;profiles-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>agent-avatar</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>',15),h("api-docs",{src:"custom-elements.json",only:"agent-avatar"},null,-1)])))}});export{C as __pageData,D as default};
