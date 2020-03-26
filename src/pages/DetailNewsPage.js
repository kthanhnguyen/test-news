import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";
import HeaderContainer from "../containers/HeaderContainer";

import DetailItemNews from "../components/DetailItemNews/DetailItemNews";

class DetailNewsPage extends Component {
  componentDidMount() {
    this.props.getListNews();
  }
  _showItem = (listNews, name) => {
    if (listNews.length > 0) {
      let itemDetail = listNews.find(item => {
        return item.title === decodeURIComponent(name);
      });
      return <DetailItemNews itemDetail={itemDetail} />;
    }
  };
  render() {
    let { listNews, match } = this.props;
    let name = match.params.name;

    return (
      <Fragment>
        <HeaderContainer />
        <div className="container-home">{this._showItem(listNews, name)}</div>
      </Fragment>
    );
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
