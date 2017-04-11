import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import FirmnessDropdown from './firmness-dropdown.js';


describe('FirmnessDropdown', () => {

  it('renders', () => {
    const div = document.createElement('div');
    let dropdowns = <FirmnessDropdown />
    ReactDOM.render( dropdowns, div);
  });

  test('snapshots', () => {
    let component = renderer.create(
      <FirmnessDropdown />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
