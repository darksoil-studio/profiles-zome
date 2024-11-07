import{_ as S}from"./tslib.es6.kHcLnhpD.js";import{s as Bo,n as l,a as Fo,t as mt,S as jt,p as ze}from"./property.CPLa9I-s.js";import{i as P,r as nt,x as m,T as Mt,E as mo,u as Xe,e as Ye,a as Ke,H as Ge}from"../elements_profile-prompt.md.Cm8PC251.js";import"./framework.BbRsG_Ut.js";import"./commonjsHelpers.D6yTTuv9.js";import"./range.CRHiLbae.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ze{constructor(e,o,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=e,o.context!==void 0){const s=o;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=o,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Bo(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt({context:t,subscribe:e}){return(o,i)=>{typeof i=="object"?i.addInitializer(function(){new Ze(this,{context:t,callback:r=>{o.set.call(this,r)},subscribe:e})}):o.constructor.addInitializer(r=>{new Ze(r,{context:t,callback:s=>{r[i]=s},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(t,e){return(o,i,r)=>{const s=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(t))??null};return Vo(o,i,{get(){return s(this)}})}}const Pe=Fo("linked_devices/store"),bo=60*1e3;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=(t,...e)=>({strTag:!0,strings:t,values:e}),Ho=Mo,No=t=>typeof t!="string"&&"strTag"in t,qo=(t,e,o)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[r-1],i+=t[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=t=>No(t)?qo(t.strings,t.values):t;let $=jo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Uo=class{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Je,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Je,this.__litLocalizeEventHandler)}};const Wo=t=>t.addController(new Uo(t)),Xo=Wo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=()=>(t,e)=>(t.addInitializer(Xo),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yo{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ko=new Yo;Ko.resolve();var Go=P`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,ke="";function Qe(t){ke=t}function Zo(t=""){if(!ke){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Qe(o.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),Qe(r.split("/").slice(0,-1).join("/"))}}return ke.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Jo={name:"default",resolver:t=>Zo(`assets/icons/${t}.svg`)},Qo=Jo,to={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ti={name:"system",resolver:t=>t in to?`data:image/svg+xml,${encodeURIComponent(to[t])}`:""},ei=ti,oi=[Qo,ei],Ce=[];function ii(t){Ce.push(t)}function ri(t){Ce=Ce.filter(e=>e!==t)}function eo(t){return oi.find(e=>e.name===t)}var si=P`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,vo=Object.defineProperty,ni=Object.defineProperties,ai=Object.getOwnPropertyDescriptor,li=Object.getOwnPropertyDescriptors,oo=Object.getOwnPropertySymbols,ci=Object.prototype.hasOwnProperty,di=Object.prototype.propertyIsEnumerable,io=(t,e,o)=>e in t?vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,kt=(t,e)=>{for(var o in e||(e={}))ci.call(e,o)&&io(t,o,e[o]);if(oo)for(var o of oo(e))di.call(e,o)&&io(t,o,e[o]);return t},ue=(t,e)=>ni(t,li(e)),a=(t,e,o,i)=>{for(var r=i>1?void 0:i?ai(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&vo(e,o,r),r},go=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},ui=(t,e,o)=>(go(t,e,"read from private field"),e.get(t)),hi=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},pi=(t,e,o,i)=>(go(t,e,"write to private field"),e.set(t,o),o);function q(t,e){const o=kt({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(c){n.forEach(u=>{const d=u;if(c.has(d)){const h=c.get(d),p=this[d];h!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,p)}}),s.call(this,c)}}}var tt=P`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Gt,R=class extends nt{constructor(){super(),hi(this,Gt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,o){ui(this,Gt)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),pi(this,Gt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};Gt=new WeakMap;R.version="2.18.0";R.dependencies={};a([l()],R.prototype,"dir",2);a([l()],R.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,mi=t=>t.strings===void 0,bi={},vi=(t,e=bi)=>t._$AH=e;var Ot=Symbol(),Xt=Symbol(),ve,ge=new Map,B=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return this.svg=m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Ot:Xt}catch{return Xt}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return Ot;ve||(ve=new DOMParser);const c=ve.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Ot}catch{return Ot}}connectedCallback(){super.connectedCallback(),ii(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ri(this)}getIconSource(){const t=eo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?eo(this.library):void 0;if(!e){this.svg=null;return}let r=ge.get(e);if(r||(r=this.resolveIcon(e,i),ge.set(e,r)),!this.initialRender)return;const s=await r;if(s===Xt&&ge.delete(e),e===this.getIconSource().url){if(fi(s)){if(this.svg=s,i){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(s){case Xt:case Ot:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};B.styles=[tt,si];a([K()],B.prototype,"svg",2);a([l({reflect:!0})],B.prototype,"name",2);a([l()],B.prototype,"src",2);a([l()],B.prototype,"label",2);a([l({reflect:!0})],B.prototype,"library",2);a([q("label")],B.prototype,"handleLabelChange",1);a([q(["name","src","library"])],B.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=t=>(...e)=>({_$litDirective$:t,values:e});let Re=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=De(class extends Re{constructor(t){var e;if(super(t),t.type!==vt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const o=t.element.classList;for(const s of this.st)s in e||(o.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return Mt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=Symbol.for(""),gi=t=>{if((t==null?void 0:t.r)===yo)return t==null?void 0:t._$litStatic$},Qt=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:yo}),ro=new Map,yi=t=>(e,...o)=>{const i=o.length;let r,s;const n=[],c=[];let u,d=0,h=!1;for(;d<i;){for(u=e[d];d<i&&(s=o[d],(r=gi(s))!==void 0);)u+=r+e[++d],h=!0;d!==i&&c.push(s),n.push(u),d++}if(d===i&&n.push(e[i]),h){const p=n.join("$$lit$$");(e=ro.get(p))===void 0&&(n.raw=n,ro.set(p,e=n)),o=c}return t(e,...o)},Zt=yi(m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=t=>t??mo;var F=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Qt`a`:Qt`button`;return Zt`
      <${e}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:"button")}
        href=${x(t?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t&&this.target?"noreferrer noopener":void 0)}
        role=${x(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${x(this.name)}
          library=${x(this.library)}
          src=${x(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[tt,Go];F.dependencies={"sl-icon":B};a([N(".icon-button")],F.prototype,"button",2);a([K()],F.prototype,"hasFocus",2);a([l()],F.prototype,"name",2);a([l()],F.prototype,"library",2);a([l()],F.prototype,"src",2);a([l()],F.prototype,"href",2);a([l()],F.prototype,"target",2);a([l()],F.prototype,"download",2);a([l()],F.prototype,"label",2);a([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var wo=new Map,wi=new WeakMap;function _i(t){return t??{keyframes:[],options:{duration:0}}}function so(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function he(t,e){wo.set(t,_i(e))}function te(t,e,o){const i=wi.get(t);if(i!=null&&i[e])return so(i[e],o.dir);const r=wo.get(e);return r?so(r,o.dir):{keyframes:[],options:{duration:0}}}function ee(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function oe(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,ue(kt({},o),{duration:xi()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function no(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function xi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ie(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}const $e=new Set,Et=new Map;let gt,Ie="ltr",Oe="en";const _o=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(_o){const t=new MutationObserver(ko);Ie=document.documentElement.dir||"ltr",Oe=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xo(...t){t.map(e=>{const o=e.$code.toLowerCase();Et.has(o)?Et.set(o,Object.assign(Object.assign({},Et.get(o)),e)):Et.set(o,e),gt||(gt=e)}),ko()}function ko(){_o&&(Ie=document.documentElement.dir||"ltr",Oe=document.documentElement.lang||navigator.language),[...$e.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let ki=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$e.add(this.host)}hostDisconnected(){$e.delete(this.host)}dir(){return`${this.host.dir||Ie}`.toLowerCase()}lang(){return`${this.host.lang||Oe}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",c=Et.get(`${s}-${n}`),u=Et.get(s);return{locale:r,language:s,region:n,primary:c,secondary:u}}exists(e,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||s&&s[e]||o.includeFallback&&gt&&gt[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(gt&&gt[e])s=gt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var Co={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};xo(Co);var Ci=Co,Tt=class extends ki{};xo(Ci);var pe=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},$i=P`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,$t=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),V=class extends R{constructor(){super(...arguments),this.hasSlotController=new pe(this,"icon","suffix"),this.localize=new Tt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ie(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=te(this,"alert.show",{dir:this.localize.dir()});await oe(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ie(this.base);const{keyframes:t,options:e}=te(this,"alert.hide",{dir:this.localize.dir()});await oe(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),$t.parentElement===null&&document.body.append($t),$t.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{$t.removeChild(this),t(),$t.querySelector("sl-alert")===null&&$t.remove()},{once:!0})})}render(){return m`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?m`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?m`
              <div
                class=${W({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};V.styles=[tt,$i];V.dependencies={"sl-icon-button":F};a([N('[part~="base"]')],V.prototype,"base",2);a([N(".alert__countdown-elapsed")],V.prototype,"countdownElement",2);a([l({type:Boolean,reflect:!0})],V.prototype,"open",2);a([l({type:Boolean,reflect:!0})],V.prototype,"closable",2);a([l({reflect:!0})],V.prototype,"variant",2);a([l({type:Number})],V.prototype,"duration",2);a([l({type:String,reflect:!0})],V.prototype,"countdown",2);a([K()],V.prototype,"remainingTime",2);a([q("open",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpenChange",1);a([q("duration")],V.prototype,"handleDurationChange",1);he("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});he("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});V.define("sl-alert");const bt=[P`
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .small-margin {
      margin-top: 6px;
    }
    .big-margin {
      margin-top: 23px;
    }

    .fill {
      flex: 1;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .center-content {
      align-items: center;
      justify-content: center;
    }

    .placeholder {
      color: var(--sl-color-gray-700);
    }

    .flex-scrollable-parent {
      position: relative;
      display: flex;
      flex: 1;
    }

    .flex-scrollable-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .flex-scrollable-x {
      max-width: 100%;
      overflow-x: auto;
    }
    .flex-scrollable-y {
      max-height: 100%;
      overflow-y: auto;
    }
    :host {
      color: var(--sl-color-neutral-1000);
    }

    sl-card {
      display: flex;
    }
    sl-card::part(base) {
      flex: 1;
    }
    sl-card::part(body) {
      display: flex;
      flex: 1;
    }
    sl-drawer::part(body) {
      display: flex;
    }
  `];class Ei{constructor(e){this.host=e,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(e){function o(i){if(!i||i===document||i===window)return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(e);return r||o(i.getRootNode().host)}return o(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(e){const o=this.host.disabled,i=this.host.name,r=this.host.value;!o&&i&&r!==void 0&&(Array.isArray(r)?r.map(s=>e.formData.append(i,s)):e.formData.append(i,r))}handleFormSubmit(e){const o=this.form,i=this.host.disabled,r=this.host.reportValidity;o&&!o.noValidate&&!i&&r&&!this.host.reportValidity()&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(e){this.host.reset()}}function ye(t){return typeof t=="string"&&t.split(",").length===39?new Uint8Array(t.split(",").map(e=>parseInt(e,10))):t}function ao(t){const e=new FormData(t),o={};return e.forEach((i,r)=>{if(Reflect.has(o,r)){const s=o[r];Array.isArray(s)?s.push(ye(i)):o[r]=[o[r],ye(i)]}else o[r]=ye(i)}),o}class Ai extends Re{constructor(){super(...arguments),this.initialized=!1}update(e,o){this.initialized||(this.initialized=!0,e.element.addEventListener("update-form",r=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=s=>{s.preventDefault();const n=ao(e.element);o[0](n)},e.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=i=>{i.preventDefault();const r=ao(e.element);o[0](r)},e.element.addEventListener("submit",this.listener)},100)}render(e){return""}}const Li=De(Ai);function Ht(t){return`data:image/svg+xml;utf8,${Si(t)}`}function Si(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var $o="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",lo="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",zi="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",Pi="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";function Ti(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function Be(t,e="primary",o=zi,i=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:i,innerHTML:`
        <sl-icon src="${Ht(o)}" slot="icon"></sl-icon>
        ${Ti(t)}
      `});return document.body.append(r),r.toast()}function re(t){return Be(t,"danger",$o)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fe extends Event{constructor(e){super(Fe.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}}Fe.eventName="lit-routes-connected";var Di=P`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Ri=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,c){var u;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(s===h){const p=d.converter||Xe,f=(typeof p=="function"?p:(u=p==null?void 0:p.fromAttribute)!=null?u:Xe.fromAttribute)(c,d.type);this[t]!==f&&(this[o]=f)}r.call(this,s,n,c)}},Ii=P`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Bt=new WeakMap,Ft=new WeakMap,Vt=new WeakMap,we=new WeakSet,Yt=new WeakMap,Eo=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(c=>{o.formData.append(r,c.toString())}):o.formData.append(r,s.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Bt.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Yt.set(this.host,[])},this.handleInteraction=o=>{const i=Yt.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=kt({form:o=>{const i=o.form;if(i){const s=o.getRootNode().querySelector(`#${i}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Yt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Yt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Bt.has(this.form)?Bt.get(this.form).add(this.host):Bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ft.has(this.form)||(Ft.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Vt.has(this.form)||(Vt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Bt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ft.has(this.form)&&(this.form.reportValidity=Ft.get(this.form),Ft.delete(this.form)),Vt.has(this.form)&&(this.form.checkValidity=Vt.get(this.form),Vt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?we.add(t):we.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!we.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Ve=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ue(kt({},Ve),{valid:!1,valueMissing:!0}));Object.freeze(ue(kt({},Ve),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=De(class extends Re{constructor(t){if(super(t),t.type!==vt.PROPERTY&&t.type!==vt.ATTRIBUTE&&t.type!==vt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!mi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Mt||e===mo)return e;const o=t.element,i=t.name;if(t.type===vt.PROPERTY){if(e===o[i])return Mt}else if(t.type===vt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return Mt}else if(t.type===vt.ATTRIBUTE&&o.getAttribute(i)===e+"")return Mt;return vi(t),e}});var y=class extends R{constructor(){super(...arguments),this.formControlController=new Eo(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new pe(this,"help-text","label"),this.localize=new Tt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${x(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${x(this.placeholder)}
              minlength=${x(this.minlength)}
              maxlength=${x(this.maxlength)}
              min=${x(this.min)}
              max=${x(this.max)}
              step=${x(this.step)}
              .value=${Oi(this.value)}
              autocapitalize=${x(this.autocapitalize)}
              autocomplete=${x(this.autocomplete)}
              autocorrect=${x(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${x(this.pattern)}
              enterkeyhint=${x(this.enterkeyhint)}
              inputmode=${x(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?m`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:m`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};y.styles=[tt,Ii,Di];y.dependencies={"sl-icon":B};a([N(".input__control")],y.prototype,"input",2);a([K()],y.prototype,"hasFocus",2);a([l()],y.prototype,"title",2);a([l({reflect:!0})],y.prototype,"type",2);a([l()],y.prototype,"name",2);a([l()],y.prototype,"value",2);a([Ri()],y.prototype,"defaultValue",2);a([l({reflect:!0})],y.prototype,"size",2);a([l({type:Boolean,reflect:!0})],y.prototype,"filled",2);a([l({type:Boolean,reflect:!0})],y.prototype,"pill",2);a([l()],y.prototype,"label",2);a([l({attribute:"help-text"})],y.prototype,"helpText",2);a([l({type:Boolean})],y.prototype,"clearable",2);a([l({type:Boolean,reflect:!0})],y.prototype,"disabled",2);a([l()],y.prototype,"placeholder",2);a([l({type:Boolean,reflect:!0})],y.prototype,"readonly",2);a([l({attribute:"password-toggle",type:Boolean})],y.prototype,"passwordToggle",2);a([l({attribute:"password-visible",type:Boolean})],y.prototype,"passwordVisible",2);a([l({attribute:"no-spin-buttons",type:Boolean})],y.prototype,"noSpinButtons",2);a([l({reflect:!0})],y.prototype,"form",2);a([l({type:Boolean,reflect:!0})],y.prototype,"required",2);a([l()],y.prototype,"pattern",2);a([l({type:Number})],y.prototype,"minlength",2);a([l({type:Number})],y.prototype,"maxlength",2);a([l()],y.prototype,"min",2);a([l()],y.prototype,"max",2);a([l()],y.prototype,"step",2);a([l()],y.prototype,"autocapitalize",2);a([l()],y.prototype,"autocorrect",2);a([l()],y.prototype,"autocomplete",2);a([l({type:Boolean})],y.prototype,"autofocus",2);a([l()],y.prototype,"enterkeyhint",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],y.prototype,"spellcheck",2);a([l()],y.prototype,"inputmode",2);a([q("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1);a([q("step",{waitUntilFirstUpdate:!0})],y.prototype,"handleStepChange",1);a([q("value",{waitUntilFirstUpdate:!0})],y.prototype,"handleValueChange",1);y.define("sl-input");let se=class extends nt{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()})}get passcode(){const e=Array.from(this.shadowRoot.querySelectorAll("sl-input")),o=Array.from(Array(this.passcodeLength)).map(()=>{});for(let i=0;i<e.length;i++){if(e[i].value==="")return;const r=parseInt(e[i].value,10);if(r>9)return;o[i]=r}return o}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(o=>o.value=""),setTimeout(()=>{var o;(o=this.shadowRoot.getElementById("input-0"))===null||o===void 0||o.focus()})}maybeDispatchEvent(){const e=this.passcode;e&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:e}}))}render(){return m`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((e,o)=>m`<sl-input
							id="input-${o}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${i=>{if(i.key==="Backspace"){if(i.target.value===""){const s=this.shadowRoot.getElementById(`input-${o-1}`);s&&(s.value=""),setTimeout(()=>{const n=this.shadowRoot.getElementById(`input-${o-1}`);n&&n.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${i=>{const r=i.target;if(!r.value.match(/^[0-9]$/g)){r.value="";return}const s=this.shadowRoot.getElementById(`input-${o+1}`);s&&s.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};se.styles=[bt,P`
			sl-input::part(input) {
				text-align: center;
			}
		`];S([l()],se.prototype,"passcodeLength",void 0);se=S([mt("passcode-input")],se);function Bi(){return Math.floor(Math.random()*10)}function ne(t){const e=[];for(let o=0;o<t;o++)e.push(Bi());return e}let Lt=class extends jt(nt){constructor(){super(...arguments),this.recipientPasscode=[]}async firstUpdated(){this.recipientPasscode=ne(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=ne(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.recipientPasscode)},bo),await this.store.client.prepareLinkDevices(this.recipientPasscode),this.store.client.onSignal(e=>{"type"in e&&e.type==="LinkDevicesInitialized"&&(this.initializedLinkDevicesByRequestor=e.requestor)})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async attemptLinkAgent(e,o){try{await this.store.client.requestLinkDevices(e,o),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:e}})),Be($("Device linked successfully"))}catch(i){console.error(i),re($("Incorrect passcode"))}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderRequestLinkAgent(e){return m`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${$("Device link request received")} </span>
				<span>${$("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${o=>this.attemptLinkAgent(e,o.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}render(){return this.initializedLinkDevicesByRequestor?this.renderRequestLinkAgent(this.initializedLinkDevicesByRequestor):m`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span
				>${$("Enter this pass code in your other device (valid for one minute):")}
			</span>
			<span class="passcode">${this.recipientPasscode.join("")}</span>
		</div>`}};Lt.styles=[bt,P`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];S([Pt({context:Pe,subscribe:!0}),l()],Lt.prototype,"store",void 0);S([K()],Lt.prototype,"recipientPasscode",void 0);S([K()],Lt.prototype,"initializedLinkDevicesByRequestor",void 0);Lt=S([mt("link-devices-recipient")],Lt);let Nt=class extends jt(nt){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||Ye(Ke(e.action.hashed.content.target_address,Ge.AGENT))===Ye(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),Be($("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const i=(await this.store.client.getLinkingAgents()).map(r=>Ke(r.target,Ge.AGENT));for(const r of i)try{await this.store.client.initLinkDevices(r,e),this.requestorpasscode=ne(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=ne(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},bo),this.successfulRecipient=r}catch(s){console.error(s),s.toString().includes("Unauthorized")||(re($("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(re($("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return m`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${$("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():m`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${$("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};Nt.styles=[bt,P`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];S([Pt({context:Pe,subscribe:!0}),l()],Nt.prototype,"store",void 0);S([K()],Nt.prototype,"successfulRecipient",void 0);Nt=S([mt("link-devices-requestor")],Nt);var Fi=P`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Me=class extends R{constructor(){super(...arguments),this.localize=new Tt(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Me.styles=[tt,Fi];Me.define("sl-spinner");var Vi=P`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Mi=P`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ut=Math.min,I=Math.max,ae=Math.round,Kt=Math.floor,ht=t=>({x:t,y:t}),Hi={left:"right",right:"left",bottom:"top",top:"bottom"},Ni={start:"end",end:"start"};function Ee(t,e,o){return I(t,ut(e,o))}function Dt(t,e){return typeof t=="function"?t(e):t}function pt(t){return t.split("-")[0]}function Rt(t){return t.split("-")[1]}function Ao(t){return t==="x"?"y":"x"}function He(t){return t==="y"?"height":"width"}function yt(t){return["top","bottom"].includes(pt(t))?"y":"x"}function Ne(t){return Ao(yt(t))}function qi(t,e,o){o===void 0&&(o=!1);const i=Rt(t),r=Ne(t),s=He(r);let n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=le(n)),[n,le(n)]}function ji(t){const e=le(t);return[Ae(t),e,Ae(e)]}function Ae(t){return t.replace(/start|end/g,e=>Ni[e])}function Ui(t,e,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?s:n;default:return[]}}function Wi(t,e,o,i){const r=Rt(t);let s=Ui(pt(t),o==="start",i);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map(Ae)))),s}function le(t){return t.replace(/left|right|bottom|top/g,e=>Hi[e])}function Xi(t){return{top:0,right:0,bottom:0,left:0,...t}}function Lo(t){return typeof t!="number"?Xi(t):{top:t,right:t,bottom:t,left:t}}function ce(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function co(t,e,o){let{reference:i,floating:r}=t;const s=yt(e),n=Ne(e),c=He(n),u=pt(e),d=s==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,v=i[c]/2-r[c]/2;let f;switch(u){case"top":f={x:h,y:i.y-r.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:p};break;case"left":f={x:i.x-r.width,y:p};break;default:f={x:i.x,y:i.y}}switch(Rt(e)){case"start":f[n]-=v*(o&&d?-1:1);break;case"end":f[n]+=v*(o&&d?-1:1);break}return f}const Yi=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,c=s.filter(Boolean),u=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:p}=co(d,i,u),v=i,f={},b=0;for(let g=0;g<c.length;g++){const{name:_,fn:w}=c[g],{x:k,y:E,data:z,reset:L}=await w({x:h,y:p,initialPlacement:i,placement:v,strategy:r,middlewareData:f,rects:d,platform:n,elements:{reference:t,floating:e}});h=k??h,p=E??p,f={...f,[_]:{...f[_],...z}},L&&b<=50&&(b++,typeof L=="object"&&(L.placement&&(v=L.placement),L.rects&&(d=L.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):L.rects),{x:h,y:p}=co(d,v,u)),g=-1)}return{x:h,y:p,placement:v,strategy:r,middlewareData:f}};async function qe(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:n,elements:c,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:v=!1,padding:f=0}=Dt(e,t),b=Lo(f),_=c[v?p==="floating"?"reference":"floating":p],w=ce(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(_)))==null||o?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:h,strategy:u})),k=p==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),z=await(s.isElement==null?void 0:s.isElement(E))?await(s.getScale==null?void 0:s.getScale(E))||{x:1,y:1}:{x:1,y:1},L=ce(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:E,strategy:u}):k);return{top:(w.top-L.top+b.top)/z.y,bottom:(L.bottom-w.bottom+b.bottom)/z.y,left:(w.left-L.left+b.left)/z.x,right:(L.right-w.right+b.right)/z.x}}const Ki=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:s,platform:n,elements:c,middlewareData:u}=e,{element:d,padding:h=0}=Dt(t,e)||{};if(d==null)return{};const p=Lo(h),v={x:o,y:i},f=Ne(r),b=He(f),g=await n.getDimensions(d),_=f==="y",w=_?"top":"left",k=_?"bottom":"right",E=_?"clientHeight":"clientWidth",z=s.reference[b]+s.reference[f]-v[f]-s.floating[b],L=v[f]-s.reference[f],M=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let j=M?M[E]:0;(!j||!await(n.isElement==null?void 0:n.isElement(M)))&&(j=c.floating[E]||s.floating[b]);const rt=z/2-L/2,G=j/2-g[b]/2-1,U=ut(p[w],G),at=ut(p[k],G),Z=U,lt=j-g[b]-at,D=j/2-g[b]/2+rt,Ct=Ee(Z,D,lt),st=!u.arrow&&Rt(r)!=null&&D!==Ct&&s.reference[b]/2-(D<Z?U:at)-g[b]/2<0,J=st?D<Z?D-Z:D-lt:0;return{[f]:v[f]+J,data:{[f]:Ct,centerOffset:D-Ct-J,...st&&{alignmentOffset:J}},reset:st}}}),Gi=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:s,rects:n,initialPlacement:c,platform:u,elements:d}=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:v,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,..._}=Dt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const w=pt(r),k=yt(c),E=pt(c)===c,z=await(u.isRTL==null?void 0:u.isRTL(d.floating)),L=v||(E||!g?[le(c)]:ji(c)),M=b!=="none";!v&&M&&L.push(...Wi(c,g,b,z));const j=[c,...L],rt=await qe(e,_),G=[];let U=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&G.push(rt[w]),p){const D=qi(r,n,z);G.push(rt[D[0]],rt[D[1]])}if(U=[...U,{placement:r,overflows:G}],!G.every(D=>D<=0)){var at,Z;const D=(((at=s.flip)==null?void 0:at.index)||0)+1,Ct=j[D];if(Ct)return{data:{index:D,overflows:U},reset:{placement:Ct}};let st=(Z=U.filter(J=>J.overflows[0]<=0).sort((J,ct)=>J.overflows[1]-ct.overflows[1])[0])==null?void 0:Z.placement;if(!st)switch(f){case"bestFit":{var lt;const J=(lt=U.filter(ct=>{if(M){const dt=yt(ct.placement);return dt===k||dt==="y"}return!0}).map(ct=>[ct.placement,ct.overflows.filter(dt=>dt>0).reduce((dt,Oo)=>dt+Oo,0)]).sort((ct,dt)=>ct[1]-dt[1])[0])==null?void 0:lt[0];J&&(st=J);break}case"initialPlacement":st=c;break}if(r!==st)return{reset:{placement:st}}}return{}}}};async function Zi(t,e){const{placement:o,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=pt(o),c=Rt(o),u=yt(o)==="y",d=["left","top"].includes(n)?-1:1,h=s&&u?-1:1,p=Dt(e,t);let{mainAxis:v,crossAxis:f,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof b=="number"&&(f=c==="end"?b*-1:b),u?{x:f*h,y:v*d}:{x:v*d,y:f*h}}const Ji=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:s,placement:n,middlewareData:c}=e,u=await Zi(e,t);return n===((o=c.offset)==null?void 0:o.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:r+u.x,y:s+u.y,data:{...u,placement:n}}}}},Qi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:c={fn:_=>{let{x:w,y:k}=_;return{x:w,y:k}}},...u}=Dt(t,e),d={x:o,y:i},h=await qe(e,u),p=yt(pt(r)),v=Ao(p);let f=d[v],b=d[p];if(s){const _=v==="y"?"top":"left",w=v==="y"?"bottom":"right",k=f+h[_],E=f-h[w];f=Ee(k,f,E)}if(n){const _=p==="y"?"top":"left",w=p==="y"?"bottom":"right",k=b+h[_],E=b-h[w];b=Ee(k,b,E)}const g=c.fn({...e,[v]:f,[p]:b});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[v]:s,[p]:n}}}}}},tr=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:s,platform:n,elements:c}=e,{apply:u=()=>{},...d}=Dt(t,e),h=await qe(e,d),p=pt(r),v=Rt(r),f=yt(r)==="y",{width:b,height:g}=s.floating;let _,w;p==="top"||p==="bottom"?(_=p,w=v===(await(n.isRTL==null?void 0:n.isRTL(c.floating))?"start":"end")?"left":"right"):(w=p,_=v==="end"?"top":"bottom");const k=g-h.top-h.bottom,E=b-h.left-h.right,z=ut(g-h[_],k),L=ut(b-h[w],E),M=!e.middlewareData.shift;let j=z,rt=L;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(rt=E),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(j=k),M&&!v){const U=I(h.left,0),at=I(h.right,0),Z=I(h.top,0),lt=I(h.bottom,0);f?rt=b-2*(U!==0||at!==0?U+at:I(h.left,h.right)):j=g-2*(Z!==0||lt!==0?Z+lt:I(h.top,h.bottom))}await u({...e,availableWidth:rt,availableHeight:j});const G=await n.getDimensions(c.floating);return b!==G.width||g!==G.height?{reset:{rects:!0}}:{}}}};function fe(){return typeof window<"u"}function It(t){return So(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function et(t){var e;return(e=(So(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function So(t){return fe()?t instanceof Node||t instanceof O(t).Node:!1}function X(t){return fe()?t instanceof Element||t instanceof O(t).Element:!1}function Q(t){return fe()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function uo(t){return!fe()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function Ut(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=Y(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function er(t){return["table","td","th"].includes(It(t))}function me(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function je(t){const e=Ue(),o=X(t)?Y(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function or(t){let e=ft(t);for(;Q(e)&&!St(e);){if(je(e))return e;if(me(e))return null;e=ft(e)}return null}function Ue(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function St(t){return["html","body","#document"].includes(It(t))}function Y(t){return O(t).getComputedStyle(t)}function be(t){return X(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ft(t){if(It(t)==="html")return t;const e=t.assignedSlot||t.parentNode||uo(t)&&t.host||et(t);return uo(e)?e.host:e}function zo(t){const e=ft(t);return St(e)?t.ownerDocument?t.ownerDocument.body:t.body:Q(e)&&Ut(e)?e:zo(e)}function qt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=zo(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),n=O(r);if(s){const c=Le(n);return e.concat(n,n.visualViewport||[],Ut(r)?r:[],c&&o?qt(c):[])}return e.concat(r,qt(r,[],o))}function Le(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Po(t){const e=Y(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Q(t),s=r?t.offsetWidth:o,n=r?t.offsetHeight:i,c=ae(o)!==s||ae(i)!==n;return c&&(o=s,i=n),{width:o,height:i,$:c}}function We(t){return X(t)?t:t.contextElement}function At(t){const e=We(t);if(!Q(e))return ht(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:s}=Po(e);let n=(s?ae(o.width):o.width)/i,c=(s?ae(o.height):o.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const ir=ht(0);function To(t){const e=O(t);return!Ue()||!e.visualViewport?ir:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function rr(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==O(t)?!1:e}function wt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=We(t);let n=ht(1);e&&(i?X(i)&&(n=At(i)):n=At(t));const c=rr(s,o,i)?To(s):ht(0);let u=(r.left+c.x)/n.x,d=(r.top+c.y)/n.y,h=r.width/n.x,p=r.height/n.y;if(s){const v=O(s),f=i&&X(i)?O(i):i;let b=v,g=Le(b);for(;g&&i&&f!==b;){const _=At(g),w=g.getBoundingClientRect(),k=Y(g),E=w.left+(g.clientLeft+parseFloat(k.paddingLeft))*_.x,z=w.top+(g.clientTop+parseFloat(k.paddingTop))*_.y;u*=_.x,d*=_.y,h*=_.x,p*=_.y,u+=E,d+=z,b=O(g),g=Le(b)}}return ce({width:h,height:p,x:u,y:d})}function sr(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const s=r==="fixed",n=et(i),c=e?me(e.floating):!1;if(i===n||c&&s)return o;let u={scrollLeft:0,scrollTop:0},d=ht(1);const h=ht(0),p=Q(i);if((p||!p&&!s)&&((It(i)!=="body"||Ut(n))&&(u=be(i)),Q(i))){const v=wt(i);d=At(i),h.x=v.x+i.clientLeft,h.y=v.y+i.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-u.scrollLeft*d.x+h.x,y:o.y*d.y-u.scrollTop*d.y+h.y}}function nr(t){return Array.from(t.getClientRects())}function Se(t,e){const o=be(t).scrollLeft;return e?e.left+o:wt(et(t)).left+o}function ar(t){const e=et(t),o=be(t),i=t.ownerDocument.body,r=I(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=I(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+Se(t);const c=-o.scrollTop;return Y(i).direction==="rtl"&&(n+=I(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:n,y:c}}function lr(t,e){const o=O(t),i=et(t),r=o.visualViewport;let s=i.clientWidth,n=i.clientHeight,c=0,u=0;if(r){s=r.width,n=r.height;const d=Ue();(!d||d&&e==="fixed")&&(c=r.offsetLeft,u=r.offsetTop)}return{width:s,height:n,x:c,y:u}}function cr(t,e){const o=wt(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,s=Q(t)?At(t):ht(1),n=t.clientWidth*s.x,c=t.clientHeight*s.y,u=r*s.x,d=i*s.y;return{width:n,height:c,x:u,y:d}}function ho(t,e,o){let i;if(e==="viewport")i=lr(t,o);else if(e==="document")i=ar(et(t));else if(X(e))i=cr(e,o);else{const r=To(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return ce(i)}function Do(t,e){const o=ft(t);return o===e||!X(o)||St(o)?!1:Y(o).position==="fixed"||Do(o,e)}function dr(t,e){const o=e.get(t);if(o)return o;let i=qt(t,[],!1).filter(c=>X(c)&&It(c)!=="body"),r=null;const s=Y(t).position==="fixed";let n=s?ft(t):t;for(;X(n)&&!St(n);){const c=Y(n),u=je(n);!u&&c.position==="fixed"&&(r=null),(s?!u&&!r:!u&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ut(n)&&!u&&Do(t,n))?i=i.filter(h=>h!==n):r=c,n=ft(n)}return e.set(t,i),i}function ur(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const n=[...o==="clippingAncestors"?me(e)?[]:dr(e,this._c):[].concat(o),i],c=n[0],u=n.reduce((d,h)=>{const p=ho(e,h,r);return d.top=I(p.top,d.top),d.right=ut(p.right,d.right),d.bottom=ut(p.bottom,d.bottom),d.left=I(p.left,d.left),d},ho(e,c,r));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function hr(t){const{width:e,height:o}=Po(t);return{width:e,height:o}}function pr(t,e,o){const i=Q(e),r=et(e),s=o==="fixed",n=wt(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const u=ht(0);if(i||!i&&!s)if((It(e)!=="body"||Ut(r))&&(c=be(e)),i){const f=wt(e,!0,s,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else r&&(u.x=Se(r));let d=0,h=0;if(r&&!i&&!s){const f=r.getBoundingClientRect();h=f.top+c.scrollTop,d=f.left+c.scrollLeft-Se(r,f)}const p=n.left+c.scrollLeft-u.x-d,v=n.top+c.scrollTop-u.y-h;return{x:p,y:v,width:n.width,height:n.height}}function _e(t){return Y(t).position==="static"}function po(t,e){if(!Q(t)||Y(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return et(t)===o&&(o=o.ownerDocument.body),o}function Ro(t,e){const o=O(t);if(me(t))return o;if(!Q(t)){let r=ft(t);for(;r&&!St(r);){if(X(r)&&!_e(r))return r;r=ft(r)}return o}let i=po(t,e);for(;i&&er(i)&&_e(i);)i=po(i,e);return i&&St(i)&&_e(i)&&!je(i)?o:i||or(t)||o}const fr=async function(t){const e=this.getOffsetParent||Ro,o=this.getDimensions,i=await o(t.floating);return{reference:pr(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function mr(t){return Y(t).direction==="rtl"}const Jt={convertOffsetParentRelativeRectToViewportRelativeRect:sr,getDocumentElement:et,getClippingRect:ur,getOffsetParent:Ro,getElementRects:fr,getClientRects:nr,getDimensions:hr,getScale:At,isElement:X,isRTL:mr};function br(t,e){let o=null,i;const r=et(t);function s(){var c;clearTimeout(i),(c=o)==null||c.disconnect(),o=null}function n(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),s();const{left:d,top:h,width:p,height:v}=t.getBoundingClientRect();if(c||e(),!p||!v)return;const f=Kt(h),b=Kt(r.clientWidth-(d+p)),g=Kt(r.clientHeight-(h+v)),_=Kt(d),k={rootMargin:-f+"px "+-b+"px "+-g+"px "+-_+"px",threshold:I(0,ut(1,u))||1};let E=!0;function z(L){const M=L[0].intersectionRatio;if(M!==u){if(!E)return n();M?n(!1,M):i=setTimeout(()=>{n(!1,1e-7)},1e3)}E=!1}try{o=new IntersectionObserver(z,{...k,root:r.ownerDocument})}catch{o=new IntersectionObserver(z,k)}o.observe(t)}return n(!0),s}function vr(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,d=We(t),h=r||s?[...d?qt(d):[],...qt(e)]:[];h.forEach(w=>{r&&w.addEventListener("scroll",o,{passive:!0}),s&&w.addEventListener("resize",o)});const p=d&&c?br(d,o):null;let v=-1,f=null;n&&(f=new ResizeObserver(w=>{let[k]=w;k&&k.target===d&&f&&(f.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var E;(E=f)==null||E.observe(e)})),o()}),d&&!u&&f.observe(d),f.observe(e));let b,g=u?wt(t):null;u&&_();function _(){const w=wt(t);g&&(w.x!==g.x||w.y!==g.y||w.width!==g.width||w.height!==g.height)&&o(),g=w,b=requestAnimationFrame(_)}return o(),()=>{var w;h.forEach(k=>{r&&k.removeEventListener("scroll",o),s&&k.removeEventListener("resize",o)}),p==null||p(),(w=f)==null||w.disconnect(),f=null,u&&cancelAnimationFrame(b)}}const gr=Ji,yr=Qi,wr=Gi,fo=tr,_r=Ki,xr=(t,e,o)=>{const i=new Map,r={platform:Jt,...o},s={...r.platform,_c:i};return Yi(t,e,{...r,platform:s})};function kr(t){return Cr(t)}function xe(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Cr(t){for(let e=t;e;e=xe(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=xe(t);e;e=xe(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function $r(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var A=class extends R{constructor(){super(...arguments),this.localize=new Tt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,n=0,c=0,u=0,d=0,h=0;o?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,n=t.bottom,c=e.left,u=e.top,d=e.right,h=e.top):(i=e.left,r=e.bottom,s=e.right,n=e.bottom,c=t.left,u=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,n=e.top,c=t.right,u=t.bottom,d=e.left,h=e.bottom):(i=e.right,r=e.top,s=t.left,n=t.top,c=e.right,u=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||$r(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=vr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[gr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(fo({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(wr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(yr({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(fo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(_r({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Jt.getOffsetParent(o,kr):Jt.getOffsetParent;xr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ue(kt({},Jt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const n=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const u=r.arrow.x,d=r.arrow.y;let h="",p="",v="",f="";if(this.arrowPlacement==="start"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?b:"",f=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":b,f=n?b:"",v=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof u=="number"?`${u}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:v,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};A.styles=[tt,Mi];a([N(".popup")],A.prototype,"popup",2);a([N(".popup__arrow")],A.prototype,"arrowEl",2);a([l()],A.prototype,"anchor",2);a([l({type:Boolean,reflect:!0})],A.prototype,"active",2);a([l({reflect:!0})],A.prototype,"placement",2);a([l({reflect:!0})],A.prototype,"strategy",2);a([l({type:Number})],A.prototype,"distance",2);a([l({type:Number})],A.prototype,"skidding",2);a([l({type:Boolean})],A.prototype,"arrow",2);a([l({attribute:"arrow-placement"})],A.prototype,"arrowPlacement",2);a([l({attribute:"arrow-padding",type:Number})],A.prototype,"arrowPadding",2);a([l({type:Boolean})],A.prototype,"flip",2);a([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],A.prototype,"flipFallbackPlacements",2);a([l({attribute:"flip-fallback-strategy"})],A.prototype,"flipFallbackStrategy",2);a([l({type:Object})],A.prototype,"flipBoundary",2);a([l({attribute:"flip-padding",type:Number})],A.prototype,"flipPadding",2);a([l({type:Boolean})],A.prototype,"shift",2);a([l({type:Object})],A.prototype,"shiftBoundary",2);a([l({attribute:"shift-padding",type:Number})],A.prototype,"shiftPadding",2);a([l({attribute:"auto-size"})],A.prototype,"autoSize",2);a([l()],A.prototype,"sync",2);a([l({type:Object})],A.prototype,"autoSizeBoundary",2);a([l({attribute:"auto-size-padding",type:Number})],A.prototype,"autoSizePadding",2);a([l({attribute:"hover-bridge",type:Boolean})],A.prototype,"hoverBridge",2);var T=class extends R{constructor(){super(),this.localize=new Tt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=no(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=no(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=te(this,"tooltip.show",{dir:this.localize.dir()});await oe(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body);const{keyframes:o,options:i}=te(this,"tooltip.hide",{dir:this.localize.dir()});await oe(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return m`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${W({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};T.styles=[tt,Vi];T.dependencies={"sl-popup":A};a([N("slot:not([name])")],T.prototype,"defaultSlot",2);a([N(".tooltip__body")],T.prototype,"body",2);a([N("sl-popup")],T.prototype,"popup",2);a([l()],T.prototype,"content",2);a([l()],T.prototype,"placement",2);a([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2);a([l({type:Number})],T.prototype,"distance",2);a([l({type:Boolean,reflect:!0})],T.prototype,"open",2);a([l({type:Number})],T.prototype,"skidding",2);a([l()],T.prototype,"trigger",2);a([l({type:Boolean})],T.prototype,"hoist",2);a([q("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);a([q(["content","distance","hoist","placement","skidding"])],T.prototype,"handleOptionsChange",1);a([q("disabled")],T.prototype,"handleDisabledChange",1);he("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});he("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});T.define("sl-tooltip");B.define("sl-icon");var Wt=function(t,e,o,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let _t=class extends nt{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return m`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Ht($o)}"
      ></sl-icon>
    `}renderFull(){return m` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?m` <span style="margin-bottom: 8px">${this.headline} </span>`:m``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return m`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};_t.styles=[bt,P`
      :host {
        display: flex;
        flex: 1;
      }
    `];Wt([l({attribute:"tooltip"})],_t.prototype,"tooltip",void 0);Wt([l()],_t.prototype,"headline",void 0);Wt([l()],_t.prototype,"error",void 0);Wt([l({attribute:"icon-size"})],_t.prototype,"iconSize",void 0);_t=Wt([mt("display-error")],_t);var Er=P`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Io=class extends R{constructor(){super(...arguments),this.hasSlotController=new pe(this,"footer","header","image")}render(){return m`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Io.styles=[tt,Er];Io.define("sl-card");var Ar=P`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,ot=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=m`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=m``;return this.initials?e=m`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=m`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,m`
      <div
        part="base"
        class=${W({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};ot.styles=[tt,Ar];ot.dependencies={"sl-icon":B};a([K()],ot.prototype,"hasError",2);a([l()],ot.prototype,"image",2);a([l()],ot.prototype,"label",2);a([l()],ot.prototype,"initials",2);a([l()],ot.prototype,"loading",2);a([l({reflect:!0})],ot.prototype,"shape",2);a([q("image")],ot.prototype,"handleImageChange",1);ot.define("sl-avatar");var Lr=P`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,C=class extends R{constructor(){super(...arguments),this.formControlController=new Eo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new pe(this,"[default]","prefix","suffix"),this.localize=new Tt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ve}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Qt`a`:Qt`button`;return Zt`
      <${e}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:this.type)}
        title=${this.title}
        name=${x(t?void 0:this.name)}
        value=${x(t?void 0:this.value)}
        href=${x(t&&!this.disabled?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t?this.rel:void 0)}
        role=${x(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Zt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};C.styles=[tt,Lr];C.dependencies={"sl-icon":B,"sl-spinner":Me};a([N(".button")],C.prototype,"button",2);a([K()],C.prototype,"hasFocus",2);a([K()],C.prototype,"invalid",2);a([l()],C.prototype,"title",2);a([l({reflect:!0})],C.prototype,"variant",2);a([l({reflect:!0})],C.prototype,"size",2);a([l({type:Boolean,reflect:!0})],C.prototype,"caret",2);a([l({type:Boolean,reflect:!0})],C.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],C.prototype,"loading",2);a([l({type:Boolean,reflect:!0})],C.prototype,"outline",2);a([l({type:Boolean,reflect:!0})],C.prototype,"pill",2);a([l({type:Boolean,reflect:!0})],C.prototype,"circle",2);a([l()],C.prototype,"type",2);a([l()],C.prototype,"name",2);a([l()],C.prototype,"value",2);a([l()],C.prototype,"href",2);a([l()],C.prototype,"target",2);a([l()],C.prototype,"rel",2);a([l()],C.prototype,"download",2);a([l()],C.prototype,"form",2);a([l({attribute:"formaction"})],C.prototype,"formAction",2);a([l({attribute:"formenctype"})],C.prototype,"formEnctype",2);a([l({attribute:"formmethod"})],C.prototype,"formMethod",2);a([l({attribute:"formnovalidate",type:Boolean})],C.prototype,"formNoValidate",2);a([l({attribute:"formtarget"})],C.prototype,"formTarget",2);a([q("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);C.define("sl-button");function Sr(t){let i=t.width,r=t.height;i>r?i>300&&(r=r*(300/i),i=300):r>300&&(i=i*(300/r),r=300);const s=document.createElement("canvas");return s.width=i,s.height=r,s.getContext("2d").drawImage(t,0,0,i,r),s.toDataURL()}var it=function(t,e,o,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let H=class extends nt{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.label=$("Avatar"),this._controller=new Ei(this)}reportValidity(){const e=this.required!==!1&&!this.value;return e&&(this._errorInput.setCustomValidity("Avatar is required"),this._errorInput.reportValidity()),!e}reset(){this.value=this.defaultValue}onAvatarUploaded(){if(this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const e=new FileReader;e.onload=o=>{var r;const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{this.value=Sr(i),this._avatarFilePicker.value=""},i.src=(r=o.target)==null?void 0:r.result,this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:i.src}}))},e.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?m`
        <div
          class="column"
          style="align-items: center; height: 50px"
          @click=${()=>{this.value=void 0}}
        >
          <sl-tooltip .content=${$("Clear")}>
            <sl-avatar
              image="${this.value}"
              alt="Avatar"
              .shape=${this.shape}
              initials=""
            ></sl-avatar
          ></sl-tooltip>
        </div>
      `:m` <div class="column" style="align-items: center;">
        <sl-button
          .disabled=${this.disabled}
          variant="default"
          size="large"
          circle
          @click=${()=>this._avatarFilePicker.click()}
        >
          <sl-icon
            src="${Ht(Pi)}"
            .label=${$("Add avatar image")}
          ></sl-icon>
        </sl-button>
      </div>`}render(){return m`<input
        type="file"
        id="avatar-file-picker"
        style="display: none"
        @change=${this.onAvatarUploaded}
      />
      <div class="column" style="position: relative; align-items: center">
        <input
          id="error-input"
          style="position: absolute; z-index: -1; left: 50%; top: 30px; height: 0; width: 0"
        />
        ${this.label!==""?m`
              <span
                style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
                >${this.label}${this.required!==!1?" *":""}</span
              >
            `:m``}
        ${this.renderAvatar()}
      </div>`}};H.styles=bt;it([l({attribute:"name"})],H.prototype,"name",void 0);it([l()],H.prototype,"required",void 0);it([l()],H.prototype,"shape",void 0);it([l()],H.prototype,"value",void 0);it([l()],H.prototype,"disabled",void 0);it([l()],H.prototype,"defaultValue",void 0);it([l()],H.prototype,"label",void 0);it([N("#avatar-file-picker")],H.prototype,"_avatarFilePicker",void 0);it([N("#error-input")],H.prototype,"_errorInput",void 0);H=it([mt("select-avatar")],H);let xt=class extends jt(nt){constructor(){super(...arguments),this.allowCancel=!1}avatarMode(){return this.store.config.avatarMode==="avatar-required"||this.store.config.avatarMode==="avatar-optional"}fireSaveProfile(e){const o=e.nickname;delete e.nickname;const i={fields:e,nickname:o};this.dispatchEvent(new CustomEvent("save-profile",{detail:{profile:i},bubbles:!0,composed:!0}))}fireCancel(){this.dispatchEvent(new CustomEvent("cancel-edit-profile",{bubbles:!0,composed:!0}))}renderField(e){var o;return m`
			<sl-input
				name="${e.name}"
				.required=${e.required}
				.label=${e.label}
				.value=${((o=this.profile)===null||o===void 0?void 0:o.entry.fields[e.name])||""}
				style="margin-bottom: 16px;"
			></sl-input>
		`}render(){var e,o,i;return m`
			<form
				id="profile-form"
				class="column"
				${Li(r=>this.fireSaveProfile(r))}
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; margin-bottom: 16px"
				>
					${this.avatarMode()?m` <select-avatar
								name="avatar"
								.value=${((e=this.profile)===null||e===void 0?void 0:e.entry.fields.avatar)||void 0}
								.required=${this.store.config.avatarMode==="avatar-required"}
							></select-avatar>`:m``}

					<sl-input
						name="nickname"
						.label=${$("Nickname")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.value=${((o=this.profile)===null||o===void 0?void 0:o.entry.nickname)||""}
						.helpText=${$(Ho`Min. ${this.store.config.minNicknameLength} characters`)}
						style="margin-left: 16px;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(r=>this.renderField(r))}

				<div class="row" style="margin-top: 8px;">
					${this.allowCancel?m`
								<sl-button
									style="flex: 1; margin-right: 6px;"
									@click=${()=>this.fireCancel()}
								>
									${$("Cancel")}
								</sl-button>
							`:m``}

					<sl-button style="flex: 1;" variant="primary" type="submit"
						>${(i=this.saveProfileLabel)!==null&&i!==void 0?i:$("Save Profile")}
					</sl-button>
				</div>
			</form>
		`}};xt.styles=[bt];S([l()],xt.prototype,"profile",void 0);S([l({type:String,attribute:"save-profile-label"})],xt.prototype,"saveProfileLabel",void 0);S([Pt({context:ze,subscribe:!0}),l()],xt.prototype,"store",void 0);S([l({type:Boolean,attribute:"allow-cancel"})],xt.prototype,"allowCancel",void 0);xt=S([Te(),mt("edit-profile")],xt);let de=class extends jt(nt){async createProfile(e){try{await this.store.client.createProfile(e),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:e},bubbles:!0,composed:!0}))}catch(o){console.error(o),re($("Error creating the profile"))}}render(){return m`
      <sl-card>
        <div class="column">
          <span
            class="title"
            style="margin-bottom: 16px; align-self: flex-start"
            >${$("Create Profile")}</span
          >
          <edit-profile
            .saveProfileLabel=${$("Create Profile")}
            .store=${this.store}
            @save-profile=${e=>this.createProfile(e.detail.profile)}
          ></edit-profile></div
      ></sl-card>
    `}};de.styles=bt;S([Pt({context:ze,subscribe:!0}),l()],de.prototype,"store",void 0);de=S([Te(),mt("create-profile")],de);let zt=class extends jt(nt){constructor(){super(...arguments),this.view="question"}renderContent(){return this.linkedDevicesStore?this.view==="create-profile"?m`
				<div class="column" style="align-items: start">
					<sl-button
						variant="text"
						@click=${()=>{this.view="question"}}
						style="margin-bottom: 12px"
					>
						<sl-icon
							slot="prefix"
							.src=${Ht(lo)}
						></sl-icon>
						${$("Back")}</sl-button
					>
					<create-profile></create-profile>
				</div>
			`:this.view==="link-device"?m` <div class="column" style="align-items: start">
				<sl-button
					variant="text"
					@click=${()=>{this.view="question"}}
					style="margin-bottom: 12px"
				>
					<sl-icon slot="prefix" .src=${Ht(lo)}></sl-icon>
					${$("Back")}</sl-button
				>
				<link-devices-requestor
					@device-linked=${async e=>{const o=e.detail.agentPubKey,i=await this.store.client.getAgentProfile(o);if(i.length>0){const s=i.sort((n,c)=>c.timestamp-n.timestamp)[0].target;await this.store.client.linkMyAgentToProfile(s)}}}
				></link-devices-requestor>
			</div>`:m`
			<sl-card>
				<div class="column" style="gap: 12px">
					<span class="title"> ${$("Profile Setup")} </span>
					<span>
						${$("Have you already created a profile in this app?")}
					</span>

					<div class="row" style="gap: 12px">
						<sl-button @click=${()=>this.view="create-profile"}
							>${$("No, create a new profile")}
						</sl-button>
						<sl-button
							variant="primary"
							@click=${()=>this.view="link-device"}
							>${$("Yes! Link this device")}
						</sl-button>
					</div>
				</div>
			</sl-card>
		`:m` <create-profile></create-profile> `}renderPrompt(e){return e?m`<slot></slot>`:m`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const e=this.store.myProfile.get();switch(e.status){case"pending":return m`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return m`<display-error
					.headline=${$("Error fetching your profile.")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderPrompt(e.value!==void 0)}}};zt.styles=[bt,P`
			:host {
				display: flex;
				flex: 1;
			}
		`];S([Pt({context:ze,subscribe:!0}),l()],zt.prototype,"store",void 0);S([Pt({context:Pe,subscribe:!0}),l()],zt.prototype,"linkedDevicesStore",void 0);S([K()],zt.prototype,"view",void 0);zt=S([Te(),mt("profile-prompt")],zt);export{zt as ProfilePrompt};
