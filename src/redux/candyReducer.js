import { ADD_CANDY, TOGGLE_CANDY, REMOVE_CANDY } from './actions'

let candyId = 0
function candyReducer(state = [], action) {
    console.log("Reducer state:", state)
    console.log("Reducer action:", action)
    switch (action.type) {
        case ADD_CANDY:
            return [
                {
                    text: action.text,
                    quantity: action.num,
                    id: ++candyId
                },
                ...state
            ]
        case REMOVE_CANDY:
            return state.map(todo => (
                todo.id === action.id ? null : todo
            ))
        // case TOGGLE_CANDY:
        //     return state.map(todo => (
        //         todo.id === action.id ? {
        //             ...todo,
        //             completed: !todo.completed
        //         } : todo
        //     ))
        default:
            console.log("return default")
            return state
    }
}

export default candyReducer
