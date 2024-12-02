import{b as q,s as v,n as h,t as m,c as y,S as R,p as _}from"./context.mFPcU32w.js";import{i as g,r as k,x as o,e as w,c as b,H as $}from"./lit-element.CPJkn-Wj.js";import{_ as u}from"./tslib.es6.kHcLnhpD.js";import{r as A,a,w as x,l as I,h as L}from"./chunk.3EPZX5HE.C1srMtB5.js";import"./create-profile.Fmv9SJzR.js";import"./chunk.3HB7VQL2.BztCkWEE.js";import{a as S,n as P}from"./edit-profile.C32h0_9t.js";import"./chunk.5KGB34TL.BDr4Yrcn.js";import"./chunk.EHUQAWJK.CB36krxG.js";import"./display-error.D_SbPTj7.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.Bnat6kGE.js";import"./if-defined.BIJl9ywZ.js";const E=q("linked_devices/store"),T=60*1e3;function C(){return Math.floor(Math.random()*10)}function D(r){const e=[];for(let t=0;t<r;t++)e.push(C());return e}let d=class extends k{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()})}get passcode(){const e=Array.from(this.shadowRoot.querySelectorAll("sl-input")),t=Array.from(Array(this.passcodeLength)).map(()=>{});for(let i=0;i<e.length;i++){if(e[i].value==="")return;const s=parseInt(e[i].value,10);if(s>9)return;t[i]=s}return t}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(t=>t.value=""),setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()})}maybeDispatchEvent(){const e=this.passcode;e&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:e}}))}render(){return o`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((e,t)=>o`<sl-input
							id="input-${t}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${i=>{if(i.key==="Backspace"){if(i.target.value===""){const n=this.shadowRoot.getElementById(`input-${t-1}`);n&&(n.value=""),setTimeout(()=>{const c=this.shadowRoot.getElementById(`input-${t-1}`);c&&c.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${i=>{const s=i.target;if(!s.value.match(/^[0-9]$/g)){s.value="";return}const n=this.shadowRoot.getElementById(`input-${t+1}`);n&&n.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};d.styles=[v,g`
			sl-input::part(input) {
				text-align: center;
			}
		`];u([h()],d.prototype,"passcodeLength",void 0);d=u([m("passcode-input")],d);let p=class extends R(k){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||w(b(e.action.hashed.content.target_address,$.AGENT))===w(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),S(a("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const i=(await this.store.client.getLinkingAgents()).map(s=>b(s.target,$.AGENT));for(const s of i)try{await this.store.client.requestLinkDevices(s,e),this.requestorpasscode=D(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=D(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},T),this.successfulRecipient=s}catch(n){console.error(n),n.toString().includes("Unauthorized")||(P(a("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(P(a("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return o`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${a("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():o`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${a("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};p.styles=[v,g`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];u([y({context:E,subscribe:!0}),h()],p.prototype,"store",void 0);u([A()],p.prototype,"successfulRecipient",void 0);p=u([m("link-device-requestor")],p);var B=Object.defineProperty,j=Object.getOwnPropertyDescriptor,f=(r,e,t,i)=>{for(var s=i>1?void 0:i?j(e,t):e,n=r.length-1,c;n>=0;n--)(c=r[n])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&B(e,t,s),s};let l=class extends R(k){constructor(){super(...arguments),this.view="question"}renderContent(){return this.linkedDevicesStore?this.view==="create-profile"?o`
				<div class="column" style="align-items: start">
					<sl-button
						variant="text"
						@click=${()=>{this.view="question"}}
						style="margin-bottom: 12px"
					>
						<sl-icon
							slot="prefix"
							.src=${x(L)}
						></sl-icon>
						${a("Back")}</sl-button
					>
					<create-profile></create-profile>
				</div>
			`:this.view==="link-device"?o` <div class="column" style="align-items: start">
				<sl-button
					variant="text"
					@click=${()=>{this.view="question"}}
					style="margin-bottom: 12px"
				>
					<sl-icon slot="prefix" .src=${x(L)}></sl-icon>
					${a("Back")}</sl-button
				>
				<link-device-requestor
					@device-linked=${async r=>{const e=r.detail.agentPubKey,t=await this.store.client.getProfileForAgent(e);if(t.length>0){const s=t.sort((n,c)=>c.timestamp-n.timestamp)[0].target;await this.store.client.linkMyAgentToProfile(s)}}}
				></link-device-requestor>
			</div>`:o`
			<sl-card>
				<div class="column" style="gap: 12px">
					<span class="title"> ${a("Profile Setup")} </span>
					<span>
						${a("Have you already created a profile in this app?")}
					</span>

					<div class="row" style="gap: 12px">
						<sl-button @click=${()=>this.view="create-profile"}
							>${a("No, create a new profile")}
						</sl-button>
						<sl-button
							variant="primary"
							@click=${()=>this.view="link-device"}
							>${a("Yes! Link this device")}
						</sl-button>
					</div>
				</div>
			</sl-card>
		`:o` <create-profile></create-profile> `}renderPrompt(r){return r?o`<slot></slot>`:o`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const r=this.store.myProfile.get();switch(r.status){case"pending":return o`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return o`<display-error
					.headline=${a("Error fetching your profile.")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderPrompt(r.value!==void 0)}}};l.styles=[v,g`
			:host {
				display: flex;
				flex: 1;
			}
		`];f([y({context:_,subscribe:!0}),h()],l.prototype,"store",2);f([y({context:E,subscribe:!0}),h()],l.prototype,"linkedDevicesStore",2);f([A()],l.prototype,"view",2);l=f([I(),m("profile-prompt")],l);export{l as ProfilePrompt};
