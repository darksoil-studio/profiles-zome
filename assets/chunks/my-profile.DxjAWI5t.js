import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{S as o,s as i,c as e,n as p,t as m}from"./property.DW58LSP5.js";import{w as s,m as l}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./chunk.XCHVWIJM.v4ezHbAd.js";import"./chunk.G6R7BW5E.Bqo2lwOD.js";import{x as a,r as n}from"./lit-element.BYH7MJbe.js";import{p as c}from"./context.Bem5hB17.js";import"./profile-detail.DMveot6x.js";import"./static.C4gJ75QQ.js";import"./if-defined.mwbAsAHa.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";import"./holo-identicon.TaizM_pS.js";import"./display-error.euNRL-7Q.js";import"./style-map.DTEisfmL.js";import"./agent-avatar.BmnWbJVl.js";let r=class extends o(n){render(){return a`
			<profile-detail .agentPubKey=${this.profilesProvider.myPubKey}>
				<sl-icon-button
					src="${s(l)}"
					slot="action"
					@click=${()=>{this.dispatchEvent(new CustomEvent("edit-profile-clicked",{bubbles:!0,composed:!0}))}}
				></sl-icon-button>
			</profile-detail>
		`}};r.styles=[i];t([e({context:c,subscribe:!0}),p()],r.prototype,"profilesProvider",void 0);r=t([m("my-profile")],r);export{r as MyProfile};
