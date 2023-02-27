import styled from '@emotion/styled/macro'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../redux/selectors'
import {addCandy, removeProduct} from '../redux/actions'
import { useState } from 'react'

const CandyContainer = styled.div`
    margin: 3px;
    button {
        margin-right: 5px;
    }
`

function Candy({ name, inStock, id, photoUrl, price }) {
    const dispatch = useDispatch()
    const [numCandy, setNumCandy] = useState(0);
    const products = useSelector(getProducts)

    return (
        <CandyContainer >
            <div>
                <span class="validity"></span>
                
                <input 
                    value = {numCandy}
                    type="number" 
                    id="candies" 
                    name="sizeCandyOrder"
                    min="0"
                    max="100"
                    step="10"
                    onChange={evt => {
                        setNumCandy(parseInt(evt.target.value))
                    }}
                    required 
                    />
                
                <div>
                    <input type="submit" onClick={() => {
                        console.log("quantity: ", products[id - 1])
                        if (numCandy > 0 && numCandy <= products[id - 1].inStock) {
                            dispatch(addCandy(name, numCandy, price))
                            dispatch(removeProduct(id, numCandy))
                        }
                        }} value="Add to Cart"/>
                </div>
            </div>
            {name}
            Stock: {inStock}
            {/* <img src={photoUrl} alt={photoUrl} /> */}
            ${price}
            Id: {id}
        </CandyContainer>
    )
}

export default Candy
