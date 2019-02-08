import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { RootRouter } from './router';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <RootRouter />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
