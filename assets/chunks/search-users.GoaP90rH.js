import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as p,s as d,n as s,c as u,t as h}from"./property.BN7dYdg1.js";import{m as o,w as m,r as c,l as n,b as v}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import"./chunk.XCHVWIJM.ZNgHpFIr.js";import"./chunk.G6R7BW5E.BTu0RqBA.js";import{F as y}from"./chunk.AYM4DUFB.CHUL3aI4.js";import{h as b}from"./style-map.HzHOOz7V.js";import{x as i,r as f}from"./lit-element.B42_yqfG.js";import{p as g}from"./context.CATpzCsC.js";import"./profile-list-item.D2XECiYD.js";import"./search-user.BKCtwNNI.js";import"./static.C8OjZKDB.js";import"./if-defined.P92z7vbU.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./agent-avatar.Cln46BFC.js";import"./holo-identicon.B4UZPcCe.js";import"./display-error.BW76oNwW.js";import"./profile-list-item-skeleton.CjOuhNWV.js";let e=class extends p(f){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=o("No users selected yet."),this._controller=new y(this),this.excludedUsers=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return i`
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
										.src=${m(v)}
										@click=${()=>{this.value=this.value.filter((S,a)=>a!==l),this.dispatchEvent(new CustomEvent("users-changed",{composed:!0,bubbles:!0,detail:{users:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};e.styles=[d];t([s()],e.prototype,"name",void 0);t([s(b("default-value"))],e.prototype,"defaultValue",void 0);t([s()],e.prototype,"required",void 0);t([s()],e.prototype,"disabled",void 0);t([s({type:String,attribute:"label"})],e.prototype,"label",void 0);t([s({type:String,attribute:"empty-list-placeholder"})],e.prototype,"emptyListPlaceholder",void 0);t([u({context:g,subscribe:!0}),s()],e.prototype,"profilesProvider",void 0);t([s()],e.prototype,"excludedUsers",void 0);t([c()],e.prototype,"value",void 0);e=t([n(),h("search-users")],e);export{e as SearchUsers};
