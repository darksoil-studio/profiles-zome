import{a as b,b as f,S as v,c as m,n as p,p as g,t as C}from"./context.DjmyCDNo.js";import{b as w,a as P,x as y,i as O,r as E}from"./lit-element.DlPO3IHk.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class d extends _{constructor(t,o,i){var s,r;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=e=>{const n=e.composedPath()[0];e.context===this.context&&n!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,n,e.subscribe))},this.onProviderRequest=e=>{const n=e.composedPath()[0];if(e.context!==this.context||n===this.host)return;const u=new Set;for(const[h,{consumerHost:x}]of this.subscriptions)u.has(h)||(u.add(h),x.dispatchEvent(new b(this.context,h,!0)));e.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(r=(s=this.host).addController)==null||r.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new j(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V({context:c}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new d(this,{context:c}))}),{get(){return t.get.call(this)},set(s){var r;return(r=i.get(this))==null||r.setValue(s),t.set.call(this,s)},init(s){var r;return(r=i.get(this))==null||r.setValue(s),s}};{t.constructor.addInitializer(e=>{i.set(e,new d(e,{context:c}))});const s=Object.getOwnPropertyDescriptor(t,o);let r;if(s===void 0){const e=new WeakMap;r={get(){return e.get(this)},set(n){i.get(this).setValue(n),e.set(this,n)},configurable:!0,enumerable:!0}}else{const e=s.set;r={...s,set(n){i.get(this).setValue(n),e==null||e.call(this,n)}}}return void Object.defineProperty(t,o,r)}}}const $=f("tnesh/appClientContext");var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,l=(c,t,o,i)=>{for(var s=i>1?void 0:i?q(t,o):t,r=c.length-1,e;r>=0;r--)(e=c[r])&&(s=(i?e(t,o,s):e(s))||s);return i&&s&&R(t,o,s),s};let a=class extends v(E){constructor(){super(...arguments),this.zome="profiles"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">');if(!this.client)throw new Error(`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`);this.store=new w(new P(this.client,this.role,this.zome))}}render(){return y`<slot></slot>`}};a.styles=O`
		:host {
			display: contents;
		}
	`;l([m({context:$,subscribe:!0})],a.prototype,"client",2);l([V({context:g}),p({type:Object})],a.prototype,"store",2);l([p()],a.prototype,"role",2);l([p()],a.prototype,"zome",2);a=l([C("profiles-context")],a);export{a as ProfilesContext};
