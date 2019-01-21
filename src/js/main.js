import BookForm from './components/BookForm'
import BookList from './components/BookList'

document.addEventListener('DOMContentLoaded', () => {
	console.log('Window loaded')

	const main = document.querySelector('#root main')

	// Book form
	const form = new BookForm().getElem()
	main.appendChild(form)

	// Book list
	const list = new BookList().getElem()
	main.appendChild(list)
})
