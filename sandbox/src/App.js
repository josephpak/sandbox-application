import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import { locationData } from './data.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      location: locationData
    }
  }

  render() {
    return (
      <>
        <Dropdown
        />
      </>
    );
  }
}

export default App;
