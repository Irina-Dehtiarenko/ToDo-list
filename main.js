const form = document.querySelector('form')
const ul = document.querySelector('ul')
const taskNumber = document.querySelector('h1 span')
const input = document.querySelector('input')

const removeTask = e => {
	e.target.parentNode.remove()

	taskNumber.textContent = document.querySelectorAll('.task').length;
}

const addTask = e => {
	e.preventDefault()

	const titleTask = input.value
	if (titleTask === "") return alert('Zadanie niee być puste')

	const task = document.createElement('li');
	task.className = 'task'
	task.innerHTML = titleTask + "<button>Usuń</button>"
	ul.appendChild(task)

	taskNumber.textContent = document.querySelectorAll('.task').length;

	input.value = ''

	task.querySelector('button').addEventListener('click', removeTask)

}

form.addEventListener('submit', addTask)