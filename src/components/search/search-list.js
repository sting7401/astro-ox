import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class SearchList extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}

	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);

	static properties = {
		title: { type: String },
		searchList: { type: Array },
	};

	/**
	 * Creates an instance of SearchList.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.searchList = [];
	}

	/**
	 * Description 추가
	 *
	 * @param {*} newItem
	 */
	addItem(newItem) {
		this.searchList = [...this.searchList, newItem];
	}

	/** Description 초기화 */
	resetItems() {
		this.searchList = [];
	}

	/**
	 * Description 리스트트 항목 추가
	 *
	 * @param {*} newItem
	 */
	setList(newItem) {
		this.searchList = [...newItem];
	}

	render() {
		if (this._currentPageView.value === 'page-default') {
			return html``;
		}

		if (this.searchList.length === 0) {
			return html`
				<div
					class="fixed top-[calc(var(--search-field-height)+var(--category-wrap-height))] left-0 z-10 grid h-[calc(100dvh-calc(var(--search-field-height)+var(--category-wrap-height)))] w-dvw place-content-center bg-white opacity-100 transition-all starting:opacity-10"
				>
					<p>검색 결과가 없습니다</p>
				</div>
			`;
		}

		return html`
			<section
				class="fixed top-[calc(var(--search-field-height)+var(--category-wrap-height))] left-0 z-10 h-[calc(100dvh-calc(var(--search-field-height)+var(--category-wrap-height)))] w-dvw overflow-x-hidden overflow-y-auto bg-white opacity-100 transition-all starting:opacity-10"
				data-button="multiple-close"
				aria-hidden="false"
			>
				<ul class="divide-ccc border-ccc relative z-10 divide-y border-t border-b bg-white">
					${this.searchList.map(
						(item) => html`
							<li class="flex w-full p-3">
								<search-item
									class="w-full"
									images=${item.image}
									title=${item.title}
									location=${item.location}
									stage=${item.stage}
									date=${item.date}
									time=${item.time}
									direction=${item.direction}
									.favor=${item.favor}
									.badgeCurrent=${item.badgeCurrent}
									data-direction-icon=${item.directionIcon}
								></search-item>
							</li>
						`,
					)}
				</ul>
			</section>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('search-list')) {
	customElements.define('search-list', SearchList);
}
