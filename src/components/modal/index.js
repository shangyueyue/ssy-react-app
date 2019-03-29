import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return (
      ReactDOM.createPortal(children, this.el)
    );
  }
}

export default Modal;
