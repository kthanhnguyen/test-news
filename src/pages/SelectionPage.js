import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";
import SelectionItem from "../components/SelectionItem/SelectionItem";

class SelectionPage extends Component {
  componentDidMount() {
    let { match } = this.props;
    let id = match.params.name;
    this.props.actgetSelectionKeyword(id);
  }

  _showItem = (listSelection, id) => {
    if (listSelection) {
      return listSelection.map((item, index) => {
        return <SelectionItem news={item} key={index} id={id} />;
      });
    }
  };
  render() {
    let { listSelection, match } = this.props;
    let id = match.params.name;

    return (
      <div className="container">
        <h2>Selection: {id}</h2>
        <div className="row">{this._showItem(listSelection, id)}</div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    listSelection: state.newsReducer.listSelection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actgetSelectionKeyword: id => {
      dispatch(action.actgetSelection(id));
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(SelectionPage);
