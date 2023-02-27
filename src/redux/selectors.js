
export function getCandies(state) {
    console.log("Inside getCandies selectors, state: ", state)
    return state.candies
}

export function getProducts(state) {
    console.log("Inside getProducts selectores, state: ", state)
    // return (state.products ? [] : [])
    //     console.log("Returning undefined")
    // //     return null
    // }
    return state.products
    // return []
}