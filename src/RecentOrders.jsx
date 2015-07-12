var Order = require('./Order');

var RecentOrders = React.createClass({
  render: function() {
    var orders = this.props.data.orders;
    var orderList = orders.sort(function(a,b) {
        return b.order_id - a.order_id;
    })
    .map(function(order) {
      return (   
        <Order product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      );
    })
    .slice(0, 10);
    
    return (
    <div className id="order-list">
    <h2> Recent Orders </h2>    
      {orderList}
    </div>
    );
  }
});

module.exports = RecentOrders;