import './App.css';
import React from 'react';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Sardines from './Sardines';
import Chips from './Chips';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <VendingMachine />
          </Route>
          <Route path='/soda' exact>
            <Soda />
          </Route>
          <Route path='/chips' exact>
            <Chips />
          </Route>
          <Route path='/sardines' exact>
            <Sardines />
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;