import{s as m,m as v,c as y,l as P}from"./routes.CkF5Gd-V.js";import{a as u}from"./style-map.DgzVTwIW.js";import{r as c,x as n,i as b}from"./lit-element.Boh-YGZU.js";import{t as g,S as d,n as f,p as x}from"./context.CPoyaPMH.js";import"./agent-avatar.DyMJZmJT.js";import"./display-error.BU3R3_jK.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,O=(t,r,o,s)=>{for(var e=s>1?void 0:s?w(r,o):r,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=(s?l(r,o,e):l(e))||e);return s&&e&&_(r,o,e),e};let h=class extends d(c){render(){return n`<div class="row" style="align-items: center; width: 150px">
      <sl-skeleton
        effect="sheen"
        style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
      ></sl-skeleton
      ><sl-skeleton
        effect="sheen"
        style="flex: 1; margin: 8px; border-radius: 12px"
      >
      </sl-skeleton>
    </div>`}static get styles(){return[m,b`
        :host {
          display: flex;
        }
      `]}};h=O([g("profile-list-item-skeleton")],h);var $=Object.defineProperty,H=Object.getOwnPropertyDescriptor,p=(t,r,o,s)=>{for(var e=s>1?void 0:s?H(r,o):r,i=t.length-1,l;i>=0;i--)(l=t[i])&&(e=(s?l(r,o,e):l(e))||e);return s&&e&&$(r,o,e),e};let a=class extends d(c){profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const t=this.store.profileForAgent.get(this.agentPubKey).get();return t.status!=="completed"?t:t.value===void 0?{status:"completed",value:void 0}:t.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}render(){var r;const t=this.profile();switch(t.status){case"pending":return n`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return n`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar
							.profileHash=${this.profileHash}
							.agentPubKey=${this.agentPubKey}
						></agent-avatar>
						<span>${(r=t.value)==null?void 0:r.entry.nickname}</span>
					</div>
				`;case"error":return n`<display-error
					tooltip
					.headline=${v("Error fetching the profile")}
					.error=${t.error}
				></display-error>`}}};a.styles=[m];p([f(u("agent-pub-key"))],a.prototype,"agentPubKey",2);p([f(u("profile-hash"))],a.prototype,"profileHash",2);p([y({context:x,subscribe:!0}),f()],a.prototype,"store",2);a=p([P(),g("profile-list-item")],a);export{a as ProfileListItem};
