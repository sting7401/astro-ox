class ListCourse extends HTMLElement {
	constructor() {
		super();
		this.rendered = false;
	}

	connectedCallback() {
		this.render();
	}

	lists() {
		return /* HTML */ ``;
	}

	render() {
		this.innerHTML = /* HTML */ `
			<template x-for="(detail, idx) in $store.course?.details" :key="idx">
				<template x-if="$store.map.mode === 'course'">
					<template x-if="idx === $store.course.current">
						<ul class="relative snap-y snap-center">
							<li class="group relative flex flex-col gap-3 px-5 pb-6">
								<section
									class="flex min-h-37.5 flex-col justify-between gap-1.5 overflow-clip rounded-xl bg-center bg-no-repeat tracking-tighter wrap-break-word break-all"
									:class="detail.img ? 'bg-cover' : 'bg-[url(/images/dummy/img-thumbnail-list.png)] bg-size-[9.9375rem_auto] bg-eee'"
									:style="detail.img ? \`background-image: url(\${detail.img});\` : ''"
									x-data="{
                        get from_current_location() {
                            return $store.layout.m['map.btn.from_current_location']?.();
                        },
                        get finding_directions() {
                            return $store.layout.m['map.btn.finding_directions']?.();
                        }
                    }"
								>
									<div
										class="mt-auto flex items-center justify-between gap-2 bg-linear-[0deg,black_0%,rgba(0,0,0,0)_100%] px-2 py-3"
									>
										<card-img
											:title="detail?.[$store.layout.getLang()]?.title"
											:badgeCategoryText="detail[$store.layout.getLang()]?.badgeCategoryText"
											:time="detail?.time"
											:distance="detail?.distance"
										></card-img>

										<!-- 코스/난이도 -->
										<template
											x-if="detail[$store.layout.getLang()]?.courseCurrent || detail?.difficulty"
										>
											<badge-course
												:courseCurrent="detail[$store.layout.getLang()]?.courseCurrent"
												:difficulty="detail?.difficulty"
											></badge-course>
										</template>
									</div>
								</section>

								<template x-if="detail[$store.layout.getLang()]?.courses">
									<card-course :courses="detail[$store.layout.getLang()]?.courses"></card-course>
								</template>

								<template x-if="detail[$store.layout.getLang()]?.message">
									<card-message :message="detail[$store.layout.getLang()]?.message"></card-message>
								</template>
							</li>

							<li
								class="border-f6f6f6 hidden border-t-6 leading-tight text-pretty text-black group-aria-[label=expanded]/course:block"
							>
								<dl
									class="space-y-5 py-6"
									x-data="{scrollBooster : null}"
									x-init="
                  $watch('$store.map.bottomViewCollapse', () => {
                      $nextTick(() => {
                      scrollBooster = $store.course.scrollMoveHandler(scrollBooster, $refs.viewport, $refs.content);
                      });
                  })
                "
								>
									<dt class="flex items-center gap-4 px-5">
										<h4
											class="text-lg font-bold text-black"
											x-text="$store.layout.m['map.course.section']?.()"
										></h4>
										<ul class="flex items-center gap-2">
											<template x-for="(difficult, idx) in $store.course.difficult" :key="idx">
												<li
													class="before flex items-center gap-1.5 text-[.8125rem] before:flex before:size-2.5 before:rounded-full"
													:class="difficult.class"
												>
													<span x-text="difficult.text"></span>
												</li>
											</template>
										</ul>
									</dt>
									<dd class="overflow-x-auto overflow-y-clip" x-ref="viewport">
										<picture class="grid h-50.25 w-189.25 px-5" x-ref="content">
											<img
												class="h-full"
												:src="\`/images/course/course-chart-\${$store.course.current + 1}.png\`"
												:alt="$store.course.details[Number($store.course.current)]?.[$store.layout.getLang()]?.title + $store.layout.m['map.course.area_below']?.() || ''"
											/>
										</picture>
									</dd>
								</dl>
							</li>

							<li
								class="border-f6f6f6 hidden border-t-6 leading-tight text-pretty text-black group-aria-[label=expanded]/course:block"
							>
								<dl class="space-y-5 py-6">
									<dt class="flex items-center gap-4 px-5">
										<h4
											class="text-lg font-bold text-black"
											x-text="$store.layout.m['map.course.detailed']?.()"
										></h4>
									</dt>
									<dd>
										<ol class="space-y-5" :aria-label="detail?.[$store.layout.getLang()]?.title">
											<template
												x-for="(route, ridx) in detail?.[$store.layout.getLang()]?.routes"
												:key="ridx"
											>
												<li class="grid grid-cols-[1.25rem_1fr] gap-1.5 pl-5">
													<div
														class="after after:bg-15c232 flex flex-col items-center justify-center gap-2 after:block after:h-full after:w-0.5 after:flex-1 after:rounded-full"
													>
														<p
															class="bg-15c232 grid size-5 place-content-center rounded-full text-white"
															x-text="ridx + 1"
														></p>
													</div>

													<div class="flex flex-col gap-4">
														<template x-if="route?.subtitle || route?.content">
															<div class="flex flex-col gap-4 pr-5">
																<template x-if="route?.subtitle">
																	<p
																		class="text-[.9375rem] font-bold"
																		x-text="route?.subtitle"
																	></p>
																</template>
																<template x-if="route?.content">
																	<p
																		class="text-444 text-[.8125rem]"
																		x-html="route?.content"
																	></p>
																</template>
															</div>
														</template>

														<template x-if="route?.imgs && route?.imgs.length > 0">
															<div
																class="w-[calc(100dvw-2.5rem)] overflow-x-auto overflow-y-clip pt-1"
																x-ref="viewportImgWrap"
																x-data="{scrollImgWrap : null}"
																x-init="
                                $watch('$store.map.bottomViewCollapse', () => {
                                  $nextTick(() => {
                                    scrollBooster = $store.course.scrollMoveHandler(scrollImgWrap, $refs.viewportImgWrap, $refs.viewportImgContent);
                                  });
                                })
                              "
															>
																<ul class="flex gap-1.5" x-ref="viewportImgContent">
																	<template
																		x-for="(img, ix) in route?.imgs"
																		:key="ix"
																	>
																		<li
																			class="size-45 flex-none overflow-hidden rounded-xl"
																		>
																			<picture class="flex size-45">
																				<img
																					class="size-full object-cover"
																					:src="\`/images/course/course-\${idx + 1}-\${ridx + 1}-\${ix + 1}.png\`"
																					alt=""
																				/>
																			</picture>
																		</li>
																	</template>
																</ul>
															</div>
														</template>
													</div>
												</li>
											</template>
										</ol>
									</dd>
								</dl>
							</li>
						</ul>
					</template>
				</template>

				<template x-if="$store.map.mode === 'search'">
					ddd
					<template x-if="idx === $store.course.current">
						<ul class="relative snap-y snap-center">
							<li class="group relative flex flex-col gap-3 px-5 pb-6">
								<section
									class="flex min-h-37.5 flex-col justify-between gap-1.5 overflow-clip rounded-xl bg-center bg-no-repeat tracking-tighter wrap-break-word break-all"
									:class="detail.img ? 'bg-cover' : 'bg-[url(/images/dummy/img-thumbnail-list.png)] bg-size-[9.9375rem_auto] bg-eee'"
									:style="detail.img ? \`background-image: url(\${detail.img});\` : ''"
									x-data="{
                        get from_current_location() {
                            return $store.layout.m['map.btn.from_current_location']?.();
                        },
                        get finding_directions() {
                            return $store.layout.m['map.btn.finding_directions']?.();
                        }
                    }"
								>
									<div
										class="mt-auto flex items-center justify-between gap-2 bg-linear-[0deg,black_0%,rgba(0,0,0,0)_100%] px-2 py-3"
									>
										<div class="mt-auto flex flex-1 flex-col gap-1.5">
											<template x-if="detail?.[$store.layout.getLang()]?.title">
												<div class="inline-flex w-full flex-wrap items-center gap-2 text-white">
													<h3
														class="line-clamp-2 text-lg leading-tight font-bold"
														x-text="detail?.[$store.layout.getLang()]?.title"
													></h3>

													<template x-if="detail[$store.layout.getLang()]?.badgeCategoryText">
														<p
															class="line-clamp-2 max-w-full flex-none text-sm leading-tight font-medium break-all"
															x-text="detail[$store.layout.getLang()]?.badgeCategoryText"
														></p>
													</template>
												</div>
											</template>

											<template x-if="detail?.time || detail?.distance">
												<div
													class="text-sm text-[.8125rem] leading-tight text-pretty text-white"
												>
													<div class="flex flex-wrap items-start gap-1">
														<template x-if="detail?.time">
															<p
																class="line-clamp-2"
																x-text="$store.layout.m['map.directions.minutes']?.({time: detail?.time})"
															></p>
														</template>

														<template x-if="detail?.distance">
															<div
																class="nth-4:before relative inline-flex items-center gap-1 nth-4:before:block nth-4:before:h-2.25 nth-4:before:w-px nth-4:before:bg-white"
															>
																<p
																	class="relative line-clamp-2"
																	x-text="detail?.distance + 'km'"
																></p>
															</div>
														</template>
													</div>
												</div>
											</template>
										</div>

										<template
											x-if="detail[$store.layout.getLang()]?.courseCurrent || detail?.difficulty"
										>
											<div class="flex flex-wrap items-center justify-end gap-1">
												<template x-if="detail[$store.layout.getLang()]?.courseCurrent">
													<strong
														class="text-660808 bg-f3eee3 inline-flex flex-none items-center gap-1 rounded-sm p-2 text-sm leading-none font-medium"
													>
														<span
															x-text="detail[$store.layout.getLang()]?.courseCurrent"
														></span>
													</strong>
												</template>

												<template x-if="detail?.difficulty">
													<strong
														class="text-660808 bg-eedac8 inline-flex flex-none items-center gap-px rounded-sm p-2 text-sm leading-none font-medium"
													>
														<span
															class="font-medium break-all"
															x-text="$store.layout.m['map.badge.difficulty']?.() + ' :'"
														></span>
														<span
															class="before before:bg-444/30 relative flex flex-none items-center gap-1 before:block before:h-2 before:w-px"
															x-text="$store.course.difficultCheck(String(detail?.difficulty))"
														></span>
													</strong>
												</template>
											</div>
										</template>
									</div>
								</section>

								<template x-if="detail[$store.layout.getLang()]?.courses">
									<div
										class="border-eee grid min-h-12.5 grid-cols-[3.125rem_1fr] items-center rounded-xl border text-[.8125rem] leading-tight text-pretty break-keep text-black not-has-[p]:hidden"
									>
										<i class="bg-f4f4f5 flex h-full w-12.5 items-center justify-center rounded-xl">
											<icon-list
												class="fill-primary size-5 transition duration-200"
												data-name="category-course"
											></icon-list>
										</i>
										<template x-if="detail[$store.layout.getLang()]?.courses">
											<p class="px-3 py-1" x-text="detail[$store.layout.getLang()]?.courses"></p>
										</template>
									</div>
								</template>

								<template x-if="detail[$store.layout.getLang()]?.message">
									<div
										class="bg-f4f4f5 hidden space-y-2 rounded-xl p-3 text-[.8125rem] leading-tight text-pretty text-black not-has-[p]:hidden group-aria-[label=expanded]/course:block"
									>
										<template x-if="detail[$store.layout.getLang()]?.message">
											<p x-text="detail[$store.layout.getLang()]?.message"></p>
										</template>
									</div>
								</template>
							</li>

							<li
								class="border-f6f6f6 hidden border-t-6 leading-tight text-pretty text-black group-aria-[label=expanded]/course:block"
							>
								<dl
									class="space-y-5 py-6"
									x-data="{scrollBooster : null}"
									x-init="
                  $watch('$store.map.bottomViewCollapse', () => {
                      $nextTick(() => {
                      scrollBooster = $store.course.scrollMoveHandler(scrollBooster, $refs.viewport, $refs.content);
                      });
                  })
                "
								>
									<dt class="flex items-center gap-4 px-5">
										<h4
											class="text-lg font-bold text-black"
											x-text="$store.layout.m['map.course.section']?.()"
										></h4>
										<ul class="flex items-center gap-2">
											<template x-for="(difficult, idx) in $store.course.difficult" :key="idx">
												<li
													class="before flex items-center gap-1.5 text-[.8125rem] before:flex before:size-2.5 before:rounded-full"
													:class="difficult.class"
												>
													<span x-text="difficult.text"></span>
												</li>
											</template>
										</ul>
									</dt>
									<dd class="overflow-x-auto overflow-y-clip" x-ref="viewport">
										<picture class="grid h-50.25 w-189.25 px-5" x-ref="content">
											<img
												class="h-full"
												:src="\`/images/course/course-chart-\${$store.course.current + 1}.png\`"
												:alt="$store.course.details[Number($store.course.current)]?.[$store.layout.getLang()]?.title + $store.layout.m['map.course.area_below']?.() || ''"
											/>
										</picture>
									</dd>
								</dl>
							</li>

							<li
								class="border-f6f6f6 hidden border-t-6 leading-tight text-pretty text-black group-aria-[label=expanded]/course:block"
							>
								<dl class="space-y-5 py-6">
									<dt class="flex items-center gap-4 px-5">
										<h4
											class="text-lg font-bold text-black"
											x-text="$store.layout.m['map.course.detailed']?.()"
										></h4>
									</dt>
									<dd>
										<ol class="space-y-5" :aria-label="detail?.[$store.layout.getLang()]?.title">
											<template
												x-for="(route, ridx) in detail?.[$store.layout.getLang()]?.routes"
												:key="ridx"
											>
												<li class="grid grid-cols-[1.25rem_1fr] gap-1.5 pl-5">
													<div
														class="after after:bg-15c232 flex flex-col items-center justify-center gap-2 after:block after:h-full after:w-0.5 after:flex-1 after:rounded-full"
													>
														<p
															class="bg-15c232 grid size-5 place-content-center rounded-full text-white"
															x-text="ridx + 1"
														></p>
													</div>

													<div class="flex flex-col gap-4">
														<template x-if="route?.subtitle || route?.content">
															<div class="flex flex-col gap-4 pr-5">
																<template x-if="route?.subtitle">
																	<p
																		class="text-[.9375rem] font-bold"
																		x-text="route?.subtitle"
																	></p>
																</template>
																<template x-if="route?.content">
																	<p
																		class="text-444 text-[.8125rem]"
																		x-html="route?.content"
																	></p>
																</template>
															</div>
														</template>

														<template x-if="route?.imgs && route?.imgs.length > 0">
															<div
																class="w-[calc(100dvw-2.5rem)] overflow-x-auto overflow-y-clip pt-1"
																x-ref="viewportImgWrap"
																x-data="{scrollImgWrap : null}"
																x-init="
                                $watch('$store.map.bottomViewCollapse', () => {
                                  $nextTick(() => {
                                    scrollBooster = $store.course.scrollMoveHandler(scrollImgWrap, $refs.viewportImgWrap, $refs.viewportImgContent);
                                  });
                                })
                              "
															>
																<ul class="flex gap-1.5" x-ref="viewportImgContent">
																	<template
																		x-for="(img, ix) in route?.imgs"
																		:key="ix"
																	>
																		<li
																			class="size-45 flex-none overflow-hidden rounded-xl"
																		>
																			<picture class="flex size-45">
																				<img
																					class="size-full object-cover"
																					:src="\`/images/course/course-\${idx + 1}-\${ridx + 1}-\${ix + 1}.png\`"
																					alt=""
																				/>
																			</picture>
																		</li>
																	</template>
																</ul>
															</div>
														</template>
													</div>
												</li>
											</template>
										</ol>
									</dd>
								</dl>
							</li>
						</ul>
					</template>
				</template>
			</template>
		`;
	}
}

if (!customElements.get('list-course')) {
	customElements.define('list-course', ListCourse);
}
