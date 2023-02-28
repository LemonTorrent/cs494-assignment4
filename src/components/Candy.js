import styled from '@emotion/styled/macro'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../redux/selectors'
import {addCandy, removeProduct} from '../redux/actions'
import { useState } from 'react'

const CandyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px;
    background: pink;
    button {
        margin-right: 5px;
    }
    width: 300px;
    img {
        max-width: 250px;
        max-height: 200px;
    }

    height: 400px;

    
`

const CandyHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #ffd9de;
    h2 {
        margin: 10px 0px;
    }
    margin: 10px 0;
`

function Candy({ name, inStock, id, photoUrl, price }) {
    const dispatch = useDispatch()
    const [numCandy, setNumCandy] = useState(0);
    const products = useSelector(getProducts)

    return (
        <CandyContainer >
            <CandyHeader>
                <h2>{name}</h2>
            </CandyHeader>
            <img src={photoUrl} alt={photoUrl}></img>

            <div>
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
            <p>Stock: {inStock}</p>
            {/* <img src={photoUrl} alt={photoUrl} /> */}
            <p>${price}</p>
        </CandyContainer>
    )
}

export default Candy
