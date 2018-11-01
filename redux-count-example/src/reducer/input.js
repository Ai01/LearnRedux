const reducer = (state = { field: 'No data', isWaiting: false }, action) => {
  switch (action.type) {
    case 'STARTED_UPDATING':
      return { ...state, isWaiting: true };
    case 'UPDATED':
      return { ...state, isWaiting: false, field: action.payload };
    default:
      return state;
  }
};

export default reducer;
