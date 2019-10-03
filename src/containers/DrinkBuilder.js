import React from 'react'
import DrinkCard from '../components/DrinkCard'


export default function DrinkBuilder(props) {

    const addedIngs = props.addedIngs.map( ing => (
        <DrinkCard product={ing} key={ing.id} drinkValue={props.drinkValue} />
    ))
  
    return (
        <div >
            <h1>Build a drink!</h1>
           {addedIngs}
           <h2>Drink cost: ${parseFloat(props.totalValue).toFixed(2)}</h2>
           <h2>Recommended Price: ${parseFloat(props.totalValue*5).toFixed(2)}</h2>

           <button onClick={() => props.resetDrink()}>Reset</button>
        </div>
    )

    
}
