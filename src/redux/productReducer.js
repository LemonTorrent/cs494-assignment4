import data from '../data/products.json'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

let productId = 0
let found = false;
let tempArr = [];

function productReducer(state = [], action) {
    console.log("Inside productReducer")
    switch (action.type) {
        case ADD_PRODUCT:
            console.log("Add product, action: ", action)
            return [
                {
                    name: action.name,
                    inStock: action.inStock,
                    price: action.price,
                    photoUrl: action.photoUrl,
                    id: action.id
                },
                ...state
            ]
        // case ADD_CANDY:
        //     found = false;
        //     state.map((candy) => {
        //         if (candy.text === action.text){
        //             candy.quantity += action.num
        //             found = true;
        //         }
        //     })

        //     if (found == false) {
        //         return([
        //             {
        //                 text: action.text,
        //                 quantity: action.num,
        //                 price: action.price,
        //                 id: ++candyId
        //             },        
        //             ...state]
        //             )
        //     }
        //     return [...state];

        // case REMOVE_CANDY:
        //     tempArr = state.filter(function (candy) {
        //         return candy.id != action.id
        //     })

        //     return [...tempArr]
        // case SHOW_CANDY:
        //     return state
        default:
            console.log("return default")
            return data;
    }
}

export default productReducer