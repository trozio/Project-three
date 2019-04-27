import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap'

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
<div>
 {this.state.newPost.map( newPost =>
     <Card className='mt-5'>
       <Card.Img variant="top" src="assets/Product3.jpg" />
       <Card.Body>
         <Card.Title>Reviews</Card.Title>
         <h2>{ newPost.name }</h2>
           <ul>
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
