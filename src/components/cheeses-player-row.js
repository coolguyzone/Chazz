import React from 'react';
import Cheeses from './cheeses';
import Player from './player';

const CheesesPlayerRow = () => (
  <div className="row" id="cheeses-player-row">
    <Cheeses />
    <Player />
  </div>
);

export default CheesesPlayerRow;
