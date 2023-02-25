import React, { useState } from 'react'

import Candy from './Candy'

function Cart({ candies }) {
    const [show, setShow] = useState(false);
    const [cartContents, setCartContents] = useState([])
    return (
        <div>
            {
                show ?
                    (
                        <div>
                            {candies ? candies.map(candy => <p>{candy.name}</p>) : <p>Nothing in Cart</p>}
                        </div>
                    ) : null
            }
            
            <button onClick={()=>{
                setShow(!show)
            }}>Show Cart</button>
        </div>
    )
}

export default Cart
