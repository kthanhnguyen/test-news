import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div className="loader__wrapper">
        <div className="loader loader--circularSquare"></div>
      </div>
    )
  }
}
