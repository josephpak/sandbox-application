import React from 'react';
import '../index';
import TransparentButton from '../components/TransparentButton'

import { storiesOf } from '@storybook/react';


storiesOf('Button Components', module)
  .add('Add', () => (
    <TransparentButton
    text="Add"
    type="add"
    />
  ))  
  .add('Delete', () => (
    <TransparentButton
    text="Delete"
    type="delete"
    />
  ));
