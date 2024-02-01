'use strict'

var gTodos = [
    { id: 't101', txt: 'Do this', isDone: false },
    { id: 't102', txt: 'Do that', isDone: true },
    { id: 't103', txt: 'Try this', isDone: false },
]

function getTodos(filterBy) { // List
    if(!filterBy) return gTodos

    const isDone = (filterBy === 'Done')
    return gTodos.filter(todo => todo.isDone === isDone)

    // return gTodos.filter(todo => 
    //     todo.isDone === (filterBy === 'Done') ? true : false)

}

function removeTodo(todoId) {  // Delete
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)
}

function toggleTodo(todoId) { // Update
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
}

function readTodo(todoId) { // Read
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function addTodo(txt) { // Create
    const todo = {
        id: 't' + Date.now() % 1000,
        txt,
        isDone: false,
    }
    gTodos.unshift(todo)
}