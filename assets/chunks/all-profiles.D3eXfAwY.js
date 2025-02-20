import{i as m,x as l,m as h,p as g,e as f,r as y}from"./lit-element.DEsU9Zn3.js";import{n as d,S as b,s as P,c as _,p as x,t as w}from"./context.DzK0tg0I.js";import{f as k,_ as u,j as C,g as S,m as v,l as $}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import"./display-error.BiYNJWRJ.js";import{j as A}from"./join-map.DvhkC83n.js";import"./agent-avatar.BglyvhJH.js";import"./profile-list-item-skeleton.Gk6kakif.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.DsBMJyu4.js";import"./style-map.Co6E1u6x.js";var j=m`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,a=class extends S{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};a.styles=[k,j];u([d({type:Boolean,reflect:!0})],a.prototype,"vertical",2);u([C("vertical")],a.prototype,"handleVerticalChange",1);a.define("sl-divider");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*E(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield r?t(i):t),i++,yield s}}var O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,p=(e,t,r,i)=>{for(var s=i>1?void 0:i?V(t,r):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(i?c(t,r,s):c(s))||s);return i&&s&&O(t,r,s),s};let o=class extends b(y){constructor(){super(...arguments),this.excludedProfiles=[]}initials(e){return e.split(" ").map(t=>t[0]).join("")}fireAgentSelected(e){e&&this.dispatchEvent(new CustomEvent("profile-selected",{bubbles:!0,composed:!0,detail:{profileHash:e}}))}renderList(e){return e.size===0?l`<span>${v("There are no profiles created yet.")}</span>`:l`
			<div class="column" style="flex: 1;">
				${E(Array.from(e.entries()).map(([t,r])=>l`
							<div
								class="row"
								style="align-items: center; gap: 8px"
								@click=${()=>this.fireAgentSelected(t)}
							>
								<agent-avatar .profileHash=${t}> </agent-avatar
								><span>${r==null?void 0:r.entry.nickname}</span>
							</div>
						`),()=>l`<sl-divider></sl-divider>`)}
			</div>
		`}allProfiles(){const e=this.store.allProfiles.get();return e.status!=="completed"?e:A(h(g(e.value,(r,i)=>!this.excludedProfiles.find(s=>f(s)===f(i))),r=>r.latestVersion.get()))}render(){const e=this.allProfiles();switch(e.status){case"pending":return l`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return l`<display-error
					.headline=${v("Error fetching the profiles for all agents")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(e.value)}}};o.styles=[P,m`
			:host {
				display: flex;
			}
		`];p([_({context:x,subscribe:!0}),d()],o.prototype,"store",2);p([d()],o.prototype,"excludedProfiles",2);o=p([$(),w("all-profiles")],o);export{o as AllProfiles};
