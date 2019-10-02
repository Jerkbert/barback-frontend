import React from 'react'
import ProductCard from '../components/ProductCard'
import './Containers.css'

export default function ProductCollection(props) {
    const productCards = props.products.map( product => (
        <ProductCard 
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
