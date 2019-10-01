import React from 'react';
import './App.css';
import ProductMain from './containers/ProductMain'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './Login'

function App() {

  const [user, setUser] = React.useState(null)

  const login = (user) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      setUser(user.user)
     
    })
  }

  const newUser = (user) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      setUser(user.user)
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <div className="App">
  
      {/* <ProductMain /> */}
      <Router>
        {user ? <Redirect to='/home' /> : <Redirect to='/' />}
        <Route path='/' render={(...props) => <Login login={login} user={user} newUser={newUser} /> } />
        <Route path='/home' render={(...props) => <ProductMain user={user} logout={logout}/> } />
      </Router>
    </div>
  );
}

export default App;
