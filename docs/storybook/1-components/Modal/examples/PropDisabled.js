/**
 * @flow
 */

import React from 'react';
import { Modal } from 'react-native';

const onPress = () => {
  console.error('Disabled modal should not trigger onPress!');
};
const ModalDisabledExample = () => <Modal disabled onPress={onPress} title="Disabled modal" />;

export default ModalDisabledExample;
