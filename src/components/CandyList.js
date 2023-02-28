import React from 'react'
import styled from '@emotion/styled/macro'

import Candy from './Candy'

const CandyListing = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 75%;
    flex-wrap: wrap;
    height: fit-content;

`

function CandyList({ candies }) {
    // console.log("Candies: ", candies)
    return (
        <CandyListing>
            {candies.map(candy => <Candy key={candy.id} {...candy} />)}
        </CandyListing>
    )
}

export default CandyList
