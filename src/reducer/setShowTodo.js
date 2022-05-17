import { setShow } from "../actions/actions"

const setShowTodo = (state = setShow.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default setShowTodo