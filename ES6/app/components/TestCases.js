import React from 'react'
import TestCase from './TestCase'
import FiltersAndStats from './FiltersAndStats'

var PropTypes = React.PropTypes

export default React.createClass( {
    
    propTypes: {
        testCases : PropTypes.array.isRequired, 
    },
    
	 getInitialState: function(){
		console.log("inside init state");
		return {statusFilter: "ALL", textFilter: ''};
		
	},
	
	onStatusFilterChangeCallback: function(statusFilter){
		
		console.log(statusFilter);
		this.setState( { statusFilter: statusFilter } );	
	},
	
	onTextFilterChangeCallback: function(textFilter){

		this.setState( { textFilter: textFilter } );	
	},
	
	fuzzy_match: function(str,pattern){
    pattern = pattern.split("").reduce(function(a,b){ return a+'[^'+b+']*'+b; });
    return (new RegExp(pattern, 'i')).test(str);
	},
	
  render: function () {
	  var testCases = this.props.testCases;
	  var statusFiltered = [];
	  var finalFiltered = [];
	  

	  var statusFilter = this.state.statusFilter;
	  var textFilter = this.state.textFilter;
	  
	  // filter by status
	  if(statusFilter != 'ALL'){
		  testCases.forEach(function(testCase) {
			  if(testCase.status == statusFilter)
				  statusFiltered.push(testCase);
		});
		  
	  }
	  else statusFiltered = testCases;
	  
	  
	  if(textFilter.length > 2){
		  for (var i = 0; i < statusFiltered.length; i++) {
		  if(this.fuzzy_match(statusFiltered[i].testCase, textFilter))
			  finalFiltered.push(statusFiltered[i]);
		}	 
	  }
	  else finalFiltered = statusFiltered;
	
	  console.log(finalFiltered);
	  // filter by text
	  
    if ( finalFiltered ) {
      var toRender = finalFiltered.map( function ( testCase, index ) {
        return (
        <TestCase testCaseName={ testCase.testCase } status = {testCase.status} key={ index } />
        );
      }, this );
    }
	
	    return (<div>
	      <h3>Test Cases Block</h3>
		  <FiltersAndStats testCases={this.props.testCases} onStatusFilterChange={this.onStatusFilterChangeCallback} onTextFilterChange={this.onTextFilterChangeCallback}/>

		{ toRender }
         </div>);
  }
} );