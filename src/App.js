import React, { useState } from 'react'
import CandyList from './components/CandyList'
// import VisibilityFilterButtons from './components/VisibilityFilterButton'
import useProducts from './hooks/useProducts'
// import useGetProducts from './hooks/useGetProducts'
import jsonProducts from './data/products'
import Cart from './components/Cart'
import Spinner from './components/Spinner'


function App() {
    const [tempProducts, settempProducts ] = useState(jsonProducts);
    // const [products, setProducts ] = useState(jsonProducts);
    const {products, isLoading} = useProducts();
    console.log(products)
    // console.log("prod2, loading: ", products, loading)

    return (
        <div>
            <h1>Penny Candy Store</h1>
            { isLoading ? <Spinner /> : (
                <div>
                    <Cart />
                    <CandyList candies={products} />
                </div>
            )}
            
            <div>
                {/* {state.candies.map(candy => <p>{candy.name}</p>)} */}
            </div>
            
        </div>
    )
}

export default App;
