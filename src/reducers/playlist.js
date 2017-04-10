const playlist = (state = {uriArray: [], next: 0}, action) => {

  switch (action.type) {
    case 'NEXT_PLAYLIST_FULFILLED':
      if(state.next === 49) {
        return {uriArray: action.payload, next: 0};
      }
      return {uriArray: action.payload, next: state.next + 1};
    case 'NEXT_PLAYLIST':
      if(state.next === 49) {
        return {...state, next: 0};
      }
      return {...state, next: state.next +1};
    default:
      return state;
  }
};

export default playlist;
