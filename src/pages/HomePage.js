import React, { Component } from "react";
import ListNews from "../containers/ListNews";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <ListNews />
      </div>
    );
  }
}
