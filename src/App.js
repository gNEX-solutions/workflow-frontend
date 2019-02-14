import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logo from './logo.svg';
import { RootRouter } from './router';

export const history = createHistory();

const store = createStore((state = {}) => state, applyMiddleware(thunk));

class App extends Component {
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
