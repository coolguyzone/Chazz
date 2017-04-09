import { combineReducers } from 'redux';
import animalDropdownSelection from './animal-selection';
import firmnessDropdownSelection from './firmness-selection';
import playlist from './playlist';

const chApp = combineReducers ({

  animalDropdownSelection,
  firmnessDropdownSelection,
  playlist

});

export default chApp;
