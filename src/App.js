import React, { useState } from 'react'
import CandyList from './components/CandyList'
// import VisibilityFilterButtons from './components/VisibilityFilterButton'
import useProducts from './hooks/useProducts'
import Cart from './components/Cart'
import Spinner from './components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from './redux/selectors'
import {addProduct} from './redux/actions'
import {useEffect} from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const NavBarDiv = styled.div`
    // background-color: #f4cce4;
    // background-color: #d8f4dc;
    background-color: black;
    display: flex;
    padding: 0;
    width: 100%;
    justify-content: center;
    color: white;

    li {
        list-style-type: none;
        height: 100%;
    }

    .navbar {

    }
    .navbar-items {
        height: 100%;
        // width: max-contents;
        // width: 40px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 10px;
        font-size: 30px;
    }
`
const CandyStore = styled.div`
    display: flex;
    flex-direction: row;
    width: 96%;
    justify-content: space-between;
    padding: 15px;
    margin: 0;
`

function App() {
    const {products, isLoading} = useProducts();
    const [hasProductStore, setHasProductStore] = useState(false)
    const dispatch = useDispatch()
    const productContents = useSelector(getProducts)

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
            <NavBarDiv>
                <h1>Penny Candy Store</h1>
            </NavBarDiv>
            { isLoading ? <Spinner /> : (
                <CandyStore>
                    <CandyList candies={productContents} />
                    <Cart />
                </CandyStore>
            )}
            
        </div>
    )
}

export default App;
