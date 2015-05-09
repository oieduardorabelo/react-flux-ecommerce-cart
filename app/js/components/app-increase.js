'use strict'

var React = require('react')
var AppActions = require('../actions/app-actions')

var Increase = React.createClass({
  click: function() {
    AppActions.increaseItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>+</button>
    )
  }
})

module.exports = Increase
