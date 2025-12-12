<svelte:options
	customElement={{
		tag: 'combo-box',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import TomSelect from 'tom-select';

	let { listIems } = $props();
	let comboboxValue = $state('');

	function tooltip(node: HTMLSelectElement): void | (() => void) {
		const tsInstance = new TomSelect(node, {
			create: false,
			sortField: [{ field: 'text', direction: 'asc' }],
			dropdownContentClass: 'combo-box',
		});

		return () => {
			tsInstance.destroy();
		};
	}
</script>

<div class="select-skeleton grid min-h-10 gap-3">
	<select autocomplete="off" class="rounded-lg" bind:value={comboboxValue} {@attach tooltip}>
		<option value="">d</option>
		{#each listIems as item, index (index)}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
