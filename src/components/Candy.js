import styled from '@emotion/styled/macro'
import { useDispatch } from 'react-redux'
import {addCandy} from '../redux/actions'
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
                        setNumCandy(evt.target.value)
                    }}
                    required 
                    />
                
                <div>
                    <input type="submit" onClick={() => {
                        dispatch(addCandy(name, numCandy))
                        inStock = inStock - numCandy
                        }} value="Add to Cart"/>
                </div>
            </div>
            {/* <button onClick={() => {
                dispatch(addCandy(name))
                inStock = inStock - numCandy
                }}>Add to Cart</button> */}
            {name}
            Stock: {inStock}
            {/* <img src={photoUrl} alt={photoUrl} /> */}
            ${price}
        </CandyContainer>
    )
}

export default Candy