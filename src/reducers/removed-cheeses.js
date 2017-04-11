const removedCheeses = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_CHEESE_FROM_STATE':
      return [...state, action.removedCheese];
    default:
      return state
  }
}

export default removedCheeses
