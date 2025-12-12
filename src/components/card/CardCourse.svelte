<svelte:options
	customElement={{
		tag: 'card-course',
		shadow: 'none',
	}}
/>

<script lang="ts">
	let { courses = '' } = $props();
</script>

<div
	class="border-eee grid min-h-[3.125rem] grid-cols-[3.125rem_1fr] items-center rounded-xl border text-[.8125rem] leading-tight text-pretty break-keep text-black not-has-[p]:hidden"
>
	<i class="bg-f4f4f5 flex h-full w-[3.125rem] items-center justify-center rounded-xl">
		<icon-list data-name="category-course" class="fill-primary size-5 transition duration-200"></icon-list>
	</i>
	<p class="px-3 py-1">{courses}</p>
</div>
