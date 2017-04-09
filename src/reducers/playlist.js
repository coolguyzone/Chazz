const playlist = (state = 'uri', action) => {
  switch (action.type) {
    case 'PLAYLIST_FULFILLED':
      return action.uri;
    default:
      return state;
  }
};

export default playlist;
