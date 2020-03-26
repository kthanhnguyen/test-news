import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

class HeaderContainer extends Component {
  _showUser = () => {
    const { userData } = this.props;

    if (userData === "" || userData === undefined) {
      return "";
    } else {
      return (
        <NavDropdown
          title={userData.username}
          id="basic-nav-dropdown"
          className="ml-auto header__user"
        >
          <NavDropdown.Item onClick={this._logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      );
    }
  };
  _logout = () => {
    localStorage.removeItem("userData");
    this.props.actLogout();
  };
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/selection/bitcoin"
              >
                Bitcoin
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/selection/apple"
              >
                Apple
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/selection/earthquake"
              >
                Earthquake
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/selection/animal"
              >
                Animal
              </NavLink>
            </Nav>
            {this._showUser()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
const mapStateToProp = state => {
  return {
    userData: state.userReducer.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actLogout: () => {
      dispatch(action.actLogout());
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(HeaderContainer);
