var Router = ReactRouter;
var Redirect = Router.Redirect;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
// MVP ++ implement login/register view for authentication
var App = require('./App');
var NotFound = require('./NotFound');
var RecentOrders = require('./RecentOrders.jsx');
var CreateOrder = require('./CreateOrder.jsx');
var OrdersComplete = require('./OrdersComplete.jsx');
console.log("Inside of the Router.jsx orders complete looks like", OrdersComplete);

var routes = (
  <Route name="app" path="/" handler={App}> 
    <Route path="recentOrders" handler={RecentOrders} />
    <Route path="createOrder" handler={CreateOrder} />
    <Route path="ordersComplete" handler={OrdersComplete} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});

