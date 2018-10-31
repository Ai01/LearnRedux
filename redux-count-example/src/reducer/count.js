const helloReducer = (state = { number: 0 }, action) => {
  const { type } = action;
  switch (type) {
    case 'add':
      return Object.assign({}, state, { number: state.number + 1 });
    case 'subtraction':
      return Object.assign({}, state, { number: state.number - 1 });
    default:
      return state;
  }
}

export default helloReducer;
