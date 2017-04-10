import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/titlebar/header';
import Dropdowns from './components/dropdowns/dropdowns';
import CheesesPlayerRow from './components/cheeses-player-row';
import Cheeses from './components/cheeses/cheeses';
import Player from './components/player';
import FavoritesMain from './components/favorites-view/FavoritesMain'
import FavoritesTop from './components/favorites-view/FavoritesTop'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>

          <div className="container">
            <Route exact path ="/" component={Dropdowns} />
            <Route path ="/favorites" component={FavoritesTop} />
            <div className="row" id="cheeses-player-row">

              <Route exact path ="/" component={Cheeses} />


              <Route path ="/favorites" component={FavoritesMain} />
              <Route path ="/" component={Player} />

              {/* <Route path ="/favorites" component={Player} /> */}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
