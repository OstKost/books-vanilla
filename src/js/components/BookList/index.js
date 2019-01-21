import { listTemplate } from '../../../templates'
import Component from '../UI/Component'
import BookItem from './BookItem'
import { allBooks } from '../../db'

export default class BookList extends Component {
	constructor(params) {
		super(params)
		this.template = listTemplate()
	}

	render() {
		const html = this.renderHtml()
		const list = html.body.firstElementChild.querySelector('.ui.list')
		this.renderBooks(list)
		this.elem = html.body.firstChild
	}

	renderBooks(list) {
		const books = allBooks()
		if (!books.length) {
			const empty = document.createElement('h4')
			empty.classList.add('empty')
			empty.innerText = 'Добавьте первую книгу'
			list.appendChild(empty)
		}

		books.forEach(({ id, title, author }) => {
			list.appendChild(
				new BookItem({
					bookId: id,
					bookTitle: title,
					bookAuthor: author
				}).getElem()
			)
		})
	}

	static addItem({ id, title, author }) {
		const list = document.querySelector('.bookList .ui.list')
		const empty = list.querySelector('.empty')
		if (empty) list.removeChild(empty)
		list.appendChild(
			new BookItem({
				bookId: id,
				bookTitle: title,
				bookAuthor: author
			}).getElem()
		)
	}

	static editItem({ id, title, author }) {
		const items = Array.from(
			document.querySelectorAll('.bookList .ui.list .item')
		)
		items.forEach(item => {
			if (item.attributes.key.value === id) {
				const itemTitle = item.querySelector('.text .header')
				itemTitle.innerText = title
				const itemAuthor = item.querySelector('.text i')
				itemAuthor.innerText = author
			}
		})
	}

	static deleteItem(id) {
		const list = document.querySelector('.bookList .ui.list')
		const items = Array.from(list.querySelectorAll('.item'))
		items.forEach(item => {
			if (item.attributes.key.value === id) {
				list.removeChild(item)
			}
		})

		if (!list.childElementCount) {
			const empty = document.createElement('h4')
			empty.classList.add('empty')
			empty.innerText = 'Добавьте первую книгу'
			list.appendChild(empty)
		}
	}
}
