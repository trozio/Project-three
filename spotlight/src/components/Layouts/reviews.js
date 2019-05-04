import React, { Component } from 'react';
import { Card, CardColumns, Form, Button, FormControl } from 'react-bootstrap'

class reviews extends Component {
  state={
    newPost: [],
    author:"",
    rating:"",
    review:"",
    category: ""
  }

  fetchPosts = () => {
      fetch("/api/posts")
      .then(res => res.json())
      .then(newPost => this.setState({newPost}, () => console.log(newPost))

    );
  }

  handleFilter = (event) => {
      event.preventDefault();
      fetch("/api/filter", {
          method: "POST",
          headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          category: this.state.category,
      })
      })
        .then(res => res.json())
        .then(
          (result) => {
            // this.setState({
            //   isLoaded: true,
            //   items: result.items
            // });
            console.log(result);
            this.setState({
                category: ''
            })


          },

          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log(error);
          }
        )
    }


  componentDidMount() {
        this.fetchPosts();
  };

    render () {
        return (
           <div>
          <CardColumns>
  <Card className='mt-5'>
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
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label><h2>Products Categories</h2></Form.Label>
            <Form.Control value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })} as="select">
            <option>Clothes</option>
            <option>Electronics</option>
            <option>Networking</option>
            <option>Software</option>
            <option>Gaming</option>
          </Form.Control>
        </Form.Group>
        <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>

    <Card.Img variant="top" src="assets/Product3.jpg" />
    <Card.Body>
      <Card.Title>Reviews</Card.Title>
      <Card.Text>
        <h2>New Review</h2>
        <ul>
           {this.state.newPost.map( newPost =>
               <div>
           <li key={newPost.id}>{ newPost.author }</li>
           <li key={newPost.id}>{ newPost.rating }</li>
           <li key={newPost.id}>{ newPost.review }</li>
           </ul>
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
          )}

                </div>


  <Card className="mt-5">
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
