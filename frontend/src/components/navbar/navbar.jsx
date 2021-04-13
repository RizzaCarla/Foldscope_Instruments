import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.props.fetchStudents()
      .then(() => this.props.setCurrentStudents(this.props.students))
      .then(() => this.setState({ students: this.props.students }))
    this.clearSearch();
  }

  AZ (students) {
    this.props.setCurrentStudents(Object.values(students).sort((a, b) => (a.name > b.name) ? 1 : -1))
  }
  
  ZA (students) {
    this.props.setCurrentStudents(Object.values(students).sort((a, b) => (a.name < b.name) ? 1 : -1))
  }

  updateSearchTerm = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value})
    this.props.setSearchTerm(e.target.value)
  }

  handleSearch = () => {
    this.props.setCurrentStudents(this.state.students.filter(student => student.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
  }

  clearSearch() {
    this.setState({ searchTerm: "" })
    this.props.setCurrentStudents(this.state.students)
  }

  render() {
    if (!this.props.student || !this.props.students) {
      return null
    }

    return (
      <div className="navbar-container">
        <section className="navbar-left">
          <img src={process.env.PUBLIC_URL + "Student_Records.png"} alt="logo"/>
        </section>
        <section className="navbar-right">
          <form onChange={this.handleSearch}>
            <input id='searchbox' type="text" placeholder="Search Student Name" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
          </form>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Sort Students By:</Dropdown.Header>
              <Dropdown.Item onSelect={() => this.AZ(this.state.students)}>A to Z</Dropdown.Item>
              <Dropdown.Item onSelect={() => this.ZA(this.state.students)}>Z to A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      </div>
    )
  }
}

export default Navbar;