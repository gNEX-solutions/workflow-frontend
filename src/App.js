import React, { Component } from "react";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { RootRouter } from "./router/index";
// import logo from './logo.svg'
import "./App.css";

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <RootRouter />
        </div>
      </Router>
    );
  }
}

export default App;
