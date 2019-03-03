import React from 'react';
import '../index';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

storiesOf('Page Components', module)
  .add('with text', () => (
    <p>Hello</p>
  ))  
  .add('with some emoji', () => (
    <p>Hello</p>
  ));
