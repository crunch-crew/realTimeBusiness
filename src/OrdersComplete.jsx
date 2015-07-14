var Order = require('./Order');
var OrdersComplete = React.createClass({
  render: function() {
    console.log("Props passed down from App.jsx", this.props);
    console.log("What Order is logging out too", Order);
    var completed = this.props.data.completed.map(function(order) {
      return (   
        <Order order_id={order.order_id} product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      );
    });
    console.log("Orders complete:", completed);
    return (
      <div className id="orders-complete">
        <h2> Orders Fulfilled </h2> 
        {completed}
      </div>
    );
  }
});

module.exports = OrdersComplete;