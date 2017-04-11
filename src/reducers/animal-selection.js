const animalDropdownSelection = (state = 'Animal', action) => {
  switch (action.type) {
    case 'SELECT_ANIMAL_DROPDOWN':
      return action.selection;
    default:
      return state;
  }
};

export default animalDropdownSelection;
