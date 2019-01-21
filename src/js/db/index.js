import data from './testData.json'
import toggleLoading from '../functions/toggleLoading.js'

export const allBooks = () => {
	let books = localStorage.getItem('books')
	if (books) return JSON.parse(books)

	// свои данные для примера
	localStorage.setItem('books', JSON.stringify(data.books))
	books = localStorage.getItem('books')
	if (books) return JSON.parse(books)

	return []
}

export const fillBookForm = bookId => {
	const book = getBook(bookId)
	const elems = Array.from(document.querySelectorAll('.bookForm input'))
	for (let key in book) {
		const elem = elems.find(el => el.attributes.name.value === key)
		elem.value = book[key]
	}
}

export const updateBook = book => {
	const books = allBooks().map(el => {
		if (el.id === book.id) return book
		return el
	})
	localStorage.setItem('books', JSON.stringify(books))
}

export const addBook = ({ id, title, author }) => {
	const books = allBooks()
	books.forEach(el => {
		if (el.title === title && el.author === author) {
			alert('Такая книга уже есть в списке')
			toggleLoading()
			throw Error('Book already exist')
		}
	})

	const newBook = {
		id,
		title,
		author
	}
	localStorage.setItem('books', JSON.stringify([...books, newBook]))
}

export const deleteBook = bookId => {
	const books = allBooks().filter(({ id }) => id !== bookId)
	localStorage.setItem('books', JSON.stringify(books))
}

export const getBook = bookId => {
	const books = allBooks()
	return books.find(({ id }) => id === bookId)
}
