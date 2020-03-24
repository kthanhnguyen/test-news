import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return <div className="page-404">
      <div className="page-404-content">
        <div className="container text-center text-white">
          <div className="display-1">404</div>
          <h1>Page Not Found</h1>
          <p>Oops!!!! Trang bạn truy cập không tồn tại. Hãy trở lại trang chủ</p>
          <a className="btn btn-primary" href="/">Trở lại trang chủ</a>
        </div>
      </div>
    </div>;
  }
}
