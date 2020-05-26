import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../pages/Home";
import Jelajah from "../pages/Jelajah";
import Profile from "../pages/Profile";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jelajah" component={Jelajah} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
