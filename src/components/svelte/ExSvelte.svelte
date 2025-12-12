<svelte:options
	customElement={{
		tag: 'ex-svelte',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import { validCardBadgeProps, type CardBadgeProps } from '@/types/CardType.svelte';

	let { courseCurrent = 'ex', difficulty = 'ex' } = $props();
	let validated: CardBadgeProps = validCardBadgeProps({ courseCurrent, difficulty });
	({ courseCurrent, difficulty } = validated);

	function onClick() {
		alert('Button clicked!');
	}
</script>

<div class="flex flex-wrap items-center justify-end gap-1">
	{#if courseCurrent}
		<strong
			class="text-660808 bg-f3eee3 inline-flex flex-none items-center gap-1 rounded-sm p-2 text-sm leading-none font-medium"
		>
			<span>{courseCurrent}</span>
		</strong>
	{/if}

	{#if courseCurrent}
		<strong
			class="text-660808 bg-eedac8 inline-flex flex-none items-center gap-px rounded-sm p-2 text-sm leading-none font-medium"
		>
			<span
				class="before before:bg-444/30 relative flex flex-none items-center gap-1 before:block before:h-2 before:w-px"
			>
				{difficulty}
			</span>
		</strong>
	{/if}

	<button type="button" onclick={onClick}>btn</button>
</div>
