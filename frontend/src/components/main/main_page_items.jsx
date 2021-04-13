import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import CakeIcon from '@material-ui/icons/Cake';

class MainPageItems extends React.Component {

  render() {
    if (!this.props.student) {
      return null
    }

    return(
      <div className="student-item">
        <section className="student-item-left">
          <img src={this.props.photo} alt="student" />
          <h1>{this.props.name}</h1>
        </section>
        <section className="student-item-right">
          <p><EmailIcon />: {this.props.email}</p>
          <p><HomeIcon />: {this.props.address}</p>
          <p><CakeIcon />: {this.props.birthday}</p>
        </section>
      </div>
    )
  }
}

export default MainPageItems;