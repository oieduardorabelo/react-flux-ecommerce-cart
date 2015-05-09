'use strict'

var React = require('react')
var AppActions = require('../actions/app-actions')

var AddToCart = React.createClass({
  click: function() {
    AppActions.addItem(this.props.item)
  },
  render: function() {
    return (
      <button onClick={this.click}>Add To Cart</button>
    )
  }
})

module.exports = AddToCart
