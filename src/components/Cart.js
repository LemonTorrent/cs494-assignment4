import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCandies} from '../redux/selectors'
import {removeCandy} from '../redux/actions'


function Cart({ candies }) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const cartContents = useSelector(getCandies)

    function removeFromCart(id) {
        dispatch(removeCandy(id));
    }

    return (
        <div>
            <div id="cart-contents">
                {
                    show ?
                        (
                            <div>
                                {console.log("Before mapping", cartContents.length)}
                                {cartContents.length > 0 ? cartContents.map(candy => {
                                        return(<div>
                                            <p>{candy.text}, {candy.quantity}, ${candy.quantity * candy.price}</p>
                                            <button onClick={()=>{
                                                removeFromCart(candy.id)
                                                }}>Remove from Cart</button>
                                        </div>
                                        )
                                    }) : <p>Nothing in Cart</p>}
                                { cartContents.length > 0 ? <button>Check Out</button> : null }
                            </div>
                        ) : null
                }
            </div>
            
            <button onClick={()=>{
                console.log("cart contents:", cartContents)
                setShow(!show)
            }}>{show ? "Hide" : "Show"} Cart ({cartContents.length})</button>
        </div>
    )
}

export default Cart
