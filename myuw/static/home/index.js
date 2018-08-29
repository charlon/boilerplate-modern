import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';

import { Example } from './Example';

console.log("I am React!")

ReactDOM.render(
  <div>
    <div className="bp-ticker">
      <div>
        make a tickker component
      </div>
      <div>
        make a tickker component
      </div>
    </div>

    <div className="bp-components">
      <Example />
    </div>

  </div>,
  document.getElementById('home')
)
