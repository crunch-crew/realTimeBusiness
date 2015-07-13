var Order = require('./Order');

var RecentOrders = React.createClass({
  fulfillOrder: function(e) {
    console.log("console.logging this = ", this.refs);
  },
  render: function() {
    var orders = this.props.data.orders;
    console.log("Inside of Recent Orders", orders);
    var context = this;
    var orderList = orders.sort(function(a,b) {
        return b.order_id - a.order_id;
    })
    .map(function(order) {
      return (   
        <Order finishOrder={this.fulfillOrder} ref={order} product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      )
    }.bind(this))
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