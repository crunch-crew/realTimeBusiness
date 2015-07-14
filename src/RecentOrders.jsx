var Order = require('./Order');
var _ = require('underscore');

var RecentOrders = React.createClass({
  complete: function(order) {
    this.props.onOrderComplete(order);
  },
  render: function() {
    var orders = this.props.data.orders.map(function(order, i) {
      return _.extend(order, {order_id: i});
    });
    var context = this
    var orderList = orders.sort(function(a,b) {
      return b.order_id - a.order_id;
    })
    .map(function(order) {
      return (   
        <Order complete={context.complete} order_id={order.order_id} product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      )
    })
    .slice(0, 25);


    return (
    <div className id="order-list">
    <h2> Recent Orders </h2>    
      {orderList}
    </div>
    );
  }
});

module.exports = RecentOrders;