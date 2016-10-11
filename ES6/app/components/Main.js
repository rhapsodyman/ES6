import React from 'react'
import TestSetsBlock from './TestSets'
import TestCasesBlock from './TestCases'

var PropTypes = React.PropTypes

export default React.createClass( {
  
    propTypes: {
        map : PropTypes.object.isRequired,
        testSets : PropTypes.array.isRequired,
        pass : PropTypes.number.isRequired,
        fail : PropTypes.number.isRequired,
        skip : PropTypes.number.isRequired
    },

     
  getInitialState: function () {
    return {
      activeIndex: 0
    };
  },
  testSetSelectCallBack: function ( index ) {
    this.setState( {
      activeIndex: index
    } );
  },
  render: function () {

    return (
    <div>
      <div className="page-header">
        <h3>Execution report</h3>
        <div className="centered-text">
          <a className="ui green tag label big"> { this.props.pass } </a>
          <a className="ui red tag label big"> { this.props.fail } </a>
          <a className="ui yellow tag label big"> { this.props.skip } </a>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-4">
          <h3>Test Sets</h3>
          <TestSetsBlock
                         testSets={ this.props.testSets }
                         map={ this.props.map }
                         itemSelect={ this.testSetSelectCallBack } />
        </div>
        <div className="col-md-8">
          <TestCasesBlock testCases={ this.props.map[ this.props.testSets[ this.state.activeIndex ] ] } />
        </div>
      </div>
    </div>
    )
  }
} ); 