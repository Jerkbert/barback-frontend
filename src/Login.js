import React, { Component } from 'react'
import './Login.css'

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
            <div className="center">
                <div className="card">
                <h1 className="header">BARBACK</h1>
                    
                    {this.state.login ?
                    <form onSubmit={this.handleLogInSubmit}>
                        <label>USERNAME</label>
                        <input className="form-item" type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                        <label>PASSWORD</label>
                        <input className="form-item" type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        <input className="form-submit" type="submit" value="Submit" /> 
                    </form> : null }
                    {this.state.createNew ? 

                    <form  onSubmit={this.handleNewUserSubmit}>
                        <label>Username</label>
                        <input className="form-item" type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                        <label>Password</label>
                        <input className="form-item" type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        <label>Re-enter Password</label>
                        <input className="form-item" type='password' name='passCheck' value={this.state.passCheck} onChange={this.handleChange}/>
                        {this.state.password !== this.state.passCheck ? <span>Passwords don't match!</span> : null}
                        <input className="form-submit" type="submit" value="Submit" />
                    </form> : null }
                    <button className="login-submit" onClick={this.handleLogInClick}>LOG IN</button>
                    <button className="login-submit" onClick={this.handleNewUserClick}>CREATE NEW USER</button>
                </div>
            </div>
        )
    }
}
