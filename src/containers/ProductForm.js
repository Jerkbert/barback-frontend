import React, { Component } from 'react'
import './Containers.css'

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
            <div >
                <form  onSubmit={this.handleSubmit}>
                    <label></label>
                    <input
                        className="form-item"
                        type='text'
                        name='name'
                        placeholder="Product Name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                        <input
                        className="form-item"
                        type='text'
                        name='price'
                        placeholder="Price Paid"
                        value={this.state.price}
                        onChange={this.handleChange}/>
                        <label>

                        <select
                        className="form-item"
                        name='product_type'
                        value={this.state.product_type}
                        onChange={this.handleChange}>
                            <option value="nocat">Category</option>
                            <option value="Agave">Agave</option>
                            <option value="Gin">Gin</option>
                            <option value="Whiskey">Whiskey</option>
                            <option value="Vodka">Vodka</option>
                            <option value="Rum">Rum</option>
                            <option value="Liqueur">Liqueur</option>
                            <option value="Non Alcoholic">Non Alcoholic</option>
                            <option value="Bitter">Bitter</option>
                        </select>
                        </label>
                        <label>
                        <select
                        className="form-item"
                        name='size'
                        value={this.state.size}
                        onChange={this.handleChange}>
                            <option value="nosize">Bottle Size</option>
                            <option value="375ml">375ml</option>
                            <option value="750ml">750ml</option>
                            <option value="1L">1L</option>
                            <option value="1.75L">1.75L</option>
                            <option value="5.5 oz">5.5 oz</option>
                            <option value="12 oz">12 oz</option>
                            <option value="32oz">32 oz</option>
                            <option value="1 gal">1 gal</option>
                            </select>

                        </label>

                        <button className="form-submit">Save Product</button>
                        
                </form>
            </div>
        )
    }
}

