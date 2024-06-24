import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Modal from './RegisterModal';
import Navigation from './Navigation';
import { AuthContext } from '../auth-context';
import Signup from '../Signup/signup';
import Login from '../Login/login';

function BasicExample() {
  const auth = useContext(AuthContext);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ResortHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navigation />
          </Nav>
          <Nav>
            {auth.isLoggedIn && (
              <Modal />
            )}

            {!auth.isLoggedIn && ( 
              <Signup />
            )}
            {!auth.isLoggedIn && ( 
              <Login />
            )}

            {auth.isLoggedIn && (
              <Button variant="primary" onClick={auth.logout}>
                Log out
              </Button>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;