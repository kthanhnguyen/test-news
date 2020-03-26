import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        username: "",
        password: ""
      }
    };
  }

  _handleOnChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };
  _handleSubmit = event => {
    event.preventDefault();

    if (localStorage) {
      let data = JSON.stringify(this.state.user);
      localStorage.setItem("userData", data);
      this.props.actRegister(this.state.user);
      alert("Register Successfully");
    }
  };

  render() {
    return (
      <div className="user-form">
        <h3>Register User</h3>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
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
              minLength={6}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <div>
          Do you already have an account ?{" "}
          <button onClick={() => this.props.showLog()} className="btn-move">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
