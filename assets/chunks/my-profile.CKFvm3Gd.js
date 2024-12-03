import{S as m,s as f,c,n as u,p as d,t as _}from"./context.C3X5h_YG.js";import{x as a,r as g}from"./lit-element.5UXQ_LNh.js";import{w as h,r as y,a as P}from"./chunk.3EPZX5HE.C5DcSmWt.js";import"./chunk.A4HUF6BS.CHf9c7Bk.js";import"./chunk.3HB7VQL2.C3Njm4zI.js";import"./profile-detail.BZIz5i67.js";import"./update-profile.Kc3JmPGH.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.C1tkqjMX.js";import"./if-defined.DjkTvaUx.js";import"./style-map.CnbC7GLw.js";import"./display-error.2dck76_Y.js";import"./agent-avatar.Durc47Oq.js";import"./chunk.EHUQAWJK.CXaVkoM5.js";import"./chunk.5KGB34TL.DAqnK4Te.js";import"./edit-profile.D0flNjGr.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends m(g){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?a`<update-profile
				@profile-updated=${()=>this._editing=!1}
				@cancel-edit-profile=${()=>this._editing=!1}
			></update-profile>`:a`
			<profile-detail .agentPubKey=${this.store.client.client.myPubKey}>
				<sl-icon-button
					src="${h(P)}"
					slot="action"
					@click=${()=>this._editing=!0}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[f];l([c({context:d,subscribe:!0}),u()],r.prototype,"store",2);l([y()],r.prototype,"_editing",2);r=l([_("my-profile")],r);export{r as MyProfile};
