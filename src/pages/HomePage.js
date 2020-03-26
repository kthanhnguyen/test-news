import React, { Component, Fragment } from "react";
import ListNews from "../containers/ListNews";
import TopHeadline from "../containers/TopHeadline";
import KeywordContainer from "../containers/KeywordContainer";
import UserContainer from "../containers/UserContainer";
import HeaderContainer from "../containers/HeaderContainer";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />

        <div className="container container-home">
          <div className="tab-home">
            <Tabs defaultActiveKey="top-heding">
              <Tab eventKey="top-heding" title="Top Heading">
                <TopHeadline />
              </Tab>
              <Tab eventKey="keyword" title="Keyword Selection">
                <KeywordContainer />
              </Tab>
              <Tab eventKey="account" title="Account">
                <UserContainer />
              </Tab>
            </Tabs>
          </div>

          <ListNews />
        </div>
      </Fragment>
    );
  }
}
