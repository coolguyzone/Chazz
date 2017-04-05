import React from 'react';
import Dropdown from './dropdown';

const Dropdowns = (props) => (
  <div className="row" id="dropdowns">
    <p>Please Specify Your Preferred Animal And Firmness To Get Cheese Recommendations While You Enjoy Jazz</p>
    <Dropdown title='Animal'option1='Cow' option2='Goat' option3='Sheep' option4='Buffalo' />
    <Dropdown title='Firmness' option1='Hard' option2='Semi-Hard' option3='Semi-Soft' option4='Soft'/>
  </div>
);

export default Dropdowns;
