import React, { Component } from 'react';
import './App.css';
import ShowArray from '../../components/show_array/ShowArray';
import Slider from '../../components/slider/slider';
import History from '../../components/history/history';
import LineChartData from '../../components/chart/chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowArray />
        <Slider />
        <LineChartData />
        <History />
      </div>
    );
  }
}

export default App;
