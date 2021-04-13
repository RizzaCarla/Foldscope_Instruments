import { combineReducers } from 'redux';
import studentReducer from './student_reducer';
import sortingReducer from './sorting_reducer';

const RootReducer = combineReducers({
  studentReducer,
  sortingReducer,
})

export default RootReducer;