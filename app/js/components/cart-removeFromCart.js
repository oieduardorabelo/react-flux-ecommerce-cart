'use strict'

var React = require('react')
var CartActions = require('../actions/cart-actions')

var RemoveFromCart = React.createClass({
  click: function() {
    CartActions.removeItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>Remote From Cart</button>
    )
  }
})

module.exports = RemoveFromCart
