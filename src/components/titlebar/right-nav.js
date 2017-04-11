import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = () => (
  <div className="col-md-4" id="right-nav">
    <Link to="/login"><button className="btn">Log In</button></Link>
    <button className="btn">Sign Up</button>
  </div>

);

export default RightNav;
