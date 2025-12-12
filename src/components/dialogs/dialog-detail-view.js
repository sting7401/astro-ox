import { dialogDetailViewEvent, findingDirectionsStartEvent } from '@/events/btnModalEvent';
import { searchAllViewEvent } from '@/events/searchFieldEvent';
import { $i18n } from '@/i18n/localize';
import { $currentPageView } from '@/stores/pageStore';
import { StoreController } from '@nanostores/lit';
import { LitElement, html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

/** @extends {LitElement} */
export class DialogDetailView extends LitElement {
	createRenderRoot() {
		return this; // Shadow DOM 비활성화
	}
	_currentPageView = new StoreController(this, $currentPageView);
	i18n = new StoreController(this, $i18n);

	/** @type {number | null} */
	heightUpdateFrameId = null;
	dialogRef = createRef();
	bottomSheetRef = createRef();
	contentRef = createRef();

	static properties = {
		modalView: { type: String, attribute: 'data-modal-view' },
		bottomSheetView: { type: Boolean },
		badgeTitle: { type: String, reflect: true, attribute: 'data-badge-title' },
		badgeParking: { type: String, reflect: true, attribute: 'data-badge-parking' },
		badgeCurrent: { type: String, reflect: true, attribute: 'data-badge-current' },
		image: { type: String, reflect: true, attribute: 'data-view-image' },
		title: { type: String, reflect: true, attribute: 'data-view-title' },
		location: { type: String, reflect: true, attribute: 'data-view-location' },
		stage: { type: String, reflect: true, attribute: 'data-view-stage' },
		date: { type: String, reflect: true, attribute: 'data-view-date' },
		time: { type: String, reflect: true, attribute: 'data-view-time' },
		favor: { type: String, reflect: true, attribute: 'data-view-favor' },
		subtext: { type: String, reflect: true, attribute: 'data-view-subtext' },
		directions: { type: String, reflect: true, attribute: 'data-view-directions' },
		viewAll: { type: String, reflect: true, attribute: 'data-view-all' },
	};

	constructor() {
		super();

		/** @type {string} */
		this.modalView = 'bottom-view';
		/** @type {string} */
		this.badgeTitle = '';
		/** @type {string} */
		this.badgeParking = '';
		/** @type {string} */
		this.badgeCurrent = '';
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
		this.subtext = '';
		/** @type {string} */
		this.directions = '';
		/** @type {string} */
		this.viewAll = '';
		/** @type {string} */
		this.badgeType = '';
		/** @type {string} */
		this.badgeText = '';
		/** @type {string} */
		this.badgeBgColor = '';
		/** @type {string} */
		this.badgeBorderColor = '';

		this.bottomSheetView = false;
		this.defaultVh = 0; // default height of data-sheet="wrapper" (vh)
		this.beforeVh = 0; // height of data-sheet="wrapper" before change (vh)
		this.maxVh = 100;
		this.sheetHeight = 0; // height of data-sheet="wrapper" (vh)
		this.mobileVh = window.innerHeight * 0.01; // 1vh
		this.aniFrame = null;
	}

	open() {
		this?.dialogRef?.value?.show?.();
		this.dialogRootHeight?.(); // 열릴 때도 높이 계산 요청
	}

	close() {
		this.dialogRef?.value?.show?.();
		this.modalView = 'bottom-view';
	}

	/**
	 * Description 현재창 닫기
	 *
	 * @param {Event} event
	 */
	handleCloseClick(event) {
		event.stopPropagation();
		this.close?.();
		dialogDetailViewEvent('bottom-view', 'open');
	}

	dialogRootHeight() {
		if (this.heightUpdateFrameId !== 0) {
			cancelAnimationFrame(this.heightUpdateFrameId);
			this.heightUpdateFrameId = 0;
		}

		this.heightUpdateFrameId = requestAnimationFrame(() => {
			this.heightUpdateFrameId = 0;
			if ($currentPageView.get() === 'page-default') {
				const { body } = document;
				const { style } = body;
				const dialogChildren = this?.querySelector('[data-sheet="content"]');
				style?.setProperty('--bottom-dialog-height', `${Number(dialogChildren?.clientHeight)}px`);
			}
		});
	}

	_toggleListener() {
		this.dialogRootHeight?.();
	}

	renderBottomSheet() {
		const sheetWrapperDiv = this.querySelector('[data-sheet="wrapper"]');
		const draggableAreaDiv = this.querySelector('[data-sheet="draggable-area"]');
		const bottomSheetEl = this.querySelector('bottom-sheet');
		let dragStartY = 0;
		let isDragging = false;

		const onPointerDown = (event) => {
			event.preventDefault();
			event.stopPropagation();

			dragStartY = event.clientY;
			isDragging = true;
			sheetWrapperDiv?.classList.add('not-selectable');

			// pointer capture for smooth dragging even outside bounds
			draggableAreaDiv?.setPointerCapture(event.pointerId);
		};

		const onPointerMove = (event) => {
			if (!isDragging) return;

			const currentY = event.clientY;
			const deltaY = dragStartY - currentY;
			const deltaHeight = (deltaY / window.innerHeight) * 100;

			this.setSheetHeight(this.sheetHeight + deltaHeight);
			dragStartY = currentY;
		};

		const onPointerUp = (event) => {
			if (!isDragging) return;

			isDragging = false;
			dragStartY = 0;
			sheetWrapperDiv?.classList.remove('not-selectable');

			// Release pointer capture
			draggableAreaDiv?.releasePointerCapture(event.pointerId);

			const maxVh = Number(bottomSheetEl?.getAttribute('data-max-height') || 100);
			this.maxVh = maxVh;

			if (this.sheetHeight < this.beforeVh) {
				this.openSheet();
				this.bottomSheetView = false;
			} else if (this.sheetHeight > this.defaultVh) {
				this.setSheetHeight(this.maxVh);
				this.bottomSheetView = true;
			} else {
				this.setSheetHeight(this.defaultVh);
				this.bottomSheetView = false;
			}

			this.beforeVh = this.sheetHeight;
		};

		draggableAreaDiv?.addEventListener('pointerdown', onPointerDown);
		draggableAreaDiv?.addEventListener('pointermove', onPointerMove);
		draggableAreaDiv?.addEventListener('pointerup', onPointerUp);
	}

	setSheetHeight(heightVh = 0) {
		const sheetWrapper = this.querySelector('[data-sheet="wrapper"]');
		this.sheetHeight = Math.max(0, Math.min(100, heightVh));
		// sheetWrapper.style.height = `${this.sheetHeight * this.mobileVh}px`;

		if ($currentPageView.get() === 'page-default') {
			const { body } = document;
			const { style } = body;
			style?.setProperty('--bottom-sheet-height', `${Math.floor(this.sheetHeight * this.mobileVh)}px`);
		}

		if (this.querySelector('bottom-sheet')?.getAttribute('data-max-height')) {
			return;
		}

		if (this.sheetHeight === 100) {
			sheetWrapper?.classList.add('fullscreen');
		} else {
			sheetWrapper?.classList.remove('fullscreen');
		}
	}
	setIsSheetShown(isShown = false) {
		this.setAttribute('aria-hidden', String(!isShown));
		if (isShown) {
			document.body.classList.add('no-scroll');
		} else {
			const shownBottomSheet = Array.from(document.querySelectorAll('bottom-sheet')).find(
				(el) => el.ariaHidden === 'false',
			);
			if (!shownBottomSheet) {
				document.body.classList.remove('no-scroll');
			}
		}
	}

	openSheet() {
		if (this.defaultVh === 0) {
			const sheetWrapperDiv = this?.contentRef.value;

			if (this.getAttribute('vh')) {
				this.defaultVh = Number(this.getAttribute('vh'));
			} else {
				this.defaultVh = Number((sheetWrapperDiv?.offsetHeight / window.innerHeight) * 100);
			}
		}

		this.beforeVh = this.defaultVh;
		this.setSheetHeight(this.defaultVh);
		this.setIsSheetShown(true);
	}

	openFullSheet() {
		this.beforeVh = 100;
		this.setSheetHeight(100);
		this.setIsSheetShown(true);
	}

	closeSheet() {
		this.setSheetHeight(0);
		this.setIsSheetShown(false);
	}

	fullSheet() {
		this.beforeVh = 100;
		this.setSheetHeight(100);
	}

	disconnectedCallback() {
		if (this.heightUpdateFrameId !== null) {
			cancelAnimationFrame(this.heightUpdateFrameId);
			this.heightUpdateFrameId = null;
		}
		super.disconnectedCallback?.();
	}

	firstUpdated() {
		if ($currentPageView.get() === 'page-default') {
			const { body } = document;
			const { style } = body;
			this.openSheet();
			this.renderBottomSheet();
			style?.setProperty('--bottom-sheet-height', `${Math.floor(this.sheetHeight * this.mobileVh)}px`);
			this.dialogRootHeight?.();
		}
	}

	/**
	 *
	 * @param {*} changed
	 */
	updated(changed) {
		// modalView 변경 시만 높이 갱신

		if (changed.has('modalView')) {
			this.dialogRootHeight?.();
		}
	}

	render() {
		this.modalViewClass =
			this.modalView === 'modal-view'
				? 'top-0 z-20 flex-col place-content-center h-dvh backdrop:bg-black/40 open:bg-black/60 open:flex'
				: 'bottom-0 open:block';

		const innerWrap = html`<div
                ${ref(this.contentRef)}
                class="border-cbd2e0 relative flex flex-col gap-1.5 overflow-x-hidden overflow-y-auto rounded-t-[1.25rem] border bg-white px-3 pt-7 pb-3 group-aria-modal/modal:h-full"
            >
                <div data-sheet="operate" class="space-y-1.5">
                    <div class="flex items-center gap-1.5">
                        <badge-item data-badge-type="bg" data-badge-text="${this.badgeTitle}"></badge-item>
                        <badge-item
                            data-badge-type="bg"
                            data-badge-bg-color="bg-0094ff"
                            data-badge-text="${this.badgeParking}"
                        ></badge-item>
                        <badge-item data-badge-type="border" data-badge-text="${this.badgeCurrent}"></badge-item>
                    </div>

                    <div>
                        <search-item
                            images=${this.image}
                            title=${this.title}
                            location=${this.location}
                            stage=${this.stage}
                            date=${this.date}
                            time=${this.time}
                        ></search-item>
                    </div>

                    ${
						this.subtext
							? html`
									<accordion-detail-view
										data-subtext="${this.subtext}"
										@dispatchToggle=${this._toggleListener}
									></accordion-detail-view>
								`
							: ''
					}

                    <div class="grid grid-cols-1 gap-1.5 tracking-tighter">
                        <button
                            type="button"
                            id="findingDirectionBtn"
                            class="bg-edf0f7 text-2d3648 gird min-h-10 place-content-center rounded-[.375rem] p-2 leading-tight active:scale-101"
                            aria-label=${this.i18n.value.btn.findingDirections}
                            @click=${findingDirectionsStartEvent}
                        >
                            <span>${this.i18n.value.btn.fromCurrentLocation}</span>
                            <strong>${this.directions}</strong>
                            <strong
                                class="before relative inline-flex items-center gap-1.5 before:block before:h-2.25 before:w-px before:bg-black/30"
                            >
                                <icon-list
                                    data-name="finding-directions"
                                    class="fill-2d3648 size-4 flex-none stroke-none"
                                ></icon-list
                                >${this.i18n.value.btn.findingDirections}</strong
                            >
                        </button>
                        <button
                            type="button"
                            id="goOrderBtn"
                            class="bg-2d3648 gird min-h-10 place-content-center rounded-[.375rem] p-2 leading-tight text-white active:scale-101"
                            aria-label=${this.i18n.value.btn.goOrder}
                        >
                            <strong>${this.i18n.value.btn.goOrder}</strong>
                        </button>
                    </div>
                </div>

                <search-multiple-list></search-multiple-list>
            </div>
        </div>`;

		return html`
			${this.modalView === 'bottom-view'
				? html`
						<bottom-sheet
							class="group/modal fixed bottom-0 left-0 z-30 w-full transition-[opacity,visibility] duration-300 aria-hidden:opacity-0"
							id="dialogDetailView"
							aria-hidden="false"
							data-max-height="97"
							aria-modal=${this.bottomSheetView}
						>
							<div
								class="relative flex h-(--bottom-sheet-height) max-h-dvh min-h-(--bottom-dialog-height) w-full translate-y-0 flex-col rounded-t-[1.875rem] bg-white transition-[height,transform,border-radius] duration-500"
								data-sheet="wrapper"
							>
								${this.viewAll === 'active' && this.modalView === 'bottom-view'
									? html`
											<button
												class="group absolute top-0 right-0 left-0 z-5 inline-flex items-center justify-center rounded-t-[1.875rem] bg-white pt-2 select-none"
												type="button"
												aria-expended=${this.bottomSheetView}
												data-sheet="draggable-area"
												@pointermove=${searchAllViewEvent}
											>
												<span
													class="before: before:bg-d9d9d9 inline-flex h-5 w-30 items-start justify-center transition-all before:h-1 before:w-full before:rounded-sm group-active:before:scale-105 group-active:before:bg-black"
												></span>
											</button>
										`
									: ''}
								<div class="group-aria-modal/modal:h-full" data-sheet="content">${innerWrap}</div>
							</div>
						</bottom-sheet>
					`
				: html`
						<dialog
							class="${this
								.modalView} fixed left-0 w-full -translate-y-5 bg-transparent px-2 opacity-0 transition-all transition-discrete open:translate-y-0 open:opacity-100"
							id="dialogDetailView"
							${ref(this.dialogRef)}
							role="dialog"
							open
							aria-labelledby="dialogTitle"
							aria-describedby="dialogDesc"
						>
							${innerWrap}
							${this.modalView === 'modal-view'
								? html`
										<div class="absolute top-2.5 right-2">
											<button
												class="text-8e8e8e active:bg-eee flex size-7.5 place-content-center items-center rounded-[.375rem] px-1 py-2"
												id="findingDirectionCloseBtn"
												type="button"
												aria-label="close modal"
												@click=${this.handleCloseClick}
											>
												<span class="sr-only">close modal</span>
												<icon-list
													class="size-4 fill-black stroke-none"
													data-name="modal-close"
												></icon-list>
											</button>
										</div>
									`
								: ''}
						</dialog>
					`}
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('dialog-detail-view')) {
	customElements.define('dialog-detail-view', DialogDetailView);
}
