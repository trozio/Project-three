import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Jumbotron, Grid, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Layouts/Header.css';
export default class Header extends Component {
    render () {
       return (
    <div>
<Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>

                    <Link to="/">Spotlight-Reviews</Link>
                </Navbar.Brand>
                <Navbar. Toggle  />
            </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1}  onClick={this.goTo.bind(this, 'home')}>
            login/signup
            </NavItem>
            <NavItem eventKey={1}  onClick={this.goTo.bind(this, 'home')}>
                Home
            </NavItem>
            <NavItem eventKey={2} onClick={this.goTo.bind(this, 'About')} >
                About
            </NavItem>
            <NavItem eventKey={2} onClick={this.goTo.bind(this, 'reviews')} >
                reviews
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Spotlight reviews !!!</h2>
                    <p className="info-small">This Application that will give all reviews necessary for the product you choose also give the access to add reviews </p>
                </Jumbotron>
                <div>
                <Carousel>
                    <Carousel.Item>
                             <img className="d-block w-100" src="../assets/Products1.jpg=First slide&bg=373940" alt="First slide"/>
                        <Carousel.Caption>
                             <h3>Reviews help decide</h3>
                             <p>What's up</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                             <img className="d-block w-100" src="../assets/Product2.jpg" alt="Second slide"/>
                        <Carousel.Caption>
                            <h3>Help yourself </h3>
                            <p>Help yourself get the best of your money</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block w-100" src="../assets/Product3.jpg" alt="Third slide"/>
                        <Carousel.Caption>
                            <h3>Don't you believe in saving</h3>
                            <p>Be smart and save money and headacke</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
                </div>
            </Grid>
    </div>
        )
    }
}
