var React = require('react');
var Eventful = require('eventful-react');

var Order = React.createClass({
  render: function() {
    console.log("Inside of Order, this.props =", this.props)
    return (
      <a className="clickable" onClick={this.props.finishOrder}>
        <div className="order" >
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