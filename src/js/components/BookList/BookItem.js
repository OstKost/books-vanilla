import { listItemTemplate } from '../../../templates'
import Component from '../UI/Component'
import ListButton from '../UI/ListButton'
import { fillBookForm, deleteBook } from '../../db'
import toggleLoading from '../../functions/toggleLoading'
import BookList from '.'

export default class BookItem extends Component {
	constructor(params) {
		super(params)
		this.template = listItemTemplate()
	}

	render() {
		const elem = this.renderHtml().body.firstElementChild
		const buttons = elem.querySelector('.right.buttons')
		buttons.appendChild(this.renderEditBtn(this.params.bookId))
		buttons.appendChild(this.renderDeleteBtn(this.params.bookId))
		this.elem = elem
	}

	renderEditBtn(bookId) {
		return new ListButton(
			{
				text: 'Edit',
				classList: 'blue',
				icon: 'pencil',
				bookId
			},
			{
				onClick: () => {
					fillBookForm(bookId)
					this.toggleSelected()
				}
			}
		).getElem()
	}

	renderDeleteBtn(bookId) {
		return new ListButton(
			{
				text: 'Delete',
				classList: 'red',
				icon: 'trash',
				bookId
			},
			{
				onClick: () => {
					toggleLoading()
					if (!confirm('Вы уверены, что хотите удалить книгу?'))
						toggleLoading()
					deleteBook(bookId)
					BookList.deleteItem(bookId)
					setTimeout(() => toggleLoading(), 300)
				}
			}
		).getElem()
	}

	toggleSelected() {
		BookItem.unselectAllItems()
		this.elem.classList.toggle('selected')
	}

	static unselectAllItems() {
		const elems = document.querySelectorAll(
			'.bookList .ui.list .item.selected'
		)
		elems.forEach(elem => elem.classList.remove('selected'))
	}
}
