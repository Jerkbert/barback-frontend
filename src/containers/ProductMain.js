import React, { Component } from 'react'
import ProductCollection from './ProductCollection'
import ProductForm from './ProductForm'
import NavBar from './NavBar'
import EditProduct from './EditProduct'
import IngCollection from './IngCollection'
import DrinkBuilder from './DrinkBuilder'
import './Containers.css'


export default class ProductMain extends Component {
    state={
        allProducts: [],
        displayProducts: [],
        showProduct: false,
        showAddForm: false,
        showEditForm: false,
        searchFilter: '',
        selectedProduct:null,
        showBuilder: false, 
        showProducts: false,
        addedIngs: [],
        totalValue: 0
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
            displayProducts: result,
            showProducts: true,           
        }, () => this.sortProducts()))
    }
    
    componentDidMount(){
        this.showProducts()
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
        
        .then(res => this.showProducts())
        .then(res => this.setState({
            showEditForm: false,           
        }))
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
            selectedProduct: product,
            showProducts: true
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

    sortProducts = () => {
        let sortedProducts = []
        sortedProducts = this.state.displayProducts.sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({
            displayProducts: sortedProducts
        })
    }

    goToBuilder = () => {
        if (this.state.showBuilder === true) {
            this.setState({
                showBuilder: false,
                showProducts: false
            })
        }else{
            this.setState({
                showBuilder: true,
                showProducts: true
            })
        }
    } 

    addIngs = (product, quantity) => {
        let updatedProduct = product
        updatedProduct.quantity = quantity
        this.setState({
            addedIngs:[...this.state.addedIngs, updatedProduct]
        })
    }

    resetDrink = () => {
        this.setState({
            addedIngs:[],
            totalValue:0
        })
    }

    drinkValue = (value) => {
        this.setState({
            totalValue: this.state.totalValue + (parseFloat(value))
        })
    }

    render() {
       
        return (
           
            <div className="main-product-container">

                {this.props.user ? <h2 className="user-name">Welcome to Barback, {this.props.user.username}!</h2> : null }
              
                <NavBar 
                    goToBuilder={this.goToBuilder} 
                    typeFilter={this.filterByType} 
                    filter={this.setSearchFilter} 
                    logout={this.props.logout} 
                    addProduct={this.handleAddProductClick}
                    showProducts={this.showProducts}
                    drinkBuilder={this.goToBuilder}
                    allProducts={this.state.allProducts}
                    sortProducts={this.sortProducts}
                />

                {this.state.showAddForm ? <ProductForm addProduct={this.addProduct}/> : null}

                {this.state.showEditForm ? <EditProduct editProduct={this.editProduct} selectedProduct={this.state.selectedProduct}/> : null}
                
                <div className="collection">
                
                    {this.state.showBuilder 
                    ? <IngCollection addIngs={this.addIngs} products={this.state.displayProducts} addedIngs={this.state.addedIngs}/> 
                    : <ProductCollection  editProduct={this.handleEditProductClick} cardAction={this.deleteProduct} products={this.state.displayProducts} />  }
                    
                    {this.state.addedIngs.length > 0 
                    ? <DrinkBuilder 
                        totalValue={this.state.totalValue} 
                        drinkValue={this.drinkValue} 
                        resetDrink={this.resetDrink} 
                        addedIngs={this.state.addedIngs} /> 
                    : null}
                </div>
                                 
            </div>
        )
    }
}
