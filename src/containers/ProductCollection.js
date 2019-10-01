import React from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductCollection(props) {
    const productCards = props.products.map( product => (
        <ProductCard product={product} key={product.id} />
    ))
    return (
        <div>
            {productCards}
        </div>
    )
}
