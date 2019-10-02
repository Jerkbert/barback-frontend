import React from 'react'
import DrinkProductCard from '../components/DrinkProductCard'
import './Containers.css'

export default function DrinkProductCollection(props) {
    const productCards = props.products.map( product => (
        <DrinkProductCard 
            editProduct={props.editProduct} 
            cardAction={props.cardAction} 
            product={product} 
            key={product.id} 
            id={product.id}/>
    ))
    return (
        <div className="collection-container">
            {productCards}
        </div>
    )
}
