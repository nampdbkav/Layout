import apiCaller from "../utils/apiCaller"

const actFetchTodo = (todos) => {
    return {
        type: 'FETCH_API',
        todos
    }
}

export const actFetchTodoRequest = () => {
    return (dispatch) => {
        return apiCaller(`todos`, 'GET', null)
            .then(res => {
                dispatch(actFetchTodo(res.data))
            })
    }
}

const actAddTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const actAddTodoRequest = (todo) => {
    return (dispatch) => {
        return apiCaller(`todos`, 'POST', todo)
            .then(res => {
                dispatch(actAddTodo(res.data))
            })
    }
}

const actGetTodo = (todo) => {
    return {
        type: 'GET_TODO',
        todo
    }
}

export const actGetTodoRequest = (id) => {
    return (dispatch) => {
        return apiCaller(`todos/${id}`, 'GET', null)
            .then(res => {
                dispatch(actGetTodo(res.data))
            })
    }
}

const actEditTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        todo
    }
}

export const actEditTodoRequest = (todo) => {
    return (dispatch) => {
        return apiCaller(`todos/${todo.id}`, 'PUT', todo)
            .then(res => {
                dispatch(actEditTodo(res.data))
            })
    }
}

const actDelTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const actDelTodoRequest = (id) => {
    return (dispatch) => {
        return apiCaller(`todos/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(actDelTodo(id))
            })
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
