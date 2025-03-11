import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import { hashProperty, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { AsyncResult, SignalWatcher } from '@tnesh-stack/signals';
import { EntryRecord } from '@tnesh-stack/utils';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import { Profile } from '../types.js';
import './agent-avatar.js';

/**
 * @element profile-detail
 */
@localized()
@customElement('profile-detail')
export class ProfileDetail extends SignalWatcher(LitElement) {
	/** Public properties */

	/**
	 * Public key identifying the agent for which the profile should be shown
	 */
	@property(hashProperty('agent-pub-key'))
	agentPubKey!: AgentPubKey;

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	private getAdditionalFields(profile: Profile): Record<string, string> {
		const fields: Record<string, string> = {};

		for (const [key, value] of Object.entries(profile.fields)) {
			if (key !== 'avatar') {
				fields[key] = value;
			}
		}

		return fields;
	}

	private renderAdditionalField(fieldId: string, fieldValue: string) {
		return html`
			<div class="column" style="margin-top: 16px">
				<span style="margin-bottom: 8px; ">
					<strong
						>${fieldId.substring(0, 1).toUpperCase()}${fieldId.substring(
							1,
						)}</strong
					></span
				>
				<span>${fieldValue}</span>
			</div>
		`;
	}

	private renderProfile(profile: Profile | undefined) {
		if (!profile)
			return html`<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1;"
			>
				<span class="placeholder"
					>${msg("This agent hasn't created a profile yet")}</span
				>
			</div>`;

		return html`
			<div class="column">
				<div class="row" style="align-items: center">
					<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
					<span style="font-size: 16px; margin-left: 8px;"
						>${profile.name}</span
					>

					<span style="flex: 1"></span>

					<slot name="action"></slot>
				</div>

				${Object.entries(this.getAdditionalFields(profile))
					.filter(([, value]) => value !== '')
					.map(([key, value]) => this.renderAdditionalField(key, value))}
			</div>
		`;
	}

	render() {
		const profile = this.profilesProvider.currentProfileForAgent
			.get(this.agentPubKey)
			.get();

		switch (profile.status) {
			case 'pending':
				return html`
					<div class="column">
						<div class="row" style="align-items: center">
							<sl-skeleton
								effect="pulse"
								style="height: 32px; width: 32px; border-radius: 50%;"
							></sl-skeleton>
							<div>
								<sl-skeleton
									effect="pulse"
									style="width: 122px; margin-left: 8px;"
								></sl-skeleton>
							</div>
						</div>

						${this.profilesProvider.config.additionalFields.map(
							() => html`
								<sl-skeleton
									effect="pulse"
									style="width: 200px; margin-top: 16px;"
								></sl-skeleton>
							`,
						)}
					</div>
				`;
			case 'completed':
				return this.renderProfile(profile.value);
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the profile')}
					.error=${profile.error}
				></display-error>`;
		}
	}

	static styles = [sharedStyles];
}
