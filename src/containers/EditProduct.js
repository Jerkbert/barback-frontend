import React, { Component } from 'react'
import './Containers.css'

export default class EditProduct extends Component {
    state={
        name:"",
        size:"",
        price:0,
        product_type:""
    
    }

    componentDidMount(){
        this.setState({            
            name:this.props.selectedProduct.name,
            size:this.props.selectedProduct.size,
            price:this.props.selectedProduct.price,
            product_type:this.props.selectedProduct.product_type  
    })
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedProduct.id !== prevProps.selectedProduct.id) {

            this.setState({
                
                    name:this.props.selectedProduct.name,
                    size:this.props.selectedProduct.size,
                    price:this.props.selectedProduct.price,
                    product_type:this.props.selectedProduct.product_type
                
            })
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        console.log('event', event.target.value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.editProduct(this.state, this.props.selectedProduct.id)
        
    }

    render() {
        // console.log('editing', this.props.selectedProduct)
        console.log('edit state', this.props)

        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                   
                    <input
                        className="form-item"
                        type='text'
                        name='name'
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <input
                        className="form-item"
                        type='text'
                        name='price'
                        placeholder="Price Paid"
                        value={this.state.price}
                        onChange={this.handleChange}/>
                     

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

                     

                    <button className="form-submit">Edit Product</button>
                        
                </form>
            </div>
        )
    }
}