import React, { Component } from 'react';
import { connect } from 'react-redux';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 }
  }

  onInputChange(value) {
    this.setState({ value });
  }

  onButtonClick(value) {
    console.log(value);
  }

  // TODO 1. add keyboard control with shift to move faster

  render() {
    return (
      <div className='sliderContainer'>
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.value}
          type="range"
          className="slider"
          min="0"
          max="100"
        />
        <p>{this.state.value}</p>
        <input
          onClick={() => this.onButtonClick(this.state.value)}
          className="searchButton"
          type="submit"
          value="Submit"
        />
      </div>
    )
  }
}

export default connect(null, null)(Slider);
