import {LineChart} from 'react-easy-chart';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class LineChartData extends Component {

  getErrors() {

    const answers = this.props.answers.slice().reverse();

    const data = _.map(answers, (arr, index) => {
      return {x: index, y: Number(arr.error)}
    })
    return [data];
  }

  render () {
    return(
      <LineChart
    axes
    grid
    verticalGrid
    dataPoints
    yDomainRange={[-1.5, 1.5 ]}
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
