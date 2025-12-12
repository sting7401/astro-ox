class SettingBar extends HTMLElement {
	constructor() {
		super();
		this.rendered = false;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.rendered = true;
		this.innerHTML = /* HTML */ `
			<aside
				class="group/sidebar fixed top-0 right-0 z-40 touch-none overflow-y-auto transition-discrete aria-hidden:z-0 aria-modal:flex aria-modal:justify-end"
				id="drawNavigation"
				aria-labelledby="drawNavigationLabel"
				:aria-modal="$store.layout.modalOpen === $el.id ? 'true' : 'false'"
				x-show="$store.layout.modalOpen === $el.id"
				x-transition:enter="transition ease-out duration-400"
				x-transition:enter-start="opacity-0 translate-x-6"
				x-transition:enter-end="opacity-100 translate-x-0"
				x-transition:leave="transition ease-in duration-300"
				x-transition:leave-start="opacity-100 translate-x-0"
				x-transition:leave-end="opacity-0 -translate-x-6"
				@click.outside.throttle="$store.layout.modalOpen = ''"
			>
				<section
					class="bg-primary relative flex h-dvh w-[90dvw] max-w-100 translate-x-full flex-col bg-[url(/images/bg/bg-setting-bar.jpg)] bg-size-[auto_105%] bg-center bg-no-repeat p-4 text-white shadow-md transition-all transition-discrete group-aria-modal/sidebar:translate-x-0"
				>
					<h3
						class="flex-none text-xl font-medium"
						id="drawNavigationLabel"
						x-text="$store.layout.m['map.sidebar.more']?.()"
					></h3>
					<button
						class="hover: absolute end-2.5 top-2.5 inline-flex size-10 items-center justify-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 active:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
						type="button"
						@click="$store.layout.modalOpen = ''"
					>
						<icon-list
							class="grid size-4 place-content-center fill-white stroke-none"
							data-name="modal-close"
						></icon-list>
						<span class="sr-only">Close menu</span>
					</button>
					<div class="flex-1 overflow-y-auto py-1">
						<ul class="divide-y divide-white/10 text-[.9375rem] leading-tight font-medium">
							<li class="py-3">
								<h4 class="group flex items-center rounded-lg py-2">
									<icon-list
										class="stroke-ffb0bd grid size-5 place-content-center fill-none"
										data-name="global"
									></icon-list>
									<span class="ms-2.5" x-text="$store.layout.m['map.sidebar.language']?.()"></span>
								</h4>

								<ul class="space-y-2 pl-7.5" x-data="{ lang: 'ko' }">
									<template x-for="lang in $store.layout.langs" :key="lang.id">
										<li>
											<button
												class="group flex w-full items-center rounded-lg px-3 py-2.25 hover:bg-white/10 aria-current:bg-white/10"
												type="button"
												:class="{ 'bg-white/10': $store.layout.currentLang === String(lang.id) }"
												@click="$store.layout.setLang(String(lang.id));"
											>
												<span x-text="lang.text"></span>
											</button>
										</li>
									</template>
								</ul>
							</li>
							<li class="py-3">
								<button
									class="group flex w-full items-center rounded-lg py-2 hover:bg-white/10"
									type="button"
									@click.stop="$store.layout.modalView = 'reportInconvenience';"
								>
									<icon-list
										class="stroke-ffb0bd grid size-5 place-content-center fill-none"
										data-name="park-solid-alarm"
									></icon-list>
									<p class="gap-.5 relative flex">
										<span
											class="ms-2.5"
											x-text="$store.layout.m['map.sidebar.complaint']?.()"
										></span>
									</p>
								</button>
							</li>
							<li class="py-3">
								<a
									class="group flex items-center rounded-lg py-2 hover:bg-white/10"
									:href="$store.layout.m['map.sidebar.satisfaction_link']?.()"
									target="_blank"
									rel="noopener noreferrer"
								>
									<icon-list
										class="stroke-ffb0bd grid size-5 place-content-center fill-none"
										data-name="clipboard-text"
									></icon-list>
									<p class="gap-.5 relative flex">
										<span
											class="ms-2.5"
											x-text="$store.layout.m['map.sidebar.satisfaction']?.()"
										></span>
										<i class="bg-ff4d4a hidden size-1.25 rounded-full" aria-label="more"></i>
										<!-- 만족도 조사 이력 있을 때 -->
									</p>
								</a>
							</li>
							<li class="py-3">
								<a
									class="group flex items-center rounded-lg py-2 hover:bg-white/10"
									:href="$store.layout.m['map.sidebar.tree_link']?.()"
									target="_blank"
									rel="noopener noreferrer"
								>
									<icon-list
										class="stroke-ffb0bd grid size-5 place-content-center fill-none"
										data-name="tree"
									></icon-list>
									<p class="gap-.5 relative flex">
										<span class="ms-2.5" x-text="$store.layout.m['map.sidebar.three']?.()"></span>
									</p>
								</a>
							</li>
						</ul>
					</div>

					<div class="mt-auto flex flex-none flex-col gap-2.5 text-sm text-pretty">
						<h4 class="text-base font-bold">
							<a
								class="flex items-center gap-1"
								:href="$store.layout.m['map.sidebar.show_link']?.()"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="text-base" x-text="$store.layout.m['time.info']?.()"></span>
								<icon-list
									class="grid size-4 place-content-center fill-none stroke-white/50"
									data-name="new-window"
								></icon-list>
							</a>
						</h4>

						<dl class="grid grid-cols-[2.8125rem_1fr] space-y-1">
							<dt class="text-base font-bold">
								<p class="text-sm font-medium" x-text="$store.layout.m['time.date']?.()"></p>
							</dt>
							<dd class="flex flex-col gap-1">
								<p x-text="$store.layout.m['time.date_range']?.()"></p>
								<ul>
									<li
										class="before flex items-center gap-1 before:size-1 before:bg-white"
										x-text="$store.layout.m['time.date_range_1']?.()"
									></li>
									<li
										class="before flex items-center gap-1 before:size-1 before:bg-white"
										x-text="$store.layout.m['time.date_range_2']?.()"
									></li>
								</ul>
							</dd>
						</dl>
						<dl class="grid grid-cols-[2.8125rem_1fr] space-y-1">
							<dt class="text-base font-bold">
								<p class="text-sm font-medium" x-text="$store.layout.m['time.time']?.()"></p>
							</dt>
							<dd class="flex flex-col gap-1">
								<ul>
									<li class="grid grid-cols-[3.75rem_1fr]">
										<p x-text="$store.layout.m['time.time_day_1']?.()"></p>
										<p x-text="$store.layout.m['time.time_range_1']?.()"></p>
									</li>
									<li class="grid grid-cols-[3.75rem_1fr]">
										<p x-text="$store.layout.m['time.time_day_2']?.()"></p>
										<p x-text="$store.layout.m['time.time_range_2']?.()"></p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</section>
			</aside>
		`;
	}
}

if (!customElements.get('setting-bar')) {
	customElements.define('setting-bar', SettingBar);
}
