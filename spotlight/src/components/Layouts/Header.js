import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap';

import '../Layouts/Header.css';

class Header extends Component {

    render () {
       return (

    <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Spotlight</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav>
      <Nav.Link eventKey={1} href="/Home">Home</Nav.Link>
      <Nav.Link eventKey={3} href="/login" > Login/Signup</Nav.Link>
      <Nav.Link eventKey={4} href="/reviews">Reviews</Nav.Link>
      <Nav.Link eventKey={2} href="/About">About</Nav.Link>
      <Nav.Link href="/feature">Features</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>;

 {/* <Image src="assets/item.jpg" className="header-image" /> */}
 


    </div>

        )

    }

}

export default Header;