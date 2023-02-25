import React, { useState } from 'react'
import CandyList from './components/CandyList'
// import VisibilityFilterButtons from './components/VisibilityFilterButton'
import useProducts from './hooks/useProducts'
import jsonProducts from './data/products'
import Cart from './components/Cart'

function App() {

    const [products, setProducts ] = useState(jsonProducts);
    // console.log(useProducts())
    console.log(products)

    // if (products == []) {
    //     setProducts(useProducts.products)
    // }

    // console.log("After if statement: ", products)

    // const activeTodoCount = todos.reduce(
    //     (count, todo) => todo.completed ? count : count + 1,
    //     0
    // )
    return (
        <div>
            <h1>Penny Candy Store</h1>
            <Cart />
            <CandyList candies={products} />
            <div>
                {/* {state.candies.map(candy => <p>{candy.name}</p>)} */}
            </div>
            
        </div>
    )
}

export default App;
