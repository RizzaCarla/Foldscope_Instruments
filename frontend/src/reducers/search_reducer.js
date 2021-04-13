import { SET_SEARCH_TERM } from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm
    default:
      return oldState
  }
}

export default searchReducer;