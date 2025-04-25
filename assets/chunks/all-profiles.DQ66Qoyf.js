import"./agent-avatar.BmnWbJVl.js";import{H as h,i as m,x as o,m as y,p as g,e as u,r as b}from"./lit-element.BYH7MJbe.js";import{n as d,S as P,s as _,c as x,t as w}from"./property.DW58LSP5.js";import{f as A,_ as v,j,g as C,a as f,l as S}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./display-error.euNRL-7Q.js";import{p as $}from"./context.BsQ5dAI1.js";import"./profile-list-item-skeleton.C1XO0VII.js";import"./tslib.es6.kHcLnhpD.js";import"./holo-identicon.TaizM_pS.js";import"./style-map.DTEisfmL.js";import"./context.Bem5hB17.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";function k(e,i){{const t=e.find(s=>s&&s.status==="error");if(t)return t}{const t=e.find(s=>s&&s.status==="pending");if(t)return t}return{status:"completed",value:e.filter(t=>t.status==="completed").map(t=>t.value)}}function O(e,i){const r=Array.from(e.entries()).map(([l,a])=>a.status!=="completed"?a:{status:"completed",value:[l,a.value]}),t=k(r);return t.status!=="completed"?t:{status:"completed",value:new h(t.value)}}var E=m`
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
`,c=class extends C{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};c.styles=[A,E];v([d({type:Boolean,reflect:!0})],c.prototype,"vertical",2);v([j("vertical")],c.prototype,"handleVerticalChange",1);c.define("sl-divider");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*V(e,i){const r=typeof i=="function";if(e!==void 0){let t=-1;for(const s of e)t>-1&&(yield r?i(t):i),t++,yield s}}var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,p=(e,i,r,t)=>{for(var s=t>1?void 0:t?B(i,r):i,l=e.length-1,a;l>=0;l--)(a=e[l])&&(s=(t?a(i,r,s):a(s))||s);return t&&s&&z(i,r,s),s};let n=class extends P(b){constructor(){super(...arguments),this.excludedProfiles=[]}initials(e){return e.split(" ").map(i=>i[0]).join("")}fireAgentSelected(e){e&&this.dispatchEvent(new CustomEvent("profile-selected",{bubbles:!0,composed:!0,detail:{profileHash:e}}))}renderList(e){return e.size===0?o`<span>${f("There are no profiles created yet.")}</span>`:o`
			<div class="column" style="flex: 1;">
				${V(Array.from(e.entries()).map(([i,r])=>o`
							<div
								class="row"
								style="align-items: center; gap: 8px"
								@click=${()=>this.fireAgentSelected(i)}
							>
								<agent-avatar .agentPubKey=${r==null?void 0:r.action.author}>
								</agent-avatar
								><span>${r==null?void 0:r.entry.name}</span>
							</div>
						`),()=>o`<sl-divider></sl-divider>`)}
			</div>
		`}allProfiles(){const e=this.store.allProfiles.get();return e.status!=="completed"?e:O(y(g(e.value,(r,t)=>!this.excludedProfiles.find(s=>u(s)===u(t))),r=>r.latestVersion.get()))}render(){const e=this.allProfiles();switch(e.status){case"pending":return o`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return o`<display-error
					.headline=${f("Error fetching the profiles for all agents")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(e.value)}}};n.styles=[_,m`
			:host {
				display: flex;
			}
		`];p([x({context:$,subscribe:!0}),d()],n.prototype,"store",2);p([d()],n.prototype,"excludedProfiles",2);n=p([S(),w("all-profiles")],n);export{n as AllProfiles};
