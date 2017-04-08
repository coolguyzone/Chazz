const firmnessDropdownSelection = (state = "Firmness", action) => {
  switch (action.type) {
    case 'SELECT_FIRMNESS_DROPDOWN':
      return action.selection;
    default:
      return state
  }
}

export default firmnessDropdownSelection
