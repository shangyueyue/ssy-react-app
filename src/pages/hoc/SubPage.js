import React from 'react';
import withSub from './withSub';

class SubPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.warn('props', this.props);
    console.log('nextProps', nextProps);
  }

  render() {
    console.log('props1122', this.props);
    return (
      <div>sshhghngngn</div>
    );
  }
}

export default withSub(SubPage);
