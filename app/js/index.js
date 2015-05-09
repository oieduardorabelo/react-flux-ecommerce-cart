/**
 * let webpack resolve all the dependencies,
 * this main file is to load all files, vendors,
 * assets, necessaries to run the App
 */

// JS
var React = require('react')
var App = require('./components/app')

React.render(<App />, document.getElementById('App'))

// CSS
require('bootstrap/dist/css/bootstrap.min.css')
