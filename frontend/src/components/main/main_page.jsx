import React from 'react';
import MainPageItems from './main_page_items';
import './main-page.css';

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
        <ul className="students-list">
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
        </ul>
      </div>
    )
  }
}

export default MainPage;