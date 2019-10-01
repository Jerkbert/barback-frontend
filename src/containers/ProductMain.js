import React, { Component } from 'react'
// import ProductSpecs from '../components/ProductSpecs'
import ProductCollection from './ProductCollection'
// import ProductShelf from './ProductShelf'
import ProductForm from './ProductForm'


export default class ProductMain extends Component {
    state={
        allProducts: [],
        displayProducts: [],
        savedProducts:[],
        currentProduct: {},
        showProduct: false
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/api/v1/products/', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(result => this.setState({
            allProducts: result,
            displayProducts: result
        }))
    }

    addProduct=(product)=> {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/api/v1/products/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(product),
        })
        .then(result => console.log(result.json()))
        .then(this.setState({
            displayProducts: [...this.state.allProducts, product]
        }))
    }


    render() {
        return (
            <div>
                <ProductForm addProduct={this.addProduct}/>
                <ProductCollection products={this.state.displayProducts} />
                <button onClick={()=> this.props.logout()}> log out </button>
            </div>
        )
    }
}
