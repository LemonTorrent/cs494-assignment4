export const ADD_CANDY = "ADD_CANDY"
export const TOGGLE_CANDY = "TOGGLE_CANDY"
export const REMOVE_CANDY = "REMOVE_CANDY"

/*
 * { type: ADD_TODO, text: "New todo text" }
 */
export function addCandy(text, num = 0) {
    // if (num >= 1) {
    //     return { type: ADD_CANDY, text, num }
        
    // }

    // return {};
    return { type: ADD_CANDY, text, num}
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

