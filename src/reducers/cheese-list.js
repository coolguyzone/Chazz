const cheeseList = (state = [], action) => {
  switch (action.type) {
    case 'DO_FIRMNESS_CHEESE_SEARCH_FULFILLED':
      return action.payload;
    case 'DO_ANIMAL_CHEESE_SEARCH_FULFILLED':
      return action.payload;
    case 'REMOVE_CHEESE_FROM_STATE':
      return action.payload;
    default:
      return state;
  }
};

export default cheeseList;
