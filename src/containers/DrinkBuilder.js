import React, { Component } from 'react'
// import ProductSpecs from '../components/ProductSpecs'
import DrinkProductCollection from './DrinkProductCollection'
// import ProductShelf from './ProductShelf'
import ProductForm from './ProductForm'
import NavBar from './NavBar'
import EditProduct from './EditProduct'


export default class DrinkBuilder extends Component {

    state={
        allProducts: [],
        displayProducts: [],
        showProduct: false,
        showAddForm: false,
        showEditForm: false,
        searchFilter: '',
        selectedProduct:{},
        drink: {name:"",
                directions:"",
                }
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
                <NavBar typeFilter={this.filterByType} filter={this.setSearchFilter} logout={this.props.logout}/>
                <button onClick={()=>this.showProducts()}>show all products</button>           
                {this.state.displayProducts.length === 0 ? 
                <h1>Add products to your bar</h1> :
                <DrinkProductCollection editProduct={this.handleEditProductClick} cardAction={this.deleteProduct} products={this.state.displayProducts} />
                }
               
            </div>
        )
    }
}