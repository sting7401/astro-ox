import { searchAllItemEvent, searchItemEvent } from '@/events/searchFieldEvent';
import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { LitElement, html } from 'lit';

/** @extends {LitElement} */
export class SearchItem extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}
	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);

	static properties = {
		image: { type: String, reflect: true },
		title: { type: String, reflect: true },
		location: { type: String, reflect: true },
		stage: { type: String, reflect: true },
		date: { type: String, reflect: true },
		time: { type: String, reflect: true },
		favor: { type: String, reflect: true },
		direction: { type: String, reflect: true },
		directionIcon: { type: String, reflect: true, attribute: 'data-direction-icon' },
		badgeCurrent: { type: String, reflect: true, attribute: 'data-badge-current' },
	};

	constructor() {
		super();

		/** @type {string} */
		this.image = '';
		/** @type {string} */
		this.title = '';
		/** @type {string} */
		this.location = '';
		/** @type {string} */
		this.stage = '';
		/** @type {string} */
		this.date = '';
		/** @type {string} */
		this.time = '';
		/** @type {string} */
		this.favor = '';
		/** @type {string} */
		this.direction = '';
		/** @type {string} */
		this.directionIcon = '';
		/** @type {string} */
		this.badgeCurrent = '';
	}

	render() {
		const { image, title, favor, location, stage, date, time, direction, directionIcon, badgeCurrent } = this;

		const innerWrap = html`
			<div class="relative">
				<picture class="relative overflow-hidden rounded-xl">
					<img
						class="object-cover"
						loading="lazy"
						src=${image
							? this.image
							: 'https://cdn.pixabay.com/photo/2025/03/19/08/56/garden-9480210_640.jpg'}
						alt="${title} 대표 이미지"
					/>
				</picture>
				${favor === 'enable'
					? html`
							<div class="absolute top-1 left-1 z-1">
								<strong
									class="bg-2070fb grid size-5 place-content-center rounded-full border border-white shadow-[0_2px_2px_rgba(0,18,160,0.3)]"
								>
									<icon-list
										class="grid size-2.5 place-content-center fill-white stroke-none"
										data-name="favor"
									></icon-list>
								</strong>
							</div>
						`
					: ''}
			</div>
			<section class="space-y-0.75 tracking-tighter wrap-break-word break-all text-black">
				<div class="${directionIcon === 'multiple' ? 'pb-2.5' : ''} flex w-full items-center gap-1">
					${badgeCurrent
						? html`
								<div class="peer flex flex-none items-center gap-1">
									<badge-item
										class="flex-none"
										data-badge-type="border"
										data-badge-text=${badgeCurrent}
									></badge-item>
								</div>
							`
						: ''}
					${directionIcon === 'enable'
						? html`
								<h3
									class="flex-1 truncate text-lg leading-tight font-bold peer-has-[badge-item]:w-[calc(100dvw-18.625rem)]"
								>
									${title}
								</h3>

								<strong
									class="before bg-2070fb relative inline-flex flex-none items-center gap-1 rounded-[1.25rem] py-1 pr-2 pl-1 text-sm text-white"
								>
									<icon-list
										class="size-4 flex-none fill-white stroke-none"
										data-name="finding-directions"
									></icon-list>
									${this.i18n.value.btn.findingDirections}
								</strong>
							`
						: directionIcon === 'multiple'
							? html`
									<h3
										class="flex-1 truncate text-lg leading-tight font-bold peer-has-[badge-item]:w-[calc(100dvw-18.625rem)]"
									>
										${title}
									</h3>
								`
							: html`
									<h3 class="line-clamp-2 text-lg leading-tight font-bold">${title}</h3>
								`}
				</div>

				<div class="space-y-0.5 text-pretty">
					${(location || stage) &&
					html`
						<div class="flex items-start gap-1 text-sm leading-tight">
							${location &&
							html`
								<p aria-label=${location}>${location}</p>
							`}
							${stage &&
							html`
								<p
									class="before relative flex flex-none items-center gap-1 before:block before:h-2.25 before:w-px before:bg-black/30"
								>
									${stage}
								</p>
							`}
							${direction
								? html`
										<p
											class="before relative flex flex-none items-center gap-1 before:block before:h-2.25 before:w-px before:bg-black/30"
										>
											${direction}
										</p>
									`
								: ''}
						</div>
					`}
					${(date || time) &&
					html`
						<div class="flex items-start gap-1 text-sm leading-tight">
							${date &&
							html`
								<p aria-label=${date}>${date}</p>
							`}
							${time &&
							html`
								<p
									class="before relative flex flex-none items-center gap-1 before:block before:h-2.25 before:w-px before:bg-black/30"
								>
									${time}
								</p>
							`}
						</div>
					`}
				</div>
			</section>
		`;

		const gridClass = 'grid grid-cols-[80px_1fr] items-center gap-2';

		return html`
			${this._currentPageView.value === 'page-search'
				? html`
						<a class=${gridClass} href="javascript:;" @click=${searchItemEvent}>${innerWrap}</a>
					`
				: this._currentPageView.value === 'page-multiple'
					? html`
							<a class=${gridClass} href="javascript:;" @click=${searchAllItemEvent}>${innerWrap}</a>
						`
					: html`
							<div class=${gridClass}>${innerWrap}</div>
						`}
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('search-item')) {
	customElements.define('search-item', SearchItem);
}
