import { ADD_CANDY, TOGGLE_CANDY, REMOVE_CANDY, SHOW_CANDY } from './actions'

let candyId = 0
let found = false;
let tempArr = [];

function candyReducer(state = [], action) {
    // console.log("Reducer state:", state)
    // console.log("Reducer action:", action)
    switch (action.type) {
        case ADD_CANDY:
            found = false;
            state.map((todo) => {
                if (todo.text === action.text){
                  todo.quantity += action.num
                  found = true;
                }
            })

            if (found == false) {
                return([
                    {
                        text: action.text,
                        quantity: action.num,
                        id: ++candyId
                    },        
                    ...state]
                    )
            }
            return [...state];

        case REMOVE_CANDY:
            return state.map(todo => (
                todo.id === action.id ? null : todo
            ))
        case SHOW_CANDY:
            return state
        default:
            console.log("return default")
            return state
    }
}

export default candyReducer
