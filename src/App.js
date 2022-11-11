import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          THis is home page
        </Route>
        <Route exact path="/starred">
          stareed
        </Route>
        <Route>tthis is 404 pages</Route>
      </Switch>
    </div>
  );
}

export default App;
