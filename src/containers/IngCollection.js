import React from 'react'
import IngCard from '../components/IngCard'
import './Containers.css'
import DrinkBuilder from './DrinkBuilder'

export default function IngCollection(props) {
    const productCards = props.products.map( product => (
        <IngCard 
            editProduct={props.editProduct} 
            cardAction={props.cardAction} 
            product={product} 
            key={product.id} 
            id={product.id}
            addIngs={props.addIngs}/>
    ))
    return (
        <div className="collection-container">
            {/* <DrinkBuilder /> */}
            {productCards}
        </div>
    )
}
