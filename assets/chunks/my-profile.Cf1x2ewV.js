import{w as m,s as f,c,r as u,b as d}from"./routes.CkF5Gd-V.js";import{x as a,r as _}from"./lit-element.Boh-YGZU.js";import{S as b,n as g,p as h,t as y}from"./context.CPoyaPMH.js";import{S as P}from"./chunk.3HB7VQL2.C4SyEhET.js";import"./profile-detail.BInhw08n.js";import"./update-profile.CfJNIUVX.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.ckAnSLD9.js";import"./if-defined.C5wmbpVq.js";import"./style-map.DgzVTwIW.js";import"./display-error.BU3R3_jK.js";import"./agent-avatar.DyMJZmJT.js";import"./chunk.EHUQAWJK.4jNy8QLF.js";import"./edit-profile.CTjv6iP4.js";P.define("sl-icon-button");var v=Object.defineProperty,S=Object.getOwnPropertyDescriptor,n=(l,r,o,i)=>{for(var t=i>1?void 0:i?S(r,o):r,p=l.length-1,s;p>=0;p--)(s=l[p])&&(t=(i?s(r,o,t):s(t))||t);return i&&t&&v(r,o,t),t};let e=class extends b(_){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?a`<update-profile
				@profile-updated=${()=>this._editing=!1}
				@cancel-edit-profile=${()=>this._editing=!1}
			></update-profile>`:a`
			<profile-detail .agentPubKey=${this.store.client.client.myPubKey}>
				<sl-icon-button
					src="${m(d)}"
					slot="action"
					@click=${()=>this._editing=!0}
				></sl-icon-button>
			</profile-detail>
		`}};e.styles=[f];n([c({context:h,subscribe:!0}),g()],e.prototype,"store",2);n([u()],e.prototype,"_editing",2);e=n([y("my-profile")],e);export{e as MyProfile};
