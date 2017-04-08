export const selectDropdown = (selection) => {
  return {
    type: 'SELECT_DROPDOWN',
    selection
  }
}

export const selectFirmnessDropdown = (selection) => {
  return {
    type: 'SELECT_FIRMNESS_DROPDOWN',
    selection
  }
}
