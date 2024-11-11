import{w as a,s as f,c,r as u,m as d}from"./routes.C2u53c7R.js";import{x as m,r as _}from"./lit-element.BZvyF6on.js";import{S as g,n as h,p as y,t as P}from"./context.CWquvt77.js";import"./chunk.A4HUF6BS.DcQxqKb6.js";import"./chunk.3HB7VQL2.CbuTjYms.js";import"./profile-detail.BBwJUMb7.js";import"./update-profile.DtCx61dy.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DNJ2NJKo.js";import"./if-defined.BNGXSvnv.js";import"./style-map.DKLLQZNF.js";import"./display-error.Dt2FmvDY.js";import"./agent-avatar.CNNqex5T.js";import"./chunk.EHUQAWJK.CFpv79YY.js";import"./chunk.5KGB34TL.B887gycj.js";import"./edit-profile.BoZbO6jm.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends g(_){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
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
