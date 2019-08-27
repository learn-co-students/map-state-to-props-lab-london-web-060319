import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>username: {user.username}, hometown: {user.hometown}</li>)}
        </ul>
        <p>Total users: {this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
