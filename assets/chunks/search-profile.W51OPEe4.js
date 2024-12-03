import{S as c,s as n,n as i,c as u,p as m,t as y}from"./context.C3X5h_YG.js";import{m as h,r as f,e as x,l as v}from"./chunk.3EPZX5HE.C5DcSmWt.js";import"./search-profile-dropdown.DSCBNiFc.js";import"./display-error.2dck76_Y.js";import{t as F,x as _,i as b,r as P}from"./lit-element.5UXQ_LNh.js";import{F as S}from"./chunk.5KGB34TL.DAqnK4Te.js";import{a as g}from"./style-map.CnbC7GLw.js";import"./profile-list-item-skeleton.5o9T4hRj.js";import"./if-defined.DjkTvaUx.js";import"./join-map.BVp59qhV.js";import"./agent-avatar.Durc47Oq.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var $=Object.defineProperty,V=Object.getOwnPropertyDescriptor,r=(e,s,a,o)=>{for(var l=o>1?void 0:o?V(s,a):s,p=e.length-1,d;p>=0;p--)(d=e[p])&&(l=(o?d(s,a,l):d(l))||l);return o&&l&&$(s,a,l),l};let t=class extends c(P){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedProfiles=[],this._controller=new S(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const e=await F(this.store.profiles.get(this.defaultValue).latestVersion);this._textField.value=(e==null?void 0:e.entry.nickname)||""}else this._textField.value=""}onProfileSelected(e,s){this.value=e,this.clearOnSelect?this._textField.value="":this._textField.value=s.entry.nickname,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:h("Search Profile");return this.required!==!1&&(e=`${e} *`),e}render(){return _`
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
		`}static get styles(){return[n,b`
				:host {
					display: flex;
				}
			`]}};r([i()],t.prototype,"name",2);r([i(g("default-value"))],t.prototype,"defaultValue",2);r([i()],t.prototype,"required",2);r([i()],t.prototype,"disabled",2);r([f()],t.prototype,"value",2);r([i({type:Boolean,attribute:"clear-on-select"})],t.prototype,"clearOnSelect",2);r([u({context:m,subscribe:!0}),i()],t.prototype,"store",2);r([i()],t.prototype,"excludedProfiles",2);r([i({type:String,attribute:"field-label"})],t.prototype,"fieldLabel",2);r([x("#textfield")],t.prototype,"_textField",2);r([f()],t.prototype,"searchFilter",2);t=r([v(),y("search-profile")],t);export{t as SearchProfile};
