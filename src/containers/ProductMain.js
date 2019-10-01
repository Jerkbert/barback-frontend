import React, { Component } from 'react'
// import ProductSpecs from '../components/ProductSpecs'
import ProductCollection from './ProductCollection'
// import ProductShelf from './ProductShelf'

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
    render() {
        return (
            <div>
                <ProductCollection products={this.state.displayProducts} />
                <button onClick={()=> this.props.logout()}> log out </button>
            </div>
        )
    }
}
