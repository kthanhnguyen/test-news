import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopHeadlineItem extends Component {
  render() {
    const { news } = this.props;
    return (
      <div className="col-md-3">
        <div className="item__news">
          <Link to={"/top-heading/" + encodeURIComponent(news.title)}>
            <div className="item__pic">
              <img src={news.urlToImage} alt={news.title} />
            </div>
            <h4>{news.title}</h4>
          </Link>
        </div>
      </div>
    );
  }
}
