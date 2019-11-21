Application.load()

//Добавление новой колонки
document
	.querySelector('[data-action-addColumn]')
	.addEventListener('click', function(event) {
		const column = new Column()
		document.querySelector('.columns').append(column.element)

		Application.save()
	})