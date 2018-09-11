import * as React from 'react';

class NavMenu extends React.Component<{}> {

  public render() {
    return (
      <div>
        <ul className="bp-menu">
          <li><a href="/" className="u-active"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="/teaching"><i className="fas fa-link"></i> Teaching</a></li>
          <li><a href="#"><i className="fas fa-link"></i> Item</a></li>
          <li><a href="#"><i className="fas fa-link"></i> Item</a></li>
          <li><hr /></li>
          <li><a href="#"><i className="fas fa-link"></i> Item</a></li>
          <li><a href="#"><i className="fas fa-link"></i> Item</a></li>
        </ul>
        <div className="bp-welcome">
          <p>Welcome to Boilerplate Modern!</p>
        </div>
      </div>
    );
  }

}

export default NavMenu;
