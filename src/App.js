import React, { Component } from 'react';
import './App.css';
import Header from './components/titlebar/header';
import Dropdowns from './components/dropdowns/dropdowns';
import Cheeses from './components/cheeses/cheeses';
import Player from './components/player';
import TastedMain from './components/tasted-view/TastedMain'
import TastedTop from './components/tasted-view/TastedTop'
import LoginForm from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="container">
            <Route exact path="/" component={Dropdowns} />
            <Route path="/tasted" component={TastedTop} />
            <Route path="/login" component={LoginForm} />
            <div className="row" id="cheeses-player-row">

              <Route exact path="/" component={Cheeses} />
              <Route path="/login" component={Cheeses} />

              <Route path="/tasted" component={TastedMain} />
              <Route path="/" component={Player} />

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
