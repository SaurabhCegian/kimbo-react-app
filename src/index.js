import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import HomeContainer from "./containers/HomeContainer";
import "./assets/css/style.css";
import Header from "./components/Header";
import Reducer from "./Reducers";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import CreateCompanyContainer from "./containers/CreateCompanyContainer";
const store = createStore(Reducer);
const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/new-company" component={CreateCompanyContainer} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
