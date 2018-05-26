import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import MyFirstRenderer from './MyFirstRenderer';

class App extends React.Component {
  order = {Address:"S.Staneviciaus g. 14-24"};

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>
            <MyFirstRenderer Order={this.order} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
