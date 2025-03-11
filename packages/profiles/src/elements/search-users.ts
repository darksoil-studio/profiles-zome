import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiDelete } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import {
	FormField,
	FormFieldController,
	hashProperty,
	sharedStyles,
	wrapPathInSvg,
} from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import './profile-list-item.js';
import './search-user.js';

/**
 * @element search-users
 */
@localized()
@customElement('search-users')
export class SearchUsers
	extends SignalWatcher(LitElement)
	implements FormField
{
	/** Form field properties */

	/**
	 * The name of the field if this element is used inside a form
	 * Required only if the element is used inside a form
	 */
	@property()
	name!: string;

	/**
	 * The default value of the field if this element is used inside a form
	 */
	@property(hashProperty('default-value'))
	defaultValue: Array<AgentPubKey[]> = [];

	/**
	 * Whether this field is required if this element is used inside a form
	 */
	@property()
	required = false;

	/**
	 * Whether this field is disabled if this element is used inside a form
	 */
	@property()
	disabled = false;

	/**
	 * Label for the agent searching field.
	 * @attr field-label
	 */
	@property({ type: String, attribute: 'field-label' })
	fieldLabel!: string;

	/**
	 * Placeholder to show when the list is empty.
	 * @attr empty-list-placeholder
	 */
	@property({ type: String, attribute: 'empty-list-placeholder' })
	emptyListPlaceholder = msg('No users selected yet.');

	/**
	 * @internal
	 */
	_controller = new FormFieldController(this);

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	/**
	 * Agents that won't be listed in the search
	 */
	@property()
	excludedUsers: Array<AgentPubKey[]> = [];

	reportValidity() {
		return true;
	}

	async reset() {
		this.value = this.defaultValue;
	}

	/**
	 * @internal
	 */
	@state()
	value: Array<AgentPubKey[]> = [];

	render() {
		return html`
			<div class="column" style="gap: 16px">
				<search-user
					.fieldLabel=${this.fieldLabel}
					clear-on-select
					@user-selected=${(e: any) => {
						this.value = [...this.value, e.detail.agents];
						this.dispatchEvent(
							new CustomEvent('users-changed', {
								composed: true,
								bubbles: true,
								detail: {
									users: this.value,
								},
							}),
						);
					}}
					.excludedUsers=${this.excludedUsers}
				></search-user>
				${this.value.length === 0
					? html`<span class="placeholder">${this.emptyListPlaceholder}</span>`
					: this.value.map(
							(user, i) =>
								html`<div class="row">
									<profile-list-item
										style="flex: 1"
										.agentPubKey=${user[0]}
									></profile-list-item
									><sl-icon-button
										.src=${wrapPathInSvg(mdiDelete)}
										@click=${() => {
											this.value = this.value.filter((v, i2) => i2 !== i);
											this.dispatchEvent(
												new CustomEvent('users-changed', {
													composed: true,
													bubbles: true,
													detail: {
														users: this.value,
													},
												}),
											);
										}}
									></sl-icon-button>
								</div>`,
						)}
			</div>
		`;
	}

	static styles = [sharedStyles];
}
