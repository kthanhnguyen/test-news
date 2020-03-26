import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/action/index";

import SelectionItem from "../components/SelectionItem/SelectionItem";
import HeaderContainer from "../containers/HeaderContainer";
import Loader from "../components/Loader/Loader";

class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true
    };
  }
  componentDidMount() {
    this.setTime = setTimeout(() => {
      this.setState({
        showLoader: false
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.setTime);
  }
  componentDidUpdate() {
    let { match } = this.props;
    let id = match.params.name;

    this.props.actgetSelectionKeyword(id);
  }

  _showItem = (listSelection, id) => {
    if (listSelection) {
      return listSelection.map((item, index) => {
        return <SelectionItem news={item} key={index} id={id} />;
      });
    }
  };
  render() {
    let { listSelection, match } = this.props;
    let id = match.params.name;

    return (
      <div>
        <HeaderContainer />
        <div className="container container-home">
          <h2>Selection: {id}</h2>
          <div className="row">
            {this.state.showLoader ? (
              <Loader />
            ) : (
              this._showItem(listSelection, id)
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    listSelection: state.newsReducer.listSelection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actgetSelectionKeyword: id => {
      dispatch(action.actgetSelection(id));
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(SelectionPage);
