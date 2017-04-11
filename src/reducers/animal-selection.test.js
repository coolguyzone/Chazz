import animalDropdownSelection from './animal-selection.js';

describe('Animal Selection reducer', () => {

  it('should handle SELECT_ANIMAL_DROPDOWN', () => {

    const selection = "Cow";

    expect(
      animalDropdownSelection(undefined, {
        type: 'SELECT_ANIMAL_DROPDOWN',
        selection
      })
    ).toEqual('Cow');
  });

  it('should handle SELECT_ANIMAL_DROPDOWN', () => {

    const selection = "Goat";

    expect(
      animalDropdownSelection(undefined, {
        type: 'SELECT_ANIMAL_DROPDOWN',
        selection
      })
    ).toEqual('Goat');
  });

  it('should handle SELECT_ANIMAL_DROPDOWN', () => {

    const selection = "Sheep";

    expect(
      animalDropdownSelection(undefined, {
        type: 'SELECT_ANIMAL_DROPDOWN',
        selection
      })
    ).toEqual('Sheep');
  });

  it('should handle SELECT_ANIMAL_DROPDOWN', () => {

    const selection = "Buffalo";

    expect(
      animalDropdownSelection(undefined, {
        type: 'SELECT_ANIMAL_DROPDOWN',
        selection
      })
    ).toEqual('Buffalo');
  });

});
