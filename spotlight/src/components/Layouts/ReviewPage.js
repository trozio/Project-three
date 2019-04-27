import React, { Component, Rating } from 'react';
import { Form, Button } from 'react-bootstrap';
class ReviewPage extends Component {
    state = {
        author: '',
        rating: '',
        category: '',
        review: ''
    }

handleSubmit = (event) => {
  event.preventDefault();
  fetch("/api/posts", {
      method: "POST",
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      author: this.state.author,
      rating: this.state.rating,
      category: this.state.category,
      review: this.state.review
  })
  })
    .then(res => res.json())
    .then(
      (result) => {
        // this.setState({
        //   isLoaded: true,
        //   items: result.items
        // });
        this.setState({
            author: '',
            rating: '',
            category: '',
            review: ''
        })
        console.log(result);
        alert("Review submitted!")

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
        console.log(error);
      }
    )
}

    render() {
        return (
            <div className="container">
            <div className= "jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
            <Form className="signup-form">
              <h2 className="text-center">Post your review</h2>

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
      <Button onClick={this.handleSubmit} variant="primary" type="submit">
    Submit
  </Button>
      </div>
        </div>
        </div>
        );
    }
}
export default ReviewPage;
