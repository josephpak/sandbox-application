import React from 'react';
import '../index';
import Dropdown from '../components/Dropdown/Dropdown'

import { storiesOf } from '@storybook/react';


storiesOf('Dropdown', module)
  .add('General Dropdown', () => (
    <Dropdown
    />
  )) 