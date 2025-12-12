import { toastCloseEvent } from '@/events/btnModalEvent';
import { $i18n } from '@/i18n/localize';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class DialogToast extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}
	i18n = new StoreController(this, $i18n);

	static properties = {
		toastImg: { type: String, attribute: 'data-toast-img' },
		toastImgAlt: { type: String, attribute: 'data-toast-img-alt' },
		toastText: { type: String, reflect: true, attribute: 'data-toast-text' },
		toastCloseBtn: { type: String, reflect: true, attribute: 'data-toast-close' },
	};

	constructor() {
		super();

		this.toastImg = '';
		this.toastImgAlt = '';
		this.toastText = '';
		this.toastCloseBtn = '';
	}

	open() {
		this?.querySelector('dialog')?.show();
	}

	close() {
		this?.querySelector('dialog')?.close();
	}

	render() {
		return html`
			<dialog
				class="fixed top-0 left-0 z-20 hidden h-dvh w-dvw -translate-y-5 flex-col place-content-center bg-transparent px-4 opacity-0 transition-all transition-discrete backdrop:bg-black/40 open:flex open:translate-y-0 open:bg-black/60 open:opacity-100"
				id="dialogToast"
				role="dialog"
				aria-labelledby="dialogToastTitle"
				aria-describedby="dialogToastDesc"
			>
				<div
					class="border-cbd2e0 relative flex flex-col gap-6 overflow-hidden rounded-[1.25rem] border bg-white p-4"
				>
					<div class="grid place-content-center gap-6">
						<picture class="grid place-content-center">
							<img class="align-top" src=${this.toastImg} alt=${this.toastImgAlt} />
						</picture>
						<p class="text-[1.25rem] font-bold text-black">${this.toastText}</p>
					</div>
					<div class="grid grid-cols-1 gap-2">
						<button
							class="bg-2d3648 gird place-content-center rounded-[.375rem] px-2 py-3 text-white active:scale-101"
							id="dialogToastCloseBtn"
							type="button"
							aria-label=${this.toastCloseBtn}
							@click=${toastCloseEvent}
						>
							<strong>${this.toastCloseBtn}</strong>
						</button>
					</div>
				</div>
			</dialog>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('dialog-toast')) {
	customElements.define('dialog-toast', DialogToast);
}
