import { ADD_CANDY, TOGGLE_CANDY, REMOVE_CANDY } from './actions'

let candyId = 0
let found = false;
let tempArr = [];

function candyReducer(state = [], action) {
    console.log("Reducer state:", state)
    console.log("Reducer action:", action)
    switch (action.type) {
        case ADD_CANDY:
            found = false;
            tempArr = state.map((todo) => {
                if (todo.text === action.text){
                  todo.quantity += action.num
                  found = true;
                }
            })

            if (found == false) {
                console.log("Found is false")
                return([
                    {
                        text: action.text,
                        quantity: action.num,
                        id: ++candyId
                    },        
                    ...tempArr]
                    )
            }

            console.log("Found is true")

            return [...state];

            // return [
            //     {
            //         text: action.text,
            //         quantity: action.num,
            //         id: ++candyId
            //     },
            //     ...state
            // ]
        case REMOVE_CANDY:
            return state.map(todo => (
                todo.id === action.id ? null : todo
            ))
        default:
            console.log("return default")
            return state
    }
}

export default candyReducer
