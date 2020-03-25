import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import DetailItemNews from "../components/DetailItemNews/DetailItemNews";

class DetailNewsPage extends Component {
  componentDidMount() {
    this.props.getListNews();
  }
  _showItem = (listNews, name) => {
    if (listNews.length > 0) {
      let itemDetail = listNews.find(item => {
        return item.title === name;
      });
      return <DetailItemNews itemDetail={itemDetail} />;
    }
  };
  render() {
    let { listNews, match } = this.props;
    let name = match.params.name;

    return <Fragment>{this._showItem(listNews, name)}</Fragment>;
  }
}
const mapStateToProp = state => {
  return {
    listNews: state.newsReducer.listNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListNews: () => {
      dispatch(action.actGetListNewsAPI());
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(DetailNewsPage);
