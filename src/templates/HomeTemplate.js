import React, { Fragment } from "react";
import { Route } from "react-router-dom";

function HomeTemplate({ Component, ...props }) {
  return (
    <Fragment>
      <Route
        {...props}
        render={propsComponent => <Component {...propsComponent} />}
      />
    </Fragment>
  );
}
export default HomeTemplate;
