/**
 * @flow
 */

import React from 'react';
import { DividerHorizontal } from '../helpers';
import { Modal, StyleSheet, View } from 'react-native';

const emptyFunction = () => {};

const ModalOnPressExample = () => (
  <View style={styles.horizontal}>
    <Modal
      accessibilityLabel="This sounds great!"
      onPress={emptyFunction}
      title="This looks great!"
    />
    <DividerHorizontal />
    <Modal color="#841584" onPress={emptyFunction} title="Ok!" />
  </View>
);

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row'
  }
});

export default ModalOnPressExample;
