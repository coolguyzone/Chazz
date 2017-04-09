import { combineReducers } from 'redux';
import animalDropdownSelection from './animal-selection';
import firmnessDropdownSelection from './firmness-selection';
import playlist from './playlist';
import cheeseList from './cheese-list'


const chApp = combineReducers ({

  animalDropdownSelection,
  firmnessDropdownSelection,
  playlist,
  cheeseList


});

export default chApp;
