import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newArray, userAnswer } from '../../actions';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 }
  }

  onInputChange(value) {
    this.setState({ value });
  }

  onButtonClick(value) {

    if (this.props.curArray.length > 0) {

      this.props.userAnswer(value,this.props.curArray);
      this.props.newArray();
    } else {
      this.props.newArray();
    }
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
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.value}
          type="text"
          className="text-bar"
        />
        <input
          onClick={() => this.onButtonClick(this.state.value)}
          className="searchButton"
          type="submit"
          value={this.props.curArray.length > 0 ? 'Submit' : 'Start'}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { curArray: state.curArray }
}

export default connect(mapStateToProps, { newArray, userAnswer })(Slider);
