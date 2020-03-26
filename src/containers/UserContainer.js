import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import Register from "../components/Register/Register";
import LogIn from "../components/LogIn/LogIn";
import Profile from "../components/Profile/Profile";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  _showReg = () => {
    this.setState({
      isShow: true
    });
  };
  _showLog = () => {
    this.setState({
      isShow: false
    });
  };
  _showContent = () => {
    const { isShow } = this.state;
    if (isShow) {
      return (
        <Register
          showLog={this._showLog}
          actRegister={this.props.actRegister}
        />
      );
    } else {
      return <LogIn showReg={this._showReg} />;
    }
  };
  _renderContent = () => {
    const { userData } = this.props;

    if (userData === "" || userData === undefined) {
      return this._showContent();
    } else {
      return <Profile userData={userData} />;
    }
  };
  render() {
    return <div>{this._renderContent()}</div>;
  }
}
const mapStateToProp = state => {
  return {
    userData: state.userReducer.userData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actRegister: user => {
      dispatch(action.actRegister(user));
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(UserContainer);
