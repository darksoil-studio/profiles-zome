import{_ as p}from"./tslib.es6.kHcLnhpD.js";import{x,i as b,r as v}from"../elements_profile-prompt.md.Cm8PC251.js";import{s as f,S as m,n as g,p as C,t as P}from"./property.CPLa9I-s.js";import"./framework.BbRsG_Ut.js";import"./commonjsHelpers.D6yTTuv9.js";import"./range.CRHiLbae.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:o}]of this.subscriptions)e(this.o,o)},t!==void 0&&(this.value=t)}addCallback(t,e,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class u extends w{constructor(t,e,o){var i,n;super(e.context!==void 0?e.initialValue:o),this.onContextRequest=s=>{const r=s.composedPath()[0];s.context===this.context&&r!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,r,s.subscribe))},this.onProviderRequest=s=>{const r=s.composedPath()[0];if(s.context!==this.context||r===this.host)return;const l=new Set;for(const[h,{consumerHost:d}]of this.subscriptions)l.has(h)||(l.add(h),d.dispatchEvent(new f(this.context,h,!0)));s.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new y(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O({context:c}){return(t,e)=>{const o=new WeakMap;if(typeof e=="object")return e.addInitializer(function(){o.set(this,new u(this,{context:c}))}),{get(){return t.get.call(this)},set(i){var n;return(n=o.get(this))==null||n.setValue(i),t.set.call(this,i)},init(i){var n;return(n=o.get(this))==null||n.setValue(i),i}};{t.constructor.addInitializer(s=>{o.set(s,new u(s,{context:c}))});const i=Object.getOwnPropertyDescriptor(t,e);let n;if(i===void 0){const s=new WeakMap;n={get(){return s.get(this)},set(r){o.get(this).setValue(r),s.set(this,r)},configurable:!0,enumerable:!0}}else{const s=i.set;n={...i,set(r){o.get(this).setValue(r),s==null||s.call(this,r)}}}return void Object.defineProperty(t,e,n)}}}let a=class extends m(v){render(){return x`<slot></slot>`}};a.styles=b`
    :host {
      display: contents;
    }
  `;p([O({context:C}),g({type:Object})],a.prototype,"store",void 0);a=p([P("profiles-context")],a);export{a as ProfilesContext};
