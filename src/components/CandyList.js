import React from 'react'

import Candy from './Candy'

function CandyList({ candies }) {
    return (
        <div>
            {candies.map(candy => <Candy key={candy.id} {...candy} />)}
        </div>
    )
}

export default CandyList
