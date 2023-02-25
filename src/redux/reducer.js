import { combineReducers } from 'redux'

import candyReducer from './candyReducer'
// import visibilityFilterReducer from './visibilityFilterReducer'

const rootReducer = combineReducers({
    candies: candyReducer,
    // visibilityFilter: visibilityFilterReducer
})

export default rootReducer
