const dropdownSelection = (state = "Animal", action) => {
  switch (action.type) {
    case 'SELECT_DROPDOWN':
      return action.selection;
    default:
      return state
  }
}

export default dropdownSelection
