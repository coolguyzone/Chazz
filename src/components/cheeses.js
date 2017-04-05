import React from 'react';
import Cheese from './cheese';

const Cheeses = () => (
  <div className="col-md-8" id="cheeses">
  <div className="row">
    <Cheese /><Cheese />
  </div>
  <div className="row"></div>
    <Cheese /><Cheese />
  </div>
);

export default Cheeses;
