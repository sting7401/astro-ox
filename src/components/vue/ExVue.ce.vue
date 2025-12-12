<script setup lang="ts">
	import { ref, watch } from 'vue';

	const props = defineProps({
		variant: { type: String, default: 'primary' },
		disabled: { type: Boolean, default: false },
		text: { type: String, default: 'btn' },
	});

	const emit = defineEmits<{
		(e: 'click', payload: { count: number }): void;
	}>();

	const count = ref(0);

	function handleClick() {
		if (props.disabled) return;
		count.value++;
		console.info(count.value);
		emit('click', { count: count.value });
	}
</script>

<template>
	<button :class="['btn', `btn--${variant}`]" :disabled="disabled" @click="handleClick">
		<slot>{{ text }}</slot>
		({{ count }})
	</button>
</template>

<style>
	:host {
		display: inline-block;
	}
	.btn {
		cursor: pointer;
		border: none;
		border-radius: 4px;
		padding: 8px 16px;
	}
	.btn--primary {
		background: #007bff;
		color: white;
	}
	.btn:disabled {
		opacity: 0.5;
	}
</style>
