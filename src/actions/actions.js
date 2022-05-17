import apiCaller from "../utils/apiCaller"

export const actFetchTodo = (todos) => {
    return {
        type: 'FETCH_API',
        todos
    }
}

export const actAddTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const actGetTodo = (todo) => {
    return {
        type: 'GET_TODO',
        todo
    }
}

export const actEditTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        todo
    }
}

export const actDelTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}





export const setFilterShow = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}

export const setShow = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
