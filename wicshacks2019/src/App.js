import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Checkout></Checkout>
        </header>
      </div>
    );
  }
}

export default App;
