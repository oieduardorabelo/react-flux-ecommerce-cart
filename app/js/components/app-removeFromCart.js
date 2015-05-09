'use strict'

var React = require('react')
var AppActions = require('../actions/app-actions')

var RemoveFromCart = React.createClass({
  click: function() {
    AppActions.removeItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>Remote From Cart</button>
    )
  }
})

module.exports = RemoveFromCart
