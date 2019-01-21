export default () => {
	document
		.querySelector('.bookForm .ui.segment.form')
		.classList.toggle('loading')
	document.querySelector('.bookList .ui.segment').classList.toggle('loading')
}
