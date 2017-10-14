/**
 * @flow
 */

import { bool } from 'prop-types';
import React from 'react';
import { DividerVertical } from '../helpers';
import { Button, Modal, View } from 'react-native';


type ModalExampleState = {
  modalVisible: bool
};

class ModalColorExample extends React.Component {
  state: ModalExampleState;

  static propTypes = {
  };

  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View width='25%'>
        <Modal visible={this.state.modalVisible}>
          <Button title="Bar" onPress={() => this.setModalVisible(false)} />
        </Modal>
        <Button width='25%' title="Foo" onPress={() => this.setModalVisible(true)} />
      </View>
    );
  }
}

export default ModalColorExample;
