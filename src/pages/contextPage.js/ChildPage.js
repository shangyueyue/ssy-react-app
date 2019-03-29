import React from 'react';
import { ThemeContext } from './theme-context';

export default (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          {...props}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
