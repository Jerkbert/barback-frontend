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
                </form>
            </div>
        )
    }
}




render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label></label>
                <input 
                    type='text' 
                    name='input' 
                    placeholder="Search"
                    value={this.state.input}
                    onChange={this.handleChange}/>
            </form>
            
        </div>
    )
}
}