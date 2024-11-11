import{w as a,s as f,c,r as u,m as d}from"./routes.CvbBlhb8.js";import{x as m,r as _}from"./lit-element.zQEcut6i.js";import{S as g,n as h,p as y,t as P}from"./context.BN7aSfUy.js";import"./chunk.A4HUF6BS.B1rhCyUw.js";import"./chunk.3HB7VQL2.P-Vm2XOs.js";import"./profile-detail._0i93tNt.js";import"./update-profile.D7VLlgYl.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DeYcj0zK.js";import"./if-defined.BaUFMUXg.js";import"./style-map.CsfYC8sN.js";import"./display-error.D2P5EOj2.js";import"./agent-avatar.BNMyeZEB.js";import"./chunk.EHUQAWJK.fdE7sOhI.js";import"./chunk.5KGB34TL.CcnMa33U.js";import"./edit-profile.B227sAKW.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends g(_){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
				@profile-updated=${()=>this._editing=!1}
				@cancel-edit-profile=${()=>this._editing=!1}
			></update-profile>`:m`
			<profile-detail .agentPubKey=${this.store.client.client.myPubKey}>
				<sl-icon-button
					src="${a(d)}"
					slot="action"
					@click=${()=>this._editing=!0}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[f];l([c({context:y,subscribe:!0}),h()],r.prototype,"store",2);l([u()],r.prototype,"_editing",2);r=l([P("my-profile")],r);export{r as MyProfile};
