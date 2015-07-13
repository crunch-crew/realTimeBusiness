var OrdersComplete = React.createClass({
  render: function() {
    console.log("Inside of OrdersComplete, this.props =", this.props);
    return (
      <div className id="orders-complete">
        <h2> Orders Fulfilled </h2>    
      </div>
    );
  }
});

module.exports = OrdersComplete;