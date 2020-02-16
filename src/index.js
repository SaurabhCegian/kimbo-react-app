import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import HomeContainer from "./containers/HomeContainer";
import CreateComapnyContainer from "./containers/CreateCompanyContainer";
import "./assets/css/style.css";
import Header from "./components/Header";
import Reducer from "./Reducers";
import RegisterForm from "./components/RegisterForm";
const store = createStore(Reducer);
const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/create-company" component={CreateComapnyContainer} />
        <Route path="/progress-form" component={RegisterForm} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById("root"));

serviceWorker.unregister();
