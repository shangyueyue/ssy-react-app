import React, { Fragment } from 'react';
import MiddlePage from './MiddlePage';
import { ThemeContext, themes } from './theme-context';


class ContextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  onThemeChange =() => {
    // console.log(this.state);
    this.setState({
      theme: themes.dark,
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <Fragment>
        <ThemeContext.Provider value={theme}>
          <MiddlePage onThemeChange={this.onThemeChange} />
        </ThemeContext.Provider>
      </Fragment>
    );
  }
}

export default ContextPage;
