import { EMPLOYEE_FETCH_DATA } from '../actions/types';

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_DATA:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
