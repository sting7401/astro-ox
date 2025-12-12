import { html, LitElement } from 'lit';

class BadgeItem extends LitElement {
	createRenderRoot() {
		return this;
	}

	static properties = {
		badgeType: { type: String, reflect: true, attribute: 'data-badge-type' },
		badgeText: { type: String, reflect: true, attribute: 'data-badge-text' },
		badgeBgColor: { type: String, reflect: true, attribute: 'data-badge-bg-color' },
		badgeBorderColor: { type: String, reflect: true, attribute: 'data-badge-border-color' },
	};

	constructor() {
		super();

		this.badgeType = '';
		this.badgeText = '';
		this.badgeBgColor = '';
		this.badgeBorderColor = '';
		this.badgeBgInit = 'rounded-[.25rem] text-white';
		this.badgeBorderInit = 'border text-2070fb bg-white rounded-[1.25rem]';
	}

	render() {
		return html`
			<strong
				class="${this.badgeType === 'bg' ? this.badgeBgInit : this.badgeType ? this.badgeBorderInit : ''} ${this
					.badgeBgColor
					? `${this.badgeBgColor}`
					: 'bg-2070fb'} ${this.badgeBorderColor
					? `${this.badgeBorderColor}`
					: 'border-2070fb'} inline-flex items-center px-2 py-1 text-sm leading-none"
			>
				<span>${this.badgeText}</span>
			</strong>
		`;
	}
}

if (typeof window !== 'undefined' && !customElements.get('badge-item')) {
	customElements.define('badge-item', BadgeItem);
}
