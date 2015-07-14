var Router = ReactRouter;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var App = React.createClass({
  getInitialState: function() {
    return {
      orders: []
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
        <div className="topbar">
          <h1> CombustDuckInc </h1> 
          <ul className="site-navigation">
            <li> <Link to="/recentOrders" > Recent Orders </Link> </li>
            <li> <Link to="/createOrder" >  Create Order </Link> </li>
          </ul>
        </div>
        <RouteHandler data={this.state} onOrderSubmit={this.handleOrderSubmit} />
      </div>
    );
  }  
});

module.exports = App;