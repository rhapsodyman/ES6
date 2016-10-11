import React from 'react'
var PropTypes = React.PropTypes

export default React.createClass({
    propTypes: {
        testCases : PropTypes.array.isRequired, 
        onTextFilterChange : PropTypes.func.isRequired,
        onStatusFilterChange : PropTypes.func.isRequired
    },
    
	onButtonClick: function(event) {
		console.log("inside on button click");
		console.log(event.currentTarget.dataset.id);
		this.props.onStatusFilterChange(event.currentTarget.dataset.id);
	},
	
	handleChange: function(event) {
		this.props.onTextFilterChange(event.target.value);
	},
	
	 render: function() {
	var testCases = this.props.testCases;
	
	var passed = 0;
	var skipped = 0;
	var failed = 0;
	
	testCases.forEach(function(testCase) {
	switch (testCase.status) {
	  case "PASS":
		passed++;
		break;
	  case "FAIL":
		failed++;
		break;
	  case "SKIP":
		skipped++;
		break;
	  default:
		console.log("Invalid status");
	}
	});
	
	var all = passed + failed + skipped;
	var passPer = passed/all*100;
	var failPer = failed/all*100;
	var skipPer = skipped/all*100;
	
	return(<div>
		<div className="btn-group">
            <button  className="btn btn-success" data-id="PASS" onClick={ this.onButtonClick }>Passed</button>
            <button  className="btn btn-danger" data-id="FAIL" onClick={ this.onButtonClick }>Failed</button>
            <button  className="btn btn-warning" data-id="SKIP" onClick={ this.onButtonClick }>Skipped</button>
			<button  className="btn btn-info" data-id="ALL" onClick={ this.onButtonClick}>All</button>
          </div>
          <div className="form-group">
            <label>Filter</label>
            <input type="text" className="form-control" onChange={this.handleChange}></input>
          </div>
		  
		  <h4 className="stats-title">Statistics</h4>
		
		<label>
		<span className="pull-right">{passPer + ' % (' + passed + ')'}</span>PASS</label>
		<div className="progress progress-xxs">
		<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width : passPer + '%'}}></div>
		</div>
		
		<label>
		<span className="pull-right">{failPer + ' % (' + failed + ')'}</span>FAIL</label>
		<div className="progress progress-xxs">
		<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width : failPer + '%'}}></div>
		</div>
		
		<label>
		<span className="pull-right">{skipPer + ' % (' + skipped + ')'}</span>SKIP</label>
		<div className="progress progress-xxs">
		<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width : skipPer + '%'}}></div>
		</div>
		</div>
	 );
	 }
  });