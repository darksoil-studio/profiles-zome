import{i as E,r as K,x as v,T as J}from"./lit-element.CuGozQnE.js";import{n as c}from"./property.BHALj7b8.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=e=>(...t)=>({_$litDirective$:e,values:t});class ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}function De(e){return`data:image/svg+xml;utf8,${te(e)}`}function te(e){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${e}'></path></svg>`}var Ue="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",qe="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",Ne="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",Ze="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Fe="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",We="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",Ge="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Ye="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e){return c({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ke(e,t){return(r,s,i)=>{const a=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};return re(r,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=(e,...t)=>({strTag:!0,strings:e,values:t}),Je=se,ie=e=>typeof e!="string"&&"strTag"in e,ae=(e,t,r)=>{let s=e[0];for(let i=1;i<e.length;i++)s+=t[i-1],s+=e[i];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=e=>ie(e)?ae(e.strings,e.values):e;let Qe=ne;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oe=class{constructor(t){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(O,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(O,this.__litLocalizeEventHandler)}};const le=e=>e.addController(new oe(e)),ce=le;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=()=>(e,t)=>(e.addInitializer(ce),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de{constructor(){this.settled=!1,this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let he=new de;he.resolve();var ue=E`
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
`,L="";function V(e){L=e}function ve(e=""){if(!L){const t=[...document.getElementsByTagName("script")],r=t.find(s=>s.hasAttribute("data-shoelace"));if(r)V(r.getAttribute("data-shoelace"));else{const s=t.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let i="";s&&(i=s.getAttribute("src")),V(i.split("/").slice(0,-1).join("/"))}}return L.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var ge={name:"default",resolver:e=>ve(`assets/icons/${e}.svg`)},fe=ge,I={caret:`
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
  `},pe={name:"system",resolver:e=>e in I?`data:image/svg+xml,${encodeURIComponent(I[e])}`:""},me=pe,we=[fe,me],A=[];function be(e){A.push(e)}function ye(e){A=A.filter(t=>t!==e)}function k(e){return we.find(t=>t.name===e)}var _e=E`
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
`,D=Object.defineProperty,Ce=Object.defineProperties,Le=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,U=e=>{throw TypeError(e)},R=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&R(e,r,t[r]);if(T)for(var r of T(t))Ee.call(t,r)&&R(e,r,t[r]);return e},Me=(e,t)=>Ce(e,Ae(t)),o=(e,t,r,s)=>{for(var i=s>1?void 0:s?Le(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&D(t,r,i),i},q=(e,t,r)=>t.has(e)||U("Cannot "+r),ze=(e,t,r)=>(q(e,t,"read from private field"),t.get(e)),$e=(e,t,r)=>t.has(e)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Se=(e,t,r,s)=>(q(e,t,"write to private field"),t.set(e,r),r);function z(e,t){const r=M({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:a}=s,n=Array.isArray(e)?e:[e];s.update=function(l){n.forEach(b=>{const y=b;if(l.has(y)){const H=l.get(y),P=this[y];H!==P&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](H,P)}}),a.call(this,l)}}}var N=E`
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
`,w,f=class extends K{constructor(){super(),$e(this,w,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,M({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",a=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(a=" v"+s.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,r){ze(this,w)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Se(this,w,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};w=new WeakMap;f.version="2.19.0";f.dependencies={};o([c()],f.prototype,"dir",2);o([c()],f.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,tt=e=>e.strings===void 0,Pe={},rt=(e,t=Pe)=>e._$AH=t;var p=Symbol(),m=Symbol(),_,C=new Map,d=class extends f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let s;if(t!=null&&t.spriteSheet)return this.svg=v`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?p:m}catch{return m}try{const i=document.createElement("div");i.innerHTML=await s.text();const a=i.firstElementChild;if(((r=a==null?void 0:a.tagName)==null?void 0:r.toLowerCase())!=="svg")return p;_||(_=new DOMParser);const l=_.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):p}catch{return p}}connectedCallback(){super.connectedCallback(),be(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ye(this)}getIconSource(){const e=k(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),s=r?k(this.library):void 0;if(!t){this.svg=null;return}let i=C.get(t);if(i||(i=this.resolveIcon(t,s),C.set(t,i)),!this.initialRender)return;const a=await i;if(a===m&&C.delete(t),t===this.getIconSource().url){if(He(a)){if(this.svg=a,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(a){case m:case p:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};d.styles=[N,_e];o([j()],d.prototype,"svg",2);o([c({reflect:!0})],d.prototype,"name",2);o([c()],d.prototype,"src",2);o([c()],d.prototype,"label",2);o([c({reflect:!0})],d.prototype,"library",2);o([z("label")],d.prototype,"handleLabelChange",1);o([z(["name","src","library"])],d.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=X(class extends ee{constructor(e){var t;if(super(e),e.type!==Q.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((s=this.nt)!=null&&s.has(a))&&this.st.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.st)a in t||(r.remove(a),this.st.delete(a));for(const a in t){const n=!!t[a];n===this.st.has(a)||(i=this.nt)!=null&&i.has(a)||(n?(r.add(a),this.st.add(a)):(r.remove(a),this.st.delete(a)))}return J}});var h=class extends f{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=v`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=v``;return this.initials?t=v`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=v`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,v`
      <div
        part="base"
        class=${Oe({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};h.styles=[N,ue];h.dependencies={"sl-icon":d};o([j()],h.prototype,"hasError",2);o([c()],h.prototype,"image",2);o([c()],h.prototype,"label",2);o([c()],h.prototype,"initials",2);o([c()],h.prototype,"loading",2);o([c({reflect:!0})],h.prototype,"shape",2);o([z("image")],h.prototype,"handleImageChange",1);h.define("sl-avatar");d.define("sl-icon");const x=new Set,g=new Map;let u,$="ltr",S="en";const Z=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Z){const e=new MutationObserver(W);$=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function F(...e){e.map(t=>{const r=t.$code.toLowerCase();g.has(r)?g.set(r,Object.assign(Object.assign({},g.get(r)),t)):g.set(r,t),u||(u=t)}),W()}function W(){Z&&($=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language),[...x.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ve=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){x.add(this.host)}hostDisconnected(){x.delete(this.host)}dir(){return`${this.host.dir||$}`.toLowerCase()}lang(){return`${this.host.lang||S}`.toLowerCase()}getTranslationData(t){var r,s;const i=new Intl.Locale(t.replace(/_/g,"-")),a=i==null?void 0:i.language.toLowerCase(),n=(s=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",l=g.get(`${a}-${n}`),b=g.get(a);return{locale:i,language:a,region:n,primary:l,secondary:b}}exists(t,r){var s;const{primary:i,secondary:a}=this.getTranslationData((s=r.lang)!==null&&s!==void 0?s:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||a&&a[t]||r.includeFallback&&u&&u[t])}term(t,...r){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let a;if(s&&s[t])a=s[t];else if(i&&i[t])a=i[t];else if(u&&u[t])a=u[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...r):a}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,r)}};var G={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};F(G);var Ie=G,it=class extends Ve{};F(Ie);var Y=new Map,ke=new WeakMap;function Te(e){return e??{keyframes:[],options:{duration:0}}}function B(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function at(e,t){Y.set(e,Te(t))}function nt(e,t,r){const s=ke.get(e);if(s!=null&&s[t])return B(s[t],r.dir);const i=Y.get(t);return i?B(i,r.dir):{keyframes:[],options:{duration:0}}}function ot(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}function lt(e,t,r){return new Promise(s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Me(M({},r),{duration:Re()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function ct(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Re(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function dt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}export{tt as A,rt as B,Ye as C,Ne as D,Ue as E,it as L,d as S,o as _,Qe as a,Ze as b,Fe as c,X as d,Ke as e,N as f,f as g,Oe as h,ee as i,z as j,at as k,et as l,We as m,dt as n,nt as o,lt as p,ot as q,j as r,Je as s,Q as t,qe as u,Ge as v,De as w,Me as x,M as y,ct as z};
