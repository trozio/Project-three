import React, { Component } from 'react'
import { button, Form, FormGroup, label, Input, FormFeedback, Label} from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import {Redirect} from "react-router-dom";


class login extends Component {
 state ={
   email: '',
   password:'',
   eValidateTrue: false,
   eValidateFalse: true,
   pValidateTrue: false,
   pValidateFalse: true,
   redirect: false
 }

 handleChange = (event) => {
      this.setState({
          email: event.target.email,
          password: event.target.value
      });
 }

  handleLogin = (event) => {
      event.preventDefault();
      if(this.state.eValidateTrue === true && this.state.pValidateTrue === true){
    fetch("/api/password", {
        method: "POST",
        headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: this.state.email,
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
          if(result){
              console.log(result);
              this.setState({
                  email: '',
                  password: '',
                  redirect: true
              })

          }
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
}

  render () {
      if(this.state.redirect){
          return <Redirect to="/reviews" />;
      }

      return (
        <div className="container">
        <div className= "jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
        <Form className="login-form">
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
          <Label for="email">Email</Label>
          <Input valid= {this.state.eValidateTrue} invalid={this.state.eValidateFalse} value={this.state.email} onChange={(event) => this.setState({ email: event.target.value, eValidateTrue: true, eValidateFalse: false })} type="email" placeholder="Email"/>
          <FormFeedback tooltip>You cannot leave this field blank</FormFeedback>
          </FormGroup>
          <FormGroup>
          <Label for="password">Password</Label>
          <Input valid= {this.state.pValidateTrue} invalid={this.state.pValidateFalse} value={this.state.password} onChange={(event) => this.setState({ password: event.target.value, pValidateTrue: true, pValidateFalse: false })} type="password" placeholder="Password"/>
          <FormFeedback tooltip>You cannot leave this field blank</FormFeedback>
          </FormGroup>
          <button onClick={this.handleLogin} href="/" className="btn-lg btn-dark btn-block">Log in</button>
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
