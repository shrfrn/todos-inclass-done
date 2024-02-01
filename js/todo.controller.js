'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodos = document.querySelector('.todo-list')
    const todos = getTodos()
    
    const strHtmls = todos.map(todo => `<li onclick="onToggleTodo('${todo.id}')">
            <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)
    elTodos.innerHTML = strHtmls.join('')
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

function onAddTodo(ev) {
    ev.preventDefault()
    
    const elInput = document.querySelector('.new-todo input')

    addTodo(elInput.value)

    elInput.value = ''
    renderTodos()
}