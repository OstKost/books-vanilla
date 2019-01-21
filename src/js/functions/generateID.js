import { allBooks } from '../db'

export default () => {
	const books = allBooks()
	let newId = Math.random()
		.toString(32)
		.slice(2, 8)
	if (books.find(({ id }) => id === newId)) newId = generateId()
	return newId
}
