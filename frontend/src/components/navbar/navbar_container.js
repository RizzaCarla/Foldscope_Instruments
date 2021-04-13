import {connect} from 'react-redux';
import Navbar from './navbar';
import { fetchStudent, fetchStudents } from '../../actions/student_actions';
import { setCurrentStudents } from '../../actions/sorting_students';
import { setSearchTerm } from '../../actions/search_actions';

const msp = state => ({
  student: state.studentReducer,
  students: state.studentReducer,
  searchTerm: state.searchReducer,
})

const mdp = dispatch => ({
  fetchStudent: () => dispatch(fetchStudent()),
  fetchStudents: () => dispatch(fetchStudents()),
  setCurrentStudents: (currentStudents) => dispatch(setCurrentStudents(currentStudents)),
  setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
})

export default connect(msp, mdp)(Navbar);