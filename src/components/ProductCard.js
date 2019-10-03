import React from 'react'

export default function ProductCard(props) {
    const { product, editProduct, cardAction, } = props

    return (
        <div>
         
                <span className="product-name"> {product.name} </span>
                <span className="product-cat"> | {product.product_type} </span>
                <span className="product-cost"> | cost: ${parseFloat(product.price).toFixed(2)} </span>
                <span className="product-size"> | size: {product.size} </span>  

                <button onClick={()=> editProduct(product, product.id)}>Edit</button>
                <button onClick={()=> cardAction(product.id)}>Delete</button>

              

        </div>
    )
}
