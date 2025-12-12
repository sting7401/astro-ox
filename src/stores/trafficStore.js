document.addEventListener('alpine:init', () => {
	if (Alpine.store('traffic')) return;

	Alpine.store('traffic', {
		list: [
			//다중 마커 저장 배열
			{
				title: '매우 혼잡',
				state: 'crowd',
				lat: 35.18962,
				lng: 128.082275,
			},
			{
				title: '혼잡',
				state: 'busy',
				lat: 35.188311,
				lng: 128.07865,
			},
			{
				title: '보통',
				state: 'moderate',
				lat: 35.187393,
				lng: 128.082275,
			},
			{
				title: '여유',
				state: 'light',
				lat: 35.188977,
				lng: 128.088287,
			},
			// {
			//     title: '매우 여유',
			//     state: 'empty',
			//     lat: 35.190608,
			//     lng: 128.090057,
			// },
		],
	});
});
