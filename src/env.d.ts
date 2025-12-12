interface Window {
	Alpine: import('alpinejs').Alpine;
}

declare global {
	interface Window {
		requestAnimationFrame: (callback: FrameRequestCallback) => number;
		cancelAnimationFrame: (handle: number) => void;
	}
}
