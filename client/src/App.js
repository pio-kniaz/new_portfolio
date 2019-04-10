import React, { Component } from 'react';
import './styles/main.scss';
import Routes from 'router/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
