import { AgentPubKey, DnaHash, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import styles from '@shoelace-style/shoelace/dist/components/textarea/textarea.styles.js';
import { sharedStyles } from '@tnesh-stack/elements';
import { FormField, FormFieldController } from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';
import './agent-mention.js';
import { SearchUserDropdown } from './search-user-dropdown.js';

@localized()
@customElement('textarea-with-mentions')
export class TextareaWithMentions
	extends SignalWatcher(LitElement)
	implements FormField
{
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	// private readonly hasSlotController = new HasSlotController(
	// 	this,
	// 	'help-text',
	// 	'label',
	// );

	_controller = new FormFieldController(this);

	/**
	 * The name of the field if this element is used inside a form
	 * Required only if the element is used inside a form
	 */
	@property()
	name!: string;

	/** The textarea's size. */
	@property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

	/** Draws a filled textarea. */
	@property({ type: Boolean, reflect: true }) filled = false;

	/** The textarea's label. If you need to display HTML, use the `label` slot instead. */
	@property() label = '';

	/** Placeholder text to show as a hint when the input is empty. */
	@property() placeholder = '';

	/** The number of rows to display by default. */
	@property({ type: Number }) rows = 4;

	/** Controls how the textarea can be resized. */
	@property() resize: 'none' | 'vertical' | 'auto' = 'vertical';

	/** Disables the textarea. */
	@property({ type: Boolean, reflect: true }) disabled = false;

	/** Makes the textarea readonly. */
	@property({ type: Boolean, reflect: true }) readonly = false;

	/** Makes the textarea a required field. */
	@property({ type: Boolean, reflect: true }) required = false;

	/** The minimum length of input that will be considered valid. */
	@property({ type: Number }) minlength!: number;

	/** The maximum length of input that will be considered valid. */
	@property({ type: Number }) maxlength!: number;

	@property()
	helpText: string = msg("Press '@' to mention an agent.");

	@state() private hasFocus = false;

	reportValidity() {
		const invalid = this.required !== false && this.value === undefined;

		if (invalid) {
			const input = this.shadowRoot!.querySelector('input')!;
			input.setCustomValidity(`This field is required`);
		}

		return !invalid;
	}

	async reset() {
		this.value = this.defaultValue || '';
	}

	@property()
	defaultValue: string | undefined;

	get value() {
		if (!this.textarea) return '';
		const value = this.textarea.innerHTML;
		return value
			.replace(
				/<agent-mention agent-pub-key="([^"]*)"><\/agent-mention>/gm,
				'$1',
			)
			.replace('&nbsp;', ' ')
			.trim();
	}

	set value(v: string) {
		this.textarea.innerHTML =
			'&nbsp' +
			v.replace(
				/(uhCAK[^\s]*)/gm,
				'<agent-mention agent-pub-key="$1"></agent-mention>',
			) +
			'&nbsp';
	}

	get dropdown() {
		return this.shadowRoot!.querySelector(
			'search-user-dropdown',
		)! as SearchUserDropdown;
	}

	get textarea() {
		return this.shadowRoot!.getElementById('textarea')!;
	}

	hideDropdown() {
		this.dropdown.searchFilter = '';
		this.dropdown.open = false;
	}

	render() {
		// const hasLabelSlot = this.hasSlotController.test('label');
		// const hasHelpTextSlot = this.hasSlotController.test('help-text');
		const hasLabelSlot = false;
		const hasHelpTextSlot = false;
		const hasLabel = this.label ? true : !!hasLabelSlot;
		const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

		return html`
			<div
				part="form-control"
				class=${classMap({
					'form-control': true,
					'form-control--small': this.size === 'small',
					'form-control--medium': this.size === 'medium',
					'form-control--large': this.size === 'large',
					'form-control--has-label': hasLabel,
					'form-control--has-help-text': hasHelpText,
				})}
			>
				<label
					part="form-control-label"
					class="form-control__label"
					for="input"
					aria-hidden=${hasLabel ? 'false' : 'true'}
				>
					<slot name="label">${this.label}</slot>
				</label>

				<div part="form-control-input" class="form-control-input">
					<div
						part="base"
						class=${classMap({
							textarea: true,
							'textarea--small': this.size === 'small',
							'textarea--medium': this.size === 'medium',
							'textarea--large': this.size === 'large',
							'textarea--standard': !this.filled,
							'textarea--filled': this.filled,
							'textarea--disabled': this.disabled,
							'textarea--focused': this.hasFocus,
							'textarea--empty': !this.value,
							'textarea--resize-none': this.resize === 'none',
							'textarea--resize-vertical': this.resize === 'vertical',
							'textarea--resize-auto': this.resize === 'auto',
						})}
					>
						<div class="column">
							<div
								id="textarea"
								contenteditable
								@keydown=${(e: KeyboardEvent) => {
									if (this.dropdown.open) {
										this.dropdown.dropdown.handleTriggerKeyDown(e);
										if (e.key === 'Backspace') {
											if (this.dropdown.searchFilter!.length === 0) {
												this.hideDropdown();
											}
											this.dropdown.searchFilter =
												this.dropdown.searchFilter!.slice(
													0,
													this.dropdown.searchFilter!.length - 1,
												);
										} else if (e.key.match(/\w/gm)) {
											this.dropdown.searchFilter += e.key;
										} else {
											this.hideDropdown();
										}
									} else if (e.key === '@') {
										this.dropdown.open = true;
										this.dropdown.searchFilter = '';
									}
								}}
							></div>
							<search-user-dropdown
								@user-selected=${(e: CustomEvent) => {
									const agents: AgentPubKey[] = e.detail.agents;
									const atCharPos = this.textarea.innerHTML.search(
										`@${this.dropdown.searchFilter}`,
									);
									this.textarea.innerHTML =
										'&nbsp;' +
										this.textarea.innerHTML.slice(0, atCharPos) +
										`<agent-mention agent-pub-key=${encodeHashToBase64(agents[0])}></agent-mention>` +
										this.textarea.innerHTML.slice(
											atCharPos! + this.dropdown.searchFilter!.length + 1,
										) +
										'&nbsp;';
									this.hideDropdown();
								}}
								><div></div>
							</search-user-dropdown>
							<input style="display: none" />
						</div>
						<!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
						<div
							part="textarea-adjuster"
							class="textarea__size-adjuster"
							?hidden=${this.resize !== 'auto'}
						></div>
					</div>
				</div>

				<div
					part="form-control-help-text"
					id="help-text"
					class="form-control__help-text"
					aria-hidden=${hasHelpText ? 'false' : 'true'}
				>
					<slot name="help-text">${this.helpText}</slot>
				</div>
			</div>
		`;
	}

	static styles = [
		css`
			#textarea {
				padding: 4px;
				min-height: 120px;
			}
		`,
		sharedStyles,
		styles,
	];

	// editorStateConfig() {
	// 	return {
	// 		schema,
	// 		plugins: [keymap(baseKeymap), searchProfilePlugin],
	// 	};
	// }
}
