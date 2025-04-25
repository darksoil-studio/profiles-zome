import { Profile } from '@darksoil-studio/profiles-provider';
import '@darksoil-studio/profiles-provider/dist/elements/agent-avatar.js';
import { ActionHash, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { sharedStyles } from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher, joinAsyncMap } from '@darksoil-studio/holochain-signals';
import { EntryRecord, mapValues, pick, pickBy } from '@darksoil-studio/holochain-utils';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';
import './profile-list-item-skeleton.js';

/**
 * @element all-profiles
 * @fires profile-selected - Fired when the user selects an agent from the list. Detail will have this shape: { profileHash: <ProfileHash as ActionHash> }
 */
@localized()
@customElement('all-profiles')
export class AllProfiles extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	/**
	 * Profiles that won't be listed in the search
	 */
	@property()
	excludedProfiles: ActionHash[] = [];

	/** Private properties */

	initials(nickname: string): string {
		return nickname
			.split(' ')
			.map(name => name[0])
			.join('');
	}

	fireAgentSelected(profileHash: ActionHash) {
		if (profileHash) {
			this.dispatchEvent(
				new CustomEvent('profile-selected', {
					bubbles: true,
					composed: true,
					detail: {
						profileHash,
					},
				}),
			);
		}
	}

	renderList(
		profiles: ReadonlyMap<ActionHash, EntryRecord<Profile> | undefined>,
	) {
		if (profiles.size === 0)
			return html`<span>${msg('There are no profiles created yet.')}</span>`;

		return html`
			<div class="column" style="flex: 1;">
				${join(
					Array.from(profiles.entries()).map(
						([profileHash, profile]) => html`
							<div
								class="row"
								style="align-items: center; gap: 8px"
								@click=${() => this.fireAgentSelected(profileHash)}
							>
								<agent-avatar .agentPubKey=${profile?.action.author}>
								</agent-avatar
								><span>${profile?.entry.name}</span>
							</div>
						`,
					),
					() => html`<sl-divider></sl-divider>`,
				)}
			</div>
		`;
	}

	allProfiles() {
		const allProfiles = this.store.allProfiles.get();
		if (allProfiles.status !== 'completed') return allProfiles;

		const latestProfiles = joinAsyncMap(
			mapValues(
				pickBy(
					allProfiles.value,
					(v, key) =>
						!this.excludedProfiles.find(
							e => encodeHashToBase64(e) === encodeHashToBase64(key),
						),
				),
				p => p.latestVersion.get(),
			),
		);
		return latestProfiles;
	}

	render() {
		const allProfiles = this.allProfiles();

		switch (allProfiles.status) {
			case 'pending':
				return html`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the profiles for all agents')}
					.error=${allProfiles.error}
				></display-error>`;
			case 'completed':
				return this.renderList(allProfiles.value);
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
			}
		`,
	];
}
