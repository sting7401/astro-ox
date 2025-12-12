import { sosEvent, weatherEvent } from '@/events/btnEtcEvent';
import { $i18n } from '@/i18n/localize';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class ButtonEtc extends LitElement {
	createRenderRoot() {
		return this;
	}
	i18n = new StoreController(this, $i18n);

	get confusionList() {
		const { traffic } = this.i18n.value;

		return [
			{ text: traffic.dangerous, bgColor: 'bg-ef4036' },
			{ text: traffic.congested, bgColor: 'bg-ef9f36' },
			{ text: traffic.complicated, bgColor: 'bg-36ef55' },
			{ text: traffic.normal, bgColor: 'bg-efe936' },
			{ text: traffic.spare, bgColor: 'bg-36efe3' },
		];
	}

	render() {
		return html`
			<div
				class="fixed top-[calc(var(--search-field-height)+var(--category-wrap-height)+4px)] right-2 z-5 grid gap-1.5"
			>
				<!-- 날씨  버튼 -->
				<button
					class="border-cbd2e0 text-666 grid w-11 place-content-center gap-1 rounded-full border bg-white px-1 pt-3 pb-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] transition-all active:scale-105"
					id="weatherBtn"
					aria-label=${this.i18n.value.btn.weather}
					title=${this.i18n.value.btn.weather}
					@click=${weatherEvent}
				>
					<picture class="grid place-content-center"><img src="/images/weather/sun.svg" alt="" /></picture>
					<strong class="text-2d3648 text-center text-base font-bold tracking-tighter">34º</strong>
				</button>

				<!-- 불편신고 버튼 -->
				<button
					class="border-cbd2e0 grid size-11 place-content-center rounded-full border bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] transition-all active:scale-105"
					id="sosBtn"
					type="button"
					aria-label=${this.i18n.value.btn.inconvenience}
					title=${this.i18n.value.btn.inconvenience}
					@click=${sosEvent}
				>
					<input class="peer sr-only" id="sosBtn" type="checkbox" />
					<span class="sr-only">${this.i18n.value.btn.inconvenience}</span>
					<icon-list
						class="fill-ef4036 stroke-ef4036 transition-color size-6.5"
						data-name="park-alarm"
					></icon-list>
				</button>

				<!-- 혼잡 버튼과 리스트 -->
				<div class="relative space-y-1">
					<label
						class="peer has-checked:bg-2070fb has-checked:border-2070fb border-cbd2e0 text-666 relative z-2 grid size-11 place-content-center rounded-full border bg-white text-sm font-bold shadow-[0_1px_2px_0_rgba(0,0,0,0.4)] transition-all active:scale-105 has-checked:text-white has-checked:shadow-[0_4px_3.2px_0_rgba(0,18,160,0.4)]"
						for="confusionBtn"
						aria-label=${this.i18n.value.btn.traffic}
						title=${this.i18n.value.btn.traffic}
					>
						<input class="sr-only" id="confusionBtn" type="checkbox" />
						<span>${this.i18n.value.btn.traffic}</span>
					</label>

					<ul
						class="border-cbd2e0 relative w-11 space-y-1 rounded-[1.25rem] border bg-white px-0.5 pt-11.5 pb-2.5 transition-all transition-discrete not-peer-has-checked:hidden not-peer-has-checked:-translate-y-10 not-peer-has-checked:opacity-0 peer-has-checked:block peer-has-checked:-translate-y-10.5 peer-has-checked:opacity-100"
					>
						${this.confusionList.map(
							({ text, bgColor }) => html`
								<li class="grid place-items-center space-y-0.5">
									<i class="${bgColor} border-cbd2e0 flex size-[.9375rem] rounded-full border"></i>
									<p class="text-center text-xs leading-tight tracking-tight break-all">${text}</p>
								</li>
							`,
						)}
					</ul>
				</div>
			</div>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('button-etc')) {
	customElements.define('button-etc', ButtonEtc);
}
