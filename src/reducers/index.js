import { combineReducers } from 'redux';
import animalDropdownSelection from './animal-selection';
import firmnessDropdownSelection from './firmness-selection';
import cheeseList from './cheese-list'

const chApp = combineReducers ({

  animalDropdownSelection,
  firmnessDropdownSelection,
  cheeseList

})

export default chApp;
