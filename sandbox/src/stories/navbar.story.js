import React from 'react';
import '../index';
import NavBar from '../components/NavBar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';


storiesOf('NavBar', module)
  .add('Horizontal Transparent', () => (
    <Router>
        <NavBar />
    </Router> 
  )) 
