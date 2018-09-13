import * as React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

// import logo from './logo.svg';

import Home from './pages/Home'
import Teaching from './pages/Teaching'

const App = () => (

    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/teaching" component={Teaching} />
    </Switch>

);

export default App;
