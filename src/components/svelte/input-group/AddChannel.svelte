<svelte:options
	customElement={{
		tag: 'add-channel',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import type { Attachment } from 'svelte/attachments';

	interface ChannelItem {
		channel: string;
		product: string;
		code?: string;
	}
	let {
		dataId = '',
		maxLang = { channel: 15, product: 50 },
		channelList = $bindable([{ channel: '', product: '', code: '' }]),
	} = $props();
	let inputValue = $state({ channel: '', product: '' });

	function maxleng(e: Event, item: { channel?: string; product?: string }, key: 'channel' | 'product') {
		const target = e.target as HTMLInputElement;
		if (item[key] !== undefined) {
			item[key] = item[key].slice(0, Number(target.getAttribute('maxlength')));
		}
	}

	const focusAttachment: Attachment = (element) => {
		(element as HTMLInputElement).focus();
	};

	function addItem(e: Event) {
		e.preventDefault();
		channelList = [...channelList, inputValue];
	}

	function removeItem(e: Event, index: number) {
		e.preventDefault();
		channelList = channelList.filter((_, i) => i !== index);
	}
</script>

{#snippet channelItem(item: ChannelItem, i: number)}
	<li class="grid grid-cols-[0.2fr_1fr_1.875rem] gap-3">
		<input
			type="text"
			class="input-text"
			id={`${dataId}Ch${i + 1}`}
			placeholder="판매채널"
			maxlength={maxLang.channel}
			bind:value={item.channel}
			oninput={(e) => maxleng(e, item, 'channel')}
			{@attach focusAttachment}
		/>
		<input
			type="text"
			class="input-text"
			id={`${dataId}Pr${i + 1}`}
			placeholder="상품명"
			maxlength={maxLang.product}
			bind:value={item.product}
			oninput={(e) => maxleng(e, item, 'product')}
		/>
		<button
			type="button"
			class="button group min-h-10.5 rounded-lg bg-white disabled:cursor-no-drop"
			onclick={(e) => removeItem(e, i)}
		>
			<span class="sr-only">삭제</span>
			{#if channelList.length === 1}
				<icon-list class="fill-ddd channelList-center flex size-5" data-name="close-circle"></icon-list>
			{:else if channelList.length > 1}
				<icon-list
					class="fill-ff0000 group-disabled:fill-ddd channelList-center flex size-5"
					data-name="close-circle"
				></icon-list>
			{/if}
		</button>
	</li>
{/snippet}

<ul class="grid gap-3 px-6 py-3">
	{#each channelList as item, i (i)}
		{#if channelList.length <= 10}
			{@render channelItem(item, i)}
		{/if}
	{/each}

	<!-- 추가 버튼 -->
	<button
		type="button"
		class="button border-primary disabled:border-eee hover:border-primary/30 disabled:text-eee text-primary text-2sm group min-h-10.5 rounded-lg border border-dashed bg-white px-3"
		disabled={channelList.length === 10}
		onclick={addItem}
	>
		<span>추가</span>
		<icon-list data-name="add" class="group-disabled:stroke-eee size-5 stroke-black"></icon-list>
	</button>
</ul>
