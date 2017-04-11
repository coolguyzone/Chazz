import firmnessDropdownSelection from './firmness-selection';


describe('Firmness Selection reducer', () => {

  it('should handle SELECT_FIRMNESS_DROPDOWN', () => {

    const selection = "Hard";

    expect(
      firmnessDropdownSelection(undefined, {
        type: 'SELECT_FIRMNESS_DROPDOWN',
        selection
      })
    ).toEqual('Hard');
  });

  it('should handle SELECT_FIRMNESS_DROPDOWN', () => {

    const selection = "Semi-Hard";

    expect(
      firmnessDropdownSelection(undefined, {
        type: 'SELECT_FIRMNESS_DROPDOWN',
        selection
      })
    ).toEqual('Semi-Hard');
  });

  it('should handle SELECT_FIRMNESS_DROPDOWN', () => {

    const selection = "Semi-Soft";

    expect(
      firmnessDropdownSelection(undefined, {
        type: 'SELECT_FIRMNESS_DROPDOWN',
        selection
      })
    ).toEqual('Semi-Soft');
  });

  it('should handle SELECT_FIRMNESS_DROPDOWN', () => {

    const selection = "Soft";

    expect(
      firmnessDropdownSelection(undefined, {
        type: 'SELECT_FIRMNESS_DROPDOWN',
        selection
      })
    ).toEqual('Soft');
  });

});
