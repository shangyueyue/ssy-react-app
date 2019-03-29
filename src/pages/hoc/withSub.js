import React from 'react';


export default function withSub(WrappedComponent) {
  return class extends React.Component {
    render() {
      console.log('props', this.props);
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
