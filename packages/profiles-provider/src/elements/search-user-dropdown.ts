import {
	ActionHash,
	AgentPubKey,
	AgentPubKeyB64,
	decodeHashFromBase64,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import { sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { Signal, SignalWatcher, pipe } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import { Profile } from '../types.js';
import './agent-avatar.js';
import './profile-list-item-skeleton.js';

/**
 * @element search-user-dropdown
 * @fires user-selected - Fired when the user selects some user. Detail will have this shape: { agents: Array<AgentPubKey> }
 */
@localized()
@customElement('search-user-dropdown')
export class SearchUserDropdown extends SignalWatcher(LitElement) {
	/** Public attributes */

	set searchFilter(sf: string | undefined) {
		this._searchFilter.set(sf);
	}
	get searchFilter() {
		return this._searchFilter.get();
	}

	_searchFilter = new Signal.State<string | undefined>(undefined);

	@property()
	open: boolean | undefined;

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	/**
	 * Profiles that won't be listed in the search
	 */
	@property()
	excludedUsers: Array<ActionHash[]> = [];

	/**
	 * @internal
	 */
	_searchProfiles = pipe(this._searchFilter, filter =>
		this.profilesProvider.search(filter!),
	);

	/**
	 * @internal
	 */
	@query('#dropdown')
	public dropdown!: SlDropdown;

	focusFirstItem() {
		const searchResult = this._searchProfiles.get();
		if (searchResult.status !== 'completed') return;
		let users = searchResult.value;
		const excludedAgentsStr = ([] as AgentPubKeyB64[]).concat(
			...this.excludedUsers.map(agents =>
				agents.map(agent => agent.toString()),
			),
		);

		users = users.filter(
			user =>
				!user.agents.find(agent =>
					excludedAgentsStr.includes(agent.toString()),
				),
		);
		if (users.length === 0) return;
		this.shadowRoot!.querySelector('sl-menu-item')!.focus();
	}

	async onUserSelected(agents: AgentPubKey[], profile: Profile) {
		this.dispatchEvent(
			new CustomEvent('user-selected', {
				detail: {
					agents,
					profile,
				},
				bubbles: true,
				composed: true,
			}),
		);
	}

	renderProfileList() {
		const sf = this._searchFilter.get();
		if (!sf || sf.length < 3)
			return html`<sl-menu-item disabled
				>${msg('Enter at least 3 chars to search...')}</sl-menu-item
			>`;

		const searchResult = this._searchProfiles.get();

		switch (searchResult.status) {
			case 'pending':
				return Array.from(Array(3)).map(
					() => html`
						<sl-menu-item>
							<div class="row" style="display:flex; align-items: center">
								<sl-skeleton
									effect="sheen"
									slot="prefix"
									style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
								></sl-skeleton>
								<sl-skeleton
									effect="sheen"
									style="width: 100px; margin: 8px; border-radius: 12px"
								></sl-skeleton>
							</div>
						</sl-menu-item>
					`,
				);
			case 'error':
				return html`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${msg('Error searching profiles')}
						.error=${searchResult.error}
					></display-error>
				`;
			case 'completed': {
				let users = searchResult.value;
				const excludedAgentsStr = ([] as AgentPubKeyB64[]).concat(
					...this.excludedUsers.map(agents =>
						agents.map(agent => agent.toString()),
					),
				);

				users = users.filter(
					user =>
						!user.agents.find(agent =>
							excludedAgentsStr.includes(agent.toString()),
						),
				);

				if (users.length === 0)
					return html`<sl-menu-item disabled>
						${msg('No nicknames match the filter')}
					</sl-menu-item>`;

				return html`
					${users.map(
						(user, i) => html`
							<sl-menu-item .value=${i}>
								<agent-avatar
									slot="prefix"
									.agentPubKey=${user.agents[0]}
									style="margin-right: 16px"
								></agent-avatar>
								${user.profile?.name}
							</sl-menu-item>
						`,
					)}
				`;
			}
		}
	}

	render() {
		return html`
			<sl-dropdown
				id="dropdown"
				hoist
				style="flex: 1"
				.open=${ifDefined(this.open)}
			>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${async (e: CustomEvent) => {
						const index = parseInt(e.detail.item.value);
						const searchResults = this._searchProfiles.get();
						if (searchResults.status !== 'completed') return;

						const user = searchResults.value[index];

						this.onUserSelected(user.agents, user.profile);
					}}
				>
					${this.renderProfileList()}
				</sl-menu>
			</sl-dropdown>
		`;
	}

	static get styles() {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
				}
			`,
		];
	}
}
