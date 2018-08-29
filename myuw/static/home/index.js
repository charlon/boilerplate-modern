import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';

import { ExampleCard } from './ExampleCard';

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
      <ExampleCard />
    </div>

  </div>,
  document.getElementById('home')
)
