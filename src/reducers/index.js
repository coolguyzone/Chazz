import { combineReducers } from 'redux';
import dropdownSelection from './selection';
import firmnessDropdownSelection from './dropdownfirmnessselection';

const chApp = combineReducers ({

  dropdownSelection,
  firmnessDropdownSelection

})

export default chApp;
