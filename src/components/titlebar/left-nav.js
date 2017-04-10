import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => (
  <div className="col-md-4" id="left-nav">
    <Link to="/"><button className="btn">Home</button></Link>
    <Link to="/favorites"><button className="btn">Favorites</button></Link>
  </div>
);

export default LeftNav;
