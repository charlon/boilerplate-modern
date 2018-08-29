import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ExampleCard from './ExampleCard';
import AcademicCalendar from './AcademicCalendar';

import './home.scss';

ReactDOM.render(
  <div>

    <div className="myuw-ticker">
      <div className="myuw-ticker-left">
        <div className="myuw-ticker-card">make a tickker component</div>
      </div>
      <div className="myuw-ticker-right">
        <div className="myuw-ticker-card">make a tickker component</div>
        <div className="myuw-ticker-card">make a tickker component</div>
        <div className="myuw-ticker-card">make a tickker component</div>
      </div>
    </div>

    <div className="myuw-home">
      <ExampleCard />
      <ExampleCard />
      <AcademicCalendar />
    </div>

  </div>,
  document.getElementById('home')
)
