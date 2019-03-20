import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { RootRouter } from "./router/index";
// adding the fontoawsome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
// import logo from './logo.svg'
import "./App.css";

export const history = createHistory();

class App extends Component {
  render() {
    // library.add(faIgloo)
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
