var b=Object.defineProperty;var p=(s,t,e)=>t in s?b(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>p(s,typeof t!="symbol"?t+"":t,e);import{S as d,i as f,u as x,f as m}from"./lit-element.B42_yqfG.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(s){class t extends s{constructor(){super(...arguments);l(this,"__dispose");l(this,"w",new d.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const i=this.__dispose,c=new d.Computed(()=>{super.performUpdate()});this.w.watch(c),this.__dispose=()=>{this.w.unwatch(c)},c.get(),i==null||i()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.__dispose)==null||i.call(this)}}return t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(s){return s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u{constructor(t,e,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(c,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=c,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(c,o)),this.unsubscribe=o},this.host=t,e.context!==void 0){const c=e;this.context=c.context,this.callback=c.callback,this.subscribe=c.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new v(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P({context:s,subscribe:t}){return(e,r)=>{typeof r=="object"?r.addInitializer(function(){new u(this,{context:s,callback:i=>{e.set.call(this,i)},subscribe:t})}):e.constructor.addInitializer(i=>{new u(i,{context:s,callback:c=>{i[r]=c},subscribe:t})})}}const S=[f`
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
  `];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends Event{constructor(t){super(h.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}h.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:m},w=(s=g,t,e)=>{const{kind:r,metadata:i}=e;let c=globalThis.litPropertyMetadata.get(i);if(c===void 0&&globalThis.litPropertyMetadata.set(i,c=new Map),c.set(e.name,s),r==="accessor"){const{name:o}=e;return{set(n){const a=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,a,s)},init(n){return n!==void 0&&this.P(o,void 0,s),n}}}if(r==="setter"){const{name:o}=e;return function(n){const a=this[o];t.call(this,n),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+r)};function E(s){return(t,e)=>typeof e=="object"?w(s,t,e):((r,i,c)=>{const o=i.hasOwnProperty(c);return i.constructor.createProperty(c,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,c):void 0})(s,t,e)}export{U as S,C as a,v as b,P as c,E as n,S as s,_ as t};
