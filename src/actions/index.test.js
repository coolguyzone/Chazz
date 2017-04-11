import * as actions from './index.js';


describe('Playlist Tests', () => {

  it('should create an action for next playlist', () => {
    const expectedAction = {
      type: 'NEXT_PLAYLIST'
    };
    expect(actions.nextPlaylist()).toEqual(expectedAction);
  });

});


describe('Dropdown Selection Tests', () => {

  it('should create an action for animal selection', () => {
    const selection = 'Cow';
    const expectedAction = {
      type: 'SELECT_ANIMAL_DROPDOWN',
      selection
    };
    expect(actions.selectAnimalDropdown(selection)).toEqual(expectedAction);
  });

  it('should create an action for firmness selection', () => {
    const selection = 'Hard';
    const expectedAction = {
      type: 'SELECT_FIRMNESS_DROPDOWN',
      selection
    };
    expect(actions.selectFirmnessDropdown(selection)).toEqual(expectedAction);
  });

});
