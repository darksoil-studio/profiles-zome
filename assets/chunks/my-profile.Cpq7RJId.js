import{S as a,s as f,c,n as u,p as d,t as _}from"./context.DzK0tg0I.js";import{x as m,r as g}from"./lit-element.DEsU9Zn3.js";import{w as h,r as y,a as P}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import"./chunk.XCHVWIJM.uaZEXF--.js";import"./chunk.G6R7BW5E.B41jhnUh.js";import"./profile-detail.sYLCnyto.js";import"./update-profile.CUY8sxFC.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DbTSaKL5.js";import"./if-defined.BPuz0jc1.js";import"./holo-identicon.DsBMJyu4.js";import"./display-error.BiYNJWRJ.js";import"./style-map.Co6E1u6x.js";import"./agent-avatar.BglyvhJH.js";import"./chunk.IEJHVVJE.DFTAdcJa.js";import"./chunk.AYM4DUFB.BpqAQD3r.js";import"./edit-profile.DWI8hDUf.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends a(g){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
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
