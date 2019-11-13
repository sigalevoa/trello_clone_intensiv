let columnIDCounter = 4

//Add class and attributes to existing columns
document
	.querySelectorAll('.column')
	.forEach(Column.process)

//Add new column
document
	.querySelector('[data-action-addColumn]')
	.addEventListener('click', function(event) {
		const columnElement = document.createElement('div')
		columnElement.classList.add('column')
		columnElement.setAttribute('draggable', 'true')
		columnElement.setAttribute('data-column-id', columnIDCounter)

		columnElement.innerHTML = 
		`<p class="column-header">В плане</p>
		<div data-notes></div>
		<p class="column-footer">
			<span data-action-addNote class="action">+ Добавить карточку</span>
		</p>`

		columnIDCounter++
		document.querySelector('.columns').append(columnElement)
		Column.process(columnElement)
	})


//Add new note
document
	.querySelectorAll('.note')
	.forEach(Note.process)

