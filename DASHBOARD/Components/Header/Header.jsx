import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
 
import {AuthContext} from './../auth-context.jsx';
import Button from 'react-bootstrap/Button';

function Header() {
  const auth = useContext(AuthContext); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand">Admin Dashboard</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {auth.isLoggedIn && (
            <li class="nav-item">
              <NavLink to="/" exact="true" className='nav-link'>Dashboard</NavLink>
            </li>
          )}
          {auth.isLoggedIn && (
            <li class="nav-item">
              <NavLink to="/table"  className='nav-link' >Table</NavLink>
            </li>
          )}
          {auth.isLoggedIn && (
            <li className="nav-item">
              <NavLink to="/setting" className='nav-link' >Settings</NavLink>
            </li>
          )}

          {auth.isLoggedIn && (
            <li>
              <Button variant="outline-danger" onClick={auth.logout}>LOGOUT</Button>
            </li>
          )}

          {!auth.isLoggedIn && (
            <li className="nav-item">
              <NavLink to="/signup" className='nav-link' >Sign Up</NavLink>
            </li>
          )}
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header