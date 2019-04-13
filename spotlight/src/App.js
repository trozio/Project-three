import React, { Component} from 'react';
import Header from './components/Layouts/Header';
import Footer from "./components/Layouts/Footer";
import Home from "./components/Layouts/Home";
import reviews from "./components/Layouts/reviews";
class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Home/>
      <reviews/>
      <Footer/>

    </div>
    );
  }
}

export default App;