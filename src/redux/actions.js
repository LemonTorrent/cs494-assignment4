export const ADD_CANDY = "ADD_CANDY"
export const TOGGLE_CANDY = "TOGGLE_CANDY"
export const REMOVE_CANDY = "REMOVE_CANDY"
export const SHOW_CANDY = "SHOW_CANDY"
export const CLEAR_CANDIES = "CLEAR_CANDIES"

export const ADD_PRODUCT = "ADD_PRODUCT"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"

/*
 * { type: ADD_TODO, text: "New todo text" }
 */
export function addCandy(text, quantity = 0, price) {
    // if (num >= 1) {
    //     return { type: ADD_CANDY, text, num }
        
    // }

    // return {};
    return { type: ADD_CANDY, text, quantity, price}
}

/*
 * { type: TOGGLE_TODO, id: 3 }
 */
export function toggleCandy(id) {
    return { type: TOGGLE_CANDY, id }
}

/*
 * { type: REMOVE_TODO, id: 3 }
 */
export function removeCandy(id) {
    return { type: REMOVE_CANDY, id }
}

/*
 * { type: REMOVE_TODO, id: 3 }
 */
export function showCandy() {
    return { type: SHOW_CANDY }
}

export function clearCandies() {
    console.log("Clearning candies:")
    return { type: CLEAR_CANDIES }
}

/*
 * { type: ADD_PRODUCT, text: "New candy text", int: price, int:  quantity}
 */
export function addProduct(name, inStock = 0, photoUrl, price, id) {
    // if (num >= 1) {
    //     return { type: ADD_CANDY, text, num }
        
    // }

    // return {};
    console.log("Add product")
    return { type: ADD_PRODUCT, name, inStock, photoUrl, price, id}
}

/*
 * { type: REMOVE_TODO, id: 3 }
 */
export function removeProduct(id, quantity) {
    return { type: REMOVE_PRODUCT, id, quantity }
}

/*
 * { type: REMOVE_TODO, id: 3 }
 */
export function receiveProduct(name, quantity) {
    return { type: RECEIVE_PRODUCT, name, quantity }
}