import * as React from 'react';
// import logo from './logo.svg';

class Boilerplate extends React.Component<{}> {

  public render() {
    return (
      <div>
        <header>header</header>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Boilerplate;
