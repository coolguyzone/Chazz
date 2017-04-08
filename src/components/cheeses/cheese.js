import React from 'react';
import CheeseButton from './CheeseButton';

const Cheese = () => (
  <div className="col-md-6 cheese">
    <div>Cheese Name</div>
    <img src={require('../../img/cheese-icon.png')} alt="cheese"/>
    <CheeseButton />
  </div>
)

export default Cheese;
