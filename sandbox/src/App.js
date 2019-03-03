import React, { Component } from 'react';
import './App.css';


import TransparentButton from './components/TransparentButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TransparentButton 
        text="Add"
        type="add"
        />
      </div>
    );
  }
}

export default App;
