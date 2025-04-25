import{p as b}from"./context.Bem5hB17.js";import{b as v,a as m,S as g,n as h,c as C,t as w}from"./property.DW58LSP5.js";import{b as P,a as y,x as O,i as E,r as _}from"./lit-element.BYH7MJbe.js";import{p as j}from"./context.BsQ5dAI1.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class d extends V{constructor(t,o,i){var s,r;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=e=>{const n=e.composedPath()[0];e.context===this.context&&n!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,n,e.subscribe))},this.onProviderRequest=e=>{const n=e.composedPath()[0];if(e.context!==this.context||n===this.host)return;const u=new Set;for(const[p,{consumerHost:f}]of this.subscriptions)u.has(p)||(u.add(p),f.dispatchEvent(new v(this.context,p,!0)));e.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(r=(s=this.host).addController)==null||r.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new $(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x({context:c}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new d(this,{context:c}))}),{get(){return t.get.call(this)},set(s){var r;return(r=i.get(this))==null||r.setValue(s),t.set.call(this,s)},init(s){var r;return(r=i.get(this))==null||r.setValue(s),s}};{t.constructor.addInitializer(e=>{i.set(e,new d(e,{context:c}))});const s=Object.getOwnPropertyDescriptor(t,o);let r;if(s===void 0){const e=new WeakMap;r={get(){return e.get(this)},set(n){i.get(this).setValue(n),e.set(this,n)},configurable:!0,enumerable:!0}}else{const e=s.set;r={...s,set(n){i.get(this).setValue(n),e==null||e.call(this,n)}}}return void Object.defineProperty(t,o,r)}}}const R=m("tnesh/appClientContext");var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,l=(c,t,o,i)=>{for(var s=i>1?void 0:i?z(t,o):t,r=c.length-1,e;r>=0;r--)(e=c[r])&&(s=(i?e(t,o,s):e(s))||s);return i&&s&&q(t,o,s),s};let a=class extends g(_){constructor(){super(...arguments),this.zome="profiles"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">');if(!this.client)throw new Error(`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`);this.store=new P(new y(this.client,this.role,this.zome))}}render(){return O`<slot></slot>`}};a.styles=E`
		:host {
			display: contents;
		}
	`;l([x({context:j}),x({context:b}),h({type:Object})],a.prototype,"store",2);l([C({context:R,subscribe:!0})],a.prototype,"client",2);l([h()],a.prototype,"role",2);l([h()],a.prototype,"zome",2);a=l([w("profiles-context")],a);export{a as ProfilesContext};
