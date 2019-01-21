import Component from './Component'
import { formButtonTemplate } from '../../../templates'

export default class FormButton extends Component {
	constructor(params, events) {
		super(params, events)
		this.template = formButtonTemplate()
	}

	render() {
		const elem = this.renderHtml().body.firstElementChild
		if (this.events.onClick) elem.onclick = () => this.events.onClick()
		this.elem = elem
	}
}
