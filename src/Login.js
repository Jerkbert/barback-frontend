import React, { Component } from 'react'

export default class Login extends Component {
    state={
        username: '',
        password: '',
        passCheck: '',
        login: false,
        createNew: false
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleLogInSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    handleNewUserSubmit = (event) => {
        event.preventDefault()
        this.props.newUser(this.state)
        this.setState({
            username:'',
            password:''
        })
    }

    handleLogInClick = () => {
        this.setState({
            login: true,
            createNew: false
        })
    }

    handleNewUserClick = () => {
        this.setState({
            createNew: true,
            login: false
        })
    }

    render() {
        return this.props.user ? null : (
            <div>
                <button onClick={this.handleLogInClick}>LOG IN</button>
                <button onClick={this.handleNewUserClick}>CREATE NEW USER</button>
                {this.state.login ?
                <form onSubmit={this.handleLogInSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit"/> 
                </form> : null }
                {this.state.createNew ? 

                <form onSubmit={this.handleNewUserSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    <label>Re-enter Password</label>
                    <input type='password' name='passCheck' value={this.state.passCheck} onChange={this.handleChange}/>
                    {this.state.password !== this.state.passCheck ? <span>Passwords don't match!</span> : null}
                    <input type="submit" />
                </form> : null }
            </div>
        )
    }
}
