'use strict'

var gTodos
_createTodos()

function getTodos(filterBy) {
	// List
	if (!filterBy) return gTodos

	const isDone = filterBy === 'Done'
	return gTodos.filter(todo => todo.isDone === isDone)

	// return gTodos.filter(todo =>
	//     todo.isDone === (filterBy === 'Done') ? true : false)
}

function removeTodo(todoId) {
	// Delete
	const idx = gTodos.findIndex(todo => todo.id === todoId)
	gTodos.splice(idx, 1)

    _saveTodos()
}

function toggleTodo(todoId) {
	// Update
	const todo = gTodos.find(todo => todo.id === todoId)
	todo.isDone = !todo.isDone

    _saveTodos()
	return todo
}

function readTodo(todoId) {
	// Read
	const todo = gTodos.find(todo => todo.id === todoId)
	return todo
}

function addTodo(txt) {
	// Create
	const todo = _createTodo(txt)
	gTodos.unshift(todo)

    _saveTodos()
	return todo
}

function getTotalTodoCount() {
	return gTodos.length
}

function getActiveTodoCount() {
	return gTodos.filter(todo => todo.isDone === false).length
}

// Private functions

function _createTodos() {
    gTodos = loadFromStorage('todoDB')
    if(!gTodos || gTodos.length === 0){

        gTodos = [
            _createTodo('Do this'), 
            _createTodo('Do that'), 
            _createTodo('Try this')
        ]
        _saveTodos()
    }
}

function _createTodo(txt) {
	return {
		id: makeId(),
		txt,
		isDone: false,
	}
}

function _saveTodos() {
    saveToStorage('todoDB', gTodos)
}