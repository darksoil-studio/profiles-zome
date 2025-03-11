import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { hashProperty, sharedStyles } from '@tnesh-stack/elements';
import { AsyncResult, SignalWatcher } from '@tnesh-stack/signals';
import { EntryRecord } from '@tnesh-stack/utils';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import { Profile } from '../types.js';
import './agent-avatar.js';
import './profile-list-item-skeleton.js';

/**
 * @element profile-list-item
 */
@localized()
@customElement('profile-list-item')
export class ProfileListItem extends SignalWatcher(LitElement) {
	/**
	 * The public key of the agent to render the profile for
	 */
	@property(hashProperty('agent-pub-key'))
	agentPubKey!: AgentPubKey;

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	render() {
		const profile = this.profilesProvider.currentProfileForAgent
			.get(this.agentPubKey)
			.get();

		switch (profile.status) {
			case 'pending':
				return html`<profile-list-item-skeleton></profile-list-item-skeleton>`;
			case 'completed':
				return html`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
						<span>${profile.value?.name}</span>
					</div>
				`;
			case 'error':
				return html`<display-error
					tooltip
					.headline=${msg('Error fetching the profile.')}
					.error=${profile.error}
				></display-error>`;
		}
	}

	static styles = [sharedStyles];
}
