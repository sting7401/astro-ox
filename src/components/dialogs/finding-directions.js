import { findingDirectionsCloseEvent } from '@/events/btnModalEvent';
import { $i18n } from '@/i18n/localize';
import { StoreController } from '@nanostores/lit';
import { LitElement, html } from 'lit';

/** @extends {LitElement} */
export class DialogFindingDirections extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}
	i18n = new StoreController(this, $i18n);

	static properties = {
		title: { type: String, reflect: true, attribute: 'data-view-title' },
		location: { type: String, reflect: true, attribute: 'data-view-location' },
		stage: { type: String, reflect: true, attribute: 'data-view-stage' },
		time: { type: String, reflect: true, attribute: 'data-view-time' },
		direction: { type: String, reflect: true, attribute: 'data-view-direction' },
	};

	constructor() {
		super();

		/** @type {string} */
		this.title = '';
		/** @type {string} */
		this.location = '';
		/** @type {string} */
		this.stage = '';
		/** @type {string} */
		this.time = '';
		/** @type {string} */
		this.direction = '';
	}

	open() {
		this?.querySelector('dialog')?.show();
	}

	close() {
		this?.querySelector('dialog')?.close();
	}

	render() {
		const { title, location, stage, time, direction } = this;

		return html`
			<dialog
				class="fixed top-0 left-0 z-20 h-dvh w-dvw -translate-y-5 flex-col bg-transparent opacity-0 transition-all transition-discrete backdrop:bg-black/40 open:flex open:translate-y-0 open:opacity-100"
				id="dialogFindingDirections"
				role="dialog"
				aria-labelledby="dialogFindingDirectionsTitle"
				aria-describedby="dialogFindingDirectionsDesc"
			>
				<div class="bg-2070fb relative flex flex-col gap-2 overflow-hidden p-4">
					<div class="flex items-center gap-5 pr-7">
						<icon-list
							class="size-7 flex-none fill-white stroke-none"
							data-name="finding-directions"
						></icon-list>
						<p class="truncate text-[1.25rem] font-bold text-white">${title}</p>
					</div>
					<div class="space-y-0.5 leading-tight text-pretty text-white">
						${(location || stage) &&
						html`
							<div class="flex items-start gap-1.5 text-sm">
								${location &&
								html`
									<p aria-label=${location}>${location}</p>
								`}
								${stage &&
								html`
									<p
										class="before relative flex flex-none items-center gap-1.5 before:block before:h-2.25 before:w-px before:bg-white/30"
									>
										${stage}
									</p>
								`}
							</div>
						`}
						${(direction || time) &&
						html`
							<div class="flex items-start gap-1.5 text-sm">
								${direction &&
								html`
									<p aria-label=${direction}>
										${this.i18n.value.directions.distanceLeft} ${direction}
									</p>
								`}
								${time &&
								html`
									<p
										class="before relative flex flex-none items-center gap-1.5 before:block before:h-2.25 before:w-px before:bg-white/30"
									>
										${this.i18n.value.directions.timeTaken} ${time}
									</p>
								`}
							</div>
						`}
					</div>
					<div class="absolute top-2 right-2 z-2">
						<button
							class="gird place-content-center rounded-[.375rem] px-2 py-3 text-white active:scale-101"
							id="dialogFindingDirectionsBtn"
							type="button"
							aria-label="close"
							@click=${findingDirectionsCloseEvent}
						>
							<span class="sr-only">close modal</span>
							<icon-list class="size-5 fill-white stroke-none" data-name="modal-close"></icon-list>
						</button>
					</div>
				</div>
			</dialog>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('finding-directions')) {
	customElements.define('finding-directions', DialogFindingDirections);
}
