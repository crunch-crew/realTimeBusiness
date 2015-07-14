var React = require('react');
var Eventful = require('eventful-react');

var Order = React.createClass({
  render: function() {
    return (    
    <tr>              
      <td > {this.props.product} </td> <td> {this.props.qty} </td> <td> {this.props.price} </td> <td> {this.props.user} </td>
    </tr>               
    );
  }
});

module.exports = Order;


      // <div className="order">
      //   <span className="title"> Product: </span> <span className="field">{this.props.product} |</span>
      //   <span className="title"> QTY: </span><span className="field"> {this.props.qty} | </span>
      //   <span className="title"> Price:  </span> <span className="field">{this.props.price} | </span> 
      //   <span className="title"> User: </span> <span className="field">{this.props.user} </span>
      // </div>