<svelte:options
	customElement={{
		tag: 'card-message',
		shadow: 'none',
	}}
/>

<script lang="ts">
	let { message = '' } = $props();
</script>

<div
	class="bg-f4f4f5 hidden space-y-2 rounded-xl p-3 text-[.8125rem] leading-tight text-pretty text-black not-has-[p]:hidden group-aria-[label=expanded]/course:block"
>
	<p>{message}</p>
</div>
