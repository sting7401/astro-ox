import { LitElement, type TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('toggle-checkbox')
export class toggleCheckbox extends LitElement {
	@property({ type: String }) prev = '미사용';
	@property({ type: String }) next = '사용';
	@property({ type: String }) chkId?: string;
	@property({ type: Boolean }) checked: boolean;

	constructor() {
		super();
		this.prev = '미사용';
		this.next = '사용';
		this.chkId = '';
		this.checked = false;
	}

	createRenderRoot() {
		return this;
	}

	render(): TemplateResult {
		return html`
			<label
				class="group/toggle inline-flex items-center gap-2.5 select-none"
				for="${this.chkId ?? ''}"
				x-data="{ use : false }"
			>
				<input
					class="peer sr-only"
					id=${this.chkId ?? ''}
					type="checkbox"
					.checked=${this.checked}
					@change=${(e: Event) => {
						this.checked = (e.target as HTMLInputElement).checked;
					}}
				/>
				<i
					class="bg-ddd group-has-checked/toggle:bg-primary relative inline-flex min-h-5 min-w-10 cursor-pointer items-center rounded-full p-0.5"
					?data-checked=${this.checked}
				>
					<icon-list
						class="peer group-has-checked/toggle:stroke-primary stroke-ddd absolute flex size-4 overflow-clip rounded-full fill-white transition-all group-has-checked/toggle:left-[calc(100%-1.125rem)]"
						data-name="checkbox"
					></icon-list>
				</i>
				<span class="text-666" :class="{ 'text-primary': use }">${this.checked ? this.next : this.prev}</span>
			</label>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'toggle-checkbox': toggleCheckbox;
	}
}
