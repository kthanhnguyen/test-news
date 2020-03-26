import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: {
        email: "",
        password: ""
      }
    };
  }
  _handleOnChange = event => {
    const { name, value } = event.target;
    const { userLogin } = this.state;

    this.setState({
      userLogin: {
        ...userLogin,
        [name]: value
      }
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="user-form">
        <h3>Login User</h3>
        <Form onSubmit={this._handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this._handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this._handleOnChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div>
          Do not have an account ?{" "}
          <button onClick={() => this.props.showReg()} className="btn-move">
            Register
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    userData: state.userReducer.userData
  };
};

export default connect(mapStateToProp, null)(LogIn);
