import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
//bg="light" variant="light"
const Header = () => {
return(
<Navbar className="header-bar" collapseOnSelect expand="lg" variant="dark">
  <Container  >
    <NavDropdown.Divider /> 
    <Navbar.Brand className="logo-name" href="/home">Hello Natural Beauty</Navbar.Brand>  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Quiz" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/quiz">Take the hair quiz</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/product">HAIR CARE</NavDropdown.Item>
        <NavDropdown.Divider /> 
        <NavDropdown.Item href="/product">the starter set</NavDropdown.Item>
        <NavDropdown.Item href="/product">shampoo + conditioner</NavDropdown.Item>
        <NavDropdown.Item href="/product">purple shampoo</NavDropdown.Item>
        <NavDropdown.Item href="/product">leave-in</NavDropdown.Item>
        <NavDropdown.Item href="/product">hair mask</NavDropdown.Item>
        <NavDropdown.Item href="/product">hair serum</NavDropdown.Item>
        <NavDropdown.Item href="/product">hair mist</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Reviews" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">reviews</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">skin testimonials</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">our story</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">our standards</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">ingredients</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">blog</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">faq</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Account</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
 </Navbar.Collapse>


  </Container> 
 
</Navbar>

)
}

export default Header;