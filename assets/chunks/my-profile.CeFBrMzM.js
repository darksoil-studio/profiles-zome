import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as o,s as i,c as e,n as p,t as s}from"./property.BN7dYdg1.js";import{w as m,a as l}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import"./chunk.XCHVWIJM.ZNgHpFIr.js";import"./chunk.G6R7BW5E.BTu0RqBA.js";import{x as a,r as n}from"./lit-element.B42_yqfG.js";import{p as c}from"./context.CATpzCsC.js";import"./profile-detail.BlZmDbqZ.js";import"./static.C8OjZKDB.js";import"./if-defined.P92z7vbU.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.B4UZPcCe.js";import"./display-error.BW76oNwW.js";import"./style-map.HzHOOz7V.js";import"./agent-avatar.Cln46BFC.js";let r=class extends o(n){render(){return a`
			<profile-detail .agentPubKey=${this.profilesProvider.myPubKey}>
				<sl-icon-button
					src="${m(l)}"
					slot="action"
					@click=${()=>{this.dispatchEvent(new CustomEvent("edit-profile-clicked",{bubbles:!0,composed:!0}))}}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[i];t([e({context:c,subscribe:!0}),p()],r.prototype,"profilesProvider",void 0);r=t([s("my-profile")],r);export{r as MyProfile};
