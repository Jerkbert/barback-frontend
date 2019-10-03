import React from 'react'
import DrinkCard from '../components/DrinkCard'


export default function DrinkBuilder(props) {
    const addedIngs = props.addedIngs.map( ing => (
        <DrinkCard product={ing}/>
    ))

    

  
    return (
        <div className="drink-builder">
            <h2>Build a drink!</h2>
           {addedIngs}
           <button onClick={() => props.resetDrink()}>Reset</button>
        </div>
    )
}
