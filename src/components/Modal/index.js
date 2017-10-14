import { any, bool } from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

class Modal extends React.Component {
  static propTypes = {
    children: any,
    visible: bool,
  }

  render() {
    return (
      <ReactModal isOpen={this.props.visible}>
        {this.props.children}
      </ReactModal>);
  }
}

export default Modal;

