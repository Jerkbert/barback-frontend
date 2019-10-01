import React, { Component } from 'react'

export default class ProductForm extends Component {
    state={
        name:"",
        size:"",
        price:"",
        product_type:""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addProduct(this.state)
        this.setState({
            name:"",
            size:"",
            price:"",
            product_type:""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input
                        type='text'
                        name='name'
                        placeholder="Product Name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                        <input
                        type='text'
                        name='size'
                        placeholder="Bottle Size"
                        value={this.state.size}
                        onChange={this.handleChange}/>
                        <input
                        type='text'
                        name='price'
                        placeholder="Price Paid"
                        value={this.state.price}
                        onChange={this.handleChange}/>
                        <input
                        type='text'
                        name='product_type'
                        placeholder="Product Type"
                        value={this.state.product_type}
                        onChange={this.handleChange}/>
                        <button>Save Product</button>
                        
                </form>
            </div>
        )
    }
}

