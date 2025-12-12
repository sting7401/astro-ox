async function _jsonView(url = '', mode = 'init', detailAll = 'N') {
	const storeMap = Alpine.store('map');

	try {
		storeMap.mode = `${mode}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		if (detailAll) {
			storeMap.detailAll = detailAll;
		}

		// data가 배열이라면 바로 넣기
		if (Array.isArray(data)) {
			storeMap.updateDetailList(data);
		} else {
			// 혹은 적절히 가공해서 넣기
			storeMap.updateDetailList([data]);
		}
	} catch (error) {
		console.error(error);
	}
}

async function _jsonFilterView(url = '', label = '') {
	const storeMap = Alpine.store('map');

	try {
		storeMap.mode = 'filter';
		storeMap.search.value = `${label}`;

		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		// data가 배열이라면 바로 넣기
		if (Array.isArray(data)) {
			storeMap.updateDetailList(data);
		} else {
			// 혹은 적절히 가공해서 넣기
			storeMap.updateDetailList([data]);
		}
	} catch (error) {
		console.error(error);
	}
}

async function _jsonSearchAllView(url = '') {
	const storeMap = Alpine.store('map');

	storeMap.hiddenDetailList();

	try {
		storeMap.mode = 'search';
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		storeMap.updateSearchList(data);
	} catch (error) {
		console.error(error);
	}
}

async function _jsonSearchView(url = '', category = '') {
	const storeMap = Alpine.store('map');

	try {
		storeMap.mode = 'search';
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		let filtered = [];

		if (Array.isArray(data)) {
			if (category.includes('restroom')) {
				// restroom일 경우 categoryIcon가 restroom-w 또는 restroom-m인 항목 모두 포함
				filtered = data.filter(
					(item) => item.categoryIcon === 'restroom-w' || item.categoryIcon === 'restroom-m',
				);
			} else {
				filtered = category ? data.filter((item) => item.categoryIcon === category) : data;
			}
		}
		storeMap.updateSearchList(filtered);
	} catch (error) {
		console.error(error);
	}
}

async function _jsonFindSearchView(url = '', category = '') {
	const storeMap = Alpine.store('map');

	try {
		storeMap.mode = 'find-search';
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		let filtered = [];

		if (Array.isArray(data)) {
			if (category.includes('restroom')) {
				// restroom일 경우 categoryIcon가 restroom-w 또는 restroom-m인 항목 모두 포함
				filtered = data.filter(
					(item) => item.categoryIcon === 'restroom-w' || item.categoryIcon === 'restroom-m',
				);
			} else {
				filtered = category ? data.filter((item) => item.categoryIcon === category) : data;
			}
		}
		storeMap.updateSearchList(filtered);
	} catch (error) {
		console.error(error);
	}
}

async function _jsonCategoryView(url = '', category = '') {
	const storeMap = Alpine.store('map');

	try {
		storeMap.modeChange('filter');
		storeMap.search.value = category; // 해당 카데고리 명
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch JSON');

		const data = await res.json();

		// data가 배열이라면 바로 넣기
		if (Array.isArray(data)) {
			storeMap.updateDetailList(data);
		} else {
			// 혹은 적절히 가공해서 넣기
			storeMap.updateDetailList([data]);
		}
	} catch (error) {
		console.error(error);
	}
}

async function _sortCategoryEvent() {
	const storeMap = Alpine.store('map');
	if (storeMap.mode === 'init') {
		// 기본 상태 일때
	} else if (storeMap.mode === 'search') {
		// 검색 상태 일때
		jsonSearchView('/dummy/필터_다중.json');
	}
}

async function _categorySelectEvent(radioLabel = '', category = '') {
	const storeMap = Alpine.store('map');
	if (storeMap.mode === 'init') {
		// 기본 상태 일때

		storeMap.modeChange('filter');
		storeMap.search.value = radioLabel;
		jsonFilterView('/dummy/필터_다중.json', radioLabel);
	} else if (storeMap.mode === 'search') {
		// 검색 상태 일때
		jsonSearchView('/dummy/필터_다중.json', category);
		storeMap.categoryCurrent = category;
	}
}

async function _sortSelectEvent(title = '') {
	const storeMap = Alpine.store('map');
	storeMap.modeChange('filter');
	storeMap.search.value = title;
	jsonView('/dummy/주차장_카테고리_혼잡.json');
}

async function _modeBackEvent() {
	const storeMap = Alpine.store('map');

	storeMap.modeChange('init');
	storeMap.search.value = '';
}

async function _searchBackEvent() {
	const storeMap = Alpine.store('map');

	if (storeMap.mode === 'filter') {
		storeMap.modeChange('init');
	} else if (storeMap.mode === 'search') {
		storeMap.hiddenSearchList();
	}
	storeMap.search.value = '';
}

function _arrivedPopupEvent(state = 'arrivedPopup') {
	const layout = Alpine.store('layout');

	if (layout.alertView === 'arrivedPopup') {
		layout.alertView = '';
		return;
	}
	layout.alertView = 'arrivedPopup';
	layout.alertState = `${state}`;

	// Alpine이 DOM에 dialog를 삽입할 수 있도록 잠깐 기다림
	requestAnimationFrame(() => {
		const arrivedPopup = document.getElementById('arrivedPopup');

		if (!arrivedPopup) {
			return;
		}

		if (arrivedPopup instanceof HTMLDialogElement) {
			if (arrivedPopup.open) {
				arrivedPopup.close();
			} else {
				arrivedPopup.show();
			}
		}
	});
}

// 리스트 클릭 시예시 이벤트
async function _listHandleEvent($event, idx = 0) {
	const storeMap = Alpine.store('map');

	const liElement = $event.target.closest('li');
	const offsetTop = liElement.offsetTop;

	// #scrollableTarget 요소를 부드럽게 최상단으로 스크롤
	const scrollableTarget = document.querySelector('#scrollableTarget');
	if (scrollableTarget) {
		scrollableTarget.scrollTo({ top: offsetTop });
	}
	if (idx !== 0) {
		jsonView('/dummy/필터_다중_버튼없음.json', storeMap.mode);
	}
}

// ai 추천천 클릭 시 예시 이벤트
async function _recoSelectEvent() {
	const storeMap = Alpine.store('map');

	storeMap.modeChange('init');
	jsonView('/dummy/일반_카테고리.json');
}

async function _setDirection() {
	const storeMap = Alpine.store('map');
	storeMap.mode = 'finding';

	// null 또는 undefined일 경우 빈 문자열 처리
	storeMap.direction.distance = `${'0'}`;
	storeMap.direction.time = `${'0'}`;
	storeMap.direction.totalDistance = `${'0'}`;
	storeMap.direction.totalTime = `${'0'}`;
	storeMap.direction.title = `${'행사명'}`;
	storeMap.direction.scheduleTitle = `${'행사명'}`;
}

async function _setDirectionPath() {
	const storeMap = Alpine.store('map');
	storeMap.mode = 'path';

	// null 또는 undefined일 경우 빈 문자열 처리
	storeMap.directionPath.distance = `${'0'}`;
	storeMap.directionPath.time = `${'0'}`;
	storeMap.directionPath.totalDistance = `${'0'}`;
	storeMap.directionPath.totalTime = `${'0'}`;
	storeMap.directionPath.title = `${'행사명'}`;

	storeMap.pathFindList = ['내 위치', '식물원', '정원해설', '최종목적', '네덜원정원네덜원정네덜원정원네덜원정'];
}

async function _loadSuggestions() {
	try {
		const response = await fetch('/dummy/필터_다중.json');
		if (!response.ok) throw new Error('Failed to fetch JSON');

		const suggestions = await response.json();
		Alpine.store('map').detailAll = 'Y';
		// 배열일 때만 적용
		if (Array.isArray(suggestions)) {
			Alpine.store('map').suggestionList = suggestions;
		} else {
			console.warn('JSON is not an array:', suggestions);
		}
	} catch (error) {
		console.error('Suggestion load error:', error);
	}
}
