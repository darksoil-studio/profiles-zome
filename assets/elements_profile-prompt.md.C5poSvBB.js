const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.C00_WCO5.js","assets/chunks/context.mFPcU32w.js","assets/chunks/lit-element.CPJkn-Wj.js","assets/chunks/range.CRHiLbae.js","assets/chunks/commonjsHelpers.D6yTTuv9.js","assets/chunks/toFinite.CFYyTVp8.js","assets/chunks/isSymbol.DnU6SLKZ.js","assets/chunks/profile-prompt.BH0WPhJu.js","assets/chunks/chunk.3EPZX5HE.C1srMtB5.js","assets/chunks/create-profile.Fmv9SJzR.js","assets/chunks/edit-profile.C32h0_9t.js","assets/chunks/chunk.5KGB34TL.BDr4Yrcn.js","assets/chunks/if-defined.BIJl9ywZ.js","assets/chunks/static.Bnat6kGE.js","assets/chunks/chunk.3HB7VQL2.BztCkWEE.js","assets/chunks/chunk.EHUQAWJK.CB36krxG.js","assets/chunks/display-error.D_SbPTj7.js"])))=>i.map(i=>d[i]);
import{v as l,V as s,c as o,a2 as p,j as n,o as r}from"./chunks/framework.BbRsG_Ut.js";import{d as h,P as d,a as k,b as m,B as c,x as E}from"./chunks/lit-element.CPJkn-Wj.js";import{d as f}from"./chunks/base64.CmwHFi8Z.js";import"./chunks/range.CRHiLbae.js";import"./chunks/commonjsHelpers.D6yTTuv9.js";import"./chunks/toFinite.CFYyTVp8.js";import"./chunks/isSymbol.DnU6SLKZ.js";const x=JSON.parse('{"title":"profile-prompt","description":"","frontmatter":{},"headers":[],"relativePath":"elements/profile-prompt.md","filePath":"elements/profile-prompt.md"}'),g={name:"elements/profile-prompt.md"},D=Object.assign(g,{setup(u){return l(async()=>{await s(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await s(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await s(()=>import("./chunks/profiles-context.C00_WCO5.js"),__vite__mapDeps([4,5,6,7,8,9,10])),await s(()=>import("./chunks/profile-prompt.BH0WPhJu.js"),__vite__mapDeps([11,5,6,7,8,9,10,2,12,13,14,15,16,17,18,19,20]));const i=await h(),e=new d(i,f("uhCAk8OKb2hznzG023xxh_vR3Q7Y4IEOAo4B0QN7ZhbGYeww")),t=new k(e,"lobby"),a=new m(t);c(E`
    <profiles-context .store=${a}>
      <api-demo src="custom-elements.json" only="profile-prompt" exclude-knobs="store">
        <template data-element="profile-prompt" data-target="slot">
          <div slot="hero" style="margin-bottom: 24px; font-size: 24px">Welcome to my app! Create a profile to begin.</div>
          <div>This is where the content for the application should go.</div>
        </template>
      </api-demo>
    </profiles-context>
    `,document.querySelector("element-demo"))}),(i,e)=>(r(),o("div",null,e[0]||(e[0]=[p(`<h1 id="profile-prompt" tabindex="-1"><code>profile-prompt</code> <a class="header-anchor" href="#profile-prompt" aria-label="Permalink to &quot;\`profile-prompt\`&quot;">​</a></h1><p>If the user has not created a profile, it will show the <code>create-profile</code> element. If they have, it will show the contents of the default slot for the <code>profile-prompt</code> element.</p><p>Useful as the top level component of your app, wrapping all the other elements.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/profiles-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>profile-prompt</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/profiles-zome/dist/elements/profile-prompt.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">profile-prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hero&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Welcome to my app! Create a profile to begin.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is all the other content for my app&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">profile-prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;profile-prompt&gt;</code> needs to be placed inside an initialized <code>&lt;profiles-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>profile-prompt</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>`,14),n("api-docs",{src:"custom-elements.json",only:"profile-prompt"},null,-1)])))}});export{x as __pageData,D as default};
