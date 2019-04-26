import React, { Component, Rating } from 'react';
import { Form, Button } from 'react-bootstrap';
class ReviewPage extends Component {
    state = {
        author: '',
        rating: '',
        category: '',
        review: ''
    }
    render() {
        return (
            <div className="container">
            <div className= "jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
            <Form className="signup-form">
              <h2 className="text-center">Welcome, Input Your Reviews</h2>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Author</Form.Label>
    <Form.Control value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} type="text" placeholder="John Doe" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Rating</Form.Label>
            <Form.Control value={this.state.rating} onChange={(event) => this.setState({ rating: event.target.value })} as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Products Categories</Form.Label>
            <Form.Control value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })} as="select">
            <option>Clothes</option>
            <option>Electronics</option>
            <option>Networking</option>
            <option>Software</option>
            <option>Gaming</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review</Form.Label>
          <Form.Control value={this.state.review} onChange={(event) => this.setState({ review: event.target.value })} as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
    Submit
  </Button>
      </div>
        </div>
        </div>
        );
    }
}
export default ReviewPage;
