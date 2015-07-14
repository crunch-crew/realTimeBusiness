var Order = require('./Order');
var _ = require('underscore');
var RecentOrders = React.createClass({
  render: function() {
    var orders = this.props.data.orders.map(function(order, i) {
      return _.extend(order, {order_id: i});
    });
    var context = this
    var orderList = orders.sort(function(a,b) {
      return a.order_id - b.order_id;
    })
    .map(function(order) {
      return (   
        <Order complete={context.complete} order_id={order.order_id} product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      )
    })
    .slice(0, 50);
    
    return (
    <div className id="order-list">
      <h2> Recent Orders </h2>   
      <div className="CSSTableGenerator" >
        <table >
          <tr>
            <td> Order Id </td> <td> Product </td> <td> QTY</td> <td> Price </td> <td> User </td>
          </tr> 
          {orderList}
        </table>
      </div>
    </div>
    );
  }
});

module.exports = RecentOrders;