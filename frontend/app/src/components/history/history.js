import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class History extends Component {

  renderHistory() {

    return _.zipWith(this.props.dataReducer.slice(1,), this.props.answers, (arr, ans) => {
      return (

        <tr>
          <td>{'['+arr.toString()+']'}</td>
          <td>{ans.true_mean}</td>
          <td><h1>{ans.answer}</h1></td>
          <td><h1>{ans.error}</h1></td>
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
            {this.props.answers.length > 0 ? this.renderHistory() : ''}
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
