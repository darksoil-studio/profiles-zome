import{_ as r}from"./tslib.es6.kHcLnhpD.js";import{l as e}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import{S as o,s as i,n,t as m}from"./property.BN7dYdg1.js";import{a as p}from"./style-map.HzHOOz7V.js";import{x as t,i as g,r as l}from"./lit-element.B42_yqfG.js";import"./agent-avatar.Cln46BFC.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.B4UZPcCe.js";import"./display-error.BW76oNwW.js";import"./context.CATpzCsC.js";let a=class extends o(l){constructor(){super(...arguments),this.agents=[]}render(){return t`
			<div class="row avatar-group">
				${this.agents.slice(0,3).map(s=>t`<agent-avatar .agentPubKey=${s}></agent-avatar>`)}
				${this.agents.length>3?t`<sl-avatar
							.initials=${`+${this.agents.length-3}`}
							style="--size: 32px"
						></sl-avatar>`:t``}
			</div>
		`}};a.styles=[g`
			.avatar-group agent-avatar:not(:first-of-type) {
				margin-left: -0.6rem;
			}
			.avatar-group sl-avatar {
				margin-left: -0.6rem;
			}
		`,i];r([n(p("agents"))],a.prototype,"agents",void 0);a=r([e(),m("agents-avatars")],a);export{a as AgentsAvatars};
