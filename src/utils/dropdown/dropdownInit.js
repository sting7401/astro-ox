let _isInitialized = false;

function dropdownInits() {
	const dropdownInits = document.querySelectorAll('[data-dropdown="init"]');

	dropdownInits.forEach((dropdownInit) => {
		const dropdownInitTrigger = dropdownInit?.querySelector('[data-dropdown-default="toggle"]');
		const dropdownInitElement = dropdownInit?.querySelector('[data-dropdown-default="dropdown"]');
		const dropdownCloseElements = dropdownInit?.querySelectorAll('[data-dropdown="close"]');

		// Ensure required elements exist
		if (!dropdownInitTrigger || !dropdownInitElement) return;

		const dropdownOptions = {
			placement: dropdownInitTrigger.getAttribute('data-dropdown-default-placement') || 'bottom',
			triggerType: 'click',
			delay: 300,
			ignoreClickOutsideClass: false,
			onHide: (event) => {
				// 최초 실행도 실행되도록 플래그 조건 제거
				const triggerButton = event._triggerEl;
				const targetElement = event._targetEl;

				triggerButton.classList.remove('is-active');
				triggerButton?.setAttribute('aria-expanded', 'false');
				targetElement.setAttribute('inert', '');

				console.info('onHide 실행', event);
			},
			onShow: (event) => {
				const triggerButton = event._triggerEl;
				const targetElement = event._targetEl;

				triggerButton.classList.add('is-active');
				triggerButton?.setAttribute('aria-expanded', 'true');
				targetElement.removeAttribute('inert');
				console.info('onShow 실행', event);
			},
			onToggle: (event) => {
				console.info('onToggle 실행', event);
			},
		};

		const instanceOptions = {
			id: dropdownInitElement.getAttribute('id'),
			override: true,
		};

		const dropdown = new Dropdown(dropdownInitElement, dropdownInitTrigger, dropdownOptions, instanceOptions);

		dropdownInitTrigger.addEventListener('click', (event) => {
			event.preventDefault();
			if (event.currentTarget instanceof HTMLElement) {
				dropdown.toggle();
			}
		});

		dropdownCloseElements.forEach((item) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();

				const dropdownInitElement = item.closest('[data-dropdown="init"]');
				const buttonTextElement = dropdownInitElement?.querySelector('[data-dropdown="button-text"]');
				dropdown.hide();

				if (item.getAttribute('data-dropdown-close') === 'only') {
					return;
				}

				if (item.getAttribute('data-datepicker') === 'apply') {
					const dateValueElement = item
						.closest('[data-dropdown-default="dropdown"]')
						?.querySelector('[data-datepicker="value"]');
					let textDateValue = '';

					if (dateValueElement instanceof HTMLInputElement) {
						textDateValue = dateValueElement.value;
					}

					if (buttonTextElement) {
						buttonTextElement.textContent = textDateValue;
					}
					return;
				} else {
					if (buttonTextElement) {
						buttonTextElement.textContent = item?.textContent;
					}
				}
			});
		});
	});
}

window.addEventListener('load', () => {
	dropdownInits();
});
