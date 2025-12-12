import { categoryFilterEvent } from '@/events/categoryFilterEvent';
import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class CategoryList extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}

	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);

	static properties = {
		categoryList: { type: Array },
	};

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('resize', this.initWrapHeight);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener('resize', this.initWrapHeight);
	}

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

	get filterList() {
		const { filter } = this.i18n.value;

		return [
			{ id: 'alphabetical', text: filter.alphabetical },
			{ id: 'operatingHours', text: filter.operatingHours },
			{ id: 'distance', text: filter.distance },
		];
	}

	willUpdated() {
		this.initWrapHeight();
	}

	initWrapHeight() {
		const categoryWrapHeight = `${document?.querySelector('[data-dom="categoryWrap"]')?.clientHeight}px`;
		document?.body?.style?.setProperty('--category-wrap-height', categoryWrapHeight);
	}

	render() {
		const resultClass =
			this._currentPageView.value === 'page-search'
				? 'top-[calc(var(--search-field-height))] bg-white pt-2 border-t border-t-ccc'
				: this._currentPageView.value === 'page-multiple'
					? 'hidden'
					: 'top-[calc(var(--search-field-height))]';

		return html`
			<div class="${resultClass} fixed left-0 z-10 w-full" data-dom="categoryWrap">
				<ul
					class="flex w-dvw snap-x snap-mandatory scroll-ps-2.5 items-center gap-2 overflow-x-auto overflow-y-hidden pb-1.5"
				>
					<category-labels></category-labels>
				</ul>

				${this._currentPageView.value === 'page-search'
					? html`
							<ul class="flex items-center gap-2 overflow-x-auto overflow-y-hidden">
								${this.filterList.map(
									(item) => html`
										<li class="first:ml-4">
											<label
												class="group/category flex size-full min-h-9 items-center justify-center gap-1.5 select-none"
												for="${item.id}FilterLabel"
												@click=${categoryFilterEvent}
											>
												<input
													class="peer sr-only"
													id="${item.id}FilterLabel"
													type="radio"
													name="FilterLabel"
												/>
												<span
													class="text-2d3648 peer-checked:text-2070fb flex-none text-center text-[.9375rem] leading-tight -tracking-[.8px] text-nowrap transition-colors duration-75 peer-checked:font-bold"
												>
													&middot; ${item.text}
												</span>
											</label>
										</li>
									`,
								)}
							</ul>
						`
					: ''}
			</div>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('category-list')) {
	customElements.define('category-list', CategoryList);
}
