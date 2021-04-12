import { 
  RECEIVE_STUDENT,
  RECEIVE_STUDENTS 
} from '../actions/student_actions';

const studentReducer = ( oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_STUDENT:
      let oneStudent = []
      let data = action.students.data.results
      for (let i = 0; i < data.length; i++) {
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
        let student = {
          name: "",
          email: "",
          address: "",
          birthday: "",
          photo: "",
        }
        let location = data[i].location
        let origDate = data[i].dob.date.split("T")[0].split("-")
        student.name = data[i].name.first + " " + data[i].name.last
        student.email = data[i].email
        student.address = location.street.number.toString() + " " + location.street.name + ", " + location.city + ", " + location.state + " " + location.postcode + ", " + location.country
        student.birthday = months[origDate[1]] + " " + origDate[2] + ", " + origDate[0] + ` (Age: ${data[i].dob.age})`
        student.photo = data[i].picture.medium
        oneStudent.push(student)
      }
      return oneStudent
    case RECEIVE_STUDENTS:
      let manyStudents = []
      let data2 = action.students.data.results
      for (let i = 0; i < data2.length; i++) {
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
        let student = {
          name: "",
          email: "",
          address: "",
          birthday: "",
          photo: "",
        }
        let location = data2[i].location
        let origDate = data2[i].dob.date.split("T")[0].split("-")
        student.name = data2[i].name.first + " " + data2[i].name.last
        student.email = data2[i].email
        student.address = location.street.number.toString() + " " + location.street.name + ", " + location.city + ", " + location.state + " " + location.postcode + ", " + location.country
        student.birthday = months[origDate[1]] + " " + origDate[2] + ", " + origDate[0] + ` (Age: ${data2[i].dob.age})`
        student.photo = data2[i].picture.medium
        manyStudents.push(student)
      }
      return manyStudents
    default:
      return oldState
  }
}

export default studentReducer;