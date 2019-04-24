import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';
import { Card, CardColumns, Button, Form, FormControl } from 'react-bootstrap'

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
      .then(newPost => this.setState({newPost}, () => console.log('newPost fetched', newPost))

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

  <Card>
  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
    <Card.Img variant="top" src="assets/Product3.jpg" />
    <Card.Body>
      <Card.Title>Reviews</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
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
