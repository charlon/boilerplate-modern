import * as React from 'react';

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
