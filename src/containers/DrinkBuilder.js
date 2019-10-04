import React from 'react'
import DrinkCard from '../components/DrinkCard'
import './Containers.css'


export default function DrinkBuilder(props) {

    const addedIngs = props.addedIngs.map( ing => (
        <DrinkCard product={ing} key={ing.id} drinkValue={props.drinkValue} />
    ))
  
    return (
        <div className="drink-card" >
            <h1>Drink Builder</h1>
                <div className="drink-build">
                {addedIngs}
                </div>
            <h2>Total Cost: ${parseFloat(props.totalValue).toFixed(2)}</h2>
            <h2>Recommended Price: ${parseFloat(props.totalValue*5).toFixed(2)}</h2>

           <button className="form-submit"onClick={() => props.resetDrink()}>Reset</button>
        </div>
    )

    
}
