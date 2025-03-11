import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { hashProperty, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import '@tnesh-stack/elements/dist/elements/holo-identicon.js';
import { AsyncResult, SignalWatcher } from '@tnesh-stack/signals';
import { EntryRecord } from '@tnesh-stack/utils';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import { Profile } from '../types.js';

@localized()
@customElement('agent-mention')
export class AgentMention extends SignalWatcher(LitElement) {
	/** Public properties */

	/**
	 * The public key identifying the agent whose profile is going to be shown.
	 */
	@property(hashProperty('agent-pub-key'))
	agentPubKey!: AgentPubKey;

	/**
	 * Size of the avatar image in pixels.
	 */
	@property({ type: Number })
	size = 24;

	/** Dependencies */

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	private renderAvatar(profile: Profile) {
		if (!profile.avatar) {
			return html` <div
				style=${styleMap({
					position: 'relative',
					height: `${this.size}px`,
					width: `${this.size}px`,
				})}
			>
				<agent-avatar
					.disableCopy=${true}
					.disableTooltip=${true}
					.agentPubKey=${this.agentPubKey}
					.size=${this.size}
					style="height: ${this.size}px"
				>
				</agent-avatar>
			</div>`;
		}
		return html`
			<sl-avatar .image=${profile.avatar} style="--size: ${this.size}px;">
			</sl-avatar>
		`;
	}

	private renderProfile(profile: Profile) {
		return html`
			<div class="row" style="align-items: center">
				${this.renderAvatar(profile)}
				<span style="margin-left: 8px">${profile.name}</span>
			</div>
		`;
	}

	private renderContent() {
		const profile = this.profilesProvider.currentProfileForAgent
			.get(this.agentPubKey)
			.get();
		switch (profile.status) {
			case 'pending':
				return html`<sl-skeleton effect="pulse"></sl-skeleton>`;
			case 'completed':
				if (!profile.value) {
					return html`
						<display-error
							tooltip
							.headline=${msg('Error fetching the profile.')}
							.error=${msg('Profile not found.')}
						></display-error>
					`;
				}
				return this.renderProfile(profile.value);
			case 'error':
				return html`
					<display-error
						tooltip
						.headline=${msg('Error fetching the profile.')}
						.error=${profile.error}
					></display-error>
				`;
		}
	}

	render() {
		return html`
			<sl-tag pill style="display: inline-flex">${this.renderContent()}</sl-tag>
		`;
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: inline-flex;
			}
		`,
	];
}
