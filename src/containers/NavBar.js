import React from 'react'
import ProductFilter from '../components/ProductFilter'
import ProductSearch from '../components/ProductSearch'
import './Containers.css'

export default function NavBar(props) {
    return (
        <div className = "nav-bar">
            <div className="nav-bar-left">
                <ProductFilter filter={props.typeFilter}/>
                <ProductSearch filter={props.filter}/>
            </div>
            <button className="form-submit" onClick={()=>props.showProducts()}>show all products</button>
            <button className="form-submit" onClick={()=>props.addProduct()}>add product</button>
            <button className="form-submit" onClick={() =>props.goToBuilder()}>Drink Builder</button>
            <button className="form-submit" onClick={()=> props.logout()}>logout</button>
            
        </div>
    )
}
