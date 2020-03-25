import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";
import NewsItem from "../components/newsItem/NewsItem";

class ListNews extends Component {
  componentDidMount() {
    this.props.getListNews();
  }

  renderItem = () => {
    let { listNews } = this.props;

    return listNews.map((item, index) => {
      return <NewsItem news={item} key={index} />;
    });
  };

  render() {
    return (
      <Fragment>
        <h2 className="ttl_sec mb-3">List News</h2>
        <div className="row">{this.renderItem()}</div>
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

export default connect(mapStateToProp, mapDispatchToProps)(ListNews);
