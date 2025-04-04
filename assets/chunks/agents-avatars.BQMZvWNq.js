import{_ as r}from"./tslib.es6.kHcLnhpD.js";import{l as e}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import{S as o,s as i,n,t as m}from"./property.BHALj7b8.js";import{h as p}from"./style-map.FG-BVvAP.js";import{x as t,i as g,r as l}from"./lit-element.CuGozQnE.js";import"./agent-avatar.Dbvuf-Hx.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";import"./context.EJdwcjoM.js";let a=class extends o(l){constructor(){super(...arguments),this.agents=[]}render(){return t`
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
