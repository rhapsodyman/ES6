import React from 'react'
import ReactDOM from 'react-dom'
import TestCasesBlock from './components/TestCases'
import TransformComponent from './components/DataTransform'
import TestSteps from './components/TestSteps'
import { Router, Route, hashHistory } from 'react-router'


var TransformComponentWrapper = React.createClass({
  render: function () {
    return (
        <TransformComponent data={data} />
    );
  }
});

var AllTestCasesWrapper = React.createClass({
  render: function () {
    return (
        <TestCasesBlock testCases={data} />
    );
  }
});



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TransformComponentWrapper}></Route>
    <Route path="/all" component={AllTestCasesWrapper}></Route>    
	<Route path="/testCase/:testCaseName" component={TestSteps}></Route>
  </Router>,
 
  document.getElementById('App')
);