var Router = ReactRouter;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var App = React.createClass({
  getInitialState: function() {
    return {
      orders: [
      {order_id: 1, product: "Ducky on Fire", qty: 3, price: 189, user: "user1"},
      {order_id: 2, product: "Ducky on Fire", qty: 2, price: 189, user: "user2"},
      {order_id: 3, product: "Ducky on Fire", qty: 1, price: 189, user: "user3"},
      {order_id: 4, product: "Ducky on Fire", qty: 1, price: 189, user: "user5"},
      {order_id: 5, product: "Ducky on Fire", qty: 1, price: 189, user: "user1"},
      {order_id: 6, product: "Ducky on Fire", qty: 1, price: 189, user: "user1"}
      ]
    }
  },
  handleOrderSubmit: function(order) {
    console.log("order was received", order);
    this.combustRef.push(order);
  },
  componentWillMount: function() {
    var context = this;
    var orders = this.state.orders;
    var that = this;
    var newOrder;
    that.combustRef = new Combust({serverAddress: serverAddress}, function() {
      that.combustRef.on("child_added", function(dataSnapshot) {
        if (dataSnapshot.success) {
          console.log("First call to db, dataSnapshot =", dataSnapshot);
          orders = orders.concat(dataSnapshot.data);
          console.log("First call to db, orders look like\n\n\n", orders);
          context.setState({orders: orders});
        } else {
          newOrder = dataSnapshot._storage;
          context.state.orders.concat(newOrder);
        }
      });
    });
  },
  render: function() {
    return (
      <div className="app">
        <h1> CombustDuckInc </h1> 
        <ul className="site-navigation">
          <li> <Link to="/recentOrders" > Recent Orders </Link> </li>
          <li> <Link to="/createOrder" >  Create Order </Link> </li>
        </ul>
        <RouteHandler data={this.state} onOrderSubmit={this.handleOrderSubmit} />
      </div>
    );
  }  
});

module.exports = App;