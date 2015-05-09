'use strict'

var AppDispatcher = require('../dispatchers/app-dispatcher')
var AppConstants = require('../constants/app-constants')
var NodeEventEmmiter = require('events').EventEmitter
var EventEmmiter = new NodeEventEmmiter()

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

var AppStore = {
  emitChange: function() {
    EventEmmiter.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    EventEmmiter.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    EventEmmiter.removeListener(CHANGE_EVENT, callback)
  },
  getCart: function() {
    return _cartItems
  },
  getCatalog: function() {
    return _catalog
  }
  ,
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action

    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item)
        break
      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index)
        break
      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index)
        break
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index)
        break
    }

    AppStore.emitChange()

    return true
  })
}

module.exports = AppStore
