import React from 'react'
import ProductFilter from '../components/ProductFilter'

export default function NavBar(props) {
    return (
        <div>
            <ProductFilter filter={props.filter}/>
        </div>
    )
}
