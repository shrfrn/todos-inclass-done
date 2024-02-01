'use strict'

var gTodos = [
    { id: 't101', txt: 'Do this', isDone: false },
    { id: 't102', txt: 'Do that', isDone: true },
    { id: 't103', txt: 'Try this', isDone: false },
]

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodos = document.querySelector('.todo-list')
    const strHtmls = gTodos.map(todo => `<li>
            <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
            <button onclick="onRemoveTodo('${todo.id}')">x</button>
        </li>`)
    elTodos.innerHTML = strHtmls.join('')
}

function onRemoveTodo(todoId) {
    console.log('todoId: ', todoId)
}

function onAddTodo() {
    console.log('Hi')
}