import Component from './Component'
import { listButtonTemplate } from '../../../templates'

export default class ListButton extends Component {
	constructor(params, events) {
		super(params, events)
		this.template = listButtonTemplate()
	}

	render() {
		const elem = this.renderHtml().body.firstElementChild
		elem.onclick = () => this.events.onClick()
		this.elem = elem
	}
}
