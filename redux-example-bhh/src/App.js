import React, { Component } from 'react';
import logo from './logo.svg';
import HelloWorld from './components/helloWorld';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
      </div>
    );
  }
}

export default App;
