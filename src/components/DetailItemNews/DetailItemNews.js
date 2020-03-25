import React, { Component } from "react";

class DetailItemNews extends Component {
  _formatDate = val => {
    let date = val.match(
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/
    );
    if (date == null) {
      return false;
    } else {
      let time = date[4] + ":" + date[5];
      return time + " " + date[2] + "/" + date[3] + "/" + date[1];
    }
  };
  render() {
    const { itemDetail } = this.props;
    return (
      <div className="detail-news">
        <div className="detail-news__container">
          <h2 className="detail-news__title">{itemDetail.title}</h2>
          <p className="au_date">
            <span className="author">{itemDetail.author}</span> published at{" "}
            <span className="date">
              {this._formatDate(itemDetail.publishedAt)}
            </span>
          </p>
          <div className="link-src">
            Link:{" "}
            <a href={itemDetail.url} target="_blank" rel="noopener noreferrer">
              {itemDetail.source.name}
            </a>
          </div>
          <div className="detail-news__pic">
            <img src={itemDetail.urlToImage} alt={itemDetail.title} />
          </div>
          <p>{itemDetail.content}</p>
        </div>
      </div>
    );
  }
}

export default DetailItemNews;
