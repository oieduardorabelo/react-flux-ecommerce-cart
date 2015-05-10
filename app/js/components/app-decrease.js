'use strict'

var React = require('react')
var AppActions = require('../actions/app-actions')

var Decrease = React.createClass({
  click: function() {
    AppActions.decreaseItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>-</button>
    )
  }
})

module.exports = Decrease
