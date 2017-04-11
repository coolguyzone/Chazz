import { combineReducers } from 'redux';
import animalDropdownSelection from './animal-selection';
import firmnessDropdownSelection from './firmness-selection';
import playlist from './playlist';
import cheeseList from './cheese-list';
import removedCheeses from './removed-cheeses';
import { reducer as formReducer } from 'redux-form';


const chApp = combineReducers ({

  animalDropdownSelection,
  firmnessDropdownSelection,
  playlist,
  cheeseList,
  removedCheeses,
  form: formReducer


});

export default chApp;
