/* eslint-disable react/jsx-sort-props */

/**
 * @flow
 */

import React from 'react';
import AnimationType from './examples/AnimationType';
import UIExplorer, {
  AppText,
  Code,
  Description,
  DocItem,
  Section,
  storiesOf
} from '../../ui-explorer';

const ModalScreen = () => (
  <UIExplorer title="Modal" url="1-components/Modal">
    <Description>
      <AppText>
        A basic modal component.
      </AppText>
    </Description>

    <Section title="Props">
      <DocItem
        name="animationType"
        typeinfo="?string"
        description="How the modal animates."
        example={{
          render: () => <AnimationType />
        }}
      />
    </Section>
{/*
    <Section title="Props">
      <DocItem
        name="accessibilityLabel"
        typeInfo="?string"
        description="Overrides the text that's read by a screen reader when the user interacts with the element."
      />

      <DocItem
        name="color"
        typeInfo="?string"
        description="Background color of the modal."
        example={{
          render: () => <PropColor />
        }}
      />

      <DocItem
        name="disabled"
        typeInfo="?boolean"
        description="If true, disable all interactions for this element."
        example={{
          render: () => <PropDisabled />
        }}
      />

      <DocItem
        name="onPress"
        typeInfo="function"
        description="This function is called on press."
        example={{
          render: () => <PropOnPress />
        }}
      />

      <DocItem
        name="testID"
        typeInfo="?string"
        description="Used to locate this view in end-to-end tests."
      />

      <DocItem name="title" typeInfo="string" description="Text to display inside the modal." />
    </Section>
      */}
  </UIExplorer>
);

storiesOf('Components', module).add('Modal', ModalScreen);
