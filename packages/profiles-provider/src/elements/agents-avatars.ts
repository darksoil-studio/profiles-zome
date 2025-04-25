import { AgentPubKey } from '@holochain/client';
import { localized } from '@lit/localize';
import { hashesProperty, sharedStyles } from '@darksoil-studio/holochain-elements';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './agent-avatar.js';

/**
 * @element agents-avatars
 */
@localized()
@customElement('agents-avatars')
export class AgentsAvatars extends SignalWatcher(LitElement) {
	@property(hashesProperty('agents'))
	agents: AgentPubKey[] = [];

	render() {
		return html`
			<div class="row avatar-group">
				${this.agents
					.slice(0, 3)
					.map(a => html`<agent-avatar .agentPubKey=${a}></agent-avatar>`)}
				${this.agents.length > 3
					? html`<sl-avatar
							.initials=${`+${this.agents.length - 3}`}
							style="--size: 32px"
						></sl-avatar>`
					: html``}
			</div>
		`;
	}

	static styles = [
		css`
			.avatar-group agent-avatar:not(:first-of-type) {
				margin-left: -0.6rem;
			}
			.avatar-group sl-avatar {
				margin-left: -0.6rem;
			}
		`,
		sharedStyles,
	];
}
