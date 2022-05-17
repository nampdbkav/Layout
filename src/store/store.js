import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

import rootReducer from '../reducer/rootReducer'
const store = configureStore(
    { reducer: rootReducer },
    applyMiddleware(thunk)
)

export default store