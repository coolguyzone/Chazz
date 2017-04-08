import { combineReducers } from 'redux';
import animalDropdownSelection from './animal-selection';
import firmnessDropdownSelection from './firmness-selection';

const chApp = combineReducers ({

  animalDropdownSelection,
  firmnessDropdownSelection

})

export default chApp;
