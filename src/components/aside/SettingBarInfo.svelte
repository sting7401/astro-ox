<svelte:options
	customElement={{
		tag: 'setting-bar-info',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import { m } from '@/src/paraglide/messages.js';
	import { z } from 'zod';

	const OfficeSchema = z.object({
		name: z.string(),
		time: z.string(),
		address: z.string(),
		tel: z.string(),
	});

	type OfficeInfo = z.infer<typeof OfficeSchema>;

	const indices = [1, 2];
	let listArray: OfficeInfo[] = []; // ✅ 타입 명시

	for (const i of indices) {
		const nameKey = `time.office_${i}.name` as keyof typeof m;
		const timeKey = `time.office_${i}.time` as keyof typeof m;
		const addressKey = `time.office_${i}.address` as keyof typeof m;
		const telKey = `time.office_${i}.tel` as keyof typeof m;

		const obj = {
			name: (m[nameKey] as () => string)?.(),
			time: (m[timeKey] as () => string)?.(),
			address: (m[addressKey] as () => string)?.(),
			tel: (m[telKey] as () => string)?.(),
		};

		const newItem = OfficeSchema.parse(obj);
		listArray = [...listArray, newItem];
	}
</script>

<div class="mt-auto flex flex-none flex-col gap-2.5">
	<h4 class="text-base font-bold">{m['page_title']?.()}</h4>

	{#each listArray as item: OfficeInfo, idx (idx)}
		{@const { name, time, address, tel } = item as OfficeInfo}

		<dl class="space-y-1">
			<dt class="text-base font-bold">
				<p class="text-sm font-medium">{name}</p>
			</dt>
			<dd class="flex items-center gap-3">
				<icon-list data-name="side-time" class="grid size-3.25 place-content-center fill-white"></icon-list>
				<p class="text-sm">{time}</p>
			</dd>
			<dd class="flex items-center gap-3">
				<icon-list data-name="side-address" class="grid size-3.25 place-content-center fill-white"></icon-list>
				<p class="text-sm">{address}</p>
			</dd>
			<dd class="flex items-center gap-3">
				<icon-list data-name="side-tel" class="grid size-3.25 place-content-center fill-white"></icon-list>
				<a href={`tel:${tel}`}>
					<p class="text-sm">{tel}</p>
				</a>
			</dd>
		</dl>
	{/each}
</div>
