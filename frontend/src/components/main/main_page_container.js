import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchStudent, fetchStudents } from '../../actions/student_actions';

const msp = state => ({
  student: state.studentReducer,
  students: state.sortingReducer,
})

const mdp = dispatch => ({
  fetchStudent: () => dispatch(fetchStudent()),
  fetchStudents: () => dispatch(fetchStudents()),
})

export default connect(msp, mdp)(MainPage);