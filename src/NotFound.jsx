var React = require('react');
var Eventful = require('eventful-react');

var NotFound = React.createClass({
  render: function() {
    return (
      <div id="not-found">
        Page Not Found
      </div>
    );
  }
});

module.exports = NotFound;

