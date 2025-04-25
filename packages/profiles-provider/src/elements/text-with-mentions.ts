import { localized } from '@lit/localize';
import { sharedStyles } from '@darksoil-studio/holochain-elements';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { LitElement, PropertyValues, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';

import './agent-mention.js';

@localized()
@customElement('text-with-mentions')
export class TextWithMentions extends SignalWatcher(LitElement) {
	@property()
	text!: string;

	@query('span')
	span!: HTMLElement;

	updated(changedValues: PropertyValues) {
		super.updated(changedValues);

		this.span.innerHTML = this.text.replaceAll(
			/(uhCAk[^ ]*)/gm,
			'<agent-mention agent-pub-key="$1"></agent-mention>',
		);
	}

	render() {
		return html`<span></span>`;
	}

	static styles = [
		css`
			:host {
				display: contents;
			}
		`,
		sharedStyles,
	];
}
