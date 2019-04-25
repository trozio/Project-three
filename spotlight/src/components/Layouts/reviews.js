import React, { Component } from 'react';
import {Rating} from 'belle';
// import { Carousel } from 'react-bootstrap';
import { Card, CardColumns, Button, Form, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'

class reviews extends Component {
  state={
    newPost: [],
    author:"",
    rating:"",
    review:""
  }

  fetchPosts = () => {
      fetch("/api/posts")
      .then(res => res.json())
      .then(newPost => this.setState({newPost}, () => console.log(newPost))

    );
  }

  componentDidMount() {
        this.fetchPosts();
  }

    render () {
        return (
           <div>
          <CardColumns>
  <Card>
  <Card.Body>
      <Card.Title>Advertising</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>

  </Card>

  <Card className='mt-5'>
  {/* <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>

  </Form> */}
  <DropdownButton id="dropdown-basic-button" title="Search">
  <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Electronic</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
</DropdownButton>
    <Card.Img variant="top" src="assets/Product3.jpg" />
    <Card.Body>
      <Card.Title>Reviews</Card.Title>
      <Card.Text>
        <h2>New Review</h2>
        <Rating defaultValue={3}></Rating>
        <ul>
           {this.state.newPost.map( newPost =>
           <li key={newPost.id}>{ newPost.author }</li>
           <li key={newPost.id}>{ newPost.rating }</li>
           <li key={newPost.id}>{ newPost.review }</li>
          )}
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card className="text-center">
    <Card.Body>
      <Card.Title>Advertising</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
     </div>
        )
    }
}
export default reviews;
