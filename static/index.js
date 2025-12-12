document.addEventListener('alpine:init', () => {
    const mapStore = {
        badgeMap(status) {
            switch (status) {
                case 'operating':
                    return {
                        class: 'bg-ffecdd text-ff7200',
                        text: Alpine.store('layout').m['map.badge.operating']?.() ?? '',
                    };
                case 'scheduled':
                    return {
                        class: 'bg-eee text-666',
                        text: Alpine.store('layout').m['map.badge.scheduled']?.() ?? '',
                    };
                case 'closed':
                    return {
                        class: 'bg-eee text-666',
                        text: Alpine.store('layout').m['map.badge.closed']?.() ?? '',
                    };
                default:
                    return null; // 없으면 null 반환
            }
        },
        crowdingMap(status) {
            switch (status) {
                case 'full':
                    return {
                        class: 'bg-e7352b',
                        text: Alpine.store('layout').m['map.badge.full']?.() ?? '',
                    };
                case 'limited':
                    return {
                        class: 'bg-ff6f00',
                        text: Alpine.store('layout').m['map.badge.limited']?.() ?? '',
                    };
                case 'moderate':
                    return {
                        class: 'bg-00c922',
                        text: Alpine.store('layout').m['map.badge.moderate']?.() ?? '',
                    };
                case 'ample':
                    return {
                        class: 'bg-26b7ff',
                        text: Alpine.store('layout').m['map.badge.ample']?.() ?? '',
                    };
                default:
                    return null; // 없으면 null 반환
            }
        },
        mode: 'init',
        search: {
            value: '',
        },
        categoryList: [
            {
                id: 'performance',
                img: '/images/category/category-sample-1.png',
                color: 'bg-984ffd',
            },
            {
                id: 'food',
                img: '/images/category/category-sample-2.png',
                color: 'bg-ffc132',
            },
            {
                id: 'restroom',
                img: '/images/category/category-sample-3.png',
                color: 'bg-0c8a21',
            },
            {
                id: 'parking',
                img: '/images/category/category-sample-4.png',
                color: 'bg-1455c5',
            },
            {
                id: 'aed',
                img: '/images/category/category-sample-5.png',
                color: 'bg-ff4d4a',
            },
        ],
        traffic: [
            {
                id: 'packed',
                bgColor: 'bg-e7352b',
            },
            {
                id: 'congested',
                bgColor: 'bg-ff6f00',
            },
            {
                id: 'complicated',
                bgColor: 'bg-fcd915',
            },
            {
                id: 'normal',
                bgColor: 'bg-00c922',
            },
            {
                id: 'spare',
                bgColor: 'bg-20b7fb',
            },
        ],
        updateCategoryList(updateList = []) {
            mapStore.categoryList = [...updateList];
        },
        modeChange(mode = 'init') {
            mapStore.mode = mode;
        },
        detailList: [
            {
                id: 'detailList1',
                img: 'https://cdn.pixabay.com/photo/2025/04/22/19/22/pier-9550931_960_720.png',
                categoryIcon: 'performance',
                badgeCategoryText: '무대공연',
                badgeCurrent: 'operating',
                crowdingCurrent: 'full',
                crowdingPercent: '100',
                title: '유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드',
                date: '10.20.(수) ~ 10.20.(수)',
                time: '10:00 ~ 11:30',
                addr: '용산로 120길 88',
                stage: '리버스테이지',
                message:
                    '상세 내용입니다. 상세 내용입니다. 상세 내용입니다. 상세 내용입니다. 상세 내용입니다. 상세 내용입니다. 상세 내용입니다.',
                direction: '230m',
                btnDirection: true,
                btnOrder: true,
                btnNavigate: true,
            },
            {
                id: 'detailList2',
                img: 'https://cdn.pixabay.com/photo/2025/04/22/19/22/pier-9550931_960_720.png',
                categoryIcon: 'food',
                badgeCategoryText: '푸드트럭',
                badgeCurrent: 'closed',
                crowdingCurrent: '',
                crowdingPercent: '',
                title: '유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드',
                date: '10.20.(수) ~ 10.20.(수)',
                time: '10:00 ~ 11:30',
                addr: '',
                stage: '',
                message: '',
                direction: '',
                btnDirection: false,
                btnOrder: false,
                btnNavigate: false,
            },
            {
                id: 'detailList3',
                img: 'https://cdn.pixabay.com/photo/2025/04/22/19/22/pier-9550931_960_720.png',
                categoryIcon: 'restroom',
                badgeCategoryText: '푸드트럭',
                badgeCurrent: 'scheduled',
                crowdingCurrent: '',
                crowdingPercent: '',
                title: '유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드',
                date: '10.20.(수) ~ 10.20.(수)',
                time: '10:00 ~ 11:30',
                addr: '',
                stage: '',
                message: '',
                direction: '',
                btnDirection: false,
                btnOrder: false,
                btnNavigate: false,
            },
            {
                id: 'detailList4',
                img: 'https://cdn.pixabay.com/photo/2025/04/22/19/22/pier-9550931_960_720.png',
                categoryIcon: 'parking',
                badgeCategoryText: '주차장',
                badgeCurrent: 'scheduled',
                crowdingCurrent: '',
                crowdingPercent: '',
                title: '유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드',
                date: '10.20.(수) ~ 10.20.(수)',
                time: '10:00 ~ 11:30',
                addr: '',
                stage: '',
                message: '',
                direction: '',
                btnDirection: false,
                btnOrder: false,
                btnNavigate: false,
            },
            {
                id: 'detailList5',
                img: 'https://cdn.pixabay.com/photo/2025/04/22/19/22/pier-9550931_960_720.png',
                categoryIcon: 'aed',
                badgeCategoryText: 'AED',
                badgeCurrent: 'operating',
                crowdingCurrent: '',
                crowdingPercent: '',
                title: '유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드유다빈밴드',
                date: '10.20.(수) ~ 10.20.(수)',
                time: '10:00 ~ 11:30',
                addr: '',
                stage: '',
                message: '',
                direction: '',
                btnDirection: false,
                btnOrder: false,
                btnNavigate: false,
            },
        ],
        updateDetailList(newList = []) {
            mapStore.detailList = [...newList];
        },
    };

    Alpine.data('searchField', () => ({
        value: mapStore.search.value,
    }));
    Alpine.store('map', mapStore);
});

// Alpine.store('map').updateDetailList([
//     {
//         id: 'detailList3',
//         img: 'https://example.com/new.jpg',
//         categoryIcon: 'restroom',
//         badgeCategoryText: '화장실',
//         badgeCurrent: 'scheduled',
//         crowdingCurrent: 'moderate',
//         crowdingPercent: '65',
//         title: '새로운 장소 제목',
//         date: '10.22.(목)',
//         time: '14:00 ~ 15:00',
//         addr: '서울시 중구 세종대로 110',
//         stage: '한강무대',
//         message: '새로운 상세 메시지입니다.',
//         direction: '120m',
//         btnDirection: true,
//         btnOrder: false,
//         btnNavigate: true,
//     },
// ]);
