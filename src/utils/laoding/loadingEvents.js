const delayWithRAF = (ms) =>
	new Promise((resolve) => {
		let start = null;
		let rafId = null; // requestAnimationFrame ID 저장
		Alpine.store('layout').loadingView = 'loading';

		function step(timestamp) {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;
			if (elapsed >= ms) {
				Alpine.store('layout').loadingView = ''; // 시간 경과 후 상태 변경
				if (rafId !== null) cancelAnimationFrame(rafId);
				resolve();
			} else {
				rafId = requestAnimationFrame(step);
			}
		}

		rafId = requestAnimationFrame(step);
	});

async function _example() {
	await delayWithRAF(2000); // 2초 대기
}
