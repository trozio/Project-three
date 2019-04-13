import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Home extends Component {
    render () {
        return (
            <div>
            <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="/assets/Products1.jpg"
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
         src="/assets/Product2.jpg"
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
         src="/assets/Product3.jpg"
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>;
  
            </div>
        )
    }
}
export default Home;