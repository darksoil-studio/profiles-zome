import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as p,s as d,n as s,c as u,t as m}from"./property.DW58LSP5.js";import{a as o,w as c,r as h,l as n,b as v}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./chunk.XCHVWIJM.v4ezHbAd.js";import"./chunk.G6R7BW5E.Bqo2lwOD.js";import{F as y}from"./chunk.AYM4DUFB.s4vIXNqq.js";import{a as b}from"./style-map.DTEisfmL.js";import{x as i,r as f}from"./lit-element.BYH7MJbe.js";import{p as g}from"./context.Bem5hB17.js";import"./profile-list-item.D-ON7_sC.js";import"./search-user.DaSxIwQG.js";import"./static.C4gJ75QQ.js";import"./if-defined.mwbAsAHa.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";import"./agent-avatar.BmnWbJVl.js";import"./holo-identicon.TaizM_pS.js";import"./display-error.euNRL-7Q.js";import"./profile-list-item-skeleton.C1XO0VII.js";import"./search-user-dropdown.JkUu7ICh.js";let e=class extends p(f){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=o("No users selected yet."),this._controller=new y(this),this.excludedUsers=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return i`
			<div class="column" style="gap: 16px">
				<search-user
					.label=${this.label?this.label:o("Search Users")}
					clear-on-select
					@user-selected=${r=>{this.value=[...this.value,r.detail.agents],this.dispatchEvent(new CustomEvent("users-changed",{composed:!0,bubbles:!0,detail:{users:this.value}}))}}
					.excludedUsers=${this.excludedUsers}
				></search-user>
				${this.value.length===0?i`<span class="placeholder">${this.emptyListPlaceholder}</span>`:this.value.map((r,l)=>i`<div class="row">
									<profile-list-item
										style="flex: 1"
										.agentPubKey=${r[0]}
									></profile-list-item
									><sl-icon-button
										.src=${c(v)}
										@click=${()=>{this.value=this.value.filter((S,a)=>a!==l),this.dispatchEvent(new CustomEvent("users-changed",{composed:!0,bubbles:!0,detail:{users:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};e.styles=[d];t([s()],e.prototype,"name",void 0);t([s(b("default-value"))],e.prototype,"defaultValue",void 0);t([s()],e.prototype,"required",void 0);t([s()],e.prototype,"disabled",void 0);t([s({type:String,attribute:"label"})],e.prototype,"label",void 0);t([s({type:String,attribute:"empty-list-placeholder"})],e.prototype,"emptyListPlaceholder",void 0);t([u({context:g,subscribe:!0}),s()],e.prototype,"profilesProvider",void 0);t([s()],e.prototype,"excludedUsers",void 0);t([h()],e.prototype,"value",void 0);e=t([n(),m("search-users")],e);export{e as SearchUsers};
