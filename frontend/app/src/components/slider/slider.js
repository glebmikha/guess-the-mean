import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newArray, userAnswer } from '../../actions';
import './slider.css';

class Slider extends Component {

  componentDidMount() {
    this.props.newArray();
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.userAnswer(this.state.value,this.props.curArray);
      this.props.newArray();
      this.setState({value: ''})
    }
  }

  constructor(props) {
    super(props);
    this.state = { value: 0 }
  }

  onInputChange(value) {
    this.setState({ value });
  }

  onButtonClick() {

    this.props.userAnswer(this.state.value,this.props.curArray);
    this.props.newArray();
    this.setState({value: ''})
  }

  render() {
    return (
      <div className='sliderContainer'>
        {/* <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.value}
          type="range"
          className="slider"
          min="0"
          max="100"
        /> */}
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.value}
          type="text"
          className="text-bar"
          onKeyPress={this._handleKeyPress}
        />
        <input
          onClick={() => this.onButtonClick()}
          className="search-button"
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
