import React from 'react';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      student: []
    }
  }
  
  componentDidMount() {
    this.props.fetchStudents()
      // .then((data) => {
      //   console.log(data.students.data)
      //   const name = data.student.data.results[0]
      //   const email = data.student.data.results[0]
      //   const address = data.student.data.results[0]
      //   const birthday = data.student.data.results[0]
      //   const age = data.student.data.results[0]
      //   const photo = data.student.data.results[0]
      //   this.setState({ student: Object.assign({}, name, email, address, birthday, age, photo)}))
      // console.log(data)
      // })
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.students && this.props.students !== prevProps.students) {
  //     this.props.fetchStudents()
  //       // .then((data) => console.log(data))
  //   }
  // }

  render() {
    if (!this.props.student || !this.props.students) {
      return null
    }

    console.log("students", this.props.students)
    return(
      <div className="main-page">
        <ul>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
        </ul>
      </div>
    )
  }
}

export default MainPage;