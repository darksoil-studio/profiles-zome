import{S as a,s as f,c,n as u,p as d,t as _}from"./context.DjmyCDNo.js";import{x as m,r as g}from"./lit-element.DlPO3IHk.js";import{w as h,r as y,m as P}from"./chunk.3EPZX5HE.Di75AIhZ.js";import"./chunk.A4HUF6BS.Cr4oVZNl.js";import"./chunk.3HB7VQL2.uJwZWAdR.js";import"./profile-detail.Clj-Bqss.js";import"./update-profile.BchJc2gQ.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BJ1mINyk.js";import"./if-defined.DksOYQzp.js";import"./style-map.CASpPoSj.js";import"./display-error.YjPgTlrJ.js";import"./agent-avatar.-jkRlg5E.js";import"./chunk.EHUQAWJK.1xE-PDaP.js";import"./chunk.5KGB34TL.BQU-5FUs.js";import"./edit-profile.DFArlDSL.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends a(g){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
				@profile-updated=${()=>this._editing=!1}
				@cancel-edit-profile=${()=>this._editing=!1}
			></update-profile>`:m`
			<profile-detail .agentPubKey=${this.store.client.client.myPubKey}>
				<sl-icon-button
					src="${h(P)}"
					slot="action"
					@click=${()=>this._editing=!0}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[f];l([c({context:d,subscribe:!0}),u()],r.prototype,"store",2);l([y()],r.prototype,"_editing",2);r=l([_("my-profile")],r);export{r as MyProfile};
