import React, { Component } from 'react'
// import ProductSpecs from '../components/ProductSpecs'
import ProductCollection from './ProductCollection'
// import ProductShelf from './ProductShelf'
import ProductForm from './ProductForm'
import NavBar from './NavBar'
import EditProduct from './EditProduct'


export default class ProductMain extends Component {
    state={
        allProducts: [],
        displayProducts: [],
        savedProducts:[],
        currentProduct: {},
        showProduct: false,
        showAddForm: false,
        showEditForm: false,
        searchFilter: '',
        selectedProduct:{}
    }

    showProducts = () => {
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

    addProduct = (product)=> {
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
            allProducts: [...this.state.allProducts, product],
            displayProducts: [...this.state.displayProducts, product],
            showAddForm: false
        }))
    }

    editProduct=(product, id)=> {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/api/v1/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(product),
        })
        .then(result => result.json())
        .then(res => console.log(res))
      
    }

    deleteProduct = (id) => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/api/v1/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const {allProducts} = this.state
        const newProducts = allProducts.filter(product => product.id !== id)
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

    handleEditProductClick = (product) => {
        this.setState({
            showEditForm: true,
            selectedProduct: product
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

    setSearchFilter = (searchFilter) => {
        this.setState({
            searchFilter: searchFilter
        }, () => {
            this.search()
        })
    }

    search = () => {
        let displayProducts = this.state.allProducts.filter( prod => {
            return prod.name.toLowerCase().includes(this.state.searchFilter.toLowerCase())
        })
        this.setState({displayProducts})

    }


    render() {
        return (
            <div>
                <NavBar typeFilter={this.filterByType} filter={this.setSearchFilter} logout={this.props.logout} addProduct={this.handleAddProductClick}/>
                <button onClick={()=>this.showProducts()}>show all products</button>
                {this.state.showAddForm ? <ProductForm addProduct={this.addProduct}/> : null}
                {this.state.showEditForm ? <EditProduct editProduct={this.editProduct} selectedProduct={this.state.selectedProduct}/>: null }
                {this.state.displayProducts.length === 0 ? 
                <h1>Add products to your bar</h1> :
                <ProductCollection editProduct={this.handleEditProductClick} cardAction={this.deleteProduct} products={this.state.displayProducts} />
            }
               
            </div>
        )
    }
}
