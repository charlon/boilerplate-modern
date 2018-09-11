import * as React from 'react';

class ThinBar extends React.Component<{}> {

  public render() {
    return (
      <div className="bp-container">
        <div className="bp-user"><i className="fas fa-user"></i>&nbsp;&nbsp;netid</div>
        <div className="bp-links">
          <ul>
            <li><i className="fas fa-external-link-alt"></i> Link</li>
            <li><i className="fas fa-external-link-alt"></i> Link</li>
            <li><i className="fas fa-question-circle"></i> Help</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default ThinBar;
