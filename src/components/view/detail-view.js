class DetailView extends HTMLElement {
	constructor() {
		super();
		this.rendered = false;
		this.title = this.getAttribute('data-title') || '';
	}

	static get observedAttributes() {
		return ['data-title'];
	}

	connectedCallback() {
		this.text = Alpine.store('layout').m[`onboarding.${list.id}.subtitle`]?.();

		this.render();
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		if (oldVal !== newVal && attrName === 'data-title') {
			this.title = newVal || '';
			if (this.rendered) this.render();
		}
	}

	render() {
		this.rendered = true;

		this.innerHTML = /* HTML */ `
			<h3 class="mb-3 text-[.9375rem] font-bold text-gray-800">${this.title}</h3>
		`;
	}
}

if (!customElements.get('detail-view')) {
	customElements.define('detail-view', DetailView);
}
