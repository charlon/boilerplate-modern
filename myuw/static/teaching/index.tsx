import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';

import './teaching.scss';

const root = document.getElementById('teaching');

class Teaching extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="myuw-teaching">
        <h1>Hello, Welcome to the first page</h1>
        <FirstComponent />
      </div>
    );
  }
}

ReactDOM.render(<Teaching />, root);
