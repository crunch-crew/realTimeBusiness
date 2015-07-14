var Order = require('./Order');

var RecentOrders = React.createClass({
  render: function() {
    var orders = this.props.data.orders;
    console.log("Inside of Recent Orders", orders);
    var orderList = orders.sort(function(a,b) {
        return b.order_id - a.order_id;
    })
    .map(function(order) {
      return (  
        <Order product={order.product} qty={order.qty} price={order.price} user={order.user}></Order> 
      );
    })
    .slice(0, 25);
    
    return (
    <div className id="order-list">
      <h2> Recent Orders </h2>   
      <div className="CSSTableGenerator" >
        <table >
          <tr>
            <td> Product </td> <td> QTY</td> <td> Price </td> <td> User </td>
          </tr> 
          {orderList}
        </table>
      </div>
    </div>
    );
  }
});

module.exports = RecentOrders;