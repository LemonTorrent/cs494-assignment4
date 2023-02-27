import { combineReducers } from 'redux'

import candyReducer from './candyReducer'
import productReducer from './productReducer'
// import visibilityFilterReducer from './visibilityFilterReducer'

const rootReducer = combineReducers({
    candies: candyReducer,
    // visibilityFilter: visibilityFilterReducer
    products: productReducer,
})

export default rootReducer
