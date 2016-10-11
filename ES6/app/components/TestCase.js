import React from 'react'
import { Link } from 'react-router'
var PropTypes = React.PropTypes

export default React.createClass({
    
    propTypes: {
        testCaseName : PropTypes.string.isRequired,
        status : PropTypes.string.isRequired 
    },
    
	 render: function() {
		 var dest = "/testCase/" + this.props.testCaseName;
		return(
		<div className="row">
            <div className="col-md-10">
			<p><Link to={dest}>{this.props.testCaseName}</Link></p>
            </div>
            <div className="col-md-2">
              <p>{this.props.status}</p>
            </div>
          </div>
	 );
	 }
  });