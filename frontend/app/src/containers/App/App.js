import React, { Component } from 'react';
import './App.css';
import ShowArray from '../../components/show_array/ShowArray';
import Slider from '../../components/slider/slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowArray />
        <Slider />
      </div>
    );
  }
}

export default App;
