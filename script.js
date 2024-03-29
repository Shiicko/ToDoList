const inputTask = document.querySelector('.input-text')
const formulario = document.querySelector('.add-form')
const contenedor = document.querySelector('.task-list')
const deleteAll = document.querySelector('.delete-all')
// console.log(inputTask, formulario, contenedor);

let ListaArr = JSON.parse(localStorage.getItem('tasks')) || []

const SaveTolocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(ListaArr))
}

const createTask = (task) => {
  return `
  <li>
  ${task.name} <img class="Done" src="/img/check_14025690.png" alt="" data-id="${task.id}">

  </li>
  `
}

const renderTaskList = () => {
  contenedor.innerHTML = ListaArr.map((task) => createTask(task)).join('')
}

const addTask = (e) => {
  e.preventDefault()
  const taskName = inputTask.value.trim().toLowerCase()

  if (taskName === '') {
    return alert('No hay valores')
  } else if (ListaArr.some((task) => task.name.toLowerCase() === taskName)) {
    return alert('Ya ingresaste esta tarea')
  }

  ListaArr = [...ListaArr, { name: taskName, id: Date.now() }]
  formulario.reset()
  renderTaskList()
  SaveTolocalStorage()

  //   contenedor.innerHTML = ListaArr.map((task) => {
  //     return `
  //     <li>${task.name}</li>
  //     `
  //   }).join('')
}

const removeTask = (e) => {
  if (!e.target.classList.contains('Done')) return
  const filterId = Number(e.target.dataset.id)
  ListaArr = ListaArr.filter((task) => task.id !== filterId)
  renderTaskList()
  SaveTolocalStorage()
}

const removeAll = () => {
  ListaArr = []
  renderTaskList()
  SaveTolocalStorage()
}

const init = () => {
  document.addEventListener('DOMContentLoaded', renderTaskList)
  formulario.addEventListener('submit', addTask)
  contenedor.addEventListener('click', removeTask)
  deleteAll.addEventListener('click', removeAll)
}

init()
