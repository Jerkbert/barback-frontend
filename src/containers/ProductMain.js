import React, { Component } from 'react'
// import ProductSpecs from '../components/ProductSpecs'
import ProductCollection from './ProductCollection'
// import ProductShelf from './ProductShelf'
import ProductForm from './ProductForm'
import NavBar from './NavBar'


export default class ProductMain extends Component {
    state={
        allProducts: [],
        displayProducts: [],
        savedProducts:[],
        currentProduct: {},
        showProduct: false,
        showAddForm: false
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
            displayProducts: [...this.state.displayProducts, product]
        }))
    }

    deleteProduct = (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/api/v1/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const {displayProducts} = this.state
        const newProducts = displayProducts.filter(product => product.id !== id)
        this.setState({
            displayProducts: newProducts,
            allProducts: newProducts
        })
    }

    handleAddProductClick = () => {
        this.setState({
            showAddForm: true
        })
    }

    filterByType = (product_type) => {
        if(product_type !== 'All'){
            this.setState({
                displayProducts: this.state.allProducts.filter( prod => prod.product_type === product_type)
            })
        }else{
            this.setState({
                displayProducts: this.state.allProducts
            })
        }
    }


    render() {
        return (
            <div>
                <NavBar filter={this.filterByType}/>
                {this.state.showAddForm ? null : <button onClick={this.handleAddProductClick}>Add New Products</button>}
                {this.state.showAddForm ? <ProductForm addProduct={this.addProduct}/> : null}
                <ProductCollection cardAction={this.deleteProduct} products={this.state.displayProducts} />
                <button onClick={()=> this.props.logout()}> log out </button>
            </div>
        )
    }
}
