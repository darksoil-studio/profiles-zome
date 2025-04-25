import{_ as r}from"./tslib.es6.kHcLnhpD.js";import{l as e}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import{S as o,s as i,n,t as m}from"./property.DW58LSP5.js";import{h as p}from"./style-map.DTEisfmL.js";import{x as t,i as g,r as l}from"./lit-element.BYH7MJbe.js";import"./agent-avatar.BmnWbJVl.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";import"./holo-identicon.TaizM_pS.js";import"./display-error.euNRL-7Q.js";import"./context.Bem5hB17.js";let a=class extends o(l){constructor(){super(...arguments),this.agents=[]}render(){return t`
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
