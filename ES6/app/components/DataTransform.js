import React from 'react'
import Main from './Main'

var PropTypes = React.PropTypes

export default React.createClass( {
  
    propTypes: {
        data : PropTypes.array.isRequired,
     },
    
	addValueToList: function(map, key, value) {
    //if the list is already created for the "key", then uses it
    //else creates new list for the "key" to store multiple values in it.
    map[key] = map[key] || [];
    map[key].push(value);
	},
	
	 render: function() {  
		var data =  this.props.data;
		var map = {};
		var testSets = [];
		var totalPassed = 0;
		var totalSkipped = 0;
		var totalFailed = 0;
		
		var dataLength = data.length;
		for (var i = 0; i < dataLength; i++) {
			var run = data[i];
					
			switch (run.status) {
			  case "PASS":
				totalPassed++;
				break;
			  case "FAIL":
				totalFailed++;
				break;
			  case "SKIP":
				totalSkipped++;
				break;
			  default:
				console.log("Invalid status");
			}
				
			this.addValueToList(map, run.testSet, run);
			
			if(!testSets.includes(run.testSet)){
				testSets.push(run.testSet);
			}
		}
		return (<Main map={map} testSets={testSets} pass={totalPassed} fail={totalFailed} skip={totalSkipped}/>)
	 }
  });