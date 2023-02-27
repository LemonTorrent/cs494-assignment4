import data from '../data/products.json'
import { ADD_PRODUCT, REMOVE_PRODUCT, RECEIVE_PRODUCT } from './actions'

let productId = 0
let found = false;
let tempArr = [];

function productReducer(state = [], action) {
    console.log("Inside productReducer")
    switch (action.type) {
        case ADD_PRODUCT:
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
        case REMOVE_PRODUCT:
            return (state.map((product) => {
                if (product.id === action.id){
                    product.inStock -= action.quantity
                    return product
                }
                return product
            }))
            case RECEIVE_PRODUCT:
                return (state.map((product) => {
                    if (product.name === action.name){
                        product.inStock += action.quantity
                    }
                    return product
                }))
        default:
            console.log("return default")
            return data;
    }
}

export default productReducer
