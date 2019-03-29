import React, { Fragment } from 'react';
import { ThemeContext } from './theme-context';

class SonPage extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Fragment>
        <div style={this.context}>
          sggsgs
        </div>
      </Fragment>
    );
  }
}

export default SonPage;
