export default (state = null, action) => {
  //console.log(action.type);
  switch (action.type) {
    case 'selected_id':
      return action.payload;
    default:
      return state;
  }
};
