import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import MyTable from './MyTable';

class App extends React.Component {
  order = {Address:"S.Staneviciaus g. 14-24", Phone: "865034755"};

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>
            <MyTable/>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
