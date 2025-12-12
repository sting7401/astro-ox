import { currentMapEvent, refreshEvent } from '@/events/currentMapEvent';
import { $i18n } from '@/i18n/localize';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

export class ButtonCurrent extends LitElement {
	createRenderRoot() {
		return this;
	}
	i18n = new StoreController(this, $i18n);

	render() {
		return html`
			<div class="fixed bottom-[calc(var(--bottom-dialog-height))] left-2 z-5 grid gap-1.5">
				<button
					class="group border-ccc grid size-11 place-content-center rounded-full border bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] transition-all active:scale-105"
					type="button"
					aria-label=${this.i18n.value.btn.currentLocation}
					title=${this.i18n.value.btn.currentLocation}
					@click=${refreshEvent}
				>
					<span class="sr-only">${this.i18n.value.btn.currentLocation}</span>
					<icon-list
						class="fill-2d3648 ml-0.5 size-6 stroke-none transition duration-200"
						data-name="refresh"
					></icon-list>
				</button>
				<button
					class="group border-ccc grid size-11 place-content-center rounded-full border bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] transition-all active:scale-105"
					type="button"
					aria-label=${this.i18n.value.btn.currentLocation}
					title=${this.i18n.value.btn.currentLocation}
					@click=${currentMapEvent}
				>
					<span class="sr-only">${this.i18n.value.btn.currentLocation}</span>
					<icon-list class="fill-2d3648 size-6 stroke-none" data-name="user-location"></icon-list>
				</button>
			</div>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('button-current')) {
	customElements.define('button-current', ButtonCurrent);
}
