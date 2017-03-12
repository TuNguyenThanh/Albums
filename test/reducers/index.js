import { combineReducers } from 'redux';
import LibraryData from './LibraryData';
import SelectionLibrary from './SelectionLibrary';
import ChangeTheme from './ChangeTheme';

export default combineReducers({
  Librarys: LibraryData,
  Selected: SelectionLibrary,
  Theme: ChangeTheme
});
