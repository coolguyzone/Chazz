import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Dropdowns from './dropdowns.js';


it('Dropdowns', () => {
  const tree = renderer.create(
    <Dropdowns />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('Dropdowns', () => {
//   it('renders', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Dropdowns />, div);
//   });
//
//   test('snapshots', () => {
//     let component = renderer.create(
//       <Dropdowns />
//     );
//
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
