import React from 'react'
import IngCard from '../components/IngCard'


export default function DrinkBuilder(props) {
    const addedIngs = props.addedIngs.map( ing => (
        <IngCard product={ing} />
    ))
    return (
        <div>
            <h1>Add ingredients to your drink</h1>
           {addedIngs}
        </div>
    )
}
