import{S as h,s as c,n as r,c as m,p as f,t as n}from"./context.C3X5h_YG.js";import{F as v}from"./chunk.5KGB34TL.DAqnK4Te.js";import{a as y}from"./style-map.CnbC7GLw.js";import{m as b,w as P,r as g,l as x,c as $}from"./chunk.3EPZX5HE.C5DcSmWt.js";import{x as d,r as w}from"./lit-element.5UXQ_LNh.js";import"./chunk.A4HUF6BS.CHf9c7Bk.js";import"./chunk.3HB7VQL2.C3Njm4zI.js";import"./profile-list-item.ChkyICJX.js";import"./search-profile.W51OPEe4.js";import"./if-defined.DjkTvaUx.js";import"./display-error.2dck76_Y.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.C1tkqjMX.js";import"./agent-avatar.Durc47Oq.js";import"./profile-list-item-skeleton.5o9T4hRj.js";import"./search-profile-dropdown.DSCBNiFc.js";import"./join-map.BVp59qhV.js";var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(l,i,a,o)=>{for(var s=o>1?void 0:o?_(i,a):i,p=l.length-1,u;p>=0;p--)(u=l[p])&&(s=(o?u(i,a,s):u(s))||s);return o&&s&&S(i,a,s),s};let e=class extends h(w){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=b("No agents selected yet."),this._controller=new v(this),this.excludedProfiles=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return d`
			<div class="column" style="gap: 16px">
				<search-profile
					.fieldLabel=${this.fieldLabel}
					clear-on-select
					@profile-selected=${l=>{this.value=[...this.value,l.detail.profileHash],this.dispatchEvent(new CustomEvent("profiles-changed",{composed:!0,bubbles:!0,detail:{profilesHashes:this.value}}))}}
					.excludedProfiles=${this.excludedProfiles}
				></search-profile>
				${this.value.length===0?d`<span class="placeholder">${this.emptyListPlaceholder}</span>`:this.value.map((l,i)=>d`<div class="row">
									<profile-list-item
										style="flex: 1"
										.profileHash=${l}
									></profile-list-item
									><sl-icon-button
										.src=${P($)}
										@click=${()=>{this.value=this.value.filter((a,o)=>o!==i),this.dispatchEvent(new CustomEvent("profiles-changed",{composed:!0,bubbles:!0,detail:{profilesHashes:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};e.styles=[c];t([r()],e.prototype,"name",2);t([r(y("default-value"))],e.prototype,"defaultValue",2);t([r()],e.prototype,"required",2);t([r()],e.prototype,"disabled",2);t([r({type:String,attribute:"field-label"})],e.prototype,"fieldLabel",2);t([r({type:String,attribute:"empty-list-placeholder"})],e.prototype,"emptyListPlaceholder",2);t([m({context:f,subscribe:!0}),r()],e.prototype,"store",2);t([r()],e.prototype,"excludedProfiles",2);t([g()],e.prototype,"value",2);e=t([x(),n("search-profiles")],e);export{e as SearchProfiles};
