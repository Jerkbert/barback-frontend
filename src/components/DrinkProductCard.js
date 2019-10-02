import React from 'react'

export default function DrinkProductCard(props) {
    const { product } = props

    return (
        <div>
         
                <span className="product-name"> {product.name} </span>
                <span className="product-cost"> | cost: ${product.price} </span>
                <span className="product-cat"> | category: {product.product_type} </span>
                <span className="product-size"> | size: {product.size} </span>
                
                  
                
            

        </div>
    )
}