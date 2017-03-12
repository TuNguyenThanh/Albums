import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import EmployeeFormReducers from './EmployeeFormReducers';
import EmployeeListReducers from './EmployeeListReducers';

export default combineReducers({
  Auth: AuthReducers,
  EmployeeForm: EmployeeFormReducers,
  EmployeeList: EmployeeListReducers,
});
