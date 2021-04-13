import {connect} from 'react-redux';
import Navbar from './navbar';
import { fetchStudent, fetchStudents } from '../../actions/student_actions';
import { setCurrentStudents } from '../../actions/sorting_students';

const msp = state => ({
  student: state.studentReducer,
  students: state.studentReducer,
})

const mdp = dispatch => ({
  fetchStudent: () => dispatch(fetchStudent()),
  fetchStudents: () => dispatch(fetchStudents()),
  setCurrentStudents: (currentStudents) => dispatch(setCurrentStudents(currentStudents)),
})

export default connect(msp, mdp)(Navbar);