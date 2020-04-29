import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import Header from './bodycomponents/Header'
import Footer from './bodycomponents/Footer'

class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Main />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;