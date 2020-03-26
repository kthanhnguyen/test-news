import React, { Component } from "react";
import SelectionItem from "../components/SelectionItem/SelectionItem";

class SelectionContainer extends Component {
  _showItem = (listSelection, id) => {
    if (listSelection) {
      return listSelection.map((item, index) => {
        return <SelectionItem news={item} key={index} id={id} />;
      });
    }
  };
  render() {
    const { listSelection, id } = this.props;
    return <div className="row">{this._showItem(listSelection, id)}</div>;
  }
}

export default SelectionContainer;
