import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCandies} from '../redux/selectors'


function Cart({ candies }) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    // const [cartContents, setCartContents] = useState([])
    // const [cartContents, setCartContents] = useState(useSelector(getCandies))
    const cartContents = useSelector(getCandies)

    // const [cartContents, setCartContents] = useState(dispatch(getTodos))

    // console.log("useSelector: ", useSelector(null))

    return (
        <div>
            {
                show ?
                    (
                        <div>
                            {/* {candies ? candies.map(candy => <p>{candy.name}</p>) : <p>Nothing in Cart</p>} */}
                            {cartContents.length > 0 ? cartContents.map(candy => <p>{candy.text}, {candy.quantity}</p>) : <p>Nothing in Cart</p>}

                        </div>
                    ) : null
            }
            
            <button onClick={()=>{
                // setCartContents(useSelector(showCandy))
                console.log("cart contents:", cartContents)
                // console.log("cart contents:", dispatch(getCandies()))
                setShow(!show)
            }}>{show ? "Hide" : "Show"} Cart</button>
        </div>
    )
}

export default Cart
