import * as React from 'react';

class NavMenu extends React.Component<{}> {

  public render() {
    return (
      <ul className="bp-menu">
        <li><a href="/" className="u-active"><i className="fas fa-home" /> Home</a></li>
        <li><a href="/teaching"><i className="fas fa-link" /> Teaching</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><hr /></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
      </ul>
    );
  }

}

export default NavMenu;
