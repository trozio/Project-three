import React, { Component } from 'react'
import { button, Form, FormGroup, label, Input, Label, FormFeedback, FormText} from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import {Redirect} from "react-router-dom";


class signup extends Component {

    state ={
        name: '',
      email: '',
      password:'',
      nValidateTrue: false,
      nValidateFalse: true,
      eValidateTrue: false,
      eValidateFalse: true,
      pValidateTrue: false,
      pValidateFalse: true,
      redirect: false
    }

    handleChange = (event) => {
         this.setState({
             name: event.target.name,
             email: event.target.email,
             password: event.target.password,
         });
    }

    handleSignup = (event) => {
      event.preventDefault();
      if(this.state.nValidateTrue === true && this.state.eValidateTrue === true && this.state.pValidateTrue === true ){
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.password);
      fetch("/api/users", {
          method: "POST",
          headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          password: this.state.password,
          email: this.state.email
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
                    redirect: true
                });

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
            alert("Incorrect login");
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
        <Form className="signup-form">
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
          <Label for="email">Email</Label>
          <Input valid= {this.state.nValidateTrue} invalid={this.state.nValidateFalse} value={this.state.name} onChange={(event) => this.setState({ name: event.target.value, nValidateTrue: true, nValidateFalse: false })} type="name" placeholder="Name"/>
          <FormFeedback tooltip>You cannot leave this field blank</FormFeedback>
          </FormGroup>
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
          <button onClick={this.handleSignup} className="btn-lg btn-dark btn-block">Sign up</button>
          <div className="text-center pt-3">Or Continue with your social account</div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/login">login</a>
            <span className="p-2">|</span>
            <a href="/login">Forgot Password</a>
          </div>
        </Form>
        </div>
        </div>
        </div>
      );
  }
}
export default signup;
