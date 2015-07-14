var Order = require('./Order');
var _ = require('underscore');

var RecentOrders = React.createClass({
  fulfillOrder: function(e) {
    e.preventDefault();
  },
  render: function() {
    var orders = this.props.data.orders.map(function(order, i) {
      return _.extend(order, {order_id: i});
    });

    var orderList = orders.sort(function(a,b) {
      return b.order_id - a.order_id;
    })
    .map(function(order) {
      return (   
        <Order order_id={order.order_id} product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      )
    })
    .slice(0, 10);
    console.log("Inside of Recent Orders and orderList =", orderList);
    return (
    <div className id="order-list">
    <h2> Recent Orders </h2>    
      {orderList}
    </div>
    );
  }
});

module.exports = RecentOrders;