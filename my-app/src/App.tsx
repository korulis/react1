import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import MyTable from './MyTable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderDetailsContainer from './OrderDetailsComponent';

class App extends React.Component {
  order = { Address: "S.Staneviciaus g. 14-24", Phone: "865034755" };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>
            <h1>Header before router object</h1>
            <Router>
              <div>
                <Route exact={true} path="/" component={MyTable} />
                <Route path="/order/:orderRef" component={OrderDetailsContainer} />
              </div>
            </Router>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
