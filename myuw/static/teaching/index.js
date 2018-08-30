import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';

import './teaching.scss';

ReactDOM.render(
<div className="myuw-teaching">
  <h1>Hello, Welcome to the first page</h1>
  <FirstComponent/>
</div>,
  document.getElementById("teaching")
);
