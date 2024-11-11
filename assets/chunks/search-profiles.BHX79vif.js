import{a as h,w as c,s as f,c as m,r as n,l as v,b as y}from"./routes.BYIrb7eu.js";import{F as b}from"./chunk.5KGB34TL.CMxz4LLm.js";import{a as P}from"./style-map.BsJQDmXk.js";import{x as d,r as g}from"./lit-element.C4EVzn6y.js";import{S as x,n as r,p as $,t as w}from"./context.Cbfo6AYk.js";import"./chunk.A4HUF6BS.DQ8CFEiz.js";import"./chunk.3HB7VQL2.DTe30O7m.js";import"./profile-list-item.B-n4-I46.js";import"./search-profile.CPQxYYvd.js";import"./if-defined.CvF0r0fY.js";import"./display-error.yIKwlQGE.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BbNfH_Y1.js";import"./agent-avatar.DaaJ2eQk.js";import"./profile-list-item-skeleton.EXHzJ2dh.js";var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,t=(l,i,a,o)=>{for(var s=o>1?void 0:o?_(i,a):i,p=l.length-1,u;p>=0;p--)(u=l[p])&&(s=(o?u(i,a,s):u(s))||s);return o&&s&&S(i,a,s),s};let e=class extends x(g){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=h("No agents selected yet."),this._controller=new b(this),this.excludedProfiles=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return d`
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
										.src=${c(y)}
										@click=${()=>{this.value=this.value.filter((a,o)=>o!==i),this.dispatchEvent(new CustomEvent("profiles-changed",{composed:!0,bubbles:!0,detail:{profilesHashes:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};e.styles=[f];t([r()],e.prototype,"name",2);t([r(P("default-value"))],e.prototype,"defaultValue",2);t([r()],e.prototype,"required",2);t([r()],e.prototype,"disabled",2);t([r({type:String,attribute:"field-label"})],e.prototype,"fieldLabel",2);t([r({type:String,attribute:"empty-list-placeholder"})],e.prototype,"emptyListPlaceholder",2);t([m({context:$,subscribe:!0}),r()],e.prototype,"store",2);t([r()],e.prototype,"excludedProfiles",2);t([n()],e.prototype,"value",2);e=t([v(),w("search-profiles")],e);export{e as SearchProfiles};
