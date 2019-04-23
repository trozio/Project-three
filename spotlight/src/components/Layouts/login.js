import React, { Component } from 'react'
import { button, Form, FormGroup, label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';


class login extends Component {
 state ={
   email: '',
   password:''
 }

 handleChange = (event) => {
      this.setState({
          email: event.target.email,
          password: event.target.value
      });
 }

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    fetch("/api/password", {
        method: "POST",
        headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: this.state.email,
        password: this.state.password
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

  render () {
      return (
        <div className="container">
        <div className= "jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
        <Form className="login-form">
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
             <label>Email</label>
             <Input value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} type="email" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
             <label>Password</label>
             <Input value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} type="password" placeholder="Password"/>
          </FormGroup>
          <button onClick={this.handleLogin} className="btn-lg btn-dark btn-block">Log in</button>
          <div className="text-center pt-3">Or Continue with your social account</div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/forget-password">Forgot Password</a>
          </div>
        </Form>
        </div>
        </div>
        </div>
      );
  }
}
export default login;
