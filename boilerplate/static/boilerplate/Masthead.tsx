import * as React from 'react';
import * as logo from './w-logo-white.png';

const mastStyle = {
  backgroundImage: `url(${logo})`
}


class Masthead extends React.Component<{}> {

  public render() {
    return (
      <div className="bp-container bp-logo" style={mastStyle}>
        <div className="bp-title-mobile">
          <button className="bp-title-button" id="nav_button">
            <span className="fa-stack fa-2x bp-title-button-icon" aria-hidden="true">
              <i className="far fa-square fa-stack-2x"></i>
              <i className="fa fa-bars fa-stack-1x"></i>
            </span>
          </button>
          <span>MyApplication</span>
        </div>
        <div className="bp-title-desktop">MyApplication</div>
      </div>
    );
  }

}

export default Masthead;
