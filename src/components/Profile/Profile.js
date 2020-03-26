import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { userData } = this.props;
    return (
      <div>
        <p>
          <b>Username:</b> {userData.username}
        </p>
        <p>
          <b>Email:</b> {userData.email}
        </p>
      </div>
    );
  }
}

export default Profile;
