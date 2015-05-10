'use strict'

var React = require('react')
var CartActions = require('../actions/cart-actions')

var Decrease = React.createClass({
  click: function() {
    CartActions.decreaseItem(this.props.index)
  },
  render: function() {
    return (
      <button onClick={this.click}>-</button>
    )
  }
})

module.exports = Decrease
