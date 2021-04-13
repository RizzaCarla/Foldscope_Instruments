import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

class Navbar extends React.Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  AZ (students) {
    this.props.setCurrentStudents(Object.values(students).sort((a, b) => (a.name > b.name) ? 1 : -1))
  }

  ZA () {

  }

  render() {
    if (!this.props.student || !this.props.students) {
      return null
    }

    return (
      <div className="navbar-container">
        <section className="navbar-left">
          <h1>Student Records</h1>
        </section>
        <section className="navbar-right">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Sort Students By:</Dropdown.Header>
              <Dropdown.Item onSelect={() => this.AZ(this.props.students)}>A to Z</Dropdown.Item>
              <Dropdown.Item onSelect={this.ZA}>Z to A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      </div>
    )
  }
}

export default Navbar;