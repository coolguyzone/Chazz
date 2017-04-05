import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Dropdown from './components/dropdown';
import CheesesPlayerRow from './components/cheeses-player-row';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Dropdown />
          <CheesesPlayerRow />
        </div>
      </div>
    );
  }
}

export default App;
