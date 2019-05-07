import React, { Component } from 'react';
import { Carousel, Row, Col, Image } from 'react-bootstrap';


class Home extends Component {
    render () {
        return (
            <div>
            <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="/assets/Product2.jpg"
         alt="First slide"
       />

       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="/assets/products--large.png"
         alt="Second slide"
       />

       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="/assets/Product4.jpg"
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>;

    <Row className="show-grid text-center">
          <Col xs={6} sm={4} className="person-wrapper">
            <Image src="assets/chopping.png" roundedCircle className="profile-pic"/>
            <h3>Hours Of Research</h3>
            <p>We call the experts, fact check and research so you don't have to.</p>
          </Col>
          <Col xs={6} sm={4} className="person-wrapper">
            <Image src="assets/chopping2.jpg" roundedCircle className="profile-pic"/>
            <h3>Hands-On Testing</h3>
            <p>We try, test, and even taste to ensure products and services meet our high standards..</p>
          </Col>
          <Col xs={6} sm={4} className="person-wrapper">
            <Image src="assets/chopping3.jpg" roundedCircle className="profile-pic"/>
            <h3>Comprehensive Reviews</h3>
            <p>One size rarely fits all. We help you find the best for your lifestyle..</p>
          </Col>
        </Row>

            </div>
        )
    }
}
export default Home;
