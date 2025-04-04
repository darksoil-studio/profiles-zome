import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as o,s as i,c as e,n as p,t as m}from"./property.BHALj7b8.js";import{w as s,m as l}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import"./chunk.XCHVWIJM.C9LAvM16.js";import"./chunk.G6R7BW5E.CMG7VnhJ.js";import{x as a,r as n}from"./lit-element.CuGozQnE.js";import{p as c}from"./context.EJdwcjoM.js";import"./profile-detail.BGoBuaNt.js";import"./static.C0deb9nV.js";import"./if-defined._SvckkjQ.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";import"./style-map.FG-BVvAP.js";import"./agent-avatar.Dbvuf-Hx.js";let r=class extends o(n){render(){return a`
			<profile-detail .agentPubKey=${this.profilesProvider.myPubKey}>
				<sl-icon-button
					src="${s(l)}"
					slot="action"
					@click=${()=>{this.dispatchEvent(new CustomEvent("edit-profile-clicked",{bubbles:!0,composed:!0}))}}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[i];t([e({context:c,subscribe:!0}),p()],r.prototype,"profilesProvider",void 0);r=t([m("my-profile")],r);export{r as MyProfile};
