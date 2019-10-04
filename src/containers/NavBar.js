import React from 'react'
import ProductFilter from '../components/ProductFilter'
import ProductSearch from '../components/ProductSearch'
import './Containers.css'

export default function NavBar(props) {
    return (
        <div className = "nav-bar">
            <div className="nav-bar-left">
                <ProductSearch filter={props.filter}/>
                <ProductFilter filter={props.typeFilter}/>
                <button className="form-submit" onClick={()=>props.sortProducts()}>Sort A-Z</button>
            </div>
            <button className="form-submit" onClick={()=>props.showProducts()}>refresh products</button>
            <button className="form-submit" onClick={()=>props.addProduct()}>add product</button>
            {props.allProducts.length > 0 ? 
            <button className="form-submit" onClick={()=>props.goToBuilder()}>Toggle Drink Mode</button> : null }
            <button className="form-submit" onClick={()=>props.logout()}>logout</button>
            
        </div>
    )
}
