import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';


const Header = () => (
  <div className="navbar">
    <div className="row">
      <div className="navbar-header col-md-8">
        <h1>CHAZZ</h1>
      </div>
      <Nav />
    </div>
  </div>
);

export default Header;
