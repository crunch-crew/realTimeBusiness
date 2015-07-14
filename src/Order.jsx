var React = require('react');
var Eventful = require('eventful-react');

var Order = React.createClass({
  finishOrder: function(e) {
    e.preventDefault();
    console.log("What this looks like = ", this.props);
  },
  render: function() {
    console.log("Inside of Orders props looks like = ", this.props)
    return (
      <a className="clickable">
        <div className="order" onClick={this.finishOrder} >
          <span className="title"> Order #: </span> <span className="field">{this.props.order_id} |</span>
          <span className="title"> Product: </span> <span className="field">{this.props.product} |</span>
          <span className="title"> QTY: </span><span className="field"> {this.props.qty} | </span>
          <span className="title"> Price:  </span> <span className="field">{this.props.price} | </span> 
          <span className="title"> User: </span> <span className="field">{this.props.user} </span>
        </div>
      </a>
    );
  }
});

module.exports = Order;