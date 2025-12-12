// messages.js와 runtime.js를 import
import { m } from '/src/paraglide/messages.js';
import { getLocale, setLocale } from '/src/paraglide/runtime.js';

// Alpine 스토어 등록
document.addEventListener('alpine:init', () => {
	if (Alpine.store('layout')) return;
	Alpine.store('layout', {
		get currentLang() {
			return getLocale();
		},
		m: m,
		getLang: getLocale, // 함수 자체를 참조
		firstLoad: 'starting',
		setLang(locale) {
			document.querySelector('html')?.setAttribute('lang', locale);
			setLocale(locale);
		},
		toggleLocale() {
			const next = this.getLang() === 'ko' ? 'en' : 'ko';
			this.setLang(next);
		},
		langPageLoad() {
			if (this.firstLoad === 'starting') {
				const lang = (navigator.language || '').toLowerCase();
				if (lang.startsWith('ko')) {
					setLocale('ko'); // 외부 함수 직접 호출
				} else {
					setLocale('en');
				}
				this.firstLoad = 'end';
				return;
			}

			if (this.getLang().includes('ko')) {
				setLocale('ko'); // 외부 함수 호출로 변경
			} else {
				setLocale('en');
			}
		},
		modalView: '',
		alertView: '',
		alertState: '',
		toastTimeoutId: null, // 타이머 ID 저장용 프로퍼티 추가
		toast: '',
		view: 'init',
		loadingView: '',
		/**
		 * 토스트 표시 메서드
		 *
		 * @param {string} message 토스트에 표시할 문자열
		 * @param {number} duration 자동 닫기 시간(ms), 기본값 5000
		 */
		toastView(message, duration = 5000) {
			// 토스트 메시지 세팅
			this.toast = message;

			// 기존 타이머가 있으면 해제
			if (this.toastTimeoutId) {
				clearTimeout(this.toastTimeoutId);
			}

			// 새 타이머 설정
			this.toastTimeoutId = setTimeout(() => {
				this.toastTimeoutId = null; // 타이머 ID 초기화
			}, duration);
		},
		init() {
			if (this.firstLoad === 'end') {
				this.langPageLoad();
			}
			document.querySelector('html')?.setAttribute('lang', this.getLang());
		},
	});
});
