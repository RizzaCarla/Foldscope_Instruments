import { 
  RECEIVE_STUDENT,
  RECEIVE_STUDENTS 
} from '../actions/student_actions';

let student = {
  name: "",
  email: "",
  address: "",
  birthday: "",
  photo: "",
}

const studentReducer = ( oldState = student, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_STUDENT:
      return action.student.data.results
    case RECEIVE_STUDENTS:
      action.students.data.results.forEach((currentStudent) => {
        let location = currentStudent.location
        let months = {
          "01": "Jan",
          "02": "Feb",
          "03": "Mar",
          "04": "Apr",
          "05": "May",
          "06": "Jun",
          "07": "Jul",
          "08": "Aug",
          "09": "Sep",
          "10": "Oct",
          "11": "Nov",
          "12": "Dec"
        }
        let origDate = currentStudent.dob.date.split("T")[0].split("-")
        student.name = currentStudent.name.first + " " + currentStudent.name.last
        student.email = currentStudent.email
        student.address = location.street.number.toString() + " " + location.street.name + ", " + location.city + ", " + location.state + " " + location.postcode + ", " + location.country
        student.birthday = months.origDate[1] + " " + origDate[2] + ", " + origDate[0] + ` (Age: ${currentStudent.dob.age})`
        student.photo = currentStudent.picture.medium
      })
      return 
    default:
      return oldState
  }
}

export default studentReducer;