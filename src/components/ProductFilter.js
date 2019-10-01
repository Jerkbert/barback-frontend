import React from 'react'

export default function ProductFilter(props) {
    return (
        <div>
            <label>
                <h1>Filter by Product Type:</h1>
                <select onChange={(event)=> props.filter(event.target.value)}>
                    <option value="All">All</option>
                    <option value="agave">Agave</option>
                    <option value="gin">Gin</option>
                    <option value="whiskey">Whiskey</option>
                    <option value="vodka">Vodka</option>
                    <option value="rum">Rum</option>
                    <option value="liqueur">Liqueur</option>
                    <option value="non_alc">Non-alcoholic</option>
                </select>
            </label>
        </div>
    )
}
