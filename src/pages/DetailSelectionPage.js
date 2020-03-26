import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import HeaderContainer from "../containers/HeaderContainer";
import DetailItemNews from "../components/DetailItemNews/DetailItemNews";

class DetailSelectionPage extends Component {
  componentDidMount() {
    let { match } = this.props;
    let id = match.params.id;
    this.props.actgetSelectionKeyword(id);
  }
  _showItem = (listSelection, name) => {
    if (listSelection.length > 0) {
      let itemDetail = listSelection.find(item => {
        return item.title === decodeURIComponent(name);
      });

      return <DetailItemNews itemDetail={itemDetail} />;
    }
  };
  render() {
    let { listSelection, match } = this.props;
    let name = match.params.name;

    return (
      <Fragment>
        <HeaderContainer />
        <div className="container-home">
          {this._showItem(listSelection, name)}
        </div>
      </Fragment>
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

export default connect(mapStateToProp, mapDispatchToProps)(DetailSelectionPage);
