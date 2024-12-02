import{l as h}from"./chunk.3EPZX5HE.C1srMtB5.js";import{S as m,s as v,n as g,t as f}from"./context.mFPcU32w.js";import{h as c}from"./style-map.BFvwMIfC.js";import{x as r,i as u,r as y}from"./lit-element.CPJkn-Wj.js";import"./agent-avatar.CIqkkqE6.js";import"./display-error.D_SbPTj7.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(t,s,o,i)=>{for(var a=i>1?void 0:i?P(s,o):s,p=t.length-1,n;p>=0;p--)(n=t[p])&&(a=(i?n(s,o,a):n(a))||a);return i&&a&&$(s,o,a),a};let e=class extends m(y){constructor(){super(...arguments),this.agents=[],this.profilesHashes=[]}render(){return r`
			<div class="row avatar-group">
				${this.agents.slice(0,3).map(t=>r`<agent-avatar .agentPubKey=${t}></agent-avatar>`)}
				${this.profilesHashes.slice(0,3-this.agents.length).map(t=>r`<agent-avatar .profileHash=${t}></agent-avatar>`)}
				${this.agents.length+this.profilesHashes.length>3?r`<sl-avatar
							.initials=${`+${this.agents.length-3}`}
							style="--size: 32px"
						></sl-avatar>`:r``}
			</div>
		`}};e.styles=[u`
			.avatar-group agent-avatar:not(:first-of-type) {
				margin-left: -0.6rem;
			}
			.avatar-group sl-avatar {
				margin-left: -0.6rem;
			}
		`,v];l([g(c("agents"))],e.prototype,"agents",2);l([g()],e.prototype,"profilesHashes",2);e=l([h(),f("agents-avatars")],e);export{e as AgentsAvatars};
