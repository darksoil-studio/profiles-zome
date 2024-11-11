import{w as a,s as f,c,r as u,m as d}from"./routes.BYIrb7eu.js";import{x as m,r as _}from"./lit-element.C4EVzn6y.js";import{S as g,n as h,p as y,t as P}from"./context.Cbfo6AYk.js";import"./chunk.A4HUF6BS.DQ8CFEiz.js";import"./chunk.3HB7VQL2.DTe30O7m.js";import"./profile-detail.C4fRGsGA.js";import"./update-profile.B9w1eOZs.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BbNfH_Y1.js";import"./if-defined.CvF0r0fY.js";import"./style-map.BsJQDmXk.js";import"./display-error.yIKwlQGE.js";import"./agent-avatar.DaaJ2eQk.js";import"./chunk.EHUQAWJK.eplQVy3s.js";import"./chunk.5KGB34TL.CMxz4LLm.js";import"./edit-profile.Cg6hscaT.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(n,e,o,i)=>{for(var t=i>1?void 0:i?v(e,o):e,p=n.length-1,s;p>=0;p--)(s=n[p])&&(t=(i?s(e,o,t):s(t))||t);return i&&t&&b(e,o,t),t};let r=class extends g(_){constructor(){super(...arguments),this._editing=!1}render(){return this._editing?m`<update-profile
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
