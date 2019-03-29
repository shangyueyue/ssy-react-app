import React from 'react';
import ChildPage from './ChildPage';
import SonPage from './SonPage';

export default (props) => {
  const { onThemeChange } = props;
  return (
    <div>
      <ChildPage onClick={onThemeChange} />
      <SonPage onClick={onThemeChange} />
    </div>
  );
};
