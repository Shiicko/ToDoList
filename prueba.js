const inputTask = document.querySelector(".input-text");
const formulario = document.querySelector(".add-form");
const contenedor = document.querySelector(".task-list");



let ListaArr = []


const createTask = (task) => {
return `
<li>
  ${task.name} <img class="Done" src="/img/check_14025690.png" alt="" data-id="${task.id}">

  </li>
`
}

const renderTaskList = () => {
    contenedor.innerHTML = ListaArr.map(task => createTask(task)).join("")
}

const addTask = (e) => {
    e.preventDefault()
    const taskName = inputTask.value.trim()

    ListaArr = [...ListaArr, {name: taskName, id: Date.now()}]
    formulario.reset()
    renderTaskList()
    
}


const init = () => {
    document.addEventListener('DOMContentLoaded', renderTaskList)
    formulario.addEventListener('submit', addTask)
}

init()