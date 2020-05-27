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
          <Route exact path="/home" component={Jelajah} />
          <Route exact path="/explore" component={Jelajah} />
          <Route exact path="/notifikasi" component={Profile} />
          <Route exact path="/pesan" component={Profile} />
          <Route exact path="/markah" component={Profile} />
          <Route exact path="/daftar" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/tweetdanbalasan" component={Profile} />
          <Route exact path="/profile/media" component={Profile} />
          <Route exact path="/profile/suka" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
