import React, { Component } from 'react';
import './App.css';
import ShowArray from '../../components/show_array/ShowArray';
import Slider from '../../components/slider/slider';
import History from '../../components/history/history';
import LineChartData from '../../components/chart/chart';
import Stats from '../../components/stats/stats';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ShowArray />
        <Slider />
        <Stats />
        <LineChartData />
        <History />
        <Footer />
      </div>
    );
  }
}

export default App;
