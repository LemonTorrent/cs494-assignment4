import { createStore } from 'redux'
// import rootReducer from './candyReducer'
import rootReducer from './reducer'
// import rootReducer from './candyReducer'
// import {configureStore} from '@reduxjs/toolkit'

// const cart = createStore(rootReducer)
const store = createStore(rootReducer)
// const store = configureStore()

store.subscribe(() => {
    console.log("== cart:", store.getState())
})

export default store
