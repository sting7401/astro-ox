import type { Alpine as AlpineType } from 'alpinejs';

declare global {
	const Alpine: AlpineType;

	interface HSStaticMethods {
		init: () => void;
		destroy?: () => void;
	}
	const HSStaticMethods: HSStaticMethods;
}

export {};
