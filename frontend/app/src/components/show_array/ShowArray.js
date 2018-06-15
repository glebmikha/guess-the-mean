import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class ShowArray extends Component {

  renderArray() {
    const array = this.props.initReducer[0].data;
    return _.map(array , (element,index) => {
      return (
        <td key={index}>{element}</td>
      )
    })

  }

  render() {

    console.log(this.props.initReducer);

    return (
      <div className="tablecontainer" align="center">
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
  return { initReducer: state.initReducer }
}

export default connect(mapStateToProps)(ShowArray);
