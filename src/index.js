import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/style.css";
import reducer from "./reducers";

import Login from "./components/login";
import TopPage from "./components/users";

import { PrivateRoute } from "./components/privateRoute";
import * as serviceWorker from "./serviceWorker";

const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/top" component={TopPage} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
