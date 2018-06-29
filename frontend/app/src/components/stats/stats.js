import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {

  getMeanError() {

    return ((this.props.answers.reduce(
      (p, c) => {
        return p + Math.abs(Number(c.error))
      }
      ,0) / this.props.answers.length)*100).toFixed(1);
  }

  render () {
    return(
      <div>
        <p>Attempts: {this.props.answers.length}</p>
        <p>MAE: {this.getMeanError()} %</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { answers: state.answers }
}

export default connect(mapStateToProps)(Stats);
