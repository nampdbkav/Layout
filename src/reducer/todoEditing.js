const initState = {}

const todoEditing = (state = initState, action) => {

    switch (action.type) {
        case 'GET_TODO':
            return action.todo
        default:
            return state
    }

}

export default todoEditing