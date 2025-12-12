<svelte:options
	customElement={{
		tag: 'card-detail',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import {
		validCardImgProps,
		type CardImgProps,
		validCardBadgeProps,
		type CardBadgeProps,
	} from '@/types/CardType.svelte';

	let { img, title, badgeCategoryText, time, distance, courseCurrent, difficulty } = $props();
	let validatedImg: CardImgProps = validCardImgProps({ img, title, badgeCategoryText, time, distance });
	({ title, badgeCategoryText, time, distance } = validatedImg);
	let validatedBadge: CardBadgeProps = validCardBadgeProps({ courseCurrent, difficulty });
	({ courseCurrent, difficulty } = validatedBadge);
</script>

<section
	class={[
		'flex min-h-[9.375rem] flex-col justify-between gap-1.5 overflow-clip rounded-xl bg-center bg-no-repeat tracking-tighter wrap-break-word break-all',
		img ? 'bg-cover' : 'bg-eee bg-[url(/images/dummy/img-thumbnail-list.png)] bg-size-[9.9375rem_auto]',
	]}
	style={img ? `background-image: url(${img});` : ''}
>
	<div class="relative flex flex-wrap items-center justify-between gap-2 p-1.5">
		<strong
			class="bg-ff8036 grid size-7.5 flex-none place-content-center rounded-full border border-white shadow-[0_2px_2px_rgba(0,18,160,0.3)]"
		>
			<input type="checkbox" class="peer sr-only" checked />
			<icon-list data-name="category-course" class="size-5 fill-white transition duration-200"></icon-list>
		</strong>
	</div>

	<div class="flex items-center justify-between gap-2 bg-linear-[0deg,black_0%,rgba(0,0,0,0)_100%] px-2 py-3">
		<div class="mt-auto flex flex-1 flex-col gap-1.5">
			<card-img {title} {badgeCategoryText} {time} {distance}></card-img>
		</div>

		<!-- 코스/난이도 -->
		{#if courseCurrent || difficulty}
			<badge-course {courseCurrent} {difficulty}></badge-course>
		{/if}
	</div>
</section>
