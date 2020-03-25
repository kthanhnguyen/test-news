import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class KeywordContainer extends Component {
  render() {
    return (
      <div className="key-selection">
        <Button href="#">Bitcoin</Button>
        <Button href="#">Apple</Button>
        <Button href="#">Earthquake</Button>
        <Button href="#">Animal</Button>
      </div>
    );
  }
}

export default KeywordContainer;
