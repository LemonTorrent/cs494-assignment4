import { ADD_CANDY, TOGGLE_CANDY, REMOVE_CANDY, SHOW_CANDY, CLEAR_CANDIES } from './actions'

let candyId = 0
let found = false;
let tempArr = [];

function candyReducer(state = [], action) {
    switch (action.type) {
        case ADD_CANDY:
            found = false;
            state.map((candy) => {
                if (candy.text === action.text){
                    candy.quantity += action.quantity
                    found = true;
                }
            })

            if (found == false) {
                return([
                    {
                        text: action.text,
                        quantity: action.quantity,
                        price: action.price,
                        id: ++candyId
                    },        
                    ...state]
                    )
            }
            return [...state];

        case REMOVE_CANDY:
            tempArr = state.filter(function (candy) {
                return candy.id != action.id
            })

            return [...tempArr]
        case SHOW_CANDY:
            return state
        case CLEAR_CANDIES:
            return []
        default:
            console.log("return default")
            return state
    }
}

export default candyReducer
