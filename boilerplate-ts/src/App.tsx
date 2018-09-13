import * as React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import Boilerplate from './layout/Boilerplate';
import Home from './pages/Home'
import Teaching from './pages/Teaching'

const App = () => (
  <Boilerplate>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/teaching" component={Teaching} />
    </Switch>
  </Boilerplate>
);

export default App;
