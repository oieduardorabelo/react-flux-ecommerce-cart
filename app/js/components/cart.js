'use strict'

var React = require('react')
var AppStore = require('../stores/app-store')
var RemoveFromCart = require('./cart-removeFromCart')
var Increase = require('./cart-increase')
var Decrease = require('./cart-decrease')

function cartItems() {
  return { items: AppStore.getCart() }
}

var Cart = React.createClass({
  getInitialState: function() {
    return cartItems()
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange)
  },
  _onChange: function() {
    this.setState(cartItems())
  },
  render: function() {
    var total = 0
    var items = this.state.items.map(function(item, itemIndex){
      var subtotal = item.cost * item.qty
      total += subtotal

      return (
        <tr key={itemIndex}>
          <td><RemoveFromCart index={itemIndex} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={itemIndex}/>
            <Decrease index={itemIndex}/>
          </td>
          <td>{subtotal}</td>
        </tr>
      )
    })
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
})

module.exports = Cart
