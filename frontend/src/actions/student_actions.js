import * as studentAPIUtil from '../util/student_api_util';

export const RECEIVE_STUDENT = 'RECEIVE_STUDENT';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student
})

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
})

export const fetchStudent = () => dispatch => (
  studentAPIUtil.fetchStudent()
    .then((student) => dispatch(receiveStudent(student)))
)

export const fetchStudents = () => dispatch => (
  studentAPIUtil.fetchStudents()
    .then((students) => dispatch(receiveStudents(students)))
)