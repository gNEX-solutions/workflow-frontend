import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import store from './store';
// import logo from './logo.svg';
import { RootRouter } from './router';

export const history = createHistory();

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <RootRouter />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
