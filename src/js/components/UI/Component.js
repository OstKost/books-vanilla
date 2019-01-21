export default class Component {
	constructor(params = {}, events = {}) {
		this.elem = null
		this.params = params
		this.events = events
		this.template = '<h2>Null</h2>'
	}

	getElem() {
		if (!this.elem) this.render()
		return this.elem
	}

	render() {
		const html = this.renderHtml()
		this.elem = html.body.firstChild
	}

	renderHtml() {
		let template = this.template
		for (let par in this.params) {
			template = template.replace(
				new RegExp(`{{${par}}}`, 'g'),
				this.params[par]
			)
		}
		return new DOMParser().parseFromString(template, 'text/html')
	}
}
