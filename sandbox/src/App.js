import React, { Component } from 'react';
import './App.css';


import TransparentButton from './components/TransparentButton';
import Carousel from './components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TransparentButton 
        text="Add"
        type="add"
        />
        <Carousel />
      </div>
    );
  }
}

export default App;
