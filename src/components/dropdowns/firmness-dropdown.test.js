import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

import FirmnessDropdown from './firmness-dropdown.js';


const initialState = {key: 'value'};
const store = createStore(initialState);


describe('FirmnessDropdown', () => {

  it('renders', () => {
    const div = document.createElement('div');
    let dropdowns = (
      <div store={store}>
        <FirmnessDropdown />
      </div>
    );
    ReactDOM.render( dropdowns, div);
  });

  // test('snapshots', () => {
  //   let component = renderer.create(
  //     <FirmnessDropdown />
  //   );
  //
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
