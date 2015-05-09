'use strict'

var AppConstans = require('../constants/app-constants')
var AppDispatcher = require('../dispatchers/app-dispatcher')

var AppActions = {
  addItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstans.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstans.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstans.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstans.DECREASE_ITEM,
      index: index
    })
  }
}

module.exports = AppActions
