import React from 'react'

export default function IngCard(props) {
    const { product, addIngs } = props

    let quantity = 0
    const getQuant = (quant) => {
        quantity = quant

    }



    return (
        <div>
         
                <span className="product-name"> {product.name} </span>
                <span className="product-cat"> | category: {product.product_type} </span>

                <label>quantity</label>
                <select onChange={(event)=> getQuant(event.target.value)}>
                    <option value="2.5 oz">2.5 oz</option>
                    <option value="2.25 oz">2.25 oz</option>
                    <option value="2 oz">2 oz</option>
                    <option value="1.75 oz">1.75 oz</option>
                    <option value="1.5 oz">1.5 oz</option>
                    <option value="1.25 oz">1.25 oz</option>
                    <option value="1 oz">1 oz</option>
                    <option value=".75 oz">.75 oz</option>
                    <option value=".5 oz">.5 oz</option>
                    <option value=".25 oz">.25 oz</option>
                    <option value="dash">dash</option>
                </select>
                <button onClick={()=> addIngs(product, quantity)}>add to drink</button>

        </div>
    )
}