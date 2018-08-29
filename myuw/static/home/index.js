import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './home.scss';

import { ExampleCard } from './ExampleCard';

ReactDOM.render(
  <div>
    <div className="myuw-ticker">
      <div className="myuw-ticker-left">
        <div className="">make a tickker component</div>
      </div>
      <div className="myuw-ticker-right">
        <div>make a tickker component</div>
        <div>make a tickker component</div>
        <div>make a tickker component</div>
      </div>
    </div>

    <div className="myuw-home">
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
    </div>

  </div>,
  document.getElementById('home')
)
