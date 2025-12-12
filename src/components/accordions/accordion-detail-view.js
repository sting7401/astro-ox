import { html, LitElement } from 'lit';

class AccordionDetailView extends LitElement {
	createRenderRoot() {
		return this;
	}

	static properties = {
		subtext: { type: String, reflect: true, attribute: 'data-subtext' },
		expanded: { type: Boolean },
	};

	constructor() {
		super();
		this.subtext = '';
		this.expanded = false;
	}

	/**
	 * Description placeholder
	 *
	 * @param {Event} event
	 */
	_onToggle(event) {
		event.stopPropagation();

		this.expanded = !this.expanded;
		this.dispatchEvent(
			new CustomEvent('dispatchToggle', {
				detail: { expanded: this.expanded },
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		return html`
			<details
				class="details-view bg-ededed group/accordion relative min-h-11 rounded-[.5625rem] text-[.8125rem] leading-tight"
				name="detail"
			>
				<summary
					class="flex items-center gap-1 px-1.5 py-2"
					aria-expanded=${String(this.expanded)}
					@click=${this._onToggle}
				>
					<p class="line-clamp-2 group-open/accordion:line-clamp-none">${this.subtext}</p>
					<icon-list
						class="stroke-2d3648 fill-2d3648 grid size-6 flex-none rotate-180 justify-center transition-transform transition-discrete group-open/accordion:rotate-0"
						data-name="chevron-down"
						aria-label="toggle"
					></icon-list>
				</summary>
			</details>
		`;
	}
}
if (typeof window !== 'undefined' && !customElements.get('accordion-detail-view')) {
	customElements.define('accordion-detail-view', AccordionDetailView);
}
