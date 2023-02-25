import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCandies} from '../redux/selectors'
import {removeCandy} from '../redux/actions'


function Cart({ candies }) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const cartContents = useSelector(getCandies)

    function removeFromCart(id) {
        console.log("Remove from cart at id ", id)
        dispatch(removeCandy(id));
    }

    return (
        <div>
            <div id="cart-contents">
                {
                    show ?
                        (
                            <div>
                                {/* {candies ? candies.map(candy => <p>{candy.name}</p>) : <p>Nothing in Cart</p>} */}
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
                                <button>Check Out</button>
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
