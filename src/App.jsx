var Router = ReactRouter;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var App = React.createClass({
  getInitialState: function() {
    return {
      orders: [],
      completed: []
    }
  },
  handleOrderSubmit: function(order) {
    console.log("order was received", order);
    this.combustRef.push(order);
  },
  completeOrder: function(completedOrder) {
    var ordersCompleted = this.state.completed.slice();
    ordersCompleted.push(completedOrder);
    var orders = this.state.orders.slice();
    orders.splice(completedOrder.order_id, 1);
    this.setState({orders: orders, completed: ordersCompleted});
  },
  componentWillMount: function() {
    var context = this;
    var orders = this.state.orders;
    var that = this;
    var newOrder;
    that.combustRef = new Combust({serverAddress: serverAddress}, function() {
      that.combustRef.on("child_added", function(dataSnapshot) {
        if (dataSnapshot.success) {
          orders = orders.concat(dataSnapshot.data);
          context.setState({orders: orders});
        } else {
          console.log('What does orders look like as orders progess', orders);
          newOrder = dataSnapshot._storage;
          orders.push(newOrder);
          context.setState({orders: orders});
          console.log("What does state look like after setState:", context.state);
        }
      });
    });
  },
  render: function() {
    return (
      <div className="app">
        <h1> CombustDuckInc </h1> 
        <ul className="site-navigation">
          <li> <Link to="/createOrder" >  Create Order </Link> </li>
          <li> <Link to="/recentOrders" > Recent Orders </Link> </li>
          <li> <Link to="/ordersComplete"> Orders Fulfilled </Link> </li>
        </ul>
        <RouteHandler data={this.state} onOrderSubmit={this.handleOrderSubmit} onOrderComplete={this.completeOrder}/>
      </div>
    );
  }  
});

module.exports = App;