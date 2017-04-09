const playlist = (state = [], action) => {

  switch (action.type) {
    case 'RANDOM_PLAYLIST_FULFILLED':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default playlist;
