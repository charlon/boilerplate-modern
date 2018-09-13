import * as React from 'react';
import * as logo from './w-logo-white.png';

const mastStyle = {
  backgroundImage: `url(${logo})`
}

import './boilerplate.css';

class Boilerplate extends React.Component<{}> {

  public slideMenu() {
    const element = document.getElementById("nav_menu");
    if (element) {
      element.classList.toggle("u-slide-down");
    }
  }

  public render() {
    return (

      <section>

        <header role="banner" className="bp-header">
          <div className="bp-thin-bar">
            <div className="bp-container">
              <div className="bp-user"><i className="fas fa-user" />&nbsp;&nbsp;netid</div>
              <div className="bp-links">
                <ul>
                  <li><i className="fas fa-external-link-alt" /> Link</li>
                  <li><i className="fas fa-external-link-alt" /> Link</li>
                  <li><i className="fas fa-question-circle" /> Help</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bp-masthead">
            <div className="bp-container bp-logo" style={mastStyle}>
              <div className="bp-title-mobile">
                <button className="bp-title-button" id="nav_button" onClick={this.slideMenu}>
                  <span className="fa-stack fa-2x bp-title-button-icon" aria-hidden="true">
                    <i className="far fa-square fa-stack-2x" />
                    <i className="fa fa-bars fa-stack-1x" />
                  </span>
                </button>
                <span>MyApplication</span>
              </div>
              <div className="bp-title-desktop">MyApplication</div>
            </div>
          </div>
        </header>


        <div className="bp-body">
          <div className="bp-container">

            <div id="nav_menu" role="navigation" className="bp-navigation u-slide">
              <ul className="bp-menu">
                <li><a href="/" className="u-active"><i className="fas fa-home" /> Home</a></li>
                <li><a href="/teaching"><i className="fas fa-link" /> Teaching</a></li>
                <li><a href="#"><i className="fas fa-link" /> Item</a></li>
                <li><a href="#"><i className="fas fa-link" /> Item</a></li>
                <li><hr /></li>
                <li><a href="#"><i className="fas fa-link" /> Item</a></li>
                <li><a href="#"><i className="fas fa-link" /> Item</a></li>
              </ul>
              <div className="bp-welcome">
                <p>Welcome to Boilerplate Modern!</p>
              </div>
            </div>

            <main role="main" className="bp-main">
              {this.props.children}
            </main>

          </div>
        </div>

      </section>

    );
  }

}

export default Boilerplate;
