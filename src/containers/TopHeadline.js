import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";
import TopHeadingItem from "../components/newsItem/TopHeadlineItem";

class TopHeading extends Component {
  componentDidMount() {
    this.props.getTopHeading();
  }
  _showList = listHeading => {
    if (listHeading.length > 0) {
      return listHeading.map((item, index) => {
        return <TopHeadingItem news={item} key={index} />;
      });
    }
  };
  render() {
    const { listHeading } = this.props;
    return <div className="row">{this._showList(listHeading)}</div>;
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

export default connect(mapStateToProp, mapDispatchToProps)(TopHeading);
