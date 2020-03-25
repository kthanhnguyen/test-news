import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import DetailItemNews from "../components/DetailItemNews/DetailItemNews";

class DetailTopHeadlinePage extends Component {
  componentDidMount() {
    this.props.getTopHeading();
  }
  _showItem = (listHeading, name) => {
    if (listHeading.length > 0) {
      let itemDetail = listHeading.find(item => {
        return item.title === name;
      });
      return <DetailItemNews itemDetail={itemDetail} />;
    }
  };
  render() {
    let { listHeading, match } = this.props;
    let name = match.params.name;

    return <Fragment>{this._showItem(listHeading, name)}</Fragment>;
  }
}
const mapStateToProp = state => {
  return {
    listHeading: state.newsReducer.listHeading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopHeading: () => {
      dispatch(action.actGetTopHeading());
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(DetailTopHeadlinePage);
