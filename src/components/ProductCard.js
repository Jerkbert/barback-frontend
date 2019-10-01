import React from 'react'

export default function ProductCard(props) {
    const { product, editProduct, deleteProduct } = props

    return (
        <span>
         
                <h2>{product.name} 
                {/* <h2>{product.size} </h2>
                <h2>${product.price} </h2>
                <h2>{product.product_type}</h2> */}
                <button onClick={editProduct}>Edit</button>
                <button onClick={deleteProduct}>Delete</button></h2>

        </span>
    )
}
