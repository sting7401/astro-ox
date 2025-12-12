import { LitElement, type TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('only-checkbox')
export class OnlyCheckbox extends LitElement {
	@property()
	chkId?: string;

	@property({ type: Boolean })
	checked: boolean;

	constructor() {
		super();
		this.chkId = '';
		this.checked = false;
	}

	createRenderRoot() {
		return this;
	}

	private _dispatchChk(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			this.dispatchEvent(
				new CustomEvent('checked-changed', {
					detail: target.checked,
					bubbles: true,
					composed: true,
				}),
			);
		}
	}

	render(): TemplateResult {
		return html`
			<label class="input-checkbox h-6 items-center select-none" for="${this.chkId ?? ''}">
				<input
					class="peer sr-only"
					id=${this.chkId ?? ''}
					type="checkbox"
					.checked=${this.checked}
					@change=${this._dispatchChk}
				/>
				<i class="input-checkbox__icon"></i>
				<span class="sr-only">체크</span>
			</label>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'only-checkbox': OnlyCheckbox;
	}
}
