'use strict'

var AppDispatcher = require('../dispatchers/app-dispatcher')
var CartConstants = require('../constants/cart-constants')
var EventEmmiter = require('events').EventEmitter
var _ = require('lodash')

var CHANGE_EVENT = 'CHANGE_EVENT'

var _catalog = []
var _catalogIndex = 1
while(_catalogIndex <= 3) {
  _catalog.push({ id: _catalogIndex, title: `Widget #${_catalogIndex}`, cost: _catalogIndex })
  _catalogIndex++
}

var _cartItems = []

function _removeItem(index) {
  _cartItems[index].inCart = false
  _cartItems.splice(index, 1)
}

function _increaseItem(index) {
  _cartItems[index].qty++
}

function _decreaseItem(index) {
  if (_cartItems[index].qty > 1) {
    _cartItems[index].qty--
  } else {
    _removeItem(index)
  }
}

function _addItem(item) {
  if (!item.inCart) {
    item['qty'] = 1
    item['inCart'] = true
    _cartItems.push(item)
  } else {
    _cartItems.forEach(function(cartItem, cartItemIndex) {
      if (item.id === cartItem.id) {
        _increaseItem(cartItemIndex)
      }
    })
  }
}

var AppStore = _.assign(EventEmmiter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getCart: function() {
    return _cartItems
  },
  getCatalog: function() {
    return _catalog
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action
    var actionsPayload = {
      [CartConstants.ADD_ITEM]: function() {
        _addItem(payload.action.item)
      },
      [CartConstants.REMOVE_ITEM]: function() {
        _removeItem(payload.action.index)
      },
      [CartConstants.INCREASE_ITEM]: function() {
        _increaseItem(payload.action.index)
      },
      [CartConstants.DECREASE_ITEM]: function() {
        _decreaseItem(payload.action.index)
      }
    }

    actionsPayload[action.actionType]()
    AppStore.emitChange()

    return true
  })
})

module.exports = AppStore
