export default (state = null, action) => {
  //console.log(state);
  //return null;
  switch (action.type) {
    case 'SELECT_LIBRARY_ID':
      return action.payload;
    default:
      return state;
  }
};
