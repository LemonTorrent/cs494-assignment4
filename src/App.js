import React, { useState } from 'react'
import CandyList from './components/CandyList'
// import VisibilityFilterButtons from './components/VisibilityFilterButton'
import useProducts from './hooks/useProducts'
import Cart from './components/Cart'
import Spinner from './components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts, getCandies} from './redux/selectors'
import {addProduct} from './redux/actions'
import {useEffect} from 'react'


function App() {
    const {products, isLoading} = useProducts();
    const [hasProductStore, setHasProductStore] = useState(false)
    const dispatch = useDispatch()
    const productContents = useSelector(getProducts)

    console.log(products)
    // console.log(getProducts())
    useEffect(() => {
        if (hasProductStore == false ) {
            setHasProductStore(true)
            for (let i = 0; i < products.length; i++) {
                dispatch(addProduct(products[i].name, products[i].inStock, products[i].photoUrl, products[i].price, products[i].id))
            }
        }

    })

    return (
        <div>
            <h1>Penny Candy Store</h1>
            { isLoading ? <Spinner /> : (
                <div>
                    <Cart />
                    <CandyList candies={productContents} />
                </div>
            )}
            
        </div>
    )
}

export default App;
