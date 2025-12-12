import { $i18n } from '@/i18n/localize';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';

/** @extends {LitElement} */
export class SearchMultipleList extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}
	i18n = new StoreController(this, $i18n);

	static properties = {
		title: { type: String },
		searchMultipleList: { type: Array },
	};

	/**
	 * Creates an instance of SearchMultipleList.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		/** @type {String} */
		this.title = '';
		/** @type {any[]} */
		this.searchMultipleList = [];
	}

	resetItems() {
		this.searchMultipleList = [];
	}

	/**
	 * Description 리스트트 항목 추가
	 *
	 * @param {*} newItem
	 */
	setList(newItem) {
		this.searchMultipleList = [...newItem];
	}

	render() {
		return this.searchMultipleList.length > 0
			? html`
					<div class="flex h-full flex-col">
						<div class="w-ful snap-y overflow-x-hidden overflow-y-auto">
							<ul class="divide-ccc relative z-10 divide-y bg-white">
								${this.searchMultipleList.map(
									(item) => html`
										<li class="flex w-full py-3">
											<search-item
												class="w-full"
												images=${item.image}
												title=${item.title}
												location=${item.location}
												stage=${item.stage}
												date=${item.date}
												time=${item.time}
												.favor=${item.favor}
												.badgeCurrent=${item.badgeCurrent}
												direction=${item.direction}
												data-direction-icon=${item.directionIcon}
											></search-item>
										</li>
									`,
								)}
							</ul>
						</div>
					</div>
				`
			: html``;
	}
}

if (typeof window !== 'undefined' && !customElements.get('search-multiple-list')) {
	customElements.define('search-multiple-list', SearchMultipleList);
}
