import React from 'react';
import '../index';
import Carousel from '../components/Carousel/Carousel'

import { storiesOf } from '@storybook/react';


storiesOf('Carousel', module)
  .add('Carousel', () => (
    <Carousel
    />
  ))  