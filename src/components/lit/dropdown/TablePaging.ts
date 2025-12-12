import { LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('table-paging')
export class tablePaging extends LitElement {
	createRenderRoot() {
		return this;
	}

	render(): TemplateResult {
		return html`
			<div
				class="relative z-5 inline-flex min-w-32.5 justify-end"
				x-data="{ 
								dropdown : false, 
								active: '20개씩 보기', 
								list: ['10개씩 보기', '20개씩 보기', '30개씩 보기', '50개씩 보기', '100개씩 보기'],
								get itemsToShow() {
									return parseInt(this.active.replace(/D/g, '')) || 20;
									} 
								}"
				x-on:click.outside.throttle="dropdown = false"
			>
				<button
					class="text-2sm text-666 button group/drop-btn py-4.5"
					id="tbl-num-view"
					type="button"
					aria-haspopup="menu"
					:aria-expanded="dropdown"
					aria-label="Dropdown"
					x-on:click.prevent="dropdown = !dropdown;"
				>
					<span x-text="active"></span>
					<icon-list
						class="relative size-5 stroke-black transition-all group-aria-expanded/drop-btn:rotate-180"
						data-name="arrow-down"
					></icon-list>
				</button>

				<ul
					class="border-e9e9e9 text-666 absolute end-0 top-full rounded-lg border bg-white py-1.25"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="tbl-num-view"
					x-transition:enter="transition ease-out duration-300"
					x-transition:enter-start="opacity-0 scale-90"
					x-transition:enter-end="opacity-100 scale-100"
					x-transition:leave="transition ease-in duration-300"
					x-transition:leave-start="opacity-100 scale-100"
					x-transition:leave-end="opacity-0 scale-90"
					x-cloak
					x-show="dropdown === true"
					style="display: none;"
				>
					<template x-for="item in list">
						<li role="presentation">
							<button
								class="button text-2xs hover:bg-eef2f8 min-h-7.5 w-full justify-end px-2.5"
								type="button"
								:class="{ 'text-primary bg-eef2f8': active === item }"
								x-text="item"
								@click.prevent="active = item; dropdown = false; $store.table.itemsToShow = itemsToShow; $store.table.currentPage = 1;"
							></button>
						</li>
					</template>
				</ul>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'table-paging': tablePaging;
	}
}
