const helloReducer = (state = { message: 'hello' }, action) => {
  const { type, message } = action;
  switch (type) {
    case 'hello':
      return Object.assign({}, state, { message });
    default:
      return state;
  }
}

export default helloReducer;