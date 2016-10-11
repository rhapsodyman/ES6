
import React from 'react'
var PropTypes = React.PropTypes

export default  React.createClass( {
   propTypes: {
        testSets : PropTypes.array.isRequired,
        itemSelect : PropTypes.func.isRequired,
        map : PropTypes.object.isRequired,
    },
    
  getInitialState: function () {
    return {
      selectedItem: -1
    };
  },
    
  onItemClick: function ( event ) {
    this.setState( {
      selectedItem: event.currentTarget.dataset.id
    } );
    this.props.itemSelect( event.currentTarget.dataset.id );
  },
    
  render: function () {
    var testSets = this.props.testSets;
    if ( testSets ) {
      var toRender = testSets.map( function ( testSet, index ) {
        var style_cl = "list-group-item ";
        style_cl += this.state.selectedItem == index ? "on" : "off";

        return (
        <li
            className={ style_cl }
            onClick={ this.onItemClick }
            data-id={ index }
            key={ index }>
          <span className="badge">{ this.props.map[ testSet ].length }</span>
          { testSet }
        </li>
        );
      }, this );
    }

    return (<ul className="list-group">
              { toRender }
            </ul>);
  }
} );