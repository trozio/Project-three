import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap';

import '../Layouts/Header.css';

class Header extends Component {

    componentDidMount() {
         if(document.cookie){
             console.log("Logged in");
         }
        else{
             console.log("logged out");
}
    }

    handleSignout = () => {
        fetch("/api/logout")
        .then(res => res.json())
        };

    render () {
       return (

<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="/">Spotlight</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
      <Nav.Link eventKey={1} href="/">Home</Nav.Link>
      <Nav.Link eventKey={2} href="/login" > Login</Nav.Link>
      <Nav.Link eventKey={3} href="/signup" > Signup</Nav.Link>
      <Nav.Link eventKey={5} href="/reviews">Reviews</Nav.Link>
      <Nav.Link eventKey={6} href="/ReviewPage">Create</Nav.Link>
     <Nav.Link eventKey={4} href="/Profile">Profile</Nav.Link>
     <Nav.Link onClick={this.handleSignout} eventKey={7} href="/">Sign Out</Nav.Link>



    </Nav>
  </Navbar.Collapse>
</Navbar>;
</div>



        )

    }

}

export default Header;
