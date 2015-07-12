
var CreateOrder = React.createClass({
  getInitialState: function() {
    return {
      order_id: 15
    }
  },
  handleClick: function(e) {
    // order id will probably be part of this components state
    e.preventDefault();
    var order_id = ++ this.state.order_id;
    var d = new Date()
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var purchaseTime = hour + ':' + minutes + ':' + seconds;
    var purchaseDate = month+ '/' + date + '/' + year;
    var product = "FireDucky";
    var user = "DuckMafiaOG";
    var price = 189;
    var qty = this.refs.qty.getDOMNode().value;
    var qtr = month > 6 ? (month < 10 ? 3 : 4) : (month > 3 ? 2 : 1);
    this.setState({order_id: order_id});
    this.props.onOrderSubmit({
      order_id: order_id, 
      product: product, 
      user: user, 
      price: price, 
      purchaseDate: purchaseDate,  
      purchaseTime: purchaseTime, 
      qty: qty
    });
    console.log("Inside of Create Order", this.props)
  },
  render: function() {
    return (
    <div id="create-order">
      <h2>FireDucky Order Form</h2>
      <h4>Description: Fire breathing ducky born in the heart of San Francisco, MakerSquare, guaranteed to increase your street credit and bring your game to the Crunch Crew level</h4>
      <div id="center-banner">
        <ul className="sale-info">
          <li>List Price: $200</li>
          <li>On Sale: $189</li>
          Qty: <input type="text" ref="qty" /><button type="submit" onClick={this.handleClick}> Purchase</button>
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = CreateOrder;