const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state };
    case 'MOVIES_RECEIVED':
      return { ...state, movies: action.moviesArray }
    default:
      return state;
  }
};

export default reducer;
