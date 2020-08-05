import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from '../routes';
import history from '../utils/helpers/history';

class App extends Component {
  render() {
    return (
      <>
      <Router history={history}>
        <Routes />
      </Router>
      </>
    );
  }
}
export default App;
