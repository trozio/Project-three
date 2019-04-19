import React, { Component } from 'react'
import { button, Form, FormGroup, label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';


class signup extends Component {
  render () {
      return (
        <div className="container">
        <div className= "jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
        <Form className="signup-form">
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
             <label>Name</label> 
             <Input type="text" placeholder="Name"/>
          </FormGroup>
          <FormGroup>
             <label>Email</label> 
             <Input type="email" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
             <label>Password</label> 
             <Input type="password" placeholder="Password"/>
          </FormGroup>
          <button className="btn-lg btn-dark btn-block">Log in</button>
          <div className="text-center pt-3">Or Continue with your social account</div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/login">login</a>
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
export default signup;