<svelte:options
	customElement={{
		tag: 'custom-checkbox-s',
		shadow: 'none',
	}}
/>

<script lang="ts">
	let { id = '' } = $props();
</script>

<label for="chkAllTbl" class="input-checkbox h-6 items-center select-none">
	<input type="checkbox" {id} class="peer sr-only" />
	<i class="input-checkbox__icon"></i>
	<span class="sr-only">checkbox</span>
</label>
