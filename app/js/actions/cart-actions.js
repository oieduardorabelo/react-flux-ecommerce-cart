'use strict'

var CartConstans = require('../constants/cart-constants')
var AppDispatcher = require('../dispatchers/app-dispatcher')

var CartActions = {
  addItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: CartConstans.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: CartConstans.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: CartConstans.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: CartConstans.DECREASE_ITEM,
      index: index
    })
  }
}

module.exports = CartActions
