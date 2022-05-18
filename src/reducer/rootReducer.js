import { combineReducers } from 'redux'
import setShowTodo from './setShowTodo'
import todo from './todo'


export default combineReducers({
    todo,
    setShowTodo,
})