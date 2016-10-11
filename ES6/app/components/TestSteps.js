import React from 'react'

export default React.createClass( {
  
  render: function () {

    var testCaseName = this.props.params.testCaseName;
    var index = -1;

    for (var i = 0; i < data.length; i++) {
      if ( data[ i ].testCase == testCaseName )
        index = i;
    }

    var stepsToRender = data[ index ].steps.map( function ( step, index ) {
      return (
      <div className="row" key={index}>
        <div className="col-md-2">
          <p>
		  {step.logger}
          </p>
        </div>
        <div className="col-md-10">
          <p>
		  {step.message}
          </p>
        </div>
      </div>
      );
    }, this );

    return (
    <div>
      { stepsToRender }
    </div>
    );
  }
} );