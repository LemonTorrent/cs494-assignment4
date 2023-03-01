import styled from '@emotion/styled/macro'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../redux/selectors'
import {addCandy, removeProduct} from '../redux/actions'
import { useState } from 'react'

const CandyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px;
    margin-right: 10px;
    margin-bottom: 10px;
    background: pink;
    button {
        margin-right: 5px;
    }
    width: 300px;


    height: 405px;

    p {
        margin: 0;
    }

    
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

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 220px;
    padding: 0;
    margin: 0;

    img {
        // width: auto;
        max-width: 260px;
        // height: auto;
        max-height: 200px;
        // // object-fit: cover;
        width:inherit;
        height:inherit;
        object-fit: contain;
    }

`

const QuantityInput = styled.div`
    display: flex;
    flex-direction: row;
    
    p {
        margin-right: 5px;
    }

    input {
        width: 55px;
    }
`

const AddToCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // padding: 0 10px;
`

const CandyInfo = styled.div`
    padding: 0 10px;

`

const ErrMessage = styled.div`
    margin-top: 5px;
    padding: 5px;
    background: #ff7c7c;
    color:
`

function Candy({ name, inStock, id, photoUrl, price }) {
    const dispatch = useDispatch()
    const [numCandy, setNumCandy] = useState(0);
    const [errZero, setErrZero] = useState(false);
    const [errLarge, setErrLarge] = useState(false);
    const products = useSelector(getProducts)

    return (
        <CandyContainer >
            <CandyHeader>
                <h2>{name}</h2>
            </CandyHeader>
            <ImgContainer>
                <img src={photoUrl} alt={photoUrl}></img>
            </ImgContainer>

            <CandyInfo>
                <p>Units in Stock: {inStock}</p>
                <p>Price: ${price}</p>
                <AddToCart>
                    <QuantityInput>
                        <p>Select Quantity:</p>
                        <input 
                            value = {numCandy}
                            type="number" 
                            id="candies" 
                            name="sizeCandyOrder"
                            min="0"
                            max="10000"
                            step="10"
                            onChange={evt => {
                                setNumCandy(parseInt(evt.target.value))
                            }}
                            required 
                            />
                    </QuantityInput>
                    
                    
                    <div>
                        <input type="submit" onClick={() => {
                            console.log("quantity: ", products[id - 1])
                            if (numCandy > 0 && numCandy <= products[id - 1].inStock) {
                                setErrZero(false)
                                setErrLarge(false)
                                dispatch(addCandy(name, numCandy, price))
                                dispatch(removeProduct(id, numCandy))
                            } else {
                                if (numCandy <= 0) {
                                    setErrZero(true)
                                    setErrLarge(false)
                                } else {
                                    setErrZero(false)
                                    setErrLarge(true)
                                }
                            }
                            }} value="Add to Cart"/>
                    </div>
                </AddToCart>
                
                    {errZero ? (
                        <ErrMessage>
                            <p>Error: Choose a quantity greater than 0 </p>
                        </ErrMessage>
                        ) : null}
                    {errLarge ? (
                        <ErrMessage>
                            <p>Error: Choose a quantity less than or equal to the units in stock</p>
                        </ErrMessage>
                    ) : null}
                
                
            </CandyInfo>
        </CandyContainer>
    )
}

export default Candy
