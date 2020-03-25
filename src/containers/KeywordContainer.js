import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class KeywordContainer extends Component {
  render() {
    return (
      <div className="key-selection">
        <Button href="/selection/bitcoin">Bitcoin</Button>
        <Button href="/selection/apple">Apple</Button>
        <Button href="/selection/earthquake">Earthquake</Button>
        <Button href="/selection/animal">Animal</Button>
      </div>
    );
  }
}

export default KeywordContainer;
