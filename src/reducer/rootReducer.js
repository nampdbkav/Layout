import { combineReducers } from 'redux'
// import setShowTodo from './setShowTodo'
import todo from './todo'
import todoEditing from './todoEditing'

export default combineReducers({
    todo,
    // setShowTodo,
    todoEditing
})