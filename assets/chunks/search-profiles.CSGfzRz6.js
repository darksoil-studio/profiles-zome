import{S as d,s as c,n as r,c as m,p as f,t as n}from"./context.DzK0tg0I.js";import{F as v}from"./chunk.AYM4DUFB.BpqAQD3r.js";import{h as y}from"./style-map.Co6E1u6x.js";import{m as b,w as P,r as g,l as x,c as $}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import{x as u,r as w}from"./lit-element.DEsU9Zn3.js";import"./chunk.XCHVWIJM.uaZEXF--.js";import"./chunk.G6R7BW5E.B41jhnUh.js";import"./profile-list-item.C_qKRIbN.js";import"./search-profile.tYvQU1d8.js";import"./if-defined.BPuz0jc1.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DbTSaKL5.js";import"./agent-avatar.BglyvhJH.js";import"./holo-identicon.DsBMJyu4.js";import"./display-error.BiYNJWRJ.js";import"./profile-list-item-skeleton.Gk6kakif.js";import"./search-profile-dropdown.7xV0uwFr.js";import"./join-map.DvhkC83n.js";var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(l,i,a,o)=>{for(var s=o>1?void 0:o?_(i,a):i,p=l.length-1,h;p>=0;p--)(h=l[p])&&(s=(o?h(i,a,s):h(s))||s);return o&&s&&S(i,a,s),s};let e=class extends d(w){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=b("No agents selected yet."),this._controller=new v(this),this.excludedProfiles=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return u`
			<div class="column" style="gap: 16px">
				<search-profile
					.fieldLabel=${this.fieldLabel}
					clear-on-select
					@profile-selected=${l=>{this.value=[...this.value,l.detail.profileHash],this.dispatchEvent(new CustomEvent("profiles-changed",{composed:!0,bubbles:!0,detail:{profilesHashes:this.value}}))}}
					.excludedProfiles=${this.excludedProfiles}
				></search-profile>
				${this.value.length===0?u`<span class="placeholder">${this.emptyListPlaceholder}</span>`:this.value.map((l,i)=>u`<div class="row">
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
