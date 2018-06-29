import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './history.css';

class History extends Component {

  renderHistory() {

    return _.zipWith(this.props.dataReducer.slice(1,), this.props.answers, (arr, ans) => {
      return (
        <tr key={arr.id}>
          <td>{'['+arr.array.toString()+']'}</td>
          <td>{ans.true_mean}</td>
          <td>{ans.answer}</td>
          <td>{(ans.error*100).toFixed(1)}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='results-group'>
        <table>
          <colgroup>
            <col className='array'/>
            <col className='true_mean'/>
            <col className='your_answer'/>
            <col className='error'/>
          </colgroup>
          <tbody>
          <tr>
            <th>array</th>
            <th>true mean</th>
            <th>your mean</th>
            <th>error, %</th>
          </tr>

          {this.renderHistory()}
          </tbody>
        </table>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { dataReducer: state.dataReducer,
    answers: state.answers }
}

export default connect(mapStateToProps)(History);
