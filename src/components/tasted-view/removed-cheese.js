import React from 'react';

const RemovedCheese = (props) => (
  <div className="col-md-3 removed-cheese">
    <div>{props.cheeseName}</div>
    <img
      src={require('../../img/cheese-icon.png')}
      alt="removed-cheese"
    />
  </div>
);

export default RemovedCheese;
