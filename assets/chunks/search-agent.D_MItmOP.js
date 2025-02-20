import{S as c,s as u,n as l,c as m,p as y,t as x}from"./context.DzK0tg0I.js";import{m as h,r as n,e as v,l as F}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import"./search-profile-dropdown.7xV0uwFr.js";import"./display-error.BiYNJWRJ.js";import{t as f,x as _,i as b,r as P}from"./lit-element.DEsU9Zn3.js";import{F as g}from"./chunk.AYM4DUFB.BpqAQD3r.js";import"./holo-identicon.DsBMJyu4.js";import{h as S}from"./style-map.Co6E1u6x.js";import"./profile-list-item-skeleton.Gk6kakif.js";import"./if-defined.BPuz0jc1.js";import"./join-map.DvhkC83n.js";import"./agent-avatar.BglyvhJH.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(e,i,a,o)=>{for(var s=o>1?void 0:o?w(i,a):i,p=e.length-1,d;p>=0;p--)(d=e[p])&&(s=(o?d(i,a,s):d(s))||s);return o&&s&&$(i,a,s),s};let t=class extends c(P){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedProfiles=[],this._controller=new g(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const e=await f(this.store.profileForAgent.get(this.defaultValue));if(e){const i=await f(e.latestVersion);this._textField.value=(i==null?void 0:i.entry.nickname)||""}}else this._textField.value=""}onProfileSelected(e,i){this.value=i.action.author,this.clearOnSelect?this._textField.value="":this._textField.value=i.entry.nickname,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:h("Search Profile");return this.required!==!1&&(e=`${e} *`),e}render(){return _`
			<div style="flex: 1; display: flex;">
				<search-profile-dropdown
					id="dropdown"
					.open=${this.searchFilter.length>=3}
					style="flex: 1"
					.excludedProfiles=${this.excludedProfiles}
					.searchFilter=${this.searchFilter}
					@profile-selected=${e=>this.onProfileSelected(e.detail.profileHash,e.detail.profile)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${h("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-profile-dropdown>
			</div>
		`}static get styles(){return[u,b`
				:host {
					display: flex;
				}
			`]}};r([l()],t.prototype,"name",2);r([l(S("default-value"))],t.prototype,"defaultValue",2);r([l()],t.prototype,"required",2);r([l()],t.prototype,"disabled",2);r([n()],t.prototype,"value",2);r([l({type:Boolean,attribute:"clear-on-select"})],t.prototype,"clearOnSelect",2);r([m({context:y,subscribe:!0}),l()],t.prototype,"store",2);r([l()],t.prototype,"excludedProfiles",2);r([l({type:String,attribute:"field-label"})],t.prototype,"fieldLabel",2);r([v("#textfield")],t.prototype,"_textField",2);r([n()],t.prototype,"searchFilter",2);t=r([F(),x("search-agent")],t);export{t as SearchAgent};
