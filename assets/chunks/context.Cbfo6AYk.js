var p=Object.defineProperty;var u=(t,e,s)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var d=(t,e,s)=>u(t,typeof e!="symbol"?e+"":e,s);import{S as l,u as h,f}from"./lit-element.C4EVzn6y.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t){class e extends t{constructor(){super(...arguments);d(this,"__dispose");d(this,"w",new l.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const n=this.__dispose,r=new l.Computed(()=>{super.performUpdate()});this.w.watch(r),this.__dispose=()=>{this.w.unwatch(r)},r.get(),n==null||n()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.__dispose)==null||n.call(this)}}return e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let U=class extends Event{constructor(e,s,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=s,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(t){return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:f},m=(t=b,e,s)=>{const{kind:o,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(s.name,t),o==="accessor"){const{name:a}=s;return{set(c){const i=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,i,t)},init(c){return c!==void 0&&this.P(a,void 0,t),c}}}if(o==="setter"){const{name:a}=s;return function(c){const i=this[a];e.call(this,c),this.requestUpdate(a,i,t)}}throw Error("Unsupported decorator location: "+o)};function P(t){return(e,s)=>typeof s=="object"?m(t,e,s):((o,n,r)=>{const a=n.hasOwnProperty(r);return n.constructor.createProperty(r,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(n,r):void 0})(t,e,s)}const S="hc_zome_profiles/store";export{_ as S,y as a,P as n,S as p,U as s,C as t};
