import { formTemplate } from '../../../templates'
import Component from '../UI/Component'
import FormButton from '../UI/FormButton'
import { updateBook, addBook } from '../../db'
import toggleLoading from '../../functions/toggleLoading'
import generateID from '../../functions/generateID'
import BookList from '../BookList'
import BookItem from '../BookList/BookItem'

export default class BookForm extends Component {
	constructor(params) {
		super(params)
		this.template = formTemplate()
	}

	renderSubmitBtn() {
		return new FormButton({
			text: 'Save',
			classList: 'positive',
			type: 'submit'
		}).getElem()
	}

	renderCancelBtn() {
		return new FormButton(
			{
				text: 'Cancel',
				classList: '',
				type: 'button'
			},
			{
				onClick: () => this.clearForm()
			}
		).getElem()
	}

	renderBtnDivider() {
		const divider = document.createElement('div')
		divider.classList.add('or')
		return divider
	}

	onFormSubmit(event) {
		event.preventDefault()
		toggleLoading()

		const formData = {}
		const elems = Array.from(event.target.querySelectorAll('input'))
		elems.forEach(el => (formData[el.attributes.name.value] = el.value))

		if (!formData.title || !formData.author) throw Error('Wrong data')

		if (!formData.id) {
			formData.id = generateID()
			addBook(formData)
			BookList.addItem(formData)
		} else {
			updateBook(formData)
			BookList.editItem(formData)
		}
		BookForm.clearForm()
		setTimeout(() => toggleLoading(), 300)
	}

	static clearForm() {
		const elems = Array.from(document.querySelectorAll('.bookForm input'))
		elems.forEach(el => (el.value = ''))
		BookItem.unselectAllItems()
	}

	render() {
		const elem = this.renderHtml().body.firstElementChild
		const buttons = elem.querySelector('.ui.buttons')
		buttons.appendChild(this.renderSubmitBtn())
		buttons.appendChild(this.renderBtnDivider())
		buttons.appendChild(this.renderCancelBtn())
		elem.onsubmit = (event) => this.onFormSubmit(event)
		this.elem = elem
	}
}
