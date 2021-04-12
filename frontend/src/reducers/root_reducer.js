import { combineReducers } from 'redux';
import studentReducer from './student_reducer';

const RootReducer = combineReducers({
  studentReducer,
})

export default RootReducer;