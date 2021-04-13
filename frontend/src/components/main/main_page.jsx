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
        <div className='footer'>
          <p>Rizza Carla Modina Marzo</p>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rizzamarzo/">LinkedIn</a>
          <a target="_blank" rel="noreferrer" href="https://rizzacarla.github.io/myPortfolio/">Portfolio</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/RizzaCarla">Github</a>
        </div>
      </div>
    )
  }
}

export default MainPage;