import{s as h,l as m}from"./routes.CkF5Gd-V.js";import{h as v}from"./style-map.DgzVTwIW.js";import{x as r,i as f,r as c}from"./lit-element.Boh-YGZU.js";import{S as u,n as g,t as y}from"./context.CPoyaPMH.js";import"./agent-avatar.DyMJZmJT.js";import"./display-error.BU3R3_jK.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(t,s,o,i)=>{for(var a=i>1?void 0:i?P(s,o):s,p=t.length-1,n;p>=0;p--)(n=t[p])&&(a=(i?n(s,o,a):n(a))||a);return i&&a&&$(s,o,a),a};let e=class extends u(c){constructor(){super(...arguments),this.agents=[],this.profilesHashes=[]}render(){return r`
			<div class="row avatar-group">
				${this.agents.slice(0,3).map(t=>r`<agent-avatar .agentPubKey=${t}></agent-avatar>`)}
				${this.profilesHashes.slice(0,3-this.agents.length).map(t=>r`<agent-avatar .profileHash=${t}></agent-avatar>`)}
				${this.agents.length+this.profilesHashes.length>3?r`<sl-avatar
							.initials=${`+${this.agents.length-3}`}
							style="--size: 32px"
						></sl-avatar>`:r``}
			</div>
		`}};e.styles=[f`
			.avatar-group agent-avatar:not(:first-of-type) {
				margin-left: -0.6rem;
			}
			.avatar-group sl-avatar {
				margin-left: -0.6rem;
			}
		`,h];l([g(v("agents"))],e.prototype,"agents",2);l([g()],e.prototype,"profilesHashes",2);e=l([m(),y("agents-avatars")],e);export{e as AgentsAvatars};
