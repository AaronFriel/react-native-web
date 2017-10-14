/**
 * @flow
 */

import React from 'react';
import { DividerVertical } from '../helpers';
import { Modal, View } from 'react-native';

const emptyFunction = () => {};

const ModalColorExample = () => (
  <View>
    <Modal color="#17BF63" onPress={emptyFunction} title="Press me" />
    <DividerVertical />
    <Modal color="#F45D22" onPress={emptyFunction} title="Press me" />
    <DividerVertical />
    <Modal color="#794BC4" onPress={emptyFunction} title="Press me" />
    <DividerVertical />
    <Modal color="#E0245E" onPress={emptyFunction} title="Press me" />
  </View>
);

export default ModalColorExample;
