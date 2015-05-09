'use strict'

var Flux = require('flux')
var Dispatcher = new Flux.Dispatcher()

var AppDispatcher = {
  handleViewAction: function(action) {
    console.log(action)
    Dispatcher.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },
  register: function(payload) {
    Dispatcher.register(payload)
  }
}

module.exports = AppDispatcher
