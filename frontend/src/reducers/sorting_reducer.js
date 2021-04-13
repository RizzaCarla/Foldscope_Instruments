import { SET_CURRENT_STUDENTS } from '../actions/sorting_students';

const sortingReducer = ( oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SET_CURRENT_STUDENTS:
      return 
    default:
      return oldState
  }
}

export default sortingReducer;