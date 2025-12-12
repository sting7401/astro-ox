import { getIconData } from './icon-data.js';

class IconList extends HTMLElement {
	static get observedAttributes() {
		return ['data-name', 'data-size'];
	}

	constructor() {
		super();
		this.rendered = false;
		this.name = '';
		this.size = '24';
	}

	connectedCallback() {
		this.name = this.getAttribute('data-name') || '';
		this.size = '24';
		this.render();
	}

	attributeChangedCallback(attrName = '', oldVal = '', newVal = '') {
		if (oldVal !== newVal) {
			switch (attrName) {
				case 'data-name':
					this.name = newVal || '';
					break;
				case 'data-size':
					this.size = newVal || '24';
					break;
				default:
					break;
			}
			if (this.rendered === true) {
				this.render();
			}
		}
	}

	render() {
		this.rendered = true;
		const selectedIcon = getIconData().find((icon) => icon.name === this.name);
		const selectedIconSize = selectedIcon ? selectedIcon.size || '24' : '24';

		this.content = selectedIcon ? selectedIcon.html : '';

		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 ${selectedIconSize} ${selectedIconSize}">
          ${this.content}
        </svg>`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('icon-list')) {
	// 브라우저에서만 실행되는 코드
	customElements.define('icon-list', IconList);
}
