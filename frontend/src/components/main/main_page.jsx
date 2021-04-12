import React from 'react';
import MainPageItems from './main_page_items';

class MainPage extends React.Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    if (!this.props.student || !this.props.students) {
      return null
    }

    return (
      <div className="main-page">
        {
          Object.values(this.props.students).map((student, index) =>
            <li key={index}>
              <MainPageItems 
                student={student}
                name={student.name}
                email={student.email}
                address={student.address}
                birthday={student.birthday}
                photo={student.photo}
              />
            </li>
          )
        }
      </div>
    )
  }
}

export default MainPage;