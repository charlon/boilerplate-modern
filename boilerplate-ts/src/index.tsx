import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

import Boilerplate from './layout/Boilerplate';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Boilerplate>
      <App />
    </Boilerplate>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
