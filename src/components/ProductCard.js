import React from 'react'
import './Components.css'

export default function ProductCard(props) {
    const { product, editProduct, cardAction, } = props

    return (
        <div className="product-line">
         
                <span className="product-name"> {product.name} </span>
                <span className="product-cat">  {product.product_type} </span>
                <span className="product-cost">  cost: ${parseFloat(product.price).toFixed(2)} </span>
                <span className="product-size">  size: {product.size} </span>  

                <button className="item-submit" onClick={()=> editProduct(product, product.id)}>Edit</button>
                <button className="item-submit" onClick={()=> cardAction(product.id)}>Delete</button>
        
        </div>
    )
}
