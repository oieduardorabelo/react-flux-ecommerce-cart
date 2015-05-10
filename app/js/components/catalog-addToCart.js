'use strict'

var React = require('react')
var CartActions = require('../actions/cart-actions')

var AddToCart = React.createClass({
  click: function() {
    CartActions.addItem(this.props.item)
  },
  render: function() {
    return (
      <button onClick={this.click}>Add To Cart</button>
    )
  }
})

module.exports = AddToCart
