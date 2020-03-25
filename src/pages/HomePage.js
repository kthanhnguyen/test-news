import React, { Component } from "react";
import ListNews from "../containers/ListNews";
import TopHeadline from "../containers/TopHeadline";
import KeywordContainer from "../containers/KeywordContainer";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="tab-home">
          <Tabs defaultActiveKey="top-heding">
            <Tab eventKey="top-heding" title="Top Heading">
              <TopHeadline />
            </Tab>
            <Tab eventKey="keyword" title="Keyword Selection">
              <KeywordContainer />
            </Tab>
            <Tab eventKey="account" title="Account">
              123
            </Tab>
          </Tabs>
        </div>

        <ListNews />
      </div>
    );
  }
}
