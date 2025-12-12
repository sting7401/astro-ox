import i18next from 'i18next';
import { atom } from 'nanostores';

export const $i18n = atom({
	title: '',
});

// i18next 초기화
i18next.init(
	{
		lng: 'ko',
		debug: true,
		resources: {
			ko: {
				translation: {
					title: '',
				},
			},
			en: {
				translation: {
					title: '',
				},
			},
		},
	},
	() => updateTranslations(),
);

// 번역 텍스트 일괄 갱신 함수
function updateTranslations() {
	$i18n.set({
		title: i18next.t('title'),
	});

	window.title = $i18n.get().title;
}

// 언어 변경 이벤트에 따라 갱신
i18next.on('languageChanged', () => {
	updateTranslations();
});

// lang 속성 변경 감지 후 i18next 언어 변경
function onLangChange(callback) {
	callback(document.documentElement.getAttribute('lang'));

	const observer = new MutationObserver(() => {
		callback(document.documentElement.getAttribute('lang'));
	});

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['lang'],
	});

	return () => observer.disconnect();
}

// 실제 사용: lang 변경 시 언어 전환 및 텍스트 갱신
onLangChange((lang) => {
	i18next.changeLanguage(lang);
});
