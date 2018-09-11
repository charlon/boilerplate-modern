import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavMenu from './NavMenu';
import ThinBar from './ThinBar';
import Masthead from './Masthead';

import './css/boilerplate.scss';

ReactDOM.render(
  <ThinBar />,
  document.getElementById("thin_bar")
);

ReactDOM.render(
  <Masthead />,
  document.getElementById("masthead")
);


ReactDOM.render(
  <NavMenu />,
  document.getElementById("nav_menu")
);
