function _makerToolTip(
	map = null,
	lat = 34.92888588,
	lng = 127.4999591,
	icon = 'img-marker-info',
	text = '매우 혼잡',
	color = 'red',
	label = '',
) {
	let _marker = new Tmapv2.Marker({
		position: new Tmapv2.LatLng(lat, lng),
		icon: `/images/poi/${icon}.png`,
		iconSize: new Tmapv2.Size(25, 32), // 너비 25, 높이 32 지정
		label: /* HTML */ `
			<span class="group/label relative inline-flex min-w-[1.5625rem]">
				${color !== ''
					? `<span class="tooltip-label tooltip-label--marker tooltip-label--${color} peer">${text} <icon-list class="absolute -bottom-2.5 left-[calc(50%-.4375rem)] size-3.5 stroke-none" data-name="poi-arrow"></icon-list></span>`
					: ''}
				${label !== '' ? `<span class="tooltip-label-text">${label}</span>` : ''}
			</span>
		`,
		map: map,
	});

	// marker = new Tmapv2.Marker({
	//     icon: '/images/poi/img-pin-activities.png',
	//     iconSize: new Tmapv2.Size(20, 20), // 너비 50px, 높이 91px로 지정
	//     map: map,
	// });
}

// poiToolTip 관련 추가
function _poiToolTip(
	map = null,
	lat = 34.92888588,
	lng = 127.4999591,
	icon = 'img-marker-info',
	text = '매우 혼잡',
	color = 'red',
	label = '',
) {
	const poi = new Tmapv2.Marker({
		position: new Tmapv2.LatLng(lat, lng),
		icon: `/images/poi/${icon}.png`,
		iconSize: new Tmapv2.Size(25, 32), // 너비 25, 높이 32 지정
		label: /* HTML */ `
			<span class="group/label relative inline-flex min-w-[1.5625rem]">
				${color !== ''
					? ` <span class="tooltip-label tooltip-label--poi tooltip-label--${color} peer">${text}
                <icon-list class="absolute -bottom-2.5 left-[calc(50%-.4375rem)] size-3.5 stroke-none" data-name="poi-arrow"></icon-list></span>`
					: ''}
				${label !== '' ? `<span class="tooltip-label-text">${label}</span>` : ''}
			</span>
		`,
		map: map,
	});
	return poi;
}
