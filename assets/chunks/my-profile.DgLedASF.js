import{w as a,s as f,c,r as u,m as d}from"./routes.Ba3pFJcu.js";import{x as m,r as _}from"./lit-element.DlPO3IHk.js";import{S as g,n as h,p as y,t as P}from"./context.DV-VVxul.js";import"./chunk.A4HUF6BS.CMKaq5E2.js";import"./chunk.3HB7VQL2.DYSbDUVY.js";import"./profile-detail.Di-0qDWI.js";import"./update-profile.DKftXX0K.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BJ1mINyk.js";import"./if-defined.DksOYQzp.js";import"./style-map.BuAmiDnJ.js";import"./display-error.BNACcpJz.js";import"./agent-avatar.x-dZ_L2b.js";import"./chunk.EHUQAWJK.DSaKoS_E.js";import"./chunk.5KGB34TL.Cg_slLRU.js";import"./edit-profile.M1OkDEWf.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends g(_){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
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
