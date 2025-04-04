import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as p,s as d,n as s,c as u,t as m}from"./property.BHALj7b8.js";import{a as o,w as c,r as h,l as n,b as v}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import"./chunk.XCHVWIJM.C9LAvM16.js";import"./chunk.G6R7BW5E.CMG7VnhJ.js";import{F as y}from"./chunk.AYM4DUFB.Q-d1RIVt.js";import{a as b}from"./style-map.FG-BVvAP.js";import{x as i,r as f}from"./lit-element.CuGozQnE.js";import{p as g}from"./context.EJdwcjoM.js";import"./profile-list-item.Covxjd_h.js";import"./search-user.CGGc5UXU.js";import"./static.C0deb9nV.js";import"./if-defined._SvckkjQ.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./agent-avatar.Dbvuf-Hx.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";import"./profile-list-item-skeleton.XMTKtiJT.js";import"./search-user-dropdown.B254uDF-.js";let e=class extends p(f){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=o("No users selected yet."),this._controller=new y(this),this.excludedUsers=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return i`
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
