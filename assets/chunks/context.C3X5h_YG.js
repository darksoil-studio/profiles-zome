var b=Object.defineProperty;var p=(s,t,e)=>t in s?b(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>p(s,typeof t!="symbol"?t+"":t,e);import{S as d,i as f,u as x,h as m}from"./lit-element.5UXQ_LNh.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(s){class t extends s{constructor(){super(...arguments);l(this,"__dispose");l(this,"w",new d.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const i=this.__dispose,r=new d.Computed(()=>{super.performUpdate()});this.w.watch(r),this.__dispose=()=>{this.w.unwatch(r)},r.get(),i==null||i()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.__dispose)==null||i.call(this)}}return t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends Event{constructor(t,e,c){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=c??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(s){return s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u{constructor(t,e,c,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,o)),this.unsubscribe=o},this.host=t,e.context!==void 0){const r=e;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=e,this.callback=c,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new v(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q({context:s,subscribe:t}){return(e,c)=>{typeof c=="object"?c.addInitializer(function(){new u(this,{context:s,callback:i=>{e.set.call(this,i)},subscribe:t})}):e.constructor.addInitializer(i=>{new u(i,{context:s,callback:r=>{i[c]=r},subscribe:t})})}}const S=[f`
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
 */const P=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:m},w=(s=g,t,e)=>{const{kind:c,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,s),c==="accessor"){const{name:o}=e;return{set(n){const a=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,a,s)},init(n){return n!==void 0&&this.P(o,void 0,s),n}}}if(c==="setter"){const{name:o}=e;return function(n){const a=this[o];t.call(this,n),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+c)};function E(s){return(t,e)=>typeof e=="object"?w(s,t,e):((c,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...c,wrapped:!0}:c),o?Object.getOwnPropertyDescriptor(i,r):void 0})(s,t,e)}const z="hc_zome_profiles/store";export{C as S,v as a,_ as b,q as c,E as n,z as p,S as s,P as t};
