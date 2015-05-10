'use strict'

var React = require('react')
var CartActions = require('../actions/cart-actions')

var Increase = React.createClass({
  click: function() {
    CartActions.increaseItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>+</button>
    )
  }
})

module.exports = Increase
