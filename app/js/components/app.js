'use strict'

var React = require('react')
var Catalog = require('./catalog')
var Cart = require('./cart')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Let's Shop</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </div>
    )
  }
})

module.exports = App
