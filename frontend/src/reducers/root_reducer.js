import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import studentReducer from './student_reducer';
import sortingReducer from './sorting_reducer';

const RootReducer = combineReducers({
  searchReducer,
  studentReducer,
  sortingReducer,
})

export default RootReducer;