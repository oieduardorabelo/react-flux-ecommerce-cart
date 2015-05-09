var React = require('react')
var BootstrapCSS = require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

var App = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1 >Hello World</h1>
      </div>
    )
  }
})

React.render(<App />, document.getElementById('MainApp'))
