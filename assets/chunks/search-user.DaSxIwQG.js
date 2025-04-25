import{_ as r}from"./tslib.es6.kHcLnhpD.js";import{S as a,s as d,n as i,c as p,t as h}from"./property.DW58LSP5.js";import{a as s,r as l,e as u,l as c}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./search-user-dropdown.JkUu7ICh.js";import"./display-error.euNRL-7Q.js";import{t as n,x as f,i as m,r as v}from"./lit-element.BYH7MJbe.js";import{F as y}from"./chunk.AYM4DUFB.s4vIXNqq.js";import"./holo-identicon.TaizM_pS.js";import{a as x}from"./style-map.DTEisfmL.js";import{p as F}from"./context.Bem5hB17.js";import"./profile-list-item-skeleton.C1XO0VII.js";import"./if-defined.mwbAsAHa.js";import"./agent-avatar.BmnWbJVl.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";let t=class extends a(v){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedUsers=[],this._controller=new y(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue&&this.defaultValue.length>0){const e=await n(this.profilesProvider.currentProfileForAgent.get(this.defaultValue[0]));e&&(this._textField.value=(e==null?void 0:e.name)||"")}else this._textField.value=""}onUserSelected(e,o){this.value=e,this.clearOnSelect?this._textField.value="":this._textField.value=o.name,this.searchFilter=""}get _label(){let e=this.label?this.label:s("Search User");return this.required!==!1&&(e=`${e} *`),e}render(){return f`
			<div style="flex: 1; display: flex;">
				<search-user-dropdown
					id="dropdown"
					.open=${this.searchFilter.length>=3}
					style="flex: 1"
					.excludedUsers=${this.excludedUsers}
					.searchFilter=${this.searchFilter}
					@user-selected=${e=>this.onUserSelected(e.detail.agents,e.detail.profile)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${s("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-user-dropdown>
			</div>
		`}static get styles(){return[d,m`
				:host {
					display: flex;
				}
			`]}};r([i()],t.prototype,"name",void 0);r([i(x("default-value"))],t.prototype,"defaultValue",void 0);r([i()],t.prototype,"required",void 0);r([i()],t.prototype,"disabled",void 0);r([l()],t.prototype,"value",void 0);r([i({type:Boolean,attribute:"clear-on-select"})],t.prototype,"clearOnSelect",void 0);r([p({context:F,subscribe:!0}),i()],t.prototype,"profilesProvider",void 0);r([i()],t.prototype,"excludedUsers",void 0);r([i({type:String,attribute:"label"})],t.prototype,"label",void 0);r([u("#textfield")],t.prototype,"_textField",void 0);r([l()],t.prototype,"searchFilter",void 0);t=r([c(),h("search-user")],t);export{t as SearchUser};
