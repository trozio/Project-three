import React, { Component, Rating } from 'react';
import { Form } from 'react-bootstrap';
class ReviewPage extends Component {
    render() {
        return (
            <div className="container">
            <div className= "jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
            <Form className="signup-form">
              <h2 className="text-center">Welcome, Input Your Reviews</h2>
            
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="John Doe" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Products Categories</Form.Label>
            <Form.Control as="select">
            <option>Clothes</option>
            <option>Electronics</option>
            <option>Networking</option>
            <option>Software</option>
            <option>Gaming</option>
          </Form.Control>
        </Form.Group>
        {/* <Rating
 stop={6}
 emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
   'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
   'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
 fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
   'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
   'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
/> */}
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      </div>
        </div>
        </div>
        );
    }
}
export default ReviewPage;