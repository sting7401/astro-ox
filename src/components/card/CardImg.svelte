<svelte:options
	customElement={{
		tag: 'card-img',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import { validCardImgProps, type CardImgProps } from '@/types/CardType.svelte';

	let { img, title, categoryIcon, green, cherry, floor, hall, boothNumber } = $props();
	let validated: CardImgProps = validCardImgProps({
		img,
		title,
		categoryIcon,
		green,
		cherry,
		floor,
		hall,
		boothNumber,
	});
	({ img, title, categoryIcon, green, cherry, floor, hall, boothNumber } = validated);

	let categorySrc = $state(categoryIcon);
	const categoryDir = $derived(categorySrc?.trim().toLowerCase().replace(/_/g, '-') || '');
</script>

<section class="flex items-center gap-3">
	<picture class="border-f6f6f6 size-[3.75rem] overflow-hidden rounded-xl border bg-white">
		{#if categoryDir === 'restroom-w' || categoryDir === 'restroom-m' || categoryDir === 'restroom'}
			<img
				src="/images/thum/restroom.jpg"
				alt={`${title ? title : ''} thumnail image`}
				loading="lazy"
				class="size-[3.75rem] object-fill"
			/>
		{:else if categoryDir === 'info'}
			<img
				src="/images/thum/restroom.jpg"
				alt={`${title ? title : ''} thumnail image`}
				loading="lazy"
				class="size-[3.75rem] object-fill"
			/>
		{:else}
			<img
				src={img ? img : '/images/dummy/img-thumbnail.png'}
				alt={`${title ? title : ''} thumnail image`}
				loading="lazy"
				class="size-[3.75rem] object-fill"
			/>
		{/if}
	</picture>

	<div class="flex flex-1 flex-col gap-1.5 text-black">
		{#if title}
			<div class="inline-flex w-full flex-wrap items-center gap-2">
				<h3 class="line-clamp-2 text-lg leading-tight font-bold">{title}</h3>

				<div class="inline-flex flex-wrap gap-1.5">
					{#if categoryIcon}
						<icon-list
							data-name={`category-circle-${categoryIcon}`}
							data-fill-none="true"
							class="size-5 transition duration-10"
						></icon-list>
					{/if}
					{#if green === 'Y'}
						<icon-list
							data-name="category-green"
							data-fill-none="true"
							class="size-5 transition duration-10"
						></icon-list>
					{/if}
					{#if cherry === 'Y'}
						<icon-list
							data-name="category-cherry"
							data-fill-none="true"
							class="size-5 transition duration-10"
						></icon-list>
					{/if}
				</div>
			</div>
		{/if}

		{#if floor || hall || boothNumber}
			<div class="text-[.8125rem] leading-tight text-pretty">
				<div class="flex flex-wrap items-start gap-1">
					{#if floor}
						<div
							class="before:bg-ddd relative inline-flex items-center gap-1 before:block before:h-2.25 before:w-px"
						>
							<p class="relative line-clamp-2">{floor}F</p>
						</div>
					{/if}

					{#if hall}
						<div
							class="before:bg-ddd relative inline-flex items-center gap-1 before:block before:h-2.25 before:w-px"
						>
							<p class="relative line-clamp-2">Hall {hall}</p>
						</div>
					{/if}

					{#if boothNumber}
						<div
							class="before:bg-ddd relative inline-flex items-center gap-1 before:block before:h-2.25 before:w-px"
						>
							<p class="relative line-clamp-2">{boothNumber}</p>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</section>
