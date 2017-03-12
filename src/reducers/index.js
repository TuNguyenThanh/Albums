import { combineReducers } from 'redux';
import Libraries from './LibraryReducer';
import SelectionReducers from './SelectionReducers';

export default combineReducers({
  libraries: Libraries,
  SelectionLibraryId: SelectionReducers,
});
