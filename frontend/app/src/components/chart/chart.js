import {LineChart} from 'react-easy-chart';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class LineChartData extends Component {

  getErrors() {

    const answers = this.props.answers.slice().reverse();

    const data = _.map(answers, (arr, index) => {
      return {x: index, y: Math.abs(Number(arr.error))}
    })
    return [data];
  }

  render () {
    return(
      <LineChart
    axes
    grid
    verticalGrid
    yDomainRange={[0, 1]}
    axisLabels={{x: 'Attempt', y: 'Error'}}
    width={450}
    height={250}
    data={this.getErrors()}
  />
    )
  }
}

function mapStateToProps(state) {
  return { answers: state.answers }
}

export default connect(mapStateToProps)(LineChartData);
