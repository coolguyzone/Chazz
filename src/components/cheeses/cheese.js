import React from 'react';
import CheeseButton from './CheeseButton';

const Cheese = (props) => (
  <div className="col-md-6 cheese">
    <div>{props.cheeseName}</div>
    <img src={require('../../img/cheese-icon.png')} alt="cheese"/>
    <CheeseButton arrayIndex={props.arrayIndex} />
  </div>
)


export default Cheese;
