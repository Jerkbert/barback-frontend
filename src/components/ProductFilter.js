import React from 'react'

export default function ProductFilter(props) {
    return (
        <div>
            <label>
                <h1>Filter by Product Type:</h1>
                <select onChange={(event)=> props.filter(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Agave">Agave</option>
                    <option value="Gin">Gin</option>
                    <option value="Whiskey">Whiskey</option>
                    <option value="Vodka">Vodka</option>
                    <option value="Rum">Rum</option>
                    <option value="Liqueur">Liqueur</option>
                    <option value="Non Alcoholic">Non Alcoholic</option>
                    <option value="Bitter">Bitter</option>
                </select>
            </label>
        </div>
    )
}
