import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Layouts/Header';
import Footer from "./components/Layouts/Footer";
import Home from "./components/Layouts/Home";
import login from "./components/Layouts/login";
import signup from "./components/Layouts/signup";
import Profile from "./components/Layouts/Profile";
import reviews from "./components/Layouts/reviews";
class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={login} />
      <Route path="/signup" component={signup} />
      <Route path="/Profile" component={Profile} />
      <Route path="/reviews" component={reviews} />
      <Footer/>

    </div>
    </Router>
    );
  }
}

export default App;