import { categoryEvent } from '@/events/categoryEvent';
import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import Sortable from 'sortablejs';

export class categoryLabels extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}

	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);
	navRef = createRef();
	listRef = createRef();

	static properties = {
		enable: { type: String },
		categoryLabelList: { type: Array },
	};

	constructor() {
		super();
		/** @type {{ id: string, img:string,  text: string, checkValue: boolean }[]} */
		this.categoryLabelList = [];
		this.sortable = null;
		this.enable = 'disabled';
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.sortable = null;
	}

	firstUpdated() {
		// 외부에서 categoryLabelList가 주어지지 않았다면 내부 기본값 설정
		if (!this.categoryLabelList || this.categoryLabelList.length === 0) {
			this._updateCategoryLabels();
		}

		this.sortEvent();
	}

	/**
	 * Description placeholder
	 *
	 * @param {*} changedProps
	 */
	willUpdate(changedProps) {
		if (changedProps.has('enable')) {
			this.sortEvent();
		}
	}

	/** Description 기본 나열 */
	_updateCategoryLabels() {
		const t = this.i18n.value.category;
		this.categoryLabelList = [
			{
				id: 'performance',
				img: '/images/category/category-sample-1.png',
				text: t.performance,
				checkValue: false,
			},
			{
				id: 'food',
				img: '/images/category/category-sample-2.png',
				text: t.food,
				checkValue: false,
			},
			{
				id: 'restroom',
				img: '/images/category/category-sample-3.png',
				text: t.restroom,
				checkValue: false,
			},
			{
				id: 'parking',
				img: '/images/category/category-sample-4.png',
				text: t.parking,
				checkValue: false,
			},
			{ id: 'aed', img: '/images/category/category-sample-5.png', text: t.aed, checkValue: false },
		];
	}

	/**
	 * Description 카테고리 항목 추가
	 *
	 * @param {*} newItem
	 */
	setList(newItem) {
		this.categoryLabelList = [...newItem];
	}

	/**
	 * Description 카테고리 활성화
	 *
	 * @param {Event} event
	 */
	handleCheckboxChange = (event) => {
		const target = /** @type {HTMLInputElement} */ (event.target);
		const id = target.id.replace('Label', '');
		const isChecked = target.checked;
		let newList = [];

		if (id === 'all') {
			// 전체 선택일 때는 all만 true, 나머지는 false
			newList = this.categoryLabelList.map((item) => ({
				...item,
				checkValue: isChecked ? isChecked : false,
			}));
		} else {
			newList = this.categoryLabelList.map((item) =>
				item.id === id ? { ...item, checkValue: isChecked } : item,
			);
			// 변경된 newList 기준으로 allTrue 계산
			const allTrue = newList.filter((item) => item.id !== 'all').every((item) => item.checkValue);
			// all 아이템 상태 업데이트
			newList = newList.map((item) => (item.id === 'all' ? { ...item, checkValue: allTrue } : item));
		}

		this.categoryLabelList = [...newList];
	};

	sortEvent() {
		if (this.listRef.value) {
			if (this.enable === 'enable') {
				if (this.sortable === null) {
					this.sortable = new Sortable(this?.listRef?.value, {
						animation: 150,
						ghostClass: 'blue-background-class',
					});
				}
			} else if (this.enable === 'disabled') {
				if (this.sortable) {
					this.sortable?.destroy();
					this.sortable = null;
				}
			}
		}
	}

	render() {
		const resultCategoryClass =
			this._currentPageView.value === 'page-search'
				? 'shadow-none border-ccc has-checked:border-2070fb'
				: 'border-transparent';
		const scrollClass =
			this.getAttribute('data-scroll') === 'none'
				? ''
				: 'overflow-y-hidden overflow-x-auto [&::-webkit-scrollbar]:h-1.25 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-2070fb';
		const scrollWrapClass = this.getAttribute('data-scroll') === 'none' ? 'flex-wrap items-start' : 'items-center';

		return html`
			<nav class="${scrollClass} w-full pl-5" ${ref(this.navRef)}>
				<ul class="${scrollWrapClass} flex w-full gap-2 pb-1" ${ref(this.listRef)} data-category-labels="ul">
					${this.categoryLabelList.map(
						({ id = '', img = '', text = '', checkValue = false }) => html`
							<li
								class="${resultCategoryClass} has-checked:bg-2070fb flex-none rounded-[1.3125rem] border bg-white shadow-[0_4px_4px_0_rgba(0,0,0,.15)] transition-colors duration-75 has-checked:shadow-[0_4px_4px_0_#0012a04d]"
							>
								<label
									class="group/category flex size-full min-h-9 items-center justify-center gap-1 px-3 select-none"
									for="${id}Label"
									@click=${categoryEvent}
								>
									<input
										class="peer sr-only"
										id="${id}Label"
										type="checkbox"
										name="${id}Label"
										title=${text}
										.checked=${checkValue}
										@change=${this.handleCheckboxChange}
									/>
									${img !== ''
										? html`
												<picture
													class="peer-checked:brightness-0 peer-checked:invert peer-checked:filter"
												>
													<img
														class="h-5 w-5 flex-none stroke-none"
														.src=${img}
														alt="${text} 아이콘 이미지"
													/>
												</picture>
											`
										: ``}
									<span
										class="text-2d3648 flex-none text-center text-[.8125rem] leading-tight -tracking-[.8px] text-nowrap transition-colors duration-75 peer-checked:text-white"
									>
										${text}
									</span>
								</label>
							</li>
						`,
					)}
				</ul>
			</nav>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('category-labels')) {
	customElements.define('category-labels', categoryLabels);
}
