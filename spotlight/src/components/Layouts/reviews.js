import React, { Component } from 'react';
import { Card, CardColumns, Form, FormControl, Button } from 'react-bootstrap'

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
      this.setState({
          newPost: []
      });
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
                category: '',
                newPost: result
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

  <Form.Label><h2>Search/Filter</h2></Form.Label>
          <Form.Control value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })} as="select">
          <option>Clothes</option>
          <option>Electronics</option>
          <option>Networking</option>
          <option>Software</option>
          <option>Gaming</option>
        </Form.Control>

      <Form inline>
  <Button onClick={this.handleFilter} type="submit">Submit</Button>
  </Form>

<div>
 {this.state.newPost.map( newPost =>
     <Card className='mt-5'>
       <Card.Img variant="top" src="assets/Product3.jpg" />
       <Card.Body>
         <Card.Title>Reviews</Card.Title>
         <h2>{ newPost.name }</h2>

           <p key={newPost.id}>Author: { newPost.author }</p>
           <p key={newPost.id}>Rating: { newPost.rating }</p>
           <p key={newPost.id}>{ newPost.review }</p>

       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
          )}

                </div>
</CardColumns>
     </div>
        )
    }
}
export default reviews;
