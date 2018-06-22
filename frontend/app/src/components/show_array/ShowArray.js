import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class ShowArray extends Component {

  renderArray() {
    const array = this.props.curArray;
    console.log(array);
    return _.map(array , (element,index) => {
      return (
      <td key={index}>{element}</td>
    )
    })

  }

  render() {

    return (
      <div className="tablecontainer">
        <table>
          <tbody>
            <tr>
              {this.renderArray()}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { curArray: state.curArray }
}

export default connect(mapStateToProps)(ShowArray);
