import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routesHome } from "./routes/routes";
import HomeTemplate from "./templates/HomeTemplate";
import PageNotFound from "./pages/PageNotFound";

const showMenusHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          {showMenusHome(routesHome)}
          <Route path="" exact={false} component={PageNotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
