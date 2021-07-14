const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state };
    case 'MOVIES_RECEIVED':
      return { ...state, MOVIES: action.json }
    default:
      return state;
  }
};

export default reducer;
