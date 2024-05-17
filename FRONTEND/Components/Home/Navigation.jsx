import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Nav>
      <NavLink to="/home" exact={true} className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/features" className="nav-link">Features</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
    </Nav>
  );
}

export default Navigation;
