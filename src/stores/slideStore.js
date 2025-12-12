// Alpine 스토어 등록 // 신규
document.addEventListener('alpine:init', () => {
	Alpine.store('swipe', {
		visible: 'onboard', // onboard
		swipe: null,
		items: [
			{
				id: 'slide1',
			},
			{
				id: 'slide2',
			},
			{
				id: 'slide3',
			},
			{
				id: 'slide4',
			},
			{
				id: 'slide5',
			},
		],
		swipeInit(className = '') {
			if (className === '') return;
			if (this.swipe) {
				this.swipe.destroy();
				this.swipe = null;
			}

			this.swipe = new Swiper(`${className}`, {
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				spaceBetween: 20, // 슬라이드 간격
				slidesOffsetBefore: 20, // 시작 부분  여백
			});
		},
	});
});
