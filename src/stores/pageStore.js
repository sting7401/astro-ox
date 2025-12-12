import { atom } from 'nanostores';

export const $currentDirections = atom('');
export const $currentPageView = atom('page-default');
export const $currentModalView = atom('modal-none');

/**
 * 현재 페이지 상태를 변경합니다.
 * @param {'page-default' | 'page-search' | 'page-multiple'} currentPageState
 */
export const currentViewEvent = (currentPageState) => {
	$currentPageView.set(currentPageState);
};
