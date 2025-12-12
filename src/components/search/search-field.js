import { searchCloseEvent, searchEnterEvent, searchListEvent } from '@/events/searchFieldEvent';
import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class SearchField extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}

	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);

	static properties = {
		dataPlaceholder: { type: String, attribute: 'data-placeholder' },
		dataTitle: { type: String, attribute: 'data-title' },
	};

	updated() {
		const { body } = document;
		const { style } = body;
		const searchField = this?.querySelector('[data-dom="search-field"]');

		style?.setProperty('--search-field-height', `${searchField?.clientHeight}px`);
	}

	render() {
		const backPageCheck =
			this._currentPageView.value === 'page-search' || this._currentPageView.value === 'page-multiple';
		const resultClass = backPageCheck
			? 'grid grid-cols-[3.5rem_1fr] overflow-hidden bg-white'
			: 'my-2 mx-5 grid grid-cols-[3.5rem_1fr] overflow-hidden rounded-3xl bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.4)]';

		return html`
			<div class="fixed top-0 left-0 z-5 w-full" data-dom="search-field">
				<div class=${resultClass}>
					${backPageCheck
						? html`
								<button
									class="flex w-15 items-center justify-center"
									id="searchFieldCloseBtn"
									type="button"
									aria-label=${this.i18n.value.btn.close}
									title=${this.i18n.value.btn.close}
									@click=${searchCloseEvent}
								>
									<span class="sr-only">${this.i18n.value.btn.close}</span>
									<icon-list
										class="stroke-2d3648 grid size-6 place-content-center fill-none"
										data-name="arrow-left"
									></icon-list>
								</button>
							`
						: html`
								<button
									class="flex w-15 items-center justify-center"
									id="searchFieldBtn"
									type="button"
									aria-label=${this.i18n.value.btn.search}
									title=${this.i18n.value.btn.search}
									@click=${searchListEvent}
								>
									<span class="sr-only">${this.i18n.value.btn.search}</span>
									<icon-list
										class="stroke-2d3648 grid size-6 place-content-center fill-none"
										data-name="input-search"
									></icon-list>
								</button>
							`}

					<div class="relative">
						<input
							class="h-12 w-full focus:border-transparent focus:ring-transparent"
							id="searchField"
							type="search"
							autocomplete="off"
							name="searchField"
							placeholder=${this.dataPlaceholder}
							title=${this.dataPlaceholder}
							.value=${this.dataTitle}
							@keydown=${searchEnterEvent}
						/>
					</div>
				</div>
			</div>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('search-field')) {
	// 브라우저에서만 실행되는 코드
	customElements.define('search-field', SearchField);
}
