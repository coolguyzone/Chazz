import React from 'react';
import ReactDOM from 'react-dom';
import RightNav from './right-nav';
import LeftNav from './left-nav';


const Header = () => (
  <div className="navbar">
    <div className="row">
      <LeftNav />
      <div className="navbar-header col-md-4">
        <h1>🌕🎷 CHAZZ 🎷🌕</h1>
      </div>
      <RightNav />
    </div>
  </div>
);

export default Header;
