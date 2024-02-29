'use strict'

var gFilterBy = ''

$(onInit)

function onInit() {
    $('.filter select').on('change', onSetFilterBy)
    $('.new-todo').on('submit', onAddTodo)

    renderTodos()
}

function addListeners() {
    $('.todo-list li').on('click', onToggleTodo)
    $('.btn-details').on('click', onReadTodo)
    $('.btn-delete').on('click', onRemoveTodo)
}

function renderTodos() {
    const todos = getTodos(gFilterBy)
    
    const strHtmls = todos.map(todo => `<li data-todo-id="${todo.id}">
            <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
            <button class="btn-details">Details</button>
            <button class="btn-delete">x</button>
        </li>`)

    $('.todo-list').html(strHtmls)

    renderStats()
    addListeners()
}

function renderStats() {
    $('.total-todos').text(getTotalTodoCount())
    $('.active-todos').text(getActiveTodoCount())
}

function onSetFilterBy() {
    gFilterBy = this.value
    renderTodos()
}

function onRemoveTodo(ev) {
    ev.stopPropagation()
    const todoId = $(this).closest('li').data('todoId')

    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo() {
    const todoId = $(this).data('todoId')

    toggleTodo(todoId)
    renderTodos()
}

function onReadTodo(ev) {
    ev.stopPropagation()
    const todoId = $(ev.target).closest('li').data('todoId')
    console.log('todoId: ', todoId)
    const todo = readTodo(todoId)
    const todoStr = JSON.stringify(todo, null, 4)
    
    $('.todo-details h2 span').text(todo.txt)
    $('.todo-details pre').text(todoStr)

    $('.todo-details')[0].showModal()
}

function onAddTodo(ev) {
    ev.preventDefault()

    addTodo($('.new-todo input').val())

    $('.new-todo input').val('')
    renderTodos()
}