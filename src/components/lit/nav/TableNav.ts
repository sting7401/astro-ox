import { LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('table-nav')
export class tableNav extends LitElement {
	createRenderRoot() {
		return this;
	}

	render(): TemplateResult {
		return html`
			<nav class="flex justify-center rounded-b-lg bg-white p-2.25" aria-label="Page navigation example">
				<ul class="text-2sm inline-flex gap-1.5">
					<!-- 처음 버튼 -->
					<li>
						<button
							class="button hover:border-primary border-ddd min-h-10.5 rounded-lg border bg-white px-0.75 disabled:opacity-30"
							type="button"
							title="처음"
							x-on:click="$store.table.firstPage()"
							:disabled="$store.table.currentPage === 1"
						>
							<span class="sr-only">처음</span>
							<icon-list
								class="relative h-6 w-9 stroke-black transition-all"
								data-name="arrow-left-double"
							></icon-list>
						</button>
					</li>

					<!-- 이전 버튼 -->
					<li>
						<button
							class="button hover:border-primary border-ddd min-h-10.5 rounded-lg border bg-white px-3 disabled:opacity-30"
							type="button"
							title="이전"
							x-on:click="$store.table.prevPage()"
							:disabled="$store.table.currentPage === 1"
						>
							<icon-list
								class="relative size-6 stroke-black transition-all"
								data-name="arrow-left"
							></icon-list>
							<span>이전</span>
						</button>
					</li>

					<!-- 페이지 번호 버튼 -->
					<template x-for="page in $store.table.visiblePages" :key="page">
						<li>
							<button
								class="button hover:border-primary border-ddd aria-selected:border-primary min-h-10.5 min-w-10.5 rounded-lg border bg-white px-3 disabled:opacity-30"
								type="button"
								:class="{ 'bg-primary text-primary font-bold': $store.table.currentPage === page }"
								x-on:click="$store.table.goToPage(page)"
								:aria-current="$store.table.currentPage === page ? 'page' : false"
							>
								<span x-text="page"></span>
							</button>
						</li>
					</template>

					<!-- 다음 버튼 -->
					<li>
						<button
							class="button hover:border-primary border-ddd min-h-10.5 rounded-lg border bg-white px-3 disabled:opacity-30"
							type="button"
							title="다음"
							x-on:click="$store.table.nextPage()"
							:disabled="$store.table.currentPage === $store.table.totalPages"
						>
							<span>다음</span>
							<icon-list class="relative size-6 stroke-black" data-name="arrow-right"></icon-list>
						</button>
					</li>

					<!-- 마지막 버튼 -->
					<li>
						<button
							class="button hover:border-primary border-ddd min-h-10.5 rounded-lg border bg-white px-0.75 disabled:opacity-30"
							type="button"
							title="마지막"
							x-on:click="$store.table.lastPage()"
							:disabled="$store.table.currentPage === $store.table.totalPages"
						>
							<span class="sr-only">마지막</span>
							<icon-list
								class="relative h-6 w-9 rotate-180 stroke-black transition-all"
								data-name="arrow-left-double"
							></icon-list>
						</button>
					</li>
				</ul>
			</nav>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'table-nav': tableNav;
	}
}
