
const initState = []

const findIndex = (todo, id) => {
    var result = -1
    todo.forEach((todo, index) => {
        if (todo.id === id) {
            result = index
        }
    });
    return result
}


const todo = (state = initState, action) => {

    var index = -1

    switch (action.type) {
        case 'FETCH_API':
            state = action.todos
            return [...state]
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        case 'ADD_TODO':
            return [action.todo, ...state]
        case 'EDIT_TODO':
            index = findIndex(state, action.todo.id)
            state[index] = action.todo
            return [...state]
        default:
            return state;
    }

}

export default todo