'use strict'

var gFilterBy = ''

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodos = document.querySelector('.todo-list')
    const todos = getTodos(gFilterBy)
    
    const strHtmls = todos.map(todo => `<li onclick="onToggleTodo('${todo.id}')">
            <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
            <button onclick="onReadTodo(event, '${todo.id}')">Details</button>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)
    elTodos.innerHTML = strHtmls.join('')
    renderStats()
}

function renderStats() {
    const elTotal = document.querySelector('.total-todos')
    const elActive = document.querySelector('.active-todos')

    elTotal.innerText = getTotalTodoCount()
    elActive.innerText = getActiveTodoCount()
}

function onSetFilterBy(elFilterBy) {
    gFilterBy = elFilterBy.value
    renderTodos()
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()

    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId) {
    toggleTodo(todoId)
    renderTodos()
}

function onReadTodo(ev, todoId) {
    ev.stopPropagation()

    const elModal = document.querySelector('.todo-details')
    const elTxt = elModal.querySelector('h2 span')
    const elPre = elModal.querySelector('pre')

    const todo = readTodo(todoId)
    const todoStr = JSON.stringify(todo, null, 4)
    
    elTxt.innerText = todo.txt
    elPre.innerText = todoStr

    elModal.showModal()
}

function onAddTodo(ev) {
    ev.preventDefault()
    
    const elInput = document.querySelector('.new-todo input')

    addTodo(elInput.value)

    elInput.value = ''
    renderTodos()
}