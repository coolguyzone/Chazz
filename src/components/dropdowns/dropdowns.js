import React from 'react';
import AnimalDropdown from './animal-dropdown';
import FirmnessDropdown from './firmness-dropdown';

const Dropdowns = (props) => (
  <div className="row" id="dropdowns">
    <p>Please Specify Your Preferred Animal And Firmness To Get Cheese Recommendations While You Enjoy Jazz</p>
    <AnimalDropdown title='Animal'option1='Cow' option2='Goat' option3='Sheep' option4='Buffalo' />
    <FirmnessDropdown title='Firmness' option1='Hard' option2='Semi-Hard' option3='Semi-Soft' option4='Soft'/>
  </div>
);

export default Dropdowns;
