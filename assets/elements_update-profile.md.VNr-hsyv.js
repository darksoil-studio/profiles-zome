const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.C00_WCO5.js","assets/chunks/context.mFPcU32w.js","assets/chunks/lit-element.CPJkn-Wj.js","assets/chunks/range.CRHiLbae.js","assets/chunks/commonjsHelpers.D6yTTuv9.js","assets/chunks/toFinite.CFYyTVp8.js","assets/chunks/isSymbol.DnU6SLKZ.js","assets/chunks/update-profile.CgUWcqXB.js","assets/chunks/chunk.3EPZX5HE.C1srMtB5.js","assets/chunks/chunk.EHUQAWJK.CB36krxG.js","assets/chunks/chunk.5KGB34TL.BDr4Yrcn.js","assets/chunks/if-defined.BIJl9ywZ.js","assets/chunks/edit-profile.C32h0_9t.js","assets/chunks/static.Bnat6kGE.js","assets/chunks/display-error.D_SbPTj7.js"])))=>i.map(i=>d[i]);
import{v as l,V as t,c as r,a2 as p,j as n,o as d}from"./chunks/framework.BbRsG_Ut.js";import{d as c,P as h,a as m,b as u,B as f}from"./chunks/lit-element.CPJkn-Wj.js";import{u as k}from"./chunks/static.Bnat6kGE.js";import"./chunks/range.CRHiLbae.js";import"./chunks/commonjsHelpers.D6yTTuv9.js";import"./chunks/toFinite.CFYyTVp8.js";import"./chunks/isSymbol.DnU6SLKZ.js";const x=JSON.parse('{"title":"<update-profile>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/update-profile.md","filePath":"elements/update-profile.md"}'),g={name:"elements/update-profile.md"},D=Object.assign(g,{setup(b){return l(async()=>{await t(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await t(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await t(()=>import("./chunks/profiles-context.C00_WCO5.js"),__vite__mapDeps([4,5,6,7,8,9,10])),await t(()=>import("./chunks/update-profile.CgUWcqXB.js"),__vite__mapDeps([11,5,6,7,8,9,10,12,13,14,15,16,17,18]));const a=await c(),e=Array.from(a.keys())[0],i=new h(a,e),s=new m(i,"lobby"),o=new u(s);f(k`
    <profiles-context .store=${o}>
      <api-demo src="custom-elements.json" only="update-profile" exclude-knobs="store">
        <template data-element="update-profile" data-target="host">
          <update-profile>
          </update-profile>
        </template>
      </api-demo>
    </profiles-context>`,document.querySelector("element-demo"))}),(a,e)=>(d(),r("div",null,e[0]||(e[0]=[p('<h1 id="update-profile" tabindex="-1"><code>&lt;update-profile&gt;</code> <a class="header-anchor" href="#update-profile" aria-label="Permalink to &quot;`&lt;update-profile&gt;`&quot;">​</a></h1><p>Allows the current user to edit their profile.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/profiles-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>update-profile</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/profiles-zome/dist/elements/update-profile.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;update-profile&gt;</code> needs to be placed inside an initialized <code>&lt;profiles-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>update-profile</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>',13),n("api-docs",{src:"custom-elements.json",only:"update-profile"},null,-1)])))}});export{x as __pageData,D as default};
