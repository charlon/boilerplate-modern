import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExampleCard from './ExampleCard';

import './home.scss';

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
