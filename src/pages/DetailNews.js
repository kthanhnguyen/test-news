import React, { Component } from "react";

export default class DetailNews extends Component {
  componentDidMount() {
    console.log(this.props.match);
  }
  render() {
    return <div>DetailNews</div>;
  }
}
