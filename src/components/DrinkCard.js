import React from 'react'

export default function DrinkCard(props) {
    const {product} = props

    let productSize

    switch(product.size) {
        case "375ml":
            productSize = 12.6803
            break
        case "750ml":
            productSize = 25.3605
            break
        case "1L":
            productSize = 33.814
            break
        case "1.75L":
            productSize = 59.17454
            break
        case "5.5 oz":
            productSize = 5.5
            break
        case "12 oz":
            productSize = 12
            break
        case "32 oz":
            productSize = 32
            break
        case "1 gal":
            productSize = 128
            break

            default:
            productSize = 1
    }

    const value = (parseFloat(product.price / productSize * product.quantity).toFixed(2))

   

    return (
        <div>
            <p>{product.quantity} oz {product.name} cost: ${value}</p>
            
        </div>
    )
}
