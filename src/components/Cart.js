import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCandies} from '../redux/selectors'
import {removeCandy, receiveProduct, clearCandies} from '../redux/actions'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const CartContents = styled.div`
    // background: lightgray;
    padding: 5px;

`

const RemoveButton = styled.button `
    background-color: #e383a8;
    color: #fff;
    border: 2px solid #e383a8;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 300;
    padding: 2px 5px;
    margin: 5px;
    cursor: pointer;
`

const CartListing = styled.div`
    background: lightgrey;
    p {
        margin: 0;
    }
    margin: 10px 0;
`

function Cart({ candies }) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const cartContents = useSelector(getCandies)

    function removeFromCart(id, name, quantity) {
        dispatch(removeCandy(id));
        dispatch(receiveProduct(name, quantity))
    }

    return (
        <CartContents id="cart-contents">
            <button onClick={()=>{
                console.log("cart contents:", cartContents)
                setShow(!show)
            }}>{show ? "Hide" : "Show"} Cart ({cartContents.length})</button>
            {
                show ?
                    (
                        <div>
                            {cartContents.length > 0 ? cartContents.map(candy => {
                                    return(
                                        <CartListing>
                                            <p>{candy.text}, {candy.quantity} pieces, ${candy.quantity * candy.price}</p>
                                            <RemoveButton onClick={()=>{
                                                removeFromCart(candy.id, candy.text, candy.quantity)
                                                }}>Remove</RemoveButton>
                                        </CartListing>
                                    )
                                }) : <p>Nothing in Cart</p>}
                            { cartContents.length > 0 ? <button onClick={()=>{
                                dispatch(clearCandies())
                            }}>Check Out</button> : null }
                        </div>
                    ) : null
            }
        </CartContents>
    )
}

export default Cart
