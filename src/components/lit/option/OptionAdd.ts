import { LitElement, type TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

@customElement('option-add')
export class OptionAdd extends LitElement {
	@property({ type: String })
	listId: string;
	@property({ type: Array })
	listItem: { id: string; text: string }[] = [];
	@property({ type: Boolean })
	addOption: boolean;
	@state() private inputValue = '';

	inputRef = createRef<HTMLInputElement>();

	constructor() {
		super();
		this.listId = '';
		this.addOption = false;
	}

	createRenderRoot() {
		return this;
	}

	updated(changedProperties: Map<string, string>) {
		if (changedProperties.has('addOption')) {
			if (this.addOption === true) {
				this.inputRef?.value?.focus();
			}
		}
	}

	private toggleAddOption(e: Event) {
		e.stopPropagation();
		if ((e.target as HTMLElement).tagName.toLowerCase() === 'input') return; // input 클릭 시 무시
		this.addOption = !this.addOption;
	}

	private onInputFocusIn() {
		this.addOption = true;
	}

	private onInputFocusOut() {
		this.addOption = false;
	}

	private onInputKeyUp(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			this.addOption = false;
			this.dispatchEvent(
				new CustomEvent('option-added', {
					detail: { listId: this.listId, value: this.inputValue },
				}),
			);
			this.optAdd(e);
			this.inputValue = '';
		}
	}

	private onDelete(e: Event, id: string) {
		e.stopPropagation();
		this.dispatchEvent(
			new CustomEvent('option-removed', {
				detail: { listId: this.listId, id },
			}),
		);
	}

	optAdd($event: Event) {
		const target = $event.target as HTMLInputElement | null;
		const text = target?.value ?? '';

		const generateId = () => `id_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
		const newElm = {
			id: generateId(),
			text,
		};

		if (Array.isArray(this.listItem)) {
			this.listItem = [...this.listItem, newElm];
		} else {
			this.listItem = [newElm];
		}

		this.inputValue = '';
	}

	render(): TemplateResult {
		return html`
			<div
				class="border-ddd min-h-10 rounded-lg border px-3 py-1.25"
				@click=${(e: Event) => this.toggleAddOption(e)}
			>
				${this.addOption
					? html`
							<input
								class="h-full flex-1 rounded-xl py-1"
								id=${this.listId}
								type="text"
								${ref(this.inputRef)}
								name=${this.listId}
								placeholder="옵션값 입력"
								.value=${this.inputValue}
								@focusin=${this.onInputFocusIn}
								@focusout=${this.onInputFocusOut}
								@keyup=${this.onInputKeyUp}
							/>
						`
					: html`
							<ul class="inline-flex flex-wrap items-center gap-3">
								${this.listItem.map(
									(item) => html`
										<li class="bg-ddd inline-flex min-h-6 items-center gap-1 rounded-lg px-2 py-px">
											<span class="text-sm uppercase">${item.text}</span>
											<button
												class="button"
												type="button"
												@click=${(e: Event) => this.onDelete(e, item.id)}
											>
												<span class="sr-only">삭제</span>
												<icon-list
													class="fill-ff0000 flex size-5 items-center"
													data-name="close-circle"
												></icon-list>
											</button>
										</li>
									`,
								)}
							</ul>
						`}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'option-add': OptionAdd;
	}
}
